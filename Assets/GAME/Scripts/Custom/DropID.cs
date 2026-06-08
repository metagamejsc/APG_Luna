using System.Collections;
using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;

[System.Serializable]
public class DropIDAction
{
    public int dragItemId;
    public string animationName;
    public bool loop;
    public List<AudioClip> soundEffects = new List<AudioClip>();
    public float uiTextDuration = 1.5f;
}

public class DropID : MonoBehaviour
{
    // public int idDrop = 0;
    //public GameObject[] steps;
    // public SkeletonGraphic skeletonGraphic;
    // public string animationNameDefault = "idle";
    //public GameObject GridMan;
    //public List<GameObject> mans;
    public MixSkeletonSkin mixSkeletonSkin;
    public SkeletonGraphic skeletonGraphic;
    public RectTransform uiTextTarget;

    [Header("Drag Item ID Actions")]
    public List<DropIDAction> dragItemActions = new List<DropIDAction>
    {
        new DropIDAction { dragItemId = 1, animationName = "Slot 1,1_Keo Con Meo" },
        new DropIDAction { dragItemId = 2, animationName = "Slot 2_Guong Bat Quai" },
        new DropIDAction { dragItemId = 3, animationName = "Slot 3,1_Keo Den Pin" },
        new DropIDAction { dragItemId = 4, animationName = "Slot 4_Keo Lo Muoi" },
        new DropIDAction { dragItemId = 5, animationName = "Slot 5_Keo Binh Xit" },
        new DropIDAction { dragItemId = 6, animationName = "Slot 6_Keo Chai Ruou" },
        new DropIDAction { dragItemId = 71, animationName = "Slot 7,1_Keo Sau Rieng" },
        new DropIDAction { dragItemId = 72, animationName = "Slot 7,2_Keo Tai Nghe" },
        new DropIDAction { dragItemId = 8, animationName = "Slot 8_Keo Khan Lau Mat" },
        new DropIDAction { dragItemId = 9, animationName = "Slot 9_Keo Rui Cui Dien" },
        new DropIDAction { dragItemId = 11, animationName = "Slot 11,1_Keo Tuong Phat" },
    };

    //------------------------------------
    private string currentAnimation = "";
    private int currentStep = 0;
    private Collider2D boxCollider;
    private readonly HashSet<int> completedDragItemIds = new HashSet<int>();
    private Coroutine hideUITextCoroutine;


    void Awake()
    {
        if (mixSkeletonSkin == null)
            mixSkeletonSkin = GetComponent<MixSkeletonSkin>();
        if (skeletonGraphic == null && mixSkeletonSkin != null)
            skeletonGraphic = mixSkeletonSkin.skeletonAnimation;
        if (skeletonGraphic == null)
            skeletonGraphic = GetComponent<SkeletonGraphic>();

        boxCollider = GetComponent<Collider2D>();
        if (boxCollider != null)
            boxCollider.enabled = true;
        currentStep = 0;
        //NextStep();
        //currentAnimation = animationNameDefault;
        // SpineHelper.ChangeAnimation(skeletonGraphic, currentAnimation, true);
    }
    public void DragItem()
    {

        currentStep++;
        //NextStep();
        //CheckDone();
    }
    public void DragItemID(int id)
    {
        TryDragItemID(id);
    }

    public bool TryDragItemID(int id)
    {
        if (completedDragItemIds.Contains(id))
        {
            LunaManager.ins.SetIsDrag(true);
            return false;
        }

        var action = FindAction(id);
        if (action == null)
        {
            LunaManager.ins.SetIsDrag(true);
            return false;
        }

        completedDragItemIds.Add(id);
        currentStep++;
        PlayActionAnimation(action);
        PlaySoundEffects(action);
        ShowUIText(action);
        LunaManager.ins.SetIsDrag(true);
        return true;
    }

    private DropIDAction FindAction(int id)
    {
        if (dragItemActions == null)
            return null;

        for (int i = 0; i < dragItemActions.Count; i++)
        {
            var action = dragItemActions[i];
            if (action != null && action.dragItemId == id)
                return action;
        }

        currentAnimation = "";
        return null;
    }

    private void PlayActionAnimation(DropIDAction action)
    {
        if (action == null || string.IsNullOrEmpty(action.animationName))
            return;

        currentAnimation = action.animationName;

        if (mixSkeletonSkin != null)
        {
            mixSkeletonSkin.PlayAnimationOnly(action.animationName, action.loop);
            return;
        }

        if (skeletonGraphic == null || skeletonGraphic.AnimationState == null)
            return;

        skeletonGraphic.AnimationState.SetAnimation(0, action.animationName, action.loop);
    }

    private void PlaySoundEffects(DropIDAction action)
    {
        if (action == null || action.soundEffects == null || AudioController.Instance == null)
            return;

        for (int i = 0; i < action.soundEffects.Count; i++)
        {
            AudioClip clip = action.soundEffects[i];
            if (clip != null)
                AudioController.Instance.PlaySfx(clip);
        }
    }

    private void ShowUIText(DropIDAction action)
    {
        if (uiTextTarget == null || action == null)
            return;

        if (hideUITextCoroutine != null)
            StopCoroutine(hideUITextCoroutine);

        uiTextTarget.gameObject.SetActive(true);

        if (action.uiTextDuration > 0f)
            hideUITextCoroutine = StartCoroutine(HideUITextAfterDelay(action.uiTextDuration));
    }

    private IEnumerator HideUITextAfterDelay(float delay)
    {
        yield return new WaitForSeconds(delay);

        if (uiTextTarget != null)
            uiTextTarget.gameObject.SetActive(false);

        hideUITextCoroutine = null;
    }

    // void NextStep()
    // {
    //     if (steps.Length <= 0) return;
    //     foreach (var step in steps)
    //     {
    //         step.SetActive(false);
    //     }
    //     steps[currentStep].SetActive(true);
    // }
    // void CheckDone()
    // {
    //     if (currentStep == steps.Length - 1)
    //     {
    //         boxCollider.enabled = false;
    //     }
    // }
    void OnEnable()
    {
        GameController.OnUpgradePhase2 += EventUpgrade;
    }

    void OnDisable()
    {
        GameController.OnUpgradePhase2 -= EventUpgrade;
    }
    public void EventUpgrade()
    {
        print($"EventUpgrade called on {gameObject.name}");
        // if (spriteUpgrade != null && steps[0].gameObject.GetComponent<Image>() != null)
        // {
        //     steps[0].gameObject.GetComponent<Image>().sprite = spriteUpgrade;
        // }
    }
    public int GetCurrentStep()
    {
        return currentStep;
    }
}
