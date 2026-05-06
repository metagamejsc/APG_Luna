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
        LunaManager.ins.OffStartCard();
        //rectTransform.position = Input.mousePosition;
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        if (!GetIsDrag()) return;
        transform.SetParent(originParent.transform);
        canvasGroup.alpha = 1f;
        canvasGroup.blocksRaycasts = true;

        Vector2 worldPoint = Camera.main.ScreenToWorldPoint(eventData.position);
        RaycastHit2D hit = Physics2D.Raycast(worldPoint, Vector2.zero);
        if (hit.collider != null && hit.collider.gameObject != gameObject)
        {
            if (idDrag == 10 && LunaManager.ins.processBuildRope > 0)
            {
                print("ID10");
                LunaManager.ins.SetIsDrag(false);
                hit.collider.gameObject.GetComponent<DropID>().DragItemID(idDrag);
                if (isProcess)
                {
                    LunaManager.ins.CountPlay();
                }
                Destroy(gameObject);

            }
            else if (idDrag == 9 && LunaManager.ins.processBuildRope > 1)
            {
                print("ID9");
                LunaManager.ins.SetIsDrag(false);
                hit.collider.gameObject.GetComponent<DropID>().DragItemID(idDrag);
                if (isProcess)
                {
                    LunaManager.ins.CountPlay();
                }
                Destroy(gameObject);

            }
            else if (idDrag != 10 && idDrag != 9)
            {
                print("IDOTHER");
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
