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
    //----------------------------------------------

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

                break;
            case 1:
                mixSkeletonSkin.PlayAnimationOnly("Slot 1,1_Bong Tay Trang");
                break;
            case 2:
                mixSkeletonSkin.PlayAnimationOnly("Slot 2_Sau Rieng");
                break;
            case 3:
                mixSkeletonSkin.PlayAnimationOnly("Slot 3_Lo Hat Tieu");
                break;
            case 4:
                mixSkeletonSkin.RemoveSkinName("toc");
                mixSkeletonSkin.MixAndApplySkins();
                break;
            case 5:
                mixSkeletonSkin.PlayAnimationOnly("Slot 5_Keo Mic");
                break;
            case 6:
                mixSkeletonSkin.PlayAnimationOnly("Slot 6,1_Keo May Say Toc");
                break;
            case 7:
                mixSkeletonSkin.PlayAnimationOnly("Slot 7_Keo Chai Thuoc");
                break;
            case 8:
                mixSkeletonSkin.PlayAnimationOnly("Slot 8_Keo Dan Violin");
                break;
            case 9:
                mixSkeletonSkin.PlayAnimationOnly("Slot 9,1_Keo Gay Bon Cau");
                break;
            case 10:
                mixSkeletonSkin.PlayAnimationOnly("Slot 10_Tap Tham Lau Chan");
                break;
            case 11:
                mixSkeletonSkin.PlayAnimationOnly("Slot 11,1_Keo Ly Nuoc Girl");
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
