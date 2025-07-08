using UnityEngine;

public class ClickItem : MonoBehaviour
{
    public bool isPhone = false;
    private int currentStep = 0;
    public GameObject[] steps;

    void Start()
    {
        currentStep = 0;
        ActiveStep();
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
            currentStep++;
            ActiveStep();
        }


    }
    // void NextStep()
    // {
    //     foreach (var step in steps)
    //     {
    //         step.SetActive(false);
    //     }
    //     steps[currentStep].SetActive(true);
    // }
    void ActiveStep()
    {

        if (currentStep >= steps.Length) return;

        foreach (var step in steps)
        {
            step.SetActive(false);
        }
        steps[currentStep].SetActive(true);
    }
    void FuncPhone()
    {
        steps[0].SetActive(false);
        steps[currentStep].SetActive(true);
    }
}