using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class InteractController : MonoBehaviour
{
    [SerializeField] private RectTransform canvas;
    [SerializeField] private Vector2 maxPos;
    [SerializeField] private Vector2 minPos;

    [SerializeField] private List<ItemDrag> itemDrags;
    [SerializeField] private ItemDrag currentTarget;

    [SerializeField] private AudioClip pickupSound;
    [SerializeField] private TutController tut;
    [SerializeField] private bool lockPlay;
    private Dictionary<GameObject, ItemDrag> dragMap;
    private RectTransform currentIcon;
    private void Awake()
    {
        InitDragMap();
    }
    private void Start()
    {
        GameController.Ins.SetLockPlay += SetLockPlay;
    }
    private void InitDragMap()
    {
        dragMap = new Dictionary<GameObject, ItemDrag>();
        foreach (ItemDrag itemDrag in itemDrags)
        {
            dragMap.Add(itemDrag.DragArea, itemDrag);
        }
    }
    private void SetLockPlay(bool isLock)
    {
        lockPlay = isLock;
    }
    private void Update()
    {
        CheckInputDown();
        CheckInputUp();
        MoveTarget();
    }
    private void MoveTarget()
    {
        if (currentTarget.IsEmpty || !currentIcon) return;
        RectTransformUtility.ScreenPointToLocalPointInRectangle(canvas, Input.mousePosition, null, out Vector2 localPoint);

        localPoint.x = localPoint.x > maxPos.x ? maxPos.x : localPoint.x;
        localPoint.y = localPoint.y > maxPos.y ? maxPos.y : localPoint.y;

        localPoint.x = localPoint.x < minPos.x ? minPos.x : localPoint.x;
        localPoint.y = localPoint.y < minPos.y ? minPos.y : localPoint.y;

        currentIcon.anchoredPosition = localPoint;
    }

    private void SetTarget(GameObject item)
    {
        if (!item.CompareTag("Drag")) return;
        dragMap.TryGetValue(item, out ItemDrag itemDrag);
        if (itemDrag.IsEmpty) return;

        currentTarget = itemDrag;
        currentTarget.DragArea.SetActive(false);
        currentTarget.Item.SetActive(false);

        if (currentIcon) currentIcon.gameObject.SetActive(false);
        AudioController.Ins.PlaySFX(pickupSound);
        currentIcon = itemDrag.Icon;
        currentIcon.gameObject.SetActive(true);
    }
    private void RemoveTarget(bool isDone)
    {
        if (isDone)
        {
            if (!currentTarget.IsEmpty)
            {
                dragMap.Remove(currentTarget.DragArea);
                Destroy(currentTarget.DragArea);
                Destroy(currentTarget.Item);
            }
        }
        else
        {
            currentTarget.DragArea.SetActive(true);
            currentTarget.Item.SetActive(true);
        }
        currentTarget.ClearItem();
        currentIcon.gameObject.SetActive(false);
    }

    private void HideOnClick(GameObject item)
    {
        if (lockPlay) return;
        if (!item.CompareTag("ActionOnClick")) return;
        GameController.Ins.PlayAnimation(item);
        item.SetActive(false);
    }
    private void DropItem(GameObject dropArea)
    {
        if (currentTarget.IsEmpty) return;
        if (!dropArea.CompareTag("Drop"))
        {
            RemoveTarget(isDone: false);
            return;
        }
        GameController.Ins.PlayAnimation(currentTarget.Item);
        RemoveTarget(isDone: true);
    }

    private void CheckInputDown()
    {
        if (Input.GetMouseButtonDown(0))
        {
            if (tut)
            {
                tut.StopTut();
                tut = null;
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
                HideOnClick(result);
                SetTarget(result);
            }
        }
    }
    private void CheckInputUp()
    {
        if (Input.GetMouseButtonUp(0))
        {
            if (!lockPlay)
            {
                PointerEventData pointer = new PointerEventData(EventSystem.current)
                {
                    position = Input.mousePosition
                };
                List<RaycastResult> results = new List<RaycastResult>();
                EventSystem.current.RaycastAll(pointer, results);
                if (results.Count > 0)
                {
                    foreach (RaycastResult result in results)
                    {
                        GameObject area = result.gameObject;
                        if (!area.CompareTag("Drop")) continue;
                        DropItem(area);
                    }
                }
            }
            if (currentTarget.IsEmpty) return;
            RemoveTarget(isDone: false);
        }
    }
}
[System.Serializable]
public struct ItemDrag
{
    public GameObject DragArea;
    public GameObject Item;
    public RectTransform Icon;
    public readonly bool IsEmpty => !Item || !Icon;
    public void ClearItem()
    {
        DragArea = null;
        Item = null;
        Icon = null;
    }
}
