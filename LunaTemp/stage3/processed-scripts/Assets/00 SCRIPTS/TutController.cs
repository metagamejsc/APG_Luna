using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class TutController : MonoBehaviour
{
    [SerializeField] private List<SItem> items;
    [SerializeField] private float moveTime;
    [SerializeField] private float scaleTime;
    [SerializeField] private AudioClip popSound;
    private Sequence sequence;
    void Start()
    {
        sequence = DOTween.Sequence();
        for (int i = 0; i < items.Count - 1; i++)
        {
            int index = i;
            sequence.Append(transform.DOLocalMove(items[index + 1].Position, moveTime))
                    .AppendCallback(() =>
                    {
                        if (!items[index + 1].Item) return;
                        items[index + 1].Item.DOScale(1.2f, scaleTime);
                    })
                    .AppendInterval(0.5f)
                    .AppendCallback(() =>
                    {
                        if (!items[index + 1].Item) return;
                        items[index + 1].Item.DOScale(1f, scaleTime);
                    });
        }
        sequence.AppendInterval(0.5f)
                .Append(transform.DOLocalMove(items[0].Position, moveTime))
                    .AppendCallback(() =>
                    {
                        if (!items[0].Item) return;
                        items[0].Item.DOScale(1.2f, scaleTime);
                    })
                    .AppendInterval(0.5f)
                    .AppendCallback(() =>
                    {
                        if (!items[0].Item) return;
                        items[0].Item.DOScale(1f, scaleTime);
                    });
        sequence.SetLoops(-1, LoopType.Restart);
    }

}
[System.Serializable]
public struct SItem
{
    public Vector3 Position;
    public RectTransform Item;
}
