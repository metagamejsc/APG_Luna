using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

namespace Playable
{
    [DisallowMultipleComponent]
    public class ItemRoot : MonoBehaviour
    {
        [SerializeField] private List<Item> _itemList = new List<Item>();

        [Header("Drag")] [SerializeField] private Canvas _canvas;
        [SerializeField] private Camera _camera;

        private PointerEventData _pointerEventData;
        private readonly List<RaycastResult> _raycastResults = new List<RaycastResult>();
        private Item _selectedItem;
        private bool _isDragging;
        private Vector3 _dragOffsetWorld;

        private void Awake()
        {
            if (_canvas == null)
            {
                _canvas = GetComponentInParent<Canvas>();
            }

            if (_camera == null && _canvas != null && _canvas.renderMode != RenderMode.ScreenSpaceOverlay)
            {
                _camera = _canvas.worldCamera;
            }
        }

        private void Start()
        {
            PrepareMoneyHandles();
            RefreshStack();
        }

        private void Update()
        {
            if (Input.GetMouseButtonDown(0))
            {
                HandlePointerDown();
            }

            if (_isDragging && _selectedItem != null && Input.GetMouseButton(0))
            {
                UpdateDraggedMoneyPosition();
            }

            if (_isDragging && _selectedItem != null && Input.GetMouseButtonUp(0))
            {
                HandlePointerUp();
            }
        }


        public void RefreshStack()
        {
            PruneNullMoney();

            for (int i = 0; i < _itemList.Count; i++)
            {
                Item item = _itemList[i];
                if (item == null)
                {
                    continue;
                }

                item.EnsureReady();
            }
        }


        private void HandlePointerDown()
        {
            PruneNullMoney();
            if (_itemList.Count == 0 || _isDragging)
            {
                return;
            }

            GameObject hitObject = RaycastUIUnderMouse();
            if (!IsWithinMoneyRoot(hitObject))
            {
                return;
            }

            SelectTopMoney();
            UpdateDraggedMoneyPosition();
        }

        private void HandlePointerUp()
        {
            if (TryPlayItemUnderPointer())
            {
                ConsumeSelectedMoney();
                return;
            }

            ReturnSelectedMoney();
        }

        private void SelectTopMoney()
        {
            PruneNullMoney();
            if (_itemList.Count == 0)
            {
                return;
            }

            _selectedItem = _itemList[0];
            if (_selectedItem == null)
            {
                return;
            }

            _itemList.RemoveAt(0);
            _selectedItem.CacheOrigin();
            _selectedItem.EnsureReady();
            _selectedItem.SetAsLastSibling();

            RectTransform parentRect = _selectedItem.transform.parent as RectTransform;
            if (parentRect != null && TryGetPointerWorldPoint(parentRect, out Vector3 pointerWorldPoint))
            {
                _dragOffsetWorld = _selectedItem.transform.position - pointerWorldPoint;
            }
            else
            {
                _dragOffsetWorld = Vector3.zero;
            }

            _isDragging = true;
        }

        private void UpdateDraggedMoneyPosition()
        {
            if (_selectedItem == null)
            {
                return;
            }

            RectTransform parentRect = _selectedItem.transform.parent as RectTransform;
            if (parentRect == null)
            {
                _selectedItem.SetWorldPosition(Input.mousePosition);
                return;
            }

            if (TryGetPointerWorldPoint(parentRect, out Vector3 pointerWorldPoint))
            {
                _selectedItem.SetWorldPosition(pointerWorldPoint + _dragOffsetWorld);
            }
        }

        private void ReturnSelectedMoney()
        {
            if (_selectedItem == null)
            {
                _isDragging = false;
                return;
            }

            _selectedItem.RestoreOrigin(transform);
            _itemList.Insert(0, _selectedItem);
            _selectedItem = null;
            _isDragging = false;
            RefreshStack();
        }

        private void ConsumeSelectedMoney()
        {
            if (_selectedItem == null)
            {
                _isDragging = false;
                return;
            }

            _selectedItem.Consume();
            _selectedItem = null;
            _isDragging = false;
            RefreshStack();
        }

        private bool TryPlayItemUnderPointer()
        {
            if (EventSystem.current == null)
            {
                return false;
            }

            _pointerEventData = _pointerEventData ?? new PointerEventData(EventSystem.current);
            _pointerEventData.Reset();
            _pointerEventData.position = Input.mousePosition;

            _raycastResults.Clear();
            EventSystem.current.RaycastAll(_pointerEventData, _raycastResults);
            foreach (var t in _raycastResults)
            {
                Target target = t.gameObject.GetComponentInParent<Target>();
                if (target != null && !target.IsCompleted)
                {
                    target.Play();
                    return true;
                }
            }

            return false;
        }

        private GameObject RaycastUIUnderMouse()
        {
            if (EventSystem.current == null)
            {
                return null;
            }

            _pointerEventData = _pointerEventData ?? new PointerEventData(EventSystem.current);
            _pointerEventData.Reset();
            _pointerEventData.position = Input.mousePosition;

            _raycastResults.Clear();
            EventSystem.current.RaycastAll(_pointerEventData, _raycastResults);
            for (int i = 0; i < _raycastResults.Count; i++)
            {
                GameObject target = _raycastResults[i].gameObject;
                if (target != null)
                {
                    return target;
                }
            }

            return null;
        }

        private bool IsWithinMoneyRoot(GameObject target)
        {
            if (target == null)
            {
                return false;
            }

            Transform targetTransform = target.transform;
            return targetTransform == transform || targetTransform.IsChildOf(transform);
        }

        private bool TryGetPointerWorldPoint(RectTransform parentRect, out Vector3 worldPoint)
        {
            Camera eventCamera = GetPointerCamera();
            return RectTransformUtility.ScreenPointToWorldPointInRectangle(
                parentRect,
                Input.mousePosition,
                eventCamera,
                out worldPoint);
        }

        private Camera GetPointerCamera()
        {
            if (_camera != null)
            {
                return _camera;
            }

            if (_canvas == null)
            {
                return null;
            }

            if (_canvas.renderMode == RenderMode.ScreenSpaceOverlay)
            {
                return null;
            }

            return _canvas.worldCamera;
        }

        private void PrepareMoneyHandles()
        {
            for (int i = 0; i < _itemList.Count; i++)
            {
                Item item = _itemList[i];
                if (item == null)
                {
                    continue;
                }

                item.EnsureReady();
            }
        }

        private void PruneNullMoney()
        {
            for (int i = _itemList.Count - 1; i >= 0; i--)
            {
                if (_itemList[i] == null)
                {
                    _itemList.RemoveAt(i);
                }
            }
        }
    }
}