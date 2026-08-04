using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [Header("Skeleton")]
    [SerializeField] private List<AnimationController> skeletons;

    [Header("Progress")]
    [SerializeField] private bool complete;
    [SerializeField] private int currentStep;
    [SerializeField] private int maxStep;
    [SerializeField] private Text currentStepText;
    [SerializeField] private Text maxStepText;
    [SerializeField] private Slider slider;
    [SerializeField] private float DelayComplete;

    [Header("Sub")]
    [SerializeField] private float subTime;
    [SerializeField] private string startSub;
    [SerializeField] private string completeSub;
    [SerializeField] private List<Sub> subs;
    [SerializeField] private RectTransform sub;
    [SerializeField] private Text subText;
    private Dictionary<GameObject, string> subMap;

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
    private void InitSubMap()
    {
        subMap = new Dictionary<GameObject, string>();
        foreach (Sub sub in subs)
        {
            subMap.Add(sub.Item, sub.SubText);
        }
    }
    private void Awake()
    {
        CreateIns();
        InitSubMap();
        currentStepText.text = currentStep.ToString();
        maxStepText.text = maxStep.ToString();
        slider.value = (float)currentStep / maxStep;
    }
    public void PlayAnimation(GameObject item)
    {
        LockPlay(true);
        foreach (AnimationController skeleton in skeletons)
        {
            if (skeleton) skeleton.StartAction(item);
        }
        ShowSub(subMap[item]);
        UpdateStep();
    }
    public void UpdateStep()
    {
        if (currentStep >= maxStep) return;

        currentStep++;
        currentStepText.text = currentStep.ToString();
        slider.value = (float)currentStep / maxStep;
        CompleteStep?.Invoke();
        if (!complete && currentStep >= maxStep) StartCoroutine(CompleteAfterTime());
    }
    public void LockPlay(bool isLock)
    {
        SetLockPlay?.Invoke(isLock);
    }
    private void Complete()
    {
        complete = true;
        ShowSub(completeSub);
        OnComplete?.Invoke();
    }
    private void Start()
    {
        AudioController.Ins.PlayMusic();
        ShowSub(startSub);
    }
    public void ShowSub(string text)
    {
        subText.text = text;
        StartCoroutine(ActiveSub());
    }
    public Action OnComplete;
    public Action CompleteStep;
    public Action<bool> SetLockPlay;
    private IEnumerator ActiveSub()
    {
        sub.gameObject.SetActive(true);
        yield return new WaitForSeconds(subTime);
        sub.gameObject.SetActive(false);
    }
    private IEnumerator CompleteAfterTime()
    {
        yield return new WaitForSeconds(DelayComplete);
        Complete();
    }
}
[System.Serializable]
public struct Sub
{
    public GameObject Item;
    public string SubText;
}




