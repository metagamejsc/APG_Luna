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
  request.r(i547[5], i547[6], 0, i546, 'Parent')
  i546.isDrag = !!i547[7]
  i546.timeDrag = i547[8]
  i546.countPlay = i547[9]
  i546.countPlayFinal = i547[10]
  i546.countPlayMax = i547[11]
  i546.timeDropFinal = i547[12]
  i546.colorBG = new pc.Color(i547[13], i547[14], i547[15], i547[16])
  request.r(i547[17], i547[18], 0, i546, 'texture2D')
  request.r(i547[19], i547[20], 0, i546, 'rawImageBG')
  request.r(i547[21], i547[22], 0, i546, 'textProgess')
  request.r(i547[23], i547[24], 0, i546, 'imgProgess')
  request.r(i547[25], i547[26], 0, i546, 'timeText')
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

Deserializers["DropZone"] = function (request, data, root) {
  var i558 = root || request.c( 'DropZone' )
  var i559 = data
  i558.idDrop = i559[0]
  var i561 = i559[1]
  var i560 = []
  for(var i = 0; i < i561.length; i += 2) {
  request.r(i561[i + 0], i561[i + 1], 2, i560, '')
  }
  i558.steps = i560
  request.r(i559[2], i559[3], 0, i558, 'stepLose')
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i565 = data
  i564.usedByComposite = !!i565[0]
  i564.autoTiling = !!i565[1]
  var i567 = i565[2]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
  var i569 = i567[i + 0]
  var i568 = []
  for(var i = 0; i < i569.length; i += 2) {
    i568.push( new pc.Vec2( i569[i + 0], i569[i + 1] ) );
  }
    i566.push( i568 );
  }
  i564.points = i566
  i564.enabled = !!i565[3]
  i564.isTrigger = !!i565[4]
  i564.usedByEffector = !!i565[5]
  i564.density = i565[6]
  i564.offset = new pc.Vec2( i565[7], i565[8] )
  request.r(i565[9], i565[10], 0, i564, 'material')
  return i564
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i576 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'skeletonDataAsset')
  request.r(i577[2], i577[3], 0, i576, 'additiveMaterial')
  request.r(i577[4], i577[5], 0, i576, 'multiplyMaterial')
  request.r(i577[6], i577[7], 0, i576, 'screenMaterial')
  i576.initialSkinName = i577[8]
  i576.initialFlipX = !!i577[9]
  i576.initialFlipY = !!i577[10]
  i576.startingAnimation = i577[11]
  i576.startingLoop = !!i577[12]
  i576.timeScale = i577[13]
  i576.freeze = !!i577[14]
  i576.layoutScaleMode = i577[15]
  i576.updateWhenInvisible = i577[16]
  i576.allowMultipleCanvasRenderers = !!i577[17]
  var i579 = i577[18]
  var i578 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i579.length; i += 2) {
  request.r(i579[i + 0], i579[i + 1], 1, i578, '')
  }
  i576.canvasRenderers = i578
  i576.enableSeparatorSlots = !!i577[19]
  i576.updateSeparatorPartLocation = !!i577[20]
  i576.updateSeparatorPartScale = !!i577[21]
  i576.disableMeshAssignmentOnOverride = !!i577[22]
  i576.referenceSize = new pc.Vec2( i577[23], i577[24] )
  i576.referenceScale = i577[25]
  i576.rectTransformSize = new pc.Vec2( i577[26], i577[27] )
  i576.editReferenceRect = !!i577[28]
  var i581 = i577[29]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( i581[i + 0] );
  }
  i576.separatorSlotNames = i580
  var i583 = i577[30]
  var i582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i583.length; i += 2) {
  request.r(i583[i + 0], i583[i + 1], 1, i582, '')
  }
  i576.separatorParts = i582
  i576.meshGenerator = request.d('Spine.Unity.MeshGenerator', i577[31], i576.meshGenerator)
  i576.updateTiming = i577[32]
  i576.unscaledTime = !!i577[33]
  i576.m_Maskable = !!i577[34]
  request.r(i577[35], i577[36], 0, i576, 'm_Material')
  i576.m_Color = new pc.Color(i577[37], i577[38], i577[39], i577[40])
  i576.m_RaycastTarget = !!i577[41]
  i576.m_RaycastPadding = new pc.Vec4( i577[42], i577[43], i577[44], i577[45] )
  return i576
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i590 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i591 = data
  i590.settings = request.d('Spine.Unity.MeshGenerator+Settings', i591[0], i590.settings)
  return i590
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i592 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i593 = data
  i592.useClipping = !!i593[0]
  i592.zSpacing = i593[1]
  i592.pmaVertexColors = !!i593[2]
  i592.tintBlack = !!i593[3]
  i592.canvasGroupTintBlack = !!i593[4]
  i592.calculateTangents = !!i593[5]
  i592.addNormals = !!i593[6]
  i592.immutableTriangles = !!i593[7]
  return i592
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.Image' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'm_Sprite')
  i594.m_Type = i595[2]
  i594.m_PreserveAspect = !!i595[3]
  i594.m_FillCenter = !!i595[4]
  i594.m_FillMethod = i595[5]
  i594.m_FillAmount = i595[6]
  i594.m_FillClockwise = !!i595[7]
  i594.m_FillOrigin = i595[8]
  i594.m_UseSpriteMesh = !!i595[9]
  i594.m_PixelsPerUnitMultiplier = i595[10]
  i594.m_Maskable = !!i595[11]
  request.r(i595[12], i595[13], 0, i594, 'm_Material')
  i594.m_Color = new pc.Color(i595[14], i595[15], i595[16], i595[17])
  i594.m_RaycastTarget = !!i595[18]
  i594.m_RaycastPadding = new pc.Vec4( i595[19], i595[20], i595[21], i595[22] )
  return i594
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i596 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i597 = data
  i596.targetIsSelf = !!i597[0]
  request.r(i597[1], i597[2], 0, i596, 'targetGO')
  i596.tweenTargetIsTargetGO = !!i597[3]
  i596.delay = i597[4]
  i596.duration = i597[5]
  i596.easeType = i597[6]
  i596.easeCurve = new pc.AnimationCurve( { keys_flow: i597[7] } )
  i596.loopType = i597[8]
  i596.loops = i597[9]
  i596.id = i597[10]
  i596.isRelative = !!i597[11]
  i596.isFrom = !!i597[12]
  i596.isIndependentUpdate = !!i597[13]
  i596.autoKill = !!i597[14]
  i596.autoGenerate = !!i597[15]
  i596.isActive = !!i597[16]
  i596.isValid = !!i597[17]
  request.r(i597[18], i597[19], 0, i596, 'target')
  i596.animationType = i597[20]
  i596.targetType = i597[21]
  i596.forcedTargetType = i597[22]
  i596.autoPlay = !!i597[23]
  i596.useTargetAsV3 = !!i597[24]
  i596.endValueFloat = i597[25]
  i596.endValueV3 = new pc.Vec3( i597[26], i597[27], i597[28] )
  i596.endValueV2 = new pc.Vec2( i597[29], i597[30] )
  i596.endValueColor = new pc.Color(i597[31], i597[32], i597[33], i597[34])
  i596.endValueString = i597[35]
  i596.endValueRect = UnityEngine.Rect.MinMaxRect(i597[36], i597[37], i597[38], i597[39])
  request.r(i597[40], i597[41], 0, i596, 'endValueTransform')
  i596.optionalBool0 = !!i597[42]
  i596.optionalBool1 = !!i597[43]
  i596.optionalFloat0 = i597[44]
  i596.optionalInt0 = i597[45]
  i596.optionalRotationMode = i597[46]
  i596.optionalScrambleMode = i597[47]
  i596.optionalShakeRandomnessMode = i597[48]
  i596.optionalString = i597[49]
  i596.updateType = i597[50]
  i596.isSpeedBased = !!i597[51]
  i596.hasOnStart = !!i597[52]
  i596.hasOnPlay = !!i597[53]
  i596.hasOnUpdate = !!i597[54]
  i596.hasOnStepComplete = !!i597[55]
  i596.hasOnComplete = !!i597[56]
  i596.hasOnTweenCreated = !!i597[57]
  i596.hasOnRewind = !!i597[58]
  i596.onStart = request.d('UnityEngine.Events.UnityEvent', i597[59], i596.onStart)
  i596.onPlay = request.d('UnityEngine.Events.UnityEvent', i597[60], i596.onPlay)
  i596.onUpdate = request.d('UnityEngine.Events.UnityEvent', i597[61], i596.onUpdate)
  i596.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i597[62], i596.onStepComplete)
  i596.onComplete = request.d('UnityEngine.Events.UnityEvent', i597[63], i596.onComplete)
  i596.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i597[64], i596.onTweenCreated)
  i596.onRewind = request.d('UnityEngine.Events.UnityEvent', i597[65], i596.onRewind)
  return i596
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i599 = data
  i598.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i599[0], i598.m_PersistentCalls)
  return i598
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i601 = data
  var i603 = i601[0]
  var i602 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i603.length; i += 1) {
    i602.add(request.d('UnityEngine.Events.PersistentCall', i603[i + 0]));
  }
  i600.m_Calls = i602
  return i600
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'm_Target')
  i606.m_TargetAssemblyTypeName = i607[2]
  i606.m_MethodName = i607[3]
  i606.m_Mode = i607[4]
  i606.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i607[5], i606.m_Arguments)
  i606.m_CallState = i607[6]
  return i606
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'm_ObjectArgument')
  i608.m_ObjectArgumentAssemblyTypeName = i609[2]
  i608.m_IntArgument = i609[3]
  i608.m_FloatArgument = i609[4]
  i608.m_StringArgument = i609[5]
  i608.m_BoolArgument = !!i609[6]
  return i608
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i610 = root || request.c( 'DraggableItem' )
  var i611 = data
  i610.idDrag = i611[0]
  i610.isProcess = !!i611[1]
  i610.isLose = !!i611[2]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i613 = data
  i612.m_Alpha = i613[0]
  i612.m_Interactable = !!i613[1]
  i612.m_BlocksRaycasts = !!i613[2]
  i612.m_IgnoreParentGroups = !!i613[3]
  i612.enabled = !!i613[4]
  return i612
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i614 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i615 = data
  i614.m_hasFontAssetChanged = !!i615[0]
  request.r(i615[1], i615[2], 0, i614, 'm_baseMaterial')
  i614.m_maskOffset = new pc.Vec4( i615[3], i615[4], i615[5], i615[6] )
  i614.m_text = i615[7]
  i614.m_isRightToLeft = !!i615[8]
  request.r(i615[9], i615[10], 0, i614, 'm_fontAsset')
  request.r(i615[11], i615[12], 0, i614, 'm_sharedMaterial')
  var i617 = i615[13]
  var i616 = []
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 2, i616, '')
  }
  i614.m_fontSharedMaterials = i616
  request.r(i615[14], i615[15], 0, i614, 'm_fontMaterial')
  var i619 = i615[16]
  var i618 = []
  for(var i = 0; i < i619.length; i += 2) {
  request.r(i619[i + 0], i619[i + 1], 2, i618, '')
  }
  i614.m_fontMaterials = i618
  i614.m_fontColor32 = UnityEngine.Color32.ConstructColor(i615[17], i615[18], i615[19], i615[20])
  i614.m_fontColor = new pc.Color(i615[21], i615[22], i615[23], i615[24])
  i614.m_enableVertexGradient = !!i615[25]
  i614.m_colorMode = i615[26]
  i614.m_fontColorGradient = request.d('TMPro.VertexGradient', i615[27], i614.m_fontColorGradient)
  request.r(i615[28], i615[29], 0, i614, 'm_fontColorGradientPreset')
  request.r(i615[30], i615[31], 0, i614, 'm_spriteAsset')
  i614.m_tintAllSprites = !!i615[32]
  request.r(i615[33], i615[34], 0, i614, 'm_StyleSheet')
  i614.m_TextStyleHashCode = i615[35]
  i614.m_overrideHtmlColors = !!i615[36]
  i614.m_faceColor = UnityEngine.Color32.ConstructColor(i615[37], i615[38], i615[39], i615[40])
  i614.m_fontSize = i615[41]
  i614.m_fontSizeBase = i615[42]
  i614.m_fontWeight = i615[43]
  i614.m_enableAutoSizing = !!i615[44]
  i614.m_fontSizeMin = i615[45]
  i614.m_fontSizeMax = i615[46]
  i614.m_fontStyle = i615[47]
  i614.m_HorizontalAlignment = i615[48]
  i614.m_VerticalAlignment = i615[49]
  i614.m_textAlignment = i615[50]
  i614.m_characterSpacing = i615[51]
  i614.m_wordSpacing = i615[52]
  i614.m_lineSpacing = i615[53]
  i614.m_lineSpacingMax = i615[54]
  i614.m_paragraphSpacing = i615[55]
  i614.m_charWidthMaxAdj = i615[56]
  i614.m_enableWordWrapping = !!i615[57]
  i614.m_wordWrappingRatios = i615[58]
  i614.m_overflowMode = i615[59]
  request.r(i615[60], i615[61], 0, i614, 'm_linkedTextComponent')
  request.r(i615[62], i615[63], 0, i614, 'parentLinkedComponent')
  i614.m_enableKerning = !!i615[64]
  i614.m_enableExtraPadding = !!i615[65]
  i614.checkPaddingRequired = !!i615[66]
  i614.m_isRichText = !!i615[67]
  i614.m_parseCtrlCharacters = !!i615[68]
  i614.m_isOrthographic = !!i615[69]
  i614.m_isCullingEnabled = !!i615[70]
  i614.m_horizontalMapping = i615[71]
  i614.m_verticalMapping = i615[72]
  i614.m_uvLineOffset = i615[73]
  i614.m_geometrySortingOrder = i615[74]
  i614.m_IsTextObjectScaleStatic = !!i615[75]
  i614.m_VertexBufferAutoSizeReduction = !!i615[76]
  i614.m_useMaxVisibleDescender = !!i615[77]
  i614.m_pageToDisplay = i615[78]
  i614.m_margin = new pc.Vec4( i615[79], i615[80], i615[81], i615[82] )
  i614.m_isUsingLegacyAnimationComponent = !!i615[83]
  i614.m_isVolumetricText = !!i615[84]
  i614.m_Maskable = !!i615[85]
  request.r(i615[86], i615[87], 0, i614, 'm_Material')
  i614.m_Color = new pc.Color(i615[88], i615[89], i615[90], i615[91])
  i614.m_RaycastTarget = !!i615[92]
  i614.m_RaycastPadding = new pc.Vec4( i615[93], i615[94], i615[95], i615[96] )
  return i614
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i622 = root || request.c( 'TMPro.VertexGradient' )
  var i623 = data
  i622.topLeft = new pc.Color(i623[0], i623[1], i623[2], i623[3])
  i622.topRight = new pc.Color(i623[4], i623[5], i623[6], i623[7])
  i622.bottomLeft = new pc.Color(i623[8], i623[9], i623[10], i623[11])
  i622.bottomRight = new pc.Color(i623[12], i623[13], i623[14], i623[15])
  return i622
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.Button' )
  var i625 = data
  i624.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i625[0], i624.m_OnClick)
  i624.m_Navigation = request.d('UnityEngine.UI.Navigation', i625[1], i624.m_Navigation)
  i624.m_Transition = i625[2]
  i624.m_Colors = request.d('UnityEngine.UI.ColorBlock', i625[3], i624.m_Colors)
  i624.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i625[4], i624.m_SpriteState)
  i624.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i625[5], i624.m_AnimationTriggers)
  i624.m_Interactable = !!i625[6]
  request.r(i625[7], i625[8], 0, i624, 'm_TargetGraphic')
  return i624
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i627 = data
  i626.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i627[0], i626.m_PersistentCalls)
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

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.Mask' )
  var i637 = data
  i636.m_ShowMaskGraphic = !!i637[0]
  return i636
}

Deserializers["AudioController"] = function (request, data, root) {
  var i638 = root || request.c( 'AudioController' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'bgmSource')
  request.r(i639[2], i639[3], 0, i638, 'sfxSource')
  var i641 = i639[4]
  var i640 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i641.length; i += 1) {
    i640.add(request.d('AudioEntry', i641[i + 0]));
  }
  i638.audioEntries = i640
  return i638
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i644 = root || request.c( 'AudioEntry' )
  var i645 = data
  i644.key = i645[0]
  request.r(i645[1], i645[2], 0, i644, 'clip')
  i644.volume = i645[3]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i647 = data
  i646.ambientIntensity = i647[0]
  i646.reflectionIntensity = i647[1]
  i646.ambientMode = i647[2]
  i646.ambientLight = new pc.Color(i647[3], i647[4], i647[5], i647[6])
  i646.ambientSkyColor = new pc.Color(i647[7], i647[8], i647[9], i647[10])
  i646.ambientGroundColor = new pc.Color(i647[11], i647[12], i647[13], i647[14])
  i646.ambientEquatorColor = new pc.Color(i647[15], i647[16], i647[17], i647[18])
  i646.fogColor = new pc.Color(i647[19], i647[20], i647[21], i647[22])
  i646.fogEndDistance = i647[23]
  i646.fogStartDistance = i647[24]
  i646.fogDensity = i647[25]
  i646.fog = !!i647[26]
  request.r(i647[27], i647[28], 0, i646, 'skybox')
  i646.fogMode = i647[29]
  var i649 = i647[30]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i649[i + 0]) );
  }
  i646.lightmaps = i648
  i646.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i647[31], i646.lightProbes)
  i646.lightmapsMode = i647[32]
  i646.mixedBakeMode = i647[33]
  i646.environmentLightingMode = i647[34]
  i646.ambientProbe = new pc.SphericalHarmonicsL2(i647[35])
  i646.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i647[36])
  i646.useReferenceAmbientProbe = !!i647[37]
  request.r(i647[38], i647[39], 0, i646, 'customReflection')
  request.r(i647[40], i647[41], 0, i646, 'defaultReflection')
  i646.defaultReflectionMode = i647[42]
  i646.defaultReflectionResolution = i647[43]
  i646.sunLightObjectId = i647[44]
  i646.pixelLightCount = i647[45]
  i646.defaultReflectionHDR = !!i647[46]
  i646.hasLightDataAsset = !!i647[47]
  i646.hasManualGenerate = !!i647[48]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'lightmapColor')
  request.r(i653[2], i653[3], 0, i652, 'lightmapDirection')
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i654 = root || new UnityEngine.LightProbes()
  var i655 = data
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i663 = data
  var i665 = i663[0]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i665.length; i += 1) {
    i664.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i665[i + 0]));
  }
  i662.ShaderCompilationErrors = i664
  i662.name = i663[1]
  i662.guid = i663[2]
  var i667 = i663[3]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( i667[i + 0] );
  }
  i662.shaderDefinedKeywords = i666
  var i669 = i663[4]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i669[i + 0]) );
  }
  i662.passes = i668
  var i671 = i663[5]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i671[i + 0]) );
  }
  i662.usePasses = i670
  var i673 = i663[6]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i673[i + 0]) );
  }
  i662.defaultParameterValues = i672
  request.r(i663[7], i663[8], 0, i662, 'unityFallbackShader')
  i662.readDepth = !!i663[9]
  i662.isCreatedByShaderGraph = !!i663[10]
  i662.disableBatching = !!i663[11]
  i662.compiled = !!i663[12]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i677 = data
  i676.shaderName = i677[0]
  i676.errorMessage = i677[1]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i680 = root || new pc.UnityShaderPass()
  var i681 = data
  i680.id = i681[0]
  i680.subShaderIndex = i681[1]
  i680.name = i681[2]
  i680.passType = i681[3]
  i680.grabPassTextureName = i681[4]
  i680.usePass = !!i681[5]
  i680.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[6], i680.zTest)
  i680.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[7], i680.zWrite)
  i680.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[8], i680.culling)
  i680.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i681[9], i680.blending)
  i680.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i681[10], i680.alphaBlending)
  i680.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[11], i680.colorWriteMask)
  i680.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[12], i680.offsetUnits)
  i680.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[13], i680.offsetFactor)
  i680.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[14], i680.stencilRef)
  i680.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[15], i680.stencilReadMask)
  i680.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[16], i680.stencilWriteMask)
  i680.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i681[17], i680.stencilOp)
  i680.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i681[18], i680.stencilOpFront)
  i680.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i681[19], i680.stencilOpBack)
  var i683 = i681[20]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i683[i + 0]) );
  }
  i680.tags = i682
  var i685 = i681[21]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( i685[i + 0] );
  }
  i680.passDefinedKeywords = i684
  var i687 = i681[22]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i687[i + 0]) );
  }
  i680.passDefinedKeywordGroups = i686
  var i689 = i681[23]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i689[i + 0]) );
  }
  i680.variants = i688
  var i691 = i681[24]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i691[i + 0]) );
  }
  i680.excludedVariants = i690
  i680.hasDepthReader = !!i681[25]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i693 = data
  i692.val = i693[0]
  i692.name = i693[1]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i695 = data
  i694.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[0], i694.src)
  i694.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[1], i694.dst)
  i694.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[2], i694.op)
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i697 = data
  i696.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[0], i696.pass)
  i696.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[1], i696.fail)
  i696.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[2], i696.zFail)
  i696.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[3], i696.comp)
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i701 = data
  i700.name = i701[0]
  i700.value = i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i705 = data
  var i707 = i705[0]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( i707[i + 0] );
  }
  i704.keywords = i706
  i704.hasDiscard = !!i705[1]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i711 = data
  i710.passId = i711[0]
  i710.subShaderIndex = i711[1]
  var i713 = i711[2]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( i713[i + 0] );
  }
  i710.keywords = i712
  i710.vertexProgram = i711[3]
  i710.fragmentProgram = i711[4]
  i710.exportedForWebGl2 = !!i711[5]
  i710.readDepth = !!i711[6]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'shader')
  i716.pass = i717[2]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i721 = data
  i720.name = i721[0]
  i720.type = i721[1]
  i720.value = new pc.Vec4( i721[2], i721[3], i721[4], i721[5] )
  i720.textureValue = i721[6]
  i720.shaderPropertyFlag = i721[7]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i723 = data
  i722.name = i723[0]
  request.r(i723[1], i723[2], 0, i722, 'texture')
  i722.aabb = i723[3]
  i722.vertices = i723[4]
  i722.triangles = i723[5]
  i722.textureRect = UnityEngine.Rect.MinMaxRect(i723[6], i723[7], i723[8], i723[9])
  i722.packedRect = UnityEngine.Rect.MinMaxRect(i723[10], i723[11], i723[12], i723[13])
  i722.border = new pc.Vec4( i723[14], i723[15], i723[16], i723[17] )
  i722.transparency = i723[18]
  i722.bounds = i723[19]
  i722.pixelsPerUnit = i723[20]
  i722.textureWidth = i723[21]
  i722.textureHeight = i723[22]
  i722.nativeSize = new pc.Vec2( i723[23], i723[24] )
  i722.pivot = new pc.Vec2( i723[25], i723[26] )
  i722.textureRectOffset = new pc.Vec2( i723[27], i723[28] )
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i725 = data
  i724.name = i725[0]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i727 = data
  i726.name = i727[0]
  i726.ascent = i727[1]
  i726.originalLineHeight = i727[2]
  i726.fontSize = i727[3]
  var i729 = i727[4]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i729[i + 0]) );
  }
  i726.characterInfo = i728
  request.r(i727[5], i727[6], 0, i726, 'texture')
  i726.originalFontSize = i727[7]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i733 = data
  i732.index = i733[0]
  i732.advance = i733[1]
  i732.bearing = i733[2]
  i732.glyphWidth = i733[3]
  i732.glyphHeight = i733[4]
  i732.minX = i733[5]
  i732.maxX = i733[6]
  i732.minY = i733[7]
  i732.maxY = i733[8]
  i732.uvBottomLeftX = i733[9]
  i732.uvBottomLeftY = i733[10]
  i732.uvBottomRightX = i733[11]
  i732.uvBottomRightY = i733[12]
  i732.uvTopLeftX = i733[13]
  i732.uvTopLeftY = i733[14]
  i732.uvTopRightX = i733[15]
  i732.uvTopRightY = i733[16]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i735 = data
  i734.name = i735[0]
  i734.bytes64 = i735[1]
  i734.data = i735[2]
  return i734
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i736 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i737 = data
  var i739 = i737[0]
  var i738 = []
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 2, i738, '')
  }
  i736.atlasAssets = i738
  i736.scale = i737[1]
  request.r(i737[2], i737[3], 0, i736, 'skeletonJSON')
  i736.isUpgradingBlendModeMaterials = !!i737[4]
  i736.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i737[5], i736.blendModeMaterials)
  var i741 = i737[6]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 1, i740, '')
  }
  i736.skeletonDataModifiers = i740
  var i743 = i737[7]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( i743[i + 0] );
  }
  i736.fromAnimation = i742
  var i745 = i737[8]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( i745[i + 0] );
  }
  i736.toAnimation = i744
  i736.duration = i737[9]
  i736.defaultMix = i737[10]
  request.r(i737[11], i737[12], 0, i736, 'controller')
  return i736
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i748 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i749 = data
  i748.applyAdditiveMaterial = !!i749[0]
  var i751 = i749[1]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i751.length; i += 1) {
    i750.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i751[i + 0]));
  }
  i748.additiveMaterials = i750
  var i753 = i749[2]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i753.length; i += 1) {
    i752.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i753[i + 0]));
  }
  i748.multiplyMaterials = i752
  var i755 = i749[3]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i755.length; i += 1) {
    i754.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i755[i + 0]));
  }
  i748.screenMaterials = i754
  i748.requiresBlendModeMaterials = !!i749[4]
  return i748
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i758 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i759 = data
  i758.pageName = i759[0]
  request.r(i759[1], i759[2], 0, i758, 'material')
  return i758
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i762 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'atlasFile')
  var i765 = i763[2]
  var i764 = []
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 2, i764, '')
  }
  i762.materials = i764
  i762.textureLoadingMode = i763[3]
  request.r(i763[4], i763[5], 0, i762, 'onDemandTextureLoader')
  return i762
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i766 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'atlas')
  i766.normalStyle = i767[2]
  i766.normalSpacingOffset = i767[3]
  i766.boldStyle = i767[4]
  i766.boldSpacing = i767[5]
  i766.italicStyle = i767[6]
  i766.tabSize = i767[7]
  i766.hashCode = i767[8]
  request.r(i767[9], i767[10], 0, i766, 'material')
  i766.materialHashCode = i767[11]
  i766.m_Version = i767[12]
  i766.m_SourceFontFileGUID = i767[13]
  request.r(i767[14], i767[15], 0, i766, 'm_SourceFontFile_EditorRef')
  request.r(i767[16], i767[17], 0, i766, 'm_SourceFontFile')
  i766.m_AtlasPopulationMode = i767[18]
  i766.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i767[19], i766.m_FaceInfo)
  var i769 = i767[20]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(request.d('UnityEngine.TextCore.Glyph', i769[i + 0]));
  }
  i766.m_GlyphTable = i768
  var i771 = i767[21]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i771.length; i += 1) {
    i770.add(request.d('TMPro.TMP_Character', i771[i + 0]));
  }
  i766.m_CharacterTable = i770
  var i773 = i767[22]
  var i772 = []
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 2, i772, '')
  }
  i766.m_AtlasTextures = i772
  i766.m_AtlasTextureIndex = i767[23]
  i766.m_IsMultiAtlasTexturesEnabled = !!i767[24]
  i766.m_ClearDynamicDataOnBuild = !!i767[25]
  var i775 = i767[26]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('UnityEngine.TextCore.GlyphRect', i775[i + 0]));
  }
  i766.m_UsedGlyphRects = i774
  var i777 = i767[27]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i777.length; i += 1) {
    i776.add(request.d('UnityEngine.TextCore.GlyphRect', i777[i + 0]));
  }
  i766.m_FreeGlyphRects = i776
  i766.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i767[28], i766.m_fontInfo)
  i766.m_AtlasWidth = i767[29]
  i766.m_AtlasHeight = i767[30]
  i766.m_AtlasPadding = i767[31]
  i766.m_AtlasRenderMode = i767[32]
  var i779 = i767[33]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('TMPro.TMP_Glyph', i779[i + 0]));
  }
  i766.m_glyphInfoList = i778
  i766.m_KerningTable = request.d('TMPro.KerningTable', i767[34], i766.m_KerningTable)
  i766.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i767[35], i766.m_FontFeatureTable)
  var i781 = i767[36]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 1, i780, '')
  }
  i766.fallbackFontAssets = i780
  var i783 = i767[37]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 1, i782, '')
  }
  i766.m_FallbackFontAssetTable = i782
  i766.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i767[38], i766.m_CreationSettings)
  var i785 = i767[39]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('TMPro.TMP_FontWeightPair', i785[i + 0]) );
  }
  i766.m_FontWeightTable = i784
  var i787 = i767[40]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('TMPro.TMP_FontWeightPair', i787[i + 0]) );
  }
  i766.fontWeights = i786
  return i766
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i789 = data
  i788.m_FaceIndex = i789[0]
  i788.m_FamilyName = i789[1]
  i788.m_StyleName = i789[2]
  i788.m_PointSize = i789[3]
  i788.m_Scale = i789[4]
  i788.m_UnitsPerEM = i789[5]
  i788.m_LineHeight = i789[6]
  i788.m_AscentLine = i789[7]
  i788.m_CapLine = i789[8]
  i788.m_MeanLine = i789[9]
  i788.m_Baseline = i789[10]
  i788.m_DescentLine = i789[11]
  i788.m_SuperscriptOffset = i789[12]
  i788.m_SuperscriptSize = i789[13]
  i788.m_SubscriptOffset = i789[14]
  i788.m_SubscriptSize = i789[15]
  i788.m_UnderlineOffset = i789[16]
  i788.m_UnderlineThickness = i789[17]
  i788.m_StrikethroughOffset = i789[18]
  i788.m_StrikethroughThickness = i789[19]
  i788.m_TabWidth = i789[20]
  return i788
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i793 = data
  i792.m_Index = i793[0]
  i792.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i793[1], i792.m_Metrics)
  i792.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i793[2], i792.m_GlyphRect)
  i792.m_Scale = i793[3]
  i792.m_AtlasIndex = i793[4]
  i792.m_ClassDefinitionType = i793[5]
  return i792
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i795 = data
  i794.m_Width = i795[0]
  i794.m_Height = i795[1]
  i794.m_HorizontalBearingX = i795[2]
  i794.m_HorizontalBearingY = i795[3]
  i794.m_HorizontalAdvance = i795[4]
  return i794
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i797 = data
  i796.m_X = i797[0]
  i796.m_Y = i797[1]
  i796.m_Width = i797[2]
  i796.m_Height = i797[3]
  return i796
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i800 = root || request.c( 'TMPro.TMP_Character' )
  var i801 = data
  i800.m_ElementType = i801[0]
  i800.m_Unicode = i801[1]
  i800.m_GlyphIndex = i801[2]
  i800.m_Scale = i801[3]
  return i800
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i806 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i807 = data
  i806.Name = i807[0]
  i806.PointSize = i807[1]
  i806.Scale = i807[2]
  i806.CharacterCount = i807[3]
  i806.LineHeight = i807[4]
  i806.Baseline = i807[5]
  i806.Ascender = i807[6]
  i806.CapHeight = i807[7]
  i806.Descender = i807[8]
  i806.CenterLine = i807[9]
  i806.SuperscriptOffset = i807[10]
  i806.SubscriptOffset = i807[11]
  i806.SubSize = i807[12]
  i806.Underline = i807[13]
  i806.UnderlineThickness = i807[14]
  i806.strikethrough = i807[15]
  i806.strikethroughThickness = i807[16]
  i806.TabWidth = i807[17]
  i806.Padding = i807[18]
  i806.AtlasWidth = i807[19]
  i806.AtlasHeight = i807[20]
  return i806
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i810 = root || request.c( 'TMPro.TMP_Glyph' )
  var i811 = data
  i810.id = i811[0]
  i810.x = i811[1]
  i810.y = i811[2]
  i810.width = i811[3]
  i810.height = i811[4]
  i810.xOffset = i811[5]
  i810.yOffset = i811[6]
  i810.xAdvance = i811[7]
  i810.scale = i811[8]
  return i810
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i812 = root || request.c( 'TMPro.KerningTable' )
  var i813 = data
  var i815 = i813[0]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i815.length; i += 1) {
    i814.add(request.d('TMPro.KerningPair', i815[i + 0]));
  }
  i812.kerningPairs = i814
  return i812
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i818 = root || request.c( 'TMPro.KerningPair' )
  var i819 = data
  i818.xOffset = i819[0]
  i818.m_FirstGlyph = i819[1]
  i818.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i819[2], i818.m_FirstGlyphAdjustments)
  i818.m_SecondGlyph = i819[3]
  i818.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i819[4], i818.m_SecondGlyphAdjustments)
  i818.m_IgnoreSpacingAdjustments = !!i819[5]
  return i818
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i820 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i821 = data
  var i823 = i821[0]
  var i822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i823.length; i += 1) {
    i822.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i823[i + 0]));
  }
  i820.m_GlyphPairAdjustmentRecords = i822
  return i820
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i826 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i827 = data
  i826.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i827[0], i826.m_FirstAdjustmentRecord)
  i826.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i827[1], i826.m_SecondAdjustmentRecord)
  i826.m_FeatureLookupFlags = i827[2]
  return i826
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i830 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i831 = data
  i830.sourceFontFileName = i831[0]
  i830.sourceFontFileGUID = i831[1]
  i830.pointSizeSamplingMode = i831[2]
  i830.pointSize = i831[3]
  i830.padding = i831[4]
  i830.packingMode = i831[5]
  i830.atlasWidth = i831[6]
  i830.atlasHeight = i831[7]
  i830.characterSetSelectionMode = i831[8]
  i830.characterSequence = i831[9]
  i830.referencedFontAssetGUID = i831[10]
  i830.referencedTextAssetGUID = i831[11]
  i830.fontStyle = i831[12]
  i830.fontStyleModifier = i831[13]
  i830.renderMode = i831[14]
  i830.includeFontFeatures = !!i831[15]
  return i830
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i834 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'regularTypeface')
  request.r(i835[2], i835[3], 0, i834, 'italicTypeface')
  return i834
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i836 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i837 = data
  i836.useSafeMode = !!i837[0]
  i836.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i837[1], i836.safeModeOptions)
  i836.timeScale = i837[2]
  i836.unscaledTimeScale = i837[3]
  i836.useSmoothDeltaTime = !!i837[4]
  i836.maxSmoothUnscaledTime = i837[5]
  i836.rewindCallbackMode = i837[6]
  i836.showUnityEditorReport = !!i837[7]
  i836.logBehaviour = i837[8]
  i836.drawGizmos = !!i837[9]
  i836.defaultRecyclable = !!i837[10]
  i836.defaultAutoPlay = i837[11]
  i836.defaultUpdateType = i837[12]
  i836.defaultTimeScaleIndependent = !!i837[13]
  i836.defaultEaseType = i837[14]
  i836.defaultEaseOvershootOrAmplitude = i837[15]
  i836.defaultEasePeriod = i837[16]
  i836.defaultAutoKill = !!i837[17]
  i836.defaultLoopType = i837[18]
  i836.debugMode = !!i837[19]
  i836.debugStoreTargetId = !!i837[20]
  i836.showPreviewPanel = !!i837[21]
  i836.storeSettingsLocation = i837[22]
  i836.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i837[23], i836.modules)
  i836.createASMDEF = !!i837[24]
  i836.showPlayingTweens = !!i837[25]
  i836.showPausedTweens = !!i837[26]
  return i836
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i838 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i839 = data
  i838.logBehaviour = i839[0]
  i838.nestedTweenFailureBehaviour = i839[1]
  return i838
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i840 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i841 = data
  i840.showPanel = !!i841[0]
  i840.audioEnabled = !!i841[1]
  i840.physicsEnabled = !!i841[2]
  i840.physics2DEnabled = !!i841[3]
  i840.spriteEnabled = !!i841[4]
  i840.uiEnabled = !!i841[5]
  i840.textMeshProEnabled = !!i841[6]
  i840.tk2DEnabled = !!i841[7]
  i840.deAudioEnabled = !!i841[8]
  i840.deUnityExtendedEnabled = !!i841[9]
  i840.epoOutlineEnabled = !!i841[10]
  return i840
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.TMP_Settings' )
  var i843 = data
  i842.m_enableWordWrapping = !!i843[0]
  i842.m_enableKerning = !!i843[1]
  i842.m_enableExtraPadding = !!i843[2]
  i842.m_enableTintAllSprites = !!i843[3]
  i842.m_enableParseEscapeCharacters = !!i843[4]
  i842.m_EnableRaycastTarget = !!i843[5]
  i842.m_GetFontFeaturesAtRuntime = !!i843[6]
  i842.m_missingGlyphCharacter = i843[7]
  i842.m_warningsDisabled = !!i843[8]
  request.r(i843[9], i843[10], 0, i842, 'm_defaultFontAsset')
  i842.m_defaultFontAssetPath = i843[11]
  i842.m_defaultFontSize = i843[12]
  i842.m_defaultAutoSizeMinRatio = i843[13]
  i842.m_defaultAutoSizeMaxRatio = i843[14]
  i842.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i843[15], i843[16] )
  i842.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i843[17], i843[18] )
  i842.m_autoSizeTextContainer = !!i843[19]
  i842.m_IsTextObjectScaleStatic = !!i843[20]
  var i845 = i843[21]
  var i844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 1, i844, '')
  }
  i842.m_fallbackFontAssets = i844
  i842.m_matchMaterialPreset = !!i843[22]
  request.r(i843[23], i843[24], 0, i842, 'm_defaultSpriteAsset')
  i842.m_defaultSpriteAssetPath = i843[25]
  i842.m_enableEmojiSupport = !!i843[26]
  i842.m_MissingCharacterSpriteUnicode = i843[27]
  i842.m_defaultColorGradientPresetsPath = i843[28]
  request.r(i843[29], i843[30], 0, i842, 'm_defaultStyleSheet')
  i842.m_StyleSheetsResourcePath = i843[31]
  request.r(i843[32], i843[33], 0, i842, 'm_leadingCharacters')
  request.r(i843[34], i843[35], 0, i842, 'm_followingCharacters')
  i842.m_UseModernHangulLineBreakingRules = !!i843[36]
  return i842
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'spriteSheet')
  var i849 = i847[2]
  var i848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i849.length; i += 1) {
    i848.add(request.d('TMPro.TMP_Sprite', i849[i + 0]));
  }
  i846.spriteInfoList = i848
  var i851 = i847[3]
  var i850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 1, i850, '')
  }
  i846.fallbackSpriteAssets = i850
  i846.hashCode = i847[4]
  request.r(i847[5], i847[6], 0, i846, 'material')
  i846.materialHashCode = i847[7]
  i846.m_Version = i847[8]
  i846.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i847[9], i846.m_FaceInfo)
  var i853 = i847[10]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i853.length; i += 1) {
    i852.add(request.d('TMPro.TMP_SpriteCharacter', i853[i + 0]));
  }
  i846.m_SpriteCharacterTable = i852
  var i855 = i847[11]
  var i854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i855.length; i += 1) {
    i854.add(request.d('TMPro.TMP_SpriteGlyph', i855[i + 0]));
  }
  i846.m_SpriteGlyphTable = i854
  return i846
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i858 = root || request.c( 'TMPro.TMP_Sprite' )
  var i859 = data
  i858.name = i859[0]
  i858.hashCode = i859[1]
  i858.unicode = i859[2]
  i858.pivot = new pc.Vec2( i859[3], i859[4] )
  request.r(i859[5], i859[6], 0, i858, 'sprite')
  i858.id = i859[7]
  i858.x = i859[8]
  i858.y = i859[9]
  i858.width = i859[10]
  i858.height = i859[11]
  i858.xOffset = i859[12]
  i858.yOffset = i859[13]
  i858.xAdvance = i859[14]
  i858.scale = i859[15]
  return i858
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i864 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i865 = data
  i864.m_Name = i865[0]
  i864.m_HashCode = i865[1]
  i864.m_ElementType = i865[2]
  i864.m_Unicode = i865[3]
  i864.m_GlyphIndex = i865[4]
  i864.m_Scale = i865[5]
  return i864
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i868 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'sprite')
  i868.m_Index = i869[2]
  i868.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i869[3], i868.m_Metrics)
  i868.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i869[4], i868.m_GlyphRect)
  i868.m_Scale = i869[5]
  i868.m_AtlasIndex = i869[6]
  i868.m_ClassDefinitionType = i869[7]
  return i868
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i871 = data
  var i873 = i871[0]
  var i872 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i873.length; i += 1) {
    i872.add(request.d('TMPro.TMP_Style', i873[i + 0]));
  }
  i870.m_StyleList = i872
  return i870
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i876 = root || request.c( 'TMPro.TMP_Style' )
  var i877 = data
  i876.m_Name = i877[0]
  i876.m_HashCode = i877[1]
  i876.m_OpeningDefinition = i877[2]
  i876.m_ClosingDefinition = i877[3]
  i876.m_OpeningTagArray = i877[4]
  i876.m_ClosingTagArray = i877[5]
  i876.m_OpeningTagUnicodeArray = i877[6]
  i876.m_ClosingTagUnicodeArray = i877[7]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i879 = data
  var i881 = i879[0]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i881[i + 0]) );
  }
  i878.files = i880
  i878.componentToPrefabIds = i879[1]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i885 = data
  i884.path = i885[0]
  request.r(i885[1], i885[2], 0, i884, 'unityObject')
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i887 = data
  var i889 = i887[0]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i889[i + 0]) );
  }
  i886.scriptsExecutionOrder = i888
  var i891 = i887[1]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i891[i + 0]) );
  }
  i886.sortingLayers = i890
  var i893 = i887[2]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i893[i + 0]) );
  }
  i886.cullingLayers = i892
  i886.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i887[3], i886.timeSettings)
  i886.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i887[4], i886.physicsSettings)
  i886.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i887[5], i886.physics2DSettings)
  i886.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i887[6], i886.qualitySettings)
  i886.enableRealtimeShadows = !!i887[7]
  i886.enableAutoInstancing = !!i887[8]
  i886.enableStaticBatching = !!i887[9]
  i886.enableDynamicBatching = !!i887[10]
  i886.lightmapEncodingQuality = i887[11]
  i886.desiredColorSpace = i887[12]
  var i895 = i887[13]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( i895[i + 0] );
  }
  i886.allTags = i894
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i899 = data
  i898.name = i899[0]
  i898.value = i899[1]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i903 = data
  i902.id = i903[0]
  i902.name = i903[1]
  i902.value = i903[2]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i907 = data
  i906.id = i907[0]
  i906.name = i907[1]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i909 = data
  i908.fixedDeltaTime = i909[0]
  i908.maximumDeltaTime = i909[1]
  i908.timeScale = i909[2]
  i908.maximumParticleTimestep = i909[3]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i911 = data
  i910.gravity = new pc.Vec3( i911[0], i911[1], i911[2] )
  i910.defaultSolverIterations = i911[3]
  i910.bounceThreshold = i911[4]
  i910.autoSyncTransforms = !!i911[5]
  i910.autoSimulation = !!i911[6]
  var i913 = i911[7]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i913[i + 0]) );
  }
  i910.collisionMatrix = i912
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i917 = data
  i916.enabled = !!i917[0]
  i916.layerId = i917[1]
  i916.otherLayerId = i917[2]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'material')
  i918.gravity = new pc.Vec2( i919[2], i919[3] )
  i918.positionIterations = i919[4]
  i918.velocityIterations = i919[5]
  i918.velocityThreshold = i919[6]
  i918.maxLinearCorrection = i919[7]
  i918.maxAngularCorrection = i919[8]
  i918.maxTranslationSpeed = i919[9]
  i918.maxRotationSpeed = i919[10]
  i918.baumgarteScale = i919[11]
  i918.baumgarteTOIScale = i919[12]
  i918.timeToSleep = i919[13]
  i918.linearSleepTolerance = i919[14]
  i918.angularSleepTolerance = i919[15]
  i918.defaultContactOffset = i919[16]
  i918.autoSimulation = !!i919[17]
  i918.queriesHitTriggers = !!i919[18]
  i918.queriesStartInColliders = !!i919[19]
  i918.callbacksOnDisable = !!i919[20]
  i918.reuseCollisionCallbacks = !!i919[21]
  i918.autoSyncTransforms = !!i919[22]
  var i921 = i919[23]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i921[i + 0]) );
  }
  i918.collisionMatrix = i920
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i925 = data
  i924.enabled = !!i925[0]
  i924.layerId = i925[1]
  i924.otherLayerId = i925[2]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i927 = data
  var i929 = i927[0]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i929[i + 0]) );
  }
  i926.qualityLevels = i928
  var i931 = i927[1]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( i931[i + 0] );
  }
  i926.names = i930
  i926.shadows = i927[2]
  i926.anisotropicFiltering = i927[3]
  i926.antiAliasing = i927[4]
  i926.lodBias = i927[5]
  i926.shadowCascades = i927[6]
  i926.shadowDistance = i927[7]
  i926.shadowmaskMode = i927[8]
  i926.shadowProjection = i927[9]
  i926.shadowResolution = i927[10]
  i926.softParticles = !!i927[11]
  i926.softVegetation = !!i927[12]
  i926.activeColorSpace = i927[13]
  i926.desiredColorSpace = i927[14]
  i926.masterTextureLimit = i927[15]
  i926.maxQueuedFrames = i927[16]
  i926.particleRaycastBudget = i927[17]
  i926.pixelLightCount = i927[18]
  i926.realtimeReflectionProbes = !!i927[19]
  i926.shadowCascade2Split = i927[20]
  i926.shadowCascade4Split = new pc.Vec3( i927[21], i927[22], i927[23] )
  i926.streamingMipmapsActive = !!i927[24]
  i926.vSyncCount = i927[25]
  i926.asyncUploadBufferSize = i927[26]
  i926.asyncUploadTimeSlice = i927[27]
  i926.billboardsFaceCameraPosition = !!i927[28]
  i926.shadowNearPlaneOffset = i927[29]
  i926.streamingMipmapsMemoryBudget = i927[30]
  i926.maximumLODLevel = i927[31]
  i926.streamingMipmapsAddAllCameras = !!i927[32]
  i926.streamingMipmapsMaxLevelReduction = i927[33]
  i926.streamingMipmapsRenderersPerFrame = i927[34]
  i926.resolutionScalingFixedDPIFactor = i927[35]
  i926.streamingMipmapsMaxFileIORequests = i927[36]
  i926.currentQualityLevel = i927[37]
  return i926
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

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[3],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[52],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[3],"74":[75],"76":[77],"78":[77],"9":[8],"79":[80],"81":[82],"83":[80],"84":[8],"85":[8],"11":[9],"18":[19,8],"86":[8],"10":[9],"87":[8],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"32":[8],"94":[8],"16":[19,8],"95":[8],"96":[8],"97":[8],"98":[8],"99":[19,8],"100":[8],"101":[6],"102":[6],"7":[6],"103":[6],"104":[3],"105":[3],"106":[107],"108":[3],"109":[110],"111":[8],"112":[19,8],"113":[75],"24":[19,8],"114":[115,75],"116":[75],"117":[75,118],"119":[52],"120":[60],"121":[110],"122":[123],"124":[8],"125":[75,8],"17":[8,19],"126":[8],"127":[19,8],"128":[75],"129":[19,8],"130":[8],"131":[80]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","DropZone","UnityEngine.PolygonCollider2D","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.Sprite","DG.Tweening.DOTweenAnimation","DraggableItem","UnityEngine.CanvasGroup","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "202.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BTTP_V08_ManhND_AnhPD";

Deserializers.lunaAppID = "36041";

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

Deserializers.buildID = "370543dc-9fd5-434a-ae9f-c3c2bc608554";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

