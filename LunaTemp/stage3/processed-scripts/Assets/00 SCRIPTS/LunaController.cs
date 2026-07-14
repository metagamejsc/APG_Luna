using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Limit Time Play?")] public bool LimitTimePlay;
    [LunaPlaygroundAsset("Logo (512x224)")] public Texture2D LogoTexture;
    [LunaPlaygroundField("BG 1 Color")] public Color BG1Color;
    [LunaPlaygroundField("BG 2 Color")] public Color BG2Color;

    [SerializeField] private RawImage logoImage;
    [SerializeField] private Image BG1;
    [SerializeField] private Image BG2;


    [SerializeField] private Button endCard;
    private void Awake()
    {
        Init();
    }
    private void Start()
    {
        endCard.onClick.AddListener(ClickCTA);
        StartCoroutine(EndGame());
    }
    private void Init()
    {
        BG1.color = BG1Color;
        BG2.color = BG2Color;

        logoImage.texture = LogoTexture;
    }
    private void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
    private IEnumerator EndGame()
    {
        yield return new WaitForSeconds(TimePlay);
        Luna.Unity.LifeCycle.GameEnded();
        if (LimitTimePlay) ClickCTA();
    }
}
