var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i9452 = root || request.c( 'UnityEngine.JointSpring' )
  var i9453 = data
  i9452.spring = i9453[0]
  i9452.damper = i9453[1]
  i9452.targetPosition = i9453[2]
  return i9452
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i9454 = root || request.c( 'UnityEngine.JointMotor' )
  var i9455 = data
  i9454.m_TargetVelocity = i9455[0]
  i9454.m_Force = i9455[1]
  i9454.m_FreeSpin = i9455[2]
  return i9454
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i9456 = root || request.c( 'UnityEngine.JointLimits' )
  var i9457 = data
  i9456.m_Min = i9457[0]
  i9456.m_Max = i9457[1]
  i9456.m_Bounciness = i9457[2]
  i9456.m_BounceMinVelocity = i9457[3]
  i9456.m_ContactDistance = i9457[4]
  i9456.minBounce = i9457[5]
  i9456.maxBounce = i9457[6]
  return i9456
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i9458 = root || request.c( 'UnityEngine.JointDrive' )
  var i9459 = data
  i9458.m_PositionSpring = i9459[0]
  i9458.m_PositionDamper = i9459[1]
  i9458.m_MaximumForce = i9459[2]
  i9458.m_UseAcceleration = i9459[3]
  return i9458
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i9460 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i9461 = data
  i9460.m_Spring = i9461[0]
  i9460.m_Damper = i9461[1]
  return i9460
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i9462 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i9463 = data
  i9462.m_Limit = i9463[0]
  i9462.m_Bounciness = i9463[1]
  i9462.m_ContactDistance = i9463[2]
  return i9462
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i9464 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i9465 = data
  i9464.m_ExtremumSlip = i9465[0]
  i9464.m_ExtremumValue = i9465[1]
  i9464.m_AsymptoteSlip = i9465[2]
  i9464.m_AsymptoteValue = i9465[3]
  i9464.m_Stiffness = i9465[4]
  return i9464
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i9466 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i9467 = data
  i9466.m_LowerAngle = i9467[0]
  i9466.m_UpperAngle = i9467[1]
  return i9466
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i9468 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i9469 = data
  i9468.m_MotorSpeed = i9469[0]
  i9468.m_MaximumMotorTorque = i9469[1]
  return i9468
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i9470 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i9471 = data
  i9470.m_DampingRatio = i9471[0]
  i9470.m_Frequency = i9471[1]
  i9470.m_Angle = i9471[2]
  return i9470
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i9472 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i9473 = data
  i9472.m_LowerTranslation = i9473[0]
  i9472.m_UpperTranslation = i9473[1]
  return i9472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i9474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i9475 = data
  i9474.name = i9475[0]
  i9474.width = i9475[1]
  i9474.height = i9475[2]
  i9474.mipmapCount = i9475[3]
  i9474.anisoLevel = i9475[4]
  i9474.filterMode = i9475[5]
  i9474.hdr = !!i9475[6]
  i9474.format = i9475[7]
  i9474.wrapMode = i9475[8]
  i9474.alphaIsTransparency = !!i9475[9]
  i9474.alphaSource = i9475[10]
  i9474.graphicsFormat = i9475[11]
  i9474.sRGBTexture = !!i9475[12]
  i9474.desiredColorSpace = i9475[13]
  i9474.wrapU = i9475[14]
  i9474.wrapV = i9475[15]
  return i9474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i9476 = root || new pc.UnityMaterial()
  var i9477 = data
  i9476.name = i9477[0]
  request.r(i9477[1], i9477[2], 0, i9476, 'shader')
  i9476.renderQueue = i9477[3]
  i9476.enableInstancing = !!i9477[4]
  var i9479 = i9477[5]
  var i9478 = []
  for(var i = 0; i < i9479.length; i += 1) {
    i9478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i9479[i + 0]) );
  }
  i9476.floatParameters = i9478
  var i9481 = i9477[6]
  var i9480 = []
  for(var i = 0; i < i9481.length; i += 1) {
    i9480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i9481[i + 0]) );
  }
  i9476.colorParameters = i9480
  var i9483 = i9477[7]
  var i9482 = []
  for(var i = 0; i < i9483.length; i += 1) {
    i9482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i9483[i + 0]) );
  }
  i9476.vectorParameters = i9482
  var i9485 = i9477[8]
  var i9484 = []
  for(var i = 0; i < i9485.length; i += 1) {
    i9484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i9485[i + 0]) );
  }
  i9476.textureParameters = i9484
  var i9487 = i9477[9]
  var i9486 = []
  for(var i = 0; i < i9487.length; i += 1) {
    i9486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i9487[i + 0]) );
  }
  i9476.materialFlags = i9486
  return i9476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i9490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i9491 = data
  i9490.name = i9491[0]
  i9490.value = i9491[1]
  return i9490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i9494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i9495 = data
  i9494.name = i9495[0]
  i9494.value = new pc.Color(i9495[1], i9495[2], i9495[3], i9495[4])
  return i9494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i9498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i9499 = data
  i9498.name = i9499[0]
  i9498.value = new pc.Vec4( i9499[1], i9499[2], i9499[3], i9499[4] )
  return i9498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i9502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i9503 = data
  i9502.name = i9503[0]
  request.r(i9503[1], i9503[2], 0, i9502, 'value')
  return i9502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i9506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i9507 = data
  i9506.name = i9507[0]
  i9506.enabled = !!i9507[1]
  return i9506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i9508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i9509 = data
  i9508.name = i9509[0]
  i9508.index = i9509[1]
  i9508.startup = !!i9509[2]
  return i9508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i9510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i9511 = data
  i9510.aspect = i9511[0]
  i9510.orthographic = !!i9511[1]
  i9510.orthographicSize = i9511[2]
  i9510.backgroundColor = new pc.Color(i9511[3], i9511[4], i9511[5], i9511[6])
  i9510.nearClipPlane = i9511[7]
  i9510.farClipPlane = i9511[8]
  i9510.fieldOfView = i9511[9]
  i9510.depth = i9511[10]
  i9510.clearFlags = i9511[11]
  i9510.cullingMask = i9511[12]
  i9510.rect = i9511[13]
  request.r(i9511[14], i9511[15], 0, i9510, 'targetTexture')
  i9510.usePhysicalProperties = !!i9511[16]
  i9510.focalLength = i9511[17]
  i9510.sensorSize = new pc.Vec2( i9511[18], i9511[19] )
  i9510.lensShift = new pc.Vec2( i9511[20], i9511[21] )
  i9510.gateFit = i9511[22]
  i9510.commandBufferCount = i9511[23]
  i9510.cameraType = i9511[24]
  i9510.enabled = !!i9511[25]
  return i9510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i9512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i9513 = data
  i9512.name = i9513[0]
  i9512.tagId = i9513[1]
  i9512.enabled = !!i9513[2]
  i9512.isStatic = !!i9513[3]
  i9512.layer = i9513[4]
  return i9512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i9514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i9515 = data
  i9514.pivot = new pc.Vec2( i9515[0], i9515[1] )
  i9514.anchorMin = new pc.Vec2( i9515[2], i9515[3] )
  i9514.anchorMax = new pc.Vec2( i9515[4], i9515[5] )
  i9514.sizeDelta = new pc.Vec2( i9515[6], i9515[7] )
  i9514.anchoredPosition3D = new pc.Vec3( i9515[8], i9515[9], i9515[10] )
  i9514.rotation = new pc.Quat(i9515[11], i9515[12], i9515[13], i9515[14])
  i9514.scale = new pc.Vec3( i9515[15], i9515[16], i9515[17] )
  return i9514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i9516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i9517 = data
  i9516.planeDistance = i9517[0]
  i9516.referencePixelsPerUnit = i9517[1]
  i9516.isFallbackOverlay = !!i9517[2]
  i9516.renderMode = i9517[3]
  i9516.renderOrder = i9517[4]
  i9516.sortingLayerName = i9517[5]
  i9516.sortingOrder = i9517[6]
  i9516.scaleFactor = i9517[7]
  request.r(i9517[8], i9517[9], 0, i9516, 'worldCamera')
  i9516.overrideSorting = !!i9517[10]
  i9516.pixelPerfect = !!i9517[11]
  i9516.targetDisplay = i9517[12]
  i9516.overridePixelPerfect = !!i9517[13]
  i9516.enabled = !!i9517[14]
  return i9516
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i9518 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i9519 = data
  i9518.m_UiScaleMode = i9519[0]
  i9518.m_ReferencePixelsPerUnit = i9519[1]
  i9518.m_ScaleFactor = i9519[2]
  i9518.m_ReferenceResolution = new pc.Vec2( i9519[3], i9519[4] )
  i9518.m_ScreenMatchMode = i9519[5]
  i9518.m_MatchWidthOrHeight = i9519[6]
  i9518.m_PhysicalUnit = i9519[7]
  i9518.m_FallbackScreenDPI = i9519[8]
  i9518.m_DefaultSpriteDPI = i9519[9]
  i9518.m_DynamicPixelsPerUnit = i9519[10]
  i9518.m_PresetInfoIsWorld = !!i9519[11]
  return i9518
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i9520 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i9521 = data
  i9520.m_IgnoreReversedGraphics = !!i9521[0]
  i9520.m_BlockingObjects = i9521[1]
  i9520.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i9521[2] )
  return i9520
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i9522 = root || request.c( 'Playable.GameManager' )
  var i9523 = data
  i9522.EventCountdownEndGame = request.d('System.Action', i9523[0], i9522.EventCountdownEndGame)
  i9522._totalEvent = i9523[1]
  i9522._maxEvent = i9523[2]
  i9522._endTime = i9523[3]
  request.r(i9523[4], i9523[5], 0, i9522, '_backgroundMusic')
  request.r(i9523[6], i9523[7], 0, i9522, '_backgroundTexture')
  request.r(i9523[8], i9523[9], 0, i9522, '_btnBlock')
  request.r(i9523[10], i9523[11], 0, i9522, '_background')
  request.r(i9523[12], i9523[13], 0, i9522, '_losePanel')
  request.r(i9523[14], i9523[15], 0, i9522, '_progressFillImage')
  request.r(i9523[16], i9523[17], 0, i9522, '_progressText')
  i9522._progressTweenDuration = i9523[18]
  request.r(i9523[19], i9523[20], 0, i9522, '_timerFillImage')
  request.r(i9523[21], i9523[22], 0, i9522, '_timerText')
  i9522._timerPunchScale = i9523[23]
  return i9522
}

Deserializers["System.Action"] = function (request, data, root) {
  var i9524 = root || request.c( 'System.Action' )
  var i9525 = data
  return i9524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i9526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i9527 = data
  i9526.cullTransparentMesh = !!i9527[0]
  return i9526
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i9528 = root || request.c( 'UnityEngine.UI.Image' )
  var i9529 = data
  request.r(i9529[0], i9529[1], 0, i9528, 'm_Sprite')
  i9528.m_Type = i9529[2]
  i9528.m_PreserveAspect = !!i9529[3]
  i9528.m_FillCenter = !!i9529[4]
  i9528.m_FillMethod = i9529[5]
  i9528.m_FillAmount = i9529[6]
  i9528.m_FillClockwise = !!i9529[7]
  i9528.m_FillOrigin = i9529[8]
  i9528.m_UseSpriteMesh = !!i9529[9]
  i9528.m_PixelsPerUnitMultiplier = i9529[10]
  request.r(i9529[11], i9529[12], 0, i9528, 'm_Material')
  i9528.m_Maskable = !!i9529[13]
  i9528.m_Color = new pc.Color(i9529[14], i9529[15], i9529[16], i9529[17])
  i9528.m_RaycastTarget = !!i9529[18]
  i9528.m_RaycastPadding = new pc.Vec4( i9529[19], i9529[20], i9529[21], i9529[22] )
  return i9528
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i9530 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i9531 = data
  request.r(i9531[0], i9531[1], 0, i9530, 'm_Texture')
  i9530.m_UVRect = UnityEngine.Rect.MinMaxRect(i9531[2], i9531[3], i9531[4], i9531[5])
  request.r(i9531[6], i9531[7], 0, i9530, 'm_Material')
  i9530.m_Maskable = !!i9531[8]
  i9530.m_Color = new pc.Color(i9531[9], i9531[10], i9531[11], i9531[12])
  i9530.m_RaycastTarget = !!i9531[13]
  i9530.m_RaycastPadding = new pc.Vec4( i9531[14], i9531[15], i9531[16], i9531[17] )
  return i9530
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i9532 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i9533 = data
  i9532.m_hasFontAssetChanged = !!i9533[0]
  request.r(i9533[1], i9533[2], 0, i9532, 'm_baseMaterial')
  i9532.m_maskOffset = new pc.Vec4( i9533[3], i9533[4], i9533[5], i9533[6] )
  i9532.m_text = i9533[7]
  i9532.m_isRightToLeft = !!i9533[8]
  request.r(i9533[9], i9533[10], 0, i9532, 'm_fontAsset')
  request.r(i9533[11], i9533[12], 0, i9532, 'm_sharedMaterial')
  var i9535 = i9533[13]
  var i9534 = []
  for(var i = 0; i < i9535.length; i += 2) {
  request.r(i9535[i + 0], i9535[i + 1], 2, i9534, '')
  }
  i9532.m_fontSharedMaterials = i9534
  request.r(i9533[14], i9533[15], 0, i9532, 'm_fontMaterial')
  var i9537 = i9533[16]
  var i9536 = []
  for(var i = 0; i < i9537.length; i += 2) {
  request.r(i9537[i + 0], i9537[i + 1], 2, i9536, '')
  }
  i9532.m_fontMaterials = i9536
  i9532.m_fontColor32 = UnityEngine.Color32.ConstructColor(i9533[17], i9533[18], i9533[19], i9533[20])
  i9532.m_fontColor = new pc.Color(i9533[21], i9533[22], i9533[23], i9533[24])
  i9532.m_enableVertexGradient = !!i9533[25]
  i9532.m_colorMode = i9533[26]
  i9532.m_fontColorGradient = request.d('TMPro.VertexGradient', i9533[27], i9532.m_fontColorGradient)
  request.r(i9533[28], i9533[29], 0, i9532, 'm_fontColorGradientPreset')
  request.r(i9533[30], i9533[31], 0, i9532, 'm_spriteAsset')
  i9532.m_tintAllSprites = !!i9533[32]
  request.r(i9533[33], i9533[34], 0, i9532, 'm_StyleSheet')
  i9532.m_TextStyleHashCode = i9533[35]
  i9532.m_overrideHtmlColors = !!i9533[36]
  i9532.m_faceColor = UnityEngine.Color32.ConstructColor(i9533[37], i9533[38], i9533[39], i9533[40])
  i9532.m_fontSize = i9533[41]
  i9532.m_fontSizeBase = i9533[42]
  i9532.m_fontWeight = i9533[43]
  i9532.m_enableAutoSizing = !!i9533[44]
  i9532.m_fontSizeMin = i9533[45]
  i9532.m_fontSizeMax = i9533[46]
  i9532.m_fontStyle = i9533[47]
  i9532.m_HorizontalAlignment = i9533[48]
  i9532.m_VerticalAlignment = i9533[49]
  i9532.m_textAlignment = i9533[50]
  i9532.m_characterSpacing = i9533[51]
  i9532.m_wordSpacing = i9533[52]
  i9532.m_lineSpacing = i9533[53]
  i9532.m_lineSpacingMax = i9533[54]
  i9532.m_paragraphSpacing = i9533[55]
  i9532.m_charWidthMaxAdj = i9533[56]
  i9532.m_TextWrappingMode = i9533[57]
  i9532.m_wordWrappingRatios = i9533[58]
  i9532.m_overflowMode = i9533[59]
  request.r(i9533[60], i9533[61], 0, i9532, 'm_linkedTextComponent')
  request.r(i9533[62], i9533[63], 0, i9532, 'parentLinkedComponent')
  i9532.m_enableKerning = !!i9533[64]
  var i9539 = i9533[65]
  var i9538 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i9539.length; i += 1) {
    i9538.add(i9539[i + 0]);
  }
  i9532.m_ActiveFontFeatures = i9538
  i9532.m_enableExtraPadding = !!i9533[66]
  i9532.checkPaddingRequired = !!i9533[67]
  i9532.m_isRichText = !!i9533[68]
  i9532.m_parseCtrlCharacters = !!i9533[69]
  i9532.m_isOrthographic = !!i9533[70]
  i9532.m_isCullingEnabled = !!i9533[71]
  i9532.m_horizontalMapping = i9533[72]
  i9532.m_verticalMapping = i9533[73]
  i9532.m_uvLineOffset = i9533[74]
  i9532.m_geometrySortingOrder = i9533[75]
  i9532.m_IsTextObjectScaleStatic = !!i9533[76]
  i9532.m_VertexBufferAutoSizeReduction = !!i9533[77]
  i9532.m_useMaxVisibleDescender = !!i9533[78]
  i9532.m_pageToDisplay = i9533[79]
  i9532.m_margin = new pc.Vec4( i9533[80], i9533[81], i9533[82], i9533[83] )
  i9532.m_isUsingLegacyAnimationComponent = !!i9533[84]
  i9532.m_isVolumetricText = !!i9533[85]
  request.r(i9533[86], i9533[87], 0, i9532, 'm_Material')
  i9532.m_EmojiFallbackSupport = !!i9533[88]
  i9532.m_Maskable = !!i9533[89]
  i9532.m_Color = new pc.Color(i9533[90], i9533[91], i9533[92], i9533[93])
  i9532.m_RaycastTarget = !!i9533[94]
  i9532.m_RaycastPadding = new pc.Vec4( i9533[95], i9533[96], i9533[97], i9533[98] )
  return i9532
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i9542 = root || request.c( 'TMPro.VertexGradient' )
  var i9543 = data
  i9542.topLeft = new pc.Color(i9543[0], i9543[1], i9543[2], i9543[3])
  i9542.topRight = new pc.Color(i9543[4], i9543[5], i9543[6], i9543[7])
  i9542.bottomLeft = new pc.Color(i9543[8], i9543[9], i9543[10], i9543[11])
  i9542.bottomRight = new pc.Color(i9543[12], i9543[13], i9543[14], i9543[15])
  return i9542
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i9546 = root || request.c( 'UnityEngine.UI.Button' )
  var i9547 = data
  i9546.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i9547[0], i9546.m_OnClick)
  i9546.m_Navigation = request.d('UnityEngine.UI.Navigation', i9547[1], i9546.m_Navigation)
  i9546.m_Transition = i9547[2]
  i9546.m_Colors = request.d('UnityEngine.UI.ColorBlock', i9547[3], i9546.m_Colors)
  i9546.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i9547[4], i9546.m_SpriteState)
  i9546.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i9547[5], i9546.m_AnimationTriggers)
  i9546.m_Interactable = !!i9547[6]
  request.r(i9547[7], i9547[8], 0, i9546, 'm_TargetGraphic')
  return i9546
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i9548 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i9549 = data
  i9548.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i9549[0], i9548.m_PersistentCalls)
  return i9548
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i9550 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i9551 = data
  var i9553 = i9551[0]
  var i9552 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i9553.length; i += 1) {
    i9552.add(request.d('UnityEngine.Events.PersistentCall', i9553[i + 0]));
  }
  i9550.m_Calls = i9552
  return i9550
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i9556 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i9557 = data
  request.r(i9557[0], i9557[1], 0, i9556, 'm_Target')
  i9556.m_TargetAssemblyTypeName = i9557[2]
  i9556.m_MethodName = i9557[3]
  i9556.m_Mode = i9557[4]
  i9556.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i9557[5], i9556.m_Arguments)
  i9556.m_CallState = i9557[6]
  return i9556
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i9558 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i9559 = data
  request.r(i9559[0], i9559[1], 0, i9558, 'm_ObjectArgument')
  i9558.m_ObjectArgumentAssemblyTypeName = i9559[2]
  i9558.m_IntArgument = i9559[3]
  i9558.m_FloatArgument = i9559[4]
  i9558.m_StringArgument = i9559[5]
  i9558.m_BoolArgument = !!i9559[6]
  return i9558
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i9560 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i9561 = data
  i9560.m_Mode = i9561[0]
  i9560.m_WrapAround = !!i9561[1]
  request.r(i9561[2], i9561[3], 0, i9560, 'm_SelectOnUp')
  request.r(i9561[4], i9561[5], 0, i9560, 'm_SelectOnDown')
  request.r(i9561[6], i9561[7], 0, i9560, 'm_SelectOnLeft')
  request.r(i9561[8], i9561[9], 0, i9560, 'm_SelectOnRight')
  return i9560
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i9562 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i9563 = data
  i9562.m_NormalColor = new pc.Color(i9563[0], i9563[1], i9563[2], i9563[3])
  i9562.m_HighlightedColor = new pc.Color(i9563[4], i9563[5], i9563[6], i9563[7])
  i9562.m_PressedColor = new pc.Color(i9563[8], i9563[9], i9563[10], i9563[11])
  i9562.m_SelectedColor = new pc.Color(i9563[12], i9563[13], i9563[14], i9563[15])
  i9562.m_DisabledColor = new pc.Color(i9563[16], i9563[17], i9563[18], i9563[19])
  i9562.m_ColorMultiplier = i9563[20]
  i9562.m_FadeDuration = i9563[21]
  return i9562
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i9564 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i9565 = data
  request.r(i9565[0], i9565[1], 0, i9564, 'm_HighlightedSprite')
  request.r(i9565[2], i9565[3], 0, i9564, 'm_PressedSprite')
  request.r(i9565[4], i9565[5], 0, i9564, 'm_SelectedSprite')
  request.r(i9565[6], i9565[7], 0, i9564, 'm_DisabledSprite')
  return i9564
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i9566 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i9567 = data
  i9566.m_NormalTrigger = i9567[0]
  i9566.m_HighlightedTrigger = i9567[1]
  i9566.m_PressedTrigger = i9567[2]
  i9566.m_SelectedTrigger = i9567[3]
  i9566.m_DisabledTrigger = i9567[4]
  return i9566
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i9568 = root || request.c( 'UnityEngine.UI.Mask' )
  var i9569 = data
  i9568.m_ShowMaskGraphic = !!i9569[0]
  return i9568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i9570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i9571 = data
  request.r(i9571[0], i9571[1], 0, i9570, 'clip')
  request.r(i9571[2], i9571[3], 0, i9570, 'outputAudioMixerGroup')
  i9570.playOnAwake = !!i9571[4]
  i9570.loop = !!i9571[5]
  i9570.time = i9571[6]
  i9570.volume = i9571[7]
  i9570.pitch = i9571[8]
  i9570.enabled = !!i9571[9]
  return i9570
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i9572 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i9573 = data
  i9572.m_Padding = new pc.Vec4( i9573[0], i9573[1], i9573[2], i9573[3] )
  i9572.m_Softness = new pc.Vec2( i9573[4], i9573[5] )
  return i9572
}

Deserializers["GameController"] = function (request, data, root) {
  var i9574 = root || request.c( 'GameController' )
  var i9575 = data
  request.r(i9575[0], i9575[1], 0, i9574, '_tutorialHand')
  request.r(i9575[2], i9575[3], 0, i9574, '_tutorialInPlace')
  request.r(i9575[4], i9575[5], 0, i9574, '_tutorialFrom')
  request.r(i9575[6], i9575[7], 0, i9574, '_tutorialTo')
  i9574._tutorialScaleDuration = i9575[8]
  i9574._tutorialMoveDuration = i9575[9]
  i9574._tutorialStartDelay = i9575[10]
  return i9574
}

Deserializers["Item"] = function (request, data, root) {
  var i9576 = root || request.c( 'Item' )
  var i9577 = data
  var i9579 = i9577[0]
  var i9578 = new (System.Collections.Generic.List$1(Bridge.ns('Item+ItemData')))
  for(var i = 0; i < i9579.length; i += 1) {
    i9578.add(request.d('Item+ItemData', i9579[i + 0]));
  }
  i9576._data = i9578
  i9576._dragSortingOrder = i9577[1]
  return i9576
}

Deserializers["Item+ItemData"] = function (request, data, root) {
  var i9582 = root || request.c( 'Item+ItemData' )
  var i9583 = data
  i9582.id = i9583[0]
  i9582.stateChange = request.d('Item+GirlStateChange', i9583[1], i9582.stateChange)
  i9582.animationStateTiming = i9583[2]
  i9582.result = i9583[3]
  return i9582
}

Deserializers["Item+GirlStateChange"] = function (request, data, root) {
  var i9584 = root || request.c( 'Item+GirlStateChange' )
  var i9585 = data
  i9584.changeBodyShape = !!i9585[0]
  i9584.bodyShape = i9585[1]
  i9584.changeOutfit = !!i9585[2]
  i9584.outfit = i9585[3]
  i9584.changeRestraint = !!i9585[4]
  i9584.restraint = i9585[5]
  return i9584
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i9586 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i9587 = data
  request.r(i9587[0], i9587[1], 0, i9586, 'skeletonDataAsset')
  request.r(i9587[2], i9587[3], 0, i9586, 'additiveMaterial')
  request.r(i9587[4], i9587[5], 0, i9586, 'multiplyMaterial')
  request.r(i9587[6], i9587[7], 0, i9586, 'screenMaterial')
  i9586.initialSkinName = i9587[8]
  i9586.initialFlipX = !!i9587[9]
  i9586.initialFlipY = !!i9587[10]
  i9586.startingAnimation = i9587[11]
  i9586.startingLoop = !!i9587[12]
  i9586.timeScale = i9587[13]
  i9586.freeze = !!i9587[14]
  i9586.layoutScaleMode = i9587[15]
  i9586.updateWhenInvisible = i9587[16]
  i9586.allowMultipleCanvasRenderers = !!i9587[17]
  var i9589 = i9587[18]
  var i9588 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i9589.length; i += 2) {
  request.r(i9589[i + 0], i9589[i + 1], 1, i9588, '')
  }
  i9586.canvasRenderers = i9588
  i9586.enableSeparatorSlots = !!i9587[19]
  i9586.updateSeparatorPartLocation = !!i9587[20]
  i9586.updateSeparatorPartScale = !!i9587[21]
  i9586.disableMeshAssignmentOnOverride = !!i9587[22]
  i9586.referenceSize = new pc.Vec2( i9587[23], i9587[24] )
  i9586.referenceScale = i9587[25]
  i9586.rectTransformSize = new pc.Vec2( i9587[26], i9587[27] )
  i9586.editReferenceRect = !!i9587[28]
  var i9591 = i9587[29]
  var i9590 = []
  for(var i = 0; i < i9591.length; i += 1) {
    i9590.push( i9591[i + 0] );
  }
  i9586.separatorSlotNames = i9590
  var i9593 = i9587[30]
  var i9592 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i9593.length; i += 2) {
  request.r(i9593[i + 0], i9593[i + 1], 1, i9592, '')
  }
  i9586.separatorParts = i9592
  i9586.meshGenerator = request.d('Spine.Unity.MeshGenerator', i9587[31], i9586.meshGenerator)
  i9586.updateTiming = i9587[32]
  i9586.unscaledTime = !!i9587[33]
  request.r(i9587[34], i9587[35], 0, i9586, 'm_Material')
  i9586.m_Maskable = !!i9587[36]
  i9586.m_Color = new pc.Color(i9587[37], i9587[38], i9587[39], i9587[40])
  i9586.m_RaycastTarget = !!i9587[41]
  i9586.m_RaycastPadding = new pc.Vec4( i9587[42], i9587[43], i9587[44], i9587[45] )
  return i9586
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i9600 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i9601 = data
  i9600.settings = request.d('Spine.Unity.MeshGenerator+Settings', i9601[0], i9600.settings)
  return i9600
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i9602 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i9603 = data
  i9602.useClipping = !!i9603[0]
  i9602.zSpacing = i9603[1]
  i9602.pmaVertexColors = !!i9603[2]
  i9602.tintBlack = !!i9603[3]
  i9602.canvasGroupTintBlack = !!i9603[4]
  i9602.calculateTangents = !!i9603[5]
  i9602.addNormals = !!i9603[6]
  i9602.immutableTriangles = !!i9603[7]
  return i9602
}

Deserializers["Playable.Door"] = function (request, data, root) {
  var i9604 = root || request.c( 'Playable.Door' )
  var i9605 = data
  request.r(i9605[0], i9605[1], 0, i9604, '_image')
  request.r(i9605[2], i9605[3], 0, i9604, '_open')
  request.r(i9605[4], i9605[5], 0, i9604, '_close')
  return i9604
}

Deserializers["Girl"] = function (request, data, root) {
  var i9606 = root || request.c( 'Girl' )
  var i9607 = data
  i9606._enableDebugLogs = !!i9607[0]
  i9606._status = request.d('GirlStatus', i9607[1], i9606._status)
  var i9609 = i9607[2]
  var i9608 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+BodyShapeSkins')))
  for(var i = 0; i < i9609.length; i += 1) {
    i9608.add(request.d('Girl+BodyShapeSkins', i9609[i + 0]));
  }
  i9606._bodyShapeSkins = i9608
  var i9611 = i9607[3]
  var i9610 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+OutfitSkins')))
  for(var i = 0; i < i9611.length; i += 1) {
    i9610.add(request.d('Girl+OutfitSkins', i9611[i + 0]));
  }
  i9606._outfitSkins = i9610
  var i9613 = i9607[4]
  var i9612 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+RestraintSkins')))
  for(var i = 0; i < i9613.length; i += 1) {
    i9612.add(request.d('Girl+RestraintSkins', i9613[i + 0]));
  }
  i9606._restraintSkins = i9612
  request.r(i9607[5], i9607[6], 0, i9606, '_skeletonGraphic')
  var i9615 = i9607[7]
  var i9614 = []
  for(var i = 0; i < i9615.length; i += 1) {
    i9614.push( i9615[i + 0] );
  }
  i9606._defaultSkins = i9614
  i9606._defaultAnimation = request.d('Target+GirlAnimation', i9607[8], i9606._defaultAnimation)
  var i9617 = i9607[9]
  var i9616 = new (System.Collections.Generic.List$1(Bridge.ns('Target+GirlAnimation')))
  for(var i = 0; i < i9617.length; i += 1) {
    i9616.add(request.d('Target+GirlAnimation', i9617[i + 0]));
  }
  i9606._removeGlassesAnimations = i9616
  i9606._endGameDelay = i9607[10]
  i9606._boy1 = request.d('Girl+BoyAnimationData', i9607[11], i9606._boy1)
  i9606._boy2 = request.d('Girl+BoyAnimationData', i9607[12], i9606._boy2)
  return i9606
}

Deserializers["GirlStatus"] = function (request, data, root) {
  var i9618 = root || request.c( 'GirlStatus' )
  var i9619 = data
  i9618.bodyShape = i9619[0]
  i9618.outfit = i9619[1]
  i9618.restraint = i9619[2]
  return i9618
}

Deserializers["Girl+BodyShapeSkins"] = function (request, data, root) {
  var i9622 = root || request.c( 'Girl+BodyShapeSkins' )
  var i9623 = data
  i9622.bodyShape = i9623[0]
  var i9625 = i9623[1]
  var i9624 = []
  for(var i = 0; i < i9625.length; i += 1) {
    i9624.push( i9625[i + 0] );
  }
  i9622.skins = i9624
  return i9622
}

Deserializers["Girl+OutfitSkins"] = function (request, data, root) {
  var i9628 = root || request.c( 'Girl+OutfitSkins' )
  var i9629 = data
  i9628.outfit = i9629[0]
  var i9631 = i9629[1]
  var i9630 = []
  for(var i = 0; i < i9631.length; i += 1) {
    i9630.push( i9631[i + 0] );
  }
  i9628.skins = i9630
  return i9628
}

Deserializers["Girl+RestraintSkins"] = function (request, data, root) {
  var i9634 = root || request.c( 'Girl+RestraintSkins' )
  var i9635 = data
  i9634.restraint = i9635[0]
  var i9637 = i9635[1]
  var i9636 = []
  for(var i = 0; i < i9637.length; i += 1) {
    i9636.push( i9637[i + 0] );
  }
  i9634.skins = i9636
  return i9634
}

Deserializers["Target+GirlAnimation"] = function (request, data, root) {
  var i9638 = root || request.c( 'Target+GirlAnimation' )
  var i9639 = data
  i9638.animationName = i9639[0]
  i9638.loop = !!i9639[1]
  return i9638
}

Deserializers["Girl+BoyAnimationData"] = function (request, data, root) {
  var i9642 = root || request.c( 'Girl+BoyAnimationData' )
  var i9643 = data
  request.r(i9643[0], i9643[1], 0, i9642, 'skeletonGraphic')
  i9642.idleAnimation = i9643[2]
  i9642.winAnimation = i9643[3]
  i9642.loseAnimation = i9643[4]
  return i9642
}

Deserializers["Target"] = function (request, data, root) {
  var i9644 = root || request.c( 'Target' )
  var i9645 = data
  i9644._part = i9645[0]
  request.r(i9645[1], i9645[2], 0, i9644, '_girl')
  request.r(i9645[3], i9645[4], 0, i9644, '_skeletonGraphic')
  var i9647 = i9645[5]
  var i9646 = new (System.Collections.Generic.List$1(Bridge.ns('Target+ItemReaction')))
  for(var i = 0; i < i9647.length; i += 1) {
    i9646.add(request.d('Target+ItemReaction', i9647[i + 0]));
  }
  i9644._itemReactions = i9646
  return i9644
}

Deserializers["Target+ItemReaction"] = function (request, data, root) {
  var i9650 = root || request.c( 'Target+ItemReaction' )
  var i9651 = data
  i9650.itemId = i9651[0]
  var i9653 = i9651[1]
  var i9652 = new (System.Collections.Generic.List$1(Bridge.ns('Target+AnimationRule')))
  for(var i = 0; i < i9653.length; i += 1) {
    i9652.add(request.d('Target+AnimationRule', i9653[i + 0]));
  }
  i9650.animationRules = i9652
  var i9655 = i9651[2]
  var i9654 = []
  for(var i = 0; i < i9655.length; i += 1) {
    i9654.push( i9655[i + 0] );
  }
  i9650.skinAdded = i9654
  var i9657 = i9651[3]
  var i9656 = []
  for(var i = 0; i < i9657.length; i += 1) {
    i9656.push( i9657[i + 0] );
  }
  i9650.skinRemoved = i9656
  request.r(i9651[4], i9651[5], 0, i9650, 'audioClip')
  return i9650
}

Deserializers["Target+AnimationRule"] = function (request, data, root) {
  var i9660 = root || request.c( 'Target+AnimationRule' )
  var i9661 = data
  i9660.checkBodyShape = !!i9661[0]
  i9660.bodyShape = i9661[1]
  i9660.checkOutfit = !!i9661[2]
  i9660.outfit = i9661[3]
  i9660.checkRestraint = !!i9661[4]
  i9660.restraint = i9661[5]
  var i9663 = i9661[6]
  var i9662 = new (System.Collections.Generic.List$1(Bridge.ns('Target+GirlAnimation')))
  for(var i = 0; i < i9663.length; i += 1) {
    i9662.add(request.d('Target+GirlAnimation', i9663[i + 0]));
  }
  i9660.animations = i9662
  return i9660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i9664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i9665 = data
  i9664.m_Alpha = i9665[0]
  i9664.m_Interactable = !!i9665[1]
  i9664.m_BlocksRaycasts = !!i9665[2]
  i9664.m_IgnoreParentGroups = !!i9665[3]
  i9664.enabled = !!i9665[4]
  return i9664
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i9666 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i9667 = data
  i9666.m_Spacing = i9667[0]
  i9666.m_ChildForceExpandWidth = !!i9667[1]
  i9666.m_ChildForceExpandHeight = !!i9667[2]
  i9666.m_ChildControlWidth = !!i9667[3]
  i9666.m_ChildControlHeight = !!i9667[4]
  i9666.m_ChildScaleWidth = !!i9667[5]
  i9666.m_ChildScaleHeight = !!i9667[6]
  i9666.m_ReverseArrangement = !!i9667[7]
  i9666.m_Padding = UnityEngine.RectOffset.FromPaddings(i9667[8], i9667[9], i9667[10], i9667[11])
  i9666.m_ChildAlignment = i9667[12]
  return i9666
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i9668 = root || request.c( 'Playable.AudioManager' )
  var i9669 = data
  var i9671 = i9669[0]
  var i9670 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i9671.length; i += 1) {
    i9670.add(request.d('Playable.SoundData', i9671[i + 0]));
  }
  i9668._sounds = i9670
  request.r(i9669[1], i9669[2], 0, i9668, '_audioMusic')
  request.r(i9669[3], i9669[4], 0, i9668, '_audioSound')
  return i9668
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i9674 = root || request.c( 'Playable.SoundData' )
  var i9675 = data
  i9674.Type = i9675[0]
  request.r(i9675[1], i9675[2], 0, i9674, 'Clip')
  return i9674
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i9676 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i9677 = data
  request.r(i9677[0], i9677[1], 0, i9676, 'm_FirstSelected')
  i9676.m_sendNavigationEvents = !!i9677[2]
  i9676.m_DragThreshold = i9677[3]
  return i9676
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i9678 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i9679 = data
  i9678.m_HorizontalAxis = i9679[0]
  i9678.m_VerticalAxis = i9679[1]
  i9678.m_SubmitButton = i9679[2]
  i9678.m_CancelButton = i9679[3]
  i9678.m_InputActionsPerSecond = i9679[4]
  i9678.m_RepeatDelay = i9679[5]
  i9678.m_ForceModuleActive = !!i9679[6]
  i9678.m_SendPointerHoverToParent = !!i9679[7]
  return i9678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i9680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i9681 = data
  i9680.ambientIntensity = i9681[0]
  i9680.reflectionIntensity = i9681[1]
  i9680.ambientMode = i9681[2]
  i9680.ambientLight = new pc.Color(i9681[3], i9681[4], i9681[5], i9681[6])
  i9680.ambientSkyColor = new pc.Color(i9681[7], i9681[8], i9681[9], i9681[10])
  i9680.ambientGroundColor = new pc.Color(i9681[11], i9681[12], i9681[13], i9681[14])
  i9680.ambientEquatorColor = new pc.Color(i9681[15], i9681[16], i9681[17], i9681[18])
  i9680.fogColor = new pc.Color(i9681[19], i9681[20], i9681[21], i9681[22])
  i9680.fogEndDistance = i9681[23]
  i9680.fogStartDistance = i9681[24]
  i9680.fogDensity = i9681[25]
  i9680.fog = !!i9681[26]
  request.r(i9681[27], i9681[28], 0, i9680, 'skybox')
  i9680.fogMode = i9681[29]
  var i9683 = i9681[30]
  var i9682 = []
  for(var i = 0; i < i9683.length; i += 1) {
    i9682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i9683[i + 0]) );
  }
  i9680.lightmaps = i9682
  i9680.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i9681[31], i9680.lightProbes)
  i9680.lightmapsMode = i9681[32]
  i9680.mixedBakeMode = i9681[33]
  i9680.environmentLightingMode = i9681[34]
  i9680.ambientProbe = new pc.SphericalHarmonicsL2(i9681[35])
  request.r(i9681[36], i9681[37], 0, i9680, 'customReflection')
  request.r(i9681[38], i9681[39], 0, i9680, 'defaultReflection')
  i9680.defaultReflectionMode = i9681[40]
  i9680.defaultReflectionResolution = i9681[41]
  i9680.sunLightObjectId = i9681[42]
  i9680.pixelLightCount = i9681[43]
  i9680.defaultReflectionHDR = !!i9681[44]
  i9680.hasLightDataAsset = !!i9681[45]
  i9680.hasManualGenerate = !!i9681[46]
  return i9680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i9686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i9687 = data
  request.r(i9687[0], i9687[1], 0, i9686, 'lightmapColor')
  request.r(i9687[2], i9687[3], 0, i9686, 'lightmapDirection')
  request.r(i9687[4], i9687[5], 0, i9686, 'shadowMask')
  return i9686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i9688 = root || new UnityEngine.LightProbes()
  var i9689 = data
  return i9688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i9696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i9697 = data
  var i9699 = i9697[0]
  var i9698 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i9699.length; i += 1) {
    i9698.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i9699[i + 0]));
  }
  i9696.ShaderCompilationErrors = i9698
  i9696.name = i9697[1]
  i9696.guid = i9697[2]
  var i9701 = i9697[3]
  var i9700 = []
  for(var i = 0; i < i9701.length; i += 1) {
    i9700.push( i9701[i + 0] );
  }
  i9696.shaderDefinedKeywords = i9700
  var i9703 = i9697[4]
  var i9702 = []
  for(var i = 0; i < i9703.length; i += 1) {
    i9702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i9703[i + 0]) );
  }
  i9696.passes = i9702
  var i9705 = i9697[5]
  var i9704 = []
  for(var i = 0; i < i9705.length; i += 1) {
    i9704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i9705[i + 0]) );
  }
  i9696.usePasses = i9704
  var i9707 = i9697[6]
  var i9706 = []
  for(var i = 0; i < i9707.length; i += 1) {
    i9706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i9707[i + 0]) );
  }
  i9696.defaultParameterValues = i9706
  request.r(i9697[7], i9697[8], 0, i9696, 'unityFallbackShader')
  i9696.readDepth = !!i9697[9]
  i9696.hasDepthOnlyPass = !!i9697[10]
  i9696.isCreatedByShaderGraph = !!i9697[11]
  i9696.disableBatching = !!i9697[12]
  i9696.compiled = !!i9697[13]
  return i9696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i9710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i9711 = data
  i9710.shaderName = i9711[0]
  i9710.errorMessage = i9711[1]
  return i9710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i9714 = root || new pc.UnityShaderPass()
  var i9715 = data
  i9714.id = i9715[0]
  i9714.subShaderIndex = i9715[1]
  i9714.name = i9715[2]
  i9714.passType = i9715[3]
  i9714.grabPassTextureName = i9715[4]
  i9714.usePass = !!i9715[5]
  i9714.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9715[6], i9714.zTest)
  i9714.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9715[7], i9714.zWrite)
  i9714.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9715[8], i9714.culling)
  i9714.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i9715[9], i9714.blending)
  i9714.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i9715[10], i9714.alphaBlending)
  i9714.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9715[11], i9714.colorWriteMask)
  i9714.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9715[12], i9714.offsetUnits)
  i9714.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9715[13], i9714.offsetFactor)
  i9714.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9715[14], i9714.stencilRef)
  i9714.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9715[15], i9714.stencilReadMask)
  i9714.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9715[16], i9714.stencilWriteMask)
  i9714.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i9715[17], i9714.stencilOp)
  i9714.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i9715[18], i9714.stencilOpFront)
  i9714.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i9715[19], i9714.stencilOpBack)
  var i9717 = i9715[20]
  var i9716 = []
  for(var i = 0; i < i9717.length; i += 1) {
    i9716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i9717[i + 0]) );
  }
  i9714.tags = i9716
  var i9719 = i9715[21]
  var i9718 = []
  for(var i = 0; i < i9719.length; i += 1) {
    i9718.push( i9719[i + 0] );
  }
  i9714.passDefinedKeywords = i9718
  var i9721 = i9715[22]
  var i9720 = []
  for(var i = 0; i < i9721.length; i += 1) {
    i9720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i9721[i + 0]) );
  }
  i9714.passDefinedKeywordGroups = i9720
  var i9723 = i9715[23]
  var i9722 = []
  for(var i = 0; i < i9723.length; i += 1) {
    i9722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i9723[i + 0]) );
  }
  i9714.variants = i9722
  var i9725 = i9715[24]
  var i9724 = []
  for(var i = 0; i < i9725.length; i += 1) {
    i9724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i9725[i + 0]) );
  }
  i9714.excludedVariants = i9724
  i9714.hasDepthReader = !!i9715[25]
  return i9714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i9726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i9727 = data
  i9726.val = i9727[0]
  i9726.name = i9727[1]
  return i9726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i9728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i9729 = data
  i9728.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9729[0], i9728.src)
  i9728.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9729[1], i9728.dst)
  i9728.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9729[2], i9728.op)
  return i9728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i9730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i9731 = data
  i9730.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9731[0], i9730.pass)
  i9730.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9731[1], i9730.fail)
  i9730.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9731[2], i9730.zFail)
  i9730.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9731[3], i9730.comp)
  return i9730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i9734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i9735 = data
  i9734.name = i9735[0]
  i9734.value = i9735[1]
  return i9734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i9738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i9739 = data
  var i9741 = i9739[0]
  var i9740 = []
  for(var i = 0; i < i9741.length; i += 1) {
    i9740.push( i9741[i + 0] );
  }
  i9738.keywords = i9740
  i9738.hasDiscard = !!i9739[1]
  return i9738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i9744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i9745 = data
  i9744.passId = i9745[0]
  i9744.subShaderIndex = i9745[1]
  var i9747 = i9745[2]
  var i9746 = []
  for(var i = 0; i < i9747.length; i += 1) {
    i9746.push( i9747[i + 0] );
  }
  i9744.keywords = i9746
  i9744.vertexProgram = i9745[3]
  i9744.fragmentProgram = i9745[4]
  i9744.exportedForWebGl2 = !!i9745[5]
  i9744.readDepth = !!i9745[6]
  return i9744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i9750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i9751 = data
  request.r(i9751[0], i9751[1], 0, i9750, 'shader')
  i9750.pass = i9751[2]
  return i9750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i9754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i9755 = data
  i9754.name = i9755[0]
  i9754.type = i9755[1]
  i9754.value = new pc.Vec4( i9755[2], i9755[3], i9755[4], i9755[5] )
  i9754.textureValue = i9755[6]
  i9754.shaderPropertyFlag = i9755[7]
  return i9754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i9756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i9757 = data
  i9756.name = i9757[0]
  request.r(i9757[1], i9757[2], 0, i9756, 'texture')
  i9756.aabb = i9757[3]
  i9756.vertices = i9757[4]
  i9756.triangles = i9757[5]
  i9756.textureRect = UnityEngine.Rect.MinMaxRect(i9757[6], i9757[7], i9757[8], i9757[9])
  i9756.packedRect = UnityEngine.Rect.MinMaxRect(i9757[10], i9757[11], i9757[12], i9757[13])
  i9756.border = new pc.Vec4( i9757[14], i9757[15], i9757[16], i9757[17] )
  i9756.transparency = i9757[18]
  i9756.bounds = i9757[19]
  i9756.pixelsPerUnit = i9757[20]
  i9756.textureWidth = i9757[21]
  i9756.textureHeight = i9757[22]
  i9756.nativeSize = new pc.Vec2( i9757[23], i9757[24] )
  i9756.pivot = new pc.Vec2( i9757[25], i9757[26] )
  i9756.textureRectOffset = new pc.Vec2( i9757[27], i9757[28] )
  return i9756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i9758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i9759 = data
  i9758.name = i9759[0]
  return i9758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i9760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i9761 = data
  i9760.name = i9761[0]
  i9760.ascent = i9761[1]
  i9760.originalLineHeight = i9761[2]
  i9760.fontSize = i9761[3]
  var i9763 = i9761[4]
  var i9762 = []
  for(var i = 0; i < i9763.length; i += 1) {
    i9762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i9763[i + 0]) );
  }
  i9760.characterInfo = i9762
  request.r(i9761[5], i9761[6], 0, i9760, 'texture')
  i9760.originalFontSize = i9761[7]
  return i9760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i9766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i9767 = data
  i9766.index = i9767[0]
  i9766.advance = i9767[1]
  i9766.bearing = i9767[2]
  i9766.glyphWidth = i9767[3]
  i9766.glyphHeight = i9767[4]
  i9766.minX = i9767[5]
  i9766.maxX = i9767[6]
  i9766.minY = i9767[7]
  i9766.maxY = i9767[8]
  i9766.uvBottomLeftX = i9767[9]
  i9766.uvBottomLeftY = i9767[10]
  i9766.uvBottomRightX = i9767[11]
  i9766.uvBottomRightY = i9767[12]
  i9766.uvTopLeftX = i9767[13]
  i9766.uvTopLeftY = i9767[14]
  i9766.uvTopRightX = i9767[15]
  i9766.uvTopRightY = i9767[16]
  return i9766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i9768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i9769 = data
  i9768.name = i9769[0]
  i9768.bytes64 = i9769[1]
  i9768.data = i9769[2]
  return i9768
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i9770 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i9771 = data
  i9770.normalStyle = i9771[0]
  i9770.normalSpacingOffset = i9771[1]
  i9770.boldStyle = i9771[2]
  i9770.boldSpacing = i9771[3]
  i9770.italicStyle = i9771[4]
  i9770.tabSize = i9771[5]
  request.r(i9771[6], i9771[7], 0, i9770, 'atlas')
  i9770.m_SourceFontFileGUID = i9771[8]
  i9770.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i9771[9], i9770.m_CreationSettings)
  request.r(i9771[10], i9771[11], 0, i9770, 'm_SourceFontFile')
  i9770.m_SourceFontFilePath = i9771[12]
  i9770.m_AtlasPopulationMode = i9771[13]
  i9770.InternalDynamicOS = !!i9771[14]
  var i9773 = i9771[15]
  var i9772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i9773.length; i += 1) {
    i9772.add(request.d('UnityEngine.TextCore.Glyph', i9773[i + 0]));
  }
  i9770.m_GlyphTable = i9772
  var i9775 = i9771[16]
  var i9774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i9775.length; i += 1) {
    i9774.add(request.d('TMPro.TMP_Character', i9775[i + 0]));
  }
  i9770.m_CharacterTable = i9774
  var i9777 = i9771[17]
  var i9776 = []
  for(var i = 0; i < i9777.length; i += 2) {
  request.r(i9777[i + 0], i9777[i + 1], 2, i9776, '')
  }
  i9770.m_AtlasTextures = i9776
  i9770.m_AtlasTextureIndex = i9771[18]
  i9770.m_IsMultiAtlasTexturesEnabled = !!i9771[19]
  i9770.m_GetFontFeatures = !!i9771[20]
  i9770.m_ClearDynamicDataOnBuild = !!i9771[21]
  i9770.m_AtlasWidth = i9771[22]
  i9770.m_AtlasHeight = i9771[23]
  i9770.m_AtlasPadding = i9771[24]
  i9770.m_AtlasRenderMode = i9771[25]
  var i9779 = i9771[26]
  var i9778 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i9779.length; i += 1) {
    i9778.add(request.d('UnityEngine.TextCore.GlyphRect', i9779[i + 0]));
  }
  i9770.m_UsedGlyphRects = i9778
  var i9781 = i9771[27]
  var i9780 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i9781.length; i += 1) {
    i9780.add(request.d('UnityEngine.TextCore.GlyphRect', i9781[i + 0]));
  }
  i9770.m_FreeGlyphRects = i9780
  i9770.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i9771[28], i9770.m_FontFeatureTable)
  i9770.m_ShouldReimportFontFeatures = !!i9771[29]
  var i9783 = i9771[30]
  var i9782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i9783.length; i += 2) {
  request.r(i9783[i + 0], i9783[i + 1], 1, i9782, '')
  }
  i9770.m_FallbackFontAssetTable = i9782
  var i9785 = i9771[31]
  var i9784 = []
  for(var i = 0; i < i9785.length; i += 1) {
    i9784.push( request.d('TMPro.TMP_FontWeightPair', i9785[i + 0]) );
  }
  i9770.m_FontWeightTable = i9784
  var i9787 = i9771[32]
  var i9786 = []
  for(var i = 0; i < i9787.length; i += 1) {
    i9786.push( request.d('TMPro.TMP_FontWeightPair', i9787[i + 0]) );
  }
  i9770.fontWeights = i9786
  i9770.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i9771[33], i9770.m_fontInfo)
  var i9789 = i9771[34]
  var i9788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i9789.length; i += 1) {
    i9788.add(request.d('TMPro.TMP_Glyph', i9789[i + 0]));
  }
  i9770.m_glyphInfoList = i9788
  i9770.m_KerningTable = request.d('TMPro.KerningTable', i9771[35], i9770.m_KerningTable)
  var i9791 = i9771[36]
  var i9790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i9791.length; i += 2) {
  request.r(i9791[i + 0], i9791[i + 1], 1, i9790, '')
  }
  i9770.fallbackFontAssets = i9790
  i9770.m_Version = i9771[37]
  i9770.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i9771[38], i9770.m_FaceInfo)
  request.r(i9771[39], i9771[40], 0, i9770, 'm_Material')
  return i9770
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i9792 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i9793 = data
  i9792.sourceFontFileName = i9793[0]
  i9792.sourceFontFileGUID = i9793[1]
  i9792.faceIndex = i9793[2]
  i9792.pointSizeSamplingMode = i9793[3]
  i9792.pointSize = i9793[4]
  i9792.padding = i9793[5]
  i9792.paddingMode = i9793[6]
  i9792.packingMode = i9793[7]
  i9792.atlasWidth = i9793[8]
  i9792.atlasHeight = i9793[9]
  i9792.characterSetSelectionMode = i9793[10]
  i9792.characterSequence = i9793[11]
  i9792.referencedFontAssetGUID = i9793[12]
  i9792.referencedTextAssetGUID = i9793[13]
  i9792.fontStyle = i9793[14]
  i9792.fontStyleModifier = i9793[15]
  i9792.renderMode = i9793[16]
  i9792.includeFontFeatures = !!i9793[17]
  return i9792
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i9796 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i9797 = data
  i9796.m_Index = i9797[0]
  i9796.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i9797[1], i9796.m_Metrics)
  i9796.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i9797[2], i9796.m_GlyphRect)
  i9796.m_Scale = i9797[3]
  i9796.m_AtlasIndex = i9797[4]
  i9796.m_ClassDefinitionType = i9797[5]
  return i9796
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i9798 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i9799 = data
  i9798.m_Width = i9799[0]
  i9798.m_Height = i9799[1]
  i9798.m_HorizontalBearingX = i9799[2]
  i9798.m_HorizontalBearingY = i9799[3]
  i9798.m_HorizontalAdvance = i9799[4]
  return i9798
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i9800 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i9801 = data
  i9800.m_X = i9801[0]
  i9800.m_Y = i9801[1]
  i9800.m_Width = i9801[2]
  i9800.m_Height = i9801[3]
  return i9800
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i9804 = root || request.c( 'TMPro.TMP_Character' )
  var i9805 = data
  i9804.m_ElementType = i9805[0]
  i9804.m_Unicode = i9805[1]
  i9804.m_GlyphIndex = i9805[2]
  i9804.m_Scale = i9805[3]
  return i9804
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i9810 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i9811 = data
  var i9813 = i9811[0]
  var i9812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i9813.length; i += 1) {
    i9812.add(request.d('TMPro.MultipleSubstitutionRecord', i9813[i + 0]));
  }
  i9810.m_MultipleSubstitutionRecords = i9812
  var i9815 = i9811[1]
  var i9814 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i9815.length; i += 1) {
    i9814.add(request.d('TMPro.LigatureSubstitutionRecord', i9815[i + 0]));
  }
  i9810.m_LigatureSubstitutionRecords = i9814
  var i9817 = i9811[2]
  var i9816 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i9817.length; i += 1) {
    i9816.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i9817[i + 0]));
  }
  i9810.m_GlyphPairAdjustmentRecords = i9816
  var i9819 = i9811[3]
  var i9818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i9819.length; i += 1) {
    i9818.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i9819[i + 0]));
  }
  i9810.m_MarkToBaseAdjustmentRecords = i9818
  var i9821 = i9811[4]
  var i9820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i9821.length; i += 1) {
    i9820.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i9821[i + 0]));
  }
  i9810.m_MarkToMarkAdjustmentRecords = i9820
  return i9810
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i9824 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i9825 = data
  i9824.m_TargetGlyphID = i9825[0]
  i9824.m_SubstituteGlyphIDs = i9825[1]
  return i9824
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i9828 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i9829 = data
  i9828.m_ComponentGlyphIDs = i9829[0]
  i9828.m_LigatureGlyphID = i9829[1]
  return i9828
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i9832 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i9833 = data
  i9832.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i9833[0], i9832.m_FirstAdjustmentRecord)
  i9832.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i9833[1], i9832.m_SecondAdjustmentRecord)
  i9832.m_FeatureLookupFlags = i9833[2]
  return i9832
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i9836 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i9837 = data
  i9836.m_BaseGlyphID = i9837[0]
  i9836.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i9837[1], i9836.m_BaseGlyphAnchorPoint)
  i9836.m_MarkGlyphID = i9837[2]
  i9836.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i9837[3], i9836.m_MarkPositionAdjustment)
  return i9836
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i9840 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i9841 = data
  i9840.m_BaseMarkGlyphID = i9841[0]
  i9840.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i9841[1], i9840.m_BaseMarkGlyphAnchorPoint)
  i9840.m_CombiningMarkGlyphID = i9841[2]
  i9840.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i9841[3], i9840.m_CombiningMarkPositionAdjustment)
  return i9840
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i9846 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i9847 = data
  request.r(i9847[0], i9847[1], 0, i9846, 'regularTypeface')
  request.r(i9847[2], i9847[3], 0, i9846, 'italicTypeface')
  return i9846
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i9848 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i9849 = data
  i9848.Name = i9849[0]
  i9848.PointSize = i9849[1]
  i9848.Scale = i9849[2]
  i9848.CharacterCount = i9849[3]
  i9848.LineHeight = i9849[4]
  i9848.Baseline = i9849[5]
  i9848.Ascender = i9849[6]
  i9848.CapHeight = i9849[7]
  i9848.Descender = i9849[8]
  i9848.CenterLine = i9849[9]
  i9848.SuperscriptOffset = i9849[10]
  i9848.SubscriptOffset = i9849[11]
  i9848.SubSize = i9849[12]
  i9848.Underline = i9849[13]
  i9848.UnderlineThickness = i9849[14]
  i9848.strikethrough = i9849[15]
  i9848.strikethroughThickness = i9849[16]
  i9848.TabWidth = i9849[17]
  i9848.Padding = i9849[18]
  i9848.AtlasWidth = i9849[19]
  i9848.AtlasHeight = i9849[20]
  return i9848
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i9852 = root || request.c( 'TMPro.TMP_Glyph' )
  var i9853 = data
  i9852.id = i9853[0]
  i9852.x = i9853[1]
  i9852.y = i9853[2]
  i9852.width = i9853[3]
  i9852.height = i9853[4]
  i9852.xOffset = i9853[5]
  i9852.yOffset = i9853[6]
  i9852.xAdvance = i9853[7]
  i9852.scale = i9853[8]
  return i9852
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i9854 = root || request.c( 'TMPro.KerningTable' )
  var i9855 = data
  var i9857 = i9855[0]
  var i9856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i9857.length; i += 1) {
    i9856.add(request.d('TMPro.KerningPair', i9857[i + 0]));
  }
  i9854.kerningPairs = i9856
  return i9854
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i9860 = root || request.c( 'TMPro.KerningPair' )
  var i9861 = data
  i9860.xOffset = i9861[0]
  i9860.m_FirstGlyph = i9861[1]
  i9860.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i9861[2], i9860.m_FirstGlyphAdjustments)
  i9860.m_SecondGlyph = i9861[3]
  i9860.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i9861[4], i9860.m_SecondGlyphAdjustments)
  i9860.m_IgnoreSpacingAdjustments = !!i9861[5]
  return i9860
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i9862 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i9863 = data
  i9862.m_FaceIndex = i9863[0]
  i9862.m_FamilyName = i9863[1]
  i9862.m_StyleName = i9863[2]
  i9862.m_PointSize = i9863[3]
  i9862.m_Scale = i9863[4]
  i9862.m_UnitsPerEM = i9863[5]
  i9862.m_LineHeight = i9863[6]
  i9862.m_AscentLine = i9863[7]
  i9862.m_CapLine = i9863[8]
  i9862.m_MeanLine = i9863[9]
  i9862.m_Baseline = i9863[10]
  i9862.m_DescentLine = i9863[11]
  i9862.m_SuperscriptOffset = i9863[12]
  i9862.m_SuperscriptSize = i9863[13]
  i9862.m_SubscriptOffset = i9863[14]
  i9862.m_SubscriptSize = i9863[15]
  i9862.m_UnderlineOffset = i9863[16]
  i9862.m_UnderlineThickness = i9863[17]
  i9862.m_StrikethroughOffset = i9863[18]
  i9862.m_StrikethroughThickness = i9863[19]
  i9862.m_TabWidth = i9863[20]
  return i9862
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i9864 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i9865 = data
  var i9867 = i9865[0]
  var i9866 = []
  for(var i = 0; i < i9867.length; i += 2) {
  request.r(i9867[i + 0], i9867[i + 1], 2, i9866, '')
  }
  i9864.atlasAssets = i9866
  i9864.scale = i9865[1]
  request.r(i9865[2], i9865[3], 0, i9864, 'skeletonJSON')
  i9864.isUpgradingBlendModeMaterials = !!i9865[4]
  i9864.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i9865[5], i9864.blendModeMaterials)
  var i9869 = i9865[6]
  var i9868 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i9869.length; i += 2) {
  request.r(i9869[i + 0], i9869[i + 1], 1, i9868, '')
  }
  i9864.skeletonDataModifiers = i9868
  var i9871 = i9865[7]
  var i9870 = []
  for(var i = 0; i < i9871.length; i += 1) {
    i9870.push( i9871[i + 0] );
  }
  i9864.fromAnimation = i9870
  var i9873 = i9865[8]
  var i9872 = []
  for(var i = 0; i < i9873.length; i += 1) {
    i9872.push( i9873[i + 0] );
  }
  i9864.toAnimation = i9872
  i9864.duration = i9865[9]
  i9864.defaultMix = i9865[10]
  request.r(i9865[11], i9865[12], 0, i9864, 'controller')
  return i9864
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i9876 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i9877 = data
  i9876.applyAdditiveMaterial = !!i9877[0]
  var i9879 = i9877[1]
  var i9878 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i9879.length; i += 1) {
    i9878.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i9879[i + 0]));
  }
  i9876.additiveMaterials = i9878
  var i9881 = i9877[2]
  var i9880 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i9881.length; i += 1) {
    i9880.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i9881[i + 0]));
  }
  i9876.multiplyMaterials = i9880
  var i9883 = i9877[3]
  var i9882 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i9883.length; i += 1) {
    i9882.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i9883[i + 0]));
  }
  i9876.screenMaterials = i9882
  i9876.requiresBlendModeMaterials = !!i9877[4]
  return i9876
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i9886 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i9887 = data
  i9886.pageName = i9887[0]
  request.r(i9887[1], i9887[2], 0, i9886, 'material')
  return i9886
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i9890 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i9891 = data
  request.r(i9891[0], i9891[1], 0, i9890, 'atlasFile')
  var i9893 = i9891[2]
  var i9892 = []
  for(var i = 0; i < i9893.length; i += 2) {
  request.r(i9893[i + 0], i9893[i + 1], 2, i9892, '')
  }
  i9890.materials = i9892
  i9890.textureLoadingMode = i9891[3]
  request.r(i9891[4], i9891[5], 0, i9890, 'onDemandTextureLoader')
  return i9890
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i9894 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i9895 = data
  i9894.useSafeMode = !!i9895[0]
  i9894.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i9895[1], i9894.safeModeOptions)
  i9894.timeScale = i9895[2]
  i9894.unscaledTimeScale = i9895[3]
  i9894.useSmoothDeltaTime = !!i9895[4]
  i9894.maxSmoothUnscaledTime = i9895[5]
  i9894.rewindCallbackMode = i9895[6]
  i9894.showUnityEditorReport = !!i9895[7]
  i9894.logBehaviour = i9895[8]
  i9894.drawGizmos = !!i9895[9]
  i9894.defaultRecyclable = !!i9895[10]
  i9894.defaultAutoPlay = i9895[11]
  i9894.defaultUpdateType = i9895[12]
  i9894.defaultTimeScaleIndependent = !!i9895[13]
  i9894.defaultEaseType = i9895[14]
  i9894.defaultEaseOvershootOrAmplitude = i9895[15]
  i9894.defaultEasePeriod = i9895[16]
  i9894.defaultAutoKill = !!i9895[17]
  i9894.defaultLoopType = i9895[18]
  i9894.debugMode = !!i9895[19]
  i9894.debugStoreTargetId = !!i9895[20]
  i9894.showPreviewPanel = !!i9895[21]
  i9894.storeSettingsLocation = i9895[22]
  i9894.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i9895[23], i9894.modules)
  i9894.createASMDEF = !!i9895[24]
  i9894.showPlayingTweens = !!i9895[25]
  i9894.showPausedTweens = !!i9895[26]
  return i9894
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i9896 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i9897 = data
  i9896.logBehaviour = i9897[0]
  i9896.nestedTweenFailureBehaviour = i9897[1]
  return i9896
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i9898 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i9899 = data
  i9898.showPanel = !!i9899[0]
  i9898.audioEnabled = !!i9899[1]
  i9898.physicsEnabled = !!i9899[2]
  i9898.physics2DEnabled = !!i9899[3]
  i9898.spriteEnabled = !!i9899[4]
  i9898.uiEnabled = !!i9899[5]
  i9898.uiToolkitEnabled = !!i9899[6]
  i9898.textMeshProEnabled = !!i9899[7]
  i9898.tk2DEnabled = !!i9899[8]
  i9898.deAudioEnabled = !!i9899[9]
  i9898.deUnityExtendedEnabled = !!i9899[10]
  i9898.epoOutlineEnabled = !!i9899[11]
  return i9898
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i9900 = root || request.c( 'TMPro.TMP_Settings' )
  var i9901 = data
  i9900.assetVersion = i9901[0]
  i9900.m_TextWrappingMode = i9901[1]
  i9900.m_enableKerning = !!i9901[2]
  var i9903 = i9901[3]
  var i9902 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i9903.length; i += 1) {
    i9902.add(i9903[i + 0]);
  }
  i9900.m_ActiveFontFeatures = i9902
  i9900.m_enableExtraPadding = !!i9901[4]
  i9900.m_enableTintAllSprites = !!i9901[5]
  i9900.m_enableParseEscapeCharacters = !!i9901[6]
  i9900.m_EnableRaycastTarget = !!i9901[7]
  i9900.m_GetFontFeaturesAtRuntime = !!i9901[8]
  i9900.m_missingGlyphCharacter = i9901[9]
  i9900.m_ClearDynamicDataOnBuild = !!i9901[10]
  i9900.m_warningsDisabled = !!i9901[11]
  request.r(i9901[12], i9901[13], 0, i9900, 'm_defaultFontAsset')
  i9900.m_defaultFontAssetPath = i9901[14]
  i9900.m_defaultFontSize = i9901[15]
  i9900.m_defaultAutoSizeMinRatio = i9901[16]
  i9900.m_defaultAutoSizeMaxRatio = i9901[17]
  i9900.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i9901[18], i9901[19] )
  i9900.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i9901[20], i9901[21] )
  i9900.m_autoSizeTextContainer = !!i9901[22]
  i9900.m_IsTextObjectScaleStatic = !!i9901[23]
  var i9905 = i9901[24]
  var i9904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i9905.length; i += 2) {
  request.r(i9905[i + 0], i9905[i + 1], 1, i9904, '')
  }
  i9900.m_fallbackFontAssets = i9904
  i9900.m_matchMaterialPreset = !!i9901[25]
  i9900.m_HideSubTextObjects = !!i9901[26]
  request.r(i9901[27], i9901[28], 0, i9900, 'm_defaultSpriteAsset')
  i9900.m_defaultSpriteAssetPath = i9901[29]
  i9900.m_enableEmojiSupport = !!i9901[30]
  i9900.m_MissingCharacterSpriteUnicode = i9901[31]
  var i9907 = i9901[32]
  var i9906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i9907.length; i += 2) {
  request.r(i9907[i + 0], i9907[i + 1], 1, i9906, '')
  }
  i9900.m_EmojiFallbackTextAssets = i9906
  i9900.m_defaultColorGradientPresetsPath = i9901[33]
  request.r(i9901[34], i9901[35], 0, i9900, 'm_defaultStyleSheet')
  i9900.m_StyleSheetsResourcePath = i9901[36]
  request.r(i9901[37], i9901[38], 0, i9900, 'm_leadingCharacters')
  request.r(i9901[39], i9901[40], 0, i9900, 'm_followingCharacters')
  i9900.m_UseModernHangulLineBreakingRules = !!i9901[41]
  return i9900
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i9910 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i9911 = data
  i9910.m_GlyphIndex = i9911[0]
  i9910.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i9911[1], i9910.m_GlyphValueRecord)
  return i9910
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i9912 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i9913 = data
  i9912.m_XPlacement = i9913[0]
  i9912.m_YPlacement = i9913[1]
  i9912.m_XAdvance = i9913[2]
  i9912.m_YAdvance = i9913[3]
  return i9912
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i9914 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i9915 = data
  request.r(i9915[0], i9915[1], 0, i9914, 'spriteSheet')
  var i9917 = i9915[2]
  var i9916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i9917.length; i += 1) {
    i9916.add(request.d('TMPro.TMP_Sprite', i9917[i + 0]));
  }
  i9914.spriteInfoList = i9916
  var i9919 = i9915[3]
  var i9918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i9919.length; i += 2) {
  request.r(i9919[i + 0], i9919[i + 1], 1, i9918, '')
  }
  i9914.fallbackSpriteAssets = i9918
  var i9921 = i9915[4]
  var i9920 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i9921.length; i += 1) {
    i9920.add(request.d('TMPro.TMP_SpriteCharacter', i9921[i + 0]));
  }
  i9914.m_SpriteCharacterTable = i9920
  var i9923 = i9915[5]
  var i9922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i9923.length; i += 1) {
    i9922.add(request.d('TMPro.TMP_SpriteGlyph', i9923[i + 0]));
  }
  i9914.m_GlyphTable = i9922
  i9914.m_Version = i9915[6]
  i9914.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i9915[7], i9914.m_FaceInfo)
  request.r(i9915[8], i9915[9], 0, i9914, 'm_Material')
  return i9914
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i9926 = root || request.c( 'TMPro.TMP_Sprite' )
  var i9927 = data
  i9926.name = i9927[0]
  i9926.hashCode = i9927[1]
  i9926.unicode = i9927[2]
  i9926.pivot = new pc.Vec2( i9927[3], i9927[4] )
  request.r(i9927[5], i9927[6], 0, i9926, 'sprite')
  i9926.id = i9927[7]
  i9926.x = i9927[8]
  i9926.y = i9927[9]
  i9926.width = i9927[10]
  i9926.height = i9927[11]
  i9926.xOffset = i9927[12]
  i9926.yOffset = i9927[13]
  i9926.xAdvance = i9927[14]
  i9926.scale = i9927[15]
  return i9926
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i9932 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i9933 = data
  i9932.m_Name = i9933[0]
  i9932.m_ElementType = i9933[1]
  i9932.m_Unicode = i9933[2]
  i9932.m_GlyphIndex = i9933[3]
  i9932.m_Scale = i9933[4]
  return i9932
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i9936 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i9937 = data
  request.r(i9937[0], i9937[1], 0, i9936, 'sprite')
  i9936.m_Index = i9937[2]
  i9936.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i9937[3], i9936.m_Metrics)
  i9936.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i9937[4], i9936.m_GlyphRect)
  i9936.m_Scale = i9937[5]
  i9936.m_AtlasIndex = i9937[6]
  i9936.m_ClassDefinitionType = i9937[7]
  return i9936
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i9938 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i9939 = data
  var i9941 = i9939[0]
  var i9940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i9941.length; i += 1) {
    i9940.add(request.d('TMPro.TMP_Style', i9941[i + 0]));
  }
  i9938.m_StyleList = i9940
  return i9938
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i9944 = root || request.c( 'TMPro.TMP_Style' )
  var i9945 = data
  i9944.m_Name = i9945[0]
  i9944.m_HashCode = i9945[1]
  i9944.m_OpeningDefinition = i9945[2]
  i9944.m_ClosingDefinition = i9945[3]
  i9944.m_OpeningTagArray = i9945[4]
  i9944.m_ClosingTagArray = i9945[5]
  return i9944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i9946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i9947 = data
  var i9949 = i9947[0]
  var i9948 = []
  for(var i = 0; i < i9949.length; i += 1) {
    i9948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i9949[i + 0]) );
  }
  i9946.files = i9948
  i9946.componentToPrefabIds = i9947[1]
  return i9946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i9952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i9953 = data
  i9952.path = i9953[0]
  request.r(i9953[1], i9953[2], 0, i9952, 'unityObject')
  return i9952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i9954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i9955 = data
  var i9957 = i9955[0]
  var i9956 = []
  for(var i = 0; i < i9957.length; i += 1) {
    i9956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i9957[i + 0]) );
  }
  i9954.scriptsExecutionOrder = i9956
  var i9959 = i9955[1]
  var i9958 = []
  for(var i = 0; i < i9959.length; i += 1) {
    i9958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i9959[i + 0]) );
  }
  i9954.sortingLayers = i9958
  var i9961 = i9955[2]
  var i9960 = []
  for(var i = 0; i < i9961.length; i += 1) {
    i9960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i9961[i + 0]) );
  }
  i9954.cullingLayers = i9960
  i9954.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i9955[3], i9954.timeSettings)
  i9954.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i9955[4], i9954.physicsSettings)
  i9954.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i9955[5], i9954.physics2DSettings)
  i9954.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i9955[6], i9954.qualitySettings)
  i9954.enableRealtimeShadows = !!i9955[7]
  i9954.enableAutoInstancing = !!i9955[8]
  i9954.enableStaticBatching = !!i9955[9]
  i9954.enableDynamicBatching = !!i9955[10]
  i9954.usePreservativeDynamicBatching = !!i9955[11]
  i9954.lightmapEncodingQuality = i9955[12]
  i9954.desiredColorSpace = i9955[13]
  var i9963 = i9955[14]
  var i9962 = []
  for(var i = 0; i < i9963.length; i += 1) {
    i9962.push( i9963[i + 0] );
  }
  i9954.allTags = i9962
  return i9954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i9966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i9967 = data
  i9966.name = i9967[0]
  i9966.value = i9967[1]
  return i9966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i9970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i9971 = data
  i9970.id = i9971[0]
  i9970.name = i9971[1]
  i9970.value = i9971[2]
  return i9970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i9974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i9975 = data
  i9974.id = i9975[0]
  i9974.name = i9975[1]
  return i9974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i9976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i9977 = data
  i9976.fixedDeltaTime = i9977[0]
  i9976.maximumDeltaTime = i9977[1]
  i9976.timeScale = i9977[2]
  i9976.maximumParticleTimestep = i9977[3]
  return i9976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i9978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i9979 = data
  i9978.gravity = new pc.Vec3( i9979[0], i9979[1], i9979[2] )
  i9978.defaultSolverIterations = i9979[3]
  i9978.bounceThreshold = i9979[4]
  i9978.autoSyncTransforms = !!i9979[5]
  i9978.autoSimulation = !!i9979[6]
  var i9981 = i9979[7]
  var i9980 = []
  for(var i = 0; i < i9981.length; i += 1) {
    i9980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i9981[i + 0]) );
  }
  i9978.collisionMatrix = i9980
  return i9978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i9984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i9985 = data
  i9984.enabled = !!i9985[0]
  i9984.layerId = i9985[1]
  i9984.otherLayerId = i9985[2]
  return i9984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i9986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i9987 = data
  request.r(i9987[0], i9987[1], 0, i9986, 'material')
  i9986.gravity = new pc.Vec2( i9987[2], i9987[3] )
  i9986.positionIterations = i9987[4]
  i9986.velocityIterations = i9987[5]
  i9986.velocityThreshold = i9987[6]
  i9986.maxLinearCorrection = i9987[7]
  i9986.maxAngularCorrection = i9987[8]
  i9986.maxTranslationSpeed = i9987[9]
  i9986.maxRotationSpeed = i9987[10]
  i9986.baumgarteScale = i9987[11]
  i9986.baumgarteTOIScale = i9987[12]
  i9986.timeToSleep = i9987[13]
  i9986.linearSleepTolerance = i9987[14]
  i9986.angularSleepTolerance = i9987[15]
  i9986.defaultContactOffset = i9987[16]
  i9986.autoSimulation = !!i9987[17]
  i9986.queriesHitTriggers = !!i9987[18]
  i9986.queriesStartInColliders = !!i9987[19]
  i9986.callbacksOnDisable = !!i9987[20]
  i9986.reuseCollisionCallbacks = !!i9987[21]
  i9986.autoSyncTransforms = !!i9987[22]
  var i9989 = i9987[23]
  var i9988 = []
  for(var i = 0; i < i9989.length; i += 1) {
    i9988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i9989[i + 0]) );
  }
  i9986.collisionMatrix = i9988
  return i9986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i9992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i9993 = data
  i9992.enabled = !!i9993[0]
  i9992.layerId = i9993[1]
  i9992.otherLayerId = i9993[2]
  return i9992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i9994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i9995 = data
  var i9997 = i9995[0]
  var i9996 = []
  for(var i = 0; i < i9997.length; i += 1) {
    i9996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i9997[i + 0]) );
  }
  i9994.qualityLevels = i9996
  var i9999 = i9995[1]
  var i9998 = []
  for(var i = 0; i < i9999.length; i += 1) {
    i9998.push( i9999[i + 0] );
  }
  i9994.names = i9998
  i9994.shadows = i9995[2]
  i9994.anisotropicFiltering = i9995[3]
  i9994.antiAliasing = i9995[4]
  i9994.lodBias = i9995[5]
  i9994.shadowCascades = i9995[6]
  i9994.shadowDistance = i9995[7]
  i9994.shadowmaskMode = i9995[8]
  i9994.shadowProjection = i9995[9]
  i9994.shadowResolution = i9995[10]
  i9994.softParticles = !!i9995[11]
  i9994.softVegetation = !!i9995[12]
  i9994.activeColorSpace = i9995[13]
  i9994.desiredColorSpace = i9995[14]
  i9994.masterTextureLimit = i9995[15]
  i9994.maxQueuedFrames = i9995[16]
  i9994.particleRaycastBudget = i9995[17]
  i9994.pixelLightCount = i9995[18]
  i9994.realtimeReflectionProbes = !!i9995[19]
  i9994.shadowCascade2Split = i9995[20]
  i9994.shadowCascade4Split = new pc.Vec3( i9995[21], i9995[22], i9995[23] )
  i9994.streamingMipmapsActive = !!i9995[24]
  i9994.vSyncCount = i9995[25]
  i9994.asyncUploadBufferSize = i9995[26]
  i9994.asyncUploadTimeSlice = i9995[27]
  i9994.billboardsFaceCameraPosition = !!i9995[28]
  i9994.shadowNearPlaneOffset = i9995[29]
  i9994.streamingMipmapsMemoryBudget = i9995[30]
  i9994.maximumLODLevel = i9995[31]
  i9994.streamingMipmapsAddAllCameras = !!i9995[32]
  i9994.streamingMipmapsMaxLevelReduction = i9995[33]
  i9994.streamingMipmapsRenderersPerFrame = i9995[34]
  i9994.resolutionScalingFixedDPIFactor = i9995[35]
  i9994.streamingMipmapsMaxFileIORequests = i9995[36]
  i9994.currentQualityLevel = i9995[37]
  return i9994
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i10002 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i10003 = data
  i10002.m_XCoordinate = i10003[0]
  i10002.m_YCoordinate = i10003[1]
  return i10002
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i10004 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i10005 = data
  i10004.m_XPositionAdjustment = i10005[0]
  i10004.m_YPositionAdjustment = i10005[1]
  return i10004
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i10006 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i10007 = data
  i10006.xPlacement = i10007[0]
  i10006.yPlacement = i10007[1]
  i10006.xAdvance = i10007[2]
  i10006.yAdvance = i10007[3]
  return i10006
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[2],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[2],"75":[76],"77":[78],"79":[78],"5":[4],"25":[4],"80":[81],"82":[4],"83":[16,4],"84":[76],"26":[16,4],"85":[86,76],"87":[76],"88":[76,89],"90":[54],"91":[61],"92":[81],"93":[94],"95":[96],"97":[34],"98":[5],"99":[4],"100":[76,4],"15":[4,16],"101":[4],"102":[16,4],"103":[76],"104":[16,4],"105":[4],"106":[107],"108":[107],"109":[107],"110":[4],"111":[4],"8":[5],"13":[16,4],"112":[4],"7":[5],"113":[4],"114":[4],"32":[4],"115":[4],"116":[4],"117":[4],"118":[4],"21":[4],"119":[4],"17":[16,4],"23":[4],"120":[4],"121":[4],"122":[4],"123":[16,4],"124":[4],"125":[34],"126":[34],"35":[34],"127":[34],"128":[2],"129":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.GameManager","UnityEngine.AudioClip","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.UI.Mask","UnityEngine.AudioSource","UnityEngine.UI.RectMask2D","GameController","Item","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","Playable.Door","Girl","Target","UnityEngine.CanvasGroup","UnityEngine.UI.HorizontalLayoutGroup","Playable.AudioManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "PA_BEQ";

Deserializers.lunaInitializationTime = "08/04/2026 10:21:04";

Deserializers.lunaDaysRunning = "31.7";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BEQ_V35_NgocNDL_HuyNQ";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1843";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4509";

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

Deserializers.buildID = "1b41b4c9-48d1-4b12-83c5-daf4a903065b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

