using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class DragController : MonoBehaviour
{
    [SerializeField] private GameObject currentTarget;
    [SerializeField] private RectTransform canvas;
    [SerializeField] private GameObject tut;
    [SerializeField] private TutController tut2;
    [SerializeField] private TutController tut3;
    [SerializeField] private List<ItemMap> items;
    private Dictionary<GameObject, ItemMap> itemsMap;


    private RectTransform currentIcon;
    private void Start()
    {
        itemsMap = new Dictionary<GameObject, ItemMap>();
        items.ForEach(i => itemsMap.Add(i.Item, i));
    }
    void Update()
    {
        CheckInputDown();
        CheckInputUp();
        MoveTarget();
    }
    private void MoveTarget()
    {
        if (!currentTarget || !currentIcon) return;
        RectTransformUtility.ScreenPointToLocalPointInRectangle(canvas, Input.mousePosition, null, out Vector2 localPoint);
        currentIcon.anchoredPosition = localPoint;
    }

    private void SetTarget(GameObject gameObject)
    {
        if (!gameObject.CompareTag("DragItem")) return;
        if (tut2) tut2.StopTut();
        if (tut3) tut3.StopTut();
        currentTarget = gameObject;
        if (currentIcon) currentIcon.gameObject.SetActive(false);

        currentIcon = itemsMap[gameObject].ItemVisual;
        gameObject.SetActive(false);
        currentIcon.gameObject.SetActive(true);
    }
    private void RemoveTarget()
    {
        currentTarget = null;
        if (currentIcon) currentIcon.gameObject.SetActive(false);
    }

    private void DropItem(GameObject gameObject)
    {
        if (!currentTarget) return;
        GameObject target = gameObject;
        if (!target.CompareTag("DropArea"))
        {
            if (!target.transform.parent.CompareTag("DropArea"))
            {
                currentTarget.SetActive(true);
                GameController.Ins.Fail();
                return;
            }
            target = target.transform.parent.gameObject;
        }
        
        ItemMap item = itemsMap[currentTarget];
        if (item.Target != target)
        {
            currentTarget.SetActive(true);
            GameController.Ins.Fail();
            return;
        }
        GameController.Ins.UpdateStep();
        item.DestroyItem1.SetActive(false);
        item.DestroyItem2.SetActive(false);
        item.ActiveItem.SetActive(true);
        Destroy(currentTarget);
        RemoveTarget();
    }
    private void ClickTrigger(GameObject gameObject)
    {
        if (!gameObject.CompareTag("Trigger"))
        {
            if (gameObject.CompareTag("Fail") || gameObject.CompareTag("DropArea"))
            {
                GameController.Ins.Fail();
            }
            return;
        }
        GameController.Ins.Trigger(gameObject);
    }
    private void CheckInputDown()
    {
        if (Input.GetMouseButtonDown(0))
        {
            if (tut)
            {
                tut.SetActive(false);
            }
            PointerEventData pointer = new PointerEventData(EventSystem.current)
            {
                position = Input.mousePosition
            };
            List<RaycastResult> results = new List<RaycastResult>();
            EventSystem.current.RaycastAll(pointer, results);
            if (results.Count > 0)
            {
                GameObject result = results[0].gameObject;
                ClickTrigger(result);
                SetTarget(result);
            }
        }
    }
    private void CheckInputUp()
    {
        if (Input.GetMouseButtonUp(0))
        {
            PointerEventData pointer = new PointerEventData(EventSystem.current)
            {
                position = Input.mousePosition
            };
            List<RaycastResult> results = new List<RaycastResult>();
            EventSystem.current.RaycastAll(pointer, results);
            if (results.Count > 0)
            {
                GameObject result = results[0].gameObject;
                DropItem(result);
            }
            if (!currentTarget) return;
            currentTarget.SetActive(true);
            RemoveTarget();
        }
    }
}
[System.Serializable]
public struct ItemMap
{
    public GameObject Item;
    public GameObject Target;
    public RectTransform ItemVisual;
    public GameObject DestroyItem1;
    public GameObject DestroyItem2;
    public GameObject ActiveItem;
}
