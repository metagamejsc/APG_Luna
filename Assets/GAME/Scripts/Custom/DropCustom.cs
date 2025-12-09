using UnityEngine;
using UnityEngine.EventSystems;

public class DropCustom : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    public int idDrag = 0;
    public GameObject GoDrag;
    private RectTransform rectTransform;
    private Vector2 originalPosition;
    private CanvasGroup canvasGroup;
    public bool isProcess = false;

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
        LunaManager.ins.OffStartCard();
        //rectTransform.position = Input.mousePosition;
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        canvasGroup.alpha = 1f;
        canvasGroup.blocksRaycasts = true;

        Vector2 worldPoint = Camera.main.ScreenToWorldPoint(eventData.position);
        RaycastHit2D hit = Physics2D.Raycast(worldPoint, Vector2.zero);


        if (hit.collider != null && hit.collider.gameObject != gameObject && idDrag == hit.collider.gameObject.GetComponent<DropZone>().idDrop)
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
