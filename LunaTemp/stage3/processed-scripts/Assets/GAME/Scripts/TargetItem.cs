using Spine.Unity;
using UnityEngine;
using System.Collections.Generic;

public class TargetItem : MonoBehaviour
{
    [System.Serializable]
    private class PhaseData
    {
        [SerializeField] private int _requiredId;
        [SerializeField] private bool _isUsable = true;

        [SerializeField, SpineAnimation(dataField = "Anim")]
        private string _firstAnimation;

        [SerializeField] private bool _firstAnimationLoop;

        [SerializeField, SpineAnimation(dataField = "Anim")]
        private string _secondAnimation;

        [SerializeField] private bool _secondAnimationLoop = true;

        public int RequiredId => _requiredId;

        public bool IsUsable
        {
            get => _isUsable;
            set => _isUsable = value;
        }

        public string FirstAnimation => _firstAnimation;
        public bool FirstAnimationLoop => _firstAnimationLoop;
        public string SecondAnimation => _secondAnimation;
        public bool SecondAnimationLoop => _secondAnimationLoop;
    }

    [System.Serializable]
    private class SkeletonPhaseData
    {
        [SerializeField] private SkeletonAnimation _skeletonAnimation;
        [SerializeField] private string _firstAnimation;
        [SerializeField] private bool _firstAnimationLoop;
        [SerializeField] private string _secondAnimation;
        [SerializeField] private bool _secondAnimationLoop = true;

        public SkeletonAnimation SkeletonAnimation => _skeletonAnimation;
        public string FirstAnimation => _firstAnimation;
        public bool FirstAnimationLoop => _firstAnimationLoop;
        public string SecondAnimation => _secondAnimation;
        public bool SecondAnimationLoop => _secondAnimationLoop;
    }

    [Header("Phase")] [SerializeField] private List<PhaseData> _phases = new List<PhaseData>();

    [Header("Skeleton Animation")] [SerializeField]
    private SkeletonAnimation _skeletonAnimation;

    [Header("Touch Skeleton Animation")]
    [SerializeField] private SkeletonPhaseData _phaseTouch;
    [SerializeField] private SkeletonPhaseData _phaseBG;

    [SerializeField] private BoxCollider2D _collider2D;

    private int _currentPhaseIndex;
    [SerializeField] private bool _isBlock;
    [SerializeField] private bool _isTouch;

    public bool IsUsable => HasAnyUsablePhase();

    public BoxCollider2D Collider2D => _collider2D;

    public bool IsBlock
    {
        get => _isBlock;
        set => _isBlock = value;
    }

    public bool IsTouch => _isTouch;

    public bool CanMatch(int itemId)
    {
        if (!IsUsable || IsStackItemLimitReached())
        {
            return false;
        }

        PhaseData currentPhase = GetCurrentPhase();
        return currentPhase != null && currentPhase.RequiredId == itemId;
    }

    public bool OnMatched(int itemId)
    {
        if (_isTouch)
        {
            PlayTouchPhaseAnimations(_phaseTouch);
            PlayTouchPhaseAnimations(_phaseBG);
            _isTouch = false;
            if (LunaManager.ins != null)
            {
                LunaManager.ins.ShowEndCard();
            }
            return false;
        }

        if (IsStackItemLimitReached())
        {
            return false;
        }

        PhaseData currentPhase = GetCurrentPhase();
        if (currentPhase == null || !currentPhase.IsUsable || currentPhase.RequiredId != itemId)
        {
            return false;
        }

        PlayPhaseAnimations(currentPhase);
        currentPhase.IsUsable = false;

        MoveToNextUsablePhase();
        return true;
    }

    private void OnMouseDown()
    {
        if (!_isTouch)
        {
            return;
        }

        if (_collider2D == null)
        {
            _collider2D = GetComponent<BoxCollider2D>();
        }

        if (_collider2D == null)
        {
            return;
        }

        Vector2 worldPoint = GetPointerWorldPosition();
        if (!IsPointerInsideCollider(worldPoint))
        {
            return;
        }

        if (!IsUsable || IsStackItemLimitReached())
        {
            _isTouch = false;
            return;
        }

        PhaseData currentPhase = GetCurrentPhase();
        if (currentPhase == null || !currentPhase.IsUsable)
        {
            _isTouch = false;
            return;
        }

        PlayPhaseAnimations(currentPhase);
        currentPhase.IsUsable = false;
        MoveToNextUsablePhase();
        _isTouch = false;
    }

    private Vector2 GetPointerWorldPosition()
    {
        Camera mainCamera = Camera.main;
        if (mainCamera == null)
        {
            return transform.position;
        }

        Vector3 screenPosition = Input.mousePosition;
        screenPosition.z = Mathf.Abs(mainCamera.transform.position.z - transform.position.z);
        Vector3 worldPosition = mainCamera.ScreenToWorldPoint(screenPosition);
        return worldPosition;
    }

    private bool IsPointerInsideCollider([Bridge.Ref] Vector2 worldPoint)
    {
        if (_collider2D == null)
        {
            return false;
        }

        Bounds bounds = _collider2D.bounds;
        return worldPoint.x >= bounds.min.x && worldPoint.x <= bounds.max.x &&
               worldPoint.y >= bounds.min.y && worldPoint.y <= bounds.max.y;
    }

    public void SetCanUse(bool isUsable)
    {
        if (_phases == null)
        {
            return;
        }

        for (int i = 0; i < _phases.Count; i++)
        {
            if (_phases[i] == null)
            {
                continue;
            }

            _phases[i].IsUsable = isUsable;
        }

        _currentPhaseIndex = 0;
        GetCurrentPhase();
    }

    private PhaseData GetCurrentPhase()
    {
        if (_phases == null || _phases.Count == 0)
        {
            return null;
        }

        while (_currentPhaseIndex >= 0 && _currentPhaseIndex < _phases.Count)
        {
            PhaseData phase = _phases[_currentPhaseIndex];
            if (phase != null && phase.IsUsable)
            {
                return phase;
            }

            _currentPhaseIndex++;
        }

        _currentPhaseIndex = _phases.Count;
        return null;
    }

    private void MoveToNextUsablePhase()
    {
        if (_phases == null || _phases.Count == 0)
        {
            _currentPhaseIndex = 0;
            return;
        }

        _currentPhaseIndex++;

        while (_currentPhaseIndex < _phases.Count)
        {
            PhaseData phase = _phases[_currentPhaseIndex];
            if (phase != null && phase.IsUsable)
            {
                return;
            }

            _currentPhaseIndex++;
        }

        _currentPhaseIndex = _phases.Count;
    }

    private bool HasAnyUsablePhase()
    {
        if (_phases == null || _phases.Count == 0 || _isBlock)
        {
            return false;
        }

        for (int i = 0; i < _phases.Count; i++)
        {
            PhaseData phase = _phases[i];
            if (phase != null && phase.IsUsable)
            {
                return true;
            }
        }

        return false;
    }

    private void PlayPhaseAnimations(PhaseData phase)
    {
        PlayPhaseAnimations(_skeletonAnimation, phase);
    }

    private void PlayTouchPhaseAnimations(SkeletonPhaseData phase)
    {
        if (phase == null)
        {
            return;
        }

        PlayAnimations(
            phase.SkeletonAnimation,
            phase.FirstAnimation,
            phase.FirstAnimationLoop,
            phase.SecondAnimation,
            phase.SecondAnimationLoop);
    }

    private void PlayPhaseAnimations(SkeletonAnimation skeletonAnimation, PhaseData phase)
    {
        if (phase == null)
        {
            return;
        }

        PlayAnimations(
            skeletonAnimation,
            phase.FirstAnimation,
            phase.FirstAnimationLoop,
            phase.SecondAnimation,
            phase.SecondAnimationLoop);
    }

    private void PlaySecondAnimation(PhaseData phase)
    {
        PlaySecondAnimation(_skeletonAnimation, phase);
    }

    private void PlaySecondAnimation(SkeletonAnimation skeletonAnimation, PhaseData phase)
    {
        if (phase == null || skeletonAnimation == null || string.IsNullOrEmpty(phase.SecondAnimation))
        {
            return;
        }

        skeletonAnimation.AnimationState.SetAnimation(0, phase.SecondAnimation, phase.SecondAnimationLoop);
    }

    private void PlayAnimations(
        SkeletonAnimation skeletonAnimation,
        string firstAnimation,
        bool firstAnimationLoop,
        string secondAnimation,
        bool secondAnimationLoop)
    {
        if (skeletonAnimation == null)
        {
            return;
        }

        var skeleton = skeletonAnimation.Skeleton;
        var state = skeletonAnimation.AnimationState;

        if (skeleton == null || state == null)
        {
            return;
        }

        if (string.IsNullOrEmpty(firstAnimation))
        {
            if (!string.IsNullOrEmpty(secondAnimation))
            {
                state.SetAnimation(0, secondAnimation, secondAnimationLoop);
            }

            return;
        }

        var firstAnim = skeleton.Data.FindAnimation(firstAnimation);
        if (firstAnim == null)
        {
            if (!string.IsNullOrEmpty(secondAnimation))
            {
                state.SetAnimation(0, secondAnimation, secondAnimationLoop);
            }

            return;
        }

        if (string.IsNullOrEmpty(secondAnimation))
        {
            state.SetAnimation(0, firstAnim, firstAnimationLoop);
            return;
        }

        var secondAnim = skeleton.Data.FindAnimation(secondAnimation);
        if (secondAnim == null)
        {
            state.SetAnimation(0, firstAnim, firstAnimationLoop);
            return;
        }

        state.SetAnimation(0, firstAnim, false);
        state.AddAnimation(0, secondAnim, secondAnimationLoop, 0f);
    }

    private bool IsStackItemLimitReached()
    {
        return LunaManager.ins != null && LunaManager.ins.IsStackItemLimitReached();
    }
}
