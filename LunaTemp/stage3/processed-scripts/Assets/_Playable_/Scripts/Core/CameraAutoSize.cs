using UnityEngine;

[ExecuteAlways]
[RequireComponent(typeof(Camera))]
public sealed class CameraAutoSize : MonoBehaviour
{
    [SerializeField] private Camera targetCamera;
    [SerializeField] private Vector2 referenceResolution = new Vector2(1080f, 1920f);
    [SerializeField] private float referenceOrthographicSize = 9.5f;

    private int lastScreenWidth;
    private int lastScreenHeight;

    private void Reset()
    {
        targetCamera = GetComponent<Camera>();
        ApplySize();
    }

    private void Awake()
    {
        if (targetCamera == null)
        {
            targetCamera = GetComponent<Camera>();
        }

        ApplySize();
    }

    private void OnEnable()
    {
        ApplySize();
    }

    private void OnValidate()
    {
        if (targetCamera == null)
        {
            targetCamera = GetComponent<Camera>();
        }

        ApplySize();
    }

    private void Update()
    {
        if (Screen.width == lastScreenWidth && Screen.height == lastScreenHeight)
        {
            return;
        }

        ApplySize();
    }

    private void ApplySize()
    {
        if (targetCamera == null || !targetCamera.orthographic)
        {
            return;
        }

        if (referenceResolution.x <= 0f || referenceResolution.y <= 0f)
        {
            return;
        }

        float referenceAspect = referenceResolution.x / referenceResolution.y;

        float width = Screen.width;
        float height = Screen.height;
        float currentAspect = 0;
        if (width < height)
        {
            currentAspect = width / height;
        }
        else
        {
            currentAspect = height / width;
        }

        float newSize = referenceOrthographicSize * (referenceAspect / currentAspect);

        targetCamera.orthographicSize = newSize;
        lastScreenWidth = Screen.width;
        lastScreenHeight = Screen.height;
    }
}