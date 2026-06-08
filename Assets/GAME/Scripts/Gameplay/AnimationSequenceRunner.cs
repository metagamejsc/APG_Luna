using System;
using Spine;
using Spine.Unity;
using UnityEngine;
using AnimationState = Spine.AnimationState;

namespace Game.Gameplay
{
    /// <summary>
    /// Chạy một <see cref="AnimationSequence"/> trên một SkeletonGraphic.
    /// Các bước được xếp hàng (queue) trên track 0 bằng SetAnimation/AddAnimation,
    /// nên Spine tự lo việc nối tiếp loop/end/sequence. Không hard-code tên animation.
    /// </summary>
    [RequireComponent(typeof(SkeletonGraphic))]
    public class AnimationSequenceRunner : MonoBehaviour
    {
        [SerializeField] private SkeletonGraphic skeletonGraphic;

        /// <summary>Đang chạy một chuỗi (chưa tới bước cuối / hoặc bước cuối đang loop).</summary>
        public bool IsPlaying { get; private set; }

        private void Awake()
        {
            if (skeletonGraphic == null)
                skeletonGraphic = GetComponent<SkeletonGraphic>();
        }

        /// <summary>
        /// Phát chuỗi animation. <paramref name="onComplete"/> được gọi khi bước cuối kết thúc
        /// (nếu bước cuối loop thì gọi sau vòng loop đầu tiên, đúng 1 lần).
        /// Nếu chuỗi rỗng/không hợp lệ thì gọi onComplete ngay lập tức.
        /// </summary>
        public void Play(AnimationSequence sequence, Action onComplete = null)
        {
            if (skeletonGraphic == null)
            {
                Debug.LogError($"[AnimationSequenceRunner] SkeletonGraphic null trên {name}.");
                onComplete?.Invoke();
                return;
            }

            if (sequence == null || !sequence.HasSteps)
            {
                // Không có gì để chạy -> coi như xong ngay.
                onComplete?.Invoke();
                return;
            }

            var state = skeletonGraphic.AnimationState;
            var skeletonData = skeletonGraphic.Skeleton?.Data;
            if (state == null || skeletonData == null)
            {
                Debug.LogError($"[AnimationSequenceRunner] AnimationState/SkeletonData null trên {name}.");
                onComplete?.Invoke();
                return;
            }

            state.ClearTrack(0);

            TrackEntry lastEntry = null;
            for (int i = 0; i < sequence.steps.Count; i++)
            {
                var step = sequence.steps[i];
                if (step == null || string.IsNullOrEmpty(step.animationName))
                    continue;

                var anim = skeletonData.FindAnimation(step.animationName);
                if (anim == null)
                {
                    Debug.LogWarning($"[AnimationSequenceRunner] Không tìm thấy animation '{step.animationName}' trên {name}.");
                    continue;
                }

                TrackEntry entry = lastEntry == null
                    ? state.SetAnimation(0, anim, step.loop)
                    : state.AddAnimation(0, anim, step.loop, step.delay);

                entry.MixDuration = step.mixDuration;
                lastEntry = entry;
            }

            if (lastEntry == null)
            {
                // Tất cả bước đều invalid.
                onComplete?.Invoke();
                return;
            }

            IsPlaying = true;
            RegisterCompleteOnce(lastEntry, () =>
            {
                IsPlaying = false;
                onComplete?.Invoke();
            });
        }

        /// <summary>Dừng và xoá track hiện tại.</summary>
        public void Stop()
        {
            IsPlaying = false;
            if (skeletonGraphic != null && skeletonGraphic.AnimationState != null)
                skeletonGraphic.AnimationState.ClearTrack(0);
        }

        /// <summary>
        /// Đăng ký callback Complete chỉ chạy 1 lần rồi tự gỡ (tránh bị gọi lại mỗi vòng loop).
        /// </summary>
        private static void RegisterCompleteOnce(TrackEntry entry, Action callback)
        {
            AnimationState.TrackEntryDelegate handler = null;
            handler = trackEntry =>
            {
                trackEntry.Complete -= handler;
                callback?.Invoke();
            };
            entry.Complete += handler;
        }
    }
}
