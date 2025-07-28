using UnityEngine;

public class GameController : MonoBehaviour
{
    //public int numStep = 0;
    //public Collider2D[] colliders;
    //public bool isUpgrade = false;
    public static event System.Action OnUpgradePhase2;
    //public IQFill IQFill;



    public static GameController instance;
    void Awake()
    {
        instance = this;
    }
    void Start()
    {
        InitFirst();
    }
    // public void CheckStep()
    // {
    //     numStep++;
    // }

    void InitFirst()
    {
        // foreach (var collider in colliders)
        // {
        //     collider.enabled = false;
        // }
    }

    // public void EnableUpgrade(string name)
    // {
    //     if (name == "Mom")
    //     {
    //         if (isUpgrade) return;
    //         isUpgrade = true;
    //         foreach (var collider in colliders)
    //         {
    //             collider.enabled = true;
    //         }
    //     }
    //     else if (name == "House")
    //     {

    //         OnUpgradePhase2?.Invoke();
    //     }

}// 