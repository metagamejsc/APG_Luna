using System.Collections.Generic;
using Spine;
using Spine.Unity;
using UnityEngine;

public class StepController : MonoBehaviour
{ 
    AudioSource audioSource;
    public List<AudioSkeAnim> listSoundEvent;

    void Start()
    {
        audioSource = GetComponent<AudioSource>();
        var skeletonAnimation = GetComponent<SkeletonAnimation>();
        if (skeletonAnimation != null)
        {
            skeletonAnimation.AnimationState.Event += OnSpineEvent;
        }
    }
    private void OnSpineEvent(TrackEntry trackEntry, Spine.Event e)
    {
        // So khớp tên event với listEvent
        foreach (var eventName in listSoundEvent)
        {
            if (e.Data.Name == eventName.Event)
            {
                audioSource.clip= eventName.sound;
                audioSource.Play();
                //AudioManager.ins.PlaySound(eventName.sound); // Hoặc map event → sound
                break;
            }
        }
    }
}
[System.Serializable]
public class AudioSkeAnim
{
    [SerializeField,SpineEvent("","Skeletondata")]public string Event;
    public AudioClip sound;
}