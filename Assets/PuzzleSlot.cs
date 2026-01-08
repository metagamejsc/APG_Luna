using UnityEngine;

public class PuzzleSlot : MonoBehaviour
{
    public int x;
    public int y;

    public PuzzlePiece CurrentPiece { get; private set; }
    private void Awake()
    {
        // nếu piece đang là child sẵn trong hierarchy
        var piece = GetComponentInChildren<PuzzlePiece>();
        if (piece != null) SetPiece(piece);
    }

    public void SetPiece(PuzzlePiece piece)
    {
        CurrentPiece = piece;
        if (piece != null)
        {
            piece.SetCurrentSlot(this);
            piece.transform.SetParent(transform, false);
            var rt = piece.GetComponent<RectTransform>();
            rt.anchorMin = rt.anchorMax = new Vector2(0.5f, 0.5f);
            rt.pivot = new Vector2(0.5f, 0.5f);
            rt.anchoredPosition = Vector2.zero;
        }
    }
}
