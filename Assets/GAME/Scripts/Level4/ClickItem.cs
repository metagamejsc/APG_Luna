using UnityEngine;
using UnityEngine.EventSystems;

public class ClickItem : MonoBehaviour, IPointerClickHandler
{
    //public bool isPhone = false;
    public GameObject[] steps;
    public int currentStep = 0;
    private RectTransform rectTransform;
    private Vector2 originalPosition;
    private CanvasGroup canvasGroup;

    void Awake()
    {
        rectTransform = GetComponent<RectTransform>();
        canvasGroup = GetComponent<CanvasGroup>();
        originalPosition = rectTransform.anchoredPosition;
    }
    public void OnPointerClick(PointerEventData eventData)
    {

        print("Begin Drag");
        currentStep++;
        NextStep();
    }

    void Start()
    {
        currentStep = 0;
        NextStep();
    }
    public void ClickFunc()
    {

        ActiveStep(currentStep);

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