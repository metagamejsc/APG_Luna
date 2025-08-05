using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class Box : MonoBehaviour
{
    [SerializeField] private GameObject[] items;
    [SerializeField] private float animationDuration = 0.5f;
    //private Button button;
    private int currentIndex = 0;
    void Awake()
    {
        foreach (var item in items)
        {
            if (item != null)
            {
                item.SetActive(false);
            }
        }
    }

    public void OnButtonClick()
    {
        if (currentIndex >= items.Length)
        {
            Debug.Log("No more items to activate!");
            return;
        }

        // Activate next 3 items
        for (int i = 0; i < 3; i++)
        {
            if (currentIndex + i < items.Length && items[currentIndex + i] != null)
            {
                LunaManager.ins.TurnOffHand();
                GameObject item = items[currentIndex + i];
                Vector3 targetPosition = item.transform.position;

                // Setup initial state
                item.transform.GetComponent<DraggableItem>().Init();
                item.transform.position = this.transform.position;
                item.transform.localScale = Vector3.zero;
                item.SetActive(true);

                // Create animation sequence
                Sequence sequence = DOTween.Sequence();

                // Animate position and scale simultaneously
                sequence.Join(item.transform.DOMove(targetPosition, animationDuration)
                    .SetEase(Ease.OutBack));
                sequence.Join(item.transform.DOScale(Vector3.one, animationDuration)
                    .SetEase(Ease.OutBack));
            }
        }

        currentIndex += 3;
    }
}
