using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class DraggableItem : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    public int itemID;
    private Sprite itemSprite;
    public bool isHammer = false;
    //public bool isChease = false;
    private RectTransform rectTransform;
    private Vector2 originalPosition;
    private CanvasGroup canvasGroup;

    void Awake()
    {
        rectTransform = GetComponent<RectTransform>();
        canvasGroup = GetComponent<CanvasGroup>();
        originalPosition = rectTransform.anchoredPosition;
        itemSprite = GetComponent<Image>().sprite;
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
        //rectTransform.position = Input.mousePosition;
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        canvasGroup.alpha = 1f;
        canvasGroup.blocksRaycasts = true;

        Vector2 worldPoint = Camera.main.ScreenToWorldPoint(eventData.position);
        RaycastHit2D hit = Physics2D.Raycast(worldPoint, Vector2.zero);
        if (isHammer && hit.collider != null && hit.collider.gameObject != gameObject && hit.collider.gameObject.GetComponent<DropZone>().idDrop == itemID)
        {
            hit.collider.gameObject.GetComponent<DropZone>().DragOn();
            Destroy(gameObject);
        }
        else if (!isHammer && hit.collider != null && hit.collider.gameObject != gameObject)
        {
            hit.collider.gameObject.GetComponent<DropZone>().DragOn(itemID);
            Destroy(gameObject);
        }
        else
        {
            rectTransform.anchoredPosition = originalPosition;
        }
    }



}
