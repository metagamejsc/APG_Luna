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
                mixSkeletonSkin.PlayAnimationOnly("Slot 1_Keo Chai Ruou", false, () => { SetTrueDrag(); });
                AudioController.Instance.PlaySfx("Item1", 1f);
                break;
            case 2:
                mixSkeletonSkin.PlayAnimationOnly("Slot 2_Keo Vot Muoi", false, () => { SetTrueDrag(); });
                AudioController.Instance.PlaySfx("Item2", 1f);
                break;
            case 3:
                mixSkeletonSkin.PlayAnimationOnly("Slot 3_Keo Vi Dap Ruoi", false, () => { SetTrueDrag(); });
                AudioController.Instance.PlaySfx("Item3", .25f);
                break;
            case 4:
                mixSkeletonSkin.PlayAnimationOnly("Slot 4_Keo Mic", false, () => { SetTrueDrag(); });
                AudioController.Instance.PlaySfx("Item4", .5f);
                break;
            case 5:
                mixSkeletonSkin.PlayAnimationOnly("Slot 5_Binh Xit Cay", false, () => { SetTrueDrag(); });
                AudioController.Instance.PlaySfx("Item5", 1f);
                break;
            case 6:
                mixSkeletonSkin.ApplySkinOnly("default");
                mixSkeletonSkin.PlayAnimationOnly("Slot 6_Keo Doi Tat", false, () => { SetTrueDrag(); });
                AudioController.Instance.PlaySfx("Item6", 1f);
                break;
            case 71:
                mixSkeletonSkin.PlayAnimationOnly("Slot 7,1_Keo Qua Chanh", false, () => { SetTrueDrag(); });
                AudioController.Instance.PlaySfx("Item71", 1f);
                break;
            case 72:
                mixSkeletonSkin.PlayAnimationOnly("Slot 7,2_Keo Ca Nuoc", false, () => { SetTrueDrag(); });
                AudioController.Instance.PlaySfx("Item72", .5f);
                break;
            case 81:
                mixSkeletonSkin.PlayAnimationOnly("Slot 8,1_Keo Bay Chuot", false, () => { SetTrueDrag(); });
                AudioController.Instance.PlaySfx("Item81", 1f);
                break;
            default:
                currentAnimation = "";
                break;
        }


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
    void SetTrueDrag()
    {
        LunaManager.ins.SetIsDrag(true);
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
