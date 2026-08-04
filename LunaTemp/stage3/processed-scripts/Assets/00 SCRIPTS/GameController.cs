using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [Header("Skeleton")]
    [SerializeField] private List<SkeletonAnim> skeletons;
    private Dictionary<GameObject, AnimationController> skeletonMap;

    [Header("Progress")]
    [SerializeField] private bool complete;
    [SerializeField] private int currentStep;
    [SerializeField] private int maxStep;
    [SerializeField] private Text currentStepText;
    [SerializeField] private Text maxStepText;
    [SerializeField] private Slider slider;
    [SerializeField] private float DelayComplete;

    public static GameController Ins;
    private void InitSkeletonMap()
    {
        skeletonMap = new Dictionary<GameObject, AnimationController>();
        foreach (SkeletonAnim skeleton in skeletons)
        {
            skeletonMap.Add(skeleton.Area, skeleton.Anim);
        }
    }
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
        InitSkeletonMap();
        currentStepText.text = currentStep.ToString();
        maxStepText.text = maxStep.ToString();
        slider.value = (float)currentStep / maxStep;
    }
    public void PlayAnimation(GameObject item)
    {
        skeletonMap.TryGetValue(item, out AnimationController anim);
        if (!anim) return;
        anim.StartAnimation();
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
    
    private void Complete()
    {
        complete = true;
        OnComplete?.Invoke();
    }
    private void Start()
    {
        AudioController.Ins.PlayMusic();
    }

    public Action OnComplete;
    public Action CompleteStep;

    private IEnumerator CompleteAfterTime()
    {
        yield return new WaitForSeconds(DelayComplete);
        Complete();
    }
}
[System.Serializable]
public struct SkeletonAnim
{
    public GameObject Area;
    public AnimationController Anim;
}




