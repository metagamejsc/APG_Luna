using UnityEngine;
using UnityEngine.EventSystems;

public class DraggableItem : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    public int idDrag = 0;
    public GameObject handObj;
    private RectTransform rectTransform;
    private Vector2 originalPosition;
    private CanvasGroup canvasGroup;
    private Quaternion originalRotation;

    // void Awake()
    // {
    //     rectTransform = GetComponent<RectTransform>();
    //     canvasGroup = GetComponent<CanvasGroup>();
    //     originalPosition = rectTransform.anchoredPosition;
    //     originalRotation = rectTransform.rotation;
    // }
    public void Init()
    {
        rectTransform = GetComponent<RectTransform>();
        canvasGroup = GetComponent<CanvasGroup>();
        originalPosition = rectTransform.anchoredPosition;
        originalRotation = rectTransform.rotation;
        if (handObj != null && !handObj.activeInHierarchy)
        {
            handObj.SetActive(true);
        }
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        if (handObj != null && handObj.activeInHierarchy)
        {
            handObj.SetActive(false);
        }
        canvasGroup.alpha = 0.6f;
        canvasGroup.blocksRaycasts = false;
        rectTransform.rotation = Quaternion.Euler(0f, 0f, 0f);
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
        if (hit.collider != null && hit.collider.gameObject != gameObject && idDrag == hit.collider.gameObject.GetComponent<DropZone>().idDrop && hit.collider.gameObject.GetComponent<DropZone>().isDontWork)
        {
            hit.collider.gameObject.GetComponent<DropZone>().UpgradeWoman();
            // rectTransform.rotation = originalRotation;
            rectTransform.anchoredPosition = originalPosition;

        }
        else
        {
            if (hit.collider != null && hit.collider.gameObject != gameObject && idDrag == hit.collider.gameObject.GetComponent<DropZone>().idDrop && !hit.collider.gameObject.GetComponent<DropZone>().isDontWork)
            {
                hit.collider.gameObject.GetComponent<DropZone>().DragMoney();
                Destroy(gameObject);
            }
            else
            {
                //rectTransform.rotation = originalRotation;
                rectTransform.anchoredPosition = originalPosition;

            }
        }



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
