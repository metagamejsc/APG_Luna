using Spine.Unity;
using UnityEngine;

public class DropCustom : MonoBehaviour
{
    //public int idDrop = 0;
    //public GameObject[] steps;
    public SkeletonGraphic skeletonGraphic;
    public string animationNameDefault = "idle";
    public MixSkeletonSkin mixSkeletonSkin;
    public MixSkeletonSkin skeDoor;
    public int numBody = 0;
    //----------------------------------------------
    public GameObject[] items;
    //------------------------------------
    private string currentAnimation = "";
    private int currentStep = 0;
    private Collider2D boxCollider;


    void Awake()
    {
        boxCollider = GetComponent<Collider2D>();
        boxCollider.enabled = true;
        currentStep = 0;
        currentAnimation = animationNameDefault;
        numBody = 8;
    }
    public void DragItemDress(string animationName)
    {
        // mixSkeletonSkin.PlayAnimationWithSkin(animationName, "default", () => { }, true);
        mixSkeletonSkin.PlayAnimationOnly(animationName, true);
    }

    public void DragItemCustomAnim(int id, string animationName)
    {
        numBody--;
        string nameSkin = "girl_body_" + numBody;
        mixSkeletonSkin.PlayAnimationWithSkin(animationName, nameSkin, () => { SetDefaultAnimation(); });
        SpawnItem(id);

    }
    void SetDefaultAnimation()
    {
        SpineHelper.ChangeAnimation(skeletonGraphic, currentAnimation, true);
        LunaManager.ins.SetIsDrag(true);
    }
    public void SpawnItem(int id)
    {
        var item = Instantiate(items[id], transform.position, Quaternion.identity);
        item.transform.SetParent(this.transform);
        item.transform.localScale = Vector3.one;
        item.transform.localPosition = Vector3.zero;
        Destroy(item, 2f);

    }
    public void ButtonClickDoor()
    {
        if (LunaManager.ins.countPlay < 8)
        {
            //lose
            skeDoor.PlayAnimationWithSkin("Thao Tac Sai", "default", () => { LoseGame(); }, false);
            LunaManager.ins.LoseGO.SetActive(true);
        }
        else
        {
            //win
            skeDoor.PlayAnimationWithSkin("Outro", "default", () => { WinGame(); }, false);
            LunaManager.ins.WinGO.SetActive(true);
        }

    }
    void LoseGame()
    {
        skeDoor.PlayAnimationOnly("Thao Tac Sai_Loop", true);
        LunaManager.ins.ShowEndCard();
    }
    void WinGame()
    {
        skeDoor.PlayAnimationOnly("Outro_Loop", true);
        LunaManager.ins.ShowEndCard();
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
