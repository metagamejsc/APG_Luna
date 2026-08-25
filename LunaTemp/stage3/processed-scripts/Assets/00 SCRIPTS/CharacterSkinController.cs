using System;
using System.Collections.Generic;
using Spine;
using Spine.Unity;
using UnityEngine;
using static Spine.Skin;

public class CharacterSkinController : MonoBehaviour
{
    [SerializeField] private SkeletonGraphic skeletonAnimation;

    [SerializeField] List<Item> leftItems;
    [SerializeField] List<Item> rightItems;
    [SerializeField] Item lastItems;
    private Dictionary<GameObject, Action<bool>> actionMap;
    private bool isJacket;
    private string jacketKey;
    private Skeleton skeleton;
    private SkeletonData skeletonData;
    private CharacterSkin skin;

    private void Awake()
    {
        skeleton = skeletonAnimation.Skeleton;
        skeletonData = skeleton.Data;
        InitActionMap();
    }
    private void InitActionMap()
    {
        actionMap = new Dictionary<GameObject, Action<bool>>();
        foreach (Item item in leftItems)
        {
            actionMap.Add(item.ActiveItem, (isCorrect) =>
            {
                if (isCorrect) UpdatePiece(Piece.Face, "face_fun");
                else UpdatePiece(Piece.Face, "face_sad");
                PlayAnimation(Turn.Left, item.Piece, item.ActiveSkin);
                PlaySFX(item.ActiveSound);
            });
        }
        foreach (Item item in rightItems)
        {
            actionMap.Add(item.ActiveItem, (isCorrect) =>
            {
                if (isCorrect) UpdatePiece(Piece.Face, "face_fun");
                else UpdatePiece(Piece.Face, "face_sad");
                PlayAnimation(Turn.Right, item.Piece, item.ActiveSkin);
                PlaySFX(item.ActiveSound);
            });
        }
        actionMap.Add(lastItems.ActiveItem, (isCorrect) =>
        {
            UpdatePiece(Piece.Face, "face_fun");
            PlayAnimation(Turn.Last, lastItems.Piece, lastItems.ActiveSkin);
            PlaySFX(lastItems.ActiveSound);
        });
    }
    private void PlaySFX(AudioClip clip)
    {
        AudioController.Ins.PlaySFX(clip);
    }
    private void Start()
    {
        skin.SetSkin(
                bag: null,
                accessory: null,
                dress: null,
                glass: null,
                face: "face_normal",
                hair: "hair_normal",
                jacket: null,
                shoes: null,
                last: null
            );
        SetCharacter(skin);
        skeletonAnimation.AnimationState.SetAnimation(0, "idle", true);
    }
    public bool Action(GameObject key, bool isCorrect)
    {
        actionMap.TryGetValue(key, out Action<bool> action);
        if (action == null)
        {
            GameController.Ins.UnlockPlay();
            return false;
        }
        action?.Invoke(isCorrect);
        return true;
    }

    private void PlayAnimation(Turn turn, Piece piece, string key)
    {
        switch (turn)
        {
            case Turn.Left:
                GameController.Ins.Left();

                SetAnimation("actionR", false, () =>
                {
                    UpdatePiece(piece, key);
                });
                break;
            case Turn.Right:
                GameController.Ins.Right();
                SetAnimation("actionL", false, () =>
                {
                    UpdatePiece(piece, key);
                });
                break;
            case Turn.Last:
                UpdatePiece(piece, key);
                break;
            default:
                break;
        }
    }
    private void SetAnimation(string name, bool loop, Action action)
    {
        skeletonAnimation.AnimationState.ClearTracks();
        TrackEntry entry = skeletonAnimation.AnimationState.SetAnimation(0, name, loop);
        if (!loop)
        {
            if (action != null) entry.Complete += (trackEntry) => action.Invoke();
            entry.Complete += (trackEntry) =>
            {
                SetAnimation("idle", true, null);
                UpdatePiece(Piece.Face, "face_normal");
                GameController.Ins.UnlockPlay();
            };
        }
    }

    private void UpdatePiece(Piece piece, string key)
    {
        switch (piece)
        {
            case Piece.Bag:
                skin.Bag = key;
                break;
            case Piece.Accessory:
                skin.Accessory = key;
                break;
            case Piece.Dress:
                skin.Dress = key;
                break;
            case Piece.Glass:
                skin.Glass = key;
                break;
            case Piece.Face:
                skin.Face = key;
                break;
            case Piece.Hair:
                skin.Hair = key;
                break;
            case Piece.Jacket:
                skin.Jacket = key;
                isJacket = true;
                jacketKey = key;
                break;
            case Piece.Shoes:
                skin.Shoes = key;
                break;
            case Piece.Last:
                skin.Last = key;
                break;
            default:
                break;
        }
        SetCharacter(skin);
    }

    public void SetCharacter([Bridge.Ref] CharacterSkin skin)
    {
        // 1. Reset toàn bộ về default
        Skin defaultSkin = skeletonData.FindSkin(isJacket ? jacketKey : "default");

        if (defaultSkin == null)
        {
            Debug.LogError("Không tìm thấy skin: default");
            return;
        }

        skeleton.SetSkin(defaultSkin);
        skeleton.SetSlotsToSetupPose();

        // 2. Thêm từng nhóm skin
        ApplySkin(skin.Bag);
        ApplySkin(skin.Accessory);
        ApplySkin(skin.Dress);

        ApplySkin(skin.Glass);
        ApplySkin(skin.Face);
        ApplySkin(skin.Hair);

        //ApplySkin(skin.Jacket);
        ApplySkin(skin.Shoes);
        ApplySkin(skin.Last);

        // 3. Cập nhật skeleton
        skeleton.UpdateWorldTransform();
    }

    private void ApplySkin(string skinName)
    {
        if (string.IsNullOrEmpty(skinName))
        {
            return;
        }
        Skin skin = skeletonData.FindSkin(skinName);

        if (skin == null)
        {
            Debug.LogWarning($"Không tìm thấy skin: {skinName}");
            return;
        }

        foreach (SkinEntry entry in skin.Attachments)
        {
            Attachment attachment =
                skin.GetAttachment(entry.SlotIndex, entry.Name);

            if (attachment == null)
                continue;

            skeleton.Slots.Items[entry.SlotIndex].Attachment = attachment;
        }
    }
}
public struct CharacterSkin
{
    public string Bag;
    public string Accessory;
    public string Dress;
    public string Glass;
    public string Face;
    public string Hair;
    public string Jacket;
    public string Shoes;
    public string Last;

    public void SetSkin(
        string bag,
        string dress,
        string face,
        string glass,
        string hair,
        string jacket,
        string accessory,
        string shoes,
        string last)
    {
        Bag = bag;
        Accessory = accessory;
        Dress = dress;
        Glass = glass;
        Face = face;
        Hair = hair;
        Jacket = jacket;
        Shoes = shoes;
        Last = last;
    }
}
[System.Serializable]
public struct Item
{
    public Piece Piece;
    public GameObject ActiveItem;
    public string ActiveSkin;
    public AudioClip ActiveSound;
}
public enum Turn
{
    Left,
    Right,
    Last,
}
public enum Piece
{
    Bag,
    Accessory,
    Dress,
    Glass,
    Face,
    Hair,
    Jacket,
    Shoes,
    Last,
}
