var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointSpring' )
  var i489 = data
  i488.spring = i489[0]
  i488.damper = i489[1]
  i488.targetPosition = i489[2]
  return i488
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointMotor' )
  var i491 = data
  i490.m_TargetVelocity = i491[0]
  i490.m_Force = i491[1]
  i490.m_FreeSpin = i491[2]
  return i490
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointLimits' )
  var i493 = data
  i492.m_Min = i493[0]
  i492.m_Max = i493[1]
  i492.m_Bounciness = i493[2]
  i492.m_BounceMinVelocity = i493[3]
  i492.m_ContactDistance = i493[4]
  i492.minBounce = i493[5]
  i492.maxBounce = i493[6]
  return i492
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointDrive' )
  var i495 = data
  i494.m_PositionSpring = i495[0]
  i494.m_PositionDamper = i495[1]
  i494.m_MaximumForce = i495[2]
  i494.m_UseAcceleration = i495[3]
  return i494
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i497 = data
  i496.m_Spring = i497[0]
  i496.m_Damper = i497[1]
  return i496
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i499 = data
  i498.m_Limit = i499[0]
  i498.m_Bounciness = i499[1]
  i498.m_ContactDistance = i499[2]
  return i498
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i501 = data
  i500.m_ExtremumSlip = i501[0]
  i500.m_ExtremumValue = i501[1]
  i500.m_AsymptoteSlip = i501[2]
  i500.m_AsymptoteValue = i501[3]
  i500.m_Stiffness = i501[4]
  return i500
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i503 = data
  i502.m_LowerAngle = i503[0]
  i502.m_UpperAngle = i503[1]
  return i502
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i505 = data
  i504.m_MotorSpeed = i505[0]
  i504.m_MaximumMotorTorque = i505[1]
  return i504
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i507 = data
  i506.m_DampingRatio = i507[0]
  i506.m_Frequency = i507[1]
  i506.m_Angle = i507[2]
  return i506
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i509 = data
  i508.m_LowerTranslation = i509[0]
  i508.m_UpperTranslation = i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i511 = data
  i510.name = i511[0]
  i510.width = i511[1]
  i510.height = i511[2]
  i510.mipmapCount = i511[3]
  i510.anisoLevel = i511[4]
  i510.filterMode = i511[5]
  i510.hdr = !!i511[6]
  i510.format = i511[7]
  i510.wrapMode = i511[8]
  i510.alphaIsTransparency = !!i511[9]
  i510.alphaSource = i511[10]
  i510.graphicsFormat = i511[11]
  i510.sRGBTexture = !!i511[12]
  i510.desiredColorSpace = i511[13]
  i510.wrapU = i511[14]
  i510.wrapV = i511[15]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i512 = root || new pc.UnityMaterial()
  var i513 = data
  i512.name = i513[0]
  request.r(i513[1], i513[2], 0, i512, 'shader')
  i512.renderQueue = i513[3]
  i512.enableInstancing = !!i513[4]
  var i515 = i513[5]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i515[i + 0]) );
  }
  i512.floatParameters = i514
  var i517 = i513[6]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i517[i + 0]) );
  }
  i512.colorParameters = i516
  var i519 = i513[7]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i519[i + 0]) );
  }
  i512.vectorParameters = i518
  var i521 = i513[8]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i521[i + 0]) );
  }
  i512.textureParameters = i520
  var i523 = i513[9]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i523[i + 0]) );
  }
  i512.materialFlags = i522
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i527 = data
  i526.name = i527[0]
  i526.value = i527[1]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i531 = data
  i530.name = i531[0]
  i530.value = new pc.Color(i531[1], i531[2], i531[3], i531[4])
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i535 = data
  i534.name = i535[0]
  i534.value = new pc.Vec4( i535[1], i535[2], i535[3], i535[4] )
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i539 = data
  i538.name = i539[0]
  request.r(i539[1], i539[2], 0, i538, 'value')
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i543 = data
  i542.name = i543[0]
  i542.enabled = !!i543[1]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i545 = data
  i544.pivot = new pc.Vec2( i545[0], i545[1] )
  i544.anchorMin = new pc.Vec2( i545[2], i545[3] )
  i544.anchorMax = new pc.Vec2( i545[4], i545[5] )
  i544.sizeDelta = new pc.Vec2( i545[6], i545[7] )
  i544.anchoredPosition3D = new pc.Vec3( i545[8], i545[9], i545[10] )
  i544.rotation = new pc.Quat(i545[11], i545[12], i545[13], i545[14])
  i544.scale = new pc.Vec3( i545[15], i545[16], i545[17] )
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i547 = data
  i546.cullTransparentMesh = !!i547[0]
  return i546
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.UI.Image' )
  var i549 = data
  request.r(i549[0], i549[1], 0, i548, 'm_Sprite')
  i548.m_Type = i549[2]
  i548.m_PreserveAspect = !!i549[3]
  i548.m_FillCenter = !!i549[4]
  i548.m_FillMethod = i549[5]
  i548.m_FillAmount = i549[6]
  i548.m_FillClockwise = !!i549[7]
  i548.m_FillOrigin = i549[8]
  i548.m_UseSpriteMesh = !!i549[9]
  i548.m_PixelsPerUnitMultiplier = i549[10]
  i548.m_Maskable = !!i549[11]
  request.r(i549[12], i549[13], 0, i548, 'm_Material')
  i548.m_Color = new pc.Color(i549[14], i549[15], i549[16], i549[17])
  i548.m_RaycastTarget = !!i549[18]
  i548.m_RaycastPadding = new pc.Vec4( i549[19], i549[20], i549[21], i549[22] )
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i551 = data
  i550.name = i551[0]
  i550.tagId = i551[1]
  i550.enabled = !!i551[2]
  i550.isStatic = !!i551[3]
  i550.layer = i551[4]
  return i550
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i552 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i553 = data
  i552.m_hasFontAssetChanged = !!i553[0]
  request.r(i553[1], i553[2], 0, i552, 'm_baseMaterial')
  i552.m_maskOffset = new pc.Vec4( i553[3], i553[4], i553[5], i553[6] )
  i552.m_text = i553[7]
  i552.m_isRightToLeft = !!i553[8]
  request.r(i553[9], i553[10], 0, i552, 'm_fontAsset')
  request.r(i553[11], i553[12], 0, i552, 'm_sharedMaterial')
  var i555 = i553[13]
  var i554 = []
  for(var i = 0; i < i555.length; i += 2) {
  request.r(i555[i + 0], i555[i + 1], 2, i554, '')
  }
  i552.m_fontSharedMaterials = i554
  request.r(i553[14], i553[15], 0, i552, 'm_fontMaterial')
  var i557 = i553[16]
  var i556 = []
  for(var i = 0; i < i557.length; i += 2) {
  request.r(i557[i + 0], i557[i + 1], 2, i556, '')
  }
  i552.m_fontMaterials = i556
  i552.m_fontColor32 = UnityEngine.Color32.ConstructColor(i553[17], i553[18], i553[19], i553[20])
  i552.m_fontColor = new pc.Color(i553[21], i553[22], i553[23], i553[24])
  i552.m_enableVertexGradient = !!i553[25]
  i552.m_colorMode = i553[26]
  i552.m_fontColorGradient = request.d('TMPro.VertexGradient', i553[27], i552.m_fontColorGradient)
  request.r(i553[28], i553[29], 0, i552, 'm_fontColorGradientPreset')
  request.r(i553[30], i553[31], 0, i552, 'm_spriteAsset')
  i552.m_tintAllSprites = !!i553[32]
  request.r(i553[33], i553[34], 0, i552, 'm_StyleSheet')
  i552.m_TextStyleHashCode = i553[35]
  i552.m_overrideHtmlColors = !!i553[36]
  i552.m_faceColor = UnityEngine.Color32.ConstructColor(i553[37], i553[38], i553[39], i553[40])
  i552.m_fontSize = i553[41]
  i552.m_fontSizeBase = i553[42]
  i552.m_fontWeight = i553[43]
  i552.m_enableAutoSizing = !!i553[44]
  i552.m_fontSizeMin = i553[45]
  i552.m_fontSizeMax = i553[46]
  i552.m_fontStyle = i553[47]
  i552.m_HorizontalAlignment = i553[48]
  i552.m_VerticalAlignment = i553[49]
  i552.m_textAlignment = i553[50]
  i552.m_characterSpacing = i553[51]
  i552.m_wordSpacing = i553[52]
  i552.m_lineSpacing = i553[53]
  i552.m_lineSpacingMax = i553[54]
  i552.m_paragraphSpacing = i553[55]
  i552.m_charWidthMaxAdj = i553[56]
  i552.m_enableWordWrapping = !!i553[57]
  i552.m_wordWrappingRatios = i553[58]
  i552.m_overflowMode = i553[59]
  request.r(i553[60], i553[61], 0, i552, 'm_linkedTextComponent')
  request.r(i553[62], i553[63], 0, i552, 'parentLinkedComponent')
  i552.m_enableKerning = !!i553[64]
  i552.m_enableExtraPadding = !!i553[65]
  i552.checkPaddingRequired = !!i553[66]
  i552.m_isRichText = !!i553[67]
  i552.m_parseCtrlCharacters = !!i553[68]
  i552.m_isOrthographic = !!i553[69]
  i552.m_isCullingEnabled = !!i553[70]
  i552.m_horizontalMapping = i553[71]
  i552.m_verticalMapping = i553[72]
  i552.m_uvLineOffset = i553[73]
  i552.m_geometrySortingOrder = i553[74]
  i552.m_IsTextObjectScaleStatic = !!i553[75]
  i552.m_VertexBufferAutoSizeReduction = !!i553[76]
  i552.m_useMaxVisibleDescender = !!i553[77]
  i552.m_pageToDisplay = i553[78]
  i552.m_margin = new pc.Vec4( i553[79], i553[80], i553[81], i553[82] )
  i552.m_isUsingLegacyAnimationComponent = !!i553[83]
  i552.m_isVolumetricText = !!i553[84]
  i552.m_Maskable = !!i553[85]
  request.r(i553[86], i553[87], 0, i552, 'm_Material')
  i552.m_Color = new pc.Color(i553[88], i553[89], i553[90], i553[91])
  i552.m_RaycastTarget = !!i553[92]
  i552.m_RaycastPadding = new pc.Vec4( i553[93], i553[94], i553[95], i553[96] )
  return i552
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i560 = root || request.c( 'TMPro.VertexGradient' )
  var i561 = data
  i560.topLeft = new pc.Color(i561[0], i561[1], i561[2], i561[3])
  i560.topRight = new pc.Color(i561[4], i561[5], i561[6], i561[7])
  i560.bottomLeft = new pc.Color(i561[8], i561[9], i561[10], i561[11])
  i560.bottomRight = new pc.Color(i561[12], i561[13], i561[14], i561[15])
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i563 = data
  i562.name = i563[0]
  i562.index = i563[1]
  i562.startup = !!i563[2]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i565 = data
  i564.position = new pc.Vec3( i565[0], i565[1], i565[2] )
  i564.scale = new pc.Vec3( i565[3], i565[4], i565[5] )
  i564.rotation = new pc.Quat(i565[6], i565[7], i565[8], i565[9])
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i567 = data
  i566.aspect = i567[0]
  i566.orthographic = !!i567[1]
  i566.orthographicSize = i567[2]
  i566.backgroundColor = new pc.Color(i567[3], i567[4], i567[5], i567[6])
  i566.nearClipPlane = i567[7]
  i566.farClipPlane = i567[8]
  i566.fieldOfView = i567[9]
  i566.depth = i567[10]
  i566.clearFlags = i567[11]
  i566.cullingMask = i567[12]
  i566.rect = i567[13]
  request.r(i567[14], i567[15], 0, i566, 'targetTexture')
  i566.usePhysicalProperties = !!i567[16]
  i566.focalLength = i567[17]
  i566.sensorSize = new pc.Vec2( i567[18], i567[19] )
  i566.lensShift = new pc.Vec2( i567[20], i567[21] )
  i566.gateFit = i567[22]
  i566.commandBufferCount = i567[23]
  i566.cameraType = i567[24]
  i566.enabled = !!i567[25]
  return i566
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'm_FirstSelected')
  i568.m_sendNavigationEvents = !!i569[2]
  i568.m_DragThreshold = i569[3]
  return i568
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i571 = data
  i570.m_HorizontalAxis = i571[0]
  i570.m_VerticalAxis = i571[1]
  i570.m_SubmitButton = i571[2]
  i570.m_CancelButton = i571[3]
  i570.m_InputActionsPerSecond = i571[4]
  i570.m_RepeatDelay = i571[5]
  i570.m_ForceModuleActive = !!i571[6]
  i570.m_SendPointerHoverToParent = !!i571[7]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i573 = data
  i572.planeDistance = i573[0]
  i572.referencePixelsPerUnit = i573[1]
  i572.isFallbackOverlay = !!i573[2]
  i572.renderMode = i573[3]
  i572.renderOrder = i573[4]
  i572.sortingLayerName = i573[5]
  i572.sortingOrder = i573[6]
  i572.scaleFactor = i573[7]
  request.r(i573[8], i573[9], 0, i572, 'worldCamera')
  i572.overrideSorting = !!i573[10]
  i572.pixelPerfect = !!i573[11]
  i572.targetDisplay = i573[12]
  i572.overridePixelPerfect = !!i573[13]
  i572.enabled = !!i573[14]
  return i572
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i575 = data
  i574.m_UiScaleMode = i575[0]
  i574.m_ReferencePixelsPerUnit = i575[1]
  i574.m_ScaleFactor = i575[2]
  i574.m_ReferenceResolution = new pc.Vec2( i575[3], i575[4] )
  i574.m_ScreenMatchMode = i575[5]
  i574.m_MatchWidthOrHeight = i575[6]
  i574.m_PhysicalUnit = i575[7]
  i574.m_FallbackScreenDPI = i575[8]
  i574.m_DefaultSpriteDPI = i575[9]
  i574.m_DynamicPixelsPerUnit = i575[10]
  i574.m_PresetInfoIsWorld = !!i575[11]
  return i574
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i577 = data
  i576.m_IgnoreReversedGraphics = !!i577[0]
  i576.m_BlockingObjects = i577[1]
  i576.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i577[2] )
  return i576
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'm_Texture')
  i578.m_UVRect = UnityEngine.Rect.MinMaxRect(i579[2], i579[3], i579[4], i579[5])
  i578.m_Maskable = !!i579[6]
  request.r(i579[7], i579[8], 0, i578, 'm_Material')
  i578.m_Color = new pc.Color(i579[9], i579[10], i579[11], i579[12])
  i578.m_RaycastTarget = !!i579[13]
  i578.m_RaycastPadding = new pc.Vec4( i579[14], i579[15], i579[16], i579[17] )
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'clip')
  request.r(i581[2], i581[3], 0, i580, 'outputAudioMixerGroup')
  i580.playOnAwake = !!i581[4]
  i580.loop = !!i581[5]
  i580.time = i581[6]
  i580.volume = i581[7]
  i580.pitch = i581[8]
  i580.enabled = !!i581[9]
  return i580
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i582 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'skeletonDataAsset')
  request.r(i583[2], i583[3], 0, i582, 'additiveMaterial')
  request.r(i583[4], i583[5], 0, i582, 'multiplyMaterial')
  request.r(i583[6], i583[7], 0, i582, 'screenMaterial')
  i582.initialSkinName = i583[8]
  i582.initialFlipX = !!i583[9]
  i582.initialFlipY = !!i583[10]
  i582.startingAnimation = i583[11]
  i582.startingLoop = !!i583[12]
  i582.timeScale = i583[13]
  i582.freeze = !!i583[14]
  i582.layoutScaleMode = i583[15]
  i582.updateWhenInvisible = i583[16]
  i582.allowMultipleCanvasRenderers = !!i583[17]
  var i585 = i583[18]
  var i584 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 1, i584, '')
  }
  i582.canvasRenderers = i584
  i582.enableSeparatorSlots = !!i583[19]
  i582.updateSeparatorPartLocation = !!i583[20]
  i582.updateSeparatorPartScale = !!i583[21]
  i582.disableMeshAssignmentOnOverride = !!i583[22]
  i582.m_SkeletonColor = new pc.Color(i583[23], i583[24], i583[25], i583[26])
  i582.referenceSize = new pc.Vec2( i583[27], i583[28] )
  i582.pivotOffset = new pc.Vec2( i583[29], i583[30] )
  i582.referenceScale = i583[31]
  i582.layoutScale = i583[32]
  i582.rectTransformSize = new pc.Vec2( i583[33], i583[34] )
  i582.editReferenceRect = !!i583[35]
  var i587 = i583[36]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( i587[i + 0] );
  }
  i582.separatorSlotNames = i586
  var i589 = i583[37]
  var i588 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i589.length; i += 2) {
  request.r(i589[i + 0], i589[i + 1], 1, i588, '')
  }
  i582.separatorParts = i588
  i582.physicsPositionInheritanceFactor = new pc.Vec2( i583[38], i583[39] )
  i582.physicsRotationInheritanceFactor = i583[40]
  request.r(i583[41], i583[42], 0, i582, 'physicsMovementRelativeTo')
  i582.meshGenerator = request.d('Spine.Unity.MeshGenerator', i583[43], i582.meshGenerator)
  i582.updateTiming = i583[44]
  i582.unscaledTime = !!i583[45]
  i582.m_Maskable = !!i583[46]
  request.r(i583[47], i583[48], 0, i582, 'm_Material')
  i582.m_Color = new pc.Color(i583[49], i583[50], i583[51], i583[52])
  i582.m_RaycastTarget = !!i583[53]
  i582.m_RaycastPadding = new pc.Vec4( i583[54], i583[55], i583[56], i583[57] )
  return i582
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i596 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i597 = data
  i596.settings = request.d('Spine.Unity.MeshGenerator+Settings', i597[0], i596.settings)
  return i596
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i598 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i599 = data
  i598.useClipping = !!i599[0]
  i598.zSpacing = i599[1]
  i598.tintBlack = !!i599[2]
  i598.canvasGroupCompatible = !!i599[3]
  i598.pmaVertexColors = !!i599[4]
  i598.addNormals = !!i599[5]
  i598.calculateTangents = !!i599[6]
  i598.immutableTriangles = !!i599[7]
  return i598
}

Deserializers["DropZone"] = function (request, data, root) {
  var i600 = root || request.c( 'DropZone' )
  var i601 = data
  i600.idDrop = i601[0]
  i600.isLose = !!i601[1]
  var i603 = i601[2]
  var i602 = []
  for(var i = 0; i < i603.length; i += 2) {
  request.r(i603[i + 0], i603[i + 1], 2, i602, '')
  }
  i600.steps = i602
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i607 = data
  i606.usedByComposite = !!i607[0]
  i606.autoTiling = !!i607[1]
  i606.size = new pc.Vec2( i607[2], i607[3] )
  i606.edgeRadius = i607[4]
  i606.enabled = !!i607[5]
  i606.isTrigger = !!i607[6]
  i606.usedByEffector = !!i607[7]
  i606.density = i607[8]
  i606.offset = new pc.Vec2( i607[9], i607[10] )
  request.r(i607[11], i607[12], 0, i606, 'material')
  return i606
}

Deserializers["DragSpawn"] = function (request, data, root) {
  var i608 = root || request.c( 'DragSpawn' )
  var i609 = data
  i608.idDrag = i609[0]
  i608.isProcess = !!i609[1]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i611 = data
  i610.m_Alpha = i611[0]
  i610.m_Interactable = !!i611[1]
  i610.m_BlocksRaycasts = !!i611[2]
  i610.m_IgnoreParentGroups = !!i611[3]
  i610.enabled = !!i611[4]
  return i610
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i612 = root || request.c( 'ClickItem' )
  var i613 = data
  var i615 = i613[0]
  var i614 = []
  for(var i = 0; i < i615.length; i += 2) {
  request.r(i615[i + 0], i615[i + 1], 2, i614, '')
  }
  i612.steps = i614
  i612.currentStep = i613[1]
  i612.isProcess = !!i613[2]
  return i612
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.Button' )
  var i617 = data
  i616.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i617[0], i616.m_OnClick)
  i616.m_Navigation = request.d('UnityEngine.UI.Navigation', i617[1], i616.m_Navigation)
  i616.m_Transition = i617[2]
  i616.m_Colors = request.d('UnityEngine.UI.ColorBlock', i617[3], i616.m_Colors)
  i616.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i617[4], i616.m_SpriteState)
  i616.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i617[5], i616.m_AnimationTriggers)
  i616.m_Interactable = !!i617[6]
  request.r(i617[7], i617[8], 0, i616, 'm_TargetGraphic')
  return i616
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i619 = data
  i618.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i619[0], i618.m_PersistentCalls)
  return i618
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i621 = data
  var i623 = i621[0]
  var i622 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i623.length; i += 1) {
    i622.add(request.d('UnityEngine.Events.PersistentCall', i623[i + 0]));
  }
  i620.m_Calls = i622
  return i620
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'm_Target')
  i626.m_TargetAssemblyTypeName = i627[2]
  i626.m_MethodName = i627[3]
  i626.m_Mode = i627[4]
  i626.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i627[5], i626.m_Arguments)
  i626.m_CallState = i627[6]
  return i626
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i629 = data
  i628.m_Mode = i629[0]
  i628.m_WrapAround = !!i629[1]
  request.r(i629[2], i629[3], 0, i628, 'm_SelectOnUp')
  request.r(i629[4], i629[5], 0, i628, 'm_SelectOnDown')
  request.r(i629[6], i629[7], 0, i628, 'm_SelectOnLeft')
  request.r(i629[8], i629[9], 0, i628, 'm_SelectOnRight')
  return i628
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i631 = data
  i630.m_NormalColor = new pc.Color(i631[0], i631[1], i631[2], i631[3])
  i630.m_HighlightedColor = new pc.Color(i631[4], i631[5], i631[6], i631[7])
  i630.m_PressedColor = new pc.Color(i631[8], i631[9], i631[10], i631[11])
  i630.m_SelectedColor = new pc.Color(i631[12], i631[13], i631[14], i631[15])
  i630.m_DisabledColor = new pc.Color(i631[16], i631[17], i631[18], i631[19])
  i630.m_ColorMultiplier = i631[20]
  i630.m_FadeDuration = i631[21]
  return i630
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'm_HighlightedSprite')
  request.r(i633[2], i633[3], 0, i632, 'm_PressedSprite')
  request.r(i633[4], i633[5], 0, i632, 'm_SelectedSprite')
  request.r(i633[6], i633[7], 0, i632, 'm_DisabledSprite')
  return i632
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i635 = data
  i634.m_NormalTrigger = i635[0]
  i634.m_HighlightedTrigger = i635[1]
  i634.m_PressedTrigger = i635[2]
  i634.m_SelectedTrigger = i635[3]
  i634.m_DisabledTrigger = i635[4]
  return i634
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i636 = root || request.c( 'DraggableItem' )
  var i637 = data
  i636.idDrag = i637[0]
  i636.isProcess = !!i637[1]
  return i636
}

Deserializers["DropSpawn"] = function (request, data, root) {
  var i638 = root || request.c( 'DropSpawn' )
  var i639 = data
  var i641 = i639[0]
  var i640 = []
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 2, i640, '')
  }
  i638.spawnPrefabs = i640
  request.r(i639[1], i639[2], 0, i638, 'transSpawn')
  request.r(i639[3], i639[4], 0, i638, 'idleHumman')
  request.r(i639[5], i639[6], 0, i638, 'moveHumman')
  var i643 = i639[7]
  var i642 = []
  for(var i = 0; i < i643.length; i += 3) {
    i642.push( new pc.Vec3( i643[i + 0], i643[i + 1], i643[i + 2] ) );
  }
  i638.transMoves = i642
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i647 = data
  i646.usedByComposite = !!i647[0]
  i646.autoTiling = !!i647[1]
  var i649 = i647[2]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
  var i651 = i649[i + 0]
  var i650 = []
  for(var i = 0; i < i651.length; i += 2) {
    i650.push( new pc.Vec2( i651[i + 0], i651[i + 1] ) );
  }
    i648.push( i650 );
  }
  i646.points = i648
  i646.enabled = !!i647[3]
  i646.isTrigger = !!i647[4]
  i646.usedByEffector = !!i647[5]
  i646.density = i647[6]
  i646.offset = new pc.Vec2( i647[7], i647[8] )
  request.r(i647[9], i647[10], 0, i646, 'material')
  return i646
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i659 = data
  i658.m_Spacing = i659[0]
  i658.m_ChildForceExpandWidth = !!i659[1]
  i658.m_ChildForceExpandHeight = !!i659[2]
  i658.m_ChildControlWidth = !!i659[3]
  i658.m_ChildControlHeight = !!i659[4]
  i658.m_ChildScaleWidth = !!i659[5]
  i658.m_ChildScaleHeight = !!i659[6]
  i658.m_ReverseArrangement = !!i659[7]
  i658.m_Padding = UnityEngine.RectOffset.FromPaddings(i659[8], i659[9], i659[10], i659[11])
  i658.m_ChildAlignment = i659[12]
  return i658
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i660 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i661 = data
  i660.targetIsSelf = !!i661[0]
  request.r(i661[1], i661[2], 0, i660, 'targetGO')
  i660.tweenTargetIsTargetGO = !!i661[3]
  i660.delay = i661[4]
  i660.duration = i661[5]
  i660.easeType = i661[6]
  i660.easeCurve = new pc.AnimationCurve( { keys_flow: i661[7] } )
  i660.loopType = i661[8]
  i660.loops = i661[9]
  i660.id = i661[10]
  i660.isRelative = !!i661[11]
  i660.isFrom = !!i661[12]
  i660.isIndependentUpdate = !!i661[13]
  i660.autoKill = !!i661[14]
  i660.autoGenerate = !!i661[15]
  i660.isActive = !!i661[16]
  i660.isValid = !!i661[17]
  request.r(i661[18], i661[19], 0, i660, 'target')
  i660.animationType = i661[20]
  i660.targetType = i661[21]
  i660.forcedTargetType = i661[22]
  i660.autoPlay = !!i661[23]
  i660.useTargetAsV3 = !!i661[24]
  i660.endValueFloat = i661[25]
  i660.endValueV3 = new pc.Vec3( i661[26], i661[27], i661[28] )
  i660.endValueV2 = new pc.Vec2( i661[29], i661[30] )
  i660.endValueColor = new pc.Color(i661[31], i661[32], i661[33], i661[34])
  i660.endValueString = i661[35]
  i660.endValueRect = UnityEngine.Rect.MinMaxRect(i661[36], i661[37], i661[38], i661[39])
  request.r(i661[40], i661[41], 0, i660, 'endValueTransform')
  i660.optionalBool0 = !!i661[42]
  i660.optionalBool1 = !!i661[43]
  i660.optionalFloat0 = i661[44]
  i660.optionalInt0 = i661[45]
  i660.optionalRotationMode = i661[46]
  i660.optionalScrambleMode = i661[47]
  i660.optionalShakeRandomnessMode = i661[48]
  i660.optionalString = i661[49]
  i660.updateType = i661[50]
  i660.isSpeedBased = !!i661[51]
  i660.hasOnStart = !!i661[52]
  i660.hasOnPlay = !!i661[53]
  i660.hasOnUpdate = !!i661[54]
  i660.hasOnStepComplete = !!i661[55]
  i660.hasOnComplete = !!i661[56]
  i660.hasOnTweenCreated = !!i661[57]
  i660.hasOnRewind = !!i661[58]
  i660.onStart = request.d('UnityEngine.Events.UnityEvent', i661[59], i660.onStart)
  i660.onPlay = request.d('UnityEngine.Events.UnityEvent', i661[60], i660.onPlay)
  i660.onUpdate = request.d('UnityEngine.Events.UnityEvent', i661[61], i660.onUpdate)
  i660.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i661[62], i660.onStepComplete)
  i660.onComplete = request.d('UnityEngine.Events.UnityEvent', i661[63], i660.onComplete)
  i660.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i661[64], i660.onTweenCreated)
  i660.onRewind = request.d('UnityEngine.Events.UnityEvent', i661[65], i660.onRewind)
  return i660
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i663 = data
  i662.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i663[0], i662.m_PersistentCalls)
  return i662
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'm_ObjectArgument')
  i664.m_ObjectArgumentAssemblyTypeName = i665[2]
  i664.m_IntArgument = i665[3]
  i664.m_FloatArgument = i665[4]
  i664.m_StringArgument = i665[5]
  i664.m_BoolArgument = !!i665[6]
  return i664
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i666 = root || request.c( 'LunaManager' )
  var i667 = data
  var i669 = i667[0]
  var i668 = []
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 2, i668, '')
  }
  i666.lstBtnInstall = i668
  request.r(i667[1], i667[2], 0, i666, 'StartCard')
  request.r(i667[3], i667[4], 0, i666, 'EndCard')
  request.r(i667[5], i667[6], 0, i666, 'Parent')
  request.r(i667[7], i667[8], 0, i666, 'LoseTitle')
  var i671 = i667[9]
  var i670 = []
  for(var i = 0; i < i671.length; i += 2) {
  request.r(i671[i + 0], i671[i + 1], 2, i670, '')
  }
  i666.tutorial = i670
  i666.isDrag = !!i667[10]
  i666.countPlay = i667[11]
  i666.countPlayFinal = i667[12]
  i666.countPlayMax = i667[13]
  i666.timeDropFinal = i667[14]
  i666.colorBG = new pc.Color(i667[15], i667[16], i667[17], i667[18])
  request.r(i667[19], i667[20], 0, i666, 'texture2D')
  request.r(i667[21], i667[22], 0, i666, 'rawImageBG')
  request.r(i667[23], i667[24], 0, i666, 'textProgess')
  request.r(i667[25], i667[26], 0, i666, 'imgProgess')
  request.r(i667[27], i667[28], 0, i666, 'timeText')
  return i666
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.Mask' )
  var i675 = data
  i674.m_ShowMaskGraphic = !!i675[0]
  return i674
}

Deserializers["AudioController"] = function (request, data, root) {
  var i676 = root || request.c( 'AudioController' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'bgmSource')
  request.r(i677[2], i677[3], 0, i676, 'sfxSource')
  var i679 = i677[4]
  var i678 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i679.length; i += 1) {
    i678.add(request.d('AudioEntry', i679[i + 0]));
  }
  i676.audioEntries = i678
  return i676
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i682 = root || request.c( 'AudioEntry' )
  var i683 = data
  i682.key = i683[0]
  request.r(i683[1], i683[2], 0, i682, 'clip')
  i682.volume = i683[3]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i685 = data
  i684.ambientIntensity = i685[0]
  i684.reflectionIntensity = i685[1]
  i684.ambientMode = i685[2]
  i684.ambientLight = new pc.Color(i685[3], i685[4], i685[5], i685[6])
  i684.ambientSkyColor = new pc.Color(i685[7], i685[8], i685[9], i685[10])
  i684.ambientGroundColor = new pc.Color(i685[11], i685[12], i685[13], i685[14])
  i684.ambientEquatorColor = new pc.Color(i685[15], i685[16], i685[17], i685[18])
  i684.fogColor = new pc.Color(i685[19], i685[20], i685[21], i685[22])
  i684.fogEndDistance = i685[23]
  i684.fogStartDistance = i685[24]
  i684.fogDensity = i685[25]
  i684.fog = !!i685[26]
  request.r(i685[27], i685[28], 0, i684, 'skybox')
  i684.fogMode = i685[29]
  var i687 = i685[30]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i687[i + 0]) );
  }
  i684.lightmaps = i686
  i684.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i685[31], i684.lightProbes)
  i684.lightmapsMode = i685[32]
  i684.mixedBakeMode = i685[33]
  i684.environmentLightingMode = i685[34]
  i684.ambientProbe = new pc.SphericalHarmonicsL2(i685[35])
  i684.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i685[36])
  i684.useReferenceAmbientProbe = !!i685[37]
  request.r(i685[38], i685[39], 0, i684, 'customReflection')
  request.r(i685[40], i685[41], 0, i684, 'defaultReflection')
  i684.defaultReflectionMode = i685[42]
  i684.defaultReflectionResolution = i685[43]
  i684.sunLightObjectId = i685[44]
  i684.pixelLightCount = i685[45]
  i684.defaultReflectionHDR = !!i685[46]
  i684.hasLightDataAsset = !!i685[47]
  i684.hasManualGenerate = !!i685[48]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'lightmapColor')
  request.r(i691[2], i691[3], 0, i690, 'lightmapDirection')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i692 = root || new UnityEngine.LightProbes()
  var i693 = data
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i699 = data
  var i701 = i699[0]
  var i700 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i701.length; i += 1) {
    i700.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i701[i + 0]));
  }
  i698.ShaderCompilationErrors = i700
  i698.name = i699[1]
  i698.guid = i699[2]
  var i703 = i699[3]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( i703[i + 0] );
  }
  i698.shaderDefinedKeywords = i702
  var i705 = i699[4]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i705[i + 0]) );
  }
  i698.passes = i704
  var i707 = i699[5]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i707[i + 0]) );
  }
  i698.usePasses = i706
  var i709 = i699[6]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i709[i + 0]) );
  }
  i698.defaultParameterValues = i708
  request.r(i699[7], i699[8], 0, i698, 'unityFallbackShader')
  i698.readDepth = !!i699[9]
  i698.isCreatedByShaderGraph = !!i699[10]
  i698.disableBatching = !!i699[11]
  i698.compiled = !!i699[12]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i713 = data
  i712.shaderName = i713[0]
  i712.errorMessage = i713[1]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i716 = root || new pc.UnityShaderPass()
  var i717 = data
  i716.id = i717[0]
  i716.subShaderIndex = i717[1]
  i716.name = i717[2]
  i716.passType = i717[3]
  i716.grabPassTextureName = i717[4]
  i716.usePass = !!i717[5]
  i716.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[6], i716.zTest)
  i716.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[7], i716.zWrite)
  i716.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[8], i716.culling)
  i716.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i717[9], i716.blending)
  i716.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i717[10], i716.alphaBlending)
  i716.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[11], i716.colorWriteMask)
  i716.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[12], i716.offsetUnits)
  i716.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[13], i716.offsetFactor)
  i716.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[14], i716.stencilRef)
  i716.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[15], i716.stencilReadMask)
  i716.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[16], i716.stencilWriteMask)
  i716.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i717[17], i716.stencilOp)
  i716.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i717[18], i716.stencilOpFront)
  i716.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i717[19], i716.stencilOpBack)
  var i719 = i717[20]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i719[i + 0]) );
  }
  i716.tags = i718
  var i721 = i717[21]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( i721[i + 0] );
  }
  i716.passDefinedKeywords = i720
  var i723 = i717[22]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i723[i + 0]) );
  }
  i716.passDefinedKeywordGroups = i722
  var i725 = i717[23]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i725[i + 0]) );
  }
  i716.variants = i724
  var i727 = i717[24]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i727[i + 0]) );
  }
  i716.excludedVariants = i726
  i716.hasDepthReader = !!i717[25]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i729 = data
  i728.val = i729[0]
  i728.name = i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i731 = data
  i730.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[0], i730.src)
  i730.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[1], i730.dst)
  i730.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[2], i730.op)
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i733 = data
  i732.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[0], i732.pass)
  i732.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[1], i732.fail)
  i732.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[2], i732.zFail)
  i732.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[3], i732.comp)
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i737 = data
  i736.name = i737[0]
  i736.value = i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i741 = data
  var i743 = i741[0]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( i743[i + 0] );
  }
  i740.keywords = i742
  i740.hasDiscard = !!i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i747 = data
  i746.passId = i747[0]
  i746.subShaderIndex = i747[1]
  var i749 = i747[2]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( i749[i + 0] );
  }
  i746.keywords = i748
  i746.vertexProgram = i747[3]
  i746.fragmentProgram = i747[4]
  i746.exportedForWebGl2 = !!i747[5]
  i746.readDepth = !!i747[6]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'shader')
  i752.pass = i753[2]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i757 = data
  i756.name = i757[0]
  i756.type = i757[1]
  i756.value = new pc.Vec4( i757[2], i757[3], i757[4], i757[5] )
  i756.textureValue = i757[6]
  i756.shaderPropertyFlag = i757[7]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i759 = data
  i758.name = i759[0]
  request.r(i759[1], i759[2], 0, i758, 'texture')
  i758.aabb = i759[3]
  i758.vertices = i759[4]
  i758.triangles = i759[5]
  i758.textureRect = UnityEngine.Rect.MinMaxRect(i759[6], i759[7], i759[8], i759[9])
  i758.packedRect = UnityEngine.Rect.MinMaxRect(i759[10], i759[11], i759[12], i759[13])
  i758.border = new pc.Vec4( i759[14], i759[15], i759[16], i759[17] )
  i758.transparency = i759[18]
  i758.bounds = i759[19]
  i758.pixelsPerUnit = i759[20]
  i758.textureWidth = i759[21]
  i758.textureHeight = i759[22]
  i758.nativeSize = new pc.Vec2( i759[23], i759[24] )
  i758.pivot = new pc.Vec2( i759[25], i759[26] )
  i758.textureRectOffset = new pc.Vec2( i759[27], i759[28] )
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i761 = data
  i760.name = i761[0]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i763 = data
  i762.name = i763[0]
  i762.ascent = i763[1]
  i762.originalLineHeight = i763[2]
  i762.fontSize = i763[3]
  var i765 = i763[4]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i765[i + 0]) );
  }
  i762.characterInfo = i764
  request.r(i763[5], i763[6], 0, i762, 'texture')
  i762.originalFontSize = i763[7]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i769 = data
  i768.index = i769[0]
  i768.advance = i769[1]
  i768.bearing = i769[2]
  i768.glyphWidth = i769[3]
  i768.glyphHeight = i769[4]
  i768.minX = i769[5]
  i768.maxX = i769[6]
  i768.minY = i769[7]
  i768.maxY = i769[8]
  i768.uvBottomLeftX = i769[9]
  i768.uvBottomLeftY = i769[10]
  i768.uvBottomRightX = i769[11]
  i768.uvBottomRightY = i769[12]
  i768.uvTopLeftX = i769[13]
  i768.uvTopLeftY = i769[14]
  i768.uvTopRightX = i769[15]
  i768.uvTopRightY = i769[16]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i771 = data
  i770.name = i771[0]
  i770.bytes64 = i771[1]
  i770.data = i771[2]
  return i770
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i772 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i773 = data
  var i775 = i773[0]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i772.atlasAssets = i774
  i772.scale = i773[1]
  request.r(i773[2], i773[3], 0, i772, 'skeletonJSON')
  i772.isUpgradingBlendModeMaterials = !!i773[4]
  i772.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i773[5], i772.blendModeMaterials)
  var i777 = i773[6]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 1, i776, '')
  }
  i772.skeletonDataModifiers = i776
  var i779 = i773[7]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( i779[i + 0] );
  }
  i772.fromAnimation = i778
  var i781 = i773[8]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( i781[i + 0] );
  }
  i772.toAnimation = i780
  i772.duration = i773[9]
  i772.defaultMix = i773[10]
  request.r(i773[11], i773[12], 0, i772, 'controller')
  return i772
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i784 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i785 = data
  i784.applyAdditiveMaterial = !!i785[0]
  var i787 = i785[1]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i787[i + 0]));
  }
  i784.additiveMaterials = i786
  var i789 = i785[2]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i789.length; i += 1) {
    i788.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i789[i + 0]));
  }
  i784.multiplyMaterials = i788
  var i791 = i785[3]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i791[i + 0]));
  }
  i784.screenMaterials = i790
  i784.requiresBlendModeMaterials = !!i785[4]
  return i784
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i794 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i795 = data
  i794.pageName = i795[0]
  request.r(i795[1], i795[2], 0, i794, 'material')
  return i794
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i798 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'atlasFile')
  var i801 = i799[2]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i798.materials = i800
  i798.textureLoadingMode = i799[3]
  request.r(i799[4], i799[5], 0, i798, 'onDemandTextureLoader')
  return i798
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i802 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'atlas')
  i802.normalStyle = i803[2]
  i802.normalSpacingOffset = i803[3]
  i802.boldStyle = i803[4]
  i802.boldSpacing = i803[5]
  i802.italicStyle = i803[6]
  i802.tabSize = i803[7]
  i802.hashCode = i803[8]
  request.r(i803[9], i803[10], 0, i802, 'material')
  i802.materialHashCode = i803[11]
  i802.m_Version = i803[12]
  i802.m_SourceFontFileGUID = i803[13]
  request.r(i803[14], i803[15], 0, i802, 'm_SourceFontFile_EditorRef')
  request.r(i803[16], i803[17], 0, i802, 'm_SourceFontFile')
  i802.m_AtlasPopulationMode = i803[18]
  i802.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i803[19], i802.m_FaceInfo)
  var i805 = i803[20]
  var i804 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i805.length; i += 1) {
    i804.add(request.d('UnityEngine.TextCore.Glyph', i805[i + 0]));
  }
  i802.m_GlyphTable = i804
  var i807 = i803[21]
  var i806 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i807.length; i += 1) {
    i806.add(request.d('TMPro.TMP_Character', i807[i + 0]));
  }
  i802.m_CharacterTable = i806
  var i809 = i803[22]
  var i808 = []
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 2, i808, '')
  }
  i802.m_AtlasTextures = i808
  i802.m_AtlasTextureIndex = i803[23]
  i802.m_IsMultiAtlasTexturesEnabled = !!i803[24]
  i802.m_ClearDynamicDataOnBuild = !!i803[25]
  var i811 = i803[26]
  var i810 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i811.length; i += 1) {
    i810.add(request.d('UnityEngine.TextCore.GlyphRect', i811[i + 0]));
  }
  i802.m_UsedGlyphRects = i810
  var i813 = i803[27]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i813.length; i += 1) {
    i812.add(request.d('UnityEngine.TextCore.GlyphRect', i813[i + 0]));
  }
  i802.m_FreeGlyphRects = i812
  i802.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i803[28], i802.m_fontInfo)
  i802.m_AtlasWidth = i803[29]
  i802.m_AtlasHeight = i803[30]
  i802.m_AtlasPadding = i803[31]
  i802.m_AtlasRenderMode = i803[32]
  var i815 = i803[33]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i815.length; i += 1) {
    i814.add(request.d('TMPro.TMP_Glyph', i815[i + 0]));
  }
  i802.m_glyphInfoList = i814
  i802.m_KerningTable = request.d('TMPro.KerningTable', i803[34], i802.m_KerningTable)
  i802.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i803[35], i802.m_FontFeatureTable)
  var i817 = i803[36]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 1, i816, '')
  }
  i802.fallbackFontAssets = i816
  var i819 = i803[37]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 1, i818, '')
  }
  i802.m_FallbackFontAssetTable = i818
  i802.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i803[38], i802.m_CreationSettings)
  var i821 = i803[39]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('TMPro.TMP_FontWeightPair', i821[i + 0]) );
  }
  i802.m_FontWeightTable = i820
  var i823 = i803[40]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('TMPro.TMP_FontWeightPair', i823[i + 0]) );
  }
  i802.fontWeights = i822
  return i802
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i825 = data
  i824.m_FaceIndex = i825[0]
  i824.m_FamilyName = i825[1]
  i824.m_StyleName = i825[2]
  i824.m_PointSize = i825[3]
  i824.m_Scale = i825[4]
  i824.m_UnitsPerEM = i825[5]
  i824.m_LineHeight = i825[6]
  i824.m_AscentLine = i825[7]
  i824.m_CapLine = i825[8]
  i824.m_MeanLine = i825[9]
  i824.m_Baseline = i825[10]
  i824.m_DescentLine = i825[11]
  i824.m_SuperscriptOffset = i825[12]
  i824.m_SuperscriptSize = i825[13]
  i824.m_SubscriptOffset = i825[14]
  i824.m_SubscriptSize = i825[15]
  i824.m_UnderlineOffset = i825[16]
  i824.m_UnderlineThickness = i825[17]
  i824.m_StrikethroughOffset = i825[18]
  i824.m_StrikethroughThickness = i825[19]
  i824.m_TabWidth = i825[20]
  return i824
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i829 = data
  i828.m_Index = i829[0]
  i828.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i829[1], i828.m_Metrics)
  i828.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i829[2], i828.m_GlyphRect)
  i828.m_Scale = i829[3]
  i828.m_AtlasIndex = i829[4]
  i828.m_ClassDefinitionType = i829[5]
  return i828
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i831 = data
  i830.m_Width = i831[0]
  i830.m_Height = i831[1]
  i830.m_HorizontalBearingX = i831[2]
  i830.m_HorizontalBearingY = i831[3]
  i830.m_HorizontalAdvance = i831[4]
  return i830
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i833 = data
  i832.m_X = i833[0]
  i832.m_Y = i833[1]
  i832.m_Width = i833[2]
  i832.m_Height = i833[3]
  return i832
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.TMP_Character' )
  var i837 = data
  i836.m_ElementType = i837[0]
  i836.m_Unicode = i837[1]
  i836.m_GlyphIndex = i837[2]
  i836.m_Scale = i837[3]
  return i836
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i843 = data
  i842.Name = i843[0]
  i842.PointSize = i843[1]
  i842.Scale = i843[2]
  i842.CharacterCount = i843[3]
  i842.LineHeight = i843[4]
  i842.Baseline = i843[5]
  i842.Ascender = i843[6]
  i842.CapHeight = i843[7]
  i842.Descender = i843[8]
  i842.CenterLine = i843[9]
  i842.SuperscriptOffset = i843[10]
  i842.SubscriptOffset = i843[11]
  i842.SubSize = i843[12]
  i842.Underline = i843[13]
  i842.UnderlineThickness = i843[14]
  i842.strikethrough = i843[15]
  i842.strikethroughThickness = i843[16]
  i842.TabWidth = i843[17]
  i842.Padding = i843[18]
  i842.AtlasWidth = i843[19]
  i842.AtlasHeight = i843[20]
  return i842
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.TMP_Glyph' )
  var i847 = data
  i846.id = i847[0]
  i846.x = i847[1]
  i846.y = i847[2]
  i846.width = i847[3]
  i846.height = i847[4]
  i846.xOffset = i847[5]
  i846.yOffset = i847[6]
  i846.xAdvance = i847[7]
  i846.scale = i847[8]
  return i846
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i848 = root || request.c( 'TMPro.KerningTable' )
  var i849 = data
  var i851 = i849[0]
  var i850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i851.length; i += 1) {
    i850.add(request.d('TMPro.KerningPair', i851[i + 0]));
  }
  i848.kerningPairs = i850
  return i848
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.KerningPair' )
  var i855 = data
  i854.xOffset = i855[0]
  i854.m_FirstGlyph = i855[1]
  i854.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i855[2], i854.m_FirstGlyphAdjustments)
  i854.m_SecondGlyph = i855[3]
  i854.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i855[4], i854.m_SecondGlyphAdjustments)
  i854.m_IgnoreSpacingAdjustments = !!i855[5]
  return i854
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i856 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i857 = data
  var i859 = i857[0]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i859.length; i += 1) {
    i858.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i859[i + 0]));
  }
  i856.m_GlyphPairAdjustmentRecords = i858
  return i856
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i863 = data
  i862.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i863[0], i862.m_FirstAdjustmentRecord)
  i862.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i863[1], i862.m_SecondAdjustmentRecord)
  i862.m_FeatureLookupFlags = i863[2]
  return i862
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i867 = data
  i866.sourceFontFileName = i867[0]
  i866.sourceFontFileGUID = i867[1]
  i866.pointSizeSamplingMode = i867[2]
  i866.pointSize = i867[3]
  i866.padding = i867[4]
  i866.packingMode = i867[5]
  i866.atlasWidth = i867[6]
  i866.atlasHeight = i867[7]
  i866.characterSetSelectionMode = i867[8]
  i866.characterSequence = i867[9]
  i866.referencedFontAssetGUID = i867[10]
  i866.referencedTextAssetGUID = i867[11]
  i866.fontStyle = i867[12]
  i866.fontStyleModifier = i867[13]
  i866.renderMode = i867[14]
  i866.includeFontFeatures = !!i867[15]
  return i866
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'regularTypeface')
  request.r(i871[2], i871[3], 0, i870, 'italicTypeface')
  return i870
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i872 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i873 = data
  i872.useSafeMode = !!i873[0]
  i872.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i873[1], i872.safeModeOptions)
  i872.timeScale = i873[2]
  i872.unscaledTimeScale = i873[3]
  i872.useSmoothDeltaTime = !!i873[4]
  i872.maxSmoothUnscaledTime = i873[5]
  i872.rewindCallbackMode = i873[6]
  i872.showUnityEditorReport = !!i873[7]
  i872.logBehaviour = i873[8]
  i872.drawGizmos = !!i873[9]
  i872.defaultRecyclable = !!i873[10]
  i872.defaultAutoPlay = i873[11]
  i872.defaultUpdateType = i873[12]
  i872.defaultTimeScaleIndependent = !!i873[13]
  i872.defaultEaseType = i873[14]
  i872.defaultEaseOvershootOrAmplitude = i873[15]
  i872.defaultEasePeriod = i873[16]
  i872.defaultAutoKill = !!i873[17]
  i872.defaultLoopType = i873[18]
  i872.debugMode = !!i873[19]
  i872.debugStoreTargetId = !!i873[20]
  i872.showPreviewPanel = !!i873[21]
  i872.storeSettingsLocation = i873[22]
  i872.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i873[23], i872.modules)
  i872.createASMDEF = !!i873[24]
  i872.showPlayingTweens = !!i873[25]
  i872.showPausedTweens = !!i873[26]
  return i872
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i874 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i875 = data
  i874.logBehaviour = i875[0]
  i874.nestedTweenFailureBehaviour = i875[1]
  return i874
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i876 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i877 = data
  i876.showPanel = !!i877[0]
  i876.audioEnabled = !!i877[1]
  i876.physicsEnabled = !!i877[2]
  i876.physics2DEnabled = !!i877[3]
  i876.spriteEnabled = !!i877[4]
  i876.uiEnabled = !!i877[5]
  i876.textMeshProEnabled = !!i877[6]
  i876.tk2DEnabled = !!i877[7]
  i876.deAudioEnabled = !!i877[8]
  i876.deUnityExtendedEnabled = !!i877[9]
  i876.epoOutlineEnabled = !!i877[10]
  return i876
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.TMP_Settings' )
  var i879 = data
  i878.m_enableWordWrapping = !!i879[0]
  i878.m_enableKerning = !!i879[1]
  i878.m_enableExtraPadding = !!i879[2]
  i878.m_enableTintAllSprites = !!i879[3]
  i878.m_enableParseEscapeCharacters = !!i879[4]
  i878.m_EnableRaycastTarget = !!i879[5]
  i878.m_GetFontFeaturesAtRuntime = !!i879[6]
  i878.m_missingGlyphCharacter = i879[7]
  i878.m_warningsDisabled = !!i879[8]
  request.r(i879[9], i879[10], 0, i878, 'm_defaultFontAsset')
  i878.m_defaultFontAssetPath = i879[11]
  i878.m_defaultFontSize = i879[12]
  i878.m_defaultAutoSizeMinRatio = i879[13]
  i878.m_defaultAutoSizeMaxRatio = i879[14]
  i878.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i879[15], i879[16] )
  i878.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i879[17], i879[18] )
  i878.m_autoSizeTextContainer = !!i879[19]
  i878.m_IsTextObjectScaleStatic = !!i879[20]
  var i881 = i879[21]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 1, i880, '')
  }
  i878.m_fallbackFontAssets = i880
  i878.m_matchMaterialPreset = !!i879[22]
  request.r(i879[23], i879[24], 0, i878, 'm_defaultSpriteAsset')
  i878.m_defaultSpriteAssetPath = i879[25]
  i878.m_enableEmojiSupport = !!i879[26]
  i878.m_MissingCharacterSpriteUnicode = i879[27]
  i878.m_defaultColorGradientPresetsPath = i879[28]
  request.r(i879[29], i879[30], 0, i878, 'm_defaultStyleSheet')
  i878.m_StyleSheetsResourcePath = i879[31]
  request.r(i879[32], i879[33], 0, i878, 'm_leadingCharacters')
  request.r(i879[34], i879[35], 0, i878, 'm_followingCharacters')
  i878.m_UseModernHangulLineBreakingRules = !!i879[36]
  return i878
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'spriteSheet')
  var i885 = i883[2]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(request.d('TMPro.TMP_Sprite', i885[i + 0]));
  }
  i882.spriteInfoList = i884
  var i887 = i883[3]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 1, i886, '')
  }
  i882.fallbackSpriteAssets = i886
  i882.hashCode = i883[4]
  request.r(i883[5], i883[6], 0, i882, 'material')
  i882.materialHashCode = i883[7]
  i882.m_Version = i883[8]
  i882.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i883[9], i882.m_FaceInfo)
  var i889 = i883[10]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(request.d('TMPro.TMP_SpriteCharacter', i889[i + 0]));
  }
  i882.m_SpriteCharacterTable = i888
  var i891 = i883[11]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i891.length; i += 1) {
    i890.add(request.d('TMPro.TMP_SpriteGlyph', i891[i + 0]));
  }
  i882.m_SpriteGlyphTable = i890
  return i882
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i894 = root || request.c( 'TMPro.TMP_Sprite' )
  var i895 = data
  i894.name = i895[0]
  i894.hashCode = i895[1]
  i894.unicode = i895[2]
  i894.pivot = new pc.Vec2( i895[3], i895[4] )
  request.r(i895[5], i895[6], 0, i894, 'sprite')
  i894.id = i895[7]
  i894.x = i895[8]
  i894.y = i895[9]
  i894.width = i895[10]
  i894.height = i895[11]
  i894.xOffset = i895[12]
  i894.yOffset = i895[13]
  i894.xAdvance = i895[14]
  i894.scale = i895[15]
  return i894
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i900 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i901 = data
  i900.m_Name = i901[0]
  i900.m_HashCode = i901[1]
  i900.m_ElementType = i901[2]
  i900.m_Unicode = i901[3]
  i900.m_GlyphIndex = i901[4]
  i900.m_Scale = i901[5]
  return i900
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i904 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'sprite')
  i904.m_Index = i905[2]
  i904.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i905[3], i904.m_Metrics)
  i904.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i905[4], i904.m_GlyphRect)
  i904.m_Scale = i905[5]
  i904.m_AtlasIndex = i905[6]
  i904.m_ClassDefinitionType = i905[7]
  return i904
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i906 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i907 = data
  var i909 = i907[0]
  var i908 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i909.length; i += 1) {
    i908.add(request.d('TMPro.TMP_Style', i909[i + 0]));
  }
  i906.m_StyleList = i908
  return i906
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.TMP_Style' )
  var i913 = data
  i912.m_Name = i913[0]
  i912.m_HashCode = i913[1]
  i912.m_OpeningDefinition = i913[2]
  i912.m_ClosingDefinition = i913[3]
  i912.m_OpeningTagArray = i913[4]
  i912.m_ClosingTagArray = i913[5]
  i912.m_OpeningTagUnicodeArray = i913[6]
  i912.m_ClosingTagUnicodeArray = i913[7]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i915 = data
  var i917 = i915[0]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i917[i + 0]) );
  }
  i914.files = i916
  i914.componentToPrefabIds = i915[1]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i921 = data
  i920.path = i921[0]
  request.r(i921[1], i921[2], 0, i920, 'unityObject')
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i923 = data
  var i925 = i923[0]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i925[i + 0]) );
  }
  i922.scriptsExecutionOrder = i924
  var i927 = i923[1]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i927[i + 0]) );
  }
  i922.sortingLayers = i926
  var i929 = i923[2]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i929[i + 0]) );
  }
  i922.cullingLayers = i928
  i922.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i923[3], i922.timeSettings)
  i922.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i923[4], i922.physicsSettings)
  i922.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i923[5], i922.physics2DSettings)
  i922.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i923[6], i922.qualitySettings)
  i922.enableRealtimeShadows = !!i923[7]
  i922.enableAutoInstancing = !!i923[8]
  i922.enableStaticBatching = !!i923[9]
  i922.enableDynamicBatching = !!i923[10]
  i922.lightmapEncodingQuality = i923[11]
  i922.desiredColorSpace = i923[12]
  var i931 = i923[13]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( i931[i + 0] );
  }
  i922.allTags = i930
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i935 = data
  i934.name = i935[0]
  i934.value = i935[1]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i939 = data
  i938.id = i939[0]
  i938.name = i939[1]
  i938.value = i939[2]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i943 = data
  i942.id = i943[0]
  i942.name = i943[1]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i945 = data
  i944.fixedDeltaTime = i945[0]
  i944.maximumDeltaTime = i945[1]
  i944.timeScale = i945[2]
  i944.maximumParticleTimestep = i945[3]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i947 = data
  i946.gravity = new pc.Vec3( i947[0], i947[1], i947[2] )
  i946.defaultSolverIterations = i947[3]
  i946.bounceThreshold = i947[4]
  i946.autoSyncTransforms = !!i947[5]
  i946.autoSimulation = !!i947[6]
  var i949 = i947[7]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i949[i + 0]) );
  }
  i946.collisionMatrix = i948
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i953 = data
  i952.enabled = !!i953[0]
  i952.layerId = i953[1]
  i952.otherLayerId = i953[2]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'material')
  i954.gravity = new pc.Vec2( i955[2], i955[3] )
  i954.positionIterations = i955[4]
  i954.velocityIterations = i955[5]
  i954.velocityThreshold = i955[6]
  i954.maxLinearCorrection = i955[7]
  i954.maxAngularCorrection = i955[8]
  i954.maxTranslationSpeed = i955[9]
  i954.maxRotationSpeed = i955[10]
  i954.baumgarteScale = i955[11]
  i954.baumgarteTOIScale = i955[12]
  i954.timeToSleep = i955[13]
  i954.linearSleepTolerance = i955[14]
  i954.angularSleepTolerance = i955[15]
  i954.defaultContactOffset = i955[16]
  i954.autoSimulation = !!i955[17]
  i954.queriesHitTriggers = !!i955[18]
  i954.queriesStartInColliders = !!i955[19]
  i954.callbacksOnDisable = !!i955[20]
  i954.reuseCollisionCallbacks = !!i955[21]
  i954.autoSyncTransforms = !!i955[22]
  var i957 = i955[23]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i957[i + 0]) );
  }
  i954.collisionMatrix = i956
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i961 = data
  i960.enabled = !!i961[0]
  i960.layerId = i961[1]
  i960.otherLayerId = i961[2]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i963 = data
  var i965 = i963[0]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i965[i + 0]) );
  }
  i962.qualityLevels = i964
  var i967 = i963[1]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( i967[i + 0] );
  }
  i962.names = i966
  i962.shadows = i963[2]
  i962.anisotropicFiltering = i963[3]
  i962.antiAliasing = i963[4]
  i962.lodBias = i963[5]
  i962.shadowCascades = i963[6]
  i962.shadowDistance = i963[7]
  i962.shadowmaskMode = i963[8]
  i962.shadowProjection = i963[9]
  i962.shadowResolution = i963[10]
  i962.softParticles = !!i963[11]
  i962.softVegetation = !!i963[12]
  i962.activeColorSpace = i963[13]
  i962.desiredColorSpace = i963[14]
  i962.masterTextureLimit = i963[15]
  i962.maxQueuedFrames = i963[16]
  i962.particleRaycastBudget = i963[17]
  i962.pixelLightCount = i963[18]
  i962.realtimeReflectionProbes = !!i963[19]
  i962.shadowCascade2Split = i963[20]
  i962.shadowCascade4Split = new pc.Vec3( i963[21], i963[22], i963[23] )
  i962.streamingMipmapsActive = !!i963[24]
  i962.vSyncCount = i963[25]
  i962.asyncUploadBufferSize = i963[26]
  i962.asyncUploadTimeSlice = i963[27]
  i962.billboardsFaceCameraPosition = !!i963[28]
  i962.shadowNearPlaneOffset = i963[29]
  i962.streamingMipmapsMemoryBudget = i963[30]
  i962.maximumLODLevel = i963[31]
  i962.streamingMipmapsAddAllCameras = !!i963[32]
  i962.streamingMipmapsMaxLevelReduction = i963[33]
  i962.streamingMipmapsRenderersPerFrame = i963[34]
  i962.resolutionScalingFixedDPIFactor = i963[35]
  i962.streamingMipmapsMaxFileIORequests = i963[36]
  i962.currentQualityLevel = i963[37]
  return i962
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i971 = data
  i970.xPlacement = i971[0]
  i970.yPlacement = i971[1]
  i970.xAdvance = i971[2]
  i970.yAdvance = i971[3]
  return i970
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i973 = data
  i972.m_GlyphIndex = i973[0]
  i972.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i973[1], i972.m_GlyphValueRecord)
  return i972
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i974 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i975 = data
  i974.m_XPlacement = i975[0]
  i974.m_YPlacement = i975[1]
  i974.m_XAdvance = i975[2]
  i974.m_YAdvance = i975[3]
  return i974
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[11],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[11],"79":[80],"81":[82],"83":[82],"15":[2],"84":[85],"86":[87],"88":[85],"89":[2],"90":[2],"17":[15],"5":[3,2],"91":[2],"16":[15],"92":[2],"93":[2],"34":[2],"94":[2],"95":[2],"96":[2],"97":[2],"37":[2],"98":[2],"18":[3,2],"99":[2],"100":[2],"101":[2],"102":[2],"103":[3,2],"104":[2],"105":[13],"106":[13],"14":[13],"107":[13],"108":[11],"109":[11],"110":[111],"112":[11],"113":[114],"115":[2],"116":[3,2],"117":[80],"21":[3,2],"118":[119,80],"120":[80],"121":[80,122],"123":[57],"124":[65],"125":[114],"126":[127],"128":[2],"129":[80,2],"7":[2,3],"130":[2],"131":[3,2],"132":[80],"133":[3,2],"134":[2],"135":[85]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RawImage","UnityEngine.AudioSource","UnityEngine.AudioClip","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.MonoBehaviour","DropZone","UnityEngine.GameObject","UnityEngine.BoxCollider2D","DragSpawn","UnityEngine.CanvasGroup","ClickItem","UnityEngine.UI.Button","DraggableItem","DropSpawn","UnityEngine.PolygonCollider2D","UnityEngine.UI.HorizontalLayoutGroup","DG.Tweening.DOTweenAnimation","LunaManager","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "171.2";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BM_V02_ManhND_AnhPD";

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

Deserializers.buildID = "bd556b4b-f845-455f-9f45-af631d397e27";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

