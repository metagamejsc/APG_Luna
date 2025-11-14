using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class LunaManager : MonoBehaviour
{
    public Button[] lstBtnInstall;
    public GameObject EndCard;

    //----------------------------------LUNA----------------------------

    public int countPlay = 0;

    [LunaPlaygroundField("CountDrop")] public float countPlayFinal;
    [LunaPlaygroundField("TimeDrop")] public float timeDropFinal;
    //---------------------------------
    [LunaPlaygroundField("ColorBG")] public Color colorBG;
    [LunaPlaygroundAsset("BG")] public Texture2D texture2D;
    public RawImage rawImageBG;
    public GameObject hand;
    public IQFill iQFill;
    [Header("Countdown UI")]
    public Image timeFillImage;
    public TextMeshProUGUI timeText;
    private float currentTime;
    private bool isCounting = false;
    public bool isEndGame = false;

    //---------------------------------

    // [LunaPlaygroundAsset("LogoGame")] public Texture2D logoGame;
    // public RawImage imgRawLogoGame;
    //---------------------------------
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

        currentTime = timeDropFinal;
        isCounting = true;

        countPlayFinal = Mathf.Min(countPlayFinal, 5f);
    }
    void Update()
    {
        if (!isCounting) return;

        currentTime -= Time.deltaTime;

        // Clamp để tránh âm
        currentTime = Mathf.Max(currentTime, 0);

        // Update UI
        if (timeFillImage != null)
        {
            timeFillImage.fillAmount = currentTime / timeDropFinal;
        }

        if (timeText != null)
        {
            timeText.text = Mathf.CeilToInt(currentTime).ToString();
        }

        // Khi hết giờ
        if (currentTime <= 0)
        {
            isCounting = false;
            ShowEndCard();
        }
    }

    public void OnCLickStart()
    {
        if (hand.activeInHierarchy)
        {
            hand.SetActive(false);
        }
    }
    public void SetupField()
    {
        rawImageBG.texture = texture2D;
        rawImageBG.color = colorBG;
        // rawImageTable.texture = textureTable;
        // rawImageTable.color = colorTable;
        // imgRawLogoGame.texture = logoGame;
    }
    public void CountPlay()
    {
        countPlay++;
        // GameController.instance.IQFill.AddValue();
        if (countPlay >= countPlayFinal)
        {
            ShowEndCard();
        }
        iQFill.AddValue();
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
        isEndGame = true;
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



}
