var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2400 = root || request.c( 'UnityEngine.JointSpring' )
  var i2401 = data
  i2400.spring = i2401[0]
  i2400.damper = i2401[1]
  i2400.targetPosition = i2401[2]
  return i2400
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2402 = root || request.c( 'UnityEngine.JointMotor' )
  var i2403 = data
  i2402.m_TargetVelocity = i2403[0]
  i2402.m_Force = i2403[1]
  i2402.m_FreeSpin = i2403[2]
  return i2402
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2404 = root || request.c( 'UnityEngine.JointLimits' )
  var i2405 = data
  i2404.m_Min = i2405[0]
  i2404.m_Max = i2405[1]
  i2404.m_Bounciness = i2405[2]
  i2404.m_BounceMinVelocity = i2405[3]
  i2404.m_ContactDistance = i2405[4]
  i2404.minBounce = i2405[5]
  i2404.maxBounce = i2405[6]
  return i2404
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.JointDrive' )
  var i2407 = data
  i2406.m_PositionSpring = i2407[0]
  i2406.m_PositionDamper = i2407[1]
  i2406.m_MaximumForce = i2407[2]
  i2406.m_UseAcceleration = i2407[3]
  return i2406
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2408 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2409 = data
  i2408.m_Spring = i2409[0]
  i2408.m_Damper = i2409[1]
  return i2408
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2410 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2411 = data
  i2410.m_Limit = i2411[0]
  i2410.m_Bounciness = i2411[1]
  i2410.m_ContactDistance = i2411[2]
  return i2410
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2412 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2413 = data
  i2412.m_ExtremumSlip = i2413[0]
  i2412.m_ExtremumValue = i2413[1]
  i2412.m_AsymptoteSlip = i2413[2]
  i2412.m_AsymptoteValue = i2413[3]
  i2412.m_Stiffness = i2413[4]
  return i2412
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2414 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2415 = data
  i2414.m_LowerAngle = i2415[0]
  i2414.m_UpperAngle = i2415[1]
  return i2414
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2416 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2417 = data
  i2416.m_MotorSpeed = i2417[0]
  i2416.m_MaximumMotorTorque = i2417[1]
  return i2416
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2418 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2419 = data
  i2418.m_DampingRatio = i2419[0]
  i2418.m_Frequency = i2419[1]
  i2418.m_Angle = i2419[2]
  return i2418
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2420 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2421 = data
  i2420.m_LowerTranslation = i2421[0]
  i2420.m_UpperTranslation = i2421[1]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2423 = data
  i2422.name = i2423[0]
  i2422.width = i2423[1]
  i2422.height = i2423[2]
  i2422.mipmapCount = i2423[3]
  i2422.anisoLevel = i2423[4]
  i2422.filterMode = i2423[5]
  i2422.hdr = !!i2423[6]
  i2422.format = i2423[7]
  i2422.wrapMode = i2423[8]
  i2422.alphaIsTransparency = !!i2423[9]
  i2422.alphaSource = i2423[10]
  i2422.graphicsFormat = i2423[11]
  i2422.sRGBTexture = !!i2423[12]
  i2422.desiredColorSpace = i2423[13]
  i2422.wrapU = i2423[14]
  i2422.wrapV = i2423[15]
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2424 = root || new pc.UnityMaterial()
  var i2425 = data
  i2424.name = i2425[0]
  request.r(i2425[1], i2425[2], 0, i2424, 'shader')
  i2424.renderQueue = i2425[3]
  i2424.enableInstancing = !!i2425[4]
  var i2427 = i2425[5]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2427[i + 0]) );
  }
  i2424.floatParameters = i2426
  var i2429 = i2425[6]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2429[i + 0]) );
  }
  i2424.colorParameters = i2428
  var i2431 = i2425[7]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2431[i + 0]) );
  }
  i2424.vectorParameters = i2430
  var i2433 = i2425[8]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2433[i + 0]) );
  }
  i2424.textureParameters = i2432
  var i2435 = i2425[9]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2435[i + 0]) );
  }
  i2424.materialFlags = i2434
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2439 = data
  i2438.name = i2439[0]
  i2438.value = i2439[1]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2443 = data
  i2442.name = i2443[0]
  i2442.value = new pc.Color(i2443[1], i2443[2], i2443[3], i2443[4])
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2447 = data
  i2446.name = i2447[0]
  i2446.value = new pc.Vec4( i2447[1], i2447[2], i2447[3], i2447[4] )
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2451 = data
  i2450.name = i2451[0]
  request.r(i2451[1], i2451[2], 0, i2450, 'value')
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2455 = data
  i2454.name = i2455[0]
  i2454.enabled = !!i2455[1]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2457 = data
  i2456.name = i2457[0]
  i2456.index = i2457[1]
  i2456.startup = !!i2457[2]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2459 = data
  i2458.position = new pc.Vec3( i2459[0], i2459[1], i2459[2] )
  i2458.scale = new pc.Vec3( i2459[3], i2459[4], i2459[5] )
  i2458.rotation = new pc.Quat(i2459[6], i2459[7], i2459[8], i2459[9])
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2461 = data
  i2460.aspect = i2461[0]
  i2460.orthographic = !!i2461[1]
  i2460.orthographicSize = i2461[2]
  i2460.backgroundColor = new pc.Color(i2461[3], i2461[4], i2461[5], i2461[6])
  i2460.nearClipPlane = i2461[7]
  i2460.farClipPlane = i2461[8]
  i2460.fieldOfView = i2461[9]
  i2460.depth = i2461[10]
  i2460.clearFlags = i2461[11]
  i2460.cullingMask = i2461[12]
  i2460.rect = i2461[13]
  request.r(i2461[14], i2461[15], 0, i2460, 'targetTexture')
  i2460.usePhysicalProperties = !!i2461[16]
  i2460.focalLength = i2461[17]
  i2460.sensorSize = new pc.Vec2( i2461[18], i2461[19] )
  i2460.lensShift = new pc.Vec2( i2461[20], i2461[21] )
  i2460.gateFit = i2461[22]
  i2460.commandBufferCount = i2461[23]
  i2460.cameraType = i2461[24]
  i2460.enabled = !!i2461[25]
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2463 = data
  i2462.name = i2463[0]
  i2462.tagId = i2463[1]
  i2462.enabled = !!i2463[2]
  i2462.isStatic = !!i2463[3]
  i2462.layer = i2463[4]
  return i2462
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2464 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2465 = data
  request.r(i2465[0], i2465[1], 0, i2464, 'm_FirstSelected')
  i2464.m_sendNavigationEvents = !!i2465[2]
  i2464.m_DragThreshold = i2465[3]
  return i2464
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2466 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2467 = data
  i2466.m_HorizontalAxis = i2467[0]
  i2466.m_VerticalAxis = i2467[1]
  i2466.m_SubmitButton = i2467[2]
  i2466.m_CancelButton = i2467[3]
  i2466.m_InputActionsPerSecond = i2467[4]
  i2466.m_RepeatDelay = i2467[5]
  i2466.m_ForceModuleActive = !!i2467[6]
  i2466.m_SendPointerHoverToParent = !!i2467[7]
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2469 = data
  i2468.pivot = new pc.Vec2( i2469[0], i2469[1] )
  i2468.anchorMin = new pc.Vec2( i2469[2], i2469[3] )
  i2468.anchorMax = new pc.Vec2( i2469[4], i2469[5] )
  i2468.sizeDelta = new pc.Vec2( i2469[6], i2469[7] )
  i2468.anchoredPosition3D = new pc.Vec3( i2469[8], i2469[9], i2469[10] )
  i2468.rotation = new pc.Quat(i2469[11], i2469[12], i2469[13], i2469[14])
  i2468.scale = new pc.Vec3( i2469[15], i2469[16], i2469[17] )
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2471 = data
  i2470.planeDistance = i2471[0]
  i2470.referencePixelsPerUnit = i2471[1]
  i2470.isFallbackOverlay = !!i2471[2]
  i2470.renderMode = i2471[3]
  i2470.renderOrder = i2471[4]
  i2470.sortingLayerName = i2471[5]
  i2470.sortingOrder = i2471[6]
  i2470.scaleFactor = i2471[7]
  request.r(i2471[8], i2471[9], 0, i2470, 'worldCamera')
  i2470.overrideSorting = !!i2471[10]
  i2470.pixelPerfect = !!i2471[11]
  i2470.targetDisplay = i2471[12]
  i2470.overridePixelPerfect = !!i2471[13]
  i2470.enabled = !!i2471[14]
  return i2470
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2472 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2473 = data
  i2472.m_UiScaleMode = i2473[0]
  i2472.m_ReferencePixelsPerUnit = i2473[1]
  i2472.m_ScaleFactor = i2473[2]
  i2472.m_ReferenceResolution = new pc.Vec2( i2473[3], i2473[4] )
  i2472.m_ScreenMatchMode = i2473[5]
  i2472.m_MatchWidthOrHeight = i2473[6]
  i2472.m_PhysicalUnit = i2473[7]
  i2472.m_FallbackScreenDPI = i2473[8]
  i2472.m_DefaultSpriteDPI = i2473[9]
  i2472.m_DynamicPixelsPerUnit = i2473[10]
  i2472.m_PresetInfoIsWorld = !!i2473[11]
  return i2472
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2474 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2475 = data
  i2474.m_IgnoreReversedGraphics = !!i2475[0]
  i2474.m_BlockingObjects = i2475[1]
  i2474.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2475[2] )
  return i2474
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i2476 = root || request.c( 'LunaManager' )
  var i2477 = data
  var i2479 = i2477[0]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 2) {
  request.r(i2479[i + 0], i2479[i + 1], 2, i2478, '')
  }
  i2476.lstBtnInstall = i2478
  request.r(i2477[1], i2477[2], 0, i2476, 'WinGO')
  request.r(i2477[3], i2477[4], 0, i2476, 'LoseGO')
  request.r(i2477[5], i2477[6], 0, i2476, 'StartCard')
  request.r(i2477[7], i2477[8], 0, i2476, 'EndCard')
  request.r(i2477[9], i2477[10], 0, i2476, 'Parent')
  i2476.isDrag = !!i2477[11]
  i2476.timeDrag = i2477[12]
  i2476.countPlay = i2477[13]
  i2476.countPlayFinal = i2477[14]
  i2476.countPlayMax = i2477[15]
  i2476.timeDropFinal = i2477[16]
  i2476.colorBG = new pc.Color(i2477[17], i2477[18], i2477[19], i2477[20])
  request.r(i2477[21], i2477[22], 0, i2476, 'texture2D')
  request.r(i2477[23], i2477[24], 0, i2476, 'rawImageBG')
  request.r(i2477[25], i2477[26], 0, i2476, 'MSSGroom')
  request.r(i2477[27], i2477[28], 0, i2476, 'MSSBride')
  request.r(i2477[29], i2477[30], 0, i2476, 'textProgess')
  request.r(i2477[31], i2477[32], 0, i2476, 'imgProgess')
  request.r(i2477[33], i2477[34], 0, i2476, 'timeText')
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2483 = data
  i2482.cullTransparentMesh = !!i2483[0]
  return i2482
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2484 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2485 = data
  request.r(i2485[0], i2485[1], 0, i2484, 'm_Texture')
  i2484.m_UVRect = UnityEngine.Rect.MinMaxRect(i2485[2], i2485[3], i2485[4], i2485[5])
  i2484.m_Maskable = !!i2485[6]
  request.r(i2485[7], i2485[8], 0, i2484, 'm_Material')
  i2484.m_Color = new pc.Color(i2485[9], i2485[10], i2485[11], i2485[12])
  i2484.m_RaycastTarget = !!i2485[13]
  i2484.m_RaycastPadding = new pc.Vec4( i2485[14], i2485[15], i2485[16], i2485[17] )
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2487 = data
  request.r(i2487[0], i2487[1], 0, i2486, 'clip')
  request.r(i2487[2], i2487[3], 0, i2486, 'outputAudioMixerGroup')
  i2486.playOnAwake = !!i2487[4]
  i2486.loop = !!i2487[5]
  i2486.time = i2487[6]
  i2486.volume = i2487[7]
  i2486.pitch = i2487[8]
  i2486.enabled = !!i2487[9]
  return i2486
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2488 = root || request.c( 'UnityEngine.UI.Image' )
  var i2489 = data
  request.r(i2489[0], i2489[1], 0, i2488, 'm_Sprite')
  i2488.m_Type = i2489[2]
  i2488.m_PreserveAspect = !!i2489[3]
  i2488.m_FillCenter = !!i2489[4]
  i2488.m_FillMethod = i2489[5]
  i2488.m_FillAmount = i2489[6]
  i2488.m_FillClockwise = !!i2489[7]
  i2488.m_FillOrigin = i2489[8]
  i2488.m_UseSpriteMesh = !!i2489[9]
  i2488.m_PixelsPerUnitMultiplier = i2489[10]
  i2488.m_Maskable = !!i2489[11]
  request.r(i2489[12], i2489[13], 0, i2488, 'm_Material')
  i2488.m_Color = new pc.Color(i2489[14], i2489[15], i2489[16], i2489[17])
  i2488.m_RaycastTarget = !!i2489[18]
  i2488.m_RaycastPadding = new pc.Vec4( i2489[19], i2489[20], i2489[21], i2489[22] )
  return i2488
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i2490 = root || request.c( 'ClickItem' )
  var i2491 = data
  var i2493 = i2491[0]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 2) {
  request.r(i2493[i + 0], i2493[i + 1], 2, i2492, '')
  }
  i2490.steps = i2492
  i2490.currentStep = i2491[1]
  i2490.isProcess = !!i2491[2]
  return i2490
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2496 = root || request.c( 'UnityEngine.UI.Button' )
  var i2497 = data
  i2496.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2497[0], i2496.m_OnClick)
  i2496.m_Navigation = request.d('UnityEngine.UI.Navigation', i2497[1], i2496.m_Navigation)
  i2496.m_Transition = i2497[2]
  i2496.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2497[3], i2496.m_Colors)
  i2496.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2497[4], i2496.m_SpriteState)
  i2496.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2497[5], i2496.m_AnimationTriggers)
  i2496.m_Interactable = !!i2497[6]
  request.r(i2497[7], i2497[8], 0, i2496, 'm_TargetGraphic')
  return i2496
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2498 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2499 = data
  i2498.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2499[0], i2498.m_PersistentCalls)
  return i2498
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2500 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2501 = data
  var i2503 = i2501[0]
  var i2502 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.add(request.d('UnityEngine.Events.PersistentCall', i2503[i + 0]));
  }
  i2500.m_Calls = i2502
  return i2500
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2506 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2507 = data
  request.r(i2507[0], i2507[1], 0, i2506, 'm_Target')
  i2506.m_TargetAssemblyTypeName = i2507[2]
  i2506.m_MethodName = i2507[3]
  i2506.m_Mode = i2507[4]
  i2506.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2507[5], i2506.m_Arguments)
  i2506.m_CallState = i2507[6]
  return i2506
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2508 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2509 = data
  i2508.m_Mode = i2509[0]
  i2508.m_WrapAround = !!i2509[1]
  request.r(i2509[2], i2509[3], 0, i2508, 'm_SelectOnUp')
  request.r(i2509[4], i2509[5], 0, i2508, 'm_SelectOnDown')
  request.r(i2509[6], i2509[7], 0, i2508, 'm_SelectOnLeft')
  request.r(i2509[8], i2509[9], 0, i2508, 'm_SelectOnRight')
  return i2508
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2510 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2511 = data
  i2510.m_NormalColor = new pc.Color(i2511[0], i2511[1], i2511[2], i2511[3])
  i2510.m_HighlightedColor = new pc.Color(i2511[4], i2511[5], i2511[6], i2511[7])
  i2510.m_PressedColor = new pc.Color(i2511[8], i2511[9], i2511[10], i2511[11])
  i2510.m_SelectedColor = new pc.Color(i2511[12], i2511[13], i2511[14], i2511[15])
  i2510.m_DisabledColor = new pc.Color(i2511[16], i2511[17], i2511[18], i2511[19])
  i2510.m_ColorMultiplier = i2511[20]
  i2510.m_FadeDuration = i2511[21]
  return i2510
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2512 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2513 = data
  request.r(i2513[0], i2513[1], 0, i2512, 'm_HighlightedSprite')
  request.r(i2513[2], i2513[3], 0, i2512, 'm_PressedSprite')
  request.r(i2513[4], i2513[5], 0, i2512, 'm_SelectedSprite')
  request.r(i2513[6], i2513[7], 0, i2512, 'm_DisabledSprite')
  return i2512
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2514 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2515 = data
  i2514.m_NormalTrigger = i2515[0]
  i2514.m_HighlightedTrigger = i2515[1]
  i2514.m_PressedTrigger = i2515[2]
  i2514.m_SelectedTrigger = i2515[3]
  i2514.m_DisabledTrigger = i2515[4]
  return i2514
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i2516 = root || request.c( 'DraggableItem' )
  var i2517 = data
  i2516.idDrag = i2517[0]
  i2516.isProcess = !!i2517[1]
  i2516.isLose = !!i2517[2]
  i2516.isHide = !!i2517[3]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2519 = data
  i2518.m_Alpha = i2519[0]
  i2518.m_Interactable = !!i2519[1]
  i2518.m_BlocksRaycasts = !!i2519[2]
  i2518.m_IgnoreParentGroups = !!i2519[3]
  i2518.enabled = !!i2519[4]
  return i2518
}

Deserializers["DropZone"] = function (request, data, root) {
  var i2520 = root || request.c( 'DropZone' )
  var i2521 = data
  i2520.idDrop = i2521[0]
  var i2523 = i2521[1]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 2) {
  request.r(i2523[i + 0], i2523[i + 1], 2, i2522, '')
  }
  i2520.steps = i2522
  request.r(i2521[2], i2521[3], 0, i2520, 'stepLose')
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2525 = data
  i2524.usedByComposite = !!i2525[0]
  i2524.autoTiling = !!i2525[1]
  var i2527 = i2525[2]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
  var i2529 = i2527[i + 0]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 2) {
    i2528.push( new pc.Vec2( i2529[i + 0], i2529[i + 1] ) );
  }
    i2526.push( i2528 );
  }
  i2524.points = i2526
  i2524.enabled = !!i2525[3]
  i2524.isTrigger = !!i2525[4]
  i2524.usedByEffector = !!i2525[5]
  i2524.density = i2525[6]
  i2524.offset = new pc.Vec2( i2525[7], i2525[8] )
  request.r(i2525[9], i2525[10], 0, i2524, 'material')
  return i2524
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2536 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2537 = data
  request.r(i2537[0], i2537[1], 0, i2536, 'skeletonDataAsset')
  request.r(i2537[2], i2537[3], 0, i2536, 'additiveMaterial')
  request.r(i2537[4], i2537[5], 0, i2536, 'multiplyMaterial')
  request.r(i2537[6], i2537[7], 0, i2536, 'screenMaterial')
  i2536.initialSkinName = i2537[8]
  i2536.initialFlipX = !!i2537[9]
  i2536.initialFlipY = !!i2537[10]
  i2536.startingAnimation = i2537[11]
  i2536.startingLoop = !!i2537[12]
  i2536.timeScale = i2537[13]
  i2536.freeze = !!i2537[14]
  i2536.layoutScaleMode = i2537[15]
  i2536.updateWhenInvisible = i2537[16]
  i2536.allowMultipleCanvasRenderers = !!i2537[17]
  var i2539 = i2537[18]
  var i2538 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2539.length; i += 2) {
  request.r(i2539[i + 0], i2539[i + 1], 1, i2538, '')
  }
  i2536.canvasRenderers = i2538
  i2536.enableSeparatorSlots = !!i2537[19]
  i2536.updateSeparatorPartLocation = !!i2537[20]
  i2536.updateSeparatorPartScale = !!i2537[21]
  i2536.disableMeshAssignmentOnOverride = !!i2537[22]
  i2536.referenceSize = new pc.Vec2( i2537[23], i2537[24] )
  i2536.referenceScale = i2537[25]
  i2536.rectTransformSize = new pc.Vec2( i2537[26], i2537[27] )
  i2536.editReferenceRect = !!i2537[28]
  var i2541 = i2537[29]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( i2541[i + 0] );
  }
  i2536.separatorSlotNames = i2540
  var i2543 = i2537[30]
  var i2542 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2543.length; i += 2) {
  request.r(i2543[i + 0], i2543[i + 1], 1, i2542, '')
  }
  i2536.separatorParts = i2542
  i2536.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2537[31], i2536.meshGenerator)
  i2536.updateTiming = i2537[32]
  i2536.unscaledTime = !!i2537[33]
  i2536.m_Maskable = !!i2537[34]
  request.r(i2537[35], i2537[36], 0, i2536, 'm_Material')
  i2536.m_Color = new pc.Color(i2537[37], i2537[38], i2537[39], i2537[40])
  i2536.m_RaycastTarget = !!i2537[41]
  i2536.m_RaycastPadding = new pc.Vec4( i2537[42], i2537[43], i2537[44], i2537[45] )
  return i2536
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2550 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2551 = data
  i2550.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2551[0], i2550.settings)
  return i2550
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2552 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2553 = data
  i2552.useClipping = !!i2553[0]
  i2552.zSpacing = i2553[1]
  i2552.pmaVertexColors = !!i2553[2]
  i2552.tintBlack = !!i2553[3]
  i2552.canvasGroupTintBlack = !!i2553[4]
  i2552.calculateTangents = !!i2553[5]
  i2552.addNormals = !!i2553[6]
  i2552.immutableTriangles = !!i2553[7]
  return i2552
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2554 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2555 = data
  i2554.targetIsSelf = !!i2555[0]
  request.r(i2555[1], i2555[2], 0, i2554, 'targetGO')
  i2554.tweenTargetIsTargetGO = !!i2555[3]
  i2554.delay = i2555[4]
  i2554.duration = i2555[5]
  i2554.easeType = i2555[6]
  i2554.easeCurve = new pc.AnimationCurve( { keys_flow: i2555[7] } )
  i2554.loopType = i2555[8]
  i2554.loops = i2555[9]
  i2554.id = i2555[10]
  i2554.isRelative = !!i2555[11]
  i2554.isFrom = !!i2555[12]
  i2554.isIndependentUpdate = !!i2555[13]
  i2554.autoKill = !!i2555[14]
  i2554.autoGenerate = !!i2555[15]
  i2554.isActive = !!i2555[16]
  i2554.isValid = !!i2555[17]
  request.r(i2555[18], i2555[19], 0, i2554, 'target')
  i2554.animationType = i2555[20]
  i2554.targetType = i2555[21]
  i2554.forcedTargetType = i2555[22]
  i2554.autoPlay = !!i2555[23]
  i2554.useTargetAsV3 = !!i2555[24]
  i2554.endValueFloat = i2555[25]
  i2554.endValueV3 = new pc.Vec3( i2555[26], i2555[27], i2555[28] )
  i2554.endValueV2 = new pc.Vec2( i2555[29], i2555[30] )
  i2554.endValueColor = new pc.Color(i2555[31], i2555[32], i2555[33], i2555[34])
  i2554.endValueString = i2555[35]
  i2554.endValueRect = UnityEngine.Rect.MinMaxRect(i2555[36], i2555[37], i2555[38], i2555[39])
  request.r(i2555[40], i2555[41], 0, i2554, 'endValueTransform')
  i2554.optionalBool0 = !!i2555[42]
  i2554.optionalBool1 = !!i2555[43]
  i2554.optionalFloat0 = i2555[44]
  i2554.optionalInt0 = i2555[45]
  i2554.optionalRotationMode = i2555[46]
  i2554.optionalScrambleMode = i2555[47]
  i2554.optionalShakeRandomnessMode = i2555[48]
  i2554.optionalString = i2555[49]
  i2554.updateType = i2555[50]
  i2554.isSpeedBased = !!i2555[51]
  i2554.hasOnStart = !!i2555[52]
  i2554.hasOnPlay = !!i2555[53]
  i2554.hasOnUpdate = !!i2555[54]
  i2554.hasOnStepComplete = !!i2555[55]
  i2554.hasOnComplete = !!i2555[56]
  i2554.hasOnTweenCreated = !!i2555[57]
  i2554.hasOnRewind = !!i2555[58]
  i2554.onStart = request.d('UnityEngine.Events.UnityEvent', i2555[59], i2554.onStart)
  i2554.onPlay = request.d('UnityEngine.Events.UnityEvent', i2555[60], i2554.onPlay)
  i2554.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2555[61], i2554.onUpdate)
  i2554.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2555[62], i2554.onStepComplete)
  i2554.onComplete = request.d('UnityEngine.Events.UnityEvent', i2555[63], i2554.onComplete)
  i2554.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2555[64], i2554.onTweenCreated)
  i2554.onRewind = request.d('UnityEngine.Events.UnityEvent', i2555[65], i2554.onRewind)
  return i2554
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2556 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2557 = data
  i2556.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2557[0], i2556.m_PersistentCalls)
  return i2556
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2558 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2559 = data
  request.r(i2559[0], i2559[1], 0, i2558, 'm_ObjectArgument')
  i2558.m_ObjectArgumentAssemblyTypeName = i2559[2]
  i2558.m_IntArgument = i2559[3]
  i2558.m_FloatArgument = i2559[4]
  i2558.m_StringArgument = i2559[5]
  i2558.m_BoolArgument = !!i2559[6]
  return i2558
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i2560 = root || request.c( 'MixSkeletonSkin' )
  var i2561 = data
  request.r(i2561[0], i2561[1], 0, i2560, 'skeletonAnimation')
  var i2563 = i2561[2]
  var i2562 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.add(i2563[i + 0]);
  }
  i2560.skinNames = i2562
  i2560.defaultAnim = i2561[3]
  return i2560
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2566 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2567 = data
  i2566.m_hasFontAssetChanged = !!i2567[0]
  request.r(i2567[1], i2567[2], 0, i2566, 'm_baseMaterial')
  i2566.m_maskOffset = new pc.Vec4( i2567[3], i2567[4], i2567[5], i2567[6] )
  i2566.m_text = i2567[7]
  i2566.m_isRightToLeft = !!i2567[8]
  request.r(i2567[9], i2567[10], 0, i2566, 'm_fontAsset')
  request.r(i2567[11], i2567[12], 0, i2566, 'm_sharedMaterial')
  var i2569 = i2567[13]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 2) {
  request.r(i2569[i + 0], i2569[i + 1], 2, i2568, '')
  }
  i2566.m_fontSharedMaterials = i2568
  request.r(i2567[14], i2567[15], 0, i2566, 'm_fontMaterial')
  var i2571 = i2567[16]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 2) {
  request.r(i2571[i + 0], i2571[i + 1], 2, i2570, '')
  }
  i2566.m_fontMaterials = i2570
  i2566.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2567[17], i2567[18], i2567[19], i2567[20])
  i2566.m_fontColor = new pc.Color(i2567[21], i2567[22], i2567[23], i2567[24])
  i2566.m_enableVertexGradient = !!i2567[25]
  i2566.m_colorMode = i2567[26]
  i2566.m_fontColorGradient = request.d('TMPro.VertexGradient', i2567[27], i2566.m_fontColorGradient)
  request.r(i2567[28], i2567[29], 0, i2566, 'm_fontColorGradientPreset')
  request.r(i2567[30], i2567[31], 0, i2566, 'm_spriteAsset')
  i2566.m_tintAllSprites = !!i2567[32]
  request.r(i2567[33], i2567[34], 0, i2566, 'm_StyleSheet')
  i2566.m_TextStyleHashCode = i2567[35]
  i2566.m_overrideHtmlColors = !!i2567[36]
  i2566.m_faceColor = UnityEngine.Color32.ConstructColor(i2567[37], i2567[38], i2567[39], i2567[40])
  i2566.m_fontSize = i2567[41]
  i2566.m_fontSizeBase = i2567[42]
  i2566.m_fontWeight = i2567[43]
  i2566.m_enableAutoSizing = !!i2567[44]
  i2566.m_fontSizeMin = i2567[45]
  i2566.m_fontSizeMax = i2567[46]
  i2566.m_fontStyle = i2567[47]
  i2566.m_HorizontalAlignment = i2567[48]
  i2566.m_VerticalAlignment = i2567[49]
  i2566.m_textAlignment = i2567[50]
  i2566.m_characterSpacing = i2567[51]
  i2566.m_wordSpacing = i2567[52]
  i2566.m_lineSpacing = i2567[53]
  i2566.m_lineSpacingMax = i2567[54]
  i2566.m_paragraphSpacing = i2567[55]
  i2566.m_charWidthMaxAdj = i2567[56]
  i2566.m_enableWordWrapping = !!i2567[57]
  i2566.m_wordWrappingRatios = i2567[58]
  i2566.m_overflowMode = i2567[59]
  request.r(i2567[60], i2567[61], 0, i2566, 'm_linkedTextComponent')
  request.r(i2567[62], i2567[63], 0, i2566, 'parentLinkedComponent')
  i2566.m_enableKerning = !!i2567[64]
  i2566.m_enableExtraPadding = !!i2567[65]
  i2566.checkPaddingRequired = !!i2567[66]
  i2566.m_isRichText = !!i2567[67]
  i2566.m_parseCtrlCharacters = !!i2567[68]
  i2566.m_isOrthographic = !!i2567[69]
  i2566.m_isCullingEnabled = !!i2567[70]
  i2566.m_horizontalMapping = i2567[71]
  i2566.m_verticalMapping = i2567[72]
  i2566.m_uvLineOffset = i2567[73]
  i2566.m_geometrySortingOrder = i2567[74]
  i2566.m_IsTextObjectScaleStatic = !!i2567[75]
  i2566.m_VertexBufferAutoSizeReduction = !!i2567[76]
  i2566.m_useMaxVisibleDescender = !!i2567[77]
  i2566.m_pageToDisplay = i2567[78]
  i2566.m_margin = new pc.Vec4( i2567[79], i2567[80], i2567[81], i2567[82] )
  i2566.m_isUsingLegacyAnimationComponent = !!i2567[83]
  i2566.m_isVolumetricText = !!i2567[84]
  i2566.m_Maskable = !!i2567[85]
  request.r(i2567[86], i2567[87], 0, i2566, 'm_Material')
  i2566.m_Color = new pc.Color(i2567[88], i2567[89], i2567[90], i2567[91])
  i2566.m_RaycastTarget = !!i2567[92]
  i2566.m_RaycastPadding = new pc.Vec4( i2567[93], i2567[94], i2567[95], i2567[96] )
  return i2566
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2574 = root || request.c( 'TMPro.VertexGradient' )
  var i2575 = data
  i2574.topLeft = new pc.Color(i2575[0], i2575[1], i2575[2], i2575[3])
  i2574.topRight = new pc.Color(i2575[4], i2575[5], i2575[6], i2575[7])
  i2574.bottomLeft = new pc.Color(i2575[8], i2575[9], i2575[10], i2575[11])
  i2574.bottomRight = new pc.Color(i2575[12], i2575[13], i2575[14], i2575[15])
  return i2574
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2576 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2577 = data
  i2576.m_ShowMaskGraphic = !!i2577[0]
  return i2576
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2578 = root || request.c( 'AudioController' )
  var i2579 = data
  request.r(i2579[0], i2579[1], 0, i2578, 'bgmSource')
  request.r(i2579[2], i2579[3], 0, i2578, 'sfxSource')
  var i2581 = i2579[4]
  var i2580 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.add(request.d('AudioEntry', i2581[i + 0]));
  }
  i2578.audioEntries = i2580
  return i2578
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i2584 = root || request.c( 'AudioEntry' )
  var i2585 = data
  i2584.key = i2585[0]
  request.r(i2585[1], i2585[2], 0, i2584, 'clip')
  i2584.volume = i2585[3]
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2587 = data
  i2586.ambientIntensity = i2587[0]
  i2586.reflectionIntensity = i2587[1]
  i2586.ambientMode = i2587[2]
  i2586.ambientLight = new pc.Color(i2587[3], i2587[4], i2587[5], i2587[6])
  i2586.ambientSkyColor = new pc.Color(i2587[7], i2587[8], i2587[9], i2587[10])
  i2586.ambientGroundColor = new pc.Color(i2587[11], i2587[12], i2587[13], i2587[14])
  i2586.ambientEquatorColor = new pc.Color(i2587[15], i2587[16], i2587[17], i2587[18])
  i2586.fogColor = new pc.Color(i2587[19], i2587[20], i2587[21], i2587[22])
  i2586.fogEndDistance = i2587[23]
  i2586.fogStartDistance = i2587[24]
  i2586.fogDensity = i2587[25]
  i2586.fog = !!i2587[26]
  request.r(i2587[27], i2587[28], 0, i2586, 'skybox')
  i2586.fogMode = i2587[29]
  var i2589 = i2587[30]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2589[i + 0]) );
  }
  i2586.lightmaps = i2588
  i2586.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2587[31], i2586.lightProbes)
  i2586.lightmapsMode = i2587[32]
  i2586.mixedBakeMode = i2587[33]
  i2586.environmentLightingMode = i2587[34]
  i2586.ambientProbe = new pc.SphericalHarmonicsL2(i2587[35])
  i2586.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2587[36])
  i2586.useReferenceAmbientProbe = !!i2587[37]
  request.r(i2587[38], i2587[39], 0, i2586, 'customReflection')
  request.r(i2587[40], i2587[41], 0, i2586, 'defaultReflection')
  i2586.defaultReflectionMode = i2587[42]
  i2586.defaultReflectionResolution = i2587[43]
  i2586.sunLightObjectId = i2587[44]
  i2586.pixelLightCount = i2587[45]
  i2586.defaultReflectionHDR = !!i2587[46]
  i2586.hasLightDataAsset = !!i2587[47]
  i2586.hasManualGenerate = !!i2587[48]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2593 = data
  request.r(i2593[0], i2593[1], 0, i2592, 'lightmapColor')
  request.r(i2593[2], i2593[3], 0, i2592, 'lightmapDirection')
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2594 = root || new UnityEngine.LightProbes()
  var i2595 = data
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2603 = data
  var i2605 = i2603[0]
  var i2604 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2605[i + 0]));
  }
  i2602.ShaderCompilationErrors = i2604
  i2602.name = i2603[1]
  i2602.guid = i2603[2]
  var i2607 = i2603[3]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 1) {
    i2606.push( i2607[i + 0] );
  }
  i2602.shaderDefinedKeywords = i2606
  var i2609 = i2603[4]
  var i2608 = []
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2609[i + 0]) );
  }
  i2602.passes = i2608
  var i2611 = i2603[5]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2611[i + 0]) );
  }
  i2602.usePasses = i2610
  var i2613 = i2603[6]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2613[i + 0]) );
  }
  i2602.defaultParameterValues = i2612
  request.r(i2603[7], i2603[8], 0, i2602, 'unityFallbackShader')
  i2602.readDepth = !!i2603[9]
  i2602.isCreatedByShaderGraph = !!i2603[10]
  i2602.disableBatching = !!i2603[11]
  i2602.compiled = !!i2603[12]
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2617 = data
  i2616.shaderName = i2617[0]
  i2616.errorMessage = i2617[1]
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2620 = root || new pc.UnityShaderPass()
  var i2621 = data
  i2620.id = i2621[0]
  i2620.subShaderIndex = i2621[1]
  i2620.name = i2621[2]
  i2620.passType = i2621[3]
  i2620.grabPassTextureName = i2621[4]
  i2620.usePass = !!i2621[5]
  i2620.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2621[6], i2620.zTest)
  i2620.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2621[7], i2620.zWrite)
  i2620.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2621[8], i2620.culling)
  i2620.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2621[9], i2620.blending)
  i2620.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2621[10], i2620.alphaBlending)
  i2620.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2621[11], i2620.colorWriteMask)
  i2620.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2621[12], i2620.offsetUnits)
  i2620.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2621[13], i2620.offsetFactor)
  i2620.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2621[14], i2620.stencilRef)
  i2620.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2621[15], i2620.stencilReadMask)
  i2620.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2621[16], i2620.stencilWriteMask)
  i2620.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2621[17], i2620.stencilOp)
  i2620.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2621[18], i2620.stencilOpFront)
  i2620.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2621[19], i2620.stencilOpBack)
  var i2623 = i2621[20]
  var i2622 = []
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2623[i + 0]) );
  }
  i2620.tags = i2622
  var i2625 = i2621[21]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.push( i2625[i + 0] );
  }
  i2620.passDefinedKeywords = i2624
  var i2627 = i2621[22]
  var i2626 = []
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2627[i + 0]) );
  }
  i2620.passDefinedKeywordGroups = i2626
  var i2629 = i2621[23]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2629[i + 0]) );
  }
  i2620.variants = i2628
  var i2631 = i2621[24]
  var i2630 = []
  for(var i = 0; i < i2631.length; i += 1) {
    i2630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2631[i + 0]) );
  }
  i2620.excludedVariants = i2630
  i2620.hasDepthReader = !!i2621[25]
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2633 = data
  i2632.val = i2633[0]
  i2632.name = i2633[1]
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2635 = data
  i2634.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2635[0], i2634.src)
  i2634.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2635[1], i2634.dst)
  i2634.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2635[2], i2634.op)
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2637 = data
  i2636.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2637[0], i2636.pass)
  i2636.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2637[1], i2636.fail)
  i2636.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2637[2], i2636.zFail)
  i2636.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2637[3], i2636.comp)
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2641 = data
  i2640.name = i2641[0]
  i2640.value = i2641[1]
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2645 = data
  var i2647 = i2645[0]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.push( i2647[i + 0] );
  }
  i2644.keywords = i2646
  i2644.hasDiscard = !!i2645[1]
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2651 = data
  i2650.passId = i2651[0]
  i2650.subShaderIndex = i2651[1]
  var i2653 = i2651[2]
  var i2652 = []
  for(var i = 0; i < i2653.length; i += 1) {
    i2652.push( i2653[i + 0] );
  }
  i2650.keywords = i2652
  i2650.vertexProgram = i2651[3]
  i2650.fragmentProgram = i2651[4]
  i2650.exportedForWebGl2 = !!i2651[5]
  i2650.readDepth = !!i2651[6]
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2657 = data
  request.r(i2657[0], i2657[1], 0, i2656, 'shader')
  i2656.pass = i2657[2]
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2661 = data
  i2660.name = i2661[0]
  i2660.type = i2661[1]
  i2660.value = new pc.Vec4( i2661[2], i2661[3], i2661[4], i2661[5] )
  i2660.textureValue = i2661[6]
  i2660.shaderPropertyFlag = i2661[7]
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2663 = data
  i2662.name = i2663[0]
  request.r(i2663[1], i2663[2], 0, i2662, 'texture')
  i2662.aabb = i2663[3]
  i2662.vertices = i2663[4]
  i2662.triangles = i2663[5]
  i2662.textureRect = UnityEngine.Rect.MinMaxRect(i2663[6], i2663[7], i2663[8], i2663[9])
  i2662.packedRect = UnityEngine.Rect.MinMaxRect(i2663[10], i2663[11], i2663[12], i2663[13])
  i2662.border = new pc.Vec4( i2663[14], i2663[15], i2663[16], i2663[17] )
  i2662.transparency = i2663[18]
  i2662.bounds = i2663[19]
  i2662.pixelsPerUnit = i2663[20]
  i2662.textureWidth = i2663[21]
  i2662.textureHeight = i2663[22]
  i2662.nativeSize = new pc.Vec2( i2663[23], i2663[24] )
  i2662.pivot = new pc.Vec2( i2663[25], i2663[26] )
  i2662.textureRectOffset = new pc.Vec2( i2663[27], i2663[28] )
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2665 = data
  i2664.name = i2665[0]
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2667 = data
  i2666.name = i2667[0]
  i2666.ascent = i2667[1]
  i2666.originalLineHeight = i2667[2]
  i2666.fontSize = i2667[3]
  var i2669 = i2667[4]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2669[i + 0]) );
  }
  i2666.characterInfo = i2668
  request.r(i2667[5], i2667[6], 0, i2666, 'texture')
  i2666.originalFontSize = i2667[7]
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2673 = data
  i2672.index = i2673[0]
  i2672.advance = i2673[1]
  i2672.bearing = i2673[2]
  i2672.glyphWidth = i2673[3]
  i2672.glyphHeight = i2673[4]
  i2672.minX = i2673[5]
  i2672.maxX = i2673[6]
  i2672.minY = i2673[7]
  i2672.maxY = i2673[8]
  i2672.uvBottomLeftX = i2673[9]
  i2672.uvBottomLeftY = i2673[10]
  i2672.uvBottomRightX = i2673[11]
  i2672.uvBottomRightY = i2673[12]
  i2672.uvTopLeftX = i2673[13]
  i2672.uvTopLeftY = i2673[14]
  i2672.uvTopRightX = i2673[15]
  i2672.uvTopRightY = i2673[16]
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2675 = data
  i2674.name = i2675[0]
  i2674.bytes64 = i2675[1]
  i2674.data = i2675[2]
  return i2674
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2676 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2677 = data
  var i2679 = i2677[0]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 2) {
  request.r(i2679[i + 0], i2679[i + 1], 2, i2678, '')
  }
  i2676.atlasAssets = i2678
  i2676.scale = i2677[1]
  request.r(i2677[2], i2677[3], 0, i2676, 'skeletonJSON')
  i2676.isUpgradingBlendModeMaterials = !!i2677[4]
  i2676.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2677[5], i2676.blendModeMaterials)
  var i2681 = i2677[6]
  var i2680 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2681.length; i += 2) {
  request.r(i2681[i + 0], i2681[i + 1], 1, i2680, '')
  }
  i2676.skeletonDataModifiers = i2680
  var i2683 = i2677[7]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.push( i2683[i + 0] );
  }
  i2676.fromAnimation = i2682
  var i2685 = i2677[8]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( i2685[i + 0] );
  }
  i2676.toAnimation = i2684
  i2676.duration = i2677[9]
  i2676.defaultMix = i2677[10]
  request.r(i2677[11], i2677[12], 0, i2676, 'controller')
  return i2676
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2688 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2689 = data
  i2688.applyAdditiveMaterial = !!i2689[0]
  var i2691 = i2689[1]
  var i2690 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2691[i + 0]));
  }
  i2688.additiveMaterials = i2690
  var i2693 = i2689[2]
  var i2692 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2693[i + 0]));
  }
  i2688.multiplyMaterials = i2692
  var i2695 = i2689[3]
  var i2694 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2695[i + 0]));
  }
  i2688.screenMaterials = i2694
  i2688.requiresBlendModeMaterials = !!i2689[4]
  return i2688
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2698 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2699 = data
  i2698.pageName = i2699[0]
  request.r(i2699[1], i2699[2], 0, i2698, 'material')
  return i2698
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2702 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2703 = data
  request.r(i2703[0], i2703[1], 0, i2702, 'atlasFile')
  var i2705 = i2703[2]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 2) {
  request.r(i2705[i + 0], i2705[i + 1], 2, i2704, '')
  }
  i2702.materials = i2704
  i2702.textureLoadingMode = i2703[3]
  request.r(i2703[4], i2703[5], 0, i2702, 'onDemandTextureLoader')
  return i2702
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2706 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2707 = data
  request.r(i2707[0], i2707[1], 0, i2706, 'atlas')
  i2706.normalStyle = i2707[2]
  i2706.normalSpacingOffset = i2707[3]
  i2706.boldStyle = i2707[4]
  i2706.boldSpacing = i2707[5]
  i2706.italicStyle = i2707[6]
  i2706.tabSize = i2707[7]
  i2706.hashCode = i2707[8]
  request.r(i2707[9], i2707[10], 0, i2706, 'material')
  i2706.materialHashCode = i2707[11]
  i2706.m_Version = i2707[12]
  i2706.m_SourceFontFileGUID = i2707[13]
  request.r(i2707[14], i2707[15], 0, i2706, 'm_SourceFontFile_EditorRef')
  request.r(i2707[16], i2707[17], 0, i2706, 'm_SourceFontFile')
  i2706.m_AtlasPopulationMode = i2707[18]
  i2706.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2707[19], i2706.m_FaceInfo)
  var i2709 = i2707[20]
  var i2708 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.add(request.d('UnityEngine.TextCore.Glyph', i2709[i + 0]));
  }
  i2706.m_GlyphTable = i2708
  var i2711 = i2707[21]
  var i2710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.add(request.d('TMPro.TMP_Character', i2711[i + 0]));
  }
  i2706.m_CharacterTable = i2710
  var i2713 = i2707[22]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 2) {
  request.r(i2713[i + 0], i2713[i + 1], 2, i2712, '')
  }
  i2706.m_AtlasTextures = i2712
  i2706.m_AtlasTextureIndex = i2707[23]
  i2706.m_IsMultiAtlasTexturesEnabled = !!i2707[24]
  i2706.m_ClearDynamicDataOnBuild = !!i2707[25]
  var i2715 = i2707[26]
  var i2714 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.add(request.d('UnityEngine.TextCore.GlyphRect', i2715[i + 0]));
  }
  i2706.m_UsedGlyphRects = i2714
  var i2717 = i2707[27]
  var i2716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.add(request.d('UnityEngine.TextCore.GlyphRect', i2717[i + 0]));
  }
  i2706.m_FreeGlyphRects = i2716
  i2706.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2707[28], i2706.m_fontInfo)
  i2706.m_AtlasWidth = i2707[29]
  i2706.m_AtlasHeight = i2707[30]
  i2706.m_AtlasPadding = i2707[31]
  i2706.m_AtlasRenderMode = i2707[32]
  var i2719 = i2707[33]
  var i2718 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2719.length; i += 1) {
    i2718.add(request.d('TMPro.TMP_Glyph', i2719[i + 0]));
  }
  i2706.m_glyphInfoList = i2718
  i2706.m_KerningTable = request.d('TMPro.KerningTable', i2707[34], i2706.m_KerningTable)
  i2706.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2707[35], i2706.m_FontFeatureTable)
  var i2721 = i2707[36]
  var i2720 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2721.length; i += 2) {
  request.r(i2721[i + 0], i2721[i + 1], 1, i2720, '')
  }
  i2706.fallbackFontAssets = i2720
  var i2723 = i2707[37]
  var i2722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2723.length; i += 2) {
  request.r(i2723[i + 0], i2723[i + 1], 1, i2722, '')
  }
  i2706.m_FallbackFontAssetTable = i2722
  i2706.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2707[38], i2706.m_CreationSettings)
  var i2725 = i2707[39]
  var i2724 = []
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.push( request.d('TMPro.TMP_FontWeightPair', i2725[i + 0]) );
  }
  i2706.m_FontWeightTable = i2724
  var i2727 = i2707[40]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.push( request.d('TMPro.TMP_FontWeightPair', i2727[i + 0]) );
  }
  i2706.fontWeights = i2726
  return i2706
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2728 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2729 = data
  i2728.m_FaceIndex = i2729[0]
  i2728.m_FamilyName = i2729[1]
  i2728.m_StyleName = i2729[2]
  i2728.m_PointSize = i2729[3]
  i2728.m_Scale = i2729[4]
  i2728.m_UnitsPerEM = i2729[5]
  i2728.m_LineHeight = i2729[6]
  i2728.m_AscentLine = i2729[7]
  i2728.m_CapLine = i2729[8]
  i2728.m_MeanLine = i2729[9]
  i2728.m_Baseline = i2729[10]
  i2728.m_DescentLine = i2729[11]
  i2728.m_SuperscriptOffset = i2729[12]
  i2728.m_SuperscriptSize = i2729[13]
  i2728.m_SubscriptOffset = i2729[14]
  i2728.m_SubscriptSize = i2729[15]
  i2728.m_UnderlineOffset = i2729[16]
  i2728.m_UnderlineThickness = i2729[17]
  i2728.m_StrikethroughOffset = i2729[18]
  i2728.m_StrikethroughThickness = i2729[19]
  i2728.m_TabWidth = i2729[20]
  return i2728
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2732 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2733 = data
  i2732.m_Index = i2733[0]
  i2732.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2733[1], i2732.m_Metrics)
  i2732.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2733[2], i2732.m_GlyphRect)
  i2732.m_Scale = i2733[3]
  i2732.m_AtlasIndex = i2733[4]
  i2732.m_ClassDefinitionType = i2733[5]
  return i2732
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2734 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2735 = data
  i2734.m_Width = i2735[0]
  i2734.m_Height = i2735[1]
  i2734.m_HorizontalBearingX = i2735[2]
  i2734.m_HorizontalBearingY = i2735[3]
  i2734.m_HorizontalAdvance = i2735[4]
  return i2734
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2736 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2737 = data
  i2736.m_X = i2737[0]
  i2736.m_Y = i2737[1]
  i2736.m_Width = i2737[2]
  i2736.m_Height = i2737[3]
  return i2736
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2740 = root || request.c( 'TMPro.TMP_Character' )
  var i2741 = data
  i2740.m_ElementType = i2741[0]
  i2740.m_Unicode = i2741[1]
  i2740.m_GlyphIndex = i2741[2]
  i2740.m_Scale = i2741[3]
  return i2740
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2746 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2747 = data
  i2746.Name = i2747[0]
  i2746.PointSize = i2747[1]
  i2746.Scale = i2747[2]
  i2746.CharacterCount = i2747[3]
  i2746.LineHeight = i2747[4]
  i2746.Baseline = i2747[5]
  i2746.Ascender = i2747[6]
  i2746.CapHeight = i2747[7]
  i2746.Descender = i2747[8]
  i2746.CenterLine = i2747[9]
  i2746.SuperscriptOffset = i2747[10]
  i2746.SubscriptOffset = i2747[11]
  i2746.SubSize = i2747[12]
  i2746.Underline = i2747[13]
  i2746.UnderlineThickness = i2747[14]
  i2746.strikethrough = i2747[15]
  i2746.strikethroughThickness = i2747[16]
  i2746.TabWidth = i2747[17]
  i2746.Padding = i2747[18]
  i2746.AtlasWidth = i2747[19]
  i2746.AtlasHeight = i2747[20]
  return i2746
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2750 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2751 = data
  i2750.id = i2751[0]
  i2750.x = i2751[1]
  i2750.y = i2751[2]
  i2750.width = i2751[3]
  i2750.height = i2751[4]
  i2750.xOffset = i2751[5]
  i2750.yOffset = i2751[6]
  i2750.xAdvance = i2751[7]
  i2750.scale = i2751[8]
  return i2750
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2752 = root || request.c( 'TMPro.KerningTable' )
  var i2753 = data
  var i2755 = i2753[0]
  var i2754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2755.length; i += 1) {
    i2754.add(request.d('TMPro.KerningPair', i2755[i + 0]));
  }
  i2752.kerningPairs = i2754
  return i2752
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2758 = root || request.c( 'TMPro.KerningPair' )
  var i2759 = data
  i2758.xOffset = i2759[0]
  i2758.m_FirstGlyph = i2759[1]
  i2758.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2759[2], i2758.m_FirstGlyphAdjustments)
  i2758.m_SecondGlyph = i2759[3]
  i2758.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2759[4], i2758.m_SecondGlyphAdjustments)
  i2758.m_IgnoreSpacingAdjustments = !!i2759[5]
  return i2758
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2760 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2761 = data
  var i2763 = i2761[0]
  var i2762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2763.length; i += 1) {
    i2762.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2763[i + 0]));
  }
  i2760.m_GlyphPairAdjustmentRecords = i2762
  return i2760
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2766 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2767 = data
  i2766.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2767[0], i2766.m_FirstAdjustmentRecord)
  i2766.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2767[1], i2766.m_SecondAdjustmentRecord)
  i2766.m_FeatureLookupFlags = i2767[2]
  return i2766
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2770 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2771 = data
  i2770.sourceFontFileName = i2771[0]
  i2770.sourceFontFileGUID = i2771[1]
  i2770.pointSizeSamplingMode = i2771[2]
  i2770.pointSize = i2771[3]
  i2770.padding = i2771[4]
  i2770.packingMode = i2771[5]
  i2770.atlasWidth = i2771[6]
  i2770.atlasHeight = i2771[7]
  i2770.characterSetSelectionMode = i2771[8]
  i2770.characterSequence = i2771[9]
  i2770.referencedFontAssetGUID = i2771[10]
  i2770.referencedTextAssetGUID = i2771[11]
  i2770.fontStyle = i2771[12]
  i2770.fontStyleModifier = i2771[13]
  i2770.renderMode = i2771[14]
  i2770.includeFontFeatures = !!i2771[15]
  return i2770
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2774 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2775 = data
  request.r(i2775[0], i2775[1], 0, i2774, 'regularTypeface')
  request.r(i2775[2], i2775[3], 0, i2774, 'italicTypeface')
  return i2774
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2776 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2777 = data
  i2776.useSafeMode = !!i2777[0]
  i2776.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2777[1], i2776.safeModeOptions)
  i2776.timeScale = i2777[2]
  i2776.unscaledTimeScale = i2777[3]
  i2776.useSmoothDeltaTime = !!i2777[4]
  i2776.maxSmoothUnscaledTime = i2777[5]
  i2776.rewindCallbackMode = i2777[6]
  i2776.showUnityEditorReport = !!i2777[7]
  i2776.logBehaviour = i2777[8]
  i2776.drawGizmos = !!i2777[9]
  i2776.defaultRecyclable = !!i2777[10]
  i2776.defaultAutoPlay = i2777[11]
  i2776.defaultUpdateType = i2777[12]
  i2776.defaultTimeScaleIndependent = !!i2777[13]
  i2776.defaultEaseType = i2777[14]
  i2776.defaultEaseOvershootOrAmplitude = i2777[15]
  i2776.defaultEasePeriod = i2777[16]
  i2776.defaultAutoKill = !!i2777[17]
  i2776.defaultLoopType = i2777[18]
  i2776.debugMode = !!i2777[19]
  i2776.debugStoreTargetId = !!i2777[20]
  i2776.showPreviewPanel = !!i2777[21]
  i2776.storeSettingsLocation = i2777[22]
  i2776.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2777[23], i2776.modules)
  i2776.createASMDEF = !!i2777[24]
  i2776.showPlayingTweens = !!i2777[25]
  i2776.showPausedTweens = !!i2777[26]
  return i2776
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2778 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2779 = data
  i2778.logBehaviour = i2779[0]
  i2778.nestedTweenFailureBehaviour = i2779[1]
  return i2778
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2780 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2781 = data
  i2780.showPanel = !!i2781[0]
  i2780.audioEnabled = !!i2781[1]
  i2780.physicsEnabled = !!i2781[2]
  i2780.physics2DEnabled = !!i2781[3]
  i2780.spriteEnabled = !!i2781[4]
  i2780.uiEnabled = !!i2781[5]
  i2780.textMeshProEnabled = !!i2781[6]
  i2780.tk2DEnabled = !!i2781[7]
  i2780.deAudioEnabled = !!i2781[8]
  i2780.deUnityExtendedEnabled = !!i2781[9]
  i2780.epoOutlineEnabled = !!i2781[10]
  return i2780
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2782 = root || request.c( 'TMPro.TMP_Settings' )
  var i2783 = data
  i2782.m_enableWordWrapping = !!i2783[0]
  i2782.m_enableKerning = !!i2783[1]
  i2782.m_enableExtraPadding = !!i2783[2]
  i2782.m_enableTintAllSprites = !!i2783[3]
  i2782.m_enableParseEscapeCharacters = !!i2783[4]
  i2782.m_EnableRaycastTarget = !!i2783[5]
  i2782.m_GetFontFeaturesAtRuntime = !!i2783[6]
  i2782.m_missingGlyphCharacter = i2783[7]
  i2782.m_warningsDisabled = !!i2783[8]
  request.r(i2783[9], i2783[10], 0, i2782, 'm_defaultFontAsset')
  i2782.m_defaultFontAssetPath = i2783[11]
  i2782.m_defaultFontSize = i2783[12]
  i2782.m_defaultAutoSizeMinRatio = i2783[13]
  i2782.m_defaultAutoSizeMaxRatio = i2783[14]
  i2782.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2783[15], i2783[16] )
  i2782.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2783[17], i2783[18] )
  i2782.m_autoSizeTextContainer = !!i2783[19]
  i2782.m_IsTextObjectScaleStatic = !!i2783[20]
  var i2785 = i2783[21]
  var i2784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2785.length; i += 2) {
  request.r(i2785[i + 0], i2785[i + 1], 1, i2784, '')
  }
  i2782.m_fallbackFontAssets = i2784
  i2782.m_matchMaterialPreset = !!i2783[22]
  request.r(i2783[23], i2783[24], 0, i2782, 'm_defaultSpriteAsset')
  i2782.m_defaultSpriteAssetPath = i2783[25]
  i2782.m_enableEmojiSupport = !!i2783[26]
  i2782.m_MissingCharacterSpriteUnicode = i2783[27]
  i2782.m_defaultColorGradientPresetsPath = i2783[28]
  request.r(i2783[29], i2783[30], 0, i2782, 'm_defaultStyleSheet')
  i2782.m_StyleSheetsResourcePath = i2783[31]
  request.r(i2783[32], i2783[33], 0, i2782, 'm_leadingCharacters')
  request.r(i2783[34], i2783[35], 0, i2782, 'm_followingCharacters')
  i2782.m_UseModernHangulLineBreakingRules = !!i2783[36]
  return i2782
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2786 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2787 = data
  request.r(i2787[0], i2787[1], 0, i2786, 'spriteSheet')
  var i2789 = i2787[2]
  var i2788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.add(request.d('TMPro.TMP_Sprite', i2789[i + 0]));
  }
  i2786.spriteInfoList = i2788
  var i2791 = i2787[3]
  var i2790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2791.length; i += 2) {
  request.r(i2791[i + 0], i2791[i + 1], 1, i2790, '')
  }
  i2786.fallbackSpriteAssets = i2790
  i2786.hashCode = i2787[4]
  request.r(i2787[5], i2787[6], 0, i2786, 'material')
  i2786.materialHashCode = i2787[7]
  i2786.m_Version = i2787[8]
  i2786.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2787[9], i2786.m_FaceInfo)
  var i2793 = i2787[10]
  var i2792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.add(request.d('TMPro.TMP_SpriteCharacter', i2793[i + 0]));
  }
  i2786.m_SpriteCharacterTable = i2792
  var i2795 = i2787[11]
  var i2794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2795.length; i += 1) {
    i2794.add(request.d('TMPro.TMP_SpriteGlyph', i2795[i + 0]));
  }
  i2786.m_SpriteGlyphTable = i2794
  return i2786
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2798 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2799 = data
  i2798.name = i2799[0]
  i2798.hashCode = i2799[1]
  i2798.unicode = i2799[2]
  i2798.pivot = new pc.Vec2( i2799[3], i2799[4] )
  request.r(i2799[5], i2799[6], 0, i2798, 'sprite')
  i2798.id = i2799[7]
  i2798.x = i2799[8]
  i2798.y = i2799[9]
  i2798.width = i2799[10]
  i2798.height = i2799[11]
  i2798.xOffset = i2799[12]
  i2798.yOffset = i2799[13]
  i2798.xAdvance = i2799[14]
  i2798.scale = i2799[15]
  return i2798
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2804 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2805 = data
  i2804.m_Name = i2805[0]
  i2804.m_HashCode = i2805[1]
  i2804.m_ElementType = i2805[2]
  i2804.m_Unicode = i2805[3]
  i2804.m_GlyphIndex = i2805[4]
  i2804.m_Scale = i2805[5]
  return i2804
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2808 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2809 = data
  request.r(i2809[0], i2809[1], 0, i2808, 'sprite')
  i2808.m_Index = i2809[2]
  i2808.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2809[3], i2808.m_Metrics)
  i2808.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2809[4], i2808.m_GlyphRect)
  i2808.m_Scale = i2809[5]
  i2808.m_AtlasIndex = i2809[6]
  i2808.m_ClassDefinitionType = i2809[7]
  return i2808
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2810 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2811 = data
  var i2813 = i2811[0]
  var i2812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.add(request.d('TMPro.TMP_Style', i2813[i + 0]));
  }
  i2810.m_StyleList = i2812
  return i2810
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2816 = root || request.c( 'TMPro.TMP_Style' )
  var i2817 = data
  i2816.m_Name = i2817[0]
  i2816.m_HashCode = i2817[1]
  i2816.m_OpeningDefinition = i2817[2]
  i2816.m_ClosingDefinition = i2817[3]
  i2816.m_OpeningTagArray = i2817[4]
  i2816.m_ClosingTagArray = i2817[5]
  i2816.m_OpeningTagUnicodeArray = i2817[6]
  i2816.m_ClosingTagUnicodeArray = i2817[7]
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2819 = data
  var i2821 = i2819[0]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2821[i + 0]) );
  }
  i2818.files = i2820
  i2818.componentToPrefabIds = i2819[1]
  return i2818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2825 = data
  i2824.path = i2825[0]
  request.r(i2825[1], i2825[2], 0, i2824, 'unityObject')
  return i2824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2827 = data
  var i2829 = i2827[0]
  var i2828 = []
  for(var i = 0; i < i2829.length; i += 1) {
    i2828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2829[i + 0]) );
  }
  i2826.scriptsExecutionOrder = i2828
  var i2831 = i2827[1]
  var i2830 = []
  for(var i = 0; i < i2831.length; i += 1) {
    i2830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2831[i + 0]) );
  }
  i2826.sortingLayers = i2830
  var i2833 = i2827[2]
  var i2832 = []
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2833[i + 0]) );
  }
  i2826.cullingLayers = i2832
  i2826.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2827[3], i2826.timeSettings)
  i2826.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2827[4], i2826.physicsSettings)
  i2826.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2827[5], i2826.physics2DSettings)
  i2826.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2827[6], i2826.qualitySettings)
  i2826.enableRealtimeShadows = !!i2827[7]
  i2826.enableAutoInstancing = !!i2827[8]
  i2826.enableStaticBatching = !!i2827[9]
  i2826.enableDynamicBatching = !!i2827[10]
  i2826.lightmapEncodingQuality = i2827[11]
  i2826.desiredColorSpace = i2827[12]
  var i2835 = i2827[13]
  var i2834 = []
  for(var i = 0; i < i2835.length; i += 1) {
    i2834.push( i2835[i + 0] );
  }
  i2826.allTags = i2834
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2839 = data
  i2838.name = i2839[0]
  i2838.value = i2839[1]
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2843 = data
  i2842.id = i2843[0]
  i2842.name = i2843[1]
  i2842.value = i2843[2]
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2847 = data
  i2846.id = i2847[0]
  i2846.name = i2847[1]
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2849 = data
  i2848.fixedDeltaTime = i2849[0]
  i2848.maximumDeltaTime = i2849[1]
  i2848.timeScale = i2849[2]
  i2848.maximumParticleTimestep = i2849[3]
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2851 = data
  i2850.gravity = new pc.Vec3( i2851[0], i2851[1], i2851[2] )
  i2850.defaultSolverIterations = i2851[3]
  i2850.bounceThreshold = i2851[4]
  i2850.autoSyncTransforms = !!i2851[5]
  i2850.autoSimulation = !!i2851[6]
  var i2853 = i2851[7]
  var i2852 = []
  for(var i = 0; i < i2853.length; i += 1) {
    i2852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2853[i + 0]) );
  }
  i2850.collisionMatrix = i2852
  return i2850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2857 = data
  i2856.enabled = !!i2857[0]
  i2856.layerId = i2857[1]
  i2856.otherLayerId = i2857[2]
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2859 = data
  request.r(i2859[0], i2859[1], 0, i2858, 'material')
  i2858.gravity = new pc.Vec2( i2859[2], i2859[3] )
  i2858.positionIterations = i2859[4]
  i2858.velocityIterations = i2859[5]
  i2858.velocityThreshold = i2859[6]
  i2858.maxLinearCorrection = i2859[7]
  i2858.maxAngularCorrection = i2859[8]
  i2858.maxTranslationSpeed = i2859[9]
  i2858.maxRotationSpeed = i2859[10]
  i2858.baumgarteScale = i2859[11]
  i2858.baumgarteTOIScale = i2859[12]
  i2858.timeToSleep = i2859[13]
  i2858.linearSleepTolerance = i2859[14]
  i2858.angularSleepTolerance = i2859[15]
  i2858.defaultContactOffset = i2859[16]
  i2858.autoSimulation = !!i2859[17]
  i2858.queriesHitTriggers = !!i2859[18]
  i2858.queriesStartInColliders = !!i2859[19]
  i2858.callbacksOnDisable = !!i2859[20]
  i2858.reuseCollisionCallbacks = !!i2859[21]
  i2858.autoSyncTransforms = !!i2859[22]
  var i2861 = i2859[23]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2861[i + 0]) );
  }
  i2858.collisionMatrix = i2860
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2865 = data
  i2864.enabled = !!i2865[0]
  i2864.layerId = i2865[1]
  i2864.otherLayerId = i2865[2]
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2867 = data
  var i2869 = i2867[0]
  var i2868 = []
  for(var i = 0; i < i2869.length; i += 1) {
    i2868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2869[i + 0]) );
  }
  i2866.qualityLevels = i2868
  var i2871 = i2867[1]
  var i2870 = []
  for(var i = 0; i < i2871.length; i += 1) {
    i2870.push( i2871[i + 0] );
  }
  i2866.names = i2870
  i2866.shadows = i2867[2]
  i2866.anisotropicFiltering = i2867[3]
  i2866.antiAliasing = i2867[4]
  i2866.lodBias = i2867[5]
  i2866.shadowCascades = i2867[6]
  i2866.shadowDistance = i2867[7]
  i2866.shadowmaskMode = i2867[8]
  i2866.shadowProjection = i2867[9]
  i2866.shadowResolution = i2867[10]
  i2866.softParticles = !!i2867[11]
  i2866.softVegetation = !!i2867[12]
  i2866.activeColorSpace = i2867[13]
  i2866.desiredColorSpace = i2867[14]
  i2866.masterTextureLimit = i2867[15]
  i2866.maxQueuedFrames = i2867[16]
  i2866.particleRaycastBudget = i2867[17]
  i2866.pixelLightCount = i2867[18]
  i2866.realtimeReflectionProbes = !!i2867[19]
  i2866.shadowCascade2Split = i2867[20]
  i2866.shadowCascade4Split = new pc.Vec3( i2867[21], i2867[22], i2867[23] )
  i2866.streamingMipmapsActive = !!i2867[24]
  i2866.vSyncCount = i2867[25]
  i2866.asyncUploadBufferSize = i2867[26]
  i2866.asyncUploadTimeSlice = i2867[27]
  i2866.billboardsFaceCameraPosition = !!i2867[28]
  i2866.shadowNearPlaneOffset = i2867[29]
  i2866.streamingMipmapsMemoryBudget = i2867[30]
  i2866.maximumLODLevel = i2867[31]
  i2866.streamingMipmapsAddAllCameras = !!i2867[32]
  i2866.streamingMipmapsMaxLevelReduction = i2867[33]
  i2866.streamingMipmapsRenderersPerFrame = i2867[34]
  i2866.resolutionScalingFixedDPIFactor = i2867[35]
  i2866.streamingMipmapsMaxFileIORequests = i2867[36]
  i2866.currentQualityLevel = i2867[37]
  return i2866
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2874 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2875 = data
  i2874.xPlacement = i2875[0]
  i2874.yPlacement = i2875[1]
  i2874.xAdvance = i2875[2]
  i2874.yAdvance = i2875[3]
  return i2874
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2876 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2877 = data
  i2876.m_GlyphIndex = i2877[0]
  i2876.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2877[1], i2876.m_GlyphValueRecord)
  return i2876
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2878 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2879 = data
  i2878.m_XPlacement = i2879[0]
  i2878.m_YPlacement = i2879[1]
  i2878.m_XAdvance = i2879[2]
  i2878.m_YAdvance = i2879[3]
  return i2878
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

Deserializers.creativeName = "BP_V19_NgocNDL_AnhPD";

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

Deserializers.buildID = "2573c78d-f74a-4fb7-8c49-761d37ca41af";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

