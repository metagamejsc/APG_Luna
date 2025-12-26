using System.Data.Common;
using DG.Tweening;
using Spine.Unity;
using UnityEngine;

public class DropSpawn : MonoBehaviour
{
    //public int idDrop = 0;
    //public GameObject[] steps;
    //----------------------------------------------
    public GameObject[] spawnPrefabs;
    public Transform transSpawn;
    public GameObject idleHumman;
    public GameObject moveHumman;
    public Vector3[] transMoves;

    // public SkeletonGraphic skeletonAnimation;
    //------------------------------------
    private int currentStep = 0;
    private Collider2D collider2d;


    void Awake()
    {
        collider2d = GetComponent<Collider2D>();
        collider2d.enabled = true;
        currentStep = -1;
        // NextStep();
    }
    void Start()
    {
        idleHumman.SetActive(true);
        moveHumman.SetActive(false);
        moveHumman.transform.position = Vector3.zero;
    }
    public void DragItemID(int id)
    {
        LunaManager.ins.OffStartCard();
        LunaManager.ins.isDrag = false;
        if (idleHumman.activeSelf) idleHumman.SetActive(false);
        if (!moveHumman.activeSelf) moveHumman.SetActive(true);
        //SPAWM ITEM
        GameObject i = Instantiate(spawnPrefabs[id], transform.position, Quaternion.identity);
        i.transform.SetParent(transSpawn);
        i.transform.localScale = Vector3.one;
        i.transform.localPosition = Vector3.zero;
        i.transform.localRotation = Quaternion.Euler(Vector3.zero);
        //MOVE HUMMAN
        currentStep++;
        var targetPos = transMoves[currentStep];
        var skeletonHuman = moveHumman.GetComponent<SkeletonGraphic>();
        skeletonHuman.AnimationState.SetAnimation(0, "Girl 2_move", false);
        Tween moveTween = moveHumman.transform.DOLocalMove(targetPos, 0.667f).SetEase(Ease.Linear);
        moveTween.OnComplete(() =>
        {
            skeletonHuman.AnimationState.SetAnimation(0, "Girl 2_idle", true);
            LunaManager.ins.isDrag = true;
        });
        //skeletonAnimation.AnimationState.SetAnimation(0, "move", false).Complete += delegate
    }

    // public void DragItem()
    // {

    //     currentStep++;
    //     NextStep();
    //     CheckDone();
    // }

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
    // public int GetCurrentStep()
    // {
    //     return currentStep;
    // }
}
