using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class DragController : MonoBehaviour
{
    [SerializeField] private GameObject currentTarget;
    [SerializeField] private AudioClip pickupSound;
    [SerializeField] private RectTransform iconItem;
    [SerializeField] private RectTransform canvas;

    [SerializeField] private TutController tut;

    private RectTransform currentIcon;

    void Update()
    {
        CheckInputDown();
        CheckInputUp();
        MoveTarget();
    }
    private void MoveTarget()
    {
        if (!currentTarget || !currentIcon) return;
        RectTransformUtility.ScreenPointToLocalPointInRectangle(canvas, Input.mousePosition, null, out Vector2 localPoint);
        currentIcon.anchoredPosition = localPoint;
    }

    private void SetTarget(GameObject gameObject)
    {
        if (!gameObject.CompareTag("Item")) return;
        if (currentIcon) currentIcon.gameObject.SetActive(false);
        gameObject.SetActive(false);

        currentTarget = gameObject;
        currentIcon = iconItem;

        currentIcon.gameObject.SetActive(true);
        AudioController.Ins.PlaySFX(pickupSound);
    }
    private void RemoveTarget()
    {
        currentTarget = null;
        currentIcon.gameObject.SetActive(false);
    }

    private void DropItem(GameObject gameObject)
    {
        if (!currentTarget) return;
        if (!gameObject.CompareTag("Drop") || !currentTarget.CompareTag("Item"))
        {
            currentTarget.SetActive(true);
            return;
        }
        GameController.Ins.NextAnimation(gameObject);

        Destroy(currentTarget);
        gameObject.SetActive(false);
        RemoveTarget();
    }
    
    private void CheckInputDown()
    {
        if (Input.GetMouseButtonDown(0))
        {
            if (tut)
            {
                tut.StopTut();
                tut = null;
            }
            PointerEventData pointer = new PointerEventData(EventSystem.current)
            {
                position = Input.mousePosition
            };
            List<RaycastResult> results = new List<RaycastResult>();
            EventSystem.current.RaycastAll(pointer, results);
            if (results.Count > 0)
            {
                GameObject result = results[0].gameObject;
                SetTarget(result);
            }
        }
    }
    private void CheckInputUp()
    {
        if (Input.GetMouseButtonUp(0))
        {
            PointerEventData pointer = new PointerEventData(EventSystem.current)
            {
                position = Input.mousePosition
            };
            List<RaycastResult> results = new List<RaycastResult>();
            EventSystem.current.RaycastAll(pointer, results);
            if (results.Count > 0)
            {
                GameObject result = results[0].gameObject;
                DropItem(result);
            }
            if (!currentTarget) return;
            currentTarget.SetActive(true);
            RemoveTarget();
        }
    }
}
