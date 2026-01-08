using Spine.Unity;
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
    public bool isInvisible = false;

    void Awake()
    {
        rectTransform = GetComponent<RectTransform>();
        canvasGroup = GetComponent<CanvasGroup>();
        originalPosition = rectTransform.anchoredPosition;
        originParent = transform.parent.gameObject;
        if (isInvisible)
        {
            canvasGroup.alpha = 0f;
        }
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        if (!GetIsDrag()) return;
        canvasGroup.alpha = 0.6f;
        canvasGroup.blocksRaycasts = false;
        transform.SetParent(LunaManager.ins.Parent.transform);
        if (idDrag == 2) SpecialDog(true);
        if (idDrag == 0) SpecialGirlFan(true);
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
        if (idDrag == 2) SpecialDog(false);
        if (idDrag == 0) SpecialGirlFan(false);
        float alpha = isInvisible ? 0f : 1f;
        canvasGroup.alpha = alpha;
        canvasGroup.blocksRaycasts = true;

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
    void SpecialDog(bool isBone = false)
    {
        var skeGra = LunaManager.ins.dog.GetComponent<SkeletonGraphic>();
        var state = skeGra.AnimationState;
        if (isBone)
        {
            state.SetAnimation(0, "idle2", true);
        }
        else
        {
            state.SetAnimation(0, "idle1", true);
        }
    }
    void SpecialGirlFan(bool isFan = false)
    {

        var skeGra = LunaManager.ins.girlFan.GetComponent<SkeletonGraphic>();
        var state = skeGra.AnimationState;
        if (isFan)
        {
            state.SetAnimation(0, "action", true);
        }
        else
        {
            state.SetAnimation(0, "idle", true);
        }
    }
}
