using UnityEngine;
using UnityEngine.UI;

public class DropZone : MonoBehaviour
{
    public int idDrop = 0;
    public bool isLose = false;
    public GameObject[] steps;


    private int currentStep = 0;
    private Collider2D boxCollider;

    void Awake()
    {
        boxCollider = GetComponent<Collider2D>();
        boxCollider.enabled = true;
        currentStep = 0;
        NextStep();
    }
    public void DragItem()
    {
        if (isLose)
        {
            // DragLose();\
            Invoke(nameof(DragLose), 1f);
        }
        currentStep++;
        NextStep();
        CheckDone();
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
