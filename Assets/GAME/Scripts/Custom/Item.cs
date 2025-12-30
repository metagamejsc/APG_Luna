using UnityEngine;
using Spine.Unity;

public class Item : MonoBehaviour
{
    public GameObject nodeHumman;
    public GameObject nodeItem;

    public SkeletonGraphic GetSkeletonHuman()
    {
        if (nodeHumman == null)
            return null;

        return nodeHumman.GetComponent<SkeletonGraphic>();
    }

    public SkeletonGraphic GetSkeletonItem()
    {
        if (nodeItem == null)
            return null;

        return nodeItem.GetComponent<SkeletonGraphic>();
    }
}
