using System;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class GameController : MonoBehaviour
{
    public static GameController Instance { get; private set; }

    [Header("Tutorial Hand")] [SerializeField]
    private Transform _tutorialHand;

    [SerializeField] private Transform _tutorialInPlace;
    [SerializeField] private Transform _tutorialFrom;
    [SerializeField] private Transform _tutorialTo;
    [SerializeField] private float _tutorialScaleDuration = 0.4f;
    [SerializeField] private float _tutorialMoveDuration = 0.6f;
    [SerializeField] private float _tutorialStartDelay = 0.2f;

    private Tween _tutorialTween;
    private bool _isCompleteTut;

    private void Awake()
    {
        Instance = this;
    }

    private void Start()
    {
        PlayInPlace();
    }


    private void OnDestroy()
    {
        _tutorialTween?.Kill();
    }

    private void PlayInPlace()
    {
        _tutorialHand.gameObject.SetActive(true);
        _tutorialHand.position = _tutorialInPlace.position;
    }

    public void PlayTutorialHand()
    {
        if (_tutorialHand == null || _tutorialFrom == null || _tutorialTo == null)
        {
            return;
        }

        _tutorialTween?.Kill();
        _tutorialHand.gameObject.SetActive(true);
        _tutorialHand.position = _tutorialFrom.position;

        _tutorialTween = _tutorialHand
            .DOMove(_tutorialTo.position, _tutorialMoveDuration)
            .SetDelay(_tutorialStartDelay)
            .SetEase(Ease.InOutSine)
            .SetLoops(-1, LoopType.Restart);
    }

    public void StopTutorialHand()
    {
        if (_isCompleteTut) return;
        _isCompleteTut = true;
        _tutorialTween?.Kill();
        _tutorialTween = null;

        if (_tutorialHand != null)
        {
            _tutorialHand.gameObject.SetActive(false);
        }
    }
}