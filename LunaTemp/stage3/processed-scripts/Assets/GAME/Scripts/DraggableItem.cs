using UnityEngine;
using UnityEngine.EventSystems;

public class DraggableItem : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    public bool isChease = false;
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
        //rectTransform.position = Input.mousePosition;
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        canvasGroup.alpha = 1f;
        canvasGroup.blocksRaycasts = true;

        Vector2 worldPoint = Camera.main.ScreenToWorldPoint(eventData.position);
        RaycastHit2D hit = Physics2D.Raycast(worldPoint, Vector2.zero);

        if (isChease)
        {
            if (hit.collider != null)
            {
                var name = hit.collider.gameObject.name;
                if (name == "Mouse" && hit.collider.gameObject.GetComponent<DropZone>().GetCurrentStep() == 1)
                {
                    hit.collider.gameObject.GetComponent<DropZone>().DragMoney();
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
        else
        {
            if (hit.collider != null && hit.collider.gameObject != gameObject)
            {
                if (LunaManager.ins != null && LunaManager.ins.StartCard.activeSelf)
                {
                    LunaManager.ins.StartCard.SetActive(false);
                }
                hit.collider.gameObject.GetComponent<DropZone>().DragMoney();
                Destroy(gameObject);
            }
            else
            {
                rectTransform.anchoredPosition = originalPosition;
            }
        }
    }
}
