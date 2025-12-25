var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3226 = root || request.c( 'UnityEngine.JointSpring' )
  var i3227 = data
  i3226.spring = i3227[0]
  i3226.damper = i3227[1]
  i3226.targetPosition = i3227[2]
  return i3226
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3228 = root || request.c( 'UnityEngine.JointMotor' )
  var i3229 = data
  i3228.m_TargetVelocity = i3229[0]
  i3228.m_Force = i3229[1]
  i3228.m_FreeSpin = i3229[2]
  return i3228
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3230 = root || request.c( 'UnityEngine.JointLimits' )
  var i3231 = data
  i3230.m_Min = i3231[0]
  i3230.m_Max = i3231[1]
  i3230.m_Bounciness = i3231[2]
  i3230.m_BounceMinVelocity = i3231[3]
  i3230.m_ContactDistance = i3231[4]
  i3230.minBounce = i3231[5]
  i3230.maxBounce = i3231[6]
  return i3230
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3232 = root || request.c( 'UnityEngine.JointDrive' )
  var i3233 = data
  i3232.m_PositionSpring = i3233[0]
  i3232.m_PositionDamper = i3233[1]
  i3232.m_MaximumForce = i3233[2]
  i3232.m_UseAcceleration = i3233[3]
  return i3232
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3234 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3235 = data
  i3234.m_Spring = i3235[0]
  i3234.m_Damper = i3235[1]
  return i3234
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3236 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3237 = data
  i3236.m_Limit = i3237[0]
  i3236.m_Bounciness = i3237[1]
  i3236.m_ContactDistance = i3237[2]
  return i3236
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3238 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3239 = data
  i3238.m_ExtremumSlip = i3239[0]
  i3238.m_ExtremumValue = i3239[1]
  i3238.m_AsymptoteSlip = i3239[2]
  i3238.m_AsymptoteValue = i3239[3]
  i3238.m_Stiffness = i3239[4]
  return i3238
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3240 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3241 = data
  i3240.m_LowerAngle = i3241[0]
  i3240.m_UpperAngle = i3241[1]
  return i3240
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3242 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3243 = data
  i3242.m_MotorSpeed = i3243[0]
  i3242.m_MaximumMotorTorque = i3243[1]
  return i3242
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3244 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3245 = data
  i3244.m_DampingRatio = i3245[0]
  i3244.m_Frequency = i3245[1]
  i3244.m_Angle = i3245[2]
  return i3244
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3246 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3247 = data
  i3246.m_LowerTranslation = i3247[0]
  i3246.m_UpperTranslation = i3247[1]
  return i3246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3249 = data
  i3248.name = i3249[0]
  i3248.width = i3249[1]
  i3248.height = i3249[2]
  i3248.mipmapCount = i3249[3]
  i3248.anisoLevel = i3249[4]
  i3248.filterMode = i3249[5]
  i3248.hdr = !!i3249[6]
  i3248.format = i3249[7]
  i3248.wrapMode = i3249[8]
  i3248.alphaIsTransparency = !!i3249[9]
  i3248.alphaSource = i3249[10]
  i3248.graphicsFormat = i3249[11]
  i3248.sRGBTexture = !!i3249[12]
  i3248.desiredColorSpace = i3249[13]
  i3248.wrapU = i3249[14]
  i3248.wrapV = i3249[15]
  return i3248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3250 = root || new pc.UnityMaterial()
  var i3251 = data
  i3250.name = i3251[0]
  request.r(i3251[1], i3251[2], 0, i3250, 'shader')
  i3250.renderQueue = i3251[3]
  i3250.enableInstancing = !!i3251[4]
  var i3253 = i3251[5]
  var i3252 = []
  for(var i = 0; i < i3253.length; i += 1) {
    i3252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3253[i + 0]) );
  }
  i3250.floatParameters = i3252
  var i3255 = i3251[6]
  var i3254 = []
  for(var i = 0; i < i3255.length; i += 1) {
    i3254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3255[i + 0]) );
  }
  i3250.colorParameters = i3254
  var i3257 = i3251[7]
  var i3256 = []
  for(var i = 0; i < i3257.length; i += 1) {
    i3256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3257[i + 0]) );
  }
  i3250.vectorParameters = i3256
  var i3259 = i3251[8]
  var i3258 = []
  for(var i = 0; i < i3259.length; i += 1) {
    i3258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3259[i + 0]) );
  }
  i3250.textureParameters = i3258
  var i3261 = i3251[9]
  var i3260 = []
  for(var i = 0; i < i3261.length; i += 1) {
    i3260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3261[i + 0]) );
  }
  i3250.materialFlags = i3260
  return i3250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3265 = data
  i3264.name = i3265[0]
  i3264.value = i3265[1]
  return i3264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3269 = data
  i3268.name = i3269[0]
  i3268.value = new pc.Color(i3269[1], i3269[2], i3269[3], i3269[4])
  return i3268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3273 = data
  i3272.name = i3273[0]
  i3272.value = new pc.Vec4( i3273[1], i3273[2], i3273[3], i3273[4] )
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3277 = data
  i3276.name = i3277[0]
  request.r(i3277[1], i3277[2], 0, i3276, 'value')
  return i3276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3281 = data
  i3280.name = i3281[0]
  i3280.enabled = !!i3281[1]
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3283 = data
  i3282.name = i3283[0]
  i3282.index = i3283[1]
  i3282.startup = !!i3283[2]
  return i3282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3285 = data
  i3284.position = new pc.Vec3( i3285[0], i3285[1], i3285[2] )
  i3284.scale = new pc.Vec3( i3285[3], i3285[4], i3285[5] )
  i3284.rotation = new pc.Quat(i3285[6], i3285[7], i3285[8], i3285[9])
  return i3284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3287 = data
  i3286.aspect = i3287[0]
  i3286.orthographic = !!i3287[1]
  i3286.orthographicSize = i3287[2]
  i3286.backgroundColor = new pc.Color(i3287[3], i3287[4], i3287[5], i3287[6])
  i3286.nearClipPlane = i3287[7]
  i3286.farClipPlane = i3287[8]
  i3286.fieldOfView = i3287[9]
  i3286.depth = i3287[10]
  i3286.clearFlags = i3287[11]
  i3286.cullingMask = i3287[12]
  i3286.rect = i3287[13]
  request.r(i3287[14], i3287[15], 0, i3286, 'targetTexture')
  i3286.usePhysicalProperties = !!i3287[16]
  i3286.focalLength = i3287[17]
  i3286.sensorSize = new pc.Vec2( i3287[18], i3287[19] )
  i3286.lensShift = new pc.Vec2( i3287[20], i3287[21] )
  i3286.gateFit = i3287[22]
  i3286.commandBufferCount = i3287[23]
  i3286.cameraType = i3287[24]
  i3286.enabled = !!i3287[25]
  return i3286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3289 = data
  i3288.name = i3289[0]
  i3288.tagId = i3289[1]
  i3288.enabled = !!i3289[2]
  i3288.isStatic = !!i3289[3]
  i3288.layer = i3289[4]
  return i3288
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3290 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3291 = data
  request.r(i3291[0], i3291[1], 0, i3290, 'm_FirstSelected')
  i3290.m_sendNavigationEvents = !!i3291[2]
  i3290.m_DragThreshold = i3291[3]
  return i3290
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3292 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3293 = data
  i3292.m_HorizontalAxis = i3293[0]
  i3292.m_VerticalAxis = i3293[1]
  i3292.m_SubmitButton = i3293[2]
  i3292.m_CancelButton = i3293[3]
  i3292.m_InputActionsPerSecond = i3293[4]
  i3292.m_RepeatDelay = i3293[5]
  i3292.m_ForceModuleActive = !!i3293[6]
  i3292.m_SendPointerHoverToParent = !!i3293[7]
  return i3292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3295 = data
  i3294.pivot = new pc.Vec2( i3295[0], i3295[1] )
  i3294.anchorMin = new pc.Vec2( i3295[2], i3295[3] )
  i3294.anchorMax = new pc.Vec2( i3295[4], i3295[5] )
  i3294.sizeDelta = new pc.Vec2( i3295[6], i3295[7] )
  i3294.anchoredPosition3D = new pc.Vec3( i3295[8], i3295[9], i3295[10] )
  i3294.rotation = new pc.Quat(i3295[11], i3295[12], i3295[13], i3295[14])
  i3294.scale = new pc.Vec3( i3295[15], i3295[16], i3295[17] )
  return i3294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3297 = data
  i3296.planeDistance = i3297[0]
  i3296.referencePixelsPerUnit = i3297[1]
  i3296.isFallbackOverlay = !!i3297[2]
  i3296.renderMode = i3297[3]
  i3296.renderOrder = i3297[4]
  i3296.sortingLayerName = i3297[5]
  i3296.sortingOrder = i3297[6]
  i3296.scaleFactor = i3297[7]
  request.r(i3297[8], i3297[9], 0, i3296, 'worldCamera')
  i3296.overrideSorting = !!i3297[10]
  i3296.pixelPerfect = !!i3297[11]
  i3296.targetDisplay = i3297[12]
  i3296.overridePixelPerfect = !!i3297[13]
  i3296.enabled = !!i3297[14]
  return i3296
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3298 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3299 = data
  i3298.m_UiScaleMode = i3299[0]
  i3298.m_ReferencePixelsPerUnit = i3299[1]
  i3298.m_ScaleFactor = i3299[2]
  i3298.m_ReferenceResolution = new pc.Vec2( i3299[3], i3299[4] )
  i3298.m_ScreenMatchMode = i3299[5]
  i3298.m_MatchWidthOrHeight = i3299[6]
  i3298.m_PhysicalUnit = i3299[7]
  i3298.m_FallbackScreenDPI = i3299[8]
  i3298.m_DefaultSpriteDPI = i3299[9]
  i3298.m_DynamicPixelsPerUnit = i3299[10]
  i3298.m_PresetInfoIsWorld = !!i3299[11]
  return i3298
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3300 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3301 = data
  i3300.m_IgnoreReversedGraphics = !!i3301[0]
  i3300.m_BlockingObjects = i3301[1]
  i3300.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3301[2] )
  return i3300
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i3302 = root || request.c( 'LunaManager' )
  var i3303 = data
  var i3305 = i3303[0]
  var i3304 = []
  for(var i = 0; i < i3305.length; i += 2) {
  request.r(i3305[i + 0], i3305[i + 1], 2, i3304, '')
  }
  i3302.lstBtnInstall = i3304
  request.r(i3303[1], i3303[2], 0, i3302, 'StartCard')
  request.r(i3303[3], i3303[4], 0, i3302, 'EndCard')
  i3302.countPlay = i3303[5]
  i3302.countPlayFinal = i3303[6]
  i3302.countPlayMax = i3303[7]
  i3302.timeDropFinal = i3303[8]
  i3302.colorBG = new pc.Color(i3303[9], i3303[10], i3303[11], i3303[12])
  request.r(i3303[13], i3303[14], 0, i3302, 'texture2D')
  request.r(i3303[15], i3303[16], 0, i3302, 'rawImageBG')
  i3302.isHead = !!i3303[17]
  request.r(i3303[18], i3303[19], 0, i3302, 'textProgess')
  request.r(i3303[20], i3303[21], 0, i3302, 'imgProgess')
  request.r(i3303[22], i3303[23], 0, i3302, 'timeText')
  return i3302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3309 = data
  i3308.cullTransparentMesh = !!i3309[0]
  return i3308
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3310 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3311 = data
  request.r(i3311[0], i3311[1], 0, i3310, 'm_Texture')
  i3310.m_UVRect = UnityEngine.Rect.MinMaxRect(i3311[2], i3311[3], i3311[4], i3311[5])
  i3310.m_Maskable = !!i3311[6]
  request.r(i3311[7], i3311[8], 0, i3310, 'm_Material')
  i3310.m_Color = new pc.Color(i3311[9], i3311[10], i3311[11], i3311[12])
  i3310.m_RaycastTarget = !!i3311[13]
  i3310.m_RaycastPadding = new pc.Vec4( i3311[14], i3311[15], i3311[16], i3311[17] )
  return i3310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3313 = data
  request.r(i3313[0], i3313[1], 0, i3312, 'clip')
  request.r(i3313[2], i3313[3], 0, i3312, 'outputAudioMixerGroup')
  i3312.playOnAwake = !!i3313[4]
  i3312.loop = !!i3313[5]
  i3312.time = i3313[6]
  i3312.volume = i3313[7]
  i3312.pitch = i3313[8]
  i3312.enabled = !!i3313[9]
  return i3312
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3314 = root || request.c( 'UnityEngine.UI.Image' )
  var i3315 = data
  request.r(i3315[0], i3315[1], 0, i3314, 'm_Sprite')
  i3314.m_Type = i3315[2]
  i3314.m_PreserveAspect = !!i3315[3]
  i3314.m_FillCenter = !!i3315[4]
  i3314.m_FillMethod = i3315[5]
  i3314.m_FillAmount = i3315[6]
  i3314.m_FillClockwise = !!i3315[7]
  i3314.m_FillOrigin = i3315[8]
  i3314.m_UseSpriteMesh = !!i3315[9]
  i3314.m_PixelsPerUnitMultiplier = i3315[10]
  i3314.m_Maskable = !!i3315[11]
  request.r(i3315[12], i3315[13], 0, i3314, 'm_Material')
  i3314.m_Color = new pc.Color(i3315[14], i3315[15], i3315[16], i3315[17])
  i3314.m_RaycastTarget = !!i3315[18]
  i3314.m_RaycastPadding = new pc.Vec4( i3315[19], i3315[20], i3315[21], i3315[22] )
  return i3314
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i3316 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i3317 = data
  request.r(i3317[0], i3317[1], 0, i3316, 'skeletonDataAsset')
  request.r(i3317[2], i3317[3], 0, i3316, 'additiveMaterial')
  request.r(i3317[4], i3317[5], 0, i3316, 'multiplyMaterial')
  request.r(i3317[6], i3317[7], 0, i3316, 'screenMaterial')
  i3316.initialSkinName = i3317[8]
  i3316.initialFlipX = !!i3317[9]
  i3316.initialFlipY = !!i3317[10]
  i3316.startingAnimation = i3317[11]
  i3316.startingLoop = !!i3317[12]
  i3316.timeScale = i3317[13]
  i3316.freeze = !!i3317[14]
  i3316.layoutScaleMode = i3317[15]
  i3316.updateWhenInvisible = i3317[16]
  i3316.allowMultipleCanvasRenderers = !!i3317[17]
  var i3319 = i3317[18]
  var i3318 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i3319.length; i += 2) {
  request.r(i3319[i + 0], i3319[i + 1], 1, i3318, '')
  }
  i3316.canvasRenderers = i3318
  i3316.enableSeparatorSlots = !!i3317[19]
  i3316.updateSeparatorPartLocation = !!i3317[20]
  i3316.updateSeparatorPartScale = !!i3317[21]
  i3316.disableMeshAssignmentOnOverride = !!i3317[22]
  i3316.referenceSize = new pc.Vec2( i3317[23], i3317[24] )
  i3316.referenceScale = i3317[25]
  i3316.rectTransformSize = new pc.Vec2( i3317[26], i3317[27] )
  i3316.editReferenceRect = !!i3317[28]
  var i3321 = i3317[29]
  var i3320 = []
  for(var i = 0; i < i3321.length; i += 1) {
    i3320.push( i3321[i + 0] );
  }
  i3316.separatorSlotNames = i3320
  var i3323 = i3317[30]
  var i3322 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3323.length; i += 2) {
  request.r(i3323[i + 0], i3323[i + 1], 1, i3322, '')
  }
  i3316.separatorParts = i3322
  i3316.meshGenerator = request.d('Spine.Unity.MeshGenerator', i3317[31], i3316.meshGenerator)
  i3316.updateTiming = i3317[32]
  i3316.unscaledTime = !!i3317[33]
  i3316.m_Maskable = !!i3317[34]
  request.r(i3317[35], i3317[36], 0, i3316, 'm_Material')
  i3316.m_Color = new pc.Color(i3317[37], i3317[38], i3317[39], i3317[40])
  i3316.m_RaycastTarget = !!i3317[41]
  i3316.m_RaycastPadding = new pc.Vec4( i3317[42], i3317[43], i3317[44], i3317[45] )
  return i3316
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i3330 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i3331 = data
  i3330.settings = request.d('Spine.Unity.MeshGenerator+Settings', i3331[0], i3330.settings)
  return i3330
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i3332 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i3333 = data
  i3332.useClipping = !!i3333[0]
  i3332.zSpacing = i3333[1]
  i3332.pmaVertexColors = !!i3333[2]
  i3332.tintBlack = !!i3333[3]
  i3332.canvasGroupTintBlack = !!i3333[4]
  i3332.calculateTangents = !!i3333[5]
  i3332.addNormals = !!i3333[6]
  i3332.immutableTriangles = !!i3333[7]
  return i3332
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i3334 = root || request.c( 'ClickItem' )
  var i3335 = data
  var i3337 = i3335[0]
  var i3336 = []
  for(var i = 0; i < i3337.length; i += 2) {
  request.r(i3337[i + 0], i3337[i + 1], 2, i3336, '')
  }
  i3334.steps = i3336
  i3334.currentStep = i3335[1]
  i3334.isProcess = !!i3335[2]
  return i3334
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3340 = root || request.c( 'UnityEngine.UI.Button' )
  var i3341 = data
  i3340.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3341[0], i3340.m_OnClick)
  i3340.m_Navigation = request.d('UnityEngine.UI.Navigation', i3341[1], i3340.m_Navigation)
  i3340.m_Transition = i3341[2]
  i3340.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3341[3], i3340.m_Colors)
  i3340.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3341[4], i3340.m_SpriteState)
  i3340.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3341[5], i3340.m_AnimationTriggers)
  i3340.m_Interactable = !!i3341[6]
  request.r(i3341[7], i3341[8], 0, i3340, 'm_TargetGraphic')
  return i3340
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3342 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3343 = data
  i3342.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3343[0], i3342.m_PersistentCalls)
  return i3342
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3344 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3345 = data
  var i3347 = i3345[0]
  var i3346 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3347.length; i += 1) {
    i3346.add(request.d('UnityEngine.Events.PersistentCall', i3347[i + 0]));
  }
  i3344.m_Calls = i3346
  return i3344
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3350 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3351 = data
  request.r(i3351[0], i3351[1], 0, i3350, 'm_Target')
  i3350.m_TargetAssemblyTypeName = i3351[2]
  i3350.m_MethodName = i3351[3]
  i3350.m_Mode = i3351[4]
  i3350.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3351[5], i3350.m_Arguments)
  i3350.m_CallState = i3351[6]
  return i3350
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3352 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3353 = data
  request.r(i3353[0], i3353[1], 0, i3352, 'm_ObjectArgument')
  i3352.m_ObjectArgumentAssemblyTypeName = i3353[2]
  i3352.m_IntArgument = i3353[3]
  i3352.m_FloatArgument = i3353[4]
  i3352.m_StringArgument = i3353[5]
  i3352.m_BoolArgument = !!i3353[6]
  return i3352
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3354 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3355 = data
  i3354.m_Mode = i3355[0]
  i3354.m_WrapAround = !!i3355[1]
  request.r(i3355[2], i3355[3], 0, i3354, 'm_SelectOnUp')
  request.r(i3355[4], i3355[5], 0, i3354, 'm_SelectOnDown')
  request.r(i3355[6], i3355[7], 0, i3354, 'm_SelectOnLeft')
  request.r(i3355[8], i3355[9], 0, i3354, 'm_SelectOnRight')
  return i3354
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3356 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3357 = data
  i3356.m_NormalColor = new pc.Color(i3357[0], i3357[1], i3357[2], i3357[3])
  i3356.m_HighlightedColor = new pc.Color(i3357[4], i3357[5], i3357[6], i3357[7])
  i3356.m_PressedColor = new pc.Color(i3357[8], i3357[9], i3357[10], i3357[11])
  i3356.m_SelectedColor = new pc.Color(i3357[12], i3357[13], i3357[14], i3357[15])
  i3356.m_DisabledColor = new pc.Color(i3357[16], i3357[17], i3357[18], i3357[19])
  i3356.m_ColorMultiplier = i3357[20]
  i3356.m_FadeDuration = i3357[21]
  return i3356
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3358 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3359 = data
  request.r(i3359[0], i3359[1], 0, i3358, 'm_HighlightedSprite')
  request.r(i3359[2], i3359[3], 0, i3358, 'm_PressedSprite')
  request.r(i3359[4], i3359[5], 0, i3358, 'm_SelectedSprite')
  request.r(i3359[6], i3359[7], 0, i3358, 'm_DisabledSprite')
  return i3358
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3360 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3361 = data
  i3360.m_NormalTrigger = i3361[0]
  i3360.m_HighlightedTrigger = i3361[1]
  i3360.m_PressedTrigger = i3361[2]
  i3360.m_SelectedTrigger = i3361[3]
  i3360.m_DisabledTrigger = i3361[4]
  return i3360
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3362 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3363 = data
  i3362.m_hasFontAssetChanged = !!i3363[0]
  request.r(i3363[1], i3363[2], 0, i3362, 'm_baseMaterial')
  i3362.m_maskOffset = new pc.Vec4( i3363[3], i3363[4], i3363[5], i3363[6] )
  i3362.m_text = i3363[7]
  i3362.m_isRightToLeft = !!i3363[8]
  request.r(i3363[9], i3363[10], 0, i3362, 'm_fontAsset')
  request.r(i3363[11], i3363[12], 0, i3362, 'm_sharedMaterial')
  var i3365 = i3363[13]
  var i3364 = []
  for(var i = 0; i < i3365.length; i += 2) {
  request.r(i3365[i + 0], i3365[i + 1], 2, i3364, '')
  }
  i3362.m_fontSharedMaterials = i3364
  request.r(i3363[14], i3363[15], 0, i3362, 'm_fontMaterial')
  var i3367 = i3363[16]
  var i3366 = []
  for(var i = 0; i < i3367.length; i += 2) {
  request.r(i3367[i + 0], i3367[i + 1], 2, i3366, '')
  }
  i3362.m_fontMaterials = i3366
  i3362.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3363[17], i3363[18], i3363[19], i3363[20])
  i3362.m_fontColor = new pc.Color(i3363[21], i3363[22], i3363[23], i3363[24])
  i3362.m_enableVertexGradient = !!i3363[25]
  i3362.m_colorMode = i3363[26]
  i3362.m_fontColorGradient = request.d('TMPro.VertexGradient', i3363[27], i3362.m_fontColorGradient)
  request.r(i3363[28], i3363[29], 0, i3362, 'm_fontColorGradientPreset')
  request.r(i3363[30], i3363[31], 0, i3362, 'm_spriteAsset')
  i3362.m_tintAllSprites = !!i3363[32]
  request.r(i3363[33], i3363[34], 0, i3362, 'm_StyleSheet')
  i3362.m_TextStyleHashCode = i3363[35]
  i3362.m_overrideHtmlColors = !!i3363[36]
  i3362.m_faceColor = UnityEngine.Color32.ConstructColor(i3363[37], i3363[38], i3363[39], i3363[40])
  i3362.m_fontSize = i3363[41]
  i3362.m_fontSizeBase = i3363[42]
  i3362.m_fontWeight = i3363[43]
  i3362.m_enableAutoSizing = !!i3363[44]
  i3362.m_fontSizeMin = i3363[45]
  i3362.m_fontSizeMax = i3363[46]
  i3362.m_fontStyle = i3363[47]
  i3362.m_HorizontalAlignment = i3363[48]
  i3362.m_VerticalAlignment = i3363[49]
  i3362.m_textAlignment = i3363[50]
  i3362.m_characterSpacing = i3363[51]
  i3362.m_wordSpacing = i3363[52]
  i3362.m_lineSpacing = i3363[53]
  i3362.m_lineSpacingMax = i3363[54]
  i3362.m_paragraphSpacing = i3363[55]
  i3362.m_charWidthMaxAdj = i3363[56]
  i3362.m_enableWordWrapping = !!i3363[57]
  i3362.m_wordWrappingRatios = i3363[58]
  i3362.m_overflowMode = i3363[59]
  request.r(i3363[60], i3363[61], 0, i3362, 'm_linkedTextComponent')
  request.r(i3363[62], i3363[63], 0, i3362, 'parentLinkedComponent')
  i3362.m_enableKerning = !!i3363[64]
  i3362.m_enableExtraPadding = !!i3363[65]
  i3362.checkPaddingRequired = !!i3363[66]
  i3362.m_isRichText = !!i3363[67]
  i3362.m_parseCtrlCharacters = !!i3363[68]
  i3362.m_isOrthographic = !!i3363[69]
  i3362.m_isCullingEnabled = !!i3363[70]
  i3362.m_horizontalMapping = i3363[71]
  i3362.m_verticalMapping = i3363[72]
  i3362.m_uvLineOffset = i3363[73]
  i3362.m_geometrySortingOrder = i3363[74]
  i3362.m_IsTextObjectScaleStatic = !!i3363[75]
  i3362.m_VertexBufferAutoSizeReduction = !!i3363[76]
  i3362.m_useMaxVisibleDescender = !!i3363[77]
  i3362.m_pageToDisplay = i3363[78]
  i3362.m_margin = new pc.Vec4( i3363[79], i3363[80], i3363[81], i3363[82] )
  i3362.m_isUsingLegacyAnimationComponent = !!i3363[83]
  i3362.m_isVolumetricText = !!i3363[84]
  i3362.m_Maskable = !!i3363[85]
  request.r(i3363[86], i3363[87], 0, i3362, 'm_Material')
  i3362.m_Color = new pc.Color(i3363[88], i3363[89], i3363[90], i3363[91])
  i3362.m_RaycastTarget = !!i3363[92]
  i3362.m_RaycastPadding = new pc.Vec4( i3363[93], i3363[94], i3363[95], i3363[96] )
  return i3362
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3370 = root || request.c( 'TMPro.VertexGradient' )
  var i3371 = data
  i3370.topLeft = new pc.Color(i3371[0], i3371[1], i3371[2], i3371[3])
  i3370.topRight = new pc.Color(i3371[4], i3371[5], i3371[6], i3371[7])
  i3370.bottomLeft = new pc.Color(i3371[8], i3371[9], i3371[10], i3371[11])
  i3370.bottomRight = new pc.Color(i3371[12], i3371[13], i3371[14], i3371[15])
  return i3370
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3372 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3373 = data
  i3372.m_ShowMaskGraphic = !!i3373[0]
  return i3372
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3374 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3375 = data
  i3374.targetIsSelf = !!i3375[0]
  request.r(i3375[1], i3375[2], 0, i3374, 'targetGO')
  i3374.tweenTargetIsTargetGO = !!i3375[3]
  i3374.delay = i3375[4]
  i3374.duration = i3375[5]
  i3374.easeType = i3375[6]
  i3374.easeCurve = new pc.AnimationCurve( { keys_flow: i3375[7] } )
  i3374.loopType = i3375[8]
  i3374.loops = i3375[9]
  i3374.id = i3375[10]
  i3374.isRelative = !!i3375[11]
  i3374.isFrom = !!i3375[12]
  i3374.isIndependentUpdate = !!i3375[13]
  i3374.autoKill = !!i3375[14]
  i3374.autoGenerate = !!i3375[15]
  i3374.isActive = !!i3375[16]
  i3374.isValid = !!i3375[17]
  request.r(i3375[18], i3375[19], 0, i3374, 'target')
  i3374.animationType = i3375[20]
  i3374.targetType = i3375[21]
  i3374.forcedTargetType = i3375[22]
  i3374.autoPlay = !!i3375[23]
  i3374.useTargetAsV3 = !!i3375[24]
  i3374.endValueFloat = i3375[25]
  i3374.endValueV3 = new pc.Vec3( i3375[26], i3375[27], i3375[28] )
  i3374.endValueV2 = new pc.Vec2( i3375[29], i3375[30] )
  i3374.endValueColor = new pc.Color(i3375[31], i3375[32], i3375[33], i3375[34])
  i3374.endValueString = i3375[35]
  i3374.endValueRect = UnityEngine.Rect.MinMaxRect(i3375[36], i3375[37], i3375[38], i3375[39])
  request.r(i3375[40], i3375[41], 0, i3374, 'endValueTransform')
  i3374.optionalBool0 = !!i3375[42]
  i3374.optionalBool1 = !!i3375[43]
  i3374.optionalFloat0 = i3375[44]
  i3374.optionalInt0 = i3375[45]
  i3374.optionalRotationMode = i3375[46]
  i3374.optionalScrambleMode = i3375[47]
  i3374.optionalShakeRandomnessMode = i3375[48]
  i3374.optionalString = i3375[49]
  i3374.updateType = i3375[50]
  i3374.isSpeedBased = !!i3375[51]
  i3374.hasOnStart = !!i3375[52]
  i3374.hasOnPlay = !!i3375[53]
  i3374.hasOnUpdate = !!i3375[54]
  i3374.hasOnStepComplete = !!i3375[55]
  i3374.hasOnComplete = !!i3375[56]
  i3374.hasOnTweenCreated = !!i3375[57]
  i3374.hasOnRewind = !!i3375[58]
  i3374.onStart = request.d('UnityEngine.Events.UnityEvent', i3375[59], i3374.onStart)
  i3374.onPlay = request.d('UnityEngine.Events.UnityEvent', i3375[60], i3374.onPlay)
  i3374.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3375[61], i3374.onUpdate)
  i3374.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3375[62], i3374.onStepComplete)
  i3374.onComplete = request.d('UnityEngine.Events.UnityEvent', i3375[63], i3374.onComplete)
  i3374.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3375[64], i3374.onTweenCreated)
  i3374.onRewind = request.d('UnityEngine.Events.UnityEvent', i3375[65], i3374.onRewind)
  return i3374
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3376 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3377 = data
  i3376.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3377[0], i3376.m_PersistentCalls)
  return i3376
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3378 = root || request.c( 'AudioController' )
  var i3379 = data
  request.r(i3379[0], i3379[1], 0, i3378, 'bgmSource')
  request.r(i3379[2], i3379[3], 0, i3378, 'sfxSource')
  var i3381 = i3379[4]
  var i3380 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i3381.length; i += 1) {
    i3380.add(request.d('AudioEntry', i3381[i + 0]));
  }
  i3378.audioEntries = i3380
  return i3378
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i3384 = root || request.c( 'AudioEntry' )
  var i3385 = data
  i3384.key = i3385[0]
  request.r(i3385[1], i3385[2], 0, i3384, 'clip')
  i3384.volume = i3385[3]
  return i3384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3387 = data
  i3386.ambientIntensity = i3387[0]
  i3386.reflectionIntensity = i3387[1]
  i3386.ambientMode = i3387[2]
  i3386.ambientLight = new pc.Color(i3387[3], i3387[4], i3387[5], i3387[6])
  i3386.ambientSkyColor = new pc.Color(i3387[7], i3387[8], i3387[9], i3387[10])
  i3386.ambientGroundColor = new pc.Color(i3387[11], i3387[12], i3387[13], i3387[14])
  i3386.ambientEquatorColor = new pc.Color(i3387[15], i3387[16], i3387[17], i3387[18])
  i3386.fogColor = new pc.Color(i3387[19], i3387[20], i3387[21], i3387[22])
  i3386.fogEndDistance = i3387[23]
  i3386.fogStartDistance = i3387[24]
  i3386.fogDensity = i3387[25]
  i3386.fog = !!i3387[26]
  request.r(i3387[27], i3387[28], 0, i3386, 'skybox')
  i3386.fogMode = i3387[29]
  var i3389 = i3387[30]
  var i3388 = []
  for(var i = 0; i < i3389.length; i += 1) {
    i3388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3389[i + 0]) );
  }
  i3386.lightmaps = i3388
  i3386.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3387[31], i3386.lightProbes)
  i3386.lightmapsMode = i3387[32]
  i3386.mixedBakeMode = i3387[33]
  i3386.environmentLightingMode = i3387[34]
  i3386.ambientProbe = new pc.SphericalHarmonicsL2(i3387[35])
  i3386.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3387[36])
  i3386.useReferenceAmbientProbe = !!i3387[37]
  request.r(i3387[38], i3387[39], 0, i3386, 'customReflection')
  request.r(i3387[40], i3387[41], 0, i3386, 'defaultReflection')
  i3386.defaultReflectionMode = i3387[42]
  i3386.defaultReflectionResolution = i3387[43]
  i3386.sunLightObjectId = i3387[44]
  i3386.pixelLightCount = i3387[45]
  i3386.defaultReflectionHDR = !!i3387[46]
  i3386.hasLightDataAsset = !!i3387[47]
  i3386.hasManualGenerate = !!i3387[48]
  return i3386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3393 = data
  request.r(i3393[0], i3393[1], 0, i3392, 'lightmapColor')
  request.r(i3393[2], i3393[3], 0, i3392, 'lightmapDirection')
  return i3392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3394 = root || new UnityEngine.LightProbes()
  var i3395 = data
  return i3394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3403 = data
  var i3405 = i3403[0]
  var i3404 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3405.length; i += 1) {
    i3404.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3405[i + 0]));
  }
  i3402.ShaderCompilationErrors = i3404
  i3402.name = i3403[1]
  i3402.guid = i3403[2]
  var i3407 = i3403[3]
  var i3406 = []
  for(var i = 0; i < i3407.length; i += 1) {
    i3406.push( i3407[i + 0] );
  }
  i3402.shaderDefinedKeywords = i3406
  var i3409 = i3403[4]
  var i3408 = []
  for(var i = 0; i < i3409.length; i += 1) {
    i3408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3409[i + 0]) );
  }
  i3402.passes = i3408
  var i3411 = i3403[5]
  var i3410 = []
  for(var i = 0; i < i3411.length; i += 1) {
    i3410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3411[i + 0]) );
  }
  i3402.usePasses = i3410
  var i3413 = i3403[6]
  var i3412 = []
  for(var i = 0; i < i3413.length; i += 1) {
    i3412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3413[i + 0]) );
  }
  i3402.defaultParameterValues = i3412
  request.r(i3403[7], i3403[8], 0, i3402, 'unityFallbackShader')
  i3402.readDepth = !!i3403[9]
  i3402.isCreatedByShaderGraph = !!i3403[10]
  i3402.disableBatching = !!i3403[11]
  i3402.compiled = !!i3403[12]
  return i3402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3417 = data
  i3416.shaderName = i3417[0]
  i3416.errorMessage = i3417[1]
  return i3416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3420 = root || new pc.UnityShaderPass()
  var i3421 = data
  i3420.id = i3421[0]
  i3420.subShaderIndex = i3421[1]
  i3420.name = i3421[2]
  i3420.passType = i3421[3]
  i3420.grabPassTextureName = i3421[4]
  i3420.usePass = !!i3421[5]
  i3420.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3421[6], i3420.zTest)
  i3420.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3421[7], i3420.zWrite)
  i3420.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3421[8], i3420.culling)
  i3420.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3421[9], i3420.blending)
  i3420.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3421[10], i3420.alphaBlending)
  i3420.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3421[11], i3420.colorWriteMask)
  i3420.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3421[12], i3420.offsetUnits)
  i3420.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3421[13], i3420.offsetFactor)
  i3420.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3421[14], i3420.stencilRef)
  i3420.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3421[15], i3420.stencilReadMask)
  i3420.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3421[16], i3420.stencilWriteMask)
  i3420.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3421[17], i3420.stencilOp)
  i3420.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3421[18], i3420.stencilOpFront)
  i3420.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3421[19], i3420.stencilOpBack)
  var i3423 = i3421[20]
  var i3422 = []
  for(var i = 0; i < i3423.length; i += 1) {
    i3422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3423[i + 0]) );
  }
  i3420.tags = i3422
  var i3425 = i3421[21]
  var i3424 = []
  for(var i = 0; i < i3425.length; i += 1) {
    i3424.push( i3425[i + 0] );
  }
  i3420.passDefinedKeywords = i3424
  var i3427 = i3421[22]
  var i3426 = []
  for(var i = 0; i < i3427.length; i += 1) {
    i3426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3427[i + 0]) );
  }
  i3420.passDefinedKeywordGroups = i3426
  var i3429 = i3421[23]
  var i3428 = []
  for(var i = 0; i < i3429.length; i += 1) {
    i3428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3429[i + 0]) );
  }
  i3420.variants = i3428
  var i3431 = i3421[24]
  var i3430 = []
  for(var i = 0; i < i3431.length; i += 1) {
    i3430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3431[i + 0]) );
  }
  i3420.excludedVariants = i3430
  i3420.hasDepthReader = !!i3421[25]
  return i3420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3433 = data
  i3432.val = i3433[0]
  i3432.name = i3433[1]
  return i3432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3435 = data
  i3434.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3435[0], i3434.src)
  i3434.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3435[1], i3434.dst)
  i3434.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3435[2], i3434.op)
  return i3434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3437 = data
  i3436.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3437[0], i3436.pass)
  i3436.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3437[1], i3436.fail)
  i3436.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3437[2], i3436.zFail)
  i3436.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3437[3], i3436.comp)
  return i3436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3441 = data
  i3440.name = i3441[0]
  i3440.value = i3441[1]
  return i3440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3445 = data
  var i3447 = i3445[0]
  var i3446 = []
  for(var i = 0; i < i3447.length; i += 1) {
    i3446.push( i3447[i + 0] );
  }
  i3444.keywords = i3446
  i3444.hasDiscard = !!i3445[1]
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3451 = data
  i3450.passId = i3451[0]
  i3450.subShaderIndex = i3451[1]
  var i3453 = i3451[2]
  var i3452 = []
  for(var i = 0; i < i3453.length; i += 1) {
    i3452.push( i3453[i + 0] );
  }
  i3450.keywords = i3452
  i3450.vertexProgram = i3451[3]
  i3450.fragmentProgram = i3451[4]
  i3450.exportedForWebGl2 = !!i3451[5]
  i3450.readDepth = !!i3451[6]
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3457 = data
  request.r(i3457[0], i3457[1], 0, i3456, 'shader')
  i3456.pass = i3457[2]
  return i3456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3461 = data
  i3460.name = i3461[0]
  i3460.type = i3461[1]
  i3460.value = new pc.Vec4( i3461[2], i3461[3], i3461[4], i3461[5] )
  i3460.textureValue = i3461[6]
  i3460.shaderPropertyFlag = i3461[7]
  return i3460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3463 = data
  i3462.name = i3463[0]
  request.r(i3463[1], i3463[2], 0, i3462, 'texture')
  i3462.aabb = i3463[3]
  i3462.vertices = i3463[4]
  i3462.triangles = i3463[5]
  i3462.textureRect = UnityEngine.Rect.MinMaxRect(i3463[6], i3463[7], i3463[8], i3463[9])
  i3462.packedRect = UnityEngine.Rect.MinMaxRect(i3463[10], i3463[11], i3463[12], i3463[13])
  i3462.border = new pc.Vec4( i3463[14], i3463[15], i3463[16], i3463[17] )
  i3462.transparency = i3463[18]
  i3462.bounds = i3463[19]
  i3462.pixelsPerUnit = i3463[20]
  i3462.textureWidth = i3463[21]
  i3462.textureHeight = i3463[22]
  i3462.nativeSize = new pc.Vec2( i3463[23], i3463[24] )
  i3462.pivot = new pc.Vec2( i3463[25], i3463[26] )
  i3462.textureRectOffset = new pc.Vec2( i3463[27], i3463[28] )
  return i3462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3465 = data
  i3464.name = i3465[0]
  return i3464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3467 = data
  i3466.name = i3467[0]
  i3466.ascent = i3467[1]
  i3466.originalLineHeight = i3467[2]
  i3466.fontSize = i3467[3]
  var i3469 = i3467[4]
  var i3468 = []
  for(var i = 0; i < i3469.length; i += 1) {
    i3468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3469[i + 0]) );
  }
  i3466.characterInfo = i3468
  request.r(i3467[5], i3467[6], 0, i3466, 'texture')
  i3466.originalFontSize = i3467[7]
  return i3466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3473 = data
  i3472.index = i3473[0]
  i3472.advance = i3473[1]
  i3472.bearing = i3473[2]
  i3472.glyphWidth = i3473[3]
  i3472.glyphHeight = i3473[4]
  i3472.minX = i3473[5]
  i3472.maxX = i3473[6]
  i3472.minY = i3473[7]
  i3472.maxY = i3473[8]
  i3472.uvBottomLeftX = i3473[9]
  i3472.uvBottomLeftY = i3473[10]
  i3472.uvBottomRightX = i3473[11]
  i3472.uvBottomRightY = i3473[12]
  i3472.uvTopLeftX = i3473[13]
  i3472.uvTopLeftY = i3473[14]
  i3472.uvTopRightX = i3473[15]
  i3472.uvTopRightY = i3473[16]
  return i3472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3475 = data
  i3474.name = i3475[0]
  i3474.bytes64 = i3475[1]
  i3474.data = i3475[2]
  return i3474
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3476 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3477 = data
  var i3479 = i3477[0]
  var i3478 = []
  for(var i = 0; i < i3479.length; i += 2) {
  request.r(i3479[i + 0], i3479[i + 1], 2, i3478, '')
  }
  i3476.atlasAssets = i3478
  i3476.scale = i3477[1]
  request.r(i3477[2], i3477[3], 0, i3476, 'skeletonJSON')
  i3476.isUpgradingBlendModeMaterials = !!i3477[4]
  i3476.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3477[5], i3476.blendModeMaterials)
  var i3481 = i3477[6]
  var i3480 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3481.length; i += 2) {
  request.r(i3481[i + 0], i3481[i + 1], 1, i3480, '')
  }
  i3476.skeletonDataModifiers = i3480
  var i3483 = i3477[7]
  var i3482 = []
  for(var i = 0; i < i3483.length; i += 1) {
    i3482.push( i3483[i + 0] );
  }
  i3476.fromAnimation = i3482
  var i3485 = i3477[8]
  var i3484 = []
  for(var i = 0; i < i3485.length; i += 1) {
    i3484.push( i3485[i + 0] );
  }
  i3476.toAnimation = i3484
  i3476.duration = i3477[9]
  i3476.defaultMix = i3477[10]
  request.r(i3477[11], i3477[12], 0, i3476, 'controller')
  return i3476
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3488 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3489 = data
  i3488.applyAdditiveMaterial = !!i3489[0]
  var i3491 = i3489[1]
  var i3490 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3491.length; i += 1) {
    i3490.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3491[i + 0]));
  }
  i3488.additiveMaterials = i3490
  var i3493 = i3489[2]
  var i3492 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3493.length; i += 1) {
    i3492.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3493[i + 0]));
  }
  i3488.multiplyMaterials = i3492
  var i3495 = i3489[3]
  var i3494 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3495.length; i += 1) {
    i3494.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3495[i + 0]));
  }
  i3488.screenMaterials = i3494
  i3488.requiresBlendModeMaterials = !!i3489[4]
  return i3488
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3498 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3499 = data
  i3498.pageName = i3499[0]
  request.r(i3499[1], i3499[2], 0, i3498, 'material')
  return i3498
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3502 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3503 = data
  request.r(i3503[0], i3503[1], 0, i3502, 'atlasFile')
  var i3505 = i3503[2]
  var i3504 = []
  for(var i = 0; i < i3505.length; i += 2) {
  request.r(i3505[i + 0], i3505[i + 1], 2, i3504, '')
  }
  i3502.materials = i3504
  i3502.textureLoadingMode = i3503[3]
  request.r(i3503[4], i3503[5], 0, i3502, 'onDemandTextureLoader')
  return i3502
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3506 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3507 = data
  request.r(i3507[0], i3507[1], 0, i3506, 'atlas')
  i3506.normalStyle = i3507[2]
  i3506.normalSpacingOffset = i3507[3]
  i3506.boldStyle = i3507[4]
  i3506.boldSpacing = i3507[5]
  i3506.italicStyle = i3507[6]
  i3506.tabSize = i3507[7]
  i3506.hashCode = i3507[8]
  request.r(i3507[9], i3507[10], 0, i3506, 'material')
  i3506.materialHashCode = i3507[11]
  i3506.m_Version = i3507[12]
  i3506.m_SourceFontFileGUID = i3507[13]
  request.r(i3507[14], i3507[15], 0, i3506, 'm_SourceFontFile_EditorRef')
  request.r(i3507[16], i3507[17], 0, i3506, 'm_SourceFontFile')
  i3506.m_AtlasPopulationMode = i3507[18]
  i3506.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3507[19], i3506.m_FaceInfo)
  var i3509 = i3507[20]
  var i3508 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3509.length; i += 1) {
    i3508.add(request.d('UnityEngine.TextCore.Glyph', i3509[i + 0]));
  }
  i3506.m_GlyphTable = i3508
  var i3511 = i3507[21]
  var i3510 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3511.length; i += 1) {
    i3510.add(request.d('TMPro.TMP_Character', i3511[i + 0]));
  }
  i3506.m_CharacterTable = i3510
  var i3513 = i3507[22]
  var i3512 = []
  for(var i = 0; i < i3513.length; i += 2) {
  request.r(i3513[i + 0], i3513[i + 1], 2, i3512, '')
  }
  i3506.m_AtlasTextures = i3512
  i3506.m_AtlasTextureIndex = i3507[23]
  i3506.m_IsMultiAtlasTexturesEnabled = !!i3507[24]
  i3506.m_ClearDynamicDataOnBuild = !!i3507[25]
  var i3515 = i3507[26]
  var i3514 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3515.length; i += 1) {
    i3514.add(request.d('UnityEngine.TextCore.GlyphRect', i3515[i + 0]));
  }
  i3506.m_UsedGlyphRects = i3514
  var i3517 = i3507[27]
  var i3516 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3517.length; i += 1) {
    i3516.add(request.d('UnityEngine.TextCore.GlyphRect', i3517[i + 0]));
  }
  i3506.m_FreeGlyphRects = i3516
  i3506.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3507[28], i3506.m_fontInfo)
  i3506.m_AtlasWidth = i3507[29]
  i3506.m_AtlasHeight = i3507[30]
  i3506.m_AtlasPadding = i3507[31]
  i3506.m_AtlasRenderMode = i3507[32]
  var i3519 = i3507[33]
  var i3518 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3519.length; i += 1) {
    i3518.add(request.d('TMPro.TMP_Glyph', i3519[i + 0]));
  }
  i3506.m_glyphInfoList = i3518
  i3506.m_KerningTable = request.d('TMPro.KerningTable', i3507[34], i3506.m_KerningTable)
  i3506.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3507[35], i3506.m_FontFeatureTable)
  var i3521 = i3507[36]
  var i3520 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3521.length; i += 2) {
  request.r(i3521[i + 0], i3521[i + 1], 1, i3520, '')
  }
  i3506.fallbackFontAssets = i3520
  var i3523 = i3507[37]
  var i3522 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3523.length; i += 2) {
  request.r(i3523[i + 0], i3523[i + 1], 1, i3522, '')
  }
  i3506.m_FallbackFontAssetTable = i3522
  i3506.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3507[38], i3506.m_CreationSettings)
  var i3525 = i3507[39]
  var i3524 = []
  for(var i = 0; i < i3525.length; i += 1) {
    i3524.push( request.d('TMPro.TMP_FontWeightPair', i3525[i + 0]) );
  }
  i3506.m_FontWeightTable = i3524
  var i3527 = i3507[40]
  var i3526 = []
  for(var i = 0; i < i3527.length; i += 1) {
    i3526.push( request.d('TMPro.TMP_FontWeightPair', i3527[i + 0]) );
  }
  i3506.fontWeights = i3526
  return i3506
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3528 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3529 = data
  i3528.m_FaceIndex = i3529[0]
  i3528.m_FamilyName = i3529[1]
  i3528.m_StyleName = i3529[2]
  i3528.m_PointSize = i3529[3]
  i3528.m_Scale = i3529[4]
  i3528.m_UnitsPerEM = i3529[5]
  i3528.m_LineHeight = i3529[6]
  i3528.m_AscentLine = i3529[7]
  i3528.m_CapLine = i3529[8]
  i3528.m_MeanLine = i3529[9]
  i3528.m_Baseline = i3529[10]
  i3528.m_DescentLine = i3529[11]
  i3528.m_SuperscriptOffset = i3529[12]
  i3528.m_SuperscriptSize = i3529[13]
  i3528.m_SubscriptOffset = i3529[14]
  i3528.m_SubscriptSize = i3529[15]
  i3528.m_UnderlineOffset = i3529[16]
  i3528.m_UnderlineThickness = i3529[17]
  i3528.m_StrikethroughOffset = i3529[18]
  i3528.m_StrikethroughThickness = i3529[19]
  i3528.m_TabWidth = i3529[20]
  return i3528
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3532 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3533 = data
  i3532.m_Index = i3533[0]
  i3532.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3533[1], i3532.m_Metrics)
  i3532.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3533[2], i3532.m_GlyphRect)
  i3532.m_Scale = i3533[3]
  i3532.m_AtlasIndex = i3533[4]
  i3532.m_ClassDefinitionType = i3533[5]
  return i3532
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3534 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3535 = data
  i3534.m_Width = i3535[0]
  i3534.m_Height = i3535[1]
  i3534.m_HorizontalBearingX = i3535[2]
  i3534.m_HorizontalBearingY = i3535[3]
  i3534.m_HorizontalAdvance = i3535[4]
  return i3534
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3536 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3537 = data
  i3536.m_X = i3537[0]
  i3536.m_Y = i3537[1]
  i3536.m_Width = i3537[2]
  i3536.m_Height = i3537[3]
  return i3536
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3540 = root || request.c( 'TMPro.TMP_Character' )
  var i3541 = data
  i3540.m_ElementType = i3541[0]
  i3540.m_Unicode = i3541[1]
  i3540.m_GlyphIndex = i3541[2]
  i3540.m_Scale = i3541[3]
  return i3540
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3546 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3547 = data
  i3546.Name = i3547[0]
  i3546.PointSize = i3547[1]
  i3546.Scale = i3547[2]
  i3546.CharacterCount = i3547[3]
  i3546.LineHeight = i3547[4]
  i3546.Baseline = i3547[5]
  i3546.Ascender = i3547[6]
  i3546.CapHeight = i3547[7]
  i3546.Descender = i3547[8]
  i3546.CenterLine = i3547[9]
  i3546.SuperscriptOffset = i3547[10]
  i3546.SubscriptOffset = i3547[11]
  i3546.SubSize = i3547[12]
  i3546.Underline = i3547[13]
  i3546.UnderlineThickness = i3547[14]
  i3546.strikethrough = i3547[15]
  i3546.strikethroughThickness = i3547[16]
  i3546.TabWidth = i3547[17]
  i3546.Padding = i3547[18]
  i3546.AtlasWidth = i3547[19]
  i3546.AtlasHeight = i3547[20]
  return i3546
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3550 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3551 = data
  i3550.id = i3551[0]
  i3550.x = i3551[1]
  i3550.y = i3551[2]
  i3550.width = i3551[3]
  i3550.height = i3551[4]
  i3550.xOffset = i3551[5]
  i3550.yOffset = i3551[6]
  i3550.xAdvance = i3551[7]
  i3550.scale = i3551[8]
  return i3550
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3552 = root || request.c( 'TMPro.KerningTable' )
  var i3553 = data
  var i3555 = i3553[0]
  var i3554 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3555.length; i += 1) {
    i3554.add(request.d('TMPro.KerningPair', i3555[i + 0]));
  }
  i3552.kerningPairs = i3554
  return i3552
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3558 = root || request.c( 'TMPro.KerningPair' )
  var i3559 = data
  i3558.xOffset = i3559[0]
  i3558.m_FirstGlyph = i3559[1]
  i3558.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3559[2], i3558.m_FirstGlyphAdjustments)
  i3558.m_SecondGlyph = i3559[3]
  i3558.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3559[4], i3558.m_SecondGlyphAdjustments)
  i3558.m_IgnoreSpacingAdjustments = !!i3559[5]
  return i3558
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3560 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3561 = data
  var i3563 = i3561[0]
  var i3562 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3563.length; i += 1) {
    i3562.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3563[i + 0]));
  }
  i3560.m_GlyphPairAdjustmentRecords = i3562
  return i3560
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3566 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3567 = data
  i3566.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3567[0], i3566.m_FirstAdjustmentRecord)
  i3566.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3567[1], i3566.m_SecondAdjustmentRecord)
  i3566.m_FeatureLookupFlags = i3567[2]
  return i3566
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3570 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3571 = data
  i3570.sourceFontFileName = i3571[0]
  i3570.sourceFontFileGUID = i3571[1]
  i3570.pointSizeSamplingMode = i3571[2]
  i3570.pointSize = i3571[3]
  i3570.padding = i3571[4]
  i3570.packingMode = i3571[5]
  i3570.atlasWidth = i3571[6]
  i3570.atlasHeight = i3571[7]
  i3570.characterSetSelectionMode = i3571[8]
  i3570.characterSequence = i3571[9]
  i3570.referencedFontAssetGUID = i3571[10]
  i3570.referencedTextAssetGUID = i3571[11]
  i3570.fontStyle = i3571[12]
  i3570.fontStyleModifier = i3571[13]
  i3570.renderMode = i3571[14]
  i3570.includeFontFeatures = !!i3571[15]
  return i3570
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3574 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3575 = data
  request.r(i3575[0], i3575[1], 0, i3574, 'regularTypeface')
  request.r(i3575[2], i3575[3], 0, i3574, 'italicTypeface')
  return i3574
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3576 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3577 = data
  i3576.useSafeMode = !!i3577[0]
  i3576.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3577[1], i3576.safeModeOptions)
  i3576.timeScale = i3577[2]
  i3576.unscaledTimeScale = i3577[3]
  i3576.useSmoothDeltaTime = !!i3577[4]
  i3576.maxSmoothUnscaledTime = i3577[5]
  i3576.rewindCallbackMode = i3577[6]
  i3576.showUnityEditorReport = !!i3577[7]
  i3576.logBehaviour = i3577[8]
  i3576.drawGizmos = !!i3577[9]
  i3576.defaultRecyclable = !!i3577[10]
  i3576.defaultAutoPlay = i3577[11]
  i3576.defaultUpdateType = i3577[12]
  i3576.defaultTimeScaleIndependent = !!i3577[13]
  i3576.defaultEaseType = i3577[14]
  i3576.defaultEaseOvershootOrAmplitude = i3577[15]
  i3576.defaultEasePeriod = i3577[16]
  i3576.defaultAutoKill = !!i3577[17]
  i3576.defaultLoopType = i3577[18]
  i3576.debugMode = !!i3577[19]
  i3576.debugStoreTargetId = !!i3577[20]
  i3576.showPreviewPanel = !!i3577[21]
  i3576.storeSettingsLocation = i3577[22]
  i3576.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3577[23], i3576.modules)
  i3576.createASMDEF = !!i3577[24]
  i3576.showPlayingTweens = !!i3577[25]
  i3576.showPausedTweens = !!i3577[26]
  return i3576
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3578 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3579 = data
  i3578.logBehaviour = i3579[0]
  i3578.nestedTweenFailureBehaviour = i3579[1]
  return i3578
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3580 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3581 = data
  i3580.showPanel = !!i3581[0]
  i3580.audioEnabled = !!i3581[1]
  i3580.physicsEnabled = !!i3581[2]
  i3580.physics2DEnabled = !!i3581[3]
  i3580.spriteEnabled = !!i3581[4]
  i3580.uiEnabled = !!i3581[5]
  i3580.textMeshProEnabled = !!i3581[6]
  i3580.tk2DEnabled = !!i3581[7]
  i3580.deAudioEnabled = !!i3581[8]
  i3580.deUnityExtendedEnabled = !!i3581[9]
  i3580.epoOutlineEnabled = !!i3581[10]
  return i3580
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3582 = root || request.c( 'TMPro.TMP_Settings' )
  var i3583 = data
  i3582.m_enableWordWrapping = !!i3583[0]
  i3582.m_enableKerning = !!i3583[1]
  i3582.m_enableExtraPadding = !!i3583[2]
  i3582.m_enableTintAllSprites = !!i3583[3]
  i3582.m_enableParseEscapeCharacters = !!i3583[4]
  i3582.m_EnableRaycastTarget = !!i3583[5]
  i3582.m_GetFontFeaturesAtRuntime = !!i3583[6]
  i3582.m_missingGlyphCharacter = i3583[7]
  i3582.m_warningsDisabled = !!i3583[8]
  request.r(i3583[9], i3583[10], 0, i3582, 'm_defaultFontAsset')
  i3582.m_defaultFontAssetPath = i3583[11]
  i3582.m_defaultFontSize = i3583[12]
  i3582.m_defaultAutoSizeMinRatio = i3583[13]
  i3582.m_defaultAutoSizeMaxRatio = i3583[14]
  i3582.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3583[15], i3583[16] )
  i3582.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3583[17], i3583[18] )
  i3582.m_autoSizeTextContainer = !!i3583[19]
  i3582.m_IsTextObjectScaleStatic = !!i3583[20]
  var i3585 = i3583[21]
  var i3584 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3585.length; i += 2) {
  request.r(i3585[i + 0], i3585[i + 1], 1, i3584, '')
  }
  i3582.m_fallbackFontAssets = i3584
  i3582.m_matchMaterialPreset = !!i3583[22]
  request.r(i3583[23], i3583[24], 0, i3582, 'm_defaultSpriteAsset')
  i3582.m_defaultSpriteAssetPath = i3583[25]
  i3582.m_enableEmojiSupport = !!i3583[26]
  i3582.m_MissingCharacterSpriteUnicode = i3583[27]
  i3582.m_defaultColorGradientPresetsPath = i3583[28]
  request.r(i3583[29], i3583[30], 0, i3582, 'm_defaultStyleSheet')
  i3582.m_StyleSheetsResourcePath = i3583[31]
  request.r(i3583[32], i3583[33], 0, i3582, 'm_leadingCharacters')
  request.r(i3583[34], i3583[35], 0, i3582, 'm_followingCharacters')
  i3582.m_UseModernHangulLineBreakingRules = !!i3583[36]
  return i3582
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3586 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3587 = data
  request.r(i3587[0], i3587[1], 0, i3586, 'spriteSheet')
  var i3589 = i3587[2]
  var i3588 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3589.length; i += 1) {
    i3588.add(request.d('TMPro.TMP_Sprite', i3589[i + 0]));
  }
  i3586.spriteInfoList = i3588
  var i3591 = i3587[3]
  var i3590 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3591.length; i += 2) {
  request.r(i3591[i + 0], i3591[i + 1], 1, i3590, '')
  }
  i3586.fallbackSpriteAssets = i3590
  i3586.hashCode = i3587[4]
  request.r(i3587[5], i3587[6], 0, i3586, 'material')
  i3586.materialHashCode = i3587[7]
  i3586.m_Version = i3587[8]
  i3586.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3587[9], i3586.m_FaceInfo)
  var i3593 = i3587[10]
  var i3592 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3593.length; i += 1) {
    i3592.add(request.d('TMPro.TMP_SpriteCharacter', i3593[i + 0]));
  }
  i3586.m_SpriteCharacterTable = i3592
  var i3595 = i3587[11]
  var i3594 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3595.length; i += 1) {
    i3594.add(request.d('TMPro.TMP_SpriteGlyph', i3595[i + 0]));
  }
  i3586.m_SpriteGlyphTable = i3594
  return i3586
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3598 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3599 = data
  i3598.name = i3599[0]
  i3598.hashCode = i3599[1]
  i3598.unicode = i3599[2]
  i3598.pivot = new pc.Vec2( i3599[3], i3599[4] )
  request.r(i3599[5], i3599[6], 0, i3598, 'sprite')
  i3598.id = i3599[7]
  i3598.x = i3599[8]
  i3598.y = i3599[9]
  i3598.width = i3599[10]
  i3598.height = i3599[11]
  i3598.xOffset = i3599[12]
  i3598.yOffset = i3599[13]
  i3598.xAdvance = i3599[14]
  i3598.scale = i3599[15]
  return i3598
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3604 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3605 = data
  i3604.m_Name = i3605[0]
  i3604.m_HashCode = i3605[1]
  i3604.m_ElementType = i3605[2]
  i3604.m_Unicode = i3605[3]
  i3604.m_GlyphIndex = i3605[4]
  i3604.m_Scale = i3605[5]
  return i3604
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3608 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3609 = data
  request.r(i3609[0], i3609[1], 0, i3608, 'sprite')
  i3608.m_Index = i3609[2]
  i3608.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3609[3], i3608.m_Metrics)
  i3608.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3609[4], i3608.m_GlyphRect)
  i3608.m_Scale = i3609[5]
  i3608.m_AtlasIndex = i3609[6]
  i3608.m_ClassDefinitionType = i3609[7]
  return i3608
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3610 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3611 = data
  var i3613 = i3611[0]
  var i3612 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3613.length; i += 1) {
    i3612.add(request.d('TMPro.TMP_Style', i3613[i + 0]));
  }
  i3610.m_StyleList = i3612
  return i3610
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3616 = root || request.c( 'TMPro.TMP_Style' )
  var i3617 = data
  i3616.m_Name = i3617[0]
  i3616.m_HashCode = i3617[1]
  i3616.m_OpeningDefinition = i3617[2]
  i3616.m_ClosingDefinition = i3617[3]
  i3616.m_OpeningTagArray = i3617[4]
  i3616.m_ClosingTagArray = i3617[5]
  i3616.m_OpeningTagUnicodeArray = i3617[6]
  i3616.m_ClosingTagUnicodeArray = i3617[7]
  return i3616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3619 = data
  var i3621 = i3619[0]
  var i3620 = []
  for(var i = 0; i < i3621.length; i += 1) {
    i3620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3621[i + 0]) );
  }
  i3618.files = i3620
  i3618.componentToPrefabIds = i3619[1]
  return i3618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3625 = data
  i3624.path = i3625[0]
  request.r(i3625[1], i3625[2], 0, i3624, 'unityObject')
  return i3624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3627 = data
  var i3629 = i3627[0]
  var i3628 = []
  for(var i = 0; i < i3629.length; i += 1) {
    i3628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3629[i + 0]) );
  }
  i3626.scriptsExecutionOrder = i3628
  var i3631 = i3627[1]
  var i3630 = []
  for(var i = 0; i < i3631.length; i += 1) {
    i3630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3631[i + 0]) );
  }
  i3626.sortingLayers = i3630
  var i3633 = i3627[2]
  var i3632 = []
  for(var i = 0; i < i3633.length; i += 1) {
    i3632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3633[i + 0]) );
  }
  i3626.cullingLayers = i3632
  i3626.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3627[3], i3626.timeSettings)
  i3626.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3627[4], i3626.physicsSettings)
  i3626.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3627[5], i3626.physics2DSettings)
  i3626.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3627[6], i3626.qualitySettings)
  i3626.enableRealtimeShadows = !!i3627[7]
  i3626.enableAutoInstancing = !!i3627[8]
  i3626.enableStaticBatching = !!i3627[9]
  i3626.enableDynamicBatching = !!i3627[10]
  i3626.lightmapEncodingQuality = i3627[11]
  i3626.desiredColorSpace = i3627[12]
  var i3635 = i3627[13]
  var i3634 = []
  for(var i = 0; i < i3635.length; i += 1) {
    i3634.push( i3635[i + 0] );
  }
  i3626.allTags = i3634
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3639 = data
  i3638.name = i3639[0]
  i3638.value = i3639[1]
  return i3638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3643 = data
  i3642.id = i3643[0]
  i3642.name = i3643[1]
  i3642.value = i3643[2]
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3647 = data
  i3646.id = i3647[0]
  i3646.name = i3647[1]
  return i3646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3649 = data
  i3648.fixedDeltaTime = i3649[0]
  i3648.maximumDeltaTime = i3649[1]
  i3648.timeScale = i3649[2]
  i3648.maximumParticleTimestep = i3649[3]
  return i3648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3651 = data
  i3650.gravity = new pc.Vec3( i3651[0], i3651[1], i3651[2] )
  i3650.defaultSolverIterations = i3651[3]
  i3650.bounceThreshold = i3651[4]
  i3650.autoSyncTransforms = !!i3651[5]
  i3650.autoSimulation = !!i3651[6]
  var i3653 = i3651[7]
  var i3652 = []
  for(var i = 0; i < i3653.length; i += 1) {
    i3652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3653[i + 0]) );
  }
  i3650.collisionMatrix = i3652
  return i3650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3657 = data
  i3656.enabled = !!i3657[0]
  i3656.layerId = i3657[1]
  i3656.otherLayerId = i3657[2]
  return i3656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3659 = data
  request.r(i3659[0], i3659[1], 0, i3658, 'material')
  i3658.gravity = new pc.Vec2( i3659[2], i3659[3] )
  i3658.positionIterations = i3659[4]
  i3658.velocityIterations = i3659[5]
  i3658.velocityThreshold = i3659[6]
  i3658.maxLinearCorrection = i3659[7]
  i3658.maxAngularCorrection = i3659[8]
  i3658.maxTranslationSpeed = i3659[9]
  i3658.maxRotationSpeed = i3659[10]
  i3658.baumgarteScale = i3659[11]
  i3658.baumgarteTOIScale = i3659[12]
  i3658.timeToSleep = i3659[13]
  i3658.linearSleepTolerance = i3659[14]
  i3658.angularSleepTolerance = i3659[15]
  i3658.defaultContactOffset = i3659[16]
  i3658.autoSimulation = !!i3659[17]
  i3658.queriesHitTriggers = !!i3659[18]
  i3658.queriesStartInColliders = !!i3659[19]
  i3658.callbacksOnDisable = !!i3659[20]
  i3658.reuseCollisionCallbacks = !!i3659[21]
  i3658.autoSyncTransforms = !!i3659[22]
  var i3661 = i3659[23]
  var i3660 = []
  for(var i = 0; i < i3661.length; i += 1) {
    i3660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3661[i + 0]) );
  }
  i3658.collisionMatrix = i3660
  return i3658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3665 = data
  i3664.enabled = !!i3665[0]
  i3664.layerId = i3665[1]
  i3664.otherLayerId = i3665[2]
  return i3664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3667 = data
  var i3669 = i3667[0]
  var i3668 = []
  for(var i = 0; i < i3669.length; i += 1) {
    i3668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3669[i + 0]) );
  }
  i3666.qualityLevels = i3668
  var i3671 = i3667[1]
  var i3670 = []
  for(var i = 0; i < i3671.length; i += 1) {
    i3670.push( i3671[i + 0] );
  }
  i3666.names = i3670
  i3666.shadows = i3667[2]
  i3666.anisotropicFiltering = i3667[3]
  i3666.antiAliasing = i3667[4]
  i3666.lodBias = i3667[5]
  i3666.shadowCascades = i3667[6]
  i3666.shadowDistance = i3667[7]
  i3666.shadowmaskMode = i3667[8]
  i3666.shadowProjection = i3667[9]
  i3666.shadowResolution = i3667[10]
  i3666.softParticles = !!i3667[11]
  i3666.softVegetation = !!i3667[12]
  i3666.activeColorSpace = i3667[13]
  i3666.desiredColorSpace = i3667[14]
  i3666.masterTextureLimit = i3667[15]
  i3666.maxQueuedFrames = i3667[16]
  i3666.particleRaycastBudget = i3667[17]
  i3666.pixelLightCount = i3667[18]
  i3666.realtimeReflectionProbes = !!i3667[19]
  i3666.shadowCascade2Split = i3667[20]
  i3666.shadowCascade4Split = new pc.Vec3( i3667[21], i3667[22], i3667[23] )
  i3666.streamingMipmapsActive = !!i3667[24]
  i3666.vSyncCount = i3667[25]
  i3666.asyncUploadBufferSize = i3667[26]
  i3666.asyncUploadTimeSlice = i3667[27]
  i3666.billboardsFaceCameraPosition = !!i3667[28]
  i3666.shadowNearPlaneOffset = i3667[29]
  i3666.streamingMipmapsMemoryBudget = i3667[30]
  i3666.maximumLODLevel = i3667[31]
  i3666.streamingMipmapsAddAllCameras = !!i3667[32]
  i3666.streamingMipmapsMaxLevelReduction = i3667[33]
  i3666.streamingMipmapsRenderersPerFrame = i3667[34]
  i3666.resolutionScalingFixedDPIFactor = i3667[35]
  i3666.streamingMipmapsMaxFileIORequests = i3667[36]
  i3666.currentQualityLevel = i3667[37]
  return i3666
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3674 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3675 = data
  i3674.xPlacement = i3675[0]
  i3674.yPlacement = i3675[1]
  i3674.xAdvance = i3675[2]
  i3674.yAdvance = i3675[3]
  return i3674
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3676 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3677 = data
  i3676.m_GlyphIndex = i3677[0]
  i3676.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3677[1], i3676.m_GlyphValueRecord)
  return i3676
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3678 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3679 = data
  i3678.m_XPlacement = i3679[0]
  i3678.m_YPlacement = i3679[1]
  i3678.m_XAdvance = i3679[2]
  i3678.m_YAdvance = i3679[3]
  return i3678
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[3],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[3],"71":[72],"73":[74],"75":[74],"9":[8],"76":[77],"78":[79],"80":[77],"81":[8],"82":[8],"11":[9],"18":[19,8],"83":[8],"10":[9],"84":[8],"85":[8],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"28":[8],"91":[8],"16":[19,8],"92":[8],"93":[8],"94":[8],"95":[8],"96":[19,8],"97":[8],"98":[6],"99":[6],"7":[6],"100":[6],"101":[3],"102":[3],"103":[104],"105":[3],"106":[107],"108":[8],"109":[19,8],"110":[72],"23":[19,8],"111":[112,72],"113":[72],"114":[72,115],"116":[49],"117":[57],"118":[107],"119":[120],"121":[8],"122":[72,8],"17":[8,19],"123":[8],"124":[19,8],"125":[72],"126":[19,8],"127":[8],"128":[77]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","ClickItem","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","DG.Tweening.DOTweenAnimation","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "170.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BEQ_V17_NgocNDL_AnhPD";

Deserializers.lunaAppID = "29138";

Deserializers.projectId = "cc2b1186a2056e546bb13add5b988034";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "d7052412-ed39-4b38-9047-d1edc678b4c3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

