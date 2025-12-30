using System.Collections;
using System.Data.Common;
using DG.Tweening;
using Spine.Unity;
using UnityEngine;

public class DropSpawn : MonoBehaviour
{
    //----------------------------------------------
    public GameObject[] spawnPrefabs;
    public Transform transSpawn;
    public GameObject fireMan;
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

    public void DragItemID(int id)
    {
        LunaManager.ins.OffStartCard();
        LunaManager.ins.isDrag = false;
        fireMan.SetActive(false);
        //SPAWM ITEM
        GameObject i = Instantiate(spawnPrefabs[id], transform.position, Quaternion.identity);
        i.transform.SetParent(transSpawn);
        i.transform.localScale = Vector3.one;
        i.transform.localPosition = Vector3.zero;
        i.transform.localRotation = Quaternion.Euler(Vector3.zero);
        //CASE
        switch (id)
        {
            case 0:
                break;
            case 1:
                //binh cuu hoa
                StartCoroutine(DelayActiveNode(fireMan, 3f));
                StartCoroutine(DelayDestroyNode(i, 3f));
                break;
            case 2:
                //bao cat
                StartCoroutine(DelayActiveNode(fireMan, 3.2f));
                StartCoroutine(DelayBaoCat(i, 3.2f));
                break;
            case 3:
                //sach ma phap
                StartCoroutine(DelayActiveNode(fireMan, 3f));
                StartCoroutine(DelayDestroyNode(i, 3f));
                break;
            case 4:
                //mu tho dan
                StartCoroutine(DelayActiveNode(fireMan, 2.75f));
                StartCoroutine(DelayDestroyNode(i, 2.75f));
                break;
            case 5:
                //bo dam
                StartCoroutine(DelayActiveNode(fireMan, 3f));
                StartCoroutine(DelayDestroyNode(i, 3f));
                break;
            case 6:
                //ong dan nuoc
                StartCoroutine(DelayActiveNode(fireMan, 3f));
                StartCoroutine(DelayDestroyNode(i, 3f));
                break;
            case 7:
                //pokemon
                StartCoroutine(DelayPokemon(i, 1.75f));
                StartCoroutine(DelayActiveNode(fireMan, 4f));
                StartCoroutine(DelayDestroyNode(i, 4f));
                break;
            case 8:
                //katana
                StartCoroutine(DelayActiveNode(fireMan, 3f));
                StartCoroutine(DelayDestroyNode(i, 3f));
                break;
            default:
                break;
        }
    }
    private IEnumerator DelayActiveNode(GameObject nodeActive, float timer)
    {
        yield return new WaitForSeconds(timer);
        nodeActive.SetActive(true);
        LunaManager.ins.isDrag = true;
    }

    private IEnumerator DelayDestroyNode(GameObject nodeDes, float timer)
    {
        yield return new WaitForSeconds(timer);
        Destroy(nodeDes);
    }

    private IEnumerator DelayBaoCat(GameObject node, float timer)
    {
        yield return new WaitForSeconds(timer);

        Item item = node.GetComponent<Item>();
        item.nodeHumman.SetActive(false);
        item.GetSkeletonItem().startingAnimation = "Slot 2_Bao Cat_Loop";
        item.GetSkeletonItem().Initialize(true);
        //item.GetSkeletonItem().SetAnimation(0, "Slot 2_Bao Cat_Loop", true);
    }

    private IEnumerator DelayPokemon(GameObject node, float timer)
    {
        yield return new WaitForSeconds(timer);

        Item item = node.GetComponent<Item>();
        item.nodeItem.SetActive(true);
        Debug.Log("DelayPokemon");
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
