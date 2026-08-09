using UnityEngine;

#if UNITY_EDITOR
using UnityEditor;
#endif

[DisallowMultipleComponent]
[AddComponentMenu("Tools/Missing Script Cleaner")]
public sealed class MissingScriptCleaner : MonoBehaviour
{
#if UNITY_EDITOR
    private void Reset()
    {
        CleanHierarchy();
    }

    [ContextMenu("Clean Missing Scripts In Hierarchy")]
    private void CleanHierarchy()
    {
        int removedCount = 0;
        Transform[] transforms = GetComponentsInChildren<Transform>(true);

        Undo.RegisterFullObjectHierarchyUndo(gameObject, "Clean Missing Scripts");

        foreach (Transform current in transforms)
        {
            removedCount += GameObjectUtility.RemoveMonoBehavioursWithMissingScript(current.gameObject);
        }

        if (removedCount > 0)
        {
            Debug.Log(
                $"Removed {removedCount} missing script(s) from '{name}' and its children.",
                this);
        }
        else
        {
            Debug.Log($"No missing scripts found in '{name}' hierarchy.", this);
        }
    }
#endif
}
