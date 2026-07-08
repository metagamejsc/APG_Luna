using DG.Tweening;
using UnityEngine;

public class TweenController : MonoBehaviour
{
    [SerializeField] private float startScale;
    [SerializeField] private float endScale;
    [SerializeField] private float time;
    private void OnEnable()
    {
        transform.localScale = Vector3.one * startScale;
        transform.DOScale(endScale, time).SetEase(Ease.OutExpo);
    }

}
