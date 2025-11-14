using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class AudioManager : MonoBehaviour
{
    public static AudioManager ins;
    
    private Dictionary<string, AudioClip> clipDict;
    private AudioSource audioSource;

    void Awake()
    {
        ins = this;
        audioSource = GetComponent<AudioSource>();
    }

    public void PlaySound(AudioClip name)
    {
        audioSource.PlayOneShot(name);
    }
}