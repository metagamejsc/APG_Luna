using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class LunaManager : MonoBehaviour
{
    public Button[] lstBtnInstall;
    public GameObject StartCard;
    public GameObject EndCard;
    public Transform Parent;
    public GameObject LoseTitle;
    public GameObject[] tutorial;
    //public float timeDrag = 4;
    public bool isDrag = true;
    [Header("Progess")]
    [SerializeField] private TextMeshProUGUI textProgess;
    [SerializeField] private Image imgProgess;

    //----------------------------------LUNA----------------------------

    public int countPlay = 0;

    [LunaPlaygroundField("CountDrop")] public float countPlayFinal;
    public int countPlayMax = 10;
    [LunaPlaygroundField("TimeDrop")] public float timeDropFinal;
    //---------------------------------
    [LunaPlaygroundField("ColorBG")] public Color colorBG;
    [LunaPlaygroundAsset("BG")] public Texture2D texture2D;
    public RawImage rawImageBG;

    //---------------------------------    
    [SerializeField] private TextMeshProUGUI timeText;
    private float currentTime;
    private bool isRunning = true;
    //----------------------------------OTHER----------------------------

    //----------------------------------LUNA----------------------------
    public static LunaManager ins;
    private void Awake()
    {
        ins = this;
    }


    // Start is called before the first frame update
    void Start()
    {
        Init();
        SetupField();
        Invoke(nameof(ShowEndCard), timeDropFinal);
        //countPlayFinal = Mathf.Min(countPlayFinal, 5f);
        UpdateProgress();
    }
    void Update()
    {
        if (!isRunning) return;

        currentTime -= Time.deltaTime;

        if (currentTime <= 0f)
        {
            currentTime = 0f;
            isRunning = false;

            // Khi hết giờ: đổi sang text khác
            timeText.text = "0";
        }
        else
        {
            int timeInt = Mathf.CeilToInt(currentTime);
            timeText.text = timeInt.ToString();
        }
    }
    void Init()
    {
        Luna.Unity.LifeCycle.OnPause += PauseGameplay;
        Luna.Unity.LifeCycle.OnResume += ResumeGameplay;
        foreach (var VARIABLE in lstBtnInstall)
        {
            VARIABLE.onClick.AddListener(OnClickEndCard);
        }
        EndCard.SetActive(false);
        currentTime = timeDropFinal;
        LoseTitle.SetActive(false);
        isDrag = true;
    }
    // public void TurnOffHand()
    // {
    //     if (hand.activeInHierarchy)
    //     {
    //         hand.SetActive(false);
    //     }

    // }
    public void CheckTutorial()
    {
        if (countPlay == 1)
        {
            tutorial[0].SetActive(false);
            tutorial[1].SetActive(true);
        }
        else
        {
            OffStartCard();
        }


    }
    public void ShowLoseTitle()
    {
        if (!LoseTitle.activeInHierarchy)
        {
            LoseTitle.SetActive(true);
        }

    }
    public void OffStartCard()
    {
        if (StartCard.activeInHierarchy)
        {
            StartCard.SetActive(false);
            foreach (var i in tutorial)
            {
                i.SetActive(false);
            }
        }

    }
    public void SetupField()
    {
        rawImageBG.texture = texture2D;
        rawImageBG.color = colorBG;
    }
    public void CountPlay()
    {
        countPlay++;
        UpdateProgress();
        if (countPlay >= countPlayFinal)
        {
            ShowEndCard();
        }
    }
    void UpdateProgress()
    {
        float value = (float)countPlay / (float)countPlayMax;
        imgProgess.fillAmount = value;
        textProgess.text = countPlay + "/" + countPlayMax;
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
    //---------------------------------OTHER----------------------------
    public void SetIsDrag(bool value)
    {
        isDrag = value;
    }
    public void DelaySetDrag()
    {
        StartCoroutine(SetIsDragTrue());
    }
    IEnumerator SetIsDragTrue()
    {
        yield return new WaitForSeconds(4f);
        isDrag = true;
    }

}
