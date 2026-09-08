using System;
using System.Collections;
using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;

[RequireComponent(typeof(SkeletonGraphic))]
public class AnimationController : MonoBehaviour
{
    [SerializeField] private SkeletonGraphic skeleton;
    [SerializeField] private List<ItemAction> actions;
    [SerializeField] private List<Anim> winAnim;
    [SerializeField] private List<Anim> failAnim;
    private Dictionary<GameObject, ItemAction> actionsMap;
    private void Awake()
    {
        InitActionMap();
    }
    private void Start()
    {
        if (winAnim.Count > 0) GameController.Ins.OnWin += () => PlayAnimation(winAnim, 0);
        if (failAnim.Count > 0) GameController.Ins.OnFail += () => PlayAnimation(failAnim, 0);
    }

    private void InitActionMap()
    {
        actionsMap = new Dictionary<GameObject, ItemAction>();
        foreach (ItemAction action in actions)
        {
            actionsMap.Add(action.ActionItem, action);
        }
    }

    public bool StartAction(GameObject item, GameObject area)
    {
        actionsMap.TryGetValue(item, out ItemAction action);
        if (action.IsEmpty || action.ActionArea != area) return false;
        Destroy(action.ActionArea);
        if (action.TimeDelayAnim > 0)
        {
            StartCoroutine(WaitToAct(action.TimeDelayAnim, () => PlayAnimation(action.Anim, 0)));
        }
        else
        {
            PlayAnimation(action.Anim, 0);
        }
        action.activeObj.ForEach(active =>
        {
            if (!active.IsSkip)
            {
                if (active.TimeDelayActive <= 0) active.Obj.SetActive(true);
                else StartCoroutine(WaitToAct(active.TimeDelayActive, () => active.Obj.SetActive(true)));
            }
        });
        return true;
    }
    public void PlayAnimation(List<Anim> anims, int currentIndex)
    {
        if (currentIndex >= anims.Count) return;

        Anim anim = anims[currentIndex];
        var animation = skeleton.AnimationState.SetAnimation(0, anim.Key, anim.Loop);
        if (anim.Sounds.Count > 0)
        {
            foreach (Sound sound in anim.Sounds)
            {
                StartCoroutine(WaitToAct(sound.TimeDelaySound, () => PlaySFX(sound.Clip)));
            }
        }

        if (!anim.Next)
        {
            animation.Complete += _ => GameController.Ins.LockPlay(false);
            return;
        }
        currentIndex++;
        if (anim.NextTime > 0)
        {
            StartCoroutine(WaitToAct(anim.NextTime, () => PlayAnimation(anims, currentIndex)));
            return;
        }
        animation.Complete += _ => PlayAnimation(anims, currentIndex);
    }
    private void PlaySFX(AudioClip clip)
    {
        AudioController.Ins.PlaySFX(clip);
    }
    private IEnumerator WaitToAct(float time, Action action)
    {
        yield return new WaitForSeconds(time);
        action?.Invoke();
    }
}
[System.Serializable]
public struct Anim
{
    [SerializeField, SpineAnimation(dataField = "skeletonAnimation")] public string Key;
    public List<Sound> Sounds;
    public bool Loop;
    public bool Next;
    public float NextTime;
}
[System.Serializable]
public struct Sound
{
    public float TimeDelaySound;
    public AudioClip Clip;
}
[System.Serializable]
public struct ItemAction
{
    public GameObject ActionItem;
    public GameObject ActionArea;
    public List<ActiveObject> activeObj;
    public float TimeDelayAnim;
    public List<Anim> Anim;
    public bool IsEmpty => !ActionItem || !ActionArea || (Anim == null);
}
[System.Serializable]
public struct ActiveObject
{
    public GameObject Obj;
    public float TimeDelayActive;
    public bool IsSkip => !Obj || Obj.activeSelf;
}
