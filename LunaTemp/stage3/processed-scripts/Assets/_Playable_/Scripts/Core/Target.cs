using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

[RequireComponent(typeof(RectTransform))]
public class Target : MonoBehaviour
{
    private static readonly List<Target> activeTargets = new List<Target>();

    [SerializeField] private RectTransform targetRect;

    protected RectTransform TargetRect => targetRect;

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
}
