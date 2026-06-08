using System.Collections.Generic;
using Game.Gameplay;
using Spine;
using Spine.Unity;
using UnityEditor;
using UnityEngine;

namespace Game.Gameplay.Editor
{
    [CustomPropertyDrawer(typeof(AnimationStep))]
    public class AnimationStepDrawer : PropertyDrawer
    {
        private const float VerticalSpacing = 2f;

        public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)
        {
            EditorGUI.BeginProperty(position, label, property);

            position.height = EditorGUIUtility.singleLineHeight;
            property.isExpanded = EditorGUI.Foldout(position, property.isExpanded, label, true);

            if (property.isExpanded)
            {
                EditorGUI.indentLevel++;

                var animationName = property.FindPropertyRelative("animationName");
                var loop = property.FindPropertyRelative("loop");
                var mixDuration = property.FindPropertyRelative("mixDuration");
                var delay = property.FindPropertyRelative("delay");

                position.y += EditorGUIUtility.singleLineHeight + VerticalSpacing;
                DrawAnimationPopup(position, property, animationName);

                position.y += EditorGUIUtility.singleLineHeight + VerticalSpacing;
                EditorGUI.PropertyField(position, loop);

                position.y += EditorGUIUtility.singleLineHeight + VerticalSpacing;
                EditorGUI.PropertyField(position, mixDuration);

                position.y += EditorGUIUtility.singleLineHeight + VerticalSpacing;
                EditorGUI.PropertyField(position, delay);

                EditorGUI.indentLevel--;
            }

            EditorGUI.EndProperty();
        }

        public override float GetPropertyHeight(SerializedProperty property, GUIContent label)
        {
            if (!property.isExpanded)
                return EditorGUIUtility.singleLineHeight;

            return EditorGUIUtility.singleLineHeight * 5f + VerticalSpacing * 4f;
        }

        private static void DrawAnimationPopup(Rect position, SerializedProperty ownerProperty, SerializedProperty animationName)
        {
            var skeletonData = GetSkeletonData(ownerProperty.serializedObject);
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
            var animationRunner = serializedObject.FindProperty("animationRunner")?.objectReferenceValue as AnimationSequenceRunner;
            var skeletonGraphic = animationRunner != null
                ? animationRunner.GetComponent<SkeletonGraphic>()
                : null;

            if (skeletonGraphic != null)
                return GetSkeletonData(skeletonGraphic);

            var component = serializedObject.targetObject as Component;
            if (component == null)
                return null;

            skeletonGraphic = component.GetComponent<SkeletonGraphic>();
            if (skeletonGraphic == null)
                return null;

            return GetSkeletonData(skeletonGraphic);
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
}
