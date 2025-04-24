using UnityEngine;
using UnityEngine.UI;

public class DropZone : MonoBehaviour
{
    // public GameObject[] steps;
    //public bool isActive = false;
    //public Sprite spriteUpgrade;
    //private int currentStep = 0;
    public GameObject humman;
    public GameObject[] stairPrefabs;
    public Transform tranHoder;
    private Collider2D collider2d;

    void Awake()
    {
        collider2d = GetComponent<Collider2D>();
        collider2d.enabled = true;
        //currentStep = 0;
        NextStep();
    }
    public void DragOn(int id)
    {
        LunaManager.ins.CountPlay();

        GameObject v = Instantiate(stairPrefabs[id], tranHoder.position, Quaternion.identity, tranHoder);
        if (humman != null)
        {
            humman.transform.SetParent(v.transform, true);

            // Optionally reset local position if needed
            humman.transform.localPosition = Vector3.zero;
        }

        //currentStep++;
        //NextStep();
        //CheckDone();
        //Upgrade();

    }
    void Upgrade()
    {
        // if (!isActive) return;
        //isActive = false;
        //GameController.instance.EnableUpgrade(gameObject.name);
    }
    void NextStep()
    {
        // foreach (var step in steps)
        // {
        //     step.SetActive(false);
        // }
        // steps[currentStep].SetActive(true);
    }
    void CheckDone()
    {
        // if (currentStep == steps.Length - 1)
        // {
        //     collider2d.enabled = false;
        // }
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
        // print($"EventUpgrade called on {gameObject.name}");
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
