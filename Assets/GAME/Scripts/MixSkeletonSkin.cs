using Spine;
using Spine.Unity;
using UnityEngine;

public class MixSkeletonSkin : MonoBehaviour
{
    public SkeletonGraphic skeletonAnimation;

    [Tooltip("Danh sách tên skin trong Spine (body, hat, shirt, ...)")]
    [SpineSkin] public string[] skinNames; // Set trong Inspector nếu muốn auto mix khi Start

    void Start()
    {
        // Nếu muốn tự động mix theo mảng skinNames trong Inspector khi game chạy
        MixAndApplySkins();
    }

    /// <summary>
    /// Public function: Mix skin theo danh sách truyền vào.
    /// Nếu không truyền gì (hoặc null / rỗng) thì sẽ dùng mảng skinNames trong Inspector.
    /// </summary>
    public void MixAndApplySkins(params string[] skinsToMix)
    {
        if (skeletonAnimation == null)
        {
            Debug.LogError("skeletonAnimation chưa được gán trong Inspector!");
            return;
        }

        var skeleton = skeletonAnimation.Skeleton;
        if (skeleton == null)
        {
            Debug.LogError("Skeleton của SkeletonGraphic đang null.");
            return;
        }

        var skeletonData = skeleton.Data;
        if (skeletonData == null)
        {
            Debug.LogError("SkeletonData đang null.");
            return;
        }

        // Nếu không truyền skinsToMix thì dùng mảng skinNames trong Inspector
        string[] namesToUse = (skinsToMix != null && skinsToMix.Length > 0)
            ? skinsToMix
            : skinNames;

        if (namesToUse == null || namesToUse.Length == 0)
        {
            Debug.LogWarning("Chưa nhập tên skin nào để mix.");
            return;
        }

        // Tạo skin mới
        Skin combinedSkin = new Skin("combined-skin");

        // Lặp qua tất cả tên skin
        foreach (var skinName in namesToUse)
        {
            if (string.IsNullOrEmpty(skinName))
                continue;

            Skin skin = skeletonData.FindSkin(skinName);
            if (skin == null)
            {
                Debug.LogWarning("Không tìm thấy skin: " + skinName);
                continue;
            }

            combinedSkin.AddSkin(skin);
        }

        // Gán skin mới vào skeleton
        skeleton.SetSkin(combinedSkin);
        skeleton.SetSlotsToSetupPose();          // hoặc SetToSetupPose() tùy bạn
        skeletonAnimation.AnimationState.Apply(skeleton);
        skeletonAnimation.LateUpdate();
    }
}
