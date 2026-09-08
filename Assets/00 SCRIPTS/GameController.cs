using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [Header("Skeleton")]
    [SerializeField] private List<SkeletonMap> skeletons;
    private Dictionary<GameObject, AnimationController> skeletonMap;
    [SerializeField] private List<GameObject> itemStep;
    [SerializeField] private GameObject enemy1;
    [SerializeField] private GameObject enemy2;


    [Header("Progress")]
    [SerializeField] private bool complete;
    [SerializeField] private int currentStep;
    [SerializeField] private int maxStep;
    [SerializeField] private Text currentStepText;
    [SerializeField] private Text maxStepText;
    [SerializeField] private Slider slider;
    [SerializeField] private float delayEnd;
    [SerializeField] private GameObject winScene;
    [SerializeField] private GameObject failcene;


    [Header("Sub")]
    [SerializeField] private float subTime;
    [SerializeField] private string startSub;
    [SerializeField] private string winSub;
    [SerializeField] private string failSub;

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
        InitSkeletonMap();
        InitSubMap();
        currentStepText.text = currentStep.ToString();
        maxStepText.text = maxStep.ToString();
        slider.value = (float)currentStep / maxStep;
    }
    private void InitSkeletonMap()
    {
        skeletonMap = new Dictionary<GameObject, AnimationController>();
        foreach (SkeletonMap ske in skeletons)
        {
            ske.Areas.ForEach(area =>
            {
                skeletonMap.Add(area, ske.Skeleton);
            });
        }
    }
    public bool PlayAnimation(GameObject item, GameObject area)
    {
        LockPlay(true);
        if (!skeletonMap.ContainsKey(area) || !area.activeSelf) return false;
        if (!skeletonMap[area].StartAction(item, area))
        {
            LockPlay(false);
            return false;
        }

        if (subMap.ContainsKey(item)) ShowSub(subMap[item]);
        if (area.name == "TamChanDropGirl") return true;
        if (itemStep.Contains(item)) UpdateStep();
        return true;
    }
    public void UpdateStep()
    {
        if (currentStep >= maxStep) return;

        currentStep++;
        currentStepText.text = currentStep.ToString();
        slider.value = (float)currentStep / maxStep;
        CompleteStep?.Invoke();
        if (currentStep >= maxStep) Complete();
    }
    public void LockPlay(bool isLock)
    {
        SetLockPlay?.Invoke(isLock);
    }
    public void Complete()
    {
        if (complete) return;
        complete = true;
        OnComplete?.Invoke();
        StartCoroutine(EndAfterTime());
    }
    private void Win()
    {
        OnWin?.Invoke();
        Invoke(nameof(ShowWin), 3);
        ShowSub(winSub);
    }
    private void ShowWin()
    {
        winScene.SetActive(true);
    }
    private void ShowFail()
    {
        failcene.SetActive(true);
    }
    private void Fail()
    {
        OnFail?.Invoke();
        Invoke(nameof(ShowFail), 3);
        ShowSub(failSub);
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
    public Action OnWin;
    public Action OnFail;
    public Action CompleteStep;
    public Action<bool> SetLockPlay;
    private IEnumerator ActiveSub()
    {
        sub.gameObject.SetActive(true);
        yield return new WaitForSeconds(subTime);
        sub.gameObject.SetActive(false);
    }
    private IEnumerator EndAfterTime()
    {
        yield return new WaitForSeconds(delayEnd);
        enemy1.SetActive(false);
        enemy2.transform.localScale = Vector2.one;
        if (currentStep >= maxStep) Win();
        else Fail();
    }
}
[System.Serializable]
public struct Sub
{
    public GameObject Item;
    public string SubText;
}
[System.Serializable]
public struct SkeletonMap
{
    public AnimationController Skeleton;
    public List<GameObject> Areas;
}




