var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointSpring' )
  var i497 = data
  i496.spring = i497[0]
  i496.damper = i497[1]
  i496.targetPosition = i497[2]
  return i496
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointMotor' )
  var i499 = data
  i498.m_TargetVelocity = i499[0]
  i498.m_Force = i499[1]
  i498.m_FreeSpin = i499[2]
  return i498
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointLimits' )
  var i501 = data
  i500.m_Min = i501[0]
  i500.m_Max = i501[1]
  i500.m_Bounciness = i501[2]
  i500.m_BounceMinVelocity = i501[3]
  i500.m_ContactDistance = i501[4]
  i500.minBounce = i501[5]
  i500.maxBounce = i501[6]
  return i500
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointDrive' )
  var i503 = data
  i502.m_PositionSpring = i503[0]
  i502.m_PositionDamper = i503[1]
  i502.m_MaximumForce = i503[2]
  i502.m_UseAcceleration = i503[3]
  return i502
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i505 = data
  i504.m_Spring = i505[0]
  i504.m_Damper = i505[1]
  return i504
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i507 = data
  i506.m_Limit = i507[0]
  i506.m_Bounciness = i507[1]
  i506.m_ContactDistance = i507[2]
  return i506
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i509 = data
  i508.m_ExtremumSlip = i509[0]
  i508.m_ExtremumValue = i509[1]
  i508.m_AsymptoteSlip = i509[2]
  i508.m_AsymptoteValue = i509[3]
  i508.m_Stiffness = i509[4]
  return i508
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i511 = data
  i510.m_LowerAngle = i511[0]
  i510.m_UpperAngle = i511[1]
  return i510
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i513 = data
  i512.m_MotorSpeed = i513[0]
  i512.m_MaximumMotorTorque = i513[1]
  return i512
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i515 = data
  i514.m_DampingRatio = i515[0]
  i514.m_Frequency = i515[1]
  i514.m_Angle = i515[2]
  return i514
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i517 = data
  i516.m_LowerTranslation = i517[0]
  i516.m_UpperTranslation = i517[1]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i519 = data
  i518.name = i519[0]
  i518.width = i519[1]
  i518.height = i519[2]
  i518.mipmapCount = i519[3]
  i518.anisoLevel = i519[4]
  i518.filterMode = i519[5]
  i518.hdr = !!i519[6]
  i518.format = i519[7]
  i518.wrapMode = i519[8]
  i518.alphaIsTransparency = !!i519[9]
  i518.alphaSource = i519[10]
  i518.graphicsFormat = i519[11]
  i518.sRGBTexture = !!i519[12]
  i518.desiredColorSpace = i519[13]
  i518.wrapU = i519[14]
  i518.wrapV = i519[15]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i520 = root || new pc.UnityMaterial()
  var i521 = data
  i520.name = i521[0]
  request.r(i521[1], i521[2], 0, i520, 'shader')
  i520.renderQueue = i521[3]
  i520.enableInstancing = !!i521[4]
  var i523 = i521[5]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i523[i + 0]) );
  }
  i520.floatParameters = i522
  var i525 = i521[6]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i525[i + 0]) );
  }
  i520.colorParameters = i524
  var i527 = i521[7]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i527[i + 0]) );
  }
  i520.vectorParameters = i526
  var i529 = i521[8]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i529[i + 0]) );
  }
  i520.textureParameters = i528
  var i531 = i521[9]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i531[i + 0]) );
  }
  i520.materialFlags = i530
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i535 = data
  i534.name = i535[0]
  i534.value = i535[1]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i539 = data
  i538.name = i539[0]
  i538.value = new pc.Color(i539[1], i539[2], i539[3], i539[4])
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i543 = data
  i542.name = i543[0]
  i542.value = new pc.Vec4( i543[1], i543[2], i543[3], i543[4] )
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i547 = data
  i546.name = i547[0]
  request.r(i547[1], i547[2], 0, i546, 'value')
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i551 = data
  i550.name = i551[0]
  i550.enabled = !!i551[1]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i553 = data
  i552.name = i553[0]
  i552.index = i553[1]
  i552.startup = !!i553[2]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i555 = data
  i554.aspect = i555[0]
  i554.orthographic = !!i555[1]
  i554.orthographicSize = i555[2]
  i554.backgroundColor = new pc.Color(i555[3], i555[4], i555[5], i555[6])
  i554.nearClipPlane = i555[7]
  i554.farClipPlane = i555[8]
  i554.fieldOfView = i555[9]
  i554.depth = i555[10]
  i554.clearFlags = i555[11]
  i554.cullingMask = i555[12]
  i554.rect = i555[13]
  request.r(i555[14], i555[15], 0, i554, 'targetTexture')
  i554.usePhysicalProperties = !!i555[16]
  i554.focalLength = i555[17]
  i554.sensorSize = new pc.Vec2( i555[18], i555[19] )
  i554.lensShift = new pc.Vec2( i555[20], i555[21] )
  i554.gateFit = i555[22]
  i554.commandBufferCount = i555[23]
  i554.cameraType = i555[24]
  i554.enabled = !!i555[25]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i557 = data
  i556.name = i557[0]
  i556.tagId = i557[1]
  i556.enabled = !!i557[2]
  i556.isStatic = !!i557[3]
  i556.layer = i557[4]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i559 = data
  i558.pivot = new pc.Vec2( i559[0], i559[1] )
  i558.anchorMin = new pc.Vec2( i559[2], i559[3] )
  i558.anchorMax = new pc.Vec2( i559[4], i559[5] )
  i558.sizeDelta = new pc.Vec2( i559[6], i559[7] )
  i558.anchoredPosition3D = new pc.Vec3( i559[8], i559[9], i559[10] )
  i558.rotation = new pc.Quat(i559[11], i559[12], i559[13], i559[14])
  i558.scale = new pc.Vec3( i559[15], i559[16], i559[17] )
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i561 = data
  i560.planeDistance = i561[0]
  i560.referencePixelsPerUnit = i561[1]
  i560.isFallbackOverlay = !!i561[2]
  i560.renderMode = i561[3]
  i560.renderOrder = i561[4]
  i560.sortingLayerName = i561[5]
  i560.sortingOrder = i561[6]
  i560.scaleFactor = i561[7]
  request.r(i561[8], i561[9], 0, i560, 'worldCamera')
  i560.overrideSorting = !!i561[10]
  i560.pixelPerfect = !!i561[11]
  i560.targetDisplay = i561[12]
  i560.overridePixelPerfect = !!i561[13]
  i560.enabled = !!i561[14]
  return i560
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i563 = data
  i562.m_UiScaleMode = i563[0]
  i562.m_ReferencePixelsPerUnit = i563[1]
  i562.m_ScaleFactor = i563[2]
  i562.m_ReferenceResolution = new pc.Vec2( i563[3], i563[4] )
  i562.m_ScreenMatchMode = i563[5]
  i562.m_MatchWidthOrHeight = i563[6]
  i562.m_PhysicalUnit = i563[7]
  i562.m_FallbackScreenDPI = i563[8]
  i562.m_DefaultSpriteDPI = i563[9]
  i562.m_DynamicPixelsPerUnit = i563[10]
  i562.m_PresetInfoIsWorld = !!i563[11]
  return i562
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i565 = data
  i564.m_IgnoreReversedGraphics = !!i565[0]
  i564.m_BlockingObjects = i565[1]
  i564.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i565[2] )
  return i564
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i566 = root || request.c( 'Playable.GameManager' )
  var i567 = data
  i566.EventCountdownEndGame = request.d('System.Action', i567[0], i566.EventCountdownEndGame)
  i566._totalEvent = i567[1]
  i566._endTime = i567[2]
  request.r(i567[3], i567[4], 0, i566, '_backgroundMusic')
  request.r(i567[5], i567[6], 0, i566, '_backgroundTexture')
  request.r(i567[7], i567[8], 0, i566, '_btnBlock')
  request.r(i567[9], i567[10], 0, i566, '_background')
  request.r(i567[11], i567[12], 0, i566, '_progressFillImage')
  request.r(i567[13], i567[14], 0, i566, '_progressText')
  i566._progressTweenDuration = i567[15]
  request.r(i567[16], i567[17], 0, i566, '_timerFillImage')
  request.r(i567[18], i567[19], 0, i566, '_timerText')
  i566._timerPunchScale = i567[20]
  return i566
}

Deserializers["System.Action"] = function (request, data, root) {
  var i568 = root || request.c( 'System.Action' )
  var i569 = data
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i571 = data
  i570.cullTransparentMesh = !!i571[0]
  return i570
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.UI.Image' )
  var i573 = data
  request.r(i573[0], i573[1], 0, i572, 'm_Sprite')
  i572.m_Type = i573[2]
  i572.m_PreserveAspect = !!i573[3]
  i572.m_FillCenter = !!i573[4]
  i572.m_FillMethod = i573[5]
  i572.m_FillAmount = i573[6]
  i572.m_FillClockwise = !!i573[7]
  i572.m_FillOrigin = i573[8]
  i572.m_UseSpriteMesh = !!i573[9]
  i572.m_PixelsPerUnitMultiplier = i573[10]
  request.r(i573[11], i573[12], 0, i572, 'm_Material')
  i572.m_Maskable = !!i573[13]
  i572.m_Color = new pc.Color(i573[14], i573[15], i573[16], i573[17])
  i572.m_RaycastTarget = !!i573[18]
  i572.m_RaycastPadding = new pc.Vec4( i573[19], i573[20], i573[21], i573[22] )
  return i572
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i575 = data
  request.r(i575[0], i575[1], 0, i574, 'm_Texture')
  i574.m_UVRect = UnityEngine.Rect.MinMaxRect(i575[2], i575[3], i575[4], i575[5])
  request.r(i575[6], i575[7], 0, i574, 'm_Material')
  i574.m_Maskable = !!i575[8]
  i574.m_Color = new pc.Color(i575[9], i575[10], i575[11], i575[12])
  i574.m_RaycastTarget = !!i575[13]
  i574.m_RaycastPadding = new pc.Vec4( i575[14], i575[15], i575[16], i575[17] )
  return i574
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i576 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i577 = data
  i576.m_hasFontAssetChanged = !!i577[0]
  request.r(i577[1], i577[2], 0, i576, 'm_baseMaterial')
  i576.m_maskOffset = new pc.Vec4( i577[3], i577[4], i577[5], i577[6] )
  i576.m_text = i577[7]
  i576.m_isRightToLeft = !!i577[8]
  request.r(i577[9], i577[10], 0, i576, 'm_fontAsset')
  request.r(i577[11], i577[12], 0, i576, 'm_sharedMaterial')
  var i579 = i577[13]
  var i578 = []
  for(var i = 0; i < i579.length; i += 2) {
  request.r(i579[i + 0], i579[i + 1], 2, i578, '')
  }
  i576.m_fontSharedMaterials = i578
  request.r(i577[14], i577[15], 0, i576, 'm_fontMaterial')
  var i581 = i577[16]
  var i580 = []
  for(var i = 0; i < i581.length; i += 2) {
  request.r(i581[i + 0], i581[i + 1], 2, i580, '')
  }
  i576.m_fontMaterials = i580
  i576.m_fontColor32 = UnityEngine.Color32.ConstructColor(i577[17], i577[18], i577[19], i577[20])
  i576.m_fontColor = new pc.Color(i577[21], i577[22], i577[23], i577[24])
  i576.m_enableVertexGradient = !!i577[25]
  i576.m_colorMode = i577[26]
  i576.m_fontColorGradient = request.d('TMPro.VertexGradient', i577[27], i576.m_fontColorGradient)
  request.r(i577[28], i577[29], 0, i576, 'm_fontColorGradientPreset')
  request.r(i577[30], i577[31], 0, i576, 'm_spriteAsset')
  i576.m_tintAllSprites = !!i577[32]
  request.r(i577[33], i577[34], 0, i576, 'm_StyleSheet')
  i576.m_TextStyleHashCode = i577[35]
  i576.m_overrideHtmlColors = !!i577[36]
  i576.m_faceColor = UnityEngine.Color32.ConstructColor(i577[37], i577[38], i577[39], i577[40])
  i576.m_fontSize = i577[41]
  i576.m_fontSizeBase = i577[42]
  i576.m_fontWeight = i577[43]
  i576.m_enableAutoSizing = !!i577[44]
  i576.m_fontSizeMin = i577[45]
  i576.m_fontSizeMax = i577[46]
  i576.m_fontStyle = i577[47]
  i576.m_HorizontalAlignment = i577[48]
  i576.m_VerticalAlignment = i577[49]
  i576.m_textAlignment = i577[50]
  i576.m_characterSpacing = i577[51]
  i576.m_wordSpacing = i577[52]
  i576.m_lineSpacing = i577[53]
  i576.m_lineSpacingMax = i577[54]
  i576.m_paragraphSpacing = i577[55]
  i576.m_charWidthMaxAdj = i577[56]
  i576.m_TextWrappingMode = i577[57]
  i576.m_wordWrappingRatios = i577[58]
  i576.m_overflowMode = i577[59]
  request.r(i577[60], i577[61], 0, i576, 'm_linkedTextComponent')
  request.r(i577[62], i577[63], 0, i576, 'parentLinkedComponent')
  i576.m_enableKerning = !!i577[64]
  var i583 = i577[65]
  var i582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i583.length; i += 1) {
    i582.add(i583[i + 0]);
  }
  i576.m_ActiveFontFeatures = i582
  i576.m_enableExtraPadding = !!i577[66]
  i576.checkPaddingRequired = !!i577[67]
  i576.m_isRichText = !!i577[68]
  i576.m_parseCtrlCharacters = !!i577[69]
  i576.m_isOrthographic = !!i577[70]
  i576.m_isCullingEnabled = !!i577[71]
  i576.m_horizontalMapping = i577[72]
  i576.m_verticalMapping = i577[73]
  i576.m_uvLineOffset = i577[74]
  i576.m_geometrySortingOrder = i577[75]
  i576.m_IsTextObjectScaleStatic = !!i577[76]
  i576.m_VertexBufferAutoSizeReduction = !!i577[77]
  i576.m_useMaxVisibleDescender = !!i577[78]
  i576.m_pageToDisplay = i577[79]
  i576.m_margin = new pc.Vec4( i577[80], i577[81], i577[82], i577[83] )
  i576.m_isUsingLegacyAnimationComponent = !!i577[84]
  i576.m_isVolumetricText = !!i577[85]
  request.r(i577[86], i577[87], 0, i576, 'm_Material')
  i576.m_EmojiFallbackSupport = !!i577[88]
  i576.m_Maskable = !!i577[89]
  i576.m_Color = new pc.Color(i577[90], i577[91], i577[92], i577[93])
  i576.m_RaycastTarget = !!i577[94]
  i576.m_RaycastPadding = new pc.Vec4( i577[95], i577[96], i577[97], i577[98] )
  return i576
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i586 = root || request.c( 'TMPro.VertexGradient' )
  var i587 = data
  i586.topLeft = new pc.Color(i587[0], i587[1], i587[2], i587[3])
  i586.topRight = new pc.Color(i587[4], i587[5], i587[6], i587[7])
  i586.bottomLeft = new pc.Color(i587[8], i587[9], i587[10], i587[11])
  i586.bottomRight = new pc.Color(i587[12], i587[13], i587[14], i587[15])
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

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'm_ObjectArgument')
  i602.m_ObjectArgumentAssemblyTypeName = i603[2]
  i602.m_IntArgument = i603[3]
  i602.m_FloatArgument = i603[4]
  i602.m_StringArgument = i603[5]
  i602.m_BoolArgument = !!i603[6]
  return i602
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i605 = data
  i604.m_Mode = i605[0]
  i604.m_WrapAround = !!i605[1]
  request.r(i605[2], i605[3], 0, i604, 'm_SelectOnUp')
  request.r(i605[4], i605[5], 0, i604, 'm_SelectOnDown')
  request.r(i605[6], i605[7], 0, i604, 'm_SelectOnLeft')
  request.r(i605[8], i605[9], 0, i604, 'm_SelectOnRight')
  return i604
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i607 = data
  i606.m_NormalColor = new pc.Color(i607[0], i607[1], i607[2], i607[3])
  i606.m_HighlightedColor = new pc.Color(i607[4], i607[5], i607[6], i607[7])
  i606.m_PressedColor = new pc.Color(i607[8], i607[9], i607[10], i607[11])
  i606.m_SelectedColor = new pc.Color(i607[12], i607[13], i607[14], i607[15])
  i606.m_DisabledColor = new pc.Color(i607[16], i607[17], i607[18], i607[19])
  i606.m_ColorMultiplier = i607[20]
  i606.m_FadeDuration = i607[21]
  return i606
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'm_HighlightedSprite')
  request.r(i609[2], i609[3], 0, i608, 'm_PressedSprite')
  request.r(i609[4], i609[5], 0, i608, 'm_SelectedSprite')
  request.r(i609[6], i609[7], 0, i608, 'm_DisabledSprite')
  return i608
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i611 = data
  i610.m_NormalTrigger = i611[0]
  i610.m_HighlightedTrigger = i611[1]
  i610.m_PressedTrigger = i611[2]
  i610.m_SelectedTrigger = i611[3]
  i610.m_DisabledTrigger = i611[4]
  return i610
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.Mask' )
  var i613 = data
  i612.m_ShowMaskGraphic = !!i613[0]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'clip')
  request.r(i615[2], i615[3], 0, i614, 'outputAudioMixerGroup')
  i614.playOnAwake = !!i615[4]
  i614.loop = !!i615[5]
  i614.time = i615[6]
  i614.volume = i615[7]
  i614.pitch = i615[8]
  i614.enabled = !!i615[9]
  return i614
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i617 = data
  i616.m_Padding = new pc.Vec4( i617[0], i617[1], i617[2], i617[3] )
  i616.m_Softness = new pc.Vec2( i617[4], i617[5] )
  return i616
}

Deserializers["GameController"] = function (request, data, root) {
  var i618 = root || request.c( 'GameController' )
  var i619 = data
  var i621 = i619[0]
  var i620 = new (System.Collections.Generic.List$1(Bridge.ns('ClockItem')))
  for(var i = 0; i < i621.length; i += 2) {
  request.r(i621[i + 0], i621[i + 1], 1, i620, '')
  }
  i618._clockItems = i620
  var i623 = i619[1]
  var i622 = new (System.Collections.Generic.List$1(Bridge.ns('ClockDropTarget')))
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 1, i622, '')
  }
  i618._dropTargets = i622
  request.r(i619[2], i619[3], 0, i618, '_tutorialHand')
  request.r(i619[4], i619[5], 0, i618, '_tutorialFrom')
  request.r(i619[6], i619[7], 0, i618, '_tutorialTo')
  i618._tutorialMoveDuration = i619[8]
  i618._tutorialStartDelay = i619[9]
  i618._hideTutorialOnFirstSuccess = !!i619[10]
  return i618
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i628 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'skeletonDataAsset')
  request.r(i629[2], i629[3], 0, i628, 'additiveMaterial')
  request.r(i629[4], i629[5], 0, i628, 'multiplyMaterial')
  request.r(i629[6], i629[7], 0, i628, 'screenMaterial')
  i628.forceAdditiveMaterial = !!i629[8]
  i628.initialSkinName = i629[9]
  i628.initialFlipX = !!i629[10]
  i628.initialFlipY = !!i629[11]
  i628.startingAnimation = i629[12]
  i628.startingLoop = !!i629[13]
  i628.timeScale = i629[14]
  i628.freeze = !!i629[15]
  i628.layoutScaleMode = i629[16]
  i628.updateWhenInvisible = i629[17]
  i628.allowMultipleCanvasRenderers = !!i629[18]
  var i631 = i629[19]
  var i630 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 1, i630, '')
  }
  i628.canvasRenderers = i630
  i628.enableSeparatorSlots = !!i629[20]
  i628.updateSeparatorPartLocation = !!i629[21]
  i628.updateSeparatorPartScale = !!i629[22]
  i628.disableMeshAssignmentOnOverride = !!i629[23]
  i628.m_SkeletonColor = new pc.Color(i629[24], i629[25], i629[26], i629[27])
  i628.referenceSize = new pc.Vec2( i629[28], i629[29] )
  i628.pivotOffset = new pc.Vec2( i629[30], i629[31] )
  i628.referenceScale = i629[32]
  i628.layoutScale = i629[33]
  i628.rectTransformSize = new pc.Vec2( i629[34], i629[35] )
  i628.editReferenceRect = !!i629[36]
  var i633 = i629[37]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( i633[i + 0] );
  }
  i628.separatorSlotNames = i632
  var i635 = i629[38]
  var i634 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 1, i634, '')
  }
  i628.separatorParts = i634
  i628.physicsPositionInheritanceFactor = new pc.Vec2( i629[39], i629[40] )
  i628.physicsRotationInheritanceFactor = i629[41]
  request.r(i629[42], i629[43], 0, i628, 'physicsMovementRelativeTo')
  i628.meshGenerator = request.d('Spine.Unity.MeshGenerator', i629[44], i628.meshGenerator)
  i628.updateTiming = i629[45]
  i628.unscaledTime = !!i629[46]
  request.r(i629[47], i629[48], 0, i628, 'm_Material')
  i628.m_Maskable = !!i629[49]
  i628.m_Color = new pc.Color(i629[50], i629[51], i629[52], i629[53])
  i628.m_RaycastTarget = !!i629[54]
  i628.m_RaycastPadding = new pc.Vec4( i629[55], i629[56], i629[57], i629[58] )
  return i628
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i642 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i643 = data
  i642.settings = request.d('Spine.Unity.MeshGenerator+Settings', i643[0], i642.settings)
  return i642
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i644 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i645 = data
  i644.useClipping = !!i645[0]
  i644.zSpacing = i645[1]
  i644.tintBlack = !!i645[2]
  i644.canvasGroupCompatible = !!i645[3]
  i644.pmaVertexColors = !!i645[4]
  i644.addNormals = !!i645[5]
  i644.calculateTangents = !!i645[6]
  i644.immutableTriangles = !!i645[7]
  return i644
}

Deserializers["ClockDropTarget"] = function (request, data, root) {
  var i646 = root || request.c( 'ClockDropTarget' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, '_skeletonAnimation')
  i646._animationName = i647[2]
  i646._loopAnimation = !!i647[3]
  request.r(i647[4], i647[5], 0, i646, '_audioClip')
  i646._acceptOnlyOnce = !!i647[6]
  request.r(i647[7], i647[8], 0, i646, '_door')
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i649 = data
  i648.m_Alpha = i649[0]
  i648.m_Interactable = !!i649[1]
  i648.m_BlocksRaycasts = !!i649[2]
  i648.m_IgnoreParentGroups = !!i649[3]
  i648.enabled = !!i649[4]
  return i648
}

Deserializers["ClockItem"] = function (request, data, root) {
  var i650 = root || request.c( 'ClockItem' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, '_dragCanvas')
  return i650
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i652 = root || request.c( 'Playable.AudioManager' )
  var i653 = data
  var i655 = i653[0]
  var i654 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i655.length; i += 1) {
    i654.add(request.d('Playable.SoundData', i655[i + 0]));
  }
  i652._sounds = i654
  request.r(i653[1], i653[2], 0, i652, '_audioMusic')
  request.r(i653[3], i653[4], 0, i652, '_audioSound')
  return i652
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i658 = root || request.c( 'Playable.SoundData' )
  var i659 = data
  i658.Type = i659[0]
  request.r(i659[1], i659[2], 0, i658, 'Clip')
  return i658
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'm_FirstSelected')
  i660.m_sendNavigationEvents = !!i661[2]
  i660.m_DragThreshold = i661[3]
  return i660
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i663 = data
  i662.m_HorizontalAxis = i663[0]
  i662.m_VerticalAxis = i663[1]
  i662.m_SubmitButton = i663[2]
  i662.m_CancelButton = i663[3]
  i662.m_InputActionsPerSecond = i663[4]
  i662.m_RepeatDelay = i663[5]
  i662.m_ForceModuleActive = !!i663[6]
  i662.m_SendPointerHoverToParent = !!i663[7]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i665 = data
  i664.ambientIntensity = i665[0]
  i664.reflectionIntensity = i665[1]
  i664.ambientMode = i665[2]
  i664.ambientLight = new pc.Color(i665[3], i665[4], i665[5], i665[6])
  i664.ambientSkyColor = new pc.Color(i665[7], i665[8], i665[9], i665[10])
  i664.ambientGroundColor = new pc.Color(i665[11], i665[12], i665[13], i665[14])
  i664.ambientEquatorColor = new pc.Color(i665[15], i665[16], i665[17], i665[18])
  i664.fogColor = new pc.Color(i665[19], i665[20], i665[21], i665[22])
  i664.fogEndDistance = i665[23]
  i664.fogStartDistance = i665[24]
  i664.fogDensity = i665[25]
  i664.fog = !!i665[26]
  request.r(i665[27], i665[28], 0, i664, 'skybox')
  i664.fogMode = i665[29]
  var i667 = i665[30]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i667[i + 0]) );
  }
  i664.lightmaps = i666
  i664.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i665[31], i664.lightProbes)
  i664.lightmapsMode = i665[32]
  i664.mixedBakeMode = i665[33]
  i664.environmentLightingMode = i665[34]
  i664.ambientProbe = new pc.SphericalHarmonicsL2(i665[35])
  request.r(i665[36], i665[37], 0, i664, 'customReflection')
  request.r(i665[38], i665[39], 0, i664, 'defaultReflection')
  i664.defaultReflectionMode = i665[40]
  i664.defaultReflectionResolution = i665[41]
  i664.sunLightObjectId = i665[42]
  i664.pixelLightCount = i665[43]
  i664.defaultReflectionHDR = !!i665[44]
  i664.hasLightDataAsset = !!i665[45]
  i664.hasManualGenerate = !!i665[46]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'lightmapColor')
  request.r(i671[2], i671[3], 0, i670, 'lightmapDirection')
  request.r(i671[4], i671[5], 0, i670, 'shadowMask')
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i672 = root || new UnityEngine.LightProbes()
  var i673 = data
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i681 = data
  var i683 = i681[0]
  var i682 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i683.length; i += 1) {
    i682.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i683[i + 0]));
  }
  i680.ShaderCompilationErrors = i682
  i680.name = i681[1]
  i680.guid = i681[2]
  var i685 = i681[3]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( i685[i + 0] );
  }
  i680.shaderDefinedKeywords = i684
  var i687 = i681[4]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i687[i + 0]) );
  }
  i680.passes = i686
  var i689 = i681[5]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i689[i + 0]) );
  }
  i680.usePasses = i688
  var i691 = i681[6]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i691[i + 0]) );
  }
  i680.defaultParameterValues = i690
  request.r(i681[7], i681[8], 0, i680, 'unityFallbackShader')
  i680.readDepth = !!i681[9]
  i680.hasDepthOnlyPass = !!i681[10]
  i680.isCreatedByShaderGraph = !!i681[11]
  i680.disableBatching = !!i681[12]
  i680.compiled = !!i681[13]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i695 = data
  i694.shaderName = i695[0]
  i694.errorMessage = i695[1]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i698 = root || new pc.UnityShaderPass()
  var i699 = data
  i698.id = i699[0]
  i698.subShaderIndex = i699[1]
  i698.name = i699[2]
  i698.passType = i699[3]
  i698.grabPassTextureName = i699[4]
  i698.usePass = !!i699[5]
  i698.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[6], i698.zTest)
  i698.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[7], i698.zWrite)
  i698.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[8], i698.culling)
  i698.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i699[9], i698.blending)
  i698.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i699[10], i698.alphaBlending)
  i698.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[11], i698.colorWriteMask)
  i698.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[12], i698.offsetUnits)
  i698.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[13], i698.offsetFactor)
  i698.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[14], i698.stencilRef)
  i698.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[15], i698.stencilReadMask)
  i698.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[16], i698.stencilWriteMask)
  i698.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i699[17], i698.stencilOp)
  i698.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i699[18], i698.stencilOpFront)
  i698.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i699[19], i698.stencilOpBack)
  var i701 = i699[20]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i701[i + 0]) );
  }
  i698.tags = i700
  var i703 = i699[21]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( i703[i + 0] );
  }
  i698.passDefinedKeywords = i702
  var i705 = i699[22]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i705[i + 0]) );
  }
  i698.passDefinedKeywordGroups = i704
  var i707 = i699[23]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i707[i + 0]) );
  }
  i698.variants = i706
  var i709 = i699[24]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i709[i + 0]) );
  }
  i698.excludedVariants = i708
  i698.hasDepthReader = !!i699[25]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i711 = data
  i710.val = i711[0]
  i710.name = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i713 = data
  i712.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[0], i712.src)
  i712.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[1], i712.dst)
  i712.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[2], i712.op)
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i715 = data
  i714.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[0], i714.pass)
  i714.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[1], i714.fail)
  i714.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[2], i714.zFail)
  i714.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[3], i714.comp)
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i719 = data
  i718.name = i719[0]
  i718.value = i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i723 = data
  var i725 = i723[0]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( i725[i + 0] );
  }
  i722.keywords = i724
  i722.hasDiscard = !!i723[1]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i729 = data
  i728.passId = i729[0]
  i728.subShaderIndex = i729[1]
  var i731 = i729[2]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( i731[i + 0] );
  }
  i728.keywords = i730
  i728.vertexProgram = i729[3]
  i728.fragmentProgram = i729[4]
  i728.exportedForWebGl2 = !!i729[5]
  i728.readDepth = !!i729[6]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'shader')
  i734.pass = i735[2]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i739 = data
  i738.name = i739[0]
  i738.type = i739[1]
  i738.value = new pc.Vec4( i739[2], i739[3], i739[4], i739[5] )
  i738.textureValue = i739[6]
  i738.shaderPropertyFlag = i739[7]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i741 = data
  i740.name = i741[0]
  request.r(i741[1], i741[2], 0, i740, 'texture')
  i740.aabb = i741[3]
  i740.vertices = i741[4]
  i740.triangles = i741[5]
  i740.textureRect = UnityEngine.Rect.MinMaxRect(i741[6], i741[7], i741[8], i741[9])
  i740.packedRect = UnityEngine.Rect.MinMaxRect(i741[10], i741[11], i741[12], i741[13])
  i740.border = new pc.Vec4( i741[14], i741[15], i741[16], i741[17] )
  i740.transparency = i741[18]
  i740.bounds = i741[19]
  i740.pixelsPerUnit = i741[20]
  i740.textureWidth = i741[21]
  i740.textureHeight = i741[22]
  i740.nativeSize = new pc.Vec2( i741[23], i741[24] )
  i740.pivot = new pc.Vec2( i741[25], i741[26] )
  i740.textureRectOffset = new pc.Vec2( i741[27], i741[28] )
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i743 = data
  i742.name = i743[0]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i745 = data
  i744.name = i745[0]
  i744.ascent = i745[1]
  i744.originalLineHeight = i745[2]
  i744.fontSize = i745[3]
  var i747 = i745[4]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i747[i + 0]) );
  }
  i744.characterInfo = i746
  request.r(i745[5], i745[6], 0, i744, 'texture')
  i744.originalFontSize = i745[7]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i751 = data
  i750.index = i751[0]
  i750.advance = i751[1]
  i750.bearing = i751[2]
  i750.glyphWidth = i751[3]
  i750.glyphHeight = i751[4]
  i750.minX = i751[5]
  i750.maxX = i751[6]
  i750.minY = i751[7]
  i750.maxY = i751[8]
  i750.uvBottomLeftX = i751[9]
  i750.uvBottomLeftY = i751[10]
  i750.uvBottomRightX = i751[11]
  i750.uvBottomRightY = i751[12]
  i750.uvTopLeftX = i751[13]
  i750.uvTopLeftY = i751[14]
  i750.uvTopRightX = i751[15]
  i750.uvTopRightY = i751[16]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i753 = data
  i752.name = i753[0]
  i752.bytes64 = i753[1]
  i752.data = i753[2]
  return i752
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i754 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i755 = data
  i754.normalStyle = i755[0]
  i754.normalSpacingOffset = i755[1]
  i754.boldStyle = i755[2]
  i754.boldSpacing = i755[3]
  i754.italicStyle = i755[4]
  i754.tabSize = i755[5]
  request.r(i755[6], i755[7], 0, i754, 'atlas')
  i754.m_SourceFontFileGUID = i755[8]
  i754.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i755[9], i754.m_CreationSettings)
  request.r(i755[10], i755[11], 0, i754, 'm_SourceFontFile')
  i754.m_SourceFontFilePath = i755[12]
  i754.m_AtlasPopulationMode = i755[13]
  i754.InternalDynamicOS = !!i755[14]
  var i757 = i755[15]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i757.length; i += 1) {
    i756.add(request.d('UnityEngine.TextCore.Glyph', i757[i + 0]));
  }
  i754.m_GlyphTable = i756
  var i759 = i755[16]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i759.length; i += 1) {
    i758.add(request.d('TMPro.TMP_Character', i759[i + 0]));
  }
  i754.m_CharacterTable = i758
  var i761 = i755[17]
  var i760 = []
  for(var i = 0; i < i761.length; i += 2) {
  request.r(i761[i + 0], i761[i + 1], 2, i760, '')
  }
  i754.m_AtlasTextures = i760
  i754.m_AtlasTextureIndex = i755[18]
  i754.m_IsMultiAtlasTexturesEnabled = !!i755[19]
  i754.m_GetFontFeatures = !!i755[20]
  i754.m_ClearDynamicDataOnBuild = !!i755[21]
  i754.m_AtlasWidth = i755[22]
  i754.m_AtlasHeight = i755[23]
  i754.m_AtlasPadding = i755[24]
  i754.m_AtlasRenderMode = i755[25]
  var i763 = i755[26]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i763.length; i += 1) {
    i762.add(request.d('UnityEngine.TextCore.GlyphRect', i763[i + 0]));
  }
  i754.m_UsedGlyphRects = i762
  var i765 = i755[27]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(request.d('UnityEngine.TextCore.GlyphRect', i765[i + 0]));
  }
  i754.m_FreeGlyphRects = i764
  i754.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i755[28], i754.m_FontFeatureTable)
  i754.m_ShouldReimportFontFeatures = !!i755[29]
  var i767 = i755[30]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i767.length; i += 2) {
  request.r(i767[i + 0], i767[i + 1], 1, i766, '')
  }
  i754.m_FallbackFontAssetTable = i766
  var i769 = i755[31]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('TMPro.TMP_FontWeightPair', i769[i + 0]) );
  }
  i754.m_FontWeightTable = i768
  var i771 = i755[32]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('TMPro.TMP_FontWeightPair', i771[i + 0]) );
  }
  i754.fontWeights = i770
  i754.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i755[33], i754.m_fontInfo)
  var i773 = i755[34]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i773.length; i += 1) {
    i772.add(request.d('TMPro.TMP_Glyph', i773[i + 0]));
  }
  i754.m_glyphInfoList = i772
  i754.m_KerningTable = request.d('TMPro.KerningTable', i755[35], i754.m_KerningTable)
  var i775 = i755[36]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 1, i774, '')
  }
  i754.fallbackFontAssets = i774
  i754.m_Version = i755[37]
  i754.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i755[38], i754.m_FaceInfo)
  request.r(i755[39], i755[40], 0, i754, 'm_Material')
  return i754
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i776 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i777 = data
  i776.sourceFontFileName = i777[0]
  i776.sourceFontFileGUID = i777[1]
  i776.faceIndex = i777[2]
  i776.pointSizeSamplingMode = i777[3]
  i776.pointSize = i777[4]
  i776.padding = i777[5]
  i776.paddingMode = i777[6]
  i776.packingMode = i777[7]
  i776.atlasWidth = i777[8]
  i776.atlasHeight = i777[9]
  i776.characterSetSelectionMode = i777[10]
  i776.characterSequence = i777[11]
  i776.referencedFontAssetGUID = i777[12]
  i776.referencedTextAssetGUID = i777[13]
  i776.fontStyle = i777[14]
  i776.fontStyleModifier = i777[15]
  i776.renderMode = i777[16]
  i776.includeFontFeatures = !!i777[17]
  return i776
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i781 = data
  i780.m_Index = i781[0]
  i780.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i781[1], i780.m_Metrics)
  i780.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i781[2], i780.m_GlyphRect)
  i780.m_Scale = i781[3]
  i780.m_AtlasIndex = i781[4]
  i780.m_ClassDefinitionType = i781[5]
  return i780
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i783 = data
  i782.m_Width = i783[0]
  i782.m_Height = i783[1]
  i782.m_HorizontalBearingX = i783[2]
  i782.m_HorizontalBearingY = i783[3]
  i782.m_HorizontalAdvance = i783[4]
  return i782
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i785 = data
  i784.m_X = i785[0]
  i784.m_Y = i785[1]
  i784.m_Width = i785[2]
  i784.m_Height = i785[3]
  return i784
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i788 = root || request.c( 'TMPro.TMP_Character' )
  var i789 = data
  i788.m_ElementType = i789[0]
  i788.m_Unicode = i789[1]
  i788.m_GlyphIndex = i789[2]
  i788.m_Scale = i789[3]
  return i788
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i794 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i795 = data
  var i797 = i795[0]
  var i796 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i797.length; i += 1) {
    i796.add(request.d('TMPro.MultipleSubstitutionRecord', i797[i + 0]));
  }
  i794.m_MultipleSubstitutionRecords = i796
  var i799 = i795[1]
  var i798 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i799.length; i += 1) {
    i798.add(request.d('TMPro.LigatureSubstitutionRecord', i799[i + 0]));
  }
  i794.m_LigatureSubstitutionRecords = i798
  var i801 = i795[2]
  var i800 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i801.length; i += 1) {
    i800.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i801[i + 0]));
  }
  i794.m_GlyphPairAdjustmentRecords = i800
  var i803 = i795[3]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i803.length; i += 1) {
    i802.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i803[i + 0]));
  }
  i794.m_MarkToBaseAdjustmentRecords = i802
  var i805 = i795[4]
  var i804 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i805.length; i += 1) {
    i804.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i805[i + 0]));
  }
  i794.m_MarkToMarkAdjustmentRecords = i804
  return i794
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i808 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i809 = data
  i808.m_TargetGlyphID = i809[0]
  i808.m_SubstituteGlyphIDs = i809[1]
  return i808
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i812 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i813 = data
  i812.m_ComponentGlyphIDs = i813[0]
  i812.m_LigatureGlyphID = i813[1]
  return i812
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i817 = data
  i816.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i817[0], i816.m_FirstAdjustmentRecord)
  i816.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i817[1], i816.m_SecondAdjustmentRecord)
  i816.m_FeatureLookupFlags = i817[2]
  return i816
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i820 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i821 = data
  i820.m_BaseGlyphID = i821[0]
  i820.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i821[1], i820.m_BaseGlyphAnchorPoint)
  i820.m_MarkGlyphID = i821[2]
  i820.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i821[3], i820.m_MarkPositionAdjustment)
  return i820
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i825 = data
  i824.m_BaseMarkGlyphID = i825[0]
  i824.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i825[1], i824.m_BaseMarkGlyphAnchorPoint)
  i824.m_CombiningMarkGlyphID = i825[2]
  i824.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i825[3], i824.m_CombiningMarkPositionAdjustment)
  return i824
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i830 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'regularTypeface')
  request.r(i831[2], i831[3], 0, i830, 'italicTypeface')
  return i830
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i833 = data
  i832.Name = i833[0]
  i832.PointSize = i833[1]
  i832.Scale = i833[2]
  i832.CharacterCount = i833[3]
  i832.LineHeight = i833[4]
  i832.Baseline = i833[5]
  i832.Ascender = i833[6]
  i832.CapHeight = i833[7]
  i832.Descender = i833[8]
  i832.CenterLine = i833[9]
  i832.SuperscriptOffset = i833[10]
  i832.SubscriptOffset = i833[11]
  i832.SubSize = i833[12]
  i832.Underline = i833[13]
  i832.UnderlineThickness = i833[14]
  i832.strikethrough = i833[15]
  i832.strikethroughThickness = i833[16]
  i832.TabWidth = i833[17]
  i832.Padding = i833[18]
  i832.AtlasWidth = i833[19]
  i832.AtlasHeight = i833[20]
  return i832
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.TMP_Glyph' )
  var i837 = data
  i836.id = i837[0]
  i836.x = i837[1]
  i836.y = i837[2]
  i836.width = i837[3]
  i836.height = i837[4]
  i836.xOffset = i837[5]
  i836.yOffset = i837[6]
  i836.xAdvance = i837[7]
  i836.scale = i837[8]
  return i836
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.KerningTable' )
  var i839 = data
  var i841 = i839[0]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i841.length; i += 1) {
    i840.add(request.d('TMPro.KerningPair', i841[i + 0]));
  }
  i838.kerningPairs = i840
  return i838
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.KerningPair' )
  var i845 = data
  i844.xOffset = i845[0]
  i844.m_FirstGlyph = i845[1]
  i844.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i845[2], i844.m_FirstGlyphAdjustments)
  i844.m_SecondGlyph = i845[3]
  i844.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i845[4], i844.m_SecondGlyphAdjustments)
  i844.m_IgnoreSpacingAdjustments = !!i845[5]
  return i844
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i847 = data
  i846.m_FaceIndex = i847[0]
  i846.m_FamilyName = i847[1]
  i846.m_StyleName = i847[2]
  i846.m_PointSize = i847[3]
  i846.m_Scale = i847[4]
  i846.m_UnitsPerEM = i847[5]
  i846.m_LineHeight = i847[6]
  i846.m_AscentLine = i847[7]
  i846.m_CapLine = i847[8]
  i846.m_MeanLine = i847[9]
  i846.m_Baseline = i847[10]
  i846.m_DescentLine = i847[11]
  i846.m_SuperscriptOffset = i847[12]
  i846.m_SuperscriptSize = i847[13]
  i846.m_SubscriptOffset = i847[14]
  i846.m_SubscriptSize = i847[15]
  i846.m_UnderlineOffset = i847[16]
  i846.m_UnderlineThickness = i847[17]
  i846.m_StrikethroughOffset = i847[18]
  i846.m_StrikethroughThickness = i847[19]
  i846.m_TabWidth = i847[20]
  return i846
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i848 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i849 = data
  var i851 = i849[0]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i848.atlasAssets = i850
  i848.scale = i849[1]
  request.r(i849[2], i849[3], 0, i848, 'skeletonJSON')
  i848.isUpgradingBlendModeMaterials = !!i849[4]
  i848.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i849[5], i848.blendModeMaterials)
  var i853 = i849[6]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 1, i852, '')
  }
  i848.skeletonDataModifiers = i852
  var i855 = i849[7]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( i855[i + 0] );
  }
  i848.fromAnimation = i854
  var i857 = i849[8]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( i857[i + 0] );
  }
  i848.toAnimation = i856
  i848.duration = i849[9]
  i848.defaultMix = i849[10]
  request.r(i849[11], i849[12], 0, i848, 'controller')
  return i848
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i860 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i861 = data
  i860.applyAdditiveMaterial = !!i861[0]
  var i863 = i861[1]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i863.length; i += 1) {
    i862.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i863[i + 0]));
  }
  i860.additiveMaterials = i862
  var i865 = i861[2]
  var i864 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i865.length; i += 1) {
    i864.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i865[i + 0]));
  }
  i860.multiplyMaterials = i864
  var i867 = i861[3]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i867.length; i += 1) {
    i866.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i867[i + 0]));
  }
  i860.screenMaterials = i866
  i860.requiresBlendModeMaterials = !!i861[4]
  return i860
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i870 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i871 = data
  i870.pageName = i871[0]
  request.r(i871[1], i871[2], 0, i870, 'material')
  return i870
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i874 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'atlasFile')
  var i877 = i875[2]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i874.materials = i876
  i874.textureLoadingMode = i875[3]
  request.r(i875[4], i875[5], 0, i874, 'onDemandTextureLoader')
  return i874
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i878 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i879 = data
  i878.useSafeMode = !!i879[0]
  i878.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i879[1], i878.safeModeOptions)
  i878.timeScale = i879[2]
  i878.unscaledTimeScale = i879[3]
  i878.useSmoothDeltaTime = !!i879[4]
  i878.maxSmoothUnscaledTime = i879[5]
  i878.rewindCallbackMode = i879[6]
  i878.showUnityEditorReport = !!i879[7]
  i878.logBehaviour = i879[8]
  i878.drawGizmos = !!i879[9]
  i878.defaultRecyclable = !!i879[10]
  i878.defaultAutoPlay = i879[11]
  i878.defaultUpdateType = i879[12]
  i878.defaultTimeScaleIndependent = !!i879[13]
  i878.defaultEaseType = i879[14]
  i878.defaultEaseOvershootOrAmplitude = i879[15]
  i878.defaultEasePeriod = i879[16]
  i878.defaultAutoKill = !!i879[17]
  i878.defaultLoopType = i879[18]
  i878.debugMode = !!i879[19]
  i878.debugStoreTargetId = !!i879[20]
  i878.showPreviewPanel = !!i879[21]
  i878.storeSettingsLocation = i879[22]
  i878.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i879[23], i878.modules)
  i878.createASMDEF = !!i879[24]
  i878.showPlayingTweens = !!i879[25]
  i878.showPausedTweens = !!i879[26]
  return i878
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i880 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i881 = data
  i880.logBehaviour = i881[0]
  i880.nestedTweenFailureBehaviour = i881[1]
  return i880
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i882 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i883 = data
  i882.showPanel = !!i883[0]
  i882.audioEnabled = !!i883[1]
  i882.physicsEnabled = !!i883[2]
  i882.physics2DEnabled = !!i883[3]
  i882.spriteEnabled = !!i883[4]
  i882.uiEnabled = !!i883[5]
  i882.uiToolkitEnabled = !!i883[6]
  i882.textMeshProEnabled = !!i883[7]
  i882.tk2DEnabled = !!i883[8]
  i882.deAudioEnabled = !!i883[9]
  i882.deUnityExtendedEnabled = !!i883[10]
  i882.epoOutlineEnabled = !!i883[11]
  return i882
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.TMP_Settings' )
  var i885 = data
  i884.assetVersion = i885[0]
  i884.m_TextWrappingMode = i885[1]
  i884.m_enableKerning = !!i885[2]
  var i887 = i885[3]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(i887[i + 0]);
  }
  i884.m_ActiveFontFeatures = i886
  i884.m_enableExtraPadding = !!i885[4]
  i884.m_enableTintAllSprites = !!i885[5]
  i884.m_enableParseEscapeCharacters = !!i885[6]
  i884.m_EnableRaycastTarget = !!i885[7]
  i884.m_GetFontFeaturesAtRuntime = !!i885[8]
  i884.m_missingGlyphCharacter = i885[9]
  i884.m_ClearDynamicDataOnBuild = !!i885[10]
  i884.m_warningsDisabled = !!i885[11]
  request.r(i885[12], i885[13], 0, i884, 'm_defaultFontAsset')
  i884.m_defaultFontAssetPath = i885[14]
  i884.m_defaultFontSize = i885[15]
  i884.m_defaultAutoSizeMinRatio = i885[16]
  i884.m_defaultAutoSizeMaxRatio = i885[17]
  i884.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i885[18], i885[19] )
  i884.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i885[20], i885[21] )
  i884.m_autoSizeTextContainer = !!i885[22]
  i884.m_IsTextObjectScaleStatic = !!i885[23]
  var i889 = i885[24]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 1, i888, '')
  }
  i884.m_fallbackFontAssets = i888
  i884.m_matchMaterialPreset = !!i885[25]
  i884.m_HideSubTextObjects = !!i885[26]
  request.r(i885[27], i885[28], 0, i884, 'm_defaultSpriteAsset')
  i884.m_defaultSpriteAssetPath = i885[29]
  i884.m_enableEmojiSupport = !!i885[30]
  i884.m_MissingCharacterSpriteUnicode = i885[31]
  var i891 = i885[32]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 1, i890, '')
  }
  i884.m_EmojiFallbackTextAssets = i890
  i884.m_defaultColorGradientPresetsPath = i885[33]
  request.r(i885[34], i885[35], 0, i884, 'm_defaultStyleSheet')
  i884.m_StyleSheetsResourcePath = i885[36]
  request.r(i885[37], i885[38], 0, i884, 'm_leadingCharacters')
  request.r(i885[39], i885[40], 0, i884, 'm_followingCharacters')
  i884.m_UseModernHangulLineBreakingRules = !!i885[41]
  return i884
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i895 = data
  i894.m_GlyphIndex = i895[0]
  i894.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i895[1], i894.m_GlyphValueRecord)
  return i894
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i897 = data
  i896.m_XPlacement = i897[0]
  i896.m_YPlacement = i897[1]
  i896.m_XAdvance = i897[2]
  i896.m_YAdvance = i897[3]
  return i896
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i898 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'spriteSheet')
  var i901 = i899[2]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i901.length; i += 1) {
    i900.add(request.d('TMPro.TMP_Sprite', i901[i + 0]));
  }
  i898.spriteInfoList = i900
  var i903 = i899[3]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 1, i902, '')
  }
  i898.fallbackSpriteAssets = i902
  var i905 = i899[4]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('TMPro.TMP_SpriteCharacter', i905[i + 0]));
  }
  i898.m_SpriteCharacterTable = i904
  var i907 = i899[5]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i907.length; i += 1) {
    i906.add(request.d('TMPro.TMP_SpriteGlyph', i907[i + 0]));
  }
  i898.m_GlyphTable = i906
  i898.m_Version = i899[6]
  i898.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i899[7], i898.m_FaceInfo)
  request.r(i899[8], i899[9], 0, i898, 'm_Material')
  return i898
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i910 = root || request.c( 'TMPro.TMP_Sprite' )
  var i911 = data
  i910.name = i911[0]
  i910.hashCode = i911[1]
  i910.unicode = i911[2]
  i910.pivot = new pc.Vec2( i911[3], i911[4] )
  request.r(i911[5], i911[6], 0, i910, 'sprite')
  i910.id = i911[7]
  i910.x = i911[8]
  i910.y = i911[9]
  i910.width = i911[10]
  i910.height = i911[11]
  i910.xOffset = i911[12]
  i910.yOffset = i911[13]
  i910.xAdvance = i911[14]
  i910.scale = i911[15]
  return i910
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i916 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i917 = data
  i916.m_Name = i917[0]
  i916.m_ElementType = i917[1]
  i916.m_Unicode = i917[2]
  i916.m_GlyphIndex = i917[3]
  i916.m_Scale = i917[4]
  return i916
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i920 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'sprite')
  i920.m_Index = i921[2]
  i920.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i921[3], i920.m_Metrics)
  i920.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i921[4], i920.m_GlyphRect)
  i920.m_Scale = i921[5]
  i920.m_AtlasIndex = i921[6]
  i920.m_ClassDefinitionType = i921[7]
  return i920
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i922 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i923 = data
  var i925 = i923[0]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i925.length; i += 1) {
    i924.add(request.d('TMPro.TMP_Style', i925[i + 0]));
  }
  i922.m_StyleList = i924
  return i922
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i928 = root || request.c( 'TMPro.TMP_Style' )
  var i929 = data
  i928.m_Name = i929[0]
  i928.m_HashCode = i929[1]
  i928.m_OpeningDefinition = i929[2]
  i928.m_ClosingDefinition = i929[3]
  i928.m_OpeningTagArray = i929[4]
  i928.m_ClosingTagArray = i929[5]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i931 = data
  var i933 = i931[0]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i933[i + 0]) );
  }
  i930.files = i932
  i930.componentToPrefabIds = i931[1]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i937 = data
  i936.path = i937[0]
  request.r(i937[1], i937[2], 0, i936, 'unityObject')
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i939 = data
  var i941 = i939[0]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i941[i + 0]) );
  }
  i938.scriptsExecutionOrder = i940
  var i943 = i939[1]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i943[i + 0]) );
  }
  i938.sortingLayers = i942
  var i945 = i939[2]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i945[i + 0]) );
  }
  i938.cullingLayers = i944
  i938.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i939[3], i938.timeSettings)
  i938.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i939[4], i938.physicsSettings)
  i938.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i939[5], i938.physics2DSettings)
  i938.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i939[6], i938.qualitySettings)
  i938.enableRealtimeShadows = !!i939[7]
  i938.enableAutoInstancing = !!i939[8]
  i938.enableStaticBatching = !!i939[9]
  i938.enableDynamicBatching = !!i939[10]
  i938.usePreservativeDynamicBatching = !!i939[11]
  i938.lightmapEncodingQuality = i939[12]
  i938.desiredColorSpace = i939[13]
  var i947 = i939[14]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( i947[i + 0] );
  }
  i938.allTags = i946
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i951 = data
  i950.name = i951[0]
  i950.value = i951[1]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i955 = data
  i954.id = i955[0]
  i954.name = i955[1]
  i954.value = i955[2]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i959 = data
  i958.id = i959[0]
  i958.name = i959[1]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i961 = data
  i960.fixedDeltaTime = i961[0]
  i960.maximumDeltaTime = i961[1]
  i960.timeScale = i961[2]
  i960.maximumParticleTimestep = i961[3]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i963 = data
  i962.gravity = new pc.Vec3( i963[0], i963[1], i963[2] )
  i962.defaultSolverIterations = i963[3]
  i962.bounceThreshold = i963[4]
  i962.autoSyncTransforms = !!i963[5]
  i962.autoSimulation = !!i963[6]
  var i965 = i963[7]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i965[i + 0]) );
  }
  i962.collisionMatrix = i964
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i969 = data
  i968.enabled = !!i969[0]
  i968.layerId = i969[1]
  i968.otherLayerId = i969[2]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'material')
  i970.gravity = new pc.Vec2( i971[2], i971[3] )
  i970.positionIterations = i971[4]
  i970.velocityIterations = i971[5]
  i970.velocityThreshold = i971[6]
  i970.maxLinearCorrection = i971[7]
  i970.maxAngularCorrection = i971[8]
  i970.maxTranslationSpeed = i971[9]
  i970.maxRotationSpeed = i971[10]
  i970.baumgarteScale = i971[11]
  i970.baumgarteTOIScale = i971[12]
  i970.timeToSleep = i971[13]
  i970.linearSleepTolerance = i971[14]
  i970.angularSleepTolerance = i971[15]
  i970.defaultContactOffset = i971[16]
  i970.autoSimulation = !!i971[17]
  i970.queriesHitTriggers = !!i971[18]
  i970.queriesStartInColliders = !!i971[19]
  i970.callbacksOnDisable = !!i971[20]
  i970.reuseCollisionCallbacks = !!i971[21]
  i970.autoSyncTransforms = !!i971[22]
  var i973 = i971[23]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i973[i + 0]) );
  }
  i970.collisionMatrix = i972
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i977 = data
  i976.enabled = !!i977[0]
  i976.layerId = i977[1]
  i976.otherLayerId = i977[2]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i979 = data
  var i981 = i979[0]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i981[i + 0]) );
  }
  i978.qualityLevels = i980
  var i983 = i979[1]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( i983[i + 0] );
  }
  i978.names = i982
  i978.shadows = i979[2]
  i978.anisotropicFiltering = i979[3]
  i978.antiAliasing = i979[4]
  i978.lodBias = i979[5]
  i978.shadowCascades = i979[6]
  i978.shadowDistance = i979[7]
  i978.shadowmaskMode = i979[8]
  i978.shadowProjection = i979[9]
  i978.shadowResolution = i979[10]
  i978.softParticles = !!i979[11]
  i978.softVegetation = !!i979[12]
  i978.activeColorSpace = i979[13]
  i978.desiredColorSpace = i979[14]
  i978.masterTextureLimit = i979[15]
  i978.maxQueuedFrames = i979[16]
  i978.particleRaycastBudget = i979[17]
  i978.pixelLightCount = i979[18]
  i978.realtimeReflectionProbes = !!i979[19]
  i978.shadowCascade2Split = i979[20]
  i978.shadowCascade4Split = new pc.Vec3( i979[21], i979[22], i979[23] )
  i978.streamingMipmapsActive = !!i979[24]
  i978.vSyncCount = i979[25]
  i978.asyncUploadBufferSize = i979[26]
  i978.asyncUploadTimeSlice = i979[27]
  i978.billboardsFaceCameraPosition = !!i979[28]
  i978.shadowNearPlaneOffset = i979[29]
  i978.streamingMipmapsMemoryBudget = i979[30]
  i978.maximumLODLevel = i979[31]
  i978.streamingMipmapsAddAllCameras = !!i979[32]
  i978.streamingMipmapsMaxLevelReduction = i979[33]
  i978.streamingMipmapsRenderersPerFrame = i979[34]
  i978.resolutionScalingFixedDPIFactor = i979[35]
  i978.streamingMipmapsMaxFileIORequests = i979[36]
  i978.currentQualityLevel = i979[37]
  return i978
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i987 = data
  i986.m_XCoordinate = i987[0]
  i986.m_YCoordinate = i987[1]
  return i986
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i989 = data
  i988.m_XPositionAdjustment = i989[0]
  i988.m_YPositionAdjustment = i989[1]
  return i988
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i990 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i991 = data
  i990.xPlacement = i991[0]
  i990.yPlacement = i991[1]
  i990.xAdvance = i991[2]
  i990.yAdvance = i991[3]
  return i990
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

Deserializers.creativeName = "";

Deserializers.lunaAppID = "39964";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1893";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5058";

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

Deserializers.buildID = "9b152930-2393-44b7-b09d-cb05c44d27e3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

