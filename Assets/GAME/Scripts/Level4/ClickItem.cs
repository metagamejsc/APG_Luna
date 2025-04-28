using UnityEngine;

public class ClickItem : MonoBehaviour
{
    public bool isPhone = false;
    public GameObject[] steps;
    public int currentStep = 0;
    void Start()
    {
        currentStep = 0;
    }
    public void ClickFunc()
    {
        if (isPhone)
        {
            //currentStep++;
            //NextStep();
            FuncPhone();
        }
        else
        {
            ActiveStep(currentStep);
        }


    }
    void NextStep()
    {
        foreach (var step in steps)
        {
            step.SetActive(false);
        }
        steps[currentStep].SetActive(true);
    }
    void ActiveStep(int step)
    {
        steps[step].SetActive(true);
    }
    void FuncPhone()
    {
        steps[0].SetActive(false);
        steps[currentStep].SetActive(true);
    }
}