using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;

[RequireComponent(typeof(SkeletonGraphic))]
public class MedicineController : MonoBehaviour
{
    [SerializeField] private List<Med> skeletons;
    [SerializeField] private List<AudioClip> sounds;
    private SkeletonGraphic skeleton;
    private Dictionary<GameObject, Med> maps;
    private void Awake()
    {
        skeleton = GetComponent<SkeletonGraphic>();
        maps = new Dictionary<GameObject, Med>();
        skeletons.ForEach(s => maps.Add(s.Area, s));
    }
    public void PlayAnim(GameObject gameObject)
    {
        if (!maps.ContainsKey(gameObject)) return;
        var animation = skeleton.AnimationState.SetAnimation(0, maps[gameObject].Key, false);
        sounds.ForEach(s => AudioController.Ins.PlaySFX(s));
    }
}
[System.Serializable]
public struct Med
{
    public GameObject Area;
    [SerializeField, SpineAnimation(dataField = "skeletonAnimation")] public string Key;
}