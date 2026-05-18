var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2320 = root || request.c( 'UnityEngine.JointSpring' )
  var i2321 = data
  i2320.spring = i2321[0]
  i2320.damper = i2321[1]
  i2320.targetPosition = i2321[2]
  return i2320
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2322 = root || request.c( 'UnityEngine.JointMotor' )
  var i2323 = data
  i2322.m_TargetVelocity = i2323[0]
  i2322.m_Force = i2323[1]
  i2322.m_FreeSpin = i2323[2]
  return i2322
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.JointLimits' )
  var i2325 = data
  i2324.m_Min = i2325[0]
  i2324.m_Max = i2325[1]
  i2324.m_Bounciness = i2325[2]
  i2324.m_BounceMinVelocity = i2325[3]
  i2324.m_ContactDistance = i2325[4]
  i2324.minBounce = i2325[5]
  i2324.maxBounce = i2325[6]
  return i2324
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.JointDrive' )
  var i2327 = data
  i2326.m_PositionSpring = i2327[0]
  i2326.m_PositionDamper = i2327[1]
  i2326.m_MaximumForce = i2327[2]
  i2326.m_UseAcceleration = i2327[3]
  return i2326
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2329 = data
  i2328.m_Spring = i2329[0]
  i2328.m_Damper = i2329[1]
  return i2328
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2331 = data
  i2330.m_Limit = i2331[0]
  i2330.m_Bounciness = i2331[1]
  i2330.m_ContactDistance = i2331[2]
  return i2330
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2333 = data
  i2332.m_ExtremumSlip = i2333[0]
  i2332.m_ExtremumValue = i2333[1]
  i2332.m_AsymptoteSlip = i2333[2]
  i2332.m_AsymptoteValue = i2333[3]
  i2332.m_Stiffness = i2333[4]
  return i2332
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2335 = data
  i2334.m_LowerAngle = i2335[0]
  i2334.m_UpperAngle = i2335[1]
  return i2334
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2336 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2337 = data
  i2336.m_MotorSpeed = i2337[0]
  i2336.m_MaximumMotorTorque = i2337[1]
  return i2336
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2339 = data
  i2338.m_DampingRatio = i2339[0]
  i2338.m_Frequency = i2339[1]
  i2338.m_Angle = i2339[2]
  return i2338
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2340 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2341 = data
  i2340.m_LowerTranslation = i2341[0]
  i2340.m_UpperTranslation = i2341[1]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2343 = data
  i2342.name = i2343[0]
  i2342.width = i2343[1]
  i2342.height = i2343[2]
  i2342.mipmapCount = i2343[3]
  i2342.anisoLevel = i2343[4]
  i2342.filterMode = i2343[5]
  i2342.hdr = !!i2343[6]
  i2342.format = i2343[7]
  i2342.wrapMode = i2343[8]
  i2342.alphaIsTransparency = !!i2343[9]
  i2342.alphaSource = i2343[10]
  i2342.graphicsFormat = i2343[11]
  i2342.sRGBTexture = !!i2343[12]
  i2342.desiredColorSpace = i2343[13]
  i2342.wrapU = i2343[14]
  i2342.wrapV = i2343[15]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2344 = root || new pc.UnityMaterial()
  var i2345 = data
  i2344.name = i2345[0]
  request.r(i2345[1], i2345[2], 0, i2344, 'shader')
  i2344.renderQueue = i2345[3]
  i2344.enableInstancing = !!i2345[4]
  var i2347 = i2345[5]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2347[i + 0]) );
  }
  i2344.floatParameters = i2346
  var i2349 = i2345[6]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2349[i + 0]) );
  }
  i2344.colorParameters = i2348
  var i2351 = i2345[7]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2351[i + 0]) );
  }
  i2344.vectorParameters = i2350
  var i2353 = i2345[8]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2353[i + 0]) );
  }
  i2344.textureParameters = i2352
  var i2355 = i2345[9]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2355[i + 0]) );
  }
  i2344.materialFlags = i2354
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2359 = data
  i2358.name = i2359[0]
  i2358.value = i2359[1]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2363 = data
  i2362.name = i2363[0]
  i2362.value = new pc.Color(i2363[1], i2363[2], i2363[3], i2363[4])
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2367 = data
  i2366.name = i2367[0]
  i2366.value = new pc.Vec4( i2367[1], i2367[2], i2367[3], i2367[4] )
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2371 = data
  i2370.name = i2371[0]
  request.r(i2371[1], i2371[2], 0, i2370, 'value')
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2375 = data
  i2374.name = i2375[0]
  i2374.enabled = !!i2375[1]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2377 = data
  i2376.name = i2377[0]
  i2376.index = i2377[1]
  i2376.startup = !!i2377[2]
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2379 = data
  i2378.position = new pc.Vec3( i2379[0], i2379[1], i2379[2] )
  i2378.scale = new pc.Vec3( i2379[3], i2379[4], i2379[5] )
  i2378.rotation = new pc.Quat(i2379[6], i2379[7], i2379[8], i2379[9])
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2381 = data
  i2380.aspect = i2381[0]
  i2380.orthographic = !!i2381[1]
  i2380.orthographicSize = i2381[2]
  i2380.backgroundColor = new pc.Color(i2381[3], i2381[4], i2381[5], i2381[6])
  i2380.nearClipPlane = i2381[7]
  i2380.farClipPlane = i2381[8]
  i2380.fieldOfView = i2381[9]
  i2380.depth = i2381[10]
  i2380.clearFlags = i2381[11]
  i2380.cullingMask = i2381[12]
  i2380.rect = i2381[13]
  request.r(i2381[14], i2381[15], 0, i2380, 'targetTexture')
  i2380.usePhysicalProperties = !!i2381[16]
  i2380.focalLength = i2381[17]
  i2380.sensorSize = new pc.Vec2( i2381[18], i2381[19] )
  i2380.lensShift = new pc.Vec2( i2381[20], i2381[21] )
  i2380.gateFit = i2381[22]
  i2380.commandBufferCount = i2381[23]
  i2380.cameraType = i2381[24]
  i2380.enabled = !!i2381[25]
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2383 = data
  i2382.name = i2383[0]
  i2382.tagId = i2383[1]
  i2382.enabled = !!i2383[2]
  i2382.isStatic = !!i2383[3]
  i2382.layer = i2383[4]
  return i2382
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2384 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2385 = data
  request.r(i2385[0], i2385[1], 0, i2384, 'm_FirstSelected')
  i2384.m_sendNavigationEvents = !!i2385[2]
  i2384.m_DragThreshold = i2385[3]
  return i2384
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2386 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2387 = data
  i2386.m_HorizontalAxis = i2387[0]
  i2386.m_VerticalAxis = i2387[1]
  i2386.m_SubmitButton = i2387[2]
  i2386.m_CancelButton = i2387[3]
  i2386.m_InputActionsPerSecond = i2387[4]
  i2386.m_RepeatDelay = i2387[5]
  i2386.m_ForceModuleActive = !!i2387[6]
  i2386.m_SendPointerHoverToParent = !!i2387[7]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2389 = data
  i2388.pivot = new pc.Vec2( i2389[0], i2389[1] )
  i2388.anchorMin = new pc.Vec2( i2389[2], i2389[3] )
  i2388.anchorMax = new pc.Vec2( i2389[4], i2389[5] )
  i2388.sizeDelta = new pc.Vec2( i2389[6], i2389[7] )
  i2388.anchoredPosition3D = new pc.Vec3( i2389[8], i2389[9], i2389[10] )
  i2388.rotation = new pc.Quat(i2389[11], i2389[12], i2389[13], i2389[14])
  i2388.scale = new pc.Vec3( i2389[15], i2389[16], i2389[17] )
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2391 = data
  i2390.planeDistance = i2391[0]
  i2390.referencePixelsPerUnit = i2391[1]
  i2390.isFallbackOverlay = !!i2391[2]
  i2390.renderMode = i2391[3]
  i2390.renderOrder = i2391[4]
  i2390.sortingLayerName = i2391[5]
  i2390.sortingOrder = i2391[6]
  i2390.scaleFactor = i2391[7]
  request.r(i2391[8], i2391[9], 0, i2390, 'worldCamera')
  i2390.overrideSorting = !!i2391[10]
  i2390.pixelPerfect = !!i2391[11]
  i2390.targetDisplay = i2391[12]
  i2390.overridePixelPerfect = !!i2391[13]
  i2390.enabled = !!i2391[14]
  return i2390
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2392 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2393 = data
  i2392.m_UiScaleMode = i2393[0]
  i2392.m_ReferencePixelsPerUnit = i2393[1]
  i2392.m_ScaleFactor = i2393[2]
  i2392.m_ReferenceResolution = new pc.Vec2( i2393[3], i2393[4] )
  i2392.m_ScreenMatchMode = i2393[5]
  i2392.m_MatchWidthOrHeight = i2393[6]
  i2392.m_PhysicalUnit = i2393[7]
  i2392.m_FallbackScreenDPI = i2393[8]
  i2392.m_DefaultSpriteDPI = i2393[9]
  i2392.m_DynamicPixelsPerUnit = i2393[10]
  i2392.m_PresetInfoIsWorld = !!i2393[11]
  return i2392
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2394 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2395 = data
  i2394.m_IgnoreReversedGraphics = !!i2395[0]
  i2394.m_BlockingObjects = i2395[1]
  i2394.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2395[2] )
  return i2394
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i2396 = root || request.c( 'LunaManager' )
  var i2397 = data
  var i2399 = i2397[0]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 2) {
  request.r(i2399[i + 0], i2399[i + 1], 2, i2398, '')
  }
  i2396.lstBtnInstall = i2398
  request.r(i2397[1], i2397[2], 0, i2396, 'WinGO')
  request.r(i2397[3], i2397[4], 0, i2396, 'LoseGO')
  request.r(i2397[5], i2397[6], 0, i2396, 'StartCard')
  request.r(i2397[7], i2397[8], 0, i2396, 'EndCard')
  request.r(i2397[9], i2397[10], 0, i2396, 'Parent')
  i2396.isDrag = !!i2397[11]
  i2396.timeDrag = i2397[12]
  i2396.countPlay = i2397[13]
  i2396.countPlayFinal = i2397[14]
  i2396.countPlayMax = i2397[15]
  i2396.timeDropFinal = i2397[16]
  i2396.colorBG = new pc.Color(i2397[17], i2397[18], i2397[19], i2397[20])
  request.r(i2397[21], i2397[22], 0, i2396, 'texture2D')
  request.r(i2397[23], i2397[24], 0, i2396, 'rawImageBG')
  request.r(i2397[25], i2397[26], 0, i2396, 'textProgess')
  request.r(i2397[27], i2397[28], 0, i2396, 'imgProgess')
  request.r(i2397[29], i2397[30], 0, i2396, 'timeText')
  return i2396
}

Deserializers["LeftOrRight"] = function (request, data, root) {
  var i2402 = root || request.c( 'LeftOrRight' )
  var i2403 = data
  request.r(i2403[0], i2403[1], 0, i2402, 'mixSkeletonSkin')
  request.r(i2403[2], i2403[3], 0, i2402, 'player')
  request.r(i2403[4], i2403[5], 0, i2402, 'leftButton')
  request.r(i2403[6], i2403[7], 0, i2402, 'rightButton')
  i2402.leftPosition = new pc.Vec3( i2403[8], i2403[9], i2403[10] )
  i2402.rightPosition = new pc.Vec3( i2403[11], i2403[12], i2403[13] )
  i2402.useTween = !!i2403[14]
  i2402.moveDuration = i2403[15]
  i2402.moveEase = i2403[16]
  var i2405 = i2403[17]
  var i2404 = new (System.Collections.Generic.List$1(Bridge.ns('LeftOrRight+StepData')))
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.add(request.d('LeftOrRight+StepData', i2405[i + 0]));
  }
  i2402.steps = i2404
  i2402.playStepsOnEnable = !!i2403[18]
  i2402.hideInactiveSteps = !!i2403[19]
  i2402.stepTopLocalPosition = new pc.Vec3( i2403[20], i2403[21], i2403[22] )
  i2402.stepBottomLocalPosition = new pc.Vec3( i2403[23], i2403[24], i2403[25] )
  i2402.stepMoveDuration = i2403[26]
  i2402.stepMoveEase = i2403[27]
  i2402.stepStartScale = new pc.Vec3( i2403[28], i2403[29], i2403[30] )
  i2402.stepEndScale = new pc.Vec3( i2403[31], i2403[32], i2403[33] )
  i2402.onStepReachedBottom = request.d('UnityEngine.Events.UnityEvent`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2403[34], i2402.onStepReachedBottom)
  i2402.isLeft = !!i2403[35]
  i2402.selectedSide = i2403[36]
  i2402.currentStepIndex = i2403[37]
  return i2402
}

Deserializers["LeftOrRight+StepData"] = function (request, data, root) {
  var i2408 = root || request.c( 'LeftOrRight+StepData' )
  var i2409 = data
  request.r(i2409[0], i2409[1], 0, i2408, 'stepTransform')
  request.r(i2409[2], i2409[3], 0, i2408, 'choice1Object')
  request.r(i2409[4], i2409[5], 0, i2408, 'choice2Object')
  return i2408
}

Deserializers["UnityEngine.Events.UnityEvent`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2410 = root || new (UnityEngine.Events.UnityEvent$1( Bridge.ns( 'System.Int32' ) ))
  var i2411 = data
  i2410.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2411[0], i2410.m_PersistentCalls)
  return i2410
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2412 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2413 = data
  var i2415 = i2413[0]
  var i2414 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.add(request.d('UnityEngine.Events.PersistentCall', i2415[i + 0]));
  }
  i2412.m_Calls = i2414
  return i2412
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2418 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2419 = data
  request.r(i2419[0], i2419[1], 0, i2418, 'm_Target')
  i2418.m_TargetAssemblyTypeName = i2419[2]
  i2418.m_MethodName = i2419[3]
  i2418.m_Mode = i2419[4]
  i2418.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2419[5], i2418.m_Arguments)
  i2418.m_CallState = i2419[6]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2421 = data
  i2420.cullTransparentMesh = !!i2421[0]
  return i2420
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2422 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2423 = data
  request.r(i2423[0], i2423[1], 0, i2422, 'm_Texture')
  i2422.m_UVRect = UnityEngine.Rect.MinMaxRect(i2423[2], i2423[3], i2423[4], i2423[5])
  i2422.m_Maskable = !!i2423[6]
  request.r(i2423[7], i2423[8], 0, i2422, 'm_Material')
  i2422.m_Color = new pc.Color(i2423[9], i2423[10], i2423[11], i2423[12])
  i2422.m_RaycastTarget = !!i2423[13]
  i2422.m_RaycastPadding = new pc.Vec4( i2423[14], i2423[15], i2423[16], i2423[17] )
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2425 = data
  request.r(i2425[0], i2425[1], 0, i2424, 'clip')
  request.r(i2425[2], i2425[3], 0, i2424, 'outputAudioMixerGroup')
  i2424.playOnAwake = !!i2425[4]
  i2424.loop = !!i2425[5]
  i2424.time = i2425[6]
  i2424.volume = i2425[7]
  i2424.pitch = i2425[8]
  i2424.enabled = !!i2425[9]
  return i2424
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2426 = root || request.c( 'UnityEngine.UI.Image' )
  var i2427 = data
  request.r(i2427[0], i2427[1], 0, i2426, 'm_Sprite')
  i2426.m_Type = i2427[2]
  i2426.m_PreserveAspect = !!i2427[3]
  i2426.m_FillCenter = !!i2427[4]
  i2426.m_FillMethod = i2427[5]
  i2426.m_FillAmount = i2427[6]
  i2426.m_FillClockwise = !!i2427[7]
  i2426.m_FillOrigin = i2427[8]
  i2426.m_UseSpriteMesh = !!i2427[9]
  i2426.m_PixelsPerUnitMultiplier = i2427[10]
  i2426.m_Maskable = !!i2427[11]
  request.r(i2427[12], i2427[13], 0, i2426, 'm_Material')
  i2426.m_Color = new pc.Color(i2427[14], i2427[15], i2427[16], i2427[17])
  i2426.m_RaycastTarget = !!i2427[18]
  i2426.m_RaycastPadding = new pc.Vec4( i2427[19], i2427[20], i2427[21], i2427[22] )
  return i2426
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2428 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2429 = data
  i2428.m_ShowMaskGraphic = !!i2429[0]
  return i2428
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2430 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2431 = data
  request.r(i2431[0], i2431[1], 0, i2430, 'skeletonDataAsset')
  request.r(i2431[2], i2431[3], 0, i2430, 'additiveMaterial')
  request.r(i2431[4], i2431[5], 0, i2430, 'multiplyMaterial')
  request.r(i2431[6], i2431[7], 0, i2430, 'screenMaterial')
  i2430.initialSkinName = i2431[8]
  i2430.initialFlipX = !!i2431[9]
  i2430.initialFlipY = !!i2431[10]
  i2430.startingAnimation = i2431[11]
  i2430.startingLoop = !!i2431[12]
  i2430.timeScale = i2431[13]
  i2430.freeze = !!i2431[14]
  i2430.layoutScaleMode = i2431[15]
  i2430.updateWhenInvisible = i2431[16]
  i2430.allowMultipleCanvasRenderers = !!i2431[17]
  var i2433 = i2431[18]
  var i2432 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2433.length; i += 2) {
  request.r(i2433[i + 0], i2433[i + 1], 1, i2432, '')
  }
  i2430.canvasRenderers = i2432
  i2430.enableSeparatorSlots = !!i2431[19]
  i2430.updateSeparatorPartLocation = !!i2431[20]
  i2430.updateSeparatorPartScale = !!i2431[21]
  i2430.disableMeshAssignmentOnOverride = !!i2431[22]
  i2430.referenceSize = new pc.Vec2( i2431[23], i2431[24] )
  i2430.referenceScale = i2431[25]
  i2430.rectTransformSize = new pc.Vec2( i2431[26], i2431[27] )
  i2430.editReferenceRect = !!i2431[28]
  var i2435 = i2431[29]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( i2435[i + 0] );
  }
  i2430.separatorSlotNames = i2434
  var i2437 = i2431[30]
  var i2436 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2437.length; i += 2) {
  request.r(i2437[i + 0], i2437[i + 1], 1, i2436, '')
  }
  i2430.separatorParts = i2436
  i2430.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2431[31], i2430.meshGenerator)
  i2430.updateTiming = i2431[32]
  i2430.unscaledTime = !!i2431[33]
  i2430.m_Maskable = !!i2431[34]
  request.r(i2431[35], i2431[36], 0, i2430, 'm_Material')
  i2430.m_Color = new pc.Color(i2431[37], i2431[38], i2431[39], i2431[40])
  i2430.m_RaycastTarget = !!i2431[41]
  i2430.m_RaycastPadding = new pc.Vec4( i2431[42], i2431[43], i2431[44], i2431[45] )
  return i2430
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2444 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2445 = data
  i2444.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2445[0], i2444.settings)
  return i2444
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2446 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2447 = data
  i2446.useClipping = !!i2447[0]
  i2446.zSpacing = i2447[1]
  i2446.pmaVertexColors = !!i2447[2]
  i2446.tintBlack = !!i2447[3]
  i2446.canvasGroupTintBlack = !!i2447[4]
  i2446.calculateTangents = !!i2447[5]
  i2446.addNormals = !!i2447[6]
  i2446.immutableTriangles = !!i2447[7]
  return i2446
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i2448 = root || request.c( 'MixSkeletonSkin' )
  var i2449 = data
  request.r(i2449[0], i2449[1], 0, i2448, 'skeletonAnimation')
  var i2451 = i2449[2]
  var i2450 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.add(i2451[i + 0]);
  }
  i2448.skinNames = i2450
  i2448.defaultAnim = i2449[3]
  i2448.isAwake = !!i2449[4]
  return i2448
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2454 = root || request.c( 'UnityEngine.UI.Button' )
  var i2455 = data
  i2454.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2455[0], i2454.m_OnClick)
  i2454.m_Navigation = request.d('UnityEngine.UI.Navigation', i2455[1], i2454.m_Navigation)
  i2454.m_Transition = i2455[2]
  i2454.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2455[3], i2454.m_Colors)
  i2454.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2455[4], i2454.m_SpriteState)
  i2454.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2455[5], i2454.m_AnimationTriggers)
  i2454.m_Interactable = !!i2455[6]
  request.r(i2455[7], i2455[8], 0, i2454, 'm_TargetGraphic')
  return i2454
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2456 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2457 = data
  i2456.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2457[0], i2456.m_PersistentCalls)
  return i2456
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2458 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2459 = data
  i2458.m_Mode = i2459[0]
  i2458.m_WrapAround = !!i2459[1]
  request.r(i2459[2], i2459[3], 0, i2458, 'm_SelectOnUp')
  request.r(i2459[4], i2459[5], 0, i2458, 'm_SelectOnDown')
  request.r(i2459[6], i2459[7], 0, i2458, 'm_SelectOnLeft')
  request.r(i2459[8], i2459[9], 0, i2458, 'm_SelectOnRight')
  return i2458
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2460 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2461 = data
  i2460.m_NormalColor = new pc.Color(i2461[0], i2461[1], i2461[2], i2461[3])
  i2460.m_HighlightedColor = new pc.Color(i2461[4], i2461[5], i2461[6], i2461[7])
  i2460.m_PressedColor = new pc.Color(i2461[8], i2461[9], i2461[10], i2461[11])
  i2460.m_SelectedColor = new pc.Color(i2461[12], i2461[13], i2461[14], i2461[15])
  i2460.m_DisabledColor = new pc.Color(i2461[16], i2461[17], i2461[18], i2461[19])
  i2460.m_ColorMultiplier = i2461[20]
  i2460.m_FadeDuration = i2461[21]
  return i2460
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2462 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2463 = data
  request.r(i2463[0], i2463[1], 0, i2462, 'm_HighlightedSprite')
  request.r(i2463[2], i2463[3], 0, i2462, 'm_PressedSprite')
  request.r(i2463[4], i2463[5], 0, i2462, 'm_SelectedSprite')
  request.r(i2463[6], i2463[7], 0, i2462, 'm_DisabledSprite')
  return i2462
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2464 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2465 = data
  i2464.m_NormalTrigger = i2465[0]
  i2464.m_HighlightedTrigger = i2465[1]
  i2464.m_PressedTrigger = i2465[2]
  i2464.m_SelectedTrigger = i2465[3]
  i2464.m_DisabledTrigger = i2465[4]
  return i2464
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2466 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2467 = data
  i2466.m_hasFontAssetChanged = !!i2467[0]
  request.r(i2467[1], i2467[2], 0, i2466, 'm_baseMaterial')
  i2466.m_maskOffset = new pc.Vec4( i2467[3], i2467[4], i2467[5], i2467[6] )
  i2466.m_text = i2467[7]
  i2466.m_isRightToLeft = !!i2467[8]
  request.r(i2467[9], i2467[10], 0, i2466, 'm_fontAsset')
  request.r(i2467[11], i2467[12], 0, i2466, 'm_sharedMaterial')
  var i2469 = i2467[13]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 2) {
  request.r(i2469[i + 0], i2469[i + 1], 2, i2468, '')
  }
  i2466.m_fontSharedMaterials = i2468
  request.r(i2467[14], i2467[15], 0, i2466, 'm_fontMaterial')
  var i2471 = i2467[16]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 2) {
  request.r(i2471[i + 0], i2471[i + 1], 2, i2470, '')
  }
  i2466.m_fontMaterials = i2470
  i2466.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2467[17], i2467[18], i2467[19], i2467[20])
  i2466.m_fontColor = new pc.Color(i2467[21], i2467[22], i2467[23], i2467[24])
  i2466.m_enableVertexGradient = !!i2467[25]
  i2466.m_colorMode = i2467[26]
  i2466.m_fontColorGradient = request.d('TMPro.VertexGradient', i2467[27], i2466.m_fontColorGradient)
  request.r(i2467[28], i2467[29], 0, i2466, 'm_fontColorGradientPreset')
  request.r(i2467[30], i2467[31], 0, i2466, 'm_spriteAsset')
  i2466.m_tintAllSprites = !!i2467[32]
  request.r(i2467[33], i2467[34], 0, i2466, 'm_StyleSheet')
  i2466.m_TextStyleHashCode = i2467[35]
  i2466.m_overrideHtmlColors = !!i2467[36]
  i2466.m_faceColor = UnityEngine.Color32.ConstructColor(i2467[37], i2467[38], i2467[39], i2467[40])
  i2466.m_fontSize = i2467[41]
  i2466.m_fontSizeBase = i2467[42]
  i2466.m_fontWeight = i2467[43]
  i2466.m_enableAutoSizing = !!i2467[44]
  i2466.m_fontSizeMin = i2467[45]
  i2466.m_fontSizeMax = i2467[46]
  i2466.m_fontStyle = i2467[47]
  i2466.m_HorizontalAlignment = i2467[48]
  i2466.m_VerticalAlignment = i2467[49]
  i2466.m_textAlignment = i2467[50]
  i2466.m_characterSpacing = i2467[51]
  i2466.m_wordSpacing = i2467[52]
  i2466.m_lineSpacing = i2467[53]
  i2466.m_lineSpacingMax = i2467[54]
  i2466.m_paragraphSpacing = i2467[55]
  i2466.m_charWidthMaxAdj = i2467[56]
  i2466.m_enableWordWrapping = !!i2467[57]
  i2466.m_wordWrappingRatios = i2467[58]
  i2466.m_overflowMode = i2467[59]
  request.r(i2467[60], i2467[61], 0, i2466, 'm_linkedTextComponent')
  request.r(i2467[62], i2467[63], 0, i2466, 'parentLinkedComponent')
  i2466.m_enableKerning = !!i2467[64]
  i2466.m_enableExtraPadding = !!i2467[65]
  i2466.checkPaddingRequired = !!i2467[66]
  i2466.m_isRichText = !!i2467[67]
  i2466.m_parseCtrlCharacters = !!i2467[68]
  i2466.m_isOrthographic = !!i2467[69]
  i2466.m_isCullingEnabled = !!i2467[70]
  i2466.m_horizontalMapping = i2467[71]
  i2466.m_verticalMapping = i2467[72]
  i2466.m_uvLineOffset = i2467[73]
  i2466.m_geometrySortingOrder = i2467[74]
  i2466.m_IsTextObjectScaleStatic = !!i2467[75]
  i2466.m_VertexBufferAutoSizeReduction = !!i2467[76]
  i2466.m_useMaxVisibleDescender = !!i2467[77]
  i2466.m_pageToDisplay = i2467[78]
  i2466.m_margin = new pc.Vec4( i2467[79], i2467[80], i2467[81], i2467[82] )
  i2466.m_isUsingLegacyAnimationComponent = !!i2467[83]
  i2466.m_isVolumetricText = !!i2467[84]
  i2466.m_Maskable = !!i2467[85]
  request.r(i2467[86], i2467[87], 0, i2466, 'm_Material')
  i2466.m_Color = new pc.Color(i2467[88], i2467[89], i2467[90], i2467[91])
  i2466.m_RaycastTarget = !!i2467[92]
  i2466.m_RaycastPadding = new pc.Vec4( i2467[93], i2467[94], i2467[95], i2467[96] )
  return i2466
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2474 = root || request.c( 'TMPro.VertexGradient' )
  var i2475 = data
  i2474.topLeft = new pc.Color(i2475[0], i2475[1], i2475[2], i2475[3])
  i2474.topRight = new pc.Color(i2475[4], i2475[5], i2475[6], i2475[7])
  i2474.bottomLeft = new pc.Color(i2475[8], i2475[9], i2475[10], i2475[11])
  i2474.bottomRight = new pc.Color(i2475[12], i2475[13], i2475[14], i2475[15])
  return i2474
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2476 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2477 = data
  request.r(i2477[0], i2477[1], 0, i2476, 'm_ObjectArgument')
  i2476.m_ObjectArgumentAssemblyTypeName = i2477[2]
  i2476.m_IntArgument = i2477[3]
  i2476.m_FloatArgument = i2477[4]
  i2476.m_StringArgument = i2477[5]
  i2476.m_BoolArgument = !!i2477[6]
  return i2476
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2478 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2479 = data
  i2478.targetIsSelf = !!i2479[0]
  request.r(i2479[1], i2479[2], 0, i2478, 'targetGO')
  i2478.tweenTargetIsTargetGO = !!i2479[3]
  i2478.delay = i2479[4]
  i2478.duration = i2479[5]
  i2478.easeType = i2479[6]
  i2478.easeCurve = new pc.AnimationCurve( { keys_flow: i2479[7] } )
  i2478.loopType = i2479[8]
  i2478.loops = i2479[9]
  i2478.id = i2479[10]
  i2478.isRelative = !!i2479[11]
  i2478.isFrom = !!i2479[12]
  i2478.isIndependentUpdate = !!i2479[13]
  i2478.autoKill = !!i2479[14]
  i2478.autoGenerate = !!i2479[15]
  i2478.isActive = !!i2479[16]
  i2478.isValid = !!i2479[17]
  request.r(i2479[18], i2479[19], 0, i2478, 'target')
  i2478.animationType = i2479[20]
  i2478.targetType = i2479[21]
  i2478.forcedTargetType = i2479[22]
  i2478.autoPlay = !!i2479[23]
  i2478.useTargetAsV3 = !!i2479[24]
  i2478.endValueFloat = i2479[25]
  i2478.endValueV3 = new pc.Vec3( i2479[26], i2479[27], i2479[28] )
  i2478.endValueV2 = new pc.Vec2( i2479[29], i2479[30] )
  i2478.endValueColor = new pc.Color(i2479[31], i2479[32], i2479[33], i2479[34])
  i2478.endValueString = i2479[35]
  i2478.endValueRect = UnityEngine.Rect.MinMaxRect(i2479[36], i2479[37], i2479[38], i2479[39])
  request.r(i2479[40], i2479[41], 0, i2478, 'endValueTransform')
  i2478.optionalBool0 = !!i2479[42]
  i2478.optionalBool1 = !!i2479[43]
  i2478.optionalFloat0 = i2479[44]
  i2478.optionalInt0 = i2479[45]
  i2478.optionalRotationMode = i2479[46]
  i2478.optionalScrambleMode = i2479[47]
  i2478.optionalShakeRandomnessMode = i2479[48]
  i2478.optionalString = i2479[49]
  i2478.updateType = i2479[50]
  i2478.isSpeedBased = !!i2479[51]
  i2478.hasOnStart = !!i2479[52]
  i2478.hasOnPlay = !!i2479[53]
  i2478.hasOnUpdate = !!i2479[54]
  i2478.hasOnStepComplete = !!i2479[55]
  i2478.hasOnComplete = !!i2479[56]
  i2478.hasOnTweenCreated = !!i2479[57]
  i2478.hasOnRewind = !!i2479[58]
  i2478.onStart = request.d('UnityEngine.Events.UnityEvent', i2479[59], i2478.onStart)
  i2478.onPlay = request.d('UnityEngine.Events.UnityEvent', i2479[60], i2478.onPlay)
  i2478.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2479[61], i2478.onUpdate)
  i2478.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2479[62], i2478.onStepComplete)
  i2478.onComplete = request.d('UnityEngine.Events.UnityEvent', i2479[63], i2478.onComplete)
  i2478.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2479[64], i2478.onTweenCreated)
  i2478.onRewind = request.d('UnityEngine.Events.UnityEvent', i2479[65], i2478.onRewind)
  return i2478
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2480 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2481 = data
  i2480.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2481[0], i2480.m_PersistentCalls)
  return i2480
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2482 = root || request.c( 'AudioController' )
  var i2483 = data
  request.r(i2483[0], i2483[1], 0, i2482, 'bgmSource')
  request.r(i2483[2], i2483[3], 0, i2482, 'sfxSource')
  var i2485 = i2483[4]
  var i2484 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.add(request.d('AudioEntry', i2485[i + 0]));
  }
  i2482.audioEntries = i2484
  return i2482
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i2488 = root || request.c( 'AudioEntry' )
  var i2489 = data
  i2488.key = i2489[0]
  request.r(i2489[1], i2489[2], 0, i2488, 'clip')
  i2488.volume = i2489[3]
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2491 = data
  i2490.ambientIntensity = i2491[0]
  i2490.reflectionIntensity = i2491[1]
  i2490.ambientMode = i2491[2]
  i2490.ambientLight = new pc.Color(i2491[3], i2491[4], i2491[5], i2491[6])
  i2490.ambientSkyColor = new pc.Color(i2491[7], i2491[8], i2491[9], i2491[10])
  i2490.ambientGroundColor = new pc.Color(i2491[11], i2491[12], i2491[13], i2491[14])
  i2490.ambientEquatorColor = new pc.Color(i2491[15], i2491[16], i2491[17], i2491[18])
  i2490.fogColor = new pc.Color(i2491[19], i2491[20], i2491[21], i2491[22])
  i2490.fogEndDistance = i2491[23]
  i2490.fogStartDistance = i2491[24]
  i2490.fogDensity = i2491[25]
  i2490.fog = !!i2491[26]
  request.r(i2491[27], i2491[28], 0, i2490, 'skybox')
  i2490.fogMode = i2491[29]
  var i2493 = i2491[30]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2493[i + 0]) );
  }
  i2490.lightmaps = i2492
  i2490.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2491[31], i2490.lightProbes)
  i2490.lightmapsMode = i2491[32]
  i2490.mixedBakeMode = i2491[33]
  i2490.environmentLightingMode = i2491[34]
  i2490.ambientProbe = new pc.SphericalHarmonicsL2(i2491[35])
  i2490.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2491[36])
  i2490.useReferenceAmbientProbe = !!i2491[37]
  request.r(i2491[38], i2491[39], 0, i2490, 'customReflection')
  request.r(i2491[40], i2491[41], 0, i2490, 'defaultReflection')
  i2490.defaultReflectionMode = i2491[42]
  i2490.defaultReflectionResolution = i2491[43]
  i2490.sunLightObjectId = i2491[44]
  i2490.pixelLightCount = i2491[45]
  i2490.defaultReflectionHDR = !!i2491[46]
  i2490.hasLightDataAsset = !!i2491[47]
  i2490.hasManualGenerate = !!i2491[48]
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2497 = data
  request.r(i2497[0], i2497[1], 0, i2496, 'lightmapColor')
  request.r(i2497[2], i2497[3], 0, i2496, 'lightmapDirection')
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2498 = root || new UnityEngine.LightProbes()
  var i2499 = data
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2507 = data
  var i2509 = i2507[0]
  var i2508 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2509[i + 0]));
  }
  i2506.ShaderCompilationErrors = i2508
  i2506.name = i2507[1]
  i2506.guid = i2507[2]
  var i2511 = i2507[3]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( i2511[i + 0] );
  }
  i2506.shaderDefinedKeywords = i2510
  var i2513 = i2507[4]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2513[i + 0]) );
  }
  i2506.passes = i2512
  var i2515 = i2507[5]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2515[i + 0]) );
  }
  i2506.usePasses = i2514
  var i2517 = i2507[6]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2517[i + 0]) );
  }
  i2506.defaultParameterValues = i2516
  request.r(i2507[7], i2507[8], 0, i2506, 'unityFallbackShader')
  i2506.readDepth = !!i2507[9]
  i2506.isCreatedByShaderGraph = !!i2507[10]
  i2506.disableBatching = !!i2507[11]
  i2506.compiled = !!i2507[12]
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2521 = data
  i2520.shaderName = i2521[0]
  i2520.errorMessage = i2521[1]
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2524 = root || new pc.UnityShaderPass()
  var i2525 = data
  i2524.id = i2525[0]
  i2524.subShaderIndex = i2525[1]
  i2524.name = i2525[2]
  i2524.passType = i2525[3]
  i2524.grabPassTextureName = i2525[4]
  i2524.usePass = !!i2525[5]
  i2524.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[6], i2524.zTest)
  i2524.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[7], i2524.zWrite)
  i2524.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[8], i2524.culling)
  i2524.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2525[9], i2524.blending)
  i2524.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2525[10], i2524.alphaBlending)
  i2524.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[11], i2524.colorWriteMask)
  i2524.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[12], i2524.offsetUnits)
  i2524.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[13], i2524.offsetFactor)
  i2524.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[14], i2524.stencilRef)
  i2524.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[15], i2524.stencilReadMask)
  i2524.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[16], i2524.stencilWriteMask)
  i2524.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2525[17], i2524.stencilOp)
  i2524.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2525[18], i2524.stencilOpFront)
  i2524.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2525[19], i2524.stencilOpBack)
  var i2527 = i2525[20]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2527[i + 0]) );
  }
  i2524.tags = i2526
  var i2529 = i2525[21]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( i2529[i + 0] );
  }
  i2524.passDefinedKeywords = i2528
  var i2531 = i2525[22]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2531[i + 0]) );
  }
  i2524.passDefinedKeywordGroups = i2530
  var i2533 = i2525[23]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2533[i + 0]) );
  }
  i2524.variants = i2532
  var i2535 = i2525[24]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2535[i + 0]) );
  }
  i2524.excludedVariants = i2534
  i2524.hasDepthReader = !!i2525[25]
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2537 = data
  i2536.val = i2537[0]
  i2536.name = i2537[1]
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2539 = data
  i2538.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[0], i2538.src)
  i2538.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[1], i2538.dst)
  i2538.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[2], i2538.op)
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2541 = data
  i2540.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2541[0], i2540.pass)
  i2540.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2541[1], i2540.fail)
  i2540.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2541[2], i2540.zFail)
  i2540.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2541[3], i2540.comp)
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2545 = data
  i2544.name = i2545[0]
  i2544.value = i2545[1]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2549 = data
  var i2551 = i2549[0]
  var i2550 = []
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.push( i2551[i + 0] );
  }
  i2548.keywords = i2550
  i2548.hasDiscard = !!i2549[1]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2555 = data
  i2554.passId = i2555[0]
  i2554.subShaderIndex = i2555[1]
  var i2557 = i2555[2]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( i2557[i + 0] );
  }
  i2554.keywords = i2556
  i2554.vertexProgram = i2555[3]
  i2554.fragmentProgram = i2555[4]
  i2554.exportedForWebGl2 = !!i2555[5]
  i2554.readDepth = !!i2555[6]
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2561 = data
  request.r(i2561[0], i2561[1], 0, i2560, 'shader')
  i2560.pass = i2561[2]
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2565 = data
  i2564.name = i2565[0]
  i2564.type = i2565[1]
  i2564.value = new pc.Vec4( i2565[2], i2565[3], i2565[4], i2565[5] )
  i2564.textureValue = i2565[6]
  i2564.shaderPropertyFlag = i2565[7]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2567 = data
  i2566.name = i2567[0]
  request.r(i2567[1], i2567[2], 0, i2566, 'texture')
  i2566.aabb = i2567[3]
  i2566.vertices = i2567[4]
  i2566.triangles = i2567[5]
  i2566.textureRect = UnityEngine.Rect.MinMaxRect(i2567[6], i2567[7], i2567[8], i2567[9])
  i2566.packedRect = UnityEngine.Rect.MinMaxRect(i2567[10], i2567[11], i2567[12], i2567[13])
  i2566.border = new pc.Vec4( i2567[14], i2567[15], i2567[16], i2567[17] )
  i2566.transparency = i2567[18]
  i2566.bounds = i2567[19]
  i2566.pixelsPerUnit = i2567[20]
  i2566.textureWidth = i2567[21]
  i2566.textureHeight = i2567[22]
  i2566.nativeSize = new pc.Vec2( i2567[23], i2567[24] )
  i2566.pivot = new pc.Vec2( i2567[25], i2567[26] )
  i2566.textureRectOffset = new pc.Vec2( i2567[27], i2567[28] )
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2569 = data
  i2568.name = i2569[0]
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2571 = data
  i2570.name = i2571[0]
  i2570.ascent = i2571[1]
  i2570.originalLineHeight = i2571[2]
  i2570.fontSize = i2571[3]
  var i2573 = i2571[4]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2573[i + 0]) );
  }
  i2570.characterInfo = i2572
  request.r(i2571[5], i2571[6], 0, i2570, 'texture')
  i2570.originalFontSize = i2571[7]
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2577 = data
  i2576.index = i2577[0]
  i2576.advance = i2577[1]
  i2576.bearing = i2577[2]
  i2576.glyphWidth = i2577[3]
  i2576.glyphHeight = i2577[4]
  i2576.minX = i2577[5]
  i2576.maxX = i2577[6]
  i2576.minY = i2577[7]
  i2576.maxY = i2577[8]
  i2576.uvBottomLeftX = i2577[9]
  i2576.uvBottomLeftY = i2577[10]
  i2576.uvBottomRightX = i2577[11]
  i2576.uvBottomRightY = i2577[12]
  i2576.uvTopLeftX = i2577[13]
  i2576.uvTopLeftY = i2577[14]
  i2576.uvTopRightX = i2577[15]
  i2576.uvTopRightY = i2577[16]
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2579 = data
  i2578.name = i2579[0]
  i2578.bytes64 = i2579[1]
  i2578.data = i2579[2]
  return i2578
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2580 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2581 = data
  var i2583 = i2581[0]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 2) {
  request.r(i2583[i + 0], i2583[i + 1], 2, i2582, '')
  }
  i2580.atlasAssets = i2582
  i2580.scale = i2581[1]
  request.r(i2581[2], i2581[3], 0, i2580, 'skeletonJSON')
  i2580.isUpgradingBlendModeMaterials = !!i2581[4]
  i2580.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2581[5], i2580.blendModeMaterials)
  var i2585 = i2581[6]
  var i2584 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2585.length; i += 2) {
  request.r(i2585[i + 0], i2585[i + 1], 1, i2584, '')
  }
  i2580.skeletonDataModifiers = i2584
  var i2587 = i2581[7]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( i2587[i + 0] );
  }
  i2580.fromAnimation = i2586
  var i2589 = i2581[8]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( i2589[i + 0] );
  }
  i2580.toAnimation = i2588
  i2580.duration = i2581[9]
  i2580.defaultMix = i2581[10]
  request.r(i2581[11], i2581[12], 0, i2580, 'controller')
  return i2580
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2592 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2593 = data
  i2592.applyAdditiveMaterial = !!i2593[0]
  var i2595 = i2593[1]
  var i2594 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2595[i + 0]));
  }
  i2592.additiveMaterials = i2594
  var i2597 = i2593[2]
  var i2596 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2597[i + 0]));
  }
  i2592.multiplyMaterials = i2596
  var i2599 = i2593[3]
  var i2598 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2599[i + 0]));
  }
  i2592.screenMaterials = i2598
  i2592.requiresBlendModeMaterials = !!i2593[4]
  return i2592
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2602 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2603 = data
  i2602.pageName = i2603[0]
  request.r(i2603[1], i2603[2], 0, i2602, 'material')
  return i2602
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2606 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2607 = data
  request.r(i2607[0], i2607[1], 0, i2606, 'atlasFile')
  var i2609 = i2607[2]
  var i2608 = []
  for(var i = 0; i < i2609.length; i += 2) {
  request.r(i2609[i + 0], i2609[i + 1], 2, i2608, '')
  }
  i2606.materials = i2608
  i2606.textureLoadingMode = i2607[3]
  request.r(i2607[4], i2607[5], 0, i2606, 'onDemandTextureLoader')
  return i2606
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2610 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2611 = data
  request.r(i2611[0], i2611[1], 0, i2610, 'atlas')
  i2610.normalStyle = i2611[2]
  i2610.normalSpacingOffset = i2611[3]
  i2610.boldStyle = i2611[4]
  i2610.boldSpacing = i2611[5]
  i2610.italicStyle = i2611[6]
  i2610.tabSize = i2611[7]
  i2610.hashCode = i2611[8]
  request.r(i2611[9], i2611[10], 0, i2610, 'material')
  i2610.materialHashCode = i2611[11]
  i2610.m_Version = i2611[12]
  i2610.m_SourceFontFileGUID = i2611[13]
  request.r(i2611[14], i2611[15], 0, i2610, 'm_SourceFontFile_EditorRef')
  request.r(i2611[16], i2611[17], 0, i2610, 'm_SourceFontFile')
  i2610.m_AtlasPopulationMode = i2611[18]
  i2610.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2611[19], i2610.m_FaceInfo)
  var i2613 = i2611[20]
  var i2612 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.add(request.d('UnityEngine.TextCore.Glyph', i2613[i + 0]));
  }
  i2610.m_GlyphTable = i2612
  var i2615 = i2611[21]
  var i2614 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.add(request.d('TMPro.TMP_Character', i2615[i + 0]));
  }
  i2610.m_CharacterTable = i2614
  var i2617 = i2611[22]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 2) {
  request.r(i2617[i + 0], i2617[i + 1], 2, i2616, '')
  }
  i2610.m_AtlasTextures = i2616
  i2610.m_AtlasTextureIndex = i2611[23]
  i2610.m_IsMultiAtlasTexturesEnabled = !!i2611[24]
  i2610.m_ClearDynamicDataOnBuild = !!i2611[25]
  var i2619 = i2611[26]
  var i2618 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.add(request.d('UnityEngine.TextCore.GlyphRect', i2619[i + 0]));
  }
  i2610.m_UsedGlyphRects = i2618
  var i2621 = i2611[27]
  var i2620 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.add(request.d('UnityEngine.TextCore.GlyphRect', i2621[i + 0]));
  }
  i2610.m_FreeGlyphRects = i2620
  i2610.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2611[28], i2610.m_fontInfo)
  i2610.m_AtlasWidth = i2611[29]
  i2610.m_AtlasHeight = i2611[30]
  i2610.m_AtlasPadding = i2611[31]
  i2610.m_AtlasRenderMode = i2611[32]
  var i2623 = i2611[33]
  var i2622 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.add(request.d('TMPro.TMP_Glyph', i2623[i + 0]));
  }
  i2610.m_glyphInfoList = i2622
  i2610.m_KerningTable = request.d('TMPro.KerningTable', i2611[34], i2610.m_KerningTable)
  i2610.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2611[35], i2610.m_FontFeatureTable)
  var i2625 = i2611[36]
  var i2624 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2625.length; i += 2) {
  request.r(i2625[i + 0], i2625[i + 1], 1, i2624, '')
  }
  i2610.fallbackFontAssets = i2624
  var i2627 = i2611[37]
  var i2626 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2627.length; i += 2) {
  request.r(i2627[i + 0], i2627[i + 1], 1, i2626, '')
  }
  i2610.m_FallbackFontAssetTable = i2626
  i2610.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2611[38], i2610.m_CreationSettings)
  var i2629 = i2611[39]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( request.d('TMPro.TMP_FontWeightPair', i2629[i + 0]) );
  }
  i2610.m_FontWeightTable = i2628
  var i2631 = i2611[40]
  var i2630 = []
  for(var i = 0; i < i2631.length; i += 1) {
    i2630.push( request.d('TMPro.TMP_FontWeightPair', i2631[i + 0]) );
  }
  i2610.fontWeights = i2630
  return i2610
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2632 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2633 = data
  i2632.m_FaceIndex = i2633[0]
  i2632.m_FamilyName = i2633[1]
  i2632.m_StyleName = i2633[2]
  i2632.m_PointSize = i2633[3]
  i2632.m_Scale = i2633[4]
  i2632.m_UnitsPerEM = i2633[5]
  i2632.m_LineHeight = i2633[6]
  i2632.m_AscentLine = i2633[7]
  i2632.m_CapLine = i2633[8]
  i2632.m_MeanLine = i2633[9]
  i2632.m_Baseline = i2633[10]
  i2632.m_DescentLine = i2633[11]
  i2632.m_SuperscriptOffset = i2633[12]
  i2632.m_SuperscriptSize = i2633[13]
  i2632.m_SubscriptOffset = i2633[14]
  i2632.m_SubscriptSize = i2633[15]
  i2632.m_UnderlineOffset = i2633[16]
  i2632.m_UnderlineThickness = i2633[17]
  i2632.m_StrikethroughOffset = i2633[18]
  i2632.m_StrikethroughThickness = i2633[19]
  i2632.m_TabWidth = i2633[20]
  return i2632
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2636 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2637 = data
  i2636.m_Index = i2637[0]
  i2636.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2637[1], i2636.m_Metrics)
  i2636.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2637[2], i2636.m_GlyphRect)
  i2636.m_Scale = i2637[3]
  i2636.m_AtlasIndex = i2637[4]
  i2636.m_ClassDefinitionType = i2637[5]
  return i2636
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2638 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2639 = data
  i2638.m_Width = i2639[0]
  i2638.m_Height = i2639[1]
  i2638.m_HorizontalBearingX = i2639[2]
  i2638.m_HorizontalBearingY = i2639[3]
  i2638.m_HorizontalAdvance = i2639[4]
  return i2638
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2640 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2641 = data
  i2640.m_X = i2641[0]
  i2640.m_Y = i2641[1]
  i2640.m_Width = i2641[2]
  i2640.m_Height = i2641[3]
  return i2640
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2644 = root || request.c( 'TMPro.TMP_Character' )
  var i2645 = data
  i2644.m_ElementType = i2645[0]
  i2644.m_Unicode = i2645[1]
  i2644.m_GlyphIndex = i2645[2]
  i2644.m_Scale = i2645[3]
  return i2644
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2650 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2651 = data
  i2650.Name = i2651[0]
  i2650.PointSize = i2651[1]
  i2650.Scale = i2651[2]
  i2650.CharacterCount = i2651[3]
  i2650.LineHeight = i2651[4]
  i2650.Baseline = i2651[5]
  i2650.Ascender = i2651[6]
  i2650.CapHeight = i2651[7]
  i2650.Descender = i2651[8]
  i2650.CenterLine = i2651[9]
  i2650.SuperscriptOffset = i2651[10]
  i2650.SubscriptOffset = i2651[11]
  i2650.SubSize = i2651[12]
  i2650.Underline = i2651[13]
  i2650.UnderlineThickness = i2651[14]
  i2650.strikethrough = i2651[15]
  i2650.strikethroughThickness = i2651[16]
  i2650.TabWidth = i2651[17]
  i2650.Padding = i2651[18]
  i2650.AtlasWidth = i2651[19]
  i2650.AtlasHeight = i2651[20]
  return i2650
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2654 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2655 = data
  i2654.id = i2655[0]
  i2654.x = i2655[1]
  i2654.y = i2655[2]
  i2654.width = i2655[3]
  i2654.height = i2655[4]
  i2654.xOffset = i2655[5]
  i2654.yOffset = i2655[6]
  i2654.xAdvance = i2655[7]
  i2654.scale = i2655[8]
  return i2654
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2656 = root || request.c( 'TMPro.KerningTable' )
  var i2657 = data
  var i2659 = i2657[0]
  var i2658 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.add(request.d('TMPro.KerningPair', i2659[i + 0]));
  }
  i2656.kerningPairs = i2658
  return i2656
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2662 = root || request.c( 'TMPro.KerningPair' )
  var i2663 = data
  i2662.xOffset = i2663[0]
  i2662.m_FirstGlyph = i2663[1]
  i2662.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2663[2], i2662.m_FirstGlyphAdjustments)
  i2662.m_SecondGlyph = i2663[3]
  i2662.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2663[4], i2662.m_SecondGlyphAdjustments)
  i2662.m_IgnoreSpacingAdjustments = !!i2663[5]
  return i2662
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2664 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2665 = data
  var i2667 = i2665[0]
  var i2666 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2667[i + 0]));
  }
  i2664.m_GlyphPairAdjustmentRecords = i2666
  return i2664
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2670 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2671 = data
  i2670.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2671[0], i2670.m_FirstAdjustmentRecord)
  i2670.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2671[1], i2670.m_SecondAdjustmentRecord)
  i2670.m_FeatureLookupFlags = i2671[2]
  return i2670
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2674 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2675 = data
  i2674.sourceFontFileName = i2675[0]
  i2674.sourceFontFileGUID = i2675[1]
  i2674.pointSizeSamplingMode = i2675[2]
  i2674.pointSize = i2675[3]
  i2674.padding = i2675[4]
  i2674.packingMode = i2675[5]
  i2674.atlasWidth = i2675[6]
  i2674.atlasHeight = i2675[7]
  i2674.characterSetSelectionMode = i2675[8]
  i2674.characterSequence = i2675[9]
  i2674.referencedFontAssetGUID = i2675[10]
  i2674.referencedTextAssetGUID = i2675[11]
  i2674.fontStyle = i2675[12]
  i2674.fontStyleModifier = i2675[13]
  i2674.renderMode = i2675[14]
  i2674.includeFontFeatures = !!i2675[15]
  return i2674
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2678 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2679 = data
  request.r(i2679[0], i2679[1], 0, i2678, 'regularTypeface')
  request.r(i2679[2], i2679[3], 0, i2678, 'italicTypeface')
  return i2678
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2680 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2681 = data
  i2680.m_GlyphIndex = i2681[0]
  i2680.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2681[1], i2680.m_GlyphValueRecord)
  return i2680
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2682 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2683 = data
  i2682.m_XPlacement = i2683[0]
  i2682.m_YPlacement = i2683[1]
  i2682.m_XAdvance = i2683[2]
  i2682.m_YAdvance = i2683[3]
  return i2682
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2684 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2685 = data
  i2684.useSafeMode = !!i2685[0]
  i2684.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2685[1], i2684.safeModeOptions)
  i2684.timeScale = i2685[2]
  i2684.unscaledTimeScale = i2685[3]
  i2684.useSmoothDeltaTime = !!i2685[4]
  i2684.maxSmoothUnscaledTime = i2685[5]
  i2684.rewindCallbackMode = i2685[6]
  i2684.showUnityEditorReport = !!i2685[7]
  i2684.logBehaviour = i2685[8]
  i2684.drawGizmos = !!i2685[9]
  i2684.defaultRecyclable = !!i2685[10]
  i2684.defaultAutoPlay = i2685[11]
  i2684.defaultUpdateType = i2685[12]
  i2684.defaultTimeScaleIndependent = !!i2685[13]
  i2684.defaultEaseType = i2685[14]
  i2684.defaultEaseOvershootOrAmplitude = i2685[15]
  i2684.defaultEasePeriod = i2685[16]
  i2684.defaultAutoKill = !!i2685[17]
  i2684.defaultLoopType = i2685[18]
  i2684.debugMode = !!i2685[19]
  i2684.debugStoreTargetId = !!i2685[20]
  i2684.showPreviewPanel = !!i2685[21]
  i2684.storeSettingsLocation = i2685[22]
  i2684.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2685[23], i2684.modules)
  i2684.createASMDEF = !!i2685[24]
  i2684.showPlayingTweens = !!i2685[25]
  i2684.showPausedTweens = !!i2685[26]
  return i2684
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2686 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2687 = data
  i2686.logBehaviour = i2687[0]
  i2686.nestedTweenFailureBehaviour = i2687[1]
  return i2686
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2688 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2689 = data
  i2688.showPanel = !!i2689[0]
  i2688.audioEnabled = !!i2689[1]
  i2688.physicsEnabled = !!i2689[2]
  i2688.physics2DEnabled = !!i2689[3]
  i2688.spriteEnabled = !!i2689[4]
  i2688.uiEnabled = !!i2689[5]
  i2688.textMeshProEnabled = !!i2689[6]
  i2688.tk2DEnabled = !!i2689[7]
  i2688.deAudioEnabled = !!i2689[8]
  i2688.deUnityExtendedEnabled = !!i2689[9]
  i2688.epoOutlineEnabled = !!i2689[10]
  return i2688
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2690 = root || request.c( 'TMPro.TMP_Settings' )
  var i2691 = data
  i2690.m_enableWordWrapping = !!i2691[0]
  i2690.m_enableKerning = !!i2691[1]
  i2690.m_enableExtraPadding = !!i2691[2]
  i2690.m_enableTintAllSprites = !!i2691[3]
  i2690.m_enableParseEscapeCharacters = !!i2691[4]
  i2690.m_EnableRaycastTarget = !!i2691[5]
  i2690.m_GetFontFeaturesAtRuntime = !!i2691[6]
  i2690.m_missingGlyphCharacter = i2691[7]
  i2690.m_warningsDisabled = !!i2691[8]
  request.r(i2691[9], i2691[10], 0, i2690, 'm_defaultFontAsset')
  i2690.m_defaultFontAssetPath = i2691[11]
  i2690.m_defaultFontSize = i2691[12]
  i2690.m_defaultAutoSizeMinRatio = i2691[13]
  i2690.m_defaultAutoSizeMaxRatio = i2691[14]
  i2690.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2691[15], i2691[16] )
  i2690.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2691[17], i2691[18] )
  i2690.m_autoSizeTextContainer = !!i2691[19]
  i2690.m_IsTextObjectScaleStatic = !!i2691[20]
  var i2693 = i2691[21]
  var i2692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2693.length; i += 2) {
  request.r(i2693[i + 0], i2693[i + 1], 1, i2692, '')
  }
  i2690.m_fallbackFontAssets = i2692
  i2690.m_matchMaterialPreset = !!i2691[22]
  request.r(i2691[23], i2691[24], 0, i2690, 'm_defaultSpriteAsset')
  i2690.m_defaultSpriteAssetPath = i2691[25]
  i2690.m_enableEmojiSupport = !!i2691[26]
  i2690.m_MissingCharacterSpriteUnicode = i2691[27]
  i2690.m_defaultColorGradientPresetsPath = i2691[28]
  request.r(i2691[29], i2691[30], 0, i2690, 'm_defaultStyleSheet')
  i2690.m_StyleSheetsResourcePath = i2691[31]
  request.r(i2691[32], i2691[33], 0, i2690, 'm_leadingCharacters')
  request.r(i2691[34], i2691[35], 0, i2690, 'm_followingCharacters')
  i2690.m_UseModernHangulLineBreakingRules = !!i2691[36]
  return i2690
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2694 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2695 = data
  request.r(i2695[0], i2695[1], 0, i2694, 'spriteSheet')
  var i2697 = i2695[2]
  var i2696 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.add(request.d('TMPro.TMP_Sprite', i2697[i + 0]));
  }
  i2694.spriteInfoList = i2696
  var i2699 = i2695[3]
  var i2698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2699.length; i += 2) {
  request.r(i2699[i + 0], i2699[i + 1], 1, i2698, '')
  }
  i2694.fallbackSpriteAssets = i2698
  i2694.hashCode = i2695[4]
  request.r(i2695[5], i2695[6], 0, i2694, 'material')
  i2694.materialHashCode = i2695[7]
  i2694.m_Version = i2695[8]
  i2694.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2695[9], i2694.m_FaceInfo)
  var i2701 = i2695[10]
  var i2700 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.add(request.d('TMPro.TMP_SpriteCharacter', i2701[i + 0]));
  }
  i2694.m_SpriteCharacterTable = i2700
  var i2703 = i2695[11]
  var i2702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.add(request.d('TMPro.TMP_SpriteGlyph', i2703[i + 0]));
  }
  i2694.m_SpriteGlyphTable = i2702
  return i2694
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2706 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2707 = data
  i2706.name = i2707[0]
  i2706.hashCode = i2707[1]
  i2706.unicode = i2707[2]
  i2706.pivot = new pc.Vec2( i2707[3], i2707[4] )
  request.r(i2707[5], i2707[6], 0, i2706, 'sprite')
  i2706.id = i2707[7]
  i2706.x = i2707[8]
  i2706.y = i2707[9]
  i2706.width = i2707[10]
  i2706.height = i2707[11]
  i2706.xOffset = i2707[12]
  i2706.yOffset = i2707[13]
  i2706.xAdvance = i2707[14]
  i2706.scale = i2707[15]
  return i2706
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2712 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2713 = data
  i2712.m_Name = i2713[0]
  i2712.m_HashCode = i2713[1]
  i2712.m_ElementType = i2713[2]
  i2712.m_Unicode = i2713[3]
  i2712.m_GlyphIndex = i2713[4]
  i2712.m_Scale = i2713[5]
  return i2712
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2716 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2717 = data
  request.r(i2717[0], i2717[1], 0, i2716, 'sprite')
  i2716.m_Index = i2717[2]
  i2716.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2717[3], i2716.m_Metrics)
  i2716.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2717[4], i2716.m_GlyphRect)
  i2716.m_Scale = i2717[5]
  i2716.m_AtlasIndex = i2717[6]
  i2716.m_ClassDefinitionType = i2717[7]
  return i2716
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2718 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2719 = data
  var i2721 = i2719[0]
  var i2720 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.add(request.d('TMPro.TMP_Style', i2721[i + 0]));
  }
  i2718.m_StyleList = i2720
  return i2718
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2724 = root || request.c( 'TMPro.TMP_Style' )
  var i2725 = data
  i2724.m_Name = i2725[0]
  i2724.m_HashCode = i2725[1]
  i2724.m_OpeningDefinition = i2725[2]
  i2724.m_ClosingDefinition = i2725[3]
  i2724.m_OpeningTagArray = i2725[4]
  i2724.m_ClosingTagArray = i2725[5]
  i2724.m_OpeningTagUnicodeArray = i2725[6]
  i2724.m_ClosingTagUnicodeArray = i2725[7]
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2727 = data
  var i2729 = i2727[0]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2729[i + 0]) );
  }
  i2726.files = i2728
  i2726.componentToPrefabIds = i2727[1]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2733 = data
  i2732.path = i2733[0]
  request.r(i2733[1], i2733[2], 0, i2732, 'unityObject')
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2735 = data
  var i2737 = i2735[0]
  var i2736 = []
  for(var i = 0; i < i2737.length; i += 1) {
    i2736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2737[i + 0]) );
  }
  i2734.scriptsExecutionOrder = i2736
  var i2739 = i2735[1]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2739[i + 0]) );
  }
  i2734.sortingLayers = i2738
  var i2741 = i2735[2]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2741[i + 0]) );
  }
  i2734.cullingLayers = i2740
  i2734.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2735[3], i2734.timeSettings)
  i2734.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2735[4], i2734.physicsSettings)
  i2734.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2735[5], i2734.physics2DSettings)
  i2734.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2735[6], i2734.qualitySettings)
  i2734.enableRealtimeShadows = !!i2735[7]
  i2734.enableAutoInstancing = !!i2735[8]
  i2734.enableStaticBatching = !!i2735[9]
  i2734.enableDynamicBatching = !!i2735[10]
  i2734.lightmapEncodingQuality = i2735[11]
  i2734.desiredColorSpace = i2735[12]
  var i2743 = i2735[13]
  var i2742 = []
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.push( i2743[i + 0] );
  }
  i2734.allTags = i2742
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2747 = data
  i2746.name = i2747[0]
  i2746.value = i2747[1]
  return i2746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2751 = data
  i2750.id = i2751[0]
  i2750.name = i2751[1]
  i2750.value = i2751[2]
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2755 = data
  i2754.id = i2755[0]
  i2754.name = i2755[1]
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2757 = data
  i2756.fixedDeltaTime = i2757[0]
  i2756.maximumDeltaTime = i2757[1]
  i2756.timeScale = i2757[2]
  i2756.maximumParticleTimestep = i2757[3]
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2759 = data
  i2758.gravity = new pc.Vec3( i2759[0], i2759[1], i2759[2] )
  i2758.defaultSolverIterations = i2759[3]
  i2758.bounceThreshold = i2759[4]
  i2758.autoSyncTransforms = !!i2759[5]
  i2758.autoSimulation = !!i2759[6]
  var i2761 = i2759[7]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2761[i + 0]) );
  }
  i2758.collisionMatrix = i2760
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2765 = data
  i2764.enabled = !!i2765[0]
  i2764.layerId = i2765[1]
  i2764.otherLayerId = i2765[2]
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2767 = data
  request.r(i2767[0], i2767[1], 0, i2766, 'material')
  i2766.gravity = new pc.Vec2( i2767[2], i2767[3] )
  i2766.positionIterations = i2767[4]
  i2766.velocityIterations = i2767[5]
  i2766.velocityThreshold = i2767[6]
  i2766.maxLinearCorrection = i2767[7]
  i2766.maxAngularCorrection = i2767[8]
  i2766.maxTranslationSpeed = i2767[9]
  i2766.maxRotationSpeed = i2767[10]
  i2766.baumgarteScale = i2767[11]
  i2766.baumgarteTOIScale = i2767[12]
  i2766.timeToSleep = i2767[13]
  i2766.linearSleepTolerance = i2767[14]
  i2766.angularSleepTolerance = i2767[15]
  i2766.defaultContactOffset = i2767[16]
  i2766.autoSimulation = !!i2767[17]
  i2766.queriesHitTriggers = !!i2767[18]
  i2766.queriesStartInColliders = !!i2767[19]
  i2766.callbacksOnDisable = !!i2767[20]
  i2766.reuseCollisionCallbacks = !!i2767[21]
  i2766.autoSyncTransforms = !!i2767[22]
  var i2769 = i2767[23]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2769[i + 0]) );
  }
  i2766.collisionMatrix = i2768
  return i2766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2773 = data
  i2772.enabled = !!i2773[0]
  i2772.layerId = i2773[1]
  i2772.otherLayerId = i2773[2]
  return i2772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2775 = data
  var i2777 = i2775[0]
  var i2776 = []
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2777[i + 0]) );
  }
  i2774.qualityLevels = i2776
  var i2779 = i2775[1]
  var i2778 = []
  for(var i = 0; i < i2779.length; i += 1) {
    i2778.push( i2779[i + 0] );
  }
  i2774.names = i2778
  i2774.shadows = i2775[2]
  i2774.anisotropicFiltering = i2775[3]
  i2774.antiAliasing = i2775[4]
  i2774.lodBias = i2775[5]
  i2774.shadowCascades = i2775[6]
  i2774.shadowDistance = i2775[7]
  i2774.shadowmaskMode = i2775[8]
  i2774.shadowProjection = i2775[9]
  i2774.shadowResolution = i2775[10]
  i2774.softParticles = !!i2775[11]
  i2774.softVegetation = !!i2775[12]
  i2774.activeColorSpace = i2775[13]
  i2774.desiredColorSpace = i2775[14]
  i2774.masterTextureLimit = i2775[15]
  i2774.maxQueuedFrames = i2775[16]
  i2774.particleRaycastBudget = i2775[17]
  i2774.pixelLightCount = i2775[18]
  i2774.realtimeReflectionProbes = !!i2775[19]
  i2774.shadowCascade2Split = i2775[20]
  i2774.shadowCascade4Split = new pc.Vec3( i2775[21], i2775[22], i2775[23] )
  i2774.streamingMipmapsActive = !!i2775[24]
  i2774.vSyncCount = i2775[25]
  i2774.asyncUploadBufferSize = i2775[26]
  i2774.asyncUploadTimeSlice = i2775[27]
  i2774.billboardsFaceCameraPosition = !!i2775[28]
  i2774.shadowNearPlaneOffset = i2775[29]
  i2774.streamingMipmapsMemoryBudget = i2775[30]
  i2774.maximumLODLevel = i2775[31]
  i2774.streamingMipmapsAddAllCameras = !!i2775[32]
  i2774.streamingMipmapsMaxLevelReduction = i2775[33]
  i2774.streamingMipmapsRenderersPerFrame = i2775[34]
  i2774.resolutionScalingFixedDPIFactor = i2775[35]
  i2774.streamingMipmapsMaxFileIORequests = i2775[36]
  i2774.currentQualityLevel = i2775[37]
  return i2774
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2782 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2783 = data
  i2782.xPlacement = i2783[0]
  i2782.yPlacement = i2783[1]
  i2782.xAdvance = i2783[2]
  i2782.yAdvance = i2783[3]
  return i2782
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[47],"48":[3],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[3],"72":[73],"74":[75],"76":[75],"9":[8],"77":[78],"79":[80],"81":[78],"82":[8],"83":[8],"11":[9],"18":[21,8],"84":[8],"10":[9],"85":[8],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"91":[8],"25":[8],"92":[8],"16":[21,8],"93":[8],"94":[8],"95":[8],"96":[8],"97":[21,8],"98":[8],"99":[6],"100":[6],"7":[6],"101":[6],"102":[3],"103":[3],"104":[105],"106":[3],"107":[108],"109":[8],"110":[21,8],"111":[73],"26":[21,8],"112":[113,73],"114":[73],"115":[73,116],"117":[50],"118":[58],"119":[108],"120":[121],"122":[8],"123":[73,8],"17":[8,21],"124":[8],"125":[21,8],"126":[73],"127":[21,8],"128":[8],"129":[78]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","LeftOrRight","MixSkeletonSkin","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "314.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BP_V21_NgocNDL_AnhPD";

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

Deserializers.buildID = "df913e41-53c7-466d-a937-3fb2842955d2";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

