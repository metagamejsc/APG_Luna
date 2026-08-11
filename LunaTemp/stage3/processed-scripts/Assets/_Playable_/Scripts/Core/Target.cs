using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

[RequireComponent(typeof(RectTransform))]
public class Target : MonoBehaviour
{
    // Fired whenever a subclass detects a press within its own bounds (see TargetLevel37.Update).
    // Used e.g. to dismiss a one-shot tutorial hint as soon as the player touches the target.
    public static event System.Action AnyPressed;

    private static readonly List<Target> activeTargets = new List<Target>();

    [SerializeField] private bool _isInteractable = true;
    [SerializeField] private RectTransform targetRect;

    protected RectTransform TargetRect => targetRect;

    public bool IsInteractable
    {
        get => _isInteractable;
        set => _isInteractable = value;
    }

    private void Awake()
    {
        targetRect = GetComponent<RectTransform>();
        OnTargetInitialized();
    }

    private void OnEnable()
    {
        if (!activeTargets.Contains(this))
            activeTargets.Add(this);
    }

    private void OnDisable()
    {
        activeTargets.Remove(this);
    }

    // Bulk-enables/disables interaction on every currently active Target (any subtype).
    public static void SetAllInteractable(bool interactable)
    {
        for (int index = 0; index < activeTargets.Count; index++)
        {
            if (activeTargets[index] != null) activeTargets[index].IsInteractable = interactable;
        }
    }

    public static bool TryAcceptAny(Item item, RectTransform itemRect, out Target acceptedTarget)
    {
        for (int index = 0; index < activeTargets.Count; index++)
        {
            Target candidate = activeTargets[index];
            if (candidate == null || !candidate.TryAccept(item, itemRect))
                continue;

            acceptedTarget = candidate;
            return true;
        }

        acceptedTarget = null;
        return false;
    }

    public virtual bool TryAccept(Item item, RectTransform itemRect)
    {
        if (!_isInteractable) return false;

        if (!isActiveAndEnabled || targetRect == null || item == null || itemRect == null)
            return false;

        if (!LunaRectGeometry.Overlaps(itemRect, targetRect))
            return false;

        OnItemAccepted(item);

        return true;
    }

    protected virtual void OnItemAccepted(Item item)
    {
    }

    protected virtual void OnTargetInitialized()
    {
    }

    protected static void RaiseAnyPressed()
    {
        AnyPressed?.Invoke();
    }
}
