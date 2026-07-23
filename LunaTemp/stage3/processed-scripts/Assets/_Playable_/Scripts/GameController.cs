using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Playable;
using Spine;
using Spine.Unity;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using Sequence = DG.Tweening.Sequence;

public class GameController : MonoBehaviour
{
    public enum SelectionSide
    {
        Left,
        Right
    }

    [Serializable]
    public class DialogueLine
    {
        [Tooltip("Audio clip to play for this line.")]
        public AudioClip AudioClip;

        [TextArea(2, 4)] [Tooltip("Dialogue shown while the audio is playing.")]
        public string Dialogue;
    }

    [Serializable]
    public class Step2Option
    {
        [Tooltip("Which side this option belongs to.")]
        public SelectionSide Side;

        [Tooltip("Skin parts merged into default skin when this option is selected.")]
        public List<string> SkinParts = new List<string>();

        [Tooltip("True if this option should trigger win, false for lose.")]
        public bool IsWin;
    }

    [Header("Auto Start")] [SerializeField]
    private bool _autoStart = true;

    [Header("Character")] [SerializeField] private SkeletonGraphic _characterSkeletonGraphic;
    [SerializeField] private RectTransform _characterRect;
    [SerializeField] private string _step1LoopAnimation = "idle";
    [SerializeField] private string _step2IdleAnimation = "idle";
    [SerializeField] private string _winAnimation = "win";
    [SerializeField] private string _loseAnimation = "lose";
    [SerializeField] private Vector2 _step1CharacterPosition;
    [SerializeField] private Vector2 _step2CharacterCenterPosition;
    [SerializeField] private Vector2 _step2CharacterLeftPosition = new Vector2(-250f, 0f);
    [SerializeField] private Vector2 _step2CharacterRightPosition = new Vector2(250f, 0f);
    [SerializeField] private List<string> _step1SkinParts = new List<string>();
    [SerializeField] private GameObject _objManGirl;

    [Header("Background")] [SerializeField]
    private GameObject _step1Background;

    [SerializeField] private GameObject _step2Background;
    [SerializeField] private GameObject _text;
    [SerializeField] private GameObject _time;

    [Header("Dialogue")] [SerializeField] private TMP_Text _dialogueText;
    [SerializeField] private float _fallbackDialogueDuration = 1f;
    [SerializeField] private List<DialogueLine> _step1Dialogues = new List<DialogueLine>();
    [SerializeField] private AudioSource _fallbackAudioSource;

    [Header("Step 2")] [SerializeField] private RectTransform _step2OptionsRoot;
    [SerializeField] private float _step2SelectionTimeout = 2f;
    [SerializeField] private RectTransform _step2HandRoot;
    [SerializeField] private SkeletonGraphic _step2HandSkeletonGraphic;
    [SerializeField] private string _step2HandIdleAnimation = "idle";
    [SerializeField] private string _step2HandTabAnimation = "tab";
    [SerializeField] private Vector2 _step2HandLeftPosition = new Vector2(-220f, 0f);
    [SerializeField] private Vector2 _step2HandRightPosition = new Vector2(220f, 0f);
    [SerializeField] private float _step2HandMoveDuration = 0.35f;
    [SerializeField] private float _step2HandBaseScale = 1f;
    [SerializeField] private float _step2HandPressScale = 0.9f;
    [SerializeField] private float _step2HandTabHoldDuration = 0.12f;
    [SerializeField] private List<Step2Option> _step2Options = new List<Step2Option>();

    [Header("Behavior")] [SerializeField] private bool _playResultAnimationLoop = false;

    public event Action<bool> Step2Resolved;

    private Coroutine _sequenceRoutine;
    private bool _canAcceptChoice;
    private bool _choiceLocked;
    private SelectionSide? _selectedSide;
    private bool _hasSelectedSide;
    private bool _step2Resolved;
    private Coroutine _step2HandRoutine;

    private ISkeletonComponent CharacterSkeletonComponent
    {
        get
        {
            if (_characterSkeletonGraphic != null)
            {
                return _characterSkeletonGraphic;
            }

            return null;
        }
    }

    private IAnimationStateComponent CharacterAnimationStateComponent
    {
        get
        {
            if (_characterSkeletonGraphic != null)
            {
                return _characterSkeletonGraphic;
            }

            return null;
        }
    }

    private Skeleton CharacterSkeleton => CharacterSkeletonComponent?.Skeleton;
    private Spine.AnimationState CharacterAnimationState => CharacterAnimationStateComponent?.AnimationState;

    private Transform CharacterTransform
    {
        get
        {
            if (_characterSkeletonGraphic != null)
            {
                return _characterSkeletonGraphic.transform;
            }

            return null;
        }
    }

    private RectTransform CharacterRoot
    {
        get
        {
            if (_characterRect != null)
            {
                return _characterRect;
            }

            return CharacterTransform as RectTransform;
        }
    }

    private void Awake()
    {
        ResolveReferences();
    }

    private void Start()
    {
        if (_autoStart)
        {
            BeginSequence();
        }
    }

    private void Update()
    {
        if (!_canAcceptChoice || _choiceLocked)
        {
            return;
        }

        if (!TryGetPointerDownPosition(out Vector2 pointerPosition))
        {
            return;
        }

        SelectionSide side = pointerPosition.x < (Screen.width * 0.5f)
            ? SelectionSide.Left
            : SelectionSide.Right;

        SelectSide(side);
    }

    private bool TryGetPointerDownPosition(out Vector2 position)
    {
        position = default(UnityEngine.Vector2);

        if (Input.touchCount > 0)
        {
            Touch touch = Input.GetTouch(0);
            if (touch.phase == TouchPhase.Began)
            {
                position = touch.position;
                return true;
            }
        }

        if (Input.GetMouseButtonDown(0))
        {
            position = Input.mousePosition;
            return true;
        }

        return false;
    }


    private void OnDestroy()
    {
        KillAllTweens();
        if (_sequenceRoutine != null)
        {
            StopCoroutine(_sequenceRoutine);
            _sequenceRoutine = null;
        }
    }

    public void BeginSequence()
    {
        KillAllTweens();
        _canAcceptChoice = false;
        _choiceLocked = false;
        _selectedSide = null;
        _hasSelectedSide = false;
        _step2Resolved = false;

        if (_sequenceRoutine != null)
        {
            StopCoroutine(_sequenceRoutine);
        }

        _sequenceRoutine = StartCoroutine(RunSequence());
    }

    public void StartStep1()
    {
        BeginSequence();
    }

    public void StartStep2()
    {
        KillAllTweens();
        _canAcceptChoice = false;
        _choiceLocked = false;
        _selectedSide = null;
        _hasSelectedSide = false;
        _step2Resolved = false;

        if (_sequenceRoutine != null)
        {
            StopCoroutine(_sequenceRoutine);
        }

        _sequenceRoutine = StartCoroutine(RunStep2());
    }

    public void ChooseLeft()
    {
        SelectSide(SelectionSide.Left);
    }

    public void ChooseRight()
    {
        SelectSide(SelectionSide.Right);
    }

    public void ApplyMergedSkins(params string[] skinNames)
    {
        ApplyMergedSkins((IEnumerable<string>)skinNames);
    }

    public void ApplyMergedSkins(IEnumerable<string> skinNames)
    {
        Skeleton skeleton = CharacterSkeleton;
        if (skeleton == null)
        {
            Debug.LogWarning("GameController: character skeleton is not assigned.");
            return;
        }

        Skin mergedSkin = BuildMergedSkin(skeleton, skinNames);
        if (mergedSkin.Attachments.Count == 0 && skeleton.Data.DefaultSkin == null)
        {
            skeleton.SetSkin((Skin)null);
        }
        else
        {
            skeleton.SetSkin(mergedSkin);
        }

        skeleton.SetSlotsToSetupPose();
        skeleton.UpdateWorldTransform();

        CharacterAnimationState?.Apply(skeleton);
    }

    public void PlayCharacterAnimation(string animationName, bool loop)
    {
        Spine.AnimationState animationState = CharacterAnimationState;
        Skeleton skeleton = CharacterSkeleton;

        if (animationState == null || skeleton == null || string.IsNullOrEmpty(animationName))
        {
            return;
        }

        animationState.SetAnimation(0, animationName, loop);
        animationState.Apply(skeleton);
        skeleton.UpdateWorldTransform();
    }

    private IEnumerator RunSequence()
    {
        yield return null;
        yield return RunStep1();
        yield return RunStep2();
    }

    private IEnumerator RunStep1()
    {
        _canAcceptChoice = false;
        _choiceLocked = false;

        SetCharacterPosition(_step1CharacterPosition);
        ApplyMergedSkins(_step1SkinParts);
        PlayCharacterAnimation(_step1LoopAnimation, true);

        if (_step1Dialogues != null)
        {
            for (int i = 0; i < _step1Dialogues.Count; i++)
            {
                DialogueLine line = _step1Dialogues[i];
                if (line == null)
                {
                    continue;
                }

                if (_dialogueText != null)
                {
                    _dialogueText.gameObject.SetActive(true);
                    _dialogueText.text = line.Dialogue ?? string.Empty;
                }

                PlayAudio(line.AudioClip);

                float waitTime = line.AudioClip != null ? line.AudioClip.length : _fallbackDialogueDuration;
                if (waitTime > 0f)
                {
                    yield return new WaitForSecondsRealtime(waitTime);
                }
            }
        }

        if (_dialogueText != null)
        {
            _dialogueText.gameObject.SetActive(false);
        }
    }

    private IEnumerator RunStep2()
    {
        _canAcceptChoice = false;
        _choiceLocked = false;
        _selectedSide = null;
        _hasSelectedSide = false;
        _step2Resolved = false;
        GameManager.Instance.StartCountdown();
        if (_text != null)
        {
            _text.SetActive(true);
        }

        if (_time != null)
        {
            _time.SetActive(true);
        }

        SetStepBackgrounds(false, true);
        if (_step2OptionsRoot != null)
        {
            _step2OptionsRoot.gameObject.SetActive(true);
        }

        StartStep2HandTween();

        SetCharacterPosition(_step2CharacterCenterPosition);
        _objManGirl.SetActive(false);
        if (_dialogueText != null && _dialogueText.transform.parent != null)
        {
            _dialogueText.transform.parent.gameObject.SetActive(false);
        }

        ApplyMergedSkins();
        PlayCharacterAnimation(_step2IdleAnimation, true);

        _canAcceptChoice = true;
        float selectionTimer = 0f;
        while (_canAcceptChoice && !_step2Resolved && selectionTimer < GameManager.Instance.EndTime)
        {
            selectionTimer += Time.unscaledDeltaTime;
            yield return null;
        }

        _canAcceptChoice = false;
        if (!_step2Resolved)
        {
            if (selectionTimer >= GameManager.Instance.EndTime)
            {
                ApplyMergedSkins(_step1SkinParts);
            }

            ResolveStep2Result();
        }

        DOVirtual.DelayedCall(1.5f, () =>
        {
            GameManager.Instance.EndGame();
            GameManager.Instance.ClickToCTA();
        });
    }

    private void SelectSide(SelectionSide side)
    {
        if (!_canAcceptChoice || _choiceLocked)
        {
            return;
        }

        _selectedSide = side;
        _hasSelectedSide = true;
        _choiceLocked = true;

        StopStep2HandTween();

        Vector2 targetPosition = side == SelectionSide.Left
            ? _step2CharacterLeftPosition
            : _step2CharacterRightPosition;
        SetCharacterPosition(targetPosition);

        Step2Option option = FindOption(side);
        if (option != null)
        {
            ApplyMergedSkins(option.SkinParts);
        }

        ResolveStep2Result();
    }

    private Step2Option FindOption(SelectionSide side)
    {
        if (_step2Options == null)
        {
            return null;
        }

        for (int i = 0; i < _step2Options.Count; i++)
        {
            Step2Option option = _step2Options[i];
            if (option != null && option.Side == side)
            {
                return option;
            }
        }

        return null;
    }

    private Skin BuildMergedSkin(Skeleton skeleton, IEnumerable<string> skinNames)
    {
        Skin mergedSkin = new Skin("merged-skin");

        Skin defaultSkin = skeleton.Data.DefaultSkin;
        if (defaultSkin != null)
        {
            mergedSkin.AddSkin(defaultSkin);
        }

        if (skinNames != null)
        {
            foreach (string rawSkinName in skinNames)
            {
                if (string.IsNullOrWhiteSpace(rawSkinName))
                {
                    continue;
                }

                if (string.Equals(rawSkinName.Trim(), "default", StringComparison.OrdinalIgnoreCase))
                {
                    continue;
                }

                Skin foundSkin = skeleton.Data.FindSkin(rawSkinName.Trim());
                if (foundSkin == null)
                {
                    Debug.LogWarning($"GameController: skin not found '{rawSkinName}'.");
                    continue;
                }

                mergedSkin.AddSkin(foundSkin);
            }
        }

        return mergedSkin;
    }

    private void SetStepBackgrounds(bool showStep1, bool showStep2)
    {
        if (_step1Background != null)
        {
            _step1Background.SetActive(showStep1);
        }

        if (_step2Background != null)
        {
            _step2Background.SetActive(showStep2);
        }
    }

    private void SetCharacterPosition([Bridge.Ref] Vector2 position)
    {
        RectTransform rect = CharacterRoot;
        if (rect != null)
        {
            rect.anchoredPosition = position;
            return;
        }

        Transform characterTransform = CharacterTransform;
        if (characterTransform != null)
        {
            Vector3 localPosition = characterTransform.localPosition;
            characterTransform.localPosition = new Vector3(position.x, position.y, localPosition.z);
        }
    }

    private Tween TweenCharacterPosition([Bridge.Ref] Vector2 targetPosition, float duration)
    {
        RectTransform rect = CharacterRoot;
        if (rect != null)
        {
            return rect.DOAnchorPos(targetPosition, duration).SetEase(Ease.OutCubic);
        }

        Transform characterTransform = CharacterTransform;
        if (characterTransform != null)
        {
            Vector3 target = new Vector3(targetPosition.x, targetPosition.y, characterTransform.localPosition.z);
            return characterTransform.DOLocalMove(target, duration).SetEase(Ease.OutCubic);
        }

        return null;
    }

    private void PlayAudio(AudioClip clip)
    {
        if (clip == null)
        {
            return;
        }

        if (AudioManager.Instance != null)
        {
            AudioManager.Instance.PlaySound(clip);
            return;
        }

        if (_fallbackAudioSource != null)
        {
            _fallbackAudioSource.Stop();
            _fallbackAudioSource.clip = clip;
            _fallbackAudioSource.Play();
            return;
        }

        AudioSource.PlayClipAtPoint(clip, Vector3.zero);
    }

    private void KillAllTweens()
    {
        if (CharacterRoot != null)
        {
            CharacterRoot.DOKill();
        }

        if (_step2OptionsRoot != null)
        {
            _step2OptionsRoot.DOKill();
        }

        if (_step2HandRoot != null)
        {
            _step2HandRoot.DOKill();
        }

        if (_step2HandRoutine != null)
        {
            StopCoroutine(_step2HandRoutine);
            _step2HandRoutine = null;
        }
    }


    private void SetStep2OptionsRootActive(bool isActive)
    {
        if (_step2OptionsRoot != null)
        {
            _step2OptionsRoot.gameObject.SetActive(isActive);
        }
    }

    private void StartStep2HandTween()
    {
        if (_step2HandRoot == null)
        {
            return;
        }

        StopStep2HandTween();
        _step2HandRoot.gameObject.SetActive(true);
        _step2HandRoot.anchoredPosition = _step2HandLeftPosition;

        _step2HandRoutine = StartCoroutine(RunStep2HandLoop());
    }

    private void StopStep2HandTween()
    {
        if (_step2HandRoutine != null)
        {
            StopCoroutine(_step2HandRoutine);
            _step2HandRoutine = null;
        }

        if (_step2HandRoot != null)
        {
            _step2HandRoot.DOKill();
            _step2HandRoot.gameObject.SetActive(false);
        }

        PlayStep2HandAnimation(null, false);
    }

    private IEnumerator RunStep2HandLoop()
    {
        bool moveToRight = true;

        while (true)
        {
            Vector2 startPosition = moveToRight ? _step2HandLeftPosition : _step2HandRightPosition;
            Vector2 endPosition = moveToRight ? _step2HandRightPosition : _step2HandLeftPosition;

            if (_step2HandRoot == null)
            {
                yield break;
            }

            _step2HandRoot.DOKill();
            _step2HandRoot.anchoredPosition = startPosition;
            PlayStep2HandAnimation(_step2HandIdleAnimation, true);

            Tween moveTween = _step2HandRoot.DOAnchorPos(endPosition, _step2HandMoveDuration)
                .SetEase(Ease.InOutSine);
            yield return moveTween.WaitForCompletion();

            PlayStep2HandAnimation(_step2HandTabAnimation, false);
            yield return new WaitForSeconds(0.3f);

            if (_step2HandTabHoldDuration > 0f)
            {
                yield return new WaitForSecondsRealtime(_step2HandTabHoldDuration);
            }

            yield return new WaitForSeconds(0.3f);

            moveToRight = !moveToRight;
        }
    }

    private void PlayStep2HandAnimation(string animationName, bool loop)
    {
        if (_step2HandSkeletonGraphic == null || string.IsNullOrEmpty(animationName))
        {
            return;
        }

        Skeleton skeleton = _step2HandSkeletonGraphic.Skeleton;
        Spine.AnimationState animationState = _step2HandSkeletonGraphic.AnimationState;
        if (animationState == null || skeleton == null)
        {
            return;
        }

        animationState.SetAnimation(0, animationName, loop);
        animationState.Apply(skeleton);
        skeleton.UpdateWorldTransform();
    }

    private void ResolveStep2Result()
    {
        if (_step2Resolved)
        {
            return;
        }

        _step2Resolved = true;
        SetStep2OptionsRootActive(false);
        StopStep2HandTween();

        Step2Option option = null;
        if (_hasSelectedSide && _selectedSide.HasValue)
        {
            option = FindOption(_selectedSide.Value);
        }

        if (option == null)
        {
            PlayLoseSound();
            PlayCharacterAnimation(_loseAnimation, _playResultAnimationLoop);
            Step2Resolved?.Invoke(false);
            return;
        }

        ApplyMergedSkins(option.SkinParts);
        if (option.IsWin)
        {
            PlayCharacterAnimation(_winAnimation, _playResultAnimationLoop);
            Step2Resolved?.Invoke(true);
            return;
        }

        PlayLoseSound();
        PlayCharacterAnimation(_loseAnimation, _playResultAnimationLoop);
        Step2Resolved?.Invoke(false);
    }

    private void PlayLoseSound()
    {
        if (AudioManager.Instance != null)
        {
            AudioManager.Instance.PlaySound(SoundType.Lose);
        }
    }


    private void OnLeftButtonClicked()
    {
        SelectSide(SelectionSide.Left);
    }

    private void OnRightButtonClicked()
    {
        SelectSide(SelectionSide.Right);
    }

    private void ResolveReferences()
    {
        if (_characterRect == null)
        {
            if (_characterSkeletonGraphic != null)
            {
                _characterRect = _characterSkeletonGraphic.transform as RectTransform;
            }
        }

        if (_dialogueText == null)
        {
            GameObject talkObject = GameObject.Find("TextTalk");
            if (talkObject != null)
            {
                _dialogueText = talkObject.GetComponentInChildren<TMP_Text>(true);
            }
        }

        if (_step1Background == null)
        {
            _step1Background = GameObject.Find("Background");
        }

        if (_step2Background == null)
        {
            _step2Background = GameObject.Find("Background End");
        }

        if (_step2OptionsRoot == null)
        {
            GameObject optionsRootObject = GameObject.Find("Option Root Move");
            if (optionsRootObject == null)
            {
                optionsRootObject = GameObject.Find("Parent Option");
            }

            if (optionsRootObject != null)
            {
                _step2OptionsRoot = optionsRootObject.GetComponent<RectTransform>();
            }
        }

        if (_step2HandSkeletonGraphic == null && _step2HandRoot != null)
        {
            _step2HandSkeletonGraphic = _step2HandRoot.GetComponentInChildren<SkeletonGraphic>(true);
        }
    }
}