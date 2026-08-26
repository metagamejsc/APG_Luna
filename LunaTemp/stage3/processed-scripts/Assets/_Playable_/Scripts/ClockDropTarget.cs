using Playable;
using Spine.Unity;
using UnityEngine;
using UnityEngine.EventSystems;

public class ClockDropTarget : MonoBehaviour, IPointerClickHandler
{
    [SerializeField] private SkeletonGraphic _skeletonAnimation;

    [SpineAnimation(dataField: nameof(_skeletonAnimation))] [SerializeField]
    private string _animationName;

    [SerializeField] private bool _loopAnimation;
    [SerializeField] private AudioClip _audioClip;
    [SerializeField] private bool _acceptOnlyOnce = true;
    [SerializeField] private GameObject _door;

    private bool _isOccupied;

    public bool TryAccept(ClockItem item)
    {
        if (_door != null) return false;

        if (item == null)
        {
            return false;
        }

        if (_acceptOnlyOnce && _isOccupied)
        {
            return false;
        }

        PlayFeedback();
        GameManager.Instance?.CountEvent();
        item.CompleteDrop();
        _isOccupied = true;
        return true;
    }

    private void PlayFeedback()
    {
        if (_door != null) return;
        if (_skeletonAnimation != null && !string.IsNullOrEmpty(_animationName))
        {
            _skeletonAnimation.Initialize(false);
            _skeletonAnimation.AnimationState.SetAnimation(0, _animationName, _loopAnimation);
        }

        if (_audioClip != null)
        {
            AudioManager.Instance?.PlaySound(_audioClip);
        }
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        if (_door != null)
        {
            GameManager.Instance?.CountEvent();
            _door.SetActive(false);
            _skeletonAnimation.gameObject.SetActive(true);
            _door = null;
        }
    }
}