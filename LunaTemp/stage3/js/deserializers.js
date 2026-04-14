var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2488 = root || request.c( 'UnityEngine.JointSpring' )
  var i2489 = data
  i2488.spring = i2489[0]
  i2488.damper = i2489[1]
  i2488.targetPosition = i2489[2]
  return i2488
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2490 = root || request.c( 'UnityEngine.JointMotor' )
  var i2491 = data
  i2490.m_TargetVelocity = i2491[0]
  i2490.m_Force = i2491[1]
  i2490.m_FreeSpin = i2491[2]
  return i2490
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2492 = root || request.c( 'UnityEngine.JointLimits' )
  var i2493 = data
  i2492.m_Min = i2493[0]
  i2492.m_Max = i2493[1]
  i2492.m_Bounciness = i2493[2]
  i2492.m_BounceMinVelocity = i2493[3]
  i2492.m_ContactDistance = i2493[4]
  i2492.minBounce = i2493[5]
  i2492.maxBounce = i2493[6]
  return i2492
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2494 = root || request.c( 'UnityEngine.JointDrive' )
  var i2495 = data
  i2494.m_PositionSpring = i2495[0]
  i2494.m_PositionDamper = i2495[1]
  i2494.m_MaximumForce = i2495[2]
  i2494.m_UseAcceleration = i2495[3]
  return i2494
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2496 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2497 = data
  i2496.m_Spring = i2497[0]
  i2496.m_Damper = i2497[1]
  return i2496
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2498 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2499 = data
  i2498.m_Limit = i2499[0]
  i2498.m_Bounciness = i2499[1]
  i2498.m_ContactDistance = i2499[2]
  return i2498
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2500 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2501 = data
  i2500.m_ExtremumSlip = i2501[0]
  i2500.m_ExtremumValue = i2501[1]
  i2500.m_AsymptoteSlip = i2501[2]
  i2500.m_AsymptoteValue = i2501[3]
  i2500.m_Stiffness = i2501[4]
  return i2500
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2502 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2503 = data
  i2502.m_LowerAngle = i2503[0]
  i2502.m_UpperAngle = i2503[1]
  return i2502
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2504 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2505 = data
  i2504.m_MotorSpeed = i2505[0]
  i2504.m_MaximumMotorTorque = i2505[1]
  return i2504
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2506 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2507 = data
  i2506.m_DampingRatio = i2507[0]
  i2506.m_Frequency = i2507[1]
  i2506.m_Angle = i2507[2]
  return i2506
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2508 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2509 = data
  i2508.m_LowerTranslation = i2509[0]
  i2508.m_UpperTranslation = i2509[1]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2511 = data
  i2510.name = i2511[0]
  i2510.width = i2511[1]
  i2510.height = i2511[2]
  i2510.mipmapCount = i2511[3]
  i2510.anisoLevel = i2511[4]
  i2510.filterMode = i2511[5]
  i2510.hdr = !!i2511[6]
  i2510.format = i2511[7]
  i2510.wrapMode = i2511[8]
  i2510.alphaIsTransparency = !!i2511[9]
  i2510.alphaSource = i2511[10]
  i2510.graphicsFormat = i2511[11]
  i2510.sRGBTexture = !!i2511[12]
  i2510.desiredColorSpace = i2511[13]
  i2510.wrapU = i2511[14]
  i2510.wrapV = i2511[15]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2512 = root || new pc.UnityMaterial()
  var i2513 = data
  i2512.name = i2513[0]
  request.r(i2513[1], i2513[2], 0, i2512, 'shader')
  i2512.renderQueue = i2513[3]
  i2512.enableInstancing = !!i2513[4]
  var i2515 = i2513[5]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2515[i + 0]) );
  }
  i2512.floatParameters = i2514
  var i2517 = i2513[6]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2517[i + 0]) );
  }
  i2512.colorParameters = i2516
  var i2519 = i2513[7]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2519[i + 0]) );
  }
  i2512.vectorParameters = i2518
  var i2521 = i2513[8]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2521[i + 0]) );
  }
  i2512.textureParameters = i2520
  var i2523 = i2513[9]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2523[i + 0]) );
  }
  i2512.materialFlags = i2522
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2527 = data
  i2526.name = i2527[0]
  i2526.value = i2527[1]
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2531 = data
  i2530.name = i2531[0]
  i2530.value = new pc.Color(i2531[1], i2531[2], i2531[3], i2531[4])
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2535 = data
  i2534.name = i2535[0]
  i2534.value = new pc.Vec4( i2535[1], i2535[2], i2535[3], i2535[4] )
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2539 = data
  i2538.name = i2539[0]
  request.r(i2539[1], i2539[2], 0, i2538, 'value')
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2543 = data
  i2542.name = i2543[0]
  i2542.enabled = !!i2543[1]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2545 = data
  i2544.name = i2545[0]
  i2544.index = i2545[1]
  i2544.startup = !!i2545[2]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2547 = data
  i2546.position = new pc.Vec3( i2547[0], i2547[1], i2547[2] )
  i2546.scale = new pc.Vec3( i2547[3], i2547[4], i2547[5] )
  i2546.rotation = new pc.Quat(i2547[6], i2547[7], i2547[8], i2547[9])
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2549 = data
  i2548.aspect = i2549[0]
  i2548.orthographic = !!i2549[1]
  i2548.orthographicSize = i2549[2]
  i2548.backgroundColor = new pc.Color(i2549[3], i2549[4], i2549[5], i2549[6])
  i2548.nearClipPlane = i2549[7]
  i2548.farClipPlane = i2549[8]
  i2548.fieldOfView = i2549[9]
  i2548.depth = i2549[10]
  i2548.clearFlags = i2549[11]
  i2548.cullingMask = i2549[12]
  i2548.rect = i2549[13]
  request.r(i2549[14], i2549[15], 0, i2548, 'targetTexture')
  i2548.usePhysicalProperties = !!i2549[16]
  i2548.focalLength = i2549[17]
  i2548.sensorSize = new pc.Vec2( i2549[18], i2549[19] )
  i2548.lensShift = new pc.Vec2( i2549[20], i2549[21] )
  i2548.gateFit = i2549[22]
  i2548.commandBufferCount = i2549[23]
  i2548.cameraType = i2549[24]
  i2548.enabled = !!i2549[25]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2551 = data
  i2550.name = i2551[0]
  i2550.tagId = i2551[1]
  i2550.enabled = !!i2551[2]
  i2550.isStatic = !!i2551[3]
  i2550.layer = i2551[4]
  return i2550
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2552 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2553 = data
  request.r(i2553[0], i2553[1], 0, i2552, 'm_FirstSelected')
  i2552.m_sendNavigationEvents = !!i2553[2]
  i2552.m_DragThreshold = i2553[3]
  return i2552
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2554 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2555 = data
  i2554.m_HorizontalAxis = i2555[0]
  i2554.m_VerticalAxis = i2555[1]
  i2554.m_SubmitButton = i2555[2]
  i2554.m_CancelButton = i2555[3]
  i2554.m_InputActionsPerSecond = i2555[4]
  i2554.m_RepeatDelay = i2555[5]
  i2554.m_ForceModuleActive = !!i2555[6]
  i2554.m_SendPointerHoverToParent = !!i2555[7]
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2557 = data
  i2556.pivot = new pc.Vec2( i2557[0], i2557[1] )
  i2556.anchorMin = new pc.Vec2( i2557[2], i2557[3] )
  i2556.anchorMax = new pc.Vec2( i2557[4], i2557[5] )
  i2556.sizeDelta = new pc.Vec2( i2557[6], i2557[7] )
  i2556.anchoredPosition3D = new pc.Vec3( i2557[8], i2557[9], i2557[10] )
  i2556.rotation = new pc.Quat(i2557[11], i2557[12], i2557[13], i2557[14])
  i2556.scale = new pc.Vec3( i2557[15], i2557[16], i2557[17] )
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2559 = data
  i2558.planeDistance = i2559[0]
  i2558.referencePixelsPerUnit = i2559[1]
  i2558.isFallbackOverlay = !!i2559[2]
  i2558.renderMode = i2559[3]
  i2558.renderOrder = i2559[4]
  i2558.sortingLayerName = i2559[5]
  i2558.sortingOrder = i2559[6]
  i2558.scaleFactor = i2559[7]
  request.r(i2559[8], i2559[9], 0, i2558, 'worldCamera')
  i2558.overrideSorting = !!i2559[10]
  i2558.pixelPerfect = !!i2559[11]
  i2558.targetDisplay = i2559[12]
  i2558.overridePixelPerfect = !!i2559[13]
  i2558.enabled = !!i2559[14]
  return i2558
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2560 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2561 = data
  i2560.m_UiScaleMode = i2561[0]
  i2560.m_ReferencePixelsPerUnit = i2561[1]
  i2560.m_ScaleFactor = i2561[2]
  i2560.m_ReferenceResolution = new pc.Vec2( i2561[3], i2561[4] )
  i2560.m_ScreenMatchMode = i2561[5]
  i2560.m_MatchWidthOrHeight = i2561[6]
  i2560.m_PhysicalUnit = i2561[7]
  i2560.m_FallbackScreenDPI = i2561[8]
  i2560.m_DefaultSpriteDPI = i2561[9]
  i2560.m_DynamicPixelsPerUnit = i2561[10]
  i2560.m_PresetInfoIsWorld = !!i2561[11]
  return i2560
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2562 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2563 = data
  i2562.m_IgnoreReversedGraphics = !!i2563[0]
  i2562.m_BlockingObjects = i2563[1]
  i2562.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2563[2] )
  return i2562
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i2564 = root || request.c( 'LunaManager' )
  var i2565 = data
  var i2567 = i2565[0]
  var i2566 = []
  for(var i = 0; i < i2567.length; i += 2) {
  request.r(i2567[i + 0], i2567[i + 1], 2, i2566, '')
  }
  i2564.lstBtnInstall = i2566
  request.r(i2565[1], i2565[2], 0, i2564, 'WinGO')
  request.r(i2565[3], i2565[4], 0, i2564, 'LoseGO')
  request.r(i2565[5], i2565[6], 0, i2564, 'StartCard')
  request.r(i2565[7], i2565[8], 0, i2564, 'EndCard')
  request.r(i2565[9], i2565[10], 0, i2564, 'Parent')
  i2564.isDrag = !!i2565[11]
  i2564.timeDrag = i2565[12]
  i2564.countPlay = i2565[13]
  i2564.countPlayFinal = i2565[14]
  i2564.countPlayMax = i2565[15]
  i2564.timeDropFinal = i2565[16]
  i2564.colorBG = new pc.Color(i2565[17], i2565[18], i2565[19], i2565[20])
  request.r(i2565[21], i2565[22], 0, i2564, 'texture2D')
  request.r(i2565[23], i2565[24], 0, i2564, 'rawImageBG')
  var i2569 = i2565[25]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 2) {
  request.r(i2569[i + 0], i2569[i + 1], 2, i2568, '')
  }
  i2564.skeDogs = i2568
  request.r(i2565[26], i2565[27], 0, i2564, 'textProgess')
  request.r(i2565[28], i2565[29], 0, i2564, 'imgProgess')
  request.r(i2565[30], i2565[31], 0, i2564, 'timeText')
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2575 = data
  i2574.cullTransparentMesh = !!i2575[0]
  return i2574
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2576 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2577 = data
  request.r(i2577[0], i2577[1], 0, i2576, 'm_Texture')
  i2576.m_UVRect = UnityEngine.Rect.MinMaxRect(i2577[2], i2577[3], i2577[4], i2577[5])
  i2576.m_Maskable = !!i2577[6]
  request.r(i2577[7], i2577[8], 0, i2576, 'm_Material')
  i2576.m_Color = new pc.Color(i2577[9], i2577[10], i2577[11], i2577[12])
  i2576.m_RaycastTarget = !!i2577[13]
  i2576.m_RaycastPadding = new pc.Vec4( i2577[14], i2577[15], i2577[16], i2577[17] )
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2579 = data
  request.r(i2579[0], i2579[1], 0, i2578, 'clip')
  request.r(i2579[2], i2579[3], 0, i2578, 'outputAudioMixerGroup')
  i2578.playOnAwake = !!i2579[4]
  i2578.loop = !!i2579[5]
  i2578.time = i2579[6]
  i2578.volume = i2579[7]
  i2578.pitch = i2579[8]
  i2578.enabled = !!i2579[9]
  return i2578
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2580 = root || request.c( 'UnityEngine.UI.Image' )
  var i2581 = data
  request.r(i2581[0], i2581[1], 0, i2580, 'm_Sprite')
  i2580.m_Type = i2581[2]
  i2580.m_PreserveAspect = !!i2581[3]
  i2580.m_FillCenter = !!i2581[4]
  i2580.m_FillMethod = i2581[5]
  i2580.m_FillAmount = i2581[6]
  i2580.m_FillClockwise = !!i2581[7]
  i2580.m_FillOrigin = i2581[8]
  i2580.m_UseSpriteMesh = !!i2581[9]
  i2580.m_PixelsPerUnitMultiplier = i2581[10]
  i2580.m_Maskable = !!i2581[11]
  request.r(i2581[12], i2581[13], 0, i2580, 'm_Material')
  i2580.m_Color = new pc.Color(i2581[14], i2581[15], i2581[16], i2581[17])
  i2580.m_RaycastTarget = !!i2581[18]
  i2580.m_RaycastPadding = new pc.Vec4( i2581[19], i2581[20], i2581[21], i2581[22] )
  return i2580
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2582 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2583 = data
  request.r(i2583[0], i2583[1], 0, i2582, 'skeletonDataAsset')
  request.r(i2583[2], i2583[3], 0, i2582, 'additiveMaterial')
  request.r(i2583[4], i2583[5], 0, i2582, 'multiplyMaterial')
  request.r(i2583[6], i2583[7], 0, i2582, 'screenMaterial')
  i2582.initialSkinName = i2583[8]
  i2582.initialFlipX = !!i2583[9]
  i2582.initialFlipY = !!i2583[10]
  i2582.startingAnimation = i2583[11]
  i2582.startingLoop = !!i2583[12]
  i2582.timeScale = i2583[13]
  i2582.freeze = !!i2583[14]
  i2582.layoutScaleMode = i2583[15]
  i2582.updateWhenInvisible = i2583[16]
  i2582.allowMultipleCanvasRenderers = !!i2583[17]
  var i2585 = i2583[18]
  var i2584 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2585.length; i += 2) {
  request.r(i2585[i + 0], i2585[i + 1], 1, i2584, '')
  }
  i2582.canvasRenderers = i2584
  i2582.enableSeparatorSlots = !!i2583[19]
  i2582.updateSeparatorPartLocation = !!i2583[20]
  i2582.updateSeparatorPartScale = !!i2583[21]
  i2582.disableMeshAssignmentOnOverride = !!i2583[22]
  i2582.referenceSize = new pc.Vec2( i2583[23], i2583[24] )
  i2582.referenceScale = i2583[25]
  i2582.rectTransformSize = new pc.Vec2( i2583[26], i2583[27] )
  i2582.editReferenceRect = !!i2583[28]
  var i2587 = i2583[29]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( i2587[i + 0] );
  }
  i2582.separatorSlotNames = i2586
  var i2589 = i2583[30]
  var i2588 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2589.length; i += 2) {
  request.r(i2589[i + 0], i2589[i + 1], 1, i2588, '')
  }
  i2582.separatorParts = i2588
  i2582.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2583[31], i2582.meshGenerator)
  i2582.updateTiming = i2583[32]
  i2582.unscaledTime = !!i2583[33]
  i2582.m_Maskable = !!i2583[34]
  request.r(i2583[35], i2583[36], 0, i2582, 'm_Material')
  i2582.m_Color = new pc.Color(i2583[37], i2583[38], i2583[39], i2583[40])
  i2582.m_RaycastTarget = !!i2583[41]
  i2582.m_RaycastPadding = new pc.Vec4( i2583[42], i2583[43], i2583[44], i2583[45] )
  return i2582
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2596 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2597 = data
  i2596.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2597[0], i2596.settings)
  return i2596
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2598 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2599 = data
  i2598.useClipping = !!i2599[0]
  i2598.zSpacing = i2599[1]
  i2598.pmaVertexColors = !!i2599[2]
  i2598.tintBlack = !!i2599[3]
  i2598.canvasGroupTintBlack = !!i2599[4]
  i2598.calculateTangents = !!i2599[5]
  i2598.addNormals = !!i2599[6]
  i2598.immutableTriangles = !!i2599[7]
  return i2598
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i2600 = root || request.c( 'MixSkeletonSkin' )
  var i2601 = data
  request.r(i2601[0], i2601[1], 0, i2600, 'skeletonAnimation')
  var i2603 = i2601[2]
  var i2602 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.add(i2603[i + 0]);
  }
  i2600.skinNames = i2602
  i2600.defaultAnim = i2601[3]
  return i2600
}

Deserializers["DropID"] = function (request, data, root) {
  var i2606 = root || request.c( 'DropID' )
  var i2607 = data
  request.r(i2607[0], i2607[1], 0, i2606, 'mixSkeletonSkin')
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2609 = data
  i2608.usedByComposite = !!i2609[0]
  i2608.autoTiling = !!i2609[1]
  var i2611 = i2609[2]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
  var i2613 = i2611[i + 0]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 2) {
    i2612.push( new pc.Vec2( i2613[i + 0], i2613[i + 1] ) );
  }
    i2610.push( i2612 );
  }
  i2608.points = i2610
  i2608.enabled = !!i2609[3]
  i2608.isTrigger = !!i2609[4]
  i2608.usedByEffector = !!i2609[5]
  i2608.density = i2609[6]
  i2608.offset = new pc.Vec2( i2609[7], i2609[8] )
  request.r(i2609[9], i2609[10], 0, i2608, 'material')
  return i2608
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i2620 = root || request.c( 'ClickItem' )
  var i2621 = data
  var i2623 = i2621[0]
  var i2622 = []
  for(var i = 0; i < i2623.length; i += 2) {
  request.r(i2623[i + 0], i2623[i + 1], 2, i2622, '')
  }
  i2620.steps = i2622
  i2620.currentStep = i2621[1]
  i2620.isProcess = !!i2621[2]
  return i2620
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2626 = root || request.c( 'UnityEngine.UI.Button' )
  var i2627 = data
  i2626.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2627[0], i2626.m_OnClick)
  i2626.m_Navigation = request.d('UnityEngine.UI.Navigation', i2627[1], i2626.m_Navigation)
  i2626.m_Transition = i2627[2]
  i2626.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2627[3], i2626.m_Colors)
  i2626.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2627[4], i2626.m_SpriteState)
  i2626.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2627[5], i2626.m_AnimationTriggers)
  i2626.m_Interactable = !!i2627[6]
  request.r(i2627[7], i2627[8], 0, i2626, 'm_TargetGraphic')
  return i2626
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2628 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2629 = data
  i2628.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2629[0], i2628.m_PersistentCalls)
  return i2628
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2630 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2631 = data
  var i2633 = i2631[0]
  var i2632 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.add(request.d('UnityEngine.Events.PersistentCall', i2633[i + 0]));
  }
  i2630.m_Calls = i2632
  return i2630
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2636 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2637 = data
  request.r(i2637[0], i2637[1], 0, i2636, 'm_Target')
  i2636.m_TargetAssemblyTypeName = i2637[2]
  i2636.m_MethodName = i2637[3]
  i2636.m_Mode = i2637[4]
  i2636.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2637[5], i2636.m_Arguments)
  i2636.m_CallState = i2637[6]
  return i2636
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2638 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2639 = data
  i2638.m_Mode = i2639[0]
  i2638.m_WrapAround = !!i2639[1]
  request.r(i2639[2], i2639[3], 0, i2638, 'm_SelectOnUp')
  request.r(i2639[4], i2639[5], 0, i2638, 'm_SelectOnDown')
  request.r(i2639[6], i2639[7], 0, i2638, 'm_SelectOnLeft')
  request.r(i2639[8], i2639[9], 0, i2638, 'm_SelectOnRight')
  return i2638
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2640 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2641 = data
  i2640.m_NormalColor = new pc.Color(i2641[0], i2641[1], i2641[2], i2641[3])
  i2640.m_HighlightedColor = new pc.Color(i2641[4], i2641[5], i2641[6], i2641[7])
  i2640.m_PressedColor = new pc.Color(i2641[8], i2641[9], i2641[10], i2641[11])
  i2640.m_SelectedColor = new pc.Color(i2641[12], i2641[13], i2641[14], i2641[15])
  i2640.m_DisabledColor = new pc.Color(i2641[16], i2641[17], i2641[18], i2641[19])
  i2640.m_ColorMultiplier = i2641[20]
  i2640.m_FadeDuration = i2641[21]
  return i2640
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2642 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2643 = data
  request.r(i2643[0], i2643[1], 0, i2642, 'm_HighlightedSprite')
  request.r(i2643[2], i2643[3], 0, i2642, 'm_PressedSprite')
  request.r(i2643[4], i2643[5], 0, i2642, 'm_SelectedSprite')
  request.r(i2643[6], i2643[7], 0, i2642, 'm_DisabledSprite')
  return i2642
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2644 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2645 = data
  i2644.m_NormalTrigger = i2645[0]
  i2644.m_HighlightedTrigger = i2645[1]
  i2644.m_PressedTrigger = i2645[2]
  i2644.m_SelectedTrigger = i2645[3]
  i2644.m_DisabledTrigger = i2645[4]
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2647 = data
  i2646.m_Alpha = i2647[0]
  i2646.m_Interactable = !!i2647[1]
  i2646.m_BlocksRaycasts = !!i2647[2]
  i2646.m_IgnoreParentGroups = !!i2647[3]
  i2646.enabled = !!i2647[4]
  return i2646
}

Deserializers["DragID"] = function (request, data, root) {
  var i2648 = root || request.c( 'DragID' )
  var i2649 = data
  i2648.idDrag = i2649[0]
  i2648.isProcess = !!i2649[1]
  return i2648
}

Deserializers["DropZone"] = function (request, data, root) {
  var i2650 = root || request.c( 'DropZone' )
  var i2651 = data
  i2650.idDrop = i2651[0]
  var i2653 = i2651[1]
  var i2652 = []
  for(var i = 0; i < i2653.length; i += 2) {
  request.r(i2653[i + 0], i2653[i + 1], 2, i2652, '')
  }
  i2650.steps = i2652
  request.r(i2651[2], i2651[3], 0, i2650, 'stepLose')
  return i2650
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i2654 = root || request.c( 'DraggableItem' )
  var i2655 = data
  i2654.idDrag = i2655[0]
  i2654.isProcess = !!i2655[1]
  i2654.isLose = !!i2655[2]
  i2654.isHide = !!i2655[3]
  return i2654
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2656 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2657 = data
  i2656.m_hasFontAssetChanged = !!i2657[0]
  request.r(i2657[1], i2657[2], 0, i2656, 'm_baseMaterial')
  i2656.m_maskOffset = new pc.Vec4( i2657[3], i2657[4], i2657[5], i2657[6] )
  i2656.m_text = i2657[7]
  i2656.m_isRightToLeft = !!i2657[8]
  request.r(i2657[9], i2657[10], 0, i2656, 'm_fontAsset')
  request.r(i2657[11], i2657[12], 0, i2656, 'm_sharedMaterial')
  var i2659 = i2657[13]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 2) {
  request.r(i2659[i + 0], i2659[i + 1], 2, i2658, '')
  }
  i2656.m_fontSharedMaterials = i2658
  request.r(i2657[14], i2657[15], 0, i2656, 'm_fontMaterial')
  var i2661 = i2657[16]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 2) {
  request.r(i2661[i + 0], i2661[i + 1], 2, i2660, '')
  }
  i2656.m_fontMaterials = i2660
  i2656.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2657[17], i2657[18], i2657[19], i2657[20])
  i2656.m_fontColor = new pc.Color(i2657[21], i2657[22], i2657[23], i2657[24])
  i2656.m_enableVertexGradient = !!i2657[25]
  i2656.m_colorMode = i2657[26]
  i2656.m_fontColorGradient = request.d('TMPro.VertexGradient', i2657[27], i2656.m_fontColorGradient)
  request.r(i2657[28], i2657[29], 0, i2656, 'm_fontColorGradientPreset')
  request.r(i2657[30], i2657[31], 0, i2656, 'm_spriteAsset')
  i2656.m_tintAllSprites = !!i2657[32]
  request.r(i2657[33], i2657[34], 0, i2656, 'm_StyleSheet')
  i2656.m_TextStyleHashCode = i2657[35]
  i2656.m_overrideHtmlColors = !!i2657[36]
  i2656.m_faceColor = UnityEngine.Color32.ConstructColor(i2657[37], i2657[38], i2657[39], i2657[40])
  i2656.m_fontSize = i2657[41]
  i2656.m_fontSizeBase = i2657[42]
  i2656.m_fontWeight = i2657[43]
  i2656.m_enableAutoSizing = !!i2657[44]
  i2656.m_fontSizeMin = i2657[45]
  i2656.m_fontSizeMax = i2657[46]
  i2656.m_fontStyle = i2657[47]
  i2656.m_HorizontalAlignment = i2657[48]
  i2656.m_VerticalAlignment = i2657[49]
  i2656.m_textAlignment = i2657[50]
  i2656.m_characterSpacing = i2657[51]
  i2656.m_wordSpacing = i2657[52]
  i2656.m_lineSpacing = i2657[53]
  i2656.m_lineSpacingMax = i2657[54]
  i2656.m_paragraphSpacing = i2657[55]
  i2656.m_charWidthMaxAdj = i2657[56]
  i2656.m_enableWordWrapping = !!i2657[57]
  i2656.m_wordWrappingRatios = i2657[58]
  i2656.m_overflowMode = i2657[59]
  request.r(i2657[60], i2657[61], 0, i2656, 'm_linkedTextComponent')
  request.r(i2657[62], i2657[63], 0, i2656, 'parentLinkedComponent')
  i2656.m_enableKerning = !!i2657[64]
  i2656.m_enableExtraPadding = !!i2657[65]
  i2656.checkPaddingRequired = !!i2657[66]
  i2656.m_isRichText = !!i2657[67]
  i2656.m_parseCtrlCharacters = !!i2657[68]
  i2656.m_isOrthographic = !!i2657[69]
  i2656.m_isCullingEnabled = !!i2657[70]
  i2656.m_horizontalMapping = i2657[71]
  i2656.m_verticalMapping = i2657[72]
  i2656.m_uvLineOffset = i2657[73]
  i2656.m_geometrySortingOrder = i2657[74]
  i2656.m_IsTextObjectScaleStatic = !!i2657[75]
  i2656.m_VertexBufferAutoSizeReduction = !!i2657[76]
  i2656.m_useMaxVisibleDescender = !!i2657[77]
  i2656.m_pageToDisplay = i2657[78]
  i2656.m_margin = new pc.Vec4( i2657[79], i2657[80], i2657[81], i2657[82] )
  i2656.m_isUsingLegacyAnimationComponent = !!i2657[83]
  i2656.m_isVolumetricText = !!i2657[84]
  i2656.m_Maskable = !!i2657[85]
  request.r(i2657[86], i2657[87], 0, i2656, 'm_Material')
  i2656.m_Color = new pc.Color(i2657[88], i2657[89], i2657[90], i2657[91])
  i2656.m_RaycastTarget = !!i2657[92]
  i2656.m_RaycastPadding = new pc.Vec4( i2657[93], i2657[94], i2657[95], i2657[96] )
  return i2656
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2664 = root || request.c( 'TMPro.VertexGradient' )
  var i2665 = data
  i2664.topLeft = new pc.Color(i2665[0], i2665[1], i2665[2], i2665[3])
  i2664.topRight = new pc.Color(i2665[4], i2665[5], i2665[6], i2665[7])
  i2664.bottomLeft = new pc.Color(i2665[8], i2665[9], i2665[10], i2665[11])
  i2664.bottomRight = new pc.Color(i2665[12], i2665[13], i2665[14], i2665[15])
  return i2664
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2666 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2667 = data
  request.r(i2667[0], i2667[1], 0, i2666, 'm_ObjectArgument')
  i2666.m_ObjectArgumentAssemblyTypeName = i2667[2]
  i2666.m_IntArgument = i2667[3]
  i2666.m_FloatArgument = i2667[4]
  i2666.m_StringArgument = i2667[5]
  i2666.m_BoolArgument = !!i2667[6]
  return i2666
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2668 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2669 = data
  i2668.targetIsSelf = !!i2669[0]
  request.r(i2669[1], i2669[2], 0, i2668, 'targetGO')
  i2668.tweenTargetIsTargetGO = !!i2669[3]
  i2668.delay = i2669[4]
  i2668.duration = i2669[5]
  i2668.easeType = i2669[6]
  i2668.easeCurve = new pc.AnimationCurve( { keys_flow: i2669[7] } )
  i2668.loopType = i2669[8]
  i2668.loops = i2669[9]
  i2668.id = i2669[10]
  i2668.isRelative = !!i2669[11]
  i2668.isFrom = !!i2669[12]
  i2668.isIndependentUpdate = !!i2669[13]
  i2668.autoKill = !!i2669[14]
  i2668.autoGenerate = !!i2669[15]
  i2668.isActive = !!i2669[16]
  i2668.isValid = !!i2669[17]
  request.r(i2669[18], i2669[19], 0, i2668, 'target')
  i2668.animationType = i2669[20]
  i2668.targetType = i2669[21]
  i2668.forcedTargetType = i2669[22]
  i2668.autoPlay = !!i2669[23]
  i2668.useTargetAsV3 = !!i2669[24]
  i2668.endValueFloat = i2669[25]
  i2668.endValueV3 = new pc.Vec3( i2669[26], i2669[27], i2669[28] )
  i2668.endValueV2 = new pc.Vec2( i2669[29], i2669[30] )
  i2668.endValueColor = new pc.Color(i2669[31], i2669[32], i2669[33], i2669[34])
  i2668.endValueString = i2669[35]
  i2668.endValueRect = UnityEngine.Rect.MinMaxRect(i2669[36], i2669[37], i2669[38], i2669[39])
  request.r(i2669[40], i2669[41], 0, i2668, 'endValueTransform')
  i2668.optionalBool0 = !!i2669[42]
  i2668.optionalBool1 = !!i2669[43]
  i2668.optionalFloat0 = i2669[44]
  i2668.optionalInt0 = i2669[45]
  i2668.optionalRotationMode = i2669[46]
  i2668.optionalScrambleMode = i2669[47]
  i2668.optionalShakeRandomnessMode = i2669[48]
  i2668.optionalString = i2669[49]
  i2668.updateType = i2669[50]
  i2668.isSpeedBased = !!i2669[51]
  i2668.hasOnStart = !!i2669[52]
  i2668.hasOnPlay = !!i2669[53]
  i2668.hasOnUpdate = !!i2669[54]
  i2668.hasOnStepComplete = !!i2669[55]
  i2668.hasOnComplete = !!i2669[56]
  i2668.hasOnTweenCreated = !!i2669[57]
  i2668.hasOnRewind = !!i2669[58]
  i2668.onStart = request.d('UnityEngine.Events.UnityEvent', i2669[59], i2668.onStart)
  i2668.onPlay = request.d('UnityEngine.Events.UnityEvent', i2669[60], i2668.onPlay)
  i2668.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2669[61], i2668.onUpdate)
  i2668.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2669[62], i2668.onStepComplete)
  i2668.onComplete = request.d('UnityEngine.Events.UnityEvent', i2669[63], i2668.onComplete)
  i2668.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2669[64], i2668.onTweenCreated)
  i2668.onRewind = request.d('UnityEngine.Events.UnityEvent', i2669[65], i2668.onRewind)
  return i2668
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2670 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2671 = data
  i2670.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2671[0], i2670.m_PersistentCalls)
  return i2670
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2672 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2673 = data
  i2672.m_ShowMaskGraphic = !!i2673[0]
  return i2672
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2674 = root || request.c( 'AudioController' )
  var i2675 = data
  request.r(i2675[0], i2675[1], 0, i2674, 'bgmSource')
  request.r(i2675[2], i2675[3], 0, i2674, 'sfxSource')
  var i2677 = i2675[4]
  var i2676 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.add(request.d('AudioEntry', i2677[i + 0]));
  }
  i2674.audioEntries = i2676
  return i2674
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i2680 = root || request.c( 'AudioEntry' )
  var i2681 = data
  i2680.key = i2681[0]
  request.r(i2681[1], i2681[2], 0, i2680, 'clip')
  i2680.volume = i2681[3]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2683 = data
  i2682.ambientIntensity = i2683[0]
  i2682.reflectionIntensity = i2683[1]
  i2682.ambientMode = i2683[2]
  i2682.ambientLight = new pc.Color(i2683[3], i2683[4], i2683[5], i2683[6])
  i2682.ambientSkyColor = new pc.Color(i2683[7], i2683[8], i2683[9], i2683[10])
  i2682.ambientGroundColor = new pc.Color(i2683[11], i2683[12], i2683[13], i2683[14])
  i2682.ambientEquatorColor = new pc.Color(i2683[15], i2683[16], i2683[17], i2683[18])
  i2682.fogColor = new pc.Color(i2683[19], i2683[20], i2683[21], i2683[22])
  i2682.fogEndDistance = i2683[23]
  i2682.fogStartDistance = i2683[24]
  i2682.fogDensity = i2683[25]
  i2682.fog = !!i2683[26]
  request.r(i2683[27], i2683[28], 0, i2682, 'skybox')
  i2682.fogMode = i2683[29]
  var i2685 = i2683[30]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2685[i + 0]) );
  }
  i2682.lightmaps = i2684
  i2682.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2683[31], i2682.lightProbes)
  i2682.lightmapsMode = i2683[32]
  i2682.mixedBakeMode = i2683[33]
  i2682.environmentLightingMode = i2683[34]
  i2682.ambientProbe = new pc.SphericalHarmonicsL2(i2683[35])
  i2682.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2683[36])
  i2682.useReferenceAmbientProbe = !!i2683[37]
  request.r(i2683[38], i2683[39], 0, i2682, 'customReflection')
  request.r(i2683[40], i2683[41], 0, i2682, 'defaultReflection')
  i2682.defaultReflectionMode = i2683[42]
  i2682.defaultReflectionResolution = i2683[43]
  i2682.sunLightObjectId = i2683[44]
  i2682.pixelLightCount = i2683[45]
  i2682.defaultReflectionHDR = !!i2683[46]
  i2682.hasLightDataAsset = !!i2683[47]
  i2682.hasManualGenerate = !!i2683[48]
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2689 = data
  request.r(i2689[0], i2689[1], 0, i2688, 'lightmapColor')
  request.r(i2689[2], i2689[3], 0, i2688, 'lightmapDirection')
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2690 = root || new UnityEngine.LightProbes()
  var i2691 = data
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2699 = data
  var i2701 = i2699[0]
  var i2700 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2701[i + 0]));
  }
  i2698.ShaderCompilationErrors = i2700
  i2698.name = i2699[1]
  i2698.guid = i2699[2]
  var i2703 = i2699[3]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( i2703[i + 0] );
  }
  i2698.shaderDefinedKeywords = i2702
  var i2705 = i2699[4]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2705[i + 0]) );
  }
  i2698.passes = i2704
  var i2707 = i2699[5]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2707[i + 0]) );
  }
  i2698.usePasses = i2706
  var i2709 = i2699[6]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2709[i + 0]) );
  }
  i2698.defaultParameterValues = i2708
  request.r(i2699[7], i2699[8], 0, i2698, 'unityFallbackShader')
  i2698.readDepth = !!i2699[9]
  i2698.isCreatedByShaderGraph = !!i2699[10]
  i2698.disableBatching = !!i2699[11]
  i2698.compiled = !!i2699[12]
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2713 = data
  i2712.shaderName = i2713[0]
  i2712.errorMessage = i2713[1]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2716 = root || new pc.UnityShaderPass()
  var i2717 = data
  i2716.id = i2717[0]
  i2716.subShaderIndex = i2717[1]
  i2716.name = i2717[2]
  i2716.passType = i2717[3]
  i2716.grabPassTextureName = i2717[4]
  i2716.usePass = !!i2717[5]
  i2716.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2717[6], i2716.zTest)
  i2716.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2717[7], i2716.zWrite)
  i2716.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2717[8], i2716.culling)
  i2716.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2717[9], i2716.blending)
  i2716.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2717[10], i2716.alphaBlending)
  i2716.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2717[11], i2716.colorWriteMask)
  i2716.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2717[12], i2716.offsetUnits)
  i2716.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2717[13], i2716.offsetFactor)
  i2716.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2717[14], i2716.stencilRef)
  i2716.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2717[15], i2716.stencilReadMask)
  i2716.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2717[16], i2716.stencilWriteMask)
  i2716.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2717[17], i2716.stencilOp)
  i2716.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2717[18], i2716.stencilOpFront)
  i2716.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2717[19], i2716.stencilOpBack)
  var i2719 = i2717[20]
  var i2718 = []
  for(var i = 0; i < i2719.length; i += 1) {
    i2718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2719[i + 0]) );
  }
  i2716.tags = i2718
  var i2721 = i2717[21]
  var i2720 = []
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.push( i2721[i + 0] );
  }
  i2716.passDefinedKeywords = i2720
  var i2723 = i2717[22]
  var i2722 = []
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2723[i + 0]) );
  }
  i2716.passDefinedKeywordGroups = i2722
  var i2725 = i2717[23]
  var i2724 = []
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2725[i + 0]) );
  }
  i2716.variants = i2724
  var i2727 = i2717[24]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2727[i + 0]) );
  }
  i2716.excludedVariants = i2726
  i2716.hasDepthReader = !!i2717[25]
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2729 = data
  i2728.val = i2729[0]
  i2728.name = i2729[1]
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2731 = data
  i2730.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2731[0], i2730.src)
  i2730.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2731[1], i2730.dst)
  i2730.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2731[2], i2730.op)
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2733 = data
  i2732.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2733[0], i2732.pass)
  i2732.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2733[1], i2732.fail)
  i2732.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2733[2], i2732.zFail)
  i2732.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2733[3], i2732.comp)
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2737 = data
  i2736.name = i2737[0]
  i2736.value = i2737[1]
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2741 = data
  var i2743 = i2741[0]
  var i2742 = []
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.push( i2743[i + 0] );
  }
  i2740.keywords = i2742
  i2740.hasDiscard = !!i2741[1]
  return i2740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2747 = data
  i2746.passId = i2747[0]
  i2746.subShaderIndex = i2747[1]
  var i2749 = i2747[2]
  var i2748 = []
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.push( i2749[i + 0] );
  }
  i2746.keywords = i2748
  i2746.vertexProgram = i2747[3]
  i2746.fragmentProgram = i2747[4]
  i2746.exportedForWebGl2 = !!i2747[5]
  i2746.readDepth = !!i2747[6]
  return i2746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2753 = data
  request.r(i2753[0], i2753[1], 0, i2752, 'shader')
  i2752.pass = i2753[2]
  return i2752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2757 = data
  i2756.name = i2757[0]
  i2756.type = i2757[1]
  i2756.value = new pc.Vec4( i2757[2], i2757[3], i2757[4], i2757[5] )
  i2756.textureValue = i2757[6]
  i2756.shaderPropertyFlag = i2757[7]
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2759 = data
  i2758.name = i2759[0]
  request.r(i2759[1], i2759[2], 0, i2758, 'texture')
  i2758.aabb = i2759[3]
  i2758.vertices = i2759[4]
  i2758.triangles = i2759[5]
  i2758.textureRect = UnityEngine.Rect.MinMaxRect(i2759[6], i2759[7], i2759[8], i2759[9])
  i2758.packedRect = UnityEngine.Rect.MinMaxRect(i2759[10], i2759[11], i2759[12], i2759[13])
  i2758.border = new pc.Vec4( i2759[14], i2759[15], i2759[16], i2759[17] )
  i2758.transparency = i2759[18]
  i2758.bounds = i2759[19]
  i2758.pixelsPerUnit = i2759[20]
  i2758.textureWidth = i2759[21]
  i2758.textureHeight = i2759[22]
  i2758.nativeSize = new pc.Vec2( i2759[23], i2759[24] )
  i2758.pivot = new pc.Vec2( i2759[25], i2759[26] )
  i2758.textureRectOffset = new pc.Vec2( i2759[27], i2759[28] )
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2761 = data
  i2760.name = i2761[0]
  return i2760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2763 = data
  i2762.name = i2763[0]
  i2762.ascent = i2763[1]
  i2762.originalLineHeight = i2763[2]
  i2762.fontSize = i2763[3]
  var i2765 = i2763[4]
  var i2764 = []
  for(var i = 0; i < i2765.length; i += 1) {
    i2764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2765[i + 0]) );
  }
  i2762.characterInfo = i2764
  request.r(i2763[5], i2763[6], 0, i2762, 'texture')
  i2762.originalFontSize = i2763[7]
  return i2762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2769 = data
  i2768.index = i2769[0]
  i2768.advance = i2769[1]
  i2768.bearing = i2769[2]
  i2768.glyphWidth = i2769[3]
  i2768.glyphHeight = i2769[4]
  i2768.minX = i2769[5]
  i2768.maxX = i2769[6]
  i2768.minY = i2769[7]
  i2768.maxY = i2769[8]
  i2768.uvBottomLeftX = i2769[9]
  i2768.uvBottomLeftY = i2769[10]
  i2768.uvBottomRightX = i2769[11]
  i2768.uvBottomRightY = i2769[12]
  i2768.uvTopLeftX = i2769[13]
  i2768.uvTopLeftY = i2769[14]
  i2768.uvTopRightX = i2769[15]
  i2768.uvTopRightY = i2769[16]
  return i2768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2771 = data
  i2770.name = i2771[0]
  i2770.bytes64 = i2771[1]
  i2770.data = i2771[2]
  return i2770
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2772 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2773 = data
  var i2775 = i2773[0]
  var i2774 = []
  for(var i = 0; i < i2775.length; i += 2) {
  request.r(i2775[i + 0], i2775[i + 1], 2, i2774, '')
  }
  i2772.atlasAssets = i2774
  i2772.scale = i2773[1]
  request.r(i2773[2], i2773[3], 0, i2772, 'skeletonJSON')
  i2772.isUpgradingBlendModeMaterials = !!i2773[4]
  i2772.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2773[5], i2772.blendModeMaterials)
  var i2777 = i2773[6]
  var i2776 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2777.length; i += 2) {
  request.r(i2777[i + 0], i2777[i + 1], 1, i2776, '')
  }
  i2772.skeletonDataModifiers = i2776
  var i2779 = i2773[7]
  var i2778 = []
  for(var i = 0; i < i2779.length; i += 1) {
    i2778.push( i2779[i + 0] );
  }
  i2772.fromAnimation = i2778
  var i2781 = i2773[8]
  var i2780 = []
  for(var i = 0; i < i2781.length; i += 1) {
    i2780.push( i2781[i + 0] );
  }
  i2772.toAnimation = i2780
  i2772.duration = i2773[9]
  i2772.defaultMix = i2773[10]
  request.r(i2773[11], i2773[12], 0, i2772, 'controller')
  return i2772
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2784 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2785 = data
  i2784.applyAdditiveMaterial = !!i2785[0]
  var i2787 = i2785[1]
  var i2786 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2787[i + 0]));
  }
  i2784.additiveMaterials = i2786
  var i2789 = i2785[2]
  var i2788 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2789[i + 0]));
  }
  i2784.multiplyMaterials = i2788
  var i2791 = i2785[3]
  var i2790 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2791[i + 0]));
  }
  i2784.screenMaterials = i2790
  i2784.requiresBlendModeMaterials = !!i2785[4]
  return i2784
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2794 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2795 = data
  i2794.pageName = i2795[0]
  request.r(i2795[1], i2795[2], 0, i2794, 'material')
  return i2794
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2798 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2799 = data
  request.r(i2799[0], i2799[1], 0, i2798, 'atlasFile')
  var i2801 = i2799[2]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 2) {
  request.r(i2801[i + 0], i2801[i + 1], 2, i2800, '')
  }
  i2798.materials = i2800
  i2798.textureLoadingMode = i2799[3]
  request.r(i2799[4], i2799[5], 0, i2798, 'onDemandTextureLoader')
  return i2798
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2802 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2803 = data
  request.r(i2803[0], i2803[1], 0, i2802, 'atlas')
  i2802.normalStyle = i2803[2]
  i2802.normalSpacingOffset = i2803[3]
  i2802.boldStyle = i2803[4]
  i2802.boldSpacing = i2803[5]
  i2802.italicStyle = i2803[6]
  i2802.tabSize = i2803[7]
  i2802.hashCode = i2803[8]
  request.r(i2803[9], i2803[10], 0, i2802, 'material')
  i2802.materialHashCode = i2803[11]
  i2802.m_Version = i2803[12]
  i2802.m_SourceFontFileGUID = i2803[13]
  request.r(i2803[14], i2803[15], 0, i2802, 'm_SourceFontFile_EditorRef')
  request.r(i2803[16], i2803[17], 0, i2802, 'm_SourceFontFile')
  i2802.m_AtlasPopulationMode = i2803[18]
  i2802.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2803[19], i2802.m_FaceInfo)
  var i2805 = i2803[20]
  var i2804 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.add(request.d('UnityEngine.TextCore.Glyph', i2805[i + 0]));
  }
  i2802.m_GlyphTable = i2804
  var i2807 = i2803[21]
  var i2806 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.add(request.d('TMPro.TMP_Character', i2807[i + 0]));
  }
  i2802.m_CharacterTable = i2806
  var i2809 = i2803[22]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 2) {
  request.r(i2809[i + 0], i2809[i + 1], 2, i2808, '')
  }
  i2802.m_AtlasTextures = i2808
  i2802.m_AtlasTextureIndex = i2803[23]
  i2802.m_IsMultiAtlasTexturesEnabled = !!i2803[24]
  i2802.m_ClearDynamicDataOnBuild = !!i2803[25]
  var i2811 = i2803[26]
  var i2810 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.add(request.d('UnityEngine.TextCore.GlyphRect', i2811[i + 0]));
  }
  i2802.m_UsedGlyphRects = i2810
  var i2813 = i2803[27]
  var i2812 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.add(request.d('UnityEngine.TextCore.GlyphRect', i2813[i + 0]));
  }
  i2802.m_FreeGlyphRects = i2812
  i2802.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2803[28], i2802.m_fontInfo)
  i2802.m_AtlasWidth = i2803[29]
  i2802.m_AtlasHeight = i2803[30]
  i2802.m_AtlasPadding = i2803[31]
  i2802.m_AtlasRenderMode = i2803[32]
  var i2815 = i2803[33]
  var i2814 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2815.length; i += 1) {
    i2814.add(request.d('TMPro.TMP_Glyph', i2815[i + 0]));
  }
  i2802.m_glyphInfoList = i2814
  i2802.m_KerningTable = request.d('TMPro.KerningTable', i2803[34], i2802.m_KerningTable)
  i2802.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2803[35], i2802.m_FontFeatureTable)
  var i2817 = i2803[36]
  var i2816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2817.length; i += 2) {
  request.r(i2817[i + 0], i2817[i + 1], 1, i2816, '')
  }
  i2802.fallbackFontAssets = i2816
  var i2819 = i2803[37]
  var i2818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2819.length; i += 2) {
  request.r(i2819[i + 0], i2819[i + 1], 1, i2818, '')
  }
  i2802.m_FallbackFontAssetTable = i2818
  i2802.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2803[38], i2802.m_CreationSettings)
  var i2821 = i2803[39]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.push( request.d('TMPro.TMP_FontWeightPair', i2821[i + 0]) );
  }
  i2802.m_FontWeightTable = i2820
  var i2823 = i2803[40]
  var i2822 = []
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.push( request.d('TMPro.TMP_FontWeightPair', i2823[i + 0]) );
  }
  i2802.fontWeights = i2822
  return i2802
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2824 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2825 = data
  i2824.m_FaceIndex = i2825[0]
  i2824.m_FamilyName = i2825[1]
  i2824.m_StyleName = i2825[2]
  i2824.m_PointSize = i2825[3]
  i2824.m_Scale = i2825[4]
  i2824.m_UnitsPerEM = i2825[5]
  i2824.m_LineHeight = i2825[6]
  i2824.m_AscentLine = i2825[7]
  i2824.m_CapLine = i2825[8]
  i2824.m_MeanLine = i2825[9]
  i2824.m_Baseline = i2825[10]
  i2824.m_DescentLine = i2825[11]
  i2824.m_SuperscriptOffset = i2825[12]
  i2824.m_SuperscriptSize = i2825[13]
  i2824.m_SubscriptOffset = i2825[14]
  i2824.m_SubscriptSize = i2825[15]
  i2824.m_UnderlineOffset = i2825[16]
  i2824.m_UnderlineThickness = i2825[17]
  i2824.m_StrikethroughOffset = i2825[18]
  i2824.m_StrikethroughThickness = i2825[19]
  i2824.m_TabWidth = i2825[20]
  return i2824
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2828 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2829 = data
  i2828.m_Index = i2829[0]
  i2828.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2829[1], i2828.m_Metrics)
  i2828.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2829[2], i2828.m_GlyphRect)
  i2828.m_Scale = i2829[3]
  i2828.m_AtlasIndex = i2829[4]
  i2828.m_ClassDefinitionType = i2829[5]
  return i2828
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2830 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2831 = data
  i2830.m_Width = i2831[0]
  i2830.m_Height = i2831[1]
  i2830.m_HorizontalBearingX = i2831[2]
  i2830.m_HorizontalBearingY = i2831[3]
  i2830.m_HorizontalAdvance = i2831[4]
  return i2830
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2832 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2833 = data
  i2832.m_X = i2833[0]
  i2832.m_Y = i2833[1]
  i2832.m_Width = i2833[2]
  i2832.m_Height = i2833[3]
  return i2832
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2836 = root || request.c( 'TMPro.TMP_Character' )
  var i2837 = data
  i2836.m_ElementType = i2837[0]
  i2836.m_Unicode = i2837[1]
  i2836.m_GlyphIndex = i2837[2]
  i2836.m_Scale = i2837[3]
  return i2836
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2842 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2843 = data
  i2842.Name = i2843[0]
  i2842.PointSize = i2843[1]
  i2842.Scale = i2843[2]
  i2842.CharacterCount = i2843[3]
  i2842.LineHeight = i2843[4]
  i2842.Baseline = i2843[5]
  i2842.Ascender = i2843[6]
  i2842.CapHeight = i2843[7]
  i2842.Descender = i2843[8]
  i2842.CenterLine = i2843[9]
  i2842.SuperscriptOffset = i2843[10]
  i2842.SubscriptOffset = i2843[11]
  i2842.SubSize = i2843[12]
  i2842.Underline = i2843[13]
  i2842.UnderlineThickness = i2843[14]
  i2842.strikethrough = i2843[15]
  i2842.strikethroughThickness = i2843[16]
  i2842.TabWidth = i2843[17]
  i2842.Padding = i2843[18]
  i2842.AtlasWidth = i2843[19]
  i2842.AtlasHeight = i2843[20]
  return i2842
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2846 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2847 = data
  i2846.id = i2847[0]
  i2846.x = i2847[1]
  i2846.y = i2847[2]
  i2846.width = i2847[3]
  i2846.height = i2847[4]
  i2846.xOffset = i2847[5]
  i2846.yOffset = i2847[6]
  i2846.xAdvance = i2847[7]
  i2846.scale = i2847[8]
  return i2846
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2848 = root || request.c( 'TMPro.KerningTable' )
  var i2849 = data
  var i2851 = i2849[0]
  var i2850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.add(request.d('TMPro.KerningPair', i2851[i + 0]));
  }
  i2848.kerningPairs = i2850
  return i2848
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2854 = root || request.c( 'TMPro.KerningPair' )
  var i2855 = data
  i2854.xOffset = i2855[0]
  i2854.m_FirstGlyph = i2855[1]
  i2854.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2855[2], i2854.m_FirstGlyphAdjustments)
  i2854.m_SecondGlyph = i2855[3]
  i2854.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2855[4], i2854.m_SecondGlyphAdjustments)
  i2854.m_IgnoreSpacingAdjustments = !!i2855[5]
  return i2854
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2856 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2857 = data
  var i2859 = i2857[0]
  var i2858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2859[i + 0]));
  }
  i2856.m_GlyphPairAdjustmentRecords = i2858
  return i2856
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2862 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2863 = data
  i2862.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2863[0], i2862.m_FirstAdjustmentRecord)
  i2862.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2863[1], i2862.m_SecondAdjustmentRecord)
  i2862.m_FeatureLookupFlags = i2863[2]
  return i2862
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2866 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2867 = data
  i2866.sourceFontFileName = i2867[0]
  i2866.sourceFontFileGUID = i2867[1]
  i2866.pointSizeSamplingMode = i2867[2]
  i2866.pointSize = i2867[3]
  i2866.padding = i2867[4]
  i2866.packingMode = i2867[5]
  i2866.atlasWidth = i2867[6]
  i2866.atlasHeight = i2867[7]
  i2866.characterSetSelectionMode = i2867[8]
  i2866.characterSequence = i2867[9]
  i2866.referencedFontAssetGUID = i2867[10]
  i2866.referencedTextAssetGUID = i2867[11]
  i2866.fontStyle = i2867[12]
  i2866.fontStyleModifier = i2867[13]
  i2866.renderMode = i2867[14]
  i2866.includeFontFeatures = !!i2867[15]
  return i2866
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2870 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2871 = data
  request.r(i2871[0], i2871[1], 0, i2870, 'regularTypeface')
  request.r(i2871[2], i2871[3], 0, i2870, 'italicTypeface')
  return i2870
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2872 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2873 = data
  i2872.useSafeMode = !!i2873[0]
  i2872.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2873[1], i2872.safeModeOptions)
  i2872.timeScale = i2873[2]
  i2872.unscaledTimeScale = i2873[3]
  i2872.useSmoothDeltaTime = !!i2873[4]
  i2872.maxSmoothUnscaledTime = i2873[5]
  i2872.rewindCallbackMode = i2873[6]
  i2872.showUnityEditorReport = !!i2873[7]
  i2872.logBehaviour = i2873[8]
  i2872.drawGizmos = !!i2873[9]
  i2872.defaultRecyclable = !!i2873[10]
  i2872.defaultAutoPlay = i2873[11]
  i2872.defaultUpdateType = i2873[12]
  i2872.defaultTimeScaleIndependent = !!i2873[13]
  i2872.defaultEaseType = i2873[14]
  i2872.defaultEaseOvershootOrAmplitude = i2873[15]
  i2872.defaultEasePeriod = i2873[16]
  i2872.defaultAutoKill = !!i2873[17]
  i2872.defaultLoopType = i2873[18]
  i2872.debugMode = !!i2873[19]
  i2872.debugStoreTargetId = !!i2873[20]
  i2872.showPreviewPanel = !!i2873[21]
  i2872.storeSettingsLocation = i2873[22]
  i2872.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2873[23], i2872.modules)
  i2872.createASMDEF = !!i2873[24]
  i2872.showPlayingTweens = !!i2873[25]
  i2872.showPausedTweens = !!i2873[26]
  return i2872
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2874 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2875 = data
  i2874.logBehaviour = i2875[0]
  i2874.nestedTweenFailureBehaviour = i2875[1]
  return i2874
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2876 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2877 = data
  i2876.showPanel = !!i2877[0]
  i2876.audioEnabled = !!i2877[1]
  i2876.physicsEnabled = !!i2877[2]
  i2876.physics2DEnabled = !!i2877[3]
  i2876.spriteEnabled = !!i2877[4]
  i2876.uiEnabled = !!i2877[5]
  i2876.textMeshProEnabled = !!i2877[6]
  i2876.tk2DEnabled = !!i2877[7]
  i2876.deAudioEnabled = !!i2877[8]
  i2876.deUnityExtendedEnabled = !!i2877[9]
  i2876.epoOutlineEnabled = !!i2877[10]
  return i2876
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2878 = root || request.c( 'TMPro.TMP_Settings' )
  var i2879 = data
  i2878.m_enableWordWrapping = !!i2879[0]
  i2878.m_enableKerning = !!i2879[1]
  i2878.m_enableExtraPadding = !!i2879[2]
  i2878.m_enableTintAllSprites = !!i2879[3]
  i2878.m_enableParseEscapeCharacters = !!i2879[4]
  i2878.m_EnableRaycastTarget = !!i2879[5]
  i2878.m_GetFontFeaturesAtRuntime = !!i2879[6]
  i2878.m_missingGlyphCharacter = i2879[7]
  i2878.m_warningsDisabled = !!i2879[8]
  request.r(i2879[9], i2879[10], 0, i2878, 'm_defaultFontAsset')
  i2878.m_defaultFontAssetPath = i2879[11]
  i2878.m_defaultFontSize = i2879[12]
  i2878.m_defaultAutoSizeMinRatio = i2879[13]
  i2878.m_defaultAutoSizeMaxRatio = i2879[14]
  i2878.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2879[15], i2879[16] )
  i2878.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2879[17], i2879[18] )
  i2878.m_autoSizeTextContainer = !!i2879[19]
  i2878.m_IsTextObjectScaleStatic = !!i2879[20]
  var i2881 = i2879[21]
  var i2880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2881.length; i += 2) {
  request.r(i2881[i + 0], i2881[i + 1], 1, i2880, '')
  }
  i2878.m_fallbackFontAssets = i2880
  i2878.m_matchMaterialPreset = !!i2879[22]
  request.r(i2879[23], i2879[24], 0, i2878, 'm_defaultSpriteAsset')
  i2878.m_defaultSpriteAssetPath = i2879[25]
  i2878.m_enableEmojiSupport = !!i2879[26]
  i2878.m_MissingCharacterSpriteUnicode = i2879[27]
  i2878.m_defaultColorGradientPresetsPath = i2879[28]
  request.r(i2879[29], i2879[30], 0, i2878, 'm_defaultStyleSheet')
  i2878.m_StyleSheetsResourcePath = i2879[31]
  request.r(i2879[32], i2879[33], 0, i2878, 'm_leadingCharacters')
  request.r(i2879[34], i2879[35], 0, i2878, 'm_followingCharacters')
  i2878.m_UseModernHangulLineBreakingRules = !!i2879[36]
  return i2878
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2882 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2883 = data
  i2882.m_GlyphIndex = i2883[0]
  i2882.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2883[1], i2882.m_GlyphValueRecord)
  return i2882
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2884 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2885 = data
  i2884.m_XPlacement = i2885[0]
  i2884.m_YPlacement = i2885[1]
  i2884.m_XAdvance = i2885[2]
  i2884.m_YAdvance = i2885[3]
  return i2884
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2886 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2887 = data
  request.r(i2887[0], i2887[1], 0, i2886, 'spriteSheet')
  var i2889 = i2887[2]
  var i2888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.add(request.d('TMPro.TMP_Sprite', i2889[i + 0]));
  }
  i2886.spriteInfoList = i2888
  var i2891 = i2887[3]
  var i2890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2891.length; i += 2) {
  request.r(i2891[i + 0], i2891[i + 1], 1, i2890, '')
  }
  i2886.fallbackSpriteAssets = i2890
  i2886.hashCode = i2887[4]
  request.r(i2887[5], i2887[6], 0, i2886, 'material')
  i2886.materialHashCode = i2887[7]
  i2886.m_Version = i2887[8]
  i2886.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2887[9], i2886.m_FaceInfo)
  var i2893 = i2887[10]
  var i2892 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2893.length; i += 1) {
    i2892.add(request.d('TMPro.TMP_SpriteCharacter', i2893[i + 0]));
  }
  i2886.m_SpriteCharacterTable = i2892
  var i2895 = i2887[11]
  var i2894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2895.length; i += 1) {
    i2894.add(request.d('TMPro.TMP_SpriteGlyph', i2895[i + 0]));
  }
  i2886.m_SpriteGlyphTable = i2894
  return i2886
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2898 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2899 = data
  i2898.name = i2899[0]
  i2898.hashCode = i2899[1]
  i2898.unicode = i2899[2]
  i2898.pivot = new pc.Vec2( i2899[3], i2899[4] )
  request.r(i2899[5], i2899[6], 0, i2898, 'sprite')
  i2898.id = i2899[7]
  i2898.x = i2899[8]
  i2898.y = i2899[9]
  i2898.width = i2899[10]
  i2898.height = i2899[11]
  i2898.xOffset = i2899[12]
  i2898.yOffset = i2899[13]
  i2898.xAdvance = i2899[14]
  i2898.scale = i2899[15]
  return i2898
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2904 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2905 = data
  i2904.m_Name = i2905[0]
  i2904.m_HashCode = i2905[1]
  i2904.m_ElementType = i2905[2]
  i2904.m_Unicode = i2905[3]
  i2904.m_GlyphIndex = i2905[4]
  i2904.m_Scale = i2905[5]
  return i2904
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2908 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2909 = data
  request.r(i2909[0], i2909[1], 0, i2908, 'sprite')
  i2908.m_Index = i2909[2]
  i2908.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2909[3], i2908.m_Metrics)
  i2908.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2909[4], i2908.m_GlyphRect)
  i2908.m_Scale = i2909[5]
  i2908.m_AtlasIndex = i2909[6]
  i2908.m_ClassDefinitionType = i2909[7]
  return i2908
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2910 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2911 = data
  var i2913 = i2911[0]
  var i2912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2913.length; i += 1) {
    i2912.add(request.d('TMPro.TMP_Style', i2913[i + 0]));
  }
  i2910.m_StyleList = i2912
  return i2910
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2916 = root || request.c( 'TMPro.TMP_Style' )
  var i2917 = data
  i2916.m_Name = i2917[0]
  i2916.m_HashCode = i2917[1]
  i2916.m_OpeningDefinition = i2917[2]
  i2916.m_ClosingDefinition = i2917[3]
  i2916.m_OpeningTagArray = i2917[4]
  i2916.m_ClosingTagArray = i2917[5]
  i2916.m_OpeningTagUnicodeArray = i2917[6]
  i2916.m_ClosingTagUnicodeArray = i2917[7]
  return i2916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2919 = data
  var i2921 = i2919[0]
  var i2920 = []
  for(var i = 0; i < i2921.length; i += 1) {
    i2920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2921[i + 0]) );
  }
  i2918.files = i2920
  i2918.componentToPrefabIds = i2919[1]
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2925 = data
  i2924.path = i2925[0]
  request.r(i2925[1], i2925[2], 0, i2924, 'unityObject')
  return i2924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2927 = data
  var i2929 = i2927[0]
  var i2928 = []
  for(var i = 0; i < i2929.length; i += 1) {
    i2928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2929[i + 0]) );
  }
  i2926.scriptsExecutionOrder = i2928
  var i2931 = i2927[1]
  var i2930 = []
  for(var i = 0; i < i2931.length; i += 1) {
    i2930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2931[i + 0]) );
  }
  i2926.sortingLayers = i2930
  var i2933 = i2927[2]
  var i2932 = []
  for(var i = 0; i < i2933.length; i += 1) {
    i2932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2933[i + 0]) );
  }
  i2926.cullingLayers = i2932
  i2926.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2927[3], i2926.timeSettings)
  i2926.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2927[4], i2926.physicsSettings)
  i2926.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2927[5], i2926.physics2DSettings)
  i2926.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2927[6], i2926.qualitySettings)
  i2926.enableRealtimeShadows = !!i2927[7]
  i2926.enableAutoInstancing = !!i2927[8]
  i2926.enableStaticBatching = !!i2927[9]
  i2926.enableDynamicBatching = !!i2927[10]
  i2926.lightmapEncodingQuality = i2927[11]
  i2926.desiredColorSpace = i2927[12]
  var i2935 = i2927[13]
  var i2934 = []
  for(var i = 0; i < i2935.length; i += 1) {
    i2934.push( i2935[i + 0] );
  }
  i2926.allTags = i2934
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2939 = data
  i2938.name = i2939[0]
  i2938.value = i2939[1]
  return i2938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2943 = data
  i2942.id = i2943[0]
  i2942.name = i2943[1]
  i2942.value = i2943[2]
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2947 = data
  i2946.id = i2947[0]
  i2946.name = i2947[1]
  return i2946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2949 = data
  i2948.fixedDeltaTime = i2949[0]
  i2948.maximumDeltaTime = i2949[1]
  i2948.timeScale = i2949[2]
  i2948.maximumParticleTimestep = i2949[3]
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2951 = data
  i2950.gravity = new pc.Vec3( i2951[0], i2951[1], i2951[2] )
  i2950.defaultSolverIterations = i2951[3]
  i2950.bounceThreshold = i2951[4]
  i2950.autoSyncTransforms = !!i2951[5]
  i2950.autoSimulation = !!i2951[6]
  var i2953 = i2951[7]
  var i2952 = []
  for(var i = 0; i < i2953.length; i += 1) {
    i2952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2953[i + 0]) );
  }
  i2950.collisionMatrix = i2952
  return i2950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2957 = data
  i2956.enabled = !!i2957[0]
  i2956.layerId = i2957[1]
  i2956.otherLayerId = i2957[2]
  return i2956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2959 = data
  request.r(i2959[0], i2959[1], 0, i2958, 'material')
  i2958.gravity = new pc.Vec2( i2959[2], i2959[3] )
  i2958.positionIterations = i2959[4]
  i2958.velocityIterations = i2959[5]
  i2958.velocityThreshold = i2959[6]
  i2958.maxLinearCorrection = i2959[7]
  i2958.maxAngularCorrection = i2959[8]
  i2958.maxTranslationSpeed = i2959[9]
  i2958.maxRotationSpeed = i2959[10]
  i2958.baumgarteScale = i2959[11]
  i2958.baumgarteTOIScale = i2959[12]
  i2958.timeToSleep = i2959[13]
  i2958.linearSleepTolerance = i2959[14]
  i2958.angularSleepTolerance = i2959[15]
  i2958.defaultContactOffset = i2959[16]
  i2958.autoSimulation = !!i2959[17]
  i2958.queriesHitTriggers = !!i2959[18]
  i2958.queriesStartInColliders = !!i2959[19]
  i2958.callbacksOnDisable = !!i2959[20]
  i2958.reuseCollisionCallbacks = !!i2959[21]
  i2958.autoSyncTransforms = !!i2959[22]
  var i2961 = i2959[23]
  var i2960 = []
  for(var i = 0; i < i2961.length; i += 1) {
    i2960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2961[i + 0]) );
  }
  i2958.collisionMatrix = i2960
  return i2958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2965 = data
  i2964.enabled = !!i2965[0]
  i2964.layerId = i2965[1]
  i2964.otherLayerId = i2965[2]
  return i2964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2967 = data
  var i2969 = i2967[0]
  var i2968 = []
  for(var i = 0; i < i2969.length; i += 1) {
    i2968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2969[i + 0]) );
  }
  i2966.qualityLevels = i2968
  var i2971 = i2967[1]
  var i2970 = []
  for(var i = 0; i < i2971.length; i += 1) {
    i2970.push( i2971[i + 0] );
  }
  i2966.names = i2970
  i2966.shadows = i2967[2]
  i2966.anisotropicFiltering = i2967[3]
  i2966.antiAliasing = i2967[4]
  i2966.lodBias = i2967[5]
  i2966.shadowCascades = i2967[6]
  i2966.shadowDistance = i2967[7]
  i2966.shadowmaskMode = i2967[8]
  i2966.shadowProjection = i2967[9]
  i2966.shadowResolution = i2967[10]
  i2966.softParticles = !!i2967[11]
  i2966.softVegetation = !!i2967[12]
  i2966.activeColorSpace = i2967[13]
  i2966.desiredColorSpace = i2967[14]
  i2966.masterTextureLimit = i2967[15]
  i2966.maxQueuedFrames = i2967[16]
  i2966.particleRaycastBudget = i2967[17]
  i2966.pixelLightCount = i2967[18]
  i2966.realtimeReflectionProbes = !!i2967[19]
  i2966.shadowCascade2Split = i2967[20]
  i2966.shadowCascade4Split = new pc.Vec3( i2967[21], i2967[22], i2967[23] )
  i2966.streamingMipmapsActive = !!i2967[24]
  i2966.vSyncCount = i2967[25]
  i2966.asyncUploadBufferSize = i2967[26]
  i2966.asyncUploadTimeSlice = i2967[27]
  i2966.billboardsFaceCameraPosition = !!i2967[28]
  i2966.shadowNearPlaneOffset = i2967[29]
  i2966.streamingMipmapsMemoryBudget = i2967[30]
  i2966.maximumLODLevel = i2967[31]
  i2966.streamingMipmapsAddAllCameras = !!i2967[32]
  i2966.streamingMipmapsMaxLevelReduction = i2967[33]
  i2966.streamingMipmapsRenderersPerFrame = i2967[34]
  i2966.resolutionScalingFixedDPIFactor = i2967[35]
  i2966.streamingMipmapsMaxFileIORequests = i2967[36]
  i2966.currentQualityLevel = i2967[37]
  return i2966
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2974 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2975 = data
  i2974.xPlacement = i2975[0]
  i2974.yPlacement = i2975[1]
  i2974.xAdvance = i2975[2]
  i2974.yAdvance = i2975[3]
  return i2974
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[3],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[3],"78":[79],"80":[81],"82":[81],"9":[8],"83":[84],"85":[86],"87":[84],"88":[8],"89":[8],"11":[9],"18":[19,8],"90":[8],"10":[9],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"96":[8],"97":[8],"36":[8],"98":[8],"16":[19,8],"99":[8],"100":[8],"101":[8],"102":[8],"103":[19,8],"104":[8],"105":[6],"106":[6],"7":[6],"107":[6],"108":[3],"109":[3],"110":[111],"112":[3],"113":[114],"115":[8],"116":[19,8],"117":[79],"23":[19,8],"118":[119,79],"120":[79],"121":[79,122],"123":[56],"124":[64],"125":[114],"126":[127],"128":[8],"129":[79,8],"17":[8,19],"130":[8],"131":[19,8],"132":[79],"133":[19,8],"134":[8],"135":[84]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","MixSkeletonSkin","DropID","UnityEngine.PolygonCollider2D","ClickItem","UnityEngine.CanvasGroup","DragID","DropZone","DraggableItem","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "279.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "36041";

Deserializers.projectId = "e0c7d7b99f381904ba55b26de53e9500";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

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

Deserializers.applicationIdentifier = "com.DefaultCompany.Minecraft-Clone";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "7723cd04-570b-4785-a4d6-812fd381c5d8";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

