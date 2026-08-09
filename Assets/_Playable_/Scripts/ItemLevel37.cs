using System.Collections.Generic;
using UnityEngine;

namespace Playable
{
    public class ItemLevel37 : Item
    {
        [SerializeField] private TargetType _targetType;
        [SerializeField] private bool _isHaveAnim;
        [SerializeField] private string _nameSkin;
        [SerializeField] private GameObject _objActive;
        [SerializeField] private List<GameObject> _objsDisabled = new List<GameObject>();

        [Header("Drag Out (no target drop needed)")] [SerializeField]
        private bool _isTriggerOnDragOut;

        [SerializeField] private TargetLevel37 _dragOutTarget;

        private bool _hasTriggeredDragOut;
        private bool _shouldSkipReturnAnimation;

        public TargetType Type => _targetType;


        protected override void OnDragStarted()
        {
            base.OnDragStarted();
            if (_isHaveAnim) GameController.Instance.ToggleSkin(_nameSkin);
            if (_objActive) _objActive.SetActive(true);
            if (_objsDisabled.Count <= 0) return;

            foreach (GameObject obj in _objsDisabled)
            {
                obj.SetActive(false);
            }
        }

        protected override void OnItemReleased(bool wasAccepted)
        {
            base.OnItemReleased(wasAccepted);

            bool isTargetBusy = _dragOutTarget != null && _dragOutTarget.IsBusy;

            if (!wasAccepted && _isTriggerOnDragOut && !_hasTriggeredDragOut && !isTargetBusy &&
                HasDraggedPastThreshold())
            {
                _hasTriggeredDragOut = true;
                _shouldSkipReturnAnimation = true;

                if (_dragOutTarget != null) _dragOutTarget.TriggerLoseByType(_targetType);
                GameManager.Instance.CountEvent();
                return;
            }

            if (!wasAccepted)
            {
                if (_isHaveAnim) GameController.Instance.ToggleSkin(_nameSkin);
                if (_objActive) _objActive.SetActive(false);
                if (_objsDisabled.Count <= 0) return;

                foreach (GameObject obj in _objsDisabled)
                {
                    obj.SetActive(true);
                }
            }
            else
            {
                GameManager.Instance.CountEvent();
            }
        }

        protected override bool ShouldSkipReturnAnimation()
        {
            return _shouldSkipReturnAnimation;
        }

        private bool HasDraggedPastThreshold()
        {
            if (ItemCollider == null) return false;

            float distance = Vector3.Distance(transform.position, StartPosition);

            Vector3 scale = transform.lossyScale;
            float thresholdX = ItemCollider.size.x * Mathf.Abs(scale.x);
            float thresholdY = ItemCollider.size.y * Mathf.Abs(scale.y);
            float threshold = Mathf.Max(thresholdX, thresholdY);

            return distance >= threshold;
        }
    }
}