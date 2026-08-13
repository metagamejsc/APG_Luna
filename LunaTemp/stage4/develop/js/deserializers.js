var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointSpring' )
  var i479 = data
  i478.spring = i479[0]
  i478.damper = i479[1]
  i478.targetPosition = i479[2]
  return i478
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointMotor' )
  var i481 = data
  i480.m_TargetVelocity = i481[0]
  i480.m_Force = i481[1]
  i480.m_FreeSpin = i481[2]
  return i480
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointLimits' )
  var i483 = data
  i482.m_Min = i483[0]
  i482.m_Max = i483[1]
  i482.m_Bounciness = i483[2]
  i482.m_BounceMinVelocity = i483[3]
  i482.m_ContactDistance = i483[4]
  i482.minBounce = i483[5]
  i482.maxBounce = i483[6]
  return i482
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointDrive' )
  var i485 = data
  i484.m_PositionSpring = i485[0]
  i484.m_PositionDamper = i485[1]
  i484.m_MaximumForce = i485[2]
  i484.m_UseAcceleration = i485[3]
  return i484
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i487 = data
  i486.m_Spring = i487[0]
  i486.m_Damper = i487[1]
  return i486
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i489 = data
  i488.m_Limit = i489[0]
  i488.m_Bounciness = i489[1]
  i488.m_ContactDistance = i489[2]
  return i488
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i491 = data
  i490.m_ExtremumSlip = i491[0]
  i490.m_ExtremumValue = i491[1]
  i490.m_AsymptoteSlip = i491[2]
  i490.m_AsymptoteValue = i491[3]
  i490.m_Stiffness = i491[4]
  return i490
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i493 = data
  i492.m_LowerAngle = i493[0]
  i492.m_UpperAngle = i493[1]
  return i492
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i495 = data
  i494.m_MotorSpeed = i495[0]
  i494.m_MaximumMotorTorque = i495[1]
  return i494
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i497 = data
  i496.m_DampingRatio = i497[0]
  i496.m_Frequency = i497[1]
  i496.m_Angle = i497[2]
  return i496
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i499 = data
  i498.m_LowerTranslation = i499[0]
  i498.m_UpperTranslation = i499[1]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i500 = root || new pc.UnityMaterial()
  var i501 = data
  i500.name = i501[0]
  request.r(i501[1], i501[2], 0, i500, 'shader')
  i500.renderQueue = i501[3]
  i500.enableInstancing = !!i501[4]
  var i503 = i501[5]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i503[i + 0]) );
  }
  i500.floatParameters = i502
  var i505 = i501[6]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i505[i + 0]) );
  }
  i500.colorParameters = i504
  var i507 = i501[7]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i507[i + 0]) );
  }
  i500.vectorParameters = i506
  var i509 = i501[8]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i509[i + 0]) );
  }
  i500.textureParameters = i508
  var i511 = i501[9]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i511[i + 0]) );
  }
  i500.materialFlags = i510
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i515 = data
  i514.name = i515[0]
  i514.value = i515[1]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i519 = data
  i518.name = i519[0]
  i518.value = new pc.Color(i519[1], i519[2], i519[3], i519[4])
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i523 = data
  i522.name = i523[0]
  i522.value = new pc.Vec4( i523[1], i523[2], i523[3], i523[4] )
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i527 = data
  i526.name = i527[0]
  request.r(i527[1], i527[2], 0, i526, 'value')
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i531 = data
  i530.name = i531[0]
  i530.enabled = !!i531[1]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i533 = data
  i532.name = i533[0]
  i532.width = i533[1]
  i532.height = i533[2]
  i532.mipmapCount = i533[3]
  i532.anisoLevel = i533[4]
  i532.filterMode = i533[5]
  i532.hdr = !!i533[6]
  i532.format = i533[7]
  i532.wrapMode = i533[8]
  i532.alphaIsTransparency = !!i533[9]
  i532.alphaSource = i533[10]
  i532.graphicsFormat = i533[11]
  i532.sRGBTexture = !!i533[12]
  i532.desiredColorSpace = i533[13]
  i532.wrapU = i533[14]
  i532.wrapV = i533[15]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i535 = data
  i534.name = i535[0]
  i534.index = i535[1]
  i534.startup = !!i535[2]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i537 = data
  i536.aspect = i537[0]
  i536.orthographic = !!i537[1]
  i536.orthographicSize = i537[2]
  i536.backgroundColor = new pc.Color(i537[3], i537[4], i537[5], i537[6])
  i536.nearClipPlane = i537[7]
  i536.farClipPlane = i537[8]
  i536.fieldOfView = i537[9]
  i536.depth = i537[10]
  i536.clearFlags = i537[11]
  i536.cullingMask = i537[12]
  i536.rect = i537[13]
  request.r(i537[14], i537[15], 0, i536, 'targetTexture')
  i536.usePhysicalProperties = !!i537[16]
  i536.focalLength = i537[17]
  i536.sensorSize = new pc.Vec2( i537[18], i537[19] )
  i536.lensShift = new pc.Vec2( i537[20], i537[21] )
  i536.gateFit = i537[22]
  i536.commandBufferCount = i537[23]
  i536.cameraType = i537[24]
  i536.enabled = !!i537[25]
  return i536
}

Deserializers["CameraAutoSize"] = function (request, data, root) {
  var i538 = root || request.c( 'CameraAutoSize' )
  var i539 = data
  request.r(i539[0], i539[1], 0, i538, 'targetCamera')
  i538.referenceResolution = new pc.Vec2( i539[2], i539[3] )
  i538.referenceOrthographicSize = i539[4]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i541 = data
  i540.name = i541[0]
  i540.tagId = i541[1]
  i540.enabled = !!i541[2]
  i540.isStatic = !!i541[3]
  i540.layer = i541[4]
  return i540
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'm_FirstSelected')
  i542.m_sendNavigationEvents = !!i543[2]
  i542.m_DragThreshold = i543[3]
  return i542
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i545 = data
  i544.m_HorizontalAxis = i545[0]
  i544.m_VerticalAxis = i545[1]
  i544.m_SubmitButton = i545[2]
  i544.m_CancelButton = i545[3]
  i544.m_InputActionsPerSecond = i545[4]
  i544.m_RepeatDelay = i545[5]
  i544.m_ForceModuleActive = !!i545[6]
  i544.m_SendPointerHoverToParent = !!i545[7]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i547 = data
  i546.pivot = new pc.Vec2( i547[0], i547[1] )
  i546.anchorMin = new pc.Vec2( i547[2], i547[3] )
  i546.anchorMax = new pc.Vec2( i547[4], i547[5] )
  i546.sizeDelta = new pc.Vec2( i547[6], i547[7] )
  i546.anchoredPosition3D = new pc.Vec3( i547[8], i547[9], i547[10] )
  i546.rotation = new pc.Quat(i547[11], i547[12], i547[13], i547[14])
  i546.scale = new pc.Vec3( i547[15], i547[16], i547[17] )
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i549 = data
  i548.planeDistance = i549[0]
  i548.referencePixelsPerUnit = i549[1]
  i548.isFallbackOverlay = !!i549[2]
  i548.renderMode = i549[3]
  i548.renderOrder = i549[4]
  i548.sortingLayerName = i549[5]
  i548.sortingOrder = i549[6]
  i548.scaleFactor = i549[7]
  request.r(i549[8], i549[9], 0, i548, 'worldCamera')
  i548.overrideSorting = !!i549[10]
  i548.pixelPerfect = !!i549[11]
  i548.targetDisplay = i549[12]
  i548.overridePixelPerfect = !!i549[13]
  i548.enabled = !!i549[14]
  return i548
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i551 = data
  i550.m_UiScaleMode = i551[0]
  i550.m_ReferencePixelsPerUnit = i551[1]
  i550.m_ScaleFactor = i551[2]
  i550.m_ReferenceResolution = new pc.Vec2( i551[3], i551[4] )
  i550.m_ScreenMatchMode = i551[5]
  i550.m_MatchWidthOrHeight = i551[6]
  i550.m_PhysicalUnit = i551[7]
  i550.m_FallbackScreenDPI = i551[8]
  i550.m_DefaultSpriteDPI = i551[9]
  i550.m_DynamicPixelsPerUnit = i551[10]
  i550.m_PresetInfoIsWorld = !!i551[11]
  return i550
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i553 = data
  i552.m_IgnoreReversedGraphics = !!i553[0]
  i552.m_BlockingObjects = i553[1]
  i552.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i553[2] )
  return i552
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i554 = root || request.c( 'Playable.GameManager' )
  var i555 = data
  i554._totalEvent = i555[0]
  i554._endTime = i555[1]
  request.r(i555[2], i555[3], 0, i554, '_backgroundMusic')
  request.r(i555[4], i555[5], 0, i554, '_backgroundTexture')
  i554._backgroundColor = new pc.Color(i555[6], i555[7], i555[8], i555[9])
  request.r(i555[10], i555[11], 0, i554, '_progressCount')
  request.r(i555[12], i555[13], 0, i554, '_txtCount')
  request.r(i555[14], i555[15], 0, i554, '_txtTime')
  var i557 = i555[16]
  var i556 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i557.length; i += 2) {
  request.r(i557[i + 0], i557[i + 1], 1, i556, '')
  }
  i554._btnCTA = i556
  request.r(i555[17], i555[18], 0, i554, '_objEndGame')
  request.r(i555[19], i555[20], 0, i554, '_background')
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i561 = data
  i560.cullTransparentMesh = !!i561[0]
  return i560
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.Image' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'm_Sprite')
  i562.m_Type = i563[2]
  i562.m_PreserveAspect = !!i563[3]
  i562.m_FillCenter = !!i563[4]
  i562.m_FillMethod = i563[5]
  i562.m_FillAmount = i563[6]
  i562.m_FillClockwise = !!i563[7]
  i562.m_FillOrigin = i563[8]
  i562.m_UseSpriteMesh = !!i563[9]
  i562.m_PixelsPerUnitMultiplier = i563[10]
  request.r(i563[11], i563[12], 0, i562, 'm_Material')
  i562.m_Maskable = !!i563[13]
  i562.m_Color = new pc.Color(i563[14], i563[15], i563[16], i563[17])
  i562.m_RaycastTarget = !!i563[18]
  i562.m_RaycastPadding = new pc.Vec4( i563[19], i563[20], i563[21], i563[22] )
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

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i566 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i567 = data
  i566.m_hasFontAssetChanged = !!i567[0]
  request.r(i567[1], i567[2], 0, i566, 'm_baseMaterial')
  i566.m_maskOffset = new pc.Vec4( i567[3], i567[4], i567[5], i567[6] )
  i566.m_text = i567[7]
  i566.m_isRightToLeft = !!i567[8]
  request.r(i567[9], i567[10], 0, i566, 'm_fontAsset')
  request.r(i567[11], i567[12], 0, i566, 'm_sharedMaterial')
  var i569 = i567[13]
  var i568 = []
  for(var i = 0; i < i569.length; i += 2) {
  request.r(i569[i + 0], i569[i + 1], 2, i568, '')
  }
  i566.m_fontSharedMaterials = i568
  request.r(i567[14], i567[15], 0, i566, 'm_fontMaterial')
  var i571 = i567[16]
  var i570 = []
  for(var i = 0; i < i571.length; i += 2) {
  request.r(i571[i + 0], i571[i + 1], 2, i570, '')
  }
  i566.m_fontMaterials = i570
  i566.m_fontColor32 = UnityEngine.Color32.ConstructColor(i567[17], i567[18], i567[19], i567[20])
  i566.m_fontColor = new pc.Color(i567[21], i567[22], i567[23], i567[24])
  i566.m_enableVertexGradient = !!i567[25]
  i566.m_colorMode = i567[26]
  i566.m_fontColorGradient = request.d('TMPro.VertexGradient', i567[27], i566.m_fontColorGradient)
  request.r(i567[28], i567[29], 0, i566, 'm_fontColorGradientPreset')
  request.r(i567[30], i567[31], 0, i566, 'm_spriteAsset')
  i566.m_tintAllSprites = !!i567[32]
  request.r(i567[33], i567[34], 0, i566, 'm_StyleSheet')
  i566.m_TextStyleHashCode = i567[35]
  i566.m_overrideHtmlColors = !!i567[36]
  i566.m_faceColor = UnityEngine.Color32.ConstructColor(i567[37], i567[38], i567[39], i567[40])
  i566.m_fontSize = i567[41]
  i566.m_fontSizeBase = i567[42]
  i566.m_fontWeight = i567[43]
  i566.m_enableAutoSizing = !!i567[44]
  i566.m_fontSizeMin = i567[45]
  i566.m_fontSizeMax = i567[46]
  i566.m_fontStyle = i567[47]
  i566.m_HorizontalAlignment = i567[48]
  i566.m_VerticalAlignment = i567[49]
  i566.m_textAlignment = i567[50]
  i566.m_characterSpacing = i567[51]
  i566.m_wordSpacing = i567[52]
  i566.m_lineSpacing = i567[53]
  i566.m_lineSpacingMax = i567[54]
  i566.m_paragraphSpacing = i567[55]
  i566.m_charWidthMaxAdj = i567[56]
  i566.m_enableWordWrapping = !!i567[57]
  i566.m_wordWrappingRatios = i567[58]
  i566.m_overflowMode = i567[59]
  request.r(i567[60], i567[61], 0, i566, 'm_linkedTextComponent')
  request.r(i567[62], i567[63], 0, i566, 'parentLinkedComponent')
  i566.m_enableKerning = !!i567[64]
  i566.m_enableExtraPadding = !!i567[65]
  i566.checkPaddingRequired = !!i567[66]
  i566.m_isRichText = !!i567[67]
  i566.m_parseCtrlCharacters = !!i567[68]
  i566.m_isOrthographic = !!i567[69]
  i566.m_isCullingEnabled = !!i567[70]
  i566.m_horizontalMapping = i567[71]
  i566.m_verticalMapping = i567[72]
  i566.m_uvLineOffset = i567[73]
  i566.m_geometrySortingOrder = i567[74]
  i566.m_IsTextObjectScaleStatic = !!i567[75]
  i566.m_VertexBufferAutoSizeReduction = !!i567[76]
  i566.m_useMaxVisibleDescender = !!i567[77]
  i566.m_pageToDisplay = i567[78]
  i566.m_margin = new pc.Vec4( i567[79], i567[80], i567[81], i567[82] )
  i566.m_isUsingLegacyAnimationComponent = !!i567[83]
  i566.m_isVolumetricText = !!i567[84]
  request.r(i567[85], i567[86], 0, i566, 'm_Material')
  i566.m_Maskable = !!i567[87]
  i566.m_Color = new pc.Color(i567[88], i567[89], i567[90], i567[91])
  i566.m_RaycastTarget = !!i567[92]
  i566.m_RaycastPadding = new pc.Vec4( i567[93], i567[94], i567[95], i567[96] )
  return i566
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i574 = root || request.c( 'TMPro.VertexGradient' )
  var i575 = data
  i574.topLeft = new pc.Color(i575[0], i575[1], i575[2], i575[3])
  i574.topRight = new pc.Color(i575[4], i575[5], i575[6], i575[7])
  i574.bottomLeft = new pc.Color(i575[8], i575[9], i575[10], i575[11])
  i574.bottomRight = new pc.Color(i575[12], i575[13], i575[14], i575[15])
  return i574
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.UI.Button' )
  var i577 = data
  i576.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i577[0], i576.m_OnClick)
  i576.m_Navigation = request.d('UnityEngine.UI.Navigation', i577[1], i576.m_Navigation)
  i576.m_Transition = i577[2]
  i576.m_Colors = request.d('UnityEngine.UI.ColorBlock', i577[3], i576.m_Colors)
  i576.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i577[4], i576.m_SpriteState)
  i576.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i577[5], i576.m_AnimationTriggers)
  i576.m_Interactable = !!i577[6]
  request.r(i577[7], i577[8], 0, i576, 'm_TargetGraphic')
  return i576
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i579 = data
  i578.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i579[0], i578.m_PersistentCalls)
  return i578
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i581 = data
  var i583 = i581[0]
  var i582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i583.length; i += 1) {
    i582.add(request.d('UnityEngine.Events.PersistentCall', i583[i + 0]));
  }
  i580.m_Calls = i582
  return i580
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'm_Target')
  i586.m_TargetAssemblyTypeName = i587[2]
  i586.m_MethodName = i587[3]
  i586.m_Mode = i587[4]
  i586.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i587[5], i586.m_Arguments)
  i586.m_CallState = i587[6]
  return i586
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'm_ObjectArgument')
  i588.m_ObjectArgumentAssemblyTypeName = i589[2]
  i588.m_IntArgument = i589[3]
  i588.m_FloatArgument = i589[4]
  i588.m_StringArgument = i589[5]
  i588.m_BoolArgument = !!i589[6]
  return i588
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i591 = data
  i590.m_Mode = i591[0]
  i590.m_WrapAround = !!i591[1]
  request.r(i591[2], i591[3], 0, i590, 'm_SelectOnUp')
  request.r(i591[4], i591[5], 0, i590, 'm_SelectOnDown')
  request.r(i591[6], i591[7], 0, i590, 'm_SelectOnLeft')
  request.r(i591[8], i591[9], 0, i590, 'm_SelectOnRight')
  return i590
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i593 = data
  i592.m_NormalColor = new pc.Color(i593[0], i593[1], i593[2], i593[3])
  i592.m_HighlightedColor = new pc.Color(i593[4], i593[5], i593[6], i593[7])
  i592.m_PressedColor = new pc.Color(i593[8], i593[9], i593[10], i593[11])
  i592.m_SelectedColor = new pc.Color(i593[12], i593[13], i593[14], i593[15])
  i592.m_DisabledColor = new pc.Color(i593[16], i593[17], i593[18], i593[19])
  i592.m_ColorMultiplier = i593[20]
  i592.m_FadeDuration = i593[21]
  return i592
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'm_HighlightedSprite')
  request.r(i595[2], i595[3], 0, i594, 'm_PressedSprite')
  request.r(i595[4], i595[5], 0, i594, 'm_SelectedSprite')
  request.r(i595[6], i595[7], 0, i594, 'm_DisabledSprite')
  return i594
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i597 = data
  i596.m_NormalTrigger = i597[0]
  i596.m_HighlightedTrigger = i597[1]
  i596.m_PressedTrigger = i597[2]
  i596.m_SelectedTrigger = i597[3]
  i596.m_DisabledTrigger = i597[4]
  return i596
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.UI.Mask' )
  var i599 = data
  i598.m_ShowMaskGraphic = !!i599[0]
  return i598
}

Deserializers["Playable.GameController"] = function (request, data, root) {
  var i600 = root || request.c( 'Playable.GameController' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'skeletonAnimation')
  var i603 = i601[2]
  var i602 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i603.length; i += 1) {
    i602.add(i603[i + 0]);
  }
  i600._nameSkin = i602
  request.r(i601[3], i601[4], 0, i600, '_hand')
  request.r(i601[5], i601[6], 0, i600, '_pos1')
  request.r(i601[7], i601[8], 0, i600, '_pos2')
  request.r(i601[9], i601[10], 0, i600, '_handSkeleton')
  i600._handAnimName = i601[11]
  i600._handAnimDelay = i601[12]
  i600._handMoveDuration = i601[13]
  request.r(i601[14], i601[15], 0, i600, '_txtSub')
  request.r(i601[16], i601[17], 0, i600, '_soundIntro')
  return i600
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i606 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'skeletonDataAsset')
  request.r(i607[2], i607[3], 0, i606, 'additiveMaterial')
  request.r(i607[4], i607[5], 0, i606, 'multiplyMaterial')
  request.r(i607[6], i607[7], 0, i606, 'screenMaterial')
  i606.forceAdditiveMaterial = !!i607[8]
  i606.initialSkinName = i607[9]
  i606.initialFlipX = !!i607[10]
  i606.initialFlipY = !!i607[11]
  i606.startingAnimation = i607[12]
  i606.startingLoop = !!i607[13]
  i606.timeScale = i607[14]
  i606.freeze = !!i607[15]
  i606.layoutScaleMode = i607[16]
  i606.updateWhenInvisible = i607[17]
  i606.allowMultipleCanvasRenderers = !!i607[18]
  var i609 = i607[19]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i609.length; i += 2) {
  request.r(i609[i + 0], i609[i + 1], 1, i608, '')
  }
  i606.canvasRenderers = i608
  i606.enableSeparatorSlots = !!i607[20]
  i606.updateSeparatorPartLocation = !!i607[21]
  i606.updateSeparatorPartScale = !!i607[22]
  i606.disableMeshAssignmentOnOverride = !!i607[23]
  i606.m_SkeletonColor = new pc.Color(i607[24], i607[25], i607[26], i607[27])
  i606.referenceSize = new pc.Vec2( i607[28], i607[29] )
  i606.pivotOffset = new pc.Vec2( i607[30], i607[31] )
  i606.referenceScale = i607[32]
  i606.layoutScale = i607[33]
  i606.rectTransformSize = new pc.Vec2( i607[34], i607[35] )
  i606.editReferenceRect = !!i607[36]
  var i611 = i607[37]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( i611[i + 0] );
  }
  i606.separatorSlotNames = i610
  var i613 = i607[38]
  var i612 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i613.length; i += 2) {
  request.r(i613[i + 0], i613[i + 1], 1, i612, '')
  }
  i606.separatorParts = i612
  i606.physicsPositionInheritanceFactor = new pc.Vec2( i607[39], i607[40] )
  i606.physicsRotationInheritanceFactor = i607[41]
  request.r(i607[42], i607[43], 0, i606, 'physicsMovementRelativeTo')
  i606.meshGenerator = request.d('Spine.Unity.MeshGenerator', i607[44], i606.meshGenerator)
  i606.updateTiming = i607[45]
  i606.unscaledTime = !!i607[46]
  request.r(i607[47], i607[48], 0, i606, 'm_Material')
  i606.m_Maskable = !!i607[49]
  i606.m_Color = new pc.Color(i607[50], i607[51], i607[52], i607[53])
  i606.m_RaycastTarget = !!i607[54]
  i606.m_RaycastPadding = new pc.Vec4( i607[55], i607[56], i607[57], i607[58] )
  return i606
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i620 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i621 = data
  i620.settings = request.d('Spine.Unity.MeshGenerator+Settings', i621[0], i620.settings)
  return i620
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i622 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i623 = data
  i622.useClipping = !!i623[0]
  i622.zSpacing = i623[1]
  i622.tintBlack = !!i623[2]
  i622.canvasGroupCompatible = !!i623[3]
  i622.pmaVertexColors = !!i623[4]
  i622.addNormals = !!i623[5]
  i622.calculateTangents = !!i623[6]
  i622.immutableTriangles = !!i623[7]
  return i622
}

Deserializers["SpineEventSoundPlayer"] = function (request, data, root) {
  var i624 = root || request.c( 'SpineEventSoundPlayer' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'skeletonAnimation')
  request.r(i625[2], i625[3], 0, i624, 'skeletonGraphic')
  request.r(i625[4], i625[5], 0, i624, 'audioSource')
  var i627 = i625[6]
  var i626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 1, i626, '')
  }
  i624.audioClips = i626
  return i624
}

Deserializers["Playable.TargetLevel37"] = function (request, data, root) {
  var i630 = root || request.c( 'Playable.TargetLevel37' )
  var i631 = data
  var i633 = i631[0]
  var i632 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.BoyInfo')))
  for(var i = 0; i < i633.length; i += 1) {
    i632.add(request.d('Playable.BoyInfo', i633[i + 0]));
  }
  i630.boyInfos = i632
  i630._isKeepLastBoy = !!i631[1]
  i630._delayDeactivate = i631[2]
  i630._delayTime = i631[3]
  i630._isInteractable = !!i631[4]
  request.r(i631[5], i631[6], 0, i630, 'targetRect')
  return i630
}

Deserializers["Playable.BoyInfo"] = function (request, data, root) {
  var i636 = root || request.c( 'Playable.BoyInfo' )
  var i637 = data
  i636.Type = i637[0]
  request.r(i637[1], i637[2], 0, i636, 'Root')
  i636.AnimInfo = request.d('Playable.AnimInfo', i637[3], i636.AnimInfo)
  i636.IsClickable = !!i637[4]
  request.r(i637[5], i637[6], 0, i636, 'Sound')
  i636.Sub = i637[7]
  return i636
}

Deserializers["Playable.AnimInfo"] = function (request, data, root) {
  var i638 = root || request.c( 'Playable.AnimInfo' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'Skeleton')
  request.r(i639[2], i639[3], 0, i638, 'Item')
  request.r(i639[4], i639[5], 0, i638, 'Meter')
  i638.AnimDefault = i639[6]
  var i641 = i639[7]
  var i640 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.AnimStep')))
  for(var i = 0; i < i641.length; i += 1) {
    i640.add(request.d('Playable.AnimStep', i641[i + 0]));
  }
  i638.AnimWin = i640
  var i643 = i639[8]
  var i642 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.AnimStep')))
  for(var i = 0; i < i643.length; i += 1) {
    i642.add(request.d('Playable.AnimStep', i643[i + 0]));
  }
  i638.AnimLoseSteps = i642
  var i645 = i639[9]
  var i644 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i645.length; i += 1) {
    i644.add(i645[i + 0]);
  }
  i638.AnimItem = i644
  i638.MeterAnim = i639[10]
  return i638
}

Deserializers["Playable.AnimStep"] = function (request, data, root) {
  var i648 = root || request.c( 'Playable.AnimStep' )
  var i649 = data
  i648.Name = i649[0]
  i648.IsLoop = !!i649[1]
  return i648
}

Deserializers["Playable.ItemLevel37"] = function (request, data, root) {
  var i650 = root || request.c( 'Playable.ItemLevel37' )
  var i651 = data
  i650._targetType = i651[0]
  i650._isHaveAnim = !!i651[1]
  i650._nameSkin = i651[2]
  request.r(i651[3], i651[4], 0, i650, '_objActive')
  var i653 = i651[5]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 1, i652, '')
  }
  i650._objsDisabled = i652
  i650._isTriggerOnDragOut = !!i651[6]
  request.r(i651[7], i651[8], 0, i650, '_dragOutTarget')
  i650._isInteractable = !!i651[9]
  i650.returnDuration = i651[10]
  request.r(i651[11], i651[12], 0, i650, 'itemRect')
  request.r(i651[13], i651[14], 0, i650, 'pressSound')
  return i650
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i656 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i657 = data
  i656.targetIsSelf = !!i657[0]
  request.r(i657[1], i657[2], 0, i656, 'targetGO')
  i656.tweenTargetIsTargetGO = !!i657[3]
  i656.delay = i657[4]
  i656.duration = i657[5]
  i656.easeType = i657[6]
  i656.easeCurve = new pc.AnimationCurve( { keys_flow: i657[7] } )
  i656.loopType = i657[8]
  i656.loops = i657[9]
  i656.id = i657[10]
  i656.isRelative = !!i657[11]
  i656.isFrom = !!i657[12]
  i656.isIndependentUpdate = !!i657[13]
  i656.autoKill = !!i657[14]
  i656.autoGenerate = !!i657[15]
  i656.isActive = !!i657[16]
  i656.isValid = !!i657[17]
  request.r(i657[18], i657[19], 0, i656, 'target')
  i656.animationType = i657[20]
  i656.targetType = i657[21]
  i656.forcedTargetType = i657[22]
  i656.autoPlay = !!i657[23]
  i656.useTargetAsV3 = !!i657[24]
  i656.endValueFloat = i657[25]
  i656.endValueV3 = new pc.Vec3( i657[26], i657[27], i657[28] )
  i656.endValueV2 = new pc.Vec2( i657[29], i657[30] )
  i656.endValueColor = new pc.Color(i657[31], i657[32], i657[33], i657[34])
  i656.endValueString = i657[35]
  i656.endValueRect = UnityEngine.Rect.MinMaxRect(i657[36], i657[37], i657[38], i657[39])
  request.r(i657[40], i657[41], 0, i656, 'endValueTransform')
  i656.optionalBool0 = !!i657[42]
  i656.optionalBool1 = !!i657[43]
  i656.optionalFloat0 = i657[44]
  i656.optionalInt0 = i657[45]
  i656.optionalRotationMode = i657[46]
  i656.optionalScrambleMode = i657[47]
  i656.optionalShakeRandomnessMode = i657[48]
  i656.optionalString = i657[49]
  i656.updateType = i657[50]
  i656.isSpeedBased = !!i657[51]
  i656.hasOnStart = !!i657[52]
  i656.hasOnPlay = !!i657[53]
  i656.hasOnUpdate = !!i657[54]
  i656.hasOnStepComplete = !!i657[55]
  i656.hasOnComplete = !!i657[56]
  i656.hasOnTweenCreated = !!i657[57]
  i656.hasOnRewind = !!i657[58]
  i656.onStart = request.d('UnityEngine.Events.UnityEvent', i657[59], i656.onStart)
  i656.onPlay = request.d('UnityEngine.Events.UnityEvent', i657[60], i656.onPlay)
  i656.onUpdate = request.d('UnityEngine.Events.UnityEvent', i657[61], i656.onUpdate)
  i656.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i657[62], i656.onStepComplete)
  i656.onComplete = request.d('UnityEngine.Events.UnityEvent', i657[63], i656.onComplete)
  i656.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i657[64], i656.onTweenCreated)
  i656.onRewind = request.d('UnityEngine.Events.UnityEvent', i657[65], i656.onRewind)
  return i656
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i659 = data
  i658.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i659[0], i658.m_PersistentCalls)
  return i658
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i660 = root || request.c( 'Playable.AudioManager' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, '_audioMusic')
  request.r(i661[2], i661[3], 0, i660, '_audioSound')
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i663 = data
  i662.ambientIntensity = i663[0]
  i662.reflectionIntensity = i663[1]
  i662.ambientMode = i663[2]
  i662.ambientLight = new pc.Color(i663[3], i663[4], i663[5], i663[6])
  i662.ambientSkyColor = new pc.Color(i663[7], i663[8], i663[9], i663[10])
  i662.ambientGroundColor = new pc.Color(i663[11], i663[12], i663[13], i663[14])
  i662.ambientEquatorColor = new pc.Color(i663[15], i663[16], i663[17], i663[18])
  i662.fogColor = new pc.Color(i663[19], i663[20], i663[21], i663[22])
  i662.fogEndDistance = i663[23]
  i662.fogStartDistance = i663[24]
  i662.fogDensity = i663[25]
  i662.fog = !!i663[26]
  request.r(i663[27], i663[28], 0, i662, 'skybox')
  i662.fogMode = i663[29]
  var i665 = i663[30]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i665[i + 0]) );
  }
  i662.lightmaps = i664
  i662.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i663[31], i662.lightProbes)
  i662.lightmapsMode = i663[32]
  i662.mixedBakeMode = i663[33]
  i662.environmentLightingMode = i663[34]
  i662.ambientProbe = new pc.SphericalHarmonicsL2(i663[35])
  request.r(i663[36], i663[37], 0, i662, 'customReflection')
  request.r(i663[38], i663[39], 0, i662, 'defaultReflection')
  i662.defaultReflectionMode = i663[40]
  i662.defaultReflectionResolution = i663[41]
  i662.sunLightObjectId = i663[42]
  i662.pixelLightCount = i663[43]
  i662.defaultReflectionHDR = !!i663[44]
  i662.hasLightDataAsset = !!i663[45]
  i662.hasManualGenerate = !!i663[46]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'lightmapColor')
  request.r(i669[2], i669[3], 0, i668, 'lightmapDirection')
  request.r(i669[4], i669[5], 0, i668, 'shadowMask')
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i670 = root || new UnityEngine.LightProbes()
  var i671 = data
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i679 = data
  var i681 = i679[0]
  var i680 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i681.length; i += 1) {
    i680.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i681[i + 0]));
  }
  i678.ShaderCompilationErrors = i680
  i678.name = i679[1]
  i678.guid = i679[2]
  var i683 = i679[3]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( i683[i + 0] );
  }
  i678.shaderDefinedKeywords = i682
  var i685 = i679[4]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i685[i + 0]) );
  }
  i678.passes = i684
  var i687 = i679[5]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i687[i + 0]) );
  }
  i678.usePasses = i686
  var i689 = i679[6]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i689[i + 0]) );
  }
  i678.defaultParameterValues = i688
  request.r(i679[7], i679[8], 0, i678, 'unityFallbackShader')
  i678.readDepth = !!i679[9]
  i678.hasDepthOnlyPass = !!i679[10]
  i678.isCreatedByShaderGraph = !!i679[11]
  i678.disableBatching = !!i679[12]
  i678.compiled = !!i679[13]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i693 = data
  i692.shaderName = i693[0]
  i692.errorMessage = i693[1]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i696 = root || new pc.UnityShaderPass()
  var i697 = data
  i696.id = i697[0]
  i696.subShaderIndex = i697[1]
  i696.name = i697[2]
  i696.passType = i697[3]
  i696.grabPassTextureName = i697[4]
  i696.usePass = !!i697[5]
  i696.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[6], i696.zTest)
  i696.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[7], i696.zWrite)
  i696.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[8], i696.culling)
  i696.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i697[9], i696.blending)
  i696.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i697[10], i696.alphaBlending)
  i696.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[11], i696.colorWriteMask)
  i696.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[12], i696.offsetUnits)
  i696.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[13], i696.offsetFactor)
  i696.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[14], i696.stencilRef)
  i696.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[15], i696.stencilReadMask)
  i696.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[16], i696.stencilWriteMask)
  i696.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i697[17], i696.stencilOp)
  i696.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i697[18], i696.stencilOpFront)
  i696.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i697[19], i696.stencilOpBack)
  var i699 = i697[20]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i699[i + 0]) );
  }
  i696.tags = i698
  var i701 = i697[21]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( i701[i + 0] );
  }
  i696.passDefinedKeywords = i700
  var i703 = i697[22]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i703[i + 0]) );
  }
  i696.passDefinedKeywordGroups = i702
  var i705 = i697[23]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i705[i + 0]) );
  }
  i696.variants = i704
  var i707 = i697[24]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i707[i + 0]) );
  }
  i696.excludedVariants = i706
  i696.hasDepthReader = !!i697[25]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i709 = data
  i708.val = i709[0]
  i708.name = i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i711 = data
  i710.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[0], i710.src)
  i710.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[1], i710.dst)
  i710.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[2], i710.op)
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i713 = data
  i712.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[0], i712.pass)
  i712.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[1], i712.fail)
  i712.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[2], i712.zFail)
  i712.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[3], i712.comp)
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i717 = data
  i716.name = i717[0]
  i716.value = i717[1]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i721 = data
  var i723 = i721[0]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( i723[i + 0] );
  }
  i720.keywords = i722
  i720.hasDiscard = !!i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i727 = data
  i726.passId = i727[0]
  i726.subShaderIndex = i727[1]
  var i729 = i727[2]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( i729[i + 0] );
  }
  i726.keywords = i728
  i726.vertexProgram = i727[3]
  i726.fragmentProgram = i727[4]
  i726.exportedForWebGl2 = !!i727[5]
  i726.readDepth = !!i727[6]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'shader')
  i732.pass = i733[2]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i737 = data
  i736.name = i737[0]
  i736.type = i737[1]
  i736.value = new pc.Vec4( i737[2], i737[3], i737[4], i737[5] )
  i736.textureValue = i737[6]
  i736.shaderPropertyFlag = i737[7]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i739 = data
  i738.name = i739[0]
  request.r(i739[1], i739[2], 0, i738, 'texture')
  i738.aabb = i739[3]
  i738.vertices = i739[4]
  i738.triangles = i739[5]
  i738.textureRect = UnityEngine.Rect.MinMaxRect(i739[6], i739[7], i739[8], i739[9])
  i738.packedRect = UnityEngine.Rect.MinMaxRect(i739[10], i739[11], i739[12], i739[13])
  i738.border = new pc.Vec4( i739[14], i739[15], i739[16], i739[17] )
  i738.transparency = i739[18]
  i738.bounds = i739[19]
  i738.pixelsPerUnit = i739[20]
  i738.textureWidth = i739[21]
  i738.textureHeight = i739[22]
  i738.nativeSize = new pc.Vec2( i739[23], i739[24] )
  i738.pivot = new pc.Vec2( i739[25], i739[26] )
  i738.textureRectOffset = new pc.Vec2( i739[27], i739[28] )
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i741 = data
  i740.name = i741[0]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i743 = data
  i742.name = i743[0]
  i742.ascent = i743[1]
  i742.originalLineHeight = i743[2]
  i742.fontSize = i743[3]
  var i745 = i743[4]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i745[i + 0]) );
  }
  i742.characterInfo = i744
  request.r(i743[5], i743[6], 0, i742, 'texture')
  i742.originalFontSize = i743[7]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i749 = data
  i748.index = i749[0]
  i748.advance = i749[1]
  i748.bearing = i749[2]
  i748.glyphWidth = i749[3]
  i748.glyphHeight = i749[4]
  i748.minX = i749[5]
  i748.maxX = i749[6]
  i748.minY = i749[7]
  i748.maxY = i749[8]
  i748.uvBottomLeftX = i749[9]
  i748.uvBottomLeftY = i749[10]
  i748.uvBottomRightX = i749[11]
  i748.uvBottomRightY = i749[12]
  i748.uvTopLeftX = i749[13]
  i748.uvTopLeftY = i749[14]
  i748.uvTopRightX = i749[15]
  i748.uvTopRightY = i749[16]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i751 = data
  i750.name = i751[0]
  i750.bytes64 = i751[1]
  i750.data = i751[2]
  return i750
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i752 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'atlas')
  i752.normalStyle = i753[2]
  i752.normalSpacingOffset = i753[3]
  i752.boldStyle = i753[4]
  i752.boldSpacing = i753[5]
  i752.italicStyle = i753[6]
  i752.tabSize = i753[7]
  i752.hashCode = i753[8]
  request.r(i753[9], i753[10], 0, i752, 'material')
  i752.materialHashCode = i753[11]
  i752.m_Version = i753[12]
  i752.m_SourceFontFileGUID = i753[13]
  request.r(i753[14], i753[15], 0, i752, 'm_SourceFontFile_EditorRef')
  request.r(i753[16], i753[17], 0, i752, 'm_SourceFontFile')
  i752.m_AtlasPopulationMode = i753[18]
  i752.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i753[19], i752.m_FaceInfo)
  var i755 = i753[20]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i755.length; i += 1) {
    i754.add(request.d('UnityEngine.TextCore.Glyph', i755[i + 0]));
  }
  i752.m_GlyphTable = i754
  var i757 = i753[21]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i757.length; i += 1) {
    i756.add(request.d('TMPro.TMP_Character', i757[i + 0]));
  }
  i752.m_CharacterTable = i756
  var i759 = i753[22]
  var i758 = []
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 2, i758, '')
  }
  i752.m_AtlasTextures = i758
  i752.m_AtlasTextureIndex = i753[23]
  i752.m_IsMultiAtlasTexturesEnabled = !!i753[24]
  i752.m_ClearDynamicDataOnBuild = !!i753[25]
  var i761 = i753[26]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i761.length; i += 1) {
    i760.add(request.d('UnityEngine.TextCore.GlyphRect', i761[i + 0]));
  }
  i752.m_UsedGlyphRects = i760
  var i763 = i753[27]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i763.length; i += 1) {
    i762.add(request.d('UnityEngine.TextCore.GlyphRect', i763[i + 0]));
  }
  i752.m_FreeGlyphRects = i762
  i752.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i753[28], i752.m_fontInfo)
  i752.m_AtlasWidth = i753[29]
  i752.m_AtlasHeight = i753[30]
  i752.m_AtlasPadding = i753[31]
  i752.m_AtlasRenderMode = i753[32]
  var i765 = i753[33]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(request.d('TMPro.TMP_Glyph', i765[i + 0]));
  }
  i752.m_glyphInfoList = i764
  i752.m_KerningTable = request.d('TMPro.KerningTable', i753[34], i752.m_KerningTable)
  i752.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i753[35], i752.m_FontFeatureTable)
  var i767 = i753[36]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i767.length; i += 2) {
  request.r(i767[i + 0], i767[i + 1], 1, i766, '')
  }
  i752.fallbackFontAssets = i766
  var i769 = i753[37]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 1, i768, '')
  }
  i752.m_FallbackFontAssetTable = i768
  i752.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i753[38], i752.m_CreationSettings)
  var i771 = i753[39]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('TMPro.TMP_FontWeightPair', i771[i + 0]) );
  }
  i752.m_FontWeightTable = i770
  var i773 = i753[40]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('TMPro.TMP_FontWeightPair', i773[i + 0]) );
  }
  i752.fontWeights = i772
  return i752
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i775 = data
  i774.m_FaceIndex = i775[0]
  i774.m_FamilyName = i775[1]
  i774.m_StyleName = i775[2]
  i774.m_PointSize = i775[3]
  i774.m_Scale = i775[4]
  i774.m_UnitsPerEM = i775[5]
  i774.m_LineHeight = i775[6]
  i774.m_AscentLine = i775[7]
  i774.m_CapLine = i775[8]
  i774.m_MeanLine = i775[9]
  i774.m_Baseline = i775[10]
  i774.m_DescentLine = i775[11]
  i774.m_SuperscriptOffset = i775[12]
  i774.m_SuperscriptSize = i775[13]
  i774.m_SubscriptOffset = i775[14]
  i774.m_SubscriptSize = i775[15]
  i774.m_UnderlineOffset = i775[16]
  i774.m_UnderlineThickness = i775[17]
  i774.m_StrikethroughOffset = i775[18]
  i774.m_StrikethroughThickness = i775[19]
  i774.m_TabWidth = i775[20]
  return i774
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i779 = data
  i778.m_Index = i779[0]
  i778.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i779[1], i778.m_Metrics)
  i778.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i779[2], i778.m_GlyphRect)
  i778.m_Scale = i779[3]
  i778.m_AtlasIndex = i779[4]
  i778.m_ClassDefinitionType = i779[5]
  return i778
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i781 = data
  i780.m_Width = i781[0]
  i780.m_Height = i781[1]
  i780.m_HorizontalBearingX = i781[2]
  i780.m_HorizontalBearingY = i781[3]
  i780.m_HorizontalAdvance = i781[4]
  return i780
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i783 = data
  i782.m_X = i783[0]
  i782.m_Y = i783[1]
  i782.m_Width = i783[2]
  i782.m_Height = i783[3]
  return i782
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i786 = root || request.c( 'TMPro.TMP_Character' )
  var i787 = data
  i786.m_ElementType = i787[0]
  i786.m_Unicode = i787[1]
  i786.m_GlyphIndex = i787[2]
  i786.m_Scale = i787[3]
  return i786
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i792 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i793 = data
  i792.Name = i793[0]
  i792.PointSize = i793[1]
  i792.Scale = i793[2]
  i792.CharacterCount = i793[3]
  i792.LineHeight = i793[4]
  i792.Baseline = i793[5]
  i792.Ascender = i793[6]
  i792.CapHeight = i793[7]
  i792.Descender = i793[8]
  i792.CenterLine = i793[9]
  i792.SuperscriptOffset = i793[10]
  i792.SubscriptOffset = i793[11]
  i792.SubSize = i793[12]
  i792.Underline = i793[13]
  i792.UnderlineThickness = i793[14]
  i792.strikethrough = i793[15]
  i792.strikethroughThickness = i793[16]
  i792.TabWidth = i793[17]
  i792.Padding = i793[18]
  i792.AtlasWidth = i793[19]
  i792.AtlasHeight = i793[20]
  return i792
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i796 = root || request.c( 'TMPro.TMP_Glyph' )
  var i797 = data
  i796.id = i797[0]
  i796.x = i797[1]
  i796.y = i797[2]
  i796.width = i797[3]
  i796.height = i797[4]
  i796.xOffset = i797[5]
  i796.yOffset = i797[6]
  i796.xAdvance = i797[7]
  i796.scale = i797[8]
  return i796
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i798 = root || request.c( 'TMPro.KerningTable' )
  var i799 = data
  var i801 = i799[0]
  var i800 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i801.length; i += 1) {
    i800.add(request.d('TMPro.KerningPair', i801[i + 0]));
  }
  i798.kerningPairs = i800
  return i798
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i804 = root || request.c( 'TMPro.KerningPair' )
  var i805 = data
  i804.xOffset = i805[0]
  i804.m_FirstGlyph = i805[1]
  i804.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i805[2], i804.m_FirstGlyphAdjustments)
  i804.m_SecondGlyph = i805[3]
  i804.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i805[4], i804.m_SecondGlyphAdjustments)
  i804.m_IgnoreSpacingAdjustments = !!i805[5]
  return i804
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i806 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i807 = data
  var i809 = i807[0]
  var i808 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i809.length; i += 1) {
    i808.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i809[i + 0]));
  }
  i806.m_GlyphPairAdjustmentRecords = i808
  return i806
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i812 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i813 = data
  i812.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i813[0], i812.m_FirstAdjustmentRecord)
  i812.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i813[1], i812.m_SecondAdjustmentRecord)
  i812.m_FeatureLookupFlags = i813[2]
  return i812
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i816 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i817 = data
  i816.sourceFontFileName = i817[0]
  i816.sourceFontFileGUID = i817[1]
  i816.pointSizeSamplingMode = i817[2]
  i816.pointSize = i817[3]
  i816.padding = i817[4]
  i816.packingMode = i817[5]
  i816.atlasWidth = i817[6]
  i816.atlasHeight = i817[7]
  i816.characterSetSelectionMode = i817[8]
  i816.characterSequence = i817[9]
  i816.referencedFontAssetGUID = i817[10]
  i816.referencedTextAssetGUID = i817[11]
  i816.fontStyle = i817[12]
  i816.fontStyleModifier = i817[13]
  i816.renderMode = i817[14]
  i816.includeFontFeatures = !!i817[15]
  return i816
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i820 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'regularTypeface')
  request.r(i821[2], i821[3], 0, i820, 'italicTypeface')
  return i820
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i822 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i823 = data
  var i825 = i823[0]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i822.atlasAssets = i824
  i822.scale = i823[1]
  request.r(i823[2], i823[3], 0, i822, 'skeletonJSON')
  i822.isUpgradingBlendModeMaterials = !!i823[4]
  i822.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i823[5], i822.blendModeMaterials)
  var i827 = i823[6]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 1, i826, '')
  }
  i822.skeletonDataModifiers = i826
  var i829 = i823[7]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( i829[i + 0] );
  }
  i822.fromAnimation = i828
  var i831 = i823[8]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( i831[i + 0] );
  }
  i822.toAnimation = i830
  i822.duration = i823[9]
  i822.defaultMix = i823[10]
  request.r(i823[11], i823[12], 0, i822, 'controller')
  return i822
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i834 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i835 = data
  i834.applyAdditiveMaterial = !!i835[0]
  var i837 = i835[1]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i837.length; i += 1) {
    i836.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i837[i + 0]));
  }
  i834.additiveMaterials = i836
  var i839 = i835[2]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i839.length; i += 1) {
    i838.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i839[i + 0]));
  }
  i834.multiplyMaterials = i838
  var i841 = i835[3]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i841.length; i += 1) {
    i840.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i841[i + 0]));
  }
  i834.screenMaterials = i840
  i834.requiresBlendModeMaterials = !!i835[4]
  return i834
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i844 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i845 = data
  i844.pageName = i845[0]
  request.r(i845[1], i845[2], 0, i844, 'material')
  return i844
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i848 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'atlasFile')
  var i851 = i849[2]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i848.materials = i850
  i848.textureLoadingMode = i849[3]
  request.r(i849[4], i849[5], 0, i848, 'onDemandTextureLoader')
  return i848
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i852 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i853 = data
  i852.useSafeMode = !!i853[0]
  i852.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i853[1], i852.safeModeOptions)
  i852.timeScale = i853[2]
  i852.unscaledTimeScale = i853[3]
  i852.useSmoothDeltaTime = !!i853[4]
  i852.maxSmoothUnscaledTime = i853[5]
  i852.rewindCallbackMode = i853[6]
  i852.showUnityEditorReport = !!i853[7]
  i852.logBehaviour = i853[8]
  i852.drawGizmos = !!i853[9]
  i852.defaultRecyclable = !!i853[10]
  i852.defaultAutoPlay = i853[11]
  i852.defaultUpdateType = i853[12]
  i852.defaultTimeScaleIndependent = !!i853[13]
  i852.defaultEaseType = i853[14]
  i852.defaultEaseOvershootOrAmplitude = i853[15]
  i852.defaultEasePeriod = i853[16]
  i852.defaultAutoKill = !!i853[17]
  i852.defaultLoopType = i853[18]
  i852.debugMode = !!i853[19]
  i852.debugStoreTargetId = !!i853[20]
  i852.showPreviewPanel = !!i853[21]
  i852.storeSettingsLocation = i853[22]
  i852.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i853[23], i852.modules)
  i852.createASMDEF = !!i853[24]
  i852.showPlayingTweens = !!i853[25]
  i852.showPausedTweens = !!i853[26]
  return i852
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i854 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i855 = data
  i854.logBehaviour = i855[0]
  i854.nestedTweenFailureBehaviour = i855[1]
  return i854
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i856 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i857 = data
  i856.showPanel = !!i857[0]
  i856.audioEnabled = !!i857[1]
  i856.physicsEnabled = !!i857[2]
  i856.physics2DEnabled = !!i857[3]
  i856.spriteEnabled = !!i857[4]
  i856.uiEnabled = !!i857[5]
  i856.textMeshProEnabled = !!i857[6]
  i856.tk2DEnabled = !!i857[7]
  i856.deAudioEnabled = !!i857[8]
  i856.deUnityExtendedEnabled = !!i857[9]
  i856.epoOutlineEnabled = !!i857[10]
  return i856
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i858 = root || request.c( 'TMPro.TMP_Settings' )
  var i859 = data
  i858.m_enableWordWrapping = !!i859[0]
  i858.m_enableKerning = !!i859[1]
  i858.m_enableExtraPadding = !!i859[2]
  i858.m_enableTintAllSprites = !!i859[3]
  i858.m_enableParseEscapeCharacters = !!i859[4]
  i858.m_EnableRaycastTarget = !!i859[5]
  i858.m_GetFontFeaturesAtRuntime = !!i859[6]
  i858.m_missingGlyphCharacter = i859[7]
  i858.m_warningsDisabled = !!i859[8]
  request.r(i859[9], i859[10], 0, i858, 'm_defaultFontAsset')
  i858.m_defaultFontAssetPath = i859[11]
  i858.m_defaultFontSize = i859[12]
  i858.m_defaultAutoSizeMinRatio = i859[13]
  i858.m_defaultAutoSizeMaxRatio = i859[14]
  i858.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i859[15], i859[16] )
  i858.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i859[17], i859[18] )
  i858.m_autoSizeTextContainer = !!i859[19]
  i858.m_IsTextObjectScaleStatic = !!i859[20]
  var i861 = i859[21]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 1, i860, '')
  }
  i858.m_fallbackFontAssets = i860
  i858.m_matchMaterialPreset = !!i859[22]
  request.r(i859[23], i859[24], 0, i858, 'm_defaultSpriteAsset')
  i858.m_defaultSpriteAssetPath = i859[25]
  i858.m_enableEmojiSupport = !!i859[26]
  i858.m_MissingCharacterSpriteUnicode = i859[27]
  i858.m_defaultColorGradientPresetsPath = i859[28]
  request.r(i859[29], i859[30], 0, i858, 'm_defaultStyleSheet')
  i858.m_StyleSheetsResourcePath = i859[31]
  request.r(i859[32], i859[33], 0, i858, 'm_leadingCharacters')
  request.r(i859[34], i859[35], 0, i858, 'm_followingCharacters')
  i858.m_UseModernHangulLineBreakingRules = !!i859[36]
  return i858
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i863 = data
  i862.m_GlyphIndex = i863[0]
  i862.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i863[1], i862.m_GlyphValueRecord)
  return i862
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i864 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i865 = data
  i864.m_XPlacement = i865[0]
  i864.m_YPlacement = i865[1]
  i864.m_XAdvance = i865[2]
  i864.m_YAdvance = i865[3]
  return i864
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'spriteSheet')
  var i869 = i867[2]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i869.length; i += 1) {
    i868.add(request.d('TMPro.TMP_Sprite', i869[i + 0]));
  }
  i866.spriteInfoList = i868
  var i871 = i867[3]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 1, i870, '')
  }
  i866.fallbackSpriteAssets = i870
  i866.hashCode = i867[4]
  request.r(i867[5], i867[6], 0, i866, 'material')
  i866.materialHashCode = i867[7]
  i866.m_Version = i867[8]
  i866.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i867[9], i866.m_FaceInfo)
  var i873 = i867[10]
  var i872 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i873.length; i += 1) {
    i872.add(request.d('TMPro.TMP_SpriteCharacter', i873[i + 0]));
  }
  i866.m_SpriteCharacterTable = i872
  var i875 = i867[11]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i875.length; i += 1) {
    i874.add(request.d('TMPro.TMP_SpriteGlyph', i875[i + 0]));
  }
  i866.m_SpriteGlyphTable = i874
  return i866
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.TMP_Sprite' )
  var i879 = data
  i878.name = i879[0]
  i878.hashCode = i879[1]
  i878.unicode = i879[2]
  i878.pivot = new pc.Vec2( i879[3], i879[4] )
  request.r(i879[5], i879[6], 0, i878, 'sprite')
  i878.id = i879[7]
  i878.x = i879[8]
  i878.y = i879[9]
  i878.width = i879[10]
  i878.height = i879[11]
  i878.xOffset = i879[12]
  i878.yOffset = i879[13]
  i878.xAdvance = i879[14]
  i878.scale = i879[15]
  return i878
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i885 = data
  i884.m_Name = i885[0]
  i884.m_HashCode = i885[1]
  i884.m_ElementType = i885[2]
  i884.m_Unicode = i885[3]
  i884.m_GlyphIndex = i885[4]
  i884.m_Scale = i885[5]
  return i884
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i888 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'sprite')
  i888.m_Index = i889[2]
  i888.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i889[3], i888.m_Metrics)
  i888.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i889[4], i888.m_GlyphRect)
  i888.m_Scale = i889[5]
  i888.m_AtlasIndex = i889[6]
  i888.m_ClassDefinitionType = i889[7]
  return i888
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i890 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i891 = data
  var i893 = i891[0]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('TMPro.TMP_Style', i893[i + 0]));
  }
  i890.m_StyleList = i892
  return i890
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i896 = root || request.c( 'TMPro.TMP_Style' )
  var i897 = data
  i896.m_Name = i897[0]
  i896.m_HashCode = i897[1]
  i896.m_OpeningDefinition = i897[2]
  i896.m_ClosingDefinition = i897[3]
  i896.m_OpeningTagArray = i897[4]
  i896.m_ClosingTagArray = i897[5]
  i896.m_OpeningTagUnicodeArray = i897[6]
  i896.m_ClosingTagUnicodeArray = i897[7]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i899 = data
  var i901 = i899[0]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i901[i + 0]) );
  }
  i898.files = i900
  i898.componentToPrefabIds = i899[1]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i905 = data
  i904.path = i905[0]
  request.r(i905[1], i905[2], 0, i904, 'unityObject')
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i907 = data
  var i909 = i907[0]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i909[i + 0]) );
  }
  i906.scriptsExecutionOrder = i908
  var i911 = i907[1]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i911[i + 0]) );
  }
  i906.sortingLayers = i910
  var i913 = i907[2]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i913[i + 0]) );
  }
  i906.cullingLayers = i912
  i906.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i907[3], i906.timeSettings)
  i906.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i907[4], i906.physicsSettings)
  i906.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i907[5], i906.physics2DSettings)
  i906.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i907[6], i906.qualitySettings)
  i906.enableRealtimeShadows = !!i907[7]
  i906.enableAutoInstancing = !!i907[8]
  i906.enableStaticBatching = !!i907[9]
  i906.enableDynamicBatching = !!i907[10]
  i906.usePreservativeDynamicBatching = !!i907[11]
  i906.lightmapEncodingQuality = i907[12]
  i906.desiredColorSpace = i907[13]
  var i915 = i907[14]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( i915[i + 0] );
  }
  i906.allTags = i914
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i919 = data
  i918.name = i919[0]
  i918.value = i919[1]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i923 = data
  i922.id = i923[0]
  i922.name = i923[1]
  i922.value = i923[2]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i927 = data
  i926.id = i927[0]
  i926.name = i927[1]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i929 = data
  i928.fixedDeltaTime = i929[0]
  i928.maximumDeltaTime = i929[1]
  i928.timeScale = i929[2]
  i928.maximumParticleTimestep = i929[3]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i931 = data
  i930.gravity = new pc.Vec3( i931[0], i931[1], i931[2] )
  i930.defaultSolverIterations = i931[3]
  i930.bounceThreshold = i931[4]
  i930.autoSyncTransforms = !!i931[5]
  i930.autoSimulation = !!i931[6]
  var i933 = i931[7]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i933[i + 0]) );
  }
  i930.collisionMatrix = i932
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i937 = data
  i936.enabled = !!i937[0]
  i936.layerId = i937[1]
  i936.otherLayerId = i937[2]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'material')
  i938.gravity = new pc.Vec2( i939[2], i939[3] )
  i938.positionIterations = i939[4]
  i938.velocityIterations = i939[5]
  i938.velocityThreshold = i939[6]
  i938.maxLinearCorrection = i939[7]
  i938.maxAngularCorrection = i939[8]
  i938.maxTranslationSpeed = i939[9]
  i938.maxRotationSpeed = i939[10]
  i938.baumgarteScale = i939[11]
  i938.baumgarteTOIScale = i939[12]
  i938.timeToSleep = i939[13]
  i938.linearSleepTolerance = i939[14]
  i938.angularSleepTolerance = i939[15]
  i938.defaultContactOffset = i939[16]
  i938.autoSimulation = !!i939[17]
  i938.queriesHitTriggers = !!i939[18]
  i938.queriesStartInColliders = !!i939[19]
  i938.callbacksOnDisable = !!i939[20]
  i938.reuseCollisionCallbacks = !!i939[21]
  i938.autoSyncTransforms = !!i939[22]
  var i941 = i939[23]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i941[i + 0]) );
  }
  i938.collisionMatrix = i940
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i945 = data
  i944.enabled = !!i945[0]
  i944.layerId = i945[1]
  i944.otherLayerId = i945[2]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i947 = data
  var i949 = i947[0]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i949[i + 0]) );
  }
  i946.qualityLevels = i948
  var i951 = i947[1]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( i951[i + 0] );
  }
  i946.names = i950
  i946.shadows = i947[2]
  i946.anisotropicFiltering = i947[3]
  i946.antiAliasing = i947[4]
  i946.lodBias = i947[5]
  i946.shadowCascades = i947[6]
  i946.shadowDistance = i947[7]
  i946.shadowmaskMode = i947[8]
  i946.shadowProjection = i947[9]
  i946.shadowResolution = i947[10]
  i946.softParticles = !!i947[11]
  i946.softVegetation = !!i947[12]
  i946.activeColorSpace = i947[13]
  i946.desiredColorSpace = i947[14]
  i946.masterTextureLimit = i947[15]
  i946.maxQueuedFrames = i947[16]
  i946.particleRaycastBudget = i947[17]
  i946.pixelLightCount = i947[18]
  i946.realtimeReflectionProbes = !!i947[19]
  i946.shadowCascade2Split = i947[20]
  i946.shadowCascade4Split = new pc.Vec3( i947[21], i947[22], i947[23] )
  i946.streamingMipmapsActive = !!i947[24]
  i946.vSyncCount = i947[25]
  i946.asyncUploadBufferSize = i947[26]
  i946.asyncUploadTimeSlice = i947[27]
  i946.billboardsFaceCameraPosition = !!i947[28]
  i946.shadowNearPlaneOffset = i947[29]
  i946.streamingMipmapsMemoryBudget = i947[30]
  i946.maximumLODLevel = i947[31]
  i946.streamingMipmapsAddAllCameras = !!i947[32]
  i946.streamingMipmapsMaxLevelReduction = i947[33]
  i946.streamingMipmapsRenderersPerFrame = i947[34]
  i946.resolutionScalingFixedDPIFactor = i947[35]
  i946.streamingMipmapsMaxFileIORequests = i947[36]
  i946.currentQualityLevel = i947[37]
  return i946
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i955 = data
  i954.xPlacement = i955[0]
  i954.yPlacement = i955[1]
  i954.xAdvance = i955[2]
  i954.yAdvance = i955[3]
  return i954
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[2],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[51],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[59],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[2],"73":[74],"75":[76],"77":[76],"10":[9],"28":[20],"5":[2],"78":[9],"79":[11],"80":[9],"30":[9],"29":[9],"81":[82],"83":[84],"85":[82],"86":[9],"87":[9],"12":[10],"15":[19,9],"88":[9],"11":[10],"89":[9],"90":[9],"91":[9],"92":[9],"93":[9],"94":[9],"95":[9],"24":[9],"96":[9],"97":[19,9],"98":[9],"99":[9],"100":[9],"101":[9],"102":[19,9],"103":[9],"104":[7],"105":[7],"8":[7],"106":[7],"107":[2],"108":[2],"109":[110],"111":[2],"112":[113],"114":[9],"115":[19,9],"116":[74],"26":[19,9],"117":[118,74],"119":[74],"120":[74,121],"122":[51],"123":[59],"124":[113],"125":[126],"127":[9],"128":[74,9],"16":[9,19],"129":[9],"130":[19,9],"131":[74],"132":[19,9],"133":[9],"134":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAutoSize","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Playable.GameManager","UnityEngine.AudioClip","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.UI.Mask","Playable.GameController","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","SpineEventSoundPlayer","Playable.TargetLevel37","Playable.ItemLevel37","DG.Tweening.DOTweenAnimation","Playable.AudioManager","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Item","ResponsiveCanvasScaler","Target","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "08/04/2026 10:21:04";

Deserializers.lunaDaysRunning = "7.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BMTP_V06_NgocBTU_HuyNQ";

Deserializers.lunaAppID = "38020";

Deserializers.projectId = "e0c7d7b99f381904ba55b26de53e9500";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1837";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5373";

Deserializers.runtimeAnalysisExcludedModules = "particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Minecraft-Clone";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "a8332caa-461c-43a7-9c76-24755b1cf188";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

