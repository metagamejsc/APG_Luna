using UnityEngine;
using UnityEngine.EventSystems;

public class DragID : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    public int idDrag = 0;
    //public string animationName;
    private RectTransform rectTransform;
    private Vector2 originalPosition;
    private GameObject originParent;
    private CanvasGroup canvasGroup;
    public bool isProcess = false;
    public bool isHide = false;

    void Awake()
    {
        rectTransform = GetComponent<RectTransform>();
        canvasGroup = GetComponent<CanvasGroup>();
        originalPosition = rectTransform.anchoredPosition;
        originParent = transform.parent.gameObject;
        if (isHide) { canvasGroup.alpha = 0f; }
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        if (!GetIsDrag()) return;
        //canvasGroup.alpha = 0.6f;
        this.gameObject.transform.localScale = Vector3.one * 1.5f;
        canvasGroup.blocksRaycasts = false;
        transform.SetParent(LunaManager.ins.Parent.transform);
    }
    public void OnDrag(PointerEventData eventData)
    {
        if (!GetIsDrag()) return;
        Vector2 worldPoint = Camera.main.ScreenToWorldPoint(eventData.position);
        rectTransform.position = worldPoint;
        LunaManager.ins.OffStartCard();
        //rectTransform.position = Input.mousePosition;
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        if (!GetIsDrag()) return;
        transform.SetParent(originParent.transform);
        canvasGroup.alpha = isHide ? 0f : 1f;
        //canvasGroup.alpha = 1f;
        canvasGroup.blocksRaycasts = true;
        this.gameObject.transform.localScale = Vector3.one;

        Vector2 worldPoint = Camera.main.ScreenToWorldPoint(eventData.position);
        RaycastHit2D hit = Physics2D.Raycast(worldPoint, Vector2.zero);
        if (hit.collider != null && hit.collider.gameObject != gameObject)
        {
            LunaManager.ins.SetIsDrag(false);
            //LunaManager.ins.DelaySetDrag();
            hit.collider.gameObject.GetComponent<DropID>().DragItemID(idDrag);
            if (isProcess)
            {
                LunaManager.ins.CountPlay();
            }
            Destroy(gameObject);
        }
        else
        {
            rectTransform.anchoredPosition = originalPosition;
        }
    }
    bool GetIsDrag()
    {
        return LunaManager.ins.isDrag;
    }
}
