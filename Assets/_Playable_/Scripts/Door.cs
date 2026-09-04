using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace Playable
{
    public class Door : MonoBehaviour, IPointerClickHandler
    {
        [SerializeField] private Image _image;
        [SerializeField] private GameObject _open;
        [SerializeField] private GameObject _close;

        public void OnPointerClick(PointerEventData eventData)
        {
            _image.raycastTarget = false;
            GameManager.Instance.CountEvent();
            _open.SetActive(true);
            _close.SetActive(false);
        }
    }
}