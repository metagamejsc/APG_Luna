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
        // Mặc định border hiện
        bool hide = ShouldHideBorder(p);

        // Nếu hide == true -> border tắt; ngược lại bật
        p.SetBorderVisible(!hide);
    }

    private bool ShouldHideBorder(PuzzlePiece p)
    {
        // Điều kiện 1: mảnh phải đúng vị trí
        if (!IsPieceCorrect(p)) return false;

        var s = p.GetCurrentSlot();
        if (s == null) return false;

        // Điều kiện 2: phải có đủ 4 hướng (mảnh ở giữa, không ở mép)
        if (s.x <= 0 || s.x >= size - 1 || s.y <= 0 || s.y >= size - 1)
            return false;

        // Điều kiện 3: 4 hàng xóm đều đúng vị trí
        var up = GetSlot(s.x, s.y - 1)?.CurrentPiece;
        var down = GetSlot(s.x, s.y + 1)?.CurrentPiece;
        var left = GetSlot(s.x - 1, s.y)?.CurrentPiece;
        var right = GetSlot(s.x + 1, s.y)?.CurrentPiece;

        if (up == null || down == null || left == null || right == null) return false;

        return IsPieceCorrect(up) && IsPieceCorrect(down) && IsPieceCorrect(left) && IsPieceCorrect(right);
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
