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
    public GameObject GridMan;
    public List<GameObject> mans;
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
                //keo
                mixSkeletonSkin.RemoveSkinName("vay");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Item0");
                break;
            case 1:
                //phi tieu
                mixSkeletonSkin.RemoveSkinName("nguc");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Item1");
                break;
            case 2:
                //mic
                mixSkeletonSkin.PlayAnimation("action_hat");
                break;
            case 3:
                //click cabinet

                break;
            case 4:
                //click hair
                mixSkeletonSkin.RemoveSkinName("toc");
                mixSkeletonSkin.MixAndApplySkins();
                break;
            case 5:
                //khau trang
                mixSkeletonSkin.RemoveSkinName("khautrang");
                mixSkeletonSkin.MixAndApplySkins();
                break;
            case 6:
                //sip
                mixSkeletonSkin.RemoveSkinName("face");
                mixSkeletonSkin.MixAndApplySkins();
                break;
            default:
                currentAnimation = "";
                break;
        }
        //
        AudioController.Instance.PlaySfx("Oe");
        var index = mans.Count - 1;
        if (index < 0) return;

        var go = mans[index];
        var skeletonGraphic = go.GetComponent<SkeletonGraphic>();
        var state = skeletonGraphic.AnimationState;

        TrackEntry entry = state.SetAnimation(0, "action", false);
        entry.Complete += _ =>
        {
            state.SetAnimation(0, "idle", true);

            if (GridMan != null)
            {
                GridMan.transform.DOKill();

                GridMan.transform
                    .DOLocalMove(
                        GridMan.transform.localPosition + new Vector3(-80f, -20f, 0f),
                        0.3f
                    )
                    .SetEase(Ease.OutQuad);
            }
            LunaManager.ins.SetIsDrag(true);
            Destroy(go);
            mans.RemoveAt(index);
        };



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
