using UnityEngine;
using System.Collections.Generic;
using Spine;
using DG.Tweening;
using TMPro;
using UnityEngine.UI;

public class StepManager : MonoBehaviour
{
    public List<StepData> steps;
    public Transform playerTransform; // nhân vật sẽ di chuyển
    public float moveDuration = 1f;
    [Header("UI")]
    public Image progressFillImage;
    public TextMeshProUGUI stepProgressText;
    public int maxStep = 8;

    private int currentStepIndex = -1;
    private StepData currentStep;

    private void Start()
    {
        foreach (var VARIABLE in steps)
        {
            VARIABLE.object1.GetComponent<DragHandler>().enabled = false;
            VARIABLE.object1.GetComponent<BoxCollider2D>().enabled = false;
        }

        if (progressFillImage != null)
        {
            float progress = (float)currentStepIndex / maxStep;
            progressFillImage.fillAmount = progress;
        }
        if (stepProgressText != null)
        {
            stepProgressText.text = $"{Mathf.Min(currentStepIndex, maxStep)} / {maxStep}";
        }
        NextStep();
    }


    public void NextStep()
    {
        currentStepIndex++;
    
        if (progressFillImage != null)
        {
            float progress = (float)currentStepIndex / maxStep;
            progressFillImage.fillAmount = progress;
        }
        if (stepProgressText != null)
        {
            stepProgressText.text = $"{Mathf.Min(currentStepIndex, maxStep)} / {maxStep}";
        }
        if (currentStepIndex >= maxStep)
        {
            Debug.Log("✅ All steps completed.");
            return;
        }

        currentStep = steps[currentStepIndex];
        SetupCurrentStep();
    }

    private void SetupCurrentStep()
    {
        currentStep.object1.SetActive(true);
        var drag = currentStep.object1.GetComponent<DragHandler>();
        drag.Init(currentStep.targetSkeleton, OnObjectDroppedCorrectly);
        drag.enabled = true; // Kích hoạt
        drag.GetComponent<BoxCollider2D>().enabled = true;
    }

    private void OnObjectDroppedCorrectly()
    {
        Debug.Log("✅ Object dropped correctly. Playing target animation...");

        var skeleton = currentStep.targetSkeleton;
        var anim = currentStep.targetAnimation;

        var track = skeleton.AnimationState.SetAnimation(0, anim, false);
        track.Complete += (TrackEntry entry) =>
        {
            Debug.Log("🎯 Target animation complete.");
            skeleton.gameObject.SetActive(false);
            if (currentStep.movePlayerAfterStep)
            {
                MovePlayerToTarget(() =>
                {
                    NextStep();
                });
            }
            else
            {
                NextStep();
            }
        };
    }

    private void MovePlayerToTarget(System.Action onComplete)
    {
        if (playerTransform == null || currentStep?.targetSkeleton == null)
        {
            onComplete?.Invoke();
            return;
        }

        Vector3 targetPos = currentStep.targetSkeleton.transform.position+ new Vector3(3, 0, 0);
        targetPos.z = playerTransform.position.z;

        playerTransform.DOMove(targetPos, moveDuration)
            .SetEase(Ease.Linear)
            .OnComplete(() =>
            {
                Debug.Log("🚶 Player reached target.");
                onComplete?.Invoke();
            });
    }
}
