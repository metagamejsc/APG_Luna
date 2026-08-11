using System.IO;
using System.Linq;
using UnityEditor;
using UnityEngine;

namespace Playable
{
    public static class SpineStraightAlphaConverter
    {
        [MenuItem("Tools/Spine/Convert Selected Atlas To Straight Alpha")]
        static void Convert()
        {
            var pngPaths = Selection.objects
                .Select(AssetDatabase.GetAssetPath)
                .Where(p => !string.IsNullOrEmpty(p) && p.EndsWith(".png"))
                .Distinct().ToArray();

            if (pngPaths.Length == 0)
            {
                EditorUtility.DisplayDialog("Spine", "Chọn file .png của atlas trong Project window trước.", "OK");
                return;
            }

            if (!EditorUtility.DisplayDialog("Spine",
                    $"Ghi đè {pngPaths.Length} file PNG, KHÔNG undo được.\n" +
                    "Chạy 2 lần trên cùng 1 file sẽ làm hỏng ảnh. Commit git trước khi chạy.\n\nTiếp tục?",
                    "Convert", "Cancel"))
                return;

            foreach (var png in pngPaths)
            {
                Unpremultiply(png);
                PatchAtlasFile(png);
                SetImporter(png);
            }

            AssetDatabase.Refresh();

            foreach (var png in pngPaths)
                FixMaterials(png);

            AssetDatabase.SaveAssets();
            Debug.Log($"[Spine] Đã convert {pngPaths.Length} atlas page sang straight alpha.");
        }

        // RGB đã bị nhân alpha lúc export -> chia ngược lại
        static void Unpremultiply(string path)
        {
            var tex = new Texture2D(2, 2, TextureFormat.RGBA32, false, false);
            tex.LoadImage(File.ReadAllBytes(path));

            var px = tex.GetPixels32();
            for (int i = 0; i < px.Length; i++)
            {
                int a = px[i].a;
                if (a == 0 || a == 255) continue;
                px[i].r = (byte)Mathf.Min(255, px[i].r * 255 / a);
                px[i].g = (byte)Mathf.Min(255, px[i].g * 255 / a);
                px[i].b = (byte)Mathf.Min(255, px[i].b * 255 / a);
            }
            tex.SetPixels32(px);

            File.WriteAllBytes(path, tex.EncodeToPNG());
            Object.DestroyImmediate(tex);
        }

        // Spine 4.x: header có dòng pma:true -> đổi thành false. Spine 3.8 không có dòng này.
        static void PatchAtlasFile(string pngPath)
        {
            var dir = Path.GetDirectoryName(pngPath);
            var pngName = Path.GetFileName(pngPath);

            foreach (var f in Directory.GetFiles(dir, "*.atlas*").Where(f => !f.EndsWith(".meta")))
            {
                var text = File.ReadAllText(f);
                if (!text.Contains(pngName)) continue;
                if (!text.Contains("pma:true") && !text.Contains("pma: true")) continue;

                File.WriteAllText(f, text.Replace("pma:true", "pma:false").Replace("pma: true", "pma: false"));
            }
        }

        static void SetImporter(string path)
        {
            if (!(AssetImporter.GetAtPath(path) is TextureImporter ti)) return;

            ti.textureType = TextureImporterType.Default;
            ti.sRGBTexture = true;
            ti.alphaIsTransparency = true;
            ti.alphaSource = TextureImporterAlphaSource.FromInput;
            ti.SaveAndReimport();
        }

        // Bật "Straight Alpha Texture" trên material dùng texture này (chỉ quét cùng thư mục)
        static void FixMaterials(string pngPath)
        {
            var tex = AssetDatabase.LoadAssetAtPath<Texture>(pngPath);
            var dir = Path.GetDirectoryName(pngPath);

            foreach (var guid in AssetDatabase.FindAssets("t:Material", new[] { dir }))
            {
                var mat = AssetDatabase.LoadAssetAtPath<Material>(AssetDatabase.GUIDToAssetPath(guid));
                if (mat == null || mat.mainTexture != tex) continue;
                if (!mat.HasProperty("_StraightAlphaInput")) continue;

                mat.SetFloat("_StraightAlphaInput", 1f);
                mat.EnableKeyword("_STRAIGHT_ALPHA_INPUT");
                EditorUtility.SetDirty(mat);
            }
        }
    }
}