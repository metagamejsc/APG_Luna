using UnityEngine;

public class CameraController : MonoBehaviour
{
    [SerializeField] private Camera mainCamera;
    [SerializeField] private Vector2 widthRange = new Vector2(0.1f, 0.9f);
    [SerializeField] private Vector2 heightRange = new Vector2(0.1f, 0.9f);
    [SerializeField] private GameObject gameField;
    public Vector3 center, extent;

    public Vector2 HeightRange
    {
        get
        {
            return heightRange;
        }
        set
        {
            heightRange = value;
        }
    }
    void Awake()
    {
        if (gameField != null)
        {
            // Get the bounds of all renderers in the game field
            Bounds bounds = new Bounds();
            Renderer[] renderers = gameField.GetComponentsInChildren<Renderer>();

            if (renderers.Length > 0)
            {
                bounds = renderers[0].bounds;
                for (int i = 1; i < renderers.Length; i++)
                {
                    bounds.Encapsulate(renderers[i].bounds);
                }

                // Update camera based on game field bounds
                UpdateCamera(bounds);
            }
        }
    }

    public Bounds GetRenderBounds()
    {
        float distance = Mathf.Abs(mainCamera.transform.localPosition.z);
        float angle = mainCamera.fieldOfView / 2f;

        float height = Mathf.Tan(Mathf.Deg2Rad * angle) * distance * 2;
        float width = mainCamera.aspect * height;

        if (mainCamera.orthographic)
        {
            height = mainCamera.orthographicSize * 2;
            width = mainCamera.aspect * height;
        }

        return new Bounds(transform.position, new Vector3(width, height, 0));
    }

    public void UpdateCamera(Bounds bounds)
    {
        Vector2 heightRange = this.heightRange;
        float distance = Mathf.Abs(mainCamera.transform.localPosition.z);
        float boundsAspect = bounds.size.x / bounds.size.y;
        float cameraAspect = mainCamera.aspect;
        float limitCameraAspect = cameraAspect * ((widthRange.y - widthRange.x) / (heightRange.y - heightRange.x));

        float cameraWidth = 0;
        float cameraHeight = 0;

        float widthPercent = 1f - widthRange.x - (1f - widthRange.y);
        float heightPercent = 1f - heightRange.x - (1f - heightRange.y);

        // Check if screen is horizontal (width > height)
        if (Screen.width > Screen.height)
        {
            // Always use width-based calculation for horizontal screens
            cameraWidth = bounds.size.x / widthPercent;
            cameraHeight = cameraWidth / cameraAspect;
        }
        else
        {
            // Original logic for vertical screens
            if (boundsAspect > limitCameraAspect)
            {
                cameraWidth = bounds.size.x / widthPercent;
                cameraHeight = cameraWidth / cameraAspect;
            }
            else
            {
                cameraHeight = bounds.size.y / heightPercent;
                cameraWidth = cameraHeight * cameraAspect;
            }
        }

        // Rest of your existing camera update code...
        if (mainCamera.orthographic)
        {
            mainCamera.orthographicSize = cameraHeight / 2;

            float left = (-0.5f + widthRange.x) * cameraWidth;
            float right = (widthRange.y - 0.5f) * cameraWidth;
            float top = (heightRange.y - 0.5f) * cameraHeight;
            float bottom = (-0.5f + heightRange.x) * cameraHeight;

            Vector3 offset = new Vector3((left + right) / 2f, (top + bottom) / 2f, 0.5f);
            transform.position = bounds.center - offset;
            // Vector2 heightRange = this.heightRange;



            // float distance = Mathf.Abs(mainCamera.transform.localPosition.z);
            // float boundsAspect = bounds.size.x / bounds.size.y;
            // float cameraAspect = mainCamera.aspect;
            // float limitCameraAspect = cameraAspect * ((widthRange.y - widthRange.x) / (heightRange.y - heightRange.x));

            // float cameraWidth = 0;
            // float cameraHeight = 0;

            // float widthPercent = 1f - widthRange.x - (1f - widthRange.y);
            // float heightPercent = 1f - heightRange.x - (1f - heightRange.y);

            // if (boundsAspect > limitCameraAspect)
            // {
            //     cameraWidth = bounds.size.x / widthPercent;
            //     cameraHeight = cameraWidth / cameraAspect;
            // }
            // else
            // {
            //     cameraHeight = bounds.size.y / heightPercent;
            //     cameraWidth = cameraHeight * cameraAspect;
            // }

            // if (mainCamera.orthographic)
            // {
            //     mainCamera.orthographicSize = cameraHeight / 2;

            //     float left = (-0.5f + widthRange.x) * cameraWidth;
            //     float right = (widthRange.y - 0.5f) * cameraWidth;
            //     float top = (heightRange.y - 0.5f) * cameraHeight;
            //     float bottom = (-0.5f + heightRange.x) * cameraHeight;

            //     Vector3 offset = new Vector3((left + right) / 2f, (top + bottom) / 2f, 0.5f);
            //     transform.position = bounds.center - offset;
            // }
            // else
            // {
            //     float fieldOfView = 2 * Mathf.Atan(cameraHeight / (2 * distance)) * Mathf.Rad2Deg;
            //     mainCamera.fieldOfView = fieldOfView;

            //     Vector3 offset = new Vector3(0, 0, 0.5f);
            //     transform.position = bounds.center - offset;
            // }

            /*Vector2 heightRange = this.heightRange;
            float boundsAspect = extent.x / extent.y;
            float cameraAspect = mainCamera.aspect;
            float limitCameraAspect = cameraAspect * ((widthRange.y - widthRange.x) / (heightRange.y - heightRange.x));

            float cameraWidth = 0;
            float cameraHeight = 0;
            float widthPercent = 1f - widthRange.x - (1f - widthRange.y);
            float heightPercent = 1f - heightRange.x - (1f - heightRange.y);

            if (boundsAspect > limitCameraAspect) {
                cameraWidth = extent.x / widthPercent;
                cameraHeight = cameraWidth / cameraAspect;
            } else {
                cameraHeight = extent.y / heightPercent;
            }
            mainCamera.orthographicSize = cameraHeight / 2;
            transform.position = center;*/
        }
    }
    private void OnDrawGizmos()
    {
        Vector2 heightRange = this.heightRange;


        Bounds renderBounds = GetRenderBounds();

        float width = renderBounds.size.x;
        float height = renderBounds.size.y;

        Gizmos.color = Color.white;
        Gizmos.DrawLine(transform.TransformPoint(new Vector3(-width / 2, height / 2, 0)), transform.TransformPoint(new Vector3(width / 2, height / 2, 0)));
        Gizmos.DrawLine(transform.TransformPoint(new Vector3(-width / 2, -height / 2, 0)), transform.TransformPoint(new Vector3(width / 2, -height / 2, 0)));
        Gizmos.DrawLine(transform.TransformPoint(new Vector3(-width / 2, -height / 2, 0)), transform.TransformPoint(new Vector3(-width / 2, height / 2, 0)));
        Gizmos.DrawLine(transform.TransformPoint(new Vector3(width / 2, -height / 2, 0)), transform.TransformPoint(new Vector3(width / 2, height / 2, 0)));
        Gizmos.color = Color.green;

        float left = (-0.5f + widthRange.x) * width;
        float right = (widthRange.y - 0.5f) * width;
        float top = (heightRange.y - 0.5f) * height;
        float bottom = (-0.5f + heightRange.x) * height;

        Gizmos.DrawLine(transform.TransformPoint(new Vector3(left, top, 0)), transform.TransformPoint(new Vector3(right, top, 0)));
        Gizmos.DrawLine(transform.TransformPoint(new Vector3(left, bottom, 0)), transform.TransformPoint(new Vector3(right, bottom, 0)));
        Gizmos.DrawLine(transform.TransformPoint(new Vector3(left, bottom, 0)), transform.TransformPoint(new Vector3(left, top, 0)));
        Gizmos.DrawLine(transform.TransformPoint(new Vector3(right, bottom, 0)), transform.TransformPoint(new Vector3(right, top, 0)));

        Gizmos.color = Color.white;
    }
}
