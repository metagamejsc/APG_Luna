using UnityEngine;

public class ClickItem : MonoBehaviour
{
    //public bool isPhone = false;
    public GameObject[] steps;
    public int currentStep = 0;
    public bool isProcess = false;
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
        currentStep++;
        NextStep();
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