using UnityEngine;

[System.Serializable]
public class AudioEntry
{
    public string key;
    public AudioClip clip;
    public float volume = 1f;
}

public class AudioController : MonoBehaviour
{
    public static AudioController Instance { get; private set; }

    [Header("Audio Sources")]
    [SerializeField] private AudioSource bgmSource;
    [SerializeField] private AudioSource sfxSource;

    [Header("Audio Entries")]
    [SerializeField] private AudioEntry[] audioEntries;

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }

        Instance = this;
        DontDestroyOnLoad(gameObject);
    }

    private bool TryGetEntry(string key, out AudioEntry entry)
    {
        if (audioEntries != null)
        {
            for (int i = 0; i < audioEntries.Length; i++)
            {
                var currentEntry = audioEntries[i];
                if (currentEntry == null || currentEntry.clip == null || string.IsNullOrEmpty(currentEntry.key))
                {
                    continue;
                }

                if (currentEntry.key == key)
                {
                    entry = currentEntry;
                    return true;
                }
            }
        }

        entry = null;
        Debug.LogWarning($"Audio key not found: {key}");
        return false;
    }

    public void PlayBgm(string key, bool loop = true)
    {
        if (!TryGetEntry(key, out var entry) || bgmSource == null)
        {
            return;
        }

        bgmSource.clip = entry.clip;
        bgmSource.volume = entry.volume;
        bgmSource.loop = loop;
        bgmSource.Play();
    }

    public void StopBgm()
    {
        if (bgmSource != null)
        {
            bgmSource.Stop();
        }
    }

    public void PlaySfx(string key)
    {
        if (!TryGetEntry(key, out var entry) || sfxSource == null)
        {
            return;
        }

        sfxSource.PlayOneShot(entry.clip, entry.volume);
    }

    public void StopSfx()
    {
        if (sfxSource != null)
        {
            sfxSource.Stop();
        }
    }
}
