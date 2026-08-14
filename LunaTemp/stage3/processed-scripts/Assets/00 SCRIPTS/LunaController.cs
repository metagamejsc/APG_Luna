using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Count Play")] public int CountPlay;
    [LunaPlaygroundField("BG Color")] public Color BGColor;
    [LunaPlaygroundField("Game BG Color")] public Color GameBGColor;
    [LunaPlaygroundField("Level Text Color")] public Color LevelTextColor;
    [LunaPlaygroundField("Header Text Color")] public Color TitleTextColor;
    [LunaPlaygroundField("Sub BG Color")] public Color SubBGColor;

    [SerializeField] private Text time;
    [SerializeField] private Image BGImage;
    [SerializeField] private Image GameBGImage;
    [SerializeField] private Text levelText;
    [SerializeField] private Text titleText;
    [SerializeField] private Image subBG;

    [SerializeField] private Transform endCard;
    [SerializeField] private List<Button> CTA;

    [SerializeField] private int count;
    private void UpdateCount()
    {
        count++;
        if (count >= CountPlay) ShowEndCard();
    }
    void Awake()
    {
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        endCard.gameObject.SetActive(false);

        BGImage.color = BGColor;
        GameBGImage.color = GameBGColor;
        levelText.color = LevelTextColor;
        titleText.color = TitleTextColor;
        subBG.color = SubBGColor;
    }
    void Start()
    {
        GameController.Ins.CompleteStep += UpdateCount;
        StartCoroutine(EndGame());
    }

    private IEnumerator EndGame()
    {
        float count = TimePlay;
        int round = (int)TimePlay;
        time.text = round.ToString();
        while (count > 0)
        {
            count -= Time.unscaledDeltaTime;
            if (count < round)
            {
                time.text = round.ToString();
                round--;
            }
            yield return null;
        }
        time.text = "0";
        GameController.Ins.EndGame();
        ShowEndCard();
        Luna.Unity.LifeCycle.GameEnded();
    }
    public void ShowEndCard()
    {
        endCard.gameObject.SetActive(true);
    }
    private void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
