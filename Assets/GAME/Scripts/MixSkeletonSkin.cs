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
    public void PlayAnimationOnly(string animName, bool loop = false)
    {
        if (skeletonAnimation == null) return;
        if (string.IsNullOrEmpty(animName)) return;

        var state = skeletonAnimation.AnimationState;

        if (currentEntry != null)
        {
            currentEntry.Complete -= OnAnimationComplete;
        }

        currentEntry = state.SetAnimation(0, animName, loop);

        if (!loop)
        {
            currentEntry.Complete += OnAnimationComplete;
        }
    }
    public void PlayAnimationOnly(string animName, bool loop, System.Action onComplete)
    {
        if (skeletonAnimation == null) return;
        if (string.IsNullOrEmpty(animName)) return;

        var state = skeletonAnimation.AnimationState;

        if (currentEntry != null)
        {
            currentEntry.Complete -= OnAnimationComplete;
        }

        currentEntry = state.SetAnimation(0, animName, loop);

        if (!loop)
        {
            currentEntry.Complete += entry =>
            {
                onComplete?.Invoke();

                if (!string.IsNullOrEmpty(defaultAnim))
                {
                    skeletonAnimation.AnimationState.SetAnimation(0, defaultAnim, true);
                }

                currentEntry = null;
            };
        }
    }

    public void ApplySkinOnly(string skinName, bool loop = true)
    {
        if (string.IsNullOrEmpty(skinName)) return;
        if (skeletonAnimation == null) return;

        MixAndApplySkins(skinName);

        if (!string.IsNullOrEmpty(defaultAnim))
        {
            skeletonAnimation.AnimationState.SetAnimation(0, defaultAnim, loop);
        }
    }
    public void ApplySkinOnly(string skinName, bool loop, System.Action onComplete)
    {
        if (string.IsNullOrEmpty(skinName)) return;
        if (skeletonAnimation == null) return;

        MixAndApplySkins(skinName);

        if (!string.IsNullOrEmpty(defaultAnim))
        {
            var entry = skeletonAnimation.AnimationState.SetAnimation(0, defaultAnim, loop);

            if (!loop)
            {
                entry.Complete += _ =>
                {
                    onComplete?.Invoke();
                };
            }
            else
            {
                onComplete?.Invoke();
            }
        }
    }

    public void PlayAnimationWithSkin(string animName, string skinName, System.Action onComplete, bool loop = false)
    {
        if (string.IsNullOrEmpty(animName)) return;
        if (string.IsNullOrEmpty(skinName)) return;
        if (skeletonAnimation == null) return;

        MixAndApplySkins(skinName);

        var state = skeletonAnimation.AnimationState;

        if (currentEntry != null)
        {
            currentEntry.Complete -= OnAnimationComplete;
        }

        currentEntry = state.SetAnimation(0, animName, loop);

        currentEntry.Complete += entry =>
        {
            onComplete?.Invoke();

            if (!string.IsNullOrEmpty(defaultAnim))
            {
                //skeletonAnimation.AnimationState.SetAnimation(0, defaultAnim, true);
            }

            currentEntry = null;
        };
    }

    public bool HasAnimation(string animName)
    {
        if (skeletonAnimation == null) return false;
        if (string.IsNullOrEmpty(animName)) return false;

        return skeletonAnimation.Skeleton.Data.FindAnimation(animName) != null;
    }
    public void PlayIfHasAnimation(string animName, bool loop, System.Action onComplete = null, System.Action onNotFound = null)
    {
        if (skeletonAnimation == null) return;
        if (string.IsNullOrEmpty(animName)) return;

        var anim = skeletonAnimation.Skeleton.Data.FindAnimation(animName);

        if (anim == null)
        {
            onNotFound?.Invoke();
            return;
        }

        PlayAnimationOnly(animName, loop, onComplete);
    }

}
