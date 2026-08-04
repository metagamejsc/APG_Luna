using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class InteractController : MonoBehaviour
{
    [SerializeField] private RectTransform canvas;
    [SerializeField] private GameObject tut;

    private void Update()
    {
        CheckInputDown();
    }

    private void HideOnClick(GameObject item)
    {
        if (!item.CompareTag("ActionOnClick")) return;
        GameController.Ins.PlayAnimation(item);
        item.SetActive(false);
    }

    private void CheckInputDown()
    {
        if (Input.GetMouseButtonDown(0))
        {
            if (tut)
            {
                Destroy(tut);
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
            }
        }
    }
}