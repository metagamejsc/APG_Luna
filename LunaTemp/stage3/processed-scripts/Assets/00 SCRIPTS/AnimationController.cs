using Spine.Unity;
using UnityEngine;

[RequireComponent(typeof(SkeletonGraphic))]
public class AnimationController : MonoBehaviour
{
    [SerializeField] private SkeletonGraphic skeleton;
    [SerializeField] private GameObject item;
    public void Action(GameObject item)
    {
        if (item != this.item) return;
        skeleton.AnimationState.SetAnimation(0, "action", true);
    }
    public void Idle(GameObject item)
    {
        if (item != this.item) return;
        skeleton.AnimationState.SetAnimation(0, "idle", true);
    }
}
