var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2478 = root || request.c( 'UnityEngine.JointSpring' )
  var i2479 = data
  i2478.spring = i2479[0]
  i2478.damper = i2479[1]
  i2478.targetPosition = i2479[2]
  return i2478
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2480 = root || request.c( 'UnityEngine.JointMotor' )
  var i2481 = data
  i2480.m_TargetVelocity = i2481[0]
  i2480.m_Force = i2481[1]
  i2480.m_FreeSpin = i2481[2]
  return i2480
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2482 = root || request.c( 'UnityEngine.JointLimits' )
  var i2483 = data
  i2482.m_Min = i2483[0]
  i2482.m_Max = i2483[1]
  i2482.m_Bounciness = i2483[2]
  i2482.m_BounceMinVelocity = i2483[3]
  i2482.m_ContactDistance = i2483[4]
  i2482.minBounce = i2483[5]
  i2482.maxBounce = i2483[6]
  return i2482
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2484 = root || request.c( 'UnityEngine.JointDrive' )
  var i2485 = data
  i2484.m_PositionSpring = i2485[0]
  i2484.m_PositionDamper = i2485[1]
  i2484.m_MaximumForce = i2485[2]
  i2484.m_UseAcceleration = i2485[3]
  return i2484
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2486 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2487 = data
  i2486.m_Spring = i2487[0]
  i2486.m_Damper = i2487[1]
  return i2486
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2488 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2489 = data
  i2488.m_Limit = i2489[0]
  i2488.m_Bounciness = i2489[1]
  i2488.m_ContactDistance = i2489[2]
  return i2488
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2490 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2491 = data
  i2490.m_ExtremumSlip = i2491[0]
  i2490.m_ExtremumValue = i2491[1]
  i2490.m_AsymptoteSlip = i2491[2]
  i2490.m_AsymptoteValue = i2491[3]
  i2490.m_Stiffness = i2491[4]
  return i2490
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2492 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2493 = data
  i2492.m_LowerAngle = i2493[0]
  i2492.m_UpperAngle = i2493[1]
  return i2492
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2494 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2495 = data
  i2494.m_MotorSpeed = i2495[0]
  i2494.m_MaximumMotorTorque = i2495[1]
  return i2494
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2496 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2497 = data
  i2496.m_DampingRatio = i2497[0]
  i2496.m_Frequency = i2497[1]
  i2496.m_Angle = i2497[2]
  return i2496
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2498 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2499 = data
  i2498.m_LowerTranslation = i2499[0]
  i2498.m_UpperTranslation = i2499[1]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2501 = data
  i2500.name = i2501[0]
  i2500.width = i2501[1]
  i2500.height = i2501[2]
  i2500.mipmapCount = i2501[3]
  i2500.anisoLevel = i2501[4]
  i2500.filterMode = i2501[5]
  i2500.hdr = !!i2501[6]
  i2500.format = i2501[7]
  i2500.wrapMode = i2501[8]
  i2500.alphaIsTransparency = !!i2501[9]
  i2500.alphaSource = i2501[10]
  i2500.graphicsFormat = i2501[11]
  i2500.sRGBTexture = !!i2501[12]
  i2500.desiredColorSpace = i2501[13]
  i2500.wrapU = i2501[14]
  i2500.wrapV = i2501[15]
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2502 = root || new pc.UnityMaterial()
  var i2503 = data
  i2502.name = i2503[0]
  request.r(i2503[1], i2503[2], 0, i2502, 'shader')
  i2502.renderQueue = i2503[3]
  i2502.enableInstancing = !!i2503[4]
  var i2505 = i2503[5]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2505[i + 0]) );
  }
  i2502.floatParameters = i2504
  var i2507 = i2503[6]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2507[i + 0]) );
  }
  i2502.colorParameters = i2506
  var i2509 = i2503[7]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2509[i + 0]) );
  }
  i2502.vectorParameters = i2508
  var i2511 = i2503[8]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2511[i + 0]) );
  }
  i2502.textureParameters = i2510
  var i2513 = i2503[9]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2513[i + 0]) );
  }
  i2502.materialFlags = i2512
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2517 = data
  i2516.name = i2517[0]
  i2516.value = i2517[1]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2521 = data
  i2520.name = i2521[0]
  i2520.value = new pc.Color(i2521[1], i2521[2], i2521[3], i2521[4])
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2525 = data
  i2524.name = i2525[0]
  i2524.value = new pc.Vec4( i2525[1], i2525[2], i2525[3], i2525[4] )
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2529 = data
  i2528.name = i2529[0]
  request.r(i2529[1], i2529[2], 0, i2528, 'value')
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2533 = data
  i2532.name = i2533[0]
  i2532.enabled = !!i2533[1]
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2535 = data
  i2534.name = i2535[0]
  i2534.index = i2535[1]
  i2534.startup = !!i2535[2]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2537 = data
  i2536.aspect = i2537[0]
  i2536.orthographic = !!i2537[1]
  i2536.orthographicSize = i2537[2]
  i2536.backgroundColor = new pc.Color(i2537[3], i2537[4], i2537[5], i2537[6])
  i2536.nearClipPlane = i2537[7]
  i2536.farClipPlane = i2537[8]
  i2536.fieldOfView = i2537[9]
  i2536.depth = i2537[10]
  i2536.clearFlags = i2537[11]
  i2536.cullingMask = i2537[12]
  i2536.rect = i2537[13]
  request.r(i2537[14], i2537[15], 0, i2536, 'targetTexture')
  i2536.usePhysicalProperties = !!i2537[16]
  i2536.focalLength = i2537[17]
  i2536.sensorSize = new pc.Vec2( i2537[18], i2537[19] )
  i2536.lensShift = new pc.Vec2( i2537[20], i2537[21] )
  i2536.gateFit = i2537[22]
  i2536.commandBufferCount = i2537[23]
  i2536.cameraType = i2537[24]
  i2536.enabled = !!i2537[25]
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2539 = data
  i2538.name = i2539[0]
  i2538.tagId = i2539[1]
  i2538.enabled = !!i2539[2]
  i2538.isStatic = !!i2539[3]
  i2538.layer = i2539[4]
  return i2538
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2540 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2541 = data
  request.r(i2541[0], i2541[1], 0, i2540, 'm_FirstSelected')
  i2540.m_sendNavigationEvents = !!i2541[2]
  i2540.m_DragThreshold = i2541[3]
  return i2540
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2542 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2543 = data
  i2542.m_HorizontalAxis = i2543[0]
  i2542.m_VerticalAxis = i2543[1]
  i2542.m_SubmitButton = i2543[2]
  i2542.m_CancelButton = i2543[3]
  i2542.m_InputActionsPerSecond = i2543[4]
  i2542.m_RepeatDelay = i2543[5]
  i2542.m_ForceModuleActive = !!i2543[6]
  i2542.m_SendPointerHoverToParent = !!i2543[7]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2545 = data
  i2544.pivot = new pc.Vec2( i2545[0], i2545[1] )
  i2544.anchorMin = new pc.Vec2( i2545[2], i2545[3] )
  i2544.anchorMax = new pc.Vec2( i2545[4], i2545[5] )
  i2544.sizeDelta = new pc.Vec2( i2545[6], i2545[7] )
  i2544.anchoredPosition3D = new pc.Vec3( i2545[8], i2545[9], i2545[10] )
  i2544.rotation = new pc.Quat(i2545[11], i2545[12], i2545[13], i2545[14])
  i2544.scale = new pc.Vec3( i2545[15], i2545[16], i2545[17] )
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2547 = data
  i2546.planeDistance = i2547[0]
  i2546.referencePixelsPerUnit = i2547[1]
  i2546.isFallbackOverlay = !!i2547[2]
  i2546.renderMode = i2547[3]
  i2546.renderOrder = i2547[4]
  i2546.sortingLayerName = i2547[5]
  i2546.sortingOrder = i2547[6]
  i2546.scaleFactor = i2547[7]
  request.r(i2547[8], i2547[9], 0, i2546, 'worldCamera')
  i2546.overrideSorting = !!i2547[10]
  i2546.pixelPerfect = !!i2547[11]
  i2546.targetDisplay = i2547[12]
  i2546.overridePixelPerfect = !!i2547[13]
  i2546.enabled = !!i2547[14]
  return i2546
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2548 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2549 = data
  i2548.m_UiScaleMode = i2549[0]
  i2548.m_ReferencePixelsPerUnit = i2549[1]
  i2548.m_ScaleFactor = i2549[2]
  i2548.m_ReferenceResolution = new pc.Vec2( i2549[3], i2549[4] )
  i2548.m_ScreenMatchMode = i2549[5]
  i2548.m_MatchWidthOrHeight = i2549[6]
  i2548.m_PhysicalUnit = i2549[7]
  i2548.m_FallbackScreenDPI = i2549[8]
  i2548.m_DefaultSpriteDPI = i2549[9]
  i2548.m_DynamicPixelsPerUnit = i2549[10]
  i2548.m_PresetInfoIsWorld = !!i2549[11]
  return i2548
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2550 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2551 = data
  i2550.m_IgnoreReversedGraphics = !!i2551[0]
  i2550.m_BlockingObjects = i2551[1]
  i2550.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2551[2] )
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2553 = data
  i2552.cullTransparentMesh = !!i2553[0]
  return i2552
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2554 = root || request.c( 'UnityEngine.UI.Image' )
  var i2555 = data
  request.r(i2555[0], i2555[1], 0, i2554, 'm_Sprite')
  i2554.m_Type = i2555[2]
  i2554.m_PreserveAspect = !!i2555[3]
  i2554.m_FillCenter = !!i2555[4]
  i2554.m_FillMethod = i2555[5]
  i2554.m_FillAmount = i2555[6]
  i2554.m_FillClockwise = !!i2555[7]
  i2554.m_FillOrigin = i2555[8]
  i2554.m_UseSpriteMesh = !!i2555[9]
  i2554.m_PixelsPerUnitMultiplier = i2555[10]
  request.r(i2555[11], i2555[12], 0, i2554, 'm_Material')
  i2554.m_Maskable = !!i2555[13]
  i2554.m_Color = new pc.Color(i2555[14], i2555[15], i2555[16], i2555[17])
  i2554.m_RaycastTarget = !!i2555[18]
  i2554.m_RaycastPadding = new pc.Vec4( i2555[19], i2555[20], i2555[21], i2555[22] )
  return i2554
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2556 = root || request.c( 'UnityEngine.UI.Text' )
  var i2557 = data
  i2556.m_FontData = request.d('UnityEngine.UI.FontData', i2557[0], i2556.m_FontData)
  i2556.m_Text = i2557[1]
  request.r(i2557[2], i2557[3], 0, i2556, 'm_Material')
  i2556.m_Maskable = !!i2557[4]
  i2556.m_Color = new pc.Color(i2557[5], i2557[6], i2557[7], i2557[8])
  i2556.m_RaycastTarget = !!i2557[9]
  i2556.m_RaycastPadding = new pc.Vec4( i2557[10], i2557[11], i2557[12], i2557[13] )
  return i2556
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2558 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2559 = data
  request.r(i2559[0], i2559[1], 0, i2558, 'm_Font')
  i2558.m_FontSize = i2559[2]
  i2558.m_FontStyle = i2559[3]
  i2558.m_BestFit = !!i2559[4]
  i2558.m_MinSize = i2559[5]
  i2558.m_MaxSize = i2559[6]
  i2558.m_Alignment = i2559[7]
  i2558.m_AlignByGeometry = !!i2559[8]
  i2558.m_RichText = !!i2559[9]
  i2558.m_HorizontalOverflow = i2559[10]
  i2558.m_VerticalOverflow = i2559[11]
  i2558.m_LineSpacing = i2559[12]
  return i2558
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2560 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2561 = data
  request.r(i2561[0], i2561[1], 0, i2560, 'm_FillRect')
  request.r(i2561[2], i2561[3], 0, i2560, 'm_HandleRect')
  i2560.m_Direction = i2561[4]
  i2560.m_MinValue = i2561[5]
  i2560.m_MaxValue = i2561[6]
  i2560.m_WholeNumbers = !!i2561[7]
  i2560.m_Value = i2561[8]
  i2560.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2561[9], i2560.m_OnValueChanged)
  i2560.m_Navigation = request.d('UnityEngine.UI.Navigation', i2561[10], i2560.m_Navigation)
  i2560.m_Transition = i2561[11]
  i2560.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2561[12], i2560.m_Colors)
  i2560.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2561[13], i2560.m_SpriteState)
  i2560.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2561[14], i2560.m_AnimationTriggers)
  i2560.m_Interactable = !!i2561[15]
  request.r(i2561[16], i2561[17], 0, i2560, 'm_TargetGraphic')
  return i2560
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2562 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2563 = data
  i2562.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2563[0], i2562.m_PersistentCalls)
  return i2562
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2564 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2565 = data
  var i2567 = i2565[0]
  var i2566 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.add(request.d('UnityEngine.Events.PersistentCall', i2567[i + 0]));
  }
  i2564.m_Calls = i2566
  return i2564
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2570 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2571 = data
  request.r(i2571[0], i2571[1], 0, i2570, 'm_Target')
  i2570.m_TargetAssemblyTypeName = i2571[2]
  i2570.m_MethodName = i2571[3]
  i2570.m_Mode = i2571[4]
  i2570.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2571[5], i2570.m_Arguments)
  i2570.m_CallState = i2571[6]
  return i2570
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2572 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2573 = data
  i2572.m_Mode = i2573[0]
  i2572.m_WrapAround = !!i2573[1]
  request.r(i2573[2], i2573[3], 0, i2572, 'm_SelectOnUp')
  request.r(i2573[4], i2573[5], 0, i2572, 'm_SelectOnDown')
  request.r(i2573[6], i2573[7], 0, i2572, 'm_SelectOnLeft')
  request.r(i2573[8], i2573[9], 0, i2572, 'm_SelectOnRight')
  return i2572
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2574 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2575 = data
  i2574.m_NormalColor = new pc.Color(i2575[0], i2575[1], i2575[2], i2575[3])
  i2574.m_HighlightedColor = new pc.Color(i2575[4], i2575[5], i2575[6], i2575[7])
  i2574.m_PressedColor = new pc.Color(i2575[8], i2575[9], i2575[10], i2575[11])
  i2574.m_SelectedColor = new pc.Color(i2575[12], i2575[13], i2575[14], i2575[15])
  i2574.m_DisabledColor = new pc.Color(i2575[16], i2575[17], i2575[18], i2575[19])
  i2574.m_ColorMultiplier = i2575[20]
  i2574.m_FadeDuration = i2575[21]
  return i2574
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2576 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2577 = data
  request.r(i2577[0], i2577[1], 0, i2576, 'm_HighlightedSprite')
  request.r(i2577[2], i2577[3], 0, i2576, 'm_PressedSprite')
  request.r(i2577[4], i2577[5], 0, i2576, 'm_SelectedSprite')
  request.r(i2577[6], i2577[7], 0, i2576, 'm_DisabledSprite')
  return i2576
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2578 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2579 = data
  i2578.m_NormalTrigger = i2579[0]
  i2578.m_HighlightedTrigger = i2579[1]
  i2578.m_PressedTrigger = i2579[2]
  i2578.m_SelectedTrigger = i2579[3]
  i2578.m_DisabledTrigger = i2579[4]
  return i2578
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2580 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2581 = data
  i2580.m_ShowMaskGraphic = !!i2581[0]
  return i2580
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2582 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2583 = data
  request.r(i2583[0], i2583[1], 0, i2582, 'skeletonDataAsset')
  request.r(i2583[2], i2583[3], 0, i2582, 'additiveMaterial')
  request.r(i2583[4], i2583[5], 0, i2582, 'multiplyMaterial')
  request.r(i2583[6], i2583[7], 0, i2582, 'screenMaterial')
  i2582.forceAdditiveMaterial = !!i2583[8]
  i2582.initialSkinName = i2583[9]
  i2582.initialFlipX = !!i2583[10]
  i2582.initialFlipY = !!i2583[11]
  i2582.startingAnimation = i2583[12]
  i2582.startingLoop = !!i2583[13]
  i2582.timeScale = i2583[14]
  i2582.freeze = !!i2583[15]
  i2582.layoutScaleMode = i2583[16]
  i2582.updateWhenInvisible = i2583[17]
  i2582.allowMultipleCanvasRenderers = !!i2583[18]
  var i2585 = i2583[19]
  var i2584 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2585.length; i += 2) {
  request.r(i2585[i + 0], i2585[i + 1], 1, i2584, '')
  }
  i2582.canvasRenderers = i2584
  i2582.enableSeparatorSlots = !!i2583[20]
  i2582.updateSeparatorPartLocation = !!i2583[21]
  i2582.updateSeparatorPartScale = !!i2583[22]
  i2582.disableMeshAssignmentOnOverride = !!i2583[23]
  i2582.m_SkeletonColor = new pc.Color(i2583[24], i2583[25], i2583[26], i2583[27])
  i2582.referenceSize = new pc.Vec2( i2583[28], i2583[29] )
  i2582.pivotOffset = new pc.Vec2( i2583[30], i2583[31] )
  i2582.referenceScale = i2583[32]
  i2582.layoutScale = i2583[33]
  i2582.rectTransformSize = new pc.Vec2( i2583[34], i2583[35] )
  i2582.editReferenceRect = !!i2583[36]
  var i2587 = i2583[37]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( i2587[i + 0] );
  }
  i2582.separatorSlotNames = i2586
  var i2589 = i2583[38]
  var i2588 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2589.length; i += 2) {
  request.r(i2589[i + 0], i2589[i + 1], 1, i2588, '')
  }
  i2582.separatorParts = i2588
  i2582.physicsPositionInheritanceFactor = new pc.Vec2( i2583[39], i2583[40] )
  i2582.physicsRotationInheritanceFactor = i2583[41]
  request.r(i2583[42], i2583[43], 0, i2582, 'physicsMovementRelativeTo')
  i2582.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2583[44], i2582.meshGenerator)
  i2582.updateTiming = i2583[45]
  i2582.unscaledTime = !!i2583[46]
  request.r(i2583[47], i2583[48], 0, i2582, 'm_Material')
  i2582.m_Maskable = !!i2583[49]
  i2582.m_Color = new pc.Color(i2583[50], i2583[51], i2583[52], i2583[53])
  i2582.m_RaycastTarget = !!i2583[54]
  i2582.m_RaycastPadding = new pc.Vec4( i2583[55], i2583[56], i2583[57], i2583[58] )
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
  i2598.tintBlack = !!i2599[2]
  i2598.canvasGroupCompatible = !!i2599[3]
  i2598.pmaVertexColors = !!i2599[4]
  i2598.addNormals = !!i2599[5]
  i2598.calculateTangents = !!i2599[6]
  i2598.immutableTriangles = !!i2599[7]
  return i2598
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i2600 = root || request.c( 'AnimationController' )
  var i2601 = data
  request.r(i2601[0], i2601[1], 0, i2600, 'skeleton')
  var i2603 = i2601[2]
  var i2602 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.add(request.d('Anim', i2603[i + 0]));
  }
  i2600.anims = i2602
  return i2600
}

Deserializers["Anim"] = function (request, data, root) {
  var i2606 = root || request.c( 'Anim' )
  var i2607 = data
  i2606.Key = i2607[0]
  var i2609 = i2607[1]
  var i2608 = new (System.Collections.Generic.List$1(Bridge.ns('Sound')))
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.add(request.d('Sound', i2609[i + 0]));
  }
  i2606.Sounds = i2608
  i2606.Loop = !!i2607[2]
  i2606.Next = !!i2607[3]
  i2606.NextTime = i2607[4]
  i2606.DestroyOnComplete = !!i2607[5]
  return i2606
}

Deserializers["Sound"] = function (request, data, root) {
  var i2612 = root || request.c( 'Sound' )
  var i2613 = data
  i2612.TimeDelay = i2613[0]
  request.r(i2613[1], i2613[2], 0, i2612, 'Clip')
  return i2612
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2614 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2615 = data
  i2614.targetIsSelf = !!i2615[0]
  request.r(i2615[1], i2615[2], 0, i2614, 'targetGO')
  i2614.tweenTargetIsTargetGO = !!i2615[3]
  i2614.delay = i2615[4]
  i2614.duration = i2615[5]
  i2614.easeType = i2615[6]
  i2614.easeCurve = new pc.AnimationCurve( { keys_flow: i2615[7] } )
  i2614.loopType = i2615[8]
  i2614.loops = i2615[9]
  i2614.id = i2615[10]
  i2614.isRelative = !!i2615[11]
  i2614.isFrom = !!i2615[12]
  i2614.isIndependentUpdate = !!i2615[13]
  i2614.autoKill = !!i2615[14]
  i2614.autoGenerate = !!i2615[15]
  i2614.isActive = !!i2615[16]
  i2614.isValid = !!i2615[17]
  request.r(i2615[18], i2615[19], 0, i2614, 'target')
  i2614.animationType = i2615[20]
  i2614.targetType = i2615[21]
  i2614.forcedTargetType = i2615[22]
  i2614.autoPlay = !!i2615[23]
  i2614.useTargetAsV3 = !!i2615[24]
  i2614.endValueFloat = i2615[25]
  i2614.endValueV3 = new pc.Vec3( i2615[26], i2615[27], i2615[28] )
  i2614.endValueV2 = new pc.Vec2( i2615[29], i2615[30] )
  i2614.endValueColor = new pc.Color(i2615[31], i2615[32], i2615[33], i2615[34])
  i2614.endValueString = i2615[35]
  i2614.endValueRect = UnityEngine.Rect.MinMaxRect(i2615[36], i2615[37], i2615[38], i2615[39])
  request.r(i2615[40], i2615[41], 0, i2614, 'endValueTransform')
  i2614.optionalBool0 = !!i2615[42]
  i2614.optionalBool1 = !!i2615[43]
  i2614.optionalFloat0 = i2615[44]
  i2614.optionalInt0 = i2615[45]
  i2614.optionalRotationMode = i2615[46]
  i2614.optionalScrambleMode = i2615[47]
  i2614.optionalShakeRandomnessMode = i2615[48]
  i2614.optionalString = i2615[49]
  i2614.updateType = i2615[50]
  i2614.isSpeedBased = !!i2615[51]
  i2614.hasOnStart = !!i2615[52]
  i2614.hasOnPlay = !!i2615[53]
  i2614.hasOnUpdate = !!i2615[54]
  i2614.hasOnStepComplete = !!i2615[55]
  i2614.hasOnComplete = !!i2615[56]
  i2614.hasOnTweenCreated = !!i2615[57]
  i2614.hasOnRewind = !!i2615[58]
  i2614.onStart = request.d('UnityEngine.Events.UnityEvent', i2615[59], i2614.onStart)
  i2614.onPlay = request.d('UnityEngine.Events.UnityEvent', i2615[60], i2614.onPlay)
  i2614.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2615[61], i2614.onUpdate)
  i2614.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2615[62], i2614.onStepComplete)
  i2614.onComplete = request.d('UnityEngine.Events.UnityEvent', i2615[63], i2614.onComplete)
  i2614.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2615[64], i2614.onTweenCreated)
  i2614.onRewind = request.d('UnityEngine.Events.UnityEvent', i2615[65], i2614.onRewind)
  return i2614
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2616 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2617 = data
  i2616.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2617[0], i2616.m_PersistentCalls)
  return i2616
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2618 = root || request.c( 'UnityEngine.UI.Button' )
  var i2619 = data
  i2618.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2619[0], i2618.m_OnClick)
  i2618.m_Navigation = request.d('UnityEngine.UI.Navigation', i2619[1], i2618.m_Navigation)
  i2618.m_Transition = i2619[2]
  i2618.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2619[3], i2618.m_Colors)
  i2618.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2619[4], i2618.m_SpriteState)
  i2618.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2619[5], i2618.m_AnimationTriggers)
  i2618.m_Interactable = !!i2619[6]
  request.r(i2619[7], i2619[8], 0, i2618, 'm_TargetGraphic')
  return i2618
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2620 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2621 = data
  i2620.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2621[0], i2620.m_PersistentCalls)
  return i2620
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2622 = root || request.c( 'LunaController' )
  var i2623 = data
  i2622.TimePlay = i2623[0]
  i2622.CountPlay = i2623[1]
  i2622.BGColor = new pc.Color(i2623[2], i2623[3], i2623[4], i2623[5])
  i2622.GameBGColor = new pc.Color(i2623[6], i2623[7], i2623[8], i2623[9])
  i2622.LevelTextColor = new pc.Color(i2623[10], i2623[11], i2623[12], i2623[13])
  i2622.TitleTextColor = new pc.Color(i2623[14], i2623[15], i2623[16], i2623[17])
  request.r(i2623[18], i2623[19], 0, i2622, 'time')
  request.r(i2623[20], i2623[21], 0, i2622, 'BGImage')
  request.r(i2623[22], i2623[23], 0, i2622, 'GameBGImage')
  request.r(i2623[24], i2623[25], 0, i2622, 'levelText')
  request.r(i2623[26], i2623[27], 0, i2622, 'titleText')
  request.r(i2623[28], i2623[29], 0, i2622, 'subBG')
  request.r(i2623[30], i2623[31], 0, i2622, 'endCard')
  var i2625 = i2623[32]
  var i2624 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2625.length; i += 2) {
  request.r(i2625[i + 0], i2625[i + 1], 1, i2624, '')
  }
  i2622.CTA = i2624
  i2622.count = i2623[33]
  return i2622
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i2628 = root || request.c( 'LayoutController' )
  var i2629 = data
  request.r(i2629[0], i2629[1], 0, i2628, 'CTA')
  i2628.hide = !!i2629[2]
  return i2628
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2630 = root || request.c( 'AudioController' )
  var i2631 = data
  request.r(i2631[0], i2631[1], 0, i2630, 'BGM')
  request.r(i2631[2], i2631[3], 0, i2630, 'musicSource')
  request.r(i2631[4], i2631[5], 0, i2630, 'SFXPool')
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2633 = data
  request.r(i2633[0], i2633[1], 0, i2632, 'clip')
  request.r(i2633[2], i2633[3], 0, i2632, 'outputAudioMixerGroup')
  i2632.playOnAwake = !!i2633[4]
  i2632.loop = !!i2633[5]
  i2632.time = i2633[6]
  i2632.volume = i2633[7]
  i2632.pitch = i2633[8]
  i2632.enabled = !!i2633[9]
  return i2632
}

Deserializers["InteractController"] = function (request, data, root) {
  var i2634 = root || request.c( 'InteractController' )
  var i2635 = data
  request.r(i2635[0], i2635[1], 0, i2634, 'canvas')
  request.r(i2635[2], i2635[3], 0, i2634, 'tut')
  return i2634
}

Deserializers["GameController"] = function (request, data, root) {
  var i2636 = root || request.c( 'GameController' )
  var i2637 = data
  i2636.OnComplete = request.d('System.Action', i2637[0], i2636.OnComplete)
  i2636.CompleteStep = request.d('System.Action', i2637[1], i2636.CompleteStep)
  var i2639 = i2637[2]
  var i2638 = new (System.Collections.Generic.List$1(Bridge.ns('SkeletonAnim')))
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.add(request.d('SkeletonAnim', i2639[i + 0]));
  }
  i2636.skeletons = i2638
  i2636.complete = !!i2637[3]
  i2636.currentStep = i2637[4]
  i2636.maxStep = i2637[5]
  request.r(i2637[6], i2637[7], 0, i2636, 'currentStepText')
  request.r(i2637[8], i2637[9], 0, i2636, 'maxStepText')
  request.r(i2637[10], i2637[11], 0, i2636, 'slider')
  i2636.DelayComplete = i2637[12]
  return i2636
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2640 = root || request.c( 'System.Action' )
  var i2641 = data
  return i2640
}

Deserializers["SkeletonAnim"] = function (request, data, root) {
  var i2644 = root || request.c( 'SkeletonAnim' )
  var i2645 = data
  request.r(i2645[0], i2645[1], 0, i2644, 'Area')
  request.r(i2645[2], i2645[3], 0, i2644, 'Anim')
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2647 = data
  i2646.ambientIntensity = i2647[0]
  i2646.reflectionIntensity = i2647[1]
  i2646.ambientMode = i2647[2]
  i2646.ambientLight = new pc.Color(i2647[3], i2647[4], i2647[5], i2647[6])
  i2646.ambientSkyColor = new pc.Color(i2647[7], i2647[8], i2647[9], i2647[10])
  i2646.ambientGroundColor = new pc.Color(i2647[11], i2647[12], i2647[13], i2647[14])
  i2646.ambientEquatorColor = new pc.Color(i2647[15], i2647[16], i2647[17], i2647[18])
  i2646.fogColor = new pc.Color(i2647[19], i2647[20], i2647[21], i2647[22])
  i2646.fogEndDistance = i2647[23]
  i2646.fogStartDistance = i2647[24]
  i2646.fogDensity = i2647[25]
  i2646.fog = !!i2647[26]
  request.r(i2647[27], i2647[28], 0, i2646, 'skybox')
  i2646.fogMode = i2647[29]
  var i2649 = i2647[30]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2649[i + 0]) );
  }
  i2646.lightmaps = i2648
  i2646.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2647[31], i2646.lightProbes)
  i2646.lightmapsMode = i2647[32]
  i2646.mixedBakeMode = i2647[33]
  i2646.environmentLightingMode = i2647[34]
  i2646.ambientProbe = new pc.SphericalHarmonicsL2(i2647[35])
  request.r(i2647[36], i2647[37], 0, i2646, 'customReflection')
  request.r(i2647[38], i2647[39], 0, i2646, 'defaultReflection')
  i2646.defaultReflectionMode = i2647[40]
  i2646.defaultReflectionResolution = i2647[41]
  i2646.sunLightObjectId = i2647[42]
  i2646.pixelLightCount = i2647[43]
  i2646.defaultReflectionHDR = !!i2647[44]
  i2646.hasLightDataAsset = !!i2647[45]
  i2646.hasManualGenerate = !!i2647[46]
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2653 = data
  request.r(i2653[0], i2653[1], 0, i2652, 'lightmapColor')
  request.r(i2653[2], i2653[3], 0, i2652, 'lightmapDirection')
  request.r(i2653[4], i2653[5], 0, i2652, 'shadowMask')
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2654 = root || new UnityEngine.LightProbes()
  var i2655 = data
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2663 = data
  var i2665 = i2663[0]
  var i2664 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2665[i + 0]));
  }
  i2662.ShaderCompilationErrors = i2664
  i2662.name = i2663[1]
  i2662.guid = i2663[2]
  var i2667 = i2663[3]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.push( i2667[i + 0] );
  }
  i2662.shaderDefinedKeywords = i2666
  var i2669 = i2663[4]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2669[i + 0]) );
  }
  i2662.passes = i2668
  var i2671 = i2663[5]
  var i2670 = []
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2671[i + 0]) );
  }
  i2662.usePasses = i2670
  var i2673 = i2663[6]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2673[i + 0]) );
  }
  i2662.defaultParameterValues = i2672
  request.r(i2663[7], i2663[8], 0, i2662, 'unityFallbackShader')
  i2662.readDepth = !!i2663[9]
  i2662.hasDepthOnlyPass = !!i2663[10]
  i2662.isCreatedByShaderGraph = !!i2663[11]
  i2662.disableBatching = !!i2663[12]
  i2662.compiled = !!i2663[13]
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2677 = data
  i2676.shaderName = i2677[0]
  i2676.errorMessage = i2677[1]
  return i2676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2680 = root || new pc.UnityShaderPass()
  var i2681 = data
  i2680.id = i2681[0]
  i2680.subShaderIndex = i2681[1]
  i2680.name = i2681[2]
  i2680.passType = i2681[3]
  i2680.grabPassTextureName = i2681[4]
  i2680.usePass = !!i2681[5]
  i2680.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2681[6], i2680.zTest)
  i2680.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2681[7], i2680.zWrite)
  i2680.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2681[8], i2680.culling)
  i2680.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2681[9], i2680.blending)
  i2680.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2681[10], i2680.alphaBlending)
  i2680.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2681[11], i2680.colorWriteMask)
  i2680.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2681[12], i2680.offsetUnits)
  i2680.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2681[13], i2680.offsetFactor)
  i2680.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2681[14], i2680.stencilRef)
  i2680.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2681[15], i2680.stencilReadMask)
  i2680.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2681[16], i2680.stencilWriteMask)
  i2680.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2681[17], i2680.stencilOp)
  i2680.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2681[18], i2680.stencilOpFront)
  i2680.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2681[19], i2680.stencilOpBack)
  var i2683 = i2681[20]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2683[i + 0]) );
  }
  i2680.tags = i2682
  var i2685 = i2681[21]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( i2685[i + 0] );
  }
  i2680.passDefinedKeywords = i2684
  var i2687 = i2681[22]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2687[i + 0]) );
  }
  i2680.passDefinedKeywordGroups = i2686
  var i2689 = i2681[23]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2689[i + 0]) );
  }
  i2680.variants = i2688
  var i2691 = i2681[24]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2691[i + 0]) );
  }
  i2680.excludedVariants = i2690
  i2680.hasDepthReader = !!i2681[25]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2693 = data
  i2692.val = i2693[0]
  i2692.name = i2693[1]
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2695 = data
  i2694.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2695[0], i2694.src)
  i2694.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2695[1], i2694.dst)
  i2694.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2695[2], i2694.op)
  return i2694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2697 = data
  i2696.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2697[0], i2696.pass)
  i2696.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2697[1], i2696.fail)
  i2696.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2697[2], i2696.zFail)
  i2696.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2697[3], i2696.comp)
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2701 = data
  i2700.name = i2701[0]
  i2700.value = i2701[1]
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2705 = data
  var i2707 = i2705[0]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( i2707[i + 0] );
  }
  i2704.keywords = i2706
  i2704.hasDiscard = !!i2705[1]
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2711 = data
  i2710.passId = i2711[0]
  i2710.subShaderIndex = i2711[1]
  var i2713 = i2711[2]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( i2713[i + 0] );
  }
  i2710.keywords = i2712
  i2710.vertexProgram = i2711[3]
  i2710.fragmentProgram = i2711[4]
  i2710.exportedForWebGl2 = !!i2711[5]
  i2710.readDepth = !!i2711[6]
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2717 = data
  request.r(i2717[0], i2717[1], 0, i2716, 'shader')
  i2716.pass = i2717[2]
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2721 = data
  i2720.name = i2721[0]
  i2720.type = i2721[1]
  i2720.value = new pc.Vec4( i2721[2], i2721[3], i2721[4], i2721[5] )
  i2720.textureValue = i2721[6]
  i2720.shaderPropertyFlag = i2721[7]
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2723 = data
  i2722.name = i2723[0]
  request.r(i2723[1], i2723[2], 0, i2722, 'texture')
  i2722.aabb = i2723[3]
  i2722.vertices = i2723[4]
  i2722.triangles = i2723[5]
  i2722.textureRect = UnityEngine.Rect.MinMaxRect(i2723[6], i2723[7], i2723[8], i2723[9])
  i2722.packedRect = UnityEngine.Rect.MinMaxRect(i2723[10], i2723[11], i2723[12], i2723[13])
  i2722.border = new pc.Vec4( i2723[14], i2723[15], i2723[16], i2723[17] )
  i2722.transparency = i2723[18]
  i2722.bounds = i2723[19]
  i2722.pixelsPerUnit = i2723[20]
  i2722.textureWidth = i2723[21]
  i2722.textureHeight = i2723[22]
  i2722.nativeSize = new pc.Vec2( i2723[23], i2723[24] )
  i2722.pivot = new pc.Vec2( i2723[25], i2723[26] )
  i2722.textureRectOffset = new pc.Vec2( i2723[27], i2723[28] )
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2725 = data
  i2724.name = i2725[0]
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2727 = data
  i2726.name = i2727[0]
  i2726.ascent = i2727[1]
  i2726.originalLineHeight = i2727[2]
  i2726.fontSize = i2727[3]
  var i2729 = i2727[4]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2729[i + 0]) );
  }
  i2726.characterInfo = i2728
  request.r(i2727[5], i2727[6], 0, i2726, 'texture')
  i2726.originalFontSize = i2727[7]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2733 = data
  i2732.index = i2733[0]
  i2732.advance = i2733[1]
  i2732.bearing = i2733[2]
  i2732.glyphWidth = i2733[3]
  i2732.glyphHeight = i2733[4]
  i2732.minX = i2733[5]
  i2732.maxX = i2733[6]
  i2732.minY = i2733[7]
  i2732.maxY = i2733[8]
  i2732.uvBottomLeftX = i2733[9]
  i2732.uvBottomLeftY = i2733[10]
  i2732.uvBottomRightX = i2733[11]
  i2732.uvBottomRightY = i2733[12]
  i2732.uvTopLeftX = i2733[13]
  i2732.uvTopLeftY = i2733[14]
  i2732.uvTopRightX = i2733[15]
  i2732.uvTopRightY = i2733[16]
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2735 = data
  i2734.name = i2735[0]
  i2734.bytes64 = i2735[1]
  i2734.data = i2735[2]
  return i2734
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2736 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2737 = data
  var i2739 = i2737[0]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 2) {
  request.r(i2739[i + 0], i2739[i + 1], 2, i2738, '')
  }
  i2736.atlasAssets = i2738
  i2736.scale = i2737[1]
  request.r(i2737[2], i2737[3], 0, i2736, 'skeletonJSON')
  i2736.isUpgradingBlendModeMaterials = !!i2737[4]
  i2736.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2737[5], i2736.blendModeMaterials)
  var i2741 = i2737[6]
  var i2740 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2741.length; i += 2) {
  request.r(i2741[i + 0], i2741[i + 1], 1, i2740, '')
  }
  i2736.skeletonDataModifiers = i2740
  var i2743 = i2737[7]
  var i2742 = []
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.push( i2743[i + 0] );
  }
  i2736.fromAnimation = i2742
  var i2745 = i2737[8]
  var i2744 = []
  for(var i = 0; i < i2745.length; i += 1) {
    i2744.push( i2745[i + 0] );
  }
  i2736.toAnimation = i2744
  i2736.duration = i2737[9]
  i2736.defaultMix = i2737[10]
  request.r(i2737[11], i2737[12], 0, i2736, 'controller')
  return i2736
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2748 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2749 = data
  i2748.applyAdditiveMaterial = !!i2749[0]
  var i2751 = i2749[1]
  var i2750 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2751[i + 0]));
  }
  i2748.additiveMaterials = i2750
  var i2753 = i2749[2]
  var i2752 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2753[i + 0]));
  }
  i2748.multiplyMaterials = i2752
  var i2755 = i2749[3]
  var i2754 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2755.length; i += 1) {
    i2754.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2755[i + 0]));
  }
  i2748.screenMaterials = i2754
  i2748.requiresBlendModeMaterials = !!i2749[4]
  return i2748
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2758 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2759 = data
  i2758.pageName = i2759[0]
  request.r(i2759[1], i2759[2], 0, i2758, 'material')
  return i2758
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2762 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2763 = data
  request.r(i2763[0], i2763[1], 0, i2762, 'atlasFile')
  var i2765 = i2763[2]
  var i2764 = []
  for(var i = 0; i < i2765.length; i += 2) {
  request.r(i2765[i + 0], i2765[i + 1], 2, i2764, '')
  }
  i2762.materials = i2764
  i2762.textureLoadingMode = i2763[3]
  request.r(i2763[4], i2763[5], 0, i2762, 'onDemandTextureLoader')
  return i2762
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2768 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2769 = data
  i2768.useSafeMode = !!i2769[0]
  i2768.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2769[1], i2768.safeModeOptions)
  i2768.timeScale = i2769[2]
  i2768.unscaledTimeScale = i2769[3]
  i2768.useSmoothDeltaTime = !!i2769[4]
  i2768.maxSmoothUnscaledTime = i2769[5]
  i2768.rewindCallbackMode = i2769[6]
  i2768.showUnityEditorReport = !!i2769[7]
  i2768.logBehaviour = i2769[8]
  i2768.drawGizmos = !!i2769[9]
  i2768.defaultRecyclable = !!i2769[10]
  i2768.defaultAutoPlay = i2769[11]
  i2768.defaultUpdateType = i2769[12]
  i2768.defaultTimeScaleIndependent = !!i2769[13]
  i2768.defaultEaseType = i2769[14]
  i2768.defaultEaseOvershootOrAmplitude = i2769[15]
  i2768.defaultEasePeriod = i2769[16]
  i2768.defaultAutoKill = !!i2769[17]
  i2768.defaultLoopType = i2769[18]
  i2768.debugMode = !!i2769[19]
  i2768.debugStoreTargetId = !!i2769[20]
  i2768.showPreviewPanel = !!i2769[21]
  i2768.storeSettingsLocation = i2769[22]
  i2768.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2769[23], i2768.modules)
  i2768.createASMDEF = !!i2769[24]
  i2768.showPlayingTweens = !!i2769[25]
  i2768.showPausedTweens = !!i2769[26]
  return i2768
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2770 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2771 = data
  i2770.logBehaviour = i2771[0]
  i2770.nestedTweenFailureBehaviour = i2771[1]
  return i2770
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2772 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2773 = data
  i2772.showPanel = !!i2773[0]
  i2772.audioEnabled = !!i2773[1]
  i2772.physicsEnabled = !!i2773[2]
  i2772.physics2DEnabled = !!i2773[3]
  i2772.spriteEnabled = !!i2773[4]
  i2772.uiEnabled = !!i2773[5]
  i2772.textMeshProEnabled = !!i2773[6]
  i2772.tk2DEnabled = !!i2773[7]
  i2772.deAudioEnabled = !!i2773[8]
  i2772.deUnityExtendedEnabled = !!i2773[9]
  i2772.epoOutlineEnabled = !!i2773[10]
  return i2772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2775 = data
  var i2777 = i2775[0]
  var i2776 = []
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2777[i + 0]) );
  }
  i2774.files = i2776
  i2774.componentToPrefabIds = i2775[1]
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2781 = data
  i2780.path = i2781[0]
  request.r(i2781[1], i2781[2], 0, i2780, 'unityObject')
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2783 = data
  var i2785 = i2783[0]
  var i2784 = []
  for(var i = 0; i < i2785.length; i += 1) {
    i2784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2785[i + 0]) );
  }
  i2782.scriptsExecutionOrder = i2784
  var i2787 = i2783[1]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2787[i + 0]) );
  }
  i2782.sortingLayers = i2786
  var i2789 = i2783[2]
  var i2788 = []
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2789[i + 0]) );
  }
  i2782.cullingLayers = i2788
  i2782.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2783[3], i2782.timeSettings)
  i2782.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2783[4], i2782.physicsSettings)
  i2782.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2783[5], i2782.physics2DSettings)
  i2782.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2783[6], i2782.qualitySettings)
  i2782.enableRealtimeShadows = !!i2783[7]
  i2782.enableAutoInstancing = !!i2783[8]
  i2782.enableStaticBatching = !!i2783[9]
  i2782.enableDynamicBatching = !!i2783[10]
  i2782.usePreservativeDynamicBatching = !!i2783[11]
  i2782.lightmapEncodingQuality = i2783[12]
  i2782.desiredColorSpace = i2783[13]
  var i2791 = i2783[14]
  var i2790 = []
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.push( i2791[i + 0] );
  }
  i2782.allTags = i2790
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2795 = data
  i2794.name = i2795[0]
  i2794.value = i2795[1]
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2799 = data
  i2798.id = i2799[0]
  i2798.name = i2799[1]
  i2798.value = i2799[2]
  return i2798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2803 = data
  i2802.id = i2803[0]
  i2802.name = i2803[1]
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2805 = data
  i2804.fixedDeltaTime = i2805[0]
  i2804.maximumDeltaTime = i2805[1]
  i2804.timeScale = i2805[2]
  i2804.maximumParticleTimestep = i2805[3]
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2807 = data
  i2806.gravity = new pc.Vec3( i2807[0], i2807[1], i2807[2] )
  i2806.defaultSolverIterations = i2807[3]
  i2806.bounceThreshold = i2807[4]
  i2806.autoSyncTransforms = !!i2807[5]
  i2806.autoSimulation = !!i2807[6]
  var i2809 = i2807[7]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2809[i + 0]) );
  }
  i2806.collisionMatrix = i2808
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2813 = data
  i2812.enabled = !!i2813[0]
  i2812.layerId = i2813[1]
  i2812.otherLayerId = i2813[2]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2815 = data
  request.r(i2815[0], i2815[1], 0, i2814, 'material')
  i2814.gravity = new pc.Vec2( i2815[2], i2815[3] )
  i2814.positionIterations = i2815[4]
  i2814.velocityIterations = i2815[5]
  i2814.velocityThreshold = i2815[6]
  i2814.maxLinearCorrection = i2815[7]
  i2814.maxAngularCorrection = i2815[8]
  i2814.maxTranslationSpeed = i2815[9]
  i2814.maxRotationSpeed = i2815[10]
  i2814.baumgarteScale = i2815[11]
  i2814.baumgarteTOIScale = i2815[12]
  i2814.timeToSleep = i2815[13]
  i2814.linearSleepTolerance = i2815[14]
  i2814.angularSleepTolerance = i2815[15]
  i2814.defaultContactOffset = i2815[16]
  i2814.autoSimulation = !!i2815[17]
  i2814.queriesHitTriggers = !!i2815[18]
  i2814.queriesStartInColliders = !!i2815[19]
  i2814.callbacksOnDisable = !!i2815[20]
  i2814.reuseCollisionCallbacks = !!i2815[21]
  i2814.autoSyncTransforms = !!i2815[22]
  var i2817 = i2815[23]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2817[i + 0]) );
  }
  i2814.collisionMatrix = i2816
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2821 = data
  i2820.enabled = !!i2821[0]
  i2820.layerId = i2821[1]
  i2820.otherLayerId = i2821[2]
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2823 = data
  var i2825 = i2823[0]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2825[i + 0]) );
  }
  i2822.qualityLevels = i2824
  var i2827 = i2823[1]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.push( i2827[i + 0] );
  }
  i2822.names = i2826
  i2822.shadows = i2823[2]
  i2822.anisotropicFiltering = i2823[3]
  i2822.antiAliasing = i2823[4]
  i2822.lodBias = i2823[5]
  i2822.shadowCascades = i2823[6]
  i2822.shadowDistance = i2823[7]
  i2822.shadowmaskMode = i2823[8]
  i2822.shadowProjection = i2823[9]
  i2822.shadowResolution = i2823[10]
  i2822.softParticles = !!i2823[11]
  i2822.softVegetation = !!i2823[12]
  i2822.activeColorSpace = i2823[13]
  i2822.desiredColorSpace = i2823[14]
  i2822.masterTextureLimit = i2823[15]
  i2822.maxQueuedFrames = i2823[16]
  i2822.particleRaycastBudget = i2823[17]
  i2822.pixelLightCount = i2823[18]
  i2822.realtimeReflectionProbes = !!i2823[19]
  i2822.shadowCascade2Split = i2823[20]
  i2822.shadowCascade4Split = new pc.Vec3( i2823[21], i2823[22], i2823[23] )
  i2822.streamingMipmapsActive = !!i2823[24]
  i2822.vSyncCount = i2823[25]
  i2822.asyncUploadBufferSize = i2823[26]
  i2822.asyncUploadTimeSlice = i2823[27]
  i2822.billboardsFaceCameraPosition = !!i2823[28]
  i2822.shadowNearPlaneOffset = i2823[29]
  i2822.streamingMipmapsMemoryBudget = i2823[30]
  i2822.maximumLODLevel = i2823[31]
  i2822.streamingMipmapsAddAllCameras = !!i2823[32]
  i2822.streamingMipmapsMaxLevelReduction = i2823[33]
  i2822.streamingMipmapsRenderersPerFrame = i2823[34]
  i2822.resolutionScalingFixedDPIFactor = i2823[35]
  i2822.streamingMipmapsMaxFileIORequests = i2823[36]
  i2822.currentQualityLevel = i2823[37]
  return i2822
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2830 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2831 = data
  request.r(i2831[0], i2831[1], 0, i2830, 'm_ObjectArgument')
  i2830.m_ObjectArgumentAssemblyTypeName = i2831[2]
  i2830.m_IntArgument = i2831[3]
  i2830.m_FloatArgument = i2831[4]
  i2830.m_StringArgument = i2831[5]
  i2830.m_BoolArgument = !!i2831[6]
  return i2830
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"37":[38],"39":[38],"40":[38],"41":[38],"42":[38],"43":[38],"44":[45],"46":[2],"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[55],"63":[55],"64":[55],"65":[55],"66":[55],"67":[55],"68":[2],"69":[70],"71":[72],"73":[72],"8":[7],"22":[18],"74":[75],"76":[7],"77":[11,7],"78":[70],"18":[11,7],"79":[80,70],"81":[70,82],"83":[70],"84":[48],"85":[55],"86":[75],"87":[88],"89":[90],"91":[2],"92":[93],"94":[7],"95":[11,7],"96":[70],"97":[11,7],"98":[7],"99":[7],"100":[70,7],"101":[7,11],"102":[103],"104":[103],"105":[103],"106":[7],"107":[7],"10":[8],"12":[11,7],"108":[7],"9":[8],"109":[7],"110":[7],"111":[7],"112":[7],"113":[7],"114":[7],"115":[7],"17":[7],"116":[7],"117":[11,7],"118":[7],"119":[7],"120":[7],"16":[7],"13":[11,7],"121":[7],"122":[5],"123":[5],"6":[5],"124":[5],"125":[2],"126":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.Slider","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","UnityEngine.AudioClip","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","LunaController","LayoutController","UnityEngine.GameObject","AudioController","UnityEngine.AudioSource","UnityEngine.Transform","InteractController","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "08/04/2026 07:03:05";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BM_V24_NgocBTU_TamNTM";

Deserializers.lunaAppID = "34530";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1935";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4824";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BMTP_Luna";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "c61a7be6-4b2d-45df-9e53-2e4ef2e7cd9e";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

