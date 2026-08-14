using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [Header("Skeleton")]
    [SerializeField] private List<AnimationController> skeletons;
    [SerializeField] private CharacterSkinController character;
    [Header("Progress")]
    [SerializeField] private GameObject normal;
    [SerializeField] private GameObject win;
    [SerializeField] private GameObject loseScene;
    [SerializeField] private GameObject winScene;


    [SerializeField] private bool complete;
    [SerializeField] private int currentStep;
    [SerializeField] private int maxStep;
    [SerializeField] private Text currentStepText;
    [SerializeField] private Text maxStepText;
    [SerializeField] private Slider slider;
    [SerializeField] private float DelayComplete;

    [Header("Sub")]
    [SerializeField] private float subTime;
    [SerializeField] private Sub completeSub;
    [SerializeField] private List<Sub> subs;
    [SerializeField] private RectTransform sub;
    [SerializeField] private Text subText;
    private Coroutine subCoroutine;
    private Dictionary<GameObject, Sub> subMap;

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
        subMap = new Dictionary<GameObject, Sub>();
        foreach (Sub sub in subs)
        {
            subMap.Add(sub.Item, sub);
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
    public void Action(GameObject item)
    {
        foreach (AnimationController skeleton in skeletons)
        {
            if (skeleton) skeleton.Action(item);
        }
    }
    public void DropItem(GameObject item)
    {
        LockPlay(true);
        if (!character.Action(item)) return;
        ShowSub(subMap[item]);
        UpdateStep();
    }
    public void ClickItem(GameObject item)
    {
        LockPlay(true);
        character.Action(item);
        if (subMap.ContainsKey(item)) ShowSub(subMap[item]);
        UpdateStep();
    }
    public void Idle(GameObject item)
    {
        foreach (AnimationController skeleton in skeletons)
        {
            if (skeleton) skeleton.Idle(item);
        }
    }
    public void UpdateStep()
    {
        if (currentStep >= maxStep) return;

        currentStep++;
        currentStepText.text = currentStep.ToString();
        slider.value = (float)currentStep / maxStep;
        CompleteStep?.Invoke();
        if (!complete && currentStep >= maxStep)
        {
            complete = true;
            StartCoroutine(CompleteAfterTime());
        }
    }
    public void LockPlay(bool isLock)
    {
        SetLockPlay?.Invoke(isLock);
    }
    private void Complete()
    {
        normal.SetActive(false);
        win.SetActive(true);
        ShowSub(completeSub);
        Invoke(nameof(Win), 0.5f);
        OnComplete?.Invoke();
    }
    public void EndGame()
    {
        Invoke(nameof(Lose), 0.5f);
    }
    private void Win()
    {
        winScene.SetActive(true);
    }
    private void Lose()
    {
        if (complete) return;
        loseScene.SetActive(true);
    }
    private void Start()
    {
        AudioController.Ins.PlayMusic();
    }
    public void ShowSub([Bridge.Ref] Sub sub)
    {
        subText.text = sub.SubText;
        AudioController.Ins.PlaySFX(sub.SubSound);
        if (subCoroutine != null) StopCoroutine(subCoroutine);
        subCoroutine = StartCoroutine(ActiveSub());
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
    public AudioClip SubSound;
}




