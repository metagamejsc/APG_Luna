using UnityEngine;

public class Paper : MonoBehaviour
{
    private static Paper _activePaper;

    private Camera _mainCamera;
    [SerializeField] private Transform _startPosition;
    [SerializeField] private BoxCollider2D _boxCollider;
    [SerializeField] private AudioSource _audio;
    [SerializeField] private float _grabPadding = 0.35f;
    [SerializeField] private float _dropPadding = 0.2f;

    private Vector3 _dragOffset;
    private float _screenPointZ;
    private bool _isDragging;
    private Collider2D _paperCollider;
    private ObjectLevel _currentTarget;
    private bool _isAvailable;
    private bool _isConsumed;

    public bool IsAvailable => _isAvailable;
    public bool IsConsumed => _isConsumed;

    private void Awake()
    {
        _mainCamera = Camera.main;
        _paperCollider = GetComponent<Collider2D>();
    }
    
    private void OnEnable()
    {
        _isConsumed = false;
        _currentTarget = null;
        transform.position = GetStartPosition();
    }

    private void OnDisable()
    {
        if (_activePaper == this)
        {
            _activePaper = null;
        }

        _isDragging = false;
        _currentTarget = null;
        transform.position = GetStartPosition();
    }

    private void Update()
    {
        if (_mainCamera == null)
        {
            _mainCamera = Camera.main;
        }

        if (_mainCamera == null)
        {
            return;
        }

        if (!_isDragging)
        {
            TryBeginDrag();
            return;
        }

        if (IsPointerReleased())
        {
            ReleasePaper();
            return;
        }

        if (!IsPointerHeld())
        {
            return;
        }

        transform.position = GetPointerWorldPosition() + _dragOffset;
        _currentTarget = FindCurrentTargetObject();
    }

    public void SetAvailable(bool available)
    {
        _isAvailable = available;

        if (_paperCollider != null)
        {
            _paperCollider.enabled = available;
        }
    }

    private void TryBeginDrag()
    {
        if (_activePaper != null || !_isAvailable || !IsPointerBegan() || _paperCollider == null || IsCreativeMode())
        {
            return;
        }

        _screenPointZ = _mainCamera.WorldToScreenPoint(transform.position).z;
        var pointerWorldPosition = GetPointerWorldPosition();
        var playable = Level19Playable.Instance;
        if (!CanGrabFromPoint(pointerWorldPosition) &&
            (playable == null || !playable.CanGrabTopPaperFromPoint(this, pointerWorldPosition)))
        {
            return;
        }

        _activePaper = this;
        _isDragging = true;
        _dragOffset = transform.position - pointerWorldPosition;
        SetBoxColliderActive(true);
        if (_audio != null)
        {
            _audio.Play();
        }
    }


    private Vector3 GetPointerWorldPosition()
    {
        var screenPoint = GetPointerScreenPosition();
        screenPoint.z = _screenPointZ;
        return _mainCamera.ScreenToWorldPoint(screenPoint);
    }

    private Vector3 GetPointerScreenPosition()
    {
        if (Input.touchCount > 0)
        {
            return Input.GetTouch(0).position;
        }

        return Input.mousePosition;
    }

    private bool IsPointerHeld()
    {
        if (Input.touchCount > 0)
        {
            var phase = Input.GetTouch(0).phase;
            return phase == TouchPhase.Began || phase == TouchPhase.Moved || phase == TouchPhase.Stationary;
        }

        return Input.GetMouseButton(0);
    }

    private bool IsPointerBegan()
    {
        if (Input.touchCount > 0)
        {
            return Input.GetTouch(0).phase == TouchPhase.Began;
        }

        return Input.GetMouseButtonDown(0);
    }

    private bool IsPointerReleased()
    {
        if (Input.touchCount > 0)
        {
            var phase = Input.GetTouch(0).phase;
            return phase == TouchPhase.Ended || phase == TouchPhase.Canceled;
        }

        return Input.GetMouseButtonUp(0);
    }

    private bool IsCreativeMode()
    {
        return LunaManager.ins != null && LunaManager.ins.isCreative;
    }

    private void ReturnToStartPosition()
    {
        if (_activePaper == this)
        {
            _activePaper = null;
        }

        _isDragging = false;
        SetBoxColliderActive(false);
        var startPosition = GetStartPosition();
        transform.position = startPosition;
    }

    private void ReleasePaper()
    {
        transform.position = GetPointerWorldPosition() + _dragOffset;
        _currentTarget = FindCurrentTargetObject();
        var targetObject = _currentTarget;

        if (targetObject == null || targetObject.IsDone)
        {
            ReturnToStartPosition();
            return;
        }

        targetObject.Collect();
        ConsumePaper();
    }

    private void ConsumePaper()
    {
        if (_activePaper == this)
        {
            _activePaper = null;
        }

        _isDragging = false;
        _isConsumed = true;
        _currentTarget = null;
        SetBoxColliderActive(false);
        SetAvailable(false);
        gameObject.SetActive(false);
    }

    private void SetBoxColliderActive(bool isActive)
    {
        if (_boxCollider != null)
        {
            _boxCollider.enabled = isActive;
        }
    }

    private ObjectLevel FindCurrentTargetObject()
    {
        var playable = Level19Playable.Instance;
        var objectLevels = playable != null ? playable.GetObjects() : null;
        if (objectLevels == null)
        {
            return null;
        }

        ObjectLevel bestTarget = null;
        var bestSortingOrder = int.MinValue;
        var bestOverlapScore = float.MinValue;
        var paperBounds = GetDropBounds();

        for (int i = 0; i < objectLevels.Count; i++)
        {
            var targetObject = objectLevels[i];
            if (targetObject == null || targetObject.IsDone)
            {
                continue;
            }

            var overlapScore = GetTargetOverlapScore(targetObject, paperBounds);
            if (overlapScore <= 0f)
            {
                continue;
            }

            var sortingOrder = GetSortingOrder(targetObject);
            if (bestTarget == null ||
                sortingOrder > bestSortingOrder ||
                (sortingOrder == bestSortingOrder && overlapScore > bestOverlapScore))
            {
                bestTarget = targetObject;
                bestSortingOrder = sortingOrder;
                bestOverlapScore = overlapScore;
            }
        }

        return bestTarget;
    }

    private static int GetSortingOrder(ObjectLevel targetObject)
    {
        return targetObject != null ? targetObject.SortingOrder : int.MinValue;
    }

    public bool CanGrabFromPoint(Vector3 pointerWorldPosition)
    {
        if (_paperCollider == null)
        {
            return false;
        }

        var expandedBounds = GetGrabBounds();
        pointerWorldPosition.z = expandedBounds.center.z;
        return expandedBounds.Contains(pointerWorldPosition);
    }

    private Bounds GetDropBounds()
    {
        var bounds = _paperCollider.bounds;
        var padding = Mathf.Max(0f, _dropPadding);
        bounds.Expand(new Vector3(padding, padding, 0f));
        return bounds;
    }

    private float GetTargetOverlapScore(ObjectLevel targetObject, Bounds paperBounds)
    {
        if (targetObject == null)
        {
            return 0f;
        }

        var targetColliders = targetObject.GetComponentsInChildren<Collider2D>(true);
        var bestScore = 0f;
        for (int i = 0; i < targetColliders.Length; i++)
        {
            var targetCollider = targetColliders[i];
            if (targetCollider == null || targetCollider == _paperCollider || !targetCollider.enabled || !targetCollider.gameObject.activeInHierarchy)
            {
                continue;
            }

            var targetBounds = targetCollider.bounds;
            if (!paperBounds.Intersects(targetBounds))
            {
                continue;
            }

            var intersectMinX = Mathf.Max(paperBounds.min.x, targetBounds.min.x);
            var intersectMinY = Mathf.Max(paperBounds.min.y, targetBounds.min.y);
            var intersectMaxX = Mathf.Min(paperBounds.max.x, targetBounds.max.x);
            var intersectMaxY = Mathf.Min(paperBounds.max.y, targetBounds.max.y);
            var overlapWidth = intersectMaxX - intersectMinX;
            var overlapHeight = intersectMaxY - intersectMinY;
            if (overlapWidth <= 0f || overlapHeight <= 0f)
            {
                continue;
            }

            var overlapArea = overlapWidth * overlapHeight;
            if (overlapArea > bestScore)
            {
                bestScore = overlapArea;
            }
        }

        return bestScore;
    }

    private Bounds GetGrabBounds()
    {
        var bounds = _paperCollider.bounds;
        var padding = Mathf.Max(0f, _grabPadding);
        bounds.Expand(new Vector3(padding, padding, 0f));
        return bounds;
    }

    private Vector3 GetStartPosition()
    {
        return _startPosition != null ? _startPosition.position : transform.position;
    }
}
