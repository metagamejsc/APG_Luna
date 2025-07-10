using UnityEngine;
using UnityEngine.UI;

public class DropZone : MonoBehaviour
{
    // public GameObject[] steps;
    //public bool isActive = false;
    //public Sprite spriteUpgrade;
    //private int currentStep = 0;
    // public GameObject humman;
    public GameObject[] dancingGOs;
    public GameObject[] sitGOs;
    public GameObject[] charmPrefabs;
    public RectTransform tranDancing;
    private Collider2D collider2d;
    int currentGirl = -1;

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
        LunaManager.ins.OnCLickStart();

        currentGirl++;
        dancingGOs[currentGirl].SetActive(false);
        sitGOs[currentGirl].SetActive(true);
        GameObject v = Instantiate(charmPrefabs[id], charmPrefabs[id].transform.position, Quaternion.identity, sitGOs[currentGirl].transform);
        v.transform.localPosition = Vector3.zero;
        // Move tranDancing down by 50 units using anchoredPosition
        Vector2 newPosition = tranDancing.anchoredPosition;
        newPosition.y -= 50f;
        tranDancing.anchoredPosition = newPosition;

        // if (humman != null)
        // {
        //     humman.transform.SetParent(v.transform, true);

        //     // Optionally reset local position if needed
        //     humman.transform.localPosition = Vector3.zero;
        // }

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
