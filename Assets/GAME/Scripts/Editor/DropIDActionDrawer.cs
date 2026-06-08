using System.Collections.Generic;
using Spine;
using Spine.Unity;
using UnityEditor;
using UnityEngine;

[CustomPropertyDrawer(typeof(DropIDAction))]
public class DropIDActionDrawer : PropertyDrawer
{
    private const float VerticalSpacing = 2f;

    public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)
    {
        EditorGUI.BeginProperty(position, label, property);

        var id = property.FindPropertyRelative("dragItemId");
        var animationName = property.FindPropertyRelative("animationName");
        var loop = property.FindPropertyRelative("loop");
        var soundEffects = property.FindPropertyRelative("soundEffects");
        var uiTextDuration = property.FindPropertyRelative("uiTextDuration");

        position.height = EditorGUIUtility.singleLineHeight;
        string title = id.intValue == 0 ? label.text : $"ID {id.intValue}";
        property.isExpanded = EditorGUI.Foldout(position, property.isExpanded, title, true);

        if (property.isExpanded)
        {
            EditorGUI.indentLevel++;

            position.y += EditorGUIUtility.singleLineHeight + VerticalSpacing;
            EditorGUI.PropertyField(position, id);

            position.y += EditorGUIUtility.singleLineHeight + VerticalSpacing;
            DrawAnimationPopup(position, property.serializedObject, animationName);

            position.y += EditorGUIUtility.singleLineHeight + VerticalSpacing;
            EditorGUI.PropertyField(position, loop);

            position.y += EditorGUIUtility.singleLineHeight + VerticalSpacing;
            position.height = EditorGUI.GetPropertyHeight(soundEffects, true);
            EditorGUI.PropertyField(position, soundEffects, true);

            position.y += position.height + VerticalSpacing;
            position.height = EditorGUIUtility.singleLineHeight;
            EditorGUI.PropertyField(position, uiTextDuration);

            EditorGUI.indentLevel--;
        }

        EditorGUI.EndProperty();
    }

    public override float GetPropertyHeight(SerializedProperty property, GUIContent label)
    {
        if (!property.isExpanded)
            return EditorGUIUtility.singleLineHeight;

        var soundEffects = property.FindPropertyRelative("soundEffects");
        return EditorGUIUtility.singleLineHeight * 5f
               + EditorGUI.GetPropertyHeight(soundEffects, true)
               + VerticalSpacing * 5f;
    }

    private static void DrawAnimationPopup(Rect position, SerializedObject serializedObject, SerializedProperty animationName)
    {
        var skeletonData = GetSkeletonData(serializedObject);
        if (skeletonData == null)
        {
            EditorGUI.PropertyField(position, animationName);
            return;
        }

        var names = new List<string> { string.Empty };
        var options = new List<GUIContent> { new GUIContent("<None>") };

        var animations = skeletonData.Animations;
        for (int i = 0; i < animations.Count; i++)
        {
            string name = animations.Items[i].Name;
            names.Add(name);
            options.Add(new GUIContent(name));
        }

        int selectedIndex = names.IndexOf(animationName.stringValue);
        if (selectedIndex < 0)
        {
            selectedIndex = names.Count;
            names.Add(animationName.stringValue);
            options.Add(new GUIContent($"Missing: {animationName.stringValue}"));
        }

        EditorGUI.BeginChangeCheck();
        int nextIndex = EditorGUI.Popup(position, new GUIContent(animationName.displayName), selectedIndex, options.ToArray());
        if (EditorGUI.EndChangeCheck())
            animationName.stringValue = names[nextIndex];
    }

    private static SkeletonData GetSkeletonData(SerializedObject serializedObject)
    {
        var skeletonGraphic = serializedObject.FindProperty("skeletonGraphic")?.objectReferenceValue as SkeletonGraphic;
        if (skeletonGraphic != null)
            return GetSkeletonData(skeletonGraphic);

        var mixSkeletonSkin = serializedObject.FindProperty("mixSkeletonSkin")?.objectReferenceValue as MixSkeletonSkin;
        if (mixSkeletonSkin != null && mixSkeletonSkin.skeletonAnimation != null)
            return GetSkeletonData(mixSkeletonSkin.skeletonAnimation);

        var component = serializedObject.targetObject as Component;
        if (component == null)
            return null;

        skeletonGraphic = component.GetComponent<SkeletonGraphic>();
        return skeletonGraphic != null ? GetSkeletonData(skeletonGraphic) : null;
    }

    private static SkeletonData GetSkeletonData(SkeletonGraphic skeletonGraphic)
    {
        if (skeletonGraphic.Skeleton != null && skeletonGraphic.Skeleton.Data != null)
            return skeletonGraphic.Skeleton.Data;

        return skeletonGraphic.skeletonDataAsset != null
            ? skeletonGraphic.skeletonDataAsset.GetSkeletonData(true)
            : null;
    }
}
