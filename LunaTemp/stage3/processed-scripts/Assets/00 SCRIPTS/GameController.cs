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
    [SerializeField] private List<GameObject> correctItems;
    [SerializeField] private List<GameObject> phase;
    [SerializeField] private GameObject loss;
    [SerializeField] private GameObject win;
    [SerializeField] private GameObject failScene;
    [SerializeField] private GameObject winScene;

    [SerializeField] private bool complete;
    [SerializeField] private bool end;
    [SerializeField] private int currentStep;
    [SerializeField] private int correctStep;
    [SerializeField] private Text currentStepText;
    [SerializeField] private int maxStep;
    [SerializeField] private Text maxStepText;
    [SerializeField] private Slider slider;
    [SerializeField] private float DelayComplete;

    [Header("Sub")]
    [SerializeField] private Sub startSub;
    [SerializeField] private Sub phaseSub;
    [SerializeField] private Sub winSub;
    [SerializeField] private Sub failSub;
    [SerializeField] private List<Sub> subs;
    [SerializeField] private RectTransform sub;
    [SerializeField] private Text subText;
    private Coroutine subCoroutine;
    private Coroutine phaseCoroutine;
    private Coroutine lockPlayCoroutine;
    [SerializeField] private bool completeSub;
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
    private void Start()
    {
        AudioController.Ins.PlayMusic();
        ShowSub(startSub);
        StartCoroutine(ActionAfterTime(2.3f, () => UnlockPhase()));
    }
    public void Left()
    {
        foreach (AnimationController skeleton in skeletons)
        {
            if (skeleton) skeleton.Left();
        }
    }
    public void Right()
    {
        foreach (AnimationController skeleton in skeletons)
        {
            if (skeleton) skeleton.Right();
        }
    }
    public void DropItem(GameObject item)
    {
        LockPlay(true);
        if (correctItems.Contains(item))
        {
            UpdateCorrectStep();
            if (!character.Action(item, true)) return;
        }
        else
        {
            if (!character.Action(item, false)) return;
        }

        ShowSub(subMap[item]);
        UpdateStep();
    }
    public void ClickItem(GameObject item)
    {
        LockPlay(true);
        if (correctItems.Contains(item))
        {
            UpdateCorrectStep();
            character.Action(item, true);
        }
        else
        {
            character.Action(item, false);
        }

        if (subMap.ContainsKey(item)) ShowSub(subMap[item]);
        UpdateStep();
    }

    private void UpdateStep()
    {
        if (currentStep >= maxStep) return;
        currentStep++;
        currentStepText.text = currentStep.ToString();
        slider.value = (float)currentStep / maxStep;
        CompleteStep?.Invoke();
        if (!complete && currentStep >= maxStep)
        {
            complete = true;
            EndGame();
        }
    }
    private void UpdateCorrectStep()
    {
        if (correctStep >= maxStep) return;
        correctStep++;
    }
    public void UnlockPlay()
    {
        if (completeSub)
        {
            UnlockPhase();
            return;
        }
        if (phaseCoroutine != null) StopCoroutine(phaseCoroutine);
        phaseCoroutine = StartCoroutine(ActionAfterTime(0.5f, () => UnlockPhase()));
    }
    private void LockPlay(bool isLock)
    {
        SetLockPlay?.Invoke(isLock);
    }
    private void UnlockPhase()
    {
        if (complete) return;
        LockPlay(true);
        if (currentStep - 1 >= 0 && phase[currentStep - 1].activeSelf) phase[currentStep - 1].SetActive(false);
        if (currentStep < phase.Count)
        {
            phase[currentStep].SetActive(true);
            ShowSub(phaseSub);
        }
        if (lockPlayCoroutine != null) StopCoroutine(lockPlayCoroutine);
        lockPlayCoroutine = StartCoroutine(ActionAfterTime(1.5f, () => LockPlay(false)));
    }
    private void Fail()
    {
        loss.SetActive(true);
        ShowSub(failSub);
        StartCoroutine(ActionAfterTime(3.5f, () => failScene.SetActive(true)));
    }
    private void Win()
    {
        win.SetActive(true);
        ShowSub(winSub);
        StartCoroutine(ActionAfterTime(3.5f, () => winScene.SetActive(true)));
    }
    private void Complete()
    {
        OnComplete?.Invoke();
        phase[Mathf.Min(Mathf.Max(currentStep, 0), maxStep - 1)].SetActive(false);
        if (correctStep >= maxStep) Win();
        else Fail();
    }
    public void EndGame()
    {
        if (end) return;
        end = true;
        StartCoroutine(ActionAfterTime(DelayComplete, Complete));
    }

    public void ShowSub([Bridge.Ref] Sub sub)
    {
        subText.text = sub.SubText;
        AudioController.Ins.PlaySFX(sub.SubSound);
        if (subCoroutine != null) StopCoroutine(subCoroutine);
        subCoroutine = StartCoroutine(ActiveSub(sub.timeSub));
    }
    public Action OnComplete;
    public Action CompleteStep;
    public Action<bool> SetLockPlay;
    private IEnumerator ActiveSub(float time)
    {
        completeSub = false;
        sub.gameObject.SetActive(true);
        yield return new WaitForSeconds(time);
        sub.gameObject.SetActive(false);
        completeSub = true;
    }
    private IEnumerator ActionAfterTime(float timeDelay, Action action)
    {
        yield return new WaitForSeconds(timeDelay);
        action?.Invoke();
    }
}
[System.Serializable]
public struct Sub
{
    public float timeSub;
    public GameObject Item;
    public string SubText;
    public AudioClip SubSound;
}




