using System;
using UnityEngine;

[RequireComponent(typeof(RectTransform))]
public class PuzzleScaler : MonoBehaviour
{
    public int gridSize = 4;
    public Vector2 cellSize = new Vector2(268, 424); // width x height

    void Start()
    {
        //ScaleToFitScreen();
    }

    private void Update()
    {
        ScaleToFitScreen();
    }

    void ScaleToFitScreen()
    {
        RectTransform rt = GetComponent<RectTransform>();
        RectTransform parent = rt.parent as RectTransform;
        if (parent == null) return;

        // Tổng kích thước puzzle dựa vào cell * grid
        float boardWidth = gridSize * cellSize.x;
        float boardHeight = gridSize * cellSize.y;

        // Kích thước thật của vùng hiển thị
        float parentWidth = parent.rect.width;
        float parentHeight = parent.rect.height;

        // Tính scale dựa vào chiều ngắn hơn
        float scale = Mathf.Min(parentWidth / boardWidth, parentHeight / boardHeight);

        rt.localScale = Vector3.one * scale;

        // Căn giữa lại
        rt.anchoredPosition = Vector2.zero;
    }

}