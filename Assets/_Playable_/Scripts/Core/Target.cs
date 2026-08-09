using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

[RequireComponent(typeof(BoxCollider2D))]
public class Target : MonoBehaviour
{
    private static readonly List<Target> activeTargets = new List<Target>();

    [SerializeField] private BoxCollider2D targetCollider;

    protected BoxCollider2D TargetCollider => targetCollider;

    private void Awake()
    {
        targetCollider = GetComponent<BoxCollider2D>();
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

    public static bool TryAcceptAny(Item item, BoxCollider2D itemCollider, out Target acceptedTarget)
    {
        for (int index = 0; index < activeTargets.Count; index++)
        {
            Target candidate = activeTargets[index];
            if (candidate == null || !candidate.TryAccept(item, itemCollider))
                continue;

            acceptedTarget = candidate;
            return true;
        }

        acceptedTarget = null;
        return false;
    }

    public virtual bool TryAccept(Item item, BoxCollider2D itemCollider)
    {
        if (!isActiveAndEnabled || targetCollider == null || !targetCollider.enabled ||
            item == null || itemCollider == null)
            return false;

        if (!LunaBox2DGeometry.Intersects(itemCollider, targetCollider))
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