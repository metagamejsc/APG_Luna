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
    public GameObject[] Animal;
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
        SetAnimal(0);
        //NextStep();
        //currentAnimation = animationNameDefault;
        // SpineHelper.ChangeAnimation(skeletonGraphic, currentAnimation, true);
    }
    void SetAnimal(int index)
    {
        foreach (var i in Animal)
        {
            i.SetActive(false);
        }
        Animal[index].SetActive(true);
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
            case 1:
                //mi cay
                mixSkeletonSkin.PlayAnimationOnly("Slot 1_dia mi ot", false, () => { SetDefaultAnim(); });
                AudioController.Instance.PlaySfx("Item1");
                break;
            case 2:
                //sau rieng
                mixSkeletonSkin.PlayAnimationOnly("Slot 2_sau rieng", false, () => { SetDefaultAnim(); });
                //AudioController.Instance.PlaySfx("Item1");
                break;
            case 3:
                //dua chuot
                mixSkeletonSkin.PlayAnimationOnly("Slot 3_dua chuot", false, () => { SetDefaultAnim(); });
                AudioController.Instance.PlaySfx("Item3");
                break;
            case 4:
                //binh cuu hoa
                mixSkeletonSkin.PlayAnimationOnly("Slot 4_binh cuu hoa", false, () => { SetDefaultAnim(); });

                break;
            case 5:
                //kem
                mixSkeletonSkin.PlayAnimationOnly("Slot 5.1_an kem", false, () => { SetDefaultAnim(); });
                AudioController.Instance.PlaySfx("Item5");
                break;
            case 6:
                //an tao
                mixSkeletonSkin.PlayAnimationOnly("Slot 6_ an tao", false, () => { SetDefaultAnim(); });
                AudioController.Instance.PlaySfx("Item6");
                break;
            case 7:
                //tra sua
                mixSkeletonSkin.PlayAnimationOnly("Slot 7_ Tra sua", false, () => { SetDefaultAnim(); });
                AudioController.Instance.PlaySfx("Item7");
                break;
            case 8:
                //cua so
                mixSkeletonSkin.PlayAnimationOnly("Slot 8_cua so", false, () => { SetDefaultAnim(); });
                AudioController.Instance.PlaySfx("Item8");
                break;
            case 9:
                //poster
                mixSkeletonSkin.PlayAnimationOnly("Slot 9_poster", false, () => { SetDefaultAnim(); });
                AudioController.Instance.PlaySfx("Item9");
                break;
            case 10:
                //lo thuoc
                mixSkeletonSkin.PlayAnimationOnly("Slot 10.1_lo thuoc", false, () => { SetDefaultAnim(); });
                AudioController.Instance.PlaySfx("Item10");
                SetAnimal(1);
                break;
            default:
                currentAnimation = "";
                break;
        }
        //
        // AudioController.Instance.PlaySfx("Oe");
        // var index = mans.Count - 1;
        // if (index < 0) return;

        // var go = mans[index];
        // var skeletonGraphic = go.GetComponent<SkeletonGraphic>();
        // var state = skeletonGraphic.AnimationState;

        // TrackEntry entry = state.SetAnimation(0, "action", false);
        // entry.Complete += _ =>
        // {
        //     //state.SetAnimation(0, "idle", true);
        //  

        // };



    }
    void SetDefaultAnim()
    {
        mixSkeletonSkin.SetDefaultAnimation();
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
