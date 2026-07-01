using UnityEngine;

public class ItemStackManager : MonoBehaviour
{
    [SerializeField] private ItemMovement[] items;
    [SerializeField] private bool _enableDebugLog = true;

    public bool CanDrag(ItemMovement dragItem)
    {
        if (IsStackItemLimitReached())
        {
            return false;
        }

        ItemMovement currentTopItem = GetCurrentTopItem();
        bool canDrag = dragItem != null && dragItem == currentTopItem;
        return canDrag;
    }

    public bool ConfirmRelease(ItemMovement dragItem)
    {
        if (IsStackItemLimitReached())
        {
            return false;
        }

        ItemMovement currentTopItem = GetCurrentTopItem();
        bool result = dragItem != null && dragItem == currentTopItem;
        return result;
    }

    public bool NotifyItemConsumed(ItemMovement dragItem)
    {
        if (dragItem == null)
        {
            return false;
        }


        ItemMovement currentTopItem = GetCurrentTopItem();
        if (dragItem != currentTopItem)
        {
            return false;
        }

        if (IsStackItemLimitReached())
        {
            return false;
        }

        if (dragItem.gameObject.activeSelf)
        {
            dragItem.gameObject.SetActive(false);
        }

        if (LunaManager.ins != null)
        {
            LunaManager.ins.CountPlay();
        }

        return true;
    }

    private bool IsStackItemLimitReached()
    {
        return LunaManager.ins != null && LunaManager.ins.IsStackItemLimitReached();
    }

    public ItemMovement GetCurrentTopItem()
    {
        if (items == null)
        {
            return null;
        }

        for (int i = 0; i < items.Length; i++)
        {
            ItemMovement item = items[i];
            if (item != null && item.gameObject.activeInHierarchy)
            {
                return item;
            }
        }

        return null;
    }

  

    private int GetCountPlay()
    {
        return LunaManager.ins != null ? LunaManager.ins.countPlay : -1;
    }

    private int GetCountPlayMax()
    {
        return LunaManager.ins != null ? LunaManager.ins.countPlayMax : -1;
    }
}
