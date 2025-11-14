using UnityEngine;
using System;
using Spine.Unity;
using Spine;
using DG.Tweening;

[RequireComponent(typeof(Collider2D))]
public class DragHandler : MonoBehaviour
{
    private bool isDragging = false;
    private Vector3 offset;
    private Vector3 startPosition;
    private AudioSource audioSource;

    private SkeletonAnimation targetSkeleton; // object2
    private Action onDroppedCorrectly;

    [Header("Child Spine Animation")]
    public SkeletonAnimation childSkeleton; // <-- Gán ở inspector hoặc tự động tìm
    [SpineAnimation("","childSkeleton")]public string correctDropAnimation;
    [SpineSkin("","childSkeleton")]public string correctSkin;
    //[SpineAnimation("","childSkeleton")]public string wrongDropAnimation;

    private string initialAnimation;

    void Start()
    {
        audioSource = GetComponent<AudioSource>();
    }
    public void Init(SkeletonAnimation target, Action callback)
    {
        targetSkeleton = target;
        onDroppedCorrectly = callback;
        startPosition = transform.position;

        // Lấy lại animation gốc từ child
        if (childSkeleton != null)
        {
            var current = childSkeleton.AnimationState.GetCurrent(0);
            initialAnimation = current?.Animation?.Name ?? "";
        }
    }
    private void OnMouseDown()
    {
        if (LunaManager.ins.isEndGame)
        {
            return;
        }
        if (isDragging==false)
        {
            if (audioSource!=null)
            {
                audioSource.Play();
            }
        }
        isDragging = true;
        offset = transform.position - GetMouseWorldPos();
    }

    private void OnMouseUp()
    {
        if (LunaManager.ins.isEndGame)
        {
            return;
        }
        isDragging = false;

        if (IsOverlappingWithTarget())
        {
            Debug.Log("Dropped on correct target!");

            if (childSkeleton != null)
            {
                childSkeleton.transform.position = targetSkeleton.transform.position;

                childSkeleton.Skeleton.SetSkin(correctSkin);
                childSkeleton.Skeleton.SetToSetupPose();
                childSkeleton.AnimationState.ClearTrack(0);
                if (!string.IsNullOrEmpty(correctDropAnimation))
                {
                    var track = childSkeleton.AnimationState.SetAnimation(0, correctDropAnimation, false);

                    // Chờ animation kết thúc rồi tắt object1 và gọi callback
                    track.Complete += (entry) =>
                    {
                        Debug.Log("✅ Animation hoàn tất. Tắt object1.");
                        gameObject.SetActive(false);
                    };
                }
                
                onDroppedCorrectly?.Invoke();
            }
            else
            {
                // Không có Skeleton hoặc không có animation → tắt luôn
                gameObject.SetActive(false);
                onDroppedCorrectly?.Invoke();
            }

            this.enabled = false; // Ngăn kéo lại sau khi đúng
        }
        else
        {
            Debug.Log("Dropped on wrong area. Returning to start.");
            ReturnToStart();
        }
    }


    private void Update()
    {
        if (isDragging)
        {
            transform.position = GetMouseWorldPos() + offset;
        }
    }

    private Vector3 GetMouseWorldPos()
    {
        Vector3 mouse = Input.mousePosition;
        mouse.z = Camera.main.WorldToScreenPoint(transform.position).z;
        return Camera.main.ScreenToWorldPoint(mouse);
    }

    private bool IsOverlappingWithTarget()
    {
        if (targetSkeleton == null) return false;

        Collider2D myCol = GetComponent<Collider2D>();
        Collider2D targetCol = targetSkeleton.GetComponent<Collider2D>();

        if (myCol == null || targetCol == null) return false;

        return myCol.bounds.Intersects(targetCol.bounds);
    }

    private void ReturnToStart()
    {
        transform.DOMove(startPosition, 0.3f).SetEase(Ease.OutQuad)
            .OnComplete(() =>
            {
                if (childSkeleton != null && !string.IsNullOrEmpty(initialAnimation))
                {
                    childSkeleton.AnimationState.SetAnimation(0, initialAnimation, true);
                }
            });
    }
}
