using Spine.Unity;
using UnityEngine;

public class DropCustom : MonoBehaviour
{
    public int idDrop = 0;
    public GameObject[] steps;
    public SkeletonGraphic skeletonGraphic;
    public string animationNameDefault = "idle";
    public MixSkeletonSkin mixSkeletonSkin;
    //----------------------------------------------
    //BRIDE
    private bool isHead = false;
    private bool isClickSmile = false;
    //GROOM
    private bool isShoes = false;
    private bool isTie = false;
    private bool isLeg = false;
    //------------------------------------
    private string currentAnimation = "";
    private int currentStep = 0;
    private Collider2D boxCollider;


    void Awake()
    {
        boxCollider = GetComponent<Collider2D>();
        boxCollider.enabled = true;
        currentStep = 0;
        NextStep();
        currentAnimation = animationNameDefault;
        SpineHelper.ChangeAnimation(skeletonGraphic, currentAnimation, true);
    }
    public void DragItem()
    {

        currentStep++;
        NextStep();
        CheckDone();
    }

    public void DragItemCustomBride(string animationName)
    {
        if (animationName == "action" && !isClickSmile)
        {
            isClickSmile = true;

        }
        if (animationName == "win" && !isClickSmile) return;
        LunaManager.ins.CountPlay();

        if (animationName == "win")
        {
            AudioController.Instance.PlaySfx("4");
        }

        if (animationName == "trumdau" && !isHead)
        {
            isHead = true;
            AudioController.Instance.PlaySfx("5");
        }

        if (animationName != "trumdau")
        {
            if (animationName == "action")
            {
                AudioController.Instance.PlaySfx("1");
            }

            currentAnimation = animationName;
        }

        if (skeletonGraphic != null)
        {
            if (isHead)
            {
                SpineHelper.ChangeSkinAndAnimation(skeletonGraphic, "trumdau", animationName, true);
            }
            else
            {
                SpineHelper.ChangeSkinAndAnimation(skeletonGraphic, "default", animationName, true);
            }

        }

    }
    public void DragItemCustomGroom(string animationName)
    {
        //SKINMIX
        if (animationName == "shoes" && !isShoes)
        {
            AudioController.Instance.PlaySfx("6");
            isShoes = true;
        }
        if (animationName == "tie" && !isTie)
        {
            AudioController.Instance.PlaySfx("7");
            isTie = true;
        }
        if (animationName == "leg" && !isLeg)
        {
            LunaManager.ins.CountPlay();
            AudioController.Instance.PlaySfx("9");
            isLeg = true;
        }


        if (isShoes && isTie && isLeg)
        {
            mixSkeletonSkin.MixAndApplySkins("giay", "cavat", "ongquan");
        }
        else if (isTie && isLeg)
        {
            mixSkeletonSkin.MixAndApplySkins("cavat", "ongquan");
        }
        else if (isShoes && isTie)
        {
            mixSkeletonSkin.MixAndApplySkins("giay", "cavat");
        }
        else if (isShoes && isLeg)
        {
            mixSkeletonSkin.MixAndApplySkins("giay", "ongquan");
        }
        else if (isShoes)
        {
            mixSkeletonSkin.MixAndApplySkins("giay");
        }
        else if (isTie)
        {
            mixSkeletonSkin.MixAndApplySkins("cavat");
        }
        else if (isLeg)
        {
            mixSkeletonSkin.MixAndApplySkins("ongquan");
        }

        else
        {
            mixSkeletonSkin.MixAndApplySkins("default");
        }
    }
    public void ClickGroom(string animationName)
    {
        if (animationName == "action1")
        {
            AudioController.Instance.PlaySfx("2");
        }
        else if (animationName == "win")
        {
            AudioController.Instance.PlaySfx("10");
        }
        LunaManager.ins.CountPlay();
        SpineHelper.ChangeAnimation(skeletonGraphic, animationName, true);
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
