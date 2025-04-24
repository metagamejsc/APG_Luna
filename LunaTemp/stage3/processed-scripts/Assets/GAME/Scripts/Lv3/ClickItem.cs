using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ClickItem : MonoBehaviour
{
    public bool isDoor = false;
    public GameObject[] steps;
    private int currentStep = 0;
    void Start()
    {
        currentStep = 0;
    }
    public void ClickFunc()
    {
        if (!isDoor)
        {
            steps[currentStep].SetActive(true);
        }
        else
        {
            currentStep++;
            NextStep();
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
}
