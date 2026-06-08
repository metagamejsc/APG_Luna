using System.Collections;
using System.Collections.Generic;
using Spine;
using Spine.Unity;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class LunaManager : MonoBehaviour
{
    public Button[] lstBtnInstall;
    public GameObject WinGO;
    public GameObject LoseGO;
    public GameObject StartCard;
    public GameObject EndCard;
    public GameObject WinCard;

    [Header("Ending Skeletons")]
    public SkeletonGraphic ske1;
    public SkeletonGraphic ske2;

    [Header("Win Anims")]
    [SpineAnimation("","ske1")]public List<string> ske1Anims = new List<string>();
    [SpineAnimation("","ske2")]public List<string> ske2Anims = new List<string>();

    [Header("Lose Anims")]
    [SpineAnimation("","ske1")]public List<string> ske1LoseAnims = new List<string>();
    [SpineAnimation("","ske2")]public List<string> ske2LoseAnims = new List<string>();

    [Header("Ending Sounds")]
    [Tooltip("AudioSource dùng để phát sound cho từng animation")]
    public AudioSource endingAudioSource;
    [Tooltip("Sound tương ứng từng anim trong ske1Anims (Win)")]
    public List<AudioClip> ske1Sounds = new List<AudioClip>();
    [Tooltip("UI text bật lên ngay khi sound cuối trong ske1Sounds được phát")]
    public RectTransform ske1LastSoundUIText;
    [Tooltip("Sound tương ứng từng anim trong ske2Anims (Win)")]
    public List<AudioClip> ske2Sounds = new List<AudioClip>();
    [Tooltip("Sound tương ứng từng anim trong ske1LoseAnims (Lose)")]
    public List<AudioClip> ske1LoseSounds = new List<AudioClip>();
    [Tooltip("Sound tương ứng từng anim trong ske2LoseAnims (Lose)")]
    public List<AudioClip> ske2LoseSounds = new List<AudioClip>();

    [Tooltip("Thời gian chờ (giây) sau khi 2 skeleton tương tác xong mới hiện card")]
    public float cardDelay = 0f;
    private bool endingStarted = false;
    //public GameObject hand;
    [Header("Progess")]
    [SerializeField] private TextMeshProUGUI textProgess;
    [SerializeField] private Image imgProgess;
    public GameObject Parent;
    public bool isDrag = false;
    public float timeDrag = 1f;

    //public int processBuildRope = 0;
    public MixSkeletonSkin skeGhost;


    //----------------------------------LUNA----------------------------

    public int countPlay = 0;

    [LunaPlaygroundField("CountDrop")] public float countPlayFinal;
    public int countPlayMax = 10;
    [LunaPlaygroundField("TimeDrop")] public float timeDropFinal;
    //---------------------------------
    [LunaPlaygroundField("ColorBG")] public Color colorBG;
    [LunaPlaygroundAsset("BG")] public Texture2D texture2D;
    [LunaPlaygroundAsset("Music")] public AudioClip music;
    [LunaPlaygroundField("Music volum")] public float volumeMusic;
    public AudioSource musicSource;
    public RawImage rawImageBG;

    //---------------------------------    
    [SerializeField] private TextMeshProUGUI timeText;
    private float currentTime;
    private bool isRunning = true;
    //----------------------------------OTHER----------------------------
    //public bool isHead = false;
    // public MixSkeletonSkin MSSGroom;
    // public MixSkeletonSkin MSSBride;

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
        Invoke(nameof(OnTimeUp), timeDropFinal);
        //countPlayFinal = Mathf.Min(countPlayFinal, 5f);
        UpdateProgress();
        musicSource.clip = music;
        musicSource.volume = volumeMusic;
        musicSource.Play();
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
        if (ske1LastSoundUIText != null)
            ske1LastSoundUIText.gameObject.SetActive(false);
        currentTime = timeDropFinal;
        SetIsDrag(true);

        // 2 skeleton ending chỉ chạy anim ở cuối game. Cho chúng vẽ 1 frame đầu (tư thế tĩnh)
        // rồi "ngủ" để bỏ chi phí UpdateMesh() trong LateUpdate suốt gameplay (giảm tải CPU cho Luna).
        StartCoroutine(SleepEndingSkeletons());
    }

    // Chờ 1 frame để skeleton build mesh tư thế đầu rồi tắt update -> vẫn thấy hình, hết tốn CPU mỗi frame.
    IEnumerator SleepEndingSkeletons()
    {
        yield return null;
        //if (ske1 != null) ske1.UpdateMode = UpdateMode.Nothing;
        //if (ske2 != null) ske2.UpdateMode = UpdateMode.Nothing;
    }
    // public void TurnOffHand()
    // {
    //     if (hand.activeInHierarchy)
    //     {
    //         hand.SetActive(false);
    //     }

    // }
    public void OffStartCard()
    {
        if (StartCard.activeInHierarchy)
        {
            StartCard.SetActive(false);
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
            StartEnding(true);
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

    // Hết giờ -> chạy chuỗi tương tác rồi hiện EndCard
    void OnTimeUp()
    {
        StartEnding(false);
    }

    /// <summary>
    /// ske1 chạy lần lượt list anim (loop anim cuối) -> ske2 chạy lần lượt list anim (loop anim cuối)
    /// -> hiện WinCard (isWin) hoặc EndCard (hết giờ).
    /// Win/Lose dùng list anim & sound riêng.
    /// </summary>
    public void StartEnding(bool isWin)
    {
        if (endingStarted) return;
        endingStarted = true;

        isRunning = false;
        CancelInvoke(nameof(OnTimeUp));
        SetIsDrag(false);

        // Chọn list anim & sound theo trạng thái win/lose
        List<string> anims1 = isWin ? ske1Anims : ske1LoseAnims;
        List<string> anims2 = isWin ? ske2Anims : ske2LoseAnims;
        List<AudioClip> sounds1 = isWin ? ske1Sounds : ske1LoseSounds;
        List<AudioClip> sounds2 = isWin ? ske2Sounds : ske2LoseSounds;

        PlaySequence(ske1, anims1, sounds1, 0, () =>
            PlaySequence(ske2, anims2, sounds2, 0, () =>
            {
                if (cardDelay > 0f)
                    StartCoroutine(ShowCardDelayed(isWin));
                else
                    ShowCard(isWin);
            }));
    }

    // Phát lần lượt các anim trong list; anim cuối loop, sau đó gọi onReachedLast.
    // Mỗi anim phát kèm sound tương ứng cùng index (nếu có).
    void PlaySequence(SkeletonGraphic ske, List<string> anims, List<AudioClip> sounds, int index, System.Action onReachedLast)
    {
        if (ske == null || ske.AnimationState == null
            || anims == null || anims.Count == 0 || index >= anims.Count)
        {
            onReachedLast?.Invoke();
            return;
        }

        // Bật lại full update ngay khi skeleton này bắt đầu chạy anim
        ske.UpdateMode = UpdateMode.FullUpdate;

        string animName = anims[index];
        bool isLast = index == anims.Count - 1;

        // Bỏ qua anim rỗng / không tồn tại
        if (string.IsNullOrEmpty(animName) || ske.Skeleton.Data.FindAnimation(animName) == null)
        {
            if (isLast) onReachedLast?.Invoke();
            else PlaySequence(ske, anims, sounds, index + 1, onReachedLast);
            return;
        }

        var state = ske.AnimationState;

        // Phát sound tương ứng anim hiện tại
        bool soundPlayed = PlaySound(sounds, index);
        if (soundPlayed && sounds == ske1Sounds && index == ske1Sounds.Count - 1)
            ShowSke1LastSoundUIText();

        if (isLast)
        {
            state.SetAnimation(0, animName, true); // loop anim cuối
            onReachedLast?.Invoke();
            return;
        }

        var entry = state.SetAnimation(0, animName, false);
        Spine.AnimationState.TrackEntryDelegate handler = null;
        handler = e =>
        {
            e.Complete -= handler;
            PlaySequence(ske, anims, sounds, index + 1, onReachedLast);
        };
        entry.Complete += handler;
    }

    // Phát AudioClip tại index tương ứng anim đang chạy (nếu có).
    bool PlaySound(List<AudioClip> sounds, int index)
    {
        if (endingAudioSource == null || sounds == null || index < 0 || index >= sounds.Count)
            return false;

        AudioClip clip = sounds[index];
        if (clip != null)
        {
            endingAudioSource.PlayOneShot(clip);
            return true;
        }

        return false;
    }

    void ShowSke1LastSoundUIText()
    {
        if (ske1LastSoundUIText != null)
            ske1LastSoundUIText.gameObject.SetActive(true);
    }

    IEnumerator ShowCardDelayed(bool isWin)
    {
        yield return new WaitForSeconds(cardDelay);
        ShowCard(isWin);
    }

    void ShowCard(bool isWin)
    {
        if (isWin) ShowWinCard();
        else ShowEndCard();
    }

    public void ShowWinCard()
    {
        if (WinCard != null)
            WinCard.SetActive(true);
        Debug.Log("Show win card");
        Luna.Unity.LifeCycle.GameEnded();
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
        yield return new WaitForSeconds(timeDrag);
        isDrag = true;
    }
    ////////////////////////////

    // public void DropCamera()
    // {
    //     MSSBride.RemoveSkinName("khanchumdau");
    //     MSSBride.MixAndApplySkins();
    // }
    // public void MoveCandy()
    // {
    //     MSSGroom.RemoveSkinName("candy");
    //     MSSGroom.MixAndApplySkins();
    // }
    // public void MoveShoes()
    // {
    //     MSSBride.AddSkin("shoe");
    //     MSSBride.MixAndApplySkins();
    // }
}
