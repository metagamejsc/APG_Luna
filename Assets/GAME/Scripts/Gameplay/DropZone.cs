using UnityEngine;
using UnityEngine.EventSystems;

namespace Game.Gameplay
{
    /// <summary>
    /// Vùng thả (drop target) trong UI. Khi một <see cref="InteractableUIItem"/> được thả
    /// trúng vùng này (và id khớp), Unity EventSystem sẽ gọi <see cref="OnDrop"/>.
    ///
    /// Yêu cầu: GameObject phải có 1 Graphic (Image/SkeletonGraphic) với raycastTarget = true
    /// để EventSystem nhận được sự kiện drop.
    /// </summary>
    public class DropZone : MonoBehaviour, IDropHandler
    {
        [Tooltip("Id của vùng thả. Item có targetDropZoneId khớp id này mới được tính là thả đúng.")]
        [SerializeField] private string zoneId;

        public string ZoneId => zoneId;

        public void OnDrop(PointerEventData eventData)
        {
            if (eventData.pointerDrag == null)
                return;

            var item = eventData.pointerDrag.GetComponent<InteractableUIItem>();
            if (item == null)
                return;

            // Để item tự quyết định: đúng id + đúng state thì mới hoàn thành.
            item.NotifyDroppedOn(this);
        }
    }
}
