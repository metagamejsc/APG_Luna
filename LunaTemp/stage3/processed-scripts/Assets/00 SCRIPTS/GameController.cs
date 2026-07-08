using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [Header("Character")]
    [SerializeField] private AnimationController character;
    [Header("Heart")]
    [SerializeField] private int maxHeart;
    [SerializeField] private HeartController heart;

    [Header("Progress")]
    [SerializeField] private AudioClip completeSound;
    [SerializeField] private AudioClip failSound;
    [SerializeField] private GameObject failScene;
    [SerializeField] private List<Phase> phase;
    [SerializeField] private GameObject lockScene;
    private int currentPhase;
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
        currentStepText.text = currentStep.ToString();
        maxStepText.text = maxStep.ToString();
        slider.value = (float)currentStep / maxStep;
    }
    public void InitHeart(int num)
    {
        heart.Init(Mathf.Min(maxHeart, num));
    }
    public void Fail()
    {
        PlaySFX(failSound);
        heart.Fail();
        failScene.SetActive(true);
        Invoke(nameof(HideFailScreen), 1);
    }
    private void HideFailScreen()
    {
        failScene.SetActive(false);
    }
    public void Trigger(GameObject gameObject)
    {
        character.PlayAnimation(gameObject);
        UpdatePhase();
        UpdateStep();
    }
    private void UpdatePhase()
    {
        if (currentPhase >= phase.Count - 1) return;
        phase[currentPhase].PhasePuzzle.SetActive(false);
        lockScene.SetActive(true);
        Invoke(nameof(NextPhase), phase[currentPhase].EndDelay);
    }
    private void PlaySFX(AudioClip clip)
    {
        AudioController.Ins.PlaySFX(clip);
    }
    private void NextPhase()
    {
        currentPhase++;
        phase[currentPhase].PhasePuzzle.SetActive(true);
        PlaySFX(phase[currentPhase].Voice);
        lockScene.SetActive(false);
    }
    public void UpdateStep()
    {
        if (currentStep >= maxStep)
        {
            EndGame();
            return;
        }
        PlaySFX(completeSound);
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
    public void GameOver()
    {
        StartCoroutine(InvokeAfterTime(1, OnGameOver));
    }
    private IEnumerator InvokeAfterTime(float second, Action action)
    {
        yield return new WaitForSeconds(second);
        action?.Invoke();
    }
    void Start()
    {
        AudioController.Ins.PlayMusic();
        currentPhase = 0;
        phase[currentPhase].PhasePuzzle.SetActive(true);
        StartCoroutine(InvokeAfterTime(phase[currentPhase].VoiceDelay, () => PlaySFX(phase[currentPhase].Voice)));
        lockScene.SetActive(false);
    }
    public Action CompleteStep;
    public Action OnGameOver;
}
[System.Serializable]
public struct Phase
{
    public AudioClip Voice;
    public float VoiceDelay;
    public GameObject PhasePuzzle;
    public float EndDelay;
}



