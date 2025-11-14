using Spine.Unity;
using UnityEngine;

[System.Serializable]
public class StepData
{
    public GameObject object1; // Vật có thể kéo
    public SkeletonAnimation targetSkeleton; // Đích tĩnh có SkeletonAnimation
    public SkeletonDataAsset Skeletondata; // SkeletonDataAsset của object2
    [SerializeField,SpineAnimation("","Skeletondata")]public string targetAnimation; // Animation object2 cần chạy
    [SerializeField,SpineEvent("","Skeletondata")]public string[] listEvent; // Animation object2 cần chạy
    public bool movePlayerAfterStep; // Có di chuyển không?
}
