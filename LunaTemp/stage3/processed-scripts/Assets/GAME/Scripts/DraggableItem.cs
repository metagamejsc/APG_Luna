using UnityEngine;
using UnityEngine.EventSystems;

public class DraggableItem : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    public int idDrag = 0;
    // public string idItem;
    // public int idMusic = 0;
    public bool isClick = false;
    private int currentStep = 0;
    public GameObject[] steps;
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
        print("1");
        if (isClick)
        {
            currentStep++;
            if (currentStep >= steps.Length)
            {
                return;
            }
            foreach (var step in steps)
            {
                step.SetActive(false);
            }
            steps[currentStep].SetActive(true);
            LunaManager.ins.CountPlay();
            return;
        }
        canvasGroup.alpha = 0.6f;
        canvasGroup.blocksRaycasts = false;
    }
    public void OnDrag(PointerEventData eventData)
    {
        print("2");
        if (isClick) return;
        Vector2 worldPoint = Camera.main.ScreenToWorldPoint(eventData.position);
        rectTransform.position = worldPoint;
        LunaManager.ins.TurnOffHand();
        //rectTransform.position = Input.mousePosition;
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        print("3");
        if (isClick) return;
        canvasGroup.alpha = 1f;
        canvasGroup.blocksRaycasts = true;

        Vector2 worldPoint = Camera.main.ScreenToWorldPoint(eventData.position);
        RaycastHit2D hit = Physics2D.Raycast(worldPoint, Vector2.zero);

        // if (hit.collider != null && hit.collider.gameObject != gameObject && idDrag == hit.collider.gameObject.GetComponent<DropZone>().idDrop && hit.collider.gameObject.GetComponent<DropZone>().canDrop)
        // {
        //     hit.collider.gameObject.GetComponent<DropZone>().DragOn();
        //     //Destroy(gameObject);
        //     this.gameObject.SetActive(false);
        // }
        // else
        // {
        //     rectTransform.anchoredPosition = originalPosition;
        // }


        if (hit.collider != null && hit.collider.gameObject != gameObject && idDrag == hit.collider.gameObject.GetComponent<DropZone>().idDrop && hit.collider.gameObject.GetComponent<DropZone>().isDontWork)
        {
            hit.collider.gameObject.GetComponent<DropZone>().UpgradeWoman();
            rectTransform.anchoredPosition = originalPosition;
        }
        else
        {
            if (hit.collider != null && hit.collider.gameObject != gameObject && idDrag == hit.collider.gameObject.GetComponent<DropZone>().idDrop && !hit.collider.gameObject.GetComponent<DropZone>().isDontWork)
            {
                hit.collider.gameObject.GetComponent<DropZone>().DragOn();
                Destroy(gameObject);
            }
            else
            {
                rectTransform.anchoredPosition = originalPosition;
            }
        }

    }
}
