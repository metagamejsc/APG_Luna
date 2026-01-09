using UnityEngine;
using UnityEngine.EventSystems;

public class TutorialOverlay : MonoBehaviour, IPointerClickHandler
{
    public GameObject tutorialHand; // Gán TutorialHand ở đây hoặc tắt chính nó

    public void OnPointerClick(PointerEventData eventData)
    {
        // Tắt bàn tay hướng dẫn
        if (tutorialHand != null)
            tutorialHand.SetActive(false);

        // Hoặc tắt cả overlay
        gameObject.SetActive(false);
    }
}