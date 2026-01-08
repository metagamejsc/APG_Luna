using System.Collections.Generic;
using DG.Tweening;
using Spine;
using Spine.Unity;
using UnityEngine;

public class DropID : MonoBehaviour
{
    // public SkeletonGraphic skeletonGraphic;
    public GameObject GridMan;
    public List<GameObject> girls;
    public SkeletonDataAsset[] skeletonDataAssets;
    //public MixSkeletonSkin mixSkeletonSkin;
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
        var index = 0;
        if (index < 0) return;
        AudioController.Instance.PlaySfx("Done");
        var go = girls[0];
        var skeletonGraphic = go.GetComponent<SkeletonGraphic>();

        if (skeletonGraphic == null) return;
        skeletonGraphic.skeletonDataAsset = skeletonDataAssets[id];
        skeletonGraphic.Initialize(true);

        var state = skeletonGraphic.AnimationState;

        switch (id)
        {
            case 0:
                var girlFan = LunaManager.ins.girlFan;
                var skeGragirlFan = girlFan.GetComponent<SkeletonGraphic>();
                var stategirlFan = skeGragirlFan.AnimationState;
                stategirlFan.SetAnimation(0, "action", true);
                TrackEntry entry = state.SetAnimation(0, "action", false);
                entry.Complete += _ =>
                {
                    state.SetAnimation(0, "move", true);
                    MoveGrid();
                    //move girl
                    go.transform.localScale = new Vector3(-1f, 1f, 1f);
                    go.transform.DOKill();
                    go.transform.DOLocalMove(new Vector3(-750f, 230f, 0f), 2f).OnComplete(() =>
                    {
                        LunaManager.ins.SetIsDrag(true);
                        Destroy(go);
                        girls.RemoveAt(index);

                    });

                };
                break;
            case 1:
                AudioController.Instance.PlaySfx("Ufo");
                TrackEntry entry1 = state.SetAnimation(0, "action", false);
                entry1.Complete += _ =>
                {
                    MoveGrid();
                    //move girl
                    LunaManager.ins.SetIsDrag(true);
                    Destroy(go);
                    girls.RemoveAt(index);

                };
                break;
            case 2:
                //cho duoi
                AudioController.Instance.PlaySfx("Scare");
                TrackEntry entry2 = state.SetAnimation(0, "action", false);
                var dog = LunaManager.ins.dog;
                var skeGraDog = dog.GetComponent<SkeletonGraphic>();
                var stateDog = skeGraDog.AnimationState;
                stateDog.SetAnimation(0, "idle2", true);
                entry2.Complete += _ =>
                {
                    //move dog
                    stateDog.SetAnimation(0, "action", true);
                    dog.transform.DOKill();
                    dog.transform.DOLocalMove(new Vector3(-750f, 230f, 0f), 2f).OnComplete(() =>
                    {
                        Destroy(dog);
                    });
                    //movegirl
                    state.SetAnimation(0, "win", true);
                    MoveGrid();

                    go.transform.DOKill();
                    go.transform.DOLocalMove(new Vector3(-750f, 230f, 0f), 2f).OnComplete(() =>
                    {
                        LunaManager.ins.SetIsDrag(true);
                        Destroy(go);
                        girls.RemoveAt(index);

                    });

                };
                break;
            case 3:
                //voi nuoc
                AudioController.Instance.PlaySfx("Water");
                var water = LunaManager.ins.water;
                water.SetActive(true);
                TrackEntry entry3 = state.SetAnimation(0, "action", false);
                entry3.Complete += _ =>
                {

                    state.SetAnimation(0, "win", true);
                    MoveGrid();
                    //move girl
                    go.transform.DOKill();
                    go.transform.DOLocalMove(new Vector3(-750f, 230f, 0f), 2f).OnComplete(() =>
                    {
                        LunaManager.ins.SetIsDrag(true);
                        Destroy(go);
                        Destroy(water);
                        girls.RemoveAt(index);

                    });

                };
                break;
            case 4:
                //trung chim
                AudioController.Instance.PlaySfx("Bird");
                TrackEntry entry4 = state.SetAnimation(0, "win", true);

                //state.SetAnimation(0, "win", true);
                MoveGrid();
                //move girl
                go.transform.DOKill();
                go.transform.DOLocalMove(new Vector3(-750f, 230f, 0f), 2f).OnComplete(() =>
                {
                    LunaManager.ins.SetIsDrag(true);
                    Destroy(go);
                    girls.RemoveAt(index);

                });
                break;

            case 5:
                //rac
                AudioController.Instance.PlaySfx("Die");
                TrackEntry entry5 = state.SetAnimation(0, "action", true);
                entry5.Complete += _ =>
                {
                    MoveGrid();
                    LunaManager.ins.SetIsDrag(true);
                    Destroy(go);
                    girls.RemoveAt(index);


                };
                break;
            case 6:
                //mat troi
                AudioController.Instance.PlaySfx("Die");
                TrackEntry entry6 = state.SetAnimation(0, "action", true);
                entry6.Complete += _ =>
                {
                    MoveGrid();
                    LunaManager.ins.SetIsDrag(true);
                    Destroy(go);
                    girls.RemoveAt(index);


                };
                break;
            case 7:
                //but ve
                var decor = LunaManager.ins.womanDecor;
                Destroy(decor);
                TrackEntry entry7 = state.SetAnimation(0, "move", true);
                MoveGrid();
                go.transform.DOKill();
                go.transform.DOLocalMove(new Vector3(-750f, 230f, 0f), 2f).OnComplete(() =>
                {
                    LunaManager.ins.SetIsDrag(true);

                    Destroy(go);
                    girls.RemoveAt(index);

                });
                break;
            case 8:
                //money

                TrackEntry entry8 = state.SetAnimation(0, "action", false);
                entry8.Complete += _ =>
                {

                    state.SetAnimation(0, "win", true);
                    MoveGrid();
                    //move girl
                    go.transform.DOKill();
                    go.transform.DOLocalMove(new Vector3(-750f, 230f, 0f), 2f).OnComplete(() =>
                    {
                        LunaManager.ins.SetIsDrag(true);
                        Destroy(go);
                        girls.RemoveAt(index);

                    });

                };
                break;

            default:

                break;
        }





    }
    void MoveGrid()
    {
        if (GridMan != null)
        {
            GridMan.transform.DOKill();

            GridMan.transform
                .DOLocalMove(
                    GridMan.transform.localPosition + new Vector3(63f, 56f, 0f),
                    0.3f
                )
                .SetEase(Ease.OutQuad);
        }


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
