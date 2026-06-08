using System;
using System.Collections.Generic;
using UnityEngine;

namespace Game.Gameplay
{
    /// <summary>
    /// Một bước animation trong chuỗi. Tên animation được cấu hình trong Inspector,
    /// KHÔNG hard-code trong code.
    /// </summary>
    [Serializable]
    public class AnimationStep
    {
        [Tooltip("Tên animation trong Spine SkeletonData. Cấu hình ở Inspector, không hard-code.")]
        public string animationName;

        [Tooltip("Có loop bước này không. Một bước loop nên là bước CUỐI của chuỗi (vì nó không bao giờ kết thúc để chạy bước tiếp theo).")]
        public bool loop = false;

        [Min(0f)]
        [Tooltip("Thời gian mix (blend) chuyển vào animation này.")]
        public float mixDuration = 0.1f;

        [Min(0f)]
        [Tooltip("Delay trước khi bước này bắt đầu (chỉ áp dụng cho bước được nối tiếp).")]
        public float delay = 0f;
    }

    /// <summary>
    /// Chuỗi animation chạy nối tiếp nhau (vd: intro -> loop, hoặc start -> end).
    /// </summary>
    [Serializable]
    public class AnimationSequence
    {
        [Tooltip("Danh sách bước animation chạy lần lượt trên track 0.")]
        public List<AnimationStep> steps = new List<AnimationStep>();

        public bool HasSteps => steps != null && steps.Count > 0;
    }
}
