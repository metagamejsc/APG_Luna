using System.Collections.Generic;
using DG.Tweening;
using Spine;
using Spine.Unity;
using UnityEngine;

public class DropID : MonoBehaviour
{
    // public int idDrop = 0;
    //public GameObject[] steps;
    // public SkeletonGraphic skeletonGraphic;
    // public string animationNameDefault = "idle";
    //public GameObject GridMan;
    //public List<GameObject> mans;
    public MixSkeletonSkin mixSkeletonSkin;

    //------------------------------------
    private string currentAnimation = "";
    private int currentStep = 0;
    private Collider2D boxCollider;


    void Awake()
    {
        boxCollider = GetComponent<Collider2D>();
        boxCollider.enabled = true;
        currentStep = 0;
        //NextStep();
        //currentAnimation = animationNameDefault;
        // SpineHelper.ChangeAnimation(skeletonGraphic, currentAnimation, true);
    }
    public void DragItem()
    {

        currentStep++;
        //NextStep();
        //CheckDone();
    }
    public void DragItemID(int id)
    {
        switch (id)
        {
            case 0:
                // mixSkeletonSkin.AddSkin("twig_equipped");
                // mixSkeletonSkin.MixAndApplySkins();
                //LunaManager.ins.processBuildRope++;
                break;
            case 1:
                mixSkeletonSkin.PlayAnimationOnly("Slot 1,1_Keo Con Meo");
                AudioController.Instance.PlaySfx("Item1");
                AudioController.Instance.PlaySfx("meo");
                break;
            case 2:
                mixSkeletonSkin.PlayAnimationOnly("Slot 2_Guong Bat Quai");
                AudioController.Instance.PlaySfx("guong");
                break;
            case 3:
                mixSkeletonSkin.PlayAnimationOnly("Slot 3,1_Keo Den Pin");
                AudioController.Instance.PlaySfx("Item3");
                AudioController.Instance.PlaySfx("dien");
                break;
            case 4:
                mixSkeletonSkin.PlayAnimationOnly("Slot 4_Keo Lo Muoi");
                AudioController.Instance.PlaySfx("Item4");
                AudioController.Instance.PlaySfx("tieu");
                break;
            case 5:
                mixSkeletonSkin.PlayAnimationOnly("Slot 5_Keo Binh Xit");
                AudioController.Instance.PlaySfx("Item5");
                AudioController.Instance.PlaySfx("xit");
                break;
            case 6:
                mixSkeletonSkin.PlayAnimationOnly("Slot 6_Keo Chai Ruou");
                AudioController.Instance.PlaySfx("Item6");
                break;
            case 71:
                mixSkeletonSkin.PlayAnimationOnly("Slot 7,1_Keo Sau Rieng");
                AudioController.Instance.PlaySfx("Item71");
                break;
            case 72:
                mixSkeletonSkin.PlayAnimationOnly("Slot 7,2_Keo Tai Nghe");
                AudioController.Instance.PlaySfx("Item72");
                break;
            case 8:
                mixSkeletonSkin.PlayAnimationOnly("Slot 8_Keo Khan Lau Mat");
                AudioController.Instance.PlaySfx("Item8");
                break;
            case 9:
                mixSkeletonSkin.PlayAnimationOnly("Slot 9_Keo Rui Cui Dien");
                AudioController.Instance.PlaySfx("Item9");
                AudioController.Instance.PlaySfx("dien");
                break;
            case 10:

                break;
            case 11:
                mixSkeletonSkin.PlayAnimationOnly("Slot 11,1_Keo Tuong Phat");
                AudioController.Instance.PlaySfx("Item11");
                AudioController.Instance.PlaySfx("phat");
                break;
            default:
                currentAnimation = "";
                break;
        }
        LunaManager.ins.SetIsDrag(true);

        // AudioController.Instance.PlaySfx("Oe");
        // var index = mans.Count - 1;
        // if (index < 0) return;

        // var go = mans[index];
        // var skeletonGraphic = go.GetComponent<SkeletonGraphic>();
        // var state = skeletonGraphic.AnimationState;

        // TrackEntry entry = state.SetAnimation(0, "action", false);
        // entry.Complete += _ =>
        // {
        //     state.SetAnimation(0, "idle", true);

        //     if (GridMan != null)
        //     {
        //         GridMan.transform.DOKill();

        //         GridMan.transform
        //             .DOLocalMove(
        //                 GridMan.transform.localPosition + new Vector3(-80f, -20f, 0f),
        //                 0.3f
        //             )
        //             .SetEase(Ease.OutQuad);
        //     }

        //     Destroy(go);
        //     mans.RemoveAt(index);
        // };



    }

    // void NextStep()
    // {
    //     if (steps.Length <= 0) return;
    //     foreach (var step in steps)
    //     {
    //         step.SetActive(false);
    //     }
    //     steps[currentStep].SetActive(true);
    // }
    // void CheckDone()
    // {
    //     if (currentStep == steps.Length - 1)
    //     {
    //         boxCollider.enabled = false;
    //     }
    // }
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
