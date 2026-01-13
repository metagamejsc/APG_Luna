using UnityEngine;
using UnityEngine.EventSystems;

public class TutorialOverlay : MonoBehaviour
{
    public static TutorialOverlay ins;
    void Awake(){
    ins=this;
    }
    public GameObject tutorialHand; // Gán TutorialHand ở đây hoặc tắt chính nó

    public void HideTut()
    {
        // Tắt bàn tay hướng dẫn
        if (tutorialHand != null)
            tutorialHand.SetActive(false);

        // Hoặc tắt cả overlay
        gameObject.SetActive(false);
    }
}