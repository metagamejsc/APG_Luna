var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5472 = root || request.c( 'UnityEngine.JointSpring' )
  var i5473 = data
  i5472.spring = i5473[0]
  i5472.damper = i5473[1]
  i5472.targetPosition = i5473[2]
  return i5472
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5474 = root || request.c( 'UnityEngine.JointMotor' )
  var i5475 = data
  i5474.m_TargetVelocity = i5475[0]
  i5474.m_Force = i5475[1]
  i5474.m_FreeSpin = i5475[2]
  return i5474
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5476 = root || request.c( 'UnityEngine.JointLimits' )
  var i5477 = data
  i5476.m_Min = i5477[0]
  i5476.m_Max = i5477[1]
  i5476.m_Bounciness = i5477[2]
  i5476.m_BounceMinVelocity = i5477[3]
  i5476.m_ContactDistance = i5477[4]
  i5476.minBounce = i5477[5]
  i5476.maxBounce = i5477[6]
  return i5476
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5478 = root || request.c( 'UnityEngine.JointDrive' )
  var i5479 = data
  i5478.m_PositionSpring = i5479[0]
  i5478.m_PositionDamper = i5479[1]
  i5478.m_MaximumForce = i5479[2]
  i5478.m_UseAcceleration = i5479[3]
  return i5478
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5480 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5481 = data
  i5480.m_Spring = i5481[0]
  i5480.m_Damper = i5481[1]
  return i5480
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5482 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5483 = data
  i5482.m_Limit = i5483[0]
  i5482.m_Bounciness = i5483[1]
  i5482.m_ContactDistance = i5483[2]
  return i5482
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5484 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5485 = data
  i5484.m_ExtremumSlip = i5485[0]
  i5484.m_ExtremumValue = i5485[1]
  i5484.m_AsymptoteSlip = i5485[2]
  i5484.m_AsymptoteValue = i5485[3]
  i5484.m_Stiffness = i5485[4]
  return i5484
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5486 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5487 = data
  i5486.m_LowerAngle = i5487[0]
  i5486.m_UpperAngle = i5487[1]
  return i5486
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5488 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5489 = data
  i5488.m_MotorSpeed = i5489[0]
  i5488.m_MaximumMotorTorque = i5489[1]
  return i5488
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5490 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5491 = data
  i5490.m_DampingRatio = i5491[0]
  i5490.m_Frequency = i5491[1]
  i5490.m_Angle = i5491[2]
  return i5490
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5492 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5493 = data
  i5492.m_LowerTranslation = i5493[0]
  i5492.m_UpperTranslation = i5493[1]
  return i5492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5495 = data
  i5494.name = i5495[0]
  i5494.width = i5495[1]
  i5494.height = i5495[2]
  i5494.mipmapCount = i5495[3]
  i5494.anisoLevel = i5495[4]
  i5494.filterMode = i5495[5]
  i5494.hdr = !!i5495[6]
  i5494.format = i5495[7]
  i5494.wrapMode = i5495[8]
  i5494.alphaIsTransparency = !!i5495[9]
  i5494.alphaSource = i5495[10]
  i5494.graphicsFormat = i5495[11]
  i5494.sRGBTexture = !!i5495[12]
  i5494.desiredColorSpace = i5495[13]
  i5494.wrapU = i5495[14]
  i5494.wrapV = i5495[15]
  return i5494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5496 = root || new pc.UnityMaterial()
  var i5497 = data
  i5496.name = i5497[0]
  request.r(i5497[1], i5497[2], 0, i5496, 'shader')
  i5496.renderQueue = i5497[3]
  i5496.enableInstancing = !!i5497[4]
  var i5499 = i5497[5]
  var i5498 = []
  for(var i = 0; i < i5499.length; i += 1) {
    i5498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5499[i + 0]) );
  }
  i5496.floatParameters = i5498
  var i5501 = i5497[6]
  var i5500 = []
  for(var i = 0; i < i5501.length; i += 1) {
    i5500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5501[i + 0]) );
  }
  i5496.colorParameters = i5500
  var i5503 = i5497[7]
  var i5502 = []
  for(var i = 0; i < i5503.length; i += 1) {
    i5502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5503[i + 0]) );
  }
  i5496.vectorParameters = i5502
  var i5505 = i5497[8]
  var i5504 = []
  for(var i = 0; i < i5505.length; i += 1) {
    i5504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5505[i + 0]) );
  }
  i5496.textureParameters = i5504
  var i5507 = i5497[9]
  var i5506 = []
  for(var i = 0; i < i5507.length; i += 1) {
    i5506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5507[i + 0]) );
  }
  i5496.materialFlags = i5506
  return i5496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5511 = data
  i5510.name = i5511[0]
  i5510.value = i5511[1]
  return i5510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5515 = data
  i5514.name = i5515[0]
  i5514.value = new pc.Color(i5515[1], i5515[2], i5515[3], i5515[4])
  return i5514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5519 = data
  i5518.name = i5519[0]
  i5518.value = new pc.Vec4( i5519[1], i5519[2], i5519[3], i5519[4] )
  return i5518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5523 = data
  i5522.name = i5523[0]
  request.r(i5523[1], i5523[2], 0, i5522, 'value')
  return i5522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5527 = data
  i5526.name = i5527[0]
  i5526.enabled = !!i5527[1]
  return i5526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5529 = data
  i5528.name = i5529[0]
  i5528.index = i5529[1]
  i5528.startup = !!i5529[2]
  return i5528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5531 = data
  i5530.position = new pc.Vec3( i5531[0], i5531[1], i5531[2] )
  i5530.scale = new pc.Vec3( i5531[3], i5531[4], i5531[5] )
  i5530.rotation = new pc.Quat(i5531[6], i5531[7], i5531[8], i5531[9])
  return i5530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5533 = data
  i5532.aspect = i5533[0]
  i5532.orthographic = !!i5533[1]
  i5532.orthographicSize = i5533[2]
  i5532.backgroundColor = new pc.Color(i5533[3], i5533[4], i5533[5], i5533[6])
  i5532.nearClipPlane = i5533[7]
  i5532.farClipPlane = i5533[8]
  i5532.fieldOfView = i5533[9]
  i5532.depth = i5533[10]
  i5532.clearFlags = i5533[11]
  i5532.cullingMask = i5533[12]
  i5532.rect = i5533[13]
  request.r(i5533[14], i5533[15], 0, i5532, 'targetTexture')
  i5532.usePhysicalProperties = !!i5533[16]
  i5532.focalLength = i5533[17]
  i5532.sensorSize = new pc.Vec2( i5533[18], i5533[19] )
  i5532.lensShift = new pc.Vec2( i5533[20], i5533[21] )
  i5532.gateFit = i5533[22]
  i5532.commandBufferCount = i5533[23]
  i5532.cameraType = i5533[24]
  i5532.enabled = !!i5533[25]
  return i5532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5535 = data
  i5534.name = i5535[0]
  i5534.tagId = i5535[1]
  i5534.enabled = !!i5535[2]
  i5534.isStatic = !!i5535[3]
  i5534.layer = i5535[4]
  return i5534
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5536 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5537 = data
  request.r(i5537[0], i5537[1], 0, i5536, 'm_FirstSelected')
  i5536.m_sendNavigationEvents = !!i5537[2]
  i5536.m_DragThreshold = i5537[3]
  return i5536
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5538 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5539 = data
  i5538.m_HorizontalAxis = i5539[0]
  i5538.m_VerticalAxis = i5539[1]
  i5538.m_SubmitButton = i5539[2]
  i5538.m_CancelButton = i5539[3]
  i5538.m_InputActionsPerSecond = i5539[4]
  i5538.m_RepeatDelay = i5539[5]
  i5538.m_ForceModuleActive = !!i5539[6]
  i5538.m_SendPointerHoverToParent = !!i5539[7]
  return i5538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5541 = data
  i5540.pivot = new pc.Vec2( i5541[0], i5541[1] )
  i5540.anchorMin = new pc.Vec2( i5541[2], i5541[3] )
  i5540.anchorMax = new pc.Vec2( i5541[4], i5541[5] )
  i5540.sizeDelta = new pc.Vec2( i5541[6], i5541[7] )
  i5540.anchoredPosition3D = new pc.Vec3( i5541[8], i5541[9], i5541[10] )
  i5540.rotation = new pc.Quat(i5541[11], i5541[12], i5541[13], i5541[14])
  i5540.scale = new pc.Vec3( i5541[15], i5541[16], i5541[17] )
  return i5540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5543 = data
  i5542.planeDistance = i5543[0]
  i5542.referencePixelsPerUnit = i5543[1]
  i5542.isFallbackOverlay = !!i5543[2]
  i5542.renderMode = i5543[3]
  i5542.renderOrder = i5543[4]
  i5542.sortingLayerName = i5543[5]
  i5542.sortingOrder = i5543[6]
  i5542.scaleFactor = i5543[7]
  request.r(i5543[8], i5543[9], 0, i5542, 'worldCamera')
  i5542.overrideSorting = !!i5543[10]
  i5542.pixelPerfect = !!i5543[11]
  i5542.targetDisplay = i5543[12]
  i5542.overridePixelPerfect = !!i5543[13]
  i5542.enabled = !!i5543[14]
  return i5542
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5544 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5545 = data
  i5544.m_UiScaleMode = i5545[0]
  i5544.m_ReferencePixelsPerUnit = i5545[1]
  i5544.m_ScaleFactor = i5545[2]
  i5544.m_ReferenceResolution = new pc.Vec2( i5545[3], i5545[4] )
  i5544.m_ScreenMatchMode = i5545[5]
  i5544.m_MatchWidthOrHeight = i5545[6]
  i5544.m_PhysicalUnit = i5545[7]
  i5544.m_FallbackScreenDPI = i5545[8]
  i5544.m_DefaultSpriteDPI = i5545[9]
  i5544.m_DynamicPixelsPerUnit = i5545[10]
  i5544.m_PresetInfoIsWorld = !!i5545[11]
  return i5544
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5546 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5547 = data
  i5546.m_IgnoreReversedGraphics = !!i5547[0]
  i5546.m_BlockingObjects = i5547[1]
  i5546.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5547[2] )
  return i5546
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i5548 = root || request.c( 'LunaManager' )
  var i5549 = data
  var i5551 = i5549[0]
  var i5550 = []
  for(var i = 0; i < i5551.length; i += 2) {
  request.r(i5551[i + 0], i5551[i + 1], 2, i5550, '')
  }
  i5548.lstBtnInstall = i5550
  request.r(i5549[1], i5549[2], 0, i5548, 'WinGO')
  request.r(i5549[3], i5549[4], 0, i5548, 'LoseGO')
  request.r(i5549[5], i5549[6], 0, i5548, 'StartCard')
  request.r(i5549[7], i5549[8], 0, i5548, 'EndCard')
  request.r(i5549[9], i5549[10], 0, i5548, 'Parent')
  i5548.isDrag = !!i5549[11]
  i5548.timeDrag = i5549[12]
  i5548.countPlay = i5549[13]
  i5548.countPlayFinal = i5549[14]
  i5548.countPlayMax = i5549[15]
  i5548.timeDropFinal = i5549[16]
  i5548.colorBG = new pc.Color(i5549[17], i5549[18], i5549[19], i5549[20])
  request.r(i5549[21], i5549[22], 0, i5548, 'texture2D')
  request.r(i5549[23], i5549[24], 0, i5548, 'rawImageBG')
  request.r(i5549[25], i5549[26], 0, i5548, 'MSSGirl')
  request.r(i5549[27], i5549[28], 0, i5548, 'MSSBoy')
  request.r(i5549[29], i5549[30], 0, i5548, 'MSSGroom')
  request.r(i5549[31], i5549[32], 0, i5548, 'MSSBride')
  request.r(i5549[33], i5549[34], 0, i5548, 'textProgess')
  request.r(i5549[35], i5549[36], 0, i5548, 'imgProgess')
  request.r(i5549[37], i5549[38], 0, i5548, 'timeText')
  return i5548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5555 = data
  i5554.cullTransparentMesh = !!i5555[0]
  return i5554
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i5556 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i5557 = data
  request.r(i5557[0], i5557[1], 0, i5556, 'm_Texture')
  i5556.m_UVRect = UnityEngine.Rect.MinMaxRect(i5557[2], i5557[3], i5557[4], i5557[5])
  i5556.m_Maskable = !!i5557[6]
  request.r(i5557[7], i5557[8], 0, i5556, 'm_Material')
  i5556.m_Color = new pc.Color(i5557[9], i5557[10], i5557[11], i5557[12])
  i5556.m_RaycastTarget = !!i5557[13]
  i5556.m_RaycastPadding = new pc.Vec4( i5557[14], i5557[15], i5557[16], i5557[17] )
  return i5556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5559 = data
  request.r(i5559[0], i5559[1], 0, i5558, 'clip')
  request.r(i5559[2], i5559[3], 0, i5558, 'outputAudioMixerGroup')
  i5558.playOnAwake = !!i5559[4]
  i5558.loop = !!i5559[5]
  i5558.time = i5559[6]
  i5558.volume = i5559[7]
  i5558.pitch = i5559[8]
  i5558.enabled = !!i5559[9]
  return i5558
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5560 = root || request.c( 'UnityEngine.UI.Image' )
  var i5561 = data
  request.r(i5561[0], i5561[1], 0, i5560, 'm_Sprite')
  i5560.m_Type = i5561[2]
  i5560.m_PreserveAspect = !!i5561[3]
  i5560.m_FillCenter = !!i5561[4]
  i5560.m_FillMethod = i5561[5]
  i5560.m_FillAmount = i5561[6]
  i5560.m_FillClockwise = !!i5561[7]
  i5560.m_FillOrigin = i5561[8]
  i5560.m_UseSpriteMesh = !!i5561[9]
  i5560.m_PixelsPerUnitMultiplier = i5561[10]
  i5560.m_Maskable = !!i5561[11]
  request.r(i5561[12], i5561[13], 0, i5560, 'm_Material')
  i5560.m_Color = new pc.Color(i5561[14], i5561[15], i5561[16], i5561[17])
  i5560.m_RaycastTarget = !!i5561[18]
  i5560.m_RaycastPadding = new pc.Vec4( i5561[19], i5561[20], i5561[21], i5561[22] )
  return i5560
}

Deserializers["DropZone"] = function (request, data, root) {
  var i5562 = root || request.c( 'DropZone' )
  var i5563 = data
  i5562.idDrop = i5563[0]
  var i5565 = i5563[1]
  var i5564 = []
  for(var i = 0; i < i5565.length; i += 2) {
  request.r(i5565[i + 0], i5565[i + 1], 2, i5564, '')
  }
  i5562.steps = i5564
  request.r(i5563[2], i5563[3], 0, i5562, 'stepLose')
  return i5562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i5568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i5569 = data
  i5568.usedByComposite = !!i5569[0]
  i5568.autoTiling = !!i5569[1]
  var i5571 = i5569[2]
  var i5570 = []
  for(var i = 0; i < i5571.length; i += 1) {
  var i5573 = i5571[i + 0]
  var i5572 = []
  for(var i = 0; i < i5573.length; i += 2) {
    i5572.push( new pc.Vec2( i5573[i + 0], i5573[i + 1] ) );
  }
    i5570.push( i5572 );
  }
  i5568.points = i5570
  i5568.enabled = !!i5569[3]
  i5568.isTrigger = !!i5569[4]
  i5568.usedByEffector = !!i5569[5]
  i5568.density = i5569[6]
  i5568.offset = new pc.Vec2( i5569[7], i5569[8] )
  request.r(i5569[9], i5569[10], 0, i5568, 'material')
  return i5568
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i5580 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i5581 = data
  request.r(i5581[0], i5581[1], 0, i5580, 'skeletonDataAsset')
  request.r(i5581[2], i5581[3], 0, i5580, 'additiveMaterial')
  request.r(i5581[4], i5581[5], 0, i5580, 'multiplyMaterial')
  request.r(i5581[6], i5581[7], 0, i5580, 'screenMaterial')
  i5580.initialSkinName = i5581[8]
  i5580.initialFlipX = !!i5581[9]
  i5580.initialFlipY = !!i5581[10]
  i5580.startingAnimation = i5581[11]
  i5580.startingLoop = !!i5581[12]
  i5580.timeScale = i5581[13]
  i5580.freeze = !!i5581[14]
  i5580.layoutScaleMode = i5581[15]
  i5580.updateWhenInvisible = i5581[16]
  i5580.allowMultipleCanvasRenderers = !!i5581[17]
  var i5583 = i5581[18]
  var i5582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i5583.length; i += 2) {
  request.r(i5583[i + 0], i5583[i + 1], 1, i5582, '')
  }
  i5580.canvasRenderers = i5582
  i5580.enableSeparatorSlots = !!i5581[19]
  i5580.updateSeparatorPartLocation = !!i5581[20]
  i5580.updateSeparatorPartScale = !!i5581[21]
  i5580.disableMeshAssignmentOnOverride = !!i5581[22]
  i5580.referenceSize = new pc.Vec2( i5581[23], i5581[24] )
  i5580.referenceScale = i5581[25]
  i5580.rectTransformSize = new pc.Vec2( i5581[26], i5581[27] )
  i5580.editReferenceRect = !!i5581[28]
  var i5585 = i5581[29]
  var i5584 = []
  for(var i = 0; i < i5585.length; i += 1) {
    i5584.push( i5585[i + 0] );
  }
  i5580.separatorSlotNames = i5584
  var i5587 = i5581[30]
  var i5586 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5587.length; i += 2) {
  request.r(i5587[i + 0], i5587[i + 1], 1, i5586, '')
  }
  i5580.separatorParts = i5586
  i5580.meshGenerator = request.d('Spine.Unity.MeshGenerator', i5581[31], i5580.meshGenerator)
  i5580.updateTiming = i5581[32]
  i5580.unscaledTime = !!i5581[33]
  i5580.m_Maskable = !!i5581[34]
  request.r(i5581[35], i5581[36], 0, i5580, 'm_Material')
  i5580.m_Color = new pc.Color(i5581[37], i5581[38], i5581[39], i5581[40])
  i5580.m_RaycastTarget = !!i5581[41]
  i5580.m_RaycastPadding = new pc.Vec4( i5581[42], i5581[43], i5581[44], i5581[45] )
  return i5580
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i5594 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i5595 = data
  i5594.settings = request.d('Spine.Unity.MeshGenerator+Settings', i5595[0], i5594.settings)
  return i5594
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i5596 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i5597 = data
  i5596.useClipping = !!i5597[0]
  i5596.zSpacing = i5597[1]
  i5596.pmaVertexColors = !!i5597[2]
  i5596.tintBlack = !!i5597[3]
  i5596.canvasGroupTintBlack = !!i5597[4]
  i5596.calculateTangents = !!i5597[5]
  i5596.addNormals = !!i5597[6]
  i5596.immutableTriangles = !!i5597[7]
  return i5596
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i5598 = root || request.c( 'MixSkeletonSkin' )
  var i5599 = data
  request.r(i5599[0], i5599[1], 0, i5598, 'skeletonAnimation')
  var i5601 = i5599[2]
  var i5600 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i5601.length; i += 1) {
    i5600.add(i5601[i + 0]);
  }
  i5598.skinNames = i5600
  i5598.defaultAnim = i5599[3]
  return i5598
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i5604 = root || request.c( 'DraggableItem' )
  var i5605 = data
  i5604.idDrag = i5605[0]
  i5604.isProcess = !!i5605[1]
  i5604.isLose = !!i5605[2]
  i5604.isHide = !!i5605[3]
  return i5604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i5606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i5607 = data
  i5606.m_Alpha = i5607[0]
  i5606.m_Interactable = !!i5607[1]
  i5606.m_BlocksRaycasts = !!i5607[2]
  i5606.m_IgnoreParentGroups = !!i5607[3]
  i5606.enabled = !!i5607[4]
  return i5606
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i5608 = root || request.c( 'ClickItem' )
  var i5609 = data
  var i5611 = i5609[0]
  var i5610 = []
  for(var i = 0; i < i5611.length; i += 2) {
  request.r(i5611[i + 0], i5611[i + 1], 2, i5610, '')
  }
  i5608.steps = i5610
  i5608.currentStep = i5609[1]
  i5608.isProcess = !!i5609[2]
  return i5608
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5612 = root || request.c( 'UnityEngine.UI.Button' )
  var i5613 = data
  i5612.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5613[0], i5612.m_OnClick)
  i5612.m_Navigation = request.d('UnityEngine.UI.Navigation', i5613[1], i5612.m_Navigation)
  i5612.m_Transition = i5613[2]
  i5612.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5613[3], i5612.m_Colors)
  i5612.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5613[4], i5612.m_SpriteState)
  i5612.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5613[5], i5612.m_AnimationTriggers)
  i5612.m_Interactable = !!i5613[6]
  request.r(i5613[7], i5613[8], 0, i5612, 'm_TargetGraphic')
  return i5612
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5614 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5615 = data
  i5614.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5615[0], i5614.m_PersistentCalls)
  return i5614
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5616 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5617 = data
  var i5619 = i5617[0]
  var i5618 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5619.length; i += 1) {
    i5618.add(request.d('UnityEngine.Events.PersistentCall', i5619[i + 0]));
  }
  i5616.m_Calls = i5618
  return i5616
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5622 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5623 = data
  request.r(i5623[0], i5623[1], 0, i5622, 'm_Target')
  i5622.m_TargetAssemblyTypeName = i5623[2]
  i5622.m_MethodName = i5623[3]
  i5622.m_Mode = i5623[4]
  i5622.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5623[5], i5622.m_Arguments)
  i5622.m_CallState = i5623[6]
  return i5622
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5624 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5625 = data
  i5624.m_Mode = i5625[0]
  i5624.m_WrapAround = !!i5625[1]
  request.r(i5625[2], i5625[3], 0, i5624, 'm_SelectOnUp')
  request.r(i5625[4], i5625[5], 0, i5624, 'm_SelectOnDown')
  request.r(i5625[6], i5625[7], 0, i5624, 'm_SelectOnLeft')
  request.r(i5625[8], i5625[9], 0, i5624, 'm_SelectOnRight')
  return i5624
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5626 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5627 = data
  i5626.m_NormalColor = new pc.Color(i5627[0], i5627[1], i5627[2], i5627[3])
  i5626.m_HighlightedColor = new pc.Color(i5627[4], i5627[5], i5627[6], i5627[7])
  i5626.m_PressedColor = new pc.Color(i5627[8], i5627[9], i5627[10], i5627[11])
  i5626.m_SelectedColor = new pc.Color(i5627[12], i5627[13], i5627[14], i5627[15])
  i5626.m_DisabledColor = new pc.Color(i5627[16], i5627[17], i5627[18], i5627[19])
  i5626.m_ColorMultiplier = i5627[20]
  i5626.m_FadeDuration = i5627[21]
  return i5626
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5628 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5629 = data
  request.r(i5629[0], i5629[1], 0, i5628, 'm_HighlightedSprite')
  request.r(i5629[2], i5629[3], 0, i5628, 'm_PressedSprite')
  request.r(i5629[4], i5629[5], 0, i5628, 'm_SelectedSprite')
  request.r(i5629[6], i5629[7], 0, i5628, 'm_DisabledSprite')
  return i5628
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5630 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5631 = data
  i5630.m_NormalTrigger = i5631[0]
  i5630.m_HighlightedTrigger = i5631[1]
  i5630.m_PressedTrigger = i5631[2]
  i5630.m_SelectedTrigger = i5631[3]
  i5630.m_DisabledTrigger = i5631[4]
  return i5630
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i5632 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i5633 = data
  i5632.targetIsSelf = !!i5633[0]
  request.r(i5633[1], i5633[2], 0, i5632, 'targetGO')
  i5632.tweenTargetIsTargetGO = !!i5633[3]
  i5632.delay = i5633[4]
  i5632.duration = i5633[5]
  i5632.easeType = i5633[6]
  i5632.easeCurve = new pc.AnimationCurve( { keys_flow: i5633[7] } )
  i5632.loopType = i5633[8]
  i5632.loops = i5633[9]
  i5632.id = i5633[10]
  i5632.isRelative = !!i5633[11]
  i5632.isFrom = !!i5633[12]
  i5632.isIndependentUpdate = !!i5633[13]
  i5632.autoKill = !!i5633[14]
  i5632.autoGenerate = !!i5633[15]
  i5632.isActive = !!i5633[16]
  i5632.isValid = !!i5633[17]
  request.r(i5633[18], i5633[19], 0, i5632, 'target')
  i5632.animationType = i5633[20]
  i5632.targetType = i5633[21]
  i5632.forcedTargetType = i5633[22]
  i5632.autoPlay = !!i5633[23]
  i5632.useTargetAsV3 = !!i5633[24]
  i5632.endValueFloat = i5633[25]
  i5632.endValueV3 = new pc.Vec3( i5633[26], i5633[27], i5633[28] )
  i5632.endValueV2 = new pc.Vec2( i5633[29], i5633[30] )
  i5632.endValueColor = new pc.Color(i5633[31], i5633[32], i5633[33], i5633[34])
  i5632.endValueString = i5633[35]
  i5632.endValueRect = UnityEngine.Rect.MinMaxRect(i5633[36], i5633[37], i5633[38], i5633[39])
  request.r(i5633[40], i5633[41], 0, i5632, 'endValueTransform')
  i5632.optionalBool0 = !!i5633[42]
  i5632.optionalBool1 = !!i5633[43]
  i5632.optionalFloat0 = i5633[44]
  i5632.optionalInt0 = i5633[45]
  i5632.optionalRotationMode = i5633[46]
  i5632.optionalScrambleMode = i5633[47]
  i5632.optionalShakeRandomnessMode = i5633[48]
  i5632.optionalString = i5633[49]
  i5632.updateType = i5633[50]
  i5632.isSpeedBased = !!i5633[51]
  i5632.hasOnStart = !!i5633[52]
  i5632.hasOnPlay = !!i5633[53]
  i5632.hasOnUpdate = !!i5633[54]
  i5632.hasOnStepComplete = !!i5633[55]
  i5632.hasOnComplete = !!i5633[56]
  i5632.hasOnTweenCreated = !!i5633[57]
  i5632.hasOnRewind = !!i5633[58]
  i5632.onStart = request.d('UnityEngine.Events.UnityEvent', i5633[59], i5632.onStart)
  i5632.onPlay = request.d('UnityEngine.Events.UnityEvent', i5633[60], i5632.onPlay)
  i5632.onUpdate = request.d('UnityEngine.Events.UnityEvent', i5633[61], i5632.onUpdate)
  i5632.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i5633[62], i5632.onStepComplete)
  i5632.onComplete = request.d('UnityEngine.Events.UnityEvent', i5633[63], i5632.onComplete)
  i5632.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i5633[64], i5632.onTweenCreated)
  i5632.onRewind = request.d('UnityEngine.Events.UnityEvent', i5633[65], i5632.onRewind)
  return i5632
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i5634 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i5635 = data
  i5634.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5635[0], i5634.m_PersistentCalls)
  return i5634
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5636 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5637 = data
  request.r(i5637[0], i5637[1], 0, i5636, 'm_ObjectArgument')
  i5636.m_ObjectArgumentAssemblyTypeName = i5637[2]
  i5636.m_IntArgument = i5637[3]
  i5636.m_FloatArgument = i5637[4]
  i5636.m_StringArgument = i5637[5]
  i5636.m_BoolArgument = !!i5637[6]
  return i5636
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5638 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5639 = data
  i5638.m_hasFontAssetChanged = !!i5639[0]
  request.r(i5639[1], i5639[2], 0, i5638, 'm_baseMaterial')
  i5638.m_maskOffset = new pc.Vec4( i5639[3], i5639[4], i5639[5], i5639[6] )
  i5638.m_text = i5639[7]
  i5638.m_isRightToLeft = !!i5639[8]
  request.r(i5639[9], i5639[10], 0, i5638, 'm_fontAsset')
  request.r(i5639[11], i5639[12], 0, i5638, 'm_sharedMaterial')
  var i5641 = i5639[13]
  var i5640 = []
  for(var i = 0; i < i5641.length; i += 2) {
  request.r(i5641[i + 0], i5641[i + 1], 2, i5640, '')
  }
  i5638.m_fontSharedMaterials = i5640
  request.r(i5639[14], i5639[15], 0, i5638, 'm_fontMaterial')
  var i5643 = i5639[16]
  var i5642 = []
  for(var i = 0; i < i5643.length; i += 2) {
  request.r(i5643[i + 0], i5643[i + 1], 2, i5642, '')
  }
  i5638.m_fontMaterials = i5642
  i5638.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5639[17], i5639[18], i5639[19], i5639[20])
  i5638.m_fontColor = new pc.Color(i5639[21], i5639[22], i5639[23], i5639[24])
  i5638.m_enableVertexGradient = !!i5639[25]
  i5638.m_colorMode = i5639[26]
  i5638.m_fontColorGradient = request.d('TMPro.VertexGradient', i5639[27], i5638.m_fontColorGradient)
  request.r(i5639[28], i5639[29], 0, i5638, 'm_fontColorGradientPreset')
  request.r(i5639[30], i5639[31], 0, i5638, 'm_spriteAsset')
  i5638.m_tintAllSprites = !!i5639[32]
  request.r(i5639[33], i5639[34], 0, i5638, 'm_StyleSheet')
  i5638.m_TextStyleHashCode = i5639[35]
  i5638.m_overrideHtmlColors = !!i5639[36]
  i5638.m_faceColor = UnityEngine.Color32.ConstructColor(i5639[37], i5639[38], i5639[39], i5639[40])
  i5638.m_fontSize = i5639[41]
  i5638.m_fontSizeBase = i5639[42]
  i5638.m_fontWeight = i5639[43]
  i5638.m_enableAutoSizing = !!i5639[44]
  i5638.m_fontSizeMin = i5639[45]
  i5638.m_fontSizeMax = i5639[46]
  i5638.m_fontStyle = i5639[47]
  i5638.m_HorizontalAlignment = i5639[48]
  i5638.m_VerticalAlignment = i5639[49]
  i5638.m_textAlignment = i5639[50]
  i5638.m_characterSpacing = i5639[51]
  i5638.m_wordSpacing = i5639[52]
  i5638.m_lineSpacing = i5639[53]
  i5638.m_lineSpacingMax = i5639[54]
  i5638.m_paragraphSpacing = i5639[55]
  i5638.m_charWidthMaxAdj = i5639[56]
  i5638.m_enableWordWrapping = !!i5639[57]
  i5638.m_wordWrappingRatios = i5639[58]
  i5638.m_overflowMode = i5639[59]
  request.r(i5639[60], i5639[61], 0, i5638, 'm_linkedTextComponent')
  request.r(i5639[62], i5639[63], 0, i5638, 'parentLinkedComponent')
  i5638.m_enableKerning = !!i5639[64]
  i5638.m_enableExtraPadding = !!i5639[65]
  i5638.checkPaddingRequired = !!i5639[66]
  i5638.m_isRichText = !!i5639[67]
  i5638.m_parseCtrlCharacters = !!i5639[68]
  i5638.m_isOrthographic = !!i5639[69]
  i5638.m_isCullingEnabled = !!i5639[70]
  i5638.m_horizontalMapping = i5639[71]
  i5638.m_verticalMapping = i5639[72]
  i5638.m_uvLineOffset = i5639[73]
  i5638.m_geometrySortingOrder = i5639[74]
  i5638.m_IsTextObjectScaleStatic = !!i5639[75]
  i5638.m_VertexBufferAutoSizeReduction = !!i5639[76]
  i5638.m_useMaxVisibleDescender = !!i5639[77]
  i5638.m_pageToDisplay = i5639[78]
  i5638.m_margin = new pc.Vec4( i5639[79], i5639[80], i5639[81], i5639[82] )
  i5638.m_isUsingLegacyAnimationComponent = !!i5639[83]
  i5638.m_isVolumetricText = !!i5639[84]
  i5638.m_Maskable = !!i5639[85]
  request.r(i5639[86], i5639[87], 0, i5638, 'm_Material')
  i5638.m_Color = new pc.Color(i5639[88], i5639[89], i5639[90], i5639[91])
  i5638.m_RaycastTarget = !!i5639[92]
  i5638.m_RaycastPadding = new pc.Vec4( i5639[93], i5639[94], i5639[95], i5639[96] )
  return i5638
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5646 = root || request.c( 'TMPro.VertexGradient' )
  var i5647 = data
  i5646.topLeft = new pc.Color(i5647[0], i5647[1], i5647[2], i5647[3])
  i5646.topRight = new pc.Color(i5647[4], i5647[5], i5647[6], i5647[7])
  i5646.bottomLeft = new pc.Color(i5647[8], i5647[9], i5647[10], i5647[11])
  i5646.bottomRight = new pc.Color(i5647[12], i5647[13], i5647[14], i5647[15])
  return i5646
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i5648 = root || request.c( 'UnityEngine.UI.Mask' )
  var i5649 = data
  i5648.m_ShowMaskGraphic = !!i5649[0]
  return i5648
}

Deserializers["AudioController"] = function (request, data, root) {
  var i5650 = root || request.c( 'AudioController' )
  var i5651 = data
  request.r(i5651[0], i5651[1], 0, i5650, 'bgmSource')
  request.r(i5651[2], i5651[3], 0, i5650, 'sfxSource')
  var i5653 = i5651[4]
  var i5652 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i5653.length; i += 1) {
    i5652.add(request.d('AudioEntry', i5653[i + 0]));
  }
  i5650.audioEntries = i5652
  return i5650
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i5656 = root || request.c( 'AudioEntry' )
  var i5657 = data
  i5656.key = i5657[0]
  request.r(i5657[1], i5657[2], 0, i5656, 'clip')
  i5656.volume = i5657[3]
  return i5656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5659 = data
  i5658.ambientIntensity = i5659[0]
  i5658.reflectionIntensity = i5659[1]
  i5658.ambientMode = i5659[2]
  i5658.ambientLight = new pc.Color(i5659[3], i5659[4], i5659[5], i5659[6])
  i5658.ambientSkyColor = new pc.Color(i5659[7], i5659[8], i5659[9], i5659[10])
  i5658.ambientGroundColor = new pc.Color(i5659[11], i5659[12], i5659[13], i5659[14])
  i5658.ambientEquatorColor = new pc.Color(i5659[15], i5659[16], i5659[17], i5659[18])
  i5658.fogColor = new pc.Color(i5659[19], i5659[20], i5659[21], i5659[22])
  i5658.fogEndDistance = i5659[23]
  i5658.fogStartDistance = i5659[24]
  i5658.fogDensity = i5659[25]
  i5658.fog = !!i5659[26]
  request.r(i5659[27], i5659[28], 0, i5658, 'skybox')
  i5658.fogMode = i5659[29]
  var i5661 = i5659[30]
  var i5660 = []
  for(var i = 0; i < i5661.length; i += 1) {
    i5660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5661[i + 0]) );
  }
  i5658.lightmaps = i5660
  i5658.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5659[31], i5658.lightProbes)
  i5658.lightmapsMode = i5659[32]
  i5658.mixedBakeMode = i5659[33]
  i5658.environmentLightingMode = i5659[34]
  i5658.ambientProbe = new pc.SphericalHarmonicsL2(i5659[35])
  i5658.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5659[36])
  i5658.useReferenceAmbientProbe = !!i5659[37]
  request.r(i5659[38], i5659[39], 0, i5658, 'customReflection')
  request.r(i5659[40], i5659[41], 0, i5658, 'defaultReflection')
  i5658.defaultReflectionMode = i5659[42]
  i5658.defaultReflectionResolution = i5659[43]
  i5658.sunLightObjectId = i5659[44]
  i5658.pixelLightCount = i5659[45]
  i5658.defaultReflectionHDR = !!i5659[46]
  i5658.hasLightDataAsset = !!i5659[47]
  i5658.hasManualGenerate = !!i5659[48]
  return i5658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5665 = data
  request.r(i5665[0], i5665[1], 0, i5664, 'lightmapColor')
  request.r(i5665[2], i5665[3], 0, i5664, 'lightmapDirection')
  return i5664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5666 = root || new UnityEngine.LightProbes()
  var i5667 = data
  return i5666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5675 = data
  var i5677 = i5675[0]
  var i5676 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5677.length; i += 1) {
    i5676.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5677[i + 0]));
  }
  i5674.ShaderCompilationErrors = i5676
  i5674.name = i5675[1]
  i5674.guid = i5675[2]
  var i5679 = i5675[3]
  var i5678 = []
  for(var i = 0; i < i5679.length; i += 1) {
    i5678.push( i5679[i + 0] );
  }
  i5674.shaderDefinedKeywords = i5678
  var i5681 = i5675[4]
  var i5680 = []
  for(var i = 0; i < i5681.length; i += 1) {
    i5680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5681[i + 0]) );
  }
  i5674.passes = i5680
  var i5683 = i5675[5]
  var i5682 = []
  for(var i = 0; i < i5683.length; i += 1) {
    i5682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5683[i + 0]) );
  }
  i5674.usePasses = i5682
  var i5685 = i5675[6]
  var i5684 = []
  for(var i = 0; i < i5685.length; i += 1) {
    i5684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5685[i + 0]) );
  }
  i5674.defaultParameterValues = i5684
  request.r(i5675[7], i5675[8], 0, i5674, 'unityFallbackShader')
  i5674.readDepth = !!i5675[9]
  i5674.isCreatedByShaderGraph = !!i5675[10]
  i5674.disableBatching = !!i5675[11]
  i5674.compiled = !!i5675[12]
  return i5674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5689 = data
  i5688.shaderName = i5689[0]
  i5688.errorMessage = i5689[1]
  return i5688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5692 = root || new pc.UnityShaderPass()
  var i5693 = data
  i5692.id = i5693[0]
  i5692.subShaderIndex = i5693[1]
  i5692.name = i5693[2]
  i5692.passType = i5693[3]
  i5692.grabPassTextureName = i5693[4]
  i5692.usePass = !!i5693[5]
  i5692.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5693[6], i5692.zTest)
  i5692.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5693[7], i5692.zWrite)
  i5692.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5693[8], i5692.culling)
  i5692.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5693[9], i5692.blending)
  i5692.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5693[10], i5692.alphaBlending)
  i5692.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5693[11], i5692.colorWriteMask)
  i5692.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5693[12], i5692.offsetUnits)
  i5692.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5693[13], i5692.offsetFactor)
  i5692.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5693[14], i5692.stencilRef)
  i5692.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5693[15], i5692.stencilReadMask)
  i5692.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5693[16], i5692.stencilWriteMask)
  i5692.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5693[17], i5692.stencilOp)
  i5692.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5693[18], i5692.stencilOpFront)
  i5692.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5693[19], i5692.stencilOpBack)
  var i5695 = i5693[20]
  var i5694 = []
  for(var i = 0; i < i5695.length; i += 1) {
    i5694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5695[i + 0]) );
  }
  i5692.tags = i5694
  var i5697 = i5693[21]
  var i5696 = []
  for(var i = 0; i < i5697.length; i += 1) {
    i5696.push( i5697[i + 0] );
  }
  i5692.passDefinedKeywords = i5696
  var i5699 = i5693[22]
  var i5698 = []
  for(var i = 0; i < i5699.length; i += 1) {
    i5698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5699[i + 0]) );
  }
  i5692.passDefinedKeywordGroups = i5698
  var i5701 = i5693[23]
  var i5700 = []
  for(var i = 0; i < i5701.length; i += 1) {
    i5700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5701[i + 0]) );
  }
  i5692.variants = i5700
  var i5703 = i5693[24]
  var i5702 = []
  for(var i = 0; i < i5703.length; i += 1) {
    i5702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5703[i + 0]) );
  }
  i5692.excludedVariants = i5702
  i5692.hasDepthReader = !!i5693[25]
  return i5692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5705 = data
  i5704.val = i5705[0]
  i5704.name = i5705[1]
  return i5704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5707 = data
  i5706.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5707[0], i5706.src)
  i5706.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5707[1], i5706.dst)
  i5706.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5707[2], i5706.op)
  return i5706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5709 = data
  i5708.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5709[0], i5708.pass)
  i5708.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5709[1], i5708.fail)
  i5708.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5709[2], i5708.zFail)
  i5708.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5709[3], i5708.comp)
  return i5708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5713 = data
  i5712.name = i5713[0]
  i5712.value = i5713[1]
  return i5712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5717 = data
  var i5719 = i5717[0]
  var i5718 = []
  for(var i = 0; i < i5719.length; i += 1) {
    i5718.push( i5719[i + 0] );
  }
  i5716.keywords = i5718
  i5716.hasDiscard = !!i5717[1]
  return i5716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5723 = data
  i5722.passId = i5723[0]
  i5722.subShaderIndex = i5723[1]
  var i5725 = i5723[2]
  var i5724 = []
  for(var i = 0; i < i5725.length; i += 1) {
    i5724.push( i5725[i + 0] );
  }
  i5722.keywords = i5724
  i5722.vertexProgram = i5723[3]
  i5722.fragmentProgram = i5723[4]
  i5722.exportedForWebGl2 = !!i5723[5]
  i5722.readDepth = !!i5723[6]
  return i5722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5729 = data
  request.r(i5729[0], i5729[1], 0, i5728, 'shader')
  i5728.pass = i5729[2]
  return i5728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5733 = data
  i5732.name = i5733[0]
  i5732.type = i5733[1]
  i5732.value = new pc.Vec4( i5733[2], i5733[3], i5733[4], i5733[5] )
  i5732.textureValue = i5733[6]
  i5732.shaderPropertyFlag = i5733[7]
  return i5732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5735 = data
  i5734.name = i5735[0]
  request.r(i5735[1], i5735[2], 0, i5734, 'texture')
  i5734.aabb = i5735[3]
  i5734.vertices = i5735[4]
  i5734.triangles = i5735[5]
  i5734.textureRect = UnityEngine.Rect.MinMaxRect(i5735[6], i5735[7], i5735[8], i5735[9])
  i5734.packedRect = UnityEngine.Rect.MinMaxRect(i5735[10], i5735[11], i5735[12], i5735[13])
  i5734.border = new pc.Vec4( i5735[14], i5735[15], i5735[16], i5735[17] )
  i5734.transparency = i5735[18]
  i5734.bounds = i5735[19]
  i5734.pixelsPerUnit = i5735[20]
  i5734.textureWidth = i5735[21]
  i5734.textureHeight = i5735[22]
  i5734.nativeSize = new pc.Vec2( i5735[23], i5735[24] )
  i5734.pivot = new pc.Vec2( i5735[25], i5735[26] )
  i5734.textureRectOffset = new pc.Vec2( i5735[27], i5735[28] )
  return i5734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5737 = data
  i5736.name = i5737[0]
  return i5736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5739 = data
  i5738.name = i5739[0]
  i5738.ascent = i5739[1]
  i5738.originalLineHeight = i5739[2]
  i5738.fontSize = i5739[3]
  var i5741 = i5739[4]
  var i5740 = []
  for(var i = 0; i < i5741.length; i += 1) {
    i5740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5741[i + 0]) );
  }
  i5738.characterInfo = i5740
  request.r(i5739[5], i5739[6], 0, i5738, 'texture')
  i5738.originalFontSize = i5739[7]
  return i5738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5745 = data
  i5744.index = i5745[0]
  i5744.advance = i5745[1]
  i5744.bearing = i5745[2]
  i5744.glyphWidth = i5745[3]
  i5744.glyphHeight = i5745[4]
  i5744.minX = i5745[5]
  i5744.maxX = i5745[6]
  i5744.minY = i5745[7]
  i5744.maxY = i5745[8]
  i5744.uvBottomLeftX = i5745[9]
  i5744.uvBottomLeftY = i5745[10]
  i5744.uvBottomRightX = i5745[11]
  i5744.uvBottomRightY = i5745[12]
  i5744.uvTopLeftX = i5745[13]
  i5744.uvTopLeftY = i5745[14]
  i5744.uvTopRightX = i5745[15]
  i5744.uvTopRightY = i5745[16]
  return i5744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5747 = data
  i5746.name = i5747[0]
  i5746.bytes64 = i5747[1]
  i5746.data = i5747[2]
  return i5746
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i5748 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i5749 = data
  var i5751 = i5749[0]
  var i5750 = []
  for(var i = 0; i < i5751.length; i += 2) {
  request.r(i5751[i + 0], i5751[i + 1], 2, i5750, '')
  }
  i5748.atlasAssets = i5750
  i5748.scale = i5749[1]
  request.r(i5749[2], i5749[3], 0, i5748, 'skeletonJSON')
  i5748.isUpgradingBlendModeMaterials = !!i5749[4]
  i5748.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i5749[5], i5748.blendModeMaterials)
  var i5753 = i5749[6]
  var i5752 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i5753.length; i += 2) {
  request.r(i5753[i + 0], i5753[i + 1], 1, i5752, '')
  }
  i5748.skeletonDataModifiers = i5752
  var i5755 = i5749[7]
  var i5754 = []
  for(var i = 0; i < i5755.length; i += 1) {
    i5754.push( i5755[i + 0] );
  }
  i5748.fromAnimation = i5754
  var i5757 = i5749[8]
  var i5756 = []
  for(var i = 0; i < i5757.length; i += 1) {
    i5756.push( i5757[i + 0] );
  }
  i5748.toAnimation = i5756
  i5748.duration = i5749[9]
  i5748.defaultMix = i5749[10]
  request.r(i5749[11], i5749[12], 0, i5748, 'controller')
  return i5748
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i5760 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i5761 = data
  i5760.applyAdditiveMaterial = !!i5761[0]
  var i5763 = i5761[1]
  var i5762 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5763.length; i += 1) {
    i5762.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5763[i + 0]));
  }
  i5760.additiveMaterials = i5762
  var i5765 = i5761[2]
  var i5764 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5765.length; i += 1) {
    i5764.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5765[i + 0]));
  }
  i5760.multiplyMaterials = i5764
  var i5767 = i5761[3]
  var i5766 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5767.length; i += 1) {
    i5766.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5767[i + 0]));
  }
  i5760.screenMaterials = i5766
  i5760.requiresBlendModeMaterials = !!i5761[4]
  return i5760
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i5770 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i5771 = data
  i5770.pageName = i5771[0]
  request.r(i5771[1], i5771[2], 0, i5770, 'material')
  return i5770
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i5774 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i5775 = data
  request.r(i5775[0], i5775[1], 0, i5774, 'atlasFile')
  var i5777 = i5775[2]
  var i5776 = []
  for(var i = 0; i < i5777.length; i += 2) {
  request.r(i5777[i + 0], i5777[i + 1], 2, i5776, '')
  }
  i5774.materials = i5776
  i5774.textureLoadingMode = i5775[3]
  request.r(i5775[4], i5775[5], 0, i5774, 'onDemandTextureLoader')
  return i5774
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5778 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5779 = data
  request.r(i5779[0], i5779[1], 0, i5778, 'atlas')
  i5778.normalStyle = i5779[2]
  i5778.normalSpacingOffset = i5779[3]
  i5778.boldStyle = i5779[4]
  i5778.boldSpacing = i5779[5]
  i5778.italicStyle = i5779[6]
  i5778.tabSize = i5779[7]
  i5778.hashCode = i5779[8]
  request.r(i5779[9], i5779[10], 0, i5778, 'material')
  i5778.materialHashCode = i5779[11]
  i5778.m_Version = i5779[12]
  i5778.m_SourceFontFileGUID = i5779[13]
  request.r(i5779[14], i5779[15], 0, i5778, 'm_SourceFontFile_EditorRef')
  request.r(i5779[16], i5779[17], 0, i5778, 'm_SourceFontFile')
  i5778.m_AtlasPopulationMode = i5779[18]
  i5778.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5779[19], i5778.m_FaceInfo)
  var i5781 = i5779[20]
  var i5780 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5781.length; i += 1) {
    i5780.add(request.d('UnityEngine.TextCore.Glyph', i5781[i + 0]));
  }
  i5778.m_GlyphTable = i5780
  var i5783 = i5779[21]
  var i5782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5783.length; i += 1) {
    i5782.add(request.d('TMPro.TMP_Character', i5783[i + 0]));
  }
  i5778.m_CharacterTable = i5782
  var i5785 = i5779[22]
  var i5784 = []
  for(var i = 0; i < i5785.length; i += 2) {
  request.r(i5785[i + 0], i5785[i + 1], 2, i5784, '')
  }
  i5778.m_AtlasTextures = i5784
  i5778.m_AtlasTextureIndex = i5779[23]
  i5778.m_IsMultiAtlasTexturesEnabled = !!i5779[24]
  i5778.m_ClearDynamicDataOnBuild = !!i5779[25]
  var i5787 = i5779[26]
  var i5786 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5787.length; i += 1) {
    i5786.add(request.d('UnityEngine.TextCore.GlyphRect', i5787[i + 0]));
  }
  i5778.m_UsedGlyphRects = i5786
  var i5789 = i5779[27]
  var i5788 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5789.length; i += 1) {
    i5788.add(request.d('UnityEngine.TextCore.GlyphRect', i5789[i + 0]));
  }
  i5778.m_FreeGlyphRects = i5788
  i5778.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5779[28], i5778.m_fontInfo)
  i5778.m_AtlasWidth = i5779[29]
  i5778.m_AtlasHeight = i5779[30]
  i5778.m_AtlasPadding = i5779[31]
  i5778.m_AtlasRenderMode = i5779[32]
  var i5791 = i5779[33]
  var i5790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5791.length; i += 1) {
    i5790.add(request.d('TMPro.TMP_Glyph', i5791[i + 0]));
  }
  i5778.m_glyphInfoList = i5790
  i5778.m_KerningTable = request.d('TMPro.KerningTable', i5779[34], i5778.m_KerningTable)
  i5778.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5779[35], i5778.m_FontFeatureTable)
  var i5793 = i5779[36]
  var i5792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5793.length; i += 2) {
  request.r(i5793[i + 0], i5793[i + 1], 1, i5792, '')
  }
  i5778.fallbackFontAssets = i5792
  var i5795 = i5779[37]
  var i5794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5795.length; i += 2) {
  request.r(i5795[i + 0], i5795[i + 1], 1, i5794, '')
  }
  i5778.m_FallbackFontAssetTable = i5794
  i5778.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5779[38], i5778.m_CreationSettings)
  var i5797 = i5779[39]
  var i5796 = []
  for(var i = 0; i < i5797.length; i += 1) {
    i5796.push( request.d('TMPro.TMP_FontWeightPair', i5797[i + 0]) );
  }
  i5778.m_FontWeightTable = i5796
  var i5799 = i5779[40]
  var i5798 = []
  for(var i = 0; i < i5799.length; i += 1) {
    i5798.push( request.d('TMPro.TMP_FontWeightPair', i5799[i + 0]) );
  }
  i5778.fontWeights = i5798
  return i5778
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5800 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5801 = data
  i5800.m_FaceIndex = i5801[0]
  i5800.m_FamilyName = i5801[1]
  i5800.m_StyleName = i5801[2]
  i5800.m_PointSize = i5801[3]
  i5800.m_Scale = i5801[4]
  i5800.m_UnitsPerEM = i5801[5]
  i5800.m_LineHeight = i5801[6]
  i5800.m_AscentLine = i5801[7]
  i5800.m_CapLine = i5801[8]
  i5800.m_MeanLine = i5801[9]
  i5800.m_Baseline = i5801[10]
  i5800.m_DescentLine = i5801[11]
  i5800.m_SuperscriptOffset = i5801[12]
  i5800.m_SuperscriptSize = i5801[13]
  i5800.m_SubscriptOffset = i5801[14]
  i5800.m_SubscriptSize = i5801[15]
  i5800.m_UnderlineOffset = i5801[16]
  i5800.m_UnderlineThickness = i5801[17]
  i5800.m_StrikethroughOffset = i5801[18]
  i5800.m_StrikethroughThickness = i5801[19]
  i5800.m_TabWidth = i5801[20]
  return i5800
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5804 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5805 = data
  i5804.m_Index = i5805[0]
  i5804.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5805[1], i5804.m_Metrics)
  i5804.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5805[2], i5804.m_GlyphRect)
  i5804.m_Scale = i5805[3]
  i5804.m_AtlasIndex = i5805[4]
  i5804.m_ClassDefinitionType = i5805[5]
  return i5804
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5806 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5807 = data
  i5806.m_Width = i5807[0]
  i5806.m_Height = i5807[1]
  i5806.m_HorizontalBearingX = i5807[2]
  i5806.m_HorizontalBearingY = i5807[3]
  i5806.m_HorizontalAdvance = i5807[4]
  return i5806
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5808 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5809 = data
  i5808.m_X = i5809[0]
  i5808.m_Y = i5809[1]
  i5808.m_Width = i5809[2]
  i5808.m_Height = i5809[3]
  return i5808
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5812 = root || request.c( 'TMPro.TMP_Character' )
  var i5813 = data
  i5812.m_ElementType = i5813[0]
  i5812.m_Unicode = i5813[1]
  i5812.m_GlyphIndex = i5813[2]
  i5812.m_Scale = i5813[3]
  return i5812
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5818 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5819 = data
  i5818.Name = i5819[0]
  i5818.PointSize = i5819[1]
  i5818.Scale = i5819[2]
  i5818.CharacterCount = i5819[3]
  i5818.LineHeight = i5819[4]
  i5818.Baseline = i5819[5]
  i5818.Ascender = i5819[6]
  i5818.CapHeight = i5819[7]
  i5818.Descender = i5819[8]
  i5818.CenterLine = i5819[9]
  i5818.SuperscriptOffset = i5819[10]
  i5818.SubscriptOffset = i5819[11]
  i5818.SubSize = i5819[12]
  i5818.Underline = i5819[13]
  i5818.UnderlineThickness = i5819[14]
  i5818.strikethrough = i5819[15]
  i5818.strikethroughThickness = i5819[16]
  i5818.TabWidth = i5819[17]
  i5818.Padding = i5819[18]
  i5818.AtlasWidth = i5819[19]
  i5818.AtlasHeight = i5819[20]
  return i5818
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5822 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5823 = data
  i5822.id = i5823[0]
  i5822.x = i5823[1]
  i5822.y = i5823[2]
  i5822.width = i5823[3]
  i5822.height = i5823[4]
  i5822.xOffset = i5823[5]
  i5822.yOffset = i5823[6]
  i5822.xAdvance = i5823[7]
  i5822.scale = i5823[8]
  return i5822
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5824 = root || request.c( 'TMPro.KerningTable' )
  var i5825 = data
  var i5827 = i5825[0]
  var i5826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5827.length; i += 1) {
    i5826.add(request.d('TMPro.KerningPair', i5827[i + 0]));
  }
  i5824.kerningPairs = i5826
  return i5824
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5830 = root || request.c( 'TMPro.KerningPair' )
  var i5831 = data
  i5830.xOffset = i5831[0]
  i5830.m_FirstGlyph = i5831[1]
  i5830.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5831[2], i5830.m_FirstGlyphAdjustments)
  i5830.m_SecondGlyph = i5831[3]
  i5830.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5831[4], i5830.m_SecondGlyphAdjustments)
  i5830.m_IgnoreSpacingAdjustments = !!i5831[5]
  return i5830
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5832 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5833 = data
  var i5835 = i5833[0]
  var i5834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5835.length; i += 1) {
    i5834.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i5835[i + 0]));
  }
  i5832.m_GlyphPairAdjustmentRecords = i5834
  return i5832
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5838 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i5839 = data
  i5838.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5839[0], i5838.m_FirstAdjustmentRecord)
  i5838.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5839[1], i5838.m_SecondAdjustmentRecord)
  i5838.m_FeatureLookupFlags = i5839[2]
  return i5838
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5842 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5843 = data
  i5842.sourceFontFileName = i5843[0]
  i5842.sourceFontFileGUID = i5843[1]
  i5842.pointSizeSamplingMode = i5843[2]
  i5842.pointSize = i5843[3]
  i5842.padding = i5843[4]
  i5842.packingMode = i5843[5]
  i5842.atlasWidth = i5843[6]
  i5842.atlasHeight = i5843[7]
  i5842.characterSetSelectionMode = i5843[8]
  i5842.characterSequence = i5843[9]
  i5842.referencedFontAssetGUID = i5843[10]
  i5842.referencedTextAssetGUID = i5843[11]
  i5842.fontStyle = i5843[12]
  i5842.fontStyleModifier = i5843[13]
  i5842.renderMode = i5843[14]
  i5842.includeFontFeatures = !!i5843[15]
  return i5842
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5846 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5847 = data
  request.r(i5847[0], i5847[1], 0, i5846, 'regularTypeface')
  request.r(i5847[2], i5847[3], 0, i5846, 'italicTypeface')
  return i5846
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5848 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5849 = data
  i5848.useSafeMode = !!i5849[0]
  i5848.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5849[1], i5848.safeModeOptions)
  i5848.timeScale = i5849[2]
  i5848.unscaledTimeScale = i5849[3]
  i5848.useSmoothDeltaTime = !!i5849[4]
  i5848.maxSmoothUnscaledTime = i5849[5]
  i5848.rewindCallbackMode = i5849[6]
  i5848.showUnityEditorReport = !!i5849[7]
  i5848.logBehaviour = i5849[8]
  i5848.drawGizmos = !!i5849[9]
  i5848.defaultRecyclable = !!i5849[10]
  i5848.defaultAutoPlay = i5849[11]
  i5848.defaultUpdateType = i5849[12]
  i5848.defaultTimeScaleIndependent = !!i5849[13]
  i5848.defaultEaseType = i5849[14]
  i5848.defaultEaseOvershootOrAmplitude = i5849[15]
  i5848.defaultEasePeriod = i5849[16]
  i5848.defaultAutoKill = !!i5849[17]
  i5848.defaultLoopType = i5849[18]
  i5848.debugMode = !!i5849[19]
  i5848.debugStoreTargetId = !!i5849[20]
  i5848.showPreviewPanel = !!i5849[21]
  i5848.storeSettingsLocation = i5849[22]
  i5848.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5849[23], i5848.modules)
  i5848.createASMDEF = !!i5849[24]
  i5848.showPlayingTweens = !!i5849[25]
  i5848.showPausedTweens = !!i5849[26]
  return i5848
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5850 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5851 = data
  i5850.logBehaviour = i5851[0]
  i5850.nestedTweenFailureBehaviour = i5851[1]
  return i5850
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5852 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5853 = data
  i5852.showPanel = !!i5853[0]
  i5852.audioEnabled = !!i5853[1]
  i5852.physicsEnabled = !!i5853[2]
  i5852.physics2DEnabled = !!i5853[3]
  i5852.spriteEnabled = !!i5853[4]
  i5852.uiEnabled = !!i5853[5]
  i5852.textMeshProEnabled = !!i5853[6]
  i5852.tk2DEnabled = !!i5853[7]
  i5852.deAudioEnabled = !!i5853[8]
  i5852.deUnityExtendedEnabled = !!i5853[9]
  i5852.epoOutlineEnabled = !!i5853[10]
  return i5852
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5854 = root || request.c( 'TMPro.TMP_Settings' )
  var i5855 = data
  i5854.m_enableWordWrapping = !!i5855[0]
  i5854.m_enableKerning = !!i5855[1]
  i5854.m_enableExtraPadding = !!i5855[2]
  i5854.m_enableTintAllSprites = !!i5855[3]
  i5854.m_enableParseEscapeCharacters = !!i5855[4]
  i5854.m_EnableRaycastTarget = !!i5855[5]
  i5854.m_GetFontFeaturesAtRuntime = !!i5855[6]
  i5854.m_missingGlyphCharacter = i5855[7]
  i5854.m_warningsDisabled = !!i5855[8]
  request.r(i5855[9], i5855[10], 0, i5854, 'm_defaultFontAsset')
  i5854.m_defaultFontAssetPath = i5855[11]
  i5854.m_defaultFontSize = i5855[12]
  i5854.m_defaultAutoSizeMinRatio = i5855[13]
  i5854.m_defaultAutoSizeMaxRatio = i5855[14]
  i5854.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5855[15], i5855[16] )
  i5854.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5855[17], i5855[18] )
  i5854.m_autoSizeTextContainer = !!i5855[19]
  i5854.m_IsTextObjectScaleStatic = !!i5855[20]
  var i5857 = i5855[21]
  var i5856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5857.length; i += 2) {
  request.r(i5857[i + 0], i5857[i + 1], 1, i5856, '')
  }
  i5854.m_fallbackFontAssets = i5856
  i5854.m_matchMaterialPreset = !!i5855[22]
  request.r(i5855[23], i5855[24], 0, i5854, 'm_defaultSpriteAsset')
  i5854.m_defaultSpriteAssetPath = i5855[25]
  i5854.m_enableEmojiSupport = !!i5855[26]
  i5854.m_MissingCharacterSpriteUnicode = i5855[27]
  i5854.m_defaultColorGradientPresetsPath = i5855[28]
  request.r(i5855[29], i5855[30], 0, i5854, 'm_defaultStyleSheet')
  i5854.m_StyleSheetsResourcePath = i5855[31]
  request.r(i5855[32], i5855[33], 0, i5854, 'm_leadingCharacters')
  request.r(i5855[34], i5855[35], 0, i5854, 'm_followingCharacters')
  i5854.m_UseModernHangulLineBreakingRules = !!i5855[36]
  return i5854
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
  i5858.hashCode = i5859[4]
  request.r(i5859[5], i5859[6], 0, i5858, 'material')
  i5858.materialHashCode = i5859[7]
  i5858.m_Version = i5859[8]
  i5858.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5859[9], i5858.m_FaceInfo)
  var i5865 = i5859[10]
  var i5864 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5865.length; i += 1) {
    i5864.add(request.d('TMPro.TMP_SpriteCharacter', i5865[i + 0]));
  }
  i5858.m_SpriteCharacterTable = i5864
  var i5867 = i5859[11]
  var i5866 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5867.length; i += 1) {
    i5866.add(request.d('TMPro.TMP_SpriteGlyph', i5867[i + 0]));
  }
  i5858.m_SpriteGlyphTable = i5866
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
  i5876.m_HashCode = i5877[1]
  i5876.m_ElementType = i5877[2]
  i5876.m_Unicode = i5877[3]
  i5876.m_GlyphIndex = i5877[4]
  i5876.m_Scale = i5877[5]
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
  i5888.m_OpeningTagUnicodeArray = i5889[6]
  i5888.m_ClosingTagUnicodeArray = i5889[7]
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
  i5898.lightmapEncodingQuality = i5899[11]
  i5898.desiredColorSpace = i5899[12]
  var i5907 = i5899[13]
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

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5946 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5947 = data
  i5946.xPlacement = i5947[0]
  i5946.yPlacement = i5947[1]
  i5946.xAdvance = i5947[2]
  i5946.yAdvance = i5947[3]
  return i5946
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5948 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i5949 = data
  i5948.m_GlyphIndex = i5949[0]
  i5948.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i5949[1], i5948.m_GlyphValueRecord)
  return i5948
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i5950 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i5951 = data
  i5950.m_XPlacement = i5951[0]
  i5950.m_YPlacement = i5951[1]
  i5950.m_XAdvance = i5951[2]
  i5950.m_YAdvance = i5951[3]
  return i5950
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[3],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[3],"76":[77],"78":[79],"80":[79],"9":[8],"81":[82],"83":[84],"85":[82],"86":[8],"87":[8],"11":[9],"19":[20,8],"88":[8],"10":[9],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"34":[8],"96":[8],"16":[20,8],"97":[8],"98":[8],"99":[8],"100":[8],"101":[20,8],"102":[8],"103":[6],"104":[6],"7":[6],"105":[6],"106":[3],"107":[3],"108":[109],"110":[3],"111":[112],"113":[8],"114":[20,8],"115":[77],"26":[20,8],"116":[117,77],"118":[77],"119":[77,120],"121":[54],"122":[62],"123":[112],"124":[125],"126":[8],"127":[77,8],"18":[8,20],"128":[8],"129":[20,8],"130":[77],"131":[20,8],"132":[8],"133":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","MixSkeletonSkin","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","DropZone","UnityEngine.PolygonCollider2D","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DraggableItem","UnityEngine.CanvasGroup","ClickItem","DG.Tweening.DOTweenAnimation","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "259.4";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "TBAP_V13_NgocNDL_AnhPD";

Deserializers.lunaAppID = "33901";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1805";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4733";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Minecraft-Clone";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "6082205f-a875-4ccc-bc29-3e688705c0ae";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

