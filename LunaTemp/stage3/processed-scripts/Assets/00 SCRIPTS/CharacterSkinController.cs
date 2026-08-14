using System;
using System.Collections.Generic;
using Spine;
using Spine.Unity;
using UnityEngine;
using static Spine.Skin;

public class CharacterSkinController : MonoBehaviour
{
    [SerializeField] private SkeletonGraphic skeletonAnimation;
    [SerializeField] private SkeletonDataAsset thinData;

    [SerializeField] private Item smallFace;
    [SerializeField] private Item smallBody;
    [SerializeField] private Item accessory;
    [SerializeField] private Item dress;
    [SerializeField] private Item glass;
    [SerializeField] private Item face;
    [SerializeField] private Item hair;
    [SerializeField] private Item legHair;
    [SerializeField] private Item smoke;
    [SerializeField] private Item sock;

    private Dictionary<GameObject, Action> actionMap;


    private bool thinFace;
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
        actionMap = new Dictionary<GameObject, Action>();
        actionMap.Add(smallFace.ActiveItem, () =>
        {
            PlayAnimation(Piece.ThinFace);
            PlaySFX(smallFace.ActiveSound);
        });

        actionMap.Add(smallBody.ActiveItem, () =>
        {
            ThinBody();
            PlaySFX(smallBody.ActiveSound);
        });

        actionMap.Add(accessory.ActiveItem, () =>
        {
            UpdatePiece(Piece.Accessory);
            PlaySFX(accessory.ActiveSound);
        });

        actionMap.Add(dress.ActiveItem, () =>
        {
            UpdatePiece(Piece.Dress);
            PlaySFX(dress.ActiveSound);
        });

        actionMap.Add(glass.ActiveItem, () =>
        {
            PlayAnimation(Piece.Glass);
            PlaySFX(glass.ActiveSound);
        });

        actionMap.Add(face.ActiveItem, () =>
        {
            PlayAnimation(Piece.Face);
            PlaySFX(face.ActiveSound);
        });

        actionMap.Add(hair.ActiveItem, () =>
        {
            PlayAnimation(Piece.Hair);
            PlaySFX(hair.ActiveSound);
        });

        actionMap.Add(legHair.ActiveItem, () =>
        {
            PlayAnimation(Piece.LegHair);
            PlaySFX(legHair.ActiveSound);
        });

        actionMap.Add(smoke.ActiveItem, () =>
        {
            PlayAnimation(Piece.Smoke);
            PlaySFX(smoke.ActiveSound);
        });

        actionMap.Add(sock.ActiveItem, () =>
        {
            UpdatePiece(Piece.Sock);
            PlaySFX(sock.ActiveSound);
        });
    }
    private void PlaySFX(AudioClip clip)
    {
        if (clip) AudioController.Ins.PlaySFX(clip);
    }
    private void Start()
    {
        skin.SetSkin(
                accessory: null,
                dress: "dress1",
                glass: new SkinState(fat: "fat_glass", thin: "thin_glass"),
                face: new SkinState(fat: "fat_face1", thin: "thin_face1"),
                hair: new SkinState(fat: "fat_hair1", thin: "thin_hair1"),
                legHair: "longchan",
                smoke: "smoke",
                sock: null
            );
        SetCharacter(skin);
        skeletonAnimation.AnimationState.SetAnimation(0, "idle", true);
    }
    public bool Action(GameObject key)
    {
        actionMap.TryGetValue(key, out Action action);
        if (action == null)
        {
            GameController.Ins.LockPlay(false);
            return false;
        }
        action?.Invoke();
        return true;
    }
    private void ThinBody()
    {
        skeletonAnimation.skeletonDataAsset = thinData;
        skeletonAnimation.Initialize(true);

        skeleton = skeletonAnimation.Skeleton;
        skeletonData = skeleton.Data;

        SetCharacter(skin);
        skeletonAnimation.AnimationState.SetAnimation(0, "idle", true);
    }

    private void ThinFace()
    {
        thinFace = true;

        SetCharacter(skin);
    }
    private void PlayAnimation(Piece piece)
    {
        switch (piece)
        {
            case Piece.ThinFace:
                SetAnimation("face_thin", false, ThinFace);
                break;
            case Piece.Glass:
                SetAnimation("action_kinh", false, () => UpdatePiece(Piece.Glass));
                break;
            case Piece.Face:
                SetAnimation("makeup", false, () => UpdatePiece(Piece.Face));
                break;
            case Piece.Hair:
                SetAnimation("action_hair", false, () => UpdatePiece(Piece.Hair));
                break;
            case Piece.LegHair:
                SetAnimation("action_longchan", false, () => UpdatePiece(Piece.LegHair));
                break;
            case Piece.Smoke:
                SetAnimation("action_nuochoa", false, () => UpdatePiece(Piece.Smoke));
                break;
            default:
                break;
        }
    }
    private void SetAnimation(string name, bool loop, Action action)
    {
        TrackEntry entry = skeletonAnimation.AnimationState.SetAnimation(0, name, loop);
        if (!loop)
        {
            if (action != null) entry.Complete += (trackEntry) => action.Invoke();
            entry.Complete += (trackEntry) => SetAnimation("idle", true, null);
        }
    }

    private void UpdatePiece(Piece piece)
    {
        switch (piece)
        {
            case Piece.Accessory:
                skin.Accessory = "bangdo";
                break;
            case Piece.Dress:
                skin.Dress = "dress2";
                break;
            case Piece.Glass:
                skin.Glass = new SkinState(fat: null, thin: null);
                break;
            case Piece.Face:
                skin.Face = new SkinState(fat: "fat_face2", thin: "thin_face2");
                break;
            case Piece.Hair:
                skin.Hair = new SkinState(fat: "fat_hair2", thin: "thin_hair2"); break;
            case Piece.LegHair:
                skin.LegHair = null;
                break;
            case Piece.Smoke:
                skin.Smoke = null;
                break;
            case Piece.Sock:
                skin.Sock = "sock";
                break;
            default:
                break;
        }
        SetCharacter(skin);
    }

    public void SetCharacter([Bridge.Ref] CharacterSkin skin)
    {
        // 1. Reset toàn bộ về default
        Skin defaultSkin = skeletonData.FindSkin("default");

        if (defaultSkin == null)
        {
            Debug.LogError("Không tìm thấy skin: default");
            return;
        }

        skeleton.SetSkin(defaultSkin);
        skeleton.SetSlotsToSetupPose();

        // 2. Thêm từng nhóm skin

        ApplySkin(skin.Accessory);
        ApplySkin(skin.Dress);

        ApplySkin(thinFace ? skin.Glass.Thin : skin.Glass.Fat);
        ApplySkin(thinFace ? skin.Face.Thin : skin.Face.Fat);
        ApplySkin(thinFace ? skin.Hair.Thin : skin.Hair.Fat);

        ApplySkin(skin.LegHair);
        ApplySkin(skin.Smoke);
        ApplySkin(skin.Sock);

        // 3. Cập nhật skeleton
        skeleton.UpdateWorldTransform();

        GameController.Ins.LockPlay(false);
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
    public string Accessory;
    public string Dress;
    public SkinState Glass;
    public SkinState Face;
    public SkinState Hair;
    public string LegHair;
    public string Smoke;
    public string Sock;

    public void SetSkin(string accessory, string dress, [Bridge.Ref] SkinState glass, [Bridge.Ref] SkinState face, [Bridge.Ref] SkinState hair, string legHair, string smoke, string sock)
    {
        Accessory = accessory;
        Dress = dress;
        Glass = glass;
        Face = face;
        Hair = hair;
        LegHair = legHair;
        Smoke = smoke;
        Sock = sock;
    }
}
[System.Serializable]
public struct Item
{
    public GameObject ActiveItem;
    public AudioClip ActiveSound;
}
public struct SkinState
{
    public string Fat;
    public string Thin;
    public SkinState(string fat, string thin)
    {
        Fat = fat;
        Thin = thin;
    }
}
public enum Piece
{
    ThinFace,
    Accessory,
    Dress,
    Glass,
    Face,
    Hair,
    LegHair,
    Smoke,
    Sock,
}
