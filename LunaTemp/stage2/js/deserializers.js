var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3400 = root || request.c( 'UnityEngine.JointSpring' )
  var i3401 = data
  i3400.spring = i3401[0]
  i3400.damper = i3401[1]
  i3400.targetPosition = i3401[2]
  return i3400
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3402 = root || request.c( 'UnityEngine.JointMotor' )
  var i3403 = data
  i3402.m_TargetVelocity = i3403[0]
  i3402.m_Force = i3403[1]
  i3402.m_FreeSpin = i3403[2]
  return i3402
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3404 = root || request.c( 'UnityEngine.JointLimits' )
  var i3405 = data
  i3404.m_Min = i3405[0]
  i3404.m_Max = i3405[1]
  i3404.m_Bounciness = i3405[2]
  i3404.m_BounceMinVelocity = i3405[3]
  i3404.m_ContactDistance = i3405[4]
  i3404.minBounce = i3405[5]
  i3404.maxBounce = i3405[6]
  return i3404
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3406 = root || request.c( 'UnityEngine.JointDrive' )
  var i3407 = data
  i3406.m_PositionSpring = i3407[0]
  i3406.m_PositionDamper = i3407[1]
  i3406.m_MaximumForce = i3407[2]
  i3406.m_UseAcceleration = i3407[3]
  return i3406
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3408 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3409 = data
  i3408.m_Spring = i3409[0]
  i3408.m_Damper = i3409[1]
  return i3408
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3410 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3411 = data
  i3410.m_Limit = i3411[0]
  i3410.m_Bounciness = i3411[1]
  i3410.m_ContactDistance = i3411[2]
  return i3410
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3412 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3413 = data
  i3412.m_ExtremumSlip = i3413[0]
  i3412.m_ExtremumValue = i3413[1]
  i3412.m_AsymptoteSlip = i3413[2]
  i3412.m_AsymptoteValue = i3413[3]
  i3412.m_Stiffness = i3413[4]
  return i3412
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3414 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3415 = data
  i3414.m_LowerAngle = i3415[0]
  i3414.m_UpperAngle = i3415[1]
  return i3414
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3416 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3417 = data
  i3416.m_MotorSpeed = i3417[0]
  i3416.m_MaximumMotorTorque = i3417[1]
  return i3416
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3418 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3419 = data
  i3418.m_DampingRatio = i3419[0]
  i3418.m_Frequency = i3419[1]
  i3418.m_Angle = i3419[2]
  return i3418
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3420 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3421 = data
  i3420.m_LowerTranslation = i3421[0]
  i3420.m_UpperTranslation = i3421[1]
  return i3420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3423 = data
  i3422.name = i3423[0]
  i3422.width = i3423[1]
  i3422.height = i3423[2]
  i3422.mipmapCount = i3423[3]
  i3422.anisoLevel = i3423[4]
  i3422.filterMode = i3423[5]
  i3422.hdr = !!i3423[6]
  i3422.format = i3423[7]
  i3422.wrapMode = i3423[8]
  i3422.alphaIsTransparency = !!i3423[9]
  i3422.alphaSource = i3423[10]
  i3422.graphicsFormat = i3423[11]
  i3422.sRGBTexture = !!i3423[12]
  i3422.desiredColorSpace = i3423[13]
  i3422.wrapU = i3423[14]
  i3422.wrapV = i3423[15]
  return i3422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3424 = root || new pc.UnityMaterial()
  var i3425 = data
  i3424.name = i3425[0]
  request.r(i3425[1], i3425[2], 0, i3424, 'shader')
  i3424.renderQueue = i3425[3]
  i3424.enableInstancing = !!i3425[4]
  var i3427 = i3425[5]
  var i3426 = []
  for(var i = 0; i < i3427.length; i += 1) {
    i3426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3427[i + 0]) );
  }
  i3424.floatParameters = i3426
  var i3429 = i3425[6]
  var i3428 = []
  for(var i = 0; i < i3429.length; i += 1) {
    i3428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3429[i + 0]) );
  }
  i3424.colorParameters = i3428
  var i3431 = i3425[7]
  var i3430 = []
  for(var i = 0; i < i3431.length; i += 1) {
    i3430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3431[i + 0]) );
  }
  i3424.vectorParameters = i3430
  var i3433 = i3425[8]
  var i3432 = []
  for(var i = 0; i < i3433.length; i += 1) {
    i3432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3433[i + 0]) );
  }
  i3424.textureParameters = i3432
  var i3435 = i3425[9]
  var i3434 = []
  for(var i = 0; i < i3435.length; i += 1) {
    i3434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3435[i + 0]) );
  }
  i3424.materialFlags = i3434
  return i3424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3439 = data
  i3438.name = i3439[0]
  i3438.value = i3439[1]
  return i3438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3443 = data
  i3442.name = i3443[0]
  i3442.value = new pc.Color(i3443[1], i3443[2], i3443[3], i3443[4])
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3447 = data
  i3446.name = i3447[0]
  i3446.value = new pc.Vec4( i3447[1], i3447[2], i3447[3], i3447[4] )
  return i3446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3451 = data
  i3450.name = i3451[0]
  request.r(i3451[1], i3451[2], 0, i3450, 'value')
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3455 = data
  i3454.name = i3455[0]
  i3454.enabled = !!i3455[1]
  return i3454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3457 = data
  i3456.pivot = new pc.Vec2( i3457[0], i3457[1] )
  i3456.anchorMin = new pc.Vec2( i3457[2], i3457[3] )
  i3456.anchorMax = new pc.Vec2( i3457[4], i3457[5] )
  i3456.sizeDelta = new pc.Vec2( i3457[6], i3457[7] )
  i3456.anchoredPosition3D = new pc.Vec3( i3457[8], i3457[9], i3457[10] )
  i3456.rotation = new pc.Quat(i3457[11], i3457[12], i3457[13], i3457[14])
  i3456.scale = new pc.Vec3( i3457[15], i3457[16], i3457[17] )
  return i3456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3459 = data
  i3458.cullTransparentMesh = !!i3459[0]
  return i3458
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3460 = root || request.c( 'UnityEngine.UI.Image' )
  var i3461 = data
  request.r(i3461[0], i3461[1], 0, i3460, 'm_Sprite')
  i3460.m_Type = i3461[2]
  i3460.m_PreserveAspect = !!i3461[3]
  i3460.m_FillCenter = !!i3461[4]
  i3460.m_FillMethod = i3461[5]
  i3460.m_FillAmount = i3461[6]
  i3460.m_FillClockwise = !!i3461[7]
  i3460.m_FillOrigin = i3461[8]
  i3460.m_UseSpriteMesh = !!i3461[9]
  i3460.m_PixelsPerUnitMultiplier = i3461[10]
  i3460.m_Maskable = !!i3461[11]
  request.r(i3461[12], i3461[13], 0, i3460, 'm_Material')
  i3460.m_Color = new pc.Color(i3461[14], i3461[15], i3461[16], i3461[17])
  i3460.m_RaycastTarget = !!i3461[18]
  i3460.m_RaycastPadding = new pc.Vec4( i3461[19], i3461[20], i3461[21], i3461[22] )
  return i3460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3463 = data
  i3462.name = i3463[0]
  i3462.tagId = i3463[1]
  i3462.enabled = !!i3463[2]
  i3462.isStatic = !!i3463[3]
  i3462.layer = i3463[4]
  return i3462
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3464 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3465 = data
  i3464.m_hasFontAssetChanged = !!i3465[0]
  request.r(i3465[1], i3465[2], 0, i3464, 'm_baseMaterial')
  i3464.m_maskOffset = new pc.Vec4( i3465[3], i3465[4], i3465[5], i3465[6] )
  i3464.m_text = i3465[7]
  i3464.m_isRightToLeft = !!i3465[8]
  request.r(i3465[9], i3465[10], 0, i3464, 'm_fontAsset')
  request.r(i3465[11], i3465[12], 0, i3464, 'm_sharedMaterial')
  var i3467 = i3465[13]
  var i3466 = []
  for(var i = 0; i < i3467.length; i += 2) {
  request.r(i3467[i + 0], i3467[i + 1], 2, i3466, '')
  }
  i3464.m_fontSharedMaterials = i3466
  request.r(i3465[14], i3465[15], 0, i3464, 'm_fontMaterial')
  var i3469 = i3465[16]
  var i3468 = []
  for(var i = 0; i < i3469.length; i += 2) {
  request.r(i3469[i + 0], i3469[i + 1], 2, i3468, '')
  }
  i3464.m_fontMaterials = i3468
  i3464.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3465[17], i3465[18], i3465[19], i3465[20])
  i3464.m_fontColor = new pc.Color(i3465[21], i3465[22], i3465[23], i3465[24])
  i3464.m_enableVertexGradient = !!i3465[25]
  i3464.m_colorMode = i3465[26]
  i3464.m_fontColorGradient = request.d('TMPro.VertexGradient', i3465[27], i3464.m_fontColorGradient)
  request.r(i3465[28], i3465[29], 0, i3464, 'm_fontColorGradientPreset')
  request.r(i3465[30], i3465[31], 0, i3464, 'm_spriteAsset')
  i3464.m_tintAllSprites = !!i3465[32]
  request.r(i3465[33], i3465[34], 0, i3464, 'm_StyleSheet')
  i3464.m_TextStyleHashCode = i3465[35]
  i3464.m_overrideHtmlColors = !!i3465[36]
  i3464.m_faceColor = UnityEngine.Color32.ConstructColor(i3465[37], i3465[38], i3465[39], i3465[40])
  i3464.m_fontSize = i3465[41]
  i3464.m_fontSizeBase = i3465[42]
  i3464.m_fontWeight = i3465[43]
  i3464.m_enableAutoSizing = !!i3465[44]
  i3464.m_fontSizeMin = i3465[45]
  i3464.m_fontSizeMax = i3465[46]
  i3464.m_fontStyle = i3465[47]
  i3464.m_HorizontalAlignment = i3465[48]
  i3464.m_VerticalAlignment = i3465[49]
  i3464.m_textAlignment = i3465[50]
  i3464.m_characterSpacing = i3465[51]
  i3464.m_wordSpacing = i3465[52]
  i3464.m_lineSpacing = i3465[53]
  i3464.m_lineSpacingMax = i3465[54]
  i3464.m_paragraphSpacing = i3465[55]
  i3464.m_charWidthMaxAdj = i3465[56]
  i3464.m_enableWordWrapping = !!i3465[57]
  i3464.m_wordWrappingRatios = i3465[58]
  i3464.m_overflowMode = i3465[59]
  request.r(i3465[60], i3465[61], 0, i3464, 'm_linkedTextComponent')
  request.r(i3465[62], i3465[63], 0, i3464, 'parentLinkedComponent')
  i3464.m_enableKerning = !!i3465[64]
  i3464.m_enableExtraPadding = !!i3465[65]
  i3464.checkPaddingRequired = !!i3465[66]
  i3464.m_isRichText = !!i3465[67]
  i3464.m_parseCtrlCharacters = !!i3465[68]
  i3464.m_isOrthographic = !!i3465[69]
  i3464.m_isCullingEnabled = !!i3465[70]
  i3464.m_horizontalMapping = i3465[71]
  i3464.m_verticalMapping = i3465[72]
  i3464.m_uvLineOffset = i3465[73]
  i3464.m_geometrySortingOrder = i3465[74]
  i3464.m_IsTextObjectScaleStatic = !!i3465[75]
  i3464.m_VertexBufferAutoSizeReduction = !!i3465[76]
  i3464.m_useMaxVisibleDescender = !!i3465[77]
  i3464.m_pageToDisplay = i3465[78]
  i3464.m_margin = new pc.Vec4( i3465[79], i3465[80], i3465[81], i3465[82] )
  i3464.m_isUsingLegacyAnimationComponent = !!i3465[83]
  i3464.m_isVolumetricText = !!i3465[84]
  i3464.m_Maskable = !!i3465[85]
  request.r(i3465[86], i3465[87], 0, i3464, 'm_Material')
  i3464.m_Color = new pc.Color(i3465[88], i3465[89], i3465[90], i3465[91])
  i3464.m_RaycastTarget = !!i3465[92]
  i3464.m_RaycastPadding = new pc.Vec4( i3465[93], i3465[94], i3465[95], i3465[96] )
  return i3464
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3472 = root || request.c( 'TMPro.VertexGradient' )
  var i3473 = data
  i3472.topLeft = new pc.Color(i3473[0], i3473[1], i3473[2], i3473[3])
  i3472.topRight = new pc.Color(i3473[4], i3473[5], i3473[6], i3473[7])
  i3472.bottomLeft = new pc.Color(i3473[8], i3473[9], i3473[10], i3473[11])
  i3472.bottomRight = new pc.Color(i3473[12], i3473[13], i3473[14], i3473[15])
  return i3472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3475 = data
  i3474.name = i3475[0]
  i3474.index = i3475[1]
  i3474.startup = !!i3475[2]
  return i3474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3477 = data
  i3476.position = new pc.Vec3( i3477[0], i3477[1], i3477[2] )
  i3476.scale = new pc.Vec3( i3477[3], i3477[4], i3477[5] )
  i3476.rotation = new pc.Quat(i3477[6], i3477[7], i3477[8], i3477[9])
  return i3476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3479 = data
  i3478.aspect = i3479[0]
  i3478.orthographic = !!i3479[1]
  i3478.orthographicSize = i3479[2]
  i3478.backgroundColor = new pc.Color(i3479[3], i3479[4], i3479[5], i3479[6])
  i3478.nearClipPlane = i3479[7]
  i3478.farClipPlane = i3479[8]
  i3478.fieldOfView = i3479[9]
  i3478.depth = i3479[10]
  i3478.clearFlags = i3479[11]
  i3478.cullingMask = i3479[12]
  i3478.rect = i3479[13]
  request.r(i3479[14], i3479[15], 0, i3478, 'targetTexture')
  i3478.usePhysicalProperties = !!i3479[16]
  i3478.focalLength = i3479[17]
  i3478.sensorSize = new pc.Vec2( i3479[18], i3479[19] )
  i3478.lensShift = new pc.Vec2( i3479[20], i3479[21] )
  i3478.gateFit = i3479[22]
  i3478.commandBufferCount = i3479[23]
  i3478.cameraType = i3479[24]
  i3478.enabled = !!i3479[25]
  return i3478
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3480 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3481 = data
  request.r(i3481[0], i3481[1], 0, i3480, 'm_FirstSelected')
  i3480.m_sendNavigationEvents = !!i3481[2]
  i3480.m_DragThreshold = i3481[3]
  return i3480
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3482 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3483 = data
  i3482.m_HorizontalAxis = i3483[0]
  i3482.m_VerticalAxis = i3483[1]
  i3482.m_SubmitButton = i3483[2]
  i3482.m_CancelButton = i3483[3]
  i3482.m_InputActionsPerSecond = i3483[4]
  i3482.m_RepeatDelay = i3483[5]
  i3482.m_ForceModuleActive = !!i3483[6]
  i3482.m_SendPointerHoverToParent = !!i3483[7]
  return i3482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3485 = data
  i3484.planeDistance = i3485[0]
  i3484.referencePixelsPerUnit = i3485[1]
  i3484.isFallbackOverlay = !!i3485[2]
  i3484.renderMode = i3485[3]
  i3484.renderOrder = i3485[4]
  i3484.sortingLayerName = i3485[5]
  i3484.sortingOrder = i3485[6]
  i3484.scaleFactor = i3485[7]
  request.r(i3485[8], i3485[9], 0, i3484, 'worldCamera')
  i3484.overrideSorting = !!i3485[10]
  i3484.pixelPerfect = !!i3485[11]
  i3484.targetDisplay = i3485[12]
  i3484.overridePixelPerfect = !!i3485[13]
  i3484.enabled = !!i3485[14]
  return i3484
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3486 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3487 = data
  i3486.m_UiScaleMode = i3487[0]
  i3486.m_ReferencePixelsPerUnit = i3487[1]
  i3486.m_ScaleFactor = i3487[2]
  i3486.m_ReferenceResolution = new pc.Vec2( i3487[3], i3487[4] )
  i3486.m_ScreenMatchMode = i3487[5]
  i3486.m_MatchWidthOrHeight = i3487[6]
  i3486.m_PhysicalUnit = i3487[7]
  i3486.m_FallbackScreenDPI = i3487[8]
  i3486.m_DefaultSpriteDPI = i3487[9]
  i3486.m_DynamicPixelsPerUnit = i3487[10]
  i3486.m_PresetInfoIsWorld = !!i3487[11]
  return i3486
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3488 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3489 = data
  i3488.m_IgnoreReversedGraphics = !!i3489[0]
  i3488.m_BlockingObjects = i3489[1]
  i3488.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3489[2] )
  return i3488
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3490 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3491 = data
  request.r(i3491[0], i3491[1], 0, i3490, 'm_Texture')
  i3490.m_UVRect = UnityEngine.Rect.MinMaxRect(i3491[2], i3491[3], i3491[4], i3491[5])
  i3490.m_Maskable = !!i3491[6]
  request.r(i3491[7], i3491[8], 0, i3490, 'm_Material')
  i3490.m_Color = new pc.Color(i3491[9], i3491[10], i3491[11], i3491[12])
  i3490.m_RaycastTarget = !!i3491[13]
  i3490.m_RaycastPadding = new pc.Vec4( i3491[14], i3491[15], i3491[16], i3491[17] )
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3493 = data
  request.r(i3493[0], i3493[1], 0, i3492, 'clip')
  request.r(i3493[2], i3493[3], 0, i3492, 'outputAudioMixerGroup')
  i3492.playOnAwake = !!i3493[4]
  i3492.loop = !!i3493[5]
  i3492.time = i3493[6]
  i3492.volume = i3493[7]
  i3492.pitch = i3493[8]
  i3492.enabled = !!i3493[9]
  return i3492
}

Deserializers["DropZone"] = function (request, data, root) {
  var i3494 = root || request.c( 'DropZone' )
  var i3495 = data
  i3494.idDrop = i3495[0]
  i3494.isLose = !!i3495[1]
  var i3497 = i3495[2]
  var i3496 = []
  for(var i = 0; i < i3497.length; i += 2) {
  request.r(i3497[i + 0], i3497[i + 1], 2, i3496, '')
  }
  i3494.steps = i3496
  return i3494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3501 = data
  i3500.usedByComposite = !!i3501[0]
  i3500.autoTiling = !!i3501[1]
  var i3503 = i3501[2]
  var i3502 = []
  for(var i = 0; i < i3503.length; i += 1) {
  var i3505 = i3503[i + 0]
  var i3504 = []
  for(var i = 0; i < i3505.length; i += 2) {
    i3504.push( new pc.Vec2( i3505[i + 0], i3505[i + 1] ) );
  }
    i3502.push( i3504 );
  }
  i3500.points = i3502
  i3500.enabled = !!i3501[3]
  i3500.isTrigger = !!i3501[4]
  i3500.usedByEffector = !!i3501[5]
  i3500.density = i3501[6]
  i3500.offset = new pc.Vec2( i3501[7], i3501[8] )
  request.r(i3501[9], i3501[10], 0, i3500, 'material')
  return i3500
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i3512 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i3513 = data
  request.r(i3513[0], i3513[1], 0, i3512, 'skeletonDataAsset')
  request.r(i3513[2], i3513[3], 0, i3512, 'additiveMaterial')
  request.r(i3513[4], i3513[5], 0, i3512, 'multiplyMaterial')
  request.r(i3513[6], i3513[7], 0, i3512, 'screenMaterial')
  i3512.initialSkinName = i3513[8]
  i3512.initialFlipX = !!i3513[9]
  i3512.initialFlipY = !!i3513[10]
  i3512.startingAnimation = i3513[11]
  i3512.startingLoop = !!i3513[12]
  i3512.timeScale = i3513[13]
  i3512.freeze = !!i3513[14]
  i3512.layoutScaleMode = i3513[15]
  i3512.updateWhenInvisible = i3513[16]
  i3512.allowMultipleCanvasRenderers = !!i3513[17]
  var i3515 = i3513[18]
  var i3514 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i3515.length; i += 2) {
  request.r(i3515[i + 0], i3515[i + 1], 1, i3514, '')
  }
  i3512.canvasRenderers = i3514
  i3512.enableSeparatorSlots = !!i3513[19]
  i3512.updateSeparatorPartLocation = !!i3513[20]
  i3512.updateSeparatorPartScale = !!i3513[21]
  i3512.disableMeshAssignmentOnOverride = !!i3513[22]
  i3512.m_SkeletonColor = new pc.Color(i3513[23], i3513[24], i3513[25], i3513[26])
  i3512.referenceSize = new pc.Vec2( i3513[27], i3513[28] )
  i3512.pivotOffset = new pc.Vec2( i3513[29], i3513[30] )
  i3512.referenceScale = i3513[31]
  i3512.layoutScale = i3513[32]
  i3512.rectTransformSize = new pc.Vec2( i3513[33], i3513[34] )
  i3512.editReferenceRect = !!i3513[35]
  var i3517 = i3513[36]
  var i3516 = []
  for(var i = 0; i < i3517.length; i += 1) {
    i3516.push( i3517[i + 0] );
  }
  i3512.separatorSlotNames = i3516
  var i3519 = i3513[37]
  var i3518 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3519.length; i += 2) {
  request.r(i3519[i + 0], i3519[i + 1], 1, i3518, '')
  }
  i3512.separatorParts = i3518
  i3512.physicsPositionInheritanceFactor = new pc.Vec2( i3513[38], i3513[39] )
  i3512.physicsRotationInheritanceFactor = i3513[40]
  request.r(i3513[41], i3513[42], 0, i3512, 'physicsMovementRelativeTo')
  i3512.meshGenerator = request.d('Spine.Unity.MeshGenerator', i3513[43], i3512.meshGenerator)
  i3512.updateTiming = i3513[44]
  i3512.unscaledTime = !!i3513[45]
  i3512.m_Maskable = !!i3513[46]
  request.r(i3513[47], i3513[48], 0, i3512, 'm_Material')
  i3512.m_Color = new pc.Color(i3513[49], i3513[50], i3513[51], i3513[52])
  i3512.m_RaycastTarget = !!i3513[53]
  i3512.m_RaycastPadding = new pc.Vec4( i3513[54], i3513[55], i3513[56], i3513[57] )
  return i3512
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i3526 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i3527 = data
  i3526.settings = request.d('Spine.Unity.MeshGenerator+Settings', i3527[0], i3526.settings)
  return i3526
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i3528 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i3529 = data
  i3528.useClipping = !!i3529[0]
  i3528.zSpacing = i3529[1]
  i3528.tintBlack = !!i3529[2]
  i3528.canvasGroupCompatible = !!i3529[3]
  i3528.pmaVertexColors = !!i3529[4]
  i3528.addNormals = !!i3529[5]
  i3528.calculateTangents = !!i3529[6]
  i3528.immutableTriangles = !!i3529[7]
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3531 = data
  i3530.m_Alpha = i3531[0]
  i3530.m_Interactable = !!i3531[1]
  i3530.m_BlocksRaycasts = !!i3531[2]
  i3530.m_IgnoreParentGroups = !!i3531[3]
  i3530.enabled = !!i3531[4]
  return i3530
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i3532 = root || request.c( 'DraggableItem' )
  var i3533 = data
  i3532.idDrag = i3533[0]
  i3532.isProcess = !!i3533[1]
  return i3532
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3534 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3535 = data
  i3534.targetIsSelf = !!i3535[0]
  request.r(i3535[1], i3535[2], 0, i3534, 'targetGO')
  i3534.tweenTargetIsTargetGO = !!i3535[3]
  i3534.delay = i3535[4]
  i3534.duration = i3535[5]
  i3534.easeType = i3535[6]
  i3534.easeCurve = new pc.AnimationCurve( { keys_flow: i3535[7] } )
  i3534.loopType = i3535[8]
  i3534.loops = i3535[9]
  i3534.id = i3535[10]
  i3534.isRelative = !!i3535[11]
  i3534.isFrom = !!i3535[12]
  i3534.isIndependentUpdate = !!i3535[13]
  i3534.autoKill = !!i3535[14]
  i3534.autoGenerate = !!i3535[15]
  i3534.isActive = !!i3535[16]
  i3534.isValid = !!i3535[17]
  request.r(i3535[18], i3535[19], 0, i3534, 'target')
  i3534.animationType = i3535[20]
  i3534.targetType = i3535[21]
  i3534.forcedTargetType = i3535[22]
  i3534.autoPlay = !!i3535[23]
  i3534.useTargetAsV3 = !!i3535[24]
  i3534.endValueFloat = i3535[25]
  i3534.endValueV3 = new pc.Vec3( i3535[26], i3535[27], i3535[28] )
  i3534.endValueV2 = new pc.Vec2( i3535[29], i3535[30] )
  i3534.endValueColor = new pc.Color(i3535[31], i3535[32], i3535[33], i3535[34])
  i3534.endValueString = i3535[35]
  i3534.endValueRect = UnityEngine.Rect.MinMaxRect(i3535[36], i3535[37], i3535[38], i3535[39])
  request.r(i3535[40], i3535[41], 0, i3534, 'endValueTransform')
  i3534.optionalBool0 = !!i3535[42]
  i3534.optionalBool1 = !!i3535[43]
  i3534.optionalFloat0 = i3535[44]
  i3534.optionalInt0 = i3535[45]
  i3534.optionalRotationMode = i3535[46]
  i3534.optionalScrambleMode = i3535[47]
  i3534.optionalShakeRandomnessMode = i3535[48]
  i3534.optionalString = i3535[49]
  i3534.updateType = i3535[50]
  i3534.isSpeedBased = !!i3535[51]
  i3534.hasOnStart = !!i3535[52]
  i3534.hasOnPlay = !!i3535[53]
  i3534.hasOnUpdate = !!i3535[54]
  i3534.hasOnStepComplete = !!i3535[55]
  i3534.hasOnComplete = !!i3535[56]
  i3534.hasOnTweenCreated = !!i3535[57]
  i3534.hasOnRewind = !!i3535[58]
  i3534.onStart = request.d('UnityEngine.Events.UnityEvent', i3535[59], i3534.onStart)
  i3534.onPlay = request.d('UnityEngine.Events.UnityEvent', i3535[60], i3534.onPlay)
  i3534.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3535[61], i3534.onUpdate)
  i3534.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3535[62], i3534.onStepComplete)
  i3534.onComplete = request.d('UnityEngine.Events.UnityEvent', i3535[63], i3534.onComplete)
  i3534.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3535[64], i3534.onTweenCreated)
  i3534.onRewind = request.d('UnityEngine.Events.UnityEvent', i3535[65], i3534.onRewind)
  return i3534
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3536 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3537 = data
  i3536.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3537[0], i3536.m_PersistentCalls)
  return i3536
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3538 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3539 = data
  var i3541 = i3539[0]
  var i3540 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3541.length; i += 1) {
    i3540.add(request.d('UnityEngine.Events.PersistentCall', i3541[i + 0]));
  }
  i3538.m_Calls = i3540
  return i3538
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3544 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3545 = data
  request.r(i3545[0], i3545[1], 0, i3544, 'm_Target')
  i3544.m_TargetAssemblyTypeName = i3545[2]
  i3544.m_MethodName = i3545[3]
  i3544.m_Mode = i3545[4]
  i3544.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3545[5], i3544.m_Arguments)
  i3544.m_CallState = i3545[6]
  return i3544
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3546 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3547 = data
  request.r(i3547[0], i3547[1], 0, i3546, 'm_ObjectArgument')
  i3546.m_ObjectArgumentAssemblyTypeName = i3547[2]
  i3546.m_IntArgument = i3547[3]
  i3546.m_FloatArgument = i3547[4]
  i3546.m_StringArgument = i3547[5]
  i3546.m_BoolArgument = !!i3547[6]
  return i3546
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i3548 = root || request.c( 'LunaManager' )
  var i3549 = data
  var i3551 = i3549[0]
  var i3550 = []
  for(var i = 0; i < i3551.length; i += 2) {
  request.r(i3551[i + 0], i3551[i + 1], 2, i3550, '')
  }
  i3548.lstBtnInstall = i3550
  request.r(i3549[1], i3549[2], 0, i3548, 'StartCard')
  request.r(i3549[3], i3549[4], 0, i3548, 'EndCard')
  request.r(i3549[5], i3549[6], 0, i3548, 'Parent')
  request.r(i3549[7], i3549[8], 0, i3548, 'LoseTitle')
  var i3553 = i3549[9]
  var i3552 = []
  for(var i = 0; i < i3553.length; i += 2) {
  request.r(i3553[i + 0], i3553[i + 1], 2, i3552, '')
  }
  i3548.tutorial = i3552
  i3548.isDrag = !!i3549[10]
  i3548.countPlay = i3549[11]
  i3548.countPlayFinal = i3549[12]
  i3548.countPlayMax = i3549[13]
  i3548.timeDropFinal = i3549[14]
  i3548.colorBG = new pc.Color(i3549[15], i3549[16], i3549[17], i3549[18])
  request.r(i3549[19], i3549[20], 0, i3548, 'texture2D')
  request.r(i3549[21], i3549[22], 0, i3548, 'rawImageBG')
  request.r(i3549[23], i3549[24], 0, i3548, 'textProgess')
  request.r(i3549[25], i3549[26], 0, i3548, 'imgProgess')
  request.r(i3549[27], i3549[28], 0, i3548, 'timeText')
  return i3548
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3556 = root || request.c( 'UnityEngine.UI.Button' )
  var i3557 = data
  i3556.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3557[0], i3556.m_OnClick)
  i3556.m_Navigation = request.d('UnityEngine.UI.Navigation', i3557[1], i3556.m_Navigation)
  i3556.m_Transition = i3557[2]
  i3556.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3557[3], i3556.m_Colors)
  i3556.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3557[4], i3556.m_SpriteState)
  i3556.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3557[5], i3556.m_AnimationTriggers)
  i3556.m_Interactable = !!i3557[6]
  request.r(i3557[7], i3557[8], 0, i3556, 'm_TargetGraphic')
  return i3556
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3558 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3559 = data
  i3558.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3559[0], i3558.m_PersistentCalls)
  return i3558
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3560 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3561 = data
  i3560.m_Mode = i3561[0]
  i3560.m_WrapAround = !!i3561[1]
  request.r(i3561[2], i3561[3], 0, i3560, 'm_SelectOnUp')
  request.r(i3561[4], i3561[5], 0, i3560, 'm_SelectOnDown')
  request.r(i3561[6], i3561[7], 0, i3560, 'm_SelectOnLeft')
  request.r(i3561[8], i3561[9], 0, i3560, 'm_SelectOnRight')
  return i3560
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3562 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3563 = data
  i3562.m_NormalColor = new pc.Color(i3563[0], i3563[1], i3563[2], i3563[3])
  i3562.m_HighlightedColor = new pc.Color(i3563[4], i3563[5], i3563[6], i3563[7])
  i3562.m_PressedColor = new pc.Color(i3563[8], i3563[9], i3563[10], i3563[11])
  i3562.m_SelectedColor = new pc.Color(i3563[12], i3563[13], i3563[14], i3563[15])
  i3562.m_DisabledColor = new pc.Color(i3563[16], i3563[17], i3563[18], i3563[19])
  i3562.m_ColorMultiplier = i3563[20]
  i3562.m_FadeDuration = i3563[21]
  return i3562
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3564 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3565 = data
  request.r(i3565[0], i3565[1], 0, i3564, 'm_HighlightedSprite')
  request.r(i3565[2], i3565[3], 0, i3564, 'm_PressedSprite')
  request.r(i3565[4], i3565[5], 0, i3564, 'm_SelectedSprite')
  request.r(i3565[6], i3565[7], 0, i3564, 'm_DisabledSprite')
  return i3564
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3566 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3567 = data
  i3566.m_NormalTrigger = i3567[0]
  i3566.m_HighlightedTrigger = i3567[1]
  i3566.m_PressedTrigger = i3567[2]
  i3566.m_SelectedTrigger = i3567[3]
  i3566.m_DisabledTrigger = i3567[4]
  return i3566
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3568 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3569 = data
  i3568.m_ShowMaskGraphic = !!i3569[0]
  return i3568
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3570 = root || request.c( 'AudioController' )
  var i3571 = data
  request.r(i3571[0], i3571[1], 0, i3570, 'bgmSource')
  request.r(i3571[2], i3571[3], 0, i3570, 'sfxSource')
  var i3573 = i3571[4]
  var i3572 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i3573.length; i += 1) {
    i3572.add(request.d('AudioEntry', i3573[i + 0]));
  }
  i3570.audioEntries = i3572
  return i3570
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i3576 = root || request.c( 'AudioEntry' )
  var i3577 = data
  i3576.key = i3577[0]
  request.r(i3577[1], i3577[2], 0, i3576, 'clip')
  i3576.volume = i3577[3]
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3579 = data
  i3578.ambientIntensity = i3579[0]
  i3578.reflectionIntensity = i3579[1]
  i3578.ambientMode = i3579[2]
  i3578.ambientLight = new pc.Color(i3579[3], i3579[4], i3579[5], i3579[6])
  i3578.ambientSkyColor = new pc.Color(i3579[7], i3579[8], i3579[9], i3579[10])
  i3578.ambientGroundColor = new pc.Color(i3579[11], i3579[12], i3579[13], i3579[14])
  i3578.ambientEquatorColor = new pc.Color(i3579[15], i3579[16], i3579[17], i3579[18])
  i3578.fogColor = new pc.Color(i3579[19], i3579[20], i3579[21], i3579[22])
  i3578.fogEndDistance = i3579[23]
  i3578.fogStartDistance = i3579[24]
  i3578.fogDensity = i3579[25]
  i3578.fog = !!i3579[26]
  request.r(i3579[27], i3579[28], 0, i3578, 'skybox')
  i3578.fogMode = i3579[29]
  var i3581 = i3579[30]
  var i3580 = []
  for(var i = 0; i < i3581.length; i += 1) {
    i3580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3581[i + 0]) );
  }
  i3578.lightmaps = i3580
  i3578.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3579[31], i3578.lightProbes)
  i3578.lightmapsMode = i3579[32]
  i3578.mixedBakeMode = i3579[33]
  i3578.environmentLightingMode = i3579[34]
  i3578.ambientProbe = new pc.SphericalHarmonicsL2(i3579[35])
  i3578.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3579[36])
  i3578.useReferenceAmbientProbe = !!i3579[37]
  request.r(i3579[38], i3579[39], 0, i3578, 'customReflection')
  request.r(i3579[40], i3579[41], 0, i3578, 'defaultReflection')
  i3578.defaultReflectionMode = i3579[42]
  i3578.defaultReflectionResolution = i3579[43]
  i3578.sunLightObjectId = i3579[44]
  i3578.pixelLightCount = i3579[45]
  i3578.defaultReflectionHDR = !!i3579[46]
  i3578.hasLightDataAsset = !!i3579[47]
  i3578.hasManualGenerate = !!i3579[48]
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3585 = data
  request.r(i3585[0], i3585[1], 0, i3584, 'lightmapColor')
  request.r(i3585[2], i3585[3], 0, i3584, 'lightmapDirection')
  return i3584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3586 = root || new UnityEngine.LightProbes()
  var i3587 = data
  return i3586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3595 = data
  var i3597 = i3595[0]
  var i3596 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3597.length; i += 1) {
    i3596.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3597[i + 0]));
  }
  i3594.ShaderCompilationErrors = i3596
  i3594.name = i3595[1]
  i3594.guid = i3595[2]
  var i3599 = i3595[3]
  var i3598 = []
  for(var i = 0; i < i3599.length; i += 1) {
    i3598.push( i3599[i + 0] );
  }
  i3594.shaderDefinedKeywords = i3598
  var i3601 = i3595[4]
  var i3600 = []
  for(var i = 0; i < i3601.length; i += 1) {
    i3600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3601[i + 0]) );
  }
  i3594.passes = i3600
  var i3603 = i3595[5]
  var i3602 = []
  for(var i = 0; i < i3603.length; i += 1) {
    i3602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3603[i + 0]) );
  }
  i3594.usePasses = i3602
  var i3605 = i3595[6]
  var i3604 = []
  for(var i = 0; i < i3605.length; i += 1) {
    i3604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3605[i + 0]) );
  }
  i3594.defaultParameterValues = i3604
  request.r(i3595[7], i3595[8], 0, i3594, 'unityFallbackShader')
  i3594.readDepth = !!i3595[9]
  i3594.isCreatedByShaderGraph = !!i3595[10]
  i3594.disableBatching = !!i3595[11]
  i3594.compiled = !!i3595[12]
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3609 = data
  i3608.shaderName = i3609[0]
  i3608.errorMessage = i3609[1]
  return i3608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3612 = root || new pc.UnityShaderPass()
  var i3613 = data
  i3612.id = i3613[0]
  i3612.subShaderIndex = i3613[1]
  i3612.name = i3613[2]
  i3612.passType = i3613[3]
  i3612.grabPassTextureName = i3613[4]
  i3612.usePass = !!i3613[5]
  i3612.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3613[6], i3612.zTest)
  i3612.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3613[7], i3612.zWrite)
  i3612.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3613[8], i3612.culling)
  i3612.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3613[9], i3612.blending)
  i3612.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3613[10], i3612.alphaBlending)
  i3612.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3613[11], i3612.colorWriteMask)
  i3612.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3613[12], i3612.offsetUnits)
  i3612.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3613[13], i3612.offsetFactor)
  i3612.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3613[14], i3612.stencilRef)
  i3612.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3613[15], i3612.stencilReadMask)
  i3612.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3613[16], i3612.stencilWriteMask)
  i3612.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3613[17], i3612.stencilOp)
  i3612.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3613[18], i3612.stencilOpFront)
  i3612.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3613[19], i3612.stencilOpBack)
  var i3615 = i3613[20]
  var i3614 = []
  for(var i = 0; i < i3615.length; i += 1) {
    i3614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3615[i + 0]) );
  }
  i3612.tags = i3614
  var i3617 = i3613[21]
  var i3616 = []
  for(var i = 0; i < i3617.length; i += 1) {
    i3616.push( i3617[i + 0] );
  }
  i3612.passDefinedKeywords = i3616
  var i3619 = i3613[22]
  var i3618 = []
  for(var i = 0; i < i3619.length; i += 1) {
    i3618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3619[i + 0]) );
  }
  i3612.passDefinedKeywordGroups = i3618
  var i3621 = i3613[23]
  var i3620 = []
  for(var i = 0; i < i3621.length; i += 1) {
    i3620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3621[i + 0]) );
  }
  i3612.variants = i3620
  var i3623 = i3613[24]
  var i3622 = []
  for(var i = 0; i < i3623.length; i += 1) {
    i3622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3623[i + 0]) );
  }
  i3612.excludedVariants = i3622
  i3612.hasDepthReader = !!i3613[25]
  return i3612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3625 = data
  i3624.val = i3625[0]
  i3624.name = i3625[1]
  return i3624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3627 = data
  i3626.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3627[0], i3626.src)
  i3626.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3627[1], i3626.dst)
  i3626.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3627[2], i3626.op)
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3629 = data
  i3628.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3629[0], i3628.pass)
  i3628.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3629[1], i3628.fail)
  i3628.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3629[2], i3628.zFail)
  i3628.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3629[3], i3628.comp)
  return i3628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3633 = data
  i3632.name = i3633[0]
  i3632.value = i3633[1]
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3637 = data
  var i3639 = i3637[0]
  var i3638 = []
  for(var i = 0; i < i3639.length; i += 1) {
    i3638.push( i3639[i + 0] );
  }
  i3636.keywords = i3638
  i3636.hasDiscard = !!i3637[1]
  return i3636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3643 = data
  i3642.passId = i3643[0]
  i3642.subShaderIndex = i3643[1]
  var i3645 = i3643[2]
  var i3644 = []
  for(var i = 0; i < i3645.length; i += 1) {
    i3644.push( i3645[i + 0] );
  }
  i3642.keywords = i3644
  i3642.vertexProgram = i3643[3]
  i3642.fragmentProgram = i3643[4]
  i3642.exportedForWebGl2 = !!i3643[5]
  i3642.readDepth = !!i3643[6]
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3649 = data
  request.r(i3649[0], i3649[1], 0, i3648, 'shader')
  i3648.pass = i3649[2]
  return i3648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3653 = data
  i3652.name = i3653[0]
  i3652.type = i3653[1]
  i3652.value = new pc.Vec4( i3653[2], i3653[3], i3653[4], i3653[5] )
  i3652.textureValue = i3653[6]
  i3652.shaderPropertyFlag = i3653[7]
  return i3652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3655 = data
  i3654.name = i3655[0]
  request.r(i3655[1], i3655[2], 0, i3654, 'texture')
  i3654.aabb = i3655[3]
  i3654.vertices = i3655[4]
  i3654.triangles = i3655[5]
  i3654.textureRect = UnityEngine.Rect.MinMaxRect(i3655[6], i3655[7], i3655[8], i3655[9])
  i3654.packedRect = UnityEngine.Rect.MinMaxRect(i3655[10], i3655[11], i3655[12], i3655[13])
  i3654.border = new pc.Vec4( i3655[14], i3655[15], i3655[16], i3655[17] )
  i3654.transparency = i3655[18]
  i3654.bounds = i3655[19]
  i3654.pixelsPerUnit = i3655[20]
  i3654.textureWidth = i3655[21]
  i3654.textureHeight = i3655[22]
  i3654.nativeSize = new pc.Vec2( i3655[23], i3655[24] )
  i3654.pivot = new pc.Vec2( i3655[25], i3655[26] )
  i3654.textureRectOffset = new pc.Vec2( i3655[27], i3655[28] )
  return i3654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3657 = data
  i3656.name = i3657[0]
  return i3656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3659 = data
  i3658.name = i3659[0]
  i3658.ascent = i3659[1]
  i3658.originalLineHeight = i3659[2]
  i3658.fontSize = i3659[3]
  var i3661 = i3659[4]
  var i3660 = []
  for(var i = 0; i < i3661.length; i += 1) {
    i3660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3661[i + 0]) );
  }
  i3658.characterInfo = i3660
  request.r(i3659[5], i3659[6], 0, i3658, 'texture')
  i3658.originalFontSize = i3659[7]
  return i3658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3665 = data
  i3664.index = i3665[0]
  i3664.advance = i3665[1]
  i3664.bearing = i3665[2]
  i3664.glyphWidth = i3665[3]
  i3664.glyphHeight = i3665[4]
  i3664.minX = i3665[5]
  i3664.maxX = i3665[6]
  i3664.minY = i3665[7]
  i3664.maxY = i3665[8]
  i3664.uvBottomLeftX = i3665[9]
  i3664.uvBottomLeftY = i3665[10]
  i3664.uvBottomRightX = i3665[11]
  i3664.uvBottomRightY = i3665[12]
  i3664.uvTopLeftX = i3665[13]
  i3664.uvTopLeftY = i3665[14]
  i3664.uvTopRightX = i3665[15]
  i3664.uvTopRightY = i3665[16]
  return i3664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3667 = data
  i3666.name = i3667[0]
  i3666.bytes64 = i3667[1]
  i3666.data = i3667[2]
  return i3666
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3668 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3669 = data
  var i3671 = i3669[0]
  var i3670 = []
  for(var i = 0; i < i3671.length; i += 2) {
  request.r(i3671[i + 0], i3671[i + 1], 2, i3670, '')
  }
  i3668.atlasAssets = i3670
  i3668.scale = i3669[1]
  request.r(i3669[2], i3669[3], 0, i3668, 'skeletonJSON')
  i3668.isUpgradingBlendModeMaterials = !!i3669[4]
  i3668.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3669[5], i3668.blendModeMaterials)
  var i3673 = i3669[6]
  var i3672 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3673.length; i += 2) {
  request.r(i3673[i + 0], i3673[i + 1], 1, i3672, '')
  }
  i3668.skeletonDataModifiers = i3672
  var i3675 = i3669[7]
  var i3674 = []
  for(var i = 0; i < i3675.length; i += 1) {
    i3674.push( i3675[i + 0] );
  }
  i3668.fromAnimation = i3674
  var i3677 = i3669[8]
  var i3676 = []
  for(var i = 0; i < i3677.length; i += 1) {
    i3676.push( i3677[i + 0] );
  }
  i3668.toAnimation = i3676
  i3668.duration = i3669[9]
  i3668.defaultMix = i3669[10]
  request.r(i3669[11], i3669[12], 0, i3668, 'controller')
  return i3668
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3680 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3681 = data
  i3680.applyAdditiveMaterial = !!i3681[0]
  var i3683 = i3681[1]
  var i3682 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3683.length; i += 1) {
    i3682.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3683[i + 0]));
  }
  i3680.additiveMaterials = i3682
  var i3685 = i3681[2]
  var i3684 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3685.length; i += 1) {
    i3684.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3685[i + 0]));
  }
  i3680.multiplyMaterials = i3684
  var i3687 = i3681[3]
  var i3686 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3687.length; i += 1) {
    i3686.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3687[i + 0]));
  }
  i3680.screenMaterials = i3686
  i3680.requiresBlendModeMaterials = !!i3681[4]
  return i3680
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3690 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3691 = data
  i3690.pageName = i3691[0]
  request.r(i3691[1], i3691[2], 0, i3690, 'material')
  return i3690
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3694 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3695 = data
  request.r(i3695[0], i3695[1], 0, i3694, 'atlasFile')
  var i3697 = i3695[2]
  var i3696 = []
  for(var i = 0; i < i3697.length; i += 2) {
  request.r(i3697[i + 0], i3697[i + 1], 2, i3696, '')
  }
  i3694.materials = i3696
  i3694.textureLoadingMode = i3695[3]
  request.r(i3695[4], i3695[5], 0, i3694, 'onDemandTextureLoader')
  return i3694
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3698 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3699 = data
  request.r(i3699[0], i3699[1], 0, i3698, 'atlas')
  i3698.normalStyle = i3699[2]
  i3698.normalSpacingOffset = i3699[3]
  i3698.boldStyle = i3699[4]
  i3698.boldSpacing = i3699[5]
  i3698.italicStyle = i3699[6]
  i3698.tabSize = i3699[7]
  i3698.hashCode = i3699[8]
  request.r(i3699[9], i3699[10], 0, i3698, 'material')
  i3698.materialHashCode = i3699[11]
  i3698.m_Version = i3699[12]
  i3698.m_SourceFontFileGUID = i3699[13]
  request.r(i3699[14], i3699[15], 0, i3698, 'm_SourceFontFile_EditorRef')
  request.r(i3699[16], i3699[17], 0, i3698, 'm_SourceFontFile')
  i3698.m_AtlasPopulationMode = i3699[18]
  i3698.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3699[19], i3698.m_FaceInfo)
  var i3701 = i3699[20]
  var i3700 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3701.length; i += 1) {
    i3700.add(request.d('UnityEngine.TextCore.Glyph', i3701[i + 0]));
  }
  i3698.m_GlyphTable = i3700
  var i3703 = i3699[21]
  var i3702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3703.length; i += 1) {
    i3702.add(request.d('TMPro.TMP_Character', i3703[i + 0]));
  }
  i3698.m_CharacterTable = i3702
  var i3705 = i3699[22]
  var i3704 = []
  for(var i = 0; i < i3705.length; i += 2) {
  request.r(i3705[i + 0], i3705[i + 1], 2, i3704, '')
  }
  i3698.m_AtlasTextures = i3704
  i3698.m_AtlasTextureIndex = i3699[23]
  i3698.m_IsMultiAtlasTexturesEnabled = !!i3699[24]
  i3698.m_ClearDynamicDataOnBuild = !!i3699[25]
  var i3707 = i3699[26]
  var i3706 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3707.length; i += 1) {
    i3706.add(request.d('UnityEngine.TextCore.GlyphRect', i3707[i + 0]));
  }
  i3698.m_UsedGlyphRects = i3706
  var i3709 = i3699[27]
  var i3708 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3709.length; i += 1) {
    i3708.add(request.d('UnityEngine.TextCore.GlyphRect', i3709[i + 0]));
  }
  i3698.m_FreeGlyphRects = i3708
  i3698.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3699[28], i3698.m_fontInfo)
  i3698.m_AtlasWidth = i3699[29]
  i3698.m_AtlasHeight = i3699[30]
  i3698.m_AtlasPadding = i3699[31]
  i3698.m_AtlasRenderMode = i3699[32]
  var i3711 = i3699[33]
  var i3710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3711.length; i += 1) {
    i3710.add(request.d('TMPro.TMP_Glyph', i3711[i + 0]));
  }
  i3698.m_glyphInfoList = i3710
  i3698.m_KerningTable = request.d('TMPro.KerningTable', i3699[34], i3698.m_KerningTable)
  i3698.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3699[35], i3698.m_FontFeatureTable)
  var i3713 = i3699[36]
  var i3712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3713.length; i += 2) {
  request.r(i3713[i + 0], i3713[i + 1], 1, i3712, '')
  }
  i3698.fallbackFontAssets = i3712
  var i3715 = i3699[37]
  var i3714 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3715.length; i += 2) {
  request.r(i3715[i + 0], i3715[i + 1], 1, i3714, '')
  }
  i3698.m_FallbackFontAssetTable = i3714
  i3698.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3699[38], i3698.m_CreationSettings)
  var i3717 = i3699[39]
  var i3716 = []
  for(var i = 0; i < i3717.length; i += 1) {
    i3716.push( request.d('TMPro.TMP_FontWeightPair', i3717[i + 0]) );
  }
  i3698.m_FontWeightTable = i3716
  var i3719 = i3699[40]
  var i3718 = []
  for(var i = 0; i < i3719.length; i += 1) {
    i3718.push( request.d('TMPro.TMP_FontWeightPair', i3719[i + 0]) );
  }
  i3698.fontWeights = i3718
  return i3698
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3720 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3721 = data
  i3720.m_FaceIndex = i3721[0]
  i3720.m_FamilyName = i3721[1]
  i3720.m_StyleName = i3721[2]
  i3720.m_PointSize = i3721[3]
  i3720.m_Scale = i3721[4]
  i3720.m_UnitsPerEM = i3721[5]
  i3720.m_LineHeight = i3721[6]
  i3720.m_AscentLine = i3721[7]
  i3720.m_CapLine = i3721[8]
  i3720.m_MeanLine = i3721[9]
  i3720.m_Baseline = i3721[10]
  i3720.m_DescentLine = i3721[11]
  i3720.m_SuperscriptOffset = i3721[12]
  i3720.m_SuperscriptSize = i3721[13]
  i3720.m_SubscriptOffset = i3721[14]
  i3720.m_SubscriptSize = i3721[15]
  i3720.m_UnderlineOffset = i3721[16]
  i3720.m_UnderlineThickness = i3721[17]
  i3720.m_StrikethroughOffset = i3721[18]
  i3720.m_StrikethroughThickness = i3721[19]
  i3720.m_TabWidth = i3721[20]
  return i3720
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3724 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3725 = data
  i3724.m_Index = i3725[0]
  i3724.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3725[1], i3724.m_Metrics)
  i3724.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3725[2], i3724.m_GlyphRect)
  i3724.m_Scale = i3725[3]
  i3724.m_AtlasIndex = i3725[4]
  i3724.m_ClassDefinitionType = i3725[5]
  return i3724
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3726 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3727 = data
  i3726.m_Width = i3727[0]
  i3726.m_Height = i3727[1]
  i3726.m_HorizontalBearingX = i3727[2]
  i3726.m_HorizontalBearingY = i3727[3]
  i3726.m_HorizontalAdvance = i3727[4]
  return i3726
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3728 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3729 = data
  i3728.m_X = i3729[0]
  i3728.m_Y = i3729[1]
  i3728.m_Width = i3729[2]
  i3728.m_Height = i3729[3]
  return i3728
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3732 = root || request.c( 'TMPro.TMP_Character' )
  var i3733 = data
  i3732.m_ElementType = i3733[0]
  i3732.m_Unicode = i3733[1]
  i3732.m_GlyphIndex = i3733[2]
  i3732.m_Scale = i3733[3]
  return i3732
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3738 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3739 = data
  i3738.Name = i3739[0]
  i3738.PointSize = i3739[1]
  i3738.Scale = i3739[2]
  i3738.CharacterCount = i3739[3]
  i3738.LineHeight = i3739[4]
  i3738.Baseline = i3739[5]
  i3738.Ascender = i3739[6]
  i3738.CapHeight = i3739[7]
  i3738.Descender = i3739[8]
  i3738.CenterLine = i3739[9]
  i3738.SuperscriptOffset = i3739[10]
  i3738.SubscriptOffset = i3739[11]
  i3738.SubSize = i3739[12]
  i3738.Underline = i3739[13]
  i3738.UnderlineThickness = i3739[14]
  i3738.strikethrough = i3739[15]
  i3738.strikethroughThickness = i3739[16]
  i3738.TabWidth = i3739[17]
  i3738.Padding = i3739[18]
  i3738.AtlasWidth = i3739[19]
  i3738.AtlasHeight = i3739[20]
  return i3738
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3742 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3743 = data
  i3742.id = i3743[0]
  i3742.x = i3743[1]
  i3742.y = i3743[2]
  i3742.width = i3743[3]
  i3742.height = i3743[4]
  i3742.xOffset = i3743[5]
  i3742.yOffset = i3743[6]
  i3742.xAdvance = i3743[7]
  i3742.scale = i3743[8]
  return i3742
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3744 = root || request.c( 'TMPro.KerningTable' )
  var i3745 = data
  var i3747 = i3745[0]
  var i3746 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3747.length; i += 1) {
    i3746.add(request.d('TMPro.KerningPair', i3747[i + 0]));
  }
  i3744.kerningPairs = i3746
  return i3744
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3750 = root || request.c( 'TMPro.KerningPair' )
  var i3751 = data
  i3750.xOffset = i3751[0]
  i3750.m_FirstGlyph = i3751[1]
  i3750.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3751[2], i3750.m_FirstGlyphAdjustments)
  i3750.m_SecondGlyph = i3751[3]
  i3750.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3751[4], i3750.m_SecondGlyphAdjustments)
  i3750.m_IgnoreSpacingAdjustments = !!i3751[5]
  return i3750
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3752 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3753 = data
  var i3755 = i3753[0]
  var i3754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3755.length; i += 1) {
    i3754.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3755[i + 0]));
  }
  i3752.m_GlyphPairAdjustmentRecords = i3754
  return i3752
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3758 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3759 = data
  i3758.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3759[0], i3758.m_FirstAdjustmentRecord)
  i3758.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3759[1], i3758.m_SecondAdjustmentRecord)
  i3758.m_FeatureLookupFlags = i3759[2]
  return i3758
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3762 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3763 = data
  i3762.sourceFontFileName = i3763[0]
  i3762.sourceFontFileGUID = i3763[1]
  i3762.pointSizeSamplingMode = i3763[2]
  i3762.pointSize = i3763[3]
  i3762.padding = i3763[4]
  i3762.packingMode = i3763[5]
  i3762.atlasWidth = i3763[6]
  i3762.atlasHeight = i3763[7]
  i3762.characterSetSelectionMode = i3763[8]
  i3762.characterSequence = i3763[9]
  i3762.referencedFontAssetGUID = i3763[10]
  i3762.referencedTextAssetGUID = i3763[11]
  i3762.fontStyle = i3763[12]
  i3762.fontStyleModifier = i3763[13]
  i3762.renderMode = i3763[14]
  i3762.includeFontFeatures = !!i3763[15]
  return i3762
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3766 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3767 = data
  request.r(i3767[0], i3767[1], 0, i3766, 'regularTypeface')
  request.r(i3767[2], i3767[3], 0, i3766, 'italicTypeface')
  return i3766
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3768 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3769 = data
  i3768.useSafeMode = !!i3769[0]
  i3768.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3769[1], i3768.safeModeOptions)
  i3768.timeScale = i3769[2]
  i3768.unscaledTimeScale = i3769[3]
  i3768.useSmoothDeltaTime = !!i3769[4]
  i3768.maxSmoothUnscaledTime = i3769[5]
  i3768.rewindCallbackMode = i3769[6]
  i3768.showUnityEditorReport = !!i3769[7]
  i3768.logBehaviour = i3769[8]
  i3768.drawGizmos = !!i3769[9]
  i3768.defaultRecyclable = !!i3769[10]
  i3768.defaultAutoPlay = i3769[11]
  i3768.defaultUpdateType = i3769[12]
  i3768.defaultTimeScaleIndependent = !!i3769[13]
  i3768.defaultEaseType = i3769[14]
  i3768.defaultEaseOvershootOrAmplitude = i3769[15]
  i3768.defaultEasePeriod = i3769[16]
  i3768.defaultAutoKill = !!i3769[17]
  i3768.defaultLoopType = i3769[18]
  i3768.debugMode = !!i3769[19]
  i3768.debugStoreTargetId = !!i3769[20]
  i3768.showPreviewPanel = !!i3769[21]
  i3768.storeSettingsLocation = i3769[22]
  i3768.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3769[23], i3768.modules)
  i3768.createASMDEF = !!i3769[24]
  i3768.showPlayingTweens = !!i3769[25]
  i3768.showPausedTweens = !!i3769[26]
  return i3768
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3770 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3771 = data
  i3770.logBehaviour = i3771[0]
  i3770.nestedTweenFailureBehaviour = i3771[1]
  return i3770
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3772 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3773 = data
  i3772.showPanel = !!i3773[0]
  i3772.audioEnabled = !!i3773[1]
  i3772.physicsEnabled = !!i3773[2]
  i3772.physics2DEnabled = !!i3773[3]
  i3772.spriteEnabled = !!i3773[4]
  i3772.uiEnabled = !!i3773[5]
  i3772.textMeshProEnabled = !!i3773[6]
  i3772.tk2DEnabled = !!i3773[7]
  i3772.deAudioEnabled = !!i3773[8]
  i3772.deUnityExtendedEnabled = !!i3773[9]
  i3772.epoOutlineEnabled = !!i3773[10]
  return i3772
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3774 = root || request.c( 'TMPro.TMP_Settings' )
  var i3775 = data
  i3774.m_enableWordWrapping = !!i3775[0]
  i3774.m_enableKerning = !!i3775[1]
  i3774.m_enableExtraPadding = !!i3775[2]
  i3774.m_enableTintAllSprites = !!i3775[3]
  i3774.m_enableParseEscapeCharacters = !!i3775[4]
  i3774.m_EnableRaycastTarget = !!i3775[5]
  i3774.m_GetFontFeaturesAtRuntime = !!i3775[6]
  i3774.m_missingGlyphCharacter = i3775[7]
  i3774.m_warningsDisabled = !!i3775[8]
  request.r(i3775[9], i3775[10], 0, i3774, 'm_defaultFontAsset')
  i3774.m_defaultFontAssetPath = i3775[11]
  i3774.m_defaultFontSize = i3775[12]
  i3774.m_defaultAutoSizeMinRatio = i3775[13]
  i3774.m_defaultAutoSizeMaxRatio = i3775[14]
  i3774.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3775[15], i3775[16] )
  i3774.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3775[17], i3775[18] )
  i3774.m_autoSizeTextContainer = !!i3775[19]
  i3774.m_IsTextObjectScaleStatic = !!i3775[20]
  var i3777 = i3775[21]
  var i3776 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3777.length; i += 2) {
  request.r(i3777[i + 0], i3777[i + 1], 1, i3776, '')
  }
  i3774.m_fallbackFontAssets = i3776
  i3774.m_matchMaterialPreset = !!i3775[22]
  request.r(i3775[23], i3775[24], 0, i3774, 'm_defaultSpriteAsset')
  i3774.m_defaultSpriteAssetPath = i3775[25]
  i3774.m_enableEmojiSupport = !!i3775[26]
  i3774.m_MissingCharacterSpriteUnicode = i3775[27]
  i3774.m_defaultColorGradientPresetsPath = i3775[28]
  request.r(i3775[29], i3775[30], 0, i3774, 'm_defaultStyleSheet')
  i3774.m_StyleSheetsResourcePath = i3775[31]
  request.r(i3775[32], i3775[33], 0, i3774, 'm_leadingCharacters')
  request.r(i3775[34], i3775[35], 0, i3774, 'm_followingCharacters')
  i3774.m_UseModernHangulLineBreakingRules = !!i3775[36]
  return i3774
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3778 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3779 = data
  request.r(i3779[0], i3779[1], 0, i3778, 'spriteSheet')
  var i3781 = i3779[2]
  var i3780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3781.length; i += 1) {
    i3780.add(request.d('TMPro.TMP_Sprite', i3781[i + 0]));
  }
  i3778.spriteInfoList = i3780
  var i3783 = i3779[3]
  var i3782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3783.length; i += 2) {
  request.r(i3783[i + 0], i3783[i + 1], 1, i3782, '')
  }
  i3778.fallbackSpriteAssets = i3782
  i3778.hashCode = i3779[4]
  request.r(i3779[5], i3779[6], 0, i3778, 'material')
  i3778.materialHashCode = i3779[7]
  i3778.m_Version = i3779[8]
  i3778.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3779[9], i3778.m_FaceInfo)
  var i3785 = i3779[10]
  var i3784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3785.length; i += 1) {
    i3784.add(request.d('TMPro.TMP_SpriteCharacter', i3785[i + 0]));
  }
  i3778.m_SpriteCharacterTable = i3784
  var i3787 = i3779[11]
  var i3786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3787.length; i += 1) {
    i3786.add(request.d('TMPro.TMP_SpriteGlyph', i3787[i + 0]));
  }
  i3778.m_SpriteGlyphTable = i3786
  return i3778
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3790 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3791 = data
  i3790.name = i3791[0]
  i3790.hashCode = i3791[1]
  i3790.unicode = i3791[2]
  i3790.pivot = new pc.Vec2( i3791[3], i3791[4] )
  request.r(i3791[5], i3791[6], 0, i3790, 'sprite')
  i3790.id = i3791[7]
  i3790.x = i3791[8]
  i3790.y = i3791[9]
  i3790.width = i3791[10]
  i3790.height = i3791[11]
  i3790.xOffset = i3791[12]
  i3790.yOffset = i3791[13]
  i3790.xAdvance = i3791[14]
  i3790.scale = i3791[15]
  return i3790
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3796 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3797 = data
  i3796.m_Name = i3797[0]
  i3796.m_HashCode = i3797[1]
  i3796.m_ElementType = i3797[2]
  i3796.m_Unicode = i3797[3]
  i3796.m_GlyphIndex = i3797[4]
  i3796.m_Scale = i3797[5]
  return i3796
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3800 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3801 = data
  request.r(i3801[0], i3801[1], 0, i3800, 'sprite')
  i3800.m_Index = i3801[2]
  i3800.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3801[3], i3800.m_Metrics)
  i3800.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3801[4], i3800.m_GlyphRect)
  i3800.m_Scale = i3801[5]
  i3800.m_AtlasIndex = i3801[6]
  i3800.m_ClassDefinitionType = i3801[7]
  return i3800
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3802 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3803 = data
  var i3805 = i3803[0]
  var i3804 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3805.length; i += 1) {
    i3804.add(request.d('TMPro.TMP_Style', i3805[i + 0]));
  }
  i3802.m_StyleList = i3804
  return i3802
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3808 = root || request.c( 'TMPro.TMP_Style' )
  var i3809 = data
  i3808.m_Name = i3809[0]
  i3808.m_HashCode = i3809[1]
  i3808.m_OpeningDefinition = i3809[2]
  i3808.m_ClosingDefinition = i3809[3]
  i3808.m_OpeningTagArray = i3809[4]
  i3808.m_ClosingTagArray = i3809[5]
  i3808.m_OpeningTagUnicodeArray = i3809[6]
  i3808.m_ClosingTagUnicodeArray = i3809[7]
  return i3808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3811 = data
  var i3813 = i3811[0]
  var i3812 = []
  for(var i = 0; i < i3813.length; i += 1) {
    i3812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3813[i + 0]) );
  }
  i3810.files = i3812
  i3810.componentToPrefabIds = i3811[1]
  return i3810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3817 = data
  i3816.path = i3817[0]
  request.r(i3817[1], i3817[2], 0, i3816, 'unityObject')
  return i3816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3819 = data
  var i3821 = i3819[0]
  var i3820 = []
  for(var i = 0; i < i3821.length; i += 1) {
    i3820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3821[i + 0]) );
  }
  i3818.scriptsExecutionOrder = i3820
  var i3823 = i3819[1]
  var i3822 = []
  for(var i = 0; i < i3823.length; i += 1) {
    i3822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3823[i + 0]) );
  }
  i3818.sortingLayers = i3822
  var i3825 = i3819[2]
  var i3824 = []
  for(var i = 0; i < i3825.length; i += 1) {
    i3824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3825[i + 0]) );
  }
  i3818.cullingLayers = i3824
  i3818.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3819[3], i3818.timeSettings)
  i3818.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3819[4], i3818.physicsSettings)
  i3818.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3819[5], i3818.physics2DSettings)
  i3818.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3819[6], i3818.qualitySettings)
  i3818.enableRealtimeShadows = !!i3819[7]
  i3818.enableAutoInstancing = !!i3819[8]
  i3818.enableStaticBatching = !!i3819[9]
  i3818.enableDynamicBatching = !!i3819[10]
  i3818.lightmapEncodingQuality = i3819[11]
  i3818.desiredColorSpace = i3819[12]
  var i3827 = i3819[13]
  var i3826 = []
  for(var i = 0; i < i3827.length; i += 1) {
    i3826.push( i3827[i + 0] );
  }
  i3818.allTags = i3826
  return i3818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3831 = data
  i3830.name = i3831[0]
  i3830.value = i3831[1]
  return i3830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3835 = data
  i3834.id = i3835[0]
  i3834.name = i3835[1]
  i3834.value = i3835[2]
  return i3834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3839 = data
  i3838.id = i3839[0]
  i3838.name = i3839[1]
  return i3838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3841 = data
  i3840.fixedDeltaTime = i3841[0]
  i3840.maximumDeltaTime = i3841[1]
  i3840.timeScale = i3841[2]
  i3840.maximumParticleTimestep = i3841[3]
  return i3840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3843 = data
  i3842.gravity = new pc.Vec3( i3843[0], i3843[1], i3843[2] )
  i3842.defaultSolverIterations = i3843[3]
  i3842.bounceThreshold = i3843[4]
  i3842.autoSyncTransforms = !!i3843[5]
  i3842.autoSimulation = !!i3843[6]
  var i3845 = i3843[7]
  var i3844 = []
  for(var i = 0; i < i3845.length; i += 1) {
    i3844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3845[i + 0]) );
  }
  i3842.collisionMatrix = i3844
  return i3842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3849 = data
  i3848.enabled = !!i3849[0]
  i3848.layerId = i3849[1]
  i3848.otherLayerId = i3849[2]
  return i3848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3851 = data
  request.r(i3851[0], i3851[1], 0, i3850, 'material')
  i3850.gravity = new pc.Vec2( i3851[2], i3851[3] )
  i3850.positionIterations = i3851[4]
  i3850.velocityIterations = i3851[5]
  i3850.velocityThreshold = i3851[6]
  i3850.maxLinearCorrection = i3851[7]
  i3850.maxAngularCorrection = i3851[8]
  i3850.maxTranslationSpeed = i3851[9]
  i3850.maxRotationSpeed = i3851[10]
  i3850.baumgarteScale = i3851[11]
  i3850.baumgarteTOIScale = i3851[12]
  i3850.timeToSleep = i3851[13]
  i3850.linearSleepTolerance = i3851[14]
  i3850.angularSleepTolerance = i3851[15]
  i3850.defaultContactOffset = i3851[16]
  i3850.autoSimulation = !!i3851[17]
  i3850.queriesHitTriggers = !!i3851[18]
  i3850.queriesStartInColliders = !!i3851[19]
  i3850.callbacksOnDisable = !!i3851[20]
  i3850.reuseCollisionCallbacks = !!i3851[21]
  i3850.autoSyncTransforms = !!i3851[22]
  var i3853 = i3851[23]
  var i3852 = []
  for(var i = 0; i < i3853.length; i += 1) {
    i3852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3853[i + 0]) );
  }
  i3850.collisionMatrix = i3852
  return i3850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3857 = data
  i3856.enabled = !!i3857[0]
  i3856.layerId = i3857[1]
  i3856.otherLayerId = i3857[2]
  return i3856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3859 = data
  var i3861 = i3859[0]
  var i3860 = []
  for(var i = 0; i < i3861.length; i += 1) {
    i3860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3861[i + 0]) );
  }
  i3858.qualityLevels = i3860
  var i3863 = i3859[1]
  var i3862 = []
  for(var i = 0; i < i3863.length; i += 1) {
    i3862.push( i3863[i + 0] );
  }
  i3858.names = i3862
  i3858.shadows = i3859[2]
  i3858.anisotropicFiltering = i3859[3]
  i3858.antiAliasing = i3859[4]
  i3858.lodBias = i3859[5]
  i3858.shadowCascades = i3859[6]
  i3858.shadowDistance = i3859[7]
  i3858.shadowmaskMode = i3859[8]
  i3858.shadowProjection = i3859[9]
  i3858.shadowResolution = i3859[10]
  i3858.softParticles = !!i3859[11]
  i3858.softVegetation = !!i3859[12]
  i3858.activeColorSpace = i3859[13]
  i3858.desiredColorSpace = i3859[14]
  i3858.masterTextureLimit = i3859[15]
  i3858.maxQueuedFrames = i3859[16]
  i3858.particleRaycastBudget = i3859[17]
  i3858.pixelLightCount = i3859[18]
  i3858.realtimeReflectionProbes = !!i3859[19]
  i3858.shadowCascade2Split = i3859[20]
  i3858.shadowCascade4Split = new pc.Vec3( i3859[21], i3859[22], i3859[23] )
  i3858.streamingMipmapsActive = !!i3859[24]
  i3858.vSyncCount = i3859[25]
  i3858.asyncUploadBufferSize = i3859[26]
  i3858.asyncUploadTimeSlice = i3859[27]
  i3858.billboardsFaceCameraPosition = !!i3859[28]
  i3858.shadowNearPlaneOffset = i3859[29]
  i3858.streamingMipmapsMemoryBudget = i3859[30]
  i3858.maximumLODLevel = i3859[31]
  i3858.streamingMipmapsAddAllCameras = !!i3859[32]
  i3858.streamingMipmapsMaxLevelReduction = i3859[33]
  i3858.streamingMipmapsRenderersPerFrame = i3859[34]
  i3858.resolutionScalingFixedDPIFactor = i3859[35]
  i3858.streamingMipmapsMaxFileIORequests = i3859[36]
  i3858.currentQualityLevel = i3859[37]
  return i3858
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3866 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3867 = data
  i3866.xPlacement = i3867[0]
  i3866.yPlacement = i3867[1]
  i3866.xAdvance = i3867[2]
  i3866.yAdvance = i3867[3]
  return i3866
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3868 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3869 = data
  i3868.m_GlyphIndex = i3869[0]
  i3868.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3869[1], i3868.m_GlyphValueRecord)
  return i3868
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3870 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3871 = data
  i3870.m_XPlacement = i3871[0]
  i3870.m_YPlacement = i3871[1]
  i3870.m_XAdvance = i3871[2]
  i3870.m_YAdvance = i3871[3]
  return i3870
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

Deserializers.buildID = "9a9b672f-64d7-4cf0-b01f-f67c73b659fe";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

