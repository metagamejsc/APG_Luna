using System;
using System.Collections.Generic;
using Spine;
using Spine.Unity;
using UnityEngine;

namespace Playable
{
    public class GameController : MonoBehaviour
    {
        public static GameController Instance;
        [SerializeField] private SkeletonAnimation skeletonAnimation;
        [SerializeField] private List<string> _nameSkin = new List<string>();
        private readonly List<string> activeSkinNames = new List<string>();

        private void Awake()
        {
            Instance = this;
        }

        private void Start()
        {
            foreach (var t in _nameSkin)
            {
                AddSkin(t);
            }
        }

        private void AddSkin(string skinName)
        {
            if (activeSkinNames.Contains(skinName)) return;
            if (skeletonAnimation.skeleton.Data.FindSkin(skinName) == null) return;

            activeSkinNames.Add(skinName);
            Rebuild();
        }

        private void RemoveSkin(string skinName)
        {
            if (!activeSkinNames.Remove(skinName)) return;
            Rebuild();
        }

        public void ToggleSkin(string skinName)
        {
            if (activeSkinNames.Contains(skinName))
                RemoveSkin(skinName);
            else
                AddSkin(skinName);
        }

        private void Rebuild()
        {
            var combined = new Skin("combined-skin");

            foreach (var name in activeSkinNames)
            {
                var source = skeletonAnimation.skeleton.Data.FindSkin(name);
                if (source != null)
                    combined.AddSkin(source);
            }

            skeletonAnimation.Skeleton.SetSkin(combined);
            skeletonAnimation.Skeleton.SetSlotsToSetupPose();
            skeletonAnimation.AnimationState.Apply(skeletonAnimation.Skeleton);
        }
    }
}