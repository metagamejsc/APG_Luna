using System.Collections.Generic;
using Playable;
using UnityEngine;
using UnityEngine.EventSystems;

[RequireComponent(typeof(RectTransform))]
[RequireComponent(typeof(CanvasGroup))]
public class ClockItem : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    [SerializeField] private Canvas _dragCanvas;

    private GameController _gameController;
    private RectTransform _rectTransform;
    private CanvasGroup _canvasGroup;
    private Transform _originalParent;
    private int _originalSiblingIndex;
    private Vector3 _originalWorldPosition;
    private bool _isPlaced;

    private void Awake()
    {
        _rectTransform = GetComponent<RectTransform>();
        _canvasGroup = GetComponent<CanvasGroup>();
        EnsureGameController();

        if (_dragCanvas == null)
        {
            Canvas parentCanvas = GetComponentInParent<Canvas>();
            _dragCanvas = parentCanvas != null ? parentCanvas.rootCanvas : null;
        }

        CacheStartState();
    }

    public void Initialize(GameController gameController)
    {
        _gameController = gameController;
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        if (_isPlaced)
        {
            return;
        }

        CacheStartState();

        if (_dragCanvas != null)
        {
            _rectTransform.SetParent(_dragCanvas.transform, true);
        }

        _canvasGroup.blocksRaycasts = false;
    }

    public void OnDrag(PointerEventData eventData)
    {
        if (_isPlaced)
        {
            return;
        }

        if (_dragCanvas == null)
        {
            _rectTransform.position = eventData.position;
            return;
        }

        Camera dragCamera = _dragCanvas.renderMode == RenderMode.ScreenSpaceOverlay
            ? null
            : _dragCanvas.worldCamera;

        if (RectTransformUtility.ScreenPointToLocalPointInRectangle(
                _dragCanvas.transform as RectTransform,
                eventData.position,
                dragCamera,
                out Vector2 localPoint))
        {
            _rectTransform.localPosition = localPoint;
        }
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        if (_isPlaced)
        {
            return;
        }

        EnsureGameController();
        _canvasGroup.blocksRaycasts = true;

        ClockDropTarget target = GetDropTarget(eventData);
        bool isDropped = _gameController != null
            ? _gameController.TryDropClock(this, target)
            : target != null && target.TryAccept(this);
        if (!isDropped)
        {
            ResetToStartState();
        }
    }

    public void CompleteDrop()
    {
        _isPlaced = true;
        _canvasGroup.blocksRaycasts = false;
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

    private ClockDropTarget GetDropTarget(PointerEventData eventData)
    {
        Camera eventCamera = _dragCanvas != null && _dragCanvas.renderMode != RenderMode.ScreenSpaceOverlay
            ? _dragCanvas.worldCamera
            : null;

        if (_gameController != null)
        {
            IReadOnlyList<ClockDropTarget> dropTargets = _gameController.DropTargets;
            for (int i = 0; i < dropTargets.Count; i++)
            {
                ClockDropTarget target = dropTargets[i];
                if (target == null)
                {
                    continue;
                }

                RectTransform targetRect = target.transform as RectTransform;
                if (targetRect != null && RectTransformUtility.RectangleContainsScreenPoint(targetRect, eventData.position, eventCamera))
                {
                    return target;
                }
            }
        }

        List<RaycastResult> raycastResults = new List<RaycastResult>();
        EventSystem.current.RaycastAll(eventData, raycastResults);

        for (int i = 0; i < raycastResults.Count; i++)
        {
            ClockDropTarget target = raycastResults[i].gameObject.GetComponentInParent<ClockDropTarget>();
            if (target != null)
            {
                return target;
            }
        }

        return null;
    }

    private void EnsureGameController()
    {
        if (_gameController == null)
        {
            _gameController = FindObjectOfType<GameController>();
        }
    }
}
