using UnityEngine;

[RequireComponent(typeof(Collider2D))]
public class ItemMovement : MonoBehaviour
{
    [Header("Drag")] [SerializeField] private ItemStackManager stackManager;
    [SerializeField] private int id;
    [SerializeField] private bool _enableDebugLog = true;

    [Header("Target Item")] [SerializeField]
    private TargetItem _targetItem;

    private readonly Collider2D[] _overlapResults = new Collider2D[16];

    private Camera _mainCamera;
    private Collider2D _collider2D;
    private bool _isDragging;
    private Vector3 _offset;
    private int _activeTouchId = -1;
    private Vector3 _startingPosition;

    public int ID => id;

    private void Awake()
    {
        _mainCamera = Camera.main;
        _collider2D = GetComponent<Collider2D>();
        _startingPosition = transform.position;
        Debug.Log("cam " + _mainCamera);
    }

    protected virtual void Update()
    {
        if (IsStackItemLimitReached())
        {
            _isDragging = false;
            return;
        }

        if (Input.touchSupported && Input.touchCount > 0)
        {
            HandleTouchInput();
        }
        else
        {
            HandleMouseInput();
        }
    }

    private void HandleMouseInput()
    {
        if (!gameObject.activeSelf)
        {
            return;
        }

        if (Input.GetMouseButtonDown(0))
        {
            Vector3 worldPos = GetWorldPosition(Input.mousePosition);
            if (IsPointerInsideCollider(worldPos) && CanBeginDrag())
            {
                _isDragging = true;
                _offset = transform.position - worldPos;
                PlayPickUpAudio();
            }
        }

        if (_isDragging && Input.GetMouseButton(0))
        {
            transform.position = GetWorldPosition(Input.mousePosition) + _offset;
        }

        if (_isDragging && Input.GetMouseButtonUp(0))
        {
            HandleRelease();
        }
    }

    private void HandleTouchInput()
    {
        for (int i = 0; i < Input.touchCount; i++)
        {
            Touch touch = Input.GetTouch(i);
            Vector3 worldPos = GetWorldPosition(touch.position);

            switch (touch.phase)
            {
                case TouchPhase.Began:
                    bool overlapPoint = IsPointerInsideCollider(worldPos);
                    bool canBeginDrag = CanBeginDrag();
                    if (!_isDragging && overlapPoint && canBeginDrag)
                    {
                        _isDragging = true;
                        _activeTouchId = touch.fingerId;
                        _offset = transform.position - worldPos;
                        PlayPickUpAudio();
                    }

                    break;

                case TouchPhase.Moved:
                case TouchPhase.Stationary:
                    if (_isDragging && touch.fingerId == _activeTouchId)
                    {
                        transform.position = worldPos + _offset;
                    }

                    break;

                case TouchPhase.Ended:
                case TouchPhase.Canceled:
                    if (_isDragging && touch.fingerId == _activeTouchId)
                    {
                        _activeTouchId = -1;
                        HandleRelease();
                    }

                    break;
            }
        }
    }

    private void HandleRelease()
    {
        _isDragging = false;

        if (ConfirmReleaseOutsideBox())
        {
            gameObject.SetActive(false);
            _targetItem.IsBlock = false;
            return;
        }

        if (!ConfirmRelease())
        {
            ReturnToStartPosition();
            return;
        }

        Consume();
    }


    private Vector3 GetWorldPosition(Vector3 screenPos)
    {
        if (_mainCamera == null)
        {
            _mainCamera = Camera.main;
        }

        screenPos.z = _mainCamera.WorldToScreenPoint(transform.position).z;
        return _mainCamera.ScreenToWorldPoint(screenPos);
    }

    private void ReturnToStartPosition()
    {
        transform.position = _startingPosition;
    }

    public void Consume()
    {
        if (stackManager != null)
        {
            if (stackManager.NotifyItemConsumed(this))
            {
                return;
            }

            ReturnToStartPosition();
            return;
        }

        gameObject.SetActive(false);
    }

    private bool ConfirmRelease()
    {
        if (stackManager != null && !stackManager.ConfirmRelease(this))
        {
            return false;
        }

        bool hasMatchingTarget = HasMatchingTargetItem();
        return hasMatchingTarget;
    }

    private bool CanBeginDrag()
    {
        if (IsStackItemLimitReached())
        {
            return false;
        }

        if (stackManager != null && !stackManager.CanDrag(this))
        {
            ItemMovement currentTopItem = stackManager.GetCurrentTopItem();
            return false;
        }

        return true;
    }

    private bool IsStackItemLimitReached()
    {
        return LunaManager.ins != null && LunaManager.ins.IsStackItemLimitReached();
    }

    private void PlayPickUpAudio()
    {
        if (AudioController.Instance == null)
        {
            return;
        }

        AudioController.Instance.PlaySfx("Click");
    }

    public bool ConfirmReleaseOutsideBox()
    {
        if (_targetItem == null || _collider2D == null)
        {
            return false;
        }

        bool outside = !_collider2D.bounds.Intersects(_targetItem.Collider2D.bounds);
        return outside;
    }


    private bool HasMatchingTargetItem()
    {
        int hitCount =
            Physics2D.OverlapBoxNonAlloc(_collider2D.bounds.center, _collider2D.bounds.size, 0f, _overlapResults);

        for (int i = 0; i < hitCount; i++)
        {
            Collider2D hit = _overlapResults[i];
            if (hit == null || hit == _collider2D)
            {
                continue;
            }

            TargetItem targetItem = hit.GetComponent<TargetItem>();
            if (targetItem != null && targetItem.CanMatch(id))
            {
                bool matched = targetItem.OnMatched(id);
                return matched;
            }
        }

        return false;
    }

    private bool IsPointerInsideCollider([Bridge.Ref] Vector3 worldPos)
    {
        if (_collider2D == null)
        {
            return false;
        }

        Bounds bounds = _collider2D.bounds;
        return worldPos.x >= bounds.min.x && worldPos.x <= bounds.max.x &&
               worldPos.y >= bounds.min.y && worldPos.y <= bounds.max.y;
    }

    private int GetCountPlay()
    {
        return LunaManager.ins != null ? LunaManager.ins.countPlay : -1;
    }

    private int GetCountPlayMax()
    {
        return LunaManager.ins != null ? LunaManager.ins.countPlayMax : -1;
    }
}
