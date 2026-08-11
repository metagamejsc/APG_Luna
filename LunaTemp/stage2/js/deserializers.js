var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3346 = root || request.c( 'UnityEngine.JointSpring' )
  var i3347 = data
  i3346.spring = i3347[0]
  i3346.damper = i3347[1]
  i3346.targetPosition = i3347[2]
  return i3346
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3348 = root || request.c( 'UnityEngine.JointMotor' )
  var i3349 = data
  i3348.m_TargetVelocity = i3349[0]
  i3348.m_Force = i3349[1]
  i3348.m_FreeSpin = i3349[2]
  return i3348
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3350 = root || request.c( 'UnityEngine.JointLimits' )
  var i3351 = data
  i3350.m_Min = i3351[0]
  i3350.m_Max = i3351[1]
  i3350.m_Bounciness = i3351[2]
  i3350.m_BounceMinVelocity = i3351[3]
  i3350.m_ContactDistance = i3351[4]
  i3350.minBounce = i3351[5]
  i3350.maxBounce = i3351[6]
  return i3350
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3352 = root || request.c( 'UnityEngine.JointDrive' )
  var i3353 = data
  i3352.m_PositionSpring = i3353[0]
  i3352.m_PositionDamper = i3353[1]
  i3352.m_MaximumForce = i3353[2]
  i3352.m_UseAcceleration = i3353[3]
  return i3352
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3354 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3355 = data
  i3354.m_Spring = i3355[0]
  i3354.m_Damper = i3355[1]
  return i3354
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3356 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3357 = data
  i3356.m_Limit = i3357[0]
  i3356.m_Bounciness = i3357[1]
  i3356.m_ContactDistance = i3357[2]
  return i3356
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3358 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3359 = data
  i3358.m_ExtremumSlip = i3359[0]
  i3358.m_ExtremumValue = i3359[1]
  i3358.m_AsymptoteSlip = i3359[2]
  i3358.m_AsymptoteValue = i3359[3]
  i3358.m_Stiffness = i3359[4]
  return i3358
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3360 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3361 = data
  i3360.m_LowerAngle = i3361[0]
  i3360.m_UpperAngle = i3361[1]
  return i3360
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3362 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3363 = data
  i3362.m_MotorSpeed = i3363[0]
  i3362.m_MaximumMotorTorque = i3363[1]
  return i3362
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3364 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3365 = data
  i3364.m_DampingRatio = i3365[0]
  i3364.m_Frequency = i3365[1]
  i3364.m_Angle = i3365[2]
  return i3364
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3366 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3367 = data
  i3366.m_LowerTranslation = i3367[0]
  i3366.m_UpperTranslation = i3367[1]
  return i3366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3368 = root || new pc.UnityMaterial()
  var i3369 = data
  i3368.name = i3369[0]
  request.r(i3369[1], i3369[2], 0, i3368, 'shader')
  i3368.renderQueue = i3369[3]
  i3368.enableInstancing = !!i3369[4]
  var i3371 = i3369[5]
  var i3370 = []
  for(var i = 0; i < i3371.length; i += 1) {
    i3370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3371[i + 0]) );
  }
  i3368.floatParameters = i3370
  var i3373 = i3369[6]
  var i3372 = []
  for(var i = 0; i < i3373.length; i += 1) {
    i3372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3373[i + 0]) );
  }
  i3368.colorParameters = i3372
  var i3375 = i3369[7]
  var i3374 = []
  for(var i = 0; i < i3375.length; i += 1) {
    i3374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3375[i + 0]) );
  }
  i3368.vectorParameters = i3374
  var i3377 = i3369[8]
  var i3376 = []
  for(var i = 0; i < i3377.length; i += 1) {
    i3376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3377[i + 0]) );
  }
  i3368.textureParameters = i3376
  var i3379 = i3369[9]
  var i3378 = []
  for(var i = 0; i < i3379.length; i += 1) {
    i3378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3379[i + 0]) );
  }
  i3368.materialFlags = i3378
  return i3368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3383 = data
  i3382.name = i3383[0]
  i3382.value = i3383[1]
  return i3382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3387 = data
  i3386.name = i3387[0]
  i3386.value = new pc.Color(i3387[1], i3387[2], i3387[3], i3387[4])
  return i3386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3391 = data
  i3390.name = i3391[0]
  i3390.value = new pc.Vec4( i3391[1], i3391[2], i3391[3], i3391[4] )
  return i3390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3395 = data
  i3394.name = i3395[0]
  request.r(i3395[1], i3395[2], 0, i3394, 'value')
  return i3394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3399 = data
  i3398.name = i3399[0]
  i3398.enabled = !!i3399[1]
  return i3398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3401 = data
  i3400.name = i3401[0]
  i3400.width = i3401[1]
  i3400.height = i3401[2]
  i3400.mipmapCount = i3401[3]
  i3400.anisoLevel = i3401[4]
  i3400.filterMode = i3401[5]
  i3400.hdr = !!i3401[6]
  i3400.format = i3401[7]
  i3400.wrapMode = i3401[8]
  i3400.alphaIsTransparency = !!i3401[9]
  i3400.alphaSource = i3401[10]
  i3400.graphicsFormat = i3401[11]
  i3400.sRGBTexture = !!i3401[12]
  i3400.desiredColorSpace = i3401[13]
  i3400.wrapU = i3401[14]
  i3400.wrapV = i3401[15]
  return i3400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3403 = data
  i3402.name = i3403[0]
  i3402.index = i3403[1]
  i3402.startup = !!i3403[2]
  return i3402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3405 = data
  i3404.aspect = i3405[0]
  i3404.orthographic = !!i3405[1]
  i3404.orthographicSize = i3405[2]
  i3404.backgroundColor = new pc.Color(i3405[3], i3405[4], i3405[5], i3405[6])
  i3404.nearClipPlane = i3405[7]
  i3404.farClipPlane = i3405[8]
  i3404.fieldOfView = i3405[9]
  i3404.depth = i3405[10]
  i3404.clearFlags = i3405[11]
  i3404.cullingMask = i3405[12]
  i3404.rect = i3405[13]
  request.r(i3405[14], i3405[15], 0, i3404, 'targetTexture')
  i3404.usePhysicalProperties = !!i3405[16]
  i3404.focalLength = i3405[17]
  i3404.sensorSize = new pc.Vec2( i3405[18], i3405[19] )
  i3404.lensShift = new pc.Vec2( i3405[20], i3405[21] )
  i3404.gateFit = i3405[22]
  i3404.commandBufferCount = i3405[23]
  i3404.cameraType = i3405[24]
  i3404.enabled = !!i3405[25]
  return i3404
}

Deserializers["CameraAutoSize"] = function (request, data, root) {
  var i3406 = root || request.c( 'CameraAutoSize' )
  var i3407 = data
  request.r(i3407[0], i3407[1], 0, i3406, 'targetCamera')
  i3406.referenceResolution = new pc.Vec2( i3407[2], i3407[3] )
  i3406.referenceOrthographicSize = i3407[4]
  return i3406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3409 = data
  i3408.name = i3409[0]
  i3408.tagId = i3409[1]
  i3408.enabled = !!i3409[2]
  i3408.isStatic = !!i3409[3]
  i3408.layer = i3409[4]
  return i3408
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3410 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3411 = data
  request.r(i3411[0], i3411[1], 0, i3410, 'm_FirstSelected')
  i3410.m_sendNavigationEvents = !!i3411[2]
  i3410.m_DragThreshold = i3411[3]
  return i3410
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3412 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3413 = data
  i3412.m_HorizontalAxis = i3413[0]
  i3412.m_VerticalAxis = i3413[1]
  i3412.m_SubmitButton = i3413[2]
  i3412.m_CancelButton = i3413[3]
  i3412.m_InputActionsPerSecond = i3413[4]
  i3412.m_RepeatDelay = i3413[5]
  i3412.m_ForceModuleActive = !!i3413[6]
  i3412.m_SendPointerHoverToParent = !!i3413[7]
  return i3412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3415 = data
  i3414.pivot = new pc.Vec2( i3415[0], i3415[1] )
  i3414.anchorMin = new pc.Vec2( i3415[2], i3415[3] )
  i3414.anchorMax = new pc.Vec2( i3415[4], i3415[5] )
  i3414.sizeDelta = new pc.Vec2( i3415[6], i3415[7] )
  i3414.anchoredPosition3D = new pc.Vec3( i3415[8], i3415[9], i3415[10] )
  i3414.rotation = new pc.Quat(i3415[11], i3415[12], i3415[13], i3415[14])
  i3414.scale = new pc.Vec3( i3415[15], i3415[16], i3415[17] )
  return i3414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3417 = data
  i3416.planeDistance = i3417[0]
  i3416.referencePixelsPerUnit = i3417[1]
  i3416.isFallbackOverlay = !!i3417[2]
  i3416.renderMode = i3417[3]
  i3416.renderOrder = i3417[4]
  i3416.sortingLayerName = i3417[5]
  i3416.sortingOrder = i3417[6]
  i3416.scaleFactor = i3417[7]
  request.r(i3417[8], i3417[9], 0, i3416, 'worldCamera')
  i3416.overrideSorting = !!i3417[10]
  i3416.pixelPerfect = !!i3417[11]
  i3416.targetDisplay = i3417[12]
  i3416.overridePixelPerfect = !!i3417[13]
  i3416.enabled = !!i3417[14]
  return i3416
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3418 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3419 = data
  i3418.m_UiScaleMode = i3419[0]
  i3418.m_ReferencePixelsPerUnit = i3419[1]
  i3418.m_ScaleFactor = i3419[2]
  i3418.m_ReferenceResolution = new pc.Vec2( i3419[3], i3419[4] )
  i3418.m_ScreenMatchMode = i3419[5]
  i3418.m_MatchWidthOrHeight = i3419[6]
  i3418.m_PhysicalUnit = i3419[7]
  i3418.m_FallbackScreenDPI = i3419[8]
  i3418.m_DefaultSpriteDPI = i3419[9]
  i3418.m_DynamicPixelsPerUnit = i3419[10]
  i3418.m_PresetInfoIsWorld = !!i3419[11]
  return i3418
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3420 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3421 = data
  i3420.m_IgnoreReversedGraphics = !!i3421[0]
  i3420.m_BlockingObjects = i3421[1]
  i3420.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3421[2] )
  return i3420
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i3422 = root || request.c( 'Playable.GameManager' )
  var i3423 = data
  i3422._totalEvent = i3423[0]
  i3422._endTime = i3423[1]
  request.r(i3423[2], i3423[3], 0, i3422, '_backgroundMusic')
  request.r(i3423[4], i3423[5], 0, i3422, '_backgroundTexture')
  i3422._backgroundColor = new pc.Color(i3423[6], i3423[7], i3423[8], i3423[9])
  request.r(i3423[10], i3423[11], 0, i3422, '_progressCount')
  request.r(i3423[12], i3423[13], 0, i3422, '_txtCount')
  request.r(i3423[14], i3423[15], 0, i3422, '_txtTime')
  var i3425 = i3423[16]
  var i3424 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i3425.length; i += 2) {
  request.r(i3425[i + 0], i3425[i + 1], 1, i3424, '')
  }
  i3422._btnCTA = i3424
  request.r(i3423[17], i3423[18], 0, i3422, '_objEndGame')
  request.r(i3423[19], i3423[20], 0, i3422, '_background')
  return i3422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3429 = data
  i3428.cullTransparentMesh = !!i3429[0]
  return i3428
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3430 = root || request.c( 'UnityEngine.UI.Image' )
  var i3431 = data
  request.r(i3431[0], i3431[1], 0, i3430, 'm_Sprite')
  i3430.m_Type = i3431[2]
  i3430.m_PreserveAspect = !!i3431[3]
  i3430.m_FillCenter = !!i3431[4]
  i3430.m_FillMethod = i3431[5]
  i3430.m_FillAmount = i3431[6]
  i3430.m_FillClockwise = !!i3431[7]
  i3430.m_FillOrigin = i3431[8]
  i3430.m_UseSpriteMesh = !!i3431[9]
  i3430.m_PixelsPerUnitMultiplier = i3431[10]
  request.r(i3431[11], i3431[12], 0, i3430, 'm_Material')
  i3430.m_Maskable = !!i3431[13]
  i3430.m_Color = new pc.Color(i3431[14], i3431[15], i3431[16], i3431[17])
  i3430.m_RaycastTarget = !!i3431[18]
  i3430.m_RaycastPadding = new pc.Vec4( i3431[19], i3431[20], i3431[21], i3431[22] )
  return i3430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3433 = data
  request.r(i3433[0], i3433[1], 0, i3432, 'clip')
  request.r(i3433[2], i3433[3], 0, i3432, 'outputAudioMixerGroup')
  i3432.playOnAwake = !!i3433[4]
  i3432.loop = !!i3433[5]
  i3432.time = i3433[6]
  i3432.volume = i3433[7]
  i3432.pitch = i3433[8]
  i3432.enabled = !!i3433[9]
  return i3432
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3434 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3435 = data
  i3434.m_hasFontAssetChanged = !!i3435[0]
  request.r(i3435[1], i3435[2], 0, i3434, 'm_baseMaterial')
  i3434.m_maskOffset = new pc.Vec4( i3435[3], i3435[4], i3435[5], i3435[6] )
  i3434.m_text = i3435[7]
  i3434.m_isRightToLeft = !!i3435[8]
  request.r(i3435[9], i3435[10], 0, i3434, 'm_fontAsset')
  request.r(i3435[11], i3435[12], 0, i3434, 'm_sharedMaterial')
  var i3437 = i3435[13]
  var i3436 = []
  for(var i = 0; i < i3437.length; i += 2) {
  request.r(i3437[i + 0], i3437[i + 1], 2, i3436, '')
  }
  i3434.m_fontSharedMaterials = i3436
  request.r(i3435[14], i3435[15], 0, i3434, 'm_fontMaterial')
  var i3439 = i3435[16]
  var i3438 = []
  for(var i = 0; i < i3439.length; i += 2) {
  request.r(i3439[i + 0], i3439[i + 1], 2, i3438, '')
  }
  i3434.m_fontMaterials = i3438
  i3434.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3435[17], i3435[18], i3435[19], i3435[20])
  i3434.m_fontColor = new pc.Color(i3435[21], i3435[22], i3435[23], i3435[24])
  i3434.m_enableVertexGradient = !!i3435[25]
  i3434.m_colorMode = i3435[26]
  i3434.m_fontColorGradient = request.d('TMPro.VertexGradient', i3435[27], i3434.m_fontColorGradient)
  request.r(i3435[28], i3435[29], 0, i3434, 'm_fontColorGradientPreset')
  request.r(i3435[30], i3435[31], 0, i3434, 'm_spriteAsset')
  i3434.m_tintAllSprites = !!i3435[32]
  request.r(i3435[33], i3435[34], 0, i3434, 'm_StyleSheet')
  i3434.m_TextStyleHashCode = i3435[35]
  i3434.m_overrideHtmlColors = !!i3435[36]
  i3434.m_faceColor = UnityEngine.Color32.ConstructColor(i3435[37], i3435[38], i3435[39], i3435[40])
  i3434.m_fontSize = i3435[41]
  i3434.m_fontSizeBase = i3435[42]
  i3434.m_fontWeight = i3435[43]
  i3434.m_enableAutoSizing = !!i3435[44]
  i3434.m_fontSizeMin = i3435[45]
  i3434.m_fontSizeMax = i3435[46]
  i3434.m_fontStyle = i3435[47]
  i3434.m_HorizontalAlignment = i3435[48]
  i3434.m_VerticalAlignment = i3435[49]
  i3434.m_textAlignment = i3435[50]
  i3434.m_characterSpacing = i3435[51]
  i3434.m_wordSpacing = i3435[52]
  i3434.m_lineSpacing = i3435[53]
  i3434.m_lineSpacingMax = i3435[54]
  i3434.m_paragraphSpacing = i3435[55]
  i3434.m_charWidthMaxAdj = i3435[56]
  i3434.m_enableWordWrapping = !!i3435[57]
  i3434.m_wordWrappingRatios = i3435[58]
  i3434.m_overflowMode = i3435[59]
  request.r(i3435[60], i3435[61], 0, i3434, 'm_linkedTextComponent')
  request.r(i3435[62], i3435[63], 0, i3434, 'parentLinkedComponent')
  i3434.m_enableKerning = !!i3435[64]
  i3434.m_enableExtraPadding = !!i3435[65]
  i3434.checkPaddingRequired = !!i3435[66]
  i3434.m_isRichText = !!i3435[67]
  i3434.m_parseCtrlCharacters = !!i3435[68]
  i3434.m_isOrthographic = !!i3435[69]
  i3434.m_isCullingEnabled = !!i3435[70]
  i3434.m_horizontalMapping = i3435[71]
  i3434.m_verticalMapping = i3435[72]
  i3434.m_uvLineOffset = i3435[73]
  i3434.m_geometrySortingOrder = i3435[74]
  i3434.m_IsTextObjectScaleStatic = !!i3435[75]
  i3434.m_VertexBufferAutoSizeReduction = !!i3435[76]
  i3434.m_useMaxVisibleDescender = !!i3435[77]
  i3434.m_pageToDisplay = i3435[78]
  i3434.m_margin = new pc.Vec4( i3435[79], i3435[80], i3435[81], i3435[82] )
  i3434.m_isUsingLegacyAnimationComponent = !!i3435[83]
  i3434.m_isVolumetricText = !!i3435[84]
  request.r(i3435[85], i3435[86], 0, i3434, 'm_Material')
  i3434.m_Maskable = !!i3435[87]
  i3434.m_Color = new pc.Color(i3435[88], i3435[89], i3435[90], i3435[91])
  i3434.m_RaycastTarget = !!i3435[92]
  i3434.m_RaycastPadding = new pc.Vec4( i3435[93], i3435[94], i3435[95], i3435[96] )
  return i3434
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3442 = root || request.c( 'TMPro.VertexGradient' )
  var i3443 = data
  i3442.topLeft = new pc.Color(i3443[0], i3443[1], i3443[2], i3443[3])
  i3442.topRight = new pc.Color(i3443[4], i3443[5], i3443[6], i3443[7])
  i3442.bottomLeft = new pc.Color(i3443[8], i3443[9], i3443[10], i3443[11])
  i3442.bottomRight = new pc.Color(i3443[12], i3443[13], i3443[14], i3443[15])
  return i3442
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3444 = root || request.c( 'UnityEngine.UI.Button' )
  var i3445 = data
  i3444.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3445[0], i3444.m_OnClick)
  i3444.m_Navigation = request.d('UnityEngine.UI.Navigation', i3445[1], i3444.m_Navigation)
  i3444.m_Transition = i3445[2]
  i3444.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3445[3], i3444.m_Colors)
  i3444.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3445[4], i3444.m_SpriteState)
  i3444.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3445[5], i3444.m_AnimationTriggers)
  i3444.m_Interactable = !!i3445[6]
  request.r(i3445[7], i3445[8], 0, i3444, 'm_TargetGraphic')
  return i3444
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3446 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3447 = data
  i3446.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3447[0], i3446.m_PersistentCalls)
  return i3446
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3448 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3449 = data
  var i3451 = i3449[0]
  var i3450 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3451.length; i += 1) {
    i3450.add(request.d('UnityEngine.Events.PersistentCall', i3451[i + 0]));
  }
  i3448.m_Calls = i3450
  return i3448
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3454 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3455 = data
  request.r(i3455[0], i3455[1], 0, i3454, 'm_Target')
  i3454.m_TargetAssemblyTypeName = i3455[2]
  i3454.m_MethodName = i3455[3]
  i3454.m_Mode = i3455[4]
  i3454.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3455[5], i3454.m_Arguments)
  i3454.m_CallState = i3455[6]
  return i3454
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3456 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3457 = data
  request.r(i3457[0], i3457[1], 0, i3456, 'm_ObjectArgument')
  i3456.m_ObjectArgumentAssemblyTypeName = i3457[2]
  i3456.m_IntArgument = i3457[3]
  i3456.m_FloatArgument = i3457[4]
  i3456.m_StringArgument = i3457[5]
  i3456.m_BoolArgument = !!i3457[6]
  return i3456
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3458 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3459 = data
  i3458.m_Mode = i3459[0]
  i3458.m_WrapAround = !!i3459[1]
  request.r(i3459[2], i3459[3], 0, i3458, 'm_SelectOnUp')
  request.r(i3459[4], i3459[5], 0, i3458, 'm_SelectOnDown')
  request.r(i3459[6], i3459[7], 0, i3458, 'm_SelectOnLeft')
  request.r(i3459[8], i3459[9], 0, i3458, 'm_SelectOnRight')
  return i3458
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3460 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3461 = data
  i3460.m_NormalColor = new pc.Color(i3461[0], i3461[1], i3461[2], i3461[3])
  i3460.m_HighlightedColor = new pc.Color(i3461[4], i3461[5], i3461[6], i3461[7])
  i3460.m_PressedColor = new pc.Color(i3461[8], i3461[9], i3461[10], i3461[11])
  i3460.m_SelectedColor = new pc.Color(i3461[12], i3461[13], i3461[14], i3461[15])
  i3460.m_DisabledColor = new pc.Color(i3461[16], i3461[17], i3461[18], i3461[19])
  i3460.m_ColorMultiplier = i3461[20]
  i3460.m_FadeDuration = i3461[21]
  return i3460
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3462 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3463 = data
  request.r(i3463[0], i3463[1], 0, i3462, 'm_HighlightedSprite')
  request.r(i3463[2], i3463[3], 0, i3462, 'm_PressedSprite')
  request.r(i3463[4], i3463[5], 0, i3462, 'm_SelectedSprite')
  request.r(i3463[6], i3463[7], 0, i3462, 'm_DisabledSprite')
  return i3462
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3464 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3465 = data
  i3464.m_NormalTrigger = i3465[0]
  i3464.m_HighlightedTrigger = i3465[1]
  i3464.m_PressedTrigger = i3465[2]
  i3464.m_SelectedTrigger = i3465[3]
  i3464.m_DisabledTrigger = i3465[4]
  return i3464
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3466 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3467 = data
  i3466.m_ShowMaskGraphic = !!i3467[0]
  return i3466
}

Deserializers["Playable.GameController"] = function (request, data, root) {
  var i3468 = root || request.c( 'Playable.GameController' )
  var i3469 = data
  request.r(i3469[0], i3469[1], 0, i3468, 'skeletonAnimation')
  var i3471 = i3469[2]
  var i3470 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i3471.length; i += 1) {
    i3470.add(i3471[i + 0]);
  }
  i3468._nameSkin = i3470
  request.r(i3469[3], i3469[4], 0, i3468, '_hand')
  request.r(i3469[5], i3469[6], 0, i3468, '_pos1')
  request.r(i3469[7], i3469[8], 0, i3468, '_pos2')
  request.r(i3469[9], i3469[10], 0, i3468, '_handSkeleton')
  i3468._handAnimName = i3469[11]
  i3468._handAnimDelay = i3469[12]
  i3468._handMoveDuration = i3469[13]
  request.r(i3469[14], i3469[15], 0, i3468, '_txtSub')
  request.r(i3469[16], i3469[17], 0, i3468, '_soundIntro')
  return i3468
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i3474 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i3475 = data
  request.r(i3475[0], i3475[1], 0, i3474, 'skeletonDataAsset')
  request.r(i3475[2], i3475[3], 0, i3474, 'additiveMaterial')
  request.r(i3475[4], i3475[5], 0, i3474, 'multiplyMaterial')
  request.r(i3475[6], i3475[7], 0, i3474, 'screenMaterial')
  i3474.forceAdditiveMaterial = !!i3475[8]
  i3474.initialSkinName = i3475[9]
  i3474.initialFlipX = !!i3475[10]
  i3474.initialFlipY = !!i3475[11]
  i3474.startingAnimation = i3475[12]
  i3474.startingLoop = !!i3475[13]
  i3474.timeScale = i3475[14]
  i3474.freeze = !!i3475[15]
  i3474.layoutScaleMode = i3475[16]
  i3474.updateWhenInvisible = i3475[17]
  i3474.allowMultipleCanvasRenderers = !!i3475[18]
  var i3477 = i3475[19]
  var i3476 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i3477.length; i += 2) {
  request.r(i3477[i + 0], i3477[i + 1], 1, i3476, '')
  }
  i3474.canvasRenderers = i3476
  i3474.enableSeparatorSlots = !!i3475[20]
  i3474.updateSeparatorPartLocation = !!i3475[21]
  i3474.updateSeparatorPartScale = !!i3475[22]
  i3474.disableMeshAssignmentOnOverride = !!i3475[23]
  i3474.m_SkeletonColor = new pc.Color(i3475[24], i3475[25], i3475[26], i3475[27])
  i3474.referenceSize = new pc.Vec2( i3475[28], i3475[29] )
  i3474.pivotOffset = new pc.Vec2( i3475[30], i3475[31] )
  i3474.referenceScale = i3475[32]
  i3474.layoutScale = i3475[33]
  i3474.rectTransformSize = new pc.Vec2( i3475[34], i3475[35] )
  i3474.editReferenceRect = !!i3475[36]
  var i3479 = i3475[37]
  var i3478 = []
  for(var i = 0; i < i3479.length; i += 1) {
    i3478.push( i3479[i + 0] );
  }
  i3474.separatorSlotNames = i3478
  var i3481 = i3475[38]
  var i3480 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3481.length; i += 2) {
  request.r(i3481[i + 0], i3481[i + 1], 1, i3480, '')
  }
  i3474.separatorParts = i3480
  i3474.physicsPositionInheritanceFactor = new pc.Vec2( i3475[39], i3475[40] )
  i3474.physicsRotationInheritanceFactor = i3475[41]
  request.r(i3475[42], i3475[43], 0, i3474, 'physicsMovementRelativeTo')
  i3474.meshGenerator = request.d('Spine.Unity.MeshGenerator', i3475[44], i3474.meshGenerator)
  i3474.updateTiming = i3475[45]
  i3474.unscaledTime = !!i3475[46]
  request.r(i3475[47], i3475[48], 0, i3474, 'm_Material')
  i3474.m_Maskable = !!i3475[49]
  i3474.m_Color = new pc.Color(i3475[50], i3475[51], i3475[52], i3475[53])
  i3474.m_RaycastTarget = !!i3475[54]
  i3474.m_RaycastPadding = new pc.Vec4( i3475[55], i3475[56], i3475[57], i3475[58] )
  return i3474
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i3488 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i3489 = data
  i3488.settings = request.d('Spine.Unity.MeshGenerator+Settings', i3489[0], i3488.settings)
  return i3488
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i3490 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i3491 = data
  i3490.useClipping = !!i3491[0]
  i3490.zSpacing = i3491[1]
  i3490.tintBlack = !!i3491[2]
  i3490.canvasGroupCompatible = !!i3491[3]
  i3490.pmaVertexColors = !!i3491[4]
  i3490.addNormals = !!i3491[5]
  i3490.calculateTangents = !!i3491[6]
  i3490.immutableTriangles = !!i3491[7]
  return i3490
}

Deserializers["SpineEventSoundPlayer"] = function (request, data, root) {
  var i3492 = root || request.c( 'SpineEventSoundPlayer' )
  var i3493 = data
  request.r(i3493[0], i3493[1], 0, i3492, 'skeletonAnimation')
  request.r(i3493[2], i3493[3], 0, i3492, 'skeletonGraphic')
  request.r(i3493[4], i3493[5], 0, i3492, 'audioSource')
  var i3495 = i3493[6]
  var i3494 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i3495.length; i += 2) {
  request.r(i3495[i + 0], i3495[i + 1], 1, i3494, '')
  }
  i3492.audioClips = i3494
  return i3492
}

Deserializers["Playable.TargetLevel37"] = function (request, data, root) {
  var i3498 = root || request.c( 'Playable.TargetLevel37' )
  var i3499 = data
  var i3501 = i3499[0]
  var i3500 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.BoyInfo')))
  for(var i = 0; i < i3501.length; i += 1) {
    i3500.add(request.d('Playable.BoyInfo', i3501[i + 0]));
  }
  i3498.boyInfos = i3500
  i3498._isKeepLastBoy = !!i3499[1]
  i3498._delayDeactivate = i3499[2]
  i3498._delayTime = i3499[3]
  i3498._isInteractable = !!i3499[4]
  request.r(i3499[5], i3499[6], 0, i3498, 'targetRect')
  return i3498
}

Deserializers["Playable.BoyInfo"] = function (request, data, root) {
  var i3504 = root || request.c( 'Playable.BoyInfo' )
  var i3505 = data
  i3504.Type = i3505[0]
  request.r(i3505[1], i3505[2], 0, i3504, 'Root')
  i3504.AnimInfo = request.d('Playable.AnimInfo', i3505[3], i3504.AnimInfo)
  i3504.IsClickable = !!i3505[4]
  request.r(i3505[5], i3505[6], 0, i3504, 'Sound')
  i3504.Sub = i3505[7]
  return i3504
}

Deserializers["Playable.AnimInfo"] = function (request, data, root) {
  var i3506 = root || request.c( 'Playable.AnimInfo' )
  var i3507 = data
  request.r(i3507[0], i3507[1], 0, i3506, 'Skeleton')
  request.r(i3507[2], i3507[3], 0, i3506, 'Item')
  request.r(i3507[4], i3507[5], 0, i3506, 'Meter')
  i3506.AnimDefault = i3507[6]
  var i3509 = i3507[7]
  var i3508 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.AnimStep')))
  for(var i = 0; i < i3509.length; i += 1) {
    i3508.add(request.d('Playable.AnimStep', i3509[i + 0]));
  }
  i3506.AnimWin = i3508
  var i3511 = i3507[8]
  var i3510 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.AnimStep')))
  for(var i = 0; i < i3511.length; i += 1) {
    i3510.add(request.d('Playable.AnimStep', i3511[i + 0]));
  }
  i3506.AnimLoseSteps = i3510
  var i3513 = i3507[9]
  var i3512 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i3513.length; i += 1) {
    i3512.add(i3513[i + 0]);
  }
  i3506.AnimItem = i3512
  i3506.MeterAnim = i3507[10]
  return i3506
}

Deserializers["Playable.AnimStep"] = function (request, data, root) {
  var i3516 = root || request.c( 'Playable.AnimStep' )
  var i3517 = data
  i3516.Name = i3517[0]
  i3516.IsLoop = !!i3517[1]
  return i3516
}

Deserializers["Playable.ItemLevel37"] = function (request, data, root) {
  var i3518 = root || request.c( 'Playable.ItemLevel37' )
  var i3519 = data
  i3518._targetType = i3519[0]
  i3518._isHaveAnim = !!i3519[1]
  i3518._nameSkin = i3519[2]
  request.r(i3519[3], i3519[4], 0, i3518, '_objActive')
  var i3521 = i3519[5]
  var i3520 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3521.length; i += 2) {
  request.r(i3521[i + 0], i3521[i + 1], 1, i3520, '')
  }
  i3518._objsDisabled = i3520
  i3518._isTriggerOnDragOut = !!i3519[6]
  request.r(i3519[7], i3519[8], 0, i3518, '_dragOutTarget')
  i3518._isInteractable = !!i3519[9]
  i3518.returnDuration = i3519[10]
  request.r(i3519[11], i3519[12], 0, i3518, 'itemRect')
  request.r(i3519[13], i3519[14], 0, i3518, 'pressSound')
  return i3518
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3524 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3525 = data
  i3524.targetIsSelf = !!i3525[0]
  request.r(i3525[1], i3525[2], 0, i3524, 'targetGO')
  i3524.tweenTargetIsTargetGO = !!i3525[3]
  i3524.delay = i3525[4]
  i3524.duration = i3525[5]
  i3524.easeType = i3525[6]
  i3524.easeCurve = new pc.AnimationCurve( { keys_flow: i3525[7] } )
  i3524.loopType = i3525[8]
  i3524.loops = i3525[9]
  i3524.id = i3525[10]
  i3524.isRelative = !!i3525[11]
  i3524.isFrom = !!i3525[12]
  i3524.isIndependentUpdate = !!i3525[13]
  i3524.autoKill = !!i3525[14]
  i3524.autoGenerate = !!i3525[15]
  i3524.isActive = !!i3525[16]
  i3524.isValid = !!i3525[17]
  request.r(i3525[18], i3525[19], 0, i3524, 'target')
  i3524.animationType = i3525[20]
  i3524.targetType = i3525[21]
  i3524.forcedTargetType = i3525[22]
  i3524.autoPlay = !!i3525[23]
  i3524.useTargetAsV3 = !!i3525[24]
  i3524.endValueFloat = i3525[25]
  i3524.endValueV3 = new pc.Vec3( i3525[26], i3525[27], i3525[28] )
  i3524.endValueV2 = new pc.Vec2( i3525[29], i3525[30] )
  i3524.endValueColor = new pc.Color(i3525[31], i3525[32], i3525[33], i3525[34])
  i3524.endValueString = i3525[35]
  i3524.endValueRect = UnityEngine.Rect.MinMaxRect(i3525[36], i3525[37], i3525[38], i3525[39])
  request.r(i3525[40], i3525[41], 0, i3524, 'endValueTransform')
  i3524.optionalBool0 = !!i3525[42]
  i3524.optionalBool1 = !!i3525[43]
  i3524.optionalFloat0 = i3525[44]
  i3524.optionalInt0 = i3525[45]
  i3524.optionalRotationMode = i3525[46]
  i3524.optionalScrambleMode = i3525[47]
  i3524.optionalShakeRandomnessMode = i3525[48]
  i3524.optionalString = i3525[49]
  i3524.updateType = i3525[50]
  i3524.isSpeedBased = !!i3525[51]
  i3524.hasOnStart = !!i3525[52]
  i3524.hasOnPlay = !!i3525[53]
  i3524.hasOnUpdate = !!i3525[54]
  i3524.hasOnStepComplete = !!i3525[55]
  i3524.hasOnComplete = !!i3525[56]
  i3524.hasOnTweenCreated = !!i3525[57]
  i3524.hasOnRewind = !!i3525[58]
  i3524.onStart = request.d('UnityEngine.Events.UnityEvent', i3525[59], i3524.onStart)
  i3524.onPlay = request.d('UnityEngine.Events.UnityEvent', i3525[60], i3524.onPlay)
  i3524.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3525[61], i3524.onUpdate)
  i3524.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3525[62], i3524.onStepComplete)
  i3524.onComplete = request.d('UnityEngine.Events.UnityEvent', i3525[63], i3524.onComplete)
  i3524.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3525[64], i3524.onTweenCreated)
  i3524.onRewind = request.d('UnityEngine.Events.UnityEvent', i3525[65], i3524.onRewind)
  return i3524
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3526 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3527 = data
  i3526.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3527[0], i3526.m_PersistentCalls)
  return i3526
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i3528 = root || request.c( 'Playable.AudioManager' )
  var i3529 = data
  request.r(i3529[0], i3529[1], 0, i3528, '_audioMusic')
  request.r(i3529[2], i3529[3], 0, i3528, '_audioSound')
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3531 = data
  i3530.ambientIntensity = i3531[0]
  i3530.reflectionIntensity = i3531[1]
  i3530.ambientMode = i3531[2]
  i3530.ambientLight = new pc.Color(i3531[3], i3531[4], i3531[5], i3531[6])
  i3530.ambientSkyColor = new pc.Color(i3531[7], i3531[8], i3531[9], i3531[10])
  i3530.ambientGroundColor = new pc.Color(i3531[11], i3531[12], i3531[13], i3531[14])
  i3530.ambientEquatorColor = new pc.Color(i3531[15], i3531[16], i3531[17], i3531[18])
  i3530.fogColor = new pc.Color(i3531[19], i3531[20], i3531[21], i3531[22])
  i3530.fogEndDistance = i3531[23]
  i3530.fogStartDistance = i3531[24]
  i3530.fogDensity = i3531[25]
  i3530.fog = !!i3531[26]
  request.r(i3531[27], i3531[28], 0, i3530, 'skybox')
  i3530.fogMode = i3531[29]
  var i3533 = i3531[30]
  var i3532 = []
  for(var i = 0; i < i3533.length; i += 1) {
    i3532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3533[i + 0]) );
  }
  i3530.lightmaps = i3532
  i3530.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3531[31], i3530.lightProbes)
  i3530.lightmapsMode = i3531[32]
  i3530.mixedBakeMode = i3531[33]
  i3530.environmentLightingMode = i3531[34]
  i3530.ambientProbe = new pc.SphericalHarmonicsL2(i3531[35])
  request.r(i3531[36], i3531[37], 0, i3530, 'customReflection')
  request.r(i3531[38], i3531[39], 0, i3530, 'defaultReflection')
  i3530.defaultReflectionMode = i3531[40]
  i3530.defaultReflectionResolution = i3531[41]
  i3530.sunLightObjectId = i3531[42]
  i3530.pixelLightCount = i3531[43]
  i3530.defaultReflectionHDR = !!i3531[44]
  i3530.hasLightDataAsset = !!i3531[45]
  i3530.hasManualGenerate = !!i3531[46]
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3537 = data
  request.r(i3537[0], i3537[1], 0, i3536, 'lightmapColor')
  request.r(i3537[2], i3537[3], 0, i3536, 'lightmapDirection')
  request.r(i3537[4], i3537[5], 0, i3536, 'shadowMask')
  return i3536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3538 = root || new UnityEngine.LightProbes()
  var i3539 = data
  return i3538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3547 = data
  var i3549 = i3547[0]
  var i3548 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3549.length; i += 1) {
    i3548.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3549[i + 0]));
  }
  i3546.ShaderCompilationErrors = i3548
  i3546.name = i3547[1]
  i3546.guid = i3547[2]
  var i3551 = i3547[3]
  var i3550 = []
  for(var i = 0; i < i3551.length; i += 1) {
    i3550.push( i3551[i + 0] );
  }
  i3546.shaderDefinedKeywords = i3550
  var i3553 = i3547[4]
  var i3552 = []
  for(var i = 0; i < i3553.length; i += 1) {
    i3552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3553[i + 0]) );
  }
  i3546.passes = i3552
  var i3555 = i3547[5]
  var i3554 = []
  for(var i = 0; i < i3555.length; i += 1) {
    i3554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3555[i + 0]) );
  }
  i3546.usePasses = i3554
  var i3557 = i3547[6]
  var i3556 = []
  for(var i = 0; i < i3557.length; i += 1) {
    i3556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3557[i + 0]) );
  }
  i3546.defaultParameterValues = i3556
  request.r(i3547[7], i3547[8], 0, i3546, 'unityFallbackShader')
  i3546.readDepth = !!i3547[9]
  i3546.hasDepthOnlyPass = !!i3547[10]
  i3546.isCreatedByShaderGraph = !!i3547[11]
  i3546.disableBatching = !!i3547[12]
  i3546.compiled = !!i3547[13]
  return i3546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3561 = data
  i3560.shaderName = i3561[0]
  i3560.errorMessage = i3561[1]
  return i3560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3564 = root || new pc.UnityShaderPass()
  var i3565 = data
  i3564.id = i3565[0]
  i3564.subShaderIndex = i3565[1]
  i3564.name = i3565[2]
  i3564.passType = i3565[3]
  i3564.grabPassTextureName = i3565[4]
  i3564.usePass = !!i3565[5]
  i3564.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3565[6], i3564.zTest)
  i3564.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3565[7], i3564.zWrite)
  i3564.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3565[8], i3564.culling)
  i3564.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3565[9], i3564.blending)
  i3564.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3565[10], i3564.alphaBlending)
  i3564.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3565[11], i3564.colorWriteMask)
  i3564.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3565[12], i3564.offsetUnits)
  i3564.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3565[13], i3564.offsetFactor)
  i3564.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3565[14], i3564.stencilRef)
  i3564.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3565[15], i3564.stencilReadMask)
  i3564.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3565[16], i3564.stencilWriteMask)
  i3564.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3565[17], i3564.stencilOp)
  i3564.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3565[18], i3564.stencilOpFront)
  i3564.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3565[19], i3564.stencilOpBack)
  var i3567 = i3565[20]
  var i3566 = []
  for(var i = 0; i < i3567.length; i += 1) {
    i3566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3567[i + 0]) );
  }
  i3564.tags = i3566
  var i3569 = i3565[21]
  var i3568 = []
  for(var i = 0; i < i3569.length; i += 1) {
    i3568.push( i3569[i + 0] );
  }
  i3564.passDefinedKeywords = i3568
  var i3571 = i3565[22]
  var i3570 = []
  for(var i = 0; i < i3571.length; i += 1) {
    i3570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3571[i + 0]) );
  }
  i3564.passDefinedKeywordGroups = i3570
  var i3573 = i3565[23]
  var i3572 = []
  for(var i = 0; i < i3573.length; i += 1) {
    i3572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3573[i + 0]) );
  }
  i3564.variants = i3572
  var i3575 = i3565[24]
  var i3574 = []
  for(var i = 0; i < i3575.length; i += 1) {
    i3574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3575[i + 0]) );
  }
  i3564.excludedVariants = i3574
  i3564.hasDepthReader = !!i3565[25]
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3577 = data
  i3576.val = i3577[0]
  i3576.name = i3577[1]
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3579 = data
  i3578.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3579[0], i3578.src)
  i3578.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3579[1], i3578.dst)
  i3578.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3579[2], i3578.op)
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3581 = data
  i3580.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3581[0], i3580.pass)
  i3580.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3581[1], i3580.fail)
  i3580.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3581[2], i3580.zFail)
  i3580.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3581[3], i3580.comp)
  return i3580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3585 = data
  i3584.name = i3585[0]
  i3584.value = i3585[1]
  return i3584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3589 = data
  var i3591 = i3589[0]
  var i3590 = []
  for(var i = 0; i < i3591.length; i += 1) {
    i3590.push( i3591[i + 0] );
  }
  i3588.keywords = i3590
  i3588.hasDiscard = !!i3589[1]
  return i3588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3595 = data
  i3594.passId = i3595[0]
  i3594.subShaderIndex = i3595[1]
  var i3597 = i3595[2]
  var i3596 = []
  for(var i = 0; i < i3597.length; i += 1) {
    i3596.push( i3597[i + 0] );
  }
  i3594.keywords = i3596
  i3594.vertexProgram = i3595[3]
  i3594.fragmentProgram = i3595[4]
  i3594.exportedForWebGl2 = !!i3595[5]
  i3594.readDepth = !!i3595[6]
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3601 = data
  request.r(i3601[0], i3601[1], 0, i3600, 'shader')
  i3600.pass = i3601[2]
  return i3600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3605 = data
  i3604.name = i3605[0]
  i3604.type = i3605[1]
  i3604.value = new pc.Vec4( i3605[2], i3605[3], i3605[4], i3605[5] )
  i3604.textureValue = i3605[6]
  i3604.shaderPropertyFlag = i3605[7]
  return i3604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3607 = data
  i3606.name = i3607[0]
  request.r(i3607[1], i3607[2], 0, i3606, 'texture')
  i3606.aabb = i3607[3]
  i3606.vertices = i3607[4]
  i3606.triangles = i3607[5]
  i3606.textureRect = UnityEngine.Rect.MinMaxRect(i3607[6], i3607[7], i3607[8], i3607[9])
  i3606.packedRect = UnityEngine.Rect.MinMaxRect(i3607[10], i3607[11], i3607[12], i3607[13])
  i3606.border = new pc.Vec4( i3607[14], i3607[15], i3607[16], i3607[17] )
  i3606.transparency = i3607[18]
  i3606.bounds = i3607[19]
  i3606.pixelsPerUnit = i3607[20]
  i3606.textureWidth = i3607[21]
  i3606.textureHeight = i3607[22]
  i3606.nativeSize = new pc.Vec2( i3607[23], i3607[24] )
  i3606.pivot = new pc.Vec2( i3607[25], i3607[26] )
  i3606.textureRectOffset = new pc.Vec2( i3607[27], i3607[28] )
  return i3606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3609 = data
  i3608.name = i3609[0]
  return i3608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3611 = data
  i3610.name = i3611[0]
  i3610.ascent = i3611[1]
  i3610.originalLineHeight = i3611[2]
  i3610.fontSize = i3611[3]
  var i3613 = i3611[4]
  var i3612 = []
  for(var i = 0; i < i3613.length; i += 1) {
    i3612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3613[i + 0]) );
  }
  i3610.characterInfo = i3612
  request.r(i3611[5], i3611[6], 0, i3610, 'texture')
  i3610.originalFontSize = i3611[7]
  return i3610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3617 = data
  i3616.index = i3617[0]
  i3616.advance = i3617[1]
  i3616.bearing = i3617[2]
  i3616.glyphWidth = i3617[3]
  i3616.glyphHeight = i3617[4]
  i3616.minX = i3617[5]
  i3616.maxX = i3617[6]
  i3616.minY = i3617[7]
  i3616.maxY = i3617[8]
  i3616.uvBottomLeftX = i3617[9]
  i3616.uvBottomLeftY = i3617[10]
  i3616.uvBottomRightX = i3617[11]
  i3616.uvBottomRightY = i3617[12]
  i3616.uvTopLeftX = i3617[13]
  i3616.uvTopLeftY = i3617[14]
  i3616.uvTopRightX = i3617[15]
  i3616.uvTopRightY = i3617[16]
  return i3616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3619 = data
  i3618.name = i3619[0]
  i3618.bytes64 = i3619[1]
  i3618.data = i3619[2]
  return i3618
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3620 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3621 = data
  request.r(i3621[0], i3621[1], 0, i3620, 'atlas')
  i3620.normalStyle = i3621[2]
  i3620.normalSpacingOffset = i3621[3]
  i3620.boldStyle = i3621[4]
  i3620.boldSpacing = i3621[5]
  i3620.italicStyle = i3621[6]
  i3620.tabSize = i3621[7]
  i3620.hashCode = i3621[8]
  request.r(i3621[9], i3621[10], 0, i3620, 'material')
  i3620.materialHashCode = i3621[11]
  i3620.m_Version = i3621[12]
  i3620.m_SourceFontFileGUID = i3621[13]
  request.r(i3621[14], i3621[15], 0, i3620, 'm_SourceFontFile_EditorRef')
  request.r(i3621[16], i3621[17], 0, i3620, 'm_SourceFontFile')
  i3620.m_AtlasPopulationMode = i3621[18]
  i3620.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3621[19], i3620.m_FaceInfo)
  var i3623 = i3621[20]
  var i3622 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3623.length; i += 1) {
    i3622.add(request.d('UnityEngine.TextCore.Glyph', i3623[i + 0]));
  }
  i3620.m_GlyphTable = i3622
  var i3625 = i3621[21]
  var i3624 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3625.length; i += 1) {
    i3624.add(request.d('TMPro.TMP_Character', i3625[i + 0]));
  }
  i3620.m_CharacterTable = i3624
  var i3627 = i3621[22]
  var i3626 = []
  for(var i = 0; i < i3627.length; i += 2) {
  request.r(i3627[i + 0], i3627[i + 1], 2, i3626, '')
  }
  i3620.m_AtlasTextures = i3626
  i3620.m_AtlasTextureIndex = i3621[23]
  i3620.m_IsMultiAtlasTexturesEnabled = !!i3621[24]
  i3620.m_ClearDynamicDataOnBuild = !!i3621[25]
  var i3629 = i3621[26]
  var i3628 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3629.length; i += 1) {
    i3628.add(request.d('UnityEngine.TextCore.GlyphRect', i3629[i + 0]));
  }
  i3620.m_UsedGlyphRects = i3628
  var i3631 = i3621[27]
  var i3630 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3631.length; i += 1) {
    i3630.add(request.d('UnityEngine.TextCore.GlyphRect', i3631[i + 0]));
  }
  i3620.m_FreeGlyphRects = i3630
  i3620.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3621[28], i3620.m_fontInfo)
  i3620.m_AtlasWidth = i3621[29]
  i3620.m_AtlasHeight = i3621[30]
  i3620.m_AtlasPadding = i3621[31]
  i3620.m_AtlasRenderMode = i3621[32]
  var i3633 = i3621[33]
  var i3632 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3633.length; i += 1) {
    i3632.add(request.d('TMPro.TMP_Glyph', i3633[i + 0]));
  }
  i3620.m_glyphInfoList = i3632
  i3620.m_KerningTable = request.d('TMPro.KerningTable', i3621[34], i3620.m_KerningTable)
  i3620.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3621[35], i3620.m_FontFeatureTable)
  var i3635 = i3621[36]
  var i3634 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3635.length; i += 2) {
  request.r(i3635[i + 0], i3635[i + 1], 1, i3634, '')
  }
  i3620.fallbackFontAssets = i3634
  var i3637 = i3621[37]
  var i3636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3637.length; i += 2) {
  request.r(i3637[i + 0], i3637[i + 1], 1, i3636, '')
  }
  i3620.m_FallbackFontAssetTable = i3636
  i3620.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3621[38], i3620.m_CreationSettings)
  var i3639 = i3621[39]
  var i3638 = []
  for(var i = 0; i < i3639.length; i += 1) {
    i3638.push( request.d('TMPro.TMP_FontWeightPair', i3639[i + 0]) );
  }
  i3620.m_FontWeightTable = i3638
  var i3641 = i3621[40]
  var i3640 = []
  for(var i = 0; i < i3641.length; i += 1) {
    i3640.push( request.d('TMPro.TMP_FontWeightPair', i3641[i + 0]) );
  }
  i3620.fontWeights = i3640
  return i3620
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3642 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3643 = data
  i3642.m_FaceIndex = i3643[0]
  i3642.m_FamilyName = i3643[1]
  i3642.m_StyleName = i3643[2]
  i3642.m_PointSize = i3643[3]
  i3642.m_Scale = i3643[4]
  i3642.m_UnitsPerEM = i3643[5]
  i3642.m_LineHeight = i3643[6]
  i3642.m_AscentLine = i3643[7]
  i3642.m_CapLine = i3643[8]
  i3642.m_MeanLine = i3643[9]
  i3642.m_Baseline = i3643[10]
  i3642.m_DescentLine = i3643[11]
  i3642.m_SuperscriptOffset = i3643[12]
  i3642.m_SuperscriptSize = i3643[13]
  i3642.m_SubscriptOffset = i3643[14]
  i3642.m_SubscriptSize = i3643[15]
  i3642.m_UnderlineOffset = i3643[16]
  i3642.m_UnderlineThickness = i3643[17]
  i3642.m_StrikethroughOffset = i3643[18]
  i3642.m_StrikethroughThickness = i3643[19]
  i3642.m_TabWidth = i3643[20]
  return i3642
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3646 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3647 = data
  i3646.m_Index = i3647[0]
  i3646.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3647[1], i3646.m_Metrics)
  i3646.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3647[2], i3646.m_GlyphRect)
  i3646.m_Scale = i3647[3]
  i3646.m_AtlasIndex = i3647[4]
  i3646.m_ClassDefinitionType = i3647[5]
  return i3646
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3648 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3649 = data
  i3648.m_Width = i3649[0]
  i3648.m_Height = i3649[1]
  i3648.m_HorizontalBearingX = i3649[2]
  i3648.m_HorizontalBearingY = i3649[3]
  i3648.m_HorizontalAdvance = i3649[4]
  return i3648
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3650 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3651 = data
  i3650.m_X = i3651[0]
  i3650.m_Y = i3651[1]
  i3650.m_Width = i3651[2]
  i3650.m_Height = i3651[3]
  return i3650
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3654 = root || request.c( 'TMPro.TMP_Character' )
  var i3655 = data
  i3654.m_ElementType = i3655[0]
  i3654.m_Unicode = i3655[1]
  i3654.m_GlyphIndex = i3655[2]
  i3654.m_Scale = i3655[3]
  return i3654
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3660 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3661 = data
  i3660.Name = i3661[0]
  i3660.PointSize = i3661[1]
  i3660.Scale = i3661[2]
  i3660.CharacterCount = i3661[3]
  i3660.LineHeight = i3661[4]
  i3660.Baseline = i3661[5]
  i3660.Ascender = i3661[6]
  i3660.CapHeight = i3661[7]
  i3660.Descender = i3661[8]
  i3660.CenterLine = i3661[9]
  i3660.SuperscriptOffset = i3661[10]
  i3660.SubscriptOffset = i3661[11]
  i3660.SubSize = i3661[12]
  i3660.Underline = i3661[13]
  i3660.UnderlineThickness = i3661[14]
  i3660.strikethrough = i3661[15]
  i3660.strikethroughThickness = i3661[16]
  i3660.TabWidth = i3661[17]
  i3660.Padding = i3661[18]
  i3660.AtlasWidth = i3661[19]
  i3660.AtlasHeight = i3661[20]
  return i3660
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3664 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3665 = data
  i3664.id = i3665[0]
  i3664.x = i3665[1]
  i3664.y = i3665[2]
  i3664.width = i3665[3]
  i3664.height = i3665[4]
  i3664.xOffset = i3665[5]
  i3664.yOffset = i3665[6]
  i3664.xAdvance = i3665[7]
  i3664.scale = i3665[8]
  return i3664
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3666 = root || request.c( 'TMPro.KerningTable' )
  var i3667 = data
  var i3669 = i3667[0]
  var i3668 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3669.length; i += 1) {
    i3668.add(request.d('TMPro.KerningPair', i3669[i + 0]));
  }
  i3666.kerningPairs = i3668
  return i3666
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3672 = root || request.c( 'TMPro.KerningPair' )
  var i3673 = data
  i3672.xOffset = i3673[0]
  i3672.m_FirstGlyph = i3673[1]
  i3672.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3673[2], i3672.m_FirstGlyphAdjustments)
  i3672.m_SecondGlyph = i3673[3]
  i3672.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3673[4], i3672.m_SecondGlyphAdjustments)
  i3672.m_IgnoreSpacingAdjustments = !!i3673[5]
  return i3672
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3674 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3675 = data
  var i3677 = i3675[0]
  var i3676 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3677.length; i += 1) {
    i3676.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3677[i + 0]));
  }
  i3674.m_GlyphPairAdjustmentRecords = i3676
  return i3674
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3680 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3681 = data
  i3680.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3681[0], i3680.m_FirstAdjustmentRecord)
  i3680.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3681[1], i3680.m_SecondAdjustmentRecord)
  i3680.m_FeatureLookupFlags = i3681[2]
  return i3680
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3684 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3685 = data
  i3684.sourceFontFileName = i3685[0]
  i3684.sourceFontFileGUID = i3685[1]
  i3684.pointSizeSamplingMode = i3685[2]
  i3684.pointSize = i3685[3]
  i3684.padding = i3685[4]
  i3684.packingMode = i3685[5]
  i3684.atlasWidth = i3685[6]
  i3684.atlasHeight = i3685[7]
  i3684.characterSetSelectionMode = i3685[8]
  i3684.characterSequence = i3685[9]
  i3684.referencedFontAssetGUID = i3685[10]
  i3684.referencedTextAssetGUID = i3685[11]
  i3684.fontStyle = i3685[12]
  i3684.fontStyleModifier = i3685[13]
  i3684.renderMode = i3685[14]
  i3684.includeFontFeatures = !!i3685[15]
  return i3684
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3688 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3689 = data
  request.r(i3689[0], i3689[1], 0, i3688, 'regularTypeface')
  request.r(i3689[2], i3689[3], 0, i3688, 'italicTypeface')
  return i3688
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3690 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3691 = data
  var i3693 = i3691[0]
  var i3692 = []
  for(var i = 0; i < i3693.length; i += 2) {
  request.r(i3693[i + 0], i3693[i + 1], 2, i3692, '')
  }
  i3690.atlasAssets = i3692
  i3690.scale = i3691[1]
  request.r(i3691[2], i3691[3], 0, i3690, 'skeletonJSON')
  i3690.isUpgradingBlendModeMaterials = !!i3691[4]
  i3690.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3691[5], i3690.blendModeMaterials)
  var i3695 = i3691[6]
  var i3694 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3695.length; i += 2) {
  request.r(i3695[i + 0], i3695[i + 1], 1, i3694, '')
  }
  i3690.skeletonDataModifiers = i3694
  var i3697 = i3691[7]
  var i3696 = []
  for(var i = 0; i < i3697.length; i += 1) {
    i3696.push( i3697[i + 0] );
  }
  i3690.fromAnimation = i3696
  var i3699 = i3691[8]
  var i3698 = []
  for(var i = 0; i < i3699.length; i += 1) {
    i3698.push( i3699[i + 0] );
  }
  i3690.toAnimation = i3698
  i3690.duration = i3691[9]
  i3690.defaultMix = i3691[10]
  request.r(i3691[11], i3691[12], 0, i3690, 'controller')
  return i3690
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3702 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3703 = data
  i3702.applyAdditiveMaterial = !!i3703[0]
  var i3705 = i3703[1]
  var i3704 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3705.length; i += 1) {
    i3704.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3705[i + 0]));
  }
  i3702.additiveMaterials = i3704
  var i3707 = i3703[2]
  var i3706 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3707.length; i += 1) {
    i3706.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3707[i + 0]));
  }
  i3702.multiplyMaterials = i3706
  var i3709 = i3703[3]
  var i3708 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3709.length; i += 1) {
    i3708.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3709[i + 0]));
  }
  i3702.screenMaterials = i3708
  i3702.requiresBlendModeMaterials = !!i3703[4]
  return i3702
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3712 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3713 = data
  i3712.pageName = i3713[0]
  request.r(i3713[1], i3713[2], 0, i3712, 'material')
  return i3712
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3716 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3717 = data
  request.r(i3717[0], i3717[1], 0, i3716, 'atlasFile')
  var i3719 = i3717[2]
  var i3718 = []
  for(var i = 0; i < i3719.length; i += 2) {
  request.r(i3719[i + 0], i3719[i + 1], 2, i3718, '')
  }
  i3716.materials = i3718
  i3716.textureLoadingMode = i3717[3]
  request.r(i3717[4], i3717[5], 0, i3716, 'onDemandTextureLoader')
  return i3716
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3720 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3721 = data
  i3720.useSafeMode = !!i3721[0]
  i3720.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3721[1], i3720.safeModeOptions)
  i3720.timeScale = i3721[2]
  i3720.unscaledTimeScale = i3721[3]
  i3720.useSmoothDeltaTime = !!i3721[4]
  i3720.maxSmoothUnscaledTime = i3721[5]
  i3720.rewindCallbackMode = i3721[6]
  i3720.showUnityEditorReport = !!i3721[7]
  i3720.logBehaviour = i3721[8]
  i3720.drawGizmos = !!i3721[9]
  i3720.defaultRecyclable = !!i3721[10]
  i3720.defaultAutoPlay = i3721[11]
  i3720.defaultUpdateType = i3721[12]
  i3720.defaultTimeScaleIndependent = !!i3721[13]
  i3720.defaultEaseType = i3721[14]
  i3720.defaultEaseOvershootOrAmplitude = i3721[15]
  i3720.defaultEasePeriod = i3721[16]
  i3720.defaultAutoKill = !!i3721[17]
  i3720.defaultLoopType = i3721[18]
  i3720.debugMode = !!i3721[19]
  i3720.debugStoreTargetId = !!i3721[20]
  i3720.showPreviewPanel = !!i3721[21]
  i3720.storeSettingsLocation = i3721[22]
  i3720.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3721[23], i3720.modules)
  i3720.createASMDEF = !!i3721[24]
  i3720.showPlayingTweens = !!i3721[25]
  i3720.showPausedTweens = !!i3721[26]
  return i3720
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3722 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3723 = data
  i3722.logBehaviour = i3723[0]
  i3722.nestedTweenFailureBehaviour = i3723[1]
  return i3722
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3724 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3725 = data
  i3724.showPanel = !!i3725[0]
  i3724.audioEnabled = !!i3725[1]
  i3724.physicsEnabled = !!i3725[2]
  i3724.physics2DEnabled = !!i3725[3]
  i3724.spriteEnabled = !!i3725[4]
  i3724.uiEnabled = !!i3725[5]
  i3724.textMeshProEnabled = !!i3725[6]
  i3724.tk2DEnabled = !!i3725[7]
  i3724.deAudioEnabled = !!i3725[8]
  i3724.deUnityExtendedEnabled = !!i3725[9]
  i3724.epoOutlineEnabled = !!i3725[10]
  return i3724
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3726 = root || request.c( 'TMPro.TMP_Settings' )
  var i3727 = data
  i3726.m_enableWordWrapping = !!i3727[0]
  i3726.m_enableKerning = !!i3727[1]
  i3726.m_enableExtraPadding = !!i3727[2]
  i3726.m_enableTintAllSprites = !!i3727[3]
  i3726.m_enableParseEscapeCharacters = !!i3727[4]
  i3726.m_EnableRaycastTarget = !!i3727[5]
  i3726.m_GetFontFeaturesAtRuntime = !!i3727[6]
  i3726.m_missingGlyphCharacter = i3727[7]
  i3726.m_warningsDisabled = !!i3727[8]
  request.r(i3727[9], i3727[10], 0, i3726, 'm_defaultFontAsset')
  i3726.m_defaultFontAssetPath = i3727[11]
  i3726.m_defaultFontSize = i3727[12]
  i3726.m_defaultAutoSizeMinRatio = i3727[13]
  i3726.m_defaultAutoSizeMaxRatio = i3727[14]
  i3726.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3727[15], i3727[16] )
  i3726.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3727[17], i3727[18] )
  i3726.m_autoSizeTextContainer = !!i3727[19]
  i3726.m_IsTextObjectScaleStatic = !!i3727[20]
  var i3729 = i3727[21]
  var i3728 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3729.length; i += 2) {
  request.r(i3729[i + 0], i3729[i + 1], 1, i3728, '')
  }
  i3726.m_fallbackFontAssets = i3728
  i3726.m_matchMaterialPreset = !!i3727[22]
  request.r(i3727[23], i3727[24], 0, i3726, 'm_defaultSpriteAsset')
  i3726.m_defaultSpriteAssetPath = i3727[25]
  i3726.m_enableEmojiSupport = !!i3727[26]
  i3726.m_MissingCharacterSpriteUnicode = i3727[27]
  i3726.m_defaultColorGradientPresetsPath = i3727[28]
  request.r(i3727[29], i3727[30], 0, i3726, 'm_defaultStyleSheet')
  i3726.m_StyleSheetsResourcePath = i3727[31]
  request.r(i3727[32], i3727[33], 0, i3726, 'm_leadingCharacters')
  request.r(i3727[34], i3727[35], 0, i3726, 'm_followingCharacters')
  i3726.m_UseModernHangulLineBreakingRules = !!i3727[36]
  return i3726
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3730 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3731 = data
  i3730.m_GlyphIndex = i3731[0]
  i3730.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3731[1], i3730.m_GlyphValueRecord)
  return i3730
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3732 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3733 = data
  i3732.m_XPlacement = i3733[0]
  i3732.m_YPlacement = i3733[1]
  i3732.m_XAdvance = i3733[2]
  i3732.m_YAdvance = i3733[3]
  return i3732
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3734 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3735 = data
  request.r(i3735[0], i3735[1], 0, i3734, 'spriteSheet')
  var i3737 = i3735[2]
  var i3736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3737.length; i += 1) {
    i3736.add(request.d('TMPro.TMP_Sprite', i3737[i + 0]));
  }
  i3734.spriteInfoList = i3736
  var i3739 = i3735[3]
  var i3738 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3739.length; i += 2) {
  request.r(i3739[i + 0], i3739[i + 1], 1, i3738, '')
  }
  i3734.fallbackSpriteAssets = i3738
  i3734.hashCode = i3735[4]
  request.r(i3735[5], i3735[6], 0, i3734, 'material')
  i3734.materialHashCode = i3735[7]
  i3734.m_Version = i3735[8]
  i3734.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3735[9], i3734.m_FaceInfo)
  var i3741 = i3735[10]
  var i3740 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3741.length; i += 1) {
    i3740.add(request.d('TMPro.TMP_SpriteCharacter', i3741[i + 0]));
  }
  i3734.m_SpriteCharacterTable = i3740
  var i3743 = i3735[11]
  var i3742 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3743.length; i += 1) {
    i3742.add(request.d('TMPro.TMP_SpriteGlyph', i3743[i + 0]));
  }
  i3734.m_SpriteGlyphTable = i3742
  return i3734
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3746 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3747 = data
  i3746.name = i3747[0]
  i3746.hashCode = i3747[1]
  i3746.unicode = i3747[2]
  i3746.pivot = new pc.Vec2( i3747[3], i3747[4] )
  request.r(i3747[5], i3747[6], 0, i3746, 'sprite')
  i3746.id = i3747[7]
  i3746.x = i3747[8]
  i3746.y = i3747[9]
  i3746.width = i3747[10]
  i3746.height = i3747[11]
  i3746.xOffset = i3747[12]
  i3746.yOffset = i3747[13]
  i3746.xAdvance = i3747[14]
  i3746.scale = i3747[15]
  return i3746
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3752 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3753 = data
  i3752.m_Name = i3753[0]
  i3752.m_HashCode = i3753[1]
  i3752.m_ElementType = i3753[2]
  i3752.m_Unicode = i3753[3]
  i3752.m_GlyphIndex = i3753[4]
  i3752.m_Scale = i3753[5]
  return i3752
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3756 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3757 = data
  request.r(i3757[0], i3757[1], 0, i3756, 'sprite')
  i3756.m_Index = i3757[2]
  i3756.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3757[3], i3756.m_Metrics)
  i3756.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3757[4], i3756.m_GlyphRect)
  i3756.m_Scale = i3757[5]
  i3756.m_AtlasIndex = i3757[6]
  i3756.m_ClassDefinitionType = i3757[7]
  return i3756
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3758 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3759 = data
  var i3761 = i3759[0]
  var i3760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3761.length; i += 1) {
    i3760.add(request.d('TMPro.TMP_Style', i3761[i + 0]));
  }
  i3758.m_StyleList = i3760
  return i3758
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3764 = root || request.c( 'TMPro.TMP_Style' )
  var i3765 = data
  i3764.m_Name = i3765[0]
  i3764.m_HashCode = i3765[1]
  i3764.m_OpeningDefinition = i3765[2]
  i3764.m_ClosingDefinition = i3765[3]
  i3764.m_OpeningTagArray = i3765[4]
  i3764.m_ClosingTagArray = i3765[5]
  i3764.m_OpeningTagUnicodeArray = i3765[6]
  i3764.m_ClosingTagUnicodeArray = i3765[7]
  return i3764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3767 = data
  var i3769 = i3767[0]
  var i3768 = []
  for(var i = 0; i < i3769.length; i += 1) {
    i3768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3769[i + 0]) );
  }
  i3766.files = i3768
  i3766.componentToPrefabIds = i3767[1]
  return i3766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3773 = data
  i3772.path = i3773[0]
  request.r(i3773[1], i3773[2], 0, i3772, 'unityObject')
  return i3772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3775 = data
  var i3777 = i3775[0]
  var i3776 = []
  for(var i = 0; i < i3777.length; i += 1) {
    i3776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3777[i + 0]) );
  }
  i3774.scriptsExecutionOrder = i3776
  var i3779 = i3775[1]
  var i3778 = []
  for(var i = 0; i < i3779.length; i += 1) {
    i3778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3779[i + 0]) );
  }
  i3774.sortingLayers = i3778
  var i3781 = i3775[2]
  var i3780 = []
  for(var i = 0; i < i3781.length; i += 1) {
    i3780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3781[i + 0]) );
  }
  i3774.cullingLayers = i3780
  i3774.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3775[3], i3774.timeSettings)
  i3774.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3775[4], i3774.physicsSettings)
  i3774.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3775[5], i3774.physics2DSettings)
  i3774.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3775[6], i3774.qualitySettings)
  i3774.enableRealtimeShadows = !!i3775[7]
  i3774.enableAutoInstancing = !!i3775[8]
  i3774.enableStaticBatching = !!i3775[9]
  i3774.enableDynamicBatching = !!i3775[10]
  i3774.usePreservativeDynamicBatching = !!i3775[11]
  i3774.lightmapEncodingQuality = i3775[12]
  i3774.desiredColorSpace = i3775[13]
  var i3783 = i3775[14]
  var i3782 = []
  for(var i = 0; i < i3783.length; i += 1) {
    i3782.push( i3783[i + 0] );
  }
  i3774.allTags = i3782
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3787 = data
  i3786.name = i3787[0]
  i3786.value = i3787[1]
  return i3786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3791 = data
  i3790.id = i3791[0]
  i3790.name = i3791[1]
  i3790.value = i3791[2]
  return i3790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3795 = data
  i3794.id = i3795[0]
  i3794.name = i3795[1]
  return i3794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3797 = data
  i3796.fixedDeltaTime = i3797[0]
  i3796.maximumDeltaTime = i3797[1]
  i3796.timeScale = i3797[2]
  i3796.maximumParticleTimestep = i3797[3]
  return i3796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3799 = data
  i3798.gravity = new pc.Vec3( i3799[0], i3799[1], i3799[2] )
  i3798.defaultSolverIterations = i3799[3]
  i3798.bounceThreshold = i3799[4]
  i3798.autoSyncTransforms = !!i3799[5]
  i3798.autoSimulation = !!i3799[6]
  var i3801 = i3799[7]
  var i3800 = []
  for(var i = 0; i < i3801.length; i += 1) {
    i3800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3801[i + 0]) );
  }
  i3798.collisionMatrix = i3800
  return i3798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3805 = data
  i3804.enabled = !!i3805[0]
  i3804.layerId = i3805[1]
  i3804.otherLayerId = i3805[2]
  return i3804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3807 = data
  request.r(i3807[0], i3807[1], 0, i3806, 'material')
  i3806.gravity = new pc.Vec2( i3807[2], i3807[3] )
  i3806.positionIterations = i3807[4]
  i3806.velocityIterations = i3807[5]
  i3806.velocityThreshold = i3807[6]
  i3806.maxLinearCorrection = i3807[7]
  i3806.maxAngularCorrection = i3807[8]
  i3806.maxTranslationSpeed = i3807[9]
  i3806.maxRotationSpeed = i3807[10]
  i3806.baumgarteScale = i3807[11]
  i3806.baumgarteTOIScale = i3807[12]
  i3806.timeToSleep = i3807[13]
  i3806.linearSleepTolerance = i3807[14]
  i3806.angularSleepTolerance = i3807[15]
  i3806.defaultContactOffset = i3807[16]
  i3806.autoSimulation = !!i3807[17]
  i3806.queriesHitTriggers = !!i3807[18]
  i3806.queriesStartInColliders = !!i3807[19]
  i3806.callbacksOnDisable = !!i3807[20]
  i3806.reuseCollisionCallbacks = !!i3807[21]
  i3806.autoSyncTransforms = !!i3807[22]
  var i3809 = i3807[23]
  var i3808 = []
  for(var i = 0; i < i3809.length; i += 1) {
    i3808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3809[i + 0]) );
  }
  i3806.collisionMatrix = i3808
  return i3806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3813 = data
  i3812.enabled = !!i3813[0]
  i3812.layerId = i3813[1]
  i3812.otherLayerId = i3813[2]
  return i3812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3815 = data
  var i3817 = i3815[0]
  var i3816 = []
  for(var i = 0; i < i3817.length; i += 1) {
    i3816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3817[i + 0]) );
  }
  i3814.qualityLevels = i3816
  var i3819 = i3815[1]
  var i3818 = []
  for(var i = 0; i < i3819.length; i += 1) {
    i3818.push( i3819[i + 0] );
  }
  i3814.names = i3818
  i3814.shadows = i3815[2]
  i3814.anisotropicFiltering = i3815[3]
  i3814.antiAliasing = i3815[4]
  i3814.lodBias = i3815[5]
  i3814.shadowCascades = i3815[6]
  i3814.shadowDistance = i3815[7]
  i3814.shadowmaskMode = i3815[8]
  i3814.shadowProjection = i3815[9]
  i3814.shadowResolution = i3815[10]
  i3814.softParticles = !!i3815[11]
  i3814.softVegetation = !!i3815[12]
  i3814.activeColorSpace = i3815[13]
  i3814.desiredColorSpace = i3815[14]
  i3814.masterTextureLimit = i3815[15]
  i3814.maxQueuedFrames = i3815[16]
  i3814.particleRaycastBudget = i3815[17]
  i3814.pixelLightCount = i3815[18]
  i3814.realtimeReflectionProbes = !!i3815[19]
  i3814.shadowCascade2Split = i3815[20]
  i3814.shadowCascade4Split = new pc.Vec3( i3815[21], i3815[22], i3815[23] )
  i3814.streamingMipmapsActive = !!i3815[24]
  i3814.vSyncCount = i3815[25]
  i3814.asyncUploadBufferSize = i3815[26]
  i3814.asyncUploadTimeSlice = i3815[27]
  i3814.billboardsFaceCameraPosition = !!i3815[28]
  i3814.shadowNearPlaneOffset = i3815[29]
  i3814.streamingMipmapsMemoryBudget = i3815[30]
  i3814.maximumLODLevel = i3815[31]
  i3814.streamingMipmapsAddAllCameras = !!i3815[32]
  i3814.streamingMipmapsMaxLevelReduction = i3815[33]
  i3814.streamingMipmapsRenderersPerFrame = i3815[34]
  i3814.resolutionScalingFixedDPIFactor = i3815[35]
  i3814.streamingMipmapsMaxFileIORequests = i3815[36]
  i3814.currentQualityLevel = i3815[37]
  return i3814
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3822 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3823 = data
  i3822.xPlacement = i3823[0]
  i3822.yPlacement = i3823[1]
  i3822.xAdvance = i3823[2]
  i3822.yAdvance = i3823[3]
  return i3822
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[2],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[51],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[59],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[2],"73":[74],"75":[76],"77":[76],"10":[9],"28":[20],"5":[2],"78":[9],"79":[11],"80":[9],"30":[9],"29":[9],"81":[82],"83":[84],"85":[82],"86":[9],"87":[9],"12":[10],"15":[19,9],"88":[9],"11":[10],"89":[9],"90":[9],"91":[9],"92":[9],"93":[9],"94":[9],"95":[9],"24":[9],"96":[9],"97":[19,9],"98":[9],"99":[9],"100":[9],"101":[9],"102":[19,9],"103":[9],"104":[7],"105":[7],"8":[7],"106":[7],"107":[2],"108":[2],"109":[110],"111":[2],"112":[113],"114":[9],"115":[19,9],"116":[74],"26":[19,9],"117":[118,74],"119":[74],"120":[74,121],"122":[51],"123":[59],"124":[113],"125":[126],"127":[9],"128":[74,9],"16":[9,19],"129":[9],"130":[19,9],"131":[74],"132":[19,9],"133":[9],"134":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAutoSize","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Playable.GameManager","UnityEngine.AudioClip","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.UI.Mask","Playable.GameController","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","SpineEventSoundPlayer","Playable.TargetLevel37","Playable.ItemLevel37","DG.Tweening.DOTweenAnimation","Playable.AudioManager","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Item","ResponsiveCanvasScaler","Target","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "08/04/2026 10:21:04";

Deserializers.lunaDaysRunning = "6.7";

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

Deserializers.buildID = "05f0c723-b623-43f6-8343-36e177044245";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

