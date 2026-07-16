using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class GameController : MonoBehaviour
{
    [SerializeField] private List<ClockItem> _clockItems = new List<ClockItem>();
    [SerializeField] private List<ClockDropTarget> _dropTargets = new List<ClockDropTarget>();
    [Header("Tutorial Hand")]
    [SerializeField] private Transform _tutorialHand;
    [SerializeField] private Transform _tutorialFrom;
    [SerializeField] private Transform _tutorialTo;
    [SerializeField] private float _tutorialMoveDuration = 0.6f;
    [SerializeField] private float _tutorialStartDelay = 0.2f;
    [SerializeField] private bool _hideTutorialOnFirstSuccess = true;

    public IReadOnlyList<ClockDropTarget> DropTargets => _dropTargets;
    private Tween _tutorialTween;

    private void Awake()
    {
        for (int i = 0; i < _clockItems.Count; i++)
        {
            ClockItem item = _clockItems[i];
            if (item != null)
            {
                item.Initialize(this);
            }
        }
    }

    private void Start()
    {
        PlayTutorialHand();
    }

    private void OnDestroy()
    {
        _tutorialTween?.Kill();
    }

    public bool TryDropClock(ClockItem item, ClockDropTarget target)
    {
        if (item == null || target == null)
        {
            return false;
        }

        if (!_dropTargets.Contains(target))
        {
            return false;
        }

        bool accepted = target.TryAccept(item);
        if (accepted && _hideTutorialOnFirstSuccess)
        {
            StopTutorialHand();
        }

        return accepted;
    }

    private void PlayTutorialHand()
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

    private void StopTutorialHand()
    {
        _tutorialTween?.Kill();
        _tutorialTween = null;

        if (_tutorialHand != null)
        {
            _tutorialHand.gameObject.SetActive(false);
        }
    }
}
