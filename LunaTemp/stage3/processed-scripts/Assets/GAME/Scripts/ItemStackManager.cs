using UnityEngine;

public class ItemStackManager : MonoBehaviour
{
    [SerializeField] private ItemMovement[] items;
    [SerializeField] private bool _enableDebugLog = true;

    public bool CanDrag(ItemMovement dragItem)
    {
        if (IsStackItemLimitReached())
        {
            Log($"CanDrag blocked by stack limit. countPlay={GetCountPlay()} countPlayMax={GetCountPlayMax()}");
            return false;
        }

        ItemMovement currentTopItem = GetCurrentTopItem();
        bool canDrag = dragItem != null && dragItem == currentTopItem;
        Log($"CanDrag dragItem={(dragItem != null ? dragItem.name : "null")} currentTopItem={(currentTopItem != null ? currentTopItem.name : "null")} result={canDrag}");
        return canDrag;
    }

    public bool ConfirmRelease(ItemMovement dragItem)
    {
        if (IsStackItemLimitReached())
        {
            Log($"ConfirmRelease blocked by stack limit. countPlay={GetCountPlay()} countPlayMax={GetCountPlayMax()}");
            return false;
        }

        ItemMovement currentTopItem = GetCurrentTopItem();
        bool result = dragItem != null && dragItem == currentTopItem;
        Log($"ConfirmRelease dragItem={(dragItem != null ? dragItem.name : "null")} currentTopItem={(currentTopItem != null ? currentTopItem.name : "null")} result={result}");
        return result;
    }

    public bool NotifyItemConsumed(ItemMovement dragItem)
    {
        if (dragItem == null)
        {
            Log("NotifyItemConsumed failed: dragItem is null.");
            return false;
        }


        ItemMovement currentTopItem = GetCurrentTopItem();
        if (dragItem != currentTopItem)
        {
            Log($"NotifyItemConsumed failed: dragItem={dragItem.name} currentTopItem={(currentTopItem != null ? currentTopItem.name : "null")}");
            return false;
        }

        if (IsStackItemLimitReached())
        {
            Log($"NotifyItemConsumed blocked by stack limit. countPlay={GetCountPlay()} countPlayMax={GetCountPlayMax()}");
            return false;
        }

        if (dragItem.gameObject.activeSelf)
        {
            Log($"NotifyItemConsumed deactivating {dragItem.name}");
            dragItem.gameObject.SetActive(false);
        }

        if (LunaManager.ins != null)
        {
            Log("NotifyItemConsumed -> LunaManager.CountPlay()");
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
            Log("GetCurrentTopItem: items is null.");
            return null;
        }

        for (int i = 0; i < items.Length; i++)
        {
            ItemMovement item = items[i];
            if (item != null && item.gameObject.activeInHierarchy)
            {
                Log($"GetCurrentTopItem: index={i} item={item.name}");
                return item;
            }
        }

        Log("GetCurrentTopItem: no active item found.");
        return null;
    }

    private void Log(string message)
    {
        if (!_enableDebugLog)
        {
            return;
        }

        Debug.Log($"[ItemStackManager:{name}] {message}");
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
