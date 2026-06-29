using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;

public class UILevel19 : MonoBehaviour
{
    [Header("Progress")]
    [SerializeField] private Image _progressFill;
    [SerializeField] private TextMeshProUGUI _progressText;
    [SerializeField] private int _maxProgress = 8;
    [SerializeField] private float _progressTweenDuration = 0.2f;

    [Header("Timer")]
    [SerializeField] private Image _timerFill;
    [SerializeField] private float _timeDuration = 30f;
    [SerializeField] private UnityEvent _onTimeUp;

    private int _currentProgress;
    private Tween _progressTween;
    private Tween _timerTween;

    private void Start()
    {
        ResetUI();
        StartTimer();
    }

    private void OnDisable()
    {
        _progressTween?.Kill();
        _timerTween?.Kill();
    }

    public void Init(int maxProgress, float timeDuration)
    {
        _maxProgress = Mathf.Max(1, maxProgress);
        _timeDuration = Mathf.Max(0f, timeDuration);
        ResetUI();
        StartTimer();
    }

    public void ResetUI()
    {
        _progressTween?.Kill();
        _timerTween?.Kill();

        _currentProgress = 0;

        if (_progressFill != null)
        {
            _progressFill.fillAmount = 0f;
        }

        if (_timerFill != null)
        {
            _timerFill.fillAmount = 1f;
        }

        UpdateProgressText();
    }

    public void AddProgress(int amount = 1)
    {
        if (_maxProgress <= 0)
        {
            return;
        }

        _currentProgress = Mathf.Clamp(_currentProgress + amount, 0, _maxProgress);
        UpdateProgressText();

        if (_progressFill == null)
        {
            return;
        }

        float targetFill = (float)_currentProgress / _maxProgress;
        _progressTween?.Kill();
        _progressTween = _progressFill
            .DOFillAmount(targetFill, _progressTweenDuration)
            .SetEase(Ease.OutQuad);
    }

    public void StartTimer()
    {
        if (_timerFill == null)
        {
            return;
        }

        _timerTween?.Kill();
        _timerFill.fillAmount = 1f;

        if (_timeDuration <= 0f)
        {
            _timerFill.fillAmount = 0f;
            _onTimeUp?.Invoke();
            return;
        }

        _timerTween = _timerFill
            .DOFillAmount(0f, _timeDuration)
            .SetEase(Ease.Linear)
            .OnComplete(() => _onTimeUp?.Invoke());
    }

    public void StopTimer()
    {
        _timerTween?.Kill();
    }

    public int GetCurrentProgress()
    {
        return _currentProgress;
    }

    private void UpdateProgressText()
    {
        if (_progressText == null)
        {
            return;
        }

        _progressText.text = _currentProgress + "/" + _maxProgress;
    }
}
