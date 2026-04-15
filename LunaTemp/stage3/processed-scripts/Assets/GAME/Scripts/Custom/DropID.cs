using System;
using System.Collections;
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
    public MixSkeletonSkin casetteSkeleton;
    public GameObject[] SlotItems;
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
        SetSlotItem(0);
        //NextStep();
        //currentAnimation = animationNameDefault;
        // SpineHelper.ChangeAnimation(skeletonGraphic, currentAnimation, true);
    }
    void SetSlotItem(int index)
    {
        foreach (var i in SlotItems)
        {
            if (i == null) continue;
            i.SetActive(false);
        }
        if (SlotItems[index] != null)
        {
            SlotItems[index].SetActive(true);
        }

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
                mixSkeletonSkin.PlayAnimationOnlyWithTime("Slot 1_Coffee x Dai Casette", 1.5f);
                AudioController.Instance.PlaySfx("Item1");
                break;
            case 2:
                //Phone
                SetSlotItem(2);
                DelayAction(2.5f, () => { SetSlotItem(0); mixSkeletonSkin.PlayAnimationOnlyWithTime("Slot 2_Ong Chu", 4f); AudioController.Instance.PlaySfx("Typing_Key"); AudioController.Instance.PlaySfx("Item2"); });
                //mixSkeletonSkin.PlayAnimationOnly("Slot 2_sau rieng", false, () => { SetDefaultAnim(); });
                //AudioController.Instance.PlaySfx("Item1");
                break;
            case 3:
                mixSkeletonSkin.PlayAnimationOnly("Slot 3_dua chuot", false, () => { SetDefaultAnim(); });
                AudioController.Instance.PlaySfx("Item3");
                break;
            case 4:
                mixSkeletonSkin.PlayAnimationOnlyWithTime("Slot 4,1_Bang Dinh", 2f);
                AudioController.Instance.PlaySfx("Item4");

                break;
            case 5:
                mixSkeletonSkin.PlayAnimationOnlyWithTime("Slot 5_Cai Kep", 2f);
                AudioController.Instance.PlaySfx("Item5");
                break;
            case 6:
                mixSkeletonSkin.PlayAnimationOnlyWithTime("Slot 6,2_Qua Chanh_Loop", 1f);
                AudioController.Instance.PlaySfx("Typing_Key_Scare");
                break;
            case 7:
                mixSkeletonSkin.PlayAnimationOnlyWithTime("Slot 7,2_Cay Kem", 3f);
                AudioController.Instance.PlaySfx("Item7");
                break;
            case 8:
                SetSlotItem(8);
                DelayAction(5f, () => { SetSlotItem(0); });
                mixSkeletonSkin.PlayAnimationOnlyWithTime("Slot 8,1_Ten Trom", 5f);
                AudioController.Instance.PlaySfx("Item8");
                break;
            case 9:
                casetteSkeleton.PlayAnimationOnlyWithTime("Slot 9_Dai Casette_Loop", 2f);
                mixSkeletonSkin.PlayAnimationOnlyWithTime("Slot 1_Coffee x Dai Casette", 2f);
                AudioController.Instance.PlaySfx("Item9");
                break;
            case 10:
                //lo thuoc
                mixSkeletonSkin.PlayAnimationOnly("Slot 10.1_lo thuoc", false, () => { SetDefaultAnim(); });
                AudioController.Instance.PlaySfx("Item10");
                //SetAnimal(1);
                break;
            default:
                currentAnimation = "";
                break;
        }
        //
        // AudioController.Instance.PlaySfx("Oe");
        LunaManager.ins.SetIsDrag(true);

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

    public void DelayAction(float time, Action action)
    {
        StartCoroutine(DelayActionCoroutine(time, action));
    }

    private IEnumerator DelayActionCoroutine(float time, Action action)
    {
        yield return new WaitForSeconds(time);
        action?.Invoke();
    }

    public int GetCurrentStep()
    {
        return currentStep;
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

}
