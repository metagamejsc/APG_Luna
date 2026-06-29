var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3222 = root || request.c( 'UnityEngine.JointSpring' )
  var i3223 = data
  i3222.spring = i3223[0]
  i3222.damper = i3223[1]
  i3222.targetPosition = i3223[2]
  return i3222
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3224 = root || request.c( 'UnityEngine.JointMotor' )
  var i3225 = data
  i3224.m_TargetVelocity = i3225[0]
  i3224.m_Force = i3225[1]
  i3224.m_FreeSpin = i3225[2]
  return i3224
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3226 = root || request.c( 'UnityEngine.JointLimits' )
  var i3227 = data
  i3226.m_Min = i3227[0]
  i3226.m_Max = i3227[1]
  i3226.m_Bounciness = i3227[2]
  i3226.m_BounceMinVelocity = i3227[3]
  i3226.m_ContactDistance = i3227[4]
  i3226.minBounce = i3227[5]
  i3226.maxBounce = i3227[6]
  return i3226
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3228 = root || request.c( 'UnityEngine.JointDrive' )
  var i3229 = data
  i3228.m_PositionSpring = i3229[0]
  i3228.m_PositionDamper = i3229[1]
  i3228.m_MaximumForce = i3229[2]
  i3228.m_UseAcceleration = i3229[3]
  return i3228
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3230 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3231 = data
  i3230.m_Spring = i3231[0]
  i3230.m_Damper = i3231[1]
  return i3230
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3232 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3233 = data
  i3232.m_Limit = i3233[0]
  i3232.m_Bounciness = i3233[1]
  i3232.m_ContactDistance = i3233[2]
  return i3232
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3234 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3235 = data
  i3234.m_ExtremumSlip = i3235[0]
  i3234.m_ExtremumValue = i3235[1]
  i3234.m_AsymptoteSlip = i3235[2]
  i3234.m_AsymptoteValue = i3235[3]
  i3234.m_Stiffness = i3235[4]
  return i3234
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3236 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3237 = data
  i3236.m_LowerAngle = i3237[0]
  i3236.m_UpperAngle = i3237[1]
  return i3236
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3238 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3239 = data
  i3238.m_MotorSpeed = i3239[0]
  i3238.m_MaximumMotorTorque = i3239[1]
  return i3238
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3240 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3241 = data
  i3240.m_DampingRatio = i3241[0]
  i3240.m_Frequency = i3241[1]
  i3240.m_Angle = i3241[2]
  return i3240
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3242 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3243 = data
  i3242.m_LowerTranslation = i3243[0]
  i3242.m_UpperTranslation = i3243[1]
  return i3242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3244 = root || new pc.UnityMaterial()
  var i3245 = data
  i3244.name = i3245[0]
  request.r(i3245[1], i3245[2], 0, i3244, 'shader')
  i3244.renderQueue = i3245[3]
  i3244.enableInstancing = !!i3245[4]
  var i3247 = i3245[5]
  var i3246 = []
  for(var i = 0; i < i3247.length; i += 1) {
    i3246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3247[i + 0]) );
  }
  i3244.floatParameters = i3246
  var i3249 = i3245[6]
  var i3248 = []
  for(var i = 0; i < i3249.length; i += 1) {
    i3248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3249[i + 0]) );
  }
  i3244.colorParameters = i3248
  var i3251 = i3245[7]
  var i3250 = []
  for(var i = 0; i < i3251.length; i += 1) {
    i3250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3251[i + 0]) );
  }
  i3244.vectorParameters = i3250
  var i3253 = i3245[8]
  var i3252 = []
  for(var i = 0; i < i3253.length; i += 1) {
    i3252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3253[i + 0]) );
  }
  i3244.textureParameters = i3252
  var i3255 = i3245[9]
  var i3254 = []
  for(var i = 0; i < i3255.length; i += 1) {
    i3254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3255[i + 0]) );
  }
  i3244.materialFlags = i3254
  return i3244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3259 = data
  i3258.name = i3259[0]
  i3258.value = i3259[1]
  return i3258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3263 = data
  i3262.name = i3263[0]
  i3262.value = new pc.Color(i3263[1], i3263[2], i3263[3], i3263[4])
  return i3262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3267 = data
  i3266.name = i3267[0]
  i3266.value = new pc.Vec4( i3267[1], i3267[2], i3267[3], i3267[4] )
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3271 = data
  i3270.name = i3271[0]
  request.r(i3271[1], i3271[2], 0, i3270, 'value')
  return i3270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3275 = data
  i3274.name = i3275[0]
  i3274.enabled = !!i3275[1]
  return i3274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3277 = data
  i3276.name = i3277[0]
  i3276.width = i3277[1]
  i3276.height = i3277[2]
  i3276.mipmapCount = i3277[3]
  i3276.anisoLevel = i3277[4]
  i3276.filterMode = i3277[5]
  i3276.hdr = !!i3277[6]
  i3276.format = i3277[7]
  i3276.wrapMode = i3277[8]
  i3276.alphaIsTransparency = !!i3277[9]
  i3276.alphaSource = i3277[10]
  i3276.graphicsFormat = i3277[11]
  i3276.sRGBTexture = !!i3277[12]
  i3276.desiredColorSpace = i3277[13]
  i3276.wrapU = i3277[14]
  i3276.wrapV = i3277[15]
  return i3276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3279 = data
  i3278.name = i3279[0]
  i3278.index = i3279[1]
  i3278.startup = !!i3279[2]
  return i3278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3281 = data
  i3280.position = new pc.Vec3( i3281[0], i3281[1], i3281[2] )
  i3280.scale = new pc.Vec3( i3281[3], i3281[4], i3281[5] )
  i3280.rotation = new pc.Quat(i3281[6], i3281[7], i3281[8], i3281[9])
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3283 = data
  i3282.aspect = i3283[0]
  i3282.orthographic = !!i3283[1]
  i3282.orthographicSize = i3283[2]
  i3282.backgroundColor = new pc.Color(i3283[3], i3283[4], i3283[5], i3283[6])
  i3282.nearClipPlane = i3283[7]
  i3282.farClipPlane = i3283[8]
  i3282.fieldOfView = i3283[9]
  i3282.depth = i3283[10]
  i3282.clearFlags = i3283[11]
  i3282.cullingMask = i3283[12]
  i3282.rect = i3283[13]
  request.r(i3283[14], i3283[15], 0, i3282, 'targetTexture')
  i3282.usePhysicalProperties = !!i3283[16]
  i3282.focalLength = i3283[17]
  i3282.sensorSize = new pc.Vec2( i3283[18], i3283[19] )
  i3282.lensShift = new pc.Vec2( i3283[20], i3283[21] )
  i3282.gateFit = i3283[22]
  i3282.commandBufferCount = i3283[23]
  i3282.cameraType = i3283[24]
  i3282.enabled = !!i3283[25]
  return i3282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3285 = data
  i3284.name = i3285[0]
  i3284.tagId = i3285[1]
  i3284.enabled = !!i3285[2]
  i3284.isStatic = !!i3285[3]
  i3284.layer = i3285[4]
  return i3284
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3286 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3287 = data
  request.r(i3287[0], i3287[1], 0, i3286, 'm_FirstSelected')
  i3286.m_sendNavigationEvents = !!i3287[2]
  i3286.m_DragThreshold = i3287[3]
  return i3286
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3288 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3289 = data
  i3288.m_HorizontalAxis = i3289[0]
  i3288.m_VerticalAxis = i3289[1]
  i3288.m_SubmitButton = i3289[2]
  i3288.m_CancelButton = i3289[3]
  i3288.m_InputActionsPerSecond = i3289[4]
  i3288.m_RepeatDelay = i3289[5]
  i3288.m_ForceModuleActive = !!i3289[6]
  i3288.m_SendPointerHoverToParent = !!i3289[7]
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3291 = data
  i3290.pivot = new pc.Vec2( i3291[0], i3291[1] )
  i3290.anchorMin = new pc.Vec2( i3291[2], i3291[3] )
  i3290.anchorMax = new pc.Vec2( i3291[4], i3291[5] )
  i3290.sizeDelta = new pc.Vec2( i3291[6], i3291[7] )
  i3290.anchoredPosition3D = new pc.Vec3( i3291[8], i3291[9], i3291[10] )
  i3290.rotation = new pc.Quat(i3291[11], i3291[12], i3291[13], i3291[14])
  i3290.scale = new pc.Vec3( i3291[15], i3291[16], i3291[17] )
  return i3290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3293 = data
  i3292.planeDistance = i3293[0]
  i3292.referencePixelsPerUnit = i3293[1]
  i3292.isFallbackOverlay = !!i3293[2]
  i3292.renderMode = i3293[3]
  i3292.renderOrder = i3293[4]
  i3292.sortingLayerName = i3293[5]
  i3292.sortingOrder = i3293[6]
  i3292.scaleFactor = i3293[7]
  request.r(i3293[8], i3293[9], 0, i3292, 'worldCamera')
  i3292.overrideSorting = !!i3293[10]
  i3292.pixelPerfect = !!i3293[11]
  i3292.targetDisplay = i3293[12]
  i3292.overridePixelPerfect = !!i3293[13]
  i3292.enabled = !!i3293[14]
  return i3292
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3294 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3295 = data
  i3294.m_UiScaleMode = i3295[0]
  i3294.m_ReferencePixelsPerUnit = i3295[1]
  i3294.m_ScaleFactor = i3295[2]
  i3294.m_ReferenceResolution = new pc.Vec2( i3295[3], i3295[4] )
  i3294.m_ScreenMatchMode = i3295[5]
  i3294.m_MatchWidthOrHeight = i3295[6]
  i3294.m_PhysicalUnit = i3295[7]
  i3294.m_FallbackScreenDPI = i3295[8]
  i3294.m_DefaultSpriteDPI = i3295[9]
  i3294.m_DynamicPixelsPerUnit = i3295[10]
  i3294.m_PresetInfoIsWorld = !!i3295[11]
  return i3294
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3296 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3297 = data
  i3296.m_IgnoreReversedGraphics = !!i3297[0]
  i3296.m_BlockingObjects = i3297[1]
  i3296.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3297[2] )
  return i3296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3299 = data
  i3298.cullTransparentMesh = !!i3299[0]
  return i3298
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3300 = root || request.c( 'UnityEngine.UI.Image' )
  var i3301 = data
  request.r(i3301[0], i3301[1], 0, i3300, 'm_Sprite')
  i3300.m_Type = i3301[2]
  i3300.m_PreserveAspect = !!i3301[3]
  i3300.m_FillCenter = !!i3301[4]
  i3300.m_FillMethod = i3301[5]
  i3300.m_FillAmount = i3301[6]
  i3300.m_FillClockwise = !!i3301[7]
  i3300.m_FillOrigin = i3301[8]
  i3300.m_UseSpriteMesh = !!i3301[9]
  i3300.m_PixelsPerUnitMultiplier = i3301[10]
  i3300.m_Maskable = !!i3301[11]
  request.r(i3301[12], i3301[13], 0, i3300, 'm_Material')
  i3300.m_Color = new pc.Color(i3301[14], i3301[15], i3301[16], i3301[17])
  i3300.m_RaycastTarget = !!i3301[18]
  i3300.m_RaycastPadding = new pc.Vec4( i3301[19], i3301[20], i3301[21], i3301[22] )
  return i3300
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i3302 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i3303 = data
  request.r(i3303[0], i3303[1], 0, i3302, 'skeletonDataAsset')
  request.r(i3303[2], i3303[3], 0, i3302, 'additiveMaterial')
  request.r(i3303[4], i3303[5], 0, i3302, 'multiplyMaterial')
  request.r(i3303[6], i3303[7], 0, i3302, 'screenMaterial')
  i3302.forceAdditiveMaterial = !!i3303[8]
  i3302.initialSkinName = i3303[9]
  i3302.initialFlipX = !!i3303[10]
  i3302.initialFlipY = !!i3303[11]
  i3302.startingAnimation = i3303[12]
  i3302.startingLoop = !!i3303[13]
  i3302.timeScale = i3303[14]
  i3302.freeze = !!i3303[15]
  i3302.layoutScaleMode = i3303[16]
  i3302.updateWhenInvisible = i3303[17]
  i3302.allowMultipleCanvasRenderers = !!i3303[18]
  var i3305 = i3303[19]
  var i3304 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i3305.length; i += 2) {
  request.r(i3305[i + 0], i3305[i + 1], 1, i3304, '')
  }
  i3302.canvasRenderers = i3304
  i3302.enableSeparatorSlots = !!i3303[20]
  i3302.updateSeparatorPartLocation = !!i3303[21]
  i3302.updateSeparatorPartScale = !!i3303[22]
  i3302.disableMeshAssignmentOnOverride = !!i3303[23]
  i3302.m_SkeletonColor = new pc.Color(i3303[24], i3303[25], i3303[26], i3303[27])
  i3302.referenceSize = new pc.Vec2( i3303[28], i3303[29] )
  i3302.pivotOffset = new pc.Vec2( i3303[30], i3303[31] )
  i3302.referenceScale = i3303[32]
  i3302.layoutScale = i3303[33]
  i3302.rectTransformSize = new pc.Vec2( i3303[34], i3303[35] )
  i3302.editReferenceRect = !!i3303[36]
  var i3307 = i3303[37]
  var i3306 = []
  for(var i = 0; i < i3307.length; i += 1) {
    i3306.push( i3307[i + 0] );
  }
  i3302.separatorSlotNames = i3306
  var i3309 = i3303[38]
  var i3308 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3309.length; i += 2) {
  request.r(i3309[i + 0], i3309[i + 1], 1, i3308, '')
  }
  i3302.separatorParts = i3308
  i3302.physicsPositionInheritanceFactor = new pc.Vec2( i3303[39], i3303[40] )
  i3302.physicsRotationInheritanceFactor = i3303[41]
  request.r(i3303[42], i3303[43], 0, i3302, 'physicsMovementRelativeTo')
  i3302.meshGenerator = request.d('Spine.Unity.MeshGenerator', i3303[44], i3302.meshGenerator)
  i3302.updateTiming = i3303[45]
  i3302.unscaledTime = !!i3303[46]
  i3302.m_Maskable = !!i3303[47]
  request.r(i3303[48], i3303[49], 0, i3302, 'm_Material')
  i3302.m_Color = new pc.Color(i3303[50], i3303[51], i3303[52], i3303[53])
  i3302.m_RaycastTarget = !!i3303[54]
  i3302.m_RaycastPadding = new pc.Vec4( i3303[55], i3303[56], i3303[57], i3303[58] )
  return i3302
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i3316 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i3317 = data
  i3316.settings = request.d('Spine.Unity.MeshGenerator+Settings', i3317[0], i3316.settings)
  return i3316
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i3318 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i3319 = data
  i3318.useClipping = !!i3319[0]
  i3318.zSpacing = i3319[1]
  i3318.tintBlack = !!i3319[2]
  i3318.canvasGroupCompatible = !!i3319[3]
  i3318.pmaVertexColors = !!i3319[4]
  i3318.addNormals = !!i3319[5]
  i3318.calculateTangents = !!i3319[6]
  i3318.immutableTriangles = !!i3319[7]
  return i3318
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i3320 = root || request.c( 'AnimationController' )
  var i3321 = data
  var i3323 = i3321[0]
  var i3322 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i3323.length; i += 1) {
    i3322.add(request.d('Anim', i3323[i + 0]));
  }
  i3320.anims = i3322
  i3320.currentIndex = i3321[1]
  return i3320
}

Deserializers["Anim"] = function (request, data, root) {
  var i3326 = root || request.c( 'Anim' )
  var i3327 = data
  i3326.Key = i3327[0]
  var i3329 = i3327[1]
  var i3328 = new (System.Collections.Generic.List$1(Bridge.ns('Sound')))
  for(var i = 0; i < i3329.length; i += 1) {
    i3328.add(request.d('Sound', i3329[i + 0]));
  }
  i3326.Sound = i3328
  i3326.Loop = !!i3327[2]
  i3326.Next = !!i3327[3]
  return i3326
}

Deserializers["Sound"] = function (request, data, root) {
  var i3332 = root || request.c( 'Sound' )
  var i3333 = data
  request.r(i3333[0], i3333[1], 0, i3332, 'Clip')
  i3332.Delay = i3333[2]
  return i3332
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3334 = root || request.c( 'UnityEngine.UI.Text' )
  var i3335 = data
  i3334.m_FontData = request.d('UnityEngine.UI.FontData', i3335[0], i3334.m_FontData)
  i3334.m_Text = i3335[1]
  i3334.m_Maskable = !!i3335[2]
  request.r(i3335[3], i3335[4], 0, i3334, 'm_Material')
  i3334.m_Color = new pc.Color(i3335[5], i3335[6], i3335[7], i3335[8])
  i3334.m_RaycastTarget = !!i3335[9]
  i3334.m_RaycastPadding = new pc.Vec4( i3335[10], i3335[11], i3335[12], i3335[13] )
  return i3334
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3336 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3337 = data
  request.r(i3337[0], i3337[1], 0, i3336, 'm_Font')
  i3336.m_FontSize = i3337[2]
  i3336.m_FontStyle = i3337[3]
  i3336.m_BestFit = !!i3337[4]
  i3336.m_MinSize = i3337[5]
  i3336.m_MaxSize = i3337[6]
  i3336.m_Alignment = i3337[7]
  i3336.m_AlignByGeometry = !!i3337[8]
  i3336.m_RichText = !!i3337[9]
  i3336.m_HorizontalOverflow = i3337[10]
  i3336.m_VerticalOverflow = i3337[11]
  i3336.m_LineSpacing = i3337[12]
  return i3336
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i3338 = root || request.c( 'UnityEngine.UI.Slider' )
  var i3339 = data
  request.r(i3339[0], i3339[1], 0, i3338, 'm_FillRect')
  request.r(i3339[2], i3339[3], 0, i3338, 'm_HandleRect')
  i3338.m_Direction = i3339[4]
  i3338.m_MinValue = i3339[5]
  i3338.m_MaxValue = i3339[6]
  i3338.m_WholeNumbers = !!i3339[7]
  i3338.m_Value = i3339[8]
  i3338.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i3339[9], i3338.m_OnValueChanged)
  i3338.m_Navigation = request.d('UnityEngine.UI.Navigation', i3339[10], i3338.m_Navigation)
  i3338.m_Transition = i3339[11]
  i3338.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3339[12], i3338.m_Colors)
  i3338.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3339[13], i3338.m_SpriteState)
  i3338.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3339[14], i3338.m_AnimationTriggers)
  i3338.m_Interactable = !!i3339[15]
  request.r(i3339[16], i3339[17], 0, i3338, 'm_TargetGraphic')
  return i3338
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i3340 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i3341 = data
  i3340.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3341[0], i3340.m_PersistentCalls)
  return i3340
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3342 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3343 = data
  var i3345 = i3343[0]
  var i3344 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3345.length; i += 1) {
    i3344.add(request.d('UnityEngine.Events.PersistentCall', i3345[i + 0]));
  }
  i3342.m_Calls = i3344
  return i3342
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3348 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3349 = data
  request.r(i3349[0], i3349[1], 0, i3348, 'm_Target')
  i3348.m_TargetAssemblyTypeName = i3349[2]
  i3348.m_MethodName = i3349[3]
  i3348.m_Mode = i3349[4]
  i3348.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3349[5], i3348.m_Arguments)
  i3348.m_CallState = i3349[6]
  return i3348
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3350 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3351 = data
  i3350.m_Mode = i3351[0]
  i3350.m_WrapAround = !!i3351[1]
  request.r(i3351[2], i3351[3], 0, i3350, 'm_SelectOnUp')
  request.r(i3351[4], i3351[5], 0, i3350, 'm_SelectOnDown')
  request.r(i3351[6], i3351[7], 0, i3350, 'm_SelectOnLeft')
  request.r(i3351[8], i3351[9], 0, i3350, 'm_SelectOnRight')
  return i3350
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3352 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3353 = data
  i3352.m_NormalColor = new pc.Color(i3353[0], i3353[1], i3353[2], i3353[3])
  i3352.m_HighlightedColor = new pc.Color(i3353[4], i3353[5], i3353[6], i3353[7])
  i3352.m_PressedColor = new pc.Color(i3353[8], i3353[9], i3353[10], i3353[11])
  i3352.m_SelectedColor = new pc.Color(i3353[12], i3353[13], i3353[14], i3353[15])
  i3352.m_DisabledColor = new pc.Color(i3353[16], i3353[17], i3353[18], i3353[19])
  i3352.m_ColorMultiplier = i3353[20]
  i3352.m_FadeDuration = i3353[21]
  return i3352
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3354 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3355 = data
  request.r(i3355[0], i3355[1], 0, i3354, 'm_HighlightedSprite')
  request.r(i3355[2], i3355[3], 0, i3354, 'm_PressedSprite')
  request.r(i3355[4], i3355[5], 0, i3354, 'm_SelectedSprite')
  request.r(i3355[6], i3355[7], 0, i3354, 'm_DisabledSprite')
  return i3354
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3356 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3357 = data
  i3356.m_NormalTrigger = i3357[0]
  i3356.m_HighlightedTrigger = i3357[1]
  i3356.m_PressedTrigger = i3357[2]
  i3356.m_SelectedTrigger = i3357[3]
  i3356.m_DisabledTrigger = i3357[4]
  return i3356
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3358 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3359 = data
  i3358.m_ShowMaskGraphic = !!i3359[0]
  return i3358
}

Deserializers["TutController"] = function (request, data, root) {
  var i3360 = root || request.c( 'TutController' )
  var i3361 = data
  request.r(i3361[0], i3361[1], 0, i3360, 'icon')
  request.r(i3361[2], i3361[3], 0, i3360, 'tutObject')
  i3360.toPos = new pc.Vec3( i3361[4], i3361[5], i3361[6] )
  i3360.timeMove = i3361[7]
  i3360.timeDelay = i3361[8]
  i3360.scale = i3361[9]
  return i3360
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3362 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3363 = data
  i3362.targetIsSelf = !!i3363[0]
  request.r(i3363[1], i3363[2], 0, i3362, 'targetGO')
  i3362.tweenTargetIsTargetGO = !!i3363[3]
  i3362.delay = i3363[4]
  i3362.duration = i3363[5]
  i3362.easeType = i3363[6]
  i3362.easeCurve = new pc.AnimationCurve( { keys_flow: i3363[7] } )
  i3362.loopType = i3363[8]
  i3362.loops = i3363[9]
  i3362.id = i3363[10]
  i3362.isRelative = !!i3363[11]
  i3362.isFrom = !!i3363[12]
  i3362.isIndependentUpdate = !!i3363[13]
  i3362.autoKill = !!i3363[14]
  i3362.autoGenerate = !!i3363[15]
  i3362.isActive = !!i3363[16]
  i3362.isValid = !!i3363[17]
  request.r(i3363[18], i3363[19], 0, i3362, 'target')
  i3362.animationType = i3363[20]
  i3362.targetType = i3363[21]
  i3362.forcedTargetType = i3363[22]
  i3362.autoPlay = !!i3363[23]
  i3362.useTargetAsV3 = !!i3363[24]
  i3362.endValueFloat = i3363[25]
  i3362.endValueV3 = new pc.Vec3( i3363[26], i3363[27], i3363[28] )
  i3362.endValueV2 = new pc.Vec2( i3363[29], i3363[30] )
  i3362.endValueColor = new pc.Color(i3363[31], i3363[32], i3363[33], i3363[34])
  i3362.endValueString = i3363[35]
  i3362.endValueRect = UnityEngine.Rect.MinMaxRect(i3363[36], i3363[37], i3363[38], i3363[39])
  request.r(i3363[40], i3363[41], 0, i3362, 'endValueTransform')
  i3362.optionalBool0 = !!i3363[42]
  i3362.optionalBool1 = !!i3363[43]
  i3362.optionalFloat0 = i3363[44]
  i3362.optionalInt0 = i3363[45]
  i3362.optionalRotationMode = i3363[46]
  i3362.optionalScrambleMode = i3363[47]
  i3362.optionalShakeRandomnessMode = i3363[48]
  i3362.optionalString = i3363[49]
  i3362.updateType = i3363[50]
  i3362.isSpeedBased = !!i3363[51]
  i3362.hasOnStart = !!i3363[52]
  i3362.hasOnPlay = !!i3363[53]
  i3362.hasOnUpdate = !!i3363[54]
  i3362.hasOnStepComplete = !!i3363[55]
  i3362.hasOnComplete = !!i3363[56]
  i3362.hasOnTweenCreated = !!i3363[57]
  i3362.hasOnRewind = !!i3363[58]
  i3362.onStart = request.d('UnityEngine.Events.UnityEvent', i3363[59], i3362.onStart)
  i3362.onPlay = request.d('UnityEngine.Events.UnityEvent', i3363[60], i3362.onPlay)
  i3362.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3363[61], i3362.onUpdate)
  i3362.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3363[62], i3362.onStepComplete)
  i3362.onComplete = request.d('UnityEngine.Events.UnityEvent', i3363[63], i3362.onComplete)
  i3362.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3363[64], i3362.onTweenCreated)
  i3362.onRewind = request.d('UnityEngine.Events.UnityEvent', i3363[65], i3362.onRewind)
  return i3362
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3364 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3365 = data
  i3364.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3365[0], i3364.m_PersistentCalls)
  return i3364
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3366 = root || request.c( 'UnityEngine.UI.Button' )
  var i3367 = data
  i3366.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3367[0], i3366.m_OnClick)
  i3366.m_Navigation = request.d('UnityEngine.UI.Navigation', i3367[1], i3366.m_Navigation)
  i3366.m_Transition = i3367[2]
  i3366.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3367[3], i3366.m_Colors)
  i3366.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3367[4], i3366.m_SpriteState)
  i3366.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3367[5], i3366.m_AnimationTriggers)
  i3366.m_Interactable = !!i3367[6]
  request.r(i3367[7], i3367[8], 0, i3366, 'm_TargetGraphic')
  return i3366
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3368 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3369 = data
  i3368.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3369[0], i3368.m_PersistentCalls)
  return i3368
}

Deserializers["LunaController"] = function (request, data, root) {
  var i3370 = root || request.c( 'LunaController' )
  var i3371 = data
  i3370.TimePlay = i3371[0]
  i3370.CountPlay = i3371[1]
  i3370.BGColor = new pc.Color(i3371[2], i3371[3], i3371[4], i3371[5])
  i3370.GameBGColor = new pc.Color(i3371[6], i3371[7], i3371[8], i3371[9])
  i3370.LevelTextColor = new pc.Color(i3371[10], i3371[11], i3371[12], i3371[13])
  i3370.TitleTextColor = new pc.Color(i3371[14], i3371[15], i3371[16], i3371[17])
  request.r(i3371[18], i3371[19], 0, i3370, 'time')
  request.r(i3371[20], i3371[21], 0, i3370, 'BGImage')
  request.r(i3371[22], i3371[23], 0, i3370, 'GameBGImage')
  request.r(i3371[24], i3371[25], 0, i3370, 'levelText')
  request.r(i3371[26], i3371[27], 0, i3370, 'titleText')
  request.r(i3371[28], i3371[29], 0, i3370, 'endCard')
  var i3373 = i3371[30]
  var i3372 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i3373.length; i += 2) {
  request.r(i3373[i + 0], i3373[i + 1], 1, i3372, '')
  }
  i3370.CTA = i3372
  i3370.count = i3371[31]
  return i3370
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i3376 = root || request.c( 'LayoutController' )
  var i3377 = data
  request.r(i3377[0], i3377[1], 0, i3376, 'CTA')
  i3376.hide = !!i3377[2]
  return i3376
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3378 = root || request.c( 'AudioController' )
  var i3379 = data
  request.r(i3379[0], i3379[1], 0, i3378, 'musicSound')
  request.r(i3379[2], i3379[3], 0, i3378, 'musicSource')
  i3378.delayMusic = i3379[4]
  request.r(i3379[5], i3379[6], 0, i3378, 'introSound')
  request.r(i3379[7], i3379[8], 0, i3378, 'introSource')
  i3378.delayIntro = i3379[9]
  request.r(i3379[10], i3379[11], 0, i3378, 'SFXPool')
  return i3378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3381 = data
  request.r(i3381[0], i3381[1], 0, i3380, 'clip')
  request.r(i3381[2], i3381[3], 0, i3380, 'outputAudioMixerGroup')
  i3380.playOnAwake = !!i3381[4]
  i3380.loop = !!i3381[5]
  i3380.time = i3381[6]
  i3380.volume = i3381[7]
  i3380.pitch = i3381[8]
  i3380.enabled = !!i3381[9]
  return i3380
}

Deserializers["DragController"] = function (request, data, root) {
  var i3382 = root || request.c( 'DragController' )
  var i3383 = data
  request.r(i3383[0], i3383[1], 0, i3382, 'currentTarget')
  request.r(i3383[2], i3383[3], 0, i3382, 'pickupSound')
  request.r(i3383[4], i3383[5], 0, i3382, 'iconItem')
  request.r(i3383[6], i3383[7], 0, i3382, 'canvas')
  request.r(i3383[8], i3383[9], 0, i3382, 'tut')
  return i3382
}

Deserializers["GameController"] = function (request, data, root) {
  var i3384 = root || request.c( 'GameController' )
  var i3385 = data
  i3384.CompleteStep = request.d('System.Action', i3385[0], i3384.CompleteStep)
  var i3387 = i3385[1]
  var i3386 = new (System.Collections.Generic.List$1(Bridge.ns('Seq')))
  for(var i = 0; i < i3387.length; i += 1) {
    i3386.add(request.d('Seq', i3387[i + 0]));
  }
  i3384.skeletons = i3386
  request.r(i3385[2], i3385[3], 0, i3384, 'demon')
  request.r(i3385[4], i3385[5], 0, i3384, 'mainAnimation')
  request.r(i3385[6], i3385[7], 0, i3384, 'correctSound')
  i3384.end = !!i3385[8]
  i3384.complete = !!i3385[9]
  i3384.currentStep = i3385[10]
  i3384.maxStep = i3385[11]
  request.r(i3385[12], i3385[13], 0, i3384, 'currentStepText')
  request.r(i3385[14], i3385[15], 0, i3384, 'maxStepText')
  request.r(i3385[16], i3385[17], 0, i3384, 'slider')
  return i3384
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3388 = root || request.c( 'System.Action' )
  var i3389 = data
  return i3388
}

Deserializers["Seq"] = function (request, data, root) {
  var i3392 = root || request.c( 'Seq' )
  var i3393 = data
  request.r(i3393[0], i3393[1], 0, i3392, 'Area')
  request.r(i3393[2], i3393[3], 0, i3392, 'Animation')
  return i3392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3395 = data
  i3394.ambientIntensity = i3395[0]
  i3394.reflectionIntensity = i3395[1]
  i3394.ambientMode = i3395[2]
  i3394.ambientLight = new pc.Color(i3395[3], i3395[4], i3395[5], i3395[6])
  i3394.ambientSkyColor = new pc.Color(i3395[7], i3395[8], i3395[9], i3395[10])
  i3394.ambientGroundColor = new pc.Color(i3395[11], i3395[12], i3395[13], i3395[14])
  i3394.ambientEquatorColor = new pc.Color(i3395[15], i3395[16], i3395[17], i3395[18])
  i3394.fogColor = new pc.Color(i3395[19], i3395[20], i3395[21], i3395[22])
  i3394.fogEndDistance = i3395[23]
  i3394.fogStartDistance = i3395[24]
  i3394.fogDensity = i3395[25]
  i3394.fog = !!i3395[26]
  request.r(i3395[27], i3395[28], 0, i3394, 'skybox')
  i3394.fogMode = i3395[29]
  var i3397 = i3395[30]
  var i3396 = []
  for(var i = 0; i < i3397.length; i += 1) {
    i3396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3397[i + 0]) );
  }
  i3394.lightmaps = i3396
  i3394.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3395[31], i3394.lightProbes)
  i3394.lightmapsMode = i3395[32]
  i3394.mixedBakeMode = i3395[33]
  i3394.environmentLightingMode = i3395[34]
  i3394.ambientProbe = new pc.SphericalHarmonicsL2(i3395[35])
  i3394.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3395[36])
  i3394.useReferenceAmbientProbe = !!i3395[37]
  request.r(i3395[38], i3395[39], 0, i3394, 'customReflection')
  request.r(i3395[40], i3395[41], 0, i3394, 'defaultReflection')
  i3394.defaultReflectionMode = i3395[42]
  i3394.defaultReflectionResolution = i3395[43]
  i3394.sunLightObjectId = i3395[44]
  i3394.pixelLightCount = i3395[45]
  i3394.defaultReflectionHDR = !!i3395[46]
  i3394.hasLightDataAsset = !!i3395[47]
  i3394.hasManualGenerate = !!i3395[48]
  return i3394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3401 = data
  request.r(i3401[0], i3401[1], 0, i3400, 'lightmapColor')
  request.r(i3401[2], i3401[3], 0, i3400, 'lightmapDirection')
  return i3400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3402 = root || new UnityEngine.LightProbes()
  var i3403 = data
  return i3402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3411 = data
  var i3413 = i3411[0]
  var i3412 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3413.length; i += 1) {
    i3412.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3413[i + 0]));
  }
  i3410.ShaderCompilationErrors = i3412
  i3410.name = i3411[1]
  i3410.guid = i3411[2]
  var i3415 = i3411[3]
  var i3414 = []
  for(var i = 0; i < i3415.length; i += 1) {
    i3414.push( i3415[i + 0] );
  }
  i3410.shaderDefinedKeywords = i3414
  var i3417 = i3411[4]
  var i3416 = []
  for(var i = 0; i < i3417.length; i += 1) {
    i3416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3417[i + 0]) );
  }
  i3410.passes = i3416
  var i3419 = i3411[5]
  var i3418 = []
  for(var i = 0; i < i3419.length; i += 1) {
    i3418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3419[i + 0]) );
  }
  i3410.usePasses = i3418
  var i3421 = i3411[6]
  var i3420 = []
  for(var i = 0; i < i3421.length; i += 1) {
    i3420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3421[i + 0]) );
  }
  i3410.defaultParameterValues = i3420
  request.r(i3411[7], i3411[8], 0, i3410, 'unityFallbackShader')
  i3410.readDepth = !!i3411[9]
  i3410.isCreatedByShaderGraph = !!i3411[10]
  i3410.disableBatching = !!i3411[11]
  i3410.compiled = !!i3411[12]
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3425 = data
  i3424.shaderName = i3425[0]
  i3424.errorMessage = i3425[1]
  return i3424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3428 = root || new pc.UnityShaderPass()
  var i3429 = data
  i3428.id = i3429[0]
  i3428.subShaderIndex = i3429[1]
  i3428.name = i3429[2]
  i3428.passType = i3429[3]
  i3428.grabPassTextureName = i3429[4]
  i3428.usePass = !!i3429[5]
  i3428.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3429[6], i3428.zTest)
  i3428.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3429[7], i3428.zWrite)
  i3428.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3429[8], i3428.culling)
  i3428.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3429[9], i3428.blending)
  i3428.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3429[10], i3428.alphaBlending)
  i3428.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3429[11], i3428.colorWriteMask)
  i3428.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3429[12], i3428.offsetUnits)
  i3428.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3429[13], i3428.offsetFactor)
  i3428.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3429[14], i3428.stencilRef)
  i3428.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3429[15], i3428.stencilReadMask)
  i3428.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3429[16], i3428.stencilWriteMask)
  i3428.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3429[17], i3428.stencilOp)
  i3428.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3429[18], i3428.stencilOpFront)
  i3428.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3429[19], i3428.stencilOpBack)
  var i3431 = i3429[20]
  var i3430 = []
  for(var i = 0; i < i3431.length; i += 1) {
    i3430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3431[i + 0]) );
  }
  i3428.tags = i3430
  var i3433 = i3429[21]
  var i3432 = []
  for(var i = 0; i < i3433.length; i += 1) {
    i3432.push( i3433[i + 0] );
  }
  i3428.passDefinedKeywords = i3432
  var i3435 = i3429[22]
  var i3434 = []
  for(var i = 0; i < i3435.length; i += 1) {
    i3434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3435[i + 0]) );
  }
  i3428.passDefinedKeywordGroups = i3434
  var i3437 = i3429[23]
  var i3436 = []
  for(var i = 0; i < i3437.length; i += 1) {
    i3436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3437[i + 0]) );
  }
  i3428.variants = i3436
  var i3439 = i3429[24]
  var i3438 = []
  for(var i = 0; i < i3439.length; i += 1) {
    i3438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3439[i + 0]) );
  }
  i3428.excludedVariants = i3438
  i3428.hasDepthReader = !!i3429[25]
  return i3428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3441 = data
  i3440.val = i3441[0]
  i3440.name = i3441[1]
  return i3440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3443 = data
  i3442.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3443[0], i3442.src)
  i3442.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3443[1], i3442.dst)
  i3442.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3443[2], i3442.op)
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3445 = data
  i3444.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3445[0], i3444.pass)
  i3444.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3445[1], i3444.fail)
  i3444.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3445[2], i3444.zFail)
  i3444.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3445[3], i3444.comp)
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3449 = data
  i3448.name = i3449[0]
  i3448.value = i3449[1]
  return i3448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3453 = data
  var i3455 = i3453[0]
  var i3454 = []
  for(var i = 0; i < i3455.length; i += 1) {
    i3454.push( i3455[i + 0] );
  }
  i3452.keywords = i3454
  i3452.hasDiscard = !!i3453[1]
  return i3452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3459 = data
  i3458.passId = i3459[0]
  i3458.subShaderIndex = i3459[1]
  var i3461 = i3459[2]
  var i3460 = []
  for(var i = 0; i < i3461.length; i += 1) {
    i3460.push( i3461[i + 0] );
  }
  i3458.keywords = i3460
  i3458.vertexProgram = i3459[3]
  i3458.fragmentProgram = i3459[4]
  i3458.exportedForWebGl2 = !!i3459[5]
  i3458.readDepth = !!i3459[6]
  return i3458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3465 = data
  request.r(i3465[0], i3465[1], 0, i3464, 'shader')
  i3464.pass = i3465[2]
  return i3464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3469 = data
  i3468.name = i3469[0]
  i3468.type = i3469[1]
  i3468.value = new pc.Vec4( i3469[2], i3469[3], i3469[4], i3469[5] )
  i3468.textureValue = i3469[6]
  i3468.shaderPropertyFlag = i3469[7]
  return i3468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3471 = data
  i3470.name = i3471[0]
  request.r(i3471[1], i3471[2], 0, i3470, 'texture')
  i3470.aabb = i3471[3]
  i3470.vertices = i3471[4]
  i3470.triangles = i3471[5]
  i3470.textureRect = UnityEngine.Rect.MinMaxRect(i3471[6], i3471[7], i3471[8], i3471[9])
  i3470.packedRect = UnityEngine.Rect.MinMaxRect(i3471[10], i3471[11], i3471[12], i3471[13])
  i3470.border = new pc.Vec4( i3471[14], i3471[15], i3471[16], i3471[17] )
  i3470.transparency = i3471[18]
  i3470.bounds = i3471[19]
  i3470.pixelsPerUnit = i3471[20]
  i3470.textureWidth = i3471[21]
  i3470.textureHeight = i3471[22]
  i3470.nativeSize = new pc.Vec2( i3471[23], i3471[24] )
  i3470.pivot = new pc.Vec2( i3471[25], i3471[26] )
  i3470.textureRectOffset = new pc.Vec2( i3471[27], i3471[28] )
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3473 = data
  i3472.name = i3473[0]
  return i3472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3475 = data
  i3474.name = i3475[0]
  i3474.ascent = i3475[1]
  i3474.originalLineHeight = i3475[2]
  i3474.fontSize = i3475[3]
  var i3477 = i3475[4]
  var i3476 = []
  for(var i = 0; i < i3477.length; i += 1) {
    i3476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3477[i + 0]) );
  }
  i3474.characterInfo = i3476
  request.r(i3475[5], i3475[6], 0, i3474, 'texture')
  i3474.originalFontSize = i3475[7]
  return i3474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3481 = data
  i3480.index = i3481[0]
  i3480.advance = i3481[1]
  i3480.bearing = i3481[2]
  i3480.glyphWidth = i3481[3]
  i3480.glyphHeight = i3481[4]
  i3480.minX = i3481[5]
  i3480.maxX = i3481[6]
  i3480.minY = i3481[7]
  i3480.maxY = i3481[8]
  i3480.uvBottomLeftX = i3481[9]
  i3480.uvBottomLeftY = i3481[10]
  i3480.uvBottomRightX = i3481[11]
  i3480.uvBottomRightY = i3481[12]
  i3480.uvTopLeftX = i3481[13]
  i3480.uvTopLeftY = i3481[14]
  i3480.uvTopRightX = i3481[15]
  i3480.uvTopRightY = i3481[16]
  return i3480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3483 = data
  i3482.name = i3483[0]
  i3482.bytes64 = i3483[1]
  i3482.data = i3483[2]
  return i3482
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3484 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3485 = data
  var i3487 = i3485[0]
  var i3486 = []
  for(var i = 0; i < i3487.length; i += 2) {
  request.r(i3487[i + 0], i3487[i + 1], 2, i3486, '')
  }
  i3484.atlasAssets = i3486
  i3484.scale = i3485[1]
  request.r(i3485[2], i3485[3], 0, i3484, 'skeletonJSON')
  i3484.isUpgradingBlendModeMaterials = !!i3485[4]
  i3484.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3485[5], i3484.blendModeMaterials)
  var i3489 = i3485[6]
  var i3488 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3489.length; i += 2) {
  request.r(i3489[i + 0], i3489[i + 1], 1, i3488, '')
  }
  i3484.skeletonDataModifiers = i3488
  var i3491 = i3485[7]
  var i3490 = []
  for(var i = 0; i < i3491.length; i += 1) {
    i3490.push( i3491[i + 0] );
  }
  i3484.fromAnimation = i3490
  var i3493 = i3485[8]
  var i3492 = []
  for(var i = 0; i < i3493.length; i += 1) {
    i3492.push( i3493[i + 0] );
  }
  i3484.toAnimation = i3492
  i3484.duration = i3485[9]
  i3484.defaultMix = i3485[10]
  request.r(i3485[11], i3485[12], 0, i3484, 'controller')
  return i3484
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3496 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3497 = data
  i3496.applyAdditiveMaterial = !!i3497[0]
  var i3499 = i3497[1]
  var i3498 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3499.length; i += 1) {
    i3498.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3499[i + 0]));
  }
  i3496.additiveMaterials = i3498
  var i3501 = i3497[2]
  var i3500 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3501.length; i += 1) {
    i3500.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3501[i + 0]));
  }
  i3496.multiplyMaterials = i3500
  var i3503 = i3497[3]
  var i3502 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3503.length; i += 1) {
    i3502.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3503[i + 0]));
  }
  i3496.screenMaterials = i3502
  i3496.requiresBlendModeMaterials = !!i3497[4]
  return i3496
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3506 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3507 = data
  i3506.pageName = i3507[0]
  request.r(i3507[1], i3507[2], 0, i3506, 'material')
  return i3506
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3510 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3511 = data
  request.r(i3511[0], i3511[1], 0, i3510, 'atlasFile')
  var i3513 = i3511[2]
  var i3512 = []
  for(var i = 0; i < i3513.length; i += 2) {
  request.r(i3513[i + 0], i3513[i + 1], 2, i3512, '')
  }
  i3510.materials = i3512
  i3510.textureLoadingMode = i3511[3]
  request.r(i3511[4], i3511[5], 0, i3510, 'onDemandTextureLoader')
  return i3510
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3516 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3517 = data
  i3516.useSafeMode = !!i3517[0]
  i3516.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3517[1], i3516.safeModeOptions)
  i3516.timeScale = i3517[2]
  i3516.unscaledTimeScale = i3517[3]
  i3516.useSmoothDeltaTime = !!i3517[4]
  i3516.maxSmoothUnscaledTime = i3517[5]
  i3516.rewindCallbackMode = i3517[6]
  i3516.showUnityEditorReport = !!i3517[7]
  i3516.logBehaviour = i3517[8]
  i3516.drawGizmos = !!i3517[9]
  i3516.defaultRecyclable = !!i3517[10]
  i3516.defaultAutoPlay = i3517[11]
  i3516.defaultUpdateType = i3517[12]
  i3516.defaultTimeScaleIndependent = !!i3517[13]
  i3516.defaultEaseType = i3517[14]
  i3516.defaultEaseOvershootOrAmplitude = i3517[15]
  i3516.defaultEasePeriod = i3517[16]
  i3516.defaultAutoKill = !!i3517[17]
  i3516.defaultLoopType = i3517[18]
  i3516.debugMode = !!i3517[19]
  i3516.debugStoreTargetId = !!i3517[20]
  i3516.showPreviewPanel = !!i3517[21]
  i3516.storeSettingsLocation = i3517[22]
  i3516.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3517[23], i3516.modules)
  i3516.createASMDEF = !!i3517[24]
  i3516.showPlayingTweens = !!i3517[25]
  i3516.showPausedTweens = !!i3517[26]
  return i3516
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3518 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3519 = data
  i3518.logBehaviour = i3519[0]
  i3518.nestedTweenFailureBehaviour = i3519[1]
  return i3518
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3520 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3521 = data
  i3520.showPanel = !!i3521[0]
  i3520.audioEnabled = !!i3521[1]
  i3520.physicsEnabled = !!i3521[2]
  i3520.physics2DEnabled = !!i3521[3]
  i3520.spriteEnabled = !!i3521[4]
  i3520.uiEnabled = !!i3521[5]
  i3520.textMeshProEnabled = !!i3521[6]
  i3520.tk2DEnabled = !!i3521[7]
  i3520.deAudioEnabled = !!i3521[8]
  i3520.deUnityExtendedEnabled = !!i3521[9]
  i3520.epoOutlineEnabled = !!i3521[10]
  return i3520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3523 = data
  var i3525 = i3523[0]
  var i3524 = []
  for(var i = 0; i < i3525.length; i += 1) {
    i3524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3525[i + 0]) );
  }
  i3522.files = i3524
  i3522.componentToPrefabIds = i3523[1]
  return i3522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3529 = data
  i3528.path = i3529[0]
  request.r(i3529[1], i3529[2], 0, i3528, 'unityObject')
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3531 = data
  var i3533 = i3531[0]
  var i3532 = []
  for(var i = 0; i < i3533.length; i += 1) {
    i3532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3533[i + 0]) );
  }
  i3530.scriptsExecutionOrder = i3532
  var i3535 = i3531[1]
  var i3534 = []
  for(var i = 0; i < i3535.length; i += 1) {
    i3534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3535[i + 0]) );
  }
  i3530.sortingLayers = i3534
  var i3537 = i3531[2]
  var i3536 = []
  for(var i = 0; i < i3537.length; i += 1) {
    i3536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3537[i + 0]) );
  }
  i3530.cullingLayers = i3536
  i3530.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3531[3], i3530.timeSettings)
  i3530.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3531[4], i3530.physicsSettings)
  i3530.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3531[5], i3530.physics2DSettings)
  i3530.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3531[6], i3530.qualitySettings)
  i3530.enableRealtimeShadows = !!i3531[7]
  i3530.enableAutoInstancing = !!i3531[8]
  i3530.enableStaticBatching = !!i3531[9]
  i3530.enableDynamicBatching = !!i3531[10]
  i3530.lightmapEncodingQuality = i3531[11]
  i3530.desiredColorSpace = i3531[12]
  var i3539 = i3531[13]
  var i3538 = []
  for(var i = 0; i < i3539.length; i += 1) {
    i3538.push( i3539[i + 0] );
  }
  i3530.allTags = i3538
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3543 = data
  i3542.name = i3543[0]
  i3542.value = i3543[1]
  return i3542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3547 = data
  i3546.id = i3547[0]
  i3546.name = i3547[1]
  i3546.value = i3547[2]
  return i3546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3551 = data
  i3550.id = i3551[0]
  i3550.name = i3551[1]
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3553 = data
  i3552.fixedDeltaTime = i3553[0]
  i3552.maximumDeltaTime = i3553[1]
  i3552.timeScale = i3553[2]
  i3552.maximumParticleTimestep = i3553[3]
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3555 = data
  i3554.gravity = new pc.Vec3( i3555[0], i3555[1], i3555[2] )
  i3554.defaultSolverIterations = i3555[3]
  i3554.bounceThreshold = i3555[4]
  i3554.autoSyncTransforms = !!i3555[5]
  i3554.autoSimulation = !!i3555[6]
  var i3557 = i3555[7]
  var i3556 = []
  for(var i = 0; i < i3557.length; i += 1) {
    i3556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3557[i + 0]) );
  }
  i3554.collisionMatrix = i3556
  return i3554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3561 = data
  i3560.enabled = !!i3561[0]
  i3560.layerId = i3561[1]
  i3560.otherLayerId = i3561[2]
  return i3560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3563 = data
  request.r(i3563[0], i3563[1], 0, i3562, 'material')
  i3562.gravity = new pc.Vec2( i3563[2], i3563[3] )
  i3562.positionIterations = i3563[4]
  i3562.velocityIterations = i3563[5]
  i3562.velocityThreshold = i3563[6]
  i3562.maxLinearCorrection = i3563[7]
  i3562.maxAngularCorrection = i3563[8]
  i3562.maxTranslationSpeed = i3563[9]
  i3562.maxRotationSpeed = i3563[10]
  i3562.baumgarteScale = i3563[11]
  i3562.baumgarteTOIScale = i3563[12]
  i3562.timeToSleep = i3563[13]
  i3562.linearSleepTolerance = i3563[14]
  i3562.angularSleepTolerance = i3563[15]
  i3562.defaultContactOffset = i3563[16]
  i3562.autoSimulation = !!i3563[17]
  i3562.queriesHitTriggers = !!i3563[18]
  i3562.queriesStartInColliders = !!i3563[19]
  i3562.callbacksOnDisable = !!i3563[20]
  i3562.reuseCollisionCallbacks = !!i3563[21]
  i3562.autoSyncTransforms = !!i3563[22]
  var i3565 = i3563[23]
  var i3564 = []
  for(var i = 0; i < i3565.length; i += 1) {
    i3564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3565[i + 0]) );
  }
  i3562.collisionMatrix = i3564
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3569 = data
  i3568.enabled = !!i3569[0]
  i3568.layerId = i3569[1]
  i3568.otherLayerId = i3569[2]
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3571 = data
  var i3573 = i3571[0]
  var i3572 = []
  for(var i = 0; i < i3573.length; i += 1) {
    i3572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3573[i + 0]) );
  }
  i3570.qualityLevels = i3572
  var i3575 = i3571[1]
  var i3574 = []
  for(var i = 0; i < i3575.length; i += 1) {
    i3574.push( i3575[i + 0] );
  }
  i3570.names = i3574
  i3570.shadows = i3571[2]
  i3570.anisotropicFiltering = i3571[3]
  i3570.antiAliasing = i3571[4]
  i3570.lodBias = i3571[5]
  i3570.shadowCascades = i3571[6]
  i3570.shadowDistance = i3571[7]
  i3570.shadowmaskMode = i3571[8]
  i3570.shadowProjection = i3571[9]
  i3570.shadowResolution = i3571[10]
  i3570.softParticles = !!i3571[11]
  i3570.softVegetation = !!i3571[12]
  i3570.activeColorSpace = i3571[13]
  i3570.desiredColorSpace = i3571[14]
  i3570.masterTextureLimit = i3571[15]
  i3570.maxQueuedFrames = i3571[16]
  i3570.particleRaycastBudget = i3571[17]
  i3570.pixelLightCount = i3571[18]
  i3570.realtimeReflectionProbes = !!i3571[19]
  i3570.shadowCascade2Split = i3571[20]
  i3570.shadowCascade4Split = new pc.Vec3( i3571[21], i3571[22], i3571[23] )
  i3570.streamingMipmapsActive = !!i3571[24]
  i3570.vSyncCount = i3571[25]
  i3570.asyncUploadBufferSize = i3571[26]
  i3570.asyncUploadTimeSlice = i3571[27]
  i3570.billboardsFaceCameraPosition = !!i3571[28]
  i3570.shadowNearPlaneOffset = i3571[29]
  i3570.streamingMipmapsMemoryBudget = i3571[30]
  i3570.maximumLODLevel = i3571[31]
  i3570.streamingMipmapsAddAllCameras = !!i3571[32]
  i3570.streamingMipmapsMaxLevelReduction = i3571[33]
  i3570.streamingMipmapsRenderersPerFrame = i3571[34]
  i3570.resolutionScalingFixedDPIFactor = i3571[35]
  i3570.streamingMipmapsMaxFileIORequests = i3571[36]
  i3570.currentQualityLevel = i3571[37]
  return i3570
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3578 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3579 = data
  request.r(i3579[0], i3579[1], 0, i3578, 'm_ObjectArgument')
  i3578.m_ObjectArgumentAssemblyTypeName = i3579[2]
  i3578.m_IntArgument = i3579[3]
  i3578.m_FloatArgument = i3579[4]
  i3578.m_StringArgument = i3579[5]
  i3578.m_BoolArgument = !!i3579[6]
  return i3578
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[3],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[3],"71":[72],"73":[74],"75":[74],"9":[8],"18":[14],"76":[77],"78":[79],"80":[77],"81":[8],"82":[8],"11":[9],"13":[12,8],"83":[8],"10":[9],"84":[8],"85":[8],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"24":[8],"91":[8],"92":[12,8],"93":[8],"94":[8],"95":[8],"23":[8],"21":[12,8],"96":[8],"97":[6],"98":[6],"7":[6],"99":[6],"100":[3],"101":[3],"102":[103],"104":[3],"105":[106],"107":[8],"108":[12,8],"109":[72],"14":[12,8],"110":[111,72],"112":[72],"113":[72,114],"115":[49],"116":[57],"117":[106],"118":[119],"120":[77]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Slider","UnityEngine.UI.Mask","TutController","UnityEngine.GameObject","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","LunaController","LayoutController","AudioController","UnityEngine.AudioSource","DragController","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "06/29/2026 07:28:58";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BM_V20_NgocBTU_TamNTM";

Deserializers.lunaAppID = "34530";

Deserializers.projectId = "5b44dfd2230fe054ca8da1b65d37e310";

Deserializers.packagesInfo = "com.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1803";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4367";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BMTP_Luna";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "94014e98-048e-41f9-9b7e-0edba8dc405d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

