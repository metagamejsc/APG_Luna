using UnityEngine;

public class ActiveDefaultSkin : MonoBehaviour
{
    [SerializeField] private SkeletonController anim;
    private void OnEnable()
    {
        anim.SetDefaultSkin();
    }
}
