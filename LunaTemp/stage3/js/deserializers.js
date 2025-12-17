var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointSpring' )
  var i471 = data
  i470.spring = i471[0]
  i470.damper = i471[1]
  i470.targetPosition = i471[2]
  return i470
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointMotor' )
  var i473 = data
  i472.m_TargetVelocity = i473[0]
  i472.m_Force = i473[1]
  i472.m_FreeSpin = i473[2]
  return i472
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointLimits' )
  var i475 = data
  i474.m_Min = i475[0]
  i474.m_Max = i475[1]
  i474.m_Bounciness = i475[2]
  i474.m_BounceMinVelocity = i475[3]
  i474.m_ContactDistance = i475[4]
  i474.minBounce = i475[5]
  i474.maxBounce = i475[6]
  return i474
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointDrive' )
  var i477 = data
  i476.m_PositionSpring = i477[0]
  i476.m_PositionDamper = i477[1]
  i476.m_MaximumForce = i477[2]
  i476.m_UseAcceleration = i477[3]
  return i476
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i479 = data
  i478.m_Spring = i479[0]
  i478.m_Damper = i479[1]
  return i478
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i481 = data
  i480.m_Limit = i481[0]
  i480.m_Bounciness = i481[1]
  i480.m_ContactDistance = i481[2]
  return i480
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i483 = data
  i482.m_ExtremumSlip = i483[0]
  i482.m_ExtremumValue = i483[1]
  i482.m_AsymptoteSlip = i483[2]
  i482.m_AsymptoteValue = i483[3]
  i482.m_Stiffness = i483[4]
  return i482
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i485 = data
  i484.m_LowerAngle = i485[0]
  i484.m_UpperAngle = i485[1]
  return i484
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i487 = data
  i486.m_MotorSpeed = i487[0]
  i486.m_MaximumMotorTorque = i487[1]
  return i486
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i489 = data
  i488.m_DampingRatio = i489[0]
  i488.m_Frequency = i489[1]
  i488.m_Angle = i489[2]
  return i488
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i491 = data
  i490.m_LowerTranslation = i491[0]
  i490.m_UpperTranslation = i491[1]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i493 = data
  i492.name = i493[0]
  i492.width = i493[1]
  i492.height = i493[2]
  i492.mipmapCount = i493[3]
  i492.anisoLevel = i493[4]
  i492.filterMode = i493[5]
  i492.hdr = !!i493[6]
  i492.format = i493[7]
  i492.wrapMode = i493[8]
  i492.alphaIsTransparency = !!i493[9]
  i492.alphaSource = i493[10]
  i492.graphicsFormat = i493[11]
  i492.sRGBTexture = !!i493[12]
  i492.desiredColorSpace = i493[13]
  i492.wrapU = i493[14]
  i492.wrapV = i493[15]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i494 = root || new pc.UnityMaterial()
  var i495 = data
  i494.name = i495[0]
  request.r(i495[1], i495[2], 0, i494, 'shader')
  i494.renderQueue = i495[3]
  i494.enableInstancing = !!i495[4]
  var i497 = i495[5]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i497[i + 0]) );
  }
  i494.floatParameters = i496
  var i499 = i495[6]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i499[i + 0]) );
  }
  i494.colorParameters = i498
  var i501 = i495[7]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i501[i + 0]) );
  }
  i494.vectorParameters = i500
  var i503 = i495[8]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i503[i + 0]) );
  }
  i494.textureParameters = i502
  var i505 = i495[9]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i505[i + 0]) );
  }
  i494.materialFlags = i504
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i509 = data
  i508.name = i509[0]
  i508.value = i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i513 = data
  i512.name = i513[0]
  i512.value = new pc.Color(i513[1], i513[2], i513[3], i513[4])
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i517 = data
  i516.name = i517[0]
  i516.value = new pc.Vec4( i517[1], i517[2], i517[3], i517[4] )
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i521 = data
  i520.name = i521[0]
  request.r(i521[1], i521[2], 0, i520, 'value')
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i525 = data
  i524.name = i525[0]
  i524.enabled = !!i525[1]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i527 = data
  i526.name = i527[0]
  i526.index = i527[1]
  i526.startup = !!i527[2]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i529 = data
  i528.position = new pc.Vec3( i529[0], i529[1], i529[2] )
  i528.scale = new pc.Vec3( i529[3], i529[4], i529[5] )
  i528.rotation = new pc.Quat(i529[6], i529[7], i529[8], i529[9])
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i531 = data
  i530.aspect = i531[0]
  i530.orthographic = !!i531[1]
  i530.orthographicSize = i531[2]
  i530.backgroundColor = new pc.Color(i531[3], i531[4], i531[5], i531[6])
  i530.nearClipPlane = i531[7]
  i530.farClipPlane = i531[8]
  i530.fieldOfView = i531[9]
  i530.depth = i531[10]
  i530.clearFlags = i531[11]
  i530.cullingMask = i531[12]
  i530.rect = i531[13]
  request.r(i531[14], i531[15], 0, i530, 'targetTexture')
  i530.usePhysicalProperties = !!i531[16]
  i530.focalLength = i531[17]
  i530.sensorSize = new pc.Vec2( i531[18], i531[19] )
  i530.lensShift = new pc.Vec2( i531[20], i531[21] )
  i530.gateFit = i531[22]
  i530.commandBufferCount = i531[23]
  i530.cameraType = i531[24]
  i530.enabled = !!i531[25]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i533 = data
  i532.name = i533[0]
  i532.tagId = i533[1]
  i532.enabled = !!i533[2]
  i532.isStatic = !!i533[3]
  i532.layer = i533[4]
  return i532
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'm_FirstSelected')
  i534.m_sendNavigationEvents = !!i535[2]
  i534.m_DragThreshold = i535[3]
  return i534
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i537 = data
  i536.m_HorizontalAxis = i537[0]
  i536.m_VerticalAxis = i537[1]
  i536.m_SubmitButton = i537[2]
  i536.m_CancelButton = i537[3]
  i536.m_InputActionsPerSecond = i537[4]
  i536.m_RepeatDelay = i537[5]
  i536.m_ForceModuleActive = !!i537[6]
  i536.m_SendPointerHoverToParent = !!i537[7]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i539 = data
  i538.pivot = new pc.Vec2( i539[0], i539[1] )
  i538.anchorMin = new pc.Vec2( i539[2], i539[3] )
  i538.anchorMax = new pc.Vec2( i539[4], i539[5] )
  i538.sizeDelta = new pc.Vec2( i539[6], i539[7] )
  i538.anchoredPosition3D = new pc.Vec3( i539[8], i539[9], i539[10] )
  i538.rotation = new pc.Quat(i539[11], i539[12], i539[13], i539[14])
  i538.scale = new pc.Vec3( i539[15], i539[16], i539[17] )
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i541 = data
  i540.planeDistance = i541[0]
  i540.referencePixelsPerUnit = i541[1]
  i540.isFallbackOverlay = !!i541[2]
  i540.renderMode = i541[3]
  i540.renderOrder = i541[4]
  i540.sortingLayerName = i541[5]
  i540.sortingOrder = i541[6]
  i540.scaleFactor = i541[7]
  request.r(i541[8], i541[9], 0, i540, 'worldCamera')
  i540.overrideSorting = !!i541[10]
  i540.pixelPerfect = !!i541[11]
  i540.targetDisplay = i541[12]
  i540.overridePixelPerfect = !!i541[13]
  i540.enabled = !!i541[14]
  return i540
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i543 = data
  i542.m_UiScaleMode = i543[0]
  i542.m_ReferencePixelsPerUnit = i543[1]
  i542.m_ScaleFactor = i543[2]
  i542.m_ReferenceResolution = new pc.Vec2( i543[3], i543[4] )
  i542.m_ScreenMatchMode = i543[5]
  i542.m_MatchWidthOrHeight = i543[6]
  i542.m_PhysicalUnit = i543[7]
  i542.m_FallbackScreenDPI = i543[8]
  i542.m_DefaultSpriteDPI = i543[9]
  i542.m_DynamicPixelsPerUnit = i543[10]
  i542.m_PresetInfoIsWorld = !!i543[11]
  return i542
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i545 = data
  i544.m_IgnoreReversedGraphics = !!i545[0]
  i544.m_BlockingObjects = i545[1]
  i544.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i545[2] )
  return i544
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i546 = root || request.c( 'LunaManager' )
  var i547 = data
  var i549 = i547[0]
  var i548 = []
  for(var i = 0; i < i549.length; i += 2) {
  request.r(i549[i + 0], i549[i + 1], 2, i548, '')
  }
  i546.lstBtnInstall = i548
  request.r(i547[1], i547[2], 0, i546, 'StartCard')
  request.r(i547[3], i547[4], 0, i546, 'EndCard')
  i546.countPlay = i547[5]
  i546.countPlayFinal = i547[6]
  i546.countPlayMax = i547[7]
  i546.timeDropFinal = i547[8]
  i546.colorBG = new pc.Color(i547[9], i547[10], i547[11], i547[12])
  request.r(i547[13], i547[14], 0, i546, 'texture2D')
  request.r(i547[15], i547[16], 0, i546, 'rawImageBG')
  request.r(i547[17], i547[18], 0, i546, 'textProgess')
  request.r(i547[19], i547[20], 0, i546, 'imgProgess')
  request.r(i547[21], i547[22], 0, i546, 'timeText')
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i553 = data
  i552.cullTransparentMesh = !!i553[0]
  return i552
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i555 = data
  request.r(i555[0], i555[1], 0, i554, 'm_Texture')
  i554.m_UVRect = UnityEngine.Rect.MinMaxRect(i555[2], i555[3], i555[4], i555[5])
  i554.m_Maskable = !!i555[6]
  request.r(i555[7], i555[8], 0, i554, 'm_Material')
  i554.m_Color = new pc.Color(i555[9], i555[10], i555[11], i555[12])
  i554.m_RaycastTarget = !!i555[13]
  i554.m_RaycastPadding = new pc.Vec4( i555[14], i555[15], i555[16], i555[17] )
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i557 = data
  request.r(i557[0], i557[1], 0, i556, 'clip')
  request.r(i557[2], i557[3], 0, i556, 'outputAudioMixerGroup')
  i556.playOnAwake = !!i557[4]
  i556.loop = !!i557[5]
  i556.time = i557[6]
  i556.volume = i557[7]
  i556.pitch = i557[8]
  i556.enabled = !!i557[9]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i559 = data
  i558.usedByComposite = !!i559[0]
  i558.autoTiling = !!i559[1]
  var i561 = i559[2]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
  var i563 = i561[i + 0]
  var i562 = []
  for(var i = 0; i < i563.length; i += 2) {
    i562.push( new pc.Vec2( i563[i + 0], i563[i + 1] ) );
  }
    i560.push( i562 );
  }
  i558.points = i560
  i558.enabled = !!i559[3]
  i558.isTrigger = !!i559[4]
  i558.usedByEffector = !!i559[5]
  i558.density = i559[6]
  i558.offset = new pc.Vec2( i559[7], i559[8] )
  request.r(i559[9], i559[10], 0, i558, 'material')
  return i558
}

Deserializers["DropZone"] = function (request, data, root) {
  var i570 = root || request.c( 'DropZone' )
  var i571 = data
  i570.idDrop = i571[0]
  var i573 = i571[1]
  var i572 = []
  for(var i = 0; i < i573.length; i += 2) {
  request.r(i573[i + 0], i573[i + 1], 2, i572, '')
  }
  i570.steps = i572
  return i570
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.UI.Image' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'm_Sprite')
  i576.m_Type = i577[2]
  i576.m_PreserveAspect = !!i577[3]
  i576.m_FillCenter = !!i577[4]
  i576.m_FillMethod = i577[5]
  i576.m_FillAmount = i577[6]
  i576.m_FillClockwise = !!i577[7]
  i576.m_FillOrigin = i577[8]
  i576.m_UseSpriteMesh = !!i577[9]
  i576.m_PixelsPerUnitMultiplier = i577[10]
  i576.m_Maskable = !!i577[11]
  request.r(i577[12], i577[13], 0, i576, 'm_Material')
  i576.m_Color = new pc.Color(i577[14], i577[15], i577[16], i577[17])
  i576.m_RaycastTarget = !!i577[18]
  i576.m_RaycastPadding = new pc.Vec4( i577[19], i577[20], i577[21], i577[22] )
  return i576
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i578 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'skeletonDataAsset')
  request.r(i579[2], i579[3], 0, i578, 'additiveMaterial')
  request.r(i579[4], i579[5], 0, i578, 'multiplyMaterial')
  request.r(i579[6], i579[7], 0, i578, 'screenMaterial')
  i578.initialSkinName = i579[8]
  i578.initialFlipX = !!i579[9]
  i578.initialFlipY = !!i579[10]
  i578.startingAnimation = i579[11]
  i578.startingLoop = !!i579[12]
  i578.timeScale = i579[13]
  i578.freeze = !!i579[14]
  i578.layoutScaleMode = i579[15]
  i578.updateWhenInvisible = i579[16]
  i578.allowMultipleCanvasRenderers = !!i579[17]
  var i581 = i579[18]
  var i580 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i581.length; i += 2) {
  request.r(i581[i + 0], i581[i + 1], 1, i580, '')
  }
  i578.canvasRenderers = i580
  i578.enableSeparatorSlots = !!i579[19]
  i578.updateSeparatorPartLocation = !!i579[20]
  i578.updateSeparatorPartScale = !!i579[21]
  i578.disableMeshAssignmentOnOverride = !!i579[22]
  i578.referenceSize = new pc.Vec2( i579[23], i579[24] )
  i578.referenceScale = i579[25]
  i578.rectTransformSize = new pc.Vec2( i579[26], i579[27] )
  i578.editReferenceRect = !!i579[28]
  var i583 = i579[29]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( i583[i + 0] );
  }
  i578.separatorSlotNames = i582
  var i585 = i579[30]
  var i584 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 1, i584, '')
  }
  i578.separatorParts = i584
  i578.meshGenerator = request.d('Spine.Unity.MeshGenerator', i579[31], i578.meshGenerator)
  i578.updateTiming = i579[32]
  i578.unscaledTime = !!i579[33]
  i578.m_Maskable = !!i579[34]
  request.r(i579[35], i579[36], 0, i578, 'm_Material')
  i578.m_Color = new pc.Color(i579[37], i579[38], i579[39], i579[40])
  i578.m_RaycastTarget = !!i579[41]
  i578.m_RaycastPadding = new pc.Vec4( i579[42], i579[43], i579[44], i579[45] )
  return i578
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i592 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i593 = data
  i592.settings = request.d('Spine.Unity.MeshGenerator+Settings', i593[0], i592.settings)
  return i592
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i594 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i595 = data
  i594.useClipping = !!i595[0]
  i594.zSpacing = i595[1]
  i594.pmaVertexColors = !!i595[2]
  i594.tintBlack = !!i595[3]
  i594.canvasGroupTintBlack = !!i595[4]
  i594.calculateTangents = !!i595[5]
  i594.addNormals = !!i595[6]
  i594.immutableTriangles = !!i595[7]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i597 = data
  i596.m_Alpha = i597[0]
  i596.m_Interactable = !!i597[1]
  i596.m_BlocksRaycasts = !!i597[2]
  i596.m_IgnoreParentGroups = !!i597[3]
  i596.enabled = !!i597[4]
  return i596
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i598 = root || request.c( 'DraggableItem' )
  var i599 = data
  i598.idDrag = i599[0]
  i598.isProcess = !!i599[1]
  return i598
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i600 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i601 = data
  i600.m_hasFontAssetChanged = !!i601[0]
  request.r(i601[1], i601[2], 0, i600, 'm_baseMaterial')
  i600.m_maskOffset = new pc.Vec4( i601[3], i601[4], i601[5], i601[6] )
  i600.m_text = i601[7]
  i600.m_isRightToLeft = !!i601[8]
  request.r(i601[9], i601[10], 0, i600, 'm_fontAsset')
  request.r(i601[11], i601[12], 0, i600, 'm_sharedMaterial')
  var i603 = i601[13]
  var i602 = []
  for(var i = 0; i < i603.length; i += 2) {
  request.r(i603[i + 0], i603[i + 1], 2, i602, '')
  }
  i600.m_fontSharedMaterials = i602
  request.r(i601[14], i601[15], 0, i600, 'm_fontMaterial')
  var i605 = i601[16]
  var i604 = []
  for(var i = 0; i < i605.length; i += 2) {
  request.r(i605[i + 0], i605[i + 1], 2, i604, '')
  }
  i600.m_fontMaterials = i604
  i600.m_fontColor32 = UnityEngine.Color32.ConstructColor(i601[17], i601[18], i601[19], i601[20])
  i600.m_fontColor = new pc.Color(i601[21], i601[22], i601[23], i601[24])
  i600.m_enableVertexGradient = !!i601[25]
  i600.m_colorMode = i601[26]
  i600.m_fontColorGradient = request.d('TMPro.VertexGradient', i601[27], i600.m_fontColorGradient)
  request.r(i601[28], i601[29], 0, i600, 'm_fontColorGradientPreset')
  request.r(i601[30], i601[31], 0, i600, 'm_spriteAsset')
  i600.m_tintAllSprites = !!i601[32]
  request.r(i601[33], i601[34], 0, i600, 'm_StyleSheet')
  i600.m_TextStyleHashCode = i601[35]
  i600.m_overrideHtmlColors = !!i601[36]
  i600.m_faceColor = UnityEngine.Color32.ConstructColor(i601[37], i601[38], i601[39], i601[40])
  i600.m_fontSize = i601[41]
  i600.m_fontSizeBase = i601[42]
  i600.m_fontWeight = i601[43]
  i600.m_enableAutoSizing = !!i601[44]
  i600.m_fontSizeMin = i601[45]
  i600.m_fontSizeMax = i601[46]
  i600.m_fontStyle = i601[47]
  i600.m_HorizontalAlignment = i601[48]
  i600.m_VerticalAlignment = i601[49]
  i600.m_textAlignment = i601[50]
  i600.m_characterSpacing = i601[51]
  i600.m_wordSpacing = i601[52]
  i600.m_lineSpacing = i601[53]
  i600.m_lineSpacingMax = i601[54]
  i600.m_paragraphSpacing = i601[55]
  i600.m_charWidthMaxAdj = i601[56]
  i600.m_enableWordWrapping = !!i601[57]
  i600.m_wordWrappingRatios = i601[58]
  i600.m_overflowMode = i601[59]
  request.r(i601[60], i601[61], 0, i600, 'm_linkedTextComponent')
  request.r(i601[62], i601[63], 0, i600, 'parentLinkedComponent')
  i600.m_enableKerning = !!i601[64]
  i600.m_enableExtraPadding = !!i601[65]
  i600.checkPaddingRequired = !!i601[66]
  i600.m_isRichText = !!i601[67]
  i600.m_parseCtrlCharacters = !!i601[68]
  i600.m_isOrthographic = !!i601[69]
  i600.m_isCullingEnabled = !!i601[70]
  i600.m_horizontalMapping = i601[71]
  i600.m_verticalMapping = i601[72]
  i600.m_uvLineOffset = i601[73]
  i600.m_geometrySortingOrder = i601[74]
  i600.m_IsTextObjectScaleStatic = !!i601[75]
  i600.m_VertexBufferAutoSizeReduction = !!i601[76]
  i600.m_useMaxVisibleDescender = !!i601[77]
  i600.m_pageToDisplay = i601[78]
  i600.m_margin = new pc.Vec4( i601[79], i601[80], i601[81], i601[82] )
  i600.m_isUsingLegacyAnimationComponent = !!i601[83]
  i600.m_isVolumetricText = !!i601[84]
  i600.m_Maskable = !!i601[85]
  request.r(i601[86], i601[87], 0, i600, 'm_Material')
  i600.m_Color = new pc.Color(i601[88], i601[89], i601[90], i601[91])
  i600.m_RaycastTarget = !!i601[92]
  i600.m_RaycastPadding = new pc.Vec4( i601[93], i601[94], i601[95], i601[96] )
  return i600
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i608 = root || request.c( 'TMPro.VertexGradient' )
  var i609 = data
  i608.topLeft = new pc.Color(i609[0], i609[1], i609[2], i609[3])
  i608.topRight = new pc.Color(i609[4], i609[5], i609[6], i609[7])
  i608.bottomLeft = new pc.Color(i609[8], i609[9], i609[10], i609[11])
  i608.bottomRight = new pc.Color(i609[12], i609[13], i609[14], i609[15])
  return i608
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i610 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i611 = data
  i610.targetIsSelf = !!i611[0]
  request.r(i611[1], i611[2], 0, i610, 'targetGO')
  i610.tweenTargetIsTargetGO = !!i611[3]
  i610.delay = i611[4]
  i610.duration = i611[5]
  i610.easeType = i611[6]
  i610.easeCurve = new pc.AnimationCurve( { keys_flow: i611[7] } )
  i610.loopType = i611[8]
  i610.loops = i611[9]
  i610.id = i611[10]
  i610.isRelative = !!i611[11]
  i610.isFrom = !!i611[12]
  i610.isIndependentUpdate = !!i611[13]
  i610.autoKill = !!i611[14]
  i610.autoGenerate = !!i611[15]
  i610.isActive = !!i611[16]
  i610.isValid = !!i611[17]
  request.r(i611[18], i611[19], 0, i610, 'target')
  i610.animationType = i611[20]
  i610.targetType = i611[21]
  i610.forcedTargetType = i611[22]
  i610.autoPlay = !!i611[23]
  i610.useTargetAsV3 = !!i611[24]
  i610.endValueFloat = i611[25]
  i610.endValueV3 = new pc.Vec3( i611[26], i611[27], i611[28] )
  i610.endValueV2 = new pc.Vec2( i611[29], i611[30] )
  i610.endValueColor = new pc.Color(i611[31], i611[32], i611[33], i611[34])
  i610.endValueString = i611[35]
  i610.endValueRect = UnityEngine.Rect.MinMaxRect(i611[36], i611[37], i611[38], i611[39])
  request.r(i611[40], i611[41], 0, i610, 'endValueTransform')
  i610.optionalBool0 = !!i611[42]
  i610.optionalBool1 = !!i611[43]
  i610.optionalFloat0 = i611[44]
  i610.optionalInt0 = i611[45]
  i610.optionalRotationMode = i611[46]
  i610.optionalScrambleMode = i611[47]
  i610.optionalShakeRandomnessMode = i611[48]
  i610.optionalString = i611[49]
  i610.updateType = i611[50]
  i610.isSpeedBased = !!i611[51]
  i610.hasOnStart = !!i611[52]
  i610.hasOnPlay = !!i611[53]
  i610.hasOnUpdate = !!i611[54]
  i610.hasOnStepComplete = !!i611[55]
  i610.hasOnComplete = !!i611[56]
  i610.hasOnTweenCreated = !!i611[57]
  i610.hasOnRewind = !!i611[58]
  i610.onStart = request.d('UnityEngine.Events.UnityEvent', i611[59], i610.onStart)
  i610.onPlay = request.d('UnityEngine.Events.UnityEvent', i611[60], i610.onPlay)
  i610.onUpdate = request.d('UnityEngine.Events.UnityEvent', i611[61], i610.onUpdate)
  i610.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i611[62], i610.onStepComplete)
  i610.onComplete = request.d('UnityEngine.Events.UnityEvent', i611[63], i610.onComplete)
  i610.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i611[64], i610.onTweenCreated)
  i610.onRewind = request.d('UnityEngine.Events.UnityEvent', i611[65], i610.onRewind)
  return i610
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i613 = data
  i612.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i613[0], i612.m_PersistentCalls)
  return i612
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i615 = data
  var i617 = i615[0]
  var i616 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i617.length; i += 1) {
    i616.add(request.d('UnityEngine.Events.PersistentCall', i617[i + 0]));
  }
  i614.m_Calls = i616
  return i614
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'm_Target')
  i620.m_TargetAssemblyTypeName = i621[2]
  i620.m_MethodName = i621[3]
  i620.m_Mode = i621[4]
  i620.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i621[5], i620.m_Arguments)
  i620.m_CallState = i621[6]
  return i620
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.Button' )
  var i623 = data
  i622.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i623[0], i622.m_OnClick)
  i622.m_Navigation = request.d('UnityEngine.UI.Navigation', i623[1], i622.m_Navigation)
  i622.m_Transition = i623[2]
  i622.m_Colors = request.d('UnityEngine.UI.ColorBlock', i623[3], i622.m_Colors)
  i622.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i623[4], i622.m_SpriteState)
  i622.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i623[5], i622.m_AnimationTriggers)
  i622.m_Interactable = !!i623[6]
  request.r(i623[7], i623[8], 0, i622, 'm_TargetGraphic')
  return i622
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i625 = data
  i624.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i625[0], i624.m_PersistentCalls)
  return i624
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i627 = data
  i626.m_Mode = i627[0]
  i626.m_WrapAround = !!i627[1]
  request.r(i627[2], i627[3], 0, i626, 'm_SelectOnUp')
  request.r(i627[4], i627[5], 0, i626, 'm_SelectOnDown')
  request.r(i627[6], i627[7], 0, i626, 'm_SelectOnLeft')
  request.r(i627[8], i627[9], 0, i626, 'm_SelectOnRight')
  return i626
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i629 = data
  i628.m_NormalColor = new pc.Color(i629[0], i629[1], i629[2], i629[3])
  i628.m_HighlightedColor = new pc.Color(i629[4], i629[5], i629[6], i629[7])
  i628.m_PressedColor = new pc.Color(i629[8], i629[9], i629[10], i629[11])
  i628.m_SelectedColor = new pc.Color(i629[12], i629[13], i629[14], i629[15])
  i628.m_DisabledColor = new pc.Color(i629[16], i629[17], i629[18], i629[19])
  i628.m_ColorMultiplier = i629[20]
  i628.m_FadeDuration = i629[21]
  return i628
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'm_HighlightedSprite')
  request.r(i631[2], i631[3], 0, i630, 'm_PressedSprite')
  request.r(i631[4], i631[5], 0, i630, 'm_SelectedSprite')
  request.r(i631[6], i631[7], 0, i630, 'm_DisabledSprite')
  return i630
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i633 = data
  i632.m_NormalTrigger = i633[0]
  i632.m_HighlightedTrigger = i633[1]
  i632.m_PressedTrigger = i633[2]
  i632.m_SelectedTrigger = i633[3]
  i632.m_DisabledTrigger = i633[4]
  return i632
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.Mask' )
  var i635 = data
  i634.m_ShowMaskGraphic = !!i635[0]
  return i634
}

Deserializers["AudioController"] = function (request, data, root) {
  var i636 = root || request.c( 'AudioController' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'bgmSource')
  request.r(i637[2], i637[3], 0, i636, 'sfxSource')
  var i639 = i637[4]
  var i638 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i639.length; i += 1) {
    i638.add(request.d('AudioEntry', i639[i + 0]));
  }
  i636.audioEntries = i638
  return i636
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i642 = root || request.c( 'AudioEntry' )
  var i643 = data
  i642.key = i643[0]
  request.r(i643[1], i643[2], 0, i642, 'clip')
  i642.volume = i643[3]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i645 = data
  i644.ambientIntensity = i645[0]
  i644.reflectionIntensity = i645[1]
  i644.ambientMode = i645[2]
  i644.ambientLight = new pc.Color(i645[3], i645[4], i645[5], i645[6])
  i644.ambientSkyColor = new pc.Color(i645[7], i645[8], i645[9], i645[10])
  i644.ambientGroundColor = new pc.Color(i645[11], i645[12], i645[13], i645[14])
  i644.ambientEquatorColor = new pc.Color(i645[15], i645[16], i645[17], i645[18])
  i644.fogColor = new pc.Color(i645[19], i645[20], i645[21], i645[22])
  i644.fogEndDistance = i645[23]
  i644.fogStartDistance = i645[24]
  i644.fogDensity = i645[25]
  i644.fog = !!i645[26]
  request.r(i645[27], i645[28], 0, i644, 'skybox')
  i644.fogMode = i645[29]
  var i647 = i645[30]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i647[i + 0]) );
  }
  i644.lightmaps = i646
  i644.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i645[31], i644.lightProbes)
  i644.lightmapsMode = i645[32]
  i644.mixedBakeMode = i645[33]
  i644.environmentLightingMode = i645[34]
  i644.ambientProbe = new pc.SphericalHarmonicsL2(i645[35])
  i644.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i645[36])
  i644.useReferenceAmbientProbe = !!i645[37]
  request.r(i645[38], i645[39], 0, i644, 'customReflection')
  request.r(i645[40], i645[41], 0, i644, 'defaultReflection')
  i644.defaultReflectionMode = i645[42]
  i644.defaultReflectionResolution = i645[43]
  i644.sunLightObjectId = i645[44]
  i644.pixelLightCount = i645[45]
  i644.defaultReflectionHDR = !!i645[46]
  i644.hasLightDataAsset = !!i645[47]
  i644.hasManualGenerate = !!i645[48]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'lightmapColor')
  request.r(i651[2], i651[3], 0, i650, 'lightmapDirection')
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i652 = root || new UnityEngine.LightProbes()
  var i653 = data
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i661 = data
  var i663 = i661[0]
  var i662 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i663.length; i += 1) {
    i662.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i663[i + 0]));
  }
  i660.ShaderCompilationErrors = i662
  i660.name = i661[1]
  i660.guid = i661[2]
  var i665 = i661[3]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( i665[i + 0] );
  }
  i660.shaderDefinedKeywords = i664
  var i667 = i661[4]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i667[i + 0]) );
  }
  i660.passes = i666
  var i669 = i661[5]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i669[i + 0]) );
  }
  i660.usePasses = i668
  var i671 = i661[6]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i671[i + 0]) );
  }
  i660.defaultParameterValues = i670
  request.r(i661[7], i661[8], 0, i660, 'unityFallbackShader')
  i660.readDepth = !!i661[9]
  i660.isCreatedByShaderGraph = !!i661[10]
  i660.disableBatching = !!i661[11]
  i660.compiled = !!i661[12]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i675 = data
  i674.shaderName = i675[0]
  i674.errorMessage = i675[1]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i678 = root || new pc.UnityShaderPass()
  var i679 = data
  i678.id = i679[0]
  i678.subShaderIndex = i679[1]
  i678.name = i679[2]
  i678.passType = i679[3]
  i678.grabPassTextureName = i679[4]
  i678.usePass = !!i679[5]
  i678.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[6], i678.zTest)
  i678.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[7], i678.zWrite)
  i678.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[8], i678.culling)
  i678.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i679[9], i678.blending)
  i678.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i679[10], i678.alphaBlending)
  i678.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[11], i678.colorWriteMask)
  i678.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[12], i678.offsetUnits)
  i678.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[13], i678.offsetFactor)
  i678.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[14], i678.stencilRef)
  i678.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[15], i678.stencilReadMask)
  i678.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[16], i678.stencilWriteMask)
  i678.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i679[17], i678.stencilOp)
  i678.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i679[18], i678.stencilOpFront)
  i678.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i679[19], i678.stencilOpBack)
  var i681 = i679[20]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i681[i + 0]) );
  }
  i678.tags = i680
  var i683 = i679[21]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( i683[i + 0] );
  }
  i678.passDefinedKeywords = i682
  var i685 = i679[22]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i685[i + 0]) );
  }
  i678.passDefinedKeywordGroups = i684
  var i687 = i679[23]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i687[i + 0]) );
  }
  i678.variants = i686
  var i689 = i679[24]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i689[i + 0]) );
  }
  i678.excludedVariants = i688
  i678.hasDepthReader = !!i679[25]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i691 = data
  i690.val = i691[0]
  i690.name = i691[1]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i693 = data
  i692.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i693[0], i692.src)
  i692.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i693[1], i692.dst)
  i692.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i693[2], i692.op)
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i695 = data
  i694.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[0], i694.pass)
  i694.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[1], i694.fail)
  i694.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[2], i694.zFail)
  i694.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[3], i694.comp)
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i699 = data
  i698.name = i699[0]
  i698.value = i699[1]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i703 = data
  var i705 = i703[0]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( i705[i + 0] );
  }
  i702.keywords = i704
  i702.hasDiscard = !!i703[1]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i709 = data
  i708.passId = i709[0]
  i708.subShaderIndex = i709[1]
  var i711 = i709[2]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( i711[i + 0] );
  }
  i708.keywords = i710
  i708.vertexProgram = i709[3]
  i708.fragmentProgram = i709[4]
  i708.exportedForWebGl2 = !!i709[5]
  i708.readDepth = !!i709[6]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'shader')
  i714.pass = i715[2]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i719 = data
  i718.name = i719[0]
  i718.type = i719[1]
  i718.value = new pc.Vec4( i719[2], i719[3], i719[4], i719[5] )
  i718.textureValue = i719[6]
  i718.shaderPropertyFlag = i719[7]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i721 = data
  i720.name = i721[0]
  request.r(i721[1], i721[2], 0, i720, 'texture')
  i720.aabb = i721[3]
  i720.vertices = i721[4]
  i720.triangles = i721[5]
  i720.textureRect = UnityEngine.Rect.MinMaxRect(i721[6], i721[7], i721[8], i721[9])
  i720.packedRect = UnityEngine.Rect.MinMaxRect(i721[10], i721[11], i721[12], i721[13])
  i720.border = new pc.Vec4( i721[14], i721[15], i721[16], i721[17] )
  i720.transparency = i721[18]
  i720.bounds = i721[19]
  i720.pixelsPerUnit = i721[20]
  i720.textureWidth = i721[21]
  i720.textureHeight = i721[22]
  i720.nativeSize = new pc.Vec2( i721[23], i721[24] )
  i720.pivot = new pc.Vec2( i721[25], i721[26] )
  i720.textureRectOffset = new pc.Vec2( i721[27], i721[28] )
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i723 = data
  i722.name = i723[0]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i725 = data
  i724.name = i725[0]
  i724.ascent = i725[1]
  i724.originalLineHeight = i725[2]
  i724.fontSize = i725[3]
  var i727 = i725[4]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i727[i + 0]) );
  }
  i724.characterInfo = i726
  request.r(i725[5], i725[6], 0, i724, 'texture')
  i724.originalFontSize = i725[7]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i731 = data
  i730.index = i731[0]
  i730.advance = i731[1]
  i730.bearing = i731[2]
  i730.glyphWidth = i731[3]
  i730.glyphHeight = i731[4]
  i730.minX = i731[5]
  i730.maxX = i731[6]
  i730.minY = i731[7]
  i730.maxY = i731[8]
  i730.uvBottomLeftX = i731[9]
  i730.uvBottomLeftY = i731[10]
  i730.uvBottomRightX = i731[11]
  i730.uvBottomRightY = i731[12]
  i730.uvTopLeftX = i731[13]
  i730.uvTopLeftY = i731[14]
  i730.uvTopRightX = i731[15]
  i730.uvTopRightY = i731[16]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i733 = data
  i732.name = i733[0]
  i732.bytes64 = i733[1]
  i732.data = i733[2]
  return i732
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i734 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i735 = data
  var i737 = i735[0]
  var i736 = []
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 2, i736, '')
  }
  i734.atlasAssets = i736
  i734.scale = i735[1]
  request.r(i735[2], i735[3], 0, i734, 'skeletonJSON')
  i734.isUpgradingBlendModeMaterials = !!i735[4]
  i734.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i735[5], i734.blendModeMaterials)
  var i739 = i735[6]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 1, i738, '')
  }
  i734.skeletonDataModifiers = i738
  var i741 = i735[7]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( i741[i + 0] );
  }
  i734.fromAnimation = i740
  var i743 = i735[8]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( i743[i + 0] );
  }
  i734.toAnimation = i742
  i734.duration = i735[9]
  i734.defaultMix = i735[10]
  request.r(i735[11], i735[12], 0, i734, 'controller')
  return i734
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i746 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i747 = data
  i746.applyAdditiveMaterial = !!i747[0]
  var i749 = i747[1]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i749.length; i += 1) {
    i748.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i749[i + 0]));
  }
  i746.additiveMaterials = i748
  var i751 = i747[2]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i751.length; i += 1) {
    i750.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i751[i + 0]));
  }
  i746.multiplyMaterials = i750
  var i753 = i747[3]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i753.length; i += 1) {
    i752.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i753[i + 0]));
  }
  i746.screenMaterials = i752
  i746.requiresBlendModeMaterials = !!i747[4]
  return i746
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i756 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i757 = data
  i756.pageName = i757[0]
  request.r(i757[1], i757[2], 0, i756, 'material')
  return i756
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i760 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'atlasFile')
  var i763 = i761[2]
  var i762 = []
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 2, i762, '')
  }
  i760.materials = i762
  i760.textureLoadingMode = i761[3]
  request.r(i761[4], i761[5], 0, i760, 'onDemandTextureLoader')
  return i760
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i764 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'atlas')
  i764.normalStyle = i765[2]
  i764.normalSpacingOffset = i765[3]
  i764.boldStyle = i765[4]
  i764.boldSpacing = i765[5]
  i764.italicStyle = i765[6]
  i764.tabSize = i765[7]
  i764.hashCode = i765[8]
  request.r(i765[9], i765[10], 0, i764, 'material')
  i764.materialHashCode = i765[11]
  i764.m_Version = i765[12]
  i764.m_SourceFontFileGUID = i765[13]
  request.r(i765[14], i765[15], 0, i764, 'm_SourceFontFile_EditorRef')
  request.r(i765[16], i765[17], 0, i764, 'm_SourceFontFile')
  i764.m_AtlasPopulationMode = i765[18]
  i764.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i765[19], i764.m_FaceInfo)
  var i767 = i765[20]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i767.length; i += 1) {
    i766.add(request.d('UnityEngine.TextCore.Glyph', i767[i + 0]));
  }
  i764.m_GlyphTable = i766
  var i769 = i765[21]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(request.d('TMPro.TMP_Character', i769[i + 0]));
  }
  i764.m_CharacterTable = i768
  var i771 = i765[22]
  var i770 = []
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 2, i770, '')
  }
  i764.m_AtlasTextures = i770
  i764.m_AtlasTextureIndex = i765[23]
  i764.m_IsMultiAtlasTexturesEnabled = !!i765[24]
  i764.m_ClearDynamicDataOnBuild = !!i765[25]
  var i773 = i765[26]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i773.length; i += 1) {
    i772.add(request.d('UnityEngine.TextCore.GlyphRect', i773[i + 0]));
  }
  i764.m_UsedGlyphRects = i772
  var i775 = i765[27]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('UnityEngine.TextCore.GlyphRect', i775[i + 0]));
  }
  i764.m_FreeGlyphRects = i774
  i764.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i765[28], i764.m_fontInfo)
  i764.m_AtlasWidth = i765[29]
  i764.m_AtlasHeight = i765[30]
  i764.m_AtlasPadding = i765[31]
  i764.m_AtlasRenderMode = i765[32]
  var i777 = i765[33]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i777.length; i += 1) {
    i776.add(request.d('TMPro.TMP_Glyph', i777[i + 0]));
  }
  i764.m_glyphInfoList = i776
  i764.m_KerningTable = request.d('TMPro.KerningTable', i765[34], i764.m_KerningTable)
  i764.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i765[35], i764.m_FontFeatureTable)
  var i779 = i765[36]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 1, i778, '')
  }
  i764.fallbackFontAssets = i778
  var i781 = i765[37]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 1, i780, '')
  }
  i764.m_FallbackFontAssetTable = i780
  i764.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i765[38], i764.m_CreationSettings)
  var i783 = i765[39]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('TMPro.TMP_FontWeightPair', i783[i + 0]) );
  }
  i764.m_FontWeightTable = i782
  var i785 = i765[40]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('TMPro.TMP_FontWeightPair', i785[i + 0]) );
  }
  i764.fontWeights = i784
  return i764
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i787 = data
  i786.m_FaceIndex = i787[0]
  i786.m_FamilyName = i787[1]
  i786.m_StyleName = i787[2]
  i786.m_PointSize = i787[3]
  i786.m_Scale = i787[4]
  i786.m_UnitsPerEM = i787[5]
  i786.m_LineHeight = i787[6]
  i786.m_AscentLine = i787[7]
  i786.m_CapLine = i787[8]
  i786.m_MeanLine = i787[9]
  i786.m_Baseline = i787[10]
  i786.m_DescentLine = i787[11]
  i786.m_SuperscriptOffset = i787[12]
  i786.m_SuperscriptSize = i787[13]
  i786.m_SubscriptOffset = i787[14]
  i786.m_SubscriptSize = i787[15]
  i786.m_UnderlineOffset = i787[16]
  i786.m_UnderlineThickness = i787[17]
  i786.m_StrikethroughOffset = i787[18]
  i786.m_StrikethroughThickness = i787[19]
  i786.m_TabWidth = i787[20]
  return i786
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i791 = data
  i790.m_Index = i791[0]
  i790.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i791[1], i790.m_Metrics)
  i790.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i791[2], i790.m_GlyphRect)
  i790.m_Scale = i791[3]
  i790.m_AtlasIndex = i791[4]
  i790.m_ClassDefinitionType = i791[5]
  return i790
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i793 = data
  i792.m_Width = i793[0]
  i792.m_Height = i793[1]
  i792.m_HorizontalBearingX = i793[2]
  i792.m_HorizontalBearingY = i793[3]
  i792.m_HorizontalAdvance = i793[4]
  return i792
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i795 = data
  i794.m_X = i795[0]
  i794.m_Y = i795[1]
  i794.m_Width = i795[2]
  i794.m_Height = i795[3]
  return i794
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i798 = root || request.c( 'TMPro.TMP_Character' )
  var i799 = data
  i798.m_ElementType = i799[0]
  i798.m_Unicode = i799[1]
  i798.m_GlyphIndex = i799[2]
  i798.m_Scale = i799[3]
  return i798
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i804 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i805 = data
  i804.Name = i805[0]
  i804.PointSize = i805[1]
  i804.Scale = i805[2]
  i804.CharacterCount = i805[3]
  i804.LineHeight = i805[4]
  i804.Baseline = i805[5]
  i804.Ascender = i805[6]
  i804.CapHeight = i805[7]
  i804.Descender = i805[8]
  i804.CenterLine = i805[9]
  i804.SuperscriptOffset = i805[10]
  i804.SubscriptOffset = i805[11]
  i804.SubSize = i805[12]
  i804.Underline = i805[13]
  i804.UnderlineThickness = i805[14]
  i804.strikethrough = i805[15]
  i804.strikethroughThickness = i805[16]
  i804.TabWidth = i805[17]
  i804.Padding = i805[18]
  i804.AtlasWidth = i805[19]
  i804.AtlasHeight = i805[20]
  return i804
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i808 = root || request.c( 'TMPro.TMP_Glyph' )
  var i809 = data
  i808.id = i809[0]
  i808.x = i809[1]
  i808.y = i809[2]
  i808.width = i809[3]
  i808.height = i809[4]
  i808.xOffset = i809[5]
  i808.yOffset = i809[6]
  i808.xAdvance = i809[7]
  i808.scale = i809[8]
  return i808
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i810 = root || request.c( 'TMPro.KerningTable' )
  var i811 = data
  var i813 = i811[0]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i813.length; i += 1) {
    i812.add(request.d('TMPro.KerningPair', i813[i + 0]));
  }
  i810.kerningPairs = i812
  return i810
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i816 = root || request.c( 'TMPro.KerningPair' )
  var i817 = data
  i816.xOffset = i817[0]
  i816.m_FirstGlyph = i817[1]
  i816.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i817[2], i816.m_FirstGlyphAdjustments)
  i816.m_SecondGlyph = i817[3]
  i816.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i817[4], i816.m_SecondGlyphAdjustments)
  i816.m_IgnoreSpacingAdjustments = !!i817[5]
  return i816
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i818 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i819 = data
  var i821 = i819[0]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i821.length; i += 1) {
    i820.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i821[i + 0]));
  }
  i818.m_GlyphPairAdjustmentRecords = i820
  return i818
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i825 = data
  i824.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i825[0], i824.m_FirstAdjustmentRecord)
  i824.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i825[1], i824.m_SecondAdjustmentRecord)
  i824.m_FeatureLookupFlags = i825[2]
  return i824
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i828 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i829 = data
  i828.sourceFontFileName = i829[0]
  i828.sourceFontFileGUID = i829[1]
  i828.pointSizeSamplingMode = i829[2]
  i828.pointSize = i829[3]
  i828.padding = i829[4]
  i828.packingMode = i829[5]
  i828.atlasWidth = i829[6]
  i828.atlasHeight = i829[7]
  i828.characterSetSelectionMode = i829[8]
  i828.characterSequence = i829[9]
  i828.referencedFontAssetGUID = i829[10]
  i828.referencedTextAssetGUID = i829[11]
  i828.fontStyle = i829[12]
  i828.fontStyleModifier = i829[13]
  i828.renderMode = i829[14]
  i828.includeFontFeatures = !!i829[15]
  return i828
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'regularTypeface')
  request.r(i833[2], i833[3], 0, i832, 'italicTypeface')
  return i832
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i834 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i835 = data
  i834.useSafeMode = !!i835[0]
  i834.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i835[1], i834.safeModeOptions)
  i834.timeScale = i835[2]
  i834.unscaledTimeScale = i835[3]
  i834.useSmoothDeltaTime = !!i835[4]
  i834.maxSmoothUnscaledTime = i835[5]
  i834.rewindCallbackMode = i835[6]
  i834.showUnityEditorReport = !!i835[7]
  i834.logBehaviour = i835[8]
  i834.drawGizmos = !!i835[9]
  i834.defaultRecyclable = !!i835[10]
  i834.defaultAutoPlay = i835[11]
  i834.defaultUpdateType = i835[12]
  i834.defaultTimeScaleIndependent = !!i835[13]
  i834.defaultEaseType = i835[14]
  i834.defaultEaseOvershootOrAmplitude = i835[15]
  i834.defaultEasePeriod = i835[16]
  i834.defaultAutoKill = !!i835[17]
  i834.defaultLoopType = i835[18]
  i834.debugMode = !!i835[19]
  i834.debugStoreTargetId = !!i835[20]
  i834.showPreviewPanel = !!i835[21]
  i834.storeSettingsLocation = i835[22]
  i834.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i835[23], i834.modules)
  i834.createASMDEF = !!i835[24]
  i834.showPlayingTweens = !!i835[25]
  i834.showPausedTweens = !!i835[26]
  return i834
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i836 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i837 = data
  i836.logBehaviour = i837[0]
  i836.nestedTweenFailureBehaviour = i837[1]
  return i836
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i838 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i839 = data
  i838.showPanel = !!i839[0]
  i838.audioEnabled = !!i839[1]
  i838.physicsEnabled = !!i839[2]
  i838.physics2DEnabled = !!i839[3]
  i838.spriteEnabled = !!i839[4]
  i838.uiEnabled = !!i839[5]
  i838.textMeshProEnabled = !!i839[6]
  i838.tk2DEnabled = !!i839[7]
  i838.deAudioEnabled = !!i839[8]
  i838.deUnityExtendedEnabled = !!i839[9]
  i838.epoOutlineEnabled = !!i839[10]
  return i838
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.TMP_Settings' )
  var i841 = data
  i840.m_enableWordWrapping = !!i841[0]
  i840.m_enableKerning = !!i841[1]
  i840.m_enableExtraPadding = !!i841[2]
  i840.m_enableTintAllSprites = !!i841[3]
  i840.m_enableParseEscapeCharacters = !!i841[4]
  i840.m_EnableRaycastTarget = !!i841[5]
  i840.m_GetFontFeaturesAtRuntime = !!i841[6]
  i840.m_missingGlyphCharacter = i841[7]
  i840.m_warningsDisabled = !!i841[8]
  request.r(i841[9], i841[10], 0, i840, 'm_defaultFontAsset')
  i840.m_defaultFontAssetPath = i841[11]
  i840.m_defaultFontSize = i841[12]
  i840.m_defaultAutoSizeMinRatio = i841[13]
  i840.m_defaultAutoSizeMaxRatio = i841[14]
  i840.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i841[15], i841[16] )
  i840.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i841[17], i841[18] )
  i840.m_autoSizeTextContainer = !!i841[19]
  i840.m_IsTextObjectScaleStatic = !!i841[20]
  var i843 = i841[21]
  var i842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 1, i842, '')
  }
  i840.m_fallbackFontAssets = i842
  i840.m_matchMaterialPreset = !!i841[22]
  request.r(i841[23], i841[24], 0, i840, 'm_defaultSpriteAsset')
  i840.m_defaultSpriteAssetPath = i841[25]
  i840.m_enableEmojiSupport = !!i841[26]
  i840.m_MissingCharacterSpriteUnicode = i841[27]
  i840.m_defaultColorGradientPresetsPath = i841[28]
  request.r(i841[29], i841[30], 0, i840, 'm_defaultStyleSheet')
  i840.m_StyleSheetsResourcePath = i841[31]
  request.r(i841[32], i841[33], 0, i840, 'm_leadingCharacters')
  request.r(i841[34], i841[35], 0, i840, 'm_followingCharacters')
  i840.m_UseModernHangulLineBreakingRules = !!i841[36]
  return i840
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'spriteSheet')
  var i847 = i845[2]
  var i846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i847.length; i += 1) {
    i846.add(request.d('TMPro.TMP_Sprite', i847[i + 0]));
  }
  i844.spriteInfoList = i846
  var i849 = i845[3]
  var i848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 1, i848, '')
  }
  i844.fallbackSpriteAssets = i848
  i844.hashCode = i845[4]
  request.r(i845[5], i845[6], 0, i844, 'material')
  i844.materialHashCode = i845[7]
  i844.m_Version = i845[8]
  i844.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i845[9], i844.m_FaceInfo)
  var i851 = i845[10]
  var i850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i851.length; i += 1) {
    i850.add(request.d('TMPro.TMP_SpriteCharacter', i851[i + 0]));
  }
  i844.m_SpriteCharacterTable = i850
  var i853 = i845[11]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i853.length; i += 1) {
    i852.add(request.d('TMPro.TMP_SpriteGlyph', i853[i + 0]));
  }
  i844.m_SpriteGlyphTable = i852
  return i844
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i856 = root || request.c( 'TMPro.TMP_Sprite' )
  var i857 = data
  i856.name = i857[0]
  i856.hashCode = i857[1]
  i856.unicode = i857[2]
  i856.pivot = new pc.Vec2( i857[3], i857[4] )
  request.r(i857[5], i857[6], 0, i856, 'sprite')
  i856.id = i857[7]
  i856.x = i857[8]
  i856.y = i857[9]
  i856.width = i857[10]
  i856.height = i857[11]
  i856.xOffset = i857[12]
  i856.yOffset = i857[13]
  i856.xAdvance = i857[14]
  i856.scale = i857[15]
  return i856
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i863 = data
  i862.m_Name = i863[0]
  i862.m_HashCode = i863[1]
  i862.m_ElementType = i863[2]
  i862.m_Unicode = i863[3]
  i862.m_GlyphIndex = i863[4]
  i862.m_Scale = i863[5]
  return i862
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'sprite')
  i866.m_Index = i867[2]
  i866.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i867[3], i866.m_Metrics)
  i866.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i867[4], i866.m_GlyphRect)
  i866.m_Scale = i867[5]
  i866.m_AtlasIndex = i867[6]
  i866.m_ClassDefinitionType = i867[7]
  return i866
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i868 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i869 = data
  var i871 = i869[0]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i871.length; i += 1) {
    i870.add(request.d('TMPro.TMP_Style', i871[i + 0]));
  }
  i868.m_StyleList = i870
  return i868
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TMP_Style' )
  var i875 = data
  i874.m_Name = i875[0]
  i874.m_HashCode = i875[1]
  i874.m_OpeningDefinition = i875[2]
  i874.m_ClosingDefinition = i875[3]
  i874.m_OpeningTagArray = i875[4]
  i874.m_ClosingTagArray = i875[5]
  i874.m_OpeningTagUnicodeArray = i875[6]
  i874.m_ClosingTagUnicodeArray = i875[7]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i877 = data
  var i879 = i877[0]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i879[i + 0]) );
  }
  i876.files = i878
  i876.componentToPrefabIds = i877[1]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i883 = data
  i882.path = i883[0]
  request.r(i883[1], i883[2], 0, i882, 'unityObject')
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i885 = data
  var i887 = i885[0]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i887[i + 0]) );
  }
  i884.scriptsExecutionOrder = i886
  var i889 = i885[1]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i889[i + 0]) );
  }
  i884.sortingLayers = i888
  var i891 = i885[2]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i891[i + 0]) );
  }
  i884.cullingLayers = i890
  i884.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i885[3], i884.timeSettings)
  i884.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i885[4], i884.physicsSettings)
  i884.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i885[5], i884.physics2DSettings)
  i884.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i885[6], i884.qualitySettings)
  i884.enableRealtimeShadows = !!i885[7]
  i884.enableAutoInstancing = !!i885[8]
  i884.enableStaticBatching = !!i885[9]
  i884.enableDynamicBatching = !!i885[10]
  i884.lightmapEncodingQuality = i885[11]
  i884.desiredColorSpace = i885[12]
  var i893 = i885[13]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( i893[i + 0] );
  }
  i884.allTags = i892
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i897 = data
  i896.name = i897[0]
  i896.value = i897[1]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i901 = data
  i900.id = i901[0]
  i900.name = i901[1]
  i900.value = i901[2]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i905 = data
  i904.id = i905[0]
  i904.name = i905[1]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i907 = data
  i906.fixedDeltaTime = i907[0]
  i906.maximumDeltaTime = i907[1]
  i906.timeScale = i907[2]
  i906.maximumParticleTimestep = i907[3]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i909 = data
  i908.gravity = new pc.Vec3( i909[0], i909[1], i909[2] )
  i908.defaultSolverIterations = i909[3]
  i908.bounceThreshold = i909[4]
  i908.autoSyncTransforms = !!i909[5]
  i908.autoSimulation = !!i909[6]
  var i911 = i909[7]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i911[i + 0]) );
  }
  i908.collisionMatrix = i910
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i915 = data
  i914.enabled = !!i915[0]
  i914.layerId = i915[1]
  i914.otherLayerId = i915[2]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'material')
  i916.gravity = new pc.Vec2( i917[2], i917[3] )
  i916.positionIterations = i917[4]
  i916.velocityIterations = i917[5]
  i916.velocityThreshold = i917[6]
  i916.maxLinearCorrection = i917[7]
  i916.maxAngularCorrection = i917[8]
  i916.maxTranslationSpeed = i917[9]
  i916.maxRotationSpeed = i917[10]
  i916.baumgarteScale = i917[11]
  i916.baumgarteTOIScale = i917[12]
  i916.timeToSleep = i917[13]
  i916.linearSleepTolerance = i917[14]
  i916.angularSleepTolerance = i917[15]
  i916.defaultContactOffset = i917[16]
  i916.autoSimulation = !!i917[17]
  i916.queriesHitTriggers = !!i917[18]
  i916.queriesStartInColliders = !!i917[19]
  i916.callbacksOnDisable = !!i917[20]
  i916.reuseCollisionCallbacks = !!i917[21]
  i916.autoSyncTransforms = !!i917[22]
  var i919 = i917[23]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i919[i + 0]) );
  }
  i916.collisionMatrix = i918
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i923 = data
  i922.enabled = !!i923[0]
  i922.layerId = i923[1]
  i922.otherLayerId = i923[2]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i925 = data
  var i927 = i925[0]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i927[i + 0]) );
  }
  i924.qualityLevels = i926
  var i929 = i925[1]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( i929[i + 0] );
  }
  i924.names = i928
  i924.shadows = i925[2]
  i924.anisotropicFiltering = i925[3]
  i924.antiAliasing = i925[4]
  i924.lodBias = i925[5]
  i924.shadowCascades = i925[6]
  i924.shadowDistance = i925[7]
  i924.shadowmaskMode = i925[8]
  i924.shadowProjection = i925[9]
  i924.shadowResolution = i925[10]
  i924.softParticles = !!i925[11]
  i924.softVegetation = !!i925[12]
  i924.activeColorSpace = i925[13]
  i924.desiredColorSpace = i925[14]
  i924.masterTextureLimit = i925[15]
  i924.maxQueuedFrames = i925[16]
  i924.particleRaycastBudget = i925[17]
  i924.pixelLightCount = i925[18]
  i924.realtimeReflectionProbes = !!i925[19]
  i924.shadowCascade2Split = i925[20]
  i924.shadowCascade4Split = new pc.Vec3( i925[21], i925[22], i925[23] )
  i924.streamingMipmapsActive = !!i925[24]
  i924.vSyncCount = i925[25]
  i924.asyncUploadBufferSize = i925[26]
  i924.asyncUploadTimeSlice = i925[27]
  i924.billboardsFaceCameraPosition = !!i925[28]
  i924.shadowNearPlaneOffset = i925[29]
  i924.streamingMipmapsMemoryBudget = i925[30]
  i924.maximumLODLevel = i925[31]
  i924.streamingMipmapsAddAllCameras = !!i925[32]
  i924.streamingMipmapsMaxLevelReduction = i925[33]
  i924.streamingMipmapsRenderersPerFrame = i925[34]
  i924.resolutionScalingFixedDPIFactor = i925[35]
  i924.streamingMipmapsMaxFileIORequests = i925[36]
  i924.currentQualityLevel = i925[37]
  return i924
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'm_ObjectArgument')
  i932.m_ObjectArgumentAssemblyTypeName = i933[2]
  i932.m_IntArgument = i933[3]
  i932.m_FloatArgument = i933[4]
  i932.m_StringArgument = i933[5]
  i932.m_BoolArgument = !!i933[6]
  return i932
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i935 = data
  i934.xPlacement = i935[0]
  i934.yPlacement = i935[1]
  i934.xAdvance = i935[2]
  i934.yAdvance = i935[3]
  return i934
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i936 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i937 = data
  i936.m_GlyphIndex = i937[0]
  i936.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i937[1], i936.m_GlyphValueRecord)
  return i936
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i939 = data
  i938.m_XPlacement = i939[0]
  i938.m_YPlacement = i939[1]
  i938.m_XAdvance = i939[2]
  i938.m_YAdvance = i939[3]
  return i938
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[3],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[52],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[3],"74":[75],"76":[77],"78":[77],"9":[8],"79":[80],"81":[82],"83":[80],"84":[8],"85":[8],"11":[9],"18":[19,8],"86":[8],"10":[9],"87":[8],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"32":[8],"94":[8],"16":[19,8],"95":[8],"96":[8],"97":[8],"98":[8],"99":[19,8],"100":[8],"101":[6],"102":[6],"7":[6],"103":[6],"104":[3],"105":[3],"106":[107],"108":[3],"109":[110],"111":[8],"112":[19,8],"113":[75],"25":[19,8],"114":[115,75],"116":[75],"117":[75,118],"119":[52],"120":[60],"121":[110],"122":[123],"124":[8],"125":[75,8],"17":[8,19],"126":[8],"127":[19,8],"128":[75],"129":[19,8],"130":[8],"131":[80]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.PolygonCollider2D","DropZone","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.CanvasGroup","DraggableItem","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "162.2";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BP_V12_ThamNT_AnhPD";

Deserializers.lunaAppID = "31727";

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

Deserializers.buildID = "85e0e524-ce3b-4534-93d6-295ac260abb1";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

