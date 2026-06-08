using System.Collections;
using System.Collections.Generic;
using Spine;
using Spine.Unity;
using UnityEngine;

[System.Serializable]
public class LoopAnimationSound
{
    [SpineAnimation(dataField: "skeletonGraphic")]
    public string animationName;
    public AudioClip sound;
    public float delay;
    public float volume = 1f;
}

[RequireComponent(typeof(SkeletonGraphic))]
public class SkeletonGraphicLoopSound : MonoBehaviour
{
    [SerializeField] private SkeletonGraphic skeletonGraphic;
    [SerializeField] private AudioSource audioSource;
    [SerializeField] private List<LoopAnimationSound> loopSounds = new List<LoopAnimationSound>();

    private string currentAnimationName = "";
    private int currentLoopIndex = -1;
    private Coroutine playSoundCoroutine;

    private void Awake()
    {
        if (skeletonGraphic == null)
            skeletonGraphic = GetComponent<SkeletonGraphic>();
    }

    private void OnDisable()
    {
        StopPendingSound();
        currentAnimationName = "";
        currentLoopIndex = -1;
    }

    private void Update()
    {
        if (skeletonGraphic == null || skeletonGraphic.AnimationState == null)
            return;

        TrackEntry entry = skeletonGraphic.AnimationState.GetCurrent(0);
        if (entry == null || entry.Animation == null || !entry.Loop)
        {
            StopPendingSound();
            currentAnimationName = "";
            currentLoopIndex = -1;
            return;
        }

        string animationName = entry.Animation.Name;
        int loopIndex = GetLoopIndex(entry);

        if (animationName == currentAnimationName && loopIndex == currentLoopIndex)
            return;

        currentAnimationName = animationName;
        currentLoopIndex = loopIndex;

        var config = FindLoopSound(animationName);
        if (config == null || config.sound == null)
            return;

        StopPendingSound();
        playSoundCoroutine = StartCoroutine(PlaySoundAfterDelay(config, animationName, loopIndex));
    }

    private int GetLoopIndex(TrackEntry entry)
    {
        float duration = entry.Animation.Duration;
        if (duration <= 0f)
            return 0;

        return Mathf.FloorToInt(entry.TrackTime / duration);
    }

    private LoopAnimationSound FindLoopSound(string animationName)
    {
        if (loopSounds == null || string.IsNullOrEmpty(animationName))
            return null;

        for (int i = 0; i < loopSounds.Count; i++)
        {
            var config = loopSounds[i];
            if (config != null && config.animationName == animationName)
                return config;
        }

        return null;
    }

    private IEnumerator PlaySoundAfterDelay(LoopAnimationSound config, string animationName, int loopIndex)
    {
        if (config.delay > 0f)
            yield return new WaitForSeconds(config.delay);

        if (!IsSameLoopStillPlaying(animationName, loopIndex))
        {
            playSoundCoroutine = null;
            yield break;
        }

        PlaySound(config);
        playSoundCoroutine = null;
    }

    private bool IsSameLoopStillPlaying(string animationName, int loopIndex)
    {
        if (skeletonGraphic == null || skeletonGraphic.AnimationState == null)
            return false;

        TrackEntry entry = skeletonGraphic.AnimationState.GetCurrent(0);
        return entry != null
               && entry.Animation != null
               && entry.Loop
               && entry.Animation.Name == animationName
               && GetLoopIndex(entry) == loopIndex;
    }

    private void PlaySound(LoopAnimationSound config)
    {
        if (audioSource != null)
        {
            audioSource.PlayOneShot(config.sound, config.volume);
            return;
        }

        if (AudioController.Instance != null)
            AudioController.Instance.PlaySfx(config.sound, config.volume);
    }

    private void StopPendingSound()
    {
        if (playSoundCoroutine == null)
            return;

        StopCoroutine(playSoundCoroutine);
        playSoundCoroutine = null;
    }
}
