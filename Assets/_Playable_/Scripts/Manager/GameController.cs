using System.Collections.Generic;
using DG.Tweening;
using Spine;
using Spine.Unity;
using TMPro;
using UnityEngine;
using Sequence = DG.Tweening.Sequence;

namespace Playable
{
    public class GameController : MonoBehaviour
    {
        public static GameController Instance;
        [SerializeField] private SkeletonGraphic skeletonAnimation;
        [SerializeField] private List<string> _nameSkin = new List<string>();

        [Header("Hint Hand")] [SerializeField] private RectTransform _hand;
        [SerializeField] private RectTransform _pos1;
        [SerializeField] private RectTransform _pos2;
        [SerializeField] private SkeletonGraphic _handSkeleton;

        [SerializeField, SpineAnimation(dataField: "_handSkeleton")]
        private string _handAnimName;

        [SerializeField, Min(0f)] private float _handAnimDelay = 0.2f;
        [SerializeField, Min(0f)] private float _handMoveDuration = 0.6f;
        [SerializeField] private TMP_Text _txtSub;
        [SerializeField] private AudioClip _soundIntro;

        private readonly List<string> activeSkinNames = new List<string>();

        private Sequence _handSequence;
        private Tween _introTween;

        private void Awake()
        {
            Instance = this;
        }

        private void Start()
        {
            foreach (var t in _nameSkin)
            {
                AddSkin(t);
            }

            StartHandHint();
            Item.AnyDragStarted += DismissHand;
            Target.AnyPressed += DismissHand;

            ShowSub("We'll pick the best player for the World cup team.");
            AudioManager.Instance.PlaySound(_soundIntro);
            _introTween = DOVirtual.DelayedCall(2.8f, SkipIntro);
        }

        private void OnDestroy()
        {
            Item.AnyDragStarted -= DismissHand;
            Target.AnyPressed -= DismissHand;
        }
        
        private void SkipIntro()
        {
            if (_introTween != null)
            {
                _introTween?.Kill();
                HideSub();
            }
        }

        private void StartHandHint()
        {
            if (_hand == null || _pos1 == null || _pos2 == null) return;

            _hand.position = _pos1.position;

            _handSequence = DOTween.Sequence();
            AppendHandLeg(_handSequence, _pos2.position);
            AppendHandLeg(_handSequence, _pos1.position);
            _handSequence.SetLoops(-1);
        }

        private void AppendHandLeg(Sequence sequence, Vector3 targetPosition)
        {
            sequence.AppendCallback(PlayHandAnim);
            sequence.AppendInterval(_handAnimDelay);
            sequence.Append(_hand.DOMove(targetPosition, _handMoveDuration).SetEase(Ease.InOutSine));
        }

        private void PlayHandAnim()
        {
            if (_handSkeleton == null || string.IsNullOrEmpty(_handAnimName)) return;
            if (_handSkeleton.Skeleton.Data.FindAnimation(_handAnimName) == null) return;

            _handSkeleton.AnimationState.SetAnimation(0, _handAnimName, false);
        }

        private void DismissHand()
        {
            if (_hand == null || !_hand.gameObject.activeSelf) return;

            _handSequence?.Kill();
            _hand.gameObject.SetActive(false);
        }

        private void AddSkin(string skinName)
        {
            if (activeSkinNames.Contains(skinName)) return;
            if (skeletonAnimation.Skeleton.Data.FindSkin(skinName) == null) return;

            activeSkinNames.Add(skinName);
            Rebuild();
        }

        private void RemoveSkin(string skinName)
        {
            if (!activeSkinNames.Remove(skinName)) return;
            Rebuild();
        }

        public void ToggleSkin(string skinName)
        {
            if (activeSkinNames.Contains(skinName))
                RemoveSkin(skinName);
            else
                AddSkin(skinName);
        }

        private void Rebuild()
        {
            var combined = new Skin("combined-skin");

            foreach (var name in activeSkinNames)
            {
                var source = skeletonAnimation.Skeleton.Data.FindSkin(name);
                if (source != null)
                    combined.AddSkin(source);
            }

            skeletonAnimation.Skeleton.SetSkin(combined);
            skeletonAnimation.Skeleton.SetSlotsToSetupPose();
            skeletonAnimation.AnimationState.Apply(skeletonAnimation.Skeleton);
        }

        public void ShowSub(string subName)
        {
            if (_introTween != null) _introTween.Kill();
            _txtSub.transform.parent.gameObject.SetActive(true);
            _txtSub.text = subName;
        }

        public void HideSub()
        {
            _txtSub.transform.parent.gameObject.SetActive(false);
        }
    }
}