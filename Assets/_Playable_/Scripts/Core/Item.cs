using System.Collections;
using Playable;
using UnityEngine;

[RequireComponent(typeof(RectTransform))]
public class Item : MonoBehaviour
{
    [Header("Drop")]
    [SerializeField, Min(0f)] private float returnDuration = 0.2f;
    [SerializeField] private RectTransform itemRect;

    [Header("Audio")] [SerializeField] private AudioClip pressSound;

    private Camera inputCamera;
    private RectTransform canvasRect;
    private static Item activeItem;
    private Vector3 startPosition;
    private Vector3 dragOffset;
    private int activeFingerId = -1;
    private bool isDragging;
    private Coroutine returnRoutine;

    protected RectTransform ItemRect => itemRect;
    protected AudioClip PressSound => pressSound;
    protected Vector3 StartPosition => startPosition;
    protected bool IsDragging => isDragging;

    private void Awake()
    {
        itemRect = GetComponent<RectTransform>();

        Canvas canvas = GetComponentInParent<Canvas>();
        if (canvas != null) canvas = canvas.rootCanvas;

        canvasRect = canvas != null ? canvas.transform as RectTransform : null;
        inputCamera = canvas != null && canvas.worldCamera != null ? canvas.worldCamera : Camera.main;

        startPosition = transform.position;
        OnItemInitialized();
    }

    private void OnDisable()
    {
        if (activeItem == this)
            activeItem = null;

        isDragging = false;
        activeFingerId = -1;
    }

    private void Update()
    {
        if (inputCamera == null)
            return;

        if (!isDragging)
        {
            TryBeginDrag();
            return;
        }

        UpdateDrag();
    }

    private void TryBeginDrag()
    {
        if (activeItem != null)
            return;

        Vector2 screenPosition;
        int fingerId;
        if (!TryGetPointerDown(out screenPosition, out fingerId))
            return;

        if (!LunaRectGeometry.ContainsScreenPoint(itemRect, screenPosition, inputCamera))
            return;

        Vector3 worldPosition = ScreenToWorld(screenPosition);

        if (returnRoutine != null)
        {
            StopCoroutine(returnRoutine);
            returnRoutine = null;
        }

        activeItem = this;
        isDragging = true;
        activeFingerId = fingerId;
        dragOffset = transform.position - worldPosition;

        PlayPressSound();
        OnDragStarted();
    }

    protected virtual void PlayPressSound()
    {
        if (pressSound != null && AudioManager.Instance != null)
            AudioManager.Instance.PlaySound(pressSound);
    }

    private void UpdateDrag()
    {
        Vector2 screenPosition;
        bool released;
        if (!TryGetPointerPosition(activeFingerId, out screenPosition, out released))
            return;

        if (released)
        {
            MoveTo(ScreenToWorld(screenPosition) + dragOffset);
            EndDrag();
            return;
        }

        Vector3 nextPosition = ScreenToWorld(screenPosition) + dragOffset;
        MoveTo(nextPosition);
        OnItemHeld(nextPosition);
        OnDragging(nextPosition);
    }

    private void EndDrag()
    {
        isDragging = false;
        activeFingerId = -1;
        activeItem = null;

        Target acceptedTarget;
        bool wasAccepted = Target.TryAcceptAny(this, itemRect, out acceptedTarget);
        OnItemReleased(wasAccepted);
        OnDragReleased(wasAccepted);

        if (wasAccepted)
        {
            OnDroppedOnTarget(acceptedTarget);
            gameObject.SetActive(false);
            return;
        }

        OnDroppedOutsideTarget();

        if (ShouldSkipReturnAnimation())
        {
            gameObject.SetActive(false);
            return;
        }

        returnRoutine = StartCoroutine(ReturnToStart());
    }

    private IEnumerator ReturnToStart()
    {
        Vector3 returnFrom = transform.position;
        float elapsed = 0f;

        while (elapsed < returnDuration && returnDuration > 0f)
        {
            elapsed += Time.deltaTime;
            float progress = Mathf.Clamp01(elapsed / returnDuration);
            progress = progress * progress * (3f - 2f * progress);
            MoveTo(Vector3.LerpUnclamped(returnFrom, startPosition, progress));
            yield return null;
        }

        MoveTo(startPosition);
        returnRoutine = null;
        OnReturnedToStart();
    }

    private void MoveTo(Vector3 position)
    {
        transform.position = position;
    }

    // Projects a screen point onto the Canvas plane (or this item's own plane as a fallback when no
    // parent Canvas was found) and returns the resulting world position.
    private Vector3 ScreenToWorld(Vector2 screenPosition)
    {
        RectTransform plane = canvasRect != null ? canvasRect : itemRect;
        return LunaRectGeometry.ScreenPointToWorldPoint(plane, screenPosition, inputCamera, transform.position);
    }

    private static bool TryGetPointerDown(out Vector2 screenPosition, out int fingerId)
    {
        for (int index = 0; index < Input.touchCount; index++)
        {
            Touch touch = Input.GetTouch(index);
            if (touch.phase != TouchPhase.Began)
                continue;

            screenPosition = touch.position;
            fingerId = touch.fingerId;
            return true;
        }

        if (Input.touchCount == 0 && Input.GetMouseButtonDown(0))
        {
            screenPosition = Input.mousePosition;
            fingerId = -1;
            return true;
        }

        screenPosition = default;
        fingerId = -1;
        return false;
    }

    private static bool TryGetPointerPosition(int fingerId, out Vector2 screenPosition, out bool released)
    {
        if (fingerId < 0)
        {
            screenPosition = Input.mousePosition;
            released = Input.GetMouseButtonUp(0) || !Input.GetMouseButton(0);
            return true;
        }

        for (int index = 0; index < Input.touchCount; index++)
        {
            Touch touch = Input.GetTouch(index);
            if (touch.fingerId != fingerId)
                continue;

            screenPosition = touch.position;
            released = touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled;
            return true;
        }

        screenPosition = default;
        released = true;
        return true;
    }

    protected virtual void OnDragStarted()
    {
    }

    protected virtual void OnItemInitialized()
    {
    }

    protected virtual void OnDragging(Vector3 worldPosition)
    {
    }

    protected virtual void OnItemHeld(Vector3 worldPosition)
    {
    }

    protected virtual void OnDragReleased(bool wasAccepted)
    {
    }

    protected virtual void OnItemReleased(bool wasAccepted)
    {
    }

    protected virtual void OnDroppedOnTarget(Target acceptedTarget)
    {
    }

    protected virtual void OnDroppedOutsideTarget()
    {
    }

    protected virtual void OnReturnedToStart()
    {
    }

    protected virtual bool ShouldSkipReturnAnimation()
    {
        return false;
    }
}

// Replaces BoxCollider2D-based hit-testing with RectTransform-based equivalents, driven entirely by
// polled Input (no OnDrag/EventSystem interfaces — those don't work reliably when exported via Luna).
internal static class LunaRectGeometry
{
    private static readonly Vector3[] Corners = new Vector3[4];

    public static bool ContainsScreenPoint(RectTransform rect, Vector2 screenPoint, Camera camera)
    {
        return rect != null && RectTransformUtility.RectangleContainsScreenPoint(rect, screenPoint, camera);
    }

    public static bool Overlaps(RectTransform first, RectTransform second)
    {
        if (first == null || second == null) return false;

        Rect firstBounds = GetWorldAabb(first);
        Rect secondBounds = GetWorldAabb(second);

        return firstBounds.xMin <= secondBounds.xMax && firstBounds.xMax >= secondBounds.xMin &&
               firstBounds.yMin <= secondBounds.yMax && firstBounds.yMax >= secondBounds.yMin;
    }

    // Projects screenPoint onto the plane of planeRect, returning the resulting world position.
    // Falls back to the given position if the projection fails (camera facing away from the plane).
    public static Vector3 ScreenPointToWorldPoint(RectTransform planeRect, Vector2 screenPoint, Camera camera,
        Vector3 fallback)
    {
        Vector3 worldPoint;
        if (planeRect != null &&
            RectTransformUtility.ScreenPointToWorldPointInRectangle(planeRect, screenPoint, camera, out worldPoint))
            return worldPoint;

        return fallback;
    }

    private static Rect GetWorldAabb(RectTransform rect)
    {
        rect.GetWorldCorners(Corners);

        float xMin = Mathf.Min(Corners[0].x, Corners[1].x, Corners[2].x, Corners[3].x);
        float xMax = Mathf.Max(Corners[0].x, Corners[1].x, Corners[2].x, Corners[3].x);
        float yMin = Mathf.Min(Corners[0].y, Corners[1].y, Corners[2].y, Corners[3].y);
        float yMax = Mathf.Max(Corners[0].y, Corners[1].y, Corners[2].y, Corners[3].y);

        return Rect.MinMaxRect(xMin, yMin, xMax, yMax);
    }
}
