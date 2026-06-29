using System;
using System.Collections;
using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;

[RequireComponent(typeof(SkeletonGraphic))]
public class AnimationController : MonoBehaviour
{
    private SkeletonGraphic skeleton;

    [SerializeField] private List<Anim> anims;
    [SerializeField] private int currentIndex;
    void Awake()
    {
        skeleton = GetComponent<SkeletonGraphic>();
        currentIndex = -1;
    }
    public void NextAnimation()
    {
        if (currentIndex >= anims.Count - 1) return;

        currentIndex++;
        Anim anim = anims[currentIndex];
        var animation = skeleton.AnimationState.SetAnimation(0, anim.Key, anim.Loop);
        if (anim.Sound.Count > 0)
        {
            anim.Sound.ForEach(
                s => StartCoroutine(WaitToAct(s.Delay, () => AudioController.Ins.PlaySFX(s.Clip)))
                );
        }

        if (!anim.Next) return;
        animation.Complete += _ => NextAnimation();
    }
    private IEnumerator WaitToAct(float time, Action action)
    {
        if (time == 0) action?.Invoke();
        else
        {
            yield return new WaitForSeconds(time);
            action?.Invoke();
        }
    }
}
[Serializable]
public struct Anim
{
    [SerializeField, SpineAnimation(dataField = "skeletonAnimation")] public string Key;
    public List<Sound> Sound;
    public bool Loop;
    public bool Next;
}
[Serializable]
public struct Sound
{
    public AudioClip Clip;
    public float Delay;
}
