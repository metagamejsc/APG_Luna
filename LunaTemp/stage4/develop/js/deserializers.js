var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3052 = root || request.c( 'UnityEngine.JointSpring' )
  var i3053 = data
  i3052.spring = i3053[0]
  i3052.damper = i3053[1]
  i3052.targetPosition = i3053[2]
  return i3052
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3054 = root || request.c( 'UnityEngine.JointMotor' )
  var i3055 = data
  i3054.m_TargetVelocity = i3055[0]
  i3054.m_Force = i3055[1]
  i3054.m_FreeSpin = i3055[2]
  return i3054
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3056 = root || request.c( 'UnityEngine.JointLimits' )
  var i3057 = data
  i3056.m_Min = i3057[0]
  i3056.m_Max = i3057[1]
  i3056.m_Bounciness = i3057[2]
  i3056.m_BounceMinVelocity = i3057[3]
  i3056.m_ContactDistance = i3057[4]
  i3056.minBounce = i3057[5]
  i3056.maxBounce = i3057[6]
  return i3056
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3058 = root || request.c( 'UnityEngine.JointDrive' )
  var i3059 = data
  i3058.m_PositionSpring = i3059[0]
  i3058.m_PositionDamper = i3059[1]
  i3058.m_MaximumForce = i3059[2]
  i3058.m_UseAcceleration = i3059[3]
  return i3058
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3060 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3061 = data
  i3060.m_Spring = i3061[0]
  i3060.m_Damper = i3061[1]
  return i3060
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3062 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3063 = data
  i3062.m_Limit = i3063[0]
  i3062.m_Bounciness = i3063[1]
  i3062.m_ContactDistance = i3063[2]
  return i3062
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3064 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3065 = data
  i3064.m_ExtremumSlip = i3065[0]
  i3064.m_ExtremumValue = i3065[1]
  i3064.m_AsymptoteSlip = i3065[2]
  i3064.m_AsymptoteValue = i3065[3]
  i3064.m_Stiffness = i3065[4]
  return i3064
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3066 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3067 = data
  i3066.m_LowerAngle = i3067[0]
  i3066.m_UpperAngle = i3067[1]
  return i3066
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3068 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3069 = data
  i3068.m_MotorSpeed = i3069[0]
  i3068.m_MaximumMotorTorque = i3069[1]
  return i3068
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3070 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3071 = data
  i3070.m_DampingRatio = i3071[0]
  i3070.m_Frequency = i3071[1]
  i3070.m_Angle = i3071[2]
  return i3070
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3072 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3073 = data
  i3072.m_LowerTranslation = i3073[0]
  i3072.m_UpperTranslation = i3073[1]
  return i3072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3075 = data
  i3074.name = i3075[0]
  i3074.width = i3075[1]
  i3074.height = i3075[2]
  i3074.mipmapCount = i3075[3]
  i3074.anisoLevel = i3075[4]
  i3074.filterMode = i3075[5]
  i3074.hdr = !!i3075[6]
  i3074.format = i3075[7]
  i3074.wrapMode = i3075[8]
  i3074.alphaIsTransparency = !!i3075[9]
  i3074.alphaSource = i3075[10]
  i3074.graphicsFormat = i3075[11]
  i3074.sRGBTexture = !!i3075[12]
  i3074.desiredColorSpace = i3075[13]
  i3074.wrapU = i3075[14]
  i3074.wrapV = i3075[15]
  return i3074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3076 = root || new pc.UnityMaterial()
  var i3077 = data
  i3076.name = i3077[0]
  request.r(i3077[1], i3077[2], 0, i3076, 'shader')
  i3076.renderQueue = i3077[3]
  i3076.enableInstancing = !!i3077[4]
  var i3079 = i3077[5]
  var i3078 = []
  for(var i = 0; i < i3079.length; i += 1) {
    i3078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3079[i + 0]) );
  }
  i3076.floatParameters = i3078
  var i3081 = i3077[6]
  var i3080 = []
  for(var i = 0; i < i3081.length; i += 1) {
    i3080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3081[i + 0]) );
  }
  i3076.colorParameters = i3080
  var i3083 = i3077[7]
  var i3082 = []
  for(var i = 0; i < i3083.length; i += 1) {
    i3082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3083[i + 0]) );
  }
  i3076.vectorParameters = i3082
  var i3085 = i3077[8]
  var i3084 = []
  for(var i = 0; i < i3085.length; i += 1) {
    i3084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3085[i + 0]) );
  }
  i3076.textureParameters = i3084
  var i3087 = i3077[9]
  var i3086 = []
  for(var i = 0; i < i3087.length; i += 1) {
    i3086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3087[i + 0]) );
  }
  i3076.materialFlags = i3086
  return i3076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3091 = data
  i3090.name = i3091[0]
  i3090.value = i3091[1]
  return i3090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3095 = data
  i3094.name = i3095[0]
  i3094.value = new pc.Color(i3095[1], i3095[2], i3095[3], i3095[4])
  return i3094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3099 = data
  i3098.name = i3099[0]
  i3098.value = new pc.Vec4( i3099[1], i3099[2], i3099[3], i3099[4] )
  return i3098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3103 = data
  i3102.name = i3103[0]
  request.r(i3103[1], i3103[2], 0, i3102, 'value')
  return i3102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3107 = data
  i3106.name = i3107[0]
  i3106.enabled = !!i3107[1]
  return i3106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3109 = data
  i3108.name = i3109[0]
  i3108.index = i3109[1]
  i3108.startup = !!i3109[2]
  return i3108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3111 = data
  i3110.aspect = i3111[0]
  i3110.orthographic = !!i3111[1]
  i3110.orthographicSize = i3111[2]
  i3110.backgroundColor = new pc.Color(i3111[3], i3111[4], i3111[5], i3111[6])
  i3110.nearClipPlane = i3111[7]
  i3110.farClipPlane = i3111[8]
  i3110.fieldOfView = i3111[9]
  i3110.depth = i3111[10]
  i3110.clearFlags = i3111[11]
  i3110.cullingMask = i3111[12]
  i3110.rect = i3111[13]
  request.r(i3111[14], i3111[15], 0, i3110, 'targetTexture')
  i3110.usePhysicalProperties = !!i3111[16]
  i3110.focalLength = i3111[17]
  i3110.sensorSize = new pc.Vec2( i3111[18], i3111[19] )
  i3110.lensShift = new pc.Vec2( i3111[20], i3111[21] )
  i3110.gateFit = i3111[22]
  i3110.commandBufferCount = i3111[23]
  i3110.cameraType = i3111[24]
  i3110.enabled = !!i3111[25]
  return i3110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3113 = data
  i3112.name = i3113[0]
  i3112.tagId = i3113[1]
  i3112.enabled = !!i3113[2]
  i3112.isStatic = !!i3113[3]
  i3112.layer = i3113[4]
  return i3112
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3114 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3115 = data
  request.r(i3115[0], i3115[1], 0, i3114, 'm_FirstSelected')
  i3114.m_sendNavigationEvents = !!i3115[2]
  i3114.m_DragThreshold = i3115[3]
  return i3114
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3116 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3117 = data
  i3116.m_HorizontalAxis = i3117[0]
  i3116.m_VerticalAxis = i3117[1]
  i3116.m_SubmitButton = i3117[2]
  i3116.m_CancelButton = i3117[3]
  i3116.m_InputActionsPerSecond = i3117[4]
  i3116.m_RepeatDelay = i3117[5]
  i3116.m_ForceModuleActive = !!i3117[6]
  i3116.m_SendPointerHoverToParent = !!i3117[7]
  return i3116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3119 = data
  i3118.pivot = new pc.Vec2( i3119[0], i3119[1] )
  i3118.anchorMin = new pc.Vec2( i3119[2], i3119[3] )
  i3118.anchorMax = new pc.Vec2( i3119[4], i3119[5] )
  i3118.sizeDelta = new pc.Vec2( i3119[6], i3119[7] )
  i3118.anchoredPosition3D = new pc.Vec3( i3119[8], i3119[9], i3119[10] )
  i3118.rotation = new pc.Quat(i3119[11], i3119[12], i3119[13], i3119[14])
  i3118.scale = new pc.Vec3( i3119[15], i3119[16], i3119[17] )
  return i3118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3121 = data
  i3120.planeDistance = i3121[0]
  i3120.referencePixelsPerUnit = i3121[1]
  i3120.isFallbackOverlay = !!i3121[2]
  i3120.renderMode = i3121[3]
  i3120.renderOrder = i3121[4]
  i3120.sortingLayerName = i3121[5]
  i3120.sortingOrder = i3121[6]
  i3120.scaleFactor = i3121[7]
  request.r(i3121[8], i3121[9], 0, i3120, 'worldCamera')
  i3120.overrideSorting = !!i3121[10]
  i3120.pixelPerfect = !!i3121[11]
  i3120.targetDisplay = i3121[12]
  i3120.overridePixelPerfect = !!i3121[13]
  i3120.enabled = !!i3121[14]
  return i3120
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3122 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3123 = data
  i3122.m_UiScaleMode = i3123[0]
  i3122.m_ReferencePixelsPerUnit = i3123[1]
  i3122.m_ScaleFactor = i3123[2]
  i3122.m_ReferenceResolution = new pc.Vec2( i3123[3], i3123[4] )
  i3122.m_ScreenMatchMode = i3123[5]
  i3122.m_MatchWidthOrHeight = i3123[6]
  i3122.m_PhysicalUnit = i3123[7]
  i3122.m_FallbackScreenDPI = i3123[8]
  i3122.m_DefaultSpriteDPI = i3123[9]
  i3122.m_DynamicPixelsPerUnit = i3123[10]
  i3122.m_PresetInfoIsWorld = !!i3123[11]
  return i3122
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3124 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3125 = data
  i3124.m_IgnoreReversedGraphics = !!i3125[0]
  i3124.m_BlockingObjects = i3125[1]
  i3124.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3125[2] )
  return i3124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3127 = data
  i3126.cullTransparentMesh = !!i3127[0]
  return i3126
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3128 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3129 = data
  request.r(i3129[0], i3129[1], 0, i3128, 'm_Texture')
  i3128.m_UVRect = UnityEngine.Rect.MinMaxRect(i3129[2], i3129[3], i3129[4], i3129[5])
  request.r(i3129[6], i3129[7], 0, i3128, 'm_Material')
  i3128.m_Maskable = !!i3129[8]
  i3128.m_Color = new pc.Color(i3129[9], i3129[10], i3129[11], i3129[12])
  i3128.m_RaycastTarget = !!i3129[13]
  i3128.m_RaycastPadding = new pc.Vec4( i3129[14], i3129[15], i3129[16], i3129[17] )
  return i3128
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3130 = root || request.c( 'UnityEngine.UI.Image' )
  var i3131 = data
  request.r(i3131[0], i3131[1], 0, i3130, 'm_Sprite')
  i3130.m_Type = i3131[2]
  i3130.m_PreserveAspect = !!i3131[3]
  i3130.m_FillCenter = !!i3131[4]
  i3130.m_FillMethod = i3131[5]
  i3130.m_FillAmount = i3131[6]
  i3130.m_FillClockwise = !!i3131[7]
  i3130.m_FillOrigin = i3131[8]
  i3130.m_UseSpriteMesh = !!i3131[9]
  i3130.m_PixelsPerUnitMultiplier = i3131[10]
  request.r(i3131[11], i3131[12], 0, i3130, 'm_Material')
  i3130.m_Maskable = !!i3131[13]
  i3130.m_Color = new pc.Color(i3131[14], i3131[15], i3131[16], i3131[17])
  i3130.m_RaycastTarget = !!i3131[18]
  i3130.m_RaycastPadding = new pc.Vec4( i3131[19], i3131[20], i3131[21], i3131[22] )
  return i3130
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3132 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3133 = data
  i3132.m_hasFontAssetChanged = !!i3133[0]
  request.r(i3133[1], i3133[2], 0, i3132, 'm_baseMaterial')
  i3132.m_maskOffset = new pc.Vec4( i3133[3], i3133[4], i3133[5], i3133[6] )
  i3132.m_text = i3133[7]
  i3132.m_isRightToLeft = !!i3133[8]
  request.r(i3133[9], i3133[10], 0, i3132, 'm_fontAsset')
  request.r(i3133[11], i3133[12], 0, i3132, 'm_sharedMaterial')
  var i3135 = i3133[13]
  var i3134 = []
  for(var i = 0; i < i3135.length; i += 2) {
  request.r(i3135[i + 0], i3135[i + 1], 2, i3134, '')
  }
  i3132.m_fontSharedMaterials = i3134
  request.r(i3133[14], i3133[15], 0, i3132, 'm_fontMaterial')
  var i3137 = i3133[16]
  var i3136 = []
  for(var i = 0; i < i3137.length; i += 2) {
  request.r(i3137[i + 0], i3137[i + 1], 2, i3136, '')
  }
  i3132.m_fontMaterials = i3136
  i3132.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3133[17], i3133[18], i3133[19], i3133[20])
  i3132.m_fontColor = new pc.Color(i3133[21], i3133[22], i3133[23], i3133[24])
  i3132.m_enableVertexGradient = !!i3133[25]
  i3132.m_colorMode = i3133[26]
  i3132.m_fontColorGradient = request.d('TMPro.VertexGradient', i3133[27], i3132.m_fontColorGradient)
  request.r(i3133[28], i3133[29], 0, i3132, 'm_fontColorGradientPreset')
  request.r(i3133[30], i3133[31], 0, i3132, 'm_spriteAsset')
  i3132.m_tintAllSprites = !!i3133[32]
  request.r(i3133[33], i3133[34], 0, i3132, 'm_StyleSheet')
  i3132.m_TextStyleHashCode = i3133[35]
  i3132.m_overrideHtmlColors = !!i3133[36]
  i3132.m_faceColor = UnityEngine.Color32.ConstructColor(i3133[37], i3133[38], i3133[39], i3133[40])
  i3132.m_fontSize = i3133[41]
  i3132.m_fontSizeBase = i3133[42]
  i3132.m_fontWeight = i3133[43]
  i3132.m_enableAutoSizing = !!i3133[44]
  i3132.m_fontSizeMin = i3133[45]
  i3132.m_fontSizeMax = i3133[46]
  i3132.m_fontStyle = i3133[47]
  i3132.m_HorizontalAlignment = i3133[48]
  i3132.m_VerticalAlignment = i3133[49]
  i3132.m_textAlignment = i3133[50]
  i3132.m_characterSpacing = i3133[51]
  i3132.m_characterHorizontalScale = i3133[52]
  i3132.m_wordSpacing = i3133[53]
  i3132.m_lineSpacing = i3133[54]
  i3132.m_lineSpacingMax = i3133[55]
  i3132.m_paragraphSpacing = i3133[56]
  i3132.m_charWidthMaxAdj = i3133[57]
  i3132.m_TextWrappingMode = i3133[58]
  i3132.m_wordWrappingRatios = i3133[59]
  i3132.m_overflowMode = i3133[60]
  request.r(i3133[61], i3133[62], 0, i3132, 'm_linkedTextComponent')
  request.r(i3133[63], i3133[64], 0, i3132, 'parentLinkedComponent')
  i3132.m_enableKerning = !!i3133[65]
  var i3139 = i3133[66]
  var i3138 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3139.length; i += 1) {
    i3138.add(i3139[i + 0]);
  }
  i3132.m_ActiveFontFeatures = i3138
  i3132.m_enableExtraPadding = !!i3133[67]
  i3132.checkPaddingRequired = !!i3133[68]
  i3132.m_isRichText = !!i3133[69]
  i3132.m_parseCtrlCharacters = !!i3133[70]
  i3132.m_isOrthographic = !!i3133[71]
  i3132.m_isCullingEnabled = !!i3133[72]
  i3132.m_horizontalMapping = i3133[73]
  i3132.m_verticalMapping = i3133[74]
  i3132.m_uvLineOffset = i3133[75]
  i3132.m_geometrySortingOrder = i3133[76]
  i3132.m_IsTextObjectScaleStatic = !!i3133[77]
  i3132.m_VertexBufferAutoSizeReduction = !!i3133[78]
  i3132.m_useMaxVisibleDescender = !!i3133[79]
  i3132.m_pageToDisplay = i3133[80]
  i3132.m_margin = new pc.Vec4( i3133[81], i3133[82], i3133[83], i3133[84] )
  i3132.m_isUsingLegacyAnimationComponent = !!i3133[85]
  i3132.m_isVolumetricText = !!i3133[86]
  request.r(i3133[87], i3133[88], 0, i3132, 'm_Material')
  i3132.m_EmojiFallbackSupport = !!i3133[89]
  i3132.m_Maskable = !!i3133[90]
  i3132.m_Color = new pc.Color(i3133[91], i3133[92], i3133[93], i3133[94])
  i3132.m_RaycastTarget = !!i3133[95]
  i3132.m_RaycastPadding = new pc.Vec4( i3133[96], i3133[97], i3133[98], i3133[99] )
  return i3132
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3142 = root || request.c( 'TMPro.VertexGradient' )
  var i3143 = data
  i3142.topLeft = new pc.Color(i3143[0], i3143[1], i3143[2], i3143[3])
  i3142.topRight = new pc.Color(i3143[4], i3143[5], i3143[6], i3143[7])
  i3142.bottomLeft = new pc.Color(i3143[8], i3143[9], i3143[10], i3143[11])
  i3142.bottomRight = new pc.Color(i3143[12], i3143[13], i3143[14], i3143[15])
  return i3142
}

Deserializers["TutController"] = function (request, data, root) {
  var i3146 = root || request.c( 'TutController' )
  var i3147 = data
  request.r(i3147[0], i3147[1], 0, i3146, 'rt')
  var i3149 = i3147[2]
  var i3148 = new (System.Collections.Generic.List$1(Bridge.ns('Option')))
  for(var i = 0; i < i3149.length; i += 1) {
    i3148.add(request.d('Option', i3149[i + 0]));
  }
  i3146.options = i3148
  i3146.moveTime = i3147[3]
  i3146.fromScale = i3147[4]
  i3146.toScale = i3147[5]
  i3146.scaleTime = i3147[6]
  return i3146
}

Deserializers["Option"] = function (request, data, root) {
  var i3152 = root || request.c( 'Option' )
  var i3153 = data
  i3152.Position = new pc.Vec3( i3153[0], i3153[1], i3153[2] )
  request.r(i3153[3], i3153[4], 0, i3152, 'Demo')
  return i3152
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3154 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3155 = data
  i3154.targetIsSelf = !!i3155[0]
  request.r(i3155[1], i3155[2], 0, i3154, 'targetGO')
  i3154.tweenTargetIsTargetGO = !!i3155[3]
  i3154.delay = i3155[4]
  i3154.duration = i3155[5]
  i3154.easeType = i3155[6]
  i3154.easeCurve = new pc.AnimationCurve( { keys_flow: i3155[7] } )
  i3154.loopType = i3155[8]
  i3154.loops = i3155[9]
  i3154.id = i3155[10]
  i3154.isRelative = !!i3155[11]
  i3154.isFrom = !!i3155[12]
  i3154.isIndependentUpdate = !!i3155[13]
  i3154.autoKill = !!i3155[14]
  i3154.autoGenerate = !!i3155[15]
  i3154.isActive = !!i3155[16]
  i3154.isValid = !!i3155[17]
  request.r(i3155[18], i3155[19], 0, i3154, 'target')
  i3154.animationType = i3155[20]
  i3154.targetType = i3155[21]
  i3154.forcedTargetType = i3155[22]
  i3154.autoPlay = !!i3155[23]
  i3154.useTargetAsV3 = !!i3155[24]
  i3154.endValueFloat = i3155[25]
  i3154.endValueV3 = new pc.Vec3( i3155[26], i3155[27], i3155[28] )
  i3154.endValueV2 = new pc.Vec2( i3155[29], i3155[30] )
  i3154.endValueColor = new pc.Color(i3155[31], i3155[32], i3155[33], i3155[34])
  i3154.endValueString = i3155[35]
  i3154.endValueRect = UnityEngine.Rect.MinMaxRect(i3155[36], i3155[37], i3155[38], i3155[39])
  request.r(i3155[40], i3155[41], 0, i3154, 'endValueTransform')
  i3154.optionalBool0 = !!i3155[42]
  i3154.optionalBool1 = !!i3155[43]
  i3154.optionalFloat0 = i3155[44]
  i3154.optionalInt0 = i3155[45]
  i3154.optionalRotationMode = i3155[46]
  i3154.optionalScrambleMode = i3155[47]
  i3154.optionalShakeRandomnessMode = i3155[48]
  i3154.optionalString = i3155[49]
  i3154.updateType = i3155[50]
  i3154.isSpeedBased = !!i3155[51]
  i3154.hasOnStart = !!i3155[52]
  i3154.hasOnPlay = !!i3155[53]
  i3154.hasOnUpdate = !!i3155[54]
  i3154.hasOnStepComplete = !!i3155[55]
  i3154.hasOnComplete = !!i3155[56]
  i3154.hasOnTweenCreated = !!i3155[57]
  i3154.hasOnRewind = !!i3155[58]
  i3154.onStart = request.d('UnityEngine.Events.UnityEvent', i3155[59], i3154.onStart)
  i3154.onPlay = request.d('UnityEngine.Events.UnityEvent', i3155[60], i3154.onPlay)
  i3154.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3155[61], i3154.onUpdate)
  i3154.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3155[62], i3154.onStepComplete)
  i3154.onComplete = request.d('UnityEngine.Events.UnityEvent', i3155[63], i3154.onComplete)
  i3154.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3155[64], i3154.onTweenCreated)
  i3154.onRewind = request.d('UnityEngine.Events.UnityEvent', i3155[65], i3154.onRewind)
  return i3154
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3156 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3157 = data
  i3156.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3157[0], i3156.m_PersistentCalls)
  return i3156
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3158 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3159 = data
  var i3161 = i3159[0]
  var i3160 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3161.length; i += 1) {
    i3160.add(request.d('UnityEngine.Events.PersistentCall', i3161[i + 0]));
  }
  i3158.m_Calls = i3160
  return i3158
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3164 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3165 = data
  request.r(i3165[0], i3165[1], 0, i3164, 'm_Target')
  i3164.m_TargetAssemblyTypeName = i3165[2]
  i3164.m_MethodName = i3165[3]
  i3164.m_Mode = i3165[4]
  i3164.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3165[5], i3164.m_Arguments)
  i3164.m_CallState = i3165[6]
  return i3164
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3166 = root || request.c( 'UnityEngine.UI.Text' )
  var i3167 = data
  i3166.m_FontData = request.d('UnityEngine.UI.FontData', i3167[0], i3166.m_FontData)
  i3166.m_Text = i3167[1]
  request.r(i3167[2], i3167[3], 0, i3166, 'm_Material')
  i3166.m_Maskable = !!i3167[4]
  i3166.m_Color = new pc.Color(i3167[5], i3167[6], i3167[7], i3167[8])
  i3166.m_RaycastTarget = !!i3167[9]
  i3166.m_RaycastPadding = new pc.Vec4( i3167[10], i3167[11], i3167[12], i3167[13] )
  return i3166
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3168 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3169 = data
  request.r(i3169[0], i3169[1], 0, i3168, 'm_Font')
  i3168.m_FontSize = i3169[2]
  i3168.m_FontStyle = i3169[3]
  i3168.m_BestFit = !!i3169[4]
  i3168.m_MinSize = i3169[5]
  i3168.m_MaxSize = i3169[6]
  i3168.m_Alignment = i3169[7]
  i3168.m_AlignByGeometry = !!i3169[8]
  i3168.m_RichText = !!i3169[9]
  i3168.m_HorizontalOverflow = i3169[10]
  i3168.m_VerticalOverflow = i3169[11]
  i3168.m_LineSpacing = i3169[12]
  return i3168
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3170 = root || request.c( 'UnityEngine.UI.Button' )
  var i3171 = data
  i3170.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3171[0], i3170.m_OnClick)
  i3170.m_Navigation = request.d('UnityEngine.UI.Navigation', i3171[1], i3170.m_Navigation)
  i3170.m_Transition = i3171[2]
  i3170.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3171[3], i3170.m_Colors)
  i3170.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3171[4], i3170.m_SpriteState)
  i3170.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3171[5], i3170.m_AnimationTriggers)
  i3170.m_Interactable = !!i3171[6]
  request.r(i3171[7], i3171[8], 0, i3170, 'm_TargetGraphic')
  return i3170
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3172 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3173 = data
  i3172.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3173[0], i3172.m_PersistentCalls)
  return i3172
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3174 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3175 = data
  i3174.m_Mode = i3175[0]
  i3174.m_WrapAround = !!i3175[1]
  request.r(i3175[2], i3175[3], 0, i3174, 'm_SelectOnUp')
  request.r(i3175[4], i3175[5], 0, i3174, 'm_SelectOnDown')
  request.r(i3175[6], i3175[7], 0, i3174, 'm_SelectOnLeft')
  request.r(i3175[8], i3175[9], 0, i3174, 'm_SelectOnRight')
  return i3174
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3176 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3177 = data
  i3176.m_NormalColor = new pc.Color(i3177[0], i3177[1], i3177[2], i3177[3])
  i3176.m_HighlightedColor = new pc.Color(i3177[4], i3177[5], i3177[6], i3177[7])
  i3176.m_PressedColor = new pc.Color(i3177[8], i3177[9], i3177[10], i3177[11])
  i3176.m_SelectedColor = new pc.Color(i3177[12], i3177[13], i3177[14], i3177[15])
  i3176.m_DisabledColor = new pc.Color(i3177[16], i3177[17], i3177[18], i3177[19])
  i3176.m_ColorMultiplier = i3177[20]
  i3176.m_FadeDuration = i3177[21]
  return i3176
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3178 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3179 = data
  request.r(i3179[0], i3179[1], 0, i3178, 'm_HighlightedSprite')
  request.r(i3179[2], i3179[3], 0, i3178, 'm_PressedSprite')
  request.r(i3179[4], i3179[5], 0, i3178, 'm_SelectedSprite')
  request.r(i3179[6], i3179[7], 0, i3178, 'm_DisabledSprite')
  return i3178
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3180 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3181 = data
  i3180.m_NormalTrigger = i3181[0]
  i3180.m_HighlightedTrigger = i3181[1]
  i3180.m_PressedTrigger = i3181[2]
  i3180.m_SelectedTrigger = i3181[3]
  i3180.m_DisabledTrigger = i3181[4]
  return i3180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3183 = data
  request.r(i3183[0], i3183[1], 0, i3182, 'clip')
  request.r(i3183[2], i3183[3], 0, i3182, 'outputAudioMixerGroup')
  i3182.playOnAwake = !!i3183[4]
  i3182.loop = !!i3183[5]
  i3182.time = i3183[6]
  i3182.volume = i3183[7]
  i3182.pitch = i3183[8]
  i3182.enabled = !!i3183[9]
  return i3182
}

Deserializers["LunaController"] = function (request, data, root) {
  var i3184 = root || request.c( 'LunaController' )
  var i3185 = data
  i3184.TimePlay = i3185[0]
  i3184.LimitTimePlay = !!i3185[1]
  request.r(i3185[2], i3185[3], 0, i3184, 'LogoTexture')
  request.r(i3185[4], i3185[5], 0, i3184, 'Demo1Texture')
  i3184.Demo1Name = i3185[6]
  request.r(i3185[7], i3185[8], 0, i3184, 'Demo2Texture')
  i3184.Demo2Name = i3185[9]
  request.r(i3185[10], i3185[11], 0, i3184, 'Demo3Texture')
  i3184.Demo3Name = i3185[12]
  request.r(i3185[13], i3185[14], 0, i3184, 'Demo4Texture')
  i3184.Demo4Name = i3185[15]
  request.r(i3185[16], i3185[17], 0, i3184, 'logoImage')
  request.r(i3185[18], i3185[19], 0, i3184, 'demo1Image')
  request.r(i3185[20], i3185[21], 0, i3184, 'demo1Text')
  request.r(i3185[22], i3185[23], 0, i3184, 'demo2Image')
  request.r(i3185[24], i3185[25], 0, i3184, 'demo2Text')
  request.r(i3185[26], i3185[27], 0, i3184, 'demo3Image')
  request.r(i3185[28], i3185[29], 0, i3184, 'demo3Text')
  request.r(i3185[30], i3185[31], 0, i3184, 'demo4Image')
  request.r(i3185[32], i3185[33], 0, i3184, 'demo4Text')
  request.r(i3185[34], i3185[35], 0, i3184, 'endCard')
  return i3184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3187 = data
  i3186.ambientIntensity = i3187[0]
  i3186.reflectionIntensity = i3187[1]
  i3186.ambientMode = i3187[2]
  i3186.ambientLight = new pc.Color(i3187[3], i3187[4], i3187[5], i3187[6])
  i3186.ambientSkyColor = new pc.Color(i3187[7], i3187[8], i3187[9], i3187[10])
  i3186.ambientGroundColor = new pc.Color(i3187[11], i3187[12], i3187[13], i3187[14])
  i3186.ambientEquatorColor = new pc.Color(i3187[15], i3187[16], i3187[17], i3187[18])
  i3186.fogColor = new pc.Color(i3187[19], i3187[20], i3187[21], i3187[22])
  i3186.fogEndDistance = i3187[23]
  i3186.fogStartDistance = i3187[24]
  i3186.fogDensity = i3187[25]
  i3186.fog = !!i3187[26]
  request.r(i3187[27], i3187[28], 0, i3186, 'skybox')
  i3186.fogMode = i3187[29]
  var i3189 = i3187[30]
  var i3188 = []
  for(var i = 0; i < i3189.length; i += 1) {
    i3188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3189[i + 0]) );
  }
  i3186.lightmaps = i3188
  i3186.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3187[31], i3186.lightProbes)
  i3186.lightmapsMode = i3187[32]
  i3186.mixedBakeMode = i3187[33]
  i3186.environmentLightingMode = i3187[34]
  i3186.ambientProbe = new pc.SphericalHarmonicsL2(i3187[35])
  request.r(i3187[36], i3187[37], 0, i3186, 'customReflection')
  request.r(i3187[38], i3187[39], 0, i3186, 'defaultReflection')
  i3186.defaultReflectionMode = i3187[40]
  i3186.defaultReflectionResolution = i3187[41]
  i3186.sunLightObjectId = i3187[42]
  i3186.pixelLightCount = i3187[43]
  i3186.defaultReflectionHDR = !!i3187[44]
  i3186.hasLightDataAsset = !!i3187[45]
  i3186.hasManualGenerate = !!i3187[46]
  return i3186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3193 = data
  request.r(i3193[0], i3193[1], 0, i3192, 'lightmapColor')
  request.r(i3193[2], i3193[3], 0, i3192, 'lightmapDirection')
  request.r(i3193[4], i3193[5], 0, i3192, 'shadowMask')
  return i3192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3194 = root || new UnityEngine.LightProbes()
  var i3195 = data
  return i3194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3203 = data
  var i3205 = i3203[0]
  var i3204 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3205.length; i += 1) {
    i3204.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3205[i + 0]));
  }
  i3202.ShaderCompilationErrors = i3204
  i3202.name = i3203[1]
  i3202.guid = i3203[2]
  var i3207 = i3203[3]
  var i3206 = []
  for(var i = 0; i < i3207.length; i += 1) {
    i3206.push( i3207[i + 0] );
  }
  i3202.shaderDefinedKeywords = i3206
  var i3209 = i3203[4]
  var i3208 = []
  for(var i = 0; i < i3209.length; i += 1) {
    i3208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3209[i + 0]) );
  }
  i3202.passes = i3208
  var i3211 = i3203[5]
  var i3210 = []
  for(var i = 0; i < i3211.length; i += 1) {
    i3210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3211[i + 0]) );
  }
  i3202.usePasses = i3210
  var i3213 = i3203[6]
  var i3212 = []
  for(var i = 0; i < i3213.length; i += 1) {
    i3212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3213[i + 0]) );
  }
  i3202.defaultParameterValues = i3212
  request.r(i3203[7], i3203[8], 0, i3202, 'unityFallbackShader')
  i3202.readDepth = !!i3203[9]
  i3202.hasDepthOnlyPass = !!i3203[10]
  i3202.isCreatedByShaderGraph = !!i3203[11]
  i3202.disableBatching = !!i3203[12]
  i3202.compiled = !!i3203[13]
  return i3202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3217 = data
  i3216.shaderName = i3217[0]
  i3216.errorMessage = i3217[1]
  return i3216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3222 = root || new pc.UnityShaderPass()
  var i3223 = data
  i3222.id = i3223[0]
  i3222.subShaderIndex = i3223[1]
  i3222.name = i3223[2]
  i3222.passType = i3223[3]
  i3222.grabPassTextureName = i3223[4]
  i3222.usePass = !!i3223[5]
  i3222.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3223[6], i3222.zTest)
  i3222.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3223[7], i3222.zWrite)
  i3222.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3223[8], i3222.culling)
  i3222.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3223[9], i3222.blending)
  i3222.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3223[10], i3222.alphaBlending)
  i3222.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3223[11], i3222.colorWriteMask)
  i3222.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3223[12], i3222.offsetUnits)
  i3222.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3223[13], i3222.offsetFactor)
  i3222.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3223[14], i3222.stencilRef)
  i3222.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3223[15], i3222.stencilReadMask)
  i3222.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3223[16], i3222.stencilWriteMask)
  i3222.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3223[17], i3222.stencilOp)
  i3222.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3223[18], i3222.stencilOpFront)
  i3222.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3223[19], i3222.stencilOpBack)
  var i3225 = i3223[20]
  var i3224 = []
  for(var i = 0; i < i3225.length; i += 1) {
    i3224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3225[i + 0]) );
  }
  i3222.tags = i3224
  var i3227 = i3223[21]
  var i3226 = []
  for(var i = 0; i < i3227.length; i += 1) {
    i3226.push( i3227[i + 0] );
  }
  i3222.passDefinedKeywords = i3226
  var i3229 = i3223[22]
  var i3228 = []
  for(var i = 0; i < i3229.length; i += 1) {
    i3228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3229[i + 0]) );
  }
  i3222.passDefinedKeywordGroups = i3228
  var i3231 = i3223[23]
  var i3230 = []
  for(var i = 0; i < i3231.length; i += 1) {
    i3230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3231[i + 0]) );
  }
  i3222.variants = i3230
  var i3233 = i3223[24]
  var i3232 = []
  for(var i = 0; i < i3233.length; i += 1) {
    i3232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3233[i + 0]) );
  }
  i3222.excludedVariants = i3232
  i3222.hasDepthReader = !!i3223[25]
  return i3222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3235 = data
  i3234.val = i3235[0]
  i3234.name = i3235[1]
  return i3234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3237 = data
  i3236.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[0], i3236.src)
  i3236.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[1], i3236.dst)
  i3236.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[2], i3236.op)
  return i3236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3239 = data
  i3238.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3239[0], i3238.pass)
  i3238.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3239[1], i3238.fail)
  i3238.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3239[2], i3238.zFail)
  i3238.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3239[3], i3238.comp)
  return i3238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3243 = data
  i3242.name = i3243[0]
  i3242.value = i3243[1]
  return i3242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3247 = data
  var i3249 = i3247[0]
  var i3248 = []
  for(var i = 0; i < i3249.length; i += 1) {
    i3248.push( i3249[i + 0] );
  }
  i3246.keywords = i3248
  i3246.hasDiscard = !!i3247[1]
  return i3246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3253 = data
  i3252.passId = i3253[0]
  i3252.subShaderIndex = i3253[1]
  var i3255 = i3253[2]
  var i3254 = []
  for(var i = 0; i < i3255.length; i += 1) {
    i3254.push( i3255[i + 0] );
  }
  i3252.keywords = i3254
  i3252.vertexProgram = i3253[3]
  i3252.fragmentProgram = i3253[4]
  i3252.exportedForWebGl2 = !!i3253[5]
  i3252.readDepth = !!i3253[6]
  return i3252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3259 = data
  request.r(i3259[0], i3259[1], 0, i3258, 'shader')
  i3258.pass = i3259[2]
  return i3258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3263 = data
  i3262.name = i3263[0]
  i3262.type = i3263[1]
  i3262.value = new pc.Vec4( i3263[2], i3263[3], i3263[4], i3263[5] )
  i3262.textureValue = i3263[6]
  i3262.shaderPropertyFlag = i3263[7]
  return i3262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3265 = data
  i3264.name = i3265[0]
  request.r(i3265[1], i3265[2], 0, i3264, 'texture')
  i3264.aabb = i3265[3]
  i3264.vertices = i3265[4]
  i3264.triangles = i3265[5]
  i3264.textureRect = UnityEngine.Rect.MinMaxRect(i3265[6], i3265[7], i3265[8], i3265[9])
  i3264.packedRect = UnityEngine.Rect.MinMaxRect(i3265[10], i3265[11], i3265[12], i3265[13])
  i3264.border = new pc.Vec4( i3265[14], i3265[15], i3265[16], i3265[17] )
  i3264.transparency = i3265[18]
  i3264.bounds = i3265[19]
  i3264.pixelsPerUnit = i3265[20]
  i3264.textureWidth = i3265[21]
  i3264.textureHeight = i3265[22]
  i3264.nativeSize = new pc.Vec2( i3265[23], i3265[24] )
  i3264.pivot = new pc.Vec2( i3265[25], i3265[26] )
  i3264.textureRectOffset = new pc.Vec2( i3265[27], i3265[28] )
  return i3264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3267 = data
  i3266.name = i3267[0]
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3269 = data
  i3268.name = i3269[0]
  i3268.ascent = i3269[1]
  i3268.originalLineHeight = i3269[2]
  i3268.fontSize = i3269[3]
  var i3271 = i3269[4]
  var i3270 = []
  for(var i = 0; i < i3271.length; i += 1) {
    i3270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3271[i + 0]) );
  }
  i3268.characterInfo = i3270
  request.r(i3269[5], i3269[6], 0, i3268, 'texture')
  i3268.originalFontSize = i3269[7]
  return i3268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3275 = data
  i3274.index = i3275[0]
  i3274.advance = i3275[1]
  i3274.bearing = i3275[2]
  i3274.glyphWidth = i3275[3]
  i3274.glyphHeight = i3275[4]
  i3274.minX = i3275[5]
  i3274.maxX = i3275[6]
  i3274.minY = i3275[7]
  i3274.maxY = i3275[8]
  i3274.uvBottomLeftX = i3275[9]
  i3274.uvBottomLeftY = i3275[10]
  i3274.uvBottomRightX = i3275[11]
  i3274.uvBottomRightY = i3275[12]
  i3274.uvTopLeftX = i3275[13]
  i3274.uvTopLeftY = i3275[14]
  i3274.uvTopRightX = i3275[15]
  i3274.uvTopRightY = i3275[16]
  return i3274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3277 = data
  i3276.name = i3277[0]
  i3276.bytes64 = i3277[1]
  i3276.data = i3277[2]
  return i3276
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3278 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3279 = data
  i3278.normalStyle = i3279[0]
  i3278.normalSpacingOffset = i3279[1]
  i3278.boldStyle = i3279[2]
  i3278.boldSpacing = i3279[3]
  i3278.italicStyle = i3279[4]
  i3278.tabSize = i3279[5]
  request.r(i3279[6], i3279[7], 0, i3278, 'atlas')
  i3278.m_SourceFontFileGUID = i3279[8]
  i3278.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3279[9], i3278.m_CreationSettings)
  request.r(i3279[10], i3279[11], 0, i3278, 'm_SourceFontFile')
  i3278.m_SourceFontFilePath = i3279[12]
  i3278.m_AtlasPopulationMode = i3279[13]
  i3278.InternalDynamicOS = !!i3279[14]
  var i3281 = i3279[15]
  var i3280 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3281.length; i += 1) {
    i3280.add(request.d('UnityEngine.TextCore.Glyph', i3281[i + 0]));
  }
  i3278.m_GlyphTable = i3280
  var i3283 = i3279[16]
  var i3282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3283.length; i += 1) {
    i3282.add(request.d('TMPro.TMP_Character', i3283[i + 0]));
  }
  i3278.m_CharacterTable = i3282
  var i3285 = i3279[17]
  var i3284 = []
  for(var i = 0; i < i3285.length; i += 2) {
  request.r(i3285[i + 0], i3285[i + 1], 2, i3284, '')
  }
  i3278.m_AtlasTextures = i3284
  i3278.m_AtlasTextureIndex = i3279[18]
  i3278.m_IsMultiAtlasTexturesEnabled = !!i3279[19]
  i3278.m_GetFontFeatures = !!i3279[20]
  i3278.m_ClearDynamicDataOnBuild = !!i3279[21]
  i3278.m_AtlasWidth = i3279[22]
  i3278.m_AtlasHeight = i3279[23]
  i3278.m_AtlasPadding = i3279[24]
  i3278.m_AtlasRenderMode = i3279[25]
  var i3287 = i3279[26]
  var i3286 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3287.length; i += 1) {
    i3286.add(request.d('UnityEngine.TextCore.GlyphRect', i3287[i + 0]));
  }
  i3278.m_UsedGlyphRects = i3286
  var i3289 = i3279[27]
  var i3288 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3289.length; i += 1) {
    i3288.add(request.d('UnityEngine.TextCore.GlyphRect', i3289[i + 0]));
  }
  i3278.m_FreeGlyphRects = i3288
  i3278.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3279[28], i3278.m_FontFeatureTable)
  i3278.m_ShouldReimportFontFeatures = !!i3279[29]
  var i3291 = i3279[30]
  var i3290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3291.length; i += 2) {
  request.r(i3291[i + 0], i3291[i + 1], 1, i3290, '')
  }
  i3278.m_FallbackFontAssetTable = i3290
  var i3293 = i3279[31]
  var i3292 = []
  for(var i = 0; i < i3293.length; i += 1) {
    i3292.push( request.d('TMPro.TMP_FontWeightPair', i3293[i + 0]) );
  }
  i3278.m_FontWeightTable = i3292
  var i3295 = i3279[32]
  var i3294 = []
  for(var i = 0; i < i3295.length; i += 1) {
    i3294.push( request.d('TMPro.TMP_FontWeightPair', i3295[i + 0]) );
  }
  i3278.fontWeights = i3294
  i3278.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3279[33], i3278.m_fontInfo)
  var i3297 = i3279[34]
  var i3296 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3297.length; i += 1) {
    i3296.add(request.d('TMPro.TMP_Glyph', i3297[i + 0]));
  }
  i3278.m_glyphInfoList = i3296
  i3278.m_KerningTable = request.d('TMPro.KerningTable', i3279[35], i3278.m_KerningTable)
  var i3299 = i3279[36]
  var i3298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3299.length; i += 2) {
  request.r(i3299[i + 0], i3299[i + 1], 1, i3298, '')
  }
  i3278.fallbackFontAssets = i3298
  i3278.m_Version = i3279[37]
  i3278.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3279[38], i3278.m_FaceInfo)
  request.r(i3279[39], i3279[40], 0, i3278, 'm_Material')
  return i3278
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3300 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3301 = data
  i3300.sourceFontFileName = i3301[0]
  i3300.sourceFontFileGUID = i3301[1]
  i3300.faceIndex = i3301[2]
  i3300.pointSizeSamplingMode = i3301[3]
  i3300.pointSize = i3301[4]
  i3300.padding = i3301[5]
  i3300.paddingMode = i3301[6]
  i3300.packingMode = i3301[7]
  i3300.atlasWidth = i3301[8]
  i3300.atlasHeight = i3301[9]
  i3300.characterSetSelectionMode = i3301[10]
  i3300.characterSequence = i3301[11]
  i3300.referencedFontAssetGUID = i3301[12]
  i3300.referencedTextAssetGUID = i3301[13]
  i3300.fontStyle = i3301[14]
  i3300.fontStyleModifier = i3301[15]
  i3300.renderMode = i3301[16]
  i3300.includeFontFeatures = !!i3301[17]
  return i3300
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3304 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3305 = data
  i3304.m_Index = i3305[0]
  i3304.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3305[1], i3304.m_Metrics)
  i3304.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3305[2], i3304.m_GlyphRect)
  i3304.m_Scale = i3305[3]
  i3304.m_AtlasIndex = i3305[4]
  i3304.m_ClassDefinitionType = i3305[5]
  return i3304
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3306 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3307 = data
  i3306.m_Width = i3307[0]
  i3306.m_Height = i3307[1]
  i3306.m_HorizontalBearingX = i3307[2]
  i3306.m_HorizontalBearingY = i3307[3]
  i3306.m_HorizontalAdvance = i3307[4]
  return i3306
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3308 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3309 = data
  i3308.m_X = i3309[0]
  i3308.m_Y = i3309[1]
  i3308.m_Width = i3309[2]
  i3308.m_Height = i3309[3]
  return i3308
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3312 = root || request.c( 'TMPro.TMP_Character' )
  var i3313 = data
  i3312.m_ElementType = i3313[0]
  i3312.m_Unicode = i3313[1]
  i3312.m_GlyphIndex = i3313[2]
  i3312.m_Scale = i3313[3]
  return i3312
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3318 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3319 = data
  var i3321 = i3319[0]
  var i3320 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3321.length; i += 1) {
    i3320.add(request.d('TMPro.MultipleSubstitutionRecord', i3321[i + 0]));
  }
  i3318.m_MultipleSubstitutionRecords = i3320
  var i3323 = i3319[1]
  var i3322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3323.length; i += 1) {
    i3322.add(request.d('TMPro.LigatureSubstitutionRecord', i3323[i + 0]));
  }
  i3318.m_LigatureSubstitutionRecords = i3322
  var i3325 = i3319[2]
  var i3324 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3325.length; i += 1) {
    i3324.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3325[i + 0]));
  }
  i3318.m_GlyphPairAdjustmentRecords = i3324
  var i3327 = i3319[3]
  var i3326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3327.length; i += 1) {
    i3326.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3327[i + 0]));
  }
  i3318.m_MarkToBaseAdjustmentRecords = i3326
  var i3329 = i3319[4]
  var i3328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3329.length; i += 1) {
    i3328.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3329[i + 0]));
  }
  i3318.m_MarkToMarkAdjustmentRecords = i3328
  return i3318
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3332 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3333 = data
  i3332.m_TargetGlyphID = i3333[0]
  i3332.m_SubstituteGlyphIDs = i3333[1]
  return i3332
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3336 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3337 = data
  i3336.m_ComponentGlyphIDs = i3337[0]
  i3336.m_LigatureGlyphID = i3337[1]
  return i3336
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3340 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3341 = data
  i3340.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3341[0], i3340.m_FirstAdjustmentRecord)
  i3340.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3341[1], i3340.m_SecondAdjustmentRecord)
  i3340.m_FeatureLookupFlags = i3341[2]
  return i3340
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3344 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3345 = data
  i3344.m_BaseGlyphID = i3345[0]
  i3344.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3345[1], i3344.m_BaseGlyphAnchorPoint)
  i3344.m_MarkGlyphID = i3345[2]
  i3344.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3345[3], i3344.m_MarkPositionAdjustment)
  return i3344
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3348 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3349 = data
  i3348.m_BaseMarkGlyphID = i3349[0]
  i3348.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3349[1], i3348.m_BaseMarkGlyphAnchorPoint)
  i3348.m_CombiningMarkGlyphID = i3349[2]
  i3348.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3349[3], i3348.m_CombiningMarkPositionAdjustment)
  return i3348
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3354 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3355 = data
  request.r(i3355[0], i3355[1], 0, i3354, 'regularTypeface')
  request.r(i3355[2], i3355[3], 0, i3354, 'italicTypeface')
  return i3354
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3356 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3357 = data
  i3356.Name = i3357[0]
  i3356.PointSize = i3357[1]
  i3356.Scale = i3357[2]
  i3356.CharacterCount = i3357[3]
  i3356.LineHeight = i3357[4]
  i3356.Baseline = i3357[5]
  i3356.Ascender = i3357[6]
  i3356.CapHeight = i3357[7]
  i3356.Descender = i3357[8]
  i3356.CenterLine = i3357[9]
  i3356.SuperscriptOffset = i3357[10]
  i3356.SubscriptOffset = i3357[11]
  i3356.SubSize = i3357[12]
  i3356.Underline = i3357[13]
  i3356.UnderlineThickness = i3357[14]
  i3356.strikethrough = i3357[15]
  i3356.strikethroughThickness = i3357[16]
  i3356.TabWidth = i3357[17]
  i3356.Padding = i3357[18]
  i3356.AtlasWidth = i3357[19]
  i3356.AtlasHeight = i3357[20]
  return i3356
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3360 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3361 = data
  i3360.id = i3361[0]
  i3360.x = i3361[1]
  i3360.y = i3361[2]
  i3360.width = i3361[3]
  i3360.height = i3361[4]
  i3360.xOffset = i3361[5]
  i3360.yOffset = i3361[6]
  i3360.xAdvance = i3361[7]
  i3360.scale = i3361[8]
  return i3360
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3362 = root || request.c( 'TMPro.KerningTable' )
  var i3363 = data
  var i3365 = i3363[0]
  var i3364 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3365.length; i += 1) {
    i3364.add(request.d('TMPro.KerningPair', i3365[i + 0]));
  }
  i3362.kerningPairs = i3364
  return i3362
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3368 = root || request.c( 'TMPro.KerningPair' )
  var i3369 = data
  i3368.xOffset = i3369[0]
  i3368.m_FirstGlyph = i3369[1]
  i3368.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3369[2], i3368.m_FirstGlyphAdjustments)
  i3368.m_SecondGlyph = i3369[3]
  i3368.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3369[4], i3368.m_SecondGlyphAdjustments)
  i3368.m_IgnoreSpacingAdjustments = !!i3369[5]
  return i3368
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3370 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3371 = data
  i3370.m_FaceIndex = i3371[0]
  i3370.m_FamilyName = i3371[1]
  i3370.m_StyleName = i3371[2]
  i3370.m_PointSize = i3371[3]
  i3370.m_Scale = i3371[4]
  i3370.m_UnitsPerEM = i3371[5]
  i3370.m_LineHeight = i3371[6]
  i3370.m_AscentLine = i3371[7]
  i3370.m_CapLine = i3371[8]
  i3370.m_MeanLine = i3371[9]
  i3370.m_Baseline = i3371[10]
  i3370.m_DescentLine = i3371[11]
  i3370.m_SuperscriptOffset = i3371[12]
  i3370.m_SuperscriptSize = i3371[13]
  i3370.m_SubscriptOffset = i3371[14]
  i3370.m_SubscriptSize = i3371[15]
  i3370.m_UnderlineOffset = i3371[16]
  i3370.m_UnderlineThickness = i3371[17]
  i3370.m_StrikethroughOffset = i3371[18]
  i3370.m_StrikethroughThickness = i3371[19]
  i3370.m_TabWidth = i3371[20]
  return i3370
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3372 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3373 = data
  i3372.useSafeMode = !!i3373[0]
  i3372.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3373[1], i3372.safeModeOptions)
  i3372.timeScale = i3373[2]
  i3372.unscaledTimeScale = i3373[3]
  i3372.useSmoothDeltaTime = !!i3373[4]
  i3372.maxSmoothUnscaledTime = i3373[5]
  i3372.rewindCallbackMode = i3373[6]
  i3372.showUnityEditorReport = !!i3373[7]
  i3372.logBehaviour = i3373[8]
  i3372.drawGizmos = !!i3373[9]
  i3372.defaultRecyclable = !!i3373[10]
  i3372.defaultAutoPlay = i3373[11]
  i3372.defaultUpdateType = i3373[12]
  i3372.defaultTimeScaleIndependent = !!i3373[13]
  i3372.defaultEaseType = i3373[14]
  i3372.defaultEaseOvershootOrAmplitude = i3373[15]
  i3372.defaultEasePeriod = i3373[16]
  i3372.defaultAutoKill = !!i3373[17]
  i3372.defaultLoopType = i3373[18]
  i3372.debugMode = !!i3373[19]
  i3372.debugStoreTargetId = !!i3373[20]
  i3372.showPreviewPanel = !!i3373[21]
  i3372.storeSettingsLocation = i3373[22]
  i3372.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3373[23], i3372.modules)
  i3372.createASMDEF = !!i3373[24]
  i3372.showPlayingTweens = !!i3373[25]
  i3372.showPausedTweens = !!i3373[26]
  return i3372
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3374 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3375 = data
  i3374.logBehaviour = i3375[0]
  i3374.nestedTweenFailureBehaviour = i3375[1]
  return i3374
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3376 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3377 = data
  i3376.showPanel = !!i3377[0]
  i3376.audioEnabled = !!i3377[1]
  i3376.physicsEnabled = !!i3377[2]
  i3376.physics2DEnabled = !!i3377[3]
  i3376.spriteEnabled = !!i3377[4]
  i3376.uiEnabled = !!i3377[5]
  i3376.textMeshProEnabled = !!i3377[6]
  i3376.tk2DEnabled = !!i3377[7]
  i3376.deAudioEnabled = !!i3377[8]
  i3376.deUnityExtendedEnabled = !!i3377[9]
  i3376.epoOutlineEnabled = !!i3377[10]
  return i3376
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3378 = root || request.c( 'TMPro.TMP_Settings' )
  var i3379 = data
  i3378.assetVersion = i3379[0]
  i3378.m_TextWrappingMode = i3379[1]
  i3378.m_enableKerning = !!i3379[2]
  var i3381 = i3379[3]
  var i3380 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3381.length; i += 1) {
    i3380.add(i3381[i + 0]);
  }
  i3378.m_ActiveFontFeatures = i3380
  i3378.m_enableExtraPadding = !!i3379[4]
  i3378.m_enableTintAllSprites = !!i3379[5]
  i3378.m_enableParseEscapeCharacters = !!i3379[6]
  i3378.m_EnableRaycastTarget = !!i3379[7]
  i3378.m_GetFontFeaturesAtRuntime = !!i3379[8]
  i3378.m_missingGlyphCharacter = i3379[9]
  i3378.m_ClearDynamicDataOnBuild = !!i3379[10]
  i3378.m_warningsDisabled = !!i3379[11]
  request.r(i3379[12], i3379[13], 0, i3378, 'm_defaultFontAsset')
  i3378.m_defaultFontAssetPath = i3379[14]
  i3378.m_defaultFontSize = i3379[15]
  i3378.m_defaultAutoSizeMinRatio = i3379[16]
  i3378.m_defaultAutoSizeMaxRatio = i3379[17]
  i3378.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3379[18], i3379[19] )
  i3378.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3379[20], i3379[21] )
  i3378.m_autoSizeTextContainer = !!i3379[22]
  i3378.m_IsTextObjectScaleStatic = !!i3379[23]
  var i3383 = i3379[24]
  var i3382 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3383.length; i += 2) {
  request.r(i3383[i + 0], i3383[i + 1], 1, i3382, '')
  }
  i3378.m_fallbackFontAssets = i3382
  i3378.m_matchMaterialPreset = !!i3379[25]
  i3378.m_HideSubTextObjects = !!i3379[26]
  request.r(i3379[27], i3379[28], 0, i3378, 'm_defaultSpriteAsset')
  i3378.m_defaultSpriteAssetPath = i3379[29]
  i3378.m_enableEmojiSupport = !!i3379[30]
  i3378.m_MissingCharacterSpriteUnicode = i3379[31]
  var i3385 = i3379[32]
  var i3384 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3385.length; i += 2) {
  request.r(i3385[i + 0], i3385[i + 1], 1, i3384, '')
  }
  i3378.m_EmojiFallbackTextAssets = i3384
  i3378.m_defaultColorGradientPresetsPath = i3379[33]
  request.r(i3379[34], i3379[35], 0, i3378, 'm_defaultStyleSheet')
  i3378.m_StyleSheetsResourcePath = i3379[36]
  request.r(i3379[37], i3379[38], 0, i3378, 'm_leadingCharacters')
  request.r(i3379[39], i3379[40], 0, i3378, 'm_followingCharacters')
  i3378.m_UseModernHangulLineBreakingRules = !!i3379[41]
  return i3378
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3388 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3389 = data
  request.r(i3389[0], i3389[1], 0, i3388, 'spriteSheet')
  var i3391 = i3389[2]
  var i3390 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3391.length; i += 1) {
    i3390.add(request.d('TMPro.TMP_Sprite', i3391[i + 0]));
  }
  i3388.spriteInfoList = i3390
  var i3393 = i3389[3]
  var i3392 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3393.length; i += 2) {
  request.r(i3393[i + 0], i3393[i + 1], 1, i3392, '')
  }
  i3388.fallbackSpriteAssets = i3392
  var i3395 = i3389[4]
  var i3394 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3395.length; i += 1) {
    i3394.add(request.d('TMPro.TMP_SpriteCharacter', i3395[i + 0]));
  }
  i3388.m_SpriteCharacterTable = i3394
  var i3397 = i3389[5]
  var i3396 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3397.length; i += 1) {
    i3396.add(request.d('TMPro.TMP_SpriteGlyph', i3397[i + 0]));
  }
  i3388.m_GlyphTable = i3396
  i3388.m_Version = i3389[6]
  i3388.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3389[7], i3388.m_FaceInfo)
  request.r(i3389[8], i3389[9], 0, i3388, 'm_Material')
  return i3388
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3400 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3401 = data
  i3400.name = i3401[0]
  i3400.hashCode = i3401[1]
  i3400.unicode = i3401[2]
  i3400.pivot = new pc.Vec2( i3401[3], i3401[4] )
  request.r(i3401[5], i3401[6], 0, i3400, 'sprite')
  i3400.id = i3401[7]
  i3400.x = i3401[8]
  i3400.y = i3401[9]
  i3400.width = i3401[10]
  i3400.height = i3401[11]
  i3400.xOffset = i3401[12]
  i3400.yOffset = i3401[13]
  i3400.xAdvance = i3401[14]
  i3400.scale = i3401[15]
  return i3400
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3406 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3407 = data
  i3406.m_Name = i3407[0]
  i3406.m_ElementType = i3407[1]
  i3406.m_Unicode = i3407[2]
  i3406.m_GlyphIndex = i3407[3]
  i3406.m_Scale = i3407[4]
  return i3406
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3410 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3411 = data
  request.r(i3411[0], i3411[1], 0, i3410, 'sprite')
  i3410.m_Index = i3411[2]
  i3410.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3411[3], i3410.m_Metrics)
  i3410.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3411[4], i3410.m_GlyphRect)
  i3410.m_Scale = i3411[5]
  i3410.m_AtlasIndex = i3411[6]
  i3410.m_ClassDefinitionType = i3411[7]
  return i3410
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3412 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3413 = data
  var i3415 = i3413[0]
  var i3414 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3415.length; i += 1) {
    i3414.add(request.d('TMPro.TMP_Style', i3415[i + 0]));
  }
  i3412.m_StyleList = i3414
  return i3412
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3418 = root || request.c( 'TMPro.TMP_Style' )
  var i3419 = data
  i3418.m_Name = i3419[0]
  i3418.m_HashCode = i3419[1]
  i3418.m_OpeningDefinition = i3419[2]
  i3418.m_ClosingDefinition = i3419[3]
  i3418.m_OpeningTagArray = i3419[4]
  i3418.m_ClosingTagArray = i3419[5]
  return i3418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3421 = data
  var i3423 = i3421[0]
  var i3422 = []
  for(var i = 0; i < i3423.length; i += 1) {
    i3422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3423[i + 0]) );
  }
  i3420.files = i3422
  i3420.componentToPrefabIds = i3421[1]
  return i3420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3427 = data
  i3426.path = i3427[0]
  request.r(i3427[1], i3427[2], 0, i3426, 'unityObject')
  return i3426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3429 = data
  var i3431 = i3429[0]
  var i3430 = []
  for(var i = 0; i < i3431.length; i += 1) {
    i3430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3431[i + 0]) );
  }
  i3428.scriptsExecutionOrder = i3430
  var i3433 = i3429[1]
  var i3432 = []
  for(var i = 0; i < i3433.length; i += 1) {
    i3432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3433[i + 0]) );
  }
  i3428.sortingLayers = i3432
  var i3435 = i3429[2]
  var i3434 = []
  for(var i = 0; i < i3435.length; i += 1) {
    i3434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3435[i + 0]) );
  }
  i3428.cullingLayers = i3434
  i3428.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3429[3], i3428.timeSettings)
  i3428.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3429[4], i3428.physicsSettings)
  i3428.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3429[5], i3428.physics2DSettings)
  i3428.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3429[6], i3428.qualitySettings)
  i3428.enableRealtimeShadows = !!i3429[7]
  i3428.enableAutoInstancing = !!i3429[8]
  i3428.enableStaticBatching = !!i3429[9]
  i3428.enableDynamicBatching = !!i3429[10]
  i3428.usePreservativeDynamicBatching = !!i3429[11]
  i3428.lightmapEncodingQuality = i3429[12]
  i3428.desiredColorSpace = i3429[13]
  var i3437 = i3429[14]
  var i3436 = []
  for(var i = 0; i < i3437.length; i += 1) {
    i3436.push( i3437[i + 0] );
  }
  i3428.allTags = i3436
  return i3428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3441 = data
  i3440.name = i3441[0]
  i3440.value = i3441[1]
  return i3440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3445 = data
  i3444.id = i3445[0]
  i3444.name = i3445[1]
  i3444.value = i3445[2]
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3449 = data
  i3448.id = i3449[0]
  i3448.name = i3449[1]
  return i3448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3451 = data
  i3450.fixedDeltaTime = i3451[0]
  i3450.maximumDeltaTime = i3451[1]
  i3450.timeScale = i3451[2]
  i3450.maximumParticleTimestep = i3451[3]
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3453 = data
  i3452.gravity = new pc.Vec3( i3453[0], i3453[1], i3453[2] )
  i3452.defaultSolverIterations = i3453[3]
  i3452.bounceThreshold = i3453[4]
  i3452.autoSyncTransforms = !!i3453[5]
  i3452.autoSimulation = !!i3453[6]
  var i3455 = i3453[7]
  var i3454 = []
  for(var i = 0; i < i3455.length; i += 1) {
    i3454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3455[i + 0]) );
  }
  i3452.collisionMatrix = i3454
  return i3452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3459 = data
  i3458.enabled = !!i3459[0]
  i3458.layerId = i3459[1]
  i3458.otherLayerId = i3459[2]
  return i3458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3461 = data
  request.r(i3461[0], i3461[1], 0, i3460, 'material')
  i3460.gravity = new pc.Vec2( i3461[2], i3461[3] )
  i3460.positionIterations = i3461[4]
  i3460.velocityIterations = i3461[5]
  i3460.velocityThreshold = i3461[6]
  i3460.maxLinearCorrection = i3461[7]
  i3460.maxAngularCorrection = i3461[8]
  i3460.maxTranslationSpeed = i3461[9]
  i3460.maxRotationSpeed = i3461[10]
  i3460.baumgarteScale = i3461[11]
  i3460.baumgarteTOIScale = i3461[12]
  i3460.timeToSleep = i3461[13]
  i3460.linearSleepTolerance = i3461[14]
  i3460.angularSleepTolerance = i3461[15]
  i3460.defaultContactOffset = i3461[16]
  i3460.autoSimulation = !!i3461[17]
  i3460.queriesHitTriggers = !!i3461[18]
  i3460.queriesStartInColliders = !!i3461[19]
  i3460.callbacksOnDisable = !!i3461[20]
  i3460.reuseCollisionCallbacks = !!i3461[21]
  i3460.autoSyncTransforms = !!i3461[22]
  var i3463 = i3461[23]
  var i3462 = []
  for(var i = 0; i < i3463.length; i += 1) {
    i3462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3463[i + 0]) );
  }
  i3460.collisionMatrix = i3462
  return i3460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3467 = data
  i3466.enabled = !!i3467[0]
  i3466.layerId = i3467[1]
  i3466.otherLayerId = i3467[2]
  return i3466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3469 = data
  var i3471 = i3469[0]
  var i3470 = []
  for(var i = 0; i < i3471.length; i += 1) {
    i3470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3471[i + 0]) );
  }
  i3468.qualityLevels = i3470
  var i3473 = i3469[1]
  var i3472 = []
  for(var i = 0; i < i3473.length; i += 1) {
    i3472.push( i3473[i + 0] );
  }
  i3468.names = i3472
  i3468.shadows = i3469[2]
  i3468.anisotropicFiltering = i3469[3]
  i3468.antiAliasing = i3469[4]
  i3468.lodBias = i3469[5]
  i3468.shadowCascades = i3469[6]
  i3468.shadowDistance = i3469[7]
  i3468.shadowmaskMode = i3469[8]
  i3468.shadowProjection = i3469[9]
  i3468.shadowResolution = i3469[10]
  i3468.softParticles = !!i3469[11]
  i3468.softVegetation = !!i3469[12]
  i3468.activeColorSpace = i3469[13]
  i3468.desiredColorSpace = i3469[14]
  i3468.masterTextureLimit = i3469[15]
  i3468.maxQueuedFrames = i3469[16]
  i3468.particleRaycastBudget = i3469[17]
  i3468.pixelLightCount = i3469[18]
  i3468.realtimeReflectionProbes = !!i3469[19]
  i3468.shadowCascade2Split = i3469[20]
  i3468.shadowCascade4Split = new pc.Vec3( i3469[21], i3469[22], i3469[23] )
  i3468.streamingMipmapsActive = !!i3469[24]
  i3468.vSyncCount = i3469[25]
  i3468.asyncUploadBufferSize = i3469[26]
  i3468.asyncUploadTimeSlice = i3469[27]
  i3468.billboardsFaceCameraPosition = !!i3469[28]
  i3468.shadowNearPlaneOffset = i3469[29]
  i3468.streamingMipmapsMemoryBudget = i3469[30]
  i3468.maximumLODLevel = i3469[31]
  i3468.streamingMipmapsAddAllCameras = !!i3469[32]
  i3468.streamingMipmapsMaxLevelReduction = i3469[33]
  i3468.streamingMipmapsRenderersPerFrame = i3469[34]
  i3468.resolutionScalingFixedDPIFactor = i3469[35]
  i3468.streamingMipmapsMaxFileIORequests = i3469[36]
  i3468.currentQualityLevel = i3469[37]
  return i3468
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3476 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3477 = data
  request.r(i3477[0], i3477[1], 0, i3476, 'm_ObjectArgument')
  i3476.m_ObjectArgumentAssemblyTypeName = i3477[2]
  i3476.m_IntArgument = i3477[3]
  i3476.m_FloatArgument = i3477[4]
  i3476.m_StringArgument = i3477[5]
  i3476.m_BoolArgument = !!i3477[6]
  return i3476
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3478 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3479 = data
  i3478.m_GlyphIndex = i3479[0]
  i3478.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3479[1], i3478.m_GlyphValueRecord)
  return i3478
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3480 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3481 = data
  i3480.m_XCoordinate = i3481[0]
  i3480.m_YCoordinate = i3481[1]
  return i3480
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3482 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3483 = data
  i3482.m_XPositionAdjustment = i3483[0]
  i3482.m_YPositionAdjustment = i3483[1]
  return i3482
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3484 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3485 = data
  i3484.xPlacement = i3485[0]
  i3484.yPlacement = i3485[1]
  i3484.xAdvance = i3485[2]
  i3484.yAdvance = i3485[3]
  return i3484
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3486 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3487 = data
  i3486.m_XPlacement = i3487[0]
  i3486.m_YPlacement = i3487[1]
  i3486.m_XAdvance = i3487[2]
  i3486.m_YAdvance = i3487[3]
  return i3486
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"32":[33],"34":[33],"35":[33],"36":[33],"37":[33],"38":[33],"39":[40],"41":[2],"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[50],"58":[50],"59":[50],"60":[50],"61":[50],"62":[50],"63":[2],"64":[65],"66":[67],"68":[67],"8":[7],"69":[70],"71":[2],"72":[73],"74":[7],"75":[11,7],"76":[65],"77":[11,7],"78":[7],"79":[7],"80":[65,7],"15":[7,11],"81":[82],"83":[82],"84":[82],"85":[7],"86":[7],"10":[8],"13":[11,7],"87":[7],"9":[8],"88":[7],"89":[7],"90":[7],"91":[7],"92":[7],"93":[7],"94":[7],"95":[7],"96":[7],"12":[11,7],"97":[7],"98":[7],"99":[7],"100":[7],"21":[11,7],"101":[7],"102":[5],"103":[5],"6":[5],"104":[5],"105":[2],"106":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","TutController","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.AudioSource","UnityEngine.AudioClip","LunaController","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BP_V26";

Deserializers.lunaInitializationTime = "07/13/2026 06:08:37";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BP_V27_NgocNDL_TamNTM";

Deserializers.lunaAppID = "31727";

Deserializers.projectId = "cf5fc950f05ab5e4dbc1af58c0178185";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1775";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4119";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BP_V26";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "1eb88d58-5644-446d-bfaf-891972ea9207";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

