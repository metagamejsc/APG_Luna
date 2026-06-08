using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

namespace Game.Gameplay
{
    /// <summary>UnityEvent có tham số là item (cần subclass cụ thể để serialize được trong Inspector).</summary>
    [Serializable]
    public class ItemUnityEvent : UnityEvent<InteractableUIItem> { }

    /// <summary>
    /// Quản lý toàn bộ item gameplay: khởi tạo, mở khoá, theo dõi tiến độ và xử lý điều kiện thắng.
    /// Win khi tất cả item có requiredToWin = true đều Completed.
    /// </summary>
    public class GameplayManager : MonoBehaviour
    {
        [Header("Items")]
        [Tooltip("Để trống = tự tìm tất cả InteractableUIItem trong scene khi Start.")]
        [SerializeField] private List<InteractableUIItem> items = new List<InteractableUIItem>();

        [Tooltip("Tự mở khoá toàn bộ item ngay khi bắt đầu. Tắt nếu muốn unlock thủ công theo kịch bản.")]
        [SerializeField] private bool unlockAllOnStart = true;

        [Header("Drag layer")]
        [Tooltip("Transform để reparent item khi kéo (render trên cùng). Thường là Canvas gốc. Để trống = dùng transform của Manager.")]
        [SerializeField] private Transform dragLayer;

        // ===== C# events (cho code) =====
        public event Action<InteractableUIItem> OnCorrectClick;
        public event Action<InteractableUIItem> OnCorrectDrag;
        public event Action<InteractableUIItem> OnItemCompleted;
        public event Action OnGameWin;

        // ===== UnityEvents (cho Inspector) =====
        [Header("Inspector Callbacks")]
        public ItemUnityEvent onCorrectClickEvent;
        public ItemUnityEvent onCorrectDragEvent;
        public ItemUnityEvent onItemCompletedEvent;
        public UnityEvent onGameWinEvent;

        private readonly HashSet<InteractableUIItem> completedRequired = new HashSet<InteractableUIItem>();
        private int requiredCount;
        private bool hasWon;

        private void Start()
        {
            if (items == null || items.Count == 0)
                items = new List<InteractableUIItem>(FindObjectsOfType<InteractableUIItem>());

            var layer = dragLayer != null ? dragLayer : transform;

            requiredCount = 0;
            foreach (var item in items)
            {
                if (item == null) continue;

                item.Initialize(layer);
                item.CorrectClick += HandleCorrectClick;
                item.CorrectDrag += HandleCorrectDrag;
                item.Completed += HandleItemCompleted;

                if (item.RequiredToWin)
                    requiredCount++;
            }

            if (requiredCount == 0)
                Debug.LogWarning("[GameplayManager] Không có item nào requiredToWin = true. Game sẽ không thể win.");

            if (unlockAllOnStart)
                UnlockAll();
        }

        private void OnDestroy()
        {
            foreach (var item in items)
            {
                if (item == null) continue;
                item.CorrectClick -= HandleCorrectClick;
                item.CorrectDrag -= HandleCorrectDrag;
                item.Completed -= HandleItemCompleted;
            }
        }

        /// <summary>Mở khoá toàn bộ item.</summary>
        public void UnlockAll()
        {
            foreach (var item in items)
                if (item != null) item.Unlock();
        }

        /// <summary>Mở khoá 1 item theo id (dùng cho kịch bản unlock tuần tự).</summary>
        public void UnlockItem(string id)
        {
            var item = FindItem(id);
            if (item != null) item.Unlock();
        }

        public InteractableUIItem FindItem(string id)
        {
            foreach (var item in items)
                if (item != null && item.Id == id)
                    return item;
            return null;
        }

        // =========================================================
        // Handlers
        // =========================================================
        private void HandleCorrectClick(InteractableUIItem item)
        {
            OnCorrectClick?.Invoke(item);
            onCorrectClickEvent?.Invoke(item);
        }

        private void HandleCorrectDrag(InteractableUIItem item)
        {
            OnCorrectDrag?.Invoke(item);
            onCorrectDragEvent?.Invoke(item);
        }

        private void HandleItemCompleted(InteractableUIItem item)
        {
            OnItemCompleted?.Invoke(item);
            onItemCompletedEvent?.Invoke(item);

            if (item.RequiredToWin)
                completedRequired.Add(item);

            CheckWin();
        }

        private void CheckWin()
        {
            if (hasWon) return;
            if (requiredCount <= 0) return;
            if (completedRequired.Count < requiredCount) return;

            hasWon = true;
            OnGameWin?.Invoke();
            onGameWinEvent?.Invoke();
        }
    }
}
