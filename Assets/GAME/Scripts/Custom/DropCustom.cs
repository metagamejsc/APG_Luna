using Spine.Unity;
using UnityEngine;

public class DropCustom : MonoBehaviour
{
    //public int idDrop = 0;
    //public GameObject[] steps;
    public SkeletonGraphic skeletonGraphic;
    public MixSkeletonSkin mixSkeletonSkin;
    //public MixSkeletonSkin skeDoor;
    //public MixSkeletonSkin skeDog;
    //public int numBody = 0;
    //----------------------------------------------
    // public GameObject[] items;
    //------------------------------------

    //------------------------------------
    private int currentStep = 0;
    private Collider2D boxCollider;


    void Awake()
    {
        boxCollider = GetComponent<Collider2D>();
        boxCollider.enabled = true;
        currentStep = 0;
    }
    //----------------------------------------------------------------------------------------------------------------------------
    // public void DragItemDress(string animationName)
    // {
    //     mixSkeletonSkin.PlayAnimationOnly(animationName, true);
    // }

    public void DragItemCustomAnim(int idDrag = 0, string animationName = "default")
    {
        if (idDrag == 7)
        {
            mixSkeletonSkin.PlaySkinOnly("hair", true);
        }
        mixSkeletonSkin.PlayAnimationOnly(animationName, false, () => { SetDefaultAnimation(idDrag, "idle"); });

        string sfxName = "Item" + idDrag;
        AudioController.Instance.PlaySfx(sfxName);
        AudioController.Instance.PlaySfx("Click");
        AudioController.Instance.PlaySfx("SlipWater");

    }
    void SetDefaultAnimation(int id = 0, string nameSkin = "default")
    {
        if (id == 9)
        {
            mixSkeletonSkin.PlayAnimationOnly("lose", true);
            AnimLose();
        }
        else
        {
            mixSkeletonSkin.PlayAnimationOnly(nameSkin, true);
            LunaManager.ins.SetIsDrag(true);


        }


    }
    public void AnimLose()
    {
        LunaManager.ins.LoseGO.SetActive(true);
        LunaManager.ins.ShowEndCard();
    }
    // public void SpawnItem(int id)
    // {
    //     var item = Instantiate(items[id], transform.position, Quaternion.identity);
    //     item.transform.SetParent(LunaManager.ins.Parent.transform);
    //     item.transform.localScale = Vector3.one;
    //     item.transform.localPosition = Vector3.zero;
    //     Destroy(item, 1.333f);

    // }
    //----------------------------------------------------------------------------------------------------------------------------
    public void ButtonClickDoor()
    {
        if (LunaManager.ins.countPlay < 10)
        {
            //lose
            // skeDoor.PlayAnimationWithSkin("Outro", "default", () => { LoseGame(); }, false);
            LunaManager.ins.LoseGO.SetActive(true);
        }
        else
        {
            //win
            //  skeDoor.PlayAnimationWithSkin("Outro", "default", () => { WinGame(); }, false);
            LunaManager.ins.WinGO.SetActive(true);
        }

    }
    void LoseGame()
    {
        // skeDoor.PlayAnimationOnly("Thao Tac Sai_Loop", true);
        LunaManager.ins.ShowEndCard();
    }
    void WinGame()
    {
        //skeDoor.PlayAnimationOnly("Outro_Loop", true);
        LunaManager.ins.ShowEndCard();
    }
    //----------------------------------------------------------------------------------------------------------------------------
    // public void ChangeAnimationDog()
    // {
    //     skeDog.PlayAnimationOnly("Slot 1_Keo Khuc Xuong", false, () =>
    //             {
    //                 skeDog.PlayAnimationOnly("Slot 1_Keo Khuc Xuong_Loop", true);
    //             });
    // }
    //----------------------------------------------------------------------------------------------------------------------------
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
