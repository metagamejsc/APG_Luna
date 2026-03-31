var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3360 = root || request.c( 'UnityEngine.JointSpring' )
  var i3361 = data
  i3360.spring = i3361[0]
  i3360.damper = i3361[1]
  i3360.targetPosition = i3361[2]
  return i3360
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3362 = root || request.c( 'UnityEngine.JointMotor' )
  var i3363 = data
  i3362.m_TargetVelocity = i3363[0]
  i3362.m_Force = i3363[1]
  i3362.m_FreeSpin = i3363[2]
  return i3362
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3364 = root || request.c( 'UnityEngine.JointLimits' )
  var i3365 = data
  i3364.m_Min = i3365[0]
  i3364.m_Max = i3365[1]
  i3364.m_Bounciness = i3365[2]
  i3364.m_BounceMinVelocity = i3365[3]
  i3364.m_ContactDistance = i3365[4]
  i3364.minBounce = i3365[5]
  i3364.maxBounce = i3365[6]
  return i3364
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3366 = root || request.c( 'UnityEngine.JointDrive' )
  var i3367 = data
  i3366.m_PositionSpring = i3367[0]
  i3366.m_PositionDamper = i3367[1]
  i3366.m_MaximumForce = i3367[2]
  i3366.m_UseAcceleration = i3367[3]
  return i3366
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3368 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3369 = data
  i3368.m_Spring = i3369[0]
  i3368.m_Damper = i3369[1]
  return i3368
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3370 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3371 = data
  i3370.m_Limit = i3371[0]
  i3370.m_Bounciness = i3371[1]
  i3370.m_ContactDistance = i3371[2]
  return i3370
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3372 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3373 = data
  i3372.m_ExtremumSlip = i3373[0]
  i3372.m_ExtremumValue = i3373[1]
  i3372.m_AsymptoteSlip = i3373[2]
  i3372.m_AsymptoteValue = i3373[3]
  i3372.m_Stiffness = i3373[4]
  return i3372
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3374 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3375 = data
  i3374.m_LowerAngle = i3375[0]
  i3374.m_UpperAngle = i3375[1]
  return i3374
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3376 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3377 = data
  i3376.m_MotorSpeed = i3377[0]
  i3376.m_MaximumMotorTorque = i3377[1]
  return i3376
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3378 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3379 = data
  i3378.m_DampingRatio = i3379[0]
  i3378.m_Frequency = i3379[1]
  i3378.m_Angle = i3379[2]
  return i3378
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3380 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3381 = data
  i3380.m_LowerTranslation = i3381[0]
  i3380.m_UpperTranslation = i3381[1]
  return i3380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3383 = data
  i3382.name = i3383[0]
  i3382.width = i3383[1]
  i3382.height = i3383[2]
  i3382.mipmapCount = i3383[3]
  i3382.anisoLevel = i3383[4]
  i3382.filterMode = i3383[5]
  i3382.hdr = !!i3383[6]
  i3382.format = i3383[7]
  i3382.wrapMode = i3383[8]
  i3382.alphaIsTransparency = !!i3383[9]
  i3382.alphaSource = i3383[10]
  i3382.graphicsFormat = i3383[11]
  i3382.sRGBTexture = !!i3383[12]
  i3382.desiredColorSpace = i3383[13]
  i3382.wrapU = i3383[14]
  i3382.wrapV = i3383[15]
  return i3382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3384 = root || new pc.UnityMaterial()
  var i3385 = data
  i3384.name = i3385[0]
  request.r(i3385[1], i3385[2], 0, i3384, 'shader')
  i3384.renderQueue = i3385[3]
  i3384.enableInstancing = !!i3385[4]
  var i3387 = i3385[5]
  var i3386 = []
  for(var i = 0; i < i3387.length; i += 1) {
    i3386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3387[i + 0]) );
  }
  i3384.floatParameters = i3386
  var i3389 = i3385[6]
  var i3388 = []
  for(var i = 0; i < i3389.length; i += 1) {
    i3388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3389[i + 0]) );
  }
  i3384.colorParameters = i3388
  var i3391 = i3385[7]
  var i3390 = []
  for(var i = 0; i < i3391.length; i += 1) {
    i3390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3391[i + 0]) );
  }
  i3384.vectorParameters = i3390
  var i3393 = i3385[8]
  var i3392 = []
  for(var i = 0; i < i3393.length; i += 1) {
    i3392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3393[i + 0]) );
  }
  i3384.textureParameters = i3392
  var i3395 = i3385[9]
  var i3394 = []
  for(var i = 0; i < i3395.length; i += 1) {
    i3394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3395[i + 0]) );
  }
  i3384.materialFlags = i3394
  return i3384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3399 = data
  i3398.name = i3399[0]
  i3398.value = i3399[1]
  return i3398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3403 = data
  i3402.name = i3403[0]
  i3402.value = new pc.Color(i3403[1], i3403[2], i3403[3], i3403[4])
  return i3402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3407 = data
  i3406.name = i3407[0]
  i3406.value = new pc.Vec4( i3407[1], i3407[2], i3407[3], i3407[4] )
  return i3406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3411 = data
  i3410.name = i3411[0]
  request.r(i3411[1], i3411[2], 0, i3410, 'value')
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3415 = data
  i3414.name = i3415[0]
  i3414.enabled = !!i3415[1]
  return i3414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3417 = data
  i3416.name = i3417[0]
  i3416.index = i3417[1]
  i3416.startup = !!i3417[2]
  return i3416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3419 = data
  i3418.position = new pc.Vec3( i3419[0], i3419[1], i3419[2] )
  i3418.scale = new pc.Vec3( i3419[3], i3419[4], i3419[5] )
  i3418.rotation = new pc.Quat(i3419[6], i3419[7], i3419[8], i3419[9])
  return i3418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3421 = data
  i3420.aspect = i3421[0]
  i3420.orthographic = !!i3421[1]
  i3420.orthographicSize = i3421[2]
  i3420.backgroundColor = new pc.Color(i3421[3], i3421[4], i3421[5], i3421[6])
  i3420.nearClipPlane = i3421[7]
  i3420.farClipPlane = i3421[8]
  i3420.fieldOfView = i3421[9]
  i3420.depth = i3421[10]
  i3420.clearFlags = i3421[11]
  i3420.cullingMask = i3421[12]
  i3420.rect = i3421[13]
  request.r(i3421[14], i3421[15], 0, i3420, 'targetTexture')
  i3420.usePhysicalProperties = !!i3421[16]
  i3420.focalLength = i3421[17]
  i3420.sensorSize = new pc.Vec2( i3421[18], i3421[19] )
  i3420.lensShift = new pc.Vec2( i3421[20], i3421[21] )
  i3420.gateFit = i3421[22]
  i3420.commandBufferCount = i3421[23]
  i3420.cameraType = i3421[24]
  i3420.enabled = !!i3421[25]
  return i3420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3423 = data
  i3422.name = i3423[0]
  i3422.tagId = i3423[1]
  i3422.enabled = !!i3423[2]
  i3422.isStatic = !!i3423[3]
  i3422.layer = i3423[4]
  return i3422
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3424 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3425 = data
  request.r(i3425[0], i3425[1], 0, i3424, 'm_FirstSelected')
  i3424.m_sendNavigationEvents = !!i3425[2]
  i3424.m_DragThreshold = i3425[3]
  return i3424
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3426 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3427 = data
  i3426.m_HorizontalAxis = i3427[0]
  i3426.m_VerticalAxis = i3427[1]
  i3426.m_SubmitButton = i3427[2]
  i3426.m_CancelButton = i3427[3]
  i3426.m_InputActionsPerSecond = i3427[4]
  i3426.m_RepeatDelay = i3427[5]
  i3426.m_ForceModuleActive = !!i3427[6]
  i3426.m_SendPointerHoverToParent = !!i3427[7]
  return i3426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3429 = data
  i3428.pivot = new pc.Vec2( i3429[0], i3429[1] )
  i3428.anchorMin = new pc.Vec2( i3429[2], i3429[3] )
  i3428.anchorMax = new pc.Vec2( i3429[4], i3429[5] )
  i3428.sizeDelta = new pc.Vec2( i3429[6], i3429[7] )
  i3428.anchoredPosition3D = new pc.Vec3( i3429[8], i3429[9], i3429[10] )
  i3428.rotation = new pc.Quat(i3429[11], i3429[12], i3429[13], i3429[14])
  i3428.scale = new pc.Vec3( i3429[15], i3429[16], i3429[17] )
  return i3428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3431 = data
  i3430.planeDistance = i3431[0]
  i3430.referencePixelsPerUnit = i3431[1]
  i3430.isFallbackOverlay = !!i3431[2]
  i3430.renderMode = i3431[3]
  i3430.renderOrder = i3431[4]
  i3430.sortingLayerName = i3431[5]
  i3430.sortingOrder = i3431[6]
  i3430.scaleFactor = i3431[7]
  request.r(i3431[8], i3431[9], 0, i3430, 'worldCamera')
  i3430.overrideSorting = !!i3431[10]
  i3430.pixelPerfect = !!i3431[11]
  i3430.targetDisplay = i3431[12]
  i3430.overridePixelPerfect = !!i3431[13]
  i3430.enabled = !!i3431[14]
  return i3430
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3432 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3433 = data
  i3432.m_UiScaleMode = i3433[0]
  i3432.m_ReferencePixelsPerUnit = i3433[1]
  i3432.m_ScaleFactor = i3433[2]
  i3432.m_ReferenceResolution = new pc.Vec2( i3433[3], i3433[4] )
  i3432.m_ScreenMatchMode = i3433[5]
  i3432.m_MatchWidthOrHeight = i3433[6]
  i3432.m_PhysicalUnit = i3433[7]
  i3432.m_FallbackScreenDPI = i3433[8]
  i3432.m_DefaultSpriteDPI = i3433[9]
  i3432.m_DynamicPixelsPerUnit = i3433[10]
  i3432.m_PresetInfoIsWorld = !!i3433[11]
  return i3432
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3434 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3435 = data
  i3434.m_IgnoreReversedGraphics = !!i3435[0]
  i3434.m_BlockingObjects = i3435[1]
  i3434.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3435[2] )
  return i3434
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i3436 = root || request.c( 'LunaManager' )
  var i3437 = data
  var i3439 = i3437[0]
  var i3438 = []
  for(var i = 0; i < i3439.length; i += 2) {
  request.r(i3439[i + 0], i3439[i + 1], 2, i3438, '')
  }
  i3436.lstBtnInstall = i3438
  request.r(i3437[1], i3437[2], 0, i3436, 'WinGO')
  request.r(i3437[3], i3437[4], 0, i3436, 'LoseGO')
  request.r(i3437[5], i3437[6], 0, i3436, 'StartCard')
  request.r(i3437[7], i3437[8], 0, i3436, 'EndCard')
  request.r(i3437[9], i3437[10], 0, i3436, 'Parent')
  i3436.isDrag = !!i3437[11]
  i3436.timeDrag = i3437[12]
  i3436.countPlay = i3437[13]
  i3436.countPlayFinal = i3437[14]
  i3436.countPlayMax = i3437[15]
  i3436.timeDropFinal = i3437[16]
  i3436.colorBG = new pc.Color(i3437[17], i3437[18], i3437[19], i3437[20])
  request.r(i3437[21], i3437[22], 0, i3436, 'texture2D')
  request.r(i3437[23], i3437[24], 0, i3436, 'rawImageBG')
  request.r(i3437[25], i3437[26], 0, i3436, 'MSSGroom')
  request.r(i3437[27], i3437[28], 0, i3436, 'MSSBride')
  request.r(i3437[29], i3437[30], 0, i3436, 'textProgess')
  request.r(i3437[31], i3437[32], 0, i3436, 'imgProgess')
  request.r(i3437[33], i3437[34], 0, i3436, 'timeText')
  return i3436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3443 = data
  i3442.cullTransparentMesh = !!i3443[0]
  return i3442
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3444 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3445 = data
  request.r(i3445[0], i3445[1], 0, i3444, 'm_Texture')
  i3444.m_UVRect = UnityEngine.Rect.MinMaxRect(i3445[2], i3445[3], i3445[4], i3445[5])
  i3444.m_Maskable = !!i3445[6]
  request.r(i3445[7], i3445[8], 0, i3444, 'm_Material')
  i3444.m_Color = new pc.Color(i3445[9], i3445[10], i3445[11], i3445[12])
  i3444.m_RaycastTarget = !!i3445[13]
  i3444.m_RaycastPadding = new pc.Vec4( i3445[14], i3445[15], i3445[16], i3445[17] )
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3447 = data
  request.r(i3447[0], i3447[1], 0, i3446, 'clip')
  request.r(i3447[2], i3447[3], 0, i3446, 'outputAudioMixerGroup')
  i3446.playOnAwake = !!i3447[4]
  i3446.loop = !!i3447[5]
  i3446.time = i3447[6]
  i3446.volume = i3447[7]
  i3446.pitch = i3447[8]
  i3446.enabled = !!i3447[9]
  return i3446
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3448 = root || request.c( 'UnityEngine.UI.Image' )
  var i3449 = data
  request.r(i3449[0], i3449[1], 0, i3448, 'm_Sprite')
  i3448.m_Type = i3449[2]
  i3448.m_PreserveAspect = !!i3449[3]
  i3448.m_FillCenter = !!i3449[4]
  i3448.m_FillMethod = i3449[5]
  i3448.m_FillAmount = i3449[6]
  i3448.m_FillClockwise = !!i3449[7]
  i3448.m_FillOrigin = i3449[8]
  i3448.m_UseSpriteMesh = !!i3449[9]
  i3448.m_PixelsPerUnitMultiplier = i3449[10]
  i3448.m_Maskable = !!i3449[11]
  request.r(i3449[12], i3449[13], 0, i3448, 'm_Material')
  i3448.m_Color = new pc.Color(i3449[14], i3449[15], i3449[16], i3449[17])
  i3448.m_RaycastTarget = !!i3449[18]
  i3448.m_RaycastPadding = new pc.Vec4( i3449[19], i3449[20], i3449[21], i3449[22] )
  return i3448
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i3450 = root || request.c( 'ClickItem' )
  var i3451 = data
  var i3453 = i3451[0]
  var i3452 = []
  for(var i = 0; i < i3453.length; i += 2) {
  request.r(i3453[i + 0], i3453[i + 1], 2, i3452, '')
  }
  i3450.steps = i3452
  i3450.currentStep = i3451[1]
  i3450.isProcess = !!i3451[2]
  return i3450
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3456 = root || request.c( 'UnityEngine.UI.Button' )
  var i3457 = data
  i3456.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3457[0], i3456.m_OnClick)
  i3456.m_Navigation = request.d('UnityEngine.UI.Navigation', i3457[1], i3456.m_Navigation)
  i3456.m_Transition = i3457[2]
  i3456.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3457[3], i3456.m_Colors)
  i3456.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3457[4], i3456.m_SpriteState)
  i3456.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3457[5], i3456.m_AnimationTriggers)
  i3456.m_Interactable = !!i3457[6]
  request.r(i3457[7], i3457[8], 0, i3456, 'm_TargetGraphic')
  return i3456
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3458 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3459 = data
  i3458.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3459[0], i3458.m_PersistentCalls)
  return i3458
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3460 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3461 = data
  var i3463 = i3461[0]
  var i3462 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3463.length; i += 1) {
    i3462.add(request.d('UnityEngine.Events.PersistentCall', i3463[i + 0]));
  }
  i3460.m_Calls = i3462
  return i3460
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3466 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3467 = data
  request.r(i3467[0], i3467[1], 0, i3466, 'm_Target')
  i3466.m_TargetAssemblyTypeName = i3467[2]
  i3466.m_MethodName = i3467[3]
  i3466.m_Mode = i3467[4]
  i3466.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3467[5], i3466.m_Arguments)
  i3466.m_CallState = i3467[6]
  return i3466
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3468 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3469 = data
  i3468.m_Mode = i3469[0]
  i3468.m_WrapAround = !!i3469[1]
  request.r(i3469[2], i3469[3], 0, i3468, 'm_SelectOnUp')
  request.r(i3469[4], i3469[5], 0, i3468, 'm_SelectOnDown')
  request.r(i3469[6], i3469[7], 0, i3468, 'm_SelectOnLeft')
  request.r(i3469[8], i3469[9], 0, i3468, 'm_SelectOnRight')
  return i3468
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3470 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3471 = data
  i3470.m_NormalColor = new pc.Color(i3471[0], i3471[1], i3471[2], i3471[3])
  i3470.m_HighlightedColor = new pc.Color(i3471[4], i3471[5], i3471[6], i3471[7])
  i3470.m_PressedColor = new pc.Color(i3471[8], i3471[9], i3471[10], i3471[11])
  i3470.m_SelectedColor = new pc.Color(i3471[12], i3471[13], i3471[14], i3471[15])
  i3470.m_DisabledColor = new pc.Color(i3471[16], i3471[17], i3471[18], i3471[19])
  i3470.m_ColorMultiplier = i3471[20]
  i3470.m_FadeDuration = i3471[21]
  return i3470
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3472 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3473 = data
  request.r(i3473[0], i3473[1], 0, i3472, 'm_HighlightedSprite')
  request.r(i3473[2], i3473[3], 0, i3472, 'm_PressedSprite')
  request.r(i3473[4], i3473[5], 0, i3472, 'm_SelectedSprite')
  request.r(i3473[6], i3473[7], 0, i3472, 'm_DisabledSprite')
  return i3472
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3474 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3475 = data
  i3474.m_NormalTrigger = i3475[0]
  i3474.m_HighlightedTrigger = i3475[1]
  i3474.m_PressedTrigger = i3475[2]
  i3474.m_SelectedTrigger = i3475[3]
  i3474.m_DisabledTrigger = i3475[4]
  return i3474
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i3476 = root || request.c( 'DraggableItem' )
  var i3477 = data
  i3476.idDrag = i3477[0]
  i3476.isProcess = !!i3477[1]
  i3476.isLose = !!i3477[2]
  i3476.isHide = !!i3477[3]
  return i3476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3479 = data
  i3478.m_Alpha = i3479[0]
  i3478.m_Interactable = !!i3479[1]
  i3478.m_BlocksRaycasts = !!i3479[2]
  i3478.m_IgnoreParentGroups = !!i3479[3]
  i3478.enabled = !!i3479[4]
  return i3478
}

Deserializers["DropZone"] = function (request, data, root) {
  var i3480 = root || request.c( 'DropZone' )
  var i3481 = data
  i3480.idDrop = i3481[0]
  var i3483 = i3481[1]
  var i3482 = []
  for(var i = 0; i < i3483.length; i += 2) {
  request.r(i3483[i + 0], i3483[i + 1], 2, i3482, '')
  }
  i3480.steps = i3482
  request.r(i3481[2], i3481[3], 0, i3480, 'stepLose')
  return i3480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3485 = data
  i3484.usedByComposite = !!i3485[0]
  i3484.autoTiling = !!i3485[1]
  var i3487 = i3485[2]
  var i3486 = []
  for(var i = 0; i < i3487.length; i += 1) {
  var i3489 = i3487[i + 0]
  var i3488 = []
  for(var i = 0; i < i3489.length; i += 2) {
    i3488.push( new pc.Vec2( i3489[i + 0], i3489[i + 1] ) );
  }
    i3486.push( i3488 );
  }
  i3484.points = i3486
  i3484.enabled = !!i3485[3]
  i3484.isTrigger = !!i3485[4]
  i3484.usedByEffector = !!i3485[5]
  i3484.density = i3485[6]
  i3484.offset = new pc.Vec2( i3485[7], i3485[8] )
  request.r(i3485[9], i3485[10], 0, i3484, 'material')
  return i3484
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i3496 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i3497 = data
  request.r(i3497[0], i3497[1], 0, i3496, 'skeletonDataAsset')
  request.r(i3497[2], i3497[3], 0, i3496, 'additiveMaterial')
  request.r(i3497[4], i3497[5], 0, i3496, 'multiplyMaterial')
  request.r(i3497[6], i3497[7], 0, i3496, 'screenMaterial')
  i3496.initialSkinName = i3497[8]
  i3496.initialFlipX = !!i3497[9]
  i3496.initialFlipY = !!i3497[10]
  i3496.startingAnimation = i3497[11]
  i3496.startingLoop = !!i3497[12]
  i3496.timeScale = i3497[13]
  i3496.freeze = !!i3497[14]
  i3496.layoutScaleMode = i3497[15]
  i3496.updateWhenInvisible = i3497[16]
  i3496.allowMultipleCanvasRenderers = !!i3497[17]
  var i3499 = i3497[18]
  var i3498 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i3499.length; i += 2) {
  request.r(i3499[i + 0], i3499[i + 1], 1, i3498, '')
  }
  i3496.canvasRenderers = i3498
  i3496.enableSeparatorSlots = !!i3497[19]
  i3496.updateSeparatorPartLocation = !!i3497[20]
  i3496.updateSeparatorPartScale = !!i3497[21]
  i3496.disableMeshAssignmentOnOverride = !!i3497[22]
  i3496.referenceSize = new pc.Vec2( i3497[23], i3497[24] )
  i3496.referenceScale = i3497[25]
  i3496.rectTransformSize = new pc.Vec2( i3497[26], i3497[27] )
  i3496.editReferenceRect = !!i3497[28]
  var i3501 = i3497[29]
  var i3500 = []
  for(var i = 0; i < i3501.length; i += 1) {
    i3500.push( i3501[i + 0] );
  }
  i3496.separatorSlotNames = i3500
  var i3503 = i3497[30]
  var i3502 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3503.length; i += 2) {
  request.r(i3503[i + 0], i3503[i + 1], 1, i3502, '')
  }
  i3496.separatorParts = i3502
  i3496.meshGenerator = request.d('Spine.Unity.MeshGenerator', i3497[31], i3496.meshGenerator)
  i3496.updateTiming = i3497[32]
  i3496.unscaledTime = !!i3497[33]
  i3496.m_Maskable = !!i3497[34]
  request.r(i3497[35], i3497[36], 0, i3496, 'm_Material')
  i3496.m_Color = new pc.Color(i3497[37], i3497[38], i3497[39], i3497[40])
  i3496.m_RaycastTarget = !!i3497[41]
  i3496.m_RaycastPadding = new pc.Vec4( i3497[42], i3497[43], i3497[44], i3497[45] )
  return i3496
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i3510 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i3511 = data
  i3510.settings = request.d('Spine.Unity.MeshGenerator+Settings', i3511[0], i3510.settings)
  return i3510
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i3512 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i3513 = data
  i3512.useClipping = !!i3513[0]
  i3512.zSpacing = i3513[1]
  i3512.pmaVertexColors = !!i3513[2]
  i3512.tintBlack = !!i3513[3]
  i3512.canvasGroupTintBlack = !!i3513[4]
  i3512.calculateTangents = !!i3513[5]
  i3512.addNormals = !!i3513[6]
  i3512.immutableTriangles = !!i3513[7]
  return i3512
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3514 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3515 = data
  i3514.targetIsSelf = !!i3515[0]
  request.r(i3515[1], i3515[2], 0, i3514, 'targetGO')
  i3514.tweenTargetIsTargetGO = !!i3515[3]
  i3514.delay = i3515[4]
  i3514.duration = i3515[5]
  i3514.easeType = i3515[6]
  i3514.easeCurve = new pc.AnimationCurve( { keys_flow: i3515[7] } )
  i3514.loopType = i3515[8]
  i3514.loops = i3515[9]
  i3514.id = i3515[10]
  i3514.isRelative = !!i3515[11]
  i3514.isFrom = !!i3515[12]
  i3514.isIndependentUpdate = !!i3515[13]
  i3514.autoKill = !!i3515[14]
  i3514.autoGenerate = !!i3515[15]
  i3514.isActive = !!i3515[16]
  i3514.isValid = !!i3515[17]
  request.r(i3515[18], i3515[19], 0, i3514, 'target')
  i3514.animationType = i3515[20]
  i3514.targetType = i3515[21]
  i3514.forcedTargetType = i3515[22]
  i3514.autoPlay = !!i3515[23]
  i3514.useTargetAsV3 = !!i3515[24]
  i3514.endValueFloat = i3515[25]
  i3514.endValueV3 = new pc.Vec3( i3515[26], i3515[27], i3515[28] )
  i3514.endValueV2 = new pc.Vec2( i3515[29], i3515[30] )
  i3514.endValueColor = new pc.Color(i3515[31], i3515[32], i3515[33], i3515[34])
  i3514.endValueString = i3515[35]
  i3514.endValueRect = UnityEngine.Rect.MinMaxRect(i3515[36], i3515[37], i3515[38], i3515[39])
  request.r(i3515[40], i3515[41], 0, i3514, 'endValueTransform')
  i3514.optionalBool0 = !!i3515[42]
  i3514.optionalBool1 = !!i3515[43]
  i3514.optionalFloat0 = i3515[44]
  i3514.optionalInt0 = i3515[45]
  i3514.optionalRotationMode = i3515[46]
  i3514.optionalScrambleMode = i3515[47]
  i3514.optionalShakeRandomnessMode = i3515[48]
  i3514.optionalString = i3515[49]
  i3514.updateType = i3515[50]
  i3514.isSpeedBased = !!i3515[51]
  i3514.hasOnStart = !!i3515[52]
  i3514.hasOnPlay = !!i3515[53]
  i3514.hasOnUpdate = !!i3515[54]
  i3514.hasOnStepComplete = !!i3515[55]
  i3514.hasOnComplete = !!i3515[56]
  i3514.hasOnTweenCreated = !!i3515[57]
  i3514.hasOnRewind = !!i3515[58]
  i3514.onStart = request.d('UnityEngine.Events.UnityEvent', i3515[59], i3514.onStart)
  i3514.onPlay = request.d('UnityEngine.Events.UnityEvent', i3515[60], i3514.onPlay)
  i3514.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3515[61], i3514.onUpdate)
  i3514.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3515[62], i3514.onStepComplete)
  i3514.onComplete = request.d('UnityEngine.Events.UnityEvent', i3515[63], i3514.onComplete)
  i3514.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3515[64], i3514.onTweenCreated)
  i3514.onRewind = request.d('UnityEngine.Events.UnityEvent', i3515[65], i3514.onRewind)
  return i3514
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3516 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3517 = data
  i3516.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3517[0], i3516.m_PersistentCalls)
  return i3516
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3518 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3519 = data
  request.r(i3519[0], i3519[1], 0, i3518, 'm_ObjectArgument')
  i3518.m_ObjectArgumentAssemblyTypeName = i3519[2]
  i3518.m_IntArgument = i3519[3]
  i3518.m_FloatArgument = i3519[4]
  i3518.m_StringArgument = i3519[5]
  i3518.m_BoolArgument = !!i3519[6]
  return i3518
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i3520 = root || request.c( 'MixSkeletonSkin' )
  var i3521 = data
  request.r(i3521[0], i3521[1], 0, i3520, 'skeletonAnimation')
  var i3523 = i3521[2]
  var i3522 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i3523.length; i += 1) {
    i3522.add(i3523[i + 0]);
  }
  i3520.skinNames = i3522
  i3520.defaultAnim = i3521[3]
  return i3520
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3526 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3527 = data
  i3526.m_hasFontAssetChanged = !!i3527[0]
  request.r(i3527[1], i3527[2], 0, i3526, 'm_baseMaterial')
  i3526.m_maskOffset = new pc.Vec4( i3527[3], i3527[4], i3527[5], i3527[6] )
  i3526.m_text = i3527[7]
  i3526.m_isRightToLeft = !!i3527[8]
  request.r(i3527[9], i3527[10], 0, i3526, 'm_fontAsset')
  request.r(i3527[11], i3527[12], 0, i3526, 'm_sharedMaterial')
  var i3529 = i3527[13]
  var i3528 = []
  for(var i = 0; i < i3529.length; i += 2) {
  request.r(i3529[i + 0], i3529[i + 1], 2, i3528, '')
  }
  i3526.m_fontSharedMaterials = i3528
  request.r(i3527[14], i3527[15], 0, i3526, 'm_fontMaterial')
  var i3531 = i3527[16]
  var i3530 = []
  for(var i = 0; i < i3531.length; i += 2) {
  request.r(i3531[i + 0], i3531[i + 1], 2, i3530, '')
  }
  i3526.m_fontMaterials = i3530
  i3526.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3527[17], i3527[18], i3527[19], i3527[20])
  i3526.m_fontColor = new pc.Color(i3527[21], i3527[22], i3527[23], i3527[24])
  i3526.m_enableVertexGradient = !!i3527[25]
  i3526.m_colorMode = i3527[26]
  i3526.m_fontColorGradient = request.d('TMPro.VertexGradient', i3527[27], i3526.m_fontColorGradient)
  request.r(i3527[28], i3527[29], 0, i3526, 'm_fontColorGradientPreset')
  request.r(i3527[30], i3527[31], 0, i3526, 'm_spriteAsset')
  i3526.m_tintAllSprites = !!i3527[32]
  request.r(i3527[33], i3527[34], 0, i3526, 'm_StyleSheet')
  i3526.m_TextStyleHashCode = i3527[35]
  i3526.m_overrideHtmlColors = !!i3527[36]
  i3526.m_faceColor = UnityEngine.Color32.ConstructColor(i3527[37], i3527[38], i3527[39], i3527[40])
  i3526.m_fontSize = i3527[41]
  i3526.m_fontSizeBase = i3527[42]
  i3526.m_fontWeight = i3527[43]
  i3526.m_enableAutoSizing = !!i3527[44]
  i3526.m_fontSizeMin = i3527[45]
  i3526.m_fontSizeMax = i3527[46]
  i3526.m_fontStyle = i3527[47]
  i3526.m_HorizontalAlignment = i3527[48]
  i3526.m_VerticalAlignment = i3527[49]
  i3526.m_textAlignment = i3527[50]
  i3526.m_characterSpacing = i3527[51]
  i3526.m_wordSpacing = i3527[52]
  i3526.m_lineSpacing = i3527[53]
  i3526.m_lineSpacingMax = i3527[54]
  i3526.m_paragraphSpacing = i3527[55]
  i3526.m_charWidthMaxAdj = i3527[56]
  i3526.m_enableWordWrapping = !!i3527[57]
  i3526.m_wordWrappingRatios = i3527[58]
  i3526.m_overflowMode = i3527[59]
  request.r(i3527[60], i3527[61], 0, i3526, 'm_linkedTextComponent')
  request.r(i3527[62], i3527[63], 0, i3526, 'parentLinkedComponent')
  i3526.m_enableKerning = !!i3527[64]
  i3526.m_enableExtraPadding = !!i3527[65]
  i3526.checkPaddingRequired = !!i3527[66]
  i3526.m_isRichText = !!i3527[67]
  i3526.m_parseCtrlCharacters = !!i3527[68]
  i3526.m_isOrthographic = !!i3527[69]
  i3526.m_isCullingEnabled = !!i3527[70]
  i3526.m_horizontalMapping = i3527[71]
  i3526.m_verticalMapping = i3527[72]
  i3526.m_uvLineOffset = i3527[73]
  i3526.m_geometrySortingOrder = i3527[74]
  i3526.m_IsTextObjectScaleStatic = !!i3527[75]
  i3526.m_VertexBufferAutoSizeReduction = !!i3527[76]
  i3526.m_useMaxVisibleDescender = !!i3527[77]
  i3526.m_pageToDisplay = i3527[78]
  i3526.m_margin = new pc.Vec4( i3527[79], i3527[80], i3527[81], i3527[82] )
  i3526.m_isUsingLegacyAnimationComponent = !!i3527[83]
  i3526.m_isVolumetricText = !!i3527[84]
  i3526.m_Maskable = !!i3527[85]
  request.r(i3527[86], i3527[87], 0, i3526, 'm_Material')
  i3526.m_Color = new pc.Color(i3527[88], i3527[89], i3527[90], i3527[91])
  i3526.m_RaycastTarget = !!i3527[92]
  i3526.m_RaycastPadding = new pc.Vec4( i3527[93], i3527[94], i3527[95], i3527[96] )
  return i3526
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3534 = root || request.c( 'TMPro.VertexGradient' )
  var i3535 = data
  i3534.topLeft = new pc.Color(i3535[0], i3535[1], i3535[2], i3535[3])
  i3534.topRight = new pc.Color(i3535[4], i3535[5], i3535[6], i3535[7])
  i3534.bottomLeft = new pc.Color(i3535[8], i3535[9], i3535[10], i3535[11])
  i3534.bottomRight = new pc.Color(i3535[12], i3535[13], i3535[14], i3535[15])
  return i3534
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3536 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3537 = data
  i3536.m_ShowMaskGraphic = !!i3537[0]
  return i3536
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3538 = root || request.c( 'AudioController' )
  var i3539 = data
  request.r(i3539[0], i3539[1], 0, i3538, 'bgmSource')
  request.r(i3539[2], i3539[3], 0, i3538, 'sfxSource')
  var i3541 = i3539[4]
  var i3540 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i3541.length; i += 1) {
    i3540.add(request.d('AudioEntry', i3541[i + 0]));
  }
  i3538.audioEntries = i3540
  return i3538
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i3544 = root || request.c( 'AudioEntry' )
  var i3545 = data
  i3544.key = i3545[0]
  request.r(i3545[1], i3545[2], 0, i3544, 'clip')
  i3544.volume = i3545[3]
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3547 = data
  i3546.ambientIntensity = i3547[0]
  i3546.reflectionIntensity = i3547[1]
  i3546.ambientMode = i3547[2]
  i3546.ambientLight = new pc.Color(i3547[3], i3547[4], i3547[5], i3547[6])
  i3546.ambientSkyColor = new pc.Color(i3547[7], i3547[8], i3547[9], i3547[10])
  i3546.ambientGroundColor = new pc.Color(i3547[11], i3547[12], i3547[13], i3547[14])
  i3546.ambientEquatorColor = new pc.Color(i3547[15], i3547[16], i3547[17], i3547[18])
  i3546.fogColor = new pc.Color(i3547[19], i3547[20], i3547[21], i3547[22])
  i3546.fogEndDistance = i3547[23]
  i3546.fogStartDistance = i3547[24]
  i3546.fogDensity = i3547[25]
  i3546.fog = !!i3547[26]
  request.r(i3547[27], i3547[28], 0, i3546, 'skybox')
  i3546.fogMode = i3547[29]
  var i3549 = i3547[30]
  var i3548 = []
  for(var i = 0; i < i3549.length; i += 1) {
    i3548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3549[i + 0]) );
  }
  i3546.lightmaps = i3548
  i3546.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3547[31], i3546.lightProbes)
  i3546.lightmapsMode = i3547[32]
  i3546.mixedBakeMode = i3547[33]
  i3546.environmentLightingMode = i3547[34]
  i3546.ambientProbe = new pc.SphericalHarmonicsL2(i3547[35])
  i3546.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3547[36])
  i3546.useReferenceAmbientProbe = !!i3547[37]
  request.r(i3547[38], i3547[39], 0, i3546, 'customReflection')
  request.r(i3547[40], i3547[41], 0, i3546, 'defaultReflection')
  i3546.defaultReflectionMode = i3547[42]
  i3546.defaultReflectionResolution = i3547[43]
  i3546.sunLightObjectId = i3547[44]
  i3546.pixelLightCount = i3547[45]
  i3546.defaultReflectionHDR = !!i3547[46]
  i3546.hasLightDataAsset = !!i3547[47]
  i3546.hasManualGenerate = !!i3547[48]
  return i3546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3553 = data
  request.r(i3553[0], i3553[1], 0, i3552, 'lightmapColor')
  request.r(i3553[2], i3553[3], 0, i3552, 'lightmapDirection')
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3554 = root || new UnityEngine.LightProbes()
  var i3555 = data
  return i3554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3563 = data
  var i3565 = i3563[0]
  var i3564 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3565.length; i += 1) {
    i3564.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3565[i + 0]));
  }
  i3562.ShaderCompilationErrors = i3564
  i3562.name = i3563[1]
  i3562.guid = i3563[2]
  var i3567 = i3563[3]
  var i3566 = []
  for(var i = 0; i < i3567.length; i += 1) {
    i3566.push( i3567[i + 0] );
  }
  i3562.shaderDefinedKeywords = i3566
  var i3569 = i3563[4]
  var i3568 = []
  for(var i = 0; i < i3569.length; i += 1) {
    i3568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3569[i + 0]) );
  }
  i3562.passes = i3568
  var i3571 = i3563[5]
  var i3570 = []
  for(var i = 0; i < i3571.length; i += 1) {
    i3570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3571[i + 0]) );
  }
  i3562.usePasses = i3570
  var i3573 = i3563[6]
  var i3572 = []
  for(var i = 0; i < i3573.length; i += 1) {
    i3572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3573[i + 0]) );
  }
  i3562.defaultParameterValues = i3572
  request.r(i3563[7], i3563[8], 0, i3562, 'unityFallbackShader')
  i3562.readDepth = !!i3563[9]
  i3562.isCreatedByShaderGraph = !!i3563[10]
  i3562.disableBatching = !!i3563[11]
  i3562.compiled = !!i3563[12]
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3577 = data
  i3576.shaderName = i3577[0]
  i3576.errorMessage = i3577[1]
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3580 = root || new pc.UnityShaderPass()
  var i3581 = data
  i3580.id = i3581[0]
  i3580.subShaderIndex = i3581[1]
  i3580.name = i3581[2]
  i3580.passType = i3581[3]
  i3580.grabPassTextureName = i3581[4]
  i3580.usePass = !!i3581[5]
  i3580.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3581[6], i3580.zTest)
  i3580.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3581[7], i3580.zWrite)
  i3580.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3581[8], i3580.culling)
  i3580.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3581[9], i3580.blending)
  i3580.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3581[10], i3580.alphaBlending)
  i3580.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3581[11], i3580.colorWriteMask)
  i3580.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3581[12], i3580.offsetUnits)
  i3580.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3581[13], i3580.offsetFactor)
  i3580.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3581[14], i3580.stencilRef)
  i3580.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3581[15], i3580.stencilReadMask)
  i3580.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3581[16], i3580.stencilWriteMask)
  i3580.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3581[17], i3580.stencilOp)
  i3580.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3581[18], i3580.stencilOpFront)
  i3580.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3581[19], i3580.stencilOpBack)
  var i3583 = i3581[20]
  var i3582 = []
  for(var i = 0; i < i3583.length; i += 1) {
    i3582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3583[i + 0]) );
  }
  i3580.tags = i3582
  var i3585 = i3581[21]
  var i3584 = []
  for(var i = 0; i < i3585.length; i += 1) {
    i3584.push( i3585[i + 0] );
  }
  i3580.passDefinedKeywords = i3584
  var i3587 = i3581[22]
  var i3586 = []
  for(var i = 0; i < i3587.length; i += 1) {
    i3586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3587[i + 0]) );
  }
  i3580.passDefinedKeywordGroups = i3586
  var i3589 = i3581[23]
  var i3588 = []
  for(var i = 0; i < i3589.length; i += 1) {
    i3588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3589[i + 0]) );
  }
  i3580.variants = i3588
  var i3591 = i3581[24]
  var i3590 = []
  for(var i = 0; i < i3591.length; i += 1) {
    i3590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3591[i + 0]) );
  }
  i3580.excludedVariants = i3590
  i3580.hasDepthReader = !!i3581[25]
  return i3580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3593 = data
  i3592.val = i3593[0]
  i3592.name = i3593[1]
  return i3592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3595 = data
  i3594.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3595[0], i3594.src)
  i3594.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3595[1], i3594.dst)
  i3594.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3595[2], i3594.op)
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3597 = data
  i3596.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3597[0], i3596.pass)
  i3596.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3597[1], i3596.fail)
  i3596.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3597[2], i3596.zFail)
  i3596.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3597[3], i3596.comp)
  return i3596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3601 = data
  i3600.name = i3601[0]
  i3600.value = i3601[1]
  return i3600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3605 = data
  var i3607 = i3605[0]
  var i3606 = []
  for(var i = 0; i < i3607.length; i += 1) {
    i3606.push( i3607[i + 0] );
  }
  i3604.keywords = i3606
  i3604.hasDiscard = !!i3605[1]
  return i3604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3611 = data
  i3610.passId = i3611[0]
  i3610.subShaderIndex = i3611[1]
  var i3613 = i3611[2]
  var i3612 = []
  for(var i = 0; i < i3613.length; i += 1) {
    i3612.push( i3613[i + 0] );
  }
  i3610.keywords = i3612
  i3610.vertexProgram = i3611[3]
  i3610.fragmentProgram = i3611[4]
  i3610.exportedForWebGl2 = !!i3611[5]
  i3610.readDepth = !!i3611[6]
  return i3610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3617 = data
  request.r(i3617[0], i3617[1], 0, i3616, 'shader')
  i3616.pass = i3617[2]
  return i3616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3621 = data
  i3620.name = i3621[0]
  i3620.type = i3621[1]
  i3620.value = new pc.Vec4( i3621[2], i3621[3], i3621[4], i3621[5] )
  i3620.textureValue = i3621[6]
  i3620.shaderPropertyFlag = i3621[7]
  return i3620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3623 = data
  i3622.name = i3623[0]
  request.r(i3623[1], i3623[2], 0, i3622, 'texture')
  i3622.aabb = i3623[3]
  i3622.vertices = i3623[4]
  i3622.triangles = i3623[5]
  i3622.textureRect = UnityEngine.Rect.MinMaxRect(i3623[6], i3623[7], i3623[8], i3623[9])
  i3622.packedRect = UnityEngine.Rect.MinMaxRect(i3623[10], i3623[11], i3623[12], i3623[13])
  i3622.border = new pc.Vec4( i3623[14], i3623[15], i3623[16], i3623[17] )
  i3622.transparency = i3623[18]
  i3622.bounds = i3623[19]
  i3622.pixelsPerUnit = i3623[20]
  i3622.textureWidth = i3623[21]
  i3622.textureHeight = i3623[22]
  i3622.nativeSize = new pc.Vec2( i3623[23], i3623[24] )
  i3622.pivot = new pc.Vec2( i3623[25], i3623[26] )
  i3622.textureRectOffset = new pc.Vec2( i3623[27], i3623[28] )
  return i3622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3625 = data
  i3624.name = i3625[0]
  return i3624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3627 = data
  i3626.name = i3627[0]
  i3626.ascent = i3627[1]
  i3626.originalLineHeight = i3627[2]
  i3626.fontSize = i3627[3]
  var i3629 = i3627[4]
  var i3628 = []
  for(var i = 0; i < i3629.length; i += 1) {
    i3628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3629[i + 0]) );
  }
  i3626.characterInfo = i3628
  request.r(i3627[5], i3627[6], 0, i3626, 'texture')
  i3626.originalFontSize = i3627[7]
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3633 = data
  i3632.index = i3633[0]
  i3632.advance = i3633[1]
  i3632.bearing = i3633[2]
  i3632.glyphWidth = i3633[3]
  i3632.glyphHeight = i3633[4]
  i3632.minX = i3633[5]
  i3632.maxX = i3633[6]
  i3632.minY = i3633[7]
  i3632.maxY = i3633[8]
  i3632.uvBottomLeftX = i3633[9]
  i3632.uvBottomLeftY = i3633[10]
  i3632.uvBottomRightX = i3633[11]
  i3632.uvBottomRightY = i3633[12]
  i3632.uvTopLeftX = i3633[13]
  i3632.uvTopLeftY = i3633[14]
  i3632.uvTopRightX = i3633[15]
  i3632.uvTopRightY = i3633[16]
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3635 = data
  i3634.name = i3635[0]
  i3634.bytes64 = i3635[1]
  i3634.data = i3635[2]
  return i3634
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3636 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3637 = data
  var i3639 = i3637[0]
  var i3638 = []
  for(var i = 0; i < i3639.length; i += 2) {
  request.r(i3639[i + 0], i3639[i + 1], 2, i3638, '')
  }
  i3636.atlasAssets = i3638
  i3636.scale = i3637[1]
  request.r(i3637[2], i3637[3], 0, i3636, 'skeletonJSON')
  i3636.isUpgradingBlendModeMaterials = !!i3637[4]
  i3636.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3637[5], i3636.blendModeMaterials)
  var i3641 = i3637[6]
  var i3640 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3641.length; i += 2) {
  request.r(i3641[i + 0], i3641[i + 1], 1, i3640, '')
  }
  i3636.skeletonDataModifiers = i3640
  var i3643 = i3637[7]
  var i3642 = []
  for(var i = 0; i < i3643.length; i += 1) {
    i3642.push( i3643[i + 0] );
  }
  i3636.fromAnimation = i3642
  var i3645 = i3637[8]
  var i3644 = []
  for(var i = 0; i < i3645.length; i += 1) {
    i3644.push( i3645[i + 0] );
  }
  i3636.toAnimation = i3644
  i3636.duration = i3637[9]
  i3636.defaultMix = i3637[10]
  request.r(i3637[11], i3637[12], 0, i3636, 'controller')
  return i3636
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3648 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3649 = data
  i3648.applyAdditiveMaterial = !!i3649[0]
  var i3651 = i3649[1]
  var i3650 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3651.length; i += 1) {
    i3650.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3651[i + 0]));
  }
  i3648.additiveMaterials = i3650
  var i3653 = i3649[2]
  var i3652 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3653.length; i += 1) {
    i3652.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3653[i + 0]));
  }
  i3648.multiplyMaterials = i3652
  var i3655 = i3649[3]
  var i3654 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3655.length; i += 1) {
    i3654.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3655[i + 0]));
  }
  i3648.screenMaterials = i3654
  i3648.requiresBlendModeMaterials = !!i3649[4]
  return i3648
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3658 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3659 = data
  i3658.pageName = i3659[0]
  request.r(i3659[1], i3659[2], 0, i3658, 'material')
  return i3658
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3662 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3663 = data
  request.r(i3663[0], i3663[1], 0, i3662, 'atlasFile')
  var i3665 = i3663[2]
  var i3664 = []
  for(var i = 0; i < i3665.length; i += 2) {
  request.r(i3665[i + 0], i3665[i + 1], 2, i3664, '')
  }
  i3662.materials = i3664
  i3662.textureLoadingMode = i3663[3]
  request.r(i3663[4], i3663[5], 0, i3662, 'onDemandTextureLoader')
  return i3662
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3666 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3667 = data
  request.r(i3667[0], i3667[1], 0, i3666, 'atlas')
  i3666.normalStyle = i3667[2]
  i3666.normalSpacingOffset = i3667[3]
  i3666.boldStyle = i3667[4]
  i3666.boldSpacing = i3667[5]
  i3666.italicStyle = i3667[6]
  i3666.tabSize = i3667[7]
  i3666.hashCode = i3667[8]
  request.r(i3667[9], i3667[10], 0, i3666, 'material')
  i3666.materialHashCode = i3667[11]
  i3666.m_Version = i3667[12]
  i3666.m_SourceFontFileGUID = i3667[13]
  request.r(i3667[14], i3667[15], 0, i3666, 'm_SourceFontFile_EditorRef')
  request.r(i3667[16], i3667[17], 0, i3666, 'm_SourceFontFile')
  i3666.m_AtlasPopulationMode = i3667[18]
  i3666.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3667[19], i3666.m_FaceInfo)
  var i3669 = i3667[20]
  var i3668 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3669.length; i += 1) {
    i3668.add(request.d('UnityEngine.TextCore.Glyph', i3669[i + 0]));
  }
  i3666.m_GlyphTable = i3668
  var i3671 = i3667[21]
  var i3670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3671.length; i += 1) {
    i3670.add(request.d('TMPro.TMP_Character', i3671[i + 0]));
  }
  i3666.m_CharacterTable = i3670
  var i3673 = i3667[22]
  var i3672 = []
  for(var i = 0; i < i3673.length; i += 2) {
  request.r(i3673[i + 0], i3673[i + 1], 2, i3672, '')
  }
  i3666.m_AtlasTextures = i3672
  i3666.m_AtlasTextureIndex = i3667[23]
  i3666.m_IsMultiAtlasTexturesEnabled = !!i3667[24]
  i3666.m_ClearDynamicDataOnBuild = !!i3667[25]
  var i3675 = i3667[26]
  var i3674 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3675.length; i += 1) {
    i3674.add(request.d('UnityEngine.TextCore.GlyphRect', i3675[i + 0]));
  }
  i3666.m_UsedGlyphRects = i3674
  var i3677 = i3667[27]
  var i3676 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3677.length; i += 1) {
    i3676.add(request.d('UnityEngine.TextCore.GlyphRect', i3677[i + 0]));
  }
  i3666.m_FreeGlyphRects = i3676
  i3666.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3667[28], i3666.m_fontInfo)
  i3666.m_AtlasWidth = i3667[29]
  i3666.m_AtlasHeight = i3667[30]
  i3666.m_AtlasPadding = i3667[31]
  i3666.m_AtlasRenderMode = i3667[32]
  var i3679 = i3667[33]
  var i3678 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3679.length; i += 1) {
    i3678.add(request.d('TMPro.TMP_Glyph', i3679[i + 0]));
  }
  i3666.m_glyphInfoList = i3678
  i3666.m_KerningTable = request.d('TMPro.KerningTable', i3667[34], i3666.m_KerningTable)
  i3666.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3667[35], i3666.m_FontFeatureTable)
  var i3681 = i3667[36]
  var i3680 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3681.length; i += 2) {
  request.r(i3681[i + 0], i3681[i + 1], 1, i3680, '')
  }
  i3666.fallbackFontAssets = i3680
  var i3683 = i3667[37]
  var i3682 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3683.length; i += 2) {
  request.r(i3683[i + 0], i3683[i + 1], 1, i3682, '')
  }
  i3666.m_FallbackFontAssetTable = i3682
  i3666.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3667[38], i3666.m_CreationSettings)
  var i3685 = i3667[39]
  var i3684 = []
  for(var i = 0; i < i3685.length; i += 1) {
    i3684.push( request.d('TMPro.TMP_FontWeightPair', i3685[i + 0]) );
  }
  i3666.m_FontWeightTable = i3684
  var i3687 = i3667[40]
  var i3686 = []
  for(var i = 0; i < i3687.length; i += 1) {
    i3686.push( request.d('TMPro.TMP_FontWeightPair', i3687[i + 0]) );
  }
  i3666.fontWeights = i3686
  return i3666
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3688 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3689 = data
  i3688.m_FaceIndex = i3689[0]
  i3688.m_FamilyName = i3689[1]
  i3688.m_StyleName = i3689[2]
  i3688.m_PointSize = i3689[3]
  i3688.m_Scale = i3689[4]
  i3688.m_UnitsPerEM = i3689[5]
  i3688.m_LineHeight = i3689[6]
  i3688.m_AscentLine = i3689[7]
  i3688.m_CapLine = i3689[8]
  i3688.m_MeanLine = i3689[9]
  i3688.m_Baseline = i3689[10]
  i3688.m_DescentLine = i3689[11]
  i3688.m_SuperscriptOffset = i3689[12]
  i3688.m_SuperscriptSize = i3689[13]
  i3688.m_SubscriptOffset = i3689[14]
  i3688.m_SubscriptSize = i3689[15]
  i3688.m_UnderlineOffset = i3689[16]
  i3688.m_UnderlineThickness = i3689[17]
  i3688.m_StrikethroughOffset = i3689[18]
  i3688.m_StrikethroughThickness = i3689[19]
  i3688.m_TabWidth = i3689[20]
  return i3688
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3692 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3693 = data
  i3692.m_Index = i3693[0]
  i3692.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3693[1], i3692.m_Metrics)
  i3692.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3693[2], i3692.m_GlyphRect)
  i3692.m_Scale = i3693[3]
  i3692.m_AtlasIndex = i3693[4]
  i3692.m_ClassDefinitionType = i3693[5]
  return i3692
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3694 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3695 = data
  i3694.m_Width = i3695[0]
  i3694.m_Height = i3695[1]
  i3694.m_HorizontalBearingX = i3695[2]
  i3694.m_HorizontalBearingY = i3695[3]
  i3694.m_HorizontalAdvance = i3695[4]
  return i3694
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3696 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3697 = data
  i3696.m_X = i3697[0]
  i3696.m_Y = i3697[1]
  i3696.m_Width = i3697[2]
  i3696.m_Height = i3697[3]
  return i3696
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3700 = root || request.c( 'TMPro.TMP_Character' )
  var i3701 = data
  i3700.m_ElementType = i3701[0]
  i3700.m_Unicode = i3701[1]
  i3700.m_GlyphIndex = i3701[2]
  i3700.m_Scale = i3701[3]
  return i3700
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3706 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3707 = data
  i3706.Name = i3707[0]
  i3706.PointSize = i3707[1]
  i3706.Scale = i3707[2]
  i3706.CharacterCount = i3707[3]
  i3706.LineHeight = i3707[4]
  i3706.Baseline = i3707[5]
  i3706.Ascender = i3707[6]
  i3706.CapHeight = i3707[7]
  i3706.Descender = i3707[8]
  i3706.CenterLine = i3707[9]
  i3706.SuperscriptOffset = i3707[10]
  i3706.SubscriptOffset = i3707[11]
  i3706.SubSize = i3707[12]
  i3706.Underline = i3707[13]
  i3706.UnderlineThickness = i3707[14]
  i3706.strikethrough = i3707[15]
  i3706.strikethroughThickness = i3707[16]
  i3706.TabWidth = i3707[17]
  i3706.Padding = i3707[18]
  i3706.AtlasWidth = i3707[19]
  i3706.AtlasHeight = i3707[20]
  return i3706
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3710 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3711 = data
  i3710.id = i3711[0]
  i3710.x = i3711[1]
  i3710.y = i3711[2]
  i3710.width = i3711[3]
  i3710.height = i3711[4]
  i3710.xOffset = i3711[5]
  i3710.yOffset = i3711[6]
  i3710.xAdvance = i3711[7]
  i3710.scale = i3711[8]
  return i3710
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3712 = root || request.c( 'TMPro.KerningTable' )
  var i3713 = data
  var i3715 = i3713[0]
  var i3714 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3715.length; i += 1) {
    i3714.add(request.d('TMPro.KerningPair', i3715[i + 0]));
  }
  i3712.kerningPairs = i3714
  return i3712
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3718 = root || request.c( 'TMPro.KerningPair' )
  var i3719 = data
  i3718.xOffset = i3719[0]
  i3718.m_FirstGlyph = i3719[1]
  i3718.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3719[2], i3718.m_FirstGlyphAdjustments)
  i3718.m_SecondGlyph = i3719[3]
  i3718.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3719[4], i3718.m_SecondGlyphAdjustments)
  i3718.m_IgnoreSpacingAdjustments = !!i3719[5]
  return i3718
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3720 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3721 = data
  var i3723 = i3721[0]
  var i3722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3723.length; i += 1) {
    i3722.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3723[i + 0]));
  }
  i3720.m_GlyphPairAdjustmentRecords = i3722
  return i3720
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3726 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3727 = data
  i3726.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3727[0], i3726.m_FirstAdjustmentRecord)
  i3726.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3727[1], i3726.m_SecondAdjustmentRecord)
  i3726.m_FeatureLookupFlags = i3727[2]
  return i3726
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3730 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3731 = data
  i3730.sourceFontFileName = i3731[0]
  i3730.sourceFontFileGUID = i3731[1]
  i3730.pointSizeSamplingMode = i3731[2]
  i3730.pointSize = i3731[3]
  i3730.padding = i3731[4]
  i3730.packingMode = i3731[5]
  i3730.atlasWidth = i3731[6]
  i3730.atlasHeight = i3731[7]
  i3730.characterSetSelectionMode = i3731[8]
  i3730.characterSequence = i3731[9]
  i3730.referencedFontAssetGUID = i3731[10]
  i3730.referencedTextAssetGUID = i3731[11]
  i3730.fontStyle = i3731[12]
  i3730.fontStyleModifier = i3731[13]
  i3730.renderMode = i3731[14]
  i3730.includeFontFeatures = !!i3731[15]
  return i3730
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3734 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3735 = data
  request.r(i3735[0], i3735[1], 0, i3734, 'regularTypeface')
  request.r(i3735[2], i3735[3], 0, i3734, 'italicTypeface')
  return i3734
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3736 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3737 = data
  i3736.useSafeMode = !!i3737[0]
  i3736.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3737[1], i3736.safeModeOptions)
  i3736.timeScale = i3737[2]
  i3736.unscaledTimeScale = i3737[3]
  i3736.useSmoothDeltaTime = !!i3737[4]
  i3736.maxSmoothUnscaledTime = i3737[5]
  i3736.rewindCallbackMode = i3737[6]
  i3736.showUnityEditorReport = !!i3737[7]
  i3736.logBehaviour = i3737[8]
  i3736.drawGizmos = !!i3737[9]
  i3736.defaultRecyclable = !!i3737[10]
  i3736.defaultAutoPlay = i3737[11]
  i3736.defaultUpdateType = i3737[12]
  i3736.defaultTimeScaleIndependent = !!i3737[13]
  i3736.defaultEaseType = i3737[14]
  i3736.defaultEaseOvershootOrAmplitude = i3737[15]
  i3736.defaultEasePeriod = i3737[16]
  i3736.defaultAutoKill = !!i3737[17]
  i3736.defaultLoopType = i3737[18]
  i3736.debugMode = !!i3737[19]
  i3736.debugStoreTargetId = !!i3737[20]
  i3736.showPreviewPanel = !!i3737[21]
  i3736.storeSettingsLocation = i3737[22]
  i3736.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3737[23], i3736.modules)
  i3736.createASMDEF = !!i3737[24]
  i3736.showPlayingTweens = !!i3737[25]
  i3736.showPausedTweens = !!i3737[26]
  return i3736
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3738 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3739 = data
  i3738.logBehaviour = i3739[0]
  i3738.nestedTweenFailureBehaviour = i3739[1]
  return i3738
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3740 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3741 = data
  i3740.showPanel = !!i3741[0]
  i3740.audioEnabled = !!i3741[1]
  i3740.physicsEnabled = !!i3741[2]
  i3740.physics2DEnabled = !!i3741[3]
  i3740.spriteEnabled = !!i3741[4]
  i3740.uiEnabled = !!i3741[5]
  i3740.textMeshProEnabled = !!i3741[6]
  i3740.tk2DEnabled = !!i3741[7]
  i3740.deAudioEnabled = !!i3741[8]
  i3740.deUnityExtendedEnabled = !!i3741[9]
  i3740.epoOutlineEnabled = !!i3741[10]
  return i3740
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3742 = root || request.c( 'TMPro.TMP_Settings' )
  var i3743 = data
  i3742.m_enableWordWrapping = !!i3743[0]
  i3742.m_enableKerning = !!i3743[1]
  i3742.m_enableExtraPadding = !!i3743[2]
  i3742.m_enableTintAllSprites = !!i3743[3]
  i3742.m_enableParseEscapeCharacters = !!i3743[4]
  i3742.m_EnableRaycastTarget = !!i3743[5]
  i3742.m_GetFontFeaturesAtRuntime = !!i3743[6]
  i3742.m_missingGlyphCharacter = i3743[7]
  i3742.m_warningsDisabled = !!i3743[8]
  request.r(i3743[9], i3743[10], 0, i3742, 'm_defaultFontAsset')
  i3742.m_defaultFontAssetPath = i3743[11]
  i3742.m_defaultFontSize = i3743[12]
  i3742.m_defaultAutoSizeMinRatio = i3743[13]
  i3742.m_defaultAutoSizeMaxRatio = i3743[14]
  i3742.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3743[15], i3743[16] )
  i3742.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3743[17], i3743[18] )
  i3742.m_autoSizeTextContainer = !!i3743[19]
  i3742.m_IsTextObjectScaleStatic = !!i3743[20]
  var i3745 = i3743[21]
  var i3744 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3745.length; i += 2) {
  request.r(i3745[i + 0], i3745[i + 1], 1, i3744, '')
  }
  i3742.m_fallbackFontAssets = i3744
  i3742.m_matchMaterialPreset = !!i3743[22]
  request.r(i3743[23], i3743[24], 0, i3742, 'm_defaultSpriteAsset')
  i3742.m_defaultSpriteAssetPath = i3743[25]
  i3742.m_enableEmojiSupport = !!i3743[26]
  i3742.m_MissingCharacterSpriteUnicode = i3743[27]
  i3742.m_defaultColorGradientPresetsPath = i3743[28]
  request.r(i3743[29], i3743[30], 0, i3742, 'm_defaultStyleSheet')
  i3742.m_StyleSheetsResourcePath = i3743[31]
  request.r(i3743[32], i3743[33], 0, i3742, 'm_leadingCharacters')
  request.r(i3743[34], i3743[35], 0, i3742, 'm_followingCharacters')
  i3742.m_UseModernHangulLineBreakingRules = !!i3743[36]
  return i3742
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3746 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3747 = data
  request.r(i3747[0], i3747[1], 0, i3746, 'spriteSheet')
  var i3749 = i3747[2]
  var i3748 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3749.length; i += 1) {
    i3748.add(request.d('TMPro.TMP_Sprite', i3749[i + 0]));
  }
  i3746.spriteInfoList = i3748
  var i3751 = i3747[3]
  var i3750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3751.length; i += 2) {
  request.r(i3751[i + 0], i3751[i + 1], 1, i3750, '')
  }
  i3746.fallbackSpriteAssets = i3750
  i3746.hashCode = i3747[4]
  request.r(i3747[5], i3747[6], 0, i3746, 'material')
  i3746.materialHashCode = i3747[7]
  i3746.m_Version = i3747[8]
  i3746.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3747[9], i3746.m_FaceInfo)
  var i3753 = i3747[10]
  var i3752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3753.length; i += 1) {
    i3752.add(request.d('TMPro.TMP_SpriteCharacter', i3753[i + 0]));
  }
  i3746.m_SpriteCharacterTable = i3752
  var i3755 = i3747[11]
  var i3754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3755.length; i += 1) {
    i3754.add(request.d('TMPro.TMP_SpriteGlyph', i3755[i + 0]));
  }
  i3746.m_SpriteGlyphTable = i3754
  return i3746
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3758 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3759 = data
  i3758.name = i3759[0]
  i3758.hashCode = i3759[1]
  i3758.unicode = i3759[2]
  i3758.pivot = new pc.Vec2( i3759[3], i3759[4] )
  request.r(i3759[5], i3759[6], 0, i3758, 'sprite')
  i3758.id = i3759[7]
  i3758.x = i3759[8]
  i3758.y = i3759[9]
  i3758.width = i3759[10]
  i3758.height = i3759[11]
  i3758.xOffset = i3759[12]
  i3758.yOffset = i3759[13]
  i3758.xAdvance = i3759[14]
  i3758.scale = i3759[15]
  return i3758
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3764 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3765 = data
  i3764.m_Name = i3765[0]
  i3764.m_HashCode = i3765[1]
  i3764.m_ElementType = i3765[2]
  i3764.m_Unicode = i3765[3]
  i3764.m_GlyphIndex = i3765[4]
  i3764.m_Scale = i3765[5]
  return i3764
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3768 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3769 = data
  request.r(i3769[0], i3769[1], 0, i3768, 'sprite')
  i3768.m_Index = i3769[2]
  i3768.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3769[3], i3768.m_Metrics)
  i3768.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3769[4], i3768.m_GlyphRect)
  i3768.m_Scale = i3769[5]
  i3768.m_AtlasIndex = i3769[6]
  i3768.m_ClassDefinitionType = i3769[7]
  return i3768
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3770 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3771 = data
  var i3773 = i3771[0]
  var i3772 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3773.length; i += 1) {
    i3772.add(request.d('TMPro.TMP_Style', i3773[i + 0]));
  }
  i3770.m_StyleList = i3772
  return i3770
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3776 = root || request.c( 'TMPro.TMP_Style' )
  var i3777 = data
  i3776.m_Name = i3777[0]
  i3776.m_HashCode = i3777[1]
  i3776.m_OpeningDefinition = i3777[2]
  i3776.m_ClosingDefinition = i3777[3]
  i3776.m_OpeningTagArray = i3777[4]
  i3776.m_ClosingTagArray = i3777[5]
  i3776.m_OpeningTagUnicodeArray = i3777[6]
  i3776.m_ClosingTagUnicodeArray = i3777[7]
  return i3776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3779 = data
  var i3781 = i3779[0]
  var i3780 = []
  for(var i = 0; i < i3781.length; i += 1) {
    i3780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3781[i + 0]) );
  }
  i3778.files = i3780
  i3778.componentToPrefabIds = i3779[1]
  return i3778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3785 = data
  i3784.path = i3785[0]
  request.r(i3785[1], i3785[2], 0, i3784, 'unityObject')
  return i3784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3787 = data
  var i3789 = i3787[0]
  var i3788 = []
  for(var i = 0; i < i3789.length; i += 1) {
    i3788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3789[i + 0]) );
  }
  i3786.scriptsExecutionOrder = i3788
  var i3791 = i3787[1]
  var i3790 = []
  for(var i = 0; i < i3791.length; i += 1) {
    i3790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3791[i + 0]) );
  }
  i3786.sortingLayers = i3790
  var i3793 = i3787[2]
  var i3792 = []
  for(var i = 0; i < i3793.length; i += 1) {
    i3792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3793[i + 0]) );
  }
  i3786.cullingLayers = i3792
  i3786.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3787[3], i3786.timeSettings)
  i3786.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3787[4], i3786.physicsSettings)
  i3786.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3787[5], i3786.physics2DSettings)
  i3786.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3787[6], i3786.qualitySettings)
  i3786.enableRealtimeShadows = !!i3787[7]
  i3786.enableAutoInstancing = !!i3787[8]
  i3786.enableStaticBatching = !!i3787[9]
  i3786.enableDynamicBatching = !!i3787[10]
  i3786.lightmapEncodingQuality = i3787[11]
  i3786.desiredColorSpace = i3787[12]
  var i3795 = i3787[13]
  var i3794 = []
  for(var i = 0; i < i3795.length; i += 1) {
    i3794.push( i3795[i + 0] );
  }
  i3786.allTags = i3794
  return i3786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3799 = data
  i3798.name = i3799[0]
  i3798.value = i3799[1]
  return i3798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3803 = data
  i3802.id = i3803[0]
  i3802.name = i3803[1]
  i3802.value = i3803[2]
  return i3802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3807 = data
  i3806.id = i3807[0]
  i3806.name = i3807[1]
  return i3806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3809 = data
  i3808.fixedDeltaTime = i3809[0]
  i3808.maximumDeltaTime = i3809[1]
  i3808.timeScale = i3809[2]
  i3808.maximumParticleTimestep = i3809[3]
  return i3808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3811 = data
  i3810.gravity = new pc.Vec3( i3811[0], i3811[1], i3811[2] )
  i3810.defaultSolverIterations = i3811[3]
  i3810.bounceThreshold = i3811[4]
  i3810.autoSyncTransforms = !!i3811[5]
  i3810.autoSimulation = !!i3811[6]
  var i3813 = i3811[7]
  var i3812 = []
  for(var i = 0; i < i3813.length; i += 1) {
    i3812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3813[i + 0]) );
  }
  i3810.collisionMatrix = i3812
  return i3810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3817 = data
  i3816.enabled = !!i3817[0]
  i3816.layerId = i3817[1]
  i3816.otherLayerId = i3817[2]
  return i3816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3819 = data
  request.r(i3819[0], i3819[1], 0, i3818, 'material')
  i3818.gravity = new pc.Vec2( i3819[2], i3819[3] )
  i3818.positionIterations = i3819[4]
  i3818.velocityIterations = i3819[5]
  i3818.velocityThreshold = i3819[6]
  i3818.maxLinearCorrection = i3819[7]
  i3818.maxAngularCorrection = i3819[8]
  i3818.maxTranslationSpeed = i3819[9]
  i3818.maxRotationSpeed = i3819[10]
  i3818.baumgarteScale = i3819[11]
  i3818.baumgarteTOIScale = i3819[12]
  i3818.timeToSleep = i3819[13]
  i3818.linearSleepTolerance = i3819[14]
  i3818.angularSleepTolerance = i3819[15]
  i3818.defaultContactOffset = i3819[16]
  i3818.autoSimulation = !!i3819[17]
  i3818.queriesHitTriggers = !!i3819[18]
  i3818.queriesStartInColliders = !!i3819[19]
  i3818.callbacksOnDisable = !!i3819[20]
  i3818.reuseCollisionCallbacks = !!i3819[21]
  i3818.autoSyncTransforms = !!i3819[22]
  var i3821 = i3819[23]
  var i3820 = []
  for(var i = 0; i < i3821.length; i += 1) {
    i3820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3821[i + 0]) );
  }
  i3818.collisionMatrix = i3820
  return i3818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3825 = data
  i3824.enabled = !!i3825[0]
  i3824.layerId = i3825[1]
  i3824.otherLayerId = i3825[2]
  return i3824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3827 = data
  var i3829 = i3827[0]
  var i3828 = []
  for(var i = 0; i < i3829.length; i += 1) {
    i3828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3829[i + 0]) );
  }
  i3826.qualityLevels = i3828
  var i3831 = i3827[1]
  var i3830 = []
  for(var i = 0; i < i3831.length; i += 1) {
    i3830.push( i3831[i + 0] );
  }
  i3826.names = i3830
  i3826.shadows = i3827[2]
  i3826.anisotropicFiltering = i3827[3]
  i3826.antiAliasing = i3827[4]
  i3826.lodBias = i3827[5]
  i3826.shadowCascades = i3827[6]
  i3826.shadowDistance = i3827[7]
  i3826.shadowmaskMode = i3827[8]
  i3826.shadowProjection = i3827[9]
  i3826.shadowResolution = i3827[10]
  i3826.softParticles = !!i3827[11]
  i3826.softVegetation = !!i3827[12]
  i3826.activeColorSpace = i3827[13]
  i3826.desiredColorSpace = i3827[14]
  i3826.masterTextureLimit = i3827[15]
  i3826.maxQueuedFrames = i3827[16]
  i3826.particleRaycastBudget = i3827[17]
  i3826.pixelLightCount = i3827[18]
  i3826.realtimeReflectionProbes = !!i3827[19]
  i3826.shadowCascade2Split = i3827[20]
  i3826.shadowCascade4Split = new pc.Vec3( i3827[21], i3827[22], i3827[23] )
  i3826.streamingMipmapsActive = !!i3827[24]
  i3826.vSyncCount = i3827[25]
  i3826.asyncUploadBufferSize = i3827[26]
  i3826.asyncUploadTimeSlice = i3827[27]
  i3826.billboardsFaceCameraPosition = !!i3827[28]
  i3826.shadowNearPlaneOffset = i3827[29]
  i3826.streamingMipmapsMemoryBudget = i3827[30]
  i3826.maximumLODLevel = i3827[31]
  i3826.streamingMipmapsAddAllCameras = !!i3827[32]
  i3826.streamingMipmapsMaxLevelReduction = i3827[33]
  i3826.streamingMipmapsRenderersPerFrame = i3827[34]
  i3826.resolutionScalingFixedDPIFactor = i3827[35]
  i3826.streamingMipmapsMaxFileIORequests = i3827[36]
  i3826.currentQualityLevel = i3827[37]
  return i3826
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3834 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3835 = data
  i3834.xPlacement = i3835[0]
  i3834.yPlacement = i3835[1]
  i3834.xAdvance = i3835[2]
  i3834.yAdvance = i3835[3]
  return i3834
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3836 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3837 = data
  i3836.m_GlyphIndex = i3837[0]
  i3836.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3837[1], i3836.m_GlyphValueRecord)
  return i3836
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3838 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3839 = data
  i3838.m_XPlacement = i3839[0]
  i3838.m_YPlacement = i3839[1]
  i3838.m_XAdvance = i3839[2]
  i3838.m_YAdvance = i3839[3]
  return i3838
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[3],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[3],"76":[77],"78":[79],"80":[79],"9":[8],"81":[82],"83":[84],"85":[82],"86":[8],"87":[8],"11":[9],"19":[20,8],"88":[8],"10":[9],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"34":[8],"96":[8],"16":[20,8],"97":[8],"98":[8],"99":[8],"100":[8],"101":[20,8],"102":[8],"103":[6],"104":[6],"7":[6],"105":[6],"106":[3],"107":[3],"108":[109],"110":[3],"111":[112],"113":[8],"114":[20,8],"115":[77],"29":[20,8],"116":[117,77],"118":[77],"119":[77,120],"121":[54],"122":[62],"123":[112],"124":[125],"126":[8],"127":[77,8],"18":[8,20],"128":[8],"129":[20,8],"130":[77],"131":[20,8],"132":[8],"133":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","MixSkeletonSkin","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","ClickItem","DraggableItem","UnityEngine.CanvasGroup","DropZone","UnityEngine.PolygonCollider2D","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DG.Tweening.DOTweenAnimation","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "266.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "TBAP_V15_NgocNDL_AnhPD";

Deserializers.lunaAppID = "33901";

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

Deserializers.buildID = "c1f6114f-f430-4008-aed8-3af135dbad46";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

