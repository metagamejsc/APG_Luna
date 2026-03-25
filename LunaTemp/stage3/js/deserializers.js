var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3318 = root || request.c( 'UnityEngine.JointSpring' )
  var i3319 = data
  i3318.spring = i3319[0]
  i3318.damper = i3319[1]
  i3318.targetPosition = i3319[2]
  return i3318
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3320 = root || request.c( 'UnityEngine.JointMotor' )
  var i3321 = data
  i3320.m_TargetVelocity = i3321[0]
  i3320.m_Force = i3321[1]
  i3320.m_FreeSpin = i3321[2]
  return i3320
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3322 = root || request.c( 'UnityEngine.JointLimits' )
  var i3323 = data
  i3322.m_Min = i3323[0]
  i3322.m_Max = i3323[1]
  i3322.m_Bounciness = i3323[2]
  i3322.m_BounceMinVelocity = i3323[3]
  i3322.m_ContactDistance = i3323[4]
  i3322.minBounce = i3323[5]
  i3322.maxBounce = i3323[6]
  return i3322
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3324 = root || request.c( 'UnityEngine.JointDrive' )
  var i3325 = data
  i3324.m_PositionSpring = i3325[0]
  i3324.m_PositionDamper = i3325[1]
  i3324.m_MaximumForce = i3325[2]
  i3324.m_UseAcceleration = i3325[3]
  return i3324
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3326 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3327 = data
  i3326.m_Spring = i3327[0]
  i3326.m_Damper = i3327[1]
  return i3326
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3328 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3329 = data
  i3328.m_Limit = i3329[0]
  i3328.m_Bounciness = i3329[1]
  i3328.m_ContactDistance = i3329[2]
  return i3328
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3330 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3331 = data
  i3330.m_ExtremumSlip = i3331[0]
  i3330.m_ExtremumValue = i3331[1]
  i3330.m_AsymptoteSlip = i3331[2]
  i3330.m_AsymptoteValue = i3331[3]
  i3330.m_Stiffness = i3331[4]
  return i3330
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3332 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3333 = data
  i3332.m_LowerAngle = i3333[0]
  i3332.m_UpperAngle = i3333[1]
  return i3332
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3334 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3335 = data
  i3334.m_MotorSpeed = i3335[0]
  i3334.m_MaximumMotorTorque = i3335[1]
  return i3334
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3336 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3337 = data
  i3336.m_DampingRatio = i3337[0]
  i3336.m_Frequency = i3337[1]
  i3336.m_Angle = i3337[2]
  return i3336
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3338 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3339 = data
  i3338.m_LowerTranslation = i3339[0]
  i3338.m_UpperTranslation = i3339[1]
  return i3338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3341 = data
  i3340.name = i3341[0]
  i3340.width = i3341[1]
  i3340.height = i3341[2]
  i3340.mipmapCount = i3341[3]
  i3340.anisoLevel = i3341[4]
  i3340.filterMode = i3341[5]
  i3340.hdr = !!i3341[6]
  i3340.format = i3341[7]
  i3340.wrapMode = i3341[8]
  i3340.alphaIsTransparency = !!i3341[9]
  i3340.alphaSource = i3341[10]
  i3340.graphicsFormat = i3341[11]
  i3340.sRGBTexture = !!i3341[12]
  i3340.desiredColorSpace = i3341[13]
  i3340.wrapU = i3341[14]
  i3340.wrapV = i3341[15]
  return i3340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3342 = root || new pc.UnityMaterial()
  var i3343 = data
  i3342.name = i3343[0]
  request.r(i3343[1], i3343[2], 0, i3342, 'shader')
  i3342.renderQueue = i3343[3]
  i3342.enableInstancing = !!i3343[4]
  var i3345 = i3343[5]
  var i3344 = []
  for(var i = 0; i < i3345.length; i += 1) {
    i3344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3345[i + 0]) );
  }
  i3342.floatParameters = i3344
  var i3347 = i3343[6]
  var i3346 = []
  for(var i = 0; i < i3347.length; i += 1) {
    i3346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3347[i + 0]) );
  }
  i3342.colorParameters = i3346
  var i3349 = i3343[7]
  var i3348 = []
  for(var i = 0; i < i3349.length; i += 1) {
    i3348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3349[i + 0]) );
  }
  i3342.vectorParameters = i3348
  var i3351 = i3343[8]
  var i3350 = []
  for(var i = 0; i < i3351.length; i += 1) {
    i3350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3351[i + 0]) );
  }
  i3342.textureParameters = i3350
  var i3353 = i3343[9]
  var i3352 = []
  for(var i = 0; i < i3353.length; i += 1) {
    i3352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3353[i + 0]) );
  }
  i3342.materialFlags = i3352
  return i3342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3357 = data
  i3356.name = i3357[0]
  i3356.value = i3357[1]
  return i3356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3361 = data
  i3360.name = i3361[0]
  i3360.value = new pc.Color(i3361[1], i3361[2], i3361[3], i3361[4])
  return i3360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3365 = data
  i3364.name = i3365[0]
  i3364.value = new pc.Vec4( i3365[1], i3365[2], i3365[3], i3365[4] )
  return i3364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3369 = data
  i3368.name = i3369[0]
  request.r(i3369[1], i3369[2], 0, i3368, 'value')
  return i3368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3373 = data
  i3372.name = i3373[0]
  i3372.enabled = !!i3373[1]
  return i3372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3375 = data
  i3374.name = i3375[0]
  i3374.index = i3375[1]
  i3374.startup = !!i3375[2]
  return i3374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3377 = data
  i3376.position = new pc.Vec3( i3377[0], i3377[1], i3377[2] )
  i3376.scale = new pc.Vec3( i3377[3], i3377[4], i3377[5] )
  i3376.rotation = new pc.Quat(i3377[6], i3377[7], i3377[8], i3377[9])
  return i3376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3379 = data
  i3378.aspect = i3379[0]
  i3378.orthographic = !!i3379[1]
  i3378.orthographicSize = i3379[2]
  i3378.backgroundColor = new pc.Color(i3379[3], i3379[4], i3379[5], i3379[6])
  i3378.nearClipPlane = i3379[7]
  i3378.farClipPlane = i3379[8]
  i3378.fieldOfView = i3379[9]
  i3378.depth = i3379[10]
  i3378.clearFlags = i3379[11]
  i3378.cullingMask = i3379[12]
  i3378.rect = i3379[13]
  request.r(i3379[14], i3379[15], 0, i3378, 'targetTexture')
  i3378.usePhysicalProperties = !!i3379[16]
  i3378.focalLength = i3379[17]
  i3378.sensorSize = new pc.Vec2( i3379[18], i3379[19] )
  i3378.lensShift = new pc.Vec2( i3379[20], i3379[21] )
  i3378.gateFit = i3379[22]
  i3378.commandBufferCount = i3379[23]
  i3378.cameraType = i3379[24]
  i3378.enabled = !!i3379[25]
  return i3378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3381 = data
  i3380.name = i3381[0]
  i3380.tagId = i3381[1]
  i3380.enabled = !!i3381[2]
  i3380.isStatic = !!i3381[3]
  i3380.layer = i3381[4]
  return i3380
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3382 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3383 = data
  request.r(i3383[0], i3383[1], 0, i3382, 'm_FirstSelected')
  i3382.m_sendNavigationEvents = !!i3383[2]
  i3382.m_DragThreshold = i3383[3]
  return i3382
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3384 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3385 = data
  i3384.m_HorizontalAxis = i3385[0]
  i3384.m_VerticalAxis = i3385[1]
  i3384.m_SubmitButton = i3385[2]
  i3384.m_CancelButton = i3385[3]
  i3384.m_InputActionsPerSecond = i3385[4]
  i3384.m_RepeatDelay = i3385[5]
  i3384.m_ForceModuleActive = !!i3385[6]
  i3384.m_SendPointerHoverToParent = !!i3385[7]
  return i3384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3387 = data
  i3386.pivot = new pc.Vec2( i3387[0], i3387[1] )
  i3386.anchorMin = new pc.Vec2( i3387[2], i3387[3] )
  i3386.anchorMax = new pc.Vec2( i3387[4], i3387[5] )
  i3386.sizeDelta = new pc.Vec2( i3387[6], i3387[7] )
  i3386.anchoredPosition3D = new pc.Vec3( i3387[8], i3387[9], i3387[10] )
  i3386.rotation = new pc.Quat(i3387[11], i3387[12], i3387[13], i3387[14])
  i3386.scale = new pc.Vec3( i3387[15], i3387[16], i3387[17] )
  return i3386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3389 = data
  i3388.planeDistance = i3389[0]
  i3388.referencePixelsPerUnit = i3389[1]
  i3388.isFallbackOverlay = !!i3389[2]
  i3388.renderMode = i3389[3]
  i3388.renderOrder = i3389[4]
  i3388.sortingLayerName = i3389[5]
  i3388.sortingOrder = i3389[6]
  i3388.scaleFactor = i3389[7]
  request.r(i3389[8], i3389[9], 0, i3388, 'worldCamera')
  i3388.overrideSorting = !!i3389[10]
  i3388.pixelPerfect = !!i3389[11]
  i3388.targetDisplay = i3389[12]
  i3388.overridePixelPerfect = !!i3389[13]
  i3388.enabled = !!i3389[14]
  return i3388
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3390 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3391 = data
  i3390.m_UiScaleMode = i3391[0]
  i3390.m_ReferencePixelsPerUnit = i3391[1]
  i3390.m_ScaleFactor = i3391[2]
  i3390.m_ReferenceResolution = new pc.Vec2( i3391[3], i3391[4] )
  i3390.m_ScreenMatchMode = i3391[5]
  i3390.m_MatchWidthOrHeight = i3391[6]
  i3390.m_PhysicalUnit = i3391[7]
  i3390.m_FallbackScreenDPI = i3391[8]
  i3390.m_DefaultSpriteDPI = i3391[9]
  i3390.m_DynamicPixelsPerUnit = i3391[10]
  i3390.m_PresetInfoIsWorld = !!i3391[11]
  return i3390
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3392 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3393 = data
  i3392.m_IgnoreReversedGraphics = !!i3393[0]
  i3392.m_BlockingObjects = i3393[1]
  i3392.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3393[2] )
  return i3392
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i3394 = root || request.c( 'LunaManager' )
  var i3395 = data
  var i3397 = i3395[0]
  var i3396 = []
  for(var i = 0; i < i3397.length; i += 2) {
  request.r(i3397[i + 0], i3397[i + 1], 2, i3396, '')
  }
  i3394.lstBtnInstall = i3396
  request.r(i3395[1], i3395[2], 0, i3394, 'WinGO')
  request.r(i3395[3], i3395[4], 0, i3394, 'LoseGO')
  request.r(i3395[5], i3395[6], 0, i3394, 'StartCard')
  request.r(i3395[7], i3395[8], 0, i3394, 'EndCard')
  request.r(i3395[9], i3395[10], 0, i3394, 'Parent')
  i3394.isDrag = !!i3395[11]
  i3394.timeDrag = i3395[12]
  i3394.countPlay = i3395[13]
  i3394.countPlayFinal = i3395[14]
  i3394.countPlayMax = i3395[15]
  i3394.timeDropFinal = i3395[16]
  i3394.colorBG = new pc.Color(i3395[17], i3395[18], i3395[19], i3395[20])
  request.r(i3395[21], i3395[22], 0, i3394, 'texture2D')
  request.r(i3395[23], i3395[24], 0, i3394, 'rawImageBG')
  request.r(i3395[25], i3395[26], 0, i3394, 'MSSGirl')
  request.r(i3395[27], i3395[28], 0, i3394, 'MSSBoy')
  request.r(i3395[29], i3395[30], 0, i3394, 'MSSGroom')
  request.r(i3395[31], i3395[32], 0, i3394, 'MSSBride')
  request.r(i3395[33], i3395[34], 0, i3394, 'textProgess')
  request.r(i3395[35], i3395[36], 0, i3394, 'imgProgess')
  request.r(i3395[37], i3395[38], 0, i3394, 'timeText')
  return i3394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3401 = data
  i3400.cullTransparentMesh = !!i3401[0]
  return i3400
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3402 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3403 = data
  request.r(i3403[0], i3403[1], 0, i3402, 'm_Texture')
  i3402.m_UVRect = UnityEngine.Rect.MinMaxRect(i3403[2], i3403[3], i3403[4], i3403[5])
  i3402.m_Maskable = !!i3403[6]
  request.r(i3403[7], i3403[8], 0, i3402, 'm_Material')
  i3402.m_Color = new pc.Color(i3403[9], i3403[10], i3403[11], i3403[12])
  i3402.m_RaycastTarget = !!i3403[13]
  i3402.m_RaycastPadding = new pc.Vec4( i3403[14], i3403[15], i3403[16], i3403[17] )
  return i3402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3405 = data
  request.r(i3405[0], i3405[1], 0, i3404, 'clip')
  request.r(i3405[2], i3405[3], 0, i3404, 'outputAudioMixerGroup')
  i3404.playOnAwake = !!i3405[4]
  i3404.loop = !!i3405[5]
  i3404.time = i3405[6]
  i3404.volume = i3405[7]
  i3404.pitch = i3405[8]
  i3404.enabled = !!i3405[9]
  return i3404
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3406 = root || request.c( 'UnityEngine.UI.Image' )
  var i3407 = data
  request.r(i3407[0], i3407[1], 0, i3406, 'm_Sprite')
  i3406.m_Type = i3407[2]
  i3406.m_PreserveAspect = !!i3407[3]
  i3406.m_FillCenter = !!i3407[4]
  i3406.m_FillMethod = i3407[5]
  i3406.m_FillAmount = i3407[6]
  i3406.m_FillClockwise = !!i3407[7]
  i3406.m_FillOrigin = i3407[8]
  i3406.m_UseSpriteMesh = !!i3407[9]
  i3406.m_PixelsPerUnitMultiplier = i3407[10]
  i3406.m_Maskable = !!i3407[11]
  request.r(i3407[12], i3407[13], 0, i3406, 'm_Material')
  i3406.m_Color = new pc.Color(i3407[14], i3407[15], i3407[16], i3407[17])
  i3406.m_RaycastTarget = !!i3407[18]
  i3406.m_RaycastPadding = new pc.Vec4( i3407[19], i3407[20], i3407[21], i3407[22] )
  return i3406
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i3408 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i3409 = data
  request.r(i3409[0], i3409[1], 0, i3408, 'skeletonDataAsset')
  request.r(i3409[2], i3409[3], 0, i3408, 'additiveMaterial')
  request.r(i3409[4], i3409[5], 0, i3408, 'multiplyMaterial')
  request.r(i3409[6], i3409[7], 0, i3408, 'screenMaterial')
  i3408.initialSkinName = i3409[8]
  i3408.initialFlipX = !!i3409[9]
  i3408.initialFlipY = !!i3409[10]
  i3408.startingAnimation = i3409[11]
  i3408.startingLoop = !!i3409[12]
  i3408.timeScale = i3409[13]
  i3408.freeze = !!i3409[14]
  i3408.layoutScaleMode = i3409[15]
  i3408.updateWhenInvisible = i3409[16]
  i3408.allowMultipleCanvasRenderers = !!i3409[17]
  var i3411 = i3409[18]
  var i3410 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i3411.length; i += 2) {
  request.r(i3411[i + 0], i3411[i + 1], 1, i3410, '')
  }
  i3408.canvasRenderers = i3410
  i3408.enableSeparatorSlots = !!i3409[19]
  i3408.updateSeparatorPartLocation = !!i3409[20]
  i3408.updateSeparatorPartScale = !!i3409[21]
  i3408.disableMeshAssignmentOnOverride = !!i3409[22]
  i3408.referenceSize = new pc.Vec2( i3409[23], i3409[24] )
  i3408.referenceScale = i3409[25]
  i3408.rectTransformSize = new pc.Vec2( i3409[26], i3409[27] )
  i3408.editReferenceRect = !!i3409[28]
  var i3413 = i3409[29]
  var i3412 = []
  for(var i = 0; i < i3413.length; i += 1) {
    i3412.push( i3413[i + 0] );
  }
  i3408.separatorSlotNames = i3412
  var i3415 = i3409[30]
  var i3414 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3415.length; i += 2) {
  request.r(i3415[i + 0], i3415[i + 1], 1, i3414, '')
  }
  i3408.separatorParts = i3414
  i3408.meshGenerator = request.d('Spine.Unity.MeshGenerator', i3409[31], i3408.meshGenerator)
  i3408.updateTiming = i3409[32]
  i3408.unscaledTime = !!i3409[33]
  i3408.m_Maskable = !!i3409[34]
  request.r(i3409[35], i3409[36], 0, i3408, 'm_Material')
  i3408.m_Color = new pc.Color(i3409[37], i3409[38], i3409[39], i3409[40])
  i3408.m_RaycastTarget = !!i3409[41]
  i3408.m_RaycastPadding = new pc.Vec4( i3409[42], i3409[43], i3409[44], i3409[45] )
  return i3408
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i3422 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i3423 = data
  i3422.settings = request.d('Spine.Unity.MeshGenerator+Settings', i3423[0], i3422.settings)
  return i3422
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i3424 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i3425 = data
  i3424.useClipping = !!i3425[0]
  i3424.zSpacing = i3425[1]
  i3424.pmaVertexColors = !!i3425[2]
  i3424.tintBlack = !!i3425[3]
  i3424.canvasGroupTintBlack = !!i3425[4]
  i3424.calculateTangents = !!i3425[5]
  i3424.addNormals = !!i3425[6]
  i3424.immutableTriangles = !!i3425[7]
  return i3424
}

Deserializers["DropZone"] = function (request, data, root) {
  var i3426 = root || request.c( 'DropZone' )
  var i3427 = data
  i3426.idDrop = i3427[0]
  var i3429 = i3427[1]
  var i3428 = []
  for(var i = 0; i < i3429.length; i += 2) {
  request.r(i3429[i + 0], i3429[i + 1], 2, i3428, '')
  }
  i3426.steps = i3428
  request.r(i3427[2], i3427[3], 0, i3426, 'stepLose')
  return i3426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3433 = data
  i3432.usedByComposite = !!i3433[0]
  i3432.autoTiling = !!i3433[1]
  var i3435 = i3433[2]
  var i3434 = []
  for(var i = 0; i < i3435.length; i += 1) {
  var i3437 = i3435[i + 0]
  var i3436 = []
  for(var i = 0; i < i3437.length; i += 2) {
    i3436.push( new pc.Vec2( i3437[i + 0], i3437[i + 1] ) );
  }
    i3434.push( i3436 );
  }
  i3432.points = i3434
  i3432.enabled = !!i3433[3]
  i3432.isTrigger = !!i3433[4]
  i3432.usedByEffector = !!i3433[5]
  i3432.density = i3433[6]
  i3432.offset = new pc.Vec2( i3433[7], i3433[8] )
  request.r(i3433[9], i3433[10], 0, i3432, 'material')
  return i3432
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i3444 = root || request.c( 'ClickItem' )
  var i3445 = data
  var i3447 = i3445[0]
  var i3446 = []
  for(var i = 0; i < i3447.length; i += 2) {
  request.r(i3447[i + 0], i3447[i + 1], 2, i3446, '')
  }
  i3444.steps = i3446
  i3444.currentStep = i3445[1]
  i3444.isProcess = !!i3445[2]
  return i3444
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3448 = root || request.c( 'UnityEngine.UI.Button' )
  var i3449 = data
  i3448.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3449[0], i3448.m_OnClick)
  i3448.m_Navigation = request.d('UnityEngine.UI.Navigation', i3449[1], i3448.m_Navigation)
  i3448.m_Transition = i3449[2]
  i3448.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3449[3], i3448.m_Colors)
  i3448.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3449[4], i3448.m_SpriteState)
  i3448.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3449[5], i3448.m_AnimationTriggers)
  i3448.m_Interactable = !!i3449[6]
  request.r(i3449[7], i3449[8], 0, i3448, 'm_TargetGraphic')
  return i3448
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3450 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3451 = data
  i3450.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3451[0], i3450.m_PersistentCalls)
  return i3450
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3452 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3453 = data
  var i3455 = i3453[0]
  var i3454 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3455.length; i += 1) {
    i3454.add(request.d('UnityEngine.Events.PersistentCall', i3455[i + 0]));
  }
  i3452.m_Calls = i3454
  return i3452
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3458 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3459 = data
  request.r(i3459[0], i3459[1], 0, i3458, 'm_Target')
  i3458.m_TargetAssemblyTypeName = i3459[2]
  i3458.m_MethodName = i3459[3]
  i3458.m_Mode = i3459[4]
  i3458.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3459[5], i3458.m_Arguments)
  i3458.m_CallState = i3459[6]
  return i3458
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3460 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3461 = data
  i3460.m_Mode = i3461[0]
  i3460.m_WrapAround = !!i3461[1]
  request.r(i3461[2], i3461[3], 0, i3460, 'm_SelectOnUp')
  request.r(i3461[4], i3461[5], 0, i3460, 'm_SelectOnDown')
  request.r(i3461[6], i3461[7], 0, i3460, 'm_SelectOnLeft')
  request.r(i3461[8], i3461[9], 0, i3460, 'm_SelectOnRight')
  return i3460
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3462 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3463 = data
  i3462.m_NormalColor = new pc.Color(i3463[0], i3463[1], i3463[2], i3463[3])
  i3462.m_HighlightedColor = new pc.Color(i3463[4], i3463[5], i3463[6], i3463[7])
  i3462.m_PressedColor = new pc.Color(i3463[8], i3463[9], i3463[10], i3463[11])
  i3462.m_SelectedColor = new pc.Color(i3463[12], i3463[13], i3463[14], i3463[15])
  i3462.m_DisabledColor = new pc.Color(i3463[16], i3463[17], i3463[18], i3463[19])
  i3462.m_ColorMultiplier = i3463[20]
  i3462.m_FadeDuration = i3463[21]
  return i3462
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3464 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3465 = data
  request.r(i3465[0], i3465[1], 0, i3464, 'm_HighlightedSprite')
  request.r(i3465[2], i3465[3], 0, i3464, 'm_PressedSprite')
  request.r(i3465[4], i3465[5], 0, i3464, 'm_SelectedSprite')
  request.r(i3465[6], i3465[7], 0, i3464, 'm_DisabledSprite')
  return i3464
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3466 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3467 = data
  i3466.m_NormalTrigger = i3467[0]
  i3466.m_HighlightedTrigger = i3467[1]
  i3466.m_PressedTrigger = i3467[2]
  i3466.m_SelectedTrigger = i3467[3]
  i3466.m_DisabledTrigger = i3467[4]
  return i3466
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3468 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3469 = data
  i3468.targetIsSelf = !!i3469[0]
  request.r(i3469[1], i3469[2], 0, i3468, 'targetGO')
  i3468.tweenTargetIsTargetGO = !!i3469[3]
  i3468.delay = i3469[4]
  i3468.duration = i3469[5]
  i3468.easeType = i3469[6]
  i3468.easeCurve = new pc.AnimationCurve( { keys_flow: i3469[7] } )
  i3468.loopType = i3469[8]
  i3468.loops = i3469[9]
  i3468.id = i3469[10]
  i3468.isRelative = !!i3469[11]
  i3468.isFrom = !!i3469[12]
  i3468.isIndependentUpdate = !!i3469[13]
  i3468.autoKill = !!i3469[14]
  i3468.autoGenerate = !!i3469[15]
  i3468.isActive = !!i3469[16]
  i3468.isValid = !!i3469[17]
  request.r(i3469[18], i3469[19], 0, i3468, 'target')
  i3468.animationType = i3469[20]
  i3468.targetType = i3469[21]
  i3468.forcedTargetType = i3469[22]
  i3468.autoPlay = !!i3469[23]
  i3468.useTargetAsV3 = !!i3469[24]
  i3468.endValueFloat = i3469[25]
  i3468.endValueV3 = new pc.Vec3( i3469[26], i3469[27], i3469[28] )
  i3468.endValueV2 = new pc.Vec2( i3469[29], i3469[30] )
  i3468.endValueColor = new pc.Color(i3469[31], i3469[32], i3469[33], i3469[34])
  i3468.endValueString = i3469[35]
  i3468.endValueRect = UnityEngine.Rect.MinMaxRect(i3469[36], i3469[37], i3469[38], i3469[39])
  request.r(i3469[40], i3469[41], 0, i3468, 'endValueTransform')
  i3468.optionalBool0 = !!i3469[42]
  i3468.optionalBool1 = !!i3469[43]
  i3468.optionalFloat0 = i3469[44]
  i3468.optionalInt0 = i3469[45]
  i3468.optionalRotationMode = i3469[46]
  i3468.optionalScrambleMode = i3469[47]
  i3468.optionalShakeRandomnessMode = i3469[48]
  i3468.optionalString = i3469[49]
  i3468.updateType = i3469[50]
  i3468.isSpeedBased = !!i3469[51]
  i3468.hasOnStart = !!i3469[52]
  i3468.hasOnPlay = !!i3469[53]
  i3468.hasOnUpdate = !!i3469[54]
  i3468.hasOnStepComplete = !!i3469[55]
  i3468.hasOnComplete = !!i3469[56]
  i3468.hasOnTweenCreated = !!i3469[57]
  i3468.hasOnRewind = !!i3469[58]
  i3468.onStart = request.d('UnityEngine.Events.UnityEvent', i3469[59], i3468.onStart)
  i3468.onPlay = request.d('UnityEngine.Events.UnityEvent', i3469[60], i3468.onPlay)
  i3468.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3469[61], i3468.onUpdate)
  i3468.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3469[62], i3468.onStepComplete)
  i3468.onComplete = request.d('UnityEngine.Events.UnityEvent', i3469[63], i3468.onComplete)
  i3468.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3469[64], i3468.onTweenCreated)
  i3468.onRewind = request.d('UnityEngine.Events.UnityEvent', i3469[65], i3468.onRewind)
  return i3468
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3470 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3471 = data
  i3470.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3471[0], i3470.m_PersistentCalls)
  return i3470
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3472 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3473 = data
  request.r(i3473[0], i3473[1], 0, i3472, 'm_ObjectArgument')
  i3472.m_ObjectArgumentAssemblyTypeName = i3473[2]
  i3472.m_IntArgument = i3473[3]
  i3472.m_FloatArgument = i3473[4]
  i3472.m_StringArgument = i3473[5]
  i3472.m_BoolArgument = !!i3473[6]
  return i3472
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i3474 = root || request.c( 'DraggableItem' )
  var i3475 = data
  i3474.idDrag = i3475[0]
  i3474.isProcess = !!i3475[1]
  i3474.isLose = !!i3475[2]
  i3474.isHide = !!i3475[3]
  return i3474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3477 = data
  i3476.m_Alpha = i3477[0]
  i3476.m_Interactable = !!i3477[1]
  i3476.m_BlocksRaycasts = !!i3477[2]
  i3476.m_IgnoreParentGroups = !!i3477[3]
  i3476.enabled = !!i3477[4]
  return i3476
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3478 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3479 = data
  i3478.m_hasFontAssetChanged = !!i3479[0]
  request.r(i3479[1], i3479[2], 0, i3478, 'm_baseMaterial')
  i3478.m_maskOffset = new pc.Vec4( i3479[3], i3479[4], i3479[5], i3479[6] )
  i3478.m_text = i3479[7]
  i3478.m_isRightToLeft = !!i3479[8]
  request.r(i3479[9], i3479[10], 0, i3478, 'm_fontAsset')
  request.r(i3479[11], i3479[12], 0, i3478, 'm_sharedMaterial')
  var i3481 = i3479[13]
  var i3480 = []
  for(var i = 0; i < i3481.length; i += 2) {
  request.r(i3481[i + 0], i3481[i + 1], 2, i3480, '')
  }
  i3478.m_fontSharedMaterials = i3480
  request.r(i3479[14], i3479[15], 0, i3478, 'm_fontMaterial')
  var i3483 = i3479[16]
  var i3482 = []
  for(var i = 0; i < i3483.length; i += 2) {
  request.r(i3483[i + 0], i3483[i + 1], 2, i3482, '')
  }
  i3478.m_fontMaterials = i3482
  i3478.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3479[17], i3479[18], i3479[19], i3479[20])
  i3478.m_fontColor = new pc.Color(i3479[21], i3479[22], i3479[23], i3479[24])
  i3478.m_enableVertexGradient = !!i3479[25]
  i3478.m_colorMode = i3479[26]
  i3478.m_fontColorGradient = request.d('TMPro.VertexGradient', i3479[27], i3478.m_fontColorGradient)
  request.r(i3479[28], i3479[29], 0, i3478, 'm_fontColorGradientPreset')
  request.r(i3479[30], i3479[31], 0, i3478, 'm_spriteAsset')
  i3478.m_tintAllSprites = !!i3479[32]
  request.r(i3479[33], i3479[34], 0, i3478, 'm_StyleSheet')
  i3478.m_TextStyleHashCode = i3479[35]
  i3478.m_overrideHtmlColors = !!i3479[36]
  i3478.m_faceColor = UnityEngine.Color32.ConstructColor(i3479[37], i3479[38], i3479[39], i3479[40])
  i3478.m_fontSize = i3479[41]
  i3478.m_fontSizeBase = i3479[42]
  i3478.m_fontWeight = i3479[43]
  i3478.m_enableAutoSizing = !!i3479[44]
  i3478.m_fontSizeMin = i3479[45]
  i3478.m_fontSizeMax = i3479[46]
  i3478.m_fontStyle = i3479[47]
  i3478.m_HorizontalAlignment = i3479[48]
  i3478.m_VerticalAlignment = i3479[49]
  i3478.m_textAlignment = i3479[50]
  i3478.m_characterSpacing = i3479[51]
  i3478.m_wordSpacing = i3479[52]
  i3478.m_lineSpacing = i3479[53]
  i3478.m_lineSpacingMax = i3479[54]
  i3478.m_paragraphSpacing = i3479[55]
  i3478.m_charWidthMaxAdj = i3479[56]
  i3478.m_enableWordWrapping = !!i3479[57]
  i3478.m_wordWrappingRatios = i3479[58]
  i3478.m_overflowMode = i3479[59]
  request.r(i3479[60], i3479[61], 0, i3478, 'm_linkedTextComponent')
  request.r(i3479[62], i3479[63], 0, i3478, 'parentLinkedComponent')
  i3478.m_enableKerning = !!i3479[64]
  i3478.m_enableExtraPadding = !!i3479[65]
  i3478.checkPaddingRequired = !!i3479[66]
  i3478.m_isRichText = !!i3479[67]
  i3478.m_parseCtrlCharacters = !!i3479[68]
  i3478.m_isOrthographic = !!i3479[69]
  i3478.m_isCullingEnabled = !!i3479[70]
  i3478.m_horizontalMapping = i3479[71]
  i3478.m_verticalMapping = i3479[72]
  i3478.m_uvLineOffset = i3479[73]
  i3478.m_geometrySortingOrder = i3479[74]
  i3478.m_IsTextObjectScaleStatic = !!i3479[75]
  i3478.m_VertexBufferAutoSizeReduction = !!i3479[76]
  i3478.m_useMaxVisibleDescender = !!i3479[77]
  i3478.m_pageToDisplay = i3479[78]
  i3478.m_margin = new pc.Vec4( i3479[79], i3479[80], i3479[81], i3479[82] )
  i3478.m_isUsingLegacyAnimationComponent = !!i3479[83]
  i3478.m_isVolumetricText = !!i3479[84]
  i3478.m_Maskable = !!i3479[85]
  request.r(i3479[86], i3479[87], 0, i3478, 'm_Material')
  i3478.m_Color = new pc.Color(i3479[88], i3479[89], i3479[90], i3479[91])
  i3478.m_RaycastTarget = !!i3479[92]
  i3478.m_RaycastPadding = new pc.Vec4( i3479[93], i3479[94], i3479[95], i3479[96] )
  return i3478
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3486 = root || request.c( 'TMPro.VertexGradient' )
  var i3487 = data
  i3486.topLeft = new pc.Color(i3487[0], i3487[1], i3487[2], i3487[3])
  i3486.topRight = new pc.Color(i3487[4], i3487[5], i3487[6], i3487[7])
  i3486.bottomLeft = new pc.Color(i3487[8], i3487[9], i3487[10], i3487[11])
  i3486.bottomRight = new pc.Color(i3487[12], i3487[13], i3487[14], i3487[15])
  return i3486
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3488 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3489 = data
  i3488.m_ShowMaskGraphic = !!i3489[0]
  return i3488
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3490 = root || request.c( 'AudioController' )
  var i3491 = data
  request.r(i3491[0], i3491[1], 0, i3490, 'bgmSource')
  request.r(i3491[2], i3491[3], 0, i3490, 'sfxSource')
  var i3493 = i3491[4]
  var i3492 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i3493.length; i += 1) {
    i3492.add(request.d('AudioEntry', i3493[i + 0]));
  }
  i3490.audioEntries = i3492
  return i3490
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i3496 = root || request.c( 'AudioEntry' )
  var i3497 = data
  i3496.key = i3497[0]
  request.r(i3497[1], i3497[2], 0, i3496, 'clip')
  i3496.volume = i3497[3]
  return i3496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3499 = data
  i3498.ambientIntensity = i3499[0]
  i3498.reflectionIntensity = i3499[1]
  i3498.ambientMode = i3499[2]
  i3498.ambientLight = new pc.Color(i3499[3], i3499[4], i3499[5], i3499[6])
  i3498.ambientSkyColor = new pc.Color(i3499[7], i3499[8], i3499[9], i3499[10])
  i3498.ambientGroundColor = new pc.Color(i3499[11], i3499[12], i3499[13], i3499[14])
  i3498.ambientEquatorColor = new pc.Color(i3499[15], i3499[16], i3499[17], i3499[18])
  i3498.fogColor = new pc.Color(i3499[19], i3499[20], i3499[21], i3499[22])
  i3498.fogEndDistance = i3499[23]
  i3498.fogStartDistance = i3499[24]
  i3498.fogDensity = i3499[25]
  i3498.fog = !!i3499[26]
  request.r(i3499[27], i3499[28], 0, i3498, 'skybox')
  i3498.fogMode = i3499[29]
  var i3501 = i3499[30]
  var i3500 = []
  for(var i = 0; i < i3501.length; i += 1) {
    i3500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3501[i + 0]) );
  }
  i3498.lightmaps = i3500
  i3498.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3499[31], i3498.lightProbes)
  i3498.lightmapsMode = i3499[32]
  i3498.mixedBakeMode = i3499[33]
  i3498.environmentLightingMode = i3499[34]
  i3498.ambientProbe = new pc.SphericalHarmonicsL2(i3499[35])
  i3498.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3499[36])
  i3498.useReferenceAmbientProbe = !!i3499[37]
  request.r(i3499[38], i3499[39], 0, i3498, 'customReflection')
  request.r(i3499[40], i3499[41], 0, i3498, 'defaultReflection')
  i3498.defaultReflectionMode = i3499[42]
  i3498.defaultReflectionResolution = i3499[43]
  i3498.sunLightObjectId = i3499[44]
  i3498.pixelLightCount = i3499[45]
  i3498.defaultReflectionHDR = !!i3499[46]
  i3498.hasLightDataAsset = !!i3499[47]
  i3498.hasManualGenerate = !!i3499[48]
  return i3498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3505 = data
  request.r(i3505[0], i3505[1], 0, i3504, 'lightmapColor')
  request.r(i3505[2], i3505[3], 0, i3504, 'lightmapDirection')
  return i3504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3506 = root || new UnityEngine.LightProbes()
  var i3507 = data
  return i3506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3515 = data
  var i3517 = i3515[0]
  var i3516 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3517.length; i += 1) {
    i3516.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3517[i + 0]));
  }
  i3514.ShaderCompilationErrors = i3516
  i3514.name = i3515[1]
  i3514.guid = i3515[2]
  var i3519 = i3515[3]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 1) {
    i3518.push( i3519[i + 0] );
  }
  i3514.shaderDefinedKeywords = i3518
  var i3521 = i3515[4]
  var i3520 = []
  for(var i = 0; i < i3521.length; i += 1) {
    i3520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3521[i + 0]) );
  }
  i3514.passes = i3520
  var i3523 = i3515[5]
  var i3522 = []
  for(var i = 0; i < i3523.length; i += 1) {
    i3522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3523[i + 0]) );
  }
  i3514.usePasses = i3522
  var i3525 = i3515[6]
  var i3524 = []
  for(var i = 0; i < i3525.length; i += 1) {
    i3524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3525[i + 0]) );
  }
  i3514.defaultParameterValues = i3524
  request.r(i3515[7], i3515[8], 0, i3514, 'unityFallbackShader')
  i3514.readDepth = !!i3515[9]
  i3514.isCreatedByShaderGraph = !!i3515[10]
  i3514.disableBatching = !!i3515[11]
  i3514.compiled = !!i3515[12]
  return i3514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3529 = data
  i3528.shaderName = i3529[0]
  i3528.errorMessage = i3529[1]
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3532 = root || new pc.UnityShaderPass()
  var i3533 = data
  i3532.id = i3533[0]
  i3532.subShaderIndex = i3533[1]
  i3532.name = i3533[2]
  i3532.passType = i3533[3]
  i3532.grabPassTextureName = i3533[4]
  i3532.usePass = !!i3533[5]
  i3532.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3533[6], i3532.zTest)
  i3532.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3533[7], i3532.zWrite)
  i3532.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3533[8], i3532.culling)
  i3532.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3533[9], i3532.blending)
  i3532.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3533[10], i3532.alphaBlending)
  i3532.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3533[11], i3532.colorWriteMask)
  i3532.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3533[12], i3532.offsetUnits)
  i3532.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3533[13], i3532.offsetFactor)
  i3532.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3533[14], i3532.stencilRef)
  i3532.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3533[15], i3532.stencilReadMask)
  i3532.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3533[16], i3532.stencilWriteMask)
  i3532.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3533[17], i3532.stencilOp)
  i3532.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3533[18], i3532.stencilOpFront)
  i3532.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3533[19], i3532.stencilOpBack)
  var i3535 = i3533[20]
  var i3534 = []
  for(var i = 0; i < i3535.length; i += 1) {
    i3534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3535[i + 0]) );
  }
  i3532.tags = i3534
  var i3537 = i3533[21]
  var i3536 = []
  for(var i = 0; i < i3537.length; i += 1) {
    i3536.push( i3537[i + 0] );
  }
  i3532.passDefinedKeywords = i3536
  var i3539 = i3533[22]
  var i3538 = []
  for(var i = 0; i < i3539.length; i += 1) {
    i3538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3539[i + 0]) );
  }
  i3532.passDefinedKeywordGroups = i3538
  var i3541 = i3533[23]
  var i3540 = []
  for(var i = 0; i < i3541.length; i += 1) {
    i3540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3541[i + 0]) );
  }
  i3532.variants = i3540
  var i3543 = i3533[24]
  var i3542 = []
  for(var i = 0; i < i3543.length; i += 1) {
    i3542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3543[i + 0]) );
  }
  i3532.excludedVariants = i3542
  i3532.hasDepthReader = !!i3533[25]
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3545 = data
  i3544.val = i3545[0]
  i3544.name = i3545[1]
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3547 = data
  i3546.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3547[0], i3546.src)
  i3546.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3547[1], i3546.dst)
  i3546.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3547[2], i3546.op)
  return i3546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3549 = data
  i3548.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3549[0], i3548.pass)
  i3548.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3549[1], i3548.fail)
  i3548.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3549[2], i3548.zFail)
  i3548.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3549[3], i3548.comp)
  return i3548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3553 = data
  i3552.name = i3553[0]
  i3552.value = i3553[1]
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3557 = data
  var i3559 = i3557[0]
  var i3558 = []
  for(var i = 0; i < i3559.length; i += 1) {
    i3558.push( i3559[i + 0] );
  }
  i3556.keywords = i3558
  i3556.hasDiscard = !!i3557[1]
  return i3556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3563 = data
  i3562.passId = i3563[0]
  i3562.subShaderIndex = i3563[1]
  var i3565 = i3563[2]
  var i3564 = []
  for(var i = 0; i < i3565.length; i += 1) {
    i3564.push( i3565[i + 0] );
  }
  i3562.keywords = i3564
  i3562.vertexProgram = i3563[3]
  i3562.fragmentProgram = i3563[4]
  i3562.exportedForWebGl2 = !!i3563[5]
  i3562.readDepth = !!i3563[6]
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3569 = data
  request.r(i3569[0], i3569[1], 0, i3568, 'shader')
  i3568.pass = i3569[2]
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3573 = data
  i3572.name = i3573[0]
  i3572.type = i3573[1]
  i3572.value = new pc.Vec4( i3573[2], i3573[3], i3573[4], i3573[5] )
  i3572.textureValue = i3573[6]
  i3572.shaderPropertyFlag = i3573[7]
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3575 = data
  i3574.name = i3575[0]
  request.r(i3575[1], i3575[2], 0, i3574, 'texture')
  i3574.aabb = i3575[3]
  i3574.vertices = i3575[4]
  i3574.triangles = i3575[5]
  i3574.textureRect = UnityEngine.Rect.MinMaxRect(i3575[6], i3575[7], i3575[8], i3575[9])
  i3574.packedRect = UnityEngine.Rect.MinMaxRect(i3575[10], i3575[11], i3575[12], i3575[13])
  i3574.border = new pc.Vec4( i3575[14], i3575[15], i3575[16], i3575[17] )
  i3574.transparency = i3575[18]
  i3574.bounds = i3575[19]
  i3574.pixelsPerUnit = i3575[20]
  i3574.textureWidth = i3575[21]
  i3574.textureHeight = i3575[22]
  i3574.nativeSize = new pc.Vec2( i3575[23], i3575[24] )
  i3574.pivot = new pc.Vec2( i3575[25], i3575[26] )
  i3574.textureRectOffset = new pc.Vec2( i3575[27], i3575[28] )
  return i3574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3577 = data
  i3576.name = i3577[0]
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3579 = data
  i3578.name = i3579[0]
  i3578.ascent = i3579[1]
  i3578.originalLineHeight = i3579[2]
  i3578.fontSize = i3579[3]
  var i3581 = i3579[4]
  var i3580 = []
  for(var i = 0; i < i3581.length; i += 1) {
    i3580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3581[i + 0]) );
  }
  i3578.characterInfo = i3580
  request.r(i3579[5], i3579[6], 0, i3578, 'texture')
  i3578.originalFontSize = i3579[7]
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3585 = data
  i3584.index = i3585[0]
  i3584.advance = i3585[1]
  i3584.bearing = i3585[2]
  i3584.glyphWidth = i3585[3]
  i3584.glyphHeight = i3585[4]
  i3584.minX = i3585[5]
  i3584.maxX = i3585[6]
  i3584.minY = i3585[7]
  i3584.maxY = i3585[8]
  i3584.uvBottomLeftX = i3585[9]
  i3584.uvBottomLeftY = i3585[10]
  i3584.uvBottomRightX = i3585[11]
  i3584.uvBottomRightY = i3585[12]
  i3584.uvTopLeftX = i3585[13]
  i3584.uvTopLeftY = i3585[14]
  i3584.uvTopRightX = i3585[15]
  i3584.uvTopRightY = i3585[16]
  return i3584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3587 = data
  i3586.name = i3587[0]
  i3586.bytes64 = i3587[1]
  i3586.data = i3587[2]
  return i3586
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3588 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3589 = data
  var i3591 = i3589[0]
  var i3590 = []
  for(var i = 0; i < i3591.length; i += 2) {
  request.r(i3591[i + 0], i3591[i + 1], 2, i3590, '')
  }
  i3588.atlasAssets = i3590
  i3588.scale = i3589[1]
  request.r(i3589[2], i3589[3], 0, i3588, 'skeletonJSON')
  i3588.isUpgradingBlendModeMaterials = !!i3589[4]
  i3588.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3589[5], i3588.blendModeMaterials)
  var i3593 = i3589[6]
  var i3592 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3593.length; i += 2) {
  request.r(i3593[i + 0], i3593[i + 1], 1, i3592, '')
  }
  i3588.skeletonDataModifiers = i3592
  var i3595 = i3589[7]
  var i3594 = []
  for(var i = 0; i < i3595.length; i += 1) {
    i3594.push( i3595[i + 0] );
  }
  i3588.fromAnimation = i3594
  var i3597 = i3589[8]
  var i3596 = []
  for(var i = 0; i < i3597.length; i += 1) {
    i3596.push( i3597[i + 0] );
  }
  i3588.toAnimation = i3596
  i3588.duration = i3589[9]
  i3588.defaultMix = i3589[10]
  request.r(i3589[11], i3589[12], 0, i3588, 'controller')
  return i3588
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3600 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3601 = data
  i3600.applyAdditiveMaterial = !!i3601[0]
  var i3603 = i3601[1]
  var i3602 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3603.length; i += 1) {
    i3602.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3603[i + 0]));
  }
  i3600.additiveMaterials = i3602
  var i3605 = i3601[2]
  var i3604 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3605.length; i += 1) {
    i3604.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3605[i + 0]));
  }
  i3600.multiplyMaterials = i3604
  var i3607 = i3601[3]
  var i3606 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3607.length; i += 1) {
    i3606.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3607[i + 0]));
  }
  i3600.screenMaterials = i3606
  i3600.requiresBlendModeMaterials = !!i3601[4]
  return i3600
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3610 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3611 = data
  i3610.pageName = i3611[0]
  request.r(i3611[1], i3611[2], 0, i3610, 'material')
  return i3610
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3614 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3615 = data
  request.r(i3615[0], i3615[1], 0, i3614, 'atlasFile')
  var i3617 = i3615[2]
  var i3616 = []
  for(var i = 0; i < i3617.length; i += 2) {
  request.r(i3617[i + 0], i3617[i + 1], 2, i3616, '')
  }
  i3614.materials = i3616
  i3614.textureLoadingMode = i3615[3]
  request.r(i3615[4], i3615[5], 0, i3614, 'onDemandTextureLoader')
  return i3614
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3618 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3619 = data
  request.r(i3619[0], i3619[1], 0, i3618, 'atlas')
  i3618.normalStyle = i3619[2]
  i3618.normalSpacingOffset = i3619[3]
  i3618.boldStyle = i3619[4]
  i3618.boldSpacing = i3619[5]
  i3618.italicStyle = i3619[6]
  i3618.tabSize = i3619[7]
  i3618.hashCode = i3619[8]
  request.r(i3619[9], i3619[10], 0, i3618, 'material')
  i3618.materialHashCode = i3619[11]
  i3618.m_Version = i3619[12]
  i3618.m_SourceFontFileGUID = i3619[13]
  request.r(i3619[14], i3619[15], 0, i3618, 'm_SourceFontFile_EditorRef')
  request.r(i3619[16], i3619[17], 0, i3618, 'm_SourceFontFile')
  i3618.m_AtlasPopulationMode = i3619[18]
  i3618.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3619[19], i3618.m_FaceInfo)
  var i3621 = i3619[20]
  var i3620 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3621.length; i += 1) {
    i3620.add(request.d('UnityEngine.TextCore.Glyph', i3621[i + 0]));
  }
  i3618.m_GlyphTable = i3620
  var i3623 = i3619[21]
  var i3622 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3623.length; i += 1) {
    i3622.add(request.d('TMPro.TMP_Character', i3623[i + 0]));
  }
  i3618.m_CharacterTable = i3622
  var i3625 = i3619[22]
  var i3624 = []
  for(var i = 0; i < i3625.length; i += 2) {
  request.r(i3625[i + 0], i3625[i + 1], 2, i3624, '')
  }
  i3618.m_AtlasTextures = i3624
  i3618.m_AtlasTextureIndex = i3619[23]
  i3618.m_IsMultiAtlasTexturesEnabled = !!i3619[24]
  i3618.m_ClearDynamicDataOnBuild = !!i3619[25]
  var i3627 = i3619[26]
  var i3626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3627.length; i += 1) {
    i3626.add(request.d('UnityEngine.TextCore.GlyphRect', i3627[i + 0]));
  }
  i3618.m_UsedGlyphRects = i3626
  var i3629 = i3619[27]
  var i3628 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3629.length; i += 1) {
    i3628.add(request.d('UnityEngine.TextCore.GlyphRect', i3629[i + 0]));
  }
  i3618.m_FreeGlyphRects = i3628
  i3618.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3619[28], i3618.m_fontInfo)
  i3618.m_AtlasWidth = i3619[29]
  i3618.m_AtlasHeight = i3619[30]
  i3618.m_AtlasPadding = i3619[31]
  i3618.m_AtlasRenderMode = i3619[32]
  var i3631 = i3619[33]
  var i3630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3631.length; i += 1) {
    i3630.add(request.d('TMPro.TMP_Glyph', i3631[i + 0]));
  }
  i3618.m_glyphInfoList = i3630
  i3618.m_KerningTable = request.d('TMPro.KerningTable', i3619[34], i3618.m_KerningTable)
  i3618.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3619[35], i3618.m_FontFeatureTable)
  var i3633 = i3619[36]
  var i3632 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3633.length; i += 2) {
  request.r(i3633[i + 0], i3633[i + 1], 1, i3632, '')
  }
  i3618.fallbackFontAssets = i3632
  var i3635 = i3619[37]
  var i3634 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3635.length; i += 2) {
  request.r(i3635[i + 0], i3635[i + 1], 1, i3634, '')
  }
  i3618.m_FallbackFontAssetTable = i3634
  i3618.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3619[38], i3618.m_CreationSettings)
  var i3637 = i3619[39]
  var i3636 = []
  for(var i = 0; i < i3637.length; i += 1) {
    i3636.push( request.d('TMPro.TMP_FontWeightPair', i3637[i + 0]) );
  }
  i3618.m_FontWeightTable = i3636
  var i3639 = i3619[40]
  var i3638 = []
  for(var i = 0; i < i3639.length; i += 1) {
    i3638.push( request.d('TMPro.TMP_FontWeightPair', i3639[i + 0]) );
  }
  i3618.fontWeights = i3638
  return i3618
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3640 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3641 = data
  i3640.m_FaceIndex = i3641[0]
  i3640.m_FamilyName = i3641[1]
  i3640.m_StyleName = i3641[2]
  i3640.m_PointSize = i3641[3]
  i3640.m_Scale = i3641[4]
  i3640.m_UnitsPerEM = i3641[5]
  i3640.m_LineHeight = i3641[6]
  i3640.m_AscentLine = i3641[7]
  i3640.m_CapLine = i3641[8]
  i3640.m_MeanLine = i3641[9]
  i3640.m_Baseline = i3641[10]
  i3640.m_DescentLine = i3641[11]
  i3640.m_SuperscriptOffset = i3641[12]
  i3640.m_SuperscriptSize = i3641[13]
  i3640.m_SubscriptOffset = i3641[14]
  i3640.m_SubscriptSize = i3641[15]
  i3640.m_UnderlineOffset = i3641[16]
  i3640.m_UnderlineThickness = i3641[17]
  i3640.m_StrikethroughOffset = i3641[18]
  i3640.m_StrikethroughThickness = i3641[19]
  i3640.m_TabWidth = i3641[20]
  return i3640
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3644 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3645 = data
  i3644.m_Index = i3645[0]
  i3644.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3645[1], i3644.m_Metrics)
  i3644.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3645[2], i3644.m_GlyphRect)
  i3644.m_Scale = i3645[3]
  i3644.m_AtlasIndex = i3645[4]
  i3644.m_ClassDefinitionType = i3645[5]
  return i3644
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3646 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3647 = data
  i3646.m_Width = i3647[0]
  i3646.m_Height = i3647[1]
  i3646.m_HorizontalBearingX = i3647[2]
  i3646.m_HorizontalBearingY = i3647[3]
  i3646.m_HorizontalAdvance = i3647[4]
  return i3646
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3648 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3649 = data
  i3648.m_X = i3649[0]
  i3648.m_Y = i3649[1]
  i3648.m_Width = i3649[2]
  i3648.m_Height = i3649[3]
  return i3648
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3652 = root || request.c( 'TMPro.TMP_Character' )
  var i3653 = data
  i3652.m_ElementType = i3653[0]
  i3652.m_Unicode = i3653[1]
  i3652.m_GlyphIndex = i3653[2]
  i3652.m_Scale = i3653[3]
  return i3652
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3658 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3659 = data
  i3658.Name = i3659[0]
  i3658.PointSize = i3659[1]
  i3658.Scale = i3659[2]
  i3658.CharacterCount = i3659[3]
  i3658.LineHeight = i3659[4]
  i3658.Baseline = i3659[5]
  i3658.Ascender = i3659[6]
  i3658.CapHeight = i3659[7]
  i3658.Descender = i3659[8]
  i3658.CenterLine = i3659[9]
  i3658.SuperscriptOffset = i3659[10]
  i3658.SubscriptOffset = i3659[11]
  i3658.SubSize = i3659[12]
  i3658.Underline = i3659[13]
  i3658.UnderlineThickness = i3659[14]
  i3658.strikethrough = i3659[15]
  i3658.strikethroughThickness = i3659[16]
  i3658.TabWidth = i3659[17]
  i3658.Padding = i3659[18]
  i3658.AtlasWidth = i3659[19]
  i3658.AtlasHeight = i3659[20]
  return i3658
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3662 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3663 = data
  i3662.id = i3663[0]
  i3662.x = i3663[1]
  i3662.y = i3663[2]
  i3662.width = i3663[3]
  i3662.height = i3663[4]
  i3662.xOffset = i3663[5]
  i3662.yOffset = i3663[6]
  i3662.xAdvance = i3663[7]
  i3662.scale = i3663[8]
  return i3662
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3664 = root || request.c( 'TMPro.KerningTable' )
  var i3665 = data
  var i3667 = i3665[0]
  var i3666 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3667.length; i += 1) {
    i3666.add(request.d('TMPro.KerningPair', i3667[i + 0]));
  }
  i3664.kerningPairs = i3666
  return i3664
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3670 = root || request.c( 'TMPro.KerningPair' )
  var i3671 = data
  i3670.xOffset = i3671[0]
  i3670.m_FirstGlyph = i3671[1]
  i3670.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3671[2], i3670.m_FirstGlyphAdjustments)
  i3670.m_SecondGlyph = i3671[3]
  i3670.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3671[4], i3670.m_SecondGlyphAdjustments)
  i3670.m_IgnoreSpacingAdjustments = !!i3671[5]
  return i3670
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3672 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3673 = data
  var i3675 = i3673[0]
  var i3674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3675.length; i += 1) {
    i3674.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3675[i + 0]));
  }
  i3672.m_GlyphPairAdjustmentRecords = i3674
  return i3672
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3678 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3679 = data
  i3678.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3679[0], i3678.m_FirstAdjustmentRecord)
  i3678.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3679[1], i3678.m_SecondAdjustmentRecord)
  i3678.m_FeatureLookupFlags = i3679[2]
  return i3678
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3682 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3683 = data
  i3682.sourceFontFileName = i3683[0]
  i3682.sourceFontFileGUID = i3683[1]
  i3682.pointSizeSamplingMode = i3683[2]
  i3682.pointSize = i3683[3]
  i3682.padding = i3683[4]
  i3682.packingMode = i3683[5]
  i3682.atlasWidth = i3683[6]
  i3682.atlasHeight = i3683[7]
  i3682.characterSetSelectionMode = i3683[8]
  i3682.characterSequence = i3683[9]
  i3682.referencedFontAssetGUID = i3683[10]
  i3682.referencedTextAssetGUID = i3683[11]
  i3682.fontStyle = i3683[12]
  i3682.fontStyleModifier = i3683[13]
  i3682.renderMode = i3683[14]
  i3682.includeFontFeatures = !!i3683[15]
  return i3682
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3686 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3687 = data
  request.r(i3687[0], i3687[1], 0, i3686, 'regularTypeface')
  request.r(i3687[2], i3687[3], 0, i3686, 'italicTypeface')
  return i3686
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3688 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3689 = data
  i3688.useSafeMode = !!i3689[0]
  i3688.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3689[1], i3688.safeModeOptions)
  i3688.timeScale = i3689[2]
  i3688.unscaledTimeScale = i3689[3]
  i3688.useSmoothDeltaTime = !!i3689[4]
  i3688.maxSmoothUnscaledTime = i3689[5]
  i3688.rewindCallbackMode = i3689[6]
  i3688.showUnityEditorReport = !!i3689[7]
  i3688.logBehaviour = i3689[8]
  i3688.drawGizmos = !!i3689[9]
  i3688.defaultRecyclable = !!i3689[10]
  i3688.defaultAutoPlay = i3689[11]
  i3688.defaultUpdateType = i3689[12]
  i3688.defaultTimeScaleIndependent = !!i3689[13]
  i3688.defaultEaseType = i3689[14]
  i3688.defaultEaseOvershootOrAmplitude = i3689[15]
  i3688.defaultEasePeriod = i3689[16]
  i3688.defaultAutoKill = !!i3689[17]
  i3688.defaultLoopType = i3689[18]
  i3688.debugMode = !!i3689[19]
  i3688.debugStoreTargetId = !!i3689[20]
  i3688.showPreviewPanel = !!i3689[21]
  i3688.storeSettingsLocation = i3689[22]
  i3688.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3689[23], i3688.modules)
  i3688.createASMDEF = !!i3689[24]
  i3688.showPlayingTweens = !!i3689[25]
  i3688.showPausedTweens = !!i3689[26]
  return i3688
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3690 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3691 = data
  i3690.logBehaviour = i3691[0]
  i3690.nestedTweenFailureBehaviour = i3691[1]
  return i3690
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3692 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3693 = data
  i3692.showPanel = !!i3693[0]
  i3692.audioEnabled = !!i3693[1]
  i3692.physicsEnabled = !!i3693[2]
  i3692.physics2DEnabled = !!i3693[3]
  i3692.spriteEnabled = !!i3693[4]
  i3692.uiEnabled = !!i3693[5]
  i3692.textMeshProEnabled = !!i3693[6]
  i3692.tk2DEnabled = !!i3693[7]
  i3692.deAudioEnabled = !!i3693[8]
  i3692.deUnityExtendedEnabled = !!i3693[9]
  i3692.epoOutlineEnabled = !!i3693[10]
  return i3692
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3694 = root || request.c( 'TMPro.TMP_Settings' )
  var i3695 = data
  i3694.m_enableWordWrapping = !!i3695[0]
  i3694.m_enableKerning = !!i3695[1]
  i3694.m_enableExtraPadding = !!i3695[2]
  i3694.m_enableTintAllSprites = !!i3695[3]
  i3694.m_enableParseEscapeCharacters = !!i3695[4]
  i3694.m_EnableRaycastTarget = !!i3695[5]
  i3694.m_GetFontFeaturesAtRuntime = !!i3695[6]
  i3694.m_missingGlyphCharacter = i3695[7]
  i3694.m_warningsDisabled = !!i3695[8]
  request.r(i3695[9], i3695[10], 0, i3694, 'm_defaultFontAsset')
  i3694.m_defaultFontAssetPath = i3695[11]
  i3694.m_defaultFontSize = i3695[12]
  i3694.m_defaultAutoSizeMinRatio = i3695[13]
  i3694.m_defaultAutoSizeMaxRatio = i3695[14]
  i3694.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3695[15], i3695[16] )
  i3694.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3695[17], i3695[18] )
  i3694.m_autoSizeTextContainer = !!i3695[19]
  i3694.m_IsTextObjectScaleStatic = !!i3695[20]
  var i3697 = i3695[21]
  var i3696 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3697.length; i += 2) {
  request.r(i3697[i + 0], i3697[i + 1], 1, i3696, '')
  }
  i3694.m_fallbackFontAssets = i3696
  i3694.m_matchMaterialPreset = !!i3695[22]
  request.r(i3695[23], i3695[24], 0, i3694, 'm_defaultSpriteAsset')
  i3694.m_defaultSpriteAssetPath = i3695[25]
  i3694.m_enableEmojiSupport = !!i3695[26]
  i3694.m_MissingCharacterSpriteUnicode = i3695[27]
  i3694.m_defaultColorGradientPresetsPath = i3695[28]
  request.r(i3695[29], i3695[30], 0, i3694, 'm_defaultStyleSheet')
  i3694.m_StyleSheetsResourcePath = i3695[31]
  request.r(i3695[32], i3695[33], 0, i3694, 'm_leadingCharacters')
  request.r(i3695[34], i3695[35], 0, i3694, 'm_followingCharacters')
  i3694.m_UseModernHangulLineBreakingRules = !!i3695[36]
  return i3694
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3698 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3699 = data
  request.r(i3699[0], i3699[1], 0, i3698, 'spriteSheet')
  var i3701 = i3699[2]
  var i3700 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3701.length; i += 1) {
    i3700.add(request.d('TMPro.TMP_Sprite', i3701[i + 0]));
  }
  i3698.spriteInfoList = i3700
  var i3703 = i3699[3]
  var i3702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3703.length; i += 2) {
  request.r(i3703[i + 0], i3703[i + 1], 1, i3702, '')
  }
  i3698.fallbackSpriteAssets = i3702
  i3698.hashCode = i3699[4]
  request.r(i3699[5], i3699[6], 0, i3698, 'material')
  i3698.materialHashCode = i3699[7]
  i3698.m_Version = i3699[8]
  i3698.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3699[9], i3698.m_FaceInfo)
  var i3705 = i3699[10]
  var i3704 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3705.length; i += 1) {
    i3704.add(request.d('TMPro.TMP_SpriteCharacter', i3705[i + 0]));
  }
  i3698.m_SpriteCharacterTable = i3704
  var i3707 = i3699[11]
  var i3706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3707.length; i += 1) {
    i3706.add(request.d('TMPro.TMP_SpriteGlyph', i3707[i + 0]));
  }
  i3698.m_SpriteGlyphTable = i3706
  return i3698
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3710 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3711 = data
  i3710.name = i3711[0]
  i3710.hashCode = i3711[1]
  i3710.unicode = i3711[2]
  i3710.pivot = new pc.Vec2( i3711[3], i3711[4] )
  request.r(i3711[5], i3711[6], 0, i3710, 'sprite')
  i3710.id = i3711[7]
  i3710.x = i3711[8]
  i3710.y = i3711[9]
  i3710.width = i3711[10]
  i3710.height = i3711[11]
  i3710.xOffset = i3711[12]
  i3710.yOffset = i3711[13]
  i3710.xAdvance = i3711[14]
  i3710.scale = i3711[15]
  return i3710
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3716 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3717 = data
  i3716.m_Name = i3717[0]
  i3716.m_HashCode = i3717[1]
  i3716.m_ElementType = i3717[2]
  i3716.m_Unicode = i3717[3]
  i3716.m_GlyphIndex = i3717[4]
  i3716.m_Scale = i3717[5]
  return i3716
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3720 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3721 = data
  request.r(i3721[0], i3721[1], 0, i3720, 'sprite')
  i3720.m_Index = i3721[2]
  i3720.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3721[3], i3720.m_Metrics)
  i3720.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3721[4], i3720.m_GlyphRect)
  i3720.m_Scale = i3721[5]
  i3720.m_AtlasIndex = i3721[6]
  i3720.m_ClassDefinitionType = i3721[7]
  return i3720
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3722 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3723 = data
  var i3725 = i3723[0]
  var i3724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3725.length; i += 1) {
    i3724.add(request.d('TMPro.TMP_Style', i3725[i + 0]));
  }
  i3722.m_StyleList = i3724
  return i3722
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3728 = root || request.c( 'TMPro.TMP_Style' )
  var i3729 = data
  i3728.m_Name = i3729[0]
  i3728.m_HashCode = i3729[1]
  i3728.m_OpeningDefinition = i3729[2]
  i3728.m_ClosingDefinition = i3729[3]
  i3728.m_OpeningTagArray = i3729[4]
  i3728.m_ClosingTagArray = i3729[5]
  i3728.m_OpeningTagUnicodeArray = i3729[6]
  i3728.m_ClosingTagUnicodeArray = i3729[7]
  return i3728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3731 = data
  var i3733 = i3731[0]
  var i3732 = []
  for(var i = 0; i < i3733.length; i += 1) {
    i3732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3733[i + 0]) );
  }
  i3730.files = i3732
  i3730.componentToPrefabIds = i3731[1]
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3737 = data
  i3736.path = i3737[0]
  request.r(i3737[1], i3737[2], 0, i3736, 'unityObject')
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3739 = data
  var i3741 = i3739[0]
  var i3740 = []
  for(var i = 0; i < i3741.length; i += 1) {
    i3740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3741[i + 0]) );
  }
  i3738.scriptsExecutionOrder = i3740
  var i3743 = i3739[1]
  var i3742 = []
  for(var i = 0; i < i3743.length; i += 1) {
    i3742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3743[i + 0]) );
  }
  i3738.sortingLayers = i3742
  var i3745 = i3739[2]
  var i3744 = []
  for(var i = 0; i < i3745.length; i += 1) {
    i3744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3745[i + 0]) );
  }
  i3738.cullingLayers = i3744
  i3738.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3739[3], i3738.timeSettings)
  i3738.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3739[4], i3738.physicsSettings)
  i3738.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3739[5], i3738.physics2DSettings)
  i3738.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3739[6], i3738.qualitySettings)
  i3738.enableRealtimeShadows = !!i3739[7]
  i3738.enableAutoInstancing = !!i3739[8]
  i3738.enableStaticBatching = !!i3739[9]
  i3738.enableDynamicBatching = !!i3739[10]
  i3738.lightmapEncodingQuality = i3739[11]
  i3738.desiredColorSpace = i3739[12]
  var i3747 = i3739[13]
  var i3746 = []
  for(var i = 0; i < i3747.length; i += 1) {
    i3746.push( i3747[i + 0] );
  }
  i3738.allTags = i3746
  return i3738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3751 = data
  i3750.name = i3751[0]
  i3750.value = i3751[1]
  return i3750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3755 = data
  i3754.id = i3755[0]
  i3754.name = i3755[1]
  i3754.value = i3755[2]
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3759 = data
  i3758.id = i3759[0]
  i3758.name = i3759[1]
  return i3758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3761 = data
  i3760.fixedDeltaTime = i3761[0]
  i3760.maximumDeltaTime = i3761[1]
  i3760.timeScale = i3761[2]
  i3760.maximumParticleTimestep = i3761[3]
  return i3760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3763 = data
  i3762.gravity = new pc.Vec3( i3763[0], i3763[1], i3763[2] )
  i3762.defaultSolverIterations = i3763[3]
  i3762.bounceThreshold = i3763[4]
  i3762.autoSyncTransforms = !!i3763[5]
  i3762.autoSimulation = !!i3763[6]
  var i3765 = i3763[7]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 1) {
    i3764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3765[i + 0]) );
  }
  i3762.collisionMatrix = i3764
  return i3762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3769 = data
  i3768.enabled = !!i3769[0]
  i3768.layerId = i3769[1]
  i3768.otherLayerId = i3769[2]
  return i3768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3771 = data
  request.r(i3771[0], i3771[1], 0, i3770, 'material')
  i3770.gravity = new pc.Vec2( i3771[2], i3771[3] )
  i3770.positionIterations = i3771[4]
  i3770.velocityIterations = i3771[5]
  i3770.velocityThreshold = i3771[6]
  i3770.maxLinearCorrection = i3771[7]
  i3770.maxAngularCorrection = i3771[8]
  i3770.maxTranslationSpeed = i3771[9]
  i3770.maxRotationSpeed = i3771[10]
  i3770.baumgarteScale = i3771[11]
  i3770.baumgarteTOIScale = i3771[12]
  i3770.timeToSleep = i3771[13]
  i3770.linearSleepTolerance = i3771[14]
  i3770.angularSleepTolerance = i3771[15]
  i3770.defaultContactOffset = i3771[16]
  i3770.autoSimulation = !!i3771[17]
  i3770.queriesHitTriggers = !!i3771[18]
  i3770.queriesStartInColliders = !!i3771[19]
  i3770.callbacksOnDisable = !!i3771[20]
  i3770.reuseCollisionCallbacks = !!i3771[21]
  i3770.autoSyncTransforms = !!i3771[22]
  var i3773 = i3771[23]
  var i3772 = []
  for(var i = 0; i < i3773.length; i += 1) {
    i3772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3773[i + 0]) );
  }
  i3770.collisionMatrix = i3772
  return i3770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3777 = data
  i3776.enabled = !!i3777[0]
  i3776.layerId = i3777[1]
  i3776.otherLayerId = i3777[2]
  return i3776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3779 = data
  var i3781 = i3779[0]
  var i3780 = []
  for(var i = 0; i < i3781.length; i += 1) {
    i3780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3781[i + 0]) );
  }
  i3778.qualityLevels = i3780
  var i3783 = i3779[1]
  var i3782 = []
  for(var i = 0; i < i3783.length; i += 1) {
    i3782.push( i3783[i + 0] );
  }
  i3778.names = i3782
  i3778.shadows = i3779[2]
  i3778.anisotropicFiltering = i3779[3]
  i3778.antiAliasing = i3779[4]
  i3778.lodBias = i3779[5]
  i3778.shadowCascades = i3779[6]
  i3778.shadowDistance = i3779[7]
  i3778.shadowmaskMode = i3779[8]
  i3778.shadowProjection = i3779[9]
  i3778.shadowResolution = i3779[10]
  i3778.softParticles = !!i3779[11]
  i3778.softVegetation = !!i3779[12]
  i3778.activeColorSpace = i3779[13]
  i3778.desiredColorSpace = i3779[14]
  i3778.masterTextureLimit = i3779[15]
  i3778.maxQueuedFrames = i3779[16]
  i3778.particleRaycastBudget = i3779[17]
  i3778.pixelLightCount = i3779[18]
  i3778.realtimeReflectionProbes = !!i3779[19]
  i3778.shadowCascade2Split = i3779[20]
  i3778.shadowCascade4Split = new pc.Vec3( i3779[21], i3779[22], i3779[23] )
  i3778.streamingMipmapsActive = !!i3779[24]
  i3778.vSyncCount = i3779[25]
  i3778.asyncUploadBufferSize = i3779[26]
  i3778.asyncUploadTimeSlice = i3779[27]
  i3778.billboardsFaceCameraPosition = !!i3779[28]
  i3778.shadowNearPlaneOffset = i3779[29]
  i3778.streamingMipmapsMemoryBudget = i3779[30]
  i3778.maximumLODLevel = i3779[31]
  i3778.streamingMipmapsAddAllCameras = !!i3779[32]
  i3778.streamingMipmapsMaxLevelReduction = i3779[33]
  i3778.streamingMipmapsRenderersPerFrame = i3779[34]
  i3778.resolutionScalingFixedDPIFactor = i3779[35]
  i3778.streamingMipmapsMaxFileIORequests = i3779[36]
  i3778.currentQualityLevel = i3779[37]
  return i3778
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3786 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3787 = data
  i3786.xPlacement = i3787[0]
  i3786.yPlacement = i3787[1]
  i3786.xAdvance = i3787[2]
  i3786.yAdvance = i3787[3]
  return i3786
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3788 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3789 = data
  i3788.m_GlyphIndex = i3789[0]
  i3788.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3789[1], i3788.m_GlyphValueRecord)
  return i3788
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3790 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3791 = data
  i3790.m_XPlacement = i3791[0]
  i3790.m_YPlacement = i3791[1]
  i3790.m_XAdvance = i3791[2]
  i3790.m_YAdvance = i3791[3]
  return i3790
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[3],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[3],"75":[76],"77":[78],"79":[78],"9":[8],"80":[81],"82":[83],"84":[81],"85":[8],"86":[8],"11":[9],"18":[19,8],"87":[8],"10":[9],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"33":[8],"95":[8],"16":[19,8],"96":[8],"97":[8],"98":[8],"99":[8],"100":[19,8],"101":[8],"102":[6],"103":[6],"7":[6],"104":[6],"105":[3],"106":[3],"107":[108],"109":[3],"110":[111],"112":[8],"113":[19,8],"114":[76],"23":[19,8],"115":[116,76],"117":[76],"118":[76,119],"120":[53],"121":[61],"122":[111],"123":[124],"125":[8],"126":[76,8],"17":[8,19],"127":[8],"128":[19,8],"129":[76],"130":[19,8],"131":[8],"132":[81]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DropZone","UnityEngine.PolygonCollider2D","ClickItem","DG.Tweening.DOTweenAnimation","DraggableItem","UnityEngine.CanvasGroup","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "260.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BP_V18_NgocNDL_AnhPD";

Deserializers.lunaAppID = "31727";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1805";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4733";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Minecraft-Clone";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "880fa59b-63ce-40c1-a1ae-c6cf65a4e0f6";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

