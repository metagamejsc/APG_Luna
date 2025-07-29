using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;
using UnityEngine.UI;

public class DropZone : MonoBehaviour
{
    private BoxCollider2D boxCollider;
    public int idDrop = 0;
    // public SkeletonGraphic skeletonGraphic;
    // public bool canDrop = false;
    private int currentStep = 0;
    public GameObject[] steps;
    public bool isDontWork = false;
    // [Header("Audio Settings")]
    // [SerializeField] private AudioSource audioSource;
    // [SerializeField] private List<AudioClip> audioClips = new List<AudioClip>();

    void Awake()
    {
        boxCollider = GetComponent<BoxCollider2D>();
        boxCollider.enabled = true;
        currentStep = 0;
        NextStep();
    }
    public void DragOn()
    {
        currentStep++;
        NextStep();
        CheckDone();
        //Upgrade();
        LunaManager.ins.CountPlay();
    }
    public void UpgradeWoman()
    {
        currentStep++;
        NextStep();
        //if (!isActive) return;
        //isActive = false;
        //GameController.instance.EnableUpgrade(gameObject.name);
    }
    void NextStep()
    {
        if (currentStep >= steps.Length)
        {
            return;
        }

        foreach (var step in steps)
        {
            step.SetActive(false);
        }
        steps[currentStep].SetActive(true);
    }
    void CheckDone()
    {
        if (currentStep == steps.Length - 1)
        {
            boxCollider.enabled = false;
        }
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
