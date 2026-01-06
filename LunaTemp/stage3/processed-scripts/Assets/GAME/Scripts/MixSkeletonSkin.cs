using Spine;
using Spine.Unity;
using UnityEngine;
using System.Collections.Generic;

public class MixSkeletonSkin : MonoBehaviour
{
    public SkeletonGraphic skeletonAnimation;

    [SpineSkin]
    public List<string> skinNames = new List<string>();

    public string defaultAnim;

    TrackEntry currentEntry;

    void Start()
    {
        MixAndApplySkins();

        if (!string.IsNullOrEmpty(defaultAnim))
        {
            skeletonAnimation.AnimationState.SetAnimation(0, defaultAnim, true);
        }
    }

    public void MixAndApplySkins(params string[] skinsToMix)
    {
        if (skeletonAnimation == null) return;

        var skeleton = skeletonAnimation.Skeleton;
        if (skeleton == null) return;

        var skeletonData = skeleton.Data;
        if (skeletonData == null) return;

        IEnumerable<string> namesToUse =
            (skinsToMix != null && skinsToMix.Length > 0)
                ? (IEnumerable<string>)skinsToMix
                : skinNames;

        if (namesToUse == null) return;

        Skin combinedSkin = new Skin("combined-skin");

        foreach (var skinName in namesToUse)
        {
            if (string.IsNullOrEmpty(skinName)) continue;

            Skin skin = skeletonData.FindSkin(skinName);
            if (skin == null) continue;

            combinedSkin.AddSkin(skin);
        }

        skeleton.SetSkin(combinedSkin);
        skeleton.SetSlotsToSetupPose();
        skeletonAnimation.AnimationState.Apply(skeleton);
        skeletonAnimation.LateUpdate();
    }

    public void AddSkin(string skinName)
    {
        if (string.IsNullOrEmpty(skinName)) return;
        skinNames.Add(skinName);
    }

    public void RemoveSkinAt(int index)
    {
        if (index < 0 || index >= skinNames.Count) return;
        skinNames.RemoveAt(index);
    }

    public void RemoveSkinName(string skinName)
    {
        if (string.IsNullOrEmpty(skinName)) return;
        skinNames.RemoveAll(s => s == skinName);
    }

    public void PlayAnimation(string animName)
    {
        if (skeletonAnimation == null) return;
        if (string.IsNullOrEmpty(animName)) return;

        var state = skeletonAnimation.AnimationState;

        if (currentEntry != null)
        {
            currentEntry.Complete -= OnAnimationComplete;
        }

        currentEntry = state.SetAnimation(0, animName, false);
        currentEntry.Complete += OnAnimationComplete;
    }

    void OnAnimationComplete(TrackEntry entry)
    {
        entry.Complete -= OnAnimationComplete;

        if (!string.IsNullOrEmpty(defaultAnim))
        {
            skeletonAnimation.AnimationState.SetAnimation(0, defaultAnim, true);
        }

        currentEntry = null;
    }
}
