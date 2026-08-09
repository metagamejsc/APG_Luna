using System.Collections;
using Playable;
using UnityEngine;

[RequireComponent(typeof(BoxCollider2D))]
public class Item : MonoBehaviour
{
    [Header("Drop")]
    [SerializeField, Min(0f)] private float returnDuration = 0.2f;
    [SerializeField] private BoxCollider2D boxCollider;

    [Header("Audio")] [SerializeField] private AudioClip pressSound;

    private Camera inputCamera;
    private static Item activeItem;
    private Vector3 startPosition;
    private Vector3 dragOffset;
    private int activeFingerId = -1;
    private bool isDragging;
    private Coroutine returnRoutine;

    protected BoxCollider2D ItemCollider => boxCollider;
    protected AudioClip PressSound => pressSound;
    protected Vector3 StartPosition => startPosition;
    protected bool IsDragging => isDragging;

    private void Awake()
    {
        boxCollider = GetComponent<BoxCollider2D>();
        inputCamera = Camera.main;
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

        Vector3 worldPosition = ScreenToWorld(screenPosition);
        if (!LunaBox2DGeometry.ContainsPoint(boxCollider, worldPosition))
            return;

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
        bool wasAccepted = Target.TryAcceptAny(this, boxCollider, out acceptedTarget);
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

    private void MoveTo([Bridge.Ref] Vector3 position)
    {
        transform.position = position;
    }

    private Vector3 ScreenToWorld([Bridge.Ref] Vector2 screenPosition)
    {
        float depth = inputCamera.WorldToScreenPoint(transform.position).z;
        Vector3 worldPosition = inputCamera.ScreenToWorldPoint(
            new Vector3(screenPosition.x, screenPosition.y, depth));
        worldPosition.z = transform.position.z;
        return worldPosition;
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

        screenPosition = default(UnityEngine.Vector2);
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

        screenPosition = default(UnityEngine.Vector2);
        released = true;
        return true;
    }

    protected virtual void OnDragStarted()
    {
    }

    protected virtual void OnItemInitialized()
    {
    }

    protected virtual void OnDragging([Bridge.Ref] Vector3 worldPosition)
    {
    }

    protected virtual void OnItemHeld([Bridge.Ref] Vector3 worldPosition)
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

internal static class LunaBox2DGeometry
{
    public static bool ContainsPoint(BoxCollider2D box, [Bridge.Ref] Vector2 point)
    {
        Vector2 minimum;
        Vector2 maximum;
        GetWorldBounds(box, out minimum, out maximum);

        return point.x >= minimum.x && point.x <= maximum.x &&
               point.y >= minimum.y && point.y <= maximum.y;
    }

    public static bool Intersects(BoxCollider2D first, BoxCollider2D second)
    {
        Vector2 firstMinimum;
        Vector2 firstMaximum;
        Vector2 secondMinimum;
        Vector2 secondMaximum;
        GetWorldBounds(first, out firstMinimum, out firstMaximum);
        GetWorldBounds(second, out secondMinimum, out secondMaximum);

        return firstMinimum.x <= secondMaximum.x && firstMaximum.x >= secondMinimum.x &&
               firstMinimum.y <= secondMaximum.y && firstMaximum.y >= secondMinimum.y;
    }

    private static void GetWorldBounds(BoxCollider2D box, out Vector2 minimum, out Vector2 maximum)
    {
        Transform boxTransform = box.transform;
        Vector3 scale = boxTransform.lossyScale;
        Vector2 halfSize = new Vector2(
            box.size.x * Mathf.Abs(scale.x) * 0.5f,
            box.size.y * Mathf.Abs(scale.y) * 0.5f);

        float angle = boxTransform.eulerAngles.z * Mathf.Deg2Rad;
        float cosine = Mathf.Abs(Mathf.Cos(angle));
        float sine = Mathf.Abs(Mathf.Sin(angle));
        Vector2 worldHalfSize = new Vector2(
            cosine * halfSize.x + sine * halfSize.y,
            sine * halfSize.x + cosine * halfSize.y);

        Vector3 worldCenter3D = boxTransform.TransformPoint(box.offset);
        Vector2 worldCenter = new Vector2(worldCenter3D.x, worldCenter3D.y);
        minimum = worldCenter - worldHalfSize;
        maximum = worldCenter + worldHalfSize;
    }
}
