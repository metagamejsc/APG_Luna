using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

[RequireComponent(typeof(Image))]
public class PuzzlePiece : MonoBehaviour,
    IPointerDownHandler,
    IBeginDragHandler,
    IDragHandler,
    IEndDragHandler
{
    [Header("Border sides")]
    public Image borderTop;
    public Image borderBottom;
    public Image borderLeft;
    public Image borderRight;

    [Header("Correct neighbors")]
    public PuzzlePiece correctUp;
    public PuzzlePiece correctDown;
    public PuzzlePiece correctLeft;
    public PuzzlePiece correctRight;

    [Header("Correct position in grid")]
    public int correctX;
    public int correctY;

    [Header("Border (Image)")]
    public Image borderImage;

    public Canvas _canvas;
    public RectTransform _rt;
    public CanvasGroup _cg;

    public PuzzleSlot _currentSlot;
    public PuzzleBoard _board;

    public Transform _dragRoot;
[ContextMenu("Create")]
    public void SetBoder()
    {
        borderTop = transform.GetChild(0).GetComponent<Image>();
        borderBottom = transform.GetChild(1).GetComponent<Image>();
        borderLeft = transform.GetChild(2).GetComponent<Image>();
        borderRight = transform.GetChild(3).GetComponent<Image>();
    }
    public void Init(PuzzleBoard board, Canvas canvas, Transform dragRoot)
    {
        _board = board;
        _canvas = canvas;
        _dragRoot = dragRoot;

        // Đảm bảo anchor/pivot đúng
        _rt.anchorMin = _rt.anchorMax = new Vector2(0.5f, 0.5f);
        _rt.pivot = new Vector2(0.5f, 0.5f);
    }
    public void SetBorderSideVisible(bool top, bool bottom, bool left, bool right)
    {
        if (borderTop != null) borderTop.enabled = top;
        if (borderBottom != null) borderBottom.enabled = bottom;
        if (borderLeft != null) borderLeft.enabled = left;
        if (borderRight != null) borderRight.enabled = right;
    }

    private void Awake()
    {
        _rt = GetComponent<RectTransform>();
        _cg = GetComponent<CanvasGroup>();
        borderImage = transform.GetChild(0).GetComponent<Image>();
        if (_cg == null) _cg = gameObject.AddComponent<CanvasGroup>();
    }

    public void SetCurrentSlot(PuzzleSlot slot) => _currentSlot = slot;

    public PuzzleSlot GetCurrentSlot() => _currentSlot;

    public void SetBorderVisible(bool visible)
    {
        if (borderImage != null)
            borderImage.enabled = visible;
    }

    // 📌 Khi vừa nhấn chuột xuống
    public void OnPointerDown(PointerEventData eventData)
    {
        BringToFrontAndAlign(eventData);
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        _cg.blocksRaycasts = false;
        BringToFrontAndAlign(eventData);
    }

    public void OnDrag(PointerEventData eventData)
    {
        MoveToPointer(eventData);
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        _cg.blocksRaycasts = true;

        PuzzleSlot targetSlot = _board.FindSlotUnderPointer(eventData);
        if (targetSlot == null || targetSlot == _currentSlot)
        {
            _currentSlot.SetPiece(this);
            return;
        }

        _board.SwapPieces(_currentSlot, targetSlot);
    }

    private void BringToFrontAndAlign(PointerEventData eventData)
    {
        transform.SetParent(_dragRoot, true);
        _rt.anchorMin = _rt.anchorMax = new Vector2(0.5f, 0.5f);
        _rt.pivot = new Vector2(0.5f, 0.5f);
        MoveToPointer(eventData);
    }

    private void MoveToPointer(PointerEventData eventData)
    {
        Camera cam = _canvas.renderMode == RenderMode.ScreenSpaceCamera ? _canvas.worldCamera : null;

        if (RectTransformUtility.ScreenPointToLocalPointInRectangle(
            (RectTransform)_dragRoot,
            eventData.position,
            cam,
            out var localPoint))
        {
            _rt.anchoredPosition = localPoint;
        }
    }
}
