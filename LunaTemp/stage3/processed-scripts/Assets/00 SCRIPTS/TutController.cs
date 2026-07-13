using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class TutController : MonoBehaviour
{
    [SerializeField] private RectTransform rt;
    [SerializeField] private List<Option> options;
    [SerializeField] private float moveTime;
    [SerializeField] private float fromScale;
    [SerializeField] private float toScale;
    [SerializeField] private float scaleTime;

    private Sequence sequence;
    private void Start()
    {
        sequence = DOTween.Sequence();
        for (int i = 0; i < options.Count - 1; i++)
        {
            sequence.Append(rt.DOScale(toScale, scaleTime))
                    .Join(options[i].Demo.DOScale(1.1f, scaleTime))
                    .Append(rt.DOScale(fromScale, scaleTime))
                    .Join(options[i].Demo.DOScale(1f, scaleTime))
                    .Append(rt.DOLocalMove(options[i + 1].Position, moveTime));
        }
        sequence.Append(rt.DOScale(toScale, scaleTime))
                   .Join(options[options.Count - 1].Demo.DOScale(1.1f, scaleTime))
                   .Append(rt.DOScale(fromScale, scaleTime))
                   .Join(options[options.Count - 1].Demo.DOScale(1f, scaleTime))
                   .Append(rt.DOLocalMove(options[0].Position, moveTime));

        sequence.SetLoops(-1, LoopType.Restart);
    }
}
[System.Serializable]
public struct Option
{
    public Vector3 Position;
    public RectTransform Demo;
}
