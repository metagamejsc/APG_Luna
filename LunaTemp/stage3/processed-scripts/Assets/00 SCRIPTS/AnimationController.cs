using Spine;
using Spine.Unity;
using UnityEngine;

[RequireComponent(typeof(SkeletonGraphic))]
public class AnimationController : MonoBehaviour
{
    [SerializeField] private SkeletonGraphic skeleton;
    public void Left()
    {
        TrackEntry entry = skeleton.AnimationState.SetAnimation(0, "actionR", false);
        entry.Complete += (en) => Idle();
    }
    public void Right()
    {
        TrackEntry entry = skeleton.AnimationState.SetAnimation(0, "actionL", false);
        entry.Complete += (en) => Idle();
    }
    private void Idle()
    {
        skeleton.AnimationState.SetAnimation(0, "idle", true);
    }
}
