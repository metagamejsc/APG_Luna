using DG.Tweening;
using Spine.Unity;
using UnityEngine;
using UnityEngine.UI;

public class DropZone : MonoBehaviour
{
    public int idDrop = 0;
    public GameObject[] steps;
    //public bool isDontWork = false;
    //public Sprite spriteUpgrade;



    private int currentStep = 0;
    private BoxCollider2D boxCollider;
    private SkeletonGraphic skeletonGraphic;
    private Sequence _seq;

    void Awake()
    {
        skeletonGraphic = steps[1].GetComponent<SkeletonGraphic>();
        boxCollider = GetComponent<BoxCollider2D>();
        boxCollider.enabled = true;
        currentStep = 0;
        NextStep();
    }
    public void DragOn(int id)
    {
        string nameSke = "action" + id.ToString();
        skeletonGraphic.AnimationState.SetAnimation(0, nameSke, true);
        MoveTele();
        currentStep++;
        NextStep();
        CheckDone();


    }
    public void DragUseId()
    {
        currentStep++;
        NextStep();
        CheckDone();
        LunaManager.ins.CountPlay();
    }
    void MoveTele()
    {
        var target = LunaManager.ins.posTele;
        var duration = 2f;
        _seq?.Kill();

        _seq = DOTween.Sequence().SetUpdate(false).SetLink(gameObject)
            .Join(steps[1].transform.DOMove(target.position, duration).SetEase(Ease.InOutQuad))
            .Join(steps[1].transform.DOScale(0.6f, duration).SetEase(Ease.InOutQuad))
            .OnComplete(() =>
            {
                steps[1].SetActive(false);
            });
    }
    public void UpgradeWoman()
    {
        currentStep++;
        NextStep();
        //if (!isActive) return;
        //isActive = false;
        //GameController.instance.EnableUpgrade(gameObject.name);
    }
    void NextStep()
    {
        if (currentStep >= steps.Length)
        {
            return;
        }

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
