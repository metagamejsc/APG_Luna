using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [SerializeField] private List<Seq> skeletons;
    [SerializeField] private GameObject demon;

    private Dictionary<GameObject, AnimationController> maps;


    [SerializeField] private AnimationController mainAnimation;


    [Header("Progress")]
    [SerializeField] private AudioClip correctSound;
    [SerializeField] private bool end;
    [SerializeField] private bool complete;
    [SerializeField] private int currentStep;
    [SerializeField] private int maxStep;
    [SerializeField] private Text currentStepText;
    [SerializeField] private Text maxStepText;
    [SerializeField] private Slider slider;

    public static GameController Ins;
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
    private void Awake()
    {
        CreateIns();
        maps = new Dictionary<GameObject, AnimationController>();
        skeletons.ForEach(s => { if (s.Animation) maps.Add(s.Area, s.Animation); });
        currentStepText.text = currentStep.ToString();
        maxStepText.text = maxStep.ToString();
        slider.value = (float)currentStep / maxStep;
    }
    public void NextAnimation(GameObject gameObject)
    {
        if (maps.ContainsKey(gameObject)) maps[gameObject].NextAnimation();
        else
        {
            demon.SetActive(false);
        }
        if (!gameObject.CompareTag("Drop")) return;
        AudioController.Ins.PlaySFX(correctSound);
        UpdateStep();
    }
    private void UpdateStep()
    {
        if (end) return;
        currentStep++;
        currentStepText.text = currentStep.ToString();
        slider.value = (float)currentStep / maxStep;
        CompleteStep?.Invoke();
        if (currentStep >= maxStep)
        {
            complete = true;
            Invoke(nameof(EndGame), 2);
            return;
        }
    }
    private void EndGame()
    {
        if (end) return;
        end = true;
        if (complete)
        {
            mainAnimation.NextAnimation();
            return;
        }
    }
    void Start()
    {
        AudioController.Ins.PlayMusic();
        AudioController.Ins.PlayIntro();
    }
    public Action CompleteStep;
}
[System.Serializable]
public struct Seq
{
    public GameObject Area;
    public AnimationController Animation;
}

