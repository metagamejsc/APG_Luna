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

    void Awake()
    {
        rectTransform = GetComponent<RectTransform>();
        canvasGroup = GetComponent<CanvasGroup>();
        originalPosition = rectTransform.anchoredPosition;
        originParent = transform.parent.gameObject;
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        canvasGroup.alpha = 0.6f;
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
        transform.SetParent(originParent.transform);
        canvasGroup.alpha = 1f;
        canvasGroup.blocksRaycasts = true;

        Vector2 worldPoint = Camera.main.ScreenToWorldPoint(eventData.position);
        RaycastHit2D hit = Physics2D.Raycast(worldPoint, Vector2.zero);

        // if (hit.collider != null && hit.collider.gameObject != gameObject && hit.collider.gameObject.GetComponent<DropZone>().idDrop == 14)
        // {
        //     if (LunaManager.ins.countPlay < LunaManager.ins.countPlayMax - 1)
        //     {
        //         print("Lose");
        //         hit.collider.gameObject.GetComponent<DropZone>().LoseStep();
        //         Destroy(gameObject);
        //     }
        //     else
        //     {
        //         print("Win");
        //         hit.collider.gameObject.GetComponent<DropZone>().DragItem();
        //         if (isProcess)
        //         {
        //             LunaManager.ins.CountPlay();
        //         }
        //         Destroy(gameObject);
        //     }

        // }
        // else 
        if (hit.collider != null && hit.collider.gameObject != gameObject && hit.collider.gameObject.GetComponent<DropZone>() != null && idDrag == hit.collider.gameObject.GetComponent<DropZone>().idDrop)
        {
            hit.collider.gameObject.GetComponent<DropZone>().DragItem();
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
}
