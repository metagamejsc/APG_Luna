using UnityEngine;
using UnityEngine.EventSystems;

public class DraggableItem : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    public int idDrag = 0;
    private RectTransform rectTransform;
    private Vector2 originalPosition;
    private GameObject originParent;
    private CanvasGroup canvasGroup;
    public bool isProcess = false;

    void Awake()
    {
        rectTransform = GetComponent<RectTransform>();
        canvasGroup = GetComponent<CanvasGroup>();
        originalPosition = rectTransform.anchoredPosition;
        originParent = transform.parent.gameObject;
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        if (!GetIsDrag()) return;
        canvasGroup.alpha = 0.6f;
        canvasGroup.blocksRaycasts = false;
        transform.SetParent(LunaManager.ins.Parent.transform);
    }
    public void OnDrag(PointerEventData eventData)
    {
        if (!GetIsDrag()) return;
        Vector2 worldPoint = Camera.main.ScreenToWorldPoint(eventData.position);
        rectTransform.position = worldPoint;
        //LunaManager.ins.OffStartCard();
        //rectTransform.position = Input.mousePosition;
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        if (!GetIsDrag()) return;
        transform.SetParent(originParent.transform);
        canvasGroup.alpha = 1f;
        canvasGroup.blocksRaycasts = true;

        Vector2 worldPoint = Camera.main.ScreenToWorldPoint(eventData.position);
        RaycastHit2D[] hits = Physics2D.RaycastAll(worldPoint, Vector2.zero);

        foreach (var hit in hits)
        {
            if (hit.collider != null && hit.collider.gameObject != gameObject && idDrag == hit.collider.gameObject.GetComponent<DropZone>().idDrop)
            {
                hit.collider.gameObject.GetComponent<DropZone>().DragItem();
                LunaManager.ins.SetIsDrag(false);
                LunaManager.ins.DelaySetDrag();
                if (isProcess)
                {
                    LunaManager.ins.CountPlay();
                    LunaManager.ins.CheckTutorial();
                }
                Destroy(gameObject);
                return;
            }
        }

        rectTransform.anchoredPosition = originalPosition;

    }

    bool GetIsDrag()
    {
        return LunaManager.ins.isDrag;
    }
}
