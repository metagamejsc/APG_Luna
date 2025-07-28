using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;
using UnityEngine.UI;

public class DropZone : MonoBehaviour
{
    private BoxCollider2D boxCollider;
    public int idDrop = 0;
    public SkeletonGraphic skeletonGraphic;
    public bool canDrop = false;

    [Header("Audio Settings")]
    [SerializeField] private AudioSource audioSource;
    [SerializeField] private List<AudioClip> audioClips = new List<AudioClip>();

    void Awake()
    {
        boxCollider = GetComponent<BoxCollider2D>();
        boxCollider.enabled = true;
        if (audioSource == null)
        {
            audioSource = gameObject.AddComponent<AudioSource>();
        }
        SetAnimationIdle();
    }
    public void DragOn(string id, int idMusic = 0)
    {
        canDrop = false;
        LunaManager.ins.CountPlay();
        if (id == "") return;
        var trackEntry = skeletonGraphic.AnimationState.SetAnimation(0, id, false);
        trackEntry.Complete += OnActionAnimationComplete;

        // Play corresponding audio
        PlayAudioById(idMusic);


    }
    public void PlayAudioById(int id)
    {
        if (id >= 0 && id < audioClips.Count && audioClips[id] != null)
        {
            audioSource.clip = audioClips[id];
            audioSource.Play();
        }
        else
        {
            Debug.LogWarning($"Audio clip with id {id} not found or invalid");
        }
    }
    private void OnActionAnimationComplete(Spine.TrackEntry trackEntry)
    {
        // Remove the listener to prevent memory leaks
        trackEntry.Complete -= OnActionAnimationComplete;
        // Return to idle animation
        SetAnimationIdle();
    }
    void SetAnimationIdle()
    {
        canDrop = true;
        skeletonGraphic.AnimationState.SetAnimation(0, "idle", true);
        //skeletonGraphic.Initialize(true);
    }

    void OnEnable()
    {
        GameController.OnUpgradePhase2 += EventUpgrade;
    }

    void OnDisable()
    {
        GameController.OnUpgradePhase2 -= EventUpgrade;
    }
    public void EventUpgrade()
    {
        print($"EventUpgrade called on {gameObject.name}");
        // if (spriteUpgrade != null && steps[0].gameObject.GetComponent<Image>() != null)
        // {
        //     steps[0].gameObject.GetComponent<Image>().sprite = spriteUpgrade;
        // }
    }

}
