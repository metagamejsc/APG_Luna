using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class DragController : MonoBehaviour
{
    [SerializeField] private GameObject currentTarget;
    [SerializeField] private RectTransform iconCheese;
    [SerializeField] private RectTransform iconMedicine;
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
        if (!gameObject.CompareTag("Cheese") && !gameObject.CompareTag("Medicine")) return;
        currentTarget = gameObject;
        if (currentIcon) currentIcon.gameObject.SetActive(false);
        if (gameObject.CompareTag("Cheese"))
        {
            currentIcon = iconCheese;
        }
        else
        {
            currentIcon = iconMedicine;
        }
        gameObject.SetActive(false);
        currentIcon.gameObject.SetActive(true);
    }
    private void RemoveTarget()
    {
        currentTarget = null;
        currentIcon.gameObject.SetActive(false);
    }

    private void HideOnClick(GameObject gameObject)
    {
        if (!gameObject.CompareTag("HideOnClick")) return;
        GameController.Ins.NextAnimation(gameObject);
        gameObject.SetActive(false);
    }
    private void DropMedicine(GameObject gameObject)
    {
        if (!currentTarget) return;
        if (!gameObject.CompareTag("Drop") || !currentTarget.CompareTag("Medicine"))
        {
            currentTarget.SetActive(true);
            return;
        }
        GameController.Ins.NextAnimation(gameObject);

        Destroy(currentTarget);
        gameObject.SetActive(false);
        RemoveTarget();
    }
    private void DropCheese(GameObject gameObject)
    {
        if (!currentTarget) return;
        if (!gameObject.CompareTag("Mouse") || !currentTarget.CompareTag("Cheese"))
        {
            currentTarget.SetActive(true);
            return;
        }
        GameController.Ins.NextAnimation(gameObject);
        currentTarget.SetActive(false);
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
                HideOnClick(result);
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
                DropMedicine(result);
                DropCheese(result);
            }
            if (!currentTarget) return;
            currentTarget.SetActive(true);
            RemoveTarget();
        }
    }
}
