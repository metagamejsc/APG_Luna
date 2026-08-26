var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6448 = root || request.c( 'UnityEngine.JointSpring' )
  var i6449 = data
  i6448.spring = i6449[0]
  i6448.damper = i6449[1]
  i6448.targetPosition = i6449[2]
  return i6448
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6450 = root || request.c( 'UnityEngine.JointMotor' )
  var i6451 = data
  i6450.m_TargetVelocity = i6451[0]
  i6450.m_Force = i6451[1]
  i6450.m_FreeSpin = i6451[2]
  return i6450
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6452 = root || request.c( 'UnityEngine.JointLimits' )
  var i6453 = data
  i6452.m_Min = i6453[0]
  i6452.m_Max = i6453[1]
  i6452.m_Bounciness = i6453[2]
  i6452.m_BounceMinVelocity = i6453[3]
  i6452.m_ContactDistance = i6453[4]
  i6452.minBounce = i6453[5]
  i6452.maxBounce = i6453[6]
  return i6452
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6454 = root || request.c( 'UnityEngine.JointDrive' )
  var i6455 = data
  i6454.m_PositionSpring = i6455[0]
  i6454.m_PositionDamper = i6455[1]
  i6454.m_MaximumForce = i6455[2]
  i6454.m_UseAcceleration = i6455[3]
  return i6454
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6456 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6457 = data
  i6456.m_Spring = i6457[0]
  i6456.m_Damper = i6457[1]
  return i6456
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6458 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6459 = data
  i6458.m_Limit = i6459[0]
  i6458.m_Bounciness = i6459[1]
  i6458.m_ContactDistance = i6459[2]
  return i6458
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6460 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6461 = data
  i6460.m_ExtremumSlip = i6461[0]
  i6460.m_ExtremumValue = i6461[1]
  i6460.m_AsymptoteSlip = i6461[2]
  i6460.m_AsymptoteValue = i6461[3]
  i6460.m_Stiffness = i6461[4]
  return i6460
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6462 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6463 = data
  i6462.m_LowerAngle = i6463[0]
  i6462.m_UpperAngle = i6463[1]
  return i6462
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6464 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6465 = data
  i6464.m_MotorSpeed = i6465[0]
  i6464.m_MaximumMotorTorque = i6465[1]
  return i6464
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6466 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6467 = data
  i6466.m_DampingRatio = i6467[0]
  i6466.m_Frequency = i6467[1]
  i6466.m_Angle = i6467[2]
  return i6466
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6468 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6469 = data
  i6468.m_LowerTranslation = i6469[0]
  i6468.m_UpperTranslation = i6469[1]
  return i6468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6471 = data
  i6470.name = i6471[0]
  i6470.width = i6471[1]
  i6470.height = i6471[2]
  i6470.mipmapCount = i6471[3]
  i6470.anisoLevel = i6471[4]
  i6470.filterMode = i6471[5]
  i6470.hdr = !!i6471[6]
  i6470.format = i6471[7]
  i6470.wrapMode = i6471[8]
  i6470.alphaIsTransparency = !!i6471[9]
  i6470.alphaSource = i6471[10]
  i6470.graphicsFormat = i6471[11]
  i6470.sRGBTexture = !!i6471[12]
  i6470.desiredColorSpace = i6471[13]
  i6470.wrapU = i6471[14]
  i6470.wrapV = i6471[15]
  return i6470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6472 = root || new pc.UnityMaterial()
  var i6473 = data
  i6472.name = i6473[0]
  request.r(i6473[1], i6473[2], 0, i6472, 'shader')
  i6472.renderQueue = i6473[3]
  i6472.enableInstancing = !!i6473[4]
  var i6475 = i6473[5]
  var i6474 = []
  for(var i = 0; i < i6475.length; i += 1) {
    i6474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6475[i + 0]) );
  }
  i6472.floatParameters = i6474
  var i6477 = i6473[6]
  var i6476 = []
  for(var i = 0; i < i6477.length; i += 1) {
    i6476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6477[i + 0]) );
  }
  i6472.colorParameters = i6476
  var i6479 = i6473[7]
  var i6478 = []
  for(var i = 0; i < i6479.length; i += 1) {
    i6478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6479[i + 0]) );
  }
  i6472.vectorParameters = i6478
  var i6481 = i6473[8]
  var i6480 = []
  for(var i = 0; i < i6481.length; i += 1) {
    i6480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6481[i + 0]) );
  }
  i6472.textureParameters = i6480
  var i6483 = i6473[9]
  var i6482 = []
  for(var i = 0; i < i6483.length; i += 1) {
    i6482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6483[i + 0]) );
  }
  i6472.materialFlags = i6482
  return i6472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6487 = data
  i6486.name = i6487[0]
  i6486.value = i6487[1]
  return i6486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6491 = data
  i6490.name = i6491[0]
  i6490.value = new pc.Color(i6491[1], i6491[2], i6491[3], i6491[4])
  return i6490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6495 = data
  i6494.name = i6495[0]
  i6494.value = new pc.Vec4( i6495[1], i6495[2], i6495[3], i6495[4] )
  return i6494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6499 = data
  i6498.name = i6499[0]
  request.r(i6499[1], i6499[2], 0, i6498, 'value')
  return i6498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6503 = data
  i6502.name = i6503[0]
  i6502.enabled = !!i6503[1]
  return i6502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6505 = data
  i6504.name = i6505[0]
  i6504.index = i6505[1]
  i6504.startup = !!i6505[2]
  return i6504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6507 = data
  i6506.aspect = i6507[0]
  i6506.orthographic = !!i6507[1]
  i6506.orthographicSize = i6507[2]
  i6506.backgroundColor = new pc.Color(i6507[3], i6507[4], i6507[5], i6507[6])
  i6506.nearClipPlane = i6507[7]
  i6506.farClipPlane = i6507[8]
  i6506.fieldOfView = i6507[9]
  i6506.depth = i6507[10]
  i6506.clearFlags = i6507[11]
  i6506.cullingMask = i6507[12]
  i6506.rect = i6507[13]
  request.r(i6507[14], i6507[15], 0, i6506, 'targetTexture')
  i6506.usePhysicalProperties = !!i6507[16]
  i6506.focalLength = i6507[17]
  i6506.sensorSize = new pc.Vec2( i6507[18], i6507[19] )
  i6506.lensShift = new pc.Vec2( i6507[20], i6507[21] )
  i6506.gateFit = i6507[22]
  i6506.commandBufferCount = i6507[23]
  i6506.cameraType = i6507[24]
  i6506.enabled = !!i6507[25]
  return i6506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6509 = data
  i6508.name = i6509[0]
  i6508.tagId = i6509[1]
  i6508.enabled = !!i6509[2]
  i6508.isStatic = !!i6509[3]
  i6508.layer = i6509[4]
  return i6508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6511 = data
  i6510.pivot = new pc.Vec2( i6511[0], i6511[1] )
  i6510.anchorMin = new pc.Vec2( i6511[2], i6511[3] )
  i6510.anchorMax = new pc.Vec2( i6511[4], i6511[5] )
  i6510.sizeDelta = new pc.Vec2( i6511[6], i6511[7] )
  i6510.anchoredPosition3D = new pc.Vec3( i6511[8], i6511[9], i6511[10] )
  i6510.rotation = new pc.Quat(i6511[11], i6511[12], i6511[13], i6511[14])
  i6510.scale = new pc.Vec3( i6511[15], i6511[16], i6511[17] )
  return i6510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6513 = data
  i6512.planeDistance = i6513[0]
  i6512.referencePixelsPerUnit = i6513[1]
  i6512.isFallbackOverlay = !!i6513[2]
  i6512.renderMode = i6513[3]
  i6512.renderOrder = i6513[4]
  i6512.sortingLayerName = i6513[5]
  i6512.sortingOrder = i6513[6]
  i6512.scaleFactor = i6513[7]
  request.r(i6513[8], i6513[9], 0, i6512, 'worldCamera')
  i6512.overrideSorting = !!i6513[10]
  i6512.pixelPerfect = !!i6513[11]
  i6512.targetDisplay = i6513[12]
  i6512.overridePixelPerfect = !!i6513[13]
  i6512.enabled = !!i6513[14]
  return i6512
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6514 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6515 = data
  i6514.m_UiScaleMode = i6515[0]
  i6514.m_ReferencePixelsPerUnit = i6515[1]
  i6514.m_ScaleFactor = i6515[2]
  i6514.m_ReferenceResolution = new pc.Vec2( i6515[3], i6515[4] )
  i6514.m_ScreenMatchMode = i6515[5]
  i6514.m_MatchWidthOrHeight = i6515[6]
  i6514.m_PhysicalUnit = i6515[7]
  i6514.m_FallbackScreenDPI = i6515[8]
  i6514.m_DefaultSpriteDPI = i6515[9]
  i6514.m_DynamicPixelsPerUnit = i6515[10]
  i6514.m_PresetInfoIsWorld = !!i6515[11]
  return i6514
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6516 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6517 = data
  i6516.m_IgnoreReversedGraphics = !!i6517[0]
  i6516.m_BlockingObjects = i6517[1]
  i6516.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6517[2] )
  return i6516
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i6518 = root || request.c( 'Playable.GameManager' )
  var i6519 = data
  i6518.EventCountdownEndGame = request.d('System.Action', i6519[0], i6518.EventCountdownEndGame)
  i6518._totalEvent = i6519[1]
  i6518._endTime = i6519[2]
  request.r(i6519[3], i6519[4], 0, i6518, '_backgroundMusic')
  request.r(i6519[5], i6519[6], 0, i6518, '_backgroundTexture')
  request.r(i6519[7], i6519[8], 0, i6518, '_btnBlock')
  request.r(i6519[9], i6519[10], 0, i6518, '_background')
  request.r(i6519[11], i6519[12], 0, i6518, '_progressFillImage')
  request.r(i6519[13], i6519[14], 0, i6518, '_progressText')
  i6518._progressTweenDuration = i6519[15]
  request.r(i6519[16], i6519[17], 0, i6518, '_timerFillImage')
  request.r(i6519[18], i6519[19], 0, i6518, '_timerText')
  i6518._timerPunchScale = i6519[20]
  return i6518
}

Deserializers["System.Action"] = function (request, data, root) {
  var i6520 = root || request.c( 'System.Action' )
  var i6521 = data
  return i6520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6523 = data
  i6522.cullTransparentMesh = !!i6523[0]
  return i6522
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6524 = root || request.c( 'UnityEngine.UI.Image' )
  var i6525 = data
  request.r(i6525[0], i6525[1], 0, i6524, 'm_Sprite')
  i6524.m_Type = i6525[2]
  i6524.m_PreserveAspect = !!i6525[3]
  i6524.m_FillCenter = !!i6525[4]
  i6524.m_FillMethod = i6525[5]
  i6524.m_FillAmount = i6525[6]
  i6524.m_FillClockwise = !!i6525[7]
  i6524.m_FillOrigin = i6525[8]
  i6524.m_UseSpriteMesh = !!i6525[9]
  i6524.m_PixelsPerUnitMultiplier = i6525[10]
  request.r(i6525[11], i6525[12], 0, i6524, 'm_Material')
  i6524.m_Maskable = !!i6525[13]
  i6524.m_Color = new pc.Color(i6525[14], i6525[15], i6525[16], i6525[17])
  i6524.m_RaycastTarget = !!i6525[18]
  i6524.m_RaycastPadding = new pc.Vec4( i6525[19], i6525[20], i6525[21], i6525[22] )
  return i6524
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i6526 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i6527 = data
  request.r(i6527[0], i6527[1], 0, i6526, 'm_Texture')
  i6526.m_UVRect = UnityEngine.Rect.MinMaxRect(i6527[2], i6527[3], i6527[4], i6527[5])
  request.r(i6527[6], i6527[7], 0, i6526, 'm_Material')
  i6526.m_Maskable = !!i6527[8]
  i6526.m_Color = new pc.Color(i6527[9], i6527[10], i6527[11], i6527[12])
  i6526.m_RaycastTarget = !!i6527[13]
  i6526.m_RaycastPadding = new pc.Vec4( i6527[14], i6527[15], i6527[16], i6527[17] )
  return i6526
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i6528 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i6529 = data
  i6528.m_hasFontAssetChanged = !!i6529[0]
  request.r(i6529[1], i6529[2], 0, i6528, 'm_baseMaterial')
  i6528.m_maskOffset = new pc.Vec4( i6529[3], i6529[4], i6529[5], i6529[6] )
  i6528.m_text = i6529[7]
  i6528.m_isRightToLeft = !!i6529[8]
  request.r(i6529[9], i6529[10], 0, i6528, 'm_fontAsset')
  request.r(i6529[11], i6529[12], 0, i6528, 'm_sharedMaterial')
  var i6531 = i6529[13]
  var i6530 = []
  for(var i = 0; i < i6531.length; i += 2) {
  request.r(i6531[i + 0], i6531[i + 1], 2, i6530, '')
  }
  i6528.m_fontSharedMaterials = i6530
  request.r(i6529[14], i6529[15], 0, i6528, 'm_fontMaterial')
  var i6533 = i6529[16]
  var i6532 = []
  for(var i = 0; i < i6533.length; i += 2) {
  request.r(i6533[i + 0], i6533[i + 1], 2, i6532, '')
  }
  i6528.m_fontMaterials = i6532
  i6528.m_fontColor32 = UnityEngine.Color32.ConstructColor(i6529[17], i6529[18], i6529[19], i6529[20])
  i6528.m_fontColor = new pc.Color(i6529[21], i6529[22], i6529[23], i6529[24])
  i6528.m_enableVertexGradient = !!i6529[25]
  i6528.m_colorMode = i6529[26]
  i6528.m_fontColorGradient = request.d('TMPro.VertexGradient', i6529[27], i6528.m_fontColorGradient)
  request.r(i6529[28], i6529[29], 0, i6528, 'm_fontColorGradientPreset')
  request.r(i6529[30], i6529[31], 0, i6528, 'm_spriteAsset')
  i6528.m_tintAllSprites = !!i6529[32]
  request.r(i6529[33], i6529[34], 0, i6528, 'm_StyleSheet')
  i6528.m_TextStyleHashCode = i6529[35]
  i6528.m_overrideHtmlColors = !!i6529[36]
  i6528.m_faceColor = UnityEngine.Color32.ConstructColor(i6529[37], i6529[38], i6529[39], i6529[40])
  i6528.m_fontSize = i6529[41]
  i6528.m_fontSizeBase = i6529[42]
  i6528.m_fontWeight = i6529[43]
  i6528.m_enableAutoSizing = !!i6529[44]
  i6528.m_fontSizeMin = i6529[45]
  i6528.m_fontSizeMax = i6529[46]
  i6528.m_fontStyle = i6529[47]
  i6528.m_HorizontalAlignment = i6529[48]
  i6528.m_VerticalAlignment = i6529[49]
  i6528.m_textAlignment = i6529[50]
  i6528.m_characterSpacing = i6529[51]
  i6528.m_wordSpacing = i6529[52]
  i6528.m_lineSpacing = i6529[53]
  i6528.m_lineSpacingMax = i6529[54]
  i6528.m_paragraphSpacing = i6529[55]
  i6528.m_charWidthMaxAdj = i6529[56]
  i6528.m_TextWrappingMode = i6529[57]
  i6528.m_wordWrappingRatios = i6529[58]
  i6528.m_overflowMode = i6529[59]
  request.r(i6529[60], i6529[61], 0, i6528, 'm_linkedTextComponent')
  request.r(i6529[62], i6529[63], 0, i6528, 'parentLinkedComponent')
  i6528.m_enableKerning = !!i6529[64]
  var i6535 = i6529[65]
  var i6534 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i6535.length; i += 1) {
    i6534.add(i6535[i + 0]);
  }
  i6528.m_ActiveFontFeatures = i6534
  i6528.m_enableExtraPadding = !!i6529[66]
  i6528.checkPaddingRequired = !!i6529[67]
  i6528.m_isRichText = !!i6529[68]
  i6528.m_parseCtrlCharacters = !!i6529[69]
  i6528.m_isOrthographic = !!i6529[70]
  i6528.m_isCullingEnabled = !!i6529[71]
  i6528.m_horizontalMapping = i6529[72]
  i6528.m_verticalMapping = i6529[73]
  i6528.m_uvLineOffset = i6529[74]
  i6528.m_geometrySortingOrder = i6529[75]
  i6528.m_IsTextObjectScaleStatic = !!i6529[76]
  i6528.m_VertexBufferAutoSizeReduction = !!i6529[77]
  i6528.m_useMaxVisibleDescender = !!i6529[78]
  i6528.m_pageToDisplay = i6529[79]
  i6528.m_margin = new pc.Vec4( i6529[80], i6529[81], i6529[82], i6529[83] )
  i6528.m_isUsingLegacyAnimationComponent = !!i6529[84]
  i6528.m_isVolumetricText = !!i6529[85]
  request.r(i6529[86], i6529[87], 0, i6528, 'm_Material')
  i6528.m_EmojiFallbackSupport = !!i6529[88]
  i6528.m_Maskable = !!i6529[89]
  i6528.m_Color = new pc.Color(i6529[90], i6529[91], i6529[92], i6529[93])
  i6528.m_RaycastTarget = !!i6529[94]
  i6528.m_RaycastPadding = new pc.Vec4( i6529[95], i6529[96], i6529[97], i6529[98] )
  return i6528
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i6538 = root || request.c( 'TMPro.VertexGradient' )
  var i6539 = data
  i6538.topLeft = new pc.Color(i6539[0], i6539[1], i6539[2], i6539[3])
  i6538.topRight = new pc.Color(i6539[4], i6539[5], i6539[6], i6539[7])
  i6538.bottomLeft = new pc.Color(i6539[8], i6539[9], i6539[10], i6539[11])
  i6538.bottomRight = new pc.Color(i6539[12], i6539[13], i6539[14], i6539[15])
  return i6538
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6542 = root || request.c( 'UnityEngine.UI.Button' )
  var i6543 = data
  i6542.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6543[0], i6542.m_OnClick)
  i6542.m_Navigation = request.d('UnityEngine.UI.Navigation', i6543[1], i6542.m_Navigation)
  i6542.m_Transition = i6543[2]
  i6542.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6543[3], i6542.m_Colors)
  i6542.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6543[4], i6542.m_SpriteState)
  i6542.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6543[5], i6542.m_AnimationTriggers)
  i6542.m_Interactable = !!i6543[6]
  request.r(i6543[7], i6543[8], 0, i6542, 'm_TargetGraphic')
  return i6542
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6544 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6545 = data
  i6544.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6545[0], i6544.m_PersistentCalls)
  return i6544
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6546 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6547 = data
  var i6549 = i6547[0]
  var i6548 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6549.length; i += 1) {
    i6548.add(request.d('UnityEngine.Events.PersistentCall', i6549[i + 0]));
  }
  i6546.m_Calls = i6548
  return i6546
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6552 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6553 = data
  request.r(i6553[0], i6553[1], 0, i6552, 'm_Target')
  i6552.m_TargetAssemblyTypeName = i6553[2]
  i6552.m_MethodName = i6553[3]
  i6552.m_Mode = i6553[4]
  i6552.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6553[5], i6552.m_Arguments)
  i6552.m_CallState = i6553[6]
  return i6552
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6554 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6555 = data
  request.r(i6555[0], i6555[1], 0, i6554, 'm_ObjectArgument')
  i6554.m_ObjectArgumentAssemblyTypeName = i6555[2]
  i6554.m_IntArgument = i6555[3]
  i6554.m_FloatArgument = i6555[4]
  i6554.m_StringArgument = i6555[5]
  i6554.m_BoolArgument = !!i6555[6]
  return i6554
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6556 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6557 = data
  i6556.m_Mode = i6557[0]
  i6556.m_WrapAround = !!i6557[1]
  request.r(i6557[2], i6557[3], 0, i6556, 'm_SelectOnUp')
  request.r(i6557[4], i6557[5], 0, i6556, 'm_SelectOnDown')
  request.r(i6557[6], i6557[7], 0, i6556, 'm_SelectOnLeft')
  request.r(i6557[8], i6557[9], 0, i6556, 'm_SelectOnRight')
  return i6556
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6558 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6559 = data
  i6558.m_NormalColor = new pc.Color(i6559[0], i6559[1], i6559[2], i6559[3])
  i6558.m_HighlightedColor = new pc.Color(i6559[4], i6559[5], i6559[6], i6559[7])
  i6558.m_PressedColor = new pc.Color(i6559[8], i6559[9], i6559[10], i6559[11])
  i6558.m_SelectedColor = new pc.Color(i6559[12], i6559[13], i6559[14], i6559[15])
  i6558.m_DisabledColor = new pc.Color(i6559[16], i6559[17], i6559[18], i6559[19])
  i6558.m_ColorMultiplier = i6559[20]
  i6558.m_FadeDuration = i6559[21]
  return i6558
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6560 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6561 = data
  request.r(i6561[0], i6561[1], 0, i6560, 'm_HighlightedSprite')
  request.r(i6561[2], i6561[3], 0, i6560, 'm_PressedSprite')
  request.r(i6561[4], i6561[5], 0, i6560, 'm_SelectedSprite')
  request.r(i6561[6], i6561[7], 0, i6560, 'm_DisabledSprite')
  return i6560
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6562 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6563 = data
  i6562.m_NormalTrigger = i6563[0]
  i6562.m_HighlightedTrigger = i6563[1]
  i6562.m_PressedTrigger = i6563[2]
  i6562.m_SelectedTrigger = i6563[3]
  i6562.m_DisabledTrigger = i6563[4]
  return i6562
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i6564 = root || request.c( 'UnityEngine.UI.Mask' )
  var i6565 = data
  i6564.m_ShowMaskGraphic = !!i6565[0]
  return i6564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6567 = data
  request.r(i6567[0], i6567[1], 0, i6566, 'clip')
  request.r(i6567[2], i6567[3], 0, i6566, 'outputAudioMixerGroup')
  i6566.playOnAwake = !!i6567[4]
  i6566.loop = !!i6567[5]
  i6566.time = i6567[6]
  i6566.volume = i6567[7]
  i6566.pitch = i6567[8]
  i6566.enabled = !!i6567[9]
  return i6566
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i6568 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i6569 = data
  i6568.m_Padding = new pc.Vec4( i6569[0], i6569[1], i6569[2], i6569[3] )
  i6568.m_Softness = new pc.Vec2( i6569[4], i6569[5] )
  return i6568
}

Deserializers["GameController"] = function (request, data, root) {
  var i6570 = root || request.c( 'GameController' )
  var i6571 = data
  var i6573 = i6571[0]
  var i6572 = new (System.Collections.Generic.List$1(Bridge.ns('ClockItem')))
  for(var i = 0; i < i6573.length; i += 2) {
  request.r(i6573[i + 0], i6573[i + 1], 1, i6572, '')
  }
  i6570._clockItems = i6572
  var i6575 = i6571[1]
  var i6574 = new (System.Collections.Generic.List$1(Bridge.ns('ClockDropTarget')))
  for(var i = 0; i < i6575.length; i += 2) {
  request.r(i6575[i + 0], i6575[i + 1], 1, i6574, '')
  }
  i6570._dropTargets = i6574
  request.r(i6571[2], i6571[3], 0, i6570, '_tutorialHand')
  request.r(i6571[4], i6571[5], 0, i6570, '_tutorialFrom')
  request.r(i6571[6], i6571[7], 0, i6570, '_tutorialTo')
  i6570._tutorialMoveDuration = i6571[8]
  i6570._tutorialStartDelay = i6571[9]
  i6570._hideTutorialOnFirstSuccess = !!i6571[10]
  return i6570
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i6580 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i6581 = data
  request.r(i6581[0], i6581[1], 0, i6580, 'skeletonDataAsset')
  request.r(i6581[2], i6581[3], 0, i6580, 'additiveMaterial')
  request.r(i6581[4], i6581[5], 0, i6580, 'multiplyMaterial')
  request.r(i6581[6], i6581[7], 0, i6580, 'screenMaterial')
  i6580.forceAdditiveMaterial = !!i6581[8]
  i6580.initialSkinName = i6581[9]
  i6580.initialFlipX = !!i6581[10]
  i6580.initialFlipY = !!i6581[11]
  i6580.startingAnimation = i6581[12]
  i6580.startingLoop = !!i6581[13]
  i6580.timeScale = i6581[14]
  i6580.freeze = !!i6581[15]
  i6580.layoutScaleMode = i6581[16]
  i6580.updateWhenInvisible = i6581[17]
  i6580.allowMultipleCanvasRenderers = !!i6581[18]
  var i6583 = i6581[19]
  var i6582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i6583.length; i += 2) {
  request.r(i6583[i + 0], i6583[i + 1], 1, i6582, '')
  }
  i6580.canvasRenderers = i6582
  i6580.enableSeparatorSlots = !!i6581[20]
  i6580.updateSeparatorPartLocation = !!i6581[21]
  i6580.updateSeparatorPartScale = !!i6581[22]
  i6580.disableMeshAssignmentOnOverride = !!i6581[23]
  i6580.m_SkeletonColor = new pc.Color(i6581[24], i6581[25], i6581[26], i6581[27])
  i6580.referenceSize = new pc.Vec2( i6581[28], i6581[29] )
  i6580.pivotOffset = new pc.Vec2( i6581[30], i6581[31] )
  i6580.referenceScale = i6581[32]
  i6580.layoutScale = i6581[33]
  i6580.rectTransformSize = new pc.Vec2( i6581[34], i6581[35] )
  i6580.editReferenceRect = !!i6581[36]
  var i6585 = i6581[37]
  var i6584 = []
  for(var i = 0; i < i6585.length; i += 1) {
    i6584.push( i6585[i + 0] );
  }
  i6580.separatorSlotNames = i6584
  var i6587 = i6581[38]
  var i6586 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i6587.length; i += 2) {
  request.r(i6587[i + 0], i6587[i + 1], 1, i6586, '')
  }
  i6580.separatorParts = i6586
  i6580.physicsPositionInheritanceFactor = new pc.Vec2( i6581[39], i6581[40] )
  i6580.physicsRotationInheritanceFactor = i6581[41]
  request.r(i6581[42], i6581[43], 0, i6580, 'physicsMovementRelativeTo')
  i6580.meshGenerator = request.d('Spine.Unity.MeshGenerator', i6581[44], i6580.meshGenerator)
  i6580.updateTiming = i6581[45]
  i6580.unscaledTime = !!i6581[46]
  request.r(i6581[47], i6581[48], 0, i6580, 'm_Material')
  i6580.m_Maskable = !!i6581[49]
  i6580.m_Color = new pc.Color(i6581[50], i6581[51], i6581[52], i6581[53])
  i6580.m_RaycastTarget = !!i6581[54]
  i6580.m_RaycastPadding = new pc.Vec4( i6581[55], i6581[56], i6581[57], i6581[58] )
  return i6580
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i6594 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i6595 = data
  i6594.settings = request.d('Spine.Unity.MeshGenerator+Settings', i6595[0], i6594.settings)
  return i6594
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i6596 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i6597 = data
  i6596.useClipping = !!i6597[0]
  i6596.zSpacing = i6597[1]
  i6596.tintBlack = !!i6597[2]
  i6596.canvasGroupCompatible = !!i6597[3]
  i6596.pmaVertexColors = !!i6597[4]
  i6596.addNormals = !!i6597[5]
  i6596.calculateTangents = !!i6597[6]
  i6596.immutableTriangles = !!i6597[7]
  return i6596
}

Deserializers["ClockDropTarget"] = function (request, data, root) {
  var i6598 = root || request.c( 'ClockDropTarget' )
  var i6599 = data
  request.r(i6599[0], i6599[1], 0, i6598, '_skeletonAnimation')
  i6598._animationName = i6599[2]
  i6598._loopAnimation = !!i6599[3]
  request.r(i6599[4], i6599[5], 0, i6598, '_audioClip')
  i6598._acceptOnlyOnce = !!i6599[6]
  request.r(i6599[7], i6599[8], 0, i6598, '_door')
  return i6598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i6600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i6601 = data
  i6600.m_Alpha = i6601[0]
  i6600.m_Interactable = !!i6601[1]
  i6600.m_BlocksRaycasts = !!i6601[2]
  i6600.m_IgnoreParentGroups = !!i6601[3]
  i6600.enabled = !!i6601[4]
  return i6600
}

Deserializers["ClockItem"] = function (request, data, root) {
  var i6602 = root || request.c( 'ClockItem' )
  var i6603 = data
  request.r(i6603[0], i6603[1], 0, i6602, '_dragCanvas')
  return i6602
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i6604 = root || request.c( 'Playable.AudioManager' )
  var i6605 = data
  var i6607 = i6605[0]
  var i6606 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i6607.length; i += 1) {
    i6606.add(request.d('Playable.SoundData', i6607[i + 0]));
  }
  i6604._sounds = i6606
  request.r(i6605[1], i6605[2], 0, i6604, '_audioMusic')
  request.r(i6605[3], i6605[4], 0, i6604, '_audioSound')
  return i6604
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i6610 = root || request.c( 'Playable.SoundData' )
  var i6611 = data
  i6610.Type = i6611[0]
  request.r(i6611[1], i6611[2], 0, i6610, 'Clip')
  return i6610
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6612 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6613 = data
  request.r(i6613[0], i6613[1], 0, i6612, 'm_FirstSelected')
  i6612.m_sendNavigationEvents = !!i6613[2]
  i6612.m_DragThreshold = i6613[3]
  return i6612
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6614 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6615 = data
  i6614.m_HorizontalAxis = i6615[0]
  i6614.m_VerticalAxis = i6615[1]
  i6614.m_SubmitButton = i6615[2]
  i6614.m_CancelButton = i6615[3]
  i6614.m_InputActionsPerSecond = i6615[4]
  i6614.m_RepeatDelay = i6615[5]
  i6614.m_ForceModuleActive = !!i6615[6]
  i6614.m_SendPointerHoverToParent = !!i6615[7]
  return i6614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6617 = data
  i6616.ambientIntensity = i6617[0]
  i6616.reflectionIntensity = i6617[1]
  i6616.ambientMode = i6617[2]
  i6616.ambientLight = new pc.Color(i6617[3], i6617[4], i6617[5], i6617[6])
  i6616.ambientSkyColor = new pc.Color(i6617[7], i6617[8], i6617[9], i6617[10])
  i6616.ambientGroundColor = new pc.Color(i6617[11], i6617[12], i6617[13], i6617[14])
  i6616.ambientEquatorColor = new pc.Color(i6617[15], i6617[16], i6617[17], i6617[18])
  i6616.fogColor = new pc.Color(i6617[19], i6617[20], i6617[21], i6617[22])
  i6616.fogEndDistance = i6617[23]
  i6616.fogStartDistance = i6617[24]
  i6616.fogDensity = i6617[25]
  i6616.fog = !!i6617[26]
  request.r(i6617[27], i6617[28], 0, i6616, 'skybox')
  i6616.fogMode = i6617[29]
  var i6619 = i6617[30]
  var i6618 = []
  for(var i = 0; i < i6619.length; i += 1) {
    i6618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6619[i + 0]) );
  }
  i6616.lightmaps = i6618
  i6616.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6617[31], i6616.lightProbes)
  i6616.lightmapsMode = i6617[32]
  i6616.mixedBakeMode = i6617[33]
  i6616.environmentLightingMode = i6617[34]
  i6616.ambientProbe = new pc.SphericalHarmonicsL2(i6617[35])
  request.r(i6617[36], i6617[37], 0, i6616, 'customReflection')
  request.r(i6617[38], i6617[39], 0, i6616, 'defaultReflection')
  i6616.defaultReflectionMode = i6617[40]
  i6616.defaultReflectionResolution = i6617[41]
  i6616.sunLightObjectId = i6617[42]
  i6616.pixelLightCount = i6617[43]
  i6616.defaultReflectionHDR = !!i6617[44]
  i6616.hasLightDataAsset = !!i6617[45]
  i6616.hasManualGenerate = !!i6617[46]
  return i6616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6623 = data
  request.r(i6623[0], i6623[1], 0, i6622, 'lightmapColor')
  request.r(i6623[2], i6623[3], 0, i6622, 'lightmapDirection')
  request.r(i6623[4], i6623[5], 0, i6622, 'shadowMask')
  return i6622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6624 = root || new UnityEngine.LightProbes()
  var i6625 = data
  return i6624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6633 = data
  var i6635 = i6633[0]
  var i6634 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6635.length; i += 1) {
    i6634.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6635[i + 0]));
  }
  i6632.ShaderCompilationErrors = i6634
  i6632.name = i6633[1]
  i6632.guid = i6633[2]
  var i6637 = i6633[3]
  var i6636 = []
  for(var i = 0; i < i6637.length; i += 1) {
    i6636.push( i6637[i + 0] );
  }
  i6632.shaderDefinedKeywords = i6636
  var i6639 = i6633[4]
  var i6638 = []
  for(var i = 0; i < i6639.length; i += 1) {
    i6638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6639[i + 0]) );
  }
  i6632.passes = i6638
  var i6641 = i6633[5]
  var i6640 = []
  for(var i = 0; i < i6641.length; i += 1) {
    i6640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6641[i + 0]) );
  }
  i6632.usePasses = i6640
  var i6643 = i6633[6]
  var i6642 = []
  for(var i = 0; i < i6643.length; i += 1) {
    i6642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6643[i + 0]) );
  }
  i6632.defaultParameterValues = i6642
  request.r(i6633[7], i6633[8], 0, i6632, 'unityFallbackShader')
  i6632.readDepth = !!i6633[9]
  i6632.hasDepthOnlyPass = !!i6633[10]
  i6632.isCreatedByShaderGraph = !!i6633[11]
  i6632.disableBatching = !!i6633[12]
  i6632.compiled = !!i6633[13]
  return i6632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6647 = data
  i6646.shaderName = i6647[0]
  i6646.errorMessage = i6647[1]
  return i6646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6650 = root || new pc.UnityShaderPass()
  var i6651 = data
  i6650.id = i6651[0]
  i6650.subShaderIndex = i6651[1]
  i6650.name = i6651[2]
  i6650.passType = i6651[3]
  i6650.grabPassTextureName = i6651[4]
  i6650.usePass = !!i6651[5]
  i6650.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6651[6], i6650.zTest)
  i6650.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6651[7], i6650.zWrite)
  i6650.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6651[8], i6650.culling)
  i6650.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6651[9], i6650.blending)
  i6650.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6651[10], i6650.alphaBlending)
  i6650.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6651[11], i6650.colorWriteMask)
  i6650.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6651[12], i6650.offsetUnits)
  i6650.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6651[13], i6650.offsetFactor)
  i6650.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6651[14], i6650.stencilRef)
  i6650.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6651[15], i6650.stencilReadMask)
  i6650.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6651[16], i6650.stencilWriteMask)
  i6650.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6651[17], i6650.stencilOp)
  i6650.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6651[18], i6650.stencilOpFront)
  i6650.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6651[19], i6650.stencilOpBack)
  var i6653 = i6651[20]
  var i6652 = []
  for(var i = 0; i < i6653.length; i += 1) {
    i6652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6653[i + 0]) );
  }
  i6650.tags = i6652
  var i6655 = i6651[21]
  var i6654 = []
  for(var i = 0; i < i6655.length; i += 1) {
    i6654.push( i6655[i + 0] );
  }
  i6650.passDefinedKeywords = i6654
  var i6657 = i6651[22]
  var i6656 = []
  for(var i = 0; i < i6657.length; i += 1) {
    i6656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6657[i + 0]) );
  }
  i6650.passDefinedKeywordGroups = i6656
  var i6659 = i6651[23]
  var i6658 = []
  for(var i = 0; i < i6659.length; i += 1) {
    i6658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6659[i + 0]) );
  }
  i6650.variants = i6658
  var i6661 = i6651[24]
  var i6660 = []
  for(var i = 0; i < i6661.length; i += 1) {
    i6660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6661[i + 0]) );
  }
  i6650.excludedVariants = i6660
  i6650.hasDepthReader = !!i6651[25]
  return i6650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6663 = data
  i6662.val = i6663[0]
  i6662.name = i6663[1]
  return i6662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6665 = data
  i6664.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6665[0], i6664.src)
  i6664.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6665[1], i6664.dst)
  i6664.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6665[2], i6664.op)
  return i6664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6667 = data
  i6666.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6667[0], i6666.pass)
  i6666.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6667[1], i6666.fail)
  i6666.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6667[2], i6666.zFail)
  i6666.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6667[3], i6666.comp)
  return i6666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6671 = data
  i6670.name = i6671[0]
  i6670.value = i6671[1]
  return i6670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6675 = data
  var i6677 = i6675[0]
  var i6676 = []
  for(var i = 0; i < i6677.length; i += 1) {
    i6676.push( i6677[i + 0] );
  }
  i6674.keywords = i6676
  i6674.hasDiscard = !!i6675[1]
  return i6674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6681 = data
  i6680.passId = i6681[0]
  i6680.subShaderIndex = i6681[1]
  var i6683 = i6681[2]
  var i6682 = []
  for(var i = 0; i < i6683.length; i += 1) {
    i6682.push( i6683[i + 0] );
  }
  i6680.keywords = i6682
  i6680.vertexProgram = i6681[3]
  i6680.fragmentProgram = i6681[4]
  i6680.exportedForWebGl2 = !!i6681[5]
  i6680.readDepth = !!i6681[6]
  return i6680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6687 = data
  request.r(i6687[0], i6687[1], 0, i6686, 'shader')
  i6686.pass = i6687[2]
  return i6686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6691 = data
  i6690.name = i6691[0]
  i6690.type = i6691[1]
  i6690.value = new pc.Vec4( i6691[2], i6691[3], i6691[4], i6691[5] )
  i6690.textureValue = i6691[6]
  i6690.shaderPropertyFlag = i6691[7]
  return i6690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6693 = data
  i6692.name = i6693[0]
  request.r(i6693[1], i6693[2], 0, i6692, 'texture')
  i6692.aabb = i6693[3]
  i6692.vertices = i6693[4]
  i6692.triangles = i6693[5]
  i6692.textureRect = UnityEngine.Rect.MinMaxRect(i6693[6], i6693[7], i6693[8], i6693[9])
  i6692.packedRect = UnityEngine.Rect.MinMaxRect(i6693[10], i6693[11], i6693[12], i6693[13])
  i6692.border = new pc.Vec4( i6693[14], i6693[15], i6693[16], i6693[17] )
  i6692.transparency = i6693[18]
  i6692.bounds = i6693[19]
  i6692.pixelsPerUnit = i6693[20]
  i6692.textureWidth = i6693[21]
  i6692.textureHeight = i6693[22]
  i6692.nativeSize = new pc.Vec2( i6693[23], i6693[24] )
  i6692.pivot = new pc.Vec2( i6693[25], i6693[26] )
  i6692.textureRectOffset = new pc.Vec2( i6693[27], i6693[28] )
  return i6692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6695 = data
  i6694.name = i6695[0]
  return i6694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i6696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i6697 = data
  i6696.name = i6697[0]
  i6696.ascent = i6697[1]
  i6696.originalLineHeight = i6697[2]
  i6696.fontSize = i6697[3]
  var i6699 = i6697[4]
  var i6698 = []
  for(var i = 0; i < i6699.length; i += 1) {
    i6698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i6699[i + 0]) );
  }
  i6696.characterInfo = i6698
  request.r(i6697[5], i6697[6], 0, i6696, 'texture')
  i6696.originalFontSize = i6697[7]
  return i6696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i6702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i6703 = data
  i6702.index = i6703[0]
  i6702.advance = i6703[1]
  i6702.bearing = i6703[2]
  i6702.glyphWidth = i6703[3]
  i6702.glyphHeight = i6703[4]
  i6702.minX = i6703[5]
  i6702.maxX = i6703[6]
  i6702.minY = i6703[7]
  i6702.maxY = i6703[8]
  i6702.uvBottomLeftX = i6703[9]
  i6702.uvBottomLeftY = i6703[10]
  i6702.uvBottomRightX = i6703[11]
  i6702.uvBottomRightY = i6703[12]
  i6702.uvTopLeftX = i6703[13]
  i6702.uvTopLeftY = i6703[14]
  i6702.uvTopRightX = i6703[15]
  i6702.uvTopRightY = i6703[16]
  return i6702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6705 = data
  i6704.name = i6705[0]
  i6704.bytes64 = i6705[1]
  i6704.data = i6705[2]
  return i6704
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i6706 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i6707 = data
  i6706.normalStyle = i6707[0]
  i6706.normalSpacingOffset = i6707[1]
  i6706.boldStyle = i6707[2]
  i6706.boldSpacing = i6707[3]
  i6706.italicStyle = i6707[4]
  i6706.tabSize = i6707[5]
  request.r(i6707[6], i6707[7], 0, i6706, 'atlas')
  i6706.m_SourceFontFileGUID = i6707[8]
  i6706.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i6707[9], i6706.m_CreationSettings)
  request.r(i6707[10], i6707[11], 0, i6706, 'm_SourceFontFile')
  i6706.m_SourceFontFilePath = i6707[12]
  i6706.m_AtlasPopulationMode = i6707[13]
  i6706.InternalDynamicOS = !!i6707[14]
  var i6709 = i6707[15]
  var i6708 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i6709.length; i += 1) {
    i6708.add(request.d('UnityEngine.TextCore.Glyph', i6709[i + 0]));
  }
  i6706.m_GlyphTable = i6708
  var i6711 = i6707[16]
  var i6710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i6711.length; i += 1) {
    i6710.add(request.d('TMPro.TMP_Character', i6711[i + 0]));
  }
  i6706.m_CharacterTable = i6710
  var i6713 = i6707[17]
  var i6712 = []
  for(var i = 0; i < i6713.length; i += 2) {
  request.r(i6713[i + 0], i6713[i + 1], 2, i6712, '')
  }
  i6706.m_AtlasTextures = i6712
  i6706.m_AtlasTextureIndex = i6707[18]
  i6706.m_IsMultiAtlasTexturesEnabled = !!i6707[19]
  i6706.m_GetFontFeatures = !!i6707[20]
  i6706.m_ClearDynamicDataOnBuild = !!i6707[21]
  i6706.m_AtlasWidth = i6707[22]
  i6706.m_AtlasHeight = i6707[23]
  i6706.m_AtlasPadding = i6707[24]
  i6706.m_AtlasRenderMode = i6707[25]
  var i6715 = i6707[26]
  var i6714 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6715.length; i += 1) {
    i6714.add(request.d('UnityEngine.TextCore.GlyphRect', i6715[i + 0]));
  }
  i6706.m_UsedGlyphRects = i6714
  var i6717 = i6707[27]
  var i6716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6717.length; i += 1) {
    i6716.add(request.d('UnityEngine.TextCore.GlyphRect', i6717[i + 0]));
  }
  i6706.m_FreeGlyphRects = i6716
  i6706.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i6707[28], i6706.m_FontFeatureTable)
  i6706.m_ShouldReimportFontFeatures = !!i6707[29]
  var i6719 = i6707[30]
  var i6718 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6719.length; i += 2) {
  request.r(i6719[i + 0], i6719[i + 1], 1, i6718, '')
  }
  i6706.m_FallbackFontAssetTable = i6718
  var i6721 = i6707[31]
  var i6720 = []
  for(var i = 0; i < i6721.length; i += 1) {
    i6720.push( request.d('TMPro.TMP_FontWeightPair', i6721[i + 0]) );
  }
  i6706.m_FontWeightTable = i6720
  var i6723 = i6707[32]
  var i6722 = []
  for(var i = 0; i < i6723.length; i += 1) {
    i6722.push( request.d('TMPro.TMP_FontWeightPair', i6723[i + 0]) );
  }
  i6706.fontWeights = i6722
  i6706.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i6707[33], i6706.m_fontInfo)
  var i6725 = i6707[34]
  var i6724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i6725.length; i += 1) {
    i6724.add(request.d('TMPro.TMP_Glyph', i6725[i + 0]));
  }
  i6706.m_glyphInfoList = i6724
  i6706.m_KerningTable = request.d('TMPro.KerningTable', i6707[35], i6706.m_KerningTable)
  var i6727 = i6707[36]
  var i6726 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6727.length; i += 2) {
  request.r(i6727[i + 0], i6727[i + 1], 1, i6726, '')
  }
  i6706.fallbackFontAssets = i6726
  i6706.m_Version = i6707[37]
  i6706.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6707[38], i6706.m_FaceInfo)
  request.r(i6707[39], i6707[40], 0, i6706, 'm_Material')
  return i6706
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i6728 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i6729 = data
  i6728.sourceFontFileName = i6729[0]
  i6728.sourceFontFileGUID = i6729[1]
  i6728.faceIndex = i6729[2]
  i6728.pointSizeSamplingMode = i6729[3]
  i6728.pointSize = i6729[4]
  i6728.padding = i6729[5]
  i6728.paddingMode = i6729[6]
  i6728.packingMode = i6729[7]
  i6728.atlasWidth = i6729[8]
  i6728.atlasHeight = i6729[9]
  i6728.characterSetSelectionMode = i6729[10]
  i6728.characterSequence = i6729[11]
  i6728.referencedFontAssetGUID = i6729[12]
  i6728.referencedTextAssetGUID = i6729[13]
  i6728.fontStyle = i6729[14]
  i6728.fontStyleModifier = i6729[15]
  i6728.renderMode = i6729[16]
  i6728.includeFontFeatures = !!i6729[17]
  return i6728
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i6732 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i6733 = data
  i6732.m_Index = i6733[0]
  i6732.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6733[1], i6732.m_Metrics)
  i6732.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6733[2], i6732.m_GlyphRect)
  i6732.m_Scale = i6733[3]
  i6732.m_AtlasIndex = i6733[4]
  i6732.m_ClassDefinitionType = i6733[5]
  return i6732
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i6734 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i6735 = data
  i6734.m_Width = i6735[0]
  i6734.m_Height = i6735[1]
  i6734.m_HorizontalBearingX = i6735[2]
  i6734.m_HorizontalBearingY = i6735[3]
  i6734.m_HorizontalAdvance = i6735[4]
  return i6734
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i6736 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i6737 = data
  i6736.m_X = i6737[0]
  i6736.m_Y = i6737[1]
  i6736.m_Width = i6737[2]
  i6736.m_Height = i6737[3]
  return i6736
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i6740 = root || request.c( 'TMPro.TMP_Character' )
  var i6741 = data
  i6740.m_ElementType = i6741[0]
  i6740.m_Unicode = i6741[1]
  i6740.m_GlyphIndex = i6741[2]
  i6740.m_Scale = i6741[3]
  return i6740
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i6746 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i6747 = data
  var i6749 = i6747[0]
  var i6748 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i6749.length; i += 1) {
    i6748.add(request.d('TMPro.MultipleSubstitutionRecord', i6749[i + 0]));
  }
  i6746.m_MultipleSubstitutionRecords = i6748
  var i6751 = i6747[1]
  var i6750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i6751.length; i += 1) {
    i6750.add(request.d('TMPro.LigatureSubstitutionRecord', i6751[i + 0]));
  }
  i6746.m_LigatureSubstitutionRecords = i6750
  var i6753 = i6747[2]
  var i6752 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i6753.length; i += 1) {
    i6752.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i6753[i + 0]));
  }
  i6746.m_GlyphPairAdjustmentRecords = i6752
  var i6755 = i6747[3]
  var i6754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i6755.length; i += 1) {
    i6754.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i6755[i + 0]));
  }
  i6746.m_MarkToBaseAdjustmentRecords = i6754
  var i6757 = i6747[4]
  var i6756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i6757.length; i += 1) {
    i6756.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i6757[i + 0]));
  }
  i6746.m_MarkToMarkAdjustmentRecords = i6756
  return i6746
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i6760 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i6761 = data
  i6760.m_TargetGlyphID = i6761[0]
  i6760.m_SubstituteGlyphIDs = i6761[1]
  return i6760
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i6764 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i6765 = data
  i6764.m_ComponentGlyphIDs = i6765[0]
  i6764.m_LigatureGlyphID = i6765[1]
  return i6764
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i6768 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i6769 = data
  i6768.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i6769[0], i6768.m_FirstAdjustmentRecord)
  i6768.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i6769[1], i6768.m_SecondAdjustmentRecord)
  i6768.m_FeatureLookupFlags = i6769[2]
  return i6768
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i6772 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i6773 = data
  i6772.m_BaseGlyphID = i6773[0]
  i6772.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i6773[1], i6772.m_BaseGlyphAnchorPoint)
  i6772.m_MarkGlyphID = i6773[2]
  i6772.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i6773[3], i6772.m_MarkPositionAdjustment)
  return i6772
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i6776 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i6777 = data
  i6776.m_BaseMarkGlyphID = i6777[0]
  i6776.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i6777[1], i6776.m_BaseMarkGlyphAnchorPoint)
  i6776.m_CombiningMarkGlyphID = i6777[2]
  i6776.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i6777[3], i6776.m_CombiningMarkPositionAdjustment)
  return i6776
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i6782 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i6783 = data
  request.r(i6783[0], i6783[1], 0, i6782, 'regularTypeface')
  request.r(i6783[2], i6783[3], 0, i6782, 'italicTypeface')
  return i6782
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i6784 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i6785 = data
  i6784.Name = i6785[0]
  i6784.PointSize = i6785[1]
  i6784.Scale = i6785[2]
  i6784.CharacterCount = i6785[3]
  i6784.LineHeight = i6785[4]
  i6784.Baseline = i6785[5]
  i6784.Ascender = i6785[6]
  i6784.CapHeight = i6785[7]
  i6784.Descender = i6785[8]
  i6784.CenterLine = i6785[9]
  i6784.SuperscriptOffset = i6785[10]
  i6784.SubscriptOffset = i6785[11]
  i6784.SubSize = i6785[12]
  i6784.Underline = i6785[13]
  i6784.UnderlineThickness = i6785[14]
  i6784.strikethrough = i6785[15]
  i6784.strikethroughThickness = i6785[16]
  i6784.TabWidth = i6785[17]
  i6784.Padding = i6785[18]
  i6784.AtlasWidth = i6785[19]
  i6784.AtlasHeight = i6785[20]
  return i6784
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i6788 = root || request.c( 'TMPro.TMP_Glyph' )
  var i6789 = data
  i6788.id = i6789[0]
  i6788.x = i6789[1]
  i6788.y = i6789[2]
  i6788.width = i6789[3]
  i6788.height = i6789[4]
  i6788.xOffset = i6789[5]
  i6788.yOffset = i6789[6]
  i6788.xAdvance = i6789[7]
  i6788.scale = i6789[8]
  return i6788
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i6790 = root || request.c( 'TMPro.KerningTable' )
  var i6791 = data
  var i6793 = i6791[0]
  var i6792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i6793.length; i += 1) {
    i6792.add(request.d('TMPro.KerningPair', i6793[i + 0]));
  }
  i6790.kerningPairs = i6792
  return i6790
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i6796 = root || request.c( 'TMPro.KerningPair' )
  var i6797 = data
  i6796.xOffset = i6797[0]
  i6796.m_FirstGlyph = i6797[1]
  i6796.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6797[2], i6796.m_FirstGlyphAdjustments)
  i6796.m_SecondGlyph = i6797[3]
  i6796.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6797[4], i6796.m_SecondGlyphAdjustments)
  i6796.m_IgnoreSpacingAdjustments = !!i6797[5]
  return i6796
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i6798 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i6799 = data
  i6798.m_FaceIndex = i6799[0]
  i6798.m_FamilyName = i6799[1]
  i6798.m_StyleName = i6799[2]
  i6798.m_PointSize = i6799[3]
  i6798.m_Scale = i6799[4]
  i6798.m_UnitsPerEM = i6799[5]
  i6798.m_LineHeight = i6799[6]
  i6798.m_AscentLine = i6799[7]
  i6798.m_CapLine = i6799[8]
  i6798.m_MeanLine = i6799[9]
  i6798.m_Baseline = i6799[10]
  i6798.m_DescentLine = i6799[11]
  i6798.m_SuperscriptOffset = i6799[12]
  i6798.m_SuperscriptSize = i6799[13]
  i6798.m_SubscriptOffset = i6799[14]
  i6798.m_SubscriptSize = i6799[15]
  i6798.m_UnderlineOffset = i6799[16]
  i6798.m_UnderlineThickness = i6799[17]
  i6798.m_StrikethroughOffset = i6799[18]
  i6798.m_StrikethroughThickness = i6799[19]
  i6798.m_TabWidth = i6799[20]
  return i6798
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i6800 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i6801 = data
  var i6803 = i6801[0]
  var i6802 = []
  for(var i = 0; i < i6803.length; i += 2) {
  request.r(i6803[i + 0], i6803[i + 1], 2, i6802, '')
  }
  i6800.atlasAssets = i6802
  i6800.scale = i6801[1]
  request.r(i6801[2], i6801[3], 0, i6800, 'skeletonJSON')
  i6800.isUpgradingBlendModeMaterials = !!i6801[4]
  i6800.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i6801[5], i6800.blendModeMaterials)
  var i6805 = i6801[6]
  var i6804 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i6805.length; i += 2) {
  request.r(i6805[i + 0], i6805[i + 1], 1, i6804, '')
  }
  i6800.skeletonDataModifiers = i6804
  var i6807 = i6801[7]
  var i6806 = []
  for(var i = 0; i < i6807.length; i += 1) {
    i6806.push( i6807[i + 0] );
  }
  i6800.fromAnimation = i6806
  var i6809 = i6801[8]
  var i6808 = []
  for(var i = 0; i < i6809.length; i += 1) {
    i6808.push( i6809[i + 0] );
  }
  i6800.toAnimation = i6808
  i6800.duration = i6801[9]
  i6800.defaultMix = i6801[10]
  request.r(i6801[11], i6801[12], 0, i6800, 'controller')
  return i6800
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i6812 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i6813 = data
  i6812.applyAdditiveMaterial = !!i6813[0]
  var i6815 = i6813[1]
  var i6814 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6815.length; i += 1) {
    i6814.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6815[i + 0]));
  }
  i6812.additiveMaterials = i6814
  var i6817 = i6813[2]
  var i6816 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6817.length; i += 1) {
    i6816.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6817[i + 0]));
  }
  i6812.multiplyMaterials = i6816
  var i6819 = i6813[3]
  var i6818 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6819.length; i += 1) {
    i6818.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6819[i + 0]));
  }
  i6812.screenMaterials = i6818
  i6812.requiresBlendModeMaterials = !!i6813[4]
  return i6812
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i6822 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i6823 = data
  i6822.pageName = i6823[0]
  request.r(i6823[1], i6823[2], 0, i6822, 'material')
  return i6822
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i6826 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i6827 = data
  request.r(i6827[0], i6827[1], 0, i6826, 'atlasFile')
  var i6829 = i6827[2]
  var i6828 = []
  for(var i = 0; i < i6829.length; i += 2) {
  request.r(i6829[i + 0], i6829[i + 1], 2, i6828, '')
  }
  i6826.materials = i6828
  i6826.textureLoadingMode = i6827[3]
  request.r(i6827[4], i6827[5], 0, i6826, 'onDemandTextureLoader')
  return i6826
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i6830 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i6831 = data
  i6830.useSafeMode = !!i6831[0]
  i6830.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i6831[1], i6830.safeModeOptions)
  i6830.timeScale = i6831[2]
  i6830.unscaledTimeScale = i6831[3]
  i6830.useSmoothDeltaTime = !!i6831[4]
  i6830.maxSmoothUnscaledTime = i6831[5]
  i6830.rewindCallbackMode = i6831[6]
  i6830.showUnityEditorReport = !!i6831[7]
  i6830.logBehaviour = i6831[8]
  i6830.drawGizmos = !!i6831[9]
  i6830.defaultRecyclable = !!i6831[10]
  i6830.defaultAutoPlay = i6831[11]
  i6830.defaultUpdateType = i6831[12]
  i6830.defaultTimeScaleIndependent = !!i6831[13]
  i6830.defaultEaseType = i6831[14]
  i6830.defaultEaseOvershootOrAmplitude = i6831[15]
  i6830.defaultEasePeriod = i6831[16]
  i6830.defaultAutoKill = !!i6831[17]
  i6830.defaultLoopType = i6831[18]
  i6830.debugMode = !!i6831[19]
  i6830.debugStoreTargetId = !!i6831[20]
  i6830.showPreviewPanel = !!i6831[21]
  i6830.storeSettingsLocation = i6831[22]
  i6830.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i6831[23], i6830.modules)
  i6830.createASMDEF = !!i6831[24]
  i6830.showPlayingTweens = !!i6831[25]
  i6830.showPausedTweens = !!i6831[26]
  return i6830
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i6832 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i6833 = data
  i6832.logBehaviour = i6833[0]
  i6832.nestedTweenFailureBehaviour = i6833[1]
  return i6832
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i6834 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i6835 = data
  i6834.showPanel = !!i6835[0]
  i6834.audioEnabled = !!i6835[1]
  i6834.physicsEnabled = !!i6835[2]
  i6834.physics2DEnabled = !!i6835[3]
  i6834.spriteEnabled = !!i6835[4]
  i6834.uiEnabled = !!i6835[5]
  i6834.uiToolkitEnabled = !!i6835[6]
  i6834.textMeshProEnabled = !!i6835[7]
  i6834.tk2DEnabled = !!i6835[8]
  i6834.deAudioEnabled = !!i6835[9]
  i6834.deUnityExtendedEnabled = !!i6835[10]
  i6834.epoOutlineEnabled = !!i6835[11]
  return i6834
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i6836 = root || request.c( 'TMPro.TMP_Settings' )
  var i6837 = data
  i6836.assetVersion = i6837[0]
  i6836.m_TextWrappingMode = i6837[1]
  i6836.m_enableKerning = !!i6837[2]
  var i6839 = i6837[3]
  var i6838 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i6839.length; i += 1) {
    i6838.add(i6839[i + 0]);
  }
  i6836.m_ActiveFontFeatures = i6838
  i6836.m_enableExtraPadding = !!i6837[4]
  i6836.m_enableTintAllSprites = !!i6837[5]
  i6836.m_enableParseEscapeCharacters = !!i6837[6]
  i6836.m_EnableRaycastTarget = !!i6837[7]
  i6836.m_GetFontFeaturesAtRuntime = !!i6837[8]
  i6836.m_missingGlyphCharacter = i6837[9]
  i6836.m_ClearDynamicDataOnBuild = !!i6837[10]
  i6836.m_warningsDisabled = !!i6837[11]
  request.r(i6837[12], i6837[13], 0, i6836, 'm_defaultFontAsset')
  i6836.m_defaultFontAssetPath = i6837[14]
  i6836.m_defaultFontSize = i6837[15]
  i6836.m_defaultAutoSizeMinRatio = i6837[16]
  i6836.m_defaultAutoSizeMaxRatio = i6837[17]
  i6836.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i6837[18], i6837[19] )
  i6836.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i6837[20], i6837[21] )
  i6836.m_autoSizeTextContainer = !!i6837[22]
  i6836.m_IsTextObjectScaleStatic = !!i6837[23]
  var i6841 = i6837[24]
  var i6840 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6841.length; i += 2) {
  request.r(i6841[i + 0], i6841[i + 1], 1, i6840, '')
  }
  i6836.m_fallbackFontAssets = i6840
  i6836.m_matchMaterialPreset = !!i6837[25]
  i6836.m_HideSubTextObjects = !!i6837[26]
  request.r(i6837[27], i6837[28], 0, i6836, 'm_defaultSpriteAsset')
  i6836.m_defaultSpriteAssetPath = i6837[29]
  i6836.m_enableEmojiSupport = !!i6837[30]
  i6836.m_MissingCharacterSpriteUnicode = i6837[31]
  var i6843 = i6837[32]
  var i6842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i6843.length; i += 2) {
  request.r(i6843[i + 0], i6843[i + 1], 1, i6842, '')
  }
  i6836.m_EmojiFallbackTextAssets = i6842
  i6836.m_defaultColorGradientPresetsPath = i6837[33]
  request.r(i6837[34], i6837[35], 0, i6836, 'm_defaultStyleSheet')
  i6836.m_StyleSheetsResourcePath = i6837[36]
  request.r(i6837[37], i6837[38], 0, i6836, 'm_leadingCharacters')
  request.r(i6837[39], i6837[40], 0, i6836, 'm_followingCharacters')
  i6836.m_UseModernHangulLineBreakingRules = !!i6837[41]
  return i6836
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i6846 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i6847 = data
  i6846.m_GlyphIndex = i6847[0]
  i6846.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i6847[1], i6846.m_GlyphValueRecord)
  return i6846
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i6848 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i6849 = data
  i6848.m_XPlacement = i6849[0]
  i6848.m_YPlacement = i6849[1]
  i6848.m_XAdvance = i6849[2]
  i6848.m_YAdvance = i6849[3]
  return i6848
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i6850 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i6851 = data
  request.r(i6851[0], i6851[1], 0, i6850, 'spriteSheet')
  var i6853 = i6851[2]
  var i6852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i6853.length; i += 1) {
    i6852.add(request.d('TMPro.TMP_Sprite', i6853[i + 0]));
  }
  i6850.spriteInfoList = i6852
  var i6855 = i6851[3]
  var i6854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i6855.length; i += 2) {
  request.r(i6855[i + 0], i6855[i + 1], 1, i6854, '')
  }
  i6850.fallbackSpriteAssets = i6854
  var i6857 = i6851[4]
  var i6856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i6857.length; i += 1) {
    i6856.add(request.d('TMPro.TMP_SpriteCharacter', i6857[i + 0]));
  }
  i6850.m_SpriteCharacterTable = i6856
  var i6859 = i6851[5]
  var i6858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i6859.length; i += 1) {
    i6858.add(request.d('TMPro.TMP_SpriteGlyph', i6859[i + 0]));
  }
  i6850.m_GlyphTable = i6858
  i6850.m_Version = i6851[6]
  i6850.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6851[7], i6850.m_FaceInfo)
  request.r(i6851[8], i6851[9], 0, i6850, 'm_Material')
  return i6850
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i6862 = root || request.c( 'TMPro.TMP_Sprite' )
  var i6863 = data
  i6862.name = i6863[0]
  i6862.hashCode = i6863[1]
  i6862.unicode = i6863[2]
  i6862.pivot = new pc.Vec2( i6863[3], i6863[4] )
  request.r(i6863[5], i6863[6], 0, i6862, 'sprite')
  i6862.id = i6863[7]
  i6862.x = i6863[8]
  i6862.y = i6863[9]
  i6862.width = i6863[10]
  i6862.height = i6863[11]
  i6862.xOffset = i6863[12]
  i6862.yOffset = i6863[13]
  i6862.xAdvance = i6863[14]
  i6862.scale = i6863[15]
  return i6862
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i6868 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i6869 = data
  i6868.m_Name = i6869[0]
  i6868.m_ElementType = i6869[1]
  i6868.m_Unicode = i6869[2]
  i6868.m_GlyphIndex = i6869[3]
  i6868.m_Scale = i6869[4]
  return i6868
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i6872 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i6873 = data
  request.r(i6873[0], i6873[1], 0, i6872, 'sprite')
  i6872.m_Index = i6873[2]
  i6872.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6873[3], i6872.m_Metrics)
  i6872.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6873[4], i6872.m_GlyphRect)
  i6872.m_Scale = i6873[5]
  i6872.m_AtlasIndex = i6873[6]
  i6872.m_ClassDefinitionType = i6873[7]
  return i6872
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i6874 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i6875 = data
  var i6877 = i6875[0]
  var i6876 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i6877.length; i += 1) {
    i6876.add(request.d('TMPro.TMP_Style', i6877[i + 0]));
  }
  i6874.m_StyleList = i6876
  return i6874
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i6880 = root || request.c( 'TMPro.TMP_Style' )
  var i6881 = data
  i6880.m_Name = i6881[0]
  i6880.m_HashCode = i6881[1]
  i6880.m_OpeningDefinition = i6881[2]
  i6880.m_ClosingDefinition = i6881[3]
  i6880.m_OpeningTagArray = i6881[4]
  i6880.m_ClosingTagArray = i6881[5]
  return i6880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6883 = data
  var i6885 = i6883[0]
  var i6884 = []
  for(var i = 0; i < i6885.length; i += 1) {
    i6884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6885[i + 0]) );
  }
  i6882.files = i6884
  i6882.componentToPrefabIds = i6883[1]
  return i6882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6889 = data
  i6888.path = i6889[0]
  request.r(i6889[1], i6889[2], 0, i6888, 'unityObject')
  return i6888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6891 = data
  var i6893 = i6891[0]
  var i6892 = []
  for(var i = 0; i < i6893.length; i += 1) {
    i6892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6893[i + 0]) );
  }
  i6890.scriptsExecutionOrder = i6892
  var i6895 = i6891[1]
  var i6894 = []
  for(var i = 0; i < i6895.length; i += 1) {
    i6894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6895[i + 0]) );
  }
  i6890.sortingLayers = i6894
  var i6897 = i6891[2]
  var i6896 = []
  for(var i = 0; i < i6897.length; i += 1) {
    i6896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6897[i + 0]) );
  }
  i6890.cullingLayers = i6896
  i6890.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6891[3], i6890.timeSettings)
  i6890.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6891[4], i6890.physicsSettings)
  i6890.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6891[5], i6890.physics2DSettings)
  i6890.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6891[6], i6890.qualitySettings)
  i6890.enableRealtimeShadows = !!i6891[7]
  i6890.enableAutoInstancing = !!i6891[8]
  i6890.enableStaticBatching = !!i6891[9]
  i6890.enableDynamicBatching = !!i6891[10]
  i6890.usePreservativeDynamicBatching = !!i6891[11]
  i6890.lightmapEncodingQuality = i6891[12]
  i6890.desiredColorSpace = i6891[13]
  var i6899 = i6891[14]
  var i6898 = []
  for(var i = 0; i < i6899.length; i += 1) {
    i6898.push( i6899[i + 0] );
  }
  i6890.allTags = i6898
  return i6890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6903 = data
  i6902.name = i6903[0]
  i6902.value = i6903[1]
  return i6902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6907 = data
  i6906.id = i6907[0]
  i6906.name = i6907[1]
  i6906.value = i6907[2]
  return i6906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6911 = data
  i6910.id = i6911[0]
  i6910.name = i6911[1]
  return i6910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6913 = data
  i6912.fixedDeltaTime = i6913[0]
  i6912.maximumDeltaTime = i6913[1]
  i6912.timeScale = i6913[2]
  i6912.maximumParticleTimestep = i6913[3]
  return i6912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6915 = data
  i6914.gravity = new pc.Vec3( i6915[0], i6915[1], i6915[2] )
  i6914.defaultSolverIterations = i6915[3]
  i6914.bounceThreshold = i6915[4]
  i6914.autoSyncTransforms = !!i6915[5]
  i6914.autoSimulation = !!i6915[6]
  var i6917 = i6915[7]
  var i6916 = []
  for(var i = 0; i < i6917.length; i += 1) {
    i6916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6917[i + 0]) );
  }
  i6914.collisionMatrix = i6916
  return i6914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6921 = data
  i6920.enabled = !!i6921[0]
  i6920.layerId = i6921[1]
  i6920.otherLayerId = i6921[2]
  return i6920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6923 = data
  request.r(i6923[0], i6923[1], 0, i6922, 'material')
  i6922.gravity = new pc.Vec2( i6923[2], i6923[3] )
  i6922.positionIterations = i6923[4]
  i6922.velocityIterations = i6923[5]
  i6922.velocityThreshold = i6923[6]
  i6922.maxLinearCorrection = i6923[7]
  i6922.maxAngularCorrection = i6923[8]
  i6922.maxTranslationSpeed = i6923[9]
  i6922.maxRotationSpeed = i6923[10]
  i6922.baumgarteScale = i6923[11]
  i6922.baumgarteTOIScale = i6923[12]
  i6922.timeToSleep = i6923[13]
  i6922.linearSleepTolerance = i6923[14]
  i6922.angularSleepTolerance = i6923[15]
  i6922.defaultContactOffset = i6923[16]
  i6922.autoSimulation = !!i6923[17]
  i6922.queriesHitTriggers = !!i6923[18]
  i6922.queriesStartInColliders = !!i6923[19]
  i6922.callbacksOnDisable = !!i6923[20]
  i6922.reuseCollisionCallbacks = !!i6923[21]
  i6922.autoSyncTransforms = !!i6923[22]
  var i6925 = i6923[23]
  var i6924 = []
  for(var i = 0; i < i6925.length; i += 1) {
    i6924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6925[i + 0]) );
  }
  i6922.collisionMatrix = i6924
  return i6922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6929 = data
  i6928.enabled = !!i6929[0]
  i6928.layerId = i6929[1]
  i6928.otherLayerId = i6929[2]
  return i6928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6931 = data
  var i6933 = i6931[0]
  var i6932 = []
  for(var i = 0; i < i6933.length; i += 1) {
    i6932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6933[i + 0]) );
  }
  i6930.qualityLevels = i6932
  var i6935 = i6931[1]
  var i6934 = []
  for(var i = 0; i < i6935.length; i += 1) {
    i6934.push( i6935[i + 0] );
  }
  i6930.names = i6934
  i6930.shadows = i6931[2]
  i6930.anisotropicFiltering = i6931[3]
  i6930.antiAliasing = i6931[4]
  i6930.lodBias = i6931[5]
  i6930.shadowCascades = i6931[6]
  i6930.shadowDistance = i6931[7]
  i6930.shadowmaskMode = i6931[8]
  i6930.shadowProjection = i6931[9]
  i6930.shadowResolution = i6931[10]
  i6930.softParticles = !!i6931[11]
  i6930.softVegetation = !!i6931[12]
  i6930.activeColorSpace = i6931[13]
  i6930.desiredColorSpace = i6931[14]
  i6930.masterTextureLimit = i6931[15]
  i6930.maxQueuedFrames = i6931[16]
  i6930.particleRaycastBudget = i6931[17]
  i6930.pixelLightCount = i6931[18]
  i6930.realtimeReflectionProbes = !!i6931[19]
  i6930.shadowCascade2Split = i6931[20]
  i6930.shadowCascade4Split = new pc.Vec3( i6931[21], i6931[22], i6931[23] )
  i6930.streamingMipmapsActive = !!i6931[24]
  i6930.vSyncCount = i6931[25]
  i6930.asyncUploadBufferSize = i6931[26]
  i6930.asyncUploadTimeSlice = i6931[27]
  i6930.billboardsFaceCameraPosition = !!i6931[28]
  i6930.shadowNearPlaneOffset = i6931[29]
  i6930.streamingMipmapsMemoryBudget = i6931[30]
  i6930.maximumLODLevel = i6931[31]
  i6930.streamingMipmapsAddAllCameras = !!i6931[32]
  i6930.streamingMipmapsMaxLevelReduction = i6931[33]
  i6930.streamingMipmapsRenderersPerFrame = i6931[34]
  i6930.resolutionScalingFixedDPIFactor = i6931[35]
  i6930.streamingMipmapsMaxFileIORequests = i6931[36]
  i6930.currentQualityLevel = i6931[37]
  return i6930
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i6938 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i6939 = data
  i6938.m_XCoordinate = i6939[0]
  i6938.m_YCoordinate = i6939[1]
  return i6938
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i6940 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i6941 = data
  i6940.m_XPositionAdjustment = i6941[0]
  i6940.m_YPositionAdjustment = i6941[1]
  return i6940
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i6942 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i6943 = data
  i6942.xPlacement = i6943[0]
  i6942.yPlacement = i6943[1]
  i6942.xAdvance = i6943[2]
  i6942.yAdvance = i6943[3]
  return i6942
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

Deserializers.creativeName = "TPAP_V26_NgocNDL_HuyNQ";

Deserializers.lunaAppID = "33901";

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

Deserializers.buildID = "3d7ff74a-9d1b-4a40-876a-cde1aea90bef";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

