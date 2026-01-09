using UnityEngine;
using System.Collections;

public class HandTutorial : MonoBehaviour
{
    public RectTransform targetA;
    public RectTransform targetB;
    public float moveDuration = 1f;
    public float delayBetweenLoops = 0.5f;
    public bool loop = true;

    public RectTransform _rt;
    public Canvas _canvas;

    void Awake()
    {
        if (_rt == null)
            _rt = GetComponent<RectTransform>();

        if (_canvas == null)
            _canvas = GetComponentInParent<Canvas>();
    }

    void Start()
    {
        _rt.position = WorldPosFromRect(targetA); // ✅ Đặt vị trí ban đầu
        StartCoroutine(MoveLoop());
    }

    IEnumerator MoveLoop()
    {
        while (true)
        {
            yield return MoveFromTo(targetA, targetB);

            if (!loop) yield break;

            yield return new WaitForSeconds(delayBetweenLoops);
            _rt.position = WorldPosFromRect(targetA); // reset lại trước khi lặp
        }
    }

    IEnumerator MoveFromTo(RectTransform from, RectTransform to)
    {
        Vector3 startPos = WorldPosFromRect(from);
        Vector3 endPos = WorldPosFromRect(to);

        float t = 0f;
        while (t < moveDuration)
        {
            t += Time.deltaTime;
            float normalized = Mathf.Clamp01(t / moveDuration);
            _rt.position = Vector3.Lerp(startPos, endPos, normalized);
            yield return null;
        }
    }

    Vector3 WorldPosFromRect(RectTransform rect)
    {
        Vector3[] worldCorners = new Vector3[4];
        rect.GetWorldCorners(worldCorners);
        return (worldCorners[0] + worldCorners[2]) / 2f; // center
    }
}