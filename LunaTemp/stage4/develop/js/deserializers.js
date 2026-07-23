var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2510 = root || request.c( 'UnityEngine.JointSpring' )
  var i2511 = data
  i2510.spring = i2511[0]
  i2510.damper = i2511[1]
  i2510.targetPosition = i2511[2]
  return i2510
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2512 = root || request.c( 'UnityEngine.JointMotor' )
  var i2513 = data
  i2512.m_TargetVelocity = i2513[0]
  i2512.m_Force = i2513[1]
  i2512.m_FreeSpin = i2513[2]
  return i2512
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2514 = root || request.c( 'UnityEngine.JointLimits' )
  var i2515 = data
  i2514.m_Min = i2515[0]
  i2514.m_Max = i2515[1]
  i2514.m_Bounciness = i2515[2]
  i2514.m_BounceMinVelocity = i2515[3]
  i2514.m_ContactDistance = i2515[4]
  i2514.minBounce = i2515[5]
  i2514.maxBounce = i2515[6]
  return i2514
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2516 = root || request.c( 'UnityEngine.JointDrive' )
  var i2517 = data
  i2516.m_PositionSpring = i2517[0]
  i2516.m_PositionDamper = i2517[1]
  i2516.m_MaximumForce = i2517[2]
  i2516.m_UseAcceleration = i2517[3]
  return i2516
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2518 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2519 = data
  i2518.m_Spring = i2519[0]
  i2518.m_Damper = i2519[1]
  return i2518
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2520 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2521 = data
  i2520.m_Limit = i2521[0]
  i2520.m_Bounciness = i2521[1]
  i2520.m_ContactDistance = i2521[2]
  return i2520
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2522 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2523 = data
  i2522.m_ExtremumSlip = i2523[0]
  i2522.m_ExtremumValue = i2523[1]
  i2522.m_AsymptoteSlip = i2523[2]
  i2522.m_AsymptoteValue = i2523[3]
  i2522.m_Stiffness = i2523[4]
  return i2522
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2524 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2525 = data
  i2524.m_LowerAngle = i2525[0]
  i2524.m_UpperAngle = i2525[1]
  return i2524
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2526 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2527 = data
  i2526.m_MotorSpeed = i2527[0]
  i2526.m_MaximumMotorTorque = i2527[1]
  return i2526
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2528 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2529 = data
  i2528.m_DampingRatio = i2529[0]
  i2528.m_Frequency = i2529[1]
  i2528.m_Angle = i2529[2]
  return i2528
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2530 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2531 = data
  i2530.m_LowerTranslation = i2531[0]
  i2530.m_UpperTranslation = i2531[1]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2533 = data
  i2532.name = i2533[0]
  i2532.width = i2533[1]
  i2532.height = i2533[2]
  i2532.mipmapCount = i2533[3]
  i2532.anisoLevel = i2533[4]
  i2532.filterMode = i2533[5]
  i2532.hdr = !!i2533[6]
  i2532.format = i2533[7]
  i2532.wrapMode = i2533[8]
  i2532.alphaIsTransparency = !!i2533[9]
  i2532.alphaSource = i2533[10]
  i2532.graphicsFormat = i2533[11]
  i2532.sRGBTexture = !!i2533[12]
  i2532.desiredColorSpace = i2533[13]
  i2532.wrapU = i2533[14]
  i2532.wrapV = i2533[15]
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2534 = root || new pc.UnityMaterial()
  var i2535 = data
  i2534.name = i2535[0]
  request.r(i2535[1], i2535[2], 0, i2534, 'shader')
  i2534.renderQueue = i2535[3]
  i2534.enableInstancing = !!i2535[4]
  var i2537 = i2535[5]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2537[i + 0]) );
  }
  i2534.floatParameters = i2536
  var i2539 = i2535[6]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2539[i + 0]) );
  }
  i2534.colorParameters = i2538
  var i2541 = i2535[7]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2541[i + 0]) );
  }
  i2534.vectorParameters = i2540
  var i2543 = i2535[8]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2543[i + 0]) );
  }
  i2534.textureParameters = i2542
  var i2545 = i2535[9]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2545[i + 0]) );
  }
  i2534.materialFlags = i2544
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2549 = data
  i2548.name = i2549[0]
  i2548.value = i2549[1]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2553 = data
  i2552.name = i2553[0]
  i2552.value = new pc.Color(i2553[1], i2553[2], i2553[3], i2553[4])
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2557 = data
  i2556.name = i2557[0]
  i2556.value = new pc.Vec4( i2557[1], i2557[2], i2557[3], i2557[4] )
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2561 = data
  i2560.name = i2561[0]
  request.r(i2561[1], i2561[2], 0, i2560, 'value')
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2565 = data
  i2564.name = i2565[0]
  i2564.enabled = !!i2565[1]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2567 = data
  i2566.name = i2567[0]
  i2566.index = i2567[1]
  i2566.startup = !!i2567[2]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2569 = data
  i2568.aspect = i2569[0]
  i2568.orthographic = !!i2569[1]
  i2568.orthographicSize = i2569[2]
  i2568.backgroundColor = new pc.Color(i2569[3], i2569[4], i2569[5], i2569[6])
  i2568.nearClipPlane = i2569[7]
  i2568.farClipPlane = i2569[8]
  i2568.fieldOfView = i2569[9]
  i2568.depth = i2569[10]
  i2568.clearFlags = i2569[11]
  i2568.cullingMask = i2569[12]
  i2568.rect = i2569[13]
  request.r(i2569[14], i2569[15], 0, i2568, 'targetTexture')
  i2568.usePhysicalProperties = !!i2569[16]
  i2568.focalLength = i2569[17]
  i2568.sensorSize = new pc.Vec2( i2569[18], i2569[19] )
  i2568.lensShift = new pc.Vec2( i2569[20], i2569[21] )
  i2568.gateFit = i2569[22]
  i2568.commandBufferCount = i2569[23]
  i2568.cameraType = i2569[24]
  i2568.enabled = !!i2569[25]
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2571 = data
  i2570.name = i2571[0]
  i2570.tagId = i2571[1]
  i2570.enabled = !!i2571[2]
  i2570.isStatic = !!i2571[3]
  i2570.layer = i2571[4]
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2573 = data
  i2572.pivot = new pc.Vec2( i2573[0], i2573[1] )
  i2572.anchorMin = new pc.Vec2( i2573[2], i2573[3] )
  i2572.anchorMax = new pc.Vec2( i2573[4], i2573[5] )
  i2572.sizeDelta = new pc.Vec2( i2573[6], i2573[7] )
  i2572.anchoredPosition3D = new pc.Vec3( i2573[8], i2573[9], i2573[10] )
  i2572.rotation = new pc.Quat(i2573[11], i2573[12], i2573[13], i2573[14])
  i2572.scale = new pc.Vec3( i2573[15], i2573[16], i2573[17] )
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2575 = data
  i2574.planeDistance = i2575[0]
  i2574.referencePixelsPerUnit = i2575[1]
  i2574.isFallbackOverlay = !!i2575[2]
  i2574.renderMode = i2575[3]
  i2574.renderOrder = i2575[4]
  i2574.sortingLayerName = i2575[5]
  i2574.sortingOrder = i2575[6]
  i2574.scaleFactor = i2575[7]
  request.r(i2575[8], i2575[9], 0, i2574, 'worldCamera')
  i2574.overrideSorting = !!i2575[10]
  i2574.pixelPerfect = !!i2575[11]
  i2574.targetDisplay = i2575[12]
  i2574.overridePixelPerfect = !!i2575[13]
  i2574.enabled = !!i2575[14]
  return i2574
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2576 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2577 = data
  i2576.m_UiScaleMode = i2577[0]
  i2576.m_ReferencePixelsPerUnit = i2577[1]
  i2576.m_ScaleFactor = i2577[2]
  i2576.m_ReferenceResolution = new pc.Vec2( i2577[3], i2577[4] )
  i2576.m_ScreenMatchMode = i2577[5]
  i2576.m_MatchWidthOrHeight = i2577[6]
  i2576.m_PhysicalUnit = i2577[7]
  i2576.m_FallbackScreenDPI = i2577[8]
  i2576.m_DefaultSpriteDPI = i2577[9]
  i2576.m_DynamicPixelsPerUnit = i2577[10]
  i2576.m_PresetInfoIsWorld = !!i2577[11]
  return i2576
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2578 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2579 = data
  i2578.m_IgnoreReversedGraphics = !!i2579[0]
  i2578.m_BlockingObjects = i2579[1]
  i2578.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2579[2] )
  return i2578
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i2580 = root || request.c( 'Playable.GameManager' )
  var i2581 = data
  i2580.EventCountdownEndGame = request.d('System.Action', i2581[0], i2580.EventCountdownEndGame)
  i2580._totalEvent = i2581[1]
  i2580._endTime = i2581[2]
  request.r(i2581[3], i2581[4], 0, i2580, '_backgroundMusic')
  request.r(i2581[5], i2581[6], 0, i2580, '_backgroundTexture')
  request.r(i2581[7], i2581[8], 0, i2580, '_btnBlock')
  request.r(i2581[9], i2581[10], 0, i2580, '_background')
  request.r(i2581[11], i2581[12], 0, i2580, '_progressFillImage')
  request.r(i2581[13], i2581[14], 0, i2580, '_progressText')
  i2580._progressTweenDuration = i2581[15]
  request.r(i2581[16], i2581[17], 0, i2580, '_timerFillImage')
  request.r(i2581[18], i2581[19], 0, i2580, '_timerText')
  i2580._timerPunchScale = i2581[20]
  request.r(i2581[21], i2581[22], 0, i2580, '_textureLogo')
  request.r(i2581[23], i2581[24], 0, i2580, '_logo1')
  request.r(i2581[25], i2581[26], 0, i2580, '_logo2')
  request.r(i2581[27], i2581[28], 0, i2580, '_btnLogoBot')
  request.r(i2581[29], i2581[30], 0, i2580, '_btnLogo')
  request.r(i2581[31], i2581[32], 0, i2580, '_btnPlay')
  return i2580
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2582 = root || request.c( 'System.Action' )
  var i2583 = data
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2585 = data
  i2584.cullTransparentMesh = !!i2585[0]
  return i2584
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2586 = root || request.c( 'UnityEngine.UI.Image' )
  var i2587 = data
  request.r(i2587[0], i2587[1], 0, i2586, 'm_Sprite')
  i2586.m_Type = i2587[2]
  i2586.m_PreserveAspect = !!i2587[3]
  i2586.m_FillCenter = !!i2587[4]
  i2586.m_FillMethod = i2587[5]
  i2586.m_FillAmount = i2587[6]
  i2586.m_FillClockwise = !!i2587[7]
  i2586.m_FillOrigin = i2587[8]
  i2586.m_UseSpriteMesh = !!i2587[9]
  i2586.m_PixelsPerUnitMultiplier = i2587[10]
  request.r(i2587[11], i2587[12], 0, i2586, 'm_Material')
  i2586.m_Maskable = !!i2587[13]
  i2586.m_Color = new pc.Color(i2587[14], i2587[15], i2587[16], i2587[17])
  i2586.m_RaycastTarget = !!i2587[18]
  i2586.m_RaycastPadding = new pc.Vec4( i2587[19], i2587[20], i2587[21], i2587[22] )
  return i2586
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2588 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2589 = data
  request.r(i2589[0], i2589[1], 0, i2588, 'm_Texture')
  i2588.m_UVRect = UnityEngine.Rect.MinMaxRect(i2589[2], i2589[3], i2589[4], i2589[5])
  request.r(i2589[6], i2589[7], 0, i2588, 'm_Material')
  i2588.m_Maskable = !!i2589[8]
  i2588.m_Color = new pc.Color(i2589[9], i2589[10], i2589[11], i2589[12])
  i2588.m_RaycastTarget = !!i2589[13]
  i2588.m_RaycastPadding = new pc.Vec4( i2589[14], i2589[15], i2589[16], i2589[17] )
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2591 = data
  request.r(i2591[0], i2591[1], 0, i2590, 'clip')
  request.r(i2591[2], i2591[3], 0, i2590, 'outputAudioMixerGroup')
  i2590.playOnAwake = !!i2591[4]
  i2590.loop = !!i2591[5]
  i2590.time = i2591[6]
  i2590.volume = i2591[7]
  i2590.pitch = i2591[8]
  i2590.enabled = !!i2591[9]
  return i2590
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2592 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2593 = data
  i2592.m_hasFontAssetChanged = !!i2593[0]
  request.r(i2593[1], i2593[2], 0, i2592, 'm_baseMaterial')
  i2592.m_maskOffset = new pc.Vec4( i2593[3], i2593[4], i2593[5], i2593[6] )
  i2592.m_text = i2593[7]
  i2592.m_isRightToLeft = !!i2593[8]
  request.r(i2593[9], i2593[10], 0, i2592, 'm_fontAsset')
  request.r(i2593[11], i2593[12], 0, i2592, 'm_sharedMaterial')
  var i2595 = i2593[13]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 2) {
  request.r(i2595[i + 0], i2595[i + 1], 2, i2594, '')
  }
  i2592.m_fontSharedMaterials = i2594
  request.r(i2593[14], i2593[15], 0, i2592, 'm_fontMaterial')
  var i2597 = i2593[16]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 2) {
  request.r(i2597[i + 0], i2597[i + 1], 2, i2596, '')
  }
  i2592.m_fontMaterials = i2596
  i2592.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2593[17], i2593[18], i2593[19], i2593[20])
  i2592.m_fontColor = new pc.Color(i2593[21], i2593[22], i2593[23], i2593[24])
  i2592.m_enableVertexGradient = !!i2593[25]
  i2592.m_colorMode = i2593[26]
  i2592.m_fontColorGradient = request.d('TMPro.VertexGradient', i2593[27], i2592.m_fontColorGradient)
  request.r(i2593[28], i2593[29], 0, i2592, 'm_fontColorGradientPreset')
  request.r(i2593[30], i2593[31], 0, i2592, 'm_spriteAsset')
  i2592.m_tintAllSprites = !!i2593[32]
  request.r(i2593[33], i2593[34], 0, i2592, 'm_StyleSheet')
  i2592.m_TextStyleHashCode = i2593[35]
  i2592.m_overrideHtmlColors = !!i2593[36]
  i2592.m_faceColor = UnityEngine.Color32.ConstructColor(i2593[37], i2593[38], i2593[39], i2593[40])
  i2592.m_fontSize = i2593[41]
  i2592.m_fontSizeBase = i2593[42]
  i2592.m_fontWeight = i2593[43]
  i2592.m_enableAutoSizing = !!i2593[44]
  i2592.m_fontSizeMin = i2593[45]
  i2592.m_fontSizeMax = i2593[46]
  i2592.m_fontStyle = i2593[47]
  i2592.m_HorizontalAlignment = i2593[48]
  i2592.m_VerticalAlignment = i2593[49]
  i2592.m_textAlignment = i2593[50]
  i2592.m_characterSpacing = i2593[51]
  i2592.m_wordSpacing = i2593[52]
  i2592.m_lineSpacing = i2593[53]
  i2592.m_lineSpacingMax = i2593[54]
  i2592.m_paragraphSpacing = i2593[55]
  i2592.m_charWidthMaxAdj = i2593[56]
  i2592.m_TextWrappingMode = i2593[57]
  i2592.m_wordWrappingRatios = i2593[58]
  i2592.m_overflowMode = i2593[59]
  request.r(i2593[60], i2593[61], 0, i2592, 'm_linkedTextComponent')
  request.r(i2593[62], i2593[63], 0, i2592, 'parentLinkedComponent')
  i2592.m_enableKerning = !!i2593[64]
  var i2599 = i2593[65]
  var i2598 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.add(i2599[i + 0]);
  }
  i2592.m_ActiveFontFeatures = i2598
  i2592.m_enableExtraPadding = !!i2593[66]
  i2592.checkPaddingRequired = !!i2593[67]
  i2592.m_isRichText = !!i2593[68]
  i2592.m_parseCtrlCharacters = !!i2593[69]
  i2592.m_isOrthographic = !!i2593[70]
  i2592.m_isCullingEnabled = !!i2593[71]
  i2592.m_horizontalMapping = i2593[72]
  i2592.m_verticalMapping = i2593[73]
  i2592.m_uvLineOffset = i2593[74]
  i2592.m_geometrySortingOrder = i2593[75]
  i2592.m_IsTextObjectScaleStatic = !!i2593[76]
  i2592.m_VertexBufferAutoSizeReduction = !!i2593[77]
  i2592.m_useMaxVisibleDescender = !!i2593[78]
  i2592.m_pageToDisplay = i2593[79]
  i2592.m_margin = new pc.Vec4( i2593[80], i2593[81], i2593[82], i2593[83] )
  i2592.m_isUsingLegacyAnimationComponent = !!i2593[84]
  i2592.m_isVolumetricText = !!i2593[85]
  request.r(i2593[86], i2593[87], 0, i2592, 'm_Material')
  i2592.m_EmojiFallbackSupport = !!i2593[88]
  i2592.m_Maskable = !!i2593[89]
  i2592.m_Color = new pc.Color(i2593[90], i2593[91], i2593[92], i2593[93])
  i2592.m_RaycastTarget = !!i2593[94]
  i2592.m_RaycastPadding = new pc.Vec4( i2593[95], i2593[96], i2593[97], i2593[98] )
  return i2592
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2602 = root || request.c( 'TMPro.VertexGradient' )
  var i2603 = data
  i2602.topLeft = new pc.Color(i2603[0], i2603[1], i2603[2], i2603[3])
  i2602.topRight = new pc.Color(i2603[4], i2603[5], i2603[6], i2603[7])
  i2602.bottomLeft = new pc.Color(i2603[8], i2603[9], i2603[10], i2603[11])
  i2602.bottomRight = new pc.Color(i2603[12], i2603[13], i2603[14], i2603[15])
  return i2602
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2606 = root || request.c( 'UnityEngine.UI.Button' )
  var i2607 = data
  i2606.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2607[0], i2606.m_OnClick)
  i2606.m_Navigation = request.d('UnityEngine.UI.Navigation', i2607[1], i2606.m_Navigation)
  i2606.m_Transition = i2607[2]
  i2606.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2607[3], i2606.m_Colors)
  i2606.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2607[4], i2606.m_SpriteState)
  i2606.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2607[5], i2606.m_AnimationTriggers)
  i2606.m_Interactable = !!i2607[6]
  request.r(i2607[7], i2607[8], 0, i2606, 'm_TargetGraphic')
  return i2606
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2608 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2609 = data
  i2608.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2609[0], i2608.m_PersistentCalls)
  return i2608
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2610 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2611 = data
  var i2613 = i2611[0]
  var i2612 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.add(request.d('UnityEngine.Events.PersistentCall', i2613[i + 0]));
  }
  i2610.m_Calls = i2612
  return i2610
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2616 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2617 = data
  request.r(i2617[0], i2617[1], 0, i2616, 'm_Target')
  i2616.m_TargetAssemblyTypeName = i2617[2]
  i2616.m_MethodName = i2617[3]
  i2616.m_Mode = i2617[4]
  i2616.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2617[5], i2616.m_Arguments)
  i2616.m_CallState = i2617[6]
  return i2616
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2618 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2619 = data
  i2618.m_Mode = i2619[0]
  i2618.m_WrapAround = !!i2619[1]
  request.r(i2619[2], i2619[3], 0, i2618, 'm_SelectOnUp')
  request.r(i2619[4], i2619[5], 0, i2618, 'm_SelectOnDown')
  request.r(i2619[6], i2619[7], 0, i2618, 'm_SelectOnLeft')
  request.r(i2619[8], i2619[9], 0, i2618, 'm_SelectOnRight')
  return i2618
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2620 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2621 = data
  i2620.m_NormalColor = new pc.Color(i2621[0], i2621[1], i2621[2], i2621[3])
  i2620.m_HighlightedColor = new pc.Color(i2621[4], i2621[5], i2621[6], i2621[7])
  i2620.m_PressedColor = new pc.Color(i2621[8], i2621[9], i2621[10], i2621[11])
  i2620.m_SelectedColor = new pc.Color(i2621[12], i2621[13], i2621[14], i2621[15])
  i2620.m_DisabledColor = new pc.Color(i2621[16], i2621[17], i2621[18], i2621[19])
  i2620.m_ColorMultiplier = i2621[20]
  i2620.m_FadeDuration = i2621[21]
  return i2620
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2622 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2623 = data
  request.r(i2623[0], i2623[1], 0, i2622, 'm_HighlightedSprite')
  request.r(i2623[2], i2623[3], 0, i2622, 'm_PressedSprite')
  request.r(i2623[4], i2623[5], 0, i2622, 'm_SelectedSprite')
  request.r(i2623[6], i2623[7], 0, i2622, 'm_DisabledSprite')
  return i2622
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2624 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2625 = data
  i2624.m_NormalTrigger = i2625[0]
  i2624.m_HighlightedTrigger = i2625[1]
  i2624.m_PressedTrigger = i2625[2]
  i2624.m_SelectedTrigger = i2625[3]
  i2624.m_DisabledTrigger = i2625[4]
  return i2624
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2626 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2627 = data
  request.r(i2627[0], i2627[1], 0, i2626, 'm_ObjectArgument')
  i2626.m_ObjectArgumentAssemblyTypeName = i2627[2]
  i2626.m_IntArgument = i2627[3]
  i2626.m_FloatArgument = i2627[4]
  i2626.m_StringArgument = i2627[5]
  i2626.m_BoolArgument = !!i2627[6]
  return i2626
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2628 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2629 = data
  i2628.m_ShowMaskGraphic = !!i2629[0]
  return i2628
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i2630 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i2631 = data
  i2630.m_Padding = new pc.Vec4( i2631[0], i2631[1], i2631[2], i2631[3] )
  i2630.m_Softness = new pc.Vec2( i2631[4], i2631[5] )
  return i2630
}

Deserializers["GameController"] = function (request, data, root) {
  var i2632 = root || request.c( 'GameController' )
  var i2633 = data
  i2632._autoStart = !!i2633[0]
  request.r(i2633[1], i2633[2], 0, i2632, '_characterSkeletonGraphic')
  request.r(i2633[3], i2633[4], 0, i2632, '_characterRect')
  i2632._step1LoopAnimation = i2633[5]
  i2632._step2IdleAnimation = i2633[6]
  i2632._winAnimation = i2633[7]
  i2632._loseAnimation = i2633[8]
  i2632._step1CharacterPosition = new pc.Vec2( i2633[9], i2633[10] )
  i2632._step2CharacterCenterPosition = new pc.Vec2( i2633[11], i2633[12] )
  i2632._step2CharacterLeftPosition = new pc.Vec2( i2633[13], i2633[14] )
  i2632._step2CharacterRightPosition = new pc.Vec2( i2633[15], i2633[16] )
  var i2635 = i2633[17]
  var i2634 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.add(i2635[i + 0]);
  }
  i2632._step1SkinParts = i2634
  request.r(i2633[18], i2633[19], 0, i2632, '_objManGirl')
  request.r(i2633[20], i2633[21], 0, i2632, '_step1Background')
  request.r(i2633[22], i2633[23], 0, i2632, '_step2Background')
  request.r(i2633[24], i2633[25], 0, i2632, '_text')
  request.r(i2633[26], i2633[27], 0, i2632, '_time')
  request.r(i2633[28], i2633[29], 0, i2632, '_dialogueText')
  i2632._fallbackDialogueDuration = i2633[30]
  var i2637 = i2633[31]
  var i2636 = new (System.Collections.Generic.List$1(Bridge.ns('GameController+DialogueLine')))
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.add(request.d('GameController+DialogueLine', i2637[i + 0]));
  }
  i2632._step1Dialogues = i2636
  request.r(i2633[32], i2633[33], 0, i2632, '_fallbackAudioSource')
  request.r(i2633[34], i2633[35], 0, i2632, '_step2OptionsRoot')
  i2632._step2SelectionTimeout = i2633[36]
  request.r(i2633[37], i2633[38], 0, i2632, '_step2HandRoot')
  request.r(i2633[39], i2633[40], 0, i2632, '_step2HandSkeletonGraphic')
  i2632._step2HandIdleAnimation = i2633[41]
  i2632._step2HandTabAnimation = i2633[42]
  i2632._step2HandLeftPosition = new pc.Vec2( i2633[43], i2633[44] )
  i2632._step2HandRightPosition = new pc.Vec2( i2633[45], i2633[46] )
  i2632._step2HandMoveDuration = i2633[47]
  i2632._step2HandBaseScale = i2633[48]
  i2632._step2HandPressScale = i2633[49]
  i2632._step2HandTabHoldDuration = i2633[50]
  var i2639 = i2633[51]
  var i2638 = new (System.Collections.Generic.List$1(Bridge.ns('GameController+Step2Option')))
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.add(request.d('GameController+Step2Option', i2639[i + 0]));
  }
  i2632._step2Options = i2638
  i2632._playResultAnimationLoop = !!i2633[52]
  return i2632
}

Deserializers["GameController+DialogueLine"] = function (request, data, root) {
  var i2644 = root || request.c( 'GameController+DialogueLine' )
  var i2645 = data
  request.r(i2645[0], i2645[1], 0, i2644, 'AudioClip')
  i2644.Dialogue = i2645[2]
  return i2644
}

Deserializers["GameController+Step2Option"] = function (request, data, root) {
  var i2648 = root || request.c( 'GameController+Step2Option' )
  var i2649 = data
  i2648.Side = i2649[0]
  var i2651 = i2649[1]
  var i2650 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.add(i2651[i + 0]);
  }
  i2648.SkinParts = i2650
  i2648.IsWin = !!i2649[2]
  return i2648
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2652 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2653 = data
  i2652.m_Spacing = i2653[0]
  i2652.m_ChildForceExpandWidth = !!i2653[1]
  i2652.m_ChildForceExpandHeight = !!i2653[2]
  i2652.m_ChildControlWidth = !!i2653[3]
  i2652.m_ChildControlHeight = !!i2653[4]
  i2652.m_ChildScaleWidth = !!i2653[5]
  i2652.m_ChildScaleHeight = !!i2653[6]
  i2652.m_ReverseArrangement = !!i2653[7]
  i2652.m_Padding = UnityEngine.RectOffset.FromPaddings(i2653[8], i2653[9], i2653[10], i2653[11])
  i2652.m_ChildAlignment = i2653[12]
  return i2652
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2654 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2655 = data
  request.r(i2655[0], i2655[1], 0, i2654, 'skeletonDataAsset')
  request.r(i2655[2], i2655[3], 0, i2654, 'additiveMaterial')
  request.r(i2655[4], i2655[5], 0, i2654, 'multiplyMaterial')
  request.r(i2655[6], i2655[7], 0, i2654, 'screenMaterial')
  i2654.initialSkinName = i2655[8]
  i2654.initialFlipX = !!i2655[9]
  i2654.initialFlipY = !!i2655[10]
  i2654.startingAnimation = i2655[11]
  i2654.startingLoop = !!i2655[12]
  i2654.timeScale = i2655[13]
  i2654.freeze = !!i2655[14]
  i2654.layoutScaleMode = i2655[15]
  i2654.updateWhenInvisible = i2655[16]
  i2654.allowMultipleCanvasRenderers = !!i2655[17]
  var i2657 = i2655[18]
  var i2656 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2657.length; i += 2) {
  request.r(i2657[i + 0], i2657[i + 1], 1, i2656, '')
  }
  i2654.canvasRenderers = i2656
  i2654.enableSeparatorSlots = !!i2655[19]
  i2654.updateSeparatorPartLocation = !!i2655[20]
  i2654.updateSeparatorPartScale = !!i2655[21]
  i2654.disableMeshAssignmentOnOverride = !!i2655[22]
  i2654.referenceSize = new pc.Vec2( i2655[23], i2655[24] )
  i2654.referenceScale = i2655[25]
  i2654.rectTransformSize = new pc.Vec2( i2655[26], i2655[27] )
  i2654.editReferenceRect = !!i2655[28]
  var i2659 = i2655[29]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.push( i2659[i + 0] );
  }
  i2654.separatorSlotNames = i2658
  var i2661 = i2655[30]
  var i2660 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2661.length; i += 2) {
  request.r(i2661[i + 0], i2661[i + 1], 1, i2660, '')
  }
  i2654.separatorParts = i2660
  i2654.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2655[31], i2654.meshGenerator)
  i2654.updateTiming = i2655[32]
  i2654.unscaledTime = !!i2655[33]
  request.r(i2655[34], i2655[35], 0, i2654, 'm_Material')
  i2654.m_Maskable = !!i2655[36]
  i2654.m_Color = new pc.Color(i2655[37], i2655[38], i2655[39], i2655[40])
  i2654.m_RaycastTarget = !!i2655[41]
  i2654.m_RaycastPadding = new pc.Vec4( i2655[42], i2655[43], i2655[44], i2655[45] )
  return i2654
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2668 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2669 = data
  i2668.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2669[0], i2668.settings)
  return i2668
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2670 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2671 = data
  i2670.useClipping = !!i2671[0]
  i2670.zSpacing = i2671[1]
  i2670.pmaVertexColors = !!i2671[2]
  i2670.tintBlack = !!i2671[3]
  i2670.canvasGroupTintBlack = !!i2671[4]
  i2670.calculateTangents = !!i2671[5]
  i2670.addNormals = !!i2671[6]
  i2670.immutableTriangles = !!i2671[7]
  return i2670
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i2672 = root || request.c( 'Playable.AudioManager' )
  var i2673 = data
  var i2675 = i2673[0]
  var i2674 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.add(request.d('Playable.SoundData', i2675[i + 0]));
  }
  i2672._sounds = i2674
  request.r(i2673[1], i2673[2], 0, i2672, '_audioMusic')
  request.r(i2673[3], i2673[4], 0, i2672, '_audioSound')
  return i2672
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i2678 = root || request.c( 'Playable.SoundData' )
  var i2679 = data
  i2678.Type = i2679[0]
  request.r(i2679[1], i2679[2], 0, i2678, 'Clip')
  return i2678
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2680 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2681 = data
  request.r(i2681[0], i2681[1], 0, i2680, 'm_FirstSelected')
  i2680.m_sendNavigationEvents = !!i2681[2]
  i2680.m_DragThreshold = i2681[3]
  return i2680
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2682 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2683 = data
  i2682.m_HorizontalAxis = i2683[0]
  i2682.m_VerticalAxis = i2683[1]
  i2682.m_SubmitButton = i2683[2]
  i2682.m_CancelButton = i2683[3]
  i2682.m_InputActionsPerSecond = i2683[4]
  i2682.m_RepeatDelay = i2683[5]
  i2682.m_ForceModuleActive = !!i2683[6]
  i2682.m_SendPointerHoverToParent = !!i2683[7]
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2685 = data
  i2684.ambientIntensity = i2685[0]
  i2684.reflectionIntensity = i2685[1]
  i2684.ambientMode = i2685[2]
  i2684.ambientLight = new pc.Color(i2685[3], i2685[4], i2685[5], i2685[6])
  i2684.ambientSkyColor = new pc.Color(i2685[7], i2685[8], i2685[9], i2685[10])
  i2684.ambientGroundColor = new pc.Color(i2685[11], i2685[12], i2685[13], i2685[14])
  i2684.ambientEquatorColor = new pc.Color(i2685[15], i2685[16], i2685[17], i2685[18])
  i2684.fogColor = new pc.Color(i2685[19], i2685[20], i2685[21], i2685[22])
  i2684.fogEndDistance = i2685[23]
  i2684.fogStartDistance = i2685[24]
  i2684.fogDensity = i2685[25]
  i2684.fog = !!i2685[26]
  request.r(i2685[27], i2685[28], 0, i2684, 'skybox')
  i2684.fogMode = i2685[29]
  var i2687 = i2685[30]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2687[i + 0]) );
  }
  i2684.lightmaps = i2686
  i2684.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2685[31], i2684.lightProbes)
  i2684.lightmapsMode = i2685[32]
  i2684.mixedBakeMode = i2685[33]
  i2684.environmentLightingMode = i2685[34]
  i2684.ambientProbe = new pc.SphericalHarmonicsL2(i2685[35])
  request.r(i2685[36], i2685[37], 0, i2684, 'customReflection')
  request.r(i2685[38], i2685[39], 0, i2684, 'defaultReflection')
  i2684.defaultReflectionMode = i2685[40]
  i2684.defaultReflectionResolution = i2685[41]
  i2684.sunLightObjectId = i2685[42]
  i2684.pixelLightCount = i2685[43]
  i2684.defaultReflectionHDR = !!i2685[44]
  i2684.hasLightDataAsset = !!i2685[45]
  i2684.hasManualGenerate = !!i2685[46]
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2691 = data
  request.r(i2691[0], i2691[1], 0, i2690, 'lightmapColor')
  request.r(i2691[2], i2691[3], 0, i2690, 'lightmapDirection')
  request.r(i2691[4], i2691[5], 0, i2690, 'shadowMask')
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2692 = root || new UnityEngine.LightProbes()
  var i2693 = data
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2701 = data
  var i2703 = i2701[0]
  var i2702 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2703[i + 0]));
  }
  i2700.ShaderCompilationErrors = i2702
  i2700.name = i2701[1]
  i2700.guid = i2701[2]
  var i2705 = i2701[3]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( i2705[i + 0] );
  }
  i2700.shaderDefinedKeywords = i2704
  var i2707 = i2701[4]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2707[i + 0]) );
  }
  i2700.passes = i2706
  var i2709 = i2701[5]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2709[i + 0]) );
  }
  i2700.usePasses = i2708
  var i2711 = i2701[6]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2711[i + 0]) );
  }
  i2700.defaultParameterValues = i2710
  request.r(i2701[7], i2701[8], 0, i2700, 'unityFallbackShader')
  i2700.readDepth = !!i2701[9]
  i2700.hasDepthOnlyPass = !!i2701[10]
  i2700.isCreatedByShaderGraph = !!i2701[11]
  i2700.disableBatching = !!i2701[12]
  i2700.compiled = !!i2701[13]
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2715 = data
  i2714.shaderName = i2715[0]
  i2714.errorMessage = i2715[1]
  return i2714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2718 = root || new pc.UnityShaderPass()
  var i2719 = data
  i2718.id = i2719[0]
  i2718.subShaderIndex = i2719[1]
  i2718.name = i2719[2]
  i2718.passType = i2719[3]
  i2718.grabPassTextureName = i2719[4]
  i2718.usePass = !!i2719[5]
  i2718.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[6], i2718.zTest)
  i2718.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[7], i2718.zWrite)
  i2718.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[8], i2718.culling)
  i2718.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2719[9], i2718.blending)
  i2718.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2719[10], i2718.alphaBlending)
  i2718.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[11], i2718.colorWriteMask)
  i2718.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[12], i2718.offsetUnits)
  i2718.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[13], i2718.offsetFactor)
  i2718.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[14], i2718.stencilRef)
  i2718.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[15], i2718.stencilReadMask)
  i2718.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[16], i2718.stencilWriteMask)
  i2718.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2719[17], i2718.stencilOp)
  i2718.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2719[18], i2718.stencilOpFront)
  i2718.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2719[19], i2718.stencilOpBack)
  var i2721 = i2719[20]
  var i2720 = []
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2721[i + 0]) );
  }
  i2718.tags = i2720
  var i2723 = i2719[21]
  var i2722 = []
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.push( i2723[i + 0] );
  }
  i2718.passDefinedKeywords = i2722
  var i2725 = i2719[22]
  var i2724 = []
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2725[i + 0]) );
  }
  i2718.passDefinedKeywordGroups = i2724
  var i2727 = i2719[23]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2727[i + 0]) );
  }
  i2718.variants = i2726
  var i2729 = i2719[24]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2729[i + 0]) );
  }
  i2718.excludedVariants = i2728
  i2718.hasDepthReader = !!i2719[25]
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2731 = data
  i2730.val = i2731[0]
  i2730.name = i2731[1]
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2733 = data
  i2732.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2733[0], i2732.src)
  i2732.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2733[1], i2732.dst)
  i2732.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2733[2], i2732.op)
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2735 = data
  i2734.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2735[0], i2734.pass)
  i2734.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2735[1], i2734.fail)
  i2734.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2735[2], i2734.zFail)
  i2734.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2735[3], i2734.comp)
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2739 = data
  i2738.name = i2739[0]
  i2738.value = i2739[1]
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2743 = data
  var i2745 = i2743[0]
  var i2744 = []
  for(var i = 0; i < i2745.length; i += 1) {
    i2744.push( i2745[i + 0] );
  }
  i2742.keywords = i2744
  i2742.hasDiscard = !!i2743[1]
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2749 = data
  i2748.passId = i2749[0]
  i2748.subShaderIndex = i2749[1]
  var i2751 = i2749[2]
  var i2750 = []
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.push( i2751[i + 0] );
  }
  i2748.keywords = i2750
  i2748.vertexProgram = i2749[3]
  i2748.fragmentProgram = i2749[4]
  i2748.exportedForWebGl2 = !!i2749[5]
  i2748.readDepth = !!i2749[6]
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2755 = data
  request.r(i2755[0], i2755[1], 0, i2754, 'shader')
  i2754.pass = i2755[2]
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2759 = data
  i2758.name = i2759[0]
  i2758.type = i2759[1]
  i2758.value = new pc.Vec4( i2759[2], i2759[3], i2759[4], i2759[5] )
  i2758.textureValue = i2759[6]
  i2758.shaderPropertyFlag = i2759[7]
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2761 = data
  i2760.name = i2761[0]
  request.r(i2761[1], i2761[2], 0, i2760, 'texture')
  i2760.aabb = i2761[3]
  i2760.vertices = i2761[4]
  i2760.triangles = i2761[5]
  i2760.textureRect = UnityEngine.Rect.MinMaxRect(i2761[6], i2761[7], i2761[8], i2761[9])
  i2760.packedRect = UnityEngine.Rect.MinMaxRect(i2761[10], i2761[11], i2761[12], i2761[13])
  i2760.border = new pc.Vec4( i2761[14], i2761[15], i2761[16], i2761[17] )
  i2760.transparency = i2761[18]
  i2760.bounds = i2761[19]
  i2760.pixelsPerUnit = i2761[20]
  i2760.textureWidth = i2761[21]
  i2760.textureHeight = i2761[22]
  i2760.nativeSize = new pc.Vec2( i2761[23], i2761[24] )
  i2760.pivot = new pc.Vec2( i2761[25], i2761[26] )
  i2760.textureRectOffset = new pc.Vec2( i2761[27], i2761[28] )
  return i2760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2763 = data
  i2762.name = i2763[0]
  return i2762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2765 = data
  i2764.name = i2765[0]
  i2764.ascent = i2765[1]
  i2764.originalLineHeight = i2765[2]
  i2764.fontSize = i2765[3]
  var i2767 = i2765[4]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2767[i + 0]) );
  }
  i2764.characterInfo = i2766
  request.r(i2765[5], i2765[6], 0, i2764, 'texture')
  i2764.originalFontSize = i2765[7]
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2771 = data
  i2770.index = i2771[0]
  i2770.advance = i2771[1]
  i2770.bearing = i2771[2]
  i2770.glyphWidth = i2771[3]
  i2770.glyphHeight = i2771[4]
  i2770.minX = i2771[5]
  i2770.maxX = i2771[6]
  i2770.minY = i2771[7]
  i2770.maxY = i2771[8]
  i2770.uvBottomLeftX = i2771[9]
  i2770.uvBottomLeftY = i2771[10]
  i2770.uvBottomRightX = i2771[11]
  i2770.uvBottomRightY = i2771[12]
  i2770.uvTopLeftX = i2771[13]
  i2770.uvTopLeftY = i2771[14]
  i2770.uvTopRightX = i2771[15]
  i2770.uvTopRightY = i2771[16]
  return i2770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2773 = data
  i2772.name = i2773[0]
  i2772.bytes64 = i2773[1]
  i2772.data = i2773[2]
  return i2772
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2774 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2775 = data
  i2774.normalStyle = i2775[0]
  i2774.normalSpacingOffset = i2775[1]
  i2774.boldStyle = i2775[2]
  i2774.boldSpacing = i2775[3]
  i2774.italicStyle = i2775[4]
  i2774.tabSize = i2775[5]
  request.r(i2775[6], i2775[7], 0, i2774, 'atlas')
  i2774.m_SourceFontFileGUID = i2775[8]
  i2774.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2775[9], i2774.m_CreationSettings)
  request.r(i2775[10], i2775[11], 0, i2774, 'm_SourceFontFile')
  i2774.m_SourceFontFilePath = i2775[12]
  i2774.m_AtlasPopulationMode = i2775[13]
  i2774.InternalDynamicOS = !!i2775[14]
  var i2777 = i2775[15]
  var i2776 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.add(request.d('UnityEngine.TextCore.Glyph', i2777[i + 0]));
  }
  i2774.m_GlyphTable = i2776
  var i2779 = i2775[16]
  var i2778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2779.length; i += 1) {
    i2778.add(request.d('TMPro.TMP_Character', i2779[i + 0]));
  }
  i2774.m_CharacterTable = i2778
  var i2781 = i2775[17]
  var i2780 = []
  for(var i = 0; i < i2781.length; i += 2) {
  request.r(i2781[i + 0], i2781[i + 1], 2, i2780, '')
  }
  i2774.m_AtlasTextures = i2780
  i2774.m_AtlasTextureIndex = i2775[18]
  i2774.m_IsMultiAtlasTexturesEnabled = !!i2775[19]
  i2774.m_GetFontFeatures = !!i2775[20]
  i2774.m_ClearDynamicDataOnBuild = !!i2775[21]
  i2774.m_AtlasWidth = i2775[22]
  i2774.m_AtlasHeight = i2775[23]
  i2774.m_AtlasPadding = i2775[24]
  i2774.m_AtlasRenderMode = i2775[25]
  var i2783 = i2775[26]
  var i2782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2783.length; i += 1) {
    i2782.add(request.d('UnityEngine.TextCore.GlyphRect', i2783[i + 0]));
  }
  i2774.m_UsedGlyphRects = i2782
  var i2785 = i2775[27]
  var i2784 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2785.length; i += 1) {
    i2784.add(request.d('UnityEngine.TextCore.GlyphRect', i2785[i + 0]));
  }
  i2774.m_FreeGlyphRects = i2784
  i2774.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2775[28], i2774.m_FontFeatureTable)
  i2774.m_ShouldReimportFontFeatures = !!i2775[29]
  var i2787 = i2775[30]
  var i2786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2787.length; i += 2) {
  request.r(i2787[i + 0], i2787[i + 1], 1, i2786, '')
  }
  i2774.m_FallbackFontAssetTable = i2786
  var i2789 = i2775[31]
  var i2788 = []
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.push( request.d('TMPro.TMP_FontWeightPair', i2789[i + 0]) );
  }
  i2774.m_FontWeightTable = i2788
  var i2791 = i2775[32]
  var i2790 = []
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.push( request.d('TMPro.TMP_FontWeightPair', i2791[i + 0]) );
  }
  i2774.fontWeights = i2790
  i2774.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2775[33], i2774.m_fontInfo)
  var i2793 = i2775[34]
  var i2792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.add(request.d('TMPro.TMP_Glyph', i2793[i + 0]));
  }
  i2774.m_glyphInfoList = i2792
  i2774.m_KerningTable = request.d('TMPro.KerningTable', i2775[35], i2774.m_KerningTable)
  var i2795 = i2775[36]
  var i2794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2795.length; i += 2) {
  request.r(i2795[i + 0], i2795[i + 1], 1, i2794, '')
  }
  i2774.fallbackFontAssets = i2794
  i2774.m_Version = i2775[37]
  i2774.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2775[38], i2774.m_FaceInfo)
  request.r(i2775[39], i2775[40], 0, i2774, 'm_Material')
  return i2774
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2796 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2797 = data
  i2796.sourceFontFileName = i2797[0]
  i2796.sourceFontFileGUID = i2797[1]
  i2796.faceIndex = i2797[2]
  i2796.pointSizeSamplingMode = i2797[3]
  i2796.pointSize = i2797[4]
  i2796.padding = i2797[5]
  i2796.paddingMode = i2797[6]
  i2796.packingMode = i2797[7]
  i2796.atlasWidth = i2797[8]
  i2796.atlasHeight = i2797[9]
  i2796.characterSetSelectionMode = i2797[10]
  i2796.characterSequence = i2797[11]
  i2796.referencedFontAssetGUID = i2797[12]
  i2796.referencedTextAssetGUID = i2797[13]
  i2796.fontStyle = i2797[14]
  i2796.fontStyleModifier = i2797[15]
  i2796.renderMode = i2797[16]
  i2796.includeFontFeatures = !!i2797[17]
  return i2796
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2800 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2801 = data
  i2800.m_Index = i2801[0]
  i2800.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2801[1], i2800.m_Metrics)
  i2800.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2801[2], i2800.m_GlyphRect)
  i2800.m_Scale = i2801[3]
  i2800.m_AtlasIndex = i2801[4]
  i2800.m_ClassDefinitionType = i2801[5]
  return i2800
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2802 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2803 = data
  i2802.m_Width = i2803[0]
  i2802.m_Height = i2803[1]
  i2802.m_HorizontalBearingX = i2803[2]
  i2802.m_HorizontalBearingY = i2803[3]
  i2802.m_HorizontalAdvance = i2803[4]
  return i2802
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2804 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2805 = data
  i2804.m_X = i2805[0]
  i2804.m_Y = i2805[1]
  i2804.m_Width = i2805[2]
  i2804.m_Height = i2805[3]
  return i2804
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2808 = root || request.c( 'TMPro.TMP_Character' )
  var i2809 = data
  i2808.m_ElementType = i2809[0]
  i2808.m_Unicode = i2809[1]
  i2808.m_GlyphIndex = i2809[2]
  i2808.m_Scale = i2809[3]
  return i2808
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2814 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2815 = data
  var i2817 = i2815[0]
  var i2816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.add(request.d('TMPro.MultipleSubstitutionRecord', i2817[i + 0]));
  }
  i2814.m_MultipleSubstitutionRecords = i2816
  var i2819 = i2815[1]
  var i2818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.add(request.d('TMPro.LigatureSubstitutionRecord', i2819[i + 0]));
  }
  i2814.m_LigatureSubstitutionRecords = i2818
  var i2821 = i2815[2]
  var i2820 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2821[i + 0]));
  }
  i2814.m_GlyphPairAdjustmentRecords = i2820
  var i2823 = i2815[3]
  var i2822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2823[i + 0]));
  }
  i2814.m_MarkToBaseAdjustmentRecords = i2822
  var i2825 = i2815[4]
  var i2824 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2825[i + 0]));
  }
  i2814.m_MarkToMarkAdjustmentRecords = i2824
  return i2814
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2828 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2829 = data
  i2828.m_TargetGlyphID = i2829[0]
  i2828.m_SubstituteGlyphIDs = i2829[1]
  return i2828
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2832 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2833 = data
  i2832.m_ComponentGlyphIDs = i2833[0]
  i2832.m_LigatureGlyphID = i2833[1]
  return i2832
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2836 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2837 = data
  i2836.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2837[0], i2836.m_FirstAdjustmentRecord)
  i2836.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2837[1], i2836.m_SecondAdjustmentRecord)
  i2836.m_FeatureLookupFlags = i2837[2]
  return i2836
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2840 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2841 = data
  i2840.m_BaseGlyphID = i2841[0]
  i2840.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2841[1], i2840.m_BaseGlyphAnchorPoint)
  i2840.m_MarkGlyphID = i2841[2]
  i2840.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2841[3], i2840.m_MarkPositionAdjustment)
  return i2840
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2844 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2845 = data
  i2844.m_BaseMarkGlyphID = i2845[0]
  i2844.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2845[1], i2844.m_BaseMarkGlyphAnchorPoint)
  i2844.m_CombiningMarkGlyphID = i2845[2]
  i2844.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2845[3], i2844.m_CombiningMarkPositionAdjustment)
  return i2844
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2850 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2851 = data
  request.r(i2851[0], i2851[1], 0, i2850, 'regularTypeface')
  request.r(i2851[2], i2851[3], 0, i2850, 'italicTypeface')
  return i2850
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2852 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2853 = data
  i2852.Name = i2853[0]
  i2852.PointSize = i2853[1]
  i2852.Scale = i2853[2]
  i2852.CharacterCount = i2853[3]
  i2852.LineHeight = i2853[4]
  i2852.Baseline = i2853[5]
  i2852.Ascender = i2853[6]
  i2852.CapHeight = i2853[7]
  i2852.Descender = i2853[8]
  i2852.CenterLine = i2853[9]
  i2852.SuperscriptOffset = i2853[10]
  i2852.SubscriptOffset = i2853[11]
  i2852.SubSize = i2853[12]
  i2852.Underline = i2853[13]
  i2852.UnderlineThickness = i2853[14]
  i2852.strikethrough = i2853[15]
  i2852.strikethroughThickness = i2853[16]
  i2852.TabWidth = i2853[17]
  i2852.Padding = i2853[18]
  i2852.AtlasWidth = i2853[19]
  i2852.AtlasHeight = i2853[20]
  return i2852
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2856 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2857 = data
  i2856.id = i2857[0]
  i2856.x = i2857[1]
  i2856.y = i2857[2]
  i2856.width = i2857[3]
  i2856.height = i2857[4]
  i2856.xOffset = i2857[5]
  i2856.yOffset = i2857[6]
  i2856.xAdvance = i2857[7]
  i2856.scale = i2857[8]
  return i2856
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2858 = root || request.c( 'TMPro.KerningTable' )
  var i2859 = data
  var i2861 = i2859[0]
  var i2860 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.add(request.d('TMPro.KerningPair', i2861[i + 0]));
  }
  i2858.kerningPairs = i2860
  return i2858
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2864 = root || request.c( 'TMPro.KerningPair' )
  var i2865 = data
  i2864.xOffset = i2865[0]
  i2864.m_FirstGlyph = i2865[1]
  i2864.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2865[2], i2864.m_FirstGlyphAdjustments)
  i2864.m_SecondGlyph = i2865[3]
  i2864.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2865[4], i2864.m_SecondGlyphAdjustments)
  i2864.m_IgnoreSpacingAdjustments = !!i2865[5]
  return i2864
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2866 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2867 = data
  i2866.m_FaceIndex = i2867[0]
  i2866.m_FamilyName = i2867[1]
  i2866.m_StyleName = i2867[2]
  i2866.m_PointSize = i2867[3]
  i2866.m_Scale = i2867[4]
  i2866.m_UnitsPerEM = i2867[5]
  i2866.m_LineHeight = i2867[6]
  i2866.m_AscentLine = i2867[7]
  i2866.m_CapLine = i2867[8]
  i2866.m_MeanLine = i2867[9]
  i2866.m_Baseline = i2867[10]
  i2866.m_DescentLine = i2867[11]
  i2866.m_SuperscriptOffset = i2867[12]
  i2866.m_SuperscriptSize = i2867[13]
  i2866.m_SubscriptOffset = i2867[14]
  i2866.m_SubscriptSize = i2867[15]
  i2866.m_UnderlineOffset = i2867[16]
  i2866.m_UnderlineThickness = i2867[17]
  i2866.m_StrikethroughOffset = i2867[18]
  i2866.m_StrikethroughThickness = i2867[19]
  i2866.m_TabWidth = i2867[20]
  return i2866
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2868 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2869 = data
  var i2871 = i2869[0]
  var i2870 = []
  for(var i = 0; i < i2871.length; i += 2) {
  request.r(i2871[i + 0], i2871[i + 1], 2, i2870, '')
  }
  i2868.atlasAssets = i2870
  i2868.scale = i2869[1]
  request.r(i2869[2], i2869[3], 0, i2868, 'skeletonJSON')
  i2868.isUpgradingBlendModeMaterials = !!i2869[4]
  i2868.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2869[5], i2868.blendModeMaterials)
  var i2873 = i2869[6]
  var i2872 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2873.length; i += 2) {
  request.r(i2873[i + 0], i2873[i + 1], 1, i2872, '')
  }
  i2868.skeletonDataModifiers = i2872
  var i2875 = i2869[7]
  var i2874 = []
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.push( i2875[i + 0] );
  }
  i2868.fromAnimation = i2874
  var i2877 = i2869[8]
  var i2876 = []
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.push( i2877[i + 0] );
  }
  i2868.toAnimation = i2876
  i2868.duration = i2869[9]
  i2868.defaultMix = i2869[10]
  request.r(i2869[11], i2869[12], 0, i2868, 'controller')
  return i2868
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2880 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2881 = data
  i2880.applyAdditiveMaterial = !!i2881[0]
  var i2883 = i2881[1]
  var i2882 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2883.length; i += 1) {
    i2882.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2883[i + 0]));
  }
  i2880.additiveMaterials = i2882
  var i2885 = i2881[2]
  var i2884 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2885.length; i += 1) {
    i2884.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2885[i + 0]));
  }
  i2880.multiplyMaterials = i2884
  var i2887 = i2881[3]
  var i2886 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2887[i + 0]));
  }
  i2880.screenMaterials = i2886
  i2880.requiresBlendModeMaterials = !!i2881[4]
  return i2880
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2890 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2891 = data
  i2890.pageName = i2891[0]
  request.r(i2891[1], i2891[2], 0, i2890, 'material')
  return i2890
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2894 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2895 = data
  request.r(i2895[0], i2895[1], 0, i2894, 'atlasFile')
  var i2897 = i2895[2]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 2) {
  request.r(i2897[i + 0], i2897[i + 1], 2, i2896, '')
  }
  i2894.materials = i2896
  i2894.textureLoadingMode = i2895[3]
  request.r(i2895[4], i2895[5], 0, i2894, 'onDemandTextureLoader')
  return i2894
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2898 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2899 = data
  i2898.useSafeMode = !!i2899[0]
  i2898.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2899[1], i2898.safeModeOptions)
  i2898.timeScale = i2899[2]
  i2898.unscaledTimeScale = i2899[3]
  i2898.useSmoothDeltaTime = !!i2899[4]
  i2898.maxSmoothUnscaledTime = i2899[5]
  i2898.rewindCallbackMode = i2899[6]
  i2898.showUnityEditorReport = !!i2899[7]
  i2898.logBehaviour = i2899[8]
  i2898.drawGizmos = !!i2899[9]
  i2898.defaultRecyclable = !!i2899[10]
  i2898.defaultAutoPlay = i2899[11]
  i2898.defaultUpdateType = i2899[12]
  i2898.defaultTimeScaleIndependent = !!i2899[13]
  i2898.defaultEaseType = i2899[14]
  i2898.defaultEaseOvershootOrAmplitude = i2899[15]
  i2898.defaultEasePeriod = i2899[16]
  i2898.defaultAutoKill = !!i2899[17]
  i2898.defaultLoopType = i2899[18]
  i2898.debugMode = !!i2899[19]
  i2898.debugStoreTargetId = !!i2899[20]
  i2898.showPreviewPanel = !!i2899[21]
  i2898.storeSettingsLocation = i2899[22]
  i2898.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2899[23], i2898.modules)
  i2898.createASMDEF = !!i2899[24]
  i2898.showPlayingTweens = !!i2899[25]
  i2898.showPausedTweens = !!i2899[26]
  return i2898
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2900 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2901 = data
  i2900.logBehaviour = i2901[0]
  i2900.nestedTweenFailureBehaviour = i2901[1]
  return i2900
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2902 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2903 = data
  i2902.showPanel = !!i2903[0]
  i2902.audioEnabled = !!i2903[1]
  i2902.physicsEnabled = !!i2903[2]
  i2902.physics2DEnabled = !!i2903[3]
  i2902.spriteEnabled = !!i2903[4]
  i2902.uiEnabled = !!i2903[5]
  i2902.uiToolkitEnabled = !!i2903[6]
  i2902.textMeshProEnabled = !!i2903[7]
  i2902.tk2DEnabled = !!i2903[8]
  i2902.deAudioEnabled = !!i2903[9]
  i2902.deUnityExtendedEnabled = !!i2903[10]
  i2902.epoOutlineEnabled = !!i2903[11]
  return i2902
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2904 = root || request.c( 'TMPro.TMP_Settings' )
  var i2905 = data
  i2904.assetVersion = i2905[0]
  i2904.m_TextWrappingMode = i2905[1]
  i2904.m_enableKerning = !!i2905[2]
  var i2907 = i2905[3]
  var i2906 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2907.length; i += 1) {
    i2906.add(i2907[i + 0]);
  }
  i2904.m_ActiveFontFeatures = i2906
  i2904.m_enableExtraPadding = !!i2905[4]
  i2904.m_enableTintAllSprites = !!i2905[5]
  i2904.m_enableParseEscapeCharacters = !!i2905[6]
  i2904.m_EnableRaycastTarget = !!i2905[7]
  i2904.m_GetFontFeaturesAtRuntime = !!i2905[8]
  i2904.m_missingGlyphCharacter = i2905[9]
  i2904.m_ClearDynamicDataOnBuild = !!i2905[10]
  i2904.m_warningsDisabled = !!i2905[11]
  request.r(i2905[12], i2905[13], 0, i2904, 'm_defaultFontAsset')
  i2904.m_defaultFontAssetPath = i2905[14]
  i2904.m_defaultFontSize = i2905[15]
  i2904.m_defaultAutoSizeMinRatio = i2905[16]
  i2904.m_defaultAutoSizeMaxRatio = i2905[17]
  i2904.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2905[18], i2905[19] )
  i2904.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2905[20], i2905[21] )
  i2904.m_autoSizeTextContainer = !!i2905[22]
  i2904.m_IsTextObjectScaleStatic = !!i2905[23]
  var i2909 = i2905[24]
  var i2908 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2909.length; i += 2) {
  request.r(i2909[i + 0], i2909[i + 1], 1, i2908, '')
  }
  i2904.m_fallbackFontAssets = i2908
  i2904.m_matchMaterialPreset = !!i2905[25]
  i2904.m_HideSubTextObjects = !!i2905[26]
  request.r(i2905[27], i2905[28], 0, i2904, 'm_defaultSpriteAsset')
  i2904.m_defaultSpriteAssetPath = i2905[29]
  i2904.m_enableEmojiSupport = !!i2905[30]
  i2904.m_MissingCharacterSpriteUnicode = i2905[31]
  var i2911 = i2905[32]
  var i2910 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2911.length; i += 2) {
  request.r(i2911[i + 0], i2911[i + 1], 1, i2910, '')
  }
  i2904.m_EmojiFallbackTextAssets = i2910
  i2904.m_defaultColorGradientPresetsPath = i2905[33]
  request.r(i2905[34], i2905[35], 0, i2904, 'm_defaultStyleSheet')
  i2904.m_StyleSheetsResourcePath = i2905[36]
  request.r(i2905[37], i2905[38], 0, i2904, 'm_leadingCharacters')
  request.r(i2905[39], i2905[40], 0, i2904, 'm_followingCharacters')
  i2904.m_UseModernHangulLineBreakingRules = !!i2905[41]
  return i2904
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2914 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2915 = data
  i2914.m_GlyphIndex = i2915[0]
  i2914.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2915[1], i2914.m_GlyphValueRecord)
  return i2914
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2916 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2917 = data
  i2916.m_XPlacement = i2917[0]
  i2916.m_YPlacement = i2917[1]
  i2916.m_XAdvance = i2917[2]
  i2916.m_YAdvance = i2917[3]
  return i2916
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2918 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2919 = data
  request.r(i2919[0], i2919[1], 0, i2918, 'spriteSheet')
  var i2921 = i2919[2]
  var i2920 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2921.length; i += 1) {
    i2920.add(request.d('TMPro.TMP_Sprite', i2921[i + 0]));
  }
  i2918.spriteInfoList = i2920
  var i2923 = i2919[3]
  var i2922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2923.length; i += 2) {
  request.r(i2923[i + 0], i2923[i + 1], 1, i2922, '')
  }
  i2918.fallbackSpriteAssets = i2922
  var i2925 = i2919[4]
  var i2924 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2925.length; i += 1) {
    i2924.add(request.d('TMPro.TMP_SpriteCharacter', i2925[i + 0]));
  }
  i2918.m_SpriteCharacterTable = i2924
  var i2927 = i2919[5]
  var i2926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2927.length; i += 1) {
    i2926.add(request.d('TMPro.TMP_SpriteGlyph', i2927[i + 0]));
  }
  i2918.m_GlyphTable = i2926
  i2918.m_Version = i2919[6]
  i2918.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2919[7], i2918.m_FaceInfo)
  request.r(i2919[8], i2919[9], 0, i2918, 'm_Material')
  return i2918
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2930 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2931 = data
  i2930.name = i2931[0]
  i2930.hashCode = i2931[1]
  i2930.unicode = i2931[2]
  i2930.pivot = new pc.Vec2( i2931[3], i2931[4] )
  request.r(i2931[5], i2931[6], 0, i2930, 'sprite')
  i2930.id = i2931[7]
  i2930.x = i2931[8]
  i2930.y = i2931[9]
  i2930.width = i2931[10]
  i2930.height = i2931[11]
  i2930.xOffset = i2931[12]
  i2930.yOffset = i2931[13]
  i2930.xAdvance = i2931[14]
  i2930.scale = i2931[15]
  return i2930
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2936 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2937 = data
  i2936.m_Name = i2937[0]
  i2936.m_ElementType = i2937[1]
  i2936.m_Unicode = i2937[2]
  i2936.m_GlyphIndex = i2937[3]
  i2936.m_Scale = i2937[4]
  return i2936
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2940 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2941 = data
  request.r(i2941[0], i2941[1], 0, i2940, 'sprite')
  i2940.m_Index = i2941[2]
  i2940.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2941[3], i2940.m_Metrics)
  i2940.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2941[4], i2940.m_GlyphRect)
  i2940.m_Scale = i2941[5]
  i2940.m_AtlasIndex = i2941[6]
  i2940.m_ClassDefinitionType = i2941[7]
  return i2940
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2942 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2943 = data
  var i2945 = i2943[0]
  var i2944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2945.length; i += 1) {
    i2944.add(request.d('TMPro.TMP_Style', i2945[i + 0]));
  }
  i2942.m_StyleList = i2944
  return i2942
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2948 = root || request.c( 'TMPro.TMP_Style' )
  var i2949 = data
  i2948.m_Name = i2949[0]
  i2948.m_HashCode = i2949[1]
  i2948.m_OpeningDefinition = i2949[2]
  i2948.m_ClosingDefinition = i2949[3]
  i2948.m_OpeningTagArray = i2949[4]
  i2948.m_ClosingTagArray = i2949[5]
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2951 = data
  var i2953 = i2951[0]
  var i2952 = []
  for(var i = 0; i < i2953.length; i += 1) {
    i2952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2953[i + 0]) );
  }
  i2950.files = i2952
  i2950.componentToPrefabIds = i2951[1]
  return i2950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2957 = data
  i2956.path = i2957[0]
  request.r(i2957[1], i2957[2], 0, i2956, 'unityObject')
  return i2956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2959 = data
  var i2961 = i2959[0]
  var i2960 = []
  for(var i = 0; i < i2961.length; i += 1) {
    i2960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2961[i + 0]) );
  }
  i2958.scriptsExecutionOrder = i2960
  var i2963 = i2959[1]
  var i2962 = []
  for(var i = 0; i < i2963.length; i += 1) {
    i2962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2963[i + 0]) );
  }
  i2958.sortingLayers = i2962
  var i2965 = i2959[2]
  var i2964 = []
  for(var i = 0; i < i2965.length; i += 1) {
    i2964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2965[i + 0]) );
  }
  i2958.cullingLayers = i2964
  i2958.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2959[3], i2958.timeSettings)
  i2958.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2959[4], i2958.physicsSettings)
  i2958.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2959[5], i2958.physics2DSettings)
  i2958.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2959[6], i2958.qualitySettings)
  i2958.enableRealtimeShadows = !!i2959[7]
  i2958.enableAutoInstancing = !!i2959[8]
  i2958.enableStaticBatching = !!i2959[9]
  i2958.enableDynamicBatching = !!i2959[10]
  i2958.usePreservativeDynamicBatching = !!i2959[11]
  i2958.lightmapEncodingQuality = i2959[12]
  i2958.desiredColorSpace = i2959[13]
  var i2967 = i2959[14]
  var i2966 = []
  for(var i = 0; i < i2967.length; i += 1) {
    i2966.push( i2967[i + 0] );
  }
  i2958.allTags = i2966
  return i2958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2971 = data
  i2970.name = i2971[0]
  i2970.value = i2971[1]
  return i2970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2975 = data
  i2974.id = i2975[0]
  i2974.name = i2975[1]
  i2974.value = i2975[2]
  return i2974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2979 = data
  i2978.id = i2979[0]
  i2978.name = i2979[1]
  return i2978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2981 = data
  i2980.fixedDeltaTime = i2981[0]
  i2980.maximumDeltaTime = i2981[1]
  i2980.timeScale = i2981[2]
  i2980.maximumParticleTimestep = i2981[3]
  return i2980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2983 = data
  i2982.gravity = new pc.Vec3( i2983[0], i2983[1], i2983[2] )
  i2982.defaultSolverIterations = i2983[3]
  i2982.bounceThreshold = i2983[4]
  i2982.autoSyncTransforms = !!i2983[5]
  i2982.autoSimulation = !!i2983[6]
  var i2985 = i2983[7]
  var i2984 = []
  for(var i = 0; i < i2985.length; i += 1) {
    i2984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2985[i + 0]) );
  }
  i2982.collisionMatrix = i2984
  return i2982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2989 = data
  i2988.enabled = !!i2989[0]
  i2988.layerId = i2989[1]
  i2988.otherLayerId = i2989[2]
  return i2988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2991 = data
  request.r(i2991[0], i2991[1], 0, i2990, 'material')
  i2990.gravity = new pc.Vec2( i2991[2], i2991[3] )
  i2990.positionIterations = i2991[4]
  i2990.velocityIterations = i2991[5]
  i2990.velocityThreshold = i2991[6]
  i2990.maxLinearCorrection = i2991[7]
  i2990.maxAngularCorrection = i2991[8]
  i2990.maxTranslationSpeed = i2991[9]
  i2990.maxRotationSpeed = i2991[10]
  i2990.baumgarteScale = i2991[11]
  i2990.baumgarteTOIScale = i2991[12]
  i2990.timeToSleep = i2991[13]
  i2990.linearSleepTolerance = i2991[14]
  i2990.angularSleepTolerance = i2991[15]
  i2990.defaultContactOffset = i2991[16]
  i2990.autoSimulation = !!i2991[17]
  i2990.queriesHitTriggers = !!i2991[18]
  i2990.queriesStartInColliders = !!i2991[19]
  i2990.callbacksOnDisable = !!i2991[20]
  i2990.reuseCollisionCallbacks = !!i2991[21]
  i2990.autoSyncTransforms = !!i2991[22]
  var i2993 = i2991[23]
  var i2992 = []
  for(var i = 0; i < i2993.length; i += 1) {
    i2992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2993[i + 0]) );
  }
  i2990.collisionMatrix = i2992
  return i2990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2997 = data
  i2996.enabled = !!i2997[0]
  i2996.layerId = i2997[1]
  i2996.otherLayerId = i2997[2]
  return i2996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2999 = data
  var i3001 = i2999[0]
  var i3000 = []
  for(var i = 0; i < i3001.length; i += 1) {
    i3000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3001[i + 0]) );
  }
  i2998.qualityLevels = i3000
  var i3003 = i2999[1]
  var i3002 = []
  for(var i = 0; i < i3003.length; i += 1) {
    i3002.push( i3003[i + 0] );
  }
  i2998.names = i3002
  i2998.shadows = i2999[2]
  i2998.anisotropicFiltering = i2999[3]
  i2998.antiAliasing = i2999[4]
  i2998.lodBias = i2999[5]
  i2998.shadowCascades = i2999[6]
  i2998.shadowDistance = i2999[7]
  i2998.shadowmaskMode = i2999[8]
  i2998.shadowProjection = i2999[9]
  i2998.shadowResolution = i2999[10]
  i2998.softParticles = !!i2999[11]
  i2998.softVegetation = !!i2999[12]
  i2998.activeColorSpace = i2999[13]
  i2998.desiredColorSpace = i2999[14]
  i2998.masterTextureLimit = i2999[15]
  i2998.maxQueuedFrames = i2999[16]
  i2998.particleRaycastBudget = i2999[17]
  i2998.pixelLightCount = i2999[18]
  i2998.realtimeReflectionProbes = !!i2999[19]
  i2998.shadowCascade2Split = i2999[20]
  i2998.shadowCascade4Split = new pc.Vec3( i2999[21], i2999[22], i2999[23] )
  i2998.streamingMipmapsActive = !!i2999[24]
  i2998.vSyncCount = i2999[25]
  i2998.asyncUploadBufferSize = i2999[26]
  i2998.asyncUploadTimeSlice = i2999[27]
  i2998.billboardsFaceCameraPosition = !!i2999[28]
  i2998.shadowNearPlaneOffset = i2999[29]
  i2998.streamingMipmapsMemoryBudget = i2999[30]
  i2998.maximumLODLevel = i2999[31]
  i2998.streamingMipmapsAddAllCameras = !!i2999[32]
  i2998.streamingMipmapsMaxLevelReduction = i2999[33]
  i2998.streamingMipmapsRenderersPerFrame = i2999[34]
  i2998.resolutionScalingFixedDPIFactor = i2999[35]
  i2998.streamingMipmapsMaxFileIORequests = i2999[36]
  i2998.currentQualityLevel = i2999[37]
  return i2998
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3006 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3007 = data
  i3006.m_XCoordinate = i3007[0]
  i3006.m_YCoordinate = i3007[1]
  return i3006
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3008 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3009 = data
  i3008.m_XPositionAdjustment = i3009[0]
  i3008.m_YPositionAdjustment = i3009[1]
  return i3008
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3010 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3011 = data
  i3010.xPlacement = i3011[0]
  i3010.yPlacement = i3011[1]
  i3010.xAdvance = i3011[2]
  i3010.yAdvance = i3011[3]
  return i3010
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[2],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[56],"64":[56],"65":[56],"66":[56],"67":[56],"68":[56],"69":[2],"70":[71],"72":[73],"74":[73],"5":[4],"75":[76],"77":[78],"79":[71,80],"81":[24],"82":[78],"83":[84],"85":[78],"86":[78],"87":[88],"89":[88],"90":[78],"91":[92],"93":[4],"94":[15,4],"95":[71],"24":[15,4],"96":[97,71],"78":[71],"98":[71,80],"99":[49],"100":[56],"101":[92],"102":[88],"103":[104],"105":[2],"106":[107],"108":[29],"109":[5],"110":[4],"111":[71,4],"14":[4,15],"112":[4],"113":[15,4],"114":[71],"115":[15,4],"116":[4],"117":[118],"119":[118],"120":[118],"121":[4],"122":[4],"8":[5],"13":[15,4],"123":[4],"7":[5],"124":[4],"125":[4],"26":[4],"126":[4],"127":[4],"128":[4],"129":[4],"21":[4],"130":[4],"16":[15,4],"22":[4],"131":[4],"132":[4],"133":[4],"134":[15,4],"135":[4],"136":[29],"137":[29],"30":[29],"138":[29],"139":[2],"140":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.GameManager","UnityEngine.AudioClip","UnityEngine.UI.Button","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.AudioSource","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.UI.Mask","UnityEngine.UI.RectMask2D","GameController","Spine.Unity.SkeletonGraphic","UnityEngine.GameObject","UnityEngine.UI.HorizontalLayoutGroup","Spine.Unity.SkeletonDataAsset","Playable.AudioManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","UnityEngine.MeshFilter","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "PA_BEQ";

Deserializers.lunaInitializationTime = "07/17/2026 00:41:55";

Deserializers.lunaDaysRunning = "3.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BEQ_V30_NgocNDL_HuyNQ";

Deserializers.lunaAppID = "29138";

Deserializers.projectId = "cc1f2bc1088d6d648901eead39e3bfa0";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.timeline: 1.8.9\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1918";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4517";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "2fab8fac-8418-4474-b93b-4bc25bfdaa9c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

