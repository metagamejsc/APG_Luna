using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class PuzzleBoard : MonoBehaviour
{
    [Header("Refs")]
    public Canvas canvas;
    public Transform dragRoot; // 1 GameObject rỗng (UI) nằm trên cùng Canvas để chứa piece khi kéo

    [Header("Grid")]
    public int size = 4;
    public List<PuzzleSlot> slots = new List<PuzzleSlot>(); // 16 slots theo thứ tự y*size + x

    private readonly List<RaycastResult> _raycastResults = new List<RaycastResult>();
    private GraphicRaycaster _raycaster;

    private void Awake()
    {
        _raycaster = canvas.GetComponent<GraphicRaycaster>();
    }

    private IEnumerator Start()
    {
        yield return null; // chờ 1 frame cho hierarchy/setup xong
        RegisterAllPieces();
        yield return null;
        //AssignCorrectNeighbors();
        foreach (var s in slots)
        {
            if (s?.CurrentPiece != null)
                ApplyBorderRule(s.CurrentPiece);
        }
    }

    // Gọi hàm này sau khi bạn đã tạo pieces và gắn vào slot, để init board cho mỗi piece
    public void RegisterAllPieces()
    {
        foreach (var slot in slots)
        {
            if (slot.CurrentPiece != null)
            {
                slot.CurrentPiece.Init(this, canvas, dragRoot);
            }
        }

        // Cập nhật border ban đầu
        RefreshAllBorders();
    }

    public PuzzleSlot GetSlot(int x, int y)
    {
        if (x < 0 || x >= size || y < 0 || y >= size) return null;
        return slots[y * size + x];
    }

    public bool IsPieceCorrect(PuzzlePiece p)
    {
        var s = p.GetCurrentSlot();
        return s != null && p.correctX == s.x && p.correctY == s.y;
    }

    public PuzzleSlot FindSlotUnderPointer(PointerEventData eventData)
    {
        _raycastResults.Clear();
        _raycaster.Raycast(eventData, _raycastResults);

        foreach (var r in _raycastResults)
        {
            // Nếu hit vào chính piece/image bên trong slot, ta tìm slot bằng GetComponentInParent
            var slot = r.gameObject.GetComponentInParent<PuzzleSlot>();
            if (slot != null) return slot;
        }
        return null;
    }

    public void SwapPieces(PuzzleSlot a, PuzzleSlot b)
    {
        var pieceA = a.CurrentPiece;
        var pieceB = b.CurrentPiece;

        // Đổi chỗ
        a.SetPiece(pieceB);
        b.SetPiece(pieceA);

        // Sau swap: cập nhật border cho 2 mảnh vừa di chuyển + vùng lân cận (để border hiện/ẩn đúng)
        UpdateBordersAroundSlot(a);
        UpdateBordersAroundSlot(b);
    }

    private void UpdateBordersAroundSlot(PuzzleSlot slot)
    {
        if (slot == null) return;

        // kiểm tra slot này và 4 hướng quanh nó (vì swap ảnh hưởng lân cận)
        var toCheck = new List<PuzzleSlot>
        {
            slot,
            GetSlot(slot.x + 1, slot.y),
            GetSlot(slot.x - 1, slot.y),
            GetSlot(slot.x, slot.y + 1),
            GetSlot(slot.x, slot.y - 1),
        };

        foreach (var s in toCheck)
        {
            if (s?.CurrentPiece != null)
                ApplyBorderRule(s.CurrentPiece);
        }
    }

    private void ApplyBorderRule(PuzzlePiece p)
    {
        var s = p.GetCurrentSlot();
        if (s == null)
        {
            p.SetBorderSideVisible(true, true, true, true);
            return;
        }

        var up = GetSlot(s.x, s.y - 1)?.CurrentPiece;
        var down = GetSlot(s.x, s.y + 1)?.CurrentPiece;
        var leftP = GetSlot(s.x - 1, s.y)?.CurrentPiece;
        var rightP = GetSlot(s.x + 1, s.y)?.CurrentPiece;

        bool top = !IsCorrectNeighbor(p, up, Vector2Int.up);
        bool bottom = !IsCorrectNeighbor(p, down, Vector2Int.down);
        bool left = !IsCorrectNeighbor(p, leftP, Vector2Int.left);
        bool right = !IsCorrectNeighbor(p, rightP, Vector2Int.right);

        p.SetBorderSideVisible(top, bottom, left, right);
        Debug.Log($"[Border] {p.transform.parent.name} -> Top:{!top} Bottom:{!bottom} Left:{!left} Right:{!right}");

    }


    [ContextMenu("Create")]
    public void AssignCorrectNeighbors()
    {
        foreach (var slot in slots)
        {
            var piece = slot.CurrentPiece;
            if (piece == null) continue;

            piece.correctUp    = GetSlot(slot.x, slot.y - 1)?.CurrentPiece;
            piece.correctDown  = GetSlot(slot.x, slot.y + 1)?.CurrentPiece;
            piece.correctLeft  = GetSlot(slot.x - 1, slot.y)?.CurrentPiece;
            piece.correctRight = GetSlot(slot.x + 1, slot.y)?.CurrentPiece;
        }
    }

    private bool IsCorrectNeighbor(PuzzlePiece center, PuzzlePiece neighbor, Vector2Int dir)
    {
        if (neighbor == null) return false;
        //if (!IsPieceCorrect(neighbor)) return false;

        if (dir == Vector2Int.up) return center.correctUp == neighbor;
        if (dir == Vector2Int.down) return center.correctDown == neighbor;
        if (dir == Vector2Int.left) return center.correctLeft == neighbor;
        if (dir == Vector2Int.right) return center.correctRight == neighbor;

        return false;
    }

    private bool ShouldHideBorder(PuzzlePiece p)
    {
        var s = p.GetCurrentSlot();
        if (s == null) return false;

        // kiểm tra 4 hướng
        if (IsCorrectNeighbor(p, GetSlot(s.x, s.y - 1)?.CurrentPiece, Vector2Int.up))
            return true;

        if (IsCorrectNeighbor(p, GetSlot(s.x, s.y + 1)?.CurrentPiece, Vector2Int.down))
            return true;

        if (IsCorrectNeighbor(p, GetSlot(s.x - 1, s.y)?.CurrentPiece, Vector2Int.left))
            return true;

        if (IsCorrectNeighbor(p, GetSlot(s.x + 1, s.y)?.CurrentPiece, Vector2Int.right))
            return true;

        return false;
    }



    private void RefreshAllBorders()
    {
        foreach (var slot in slots)
        {
            if (slot.CurrentPiece != null)
                ApplyBorderRule(slot.CurrentPiece);
        }
    }
}
