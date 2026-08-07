# Level 37 — Alternate lose/win triggers (click-to-lose boy, drag-out item)

## Context

`TargetLevel37` / `ItemLevel37` implement a drag-and-drop puzzle: dragging an
`ItemLevel37` onto the shared `TargetLevel37` collider makes one "boy" play a
lose animation and all other alive boys play a win animation.

Two new interaction sources need to trigger the same lose/win sequence:

1. A boy that the player must **tap directly** (no item involved) to make it lose.
2. An item that only needs to be **dragged away from its start position and
   released** (it does not need to land on the target) to make its matching
   boy lose.

While investigating, a pre-existing inconsistency was found between
`TryAccept` (order-based, via `_isBoyUsed`) and `OnItemAccepted` (type-based,
via `Root.activeSelf`) in the current `TargetLevel37.cs`. This spec also fixes
that inconsistency, since both new features build on the same "find the boy
that should lose" logic.

## Goals

- Unify boy-matching logic in `TargetLevel37` around `TargetType`, used
  consistently by all three trigger sources (item-drop, click, drag-out).
- Add a `IsClickable` flag per boy; tapping the shared target collider makes
  that boy lose (assumption: exactly one clickable boy is alive at a time).
- Add drag-out behavior to `ItemLevel37`: release past a distance threshold
  (item's own collider size) without being accepted by a target triggers the
  matching boy's lose animation and completes the item immediately (no
  return-to-start animation).
- Preserve `_isKeepLastBoy` semantics across all three trigger sources.
- No behavior change for any other `Item` subclass in the game.

## Non-goals

- Solving overlap between a clickable target's tap zone and an item's drag
  collider (documented as a known limitation, not handled).
- Any automated test suite (none exists for Unity gameplay in this project).

## Design

### 1. Unify boy lookup/state in `TargetLevel37`

- Remove `_isBoyUsed` (bool[]) and `FindNextBoyIndex()`.
- Add `FindBoyIndexByType(TargetType type)`: iterate `boyInfos`, return the
  index where `Type == type && Root != null && Root.activeSelf`, else `-1`.
  Applies the existing `_isKeepLastBoy` guard (skip if only one boy alive).
- `CountAliveBoys()` counts entries where `Root.activeSelf` is true.
- `TryAccept` calls `FindBoyIndexByType(itemLevel37.Type)` instead of the
  removed `FindNextBoyIndex()`, matching `OnItemAccepted`'s existing rule.
- Extract the "make one boy lose, all other alive boys win" body of
  `OnItemAccepted` into `private void TriggerBoyLose(int loseIndex)`. Reused
  by `OnItemAccepted`, the new click handler, and the new public API for
  drag-out items.

### 2. Click-to-lose boy

- `BoyInfo` gets a new field: `public bool IsClickable;`.
- Assumption (confirmed): at most one boy has `IsClickable == true` and is
  alive at any given time in a level.
- `TargetLevel37` adds:
  - A cached `Camera` reference (`Camera.main`, cached in
    `OnTargetInitialized`).
  - `private void Update()`: polls for a new press this frame (touch
    `TouchPhase.Began` or `Input.GetMouseButtonDown(0)`, mirroring the
    pattern in `Item.TryGetPointerDown`, duplicated locally since that method
    is private to `Item`). Converts the press position to world space and
    checks it against `TargetCollider` via the existing internal
    `LunaBox2DGeometry.ContainsPoint` helper.
  - `FindClickableBoyIndex()`: returns the index of the alive boy with
    `IsClickable == true`, or `-1`.
  - On a press inside the target collider with a valid clickable boy index,
    call `TriggerBoyLose(index)`.

### 3. Drag-out item (no target drop required)

- `Item.cs` (shared base, used by every item type in the game) gets one
  minimal, additive, backward-compatible hook:
  ```csharp
  protected virtual bool ShouldSkipReturnAnimation() => false;
  ```
  In `EndDrag()`, when `wasAccepted` is `false`:
  ```csharp
  OnDroppedOutsideTarget();

  if (ShouldSkipReturnAnimation())
  {
      gameObject.SetActive(false);
      return;
  }

  returnRoutine = StartCoroutine(ReturnToStart());
  ```
  Default (`false`) preserves current behavior for every other item exactly
  as-is. `gameObject.SetActive(false)` only ever happens here *instead of*
  starting the return coroutine, never after — so `StartCoroutine` is never
  called on an already-inactive GameObject (avoids a Unity console error,
  which matters for playable-ad QA scans).

- `ItemLevel37` gets:
  - `[SerializeField] private bool _isTriggerOnDragOut;`
  - `[SerializeField] private TargetLevel37 _dragOutTarget;` (wired in the
    Inspector, no runtime lookup/search needed).
  - `private bool _hasTriggeredDragOut;` (guards against multiple triggers).
  - `private bool _shouldSkipReturnAnimation;` backing the override below.
  - Override `OnItemReleased(bool wasAccepted)`: when `!wasAccepted &&
    _isTriggerOnDragOut && !_hasTriggeredDragOut` and the release position is
    at least one collider-size away from `StartPosition` (see below), set
    `_hasTriggeredDragOut = true`, call
    `_dragOutTarget?.TriggerLoseByType(_targetType)`,
    `GameManager.Instance.CountEvent()`, then set
    `_shouldSkipReturnAnimation = true` and return early (skip the normal
    "reset visuals" branch for rejected drops).
  - Override `protected override bool ShouldSkipReturnAnimation() =>
    _shouldSkipReturnAnimation;`
  - Distance check: `Vector3.Distance(transform.position, StartPosition) >=
    threshold`, where `threshold = Mathf.Max(size.x * |lossyScale.x|, size.y *
    |lossyScale.y|)` computed from the item's own `ItemCollider.size`.

- `TargetLevel37` gets one new public method:
  ```csharp
  public void TriggerLoseByType(TargetType type)
  {
      int index = FindBoyIndexByType(type);
      if (index < 0) return;
      TriggerBoyLose(index);
  }
  ```

### Data flow summary

All three sources converge on the same two calls:
`FindBoyIndexByType(type)` (or `FindClickableBoyIndex()` for the click path)
→ `TriggerBoyLose(index)`. This guarantees `_isKeepLastBoy` and the win/lose
animation sequencing behave identically regardless of trigger source.

## Known limitations

- If a clickable boy's tap zone overlaps an item's drag collider on screen,
  pressing there in the same frame could both start dragging the item and
  trigger the click-to-lose boy. Not handled; assumed non-issue for Level 37's
  actual layout.
- Click detection duplicates a small amount of pointer-down polling logic
  already present (privately) in `Item.cs`, since there is no shared input
  utility to call into. Accepted as a small, contained duplication rather
  than refactoring the shared input handling.

## Files touched

- `Assets/_Playable_/Scripts/Core/Item.cs` — one new virtual hook + minimal
  `EndDrag` change.
- `Assets/_Playable_/Scripts/TargetLevel37.cs` — unify boy lookup, add
  click-to-lose, add `TriggerLoseByType`.
- `Assets/_Playable_/Scripts/ItemLevel37.cs` — add drag-out trigger fields
  and logic.
