var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5456 = root || request.c( 'UnityEngine.JointSpring' )
  var i5457 = data
  i5456.spring = i5457[0]
  i5456.damper = i5457[1]
  i5456.targetPosition = i5457[2]
  return i5456
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5458 = root || request.c( 'UnityEngine.JointMotor' )
  var i5459 = data
  i5458.m_TargetVelocity = i5459[0]
  i5458.m_Force = i5459[1]
  i5458.m_FreeSpin = i5459[2]
  return i5458
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5460 = root || request.c( 'UnityEngine.JointLimits' )
  var i5461 = data
  i5460.m_Min = i5461[0]
  i5460.m_Max = i5461[1]
  i5460.m_Bounciness = i5461[2]
  i5460.m_BounceMinVelocity = i5461[3]
  i5460.m_ContactDistance = i5461[4]
  i5460.minBounce = i5461[5]
  i5460.maxBounce = i5461[6]
  return i5460
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5462 = root || request.c( 'UnityEngine.JointDrive' )
  var i5463 = data
  i5462.m_PositionSpring = i5463[0]
  i5462.m_PositionDamper = i5463[1]
  i5462.m_MaximumForce = i5463[2]
  i5462.m_UseAcceleration = i5463[3]
  return i5462
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5464 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5465 = data
  i5464.m_Spring = i5465[0]
  i5464.m_Damper = i5465[1]
  return i5464
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5466 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5467 = data
  i5466.m_Limit = i5467[0]
  i5466.m_Bounciness = i5467[1]
  i5466.m_ContactDistance = i5467[2]
  return i5466
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5468 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5469 = data
  i5468.m_ExtremumSlip = i5469[0]
  i5468.m_ExtremumValue = i5469[1]
  i5468.m_AsymptoteSlip = i5469[2]
  i5468.m_AsymptoteValue = i5469[3]
  i5468.m_Stiffness = i5469[4]
  return i5468
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5470 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5471 = data
  i5470.m_LowerAngle = i5471[0]
  i5470.m_UpperAngle = i5471[1]
  return i5470
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5472 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5473 = data
  i5472.m_MotorSpeed = i5473[0]
  i5472.m_MaximumMotorTorque = i5473[1]
  return i5472
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5474 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5475 = data
  i5474.m_DampingRatio = i5475[0]
  i5474.m_Frequency = i5475[1]
  i5474.m_Angle = i5475[2]
  return i5474
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5476 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5477 = data
  i5476.m_LowerTranslation = i5477[0]
  i5476.m_UpperTranslation = i5477[1]
  return i5476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5479 = data
  i5478.name = i5479[0]
  i5478.width = i5479[1]
  i5478.height = i5479[2]
  i5478.mipmapCount = i5479[3]
  i5478.anisoLevel = i5479[4]
  i5478.filterMode = i5479[5]
  i5478.hdr = !!i5479[6]
  i5478.format = i5479[7]
  i5478.wrapMode = i5479[8]
  i5478.alphaIsTransparency = !!i5479[9]
  i5478.alphaSource = i5479[10]
  i5478.graphicsFormat = i5479[11]
  i5478.sRGBTexture = !!i5479[12]
  i5478.desiredColorSpace = i5479[13]
  i5478.wrapU = i5479[14]
  i5478.wrapV = i5479[15]
  return i5478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5480 = root || new pc.UnityMaterial()
  var i5481 = data
  i5480.name = i5481[0]
  request.r(i5481[1], i5481[2], 0, i5480, 'shader')
  i5480.renderQueue = i5481[3]
  i5480.enableInstancing = !!i5481[4]
  var i5483 = i5481[5]
  var i5482 = []
  for(var i = 0; i < i5483.length; i += 1) {
    i5482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5483[i + 0]) );
  }
  i5480.floatParameters = i5482
  var i5485 = i5481[6]
  var i5484 = []
  for(var i = 0; i < i5485.length; i += 1) {
    i5484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5485[i + 0]) );
  }
  i5480.colorParameters = i5484
  var i5487 = i5481[7]
  var i5486 = []
  for(var i = 0; i < i5487.length; i += 1) {
    i5486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5487[i + 0]) );
  }
  i5480.vectorParameters = i5486
  var i5489 = i5481[8]
  var i5488 = []
  for(var i = 0; i < i5489.length; i += 1) {
    i5488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5489[i + 0]) );
  }
  i5480.textureParameters = i5488
  var i5491 = i5481[9]
  var i5490 = []
  for(var i = 0; i < i5491.length; i += 1) {
    i5490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5491[i + 0]) );
  }
  i5480.materialFlags = i5490
  return i5480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5495 = data
  i5494.name = i5495[0]
  i5494.value = i5495[1]
  return i5494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5499 = data
  i5498.name = i5499[0]
  i5498.value = new pc.Color(i5499[1], i5499[2], i5499[3], i5499[4])
  return i5498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5503 = data
  i5502.name = i5503[0]
  i5502.value = new pc.Vec4( i5503[1], i5503[2], i5503[3], i5503[4] )
  return i5502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5507 = data
  i5506.name = i5507[0]
  request.r(i5507[1], i5507[2], 0, i5506, 'value')
  return i5506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5511 = data
  i5510.name = i5511[0]
  i5510.enabled = !!i5511[1]
  return i5510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5513 = data
  i5512.name = i5513[0]
  i5512.index = i5513[1]
  i5512.startup = !!i5513[2]
  return i5512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5515 = data
  i5514.aspect = i5515[0]
  i5514.orthographic = !!i5515[1]
  i5514.orthographicSize = i5515[2]
  i5514.backgroundColor = new pc.Color(i5515[3], i5515[4], i5515[5], i5515[6])
  i5514.nearClipPlane = i5515[7]
  i5514.farClipPlane = i5515[8]
  i5514.fieldOfView = i5515[9]
  i5514.depth = i5515[10]
  i5514.clearFlags = i5515[11]
  i5514.cullingMask = i5515[12]
  i5514.rect = i5515[13]
  request.r(i5515[14], i5515[15], 0, i5514, 'targetTexture')
  i5514.usePhysicalProperties = !!i5515[16]
  i5514.focalLength = i5515[17]
  i5514.sensorSize = new pc.Vec2( i5515[18], i5515[19] )
  i5514.lensShift = new pc.Vec2( i5515[20], i5515[21] )
  i5514.gateFit = i5515[22]
  i5514.commandBufferCount = i5515[23]
  i5514.cameraType = i5515[24]
  i5514.enabled = !!i5515[25]
  return i5514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5517 = data
  i5516.name = i5517[0]
  i5516.tagId = i5517[1]
  i5516.enabled = !!i5517[2]
  i5516.isStatic = !!i5517[3]
  i5516.layer = i5517[4]
  return i5516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5519 = data
  i5518.pivot = new pc.Vec2( i5519[0], i5519[1] )
  i5518.anchorMin = new pc.Vec2( i5519[2], i5519[3] )
  i5518.anchorMax = new pc.Vec2( i5519[4], i5519[5] )
  i5518.sizeDelta = new pc.Vec2( i5519[6], i5519[7] )
  i5518.anchoredPosition3D = new pc.Vec3( i5519[8], i5519[9], i5519[10] )
  i5518.rotation = new pc.Quat(i5519[11], i5519[12], i5519[13], i5519[14])
  i5518.scale = new pc.Vec3( i5519[15], i5519[16], i5519[17] )
  return i5518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5521 = data
  i5520.planeDistance = i5521[0]
  i5520.referencePixelsPerUnit = i5521[1]
  i5520.isFallbackOverlay = !!i5521[2]
  i5520.renderMode = i5521[3]
  i5520.renderOrder = i5521[4]
  i5520.sortingLayerName = i5521[5]
  i5520.sortingOrder = i5521[6]
  i5520.scaleFactor = i5521[7]
  request.r(i5521[8], i5521[9], 0, i5520, 'worldCamera')
  i5520.overrideSorting = !!i5521[10]
  i5520.pixelPerfect = !!i5521[11]
  i5520.targetDisplay = i5521[12]
  i5520.overridePixelPerfect = !!i5521[13]
  i5520.enabled = !!i5521[14]
  return i5520
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5522 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5523 = data
  i5522.m_UiScaleMode = i5523[0]
  i5522.m_ReferencePixelsPerUnit = i5523[1]
  i5522.m_ScaleFactor = i5523[2]
  i5522.m_ReferenceResolution = new pc.Vec2( i5523[3], i5523[4] )
  i5522.m_ScreenMatchMode = i5523[5]
  i5522.m_MatchWidthOrHeight = i5523[6]
  i5522.m_PhysicalUnit = i5523[7]
  i5522.m_FallbackScreenDPI = i5523[8]
  i5522.m_DefaultSpriteDPI = i5523[9]
  i5522.m_DynamicPixelsPerUnit = i5523[10]
  i5522.m_PresetInfoIsWorld = !!i5523[11]
  return i5522
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5524 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5525 = data
  i5524.m_IgnoreReversedGraphics = !!i5525[0]
  i5524.m_BlockingObjects = i5525[1]
  i5524.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5525[2] )
  return i5524
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i5526 = root || request.c( 'Playable.GameManager' )
  var i5527 = data
  i5526.EventCountdownEndGame = request.d('System.Action', i5527[0], i5526.EventCountdownEndGame)
  i5526._totalEvent = i5527[1]
  i5526._endTime = i5527[2]
  request.r(i5527[3], i5527[4], 0, i5526, '_backgroundMusic')
  request.r(i5527[5], i5527[6], 0, i5526, '_backgroundTexture')
  request.r(i5527[7], i5527[8], 0, i5526, '_btnBlock')
  request.r(i5527[9], i5527[10], 0, i5526, '_background')
  request.r(i5527[11], i5527[12], 0, i5526, '_progressFillImage')
  request.r(i5527[13], i5527[14], 0, i5526, '_progressText')
  i5526._progressTweenDuration = i5527[15]
  request.r(i5527[16], i5527[17], 0, i5526, '_timerFillImage')
  request.r(i5527[18], i5527[19], 0, i5526, '_timerText')
  i5526._timerPunchScale = i5527[20]
  return i5526
}

Deserializers["System.Action"] = function (request, data, root) {
  var i5528 = root || request.c( 'System.Action' )
  var i5529 = data
  return i5528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5531 = data
  i5530.cullTransparentMesh = !!i5531[0]
  return i5530
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5532 = root || request.c( 'UnityEngine.UI.Image' )
  var i5533 = data
  request.r(i5533[0], i5533[1], 0, i5532, 'm_Sprite')
  i5532.m_Type = i5533[2]
  i5532.m_PreserveAspect = !!i5533[3]
  i5532.m_FillCenter = !!i5533[4]
  i5532.m_FillMethod = i5533[5]
  i5532.m_FillAmount = i5533[6]
  i5532.m_FillClockwise = !!i5533[7]
  i5532.m_FillOrigin = i5533[8]
  i5532.m_UseSpriteMesh = !!i5533[9]
  i5532.m_PixelsPerUnitMultiplier = i5533[10]
  request.r(i5533[11], i5533[12], 0, i5532, 'm_Material')
  i5532.m_Maskable = !!i5533[13]
  i5532.m_Color = new pc.Color(i5533[14], i5533[15], i5533[16], i5533[17])
  i5532.m_RaycastTarget = !!i5533[18]
  i5532.m_RaycastPadding = new pc.Vec4( i5533[19], i5533[20], i5533[21], i5533[22] )
  return i5532
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i5534 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i5535 = data
  request.r(i5535[0], i5535[1], 0, i5534, 'm_Texture')
  i5534.m_UVRect = UnityEngine.Rect.MinMaxRect(i5535[2], i5535[3], i5535[4], i5535[5])
  request.r(i5535[6], i5535[7], 0, i5534, 'm_Material')
  i5534.m_Maskable = !!i5535[8]
  i5534.m_Color = new pc.Color(i5535[9], i5535[10], i5535[11], i5535[12])
  i5534.m_RaycastTarget = !!i5535[13]
  i5534.m_RaycastPadding = new pc.Vec4( i5535[14], i5535[15], i5535[16], i5535[17] )
  return i5534
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5536 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5537 = data
  i5536.m_hasFontAssetChanged = !!i5537[0]
  request.r(i5537[1], i5537[2], 0, i5536, 'm_baseMaterial')
  i5536.m_maskOffset = new pc.Vec4( i5537[3], i5537[4], i5537[5], i5537[6] )
  i5536.m_text = i5537[7]
  i5536.m_isRightToLeft = !!i5537[8]
  request.r(i5537[9], i5537[10], 0, i5536, 'm_fontAsset')
  request.r(i5537[11], i5537[12], 0, i5536, 'm_sharedMaterial')
  var i5539 = i5537[13]
  var i5538 = []
  for(var i = 0; i < i5539.length; i += 2) {
  request.r(i5539[i + 0], i5539[i + 1], 2, i5538, '')
  }
  i5536.m_fontSharedMaterials = i5538
  request.r(i5537[14], i5537[15], 0, i5536, 'm_fontMaterial')
  var i5541 = i5537[16]
  var i5540 = []
  for(var i = 0; i < i5541.length; i += 2) {
  request.r(i5541[i + 0], i5541[i + 1], 2, i5540, '')
  }
  i5536.m_fontMaterials = i5540
  i5536.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5537[17], i5537[18], i5537[19], i5537[20])
  i5536.m_fontColor = new pc.Color(i5537[21], i5537[22], i5537[23], i5537[24])
  i5536.m_enableVertexGradient = !!i5537[25]
  i5536.m_colorMode = i5537[26]
  i5536.m_fontColorGradient = request.d('TMPro.VertexGradient', i5537[27], i5536.m_fontColorGradient)
  request.r(i5537[28], i5537[29], 0, i5536, 'm_fontColorGradientPreset')
  request.r(i5537[30], i5537[31], 0, i5536, 'm_spriteAsset')
  i5536.m_tintAllSprites = !!i5537[32]
  request.r(i5537[33], i5537[34], 0, i5536, 'm_StyleSheet')
  i5536.m_TextStyleHashCode = i5537[35]
  i5536.m_overrideHtmlColors = !!i5537[36]
  i5536.m_faceColor = UnityEngine.Color32.ConstructColor(i5537[37], i5537[38], i5537[39], i5537[40])
  i5536.m_fontSize = i5537[41]
  i5536.m_fontSizeBase = i5537[42]
  i5536.m_fontWeight = i5537[43]
  i5536.m_enableAutoSizing = !!i5537[44]
  i5536.m_fontSizeMin = i5537[45]
  i5536.m_fontSizeMax = i5537[46]
  i5536.m_fontStyle = i5537[47]
  i5536.m_HorizontalAlignment = i5537[48]
  i5536.m_VerticalAlignment = i5537[49]
  i5536.m_textAlignment = i5537[50]
  i5536.m_characterSpacing = i5537[51]
  i5536.m_wordSpacing = i5537[52]
  i5536.m_lineSpacing = i5537[53]
  i5536.m_lineSpacingMax = i5537[54]
  i5536.m_paragraphSpacing = i5537[55]
  i5536.m_charWidthMaxAdj = i5537[56]
  i5536.m_TextWrappingMode = i5537[57]
  i5536.m_wordWrappingRatios = i5537[58]
  i5536.m_overflowMode = i5537[59]
  request.r(i5537[60], i5537[61], 0, i5536, 'm_linkedTextComponent')
  request.r(i5537[62], i5537[63], 0, i5536, 'parentLinkedComponent')
  i5536.m_enableKerning = !!i5537[64]
  var i5543 = i5537[65]
  var i5542 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5543.length; i += 1) {
    i5542.add(i5543[i + 0]);
  }
  i5536.m_ActiveFontFeatures = i5542
  i5536.m_enableExtraPadding = !!i5537[66]
  i5536.checkPaddingRequired = !!i5537[67]
  i5536.m_isRichText = !!i5537[68]
  i5536.m_parseCtrlCharacters = !!i5537[69]
  i5536.m_isOrthographic = !!i5537[70]
  i5536.m_isCullingEnabled = !!i5537[71]
  i5536.m_horizontalMapping = i5537[72]
  i5536.m_verticalMapping = i5537[73]
  i5536.m_uvLineOffset = i5537[74]
  i5536.m_geometrySortingOrder = i5537[75]
  i5536.m_IsTextObjectScaleStatic = !!i5537[76]
  i5536.m_VertexBufferAutoSizeReduction = !!i5537[77]
  i5536.m_useMaxVisibleDescender = !!i5537[78]
  i5536.m_pageToDisplay = i5537[79]
  i5536.m_margin = new pc.Vec4( i5537[80], i5537[81], i5537[82], i5537[83] )
  i5536.m_isUsingLegacyAnimationComponent = !!i5537[84]
  i5536.m_isVolumetricText = !!i5537[85]
  request.r(i5537[86], i5537[87], 0, i5536, 'm_Material')
  i5536.m_EmojiFallbackSupport = !!i5537[88]
  i5536.m_Maskable = !!i5537[89]
  i5536.m_Color = new pc.Color(i5537[90], i5537[91], i5537[92], i5537[93])
  i5536.m_RaycastTarget = !!i5537[94]
  i5536.m_RaycastPadding = new pc.Vec4( i5537[95], i5537[96], i5537[97], i5537[98] )
  return i5536
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5546 = root || request.c( 'TMPro.VertexGradient' )
  var i5547 = data
  i5546.topLeft = new pc.Color(i5547[0], i5547[1], i5547[2], i5547[3])
  i5546.topRight = new pc.Color(i5547[4], i5547[5], i5547[6], i5547[7])
  i5546.bottomLeft = new pc.Color(i5547[8], i5547[9], i5547[10], i5547[11])
  i5546.bottomRight = new pc.Color(i5547[12], i5547[13], i5547[14], i5547[15])
  return i5546
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5550 = root || request.c( 'UnityEngine.UI.Button' )
  var i5551 = data
  i5550.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5551[0], i5550.m_OnClick)
  i5550.m_Navigation = request.d('UnityEngine.UI.Navigation', i5551[1], i5550.m_Navigation)
  i5550.m_Transition = i5551[2]
  i5550.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5551[3], i5550.m_Colors)
  i5550.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5551[4], i5550.m_SpriteState)
  i5550.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5551[5], i5550.m_AnimationTriggers)
  i5550.m_Interactable = !!i5551[6]
  request.r(i5551[7], i5551[8], 0, i5550, 'm_TargetGraphic')
  return i5550
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5552 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5553 = data
  i5552.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5553[0], i5552.m_PersistentCalls)
  return i5552
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5554 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5555 = data
  var i5557 = i5555[0]
  var i5556 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5557.length; i += 1) {
    i5556.add(request.d('UnityEngine.Events.PersistentCall', i5557[i + 0]));
  }
  i5554.m_Calls = i5556
  return i5554
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5560 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5561 = data
  request.r(i5561[0], i5561[1], 0, i5560, 'm_Target')
  i5560.m_TargetAssemblyTypeName = i5561[2]
  i5560.m_MethodName = i5561[3]
  i5560.m_Mode = i5561[4]
  i5560.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5561[5], i5560.m_Arguments)
  i5560.m_CallState = i5561[6]
  return i5560
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5562 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5563 = data
  request.r(i5563[0], i5563[1], 0, i5562, 'm_ObjectArgument')
  i5562.m_ObjectArgumentAssemblyTypeName = i5563[2]
  i5562.m_IntArgument = i5563[3]
  i5562.m_FloatArgument = i5563[4]
  i5562.m_StringArgument = i5563[5]
  i5562.m_BoolArgument = !!i5563[6]
  return i5562
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5564 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5565 = data
  i5564.m_Mode = i5565[0]
  i5564.m_WrapAround = !!i5565[1]
  request.r(i5565[2], i5565[3], 0, i5564, 'm_SelectOnUp')
  request.r(i5565[4], i5565[5], 0, i5564, 'm_SelectOnDown')
  request.r(i5565[6], i5565[7], 0, i5564, 'm_SelectOnLeft')
  request.r(i5565[8], i5565[9], 0, i5564, 'm_SelectOnRight')
  return i5564
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5566 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5567 = data
  i5566.m_NormalColor = new pc.Color(i5567[0], i5567[1], i5567[2], i5567[3])
  i5566.m_HighlightedColor = new pc.Color(i5567[4], i5567[5], i5567[6], i5567[7])
  i5566.m_PressedColor = new pc.Color(i5567[8], i5567[9], i5567[10], i5567[11])
  i5566.m_SelectedColor = new pc.Color(i5567[12], i5567[13], i5567[14], i5567[15])
  i5566.m_DisabledColor = new pc.Color(i5567[16], i5567[17], i5567[18], i5567[19])
  i5566.m_ColorMultiplier = i5567[20]
  i5566.m_FadeDuration = i5567[21]
  return i5566
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5568 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5569 = data
  request.r(i5569[0], i5569[1], 0, i5568, 'm_HighlightedSprite')
  request.r(i5569[2], i5569[3], 0, i5568, 'm_PressedSprite')
  request.r(i5569[4], i5569[5], 0, i5568, 'm_SelectedSprite')
  request.r(i5569[6], i5569[7], 0, i5568, 'm_DisabledSprite')
  return i5568
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5570 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5571 = data
  i5570.m_NormalTrigger = i5571[0]
  i5570.m_HighlightedTrigger = i5571[1]
  i5570.m_PressedTrigger = i5571[2]
  i5570.m_SelectedTrigger = i5571[3]
  i5570.m_DisabledTrigger = i5571[4]
  return i5570
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i5572 = root || request.c( 'UnityEngine.UI.Mask' )
  var i5573 = data
  i5572.m_ShowMaskGraphic = !!i5573[0]
  return i5572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5575 = data
  request.r(i5575[0], i5575[1], 0, i5574, 'clip')
  request.r(i5575[2], i5575[3], 0, i5574, 'outputAudioMixerGroup')
  i5574.playOnAwake = !!i5575[4]
  i5574.loop = !!i5575[5]
  i5574.time = i5575[6]
  i5574.volume = i5575[7]
  i5574.pitch = i5575[8]
  i5574.enabled = !!i5575[9]
  return i5574
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i5576 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i5577 = data
  i5576.m_Padding = new pc.Vec4( i5577[0], i5577[1], i5577[2], i5577[3] )
  i5576.m_Softness = new pc.Vec2( i5577[4], i5577[5] )
  return i5576
}

Deserializers["GameController"] = function (request, data, root) {
  var i5578 = root || request.c( 'GameController' )
  var i5579 = data
  var i5581 = i5579[0]
  var i5580 = new (System.Collections.Generic.List$1(Bridge.ns('ClockItem')))
  for(var i = 0; i < i5581.length; i += 2) {
  request.r(i5581[i + 0], i5581[i + 1], 1, i5580, '')
  }
  i5578._clockItems = i5580
  var i5583 = i5579[1]
  var i5582 = new (System.Collections.Generic.List$1(Bridge.ns('ClockDropTarget')))
  for(var i = 0; i < i5583.length; i += 2) {
  request.r(i5583[i + 0], i5583[i + 1], 1, i5582, '')
  }
  i5578._dropTargets = i5582
  request.r(i5579[2], i5579[3], 0, i5578, '_tutorialHand')
  request.r(i5579[4], i5579[5], 0, i5578, '_tutorialFrom')
  request.r(i5579[6], i5579[7], 0, i5578, '_tutorialTo')
  i5578._tutorialMoveDuration = i5579[8]
  i5578._tutorialStartDelay = i5579[9]
  i5578._hideTutorialOnFirstSuccess = !!i5579[10]
  return i5578
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i5588 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i5589 = data
  request.r(i5589[0], i5589[1], 0, i5588, 'skeletonDataAsset')
  request.r(i5589[2], i5589[3], 0, i5588, 'additiveMaterial')
  request.r(i5589[4], i5589[5], 0, i5588, 'multiplyMaterial')
  request.r(i5589[6], i5589[7], 0, i5588, 'screenMaterial')
  i5588.forceAdditiveMaterial = !!i5589[8]
  i5588.initialSkinName = i5589[9]
  i5588.initialFlipX = !!i5589[10]
  i5588.initialFlipY = !!i5589[11]
  i5588.startingAnimation = i5589[12]
  i5588.startingLoop = !!i5589[13]
  i5588.timeScale = i5589[14]
  i5588.freeze = !!i5589[15]
  i5588.layoutScaleMode = i5589[16]
  i5588.updateWhenInvisible = i5589[17]
  i5588.allowMultipleCanvasRenderers = !!i5589[18]
  var i5591 = i5589[19]
  var i5590 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i5591.length; i += 2) {
  request.r(i5591[i + 0], i5591[i + 1], 1, i5590, '')
  }
  i5588.canvasRenderers = i5590
  i5588.enableSeparatorSlots = !!i5589[20]
  i5588.updateSeparatorPartLocation = !!i5589[21]
  i5588.updateSeparatorPartScale = !!i5589[22]
  i5588.disableMeshAssignmentOnOverride = !!i5589[23]
  i5588.m_SkeletonColor = new pc.Color(i5589[24], i5589[25], i5589[26], i5589[27])
  i5588.referenceSize = new pc.Vec2( i5589[28], i5589[29] )
  i5588.pivotOffset = new pc.Vec2( i5589[30], i5589[31] )
  i5588.referenceScale = i5589[32]
  i5588.layoutScale = i5589[33]
  i5588.rectTransformSize = new pc.Vec2( i5589[34], i5589[35] )
  i5588.editReferenceRect = !!i5589[36]
  var i5593 = i5589[37]
  var i5592 = []
  for(var i = 0; i < i5593.length; i += 1) {
    i5592.push( i5593[i + 0] );
  }
  i5588.separatorSlotNames = i5592
  var i5595 = i5589[38]
  var i5594 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5595.length; i += 2) {
  request.r(i5595[i + 0], i5595[i + 1], 1, i5594, '')
  }
  i5588.separatorParts = i5594
  i5588.physicsPositionInheritanceFactor = new pc.Vec2( i5589[39], i5589[40] )
  i5588.physicsRotationInheritanceFactor = i5589[41]
  request.r(i5589[42], i5589[43], 0, i5588, 'physicsMovementRelativeTo')
  i5588.meshGenerator = request.d('Spine.Unity.MeshGenerator', i5589[44], i5588.meshGenerator)
  i5588.updateTiming = i5589[45]
  i5588.unscaledTime = !!i5589[46]
  request.r(i5589[47], i5589[48], 0, i5588, 'm_Material')
  i5588.m_Maskable = !!i5589[49]
  i5588.m_Color = new pc.Color(i5589[50], i5589[51], i5589[52], i5589[53])
  i5588.m_RaycastTarget = !!i5589[54]
  i5588.m_RaycastPadding = new pc.Vec4( i5589[55], i5589[56], i5589[57], i5589[58] )
  return i5588
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i5602 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i5603 = data
  i5602.settings = request.d('Spine.Unity.MeshGenerator+Settings', i5603[0], i5602.settings)
  return i5602
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i5604 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i5605 = data
  i5604.useClipping = !!i5605[0]
  i5604.zSpacing = i5605[1]
  i5604.tintBlack = !!i5605[2]
  i5604.canvasGroupCompatible = !!i5605[3]
  i5604.pmaVertexColors = !!i5605[4]
  i5604.addNormals = !!i5605[5]
  i5604.calculateTangents = !!i5605[6]
  i5604.immutableTriangles = !!i5605[7]
  return i5604
}

Deserializers["ClockDropTarget"] = function (request, data, root) {
  var i5606 = root || request.c( 'ClockDropTarget' )
  var i5607 = data
  request.r(i5607[0], i5607[1], 0, i5606, '_skeletonAnimation')
  i5606._animationName = i5607[2]
  i5606._loopAnimation = !!i5607[3]
  request.r(i5607[4], i5607[5], 0, i5606, '_audioClip')
  i5606._acceptOnlyOnce = !!i5607[6]
  request.r(i5607[7], i5607[8], 0, i5606, '_door')
  return i5606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i5608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i5609 = data
  i5608.m_Alpha = i5609[0]
  i5608.m_Interactable = !!i5609[1]
  i5608.m_BlocksRaycasts = !!i5609[2]
  i5608.m_IgnoreParentGroups = !!i5609[3]
  i5608.enabled = !!i5609[4]
  return i5608
}

Deserializers["ClockItem"] = function (request, data, root) {
  var i5610 = root || request.c( 'ClockItem' )
  var i5611 = data
  request.r(i5611[0], i5611[1], 0, i5610, '_dragCanvas')
  return i5610
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i5612 = root || request.c( 'Playable.AudioManager' )
  var i5613 = data
  var i5615 = i5613[0]
  var i5614 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i5615.length; i += 1) {
    i5614.add(request.d('Playable.SoundData', i5615[i + 0]));
  }
  i5612._sounds = i5614
  request.r(i5613[1], i5613[2], 0, i5612, '_audioMusic')
  request.r(i5613[3], i5613[4], 0, i5612, '_audioSound')
  return i5612
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i5618 = root || request.c( 'Playable.SoundData' )
  var i5619 = data
  i5618.Type = i5619[0]
  request.r(i5619[1], i5619[2], 0, i5618, 'Clip')
  return i5618
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5620 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5621 = data
  request.r(i5621[0], i5621[1], 0, i5620, 'm_FirstSelected')
  i5620.m_sendNavigationEvents = !!i5621[2]
  i5620.m_DragThreshold = i5621[3]
  return i5620
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5622 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5623 = data
  i5622.m_HorizontalAxis = i5623[0]
  i5622.m_VerticalAxis = i5623[1]
  i5622.m_SubmitButton = i5623[2]
  i5622.m_CancelButton = i5623[3]
  i5622.m_InputActionsPerSecond = i5623[4]
  i5622.m_RepeatDelay = i5623[5]
  i5622.m_ForceModuleActive = !!i5623[6]
  i5622.m_SendPointerHoverToParent = !!i5623[7]
  return i5622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5625 = data
  i5624.ambientIntensity = i5625[0]
  i5624.reflectionIntensity = i5625[1]
  i5624.ambientMode = i5625[2]
  i5624.ambientLight = new pc.Color(i5625[3], i5625[4], i5625[5], i5625[6])
  i5624.ambientSkyColor = new pc.Color(i5625[7], i5625[8], i5625[9], i5625[10])
  i5624.ambientGroundColor = new pc.Color(i5625[11], i5625[12], i5625[13], i5625[14])
  i5624.ambientEquatorColor = new pc.Color(i5625[15], i5625[16], i5625[17], i5625[18])
  i5624.fogColor = new pc.Color(i5625[19], i5625[20], i5625[21], i5625[22])
  i5624.fogEndDistance = i5625[23]
  i5624.fogStartDistance = i5625[24]
  i5624.fogDensity = i5625[25]
  i5624.fog = !!i5625[26]
  request.r(i5625[27], i5625[28], 0, i5624, 'skybox')
  i5624.fogMode = i5625[29]
  var i5627 = i5625[30]
  var i5626 = []
  for(var i = 0; i < i5627.length; i += 1) {
    i5626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5627[i + 0]) );
  }
  i5624.lightmaps = i5626
  i5624.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5625[31], i5624.lightProbes)
  i5624.lightmapsMode = i5625[32]
  i5624.mixedBakeMode = i5625[33]
  i5624.environmentLightingMode = i5625[34]
  i5624.ambientProbe = new pc.SphericalHarmonicsL2(i5625[35])
  request.r(i5625[36], i5625[37], 0, i5624, 'customReflection')
  request.r(i5625[38], i5625[39], 0, i5624, 'defaultReflection')
  i5624.defaultReflectionMode = i5625[40]
  i5624.defaultReflectionResolution = i5625[41]
  i5624.sunLightObjectId = i5625[42]
  i5624.pixelLightCount = i5625[43]
  i5624.defaultReflectionHDR = !!i5625[44]
  i5624.hasLightDataAsset = !!i5625[45]
  i5624.hasManualGenerate = !!i5625[46]
  return i5624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5631 = data
  request.r(i5631[0], i5631[1], 0, i5630, 'lightmapColor')
  request.r(i5631[2], i5631[3], 0, i5630, 'lightmapDirection')
  request.r(i5631[4], i5631[5], 0, i5630, 'shadowMask')
  return i5630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5632 = root || new UnityEngine.LightProbes()
  var i5633 = data
  return i5632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5641 = data
  var i5643 = i5641[0]
  var i5642 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5643.length; i += 1) {
    i5642.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5643[i + 0]));
  }
  i5640.ShaderCompilationErrors = i5642
  i5640.name = i5641[1]
  i5640.guid = i5641[2]
  var i5645 = i5641[3]
  var i5644 = []
  for(var i = 0; i < i5645.length; i += 1) {
    i5644.push( i5645[i + 0] );
  }
  i5640.shaderDefinedKeywords = i5644
  var i5647 = i5641[4]
  var i5646 = []
  for(var i = 0; i < i5647.length; i += 1) {
    i5646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5647[i + 0]) );
  }
  i5640.passes = i5646
  var i5649 = i5641[5]
  var i5648 = []
  for(var i = 0; i < i5649.length; i += 1) {
    i5648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5649[i + 0]) );
  }
  i5640.usePasses = i5648
  var i5651 = i5641[6]
  var i5650 = []
  for(var i = 0; i < i5651.length; i += 1) {
    i5650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5651[i + 0]) );
  }
  i5640.defaultParameterValues = i5650
  request.r(i5641[7], i5641[8], 0, i5640, 'unityFallbackShader')
  i5640.readDepth = !!i5641[9]
  i5640.hasDepthOnlyPass = !!i5641[10]
  i5640.isCreatedByShaderGraph = !!i5641[11]
  i5640.disableBatching = !!i5641[12]
  i5640.compiled = !!i5641[13]
  return i5640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5655 = data
  i5654.shaderName = i5655[0]
  i5654.errorMessage = i5655[1]
  return i5654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5658 = root || new pc.UnityShaderPass()
  var i5659 = data
  i5658.id = i5659[0]
  i5658.subShaderIndex = i5659[1]
  i5658.name = i5659[2]
  i5658.passType = i5659[3]
  i5658.grabPassTextureName = i5659[4]
  i5658.usePass = !!i5659[5]
  i5658.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5659[6], i5658.zTest)
  i5658.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5659[7], i5658.zWrite)
  i5658.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5659[8], i5658.culling)
  i5658.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5659[9], i5658.blending)
  i5658.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5659[10], i5658.alphaBlending)
  i5658.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5659[11], i5658.colorWriteMask)
  i5658.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5659[12], i5658.offsetUnits)
  i5658.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5659[13], i5658.offsetFactor)
  i5658.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5659[14], i5658.stencilRef)
  i5658.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5659[15], i5658.stencilReadMask)
  i5658.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5659[16], i5658.stencilWriteMask)
  i5658.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5659[17], i5658.stencilOp)
  i5658.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5659[18], i5658.stencilOpFront)
  i5658.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5659[19], i5658.stencilOpBack)
  var i5661 = i5659[20]
  var i5660 = []
  for(var i = 0; i < i5661.length; i += 1) {
    i5660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5661[i + 0]) );
  }
  i5658.tags = i5660
  var i5663 = i5659[21]
  var i5662 = []
  for(var i = 0; i < i5663.length; i += 1) {
    i5662.push( i5663[i + 0] );
  }
  i5658.passDefinedKeywords = i5662
  var i5665 = i5659[22]
  var i5664 = []
  for(var i = 0; i < i5665.length; i += 1) {
    i5664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5665[i + 0]) );
  }
  i5658.passDefinedKeywordGroups = i5664
  var i5667 = i5659[23]
  var i5666 = []
  for(var i = 0; i < i5667.length; i += 1) {
    i5666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5667[i + 0]) );
  }
  i5658.variants = i5666
  var i5669 = i5659[24]
  var i5668 = []
  for(var i = 0; i < i5669.length; i += 1) {
    i5668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5669[i + 0]) );
  }
  i5658.excludedVariants = i5668
  i5658.hasDepthReader = !!i5659[25]
  return i5658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5671 = data
  i5670.val = i5671[0]
  i5670.name = i5671[1]
  return i5670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5673 = data
  i5672.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5673[0], i5672.src)
  i5672.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5673[1], i5672.dst)
  i5672.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5673[2], i5672.op)
  return i5672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5675 = data
  i5674.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5675[0], i5674.pass)
  i5674.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5675[1], i5674.fail)
  i5674.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5675[2], i5674.zFail)
  i5674.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5675[3], i5674.comp)
  return i5674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5679 = data
  i5678.name = i5679[0]
  i5678.value = i5679[1]
  return i5678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5683 = data
  var i5685 = i5683[0]
  var i5684 = []
  for(var i = 0; i < i5685.length; i += 1) {
    i5684.push( i5685[i + 0] );
  }
  i5682.keywords = i5684
  i5682.hasDiscard = !!i5683[1]
  return i5682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5689 = data
  i5688.passId = i5689[0]
  i5688.subShaderIndex = i5689[1]
  var i5691 = i5689[2]
  var i5690 = []
  for(var i = 0; i < i5691.length; i += 1) {
    i5690.push( i5691[i + 0] );
  }
  i5688.keywords = i5690
  i5688.vertexProgram = i5689[3]
  i5688.fragmentProgram = i5689[4]
  i5688.exportedForWebGl2 = !!i5689[5]
  i5688.readDepth = !!i5689[6]
  return i5688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5695 = data
  request.r(i5695[0], i5695[1], 0, i5694, 'shader')
  i5694.pass = i5695[2]
  return i5694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5699 = data
  i5698.name = i5699[0]
  i5698.type = i5699[1]
  i5698.value = new pc.Vec4( i5699[2], i5699[3], i5699[4], i5699[5] )
  i5698.textureValue = i5699[6]
  i5698.shaderPropertyFlag = i5699[7]
  return i5698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5701 = data
  i5700.name = i5701[0]
  request.r(i5701[1], i5701[2], 0, i5700, 'texture')
  i5700.aabb = i5701[3]
  i5700.vertices = i5701[4]
  i5700.triangles = i5701[5]
  i5700.textureRect = UnityEngine.Rect.MinMaxRect(i5701[6], i5701[7], i5701[8], i5701[9])
  i5700.packedRect = UnityEngine.Rect.MinMaxRect(i5701[10], i5701[11], i5701[12], i5701[13])
  i5700.border = new pc.Vec4( i5701[14], i5701[15], i5701[16], i5701[17] )
  i5700.transparency = i5701[18]
  i5700.bounds = i5701[19]
  i5700.pixelsPerUnit = i5701[20]
  i5700.textureWidth = i5701[21]
  i5700.textureHeight = i5701[22]
  i5700.nativeSize = new pc.Vec2( i5701[23], i5701[24] )
  i5700.pivot = new pc.Vec2( i5701[25], i5701[26] )
  i5700.textureRectOffset = new pc.Vec2( i5701[27], i5701[28] )
  return i5700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5703 = data
  i5702.name = i5703[0]
  return i5702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5705 = data
  i5704.name = i5705[0]
  i5704.ascent = i5705[1]
  i5704.originalLineHeight = i5705[2]
  i5704.fontSize = i5705[3]
  var i5707 = i5705[4]
  var i5706 = []
  for(var i = 0; i < i5707.length; i += 1) {
    i5706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5707[i + 0]) );
  }
  i5704.characterInfo = i5706
  request.r(i5705[5], i5705[6], 0, i5704, 'texture')
  i5704.originalFontSize = i5705[7]
  return i5704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5711 = data
  i5710.index = i5711[0]
  i5710.advance = i5711[1]
  i5710.bearing = i5711[2]
  i5710.glyphWidth = i5711[3]
  i5710.glyphHeight = i5711[4]
  i5710.minX = i5711[5]
  i5710.maxX = i5711[6]
  i5710.minY = i5711[7]
  i5710.maxY = i5711[8]
  i5710.uvBottomLeftX = i5711[9]
  i5710.uvBottomLeftY = i5711[10]
  i5710.uvBottomRightX = i5711[11]
  i5710.uvBottomRightY = i5711[12]
  i5710.uvTopLeftX = i5711[13]
  i5710.uvTopLeftY = i5711[14]
  i5710.uvTopRightX = i5711[15]
  i5710.uvTopRightY = i5711[16]
  return i5710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5713 = data
  i5712.name = i5713[0]
  i5712.bytes64 = i5713[1]
  i5712.data = i5713[2]
  return i5712
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5714 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5715 = data
  i5714.normalStyle = i5715[0]
  i5714.normalSpacingOffset = i5715[1]
  i5714.boldStyle = i5715[2]
  i5714.boldSpacing = i5715[3]
  i5714.italicStyle = i5715[4]
  i5714.tabSize = i5715[5]
  request.r(i5715[6], i5715[7], 0, i5714, 'atlas')
  i5714.m_SourceFontFileGUID = i5715[8]
  i5714.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5715[9], i5714.m_CreationSettings)
  request.r(i5715[10], i5715[11], 0, i5714, 'm_SourceFontFile')
  i5714.m_SourceFontFilePath = i5715[12]
  i5714.m_AtlasPopulationMode = i5715[13]
  i5714.InternalDynamicOS = !!i5715[14]
  var i5717 = i5715[15]
  var i5716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5717.length; i += 1) {
    i5716.add(request.d('UnityEngine.TextCore.Glyph', i5717[i + 0]));
  }
  i5714.m_GlyphTable = i5716
  var i5719 = i5715[16]
  var i5718 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5719.length; i += 1) {
    i5718.add(request.d('TMPro.TMP_Character', i5719[i + 0]));
  }
  i5714.m_CharacterTable = i5718
  var i5721 = i5715[17]
  var i5720 = []
  for(var i = 0; i < i5721.length; i += 2) {
  request.r(i5721[i + 0], i5721[i + 1], 2, i5720, '')
  }
  i5714.m_AtlasTextures = i5720
  i5714.m_AtlasTextureIndex = i5715[18]
  i5714.m_IsMultiAtlasTexturesEnabled = !!i5715[19]
  i5714.m_GetFontFeatures = !!i5715[20]
  i5714.m_ClearDynamicDataOnBuild = !!i5715[21]
  i5714.m_AtlasWidth = i5715[22]
  i5714.m_AtlasHeight = i5715[23]
  i5714.m_AtlasPadding = i5715[24]
  i5714.m_AtlasRenderMode = i5715[25]
  var i5723 = i5715[26]
  var i5722 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5723.length; i += 1) {
    i5722.add(request.d('UnityEngine.TextCore.GlyphRect', i5723[i + 0]));
  }
  i5714.m_UsedGlyphRects = i5722
  var i5725 = i5715[27]
  var i5724 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5725.length; i += 1) {
    i5724.add(request.d('UnityEngine.TextCore.GlyphRect', i5725[i + 0]));
  }
  i5714.m_FreeGlyphRects = i5724
  i5714.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5715[28], i5714.m_FontFeatureTable)
  i5714.m_ShouldReimportFontFeatures = !!i5715[29]
  var i5727 = i5715[30]
  var i5726 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5727.length; i += 2) {
  request.r(i5727[i + 0], i5727[i + 1], 1, i5726, '')
  }
  i5714.m_FallbackFontAssetTable = i5726
  var i5729 = i5715[31]
  var i5728 = []
  for(var i = 0; i < i5729.length; i += 1) {
    i5728.push( request.d('TMPro.TMP_FontWeightPair', i5729[i + 0]) );
  }
  i5714.m_FontWeightTable = i5728
  var i5731 = i5715[32]
  var i5730 = []
  for(var i = 0; i < i5731.length; i += 1) {
    i5730.push( request.d('TMPro.TMP_FontWeightPair', i5731[i + 0]) );
  }
  i5714.fontWeights = i5730
  i5714.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5715[33], i5714.m_fontInfo)
  var i5733 = i5715[34]
  var i5732 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5733.length; i += 1) {
    i5732.add(request.d('TMPro.TMP_Glyph', i5733[i + 0]));
  }
  i5714.m_glyphInfoList = i5732
  i5714.m_KerningTable = request.d('TMPro.KerningTable', i5715[35], i5714.m_KerningTable)
  var i5735 = i5715[36]
  var i5734 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5735.length; i += 2) {
  request.r(i5735[i + 0], i5735[i + 1], 1, i5734, '')
  }
  i5714.fallbackFontAssets = i5734
  i5714.m_Version = i5715[37]
  i5714.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5715[38], i5714.m_FaceInfo)
  request.r(i5715[39], i5715[40], 0, i5714, 'm_Material')
  return i5714
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5736 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5737 = data
  i5736.sourceFontFileName = i5737[0]
  i5736.sourceFontFileGUID = i5737[1]
  i5736.faceIndex = i5737[2]
  i5736.pointSizeSamplingMode = i5737[3]
  i5736.pointSize = i5737[4]
  i5736.padding = i5737[5]
  i5736.paddingMode = i5737[6]
  i5736.packingMode = i5737[7]
  i5736.atlasWidth = i5737[8]
  i5736.atlasHeight = i5737[9]
  i5736.characterSetSelectionMode = i5737[10]
  i5736.characterSequence = i5737[11]
  i5736.referencedFontAssetGUID = i5737[12]
  i5736.referencedTextAssetGUID = i5737[13]
  i5736.fontStyle = i5737[14]
  i5736.fontStyleModifier = i5737[15]
  i5736.renderMode = i5737[16]
  i5736.includeFontFeatures = !!i5737[17]
  return i5736
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5740 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5741 = data
  i5740.m_Index = i5741[0]
  i5740.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5741[1], i5740.m_Metrics)
  i5740.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5741[2], i5740.m_GlyphRect)
  i5740.m_Scale = i5741[3]
  i5740.m_AtlasIndex = i5741[4]
  i5740.m_ClassDefinitionType = i5741[5]
  return i5740
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5742 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5743 = data
  i5742.m_Width = i5743[0]
  i5742.m_Height = i5743[1]
  i5742.m_HorizontalBearingX = i5743[2]
  i5742.m_HorizontalBearingY = i5743[3]
  i5742.m_HorizontalAdvance = i5743[4]
  return i5742
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5744 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5745 = data
  i5744.m_X = i5745[0]
  i5744.m_Y = i5745[1]
  i5744.m_Width = i5745[2]
  i5744.m_Height = i5745[3]
  return i5744
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5748 = root || request.c( 'TMPro.TMP_Character' )
  var i5749 = data
  i5748.m_ElementType = i5749[0]
  i5748.m_Unicode = i5749[1]
  i5748.m_GlyphIndex = i5749[2]
  i5748.m_Scale = i5749[3]
  return i5748
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5754 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5755 = data
  var i5757 = i5755[0]
  var i5756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i5757.length; i += 1) {
    i5756.add(request.d('TMPro.MultipleSubstitutionRecord', i5757[i + 0]));
  }
  i5754.m_MultipleSubstitutionRecords = i5756
  var i5759 = i5755[1]
  var i5758 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i5759.length; i += 1) {
    i5758.add(request.d('TMPro.LigatureSubstitutionRecord', i5759[i + 0]));
  }
  i5754.m_LigatureSubstitutionRecords = i5758
  var i5761 = i5755[2]
  var i5760 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5761.length; i += 1) {
    i5760.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i5761[i + 0]));
  }
  i5754.m_GlyphPairAdjustmentRecords = i5760
  var i5763 = i5755[3]
  var i5762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i5763.length; i += 1) {
    i5762.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i5763[i + 0]));
  }
  i5754.m_MarkToBaseAdjustmentRecords = i5762
  var i5765 = i5755[4]
  var i5764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i5765.length; i += 1) {
    i5764.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i5765[i + 0]));
  }
  i5754.m_MarkToMarkAdjustmentRecords = i5764
  return i5754
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i5768 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i5769 = data
  i5768.m_TargetGlyphID = i5769[0]
  i5768.m_SubstituteGlyphIDs = i5769[1]
  return i5768
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i5772 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i5773 = data
  i5772.m_ComponentGlyphIDs = i5773[0]
  i5772.m_LigatureGlyphID = i5773[1]
  return i5772
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5776 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i5777 = data
  i5776.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5777[0], i5776.m_FirstAdjustmentRecord)
  i5776.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5777[1], i5776.m_SecondAdjustmentRecord)
  i5776.m_FeatureLookupFlags = i5777[2]
  return i5776
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i5780 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i5781 = data
  i5780.m_BaseGlyphID = i5781[0]
  i5780.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5781[1], i5780.m_BaseGlyphAnchorPoint)
  i5780.m_MarkGlyphID = i5781[2]
  i5780.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5781[3], i5780.m_MarkPositionAdjustment)
  return i5780
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i5784 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i5785 = data
  i5784.m_BaseMarkGlyphID = i5785[0]
  i5784.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5785[1], i5784.m_BaseMarkGlyphAnchorPoint)
  i5784.m_CombiningMarkGlyphID = i5785[2]
  i5784.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5785[3], i5784.m_CombiningMarkPositionAdjustment)
  return i5784
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5790 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5791 = data
  request.r(i5791[0], i5791[1], 0, i5790, 'regularTypeface')
  request.r(i5791[2], i5791[3], 0, i5790, 'italicTypeface')
  return i5790
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5792 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5793 = data
  i5792.Name = i5793[0]
  i5792.PointSize = i5793[1]
  i5792.Scale = i5793[2]
  i5792.CharacterCount = i5793[3]
  i5792.LineHeight = i5793[4]
  i5792.Baseline = i5793[5]
  i5792.Ascender = i5793[6]
  i5792.CapHeight = i5793[7]
  i5792.Descender = i5793[8]
  i5792.CenterLine = i5793[9]
  i5792.SuperscriptOffset = i5793[10]
  i5792.SubscriptOffset = i5793[11]
  i5792.SubSize = i5793[12]
  i5792.Underline = i5793[13]
  i5792.UnderlineThickness = i5793[14]
  i5792.strikethrough = i5793[15]
  i5792.strikethroughThickness = i5793[16]
  i5792.TabWidth = i5793[17]
  i5792.Padding = i5793[18]
  i5792.AtlasWidth = i5793[19]
  i5792.AtlasHeight = i5793[20]
  return i5792
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5796 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5797 = data
  i5796.id = i5797[0]
  i5796.x = i5797[1]
  i5796.y = i5797[2]
  i5796.width = i5797[3]
  i5796.height = i5797[4]
  i5796.xOffset = i5797[5]
  i5796.yOffset = i5797[6]
  i5796.xAdvance = i5797[7]
  i5796.scale = i5797[8]
  return i5796
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5798 = root || request.c( 'TMPro.KerningTable' )
  var i5799 = data
  var i5801 = i5799[0]
  var i5800 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5801.length; i += 1) {
    i5800.add(request.d('TMPro.KerningPair', i5801[i + 0]));
  }
  i5798.kerningPairs = i5800
  return i5798
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5804 = root || request.c( 'TMPro.KerningPair' )
  var i5805 = data
  i5804.xOffset = i5805[0]
  i5804.m_FirstGlyph = i5805[1]
  i5804.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5805[2], i5804.m_FirstGlyphAdjustments)
  i5804.m_SecondGlyph = i5805[3]
  i5804.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5805[4], i5804.m_SecondGlyphAdjustments)
  i5804.m_IgnoreSpacingAdjustments = !!i5805[5]
  return i5804
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5806 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5807 = data
  i5806.m_FaceIndex = i5807[0]
  i5806.m_FamilyName = i5807[1]
  i5806.m_StyleName = i5807[2]
  i5806.m_PointSize = i5807[3]
  i5806.m_Scale = i5807[4]
  i5806.m_UnitsPerEM = i5807[5]
  i5806.m_LineHeight = i5807[6]
  i5806.m_AscentLine = i5807[7]
  i5806.m_CapLine = i5807[8]
  i5806.m_MeanLine = i5807[9]
  i5806.m_Baseline = i5807[10]
  i5806.m_DescentLine = i5807[11]
  i5806.m_SuperscriptOffset = i5807[12]
  i5806.m_SuperscriptSize = i5807[13]
  i5806.m_SubscriptOffset = i5807[14]
  i5806.m_SubscriptSize = i5807[15]
  i5806.m_UnderlineOffset = i5807[16]
  i5806.m_UnderlineThickness = i5807[17]
  i5806.m_StrikethroughOffset = i5807[18]
  i5806.m_StrikethroughThickness = i5807[19]
  i5806.m_TabWidth = i5807[20]
  return i5806
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i5808 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i5809 = data
  var i5811 = i5809[0]
  var i5810 = []
  for(var i = 0; i < i5811.length; i += 2) {
  request.r(i5811[i + 0], i5811[i + 1], 2, i5810, '')
  }
  i5808.atlasAssets = i5810
  i5808.scale = i5809[1]
  request.r(i5809[2], i5809[3], 0, i5808, 'skeletonJSON')
  i5808.isUpgradingBlendModeMaterials = !!i5809[4]
  i5808.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i5809[5], i5808.blendModeMaterials)
  var i5813 = i5809[6]
  var i5812 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i5813.length; i += 2) {
  request.r(i5813[i + 0], i5813[i + 1], 1, i5812, '')
  }
  i5808.skeletonDataModifiers = i5812
  var i5815 = i5809[7]
  var i5814 = []
  for(var i = 0; i < i5815.length; i += 1) {
    i5814.push( i5815[i + 0] );
  }
  i5808.fromAnimation = i5814
  var i5817 = i5809[8]
  var i5816 = []
  for(var i = 0; i < i5817.length; i += 1) {
    i5816.push( i5817[i + 0] );
  }
  i5808.toAnimation = i5816
  i5808.duration = i5809[9]
  i5808.defaultMix = i5809[10]
  request.r(i5809[11], i5809[12], 0, i5808, 'controller')
  return i5808
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i5820 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i5821 = data
  i5820.applyAdditiveMaterial = !!i5821[0]
  var i5823 = i5821[1]
  var i5822 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5823.length; i += 1) {
    i5822.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5823[i + 0]));
  }
  i5820.additiveMaterials = i5822
  var i5825 = i5821[2]
  var i5824 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5825.length; i += 1) {
    i5824.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5825[i + 0]));
  }
  i5820.multiplyMaterials = i5824
  var i5827 = i5821[3]
  var i5826 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5827.length; i += 1) {
    i5826.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5827[i + 0]));
  }
  i5820.screenMaterials = i5826
  i5820.requiresBlendModeMaterials = !!i5821[4]
  return i5820
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i5830 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i5831 = data
  i5830.pageName = i5831[0]
  request.r(i5831[1], i5831[2], 0, i5830, 'material')
  return i5830
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i5834 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i5835 = data
  request.r(i5835[0], i5835[1], 0, i5834, 'atlasFile')
  var i5837 = i5835[2]
  var i5836 = []
  for(var i = 0; i < i5837.length; i += 2) {
  request.r(i5837[i + 0], i5837[i + 1], 2, i5836, '')
  }
  i5834.materials = i5836
  i5834.textureLoadingMode = i5835[3]
  request.r(i5835[4], i5835[5], 0, i5834, 'onDemandTextureLoader')
  return i5834
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5838 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5839 = data
  i5838.useSafeMode = !!i5839[0]
  i5838.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5839[1], i5838.safeModeOptions)
  i5838.timeScale = i5839[2]
  i5838.unscaledTimeScale = i5839[3]
  i5838.useSmoothDeltaTime = !!i5839[4]
  i5838.maxSmoothUnscaledTime = i5839[5]
  i5838.rewindCallbackMode = i5839[6]
  i5838.showUnityEditorReport = !!i5839[7]
  i5838.logBehaviour = i5839[8]
  i5838.drawGizmos = !!i5839[9]
  i5838.defaultRecyclable = !!i5839[10]
  i5838.defaultAutoPlay = i5839[11]
  i5838.defaultUpdateType = i5839[12]
  i5838.defaultTimeScaleIndependent = !!i5839[13]
  i5838.defaultEaseType = i5839[14]
  i5838.defaultEaseOvershootOrAmplitude = i5839[15]
  i5838.defaultEasePeriod = i5839[16]
  i5838.defaultAutoKill = !!i5839[17]
  i5838.defaultLoopType = i5839[18]
  i5838.debugMode = !!i5839[19]
  i5838.debugStoreTargetId = !!i5839[20]
  i5838.showPreviewPanel = !!i5839[21]
  i5838.storeSettingsLocation = i5839[22]
  i5838.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5839[23], i5838.modules)
  i5838.createASMDEF = !!i5839[24]
  i5838.showPlayingTweens = !!i5839[25]
  i5838.showPausedTweens = !!i5839[26]
  return i5838
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5840 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5841 = data
  i5840.logBehaviour = i5841[0]
  i5840.nestedTweenFailureBehaviour = i5841[1]
  return i5840
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5842 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5843 = data
  i5842.showPanel = !!i5843[0]
  i5842.audioEnabled = !!i5843[1]
  i5842.physicsEnabled = !!i5843[2]
  i5842.physics2DEnabled = !!i5843[3]
  i5842.spriteEnabled = !!i5843[4]
  i5842.uiEnabled = !!i5843[5]
  i5842.uiToolkitEnabled = !!i5843[6]
  i5842.textMeshProEnabled = !!i5843[7]
  i5842.tk2DEnabled = !!i5843[8]
  i5842.deAudioEnabled = !!i5843[9]
  i5842.deUnityExtendedEnabled = !!i5843[10]
  i5842.epoOutlineEnabled = !!i5843[11]
  return i5842
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5844 = root || request.c( 'TMPro.TMP_Settings' )
  var i5845 = data
  i5844.assetVersion = i5845[0]
  i5844.m_TextWrappingMode = i5845[1]
  i5844.m_enableKerning = !!i5845[2]
  var i5847 = i5845[3]
  var i5846 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5847.length; i += 1) {
    i5846.add(i5847[i + 0]);
  }
  i5844.m_ActiveFontFeatures = i5846
  i5844.m_enableExtraPadding = !!i5845[4]
  i5844.m_enableTintAllSprites = !!i5845[5]
  i5844.m_enableParseEscapeCharacters = !!i5845[6]
  i5844.m_EnableRaycastTarget = !!i5845[7]
  i5844.m_GetFontFeaturesAtRuntime = !!i5845[8]
  i5844.m_missingGlyphCharacter = i5845[9]
  i5844.m_ClearDynamicDataOnBuild = !!i5845[10]
  i5844.m_warningsDisabled = !!i5845[11]
  request.r(i5845[12], i5845[13], 0, i5844, 'm_defaultFontAsset')
  i5844.m_defaultFontAssetPath = i5845[14]
  i5844.m_defaultFontSize = i5845[15]
  i5844.m_defaultAutoSizeMinRatio = i5845[16]
  i5844.m_defaultAutoSizeMaxRatio = i5845[17]
  i5844.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5845[18], i5845[19] )
  i5844.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5845[20], i5845[21] )
  i5844.m_autoSizeTextContainer = !!i5845[22]
  i5844.m_IsTextObjectScaleStatic = !!i5845[23]
  var i5849 = i5845[24]
  var i5848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5849.length; i += 2) {
  request.r(i5849[i + 0], i5849[i + 1], 1, i5848, '')
  }
  i5844.m_fallbackFontAssets = i5848
  i5844.m_matchMaterialPreset = !!i5845[25]
  i5844.m_HideSubTextObjects = !!i5845[26]
  request.r(i5845[27], i5845[28], 0, i5844, 'm_defaultSpriteAsset')
  i5844.m_defaultSpriteAssetPath = i5845[29]
  i5844.m_enableEmojiSupport = !!i5845[30]
  i5844.m_MissingCharacterSpriteUnicode = i5845[31]
  var i5851 = i5845[32]
  var i5850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5851.length; i += 2) {
  request.r(i5851[i + 0], i5851[i + 1], 1, i5850, '')
  }
  i5844.m_EmojiFallbackTextAssets = i5850
  i5844.m_defaultColorGradientPresetsPath = i5845[33]
  request.r(i5845[34], i5845[35], 0, i5844, 'm_defaultStyleSheet')
  i5844.m_StyleSheetsResourcePath = i5845[36]
  request.r(i5845[37], i5845[38], 0, i5844, 'm_leadingCharacters')
  request.r(i5845[39], i5845[40], 0, i5844, 'm_followingCharacters')
  i5844.m_UseModernHangulLineBreakingRules = !!i5845[41]
  return i5844
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5854 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i5855 = data
  i5854.m_GlyphIndex = i5855[0]
  i5854.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i5855[1], i5854.m_GlyphValueRecord)
  return i5854
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i5856 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i5857 = data
  i5856.m_XPlacement = i5857[0]
  i5856.m_YPlacement = i5857[1]
  i5856.m_XAdvance = i5857[2]
  i5856.m_YAdvance = i5857[3]
  return i5856
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5858 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5859 = data
  request.r(i5859[0], i5859[1], 0, i5858, 'spriteSheet')
  var i5861 = i5859[2]
  var i5860 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5861.length; i += 1) {
    i5860.add(request.d('TMPro.TMP_Sprite', i5861[i + 0]));
  }
  i5858.spriteInfoList = i5860
  var i5863 = i5859[3]
  var i5862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5863.length; i += 2) {
  request.r(i5863[i + 0], i5863[i + 1], 1, i5862, '')
  }
  i5858.fallbackSpriteAssets = i5862
  var i5865 = i5859[4]
  var i5864 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5865.length; i += 1) {
    i5864.add(request.d('TMPro.TMP_SpriteCharacter', i5865[i + 0]));
  }
  i5858.m_SpriteCharacterTable = i5864
  var i5867 = i5859[5]
  var i5866 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5867.length; i += 1) {
    i5866.add(request.d('TMPro.TMP_SpriteGlyph', i5867[i + 0]));
  }
  i5858.m_GlyphTable = i5866
  i5858.m_Version = i5859[6]
  i5858.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5859[7], i5858.m_FaceInfo)
  request.r(i5859[8], i5859[9], 0, i5858, 'm_Material')
  return i5858
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5870 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5871 = data
  i5870.name = i5871[0]
  i5870.hashCode = i5871[1]
  i5870.unicode = i5871[2]
  i5870.pivot = new pc.Vec2( i5871[3], i5871[4] )
  request.r(i5871[5], i5871[6], 0, i5870, 'sprite')
  i5870.id = i5871[7]
  i5870.x = i5871[8]
  i5870.y = i5871[9]
  i5870.width = i5871[10]
  i5870.height = i5871[11]
  i5870.xOffset = i5871[12]
  i5870.yOffset = i5871[13]
  i5870.xAdvance = i5871[14]
  i5870.scale = i5871[15]
  return i5870
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5876 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5877 = data
  i5876.m_Name = i5877[0]
  i5876.m_ElementType = i5877[1]
  i5876.m_Unicode = i5877[2]
  i5876.m_GlyphIndex = i5877[3]
  i5876.m_Scale = i5877[4]
  return i5876
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5880 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5881 = data
  request.r(i5881[0], i5881[1], 0, i5880, 'sprite')
  i5880.m_Index = i5881[2]
  i5880.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5881[3], i5880.m_Metrics)
  i5880.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5881[4], i5880.m_GlyphRect)
  i5880.m_Scale = i5881[5]
  i5880.m_AtlasIndex = i5881[6]
  i5880.m_ClassDefinitionType = i5881[7]
  return i5880
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5882 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5883 = data
  var i5885 = i5883[0]
  var i5884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5885.length; i += 1) {
    i5884.add(request.d('TMPro.TMP_Style', i5885[i + 0]));
  }
  i5882.m_StyleList = i5884
  return i5882
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5888 = root || request.c( 'TMPro.TMP_Style' )
  var i5889 = data
  i5888.m_Name = i5889[0]
  i5888.m_HashCode = i5889[1]
  i5888.m_OpeningDefinition = i5889[2]
  i5888.m_ClosingDefinition = i5889[3]
  i5888.m_OpeningTagArray = i5889[4]
  i5888.m_ClosingTagArray = i5889[5]
  return i5888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5891 = data
  var i5893 = i5891[0]
  var i5892 = []
  for(var i = 0; i < i5893.length; i += 1) {
    i5892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5893[i + 0]) );
  }
  i5890.files = i5892
  i5890.componentToPrefabIds = i5891[1]
  return i5890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5897 = data
  i5896.path = i5897[0]
  request.r(i5897[1], i5897[2], 0, i5896, 'unityObject')
  return i5896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5899 = data
  var i5901 = i5899[0]
  var i5900 = []
  for(var i = 0; i < i5901.length; i += 1) {
    i5900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5901[i + 0]) );
  }
  i5898.scriptsExecutionOrder = i5900
  var i5903 = i5899[1]
  var i5902 = []
  for(var i = 0; i < i5903.length; i += 1) {
    i5902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5903[i + 0]) );
  }
  i5898.sortingLayers = i5902
  var i5905 = i5899[2]
  var i5904 = []
  for(var i = 0; i < i5905.length; i += 1) {
    i5904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5905[i + 0]) );
  }
  i5898.cullingLayers = i5904
  i5898.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5899[3], i5898.timeSettings)
  i5898.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5899[4], i5898.physicsSettings)
  i5898.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5899[5], i5898.physics2DSettings)
  i5898.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5899[6], i5898.qualitySettings)
  i5898.enableRealtimeShadows = !!i5899[7]
  i5898.enableAutoInstancing = !!i5899[8]
  i5898.enableStaticBatching = !!i5899[9]
  i5898.enableDynamicBatching = !!i5899[10]
  i5898.usePreservativeDynamicBatching = !!i5899[11]
  i5898.lightmapEncodingQuality = i5899[12]
  i5898.desiredColorSpace = i5899[13]
  var i5907 = i5899[14]
  var i5906 = []
  for(var i = 0; i < i5907.length; i += 1) {
    i5906.push( i5907[i + 0] );
  }
  i5898.allTags = i5906
  return i5898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5911 = data
  i5910.name = i5911[0]
  i5910.value = i5911[1]
  return i5910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5915 = data
  i5914.id = i5915[0]
  i5914.name = i5915[1]
  i5914.value = i5915[2]
  return i5914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5919 = data
  i5918.id = i5919[0]
  i5918.name = i5919[1]
  return i5918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5921 = data
  i5920.fixedDeltaTime = i5921[0]
  i5920.maximumDeltaTime = i5921[1]
  i5920.timeScale = i5921[2]
  i5920.maximumParticleTimestep = i5921[3]
  return i5920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5923 = data
  i5922.gravity = new pc.Vec3( i5923[0], i5923[1], i5923[2] )
  i5922.defaultSolverIterations = i5923[3]
  i5922.bounceThreshold = i5923[4]
  i5922.autoSyncTransforms = !!i5923[5]
  i5922.autoSimulation = !!i5923[6]
  var i5925 = i5923[7]
  var i5924 = []
  for(var i = 0; i < i5925.length; i += 1) {
    i5924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5925[i + 0]) );
  }
  i5922.collisionMatrix = i5924
  return i5922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5929 = data
  i5928.enabled = !!i5929[0]
  i5928.layerId = i5929[1]
  i5928.otherLayerId = i5929[2]
  return i5928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5931 = data
  request.r(i5931[0], i5931[1], 0, i5930, 'material')
  i5930.gravity = new pc.Vec2( i5931[2], i5931[3] )
  i5930.positionIterations = i5931[4]
  i5930.velocityIterations = i5931[5]
  i5930.velocityThreshold = i5931[6]
  i5930.maxLinearCorrection = i5931[7]
  i5930.maxAngularCorrection = i5931[8]
  i5930.maxTranslationSpeed = i5931[9]
  i5930.maxRotationSpeed = i5931[10]
  i5930.baumgarteScale = i5931[11]
  i5930.baumgarteTOIScale = i5931[12]
  i5930.timeToSleep = i5931[13]
  i5930.linearSleepTolerance = i5931[14]
  i5930.angularSleepTolerance = i5931[15]
  i5930.defaultContactOffset = i5931[16]
  i5930.autoSimulation = !!i5931[17]
  i5930.queriesHitTriggers = !!i5931[18]
  i5930.queriesStartInColliders = !!i5931[19]
  i5930.callbacksOnDisable = !!i5931[20]
  i5930.reuseCollisionCallbacks = !!i5931[21]
  i5930.autoSyncTransforms = !!i5931[22]
  var i5933 = i5931[23]
  var i5932 = []
  for(var i = 0; i < i5933.length; i += 1) {
    i5932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5933[i + 0]) );
  }
  i5930.collisionMatrix = i5932
  return i5930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5937 = data
  i5936.enabled = !!i5937[0]
  i5936.layerId = i5937[1]
  i5936.otherLayerId = i5937[2]
  return i5936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5939 = data
  var i5941 = i5939[0]
  var i5940 = []
  for(var i = 0; i < i5941.length; i += 1) {
    i5940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5941[i + 0]) );
  }
  i5938.qualityLevels = i5940
  var i5943 = i5939[1]
  var i5942 = []
  for(var i = 0; i < i5943.length; i += 1) {
    i5942.push( i5943[i + 0] );
  }
  i5938.names = i5942
  i5938.shadows = i5939[2]
  i5938.anisotropicFiltering = i5939[3]
  i5938.antiAliasing = i5939[4]
  i5938.lodBias = i5939[5]
  i5938.shadowCascades = i5939[6]
  i5938.shadowDistance = i5939[7]
  i5938.shadowmaskMode = i5939[8]
  i5938.shadowProjection = i5939[9]
  i5938.shadowResolution = i5939[10]
  i5938.softParticles = !!i5939[11]
  i5938.softVegetation = !!i5939[12]
  i5938.activeColorSpace = i5939[13]
  i5938.desiredColorSpace = i5939[14]
  i5938.masterTextureLimit = i5939[15]
  i5938.maxQueuedFrames = i5939[16]
  i5938.particleRaycastBudget = i5939[17]
  i5938.pixelLightCount = i5939[18]
  i5938.realtimeReflectionProbes = !!i5939[19]
  i5938.shadowCascade2Split = i5939[20]
  i5938.shadowCascade4Split = new pc.Vec3( i5939[21], i5939[22], i5939[23] )
  i5938.streamingMipmapsActive = !!i5939[24]
  i5938.vSyncCount = i5939[25]
  i5938.asyncUploadBufferSize = i5939[26]
  i5938.asyncUploadTimeSlice = i5939[27]
  i5938.billboardsFaceCameraPosition = !!i5939[28]
  i5938.shadowNearPlaneOffset = i5939[29]
  i5938.streamingMipmapsMemoryBudget = i5939[30]
  i5938.maximumLODLevel = i5939[31]
  i5938.streamingMipmapsAddAllCameras = !!i5939[32]
  i5938.streamingMipmapsMaxLevelReduction = i5939[33]
  i5938.streamingMipmapsRenderersPerFrame = i5939[34]
  i5938.resolutionScalingFixedDPIFactor = i5939[35]
  i5938.streamingMipmapsMaxFileIORequests = i5939[36]
  i5938.currentQualityLevel = i5939[37]
  return i5938
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i5946 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i5947 = data
  i5946.m_XCoordinate = i5947[0]
  i5946.m_YCoordinate = i5947[1]
  return i5946
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i5948 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i5949 = data
  i5948.m_XPositionAdjustment = i5949[0]
  i5948.m_YPositionAdjustment = i5949[1]
  return i5948
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5950 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5951 = data
  i5950.xPlacement = i5951[0]
  i5950.yPlacement = i5951[1]
  i5950.xAdvance = i5951[2]
  i5950.yAdvance = i5951[3]
  return i5950
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

Deserializers.creativeName = "BP_V32_NgocNDL_HuyNQ";

Deserializers.lunaAppID = "31727";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "5067";

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

Deserializers.buildID = "1ffed0a7-83d2-4daf-b595-346ae627bcbb";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

