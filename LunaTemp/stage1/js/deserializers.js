var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3544 = root || request.c( 'UnityEngine.JointSpring' )
  var i3545 = data
  i3544.spring = i3545[0]
  i3544.damper = i3545[1]
  i3544.targetPosition = i3545[2]
  return i3544
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3546 = root || request.c( 'UnityEngine.JointMotor' )
  var i3547 = data
  i3546.m_TargetVelocity = i3547[0]
  i3546.m_Force = i3547[1]
  i3546.m_FreeSpin = i3547[2]
  return i3546
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3548 = root || request.c( 'UnityEngine.JointLimits' )
  var i3549 = data
  i3548.m_Min = i3549[0]
  i3548.m_Max = i3549[1]
  i3548.m_Bounciness = i3549[2]
  i3548.m_BounceMinVelocity = i3549[3]
  i3548.m_ContactDistance = i3549[4]
  i3548.minBounce = i3549[5]
  i3548.maxBounce = i3549[6]
  return i3548
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3550 = root || request.c( 'UnityEngine.JointDrive' )
  var i3551 = data
  i3550.m_PositionSpring = i3551[0]
  i3550.m_PositionDamper = i3551[1]
  i3550.m_MaximumForce = i3551[2]
  i3550.m_UseAcceleration = i3551[3]
  return i3550
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3552 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3553 = data
  i3552.m_Spring = i3553[0]
  i3552.m_Damper = i3553[1]
  return i3552
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3554 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3555 = data
  i3554.m_Limit = i3555[0]
  i3554.m_Bounciness = i3555[1]
  i3554.m_ContactDistance = i3555[2]
  return i3554
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3556 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3557 = data
  i3556.m_ExtremumSlip = i3557[0]
  i3556.m_ExtremumValue = i3557[1]
  i3556.m_AsymptoteSlip = i3557[2]
  i3556.m_AsymptoteValue = i3557[3]
  i3556.m_Stiffness = i3557[4]
  return i3556
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3558 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3559 = data
  i3558.m_LowerAngle = i3559[0]
  i3558.m_UpperAngle = i3559[1]
  return i3558
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3560 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3561 = data
  i3560.m_MotorSpeed = i3561[0]
  i3560.m_MaximumMotorTorque = i3561[1]
  return i3560
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3562 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3563 = data
  i3562.m_DampingRatio = i3563[0]
  i3562.m_Frequency = i3563[1]
  i3562.m_Angle = i3563[2]
  return i3562
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3564 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3565 = data
  i3564.m_LowerTranslation = i3565[0]
  i3564.m_UpperTranslation = i3565[1]
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3567 = data
  i3566.name = i3567[0]
  i3566.width = i3567[1]
  i3566.height = i3567[2]
  i3566.mipmapCount = i3567[3]
  i3566.anisoLevel = i3567[4]
  i3566.filterMode = i3567[5]
  i3566.hdr = !!i3567[6]
  i3566.format = i3567[7]
  i3566.wrapMode = i3567[8]
  i3566.alphaIsTransparency = !!i3567[9]
  i3566.alphaSource = i3567[10]
  i3566.graphicsFormat = i3567[11]
  i3566.sRGBTexture = !!i3567[12]
  i3566.desiredColorSpace = i3567[13]
  i3566.wrapU = i3567[14]
  i3566.wrapV = i3567[15]
  return i3566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3568 = root || new pc.UnityMaterial()
  var i3569 = data
  i3568.name = i3569[0]
  request.r(i3569[1], i3569[2], 0, i3568, 'shader')
  i3568.renderQueue = i3569[3]
  i3568.enableInstancing = !!i3569[4]
  var i3571 = i3569[5]
  var i3570 = []
  for(var i = 0; i < i3571.length; i += 1) {
    i3570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3571[i + 0]) );
  }
  i3568.floatParameters = i3570
  var i3573 = i3569[6]
  var i3572 = []
  for(var i = 0; i < i3573.length; i += 1) {
    i3572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3573[i + 0]) );
  }
  i3568.colorParameters = i3572
  var i3575 = i3569[7]
  var i3574 = []
  for(var i = 0; i < i3575.length; i += 1) {
    i3574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3575[i + 0]) );
  }
  i3568.vectorParameters = i3574
  var i3577 = i3569[8]
  var i3576 = []
  for(var i = 0; i < i3577.length; i += 1) {
    i3576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3577[i + 0]) );
  }
  i3568.textureParameters = i3576
  var i3579 = i3569[9]
  var i3578 = []
  for(var i = 0; i < i3579.length; i += 1) {
    i3578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3579[i + 0]) );
  }
  i3568.materialFlags = i3578
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3583 = data
  i3582.name = i3583[0]
  i3582.value = i3583[1]
  return i3582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3587 = data
  i3586.name = i3587[0]
  i3586.value = new pc.Color(i3587[1], i3587[2], i3587[3], i3587[4])
  return i3586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3591 = data
  i3590.name = i3591[0]
  i3590.value = new pc.Vec4( i3591[1], i3591[2], i3591[3], i3591[4] )
  return i3590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3595 = data
  i3594.name = i3595[0]
  request.r(i3595[1], i3595[2], 0, i3594, 'value')
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3599 = data
  i3598.name = i3599[0]
  i3598.enabled = !!i3599[1]
  return i3598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3601 = data
  i3600.pivot = new pc.Vec2( i3601[0], i3601[1] )
  i3600.anchorMin = new pc.Vec2( i3601[2], i3601[3] )
  i3600.anchorMax = new pc.Vec2( i3601[4], i3601[5] )
  i3600.sizeDelta = new pc.Vec2( i3601[6], i3601[7] )
  i3600.anchoredPosition3D = new pc.Vec3( i3601[8], i3601[9], i3601[10] )
  i3600.rotation = new pc.Quat(i3601[11], i3601[12], i3601[13], i3601[14])
  i3600.scale = new pc.Vec3( i3601[15], i3601[16], i3601[17] )
  return i3600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3603 = data
  i3602.cullTransparentMesh = !!i3603[0]
  return i3602
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3604 = root || request.c( 'UnityEngine.UI.Image' )
  var i3605 = data
  request.r(i3605[0], i3605[1], 0, i3604, 'm_Sprite')
  i3604.m_Type = i3605[2]
  i3604.m_PreserveAspect = !!i3605[3]
  i3604.m_FillCenter = !!i3605[4]
  i3604.m_FillMethod = i3605[5]
  i3604.m_FillAmount = i3605[6]
  i3604.m_FillClockwise = !!i3605[7]
  i3604.m_FillOrigin = i3605[8]
  i3604.m_UseSpriteMesh = !!i3605[9]
  i3604.m_PixelsPerUnitMultiplier = i3605[10]
  i3604.m_Maskable = !!i3605[11]
  request.r(i3605[12], i3605[13], 0, i3604, 'm_Material')
  i3604.m_Color = new pc.Color(i3605[14], i3605[15], i3605[16], i3605[17])
  i3604.m_RaycastTarget = !!i3605[18]
  i3604.m_RaycastPadding = new pc.Vec4( i3605[19], i3605[20], i3605[21], i3605[22] )
  return i3604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3607 = data
  i3606.name = i3607[0]
  i3606.tagId = i3607[1]
  i3606.enabled = !!i3607[2]
  i3606.isStatic = !!i3607[3]
  i3606.layer = i3607[4]
  return i3606
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3608 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3609 = data
  i3608.m_hasFontAssetChanged = !!i3609[0]
  request.r(i3609[1], i3609[2], 0, i3608, 'm_baseMaterial')
  i3608.m_maskOffset = new pc.Vec4( i3609[3], i3609[4], i3609[5], i3609[6] )
  i3608.m_text = i3609[7]
  i3608.m_isRightToLeft = !!i3609[8]
  request.r(i3609[9], i3609[10], 0, i3608, 'm_fontAsset')
  request.r(i3609[11], i3609[12], 0, i3608, 'm_sharedMaterial')
  var i3611 = i3609[13]
  var i3610 = []
  for(var i = 0; i < i3611.length; i += 2) {
  request.r(i3611[i + 0], i3611[i + 1], 2, i3610, '')
  }
  i3608.m_fontSharedMaterials = i3610
  request.r(i3609[14], i3609[15], 0, i3608, 'm_fontMaterial')
  var i3613 = i3609[16]
  var i3612 = []
  for(var i = 0; i < i3613.length; i += 2) {
  request.r(i3613[i + 0], i3613[i + 1], 2, i3612, '')
  }
  i3608.m_fontMaterials = i3612
  i3608.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3609[17], i3609[18], i3609[19], i3609[20])
  i3608.m_fontColor = new pc.Color(i3609[21], i3609[22], i3609[23], i3609[24])
  i3608.m_enableVertexGradient = !!i3609[25]
  i3608.m_colorMode = i3609[26]
  i3608.m_fontColorGradient = request.d('TMPro.VertexGradient', i3609[27], i3608.m_fontColorGradient)
  request.r(i3609[28], i3609[29], 0, i3608, 'm_fontColorGradientPreset')
  request.r(i3609[30], i3609[31], 0, i3608, 'm_spriteAsset')
  i3608.m_tintAllSprites = !!i3609[32]
  request.r(i3609[33], i3609[34], 0, i3608, 'm_StyleSheet')
  i3608.m_TextStyleHashCode = i3609[35]
  i3608.m_overrideHtmlColors = !!i3609[36]
  i3608.m_faceColor = UnityEngine.Color32.ConstructColor(i3609[37], i3609[38], i3609[39], i3609[40])
  i3608.m_fontSize = i3609[41]
  i3608.m_fontSizeBase = i3609[42]
  i3608.m_fontWeight = i3609[43]
  i3608.m_enableAutoSizing = !!i3609[44]
  i3608.m_fontSizeMin = i3609[45]
  i3608.m_fontSizeMax = i3609[46]
  i3608.m_fontStyle = i3609[47]
  i3608.m_HorizontalAlignment = i3609[48]
  i3608.m_VerticalAlignment = i3609[49]
  i3608.m_textAlignment = i3609[50]
  i3608.m_characterSpacing = i3609[51]
  i3608.m_wordSpacing = i3609[52]
  i3608.m_lineSpacing = i3609[53]
  i3608.m_lineSpacingMax = i3609[54]
  i3608.m_paragraphSpacing = i3609[55]
  i3608.m_charWidthMaxAdj = i3609[56]
  i3608.m_enableWordWrapping = !!i3609[57]
  i3608.m_wordWrappingRatios = i3609[58]
  i3608.m_overflowMode = i3609[59]
  request.r(i3609[60], i3609[61], 0, i3608, 'm_linkedTextComponent')
  request.r(i3609[62], i3609[63], 0, i3608, 'parentLinkedComponent')
  i3608.m_enableKerning = !!i3609[64]
  i3608.m_enableExtraPadding = !!i3609[65]
  i3608.checkPaddingRequired = !!i3609[66]
  i3608.m_isRichText = !!i3609[67]
  i3608.m_parseCtrlCharacters = !!i3609[68]
  i3608.m_isOrthographic = !!i3609[69]
  i3608.m_isCullingEnabled = !!i3609[70]
  i3608.m_horizontalMapping = i3609[71]
  i3608.m_verticalMapping = i3609[72]
  i3608.m_uvLineOffset = i3609[73]
  i3608.m_geometrySortingOrder = i3609[74]
  i3608.m_IsTextObjectScaleStatic = !!i3609[75]
  i3608.m_VertexBufferAutoSizeReduction = !!i3609[76]
  i3608.m_useMaxVisibleDescender = !!i3609[77]
  i3608.m_pageToDisplay = i3609[78]
  i3608.m_margin = new pc.Vec4( i3609[79], i3609[80], i3609[81], i3609[82] )
  i3608.m_isUsingLegacyAnimationComponent = !!i3609[83]
  i3608.m_isVolumetricText = !!i3609[84]
  i3608.m_Maskable = !!i3609[85]
  request.r(i3609[86], i3609[87], 0, i3608, 'm_Material')
  i3608.m_Color = new pc.Color(i3609[88], i3609[89], i3609[90], i3609[91])
  i3608.m_RaycastTarget = !!i3609[92]
  i3608.m_RaycastPadding = new pc.Vec4( i3609[93], i3609[94], i3609[95], i3609[96] )
  return i3608
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3616 = root || request.c( 'TMPro.VertexGradient' )
  var i3617 = data
  i3616.topLeft = new pc.Color(i3617[0], i3617[1], i3617[2], i3617[3])
  i3616.topRight = new pc.Color(i3617[4], i3617[5], i3617[6], i3617[7])
  i3616.bottomLeft = new pc.Color(i3617[8], i3617[9], i3617[10], i3617[11])
  i3616.bottomRight = new pc.Color(i3617[12], i3617[13], i3617[14], i3617[15])
  return i3616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3619 = data
  i3618.name = i3619[0]
  i3618.index = i3619[1]
  i3618.startup = !!i3619[2]
  return i3618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3621 = data
  i3620.position = new pc.Vec3( i3621[0], i3621[1], i3621[2] )
  i3620.scale = new pc.Vec3( i3621[3], i3621[4], i3621[5] )
  i3620.rotation = new pc.Quat(i3621[6], i3621[7], i3621[8], i3621[9])
  return i3620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3623 = data
  i3622.aspect = i3623[0]
  i3622.orthographic = !!i3623[1]
  i3622.orthographicSize = i3623[2]
  i3622.backgroundColor = new pc.Color(i3623[3], i3623[4], i3623[5], i3623[6])
  i3622.nearClipPlane = i3623[7]
  i3622.farClipPlane = i3623[8]
  i3622.fieldOfView = i3623[9]
  i3622.depth = i3623[10]
  i3622.clearFlags = i3623[11]
  i3622.cullingMask = i3623[12]
  i3622.rect = i3623[13]
  request.r(i3623[14], i3623[15], 0, i3622, 'targetTexture')
  i3622.usePhysicalProperties = !!i3623[16]
  i3622.focalLength = i3623[17]
  i3622.sensorSize = new pc.Vec2( i3623[18], i3623[19] )
  i3622.lensShift = new pc.Vec2( i3623[20], i3623[21] )
  i3622.gateFit = i3623[22]
  i3622.commandBufferCount = i3623[23]
  i3622.cameraType = i3623[24]
  i3622.enabled = !!i3623[25]
  return i3622
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3624 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3625 = data
  request.r(i3625[0], i3625[1], 0, i3624, 'm_FirstSelected')
  i3624.m_sendNavigationEvents = !!i3625[2]
  i3624.m_DragThreshold = i3625[3]
  return i3624
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3626 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3627 = data
  i3626.m_HorizontalAxis = i3627[0]
  i3626.m_VerticalAxis = i3627[1]
  i3626.m_SubmitButton = i3627[2]
  i3626.m_CancelButton = i3627[3]
  i3626.m_InputActionsPerSecond = i3627[4]
  i3626.m_RepeatDelay = i3627[5]
  i3626.m_ForceModuleActive = !!i3627[6]
  i3626.m_SendPointerHoverToParent = !!i3627[7]
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3629 = data
  i3628.planeDistance = i3629[0]
  i3628.referencePixelsPerUnit = i3629[1]
  i3628.isFallbackOverlay = !!i3629[2]
  i3628.renderMode = i3629[3]
  i3628.renderOrder = i3629[4]
  i3628.sortingLayerName = i3629[5]
  i3628.sortingOrder = i3629[6]
  i3628.scaleFactor = i3629[7]
  request.r(i3629[8], i3629[9], 0, i3628, 'worldCamera')
  i3628.overrideSorting = !!i3629[10]
  i3628.pixelPerfect = !!i3629[11]
  i3628.targetDisplay = i3629[12]
  i3628.overridePixelPerfect = !!i3629[13]
  i3628.enabled = !!i3629[14]
  return i3628
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3630 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3631 = data
  i3630.m_UiScaleMode = i3631[0]
  i3630.m_ReferencePixelsPerUnit = i3631[1]
  i3630.m_ScaleFactor = i3631[2]
  i3630.m_ReferenceResolution = new pc.Vec2( i3631[3], i3631[4] )
  i3630.m_ScreenMatchMode = i3631[5]
  i3630.m_MatchWidthOrHeight = i3631[6]
  i3630.m_PhysicalUnit = i3631[7]
  i3630.m_FallbackScreenDPI = i3631[8]
  i3630.m_DefaultSpriteDPI = i3631[9]
  i3630.m_DynamicPixelsPerUnit = i3631[10]
  i3630.m_PresetInfoIsWorld = !!i3631[11]
  return i3630
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3632 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3633 = data
  i3632.m_IgnoreReversedGraphics = !!i3633[0]
  i3632.m_BlockingObjects = i3633[1]
  i3632.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3633[2] )
  return i3632
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3634 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3635 = data
  request.r(i3635[0], i3635[1], 0, i3634, 'm_Texture')
  i3634.m_UVRect = UnityEngine.Rect.MinMaxRect(i3635[2], i3635[3], i3635[4], i3635[5])
  i3634.m_Maskable = !!i3635[6]
  request.r(i3635[7], i3635[8], 0, i3634, 'm_Material')
  i3634.m_Color = new pc.Color(i3635[9], i3635[10], i3635[11], i3635[12])
  i3634.m_RaycastTarget = !!i3635[13]
  i3634.m_RaycastPadding = new pc.Vec4( i3635[14], i3635[15], i3635[16], i3635[17] )
  return i3634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3637 = data
  request.r(i3637[0], i3637[1], 0, i3636, 'clip')
  request.r(i3637[2], i3637[3], 0, i3636, 'outputAudioMixerGroup')
  i3636.playOnAwake = !!i3637[4]
  i3636.loop = !!i3637[5]
  i3636.time = i3637[6]
  i3636.volume = i3637[7]
  i3636.pitch = i3637[8]
  i3636.enabled = !!i3637[9]
  return i3636
}

Deserializers["DropZone"] = function (request, data, root) {
  var i3638 = root || request.c( 'DropZone' )
  var i3639 = data
  i3638.idDrop = i3639[0]
  i3638.isLose = !!i3639[1]
  var i3641 = i3639[2]
  var i3640 = []
  for(var i = 0; i < i3641.length; i += 2) {
  request.r(i3641[i + 0], i3641[i + 1], 2, i3640, '')
  }
  i3638.steps = i3640
  return i3638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3645 = data
  i3644.usedByComposite = !!i3645[0]
  i3644.autoTiling = !!i3645[1]
  var i3647 = i3645[2]
  var i3646 = []
  for(var i = 0; i < i3647.length; i += 1) {
  var i3649 = i3647[i + 0]
  var i3648 = []
  for(var i = 0; i < i3649.length; i += 2) {
    i3648.push( new pc.Vec2( i3649[i + 0], i3649[i + 1] ) );
  }
    i3646.push( i3648 );
  }
  i3644.points = i3646
  i3644.enabled = !!i3645[3]
  i3644.isTrigger = !!i3645[4]
  i3644.usedByEffector = !!i3645[5]
  i3644.density = i3645[6]
  i3644.offset = new pc.Vec2( i3645[7], i3645[8] )
  request.r(i3645[9], i3645[10], 0, i3644, 'material')
  return i3644
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i3656 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i3657 = data
  request.r(i3657[0], i3657[1], 0, i3656, 'skeletonDataAsset')
  request.r(i3657[2], i3657[3], 0, i3656, 'additiveMaterial')
  request.r(i3657[4], i3657[5], 0, i3656, 'multiplyMaterial')
  request.r(i3657[6], i3657[7], 0, i3656, 'screenMaterial')
  i3656.initialSkinName = i3657[8]
  i3656.initialFlipX = !!i3657[9]
  i3656.initialFlipY = !!i3657[10]
  i3656.startingAnimation = i3657[11]
  i3656.startingLoop = !!i3657[12]
  i3656.timeScale = i3657[13]
  i3656.freeze = !!i3657[14]
  i3656.layoutScaleMode = i3657[15]
  i3656.updateWhenInvisible = i3657[16]
  i3656.allowMultipleCanvasRenderers = !!i3657[17]
  var i3659 = i3657[18]
  var i3658 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i3659.length; i += 2) {
  request.r(i3659[i + 0], i3659[i + 1], 1, i3658, '')
  }
  i3656.canvasRenderers = i3658
  i3656.enableSeparatorSlots = !!i3657[19]
  i3656.updateSeparatorPartLocation = !!i3657[20]
  i3656.updateSeparatorPartScale = !!i3657[21]
  i3656.disableMeshAssignmentOnOverride = !!i3657[22]
  i3656.m_SkeletonColor = new pc.Color(i3657[23], i3657[24], i3657[25], i3657[26])
  i3656.referenceSize = new pc.Vec2( i3657[27], i3657[28] )
  i3656.pivotOffset = new pc.Vec2( i3657[29], i3657[30] )
  i3656.referenceScale = i3657[31]
  i3656.layoutScale = i3657[32]
  i3656.rectTransformSize = new pc.Vec2( i3657[33], i3657[34] )
  i3656.editReferenceRect = !!i3657[35]
  var i3661 = i3657[36]
  var i3660 = []
  for(var i = 0; i < i3661.length; i += 1) {
    i3660.push( i3661[i + 0] );
  }
  i3656.separatorSlotNames = i3660
  var i3663 = i3657[37]
  var i3662 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3663.length; i += 2) {
  request.r(i3663[i + 0], i3663[i + 1], 1, i3662, '')
  }
  i3656.separatorParts = i3662
  i3656.physicsPositionInheritanceFactor = new pc.Vec2( i3657[38], i3657[39] )
  i3656.physicsRotationInheritanceFactor = i3657[40]
  request.r(i3657[41], i3657[42], 0, i3656, 'physicsMovementRelativeTo')
  i3656.meshGenerator = request.d('Spine.Unity.MeshGenerator', i3657[43], i3656.meshGenerator)
  i3656.updateTiming = i3657[44]
  i3656.unscaledTime = !!i3657[45]
  i3656.m_Maskable = !!i3657[46]
  request.r(i3657[47], i3657[48], 0, i3656, 'm_Material')
  i3656.m_Color = new pc.Color(i3657[49], i3657[50], i3657[51], i3657[52])
  i3656.m_RaycastTarget = !!i3657[53]
  i3656.m_RaycastPadding = new pc.Vec4( i3657[54], i3657[55], i3657[56], i3657[57] )
  return i3656
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i3670 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i3671 = data
  i3670.settings = request.d('Spine.Unity.MeshGenerator+Settings', i3671[0], i3670.settings)
  return i3670
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i3672 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i3673 = data
  i3672.useClipping = !!i3673[0]
  i3672.zSpacing = i3673[1]
  i3672.tintBlack = !!i3673[2]
  i3672.canvasGroupCompatible = !!i3673[3]
  i3672.pmaVertexColors = !!i3673[4]
  i3672.addNormals = !!i3673[5]
  i3672.calculateTangents = !!i3673[6]
  i3672.immutableTriangles = !!i3673[7]
  return i3672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3675 = data
  i3674.m_Alpha = i3675[0]
  i3674.m_Interactable = !!i3675[1]
  i3674.m_BlocksRaycasts = !!i3675[2]
  i3674.m_IgnoreParentGroups = !!i3675[3]
  i3674.enabled = !!i3675[4]
  return i3674
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i3676 = root || request.c( 'DraggableItem' )
  var i3677 = data
  i3676.idDrag = i3677[0]
  i3676.isProcess = !!i3677[1]
  return i3676
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i3678 = root || request.c( 'LunaManager' )
  var i3679 = data
  var i3681 = i3679[0]
  var i3680 = []
  for(var i = 0; i < i3681.length; i += 2) {
  request.r(i3681[i + 0], i3681[i + 1], 2, i3680, '')
  }
  i3678.lstBtnInstall = i3680
  request.r(i3679[1], i3679[2], 0, i3678, 'StartCard')
  request.r(i3679[3], i3679[4], 0, i3678, 'EndCard')
  request.r(i3679[5], i3679[6], 0, i3678, 'Parent')
  request.r(i3679[7], i3679[8], 0, i3678, 'LoseTitle')
  var i3683 = i3679[9]
  var i3682 = []
  for(var i = 0; i < i3683.length; i += 2) {
  request.r(i3683[i + 0], i3683[i + 1], 2, i3682, '')
  }
  i3678.tutorial = i3682
  i3678.timeDrag = i3679[10]
  i3678.isDrag = !!i3679[11]
  i3678.countPlay = i3679[12]
  i3678.countPlayFinal = i3679[13]
  i3678.countPlayMax = i3679[14]
  i3678.timeDropFinal = i3679[15]
  i3678.colorBG = new pc.Color(i3679[16], i3679[17], i3679[18], i3679[19])
  request.r(i3679[20], i3679[21], 0, i3678, 'texture2D')
  request.r(i3679[22], i3679[23], 0, i3678, 'rawImageBG')
  request.r(i3679[24], i3679[25], 0, i3678, 'textProgess')
  request.r(i3679[26], i3679[27], 0, i3678, 'imgProgess')
  request.r(i3679[28], i3679[29], 0, i3678, 'timeText')
  return i3678
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3686 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3687 = data
  i3686.targetIsSelf = !!i3687[0]
  request.r(i3687[1], i3687[2], 0, i3686, 'targetGO')
  i3686.tweenTargetIsTargetGO = !!i3687[3]
  i3686.delay = i3687[4]
  i3686.duration = i3687[5]
  i3686.easeType = i3687[6]
  i3686.easeCurve = new pc.AnimationCurve( { keys_flow: i3687[7] } )
  i3686.loopType = i3687[8]
  i3686.loops = i3687[9]
  i3686.id = i3687[10]
  i3686.isRelative = !!i3687[11]
  i3686.isFrom = !!i3687[12]
  i3686.isIndependentUpdate = !!i3687[13]
  i3686.autoKill = !!i3687[14]
  i3686.autoGenerate = !!i3687[15]
  i3686.isActive = !!i3687[16]
  i3686.isValid = !!i3687[17]
  request.r(i3687[18], i3687[19], 0, i3686, 'target')
  i3686.animationType = i3687[20]
  i3686.targetType = i3687[21]
  i3686.forcedTargetType = i3687[22]
  i3686.autoPlay = !!i3687[23]
  i3686.useTargetAsV3 = !!i3687[24]
  i3686.endValueFloat = i3687[25]
  i3686.endValueV3 = new pc.Vec3( i3687[26], i3687[27], i3687[28] )
  i3686.endValueV2 = new pc.Vec2( i3687[29], i3687[30] )
  i3686.endValueColor = new pc.Color(i3687[31], i3687[32], i3687[33], i3687[34])
  i3686.endValueString = i3687[35]
  i3686.endValueRect = UnityEngine.Rect.MinMaxRect(i3687[36], i3687[37], i3687[38], i3687[39])
  request.r(i3687[40], i3687[41], 0, i3686, 'endValueTransform')
  i3686.optionalBool0 = !!i3687[42]
  i3686.optionalBool1 = !!i3687[43]
  i3686.optionalFloat0 = i3687[44]
  i3686.optionalInt0 = i3687[45]
  i3686.optionalRotationMode = i3687[46]
  i3686.optionalScrambleMode = i3687[47]
  i3686.optionalShakeRandomnessMode = i3687[48]
  i3686.optionalString = i3687[49]
  i3686.updateType = i3687[50]
  i3686.isSpeedBased = !!i3687[51]
  i3686.hasOnStart = !!i3687[52]
  i3686.hasOnPlay = !!i3687[53]
  i3686.hasOnUpdate = !!i3687[54]
  i3686.hasOnStepComplete = !!i3687[55]
  i3686.hasOnComplete = !!i3687[56]
  i3686.hasOnTweenCreated = !!i3687[57]
  i3686.hasOnRewind = !!i3687[58]
  i3686.onStart = request.d('UnityEngine.Events.UnityEvent', i3687[59], i3686.onStart)
  i3686.onPlay = request.d('UnityEngine.Events.UnityEvent', i3687[60], i3686.onPlay)
  i3686.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3687[61], i3686.onUpdate)
  i3686.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3687[62], i3686.onStepComplete)
  i3686.onComplete = request.d('UnityEngine.Events.UnityEvent', i3687[63], i3686.onComplete)
  i3686.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3687[64], i3686.onTweenCreated)
  i3686.onRewind = request.d('UnityEngine.Events.UnityEvent', i3687[65], i3686.onRewind)
  return i3686
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3688 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3689 = data
  i3688.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3689[0], i3688.m_PersistentCalls)
  return i3688
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3690 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3691 = data
  var i3693 = i3691[0]
  var i3692 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3693.length; i += 1) {
    i3692.add(request.d('UnityEngine.Events.PersistentCall', i3693[i + 0]));
  }
  i3690.m_Calls = i3692
  return i3690
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3696 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3697 = data
  request.r(i3697[0], i3697[1], 0, i3696, 'm_Target')
  i3696.m_TargetAssemblyTypeName = i3697[2]
  i3696.m_MethodName = i3697[3]
  i3696.m_Mode = i3697[4]
  i3696.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3697[5], i3696.m_Arguments)
  i3696.m_CallState = i3697[6]
  return i3696
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3698 = root || request.c( 'UnityEngine.UI.Button' )
  var i3699 = data
  i3698.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3699[0], i3698.m_OnClick)
  i3698.m_Navigation = request.d('UnityEngine.UI.Navigation', i3699[1], i3698.m_Navigation)
  i3698.m_Transition = i3699[2]
  i3698.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3699[3], i3698.m_Colors)
  i3698.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3699[4], i3698.m_SpriteState)
  i3698.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3699[5], i3698.m_AnimationTriggers)
  i3698.m_Interactable = !!i3699[6]
  request.r(i3699[7], i3699[8], 0, i3698, 'm_TargetGraphic')
  return i3698
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3700 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3701 = data
  i3700.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3701[0], i3700.m_PersistentCalls)
  return i3700
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3702 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3703 = data
  i3702.m_Mode = i3703[0]
  i3702.m_WrapAround = !!i3703[1]
  request.r(i3703[2], i3703[3], 0, i3702, 'm_SelectOnUp')
  request.r(i3703[4], i3703[5], 0, i3702, 'm_SelectOnDown')
  request.r(i3703[6], i3703[7], 0, i3702, 'm_SelectOnLeft')
  request.r(i3703[8], i3703[9], 0, i3702, 'm_SelectOnRight')
  return i3702
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3704 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3705 = data
  i3704.m_NormalColor = new pc.Color(i3705[0], i3705[1], i3705[2], i3705[3])
  i3704.m_HighlightedColor = new pc.Color(i3705[4], i3705[5], i3705[6], i3705[7])
  i3704.m_PressedColor = new pc.Color(i3705[8], i3705[9], i3705[10], i3705[11])
  i3704.m_SelectedColor = new pc.Color(i3705[12], i3705[13], i3705[14], i3705[15])
  i3704.m_DisabledColor = new pc.Color(i3705[16], i3705[17], i3705[18], i3705[19])
  i3704.m_ColorMultiplier = i3705[20]
  i3704.m_FadeDuration = i3705[21]
  return i3704
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3706 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3707 = data
  request.r(i3707[0], i3707[1], 0, i3706, 'm_HighlightedSprite')
  request.r(i3707[2], i3707[3], 0, i3706, 'm_PressedSprite')
  request.r(i3707[4], i3707[5], 0, i3706, 'm_SelectedSprite')
  request.r(i3707[6], i3707[7], 0, i3706, 'm_DisabledSprite')
  return i3706
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3708 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3709 = data
  i3708.m_NormalTrigger = i3709[0]
  i3708.m_HighlightedTrigger = i3709[1]
  i3708.m_PressedTrigger = i3709[2]
  i3708.m_SelectedTrigger = i3709[3]
  i3708.m_DisabledTrigger = i3709[4]
  return i3708
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3710 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3711 = data
  i3710.m_ShowMaskGraphic = !!i3711[0]
  return i3710
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3712 = root || request.c( 'AudioController' )
  var i3713 = data
  request.r(i3713[0], i3713[1], 0, i3712, 'bgmSource')
  request.r(i3713[2], i3713[3], 0, i3712, 'sfxSource')
  var i3715 = i3713[4]
  var i3714 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i3715.length; i += 1) {
    i3714.add(request.d('AudioEntry', i3715[i + 0]));
  }
  i3712.audioEntries = i3714
  return i3712
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i3718 = root || request.c( 'AudioEntry' )
  var i3719 = data
  i3718.key = i3719[0]
  request.r(i3719[1], i3719[2], 0, i3718, 'clip')
  i3718.volume = i3719[3]
  return i3718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3721 = data
  i3720.ambientIntensity = i3721[0]
  i3720.reflectionIntensity = i3721[1]
  i3720.ambientMode = i3721[2]
  i3720.ambientLight = new pc.Color(i3721[3], i3721[4], i3721[5], i3721[6])
  i3720.ambientSkyColor = new pc.Color(i3721[7], i3721[8], i3721[9], i3721[10])
  i3720.ambientGroundColor = new pc.Color(i3721[11], i3721[12], i3721[13], i3721[14])
  i3720.ambientEquatorColor = new pc.Color(i3721[15], i3721[16], i3721[17], i3721[18])
  i3720.fogColor = new pc.Color(i3721[19], i3721[20], i3721[21], i3721[22])
  i3720.fogEndDistance = i3721[23]
  i3720.fogStartDistance = i3721[24]
  i3720.fogDensity = i3721[25]
  i3720.fog = !!i3721[26]
  request.r(i3721[27], i3721[28], 0, i3720, 'skybox')
  i3720.fogMode = i3721[29]
  var i3723 = i3721[30]
  var i3722 = []
  for(var i = 0; i < i3723.length; i += 1) {
    i3722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3723[i + 0]) );
  }
  i3720.lightmaps = i3722
  i3720.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3721[31], i3720.lightProbes)
  i3720.lightmapsMode = i3721[32]
  i3720.mixedBakeMode = i3721[33]
  i3720.environmentLightingMode = i3721[34]
  i3720.ambientProbe = new pc.SphericalHarmonicsL2(i3721[35])
  i3720.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3721[36])
  i3720.useReferenceAmbientProbe = !!i3721[37]
  request.r(i3721[38], i3721[39], 0, i3720, 'customReflection')
  request.r(i3721[40], i3721[41], 0, i3720, 'defaultReflection')
  i3720.defaultReflectionMode = i3721[42]
  i3720.defaultReflectionResolution = i3721[43]
  i3720.sunLightObjectId = i3721[44]
  i3720.pixelLightCount = i3721[45]
  i3720.defaultReflectionHDR = !!i3721[46]
  i3720.hasLightDataAsset = !!i3721[47]
  i3720.hasManualGenerate = !!i3721[48]
  return i3720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3727 = data
  request.r(i3727[0], i3727[1], 0, i3726, 'lightmapColor')
  request.r(i3727[2], i3727[3], 0, i3726, 'lightmapDirection')
  return i3726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3728 = root || new UnityEngine.LightProbes()
  var i3729 = data
  return i3728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3737 = data
  var i3739 = i3737[0]
  var i3738 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3739.length; i += 1) {
    i3738.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3739[i + 0]));
  }
  i3736.ShaderCompilationErrors = i3738
  i3736.name = i3737[1]
  i3736.guid = i3737[2]
  var i3741 = i3737[3]
  var i3740 = []
  for(var i = 0; i < i3741.length; i += 1) {
    i3740.push( i3741[i + 0] );
  }
  i3736.shaderDefinedKeywords = i3740
  var i3743 = i3737[4]
  var i3742 = []
  for(var i = 0; i < i3743.length; i += 1) {
    i3742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3743[i + 0]) );
  }
  i3736.passes = i3742
  var i3745 = i3737[5]
  var i3744 = []
  for(var i = 0; i < i3745.length; i += 1) {
    i3744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3745[i + 0]) );
  }
  i3736.usePasses = i3744
  var i3747 = i3737[6]
  var i3746 = []
  for(var i = 0; i < i3747.length; i += 1) {
    i3746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3747[i + 0]) );
  }
  i3736.defaultParameterValues = i3746
  request.r(i3737[7], i3737[8], 0, i3736, 'unityFallbackShader')
  i3736.readDepth = !!i3737[9]
  i3736.isCreatedByShaderGraph = !!i3737[10]
  i3736.disableBatching = !!i3737[11]
  i3736.compiled = !!i3737[12]
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3751 = data
  i3750.shaderName = i3751[0]
  i3750.errorMessage = i3751[1]
  return i3750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3754 = root || new pc.UnityShaderPass()
  var i3755 = data
  i3754.id = i3755[0]
  i3754.subShaderIndex = i3755[1]
  i3754.name = i3755[2]
  i3754.passType = i3755[3]
  i3754.grabPassTextureName = i3755[4]
  i3754.usePass = !!i3755[5]
  i3754.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3755[6], i3754.zTest)
  i3754.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3755[7], i3754.zWrite)
  i3754.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3755[8], i3754.culling)
  i3754.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3755[9], i3754.blending)
  i3754.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3755[10], i3754.alphaBlending)
  i3754.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3755[11], i3754.colorWriteMask)
  i3754.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3755[12], i3754.offsetUnits)
  i3754.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3755[13], i3754.offsetFactor)
  i3754.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3755[14], i3754.stencilRef)
  i3754.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3755[15], i3754.stencilReadMask)
  i3754.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3755[16], i3754.stencilWriteMask)
  i3754.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3755[17], i3754.stencilOp)
  i3754.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3755[18], i3754.stencilOpFront)
  i3754.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3755[19], i3754.stencilOpBack)
  var i3757 = i3755[20]
  var i3756 = []
  for(var i = 0; i < i3757.length; i += 1) {
    i3756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3757[i + 0]) );
  }
  i3754.tags = i3756
  var i3759 = i3755[21]
  var i3758 = []
  for(var i = 0; i < i3759.length; i += 1) {
    i3758.push( i3759[i + 0] );
  }
  i3754.passDefinedKeywords = i3758
  var i3761 = i3755[22]
  var i3760 = []
  for(var i = 0; i < i3761.length; i += 1) {
    i3760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3761[i + 0]) );
  }
  i3754.passDefinedKeywordGroups = i3760
  var i3763 = i3755[23]
  var i3762 = []
  for(var i = 0; i < i3763.length; i += 1) {
    i3762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3763[i + 0]) );
  }
  i3754.variants = i3762
  var i3765 = i3755[24]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 1) {
    i3764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3765[i + 0]) );
  }
  i3754.excludedVariants = i3764
  i3754.hasDepthReader = !!i3755[25]
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3767 = data
  i3766.val = i3767[0]
  i3766.name = i3767[1]
  return i3766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3769 = data
  i3768.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3769[0], i3768.src)
  i3768.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3769[1], i3768.dst)
  i3768.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3769[2], i3768.op)
  return i3768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3771 = data
  i3770.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3771[0], i3770.pass)
  i3770.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3771[1], i3770.fail)
  i3770.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3771[2], i3770.zFail)
  i3770.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3771[3], i3770.comp)
  return i3770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3775 = data
  i3774.name = i3775[0]
  i3774.value = i3775[1]
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3779 = data
  var i3781 = i3779[0]
  var i3780 = []
  for(var i = 0; i < i3781.length; i += 1) {
    i3780.push( i3781[i + 0] );
  }
  i3778.keywords = i3780
  i3778.hasDiscard = !!i3779[1]
  return i3778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3785 = data
  i3784.passId = i3785[0]
  i3784.subShaderIndex = i3785[1]
  var i3787 = i3785[2]
  var i3786 = []
  for(var i = 0; i < i3787.length; i += 1) {
    i3786.push( i3787[i + 0] );
  }
  i3784.keywords = i3786
  i3784.vertexProgram = i3785[3]
  i3784.fragmentProgram = i3785[4]
  i3784.exportedForWebGl2 = !!i3785[5]
  i3784.readDepth = !!i3785[6]
  return i3784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3791 = data
  request.r(i3791[0], i3791[1], 0, i3790, 'shader')
  i3790.pass = i3791[2]
  return i3790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3795 = data
  i3794.name = i3795[0]
  i3794.type = i3795[1]
  i3794.value = new pc.Vec4( i3795[2], i3795[3], i3795[4], i3795[5] )
  i3794.textureValue = i3795[6]
  i3794.shaderPropertyFlag = i3795[7]
  return i3794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3797 = data
  i3796.name = i3797[0]
  request.r(i3797[1], i3797[2], 0, i3796, 'texture')
  i3796.aabb = i3797[3]
  i3796.vertices = i3797[4]
  i3796.triangles = i3797[5]
  i3796.textureRect = UnityEngine.Rect.MinMaxRect(i3797[6], i3797[7], i3797[8], i3797[9])
  i3796.packedRect = UnityEngine.Rect.MinMaxRect(i3797[10], i3797[11], i3797[12], i3797[13])
  i3796.border = new pc.Vec4( i3797[14], i3797[15], i3797[16], i3797[17] )
  i3796.transparency = i3797[18]
  i3796.bounds = i3797[19]
  i3796.pixelsPerUnit = i3797[20]
  i3796.textureWidth = i3797[21]
  i3796.textureHeight = i3797[22]
  i3796.nativeSize = new pc.Vec2( i3797[23], i3797[24] )
  i3796.pivot = new pc.Vec2( i3797[25], i3797[26] )
  i3796.textureRectOffset = new pc.Vec2( i3797[27], i3797[28] )
  return i3796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3799 = data
  i3798.name = i3799[0]
  return i3798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3801 = data
  i3800.name = i3801[0]
  i3800.ascent = i3801[1]
  i3800.originalLineHeight = i3801[2]
  i3800.fontSize = i3801[3]
  var i3803 = i3801[4]
  var i3802 = []
  for(var i = 0; i < i3803.length; i += 1) {
    i3802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3803[i + 0]) );
  }
  i3800.characterInfo = i3802
  request.r(i3801[5], i3801[6], 0, i3800, 'texture')
  i3800.originalFontSize = i3801[7]
  return i3800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3807 = data
  i3806.index = i3807[0]
  i3806.advance = i3807[1]
  i3806.bearing = i3807[2]
  i3806.glyphWidth = i3807[3]
  i3806.glyphHeight = i3807[4]
  i3806.minX = i3807[5]
  i3806.maxX = i3807[6]
  i3806.minY = i3807[7]
  i3806.maxY = i3807[8]
  i3806.uvBottomLeftX = i3807[9]
  i3806.uvBottomLeftY = i3807[10]
  i3806.uvBottomRightX = i3807[11]
  i3806.uvBottomRightY = i3807[12]
  i3806.uvTopLeftX = i3807[13]
  i3806.uvTopLeftY = i3807[14]
  i3806.uvTopRightX = i3807[15]
  i3806.uvTopRightY = i3807[16]
  return i3806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3809 = data
  i3808.name = i3809[0]
  i3808.bytes64 = i3809[1]
  i3808.data = i3809[2]
  return i3808
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3810 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3811 = data
  var i3813 = i3811[0]
  var i3812 = []
  for(var i = 0; i < i3813.length; i += 2) {
  request.r(i3813[i + 0], i3813[i + 1], 2, i3812, '')
  }
  i3810.atlasAssets = i3812
  i3810.scale = i3811[1]
  request.r(i3811[2], i3811[3], 0, i3810, 'skeletonJSON')
  i3810.isUpgradingBlendModeMaterials = !!i3811[4]
  i3810.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3811[5], i3810.blendModeMaterials)
  var i3815 = i3811[6]
  var i3814 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3815.length; i += 2) {
  request.r(i3815[i + 0], i3815[i + 1], 1, i3814, '')
  }
  i3810.skeletonDataModifiers = i3814
  var i3817 = i3811[7]
  var i3816 = []
  for(var i = 0; i < i3817.length; i += 1) {
    i3816.push( i3817[i + 0] );
  }
  i3810.fromAnimation = i3816
  var i3819 = i3811[8]
  var i3818 = []
  for(var i = 0; i < i3819.length; i += 1) {
    i3818.push( i3819[i + 0] );
  }
  i3810.toAnimation = i3818
  i3810.duration = i3811[9]
  i3810.defaultMix = i3811[10]
  request.r(i3811[11], i3811[12], 0, i3810, 'controller')
  return i3810
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3822 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3823 = data
  i3822.applyAdditiveMaterial = !!i3823[0]
  var i3825 = i3823[1]
  var i3824 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3825.length; i += 1) {
    i3824.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3825[i + 0]));
  }
  i3822.additiveMaterials = i3824
  var i3827 = i3823[2]
  var i3826 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3827.length; i += 1) {
    i3826.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3827[i + 0]));
  }
  i3822.multiplyMaterials = i3826
  var i3829 = i3823[3]
  var i3828 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3829.length; i += 1) {
    i3828.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3829[i + 0]));
  }
  i3822.screenMaterials = i3828
  i3822.requiresBlendModeMaterials = !!i3823[4]
  return i3822
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3832 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3833 = data
  i3832.pageName = i3833[0]
  request.r(i3833[1], i3833[2], 0, i3832, 'material')
  return i3832
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3836 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3837 = data
  request.r(i3837[0], i3837[1], 0, i3836, 'atlasFile')
  var i3839 = i3837[2]
  var i3838 = []
  for(var i = 0; i < i3839.length; i += 2) {
  request.r(i3839[i + 0], i3839[i + 1], 2, i3838, '')
  }
  i3836.materials = i3838
  i3836.textureLoadingMode = i3837[3]
  request.r(i3837[4], i3837[5], 0, i3836, 'onDemandTextureLoader')
  return i3836
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3840 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3841 = data
  request.r(i3841[0], i3841[1], 0, i3840, 'atlas')
  i3840.normalStyle = i3841[2]
  i3840.normalSpacingOffset = i3841[3]
  i3840.boldStyle = i3841[4]
  i3840.boldSpacing = i3841[5]
  i3840.italicStyle = i3841[6]
  i3840.tabSize = i3841[7]
  i3840.hashCode = i3841[8]
  request.r(i3841[9], i3841[10], 0, i3840, 'material')
  i3840.materialHashCode = i3841[11]
  i3840.m_Version = i3841[12]
  i3840.m_SourceFontFileGUID = i3841[13]
  request.r(i3841[14], i3841[15], 0, i3840, 'm_SourceFontFile_EditorRef')
  request.r(i3841[16], i3841[17], 0, i3840, 'm_SourceFontFile')
  i3840.m_AtlasPopulationMode = i3841[18]
  i3840.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3841[19], i3840.m_FaceInfo)
  var i3843 = i3841[20]
  var i3842 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3843.length; i += 1) {
    i3842.add(request.d('UnityEngine.TextCore.Glyph', i3843[i + 0]));
  }
  i3840.m_GlyphTable = i3842
  var i3845 = i3841[21]
  var i3844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3845.length; i += 1) {
    i3844.add(request.d('TMPro.TMP_Character', i3845[i + 0]));
  }
  i3840.m_CharacterTable = i3844
  var i3847 = i3841[22]
  var i3846 = []
  for(var i = 0; i < i3847.length; i += 2) {
  request.r(i3847[i + 0], i3847[i + 1], 2, i3846, '')
  }
  i3840.m_AtlasTextures = i3846
  i3840.m_AtlasTextureIndex = i3841[23]
  i3840.m_IsMultiAtlasTexturesEnabled = !!i3841[24]
  i3840.m_ClearDynamicDataOnBuild = !!i3841[25]
  var i3849 = i3841[26]
  var i3848 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3849.length; i += 1) {
    i3848.add(request.d('UnityEngine.TextCore.GlyphRect', i3849[i + 0]));
  }
  i3840.m_UsedGlyphRects = i3848
  var i3851 = i3841[27]
  var i3850 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3851.length; i += 1) {
    i3850.add(request.d('UnityEngine.TextCore.GlyphRect', i3851[i + 0]));
  }
  i3840.m_FreeGlyphRects = i3850
  i3840.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3841[28], i3840.m_fontInfo)
  i3840.m_AtlasWidth = i3841[29]
  i3840.m_AtlasHeight = i3841[30]
  i3840.m_AtlasPadding = i3841[31]
  i3840.m_AtlasRenderMode = i3841[32]
  var i3853 = i3841[33]
  var i3852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3853.length; i += 1) {
    i3852.add(request.d('TMPro.TMP_Glyph', i3853[i + 0]));
  }
  i3840.m_glyphInfoList = i3852
  i3840.m_KerningTable = request.d('TMPro.KerningTable', i3841[34], i3840.m_KerningTable)
  i3840.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3841[35], i3840.m_FontFeatureTable)
  var i3855 = i3841[36]
  var i3854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3855.length; i += 2) {
  request.r(i3855[i + 0], i3855[i + 1], 1, i3854, '')
  }
  i3840.fallbackFontAssets = i3854
  var i3857 = i3841[37]
  var i3856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3857.length; i += 2) {
  request.r(i3857[i + 0], i3857[i + 1], 1, i3856, '')
  }
  i3840.m_FallbackFontAssetTable = i3856
  i3840.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3841[38], i3840.m_CreationSettings)
  var i3859 = i3841[39]
  var i3858 = []
  for(var i = 0; i < i3859.length; i += 1) {
    i3858.push( request.d('TMPro.TMP_FontWeightPair', i3859[i + 0]) );
  }
  i3840.m_FontWeightTable = i3858
  var i3861 = i3841[40]
  var i3860 = []
  for(var i = 0; i < i3861.length; i += 1) {
    i3860.push( request.d('TMPro.TMP_FontWeightPair', i3861[i + 0]) );
  }
  i3840.fontWeights = i3860
  return i3840
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3862 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3863 = data
  i3862.m_FaceIndex = i3863[0]
  i3862.m_FamilyName = i3863[1]
  i3862.m_StyleName = i3863[2]
  i3862.m_PointSize = i3863[3]
  i3862.m_Scale = i3863[4]
  i3862.m_UnitsPerEM = i3863[5]
  i3862.m_LineHeight = i3863[6]
  i3862.m_AscentLine = i3863[7]
  i3862.m_CapLine = i3863[8]
  i3862.m_MeanLine = i3863[9]
  i3862.m_Baseline = i3863[10]
  i3862.m_DescentLine = i3863[11]
  i3862.m_SuperscriptOffset = i3863[12]
  i3862.m_SuperscriptSize = i3863[13]
  i3862.m_SubscriptOffset = i3863[14]
  i3862.m_SubscriptSize = i3863[15]
  i3862.m_UnderlineOffset = i3863[16]
  i3862.m_UnderlineThickness = i3863[17]
  i3862.m_StrikethroughOffset = i3863[18]
  i3862.m_StrikethroughThickness = i3863[19]
  i3862.m_TabWidth = i3863[20]
  return i3862
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3866 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3867 = data
  i3866.m_Index = i3867[0]
  i3866.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3867[1], i3866.m_Metrics)
  i3866.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3867[2], i3866.m_GlyphRect)
  i3866.m_Scale = i3867[3]
  i3866.m_AtlasIndex = i3867[4]
  i3866.m_ClassDefinitionType = i3867[5]
  return i3866
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3868 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3869 = data
  i3868.m_Width = i3869[0]
  i3868.m_Height = i3869[1]
  i3868.m_HorizontalBearingX = i3869[2]
  i3868.m_HorizontalBearingY = i3869[3]
  i3868.m_HorizontalAdvance = i3869[4]
  return i3868
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3870 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3871 = data
  i3870.m_X = i3871[0]
  i3870.m_Y = i3871[1]
  i3870.m_Width = i3871[2]
  i3870.m_Height = i3871[3]
  return i3870
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3874 = root || request.c( 'TMPro.TMP_Character' )
  var i3875 = data
  i3874.m_ElementType = i3875[0]
  i3874.m_Unicode = i3875[1]
  i3874.m_GlyphIndex = i3875[2]
  i3874.m_Scale = i3875[3]
  return i3874
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3880 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3881 = data
  i3880.Name = i3881[0]
  i3880.PointSize = i3881[1]
  i3880.Scale = i3881[2]
  i3880.CharacterCount = i3881[3]
  i3880.LineHeight = i3881[4]
  i3880.Baseline = i3881[5]
  i3880.Ascender = i3881[6]
  i3880.CapHeight = i3881[7]
  i3880.Descender = i3881[8]
  i3880.CenterLine = i3881[9]
  i3880.SuperscriptOffset = i3881[10]
  i3880.SubscriptOffset = i3881[11]
  i3880.SubSize = i3881[12]
  i3880.Underline = i3881[13]
  i3880.UnderlineThickness = i3881[14]
  i3880.strikethrough = i3881[15]
  i3880.strikethroughThickness = i3881[16]
  i3880.TabWidth = i3881[17]
  i3880.Padding = i3881[18]
  i3880.AtlasWidth = i3881[19]
  i3880.AtlasHeight = i3881[20]
  return i3880
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3884 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3885 = data
  i3884.id = i3885[0]
  i3884.x = i3885[1]
  i3884.y = i3885[2]
  i3884.width = i3885[3]
  i3884.height = i3885[4]
  i3884.xOffset = i3885[5]
  i3884.yOffset = i3885[6]
  i3884.xAdvance = i3885[7]
  i3884.scale = i3885[8]
  return i3884
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3886 = root || request.c( 'TMPro.KerningTable' )
  var i3887 = data
  var i3889 = i3887[0]
  var i3888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3889.length; i += 1) {
    i3888.add(request.d('TMPro.KerningPair', i3889[i + 0]));
  }
  i3886.kerningPairs = i3888
  return i3886
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3892 = root || request.c( 'TMPro.KerningPair' )
  var i3893 = data
  i3892.xOffset = i3893[0]
  i3892.m_FirstGlyph = i3893[1]
  i3892.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3893[2], i3892.m_FirstGlyphAdjustments)
  i3892.m_SecondGlyph = i3893[3]
  i3892.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3893[4], i3892.m_SecondGlyphAdjustments)
  i3892.m_IgnoreSpacingAdjustments = !!i3893[5]
  return i3892
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3894 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3895 = data
  var i3897 = i3895[0]
  var i3896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3897.length; i += 1) {
    i3896.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3897[i + 0]));
  }
  i3894.m_GlyphPairAdjustmentRecords = i3896
  return i3894
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3900 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3901 = data
  i3900.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3901[0], i3900.m_FirstAdjustmentRecord)
  i3900.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3901[1], i3900.m_SecondAdjustmentRecord)
  i3900.m_FeatureLookupFlags = i3901[2]
  return i3900
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3904 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3905 = data
  i3904.sourceFontFileName = i3905[0]
  i3904.sourceFontFileGUID = i3905[1]
  i3904.pointSizeSamplingMode = i3905[2]
  i3904.pointSize = i3905[3]
  i3904.padding = i3905[4]
  i3904.packingMode = i3905[5]
  i3904.atlasWidth = i3905[6]
  i3904.atlasHeight = i3905[7]
  i3904.characterSetSelectionMode = i3905[8]
  i3904.characterSequence = i3905[9]
  i3904.referencedFontAssetGUID = i3905[10]
  i3904.referencedTextAssetGUID = i3905[11]
  i3904.fontStyle = i3905[12]
  i3904.fontStyleModifier = i3905[13]
  i3904.renderMode = i3905[14]
  i3904.includeFontFeatures = !!i3905[15]
  return i3904
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3908 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3909 = data
  request.r(i3909[0], i3909[1], 0, i3908, 'regularTypeface')
  request.r(i3909[2], i3909[3], 0, i3908, 'italicTypeface')
  return i3908
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3910 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3911 = data
  i3910.useSafeMode = !!i3911[0]
  i3910.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3911[1], i3910.safeModeOptions)
  i3910.timeScale = i3911[2]
  i3910.unscaledTimeScale = i3911[3]
  i3910.useSmoothDeltaTime = !!i3911[4]
  i3910.maxSmoothUnscaledTime = i3911[5]
  i3910.rewindCallbackMode = i3911[6]
  i3910.showUnityEditorReport = !!i3911[7]
  i3910.logBehaviour = i3911[8]
  i3910.drawGizmos = !!i3911[9]
  i3910.defaultRecyclable = !!i3911[10]
  i3910.defaultAutoPlay = i3911[11]
  i3910.defaultUpdateType = i3911[12]
  i3910.defaultTimeScaleIndependent = !!i3911[13]
  i3910.defaultEaseType = i3911[14]
  i3910.defaultEaseOvershootOrAmplitude = i3911[15]
  i3910.defaultEasePeriod = i3911[16]
  i3910.defaultAutoKill = !!i3911[17]
  i3910.defaultLoopType = i3911[18]
  i3910.debugMode = !!i3911[19]
  i3910.debugStoreTargetId = !!i3911[20]
  i3910.showPreviewPanel = !!i3911[21]
  i3910.storeSettingsLocation = i3911[22]
  i3910.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3911[23], i3910.modules)
  i3910.createASMDEF = !!i3911[24]
  i3910.showPlayingTweens = !!i3911[25]
  i3910.showPausedTweens = !!i3911[26]
  return i3910
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3912 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3913 = data
  i3912.logBehaviour = i3913[0]
  i3912.nestedTweenFailureBehaviour = i3913[1]
  return i3912
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3914 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3915 = data
  i3914.showPanel = !!i3915[0]
  i3914.audioEnabled = !!i3915[1]
  i3914.physicsEnabled = !!i3915[2]
  i3914.physics2DEnabled = !!i3915[3]
  i3914.spriteEnabled = !!i3915[4]
  i3914.uiEnabled = !!i3915[5]
  i3914.textMeshProEnabled = !!i3915[6]
  i3914.tk2DEnabled = !!i3915[7]
  i3914.deAudioEnabled = !!i3915[8]
  i3914.deUnityExtendedEnabled = !!i3915[9]
  i3914.epoOutlineEnabled = !!i3915[10]
  return i3914
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3916 = root || request.c( 'TMPro.TMP_Settings' )
  var i3917 = data
  i3916.m_enableWordWrapping = !!i3917[0]
  i3916.m_enableKerning = !!i3917[1]
  i3916.m_enableExtraPadding = !!i3917[2]
  i3916.m_enableTintAllSprites = !!i3917[3]
  i3916.m_enableParseEscapeCharacters = !!i3917[4]
  i3916.m_EnableRaycastTarget = !!i3917[5]
  i3916.m_GetFontFeaturesAtRuntime = !!i3917[6]
  i3916.m_missingGlyphCharacter = i3917[7]
  i3916.m_warningsDisabled = !!i3917[8]
  request.r(i3917[9], i3917[10], 0, i3916, 'm_defaultFontAsset')
  i3916.m_defaultFontAssetPath = i3917[11]
  i3916.m_defaultFontSize = i3917[12]
  i3916.m_defaultAutoSizeMinRatio = i3917[13]
  i3916.m_defaultAutoSizeMaxRatio = i3917[14]
  i3916.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3917[15], i3917[16] )
  i3916.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3917[17], i3917[18] )
  i3916.m_autoSizeTextContainer = !!i3917[19]
  i3916.m_IsTextObjectScaleStatic = !!i3917[20]
  var i3919 = i3917[21]
  var i3918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3919.length; i += 2) {
  request.r(i3919[i + 0], i3919[i + 1], 1, i3918, '')
  }
  i3916.m_fallbackFontAssets = i3918
  i3916.m_matchMaterialPreset = !!i3917[22]
  request.r(i3917[23], i3917[24], 0, i3916, 'm_defaultSpriteAsset')
  i3916.m_defaultSpriteAssetPath = i3917[25]
  i3916.m_enableEmojiSupport = !!i3917[26]
  i3916.m_MissingCharacterSpriteUnicode = i3917[27]
  i3916.m_defaultColorGradientPresetsPath = i3917[28]
  request.r(i3917[29], i3917[30], 0, i3916, 'm_defaultStyleSheet')
  i3916.m_StyleSheetsResourcePath = i3917[31]
  request.r(i3917[32], i3917[33], 0, i3916, 'm_leadingCharacters')
  request.r(i3917[34], i3917[35], 0, i3916, 'm_followingCharacters')
  i3916.m_UseModernHangulLineBreakingRules = !!i3917[36]
  return i3916
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3920 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3921 = data
  request.r(i3921[0], i3921[1], 0, i3920, 'spriteSheet')
  var i3923 = i3921[2]
  var i3922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3923.length; i += 1) {
    i3922.add(request.d('TMPro.TMP_Sprite', i3923[i + 0]));
  }
  i3920.spriteInfoList = i3922
  var i3925 = i3921[3]
  var i3924 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3925.length; i += 2) {
  request.r(i3925[i + 0], i3925[i + 1], 1, i3924, '')
  }
  i3920.fallbackSpriteAssets = i3924
  i3920.hashCode = i3921[4]
  request.r(i3921[5], i3921[6], 0, i3920, 'material')
  i3920.materialHashCode = i3921[7]
  i3920.m_Version = i3921[8]
  i3920.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3921[9], i3920.m_FaceInfo)
  var i3927 = i3921[10]
  var i3926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3927.length; i += 1) {
    i3926.add(request.d('TMPro.TMP_SpriteCharacter', i3927[i + 0]));
  }
  i3920.m_SpriteCharacterTable = i3926
  var i3929 = i3921[11]
  var i3928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3929.length; i += 1) {
    i3928.add(request.d('TMPro.TMP_SpriteGlyph', i3929[i + 0]));
  }
  i3920.m_SpriteGlyphTable = i3928
  return i3920
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3932 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3933 = data
  i3932.name = i3933[0]
  i3932.hashCode = i3933[1]
  i3932.unicode = i3933[2]
  i3932.pivot = new pc.Vec2( i3933[3], i3933[4] )
  request.r(i3933[5], i3933[6], 0, i3932, 'sprite')
  i3932.id = i3933[7]
  i3932.x = i3933[8]
  i3932.y = i3933[9]
  i3932.width = i3933[10]
  i3932.height = i3933[11]
  i3932.xOffset = i3933[12]
  i3932.yOffset = i3933[13]
  i3932.xAdvance = i3933[14]
  i3932.scale = i3933[15]
  return i3932
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3938 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3939 = data
  i3938.m_Name = i3939[0]
  i3938.m_HashCode = i3939[1]
  i3938.m_ElementType = i3939[2]
  i3938.m_Unicode = i3939[3]
  i3938.m_GlyphIndex = i3939[4]
  i3938.m_Scale = i3939[5]
  return i3938
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3942 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3943 = data
  request.r(i3943[0], i3943[1], 0, i3942, 'sprite')
  i3942.m_Index = i3943[2]
  i3942.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3943[3], i3942.m_Metrics)
  i3942.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3943[4], i3942.m_GlyphRect)
  i3942.m_Scale = i3943[5]
  i3942.m_AtlasIndex = i3943[6]
  i3942.m_ClassDefinitionType = i3943[7]
  return i3942
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3944 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3945 = data
  var i3947 = i3945[0]
  var i3946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3947.length; i += 1) {
    i3946.add(request.d('TMPro.TMP_Style', i3947[i + 0]));
  }
  i3944.m_StyleList = i3946
  return i3944
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3950 = root || request.c( 'TMPro.TMP_Style' )
  var i3951 = data
  i3950.m_Name = i3951[0]
  i3950.m_HashCode = i3951[1]
  i3950.m_OpeningDefinition = i3951[2]
  i3950.m_ClosingDefinition = i3951[3]
  i3950.m_OpeningTagArray = i3951[4]
  i3950.m_ClosingTagArray = i3951[5]
  i3950.m_OpeningTagUnicodeArray = i3951[6]
  i3950.m_ClosingTagUnicodeArray = i3951[7]
  return i3950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3953 = data
  var i3955 = i3953[0]
  var i3954 = []
  for(var i = 0; i < i3955.length; i += 1) {
    i3954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3955[i + 0]) );
  }
  i3952.files = i3954
  i3952.componentToPrefabIds = i3953[1]
  return i3952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3959 = data
  i3958.path = i3959[0]
  request.r(i3959[1], i3959[2], 0, i3958, 'unityObject')
  return i3958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3961 = data
  var i3963 = i3961[0]
  var i3962 = []
  for(var i = 0; i < i3963.length; i += 1) {
    i3962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3963[i + 0]) );
  }
  i3960.scriptsExecutionOrder = i3962
  var i3965 = i3961[1]
  var i3964 = []
  for(var i = 0; i < i3965.length; i += 1) {
    i3964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3965[i + 0]) );
  }
  i3960.sortingLayers = i3964
  var i3967 = i3961[2]
  var i3966 = []
  for(var i = 0; i < i3967.length; i += 1) {
    i3966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3967[i + 0]) );
  }
  i3960.cullingLayers = i3966
  i3960.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3961[3], i3960.timeSettings)
  i3960.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3961[4], i3960.physicsSettings)
  i3960.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3961[5], i3960.physics2DSettings)
  i3960.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3961[6], i3960.qualitySettings)
  i3960.enableRealtimeShadows = !!i3961[7]
  i3960.enableAutoInstancing = !!i3961[8]
  i3960.enableStaticBatching = !!i3961[9]
  i3960.enableDynamicBatching = !!i3961[10]
  i3960.lightmapEncodingQuality = i3961[11]
  i3960.desiredColorSpace = i3961[12]
  var i3969 = i3961[13]
  var i3968 = []
  for(var i = 0; i < i3969.length; i += 1) {
    i3968.push( i3969[i + 0] );
  }
  i3960.allTags = i3968
  return i3960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3973 = data
  i3972.name = i3973[0]
  i3972.value = i3973[1]
  return i3972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3977 = data
  i3976.id = i3977[0]
  i3976.name = i3977[1]
  i3976.value = i3977[2]
  return i3976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3981 = data
  i3980.id = i3981[0]
  i3980.name = i3981[1]
  return i3980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3983 = data
  i3982.fixedDeltaTime = i3983[0]
  i3982.maximumDeltaTime = i3983[1]
  i3982.timeScale = i3983[2]
  i3982.maximumParticleTimestep = i3983[3]
  return i3982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3985 = data
  i3984.gravity = new pc.Vec3( i3985[0], i3985[1], i3985[2] )
  i3984.defaultSolverIterations = i3985[3]
  i3984.bounceThreshold = i3985[4]
  i3984.autoSyncTransforms = !!i3985[5]
  i3984.autoSimulation = !!i3985[6]
  var i3987 = i3985[7]
  var i3986 = []
  for(var i = 0; i < i3987.length; i += 1) {
    i3986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3987[i + 0]) );
  }
  i3984.collisionMatrix = i3986
  return i3984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3991 = data
  i3990.enabled = !!i3991[0]
  i3990.layerId = i3991[1]
  i3990.otherLayerId = i3991[2]
  return i3990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3993 = data
  request.r(i3993[0], i3993[1], 0, i3992, 'material')
  i3992.gravity = new pc.Vec2( i3993[2], i3993[3] )
  i3992.positionIterations = i3993[4]
  i3992.velocityIterations = i3993[5]
  i3992.velocityThreshold = i3993[6]
  i3992.maxLinearCorrection = i3993[7]
  i3992.maxAngularCorrection = i3993[8]
  i3992.maxTranslationSpeed = i3993[9]
  i3992.maxRotationSpeed = i3993[10]
  i3992.baumgarteScale = i3993[11]
  i3992.baumgarteTOIScale = i3993[12]
  i3992.timeToSleep = i3993[13]
  i3992.linearSleepTolerance = i3993[14]
  i3992.angularSleepTolerance = i3993[15]
  i3992.defaultContactOffset = i3993[16]
  i3992.autoSimulation = !!i3993[17]
  i3992.queriesHitTriggers = !!i3993[18]
  i3992.queriesStartInColliders = !!i3993[19]
  i3992.callbacksOnDisable = !!i3993[20]
  i3992.reuseCollisionCallbacks = !!i3993[21]
  i3992.autoSyncTransforms = !!i3993[22]
  var i3995 = i3993[23]
  var i3994 = []
  for(var i = 0; i < i3995.length; i += 1) {
    i3994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3995[i + 0]) );
  }
  i3992.collisionMatrix = i3994
  return i3992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3999 = data
  i3998.enabled = !!i3999[0]
  i3998.layerId = i3999[1]
  i3998.otherLayerId = i3999[2]
  return i3998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4001 = data
  var i4003 = i4001[0]
  var i4002 = []
  for(var i = 0; i < i4003.length; i += 1) {
    i4002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4003[i + 0]) );
  }
  i4000.qualityLevels = i4002
  var i4005 = i4001[1]
  var i4004 = []
  for(var i = 0; i < i4005.length; i += 1) {
    i4004.push( i4005[i + 0] );
  }
  i4000.names = i4004
  i4000.shadows = i4001[2]
  i4000.anisotropicFiltering = i4001[3]
  i4000.antiAliasing = i4001[4]
  i4000.lodBias = i4001[5]
  i4000.shadowCascades = i4001[6]
  i4000.shadowDistance = i4001[7]
  i4000.shadowmaskMode = i4001[8]
  i4000.shadowProjection = i4001[9]
  i4000.shadowResolution = i4001[10]
  i4000.softParticles = !!i4001[11]
  i4000.softVegetation = !!i4001[12]
  i4000.activeColorSpace = i4001[13]
  i4000.desiredColorSpace = i4001[14]
  i4000.masterTextureLimit = i4001[15]
  i4000.maxQueuedFrames = i4001[16]
  i4000.particleRaycastBudget = i4001[17]
  i4000.pixelLightCount = i4001[18]
  i4000.realtimeReflectionProbes = !!i4001[19]
  i4000.shadowCascade2Split = i4001[20]
  i4000.shadowCascade4Split = new pc.Vec3( i4001[21], i4001[22], i4001[23] )
  i4000.streamingMipmapsActive = !!i4001[24]
  i4000.vSyncCount = i4001[25]
  i4000.asyncUploadBufferSize = i4001[26]
  i4000.asyncUploadTimeSlice = i4001[27]
  i4000.billboardsFaceCameraPosition = !!i4001[28]
  i4000.shadowNearPlaneOffset = i4001[29]
  i4000.streamingMipmapsMemoryBudget = i4001[30]
  i4000.maximumLODLevel = i4001[31]
  i4000.streamingMipmapsAddAllCameras = !!i4001[32]
  i4000.streamingMipmapsMaxLevelReduction = i4001[33]
  i4000.streamingMipmapsRenderersPerFrame = i4001[34]
  i4000.resolutionScalingFixedDPIFactor = i4001[35]
  i4000.streamingMipmapsMaxFileIORequests = i4001[36]
  i4000.currentQualityLevel = i4001[37]
  return i4000
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4008 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4009 = data
  request.r(i4009[0], i4009[1], 0, i4008, 'm_ObjectArgument')
  i4008.m_ObjectArgumentAssemblyTypeName = i4009[2]
  i4008.m_IntArgument = i4009[3]
  i4008.m_FloatArgument = i4009[4]
  i4008.m_StringArgument = i4009[5]
  i4008.m_BoolArgument = !!i4009[6]
  return i4008
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4010 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4011 = data
  i4010.xPlacement = i4011[0]
  i4010.yPlacement = i4011[1]
  i4010.xAdvance = i4011[2]
  i4010.yAdvance = i4011[3]
  return i4010
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4012 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i4013 = data
  i4012.m_GlyphIndex = i4013[0]
  i4012.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i4013[1], i4012.m_GlyphValueRecord)
  return i4012
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i4014 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i4015 = data
  i4014.m_XPlacement = i4015[0]
  i4014.m_YPlacement = i4015[1]
  i4014.m_XAdvance = i4015[2]
  i4014.m_YAdvance = i4015[3]
  return i4014
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[11],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[52],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[11],"74":[75],"76":[77],"78":[77],"15":[2],"79":[80],"81":[82],"83":[80],"84":[2],"85":[2],"17":[15],"5":[3,2],"86":[2],"16":[15],"87":[2],"88":[2],"89":[2],"90":[2],"91":[2],"92":[2],"93":[2],"32":[2],"94":[2],"18":[3,2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[3,2],"100":[2],"101":[13],"102":[13],"14":[13],"103":[13],"104":[11],"105":[11],"106":[107],"108":[11],"109":[110],"111":[2],"112":[3,2],"113":[75],"25":[3,2],"114":[115,75],"116":[75],"117":[75,118],"119":[52],"120":[60],"121":[110],"122":[123],"124":[2],"125":[75,2],"7":[2,3],"126":[2],"127":[3,2],"128":[75],"129":[3,2],"130":[2],"131":[80]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RawImage","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.MonoBehaviour","DropZone","UnityEngine.GameObject","UnityEngine.PolygonCollider2D","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.CanvasGroup","DraggableItem","LunaManager","UnityEngine.UI.Button","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "164.0";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BM_V03_ManhND_AnhPD";

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

Deserializers.buildID = "01a8084e-1725-4120-a2d5-822da61f99e7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

