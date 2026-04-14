using UnityEngine;
using UnityEngine.UI;

public class ClickID : MonoBehaviour
{
    //public bool isPhone = false;
    public int id = 0;
    public DropID dropID;
    public GameObject[] steps;
    public int currentStep = 0;
    public bool isProcess = false;
    private Button button;
    void Awake()
    {
        button = GetComponent<Button>();
        button.onClick.AddListener(ClickFunc);
    }
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
        if (currentStep >= steps.Length - 1 || !LunaManager.ins.isDrag) return;
        LunaManager.ins.OffStartCard();
        currentStep++;
        NextStep();
        dropID.DragItemID(id);
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
            AudioController.Instance.PlaySfx("Click");
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