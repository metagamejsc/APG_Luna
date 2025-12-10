var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2390 = root || request.c( 'UnityEngine.JointSpring' )
  var i2391 = data
  i2390.spring = i2391[0]
  i2390.damper = i2391[1]
  i2390.targetPosition = i2391[2]
  return i2390
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2392 = root || request.c( 'UnityEngine.JointMotor' )
  var i2393 = data
  i2392.m_TargetVelocity = i2393[0]
  i2392.m_Force = i2393[1]
  i2392.m_FreeSpin = i2393[2]
  return i2392
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2394 = root || request.c( 'UnityEngine.JointLimits' )
  var i2395 = data
  i2394.m_Min = i2395[0]
  i2394.m_Max = i2395[1]
  i2394.m_Bounciness = i2395[2]
  i2394.m_BounceMinVelocity = i2395[3]
  i2394.m_ContactDistance = i2395[4]
  i2394.minBounce = i2395[5]
  i2394.maxBounce = i2395[6]
  return i2394
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2396 = root || request.c( 'UnityEngine.JointDrive' )
  var i2397 = data
  i2396.m_PositionSpring = i2397[0]
  i2396.m_PositionDamper = i2397[1]
  i2396.m_MaximumForce = i2397[2]
  i2396.m_UseAcceleration = i2397[3]
  return i2396
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2398 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2399 = data
  i2398.m_Spring = i2399[0]
  i2398.m_Damper = i2399[1]
  return i2398
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2400 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2401 = data
  i2400.m_Limit = i2401[0]
  i2400.m_Bounciness = i2401[1]
  i2400.m_ContactDistance = i2401[2]
  return i2400
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2402 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2403 = data
  i2402.m_ExtremumSlip = i2403[0]
  i2402.m_ExtremumValue = i2403[1]
  i2402.m_AsymptoteSlip = i2403[2]
  i2402.m_AsymptoteValue = i2403[3]
  i2402.m_Stiffness = i2403[4]
  return i2402
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2404 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2405 = data
  i2404.m_LowerAngle = i2405[0]
  i2404.m_UpperAngle = i2405[1]
  return i2404
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2407 = data
  i2406.m_MotorSpeed = i2407[0]
  i2406.m_MaximumMotorTorque = i2407[1]
  return i2406
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2408 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2409 = data
  i2408.m_DampingRatio = i2409[0]
  i2408.m_Frequency = i2409[1]
  i2408.m_Angle = i2409[2]
  return i2408
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2410 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2411 = data
  i2410.m_LowerTranslation = i2411[0]
  i2410.m_UpperTranslation = i2411[1]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2413 = data
  i2412.name = i2413[0]
  i2412.width = i2413[1]
  i2412.height = i2413[2]
  i2412.mipmapCount = i2413[3]
  i2412.anisoLevel = i2413[4]
  i2412.filterMode = i2413[5]
  i2412.hdr = !!i2413[6]
  i2412.format = i2413[7]
  i2412.wrapMode = i2413[8]
  i2412.alphaIsTransparency = !!i2413[9]
  i2412.alphaSource = i2413[10]
  i2412.graphicsFormat = i2413[11]
  i2412.sRGBTexture = !!i2413[12]
  i2412.desiredColorSpace = i2413[13]
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2414 = root || new pc.UnityMaterial()
  var i2415 = data
  i2414.name = i2415[0]
  request.r(i2415[1], i2415[2], 0, i2414, 'shader')
  i2414.renderQueue = i2415[3]
  i2414.enableInstancing = !!i2415[4]
  var i2417 = i2415[5]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2417[i + 0]) );
  }
  i2414.floatParameters = i2416
  var i2419 = i2415[6]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2419[i + 0]) );
  }
  i2414.colorParameters = i2418
  var i2421 = i2415[7]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2421[i + 0]) );
  }
  i2414.vectorParameters = i2420
  var i2423 = i2415[8]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2423[i + 0]) );
  }
  i2414.textureParameters = i2422
  var i2425 = i2415[9]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2425[i + 0]) );
  }
  i2414.materialFlags = i2424
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2429 = data
  i2428.name = i2429[0]
  i2428.value = i2429[1]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2433 = data
  i2432.name = i2433[0]
  i2432.value = new pc.Color(i2433[1], i2433[2], i2433[3], i2433[4])
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2437 = data
  i2436.name = i2437[0]
  i2436.value = new pc.Vec4( i2437[1], i2437[2], i2437[3], i2437[4] )
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2441 = data
  i2440.name = i2441[0]
  request.r(i2441[1], i2441[2], 0, i2440, 'value')
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2445 = data
  i2444.name = i2445[0]
  i2444.enabled = !!i2445[1]
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2447 = data
  i2446.name = i2447[0]
  i2446.index = i2447[1]
  i2446.startup = !!i2447[2]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2449 = data
  i2448.position = new pc.Vec3( i2449[0], i2449[1], i2449[2] )
  i2448.scale = new pc.Vec3( i2449[3], i2449[4], i2449[5] )
  i2448.rotation = new pc.Quat(i2449[6], i2449[7], i2449[8], i2449[9])
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2451 = data
  i2450.enabled = !!i2451[0]
  i2450.aspect = i2451[1]
  i2450.orthographic = !!i2451[2]
  i2450.orthographicSize = i2451[3]
  i2450.backgroundColor = new pc.Color(i2451[4], i2451[5], i2451[6], i2451[7])
  i2450.nearClipPlane = i2451[8]
  i2450.farClipPlane = i2451[9]
  i2450.fieldOfView = i2451[10]
  i2450.depth = i2451[11]
  i2450.clearFlags = i2451[12]
  i2450.cullingMask = i2451[13]
  i2450.rect = i2451[14]
  request.r(i2451[15], i2451[16], 0, i2450, 'targetTexture')
  i2450.usePhysicalProperties = !!i2451[17]
  i2450.focalLength = i2451[18]
  i2450.sensorSize = new pc.Vec2( i2451[19], i2451[20] )
  i2450.lensShift = new pc.Vec2( i2451[21], i2451[22] )
  i2450.gateFit = i2451[23]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2453 = data
  i2452.name = i2453[0]
  i2452.tagId = i2453[1]
  i2452.enabled = !!i2453[2]
  i2452.isStatic = !!i2453[3]
  i2452.layer = i2453[4]
  return i2452
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2454 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2455 = data
  request.r(i2455[0], i2455[1], 0, i2454, 'm_FirstSelected')
  i2454.m_sendNavigationEvents = !!i2455[2]
  i2454.m_DragThreshold = i2455[3]
  return i2454
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2456 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2457 = data
  i2456.m_HorizontalAxis = i2457[0]
  i2456.m_VerticalAxis = i2457[1]
  i2456.m_SubmitButton = i2457[2]
  i2456.m_CancelButton = i2457[3]
  i2456.m_InputActionsPerSecond = i2457[4]
  i2456.m_RepeatDelay = i2457[5]
  i2456.m_ForceModuleActive = !!i2457[6]
  i2456.m_SendPointerHoverToParent = !!i2457[7]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2459 = data
  i2458.pivot = new pc.Vec2( i2459[0], i2459[1] )
  i2458.anchorMin = new pc.Vec2( i2459[2], i2459[3] )
  i2458.anchorMax = new pc.Vec2( i2459[4], i2459[5] )
  i2458.sizeDelta = new pc.Vec2( i2459[6], i2459[7] )
  i2458.anchoredPosition3D = new pc.Vec3( i2459[8], i2459[9], i2459[10] )
  i2458.rotation = new pc.Quat(i2459[11], i2459[12], i2459[13], i2459[14])
  i2458.scale = new pc.Vec3( i2459[15], i2459[16], i2459[17] )
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2461 = data
  i2460.enabled = !!i2461[0]
  i2460.planeDistance = i2461[1]
  i2460.referencePixelsPerUnit = i2461[2]
  i2460.isFallbackOverlay = !!i2461[3]
  i2460.renderMode = i2461[4]
  i2460.renderOrder = i2461[5]
  i2460.sortingLayerName = i2461[6]
  i2460.sortingOrder = i2461[7]
  i2460.scaleFactor = i2461[8]
  request.r(i2461[9], i2461[10], 0, i2460, 'worldCamera')
  i2460.overrideSorting = !!i2461[11]
  i2460.pixelPerfect = !!i2461[12]
  i2460.targetDisplay = i2461[13]
  i2460.overridePixelPerfect = !!i2461[14]
  return i2460
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2462 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2463 = data
  i2462.m_UiScaleMode = i2463[0]
  i2462.m_ReferencePixelsPerUnit = i2463[1]
  i2462.m_ScaleFactor = i2463[2]
  i2462.m_ReferenceResolution = new pc.Vec2( i2463[3], i2463[4] )
  i2462.m_ScreenMatchMode = i2463[5]
  i2462.m_MatchWidthOrHeight = i2463[6]
  i2462.m_PhysicalUnit = i2463[7]
  i2462.m_FallbackScreenDPI = i2463[8]
  i2462.m_DefaultSpriteDPI = i2463[9]
  i2462.m_DynamicPixelsPerUnit = i2463[10]
  i2462.m_PresetInfoIsWorld = !!i2463[11]
  return i2462
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2464 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2465 = data
  i2464.m_IgnoreReversedGraphics = !!i2465[0]
  i2464.m_BlockingObjects = i2465[1]
  i2464.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2465[2] )
  return i2464
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i2466 = root || request.c( 'LunaManager' )
  var i2467 = data
  var i2469 = i2467[0]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 2) {
  request.r(i2469[i + 0], i2469[i + 1], 2, i2468, '')
  }
  i2466.lstBtnInstall = i2468
  request.r(i2467[1], i2467[2], 0, i2466, 'StartCard')
  request.r(i2467[3], i2467[4], 0, i2466, 'EndCard')
  i2466.countPlay = i2467[5]
  i2466.countPlayFinal = i2467[6]
  i2466.countPlayMax = i2467[7]
  i2466.timeDropFinal = i2467[8]
  i2466.colorBG = new pc.Color(i2467[9], i2467[10], i2467[11], i2467[12])
  request.r(i2467[13], i2467[14], 0, i2466, 'texture2D')
  request.r(i2467[15], i2467[16], 0, i2466, 'rawImageBG')
  i2466.isHead = !!i2467[17]
  request.r(i2467[18], i2467[19], 0, i2466, 'textProgess')
  request.r(i2467[20], i2467[21], 0, i2466, 'imgProgess')
  request.r(i2467[22], i2467[23], 0, i2466, 'timeText')
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2473 = data
  i2472.cullTransparentMesh = !!i2473[0]
  return i2472
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2474 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2475 = data
  request.r(i2475[0], i2475[1], 0, i2474, 'm_Texture')
  i2474.m_UVRect = UnityEngine.Rect.MinMaxRect(i2475[2], i2475[3], i2475[4], i2475[5])
  request.r(i2475[6], i2475[7], 0, i2474, 'm_Material')
  i2474.m_Maskable = !!i2475[8]
  i2474.m_Color = new pc.Color(i2475[9], i2475[10], i2475[11], i2475[12])
  i2474.m_RaycastTarget = !!i2475[13]
  i2474.m_RaycastPadding = new pc.Vec4( i2475[14], i2475[15], i2475[16], i2475[17] )
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2477 = data
  request.r(i2477[0], i2477[1], 0, i2476, 'clip')
  request.r(i2477[2], i2477[3], 0, i2476, 'outputAudioMixerGroup')
  i2476.playOnAwake = !!i2477[4]
  i2476.loop = !!i2477[5]
  i2476.time = i2477[6]
  i2476.volume = i2477[7]
  i2476.pitch = i2477[8]
  i2476.enabled = !!i2477[9]
  return i2476
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2478 = root || request.c( 'UnityEngine.UI.Image' )
  var i2479 = data
  request.r(i2479[0], i2479[1], 0, i2478, 'm_Sprite')
  i2478.m_Type = i2479[2]
  i2478.m_PreserveAspect = !!i2479[3]
  i2478.m_FillCenter = !!i2479[4]
  i2478.m_FillMethod = i2479[5]
  i2478.m_FillAmount = i2479[6]
  i2478.m_FillClockwise = !!i2479[7]
  i2478.m_FillOrigin = i2479[8]
  i2478.m_UseSpriteMesh = !!i2479[9]
  i2478.m_PixelsPerUnitMultiplier = i2479[10]
  request.r(i2479[11], i2479[12], 0, i2478, 'm_Material')
  i2478.m_Maskable = !!i2479[13]
  i2478.m_Color = new pc.Color(i2479[14], i2479[15], i2479[16], i2479[17])
  i2478.m_RaycastTarget = !!i2479[18]
  i2478.m_RaycastPadding = new pc.Vec4( i2479[19], i2479[20], i2479[21], i2479[22] )
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2481 = data
  i2480.m_Alpha = i2481[0]
  i2480.m_Interactable = !!i2481[1]
  i2480.m_BlocksRaycasts = !!i2481[2]
  i2480.m_IgnoreParentGroups = !!i2481[3]
  i2480.enabled = !!i2481[4]
  return i2480
}

Deserializers["DragCustom"] = function (request, data, root) {
  var i2482 = root || request.c( 'DragCustom' )
  var i2483 = data
  i2482.idDrag = i2483[0]
  i2482.animationName = i2483[1]
  i2482.isProcess = !!i2483[2]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2485 = data
  i2484.enabled = !!i2485[0]
  i2484.isTrigger = !!i2485[1]
  i2484.usedByEffector = !!i2485[2]
  i2484.density = i2485[3]
  i2484.offset = new pc.Vec2( i2485[4], i2485[5] )
  request.r(i2485[6], i2485[7], 0, i2484, 'material')
  i2484.usedByComposite = !!i2485[8]
  i2484.autoTiling = !!i2485[9]
  var i2487 = i2485[10]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 1) {
  var i2489 = i2487[i + 0]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 2) {
    i2488.push( new pc.Vec2( i2489[i + 0], i2489[i + 1] ) );
  }
    i2486.push( i2488 );
  }
  i2484.points = i2486
  return i2484
}

Deserializers["DropCustom"] = function (request, data, root) {
  var i2496 = root || request.c( 'DropCustom' )
  var i2497 = data
  i2496.idDrop = i2497[0]
  var i2499 = i2497[1]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 2) {
  request.r(i2499[i + 0], i2499[i + 1], 2, i2498, '')
  }
  i2496.steps = i2498
  request.r(i2497[2], i2497[3], 0, i2496, 'skeletonGraphic')
  i2496.animationNameDefault = i2497[4]
  request.r(i2497[5], i2497[6], 0, i2496, 'mixSkeletonSkin')
  return i2496
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2502 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2503 = data
  request.r(i2503[0], i2503[1], 0, i2502, 'skeletonDataAsset')
  request.r(i2503[2], i2503[3], 0, i2502, 'additiveMaterial')
  request.r(i2503[4], i2503[5], 0, i2502, 'multiplyMaterial')
  request.r(i2503[6], i2503[7], 0, i2502, 'screenMaterial')
  i2502.initialSkinName = i2503[8]
  i2502.initialFlipX = !!i2503[9]
  i2502.initialFlipY = !!i2503[10]
  i2502.startingAnimation = i2503[11]
  i2502.startingLoop = !!i2503[12]
  i2502.timeScale = i2503[13]
  i2502.freeze = !!i2503[14]
  i2502.layoutScaleMode = i2503[15]
  i2502.updateWhenInvisible = i2503[16]
  i2502.allowMultipleCanvasRenderers = !!i2503[17]
  var i2505 = i2503[18]
  var i2504 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2505.length; i += 2) {
  request.r(i2505[i + 0], i2505[i + 1], 1, i2504, '')
  }
  i2502.canvasRenderers = i2504
  i2502.enableSeparatorSlots = !!i2503[19]
  i2502.updateSeparatorPartLocation = !!i2503[20]
  i2502.updateSeparatorPartScale = !!i2503[21]
  i2502.disableMeshAssignmentOnOverride = !!i2503[22]
  i2502.referenceSize = new pc.Vec2( i2503[23], i2503[24] )
  i2502.referenceScale = i2503[25]
  i2502.rectTransformSize = new pc.Vec2( i2503[26], i2503[27] )
  i2502.editReferenceRect = !!i2503[28]
  var i2507 = i2503[29]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( i2507[i + 0] );
  }
  i2502.separatorSlotNames = i2506
  var i2509 = i2503[30]
  var i2508 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2509.length; i += 2) {
  request.r(i2509[i + 0], i2509[i + 1], 1, i2508, '')
  }
  i2502.separatorParts = i2508
  i2502.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2503[31], i2502.meshGenerator)
  i2502.updateTiming = i2503[32]
  i2502.unscaledTime = !!i2503[33]
  request.r(i2503[34], i2503[35], 0, i2502, 'm_Material')
  i2502.m_Maskable = !!i2503[36]
  i2502.m_Color = new pc.Color(i2503[37], i2503[38], i2503[39], i2503[40])
  i2502.m_RaycastTarget = !!i2503[41]
  i2502.m_RaycastPadding = new pc.Vec4( i2503[42], i2503[43], i2503[44], i2503[45] )
  return i2502
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2516 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2517 = data
  i2516.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2517[0], i2516.settings)
  return i2516
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2518 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2519 = data
  i2518.useClipping = !!i2519[0]
  i2518.zSpacing = i2519[1]
  i2518.pmaVertexColors = !!i2519[2]
  i2518.tintBlack = !!i2519[3]
  i2518.canvasGroupTintBlack = !!i2519[4]
  i2518.calculateTangents = !!i2519[5]
  i2518.addNormals = !!i2519[6]
  i2518.immutableTriangles = !!i2519[7]
  return i2518
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2520 = root || request.c( 'UnityEngine.UI.Button' )
  var i2521 = data
  i2520.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2521[0], i2520.m_OnClick)
  i2520.m_Navigation = request.d('UnityEngine.UI.Navigation', i2521[1], i2520.m_Navigation)
  i2520.m_Transition = i2521[2]
  i2520.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2521[3], i2520.m_Colors)
  i2520.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2521[4], i2520.m_SpriteState)
  i2520.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2521[5], i2520.m_AnimationTriggers)
  i2520.m_Interactable = !!i2521[6]
  request.r(i2521[7], i2521[8], 0, i2520, 'm_TargetGraphic')
  return i2520
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2522 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2523 = data
  i2522.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2523[0], i2522.m_PersistentCalls)
  return i2522
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2524 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2525 = data
  var i2527 = i2525[0]
  var i2526 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.add(request.d('UnityEngine.Events.PersistentCall', i2527[i + 0]));
  }
  i2524.m_Calls = i2526
  return i2524
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2530 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2531 = data
  request.r(i2531[0], i2531[1], 0, i2530, 'm_Target')
  i2530.m_TargetAssemblyTypeName = i2531[2]
  i2530.m_MethodName = i2531[3]
  i2530.m_Mode = i2531[4]
  i2530.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2531[5], i2530.m_Arguments)
  i2530.m_CallState = i2531[6]
  return i2530
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2532 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2533 = data
  request.r(i2533[0], i2533[1], 0, i2532, 'm_ObjectArgument')
  i2532.m_ObjectArgumentAssemblyTypeName = i2533[2]
  i2532.m_IntArgument = i2533[3]
  i2532.m_FloatArgument = i2533[4]
  i2532.m_StringArgument = i2533[5]
  i2532.m_BoolArgument = !!i2533[6]
  return i2532
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2534 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2535 = data
  i2534.m_Mode = i2535[0]
  i2534.m_WrapAround = !!i2535[1]
  request.r(i2535[2], i2535[3], 0, i2534, 'm_SelectOnUp')
  request.r(i2535[4], i2535[5], 0, i2534, 'm_SelectOnDown')
  request.r(i2535[6], i2535[7], 0, i2534, 'm_SelectOnLeft')
  request.r(i2535[8], i2535[9], 0, i2534, 'm_SelectOnRight')
  return i2534
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2536 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2537 = data
  i2536.m_NormalColor = new pc.Color(i2537[0], i2537[1], i2537[2], i2537[3])
  i2536.m_HighlightedColor = new pc.Color(i2537[4], i2537[5], i2537[6], i2537[7])
  i2536.m_PressedColor = new pc.Color(i2537[8], i2537[9], i2537[10], i2537[11])
  i2536.m_SelectedColor = new pc.Color(i2537[12], i2537[13], i2537[14], i2537[15])
  i2536.m_DisabledColor = new pc.Color(i2537[16], i2537[17], i2537[18], i2537[19])
  i2536.m_ColorMultiplier = i2537[20]
  i2536.m_FadeDuration = i2537[21]
  return i2536
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2538 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2539 = data
  request.r(i2539[0], i2539[1], 0, i2538, 'm_HighlightedSprite')
  request.r(i2539[2], i2539[3], 0, i2538, 'm_PressedSprite')
  request.r(i2539[4], i2539[5], 0, i2538, 'm_SelectedSprite')
  request.r(i2539[6], i2539[7], 0, i2538, 'm_DisabledSprite')
  return i2538
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2540 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2541 = data
  i2540.m_NormalTrigger = i2541[0]
  i2540.m_HighlightedTrigger = i2541[1]
  i2540.m_PressedTrigger = i2541[2]
  i2540.m_SelectedTrigger = i2541[3]
  i2540.m_DisabledTrigger = i2541[4]
  return i2540
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i2542 = root || request.c( 'MixSkeletonSkin' )
  var i2543 = data
  request.r(i2543[0], i2543[1], 0, i2542, 'skeletonAnimation')
  var i2545 = i2543[2]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( i2545[i + 0] );
  }
  i2542.skinNames = i2544
  return i2542
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i2546 = root || request.c( 'ClickItem' )
  var i2547 = data
  var i2549 = i2547[0]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 2) {
  request.r(i2549[i + 0], i2549[i + 1], 2, i2548, '')
  }
  i2546.steps = i2548
  i2546.currentStep = i2547[1]
  i2546.isProcess = !!i2547[2]
  return i2546
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2550 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2551 = data
  i2550.m_hasFontAssetChanged = !!i2551[0]
  request.r(i2551[1], i2551[2], 0, i2550, 'm_baseMaterial')
  i2550.m_maskOffset = new pc.Vec4( i2551[3], i2551[4], i2551[5], i2551[6] )
  i2550.m_text = i2551[7]
  i2550.m_isRightToLeft = !!i2551[8]
  request.r(i2551[9], i2551[10], 0, i2550, 'm_fontAsset')
  request.r(i2551[11], i2551[12], 0, i2550, 'm_sharedMaterial')
  var i2553 = i2551[13]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 2) {
  request.r(i2553[i + 0], i2553[i + 1], 2, i2552, '')
  }
  i2550.m_fontSharedMaterials = i2552
  request.r(i2551[14], i2551[15], 0, i2550, 'm_fontMaterial')
  var i2555 = i2551[16]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 2) {
  request.r(i2555[i + 0], i2555[i + 1], 2, i2554, '')
  }
  i2550.m_fontMaterials = i2554
  i2550.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2551[17], i2551[18], i2551[19], i2551[20])
  i2550.m_fontColor = new pc.Color(i2551[21], i2551[22], i2551[23], i2551[24])
  i2550.m_enableVertexGradient = !!i2551[25]
  i2550.m_colorMode = i2551[26]
  i2550.m_fontColorGradient = request.d('TMPro.VertexGradient', i2551[27], i2550.m_fontColorGradient)
  request.r(i2551[28], i2551[29], 0, i2550, 'm_fontColorGradientPreset')
  request.r(i2551[30], i2551[31], 0, i2550, 'm_spriteAsset')
  i2550.m_tintAllSprites = !!i2551[32]
  request.r(i2551[33], i2551[34], 0, i2550, 'm_StyleSheet')
  i2550.m_TextStyleHashCode = i2551[35]
  i2550.m_overrideHtmlColors = !!i2551[36]
  i2550.m_faceColor = UnityEngine.Color32.ConstructColor(i2551[37], i2551[38], i2551[39], i2551[40])
  i2550.m_fontSize = i2551[41]
  i2550.m_fontSizeBase = i2551[42]
  i2550.m_fontWeight = i2551[43]
  i2550.m_enableAutoSizing = !!i2551[44]
  i2550.m_fontSizeMin = i2551[45]
  i2550.m_fontSizeMax = i2551[46]
  i2550.m_fontStyle = i2551[47]
  i2550.m_HorizontalAlignment = i2551[48]
  i2550.m_VerticalAlignment = i2551[49]
  i2550.m_textAlignment = i2551[50]
  i2550.m_characterSpacing = i2551[51]
  i2550.m_wordSpacing = i2551[52]
  i2550.m_lineSpacing = i2551[53]
  i2550.m_lineSpacingMax = i2551[54]
  i2550.m_paragraphSpacing = i2551[55]
  i2550.m_charWidthMaxAdj = i2551[56]
  i2550.m_enableWordWrapping = !!i2551[57]
  i2550.m_wordWrappingRatios = i2551[58]
  i2550.m_overflowMode = i2551[59]
  request.r(i2551[60], i2551[61], 0, i2550, 'm_linkedTextComponent')
  request.r(i2551[62], i2551[63], 0, i2550, 'parentLinkedComponent')
  i2550.m_enableKerning = !!i2551[64]
  i2550.m_enableExtraPadding = !!i2551[65]
  i2550.checkPaddingRequired = !!i2551[66]
  i2550.m_isRichText = !!i2551[67]
  i2550.m_parseCtrlCharacters = !!i2551[68]
  i2550.m_isOrthographic = !!i2551[69]
  i2550.m_isCullingEnabled = !!i2551[70]
  i2550.m_horizontalMapping = i2551[71]
  i2550.m_verticalMapping = i2551[72]
  i2550.m_uvLineOffset = i2551[73]
  i2550.m_geometrySortingOrder = i2551[74]
  i2550.m_IsTextObjectScaleStatic = !!i2551[75]
  i2550.m_VertexBufferAutoSizeReduction = !!i2551[76]
  i2550.m_useMaxVisibleDescender = !!i2551[77]
  i2550.m_pageToDisplay = i2551[78]
  i2550.m_margin = new pc.Vec4( i2551[79], i2551[80], i2551[81], i2551[82] )
  i2550.m_isUsingLegacyAnimationComponent = !!i2551[83]
  i2550.m_isVolumetricText = !!i2551[84]
  request.r(i2551[85], i2551[86], 0, i2550, 'm_Material')
  i2550.m_Maskable = !!i2551[87]
  i2550.m_Color = new pc.Color(i2551[88], i2551[89], i2551[90], i2551[91])
  i2550.m_RaycastTarget = !!i2551[92]
  i2550.m_RaycastPadding = new pc.Vec4( i2551[93], i2551[94], i2551[95], i2551[96] )
  return i2550
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2558 = root || request.c( 'TMPro.VertexGradient' )
  var i2559 = data
  i2558.topLeft = new pc.Color(i2559[0], i2559[1], i2559[2], i2559[3])
  i2558.topRight = new pc.Color(i2559[4], i2559[5], i2559[6], i2559[7])
  i2558.bottomLeft = new pc.Color(i2559[8], i2559[9], i2559[10], i2559[11])
  i2558.bottomRight = new pc.Color(i2559[12], i2559[13], i2559[14], i2559[15])
  return i2558
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2560 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2561 = data
  i2560.targetIsSelf = !!i2561[0]
  request.r(i2561[1], i2561[2], 0, i2560, 'targetGO')
  i2560.tweenTargetIsTargetGO = !!i2561[3]
  i2560.delay = i2561[4]
  i2560.duration = i2561[5]
  i2560.easeType = i2561[6]
  i2560.easeCurve = new pc.AnimationCurve( { keys_flow: i2561[7] } )
  i2560.loopType = i2561[8]
  i2560.loops = i2561[9]
  i2560.id = i2561[10]
  i2560.isRelative = !!i2561[11]
  i2560.isFrom = !!i2561[12]
  i2560.isIndependentUpdate = !!i2561[13]
  i2560.autoKill = !!i2561[14]
  i2560.autoGenerate = !!i2561[15]
  i2560.isActive = !!i2561[16]
  i2560.isValid = !!i2561[17]
  request.r(i2561[18], i2561[19], 0, i2560, 'target')
  i2560.animationType = i2561[20]
  i2560.targetType = i2561[21]
  i2560.forcedTargetType = i2561[22]
  i2560.autoPlay = !!i2561[23]
  i2560.useTargetAsV3 = !!i2561[24]
  i2560.endValueFloat = i2561[25]
  i2560.endValueV3 = new pc.Vec3( i2561[26], i2561[27], i2561[28] )
  i2560.endValueV2 = new pc.Vec2( i2561[29], i2561[30] )
  i2560.endValueColor = new pc.Color(i2561[31], i2561[32], i2561[33], i2561[34])
  i2560.endValueString = i2561[35]
  i2560.endValueRect = UnityEngine.Rect.MinMaxRect(i2561[36], i2561[37], i2561[38], i2561[39])
  request.r(i2561[40], i2561[41], 0, i2560, 'endValueTransform')
  i2560.optionalBool0 = !!i2561[42]
  i2560.optionalBool1 = !!i2561[43]
  i2560.optionalFloat0 = i2561[44]
  i2560.optionalInt0 = i2561[45]
  i2560.optionalRotationMode = i2561[46]
  i2560.optionalScrambleMode = i2561[47]
  i2560.optionalShakeRandomnessMode = i2561[48]
  i2560.optionalString = i2561[49]
  i2560.updateType = i2561[50]
  i2560.isSpeedBased = !!i2561[51]
  i2560.hasOnStart = !!i2561[52]
  i2560.hasOnPlay = !!i2561[53]
  i2560.hasOnUpdate = !!i2561[54]
  i2560.hasOnStepComplete = !!i2561[55]
  i2560.hasOnComplete = !!i2561[56]
  i2560.hasOnTweenCreated = !!i2561[57]
  i2560.hasOnRewind = !!i2561[58]
  i2560.onStart = request.d('UnityEngine.Events.UnityEvent', i2561[59], i2560.onStart)
  i2560.onPlay = request.d('UnityEngine.Events.UnityEvent', i2561[60], i2560.onPlay)
  i2560.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2561[61], i2560.onUpdate)
  i2560.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2561[62], i2560.onStepComplete)
  i2560.onComplete = request.d('UnityEngine.Events.UnityEvent', i2561[63], i2560.onComplete)
  i2560.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2561[64], i2560.onTweenCreated)
  i2560.onRewind = request.d('UnityEngine.Events.UnityEvent', i2561[65], i2560.onRewind)
  return i2560
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2562 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2563 = data
  i2562.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2563[0], i2562.m_PersistentCalls)
  return i2562
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2564 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2565 = data
  i2564.m_ShowMaskGraphic = !!i2565[0]
  return i2564
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2566 = root || request.c( 'AudioController' )
  var i2567 = data
  request.r(i2567[0], i2567[1], 0, i2566, 'bgmSource')
  request.r(i2567[2], i2567[3], 0, i2566, 'sfxSource')
  var i2569 = i2567[4]
  var i2568 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.add(request.d('AudioEntry', i2569[i + 0]));
  }
  i2566.audioEntries = i2568
  return i2566
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i2572 = root || request.c( 'AudioEntry' )
  var i2573 = data
  i2572.key = i2573[0]
  request.r(i2573[1], i2573[2], 0, i2572, 'clip')
  i2572.volume = i2573[3]
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2575 = data
  i2574.ambientIntensity = i2575[0]
  i2574.reflectionIntensity = i2575[1]
  i2574.ambientMode = i2575[2]
  i2574.ambientLight = new pc.Color(i2575[3], i2575[4], i2575[5], i2575[6])
  i2574.ambientSkyColor = new pc.Color(i2575[7], i2575[8], i2575[9], i2575[10])
  i2574.ambientGroundColor = new pc.Color(i2575[11], i2575[12], i2575[13], i2575[14])
  i2574.ambientEquatorColor = new pc.Color(i2575[15], i2575[16], i2575[17], i2575[18])
  i2574.fogColor = new pc.Color(i2575[19], i2575[20], i2575[21], i2575[22])
  i2574.fogEndDistance = i2575[23]
  i2574.fogStartDistance = i2575[24]
  i2574.fogDensity = i2575[25]
  i2574.fog = !!i2575[26]
  request.r(i2575[27], i2575[28], 0, i2574, 'skybox')
  i2574.fogMode = i2575[29]
  var i2577 = i2575[30]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 1) {
    i2576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2577[i + 0]) );
  }
  i2574.lightmaps = i2576
  i2574.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2575[31], i2574.lightProbes)
  i2574.lightmapsMode = i2575[32]
  i2574.mixedBakeMode = i2575[33]
  i2574.environmentLightingMode = i2575[34]
  i2574.ambientProbe = new pc.SphericalHarmonicsL2(i2575[35])
  i2574.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2575[36])
  i2574.useReferenceAmbientProbe = !!i2575[37]
  request.r(i2575[38], i2575[39], 0, i2574, 'customReflection')
  request.r(i2575[40], i2575[41], 0, i2574, 'defaultReflection')
  i2574.defaultReflectionMode = i2575[42]
  i2574.defaultReflectionResolution = i2575[43]
  i2574.sunLightObjectId = i2575[44]
  i2574.pixelLightCount = i2575[45]
  i2574.defaultReflectionHDR = !!i2575[46]
  i2574.hasLightDataAsset = !!i2575[47]
  i2574.hasManualGenerate = !!i2575[48]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2581 = data
  request.r(i2581[0], i2581[1], 0, i2580, 'lightmapColor')
  request.r(i2581[2], i2581[3], 0, i2580, 'lightmapDirection')
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2582 = root || new UnityEngine.LightProbes()
  var i2583 = data
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2591 = data
  var i2593 = i2591[0]
  var i2592 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2593[i + 0]));
  }
  i2590.ShaderCompilationErrors = i2592
  i2590.name = i2591[1]
  i2590.guid = i2591[2]
  var i2595 = i2591[3]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.push( i2595[i + 0] );
  }
  i2590.shaderDefinedKeywords = i2594
  var i2597 = i2591[4]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2597[i + 0]) );
  }
  i2590.passes = i2596
  var i2599 = i2591[5]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2599[i + 0]) );
  }
  i2590.usePasses = i2598
  var i2601 = i2591[6]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2601[i + 0]) );
  }
  i2590.defaultParameterValues = i2600
  request.r(i2591[7], i2591[8], 0, i2590, 'unityFallbackShader')
  i2590.readDepth = !!i2591[9]
  i2590.isCreatedByShaderGraph = !!i2591[10]
  i2590.usedBatchUniforms = i2591[11]
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2605 = data
  i2604.shaderName = i2605[0]
  i2604.errorMessage = i2605[1]
  return i2604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2608 = root || new pc.UnityShaderPass()
  var i2609 = data
  i2608.id = i2609[0]
  i2608.subShaderIndex = i2609[1]
  i2608.name = i2609[2]
  i2608.passType = i2609[3]
  i2608.grabPassTextureName = i2609[4]
  i2608.usePass = !!i2609[5]
  i2608.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2609[6], i2608.zTest)
  i2608.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2609[7], i2608.zWrite)
  i2608.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2609[8], i2608.culling)
  i2608.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2609[9], i2608.blending)
  i2608.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2609[10], i2608.alphaBlending)
  i2608.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2609[11], i2608.colorWriteMask)
  i2608.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2609[12], i2608.offsetUnits)
  i2608.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2609[13], i2608.offsetFactor)
  i2608.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2609[14], i2608.stencilRef)
  i2608.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2609[15], i2608.stencilReadMask)
  i2608.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2609[16], i2608.stencilWriteMask)
  i2608.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2609[17], i2608.stencilOp)
  i2608.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2609[18], i2608.stencilOpFront)
  i2608.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2609[19], i2608.stencilOpBack)
  var i2611 = i2609[20]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2611[i + 0]) );
  }
  i2608.tags = i2610
  var i2613 = i2609[21]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( i2613[i + 0] );
  }
  i2608.passDefinedKeywords = i2612
  var i2615 = i2609[22]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2615[i + 0]) );
  }
  i2608.passDefinedKeywordGroups = i2614
  var i2617 = i2609[23]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2617[i + 0]) );
  }
  i2608.variants = i2616
  var i2619 = i2609[24]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2619[i + 0]) );
  }
  i2608.excludedVariants = i2618
  i2608.hasDepthReader = !!i2609[25]
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2621 = data
  i2620.val = i2621[0]
  i2620.name = i2621[1]
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2623 = data
  i2622.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2623[0], i2622.src)
  i2622.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2623[1], i2622.dst)
  i2622.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2623[2], i2622.op)
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2625 = data
  i2624.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2625[0], i2624.pass)
  i2624.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2625[1], i2624.fail)
  i2624.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2625[2], i2624.zFail)
  i2624.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2625[3], i2624.comp)
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2629 = data
  i2628.name = i2629[0]
  i2628.value = i2629[1]
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2633 = data
  var i2635 = i2633[0]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.push( i2635[i + 0] );
  }
  i2632.keywords = i2634
  i2632.hasDiscard = !!i2633[1]
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2639 = data
  i2638.passId = i2639[0]
  i2638.subShaderIndex = i2639[1]
  var i2641 = i2639[2]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.push( i2641[i + 0] );
  }
  i2638.keywords = i2640
  i2638.vertexProgram = i2639[3]
  i2638.fragmentProgram = i2639[4]
  i2638.compiledForWebGL2 = !!i2639[5]
  i2638.readDepth = !!i2639[6]
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2645 = data
  request.r(i2645[0], i2645[1], 0, i2644, 'shader')
  i2644.pass = i2645[2]
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2649 = data
  i2648.name = i2649[0]
  i2648.type = i2649[1]
  i2648.value = new pc.Vec4( i2649[2], i2649[3], i2649[4], i2649[5] )
  i2648.textureValue = i2649[6]
  i2648.shaderPropertyFlag = i2649[7]
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2651 = data
  i2650.name = i2651[0]
  request.r(i2651[1], i2651[2], 0, i2650, 'texture')
  i2650.aabb = i2651[3]
  i2650.vertices = i2651[4]
  i2650.triangles = i2651[5]
  i2650.textureRect = UnityEngine.Rect.MinMaxRect(i2651[6], i2651[7], i2651[8], i2651[9])
  i2650.packedRect = UnityEngine.Rect.MinMaxRect(i2651[10], i2651[11], i2651[12], i2651[13])
  i2650.border = new pc.Vec4( i2651[14], i2651[15], i2651[16], i2651[17] )
  i2650.transparency = i2651[18]
  i2650.bounds = i2651[19]
  i2650.pixelsPerUnit = i2651[20]
  i2650.textureWidth = i2651[21]
  i2650.textureHeight = i2651[22]
  i2650.nativeSize = new pc.Vec2( i2651[23], i2651[24] )
  i2650.pivot = new pc.Vec2( i2651[25], i2651[26] )
  i2650.textureRectOffset = new pc.Vec2( i2651[27], i2651[28] )
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2653 = data
  i2652.name = i2653[0]
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2655 = data
  i2654.name = i2655[0]
  i2654.ascent = i2655[1]
  i2654.originalLineHeight = i2655[2]
  i2654.fontSize = i2655[3]
  var i2657 = i2655[4]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 1) {
    i2656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2657[i + 0]) );
  }
  i2654.characterInfo = i2656
  request.r(i2655[5], i2655[6], 0, i2654, 'texture')
  i2654.originalFontSize = i2655[7]
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2661 = data
  i2660.index = i2661[0]
  i2660.advance = i2661[1]
  i2660.bearing = i2661[2]
  i2660.glyphWidth = i2661[3]
  i2660.glyphHeight = i2661[4]
  i2660.minX = i2661[5]
  i2660.maxX = i2661[6]
  i2660.minY = i2661[7]
  i2660.maxY = i2661[8]
  i2660.uvBottomLeftX = i2661[9]
  i2660.uvBottomLeftY = i2661[10]
  i2660.uvBottomRightX = i2661[11]
  i2660.uvBottomRightY = i2661[12]
  i2660.uvTopLeftX = i2661[13]
  i2660.uvTopLeftY = i2661[14]
  i2660.uvTopRightX = i2661[15]
  i2660.uvTopRightY = i2661[16]
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2663 = data
  i2662.name = i2663[0]
  i2662.bytes64 = i2663[1]
  i2662.data = i2663[2]
  return i2662
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2664 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2665 = data
  var i2667 = i2665[0]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 2) {
  request.r(i2667[i + 0], i2667[i + 1], 2, i2666, '')
  }
  i2664.atlasAssets = i2666
  i2664.scale = i2665[1]
  request.r(i2665[2], i2665[3], 0, i2664, 'skeletonJSON')
  i2664.isUpgradingBlendModeMaterials = !!i2665[4]
  i2664.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2665[5], i2664.blendModeMaterials)
  var i2669 = i2665[6]
  var i2668 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2669.length; i += 2) {
  request.r(i2669[i + 0], i2669[i + 1], 1, i2668, '')
  }
  i2664.skeletonDataModifiers = i2668
  var i2671 = i2665[7]
  var i2670 = []
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.push( i2671[i + 0] );
  }
  i2664.fromAnimation = i2670
  var i2673 = i2665[8]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.push( i2673[i + 0] );
  }
  i2664.toAnimation = i2672
  i2664.duration = i2665[9]
  i2664.defaultMix = i2665[10]
  request.r(i2665[11], i2665[12], 0, i2664, 'controller')
  return i2664
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2676 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2677 = data
  i2676.applyAdditiveMaterial = !!i2677[0]
  var i2679 = i2677[1]
  var i2678 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2679[i + 0]));
  }
  i2676.additiveMaterials = i2678
  var i2681 = i2677[2]
  var i2680 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2681[i + 0]));
  }
  i2676.multiplyMaterials = i2680
  var i2683 = i2677[3]
  var i2682 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2683[i + 0]));
  }
  i2676.screenMaterials = i2682
  i2676.requiresBlendModeMaterials = !!i2677[4]
  return i2676
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2686 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2687 = data
  i2686.pageName = i2687[0]
  request.r(i2687[1], i2687[2], 0, i2686, 'material')
  return i2686
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2690 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2691 = data
  request.r(i2691[0], i2691[1], 0, i2690, 'atlasFile')
  var i2693 = i2691[2]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 2) {
  request.r(i2693[i + 0], i2693[i + 1], 2, i2692, '')
  }
  i2690.materials = i2692
  i2690.textureLoadingMode = i2691[3]
  request.r(i2691[4], i2691[5], 0, i2690, 'onDemandTextureLoader')
  return i2690
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2694 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2695 = data
  i2694.hashCode = i2695[0]
  request.r(i2695[1], i2695[2], 0, i2694, 'material')
  i2694.materialHashCode = i2695[3]
  request.r(i2695[4], i2695[5], 0, i2694, 'atlas')
  i2694.normalStyle = i2695[6]
  i2694.normalSpacingOffset = i2695[7]
  i2694.boldStyle = i2695[8]
  i2694.boldSpacing = i2695[9]
  i2694.italicStyle = i2695[10]
  i2694.tabSize = i2695[11]
  i2694.m_Version = i2695[12]
  i2694.m_SourceFontFileGUID = i2695[13]
  request.r(i2695[14], i2695[15], 0, i2694, 'm_SourceFontFile_EditorRef')
  request.r(i2695[16], i2695[17], 0, i2694, 'm_SourceFontFile')
  i2694.m_AtlasPopulationMode = i2695[18]
  i2694.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2695[19], i2694.m_FaceInfo)
  var i2697 = i2695[20]
  var i2696 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.add(request.d('UnityEngine.TextCore.Glyph', i2697[i + 0]));
  }
  i2694.m_GlyphTable = i2696
  var i2699 = i2695[21]
  var i2698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.add(request.d('TMPro.TMP_Character', i2699[i + 0]));
  }
  i2694.m_CharacterTable = i2698
  var i2701 = i2695[22]
  var i2700 = []
  for(var i = 0; i < i2701.length; i += 2) {
  request.r(i2701[i + 0], i2701[i + 1], 2, i2700, '')
  }
  i2694.m_AtlasTextures = i2700
  i2694.m_AtlasTextureIndex = i2695[23]
  i2694.m_IsMultiAtlasTexturesEnabled = !!i2695[24]
  i2694.m_ClearDynamicDataOnBuild = !!i2695[25]
  var i2703 = i2695[26]
  var i2702 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.add(request.d('UnityEngine.TextCore.GlyphRect', i2703[i + 0]));
  }
  i2694.m_UsedGlyphRects = i2702
  var i2705 = i2695[27]
  var i2704 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.add(request.d('UnityEngine.TextCore.GlyphRect', i2705[i + 0]));
  }
  i2694.m_FreeGlyphRects = i2704
  i2694.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2695[28], i2694.m_fontInfo)
  i2694.m_AtlasWidth = i2695[29]
  i2694.m_AtlasHeight = i2695[30]
  i2694.m_AtlasPadding = i2695[31]
  i2694.m_AtlasRenderMode = i2695[32]
  var i2707 = i2695[33]
  var i2706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.add(request.d('TMPro.TMP_Glyph', i2707[i + 0]));
  }
  i2694.m_glyphInfoList = i2706
  i2694.m_KerningTable = request.d('TMPro.KerningTable', i2695[34], i2694.m_KerningTable)
  i2694.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2695[35], i2694.m_FontFeatureTable)
  var i2709 = i2695[36]
  var i2708 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2709.length; i += 2) {
  request.r(i2709[i + 0], i2709[i + 1], 1, i2708, '')
  }
  i2694.fallbackFontAssets = i2708
  var i2711 = i2695[37]
  var i2710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2711.length; i += 2) {
  request.r(i2711[i + 0], i2711[i + 1], 1, i2710, '')
  }
  i2694.m_FallbackFontAssetTable = i2710
  i2694.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2695[38], i2694.m_CreationSettings)
  var i2713 = i2695[39]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( request.d('TMPro.TMP_FontWeightPair', i2713[i + 0]) );
  }
  i2694.m_FontWeightTable = i2712
  var i2715 = i2695[40]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( request.d('TMPro.TMP_FontWeightPair', i2715[i + 0]) );
  }
  i2694.fontWeights = i2714
  return i2694
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2716 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2717 = data
  i2716.m_FaceIndex = i2717[0]
  i2716.m_FamilyName = i2717[1]
  i2716.m_StyleName = i2717[2]
  i2716.m_PointSize = i2717[3]
  i2716.m_Scale = i2717[4]
  i2716.m_UnitsPerEM = i2717[5]
  i2716.m_LineHeight = i2717[6]
  i2716.m_AscentLine = i2717[7]
  i2716.m_CapLine = i2717[8]
  i2716.m_MeanLine = i2717[9]
  i2716.m_Baseline = i2717[10]
  i2716.m_DescentLine = i2717[11]
  i2716.m_SuperscriptOffset = i2717[12]
  i2716.m_SuperscriptSize = i2717[13]
  i2716.m_SubscriptOffset = i2717[14]
  i2716.m_SubscriptSize = i2717[15]
  i2716.m_UnderlineOffset = i2717[16]
  i2716.m_UnderlineThickness = i2717[17]
  i2716.m_StrikethroughOffset = i2717[18]
  i2716.m_StrikethroughThickness = i2717[19]
  i2716.m_TabWidth = i2717[20]
  return i2716
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2720 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2721 = data
  i2720.m_Index = i2721[0]
  i2720.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2721[1], i2720.m_Metrics)
  i2720.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2721[2], i2720.m_GlyphRect)
  i2720.m_Scale = i2721[3]
  i2720.m_AtlasIndex = i2721[4]
  i2720.m_ClassDefinitionType = i2721[5]
  return i2720
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2722 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2723 = data
  i2722.m_Width = i2723[0]
  i2722.m_Height = i2723[1]
  i2722.m_HorizontalBearingX = i2723[2]
  i2722.m_HorizontalBearingY = i2723[3]
  i2722.m_HorizontalAdvance = i2723[4]
  return i2722
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2724 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2725 = data
  i2724.m_X = i2725[0]
  i2724.m_Y = i2725[1]
  i2724.m_Width = i2725[2]
  i2724.m_Height = i2725[3]
  return i2724
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2728 = root || request.c( 'TMPro.TMP_Character' )
  var i2729 = data
  i2728.m_ElementType = i2729[0]
  i2728.m_Unicode = i2729[1]
  i2728.m_GlyphIndex = i2729[2]
  i2728.m_Scale = i2729[3]
  return i2728
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2734 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2735 = data
  i2734.Name = i2735[0]
  i2734.PointSize = i2735[1]
  i2734.Scale = i2735[2]
  i2734.CharacterCount = i2735[3]
  i2734.LineHeight = i2735[4]
  i2734.Baseline = i2735[5]
  i2734.Ascender = i2735[6]
  i2734.CapHeight = i2735[7]
  i2734.Descender = i2735[8]
  i2734.CenterLine = i2735[9]
  i2734.SuperscriptOffset = i2735[10]
  i2734.SubscriptOffset = i2735[11]
  i2734.SubSize = i2735[12]
  i2734.Underline = i2735[13]
  i2734.UnderlineThickness = i2735[14]
  i2734.strikethrough = i2735[15]
  i2734.strikethroughThickness = i2735[16]
  i2734.TabWidth = i2735[17]
  i2734.Padding = i2735[18]
  i2734.AtlasWidth = i2735[19]
  i2734.AtlasHeight = i2735[20]
  return i2734
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2738 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2739 = data
  i2738.id = i2739[0]
  i2738.x = i2739[1]
  i2738.y = i2739[2]
  i2738.width = i2739[3]
  i2738.height = i2739[4]
  i2738.xOffset = i2739[5]
  i2738.yOffset = i2739[6]
  i2738.xAdvance = i2739[7]
  i2738.scale = i2739[8]
  return i2738
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2740 = root || request.c( 'TMPro.KerningTable' )
  var i2741 = data
  var i2743 = i2741[0]
  var i2742 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.add(request.d('TMPro.KerningPair', i2743[i + 0]));
  }
  i2740.kerningPairs = i2742
  return i2740
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2746 = root || request.c( 'TMPro.KerningPair' )
  var i2747 = data
  i2746.xOffset = i2747[0]
  i2746.m_FirstGlyph = i2747[1]
  i2746.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2747[2], i2746.m_FirstGlyphAdjustments)
  i2746.m_SecondGlyph = i2747[3]
  i2746.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2747[4], i2746.m_SecondGlyphAdjustments)
  i2746.m_IgnoreSpacingAdjustments = !!i2747[5]
  return i2746
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2748 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2749 = data
  var i2751 = i2749[0]
  var i2750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2751[i + 0]));
  }
  i2748.m_GlyphPairAdjustmentRecords = i2750
  return i2748
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2754 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2755 = data
  i2754.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2755[0], i2754.m_FirstAdjustmentRecord)
  i2754.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2755[1], i2754.m_SecondAdjustmentRecord)
  i2754.m_FeatureLookupFlags = i2755[2]
  return i2754
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2758 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2759 = data
  i2758.sourceFontFileName = i2759[0]
  i2758.sourceFontFileGUID = i2759[1]
  i2758.pointSizeSamplingMode = i2759[2]
  i2758.pointSize = i2759[3]
  i2758.padding = i2759[4]
  i2758.packingMode = i2759[5]
  i2758.atlasWidth = i2759[6]
  i2758.atlasHeight = i2759[7]
  i2758.characterSetSelectionMode = i2759[8]
  i2758.characterSequence = i2759[9]
  i2758.referencedFontAssetGUID = i2759[10]
  i2758.referencedTextAssetGUID = i2759[11]
  i2758.fontStyle = i2759[12]
  i2758.fontStyleModifier = i2759[13]
  i2758.renderMode = i2759[14]
  i2758.includeFontFeatures = !!i2759[15]
  return i2758
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2762 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2763 = data
  request.r(i2763[0], i2763[1], 0, i2762, 'regularTypeface')
  request.r(i2763[2], i2763[3], 0, i2762, 'italicTypeface')
  return i2762
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2764 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2765 = data
  i2764.useSafeMode = !!i2765[0]
  i2764.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2765[1], i2764.safeModeOptions)
  i2764.timeScale = i2765[2]
  i2764.unscaledTimeScale = i2765[3]
  i2764.useSmoothDeltaTime = !!i2765[4]
  i2764.maxSmoothUnscaledTime = i2765[5]
  i2764.rewindCallbackMode = i2765[6]
  i2764.showUnityEditorReport = !!i2765[7]
  i2764.logBehaviour = i2765[8]
  i2764.drawGizmos = !!i2765[9]
  i2764.defaultRecyclable = !!i2765[10]
  i2764.defaultAutoPlay = i2765[11]
  i2764.defaultUpdateType = i2765[12]
  i2764.defaultTimeScaleIndependent = !!i2765[13]
  i2764.defaultEaseType = i2765[14]
  i2764.defaultEaseOvershootOrAmplitude = i2765[15]
  i2764.defaultEasePeriod = i2765[16]
  i2764.defaultAutoKill = !!i2765[17]
  i2764.defaultLoopType = i2765[18]
  i2764.debugMode = !!i2765[19]
  i2764.debugStoreTargetId = !!i2765[20]
  i2764.showPreviewPanel = !!i2765[21]
  i2764.storeSettingsLocation = i2765[22]
  i2764.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2765[23], i2764.modules)
  i2764.createASMDEF = !!i2765[24]
  i2764.showPlayingTweens = !!i2765[25]
  i2764.showPausedTweens = !!i2765[26]
  return i2764
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2766 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2767 = data
  i2766.logBehaviour = i2767[0]
  i2766.nestedTweenFailureBehaviour = i2767[1]
  return i2766
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2768 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2769 = data
  i2768.showPanel = !!i2769[0]
  i2768.audioEnabled = !!i2769[1]
  i2768.physicsEnabled = !!i2769[2]
  i2768.physics2DEnabled = !!i2769[3]
  i2768.spriteEnabled = !!i2769[4]
  i2768.uiEnabled = !!i2769[5]
  i2768.textMeshProEnabled = !!i2769[6]
  i2768.tk2DEnabled = !!i2769[7]
  i2768.deAudioEnabled = !!i2769[8]
  i2768.deUnityExtendedEnabled = !!i2769[9]
  i2768.epoOutlineEnabled = !!i2769[10]
  return i2768
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2770 = root || request.c( 'TMPro.TMP_Settings' )
  var i2771 = data
  i2770.m_enableWordWrapping = !!i2771[0]
  i2770.m_enableKerning = !!i2771[1]
  i2770.m_enableExtraPadding = !!i2771[2]
  i2770.m_enableTintAllSprites = !!i2771[3]
  i2770.m_enableParseEscapeCharacters = !!i2771[4]
  i2770.m_EnableRaycastTarget = !!i2771[5]
  i2770.m_GetFontFeaturesAtRuntime = !!i2771[6]
  i2770.m_missingGlyphCharacter = i2771[7]
  i2770.m_warningsDisabled = !!i2771[8]
  request.r(i2771[9], i2771[10], 0, i2770, 'm_defaultFontAsset')
  i2770.m_defaultFontAssetPath = i2771[11]
  i2770.m_defaultFontSize = i2771[12]
  i2770.m_defaultAutoSizeMinRatio = i2771[13]
  i2770.m_defaultAutoSizeMaxRatio = i2771[14]
  i2770.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2771[15], i2771[16] )
  i2770.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2771[17], i2771[18] )
  i2770.m_autoSizeTextContainer = !!i2771[19]
  i2770.m_IsTextObjectScaleStatic = !!i2771[20]
  var i2773 = i2771[21]
  var i2772 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2773.length; i += 2) {
  request.r(i2773[i + 0], i2773[i + 1], 1, i2772, '')
  }
  i2770.m_fallbackFontAssets = i2772
  i2770.m_matchMaterialPreset = !!i2771[22]
  request.r(i2771[23], i2771[24], 0, i2770, 'm_defaultSpriteAsset')
  i2770.m_defaultSpriteAssetPath = i2771[25]
  i2770.m_enableEmojiSupport = !!i2771[26]
  i2770.m_MissingCharacterSpriteUnicode = i2771[27]
  i2770.m_defaultColorGradientPresetsPath = i2771[28]
  request.r(i2771[29], i2771[30], 0, i2770, 'm_defaultStyleSheet')
  i2770.m_StyleSheetsResourcePath = i2771[31]
  request.r(i2771[32], i2771[33], 0, i2770, 'm_leadingCharacters')
  request.r(i2771[34], i2771[35], 0, i2770, 'm_followingCharacters')
  i2770.m_UseModernHangulLineBreakingRules = !!i2771[36]
  return i2770
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2774 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2775 = data
  i2774.hashCode = i2775[0]
  request.r(i2775[1], i2775[2], 0, i2774, 'material')
  i2774.materialHashCode = i2775[3]
  request.r(i2775[4], i2775[5], 0, i2774, 'spriteSheet')
  var i2777 = i2775[6]
  var i2776 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.add(request.d('TMPro.TMP_Sprite', i2777[i + 0]));
  }
  i2774.spriteInfoList = i2776
  var i2779 = i2775[7]
  var i2778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2779.length; i += 2) {
  request.r(i2779[i + 0], i2779[i + 1], 1, i2778, '')
  }
  i2774.fallbackSpriteAssets = i2778
  i2774.m_Version = i2775[8]
  i2774.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2775[9], i2774.m_FaceInfo)
  var i2781 = i2775[10]
  var i2780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2781.length; i += 1) {
    i2780.add(request.d('TMPro.TMP_SpriteCharacter', i2781[i + 0]));
  }
  i2774.m_SpriteCharacterTable = i2780
  var i2783 = i2775[11]
  var i2782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2783.length; i += 1) {
    i2782.add(request.d('TMPro.TMP_SpriteGlyph', i2783[i + 0]));
  }
  i2774.m_SpriteGlyphTable = i2782
  return i2774
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2786 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2787 = data
  i2786.name = i2787[0]
  i2786.hashCode = i2787[1]
  i2786.unicode = i2787[2]
  i2786.pivot = new pc.Vec2( i2787[3], i2787[4] )
  request.r(i2787[5], i2787[6], 0, i2786, 'sprite')
  i2786.id = i2787[7]
  i2786.x = i2787[8]
  i2786.y = i2787[9]
  i2786.width = i2787[10]
  i2786.height = i2787[11]
  i2786.xOffset = i2787[12]
  i2786.yOffset = i2787[13]
  i2786.xAdvance = i2787[14]
  i2786.scale = i2787[15]
  return i2786
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2792 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2793 = data
  i2792.m_Name = i2793[0]
  i2792.m_HashCode = i2793[1]
  i2792.m_ElementType = i2793[2]
  i2792.m_Unicode = i2793[3]
  i2792.m_GlyphIndex = i2793[4]
  i2792.m_Scale = i2793[5]
  return i2792
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2796 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2797 = data
  request.r(i2797[0], i2797[1], 0, i2796, 'sprite')
  i2796.m_Index = i2797[2]
  i2796.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2797[3], i2796.m_Metrics)
  i2796.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2797[4], i2796.m_GlyphRect)
  i2796.m_Scale = i2797[5]
  i2796.m_AtlasIndex = i2797[6]
  i2796.m_ClassDefinitionType = i2797[7]
  return i2796
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2798 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2799 = data
  var i2801 = i2799[0]
  var i2800 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.add(request.d('TMPro.TMP_Style', i2801[i + 0]));
  }
  i2798.m_StyleList = i2800
  return i2798
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2804 = root || request.c( 'TMPro.TMP_Style' )
  var i2805 = data
  i2804.m_Name = i2805[0]
  i2804.m_HashCode = i2805[1]
  i2804.m_OpeningDefinition = i2805[2]
  i2804.m_ClosingDefinition = i2805[3]
  i2804.m_OpeningTagArray = i2805[4]
  i2804.m_ClosingTagArray = i2805[5]
  i2804.m_OpeningTagUnicodeArray = i2805[6]
  i2804.m_ClosingTagUnicodeArray = i2805[7]
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2807 = data
  var i2809 = i2807[0]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2809[i + 0]) );
  }
  i2806.files = i2808
  i2806.componentToPrefabIds = i2807[1]
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2813 = data
  i2812.path = i2813[0]
  request.r(i2813[1], i2813[2], 0, i2812, 'unityObject')
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2815 = data
  var i2817 = i2815[0]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2817[i + 0]) );
  }
  i2814.scriptsExecutionOrder = i2816
  var i2819 = i2815[1]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2819[i + 0]) );
  }
  i2814.sortingLayers = i2818
  var i2821 = i2815[2]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2821[i + 0]) );
  }
  i2814.cullingLayers = i2820
  i2814.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2815[3], i2814.timeSettings)
  i2814.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2815[4], i2814.physicsSettings)
  i2814.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2815[5], i2814.physics2DSettings)
  i2814.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2815[6], i2814.qualitySettings)
  i2814.enableRealtimeShadows = !!i2815[7]
  i2814.enableAutoInstancing = !!i2815[8]
  i2814.enableDynamicBatching = !!i2815[9]
  i2814.lightmapEncodingQuality = i2815[10]
  i2814.desiredColorSpace = i2815[11]
  var i2823 = i2815[12]
  var i2822 = []
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.push( i2823[i + 0] );
  }
  i2814.allTags = i2822
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2827 = data
  i2826.name = i2827[0]
  i2826.value = i2827[1]
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2831 = data
  i2830.id = i2831[0]
  i2830.name = i2831[1]
  i2830.value = i2831[2]
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2835 = data
  i2834.id = i2835[0]
  i2834.name = i2835[1]
  return i2834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2837 = data
  i2836.fixedDeltaTime = i2837[0]
  i2836.maximumDeltaTime = i2837[1]
  i2836.timeScale = i2837[2]
  i2836.maximumParticleTimestep = i2837[3]
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2839 = data
  i2838.gravity = new pc.Vec3( i2839[0], i2839[1], i2839[2] )
  i2838.defaultSolverIterations = i2839[3]
  i2838.bounceThreshold = i2839[4]
  i2838.autoSyncTransforms = !!i2839[5]
  i2838.autoSimulation = !!i2839[6]
  var i2841 = i2839[7]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2841[i + 0]) );
  }
  i2838.collisionMatrix = i2840
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2845 = data
  i2844.enabled = !!i2845[0]
  i2844.layerId = i2845[1]
  i2844.otherLayerId = i2845[2]
  return i2844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2847 = data
  request.r(i2847[0], i2847[1], 0, i2846, 'material')
  i2846.gravity = new pc.Vec2( i2847[2], i2847[3] )
  i2846.positionIterations = i2847[4]
  i2846.velocityIterations = i2847[5]
  i2846.velocityThreshold = i2847[6]
  i2846.maxLinearCorrection = i2847[7]
  i2846.maxAngularCorrection = i2847[8]
  i2846.maxTranslationSpeed = i2847[9]
  i2846.maxRotationSpeed = i2847[10]
  i2846.baumgarteScale = i2847[11]
  i2846.baumgarteTOIScale = i2847[12]
  i2846.timeToSleep = i2847[13]
  i2846.linearSleepTolerance = i2847[14]
  i2846.angularSleepTolerance = i2847[15]
  i2846.defaultContactOffset = i2847[16]
  i2846.autoSimulation = !!i2847[17]
  i2846.queriesHitTriggers = !!i2847[18]
  i2846.queriesStartInColliders = !!i2847[19]
  i2846.callbacksOnDisable = !!i2847[20]
  i2846.reuseCollisionCallbacks = !!i2847[21]
  i2846.autoSyncTransforms = !!i2847[22]
  var i2849 = i2847[23]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2849[i + 0]) );
  }
  i2846.collisionMatrix = i2848
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2853 = data
  i2852.enabled = !!i2853[0]
  i2852.layerId = i2853[1]
  i2852.otherLayerId = i2853[2]
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2855 = data
  var i2857 = i2855[0]
  var i2856 = []
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2857[i + 0]) );
  }
  i2854.qualityLevels = i2856
  var i2859 = i2855[1]
  var i2858 = []
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.push( i2859[i + 0] );
  }
  i2854.names = i2858
  i2854.shadows = i2855[2]
  i2854.anisotropicFiltering = i2855[3]
  i2854.antiAliasing = i2855[4]
  i2854.lodBias = i2855[5]
  i2854.shadowCascades = i2855[6]
  i2854.shadowDistance = i2855[7]
  i2854.shadowmaskMode = i2855[8]
  i2854.shadowProjection = i2855[9]
  i2854.shadowResolution = i2855[10]
  i2854.softParticles = !!i2855[11]
  i2854.softVegetation = !!i2855[12]
  i2854.activeColorSpace = i2855[13]
  i2854.desiredColorSpace = i2855[14]
  i2854.masterTextureLimit = i2855[15]
  i2854.maxQueuedFrames = i2855[16]
  i2854.particleRaycastBudget = i2855[17]
  i2854.pixelLightCount = i2855[18]
  i2854.realtimeReflectionProbes = !!i2855[19]
  i2854.shadowCascade2Split = i2855[20]
  i2854.shadowCascade4Split = new pc.Vec3( i2855[21], i2855[22], i2855[23] )
  i2854.streamingMipmapsActive = !!i2855[24]
  i2854.vSyncCount = i2855[25]
  i2854.asyncUploadBufferSize = i2855[26]
  i2854.asyncUploadTimeSlice = i2855[27]
  i2854.billboardsFaceCameraPosition = !!i2855[28]
  i2854.shadowNearPlaneOffset = i2855[29]
  i2854.streamingMipmapsMemoryBudget = i2855[30]
  i2854.maximumLODLevel = i2855[31]
  i2854.streamingMipmapsAddAllCameras = !!i2855[32]
  i2854.streamingMipmapsMaxLevelReduction = i2855[33]
  i2854.streamingMipmapsRenderersPerFrame = i2855[34]
  i2854.resolutionScalingFixedDPIFactor = i2855[35]
  i2854.streamingMipmapsMaxFileIORequests = i2855[36]
  i2854.currentQualityLevel = i2855[37]
  return i2854
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2862 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2863 = data
  i2862.xPlacement = i2863[0]
  i2862.yPlacement = i2863[1]
  i2862.xAdvance = i2863[2]
  i2862.yAdvance = i2863[3]
  return i2862
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2864 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2865 = data
  i2864.m_GlyphIndex = i2865[0]
  i2864.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2865[1], i2864.m_GlyphValueRecord)
  return i2864
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2866 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2867 = data
  i2866.m_XPlacement = i2867[0]
  i2866.m_YPlacement = i2867[1]
  i2866.m_XAdvance = i2867[2]
  i2866.m_YAdvance = i2867[3]
  return i2866
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[3],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[3],"76":[77],"78":[79],"80":[79],"9":[8],"81":[82],"83":[84],"85":[82],"86":[8],"87":[8],"11":[9],"18":[19,8],"88":[8],"10":[9],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"34":[8],"96":[8],"16":[19,8],"97":[8],"98":[8],"99":[8],"100":[8],"101":[19,8],"102":[8],"103":[6],"104":[6],"7":[6],"105":[6],"106":[3],"107":[3],"108":[109],"110":[3],"111":[112],"113":[8],"114":[19,8],"115":[77],"27":[19,8],"116":[117,77],"118":[77],"119":[77,120],"121":[54],"122":[62],"123":[112],"124":[125],"126":[8],"127":[77,8],"17":[8,19],"128":[8],"129":[19,8],"130":[77],"131":[19,8],"132":[8],"133":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.CanvasGroup","DragCustom","UnityEngine.PolygonCollider2D","DropCustom","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","MixSkeletonSkin","ClickItem","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "155.1";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "BEQ_V16_NgocNDL_AnhPD";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1716";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4667";

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

Deserializers.buildID = "b092e3ff-ff78-4810-ab7c-12a247b0fef1";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

