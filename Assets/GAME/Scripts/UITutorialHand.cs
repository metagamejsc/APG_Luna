using System.Collections;
using UnityEngine;

public class UITutorialHand : MonoBehaviour
{
    [Header("References")]
    [SerializeField] private RectTransform hand;
    [SerializeField] private RectTransform fromTarget;
    [SerializeField] private RectTransform toTarget;
    [SerializeField] private GameObject tutorialRoot;

    [Header("Move")]
    [SerializeField] private float moveDuration = 0.8f;
    [SerializeField] private float startDelay = 0.2f;
    [SerializeField] private float loopDelay = 0.35f;
    [SerializeField] private AnimationCurve moveCurve = AnimationCurve.EaseInOut(0f, 0f, 1f, 1f);
    [SerializeField] private bool useUnscaledTime = true;

    [Header("Hide")]
    [SerializeField] private bool hideOnPlayerInput = true;
    [SerializeField] private float ignoreInputDuration = 0.15f;

    private Coroutine tutorialCoroutine;
    private float shownTime;
    private bool isHidden;

    private void Awake()
    {
        if (hand == null)
            hand = transform as RectTransform;
        if (tutorialRoot == null)
            tutorialRoot = gameObject;
    }

    private void OnEnable()
    {
        Show();
    }

    private void OnDisable()
    {
        StopTutorial();
    }

    private void Update()
    {
        if (!hideOnPlayerInput || isHidden)
            return;

        if (GetTime() - shownTime < ignoreInputDuration)
            return;

        if (HasPlayerInput())
            Hide();
    }

    public void Show()
    {
        if (hand == null || fromTarget == null || toTarget == null)
            return;

        isHidden = false;
        shownTime = GetTime();

        if (tutorialRoot != null && !tutorialRoot.activeSelf)
            tutorialRoot.SetActive(true);

        StopTutorial();
        tutorialCoroutine = StartCoroutine(PlayTutorialLoop());
    }

    public void Hide()
    {
        if (isHidden)
            return;

        isHidden = true;
        StopTutorial();

        if (tutorialRoot != null)
            tutorialRoot.SetActive(false);
        else if (hand != null)
            hand.gameObject.SetActive(false);
    }

    private IEnumerator PlayTutorialLoop()
    {
        if (startDelay > 0f)
            yield return Wait(startDelay);

        while (!isHidden)
        {
            hand.position = fromTarget.position;

            float elapsed = 0f;
            float duration = Mathf.Max(0.01f, moveDuration);
            Vector3 startPosition = fromTarget.position;
            Vector3 endPosition = toTarget.position;

            while (elapsed < duration)
            {
                elapsed += GetDeltaTime();
                float t = Mathf.Clamp01(elapsed / duration);
                float easedT = moveCurve != null ? moveCurve.Evaluate(t) : t;
                hand.position = Vector3.LerpUnclamped(startPosition, endPosition, easedT);
                yield return null;
            }

            hand.position = endPosition;

            if (loopDelay > 0f)
                yield return Wait(loopDelay);
        }
    }

    private IEnumerator Wait(float delay)
    {
        if (useUnscaledTime)
            yield return new WaitForSecondsRealtime(delay);
        else
            yield return new WaitForSeconds(delay);
    }

    private bool HasPlayerInput()
    {
        if (Input.GetMouseButtonDown(0))
            return true;

        for (int i = 0; i < Input.touchCount; i++)
        {
            if (Input.GetTouch(i).phase == TouchPhase.Began)
                return true;
        }

        return false;
    }

    private void StopTutorial()
    {
        if (tutorialCoroutine == null)
            return;

        StopCoroutine(tutorialCoroutine);
        tutorialCoroutine = null;
    }

    private float GetTime()
    {
        return useUnscaledTime ? Time.unscaledTime : Time.time;
    }

    private float GetDeltaTime()
    {
        return useUnscaledTime ? Time.unscaledDeltaTime : Time.deltaTime;
    }
}
