using UnityEngine;
// using UnityEngine.EventSystems; // ❌ Không cần nữa
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

    private SkeletonAnimation targetSkeleton;
    public SkeletonAnimation playerSkeleton;

    private Action onDroppedCorrectly;

    [Header("Child Spine Animation")]
    public SkeletonAnimation childSkeleton;
    public SpriteRenderer childSpriteRenderer;
    public int childSortingOrderOffset;
    public int childSortingOrderOffsetSelected=40;
    [SpineAnimation("", "childSkeleton")] public string correctDropAnimation;
    [SpineSkin("", "playerSkeleton")] public string correctPlayerSkin;
    [SpineSkin("", "childSkeleton")] public string correctSkin;

    [Header("Callback Options")]
    [Tooltip("Nếu bật: onDroppedCorrectly sẽ chạy SAU khi correctDropAnimation chạy xong. " +
             "Nếu tắt (default): onDroppedCorrectly chạy NGAY khi bắt đầu animation.")]
    public bool waitCallbackUntilAnimComplete = false;

    private string initialAnimation;

    void Start()
    {
        if (childSpriteRenderer!=null)
        {
            childSortingOrderOffset= childSpriteRenderer.sortingOrder;
        }
        
        audioSource = GetComponent<AudioSource>();
        // Nếu muốn lấy vị trí ban đầu ngay khi start (phòng khi Init không được gọi)
        startPosition = transform.position;
    }

    public void Init(SkeletonAnimation target, Action callback)
    {
        targetSkeleton = target;
        onDroppedCorrectly = callback;
        startPosition = transform.position;

        if (childSkeleton != null)
        {
            var current = childSkeleton.AnimationState.GetCurrent(0);
            initialAnimation = current?.Animation?.Name ?? "";
        }
    }

    void Update()
    {
        if (LunaManager.ins.isEndGame)
            return;

        // ==========================
        // LẤY SỰ KIỆN MOUSE DOWN
        // ==========================
        if (Input.GetMouseButtonDown(0))
        {
            Vector3 mouseWorldPos = GetMouseWorldPos();
            // Kiểm tra xem click có trúng object này không
            Collider2D hit = Physics2D.OverlapPoint(mouseWorldPos);
            if (hit != null && hit.gameObject == gameObject)
            {
                if (!isDragging)
                {
                    audioSource?.Play();
                }

                if (childSpriteRenderer)
                {
                    childSpriteRenderer.sortingOrder = childSortingOrderOffsetSelected;
                }
                isDragging = true;
                offset = transform.position - mouseWorldPos;
            }
        }

        // ==========================
        // LẤY SỰ KIỆN MOUSE UP
        // ==========================
        if (Input.GetMouseButtonUp(0))
        {
            if (isDragging)
            {
                isDragging = false;
                HandleDrop();
            }
        }

        // ==========================
        // DRAG
        // ==========================
        if (isDragging)
        {
            transform.position = GetMouseWorldPos() + offset;
        }
    }

    private void HandleDrop()
    {
        if (IsOverlappingWithTarget())
        {
            Debug.Log("Dropped on correct target!");
            
            if (playerSkeleton != null)
            {
                playerSkeleton.Skeleton.SetSkin(correctSkin);
                playerSkeleton.Skeleton.SetToSetupPose();
                playerSkeleton.AnimationState.Apply(playerSkeleton.Skeleton); // Cập nhật lại ngay
            }
            if (childSkeleton != null)
            {
                childSkeleton.transform.position = targetSkeleton.transform.position;
                childSkeleton.Skeleton.SetSkin(correctSkin);
                childSkeleton.Skeleton.SetToSetupPose();
                childSkeleton.AnimationState.ClearTrack(0);

                // Có animation rơi đúng
                if (!string.IsNullOrEmpty(correctDropAnimation))
                {
                    var track = childSkeleton.AnimationState.SetAnimation(0, correctDropAnimation, false);

                    if (waitCallbackUntilAnimComplete)
                    {
                        // ❗ MODE 2: ĐỢI ANIMATION XONG RỒI MỚI GỌI CALLBACK
                        track.Complete += (entry) =>
                        {
                            Debug.Log("✅ Animation hoàn tất. Gọi callback rồi tắt object1.");
                            onDroppedCorrectly?.Invoke();
                            gameObject.SetActive(false);
                        };
                    }
                    else
                    {
                        // ✅ MODE 1 (DEFAULT): GỌI CALLBACK NGAY LẬP TỨC CÙNG LÚC VỚI ANIMATION
                        onDroppedCorrectly?.Invoke();

                        track.Complete += (entry) =>
                        {
                            Debug.Log("✅ Animation hoàn tất. Tắt object1.");
                            gameObject.SetActive(false);
                        };
                    }
                }
                else
                {
                    // Không có correctDropAnimation → cứ gọi callback và tắt luôn
                    onDroppedCorrectly?.Invoke();
                    gameObject.SetActive(false);
                }
            }
            else
            {
                // Không dùng childSkeleton → giữ logic cũ
                gameObject.SetActive(false);
                onDroppedCorrectly?.Invoke();
            }

            this.enabled = false;
        }
        else
        {
            
            Debug.Log("Dropped on wrong area. Returning to start.");
            ReturnToStart();
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
        if (childSpriteRenderer)
        {
            childSpriteRenderer.sortingOrder = childSortingOrderOffset;
        }
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
