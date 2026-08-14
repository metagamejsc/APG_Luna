var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2996 = root || request.c( 'UnityEngine.JointSpring' )
  var i2997 = data
  i2996.spring = i2997[0]
  i2996.damper = i2997[1]
  i2996.targetPosition = i2997[2]
  return i2996
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2998 = root || request.c( 'UnityEngine.JointMotor' )
  var i2999 = data
  i2998.m_TargetVelocity = i2999[0]
  i2998.m_Force = i2999[1]
  i2998.m_FreeSpin = i2999[2]
  return i2998
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3000 = root || request.c( 'UnityEngine.JointLimits' )
  var i3001 = data
  i3000.m_Min = i3001[0]
  i3000.m_Max = i3001[1]
  i3000.m_Bounciness = i3001[2]
  i3000.m_BounceMinVelocity = i3001[3]
  i3000.m_ContactDistance = i3001[4]
  i3000.minBounce = i3001[5]
  i3000.maxBounce = i3001[6]
  return i3000
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3002 = root || request.c( 'UnityEngine.JointDrive' )
  var i3003 = data
  i3002.m_PositionSpring = i3003[0]
  i3002.m_PositionDamper = i3003[1]
  i3002.m_MaximumForce = i3003[2]
  i3002.m_UseAcceleration = i3003[3]
  return i3002
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3004 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3005 = data
  i3004.m_Spring = i3005[0]
  i3004.m_Damper = i3005[1]
  return i3004
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3006 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3007 = data
  i3006.m_Limit = i3007[0]
  i3006.m_Bounciness = i3007[1]
  i3006.m_ContactDistance = i3007[2]
  return i3006
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3008 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3009 = data
  i3008.m_ExtremumSlip = i3009[0]
  i3008.m_ExtremumValue = i3009[1]
  i3008.m_AsymptoteSlip = i3009[2]
  i3008.m_AsymptoteValue = i3009[3]
  i3008.m_Stiffness = i3009[4]
  return i3008
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3010 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3011 = data
  i3010.m_LowerAngle = i3011[0]
  i3010.m_UpperAngle = i3011[1]
  return i3010
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3012 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3013 = data
  i3012.m_MotorSpeed = i3013[0]
  i3012.m_MaximumMotorTorque = i3013[1]
  return i3012
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3014 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3015 = data
  i3014.m_DampingRatio = i3015[0]
  i3014.m_Frequency = i3015[1]
  i3014.m_Angle = i3015[2]
  return i3014
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3016 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3017 = data
  i3016.m_LowerTranslation = i3017[0]
  i3016.m_UpperTranslation = i3017[1]
  return i3016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3019 = data
  i3018.name = i3019[0]
  i3018.width = i3019[1]
  i3018.height = i3019[2]
  i3018.mipmapCount = i3019[3]
  i3018.anisoLevel = i3019[4]
  i3018.filterMode = i3019[5]
  i3018.hdr = !!i3019[6]
  i3018.format = i3019[7]
  i3018.wrapMode = i3019[8]
  i3018.alphaIsTransparency = !!i3019[9]
  i3018.alphaSource = i3019[10]
  i3018.graphicsFormat = i3019[11]
  i3018.sRGBTexture = !!i3019[12]
  i3018.desiredColorSpace = i3019[13]
  i3018.wrapU = i3019[14]
  i3018.wrapV = i3019[15]
  return i3018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3020 = root || new pc.UnityMaterial()
  var i3021 = data
  i3020.name = i3021[0]
  request.r(i3021[1], i3021[2], 0, i3020, 'shader')
  i3020.renderQueue = i3021[3]
  i3020.enableInstancing = !!i3021[4]
  var i3023 = i3021[5]
  var i3022 = []
  for(var i = 0; i < i3023.length; i += 1) {
    i3022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3023[i + 0]) );
  }
  i3020.floatParameters = i3022
  var i3025 = i3021[6]
  var i3024 = []
  for(var i = 0; i < i3025.length; i += 1) {
    i3024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3025[i + 0]) );
  }
  i3020.colorParameters = i3024
  var i3027 = i3021[7]
  var i3026 = []
  for(var i = 0; i < i3027.length; i += 1) {
    i3026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3027[i + 0]) );
  }
  i3020.vectorParameters = i3026
  var i3029 = i3021[8]
  var i3028 = []
  for(var i = 0; i < i3029.length; i += 1) {
    i3028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3029[i + 0]) );
  }
  i3020.textureParameters = i3028
  var i3031 = i3021[9]
  var i3030 = []
  for(var i = 0; i < i3031.length; i += 1) {
    i3030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3031[i + 0]) );
  }
  i3020.materialFlags = i3030
  return i3020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3035 = data
  i3034.name = i3035[0]
  i3034.value = i3035[1]
  return i3034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3039 = data
  i3038.name = i3039[0]
  i3038.value = new pc.Color(i3039[1], i3039[2], i3039[3], i3039[4])
  return i3038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3043 = data
  i3042.name = i3043[0]
  i3042.value = new pc.Vec4( i3043[1], i3043[2], i3043[3], i3043[4] )
  return i3042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3047 = data
  i3046.name = i3047[0]
  request.r(i3047[1], i3047[2], 0, i3046, 'value')
  return i3046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3051 = data
  i3050.name = i3051[0]
  i3050.enabled = !!i3051[1]
  return i3050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3053 = data
  i3052.name = i3053[0]
  i3052.index = i3053[1]
  i3052.startup = !!i3053[2]
  return i3052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3055 = data
  i3054.aspect = i3055[0]
  i3054.orthographic = !!i3055[1]
  i3054.orthographicSize = i3055[2]
  i3054.backgroundColor = new pc.Color(i3055[3], i3055[4], i3055[5], i3055[6])
  i3054.nearClipPlane = i3055[7]
  i3054.farClipPlane = i3055[8]
  i3054.fieldOfView = i3055[9]
  i3054.depth = i3055[10]
  i3054.clearFlags = i3055[11]
  i3054.cullingMask = i3055[12]
  i3054.rect = i3055[13]
  request.r(i3055[14], i3055[15], 0, i3054, 'targetTexture')
  i3054.usePhysicalProperties = !!i3055[16]
  i3054.focalLength = i3055[17]
  i3054.sensorSize = new pc.Vec2( i3055[18], i3055[19] )
  i3054.lensShift = new pc.Vec2( i3055[20], i3055[21] )
  i3054.gateFit = i3055[22]
  i3054.commandBufferCount = i3055[23]
  i3054.cameraType = i3055[24]
  i3054.enabled = !!i3055[25]
  return i3054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3057 = data
  i3056.name = i3057[0]
  i3056.tagId = i3057[1]
  i3056.enabled = !!i3057[2]
  i3056.isStatic = !!i3057[3]
  i3056.layer = i3057[4]
  return i3056
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3058 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3059 = data
  request.r(i3059[0], i3059[1], 0, i3058, 'm_FirstSelected')
  i3058.m_sendNavigationEvents = !!i3059[2]
  i3058.m_DragThreshold = i3059[3]
  return i3058
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3060 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3061 = data
  i3060.m_HorizontalAxis = i3061[0]
  i3060.m_VerticalAxis = i3061[1]
  i3060.m_SubmitButton = i3061[2]
  i3060.m_CancelButton = i3061[3]
  i3060.m_InputActionsPerSecond = i3061[4]
  i3060.m_RepeatDelay = i3061[5]
  i3060.m_ForceModuleActive = !!i3061[6]
  i3060.m_SendPointerHoverToParent = !!i3061[7]
  return i3060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3063 = data
  i3062.pivot = new pc.Vec2( i3063[0], i3063[1] )
  i3062.anchorMin = new pc.Vec2( i3063[2], i3063[3] )
  i3062.anchorMax = new pc.Vec2( i3063[4], i3063[5] )
  i3062.sizeDelta = new pc.Vec2( i3063[6], i3063[7] )
  i3062.anchoredPosition3D = new pc.Vec3( i3063[8], i3063[9], i3063[10] )
  i3062.rotation = new pc.Quat(i3063[11], i3063[12], i3063[13], i3063[14])
  i3062.scale = new pc.Vec3( i3063[15], i3063[16], i3063[17] )
  return i3062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3065 = data
  i3064.planeDistance = i3065[0]
  i3064.referencePixelsPerUnit = i3065[1]
  i3064.isFallbackOverlay = !!i3065[2]
  i3064.renderMode = i3065[3]
  i3064.renderOrder = i3065[4]
  i3064.sortingLayerName = i3065[5]
  i3064.sortingOrder = i3065[6]
  i3064.scaleFactor = i3065[7]
  request.r(i3065[8], i3065[9], 0, i3064, 'worldCamera')
  i3064.overrideSorting = !!i3065[10]
  i3064.pixelPerfect = !!i3065[11]
  i3064.targetDisplay = i3065[12]
  i3064.overridePixelPerfect = !!i3065[13]
  i3064.enabled = !!i3065[14]
  return i3064
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3066 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3067 = data
  i3066.m_UiScaleMode = i3067[0]
  i3066.m_ReferencePixelsPerUnit = i3067[1]
  i3066.m_ScaleFactor = i3067[2]
  i3066.m_ReferenceResolution = new pc.Vec2( i3067[3], i3067[4] )
  i3066.m_ScreenMatchMode = i3067[5]
  i3066.m_MatchWidthOrHeight = i3067[6]
  i3066.m_PhysicalUnit = i3067[7]
  i3066.m_FallbackScreenDPI = i3067[8]
  i3066.m_DefaultSpriteDPI = i3067[9]
  i3066.m_DynamicPixelsPerUnit = i3067[10]
  i3066.m_PresetInfoIsWorld = !!i3067[11]
  return i3066
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3068 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3069 = data
  i3068.m_IgnoreReversedGraphics = !!i3069[0]
  i3068.m_BlockingObjects = i3069[1]
  i3068.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3069[2] )
  return i3068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3071 = data
  i3070.cullTransparentMesh = !!i3071[0]
  return i3070
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3072 = root || request.c( 'UnityEngine.UI.Image' )
  var i3073 = data
  request.r(i3073[0], i3073[1], 0, i3072, 'm_Sprite')
  i3072.m_Type = i3073[2]
  i3072.m_PreserveAspect = !!i3073[3]
  i3072.m_FillCenter = !!i3073[4]
  i3072.m_FillMethod = i3073[5]
  i3072.m_FillAmount = i3073[6]
  i3072.m_FillClockwise = !!i3073[7]
  i3072.m_FillOrigin = i3073[8]
  i3072.m_UseSpriteMesh = !!i3073[9]
  i3072.m_PixelsPerUnitMultiplier = i3073[10]
  request.r(i3073[11], i3073[12], 0, i3072, 'm_Material')
  i3072.m_Maskable = !!i3073[13]
  i3072.m_Color = new pc.Color(i3073[14], i3073[15], i3073[16], i3073[17])
  i3072.m_RaycastTarget = !!i3073[18]
  i3072.m_RaycastPadding = new pc.Vec4( i3073[19], i3073[20], i3073[21], i3073[22] )
  return i3072
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3074 = root || request.c( 'UnityEngine.UI.Text' )
  var i3075 = data
  i3074.m_FontData = request.d('UnityEngine.UI.FontData', i3075[0], i3074.m_FontData)
  i3074.m_Text = i3075[1]
  request.r(i3075[2], i3075[3], 0, i3074, 'm_Material')
  i3074.m_Maskable = !!i3075[4]
  i3074.m_Color = new pc.Color(i3075[5], i3075[6], i3075[7], i3075[8])
  i3074.m_RaycastTarget = !!i3075[9]
  i3074.m_RaycastPadding = new pc.Vec4( i3075[10], i3075[11], i3075[12], i3075[13] )
  return i3074
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3076 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3077 = data
  request.r(i3077[0], i3077[1], 0, i3076, 'm_Font')
  i3076.m_FontSize = i3077[2]
  i3076.m_FontStyle = i3077[3]
  i3076.m_BestFit = !!i3077[4]
  i3076.m_MinSize = i3077[5]
  i3076.m_MaxSize = i3077[6]
  i3076.m_Alignment = i3077[7]
  i3076.m_AlignByGeometry = !!i3077[8]
  i3076.m_RichText = !!i3077[9]
  i3076.m_HorizontalOverflow = i3077[10]
  i3076.m_VerticalOverflow = i3077[11]
  i3076.m_LineSpacing = i3077[12]
  return i3076
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i3078 = root || request.c( 'UnityEngine.UI.Slider' )
  var i3079 = data
  request.r(i3079[0], i3079[1], 0, i3078, 'm_FillRect')
  request.r(i3079[2], i3079[3], 0, i3078, 'm_HandleRect')
  i3078.m_Direction = i3079[4]
  i3078.m_MinValue = i3079[5]
  i3078.m_MaxValue = i3079[6]
  i3078.m_WholeNumbers = !!i3079[7]
  i3078.m_Value = i3079[8]
  i3078.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i3079[9], i3078.m_OnValueChanged)
  i3078.m_Navigation = request.d('UnityEngine.UI.Navigation', i3079[10], i3078.m_Navigation)
  i3078.m_Transition = i3079[11]
  i3078.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3079[12], i3078.m_Colors)
  i3078.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3079[13], i3078.m_SpriteState)
  i3078.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3079[14], i3078.m_AnimationTriggers)
  i3078.m_Interactable = !!i3079[15]
  request.r(i3079[16], i3079[17], 0, i3078, 'm_TargetGraphic')
  return i3078
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i3080 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i3081 = data
  i3080.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3081[0], i3080.m_PersistentCalls)
  return i3080
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3082 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3083 = data
  var i3085 = i3083[0]
  var i3084 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3085.length; i += 1) {
    i3084.add(request.d('UnityEngine.Events.PersistentCall', i3085[i + 0]));
  }
  i3082.m_Calls = i3084
  return i3082
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3088 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3089 = data
  request.r(i3089[0], i3089[1], 0, i3088, 'm_Target')
  i3088.m_TargetAssemblyTypeName = i3089[2]
  i3088.m_MethodName = i3089[3]
  i3088.m_Mode = i3089[4]
  i3088.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3089[5], i3088.m_Arguments)
  i3088.m_CallState = i3089[6]
  return i3088
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3090 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3091 = data
  i3090.m_Mode = i3091[0]
  i3090.m_WrapAround = !!i3091[1]
  request.r(i3091[2], i3091[3], 0, i3090, 'm_SelectOnUp')
  request.r(i3091[4], i3091[5], 0, i3090, 'm_SelectOnDown')
  request.r(i3091[6], i3091[7], 0, i3090, 'm_SelectOnLeft')
  request.r(i3091[8], i3091[9], 0, i3090, 'm_SelectOnRight')
  return i3090
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3092 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3093 = data
  i3092.m_NormalColor = new pc.Color(i3093[0], i3093[1], i3093[2], i3093[3])
  i3092.m_HighlightedColor = new pc.Color(i3093[4], i3093[5], i3093[6], i3093[7])
  i3092.m_PressedColor = new pc.Color(i3093[8], i3093[9], i3093[10], i3093[11])
  i3092.m_SelectedColor = new pc.Color(i3093[12], i3093[13], i3093[14], i3093[15])
  i3092.m_DisabledColor = new pc.Color(i3093[16], i3093[17], i3093[18], i3093[19])
  i3092.m_ColorMultiplier = i3093[20]
  i3092.m_FadeDuration = i3093[21]
  return i3092
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3094 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3095 = data
  request.r(i3095[0], i3095[1], 0, i3094, 'm_HighlightedSprite')
  request.r(i3095[2], i3095[3], 0, i3094, 'm_PressedSprite')
  request.r(i3095[4], i3095[5], 0, i3094, 'm_SelectedSprite')
  request.r(i3095[6], i3095[7], 0, i3094, 'm_DisabledSprite')
  return i3094
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3096 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3097 = data
  i3096.m_NormalTrigger = i3097[0]
  i3096.m_HighlightedTrigger = i3097[1]
  i3096.m_PressedTrigger = i3097[2]
  i3096.m_SelectedTrigger = i3097[3]
  i3096.m_DisabledTrigger = i3097[4]
  return i3096
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3098 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3099 = data
  i3098.m_ShowMaskGraphic = !!i3099[0]
  return i3098
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i3100 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i3101 = data
  request.r(i3101[0], i3101[1], 0, i3100, 'skeletonDataAsset')
  request.r(i3101[2], i3101[3], 0, i3100, 'additiveMaterial')
  request.r(i3101[4], i3101[5], 0, i3100, 'multiplyMaterial')
  request.r(i3101[6], i3101[7], 0, i3100, 'screenMaterial')
  i3100.initialSkinName = i3101[8]
  i3100.initialFlipX = !!i3101[9]
  i3100.initialFlipY = !!i3101[10]
  i3100.startingAnimation = i3101[11]
  i3100.startingLoop = !!i3101[12]
  i3100.timeScale = i3101[13]
  i3100.freeze = !!i3101[14]
  i3100.layoutScaleMode = i3101[15]
  i3100.updateWhenInvisible = i3101[16]
  i3100.allowMultipleCanvasRenderers = !!i3101[17]
  var i3103 = i3101[18]
  var i3102 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i3103.length; i += 2) {
  request.r(i3103[i + 0], i3103[i + 1], 1, i3102, '')
  }
  i3100.canvasRenderers = i3102
  i3100.enableSeparatorSlots = !!i3101[19]
  i3100.updateSeparatorPartLocation = !!i3101[20]
  i3100.updateSeparatorPartScale = !!i3101[21]
  i3100.disableMeshAssignmentOnOverride = !!i3101[22]
  i3100.referenceSize = new pc.Vec2( i3101[23], i3101[24] )
  i3100.referenceScale = i3101[25]
  i3100.rectTransformSize = new pc.Vec2( i3101[26], i3101[27] )
  i3100.editReferenceRect = !!i3101[28]
  var i3105 = i3101[29]
  var i3104 = []
  for(var i = 0; i < i3105.length; i += 1) {
    i3104.push( i3105[i + 0] );
  }
  i3100.separatorSlotNames = i3104
  var i3107 = i3101[30]
  var i3106 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3107.length; i += 2) {
  request.r(i3107[i + 0], i3107[i + 1], 1, i3106, '')
  }
  i3100.separatorParts = i3106
  i3100.meshGenerator = request.d('Spine.Unity.MeshGenerator', i3101[31], i3100.meshGenerator)
  i3100.updateTiming = i3101[32]
  i3100.unscaledTime = !!i3101[33]
  request.r(i3101[34], i3101[35], 0, i3100, 'm_Material')
  i3100.m_Maskable = !!i3101[36]
  i3100.m_Color = new pc.Color(i3101[37], i3101[38], i3101[39], i3101[40])
  i3100.m_RaycastTarget = !!i3101[41]
  i3100.m_RaycastPadding = new pc.Vec4( i3101[42], i3101[43], i3101[44], i3101[45] )
  return i3100
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i3114 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i3115 = data
  i3114.settings = request.d('Spine.Unity.MeshGenerator+Settings', i3115[0], i3114.settings)
  return i3114
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i3116 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i3117 = data
  i3116.useClipping = !!i3117[0]
  i3116.zSpacing = i3117[1]
  i3116.pmaVertexColors = !!i3117[2]
  i3116.tintBlack = !!i3117[3]
  i3116.canvasGroupTintBlack = !!i3117[4]
  i3116.calculateTangents = !!i3117[5]
  i3116.addNormals = !!i3117[6]
  i3116.immutableTriangles = !!i3117[7]
  return i3116
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i3118 = root || request.c( 'AnimationController' )
  var i3119 = data
  request.r(i3119[0], i3119[1], 0, i3118, 'skeleton')
  request.r(i3119[2], i3119[3], 0, i3118, 'item')
  return i3118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3121 = data
  i3120.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3121[0], i3120.main)
  i3120.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3121[1], i3120.colorBySpeed)
  i3120.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3121[2], i3120.colorOverLifetime)
  i3120.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3121[3], i3120.emission)
  i3120.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3121[4], i3120.rotationBySpeed)
  i3120.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3121[5], i3120.rotationOverLifetime)
  i3120.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3121[6], i3120.shape)
  i3120.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3121[7], i3120.sizeBySpeed)
  i3120.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3121[8], i3120.sizeOverLifetime)
  i3120.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3121[9], i3120.textureSheetAnimation)
  i3120.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3121[10], i3120.velocityOverLifetime)
  i3120.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3121[11], i3120.noise)
  i3120.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3121[12], i3120.inheritVelocity)
  i3120.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3121[13], i3120.forceOverLifetime)
  i3120.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3121[14], i3120.limitVelocityOverLifetime)
  i3120.useAutoRandomSeed = !!i3121[15]
  i3120.randomSeed = i3121[16]
  return i3120
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3122 = root || new pc.ParticleSystemMain()
  var i3123 = data
  i3122.duration = i3123[0]
  i3122.loop = !!i3123[1]
  i3122.prewarm = !!i3123[2]
  i3122.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3123[3], i3122.startDelay)
  i3122.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3123[4], i3122.startLifetime)
  i3122.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3123[5], i3122.startSpeed)
  i3122.startSize3D = !!i3123[6]
  i3122.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3123[7], i3122.startSizeX)
  i3122.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3123[8], i3122.startSizeY)
  i3122.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3123[9], i3122.startSizeZ)
  i3122.startRotation3D = !!i3123[10]
  i3122.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3123[11], i3122.startRotationX)
  i3122.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3123[12], i3122.startRotationY)
  i3122.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3123[13], i3122.startRotationZ)
  i3122.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3123[14], i3122.startColor)
  i3122.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3123[15], i3122.gravityModifier)
  i3122.simulationSpace = i3123[16]
  request.r(i3123[17], i3123[18], 0, i3122, 'customSimulationSpace')
  i3122.simulationSpeed = i3123[19]
  i3122.useUnscaledTime = !!i3123[20]
  i3122.scalingMode = i3123[21]
  i3122.playOnAwake = !!i3123[22]
  i3122.maxParticles = i3123[23]
  i3122.emitterVelocityMode = i3123[24]
  i3122.stopAction = i3123[25]
  return i3122
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3124 = root || new pc.MinMaxCurve()
  var i3125 = data
  i3124.mode = i3125[0]
  i3124.curveMin = new pc.AnimationCurve( { keys_flow: i3125[1] } )
  i3124.curveMax = new pc.AnimationCurve( { keys_flow: i3125[2] } )
  i3124.curveMultiplier = i3125[3]
  i3124.constantMin = i3125[4]
  i3124.constantMax = i3125[5]
  return i3124
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3126 = root || new pc.MinMaxGradient()
  var i3127 = data
  i3126.mode = i3127[0]
  i3126.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3127[1], i3126.gradientMin)
  i3126.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3127[2], i3126.gradientMax)
  i3126.colorMin = new pc.Color(i3127[3], i3127[4], i3127[5], i3127[6])
  i3126.colorMax = new pc.Color(i3127[7], i3127[8], i3127[9], i3127[10])
  return i3126
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3129 = data
  i3128.mode = i3129[0]
  var i3131 = i3129[1]
  var i3130 = []
  for(var i = 0; i < i3131.length; i += 1) {
    i3130.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3131[i + 0]) );
  }
  i3128.colorKeys = i3130
  var i3133 = i3129[2]
  var i3132 = []
  for(var i = 0; i < i3133.length; i += 1) {
    i3132.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3133[i + 0]) );
  }
  i3128.alphaKeys = i3132
  return i3128
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3134 = root || new pc.ParticleSystemColorBySpeed()
  var i3135 = data
  i3134.enabled = !!i3135[0]
  i3134.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3135[1], i3134.color)
  i3134.range = new pc.Vec2( i3135[2], i3135[3] )
  return i3134
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3139 = data
  i3138.color = new pc.Color(i3139[0], i3139[1], i3139[2], i3139[3])
  i3138.time = i3139[4]
  return i3138
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3143 = data
  i3142.alpha = i3143[0]
  i3142.time = i3143[1]
  return i3142
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3144 = root || new pc.ParticleSystemColorOverLifetime()
  var i3145 = data
  i3144.enabled = !!i3145[0]
  i3144.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3145[1], i3144.color)
  return i3144
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3146 = root || new pc.ParticleSystemEmitter()
  var i3147 = data
  i3146.enabled = !!i3147[0]
  i3146.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3147[1], i3146.rateOverTime)
  i3146.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3147[2], i3146.rateOverDistance)
  var i3149 = i3147[3]
  var i3148 = []
  for(var i = 0; i < i3149.length; i += 1) {
    i3148.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3149[i + 0]) );
  }
  i3146.bursts = i3148
  return i3146
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3152 = root || new pc.ParticleSystemBurst()
  var i3153 = data
  i3152.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3153[0], i3152.count)
  i3152.cycleCount = i3153[1]
  i3152.minCount = i3153[2]
  i3152.maxCount = i3153[3]
  i3152.repeatInterval = i3153[4]
  i3152.time = i3153[5]
  return i3152
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3154 = root || new pc.ParticleSystemRotationBySpeed()
  var i3155 = data
  i3154.enabled = !!i3155[0]
  i3154.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3155[1], i3154.x)
  i3154.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3155[2], i3154.y)
  i3154.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3155[3], i3154.z)
  i3154.separateAxes = !!i3155[4]
  i3154.range = new pc.Vec2( i3155[5], i3155[6] )
  return i3154
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3156 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3157 = data
  i3156.enabled = !!i3157[0]
  i3156.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3157[1], i3156.x)
  i3156.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3157[2], i3156.y)
  i3156.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3157[3], i3156.z)
  i3156.separateAxes = !!i3157[4]
  return i3156
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3158 = root || new pc.ParticleSystemShape()
  var i3159 = data
  i3158.enabled = !!i3159[0]
  i3158.shapeType = i3159[1]
  i3158.randomDirectionAmount = i3159[2]
  i3158.sphericalDirectionAmount = i3159[3]
  i3158.randomPositionAmount = i3159[4]
  i3158.alignToDirection = !!i3159[5]
  i3158.radius = i3159[6]
  i3158.radiusMode = i3159[7]
  i3158.radiusSpread = i3159[8]
  i3158.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3159[9], i3158.radiusSpeed)
  i3158.radiusThickness = i3159[10]
  i3158.angle = i3159[11]
  i3158.length = i3159[12]
  i3158.boxThickness = new pc.Vec3( i3159[13], i3159[14], i3159[15] )
  i3158.meshShapeType = i3159[16]
  request.r(i3159[17], i3159[18], 0, i3158, 'mesh')
  request.r(i3159[19], i3159[20], 0, i3158, 'meshRenderer')
  request.r(i3159[21], i3159[22], 0, i3158, 'skinnedMeshRenderer')
  i3158.useMeshMaterialIndex = !!i3159[23]
  i3158.meshMaterialIndex = i3159[24]
  i3158.useMeshColors = !!i3159[25]
  i3158.normalOffset = i3159[26]
  i3158.arc = i3159[27]
  i3158.arcMode = i3159[28]
  i3158.arcSpread = i3159[29]
  i3158.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3159[30], i3158.arcSpeed)
  i3158.donutRadius = i3159[31]
  i3158.position = new pc.Vec3( i3159[32], i3159[33], i3159[34] )
  i3158.rotation = new pc.Vec3( i3159[35], i3159[36], i3159[37] )
  i3158.scale = new pc.Vec3( i3159[38], i3159[39], i3159[40] )
  return i3158
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3160 = root || new pc.ParticleSystemSizeBySpeed()
  var i3161 = data
  i3160.enabled = !!i3161[0]
  i3160.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3161[1], i3160.x)
  i3160.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3161[2], i3160.y)
  i3160.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3161[3], i3160.z)
  i3160.separateAxes = !!i3161[4]
  i3160.range = new pc.Vec2( i3161[5], i3161[6] )
  return i3160
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3162 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3163 = data
  i3162.enabled = !!i3163[0]
  i3162.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3163[1], i3162.x)
  i3162.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3163[2], i3162.y)
  i3162.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3163[3], i3162.z)
  i3162.separateAxes = !!i3163[4]
  return i3162
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3164 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3165 = data
  i3164.enabled = !!i3165[0]
  i3164.mode = i3165[1]
  i3164.animation = i3165[2]
  i3164.numTilesX = i3165[3]
  i3164.numTilesY = i3165[4]
  i3164.useRandomRow = !!i3165[5]
  i3164.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3165[6], i3164.frameOverTime)
  i3164.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3165[7], i3164.startFrame)
  i3164.cycleCount = i3165[8]
  i3164.rowIndex = i3165[9]
  i3164.flipU = i3165[10]
  i3164.flipV = i3165[11]
  i3164.spriteCount = i3165[12]
  var i3167 = i3165[13]
  var i3166 = []
  for(var i = 0; i < i3167.length; i += 2) {
  request.r(i3167[i + 0], i3167[i + 1], 2, i3166, '')
  }
  i3164.sprites = i3166
  return i3164
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3170 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3171 = data
  i3170.enabled = !!i3171[0]
  i3170.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3171[1], i3170.x)
  i3170.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3171[2], i3170.y)
  i3170.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3171[3], i3170.z)
  i3170.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3171[4], i3170.radial)
  i3170.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3171[5], i3170.speedModifier)
  i3170.space = i3171[6]
  i3170.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3171[7], i3170.orbitalX)
  i3170.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3171[8], i3170.orbitalY)
  i3170.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3171[9], i3170.orbitalZ)
  i3170.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3171[10], i3170.orbitalOffsetX)
  i3170.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3171[11], i3170.orbitalOffsetY)
  i3170.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3171[12], i3170.orbitalOffsetZ)
  return i3170
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3172 = root || new pc.ParticleSystemNoise()
  var i3173 = data
  i3172.enabled = !!i3173[0]
  i3172.separateAxes = !!i3173[1]
  i3172.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3173[2], i3172.strengthX)
  i3172.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3173[3], i3172.strengthY)
  i3172.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3173[4], i3172.strengthZ)
  i3172.frequency = i3173[5]
  i3172.damping = !!i3173[6]
  i3172.octaveCount = i3173[7]
  i3172.octaveMultiplier = i3173[8]
  i3172.octaveScale = i3173[9]
  i3172.quality = i3173[10]
  i3172.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3173[11], i3172.scrollSpeed)
  i3172.scrollSpeedMultiplier = i3173[12]
  i3172.remapEnabled = !!i3173[13]
  i3172.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3173[14], i3172.remapX)
  i3172.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3173[15], i3172.remapY)
  i3172.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3173[16], i3172.remapZ)
  i3172.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3173[17], i3172.positionAmount)
  i3172.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3173[18], i3172.rotationAmount)
  i3172.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3173[19], i3172.sizeAmount)
  return i3172
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3174 = root || new pc.ParticleSystemInheritVelocity()
  var i3175 = data
  i3174.enabled = !!i3175[0]
  i3174.mode = i3175[1]
  i3174.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3175[2], i3174.curve)
  return i3174
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3176 = root || new pc.ParticleSystemForceOverLifetime()
  var i3177 = data
  i3176.enabled = !!i3177[0]
  i3176.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3177[1], i3176.x)
  i3176.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3177[2], i3176.y)
  i3176.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3177[3], i3176.z)
  i3176.space = i3177[4]
  i3176.randomized = !!i3177[5]
  return i3176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3178 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3179 = data
  i3178.enabled = !!i3179[0]
  i3178.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3179[1], i3178.limit)
  i3178.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3179[2], i3178.limitX)
  i3178.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3179[3], i3178.limitY)
  i3178.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3179[4], i3178.limitZ)
  i3178.dampen = i3179[5]
  i3178.separateAxes = !!i3179[6]
  i3178.space = i3179[7]
  i3178.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3179[8], i3178.drag)
  i3178.multiplyDragByParticleSize = !!i3179[9]
  i3178.multiplyDragByParticleVelocity = !!i3179[10]
  return i3178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3181 = data
  request.r(i3181[0], i3181[1], 0, i3180, 'mesh')
  i3180.meshCount = i3181[2]
  i3180.activeVertexStreamsCount = i3181[3]
  i3180.alignment = i3181[4]
  i3180.renderMode = i3181[5]
  i3180.sortMode = i3181[6]
  i3180.lengthScale = i3181[7]
  i3180.velocityScale = i3181[8]
  i3180.cameraVelocityScale = i3181[9]
  i3180.normalDirection = i3181[10]
  i3180.sortingFudge = i3181[11]
  i3180.minParticleSize = i3181[12]
  i3180.maxParticleSize = i3181[13]
  i3180.pivot = new pc.Vec3( i3181[14], i3181[15], i3181[16] )
  request.r(i3181[17], i3181[18], 0, i3180, 'trailMaterial')
  i3180.applyActiveColorSpace = !!i3181[19]
  i3180.enabled = !!i3181[20]
  request.r(i3181[21], i3181[22], 0, i3180, 'sharedMaterial')
  var i3183 = i3181[23]
  var i3182 = []
  for(var i = 0; i < i3183.length; i += 2) {
  request.r(i3183[i + 0], i3183[i + 1], 2, i3182, '')
  }
  i3180.sharedMaterials = i3182
  i3180.receiveShadows = !!i3181[24]
  i3180.shadowCastingMode = i3181[25]
  i3180.sortingLayerID = i3181[26]
  i3180.sortingOrder = i3181[27]
  i3180.lightmapIndex = i3181[28]
  i3180.lightmapSceneIndex = i3181[29]
  i3180.lightmapScaleOffset = new pc.Vec4( i3181[30], i3181[31], i3181[32], i3181[33] )
  i3180.lightProbeUsage = i3181[34]
  i3180.reflectionProbeUsage = i3181[35]
  return i3180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3187 = data
  request.r(i3187[0], i3187[1], 0, i3186, 'clip')
  request.r(i3187[2], i3187[3], 0, i3186, 'outputAudioMixerGroup')
  i3186.playOnAwake = !!i3187[4]
  i3186.loop = !!i3187[5]
  i3186.time = i3187[6]
  i3186.volume = i3187[7]
  i3186.pitch = i3187[8]
  i3186.enabled = !!i3187[9]
  return i3186
}

Deserializers["CharacterSkinController"] = function (request, data, root) {
  var i3188 = root || request.c( 'CharacterSkinController' )
  var i3189 = data
  request.r(i3189[0], i3189[1], 0, i3188, 'skeletonAnimation')
  request.r(i3189[2], i3189[3], 0, i3188, 'thinData')
  i3188.smallFace = request.d('Item', i3189[4], i3188.smallFace)
  i3188.smallBody = request.d('Item', i3189[5], i3188.smallBody)
  i3188.accessory = request.d('Item', i3189[6], i3188.accessory)
  i3188.dress = request.d('Item', i3189[7], i3188.dress)
  i3188.glass = request.d('Item', i3189[8], i3188.glass)
  i3188.face = request.d('Item', i3189[9], i3188.face)
  i3188.hair = request.d('Item', i3189[10], i3188.hair)
  i3188.legHair = request.d('Item', i3189[11], i3188.legHair)
  i3188.smoke = request.d('Item', i3189[12], i3188.smoke)
  i3188.sock = request.d('Item', i3189[13], i3188.sock)
  return i3188
}

Deserializers["Item"] = function (request, data, root) {
  var i3190 = root || request.c( 'Item' )
  var i3191 = data
  request.r(i3191[0], i3191[1], 0, i3190, 'ActiveItem')
  request.r(i3191[2], i3191[3], 0, i3190, 'ActiveSound')
  return i3190
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3192 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3193 = data
  i3192.targetIsSelf = !!i3193[0]
  request.r(i3193[1], i3193[2], 0, i3192, 'targetGO')
  i3192.tweenTargetIsTargetGO = !!i3193[3]
  i3192.delay = i3193[4]
  i3192.duration = i3193[5]
  i3192.easeType = i3193[6]
  i3192.easeCurve = new pc.AnimationCurve( { keys_flow: i3193[7] } )
  i3192.loopType = i3193[8]
  i3192.loops = i3193[9]
  i3192.id = i3193[10]
  i3192.isRelative = !!i3193[11]
  i3192.isFrom = !!i3193[12]
  i3192.isIndependentUpdate = !!i3193[13]
  i3192.autoKill = !!i3193[14]
  i3192.autoGenerate = !!i3193[15]
  i3192.isActive = !!i3193[16]
  i3192.isValid = !!i3193[17]
  request.r(i3193[18], i3193[19], 0, i3192, 'target')
  i3192.animationType = i3193[20]
  i3192.targetType = i3193[21]
  i3192.forcedTargetType = i3193[22]
  i3192.autoPlay = !!i3193[23]
  i3192.useTargetAsV3 = !!i3193[24]
  i3192.endValueFloat = i3193[25]
  i3192.endValueV3 = new pc.Vec3( i3193[26], i3193[27], i3193[28] )
  i3192.endValueV2 = new pc.Vec2( i3193[29], i3193[30] )
  i3192.endValueColor = new pc.Color(i3193[31], i3193[32], i3193[33], i3193[34])
  i3192.endValueString = i3193[35]
  i3192.endValueRect = UnityEngine.Rect.MinMaxRect(i3193[36], i3193[37], i3193[38], i3193[39])
  request.r(i3193[40], i3193[41], 0, i3192, 'endValueTransform')
  i3192.optionalBool0 = !!i3193[42]
  i3192.optionalBool1 = !!i3193[43]
  i3192.optionalFloat0 = i3193[44]
  i3192.optionalInt0 = i3193[45]
  i3192.optionalRotationMode = i3193[46]
  i3192.optionalScrambleMode = i3193[47]
  i3192.optionalShakeRandomnessMode = i3193[48]
  i3192.optionalString = i3193[49]
  i3192.updateType = i3193[50]
  i3192.isSpeedBased = !!i3193[51]
  i3192.hasOnStart = !!i3193[52]
  i3192.hasOnPlay = !!i3193[53]
  i3192.hasOnUpdate = !!i3193[54]
  i3192.hasOnStepComplete = !!i3193[55]
  i3192.hasOnComplete = !!i3193[56]
  i3192.hasOnTweenCreated = !!i3193[57]
  i3192.hasOnRewind = !!i3193[58]
  i3192.onStart = request.d('UnityEngine.Events.UnityEvent', i3193[59], i3192.onStart)
  i3192.onPlay = request.d('UnityEngine.Events.UnityEvent', i3193[60], i3192.onPlay)
  i3192.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3193[61], i3192.onUpdate)
  i3192.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3193[62], i3192.onStepComplete)
  i3192.onComplete = request.d('UnityEngine.Events.UnityEvent', i3193[63], i3192.onComplete)
  i3192.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3193[64], i3192.onTweenCreated)
  i3192.onRewind = request.d('UnityEngine.Events.UnityEvent', i3193[65], i3192.onRewind)
  return i3192
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3194 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3195 = data
  i3194.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3195[0], i3194.m_PersistentCalls)
  return i3194
}

Deserializers["TutController"] = function (request, data, root) {
  var i3196 = root || request.c( 'TutController' )
  var i3197 = data
  request.r(i3197[0], i3197[1], 0, i3196, 'icon')
  request.r(i3197[2], i3197[3], 0, i3196, 'tutObject')
  i3196.toPos = new pc.Vec3( i3197[4], i3197[5], i3197[6] )
  i3196.timeMove = i3197[7]
  i3196.timeDelay = i3197[8]
  return i3196
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3198 = root || request.c( 'UnityEngine.UI.Button' )
  var i3199 = data
  i3198.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3199[0], i3198.m_OnClick)
  i3198.m_Navigation = request.d('UnityEngine.UI.Navigation', i3199[1], i3198.m_Navigation)
  i3198.m_Transition = i3199[2]
  i3198.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3199[3], i3198.m_Colors)
  i3198.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3199[4], i3198.m_SpriteState)
  i3198.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3199[5], i3198.m_AnimationTriggers)
  i3198.m_Interactable = !!i3199[6]
  request.r(i3199[7], i3199[8], 0, i3198, 'm_TargetGraphic')
  return i3198
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3200 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3201 = data
  i3200.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3201[0], i3200.m_PersistentCalls)
  return i3200
}

Deserializers["LunaController"] = function (request, data, root) {
  var i3202 = root || request.c( 'LunaController' )
  var i3203 = data
  i3202.TimePlay = i3203[0]
  i3202.CountPlay = i3203[1]
  i3202.BGColor = new pc.Color(i3203[2], i3203[3], i3203[4], i3203[5])
  i3202.GameBGColor = new pc.Color(i3203[6], i3203[7], i3203[8], i3203[9])
  i3202.LevelTextColor = new pc.Color(i3203[10], i3203[11], i3203[12], i3203[13])
  i3202.TitleTextColor = new pc.Color(i3203[14], i3203[15], i3203[16], i3203[17])
  i3202.SubBGColor = new pc.Color(i3203[18], i3203[19], i3203[20], i3203[21])
  request.r(i3203[22], i3203[23], 0, i3202, 'time')
  request.r(i3203[24], i3203[25], 0, i3202, 'BGImage')
  request.r(i3203[26], i3203[27], 0, i3202, 'GameBGImage')
  request.r(i3203[28], i3203[29], 0, i3202, 'levelText')
  request.r(i3203[30], i3203[31], 0, i3202, 'titleText')
  request.r(i3203[32], i3203[33], 0, i3202, 'subBG')
  request.r(i3203[34], i3203[35], 0, i3202, 'endCard')
  var i3205 = i3203[36]
  var i3204 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i3205.length; i += 2) {
  request.r(i3205[i + 0], i3205[i + 1], 1, i3204, '')
  }
  i3202.CTA = i3204
  i3202.count = i3203[37]
  return i3202
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i3208 = root || request.c( 'LayoutController' )
  var i3209 = data
  request.r(i3209[0], i3209[1], 0, i3208, 'CTA')
  i3208.hide = !!i3209[2]
  return i3208
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3210 = root || request.c( 'AudioController' )
  var i3211 = data
  request.r(i3211[0], i3211[1], 0, i3210, 'BGM')
  request.r(i3211[2], i3211[3], 0, i3210, 'musicSource')
  request.r(i3211[4], i3211[5], 0, i3210, 'SFXPool')
  return i3210
}

Deserializers["InteractController"] = function (request, data, root) {
  var i3212 = root || request.c( 'InteractController' )
  var i3213 = data
  request.r(i3213[0], i3213[1], 0, i3212, 'canvas')
  i3212.maxPos = new pc.Vec2( i3213[2], i3213[3] )
  i3212.minPos = new pc.Vec2( i3213[4], i3213[5] )
  var i3215 = i3213[6]
  var i3214 = new (System.Collections.Generic.List$1(Bridge.ns('ItemDrag')))
  for(var i = 0; i < i3215.length; i += 1) {
    i3214.add(request.d('ItemDrag', i3215[i + 0]));
  }
  i3212.itemDrags = i3214
  var i3217 = i3213[7]
  var i3216 = new (System.Collections.Generic.List$1(Bridge.ns('ItemClick')))
  for(var i = 0; i < i3217.length; i += 1) {
    i3216.add(request.d('ItemClick', i3217[i + 0]));
  }
  i3212.itemClicks = i3216
  i3212.currentTarget = request.d('ItemDrag', i3213[8], i3212.currentTarget)
  request.r(i3213[9], i3213[10], 0, i3212, 'pickupSound')
  request.r(i3213[11], i3213[12], 0, i3212, 'tut')
  request.r(i3213[13], i3213[14], 0, i3212, 'tut2')
  i3212.lockPlay = !!i3213[15]
  return i3212
}

Deserializers["ItemDrag"] = function (request, data, root) {
  var i3220 = root || request.c( 'ItemDrag' )
  var i3221 = data
  request.r(i3221[0], i3221[1], 0, i3220, 'DragArea')
  request.r(i3221[2], i3221[3], 0, i3220, 'Item')
  request.r(i3221[4], i3221[5], 0, i3220, 'Icon')
  return i3220
}

Deserializers["ItemClick"] = function (request, data, root) {
  var i3224 = root || request.c( 'ItemClick' )
  var i3225 = data
  request.r(i3225[0], i3225[1], 0, i3224, 'ClickArea')
  request.r(i3225[2], i3225[3], 0, i3224, 'Item')
  request.r(i3225[4], i3225[5], 0, i3224, 'Sound')
  request.r(i3225[6], i3225[7], 0, i3224, 'ActiveObject')
  return i3224
}

Deserializers["GameController"] = function (request, data, root) {
  var i3226 = root || request.c( 'GameController' )
  var i3227 = data
  i3226.OnComplete = request.d('System.Action', i3227[0], i3226.OnComplete)
  i3226.CompleteStep = request.d('System.Action', i3227[1], i3226.CompleteStep)
  var i3229 = i3227[2]
  var i3228 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationController')))
  for(var i = 0; i < i3229.length; i += 2) {
  request.r(i3229[i + 0], i3229[i + 1], 1, i3228, '')
  }
  i3226.skeletons = i3228
  request.r(i3227[3], i3227[4], 0, i3226, 'character')
  request.r(i3227[5], i3227[6], 0, i3226, 'normal')
  request.r(i3227[7], i3227[8], 0, i3226, 'win')
  request.r(i3227[9], i3227[10], 0, i3226, 'loseScene')
  request.r(i3227[11], i3227[12], 0, i3226, 'winScene')
  i3226.complete = !!i3227[13]
  i3226.currentStep = i3227[14]
  i3226.maxStep = i3227[15]
  request.r(i3227[16], i3227[17], 0, i3226, 'currentStepText')
  request.r(i3227[18], i3227[19], 0, i3226, 'maxStepText')
  request.r(i3227[20], i3227[21], 0, i3226, 'slider')
  i3226.DelayComplete = i3227[22]
  i3226.subTime = i3227[23]
  i3226.completeSub = request.d('Sub', i3227[24], i3226.completeSub)
  var i3231 = i3227[25]
  var i3230 = new (System.Collections.Generic.List$1(Bridge.ns('Sub')))
  for(var i = 0; i < i3231.length; i += 1) {
    i3230.add(request.d('Sub', i3231[i + 0]));
  }
  i3226.subs = i3230
  request.r(i3227[26], i3227[27], 0, i3226, 'sub')
  request.r(i3227[28], i3227[29], 0, i3226, 'subText')
  return i3226
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3232 = root || request.c( 'System.Action' )
  var i3233 = data
  return i3232
}

Deserializers["Sub"] = function (request, data, root) {
  var i3236 = root || request.c( 'Sub' )
  var i3237 = data
  request.r(i3237[0], i3237[1], 0, i3236, 'Item')
  i3236.SubText = i3237[2]
  request.r(i3237[3], i3237[4], 0, i3236, 'SubSound')
  return i3236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3241 = data
  i3240.ambientIntensity = i3241[0]
  i3240.reflectionIntensity = i3241[1]
  i3240.ambientMode = i3241[2]
  i3240.ambientLight = new pc.Color(i3241[3], i3241[4], i3241[5], i3241[6])
  i3240.ambientSkyColor = new pc.Color(i3241[7], i3241[8], i3241[9], i3241[10])
  i3240.ambientGroundColor = new pc.Color(i3241[11], i3241[12], i3241[13], i3241[14])
  i3240.ambientEquatorColor = new pc.Color(i3241[15], i3241[16], i3241[17], i3241[18])
  i3240.fogColor = new pc.Color(i3241[19], i3241[20], i3241[21], i3241[22])
  i3240.fogEndDistance = i3241[23]
  i3240.fogStartDistance = i3241[24]
  i3240.fogDensity = i3241[25]
  i3240.fog = !!i3241[26]
  request.r(i3241[27], i3241[28], 0, i3240, 'skybox')
  i3240.fogMode = i3241[29]
  var i3243 = i3241[30]
  var i3242 = []
  for(var i = 0; i < i3243.length; i += 1) {
    i3242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3243[i + 0]) );
  }
  i3240.lightmaps = i3242
  i3240.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3241[31], i3240.lightProbes)
  i3240.lightmapsMode = i3241[32]
  i3240.mixedBakeMode = i3241[33]
  i3240.environmentLightingMode = i3241[34]
  i3240.ambientProbe = new pc.SphericalHarmonicsL2(i3241[35])
  request.r(i3241[36], i3241[37], 0, i3240, 'customReflection')
  request.r(i3241[38], i3241[39], 0, i3240, 'defaultReflection')
  i3240.defaultReflectionMode = i3241[40]
  i3240.defaultReflectionResolution = i3241[41]
  i3240.sunLightObjectId = i3241[42]
  i3240.pixelLightCount = i3241[43]
  i3240.defaultReflectionHDR = !!i3241[44]
  i3240.hasLightDataAsset = !!i3241[45]
  i3240.hasManualGenerate = !!i3241[46]
  return i3240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3247 = data
  request.r(i3247[0], i3247[1], 0, i3246, 'lightmapColor')
  request.r(i3247[2], i3247[3], 0, i3246, 'lightmapDirection')
  request.r(i3247[4], i3247[5], 0, i3246, 'shadowMask')
  return i3246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3248 = root || new UnityEngine.LightProbes()
  var i3249 = data
  return i3248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3257 = data
  var i3259 = i3257[0]
  var i3258 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3259.length; i += 1) {
    i3258.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3259[i + 0]));
  }
  i3256.ShaderCompilationErrors = i3258
  i3256.name = i3257[1]
  i3256.guid = i3257[2]
  var i3261 = i3257[3]
  var i3260 = []
  for(var i = 0; i < i3261.length; i += 1) {
    i3260.push( i3261[i + 0] );
  }
  i3256.shaderDefinedKeywords = i3260
  var i3263 = i3257[4]
  var i3262 = []
  for(var i = 0; i < i3263.length; i += 1) {
    i3262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3263[i + 0]) );
  }
  i3256.passes = i3262
  var i3265 = i3257[5]
  var i3264 = []
  for(var i = 0; i < i3265.length; i += 1) {
    i3264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3265[i + 0]) );
  }
  i3256.usePasses = i3264
  var i3267 = i3257[6]
  var i3266 = []
  for(var i = 0; i < i3267.length; i += 1) {
    i3266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3267[i + 0]) );
  }
  i3256.defaultParameterValues = i3266
  request.r(i3257[7], i3257[8], 0, i3256, 'unityFallbackShader')
  i3256.readDepth = !!i3257[9]
  i3256.hasDepthOnlyPass = !!i3257[10]
  i3256.isCreatedByShaderGraph = !!i3257[11]
  i3256.disableBatching = !!i3257[12]
  i3256.compiled = !!i3257[13]
  return i3256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3271 = data
  i3270.shaderName = i3271[0]
  i3270.errorMessage = i3271[1]
  return i3270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3274 = root || new pc.UnityShaderPass()
  var i3275 = data
  i3274.id = i3275[0]
  i3274.subShaderIndex = i3275[1]
  i3274.name = i3275[2]
  i3274.passType = i3275[3]
  i3274.grabPassTextureName = i3275[4]
  i3274.usePass = !!i3275[5]
  i3274.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3275[6], i3274.zTest)
  i3274.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3275[7], i3274.zWrite)
  i3274.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3275[8], i3274.culling)
  i3274.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3275[9], i3274.blending)
  i3274.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3275[10], i3274.alphaBlending)
  i3274.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3275[11], i3274.colorWriteMask)
  i3274.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3275[12], i3274.offsetUnits)
  i3274.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3275[13], i3274.offsetFactor)
  i3274.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3275[14], i3274.stencilRef)
  i3274.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3275[15], i3274.stencilReadMask)
  i3274.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3275[16], i3274.stencilWriteMask)
  i3274.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3275[17], i3274.stencilOp)
  i3274.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3275[18], i3274.stencilOpFront)
  i3274.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3275[19], i3274.stencilOpBack)
  var i3277 = i3275[20]
  var i3276 = []
  for(var i = 0; i < i3277.length; i += 1) {
    i3276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3277[i + 0]) );
  }
  i3274.tags = i3276
  var i3279 = i3275[21]
  var i3278 = []
  for(var i = 0; i < i3279.length; i += 1) {
    i3278.push( i3279[i + 0] );
  }
  i3274.passDefinedKeywords = i3278
  var i3281 = i3275[22]
  var i3280 = []
  for(var i = 0; i < i3281.length; i += 1) {
    i3280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3281[i + 0]) );
  }
  i3274.passDefinedKeywordGroups = i3280
  var i3283 = i3275[23]
  var i3282 = []
  for(var i = 0; i < i3283.length; i += 1) {
    i3282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3283[i + 0]) );
  }
  i3274.variants = i3282
  var i3285 = i3275[24]
  var i3284 = []
  for(var i = 0; i < i3285.length; i += 1) {
    i3284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3285[i + 0]) );
  }
  i3274.excludedVariants = i3284
  i3274.hasDepthReader = !!i3275[25]
  return i3274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3287 = data
  i3286.val = i3287[0]
  i3286.name = i3287[1]
  return i3286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3289 = data
  i3288.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3289[0], i3288.src)
  i3288.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3289[1], i3288.dst)
  i3288.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3289[2], i3288.op)
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3291 = data
  i3290.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3291[0], i3290.pass)
  i3290.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3291[1], i3290.fail)
  i3290.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3291[2], i3290.zFail)
  i3290.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3291[3], i3290.comp)
  return i3290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3295 = data
  i3294.name = i3295[0]
  i3294.value = i3295[1]
  return i3294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3299 = data
  var i3301 = i3299[0]
  var i3300 = []
  for(var i = 0; i < i3301.length; i += 1) {
    i3300.push( i3301[i + 0] );
  }
  i3298.keywords = i3300
  i3298.hasDiscard = !!i3299[1]
  return i3298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3305 = data
  i3304.passId = i3305[0]
  i3304.subShaderIndex = i3305[1]
  var i3307 = i3305[2]
  var i3306 = []
  for(var i = 0; i < i3307.length; i += 1) {
    i3306.push( i3307[i + 0] );
  }
  i3304.keywords = i3306
  i3304.vertexProgram = i3305[3]
  i3304.fragmentProgram = i3305[4]
  i3304.exportedForWebGl2 = !!i3305[5]
  i3304.readDepth = !!i3305[6]
  return i3304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3311 = data
  request.r(i3311[0], i3311[1], 0, i3310, 'shader')
  i3310.pass = i3311[2]
  return i3310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3315 = data
  i3314.name = i3315[0]
  i3314.type = i3315[1]
  i3314.value = new pc.Vec4( i3315[2], i3315[3], i3315[4], i3315[5] )
  i3314.textureValue = i3315[6]
  i3314.shaderPropertyFlag = i3315[7]
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3317 = data
  i3316.name = i3317[0]
  request.r(i3317[1], i3317[2], 0, i3316, 'texture')
  i3316.aabb = i3317[3]
  i3316.vertices = i3317[4]
  i3316.triangles = i3317[5]
  i3316.textureRect = UnityEngine.Rect.MinMaxRect(i3317[6], i3317[7], i3317[8], i3317[9])
  i3316.packedRect = UnityEngine.Rect.MinMaxRect(i3317[10], i3317[11], i3317[12], i3317[13])
  i3316.border = new pc.Vec4( i3317[14], i3317[15], i3317[16], i3317[17] )
  i3316.transparency = i3317[18]
  i3316.bounds = i3317[19]
  i3316.pixelsPerUnit = i3317[20]
  i3316.textureWidth = i3317[21]
  i3316.textureHeight = i3317[22]
  i3316.nativeSize = new pc.Vec2( i3317[23], i3317[24] )
  i3316.pivot = new pc.Vec2( i3317[25], i3317[26] )
  i3316.textureRectOffset = new pc.Vec2( i3317[27], i3317[28] )
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3319 = data
  i3318.name = i3319[0]
  return i3318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3321 = data
  i3320.name = i3321[0]
  i3320.ascent = i3321[1]
  i3320.originalLineHeight = i3321[2]
  i3320.fontSize = i3321[3]
  var i3323 = i3321[4]
  var i3322 = []
  for(var i = 0; i < i3323.length; i += 1) {
    i3322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3323[i + 0]) );
  }
  i3320.characterInfo = i3322
  request.r(i3321[5], i3321[6], 0, i3320, 'texture')
  i3320.originalFontSize = i3321[7]
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3327 = data
  i3326.index = i3327[0]
  i3326.advance = i3327[1]
  i3326.bearing = i3327[2]
  i3326.glyphWidth = i3327[3]
  i3326.glyphHeight = i3327[4]
  i3326.minX = i3327[5]
  i3326.maxX = i3327[6]
  i3326.minY = i3327[7]
  i3326.maxY = i3327[8]
  i3326.uvBottomLeftX = i3327[9]
  i3326.uvBottomLeftY = i3327[10]
  i3326.uvBottomRightX = i3327[11]
  i3326.uvBottomRightY = i3327[12]
  i3326.uvTopLeftX = i3327[13]
  i3326.uvTopLeftY = i3327[14]
  i3326.uvTopRightX = i3327[15]
  i3326.uvTopRightY = i3327[16]
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3329 = data
  i3328.name = i3329[0]
  i3328.bytes64 = i3329[1]
  i3328.data = i3329[2]
  return i3328
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3330 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3331 = data
  var i3333 = i3331[0]
  var i3332 = []
  for(var i = 0; i < i3333.length; i += 2) {
  request.r(i3333[i + 0], i3333[i + 1], 2, i3332, '')
  }
  i3330.atlasAssets = i3332
  i3330.scale = i3331[1]
  request.r(i3331[2], i3331[3], 0, i3330, 'skeletonJSON')
  i3330.isUpgradingBlendModeMaterials = !!i3331[4]
  i3330.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3331[5], i3330.blendModeMaterials)
  var i3335 = i3331[6]
  var i3334 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3335.length; i += 2) {
  request.r(i3335[i + 0], i3335[i + 1], 1, i3334, '')
  }
  i3330.skeletonDataModifiers = i3334
  var i3337 = i3331[7]
  var i3336 = []
  for(var i = 0; i < i3337.length; i += 1) {
    i3336.push( i3337[i + 0] );
  }
  i3330.fromAnimation = i3336
  var i3339 = i3331[8]
  var i3338 = []
  for(var i = 0; i < i3339.length; i += 1) {
    i3338.push( i3339[i + 0] );
  }
  i3330.toAnimation = i3338
  i3330.duration = i3331[9]
  i3330.defaultMix = i3331[10]
  request.r(i3331[11], i3331[12], 0, i3330, 'controller')
  return i3330
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3342 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3343 = data
  i3342.applyAdditiveMaterial = !!i3343[0]
  var i3345 = i3343[1]
  var i3344 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3345.length; i += 1) {
    i3344.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3345[i + 0]));
  }
  i3342.additiveMaterials = i3344
  var i3347 = i3343[2]
  var i3346 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3347.length; i += 1) {
    i3346.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3347[i + 0]));
  }
  i3342.multiplyMaterials = i3346
  var i3349 = i3343[3]
  var i3348 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3349.length; i += 1) {
    i3348.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3349[i + 0]));
  }
  i3342.screenMaterials = i3348
  i3342.requiresBlendModeMaterials = !!i3343[4]
  return i3342
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3352 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3353 = data
  i3352.pageName = i3353[0]
  request.r(i3353[1], i3353[2], 0, i3352, 'material')
  return i3352
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3356 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3357 = data
  request.r(i3357[0], i3357[1], 0, i3356, 'atlasFile')
  var i3359 = i3357[2]
  var i3358 = []
  for(var i = 0; i < i3359.length; i += 2) {
  request.r(i3359[i + 0], i3359[i + 1], 2, i3358, '')
  }
  i3356.materials = i3358
  i3356.textureLoadingMode = i3357[3]
  request.r(i3357[4], i3357[5], 0, i3356, 'onDemandTextureLoader')
  return i3356
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3360 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3361 = data
  i3360.useSafeMode = !!i3361[0]
  i3360.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3361[1], i3360.safeModeOptions)
  i3360.timeScale = i3361[2]
  i3360.unscaledTimeScale = i3361[3]
  i3360.useSmoothDeltaTime = !!i3361[4]
  i3360.maxSmoothUnscaledTime = i3361[5]
  i3360.rewindCallbackMode = i3361[6]
  i3360.showUnityEditorReport = !!i3361[7]
  i3360.logBehaviour = i3361[8]
  i3360.drawGizmos = !!i3361[9]
  i3360.defaultRecyclable = !!i3361[10]
  i3360.defaultAutoPlay = i3361[11]
  i3360.defaultUpdateType = i3361[12]
  i3360.defaultTimeScaleIndependent = !!i3361[13]
  i3360.defaultEaseType = i3361[14]
  i3360.defaultEaseOvershootOrAmplitude = i3361[15]
  i3360.defaultEasePeriod = i3361[16]
  i3360.defaultAutoKill = !!i3361[17]
  i3360.defaultLoopType = i3361[18]
  i3360.debugMode = !!i3361[19]
  i3360.debugStoreTargetId = !!i3361[20]
  i3360.showPreviewPanel = !!i3361[21]
  i3360.storeSettingsLocation = i3361[22]
  i3360.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3361[23], i3360.modules)
  i3360.createASMDEF = !!i3361[24]
  i3360.showPlayingTweens = !!i3361[25]
  i3360.showPausedTweens = !!i3361[26]
  return i3360
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3362 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3363 = data
  i3362.logBehaviour = i3363[0]
  i3362.nestedTweenFailureBehaviour = i3363[1]
  return i3362
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3364 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3365 = data
  i3364.showPanel = !!i3365[0]
  i3364.audioEnabled = !!i3365[1]
  i3364.physicsEnabled = !!i3365[2]
  i3364.physics2DEnabled = !!i3365[3]
  i3364.spriteEnabled = !!i3365[4]
  i3364.uiEnabled = !!i3365[5]
  i3364.textMeshProEnabled = !!i3365[6]
  i3364.tk2DEnabled = !!i3365[7]
  i3364.deAudioEnabled = !!i3365[8]
  i3364.deUnityExtendedEnabled = !!i3365[9]
  i3364.epoOutlineEnabled = !!i3365[10]
  return i3364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3367 = data
  var i3369 = i3367[0]
  var i3368 = []
  for(var i = 0; i < i3369.length; i += 1) {
    i3368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3369[i + 0]) );
  }
  i3366.files = i3368
  i3366.componentToPrefabIds = i3367[1]
  return i3366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3373 = data
  i3372.path = i3373[0]
  request.r(i3373[1], i3373[2], 0, i3372, 'unityObject')
  return i3372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3375 = data
  var i3377 = i3375[0]
  var i3376 = []
  for(var i = 0; i < i3377.length; i += 1) {
    i3376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3377[i + 0]) );
  }
  i3374.scriptsExecutionOrder = i3376
  var i3379 = i3375[1]
  var i3378 = []
  for(var i = 0; i < i3379.length; i += 1) {
    i3378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3379[i + 0]) );
  }
  i3374.sortingLayers = i3378
  var i3381 = i3375[2]
  var i3380 = []
  for(var i = 0; i < i3381.length; i += 1) {
    i3380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3381[i + 0]) );
  }
  i3374.cullingLayers = i3380
  i3374.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3375[3], i3374.timeSettings)
  i3374.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3375[4], i3374.physicsSettings)
  i3374.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3375[5], i3374.physics2DSettings)
  i3374.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3375[6], i3374.qualitySettings)
  i3374.enableRealtimeShadows = !!i3375[7]
  i3374.enableAutoInstancing = !!i3375[8]
  i3374.enableStaticBatching = !!i3375[9]
  i3374.enableDynamicBatching = !!i3375[10]
  i3374.usePreservativeDynamicBatching = !!i3375[11]
  i3374.lightmapEncodingQuality = i3375[12]
  i3374.desiredColorSpace = i3375[13]
  var i3383 = i3375[14]
  var i3382 = []
  for(var i = 0; i < i3383.length; i += 1) {
    i3382.push( i3383[i + 0] );
  }
  i3374.allTags = i3382
  return i3374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3387 = data
  i3386.name = i3387[0]
  i3386.value = i3387[1]
  return i3386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3391 = data
  i3390.id = i3391[0]
  i3390.name = i3391[1]
  i3390.value = i3391[2]
  return i3390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3395 = data
  i3394.id = i3395[0]
  i3394.name = i3395[1]
  return i3394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3397 = data
  i3396.fixedDeltaTime = i3397[0]
  i3396.maximumDeltaTime = i3397[1]
  i3396.timeScale = i3397[2]
  i3396.maximumParticleTimestep = i3397[3]
  return i3396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3399 = data
  i3398.gravity = new pc.Vec3( i3399[0], i3399[1], i3399[2] )
  i3398.defaultSolverIterations = i3399[3]
  i3398.bounceThreshold = i3399[4]
  i3398.autoSyncTransforms = !!i3399[5]
  i3398.autoSimulation = !!i3399[6]
  var i3401 = i3399[7]
  var i3400 = []
  for(var i = 0; i < i3401.length; i += 1) {
    i3400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3401[i + 0]) );
  }
  i3398.collisionMatrix = i3400
  return i3398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3405 = data
  i3404.enabled = !!i3405[0]
  i3404.layerId = i3405[1]
  i3404.otherLayerId = i3405[2]
  return i3404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3407 = data
  request.r(i3407[0], i3407[1], 0, i3406, 'material')
  i3406.gravity = new pc.Vec2( i3407[2], i3407[3] )
  i3406.positionIterations = i3407[4]
  i3406.velocityIterations = i3407[5]
  i3406.velocityThreshold = i3407[6]
  i3406.maxLinearCorrection = i3407[7]
  i3406.maxAngularCorrection = i3407[8]
  i3406.maxTranslationSpeed = i3407[9]
  i3406.maxRotationSpeed = i3407[10]
  i3406.baumgarteScale = i3407[11]
  i3406.baumgarteTOIScale = i3407[12]
  i3406.timeToSleep = i3407[13]
  i3406.linearSleepTolerance = i3407[14]
  i3406.angularSleepTolerance = i3407[15]
  i3406.defaultContactOffset = i3407[16]
  i3406.autoSimulation = !!i3407[17]
  i3406.queriesHitTriggers = !!i3407[18]
  i3406.queriesStartInColliders = !!i3407[19]
  i3406.callbacksOnDisable = !!i3407[20]
  i3406.reuseCollisionCallbacks = !!i3407[21]
  i3406.autoSyncTransforms = !!i3407[22]
  var i3409 = i3407[23]
  var i3408 = []
  for(var i = 0; i < i3409.length; i += 1) {
    i3408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3409[i + 0]) );
  }
  i3406.collisionMatrix = i3408
  return i3406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3413 = data
  i3412.enabled = !!i3413[0]
  i3412.layerId = i3413[1]
  i3412.otherLayerId = i3413[2]
  return i3412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3415 = data
  var i3417 = i3415[0]
  var i3416 = []
  for(var i = 0; i < i3417.length; i += 1) {
    i3416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3417[i + 0]) );
  }
  i3414.qualityLevels = i3416
  var i3419 = i3415[1]
  var i3418 = []
  for(var i = 0; i < i3419.length; i += 1) {
    i3418.push( i3419[i + 0] );
  }
  i3414.names = i3418
  i3414.shadows = i3415[2]
  i3414.anisotropicFiltering = i3415[3]
  i3414.antiAliasing = i3415[4]
  i3414.lodBias = i3415[5]
  i3414.shadowCascades = i3415[6]
  i3414.shadowDistance = i3415[7]
  i3414.shadowmaskMode = i3415[8]
  i3414.shadowProjection = i3415[9]
  i3414.shadowResolution = i3415[10]
  i3414.softParticles = !!i3415[11]
  i3414.softVegetation = !!i3415[12]
  i3414.activeColorSpace = i3415[13]
  i3414.desiredColorSpace = i3415[14]
  i3414.masterTextureLimit = i3415[15]
  i3414.maxQueuedFrames = i3415[16]
  i3414.particleRaycastBudget = i3415[17]
  i3414.pixelLightCount = i3415[18]
  i3414.realtimeReflectionProbes = !!i3415[19]
  i3414.shadowCascade2Split = i3415[20]
  i3414.shadowCascade4Split = new pc.Vec3( i3415[21], i3415[22], i3415[23] )
  i3414.streamingMipmapsActive = !!i3415[24]
  i3414.vSyncCount = i3415[25]
  i3414.asyncUploadBufferSize = i3415[26]
  i3414.asyncUploadTimeSlice = i3415[27]
  i3414.billboardsFaceCameraPosition = !!i3415[28]
  i3414.shadowNearPlaneOffset = i3415[29]
  i3414.streamingMipmapsMemoryBudget = i3415[30]
  i3414.maximumLODLevel = i3415[31]
  i3414.streamingMipmapsAddAllCameras = !!i3415[32]
  i3414.streamingMipmapsMaxLevelReduction = i3415[33]
  i3414.streamingMipmapsRenderersPerFrame = i3415[34]
  i3414.resolutionScalingFixedDPIFactor = i3415[35]
  i3414.streamingMipmapsMaxFileIORequests = i3415[36]
  i3414.currentQualityLevel = i3415[37]
  return i3414
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3422 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3423 = data
  request.r(i3423[0], i3423[1], 0, i3422, 'm_ObjectArgument')
  i3422.m_ObjectArgumentAssemblyTypeName = i3423[2]
  i3422.m_IntArgument = i3423[3]
  i3422.m_FloatArgument = i3423[4]
  i3422.m_StringArgument = i3423[5]
  i3422.m_BoolArgument = !!i3423[6]
  return i3422
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[2],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[59],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[2],"73":[74],"75":[76],"77":[76],"8":[7],"22":[18],"78":[79],"80":[7],"81":[11,7],"82":[74],"18":[11,7],"83":[84,74],"85":[74,86],"87":[74],"88":[52],"89":[59],"90":[79],"91":[92],"93":[94],"95":[2],"96":[97],"98":[7],"99":[11,7],"100":[74],"101":[11,7],"102":[7],"103":[7],"104":[74,7],"105":[7,11],"106":[107],"108":[107],"109":[107],"110":[7],"111":[7],"10":[8],"12":[11,7],"112":[7],"9":[8],"113":[7],"114":[7],"115":[7],"116":[7],"117":[7],"118":[7],"119":[7],"17":[7],"120":[7],"121":[11,7],"122":[7],"123":[7],"124":[7],"16":[7],"13":[11,7],"125":[7],"126":[5],"127":[5],"6":[5],"128":[5],"129":[2],"130":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.Slider","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","UnityEngine.GameObject","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","CharacterSkinController","DG.Tweening.DOTweenAnimation","TutController","UnityEngine.UI.Button","LunaController","LayoutController","AudioController","UnityEngine.Transform","InteractController","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "08/14/2026 06:35:56";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "TBAP_V24_NgocNDL_TamNTM";

Deserializers.lunaAppID = "33901";

Deserializers.projectId = "5b44dfd2230fe054ca8da1b65d37e310";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1869";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4334";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BMTP_Luna";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "82431eab-b9d3-4d21-9c96-3661d0663e90";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

