namespace Game.Gameplay
{
    /// <summary>
    /// Kiểu tương tác của một item gameplay.
    /// </summary>
    public enum InteractionType
    {
        /// <summary>Chỉ cần click đúng là xong.</summary>
        ClickOnly,

        /// <summary>Chỉ cần kéo/thả đúng target là xong.</summary>
        DragOnly,

        /// <summary>Bắt buộc click đúng trước, sau đó mới được kéo/thả.</summary>
        ClickThenDrag
    }

    /// <summary>
    /// Trạng thái của một item gameplay (state machine).
    /// </summary>
    public enum ItemState
    {
        /// <summary>Chưa được phép tương tác (chờ GameplayManager unlock).</summary>
        Locked,

        /// <summary>Đang chờ người chơi click đúng.</summary>
        WaitingClick,

        /// <summary>Đang chờ người chơi kéo/thả đúng target.</summary>
        WaitingDrag,

        /// <summary>Đã hoàn thành, không cho tương tác lại.</summary>
        Completed
    }
}
