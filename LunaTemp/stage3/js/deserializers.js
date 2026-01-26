var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2350 = root || request.c( 'UnityEngine.JointSpring' )
  var i2351 = data
  i2350.spring = i2351[0]
  i2350.damper = i2351[1]
  i2350.targetPosition = i2351[2]
  return i2350
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2352 = root || request.c( 'UnityEngine.JointMotor' )
  var i2353 = data
  i2352.m_TargetVelocity = i2353[0]
  i2352.m_Force = i2353[1]
  i2352.m_FreeSpin = i2353[2]
  return i2352
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2354 = root || request.c( 'UnityEngine.JointLimits' )
  var i2355 = data
  i2354.m_Min = i2355[0]
  i2354.m_Max = i2355[1]
  i2354.m_Bounciness = i2355[2]
  i2354.m_BounceMinVelocity = i2355[3]
  i2354.m_ContactDistance = i2355[4]
  i2354.minBounce = i2355[5]
  i2354.maxBounce = i2355[6]
  return i2354
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2356 = root || request.c( 'UnityEngine.JointDrive' )
  var i2357 = data
  i2356.m_PositionSpring = i2357[0]
  i2356.m_PositionDamper = i2357[1]
  i2356.m_MaximumForce = i2357[2]
  i2356.m_UseAcceleration = i2357[3]
  return i2356
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2358 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2359 = data
  i2358.m_Spring = i2359[0]
  i2358.m_Damper = i2359[1]
  return i2358
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2360 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2361 = data
  i2360.m_Limit = i2361[0]
  i2360.m_Bounciness = i2361[1]
  i2360.m_ContactDistance = i2361[2]
  return i2360
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2362 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2363 = data
  i2362.m_ExtremumSlip = i2363[0]
  i2362.m_ExtremumValue = i2363[1]
  i2362.m_AsymptoteSlip = i2363[2]
  i2362.m_AsymptoteValue = i2363[3]
  i2362.m_Stiffness = i2363[4]
  return i2362
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2364 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2365 = data
  i2364.m_LowerAngle = i2365[0]
  i2364.m_UpperAngle = i2365[1]
  return i2364
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2366 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2367 = data
  i2366.m_MotorSpeed = i2367[0]
  i2366.m_MaximumMotorTorque = i2367[1]
  return i2366
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2368 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2369 = data
  i2368.m_DampingRatio = i2369[0]
  i2368.m_Frequency = i2369[1]
  i2368.m_Angle = i2369[2]
  return i2368
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2370 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2371 = data
  i2370.m_LowerTranslation = i2371[0]
  i2370.m_UpperTranslation = i2371[1]
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2373 = data
  i2372.name = i2373[0]
  i2372.width = i2373[1]
  i2372.height = i2373[2]
  i2372.mipmapCount = i2373[3]
  i2372.anisoLevel = i2373[4]
  i2372.filterMode = i2373[5]
  i2372.hdr = !!i2373[6]
  i2372.format = i2373[7]
  i2372.wrapMode = i2373[8]
  i2372.alphaIsTransparency = !!i2373[9]
  i2372.alphaSource = i2373[10]
  i2372.graphicsFormat = i2373[11]
  i2372.sRGBTexture = !!i2373[12]
  i2372.desiredColorSpace = i2373[13]
  i2372.wrapU = i2373[14]
  i2372.wrapV = i2373[15]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2374 = root || new pc.UnityMaterial()
  var i2375 = data
  i2374.name = i2375[0]
  request.r(i2375[1], i2375[2], 0, i2374, 'shader')
  i2374.renderQueue = i2375[3]
  i2374.enableInstancing = !!i2375[4]
  var i2377 = i2375[5]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2377[i + 0]) );
  }
  i2374.floatParameters = i2376
  var i2379 = i2375[6]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2379[i + 0]) );
  }
  i2374.colorParameters = i2378
  var i2381 = i2375[7]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 1) {
    i2380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2381[i + 0]) );
  }
  i2374.vectorParameters = i2380
  var i2383 = i2375[8]
  var i2382 = []
  for(var i = 0; i < i2383.length; i += 1) {
    i2382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2383[i + 0]) );
  }
  i2374.textureParameters = i2382
  var i2385 = i2375[9]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2385[i + 0]) );
  }
  i2374.materialFlags = i2384
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2389 = data
  i2388.name = i2389[0]
  i2388.value = i2389[1]
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2393 = data
  i2392.name = i2393[0]
  i2392.value = new pc.Color(i2393[1], i2393[2], i2393[3], i2393[4])
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2397 = data
  i2396.name = i2397[0]
  i2396.value = new pc.Vec4( i2397[1], i2397[2], i2397[3], i2397[4] )
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2401 = data
  i2400.name = i2401[0]
  request.r(i2401[1], i2401[2], 0, i2400, 'value')
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2405 = data
  i2404.name = i2405[0]
  i2404.enabled = !!i2405[1]
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2407 = data
  i2406.name = i2407[0]
  i2406.index = i2407[1]
  i2406.startup = !!i2407[2]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2409 = data
  i2408.position = new pc.Vec3( i2409[0], i2409[1], i2409[2] )
  i2408.scale = new pc.Vec3( i2409[3], i2409[4], i2409[5] )
  i2408.rotation = new pc.Quat(i2409[6], i2409[7], i2409[8], i2409[9])
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2411 = data
  i2410.aspect = i2411[0]
  i2410.orthographic = !!i2411[1]
  i2410.orthographicSize = i2411[2]
  i2410.backgroundColor = new pc.Color(i2411[3], i2411[4], i2411[5], i2411[6])
  i2410.nearClipPlane = i2411[7]
  i2410.farClipPlane = i2411[8]
  i2410.fieldOfView = i2411[9]
  i2410.depth = i2411[10]
  i2410.clearFlags = i2411[11]
  i2410.cullingMask = i2411[12]
  i2410.rect = i2411[13]
  request.r(i2411[14], i2411[15], 0, i2410, 'targetTexture')
  i2410.usePhysicalProperties = !!i2411[16]
  i2410.focalLength = i2411[17]
  i2410.sensorSize = new pc.Vec2( i2411[18], i2411[19] )
  i2410.lensShift = new pc.Vec2( i2411[20], i2411[21] )
  i2410.gateFit = i2411[22]
  i2410.commandBufferCount = i2411[23]
  i2410.cameraType = i2411[24]
  i2410.enabled = !!i2411[25]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2413 = data
  i2412.name = i2413[0]
  i2412.tagId = i2413[1]
  i2412.enabled = !!i2413[2]
  i2412.isStatic = !!i2413[3]
  i2412.layer = i2413[4]
  return i2412
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2414 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2415 = data
  request.r(i2415[0], i2415[1], 0, i2414, 'm_FirstSelected')
  i2414.m_sendNavigationEvents = !!i2415[2]
  i2414.m_DragThreshold = i2415[3]
  return i2414
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2416 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2417 = data
  i2416.m_HorizontalAxis = i2417[0]
  i2416.m_VerticalAxis = i2417[1]
  i2416.m_SubmitButton = i2417[2]
  i2416.m_CancelButton = i2417[3]
  i2416.m_InputActionsPerSecond = i2417[4]
  i2416.m_RepeatDelay = i2417[5]
  i2416.m_ForceModuleActive = !!i2417[6]
  i2416.m_SendPointerHoverToParent = !!i2417[7]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2419 = data
  i2418.pivot = new pc.Vec2( i2419[0], i2419[1] )
  i2418.anchorMin = new pc.Vec2( i2419[2], i2419[3] )
  i2418.anchorMax = new pc.Vec2( i2419[4], i2419[5] )
  i2418.sizeDelta = new pc.Vec2( i2419[6], i2419[7] )
  i2418.anchoredPosition3D = new pc.Vec3( i2419[8], i2419[9], i2419[10] )
  i2418.rotation = new pc.Quat(i2419[11], i2419[12], i2419[13], i2419[14])
  i2418.scale = new pc.Vec3( i2419[15], i2419[16], i2419[17] )
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2421 = data
  i2420.planeDistance = i2421[0]
  i2420.referencePixelsPerUnit = i2421[1]
  i2420.isFallbackOverlay = !!i2421[2]
  i2420.renderMode = i2421[3]
  i2420.renderOrder = i2421[4]
  i2420.sortingLayerName = i2421[5]
  i2420.sortingOrder = i2421[6]
  i2420.scaleFactor = i2421[7]
  request.r(i2421[8], i2421[9], 0, i2420, 'worldCamera')
  i2420.overrideSorting = !!i2421[10]
  i2420.pixelPerfect = !!i2421[11]
  i2420.targetDisplay = i2421[12]
  i2420.overridePixelPerfect = !!i2421[13]
  i2420.enabled = !!i2421[14]
  return i2420
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2422 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2423 = data
  i2422.m_UiScaleMode = i2423[0]
  i2422.m_ReferencePixelsPerUnit = i2423[1]
  i2422.m_ScaleFactor = i2423[2]
  i2422.m_ReferenceResolution = new pc.Vec2( i2423[3], i2423[4] )
  i2422.m_ScreenMatchMode = i2423[5]
  i2422.m_MatchWidthOrHeight = i2423[6]
  i2422.m_PhysicalUnit = i2423[7]
  i2422.m_FallbackScreenDPI = i2423[8]
  i2422.m_DefaultSpriteDPI = i2423[9]
  i2422.m_DynamicPixelsPerUnit = i2423[10]
  i2422.m_PresetInfoIsWorld = !!i2423[11]
  return i2422
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2424 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2425 = data
  i2424.m_IgnoreReversedGraphics = !!i2425[0]
  i2424.m_BlockingObjects = i2425[1]
  i2424.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2425[2] )
  return i2424
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i2426 = root || request.c( 'LunaManager' )
  var i2427 = data
  var i2429 = i2427[0]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 2) {
  request.r(i2429[i + 0], i2429[i + 1], 2, i2428, '')
  }
  i2426.lstBtnInstall = i2428
  request.r(i2427[1], i2427[2], 0, i2426, 'WinGO')
  request.r(i2427[3], i2427[4], 0, i2426, 'LoseGO')
  request.r(i2427[5], i2427[6], 0, i2426, 'StartCard')
  request.r(i2427[7], i2427[8], 0, i2426, 'EndCard')
  request.r(i2427[9], i2427[10], 0, i2426, 'Parent')
  i2426.isDrag = !!i2427[11]
  i2426.timeDrag = i2427[12]
  i2426.countPlay = i2427[13]
  i2426.countPlayFinal = i2427[14]
  i2426.countPlayMax = i2427[15]
  i2426.timeDropFinal = i2427[16]
  i2426.colorBG = new pc.Color(i2427[17], i2427[18], i2427[19], i2427[20])
  request.r(i2427[21], i2427[22], 0, i2426, 'texture2D')
  request.r(i2427[23], i2427[24], 0, i2426, 'rawImageBG')
  request.r(i2427[25], i2427[26], 0, i2426, 'textProgess')
  request.r(i2427[27], i2427[28], 0, i2426, 'imgProgess')
  request.r(i2427[29], i2427[30], 0, i2426, 'timeText')
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2433 = data
  i2432.cullTransparentMesh = !!i2433[0]
  return i2432
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2434 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'm_Texture')
  i2434.m_UVRect = UnityEngine.Rect.MinMaxRect(i2435[2], i2435[3], i2435[4], i2435[5])
  i2434.m_Maskable = !!i2435[6]
  request.r(i2435[7], i2435[8], 0, i2434, 'm_Material')
  i2434.m_Color = new pc.Color(i2435[9], i2435[10], i2435[11], i2435[12])
  i2434.m_RaycastTarget = !!i2435[13]
  i2434.m_RaycastPadding = new pc.Vec4( i2435[14], i2435[15], i2435[16], i2435[17] )
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2437 = data
  request.r(i2437[0], i2437[1], 0, i2436, 'clip')
  request.r(i2437[2], i2437[3], 0, i2436, 'outputAudioMixerGroup')
  i2436.playOnAwake = !!i2437[4]
  i2436.loop = !!i2437[5]
  i2436.time = i2437[6]
  i2436.volume = i2437[7]
  i2436.pitch = i2437[8]
  i2436.enabled = !!i2437[9]
  return i2436
}

Deserializers["DropZone"] = function (request, data, root) {
  var i2438 = root || request.c( 'DropZone' )
  var i2439 = data
  i2438.idDrop = i2439[0]
  var i2441 = i2439[1]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 2) {
  request.r(i2441[i + 0], i2441[i + 1], 2, i2440, '')
  }
  i2438.steps = i2440
  request.r(i2439[2], i2439[3], 0, i2438, 'stepLose')
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2445 = data
  i2444.usedByComposite = !!i2445[0]
  i2444.autoTiling = !!i2445[1]
  var i2447 = i2445[2]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
  var i2449 = i2447[i + 0]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 2) {
    i2448.push( new pc.Vec2( i2449[i + 0], i2449[i + 1] ) );
  }
    i2446.push( i2448 );
  }
  i2444.points = i2446
  i2444.enabled = !!i2445[3]
  i2444.isTrigger = !!i2445[4]
  i2444.usedByEffector = !!i2445[5]
  i2444.density = i2445[6]
  i2444.offset = new pc.Vec2( i2445[7], i2445[8] )
  request.r(i2445[9], i2445[10], 0, i2444, 'material')
  return i2444
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2456 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2457 = data
  request.r(i2457[0], i2457[1], 0, i2456, 'skeletonDataAsset')
  request.r(i2457[2], i2457[3], 0, i2456, 'additiveMaterial')
  request.r(i2457[4], i2457[5], 0, i2456, 'multiplyMaterial')
  request.r(i2457[6], i2457[7], 0, i2456, 'screenMaterial')
  i2456.initialSkinName = i2457[8]
  i2456.initialFlipX = !!i2457[9]
  i2456.initialFlipY = !!i2457[10]
  i2456.startingAnimation = i2457[11]
  i2456.startingLoop = !!i2457[12]
  i2456.timeScale = i2457[13]
  i2456.freeze = !!i2457[14]
  i2456.layoutScaleMode = i2457[15]
  i2456.updateWhenInvisible = i2457[16]
  i2456.allowMultipleCanvasRenderers = !!i2457[17]
  var i2459 = i2457[18]
  var i2458 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2459.length; i += 2) {
  request.r(i2459[i + 0], i2459[i + 1], 1, i2458, '')
  }
  i2456.canvasRenderers = i2458
  i2456.enableSeparatorSlots = !!i2457[19]
  i2456.updateSeparatorPartLocation = !!i2457[20]
  i2456.updateSeparatorPartScale = !!i2457[21]
  i2456.disableMeshAssignmentOnOverride = !!i2457[22]
  i2456.referenceSize = new pc.Vec2( i2457[23], i2457[24] )
  i2456.referenceScale = i2457[25]
  i2456.rectTransformSize = new pc.Vec2( i2457[26], i2457[27] )
  i2456.editReferenceRect = !!i2457[28]
  var i2461 = i2457[29]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( i2461[i + 0] );
  }
  i2456.separatorSlotNames = i2460
  var i2463 = i2457[30]
  var i2462 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2463.length; i += 2) {
  request.r(i2463[i + 0], i2463[i + 1], 1, i2462, '')
  }
  i2456.separatorParts = i2462
  i2456.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2457[31], i2456.meshGenerator)
  i2456.updateTiming = i2457[32]
  i2456.unscaledTime = !!i2457[33]
  i2456.m_Maskable = !!i2457[34]
  request.r(i2457[35], i2457[36], 0, i2456, 'm_Material')
  i2456.m_Color = new pc.Color(i2457[37], i2457[38], i2457[39], i2457[40])
  i2456.m_RaycastTarget = !!i2457[41]
  i2456.m_RaycastPadding = new pc.Vec4( i2457[42], i2457[43], i2457[44], i2457[45] )
  return i2456
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2470 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2471 = data
  i2470.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2471[0], i2470.settings)
  return i2470
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2472 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2473 = data
  i2472.useClipping = !!i2473[0]
  i2472.zSpacing = i2473[1]
  i2472.pmaVertexColors = !!i2473[2]
  i2472.tintBlack = !!i2473[3]
  i2472.canvasGroupTintBlack = !!i2473[4]
  i2472.calculateTangents = !!i2473[5]
  i2472.addNormals = !!i2473[6]
  i2472.immutableTriangles = !!i2473[7]
  return i2472
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2474 = root || request.c( 'UnityEngine.UI.Image' )
  var i2475 = data
  request.r(i2475[0], i2475[1], 0, i2474, 'm_Sprite')
  i2474.m_Type = i2475[2]
  i2474.m_PreserveAspect = !!i2475[3]
  i2474.m_FillCenter = !!i2475[4]
  i2474.m_FillMethod = i2475[5]
  i2474.m_FillAmount = i2475[6]
  i2474.m_FillClockwise = !!i2475[7]
  i2474.m_FillOrigin = i2475[8]
  i2474.m_UseSpriteMesh = !!i2475[9]
  i2474.m_PixelsPerUnitMultiplier = i2475[10]
  i2474.m_Maskable = !!i2475[11]
  request.r(i2475[12], i2475[13], 0, i2474, 'm_Material')
  i2474.m_Color = new pc.Color(i2475[14], i2475[15], i2475[16], i2475[17])
  i2474.m_RaycastTarget = !!i2475[18]
  i2474.m_RaycastPadding = new pc.Vec4( i2475[19], i2475[20], i2475[21], i2475[22] )
  return i2474
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2476 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2477 = data
  i2476.targetIsSelf = !!i2477[0]
  request.r(i2477[1], i2477[2], 0, i2476, 'targetGO')
  i2476.tweenTargetIsTargetGO = !!i2477[3]
  i2476.delay = i2477[4]
  i2476.duration = i2477[5]
  i2476.easeType = i2477[6]
  i2476.easeCurve = new pc.AnimationCurve( { keys_flow: i2477[7] } )
  i2476.loopType = i2477[8]
  i2476.loops = i2477[9]
  i2476.id = i2477[10]
  i2476.isRelative = !!i2477[11]
  i2476.isFrom = !!i2477[12]
  i2476.isIndependentUpdate = !!i2477[13]
  i2476.autoKill = !!i2477[14]
  i2476.autoGenerate = !!i2477[15]
  i2476.isActive = !!i2477[16]
  i2476.isValid = !!i2477[17]
  request.r(i2477[18], i2477[19], 0, i2476, 'target')
  i2476.animationType = i2477[20]
  i2476.targetType = i2477[21]
  i2476.forcedTargetType = i2477[22]
  i2476.autoPlay = !!i2477[23]
  i2476.useTargetAsV3 = !!i2477[24]
  i2476.endValueFloat = i2477[25]
  i2476.endValueV3 = new pc.Vec3( i2477[26], i2477[27], i2477[28] )
  i2476.endValueV2 = new pc.Vec2( i2477[29], i2477[30] )
  i2476.endValueColor = new pc.Color(i2477[31], i2477[32], i2477[33], i2477[34])
  i2476.endValueString = i2477[35]
  i2476.endValueRect = UnityEngine.Rect.MinMaxRect(i2477[36], i2477[37], i2477[38], i2477[39])
  request.r(i2477[40], i2477[41], 0, i2476, 'endValueTransform')
  i2476.optionalBool0 = !!i2477[42]
  i2476.optionalBool1 = !!i2477[43]
  i2476.optionalFloat0 = i2477[44]
  i2476.optionalInt0 = i2477[45]
  i2476.optionalRotationMode = i2477[46]
  i2476.optionalScrambleMode = i2477[47]
  i2476.optionalShakeRandomnessMode = i2477[48]
  i2476.optionalString = i2477[49]
  i2476.updateType = i2477[50]
  i2476.isSpeedBased = !!i2477[51]
  i2476.hasOnStart = !!i2477[52]
  i2476.hasOnPlay = !!i2477[53]
  i2476.hasOnUpdate = !!i2477[54]
  i2476.hasOnStepComplete = !!i2477[55]
  i2476.hasOnComplete = !!i2477[56]
  i2476.hasOnTweenCreated = !!i2477[57]
  i2476.hasOnRewind = !!i2477[58]
  i2476.onStart = request.d('UnityEngine.Events.UnityEvent', i2477[59], i2476.onStart)
  i2476.onPlay = request.d('UnityEngine.Events.UnityEvent', i2477[60], i2476.onPlay)
  i2476.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2477[61], i2476.onUpdate)
  i2476.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2477[62], i2476.onStepComplete)
  i2476.onComplete = request.d('UnityEngine.Events.UnityEvent', i2477[63], i2476.onComplete)
  i2476.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2477[64], i2476.onTweenCreated)
  i2476.onRewind = request.d('UnityEngine.Events.UnityEvent', i2477[65], i2476.onRewind)
  return i2476
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2478 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2479 = data
  i2478.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2479[0], i2478.m_PersistentCalls)
  return i2478
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2480 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2481 = data
  var i2483 = i2481[0]
  var i2482 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.add(request.d('UnityEngine.Events.PersistentCall', i2483[i + 0]));
  }
  i2480.m_Calls = i2482
  return i2480
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2486 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2487 = data
  request.r(i2487[0], i2487[1], 0, i2486, 'm_Target')
  i2486.m_TargetAssemblyTypeName = i2487[2]
  i2486.m_MethodName = i2487[3]
  i2486.m_Mode = i2487[4]
  i2486.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2487[5], i2486.m_Arguments)
  i2486.m_CallState = i2487[6]
  return i2486
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2488 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2489 = data
  request.r(i2489[0], i2489[1], 0, i2488, 'm_ObjectArgument')
  i2488.m_ObjectArgumentAssemblyTypeName = i2489[2]
  i2488.m_IntArgument = i2489[3]
  i2488.m_FloatArgument = i2489[4]
  i2488.m_StringArgument = i2489[5]
  i2488.m_BoolArgument = !!i2489[6]
  return i2488
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i2490 = root || request.c( 'DraggableItem' )
  var i2491 = data
  i2490.idDrag = i2491[0]
  i2490.isProcess = !!i2491[1]
  i2490.isLose = !!i2491[2]
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2493 = data
  i2492.m_Alpha = i2493[0]
  i2492.m_Interactable = !!i2493[1]
  i2492.m_BlocksRaycasts = !!i2493[2]
  i2492.m_IgnoreParentGroups = !!i2493[3]
  i2492.enabled = !!i2493[4]
  return i2492
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2494 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2495 = data
  i2494.m_hasFontAssetChanged = !!i2495[0]
  request.r(i2495[1], i2495[2], 0, i2494, 'm_baseMaterial')
  i2494.m_maskOffset = new pc.Vec4( i2495[3], i2495[4], i2495[5], i2495[6] )
  i2494.m_text = i2495[7]
  i2494.m_isRightToLeft = !!i2495[8]
  request.r(i2495[9], i2495[10], 0, i2494, 'm_fontAsset')
  request.r(i2495[11], i2495[12], 0, i2494, 'm_sharedMaterial')
  var i2497 = i2495[13]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 2) {
  request.r(i2497[i + 0], i2497[i + 1], 2, i2496, '')
  }
  i2494.m_fontSharedMaterials = i2496
  request.r(i2495[14], i2495[15], 0, i2494, 'm_fontMaterial')
  var i2499 = i2495[16]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 2) {
  request.r(i2499[i + 0], i2499[i + 1], 2, i2498, '')
  }
  i2494.m_fontMaterials = i2498
  i2494.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2495[17], i2495[18], i2495[19], i2495[20])
  i2494.m_fontColor = new pc.Color(i2495[21], i2495[22], i2495[23], i2495[24])
  i2494.m_enableVertexGradient = !!i2495[25]
  i2494.m_colorMode = i2495[26]
  i2494.m_fontColorGradient = request.d('TMPro.VertexGradient', i2495[27], i2494.m_fontColorGradient)
  request.r(i2495[28], i2495[29], 0, i2494, 'm_fontColorGradientPreset')
  request.r(i2495[30], i2495[31], 0, i2494, 'm_spriteAsset')
  i2494.m_tintAllSprites = !!i2495[32]
  request.r(i2495[33], i2495[34], 0, i2494, 'm_StyleSheet')
  i2494.m_TextStyleHashCode = i2495[35]
  i2494.m_overrideHtmlColors = !!i2495[36]
  i2494.m_faceColor = UnityEngine.Color32.ConstructColor(i2495[37], i2495[38], i2495[39], i2495[40])
  i2494.m_fontSize = i2495[41]
  i2494.m_fontSizeBase = i2495[42]
  i2494.m_fontWeight = i2495[43]
  i2494.m_enableAutoSizing = !!i2495[44]
  i2494.m_fontSizeMin = i2495[45]
  i2494.m_fontSizeMax = i2495[46]
  i2494.m_fontStyle = i2495[47]
  i2494.m_HorizontalAlignment = i2495[48]
  i2494.m_VerticalAlignment = i2495[49]
  i2494.m_textAlignment = i2495[50]
  i2494.m_characterSpacing = i2495[51]
  i2494.m_wordSpacing = i2495[52]
  i2494.m_lineSpacing = i2495[53]
  i2494.m_lineSpacingMax = i2495[54]
  i2494.m_paragraphSpacing = i2495[55]
  i2494.m_charWidthMaxAdj = i2495[56]
  i2494.m_enableWordWrapping = !!i2495[57]
  i2494.m_wordWrappingRatios = i2495[58]
  i2494.m_overflowMode = i2495[59]
  request.r(i2495[60], i2495[61], 0, i2494, 'm_linkedTextComponent')
  request.r(i2495[62], i2495[63], 0, i2494, 'parentLinkedComponent')
  i2494.m_enableKerning = !!i2495[64]
  i2494.m_enableExtraPadding = !!i2495[65]
  i2494.checkPaddingRequired = !!i2495[66]
  i2494.m_isRichText = !!i2495[67]
  i2494.m_parseCtrlCharacters = !!i2495[68]
  i2494.m_isOrthographic = !!i2495[69]
  i2494.m_isCullingEnabled = !!i2495[70]
  i2494.m_horizontalMapping = i2495[71]
  i2494.m_verticalMapping = i2495[72]
  i2494.m_uvLineOffset = i2495[73]
  i2494.m_geometrySortingOrder = i2495[74]
  i2494.m_IsTextObjectScaleStatic = !!i2495[75]
  i2494.m_VertexBufferAutoSizeReduction = !!i2495[76]
  i2494.m_useMaxVisibleDescender = !!i2495[77]
  i2494.m_pageToDisplay = i2495[78]
  i2494.m_margin = new pc.Vec4( i2495[79], i2495[80], i2495[81], i2495[82] )
  i2494.m_isUsingLegacyAnimationComponent = !!i2495[83]
  i2494.m_isVolumetricText = !!i2495[84]
  i2494.m_Maskable = !!i2495[85]
  request.r(i2495[86], i2495[87], 0, i2494, 'm_Material')
  i2494.m_Color = new pc.Color(i2495[88], i2495[89], i2495[90], i2495[91])
  i2494.m_RaycastTarget = !!i2495[92]
  i2494.m_RaycastPadding = new pc.Vec4( i2495[93], i2495[94], i2495[95], i2495[96] )
  return i2494
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2502 = root || request.c( 'TMPro.VertexGradient' )
  var i2503 = data
  i2502.topLeft = new pc.Color(i2503[0], i2503[1], i2503[2], i2503[3])
  i2502.topRight = new pc.Color(i2503[4], i2503[5], i2503[6], i2503[7])
  i2502.bottomLeft = new pc.Color(i2503[8], i2503[9], i2503[10], i2503[11])
  i2502.bottomRight = new pc.Color(i2503[12], i2503[13], i2503[14], i2503[15])
  return i2502
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2504 = root || request.c( 'UnityEngine.UI.Button' )
  var i2505 = data
  i2504.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2505[0], i2504.m_OnClick)
  i2504.m_Navigation = request.d('UnityEngine.UI.Navigation', i2505[1], i2504.m_Navigation)
  i2504.m_Transition = i2505[2]
  i2504.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2505[3], i2504.m_Colors)
  i2504.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2505[4], i2504.m_SpriteState)
  i2504.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2505[5], i2504.m_AnimationTriggers)
  i2504.m_Interactable = !!i2505[6]
  request.r(i2505[7], i2505[8], 0, i2504, 'm_TargetGraphic')
  return i2504
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2506 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2507 = data
  i2506.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2507[0], i2506.m_PersistentCalls)
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

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2516 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2517 = data
  i2516.m_ShowMaskGraphic = !!i2517[0]
  return i2516
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2518 = root || request.c( 'AudioController' )
  var i2519 = data
  request.r(i2519[0], i2519[1], 0, i2518, 'bgmSource')
  request.r(i2519[2], i2519[3], 0, i2518, 'sfxSource')
  var i2521 = i2519[4]
  var i2520 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.add(request.d('AudioEntry', i2521[i + 0]));
  }
  i2518.audioEntries = i2520
  return i2518
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i2524 = root || request.c( 'AudioEntry' )
  var i2525 = data
  i2524.key = i2525[0]
  request.r(i2525[1], i2525[2], 0, i2524, 'clip')
  i2524.volume = i2525[3]
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2527 = data
  i2526.ambientIntensity = i2527[0]
  i2526.reflectionIntensity = i2527[1]
  i2526.ambientMode = i2527[2]
  i2526.ambientLight = new pc.Color(i2527[3], i2527[4], i2527[5], i2527[6])
  i2526.ambientSkyColor = new pc.Color(i2527[7], i2527[8], i2527[9], i2527[10])
  i2526.ambientGroundColor = new pc.Color(i2527[11], i2527[12], i2527[13], i2527[14])
  i2526.ambientEquatorColor = new pc.Color(i2527[15], i2527[16], i2527[17], i2527[18])
  i2526.fogColor = new pc.Color(i2527[19], i2527[20], i2527[21], i2527[22])
  i2526.fogEndDistance = i2527[23]
  i2526.fogStartDistance = i2527[24]
  i2526.fogDensity = i2527[25]
  i2526.fog = !!i2527[26]
  request.r(i2527[27], i2527[28], 0, i2526, 'skybox')
  i2526.fogMode = i2527[29]
  var i2529 = i2527[30]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2529[i + 0]) );
  }
  i2526.lightmaps = i2528
  i2526.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2527[31], i2526.lightProbes)
  i2526.lightmapsMode = i2527[32]
  i2526.mixedBakeMode = i2527[33]
  i2526.environmentLightingMode = i2527[34]
  i2526.ambientProbe = new pc.SphericalHarmonicsL2(i2527[35])
  i2526.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2527[36])
  i2526.useReferenceAmbientProbe = !!i2527[37]
  request.r(i2527[38], i2527[39], 0, i2526, 'customReflection')
  request.r(i2527[40], i2527[41], 0, i2526, 'defaultReflection')
  i2526.defaultReflectionMode = i2527[42]
  i2526.defaultReflectionResolution = i2527[43]
  i2526.sunLightObjectId = i2527[44]
  i2526.pixelLightCount = i2527[45]
  i2526.defaultReflectionHDR = !!i2527[46]
  i2526.hasLightDataAsset = !!i2527[47]
  i2526.hasManualGenerate = !!i2527[48]
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2533 = data
  request.r(i2533[0], i2533[1], 0, i2532, 'lightmapColor')
  request.r(i2533[2], i2533[3], 0, i2532, 'lightmapDirection')
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2534 = root || new UnityEngine.LightProbes()
  var i2535 = data
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2543 = data
  var i2545 = i2543[0]
  var i2544 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2545[i + 0]));
  }
  i2542.ShaderCompilationErrors = i2544
  i2542.name = i2543[1]
  i2542.guid = i2543[2]
  var i2547 = i2543[3]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 1) {
    i2546.push( i2547[i + 0] );
  }
  i2542.shaderDefinedKeywords = i2546
  var i2549 = i2543[4]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2549[i + 0]) );
  }
  i2542.passes = i2548
  var i2551 = i2543[5]
  var i2550 = []
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2551[i + 0]) );
  }
  i2542.usePasses = i2550
  var i2553 = i2543[6]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2553[i + 0]) );
  }
  i2542.defaultParameterValues = i2552
  request.r(i2543[7], i2543[8], 0, i2542, 'unityFallbackShader')
  i2542.readDepth = !!i2543[9]
  i2542.isCreatedByShaderGraph = !!i2543[10]
  i2542.disableBatching = !!i2543[11]
  i2542.compiled = !!i2543[12]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2557 = data
  i2556.shaderName = i2557[0]
  i2556.errorMessage = i2557[1]
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2560 = root || new pc.UnityShaderPass()
  var i2561 = data
  i2560.id = i2561[0]
  i2560.subShaderIndex = i2561[1]
  i2560.name = i2561[2]
  i2560.passType = i2561[3]
  i2560.grabPassTextureName = i2561[4]
  i2560.usePass = !!i2561[5]
  i2560.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2561[6], i2560.zTest)
  i2560.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2561[7], i2560.zWrite)
  i2560.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2561[8], i2560.culling)
  i2560.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2561[9], i2560.blending)
  i2560.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2561[10], i2560.alphaBlending)
  i2560.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2561[11], i2560.colorWriteMask)
  i2560.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2561[12], i2560.offsetUnits)
  i2560.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2561[13], i2560.offsetFactor)
  i2560.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2561[14], i2560.stencilRef)
  i2560.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2561[15], i2560.stencilReadMask)
  i2560.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2561[16], i2560.stencilWriteMask)
  i2560.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2561[17], i2560.stencilOp)
  i2560.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2561[18], i2560.stencilOpFront)
  i2560.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2561[19], i2560.stencilOpBack)
  var i2563 = i2561[20]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2563[i + 0]) );
  }
  i2560.tags = i2562
  var i2565 = i2561[21]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( i2565[i + 0] );
  }
  i2560.passDefinedKeywords = i2564
  var i2567 = i2561[22]
  var i2566 = []
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2567[i + 0]) );
  }
  i2560.passDefinedKeywordGroups = i2566
  var i2569 = i2561[23]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2569[i + 0]) );
  }
  i2560.variants = i2568
  var i2571 = i2561[24]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2571[i + 0]) );
  }
  i2560.excludedVariants = i2570
  i2560.hasDepthReader = !!i2561[25]
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2573 = data
  i2572.val = i2573[0]
  i2572.name = i2573[1]
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2575 = data
  i2574.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2575[0], i2574.src)
  i2574.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2575[1], i2574.dst)
  i2574.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2575[2], i2574.op)
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2577 = data
  i2576.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2577[0], i2576.pass)
  i2576.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2577[1], i2576.fail)
  i2576.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2577[2], i2576.zFail)
  i2576.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2577[3], i2576.comp)
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2581 = data
  i2580.name = i2581[0]
  i2580.value = i2581[1]
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2585 = data
  var i2587 = i2585[0]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( i2587[i + 0] );
  }
  i2584.keywords = i2586
  i2584.hasDiscard = !!i2585[1]
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2591 = data
  i2590.passId = i2591[0]
  i2590.subShaderIndex = i2591[1]
  var i2593 = i2591[2]
  var i2592 = []
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.push( i2593[i + 0] );
  }
  i2590.keywords = i2592
  i2590.vertexProgram = i2591[3]
  i2590.fragmentProgram = i2591[4]
  i2590.exportedForWebGl2 = !!i2591[5]
  i2590.readDepth = !!i2591[6]
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2597 = data
  request.r(i2597[0], i2597[1], 0, i2596, 'shader')
  i2596.pass = i2597[2]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2601 = data
  i2600.name = i2601[0]
  i2600.type = i2601[1]
  i2600.value = new pc.Vec4( i2601[2], i2601[3], i2601[4], i2601[5] )
  i2600.textureValue = i2601[6]
  i2600.shaderPropertyFlag = i2601[7]
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2603 = data
  i2602.name = i2603[0]
  request.r(i2603[1], i2603[2], 0, i2602, 'texture')
  i2602.aabb = i2603[3]
  i2602.vertices = i2603[4]
  i2602.triangles = i2603[5]
  i2602.textureRect = UnityEngine.Rect.MinMaxRect(i2603[6], i2603[7], i2603[8], i2603[9])
  i2602.packedRect = UnityEngine.Rect.MinMaxRect(i2603[10], i2603[11], i2603[12], i2603[13])
  i2602.border = new pc.Vec4( i2603[14], i2603[15], i2603[16], i2603[17] )
  i2602.transparency = i2603[18]
  i2602.bounds = i2603[19]
  i2602.pixelsPerUnit = i2603[20]
  i2602.textureWidth = i2603[21]
  i2602.textureHeight = i2603[22]
  i2602.nativeSize = new pc.Vec2( i2603[23], i2603[24] )
  i2602.pivot = new pc.Vec2( i2603[25], i2603[26] )
  i2602.textureRectOffset = new pc.Vec2( i2603[27], i2603[28] )
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2605 = data
  i2604.name = i2605[0]
  return i2604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2607 = data
  i2606.name = i2607[0]
  i2606.ascent = i2607[1]
  i2606.originalLineHeight = i2607[2]
  i2606.fontSize = i2607[3]
  var i2609 = i2607[4]
  var i2608 = []
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2609[i + 0]) );
  }
  i2606.characterInfo = i2608
  request.r(i2607[5], i2607[6], 0, i2606, 'texture')
  i2606.originalFontSize = i2607[7]
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2613 = data
  i2612.index = i2613[0]
  i2612.advance = i2613[1]
  i2612.bearing = i2613[2]
  i2612.glyphWidth = i2613[3]
  i2612.glyphHeight = i2613[4]
  i2612.minX = i2613[5]
  i2612.maxX = i2613[6]
  i2612.minY = i2613[7]
  i2612.maxY = i2613[8]
  i2612.uvBottomLeftX = i2613[9]
  i2612.uvBottomLeftY = i2613[10]
  i2612.uvBottomRightX = i2613[11]
  i2612.uvBottomRightY = i2613[12]
  i2612.uvTopLeftX = i2613[13]
  i2612.uvTopLeftY = i2613[14]
  i2612.uvTopRightX = i2613[15]
  i2612.uvTopRightY = i2613[16]
  return i2612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2615 = data
  i2614.name = i2615[0]
  i2614.bytes64 = i2615[1]
  i2614.data = i2615[2]
  return i2614
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2616 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2617 = data
  var i2619 = i2617[0]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 2) {
  request.r(i2619[i + 0], i2619[i + 1], 2, i2618, '')
  }
  i2616.atlasAssets = i2618
  i2616.scale = i2617[1]
  request.r(i2617[2], i2617[3], 0, i2616, 'skeletonJSON')
  i2616.isUpgradingBlendModeMaterials = !!i2617[4]
  i2616.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2617[5], i2616.blendModeMaterials)
  var i2621 = i2617[6]
  var i2620 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2621.length; i += 2) {
  request.r(i2621[i + 0], i2621[i + 1], 1, i2620, '')
  }
  i2616.skeletonDataModifiers = i2620
  var i2623 = i2617[7]
  var i2622 = []
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.push( i2623[i + 0] );
  }
  i2616.fromAnimation = i2622
  var i2625 = i2617[8]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.push( i2625[i + 0] );
  }
  i2616.toAnimation = i2624
  i2616.duration = i2617[9]
  i2616.defaultMix = i2617[10]
  request.r(i2617[11], i2617[12], 0, i2616, 'controller')
  return i2616
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2628 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2629 = data
  i2628.applyAdditiveMaterial = !!i2629[0]
  var i2631 = i2629[1]
  var i2630 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2631.length; i += 1) {
    i2630.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2631[i + 0]));
  }
  i2628.additiveMaterials = i2630
  var i2633 = i2629[2]
  var i2632 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2633[i + 0]));
  }
  i2628.multiplyMaterials = i2632
  var i2635 = i2629[3]
  var i2634 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2635[i + 0]));
  }
  i2628.screenMaterials = i2634
  i2628.requiresBlendModeMaterials = !!i2629[4]
  return i2628
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2638 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2639 = data
  i2638.pageName = i2639[0]
  request.r(i2639[1], i2639[2], 0, i2638, 'material')
  return i2638
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2642 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2643 = data
  request.r(i2643[0], i2643[1], 0, i2642, 'atlasFile')
  var i2645 = i2643[2]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 2) {
  request.r(i2645[i + 0], i2645[i + 1], 2, i2644, '')
  }
  i2642.materials = i2644
  i2642.textureLoadingMode = i2643[3]
  request.r(i2643[4], i2643[5], 0, i2642, 'onDemandTextureLoader')
  return i2642
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2646 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2647 = data
  request.r(i2647[0], i2647[1], 0, i2646, 'atlas')
  i2646.normalStyle = i2647[2]
  i2646.normalSpacingOffset = i2647[3]
  i2646.boldStyle = i2647[4]
  i2646.boldSpacing = i2647[5]
  i2646.italicStyle = i2647[6]
  i2646.tabSize = i2647[7]
  i2646.hashCode = i2647[8]
  request.r(i2647[9], i2647[10], 0, i2646, 'material')
  i2646.materialHashCode = i2647[11]
  i2646.m_Version = i2647[12]
  i2646.m_SourceFontFileGUID = i2647[13]
  request.r(i2647[14], i2647[15], 0, i2646, 'm_SourceFontFile_EditorRef')
  request.r(i2647[16], i2647[17], 0, i2646, 'm_SourceFontFile')
  i2646.m_AtlasPopulationMode = i2647[18]
  i2646.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2647[19], i2646.m_FaceInfo)
  var i2649 = i2647[20]
  var i2648 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.add(request.d('UnityEngine.TextCore.Glyph', i2649[i + 0]));
  }
  i2646.m_GlyphTable = i2648
  var i2651 = i2647[21]
  var i2650 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.add(request.d('TMPro.TMP_Character', i2651[i + 0]));
  }
  i2646.m_CharacterTable = i2650
  var i2653 = i2647[22]
  var i2652 = []
  for(var i = 0; i < i2653.length; i += 2) {
  request.r(i2653[i + 0], i2653[i + 1], 2, i2652, '')
  }
  i2646.m_AtlasTextures = i2652
  i2646.m_AtlasTextureIndex = i2647[23]
  i2646.m_IsMultiAtlasTexturesEnabled = !!i2647[24]
  i2646.m_ClearDynamicDataOnBuild = !!i2647[25]
  var i2655 = i2647[26]
  var i2654 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.add(request.d('UnityEngine.TextCore.GlyphRect', i2655[i + 0]));
  }
  i2646.m_UsedGlyphRects = i2654
  var i2657 = i2647[27]
  var i2656 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2657.length; i += 1) {
    i2656.add(request.d('UnityEngine.TextCore.GlyphRect', i2657[i + 0]));
  }
  i2646.m_FreeGlyphRects = i2656
  i2646.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2647[28], i2646.m_fontInfo)
  i2646.m_AtlasWidth = i2647[29]
  i2646.m_AtlasHeight = i2647[30]
  i2646.m_AtlasPadding = i2647[31]
  i2646.m_AtlasRenderMode = i2647[32]
  var i2659 = i2647[33]
  var i2658 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.add(request.d('TMPro.TMP_Glyph', i2659[i + 0]));
  }
  i2646.m_glyphInfoList = i2658
  i2646.m_KerningTable = request.d('TMPro.KerningTable', i2647[34], i2646.m_KerningTable)
  i2646.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2647[35], i2646.m_FontFeatureTable)
  var i2661 = i2647[36]
  var i2660 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2661.length; i += 2) {
  request.r(i2661[i + 0], i2661[i + 1], 1, i2660, '')
  }
  i2646.fallbackFontAssets = i2660
  var i2663 = i2647[37]
  var i2662 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2663.length; i += 2) {
  request.r(i2663[i + 0], i2663[i + 1], 1, i2662, '')
  }
  i2646.m_FallbackFontAssetTable = i2662
  i2646.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2647[38], i2646.m_CreationSettings)
  var i2665 = i2647[39]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.push( request.d('TMPro.TMP_FontWeightPair', i2665[i + 0]) );
  }
  i2646.m_FontWeightTable = i2664
  var i2667 = i2647[40]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.push( request.d('TMPro.TMP_FontWeightPair', i2667[i + 0]) );
  }
  i2646.fontWeights = i2666
  return i2646
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2668 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2669 = data
  i2668.m_FaceIndex = i2669[0]
  i2668.m_FamilyName = i2669[1]
  i2668.m_StyleName = i2669[2]
  i2668.m_PointSize = i2669[3]
  i2668.m_Scale = i2669[4]
  i2668.m_UnitsPerEM = i2669[5]
  i2668.m_LineHeight = i2669[6]
  i2668.m_AscentLine = i2669[7]
  i2668.m_CapLine = i2669[8]
  i2668.m_MeanLine = i2669[9]
  i2668.m_Baseline = i2669[10]
  i2668.m_DescentLine = i2669[11]
  i2668.m_SuperscriptOffset = i2669[12]
  i2668.m_SuperscriptSize = i2669[13]
  i2668.m_SubscriptOffset = i2669[14]
  i2668.m_SubscriptSize = i2669[15]
  i2668.m_UnderlineOffset = i2669[16]
  i2668.m_UnderlineThickness = i2669[17]
  i2668.m_StrikethroughOffset = i2669[18]
  i2668.m_StrikethroughThickness = i2669[19]
  i2668.m_TabWidth = i2669[20]
  return i2668
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2672 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2673 = data
  i2672.m_Index = i2673[0]
  i2672.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2673[1], i2672.m_Metrics)
  i2672.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2673[2], i2672.m_GlyphRect)
  i2672.m_Scale = i2673[3]
  i2672.m_AtlasIndex = i2673[4]
  i2672.m_ClassDefinitionType = i2673[5]
  return i2672
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2674 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2675 = data
  i2674.m_Width = i2675[0]
  i2674.m_Height = i2675[1]
  i2674.m_HorizontalBearingX = i2675[2]
  i2674.m_HorizontalBearingY = i2675[3]
  i2674.m_HorizontalAdvance = i2675[4]
  return i2674
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2676 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2677 = data
  i2676.m_X = i2677[0]
  i2676.m_Y = i2677[1]
  i2676.m_Width = i2677[2]
  i2676.m_Height = i2677[3]
  return i2676
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2680 = root || request.c( 'TMPro.TMP_Character' )
  var i2681 = data
  i2680.m_ElementType = i2681[0]
  i2680.m_Unicode = i2681[1]
  i2680.m_GlyphIndex = i2681[2]
  i2680.m_Scale = i2681[3]
  return i2680
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2686 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2687 = data
  i2686.Name = i2687[0]
  i2686.PointSize = i2687[1]
  i2686.Scale = i2687[2]
  i2686.CharacterCount = i2687[3]
  i2686.LineHeight = i2687[4]
  i2686.Baseline = i2687[5]
  i2686.Ascender = i2687[6]
  i2686.CapHeight = i2687[7]
  i2686.Descender = i2687[8]
  i2686.CenterLine = i2687[9]
  i2686.SuperscriptOffset = i2687[10]
  i2686.SubscriptOffset = i2687[11]
  i2686.SubSize = i2687[12]
  i2686.Underline = i2687[13]
  i2686.UnderlineThickness = i2687[14]
  i2686.strikethrough = i2687[15]
  i2686.strikethroughThickness = i2687[16]
  i2686.TabWidth = i2687[17]
  i2686.Padding = i2687[18]
  i2686.AtlasWidth = i2687[19]
  i2686.AtlasHeight = i2687[20]
  return i2686
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2690 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2691 = data
  i2690.id = i2691[0]
  i2690.x = i2691[1]
  i2690.y = i2691[2]
  i2690.width = i2691[3]
  i2690.height = i2691[4]
  i2690.xOffset = i2691[5]
  i2690.yOffset = i2691[6]
  i2690.xAdvance = i2691[7]
  i2690.scale = i2691[8]
  return i2690
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2692 = root || request.c( 'TMPro.KerningTable' )
  var i2693 = data
  var i2695 = i2693[0]
  var i2694 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.add(request.d('TMPro.KerningPair', i2695[i + 0]));
  }
  i2692.kerningPairs = i2694
  return i2692
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2698 = root || request.c( 'TMPro.KerningPair' )
  var i2699 = data
  i2698.xOffset = i2699[0]
  i2698.m_FirstGlyph = i2699[1]
  i2698.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2699[2], i2698.m_FirstGlyphAdjustments)
  i2698.m_SecondGlyph = i2699[3]
  i2698.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2699[4], i2698.m_SecondGlyphAdjustments)
  i2698.m_IgnoreSpacingAdjustments = !!i2699[5]
  return i2698
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2700 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2701 = data
  var i2703 = i2701[0]
  var i2702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2703[i + 0]));
  }
  i2700.m_GlyphPairAdjustmentRecords = i2702
  return i2700
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2706 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2707 = data
  i2706.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2707[0], i2706.m_FirstAdjustmentRecord)
  i2706.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2707[1], i2706.m_SecondAdjustmentRecord)
  i2706.m_FeatureLookupFlags = i2707[2]
  return i2706
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2710 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2711 = data
  i2710.sourceFontFileName = i2711[0]
  i2710.sourceFontFileGUID = i2711[1]
  i2710.pointSizeSamplingMode = i2711[2]
  i2710.pointSize = i2711[3]
  i2710.padding = i2711[4]
  i2710.packingMode = i2711[5]
  i2710.atlasWidth = i2711[6]
  i2710.atlasHeight = i2711[7]
  i2710.characterSetSelectionMode = i2711[8]
  i2710.characterSequence = i2711[9]
  i2710.referencedFontAssetGUID = i2711[10]
  i2710.referencedTextAssetGUID = i2711[11]
  i2710.fontStyle = i2711[12]
  i2710.fontStyleModifier = i2711[13]
  i2710.renderMode = i2711[14]
  i2710.includeFontFeatures = !!i2711[15]
  return i2710
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2714 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2715 = data
  request.r(i2715[0], i2715[1], 0, i2714, 'regularTypeface')
  request.r(i2715[2], i2715[3], 0, i2714, 'italicTypeface')
  return i2714
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2716 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2717 = data
  i2716.useSafeMode = !!i2717[0]
  i2716.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2717[1], i2716.safeModeOptions)
  i2716.timeScale = i2717[2]
  i2716.unscaledTimeScale = i2717[3]
  i2716.useSmoothDeltaTime = !!i2717[4]
  i2716.maxSmoothUnscaledTime = i2717[5]
  i2716.rewindCallbackMode = i2717[6]
  i2716.showUnityEditorReport = !!i2717[7]
  i2716.logBehaviour = i2717[8]
  i2716.drawGizmos = !!i2717[9]
  i2716.defaultRecyclable = !!i2717[10]
  i2716.defaultAutoPlay = i2717[11]
  i2716.defaultUpdateType = i2717[12]
  i2716.defaultTimeScaleIndependent = !!i2717[13]
  i2716.defaultEaseType = i2717[14]
  i2716.defaultEaseOvershootOrAmplitude = i2717[15]
  i2716.defaultEasePeriod = i2717[16]
  i2716.defaultAutoKill = !!i2717[17]
  i2716.defaultLoopType = i2717[18]
  i2716.debugMode = !!i2717[19]
  i2716.debugStoreTargetId = !!i2717[20]
  i2716.showPreviewPanel = !!i2717[21]
  i2716.storeSettingsLocation = i2717[22]
  i2716.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2717[23], i2716.modules)
  i2716.createASMDEF = !!i2717[24]
  i2716.showPlayingTweens = !!i2717[25]
  i2716.showPausedTweens = !!i2717[26]
  return i2716
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2718 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2719 = data
  i2718.logBehaviour = i2719[0]
  i2718.nestedTweenFailureBehaviour = i2719[1]
  return i2718
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2720 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2721 = data
  i2720.showPanel = !!i2721[0]
  i2720.audioEnabled = !!i2721[1]
  i2720.physicsEnabled = !!i2721[2]
  i2720.physics2DEnabled = !!i2721[3]
  i2720.spriteEnabled = !!i2721[4]
  i2720.uiEnabled = !!i2721[5]
  i2720.textMeshProEnabled = !!i2721[6]
  i2720.tk2DEnabled = !!i2721[7]
  i2720.deAudioEnabled = !!i2721[8]
  i2720.deUnityExtendedEnabled = !!i2721[9]
  i2720.epoOutlineEnabled = !!i2721[10]
  return i2720
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2722 = root || request.c( 'TMPro.TMP_Settings' )
  var i2723 = data
  i2722.m_enableWordWrapping = !!i2723[0]
  i2722.m_enableKerning = !!i2723[1]
  i2722.m_enableExtraPadding = !!i2723[2]
  i2722.m_enableTintAllSprites = !!i2723[3]
  i2722.m_enableParseEscapeCharacters = !!i2723[4]
  i2722.m_EnableRaycastTarget = !!i2723[5]
  i2722.m_GetFontFeaturesAtRuntime = !!i2723[6]
  i2722.m_missingGlyphCharacter = i2723[7]
  i2722.m_warningsDisabled = !!i2723[8]
  request.r(i2723[9], i2723[10], 0, i2722, 'm_defaultFontAsset')
  i2722.m_defaultFontAssetPath = i2723[11]
  i2722.m_defaultFontSize = i2723[12]
  i2722.m_defaultAutoSizeMinRatio = i2723[13]
  i2722.m_defaultAutoSizeMaxRatio = i2723[14]
  i2722.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2723[15], i2723[16] )
  i2722.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2723[17], i2723[18] )
  i2722.m_autoSizeTextContainer = !!i2723[19]
  i2722.m_IsTextObjectScaleStatic = !!i2723[20]
  var i2725 = i2723[21]
  var i2724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2725.length; i += 2) {
  request.r(i2725[i + 0], i2725[i + 1], 1, i2724, '')
  }
  i2722.m_fallbackFontAssets = i2724
  i2722.m_matchMaterialPreset = !!i2723[22]
  request.r(i2723[23], i2723[24], 0, i2722, 'm_defaultSpriteAsset')
  i2722.m_defaultSpriteAssetPath = i2723[25]
  i2722.m_enableEmojiSupport = !!i2723[26]
  i2722.m_MissingCharacterSpriteUnicode = i2723[27]
  i2722.m_defaultColorGradientPresetsPath = i2723[28]
  request.r(i2723[29], i2723[30], 0, i2722, 'm_defaultStyleSheet')
  i2722.m_StyleSheetsResourcePath = i2723[31]
  request.r(i2723[32], i2723[33], 0, i2722, 'm_leadingCharacters')
  request.r(i2723[34], i2723[35], 0, i2722, 'm_followingCharacters')
  i2722.m_UseModernHangulLineBreakingRules = !!i2723[36]
  return i2722
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2726 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2727 = data
  request.r(i2727[0], i2727[1], 0, i2726, 'spriteSheet')
  var i2729 = i2727[2]
  var i2728 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.add(request.d('TMPro.TMP_Sprite', i2729[i + 0]));
  }
  i2726.spriteInfoList = i2728
  var i2731 = i2727[3]
  var i2730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2731.length; i += 2) {
  request.r(i2731[i + 0], i2731[i + 1], 1, i2730, '')
  }
  i2726.fallbackSpriteAssets = i2730
  i2726.hashCode = i2727[4]
  request.r(i2727[5], i2727[6], 0, i2726, 'material')
  i2726.materialHashCode = i2727[7]
  i2726.m_Version = i2727[8]
  i2726.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2727[9], i2726.m_FaceInfo)
  var i2733 = i2727[10]
  var i2732 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.add(request.d('TMPro.TMP_SpriteCharacter', i2733[i + 0]));
  }
  i2726.m_SpriteCharacterTable = i2732
  var i2735 = i2727[11]
  var i2734 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.add(request.d('TMPro.TMP_SpriteGlyph', i2735[i + 0]));
  }
  i2726.m_SpriteGlyphTable = i2734
  return i2726
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2738 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2739 = data
  i2738.name = i2739[0]
  i2738.hashCode = i2739[1]
  i2738.unicode = i2739[2]
  i2738.pivot = new pc.Vec2( i2739[3], i2739[4] )
  request.r(i2739[5], i2739[6], 0, i2738, 'sprite')
  i2738.id = i2739[7]
  i2738.x = i2739[8]
  i2738.y = i2739[9]
  i2738.width = i2739[10]
  i2738.height = i2739[11]
  i2738.xOffset = i2739[12]
  i2738.yOffset = i2739[13]
  i2738.xAdvance = i2739[14]
  i2738.scale = i2739[15]
  return i2738
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2744 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2745 = data
  i2744.m_Name = i2745[0]
  i2744.m_HashCode = i2745[1]
  i2744.m_ElementType = i2745[2]
  i2744.m_Unicode = i2745[3]
  i2744.m_GlyphIndex = i2745[4]
  i2744.m_Scale = i2745[5]
  return i2744
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2748 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2749 = data
  request.r(i2749[0], i2749[1], 0, i2748, 'sprite')
  i2748.m_Index = i2749[2]
  i2748.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2749[3], i2748.m_Metrics)
  i2748.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2749[4], i2748.m_GlyphRect)
  i2748.m_Scale = i2749[5]
  i2748.m_AtlasIndex = i2749[6]
  i2748.m_ClassDefinitionType = i2749[7]
  return i2748
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2750 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2751 = data
  var i2753 = i2751[0]
  var i2752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.add(request.d('TMPro.TMP_Style', i2753[i + 0]));
  }
  i2750.m_StyleList = i2752
  return i2750
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2756 = root || request.c( 'TMPro.TMP_Style' )
  var i2757 = data
  i2756.m_Name = i2757[0]
  i2756.m_HashCode = i2757[1]
  i2756.m_OpeningDefinition = i2757[2]
  i2756.m_ClosingDefinition = i2757[3]
  i2756.m_OpeningTagArray = i2757[4]
  i2756.m_ClosingTagArray = i2757[5]
  i2756.m_OpeningTagUnicodeArray = i2757[6]
  i2756.m_ClosingTagUnicodeArray = i2757[7]
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2759 = data
  var i2761 = i2759[0]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2761[i + 0]) );
  }
  i2758.files = i2760
  i2758.componentToPrefabIds = i2759[1]
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2765 = data
  i2764.path = i2765[0]
  request.r(i2765[1], i2765[2], 0, i2764, 'unityObject')
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2767 = data
  var i2769 = i2767[0]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2769[i + 0]) );
  }
  i2766.scriptsExecutionOrder = i2768
  var i2771 = i2767[1]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2771[i + 0]) );
  }
  i2766.sortingLayers = i2770
  var i2773 = i2767[2]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2773[i + 0]) );
  }
  i2766.cullingLayers = i2772
  i2766.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2767[3], i2766.timeSettings)
  i2766.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2767[4], i2766.physicsSettings)
  i2766.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2767[5], i2766.physics2DSettings)
  i2766.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2767[6], i2766.qualitySettings)
  i2766.enableRealtimeShadows = !!i2767[7]
  i2766.enableAutoInstancing = !!i2767[8]
  i2766.enableStaticBatching = !!i2767[9]
  i2766.enableDynamicBatching = !!i2767[10]
  i2766.lightmapEncodingQuality = i2767[11]
  i2766.desiredColorSpace = i2767[12]
  var i2775 = i2767[13]
  var i2774 = []
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.push( i2775[i + 0] );
  }
  i2766.allTags = i2774
  return i2766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2779 = data
  i2778.name = i2779[0]
  i2778.value = i2779[1]
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2783 = data
  i2782.id = i2783[0]
  i2782.name = i2783[1]
  i2782.value = i2783[2]
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2787 = data
  i2786.id = i2787[0]
  i2786.name = i2787[1]
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2789 = data
  i2788.fixedDeltaTime = i2789[0]
  i2788.maximumDeltaTime = i2789[1]
  i2788.timeScale = i2789[2]
  i2788.maximumParticleTimestep = i2789[3]
  return i2788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2791 = data
  i2790.gravity = new pc.Vec3( i2791[0], i2791[1], i2791[2] )
  i2790.defaultSolverIterations = i2791[3]
  i2790.bounceThreshold = i2791[4]
  i2790.autoSyncTransforms = !!i2791[5]
  i2790.autoSimulation = !!i2791[6]
  var i2793 = i2791[7]
  var i2792 = []
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2793[i + 0]) );
  }
  i2790.collisionMatrix = i2792
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2797 = data
  i2796.enabled = !!i2797[0]
  i2796.layerId = i2797[1]
  i2796.otherLayerId = i2797[2]
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2799 = data
  request.r(i2799[0], i2799[1], 0, i2798, 'material')
  i2798.gravity = new pc.Vec2( i2799[2], i2799[3] )
  i2798.positionIterations = i2799[4]
  i2798.velocityIterations = i2799[5]
  i2798.velocityThreshold = i2799[6]
  i2798.maxLinearCorrection = i2799[7]
  i2798.maxAngularCorrection = i2799[8]
  i2798.maxTranslationSpeed = i2799[9]
  i2798.maxRotationSpeed = i2799[10]
  i2798.baumgarteScale = i2799[11]
  i2798.baumgarteTOIScale = i2799[12]
  i2798.timeToSleep = i2799[13]
  i2798.linearSleepTolerance = i2799[14]
  i2798.angularSleepTolerance = i2799[15]
  i2798.defaultContactOffset = i2799[16]
  i2798.autoSimulation = !!i2799[17]
  i2798.queriesHitTriggers = !!i2799[18]
  i2798.queriesStartInColliders = !!i2799[19]
  i2798.callbacksOnDisable = !!i2799[20]
  i2798.reuseCollisionCallbacks = !!i2799[21]
  i2798.autoSyncTransforms = !!i2799[22]
  var i2801 = i2799[23]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2801[i + 0]) );
  }
  i2798.collisionMatrix = i2800
  return i2798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2805 = data
  i2804.enabled = !!i2805[0]
  i2804.layerId = i2805[1]
  i2804.otherLayerId = i2805[2]
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2807 = data
  var i2809 = i2807[0]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2809[i + 0]) );
  }
  i2806.qualityLevels = i2808
  var i2811 = i2807[1]
  var i2810 = []
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.push( i2811[i + 0] );
  }
  i2806.names = i2810
  i2806.shadows = i2807[2]
  i2806.anisotropicFiltering = i2807[3]
  i2806.antiAliasing = i2807[4]
  i2806.lodBias = i2807[5]
  i2806.shadowCascades = i2807[6]
  i2806.shadowDistance = i2807[7]
  i2806.shadowmaskMode = i2807[8]
  i2806.shadowProjection = i2807[9]
  i2806.shadowResolution = i2807[10]
  i2806.softParticles = !!i2807[11]
  i2806.softVegetation = !!i2807[12]
  i2806.activeColorSpace = i2807[13]
  i2806.desiredColorSpace = i2807[14]
  i2806.masterTextureLimit = i2807[15]
  i2806.maxQueuedFrames = i2807[16]
  i2806.particleRaycastBudget = i2807[17]
  i2806.pixelLightCount = i2807[18]
  i2806.realtimeReflectionProbes = !!i2807[19]
  i2806.shadowCascade2Split = i2807[20]
  i2806.shadowCascade4Split = new pc.Vec3( i2807[21], i2807[22], i2807[23] )
  i2806.streamingMipmapsActive = !!i2807[24]
  i2806.vSyncCount = i2807[25]
  i2806.asyncUploadBufferSize = i2807[26]
  i2806.asyncUploadTimeSlice = i2807[27]
  i2806.billboardsFaceCameraPosition = !!i2807[28]
  i2806.shadowNearPlaneOffset = i2807[29]
  i2806.streamingMipmapsMemoryBudget = i2807[30]
  i2806.maximumLODLevel = i2807[31]
  i2806.streamingMipmapsAddAllCameras = !!i2807[32]
  i2806.streamingMipmapsMaxLevelReduction = i2807[33]
  i2806.streamingMipmapsRenderersPerFrame = i2807[34]
  i2806.resolutionScalingFixedDPIFactor = i2807[35]
  i2806.streamingMipmapsMaxFileIORequests = i2807[36]
  i2806.currentQualityLevel = i2807[37]
  return i2806
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2814 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2815 = data
  i2814.xPlacement = i2815[0]
  i2814.yPlacement = i2815[1]
  i2814.xAdvance = i2815[2]
  i2814.yAdvance = i2815[3]
  return i2814
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2816 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2817 = data
  i2816.m_GlyphIndex = i2817[0]
  i2816.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2817[1], i2816.m_GlyphValueRecord)
  return i2816
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2818 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2819 = data
  i2818.m_XPlacement = i2819[0]
  i2818.m_YPlacement = i2819[1]
  i2818.m_XAdvance = i2819[2]
  i2818.m_YAdvance = i2819[3]
  return i2818
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[3],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[52],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[3],"74":[75],"76":[77],"78":[77],"9":[8],"79":[80],"81":[82],"83":[80],"84":[8],"85":[8],"11":[9],"18":[19,8],"86":[8],"10":[9],"87":[8],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"32":[8],"94":[8],"16":[19,8],"95":[8],"96":[8],"97":[8],"98":[8],"99":[19,8],"100":[8],"101":[6],"102":[6],"7":[6],"103":[6],"104":[3],"105":[3],"106":[107],"108":[3],"109":[110],"111":[8],"112":[19,8],"113":[75],"24":[19,8],"114":[115,75],"116":[75],"117":[75,118],"119":[52],"120":[60],"121":[110],"122":[123],"124":[8],"125":[75,8],"17":[8,19],"126":[8],"127":[19,8],"128":[75],"129":[19,8],"130":[8],"131":[80]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","DropZone","UnityEngine.PolygonCollider2D","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.Sprite","DG.Tweening.DOTweenAnimation","DraggableItem","UnityEngine.CanvasGroup","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "202.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BTTP_V08_ManhND_AnhPD";

Deserializers.lunaAppID = "36041";

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

Deserializers.buildID = "16cdcc16-49d8-4f76-be7e-0160c117bd02";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

