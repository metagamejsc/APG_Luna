var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2370 = root || request.c( 'UnityEngine.JointSpring' )
  var i2371 = data
  i2370.spring = i2371[0]
  i2370.damper = i2371[1]
  i2370.targetPosition = i2371[2]
  return i2370
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2372 = root || request.c( 'UnityEngine.JointMotor' )
  var i2373 = data
  i2372.m_TargetVelocity = i2373[0]
  i2372.m_Force = i2373[1]
  i2372.m_FreeSpin = i2373[2]
  return i2372
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2374 = root || request.c( 'UnityEngine.JointLimits' )
  var i2375 = data
  i2374.m_Min = i2375[0]
  i2374.m_Max = i2375[1]
  i2374.m_Bounciness = i2375[2]
  i2374.m_BounceMinVelocity = i2375[3]
  i2374.m_ContactDistance = i2375[4]
  i2374.minBounce = i2375[5]
  i2374.maxBounce = i2375[6]
  return i2374
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2376 = root || request.c( 'UnityEngine.JointDrive' )
  var i2377 = data
  i2376.m_PositionSpring = i2377[0]
  i2376.m_PositionDamper = i2377[1]
  i2376.m_MaximumForce = i2377[2]
  i2376.m_UseAcceleration = i2377[3]
  return i2376
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2378 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2379 = data
  i2378.m_Spring = i2379[0]
  i2378.m_Damper = i2379[1]
  return i2378
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2380 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2381 = data
  i2380.m_Limit = i2381[0]
  i2380.m_Bounciness = i2381[1]
  i2380.m_ContactDistance = i2381[2]
  return i2380
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2382 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2383 = data
  i2382.m_ExtremumSlip = i2383[0]
  i2382.m_ExtremumValue = i2383[1]
  i2382.m_AsymptoteSlip = i2383[2]
  i2382.m_AsymptoteValue = i2383[3]
  i2382.m_Stiffness = i2383[4]
  return i2382
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2384 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2385 = data
  i2384.m_LowerAngle = i2385[0]
  i2384.m_UpperAngle = i2385[1]
  return i2384
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2386 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2387 = data
  i2386.m_MotorSpeed = i2387[0]
  i2386.m_MaximumMotorTorque = i2387[1]
  return i2386
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2388 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2389 = data
  i2388.m_DampingRatio = i2389[0]
  i2388.m_Frequency = i2389[1]
  i2388.m_Angle = i2389[2]
  return i2388
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2390 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2391 = data
  i2390.m_LowerTranslation = i2391[0]
  i2390.m_UpperTranslation = i2391[1]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2393 = data
  i2392.name = i2393[0]
  i2392.width = i2393[1]
  i2392.height = i2393[2]
  i2392.mipmapCount = i2393[3]
  i2392.anisoLevel = i2393[4]
  i2392.filterMode = i2393[5]
  i2392.hdr = !!i2393[6]
  i2392.format = i2393[7]
  i2392.wrapMode = i2393[8]
  i2392.alphaIsTransparency = !!i2393[9]
  i2392.alphaSource = i2393[10]
  i2392.graphicsFormat = i2393[11]
  i2392.sRGBTexture = !!i2393[12]
  i2392.desiredColorSpace = i2393[13]
  i2392.wrapU = i2393[14]
  i2392.wrapV = i2393[15]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2394 = root || new pc.UnityMaterial()
  var i2395 = data
  i2394.name = i2395[0]
  request.r(i2395[1], i2395[2], 0, i2394, 'shader')
  i2394.renderQueue = i2395[3]
  i2394.enableInstancing = !!i2395[4]
  var i2397 = i2395[5]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2397[i + 0]) );
  }
  i2394.floatParameters = i2396
  var i2399 = i2395[6]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2399[i + 0]) );
  }
  i2394.colorParameters = i2398
  var i2401 = i2395[7]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2401[i + 0]) );
  }
  i2394.vectorParameters = i2400
  var i2403 = i2395[8]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2403[i + 0]) );
  }
  i2394.textureParameters = i2402
  var i2405 = i2395[9]
  var i2404 = []
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2405[i + 0]) );
  }
  i2394.materialFlags = i2404
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2409 = data
  i2408.name = i2409[0]
  i2408.value = i2409[1]
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2413 = data
  i2412.name = i2413[0]
  i2412.value = new pc.Color(i2413[1], i2413[2], i2413[3], i2413[4])
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2417 = data
  i2416.name = i2417[0]
  i2416.value = new pc.Vec4( i2417[1], i2417[2], i2417[3], i2417[4] )
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2421 = data
  i2420.name = i2421[0]
  request.r(i2421[1], i2421[2], 0, i2420, 'value')
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2425 = data
  i2424.name = i2425[0]
  i2424.enabled = !!i2425[1]
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2427 = data
  i2426.name = i2427[0]
  i2426.index = i2427[1]
  i2426.startup = !!i2427[2]
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2429 = data
  i2428.position = new pc.Vec3( i2429[0], i2429[1], i2429[2] )
  i2428.scale = new pc.Vec3( i2429[3], i2429[4], i2429[5] )
  i2428.rotation = new pc.Quat(i2429[6], i2429[7], i2429[8], i2429[9])
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2431 = data
  i2430.aspect = i2431[0]
  i2430.orthographic = !!i2431[1]
  i2430.orthographicSize = i2431[2]
  i2430.backgroundColor = new pc.Color(i2431[3], i2431[4], i2431[5], i2431[6])
  i2430.nearClipPlane = i2431[7]
  i2430.farClipPlane = i2431[8]
  i2430.fieldOfView = i2431[9]
  i2430.depth = i2431[10]
  i2430.clearFlags = i2431[11]
  i2430.cullingMask = i2431[12]
  i2430.rect = i2431[13]
  request.r(i2431[14], i2431[15], 0, i2430, 'targetTexture')
  i2430.usePhysicalProperties = !!i2431[16]
  i2430.focalLength = i2431[17]
  i2430.sensorSize = new pc.Vec2( i2431[18], i2431[19] )
  i2430.lensShift = new pc.Vec2( i2431[20], i2431[21] )
  i2430.gateFit = i2431[22]
  i2430.commandBufferCount = i2431[23]
  i2430.cameraType = i2431[24]
  i2430.enabled = !!i2431[25]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2433 = data
  i2432.name = i2433[0]
  i2432.tagId = i2433[1]
  i2432.enabled = !!i2433[2]
  i2432.isStatic = !!i2433[3]
  i2432.layer = i2433[4]
  return i2432
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2434 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'm_FirstSelected')
  i2434.m_sendNavigationEvents = !!i2435[2]
  i2434.m_DragThreshold = i2435[3]
  return i2434
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2436 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2437 = data
  i2436.m_HorizontalAxis = i2437[0]
  i2436.m_VerticalAxis = i2437[1]
  i2436.m_SubmitButton = i2437[2]
  i2436.m_CancelButton = i2437[3]
  i2436.m_InputActionsPerSecond = i2437[4]
  i2436.m_RepeatDelay = i2437[5]
  i2436.m_ForceModuleActive = !!i2437[6]
  i2436.m_SendPointerHoverToParent = !!i2437[7]
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2439 = data
  i2438.pivot = new pc.Vec2( i2439[0], i2439[1] )
  i2438.anchorMin = new pc.Vec2( i2439[2], i2439[3] )
  i2438.anchorMax = new pc.Vec2( i2439[4], i2439[5] )
  i2438.sizeDelta = new pc.Vec2( i2439[6], i2439[7] )
  i2438.anchoredPosition3D = new pc.Vec3( i2439[8], i2439[9], i2439[10] )
  i2438.rotation = new pc.Quat(i2439[11], i2439[12], i2439[13], i2439[14])
  i2438.scale = new pc.Vec3( i2439[15], i2439[16], i2439[17] )
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2441 = data
  i2440.planeDistance = i2441[0]
  i2440.referencePixelsPerUnit = i2441[1]
  i2440.isFallbackOverlay = !!i2441[2]
  i2440.renderMode = i2441[3]
  i2440.renderOrder = i2441[4]
  i2440.sortingLayerName = i2441[5]
  i2440.sortingOrder = i2441[6]
  i2440.scaleFactor = i2441[7]
  request.r(i2441[8], i2441[9], 0, i2440, 'worldCamera')
  i2440.overrideSorting = !!i2441[10]
  i2440.pixelPerfect = !!i2441[11]
  i2440.targetDisplay = i2441[12]
  i2440.overridePixelPerfect = !!i2441[13]
  i2440.enabled = !!i2441[14]
  return i2440
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2442 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2443 = data
  i2442.m_UiScaleMode = i2443[0]
  i2442.m_ReferencePixelsPerUnit = i2443[1]
  i2442.m_ScaleFactor = i2443[2]
  i2442.m_ReferenceResolution = new pc.Vec2( i2443[3], i2443[4] )
  i2442.m_ScreenMatchMode = i2443[5]
  i2442.m_MatchWidthOrHeight = i2443[6]
  i2442.m_PhysicalUnit = i2443[7]
  i2442.m_FallbackScreenDPI = i2443[8]
  i2442.m_DefaultSpriteDPI = i2443[9]
  i2442.m_DynamicPixelsPerUnit = i2443[10]
  i2442.m_PresetInfoIsWorld = !!i2443[11]
  return i2442
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2444 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2445 = data
  i2444.m_IgnoreReversedGraphics = !!i2445[0]
  i2444.m_BlockingObjects = i2445[1]
  i2444.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2445[2] )
  return i2444
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i2446 = root || request.c( 'LunaManager' )
  var i2447 = data
  var i2449 = i2447[0]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 2) {
  request.r(i2449[i + 0], i2449[i + 1], 2, i2448, '')
  }
  i2446.lstBtnInstall = i2448
  request.r(i2447[1], i2447[2], 0, i2446, 'WinGO')
  request.r(i2447[3], i2447[4], 0, i2446, 'LoseGO')
  request.r(i2447[5], i2447[6], 0, i2446, 'StartCard')
  request.r(i2447[7], i2447[8], 0, i2446, 'EndCard')
  request.r(i2447[9], i2447[10], 0, i2446, 'Parent')
  i2446.isDrag = !!i2447[11]
  i2446.timeDrag = i2447[12]
  i2446.countPlay = i2447[13]
  i2446.countPlayFinal = i2447[14]
  i2446.countPlayMax = i2447[15]
  i2446.timeDropFinal = i2447[16]
  i2446.colorBG = new pc.Color(i2447[17], i2447[18], i2447[19], i2447[20])
  request.r(i2447[21], i2447[22], 0, i2446, 'texture2D')
  request.r(i2447[23], i2447[24], 0, i2446, 'rawImageBG')
  request.r(i2447[25], i2447[26], 0, i2446, 'MSSGirl')
  request.r(i2447[27], i2447[28], 0, i2446, 'MSSBoy')
  request.r(i2447[29], i2447[30], 0, i2446, 'MSSGroom')
  request.r(i2447[31], i2447[32], 0, i2446, 'MSSBride')
  request.r(i2447[33], i2447[34], 0, i2446, 'textProgess')
  request.r(i2447[35], i2447[36], 0, i2446, 'imgProgess')
  request.r(i2447[37], i2447[38], 0, i2446, 'timeText')
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2453 = data
  i2452.cullTransparentMesh = !!i2453[0]
  return i2452
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2454 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2455 = data
  request.r(i2455[0], i2455[1], 0, i2454, 'm_Texture')
  i2454.m_UVRect = UnityEngine.Rect.MinMaxRect(i2455[2], i2455[3], i2455[4], i2455[5])
  i2454.m_Maskable = !!i2455[6]
  request.r(i2455[7], i2455[8], 0, i2454, 'm_Material')
  i2454.m_Color = new pc.Color(i2455[9], i2455[10], i2455[11], i2455[12])
  i2454.m_RaycastTarget = !!i2455[13]
  i2454.m_RaycastPadding = new pc.Vec4( i2455[14], i2455[15], i2455[16], i2455[17] )
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2457 = data
  request.r(i2457[0], i2457[1], 0, i2456, 'clip')
  request.r(i2457[2], i2457[3], 0, i2456, 'outputAudioMixerGroup')
  i2456.playOnAwake = !!i2457[4]
  i2456.loop = !!i2457[5]
  i2456.time = i2457[6]
  i2456.volume = i2457[7]
  i2456.pitch = i2457[8]
  i2456.enabled = !!i2457[9]
  return i2456
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2458 = root || request.c( 'UnityEngine.UI.Image' )
  var i2459 = data
  request.r(i2459[0], i2459[1], 0, i2458, 'm_Sprite')
  i2458.m_Type = i2459[2]
  i2458.m_PreserveAspect = !!i2459[3]
  i2458.m_FillCenter = !!i2459[4]
  i2458.m_FillMethod = i2459[5]
  i2458.m_FillAmount = i2459[6]
  i2458.m_FillClockwise = !!i2459[7]
  i2458.m_FillOrigin = i2459[8]
  i2458.m_UseSpriteMesh = !!i2459[9]
  i2458.m_PixelsPerUnitMultiplier = i2459[10]
  i2458.m_Maskable = !!i2459[11]
  request.r(i2459[12], i2459[13], 0, i2458, 'm_Material')
  i2458.m_Color = new pc.Color(i2459[14], i2459[15], i2459[16], i2459[17])
  i2458.m_RaycastTarget = !!i2459[18]
  i2458.m_RaycastPadding = new pc.Vec4( i2459[19], i2459[20], i2459[21], i2459[22] )
  return i2458
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2460 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2461 = data
  request.r(i2461[0], i2461[1], 0, i2460, 'skeletonDataAsset')
  request.r(i2461[2], i2461[3], 0, i2460, 'additiveMaterial')
  request.r(i2461[4], i2461[5], 0, i2460, 'multiplyMaterial')
  request.r(i2461[6], i2461[7], 0, i2460, 'screenMaterial')
  i2460.initialSkinName = i2461[8]
  i2460.initialFlipX = !!i2461[9]
  i2460.initialFlipY = !!i2461[10]
  i2460.startingAnimation = i2461[11]
  i2460.startingLoop = !!i2461[12]
  i2460.timeScale = i2461[13]
  i2460.freeze = !!i2461[14]
  i2460.layoutScaleMode = i2461[15]
  i2460.updateWhenInvisible = i2461[16]
  i2460.allowMultipleCanvasRenderers = !!i2461[17]
  var i2463 = i2461[18]
  var i2462 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2463.length; i += 2) {
  request.r(i2463[i + 0], i2463[i + 1], 1, i2462, '')
  }
  i2460.canvasRenderers = i2462
  i2460.enableSeparatorSlots = !!i2461[19]
  i2460.updateSeparatorPartLocation = !!i2461[20]
  i2460.updateSeparatorPartScale = !!i2461[21]
  i2460.disableMeshAssignmentOnOverride = !!i2461[22]
  i2460.referenceSize = new pc.Vec2( i2461[23], i2461[24] )
  i2460.referenceScale = i2461[25]
  i2460.rectTransformSize = new pc.Vec2( i2461[26], i2461[27] )
  i2460.editReferenceRect = !!i2461[28]
  var i2465 = i2461[29]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( i2465[i + 0] );
  }
  i2460.separatorSlotNames = i2464
  var i2467 = i2461[30]
  var i2466 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2467.length; i += 2) {
  request.r(i2467[i + 0], i2467[i + 1], 1, i2466, '')
  }
  i2460.separatorParts = i2466
  i2460.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2461[31], i2460.meshGenerator)
  i2460.updateTiming = i2461[32]
  i2460.unscaledTime = !!i2461[33]
  i2460.m_Maskable = !!i2461[34]
  request.r(i2461[35], i2461[36], 0, i2460, 'm_Material')
  i2460.m_Color = new pc.Color(i2461[37], i2461[38], i2461[39], i2461[40])
  i2460.m_RaycastTarget = !!i2461[41]
  i2460.m_RaycastPadding = new pc.Vec4( i2461[42], i2461[43], i2461[44], i2461[45] )
  return i2460
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2474 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2475 = data
  i2474.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2475[0], i2474.settings)
  return i2474
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2476 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2477 = data
  i2476.useClipping = !!i2477[0]
  i2476.zSpacing = i2477[1]
  i2476.pmaVertexColors = !!i2477[2]
  i2476.tintBlack = !!i2477[3]
  i2476.canvasGroupTintBlack = !!i2477[4]
  i2476.calculateTangents = !!i2477[5]
  i2476.addNormals = !!i2477[6]
  i2476.immutableTriangles = !!i2477[7]
  return i2476
}

Deserializers["DropZone"] = function (request, data, root) {
  var i2478 = root || request.c( 'DropZone' )
  var i2479 = data
  i2478.idDrop = i2479[0]
  var i2481 = i2479[1]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 2) {
  request.r(i2481[i + 0], i2481[i + 1], 2, i2480, '')
  }
  i2478.steps = i2480
  request.r(i2479[2], i2479[3], 0, i2478, 'stepLose')
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2485 = data
  i2484.usedByComposite = !!i2485[0]
  i2484.autoTiling = !!i2485[1]
  var i2487 = i2485[2]
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
  i2484.enabled = !!i2485[3]
  i2484.isTrigger = !!i2485[4]
  i2484.usedByEffector = !!i2485[5]
  i2484.density = i2485[6]
  i2484.offset = new pc.Vec2( i2485[7], i2485[8] )
  request.r(i2485[9], i2485[10], 0, i2484, 'material')
  return i2484
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i2496 = root || request.c( 'ClickItem' )
  var i2497 = data
  var i2499 = i2497[0]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 2) {
  request.r(i2499[i + 0], i2499[i + 1], 2, i2498, '')
  }
  i2496.steps = i2498
  i2496.currentStep = i2497[1]
  i2496.isProcess = !!i2497[2]
  return i2496
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2500 = root || request.c( 'UnityEngine.UI.Button' )
  var i2501 = data
  i2500.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2501[0], i2500.m_OnClick)
  i2500.m_Navigation = request.d('UnityEngine.UI.Navigation', i2501[1], i2500.m_Navigation)
  i2500.m_Transition = i2501[2]
  i2500.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2501[3], i2500.m_Colors)
  i2500.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2501[4], i2500.m_SpriteState)
  i2500.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2501[5], i2500.m_AnimationTriggers)
  i2500.m_Interactable = !!i2501[6]
  request.r(i2501[7], i2501[8], 0, i2500, 'm_TargetGraphic')
  return i2500
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2502 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2503 = data
  i2502.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2503[0], i2502.m_PersistentCalls)
  return i2502
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2504 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2505 = data
  var i2507 = i2505[0]
  var i2506 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.add(request.d('UnityEngine.Events.PersistentCall', i2507[i + 0]));
  }
  i2504.m_Calls = i2506
  return i2504
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2510 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2511 = data
  request.r(i2511[0], i2511[1], 0, i2510, 'm_Target')
  i2510.m_TargetAssemblyTypeName = i2511[2]
  i2510.m_MethodName = i2511[3]
  i2510.m_Mode = i2511[4]
  i2510.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2511[5], i2510.m_Arguments)
  i2510.m_CallState = i2511[6]
  return i2510
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2512 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2513 = data
  i2512.m_Mode = i2513[0]
  i2512.m_WrapAround = !!i2513[1]
  request.r(i2513[2], i2513[3], 0, i2512, 'm_SelectOnUp')
  request.r(i2513[4], i2513[5], 0, i2512, 'm_SelectOnDown')
  request.r(i2513[6], i2513[7], 0, i2512, 'm_SelectOnLeft')
  request.r(i2513[8], i2513[9], 0, i2512, 'm_SelectOnRight')
  return i2512
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2514 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2515 = data
  i2514.m_NormalColor = new pc.Color(i2515[0], i2515[1], i2515[2], i2515[3])
  i2514.m_HighlightedColor = new pc.Color(i2515[4], i2515[5], i2515[6], i2515[7])
  i2514.m_PressedColor = new pc.Color(i2515[8], i2515[9], i2515[10], i2515[11])
  i2514.m_SelectedColor = new pc.Color(i2515[12], i2515[13], i2515[14], i2515[15])
  i2514.m_DisabledColor = new pc.Color(i2515[16], i2515[17], i2515[18], i2515[19])
  i2514.m_ColorMultiplier = i2515[20]
  i2514.m_FadeDuration = i2515[21]
  return i2514
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2516 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2517 = data
  request.r(i2517[0], i2517[1], 0, i2516, 'm_HighlightedSprite')
  request.r(i2517[2], i2517[3], 0, i2516, 'm_PressedSprite')
  request.r(i2517[4], i2517[5], 0, i2516, 'm_SelectedSprite')
  request.r(i2517[6], i2517[7], 0, i2516, 'm_DisabledSprite')
  return i2516
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2518 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2519 = data
  i2518.m_NormalTrigger = i2519[0]
  i2518.m_HighlightedTrigger = i2519[1]
  i2518.m_PressedTrigger = i2519[2]
  i2518.m_SelectedTrigger = i2519[3]
  i2518.m_DisabledTrigger = i2519[4]
  return i2518
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2520 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2521 = data
  i2520.targetIsSelf = !!i2521[0]
  request.r(i2521[1], i2521[2], 0, i2520, 'targetGO')
  i2520.tweenTargetIsTargetGO = !!i2521[3]
  i2520.delay = i2521[4]
  i2520.duration = i2521[5]
  i2520.easeType = i2521[6]
  i2520.easeCurve = new pc.AnimationCurve( { keys_flow: i2521[7] } )
  i2520.loopType = i2521[8]
  i2520.loops = i2521[9]
  i2520.id = i2521[10]
  i2520.isRelative = !!i2521[11]
  i2520.isFrom = !!i2521[12]
  i2520.isIndependentUpdate = !!i2521[13]
  i2520.autoKill = !!i2521[14]
  i2520.autoGenerate = !!i2521[15]
  i2520.isActive = !!i2521[16]
  i2520.isValid = !!i2521[17]
  request.r(i2521[18], i2521[19], 0, i2520, 'target')
  i2520.animationType = i2521[20]
  i2520.targetType = i2521[21]
  i2520.forcedTargetType = i2521[22]
  i2520.autoPlay = !!i2521[23]
  i2520.useTargetAsV3 = !!i2521[24]
  i2520.endValueFloat = i2521[25]
  i2520.endValueV3 = new pc.Vec3( i2521[26], i2521[27], i2521[28] )
  i2520.endValueV2 = new pc.Vec2( i2521[29], i2521[30] )
  i2520.endValueColor = new pc.Color(i2521[31], i2521[32], i2521[33], i2521[34])
  i2520.endValueString = i2521[35]
  i2520.endValueRect = UnityEngine.Rect.MinMaxRect(i2521[36], i2521[37], i2521[38], i2521[39])
  request.r(i2521[40], i2521[41], 0, i2520, 'endValueTransform')
  i2520.optionalBool0 = !!i2521[42]
  i2520.optionalBool1 = !!i2521[43]
  i2520.optionalFloat0 = i2521[44]
  i2520.optionalInt0 = i2521[45]
  i2520.optionalRotationMode = i2521[46]
  i2520.optionalScrambleMode = i2521[47]
  i2520.optionalShakeRandomnessMode = i2521[48]
  i2520.optionalString = i2521[49]
  i2520.updateType = i2521[50]
  i2520.isSpeedBased = !!i2521[51]
  i2520.hasOnStart = !!i2521[52]
  i2520.hasOnPlay = !!i2521[53]
  i2520.hasOnUpdate = !!i2521[54]
  i2520.hasOnStepComplete = !!i2521[55]
  i2520.hasOnComplete = !!i2521[56]
  i2520.hasOnTweenCreated = !!i2521[57]
  i2520.hasOnRewind = !!i2521[58]
  i2520.onStart = request.d('UnityEngine.Events.UnityEvent', i2521[59], i2520.onStart)
  i2520.onPlay = request.d('UnityEngine.Events.UnityEvent', i2521[60], i2520.onPlay)
  i2520.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2521[61], i2520.onUpdate)
  i2520.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2521[62], i2520.onStepComplete)
  i2520.onComplete = request.d('UnityEngine.Events.UnityEvent', i2521[63], i2520.onComplete)
  i2520.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2521[64], i2520.onTweenCreated)
  i2520.onRewind = request.d('UnityEngine.Events.UnityEvent', i2521[65], i2520.onRewind)
  return i2520
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2522 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2523 = data
  i2522.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2523[0], i2522.m_PersistentCalls)
  return i2522
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2524 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2525 = data
  request.r(i2525[0], i2525[1], 0, i2524, 'm_ObjectArgument')
  i2524.m_ObjectArgumentAssemblyTypeName = i2525[2]
  i2524.m_IntArgument = i2525[3]
  i2524.m_FloatArgument = i2525[4]
  i2524.m_StringArgument = i2525[5]
  i2524.m_BoolArgument = !!i2525[6]
  return i2524
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i2526 = root || request.c( 'DraggableItem' )
  var i2527 = data
  i2526.idDrag = i2527[0]
  i2526.isProcess = !!i2527[1]
  i2526.isLose = !!i2527[2]
  i2526.isHide = !!i2527[3]
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2529 = data
  i2528.m_Alpha = i2529[0]
  i2528.m_Interactable = !!i2529[1]
  i2528.m_BlocksRaycasts = !!i2529[2]
  i2528.m_IgnoreParentGroups = !!i2529[3]
  i2528.enabled = !!i2529[4]
  return i2528
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2530 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2531 = data
  i2530.m_hasFontAssetChanged = !!i2531[0]
  request.r(i2531[1], i2531[2], 0, i2530, 'm_baseMaterial')
  i2530.m_maskOffset = new pc.Vec4( i2531[3], i2531[4], i2531[5], i2531[6] )
  i2530.m_text = i2531[7]
  i2530.m_isRightToLeft = !!i2531[8]
  request.r(i2531[9], i2531[10], 0, i2530, 'm_fontAsset')
  request.r(i2531[11], i2531[12], 0, i2530, 'm_sharedMaterial')
  var i2533 = i2531[13]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 2) {
  request.r(i2533[i + 0], i2533[i + 1], 2, i2532, '')
  }
  i2530.m_fontSharedMaterials = i2532
  request.r(i2531[14], i2531[15], 0, i2530, 'm_fontMaterial')
  var i2535 = i2531[16]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 2) {
  request.r(i2535[i + 0], i2535[i + 1], 2, i2534, '')
  }
  i2530.m_fontMaterials = i2534
  i2530.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2531[17], i2531[18], i2531[19], i2531[20])
  i2530.m_fontColor = new pc.Color(i2531[21], i2531[22], i2531[23], i2531[24])
  i2530.m_enableVertexGradient = !!i2531[25]
  i2530.m_colorMode = i2531[26]
  i2530.m_fontColorGradient = request.d('TMPro.VertexGradient', i2531[27], i2530.m_fontColorGradient)
  request.r(i2531[28], i2531[29], 0, i2530, 'm_fontColorGradientPreset')
  request.r(i2531[30], i2531[31], 0, i2530, 'm_spriteAsset')
  i2530.m_tintAllSprites = !!i2531[32]
  request.r(i2531[33], i2531[34], 0, i2530, 'm_StyleSheet')
  i2530.m_TextStyleHashCode = i2531[35]
  i2530.m_overrideHtmlColors = !!i2531[36]
  i2530.m_faceColor = UnityEngine.Color32.ConstructColor(i2531[37], i2531[38], i2531[39], i2531[40])
  i2530.m_fontSize = i2531[41]
  i2530.m_fontSizeBase = i2531[42]
  i2530.m_fontWeight = i2531[43]
  i2530.m_enableAutoSizing = !!i2531[44]
  i2530.m_fontSizeMin = i2531[45]
  i2530.m_fontSizeMax = i2531[46]
  i2530.m_fontStyle = i2531[47]
  i2530.m_HorizontalAlignment = i2531[48]
  i2530.m_VerticalAlignment = i2531[49]
  i2530.m_textAlignment = i2531[50]
  i2530.m_characterSpacing = i2531[51]
  i2530.m_wordSpacing = i2531[52]
  i2530.m_lineSpacing = i2531[53]
  i2530.m_lineSpacingMax = i2531[54]
  i2530.m_paragraphSpacing = i2531[55]
  i2530.m_charWidthMaxAdj = i2531[56]
  i2530.m_enableWordWrapping = !!i2531[57]
  i2530.m_wordWrappingRatios = i2531[58]
  i2530.m_overflowMode = i2531[59]
  request.r(i2531[60], i2531[61], 0, i2530, 'm_linkedTextComponent')
  request.r(i2531[62], i2531[63], 0, i2530, 'parentLinkedComponent')
  i2530.m_enableKerning = !!i2531[64]
  i2530.m_enableExtraPadding = !!i2531[65]
  i2530.checkPaddingRequired = !!i2531[66]
  i2530.m_isRichText = !!i2531[67]
  i2530.m_parseCtrlCharacters = !!i2531[68]
  i2530.m_isOrthographic = !!i2531[69]
  i2530.m_isCullingEnabled = !!i2531[70]
  i2530.m_horizontalMapping = i2531[71]
  i2530.m_verticalMapping = i2531[72]
  i2530.m_uvLineOffset = i2531[73]
  i2530.m_geometrySortingOrder = i2531[74]
  i2530.m_IsTextObjectScaleStatic = !!i2531[75]
  i2530.m_VertexBufferAutoSizeReduction = !!i2531[76]
  i2530.m_useMaxVisibleDescender = !!i2531[77]
  i2530.m_pageToDisplay = i2531[78]
  i2530.m_margin = new pc.Vec4( i2531[79], i2531[80], i2531[81], i2531[82] )
  i2530.m_isUsingLegacyAnimationComponent = !!i2531[83]
  i2530.m_isVolumetricText = !!i2531[84]
  i2530.m_Maskable = !!i2531[85]
  request.r(i2531[86], i2531[87], 0, i2530, 'm_Material')
  i2530.m_Color = new pc.Color(i2531[88], i2531[89], i2531[90], i2531[91])
  i2530.m_RaycastTarget = !!i2531[92]
  i2530.m_RaycastPadding = new pc.Vec4( i2531[93], i2531[94], i2531[95], i2531[96] )
  return i2530
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2538 = root || request.c( 'TMPro.VertexGradient' )
  var i2539 = data
  i2538.topLeft = new pc.Color(i2539[0], i2539[1], i2539[2], i2539[3])
  i2538.topRight = new pc.Color(i2539[4], i2539[5], i2539[6], i2539[7])
  i2538.bottomLeft = new pc.Color(i2539[8], i2539[9], i2539[10], i2539[11])
  i2538.bottomRight = new pc.Color(i2539[12], i2539[13], i2539[14], i2539[15])
  return i2538
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2540 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2541 = data
  i2540.m_ShowMaskGraphic = !!i2541[0]
  return i2540
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2542 = root || request.c( 'AudioController' )
  var i2543 = data
  request.r(i2543[0], i2543[1], 0, i2542, 'bgmSource')
  request.r(i2543[2], i2543[3], 0, i2542, 'sfxSource')
  var i2545 = i2543[4]
  var i2544 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.add(request.d('AudioEntry', i2545[i + 0]));
  }
  i2542.audioEntries = i2544
  return i2542
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i2548 = root || request.c( 'AudioEntry' )
  var i2549 = data
  i2548.key = i2549[0]
  request.r(i2549[1], i2549[2], 0, i2548, 'clip')
  i2548.volume = i2549[3]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2551 = data
  i2550.ambientIntensity = i2551[0]
  i2550.reflectionIntensity = i2551[1]
  i2550.ambientMode = i2551[2]
  i2550.ambientLight = new pc.Color(i2551[3], i2551[4], i2551[5], i2551[6])
  i2550.ambientSkyColor = new pc.Color(i2551[7], i2551[8], i2551[9], i2551[10])
  i2550.ambientGroundColor = new pc.Color(i2551[11], i2551[12], i2551[13], i2551[14])
  i2550.ambientEquatorColor = new pc.Color(i2551[15], i2551[16], i2551[17], i2551[18])
  i2550.fogColor = new pc.Color(i2551[19], i2551[20], i2551[21], i2551[22])
  i2550.fogEndDistance = i2551[23]
  i2550.fogStartDistance = i2551[24]
  i2550.fogDensity = i2551[25]
  i2550.fog = !!i2551[26]
  request.r(i2551[27], i2551[28], 0, i2550, 'skybox')
  i2550.fogMode = i2551[29]
  var i2553 = i2551[30]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2553[i + 0]) );
  }
  i2550.lightmaps = i2552
  i2550.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2551[31], i2550.lightProbes)
  i2550.lightmapsMode = i2551[32]
  i2550.mixedBakeMode = i2551[33]
  i2550.environmentLightingMode = i2551[34]
  i2550.ambientProbe = new pc.SphericalHarmonicsL2(i2551[35])
  i2550.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2551[36])
  i2550.useReferenceAmbientProbe = !!i2551[37]
  request.r(i2551[38], i2551[39], 0, i2550, 'customReflection')
  request.r(i2551[40], i2551[41], 0, i2550, 'defaultReflection')
  i2550.defaultReflectionMode = i2551[42]
  i2550.defaultReflectionResolution = i2551[43]
  i2550.sunLightObjectId = i2551[44]
  i2550.pixelLightCount = i2551[45]
  i2550.defaultReflectionHDR = !!i2551[46]
  i2550.hasLightDataAsset = !!i2551[47]
  i2550.hasManualGenerate = !!i2551[48]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2557 = data
  request.r(i2557[0], i2557[1], 0, i2556, 'lightmapColor')
  request.r(i2557[2], i2557[3], 0, i2556, 'lightmapDirection')
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2558 = root || new UnityEngine.LightProbes()
  var i2559 = data
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2567 = data
  var i2569 = i2567[0]
  var i2568 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2569[i + 0]));
  }
  i2566.ShaderCompilationErrors = i2568
  i2566.name = i2567[1]
  i2566.guid = i2567[2]
  var i2571 = i2567[3]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( i2571[i + 0] );
  }
  i2566.shaderDefinedKeywords = i2570
  var i2573 = i2567[4]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2573[i + 0]) );
  }
  i2566.passes = i2572
  var i2575 = i2567[5]
  var i2574 = []
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2575[i + 0]) );
  }
  i2566.usePasses = i2574
  var i2577 = i2567[6]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 1) {
    i2576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2577[i + 0]) );
  }
  i2566.defaultParameterValues = i2576
  request.r(i2567[7], i2567[8], 0, i2566, 'unityFallbackShader')
  i2566.readDepth = !!i2567[9]
  i2566.isCreatedByShaderGraph = !!i2567[10]
  i2566.disableBatching = !!i2567[11]
  i2566.compiled = !!i2567[12]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2581 = data
  i2580.shaderName = i2581[0]
  i2580.errorMessage = i2581[1]
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2584 = root || new pc.UnityShaderPass()
  var i2585 = data
  i2584.id = i2585[0]
  i2584.subShaderIndex = i2585[1]
  i2584.name = i2585[2]
  i2584.passType = i2585[3]
  i2584.grabPassTextureName = i2585[4]
  i2584.usePass = !!i2585[5]
  i2584.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2585[6], i2584.zTest)
  i2584.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2585[7], i2584.zWrite)
  i2584.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2585[8], i2584.culling)
  i2584.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2585[9], i2584.blending)
  i2584.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2585[10], i2584.alphaBlending)
  i2584.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2585[11], i2584.colorWriteMask)
  i2584.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2585[12], i2584.offsetUnits)
  i2584.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2585[13], i2584.offsetFactor)
  i2584.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2585[14], i2584.stencilRef)
  i2584.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2585[15], i2584.stencilReadMask)
  i2584.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2585[16], i2584.stencilWriteMask)
  i2584.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2585[17], i2584.stencilOp)
  i2584.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2585[18], i2584.stencilOpFront)
  i2584.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2585[19], i2584.stencilOpBack)
  var i2587 = i2585[20]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2587[i + 0]) );
  }
  i2584.tags = i2586
  var i2589 = i2585[21]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( i2589[i + 0] );
  }
  i2584.passDefinedKeywords = i2588
  var i2591 = i2585[22]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2591[i + 0]) );
  }
  i2584.passDefinedKeywordGroups = i2590
  var i2593 = i2585[23]
  var i2592 = []
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2593[i + 0]) );
  }
  i2584.variants = i2592
  var i2595 = i2585[24]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2595[i + 0]) );
  }
  i2584.excludedVariants = i2594
  i2584.hasDepthReader = !!i2585[25]
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2597 = data
  i2596.val = i2597[0]
  i2596.name = i2597[1]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2599 = data
  i2598.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2599[0], i2598.src)
  i2598.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2599[1], i2598.dst)
  i2598.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2599[2], i2598.op)
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2601 = data
  i2600.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2601[0], i2600.pass)
  i2600.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2601[1], i2600.fail)
  i2600.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2601[2], i2600.zFail)
  i2600.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2601[3], i2600.comp)
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2605 = data
  i2604.name = i2605[0]
  i2604.value = i2605[1]
  return i2604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2609 = data
  var i2611 = i2609[0]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( i2611[i + 0] );
  }
  i2608.keywords = i2610
  i2608.hasDiscard = !!i2609[1]
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2615 = data
  i2614.passId = i2615[0]
  i2614.subShaderIndex = i2615[1]
  var i2617 = i2615[2]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( i2617[i + 0] );
  }
  i2614.keywords = i2616
  i2614.vertexProgram = i2615[3]
  i2614.fragmentProgram = i2615[4]
  i2614.exportedForWebGl2 = !!i2615[5]
  i2614.readDepth = !!i2615[6]
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2621 = data
  request.r(i2621[0], i2621[1], 0, i2620, 'shader')
  i2620.pass = i2621[2]
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2625 = data
  i2624.name = i2625[0]
  i2624.type = i2625[1]
  i2624.value = new pc.Vec4( i2625[2], i2625[3], i2625[4], i2625[5] )
  i2624.textureValue = i2625[6]
  i2624.shaderPropertyFlag = i2625[7]
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2627 = data
  i2626.name = i2627[0]
  request.r(i2627[1], i2627[2], 0, i2626, 'texture')
  i2626.aabb = i2627[3]
  i2626.vertices = i2627[4]
  i2626.triangles = i2627[5]
  i2626.textureRect = UnityEngine.Rect.MinMaxRect(i2627[6], i2627[7], i2627[8], i2627[9])
  i2626.packedRect = UnityEngine.Rect.MinMaxRect(i2627[10], i2627[11], i2627[12], i2627[13])
  i2626.border = new pc.Vec4( i2627[14], i2627[15], i2627[16], i2627[17] )
  i2626.transparency = i2627[18]
  i2626.bounds = i2627[19]
  i2626.pixelsPerUnit = i2627[20]
  i2626.textureWidth = i2627[21]
  i2626.textureHeight = i2627[22]
  i2626.nativeSize = new pc.Vec2( i2627[23], i2627[24] )
  i2626.pivot = new pc.Vec2( i2627[25], i2627[26] )
  i2626.textureRectOffset = new pc.Vec2( i2627[27], i2627[28] )
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2629 = data
  i2628.name = i2629[0]
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2631 = data
  i2630.name = i2631[0]
  i2630.ascent = i2631[1]
  i2630.originalLineHeight = i2631[2]
  i2630.fontSize = i2631[3]
  var i2633 = i2631[4]
  var i2632 = []
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2633[i + 0]) );
  }
  i2630.characterInfo = i2632
  request.r(i2631[5], i2631[6], 0, i2630, 'texture')
  i2630.originalFontSize = i2631[7]
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2637 = data
  i2636.index = i2637[0]
  i2636.advance = i2637[1]
  i2636.bearing = i2637[2]
  i2636.glyphWidth = i2637[3]
  i2636.glyphHeight = i2637[4]
  i2636.minX = i2637[5]
  i2636.maxX = i2637[6]
  i2636.minY = i2637[7]
  i2636.maxY = i2637[8]
  i2636.uvBottomLeftX = i2637[9]
  i2636.uvBottomLeftY = i2637[10]
  i2636.uvBottomRightX = i2637[11]
  i2636.uvBottomRightY = i2637[12]
  i2636.uvTopLeftX = i2637[13]
  i2636.uvTopLeftY = i2637[14]
  i2636.uvTopRightX = i2637[15]
  i2636.uvTopRightY = i2637[16]
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2639 = data
  i2638.name = i2639[0]
  i2638.bytes64 = i2639[1]
  i2638.data = i2639[2]
  return i2638
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2640 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2641 = data
  var i2643 = i2641[0]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 2) {
  request.r(i2643[i + 0], i2643[i + 1], 2, i2642, '')
  }
  i2640.atlasAssets = i2642
  i2640.scale = i2641[1]
  request.r(i2641[2], i2641[3], 0, i2640, 'skeletonJSON')
  i2640.isUpgradingBlendModeMaterials = !!i2641[4]
  i2640.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2641[5], i2640.blendModeMaterials)
  var i2645 = i2641[6]
  var i2644 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2645.length; i += 2) {
  request.r(i2645[i + 0], i2645[i + 1], 1, i2644, '')
  }
  i2640.skeletonDataModifiers = i2644
  var i2647 = i2641[7]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.push( i2647[i + 0] );
  }
  i2640.fromAnimation = i2646
  var i2649 = i2641[8]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.push( i2649[i + 0] );
  }
  i2640.toAnimation = i2648
  i2640.duration = i2641[9]
  i2640.defaultMix = i2641[10]
  request.r(i2641[11], i2641[12], 0, i2640, 'controller')
  return i2640
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2652 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2653 = data
  i2652.applyAdditiveMaterial = !!i2653[0]
  var i2655 = i2653[1]
  var i2654 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2655[i + 0]));
  }
  i2652.additiveMaterials = i2654
  var i2657 = i2653[2]
  var i2656 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2657.length; i += 1) {
    i2656.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2657[i + 0]));
  }
  i2652.multiplyMaterials = i2656
  var i2659 = i2653[3]
  var i2658 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2659[i + 0]));
  }
  i2652.screenMaterials = i2658
  i2652.requiresBlendModeMaterials = !!i2653[4]
  return i2652
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2662 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2663 = data
  i2662.pageName = i2663[0]
  request.r(i2663[1], i2663[2], 0, i2662, 'material')
  return i2662
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2666 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2667 = data
  request.r(i2667[0], i2667[1], 0, i2666, 'atlasFile')
  var i2669 = i2667[2]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 2) {
  request.r(i2669[i + 0], i2669[i + 1], 2, i2668, '')
  }
  i2666.materials = i2668
  i2666.textureLoadingMode = i2667[3]
  request.r(i2667[4], i2667[5], 0, i2666, 'onDemandTextureLoader')
  return i2666
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2670 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2671 = data
  request.r(i2671[0], i2671[1], 0, i2670, 'atlas')
  i2670.normalStyle = i2671[2]
  i2670.normalSpacingOffset = i2671[3]
  i2670.boldStyle = i2671[4]
  i2670.boldSpacing = i2671[5]
  i2670.italicStyle = i2671[6]
  i2670.tabSize = i2671[7]
  i2670.hashCode = i2671[8]
  request.r(i2671[9], i2671[10], 0, i2670, 'material')
  i2670.materialHashCode = i2671[11]
  i2670.m_Version = i2671[12]
  i2670.m_SourceFontFileGUID = i2671[13]
  request.r(i2671[14], i2671[15], 0, i2670, 'm_SourceFontFile_EditorRef')
  request.r(i2671[16], i2671[17], 0, i2670, 'm_SourceFontFile')
  i2670.m_AtlasPopulationMode = i2671[18]
  i2670.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2671[19], i2670.m_FaceInfo)
  var i2673 = i2671[20]
  var i2672 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.add(request.d('UnityEngine.TextCore.Glyph', i2673[i + 0]));
  }
  i2670.m_GlyphTable = i2672
  var i2675 = i2671[21]
  var i2674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.add(request.d('TMPro.TMP_Character', i2675[i + 0]));
  }
  i2670.m_CharacterTable = i2674
  var i2677 = i2671[22]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 2) {
  request.r(i2677[i + 0], i2677[i + 1], 2, i2676, '')
  }
  i2670.m_AtlasTextures = i2676
  i2670.m_AtlasTextureIndex = i2671[23]
  i2670.m_IsMultiAtlasTexturesEnabled = !!i2671[24]
  i2670.m_ClearDynamicDataOnBuild = !!i2671[25]
  var i2679 = i2671[26]
  var i2678 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.add(request.d('UnityEngine.TextCore.GlyphRect', i2679[i + 0]));
  }
  i2670.m_UsedGlyphRects = i2678
  var i2681 = i2671[27]
  var i2680 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.add(request.d('UnityEngine.TextCore.GlyphRect', i2681[i + 0]));
  }
  i2670.m_FreeGlyphRects = i2680
  i2670.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2671[28], i2670.m_fontInfo)
  i2670.m_AtlasWidth = i2671[29]
  i2670.m_AtlasHeight = i2671[30]
  i2670.m_AtlasPadding = i2671[31]
  i2670.m_AtlasRenderMode = i2671[32]
  var i2683 = i2671[33]
  var i2682 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.add(request.d('TMPro.TMP_Glyph', i2683[i + 0]));
  }
  i2670.m_glyphInfoList = i2682
  i2670.m_KerningTable = request.d('TMPro.KerningTable', i2671[34], i2670.m_KerningTable)
  i2670.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2671[35], i2670.m_FontFeatureTable)
  var i2685 = i2671[36]
  var i2684 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2685.length; i += 2) {
  request.r(i2685[i + 0], i2685[i + 1], 1, i2684, '')
  }
  i2670.fallbackFontAssets = i2684
  var i2687 = i2671[37]
  var i2686 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2687.length; i += 2) {
  request.r(i2687[i + 0], i2687[i + 1], 1, i2686, '')
  }
  i2670.m_FallbackFontAssetTable = i2686
  i2670.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2671[38], i2670.m_CreationSettings)
  var i2689 = i2671[39]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.push( request.d('TMPro.TMP_FontWeightPair', i2689[i + 0]) );
  }
  i2670.m_FontWeightTable = i2688
  var i2691 = i2671[40]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.push( request.d('TMPro.TMP_FontWeightPair', i2691[i + 0]) );
  }
  i2670.fontWeights = i2690
  return i2670
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2692 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2693 = data
  i2692.m_FaceIndex = i2693[0]
  i2692.m_FamilyName = i2693[1]
  i2692.m_StyleName = i2693[2]
  i2692.m_PointSize = i2693[3]
  i2692.m_Scale = i2693[4]
  i2692.m_UnitsPerEM = i2693[5]
  i2692.m_LineHeight = i2693[6]
  i2692.m_AscentLine = i2693[7]
  i2692.m_CapLine = i2693[8]
  i2692.m_MeanLine = i2693[9]
  i2692.m_Baseline = i2693[10]
  i2692.m_DescentLine = i2693[11]
  i2692.m_SuperscriptOffset = i2693[12]
  i2692.m_SuperscriptSize = i2693[13]
  i2692.m_SubscriptOffset = i2693[14]
  i2692.m_SubscriptSize = i2693[15]
  i2692.m_UnderlineOffset = i2693[16]
  i2692.m_UnderlineThickness = i2693[17]
  i2692.m_StrikethroughOffset = i2693[18]
  i2692.m_StrikethroughThickness = i2693[19]
  i2692.m_TabWidth = i2693[20]
  return i2692
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2696 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2697 = data
  i2696.m_Index = i2697[0]
  i2696.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2697[1], i2696.m_Metrics)
  i2696.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2697[2], i2696.m_GlyphRect)
  i2696.m_Scale = i2697[3]
  i2696.m_AtlasIndex = i2697[4]
  i2696.m_ClassDefinitionType = i2697[5]
  return i2696
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2698 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2699 = data
  i2698.m_Width = i2699[0]
  i2698.m_Height = i2699[1]
  i2698.m_HorizontalBearingX = i2699[2]
  i2698.m_HorizontalBearingY = i2699[3]
  i2698.m_HorizontalAdvance = i2699[4]
  return i2698
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2700 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2701 = data
  i2700.m_X = i2701[0]
  i2700.m_Y = i2701[1]
  i2700.m_Width = i2701[2]
  i2700.m_Height = i2701[3]
  return i2700
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2704 = root || request.c( 'TMPro.TMP_Character' )
  var i2705 = data
  i2704.m_ElementType = i2705[0]
  i2704.m_Unicode = i2705[1]
  i2704.m_GlyphIndex = i2705[2]
  i2704.m_Scale = i2705[3]
  return i2704
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2710 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2711 = data
  i2710.Name = i2711[0]
  i2710.PointSize = i2711[1]
  i2710.Scale = i2711[2]
  i2710.CharacterCount = i2711[3]
  i2710.LineHeight = i2711[4]
  i2710.Baseline = i2711[5]
  i2710.Ascender = i2711[6]
  i2710.CapHeight = i2711[7]
  i2710.Descender = i2711[8]
  i2710.CenterLine = i2711[9]
  i2710.SuperscriptOffset = i2711[10]
  i2710.SubscriptOffset = i2711[11]
  i2710.SubSize = i2711[12]
  i2710.Underline = i2711[13]
  i2710.UnderlineThickness = i2711[14]
  i2710.strikethrough = i2711[15]
  i2710.strikethroughThickness = i2711[16]
  i2710.TabWidth = i2711[17]
  i2710.Padding = i2711[18]
  i2710.AtlasWidth = i2711[19]
  i2710.AtlasHeight = i2711[20]
  return i2710
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2714 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2715 = data
  i2714.id = i2715[0]
  i2714.x = i2715[1]
  i2714.y = i2715[2]
  i2714.width = i2715[3]
  i2714.height = i2715[4]
  i2714.xOffset = i2715[5]
  i2714.yOffset = i2715[6]
  i2714.xAdvance = i2715[7]
  i2714.scale = i2715[8]
  return i2714
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2716 = root || request.c( 'TMPro.KerningTable' )
  var i2717 = data
  var i2719 = i2717[0]
  var i2718 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2719.length; i += 1) {
    i2718.add(request.d('TMPro.KerningPair', i2719[i + 0]));
  }
  i2716.kerningPairs = i2718
  return i2716
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2722 = root || request.c( 'TMPro.KerningPair' )
  var i2723 = data
  i2722.xOffset = i2723[0]
  i2722.m_FirstGlyph = i2723[1]
  i2722.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2723[2], i2722.m_FirstGlyphAdjustments)
  i2722.m_SecondGlyph = i2723[3]
  i2722.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2723[4], i2722.m_SecondGlyphAdjustments)
  i2722.m_IgnoreSpacingAdjustments = !!i2723[5]
  return i2722
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2724 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2725 = data
  var i2727 = i2725[0]
  var i2726 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2727[i + 0]));
  }
  i2724.m_GlyphPairAdjustmentRecords = i2726
  return i2724
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2730 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2731 = data
  i2730.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2731[0], i2730.m_FirstAdjustmentRecord)
  i2730.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2731[1], i2730.m_SecondAdjustmentRecord)
  i2730.m_FeatureLookupFlags = i2731[2]
  return i2730
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2734 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2735 = data
  i2734.sourceFontFileName = i2735[0]
  i2734.sourceFontFileGUID = i2735[1]
  i2734.pointSizeSamplingMode = i2735[2]
  i2734.pointSize = i2735[3]
  i2734.padding = i2735[4]
  i2734.packingMode = i2735[5]
  i2734.atlasWidth = i2735[6]
  i2734.atlasHeight = i2735[7]
  i2734.characterSetSelectionMode = i2735[8]
  i2734.characterSequence = i2735[9]
  i2734.referencedFontAssetGUID = i2735[10]
  i2734.referencedTextAssetGUID = i2735[11]
  i2734.fontStyle = i2735[12]
  i2734.fontStyleModifier = i2735[13]
  i2734.renderMode = i2735[14]
  i2734.includeFontFeatures = !!i2735[15]
  return i2734
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2738 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2739 = data
  request.r(i2739[0], i2739[1], 0, i2738, 'regularTypeface')
  request.r(i2739[2], i2739[3], 0, i2738, 'italicTypeface')
  return i2738
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2740 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2741 = data
  i2740.useSafeMode = !!i2741[0]
  i2740.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2741[1], i2740.safeModeOptions)
  i2740.timeScale = i2741[2]
  i2740.unscaledTimeScale = i2741[3]
  i2740.useSmoothDeltaTime = !!i2741[4]
  i2740.maxSmoothUnscaledTime = i2741[5]
  i2740.rewindCallbackMode = i2741[6]
  i2740.showUnityEditorReport = !!i2741[7]
  i2740.logBehaviour = i2741[8]
  i2740.drawGizmos = !!i2741[9]
  i2740.defaultRecyclable = !!i2741[10]
  i2740.defaultAutoPlay = i2741[11]
  i2740.defaultUpdateType = i2741[12]
  i2740.defaultTimeScaleIndependent = !!i2741[13]
  i2740.defaultEaseType = i2741[14]
  i2740.defaultEaseOvershootOrAmplitude = i2741[15]
  i2740.defaultEasePeriod = i2741[16]
  i2740.defaultAutoKill = !!i2741[17]
  i2740.defaultLoopType = i2741[18]
  i2740.debugMode = !!i2741[19]
  i2740.debugStoreTargetId = !!i2741[20]
  i2740.showPreviewPanel = !!i2741[21]
  i2740.storeSettingsLocation = i2741[22]
  i2740.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2741[23], i2740.modules)
  i2740.createASMDEF = !!i2741[24]
  i2740.showPlayingTweens = !!i2741[25]
  i2740.showPausedTweens = !!i2741[26]
  return i2740
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2742 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2743 = data
  i2742.logBehaviour = i2743[0]
  i2742.nestedTweenFailureBehaviour = i2743[1]
  return i2742
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2744 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2745 = data
  i2744.showPanel = !!i2745[0]
  i2744.audioEnabled = !!i2745[1]
  i2744.physicsEnabled = !!i2745[2]
  i2744.physics2DEnabled = !!i2745[3]
  i2744.spriteEnabled = !!i2745[4]
  i2744.uiEnabled = !!i2745[5]
  i2744.textMeshProEnabled = !!i2745[6]
  i2744.tk2DEnabled = !!i2745[7]
  i2744.deAudioEnabled = !!i2745[8]
  i2744.deUnityExtendedEnabled = !!i2745[9]
  i2744.epoOutlineEnabled = !!i2745[10]
  return i2744
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2746 = root || request.c( 'TMPro.TMP_Settings' )
  var i2747 = data
  i2746.m_enableWordWrapping = !!i2747[0]
  i2746.m_enableKerning = !!i2747[1]
  i2746.m_enableExtraPadding = !!i2747[2]
  i2746.m_enableTintAllSprites = !!i2747[3]
  i2746.m_enableParseEscapeCharacters = !!i2747[4]
  i2746.m_EnableRaycastTarget = !!i2747[5]
  i2746.m_GetFontFeaturesAtRuntime = !!i2747[6]
  i2746.m_missingGlyphCharacter = i2747[7]
  i2746.m_warningsDisabled = !!i2747[8]
  request.r(i2747[9], i2747[10], 0, i2746, 'm_defaultFontAsset')
  i2746.m_defaultFontAssetPath = i2747[11]
  i2746.m_defaultFontSize = i2747[12]
  i2746.m_defaultAutoSizeMinRatio = i2747[13]
  i2746.m_defaultAutoSizeMaxRatio = i2747[14]
  i2746.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2747[15], i2747[16] )
  i2746.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2747[17], i2747[18] )
  i2746.m_autoSizeTextContainer = !!i2747[19]
  i2746.m_IsTextObjectScaleStatic = !!i2747[20]
  var i2749 = i2747[21]
  var i2748 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2749.length; i += 2) {
  request.r(i2749[i + 0], i2749[i + 1], 1, i2748, '')
  }
  i2746.m_fallbackFontAssets = i2748
  i2746.m_matchMaterialPreset = !!i2747[22]
  request.r(i2747[23], i2747[24], 0, i2746, 'm_defaultSpriteAsset')
  i2746.m_defaultSpriteAssetPath = i2747[25]
  i2746.m_enableEmojiSupport = !!i2747[26]
  i2746.m_MissingCharacterSpriteUnicode = i2747[27]
  i2746.m_defaultColorGradientPresetsPath = i2747[28]
  request.r(i2747[29], i2747[30], 0, i2746, 'm_defaultStyleSheet')
  i2746.m_StyleSheetsResourcePath = i2747[31]
  request.r(i2747[32], i2747[33], 0, i2746, 'm_leadingCharacters')
  request.r(i2747[34], i2747[35], 0, i2746, 'm_followingCharacters')
  i2746.m_UseModernHangulLineBreakingRules = !!i2747[36]
  return i2746
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2750 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2751 = data
  request.r(i2751[0], i2751[1], 0, i2750, 'spriteSheet')
  var i2753 = i2751[2]
  var i2752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.add(request.d('TMPro.TMP_Sprite', i2753[i + 0]));
  }
  i2750.spriteInfoList = i2752
  var i2755 = i2751[3]
  var i2754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2755.length; i += 2) {
  request.r(i2755[i + 0], i2755[i + 1], 1, i2754, '')
  }
  i2750.fallbackSpriteAssets = i2754
  i2750.hashCode = i2751[4]
  request.r(i2751[5], i2751[6], 0, i2750, 'material')
  i2750.materialHashCode = i2751[7]
  i2750.m_Version = i2751[8]
  i2750.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2751[9], i2750.m_FaceInfo)
  var i2757 = i2751[10]
  var i2756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2757.length; i += 1) {
    i2756.add(request.d('TMPro.TMP_SpriteCharacter', i2757[i + 0]));
  }
  i2750.m_SpriteCharacterTable = i2756
  var i2759 = i2751[11]
  var i2758 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2759.length; i += 1) {
    i2758.add(request.d('TMPro.TMP_SpriteGlyph', i2759[i + 0]));
  }
  i2750.m_SpriteGlyphTable = i2758
  return i2750
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2762 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2763 = data
  i2762.name = i2763[0]
  i2762.hashCode = i2763[1]
  i2762.unicode = i2763[2]
  i2762.pivot = new pc.Vec2( i2763[3], i2763[4] )
  request.r(i2763[5], i2763[6], 0, i2762, 'sprite')
  i2762.id = i2763[7]
  i2762.x = i2763[8]
  i2762.y = i2763[9]
  i2762.width = i2763[10]
  i2762.height = i2763[11]
  i2762.xOffset = i2763[12]
  i2762.yOffset = i2763[13]
  i2762.xAdvance = i2763[14]
  i2762.scale = i2763[15]
  return i2762
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2768 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2769 = data
  i2768.m_Name = i2769[0]
  i2768.m_HashCode = i2769[1]
  i2768.m_ElementType = i2769[2]
  i2768.m_Unicode = i2769[3]
  i2768.m_GlyphIndex = i2769[4]
  i2768.m_Scale = i2769[5]
  return i2768
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2772 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2773 = data
  request.r(i2773[0], i2773[1], 0, i2772, 'sprite')
  i2772.m_Index = i2773[2]
  i2772.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2773[3], i2772.m_Metrics)
  i2772.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2773[4], i2772.m_GlyphRect)
  i2772.m_Scale = i2773[5]
  i2772.m_AtlasIndex = i2773[6]
  i2772.m_ClassDefinitionType = i2773[7]
  return i2772
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2774 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2775 = data
  var i2777 = i2775[0]
  var i2776 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.add(request.d('TMPro.TMP_Style', i2777[i + 0]));
  }
  i2774.m_StyleList = i2776
  return i2774
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2780 = root || request.c( 'TMPro.TMP_Style' )
  var i2781 = data
  i2780.m_Name = i2781[0]
  i2780.m_HashCode = i2781[1]
  i2780.m_OpeningDefinition = i2781[2]
  i2780.m_ClosingDefinition = i2781[3]
  i2780.m_OpeningTagArray = i2781[4]
  i2780.m_ClosingTagArray = i2781[5]
  i2780.m_OpeningTagUnicodeArray = i2781[6]
  i2780.m_ClosingTagUnicodeArray = i2781[7]
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2783 = data
  var i2785 = i2783[0]
  var i2784 = []
  for(var i = 0; i < i2785.length; i += 1) {
    i2784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2785[i + 0]) );
  }
  i2782.files = i2784
  i2782.componentToPrefabIds = i2783[1]
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2789 = data
  i2788.path = i2789[0]
  request.r(i2789[1], i2789[2], 0, i2788, 'unityObject')
  return i2788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2791 = data
  var i2793 = i2791[0]
  var i2792 = []
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2793[i + 0]) );
  }
  i2790.scriptsExecutionOrder = i2792
  var i2795 = i2791[1]
  var i2794 = []
  for(var i = 0; i < i2795.length; i += 1) {
    i2794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2795[i + 0]) );
  }
  i2790.sortingLayers = i2794
  var i2797 = i2791[2]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2797[i + 0]) );
  }
  i2790.cullingLayers = i2796
  i2790.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2791[3], i2790.timeSettings)
  i2790.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2791[4], i2790.physicsSettings)
  i2790.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2791[5], i2790.physics2DSettings)
  i2790.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2791[6], i2790.qualitySettings)
  i2790.enableRealtimeShadows = !!i2791[7]
  i2790.enableAutoInstancing = !!i2791[8]
  i2790.enableStaticBatching = !!i2791[9]
  i2790.enableDynamicBatching = !!i2791[10]
  i2790.lightmapEncodingQuality = i2791[11]
  i2790.desiredColorSpace = i2791[12]
  var i2799 = i2791[13]
  var i2798 = []
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.push( i2799[i + 0] );
  }
  i2790.allTags = i2798
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2803 = data
  i2802.name = i2803[0]
  i2802.value = i2803[1]
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2807 = data
  i2806.id = i2807[0]
  i2806.name = i2807[1]
  i2806.value = i2807[2]
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2811 = data
  i2810.id = i2811[0]
  i2810.name = i2811[1]
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2813 = data
  i2812.fixedDeltaTime = i2813[0]
  i2812.maximumDeltaTime = i2813[1]
  i2812.timeScale = i2813[2]
  i2812.maximumParticleTimestep = i2813[3]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2815 = data
  i2814.gravity = new pc.Vec3( i2815[0], i2815[1], i2815[2] )
  i2814.defaultSolverIterations = i2815[3]
  i2814.bounceThreshold = i2815[4]
  i2814.autoSyncTransforms = !!i2815[5]
  i2814.autoSimulation = !!i2815[6]
  var i2817 = i2815[7]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2817[i + 0]) );
  }
  i2814.collisionMatrix = i2816
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2821 = data
  i2820.enabled = !!i2821[0]
  i2820.layerId = i2821[1]
  i2820.otherLayerId = i2821[2]
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2823 = data
  request.r(i2823[0], i2823[1], 0, i2822, 'material')
  i2822.gravity = new pc.Vec2( i2823[2], i2823[3] )
  i2822.positionIterations = i2823[4]
  i2822.velocityIterations = i2823[5]
  i2822.velocityThreshold = i2823[6]
  i2822.maxLinearCorrection = i2823[7]
  i2822.maxAngularCorrection = i2823[8]
  i2822.maxTranslationSpeed = i2823[9]
  i2822.maxRotationSpeed = i2823[10]
  i2822.baumgarteScale = i2823[11]
  i2822.baumgarteTOIScale = i2823[12]
  i2822.timeToSleep = i2823[13]
  i2822.linearSleepTolerance = i2823[14]
  i2822.angularSleepTolerance = i2823[15]
  i2822.defaultContactOffset = i2823[16]
  i2822.autoSimulation = !!i2823[17]
  i2822.queriesHitTriggers = !!i2823[18]
  i2822.queriesStartInColliders = !!i2823[19]
  i2822.callbacksOnDisable = !!i2823[20]
  i2822.reuseCollisionCallbacks = !!i2823[21]
  i2822.autoSyncTransforms = !!i2823[22]
  var i2825 = i2823[23]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2825[i + 0]) );
  }
  i2822.collisionMatrix = i2824
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2829 = data
  i2828.enabled = !!i2829[0]
  i2828.layerId = i2829[1]
  i2828.otherLayerId = i2829[2]
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2831 = data
  var i2833 = i2831[0]
  var i2832 = []
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2833[i + 0]) );
  }
  i2830.qualityLevels = i2832
  var i2835 = i2831[1]
  var i2834 = []
  for(var i = 0; i < i2835.length; i += 1) {
    i2834.push( i2835[i + 0] );
  }
  i2830.names = i2834
  i2830.shadows = i2831[2]
  i2830.anisotropicFiltering = i2831[3]
  i2830.antiAliasing = i2831[4]
  i2830.lodBias = i2831[5]
  i2830.shadowCascades = i2831[6]
  i2830.shadowDistance = i2831[7]
  i2830.shadowmaskMode = i2831[8]
  i2830.shadowProjection = i2831[9]
  i2830.shadowResolution = i2831[10]
  i2830.softParticles = !!i2831[11]
  i2830.softVegetation = !!i2831[12]
  i2830.activeColorSpace = i2831[13]
  i2830.desiredColorSpace = i2831[14]
  i2830.masterTextureLimit = i2831[15]
  i2830.maxQueuedFrames = i2831[16]
  i2830.particleRaycastBudget = i2831[17]
  i2830.pixelLightCount = i2831[18]
  i2830.realtimeReflectionProbes = !!i2831[19]
  i2830.shadowCascade2Split = i2831[20]
  i2830.shadowCascade4Split = new pc.Vec3( i2831[21], i2831[22], i2831[23] )
  i2830.streamingMipmapsActive = !!i2831[24]
  i2830.vSyncCount = i2831[25]
  i2830.asyncUploadBufferSize = i2831[26]
  i2830.asyncUploadTimeSlice = i2831[27]
  i2830.billboardsFaceCameraPosition = !!i2831[28]
  i2830.shadowNearPlaneOffset = i2831[29]
  i2830.streamingMipmapsMemoryBudget = i2831[30]
  i2830.maximumLODLevel = i2831[31]
  i2830.streamingMipmapsAddAllCameras = !!i2831[32]
  i2830.streamingMipmapsMaxLevelReduction = i2831[33]
  i2830.streamingMipmapsRenderersPerFrame = i2831[34]
  i2830.resolutionScalingFixedDPIFactor = i2831[35]
  i2830.streamingMipmapsMaxFileIORequests = i2831[36]
  i2830.currentQualityLevel = i2831[37]
  return i2830
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2838 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2839 = data
  i2838.xPlacement = i2839[0]
  i2838.yPlacement = i2839[1]
  i2838.xAdvance = i2839[2]
  i2838.yAdvance = i2839[3]
  return i2838
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2840 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2841 = data
  i2840.m_GlyphIndex = i2841[0]
  i2840.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2841[1], i2840.m_GlyphValueRecord)
  return i2840
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2842 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2843 = data
  i2842.m_XPlacement = i2843[0]
  i2842.m_YPlacement = i2843[1]
  i2842.m_XAdvance = i2843[2]
  i2842.m_YAdvance = i2843[3]
  return i2842
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[3],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[3],"75":[76],"77":[78],"79":[78],"9":[8],"80":[81],"82":[83],"84":[81],"85":[8],"86":[8],"11":[9],"18":[19,8],"87":[8],"10":[9],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"33":[8],"95":[8],"16":[19,8],"96":[8],"97":[8],"98":[8],"99":[8],"100":[19,8],"101":[8],"102":[6],"103":[6],"7":[6],"104":[6],"105":[3],"106":[3],"107":[108],"109":[3],"110":[111],"112":[8],"113":[19,8],"114":[76],"23":[19,8],"115":[116,76],"117":[76],"118":[76,119],"120":[53],"121":[61],"122":[111],"123":[124],"125":[8],"126":[76,8],"17":[8,19],"127":[8],"128":[19,8],"129":[76],"130":[19,8],"131":[8],"132":[81]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DropZone","UnityEngine.PolygonCollider2D","ClickItem","DG.Tweening.DOTweenAnimation","DraggableItem","UnityEngine.CanvasGroup","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "260.2";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BEQ_V21_NgocNDL_AnhPD";

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

Deserializers.buildID = "b59af71a-a3f3-4204-86c0-3c31d2888e45";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

