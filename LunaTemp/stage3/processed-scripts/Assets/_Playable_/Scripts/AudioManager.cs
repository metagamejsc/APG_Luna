using System;
using System.Collections.Generic;
using UnityEngine;

namespace Playable
{
    public class AudioManager : MonoBehaviour
    {
        public static AudioManager Instance;
        [SerializeField] private List<SoundData> _sounds;
        [SerializeField] private AudioSource _audioMusic;
        [SerializeField] private AudioSource _audioSound;
        private readonly Dictionary<SoundType, AudioClip> _soundLookup = new Dictionary<SoundType, AudioClip>();

        private void Awake()
        {
            Instance = this;
            BuildSoundLookup();
        }

        public void PlayMusic(AudioClip clip)
        {
            StopMusic();
            if (clip) _audioMusic.clip = clip;
            else Debug.LogError("Background Music Not Found");
            _audioMusic.loop = true;
            _audioMusic.Play();
        }

        public void StopMusic()
        {
            _audioMusic.Stop();
        }

        public void PlaySound(SoundType soundType, float volume = 1, bool isLoop = false)
        {
            if (!_soundLookup.TryGetValue(soundType, out AudioClip clip) || clip == null)
            {
                Debug.LogError($"Sound Not Found: {soundType}");
                return;
            }

            PlaySound(clip, volume, isLoop);
        }

        public void PlaySound(AudioClip clip, float volume = 1, bool isLoop = false)
        {
            StopSound();
            if (clip) _audioSound.clip = clip;
            else Debug.LogError("Sound Not Found");
            _audioSound.loop = isLoop;
            _audioSound.volume = volume;
            _audioSound.Play();
        }

        public void StopSound()
        {
            _audioSound.Stop();
        }

        private void BuildSoundLookup()
        {
            _soundLookup.Clear();

            if (_sounds == null)
            {
                return;
            }

            for (int i = 0; i < _sounds.Count; i++)
            {
                SoundData soundData = _sounds[i];
                if (soundData.Clip == null)
                {
                    continue;
                }

                _soundLookup[soundData.Type] = soundData.Clip;
            }
        }
    }

    [Serializable]
    public struct SoundData
    {
        public SoundType Type;
        public AudioClip Clip;
    }

    [Serializable]
    public enum SoundType
    {
        Win,
        Lose
    }
}