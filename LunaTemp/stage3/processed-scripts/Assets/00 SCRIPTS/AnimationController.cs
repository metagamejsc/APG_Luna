using System;
using System.Collections;
using System.Collections.Generic;
using Spine;
using Spine.Unity;
using UnityEngine;

[RequireComponent(typeof(SkeletonGraphic))]
public class AnimationController : MonoBehaviour
{
    private SkeletonGraphic skeleton;

    [SerializeField] private List<Anim> anims;
    private Dictionary<GameObject, Anim> triggerMap;
    void Awake()
    {
        skeleton = GetComponent<SkeletonGraphic>();
        triggerMap = new Dictionary<GameObject, Anim>();
        anims.ForEach(a => triggerMap.Add(a.Trigger, a));
    }
    public void PlayAnimation(GameObject trigger)
    {
        if (!triggerMap.ContainsKey(trigger)) return;
        Anim anim = triggerMap[trigger];
        var animation = skeleton.AnimationState.SetAnimation(0, anim.Key, anim.Loop);
        if (anim.Sounds.Count > 0)
        {
            foreach (Sound sound in anim.Sounds)
            {
                StartCoroutine(WaitToAct(sound.TimeDelay, () => PlaySFX(sound.Clip)));
            }
        }

        if (anim.Next && anim.NextKey != null)
        {
            animation.Complete += (_) => NextAnimation(anim.NextKey);
        }
    }
    private TrackEntry NextAnimation(string key)
    {
        var animation = skeleton.AnimationState.SetAnimation(0, key, true);
        return animation;
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
    [SpineAnimation(dataField = "skeletonAnimation")] public string Key;
    [SpineAnimation(dataField = "skeletonAnimation")] public string NextKey;
    public GameObject Trigger;
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
