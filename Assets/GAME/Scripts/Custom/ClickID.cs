using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ClickID : MonoBehaviour
{
    //public bool isPhone = false;
    public int id = 0;
    public DropID dropID;
    public GameObject[] steps;
    public int currentStep = 0;
    public bool isProcess = false;
    public List<AudioClip> sounds = new List<AudioClip>();
    private int soundIndex = 0;
    private Button button;
    private bool hasInteracted = false;
    void Awake()
    {
        button = GetComponent<Button>();
        button.onClick.AddListener(ClickFunc);
    }
    void Start()
    {
        SetUp();
    }
    void SetUp()
    {
        currentStep = 0;
        foreach (var step in steps)
        {
            step.SetActive(false);
        }
        steps[currentStep].SetActive(true);
    }
    public void ClickFunc()
    {
        if (hasInteracted || currentStep >= steps.Length - 1 || !LunaManager.ins.isDrag) return;
        LunaManager.ins.OffStartCard();

        if (dropID != null && !dropID.TryDragItemID(id))
            return;

        hasInteracted = true;
        if (button != null)
            button.interactable = false;

        PlayNextSound();
        currentStep++;
        NextStep();
    }
    void PlayNextSound()
    {
        if (sounds == null || sounds.Count == 0 || AudioController.Instance == null) return;
        AudioClip clip = sounds[soundIndex];
        if (clip != null)
            AudioController.Instance.PlaySfx(clip);
        soundIndex = (soundIndex + 1) % sounds.Count;
    }
    void NextStep()
    {
        if (currentStep >= steps.Length) return;
        foreach (var step in steps)
        {
            step.SetActive(false);
        }
        steps[currentStep].SetActive(true);
        if (isProcess)
        {
            LunaManager.ins.CountPlay();
            AudioController.Instance.PlaySfx("Click");
        }
    }
    void ActiveStep(int stepActive)
    {
        foreach (var step in steps)
        {
            step.SetActive(false);
        }
        steps[stepActive].SetActive(true);
    }
}
