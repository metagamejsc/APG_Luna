using UnityEngine;

public class ActiveActionSkin : MonoBehaviour
{
    [SerializeField] private SkeletonController anim;
    private void OnEnable()
    {
        anim.SetActionSkin();
    }
}
