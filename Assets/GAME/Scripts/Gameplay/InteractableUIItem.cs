using System;
using Spine.Unity;
using UnityEngine;
using UnityEngine.EventSystems;

namespace Game.Gameplay
{
    /// <summary>
    /// Config cho mỗi item, tách riêng để dễ đọc trong Inspector và serialize.
    /// </summary>
    [Serializable]
    public class InteractableItemConfig
    {
        [Tooltip("Id duy nhất của item (dùng để tham chiếu/log).")]
        public string id;

        [Tooltip("Kiểu tương tác: ClickOnly / DragOnly / ClickThenDrag.")]
        public InteractionType interactionType = InteractionType.ClickOnly;

        [Tooltip("Item này có bắt buộc hoàn thành để thắng game không.")]
        public bool requiredToWin = true;

        [Tooltip("Id của DropZone mục tiêu (chỉ dùng cho DragOnly / ClickThenDrag).")]
        public string targetDropZoneId;

        [Tooltip("Chuỗi animation chạy khi click đúng.")]
        public AnimationSequence clickAnimationSequence = new AnimationSequence();

        [Tooltip("Chuỗi animation chạy khi kéo/thả đúng.")]
        public AnimationSequence dragAnimationSequence = new AnimationSequence();
    }

    /// <summary>
    /// Một item gameplay tương tác được trên UI (dùng Spine SkeletonGraphic).
    /// Xử lý click + drag dựa trên <see cref="InteractableItemConfig.interactionType"/> và state machine.
    /// </summary>
    [RequireComponent(typeof(CanvasGroup))]
    public class InteractableUIItem : MonoBehaviour,
        IPointerClickHandler,
        IBeginDragHandler,
        IDragHandler,
        IEndDragHandler
    {
        [SerializeField] private InteractableItemConfig config = new InteractableItemConfig();

        [Header("Refs (tự lấy nếu để trống)")]
        [SerializeField] private AnimationSequenceRunner animationRunner;
        [SerializeField] private CanvasGroup canvasGroup;

        [Header("Drag")]
        [Tooltip("Có trả item về vị trí cũ khi thả sai không.")]
        [SerializeField] private bool returnToOriginOnFail = true;
        [Tooltip("Scale khi đang kéo.")]
        [SerializeField] private float dragScale = 1f;

        // ===== Events (đăng ký từ GameplayManager hoặc code khác) =====
        public event Action<InteractableUIItem> CorrectClick;
        public event Action<InteractableUIItem> CorrectDrag;
        public event Action<InteractableUIItem> Completed;

        // ===== Public read-only =====
        public InteractableItemConfig Config => config;
        public string Id => config.id;
        public bool RequiredToWin => config.requiredToWin;
        public ItemState State { get; private set; } = ItemState.Locked;
        public bool IsCompleted => State == ItemState.Completed;

        // ===== Drag runtime state =====
        private RectTransform rectTransform;
        private Transform originalParent;
        private Vector2 originalAnchoredPosition;
        private int originalSiblingIndex;
        private Transform dragLayer;          // layer tạm khi kéo (để render trên cùng)
        private bool dropSucceeded;

        private void Awake()
        {
            rectTransform = GetComponent<RectTransform>();
            if (canvasGroup == null) canvasGroup = GetComponent<CanvasGroup>();
            if (animationRunner == null) animationRunner = GetComponent<AnimationSequenceRunner>();
        }

        /// <summary>
        /// Gọi từ GameplayManager lúc khởi tạo. <paramref name="dragLayer"/> là Transform
        /// (thường là Canvas gốc) để reparent item khi kéo cho render trên cùng.
        /// </summary>
        public void Initialize(Transform dragLayer = null)
        {
            this.dragLayer = dragLayer;
            State = ItemState.Locked;
        }

        /// <summary>
        /// Mở khoá để item bắt đầu nhận tương tác. State -> WaitingClick hoặc WaitingDrag tuỳ kiểu.
        /// </summary>
        public void Unlock()
        {
            if (State != ItemState.Locked)
                return;

            State = config.interactionType == InteractionType.DragOnly
                ? ItemState.WaitingDrag
                : ItemState.WaitingClick;
        }

        // =========================================================
        // CLICK
        // =========================================================
        public void OnPointerClick(PointerEventData eventData)
        {
            // Bỏ qua nếu sự kiện này thực ra là kết thúc 1 thao tác kéo.
            if (eventData.dragging)
                return;

            if (State != ItemState.WaitingClick)
                return;

            // Click đúng.
            CorrectClick?.Invoke(this);
            PlaySequence(config.clickAnimationSequence);

            if (config.interactionType == InteractionType.ClickOnly)
            {
                SetCompleted();
            }
            else // ClickThenDrag
            {
                State = ItemState.WaitingDrag;
            }
        }

        // =========================================================
        // DRAG
        // =========================================================
        public void OnBeginDrag(PointerEventData eventData)
        {
            // Chỉ cho kéo khi đang ở WaitingDrag (ClickThenDrag thì phải click đúng trước).
            if (State != ItemState.WaitingDrag)
                return;

            dropSucceeded = false;

            originalParent = rectTransform.parent;
            originalAnchoredPosition = rectTransform.anchoredPosition;
            originalSiblingIndex = rectTransform.GetSiblingIndex();

            if (dragLayer != null)
                rectTransform.SetParent(dragLayer, worldPositionStays: true);
            rectTransform.SetAsLastSibling();

            rectTransform.localScale = Vector3.one * dragScale;

            // Tắt raycast của chính nó để DropZone bên dưới nhận được OnDrop.
            canvasGroup.blocksRaycasts = false;
        }

        public void OnDrag(PointerEventData eventData)
        {
            if (State != ItemState.WaitingDrag)
                return;

            // Di chuyển theo con trỏ trong không gian UI.
            if (RectTransformUtility.ScreenPointToWorldPointInRectangle(
                    rectTransform, eventData.position, eventData.pressEventCamera, out var worldPoint))
            {
                rectTransform.position = worldPoint;
            }
        }

        public void OnEndDrag(PointerEventData eventData)
        {
            canvasGroup.blocksRaycasts = true;
            rectTransform.localScale = Vector3.one;

            // OnDrop (nếu trúng) đã chạy TRƯỚC OnEndDrag và set dropSucceeded.
            if (dropSucceeded)
                return;

            // Thả sai / hụt -> trả về chỗ cũ.
            if (returnToOriginOnFail)
                ReturnToOrigin();
        }

        /// <summary>
        /// Gọi từ <see cref="DropZone.OnDrop"/>. Kiểm tra id + state trước khi tính là hoàn thành.
        /// </summary>
        public void NotifyDroppedOn(DropZone zone)
        {
            if (State != ItemState.WaitingDrag)
                return;
            if (zone == null || zone.ZoneId != config.targetDropZoneId)
                return;

            dropSucceeded = true;

            // Drag đúng.
            CorrectDrag?.Invoke(this);
            PlaySequence(config.dragAnimationSequence);
            SetCompleted();
        }

        // =========================================================
        // Helpers
        // =========================================================
        private void ReturnToOrigin()
        {
            if (originalParent != null)
                rectTransform.SetParent(originalParent, worldPositionStays: false);
            rectTransform.SetSiblingIndex(originalSiblingIndex);
            rectTransform.anchoredPosition = originalAnchoredPosition;
        }

        private void PlaySequence(AnimationSequence sequence)
        {
            if (animationRunner != null)
                animationRunner.Play(sequence);
        }

        private void SetCompleted()
        {
            State = ItemState.Completed;

            // Không cho tương tác lại.
            canvasGroup.blocksRaycasts = false;
            canvasGroup.interactable = false;

            Completed?.Invoke(this);
        }
    }
}
