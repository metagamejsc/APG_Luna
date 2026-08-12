using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace Playable
{
    public class GameManager : MonoBehaviour
    {
        public static GameManager Instance;

        [Header("Luna Field")] [LunaPlaygroundField("Total Event For CTA")] [SerializeField]
        private int _totalEvent;

        [LunaPlaygroundField("End Time")] [SerializeField]
        private int _endTime = 30;

        [LunaPlaygroundAsset("Background Music")] [SerializeField]
        private AudioClip _backgroundMusic;

        [LunaPlaygroundAsset("Background Texture")] [SerializeField]
        private Texture2D _backgroundTexture;

        [LunaPlaygroundField("Background Color")] [SerializeField]
        private Color _backgroundColor = Color.white;

        [SerializeField] private Image _progressCount;
        [SerializeField] private TMP_Text _txtCount;
        [SerializeField] private TMP_Text _txtTime;
        [SerializeField] private List<Button> _btnCTA;
        [SerializeField] private GameObject _objEndGame;
        [SerializeField] private Image _background;

        private int _quantityEvent = -1;
        private float _currentTime;

        private void Awake()
        {
            Instance = this;
        }

        private void Start()
        {
            foreach (var t in _btnCTA)
            {
                t.onClick.AddListener(EndGame);
            }

            if (_backgroundTexture) _background.sprite = CreateSprite(_backgroundTexture);
            if (_backgroundMusic) AudioManager.Instance.PlayMusic(_backgroundMusic);
            _background.color = _backgroundColor;
            CountEvent();
            CountdownEndGame();
        }


        public void EndGame()
        {
            Debug.Log("End Game");
            Item.SetAllInteractable(false);
            Target.SetAllInteractable(false);
            _objEndGame.gameObject.SetActive(true);
            Luna.Unity.LifeCycle.GameEnded();
            Luna.Unity.Playable.InstallFullGame();
        }

        public void CountEvent()
        {
            _quantityEvent++;
            _txtCount.text = _quantityEvent + " / " + _totalEvent;
            _progressCount.fillAmount = (float)_quantityEvent / _totalEvent;
            if (_quantityEvent >= _totalEvent)
            {
                EndGame();
            }
        }

        public void CountdownEndGame()
        {
            _currentTime = _endTime;
            UpdateText(_currentTime);

            DOTween.To(() => _currentTime, x => _currentTime = x, 0f, _endTime)
                .SetEase(Ease.Linear)
                .OnUpdate(() => UpdateText(_currentTime))
                .OnComplete(EndGame);
        }

        private void UpdateText(float time)
        {
            _txtTime.text = Mathf.CeilToInt(time).ToString();
        }

        protected Sprite CreateSprite(Texture2D texture)
        {
            return Sprite.Create(
                texture,
                new Rect(0f, 0f, texture.width, texture.height),
                new Vector2(0.5f, 0.5f));
        }
    }
}