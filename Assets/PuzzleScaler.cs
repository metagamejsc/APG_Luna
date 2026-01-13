using UnityEngine;

[RequireComponent(typeof(RectTransform))]
public class PuzzleScaler : MonoBehaviour
{
    public int gridSize = 4;
    public Vector2 cellSize = new Vector2(268, 424); // w x h

    [Header("Fit Area (normalized 0..1 in parent)")]
    public Vector2 fitAreaMin = new Vector2(0f, 0f); // MinX, MinY
    public Vector2 fitAreaMax = new Vector2(1f, 1f); // MaxX, MaxY

    [Header("Optional")]
    public bool driveAnchorsToFitAreaCenter = true;

    RectTransform rt;

    void Awake()
    {
        rt = GetComponent<RectTransform>();
    }

    void Update()
    {
        ScaleToFitArea();
    }
void Start(){
fitAreaMin = new Vector2(0f, LunaManager.ins.anchorY.x);
fitAreaMax = new Vector2(1f, LunaManager.ins.anchorY.y);
}
    void ScaleToFitArea()
    {
        RectTransform parent = rt.parent as RectTransform;
        if (parent == null) return;

        // Clamp cho chắc
        Vector2 min = new Vector2(Mathf.Clamp01(fitAreaMin.x), Mathf.Clamp01(fitAreaMin.y));
        Vector2 max = new Vector2(Mathf.Clamp01(fitAreaMax.x), Mathf.Clamp01(fitAreaMax.y));
        max = new Vector2(Mathf.Max(max.x, min.x), Mathf.Max(max.y, min.y));

        // Kích thước board
        float boardWidth  = gridSize * cellSize.x;
        float boardHeight = gridSize * cellSize.y;

        // Kích thước vùng fit trong parent theo "anchor min/max"
        float availW = parent.rect.width  * (max.x - min.x);
        float availH = parent.rect.height * (max.y - min.y);

        // Scale để vừa vùng
        float scale = Mathf.Min(availW / boardWidth, availH / boardHeight);
        rt.localScale = Vector3.one * scale;

        // Đưa puzzle vào giữa vùng fit
        Vector2 areaCenter = (min + max) * 0.5f;

        if (driveAnchorsToFitAreaCenter)
        {
            // Đặt anchor đúng tâm vùng -> anchoredPosition=0 là nằm giữa vùng
            rt.anchorMin = areaCenter;
            rt.anchorMax = areaCenter;
            rt.anchoredPosition = Vector2.zero;
        }
        else
        {
            // Không đụng anchor: tự tính vị trí local trong parent
            float x = Mathf.Lerp(parent.rect.xMin, parent.rect.xMax, areaCenter.x);
            float y = Mathf.Lerp(parent.rect.yMin, parent.rect.yMax, areaCenter.y);
            rt.anchoredPosition = new Vector2(x, y);
        }
    }
}
