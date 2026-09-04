# Girl part / state / skin — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Cho phép kéo thả `Item` vào ba vùng Head / Body / Leg của `Girl`, đổi state thân (Yellow / Fat / Thin), và build lại skin + chạy animation tương ứng trên một `SkeletonGraphic` duy nhất.

**Architecture:** `Item` chỉ lo kéo thả và đếm số lượt còn lại. `GirlDropZone` là nhãn raycast-được, cho biết vùng đó là part nào. `Girl` sở hữu toàn bộ quyết định (state, skin, animation, win/lose) sau một hàm công khai `TryAccept`. Skin luôn được dựng lại từ đầu theo `(các part đã thả, state hiện tại)` nên không phụ thuộc thứ tự thao tác của người chơi.

**Tech Stack:** Unity 6000.0.60f1, C# 9, uGUI EventSystem, Spine-Unity 4.2 (`SkeletonGraphic`), DOTween, Luna Playground.

**Spec:** `docs/superpowers/specs/2026-08-27-girl-part-state-skin-design.md`

## Global Constraints

- Unity `6000.0.60f1`. Không có Unity Test Framework trong `Packages/manifest.json` → **không viết unit test**; kiểm chứng bằng biên dịch + checklist chạy tay trong Editor. Đây là sự sai lệch có chủ đích so với quy trình TDD mặc định, vì project không có test runner.
- Lệnh kiểm chứng biên dịch (chạy từ gốc repo `D:\ProjectGitHub\PA_BrainPuzzle`):
  ```bash
  dotnet build Assembly-CSharp.csproj -v q -nologo 2>&1 | grep -E "error CS|Error\(s\)"
  ```
  Baseline trước khi bắt đầu: đúng 2 lỗi, cả hai ở `Item.cs` (`CS0246: GirlPart`, `CS0246: GirlState`).
- **Lưu ý về lỗi bị che:** `Girl.cs:122` (`_currentState` chưa khai báo) và `Girl.cs:120-127` (đọc sai field trên `List<AnimPartGirl>`) hiện **không** hiện trong output vì Roslyn dừng ở lỗi khai báo của `Item.cs` trước khi bind thân hàm. Chúng sẽ lộ ra khi lỗi `Item.cs` được sửa. Task 2 xoá hẳn đoạn code đó nên vấn đề tự biến mất.
- `Assembly-CSharp.csproj` liệt kê file bằng `<Compile Include>` tường minh và do Unity sinh ra. File `.cs` mới phải được thêm tay vào csproj thì lệnh build CLI mới thấy (Unity sẽ tự sinh lại khi mở Editor).
- Giữ nguyên, tuyệt đối không sửa: `Item.OnBeginDrag`, `Item.OnDrag`, `Item.CacheStartState`, `Item.ResetToStartState`, `Item.CompleteDrop`, `Girl.Accept`, `Girl.PlayAnimBoy`, `Girl.OnPointerClick`, struct `Girl.AnimDataBoy`.
- Không đụng `GameManager`, `GameController`, `AudioManager`, `Door`.
- Không dùng LINQ trong đường chạy runtime (codebase hiện tại không dùng; playable ad nhạy dung lượng build).
- Mọi lệnh `git add` phải chỉ đích danh đường dẫn. Repo đang có rất nhiều file Spine bị sửa không liên quan — **không bao giờ** dùng `git add -A` hoặc `git add .`.

---

## File Structure

| File | Trách nhiệm |
|---|---|
| `Assets/_Playable_/Scripts/GirlDropZone.cs` *(tạo mới)* | Nhãn raycast-được: "vùng này là part nào, của Girl nào". Không có logic. |
| `Assets/_Playable_/Scripts/Girl.cs` *(sửa lớn)* | Data `SkinRule` / `AnimRule`, state hiện tại, danh sách part đã thả, build skin, chạy animation, `TryAccept`. Win/lose giữ nguyên. |
| `Assets/_Playable_/Scripts/Item.cs` *(sửa `OnEndDrag` + fields)* | Kéo thả, danh sách lượt thả còn lại, gọi `TryAccept`. |
| `Assembly-CSharp.csproj` *(thêm 1 dòng)* | Đăng ký file mới cho lệnh build CLI. |

---

## Task 1: GirlDropZone — vùng thả raycast-được

**Files:**
- Create: `Assets/_Playable_/Scripts/GirlDropZone.cs`
- Modify: `Assembly-CSharp.csproj` (thêm một dòng `<Compile Include>` vào khối dòng 50-56)

**Interfaces:**
- Consumes: `Girl.GirlPart` (enum lồng trong `Girl`, đã tồn tại ở `Girl.cs:220-225`).
- Produces: `GirlDropZone` với `public Girl Girl { get; }` và `public Girl.GirlPart Part { get; }`. Task 3 dùng cả hai.

- [ ] **Step 1: Tạo file `Assets/_Playable_/Scripts/GirlDropZone.cs`**

```csharp
using UnityEngine;

/// <summary>
/// Vùng thả trên người Girl. Chỉ là cái nhãn raycast-được cho biết vùng này ứng với part nào —
/// không chứa logic game. Gắn lên một GameObject con của Girl có Image (alpha = 0, Raycast Target bật).
/// </summary>
[RequireComponent(typeof(RectTransform))]
public class GirlDropZone : MonoBehaviour
{
    [SerializeField] private Girl _girl;
    [SerializeField] private Girl.GirlPart _part;

    public Girl Girl => _girl;
    public Girl.GirlPart Part => _part;

    private void Reset()
    {
        _girl = GetComponentInParent<Girl>();
    }

    private void Awake()
    {
        if (_girl == null)
        {
            _girl = GetComponentInParent<Girl>();
        }

        if (_girl == null)
        {
            Debug.LogError($"[GirlDropZone] '{name}' chưa gán Girl và cũng không tìm thấy Girl ở cha.", this);
        }
    }
}
```

- [ ] **Step 2: Đăng ký file mới trong `Assembly-CSharp.csproj`**

Ngay sau dòng `<Compile Include="Assets\_Playable_\Scripts\Girl.cs" />` (dòng 53), chèn:

```xml
    <Compile Include="Assets\_Playable_\Scripts\GirlDropZone.cs" />
```

- [ ] **Step 3: Biên dịch để xác nhận file mới hợp lệ**

Run:
```bash
dotnet build Assembly-CSharp.csproj -v q -nologo 2>&1 | grep -E "error CS|Error\(s\)"
```
Expected: vẫn đúng 2 lỗi cũ ở `Item.cs` (`CS0246: GirlPart`, `CS0246: GirlState`), **không có** lỗi mới nào ở `GirlDropZone.cs`. Nếu xuất hiện lỗi ở `GirlDropZone.cs` thì dừng lại và sửa trước khi đi tiếp.

- [ ] **Step 4: Commit**

```bash
git add "Assets/_Playable_/Scripts/GirlDropZone.cs" "Assembly-CSharp.csproj"
git commit -m "feat(girl): add GirlDropZone to identify drop target part"
```

---

## Task 2: Girl — data model, build skin, TryAccept

**Files:**
- Modify: `Assets/_Playable_/Scripts/Girl.cs` (thay toàn bộ nội dung)

**Interfaces:**
- Consumes: `Spine.Skin.AddSkin(Skin)`, `Skin.Clear()`, `Skin.RemoveAttachment(int, string)`, `Skin.Attachments` (`ICollection<Skin.SkinEntry>`), `Skin.SkinEntry.SlotIndex`, `Skin.SkinEntry.Name`, `SkeletonData.FindSkin(string)`, `SkeletonData.DefaultSkin`, `Skeleton.SetSkin(Skin)`, `Skeleton.SetSlotsToSetupPose()`, `SkeletonGraphic.Skeleton`, `SkeletonGraphic.Update(float)`, `SkeletonGraphic.UpdateMesh()` — tất cả đều public, xem `Assets/Spine/Runtime/spine-csharp/Skin.cs:49,106,158,165`, `SkeletonData.cs:70,130`, `Skeleton.cs:459`, `Assets/Spine/Runtime/spine-unity/Components/SkeletonGraphic.cs:347,465,742`.
- Produces:
  - `public enum Girl.GirlPart { Head, Body, Leg }`
  - `public enum Girl.GirlState { None, Yellow, Fat, Thin }`
  - `public bool Girl.TryAccept(int itemId, GirlPart part, GirlState stateChange, bool isLose)`
  - `public bool Girl.IsStart { get; }`
  Task 3 dùng `TryAccept`, `GirlPart`, `GirlState`.

- [ ] **Step 1: Thay toàn bộ nội dung `Assets/_Playable_/Scripts/Girl.cs`**

```csharp
using System;
using System.Collections.Generic;
using DG.Tweening;
using Playable;
using Spine;
using Spine.Unity;
using UnityEngine;
using UnityEngine.EventSystems;

public class Girl : MonoBehaviour, IPointerClickHandler
{
    [SerializeField] private SkeletonGraphic _animGirl;

    [SpineAnimation(dataField: nameof(_animGirl))] [SerializeField]
    private string _animNameDefault;

    [SpineSkin(dataField: nameof(_animGirl))] [SerializeField]
    private string[] _skinDefault;

    [Header("Data")] [SerializeField] private GirlState _startState = GirlState.Yellow;

    [SerializeField] private List<SkinRule> _skinRules = new List<SkinRule>();
    [SerializeField] private List<AnimRule> _animRules = new List<AnimRule>();

    [Header("Boy")] [SerializeField] private AnimDataBoy _animBoy1;

    [SerializeField] private AnimDataBoy _animBoy2;

    /// <summary>Thứ tự duyệt part khi build skin. Cố định để kết quả không phụ thuộc thứ tự người chơi thả.</summary>
    private static readonly GirlPart[] PartOrder = { GirlPart.Head, GirlPart.Body, GirlPart.Leg };

    private readonly List<GirlPart> _dressedParts = new List<GirlPart>();
    private Skin _combinedSkin;
    private GirlState _currentState;
    private bool _isStart;

    public bool IsStart => _isStart;
    public GirlState CurrentState => _currentState;

    private void Awake()
    {
        _currentState = _startState;
    }

    private void Start()
    {
        RebuildSkin();
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        if (_isStart) return;
        _isStart = true;
        _animGirl.Initialize(false);
        _animGirl.AnimationState.SetAnimation(0, _animNameDefault, true);
    }

    /// <summary>
    /// Girl nhận một item được thả vào <paramref name="part"/>.
    /// Trả về false nghĩa là từ chối — item phải bay về chỗ cũ.
    /// </summary>
    public bool TryAccept(int itemId, GirlPart part, GirlState stateChange, bool isLose)
    {
        if (!_isStart) return false;

        if (stateChange != GirlState.None)
        {
            _currentState = stateChange;
        }

        if (!_dressedParts.Contains(part))
        {
            _dressedParts.Add(part);
        }

        RebuildSkin();
        PlayAnimGirl(itemId, part);
        Accept(isLose);
        return true;
    }

    #region Skin

    /// <summary>
    /// Dựng lại skin từ đầu: default skin + _skinDefault + skinAdded của mọi part đã thả (ở state hiện tại),
    /// sau đó trừ đi skinRemoved. Add hết rồi mới remove, và duyệt part theo PartOrder,
    /// nên kết quả chỉ phụ thuộc (_dressedParts, _currentState).
    /// </summary>
    private void RebuildSkin()
    {
        if (_animGirl == null) return;

        Skeleton skeleton = _animGirl.Skeleton;
        if (skeleton == null) return;

        SkeletonData skeletonData = skeleton.Data;

        _combinedSkin = _combinedSkin ?? new Skin("girl-combined");
        _combinedSkin.Clear();

        if (skeletonData.DefaultSkin != null)
        {
            _combinedSkin.AddSkin(skeletonData.DefaultSkin);
        }

        AddSkins(skeletonData, _skinDefault);

        for (int i = 0; i < PartOrder.Length; i++)
        {
            SkinRule rule;
            if (!_dressedParts.Contains(PartOrder[i])) continue;
            if (!TryFindSkinRule(PartOrder[i], out rule)) continue;
            AddSkins(skeletonData, rule.skinAdded);
        }

        for (int i = 0; i < PartOrder.Length; i++)
        {
            SkinRule rule;
            if (!_dressedParts.Contains(PartOrder[i])) continue;
            if (!TryFindSkinRule(PartOrder[i], out rule)) continue;
            RemoveSkins(skeletonData, rule.skinRemoved);
        }

        skeleton.SetSkin(_combinedSkin);
        skeleton.SetSlotsToSetupPose();
        _animGirl.AnimationState.Apply(skeleton);

        _animGirl.Update(0);
        _animGirl.UpdateMesh();
    }

    private void AddSkins(SkeletonData skeletonData, string[] skinNames)
    {
        if (skinNames == null) return;

        for (int i = 0; i < skinNames.Length; i++)
        {
            Skin skin = FindSkin(skeletonData, skinNames[i]);
            if (skin == null) continue;
            _combinedSkin.AddSkin(skin);
        }
    }

    /// <summary>
    /// Spine không có Skin.RemoveSkin(). Phép trừ thực hiện ở mức attachment,
    /// nhờ vậy xoá được cả attachment đến từ default skin.
    /// </summary>
    private void RemoveSkins(SkeletonData skeletonData, string[] skinNames)
    {
        if (skinNames == null) return;

        for (int i = 0; i < skinNames.Length; i++)
        {
            Skin skin = FindSkin(skeletonData, skinNames[i]);
            if (skin == null) continue;

            foreach (Skin.SkinEntry entry in skin.Attachments)
            {
                _combinedSkin.RemoveAttachment(entry.SlotIndex, entry.Name);
            }
        }
    }

    private Skin FindSkin(SkeletonData skeletonData, string skinName)
    {
        if (string.IsNullOrEmpty(skinName)) return null;

        Skin skin = skeletonData.FindSkin(skinName);
        if (skin == null)
        {
            Debug.LogWarning($"[Girl] Không tìm thấy skin '{skinName}' trong {_animGirl.name}.", this);
        }

        return skin;
    }

    private bool TryFindSkinRule(GirlPart part, out SkinRule result)
    {
        for (int i = 0; i < _skinRules.Count; i++)
        {
            if (_skinRules[i].part != part || _skinRules[i].state != _currentState) continue;
            result = _skinRules[i];
            return true;
        }

        result = default;
        return false;
    }

    #endregion

    #region Animation

    private void PlayAnimGirl(int itemId, GirlPart part)
    {
        for (int i = 0; i < _animRules.Count; i++)
        {
            AnimRule rule = _animRules[i];
            if (rule.itemId != itemId || rule.part != part || rule.state != _currentState) continue;

            _animGirl.Initialize(false);
            _animGirl.AnimationState.SetAnimation(0, rule.animationName, rule.loop);

            if (rule.audioClip != null)
            {
                AudioManager.Instance?.PlaySound(rule.audioClip);
            }

            return;
        }

        Debug.LogWarning(
            $"[Girl] Thiếu AnimRule cho itemId={itemId}, part={part}, state={_currentState}. Item vẫn được nhận, chỉ không chạy animation.",
            this);
    }

    private void PlayAnimBoy(bool isLose)
    {
        if (isLose)
        {
            _animBoy1.animBoy.Initialize(false);
            _animBoy1.animBoy.AnimationState.SetAnimation(0, _animBoy1.animationWin, true);
            _animBoy2.animBoy.Initialize(false);
            _animBoy2.animBoy.AnimationState.SetAnimation(0, _animBoy2.animationWin, true);
        }
        else
        {
            _animBoy1.animBoy.Initialize(false);
            _animBoy1.animBoy.AnimationState.SetAnimation(0, _animBoy1.animationLose, true);
            _animBoy2.animBoy.Initialize(false);
            _animBoy2.animBoy.AnimationState.SetAnimation(0, _animBoy2.animationLose, true);
        }

        DOVirtual.DelayedCall(1, () =>
        {
            _animBoy1.animBoy.Initialize(false);
            _animBoy1.animBoy.AnimationState.SetAnimation(0, _animBoy1.animationIdle, true);
            _animBoy2.animBoy.Initialize(false);
            _animBoy2.animBoy.AnimationState.SetAnimation(0, _animBoy2.animationIdle, true);
        });
    }

    public void Accept(bool isLose)
    {
        if (isLose)
        {
            PlayAnimBoy(false);
            DOVirtual.DelayedCall(2, () => { GameManager.Instance?.EndGame(); });
        }
        else
        {
            GameManager.Instance?.CountEvent();
            PlayAnimBoy(true);
        }
    }

    #endregion

    /// <summary>Skin theo (part, state) — thuộc về Girl, không phụ thuộc item nào được thả.</summary>
    [Serializable]
    public struct SkinRule
    {
        public GirlPart part;
        public GirlState state;

        [SpineSkin(dataField: nameof(_animGirl))]
        public string[] skinAdded;

        [SpineSkin(dataField: nameof(_animGirl))]
        public string[] skinRemoved;
    }

    /// <summary>Animation theo (itemId, part, state).</summary>
    [Serializable]
    public struct AnimRule
    {
        public int itemId;
        public GirlPart part;
        public GirlState state;

        [SpineAnimation(dataField: nameof(_animGirl))]
        public string animationName;

        public bool loop;

        public AudioClip audioClip;
    }

    [Serializable]
    public struct AnimDataBoy
    {
        public SkeletonGraphic animBoy;

        [SpineAnimation(dataField: nameof(animBoy))]
        public string animationIdle;

        [SpineAnimation(dataField: nameof(animBoy))]
        public string animationWin;

        [SpineAnimation(dataField: nameof(animBoy))]
        public string animationLose;
    }

    public enum GirlPart
    {
        Head,
        Body,
        Leg
    }

    public enum GirlState
    {
        None,
        Yellow,
        Fat,
        Thin
    }
}
```

Những thứ bị xoá so với bản cũ: struct `AnimDataGirl`, `AnimPartGirl`, `AnimStateGirl`; field `_animData`; các hàm `AddSkinsGirl`, `RemoveSkinGirl`, `ClearSkinsGirl`, `ApplyCombinedSkinGirl`, `PlayAnimGirl(int)`; field `_activeSkinsGirl`. Toàn bộ chức năng của chúng đã nằm trong `RebuildSkin()` / `PlayAnimGirl(int, GirlPart)`.

- [ ] **Step 2: Biên dịch**

Run:
```bash
dotnet build Assembly-CSharp.csproj -v q -nologo 2>&1 | grep -E "error CS|Error\(s\)"
```
Expected: **vẫn còn lỗi, và đó là điều đã lường trước** — `Item.cs` chưa được sửa nên còn tham chiếu tới API cũ. Danh sách lỗi chấp nhận được ở bước này, tất cả đều phải nằm trong `Item.cs`:
- `Item.cs(9,35)` và `Item.cs(10,30)`: `CS0246 GirlPart` / `GirlState`
- các lỗi phát sinh do `girl.Part`, `girl.ChangeState`, `girl.PlayAnimGirl(_id)` không còn tồn tại

Nếu có **bất kỳ** lỗi nào nằm trong `Girl.cs` hoặc `GirlDropZone.cs` → dừng, sửa `Girl.cs` trước khi đi tiếp.

- [ ] **Step 3: Commit**

```bash
git add "Assets/_Playable_/Scripts/Girl.cs"
git commit -m "feat(girl): rebuild skin from (dressed parts, state) and expose TryAccept"
```

---

## Task 3: Item — lượt thả nhiều lần theo part

**Files:**
- Modify: `Assets/_Playable_/Scripts/Item.cs` (thay toàn bộ nội dung)

**Interfaces:**
- Consumes: `GirlDropZone.Girl`, `GirlDropZone.Part` (Task 1); `Girl.TryAccept(int, Girl.GirlPart, Girl.GirlState, bool)`, `Girl.GirlPart`, `Girl.GirlState` (Task 2).
- Produces: `Item.DropStep { Girl.GirlPart part; Girl.GirlState stateChange; }` — chỉ dùng nội bộ và trên inspector.

- [ ] **Step 1: Thay toàn bộ nội dung `Assets/_Playable_/Scripts/Item.cs`**

```csharp
using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

[RequireComponent(typeof(RectTransform))]
public class Item : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    [SerializeField] private int _id;

    /// <summary>Số lượt kéo thả của item này. Mỗi lượt chỉ định part cần thả vào; thứ tự tùy ý.</summary>
    [SerializeField] private List<DropStep> _dropSteps = new List<DropStep>();

    [SerializeField] private bool _isLose;

    private readonly List<DropStep> _remainingSteps = new List<DropStep>();
    private readonly List<RaycastResult> _raycastResults = new List<RaycastResult>();

    private RectTransform _rectTransform;
    private Transform _originalParent;
    private int _originalSiblingIndex;
    private Vector3 _originalWorldPosition;
    private bool _isPlaced;

    private void Awake()
    {
        _rectTransform = GetComponent<RectTransform>();

        // Copy sang list runtime để list serialize trên inspector không bị sửa lúc chạy.
        _remainingSteps.Clear();
        _remainingSteps.AddRange(_dropSteps);

        CacheStartState();
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        if (_isPlaced)
        {
            return;
        }

        CacheStartState();

        GameController.Instance.StopTutorialHand();
    }

    public void OnDrag(PointerEventData eventData)
    {
        if (_isPlaced)
        {
            return;
        }

        _rectTransform.position += (Vector3)eventData.delta;
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        if (_isPlaced)
        {
            return;
        }

        GirlDropZone zone = GetDropZone(eventData);
        if (zone == null || zone.Girl == null)
        {
            ResetToStartState();
            return;
        }

        int stepIndex = FindStepIndex(zone.Part);
        if (stepIndex < 0)
        {
            ResetToStartState();
            return;
        }

        if (!zone.Girl.TryAccept(_id, zone.Part, _remainingSteps[stepIndex].stateChange, _isLose))
        {
            ResetToStartState();
            return;
        }

        _remainingSteps.RemoveAt(stepIndex);

        if (_remainingSteps.Count <= 0)
        {
            CompleteDrop();
        }
        else
        {
            ResetToStartState();
        }
    }

    private int FindStepIndex(Girl.GirlPart part)
    {
        for (int i = 0; i < _remainingSteps.Count; i++)
        {
            if (_remainingSteps[i].part == part)
            {
                return i;
            }
        }

        return -1;
    }

    private void CompleteDrop()
    {
        _isPlaced = true;
        gameObject.SetActive(false);
    }

    private void CacheStartState()
    {
        _originalParent = _rectTransform.parent;
        _originalSiblingIndex = _rectTransform.GetSiblingIndex();
        _originalWorldPosition = _rectTransform.position;
    }

    private void ResetToStartState()
    {
        _rectTransform.SetParent(_originalParent, true);
        _rectTransform.SetSiblingIndex(_originalSiblingIndex);
        _rectTransform.position = _originalWorldPosition;
    }

    private GirlDropZone GetDropZone(PointerEventData eventData)
    {
        if (EventSystem.current == null)
        {
            return null;
        }

        _raycastResults.Clear();
        EventSystem.current.RaycastAll(eventData, _raycastResults);

        foreach (RaycastResult result in _raycastResults)
        {
            GirlDropZone zone = result.gameObject.GetComponentInParent<GirlDropZone>();
            if (zone != null)
            {
                return zone;
            }
        }

        return null;
    }

    /// <summary>Một lượt kéo thả: thả vào part nào, và có đổi state của Girl không.</summary>
    [Serializable]
    public struct DropStep
    {
        public Girl.GirlPart part;

        /// <summary>None = không đổi state. Thường chỉ lượt thả vào Body mới đặt giá trị khác None.</summary>
        public Girl.GirlState stateChange;
    }
}
```

- [ ] **Step 2: Biên dịch — đây là cổng chính của cả plan**

Run:
```bash
dotnet build Assembly-CSharp.csproj -v q -nologo 2>&1 | grep -E "error CS|Error\(s\)"
```
Expected: `0 Error(s)`, không còn dòng `error CS` nào.

- [ ] **Step 3: Xác nhận không phát sinh warning mới trong code của mình**

Run:
```bash
dotnet build Assembly-CSharp.csproj -v q -nologo 2>&1 | grep "_Playable_"
```
Expected: không có dòng nào. (Các warning `CS0618` của Spine là có sẵn từ trước, không liên quan.)

- [ ] **Step 4: Commit**

```bash
git add "Assets/_Playable_/Scripts/Item.cs"
git commit -m "feat(item): support multi-step drops targeting Girl parts"
```

---

## Task 4: Đấu nối scene và nghiệm thu bằng tay

Task này chạy trong Unity Editor, không có phần nào tự động hoá được. Người thực hiện là con người.

**Files:**
- Modify: `Assets/_Playable_/Scenes/Gameplay.unity` (qua Unity Editor, không sửa text trực tiếp)

**Interfaces:**
- Consumes: `GirlDropZone` (Task 1), các field inspector mới của `Girl` (Task 2) và `Item` (Task 3).
- Produces: scene chạy được. Không có API nào cho task sau.

- [ ] **Step 1: Mở project trong Unity, chờ import xong**

Unity sẽ sinh `.meta` cho `GirlDropZone.cs` và sinh lại các file `.csproj`. Console phải sạch lỗi biên dịch.

- [ ] **Step 2: Tạo 3 vùng thả**

Trong `Gameplay.unity`, dưới GameObject có component `Girl`, tạo 3 GameObject con:

| Tên | Component | Cấu hình |
|---|---|---|
| `DropZone_Head` | `Image` + `GirlDropZone` | `Image.Color.a = 0`, `Raycast Target ✓`, `RectTransform` phủ vùng đầu, `_part = Head` |
| `DropZone_Body` | `Image` + `GirlDropZone` | như trên, phủ vùng thân, `_part = Body` |
| `DropZone_Leg`  | `Image` + `GirlDropZone` | như trên, phủ vùng chân, `_part = Leg` |

Field `_girl` tự điền nhờ `Reset()` khi thêm component; kiểm tra lại đã trỏ đúng. Ba vùng không được chồng lên nhau — `RaycastAll` trả về theo thứ tự vẽ và code lấy vùng đầu tiên tìm thấy.

- [ ] **Step 3: Điền `_skinRules` trên Girl**

Một dòng cho mỗi cặp `(part, state)` thực sự dùng. Ví dụ với 3 part × 3 state đầy đủ là 9 dòng; chỉ điền những dòng cần. `skinAdded` = skin mặc vào, `skinRemoved` = skin cần gỡ (kể cả skin đến từ default skin của Spine). Đặt `_startState` đúng trạng thái ban đầu của nhân vật.

- [ ] **Step 4: Điền `_animRules` trên Girl**

Một dòng cho mỗi `(itemId, part, state)` cần chạy animation. `itemId` phải khớp `_id` của `Item` tương ứng. Thiếu dòng nào thì lúc chạy Console sẽ in warning kèm đủ ba khoá — dùng warning đó làm danh sách việc còn thiếu.

- [ ] **Step 5: Cấu hình từng Item**

Với mỗi `Item`: đặt `_id`, rồi thêm phần tử vào `_dropSteps` — mỗi phần tử là một lượt kéo thả. Lượt thả vào Body đặt `stateChange` = `Yellow` / `Fat` / `Thin`; các lượt khác để `None`. Item gây thua đánh dấu `_isLose`.

- [ ] **Step 6: Chạy checklist nghiệm thu (mục 7 của spec)**

Vào Play mode và kiểm tra lần lượt:

1. [ ] Console sạch, không lỗi biên dịch, không warning mới.
2. [ ] Chưa click vào Girl → thả item vào vùng nào cũng bị từ chối, item bay về chỗ cũ.
3. [ ] Click Girl để bắt đầu → animation mặc định `_animNameDefault` chạy.
4. [ ] Thả item ra ngoài Girl → bay về chỗ cũ, không có gì thay đổi.
5. [ ] Thả item vào đúng part → skin đổi, animation đúng dòng data, âm thanh phát.
6. [ ] Thả item vào part không nằm trong lượt còn lại của nó → bay về chỗ cũ, không đổi gì.
7. [ ] Item có 2 lượt: sau lượt 1 item vẫn còn trên màn hình; hết lượt cuối mới ẩn.
8. [ ] Thả Head trước, rồi thả Body làm đổi state → skin của Head cập nhật theo state mới.
9. [ ] Thả Body trước, rồi thả Head → kết quả hình ảnh **giống hệt** trường hợp 8.
10. [ ] `skinRemoved` xoá được attachment vốn đến từ default skin.
11. [ ] Item `_isLose` → chạy nhánh thua, `EndGame()` sau 2 giây.

- [ ] **Step 7: Commit scene**

```bash
git add "Assets/_Playable_/Scenes/Gameplay.unity"
git commit -m "chore(scene): wire Girl drop zones and part/state data"
```

Nếu Unity có sinh thêm `.meta` cho file mới, thêm nó vào cùng commit:

```bash
git add "Assets/_Playable_/Scripts/GirlDropZone.cs.meta"
```

---

## Ngoài phạm vi

- Không tạo ScriptableObject cho data (đã cân nhắc và loại trong brainstorm — thừa cho một playable ad).
- Không thêm hiệu ứng snap / tween khi thả trúng.
- Không đụng tutorial hand, `GameManager`, `GameController`, `AudioManager`, `Door`.
- Không dọn các thay đổi Spine đang lơ lửng trong working tree.
