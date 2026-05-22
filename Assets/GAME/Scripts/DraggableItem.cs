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
    public bool isLose = false;
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
        this.gameObject.transform.localScale = Vector3.one * 1.5f;
        canvasGroup.alpha = 1f;
        canvasGroup.blocksRaycasts = false;
        transform.SetParent(LunaManager.ins.Parent.transform);

    }
    public void OnDrag(PointerEventData eventData)
    {
        Vector2 worldPoint = Camera.main.ScreenToWorldPoint(eventData.position);
        rectTransform.position = worldPoint;
        LunaManager.ins.OffStartCard();
        //rectTransform.position = Input.mousePosition;
    }
    public void OnEndDrag(PointerEventData eventData)
    {
        this.gameObject.transform.localScale = Vector3.one;
        transform.SetParent(originParent.transform);
        canvasGroup.alpha = isHide ? 0f : 1f;
        canvasGroup.blocksRaycasts = true;


        Vector2 worldPoint = Camera.main.ScreenToWorldPoint(eventData.position);
        RaycastHit2D[] hits = Physics2D.RaycastAll(worldPoint, Vector2.zero);

        DropZone targetDropZone = null;

        for (int i = 0; i < hits.Length; i++)
        {
            if (hits[i].collider == null) continue;
            if (hits[i].collider.gameObject == gameObject) continue;

            DropZone dropZone = hits[i].collider.GetComponent<DropZone>();
            if (dropZone == null) continue;

            if (idDrag == dropZone.idDrop)
            {
                targetDropZone = dropZone;
                break;
            }
        }

        if (targetDropZone != null)
        {
            targetDropZone.DragItem();

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

    // public void OnEndDrag(PointerEventData eventData)
    // {
    //     transform.SetParent(originParent.transform);
    //     if (isHide) { canvasGroup.alpha = 0f; } else { canvasGroup.alpha = 1f; }

    //     canvasGroup.blocksRaycasts = true;

    //     Vector2 worldPoint = Camera.main.ScreenToWorldPoint(eventData.position);
    //     RaycastHit2D hit = Physics2D.Raycast(worldPoint, Vector2.zero);

    //     if (hit.collider != null && hit.collider.gameObject != gameObject && hit.collider.gameObject.GetComponent<DropZone>() != null && idDrag == hit.collider.gameObject.GetComponent<DropZone>().idDrop)
    //     {
    //         hit.collider.gameObject.GetComponent<DropZone>().DragItem();
    //         if (isProcess)
    //         {
    //             LunaManager.ins.CountPlay();
    //         }
    //         Destroy(gameObject);
    //     }
    //     else
    //     {
    //         rectTransform.anchoredPosition = originalPosition;
    //     }

    // }

}
