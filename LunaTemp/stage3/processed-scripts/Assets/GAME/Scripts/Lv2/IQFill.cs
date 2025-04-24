using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class IQFill : MonoBehaviour
{
    [Header("References")]
    [SerializeField] private Image fillImage;

    [Header("Fill Settings")]
    [SerializeField] private float maxFillAmount = 1f;
    [SerializeField] private float fillDuration = 0.5f;
    [SerializeField] private float maxValue = 100f;
    [SerializeField] private float addValue = 10;
    [SerializeField] private Ease fillEase = Ease.InOutQuad;

    private float currentValue = 0f;
    private float currentFill = 0f;
    private Tween fillTween;

    private void Start()
    {
        InitializeFill();
    }

    private void InitializeFill()
    {
        if (fillImage != null)
        {
            fillImage.type = Image.Type.Filled;
            fillImage.fillAmount = currentFill;
        }
    }

    public void UpdateFillAmount(float amount)
    {
        if (fillImage == null || maxValue <= 0) return;

        fillTween?.Kill();

        // Convert input amount to fill percentage
        float fillIncrement = amount / maxValue;
        float targetFill = Mathf.Clamp(currentFill + fillIncrement, 0f, maxFillAmount);

        fillTween = DOTween.To(
            () => currentFill,
            (value) =>
            {
                currentFill = value;
                fillImage.fillAmount = value;
            },
            targetFill,
            fillDuration
        ).SetEase(fillEase);
    }

    public void AddValue()
    {
        if (fillImage == null || maxValue <= 0) return;

        fillTween?.Kill();

        // Add to current value and calculate new fill amount
        currentValue = Mathf.Clamp(currentValue + addValue, 0, maxValue);
        float targetFill = (currentValue / maxValue) * maxFillAmount;

        fillTween = DOTween.To(
            () => currentFill,
            (value) =>
            {
                currentFill = value;
                fillImage.fillAmount = value;
            },
            targetFill,
            fillDuration
        ).SetEase(fillEase);
    }

    public void ResetFill()
    {
        fillTween?.Kill();
        currentValue = 0f;
        currentFill = 0f;
        fillImage.fillAmount = 0f;
    }

    private void OnDestroy()
    {
        fillTween?.Kill();
    }
}
