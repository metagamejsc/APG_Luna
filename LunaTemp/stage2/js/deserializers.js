var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3514 = root || request.c( 'UnityEngine.JointSpring' )
  var i3515 = data
  i3514.spring = i3515[0]
  i3514.damper = i3515[1]
  i3514.targetPosition = i3515[2]
  return i3514
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3516 = root || request.c( 'UnityEngine.JointMotor' )
  var i3517 = data
  i3516.m_TargetVelocity = i3517[0]
  i3516.m_Force = i3517[1]
  i3516.m_FreeSpin = i3517[2]
  return i3516
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3518 = root || request.c( 'UnityEngine.JointLimits' )
  var i3519 = data
  i3518.m_Min = i3519[0]
  i3518.m_Max = i3519[1]
  i3518.m_Bounciness = i3519[2]
  i3518.m_BounceMinVelocity = i3519[3]
  i3518.m_ContactDistance = i3519[4]
  i3518.minBounce = i3519[5]
  i3518.maxBounce = i3519[6]
  return i3518
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3520 = root || request.c( 'UnityEngine.JointDrive' )
  var i3521 = data
  i3520.m_PositionSpring = i3521[0]
  i3520.m_PositionDamper = i3521[1]
  i3520.m_MaximumForce = i3521[2]
  i3520.m_UseAcceleration = i3521[3]
  return i3520
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3522 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3523 = data
  i3522.m_Spring = i3523[0]
  i3522.m_Damper = i3523[1]
  return i3522
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3524 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3525 = data
  i3524.m_Limit = i3525[0]
  i3524.m_Bounciness = i3525[1]
  i3524.m_ContactDistance = i3525[2]
  return i3524
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3526 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3527 = data
  i3526.m_ExtremumSlip = i3527[0]
  i3526.m_ExtremumValue = i3527[1]
  i3526.m_AsymptoteSlip = i3527[2]
  i3526.m_AsymptoteValue = i3527[3]
  i3526.m_Stiffness = i3527[4]
  return i3526
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3528 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3529 = data
  i3528.m_LowerAngle = i3529[0]
  i3528.m_UpperAngle = i3529[1]
  return i3528
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3530 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3531 = data
  i3530.m_MotorSpeed = i3531[0]
  i3530.m_MaximumMotorTorque = i3531[1]
  return i3530
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3532 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3533 = data
  i3532.m_DampingRatio = i3533[0]
  i3532.m_Frequency = i3533[1]
  i3532.m_Angle = i3533[2]
  return i3532
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3534 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3535 = data
  i3534.m_LowerTranslation = i3535[0]
  i3534.m_UpperTranslation = i3535[1]
  return i3534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3537 = data
  i3536.name = i3537[0]
  i3536.width = i3537[1]
  i3536.height = i3537[2]
  i3536.mipmapCount = i3537[3]
  i3536.anisoLevel = i3537[4]
  i3536.filterMode = i3537[5]
  i3536.hdr = !!i3537[6]
  i3536.format = i3537[7]
  i3536.wrapMode = i3537[8]
  i3536.alphaIsTransparency = !!i3537[9]
  i3536.alphaSource = i3537[10]
  i3536.graphicsFormat = i3537[11]
  i3536.sRGBTexture = !!i3537[12]
  i3536.desiredColorSpace = i3537[13]
  i3536.wrapU = i3537[14]
  i3536.wrapV = i3537[15]
  return i3536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3538 = root || new pc.UnityMaterial()
  var i3539 = data
  i3538.name = i3539[0]
  request.r(i3539[1], i3539[2], 0, i3538, 'shader')
  i3538.renderQueue = i3539[3]
  i3538.enableInstancing = !!i3539[4]
  var i3541 = i3539[5]
  var i3540 = []
  for(var i = 0; i < i3541.length; i += 1) {
    i3540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3541[i + 0]) );
  }
  i3538.floatParameters = i3540
  var i3543 = i3539[6]
  var i3542 = []
  for(var i = 0; i < i3543.length; i += 1) {
    i3542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3543[i + 0]) );
  }
  i3538.colorParameters = i3542
  var i3545 = i3539[7]
  var i3544 = []
  for(var i = 0; i < i3545.length; i += 1) {
    i3544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3545[i + 0]) );
  }
  i3538.vectorParameters = i3544
  var i3547 = i3539[8]
  var i3546 = []
  for(var i = 0; i < i3547.length; i += 1) {
    i3546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3547[i + 0]) );
  }
  i3538.textureParameters = i3546
  var i3549 = i3539[9]
  var i3548 = []
  for(var i = 0; i < i3549.length; i += 1) {
    i3548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3549[i + 0]) );
  }
  i3538.materialFlags = i3548
  return i3538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3553 = data
  i3552.name = i3553[0]
  i3552.value = i3553[1]
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3557 = data
  i3556.name = i3557[0]
  i3556.value = new pc.Color(i3557[1], i3557[2], i3557[3], i3557[4])
  return i3556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3561 = data
  i3560.name = i3561[0]
  i3560.value = new pc.Vec4( i3561[1], i3561[2], i3561[3], i3561[4] )
  return i3560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3565 = data
  i3564.name = i3565[0]
  request.r(i3565[1], i3565[2], 0, i3564, 'value')
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3569 = data
  i3568.name = i3569[0]
  i3568.enabled = !!i3569[1]
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3571 = data
  i3570.name = i3571[0]
  i3570.index = i3571[1]
  i3570.startup = !!i3571[2]
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3573 = data
  i3572.aspect = i3573[0]
  i3572.orthographic = !!i3573[1]
  i3572.orthographicSize = i3573[2]
  i3572.backgroundColor = new pc.Color(i3573[3], i3573[4], i3573[5], i3573[6])
  i3572.nearClipPlane = i3573[7]
  i3572.farClipPlane = i3573[8]
  i3572.fieldOfView = i3573[9]
  i3572.depth = i3573[10]
  i3572.clearFlags = i3573[11]
  i3572.cullingMask = i3573[12]
  i3572.rect = i3573[13]
  request.r(i3573[14], i3573[15], 0, i3572, 'targetTexture')
  i3572.usePhysicalProperties = !!i3573[16]
  i3572.focalLength = i3573[17]
  i3572.sensorSize = new pc.Vec2( i3573[18], i3573[19] )
  i3572.lensShift = new pc.Vec2( i3573[20], i3573[21] )
  i3572.gateFit = i3573[22]
  i3572.commandBufferCount = i3573[23]
  i3572.cameraType = i3573[24]
  i3572.enabled = !!i3573[25]
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3575 = data
  i3574.name = i3575[0]
  i3574.tagId = i3575[1]
  i3574.enabled = !!i3575[2]
  i3574.isStatic = !!i3575[3]
  i3574.layer = i3575[4]
  return i3574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3577 = data
  i3576.pivot = new pc.Vec2( i3577[0], i3577[1] )
  i3576.anchorMin = new pc.Vec2( i3577[2], i3577[3] )
  i3576.anchorMax = new pc.Vec2( i3577[4], i3577[5] )
  i3576.sizeDelta = new pc.Vec2( i3577[6], i3577[7] )
  i3576.anchoredPosition3D = new pc.Vec3( i3577[8], i3577[9], i3577[10] )
  i3576.rotation = new pc.Quat(i3577[11], i3577[12], i3577[13], i3577[14])
  i3576.scale = new pc.Vec3( i3577[15], i3577[16], i3577[17] )
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3579 = data
  i3578.planeDistance = i3579[0]
  i3578.referencePixelsPerUnit = i3579[1]
  i3578.isFallbackOverlay = !!i3579[2]
  i3578.renderMode = i3579[3]
  i3578.renderOrder = i3579[4]
  i3578.sortingLayerName = i3579[5]
  i3578.sortingOrder = i3579[6]
  i3578.scaleFactor = i3579[7]
  request.r(i3579[8], i3579[9], 0, i3578, 'worldCamera')
  i3578.overrideSorting = !!i3579[10]
  i3578.pixelPerfect = !!i3579[11]
  i3578.targetDisplay = i3579[12]
  i3578.overridePixelPerfect = !!i3579[13]
  i3578.enabled = !!i3579[14]
  return i3578
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3580 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3581 = data
  i3580.m_UiScaleMode = i3581[0]
  i3580.m_ReferencePixelsPerUnit = i3581[1]
  i3580.m_ScaleFactor = i3581[2]
  i3580.m_ReferenceResolution = new pc.Vec2( i3581[3], i3581[4] )
  i3580.m_ScreenMatchMode = i3581[5]
  i3580.m_MatchWidthOrHeight = i3581[6]
  i3580.m_PhysicalUnit = i3581[7]
  i3580.m_FallbackScreenDPI = i3581[8]
  i3580.m_DefaultSpriteDPI = i3581[9]
  i3580.m_DynamicPixelsPerUnit = i3581[10]
  i3580.m_PresetInfoIsWorld = !!i3581[11]
  return i3580
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3582 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3583 = data
  i3582.m_IgnoreReversedGraphics = !!i3583[0]
  i3582.m_BlockingObjects = i3583[1]
  i3582.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3583[2] )
  return i3582
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i3584 = root || request.c( 'Playable.GameManager' )
  var i3585 = data
  i3584.EventCountdownEndGame = request.d('System.Action', i3585[0], i3584.EventCountdownEndGame)
  i3584._totalEvent = i3585[1]
  i3584._endTime = i3585[2]
  request.r(i3585[3], i3585[4], 0, i3584, '_backgroundMusic')
  request.r(i3585[5], i3585[6], 0, i3584, '_backgroundTexture')
  request.r(i3585[7], i3585[8], 0, i3584, '_btnBlock')
  request.r(i3585[9], i3585[10], 0, i3584, '_background')
  request.r(i3585[11], i3585[12], 0, i3584, '_progressFillImage')
  request.r(i3585[13], i3585[14], 0, i3584, '_progressText')
  i3584._progressTweenDuration = i3585[15]
  request.r(i3585[16], i3585[17], 0, i3584, '_timerFillImage')
  request.r(i3585[18], i3585[19], 0, i3584, '_timerText')
  i3584._timerPunchScale = i3585[20]
  request.r(i3585[21], i3585[22], 0, i3584, '_textureLogo')
  request.r(i3585[23], i3585[24], 0, i3584, '_logo1')
  request.r(i3585[25], i3585[26], 0, i3584, '_logo2')
  request.r(i3585[27], i3585[28], 0, i3584, '_btnLogoBot')
  request.r(i3585[29], i3585[30], 0, i3584, '_btnLogo')
  request.r(i3585[31], i3585[32], 0, i3584, '_btnPlay')
  return i3584
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3586 = root || request.c( 'System.Action' )
  var i3587 = data
  return i3586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3589 = data
  i3588.cullTransparentMesh = !!i3589[0]
  return i3588
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3590 = root || request.c( 'UnityEngine.UI.Image' )
  var i3591 = data
  request.r(i3591[0], i3591[1], 0, i3590, 'm_Sprite')
  i3590.m_Type = i3591[2]
  i3590.m_PreserveAspect = !!i3591[3]
  i3590.m_FillCenter = !!i3591[4]
  i3590.m_FillMethod = i3591[5]
  i3590.m_FillAmount = i3591[6]
  i3590.m_FillClockwise = !!i3591[7]
  i3590.m_FillOrigin = i3591[8]
  i3590.m_UseSpriteMesh = !!i3591[9]
  i3590.m_PixelsPerUnitMultiplier = i3591[10]
  request.r(i3591[11], i3591[12], 0, i3590, 'm_Material')
  i3590.m_Maskable = !!i3591[13]
  i3590.m_Color = new pc.Color(i3591[14], i3591[15], i3591[16], i3591[17])
  i3590.m_RaycastTarget = !!i3591[18]
  i3590.m_RaycastPadding = new pc.Vec4( i3591[19], i3591[20], i3591[21], i3591[22] )
  return i3590
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3592 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3593 = data
  request.r(i3593[0], i3593[1], 0, i3592, 'm_Texture')
  i3592.m_UVRect = UnityEngine.Rect.MinMaxRect(i3593[2], i3593[3], i3593[4], i3593[5])
  request.r(i3593[6], i3593[7], 0, i3592, 'm_Material')
  i3592.m_Maskable = !!i3593[8]
  i3592.m_Color = new pc.Color(i3593[9], i3593[10], i3593[11], i3593[12])
  i3592.m_RaycastTarget = !!i3593[13]
  i3592.m_RaycastPadding = new pc.Vec4( i3593[14], i3593[15], i3593[16], i3593[17] )
  return i3592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3595 = data
  request.r(i3595[0], i3595[1], 0, i3594, 'clip')
  request.r(i3595[2], i3595[3], 0, i3594, 'outputAudioMixerGroup')
  i3594.playOnAwake = !!i3595[4]
  i3594.loop = !!i3595[5]
  i3594.time = i3595[6]
  i3594.volume = i3595[7]
  i3594.pitch = i3595[8]
  i3594.enabled = !!i3595[9]
  return i3594
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3596 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3597 = data
  i3596.m_hasFontAssetChanged = !!i3597[0]
  request.r(i3597[1], i3597[2], 0, i3596, 'm_baseMaterial')
  i3596.m_maskOffset = new pc.Vec4( i3597[3], i3597[4], i3597[5], i3597[6] )
  i3596.m_text = i3597[7]
  i3596.m_isRightToLeft = !!i3597[8]
  request.r(i3597[9], i3597[10], 0, i3596, 'm_fontAsset')
  request.r(i3597[11], i3597[12], 0, i3596, 'm_sharedMaterial')
  var i3599 = i3597[13]
  var i3598 = []
  for(var i = 0; i < i3599.length; i += 2) {
  request.r(i3599[i + 0], i3599[i + 1], 2, i3598, '')
  }
  i3596.m_fontSharedMaterials = i3598
  request.r(i3597[14], i3597[15], 0, i3596, 'm_fontMaterial')
  var i3601 = i3597[16]
  var i3600 = []
  for(var i = 0; i < i3601.length; i += 2) {
  request.r(i3601[i + 0], i3601[i + 1], 2, i3600, '')
  }
  i3596.m_fontMaterials = i3600
  i3596.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3597[17], i3597[18], i3597[19], i3597[20])
  i3596.m_fontColor = new pc.Color(i3597[21], i3597[22], i3597[23], i3597[24])
  i3596.m_enableVertexGradient = !!i3597[25]
  i3596.m_colorMode = i3597[26]
  i3596.m_fontColorGradient = request.d('TMPro.VertexGradient', i3597[27], i3596.m_fontColorGradient)
  request.r(i3597[28], i3597[29], 0, i3596, 'm_fontColorGradientPreset')
  request.r(i3597[30], i3597[31], 0, i3596, 'm_spriteAsset')
  i3596.m_tintAllSprites = !!i3597[32]
  request.r(i3597[33], i3597[34], 0, i3596, 'm_StyleSheet')
  i3596.m_TextStyleHashCode = i3597[35]
  i3596.m_overrideHtmlColors = !!i3597[36]
  i3596.m_faceColor = UnityEngine.Color32.ConstructColor(i3597[37], i3597[38], i3597[39], i3597[40])
  i3596.m_fontSize = i3597[41]
  i3596.m_fontSizeBase = i3597[42]
  i3596.m_fontWeight = i3597[43]
  i3596.m_enableAutoSizing = !!i3597[44]
  i3596.m_fontSizeMin = i3597[45]
  i3596.m_fontSizeMax = i3597[46]
  i3596.m_fontStyle = i3597[47]
  i3596.m_HorizontalAlignment = i3597[48]
  i3596.m_VerticalAlignment = i3597[49]
  i3596.m_textAlignment = i3597[50]
  i3596.m_characterSpacing = i3597[51]
  i3596.m_wordSpacing = i3597[52]
  i3596.m_lineSpacing = i3597[53]
  i3596.m_lineSpacingMax = i3597[54]
  i3596.m_paragraphSpacing = i3597[55]
  i3596.m_charWidthMaxAdj = i3597[56]
  i3596.m_TextWrappingMode = i3597[57]
  i3596.m_wordWrappingRatios = i3597[58]
  i3596.m_overflowMode = i3597[59]
  request.r(i3597[60], i3597[61], 0, i3596, 'm_linkedTextComponent')
  request.r(i3597[62], i3597[63], 0, i3596, 'parentLinkedComponent')
  i3596.m_enableKerning = !!i3597[64]
  var i3603 = i3597[65]
  var i3602 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3603.length; i += 1) {
    i3602.add(i3603[i + 0]);
  }
  i3596.m_ActiveFontFeatures = i3602
  i3596.m_enableExtraPadding = !!i3597[66]
  i3596.checkPaddingRequired = !!i3597[67]
  i3596.m_isRichText = !!i3597[68]
  i3596.m_parseCtrlCharacters = !!i3597[69]
  i3596.m_isOrthographic = !!i3597[70]
  i3596.m_isCullingEnabled = !!i3597[71]
  i3596.m_horizontalMapping = i3597[72]
  i3596.m_verticalMapping = i3597[73]
  i3596.m_uvLineOffset = i3597[74]
  i3596.m_geometrySortingOrder = i3597[75]
  i3596.m_IsTextObjectScaleStatic = !!i3597[76]
  i3596.m_VertexBufferAutoSizeReduction = !!i3597[77]
  i3596.m_useMaxVisibleDescender = !!i3597[78]
  i3596.m_pageToDisplay = i3597[79]
  i3596.m_margin = new pc.Vec4( i3597[80], i3597[81], i3597[82], i3597[83] )
  i3596.m_isUsingLegacyAnimationComponent = !!i3597[84]
  i3596.m_isVolumetricText = !!i3597[85]
  request.r(i3597[86], i3597[87], 0, i3596, 'm_Material')
  i3596.m_EmojiFallbackSupport = !!i3597[88]
  i3596.m_Maskable = !!i3597[89]
  i3596.m_Color = new pc.Color(i3597[90], i3597[91], i3597[92], i3597[93])
  i3596.m_RaycastTarget = !!i3597[94]
  i3596.m_RaycastPadding = new pc.Vec4( i3597[95], i3597[96], i3597[97], i3597[98] )
  return i3596
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3606 = root || request.c( 'TMPro.VertexGradient' )
  var i3607 = data
  i3606.topLeft = new pc.Color(i3607[0], i3607[1], i3607[2], i3607[3])
  i3606.topRight = new pc.Color(i3607[4], i3607[5], i3607[6], i3607[7])
  i3606.bottomLeft = new pc.Color(i3607[8], i3607[9], i3607[10], i3607[11])
  i3606.bottomRight = new pc.Color(i3607[12], i3607[13], i3607[14], i3607[15])
  return i3606
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3610 = root || request.c( 'UnityEngine.UI.Button' )
  var i3611 = data
  i3610.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3611[0], i3610.m_OnClick)
  i3610.m_Navigation = request.d('UnityEngine.UI.Navigation', i3611[1], i3610.m_Navigation)
  i3610.m_Transition = i3611[2]
  i3610.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3611[3], i3610.m_Colors)
  i3610.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3611[4], i3610.m_SpriteState)
  i3610.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3611[5], i3610.m_AnimationTriggers)
  i3610.m_Interactable = !!i3611[6]
  request.r(i3611[7], i3611[8], 0, i3610, 'm_TargetGraphic')
  return i3610
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3612 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3613 = data
  i3612.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3613[0], i3612.m_PersistentCalls)
  return i3612
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3614 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3615 = data
  var i3617 = i3615[0]
  var i3616 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3617.length; i += 1) {
    i3616.add(request.d('UnityEngine.Events.PersistentCall', i3617[i + 0]));
  }
  i3614.m_Calls = i3616
  return i3614
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3620 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3621 = data
  request.r(i3621[0], i3621[1], 0, i3620, 'm_Target')
  i3620.m_TargetAssemblyTypeName = i3621[2]
  i3620.m_MethodName = i3621[3]
  i3620.m_Mode = i3621[4]
  i3620.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3621[5], i3620.m_Arguments)
  i3620.m_CallState = i3621[6]
  return i3620
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3622 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3623 = data
  i3622.m_Mode = i3623[0]
  i3622.m_WrapAround = !!i3623[1]
  request.r(i3623[2], i3623[3], 0, i3622, 'm_SelectOnUp')
  request.r(i3623[4], i3623[5], 0, i3622, 'm_SelectOnDown')
  request.r(i3623[6], i3623[7], 0, i3622, 'm_SelectOnLeft')
  request.r(i3623[8], i3623[9], 0, i3622, 'm_SelectOnRight')
  return i3622
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3624 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3625 = data
  i3624.m_NormalColor = new pc.Color(i3625[0], i3625[1], i3625[2], i3625[3])
  i3624.m_HighlightedColor = new pc.Color(i3625[4], i3625[5], i3625[6], i3625[7])
  i3624.m_PressedColor = new pc.Color(i3625[8], i3625[9], i3625[10], i3625[11])
  i3624.m_SelectedColor = new pc.Color(i3625[12], i3625[13], i3625[14], i3625[15])
  i3624.m_DisabledColor = new pc.Color(i3625[16], i3625[17], i3625[18], i3625[19])
  i3624.m_ColorMultiplier = i3625[20]
  i3624.m_FadeDuration = i3625[21]
  return i3624
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3626 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3627 = data
  request.r(i3627[0], i3627[1], 0, i3626, 'm_HighlightedSprite')
  request.r(i3627[2], i3627[3], 0, i3626, 'm_PressedSprite')
  request.r(i3627[4], i3627[5], 0, i3626, 'm_SelectedSprite')
  request.r(i3627[6], i3627[7], 0, i3626, 'm_DisabledSprite')
  return i3626
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3628 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3629 = data
  i3628.m_NormalTrigger = i3629[0]
  i3628.m_HighlightedTrigger = i3629[1]
  i3628.m_PressedTrigger = i3629[2]
  i3628.m_SelectedTrigger = i3629[3]
  i3628.m_DisabledTrigger = i3629[4]
  return i3628
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3630 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3631 = data
  request.r(i3631[0], i3631[1], 0, i3630, 'm_ObjectArgument')
  i3630.m_ObjectArgumentAssemblyTypeName = i3631[2]
  i3630.m_IntArgument = i3631[3]
  i3630.m_FloatArgument = i3631[4]
  i3630.m_StringArgument = i3631[5]
  i3630.m_BoolArgument = !!i3631[6]
  return i3630
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3632 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3633 = data
  i3632.m_ShowMaskGraphic = !!i3633[0]
  return i3632
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i3634 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i3635 = data
  i3634.m_Padding = new pc.Vec4( i3635[0], i3635[1], i3635[2], i3635[3] )
  i3634.m_Softness = new pc.Vec2( i3635[4], i3635[5] )
  return i3634
}

Deserializers["GameController"] = function (request, data, root) {
  var i3636 = root || request.c( 'GameController' )
  var i3637 = data
  i3636._autoStart = !!i3637[0]
  request.r(i3637[1], i3637[2], 0, i3636, '_characterSkeletonGraphic')
  request.r(i3637[3], i3637[4], 0, i3636, '_characterRect')
  i3636._step1LoopAnimation = i3637[5]
  i3636._step2IdleAnimation = i3637[6]
  i3636._winAnimation = i3637[7]
  i3636._loseAnimation = i3637[8]
  i3636._step1CharacterPosition = new pc.Vec2( i3637[9], i3637[10] )
  i3636._step2CharacterCenterPosition = new pc.Vec2( i3637[11], i3637[12] )
  i3636._step2CharacterLeftPosition = new pc.Vec2( i3637[13], i3637[14] )
  i3636._step2CharacterRightPosition = new pc.Vec2( i3637[15], i3637[16] )
  var i3639 = i3637[17]
  var i3638 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i3639.length; i += 1) {
    i3638.add(i3639[i + 0]);
  }
  i3636._step1SkinParts = i3638
  request.r(i3637[18], i3637[19], 0, i3636, '_objManGirl')
  request.r(i3637[20], i3637[21], 0, i3636, '_step1Background')
  request.r(i3637[22], i3637[23], 0, i3636, '_step2Background')
  request.r(i3637[24], i3637[25], 0, i3636, '_text')
  request.r(i3637[26], i3637[27], 0, i3636, '_time')
  request.r(i3637[28], i3637[29], 0, i3636, '_dialogueText')
  i3636._fallbackDialogueDuration = i3637[30]
  var i3641 = i3637[31]
  var i3640 = new (System.Collections.Generic.List$1(Bridge.ns('GameController+DialogueLine')))
  for(var i = 0; i < i3641.length; i += 1) {
    i3640.add(request.d('GameController+DialogueLine', i3641[i + 0]));
  }
  i3636._step1Dialogues = i3640
  request.r(i3637[32], i3637[33], 0, i3636, '_fallbackAudioSource')
  request.r(i3637[34], i3637[35], 0, i3636, '_step2OptionsRoot')
  i3636._step2SelectionTimeout = i3637[36]
  request.r(i3637[37], i3637[38], 0, i3636, '_step2HandRoot')
  request.r(i3637[39], i3637[40], 0, i3636, '_step2HandSkeletonGraphic')
  i3636._step2HandIdleAnimation = i3637[41]
  i3636._step2HandTabAnimation = i3637[42]
  i3636._step2HandLeftPosition = new pc.Vec2( i3637[43], i3637[44] )
  i3636._step2HandRightPosition = new pc.Vec2( i3637[45], i3637[46] )
  i3636._step2HandMoveDuration = i3637[47]
  i3636._step2HandBaseScale = i3637[48]
  i3636._step2HandPressScale = i3637[49]
  i3636._step2HandTabHoldDuration = i3637[50]
  var i3643 = i3637[51]
  var i3642 = new (System.Collections.Generic.List$1(Bridge.ns('GameController+Step2Option')))
  for(var i = 0; i < i3643.length; i += 1) {
    i3642.add(request.d('GameController+Step2Option', i3643[i + 0]));
  }
  i3636._step2Options = i3642
  i3636._playResultAnimationLoop = !!i3637[52]
  return i3636
}

Deserializers["GameController+DialogueLine"] = function (request, data, root) {
  var i3648 = root || request.c( 'GameController+DialogueLine' )
  var i3649 = data
  request.r(i3649[0], i3649[1], 0, i3648, 'AudioClip')
  i3648.Dialogue = i3649[2]
  return i3648
}

Deserializers["GameController+Step2Option"] = function (request, data, root) {
  var i3652 = root || request.c( 'GameController+Step2Option' )
  var i3653 = data
  i3652.Side = i3653[0]
  var i3655 = i3653[1]
  var i3654 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i3655.length; i += 1) {
    i3654.add(i3655[i + 0]);
  }
  i3652.SkinParts = i3654
  i3652.IsWin = !!i3653[2]
  return i3652
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i3656 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i3657 = data
  i3656.m_Spacing = i3657[0]
  i3656.m_ChildForceExpandWidth = !!i3657[1]
  i3656.m_ChildForceExpandHeight = !!i3657[2]
  i3656.m_ChildControlWidth = !!i3657[3]
  i3656.m_ChildControlHeight = !!i3657[4]
  i3656.m_ChildScaleWidth = !!i3657[5]
  i3656.m_ChildScaleHeight = !!i3657[6]
  i3656.m_ReverseArrangement = !!i3657[7]
  i3656.m_Padding = UnityEngine.RectOffset.FromPaddings(i3657[8], i3657[9], i3657[10], i3657[11])
  i3656.m_ChildAlignment = i3657[12]
  return i3656
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i3658 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i3659 = data
  request.r(i3659[0], i3659[1], 0, i3658, 'skeletonDataAsset')
  request.r(i3659[2], i3659[3], 0, i3658, 'additiveMaterial')
  request.r(i3659[4], i3659[5], 0, i3658, 'multiplyMaterial')
  request.r(i3659[6], i3659[7], 0, i3658, 'screenMaterial')
  i3658.initialSkinName = i3659[8]
  i3658.initialFlipX = !!i3659[9]
  i3658.initialFlipY = !!i3659[10]
  i3658.startingAnimation = i3659[11]
  i3658.startingLoop = !!i3659[12]
  i3658.timeScale = i3659[13]
  i3658.freeze = !!i3659[14]
  i3658.layoutScaleMode = i3659[15]
  i3658.updateWhenInvisible = i3659[16]
  i3658.allowMultipleCanvasRenderers = !!i3659[17]
  var i3661 = i3659[18]
  var i3660 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i3661.length; i += 2) {
  request.r(i3661[i + 0], i3661[i + 1], 1, i3660, '')
  }
  i3658.canvasRenderers = i3660
  i3658.enableSeparatorSlots = !!i3659[19]
  i3658.updateSeparatorPartLocation = !!i3659[20]
  i3658.updateSeparatorPartScale = !!i3659[21]
  i3658.disableMeshAssignmentOnOverride = !!i3659[22]
  i3658.referenceSize = new pc.Vec2( i3659[23], i3659[24] )
  i3658.referenceScale = i3659[25]
  i3658.rectTransformSize = new pc.Vec2( i3659[26], i3659[27] )
  i3658.editReferenceRect = !!i3659[28]
  var i3663 = i3659[29]
  var i3662 = []
  for(var i = 0; i < i3663.length; i += 1) {
    i3662.push( i3663[i + 0] );
  }
  i3658.separatorSlotNames = i3662
  var i3665 = i3659[30]
  var i3664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3665.length; i += 2) {
  request.r(i3665[i + 0], i3665[i + 1], 1, i3664, '')
  }
  i3658.separatorParts = i3664
  i3658.meshGenerator = request.d('Spine.Unity.MeshGenerator', i3659[31], i3658.meshGenerator)
  i3658.updateTiming = i3659[32]
  i3658.unscaledTime = !!i3659[33]
  request.r(i3659[34], i3659[35], 0, i3658, 'm_Material')
  i3658.m_Maskable = !!i3659[36]
  i3658.m_Color = new pc.Color(i3659[37], i3659[38], i3659[39], i3659[40])
  i3658.m_RaycastTarget = !!i3659[41]
  i3658.m_RaycastPadding = new pc.Vec4( i3659[42], i3659[43], i3659[44], i3659[45] )
  return i3658
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i3672 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i3673 = data
  i3672.settings = request.d('Spine.Unity.MeshGenerator+Settings', i3673[0], i3672.settings)
  return i3672
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i3674 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i3675 = data
  i3674.useClipping = !!i3675[0]
  i3674.zSpacing = i3675[1]
  i3674.pmaVertexColors = !!i3675[2]
  i3674.tintBlack = !!i3675[3]
  i3674.canvasGroupTintBlack = !!i3675[4]
  i3674.calculateTangents = !!i3675[5]
  i3674.addNormals = !!i3675[6]
  i3674.immutableTriangles = !!i3675[7]
  return i3674
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i3676 = root || request.c( 'Playable.AudioManager' )
  var i3677 = data
  var i3679 = i3677[0]
  var i3678 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i3679.length; i += 1) {
    i3678.add(request.d('Playable.SoundData', i3679[i + 0]));
  }
  i3676._sounds = i3678
  request.r(i3677[1], i3677[2], 0, i3676, '_audioMusic')
  request.r(i3677[3], i3677[4], 0, i3676, '_audioSound')
  return i3676
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i3682 = root || request.c( 'Playable.SoundData' )
  var i3683 = data
  i3682.Type = i3683[0]
  request.r(i3683[1], i3683[2], 0, i3682, 'Clip')
  return i3682
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3684 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3685 = data
  request.r(i3685[0], i3685[1], 0, i3684, 'm_FirstSelected')
  i3684.m_sendNavigationEvents = !!i3685[2]
  i3684.m_DragThreshold = i3685[3]
  return i3684
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3686 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3687 = data
  i3686.m_HorizontalAxis = i3687[0]
  i3686.m_VerticalAxis = i3687[1]
  i3686.m_SubmitButton = i3687[2]
  i3686.m_CancelButton = i3687[3]
  i3686.m_InputActionsPerSecond = i3687[4]
  i3686.m_RepeatDelay = i3687[5]
  i3686.m_ForceModuleActive = !!i3687[6]
  i3686.m_SendPointerHoverToParent = !!i3687[7]
  return i3686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3689 = data
  i3688.ambientIntensity = i3689[0]
  i3688.reflectionIntensity = i3689[1]
  i3688.ambientMode = i3689[2]
  i3688.ambientLight = new pc.Color(i3689[3], i3689[4], i3689[5], i3689[6])
  i3688.ambientSkyColor = new pc.Color(i3689[7], i3689[8], i3689[9], i3689[10])
  i3688.ambientGroundColor = new pc.Color(i3689[11], i3689[12], i3689[13], i3689[14])
  i3688.ambientEquatorColor = new pc.Color(i3689[15], i3689[16], i3689[17], i3689[18])
  i3688.fogColor = new pc.Color(i3689[19], i3689[20], i3689[21], i3689[22])
  i3688.fogEndDistance = i3689[23]
  i3688.fogStartDistance = i3689[24]
  i3688.fogDensity = i3689[25]
  i3688.fog = !!i3689[26]
  request.r(i3689[27], i3689[28], 0, i3688, 'skybox')
  i3688.fogMode = i3689[29]
  var i3691 = i3689[30]
  var i3690 = []
  for(var i = 0; i < i3691.length; i += 1) {
    i3690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3691[i + 0]) );
  }
  i3688.lightmaps = i3690
  i3688.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3689[31], i3688.lightProbes)
  i3688.lightmapsMode = i3689[32]
  i3688.mixedBakeMode = i3689[33]
  i3688.environmentLightingMode = i3689[34]
  i3688.ambientProbe = new pc.SphericalHarmonicsL2(i3689[35])
  request.r(i3689[36], i3689[37], 0, i3688, 'customReflection')
  request.r(i3689[38], i3689[39], 0, i3688, 'defaultReflection')
  i3688.defaultReflectionMode = i3689[40]
  i3688.defaultReflectionResolution = i3689[41]
  i3688.sunLightObjectId = i3689[42]
  i3688.pixelLightCount = i3689[43]
  i3688.defaultReflectionHDR = !!i3689[44]
  i3688.hasLightDataAsset = !!i3689[45]
  i3688.hasManualGenerate = !!i3689[46]
  return i3688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3695 = data
  request.r(i3695[0], i3695[1], 0, i3694, 'lightmapColor')
  request.r(i3695[2], i3695[3], 0, i3694, 'lightmapDirection')
  request.r(i3695[4], i3695[5], 0, i3694, 'shadowMask')
  return i3694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3696 = root || new UnityEngine.LightProbes()
  var i3697 = data
  return i3696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3705 = data
  var i3707 = i3705[0]
  var i3706 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3707.length; i += 1) {
    i3706.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3707[i + 0]));
  }
  i3704.ShaderCompilationErrors = i3706
  i3704.name = i3705[1]
  i3704.guid = i3705[2]
  var i3709 = i3705[3]
  var i3708 = []
  for(var i = 0; i < i3709.length; i += 1) {
    i3708.push( i3709[i + 0] );
  }
  i3704.shaderDefinedKeywords = i3708
  var i3711 = i3705[4]
  var i3710 = []
  for(var i = 0; i < i3711.length; i += 1) {
    i3710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3711[i + 0]) );
  }
  i3704.passes = i3710
  var i3713 = i3705[5]
  var i3712 = []
  for(var i = 0; i < i3713.length; i += 1) {
    i3712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3713[i + 0]) );
  }
  i3704.usePasses = i3712
  var i3715 = i3705[6]
  var i3714 = []
  for(var i = 0; i < i3715.length; i += 1) {
    i3714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3715[i + 0]) );
  }
  i3704.defaultParameterValues = i3714
  request.r(i3705[7], i3705[8], 0, i3704, 'unityFallbackShader')
  i3704.readDepth = !!i3705[9]
  i3704.hasDepthOnlyPass = !!i3705[10]
  i3704.isCreatedByShaderGraph = !!i3705[11]
  i3704.disableBatching = !!i3705[12]
  i3704.compiled = !!i3705[13]
  return i3704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3719 = data
  i3718.shaderName = i3719[0]
  i3718.errorMessage = i3719[1]
  return i3718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3722 = root || new pc.UnityShaderPass()
  var i3723 = data
  i3722.id = i3723[0]
  i3722.subShaderIndex = i3723[1]
  i3722.name = i3723[2]
  i3722.passType = i3723[3]
  i3722.grabPassTextureName = i3723[4]
  i3722.usePass = !!i3723[5]
  i3722.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3723[6], i3722.zTest)
  i3722.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3723[7], i3722.zWrite)
  i3722.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3723[8], i3722.culling)
  i3722.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3723[9], i3722.blending)
  i3722.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3723[10], i3722.alphaBlending)
  i3722.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3723[11], i3722.colorWriteMask)
  i3722.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3723[12], i3722.offsetUnits)
  i3722.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3723[13], i3722.offsetFactor)
  i3722.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3723[14], i3722.stencilRef)
  i3722.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3723[15], i3722.stencilReadMask)
  i3722.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3723[16], i3722.stencilWriteMask)
  i3722.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3723[17], i3722.stencilOp)
  i3722.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3723[18], i3722.stencilOpFront)
  i3722.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3723[19], i3722.stencilOpBack)
  var i3725 = i3723[20]
  var i3724 = []
  for(var i = 0; i < i3725.length; i += 1) {
    i3724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3725[i + 0]) );
  }
  i3722.tags = i3724
  var i3727 = i3723[21]
  var i3726 = []
  for(var i = 0; i < i3727.length; i += 1) {
    i3726.push( i3727[i + 0] );
  }
  i3722.passDefinedKeywords = i3726
  var i3729 = i3723[22]
  var i3728 = []
  for(var i = 0; i < i3729.length; i += 1) {
    i3728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3729[i + 0]) );
  }
  i3722.passDefinedKeywordGroups = i3728
  var i3731 = i3723[23]
  var i3730 = []
  for(var i = 0; i < i3731.length; i += 1) {
    i3730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3731[i + 0]) );
  }
  i3722.variants = i3730
  var i3733 = i3723[24]
  var i3732 = []
  for(var i = 0; i < i3733.length; i += 1) {
    i3732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3733[i + 0]) );
  }
  i3722.excludedVariants = i3732
  i3722.hasDepthReader = !!i3723[25]
  return i3722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3735 = data
  i3734.val = i3735[0]
  i3734.name = i3735[1]
  return i3734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3737 = data
  i3736.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3737[0], i3736.src)
  i3736.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3737[1], i3736.dst)
  i3736.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3737[2], i3736.op)
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3739 = data
  i3738.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3739[0], i3738.pass)
  i3738.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3739[1], i3738.fail)
  i3738.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3739[2], i3738.zFail)
  i3738.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3739[3], i3738.comp)
  return i3738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3743 = data
  i3742.name = i3743[0]
  i3742.value = i3743[1]
  return i3742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3747 = data
  var i3749 = i3747[0]
  var i3748 = []
  for(var i = 0; i < i3749.length; i += 1) {
    i3748.push( i3749[i + 0] );
  }
  i3746.keywords = i3748
  i3746.hasDiscard = !!i3747[1]
  return i3746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3753 = data
  i3752.passId = i3753[0]
  i3752.subShaderIndex = i3753[1]
  var i3755 = i3753[2]
  var i3754 = []
  for(var i = 0; i < i3755.length; i += 1) {
    i3754.push( i3755[i + 0] );
  }
  i3752.keywords = i3754
  i3752.vertexProgram = i3753[3]
  i3752.fragmentProgram = i3753[4]
  i3752.exportedForWebGl2 = !!i3753[5]
  i3752.readDepth = !!i3753[6]
  return i3752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3759 = data
  request.r(i3759[0], i3759[1], 0, i3758, 'shader')
  i3758.pass = i3759[2]
  return i3758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3763 = data
  i3762.name = i3763[0]
  i3762.type = i3763[1]
  i3762.value = new pc.Vec4( i3763[2], i3763[3], i3763[4], i3763[5] )
  i3762.textureValue = i3763[6]
  i3762.shaderPropertyFlag = i3763[7]
  return i3762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3765 = data
  i3764.name = i3765[0]
  request.r(i3765[1], i3765[2], 0, i3764, 'texture')
  i3764.aabb = i3765[3]
  i3764.vertices = i3765[4]
  i3764.triangles = i3765[5]
  i3764.textureRect = UnityEngine.Rect.MinMaxRect(i3765[6], i3765[7], i3765[8], i3765[9])
  i3764.packedRect = UnityEngine.Rect.MinMaxRect(i3765[10], i3765[11], i3765[12], i3765[13])
  i3764.border = new pc.Vec4( i3765[14], i3765[15], i3765[16], i3765[17] )
  i3764.transparency = i3765[18]
  i3764.bounds = i3765[19]
  i3764.pixelsPerUnit = i3765[20]
  i3764.textureWidth = i3765[21]
  i3764.textureHeight = i3765[22]
  i3764.nativeSize = new pc.Vec2( i3765[23], i3765[24] )
  i3764.pivot = new pc.Vec2( i3765[25], i3765[26] )
  i3764.textureRectOffset = new pc.Vec2( i3765[27], i3765[28] )
  return i3764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3767 = data
  i3766.name = i3767[0]
  return i3766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3769 = data
  i3768.name = i3769[0]
  i3768.ascent = i3769[1]
  i3768.originalLineHeight = i3769[2]
  i3768.fontSize = i3769[3]
  var i3771 = i3769[4]
  var i3770 = []
  for(var i = 0; i < i3771.length; i += 1) {
    i3770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3771[i + 0]) );
  }
  i3768.characterInfo = i3770
  request.r(i3769[5], i3769[6], 0, i3768, 'texture')
  i3768.originalFontSize = i3769[7]
  return i3768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3775 = data
  i3774.index = i3775[0]
  i3774.advance = i3775[1]
  i3774.bearing = i3775[2]
  i3774.glyphWidth = i3775[3]
  i3774.glyphHeight = i3775[4]
  i3774.minX = i3775[5]
  i3774.maxX = i3775[6]
  i3774.minY = i3775[7]
  i3774.maxY = i3775[8]
  i3774.uvBottomLeftX = i3775[9]
  i3774.uvBottomLeftY = i3775[10]
  i3774.uvBottomRightX = i3775[11]
  i3774.uvBottomRightY = i3775[12]
  i3774.uvTopLeftX = i3775[13]
  i3774.uvTopLeftY = i3775[14]
  i3774.uvTopRightX = i3775[15]
  i3774.uvTopRightY = i3775[16]
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3777 = data
  i3776.name = i3777[0]
  i3776.bytes64 = i3777[1]
  i3776.data = i3777[2]
  return i3776
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3778 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3779 = data
  i3778.normalStyle = i3779[0]
  i3778.normalSpacingOffset = i3779[1]
  i3778.boldStyle = i3779[2]
  i3778.boldSpacing = i3779[3]
  i3778.italicStyle = i3779[4]
  i3778.tabSize = i3779[5]
  request.r(i3779[6], i3779[7], 0, i3778, 'atlas')
  i3778.m_SourceFontFileGUID = i3779[8]
  i3778.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3779[9], i3778.m_CreationSettings)
  request.r(i3779[10], i3779[11], 0, i3778, 'm_SourceFontFile')
  i3778.m_SourceFontFilePath = i3779[12]
  i3778.m_AtlasPopulationMode = i3779[13]
  i3778.InternalDynamicOS = !!i3779[14]
  var i3781 = i3779[15]
  var i3780 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3781.length; i += 1) {
    i3780.add(request.d('UnityEngine.TextCore.Glyph', i3781[i + 0]));
  }
  i3778.m_GlyphTable = i3780
  var i3783 = i3779[16]
  var i3782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3783.length; i += 1) {
    i3782.add(request.d('TMPro.TMP_Character', i3783[i + 0]));
  }
  i3778.m_CharacterTable = i3782
  var i3785 = i3779[17]
  var i3784 = []
  for(var i = 0; i < i3785.length; i += 2) {
  request.r(i3785[i + 0], i3785[i + 1], 2, i3784, '')
  }
  i3778.m_AtlasTextures = i3784
  i3778.m_AtlasTextureIndex = i3779[18]
  i3778.m_IsMultiAtlasTexturesEnabled = !!i3779[19]
  i3778.m_GetFontFeatures = !!i3779[20]
  i3778.m_ClearDynamicDataOnBuild = !!i3779[21]
  i3778.m_AtlasWidth = i3779[22]
  i3778.m_AtlasHeight = i3779[23]
  i3778.m_AtlasPadding = i3779[24]
  i3778.m_AtlasRenderMode = i3779[25]
  var i3787 = i3779[26]
  var i3786 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3787.length; i += 1) {
    i3786.add(request.d('UnityEngine.TextCore.GlyphRect', i3787[i + 0]));
  }
  i3778.m_UsedGlyphRects = i3786
  var i3789 = i3779[27]
  var i3788 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3789.length; i += 1) {
    i3788.add(request.d('UnityEngine.TextCore.GlyphRect', i3789[i + 0]));
  }
  i3778.m_FreeGlyphRects = i3788
  i3778.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3779[28], i3778.m_FontFeatureTable)
  i3778.m_ShouldReimportFontFeatures = !!i3779[29]
  var i3791 = i3779[30]
  var i3790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3791.length; i += 2) {
  request.r(i3791[i + 0], i3791[i + 1], 1, i3790, '')
  }
  i3778.m_FallbackFontAssetTable = i3790
  var i3793 = i3779[31]
  var i3792 = []
  for(var i = 0; i < i3793.length; i += 1) {
    i3792.push( request.d('TMPro.TMP_FontWeightPair', i3793[i + 0]) );
  }
  i3778.m_FontWeightTable = i3792
  var i3795 = i3779[32]
  var i3794 = []
  for(var i = 0; i < i3795.length; i += 1) {
    i3794.push( request.d('TMPro.TMP_FontWeightPair', i3795[i + 0]) );
  }
  i3778.fontWeights = i3794
  i3778.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3779[33], i3778.m_fontInfo)
  var i3797 = i3779[34]
  var i3796 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3797.length; i += 1) {
    i3796.add(request.d('TMPro.TMP_Glyph', i3797[i + 0]));
  }
  i3778.m_glyphInfoList = i3796
  i3778.m_KerningTable = request.d('TMPro.KerningTable', i3779[35], i3778.m_KerningTable)
  var i3799 = i3779[36]
  var i3798 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3799.length; i += 2) {
  request.r(i3799[i + 0], i3799[i + 1], 1, i3798, '')
  }
  i3778.fallbackFontAssets = i3798
  i3778.m_Version = i3779[37]
  i3778.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3779[38], i3778.m_FaceInfo)
  request.r(i3779[39], i3779[40], 0, i3778, 'm_Material')
  return i3778
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3800 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3801 = data
  i3800.sourceFontFileName = i3801[0]
  i3800.sourceFontFileGUID = i3801[1]
  i3800.faceIndex = i3801[2]
  i3800.pointSizeSamplingMode = i3801[3]
  i3800.pointSize = i3801[4]
  i3800.padding = i3801[5]
  i3800.paddingMode = i3801[6]
  i3800.packingMode = i3801[7]
  i3800.atlasWidth = i3801[8]
  i3800.atlasHeight = i3801[9]
  i3800.characterSetSelectionMode = i3801[10]
  i3800.characterSequence = i3801[11]
  i3800.referencedFontAssetGUID = i3801[12]
  i3800.referencedTextAssetGUID = i3801[13]
  i3800.fontStyle = i3801[14]
  i3800.fontStyleModifier = i3801[15]
  i3800.renderMode = i3801[16]
  i3800.includeFontFeatures = !!i3801[17]
  return i3800
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3804 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3805 = data
  i3804.m_Index = i3805[0]
  i3804.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3805[1], i3804.m_Metrics)
  i3804.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3805[2], i3804.m_GlyphRect)
  i3804.m_Scale = i3805[3]
  i3804.m_AtlasIndex = i3805[4]
  i3804.m_ClassDefinitionType = i3805[5]
  return i3804
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3806 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3807 = data
  i3806.m_Width = i3807[0]
  i3806.m_Height = i3807[1]
  i3806.m_HorizontalBearingX = i3807[2]
  i3806.m_HorizontalBearingY = i3807[3]
  i3806.m_HorizontalAdvance = i3807[4]
  return i3806
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3808 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3809 = data
  i3808.m_X = i3809[0]
  i3808.m_Y = i3809[1]
  i3808.m_Width = i3809[2]
  i3808.m_Height = i3809[3]
  return i3808
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3812 = root || request.c( 'TMPro.TMP_Character' )
  var i3813 = data
  i3812.m_ElementType = i3813[0]
  i3812.m_Unicode = i3813[1]
  i3812.m_GlyphIndex = i3813[2]
  i3812.m_Scale = i3813[3]
  return i3812
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3818 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3819 = data
  var i3821 = i3819[0]
  var i3820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3821.length; i += 1) {
    i3820.add(request.d('TMPro.MultipleSubstitutionRecord', i3821[i + 0]));
  }
  i3818.m_MultipleSubstitutionRecords = i3820
  var i3823 = i3819[1]
  var i3822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3823.length; i += 1) {
    i3822.add(request.d('TMPro.LigatureSubstitutionRecord', i3823[i + 0]));
  }
  i3818.m_LigatureSubstitutionRecords = i3822
  var i3825 = i3819[2]
  var i3824 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3825.length; i += 1) {
    i3824.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3825[i + 0]));
  }
  i3818.m_GlyphPairAdjustmentRecords = i3824
  var i3827 = i3819[3]
  var i3826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3827.length; i += 1) {
    i3826.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3827[i + 0]));
  }
  i3818.m_MarkToBaseAdjustmentRecords = i3826
  var i3829 = i3819[4]
  var i3828 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3829.length; i += 1) {
    i3828.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3829[i + 0]));
  }
  i3818.m_MarkToMarkAdjustmentRecords = i3828
  return i3818
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3832 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3833 = data
  i3832.m_TargetGlyphID = i3833[0]
  i3832.m_SubstituteGlyphIDs = i3833[1]
  return i3832
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3836 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3837 = data
  i3836.m_ComponentGlyphIDs = i3837[0]
  i3836.m_LigatureGlyphID = i3837[1]
  return i3836
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3840 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3841 = data
  i3840.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3841[0], i3840.m_FirstAdjustmentRecord)
  i3840.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3841[1], i3840.m_SecondAdjustmentRecord)
  i3840.m_FeatureLookupFlags = i3841[2]
  return i3840
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3844 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3845 = data
  i3844.m_BaseGlyphID = i3845[0]
  i3844.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3845[1], i3844.m_BaseGlyphAnchorPoint)
  i3844.m_MarkGlyphID = i3845[2]
  i3844.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3845[3], i3844.m_MarkPositionAdjustment)
  return i3844
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3848 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3849 = data
  i3848.m_BaseMarkGlyphID = i3849[0]
  i3848.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3849[1], i3848.m_BaseMarkGlyphAnchorPoint)
  i3848.m_CombiningMarkGlyphID = i3849[2]
  i3848.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3849[3], i3848.m_CombiningMarkPositionAdjustment)
  return i3848
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3854 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3855 = data
  request.r(i3855[0], i3855[1], 0, i3854, 'regularTypeface')
  request.r(i3855[2], i3855[3], 0, i3854, 'italicTypeface')
  return i3854
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3856 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3857 = data
  i3856.Name = i3857[0]
  i3856.PointSize = i3857[1]
  i3856.Scale = i3857[2]
  i3856.CharacterCount = i3857[3]
  i3856.LineHeight = i3857[4]
  i3856.Baseline = i3857[5]
  i3856.Ascender = i3857[6]
  i3856.CapHeight = i3857[7]
  i3856.Descender = i3857[8]
  i3856.CenterLine = i3857[9]
  i3856.SuperscriptOffset = i3857[10]
  i3856.SubscriptOffset = i3857[11]
  i3856.SubSize = i3857[12]
  i3856.Underline = i3857[13]
  i3856.UnderlineThickness = i3857[14]
  i3856.strikethrough = i3857[15]
  i3856.strikethroughThickness = i3857[16]
  i3856.TabWidth = i3857[17]
  i3856.Padding = i3857[18]
  i3856.AtlasWidth = i3857[19]
  i3856.AtlasHeight = i3857[20]
  return i3856
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3860 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3861 = data
  i3860.id = i3861[0]
  i3860.x = i3861[1]
  i3860.y = i3861[2]
  i3860.width = i3861[3]
  i3860.height = i3861[4]
  i3860.xOffset = i3861[5]
  i3860.yOffset = i3861[6]
  i3860.xAdvance = i3861[7]
  i3860.scale = i3861[8]
  return i3860
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3862 = root || request.c( 'TMPro.KerningTable' )
  var i3863 = data
  var i3865 = i3863[0]
  var i3864 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3865.length; i += 1) {
    i3864.add(request.d('TMPro.KerningPair', i3865[i + 0]));
  }
  i3862.kerningPairs = i3864
  return i3862
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3868 = root || request.c( 'TMPro.KerningPair' )
  var i3869 = data
  i3868.xOffset = i3869[0]
  i3868.m_FirstGlyph = i3869[1]
  i3868.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3869[2], i3868.m_FirstGlyphAdjustments)
  i3868.m_SecondGlyph = i3869[3]
  i3868.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3869[4], i3868.m_SecondGlyphAdjustments)
  i3868.m_IgnoreSpacingAdjustments = !!i3869[5]
  return i3868
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3870 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3871 = data
  i3870.m_FaceIndex = i3871[0]
  i3870.m_FamilyName = i3871[1]
  i3870.m_StyleName = i3871[2]
  i3870.m_PointSize = i3871[3]
  i3870.m_Scale = i3871[4]
  i3870.m_UnitsPerEM = i3871[5]
  i3870.m_LineHeight = i3871[6]
  i3870.m_AscentLine = i3871[7]
  i3870.m_CapLine = i3871[8]
  i3870.m_MeanLine = i3871[9]
  i3870.m_Baseline = i3871[10]
  i3870.m_DescentLine = i3871[11]
  i3870.m_SuperscriptOffset = i3871[12]
  i3870.m_SuperscriptSize = i3871[13]
  i3870.m_SubscriptOffset = i3871[14]
  i3870.m_SubscriptSize = i3871[15]
  i3870.m_UnderlineOffset = i3871[16]
  i3870.m_UnderlineThickness = i3871[17]
  i3870.m_StrikethroughOffset = i3871[18]
  i3870.m_StrikethroughThickness = i3871[19]
  i3870.m_TabWidth = i3871[20]
  return i3870
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3872 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3873 = data
  var i3875 = i3873[0]
  var i3874 = []
  for(var i = 0; i < i3875.length; i += 2) {
  request.r(i3875[i + 0], i3875[i + 1], 2, i3874, '')
  }
  i3872.atlasAssets = i3874
  i3872.scale = i3873[1]
  request.r(i3873[2], i3873[3], 0, i3872, 'skeletonJSON')
  i3872.isUpgradingBlendModeMaterials = !!i3873[4]
  i3872.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3873[5], i3872.blendModeMaterials)
  var i3877 = i3873[6]
  var i3876 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3877.length; i += 2) {
  request.r(i3877[i + 0], i3877[i + 1], 1, i3876, '')
  }
  i3872.skeletonDataModifiers = i3876
  var i3879 = i3873[7]
  var i3878 = []
  for(var i = 0; i < i3879.length; i += 1) {
    i3878.push( i3879[i + 0] );
  }
  i3872.fromAnimation = i3878
  var i3881 = i3873[8]
  var i3880 = []
  for(var i = 0; i < i3881.length; i += 1) {
    i3880.push( i3881[i + 0] );
  }
  i3872.toAnimation = i3880
  i3872.duration = i3873[9]
  i3872.defaultMix = i3873[10]
  request.r(i3873[11], i3873[12], 0, i3872, 'controller')
  return i3872
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3884 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3885 = data
  i3884.applyAdditiveMaterial = !!i3885[0]
  var i3887 = i3885[1]
  var i3886 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3887.length; i += 1) {
    i3886.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3887[i + 0]));
  }
  i3884.additiveMaterials = i3886
  var i3889 = i3885[2]
  var i3888 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3889.length; i += 1) {
    i3888.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3889[i + 0]));
  }
  i3884.multiplyMaterials = i3888
  var i3891 = i3885[3]
  var i3890 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3891.length; i += 1) {
    i3890.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3891[i + 0]));
  }
  i3884.screenMaterials = i3890
  i3884.requiresBlendModeMaterials = !!i3885[4]
  return i3884
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3894 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3895 = data
  i3894.pageName = i3895[0]
  request.r(i3895[1], i3895[2], 0, i3894, 'material')
  return i3894
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3898 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3899 = data
  request.r(i3899[0], i3899[1], 0, i3898, 'atlasFile')
  var i3901 = i3899[2]
  var i3900 = []
  for(var i = 0; i < i3901.length; i += 2) {
  request.r(i3901[i + 0], i3901[i + 1], 2, i3900, '')
  }
  i3898.materials = i3900
  i3898.textureLoadingMode = i3899[3]
  request.r(i3899[4], i3899[5], 0, i3898, 'onDemandTextureLoader')
  return i3898
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3902 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3903 = data
  i3902.useSafeMode = !!i3903[0]
  i3902.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3903[1], i3902.safeModeOptions)
  i3902.timeScale = i3903[2]
  i3902.unscaledTimeScale = i3903[3]
  i3902.useSmoothDeltaTime = !!i3903[4]
  i3902.maxSmoothUnscaledTime = i3903[5]
  i3902.rewindCallbackMode = i3903[6]
  i3902.showUnityEditorReport = !!i3903[7]
  i3902.logBehaviour = i3903[8]
  i3902.drawGizmos = !!i3903[9]
  i3902.defaultRecyclable = !!i3903[10]
  i3902.defaultAutoPlay = i3903[11]
  i3902.defaultUpdateType = i3903[12]
  i3902.defaultTimeScaleIndependent = !!i3903[13]
  i3902.defaultEaseType = i3903[14]
  i3902.defaultEaseOvershootOrAmplitude = i3903[15]
  i3902.defaultEasePeriod = i3903[16]
  i3902.defaultAutoKill = !!i3903[17]
  i3902.defaultLoopType = i3903[18]
  i3902.debugMode = !!i3903[19]
  i3902.debugStoreTargetId = !!i3903[20]
  i3902.showPreviewPanel = !!i3903[21]
  i3902.storeSettingsLocation = i3903[22]
  i3902.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3903[23], i3902.modules)
  i3902.createASMDEF = !!i3903[24]
  i3902.showPlayingTweens = !!i3903[25]
  i3902.showPausedTweens = !!i3903[26]
  return i3902
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3904 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3905 = data
  i3904.logBehaviour = i3905[0]
  i3904.nestedTweenFailureBehaviour = i3905[1]
  return i3904
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3906 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3907 = data
  i3906.showPanel = !!i3907[0]
  i3906.audioEnabled = !!i3907[1]
  i3906.physicsEnabled = !!i3907[2]
  i3906.physics2DEnabled = !!i3907[3]
  i3906.spriteEnabled = !!i3907[4]
  i3906.uiEnabled = !!i3907[5]
  i3906.uiToolkitEnabled = !!i3907[6]
  i3906.textMeshProEnabled = !!i3907[7]
  i3906.tk2DEnabled = !!i3907[8]
  i3906.deAudioEnabled = !!i3907[9]
  i3906.deUnityExtendedEnabled = !!i3907[10]
  i3906.epoOutlineEnabled = !!i3907[11]
  return i3906
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3908 = root || request.c( 'TMPro.TMP_Settings' )
  var i3909 = data
  i3908.assetVersion = i3909[0]
  i3908.m_TextWrappingMode = i3909[1]
  i3908.m_enableKerning = !!i3909[2]
  var i3911 = i3909[3]
  var i3910 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3911.length; i += 1) {
    i3910.add(i3911[i + 0]);
  }
  i3908.m_ActiveFontFeatures = i3910
  i3908.m_enableExtraPadding = !!i3909[4]
  i3908.m_enableTintAllSprites = !!i3909[5]
  i3908.m_enableParseEscapeCharacters = !!i3909[6]
  i3908.m_EnableRaycastTarget = !!i3909[7]
  i3908.m_GetFontFeaturesAtRuntime = !!i3909[8]
  i3908.m_missingGlyphCharacter = i3909[9]
  i3908.m_ClearDynamicDataOnBuild = !!i3909[10]
  i3908.m_warningsDisabled = !!i3909[11]
  request.r(i3909[12], i3909[13], 0, i3908, 'm_defaultFontAsset')
  i3908.m_defaultFontAssetPath = i3909[14]
  i3908.m_defaultFontSize = i3909[15]
  i3908.m_defaultAutoSizeMinRatio = i3909[16]
  i3908.m_defaultAutoSizeMaxRatio = i3909[17]
  i3908.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3909[18], i3909[19] )
  i3908.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3909[20], i3909[21] )
  i3908.m_autoSizeTextContainer = !!i3909[22]
  i3908.m_IsTextObjectScaleStatic = !!i3909[23]
  var i3913 = i3909[24]
  var i3912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3913.length; i += 2) {
  request.r(i3913[i + 0], i3913[i + 1], 1, i3912, '')
  }
  i3908.m_fallbackFontAssets = i3912
  i3908.m_matchMaterialPreset = !!i3909[25]
  i3908.m_HideSubTextObjects = !!i3909[26]
  request.r(i3909[27], i3909[28], 0, i3908, 'm_defaultSpriteAsset')
  i3908.m_defaultSpriteAssetPath = i3909[29]
  i3908.m_enableEmojiSupport = !!i3909[30]
  i3908.m_MissingCharacterSpriteUnicode = i3909[31]
  var i3915 = i3909[32]
  var i3914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3915.length; i += 2) {
  request.r(i3915[i + 0], i3915[i + 1], 1, i3914, '')
  }
  i3908.m_EmojiFallbackTextAssets = i3914
  i3908.m_defaultColorGradientPresetsPath = i3909[33]
  request.r(i3909[34], i3909[35], 0, i3908, 'm_defaultStyleSheet')
  i3908.m_StyleSheetsResourcePath = i3909[36]
  request.r(i3909[37], i3909[38], 0, i3908, 'm_leadingCharacters')
  request.r(i3909[39], i3909[40], 0, i3908, 'm_followingCharacters')
  i3908.m_UseModernHangulLineBreakingRules = !!i3909[41]
  return i3908
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3918 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3919 = data
  i3918.m_GlyphIndex = i3919[0]
  i3918.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3919[1], i3918.m_GlyphValueRecord)
  return i3918
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3920 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3921 = data
  i3920.m_XPlacement = i3921[0]
  i3920.m_YPlacement = i3921[1]
  i3920.m_XAdvance = i3921[2]
  i3920.m_YAdvance = i3921[3]
  return i3920
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3922 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3923 = data
  request.r(i3923[0], i3923[1], 0, i3922, 'spriteSheet')
  var i3925 = i3923[2]
  var i3924 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3925.length; i += 1) {
    i3924.add(request.d('TMPro.TMP_Sprite', i3925[i + 0]));
  }
  i3922.spriteInfoList = i3924
  var i3927 = i3923[3]
  var i3926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3927.length; i += 2) {
  request.r(i3927[i + 0], i3927[i + 1], 1, i3926, '')
  }
  i3922.fallbackSpriteAssets = i3926
  var i3929 = i3923[4]
  var i3928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3929.length; i += 1) {
    i3928.add(request.d('TMPro.TMP_SpriteCharacter', i3929[i + 0]));
  }
  i3922.m_SpriteCharacterTable = i3928
  var i3931 = i3923[5]
  var i3930 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3931.length; i += 1) {
    i3930.add(request.d('TMPro.TMP_SpriteGlyph', i3931[i + 0]));
  }
  i3922.m_GlyphTable = i3930
  i3922.m_Version = i3923[6]
  i3922.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3923[7], i3922.m_FaceInfo)
  request.r(i3923[8], i3923[9], 0, i3922, 'm_Material')
  return i3922
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3934 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3935 = data
  i3934.name = i3935[0]
  i3934.hashCode = i3935[1]
  i3934.unicode = i3935[2]
  i3934.pivot = new pc.Vec2( i3935[3], i3935[4] )
  request.r(i3935[5], i3935[6], 0, i3934, 'sprite')
  i3934.id = i3935[7]
  i3934.x = i3935[8]
  i3934.y = i3935[9]
  i3934.width = i3935[10]
  i3934.height = i3935[11]
  i3934.xOffset = i3935[12]
  i3934.yOffset = i3935[13]
  i3934.xAdvance = i3935[14]
  i3934.scale = i3935[15]
  return i3934
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3940 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3941 = data
  i3940.m_Name = i3941[0]
  i3940.m_ElementType = i3941[1]
  i3940.m_Unicode = i3941[2]
  i3940.m_GlyphIndex = i3941[3]
  i3940.m_Scale = i3941[4]
  return i3940
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3944 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3945 = data
  request.r(i3945[0], i3945[1], 0, i3944, 'sprite')
  i3944.m_Index = i3945[2]
  i3944.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3945[3], i3944.m_Metrics)
  i3944.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3945[4], i3944.m_GlyphRect)
  i3944.m_Scale = i3945[5]
  i3944.m_AtlasIndex = i3945[6]
  i3944.m_ClassDefinitionType = i3945[7]
  return i3944
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3946 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3947 = data
  var i3949 = i3947[0]
  var i3948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3949.length; i += 1) {
    i3948.add(request.d('TMPro.TMP_Style', i3949[i + 0]));
  }
  i3946.m_StyleList = i3948
  return i3946
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3952 = root || request.c( 'TMPro.TMP_Style' )
  var i3953 = data
  i3952.m_Name = i3953[0]
  i3952.m_HashCode = i3953[1]
  i3952.m_OpeningDefinition = i3953[2]
  i3952.m_ClosingDefinition = i3953[3]
  i3952.m_OpeningTagArray = i3953[4]
  i3952.m_ClosingTagArray = i3953[5]
  return i3952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3955 = data
  var i3957 = i3955[0]
  var i3956 = []
  for(var i = 0; i < i3957.length; i += 1) {
    i3956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3957[i + 0]) );
  }
  i3954.files = i3956
  i3954.componentToPrefabIds = i3955[1]
  return i3954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3961 = data
  i3960.path = i3961[0]
  request.r(i3961[1], i3961[2], 0, i3960, 'unityObject')
  return i3960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3963 = data
  var i3965 = i3963[0]
  var i3964 = []
  for(var i = 0; i < i3965.length; i += 1) {
    i3964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3965[i + 0]) );
  }
  i3962.scriptsExecutionOrder = i3964
  var i3967 = i3963[1]
  var i3966 = []
  for(var i = 0; i < i3967.length; i += 1) {
    i3966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3967[i + 0]) );
  }
  i3962.sortingLayers = i3966
  var i3969 = i3963[2]
  var i3968 = []
  for(var i = 0; i < i3969.length; i += 1) {
    i3968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3969[i + 0]) );
  }
  i3962.cullingLayers = i3968
  i3962.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3963[3], i3962.timeSettings)
  i3962.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3963[4], i3962.physicsSettings)
  i3962.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3963[5], i3962.physics2DSettings)
  i3962.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3963[6], i3962.qualitySettings)
  i3962.enableRealtimeShadows = !!i3963[7]
  i3962.enableAutoInstancing = !!i3963[8]
  i3962.enableStaticBatching = !!i3963[9]
  i3962.enableDynamicBatching = !!i3963[10]
  i3962.usePreservativeDynamicBatching = !!i3963[11]
  i3962.lightmapEncodingQuality = i3963[12]
  i3962.desiredColorSpace = i3963[13]
  var i3971 = i3963[14]
  var i3970 = []
  for(var i = 0; i < i3971.length; i += 1) {
    i3970.push( i3971[i + 0] );
  }
  i3962.allTags = i3970
  return i3962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3975 = data
  i3974.name = i3975[0]
  i3974.value = i3975[1]
  return i3974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3979 = data
  i3978.id = i3979[0]
  i3978.name = i3979[1]
  i3978.value = i3979[2]
  return i3978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3983 = data
  i3982.id = i3983[0]
  i3982.name = i3983[1]
  return i3982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3985 = data
  i3984.fixedDeltaTime = i3985[0]
  i3984.maximumDeltaTime = i3985[1]
  i3984.timeScale = i3985[2]
  i3984.maximumParticleTimestep = i3985[3]
  return i3984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3987 = data
  i3986.gravity = new pc.Vec3( i3987[0], i3987[1], i3987[2] )
  i3986.defaultSolverIterations = i3987[3]
  i3986.bounceThreshold = i3987[4]
  i3986.autoSyncTransforms = !!i3987[5]
  i3986.autoSimulation = !!i3987[6]
  var i3989 = i3987[7]
  var i3988 = []
  for(var i = 0; i < i3989.length; i += 1) {
    i3988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3989[i + 0]) );
  }
  i3986.collisionMatrix = i3988
  return i3986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3993 = data
  i3992.enabled = !!i3993[0]
  i3992.layerId = i3993[1]
  i3992.otherLayerId = i3993[2]
  return i3992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3995 = data
  request.r(i3995[0], i3995[1], 0, i3994, 'material')
  i3994.gravity = new pc.Vec2( i3995[2], i3995[3] )
  i3994.positionIterations = i3995[4]
  i3994.velocityIterations = i3995[5]
  i3994.velocityThreshold = i3995[6]
  i3994.maxLinearCorrection = i3995[7]
  i3994.maxAngularCorrection = i3995[8]
  i3994.maxTranslationSpeed = i3995[9]
  i3994.maxRotationSpeed = i3995[10]
  i3994.baumgarteScale = i3995[11]
  i3994.baumgarteTOIScale = i3995[12]
  i3994.timeToSleep = i3995[13]
  i3994.linearSleepTolerance = i3995[14]
  i3994.angularSleepTolerance = i3995[15]
  i3994.defaultContactOffset = i3995[16]
  i3994.autoSimulation = !!i3995[17]
  i3994.queriesHitTriggers = !!i3995[18]
  i3994.queriesStartInColliders = !!i3995[19]
  i3994.callbacksOnDisable = !!i3995[20]
  i3994.reuseCollisionCallbacks = !!i3995[21]
  i3994.autoSyncTransforms = !!i3995[22]
  var i3997 = i3995[23]
  var i3996 = []
  for(var i = 0; i < i3997.length; i += 1) {
    i3996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3997[i + 0]) );
  }
  i3994.collisionMatrix = i3996
  return i3994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4001 = data
  i4000.enabled = !!i4001[0]
  i4000.layerId = i4001[1]
  i4000.otherLayerId = i4001[2]
  return i4000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4003 = data
  var i4005 = i4003[0]
  var i4004 = []
  for(var i = 0; i < i4005.length; i += 1) {
    i4004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4005[i + 0]) );
  }
  i4002.qualityLevels = i4004
  var i4007 = i4003[1]
  var i4006 = []
  for(var i = 0; i < i4007.length; i += 1) {
    i4006.push( i4007[i + 0] );
  }
  i4002.names = i4006
  i4002.shadows = i4003[2]
  i4002.anisotropicFiltering = i4003[3]
  i4002.antiAliasing = i4003[4]
  i4002.lodBias = i4003[5]
  i4002.shadowCascades = i4003[6]
  i4002.shadowDistance = i4003[7]
  i4002.shadowmaskMode = i4003[8]
  i4002.shadowProjection = i4003[9]
  i4002.shadowResolution = i4003[10]
  i4002.softParticles = !!i4003[11]
  i4002.softVegetation = !!i4003[12]
  i4002.activeColorSpace = i4003[13]
  i4002.desiredColorSpace = i4003[14]
  i4002.masterTextureLimit = i4003[15]
  i4002.maxQueuedFrames = i4003[16]
  i4002.particleRaycastBudget = i4003[17]
  i4002.pixelLightCount = i4003[18]
  i4002.realtimeReflectionProbes = !!i4003[19]
  i4002.shadowCascade2Split = i4003[20]
  i4002.shadowCascade4Split = new pc.Vec3( i4003[21], i4003[22], i4003[23] )
  i4002.streamingMipmapsActive = !!i4003[24]
  i4002.vSyncCount = i4003[25]
  i4002.asyncUploadBufferSize = i4003[26]
  i4002.asyncUploadTimeSlice = i4003[27]
  i4002.billboardsFaceCameraPosition = !!i4003[28]
  i4002.shadowNearPlaneOffset = i4003[29]
  i4002.streamingMipmapsMemoryBudget = i4003[30]
  i4002.maximumLODLevel = i4003[31]
  i4002.streamingMipmapsAddAllCameras = !!i4003[32]
  i4002.streamingMipmapsMaxLevelReduction = i4003[33]
  i4002.streamingMipmapsRenderersPerFrame = i4003[34]
  i4002.resolutionScalingFixedDPIFactor = i4003[35]
  i4002.streamingMipmapsMaxFileIORequests = i4003[36]
  i4002.currentQualityLevel = i4003[37]
  return i4002
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i4010 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i4011 = data
  i4010.m_XCoordinate = i4011[0]
  i4010.m_YCoordinate = i4011[1]
  return i4010
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i4012 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i4013 = data
  i4012.m_XPositionAdjustment = i4013[0]
  i4012.m_YPositionAdjustment = i4013[1]
  return i4012
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4014 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4015 = data
  i4014.xPlacement = i4015[0]
  i4014.yPlacement = i4015[1]
  i4014.xAdvance = i4015[2]
  i4014.yAdvance = i4015[3]
  return i4014
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

Deserializers.buildID = "2420b733-ec43-4d4b-be68-06c20dfca3ee";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

