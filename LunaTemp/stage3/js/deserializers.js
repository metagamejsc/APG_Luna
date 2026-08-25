var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2480 = root || request.c( 'UnityEngine.JointSpring' )
  var i2481 = data
  i2480.spring = i2481[0]
  i2480.damper = i2481[1]
  i2480.targetPosition = i2481[2]
  return i2480
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2482 = root || request.c( 'UnityEngine.JointMotor' )
  var i2483 = data
  i2482.m_TargetVelocity = i2483[0]
  i2482.m_Force = i2483[1]
  i2482.m_FreeSpin = i2483[2]
  return i2482
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2484 = root || request.c( 'UnityEngine.JointLimits' )
  var i2485 = data
  i2484.m_Min = i2485[0]
  i2484.m_Max = i2485[1]
  i2484.m_Bounciness = i2485[2]
  i2484.m_BounceMinVelocity = i2485[3]
  i2484.m_ContactDistance = i2485[4]
  i2484.minBounce = i2485[5]
  i2484.maxBounce = i2485[6]
  return i2484
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2486 = root || request.c( 'UnityEngine.JointDrive' )
  var i2487 = data
  i2486.m_PositionSpring = i2487[0]
  i2486.m_PositionDamper = i2487[1]
  i2486.m_MaximumForce = i2487[2]
  i2486.m_UseAcceleration = i2487[3]
  return i2486
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2488 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2489 = data
  i2488.m_Spring = i2489[0]
  i2488.m_Damper = i2489[1]
  return i2488
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2490 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2491 = data
  i2490.m_Limit = i2491[0]
  i2490.m_Bounciness = i2491[1]
  i2490.m_ContactDistance = i2491[2]
  return i2490
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2492 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2493 = data
  i2492.m_ExtremumSlip = i2493[0]
  i2492.m_ExtremumValue = i2493[1]
  i2492.m_AsymptoteSlip = i2493[2]
  i2492.m_AsymptoteValue = i2493[3]
  i2492.m_Stiffness = i2493[4]
  return i2492
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2494 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2495 = data
  i2494.m_LowerAngle = i2495[0]
  i2494.m_UpperAngle = i2495[1]
  return i2494
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2496 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2497 = data
  i2496.m_MotorSpeed = i2497[0]
  i2496.m_MaximumMotorTorque = i2497[1]
  return i2496
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2498 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2499 = data
  i2498.m_DampingRatio = i2499[0]
  i2498.m_Frequency = i2499[1]
  i2498.m_Angle = i2499[2]
  return i2498
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2500 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2501 = data
  i2500.m_LowerTranslation = i2501[0]
  i2500.m_UpperTranslation = i2501[1]
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2503 = data
  i2502.name = i2503[0]
  i2502.width = i2503[1]
  i2502.height = i2503[2]
  i2502.mipmapCount = i2503[3]
  i2502.anisoLevel = i2503[4]
  i2502.filterMode = i2503[5]
  i2502.hdr = !!i2503[6]
  i2502.format = i2503[7]
  i2502.wrapMode = i2503[8]
  i2502.alphaIsTransparency = !!i2503[9]
  i2502.alphaSource = i2503[10]
  i2502.graphicsFormat = i2503[11]
  i2502.sRGBTexture = !!i2503[12]
  i2502.desiredColorSpace = i2503[13]
  i2502.wrapU = i2503[14]
  i2502.wrapV = i2503[15]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2504 = root || new pc.UnityMaterial()
  var i2505 = data
  i2504.name = i2505[0]
  request.r(i2505[1], i2505[2], 0, i2504, 'shader')
  i2504.renderQueue = i2505[3]
  i2504.enableInstancing = !!i2505[4]
  var i2507 = i2505[5]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2507[i + 0]) );
  }
  i2504.floatParameters = i2506
  var i2509 = i2505[6]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2509[i + 0]) );
  }
  i2504.colorParameters = i2508
  var i2511 = i2505[7]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2511[i + 0]) );
  }
  i2504.vectorParameters = i2510
  var i2513 = i2505[8]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2513[i + 0]) );
  }
  i2504.textureParameters = i2512
  var i2515 = i2505[9]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2515[i + 0]) );
  }
  i2504.materialFlags = i2514
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2519 = data
  i2518.name = i2519[0]
  i2518.value = i2519[1]
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2523 = data
  i2522.name = i2523[0]
  i2522.value = new pc.Color(i2523[1], i2523[2], i2523[3], i2523[4])
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2527 = data
  i2526.name = i2527[0]
  i2526.value = new pc.Vec4( i2527[1], i2527[2], i2527[3], i2527[4] )
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2531 = data
  i2530.name = i2531[0]
  request.r(i2531[1], i2531[2], 0, i2530, 'value')
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2535 = data
  i2534.name = i2535[0]
  i2534.enabled = !!i2535[1]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2537 = data
  i2536.name = i2537[0]
  i2536.index = i2537[1]
  i2536.startup = !!i2537[2]
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2539 = data
  i2538.aspect = i2539[0]
  i2538.orthographic = !!i2539[1]
  i2538.orthographicSize = i2539[2]
  i2538.backgroundColor = new pc.Color(i2539[3], i2539[4], i2539[5], i2539[6])
  i2538.nearClipPlane = i2539[7]
  i2538.farClipPlane = i2539[8]
  i2538.fieldOfView = i2539[9]
  i2538.depth = i2539[10]
  i2538.clearFlags = i2539[11]
  i2538.cullingMask = i2539[12]
  i2538.rect = i2539[13]
  request.r(i2539[14], i2539[15], 0, i2538, 'targetTexture')
  i2538.usePhysicalProperties = !!i2539[16]
  i2538.focalLength = i2539[17]
  i2538.sensorSize = new pc.Vec2( i2539[18], i2539[19] )
  i2538.lensShift = new pc.Vec2( i2539[20], i2539[21] )
  i2538.gateFit = i2539[22]
  i2538.commandBufferCount = i2539[23]
  i2538.cameraType = i2539[24]
  i2538.enabled = !!i2539[25]
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2541 = data
  i2540.name = i2541[0]
  i2540.tagId = i2541[1]
  i2540.enabled = !!i2541[2]
  i2540.isStatic = !!i2541[3]
  i2540.layer = i2541[4]
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2543 = data
  i2542.pivot = new pc.Vec2( i2543[0], i2543[1] )
  i2542.anchorMin = new pc.Vec2( i2543[2], i2543[3] )
  i2542.anchorMax = new pc.Vec2( i2543[4], i2543[5] )
  i2542.sizeDelta = new pc.Vec2( i2543[6], i2543[7] )
  i2542.anchoredPosition3D = new pc.Vec3( i2543[8], i2543[9], i2543[10] )
  i2542.rotation = new pc.Quat(i2543[11], i2543[12], i2543[13], i2543[14])
  i2542.scale = new pc.Vec3( i2543[15], i2543[16], i2543[17] )
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2545 = data
  i2544.planeDistance = i2545[0]
  i2544.referencePixelsPerUnit = i2545[1]
  i2544.isFallbackOverlay = !!i2545[2]
  i2544.renderMode = i2545[3]
  i2544.renderOrder = i2545[4]
  i2544.sortingLayerName = i2545[5]
  i2544.sortingOrder = i2545[6]
  i2544.scaleFactor = i2545[7]
  request.r(i2545[8], i2545[9], 0, i2544, 'worldCamera')
  i2544.overrideSorting = !!i2545[10]
  i2544.pixelPerfect = !!i2545[11]
  i2544.targetDisplay = i2545[12]
  i2544.overridePixelPerfect = !!i2545[13]
  i2544.enabled = !!i2545[14]
  return i2544
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2546 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2547 = data
  i2546.m_UiScaleMode = i2547[0]
  i2546.m_ReferencePixelsPerUnit = i2547[1]
  i2546.m_ScaleFactor = i2547[2]
  i2546.m_ReferenceResolution = new pc.Vec2( i2547[3], i2547[4] )
  i2546.m_ScreenMatchMode = i2547[5]
  i2546.m_MatchWidthOrHeight = i2547[6]
  i2546.m_PhysicalUnit = i2547[7]
  i2546.m_FallbackScreenDPI = i2547[8]
  i2546.m_DefaultSpriteDPI = i2547[9]
  i2546.m_DynamicPixelsPerUnit = i2547[10]
  i2546.m_PresetInfoIsWorld = !!i2547[11]
  return i2546
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2548 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2549 = data
  i2548.m_IgnoreReversedGraphics = !!i2549[0]
  i2548.m_BlockingObjects = i2549[1]
  i2548.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2549[2] )
  return i2548
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i2550 = root || request.c( 'Playable.GameManager' )
  var i2551 = data
  i2550.EventCountdownEndGame = request.d('System.Action', i2551[0], i2550.EventCountdownEndGame)
  i2550._totalEvent = i2551[1]
  i2550._endTime = i2551[2]
  request.r(i2551[3], i2551[4], 0, i2550, '_backgroundMusic')
  request.r(i2551[5], i2551[6], 0, i2550, '_backgroundTexture')
  request.r(i2551[7], i2551[8], 0, i2550, '_btnBlock')
  request.r(i2551[9], i2551[10], 0, i2550, '_background')
  request.r(i2551[11], i2551[12], 0, i2550, '_progressFillImage')
  request.r(i2551[13], i2551[14], 0, i2550, '_progressText')
  i2550._progressTweenDuration = i2551[15]
  request.r(i2551[16], i2551[17], 0, i2550, '_timerFillImage')
  request.r(i2551[18], i2551[19], 0, i2550, '_timerText')
  i2550._timerPunchScale = i2551[20]
  return i2550
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2552 = root || request.c( 'System.Action' )
  var i2553 = data
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2555 = data
  i2554.cullTransparentMesh = !!i2555[0]
  return i2554
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2556 = root || request.c( 'UnityEngine.UI.Image' )
  var i2557 = data
  request.r(i2557[0], i2557[1], 0, i2556, 'm_Sprite')
  i2556.m_Type = i2557[2]
  i2556.m_PreserveAspect = !!i2557[3]
  i2556.m_FillCenter = !!i2557[4]
  i2556.m_FillMethod = i2557[5]
  i2556.m_FillAmount = i2557[6]
  i2556.m_FillClockwise = !!i2557[7]
  i2556.m_FillOrigin = i2557[8]
  i2556.m_UseSpriteMesh = !!i2557[9]
  i2556.m_PixelsPerUnitMultiplier = i2557[10]
  request.r(i2557[11], i2557[12], 0, i2556, 'm_Material')
  i2556.m_Maskable = !!i2557[13]
  i2556.m_Color = new pc.Color(i2557[14], i2557[15], i2557[16], i2557[17])
  i2556.m_RaycastTarget = !!i2557[18]
  i2556.m_RaycastPadding = new pc.Vec4( i2557[19], i2557[20], i2557[21], i2557[22] )
  return i2556
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2558 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2559 = data
  request.r(i2559[0], i2559[1], 0, i2558, 'm_Texture')
  i2558.m_UVRect = UnityEngine.Rect.MinMaxRect(i2559[2], i2559[3], i2559[4], i2559[5])
  request.r(i2559[6], i2559[7], 0, i2558, 'm_Material')
  i2558.m_Maskable = !!i2559[8]
  i2558.m_Color = new pc.Color(i2559[9], i2559[10], i2559[11], i2559[12])
  i2558.m_RaycastTarget = !!i2559[13]
  i2558.m_RaycastPadding = new pc.Vec4( i2559[14], i2559[15], i2559[16], i2559[17] )
  return i2558
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2560 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2561 = data
  i2560.m_hasFontAssetChanged = !!i2561[0]
  request.r(i2561[1], i2561[2], 0, i2560, 'm_baseMaterial')
  i2560.m_maskOffset = new pc.Vec4( i2561[3], i2561[4], i2561[5], i2561[6] )
  i2560.m_text = i2561[7]
  i2560.m_isRightToLeft = !!i2561[8]
  request.r(i2561[9], i2561[10], 0, i2560, 'm_fontAsset')
  request.r(i2561[11], i2561[12], 0, i2560, 'm_sharedMaterial')
  var i2563 = i2561[13]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 2) {
  request.r(i2563[i + 0], i2563[i + 1], 2, i2562, '')
  }
  i2560.m_fontSharedMaterials = i2562
  request.r(i2561[14], i2561[15], 0, i2560, 'm_fontMaterial')
  var i2565 = i2561[16]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 2) {
  request.r(i2565[i + 0], i2565[i + 1], 2, i2564, '')
  }
  i2560.m_fontMaterials = i2564
  i2560.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2561[17], i2561[18], i2561[19], i2561[20])
  i2560.m_fontColor = new pc.Color(i2561[21], i2561[22], i2561[23], i2561[24])
  i2560.m_enableVertexGradient = !!i2561[25]
  i2560.m_colorMode = i2561[26]
  i2560.m_fontColorGradient = request.d('TMPro.VertexGradient', i2561[27], i2560.m_fontColorGradient)
  request.r(i2561[28], i2561[29], 0, i2560, 'm_fontColorGradientPreset')
  request.r(i2561[30], i2561[31], 0, i2560, 'm_spriteAsset')
  i2560.m_tintAllSprites = !!i2561[32]
  request.r(i2561[33], i2561[34], 0, i2560, 'm_StyleSheet')
  i2560.m_TextStyleHashCode = i2561[35]
  i2560.m_overrideHtmlColors = !!i2561[36]
  i2560.m_faceColor = UnityEngine.Color32.ConstructColor(i2561[37], i2561[38], i2561[39], i2561[40])
  i2560.m_fontSize = i2561[41]
  i2560.m_fontSizeBase = i2561[42]
  i2560.m_fontWeight = i2561[43]
  i2560.m_enableAutoSizing = !!i2561[44]
  i2560.m_fontSizeMin = i2561[45]
  i2560.m_fontSizeMax = i2561[46]
  i2560.m_fontStyle = i2561[47]
  i2560.m_HorizontalAlignment = i2561[48]
  i2560.m_VerticalAlignment = i2561[49]
  i2560.m_textAlignment = i2561[50]
  i2560.m_characterSpacing = i2561[51]
  i2560.m_wordSpacing = i2561[52]
  i2560.m_lineSpacing = i2561[53]
  i2560.m_lineSpacingMax = i2561[54]
  i2560.m_paragraphSpacing = i2561[55]
  i2560.m_charWidthMaxAdj = i2561[56]
  i2560.m_TextWrappingMode = i2561[57]
  i2560.m_wordWrappingRatios = i2561[58]
  i2560.m_overflowMode = i2561[59]
  request.r(i2561[60], i2561[61], 0, i2560, 'm_linkedTextComponent')
  request.r(i2561[62], i2561[63], 0, i2560, 'parentLinkedComponent')
  i2560.m_enableKerning = !!i2561[64]
  var i2567 = i2561[65]
  var i2566 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.add(i2567[i + 0]);
  }
  i2560.m_ActiveFontFeatures = i2566
  i2560.m_enableExtraPadding = !!i2561[66]
  i2560.checkPaddingRequired = !!i2561[67]
  i2560.m_isRichText = !!i2561[68]
  i2560.m_parseCtrlCharacters = !!i2561[69]
  i2560.m_isOrthographic = !!i2561[70]
  i2560.m_isCullingEnabled = !!i2561[71]
  i2560.m_horizontalMapping = i2561[72]
  i2560.m_verticalMapping = i2561[73]
  i2560.m_uvLineOffset = i2561[74]
  i2560.m_geometrySortingOrder = i2561[75]
  i2560.m_IsTextObjectScaleStatic = !!i2561[76]
  i2560.m_VertexBufferAutoSizeReduction = !!i2561[77]
  i2560.m_useMaxVisibleDescender = !!i2561[78]
  i2560.m_pageToDisplay = i2561[79]
  i2560.m_margin = new pc.Vec4( i2561[80], i2561[81], i2561[82], i2561[83] )
  i2560.m_isUsingLegacyAnimationComponent = !!i2561[84]
  i2560.m_isVolumetricText = !!i2561[85]
  request.r(i2561[86], i2561[87], 0, i2560, 'm_Material')
  i2560.m_EmojiFallbackSupport = !!i2561[88]
  i2560.m_Maskable = !!i2561[89]
  i2560.m_Color = new pc.Color(i2561[90], i2561[91], i2561[92], i2561[93])
  i2560.m_RaycastTarget = !!i2561[94]
  i2560.m_RaycastPadding = new pc.Vec4( i2561[95], i2561[96], i2561[97], i2561[98] )
  return i2560
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2570 = root || request.c( 'TMPro.VertexGradient' )
  var i2571 = data
  i2570.topLeft = new pc.Color(i2571[0], i2571[1], i2571[2], i2571[3])
  i2570.topRight = new pc.Color(i2571[4], i2571[5], i2571[6], i2571[7])
  i2570.bottomLeft = new pc.Color(i2571[8], i2571[9], i2571[10], i2571[11])
  i2570.bottomRight = new pc.Color(i2571[12], i2571[13], i2571[14], i2571[15])
  return i2570
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2574 = root || request.c( 'UnityEngine.UI.Button' )
  var i2575 = data
  i2574.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2575[0], i2574.m_OnClick)
  i2574.m_Navigation = request.d('UnityEngine.UI.Navigation', i2575[1], i2574.m_Navigation)
  i2574.m_Transition = i2575[2]
  i2574.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2575[3], i2574.m_Colors)
  i2574.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2575[4], i2574.m_SpriteState)
  i2574.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2575[5], i2574.m_AnimationTriggers)
  i2574.m_Interactable = !!i2575[6]
  request.r(i2575[7], i2575[8], 0, i2574, 'm_TargetGraphic')
  return i2574
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2576 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2577 = data
  i2576.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2577[0], i2576.m_PersistentCalls)
  return i2576
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2578 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2579 = data
  var i2581 = i2579[0]
  var i2580 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.add(request.d('UnityEngine.Events.PersistentCall', i2581[i + 0]));
  }
  i2578.m_Calls = i2580
  return i2578
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2584 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2585 = data
  request.r(i2585[0], i2585[1], 0, i2584, 'm_Target')
  i2584.m_TargetAssemblyTypeName = i2585[2]
  i2584.m_MethodName = i2585[3]
  i2584.m_Mode = i2585[4]
  i2584.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2585[5], i2584.m_Arguments)
  i2584.m_CallState = i2585[6]
  return i2584
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2586 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2587 = data
  request.r(i2587[0], i2587[1], 0, i2586, 'm_ObjectArgument')
  i2586.m_ObjectArgumentAssemblyTypeName = i2587[2]
  i2586.m_IntArgument = i2587[3]
  i2586.m_FloatArgument = i2587[4]
  i2586.m_StringArgument = i2587[5]
  i2586.m_BoolArgument = !!i2587[6]
  return i2586
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2588 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2589 = data
  i2588.m_Mode = i2589[0]
  i2588.m_WrapAround = !!i2589[1]
  request.r(i2589[2], i2589[3], 0, i2588, 'm_SelectOnUp')
  request.r(i2589[4], i2589[5], 0, i2588, 'm_SelectOnDown')
  request.r(i2589[6], i2589[7], 0, i2588, 'm_SelectOnLeft')
  request.r(i2589[8], i2589[9], 0, i2588, 'm_SelectOnRight')
  return i2588
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2590 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2591 = data
  i2590.m_NormalColor = new pc.Color(i2591[0], i2591[1], i2591[2], i2591[3])
  i2590.m_HighlightedColor = new pc.Color(i2591[4], i2591[5], i2591[6], i2591[7])
  i2590.m_PressedColor = new pc.Color(i2591[8], i2591[9], i2591[10], i2591[11])
  i2590.m_SelectedColor = new pc.Color(i2591[12], i2591[13], i2591[14], i2591[15])
  i2590.m_DisabledColor = new pc.Color(i2591[16], i2591[17], i2591[18], i2591[19])
  i2590.m_ColorMultiplier = i2591[20]
  i2590.m_FadeDuration = i2591[21]
  return i2590
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2592 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2593 = data
  request.r(i2593[0], i2593[1], 0, i2592, 'm_HighlightedSprite')
  request.r(i2593[2], i2593[3], 0, i2592, 'm_PressedSprite')
  request.r(i2593[4], i2593[5], 0, i2592, 'm_SelectedSprite')
  request.r(i2593[6], i2593[7], 0, i2592, 'm_DisabledSprite')
  return i2592
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2594 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2595 = data
  i2594.m_NormalTrigger = i2595[0]
  i2594.m_HighlightedTrigger = i2595[1]
  i2594.m_PressedTrigger = i2595[2]
  i2594.m_SelectedTrigger = i2595[3]
  i2594.m_DisabledTrigger = i2595[4]
  return i2594
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2596 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2597 = data
  i2596.m_ShowMaskGraphic = !!i2597[0]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2599 = data
  request.r(i2599[0], i2599[1], 0, i2598, 'clip')
  request.r(i2599[2], i2599[3], 0, i2598, 'outputAudioMixerGroup')
  i2598.playOnAwake = !!i2599[4]
  i2598.loop = !!i2599[5]
  i2598.time = i2599[6]
  i2598.volume = i2599[7]
  i2598.pitch = i2599[8]
  i2598.enabled = !!i2599[9]
  return i2598
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i2600 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i2601 = data
  i2600.m_Padding = new pc.Vec4( i2601[0], i2601[1], i2601[2], i2601[3] )
  i2600.m_Softness = new pc.Vec2( i2601[4], i2601[5] )
  return i2600
}

Deserializers["GameController"] = function (request, data, root) {
  var i2602 = root || request.c( 'GameController' )
  var i2603 = data
  var i2605 = i2603[0]
  var i2604 = new (System.Collections.Generic.List$1(Bridge.ns('ClockItem')))
  for(var i = 0; i < i2605.length; i += 2) {
  request.r(i2605[i + 0], i2605[i + 1], 1, i2604, '')
  }
  i2602._clockItems = i2604
  var i2607 = i2603[1]
  var i2606 = new (System.Collections.Generic.List$1(Bridge.ns('ClockDropTarget')))
  for(var i = 0; i < i2607.length; i += 2) {
  request.r(i2607[i + 0], i2607[i + 1], 1, i2606, '')
  }
  i2602._dropTargets = i2606
  request.r(i2603[2], i2603[3], 0, i2602, '_tutorialHand')
  request.r(i2603[4], i2603[5], 0, i2602, '_tutorialFrom')
  request.r(i2603[6], i2603[7], 0, i2602, '_tutorialTo')
  i2602._tutorialMoveDuration = i2603[8]
  i2602._tutorialStartDelay = i2603[9]
  i2602._hideTutorialOnFirstSuccess = !!i2603[10]
  return i2602
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2612 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2613 = data
  request.r(i2613[0], i2613[1], 0, i2612, 'skeletonDataAsset')
  request.r(i2613[2], i2613[3], 0, i2612, 'additiveMaterial')
  request.r(i2613[4], i2613[5], 0, i2612, 'multiplyMaterial')
  request.r(i2613[6], i2613[7], 0, i2612, 'screenMaterial')
  i2612.forceAdditiveMaterial = !!i2613[8]
  i2612.initialSkinName = i2613[9]
  i2612.initialFlipX = !!i2613[10]
  i2612.initialFlipY = !!i2613[11]
  i2612.startingAnimation = i2613[12]
  i2612.startingLoop = !!i2613[13]
  i2612.timeScale = i2613[14]
  i2612.freeze = !!i2613[15]
  i2612.layoutScaleMode = i2613[16]
  i2612.updateWhenInvisible = i2613[17]
  i2612.allowMultipleCanvasRenderers = !!i2613[18]
  var i2615 = i2613[19]
  var i2614 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2615.length; i += 2) {
  request.r(i2615[i + 0], i2615[i + 1], 1, i2614, '')
  }
  i2612.canvasRenderers = i2614
  i2612.enableSeparatorSlots = !!i2613[20]
  i2612.updateSeparatorPartLocation = !!i2613[21]
  i2612.updateSeparatorPartScale = !!i2613[22]
  i2612.disableMeshAssignmentOnOverride = !!i2613[23]
  i2612.m_SkeletonColor = new pc.Color(i2613[24], i2613[25], i2613[26], i2613[27])
  i2612.referenceSize = new pc.Vec2( i2613[28], i2613[29] )
  i2612.pivotOffset = new pc.Vec2( i2613[30], i2613[31] )
  i2612.referenceScale = i2613[32]
  i2612.layoutScale = i2613[33]
  i2612.rectTransformSize = new pc.Vec2( i2613[34], i2613[35] )
  i2612.editReferenceRect = !!i2613[36]
  var i2617 = i2613[37]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( i2617[i + 0] );
  }
  i2612.separatorSlotNames = i2616
  var i2619 = i2613[38]
  var i2618 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2619.length; i += 2) {
  request.r(i2619[i + 0], i2619[i + 1], 1, i2618, '')
  }
  i2612.separatorParts = i2618
  i2612.physicsPositionInheritanceFactor = new pc.Vec2( i2613[39], i2613[40] )
  i2612.physicsRotationInheritanceFactor = i2613[41]
  request.r(i2613[42], i2613[43], 0, i2612, 'physicsMovementRelativeTo')
  i2612.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2613[44], i2612.meshGenerator)
  i2612.updateTiming = i2613[45]
  i2612.unscaledTime = !!i2613[46]
  request.r(i2613[47], i2613[48], 0, i2612, 'm_Material')
  i2612.m_Maskable = !!i2613[49]
  i2612.m_Color = new pc.Color(i2613[50], i2613[51], i2613[52], i2613[53])
  i2612.m_RaycastTarget = !!i2613[54]
  i2612.m_RaycastPadding = new pc.Vec4( i2613[55], i2613[56], i2613[57], i2613[58] )
  return i2612
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2626 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2627 = data
  i2626.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2627[0], i2626.settings)
  return i2626
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2628 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2629 = data
  i2628.useClipping = !!i2629[0]
  i2628.zSpacing = i2629[1]
  i2628.tintBlack = !!i2629[2]
  i2628.canvasGroupCompatible = !!i2629[3]
  i2628.pmaVertexColors = !!i2629[4]
  i2628.addNormals = !!i2629[5]
  i2628.calculateTangents = !!i2629[6]
  i2628.immutableTriangles = !!i2629[7]
  return i2628
}

Deserializers["ClockDropTarget"] = function (request, data, root) {
  var i2630 = root || request.c( 'ClockDropTarget' )
  var i2631 = data
  request.r(i2631[0], i2631[1], 0, i2630, '_skeletonAnimation')
  i2630._animationName = i2631[2]
  i2630._loopAnimation = !!i2631[3]
  request.r(i2631[4], i2631[5], 0, i2630, '_audioClip')
  i2630._acceptOnlyOnce = !!i2631[6]
  request.r(i2631[7], i2631[8], 0, i2630, '_door')
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2633 = data
  i2632.m_Alpha = i2633[0]
  i2632.m_Interactable = !!i2633[1]
  i2632.m_BlocksRaycasts = !!i2633[2]
  i2632.m_IgnoreParentGroups = !!i2633[3]
  i2632.enabled = !!i2633[4]
  return i2632
}

Deserializers["ClockItem"] = function (request, data, root) {
  var i2634 = root || request.c( 'ClockItem' )
  var i2635 = data
  request.r(i2635[0], i2635[1], 0, i2634, '_dragCanvas')
  return i2634
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i2636 = root || request.c( 'Playable.AudioManager' )
  var i2637 = data
  var i2639 = i2637[0]
  var i2638 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.add(request.d('Playable.SoundData', i2639[i + 0]));
  }
  i2636._sounds = i2638
  request.r(i2637[1], i2637[2], 0, i2636, '_audioMusic')
  request.r(i2637[3], i2637[4], 0, i2636, '_audioSound')
  return i2636
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i2642 = root || request.c( 'Playable.SoundData' )
  var i2643 = data
  i2642.Type = i2643[0]
  request.r(i2643[1], i2643[2], 0, i2642, 'Clip')
  return i2642
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2644 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2645 = data
  request.r(i2645[0], i2645[1], 0, i2644, 'm_FirstSelected')
  i2644.m_sendNavigationEvents = !!i2645[2]
  i2644.m_DragThreshold = i2645[3]
  return i2644
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2646 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2647 = data
  i2646.m_HorizontalAxis = i2647[0]
  i2646.m_VerticalAxis = i2647[1]
  i2646.m_SubmitButton = i2647[2]
  i2646.m_CancelButton = i2647[3]
  i2646.m_InputActionsPerSecond = i2647[4]
  i2646.m_RepeatDelay = i2647[5]
  i2646.m_ForceModuleActive = !!i2647[6]
  i2646.m_SendPointerHoverToParent = !!i2647[7]
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2649 = data
  i2648.ambientIntensity = i2649[0]
  i2648.reflectionIntensity = i2649[1]
  i2648.ambientMode = i2649[2]
  i2648.ambientLight = new pc.Color(i2649[3], i2649[4], i2649[5], i2649[6])
  i2648.ambientSkyColor = new pc.Color(i2649[7], i2649[8], i2649[9], i2649[10])
  i2648.ambientGroundColor = new pc.Color(i2649[11], i2649[12], i2649[13], i2649[14])
  i2648.ambientEquatorColor = new pc.Color(i2649[15], i2649[16], i2649[17], i2649[18])
  i2648.fogColor = new pc.Color(i2649[19], i2649[20], i2649[21], i2649[22])
  i2648.fogEndDistance = i2649[23]
  i2648.fogStartDistance = i2649[24]
  i2648.fogDensity = i2649[25]
  i2648.fog = !!i2649[26]
  request.r(i2649[27], i2649[28], 0, i2648, 'skybox')
  i2648.fogMode = i2649[29]
  var i2651 = i2649[30]
  var i2650 = []
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2651[i + 0]) );
  }
  i2648.lightmaps = i2650
  i2648.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2649[31], i2648.lightProbes)
  i2648.lightmapsMode = i2649[32]
  i2648.mixedBakeMode = i2649[33]
  i2648.environmentLightingMode = i2649[34]
  i2648.ambientProbe = new pc.SphericalHarmonicsL2(i2649[35])
  request.r(i2649[36], i2649[37], 0, i2648, 'customReflection')
  request.r(i2649[38], i2649[39], 0, i2648, 'defaultReflection')
  i2648.defaultReflectionMode = i2649[40]
  i2648.defaultReflectionResolution = i2649[41]
  i2648.sunLightObjectId = i2649[42]
  i2648.pixelLightCount = i2649[43]
  i2648.defaultReflectionHDR = !!i2649[44]
  i2648.hasLightDataAsset = !!i2649[45]
  i2648.hasManualGenerate = !!i2649[46]
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2655 = data
  request.r(i2655[0], i2655[1], 0, i2654, 'lightmapColor')
  request.r(i2655[2], i2655[3], 0, i2654, 'lightmapDirection')
  request.r(i2655[4], i2655[5], 0, i2654, 'shadowMask')
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2656 = root || new UnityEngine.LightProbes()
  var i2657 = data
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2665 = data
  var i2667 = i2665[0]
  var i2666 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2667[i + 0]));
  }
  i2664.ShaderCompilationErrors = i2666
  i2664.name = i2665[1]
  i2664.guid = i2665[2]
  var i2669 = i2665[3]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.push( i2669[i + 0] );
  }
  i2664.shaderDefinedKeywords = i2668
  var i2671 = i2665[4]
  var i2670 = []
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2671[i + 0]) );
  }
  i2664.passes = i2670
  var i2673 = i2665[5]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2673[i + 0]) );
  }
  i2664.usePasses = i2672
  var i2675 = i2665[6]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2675[i + 0]) );
  }
  i2664.defaultParameterValues = i2674
  request.r(i2665[7], i2665[8], 0, i2664, 'unityFallbackShader')
  i2664.readDepth = !!i2665[9]
  i2664.hasDepthOnlyPass = !!i2665[10]
  i2664.isCreatedByShaderGraph = !!i2665[11]
  i2664.disableBatching = !!i2665[12]
  i2664.compiled = !!i2665[13]
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2679 = data
  i2678.shaderName = i2679[0]
  i2678.errorMessage = i2679[1]
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2682 = root || new pc.UnityShaderPass()
  var i2683 = data
  i2682.id = i2683[0]
  i2682.subShaderIndex = i2683[1]
  i2682.name = i2683[2]
  i2682.passType = i2683[3]
  i2682.grabPassTextureName = i2683[4]
  i2682.usePass = !!i2683[5]
  i2682.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2683[6], i2682.zTest)
  i2682.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2683[7], i2682.zWrite)
  i2682.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2683[8], i2682.culling)
  i2682.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2683[9], i2682.blending)
  i2682.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2683[10], i2682.alphaBlending)
  i2682.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2683[11], i2682.colorWriteMask)
  i2682.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2683[12], i2682.offsetUnits)
  i2682.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2683[13], i2682.offsetFactor)
  i2682.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2683[14], i2682.stencilRef)
  i2682.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2683[15], i2682.stencilReadMask)
  i2682.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2683[16], i2682.stencilWriteMask)
  i2682.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2683[17], i2682.stencilOp)
  i2682.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2683[18], i2682.stencilOpFront)
  i2682.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2683[19], i2682.stencilOpBack)
  var i2685 = i2683[20]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2685[i + 0]) );
  }
  i2682.tags = i2684
  var i2687 = i2683[21]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( i2687[i + 0] );
  }
  i2682.passDefinedKeywords = i2686
  var i2689 = i2683[22]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2689[i + 0]) );
  }
  i2682.passDefinedKeywordGroups = i2688
  var i2691 = i2683[23]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2691[i + 0]) );
  }
  i2682.variants = i2690
  var i2693 = i2683[24]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2693[i + 0]) );
  }
  i2682.excludedVariants = i2692
  i2682.hasDepthReader = !!i2683[25]
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2695 = data
  i2694.val = i2695[0]
  i2694.name = i2695[1]
  return i2694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2697 = data
  i2696.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2697[0], i2696.src)
  i2696.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2697[1], i2696.dst)
  i2696.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2697[2], i2696.op)
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2699 = data
  i2698.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2699[0], i2698.pass)
  i2698.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2699[1], i2698.fail)
  i2698.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2699[2], i2698.zFail)
  i2698.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2699[3], i2698.comp)
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2703 = data
  i2702.name = i2703[0]
  i2702.value = i2703[1]
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2707 = data
  var i2709 = i2707[0]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( i2709[i + 0] );
  }
  i2706.keywords = i2708
  i2706.hasDiscard = !!i2707[1]
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2713 = data
  i2712.passId = i2713[0]
  i2712.subShaderIndex = i2713[1]
  var i2715 = i2713[2]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( i2715[i + 0] );
  }
  i2712.keywords = i2714
  i2712.vertexProgram = i2713[3]
  i2712.fragmentProgram = i2713[4]
  i2712.exportedForWebGl2 = !!i2713[5]
  i2712.readDepth = !!i2713[6]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2719 = data
  request.r(i2719[0], i2719[1], 0, i2718, 'shader')
  i2718.pass = i2719[2]
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2723 = data
  i2722.name = i2723[0]
  i2722.type = i2723[1]
  i2722.value = new pc.Vec4( i2723[2], i2723[3], i2723[4], i2723[5] )
  i2722.textureValue = i2723[6]
  i2722.shaderPropertyFlag = i2723[7]
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2725 = data
  i2724.name = i2725[0]
  request.r(i2725[1], i2725[2], 0, i2724, 'texture')
  i2724.aabb = i2725[3]
  i2724.vertices = i2725[4]
  i2724.triangles = i2725[5]
  i2724.textureRect = UnityEngine.Rect.MinMaxRect(i2725[6], i2725[7], i2725[8], i2725[9])
  i2724.packedRect = UnityEngine.Rect.MinMaxRect(i2725[10], i2725[11], i2725[12], i2725[13])
  i2724.border = new pc.Vec4( i2725[14], i2725[15], i2725[16], i2725[17] )
  i2724.transparency = i2725[18]
  i2724.bounds = i2725[19]
  i2724.pixelsPerUnit = i2725[20]
  i2724.textureWidth = i2725[21]
  i2724.textureHeight = i2725[22]
  i2724.nativeSize = new pc.Vec2( i2725[23], i2725[24] )
  i2724.pivot = new pc.Vec2( i2725[25], i2725[26] )
  i2724.textureRectOffset = new pc.Vec2( i2725[27], i2725[28] )
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2727 = data
  i2726.name = i2727[0]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2729 = data
  i2728.name = i2729[0]
  i2728.ascent = i2729[1]
  i2728.originalLineHeight = i2729[2]
  i2728.fontSize = i2729[3]
  var i2731 = i2729[4]
  var i2730 = []
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2731[i + 0]) );
  }
  i2728.characterInfo = i2730
  request.r(i2729[5], i2729[6], 0, i2728, 'texture')
  i2728.originalFontSize = i2729[7]
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2735 = data
  i2734.index = i2735[0]
  i2734.advance = i2735[1]
  i2734.bearing = i2735[2]
  i2734.glyphWidth = i2735[3]
  i2734.glyphHeight = i2735[4]
  i2734.minX = i2735[5]
  i2734.maxX = i2735[6]
  i2734.minY = i2735[7]
  i2734.maxY = i2735[8]
  i2734.uvBottomLeftX = i2735[9]
  i2734.uvBottomLeftY = i2735[10]
  i2734.uvBottomRightX = i2735[11]
  i2734.uvBottomRightY = i2735[12]
  i2734.uvTopLeftX = i2735[13]
  i2734.uvTopLeftY = i2735[14]
  i2734.uvTopRightX = i2735[15]
  i2734.uvTopRightY = i2735[16]
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2737 = data
  i2736.name = i2737[0]
  i2736.bytes64 = i2737[1]
  i2736.data = i2737[2]
  return i2736
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2738 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2739 = data
  i2738.normalStyle = i2739[0]
  i2738.normalSpacingOffset = i2739[1]
  i2738.boldStyle = i2739[2]
  i2738.boldSpacing = i2739[3]
  i2738.italicStyle = i2739[4]
  i2738.tabSize = i2739[5]
  request.r(i2739[6], i2739[7], 0, i2738, 'atlas')
  i2738.m_SourceFontFileGUID = i2739[8]
  i2738.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2739[9], i2738.m_CreationSettings)
  request.r(i2739[10], i2739[11], 0, i2738, 'm_SourceFontFile')
  i2738.m_SourceFontFilePath = i2739[12]
  i2738.m_AtlasPopulationMode = i2739[13]
  i2738.InternalDynamicOS = !!i2739[14]
  var i2741 = i2739[15]
  var i2740 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.add(request.d('UnityEngine.TextCore.Glyph', i2741[i + 0]));
  }
  i2738.m_GlyphTable = i2740
  var i2743 = i2739[16]
  var i2742 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.add(request.d('TMPro.TMP_Character', i2743[i + 0]));
  }
  i2738.m_CharacterTable = i2742
  var i2745 = i2739[17]
  var i2744 = []
  for(var i = 0; i < i2745.length; i += 2) {
  request.r(i2745[i + 0], i2745[i + 1], 2, i2744, '')
  }
  i2738.m_AtlasTextures = i2744
  i2738.m_AtlasTextureIndex = i2739[18]
  i2738.m_IsMultiAtlasTexturesEnabled = !!i2739[19]
  i2738.m_GetFontFeatures = !!i2739[20]
  i2738.m_ClearDynamicDataOnBuild = !!i2739[21]
  i2738.m_AtlasWidth = i2739[22]
  i2738.m_AtlasHeight = i2739[23]
  i2738.m_AtlasPadding = i2739[24]
  i2738.m_AtlasRenderMode = i2739[25]
  var i2747 = i2739[26]
  var i2746 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.add(request.d('UnityEngine.TextCore.GlyphRect', i2747[i + 0]));
  }
  i2738.m_UsedGlyphRects = i2746
  var i2749 = i2739[27]
  var i2748 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.add(request.d('UnityEngine.TextCore.GlyphRect', i2749[i + 0]));
  }
  i2738.m_FreeGlyphRects = i2748
  i2738.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2739[28], i2738.m_FontFeatureTable)
  i2738.m_ShouldReimportFontFeatures = !!i2739[29]
  var i2751 = i2739[30]
  var i2750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2751.length; i += 2) {
  request.r(i2751[i + 0], i2751[i + 1], 1, i2750, '')
  }
  i2738.m_FallbackFontAssetTable = i2750
  var i2753 = i2739[31]
  var i2752 = []
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.push( request.d('TMPro.TMP_FontWeightPair', i2753[i + 0]) );
  }
  i2738.m_FontWeightTable = i2752
  var i2755 = i2739[32]
  var i2754 = []
  for(var i = 0; i < i2755.length; i += 1) {
    i2754.push( request.d('TMPro.TMP_FontWeightPair', i2755[i + 0]) );
  }
  i2738.fontWeights = i2754
  i2738.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2739[33], i2738.m_fontInfo)
  var i2757 = i2739[34]
  var i2756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2757.length; i += 1) {
    i2756.add(request.d('TMPro.TMP_Glyph', i2757[i + 0]));
  }
  i2738.m_glyphInfoList = i2756
  i2738.m_KerningTable = request.d('TMPro.KerningTable', i2739[35], i2738.m_KerningTable)
  var i2759 = i2739[36]
  var i2758 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2759.length; i += 2) {
  request.r(i2759[i + 0], i2759[i + 1], 1, i2758, '')
  }
  i2738.fallbackFontAssets = i2758
  i2738.m_Version = i2739[37]
  i2738.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2739[38], i2738.m_FaceInfo)
  request.r(i2739[39], i2739[40], 0, i2738, 'm_Material')
  return i2738
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2760 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2761 = data
  i2760.sourceFontFileName = i2761[0]
  i2760.sourceFontFileGUID = i2761[1]
  i2760.faceIndex = i2761[2]
  i2760.pointSizeSamplingMode = i2761[3]
  i2760.pointSize = i2761[4]
  i2760.padding = i2761[5]
  i2760.paddingMode = i2761[6]
  i2760.packingMode = i2761[7]
  i2760.atlasWidth = i2761[8]
  i2760.atlasHeight = i2761[9]
  i2760.characterSetSelectionMode = i2761[10]
  i2760.characterSequence = i2761[11]
  i2760.referencedFontAssetGUID = i2761[12]
  i2760.referencedTextAssetGUID = i2761[13]
  i2760.fontStyle = i2761[14]
  i2760.fontStyleModifier = i2761[15]
  i2760.renderMode = i2761[16]
  i2760.includeFontFeatures = !!i2761[17]
  return i2760
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2764 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2765 = data
  i2764.m_Index = i2765[0]
  i2764.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2765[1], i2764.m_Metrics)
  i2764.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2765[2], i2764.m_GlyphRect)
  i2764.m_Scale = i2765[3]
  i2764.m_AtlasIndex = i2765[4]
  i2764.m_ClassDefinitionType = i2765[5]
  return i2764
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2766 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2767 = data
  i2766.m_Width = i2767[0]
  i2766.m_Height = i2767[1]
  i2766.m_HorizontalBearingX = i2767[2]
  i2766.m_HorizontalBearingY = i2767[3]
  i2766.m_HorizontalAdvance = i2767[4]
  return i2766
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2768 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2769 = data
  i2768.m_X = i2769[0]
  i2768.m_Y = i2769[1]
  i2768.m_Width = i2769[2]
  i2768.m_Height = i2769[3]
  return i2768
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2772 = root || request.c( 'TMPro.TMP_Character' )
  var i2773 = data
  i2772.m_ElementType = i2773[0]
  i2772.m_Unicode = i2773[1]
  i2772.m_GlyphIndex = i2773[2]
  i2772.m_Scale = i2773[3]
  return i2772
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2778 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2779 = data
  var i2781 = i2779[0]
  var i2780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2781.length; i += 1) {
    i2780.add(request.d('TMPro.MultipleSubstitutionRecord', i2781[i + 0]));
  }
  i2778.m_MultipleSubstitutionRecords = i2780
  var i2783 = i2779[1]
  var i2782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2783.length; i += 1) {
    i2782.add(request.d('TMPro.LigatureSubstitutionRecord', i2783[i + 0]));
  }
  i2778.m_LigatureSubstitutionRecords = i2782
  var i2785 = i2779[2]
  var i2784 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2785.length; i += 1) {
    i2784.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2785[i + 0]));
  }
  i2778.m_GlyphPairAdjustmentRecords = i2784
  var i2787 = i2779[3]
  var i2786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2787[i + 0]));
  }
  i2778.m_MarkToBaseAdjustmentRecords = i2786
  var i2789 = i2779[4]
  var i2788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2789[i + 0]));
  }
  i2778.m_MarkToMarkAdjustmentRecords = i2788
  return i2778
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2792 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2793 = data
  i2792.m_TargetGlyphID = i2793[0]
  i2792.m_SubstituteGlyphIDs = i2793[1]
  return i2792
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2796 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2797 = data
  i2796.m_ComponentGlyphIDs = i2797[0]
  i2796.m_LigatureGlyphID = i2797[1]
  return i2796
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2800 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2801 = data
  i2800.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2801[0], i2800.m_FirstAdjustmentRecord)
  i2800.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2801[1], i2800.m_SecondAdjustmentRecord)
  i2800.m_FeatureLookupFlags = i2801[2]
  return i2800
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2804 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2805 = data
  i2804.m_BaseGlyphID = i2805[0]
  i2804.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2805[1], i2804.m_BaseGlyphAnchorPoint)
  i2804.m_MarkGlyphID = i2805[2]
  i2804.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2805[3], i2804.m_MarkPositionAdjustment)
  return i2804
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2808 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2809 = data
  i2808.m_BaseMarkGlyphID = i2809[0]
  i2808.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2809[1], i2808.m_BaseMarkGlyphAnchorPoint)
  i2808.m_CombiningMarkGlyphID = i2809[2]
  i2808.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2809[3], i2808.m_CombiningMarkPositionAdjustment)
  return i2808
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2814 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2815 = data
  request.r(i2815[0], i2815[1], 0, i2814, 'regularTypeface')
  request.r(i2815[2], i2815[3], 0, i2814, 'italicTypeface')
  return i2814
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2816 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2817 = data
  i2816.Name = i2817[0]
  i2816.PointSize = i2817[1]
  i2816.Scale = i2817[2]
  i2816.CharacterCount = i2817[3]
  i2816.LineHeight = i2817[4]
  i2816.Baseline = i2817[5]
  i2816.Ascender = i2817[6]
  i2816.CapHeight = i2817[7]
  i2816.Descender = i2817[8]
  i2816.CenterLine = i2817[9]
  i2816.SuperscriptOffset = i2817[10]
  i2816.SubscriptOffset = i2817[11]
  i2816.SubSize = i2817[12]
  i2816.Underline = i2817[13]
  i2816.UnderlineThickness = i2817[14]
  i2816.strikethrough = i2817[15]
  i2816.strikethroughThickness = i2817[16]
  i2816.TabWidth = i2817[17]
  i2816.Padding = i2817[18]
  i2816.AtlasWidth = i2817[19]
  i2816.AtlasHeight = i2817[20]
  return i2816
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2820 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2821 = data
  i2820.id = i2821[0]
  i2820.x = i2821[1]
  i2820.y = i2821[2]
  i2820.width = i2821[3]
  i2820.height = i2821[4]
  i2820.xOffset = i2821[5]
  i2820.yOffset = i2821[6]
  i2820.xAdvance = i2821[7]
  i2820.scale = i2821[8]
  return i2820
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2822 = root || request.c( 'TMPro.KerningTable' )
  var i2823 = data
  var i2825 = i2823[0]
  var i2824 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.add(request.d('TMPro.KerningPair', i2825[i + 0]));
  }
  i2822.kerningPairs = i2824
  return i2822
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2828 = root || request.c( 'TMPro.KerningPair' )
  var i2829 = data
  i2828.xOffset = i2829[0]
  i2828.m_FirstGlyph = i2829[1]
  i2828.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2829[2], i2828.m_FirstGlyphAdjustments)
  i2828.m_SecondGlyph = i2829[3]
  i2828.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2829[4], i2828.m_SecondGlyphAdjustments)
  i2828.m_IgnoreSpacingAdjustments = !!i2829[5]
  return i2828
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2830 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2831 = data
  i2830.m_FaceIndex = i2831[0]
  i2830.m_FamilyName = i2831[1]
  i2830.m_StyleName = i2831[2]
  i2830.m_PointSize = i2831[3]
  i2830.m_Scale = i2831[4]
  i2830.m_UnitsPerEM = i2831[5]
  i2830.m_LineHeight = i2831[6]
  i2830.m_AscentLine = i2831[7]
  i2830.m_CapLine = i2831[8]
  i2830.m_MeanLine = i2831[9]
  i2830.m_Baseline = i2831[10]
  i2830.m_DescentLine = i2831[11]
  i2830.m_SuperscriptOffset = i2831[12]
  i2830.m_SuperscriptSize = i2831[13]
  i2830.m_SubscriptOffset = i2831[14]
  i2830.m_SubscriptSize = i2831[15]
  i2830.m_UnderlineOffset = i2831[16]
  i2830.m_UnderlineThickness = i2831[17]
  i2830.m_StrikethroughOffset = i2831[18]
  i2830.m_StrikethroughThickness = i2831[19]
  i2830.m_TabWidth = i2831[20]
  return i2830
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2832 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2833 = data
  var i2835 = i2833[0]
  var i2834 = []
  for(var i = 0; i < i2835.length; i += 2) {
  request.r(i2835[i + 0], i2835[i + 1], 2, i2834, '')
  }
  i2832.atlasAssets = i2834
  i2832.scale = i2833[1]
  request.r(i2833[2], i2833[3], 0, i2832, 'skeletonJSON')
  i2832.isUpgradingBlendModeMaterials = !!i2833[4]
  i2832.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2833[5], i2832.blendModeMaterials)
  var i2837 = i2833[6]
  var i2836 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2837.length; i += 2) {
  request.r(i2837[i + 0], i2837[i + 1], 1, i2836, '')
  }
  i2832.skeletonDataModifiers = i2836
  var i2839 = i2833[7]
  var i2838 = []
  for(var i = 0; i < i2839.length; i += 1) {
    i2838.push( i2839[i + 0] );
  }
  i2832.fromAnimation = i2838
  var i2841 = i2833[8]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.push( i2841[i + 0] );
  }
  i2832.toAnimation = i2840
  i2832.duration = i2833[9]
  i2832.defaultMix = i2833[10]
  request.r(i2833[11], i2833[12], 0, i2832, 'controller')
  return i2832
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2844 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2845 = data
  i2844.applyAdditiveMaterial = !!i2845[0]
  var i2847 = i2845[1]
  var i2846 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2847.length; i += 1) {
    i2846.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2847[i + 0]));
  }
  i2844.additiveMaterials = i2846
  var i2849 = i2845[2]
  var i2848 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2849[i + 0]));
  }
  i2844.multiplyMaterials = i2848
  var i2851 = i2845[3]
  var i2850 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2851[i + 0]));
  }
  i2844.screenMaterials = i2850
  i2844.requiresBlendModeMaterials = !!i2845[4]
  return i2844
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2854 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2855 = data
  i2854.pageName = i2855[0]
  request.r(i2855[1], i2855[2], 0, i2854, 'material')
  return i2854
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2858 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2859 = data
  request.r(i2859[0], i2859[1], 0, i2858, 'atlasFile')
  var i2861 = i2859[2]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 2) {
  request.r(i2861[i + 0], i2861[i + 1], 2, i2860, '')
  }
  i2858.materials = i2860
  i2858.textureLoadingMode = i2859[3]
  request.r(i2859[4], i2859[5], 0, i2858, 'onDemandTextureLoader')
  return i2858
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2862 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2863 = data
  i2862.useSafeMode = !!i2863[0]
  i2862.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2863[1], i2862.safeModeOptions)
  i2862.timeScale = i2863[2]
  i2862.unscaledTimeScale = i2863[3]
  i2862.useSmoothDeltaTime = !!i2863[4]
  i2862.maxSmoothUnscaledTime = i2863[5]
  i2862.rewindCallbackMode = i2863[6]
  i2862.showUnityEditorReport = !!i2863[7]
  i2862.logBehaviour = i2863[8]
  i2862.drawGizmos = !!i2863[9]
  i2862.defaultRecyclable = !!i2863[10]
  i2862.defaultAutoPlay = i2863[11]
  i2862.defaultUpdateType = i2863[12]
  i2862.defaultTimeScaleIndependent = !!i2863[13]
  i2862.defaultEaseType = i2863[14]
  i2862.defaultEaseOvershootOrAmplitude = i2863[15]
  i2862.defaultEasePeriod = i2863[16]
  i2862.defaultAutoKill = !!i2863[17]
  i2862.defaultLoopType = i2863[18]
  i2862.debugMode = !!i2863[19]
  i2862.debugStoreTargetId = !!i2863[20]
  i2862.showPreviewPanel = !!i2863[21]
  i2862.storeSettingsLocation = i2863[22]
  i2862.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2863[23], i2862.modules)
  i2862.createASMDEF = !!i2863[24]
  i2862.showPlayingTweens = !!i2863[25]
  i2862.showPausedTweens = !!i2863[26]
  return i2862
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2864 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2865 = data
  i2864.logBehaviour = i2865[0]
  i2864.nestedTweenFailureBehaviour = i2865[1]
  return i2864
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2866 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2867 = data
  i2866.showPanel = !!i2867[0]
  i2866.audioEnabled = !!i2867[1]
  i2866.physicsEnabled = !!i2867[2]
  i2866.physics2DEnabled = !!i2867[3]
  i2866.spriteEnabled = !!i2867[4]
  i2866.uiEnabled = !!i2867[5]
  i2866.uiToolkitEnabled = !!i2867[6]
  i2866.textMeshProEnabled = !!i2867[7]
  i2866.tk2DEnabled = !!i2867[8]
  i2866.deAudioEnabled = !!i2867[9]
  i2866.deUnityExtendedEnabled = !!i2867[10]
  i2866.epoOutlineEnabled = !!i2867[11]
  return i2866
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2868 = root || request.c( 'TMPro.TMP_Settings' )
  var i2869 = data
  i2868.assetVersion = i2869[0]
  i2868.m_TextWrappingMode = i2869[1]
  i2868.m_enableKerning = !!i2869[2]
  var i2871 = i2869[3]
  var i2870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2871.length; i += 1) {
    i2870.add(i2871[i + 0]);
  }
  i2868.m_ActiveFontFeatures = i2870
  i2868.m_enableExtraPadding = !!i2869[4]
  i2868.m_enableTintAllSprites = !!i2869[5]
  i2868.m_enableParseEscapeCharacters = !!i2869[6]
  i2868.m_EnableRaycastTarget = !!i2869[7]
  i2868.m_GetFontFeaturesAtRuntime = !!i2869[8]
  i2868.m_missingGlyphCharacter = i2869[9]
  i2868.m_ClearDynamicDataOnBuild = !!i2869[10]
  i2868.m_warningsDisabled = !!i2869[11]
  request.r(i2869[12], i2869[13], 0, i2868, 'm_defaultFontAsset')
  i2868.m_defaultFontAssetPath = i2869[14]
  i2868.m_defaultFontSize = i2869[15]
  i2868.m_defaultAutoSizeMinRatio = i2869[16]
  i2868.m_defaultAutoSizeMaxRatio = i2869[17]
  i2868.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2869[18], i2869[19] )
  i2868.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2869[20], i2869[21] )
  i2868.m_autoSizeTextContainer = !!i2869[22]
  i2868.m_IsTextObjectScaleStatic = !!i2869[23]
  var i2873 = i2869[24]
  var i2872 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2873.length; i += 2) {
  request.r(i2873[i + 0], i2873[i + 1], 1, i2872, '')
  }
  i2868.m_fallbackFontAssets = i2872
  i2868.m_matchMaterialPreset = !!i2869[25]
  i2868.m_HideSubTextObjects = !!i2869[26]
  request.r(i2869[27], i2869[28], 0, i2868, 'm_defaultSpriteAsset')
  i2868.m_defaultSpriteAssetPath = i2869[29]
  i2868.m_enableEmojiSupport = !!i2869[30]
  i2868.m_MissingCharacterSpriteUnicode = i2869[31]
  var i2875 = i2869[32]
  var i2874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2875.length; i += 2) {
  request.r(i2875[i + 0], i2875[i + 1], 1, i2874, '')
  }
  i2868.m_EmojiFallbackTextAssets = i2874
  i2868.m_defaultColorGradientPresetsPath = i2869[33]
  request.r(i2869[34], i2869[35], 0, i2868, 'm_defaultStyleSheet')
  i2868.m_StyleSheetsResourcePath = i2869[36]
  request.r(i2869[37], i2869[38], 0, i2868, 'm_leadingCharacters')
  request.r(i2869[39], i2869[40], 0, i2868, 'm_followingCharacters')
  i2868.m_UseModernHangulLineBreakingRules = !!i2869[41]
  return i2868
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2878 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2879 = data
  i2878.m_GlyphIndex = i2879[0]
  i2878.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2879[1], i2878.m_GlyphValueRecord)
  return i2878
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2880 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2881 = data
  i2880.m_XPlacement = i2881[0]
  i2880.m_YPlacement = i2881[1]
  i2880.m_XAdvance = i2881[2]
  i2880.m_YAdvance = i2881[3]
  return i2880
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2882 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2883 = data
  request.r(i2883[0], i2883[1], 0, i2882, 'spriteSheet')
  var i2885 = i2883[2]
  var i2884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2885.length; i += 1) {
    i2884.add(request.d('TMPro.TMP_Sprite', i2885[i + 0]));
  }
  i2882.spriteInfoList = i2884
  var i2887 = i2883[3]
  var i2886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2887.length; i += 2) {
  request.r(i2887[i + 0], i2887[i + 1], 1, i2886, '')
  }
  i2882.fallbackSpriteAssets = i2886
  var i2889 = i2883[4]
  var i2888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.add(request.d('TMPro.TMP_SpriteCharacter', i2889[i + 0]));
  }
  i2882.m_SpriteCharacterTable = i2888
  var i2891 = i2883[5]
  var i2890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2891.length; i += 1) {
    i2890.add(request.d('TMPro.TMP_SpriteGlyph', i2891[i + 0]));
  }
  i2882.m_GlyphTable = i2890
  i2882.m_Version = i2883[6]
  i2882.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2883[7], i2882.m_FaceInfo)
  request.r(i2883[8], i2883[9], 0, i2882, 'm_Material')
  return i2882
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2894 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2895 = data
  i2894.name = i2895[0]
  i2894.hashCode = i2895[1]
  i2894.unicode = i2895[2]
  i2894.pivot = new pc.Vec2( i2895[3], i2895[4] )
  request.r(i2895[5], i2895[6], 0, i2894, 'sprite')
  i2894.id = i2895[7]
  i2894.x = i2895[8]
  i2894.y = i2895[9]
  i2894.width = i2895[10]
  i2894.height = i2895[11]
  i2894.xOffset = i2895[12]
  i2894.yOffset = i2895[13]
  i2894.xAdvance = i2895[14]
  i2894.scale = i2895[15]
  return i2894
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2900 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2901 = data
  i2900.m_Name = i2901[0]
  i2900.m_ElementType = i2901[1]
  i2900.m_Unicode = i2901[2]
  i2900.m_GlyphIndex = i2901[3]
  i2900.m_Scale = i2901[4]
  return i2900
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2904 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2905 = data
  request.r(i2905[0], i2905[1], 0, i2904, 'sprite')
  i2904.m_Index = i2905[2]
  i2904.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2905[3], i2904.m_Metrics)
  i2904.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2905[4], i2904.m_GlyphRect)
  i2904.m_Scale = i2905[5]
  i2904.m_AtlasIndex = i2905[6]
  i2904.m_ClassDefinitionType = i2905[7]
  return i2904
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2906 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2907 = data
  var i2909 = i2907[0]
  var i2908 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2909.length; i += 1) {
    i2908.add(request.d('TMPro.TMP_Style', i2909[i + 0]));
  }
  i2906.m_StyleList = i2908
  return i2906
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2912 = root || request.c( 'TMPro.TMP_Style' )
  var i2913 = data
  i2912.m_Name = i2913[0]
  i2912.m_HashCode = i2913[1]
  i2912.m_OpeningDefinition = i2913[2]
  i2912.m_ClosingDefinition = i2913[3]
  i2912.m_OpeningTagArray = i2913[4]
  i2912.m_ClosingTagArray = i2913[5]
  return i2912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2915 = data
  var i2917 = i2915[0]
  var i2916 = []
  for(var i = 0; i < i2917.length; i += 1) {
    i2916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2917[i + 0]) );
  }
  i2914.files = i2916
  i2914.componentToPrefabIds = i2915[1]
  return i2914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2921 = data
  i2920.path = i2921[0]
  request.r(i2921[1], i2921[2], 0, i2920, 'unityObject')
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2923 = data
  var i2925 = i2923[0]
  var i2924 = []
  for(var i = 0; i < i2925.length; i += 1) {
    i2924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2925[i + 0]) );
  }
  i2922.scriptsExecutionOrder = i2924
  var i2927 = i2923[1]
  var i2926 = []
  for(var i = 0; i < i2927.length; i += 1) {
    i2926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2927[i + 0]) );
  }
  i2922.sortingLayers = i2926
  var i2929 = i2923[2]
  var i2928 = []
  for(var i = 0; i < i2929.length; i += 1) {
    i2928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2929[i + 0]) );
  }
  i2922.cullingLayers = i2928
  i2922.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2923[3], i2922.timeSettings)
  i2922.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2923[4], i2922.physicsSettings)
  i2922.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2923[5], i2922.physics2DSettings)
  i2922.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2923[6], i2922.qualitySettings)
  i2922.enableRealtimeShadows = !!i2923[7]
  i2922.enableAutoInstancing = !!i2923[8]
  i2922.enableStaticBatching = !!i2923[9]
  i2922.enableDynamicBatching = !!i2923[10]
  i2922.usePreservativeDynamicBatching = !!i2923[11]
  i2922.lightmapEncodingQuality = i2923[12]
  i2922.desiredColorSpace = i2923[13]
  var i2931 = i2923[14]
  var i2930 = []
  for(var i = 0; i < i2931.length; i += 1) {
    i2930.push( i2931[i + 0] );
  }
  i2922.allTags = i2930
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2935 = data
  i2934.name = i2935[0]
  i2934.value = i2935[1]
  return i2934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2939 = data
  i2938.id = i2939[0]
  i2938.name = i2939[1]
  i2938.value = i2939[2]
  return i2938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2943 = data
  i2942.id = i2943[0]
  i2942.name = i2943[1]
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2945 = data
  i2944.fixedDeltaTime = i2945[0]
  i2944.maximumDeltaTime = i2945[1]
  i2944.timeScale = i2945[2]
  i2944.maximumParticleTimestep = i2945[3]
  return i2944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2947 = data
  i2946.gravity = new pc.Vec3( i2947[0], i2947[1], i2947[2] )
  i2946.defaultSolverIterations = i2947[3]
  i2946.bounceThreshold = i2947[4]
  i2946.autoSyncTransforms = !!i2947[5]
  i2946.autoSimulation = !!i2947[6]
  var i2949 = i2947[7]
  var i2948 = []
  for(var i = 0; i < i2949.length; i += 1) {
    i2948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2949[i + 0]) );
  }
  i2946.collisionMatrix = i2948
  return i2946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2953 = data
  i2952.enabled = !!i2953[0]
  i2952.layerId = i2953[1]
  i2952.otherLayerId = i2953[2]
  return i2952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2955 = data
  request.r(i2955[0], i2955[1], 0, i2954, 'material')
  i2954.gravity = new pc.Vec2( i2955[2], i2955[3] )
  i2954.positionIterations = i2955[4]
  i2954.velocityIterations = i2955[5]
  i2954.velocityThreshold = i2955[6]
  i2954.maxLinearCorrection = i2955[7]
  i2954.maxAngularCorrection = i2955[8]
  i2954.maxTranslationSpeed = i2955[9]
  i2954.maxRotationSpeed = i2955[10]
  i2954.baumgarteScale = i2955[11]
  i2954.baumgarteTOIScale = i2955[12]
  i2954.timeToSleep = i2955[13]
  i2954.linearSleepTolerance = i2955[14]
  i2954.angularSleepTolerance = i2955[15]
  i2954.defaultContactOffset = i2955[16]
  i2954.autoSimulation = !!i2955[17]
  i2954.queriesHitTriggers = !!i2955[18]
  i2954.queriesStartInColliders = !!i2955[19]
  i2954.callbacksOnDisable = !!i2955[20]
  i2954.reuseCollisionCallbacks = !!i2955[21]
  i2954.autoSyncTransforms = !!i2955[22]
  var i2957 = i2955[23]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 1) {
    i2956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2957[i + 0]) );
  }
  i2954.collisionMatrix = i2956
  return i2954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2961 = data
  i2960.enabled = !!i2961[0]
  i2960.layerId = i2961[1]
  i2960.otherLayerId = i2961[2]
  return i2960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2963 = data
  var i2965 = i2963[0]
  var i2964 = []
  for(var i = 0; i < i2965.length; i += 1) {
    i2964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2965[i + 0]) );
  }
  i2962.qualityLevels = i2964
  var i2967 = i2963[1]
  var i2966 = []
  for(var i = 0; i < i2967.length; i += 1) {
    i2966.push( i2967[i + 0] );
  }
  i2962.names = i2966
  i2962.shadows = i2963[2]
  i2962.anisotropicFiltering = i2963[3]
  i2962.antiAliasing = i2963[4]
  i2962.lodBias = i2963[5]
  i2962.shadowCascades = i2963[6]
  i2962.shadowDistance = i2963[7]
  i2962.shadowmaskMode = i2963[8]
  i2962.shadowProjection = i2963[9]
  i2962.shadowResolution = i2963[10]
  i2962.softParticles = !!i2963[11]
  i2962.softVegetation = !!i2963[12]
  i2962.activeColorSpace = i2963[13]
  i2962.desiredColorSpace = i2963[14]
  i2962.masterTextureLimit = i2963[15]
  i2962.maxQueuedFrames = i2963[16]
  i2962.particleRaycastBudget = i2963[17]
  i2962.pixelLightCount = i2963[18]
  i2962.realtimeReflectionProbes = !!i2963[19]
  i2962.shadowCascade2Split = i2963[20]
  i2962.shadowCascade4Split = new pc.Vec3( i2963[21], i2963[22], i2963[23] )
  i2962.streamingMipmapsActive = !!i2963[24]
  i2962.vSyncCount = i2963[25]
  i2962.asyncUploadBufferSize = i2963[26]
  i2962.asyncUploadTimeSlice = i2963[27]
  i2962.billboardsFaceCameraPosition = !!i2963[28]
  i2962.shadowNearPlaneOffset = i2963[29]
  i2962.streamingMipmapsMemoryBudget = i2963[30]
  i2962.maximumLODLevel = i2963[31]
  i2962.streamingMipmapsAddAllCameras = !!i2963[32]
  i2962.streamingMipmapsMaxLevelReduction = i2963[33]
  i2962.streamingMipmapsRenderersPerFrame = i2963[34]
  i2962.resolutionScalingFixedDPIFactor = i2963[35]
  i2962.streamingMipmapsMaxFileIORequests = i2963[36]
  i2962.currentQualityLevel = i2963[37]
  return i2962
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2970 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2971 = data
  i2970.m_XCoordinate = i2971[0]
  i2970.m_YCoordinate = i2971[1]
  return i2970
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2972 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2973 = data
  i2972.m_XPositionAdjustment = i2973[0]
  i2972.m_YPositionAdjustment = i2973[1]
  return i2972
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[2],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[2],"72":[73],"74":[75],"76":[75],"5":[4],"24":[4,29],"77":[78],"79":[4],"80":[15,4],"81":[73],"26":[15,4],"82":[83,73],"84":[73],"85":[73,86],"87":[51],"88":[58],"89":[78],"90":[91],"92":[93],"94":[31],"95":[5],"96":[4],"97":[73,4],"14":[4,15],"98":[4],"99":[15,4],"100":[73],"101":[15,4],"102":[4],"103":[104],"105":[104],"106":[104],"107":[4],"108":[4],"8":[5],"13":[15,4],"109":[4],"7":[5],"110":[4],"111":[4],"112":[4],"113":[4],"114":[4],"115":[4],"116":[4],"20":[4],"117":[4],"16":[15,4],"22":[4],"118":[4],"119":[4],"120":[4],"121":[15,4],"122":[4],"123":[31],"124":[31],"32":[31],"125":[31],"126":[2],"127":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.GameManager","UnityEngine.AudioClip","UnityEngine.UI.Button","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.UI.Mask","UnityEngine.AudioSource","UnityEngine.UI.RectMask2D","GameController","ClockItem","ClockDropTarget","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.GameObject","UnityEngine.CanvasGroup","Playable.AudioManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "PA_BEQ";

Deserializers.lunaInitializationTime = "08/04/2026 10:21:04";

Deserializers.lunaDaysRunning = "21.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BEQ_V34_NgocNDL_HuyNQ";

Deserializers.lunaAppID = "29138";

Deserializers.projectId = "2908ef2555f4afa4ab6241b85cbb2f84";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.timeline: 1.8.13\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1887";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5068";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.PA-BEQ";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "8cef1736-7a9d-4fe8-a697-032bfb164db7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

