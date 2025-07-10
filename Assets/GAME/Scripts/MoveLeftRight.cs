using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class MoveLeftRight : MonoBehaviour
{
    [Header("Movement Settings")]
    [SerializeField] private float moveDistance = 2f;
    [SerializeField] private float moveDuration = 1f;
    [SerializeField] private float delay = 0.5f;
    [SerializeField] private Ease easeType = Ease.Linear;

    private void Start()
    {
        StartMoving();
    }

    private void StartMoving()
    {
        // Get initial position
        Vector3 startPos = transform.position;
        Vector3 endPos = startPos + Vector3.right * moveDistance;

        // Create sequence for move right then left
        Sequence moveSequence = DOTween.Sequence();

        // Add initial delay of 0.1s
        moveSequence.AppendInterval(delay);

        moveSequence.Append(transform.DOMoveX(endPos.x, moveDuration)
            .SetEase(easeType));

        moveSequence.Append(transform.DOMoveX(startPos.x, moveDuration)
            .SetEase(easeType));

        // Loop the sequence
        moveSequence.SetLoops(-1);
    }

    private void OnDestroy()
    {
        // Clean up tweens when object is destroyed
        DOTween.Kill(transform);
    }
}
