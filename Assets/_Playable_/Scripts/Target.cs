using System;
using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;

public class Target : MonoBehaviour
{
    [SerializeField] private GirlPart _part;
    [SerializeField] private Girl _girl;
    [SerializeField] private SkeletonGraphic _skeletonGraphic;
    [SerializeField] private List<ItemReaction> _itemReactions;

    public GirlPart Part => _part;

    public bool TryAccept(Item.ItemData itemData)
    {
        if (_girl == null) return false;
        if (!_girl.CanReceiveItem) return false;

        ItemReaction reaction = FindReaction(itemData.id);
        bool hasReaction = reaction != null;
        bool hasRules = hasReaction && reaction.HasAnimationRules();
        bool matchesCurrentStatus = hasRules && reaction.FindBestRule(_girl.Status) != null;

        if (!matchesCurrentStatus) return false;
        _girl.ApplyItem(itemData, reaction);
        return true;
    }

    private ItemReaction FindReaction(int itemId)
    {
        if (_itemReactions == null) return null;

        for (int i = 0; i < _itemReactions.Count; i++)
        {
            ItemReaction reaction = _itemReactions[i];
            if (reaction != null && reaction.itemId == itemId) return reaction;
        }

        return null;
    }

    [Serializable]
    public class ItemReaction
    {
        public int itemId;
        public List<AnimationRule> animationRules;

        [SpineSkin(dataField: nameof(_skeletonGraphic))]
        public string[] skinAdded;

        [SpineSkin(dataField: nameof(_skeletonGraphic))]
        public string[] skinRemoved;

        public AudioClip audioClip;

        public bool HasAnimationRules()
        {
            if (animationRules == null) return false;

            for (int i = 0; i < animationRules.Count; i++)
            {
                if (animationRules[i] != null) return true;
            }

            return false;
        }

        public AnimationRule FindBestRule(GirlStatus status)
        {
            if (animationRules == null) return null;

            AnimationRule bestRule = null;
            int bestScore = -1;
            for (int i = 0; i < animationRules.Count; i++)
            {
                AnimationRule rule = animationRules[i];
                if (rule == null || !rule.Matches(status)) continue;

                int score = rule.Specificity;
                if (score <= bestScore) continue;
                bestRule = rule;
                bestScore = score;
            }

            return bestRule;
        }
    }

    [Serializable]
    public class AnimationRule
    {
        public bool checkBodyShape;
        public BodyShape bodyShape;
        public bool checkOutfit;
        public Outfit outfit;
        public bool checkRestraint;
        public Restraint restraint;
        public List<GirlAnimation> animations;

        public int Specificity =>
            (checkBodyShape ? 1 : 0) +
            (checkOutfit ? 1 : 0) +
            (checkRestraint ? 1 : 0);

        public bool Matches(GirlStatus status)
        {
            if (checkBodyShape && bodyShape != status.bodyShape) return false;
            if (checkOutfit && outfit != status.outfit) return false;
            if (checkRestraint && restraint != status.restraint) return false;
            return true;
        }
    }

    [Serializable]
    public struct GirlAnimation
    {
        [SpineAnimation(dataField: nameof(_skeletonGraphic))]
        public string animationName;

        public bool loop;
    }
}

public enum GirlPart
{
    Head,
    Body,
    Leg
}
