using System;
using System.Collections;
using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;

namespace Playable
{
    public class TargetLevel37 : Target
    {
        [SerializeField] private List<BoyInfo> boyInfos = new List<BoyInfo>();
        [SerializeField] private bool _isKeepLastBoy = true;
        [SerializeField, Min(0f)] private float _delayDeactivate;
        [SerializeField] private float _delayTime;

        private Camera _inputCamera;
        private bool _isBusy;

        public bool IsBusy => _isBusy;

        protected override void OnTargetInitialized()
        {
            _inputCamera = Camera.main;
        }

        private void Update()
        {
            if (_inputCamera == null) return;

            Vector2 screenPosition;
            if (!TryGetPointerDown(out screenPosition)) return;

            if (TargetCollider == null) return;

            Vector3 worldPosition = ScreenToWorld(screenPosition);
            if (!LunaBox2DGeometry.ContainsPoint(TargetCollider, worldPosition)) return;

            TriggerBoyLose(FindClickableBoyIndex());
            GameManager.Instance.CountEvent();
        }

        public override bool TryAccept(Item item, BoxCollider2D itemCollider)
        {
            ItemLevel37 itemLevel37 = item as ItemLevel37;
            if (itemLevel37 == null) return false;
            if (FindBoyIndexByType(itemLevel37.Type) < 0) return false;

            return base.TryAccept(item, itemCollider);
        }

        protected override void OnItemAccepted(Item item)
        {
            ItemLevel37 itemLevel37 = item as ItemLevel37;
            if (itemLevel37 == null) return;

            TriggerBoyLose(FindBoyIndexByType(itemLevel37.Type));
        }

        public void TriggerLoseByType(TargetType type)
        {
            TriggerBoyLose(FindBoyIndexByType(type));
        }

        private void TriggerBoyLose(int loseIndex)
        {
            if (_isBusy) return;
            if (loseIndex < 0 || loseIndex >= boyInfos.Count) return;

            _isBusy = true;

            if (boyInfos[loseIndex].Type == TargetType.Ruler) PlayAllMeters();

            PlayLose(loseIndex);

            AnimInfo loseAnimInfo = boyInfos[loseIndex].AnimInfo;

            for (int i = 0; i < boyInfos.Count; i++)
            {
                if (i == loseIndex) continue;
                if (!IsBoyAlive(boyInfos[i])) continue;

                PlayWin(boyInfos[i], loseAnimInfo.AnimWin);
            }
        }

        // Plays each alive boy's own Meter anim once. Triggered specifically when the Ruler item
        // makes the Ruler boy lose.
        private void PlayAllMeters()
        {
            for (int i = 0; i < boyInfos.Count; i++)
            {
                if (!IsBoyAlive(boyInfos[i])) continue;

                AnimInfo animInfo = boyInfos[i].AnimInfo;
                if (animInfo.Meter == null || string.IsNullOrEmpty(animInfo.MeterAnim)) continue;

                Spine.AnimationState meterState = animInfo.Meter.AnimationState;
                if (!HasAnimation(meterState, animInfo.MeterAnim)) continue;

                meterState.SetAnimation(0, animInfo.MeterAnim, false);
            }
        }

        // Plays each step in order. A step ticked IsLoop loops and holds for _delayTime seconds
        // before the next step starts; otherwise it plays once and the next step starts right after.
        // Then chains into AnimDefault the same way (delay only if the last step looped).
        private void PlayWin(BoyInfo boy, List<AnimStep> animWinSteps)
        {
            if (boy.AnimInfo.Skeleton == null) return;

            Spine.AnimationState state = boy.AnimInfo.Skeleton.AnimationState;
            Spine.TrackEntry entry = PlaySteps(state, animWinSteps, out bool lastWasLoop);

            string animDefault = boy.AnimInfo.AnimDefault;
            if (string.IsNullOrEmpty(animDefault) || !HasAnimation(state, animDefault)) return;

            if (entry == null) state.SetAnimation(0, animDefault, true);
            else state.AddAnimation(0, animDefault, true, entry.Animation.Duration + (lastWasLoop ? _delayTime : 0f));
        }

        // Same step-by-step playback as PlayWin, but deactivates the boy once the last step completes
        // (or immediately if there are no valid steps).
        private void PlayLose(int index)
        {
            AnimInfo animInfo = boyInfos[index].AnimInfo;

            if (animInfo.Item != null) PlaySequence(animInfo.Item.AnimationState, animInfo.AnimItem);

            if (animInfo.Skeleton == null)
            {
                FinishLose(index);
                return;
            }

            Spine.AnimationState state = animInfo.Skeleton.AnimationState;
            Spine.TrackEntry entry = PlaySteps(state, animInfo.AnimLoseSteps, out _);

            if (entry == null)
            {
                FinishLose(index);
                return;
            }

            entry.Complete += _ => FinishLose(index);
        }

        // Runs once a boy's lose sequence has fully finished. If the Ruler boy just finished losing,
        // also deactivates every boy's Meter GameObject before deactivating the boy itself.
        private void FinishLose(int index)
        {
            if (boyInfos[index].Type == TargetType.Ruler) DeactivateAllMeters();

            DeactivateBoy(index);
        }

        private void DeactivateAllMeters()
        {
            for (int i = 0; i < boyInfos.Count; i++)
            {
                SkeletonAnimation meter = boyInfos[i].AnimInfo.Meter;
                if (meter != null) meter.gameObject.SetActive(false);
            }
        }

        // Plays a list of AnimStep entries back to back on track 0. A looping step holds for
        // _delayTime seconds before the next step starts; a non-looping step's next step starts as
        // soon as it naturally completes. Returns the last valid entry played (or null) and whether
        // that entry was set to loop.
        private Spine.TrackEntry PlaySteps(Spine.AnimationState state, List<AnimStep> steps, out bool lastWasLoop)
        {
            Spine.TrackEntry lastEntry = null;
            lastWasLoop = false;

            if (steps == null) return null;

            foreach (AnimStep step in steps)
            {
                if (string.IsNullOrEmpty(step.Name) || !HasAnimation(state, step.Name)) continue;

                lastEntry = lastEntry == null
                    ? state.SetAnimation(0, step.Name, step.IsLoop)
                    : state.AddAnimation(0, step.Name, step.IsLoop,
                        lastEntry.Animation.Duration + (lastWasLoop ? _delayTime : 0f));

                lastWasLoop = step.IsLoop;
            }

            return lastEntry;
        }

        private static Spine.TrackEntry PlaySequence(Spine.AnimationState state, List<string> animNames)
        {
            if (animNames == null || animNames.Count <= 0) return null;

            Spine.TrackEntry lastEntry = null;

            foreach (string animName in animNames)
            {
                if (string.IsNullOrEmpty(animName) || !HasAnimation(state, animName)) continue;

                lastEntry = lastEntry == null
                    ? state.SetAnimation(0, animName, false)
                    : state.AddAnimation(0, animName, false, 0f);
            }

            return lastEntry;
        }

        private static bool HasAnimation(Spine.AnimationState state, string animName)
        {
            return state.Data.SkeletonData.FindAnimation(animName) != null;
        }


        private void DeactivateBoy(int index)
        {
            if (_delayDeactivate > 0f && isActiveAndEnabled)
            {
                StartCoroutine(DeactivateBoyDelayed(index));
                return;
            }

            SetBoyActive(index, false);
        }

        private IEnumerator DeactivateBoyDelayed(int index)
        {
            yield return new WaitForSeconds(_delayDeactivate);
            SetBoyActive(index, false);
        }

        private void SetBoyActive(int index, bool isActive)
        {
            if (index < 0 || index >= boyInfos.Count) return;

            GameObject root = GetBoyRoot(boyInfos[index]);
            if (root != null) root.SetActive(isActive);

            if (!isActive) _isBusy = false;
        }

        private static GameObject GetBoyRoot(BoyInfo boy)
        {
            if (boy.Root != null) return boy.Root;

            return boy.AnimInfo.Skeleton != null ? boy.AnimInfo.Skeleton.gameObject : null;
        }

        private static bool IsBoyAlive(BoyInfo boy)
        {
            GameObject root = GetBoyRoot(boy);
            return root != null && root.activeSelf;
        }

        private int FindBoyIndexByType(TargetType type)
        {
            if (_isBusy) return -1;
            if (_isKeepLastBoy && CountAliveBoys() <= 1) return -1;

            for (int index = 0; index < boyInfos.Count; index++)
            {
                if (boyInfos[index].Type != type) continue;
                if (!IsBoyAlive(boyInfos[index])) continue;

                return index;
            }

            return -1;
        }

        private int FindClickableBoyIndex()
        {
            if (_isBusy) return -1;
            if (_isKeepLastBoy && CountAliveBoys() <= 1) return -1;

            for (int index = 0; index < boyInfos.Count; index++)
            {
                if (!boyInfos[index].IsClickable) continue;
                if (!IsBoyAlive(boyInfos[index])) continue;

                return index;
            }

            return -1;
        }

        private int CountAliveBoys()
        {
            int count = 0;
            for (int index = 0; index < boyInfos.Count; index++)
            {
                if (IsBoyAlive(boyInfos[index])) count++;
            }

            return count;
        }

        private Vector3 ScreenToWorld(Vector2 screenPosition)
        {
            float depth = _inputCamera.WorldToScreenPoint(transform.position).z;
            Vector3 worldPosition = _inputCamera.ScreenToWorldPoint(
                new Vector3(screenPosition.x, screenPosition.y, depth));
            worldPosition.z = transform.position.z;
            return worldPosition;
        }

        private static bool TryGetPointerDown(out Vector2 screenPosition)
        {
            for (int index = 0; index < Input.touchCount; index++)
            {
                Touch touch = Input.GetTouch(index);
                if (touch.phase != TouchPhase.Began) continue;

                screenPosition = touch.position;
                return true;
            }

            if (Input.touchCount == 0 && Input.GetMouseButtonDown(0))
            {
                screenPosition = Input.mousePosition;
                return true;
            }

            screenPosition = default;
            return false;
        }
    }

    [Serializable]
    public struct BoyInfo
    {
        public TargetType Type;
        public GameObject Root;
        public AnimInfo AnimInfo;
        public bool IsClickable;
    }

    [Serializable]
    public struct AnimInfo
    {
        public SkeletonAnimation Skeleton;
        public SkeletonAnimation Item;
        public SkeletonAnimation Meter;

        [SpineAnimation(dataField: "Skeleton")]
        public string AnimDefault;

        public List<AnimStep> AnimWin;
        public List<AnimStep> AnimLoseSteps;

        [SpineAnimation(dataField: "Item")] public List<string> AnimItem;

        [SpineAnimation(dataField: "Meter")] public string MeterAnim;
    }

    [Serializable]
    public struct AnimStep
    {
        [SpineAnimation(dataField: "Skeleton")] public string Name;
        public bool IsLoop;
    }

    public enum TargetType
    {
        Weight,
        Ball,
        Shirt,
        Money,
        Sponge,
        Win,
        Trumpet,
        Eye,
        Ruler,
        Cloud,
        Brick
    }
}