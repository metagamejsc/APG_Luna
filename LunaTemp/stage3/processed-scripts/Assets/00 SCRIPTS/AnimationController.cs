using System;
using System.Collections;
using System.Collections.Generic;
using Spine;
using Spine.Unity;
using UnityEngine;

[RequireComponent(typeof(SkeletonGraphic))]
public class AnimationController : MonoBehaviour
{
    [SerializeField] private bool hasSpecialItem;
    [SerializeField] private GameObject specialItem;
    [SerializeField] private bool activeSpecial;

    [SerializeField] private SkeletonGraphic skeleton;
    [SerializeField] private List<DropAction> actions;
    private Dictionary<GameObject, DropAction> actionsMap;
    private void Awake()
    {
        actionsMap = new Dictionary<GameObject, DropAction>();
        foreach (DropAction action in actions)
        {
            actionsMap.Add(action.Item, action);
        }
    }
    public bool StartAction(GameObject item)
    {
        if (!actionsMap.TryGetValue(item, out DropAction action) || action.IsEmpty) return false;

        if (item == specialItem) activeSpecial = true;
        if (hasSpecialItem == true && activeSpecial == true)
        {
            Delay(action.DelayTime, () => Action(action.AnimSpecial, 0));
        }
        else
        {
            Delay(action.DelayTime, () => Action(action.AnimNormal, 0));
        }
        return true;
    }

    public void Action(List<Anim> anims, int currentIndex)
    {
        if (currentIndex >= anims.Count) return;

        Anim anim = anims[currentIndex];
        if (anim.ActiveObject) anim.ActiveObject.SetActive(true);

        TrackEntry animation = PlayAnimation(anim.KeyAnim, true);
        if (anim.Sounds.Count > 0)
        {
            foreach (Sound sound in anim.Sounds)
            {
                Delay(sound.TimeDelay, () => AudioController.Ins.PlaySFX(sound.Clip));
            }
        }

        if (anim.Next)
        {
            currentIndex++;
            Delay(anim.NextTime, () =>
            {
                if (anim.ActiveObject) anim.ActiveObject.SetActive(false);
                if (anim.ChangeSkin)
                {
                    skeleton.Skeleton.SetSkin(anim.KeySkin);
                    skeleton.Skeleton.SetSlotsToSetupPose();
                }
                Action(anims, currentIndex);
            });
        }

        else if (anim.UnlockPlay)
        {
            GameController.Ins.LockPlay(false);
        }
    }
    private void ActionOnEndFirstLoop(TrackEntry entry, Action action)
    {
        entry.Complete -= (en) => ActionOnEndFirstLoop(en, action);
        action?.Invoke();
    }
    public TrackEntry PlayAnimation(string key, bool loop)
    {
        return skeleton.AnimationState.SetAnimation(0, key, loop);
    }
    private void Delay(float time, Action action)
    {
        if (time <= 0)
        {
            action();
            return;
        }
        StartCoroutine(WaitToAct(time, action));
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
    [SpineAnimation(dataField = "skeletonAnimation")] public string KeyAnim;
    public List<Sound> Sounds;
    public bool Next;
    public float NextTime;
    public GameObject ActiveObject;
    public bool UnlockPlay;
    public bool ChangeSkin;
    [SpineSkin(dataField = "skeletonSkin")] public string KeySkin;
    public bool IsEmpty => KeyAnim == null || KeyAnim == string.Empty;
}
[System.Serializable]
public struct Sound
{
    public float TimeDelay;
    public AudioClip Clip;
}
[System.Serializable]
public struct DropAction
{
    public GameObject Item;
    public float DelayTime;
    public List<Anim> AnimNormal;
    public List<Anim> AnimSpecial;
    public bool IsEmpty => !Item;
}
