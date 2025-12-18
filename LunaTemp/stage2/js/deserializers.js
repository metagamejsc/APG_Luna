var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointSpring' )
  var i473 = data
  i472.spring = i473[0]
  i472.damper = i473[1]
  i472.targetPosition = i473[2]
  return i472
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointMotor' )
  var i475 = data
  i474.m_TargetVelocity = i475[0]
  i474.m_Force = i475[1]
  i474.m_FreeSpin = i475[2]
  return i474
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointLimits' )
  var i477 = data
  i476.m_Min = i477[0]
  i476.m_Max = i477[1]
  i476.m_Bounciness = i477[2]
  i476.m_BounceMinVelocity = i477[3]
  i476.m_ContactDistance = i477[4]
  i476.minBounce = i477[5]
  i476.maxBounce = i477[6]
  return i476
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointDrive' )
  var i479 = data
  i478.m_PositionSpring = i479[0]
  i478.m_PositionDamper = i479[1]
  i478.m_MaximumForce = i479[2]
  i478.m_UseAcceleration = i479[3]
  return i478
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i481 = data
  i480.m_Spring = i481[0]
  i480.m_Damper = i481[1]
  return i480
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i483 = data
  i482.m_Limit = i483[0]
  i482.m_Bounciness = i483[1]
  i482.m_ContactDistance = i483[2]
  return i482
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i485 = data
  i484.m_ExtremumSlip = i485[0]
  i484.m_ExtremumValue = i485[1]
  i484.m_AsymptoteSlip = i485[2]
  i484.m_AsymptoteValue = i485[3]
  i484.m_Stiffness = i485[4]
  return i484
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i487 = data
  i486.m_LowerAngle = i487[0]
  i486.m_UpperAngle = i487[1]
  return i486
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i489 = data
  i488.m_MotorSpeed = i489[0]
  i488.m_MaximumMotorTorque = i489[1]
  return i488
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i491 = data
  i490.m_DampingRatio = i491[0]
  i490.m_Frequency = i491[1]
  i490.m_Angle = i491[2]
  return i490
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i493 = data
  i492.m_LowerTranslation = i493[0]
  i492.m_UpperTranslation = i493[1]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i495 = data
  i494.name = i495[0]
  i494.width = i495[1]
  i494.height = i495[2]
  i494.mipmapCount = i495[3]
  i494.anisoLevel = i495[4]
  i494.filterMode = i495[5]
  i494.hdr = !!i495[6]
  i494.format = i495[7]
  i494.wrapMode = i495[8]
  i494.alphaIsTransparency = !!i495[9]
  i494.alphaSource = i495[10]
  i494.graphicsFormat = i495[11]
  i494.sRGBTexture = !!i495[12]
  i494.desiredColorSpace = i495[13]
  i494.wrapU = i495[14]
  i494.wrapV = i495[15]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i496 = root || new pc.UnityMaterial()
  var i497 = data
  i496.name = i497[0]
  request.r(i497[1], i497[2], 0, i496, 'shader')
  i496.renderQueue = i497[3]
  i496.enableInstancing = !!i497[4]
  var i499 = i497[5]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i499[i + 0]) );
  }
  i496.floatParameters = i498
  var i501 = i497[6]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i501[i + 0]) );
  }
  i496.colorParameters = i500
  var i503 = i497[7]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i503[i + 0]) );
  }
  i496.vectorParameters = i502
  var i505 = i497[8]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i505[i + 0]) );
  }
  i496.textureParameters = i504
  var i507 = i497[9]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i507[i + 0]) );
  }
  i496.materialFlags = i506
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i511 = data
  i510.name = i511[0]
  i510.value = i511[1]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i515 = data
  i514.name = i515[0]
  i514.value = new pc.Color(i515[1], i515[2], i515[3], i515[4])
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i519 = data
  i518.name = i519[0]
  i518.value = new pc.Vec4( i519[1], i519[2], i519[3], i519[4] )
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i523 = data
  i522.name = i523[0]
  request.r(i523[1], i523[2], 0, i522, 'value')
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i527 = data
  i526.name = i527[0]
  i526.enabled = !!i527[1]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i529 = data
  i528.pivot = new pc.Vec2( i529[0], i529[1] )
  i528.anchorMin = new pc.Vec2( i529[2], i529[3] )
  i528.anchorMax = new pc.Vec2( i529[4], i529[5] )
  i528.sizeDelta = new pc.Vec2( i529[6], i529[7] )
  i528.anchoredPosition3D = new pc.Vec3( i529[8], i529[9], i529[10] )
  i528.rotation = new pc.Quat(i529[11], i529[12], i529[13], i529[14])
  i528.scale = new pc.Vec3( i529[15], i529[16], i529[17] )
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i531 = data
  i530.cullTransparentMesh = !!i531[0]
  return i530
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.UI.Image' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'm_Sprite')
  i532.m_Type = i533[2]
  i532.m_PreserveAspect = !!i533[3]
  i532.m_FillCenter = !!i533[4]
  i532.m_FillMethod = i533[5]
  i532.m_FillAmount = i533[6]
  i532.m_FillClockwise = !!i533[7]
  i532.m_FillOrigin = i533[8]
  i532.m_UseSpriteMesh = !!i533[9]
  i532.m_PixelsPerUnitMultiplier = i533[10]
  i532.m_Maskable = !!i533[11]
  request.r(i533[12], i533[13], 0, i532, 'm_Material')
  i532.m_Color = new pc.Color(i533[14], i533[15], i533[16], i533[17])
  i532.m_RaycastTarget = !!i533[18]
  i532.m_RaycastPadding = new pc.Vec4( i533[19], i533[20], i533[21], i533[22] )
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i535 = data
  i534.name = i535[0]
  i534.tagId = i535[1]
  i534.enabled = !!i535[2]
  i534.isStatic = !!i535[3]
  i534.layer = i535[4]
  return i534
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i536 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i537 = data
  i536.m_hasFontAssetChanged = !!i537[0]
  request.r(i537[1], i537[2], 0, i536, 'm_baseMaterial')
  i536.m_maskOffset = new pc.Vec4( i537[3], i537[4], i537[5], i537[6] )
  i536.m_text = i537[7]
  i536.m_isRightToLeft = !!i537[8]
  request.r(i537[9], i537[10], 0, i536, 'm_fontAsset')
  request.r(i537[11], i537[12], 0, i536, 'm_sharedMaterial')
  var i539 = i537[13]
  var i538 = []
  for(var i = 0; i < i539.length; i += 2) {
  request.r(i539[i + 0], i539[i + 1], 2, i538, '')
  }
  i536.m_fontSharedMaterials = i538
  request.r(i537[14], i537[15], 0, i536, 'm_fontMaterial')
  var i541 = i537[16]
  var i540 = []
  for(var i = 0; i < i541.length; i += 2) {
  request.r(i541[i + 0], i541[i + 1], 2, i540, '')
  }
  i536.m_fontMaterials = i540
  i536.m_fontColor32 = UnityEngine.Color32.ConstructColor(i537[17], i537[18], i537[19], i537[20])
  i536.m_fontColor = new pc.Color(i537[21], i537[22], i537[23], i537[24])
  i536.m_enableVertexGradient = !!i537[25]
  i536.m_colorMode = i537[26]
  i536.m_fontColorGradient = request.d('TMPro.VertexGradient', i537[27], i536.m_fontColorGradient)
  request.r(i537[28], i537[29], 0, i536, 'm_fontColorGradientPreset')
  request.r(i537[30], i537[31], 0, i536, 'm_spriteAsset')
  i536.m_tintAllSprites = !!i537[32]
  request.r(i537[33], i537[34], 0, i536, 'm_StyleSheet')
  i536.m_TextStyleHashCode = i537[35]
  i536.m_overrideHtmlColors = !!i537[36]
  i536.m_faceColor = UnityEngine.Color32.ConstructColor(i537[37], i537[38], i537[39], i537[40])
  i536.m_fontSize = i537[41]
  i536.m_fontSizeBase = i537[42]
  i536.m_fontWeight = i537[43]
  i536.m_enableAutoSizing = !!i537[44]
  i536.m_fontSizeMin = i537[45]
  i536.m_fontSizeMax = i537[46]
  i536.m_fontStyle = i537[47]
  i536.m_HorizontalAlignment = i537[48]
  i536.m_VerticalAlignment = i537[49]
  i536.m_textAlignment = i537[50]
  i536.m_characterSpacing = i537[51]
  i536.m_wordSpacing = i537[52]
  i536.m_lineSpacing = i537[53]
  i536.m_lineSpacingMax = i537[54]
  i536.m_paragraphSpacing = i537[55]
  i536.m_charWidthMaxAdj = i537[56]
  i536.m_enableWordWrapping = !!i537[57]
  i536.m_wordWrappingRatios = i537[58]
  i536.m_overflowMode = i537[59]
  request.r(i537[60], i537[61], 0, i536, 'm_linkedTextComponent')
  request.r(i537[62], i537[63], 0, i536, 'parentLinkedComponent')
  i536.m_enableKerning = !!i537[64]
  i536.m_enableExtraPadding = !!i537[65]
  i536.checkPaddingRequired = !!i537[66]
  i536.m_isRichText = !!i537[67]
  i536.m_parseCtrlCharacters = !!i537[68]
  i536.m_isOrthographic = !!i537[69]
  i536.m_isCullingEnabled = !!i537[70]
  i536.m_horizontalMapping = i537[71]
  i536.m_verticalMapping = i537[72]
  i536.m_uvLineOffset = i537[73]
  i536.m_geometrySortingOrder = i537[74]
  i536.m_IsTextObjectScaleStatic = !!i537[75]
  i536.m_VertexBufferAutoSizeReduction = !!i537[76]
  i536.m_useMaxVisibleDescender = !!i537[77]
  i536.m_pageToDisplay = i537[78]
  i536.m_margin = new pc.Vec4( i537[79], i537[80], i537[81], i537[82] )
  i536.m_isUsingLegacyAnimationComponent = !!i537[83]
  i536.m_isVolumetricText = !!i537[84]
  i536.m_Maskable = !!i537[85]
  request.r(i537[86], i537[87], 0, i536, 'm_Material')
  i536.m_Color = new pc.Color(i537[88], i537[89], i537[90], i537[91])
  i536.m_RaycastTarget = !!i537[92]
  i536.m_RaycastPadding = new pc.Vec4( i537[93], i537[94], i537[95], i537[96] )
  return i536
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i544 = root || request.c( 'TMPro.VertexGradient' )
  var i545 = data
  i544.topLeft = new pc.Color(i545[0], i545[1], i545[2], i545[3])
  i544.topRight = new pc.Color(i545[4], i545[5], i545[6], i545[7])
  i544.bottomLeft = new pc.Color(i545[8], i545[9], i545[10], i545[11])
  i544.bottomRight = new pc.Color(i545[12], i545[13], i545[14], i545[15])
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i547 = data
  i546.name = i547[0]
  i546.index = i547[1]
  i546.startup = !!i547[2]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i549 = data
  i548.position = new pc.Vec3( i549[0], i549[1], i549[2] )
  i548.scale = new pc.Vec3( i549[3], i549[4], i549[5] )
  i548.rotation = new pc.Quat(i549[6], i549[7], i549[8], i549[9])
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i551 = data
  i550.aspect = i551[0]
  i550.orthographic = !!i551[1]
  i550.orthographicSize = i551[2]
  i550.backgroundColor = new pc.Color(i551[3], i551[4], i551[5], i551[6])
  i550.nearClipPlane = i551[7]
  i550.farClipPlane = i551[8]
  i550.fieldOfView = i551[9]
  i550.depth = i551[10]
  i550.clearFlags = i551[11]
  i550.cullingMask = i551[12]
  i550.rect = i551[13]
  request.r(i551[14], i551[15], 0, i550, 'targetTexture')
  i550.usePhysicalProperties = !!i551[16]
  i550.focalLength = i551[17]
  i550.sensorSize = new pc.Vec2( i551[18], i551[19] )
  i550.lensShift = new pc.Vec2( i551[20], i551[21] )
  i550.gateFit = i551[22]
  i550.commandBufferCount = i551[23]
  i550.cameraType = i551[24]
  i550.enabled = !!i551[25]
  return i550
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'm_FirstSelected')
  i552.m_sendNavigationEvents = !!i553[2]
  i552.m_DragThreshold = i553[3]
  return i552
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i555 = data
  i554.m_HorizontalAxis = i555[0]
  i554.m_VerticalAxis = i555[1]
  i554.m_SubmitButton = i555[2]
  i554.m_CancelButton = i555[3]
  i554.m_InputActionsPerSecond = i555[4]
  i554.m_RepeatDelay = i555[5]
  i554.m_ForceModuleActive = !!i555[6]
  i554.m_SendPointerHoverToParent = !!i555[7]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i557 = data
  i556.planeDistance = i557[0]
  i556.referencePixelsPerUnit = i557[1]
  i556.isFallbackOverlay = !!i557[2]
  i556.renderMode = i557[3]
  i556.renderOrder = i557[4]
  i556.sortingLayerName = i557[5]
  i556.sortingOrder = i557[6]
  i556.scaleFactor = i557[7]
  request.r(i557[8], i557[9], 0, i556, 'worldCamera')
  i556.overrideSorting = !!i557[10]
  i556.pixelPerfect = !!i557[11]
  i556.targetDisplay = i557[12]
  i556.overridePixelPerfect = !!i557[13]
  i556.enabled = !!i557[14]
  return i556
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i559 = data
  i558.m_UiScaleMode = i559[0]
  i558.m_ReferencePixelsPerUnit = i559[1]
  i558.m_ScaleFactor = i559[2]
  i558.m_ReferenceResolution = new pc.Vec2( i559[3], i559[4] )
  i558.m_ScreenMatchMode = i559[5]
  i558.m_MatchWidthOrHeight = i559[6]
  i558.m_PhysicalUnit = i559[7]
  i558.m_FallbackScreenDPI = i559[8]
  i558.m_DefaultSpriteDPI = i559[9]
  i558.m_DynamicPixelsPerUnit = i559[10]
  i558.m_PresetInfoIsWorld = !!i559[11]
  return i558
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i561 = data
  i560.m_IgnoreReversedGraphics = !!i561[0]
  i560.m_BlockingObjects = i561[1]
  i560.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i561[2] )
  return i560
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'm_Texture')
  i562.m_UVRect = UnityEngine.Rect.MinMaxRect(i563[2], i563[3], i563[4], i563[5])
  i562.m_Maskable = !!i563[6]
  request.r(i563[7], i563[8], 0, i562, 'm_Material')
  i562.m_Color = new pc.Color(i563[9], i563[10], i563[11], i563[12])
  i562.m_RaycastTarget = !!i563[13]
  i562.m_RaycastPadding = new pc.Vec4( i563[14], i563[15], i563[16], i563[17] )
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i565 = data
  request.r(i565[0], i565[1], 0, i564, 'clip')
  request.r(i565[2], i565[3], 0, i564, 'outputAudioMixerGroup')
  i564.playOnAwake = !!i565[4]
  i564.loop = !!i565[5]
  i564.time = i565[6]
  i564.volume = i565[7]
  i564.pitch = i565[8]
  i564.enabled = !!i565[9]
  return i564
}

Deserializers["DropZone"] = function (request, data, root) {
  var i566 = root || request.c( 'DropZone' )
  var i567 = data
  i566.idDrop = i567[0]
  i566.isLose = !!i567[1]
  var i569 = i567[2]
  var i568 = []
  for(var i = 0; i < i569.length; i += 2) {
  request.r(i569[i + 0], i569[i + 1], 2, i568, '')
  }
  i566.steps = i568
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i573 = data
  i572.usedByComposite = !!i573[0]
  i572.autoTiling = !!i573[1]
  var i575 = i573[2]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
  var i577 = i575[i + 0]
  var i576 = []
  for(var i = 0; i < i577.length; i += 2) {
    i576.push( new pc.Vec2( i577[i + 0], i577[i + 1] ) );
  }
    i574.push( i576 );
  }
  i572.points = i574
  i572.enabled = !!i573[3]
  i572.isTrigger = !!i573[4]
  i572.usedByEffector = !!i573[5]
  i572.density = i573[6]
  i572.offset = new pc.Vec2( i573[7], i573[8] )
  request.r(i573[9], i573[10], 0, i572, 'material')
  return i572
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i584 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'skeletonDataAsset')
  request.r(i585[2], i585[3], 0, i584, 'additiveMaterial')
  request.r(i585[4], i585[5], 0, i584, 'multiplyMaterial')
  request.r(i585[6], i585[7], 0, i584, 'screenMaterial')
  i584.initialSkinName = i585[8]
  i584.initialFlipX = !!i585[9]
  i584.initialFlipY = !!i585[10]
  i584.startingAnimation = i585[11]
  i584.startingLoop = !!i585[12]
  i584.timeScale = i585[13]
  i584.freeze = !!i585[14]
  i584.layoutScaleMode = i585[15]
  i584.updateWhenInvisible = i585[16]
  i584.allowMultipleCanvasRenderers = !!i585[17]
  var i587 = i585[18]
  var i586 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i587.length; i += 2) {
  request.r(i587[i + 0], i587[i + 1], 1, i586, '')
  }
  i584.canvasRenderers = i586
  i584.enableSeparatorSlots = !!i585[19]
  i584.updateSeparatorPartLocation = !!i585[20]
  i584.updateSeparatorPartScale = !!i585[21]
  i584.disableMeshAssignmentOnOverride = !!i585[22]
  i584.m_SkeletonColor = new pc.Color(i585[23], i585[24], i585[25], i585[26])
  i584.referenceSize = new pc.Vec2( i585[27], i585[28] )
  i584.pivotOffset = new pc.Vec2( i585[29], i585[30] )
  i584.referenceScale = i585[31]
  i584.layoutScale = i585[32]
  i584.rectTransformSize = new pc.Vec2( i585[33], i585[34] )
  i584.editReferenceRect = !!i585[35]
  var i589 = i585[36]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( i589[i + 0] );
  }
  i584.separatorSlotNames = i588
  var i591 = i585[37]
  var i590 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i591.length; i += 2) {
  request.r(i591[i + 0], i591[i + 1], 1, i590, '')
  }
  i584.separatorParts = i590
  i584.physicsPositionInheritanceFactor = new pc.Vec2( i585[38], i585[39] )
  i584.physicsRotationInheritanceFactor = i585[40]
  request.r(i585[41], i585[42], 0, i584, 'physicsMovementRelativeTo')
  i584.meshGenerator = request.d('Spine.Unity.MeshGenerator', i585[43], i584.meshGenerator)
  i584.updateTiming = i585[44]
  i584.unscaledTime = !!i585[45]
  i584.m_Maskable = !!i585[46]
  request.r(i585[47], i585[48], 0, i584, 'm_Material')
  i584.m_Color = new pc.Color(i585[49], i585[50], i585[51], i585[52])
  i584.m_RaycastTarget = !!i585[53]
  i584.m_RaycastPadding = new pc.Vec4( i585[54], i585[55], i585[56], i585[57] )
  return i584
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i598 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i599 = data
  i598.settings = request.d('Spine.Unity.MeshGenerator+Settings', i599[0], i598.settings)
  return i598
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i600 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i601 = data
  i600.useClipping = !!i601[0]
  i600.zSpacing = i601[1]
  i600.tintBlack = !!i601[2]
  i600.canvasGroupCompatible = !!i601[3]
  i600.pmaVertexColors = !!i601[4]
  i600.addNormals = !!i601[5]
  i600.calculateTangents = !!i601[6]
  i600.immutableTriangles = !!i601[7]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i603 = data
  i602.m_Alpha = i603[0]
  i602.m_Interactable = !!i603[1]
  i602.m_BlocksRaycasts = !!i603[2]
  i602.m_IgnoreParentGroups = !!i603[3]
  i602.enabled = !!i603[4]
  return i602
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i604 = root || request.c( 'DraggableItem' )
  var i605 = data
  i604.idDrag = i605[0]
  i604.isProcess = !!i605[1]
  return i604
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i606 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i607 = data
  i606.targetIsSelf = !!i607[0]
  request.r(i607[1], i607[2], 0, i606, 'targetGO')
  i606.tweenTargetIsTargetGO = !!i607[3]
  i606.delay = i607[4]
  i606.duration = i607[5]
  i606.easeType = i607[6]
  i606.easeCurve = new pc.AnimationCurve( { keys_flow: i607[7] } )
  i606.loopType = i607[8]
  i606.loops = i607[9]
  i606.id = i607[10]
  i606.isRelative = !!i607[11]
  i606.isFrom = !!i607[12]
  i606.isIndependentUpdate = !!i607[13]
  i606.autoKill = !!i607[14]
  i606.autoGenerate = !!i607[15]
  i606.isActive = !!i607[16]
  i606.isValid = !!i607[17]
  request.r(i607[18], i607[19], 0, i606, 'target')
  i606.animationType = i607[20]
  i606.targetType = i607[21]
  i606.forcedTargetType = i607[22]
  i606.autoPlay = !!i607[23]
  i606.useTargetAsV3 = !!i607[24]
  i606.endValueFloat = i607[25]
  i606.endValueV3 = new pc.Vec3( i607[26], i607[27], i607[28] )
  i606.endValueV2 = new pc.Vec2( i607[29], i607[30] )
  i606.endValueColor = new pc.Color(i607[31], i607[32], i607[33], i607[34])
  i606.endValueString = i607[35]
  i606.endValueRect = UnityEngine.Rect.MinMaxRect(i607[36], i607[37], i607[38], i607[39])
  request.r(i607[40], i607[41], 0, i606, 'endValueTransform')
  i606.optionalBool0 = !!i607[42]
  i606.optionalBool1 = !!i607[43]
  i606.optionalFloat0 = i607[44]
  i606.optionalInt0 = i607[45]
  i606.optionalRotationMode = i607[46]
  i606.optionalScrambleMode = i607[47]
  i606.optionalShakeRandomnessMode = i607[48]
  i606.optionalString = i607[49]
  i606.updateType = i607[50]
  i606.isSpeedBased = !!i607[51]
  i606.hasOnStart = !!i607[52]
  i606.hasOnPlay = !!i607[53]
  i606.hasOnUpdate = !!i607[54]
  i606.hasOnStepComplete = !!i607[55]
  i606.hasOnComplete = !!i607[56]
  i606.hasOnTweenCreated = !!i607[57]
  i606.hasOnRewind = !!i607[58]
  i606.onStart = request.d('UnityEngine.Events.UnityEvent', i607[59], i606.onStart)
  i606.onPlay = request.d('UnityEngine.Events.UnityEvent', i607[60], i606.onPlay)
  i606.onUpdate = request.d('UnityEngine.Events.UnityEvent', i607[61], i606.onUpdate)
  i606.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i607[62], i606.onStepComplete)
  i606.onComplete = request.d('UnityEngine.Events.UnityEvent', i607[63], i606.onComplete)
  i606.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i607[64], i606.onTweenCreated)
  i606.onRewind = request.d('UnityEngine.Events.UnityEvent', i607[65], i606.onRewind)
  return i606
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i609 = data
  i608.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i609[0], i608.m_PersistentCalls)
  return i608
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i611 = data
  var i613 = i611[0]
  var i612 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i613.length; i += 1) {
    i612.add(request.d('UnityEngine.Events.PersistentCall', i613[i + 0]));
  }
  i610.m_Calls = i612
  return i610
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, 'm_Target')
  i616.m_TargetAssemblyTypeName = i617[2]
  i616.m_MethodName = i617[3]
  i616.m_Mode = i617[4]
  i616.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i617[5], i616.m_Arguments)
  i616.m_CallState = i617[6]
  return i616
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'm_ObjectArgument')
  i618.m_ObjectArgumentAssemblyTypeName = i619[2]
  i618.m_IntArgument = i619[3]
  i618.m_FloatArgument = i619[4]
  i618.m_StringArgument = i619[5]
  i618.m_BoolArgument = !!i619[6]
  return i618
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i620 = root || request.c( 'LunaManager' )
  var i621 = data
  var i623 = i621[0]
  var i622 = []
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 2, i622, '')
  }
  i620.lstBtnInstall = i622
  request.r(i621[1], i621[2], 0, i620, 'StartCard')
  request.r(i621[3], i621[4], 0, i620, 'EndCard')
  request.r(i621[5], i621[6], 0, i620, 'Parent')
  request.r(i621[7], i621[8], 0, i620, 'LoseTitle')
  var i625 = i621[9]
  var i624 = []
  for(var i = 0; i < i625.length; i += 2) {
  request.r(i625[i + 0], i625[i + 1], 2, i624, '')
  }
  i620.tutorial = i624
  i620.isDrag = !!i621[10]
  i620.countPlay = i621[11]
  i620.countPlayFinal = i621[12]
  i620.countPlayMax = i621[13]
  i620.timeDropFinal = i621[14]
  i620.colorBG = new pc.Color(i621[15], i621[16], i621[17], i621[18])
  request.r(i621[19], i621[20], 0, i620, 'texture2D')
  request.r(i621[21], i621[22], 0, i620, 'rawImageBG')
  request.r(i621[23], i621[24], 0, i620, 'textProgess')
  request.r(i621[25], i621[26], 0, i620, 'imgProgess')
  request.r(i621[27], i621[28], 0, i620, 'timeText')
  return i620
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.Button' )
  var i629 = data
  i628.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i629[0], i628.m_OnClick)
  i628.m_Navigation = request.d('UnityEngine.UI.Navigation', i629[1], i628.m_Navigation)
  i628.m_Transition = i629[2]
  i628.m_Colors = request.d('UnityEngine.UI.ColorBlock', i629[3], i628.m_Colors)
  i628.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i629[4], i628.m_SpriteState)
  i628.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i629[5], i628.m_AnimationTriggers)
  i628.m_Interactable = !!i629[6]
  request.r(i629[7], i629[8], 0, i628, 'm_TargetGraphic')
  return i628
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i631 = data
  i630.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i631[0], i630.m_PersistentCalls)
  return i630
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i633 = data
  i632.m_Mode = i633[0]
  i632.m_WrapAround = !!i633[1]
  request.r(i633[2], i633[3], 0, i632, 'm_SelectOnUp')
  request.r(i633[4], i633[5], 0, i632, 'm_SelectOnDown')
  request.r(i633[6], i633[7], 0, i632, 'm_SelectOnLeft')
  request.r(i633[8], i633[9], 0, i632, 'm_SelectOnRight')
  return i632
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i635 = data
  i634.m_NormalColor = new pc.Color(i635[0], i635[1], i635[2], i635[3])
  i634.m_HighlightedColor = new pc.Color(i635[4], i635[5], i635[6], i635[7])
  i634.m_PressedColor = new pc.Color(i635[8], i635[9], i635[10], i635[11])
  i634.m_SelectedColor = new pc.Color(i635[12], i635[13], i635[14], i635[15])
  i634.m_DisabledColor = new pc.Color(i635[16], i635[17], i635[18], i635[19])
  i634.m_ColorMultiplier = i635[20]
  i634.m_FadeDuration = i635[21]
  return i634
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'm_HighlightedSprite')
  request.r(i637[2], i637[3], 0, i636, 'm_PressedSprite')
  request.r(i637[4], i637[5], 0, i636, 'm_SelectedSprite')
  request.r(i637[6], i637[7], 0, i636, 'm_DisabledSprite')
  return i636
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i639 = data
  i638.m_NormalTrigger = i639[0]
  i638.m_HighlightedTrigger = i639[1]
  i638.m_PressedTrigger = i639[2]
  i638.m_SelectedTrigger = i639[3]
  i638.m_DisabledTrigger = i639[4]
  return i638
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.Mask' )
  var i641 = data
  i640.m_ShowMaskGraphic = !!i641[0]
  return i640
}

Deserializers["AudioController"] = function (request, data, root) {
  var i642 = root || request.c( 'AudioController' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'bgmSource')
  request.r(i643[2], i643[3], 0, i642, 'sfxSource')
  var i645 = i643[4]
  var i644 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i645.length; i += 1) {
    i644.add(request.d('AudioEntry', i645[i + 0]));
  }
  i642.audioEntries = i644
  return i642
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i648 = root || request.c( 'AudioEntry' )
  var i649 = data
  i648.key = i649[0]
  request.r(i649[1], i649[2], 0, i648, 'clip')
  i648.volume = i649[3]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i651 = data
  i650.ambientIntensity = i651[0]
  i650.reflectionIntensity = i651[1]
  i650.ambientMode = i651[2]
  i650.ambientLight = new pc.Color(i651[3], i651[4], i651[5], i651[6])
  i650.ambientSkyColor = new pc.Color(i651[7], i651[8], i651[9], i651[10])
  i650.ambientGroundColor = new pc.Color(i651[11], i651[12], i651[13], i651[14])
  i650.ambientEquatorColor = new pc.Color(i651[15], i651[16], i651[17], i651[18])
  i650.fogColor = new pc.Color(i651[19], i651[20], i651[21], i651[22])
  i650.fogEndDistance = i651[23]
  i650.fogStartDistance = i651[24]
  i650.fogDensity = i651[25]
  i650.fog = !!i651[26]
  request.r(i651[27], i651[28], 0, i650, 'skybox')
  i650.fogMode = i651[29]
  var i653 = i651[30]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i653[i + 0]) );
  }
  i650.lightmaps = i652
  i650.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i651[31], i650.lightProbes)
  i650.lightmapsMode = i651[32]
  i650.mixedBakeMode = i651[33]
  i650.environmentLightingMode = i651[34]
  i650.ambientProbe = new pc.SphericalHarmonicsL2(i651[35])
  i650.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i651[36])
  i650.useReferenceAmbientProbe = !!i651[37]
  request.r(i651[38], i651[39], 0, i650, 'customReflection')
  request.r(i651[40], i651[41], 0, i650, 'defaultReflection')
  i650.defaultReflectionMode = i651[42]
  i650.defaultReflectionResolution = i651[43]
  i650.sunLightObjectId = i651[44]
  i650.pixelLightCount = i651[45]
  i650.defaultReflectionHDR = !!i651[46]
  i650.hasLightDataAsset = !!i651[47]
  i650.hasManualGenerate = !!i651[48]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'lightmapColor')
  request.r(i657[2], i657[3], 0, i656, 'lightmapDirection')
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i658 = root || new UnityEngine.LightProbes()
  var i659 = data
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i667 = data
  var i669 = i667[0]
  var i668 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i669.length; i += 1) {
    i668.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i669[i + 0]));
  }
  i666.ShaderCompilationErrors = i668
  i666.name = i667[1]
  i666.guid = i667[2]
  var i671 = i667[3]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( i671[i + 0] );
  }
  i666.shaderDefinedKeywords = i670
  var i673 = i667[4]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i673[i + 0]) );
  }
  i666.passes = i672
  var i675 = i667[5]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i675[i + 0]) );
  }
  i666.usePasses = i674
  var i677 = i667[6]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i677[i + 0]) );
  }
  i666.defaultParameterValues = i676
  request.r(i667[7], i667[8], 0, i666, 'unityFallbackShader')
  i666.readDepth = !!i667[9]
  i666.isCreatedByShaderGraph = !!i667[10]
  i666.disableBatching = !!i667[11]
  i666.compiled = !!i667[12]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i681 = data
  i680.shaderName = i681[0]
  i680.errorMessage = i681[1]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i684 = root || new pc.UnityShaderPass()
  var i685 = data
  i684.id = i685[0]
  i684.subShaderIndex = i685[1]
  i684.name = i685[2]
  i684.passType = i685[3]
  i684.grabPassTextureName = i685[4]
  i684.usePass = !!i685[5]
  i684.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[6], i684.zTest)
  i684.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[7], i684.zWrite)
  i684.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[8], i684.culling)
  i684.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i685[9], i684.blending)
  i684.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i685[10], i684.alphaBlending)
  i684.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[11], i684.colorWriteMask)
  i684.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[12], i684.offsetUnits)
  i684.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[13], i684.offsetFactor)
  i684.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[14], i684.stencilRef)
  i684.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[15], i684.stencilReadMask)
  i684.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[16], i684.stencilWriteMask)
  i684.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i685[17], i684.stencilOp)
  i684.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i685[18], i684.stencilOpFront)
  i684.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i685[19], i684.stencilOpBack)
  var i687 = i685[20]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i687[i + 0]) );
  }
  i684.tags = i686
  var i689 = i685[21]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( i689[i + 0] );
  }
  i684.passDefinedKeywords = i688
  var i691 = i685[22]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i691[i + 0]) );
  }
  i684.passDefinedKeywordGroups = i690
  var i693 = i685[23]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i693[i + 0]) );
  }
  i684.variants = i692
  var i695 = i685[24]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i695[i + 0]) );
  }
  i684.excludedVariants = i694
  i684.hasDepthReader = !!i685[25]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i697 = data
  i696.val = i697[0]
  i696.name = i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i699 = data
  i698.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[0], i698.src)
  i698.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[1], i698.dst)
  i698.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[2], i698.op)
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i701 = data
  i700.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[0], i700.pass)
  i700.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[1], i700.fail)
  i700.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[2], i700.zFail)
  i700.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[3], i700.comp)
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i705 = data
  i704.name = i705[0]
  i704.value = i705[1]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i709 = data
  var i711 = i709[0]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( i711[i + 0] );
  }
  i708.keywords = i710
  i708.hasDiscard = !!i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i715 = data
  i714.passId = i715[0]
  i714.subShaderIndex = i715[1]
  var i717 = i715[2]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( i717[i + 0] );
  }
  i714.keywords = i716
  i714.vertexProgram = i715[3]
  i714.fragmentProgram = i715[4]
  i714.exportedForWebGl2 = !!i715[5]
  i714.readDepth = !!i715[6]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'shader')
  i720.pass = i721[2]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i725 = data
  i724.name = i725[0]
  i724.type = i725[1]
  i724.value = new pc.Vec4( i725[2], i725[3], i725[4], i725[5] )
  i724.textureValue = i725[6]
  i724.shaderPropertyFlag = i725[7]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i727 = data
  i726.name = i727[0]
  request.r(i727[1], i727[2], 0, i726, 'texture')
  i726.aabb = i727[3]
  i726.vertices = i727[4]
  i726.triangles = i727[5]
  i726.textureRect = UnityEngine.Rect.MinMaxRect(i727[6], i727[7], i727[8], i727[9])
  i726.packedRect = UnityEngine.Rect.MinMaxRect(i727[10], i727[11], i727[12], i727[13])
  i726.border = new pc.Vec4( i727[14], i727[15], i727[16], i727[17] )
  i726.transparency = i727[18]
  i726.bounds = i727[19]
  i726.pixelsPerUnit = i727[20]
  i726.textureWidth = i727[21]
  i726.textureHeight = i727[22]
  i726.nativeSize = new pc.Vec2( i727[23], i727[24] )
  i726.pivot = new pc.Vec2( i727[25], i727[26] )
  i726.textureRectOffset = new pc.Vec2( i727[27], i727[28] )
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i729 = data
  i728.name = i729[0]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i731 = data
  i730.name = i731[0]
  i730.ascent = i731[1]
  i730.originalLineHeight = i731[2]
  i730.fontSize = i731[3]
  var i733 = i731[4]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i733[i + 0]) );
  }
  i730.characterInfo = i732
  request.r(i731[5], i731[6], 0, i730, 'texture')
  i730.originalFontSize = i731[7]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i737 = data
  i736.index = i737[0]
  i736.advance = i737[1]
  i736.bearing = i737[2]
  i736.glyphWidth = i737[3]
  i736.glyphHeight = i737[4]
  i736.minX = i737[5]
  i736.maxX = i737[6]
  i736.minY = i737[7]
  i736.maxY = i737[8]
  i736.uvBottomLeftX = i737[9]
  i736.uvBottomLeftY = i737[10]
  i736.uvBottomRightX = i737[11]
  i736.uvBottomRightY = i737[12]
  i736.uvTopLeftX = i737[13]
  i736.uvTopLeftY = i737[14]
  i736.uvTopRightX = i737[15]
  i736.uvTopRightY = i737[16]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i739 = data
  i738.name = i739[0]
  i738.bytes64 = i739[1]
  i738.data = i739[2]
  return i738
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i740 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i741 = data
  var i743 = i741[0]
  var i742 = []
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 2, i742, '')
  }
  i740.atlasAssets = i742
  i740.scale = i741[1]
  request.r(i741[2], i741[3], 0, i740, 'skeletonJSON')
  i740.isUpgradingBlendModeMaterials = !!i741[4]
  i740.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i741[5], i740.blendModeMaterials)
  var i745 = i741[6]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 1, i744, '')
  }
  i740.skeletonDataModifiers = i744
  var i747 = i741[7]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( i747[i + 0] );
  }
  i740.fromAnimation = i746
  var i749 = i741[8]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( i749[i + 0] );
  }
  i740.toAnimation = i748
  i740.duration = i741[9]
  i740.defaultMix = i741[10]
  request.r(i741[11], i741[12], 0, i740, 'controller')
  return i740
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i752 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i753 = data
  i752.applyAdditiveMaterial = !!i753[0]
  var i755 = i753[1]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i755.length; i += 1) {
    i754.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i755[i + 0]));
  }
  i752.additiveMaterials = i754
  var i757 = i753[2]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i757.length; i += 1) {
    i756.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i757[i + 0]));
  }
  i752.multiplyMaterials = i756
  var i759 = i753[3]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i759.length; i += 1) {
    i758.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i759[i + 0]));
  }
  i752.screenMaterials = i758
  i752.requiresBlendModeMaterials = !!i753[4]
  return i752
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i762 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i763 = data
  i762.pageName = i763[0]
  request.r(i763[1], i763[2], 0, i762, 'material')
  return i762
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i766 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'atlasFile')
  var i769 = i767[2]
  var i768 = []
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 2, i768, '')
  }
  i766.materials = i768
  i766.textureLoadingMode = i767[3]
  request.r(i767[4], i767[5], 0, i766, 'onDemandTextureLoader')
  return i766
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i770 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'atlas')
  i770.normalStyle = i771[2]
  i770.normalSpacingOffset = i771[3]
  i770.boldStyle = i771[4]
  i770.boldSpacing = i771[5]
  i770.italicStyle = i771[6]
  i770.tabSize = i771[7]
  i770.hashCode = i771[8]
  request.r(i771[9], i771[10], 0, i770, 'material')
  i770.materialHashCode = i771[11]
  i770.m_Version = i771[12]
  i770.m_SourceFontFileGUID = i771[13]
  request.r(i771[14], i771[15], 0, i770, 'm_SourceFontFile_EditorRef')
  request.r(i771[16], i771[17], 0, i770, 'm_SourceFontFile')
  i770.m_AtlasPopulationMode = i771[18]
  i770.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i771[19], i770.m_FaceInfo)
  var i773 = i771[20]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i773.length; i += 1) {
    i772.add(request.d('UnityEngine.TextCore.Glyph', i773[i + 0]));
  }
  i770.m_GlyphTable = i772
  var i775 = i771[21]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('TMPro.TMP_Character', i775[i + 0]));
  }
  i770.m_CharacterTable = i774
  var i777 = i771[22]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i770.m_AtlasTextures = i776
  i770.m_AtlasTextureIndex = i771[23]
  i770.m_IsMultiAtlasTexturesEnabled = !!i771[24]
  i770.m_ClearDynamicDataOnBuild = !!i771[25]
  var i779 = i771[26]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('UnityEngine.TextCore.GlyphRect', i779[i + 0]));
  }
  i770.m_UsedGlyphRects = i778
  var i781 = i771[27]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i781.length; i += 1) {
    i780.add(request.d('UnityEngine.TextCore.GlyphRect', i781[i + 0]));
  }
  i770.m_FreeGlyphRects = i780
  i770.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i771[28], i770.m_fontInfo)
  i770.m_AtlasWidth = i771[29]
  i770.m_AtlasHeight = i771[30]
  i770.m_AtlasPadding = i771[31]
  i770.m_AtlasRenderMode = i771[32]
  var i783 = i771[33]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('TMPro.TMP_Glyph', i783[i + 0]));
  }
  i770.m_glyphInfoList = i782
  i770.m_KerningTable = request.d('TMPro.KerningTable', i771[34], i770.m_KerningTable)
  i770.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i771[35], i770.m_FontFeatureTable)
  var i785 = i771[36]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 1, i784, '')
  }
  i770.fallbackFontAssets = i784
  var i787 = i771[37]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 1, i786, '')
  }
  i770.m_FallbackFontAssetTable = i786
  i770.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i771[38], i770.m_CreationSettings)
  var i789 = i771[39]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('TMPro.TMP_FontWeightPair', i789[i + 0]) );
  }
  i770.m_FontWeightTable = i788
  var i791 = i771[40]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('TMPro.TMP_FontWeightPair', i791[i + 0]) );
  }
  i770.fontWeights = i790
  return i770
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i793 = data
  i792.m_FaceIndex = i793[0]
  i792.m_FamilyName = i793[1]
  i792.m_StyleName = i793[2]
  i792.m_PointSize = i793[3]
  i792.m_Scale = i793[4]
  i792.m_UnitsPerEM = i793[5]
  i792.m_LineHeight = i793[6]
  i792.m_AscentLine = i793[7]
  i792.m_CapLine = i793[8]
  i792.m_MeanLine = i793[9]
  i792.m_Baseline = i793[10]
  i792.m_DescentLine = i793[11]
  i792.m_SuperscriptOffset = i793[12]
  i792.m_SuperscriptSize = i793[13]
  i792.m_SubscriptOffset = i793[14]
  i792.m_SubscriptSize = i793[15]
  i792.m_UnderlineOffset = i793[16]
  i792.m_UnderlineThickness = i793[17]
  i792.m_StrikethroughOffset = i793[18]
  i792.m_StrikethroughThickness = i793[19]
  i792.m_TabWidth = i793[20]
  return i792
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i797 = data
  i796.m_Index = i797[0]
  i796.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i797[1], i796.m_Metrics)
  i796.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i797[2], i796.m_GlyphRect)
  i796.m_Scale = i797[3]
  i796.m_AtlasIndex = i797[4]
  i796.m_ClassDefinitionType = i797[5]
  return i796
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i799 = data
  i798.m_Width = i799[0]
  i798.m_Height = i799[1]
  i798.m_HorizontalBearingX = i799[2]
  i798.m_HorizontalBearingY = i799[3]
  i798.m_HorizontalAdvance = i799[4]
  return i798
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i801 = data
  i800.m_X = i801[0]
  i800.m_Y = i801[1]
  i800.m_Width = i801[2]
  i800.m_Height = i801[3]
  return i800
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i804 = root || request.c( 'TMPro.TMP_Character' )
  var i805 = data
  i804.m_ElementType = i805[0]
  i804.m_Unicode = i805[1]
  i804.m_GlyphIndex = i805[2]
  i804.m_Scale = i805[3]
  return i804
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i810 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i811 = data
  i810.Name = i811[0]
  i810.PointSize = i811[1]
  i810.Scale = i811[2]
  i810.CharacterCount = i811[3]
  i810.LineHeight = i811[4]
  i810.Baseline = i811[5]
  i810.Ascender = i811[6]
  i810.CapHeight = i811[7]
  i810.Descender = i811[8]
  i810.CenterLine = i811[9]
  i810.SuperscriptOffset = i811[10]
  i810.SubscriptOffset = i811[11]
  i810.SubSize = i811[12]
  i810.Underline = i811[13]
  i810.UnderlineThickness = i811[14]
  i810.strikethrough = i811[15]
  i810.strikethroughThickness = i811[16]
  i810.TabWidth = i811[17]
  i810.Padding = i811[18]
  i810.AtlasWidth = i811[19]
  i810.AtlasHeight = i811[20]
  return i810
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i814 = root || request.c( 'TMPro.TMP_Glyph' )
  var i815 = data
  i814.id = i815[0]
  i814.x = i815[1]
  i814.y = i815[2]
  i814.width = i815[3]
  i814.height = i815[4]
  i814.xOffset = i815[5]
  i814.yOffset = i815[6]
  i814.xAdvance = i815[7]
  i814.scale = i815[8]
  return i814
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i816 = root || request.c( 'TMPro.KerningTable' )
  var i817 = data
  var i819 = i817[0]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i819.length; i += 1) {
    i818.add(request.d('TMPro.KerningPair', i819[i + 0]));
  }
  i816.kerningPairs = i818
  return i816
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i822 = root || request.c( 'TMPro.KerningPair' )
  var i823 = data
  i822.xOffset = i823[0]
  i822.m_FirstGlyph = i823[1]
  i822.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i823[2], i822.m_FirstGlyphAdjustments)
  i822.m_SecondGlyph = i823[3]
  i822.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i823[4], i822.m_SecondGlyphAdjustments)
  i822.m_IgnoreSpacingAdjustments = !!i823[5]
  return i822
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i825 = data
  var i827 = i825[0]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i827.length; i += 1) {
    i826.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i827[i + 0]));
  }
  i824.m_GlyphPairAdjustmentRecords = i826
  return i824
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i830 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i831 = data
  i830.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i831[0], i830.m_FirstAdjustmentRecord)
  i830.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i831[1], i830.m_SecondAdjustmentRecord)
  i830.m_FeatureLookupFlags = i831[2]
  return i830
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i834 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i835 = data
  i834.sourceFontFileName = i835[0]
  i834.sourceFontFileGUID = i835[1]
  i834.pointSizeSamplingMode = i835[2]
  i834.pointSize = i835[3]
  i834.padding = i835[4]
  i834.packingMode = i835[5]
  i834.atlasWidth = i835[6]
  i834.atlasHeight = i835[7]
  i834.characterSetSelectionMode = i835[8]
  i834.characterSequence = i835[9]
  i834.referencedFontAssetGUID = i835[10]
  i834.referencedTextAssetGUID = i835[11]
  i834.fontStyle = i835[12]
  i834.fontStyleModifier = i835[13]
  i834.renderMode = i835[14]
  i834.includeFontFeatures = !!i835[15]
  return i834
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'regularTypeface')
  request.r(i839[2], i839[3], 0, i838, 'italicTypeface')
  return i838
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i840 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i841 = data
  i840.useSafeMode = !!i841[0]
  i840.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i841[1], i840.safeModeOptions)
  i840.timeScale = i841[2]
  i840.unscaledTimeScale = i841[3]
  i840.useSmoothDeltaTime = !!i841[4]
  i840.maxSmoothUnscaledTime = i841[5]
  i840.rewindCallbackMode = i841[6]
  i840.showUnityEditorReport = !!i841[7]
  i840.logBehaviour = i841[8]
  i840.drawGizmos = !!i841[9]
  i840.defaultRecyclable = !!i841[10]
  i840.defaultAutoPlay = i841[11]
  i840.defaultUpdateType = i841[12]
  i840.defaultTimeScaleIndependent = !!i841[13]
  i840.defaultEaseType = i841[14]
  i840.defaultEaseOvershootOrAmplitude = i841[15]
  i840.defaultEasePeriod = i841[16]
  i840.defaultAutoKill = !!i841[17]
  i840.defaultLoopType = i841[18]
  i840.debugMode = !!i841[19]
  i840.debugStoreTargetId = !!i841[20]
  i840.showPreviewPanel = !!i841[21]
  i840.storeSettingsLocation = i841[22]
  i840.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i841[23], i840.modules)
  i840.createASMDEF = !!i841[24]
  i840.showPlayingTweens = !!i841[25]
  i840.showPausedTweens = !!i841[26]
  return i840
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i842 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i843 = data
  i842.logBehaviour = i843[0]
  i842.nestedTweenFailureBehaviour = i843[1]
  return i842
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i844 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i845 = data
  i844.showPanel = !!i845[0]
  i844.audioEnabled = !!i845[1]
  i844.physicsEnabled = !!i845[2]
  i844.physics2DEnabled = !!i845[3]
  i844.spriteEnabled = !!i845[4]
  i844.uiEnabled = !!i845[5]
  i844.textMeshProEnabled = !!i845[6]
  i844.tk2DEnabled = !!i845[7]
  i844.deAudioEnabled = !!i845[8]
  i844.deUnityExtendedEnabled = !!i845[9]
  i844.epoOutlineEnabled = !!i845[10]
  return i844
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.TMP_Settings' )
  var i847 = data
  i846.m_enableWordWrapping = !!i847[0]
  i846.m_enableKerning = !!i847[1]
  i846.m_enableExtraPadding = !!i847[2]
  i846.m_enableTintAllSprites = !!i847[3]
  i846.m_enableParseEscapeCharacters = !!i847[4]
  i846.m_EnableRaycastTarget = !!i847[5]
  i846.m_GetFontFeaturesAtRuntime = !!i847[6]
  i846.m_missingGlyphCharacter = i847[7]
  i846.m_warningsDisabled = !!i847[8]
  request.r(i847[9], i847[10], 0, i846, 'm_defaultFontAsset')
  i846.m_defaultFontAssetPath = i847[11]
  i846.m_defaultFontSize = i847[12]
  i846.m_defaultAutoSizeMinRatio = i847[13]
  i846.m_defaultAutoSizeMaxRatio = i847[14]
  i846.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i847[15], i847[16] )
  i846.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i847[17], i847[18] )
  i846.m_autoSizeTextContainer = !!i847[19]
  i846.m_IsTextObjectScaleStatic = !!i847[20]
  var i849 = i847[21]
  var i848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 1, i848, '')
  }
  i846.m_fallbackFontAssets = i848
  i846.m_matchMaterialPreset = !!i847[22]
  request.r(i847[23], i847[24], 0, i846, 'm_defaultSpriteAsset')
  i846.m_defaultSpriteAssetPath = i847[25]
  i846.m_enableEmojiSupport = !!i847[26]
  i846.m_MissingCharacterSpriteUnicode = i847[27]
  i846.m_defaultColorGradientPresetsPath = i847[28]
  request.r(i847[29], i847[30], 0, i846, 'm_defaultStyleSheet')
  i846.m_StyleSheetsResourcePath = i847[31]
  request.r(i847[32], i847[33], 0, i846, 'm_leadingCharacters')
  request.r(i847[34], i847[35], 0, i846, 'm_followingCharacters')
  i846.m_UseModernHangulLineBreakingRules = !!i847[36]
  return i846
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'spriteSheet')
  var i853 = i851[2]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i853.length; i += 1) {
    i852.add(request.d('TMPro.TMP_Sprite', i853[i + 0]));
  }
  i850.spriteInfoList = i852
  var i855 = i851[3]
  var i854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 1, i854, '')
  }
  i850.fallbackSpriteAssets = i854
  i850.hashCode = i851[4]
  request.r(i851[5], i851[6], 0, i850, 'material')
  i850.materialHashCode = i851[7]
  i850.m_Version = i851[8]
  i850.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i851[9], i850.m_FaceInfo)
  var i857 = i851[10]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i857.length; i += 1) {
    i856.add(request.d('TMPro.TMP_SpriteCharacter', i857[i + 0]));
  }
  i850.m_SpriteCharacterTable = i856
  var i859 = i851[11]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i859.length; i += 1) {
    i858.add(request.d('TMPro.TMP_SpriteGlyph', i859[i + 0]));
  }
  i850.m_SpriteGlyphTable = i858
  return i850
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.TMP_Sprite' )
  var i863 = data
  i862.name = i863[0]
  i862.hashCode = i863[1]
  i862.unicode = i863[2]
  i862.pivot = new pc.Vec2( i863[3], i863[4] )
  request.r(i863[5], i863[6], 0, i862, 'sprite')
  i862.id = i863[7]
  i862.x = i863[8]
  i862.y = i863[9]
  i862.width = i863[10]
  i862.height = i863[11]
  i862.xOffset = i863[12]
  i862.yOffset = i863[13]
  i862.xAdvance = i863[14]
  i862.scale = i863[15]
  return i862
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i868 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i869 = data
  i868.m_Name = i869[0]
  i868.m_HashCode = i869[1]
  i868.m_ElementType = i869[2]
  i868.m_Unicode = i869[3]
  i868.m_GlyphIndex = i869[4]
  i868.m_Scale = i869[5]
  return i868
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i872 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'sprite')
  i872.m_Index = i873[2]
  i872.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i873[3], i872.m_Metrics)
  i872.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i873[4], i872.m_GlyphRect)
  i872.m_Scale = i873[5]
  i872.m_AtlasIndex = i873[6]
  i872.m_ClassDefinitionType = i873[7]
  return i872
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i875 = data
  var i877 = i875[0]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i877.length; i += 1) {
    i876.add(request.d('TMPro.TMP_Style', i877[i + 0]));
  }
  i874.m_StyleList = i876
  return i874
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i880 = root || request.c( 'TMPro.TMP_Style' )
  var i881 = data
  i880.m_Name = i881[0]
  i880.m_HashCode = i881[1]
  i880.m_OpeningDefinition = i881[2]
  i880.m_ClosingDefinition = i881[3]
  i880.m_OpeningTagArray = i881[4]
  i880.m_ClosingTagArray = i881[5]
  i880.m_OpeningTagUnicodeArray = i881[6]
  i880.m_ClosingTagUnicodeArray = i881[7]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i883 = data
  var i885 = i883[0]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i885[i + 0]) );
  }
  i882.files = i884
  i882.componentToPrefabIds = i883[1]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i889 = data
  i888.path = i889[0]
  request.r(i889[1], i889[2], 0, i888, 'unityObject')
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i891 = data
  var i893 = i891[0]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i893[i + 0]) );
  }
  i890.scriptsExecutionOrder = i892
  var i895 = i891[1]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i895[i + 0]) );
  }
  i890.sortingLayers = i894
  var i897 = i891[2]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i897[i + 0]) );
  }
  i890.cullingLayers = i896
  i890.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i891[3], i890.timeSettings)
  i890.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i891[4], i890.physicsSettings)
  i890.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i891[5], i890.physics2DSettings)
  i890.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i891[6], i890.qualitySettings)
  i890.enableRealtimeShadows = !!i891[7]
  i890.enableAutoInstancing = !!i891[8]
  i890.enableStaticBatching = !!i891[9]
  i890.enableDynamicBatching = !!i891[10]
  i890.lightmapEncodingQuality = i891[11]
  i890.desiredColorSpace = i891[12]
  var i899 = i891[13]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( i899[i + 0] );
  }
  i890.allTags = i898
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i903 = data
  i902.name = i903[0]
  i902.value = i903[1]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i907 = data
  i906.id = i907[0]
  i906.name = i907[1]
  i906.value = i907[2]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i911 = data
  i910.id = i911[0]
  i910.name = i911[1]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i913 = data
  i912.fixedDeltaTime = i913[0]
  i912.maximumDeltaTime = i913[1]
  i912.timeScale = i913[2]
  i912.maximumParticleTimestep = i913[3]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i915 = data
  i914.gravity = new pc.Vec3( i915[0], i915[1], i915[2] )
  i914.defaultSolverIterations = i915[3]
  i914.bounceThreshold = i915[4]
  i914.autoSyncTransforms = !!i915[5]
  i914.autoSimulation = !!i915[6]
  var i917 = i915[7]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i917[i + 0]) );
  }
  i914.collisionMatrix = i916
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i921 = data
  i920.enabled = !!i921[0]
  i920.layerId = i921[1]
  i920.otherLayerId = i921[2]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'material')
  i922.gravity = new pc.Vec2( i923[2], i923[3] )
  i922.positionIterations = i923[4]
  i922.velocityIterations = i923[5]
  i922.velocityThreshold = i923[6]
  i922.maxLinearCorrection = i923[7]
  i922.maxAngularCorrection = i923[8]
  i922.maxTranslationSpeed = i923[9]
  i922.maxRotationSpeed = i923[10]
  i922.baumgarteScale = i923[11]
  i922.baumgarteTOIScale = i923[12]
  i922.timeToSleep = i923[13]
  i922.linearSleepTolerance = i923[14]
  i922.angularSleepTolerance = i923[15]
  i922.defaultContactOffset = i923[16]
  i922.autoSimulation = !!i923[17]
  i922.queriesHitTriggers = !!i923[18]
  i922.queriesStartInColliders = !!i923[19]
  i922.callbacksOnDisable = !!i923[20]
  i922.reuseCollisionCallbacks = !!i923[21]
  i922.autoSyncTransforms = !!i923[22]
  var i925 = i923[23]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i925[i + 0]) );
  }
  i922.collisionMatrix = i924
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i929 = data
  i928.enabled = !!i929[0]
  i928.layerId = i929[1]
  i928.otherLayerId = i929[2]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i931 = data
  var i933 = i931[0]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i933[i + 0]) );
  }
  i930.qualityLevels = i932
  var i935 = i931[1]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( i935[i + 0] );
  }
  i930.names = i934
  i930.shadows = i931[2]
  i930.anisotropicFiltering = i931[3]
  i930.antiAliasing = i931[4]
  i930.lodBias = i931[5]
  i930.shadowCascades = i931[6]
  i930.shadowDistance = i931[7]
  i930.shadowmaskMode = i931[8]
  i930.shadowProjection = i931[9]
  i930.shadowResolution = i931[10]
  i930.softParticles = !!i931[11]
  i930.softVegetation = !!i931[12]
  i930.activeColorSpace = i931[13]
  i930.desiredColorSpace = i931[14]
  i930.masterTextureLimit = i931[15]
  i930.maxQueuedFrames = i931[16]
  i930.particleRaycastBudget = i931[17]
  i930.pixelLightCount = i931[18]
  i930.realtimeReflectionProbes = !!i931[19]
  i930.shadowCascade2Split = i931[20]
  i930.shadowCascade4Split = new pc.Vec3( i931[21], i931[22], i931[23] )
  i930.streamingMipmapsActive = !!i931[24]
  i930.vSyncCount = i931[25]
  i930.asyncUploadBufferSize = i931[26]
  i930.asyncUploadTimeSlice = i931[27]
  i930.billboardsFaceCameraPosition = !!i931[28]
  i930.shadowNearPlaneOffset = i931[29]
  i930.streamingMipmapsMemoryBudget = i931[30]
  i930.maximumLODLevel = i931[31]
  i930.streamingMipmapsAddAllCameras = !!i931[32]
  i930.streamingMipmapsMaxLevelReduction = i931[33]
  i930.streamingMipmapsRenderersPerFrame = i931[34]
  i930.resolutionScalingFixedDPIFactor = i931[35]
  i930.streamingMipmapsMaxFileIORequests = i931[36]
  i930.currentQualityLevel = i931[37]
  return i930
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i939 = data
  i938.xPlacement = i939[0]
  i938.yPlacement = i939[1]
  i938.xAdvance = i939[2]
  i938.yAdvance = i939[3]
  return i938
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i940 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i941 = data
  i940.m_GlyphIndex = i941[0]
  i940.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i941[1], i940.m_GlyphValueRecord)
  return i940
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i943 = data
  i942.m_XPlacement = i943[0]
  i942.m_YPlacement = i943[1]
  i942.m_XAdvance = i943[2]
  i942.m_YAdvance = i943[3]
  return i942
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[11],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[52],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[11],"74":[75],"76":[77],"78":[77],"15":[2],"79":[80],"81":[82],"83":[80],"84":[2],"85":[2],"17":[15],"5":[3,2],"86":[2],"16":[15],"87":[2],"88":[2],"89":[2],"90":[2],"91":[2],"92":[2],"93":[2],"32":[2],"94":[2],"18":[3,2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[3,2],"100":[2],"101":[13],"102":[13],"14":[13],"103":[13],"104":[11],"105":[11],"106":[107],"108":[11],"109":[110],"111":[2],"112":[3,2],"113":[75],"25":[3,2],"114":[115,75],"116":[75],"117":[75,118],"119":[52],"120":[60],"121":[110],"122":[123],"124":[2],"125":[75,2],"7":[2,3],"126":[2],"127":[3,2],"128":[75],"129":[3,2],"130":[2],"131":[80]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RawImage","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.MonoBehaviour","DropZone","UnityEngine.GameObject","UnityEngine.PolygonCollider2D","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.CanvasGroup","DraggableItem","DG.Tweening.DOTweenAnimation","LunaManager","UnityEngine.UI.Button","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "163.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BM_V08_ManhND_AnhPD";

Deserializers.lunaAppID = "34530";

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

Deserializers.buildID = "fd0e2628-5212-4dea-bf50-297d836c01b5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

