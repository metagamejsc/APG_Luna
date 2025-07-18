var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3206 = root || request.c( 'UnityEngine.JointSpring' )
  var i3207 = data
  i3206.spring = i3207[0]
  i3206.damper = i3207[1]
  i3206.targetPosition = i3207[2]
  return i3206
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3208 = root || request.c( 'UnityEngine.JointMotor' )
  var i3209 = data
  i3208.m_TargetVelocity = i3209[0]
  i3208.m_Force = i3209[1]
  i3208.m_FreeSpin = i3209[2]
  return i3208
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3210 = root || request.c( 'UnityEngine.JointLimits' )
  var i3211 = data
  i3210.m_Min = i3211[0]
  i3210.m_Max = i3211[1]
  i3210.m_Bounciness = i3211[2]
  i3210.m_BounceMinVelocity = i3211[3]
  i3210.m_ContactDistance = i3211[4]
  i3210.minBounce = i3211[5]
  i3210.maxBounce = i3211[6]
  return i3210
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3212 = root || request.c( 'UnityEngine.JointDrive' )
  var i3213 = data
  i3212.m_PositionSpring = i3213[0]
  i3212.m_PositionDamper = i3213[1]
  i3212.m_MaximumForce = i3213[2]
  i3212.m_UseAcceleration = i3213[3]
  return i3212
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3214 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3215 = data
  i3214.m_Spring = i3215[0]
  i3214.m_Damper = i3215[1]
  return i3214
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3216 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3217 = data
  i3216.m_Limit = i3217[0]
  i3216.m_Bounciness = i3217[1]
  i3216.m_ContactDistance = i3217[2]
  return i3216
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3218 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3219 = data
  i3218.m_ExtremumSlip = i3219[0]
  i3218.m_ExtremumValue = i3219[1]
  i3218.m_AsymptoteSlip = i3219[2]
  i3218.m_AsymptoteValue = i3219[3]
  i3218.m_Stiffness = i3219[4]
  return i3218
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3220 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3221 = data
  i3220.m_LowerAngle = i3221[0]
  i3220.m_UpperAngle = i3221[1]
  return i3220
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3222 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3223 = data
  i3222.m_MotorSpeed = i3223[0]
  i3222.m_MaximumMotorTorque = i3223[1]
  return i3222
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3224 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3225 = data
  i3224.m_DampingRatio = i3225[0]
  i3224.m_Frequency = i3225[1]
  i3224.m_Angle = i3225[2]
  return i3224
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3226 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3227 = data
  i3226.m_LowerTranslation = i3227[0]
  i3226.m_UpperTranslation = i3227[1]
  return i3226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3229 = data
  i3228.name = i3229[0]
  i3228.width = i3229[1]
  i3228.height = i3229[2]
  i3228.mipmapCount = i3229[3]
  i3228.anisoLevel = i3229[4]
  i3228.filterMode = i3229[5]
  i3228.hdr = !!i3229[6]
  i3228.format = i3229[7]
  i3228.wrapMode = i3229[8]
  i3228.alphaIsTransparency = !!i3229[9]
  i3228.alphaSource = i3229[10]
  i3228.graphicsFormat = i3229[11]
  i3228.sRGBTexture = !!i3229[12]
  i3228.desiredColorSpace = i3229[13]
  return i3228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3230 = root || new pc.UnityMaterial()
  var i3231 = data
  i3230.name = i3231[0]
  request.r(i3231[1], i3231[2], 0, i3230, 'shader')
  i3230.renderQueue = i3231[3]
  i3230.enableInstancing = !!i3231[4]
  var i3233 = i3231[5]
  var i3232 = []
  for(var i = 0; i < i3233.length; i += 1) {
    i3232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3233[i + 0]) );
  }
  i3230.floatParameters = i3232
  var i3235 = i3231[6]
  var i3234 = []
  for(var i = 0; i < i3235.length; i += 1) {
    i3234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3235[i + 0]) );
  }
  i3230.colorParameters = i3234
  var i3237 = i3231[7]
  var i3236 = []
  for(var i = 0; i < i3237.length; i += 1) {
    i3236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3237[i + 0]) );
  }
  i3230.vectorParameters = i3236
  var i3239 = i3231[8]
  var i3238 = []
  for(var i = 0; i < i3239.length; i += 1) {
    i3238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3239[i + 0]) );
  }
  i3230.textureParameters = i3238
  var i3241 = i3231[9]
  var i3240 = []
  for(var i = 0; i < i3241.length; i += 1) {
    i3240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3241[i + 0]) );
  }
  i3230.materialFlags = i3240
  return i3230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3245 = data
  i3244.name = i3245[0]
  i3244.value = i3245[1]
  return i3244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3249 = data
  i3248.name = i3249[0]
  i3248.value = new pc.Color(i3249[1], i3249[2], i3249[3], i3249[4])
  return i3248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3253 = data
  i3252.name = i3253[0]
  i3252.value = new pc.Vec4( i3253[1], i3253[2], i3253[3], i3253[4] )
  return i3252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3257 = data
  i3256.name = i3257[0]
  request.r(i3257[1], i3257[2], 0, i3256, 'value')
  return i3256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3261 = data
  i3260.name = i3261[0]
  i3260.enabled = !!i3261[1]
  return i3260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3263 = data
  i3262.name = i3263[0]
  i3262.index = i3263[1]
  i3262.startup = !!i3263[2]
  return i3262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3265 = data
  i3264.position = new pc.Vec3( i3265[0], i3265[1], i3265[2] )
  i3264.scale = new pc.Vec3( i3265[3], i3265[4], i3265[5] )
  i3264.rotation = new pc.Quat(i3265[6], i3265[7], i3265[8], i3265[9])
  return i3264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3267 = data
  i3266.enabled = !!i3267[0]
  i3266.aspect = i3267[1]
  i3266.orthographic = !!i3267[2]
  i3266.orthographicSize = i3267[3]
  i3266.backgroundColor = new pc.Color(i3267[4], i3267[5], i3267[6], i3267[7])
  i3266.nearClipPlane = i3267[8]
  i3266.farClipPlane = i3267[9]
  i3266.fieldOfView = i3267[10]
  i3266.depth = i3267[11]
  i3266.clearFlags = i3267[12]
  i3266.cullingMask = i3267[13]
  i3266.rect = i3267[14]
  request.r(i3267[15], i3267[16], 0, i3266, 'targetTexture')
  i3266.usePhysicalProperties = !!i3267[17]
  i3266.focalLength = i3267[18]
  i3266.sensorSize = new pc.Vec2( i3267[19], i3267[20] )
  i3266.lensShift = new pc.Vec2( i3267[21], i3267[22] )
  i3266.gateFit = i3267[23]
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3269 = data
  i3268.name = i3269[0]
  i3268.tagId = i3269[1]
  i3268.enabled = !!i3269[2]
  i3268.isStatic = !!i3269[3]
  i3268.layer = i3269[4]
  return i3268
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3270 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3271 = data
  request.r(i3271[0], i3271[1], 0, i3270, 'm_FirstSelected')
  i3270.m_sendNavigationEvents = !!i3271[2]
  i3270.m_DragThreshold = i3271[3]
  return i3270
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3272 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3273 = data
  i3272.m_HorizontalAxis = i3273[0]
  i3272.m_VerticalAxis = i3273[1]
  i3272.m_SubmitButton = i3273[2]
  i3272.m_CancelButton = i3273[3]
  i3272.m_InputActionsPerSecond = i3273[4]
  i3272.m_RepeatDelay = i3273[5]
  i3272.m_ForceModuleActive = !!i3273[6]
  i3272.m_SendPointerHoverToParent = !!i3273[7]
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3275 = data
  i3274.pivot = new pc.Vec2( i3275[0], i3275[1] )
  i3274.anchorMin = new pc.Vec2( i3275[2], i3275[3] )
  i3274.anchorMax = new pc.Vec2( i3275[4], i3275[5] )
  i3274.sizeDelta = new pc.Vec2( i3275[6], i3275[7] )
  i3274.anchoredPosition3D = new pc.Vec3( i3275[8], i3275[9], i3275[10] )
  i3274.rotation = new pc.Quat(i3275[11], i3275[12], i3275[13], i3275[14])
  i3274.scale = new pc.Vec3( i3275[15], i3275[16], i3275[17] )
  return i3274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3277 = data
  i3276.enabled = !!i3277[0]
  i3276.planeDistance = i3277[1]
  i3276.referencePixelsPerUnit = i3277[2]
  i3276.isFallbackOverlay = !!i3277[3]
  i3276.renderMode = i3277[4]
  i3276.renderOrder = i3277[5]
  i3276.sortingLayerName = i3277[6]
  i3276.sortingOrder = i3277[7]
  i3276.scaleFactor = i3277[8]
  request.r(i3277[9], i3277[10], 0, i3276, 'worldCamera')
  i3276.overrideSorting = !!i3277[11]
  i3276.pixelPerfect = !!i3277[12]
  i3276.targetDisplay = i3277[13]
  i3276.overridePixelPerfect = !!i3277[14]
  return i3276
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3278 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3279 = data
  i3278.m_UiScaleMode = i3279[0]
  i3278.m_ReferencePixelsPerUnit = i3279[1]
  i3278.m_ScaleFactor = i3279[2]
  i3278.m_ReferenceResolution = new pc.Vec2( i3279[3], i3279[4] )
  i3278.m_ScreenMatchMode = i3279[5]
  i3278.m_MatchWidthOrHeight = i3279[6]
  i3278.m_PhysicalUnit = i3279[7]
  i3278.m_FallbackScreenDPI = i3279[8]
  i3278.m_DefaultSpriteDPI = i3279[9]
  i3278.m_DynamicPixelsPerUnit = i3279[10]
  i3278.m_PresetInfoIsWorld = !!i3279[11]
  return i3278
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3280 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3281 = data
  i3280.m_IgnoreReversedGraphics = !!i3281[0]
  i3280.m_BlockingObjects = i3281[1]
  i3280.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3281[2] )
  return i3280
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i3282 = root || request.c( 'LunaManager' )
  var i3283 = data
  var i3285 = i3283[0]
  var i3284 = []
  for(var i = 0; i < i3285.length; i += 2) {
  request.r(i3285[i + 0], i3285[i + 1], 2, i3284, '')
  }
  i3282.lstBtnInstall = i3284
  request.r(i3283[1], i3283[2], 0, i3282, 'EndCard')
  i3282.countPlay = i3283[3]
  i3282.countPlayFinal = i3283[4]
  i3282.timeDropFinal = i3283[5]
  i3282.colorBG = new pc.Color(i3283[6], i3283[7], i3283[8], i3283[9])
  request.r(i3283[10], i3283[11], 0, i3282, 'texture2D')
  request.r(i3283[12], i3283[13], 0, i3282, 'rawImageBG')
  request.r(i3283[14], i3283[15], 0, i3282, 'hand')
  request.r(i3283[16], i3283[17], 0, i3282, 'textProgess')
  request.r(i3283[18], i3283[19], 0, i3282, 'imgProgess')
  return i3282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3289 = data
  i3288.cullTransparentMesh = !!i3289[0]
  return i3288
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3290 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3291 = data
  request.r(i3291[0], i3291[1], 0, i3290, 'm_Texture')
  i3290.m_UVRect = UnityEngine.Rect.MinMaxRect(i3291[2], i3291[3], i3291[4], i3291[5])
  request.r(i3291[6], i3291[7], 0, i3290, 'm_Material')
  i3290.m_Maskable = !!i3291[8]
  i3290.m_Color = new pc.Color(i3291[9], i3291[10], i3291[11], i3291[12])
  i3290.m_RaycastTarget = !!i3291[13]
  i3290.m_RaycastPadding = new pc.Vec4( i3291[14], i3291[15], i3291[16], i3291[17] )
  return i3290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3293 = data
  request.r(i3293[0], i3293[1], 0, i3292, 'clip')
  request.r(i3293[2], i3293[3], 0, i3292, 'outputAudioMixerGroup')
  i3292.playOnAwake = !!i3293[4]
  i3292.loop = !!i3293[5]
  i3292.time = i3293[6]
  i3292.volume = i3293[7]
  i3292.pitch = i3293[8]
  i3292.enabled = !!i3293[9]
  return i3292
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3294 = root || request.c( 'UnityEngine.UI.Image' )
  var i3295 = data
  request.r(i3295[0], i3295[1], 0, i3294, 'm_Sprite')
  i3294.m_Type = i3295[2]
  i3294.m_PreserveAspect = !!i3295[3]
  i3294.m_FillCenter = !!i3295[4]
  i3294.m_FillMethod = i3295[5]
  i3294.m_FillAmount = i3295[6]
  i3294.m_FillClockwise = !!i3295[7]
  i3294.m_FillOrigin = i3295[8]
  i3294.m_UseSpriteMesh = !!i3295[9]
  i3294.m_PixelsPerUnitMultiplier = i3295[10]
  request.r(i3295[11], i3295[12], 0, i3294, 'm_Material')
  i3294.m_Maskable = !!i3295[13]
  i3294.m_Color = new pc.Color(i3295[14], i3295[15], i3295[16], i3295[17])
  i3294.m_RaycastTarget = !!i3295[18]
  i3294.m_RaycastPadding = new pc.Vec4( i3295[19], i3295[20], i3295[21], i3295[22] )
  return i3294
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3296 = root || request.c( 'UnityEngine.UI.Button' )
  var i3297 = data
  i3296.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3297[0], i3296.m_OnClick)
  i3296.m_Navigation = request.d('UnityEngine.UI.Navigation', i3297[1], i3296.m_Navigation)
  i3296.m_Transition = i3297[2]
  i3296.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3297[3], i3296.m_Colors)
  i3296.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3297[4], i3296.m_SpriteState)
  i3296.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3297[5], i3296.m_AnimationTriggers)
  i3296.m_Interactable = !!i3297[6]
  request.r(i3297[7], i3297[8], 0, i3296, 'm_TargetGraphic')
  return i3296
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3298 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3299 = data
  i3298.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3299[0], i3298.m_PersistentCalls)
  return i3298
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3300 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3301 = data
  var i3303 = i3301[0]
  var i3302 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3303.length; i += 1) {
    i3302.add(request.d('UnityEngine.Events.PersistentCall', i3303[i + 0]));
  }
  i3300.m_Calls = i3302
  return i3300
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3306 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3307 = data
  request.r(i3307[0], i3307[1], 0, i3306, 'm_Target')
  i3306.m_TargetAssemblyTypeName = i3307[2]
  i3306.m_MethodName = i3307[3]
  i3306.m_Mode = i3307[4]
  i3306.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3307[5], i3306.m_Arguments)
  i3306.m_CallState = i3307[6]
  return i3306
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3308 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3309 = data
  request.r(i3309[0], i3309[1], 0, i3308, 'm_ObjectArgument')
  i3308.m_ObjectArgumentAssemblyTypeName = i3309[2]
  i3308.m_IntArgument = i3309[3]
  i3308.m_FloatArgument = i3309[4]
  i3308.m_StringArgument = i3309[5]
  i3308.m_BoolArgument = !!i3309[6]
  return i3308
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3310 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3311 = data
  i3310.m_Mode = i3311[0]
  i3310.m_WrapAround = !!i3311[1]
  request.r(i3311[2], i3311[3], 0, i3310, 'm_SelectOnUp')
  request.r(i3311[4], i3311[5], 0, i3310, 'm_SelectOnDown')
  request.r(i3311[6], i3311[7], 0, i3310, 'm_SelectOnLeft')
  request.r(i3311[8], i3311[9], 0, i3310, 'm_SelectOnRight')
  return i3310
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3312 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3313 = data
  i3312.m_NormalColor = new pc.Color(i3313[0], i3313[1], i3313[2], i3313[3])
  i3312.m_HighlightedColor = new pc.Color(i3313[4], i3313[5], i3313[6], i3313[7])
  i3312.m_PressedColor = new pc.Color(i3313[8], i3313[9], i3313[10], i3313[11])
  i3312.m_SelectedColor = new pc.Color(i3313[12], i3313[13], i3313[14], i3313[15])
  i3312.m_DisabledColor = new pc.Color(i3313[16], i3313[17], i3313[18], i3313[19])
  i3312.m_ColorMultiplier = i3313[20]
  i3312.m_FadeDuration = i3313[21]
  return i3312
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3314 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3315 = data
  request.r(i3315[0], i3315[1], 0, i3314, 'm_HighlightedSprite')
  request.r(i3315[2], i3315[3], 0, i3314, 'm_PressedSprite')
  request.r(i3315[4], i3315[5], 0, i3314, 'm_SelectedSprite')
  request.r(i3315[6], i3315[7], 0, i3314, 'm_DisabledSprite')
  return i3314
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3316 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3317 = data
  i3316.m_NormalTrigger = i3317[0]
  i3316.m_HighlightedTrigger = i3317[1]
  i3316.m_PressedTrigger = i3317[2]
  i3316.m_SelectedTrigger = i3317[3]
  i3316.m_DisabledTrigger = i3317[4]
  return i3316
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i3318 = root || request.c( 'ClickItem' )
  var i3319 = data
  i3318.isPhone = !!i3319[0]
  var i3321 = i3319[1]
  var i3320 = []
  for(var i = 0; i < i3321.length; i += 2) {
  request.r(i3321[i + 0], i3321[i + 1], 2, i3320, '')
  }
  i3318.steps = i3320
  i3318.currentStep = i3319[2]
  return i3318
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i3324 = root || request.c( 'DraggableItem' )
  var i3325 = data
  i3324.idDrag = i3325[0]
  return i3324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3327 = data
  i3326.m_Alpha = i3327[0]
  i3326.m_Interactable = !!i3327[1]
  i3326.m_BlocksRaycasts = !!i3327[2]
  i3326.m_IgnoreParentGroups = !!i3327[3]
  i3326.enabled = !!i3327[4]
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3329 = data
  i3328.usedByComposite = !!i3329[0]
  i3328.autoTiling = !!i3329[1]
  i3328.size = new pc.Vec2( i3329[2], i3329[3] )
  i3328.edgeRadius = i3329[4]
  i3328.enabled = !!i3329[5]
  i3328.isTrigger = !!i3329[6]
  i3328.usedByEffector = !!i3329[7]
  i3328.density = i3329[8]
  i3328.offset = new pc.Vec2( i3329[9], i3329[10] )
  request.r(i3329[11], i3329[12], 0, i3328, 'material')
  return i3328
}

Deserializers["DropZone"] = function (request, data, root) {
  var i3330 = root || request.c( 'DropZone' )
  var i3331 = data
  i3330.idDrop = i3331[0]
  var i3333 = i3331[1]
  var i3332 = []
  for(var i = 0; i < i3333.length; i += 2) {
  request.r(i3333[i + 0], i3333[i + 1], 2, i3332, '')
  }
  i3330.steps = i3332
  i3330.isDontWork = !!i3331[2]
  return i3330
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i3334 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i3335 = data
  request.r(i3335[0], i3335[1], 0, i3334, 'skeletonDataAsset')
  request.r(i3335[2], i3335[3], 0, i3334, 'additiveMaterial')
  request.r(i3335[4], i3335[5], 0, i3334, 'multiplyMaterial')
  request.r(i3335[6], i3335[7], 0, i3334, 'screenMaterial')
  i3334.initialSkinName = i3335[8]
  i3334.initialFlipX = !!i3335[9]
  i3334.initialFlipY = !!i3335[10]
  i3334.startingAnimation = i3335[11]
  i3334.startingLoop = !!i3335[12]
  i3334.timeScale = i3335[13]
  i3334.freeze = !!i3335[14]
  i3334.layoutScaleMode = i3335[15]
  i3334.updateWhenInvisible = i3335[16]
  i3334.allowMultipleCanvasRenderers = !!i3335[17]
  var i3337 = i3335[18]
  var i3336 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i3337.length; i += 2) {
  request.r(i3337[i + 0], i3337[i + 1], 1, i3336, '')
  }
  i3334.canvasRenderers = i3336
  i3334.enableSeparatorSlots = !!i3335[19]
  i3334.updateSeparatorPartLocation = !!i3335[20]
  i3334.updateSeparatorPartScale = !!i3335[21]
  i3334.disableMeshAssignmentOnOverride = !!i3335[22]
  i3334.referenceSize = new pc.Vec2( i3335[23], i3335[24] )
  i3334.referenceScale = i3335[25]
  i3334.rectTransformSize = new pc.Vec2( i3335[26], i3335[27] )
  i3334.editReferenceRect = !!i3335[28]
  var i3339 = i3335[29]
  var i3338 = []
  for(var i = 0; i < i3339.length; i += 1) {
    i3338.push( i3339[i + 0] );
  }
  i3334.separatorSlotNames = i3338
  var i3341 = i3335[30]
  var i3340 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3341.length; i += 2) {
  request.r(i3341[i + 0], i3341[i + 1], 1, i3340, '')
  }
  i3334.separatorParts = i3340
  i3334.meshGenerator = request.d('Spine.Unity.MeshGenerator', i3335[31], i3334.meshGenerator)
  i3334.updateTiming = i3335[32]
  i3334.unscaledTime = !!i3335[33]
  request.r(i3335[34], i3335[35], 0, i3334, 'm_Material')
  i3334.m_Maskable = !!i3335[36]
  i3334.m_Color = new pc.Color(i3335[37], i3335[38], i3335[39], i3335[40])
  i3334.m_RaycastTarget = !!i3335[41]
  i3334.m_RaycastPadding = new pc.Vec4( i3335[42], i3335[43], i3335[44], i3335[45] )
  return i3334
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i3348 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i3349 = data
  i3348.settings = request.d('Spine.Unity.MeshGenerator+Settings', i3349[0], i3348.settings)
  return i3348
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i3350 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i3351 = data
  i3350.useClipping = !!i3351[0]
  i3350.zSpacing = i3351[1]
  i3350.pmaVertexColors = !!i3351[2]
  i3350.tintBlack = !!i3351[3]
  i3350.canvasGroupTintBlack = !!i3351[4]
  i3350.calculateTangents = !!i3351[5]
  i3350.addNormals = !!i3351[6]
  i3350.immutableTriangles = !!i3351[7]
  return i3350
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3352 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3353 = data
  i3352.targetIsSelf = !!i3353[0]
  request.r(i3353[1], i3353[2], 0, i3352, 'targetGO')
  i3352.tweenTargetIsTargetGO = !!i3353[3]
  i3352.delay = i3353[4]
  i3352.duration = i3353[5]
  i3352.easeType = i3353[6]
  i3352.easeCurve = new pc.AnimationCurve( { keys_flow: i3353[7] } )
  i3352.loopType = i3353[8]
  i3352.loops = i3353[9]
  i3352.id = i3353[10]
  i3352.isRelative = !!i3353[11]
  i3352.isFrom = !!i3353[12]
  i3352.isIndependentUpdate = !!i3353[13]
  i3352.autoKill = !!i3353[14]
  i3352.autoGenerate = !!i3353[15]
  i3352.isActive = !!i3353[16]
  i3352.isValid = !!i3353[17]
  request.r(i3353[18], i3353[19], 0, i3352, 'target')
  i3352.animationType = i3353[20]
  i3352.targetType = i3353[21]
  i3352.forcedTargetType = i3353[22]
  i3352.autoPlay = !!i3353[23]
  i3352.useTargetAsV3 = !!i3353[24]
  i3352.endValueFloat = i3353[25]
  i3352.endValueV3 = new pc.Vec3( i3353[26], i3353[27], i3353[28] )
  i3352.endValueV2 = new pc.Vec2( i3353[29], i3353[30] )
  i3352.endValueColor = new pc.Color(i3353[31], i3353[32], i3353[33], i3353[34])
  i3352.endValueString = i3353[35]
  i3352.endValueRect = UnityEngine.Rect.MinMaxRect(i3353[36], i3353[37], i3353[38], i3353[39])
  request.r(i3353[40], i3353[41], 0, i3352, 'endValueTransform')
  i3352.optionalBool0 = !!i3353[42]
  i3352.optionalBool1 = !!i3353[43]
  i3352.optionalFloat0 = i3353[44]
  i3352.optionalInt0 = i3353[45]
  i3352.optionalRotationMode = i3353[46]
  i3352.optionalScrambleMode = i3353[47]
  i3352.optionalShakeRandomnessMode = i3353[48]
  i3352.optionalString = i3353[49]
  i3352.updateType = i3353[50]
  i3352.isSpeedBased = !!i3353[51]
  i3352.hasOnStart = !!i3353[52]
  i3352.hasOnPlay = !!i3353[53]
  i3352.hasOnUpdate = !!i3353[54]
  i3352.hasOnStepComplete = !!i3353[55]
  i3352.hasOnComplete = !!i3353[56]
  i3352.hasOnTweenCreated = !!i3353[57]
  i3352.hasOnRewind = !!i3353[58]
  i3352.onStart = request.d('UnityEngine.Events.UnityEvent', i3353[59], i3352.onStart)
  i3352.onPlay = request.d('UnityEngine.Events.UnityEvent', i3353[60], i3352.onPlay)
  i3352.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3353[61], i3352.onUpdate)
  i3352.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3353[62], i3352.onStepComplete)
  i3352.onComplete = request.d('UnityEngine.Events.UnityEvent', i3353[63], i3352.onComplete)
  i3352.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3353[64], i3352.onTweenCreated)
  i3352.onRewind = request.d('UnityEngine.Events.UnityEvent', i3353[65], i3352.onRewind)
  return i3352
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3354 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3355 = data
  i3354.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3355[0], i3354.m_PersistentCalls)
  return i3354
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3356 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3357 = data
  i3356.m_hasFontAssetChanged = !!i3357[0]
  request.r(i3357[1], i3357[2], 0, i3356, 'm_baseMaterial')
  i3356.m_maskOffset = new pc.Vec4( i3357[3], i3357[4], i3357[5], i3357[6] )
  i3356.m_text = i3357[7]
  i3356.m_isRightToLeft = !!i3357[8]
  request.r(i3357[9], i3357[10], 0, i3356, 'm_fontAsset')
  request.r(i3357[11], i3357[12], 0, i3356, 'm_sharedMaterial')
  var i3359 = i3357[13]
  var i3358 = []
  for(var i = 0; i < i3359.length; i += 2) {
  request.r(i3359[i + 0], i3359[i + 1], 2, i3358, '')
  }
  i3356.m_fontSharedMaterials = i3358
  request.r(i3357[14], i3357[15], 0, i3356, 'm_fontMaterial')
  var i3361 = i3357[16]
  var i3360 = []
  for(var i = 0; i < i3361.length; i += 2) {
  request.r(i3361[i + 0], i3361[i + 1], 2, i3360, '')
  }
  i3356.m_fontMaterials = i3360
  i3356.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3357[17], i3357[18], i3357[19], i3357[20])
  i3356.m_fontColor = new pc.Color(i3357[21], i3357[22], i3357[23], i3357[24])
  i3356.m_enableVertexGradient = !!i3357[25]
  i3356.m_colorMode = i3357[26]
  i3356.m_fontColorGradient = request.d('TMPro.VertexGradient', i3357[27], i3356.m_fontColorGradient)
  request.r(i3357[28], i3357[29], 0, i3356, 'm_fontColorGradientPreset')
  request.r(i3357[30], i3357[31], 0, i3356, 'm_spriteAsset')
  i3356.m_tintAllSprites = !!i3357[32]
  request.r(i3357[33], i3357[34], 0, i3356, 'm_StyleSheet')
  i3356.m_TextStyleHashCode = i3357[35]
  i3356.m_overrideHtmlColors = !!i3357[36]
  i3356.m_faceColor = UnityEngine.Color32.ConstructColor(i3357[37], i3357[38], i3357[39], i3357[40])
  i3356.m_fontSize = i3357[41]
  i3356.m_fontSizeBase = i3357[42]
  i3356.m_fontWeight = i3357[43]
  i3356.m_enableAutoSizing = !!i3357[44]
  i3356.m_fontSizeMin = i3357[45]
  i3356.m_fontSizeMax = i3357[46]
  i3356.m_fontStyle = i3357[47]
  i3356.m_HorizontalAlignment = i3357[48]
  i3356.m_VerticalAlignment = i3357[49]
  i3356.m_textAlignment = i3357[50]
  i3356.m_characterSpacing = i3357[51]
  i3356.m_wordSpacing = i3357[52]
  i3356.m_lineSpacing = i3357[53]
  i3356.m_lineSpacingMax = i3357[54]
  i3356.m_paragraphSpacing = i3357[55]
  i3356.m_charWidthMaxAdj = i3357[56]
  i3356.m_enableWordWrapping = !!i3357[57]
  i3356.m_wordWrappingRatios = i3357[58]
  i3356.m_overflowMode = i3357[59]
  request.r(i3357[60], i3357[61], 0, i3356, 'm_linkedTextComponent')
  request.r(i3357[62], i3357[63], 0, i3356, 'parentLinkedComponent')
  i3356.m_enableKerning = !!i3357[64]
  i3356.m_enableExtraPadding = !!i3357[65]
  i3356.checkPaddingRequired = !!i3357[66]
  i3356.m_isRichText = !!i3357[67]
  i3356.m_parseCtrlCharacters = !!i3357[68]
  i3356.m_isOrthographic = !!i3357[69]
  i3356.m_isCullingEnabled = !!i3357[70]
  i3356.m_horizontalMapping = i3357[71]
  i3356.m_verticalMapping = i3357[72]
  i3356.m_uvLineOffset = i3357[73]
  i3356.m_geometrySortingOrder = i3357[74]
  i3356.m_IsTextObjectScaleStatic = !!i3357[75]
  i3356.m_VertexBufferAutoSizeReduction = !!i3357[76]
  i3356.m_useMaxVisibleDescender = !!i3357[77]
  i3356.m_pageToDisplay = i3357[78]
  i3356.m_margin = new pc.Vec4( i3357[79], i3357[80], i3357[81], i3357[82] )
  i3356.m_isUsingLegacyAnimationComponent = !!i3357[83]
  i3356.m_isVolumetricText = !!i3357[84]
  request.r(i3357[85], i3357[86], 0, i3356, 'm_Material')
  i3356.m_Maskable = !!i3357[87]
  i3356.m_Color = new pc.Color(i3357[88], i3357[89], i3357[90], i3357[91])
  i3356.m_RaycastTarget = !!i3357[92]
  i3356.m_RaycastPadding = new pc.Vec4( i3357[93], i3357[94], i3357[95], i3357[96] )
  return i3356
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3364 = root || request.c( 'TMPro.VertexGradient' )
  var i3365 = data
  i3364.topLeft = new pc.Color(i3365[0], i3365[1], i3365[2], i3365[3])
  i3364.topRight = new pc.Color(i3365[4], i3365[5], i3365[6], i3365[7])
  i3364.bottomLeft = new pc.Color(i3365[8], i3365[9], i3365[10], i3365[11])
  i3364.bottomRight = new pc.Color(i3365[12], i3365[13], i3365[14], i3365[15])
  return i3364
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3366 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3367 = data
  i3366.m_ShowMaskGraphic = !!i3367[0]
  return i3366
}

Deserializers["IQFill"] = function (request, data, root) {
  var i3368 = root || request.c( 'IQFill' )
  var i3369 = data
  request.r(i3369[0], i3369[1], 0, i3368, 'fillImage')
  i3368.maxFillAmount = i3369[2]
  i3368.fillDuration = i3369[3]
  i3368.maxValue = i3369[4]
  i3368.addValue = i3369[5]
  i3368.fillEase = i3369[6]
  return i3368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3371 = data
  i3370.ambientIntensity = i3371[0]
  i3370.reflectionIntensity = i3371[1]
  i3370.ambientMode = i3371[2]
  i3370.ambientLight = new pc.Color(i3371[3], i3371[4], i3371[5], i3371[6])
  i3370.ambientSkyColor = new pc.Color(i3371[7], i3371[8], i3371[9], i3371[10])
  i3370.ambientGroundColor = new pc.Color(i3371[11], i3371[12], i3371[13], i3371[14])
  i3370.ambientEquatorColor = new pc.Color(i3371[15], i3371[16], i3371[17], i3371[18])
  i3370.fogColor = new pc.Color(i3371[19], i3371[20], i3371[21], i3371[22])
  i3370.fogEndDistance = i3371[23]
  i3370.fogStartDistance = i3371[24]
  i3370.fogDensity = i3371[25]
  i3370.fog = !!i3371[26]
  request.r(i3371[27], i3371[28], 0, i3370, 'skybox')
  i3370.fogMode = i3371[29]
  var i3373 = i3371[30]
  var i3372 = []
  for(var i = 0; i < i3373.length; i += 1) {
    i3372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3373[i + 0]) );
  }
  i3370.lightmaps = i3372
  i3370.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3371[31], i3370.lightProbes)
  i3370.lightmapsMode = i3371[32]
  i3370.mixedBakeMode = i3371[33]
  i3370.environmentLightingMode = i3371[34]
  i3370.ambientProbe = new pc.SphericalHarmonicsL2(i3371[35])
  i3370.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3371[36])
  i3370.useReferenceAmbientProbe = !!i3371[37]
  request.r(i3371[38], i3371[39], 0, i3370, 'customReflection')
  request.r(i3371[40], i3371[41], 0, i3370, 'defaultReflection')
  i3370.defaultReflectionMode = i3371[42]
  i3370.defaultReflectionResolution = i3371[43]
  i3370.sunLightObjectId = i3371[44]
  i3370.pixelLightCount = i3371[45]
  i3370.defaultReflectionHDR = !!i3371[46]
  i3370.hasLightDataAsset = !!i3371[47]
  i3370.hasManualGenerate = !!i3371[48]
  return i3370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3377 = data
  request.r(i3377[0], i3377[1], 0, i3376, 'lightmapColor')
  request.r(i3377[2], i3377[3], 0, i3376, 'lightmapDirection')
  return i3376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3378 = root || new UnityEngine.LightProbes()
  var i3379 = data
  return i3378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3387 = data
  var i3389 = i3387[0]
  var i3388 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3389.length; i += 1) {
    i3388.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3389[i + 0]));
  }
  i3386.ShaderCompilationErrors = i3388
  i3386.name = i3387[1]
  i3386.guid = i3387[2]
  var i3391 = i3387[3]
  var i3390 = []
  for(var i = 0; i < i3391.length; i += 1) {
    i3390.push( i3391[i + 0] );
  }
  i3386.shaderDefinedKeywords = i3390
  var i3393 = i3387[4]
  var i3392 = []
  for(var i = 0; i < i3393.length; i += 1) {
    i3392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3393[i + 0]) );
  }
  i3386.passes = i3392
  var i3395 = i3387[5]
  var i3394 = []
  for(var i = 0; i < i3395.length; i += 1) {
    i3394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3395[i + 0]) );
  }
  i3386.usePasses = i3394
  var i3397 = i3387[6]
  var i3396 = []
  for(var i = 0; i < i3397.length; i += 1) {
    i3396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3397[i + 0]) );
  }
  i3386.defaultParameterValues = i3396
  request.r(i3387[7], i3387[8], 0, i3386, 'unityFallbackShader')
  i3386.readDepth = !!i3387[9]
  i3386.isCreatedByShaderGraph = !!i3387[10]
  i3386.usedBatchUniforms = i3387[11]
  return i3386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3401 = data
  i3400.shaderName = i3401[0]
  i3400.errorMessage = i3401[1]
  return i3400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3404 = root || new pc.UnityShaderPass()
  var i3405 = data
  i3404.id = i3405[0]
  i3404.subShaderIndex = i3405[1]
  i3404.name = i3405[2]
  i3404.passType = i3405[3]
  i3404.grabPassTextureName = i3405[4]
  i3404.usePass = !!i3405[5]
  i3404.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3405[6], i3404.zTest)
  i3404.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3405[7], i3404.zWrite)
  i3404.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3405[8], i3404.culling)
  i3404.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3405[9], i3404.blending)
  i3404.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3405[10], i3404.alphaBlending)
  i3404.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3405[11], i3404.colorWriteMask)
  i3404.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3405[12], i3404.offsetUnits)
  i3404.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3405[13], i3404.offsetFactor)
  i3404.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3405[14], i3404.stencilRef)
  i3404.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3405[15], i3404.stencilReadMask)
  i3404.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3405[16], i3404.stencilWriteMask)
  i3404.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3405[17], i3404.stencilOp)
  i3404.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3405[18], i3404.stencilOpFront)
  i3404.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3405[19], i3404.stencilOpBack)
  var i3407 = i3405[20]
  var i3406 = []
  for(var i = 0; i < i3407.length; i += 1) {
    i3406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3407[i + 0]) );
  }
  i3404.tags = i3406
  var i3409 = i3405[21]
  var i3408 = []
  for(var i = 0; i < i3409.length; i += 1) {
    i3408.push( i3409[i + 0] );
  }
  i3404.passDefinedKeywords = i3408
  var i3411 = i3405[22]
  var i3410 = []
  for(var i = 0; i < i3411.length; i += 1) {
    i3410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3411[i + 0]) );
  }
  i3404.passDefinedKeywordGroups = i3410
  var i3413 = i3405[23]
  var i3412 = []
  for(var i = 0; i < i3413.length; i += 1) {
    i3412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3413[i + 0]) );
  }
  i3404.variants = i3412
  var i3415 = i3405[24]
  var i3414 = []
  for(var i = 0; i < i3415.length; i += 1) {
    i3414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3415[i + 0]) );
  }
  i3404.excludedVariants = i3414
  i3404.hasDepthReader = !!i3405[25]
  return i3404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3417 = data
  i3416.val = i3417[0]
  i3416.name = i3417[1]
  return i3416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3419 = data
  i3418.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3419[0], i3418.src)
  i3418.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3419[1], i3418.dst)
  i3418.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3419[2], i3418.op)
  return i3418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3421 = data
  i3420.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3421[0], i3420.pass)
  i3420.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3421[1], i3420.fail)
  i3420.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3421[2], i3420.zFail)
  i3420.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3421[3], i3420.comp)
  return i3420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3425 = data
  i3424.name = i3425[0]
  i3424.value = i3425[1]
  return i3424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3429 = data
  var i3431 = i3429[0]
  var i3430 = []
  for(var i = 0; i < i3431.length; i += 1) {
    i3430.push( i3431[i + 0] );
  }
  i3428.keywords = i3430
  i3428.hasDiscard = !!i3429[1]
  return i3428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3435 = data
  i3434.passId = i3435[0]
  i3434.subShaderIndex = i3435[1]
  var i3437 = i3435[2]
  var i3436 = []
  for(var i = 0; i < i3437.length; i += 1) {
    i3436.push( i3437[i + 0] );
  }
  i3434.keywords = i3436
  i3434.vertexProgram = i3435[3]
  i3434.fragmentProgram = i3435[4]
  i3434.compiledForWebGL2 = !!i3435[5]
  i3434.readDepth = !!i3435[6]
  return i3434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3441 = data
  request.r(i3441[0], i3441[1], 0, i3440, 'shader')
  i3440.pass = i3441[2]
  return i3440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3445 = data
  i3444.name = i3445[0]
  i3444.type = i3445[1]
  i3444.value = new pc.Vec4( i3445[2], i3445[3], i3445[4], i3445[5] )
  i3444.textureValue = i3445[6]
  i3444.shaderPropertyFlag = i3445[7]
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3447 = data
  i3446.name = i3447[0]
  request.r(i3447[1], i3447[2], 0, i3446, 'texture')
  i3446.aabb = i3447[3]
  i3446.vertices = i3447[4]
  i3446.triangles = i3447[5]
  i3446.textureRect = UnityEngine.Rect.MinMaxRect(i3447[6], i3447[7], i3447[8], i3447[9])
  i3446.packedRect = UnityEngine.Rect.MinMaxRect(i3447[10], i3447[11], i3447[12], i3447[13])
  i3446.border = new pc.Vec4( i3447[14], i3447[15], i3447[16], i3447[17] )
  i3446.transparency = i3447[18]
  i3446.bounds = i3447[19]
  i3446.pixelsPerUnit = i3447[20]
  i3446.textureWidth = i3447[21]
  i3446.textureHeight = i3447[22]
  i3446.nativeSize = new pc.Vec2( i3447[23], i3447[24] )
  i3446.pivot = new pc.Vec2( i3447[25], i3447[26] )
  i3446.textureRectOffset = new pc.Vec2( i3447[27], i3447[28] )
  return i3446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3449 = data
  i3448.name = i3449[0]
  return i3448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3451 = data
  i3450.name = i3451[0]
  i3450.ascent = i3451[1]
  i3450.originalLineHeight = i3451[2]
  i3450.fontSize = i3451[3]
  var i3453 = i3451[4]
  var i3452 = []
  for(var i = 0; i < i3453.length; i += 1) {
    i3452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3453[i + 0]) );
  }
  i3450.characterInfo = i3452
  request.r(i3451[5], i3451[6], 0, i3450, 'texture')
  i3450.originalFontSize = i3451[7]
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3457 = data
  i3456.index = i3457[0]
  i3456.advance = i3457[1]
  i3456.bearing = i3457[2]
  i3456.glyphWidth = i3457[3]
  i3456.glyphHeight = i3457[4]
  i3456.minX = i3457[5]
  i3456.maxX = i3457[6]
  i3456.minY = i3457[7]
  i3456.maxY = i3457[8]
  i3456.uvBottomLeftX = i3457[9]
  i3456.uvBottomLeftY = i3457[10]
  i3456.uvBottomRightX = i3457[11]
  i3456.uvBottomRightY = i3457[12]
  i3456.uvTopLeftX = i3457[13]
  i3456.uvTopLeftY = i3457[14]
  i3456.uvTopRightX = i3457[15]
  i3456.uvTopRightY = i3457[16]
  return i3456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3459 = data
  i3458.name = i3459[0]
  i3458.bytes64 = i3459[1]
  i3458.data = i3459[2]
  return i3458
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3460 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3461 = data
  var i3463 = i3461[0]
  var i3462 = []
  for(var i = 0; i < i3463.length; i += 2) {
  request.r(i3463[i + 0], i3463[i + 1], 2, i3462, '')
  }
  i3460.atlasAssets = i3462
  i3460.scale = i3461[1]
  request.r(i3461[2], i3461[3], 0, i3460, 'skeletonJSON')
  i3460.isUpgradingBlendModeMaterials = !!i3461[4]
  i3460.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3461[5], i3460.blendModeMaterials)
  var i3465 = i3461[6]
  var i3464 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3465.length; i += 2) {
  request.r(i3465[i + 0], i3465[i + 1], 1, i3464, '')
  }
  i3460.skeletonDataModifiers = i3464
  var i3467 = i3461[7]
  var i3466 = []
  for(var i = 0; i < i3467.length; i += 1) {
    i3466.push( i3467[i + 0] );
  }
  i3460.fromAnimation = i3466
  var i3469 = i3461[8]
  var i3468 = []
  for(var i = 0; i < i3469.length; i += 1) {
    i3468.push( i3469[i + 0] );
  }
  i3460.toAnimation = i3468
  i3460.duration = i3461[9]
  i3460.defaultMix = i3461[10]
  request.r(i3461[11], i3461[12], 0, i3460, 'controller')
  return i3460
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3472 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3473 = data
  i3472.applyAdditiveMaterial = !!i3473[0]
  var i3475 = i3473[1]
  var i3474 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3475.length; i += 1) {
    i3474.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3475[i + 0]));
  }
  i3472.additiveMaterials = i3474
  var i3477 = i3473[2]
  var i3476 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3477.length; i += 1) {
    i3476.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3477[i + 0]));
  }
  i3472.multiplyMaterials = i3476
  var i3479 = i3473[3]
  var i3478 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3479.length; i += 1) {
    i3478.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3479[i + 0]));
  }
  i3472.screenMaterials = i3478
  i3472.requiresBlendModeMaterials = !!i3473[4]
  return i3472
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3482 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3483 = data
  i3482.pageName = i3483[0]
  request.r(i3483[1], i3483[2], 0, i3482, 'material')
  return i3482
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3486 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3487 = data
  request.r(i3487[0], i3487[1], 0, i3486, 'atlasFile')
  var i3489 = i3487[2]
  var i3488 = []
  for(var i = 0; i < i3489.length; i += 2) {
  request.r(i3489[i + 0], i3489[i + 1], 2, i3488, '')
  }
  i3486.materials = i3488
  i3486.textureLoadingMode = i3487[3]
  request.r(i3487[4], i3487[5], 0, i3486, 'onDemandTextureLoader')
  return i3486
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3490 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3491 = data
  i3490.hashCode = i3491[0]
  request.r(i3491[1], i3491[2], 0, i3490, 'material')
  i3490.materialHashCode = i3491[3]
  request.r(i3491[4], i3491[5], 0, i3490, 'atlas')
  i3490.normalStyle = i3491[6]
  i3490.normalSpacingOffset = i3491[7]
  i3490.boldStyle = i3491[8]
  i3490.boldSpacing = i3491[9]
  i3490.italicStyle = i3491[10]
  i3490.tabSize = i3491[11]
  i3490.m_Version = i3491[12]
  i3490.m_SourceFontFileGUID = i3491[13]
  request.r(i3491[14], i3491[15], 0, i3490, 'm_SourceFontFile_EditorRef')
  request.r(i3491[16], i3491[17], 0, i3490, 'm_SourceFontFile')
  i3490.m_AtlasPopulationMode = i3491[18]
  i3490.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3491[19], i3490.m_FaceInfo)
  var i3493 = i3491[20]
  var i3492 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3493.length; i += 1) {
    i3492.add(request.d('UnityEngine.TextCore.Glyph', i3493[i + 0]));
  }
  i3490.m_GlyphTable = i3492
  var i3495 = i3491[21]
  var i3494 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3495.length; i += 1) {
    i3494.add(request.d('TMPro.TMP_Character', i3495[i + 0]));
  }
  i3490.m_CharacterTable = i3494
  var i3497 = i3491[22]
  var i3496 = []
  for(var i = 0; i < i3497.length; i += 2) {
  request.r(i3497[i + 0], i3497[i + 1], 2, i3496, '')
  }
  i3490.m_AtlasTextures = i3496
  i3490.m_AtlasTextureIndex = i3491[23]
  i3490.m_IsMultiAtlasTexturesEnabled = !!i3491[24]
  i3490.m_ClearDynamicDataOnBuild = !!i3491[25]
  var i3499 = i3491[26]
  var i3498 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3499.length; i += 1) {
    i3498.add(request.d('UnityEngine.TextCore.GlyphRect', i3499[i + 0]));
  }
  i3490.m_UsedGlyphRects = i3498
  var i3501 = i3491[27]
  var i3500 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3501.length; i += 1) {
    i3500.add(request.d('UnityEngine.TextCore.GlyphRect', i3501[i + 0]));
  }
  i3490.m_FreeGlyphRects = i3500
  i3490.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3491[28], i3490.m_fontInfo)
  i3490.m_AtlasWidth = i3491[29]
  i3490.m_AtlasHeight = i3491[30]
  i3490.m_AtlasPadding = i3491[31]
  i3490.m_AtlasRenderMode = i3491[32]
  var i3503 = i3491[33]
  var i3502 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3503.length; i += 1) {
    i3502.add(request.d('TMPro.TMP_Glyph', i3503[i + 0]));
  }
  i3490.m_glyphInfoList = i3502
  i3490.m_KerningTable = request.d('TMPro.KerningTable', i3491[34], i3490.m_KerningTable)
  i3490.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3491[35], i3490.m_FontFeatureTable)
  var i3505 = i3491[36]
  var i3504 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3505.length; i += 2) {
  request.r(i3505[i + 0], i3505[i + 1], 1, i3504, '')
  }
  i3490.fallbackFontAssets = i3504
  var i3507 = i3491[37]
  var i3506 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3507.length; i += 2) {
  request.r(i3507[i + 0], i3507[i + 1], 1, i3506, '')
  }
  i3490.m_FallbackFontAssetTable = i3506
  i3490.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3491[38], i3490.m_CreationSettings)
  var i3509 = i3491[39]
  var i3508 = []
  for(var i = 0; i < i3509.length; i += 1) {
    i3508.push( request.d('TMPro.TMP_FontWeightPair', i3509[i + 0]) );
  }
  i3490.m_FontWeightTable = i3508
  var i3511 = i3491[40]
  var i3510 = []
  for(var i = 0; i < i3511.length; i += 1) {
    i3510.push( request.d('TMPro.TMP_FontWeightPair', i3511[i + 0]) );
  }
  i3490.fontWeights = i3510
  return i3490
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3512 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3513 = data
  i3512.m_FaceIndex = i3513[0]
  i3512.m_FamilyName = i3513[1]
  i3512.m_StyleName = i3513[2]
  i3512.m_PointSize = i3513[3]
  i3512.m_Scale = i3513[4]
  i3512.m_UnitsPerEM = i3513[5]
  i3512.m_LineHeight = i3513[6]
  i3512.m_AscentLine = i3513[7]
  i3512.m_CapLine = i3513[8]
  i3512.m_MeanLine = i3513[9]
  i3512.m_Baseline = i3513[10]
  i3512.m_DescentLine = i3513[11]
  i3512.m_SuperscriptOffset = i3513[12]
  i3512.m_SuperscriptSize = i3513[13]
  i3512.m_SubscriptOffset = i3513[14]
  i3512.m_SubscriptSize = i3513[15]
  i3512.m_UnderlineOffset = i3513[16]
  i3512.m_UnderlineThickness = i3513[17]
  i3512.m_StrikethroughOffset = i3513[18]
  i3512.m_StrikethroughThickness = i3513[19]
  i3512.m_TabWidth = i3513[20]
  return i3512
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3516 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3517 = data
  i3516.m_Index = i3517[0]
  i3516.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3517[1], i3516.m_Metrics)
  i3516.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3517[2], i3516.m_GlyphRect)
  i3516.m_Scale = i3517[3]
  i3516.m_AtlasIndex = i3517[4]
  i3516.m_ClassDefinitionType = i3517[5]
  return i3516
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3518 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3519 = data
  i3518.m_Width = i3519[0]
  i3518.m_Height = i3519[1]
  i3518.m_HorizontalBearingX = i3519[2]
  i3518.m_HorizontalBearingY = i3519[3]
  i3518.m_HorizontalAdvance = i3519[4]
  return i3518
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3520 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3521 = data
  i3520.m_X = i3521[0]
  i3520.m_Y = i3521[1]
  i3520.m_Width = i3521[2]
  i3520.m_Height = i3521[3]
  return i3520
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3524 = root || request.c( 'TMPro.TMP_Character' )
  var i3525 = data
  i3524.m_ElementType = i3525[0]
  i3524.m_Unicode = i3525[1]
  i3524.m_GlyphIndex = i3525[2]
  i3524.m_Scale = i3525[3]
  return i3524
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3530 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3531 = data
  i3530.Name = i3531[0]
  i3530.PointSize = i3531[1]
  i3530.Scale = i3531[2]
  i3530.CharacterCount = i3531[3]
  i3530.LineHeight = i3531[4]
  i3530.Baseline = i3531[5]
  i3530.Ascender = i3531[6]
  i3530.CapHeight = i3531[7]
  i3530.Descender = i3531[8]
  i3530.CenterLine = i3531[9]
  i3530.SuperscriptOffset = i3531[10]
  i3530.SubscriptOffset = i3531[11]
  i3530.SubSize = i3531[12]
  i3530.Underline = i3531[13]
  i3530.UnderlineThickness = i3531[14]
  i3530.strikethrough = i3531[15]
  i3530.strikethroughThickness = i3531[16]
  i3530.TabWidth = i3531[17]
  i3530.Padding = i3531[18]
  i3530.AtlasWidth = i3531[19]
  i3530.AtlasHeight = i3531[20]
  return i3530
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3534 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3535 = data
  i3534.id = i3535[0]
  i3534.x = i3535[1]
  i3534.y = i3535[2]
  i3534.width = i3535[3]
  i3534.height = i3535[4]
  i3534.xOffset = i3535[5]
  i3534.yOffset = i3535[6]
  i3534.xAdvance = i3535[7]
  i3534.scale = i3535[8]
  return i3534
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3536 = root || request.c( 'TMPro.KerningTable' )
  var i3537 = data
  var i3539 = i3537[0]
  var i3538 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3539.length; i += 1) {
    i3538.add(request.d('TMPro.KerningPair', i3539[i + 0]));
  }
  i3536.kerningPairs = i3538
  return i3536
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3542 = root || request.c( 'TMPro.KerningPair' )
  var i3543 = data
  i3542.xOffset = i3543[0]
  i3542.m_FirstGlyph = i3543[1]
  i3542.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3543[2], i3542.m_FirstGlyphAdjustments)
  i3542.m_SecondGlyph = i3543[3]
  i3542.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3543[4], i3542.m_SecondGlyphAdjustments)
  i3542.m_IgnoreSpacingAdjustments = !!i3543[5]
  return i3542
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3544 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3545 = data
  var i3547 = i3545[0]
  var i3546 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3547.length; i += 1) {
    i3546.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3547[i + 0]));
  }
  i3544.m_GlyphPairAdjustmentRecords = i3546
  return i3544
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3550 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3551 = data
  i3550.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3551[0], i3550.m_FirstAdjustmentRecord)
  i3550.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3551[1], i3550.m_SecondAdjustmentRecord)
  i3550.m_FeatureLookupFlags = i3551[2]
  return i3550
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3554 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3555 = data
  i3554.sourceFontFileName = i3555[0]
  i3554.sourceFontFileGUID = i3555[1]
  i3554.pointSizeSamplingMode = i3555[2]
  i3554.pointSize = i3555[3]
  i3554.padding = i3555[4]
  i3554.packingMode = i3555[5]
  i3554.atlasWidth = i3555[6]
  i3554.atlasHeight = i3555[7]
  i3554.characterSetSelectionMode = i3555[8]
  i3554.characterSequence = i3555[9]
  i3554.referencedFontAssetGUID = i3555[10]
  i3554.referencedTextAssetGUID = i3555[11]
  i3554.fontStyle = i3555[12]
  i3554.fontStyleModifier = i3555[13]
  i3554.renderMode = i3555[14]
  i3554.includeFontFeatures = !!i3555[15]
  return i3554
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3558 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3559 = data
  request.r(i3559[0], i3559[1], 0, i3558, 'regularTypeface')
  request.r(i3559[2], i3559[3], 0, i3558, 'italicTypeface')
  return i3558
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3560 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3561 = data
  i3560.useSafeMode = !!i3561[0]
  i3560.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3561[1], i3560.safeModeOptions)
  i3560.timeScale = i3561[2]
  i3560.unscaledTimeScale = i3561[3]
  i3560.useSmoothDeltaTime = !!i3561[4]
  i3560.maxSmoothUnscaledTime = i3561[5]
  i3560.rewindCallbackMode = i3561[6]
  i3560.showUnityEditorReport = !!i3561[7]
  i3560.logBehaviour = i3561[8]
  i3560.drawGizmos = !!i3561[9]
  i3560.defaultRecyclable = !!i3561[10]
  i3560.defaultAutoPlay = i3561[11]
  i3560.defaultUpdateType = i3561[12]
  i3560.defaultTimeScaleIndependent = !!i3561[13]
  i3560.defaultEaseType = i3561[14]
  i3560.defaultEaseOvershootOrAmplitude = i3561[15]
  i3560.defaultEasePeriod = i3561[16]
  i3560.defaultAutoKill = !!i3561[17]
  i3560.defaultLoopType = i3561[18]
  i3560.debugMode = !!i3561[19]
  i3560.debugStoreTargetId = !!i3561[20]
  i3560.showPreviewPanel = !!i3561[21]
  i3560.storeSettingsLocation = i3561[22]
  i3560.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3561[23], i3560.modules)
  i3560.createASMDEF = !!i3561[24]
  i3560.showPlayingTweens = !!i3561[25]
  i3560.showPausedTweens = !!i3561[26]
  return i3560
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3562 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3563 = data
  i3562.logBehaviour = i3563[0]
  i3562.nestedTweenFailureBehaviour = i3563[1]
  return i3562
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3564 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3565 = data
  i3564.showPanel = !!i3565[0]
  i3564.audioEnabled = !!i3565[1]
  i3564.physicsEnabled = !!i3565[2]
  i3564.physics2DEnabled = !!i3565[3]
  i3564.spriteEnabled = !!i3565[4]
  i3564.uiEnabled = !!i3565[5]
  i3564.textMeshProEnabled = !!i3565[6]
  i3564.tk2DEnabled = !!i3565[7]
  i3564.deAudioEnabled = !!i3565[8]
  i3564.deUnityExtendedEnabled = !!i3565[9]
  i3564.epoOutlineEnabled = !!i3565[10]
  return i3564
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3566 = root || request.c( 'TMPro.TMP_Settings' )
  var i3567 = data
  i3566.m_enableWordWrapping = !!i3567[0]
  i3566.m_enableKerning = !!i3567[1]
  i3566.m_enableExtraPadding = !!i3567[2]
  i3566.m_enableTintAllSprites = !!i3567[3]
  i3566.m_enableParseEscapeCharacters = !!i3567[4]
  i3566.m_EnableRaycastTarget = !!i3567[5]
  i3566.m_GetFontFeaturesAtRuntime = !!i3567[6]
  i3566.m_missingGlyphCharacter = i3567[7]
  i3566.m_warningsDisabled = !!i3567[8]
  request.r(i3567[9], i3567[10], 0, i3566, 'm_defaultFontAsset')
  i3566.m_defaultFontAssetPath = i3567[11]
  i3566.m_defaultFontSize = i3567[12]
  i3566.m_defaultAutoSizeMinRatio = i3567[13]
  i3566.m_defaultAutoSizeMaxRatio = i3567[14]
  i3566.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3567[15], i3567[16] )
  i3566.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3567[17], i3567[18] )
  i3566.m_autoSizeTextContainer = !!i3567[19]
  i3566.m_IsTextObjectScaleStatic = !!i3567[20]
  var i3569 = i3567[21]
  var i3568 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3569.length; i += 2) {
  request.r(i3569[i + 0], i3569[i + 1], 1, i3568, '')
  }
  i3566.m_fallbackFontAssets = i3568
  i3566.m_matchMaterialPreset = !!i3567[22]
  request.r(i3567[23], i3567[24], 0, i3566, 'm_defaultSpriteAsset')
  i3566.m_defaultSpriteAssetPath = i3567[25]
  i3566.m_enableEmojiSupport = !!i3567[26]
  i3566.m_MissingCharacterSpriteUnicode = i3567[27]
  i3566.m_defaultColorGradientPresetsPath = i3567[28]
  request.r(i3567[29], i3567[30], 0, i3566, 'm_defaultStyleSheet')
  i3566.m_StyleSheetsResourcePath = i3567[31]
  request.r(i3567[32], i3567[33], 0, i3566, 'm_leadingCharacters')
  request.r(i3567[34], i3567[35], 0, i3566, 'm_followingCharacters')
  i3566.m_UseModernHangulLineBreakingRules = !!i3567[36]
  return i3566
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3570 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3571 = data
  i3570.m_GlyphIndex = i3571[0]
  i3570.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3571[1], i3570.m_GlyphValueRecord)
  return i3570
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3572 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3573 = data
  i3572.m_XPlacement = i3573[0]
  i3572.m_YPlacement = i3573[1]
  i3572.m_XAdvance = i3573[2]
  i3572.m_YAdvance = i3573[3]
  return i3572
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3574 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3575 = data
  i3574.hashCode = i3575[0]
  request.r(i3575[1], i3575[2], 0, i3574, 'material')
  i3574.materialHashCode = i3575[3]
  request.r(i3575[4], i3575[5], 0, i3574, 'spriteSheet')
  var i3577 = i3575[6]
  var i3576 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3577.length; i += 1) {
    i3576.add(request.d('TMPro.TMP_Sprite', i3577[i + 0]));
  }
  i3574.spriteInfoList = i3576
  var i3579 = i3575[7]
  var i3578 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3579.length; i += 2) {
  request.r(i3579[i + 0], i3579[i + 1], 1, i3578, '')
  }
  i3574.fallbackSpriteAssets = i3578
  i3574.m_Version = i3575[8]
  i3574.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3575[9], i3574.m_FaceInfo)
  var i3581 = i3575[10]
  var i3580 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3581.length; i += 1) {
    i3580.add(request.d('TMPro.TMP_SpriteCharacter', i3581[i + 0]));
  }
  i3574.m_SpriteCharacterTable = i3580
  var i3583 = i3575[11]
  var i3582 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3583.length; i += 1) {
    i3582.add(request.d('TMPro.TMP_SpriteGlyph', i3583[i + 0]));
  }
  i3574.m_SpriteGlyphTable = i3582
  return i3574
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3586 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3587 = data
  i3586.name = i3587[0]
  i3586.hashCode = i3587[1]
  i3586.unicode = i3587[2]
  i3586.pivot = new pc.Vec2( i3587[3], i3587[4] )
  request.r(i3587[5], i3587[6], 0, i3586, 'sprite')
  i3586.id = i3587[7]
  i3586.x = i3587[8]
  i3586.y = i3587[9]
  i3586.width = i3587[10]
  i3586.height = i3587[11]
  i3586.xOffset = i3587[12]
  i3586.yOffset = i3587[13]
  i3586.xAdvance = i3587[14]
  i3586.scale = i3587[15]
  return i3586
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3592 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3593 = data
  i3592.m_Name = i3593[0]
  i3592.m_HashCode = i3593[1]
  i3592.m_ElementType = i3593[2]
  i3592.m_Unicode = i3593[3]
  i3592.m_GlyphIndex = i3593[4]
  i3592.m_Scale = i3593[5]
  return i3592
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3596 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3597 = data
  request.r(i3597[0], i3597[1], 0, i3596, 'sprite')
  i3596.m_Index = i3597[2]
  i3596.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3597[3], i3596.m_Metrics)
  i3596.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3597[4], i3596.m_GlyphRect)
  i3596.m_Scale = i3597[5]
  i3596.m_AtlasIndex = i3597[6]
  i3596.m_ClassDefinitionType = i3597[7]
  return i3596
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3598 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3599 = data
  var i3601 = i3599[0]
  var i3600 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3601.length; i += 1) {
    i3600.add(request.d('TMPro.TMP_Style', i3601[i + 0]));
  }
  i3598.m_StyleList = i3600
  return i3598
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3604 = root || request.c( 'TMPro.TMP_Style' )
  var i3605 = data
  i3604.m_Name = i3605[0]
  i3604.m_HashCode = i3605[1]
  i3604.m_OpeningDefinition = i3605[2]
  i3604.m_ClosingDefinition = i3605[3]
  i3604.m_OpeningTagArray = i3605[4]
  i3604.m_ClosingTagArray = i3605[5]
  i3604.m_OpeningTagUnicodeArray = i3605[6]
  i3604.m_ClosingTagUnicodeArray = i3605[7]
  return i3604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3607 = data
  var i3609 = i3607[0]
  var i3608 = []
  for(var i = 0; i < i3609.length; i += 1) {
    i3608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3609[i + 0]) );
  }
  i3606.files = i3608
  i3606.componentToPrefabIds = i3607[1]
  return i3606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3613 = data
  i3612.path = i3613[0]
  request.r(i3613[1], i3613[2], 0, i3612, 'unityObject')
  return i3612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3615 = data
  var i3617 = i3615[0]
  var i3616 = []
  for(var i = 0; i < i3617.length; i += 1) {
    i3616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3617[i + 0]) );
  }
  i3614.scriptsExecutionOrder = i3616
  var i3619 = i3615[1]
  var i3618 = []
  for(var i = 0; i < i3619.length; i += 1) {
    i3618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3619[i + 0]) );
  }
  i3614.sortingLayers = i3618
  var i3621 = i3615[2]
  var i3620 = []
  for(var i = 0; i < i3621.length; i += 1) {
    i3620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3621[i + 0]) );
  }
  i3614.cullingLayers = i3620
  i3614.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3615[3], i3614.timeSettings)
  i3614.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3615[4], i3614.physicsSettings)
  i3614.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3615[5], i3614.physics2DSettings)
  i3614.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3615[6], i3614.qualitySettings)
  i3614.enableRealtimeShadows = !!i3615[7]
  i3614.enableAutoInstancing = !!i3615[8]
  i3614.enableDynamicBatching = !!i3615[9]
  i3614.lightmapEncodingQuality = i3615[10]
  i3614.desiredColorSpace = i3615[11]
  var i3623 = i3615[12]
  var i3622 = []
  for(var i = 0; i < i3623.length; i += 1) {
    i3622.push( i3623[i + 0] );
  }
  i3614.allTags = i3622
  return i3614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3627 = data
  i3626.name = i3627[0]
  i3626.value = i3627[1]
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3631 = data
  i3630.id = i3631[0]
  i3630.name = i3631[1]
  i3630.value = i3631[2]
  return i3630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3635 = data
  i3634.id = i3635[0]
  i3634.name = i3635[1]
  return i3634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3637 = data
  i3636.fixedDeltaTime = i3637[0]
  i3636.maximumDeltaTime = i3637[1]
  i3636.timeScale = i3637[2]
  i3636.maximumParticleTimestep = i3637[3]
  return i3636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3639 = data
  i3638.gravity = new pc.Vec3( i3639[0], i3639[1], i3639[2] )
  i3638.defaultSolverIterations = i3639[3]
  i3638.bounceThreshold = i3639[4]
  i3638.autoSyncTransforms = !!i3639[5]
  i3638.autoSimulation = !!i3639[6]
  var i3641 = i3639[7]
  var i3640 = []
  for(var i = 0; i < i3641.length; i += 1) {
    i3640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3641[i + 0]) );
  }
  i3638.collisionMatrix = i3640
  return i3638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3645 = data
  i3644.enabled = !!i3645[0]
  i3644.layerId = i3645[1]
  i3644.otherLayerId = i3645[2]
  return i3644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3647 = data
  request.r(i3647[0], i3647[1], 0, i3646, 'material')
  i3646.gravity = new pc.Vec2( i3647[2], i3647[3] )
  i3646.positionIterations = i3647[4]
  i3646.velocityIterations = i3647[5]
  i3646.velocityThreshold = i3647[6]
  i3646.maxLinearCorrection = i3647[7]
  i3646.maxAngularCorrection = i3647[8]
  i3646.maxTranslationSpeed = i3647[9]
  i3646.maxRotationSpeed = i3647[10]
  i3646.baumgarteScale = i3647[11]
  i3646.baumgarteTOIScale = i3647[12]
  i3646.timeToSleep = i3647[13]
  i3646.linearSleepTolerance = i3647[14]
  i3646.angularSleepTolerance = i3647[15]
  i3646.defaultContactOffset = i3647[16]
  i3646.autoSimulation = !!i3647[17]
  i3646.queriesHitTriggers = !!i3647[18]
  i3646.queriesStartInColliders = !!i3647[19]
  i3646.callbacksOnDisable = !!i3647[20]
  i3646.reuseCollisionCallbacks = !!i3647[21]
  i3646.autoSyncTransforms = !!i3647[22]
  var i3649 = i3647[23]
  var i3648 = []
  for(var i = 0; i < i3649.length; i += 1) {
    i3648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3649[i + 0]) );
  }
  i3646.collisionMatrix = i3648
  return i3646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3653 = data
  i3652.enabled = !!i3653[0]
  i3652.layerId = i3653[1]
  i3652.otherLayerId = i3653[2]
  return i3652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3655 = data
  var i3657 = i3655[0]
  var i3656 = []
  for(var i = 0; i < i3657.length; i += 1) {
    i3656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3657[i + 0]) );
  }
  i3654.qualityLevels = i3656
  var i3659 = i3655[1]
  var i3658 = []
  for(var i = 0; i < i3659.length; i += 1) {
    i3658.push( i3659[i + 0] );
  }
  i3654.names = i3658
  i3654.shadows = i3655[2]
  i3654.anisotropicFiltering = i3655[3]
  i3654.antiAliasing = i3655[4]
  i3654.lodBias = i3655[5]
  i3654.shadowCascades = i3655[6]
  i3654.shadowDistance = i3655[7]
  i3654.shadowmaskMode = i3655[8]
  i3654.shadowProjection = i3655[9]
  i3654.shadowResolution = i3655[10]
  i3654.softParticles = !!i3655[11]
  i3654.softVegetation = !!i3655[12]
  i3654.activeColorSpace = i3655[13]
  i3654.desiredColorSpace = i3655[14]
  i3654.masterTextureLimit = i3655[15]
  i3654.maxQueuedFrames = i3655[16]
  i3654.particleRaycastBudget = i3655[17]
  i3654.pixelLightCount = i3655[18]
  i3654.realtimeReflectionProbes = !!i3655[19]
  i3654.shadowCascade2Split = i3655[20]
  i3654.shadowCascade4Split = new pc.Vec3( i3655[21], i3655[22], i3655[23] )
  i3654.streamingMipmapsActive = !!i3655[24]
  i3654.vSyncCount = i3655[25]
  i3654.asyncUploadBufferSize = i3655[26]
  i3654.asyncUploadTimeSlice = i3655[27]
  i3654.billboardsFaceCameraPosition = !!i3655[28]
  i3654.shadowNearPlaneOffset = i3655[29]
  i3654.streamingMipmapsMemoryBudget = i3655[30]
  i3654.maximumLODLevel = i3655[31]
  i3654.streamingMipmapsAddAllCameras = !!i3655[32]
  i3654.streamingMipmapsMaxLevelReduction = i3655[33]
  i3654.streamingMipmapsRenderersPerFrame = i3655[34]
  i3654.resolutionScalingFixedDPIFactor = i3655[35]
  i3654.streamingMipmapsMaxFileIORequests = i3655[36]
  i3654.currentQualityLevel = i3655[37]
  return i3654
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3662 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3663 = data
  i3662.xPlacement = i3663[0]
  i3662.yPlacement = i3663[1]
  i3662.xAdvance = i3663[2]
  i3662.yAdvance = i3663[3]
  return i3662
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[3],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[3],"75":[76],"77":[78],"79":[78],"9":[8],"80":[81],"82":[83],"84":[81],"85":[8],"86":[8],"11":[9],"18":[19,8],"87":[8],"10":[9],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"33":[8],"95":[8],"16":[19,8],"96":[8],"97":[8],"98":[8],"99":[8],"100":[19,8],"101":[8],"102":[6],"103":[6],"7":[6],"104":[6],"105":[3],"106":[3],"107":[108],"109":[3],"110":[111],"112":[8],"113":[19,8],"114":[76],"28":[19,8],"115":[116,76],"117":[76],"118":[76,119],"120":[53],"121":[61],"122":[111],"123":[124],"125":[8],"126":[76,8],"17":[8,19],"127":[8],"128":[19,8],"129":[76],"130":[19,8],"131":[8],"132":[81]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","ClickItem","DraggableItem","UnityEngine.CanvasGroup","UnityEngine.BoxCollider2D","DropZone","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DG.Tweening.DOTweenAnimation","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","IQFill","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "10.0";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "APG_V07_TrangHT_AnhPD";

Deserializers.lunaAppID = "29138";

Deserializers.projectId = "cc2b1186a2056e546bb13add5b988034";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1782";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4276";

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

Deserializers.buildID = "6e672944-277d-4cfd-a525-a7f01299c152";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

