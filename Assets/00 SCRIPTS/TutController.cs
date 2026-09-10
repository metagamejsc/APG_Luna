using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class TutController : MonoBehaviour
{
    [SerializeField] private GameObject icon;
    [SerializeField] private Image tutObject;
    [SerializeField] private Vector3 toPos;
    [SerializeField] private float timeMove;
    [SerializeField] private float timeDelay;
    private Sequence sequence;
    void Start()
    {
        sequence = DOTween.Sequence();
        sequence.AppendCallback(() =>
                {
                    Color c = tutObject.color;
                    c.a = 1;
                    tutObject.color = c;
                    icon.SetActive(false);
                })
                .Append(transform.DOScale(0.8f, 0.5f))
                .AppendCallback(() =>
                {
                    Color c = tutObject.color;
                    c.a = 0;
                    tutObject.color = c;
                    icon.SetActive(true);
                })
                .Append(transform.DOLocalMove(toPos, timeMove))
                .AppendInterval(timeDelay)
                .SetLoops(-1, LoopType.Restart);
    }
    public void StopTut()
    {
        Color c = tutObject.color;
        c.a = 1;
        tutObject.color = c;
        sequence.Kill();
        Destroy(gameObject);
    }
}
