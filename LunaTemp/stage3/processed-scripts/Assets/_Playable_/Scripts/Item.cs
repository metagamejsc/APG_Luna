using UnityEngine;

namespace Playable
{
    public class Item : MonoBehaviour
    {
        private RectTransform _rectTransform;
        private Transform _originalParent;
        private Vector3 _originalWorldPosition;


        public void EnsureReady()
        {
            if (_rectTransform == null)
            {
                _rectTransform = transform as RectTransform;
            }
        }

        public void CacheOrigin()
        {
            _originalParent = transform.parent;
            _originalWorldPosition = transform.position;
        }


        public void SetAsLastSibling()
        {
            transform.SetAsLastSibling();
        }

        public void SetWorldPosition([Bridge.Ref] Vector3 worldPosition)
        {
            transform.position = worldPosition;
        }

        public void RestoreOrigin(Transform fallbackParent)
        {
            Transform parent = _originalParent != null ? _originalParent : fallbackParent;
            transform.SetParent(parent, true);
            transform.position = _originalWorldPosition;
            EnsureReady();
        }

        public void Consume()
        {
            gameObject.SetActive(false);
        }
    }
}