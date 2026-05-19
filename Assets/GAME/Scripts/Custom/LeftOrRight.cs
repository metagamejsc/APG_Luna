using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using DG.Tweening;
using UnityEngine.UI;

public class LeftOrRight : MonoBehaviour
{
    public enum Side
    {
        Left,
        Right
    }

    [Serializable]
    public class StepData
    {
        public Transform stepTransform;
        public GameObject choice1Object;
        public GameObject choice2Object;
    }

    [SerializeField] private Transform player;
    [SerializeField] private Button leftButton;
    [SerializeField] private Button rightButton;

    [Header("Positions")]
    [SerializeField] private Vector3 leftPosition;
    [SerializeField] private Vector3 rightPosition;

    [Header("Move")]
    [SerializeField] private bool useTween = true;
    [SerializeField] private float moveDuration = 0.25f;
    [SerializeField] private Ease moveEase = Ease.OutQuad;

    [Header("Steps")]
    [SerializeField] private List<StepData> steps = new List<StepData>();
    [SerializeField] private bool playStepsOnEnable = true;
    [SerializeField] private bool hideInactiveSteps = true;
    [SerializeField] private Vector3 stepTopLocalPosition;
    [SerializeField] private Vector3 stepBottomLocalPosition;
    [SerializeField] private float stepMoveDuration = 1f;
    [SerializeField] private Ease stepMoveEase = Ease.Linear;
    [SerializeField] private Vector3 stepStartScale = Vector3.one * 0.5f;
    [SerializeField] private Vector3 stepEndScale = Vector3.one * 1.5f;
    [SerializeField] private UnityEvent<int> onStepReachedBottom;

    [Header("State")]
    [SerializeField] private bool isLeft = true;
    [SerializeField] private Side selectedSide = Side.Left;
    [SerializeField] private int currentStepIndex = -1;

    public bool IsLeft => isLeft;
    public bool IsRight => !isLeft;
    public Side SelectedSide => selectedSide;
    public int CurrentStepIndex => currentStepIndex;
    public int SelectedChoiceNumber => selectedSide == Side.Left ? 1 : 2;
    public GameObject SelectedChoiceObject => GetSelectedChoiceObject();
    public StepData CurrentStep => IsCurrentStepValid ? steps[currentStepIndex] : null;
    public bool IsCurrentStepValid => currentStepIndex >= 0 && currentStepIndex < steps.Count;

    private Tween moveTween;
    private Sequence stepSequence;

    /// --------------------------------------------------------------------------------

    public MixSkeletonSkin mixSkeletonSkin;
    bool isOff = false;

    private void OnEnable()
    {
        if (leftButton != null)
        {
            leftButton.onClick.AddListener(MoveLeft);
        }

        if (rightButton != null)
        {
            rightButton.onClick.AddListener(MoveRight);
        }

        PrepareSteps();

        if (playStepsOnEnable)
        {
            StartSteps();
        }
    }

    private void OnDisable()
    {
        if (moveTween != null)
        {
            moveTween.Kill();
            moveTween = null;
        }

        if (stepSequence != null)
        {
            stepSequence.Kill();
            stepSequence = null;
        }

        if (leftButton != null)
        {
            leftButton.onClick.RemoveListener(MoveLeft);
        }

        if (rightButton != null)
        {
            rightButton.onClick.RemoveListener(MoveRight);
        }
    }

    public void MoveLeft()
    {
        selectedSide = Side.Left;
        MoveTo(leftPosition, true);
        OffStartCard();
    }

    public void MoveRight()
    {
        selectedSide = Side.Right;
        MoveTo(rightPosition, false);
        OffStartCard();
    }
    void OffStartCard()
    {
        if (isOff) return;
        isOff = true;
        LunaManager.ins.OffStartCard();
        StartSteps();
    }
    public void StartSteps()
    {
        currentStepIndex = 0;
        PlayCurrentStep();
    }

    public void StopSteps()
    {
        if (stepSequence != null)
        {
            stepSequence.Kill();
            stepSequence = null;
        }
    }

    private void MoveTo(Vector3 targetPosition, bool left)
    {
        if (player == null)
        {
            return;
        }

        moveTween?.Kill();
        isLeft = left;

        if (!useTween || moveDuration <= 0f)
        {
            player.localPosition = targetPosition;
            moveTween = null;
            return;
        }

        moveTween = player
            .DOLocalMove(targetPosition, moveDuration)
            .SetEase(moveEase)
            .OnComplete(() => moveTween = null);
    }

    private void PrepareSteps()
    {
        if (!hideInactiveSteps)
        {
            return;
        }

        for (int i = 0; i < steps.Count; i++)
        {
            if (steps[i].stepTransform != null)
            {
                steps[i].stepTransform.gameObject.SetActive(false);
            }
        }
    }

    private void PlayCurrentStep()
    {
        stepSequence?.Kill();
        stepSequence = null;

        if (!IsCurrentStepValid)
        {
            return;
        }

        StepData step = CurrentStep;
        if (step.stepTransform == null)
        {
            currentStepIndex++;
            PlayCurrentStep();
            return;
        }

        step.stepTransform.gameObject.SetActive(true);
        step.stepTransform.localPosition = stepTopLocalPosition;
        step.stepTransform.localScale = stepStartScale;

        stepSequence = DOTween.Sequence();
        stepSequence.Join(step.stepTransform.DOLocalMove(stepBottomLocalPosition, stepMoveDuration).SetEase(stepMoveEase));
        stepSequence.Join(step.stepTransform.DOScale(stepEndScale, stepMoveDuration).SetEase(stepMoveEase));
        stepSequence.OnComplete(HandleStepReachedBottom);
    }

    private void HandleStepReachedBottom()
    {
        OnStepReachedBottom();

        if (IsCurrentStepValid && CurrentStep.stepTransform != null && hideInactiveSteps)
        {
            CurrentStep.stepTransform.gameObject.SetActive(false);
        }

        currentStepIndex++;
        PlayCurrentStep();
    }

    public void OnStepReachedBottom()
    {
        GameObject selectedObject = SelectedChoiceObject;
        string selectedObjectName = selectedObject != null ? selectedObject.name : "null";
        //bool isCorrect = SelectedChoiceNumber.ToString() == selectedObjectName;

        Debug.Log($"Step {currentStepIndex}: Player chose {SelectedChoiceNumber} ({selectedObjectName})");

        if (SelectedChoiceNumber == 1)
        {
            Choose1(currentStepIndex);
        }
        else
        {
            Choose2(currentStepIndex);
        }

        LunaManager.ins.CountPlay();
        onStepReachedBottom?.Invoke(currentStepIndex);
    }

    private GameObject GetSelectedChoiceObject()
    {
        if (!IsCurrentStepValid)
        {
            return null;
        }

        return selectedSide == Side.Left ? CurrentStep.choice1Object : CurrentStep.choice2Object;
    }
    public void Choose1(int stepIndex)
    {
        switch (stepIndex)
        {
            case 0:
                mixSkeletonSkin.AddSkin("vay2");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step1Lose");
                break;
            case 1:
                mixSkeletonSkin.AddSkin("tapde");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step2Lose");
                break;
            case 2:
                mixSkeletonSkin.AddSkin("giay");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step3Win");
                break;
            case 3:
                mixSkeletonSkin.AddSkin("kinh1");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step4Lose");
                break;
            case 4:
                mixSkeletonSkin.AddSkin("mu");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step5Lose");
                break;
            case 5:
                mixSkeletonSkin.AddSkin("son_red");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step6Win");
                break;
            case 6:
                mixSkeletonSkin.AddSkin("vong1");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step7Win");
                break;
            case 7:
                mixSkeletonSkin.AddSkin("gio");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step8Lose");
                break;
            case 8:
                mixSkeletonSkin.PlayAnimationOnly("lose", true);
                AudioController.Instance.PlaySfx("Step9Win");
                break;
            default:
                //LunaManager.ins.ShowEndCard();
                break;
        }
    }
    public void Choose2(int stepIndexs)
    {
        switch (stepIndexs)
        {
            case 0:
                mixSkeletonSkin.AddSkin("vay1");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step1Lose");
                break;
            case 1:
                mixSkeletonSkin.AddSkin("tat_ren");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step2Win");
                break;
            case 2:
                mixSkeletonSkin.AddSkin("dep");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step3Lose");
                break;
            case 3:
                mixSkeletonSkin.AddSkin("kinh2");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step4Win");
                break;
            case 4:
                mixSkeletonSkin.AddSkin("toc");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step5Win");
                break;
            case 5:
                mixSkeletonSkin.AddSkin("son_pink");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step6Lose");
                break;
            case 6:
                mixSkeletonSkin.AddSkin("vong2");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step7Lose");
                break;
            case 7:
                mixSkeletonSkin.AddSkin("tui");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step8Win");
                break;
            case 8:
                mixSkeletonSkin.PlayAnimationOnly("win", true);
                AudioController.Instance.PlaySfx("Step9Lose");
                break;
            default:
                //LunaManager.ins.ShowEndCard();
                break;
        }
    }

    public void OnlyLose(int stepIndex)
    {
        switch (stepIndex)
        {
            case 0:
                mixSkeletonSkin.AddSkin("vay2");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step1");
                break;
            case 1:
                mixSkeletonSkin.AddSkin("tapde");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step2");
                break;
            case 2:
                mixSkeletonSkin.AddSkin("dep");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step3");
                break;
            case 3:
                mixSkeletonSkin.AddSkin("kinh1");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step4");
                break;
            case 4:
                mixSkeletonSkin.AddSkin("mu");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step5");
                break;
            case 5:
                mixSkeletonSkin.AddSkin("son_pink");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step6");
                break;
            case 6:
                mixSkeletonSkin.AddSkin("vong2");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step7");
                break;
            case 7:
                mixSkeletonSkin.AddSkin("gio");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step8");
                break;
            case 8:
                mixSkeletonSkin.PlayAnimationOnly("lose", true);
                AudioController.Instance.PlaySfx("Step9");
                break;
            default:
                //LunaManager.ins.ShowEndCard();
                break;
        }
    }
    public void OnlyWin(int stepIndexs)
    {
        switch (stepIndexs)
        {
            case 0:
                mixSkeletonSkin.AddSkin("vay1");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step1");
                break;
            case 1:
                mixSkeletonSkin.AddSkin("tat_ren");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step2");
                break;
            case 2:
                mixSkeletonSkin.AddSkin("giay");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step3");
                break;
            case 3:
                mixSkeletonSkin.AddSkin("kinh2");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step4");
                break;
            case 4:
                mixSkeletonSkin.AddSkin("toc");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step5");
                break;
            case 5:
                mixSkeletonSkin.AddSkin("son_red");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step6");
                break;
            case 6:
                mixSkeletonSkin.AddSkin("vong1");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step7");
                break;
            case 7:
                mixSkeletonSkin.AddSkin("tui");
                mixSkeletonSkin.MixAndApplySkins();
                AudioController.Instance.PlaySfx("Step8");
                break;
            case 8:
                mixSkeletonSkin.PlayAnimationOnly("win", true);
                AudioController.Instance.PlaySfx("Step9");
                break;
            default:
                //LunaManager.ins.ShowEndCard();
                break;
        }
    }
}
