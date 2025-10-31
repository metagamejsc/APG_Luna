using UnityEngine;
using UnityEngine.EventSystems;

public class DraggableItem : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    public int idDrag = 0;
    public bool isUseID = false;
    private RectTransform rectTransform;
    private Vector2 originalPosition;
    private CanvasGroup canvasGroup;


    void Awake()
    {
        rectTransform = GetComponent<RectTransform>();
        canvasGroup = GetComponent<CanvasGroup>();
        originalPosition = rectTransform.anchoredPosition;
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        canvasGroup.alpha = 0.6f;
        canvasGroup.blocksRaycasts = false;
    }
    public void OnDrag(PointerEventData eventData)
    {
        Vector2 worldPoint = Camera.main.ScreenToWorldPoint(eventData.position);
        rectTransform.position = worldPoint;
        LunaManager.ins.TurnOffHand();
        //rectTransform.position = Input.mousePosition;
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        canvasGroup.alpha = 1f;
        canvasGroup.blocksRaycasts = true;

        Vector2 worldPoint = Camera.main.ScreenToWorldPoint(eventData.position);
        RaycastHit2D hit = Physics2D.Raycast(worldPoint, Vector2.zero);
        if (!isUseID)
        {
            if (hit.collider != null && hit.collider.gameObject != gameObject && hit.collider.gameObject.GetComponent<DropZone>().idDrop != 12)
            {
                LunaManager.ins.CountPlay();
                hit.collider.gameObject.GetComponent<DropZone>().DragOn(idDrag);
                Destroy(gameObject);
            }
            else
            {
                rectTransform.anchoredPosition = originalPosition;
            }
        }
        else
        {
            if (hit.collider != null && hit.collider.gameObject != gameObject && idDrag == hit.collider.gameObject.GetComponent<DropZone>().idDrop)
            {
                LunaManager.ins.CountPlay();
                hit.collider.gameObject.GetComponent<DropZone>().DragUseId();
                Destroy(gameObject);
            }
            else
            {
                rectTransform.anchoredPosition = originalPosition;
            }
        }


        // if (hit.collider != null && hit.collider.gameObject != gameObject && idDrag == hit.collider.gameObject.GetComponent<DropZone>().idDrop && hit.collider.gameObject.GetComponent<DropZone>().isDontWork)
        // {
        //     hit.collider.gameObject.GetComponent<DropZone>().UpgradeWoman();
        //     rectTransform.anchoredPosition = originalPosition;
        // }
        // else
        // {
        //     if (hit.collider != null && hit.collider.gameObject != gameObject && idDrag == hit.collider.gameObject.GetComponent<DropZone>().idDrop && !hit.collider.gameObject.GetComponent<DropZone>().isDontWork)
        //     {
        //         hit.collider.gameObject.GetComponent<DropZone>().DragMoney(idDrag);
        //         Destroy(gameObject);
        //     }
        //     else
        //     {
        //         rectTransform.anchoredPosition = originalPosition;
        //     }
        // }



        // if (isChease)
        // {
        //     if (hit.collider != null)
        //     {
        //         var name = hit.collider.gameObject.name;
        //         if (name == "Mouse" && hit.collider.gameObject.GetComponent<DropZone>().GetCurrentStep() == 1)
        //         {
        //             hit.collider.gameObject.GetComponent<DropZone>().DragMoney();
        //             Destroy(gameObject);
        //         }
        //         else
        //         {
        //             rectTransform.anchoredPosition = originalPosition;
        //         }

        //     }
        //     else
        //     {
        //         rectTransform.anchoredPosition = originalPosition;
        //     }

        // }
        // else
        // {
        //     if (hit.collider != null && hit.collider.gameObject != gameObject)
        //     {
        //         hit.collider.gameObject.GetComponent<DropZone>().DragMoney();
        //         Destroy(gameObject);
        //     }
        //     else
        //     {
        //         rectTransform.anchoredPosition = originalPosition;
        //     }
        // }
    }
}
