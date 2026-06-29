using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioController : MonoBehaviour
{
    [Header("BGM")]
    [SerializeField] private AudioClip musicSound;
    [SerializeField] private AudioSource musicSource;
    [SerializeField] private float delayMusic;

    [Header("Intro")]
    [SerializeField] private AudioClip introSound;
    [SerializeField] private AudioSource introSource;
    [SerializeField] private float delayIntro;

    [Header("SFX")]
    [SerializeField] private Transform SFXPool;
    private List<AudioSource> SFXSources;

    public static AudioController Ins;
    private void CreateIns()
    {
        if (Ins && Ins != this)
        {
            Destroy(gameObject);
            return;
        }
        Ins = this;
        DontDestroyOnLoad(gameObject);
    }
    void Awake()
    {
        CreateIns();
        InitPool();
    }
    private void InitPool()
    {
        SFXSources = new List<AudioSource>();
        CreatNewSource();
        CreatNewSource();
        CreatNewSource();
        CreatNewSource();
        CreatNewSource();
    }
    public void PlayIntro()
    {
        if (delayIntro == 0)
        {
            introSource.PlayOneShot(introSound);
            return;
        }
        StartCoroutine(Delay(delayIntro, introSource, introSound));
    }
    private IEnumerator Delay(float time, AudioSource source, AudioClip clip)
    {
        yield return new WaitForSeconds(time);
        source.PlayOneShot(clip);
    }
    public void PlayMusic()
    {
        musicSource.clip = musicSound;
        musicSource.loop = true;
        musicSource.Play();
    }
    public void StopMusic()
    {
        musicSource.Stop();
    }

    private AudioSource GetFreeSource()
    {
        foreach (AudioSource source in SFXSources)
        {
            if (!source.isPlaying) return source;
        }
        return CreatNewSource();
    }
    public void PlaySFX(AudioClip clip)
    {
        AudioSource source = GetFreeSource();
        source.PlayOneShot(clip);
    }

    private AudioSource CreatNewSource()
    {
        AudioSource s = new GameObject().AddComponent<AudioSource>();
        s.transform.SetParent(SFXPool);
        SFXSources.Add(s);
        return s;
    }
}
