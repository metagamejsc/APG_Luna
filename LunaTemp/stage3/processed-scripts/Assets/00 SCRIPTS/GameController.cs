using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [SerializeField] private List<Seq> skeletons;
    private Dictionary<GameObject, AnimationController> maps;

    [Header("Progress")]
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
        skeletons.ForEach(s => maps.Add(s.Area, s.Animation));
        currentStepText.text = currentStep.ToString();
        maxStepText.text = maxStep.ToString();
        slider.value = (float)currentStep / maxStep;
    }
    public void NextAnimation(GameObject gameObject)
    {
        if (!maps.ContainsKey(gameObject)) return;
        maps[gameObject].NextAnimation();
        if (!gameObject.CompareTag("Drop")) return;
        UpdateStep();
    }
    public void UpdateStep()
    {
        if (currentStep >= maxStep)
        {
            EndGame();
            return;
        }
        currentStep++;
        currentStepText.text = currentStep.ToString();
        slider.value = (float)currentStep / maxStep;
        CompleteStep?.Invoke();
    }
    private void EndGame()
    {
        if (end) return;
        if (complete)
        {
            return;
        }
    }
    void Start()
    {
        AudioController.Ins.PlayMusic();
    }
    public Action CompleteStep;
}
[System.Serializable]
public struct Seq
{
    public GameObject Area;
    public AnimationController Animation;
}

