using System;
using System.Collections;
using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;

[RequireComponent(typeof(SkeletonGraphic))]
public class AnimationController : MonoBehaviour
{
    [SerializeField] private SkeletonGraphic skeleton;
    [SerializeField] private List<Anim> anims;

    public void StartAnimation()
    {
        PlayAnimation(anims, 0);
    }
    public void PlayAnimation(List<Anim> anims, int currentIndex)
    {
        if (currentIndex >= anims.Count) return;

        Anim anim = anims[currentIndex];
        var animation = skeleton.AnimationState.SetAnimation(0, anim.Key, anim.Loop);
        if (anim.Sounds.Count > 0)
        {
            foreach (Sound sound in anim.Sounds)
            {
                StartCoroutine(WaitToAct(sound.TimeDelay, () => PlaySFX(sound.Clip)));
            }
        }

        if (anim.DestroyOnComplete)
        {
            animation.Complete += _ =>
            {
                Destroy(gameObject);
            };
            return;
        }

        if (!anim.Next) return;
        currentIndex++;
        if (anim.NextTime > 0)
        {
            StartCoroutine(WaitToAct(anim.NextTime, () => PlayAnimation(anims, currentIndex)));
            return;
        }
        animation.Complete += _ => PlayAnimation(anims, currentIndex);
    }
    private void PlaySFX(AudioClip clip)
    {
        AudioController.Ins.PlaySFX(clip);
    }
    private IEnumerator WaitToAct(float time, Action action)
    {
        yield return new WaitForSeconds(time);
        action?.Invoke();
    }
}
[System.Serializable]
public struct Anim
{
    [SerializeField, SpineAnimation(dataField = "skeletonAnimation")] public string Key;
    public List<Sound> Sounds;
    public bool Loop;
    public bool Next;
    public float NextTime;
    public bool DestroyOnComplete;
}
[System.Serializable]
public struct Sound
{
    public float TimeDelay;
    public AudioClip Clip;
}


