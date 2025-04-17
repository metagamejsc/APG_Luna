using UnityEngine;
using UnityEngine.UI;

public class DropZone : MonoBehaviour
{
    public GameObject[] steps;
    public bool isActive = false;
    public Sprite spriteUpgrade;



    private int currentStep = 0;
    private BoxCollider2D boxCollider;

    void Awake()
    {
        boxCollider = GetComponent<BoxCollider2D>();
        boxCollider.enabled = true;
        currentStep = 0;
        NextStep();
    }
    public void DragMoney()
    {
        currentStep++;
        NextStep();
        CheckDone();
        Upgrade();
        LunaManager.ins.CountPlay();
    }
    void Upgrade()
    {
        if (!isActive) return;
        isActive = false;
        GameController.instance.EnableUpgrade(gameObject.name);
    }
    void NextStep()
    {
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
        if (spriteUpgrade != null && steps[0].gameObject.GetComponent<Image>() != null)
        {
            steps[0].gameObject.GetComponent<Image>().sprite = spriteUpgrade;
        }
    }
    public int GetCurrentStep()
    {
        return currentStep;
    }
}
