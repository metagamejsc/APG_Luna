var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2840 = root || request.c( 'UnityEngine.JointSpring' )
  var i2841 = data
  i2840.spring = i2841[0]
  i2840.damper = i2841[1]
  i2840.targetPosition = i2841[2]
  return i2840
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2842 = root || request.c( 'UnityEngine.JointMotor' )
  var i2843 = data
  i2842.m_TargetVelocity = i2843[0]
  i2842.m_Force = i2843[1]
  i2842.m_FreeSpin = i2843[2]
  return i2842
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2844 = root || request.c( 'UnityEngine.JointLimits' )
  var i2845 = data
  i2844.m_Min = i2845[0]
  i2844.m_Max = i2845[1]
  i2844.m_Bounciness = i2845[2]
  i2844.m_BounceMinVelocity = i2845[3]
  i2844.m_ContactDistance = i2845[4]
  i2844.minBounce = i2845[5]
  i2844.maxBounce = i2845[6]
  return i2844
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2846 = root || request.c( 'UnityEngine.JointDrive' )
  var i2847 = data
  i2846.m_PositionSpring = i2847[0]
  i2846.m_PositionDamper = i2847[1]
  i2846.m_MaximumForce = i2847[2]
  i2846.m_UseAcceleration = i2847[3]
  return i2846
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2848 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2849 = data
  i2848.m_Spring = i2849[0]
  i2848.m_Damper = i2849[1]
  return i2848
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2850 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2851 = data
  i2850.m_Limit = i2851[0]
  i2850.m_Bounciness = i2851[1]
  i2850.m_ContactDistance = i2851[2]
  return i2850
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2852 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2853 = data
  i2852.m_ExtremumSlip = i2853[0]
  i2852.m_ExtremumValue = i2853[1]
  i2852.m_AsymptoteSlip = i2853[2]
  i2852.m_AsymptoteValue = i2853[3]
  i2852.m_Stiffness = i2853[4]
  return i2852
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2854 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2855 = data
  i2854.m_LowerAngle = i2855[0]
  i2854.m_UpperAngle = i2855[1]
  return i2854
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2856 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2857 = data
  i2856.m_MotorSpeed = i2857[0]
  i2856.m_MaximumMotorTorque = i2857[1]
  return i2856
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2858 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2859 = data
  i2858.m_DampingRatio = i2859[0]
  i2858.m_Frequency = i2859[1]
  i2858.m_Angle = i2859[2]
  return i2858
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2860 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2861 = data
  i2860.m_LowerTranslation = i2861[0]
  i2860.m_UpperTranslation = i2861[1]
  return i2860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2863 = data
  i2862.name = i2863[0]
  i2862.width = i2863[1]
  i2862.height = i2863[2]
  i2862.mipmapCount = i2863[3]
  i2862.anisoLevel = i2863[4]
  i2862.filterMode = i2863[5]
  i2862.hdr = !!i2863[6]
  i2862.format = i2863[7]
  i2862.wrapMode = i2863[8]
  i2862.alphaIsTransparency = !!i2863[9]
  i2862.alphaSource = i2863[10]
  i2862.graphicsFormat = i2863[11]
  i2862.sRGBTexture = !!i2863[12]
  i2862.desiredColorSpace = i2863[13]
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2864 = root || new pc.UnityMaterial()
  var i2865 = data
  i2864.name = i2865[0]
  request.r(i2865[1], i2865[2], 0, i2864, 'shader')
  i2864.renderQueue = i2865[3]
  i2864.enableInstancing = !!i2865[4]
  var i2867 = i2865[5]
  var i2866 = []
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2867[i + 0]) );
  }
  i2864.floatParameters = i2866
  var i2869 = i2865[6]
  var i2868 = []
  for(var i = 0; i < i2869.length; i += 1) {
    i2868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2869[i + 0]) );
  }
  i2864.colorParameters = i2868
  var i2871 = i2865[7]
  var i2870 = []
  for(var i = 0; i < i2871.length; i += 1) {
    i2870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2871[i + 0]) );
  }
  i2864.vectorParameters = i2870
  var i2873 = i2865[8]
  var i2872 = []
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2873[i + 0]) );
  }
  i2864.textureParameters = i2872
  var i2875 = i2865[9]
  var i2874 = []
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2875[i + 0]) );
  }
  i2864.materialFlags = i2874
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2879 = data
  i2878.name = i2879[0]
  i2878.value = i2879[1]
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2883 = data
  i2882.name = i2883[0]
  i2882.value = new pc.Color(i2883[1], i2883[2], i2883[3], i2883[4])
  return i2882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2887 = data
  i2886.name = i2887[0]
  i2886.value = new pc.Vec4( i2887[1], i2887[2], i2887[3], i2887[4] )
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2891 = data
  i2890.name = i2891[0]
  request.r(i2891[1], i2891[2], 0, i2890, 'value')
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2895 = data
  i2894.name = i2895[0]
  i2894.enabled = !!i2895[1]
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2897 = data
  i2896.name = i2897[0]
  i2896.index = i2897[1]
  i2896.startup = !!i2897[2]
  return i2896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2899 = data
  i2898.position = new pc.Vec3( i2899[0], i2899[1], i2899[2] )
  i2898.scale = new pc.Vec3( i2899[3], i2899[4], i2899[5] )
  i2898.rotation = new pc.Quat(i2899[6], i2899[7], i2899[8], i2899[9])
  return i2898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2901 = data
  i2900.enabled = !!i2901[0]
  i2900.aspect = i2901[1]
  i2900.orthographic = !!i2901[2]
  i2900.orthographicSize = i2901[3]
  i2900.backgroundColor = new pc.Color(i2901[4], i2901[5], i2901[6], i2901[7])
  i2900.nearClipPlane = i2901[8]
  i2900.farClipPlane = i2901[9]
  i2900.fieldOfView = i2901[10]
  i2900.depth = i2901[11]
  i2900.clearFlags = i2901[12]
  i2900.cullingMask = i2901[13]
  i2900.rect = i2901[14]
  request.r(i2901[15], i2901[16], 0, i2900, 'targetTexture')
  i2900.usePhysicalProperties = !!i2901[17]
  i2900.focalLength = i2901[18]
  i2900.sensorSize = new pc.Vec2( i2901[19], i2901[20] )
  i2900.lensShift = new pc.Vec2( i2901[21], i2901[22] )
  i2900.gateFit = i2901[23]
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2903 = data
  i2902.name = i2903[0]
  i2902.tagId = i2903[1]
  i2902.enabled = !!i2903[2]
  i2902.isStatic = !!i2903[3]
  i2902.layer = i2903[4]
  return i2902
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2904 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2905 = data
  request.r(i2905[0], i2905[1], 0, i2904, 'm_FirstSelected')
  i2904.m_sendNavigationEvents = !!i2905[2]
  i2904.m_DragThreshold = i2905[3]
  return i2904
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2906 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2907 = data
  i2906.m_HorizontalAxis = i2907[0]
  i2906.m_VerticalAxis = i2907[1]
  i2906.m_SubmitButton = i2907[2]
  i2906.m_CancelButton = i2907[3]
  i2906.m_InputActionsPerSecond = i2907[4]
  i2906.m_RepeatDelay = i2907[5]
  i2906.m_ForceModuleActive = !!i2907[6]
  i2906.m_SendPointerHoverToParent = !!i2907[7]
  return i2906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2909 = data
  i2908.pivot = new pc.Vec2( i2909[0], i2909[1] )
  i2908.anchorMin = new pc.Vec2( i2909[2], i2909[3] )
  i2908.anchorMax = new pc.Vec2( i2909[4], i2909[5] )
  i2908.sizeDelta = new pc.Vec2( i2909[6], i2909[7] )
  i2908.anchoredPosition3D = new pc.Vec3( i2909[8], i2909[9], i2909[10] )
  i2908.rotation = new pc.Quat(i2909[11], i2909[12], i2909[13], i2909[14])
  i2908.scale = new pc.Vec3( i2909[15], i2909[16], i2909[17] )
  return i2908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2911 = data
  i2910.enabled = !!i2911[0]
  i2910.planeDistance = i2911[1]
  i2910.referencePixelsPerUnit = i2911[2]
  i2910.isFallbackOverlay = !!i2911[3]
  i2910.renderMode = i2911[4]
  i2910.renderOrder = i2911[5]
  i2910.sortingLayerName = i2911[6]
  i2910.sortingOrder = i2911[7]
  i2910.scaleFactor = i2911[8]
  request.r(i2911[9], i2911[10], 0, i2910, 'worldCamera')
  i2910.overrideSorting = !!i2911[11]
  i2910.pixelPerfect = !!i2911[12]
  i2910.targetDisplay = i2911[13]
  i2910.overridePixelPerfect = !!i2911[14]
  return i2910
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2912 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2913 = data
  i2912.m_UiScaleMode = i2913[0]
  i2912.m_ReferencePixelsPerUnit = i2913[1]
  i2912.m_ScaleFactor = i2913[2]
  i2912.m_ReferenceResolution = new pc.Vec2( i2913[3], i2913[4] )
  i2912.m_ScreenMatchMode = i2913[5]
  i2912.m_MatchWidthOrHeight = i2913[6]
  i2912.m_PhysicalUnit = i2913[7]
  i2912.m_FallbackScreenDPI = i2913[8]
  i2912.m_DefaultSpriteDPI = i2913[9]
  i2912.m_DynamicPixelsPerUnit = i2913[10]
  i2912.m_PresetInfoIsWorld = !!i2913[11]
  return i2912
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2914 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2915 = data
  i2914.m_IgnoreReversedGraphics = !!i2915[0]
  i2914.m_BlockingObjects = i2915[1]
  i2914.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2915[2] )
  return i2914
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i2916 = root || request.c( 'LunaManager' )
  var i2917 = data
  var i2919 = i2917[0]
  var i2918 = []
  for(var i = 0; i < i2919.length; i += 2) {
  request.r(i2919[i + 0], i2919[i + 1], 2, i2918, '')
  }
  i2916.lstBtnInstall = i2918
  request.r(i2917[1], i2917[2], 0, i2916, 'StartCard')
  request.r(i2917[3], i2917[4], 0, i2916, 'EndCard')
  i2916.countPlay = i2917[5]
  i2916.countPlayFinal = i2917[6]
  i2916.countPlayMax = i2917[7]
  i2916.timeDropFinal = i2917[8]
  i2916.colorBG = new pc.Color(i2917[9], i2917[10], i2917[11], i2917[12])
  request.r(i2917[13], i2917[14], 0, i2916, 'texture2D')
  request.r(i2917[15], i2917[16], 0, i2916, 'rawImageBG')
  request.r(i2917[17], i2917[18], 0, i2916, 'textProgess')
  request.r(i2917[19], i2917[20], 0, i2916, 'imgProgess')
  request.r(i2917[21], i2917[22], 0, i2916, 'timeText')
  return i2916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2923 = data
  i2922.cullTransparentMesh = !!i2923[0]
  return i2922
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2924 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2925 = data
  request.r(i2925[0], i2925[1], 0, i2924, 'm_Texture')
  i2924.m_UVRect = UnityEngine.Rect.MinMaxRect(i2925[2], i2925[3], i2925[4], i2925[5])
  request.r(i2925[6], i2925[7], 0, i2924, 'm_Material')
  i2924.m_Maskable = !!i2925[8]
  i2924.m_Color = new pc.Color(i2925[9], i2925[10], i2925[11], i2925[12])
  i2924.m_RaycastTarget = !!i2925[13]
  i2924.m_RaycastPadding = new pc.Vec4( i2925[14], i2925[15], i2925[16], i2925[17] )
  return i2924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2927 = data
  request.r(i2927[0], i2927[1], 0, i2926, 'clip')
  request.r(i2927[2], i2927[3], 0, i2926, 'outputAudioMixerGroup')
  i2926.playOnAwake = !!i2927[4]
  i2926.loop = !!i2927[5]
  i2926.time = i2927[6]
  i2926.volume = i2927[7]
  i2926.pitch = i2927[8]
  i2926.enabled = !!i2927[9]
  return i2926
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2928 = root || request.c( 'UnityEngine.UI.Image' )
  var i2929 = data
  request.r(i2929[0], i2929[1], 0, i2928, 'm_Sprite')
  i2928.m_Type = i2929[2]
  i2928.m_PreserveAspect = !!i2929[3]
  i2928.m_FillCenter = !!i2929[4]
  i2928.m_FillMethod = i2929[5]
  i2928.m_FillAmount = i2929[6]
  i2928.m_FillClockwise = !!i2929[7]
  i2928.m_FillOrigin = i2929[8]
  i2928.m_UseSpriteMesh = !!i2929[9]
  i2928.m_PixelsPerUnitMultiplier = i2929[10]
  request.r(i2929[11], i2929[12], 0, i2928, 'm_Material')
  i2928.m_Maskable = !!i2929[13]
  i2928.m_Color = new pc.Color(i2929[14], i2929[15], i2929[16], i2929[17])
  i2928.m_RaycastTarget = !!i2929[18]
  i2928.m_RaycastPadding = new pc.Vec4( i2929[19], i2929[20], i2929[21], i2929[22] )
  return i2928
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i2930 = root || request.c( 'DraggableItem' )
  var i2931 = data
  i2930.idDrag = i2931[0]
  i2930.isProcess = !!i2931[1]
  return i2930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2933 = data
  i2932.m_Alpha = i2933[0]
  i2932.m_Interactable = !!i2933[1]
  i2932.m_BlocksRaycasts = !!i2933[2]
  i2932.m_IgnoreParentGroups = !!i2933[3]
  i2932.enabled = !!i2933[4]
  return i2932
}

Deserializers["DropZone"] = function (request, data, root) {
  var i2934 = root || request.c( 'DropZone' )
  var i2935 = data
  i2934.idDrop = i2935[0]
  var i2937 = i2935[1]
  var i2936 = []
  for(var i = 0; i < i2937.length; i += 2) {
  request.r(i2937[i + 0], i2937[i + 1], 2, i2936, '')
  }
  i2934.steps = i2936
  return i2934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2941 = data
  i2940.enabled = !!i2941[0]
  i2940.isTrigger = !!i2941[1]
  i2940.usedByEffector = !!i2941[2]
  i2940.density = i2941[3]
  i2940.offset = new pc.Vec2( i2941[4], i2941[5] )
  request.r(i2941[6], i2941[7], 0, i2940, 'material')
  i2940.usedByComposite = !!i2941[8]
  i2940.autoTiling = !!i2941[9]
  var i2943 = i2941[10]
  var i2942 = []
  for(var i = 0; i < i2943.length; i += 1) {
  var i2945 = i2943[i + 0]
  var i2944 = []
  for(var i = 0; i < i2945.length; i += 2) {
    i2944.push( new pc.Vec2( i2945[i + 0], i2945[i + 1] ) );
  }
    i2942.push( i2944 );
  }
  i2940.points = i2942
  return i2940
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2952 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2953 = data
  request.r(i2953[0], i2953[1], 0, i2952, 'skeletonDataAsset')
  request.r(i2953[2], i2953[3], 0, i2952, 'additiveMaterial')
  request.r(i2953[4], i2953[5], 0, i2952, 'multiplyMaterial')
  request.r(i2953[6], i2953[7], 0, i2952, 'screenMaterial')
  i2952.initialSkinName = i2953[8]
  i2952.initialFlipX = !!i2953[9]
  i2952.initialFlipY = !!i2953[10]
  i2952.startingAnimation = i2953[11]
  i2952.startingLoop = !!i2953[12]
  i2952.timeScale = i2953[13]
  i2952.freeze = !!i2953[14]
  i2952.layoutScaleMode = i2953[15]
  i2952.updateWhenInvisible = i2953[16]
  i2952.allowMultipleCanvasRenderers = !!i2953[17]
  var i2955 = i2953[18]
  var i2954 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2955.length; i += 2) {
  request.r(i2955[i + 0], i2955[i + 1], 1, i2954, '')
  }
  i2952.canvasRenderers = i2954
  i2952.enableSeparatorSlots = !!i2953[19]
  i2952.updateSeparatorPartLocation = !!i2953[20]
  i2952.updateSeparatorPartScale = !!i2953[21]
  i2952.disableMeshAssignmentOnOverride = !!i2953[22]
  i2952.referenceSize = new pc.Vec2( i2953[23], i2953[24] )
  i2952.referenceScale = i2953[25]
  i2952.rectTransformSize = new pc.Vec2( i2953[26], i2953[27] )
  i2952.editReferenceRect = !!i2953[28]
  var i2957 = i2953[29]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 1) {
    i2956.push( i2957[i + 0] );
  }
  i2952.separatorSlotNames = i2956
  var i2959 = i2953[30]
  var i2958 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2959.length; i += 2) {
  request.r(i2959[i + 0], i2959[i + 1], 1, i2958, '')
  }
  i2952.separatorParts = i2958
  i2952.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2953[31], i2952.meshGenerator)
  i2952.updateTiming = i2953[32]
  i2952.unscaledTime = !!i2953[33]
  request.r(i2953[34], i2953[35], 0, i2952, 'm_Material')
  i2952.m_Maskable = !!i2953[36]
  i2952.m_Color = new pc.Color(i2953[37], i2953[38], i2953[39], i2953[40])
  i2952.m_RaycastTarget = !!i2953[41]
  i2952.m_RaycastPadding = new pc.Vec4( i2953[42], i2953[43], i2953[44], i2953[45] )
  return i2952
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2966 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2967 = data
  i2966.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2967[0], i2966.settings)
  return i2966
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2968 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2969 = data
  i2968.useClipping = !!i2969[0]
  i2968.zSpacing = i2969[1]
  i2968.pmaVertexColors = !!i2969[2]
  i2968.tintBlack = !!i2969[3]
  i2968.canvasGroupTintBlack = !!i2969[4]
  i2968.calculateTangents = !!i2969[5]
  i2968.addNormals = !!i2969[6]
  i2968.immutableTriangles = !!i2969[7]
  return i2968
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i2970 = root || request.c( 'ClickItem' )
  var i2971 = data
  var i2973 = i2971[0]
  var i2972 = []
  for(var i = 0; i < i2973.length; i += 2) {
  request.r(i2973[i + 0], i2973[i + 1], 2, i2972, '')
  }
  i2970.steps = i2972
  i2970.currentStep = i2971[1]
  i2970.isProcess = !!i2971[2]
  return i2970
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2974 = root || request.c( 'UnityEngine.UI.Button' )
  var i2975 = data
  i2974.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2975[0], i2974.m_OnClick)
  i2974.m_Navigation = request.d('UnityEngine.UI.Navigation', i2975[1], i2974.m_Navigation)
  i2974.m_Transition = i2975[2]
  i2974.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2975[3], i2974.m_Colors)
  i2974.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2975[4], i2974.m_SpriteState)
  i2974.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2975[5], i2974.m_AnimationTriggers)
  i2974.m_Interactable = !!i2975[6]
  request.r(i2975[7], i2975[8], 0, i2974, 'm_TargetGraphic')
  return i2974
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2976 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2977 = data
  i2976.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2977[0], i2976.m_PersistentCalls)
  return i2976
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2978 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2979 = data
  var i2981 = i2979[0]
  var i2980 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2981.length; i += 1) {
    i2980.add(request.d('UnityEngine.Events.PersistentCall', i2981[i + 0]));
  }
  i2978.m_Calls = i2980
  return i2978
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2984 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2985 = data
  request.r(i2985[0], i2985[1], 0, i2984, 'm_Target')
  i2984.m_TargetAssemblyTypeName = i2985[2]
  i2984.m_MethodName = i2985[3]
  i2984.m_Mode = i2985[4]
  i2984.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2985[5], i2984.m_Arguments)
  i2984.m_CallState = i2985[6]
  return i2984
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2986 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2987 = data
  request.r(i2987[0], i2987[1], 0, i2986, 'm_ObjectArgument')
  i2986.m_ObjectArgumentAssemblyTypeName = i2987[2]
  i2986.m_IntArgument = i2987[3]
  i2986.m_FloatArgument = i2987[4]
  i2986.m_StringArgument = i2987[5]
  i2986.m_BoolArgument = !!i2987[6]
  return i2986
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2988 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2989 = data
  i2988.m_Mode = i2989[0]
  i2988.m_WrapAround = !!i2989[1]
  request.r(i2989[2], i2989[3], 0, i2988, 'm_SelectOnUp')
  request.r(i2989[4], i2989[5], 0, i2988, 'm_SelectOnDown')
  request.r(i2989[6], i2989[7], 0, i2988, 'm_SelectOnLeft')
  request.r(i2989[8], i2989[9], 0, i2988, 'm_SelectOnRight')
  return i2988
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2990 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2991 = data
  i2990.m_NormalColor = new pc.Color(i2991[0], i2991[1], i2991[2], i2991[3])
  i2990.m_HighlightedColor = new pc.Color(i2991[4], i2991[5], i2991[6], i2991[7])
  i2990.m_PressedColor = new pc.Color(i2991[8], i2991[9], i2991[10], i2991[11])
  i2990.m_SelectedColor = new pc.Color(i2991[12], i2991[13], i2991[14], i2991[15])
  i2990.m_DisabledColor = new pc.Color(i2991[16], i2991[17], i2991[18], i2991[19])
  i2990.m_ColorMultiplier = i2991[20]
  i2990.m_FadeDuration = i2991[21]
  return i2990
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2992 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2993 = data
  request.r(i2993[0], i2993[1], 0, i2992, 'm_HighlightedSprite')
  request.r(i2993[2], i2993[3], 0, i2992, 'm_PressedSprite')
  request.r(i2993[4], i2993[5], 0, i2992, 'm_SelectedSprite')
  request.r(i2993[6], i2993[7], 0, i2992, 'm_DisabledSprite')
  return i2992
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2994 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2995 = data
  i2994.m_NormalTrigger = i2995[0]
  i2994.m_HighlightedTrigger = i2995[1]
  i2994.m_PressedTrigger = i2995[2]
  i2994.m_SelectedTrigger = i2995[3]
  i2994.m_DisabledTrigger = i2995[4]
  return i2994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2997 = data
  i2996.usedByComposite = !!i2997[0]
  i2996.autoTiling = !!i2997[1]
  i2996.size = new pc.Vec2( i2997[2], i2997[3] )
  i2996.edgeRadius = i2997[4]
  i2996.enabled = !!i2997[5]
  i2996.isTrigger = !!i2997[6]
  i2996.usedByEffector = !!i2997[7]
  i2996.density = i2997[8]
  i2996.offset = new pc.Vec2( i2997[9], i2997[10] )
  request.r(i2997[11], i2997[12], 0, i2996, 'material')
  return i2996
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i2998 = root || request.c( 'MixSkeletonSkin' )
  var i2999 = data
  request.r(i2999[0], i2999[1], 0, i2998, 'skeletonAnimation')
  var i3001 = i2999[2]
  var i3000 = []
  for(var i = 0; i < i3001.length; i += 1) {
    i3000.push( i3001[i + 0] );
  }
  i2998.skinNames = i3000
  return i2998
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3002 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3003 = data
  i3002.m_hasFontAssetChanged = !!i3003[0]
  request.r(i3003[1], i3003[2], 0, i3002, 'm_baseMaterial')
  i3002.m_maskOffset = new pc.Vec4( i3003[3], i3003[4], i3003[5], i3003[6] )
  i3002.m_text = i3003[7]
  i3002.m_isRightToLeft = !!i3003[8]
  request.r(i3003[9], i3003[10], 0, i3002, 'm_fontAsset')
  request.r(i3003[11], i3003[12], 0, i3002, 'm_sharedMaterial')
  var i3005 = i3003[13]
  var i3004 = []
  for(var i = 0; i < i3005.length; i += 2) {
  request.r(i3005[i + 0], i3005[i + 1], 2, i3004, '')
  }
  i3002.m_fontSharedMaterials = i3004
  request.r(i3003[14], i3003[15], 0, i3002, 'm_fontMaterial')
  var i3007 = i3003[16]
  var i3006 = []
  for(var i = 0; i < i3007.length; i += 2) {
  request.r(i3007[i + 0], i3007[i + 1], 2, i3006, '')
  }
  i3002.m_fontMaterials = i3006
  i3002.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3003[17], i3003[18], i3003[19], i3003[20])
  i3002.m_fontColor = new pc.Color(i3003[21], i3003[22], i3003[23], i3003[24])
  i3002.m_enableVertexGradient = !!i3003[25]
  i3002.m_colorMode = i3003[26]
  i3002.m_fontColorGradient = request.d('TMPro.VertexGradient', i3003[27], i3002.m_fontColorGradient)
  request.r(i3003[28], i3003[29], 0, i3002, 'm_fontColorGradientPreset')
  request.r(i3003[30], i3003[31], 0, i3002, 'm_spriteAsset')
  i3002.m_tintAllSprites = !!i3003[32]
  request.r(i3003[33], i3003[34], 0, i3002, 'm_StyleSheet')
  i3002.m_TextStyleHashCode = i3003[35]
  i3002.m_overrideHtmlColors = !!i3003[36]
  i3002.m_faceColor = UnityEngine.Color32.ConstructColor(i3003[37], i3003[38], i3003[39], i3003[40])
  i3002.m_fontSize = i3003[41]
  i3002.m_fontSizeBase = i3003[42]
  i3002.m_fontWeight = i3003[43]
  i3002.m_enableAutoSizing = !!i3003[44]
  i3002.m_fontSizeMin = i3003[45]
  i3002.m_fontSizeMax = i3003[46]
  i3002.m_fontStyle = i3003[47]
  i3002.m_HorizontalAlignment = i3003[48]
  i3002.m_VerticalAlignment = i3003[49]
  i3002.m_textAlignment = i3003[50]
  i3002.m_characterSpacing = i3003[51]
  i3002.m_wordSpacing = i3003[52]
  i3002.m_lineSpacing = i3003[53]
  i3002.m_lineSpacingMax = i3003[54]
  i3002.m_paragraphSpacing = i3003[55]
  i3002.m_charWidthMaxAdj = i3003[56]
  i3002.m_enableWordWrapping = !!i3003[57]
  i3002.m_wordWrappingRatios = i3003[58]
  i3002.m_overflowMode = i3003[59]
  request.r(i3003[60], i3003[61], 0, i3002, 'm_linkedTextComponent')
  request.r(i3003[62], i3003[63], 0, i3002, 'parentLinkedComponent')
  i3002.m_enableKerning = !!i3003[64]
  i3002.m_enableExtraPadding = !!i3003[65]
  i3002.checkPaddingRequired = !!i3003[66]
  i3002.m_isRichText = !!i3003[67]
  i3002.m_parseCtrlCharacters = !!i3003[68]
  i3002.m_isOrthographic = !!i3003[69]
  i3002.m_isCullingEnabled = !!i3003[70]
  i3002.m_horizontalMapping = i3003[71]
  i3002.m_verticalMapping = i3003[72]
  i3002.m_uvLineOffset = i3003[73]
  i3002.m_geometrySortingOrder = i3003[74]
  i3002.m_IsTextObjectScaleStatic = !!i3003[75]
  i3002.m_VertexBufferAutoSizeReduction = !!i3003[76]
  i3002.m_useMaxVisibleDescender = !!i3003[77]
  i3002.m_pageToDisplay = i3003[78]
  i3002.m_margin = new pc.Vec4( i3003[79], i3003[80], i3003[81], i3003[82] )
  i3002.m_isUsingLegacyAnimationComponent = !!i3003[83]
  i3002.m_isVolumetricText = !!i3003[84]
  request.r(i3003[85], i3003[86], 0, i3002, 'm_Material')
  i3002.m_Maskable = !!i3003[87]
  i3002.m_Color = new pc.Color(i3003[88], i3003[89], i3003[90], i3003[91])
  i3002.m_RaycastTarget = !!i3003[92]
  i3002.m_RaycastPadding = new pc.Vec4( i3003[93], i3003[94], i3003[95], i3003[96] )
  return i3002
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3010 = root || request.c( 'TMPro.VertexGradient' )
  var i3011 = data
  i3010.topLeft = new pc.Color(i3011[0], i3011[1], i3011[2], i3011[3])
  i3010.topRight = new pc.Color(i3011[4], i3011[5], i3011[6], i3011[7])
  i3010.bottomLeft = new pc.Color(i3011[8], i3011[9], i3011[10], i3011[11])
  i3010.bottomRight = new pc.Color(i3011[12], i3011[13], i3011[14], i3011[15])
  return i3010
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3012 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3013 = data
  i3012.targetIsSelf = !!i3013[0]
  request.r(i3013[1], i3013[2], 0, i3012, 'targetGO')
  i3012.tweenTargetIsTargetGO = !!i3013[3]
  i3012.delay = i3013[4]
  i3012.duration = i3013[5]
  i3012.easeType = i3013[6]
  i3012.easeCurve = new pc.AnimationCurve( { keys_flow: i3013[7] } )
  i3012.loopType = i3013[8]
  i3012.loops = i3013[9]
  i3012.id = i3013[10]
  i3012.isRelative = !!i3013[11]
  i3012.isFrom = !!i3013[12]
  i3012.isIndependentUpdate = !!i3013[13]
  i3012.autoKill = !!i3013[14]
  i3012.autoGenerate = !!i3013[15]
  i3012.isActive = !!i3013[16]
  i3012.isValid = !!i3013[17]
  request.r(i3013[18], i3013[19], 0, i3012, 'target')
  i3012.animationType = i3013[20]
  i3012.targetType = i3013[21]
  i3012.forcedTargetType = i3013[22]
  i3012.autoPlay = !!i3013[23]
  i3012.useTargetAsV3 = !!i3013[24]
  i3012.endValueFloat = i3013[25]
  i3012.endValueV3 = new pc.Vec3( i3013[26], i3013[27], i3013[28] )
  i3012.endValueV2 = new pc.Vec2( i3013[29], i3013[30] )
  i3012.endValueColor = new pc.Color(i3013[31], i3013[32], i3013[33], i3013[34])
  i3012.endValueString = i3013[35]
  i3012.endValueRect = UnityEngine.Rect.MinMaxRect(i3013[36], i3013[37], i3013[38], i3013[39])
  request.r(i3013[40], i3013[41], 0, i3012, 'endValueTransform')
  i3012.optionalBool0 = !!i3013[42]
  i3012.optionalBool1 = !!i3013[43]
  i3012.optionalFloat0 = i3013[44]
  i3012.optionalInt0 = i3013[45]
  i3012.optionalRotationMode = i3013[46]
  i3012.optionalScrambleMode = i3013[47]
  i3012.optionalShakeRandomnessMode = i3013[48]
  i3012.optionalString = i3013[49]
  i3012.updateType = i3013[50]
  i3012.isSpeedBased = !!i3013[51]
  i3012.hasOnStart = !!i3013[52]
  i3012.hasOnPlay = !!i3013[53]
  i3012.hasOnUpdate = !!i3013[54]
  i3012.hasOnStepComplete = !!i3013[55]
  i3012.hasOnComplete = !!i3013[56]
  i3012.hasOnTweenCreated = !!i3013[57]
  i3012.hasOnRewind = !!i3013[58]
  i3012.onStart = request.d('UnityEngine.Events.UnityEvent', i3013[59], i3012.onStart)
  i3012.onPlay = request.d('UnityEngine.Events.UnityEvent', i3013[60], i3012.onPlay)
  i3012.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3013[61], i3012.onUpdate)
  i3012.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3013[62], i3012.onStepComplete)
  i3012.onComplete = request.d('UnityEngine.Events.UnityEvent', i3013[63], i3012.onComplete)
  i3012.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3013[64], i3012.onTweenCreated)
  i3012.onRewind = request.d('UnityEngine.Events.UnityEvent', i3013[65], i3012.onRewind)
  return i3012
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3014 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3015 = data
  i3014.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3015[0], i3014.m_PersistentCalls)
  return i3014
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3016 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3017 = data
  i3016.m_ShowMaskGraphic = !!i3017[0]
  return i3016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3019 = data
  i3018.ambientIntensity = i3019[0]
  i3018.reflectionIntensity = i3019[1]
  i3018.ambientMode = i3019[2]
  i3018.ambientLight = new pc.Color(i3019[3], i3019[4], i3019[5], i3019[6])
  i3018.ambientSkyColor = new pc.Color(i3019[7], i3019[8], i3019[9], i3019[10])
  i3018.ambientGroundColor = new pc.Color(i3019[11], i3019[12], i3019[13], i3019[14])
  i3018.ambientEquatorColor = new pc.Color(i3019[15], i3019[16], i3019[17], i3019[18])
  i3018.fogColor = new pc.Color(i3019[19], i3019[20], i3019[21], i3019[22])
  i3018.fogEndDistance = i3019[23]
  i3018.fogStartDistance = i3019[24]
  i3018.fogDensity = i3019[25]
  i3018.fog = !!i3019[26]
  request.r(i3019[27], i3019[28], 0, i3018, 'skybox')
  i3018.fogMode = i3019[29]
  var i3021 = i3019[30]
  var i3020 = []
  for(var i = 0; i < i3021.length; i += 1) {
    i3020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3021[i + 0]) );
  }
  i3018.lightmaps = i3020
  i3018.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3019[31], i3018.lightProbes)
  i3018.lightmapsMode = i3019[32]
  i3018.mixedBakeMode = i3019[33]
  i3018.environmentLightingMode = i3019[34]
  i3018.ambientProbe = new pc.SphericalHarmonicsL2(i3019[35])
  i3018.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3019[36])
  i3018.useReferenceAmbientProbe = !!i3019[37]
  request.r(i3019[38], i3019[39], 0, i3018, 'customReflection')
  request.r(i3019[40], i3019[41], 0, i3018, 'defaultReflection')
  i3018.defaultReflectionMode = i3019[42]
  i3018.defaultReflectionResolution = i3019[43]
  i3018.sunLightObjectId = i3019[44]
  i3018.pixelLightCount = i3019[45]
  i3018.defaultReflectionHDR = !!i3019[46]
  i3018.hasLightDataAsset = !!i3019[47]
  i3018.hasManualGenerate = !!i3019[48]
  return i3018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3025 = data
  request.r(i3025[0], i3025[1], 0, i3024, 'lightmapColor')
  request.r(i3025[2], i3025[3], 0, i3024, 'lightmapDirection')
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3026 = root || new UnityEngine.LightProbes()
  var i3027 = data
  return i3026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3035 = data
  var i3037 = i3035[0]
  var i3036 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3037.length; i += 1) {
    i3036.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3037[i + 0]));
  }
  i3034.ShaderCompilationErrors = i3036
  i3034.name = i3035[1]
  i3034.guid = i3035[2]
  var i3039 = i3035[3]
  var i3038 = []
  for(var i = 0; i < i3039.length; i += 1) {
    i3038.push( i3039[i + 0] );
  }
  i3034.shaderDefinedKeywords = i3038
  var i3041 = i3035[4]
  var i3040 = []
  for(var i = 0; i < i3041.length; i += 1) {
    i3040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3041[i + 0]) );
  }
  i3034.passes = i3040
  var i3043 = i3035[5]
  var i3042 = []
  for(var i = 0; i < i3043.length; i += 1) {
    i3042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3043[i + 0]) );
  }
  i3034.usePasses = i3042
  var i3045 = i3035[6]
  var i3044 = []
  for(var i = 0; i < i3045.length; i += 1) {
    i3044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3045[i + 0]) );
  }
  i3034.defaultParameterValues = i3044
  request.r(i3035[7], i3035[8], 0, i3034, 'unityFallbackShader')
  i3034.readDepth = !!i3035[9]
  i3034.isCreatedByShaderGraph = !!i3035[10]
  i3034.usedBatchUniforms = i3035[11]
  return i3034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3049 = data
  i3048.shaderName = i3049[0]
  i3048.errorMessage = i3049[1]
  return i3048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3052 = root || new pc.UnityShaderPass()
  var i3053 = data
  i3052.id = i3053[0]
  i3052.subShaderIndex = i3053[1]
  i3052.name = i3053[2]
  i3052.passType = i3053[3]
  i3052.grabPassTextureName = i3053[4]
  i3052.usePass = !!i3053[5]
  i3052.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3053[6], i3052.zTest)
  i3052.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3053[7], i3052.zWrite)
  i3052.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3053[8], i3052.culling)
  i3052.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3053[9], i3052.blending)
  i3052.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3053[10], i3052.alphaBlending)
  i3052.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3053[11], i3052.colorWriteMask)
  i3052.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3053[12], i3052.offsetUnits)
  i3052.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3053[13], i3052.offsetFactor)
  i3052.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3053[14], i3052.stencilRef)
  i3052.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3053[15], i3052.stencilReadMask)
  i3052.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3053[16], i3052.stencilWriteMask)
  i3052.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3053[17], i3052.stencilOp)
  i3052.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3053[18], i3052.stencilOpFront)
  i3052.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3053[19], i3052.stencilOpBack)
  var i3055 = i3053[20]
  var i3054 = []
  for(var i = 0; i < i3055.length; i += 1) {
    i3054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3055[i + 0]) );
  }
  i3052.tags = i3054
  var i3057 = i3053[21]
  var i3056 = []
  for(var i = 0; i < i3057.length; i += 1) {
    i3056.push( i3057[i + 0] );
  }
  i3052.passDefinedKeywords = i3056
  var i3059 = i3053[22]
  var i3058 = []
  for(var i = 0; i < i3059.length; i += 1) {
    i3058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3059[i + 0]) );
  }
  i3052.passDefinedKeywordGroups = i3058
  var i3061 = i3053[23]
  var i3060 = []
  for(var i = 0; i < i3061.length; i += 1) {
    i3060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3061[i + 0]) );
  }
  i3052.variants = i3060
  var i3063 = i3053[24]
  var i3062 = []
  for(var i = 0; i < i3063.length; i += 1) {
    i3062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3063[i + 0]) );
  }
  i3052.excludedVariants = i3062
  i3052.hasDepthReader = !!i3053[25]
  return i3052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3065 = data
  i3064.val = i3065[0]
  i3064.name = i3065[1]
  return i3064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3067 = data
  i3066.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3067[0], i3066.src)
  i3066.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3067[1], i3066.dst)
  i3066.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3067[2], i3066.op)
  return i3066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3069 = data
  i3068.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3069[0], i3068.pass)
  i3068.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3069[1], i3068.fail)
  i3068.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3069[2], i3068.zFail)
  i3068.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3069[3], i3068.comp)
  return i3068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3073 = data
  i3072.name = i3073[0]
  i3072.value = i3073[1]
  return i3072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3077 = data
  var i3079 = i3077[0]
  var i3078 = []
  for(var i = 0; i < i3079.length; i += 1) {
    i3078.push( i3079[i + 0] );
  }
  i3076.keywords = i3078
  i3076.hasDiscard = !!i3077[1]
  return i3076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3083 = data
  i3082.passId = i3083[0]
  i3082.subShaderIndex = i3083[1]
  var i3085 = i3083[2]
  var i3084 = []
  for(var i = 0; i < i3085.length; i += 1) {
    i3084.push( i3085[i + 0] );
  }
  i3082.keywords = i3084
  i3082.vertexProgram = i3083[3]
  i3082.fragmentProgram = i3083[4]
  i3082.compiledForWebGL2 = !!i3083[5]
  i3082.readDepth = !!i3083[6]
  return i3082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3089 = data
  request.r(i3089[0], i3089[1], 0, i3088, 'shader')
  i3088.pass = i3089[2]
  return i3088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3093 = data
  i3092.name = i3093[0]
  i3092.type = i3093[1]
  i3092.value = new pc.Vec4( i3093[2], i3093[3], i3093[4], i3093[5] )
  i3092.textureValue = i3093[6]
  i3092.shaderPropertyFlag = i3093[7]
  return i3092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3095 = data
  i3094.name = i3095[0]
  request.r(i3095[1], i3095[2], 0, i3094, 'texture')
  i3094.aabb = i3095[3]
  i3094.vertices = i3095[4]
  i3094.triangles = i3095[5]
  i3094.textureRect = UnityEngine.Rect.MinMaxRect(i3095[6], i3095[7], i3095[8], i3095[9])
  i3094.packedRect = UnityEngine.Rect.MinMaxRect(i3095[10], i3095[11], i3095[12], i3095[13])
  i3094.border = new pc.Vec4( i3095[14], i3095[15], i3095[16], i3095[17] )
  i3094.transparency = i3095[18]
  i3094.bounds = i3095[19]
  i3094.pixelsPerUnit = i3095[20]
  i3094.textureWidth = i3095[21]
  i3094.textureHeight = i3095[22]
  i3094.nativeSize = new pc.Vec2( i3095[23], i3095[24] )
  i3094.pivot = new pc.Vec2( i3095[25], i3095[26] )
  i3094.textureRectOffset = new pc.Vec2( i3095[27], i3095[28] )
  return i3094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3097 = data
  i3096.name = i3097[0]
  return i3096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3099 = data
  i3098.name = i3099[0]
  i3098.ascent = i3099[1]
  i3098.originalLineHeight = i3099[2]
  i3098.fontSize = i3099[3]
  var i3101 = i3099[4]
  var i3100 = []
  for(var i = 0; i < i3101.length; i += 1) {
    i3100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3101[i + 0]) );
  }
  i3098.characterInfo = i3100
  request.r(i3099[5], i3099[6], 0, i3098, 'texture')
  i3098.originalFontSize = i3099[7]
  return i3098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3105 = data
  i3104.index = i3105[0]
  i3104.advance = i3105[1]
  i3104.bearing = i3105[2]
  i3104.glyphWidth = i3105[3]
  i3104.glyphHeight = i3105[4]
  i3104.minX = i3105[5]
  i3104.maxX = i3105[6]
  i3104.minY = i3105[7]
  i3104.maxY = i3105[8]
  i3104.uvBottomLeftX = i3105[9]
  i3104.uvBottomLeftY = i3105[10]
  i3104.uvBottomRightX = i3105[11]
  i3104.uvBottomRightY = i3105[12]
  i3104.uvTopLeftX = i3105[13]
  i3104.uvTopLeftY = i3105[14]
  i3104.uvTopRightX = i3105[15]
  i3104.uvTopRightY = i3105[16]
  return i3104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3107 = data
  i3106.name = i3107[0]
  i3106.bytes64 = i3107[1]
  i3106.data = i3107[2]
  return i3106
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3108 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3109 = data
  var i3111 = i3109[0]
  var i3110 = []
  for(var i = 0; i < i3111.length; i += 2) {
  request.r(i3111[i + 0], i3111[i + 1], 2, i3110, '')
  }
  i3108.atlasAssets = i3110
  i3108.scale = i3109[1]
  request.r(i3109[2], i3109[3], 0, i3108, 'skeletonJSON')
  i3108.isUpgradingBlendModeMaterials = !!i3109[4]
  i3108.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3109[5], i3108.blendModeMaterials)
  var i3113 = i3109[6]
  var i3112 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3113.length; i += 2) {
  request.r(i3113[i + 0], i3113[i + 1], 1, i3112, '')
  }
  i3108.skeletonDataModifiers = i3112
  var i3115 = i3109[7]
  var i3114 = []
  for(var i = 0; i < i3115.length; i += 1) {
    i3114.push( i3115[i + 0] );
  }
  i3108.fromAnimation = i3114
  var i3117 = i3109[8]
  var i3116 = []
  for(var i = 0; i < i3117.length; i += 1) {
    i3116.push( i3117[i + 0] );
  }
  i3108.toAnimation = i3116
  i3108.duration = i3109[9]
  i3108.defaultMix = i3109[10]
  request.r(i3109[11], i3109[12], 0, i3108, 'controller')
  return i3108
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3120 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3121 = data
  i3120.applyAdditiveMaterial = !!i3121[0]
  var i3123 = i3121[1]
  var i3122 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3123.length; i += 1) {
    i3122.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3123[i + 0]));
  }
  i3120.additiveMaterials = i3122
  var i3125 = i3121[2]
  var i3124 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3125.length; i += 1) {
    i3124.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3125[i + 0]));
  }
  i3120.multiplyMaterials = i3124
  var i3127 = i3121[3]
  var i3126 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3127.length; i += 1) {
    i3126.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3127[i + 0]));
  }
  i3120.screenMaterials = i3126
  i3120.requiresBlendModeMaterials = !!i3121[4]
  return i3120
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3130 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3131 = data
  i3130.pageName = i3131[0]
  request.r(i3131[1], i3131[2], 0, i3130, 'material')
  return i3130
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3134 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3135 = data
  request.r(i3135[0], i3135[1], 0, i3134, 'atlasFile')
  var i3137 = i3135[2]
  var i3136 = []
  for(var i = 0; i < i3137.length; i += 2) {
  request.r(i3137[i + 0], i3137[i + 1], 2, i3136, '')
  }
  i3134.materials = i3136
  i3134.textureLoadingMode = i3135[3]
  request.r(i3135[4], i3135[5], 0, i3134, 'onDemandTextureLoader')
  return i3134
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3138 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3139 = data
  i3138.hashCode = i3139[0]
  request.r(i3139[1], i3139[2], 0, i3138, 'material')
  i3138.materialHashCode = i3139[3]
  request.r(i3139[4], i3139[5], 0, i3138, 'atlas')
  i3138.normalStyle = i3139[6]
  i3138.normalSpacingOffset = i3139[7]
  i3138.boldStyle = i3139[8]
  i3138.boldSpacing = i3139[9]
  i3138.italicStyle = i3139[10]
  i3138.tabSize = i3139[11]
  i3138.m_Version = i3139[12]
  i3138.m_SourceFontFileGUID = i3139[13]
  request.r(i3139[14], i3139[15], 0, i3138, 'm_SourceFontFile_EditorRef')
  request.r(i3139[16], i3139[17], 0, i3138, 'm_SourceFontFile')
  i3138.m_AtlasPopulationMode = i3139[18]
  i3138.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3139[19], i3138.m_FaceInfo)
  var i3141 = i3139[20]
  var i3140 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3141.length; i += 1) {
    i3140.add(request.d('UnityEngine.TextCore.Glyph', i3141[i + 0]));
  }
  i3138.m_GlyphTable = i3140
  var i3143 = i3139[21]
  var i3142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3143.length; i += 1) {
    i3142.add(request.d('TMPro.TMP_Character', i3143[i + 0]));
  }
  i3138.m_CharacterTable = i3142
  var i3145 = i3139[22]
  var i3144 = []
  for(var i = 0; i < i3145.length; i += 2) {
  request.r(i3145[i + 0], i3145[i + 1], 2, i3144, '')
  }
  i3138.m_AtlasTextures = i3144
  i3138.m_AtlasTextureIndex = i3139[23]
  i3138.m_IsMultiAtlasTexturesEnabled = !!i3139[24]
  i3138.m_ClearDynamicDataOnBuild = !!i3139[25]
  var i3147 = i3139[26]
  var i3146 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3147.length; i += 1) {
    i3146.add(request.d('UnityEngine.TextCore.GlyphRect', i3147[i + 0]));
  }
  i3138.m_UsedGlyphRects = i3146
  var i3149 = i3139[27]
  var i3148 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3149.length; i += 1) {
    i3148.add(request.d('UnityEngine.TextCore.GlyphRect', i3149[i + 0]));
  }
  i3138.m_FreeGlyphRects = i3148
  i3138.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3139[28], i3138.m_fontInfo)
  i3138.m_AtlasWidth = i3139[29]
  i3138.m_AtlasHeight = i3139[30]
  i3138.m_AtlasPadding = i3139[31]
  i3138.m_AtlasRenderMode = i3139[32]
  var i3151 = i3139[33]
  var i3150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3151.length; i += 1) {
    i3150.add(request.d('TMPro.TMP_Glyph', i3151[i + 0]));
  }
  i3138.m_glyphInfoList = i3150
  i3138.m_KerningTable = request.d('TMPro.KerningTable', i3139[34], i3138.m_KerningTable)
  i3138.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3139[35], i3138.m_FontFeatureTable)
  var i3153 = i3139[36]
  var i3152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3153.length; i += 2) {
  request.r(i3153[i + 0], i3153[i + 1], 1, i3152, '')
  }
  i3138.fallbackFontAssets = i3152
  var i3155 = i3139[37]
  var i3154 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3155.length; i += 2) {
  request.r(i3155[i + 0], i3155[i + 1], 1, i3154, '')
  }
  i3138.m_FallbackFontAssetTable = i3154
  i3138.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3139[38], i3138.m_CreationSettings)
  var i3157 = i3139[39]
  var i3156 = []
  for(var i = 0; i < i3157.length; i += 1) {
    i3156.push( request.d('TMPro.TMP_FontWeightPair', i3157[i + 0]) );
  }
  i3138.m_FontWeightTable = i3156
  var i3159 = i3139[40]
  var i3158 = []
  for(var i = 0; i < i3159.length; i += 1) {
    i3158.push( request.d('TMPro.TMP_FontWeightPair', i3159[i + 0]) );
  }
  i3138.fontWeights = i3158
  return i3138
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3160 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3161 = data
  i3160.m_FaceIndex = i3161[0]
  i3160.m_FamilyName = i3161[1]
  i3160.m_StyleName = i3161[2]
  i3160.m_PointSize = i3161[3]
  i3160.m_Scale = i3161[4]
  i3160.m_UnitsPerEM = i3161[5]
  i3160.m_LineHeight = i3161[6]
  i3160.m_AscentLine = i3161[7]
  i3160.m_CapLine = i3161[8]
  i3160.m_MeanLine = i3161[9]
  i3160.m_Baseline = i3161[10]
  i3160.m_DescentLine = i3161[11]
  i3160.m_SuperscriptOffset = i3161[12]
  i3160.m_SuperscriptSize = i3161[13]
  i3160.m_SubscriptOffset = i3161[14]
  i3160.m_SubscriptSize = i3161[15]
  i3160.m_UnderlineOffset = i3161[16]
  i3160.m_UnderlineThickness = i3161[17]
  i3160.m_StrikethroughOffset = i3161[18]
  i3160.m_StrikethroughThickness = i3161[19]
  i3160.m_TabWidth = i3161[20]
  return i3160
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3164 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3165 = data
  i3164.m_Index = i3165[0]
  i3164.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3165[1], i3164.m_Metrics)
  i3164.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3165[2], i3164.m_GlyphRect)
  i3164.m_Scale = i3165[3]
  i3164.m_AtlasIndex = i3165[4]
  i3164.m_ClassDefinitionType = i3165[5]
  return i3164
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3166 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3167 = data
  i3166.m_Width = i3167[0]
  i3166.m_Height = i3167[1]
  i3166.m_HorizontalBearingX = i3167[2]
  i3166.m_HorizontalBearingY = i3167[3]
  i3166.m_HorizontalAdvance = i3167[4]
  return i3166
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3168 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3169 = data
  i3168.m_X = i3169[0]
  i3168.m_Y = i3169[1]
  i3168.m_Width = i3169[2]
  i3168.m_Height = i3169[3]
  return i3168
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3172 = root || request.c( 'TMPro.TMP_Character' )
  var i3173 = data
  i3172.m_ElementType = i3173[0]
  i3172.m_Unicode = i3173[1]
  i3172.m_GlyphIndex = i3173[2]
  i3172.m_Scale = i3173[3]
  return i3172
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3178 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3179 = data
  i3178.Name = i3179[0]
  i3178.PointSize = i3179[1]
  i3178.Scale = i3179[2]
  i3178.CharacterCount = i3179[3]
  i3178.LineHeight = i3179[4]
  i3178.Baseline = i3179[5]
  i3178.Ascender = i3179[6]
  i3178.CapHeight = i3179[7]
  i3178.Descender = i3179[8]
  i3178.CenterLine = i3179[9]
  i3178.SuperscriptOffset = i3179[10]
  i3178.SubscriptOffset = i3179[11]
  i3178.SubSize = i3179[12]
  i3178.Underline = i3179[13]
  i3178.UnderlineThickness = i3179[14]
  i3178.strikethrough = i3179[15]
  i3178.strikethroughThickness = i3179[16]
  i3178.TabWidth = i3179[17]
  i3178.Padding = i3179[18]
  i3178.AtlasWidth = i3179[19]
  i3178.AtlasHeight = i3179[20]
  return i3178
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3182 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3183 = data
  i3182.id = i3183[0]
  i3182.x = i3183[1]
  i3182.y = i3183[2]
  i3182.width = i3183[3]
  i3182.height = i3183[4]
  i3182.xOffset = i3183[5]
  i3182.yOffset = i3183[6]
  i3182.xAdvance = i3183[7]
  i3182.scale = i3183[8]
  return i3182
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3184 = root || request.c( 'TMPro.KerningTable' )
  var i3185 = data
  var i3187 = i3185[0]
  var i3186 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3187.length; i += 1) {
    i3186.add(request.d('TMPro.KerningPair', i3187[i + 0]));
  }
  i3184.kerningPairs = i3186
  return i3184
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3190 = root || request.c( 'TMPro.KerningPair' )
  var i3191 = data
  i3190.xOffset = i3191[0]
  i3190.m_FirstGlyph = i3191[1]
  i3190.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3191[2], i3190.m_FirstGlyphAdjustments)
  i3190.m_SecondGlyph = i3191[3]
  i3190.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3191[4], i3190.m_SecondGlyphAdjustments)
  i3190.m_IgnoreSpacingAdjustments = !!i3191[5]
  return i3190
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3192 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3193 = data
  var i3195 = i3193[0]
  var i3194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3195.length; i += 1) {
    i3194.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3195[i + 0]));
  }
  i3192.m_GlyphPairAdjustmentRecords = i3194
  return i3192
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3198 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3199 = data
  i3198.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3199[0], i3198.m_FirstAdjustmentRecord)
  i3198.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3199[1], i3198.m_SecondAdjustmentRecord)
  i3198.m_FeatureLookupFlags = i3199[2]
  return i3198
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3202 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3203 = data
  i3202.sourceFontFileName = i3203[0]
  i3202.sourceFontFileGUID = i3203[1]
  i3202.pointSizeSamplingMode = i3203[2]
  i3202.pointSize = i3203[3]
  i3202.padding = i3203[4]
  i3202.packingMode = i3203[5]
  i3202.atlasWidth = i3203[6]
  i3202.atlasHeight = i3203[7]
  i3202.characterSetSelectionMode = i3203[8]
  i3202.characterSequence = i3203[9]
  i3202.referencedFontAssetGUID = i3203[10]
  i3202.referencedTextAssetGUID = i3203[11]
  i3202.fontStyle = i3203[12]
  i3202.fontStyleModifier = i3203[13]
  i3202.renderMode = i3203[14]
  i3202.includeFontFeatures = !!i3203[15]
  return i3202
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3206 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3207 = data
  request.r(i3207[0], i3207[1], 0, i3206, 'regularTypeface')
  request.r(i3207[2], i3207[3], 0, i3206, 'italicTypeface')
  return i3206
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3208 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3209 = data
  i3208.useSafeMode = !!i3209[0]
  i3208.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3209[1], i3208.safeModeOptions)
  i3208.timeScale = i3209[2]
  i3208.unscaledTimeScale = i3209[3]
  i3208.useSmoothDeltaTime = !!i3209[4]
  i3208.maxSmoothUnscaledTime = i3209[5]
  i3208.rewindCallbackMode = i3209[6]
  i3208.showUnityEditorReport = !!i3209[7]
  i3208.logBehaviour = i3209[8]
  i3208.drawGizmos = !!i3209[9]
  i3208.defaultRecyclable = !!i3209[10]
  i3208.defaultAutoPlay = i3209[11]
  i3208.defaultUpdateType = i3209[12]
  i3208.defaultTimeScaleIndependent = !!i3209[13]
  i3208.defaultEaseType = i3209[14]
  i3208.defaultEaseOvershootOrAmplitude = i3209[15]
  i3208.defaultEasePeriod = i3209[16]
  i3208.defaultAutoKill = !!i3209[17]
  i3208.defaultLoopType = i3209[18]
  i3208.debugMode = !!i3209[19]
  i3208.debugStoreTargetId = !!i3209[20]
  i3208.showPreviewPanel = !!i3209[21]
  i3208.storeSettingsLocation = i3209[22]
  i3208.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3209[23], i3208.modules)
  i3208.createASMDEF = !!i3209[24]
  i3208.showPlayingTweens = !!i3209[25]
  i3208.showPausedTweens = !!i3209[26]
  return i3208
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3210 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3211 = data
  i3210.logBehaviour = i3211[0]
  i3210.nestedTweenFailureBehaviour = i3211[1]
  return i3210
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3212 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3213 = data
  i3212.showPanel = !!i3213[0]
  i3212.audioEnabled = !!i3213[1]
  i3212.physicsEnabled = !!i3213[2]
  i3212.physics2DEnabled = !!i3213[3]
  i3212.spriteEnabled = !!i3213[4]
  i3212.uiEnabled = !!i3213[5]
  i3212.textMeshProEnabled = !!i3213[6]
  i3212.tk2DEnabled = !!i3213[7]
  i3212.deAudioEnabled = !!i3213[8]
  i3212.deUnityExtendedEnabled = !!i3213[9]
  i3212.epoOutlineEnabled = !!i3213[10]
  return i3212
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3214 = root || request.c( 'TMPro.TMP_Settings' )
  var i3215 = data
  i3214.m_enableWordWrapping = !!i3215[0]
  i3214.m_enableKerning = !!i3215[1]
  i3214.m_enableExtraPadding = !!i3215[2]
  i3214.m_enableTintAllSprites = !!i3215[3]
  i3214.m_enableParseEscapeCharacters = !!i3215[4]
  i3214.m_EnableRaycastTarget = !!i3215[5]
  i3214.m_GetFontFeaturesAtRuntime = !!i3215[6]
  i3214.m_missingGlyphCharacter = i3215[7]
  i3214.m_warningsDisabled = !!i3215[8]
  request.r(i3215[9], i3215[10], 0, i3214, 'm_defaultFontAsset')
  i3214.m_defaultFontAssetPath = i3215[11]
  i3214.m_defaultFontSize = i3215[12]
  i3214.m_defaultAutoSizeMinRatio = i3215[13]
  i3214.m_defaultAutoSizeMaxRatio = i3215[14]
  i3214.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3215[15], i3215[16] )
  i3214.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3215[17], i3215[18] )
  i3214.m_autoSizeTextContainer = !!i3215[19]
  i3214.m_IsTextObjectScaleStatic = !!i3215[20]
  var i3217 = i3215[21]
  var i3216 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3217.length; i += 2) {
  request.r(i3217[i + 0], i3217[i + 1], 1, i3216, '')
  }
  i3214.m_fallbackFontAssets = i3216
  i3214.m_matchMaterialPreset = !!i3215[22]
  request.r(i3215[23], i3215[24], 0, i3214, 'm_defaultSpriteAsset')
  i3214.m_defaultSpriteAssetPath = i3215[25]
  i3214.m_enableEmojiSupport = !!i3215[26]
  i3214.m_MissingCharacterSpriteUnicode = i3215[27]
  i3214.m_defaultColorGradientPresetsPath = i3215[28]
  request.r(i3215[29], i3215[30], 0, i3214, 'm_defaultStyleSheet')
  i3214.m_StyleSheetsResourcePath = i3215[31]
  request.r(i3215[32], i3215[33], 0, i3214, 'm_leadingCharacters')
  request.r(i3215[34], i3215[35], 0, i3214, 'm_followingCharacters')
  i3214.m_UseModernHangulLineBreakingRules = !!i3215[36]
  return i3214
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3218 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3219 = data
  i3218.hashCode = i3219[0]
  request.r(i3219[1], i3219[2], 0, i3218, 'material')
  i3218.materialHashCode = i3219[3]
  request.r(i3219[4], i3219[5], 0, i3218, 'spriteSheet')
  var i3221 = i3219[6]
  var i3220 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3221.length; i += 1) {
    i3220.add(request.d('TMPro.TMP_Sprite', i3221[i + 0]));
  }
  i3218.spriteInfoList = i3220
  var i3223 = i3219[7]
  var i3222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3223.length; i += 2) {
  request.r(i3223[i + 0], i3223[i + 1], 1, i3222, '')
  }
  i3218.fallbackSpriteAssets = i3222
  i3218.m_Version = i3219[8]
  i3218.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3219[9], i3218.m_FaceInfo)
  var i3225 = i3219[10]
  var i3224 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3225.length; i += 1) {
    i3224.add(request.d('TMPro.TMP_SpriteCharacter', i3225[i + 0]));
  }
  i3218.m_SpriteCharacterTable = i3224
  var i3227 = i3219[11]
  var i3226 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3227.length; i += 1) {
    i3226.add(request.d('TMPro.TMP_SpriteGlyph', i3227[i + 0]));
  }
  i3218.m_SpriteGlyphTable = i3226
  return i3218
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3230 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3231 = data
  i3230.name = i3231[0]
  i3230.hashCode = i3231[1]
  i3230.unicode = i3231[2]
  i3230.pivot = new pc.Vec2( i3231[3], i3231[4] )
  request.r(i3231[5], i3231[6], 0, i3230, 'sprite')
  i3230.id = i3231[7]
  i3230.x = i3231[8]
  i3230.y = i3231[9]
  i3230.width = i3231[10]
  i3230.height = i3231[11]
  i3230.xOffset = i3231[12]
  i3230.yOffset = i3231[13]
  i3230.xAdvance = i3231[14]
  i3230.scale = i3231[15]
  return i3230
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3236 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3237 = data
  i3236.m_Name = i3237[0]
  i3236.m_HashCode = i3237[1]
  i3236.m_ElementType = i3237[2]
  i3236.m_Unicode = i3237[3]
  i3236.m_GlyphIndex = i3237[4]
  i3236.m_Scale = i3237[5]
  return i3236
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3240 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3241 = data
  request.r(i3241[0], i3241[1], 0, i3240, 'sprite')
  i3240.m_Index = i3241[2]
  i3240.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3241[3], i3240.m_Metrics)
  i3240.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3241[4], i3240.m_GlyphRect)
  i3240.m_Scale = i3241[5]
  i3240.m_AtlasIndex = i3241[6]
  i3240.m_ClassDefinitionType = i3241[7]
  return i3240
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3242 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3243 = data
  var i3245 = i3243[0]
  var i3244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3245.length; i += 1) {
    i3244.add(request.d('TMPro.TMP_Style', i3245[i + 0]));
  }
  i3242.m_StyleList = i3244
  return i3242
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3248 = root || request.c( 'TMPro.TMP_Style' )
  var i3249 = data
  i3248.m_Name = i3249[0]
  i3248.m_HashCode = i3249[1]
  i3248.m_OpeningDefinition = i3249[2]
  i3248.m_ClosingDefinition = i3249[3]
  i3248.m_OpeningTagArray = i3249[4]
  i3248.m_ClosingTagArray = i3249[5]
  i3248.m_OpeningTagUnicodeArray = i3249[6]
  i3248.m_ClosingTagUnicodeArray = i3249[7]
  return i3248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3251 = data
  var i3253 = i3251[0]
  var i3252 = []
  for(var i = 0; i < i3253.length; i += 1) {
    i3252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3253[i + 0]) );
  }
  i3250.files = i3252
  i3250.componentToPrefabIds = i3251[1]
  return i3250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3257 = data
  i3256.path = i3257[0]
  request.r(i3257[1], i3257[2], 0, i3256, 'unityObject')
  return i3256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3259 = data
  var i3261 = i3259[0]
  var i3260 = []
  for(var i = 0; i < i3261.length; i += 1) {
    i3260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3261[i + 0]) );
  }
  i3258.scriptsExecutionOrder = i3260
  var i3263 = i3259[1]
  var i3262 = []
  for(var i = 0; i < i3263.length; i += 1) {
    i3262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3263[i + 0]) );
  }
  i3258.sortingLayers = i3262
  var i3265 = i3259[2]
  var i3264 = []
  for(var i = 0; i < i3265.length; i += 1) {
    i3264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3265[i + 0]) );
  }
  i3258.cullingLayers = i3264
  i3258.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3259[3], i3258.timeSettings)
  i3258.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3259[4], i3258.physicsSettings)
  i3258.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3259[5], i3258.physics2DSettings)
  i3258.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3259[6], i3258.qualitySettings)
  i3258.enableRealtimeShadows = !!i3259[7]
  i3258.enableAutoInstancing = !!i3259[8]
  i3258.enableDynamicBatching = !!i3259[9]
  i3258.lightmapEncodingQuality = i3259[10]
  i3258.desiredColorSpace = i3259[11]
  var i3267 = i3259[12]
  var i3266 = []
  for(var i = 0; i < i3267.length; i += 1) {
    i3266.push( i3267[i + 0] );
  }
  i3258.allTags = i3266
  return i3258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3271 = data
  i3270.name = i3271[0]
  i3270.value = i3271[1]
  return i3270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3275 = data
  i3274.id = i3275[0]
  i3274.name = i3275[1]
  i3274.value = i3275[2]
  return i3274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3279 = data
  i3278.id = i3279[0]
  i3278.name = i3279[1]
  return i3278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3281 = data
  i3280.fixedDeltaTime = i3281[0]
  i3280.maximumDeltaTime = i3281[1]
  i3280.timeScale = i3281[2]
  i3280.maximumParticleTimestep = i3281[3]
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3283 = data
  i3282.gravity = new pc.Vec3( i3283[0], i3283[1], i3283[2] )
  i3282.defaultSolverIterations = i3283[3]
  i3282.bounceThreshold = i3283[4]
  i3282.autoSyncTransforms = !!i3283[5]
  i3282.autoSimulation = !!i3283[6]
  var i3285 = i3283[7]
  var i3284 = []
  for(var i = 0; i < i3285.length; i += 1) {
    i3284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3285[i + 0]) );
  }
  i3282.collisionMatrix = i3284
  return i3282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3289 = data
  i3288.enabled = !!i3289[0]
  i3288.layerId = i3289[1]
  i3288.otherLayerId = i3289[2]
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3291 = data
  request.r(i3291[0], i3291[1], 0, i3290, 'material')
  i3290.gravity = new pc.Vec2( i3291[2], i3291[3] )
  i3290.positionIterations = i3291[4]
  i3290.velocityIterations = i3291[5]
  i3290.velocityThreshold = i3291[6]
  i3290.maxLinearCorrection = i3291[7]
  i3290.maxAngularCorrection = i3291[8]
  i3290.maxTranslationSpeed = i3291[9]
  i3290.maxRotationSpeed = i3291[10]
  i3290.baumgarteScale = i3291[11]
  i3290.baumgarteTOIScale = i3291[12]
  i3290.timeToSleep = i3291[13]
  i3290.linearSleepTolerance = i3291[14]
  i3290.angularSleepTolerance = i3291[15]
  i3290.defaultContactOffset = i3291[16]
  i3290.autoSimulation = !!i3291[17]
  i3290.queriesHitTriggers = !!i3291[18]
  i3290.queriesStartInColliders = !!i3291[19]
  i3290.callbacksOnDisable = !!i3291[20]
  i3290.reuseCollisionCallbacks = !!i3291[21]
  i3290.autoSyncTransforms = !!i3291[22]
  var i3293 = i3291[23]
  var i3292 = []
  for(var i = 0; i < i3293.length; i += 1) {
    i3292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3293[i + 0]) );
  }
  i3290.collisionMatrix = i3292
  return i3290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3297 = data
  i3296.enabled = !!i3297[0]
  i3296.layerId = i3297[1]
  i3296.otherLayerId = i3297[2]
  return i3296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3299 = data
  var i3301 = i3299[0]
  var i3300 = []
  for(var i = 0; i < i3301.length; i += 1) {
    i3300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3301[i + 0]) );
  }
  i3298.qualityLevels = i3300
  var i3303 = i3299[1]
  var i3302 = []
  for(var i = 0; i < i3303.length; i += 1) {
    i3302.push( i3303[i + 0] );
  }
  i3298.names = i3302
  i3298.shadows = i3299[2]
  i3298.anisotropicFiltering = i3299[3]
  i3298.antiAliasing = i3299[4]
  i3298.lodBias = i3299[5]
  i3298.shadowCascades = i3299[6]
  i3298.shadowDistance = i3299[7]
  i3298.shadowmaskMode = i3299[8]
  i3298.shadowProjection = i3299[9]
  i3298.shadowResolution = i3299[10]
  i3298.softParticles = !!i3299[11]
  i3298.softVegetation = !!i3299[12]
  i3298.activeColorSpace = i3299[13]
  i3298.desiredColorSpace = i3299[14]
  i3298.masterTextureLimit = i3299[15]
  i3298.maxQueuedFrames = i3299[16]
  i3298.particleRaycastBudget = i3299[17]
  i3298.pixelLightCount = i3299[18]
  i3298.realtimeReflectionProbes = !!i3299[19]
  i3298.shadowCascade2Split = i3299[20]
  i3298.shadowCascade4Split = new pc.Vec3( i3299[21], i3299[22], i3299[23] )
  i3298.streamingMipmapsActive = !!i3299[24]
  i3298.vSyncCount = i3299[25]
  i3298.asyncUploadBufferSize = i3299[26]
  i3298.asyncUploadTimeSlice = i3299[27]
  i3298.billboardsFaceCameraPosition = !!i3299[28]
  i3298.shadowNearPlaneOffset = i3299[29]
  i3298.streamingMipmapsMemoryBudget = i3299[30]
  i3298.maximumLODLevel = i3299[31]
  i3298.streamingMipmapsAddAllCameras = !!i3299[32]
  i3298.streamingMipmapsMaxLevelReduction = i3299[33]
  i3298.streamingMipmapsRenderersPerFrame = i3299[34]
  i3298.resolutionScalingFixedDPIFactor = i3299[35]
  i3298.streamingMipmapsMaxFileIORequests = i3299[36]
  i3298.currentQualityLevel = i3299[37]
  return i3298
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3306 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3307 = data
  i3306.xPlacement = i3307[0]
  i3306.yPlacement = i3307[1]
  i3306.xAdvance = i3307[2]
  i3306.yAdvance = i3307[3]
  return i3306
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3308 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3309 = data
  i3308.m_GlyphIndex = i3309[0]
  i3308.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3309[1], i3308.m_GlyphValueRecord)
  return i3308
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3310 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3311 = data
  i3310.m_XPlacement = i3311[0]
  i3310.m_YPlacement = i3311[1]
  i3310.m_XAdvance = i3311[2]
  i3310.m_YAdvance = i3311[3]
  return i3310
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[3],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[3],"76":[77],"78":[79],"80":[79],"9":[8],"81":[82],"83":[84],"85":[82],"86":[8],"87":[8],"11":[9],"18":[19,8],"88":[8],"10":[9],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"35":[8],"96":[8],"16":[19,8],"97":[8],"98":[8],"99":[8],"100":[8],"101":[19,8],"102":[8],"103":[6],"104":[6],"7":[6],"105":[6],"106":[3],"107":[3],"108":[109],"110":[3],"111":[112],"113":[8],"114":[19,8],"115":[77],"27":[19,8],"116":[117,77],"118":[77],"119":[77,120],"121":[54],"122":[62],"123":[112],"124":[125],"126":[8],"127":[77,8],"17":[8,19],"128":[8],"129":[19,8],"130":[77],"131":[19,8],"132":[8],"133":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","DraggableItem","UnityEngine.CanvasGroup","DropZone","UnityEngine.PolygonCollider2D","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","ClickItem","UnityEngine.BoxCollider2D","MixSkeletonSkin","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "154.3";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "BEQ_V16_NgocNDL_AnhPD";

Deserializers.lunaAppID = "29138";

Deserializers.projectId = "cc2b1186a2056e546bb13add5b988034";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1717";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4657";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "31b3ac6f-f356-4c63-a1d9-e8e5cf1d706d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

