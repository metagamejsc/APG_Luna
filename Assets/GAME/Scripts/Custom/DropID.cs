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
                mixSkeletonSkin.AddSkin("twig_equipped");
                mixSkeletonSkin.MixAndApplySkins();
                LunaManager.ins.processBuildRope++;
                break;
            case 1:
                //baloMixSkeletonSkin.PlayAnimationOnly("Slot 1_Keo Chai Nuoc_Loop", true);
                mixSkeletonSkin.AddSkin("water_bottle_equipped");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Item1");
                break;
            case 2:
                //headphoneMixSkeletonSkin.PlayAnimationOnly("Slot 2_Keo Tai Nghe_Loop", true);
                mixSkeletonSkin.AddSkin("hedphone_equipped");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Item2");
                break;
            case 3:
                ///mixSkeletonSkin.PlayAnimationOnly("Slot 3_Lo Hat Tieu");
                AudioController.Instance.PlaySfx("Item3");
                break;
            case 4:
                mixSkeletonSkin.AddSkin("flashlight_equipped");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Item4");
                break;
            case 5:
                mixSkeletonSkin.AddSkin("map_equipped");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Item5");
                break;
            case 6:
                mixSkeletonSkin.AddSkin("rag_equipped");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Item6");
                break;
            case 7:
                mixSkeletonSkin.PlayAnimationOnly("Act 2", true);

                break;
            case 8:
                mixSkeletonSkin.AddSkin("hiking_stick_equipped");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Item8");
                break;
            case 9:
                mixSkeletonSkin.AddSkin("rat_dead_equipped");
                mixSkeletonSkin.MixAndApplySkins();
                LunaManager.ins.processBuildRope++;
                break;
            case 10:
                mixSkeletonSkin.AddSkin("rope_equipped");
                mixSkeletonSkin.MixAndApplySkins();
                LunaManager.ins.processBuildRope++;
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
