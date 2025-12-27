var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointSpring' )
  var i467 = data
  i466.spring = i467[0]
  i466.damper = i467[1]
  i466.targetPosition = i467[2]
  return i466
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointMotor' )
  var i469 = data
  i468.m_TargetVelocity = i469[0]
  i468.m_Force = i469[1]
  i468.m_FreeSpin = i469[2]
  return i468
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointLimits' )
  var i471 = data
  i470.m_Min = i471[0]
  i470.m_Max = i471[1]
  i470.m_Bounciness = i471[2]
  i470.m_BounceMinVelocity = i471[3]
  i470.m_ContactDistance = i471[4]
  i470.minBounce = i471[5]
  i470.maxBounce = i471[6]
  return i470
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointDrive' )
  var i473 = data
  i472.m_PositionSpring = i473[0]
  i472.m_PositionDamper = i473[1]
  i472.m_MaximumForce = i473[2]
  i472.m_UseAcceleration = i473[3]
  return i472
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i475 = data
  i474.m_Spring = i475[0]
  i474.m_Damper = i475[1]
  return i474
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i477 = data
  i476.m_Limit = i477[0]
  i476.m_Bounciness = i477[1]
  i476.m_ContactDistance = i477[2]
  return i476
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i479 = data
  i478.m_ExtremumSlip = i479[0]
  i478.m_ExtremumValue = i479[1]
  i478.m_AsymptoteSlip = i479[2]
  i478.m_AsymptoteValue = i479[3]
  i478.m_Stiffness = i479[4]
  return i478
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i481 = data
  i480.m_LowerAngle = i481[0]
  i480.m_UpperAngle = i481[1]
  return i480
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i483 = data
  i482.m_MotorSpeed = i483[0]
  i482.m_MaximumMotorTorque = i483[1]
  return i482
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i485 = data
  i484.m_DampingRatio = i485[0]
  i484.m_Frequency = i485[1]
  i484.m_Angle = i485[2]
  return i484
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i487 = data
  i486.m_LowerTranslation = i487[0]
  i486.m_UpperTranslation = i487[1]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i489 = data
  i488.name = i489[0]
  i488.width = i489[1]
  i488.height = i489[2]
  i488.mipmapCount = i489[3]
  i488.anisoLevel = i489[4]
  i488.filterMode = i489[5]
  i488.hdr = !!i489[6]
  i488.format = i489[7]
  i488.wrapMode = i489[8]
  i488.alphaIsTransparency = !!i489[9]
  i488.alphaSource = i489[10]
  i488.graphicsFormat = i489[11]
  i488.sRGBTexture = !!i489[12]
  i488.desiredColorSpace = i489[13]
  i488.wrapU = i489[14]
  i488.wrapV = i489[15]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i490 = root || new pc.UnityMaterial()
  var i491 = data
  i490.name = i491[0]
  request.r(i491[1], i491[2], 0, i490, 'shader')
  i490.renderQueue = i491[3]
  i490.enableInstancing = !!i491[4]
  var i493 = i491[5]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i493[i + 0]) );
  }
  i490.floatParameters = i492
  var i495 = i491[6]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i495[i + 0]) );
  }
  i490.colorParameters = i494
  var i497 = i491[7]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i497[i + 0]) );
  }
  i490.vectorParameters = i496
  var i499 = i491[8]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i499[i + 0]) );
  }
  i490.textureParameters = i498
  var i501 = i491[9]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i501[i + 0]) );
  }
  i490.materialFlags = i500
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i505 = data
  i504.name = i505[0]
  i504.value = i505[1]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i509 = data
  i508.name = i509[0]
  i508.value = new pc.Color(i509[1], i509[2], i509[3], i509[4])
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i513 = data
  i512.name = i513[0]
  i512.value = new pc.Vec4( i513[1], i513[2], i513[3], i513[4] )
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i517 = data
  i516.name = i517[0]
  request.r(i517[1], i517[2], 0, i516, 'value')
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i521 = data
  i520.name = i521[0]
  i520.enabled = !!i521[1]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i523 = data
  i522.pivot = new pc.Vec2( i523[0], i523[1] )
  i522.anchorMin = new pc.Vec2( i523[2], i523[3] )
  i522.anchorMax = new pc.Vec2( i523[4], i523[5] )
  i522.sizeDelta = new pc.Vec2( i523[6], i523[7] )
  i522.anchoredPosition3D = new pc.Vec3( i523[8], i523[9], i523[10] )
  i522.rotation = new pc.Quat(i523[11], i523[12], i523[13], i523[14])
  i522.scale = new pc.Vec3( i523[15], i523[16], i523[17] )
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i525 = data
  i524.cullTransparentMesh = !!i525[0]
  return i524
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.UI.Image' )
  var i527 = data
  request.r(i527[0], i527[1], 0, i526, 'm_Sprite')
  i526.m_Type = i527[2]
  i526.m_PreserveAspect = !!i527[3]
  i526.m_FillCenter = !!i527[4]
  i526.m_FillMethod = i527[5]
  i526.m_FillAmount = i527[6]
  i526.m_FillClockwise = !!i527[7]
  i526.m_FillOrigin = i527[8]
  i526.m_UseSpriteMesh = !!i527[9]
  i526.m_PixelsPerUnitMultiplier = i527[10]
  i526.m_Maskable = !!i527[11]
  request.r(i527[12], i527[13], 0, i526, 'm_Material')
  i526.m_Color = new pc.Color(i527[14], i527[15], i527[16], i527[17])
  i526.m_RaycastTarget = !!i527[18]
  i526.m_RaycastPadding = new pc.Vec4( i527[19], i527[20], i527[21], i527[22] )
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i529 = data
  i528.name = i529[0]
  i528.tagId = i529[1]
  i528.enabled = !!i529[2]
  i528.isStatic = !!i529[3]
  i528.layer = i529[4]
  return i528
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i530 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i531 = data
  i530.m_hasFontAssetChanged = !!i531[0]
  request.r(i531[1], i531[2], 0, i530, 'm_baseMaterial')
  i530.m_maskOffset = new pc.Vec4( i531[3], i531[4], i531[5], i531[6] )
  i530.m_text = i531[7]
  i530.m_isRightToLeft = !!i531[8]
  request.r(i531[9], i531[10], 0, i530, 'm_fontAsset')
  request.r(i531[11], i531[12], 0, i530, 'm_sharedMaterial')
  var i533 = i531[13]
  var i532 = []
  for(var i = 0; i < i533.length; i += 2) {
  request.r(i533[i + 0], i533[i + 1], 2, i532, '')
  }
  i530.m_fontSharedMaterials = i532
  request.r(i531[14], i531[15], 0, i530, 'm_fontMaterial')
  var i535 = i531[16]
  var i534 = []
  for(var i = 0; i < i535.length; i += 2) {
  request.r(i535[i + 0], i535[i + 1], 2, i534, '')
  }
  i530.m_fontMaterials = i534
  i530.m_fontColor32 = UnityEngine.Color32.ConstructColor(i531[17], i531[18], i531[19], i531[20])
  i530.m_fontColor = new pc.Color(i531[21], i531[22], i531[23], i531[24])
  i530.m_enableVertexGradient = !!i531[25]
  i530.m_colorMode = i531[26]
  i530.m_fontColorGradient = request.d('TMPro.VertexGradient', i531[27], i530.m_fontColorGradient)
  request.r(i531[28], i531[29], 0, i530, 'm_fontColorGradientPreset')
  request.r(i531[30], i531[31], 0, i530, 'm_spriteAsset')
  i530.m_tintAllSprites = !!i531[32]
  request.r(i531[33], i531[34], 0, i530, 'm_StyleSheet')
  i530.m_TextStyleHashCode = i531[35]
  i530.m_overrideHtmlColors = !!i531[36]
  i530.m_faceColor = UnityEngine.Color32.ConstructColor(i531[37], i531[38], i531[39], i531[40])
  i530.m_fontSize = i531[41]
  i530.m_fontSizeBase = i531[42]
  i530.m_fontWeight = i531[43]
  i530.m_enableAutoSizing = !!i531[44]
  i530.m_fontSizeMin = i531[45]
  i530.m_fontSizeMax = i531[46]
  i530.m_fontStyle = i531[47]
  i530.m_HorizontalAlignment = i531[48]
  i530.m_VerticalAlignment = i531[49]
  i530.m_textAlignment = i531[50]
  i530.m_characterSpacing = i531[51]
  i530.m_wordSpacing = i531[52]
  i530.m_lineSpacing = i531[53]
  i530.m_lineSpacingMax = i531[54]
  i530.m_paragraphSpacing = i531[55]
  i530.m_charWidthMaxAdj = i531[56]
  i530.m_enableWordWrapping = !!i531[57]
  i530.m_wordWrappingRatios = i531[58]
  i530.m_overflowMode = i531[59]
  request.r(i531[60], i531[61], 0, i530, 'm_linkedTextComponent')
  request.r(i531[62], i531[63], 0, i530, 'parentLinkedComponent')
  i530.m_enableKerning = !!i531[64]
  i530.m_enableExtraPadding = !!i531[65]
  i530.checkPaddingRequired = !!i531[66]
  i530.m_isRichText = !!i531[67]
  i530.m_parseCtrlCharacters = !!i531[68]
  i530.m_isOrthographic = !!i531[69]
  i530.m_isCullingEnabled = !!i531[70]
  i530.m_horizontalMapping = i531[71]
  i530.m_verticalMapping = i531[72]
  i530.m_uvLineOffset = i531[73]
  i530.m_geometrySortingOrder = i531[74]
  i530.m_IsTextObjectScaleStatic = !!i531[75]
  i530.m_VertexBufferAutoSizeReduction = !!i531[76]
  i530.m_useMaxVisibleDescender = !!i531[77]
  i530.m_pageToDisplay = i531[78]
  i530.m_margin = new pc.Vec4( i531[79], i531[80], i531[81], i531[82] )
  i530.m_isUsingLegacyAnimationComponent = !!i531[83]
  i530.m_isVolumetricText = !!i531[84]
  i530.m_Maskable = !!i531[85]
  request.r(i531[86], i531[87], 0, i530, 'm_Material')
  i530.m_Color = new pc.Color(i531[88], i531[89], i531[90], i531[91])
  i530.m_RaycastTarget = !!i531[92]
  i530.m_RaycastPadding = new pc.Vec4( i531[93], i531[94], i531[95], i531[96] )
  return i530
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i538 = root || request.c( 'TMPro.VertexGradient' )
  var i539 = data
  i538.topLeft = new pc.Color(i539[0], i539[1], i539[2], i539[3])
  i538.topRight = new pc.Color(i539[4], i539[5], i539[6], i539[7])
  i538.bottomLeft = new pc.Color(i539[8], i539[9], i539[10], i539[11])
  i538.bottomRight = new pc.Color(i539[12], i539[13], i539[14], i539[15])
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i541 = data
  i540.name = i541[0]
  i540.index = i541[1]
  i540.startup = !!i541[2]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i543 = data
  i542.position = new pc.Vec3( i543[0], i543[1], i543[2] )
  i542.scale = new pc.Vec3( i543[3], i543[4], i543[5] )
  i542.rotation = new pc.Quat(i543[6], i543[7], i543[8], i543[9])
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i545 = data
  i544.aspect = i545[0]
  i544.orthographic = !!i545[1]
  i544.orthographicSize = i545[2]
  i544.backgroundColor = new pc.Color(i545[3], i545[4], i545[5], i545[6])
  i544.nearClipPlane = i545[7]
  i544.farClipPlane = i545[8]
  i544.fieldOfView = i545[9]
  i544.depth = i545[10]
  i544.clearFlags = i545[11]
  i544.cullingMask = i545[12]
  i544.rect = i545[13]
  request.r(i545[14], i545[15], 0, i544, 'targetTexture')
  i544.usePhysicalProperties = !!i545[16]
  i544.focalLength = i545[17]
  i544.sensorSize = new pc.Vec2( i545[18], i545[19] )
  i544.lensShift = new pc.Vec2( i545[20], i545[21] )
  i544.gateFit = i545[22]
  i544.commandBufferCount = i545[23]
  i544.cameraType = i545[24]
  i544.enabled = !!i545[25]
  return i544
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'm_FirstSelected')
  i546.m_sendNavigationEvents = !!i547[2]
  i546.m_DragThreshold = i547[3]
  return i546
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i549 = data
  i548.m_HorizontalAxis = i549[0]
  i548.m_VerticalAxis = i549[1]
  i548.m_SubmitButton = i549[2]
  i548.m_CancelButton = i549[3]
  i548.m_InputActionsPerSecond = i549[4]
  i548.m_RepeatDelay = i549[5]
  i548.m_ForceModuleActive = !!i549[6]
  i548.m_SendPointerHoverToParent = !!i549[7]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i551 = data
  i550.planeDistance = i551[0]
  i550.referencePixelsPerUnit = i551[1]
  i550.isFallbackOverlay = !!i551[2]
  i550.renderMode = i551[3]
  i550.renderOrder = i551[4]
  i550.sortingLayerName = i551[5]
  i550.sortingOrder = i551[6]
  i550.scaleFactor = i551[7]
  request.r(i551[8], i551[9], 0, i550, 'worldCamera')
  i550.overrideSorting = !!i551[10]
  i550.pixelPerfect = !!i551[11]
  i550.targetDisplay = i551[12]
  i550.overridePixelPerfect = !!i551[13]
  i550.enabled = !!i551[14]
  return i550
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i553 = data
  i552.m_UiScaleMode = i553[0]
  i552.m_ReferencePixelsPerUnit = i553[1]
  i552.m_ScaleFactor = i553[2]
  i552.m_ReferenceResolution = new pc.Vec2( i553[3], i553[4] )
  i552.m_ScreenMatchMode = i553[5]
  i552.m_MatchWidthOrHeight = i553[6]
  i552.m_PhysicalUnit = i553[7]
  i552.m_FallbackScreenDPI = i553[8]
  i552.m_DefaultSpriteDPI = i553[9]
  i552.m_DynamicPixelsPerUnit = i553[10]
  i552.m_PresetInfoIsWorld = !!i553[11]
  return i552
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i555 = data
  i554.m_IgnoreReversedGraphics = !!i555[0]
  i554.m_BlockingObjects = i555[1]
  i554.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i555[2] )
  return i554
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i557 = data
  request.r(i557[0], i557[1], 0, i556, 'm_Texture')
  i556.m_UVRect = UnityEngine.Rect.MinMaxRect(i557[2], i557[3], i557[4], i557[5])
  i556.m_Maskable = !!i557[6]
  request.r(i557[7], i557[8], 0, i556, 'm_Material')
  i556.m_Color = new pc.Color(i557[9], i557[10], i557[11], i557[12])
  i556.m_RaycastTarget = !!i557[13]
  i556.m_RaycastPadding = new pc.Vec4( i557[14], i557[15], i557[16], i557[17] )
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'clip')
  request.r(i559[2], i559[3], 0, i558, 'outputAudioMixerGroup')
  i558.playOnAwake = !!i559[4]
  i558.loop = !!i559[5]
  i558.time = i559[6]
  i558.volume = i559[7]
  i558.pitch = i559[8]
  i558.enabled = !!i559[9]
  return i558
}

Deserializers["DropZone"] = function (request, data, root) {
  var i560 = root || request.c( 'DropZone' )
  var i561 = data
  i560.idDrop = i561[0]
  var i563 = i561[1]
  var i562 = []
  for(var i = 0; i < i563.length; i += 2) {
  request.r(i563[i + 0], i563[i + 1], 2, i562, '')
  }
  i560.steps = i562
  request.r(i561[2], i561[3], 0, i560, 'stepLose')
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i567 = data
  i566.usedByComposite = !!i567[0]
  i566.autoTiling = !!i567[1]
  i566.size = new pc.Vec2( i567[2], i567[3] )
  i566.edgeRadius = i567[4]
  i566.enabled = !!i567[5]
  i566.isTrigger = !!i567[6]
  i566.usedByEffector = !!i567[7]
  i566.density = i567[8]
  i566.offset = new pc.Vec2( i567[9], i567[10] )
  request.r(i567[11], i567[12], 0, i566, 'material')
  return i566
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i568 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'skeletonDataAsset')
  request.r(i569[2], i569[3], 0, i568, 'additiveMaterial')
  request.r(i569[4], i569[5], 0, i568, 'multiplyMaterial')
  request.r(i569[6], i569[7], 0, i568, 'screenMaterial')
  i568.initialSkinName = i569[8]
  i568.initialFlipX = !!i569[9]
  i568.initialFlipY = !!i569[10]
  i568.startingAnimation = i569[11]
  i568.startingLoop = !!i569[12]
  i568.timeScale = i569[13]
  i568.freeze = !!i569[14]
  i568.layoutScaleMode = i569[15]
  i568.updateWhenInvisible = i569[16]
  i568.allowMultipleCanvasRenderers = !!i569[17]
  var i571 = i569[18]
  var i570 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i571.length; i += 2) {
  request.r(i571[i + 0], i571[i + 1], 1, i570, '')
  }
  i568.canvasRenderers = i570
  i568.enableSeparatorSlots = !!i569[19]
  i568.updateSeparatorPartLocation = !!i569[20]
  i568.updateSeparatorPartScale = !!i569[21]
  i568.disableMeshAssignmentOnOverride = !!i569[22]
  i568.m_SkeletonColor = new pc.Color(i569[23], i569[24], i569[25], i569[26])
  i568.referenceSize = new pc.Vec2( i569[27], i569[28] )
  i568.pivotOffset = new pc.Vec2( i569[29], i569[30] )
  i568.referenceScale = i569[31]
  i568.layoutScale = i569[32]
  i568.rectTransformSize = new pc.Vec2( i569[33], i569[34] )
  i568.editReferenceRect = !!i569[35]
  var i573 = i569[36]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( i573[i + 0] );
  }
  i568.separatorSlotNames = i572
  var i575 = i569[37]
  var i574 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i575.length; i += 2) {
  request.r(i575[i + 0], i575[i + 1], 1, i574, '')
  }
  i568.separatorParts = i574
  i568.physicsPositionInheritanceFactor = new pc.Vec2( i569[38], i569[39] )
  i568.physicsRotationInheritanceFactor = i569[40]
  request.r(i569[41], i569[42], 0, i568, 'physicsMovementRelativeTo')
  i568.meshGenerator = request.d('Spine.Unity.MeshGenerator', i569[43], i568.meshGenerator)
  i568.updateTiming = i569[44]
  i568.unscaledTime = !!i569[45]
  i568.m_Maskable = !!i569[46]
  request.r(i569[47], i569[48], 0, i568, 'm_Material')
  i568.m_Color = new pc.Color(i569[49], i569[50], i569[51], i569[52])
  i568.m_RaycastTarget = !!i569[53]
  i568.m_RaycastPadding = new pc.Vec4( i569[54], i569[55], i569[56], i569[57] )
  return i568
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i582 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i583 = data
  i582.settings = request.d('Spine.Unity.MeshGenerator+Settings', i583[0], i582.settings)
  return i582
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i584 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i585 = data
  i584.useClipping = !!i585[0]
  i584.zSpacing = i585[1]
  i584.tintBlack = !!i585[2]
  i584.canvasGroupCompatible = !!i585[3]
  i584.pmaVertexColors = !!i585[4]
  i584.addNormals = !!i585[5]
  i584.calculateTangents = !!i585[6]
  i584.immutableTriangles = !!i585[7]
  return i584
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i586 = root || request.c( 'ClickItem' )
  var i587 = data
  var i589 = i587[0]
  var i588 = []
  for(var i = 0; i < i589.length; i += 2) {
  request.r(i589[i + 0], i589[i + 1], 2, i588, '')
  }
  i586.steps = i588
  i586.currentStep = i587[1]
  i586.isProcess = !!i587[2]
  return i586
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.UI.Button' )
  var i591 = data
  i590.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i591[0], i590.m_OnClick)
  i590.m_Navigation = request.d('UnityEngine.UI.Navigation', i591[1], i590.m_Navigation)
  i590.m_Transition = i591[2]
  i590.m_Colors = request.d('UnityEngine.UI.ColorBlock', i591[3], i590.m_Colors)
  i590.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i591[4], i590.m_SpriteState)
  i590.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i591[5], i590.m_AnimationTriggers)
  i590.m_Interactable = !!i591[6]
  request.r(i591[7], i591[8], 0, i590, 'm_TargetGraphic')
  return i590
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i593 = data
  i592.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i593[0], i592.m_PersistentCalls)
  return i592
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i595 = data
  var i597 = i595[0]
  var i596 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i597.length; i += 1) {
    i596.add(request.d('UnityEngine.Events.PersistentCall', i597[i + 0]));
  }
  i594.m_Calls = i596
  return i594
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'm_Target')
  i600.m_TargetAssemblyTypeName = i601[2]
  i600.m_MethodName = i601[3]
  i600.m_Mode = i601[4]
  i600.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i601[5], i600.m_Arguments)
  i600.m_CallState = i601[6]
  return i600
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i603 = data
  i602.m_Mode = i603[0]
  i602.m_WrapAround = !!i603[1]
  request.r(i603[2], i603[3], 0, i602, 'm_SelectOnUp')
  request.r(i603[4], i603[5], 0, i602, 'm_SelectOnDown')
  request.r(i603[6], i603[7], 0, i602, 'm_SelectOnLeft')
  request.r(i603[8], i603[9], 0, i602, 'm_SelectOnRight')
  return i602
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i605 = data
  i604.m_NormalColor = new pc.Color(i605[0], i605[1], i605[2], i605[3])
  i604.m_HighlightedColor = new pc.Color(i605[4], i605[5], i605[6], i605[7])
  i604.m_PressedColor = new pc.Color(i605[8], i605[9], i605[10], i605[11])
  i604.m_SelectedColor = new pc.Color(i605[12], i605[13], i605[14], i605[15])
  i604.m_DisabledColor = new pc.Color(i605[16], i605[17], i605[18], i605[19])
  i604.m_ColorMultiplier = i605[20]
  i604.m_FadeDuration = i605[21]
  return i604
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'm_HighlightedSprite')
  request.r(i607[2], i607[3], 0, i606, 'm_PressedSprite')
  request.r(i607[4], i607[5], 0, i606, 'm_SelectedSprite')
  request.r(i607[6], i607[7], 0, i606, 'm_DisabledSprite')
  return i606
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i609 = data
  i608.m_NormalTrigger = i609[0]
  i608.m_HighlightedTrigger = i609[1]
  i608.m_PressedTrigger = i609[2]
  i608.m_SelectedTrigger = i609[3]
  i608.m_DisabledTrigger = i609[4]
  return i608
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i610 = root || request.c( 'DraggableItem' )
  var i611 = data
  i610.idDrag = i611[0]
  i610.isProcess = !!i611[1]
  i610.isLose = !!i611[2]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i613 = data
  i612.m_Alpha = i613[0]
  i612.m_Interactable = !!i613[1]
  i612.m_BlocksRaycasts = !!i613[2]
  i612.m_IgnoreParentGroups = !!i613[3]
  i612.enabled = !!i613[4]
  return i612
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i614 = root || request.c( 'LunaManager' )
  var i615 = data
  var i617 = i615[0]
  var i616 = []
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 2, i616, '')
  }
  i614.lstBtnInstall = i616
  request.r(i615[1], i615[2], 0, i614, 'StartCard')
  request.r(i615[3], i615[4], 0, i614, 'EndCard')
  request.r(i615[5], i615[6], 0, i614, 'Parent')
  request.r(i615[7], i615[8], 0, i614, 'LoseTitle')
  var i619 = i615[9]
  var i618 = []
  for(var i = 0; i < i619.length; i += 2) {
  request.r(i619[i + 0], i619[i + 1], 2, i618, '')
  }
  i614.tutorial = i618
  i614.timeDrag = i615[10]
  i614.isDrag = !!i615[11]
  i614.countPlay = i615[12]
  i614.countPlayFinal = i615[13]
  i614.countPlayMax = i615[14]
  i614.timeDropFinal = i615[15]
  i614.colorBG = new pc.Color(i615[16], i615[17], i615[18], i615[19])
  request.r(i615[20], i615[21], 0, i614, 'texture2D')
  request.r(i615[22], i615[23], 0, i614, 'rawImageBG')
  request.r(i615[24], i615[25], 0, i614, 'textProgess')
  request.r(i615[26], i615[27], 0, i614, 'imgProgess')
  request.r(i615[28], i615[29], 0, i614, 'timeText')
  return i614
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i622 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i623 = data
  i622.targetIsSelf = !!i623[0]
  request.r(i623[1], i623[2], 0, i622, 'targetGO')
  i622.tweenTargetIsTargetGO = !!i623[3]
  i622.delay = i623[4]
  i622.duration = i623[5]
  i622.easeType = i623[6]
  i622.easeCurve = new pc.AnimationCurve( { keys_flow: i623[7] } )
  i622.loopType = i623[8]
  i622.loops = i623[9]
  i622.id = i623[10]
  i622.isRelative = !!i623[11]
  i622.isFrom = !!i623[12]
  i622.isIndependentUpdate = !!i623[13]
  i622.autoKill = !!i623[14]
  i622.autoGenerate = !!i623[15]
  i622.isActive = !!i623[16]
  i622.isValid = !!i623[17]
  request.r(i623[18], i623[19], 0, i622, 'target')
  i622.animationType = i623[20]
  i622.targetType = i623[21]
  i622.forcedTargetType = i623[22]
  i622.autoPlay = !!i623[23]
  i622.useTargetAsV3 = !!i623[24]
  i622.endValueFloat = i623[25]
  i622.endValueV3 = new pc.Vec3( i623[26], i623[27], i623[28] )
  i622.endValueV2 = new pc.Vec2( i623[29], i623[30] )
  i622.endValueColor = new pc.Color(i623[31], i623[32], i623[33], i623[34])
  i622.endValueString = i623[35]
  i622.endValueRect = UnityEngine.Rect.MinMaxRect(i623[36], i623[37], i623[38], i623[39])
  request.r(i623[40], i623[41], 0, i622, 'endValueTransform')
  i622.optionalBool0 = !!i623[42]
  i622.optionalBool1 = !!i623[43]
  i622.optionalFloat0 = i623[44]
  i622.optionalInt0 = i623[45]
  i622.optionalRotationMode = i623[46]
  i622.optionalScrambleMode = i623[47]
  i622.optionalShakeRandomnessMode = i623[48]
  i622.optionalString = i623[49]
  i622.updateType = i623[50]
  i622.isSpeedBased = !!i623[51]
  i622.hasOnStart = !!i623[52]
  i622.hasOnPlay = !!i623[53]
  i622.hasOnUpdate = !!i623[54]
  i622.hasOnStepComplete = !!i623[55]
  i622.hasOnComplete = !!i623[56]
  i622.hasOnTweenCreated = !!i623[57]
  i622.hasOnRewind = !!i623[58]
  i622.onStart = request.d('UnityEngine.Events.UnityEvent', i623[59], i622.onStart)
  i622.onPlay = request.d('UnityEngine.Events.UnityEvent', i623[60], i622.onPlay)
  i622.onUpdate = request.d('UnityEngine.Events.UnityEvent', i623[61], i622.onUpdate)
  i622.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i623[62], i622.onStepComplete)
  i622.onComplete = request.d('UnityEngine.Events.UnityEvent', i623[63], i622.onComplete)
  i622.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i623[64], i622.onTweenCreated)
  i622.onRewind = request.d('UnityEngine.Events.UnityEvent', i623[65], i622.onRewind)
  return i622
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i625 = data
  i624.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i625[0], i624.m_PersistentCalls)
  return i624
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.Mask' )
  var i627 = data
  i626.m_ShowMaskGraphic = !!i627[0]
  return i626
}

Deserializers["AudioController"] = function (request, data, root) {
  var i628 = root || request.c( 'AudioController' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'bgmSource')
  request.r(i629[2], i629[3], 0, i628, 'sfxSource')
  var i631 = i629[4]
  var i630 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i631.length; i += 1) {
    i630.add(request.d('AudioEntry', i631[i + 0]));
  }
  i628.audioEntries = i630
  return i628
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i634 = root || request.c( 'AudioEntry' )
  var i635 = data
  i634.key = i635[0]
  request.r(i635[1], i635[2], 0, i634, 'clip')
  i634.volume = i635[3]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i637 = data
  i636.ambientIntensity = i637[0]
  i636.reflectionIntensity = i637[1]
  i636.ambientMode = i637[2]
  i636.ambientLight = new pc.Color(i637[3], i637[4], i637[5], i637[6])
  i636.ambientSkyColor = new pc.Color(i637[7], i637[8], i637[9], i637[10])
  i636.ambientGroundColor = new pc.Color(i637[11], i637[12], i637[13], i637[14])
  i636.ambientEquatorColor = new pc.Color(i637[15], i637[16], i637[17], i637[18])
  i636.fogColor = new pc.Color(i637[19], i637[20], i637[21], i637[22])
  i636.fogEndDistance = i637[23]
  i636.fogStartDistance = i637[24]
  i636.fogDensity = i637[25]
  i636.fog = !!i637[26]
  request.r(i637[27], i637[28], 0, i636, 'skybox')
  i636.fogMode = i637[29]
  var i639 = i637[30]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i639[i + 0]) );
  }
  i636.lightmaps = i638
  i636.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i637[31], i636.lightProbes)
  i636.lightmapsMode = i637[32]
  i636.mixedBakeMode = i637[33]
  i636.environmentLightingMode = i637[34]
  i636.ambientProbe = new pc.SphericalHarmonicsL2(i637[35])
  i636.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i637[36])
  i636.useReferenceAmbientProbe = !!i637[37]
  request.r(i637[38], i637[39], 0, i636, 'customReflection')
  request.r(i637[40], i637[41], 0, i636, 'defaultReflection')
  i636.defaultReflectionMode = i637[42]
  i636.defaultReflectionResolution = i637[43]
  i636.sunLightObjectId = i637[44]
  i636.pixelLightCount = i637[45]
  i636.defaultReflectionHDR = !!i637[46]
  i636.hasLightDataAsset = !!i637[47]
  i636.hasManualGenerate = !!i637[48]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'lightmapColor')
  request.r(i643[2], i643[3], 0, i642, 'lightmapDirection')
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i644 = root || new UnityEngine.LightProbes()
  var i645 = data
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i653 = data
  var i655 = i653[0]
  var i654 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i655.length; i += 1) {
    i654.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i655[i + 0]));
  }
  i652.ShaderCompilationErrors = i654
  i652.name = i653[1]
  i652.guid = i653[2]
  var i657 = i653[3]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( i657[i + 0] );
  }
  i652.shaderDefinedKeywords = i656
  var i659 = i653[4]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i659[i + 0]) );
  }
  i652.passes = i658
  var i661 = i653[5]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i661[i + 0]) );
  }
  i652.usePasses = i660
  var i663 = i653[6]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i663[i + 0]) );
  }
  i652.defaultParameterValues = i662
  request.r(i653[7], i653[8], 0, i652, 'unityFallbackShader')
  i652.readDepth = !!i653[9]
  i652.isCreatedByShaderGraph = !!i653[10]
  i652.disableBatching = !!i653[11]
  i652.compiled = !!i653[12]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i667 = data
  i666.shaderName = i667[0]
  i666.errorMessage = i667[1]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i670 = root || new pc.UnityShaderPass()
  var i671 = data
  i670.id = i671[0]
  i670.subShaderIndex = i671[1]
  i670.name = i671[2]
  i670.passType = i671[3]
  i670.grabPassTextureName = i671[4]
  i670.usePass = !!i671[5]
  i670.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[6], i670.zTest)
  i670.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[7], i670.zWrite)
  i670.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[8], i670.culling)
  i670.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i671[9], i670.blending)
  i670.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i671[10], i670.alphaBlending)
  i670.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[11], i670.colorWriteMask)
  i670.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[12], i670.offsetUnits)
  i670.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[13], i670.offsetFactor)
  i670.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[14], i670.stencilRef)
  i670.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[15], i670.stencilReadMask)
  i670.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[16], i670.stencilWriteMask)
  i670.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i671[17], i670.stencilOp)
  i670.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i671[18], i670.stencilOpFront)
  i670.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i671[19], i670.stencilOpBack)
  var i673 = i671[20]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i673[i + 0]) );
  }
  i670.tags = i672
  var i675 = i671[21]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( i675[i + 0] );
  }
  i670.passDefinedKeywords = i674
  var i677 = i671[22]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i677[i + 0]) );
  }
  i670.passDefinedKeywordGroups = i676
  var i679 = i671[23]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i679[i + 0]) );
  }
  i670.variants = i678
  var i681 = i671[24]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i681[i + 0]) );
  }
  i670.excludedVariants = i680
  i670.hasDepthReader = !!i671[25]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i683 = data
  i682.val = i683[0]
  i682.name = i683[1]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i685 = data
  i684.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[0], i684.src)
  i684.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[1], i684.dst)
  i684.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[2], i684.op)
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i687 = data
  i686.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[0], i686.pass)
  i686.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[1], i686.fail)
  i686.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[2], i686.zFail)
  i686.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[3], i686.comp)
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i691 = data
  i690.name = i691[0]
  i690.value = i691[1]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i695 = data
  var i697 = i695[0]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( i697[i + 0] );
  }
  i694.keywords = i696
  i694.hasDiscard = !!i695[1]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i701 = data
  i700.passId = i701[0]
  i700.subShaderIndex = i701[1]
  var i703 = i701[2]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( i703[i + 0] );
  }
  i700.keywords = i702
  i700.vertexProgram = i701[3]
  i700.fragmentProgram = i701[4]
  i700.exportedForWebGl2 = !!i701[5]
  i700.readDepth = !!i701[6]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'shader')
  i706.pass = i707[2]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i711 = data
  i710.name = i711[0]
  i710.type = i711[1]
  i710.value = new pc.Vec4( i711[2], i711[3], i711[4], i711[5] )
  i710.textureValue = i711[6]
  i710.shaderPropertyFlag = i711[7]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i713 = data
  i712.name = i713[0]
  request.r(i713[1], i713[2], 0, i712, 'texture')
  i712.aabb = i713[3]
  i712.vertices = i713[4]
  i712.triangles = i713[5]
  i712.textureRect = UnityEngine.Rect.MinMaxRect(i713[6], i713[7], i713[8], i713[9])
  i712.packedRect = UnityEngine.Rect.MinMaxRect(i713[10], i713[11], i713[12], i713[13])
  i712.border = new pc.Vec4( i713[14], i713[15], i713[16], i713[17] )
  i712.transparency = i713[18]
  i712.bounds = i713[19]
  i712.pixelsPerUnit = i713[20]
  i712.textureWidth = i713[21]
  i712.textureHeight = i713[22]
  i712.nativeSize = new pc.Vec2( i713[23], i713[24] )
  i712.pivot = new pc.Vec2( i713[25], i713[26] )
  i712.textureRectOffset = new pc.Vec2( i713[27], i713[28] )
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i715 = data
  i714.name = i715[0]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i717 = data
  i716.name = i717[0]
  i716.ascent = i717[1]
  i716.originalLineHeight = i717[2]
  i716.fontSize = i717[3]
  var i719 = i717[4]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i719[i + 0]) );
  }
  i716.characterInfo = i718
  request.r(i717[5], i717[6], 0, i716, 'texture')
  i716.originalFontSize = i717[7]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i723 = data
  i722.index = i723[0]
  i722.advance = i723[1]
  i722.bearing = i723[2]
  i722.glyphWidth = i723[3]
  i722.glyphHeight = i723[4]
  i722.minX = i723[5]
  i722.maxX = i723[6]
  i722.minY = i723[7]
  i722.maxY = i723[8]
  i722.uvBottomLeftX = i723[9]
  i722.uvBottomLeftY = i723[10]
  i722.uvBottomRightX = i723[11]
  i722.uvBottomRightY = i723[12]
  i722.uvTopLeftX = i723[13]
  i722.uvTopLeftY = i723[14]
  i722.uvTopRightX = i723[15]
  i722.uvTopRightY = i723[16]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i725 = data
  i724.name = i725[0]
  i724.bytes64 = i725[1]
  i724.data = i725[2]
  return i724
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i726 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i727 = data
  var i729 = i727[0]
  var i728 = []
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 2, i728, '')
  }
  i726.atlasAssets = i728
  i726.scale = i727[1]
  request.r(i727[2], i727[3], 0, i726, 'skeletonJSON')
  i726.isUpgradingBlendModeMaterials = !!i727[4]
  i726.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i727[5], i726.blendModeMaterials)
  var i731 = i727[6]
  var i730 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 1, i730, '')
  }
  i726.skeletonDataModifiers = i730
  var i733 = i727[7]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( i733[i + 0] );
  }
  i726.fromAnimation = i732
  var i735 = i727[8]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( i735[i + 0] );
  }
  i726.toAnimation = i734
  i726.duration = i727[9]
  i726.defaultMix = i727[10]
  request.r(i727[11], i727[12], 0, i726, 'controller')
  return i726
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i738 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i739 = data
  i738.applyAdditiveMaterial = !!i739[0]
  var i741 = i739[1]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i741.length; i += 1) {
    i740.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i741[i + 0]));
  }
  i738.additiveMaterials = i740
  var i743 = i739[2]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i743.length; i += 1) {
    i742.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i743[i + 0]));
  }
  i738.multiplyMaterials = i742
  var i745 = i739[3]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i745.length; i += 1) {
    i744.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i745[i + 0]));
  }
  i738.screenMaterials = i744
  i738.requiresBlendModeMaterials = !!i739[4]
  return i738
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i748 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i749 = data
  i748.pageName = i749[0]
  request.r(i749[1], i749[2], 0, i748, 'material')
  return i748
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i752 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'atlasFile')
  var i755 = i753[2]
  var i754 = []
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 2, i754, '')
  }
  i752.materials = i754
  i752.textureLoadingMode = i753[3]
  request.r(i753[4], i753[5], 0, i752, 'onDemandTextureLoader')
  return i752
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i756 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'atlas')
  i756.normalStyle = i757[2]
  i756.normalSpacingOffset = i757[3]
  i756.boldStyle = i757[4]
  i756.boldSpacing = i757[5]
  i756.italicStyle = i757[6]
  i756.tabSize = i757[7]
  i756.hashCode = i757[8]
  request.r(i757[9], i757[10], 0, i756, 'material')
  i756.materialHashCode = i757[11]
  i756.m_Version = i757[12]
  i756.m_SourceFontFileGUID = i757[13]
  request.r(i757[14], i757[15], 0, i756, 'm_SourceFontFile_EditorRef')
  request.r(i757[16], i757[17], 0, i756, 'm_SourceFontFile')
  i756.m_AtlasPopulationMode = i757[18]
  i756.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i757[19], i756.m_FaceInfo)
  var i759 = i757[20]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i759.length; i += 1) {
    i758.add(request.d('UnityEngine.TextCore.Glyph', i759[i + 0]));
  }
  i756.m_GlyphTable = i758
  var i761 = i757[21]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i761.length; i += 1) {
    i760.add(request.d('TMPro.TMP_Character', i761[i + 0]));
  }
  i756.m_CharacterTable = i760
  var i763 = i757[22]
  var i762 = []
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 2, i762, '')
  }
  i756.m_AtlasTextures = i762
  i756.m_AtlasTextureIndex = i757[23]
  i756.m_IsMultiAtlasTexturesEnabled = !!i757[24]
  i756.m_ClearDynamicDataOnBuild = !!i757[25]
  var i765 = i757[26]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(request.d('UnityEngine.TextCore.GlyphRect', i765[i + 0]));
  }
  i756.m_UsedGlyphRects = i764
  var i767 = i757[27]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i767.length; i += 1) {
    i766.add(request.d('UnityEngine.TextCore.GlyphRect', i767[i + 0]));
  }
  i756.m_FreeGlyphRects = i766
  i756.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i757[28], i756.m_fontInfo)
  i756.m_AtlasWidth = i757[29]
  i756.m_AtlasHeight = i757[30]
  i756.m_AtlasPadding = i757[31]
  i756.m_AtlasRenderMode = i757[32]
  var i769 = i757[33]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(request.d('TMPro.TMP_Glyph', i769[i + 0]));
  }
  i756.m_glyphInfoList = i768
  i756.m_KerningTable = request.d('TMPro.KerningTable', i757[34], i756.m_KerningTable)
  i756.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i757[35], i756.m_FontFeatureTable)
  var i771 = i757[36]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 1, i770, '')
  }
  i756.fallbackFontAssets = i770
  var i773 = i757[37]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 1, i772, '')
  }
  i756.m_FallbackFontAssetTable = i772
  i756.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i757[38], i756.m_CreationSettings)
  var i775 = i757[39]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('TMPro.TMP_FontWeightPair', i775[i + 0]) );
  }
  i756.m_FontWeightTable = i774
  var i777 = i757[40]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('TMPro.TMP_FontWeightPair', i777[i + 0]) );
  }
  i756.fontWeights = i776
  return i756
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i779 = data
  i778.m_FaceIndex = i779[0]
  i778.m_FamilyName = i779[1]
  i778.m_StyleName = i779[2]
  i778.m_PointSize = i779[3]
  i778.m_Scale = i779[4]
  i778.m_UnitsPerEM = i779[5]
  i778.m_LineHeight = i779[6]
  i778.m_AscentLine = i779[7]
  i778.m_CapLine = i779[8]
  i778.m_MeanLine = i779[9]
  i778.m_Baseline = i779[10]
  i778.m_DescentLine = i779[11]
  i778.m_SuperscriptOffset = i779[12]
  i778.m_SuperscriptSize = i779[13]
  i778.m_SubscriptOffset = i779[14]
  i778.m_SubscriptSize = i779[15]
  i778.m_UnderlineOffset = i779[16]
  i778.m_UnderlineThickness = i779[17]
  i778.m_StrikethroughOffset = i779[18]
  i778.m_StrikethroughThickness = i779[19]
  i778.m_TabWidth = i779[20]
  return i778
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i783 = data
  i782.m_Index = i783[0]
  i782.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i783[1], i782.m_Metrics)
  i782.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i783[2], i782.m_GlyphRect)
  i782.m_Scale = i783[3]
  i782.m_AtlasIndex = i783[4]
  i782.m_ClassDefinitionType = i783[5]
  return i782
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i785 = data
  i784.m_Width = i785[0]
  i784.m_Height = i785[1]
  i784.m_HorizontalBearingX = i785[2]
  i784.m_HorizontalBearingY = i785[3]
  i784.m_HorizontalAdvance = i785[4]
  return i784
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i787 = data
  i786.m_X = i787[0]
  i786.m_Y = i787[1]
  i786.m_Width = i787[2]
  i786.m_Height = i787[3]
  return i786
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i790 = root || request.c( 'TMPro.TMP_Character' )
  var i791 = data
  i790.m_ElementType = i791[0]
  i790.m_Unicode = i791[1]
  i790.m_GlyphIndex = i791[2]
  i790.m_Scale = i791[3]
  return i790
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i796 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i797 = data
  i796.Name = i797[0]
  i796.PointSize = i797[1]
  i796.Scale = i797[2]
  i796.CharacterCount = i797[3]
  i796.LineHeight = i797[4]
  i796.Baseline = i797[5]
  i796.Ascender = i797[6]
  i796.CapHeight = i797[7]
  i796.Descender = i797[8]
  i796.CenterLine = i797[9]
  i796.SuperscriptOffset = i797[10]
  i796.SubscriptOffset = i797[11]
  i796.SubSize = i797[12]
  i796.Underline = i797[13]
  i796.UnderlineThickness = i797[14]
  i796.strikethrough = i797[15]
  i796.strikethroughThickness = i797[16]
  i796.TabWidth = i797[17]
  i796.Padding = i797[18]
  i796.AtlasWidth = i797[19]
  i796.AtlasHeight = i797[20]
  return i796
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i800 = root || request.c( 'TMPro.TMP_Glyph' )
  var i801 = data
  i800.id = i801[0]
  i800.x = i801[1]
  i800.y = i801[2]
  i800.width = i801[3]
  i800.height = i801[4]
  i800.xOffset = i801[5]
  i800.yOffset = i801[6]
  i800.xAdvance = i801[7]
  i800.scale = i801[8]
  return i800
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i802 = root || request.c( 'TMPro.KerningTable' )
  var i803 = data
  var i805 = i803[0]
  var i804 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i805.length; i += 1) {
    i804.add(request.d('TMPro.KerningPair', i805[i + 0]));
  }
  i802.kerningPairs = i804
  return i802
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i808 = root || request.c( 'TMPro.KerningPair' )
  var i809 = data
  i808.xOffset = i809[0]
  i808.m_FirstGlyph = i809[1]
  i808.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i809[2], i808.m_FirstGlyphAdjustments)
  i808.m_SecondGlyph = i809[3]
  i808.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i809[4], i808.m_SecondGlyphAdjustments)
  i808.m_IgnoreSpacingAdjustments = !!i809[5]
  return i808
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i810 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i811 = data
  var i813 = i811[0]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i813.length; i += 1) {
    i812.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i813[i + 0]));
  }
  i810.m_GlyphPairAdjustmentRecords = i812
  return i810
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i816 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i817 = data
  i816.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i817[0], i816.m_FirstAdjustmentRecord)
  i816.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i817[1], i816.m_SecondAdjustmentRecord)
  i816.m_FeatureLookupFlags = i817[2]
  return i816
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i820 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i821 = data
  i820.sourceFontFileName = i821[0]
  i820.sourceFontFileGUID = i821[1]
  i820.pointSizeSamplingMode = i821[2]
  i820.pointSize = i821[3]
  i820.padding = i821[4]
  i820.packingMode = i821[5]
  i820.atlasWidth = i821[6]
  i820.atlasHeight = i821[7]
  i820.characterSetSelectionMode = i821[8]
  i820.characterSequence = i821[9]
  i820.referencedFontAssetGUID = i821[10]
  i820.referencedTextAssetGUID = i821[11]
  i820.fontStyle = i821[12]
  i820.fontStyleModifier = i821[13]
  i820.renderMode = i821[14]
  i820.includeFontFeatures = !!i821[15]
  return i820
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'regularTypeface')
  request.r(i825[2], i825[3], 0, i824, 'italicTypeface')
  return i824
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i826 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i827 = data
  i826.useSafeMode = !!i827[0]
  i826.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i827[1], i826.safeModeOptions)
  i826.timeScale = i827[2]
  i826.unscaledTimeScale = i827[3]
  i826.useSmoothDeltaTime = !!i827[4]
  i826.maxSmoothUnscaledTime = i827[5]
  i826.rewindCallbackMode = i827[6]
  i826.showUnityEditorReport = !!i827[7]
  i826.logBehaviour = i827[8]
  i826.drawGizmos = !!i827[9]
  i826.defaultRecyclable = !!i827[10]
  i826.defaultAutoPlay = i827[11]
  i826.defaultUpdateType = i827[12]
  i826.defaultTimeScaleIndependent = !!i827[13]
  i826.defaultEaseType = i827[14]
  i826.defaultEaseOvershootOrAmplitude = i827[15]
  i826.defaultEasePeriod = i827[16]
  i826.defaultAutoKill = !!i827[17]
  i826.defaultLoopType = i827[18]
  i826.debugMode = !!i827[19]
  i826.debugStoreTargetId = !!i827[20]
  i826.showPreviewPanel = !!i827[21]
  i826.storeSettingsLocation = i827[22]
  i826.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i827[23], i826.modules)
  i826.createASMDEF = !!i827[24]
  i826.showPlayingTweens = !!i827[25]
  i826.showPausedTweens = !!i827[26]
  return i826
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i828 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i829 = data
  i828.logBehaviour = i829[0]
  i828.nestedTweenFailureBehaviour = i829[1]
  return i828
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i830 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i831 = data
  i830.showPanel = !!i831[0]
  i830.audioEnabled = !!i831[1]
  i830.physicsEnabled = !!i831[2]
  i830.physics2DEnabled = !!i831[3]
  i830.spriteEnabled = !!i831[4]
  i830.uiEnabled = !!i831[5]
  i830.textMeshProEnabled = !!i831[6]
  i830.tk2DEnabled = !!i831[7]
  i830.deAudioEnabled = !!i831[8]
  i830.deUnityExtendedEnabled = !!i831[9]
  i830.epoOutlineEnabled = !!i831[10]
  return i830
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.TMP_Settings' )
  var i833 = data
  i832.m_enableWordWrapping = !!i833[0]
  i832.m_enableKerning = !!i833[1]
  i832.m_enableExtraPadding = !!i833[2]
  i832.m_enableTintAllSprites = !!i833[3]
  i832.m_enableParseEscapeCharacters = !!i833[4]
  i832.m_EnableRaycastTarget = !!i833[5]
  i832.m_GetFontFeaturesAtRuntime = !!i833[6]
  i832.m_missingGlyphCharacter = i833[7]
  i832.m_warningsDisabled = !!i833[8]
  request.r(i833[9], i833[10], 0, i832, 'm_defaultFontAsset')
  i832.m_defaultFontAssetPath = i833[11]
  i832.m_defaultFontSize = i833[12]
  i832.m_defaultAutoSizeMinRatio = i833[13]
  i832.m_defaultAutoSizeMaxRatio = i833[14]
  i832.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i833[15], i833[16] )
  i832.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i833[17], i833[18] )
  i832.m_autoSizeTextContainer = !!i833[19]
  i832.m_IsTextObjectScaleStatic = !!i833[20]
  var i835 = i833[21]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 1, i834, '')
  }
  i832.m_fallbackFontAssets = i834
  i832.m_matchMaterialPreset = !!i833[22]
  request.r(i833[23], i833[24], 0, i832, 'm_defaultSpriteAsset')
  i832.m_defaultSpriteAssetPath = i833[25]
  i832.m_enableEmojiSupport = !!i833[26]
  i832.m_MissingCharacterSpriteUnicode = i833[27]
  i832.m_defaultColorGradientPresetsPath = i833[28]
  request.r(i833[29], i833[30], 0, i832, 'm_defaultStyleSheet')
  i832.m_StyleSheetsResourcePath = i833[31]
  request.r(i833[32], i833[33], 0, i832, 'm_leadingCharacters')
  request.r(i833[34], i833[35], 0, i832, 'm_followingCharacters')
  i832.m_UseModernHangulLineBreakingRules = !!i833[36]
  return i832
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'spriteSheet')
  var i839 = i837[2]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i839.length; i += 1) {
    i838.add(request.d('TMPro.TMP_Sprite', i839[i + 0]));
  }
  i836.spriteInfoList = i838
  var i841 = i837[3]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 1, i840, '')
  }
  i836.fallbackSpriteAssets = i840
  i836.hashCode = i837[4]
  request.r(i837[5], i837[6], 0, i836, 'material')
  i836.materialHashCode = i837[7]
  i836.m_Version = i837[8]
  i836.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i837[9], i836.m_FaceInfo)
  var i843 = i837[10]
  var i842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i843.length; i += 1) {
    i842.add(request.d('TMPro.TMP_SpriteCharacter', i843[i + 0]));
  }
  i836.m_SpriteCharacterTable = i842
  var i845 = i837[11]
  var i844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i845.length; i += 1) {
    i844.add(request.d('TMPro.TMP_SpriteGlyph', i845[i + 0]));
  }
  i836.m_SpriteGlyphTable = i844
  return i836
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i848 = root || request.c( 'TMPro.TMP_Sprite' )
  var i849 = data
  i848.name = i849[0]
  i848.hashCode = i849[1]
  i848.unicode = i849[2]
  i848.pivot = new pc.Vec2( i849[3], i849[4] )
  request.r(i849[5], i849[6], 0, i848, 'sprite')
  i848.id = i849[7]
  i848.x = i849[8]
  i848.y = i849[9]
  i848.width = i849[10]
  i848.height = i849[11]
  i848.xOffset = i849[12]
  i848.yOffset = i849[13]
  i848.xAdvance = i849[14]
  i848.scale = i849[15]
  return i848
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i855 = data
  i854.m_Name = i855[0]
  i854.m_HashCode = i855[1]
  i854.m_ElementType = i855[2]
  i854.m_Unicode = i855[3]
  i854.m_GlyphIndex = i855[4]
  i854.m_Scale = i855[5]
  return i854
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i858 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'sprite')
  i858.m_Index = i859[2]
  i858.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i859[3], i858.m_Metrics)
  i858.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i859[4], i858.m_GlyphRect)
  i858.m_Scale = i859[5]
  i858.m_AtlasIndex = i859[6]
  i858.m_ClassDefinitionType = i859[7]
  return i858
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i860 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i861 = data
  var i863 = i861[0]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i863.length; i += 1) {
    i862.add(request.d('TMPro.TMP_Style', i863[i + 0]));
  }
  i860.m_StyleList = i862
  return i860
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.TMP_Style' )
  var i867 = data
  i866.m_Name = i867[0]
  i866.m_HashCode = i867[1]
  i866.m_OpeningDefinition = i867[2]
  i866.m_ClosingDefinition = i867[3]
  i866.m_OpeningTagArray = i867[4]
  i866.m_ClosingTagArray = i867[5]
  i866.m_OpeningTagUnicodeArray = i867[6]
  i866.m_ClosingTagUnicodeArray = i867[7]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i869 = data
  var i871 = i869[0]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i871[i + 0]) );
  }
  i868.files = i870
  i868.componentToPrefabIds = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i875 = data
  i874.path = i875[0]
  request.r(i875[1], i875[2], 0, i874, 'unityObject')
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i877 = data
  var i879 = i877[0]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i879[i + 0]) );
  }
  i876.scriptsExecutionOrder = i878
  var i881 = i877[1]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i881[i + 0]) );
  }
  i876.sortingLayers = i880
  var i883 = i877[2]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i883[i + 0]) );
  }
  i876.cullingLayers = i882
  i876.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i877[3], i876.timeSettings)
  i876.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i877[4], i876.physicsSettings)
  i876.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i877[5], i876.physics2DSettings)
  i876.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i877[6], i876.qualitySettings)
  i876.enableRealtimeShadows = !!i877[7]
  i876.enableAutoInstancing = !!i877[8]
  i876.enableStaticBatching = !!i877[9]
  i876.enableDynamicBatching = !!i877[10]
  i876.lightmapEncodingQuality = i877[11]
  i876.desiredColorSpace = i877[12]
  var i885 = i877[13]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( i885[i + 0] );
  }
  i876.allTags = i884
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i889 = data
  i888.name = i889[0]
  i888.value = i889[1]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i893 = data
  i892.id = i893[0]
  i892.name = i893[1]
  i892.value = i893[2]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i897 = data
  i896.id = i897[0]
  i896.name = i897[1]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i899 = data
  i898.fixedDeltaTime = i899[0]
  i898.maximumDeltaTime = i899[1]
  i898.timeScale = i899[2]
  i898.maximumParticleTimestep = i899[3]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i901 = data
  i900.gravity = new pc.Vec3( i901[0], i901[1], i901[2] )
  i900.defaultSolverIterations = i901[3]
  i900.bounceThreshold = i901[4]
  i900.autoSyncTransforms = !!i901[5]
  i900.autoSimulation = !!i901[6]
  var i903 = i901[7]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i903[i + 0]) );
  }
  i900.collisionMatrix = i902
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i907 = data
  i906.enabled = !!i907[0]
  i906.layerId = i907[1]
  i906.otherLayerId = i907[2]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'material')
  i908.gravity = new pc.Vec2( i909[2], i909[3] )
  i908.positionIterations = i909[4]
  i908.velocityIterations = i909[5]
  i908.velocityThreshold = i909[6]
  i908.maxLinearCorrection = i909[7]
  i908.maxAngularCorrection = i909[8]
  i908.maxTranslationSpeed = i909[9]
  i908.maxRotationSpeed = i909[10]
  i908.baumgarteScale = i909[11]
  i908.baumgarteTOIScale = i909[12]
  i908.timeToSleep = i909[13]
  i908.linearSleepTolerance = i909[14]
  i908.angularSleepTolerance = i909[15]
  i908.defaultContactOffset = i909[16]
  i908.autoSimulation = !!i909[17]
  i908.queriesHitTriggers = !!i909[18]
  i908.queriesStartInColliders = !!i909[19]
  i908.callbacksOnDisable = !!i909[20]
  i908.reuseCollisionCallbacks = !!i909[21]
  i908.autoSyncTransforms = !!i909[22]
  var i911 = i909[23]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i911[i + 0]) );
  }
  i908.collisionMatrix = i910
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i915 = data
  i914.enabled = !!i915[0]
  i914.layerId = i915[1]
  i914.otherLayerId = i915[2]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i917 = data
  var i919 = i917[0]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i919[i + 0]) );
  }
  i916.qualityLevels = i918
  var i921 = i917[1]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( i921[i + 0] );
  }
  i916.names = i920
  i916.shadows = i917[2]
  i916.anisotropicFiltering = i917[3]
  i916.antiAliasing = i917[4]
  i916.lodBias = i917[5]
  i916.shadowCascades = i917[6]
  i916.shadowDistance = i917[7]
  i916.shadowmaskMode = i917[8]
  i916.shadowProjection = i917[9]
  i916.shadowResolution = i917[10]
  i916.softParticles = !!i917[11]
  i916.softVegetation = !!i917[12]
  i916.activeColorSpace = i917[13]
  i916.desiredColorSpace = i917[14]
  i916.masterTextureLimit = i917[15]
  i916.maxQueuedFrames = i917[16]
  i916.particleRaycastBudget = i917[17]
  i916.pixelLightCount = i917[18]
  i916.realtimeReflectionProbes = !!i917[19]
  i916.shadowCascade2Split = i917[20]
  i916.shadowCascade4Split = new pc.Vec3( i917[21], i917[22], i917[23] )
  i916.streamingMipmapsActive = !!i917[24]
  i916.vSyncCount = i917[25]
  i916.asyncUploadBufferSize = i917[26]
  i916.asyncUploadTimeSlice = i917[27]
  i916.billboardsFaceCameraPosition = !!i917[28]
  i916.shadowNearPlaneOffset = i917[29]
  i916.streamingMipmapsMemoryBudget = i917[30]
  i916.maximumLODLevel = i917[31]
  i916.streamingMipmapsAddAllCameras = !!i917[32]
  i916.streamingMipmapsMaxLevelReduction = i917[33]
  i916.streamingMipmapsRenderersPerFrame = i917[34]
  i916.resolutionScalingFixedDPIFactor = i917[35]
  i916.streamingMipmapsMaxFileIORequests = i917[36]
  i916.currentQualityLevel = i917[37]
  return i916
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'm_ObjectArgument')
  i924.m_ObjectArgumentAssemblyTypeName = i925[2]
  i924.m_IntArgument = i925[3]
  i924.m_FloatArgument = i925[4]
  i924.m_StringArgument = i925[5]
  i924.m_BoolArgument = !!i925[6]
  return i924
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i926 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i927 = data
  i926.xPlacement = i927[0]
  i926.yPlacement = i927[1]
  i926.xAdvance = i927[2]
  i926.yAdvance = i927[3]
  return i926
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i928 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i929 = data
  i928.m_GlyphIndex = i929[0]
  i928.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i929[1], i928.m_GlyphValueRecord)
  return i928
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i930 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i931 = data
  i930.m_XPlacement = i931[0]
  i930.m_YPlacement = i931[1]
  i930.m_XAdvance = i931[2]
  i930.m_YAdvance = i931[3]
  return i930
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[11],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[11],"75":[76],"77":[78],"79":[78],"15":[2],"80":[81],"82":[83],"84":[81],"85":[2],"86":[2],"17":[15],"5":[3,2],"87":[2],"16":[15],"88":[2],"89":[2],"90":[2],"91":[2],"92":[2],"93":[2],"94":[2],"33":[2],"95":[2],"18":[3,2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[3,2],"101":[2],"102":[13],"103":[13],"14":[13],"104":[13],"105":[11],"106":[11],"107":[108],"109":[11],"110":[111],"112":[2],"113":[3,2],"114":[76],"25":[3,2],"115":[116,76],"117":[76],"118":[76,119],"120":[53],"121":[61],"122":[111],"123":[124],"125":[2],"126":[76,2],"7":[2,3],"127":[2],"128":[3,2],"129":[76],"130":[3,2],"131":[2],"132":[81]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RawImage","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.MonoBehaviour","DropZone","UnityEngine.GameObject","UnityEngine.BoxCollider2D","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","ClickItem","UnityEngine.UI.Button","DraggableItem","UnityEngine.CanvasGroup","LunaManager","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "172.0";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BM_V05_ManhND_AnhPD";

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

Deserializers.buildID = "64328c58-0c9e-480c-8b1e-9012e5973a39";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

