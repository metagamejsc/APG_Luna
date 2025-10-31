using UnityEngine;

public class GameController : MonoBehaviour
{
    public static event System.Action OnUpgradePhase2;
    public Transform posTele;
    public DropZone GhostSmoke;


    public static GameController instance;
    void Awake()
    {
        instance = this;
    }
    void Start()
    {
        InitFirst();
    }

    void InitFirst()
    {

    }



}