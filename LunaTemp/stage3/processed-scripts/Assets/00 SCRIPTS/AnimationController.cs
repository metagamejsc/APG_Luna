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
        if (anim.Sounds.Count > 0)
        {
            foreach (Sound sound in anim.Sounds)
            {
                StartCoroutine(WaitToAct(sound.TimeDelay, () => PlaySFX(sound.Clip)));
            }
        }

        if (!anim.Next) return;
        animation.Complete += _ => NextAnimation();
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
}
[System.Serializable]
public struct Sound
{
    public float TimeDelay;
    public AudioClip Clip;
}
