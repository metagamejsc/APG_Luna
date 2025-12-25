using Spine;
using Spine.Unity;
using UnityEngine;

public static class SpineHelper
{
    /// <summary>
    /// Đổi skin + play animation cho SkeletonGraphic.
    /// </summary>
    public static void ChangeSkinAndAnimation(
        SkeletonGraphic skeletonGraphic,
        string skinName,
        string animationName,
        bool loop = true)
    {
        if (skeletonGraphic == null)
        {
            Debug.LogError("SkeletonGraphic bị null!");
            return;
        }

        var skeleton = skeletonGraphic.Skeleton;
        if (skeleton == null)
        {
            Debug.LogError("Skeleton của SkeletonGraphic bị null!");
            return;
        }

        // ==== ĐỔI SKIN ====
        if (!string.IsNullOrEmpty(skinName))
        {
            ChangeSkin(skeletonGraphic, skinName, false); // không LateUpdate ở đây
        }

        // ==== PLAY ANIMATION ====
        if (!string.IsNullOrEmpty(animationName))
        {
            ChangeAnimation(skeletonGraphic, animationName, loop, false); // không LateUpdate ở đây
        }

        // Force update lại render 1 lần cuối
        skeletonGraphic.LateUpdate();
    }

    /// <summary>
    /// Chỉ đổi skin cho SkeletonGraphic.
    /// </summary>
    public static void ChangeSkin(
        SkeletonGraphic skeletonGraphic,
        string skinName,
        bool autoUpdate = true)
    {
        if (skeletonGraphic == null)
        {
            Debug.LogError("SkeletonGraphic bị null!");
            return;
        }

        var skeleton = skeletonGraphic.Skeleton;
        if (skeleton == null)
        {
            Debug.LogError("Skeleton của SkeletonGraphic bị null!");
            return;
        }

        if (string.IsNullOrEmpty(skinName))
        {
            Debug.LogWarning("skinName bị rỗng hoặc null.");
            return;
        }

        var skin = skeleton.Data.FindSkin(skinName);
        if (skin == null)
        {
            Debug.LogWarning($"Không tìm thấy skin: {skinName}");
            return;
        }

        skeleton.SetSkin(skin);
        skeleton.SetSlotsToSetupPose();

        if (autoUpdate)
        {
            skeletonGraphic.AnimationState.Apply(skeleton);
            skeletonGraphic.LateUpdate();
        }
    }

    /// <summary>
    /// Chỉ đổi animation cho SkeletonGraphic.
    /// </summary>
    public static void ChangeAnimation(
        SkeletonGraphic skeletonGraphic,
        string animationName,
        bool loop = true,
        bool autoUpdate = true,
        bool clearTrack = true)
    {
        if (skeletonGraphic == null)
        {
            Debug.LogError("SkeletonGraphic bị null!");
            return;
        }

        var skeleton = skeletonGraphic.Skeleton;
        if (skeleton == null)
        {
            Debug.LogError("Skeleton của SkeletonGraphic bị null!");
            return;
        }

        var state = skeletonGraphic.AnimationState;
        if (state == null)
        {
            Debug.LogError("AnimationState bị null!");
            return;
        }

        if (string.IsNullOrEmpty(animationName))
        {
            Debug.LogWarning("animationName bị rỗng hoặc null.");
            return;
        }

        var anim = skeleton.Data.FindAnimation(animationName);
        if (anim == null)
        {
            Debug.LogWarning($"Không tìm thấy animation: {animationName}");
            return;
        }

        if (clearTrack)
            state.ClearTrack(0);

        state.SetAnimation(0, anim, loop);

        if (autoUpdate)
        {
            state.Apply(skeleton);
            skeletonGraphic.LateUpdate();
        }
    }

    // =================== MIX SKIN ===================

    /// <summary>
    /// Tạo 1 Skin mới bằng cách cộng dồn nhiều skinName trong SkeletonData.
    /// Không tự set vào skeleton, chỉ trả về Skin.
    /// </summary>
    public static Skin CreateCombinedSkin(SkeletonData skeletonData, params string[] skinNames)
    {
        if (skeletonData == null)
        {
            Debug.LogError("SkeletonData bị null khi tạo combined skin.");
            return null;
        }

        if (skinNames == null || skinNames.Length == 0)
        {
            Debug.LogWarning("Không có skinName nào được truyền vào để mix.");
            return null;
        }

        Skin combinedSkin = new Skin("combined-skin");

        foreach (var skinName in skinNames)
        {
            if (string.IsNullOrEmpty(skinName))
                continue;

            var skin = skeletonData.FindSkin(skinName);
            if (skin == null)
            {
                Debug.LogWarning("Không tìm thấy skin: " + skinName);
                continue;
            }

            combinedSkin.AddSkin(skin);
        }

        return combinedSkin;
    }

    /// <summary>
    /// Mix nhiều skin theo tên và áp trực tiếp vào SkeletonGraphic.
    /// </summary>
    public static void MixAndApplySkins(SkeletonGraphic skeletonGraphic, params string[] skinNames)
    {
        if (skeletonGraphic == null)
        {
            Debug.LogError("SkeletonGraphic bị null trong MixAndApplySkins!");
            return;
        }

        var skeleton = skeletonGraphic.Skeleton;
        if (skeleton == null)
        {
            Debug.LogError("Skeleton của SkeletonGraphic đang null trong MixAndApplySkins.");
            return;
        }

        var skeletonData = skeleton.Data;
        if (skeletonData == null)
        {
            Debug.LogError("SkeletonData đang null trong MixAndApplySkins.");
            return;
        }

        var combinedSkin = CreateCombinedSkin(skeletonData, skinNames);
        if (combinedSkin == null)
        {
            Debug.LogWarning("CombinedSkin null, có thể do không có skin nào hợp lệ.");
            return;
        }

        skeleton.SetSkin(combinedSkin);
        skeleton.SetSlotsToSetupPose();
        skeletonGraphic.AnimationState.Apply(skeleton);
        skeletonGraphic.LateUpdate();
    }
}
