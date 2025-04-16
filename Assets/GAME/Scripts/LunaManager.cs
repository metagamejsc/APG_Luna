using UnityEngine;
using UnityEngine.UI;

public class LunaManager : MonoBehaviour
{
    public Button[] lstBtnInstall;
    public GameObject EndCard;

    //----------------------------------LUNA----------------------------
    [Space(10)]
    [Header("__________________________________")]
    [Space(10)]
    public int countPlay = 0;

    [LunaPlaygroundField("CountDrop")]
    public float countPlayFinal;
    [LunaPlaygroundField("TimeDrop")]
    public float timeDropFinal;
    [Space(10)]
    [Header("__________________________________")]
    [Space(10)]
    [LunaPlaygroundField("BG")] public Texture2D bgSprite;
    public RawImage imgBG;
    [LunaPlaygroundField("ColorBG")] public Color colorBG;
    [Space(10)]
    [Header("__________________________________")]

    // [LunaPlaygroundAsset("LogoGame")] public Texture2D logoGame;
    // public RawImage imgRawLogoGame;
    // [Space(10)]
    // [Header("__________________________________")]
    //----------------------------------LUNA----------------------------
    public static LunaManager ins;
    private void Awake()
    {
        ins = this;
    }


    // Start is called before the first frame update
    void Start()
    {
        Luna.Unity.LifeCycle.OnPause += PauseGameplay;
        Luna.Unity.LifeCycle.OnResume += ResumeGameplay;
        foreach (var VARIABLE in lstBtnInstall)
        {
            VARIABLE.onClick.AddListener(OnClickEndCard);
        }
        EndCard.SetActive(false);
        SetupField();
        Invoke(nameof(ShowEndCard), timeDropFinal);
    }
    public void CountPlay()
    {
        countPlay++;
        GameController.instance.IQFill.AddValue();
        if (countPlay >= countPlayFinal)
        {
            ShowEndCard();
        }
    }

    // Update is called once per frame
    public void PauseGameplay()
    {
        Debug.Log("Pause game");
        Time.timeScale = 0;
    }

    public void ResumeGameplay()
    {
        Debug.Log("Load game");
        Time.timeScale = 1;
    }

    public void ShowEndCard()
    {
        //AudioManager.ins.PlaySoundReward();
        EndCard.SetActive(true);
        Debug.Log("Show end card");
        Luna.Unity.LifeCycle.GameEnded();
    }

    public void OnClickEndCard()
    {
        Debug.Log("Click end card");
        Luna.Unity.Playable.InstallFullGame();
    }

    public void SetupField()
    {
        imgBG.texture = bgSprite;
        imgBG.color = colorBG;
        //imgRawLogoGame.texture = logoGame;
    }

}
