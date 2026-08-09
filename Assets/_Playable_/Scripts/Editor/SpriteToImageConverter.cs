using UnityEditor;
using UnityEngine;
using UnityEngine.UI;

namespace Playable.EditorTools
{
    // Converts SpriteRenderer components (world-space) into UI Image components (Canvas/RectTransform),
    // preserving Sorting Layer + Order in Layer via a nested Canvas with overrideSorting enabled —
    // the only way a UI Graphic can respect those values the way a SpriteRenderer did.
    //
    // Position/size are NOT guaranteed to match visually after conversion — world-space units and
    // Canvas UI units are different coordinate systems. Image.SetNativeSize() gives a sensible
    // starting size (matching the sprite's native pixel size); re-parent under the Canvas and adjust
    // RectTransform anchoring/position/size by hand afterward.
    public static class SpriteToImageConverter
    {
        [MenuItem("Tools/Playable/Convert SpriteRenderer To Image (Preserve Sorting)")]
        private static void ConvertSelection()
        {
            GameObject[] selection = Selection.gameObjects;
            if (selection == null || selection.Length == 0)
            {
                Debug.LogWarning("[SpriteToImageConverter] No GameObject selected.");
                return;
            }

            Undo.SetCurrentGroupName("Convert SpriteRenderer To Image");
            int undoGroup = Undo.GetCurrentGroup();

            int convertedCount = 0;

            foreach (GameObject root in selection)
            {
                SpriteRenderer[] renderers = root.GetComponentsInChildren<SpriteRenderer>(true);
                foreach (SpriteRenderer spriteRenderer in renderers)
                {
                    Convert(spriteRenderer);
                    convertedCount++;
                }
            }

            Undo.CollapseUndoOperations(undoGroup);

            Debug.Log($"[SpriteToImageConverter] Converted {convertedCount} SpriteRenderer(s) to Image. " +
                       "Re-parent under the Canvas and adjust RectTransform position/size by hand.");
        }

        [MenuItem("Tools/Playable/Convert SpriteRenderer To Image (Preserve Sorting)", true)]
        private static bool ValidateConvertSelection()
        {
            return Selection.gameObjects != null && Selection.gameObjects.Length > 0;
        }

        private static void Convert(SpriteRenderer spriteRenderer)
        {
            GameObject go = spriteRenderer.gameObject;

            Sprite sprite = spriteRenderer.sprite;
            Color color = spriteRenderer.color;
            int sortingLayerId = spriteRenderer.sortingLayerID;
            int sortingOrder = spriteRenderer.sortingOrder;

            // Upgrade Transform -> RectTransform in place (no-op if already a RectTransform).
            if (go.GetComponent<RectTransform>() == null) Undo.AddComponent<RectTransform>(go);

            Undo.DestroyObjectImmediate(spriteRenderer);

            Image image = go.GetComponent<Image>();
            if (image == null) image = Undo.AddComponent<Image>(go);

            image.sprite = sprite;
            image.color = color;
            image.type = Image.Type.Simple;
            image.raycastTarget = false; // hit-testing is done via LunaRectGeometry/Input polling, not EventSystem
            if (sprite != null) image.SetNativeSize();

            Canvas sortCanvas = go.GetComponent<Canvas>();
            if (sortCanvas == null) sortCanvas = Undo.AddComponent<Canvas>(go);

            sortCanvas.overrideSorting = true;
            sortCanvas.sortingLayerID = sortingLayerId;
            sortCanvas.sortingOrder = sortingOrder;
        }
    }
}
