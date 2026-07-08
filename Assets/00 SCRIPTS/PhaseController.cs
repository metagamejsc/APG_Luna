using Spine.Unity;
using UnityEngine;

public class PhaseController : MonoBehaviour
{
    [SerializeField] SkeletonGraphic character;
    [SerializeField] string key;
    [SerializeField] GameObject legHair;
    void Start()
    {
        character.AnimationState.SetAnimation(0, key, true);
        legHair.SetActive(true);
    }
}
