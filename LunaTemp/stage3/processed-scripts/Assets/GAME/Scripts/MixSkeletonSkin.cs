using Spine;
using Spine.Unity;
using UnityEngine;

public class MixSkeletonSkin : MonoBehaviour
{
    public SkeletonGraphic skeletonAnimation;

    [Tooltip("Danh sách tên skin trong Spine (body, hat, shirt, ...)")]
    [SpineSkin()] public string[] skinNames; // Size = 2 thì 2 name, Size = 3 thì 3 name

    void Start()
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

        if (skinNames == null || skinNames.Length == 0)
        {
            Debug.LogWarning("Chưa nhập tên skin nào trong mảng skinNames.");
            return;
        }

        // Tạo skin mới
        Skin combinedSkin = new Skin("combined-skin");

        // Lặp qua tất cả tên skin trong mảng
        foreach (var skinName in skinNames)
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
        skeleton.SetToSetupPose();
        skeletonAnimation.AnimationState.Apply(skeleton);
    }
}
