using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class TutController : MonoBehaviour
{
    [SerializeField] private GameObject icon;
    [SerializeField] private List<GameObject> tutObjects;
    [SerializeField] private GameObject tutObject;
    [SerializeField] private Vector3 toPos;
    [SerializeField] private float timeMove;
    [SerializeField] private float timeDelay;
    private Sequence sequence;
    private void Start()
    {
        for (int i = 0; i < tutObjects.Count; i++)
        {
            if (!tutObjects[i]) continue;
            tutObject = tutObjects[i];
            break;

        }
        sequence = DOTween.Sequence();
        sequence.AppendCallback(() =>
                {
                    tutObject.SetActive(true);
                    icon.SetActive(false);
                })
                .Append(transform.DOScale(0.8f, 0.5f))
                .AppendCallback(() =>
                {
                    tutObject.SetActive(false);
                    icon.SetActive(true);
                })
                .Append(transform.DOLocalMove(toPos, timeMove))
                .AppendInterval(timeDelay)
                .SetLoops(-1, LoopType.Restart);
    }
    private void OnDestroy()
    {
        StopTut();
    }
    private void StopTut()
    {
        tutObject.SetActive(true);
        sequence.Kill();
    }
}
