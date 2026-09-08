using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Spine.Unity;
using UnityEngine;
using UnityEngine.UI;

public class LockController : MonoBehaviour
{
    [Header("Password")]
    [SerializeField] private string password;
    [SerializeField] private string userInput;
    private const string EMPTY_STRING = "";

    [Header("Control")]
    [SerializeField] private float delayHide;
    [SerializeField] private GameObject activeObject;
    [SerializeField] private GameObject activeArea;
    [SerializeField] private Button showButton;
    [SerializeField] private Button hideButton;
    [SerializeField] private GameObject inputScene;
    [SerializeField] private GameObject textScene;
    [SerializeField] private GameObject correctScene;
    [SerializeField] private GameObject notCorrectScene;

    [Header("Input")]
    [SerializeField] private List<Text> charText;
    [SerializeField] private List<InputButton> inputButtons;

    [Header("Skeleton")]
    [SerializeField] private SkeletonGraphic lockSkeleton;
    [SerializeField] private List<Anim> showAnim;
    [SerializeField] private List<Anim> hideAnim;

    private void Start()
    {
        Reset();
        showButton.onClick.AddListener(ShowLock);
        hideButton.onClick.AddListener(HideLock);
        inputButtons.ForEach(input => input.Button.onClick.AddListener(() => InputNumber(input.Number)));
    }
    private void ShowLock()
    {
        GameController.Ins.LockPlay(true);
        showButton.gameObject.SetActive(false);
        PlayAnimation(showAnim, 0, true);
    }
    private void HideLock()
    {
        GameController.Ins.LockPlay(true);
        showButton.gameObject.SetActive(true);
        PlayAnimation(hideAnim, 0, false);
        Reset();
    }
    public void PlayAnimation(List<Anim> anims, int currentIndex, bool IsShow)
    {
        if (!IsShow)
        {
            inputScene.SetActive(IsShow);
        }
        if (currentIndex >= anims.Count) return;
        Anim anim = anims[currentIndex];
        var animation = lockSkeleton.AnimationState.SetAnimation(0, anim.Key, anim.Loop);
        if (anim.Sounds.Count > 0)
        {
            foreach (Sound sound in anim.Sounds)
            {
                AudioController.Ins.PlaySFX(sound.Clip);
            }
        }

        if (!anim.Next)
        {
            animation.Complete += _ => GameController.Ins.LockPlay(false);
            return;
        }


        currentIndex++;
        animation.Complete += _ => PlayAnimation(anims, currentIndex, IsShow);
        if (IsShow)
        {
            animation.Complete += _ => inputScene.SetActive(IsShow);
        }
    }
    private void InputNumber(string number)
    {
        userInput += number;
        ShowInput();
        if (userInput.Length >= 4) CheckPassword();
    }
    private void ShowInput()
    {
        for (int i = 0; i < charText.Count; i++)
        {
            charText[i].text = i < userInput.Length ? userInput[i].ToString() : "-";
        }
    }
    private void CheckPassword()
    {
        if (userInput == password) StartCoroutine(Correct());
        else StartCoroutine(NotCorrect());
    }

    private void Reset()
    {
        userInput = EMPTY_STRING;
        ShowInput();
    }
    private IEnumerator Correct()
    {
        textScene.SetActive(false);
        correctScene.SetActive(true);
        yield return new WaitForSeconds(2);
        HideLock();
        showButton.gameObject.SetActive(false);
        GameController.Ins.LockPlay(false);
        activeArea.SetActive(true);
        GameController.Ins.PlayAnimation(activeObject, activeArea);
        yield return new WaitForSeconds(delayHide);
        gameObject.SetActive(false);
    }
    private IEnumerator NotCorrect()
    {
        textScene.SetActive(false);
        notCorrectScene.SetActive(true);
        yield return new WaitForSeconds(2);
        Reset();
        notCorrectScene.SetActive(false);
        textScene.SetActive(true);
    }
}
[System.Serializable]
public struct InputButton
{
    public Button Button;
    public string Number;
}
