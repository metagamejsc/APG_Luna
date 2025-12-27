using UnityEngine;
using UnityEngine.UI;

public class DropZone : MonoBehaviour
{
    public int idDrop = 0;
    // public bool isLose = false;
    public GameObject[] steps;
    public GameObject stepLose;


    private int currentStep = 0;
    private Collider2D boxCollider;

    void Awake()
    {
        print("DropZone Awake called");
        boxCollider = GetComponent<Collider2D>();
        boxCollider.enabled = true;
        currentStep = 0;
        NextStep();
        if (stepLose != null) stepLose.SetActive(false);
    }
    public void DragItem()
    {
        LunaManager.ins.OffStartCard();
        currentStep++;
        NextStep();
        CheckDone();
    }
    public void DragItemLose()
    {
        foreach (var step in steps)
        {
            step.SetActive(false);
        }
        stepLose.SetActive(true);
        Invoke(nameof(DragLose), 1f);

    }
    void DragLose()
    {
        print("DragLose called");


        LunaManager.ins.ShowEndCard();
        LunaManager.ins.ShowLoseTitle();
    }
    void NextStep()
    {
        if (steps.Length <= 0) return;
        foreach (var step in steps)
        {
            step.SetActive(false);
        }
        steps[currentStep].SetActive(true);
    }
    void CheckDone()
    {
        if (currentStep == steps.Length - 1)
        {
            boxCollider.enabled = false;
        }
    }
    void OnEnable()
    {
        GameController.OnUpgradePhase2 += EventUpgrade;
    }

    void OnDisable()
    {
        GameController.OnUpgradePhase2 -= EventUpgrade;
    }
    public void EventUpgrade()
    {
        print($"EventUpgrade called on {gameObject.name}");
        // if (spriteUpgrade != null && steps[0].gameObject.GetComponent<Image>() != null)
        // {
        //     steps[0].gameObject.GetComponent<Image>().sprite = spriteUpgrade;
        // }
    }
    public int GetCurrentStep()
    {
        return currentStep;
    }
}
