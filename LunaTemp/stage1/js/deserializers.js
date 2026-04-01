var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointSpring' )
  var i485 = data
  i484.spring = i485[0]
  i484.damper = i485[1]
  i484.targetPosition = i485[2]
  return i484
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointMotor' )
  var i487 = data
  i486.m_TargetVelocity = i487[0]
  i486.m_Force = i487[1]
  i486.m_FreeSpin = i487[2]
  return i486
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointLimits' )
  var i489 = data
  i488.m_Min = i489[0]
  i488.m_Max = i489[1]
  i488.m_Bounciness = i489[2]
  i488.m_BounceMinVelocity = i489[3]
  i488.m_ContactDistance = i489[4]
  i488.minBounce = i489[5]
  i488.maxBounce = i489[6]
  return i488
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointDrive' )
  var i491 = data
  i490.m_PositionSpring = i491[0]
  i490.m_PositionDamper = i491[1]
  i490.m_MaximumForce = i491[2]
  i490.m_UseAcceleration = i491[3]
  return i490
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i493 = data
  i492.m_Spring = i493[0]
  i492.m_Damper = i493[1]
  return i492
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i495 = data
  i494.m_Limit = i495[0]
  i494.m_Bounciness = i495[1]
  i494.m_ContactDistance = i495[2]
  return i494
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i497 = data
  i496.m_ExtremumSlip = i497[0]
  i496.m_ExtremumValue = i497[1]
  i496.m_AsymptoteSlip = i497[2]
  i496.m_AsymptoteValue = i497[3]
  i496.m_Stiffness = i497[4]
  return i496
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i499 = data
  i498.m_LowerAngle = i499[0]
  i498.m_UpperAngle = i499[1]
  return i498
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i501 = data
  i500.m_MotorSpeed = i501[0]
  i500.m_MaximumMotorTorque = i501[1]
  return i500
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i503 = data
  i502.m_DampingRatio = i503[0]
  i502.m_Frequency = i503[1]
  i502.m_Angle = i503[2]
  return i502
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i505 = data
  i504.m_LowerTranslation = i505[0]
  i504.m_UpperTranslation = i505[1]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i507 = data
  i506.name = i507[0]
  i506.width = i507[1]
  i506.height = i507[2]
  i506.mipmapCount = i507[3]
  i506.anisoLevel = i507[4]
  i506.filterMode = i507[5]
  i506.hdr = !!i507[6]
  i506.format = i507[7]
  i506.wrapMode = i507[8]
  i506.alphaIsTransparency = !!i507[9]
  i506.alphaSource = i507[10]
  i506.graphicsFormat = i507[11]
  i506.sRGBTexture = !!i507[12]
  i506.desiredColorSpace = i507[13]
  i506.wrapU = i507[14]
  i506.wrapV = i507[15]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i508 = root || new pc.UnityMaterial()
  var i509 = data
  i508.name = i509[0]
  request.r(i509[1], i509[2], 0, i508, 'shader')
  i508.renderQueue = i509[3]
  i508.enableInstancing = !!i509[4]
  var i511 = i509[5]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i511[i + 0]) );
  }
  i508.floatParameters = i510
  var i513 = i509[6]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i513[i + 0]) );
  }
  i508.colorParameters = i512
  var i515 = i509[7]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i515[i + 0]) );
  }
  i508.vectorParameters = i514
  var i517 = i509[8]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i517[i + 0]) );
  }
  i508.textureParameters = i516
  var i519 = i509[9]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i519[i + 0]) );
  }
  i508.materialFlags = i518
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i523 = data
  i522.name = i523[0]
  i522.value = i523[1]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i527 = data
  i526.name = i527[0]
  i526.value = new pc.Color(i527[1], i527[2], i527[3], i527[4])
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i531 = data
  i530.name = i531[0]
  i530.value = new pc.Vec4( i531[1], i531[2], i531[3], i531[4] )
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i535 = data
  i534.name = i535[0]
  request.r(i535[1], i535[2], 0, i534, 'value')
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i539 = data
  i538.name = i539[0]
  i538.enabled = !!i539[1]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i541 = data
  i540.name = i541[0]
  i540.index = i541[1]
  i540.startup = !!i541[2]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i543 = data
  i542.position = new pc.Vec3( i543[0], i543[1], i543[2] )
  i542.scale = new pc.Vec3( i543[3], i543[4], i543[5] )
  i542.rotation = new pc.Quat(i543[6], i543[7], i543[8], i543[9])
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i545 = data
  i544.aspect = i545[0]
  i544.orthographic = !!i545[1]
  i544.orthographicSize = i545[2]
  i544.backgroundColor = new pc.Color(i545[3], i545[4], i545[5], i545[6])
  i544.nearClipPlane = i545[7]
  i544.farClipPlane = i545[8]
  i544.fieldOfView = i545[9]
  i544.depth = i545[10]
  i544.clearFlags = i545[11]
  i544.cullingMask = i545[12]
  i544.rect = i545[13]
  request.r(i545[14], i545[15], 0, i544, 'targetTexture')
  i544.usePhysicalProperties = !!i545[16]
  i544.focalLength = i545[17]
  i544.sensorSize = new pc.Vec2( i545[18], i545[19] )
  i544.lensShift = new pc.Vec2( i545[20], i545[21] )
  i544.gateFit = i545[22]
  i544.commandBufferCount = i545[23]
  i544.cameraType = i545[24]
  i544.enabled = !!i545[25]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i547 = data
  i546.name = i547[0]
  i546.tagId = i547[1]
  i546.enabled = !!i547[2]
  i546.isStatic = !!i547[3]
  i546.layer = i547[4]
  return i546
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i549 = data
  request.r(i549[0], i549[1], 0, i548, 'm_FirstSelected')
  i548.m_sendNavigationEvents = !!i549[2]
  i548.m_DragThreshold = i549[3]
  return i548
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i551 = data
  i550.m_HorizontalAxis = i551[0]
  i550.m_VerticalAxis = i551[1]
  i550.m_SubmitButton = i551[2]
  i550.m_CancelButton = i551[3]
  i550.m_InputActionsPerSecond = i551[4]
  i550.m_RepeatDelay = i551[5]
  i550.m_ForceModuleActive = !!i551[6]
  i550.m_SendPointerHoverToParent = !!i551[7]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i553 = data
  i552.pivot = new pc.Vec2( i553[0], i553[1] )
  i552.anchorMin = new pc.Vec2( i553[2], i553[3] )
  i552.anchorMax = new pc.Vec2( i553[4], i553[5] )
  i552.sizeDelta = new pc.Vec2( i553[6], i553[7] )
  i552.anchoredPosition3D = new pc.Vec3( i553[8], i553[9], i553[10] )
  i552.rotation = new pc.Quat(i553[11], i553[12], i553[13], i553[14])
  i552.scale = new pc.Vec3( i553[15], i553[16], i553[17] )
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i555 = data
  i554.planeDistance = i555[0]
  i554.referencePixelsPerUnit = i555[1]
  i554.isFallbackOverlay = !!i555[2]
  i554.renderMode = i555[3]
  i554.renderOrder = i555[4]
  i554.sortingLayerName = i555[5]
  i554.sortingOrder = i555[6]
  i554.scaleFactor = i555[7]
  request.r(i555[8], i555[9], 0, i554, 'worldCamera')
  i554.overrideSorting = !!i555[10]
  i554.pixelPerfect = !!i555[11]
  i554.targetDisplay = i555[12]
  i554.overridePixelPerfect = !!i555[13]
  i554.enabled = !!i555[14]
  return i554
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i557 = data
  i556.m_UiScaleMode = i557[0]
  i556.m_ReferencePixelsPerUnit = i557[1]
  i556.m_ScaleFactor = i557[2]
  i556.m_ReferenceResolution = new pc.Vec2( i557[3], i557[4] )
  i556.m_ScreenMatchMode = i557[5]
  i556.m_MatchWidthOrHeight = i557[6]
  i556.m_PhysicalUnit = i557[7]
  i556.m_FallbackScreenDPI = i557[8]
  i556.m_DefaultSpriteDPI = i557[9]
  i556.m_DynamicPixelsPerUnit = i557[10]
  i556.m_PresetInfoIsWorld = !!i557[11]
  return i556
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i559 = data
  i558.m_IgnoreReversedGraphics = !!i559[0]
  i558.m_BlockingObjects = i559[1]
  i558.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i559[2] )
  return i558
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i560 = root || request.c( 'LunaManager' )
  var i561 = data
  var i563 = i561[0]
  var i562 = []
  for(var i = 0; i < i563.length; i += 2) {
  request.r(i563[i + 0], i563[i + 1], 2, i562, '')
  }
  i560.lstBtnInstall = i562
  request.r(i561[1], i561[2], 0, i560, 'WinGO')
  request.r(i561[3], i561[4], 0, i560, 'LoseGO')
  request.r(i561[5], i561[6], 0, i560, 'StartCard')
  request.r(i561[7], i561[8], 0, i560, 'EndCard')
  request.r(i561[9], i561[10], 0, i560, 'Parent')
  i560.isDrag = !!i561[11]
  i560.timeDrag = i561[12]
  i560.countPlay = i561[13]
  i560.countPlayFinal = i561[14]
  i560.countPlayMax = i561[15]
  i560.timeDropFinal = i561[16]
  i560.colorBG = new pc.Color(i561[17], i561[18], i561[19], i561[20])
  request.r(i561[21], i561[22], 0, i560, 'texture2D')
  request.r(i561[23], i561[24], 0, i560, 'rawImageBG')
  var i565 = i561[25]
  var i564 = []
  for(var i = 0; i < i565.length; i += 2) {
  request.r(i565[i + 0], i565[i + 1], 2, i564, '')
  }
  i560.skeDogs = i564
  request.r(i561[26], i561[27], 0, i560, 'textProgess')
  request.r(i561[28], i561[29], 0, i560, 'imgProgess')
  request.r(i561[30], i561[31], 0, i560, 'timeText')
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i571 = data
  i570.cullTransparentMesh = !!i571[0]
  return i570
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i573 = data
  request.r(i573[0], i573[1], 0, i572, 'm_Texture')
  i572.m_UVRect = UnityEngine.Rect.MinMaxRect(i573[2], i573[3], i573[4], i573[5])
  i572.m_Maskable = !!i573[6]
  request.r(i573[7], i573[8], 0, i572, 'm_Material')
  i572.m_Color = new pc.Color(i573[9], i573[10], i573[11], i573[12])
  i572.m_RaycastTarget = !!i573[13]
  i572.m_RaycastPadding = new pc.Vec4( i573[14], i573[15], i573[16], i573[17] )
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i575 = data
  request.r(i575[0], i575[1], 0, i574, 'clip')
  request.r(i575[2], i575[3], 0, i574, 'outputAudioMixerGroup')
  i574.playOnAwake = !!i575[4]
  i574.loop = !!i575[5]
  i574.time = i575[6]
  i574.volume = i575[7]
  i574.pitch = i575[8]
  i574.enabled = !!i575[9]
  return i574
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

Deserializers["ClickItem"] = function (request, data, root) {
  var i596 = root || request.c( 'ClickItem' )
  var i597 = data
  var i599 = i597[0]
  var i598 = []
  for(var i = 0; i < i599.length; i += 2) {
  request.r(i599[i + 0], i599[i + 1], 2, i598, '')
  }
  i596.steps = i598
  i596.currentStep = i597[1]
  i596.isProcess = !!i597[2]
  return i596
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.Button' )
  var i603 = data
  i602.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i603[0], i602.m_OnClick)
  i602.m_Navigation = request.d('UnityEngine.UI.Navigation', i603[1], i602.m_Navigation)
  i602.m_Transition = i603[2]
  i602.m_Colors = request.d('UnityEngine.UI.ColorBlock', i603[3], i602.m_Colors)
  i602.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i603[4], i602.m_SpriteState)
  i602.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i603[5], i602.m_AnimationTriggers)
  i602.m_Interactable = !!i603[6]
  request.r(i603[7], i603[8], 0, i602, 'm_TargetGraphic')
  return i602
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i605 = data
  i604.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i605[0], i604.m_PersistentCalls)
  return i604
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i607 = data
  var i609 = i607[0]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i609.length; i += 1) {
    i608.add(request.d('UnityEngine.Events.PersistentCall', i609[i + 0]));
  }
  i606.m_Calls = i608
  return i606
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'm_Target')
  i612.m_TargetAssemblyTypeName = i613[2]
  i612.m_MethodName = i613[3]
  i612.m_Mode = i613[4]
  i612.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i613[5], i612.m_Arguments)
  i612.m_CallState = i613[6]
  return i612
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i615 = data
  i614.m_Mode = i615[0]
  i614.m_WrapAround = !!i615[1]
  request.r(i615[2], i615[3], 0, i614, 'm_SelectOnUp')
  request.r(i615[4], i615[5], 0, i614, 'm_SelectOnDown')
  request.r(i615[6], i615[7], 0, i614, 'm_SelectOnLeft')
  request.r(i615[8], i615[9], 0, i614, 'm_SelectOnRight')
  return i614
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i617 = data
  i616.m_NormalColor = new pc.Color(i617[0], i617[1], i617[2], i617[3])
  i616.m_HighlightedColor = new pc.Color(i617[4], i617[5], i617[6], i617[7])
  i616.m_PressedColor = new pc.Color(i617[8], i617[9], i617[10], i617[11])
  i616.m_SelectedColor = new pc.Color(i617[12], i617[13], i617[14], i617[15])
  i616.m_DisabledColor = new pc.Color(i617[16], i617[17], i617[18], i617[19])
  i616.m_ColorMultiplier = i617[20]
  i616.m_FadeDuration = i617[21]
  return i616
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'm_HighlightedSprite')
  request.r(i619[2], i619[3], 0, i618, 'm_PressedSprite')
  request.r(i619[4], i619[5], 0, i618, 'm_SelectedSprite')
  request.r(i619[6], i619[7], 0, i618, 'm_DisabledSprite')
  return i618
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i621 = data
  i620.m_NormalTrigger = i621[0]
  i620.m_HighlightedTrigger = i621[1]
  i620.m_PressedTrigger = i621[2]
  i620.m_SelectedTrigger = i621[3]
  i620.m_DisabledTrigger = i621[4]
  return i620
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i622 = root || request.c( 'DraggableItem' )
  var i623 = data
  i622.idDrag = i623[0]
  i622.isProcess = !!i623[1]
  i622.isLose = !!i623[2]
  i622.isHide = !!i623[3]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i625 = data
  i624.m_Alpha = i625[0]
  i624.m_Interactable = !!i625[1]
  i624.m_BlocksRaycasts = !!i625[2]
  i624.m_IgnoreParentGroups = !!i625[3]
  i624.enabled = !!i625[4]
  return i624
}

Deserializers["DropZone"] = function (request, data, root) {
  var i626 = root || request.c( 'DropZone' )
  var i627 = data
  i626.idDrop = i627[0]
  var i629 = i627[1]
  var i628 = []
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 2, i628, '')
  }
  i626.steps = i628
  request.r(i627[2], i627[3], 0, i626, 'stepLose')
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i631 = data
  i630.usedByComposite = !!i631[0]
  i630.autoTiling = !!i631[1]
  var i633 = i631[2]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
  var i635 = i633[i + 0]
  var i634 = []
  for(var i = 0; i < i635.length; i += 2) {
    i634.push( new pc.Vec2( i635[i + 0], i635[i + 1] ) );
  }
    i632.push( i634 );
  }
  i630.points = i632
  i630.enabled = !!i631[3]
  i630.isTrigger = !!i631[4]
  i630.usedByEffector = !!i631[5]
  i630.density = i631[6]
  i630.offset = new pc.Vec2( i631[7], i631[8] )
  request.r(i631[9], i631[10], 0, i630, 'material')
  return i630
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i642 = root || request.c( 'MixSkeletonSkin' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'skeletonAnimation')
  var i645 = i643[2]
  var i644 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i645.length; i += 1) {
    i644.add(i645[i + 0]);
  }
  i642.skinNames = i644
  i642.defaultAnim = i643[3]
  return i642
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i648 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i649 = data
  i648.targetIsSelf = !!i649[0]
  request.r(i649[1], i649[2], 0, i648, 'targetGO')
  i648.tweenTargetIsTargetGO = !!i649[3]
  i648.delay = i649[4]
  i648.duration = i649[5]
  i648.easeType = i649[6]
  i648.easeCurve = new pc.AnimationCurve( { keys_flow: i649[7] } )
  i648.loopType = i649[8]
  i648.loops = i649[9]
  i648.id = i649[10]
  i648.isRelative = !!i649[11]
  i648.isFrom = !!i649[12]
  i648.isIndependentUpdate = !!i649[13]
  i648.autoKill = !!i649[14]
  i648.autoGenerate = !!i649[15]
  i648.isActive = !!i649[16]
  i648.isValid = !!i649[17]
  request.r(i649[18], i649[19], 0, i648, 'target')
  i648.animationType = i649[20]
  i648.targetType = i649[21]
  i648.forcedTargetType = i649[22]
  i648.autoPlay = !!i649[23]
  i648.useTargetAsV3 = !!i649[24]
  i648.endValueFloat = i649[25]
  i648.endValueV3 = new pc.Vec3( i649[26], i649[27], i649[28] )
  i648.endValueV2 = new pc.Vec2( i649[29], i649[30] )
  i648.endValueColor = new pc.Color(i649[31], i649[32], i649[33], i649[34])
  i648.endValueString = i649[35]
  i648.endValueRect = UnityEngine.Rect.MinMaxRect(i649[36], i649[37], i649[38], i649[39])
  request.r(i649[40], i649[41], 0, i648, 'endValueTransform')
  i648.optionalBool0 = !!i649[42]
  i648.optionalBool1 = !!i649[43]
  i648.optionalFloat0 = i649[44]
  i648.optionalInt0 = i649[45]
  i648.optionalRotationMode = i649[46]
  i648.optionalScrambleMode = i649[47]
  i648.optionalShakeRandomnessMode = i649[48]
  i648.optionalString = i649[49]
  i648.updateType = i649[50]
  i648.isSpeedBased = !!i649[51]
  i648.hasOnStart = !!i649[52]
  i648.hasOnPlay = !!i649[53]
  i648.hasOnUpdate = !!i649[54]
  i648.hasOnStepComplete = !!i649[55]
  i648.hasOnComplete = !!i649[56]
  i648.hasOnTweenCreated = !!i649[57]
  i648.hasOnRewind = !!i649[58]
  i648.onStart = request.d('UnityEngine.Events.UnityEvent', i649[59], i648.onStart)
  i648.onPlay = request.d('UnityEngine.Events.UnityEvent', i649[60], i648.onPlay)
  i648.onUpdate = request.d('UnityEngine.Events.UnityEvent', i649[61], i648.onUpdate)
  i648.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i649[62], i648.onStepComplete)
  i648.onComplete = request.d('UnityEngine.Events.UnityEvent', i649[63], i648.onComplete)
  i648.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i649[64], i648.onTweenCreated)
  i648.onRewind = request.d('UnityEngine.Events.UnityEvent', i649[65], i648.onRewind)
  return i648
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i651 = data
  i650.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i651[0], i650.m_PersistentCalls)
  return i650
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'm_ObjectArgument')
  i652.m_ObjectArgumentAssemblyTypeName = i653[2]
  i652.m_IntArgument = i653[3]
  i652.m_FloatArgument = i653[4]
  i652.m_StringArgument = i653[5]
  i652.m_BoolArgument = !!i653[6]
  return i652
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i654 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i655 = data
  i654.m_hasFontAssetChanged = !!i655[0]
  request.r(i655[1], i655[2], 0, i654, 'm_baseMaterial')
  i654.m_maskOffset = new pc.Vec4( i655[3], i655[4], i655[5], i655[6] )
  i654.m_text = i655[7]
  i654.m_isRightToLeft = !!i655[8]
  request.r(i655[9], i655[10], 0, i654, 'm_fontAsset')
  request.r(i655[11], i655[12], 0, i654, 'm_sharedMaterial')
  var i657 = i655[13]
  var i656 = []
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 2, i656, '')
  }
  i654.m_fontSharedMaterials = i656
  request.r(i655[14], i655[15], 0, i654, 'm_fontMaterial')
  var i659 = i655[16]
  var i658 = []
  for(var i = 0; i < i659.length; i += 2) {
  request.r(i659[i + 0], i659[i + 1], 2, i658, '')
  }
  i654.m_fontMaterials = i658
  i654.m_fontColor32 = UnityEngine.Color32.ConstructColor(i655[17], i655[18], i655[19], i655[20])
  i654.m_fontColor = new pc.Color(i655[21], i655[22], i655[23], i655[24])
  i654.m_enableVertexGradient = !!i655[25]
  i654.m_colorMode = i655[26]
  i654.m_fontColorGradient = request.d('TMPro.VertexGradient', i655[27], i654.m_fontColorGradient)
  request.r(i655[28], i655[29], 0, i654, 'm_fontColorGradientPreset')
  request.r(i655[30], i655[31], 0, i654, 'm_spriteAsset')
  i654.m_tintAllSprites = !!i655[32]
  request.r(i655[33], i655[34], 0, i654, 'm_StyleSheet')
  i654.m_TextStyleHashCode = i655[35]
  i654.m_overrideHtmlColors = !!i655[36]
  i654.m_faceColor = UnityEngine.Color32.ConstructColor(i655[37], i655[38], i655[39], i655[40])
  i654.m_fontSize = i655[41]
  i654.m_fontSizeBase = i655[42]
  i654.m_fontWeight = i655[43]
  i654.m_enableAutoSizing = !!i655[44]
  i654.m_fontSizeMin = i655[45]
  i654.m_fontSizeMax = i655[46]
  i654.m_fontStyle = i655[47]
  i654.m_HorizontalAlignment = i655[48]
  i654.m_VerticalAlignment = i655[49]
  i654.m_textAlignment = i655[50]
  i654.m_characterSpacing = i655[51]
  i654.m_wordSpacing = i655[52]
  i654.m_lineSpacing = i655[53]
  i654.m_lineSpacingMax = i655[54]
  i654.m_paragraphSpacing = i655[55]
  i654.m_charWidthMaxAdj = i655[56]
  i654.m_enableWordWrapping = !!i655[57]
  i654.m_wordWrappingRatios = i655[58]
  i654.m_overflowMode = i655[59]
  request.r(i655[60], i655[61], 0, i654, 'm_linkedTextComponent')
  request.r(i655[62], i655[63], 0, i654, 'parentLinkedComponent')
  i654.m_enableKerning = !!i655[64]
  i654.m_enableExtraPadding = !!i655[65]
  i654.checkPaddingRequired = !!i655[66]
  i654.m_isRichText = !!i655[67]
  i654.m_parseCtrlCharacters = !!i655[68]
  i654.m_isOrthographic = !!i655[69]
  i654.m_isCullingEnabled = !!i655[70]
  i654.m_horizontalMapping = i655[71]
  i654.m_verticalMapping = i655[72]
  i654.m_uvLineOffset = i655[73]
  i654.m_geometrySortingOrder = i655[74]
  i654.m_IsTextObjectScaleStatic = !!i655[75]
  i654.m_VertexBufferAutoSizeReduction = !!i655[76]
  i654.m_useMaxVisibleDescender = !!i655[77]
  i654.m_pageToDisplay = i655[78]
  i654.m_margin = new pc.Vec4( i655[79], i655[80], i655[81], i655[82] )
  i654.m_isUsingLegacyAnimationComponent = !!i655[83]
  i654.m_isVolumetricText = !!i655[84]
  i654.m_Maskable = !!i655[85]
  request.r(i655[86], i655[87], 0, i654, 'm_Material')
  i654.m_Color = new pc.Color(i655[88], i655[89], i655[90], i655[91])
  i654.m_RaycastTarget = !!i655[92]
  i654.m_RaycastPadding = new pc.Vec4( i655[93], i655[94], i655[95], i655[96] )
  return i654
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i662 = root || request.c( 'TMPro.VertexGradient' )
  var i663 = data
  i662.topLeft = new pc.Color(i663[0], i663[1], i663[2], i663[3])
  i662.topRight = new pc.Color(i663[4], i663[5], i663[6], i663[7])
  i662.bottomLeft = new pc.Color(i663[8], i663[9], i663[10], i663[11])
  i662.bottomRight = new pc.Color(i663[12], i663[13], i663[14], i663[15])
  return i662
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.Mask' )
  var i665 = data
  i664.m_ShowMaskGraphic = !!i665[0]
  return i664
}

Deserializers["AudioController"] = function (request, data, root) {
  var i666 = root || request.c( 'AudioController' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'bgmSource')
  request.r(i667[2], i667[3], 0, i666, 'sfxSource')
  var i669 = i667[4]
  var i668 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i669.length; i += 1) {
    i668.add(request.d('AudioEntry', i669[i + 0]));
  }
  i666.audioEntries = i668
  return i666
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i672 = root || request.c( 'AudioEntry' )
  var i673 = data
  i672.key = i673[0]
  request.r(i673[1], i673[2], 0, i672, 'clip')
  i672.volume = i673[3]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i675 = data
  i674.ambientIntensity = i675[0]
  i674.reflectionIntensity = i675[1]
  i674.ambientMode = i675[2]
  i674.ambientLight = new pc.Color(i675[3], i675[4], i675[5], i675[6])
  i674.ambientSkyColor = new pc.Color(i675[7], i675[8], i675[9], i675[10])
  i674.ambientGroundColor = new pc.Color(i675[11], i675[12], i675[13], i675[14])
  i674.ambientEquatorColor = new pc.Color(i675[15], i675[16], i675[17], i675[18])
  i674.fogColor = new pc.Color(i675[19], i675[20], i675[21], i675[22])
  i674.fogEndDistance = i675[23]
  i674.fogStartDistance = i675[24]
  i674.fogDensity = i675[25]
  i674.fog = !!i675[26]
  request.r(i675[27], i675[28], 0, i674, 'skybox')
  i674.fogMode = i675[29]
  var i677 = i675[30]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i677[i + 0]) );
  }
  i674.lightmaps = i676
  i674.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i675[31], i674.lightProbes)
  i674.lightmapsMode = i675[32]
  i674.mixedBakeMode = i675[33]
  i674.environmentLightingMode = i675[34]
  i674.ambientProbe = new pc.SphericalHarmonicsL2(i675[35])
  i674.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i675[36])
  i674.useReferenceAmbientProbe = !!i675[37]
  request.r(i675[38], i675[39], 0, i674, 'customReflection')
  request.r(i675[40], i675[41], 0, i674, 'defaultReflection')
  i674.defaultReflectionMode = i675[42]
  i674.defaultReflectionResolution = i675[43]
  i674.sunLightObjectId = i675[44]
  i674.pixelLightCount = i675[45]
  i674.defaultReflectionHDR = !!i675[46]
  i674.hasLightDataAsset = !!i675[47]
  i674.hasManualGenerate = !!i675[48]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'lightmapColor')
  request.r(i681[2], i681[3], 0, i680, 'lightmapDirection')
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i682 = root || new UnityEngine.LightProbes()
  var i683 = data
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i691 = data
  var i693 = i691[0]
  var i692 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i693.length; i += 1) {
    i692.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i693[i + 0]));
  }
  i690.ShaderCompilationErrors = i692
  i690.name = i691[1]
  i690.guid = i691[2]
  var i695 = i691[3]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( i695[i + 0] );
  }
  i690.shaderDefinedKeywords = i694
  var i697 = i691[4]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i697[i + 0]) );
  }
  i690.passes = i696
  var i699 = i691[5]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i699[i + 0]) );
  }
  i690.usePasses = i698
  var i701 = i691[6]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i701[i + 0]) );
  }
  i690.defaultParameterValues = i700
  request.r(i691[7], i691[8], 0, i690, 'unityFallbackShader')
  i690.readDepth = !!i691[9]
  i690.isCreatedByShaderGraph = !!i691[10]
  i690.disableBatching = !!i691[11]
  i690.compiled = !!i691[12]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i705 = data
  i704.shaderName = i705[0]
  i704.errorMessage = i705[1]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i708 = root || new pc.UnityShaderPass()
  var i709 = data
  i708.id = i709[0]
  i708.subShaderIndex = i709[1]
  i708.name = i709[2]
  i708.passType = i709[3]
  i708.grabPassTextureName = i709[4]
  i708.usePass = !!i709[5]
  i708.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[6], i708.zTest)
  i708.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[7], i708.zWrite)
  i708.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[8], i708.culling)
  i708.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i709[9], i708.blending)
  i708.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i709[10], i708.alphaBlending)
  i708.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[11], i708.colorWriteMask)
  i708.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[12], i708.offsetUnits)
  i708.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[13], i708.offsetFactor)
  i708.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[14], i708.stencilRef)
  i708.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[15], i708.stencilReadMask)
  i708.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[16], i708.stencilWriteMask)
  i708.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i709[17], i708.stencilOp)
  i708.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i709[18], i708.stencilOpFront)
  i708.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i709[19], i708.stencilOpBack)
  var i711 = i709[20]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i711[i + 0]) );
  }
  i708.tags = i710
  var i713 = i709[21]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( i713[i + 0] );
  }
  i708.passDefinedKeywords = i712
  var i715 = i709[22]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i715[i + 0]) );
  }
  i708.passDefinedKeywordGroups = i714
  var i717 = i709[23]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i717[i + 0]) );
  }
  i708.variants = i716
  var i719 = i709[24]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i719[i + 0]) );
  }
  i708.excludedVariants = i718
  i708.hasDepthReader = !!i709[25]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i721 = data
  i720.val = i721[0]
  i720.name = i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i723 = data
  i722.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[0], i722.src)
  i722.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[1], i722.dst)
  i722.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[2], i722.op)
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i725 = data
  i724.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[0], i724.pass)
  i724.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[1], i724.fail)
  i724.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[2], i724.zFail)
  i724.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[3], i724.comp)
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i729 = data
  i728.name = i729[0]
  i728.value = i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i733 = data
  var i735 = i733[0]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( i735[i + 0] );
  }
  i732.keywords = i734
  i732.hasDiscard = !!i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i739 = data
  i738.passId = i739[0]
  i738.subShaderIndex = i739[1]
  var i741 = i739[2]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( i741[i + 0] );
  }
  i738.keywords = i740
  i738.vertexProgram = i739[3]
  i738.fragmentProgram = i739[4]
  i738.exportedForWebGl2 = !!i739[5]
  i738.readDepth = !!i739[6]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'shader')
  i744.pass = i745[2]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i749 = data
  i748.name = i749[0]
  i748.type = i749[1]
  i748.value = new pc.Vec4( i749[2], i749[3], i749[4], i749[5] )
  i748.textureValue = i749[6]
  i748.shaderPropertyFlag = i749[7]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i751 = data
  i750.name = i751[0]
  request.r(i751[1], i751[2], 0, i750, 'texture')
  i750.aabb = i751[3]
  i750.vertices = i751[4]
  i750.triangles = i751[5]
  i750.textureRect = UnityEngine.Rect.MinMaxRect(i751[6], i751[7], i751[8], i751[9])
  i750.packedRect = UnityEngine.Rect.MinMaxRect(i751[10], i751[11], i751[12], i751[13])
  i750.border = new pc.Vec4( i751[14], i751[15], i751[16], i751[17] )
  i750.transparency = i751[18]
  i750.bounds = i751[19]
  i750.pixelsPerUnit = i751[20]
  i750.textureWidth = i751[21]
  i750.textureHeight = i751[22]
  i750.nativeSize = new pc.Vec2( i751[23], i751[24] )
  i750.pivot = new pc.Vec2( i751[25], i751[26] )
  i750.textureRectOffset = new pc.Vec2( i751[27], i751[28] )
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i753 = data
  i752.name = i753[0]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i755 = data
  i754.name = i755[0]
  i754.ascent = i755[1]
  i754.originalLineHeight = i755[2]
  i754.fontSize = i755[3]
  var i757 = i755[4]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i757[i + 0]) );
  }
  i754.characterInfo = i756
  request.r(i755[5], i755[6], 0, i754, 'texture')
  i754.originalFontSize = i755[7]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i761 = data
  i760.index = i761[0]
  i760.advance = i761[1]
  i760.bearing = i761[2]
  i760.glyphWidth = i761[3]
  i760.glyphHeight = i761[4]
  i760.minX = i761[5]
  i760.maxX = i761[6]
  i760.minY = i761[7]
  i760.maxY = i761[8]
  i760.uvBottomLeftX = i761[9]
  i760.uvBottomLeftY = i761[10]
  i760.uvBottomRightX = i761[11]
  i760.uvBottomRightY = i761[12]
  i760.uvTopLeftX = i761[13]
  i760.uvTopLeftY = i761[14]
  i760.uvTopRightX = i761[15]
  i760.uvTopRightY = i761[16]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i763 = data
  i762.name = i763[0]
  i762.bytes64 = i763[1]
  i762.data = i763[2]
  return i762
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i764 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i765 = data
  var i767 = i765[0]
  var i766 = []
  for(var i = 0; i < i767.length; i += 2) {
  request.r(i767[i + 0], i767[i + 1], 2, i766, '')
  }
  i764.atlasAssets = i766
  i764.scale = i765[1]
  request.r(i765[2], i765[3], 0, i764, 'skeletonJSON')
  i764.isUpgradingBlendModeMaterials = !!i765[4]
  i764.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i765[5], i764.blendModeMaterials)
  var i769 = i765[6]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 1, i768, '')
  }
  i764.skeletonDataModifiers = i768
  var i771 = i765[7]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( i771[i + 0] );
  }
  i764.fromAnimation = i770
  var i773 = i765[8]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( i773[i + 0] );
  }
  i764.toAnimation = i772
  i764.duration = i765[9]
  i764.defaultMix = i765[10]
  request.r(i765[11], i765[12], 0, i764, 'controller')
  return i764
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i776 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i777 = data
  i776.applyAdditiveMaterial = !!i777[0]
  var i779 = i777[1]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i779[i + 0]));
  }
  i776.additiveMaterials = i778
  var i781 = i777[2]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i781.length; i += 1) {
    i780.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i781[i + 0]));
  }
  i776.multiplyMaterials = i780
  var i783 = i777[3]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i783[i + 0]));
  }
  i776.screenMaterials = i782
  i776.requiresBlendModeMaterials = !!i777[4]
  return i776
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i786 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i787 = data
  i786.pageName = i787[0]
  request.r(i787[1], i787[2], 0, i786, 'material')
  return i786
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i790 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'atlasFile')
  var i793 = i791[2]
  var i792 = []
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 2, i792, '')
  }
  i790.materials = i792
  i790.textureLoadingMode = i791[3]
  request.r(i791[4], i791[5], 0, i790, 'onDemandTextureLoader')
  return i790
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i794 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'atlas')
  i794.normalStyle = i795[2]
  i794.normalSpacingOffset = i795[3]
  i794.boldStyle = i795[4]
  i794.boldSpacing = i795[5]
  i794.italicStyle = i795[6]
  i794.tabSize = i795[7]
  i794.hashCode = i795[8]
  request.r(i795[9], i795[10], 0, i794, 'material')
  i794.materialHashCode = i795[11]
  i794.m_Version = i795[12]
  i794.m_SourceFontFileGUID = i795[13]
  request.r(i795[14], i795[15], 0, i794, 'm_SourceFontFile_EditorRef')
  request.r(i795[16], i795[17], 0, i794, 'm_SourceFontFile')
  i794.m_AtlasPopulationMode = i795[18]
  i794.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i795[19], i794.m_FaceInfo)
  var i797 = i795[20]
  var i796 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i797.length; i += 1) {
    i796.add(request.d('UnityEngine.TextCore.Glyph', i797[i + 0]));
  }
  i794.m_GlyphTable = i796
  var i799 = i795[21]
  var i798 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i799.length; i += 1) {
    i798.add(request.d('TMPro.TMP_Character', i799[i + 0]));
  }
  i794.m_CharacterTable = i798
  var i801 = i795[22]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i794.m_AtlasTextures = i800
  i794.m_AtlasTextureIndex = i795[23]
  i794.m_IsMultiAtlasTexturesEnabled = !!i795[24]
  i794.m_ClearDynamicDataOnBuild = !!i795[25]
  var i803 = i795[26]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i803.length; i += 1) {
    i802.add(request.d('UnityEngine.TextCore.GlyphRect', i803[i + 0]));
  }
  i794.m_UsedGlyphRects = i802
  var i805 = i795[27]
  var i804 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i805.length; i += 1) {
    i804.add(request.d('UnityEngine.TextCore.GlyphRect', i805[i + 0]));
  }
  i794.m_FreeGlyphRects = i804
  i794.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i795[28], i794.m_fontInfo)
  i794.m_AtlasWidth = i795[29]
  i794.m_AtlasHeight = i795[30]
  i794.m_AtlasPadding = i795[31]
  i794.m_AtlasRenderMode = i795[32]
  var i807 = i795[33]
  var i806 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i807.length; i += 1) {
    i806.add(request.d('TMPro.TMP_Glyph', i807[i + 0]));
  }
  i794.m_glyphInfoList = i806
  i794.m_KerningTable = request.d('TMPro.KerningTable', i795[34], i794.m_KerningTable)
  i794.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i795[35], i794.m_FontFeatureTable)
  var i809 = i795[36]
  var i808 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 1, i808, '')
  }
  i794.fallbackFontAssets = i808
  var i811 = i795[37]
  var i810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 1, i810, '')
  }
  i794.m_FallbackFontAssetTable = i810
  i794.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i795[38], i794.m_CreationSettings)
  var i813 = i795[39]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('TMPro.TMP_FontWeightPair', i813[i + 0]) );
  }
  i794.m_FontWeightTable = i812
  var i815 = i795[40]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('TMPro.TMP_FontWeightPair', i815[i + 0]) );
  }
  i794.fontWeights = i814
  return i794
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i817 = data
  i816.m_FaceIndex = i817[0]
  i816.m_FamilyName = i817[1]
  i816.m_StyleName = i817[2]
  i816.m_PointSize = i817[3]
  i816.m_Scale = i817[4]
  i816.m_UnitsPerEM = i817[5]
  i816.m_LineHeight = i817[6]
  i816.m_AscentLine = i817[7]
  i816.m_CapLine = i817[8]
  i816.m_MeanLine = i817[9]
  i816.m_Baseline = i817[10]
  i816.m_DescentLine = i817[11]
  i816.m_SuperscriptOffset = i817[12]
  i816.m_SuperscriptSize = i817[13]
  i816.m_SubscriptOffset = i817[14]
  i816.m_SubscriptSize = i817[15]
  i816.m_UnderlineOffset = i817[16]
  i816.m_UnderlineThickness = i817[17]
  i816.m_StrikethroughOffset = i817[18]
  i816.m_StrikethroughThickness = i817[19]
  i816.m_TabWidth = i817[20]
  return i816
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i821 = data
  i820.m_Index = i821[0]
  i820.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i821[1], i820.m_Metrics)
  i820.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i821[2], i820.m_GlyphRect)
  i820.m_Scale = i821[3]
  i820.m_AtlasIndex = i821[4]
  i820.m_ClassDefinitionType = i821[5]
  return i820
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i823 = data
  i822.m_Width = i823[0]
  i822.m_Height = i823[1]
  i822.m_HorizontalBearingX = i823[2]
  i822.m_HorizontalBearingY = i823[3]
  i822.m_HorizontalAdvance = i823[4]
  return i822
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i825 = data
  i824.m_X = i825[0]
  i824.m_Y = i825[1]
  i824.m_Width = i825[2]
  i824.m_Height = i825[3]
  return i824
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i828 = root || request.c( 'TMPro.TMP_Character' )
  var i829 = data
  i828.m_ElementType = i829[0]
  i828.m_Unicode = i829[1]
  i828.m_GlyphIndex = i829[2]
  i828.m_Scale = i829[3]
  return i828
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i834 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i835 = data
  i834.Name = i835[0]
  i834.PointSize = i835[1]
  i834.Scale = i835[2]
  i834.CharacterCount = i835[3]
  i834.LineHeight = i835[4]
  i834.Baseline = i835[5]
  i834.Ascender = i835[6]
  i834.CapHeight = i835[7]
  i834.Descender = i835[8]
  i834.CenterLine = i835[9]
  i834.SuperscriptOffset = i835[10]
  i834.SubscriptOffset = i835[11]
  i834.SubSize = i835[12]
  i834.Underline = i835[13]
  i834.UnderlineThickness = i835[14]
  i834.strikethrough = i835[15]
  i834.strikethroughThickness = i835[16]
  i834.TabWidth = i835[17]
  i834.Padding = i835[18]
  i834.AtlasWidth = i835[19]
  i834.AtlasHeight = i835[20]
  return i834
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.TMP_Glyph' )
  var i839 = data
  i838.id = i839[0]
  i838.x = i839[1]
  i838.y = i839[2]
  i838.width = i839[3]
  i838.height = i839[4]
  i838.xOffset = i839[5]
  i838.yOffset = i839[6]
  i838.xAdvance = i839[7]
  i838.scale = i839[8]
  return i838
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.KerningTable' )
  var i841 = data
  var i843 = i841[0]
  var i842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i843.length; i += 1) {
    i842.add(request.d('TMPro.KerningPair', i843[i + 0]));
  }
  i840.kerningPairs = i842
  return i840
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.KerningPair' )
  var i847 = data
  i846.xOffset = i847[0]
  i846.m_FirstGlyph = i847[1]
  i846.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i847[2], i846.m_FirstGlyphAdjustments)
  i846.m_SecondGlyph = i847[3]
  i846.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i847[4], i846.m_SecondGlyphAdjustments)
  i846.m_IgnoreSpacingAdjustments = !!i847[5]
  return i846
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i848 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i849 = data
  var i851 = i849[0]
  var i850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i851.length; i += 1) {
    i850.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i851[i + 0]));
  }
  i848.m_GlyphPairAdjustmentRecords = i850
  return i848
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i855 = data
  i854.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i855[0], i854.m_FirstAdjustmentRecord)
  i854.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i855[1], i854.m_SecondAdjustmentRecord)
  i854.m_FeatureLookupFlags = i855[2]
  return i854
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i858 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i859 = data
  i858.sourceFontFileName = i859[0]
  i858.sourceFontFileGUID = i859[1]
  i858.pointSizeSamplingMode = i859[2]
  i858.pointSize = i859[3]
  i858.padding = i859[4]
  i858.packingMode = i859[5]
  i858.atlasWidth = i859[6]
  i858.atlasHeight = i859[7]
  i858.characterSetSelectionMode = i859[8]
  i858.characterSequence = i859[9]
  i858.referencedFontAssetGUID = i859[10]
  i858.referencedTextAssetGUID = i859[11]
  i858.fontStyle = i859[12]
  i858.fontStyleModifier = i859[13]
  i858.renderMode = i859[14]
  i858.includeFontFeatures = !!i859[15]
  return i858
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'regularTypeface')
  request.r(i863[2], i863[3], 0, i862, 'italicTypeface')
  return i862
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i864 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i865 = data
  i864.useSafeMode = !!i865[0]
  i864.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i865[1], i864.safeModeOptions)
  i864.timeScale = i865[2]
  i864.unscaledTimeScale = i865[3]
  i864.useSmoothDeltaTime = !!i865[4]
  i864.maxSmoothUnscaledTime = i865[5]
  i864.rewindCallbackMode = i865[6]
  i864.showUnityEditorReport = !!i865[7]
  i864.logBehaviour = i865[8]
  i864.drawGizmos = !!i865[9]
  i864.defaultRecyclable = !!i865[10]
  i864.defaultAutoPlay = i865[11]
  i864.defaultUpdateType = i865[12]
  i864.defaultTimeScaleIndependent = !!i865[13]
  i864.defaultEaseType = i865[14]
  i864.defaultEaseOvershootOrAmplitude = i865[15]
  i864.defaultEasePeriod = i865[16]
  i864.defaultAutoKill = !!i865[17]
  i864.defaultLoopType = i865[18]
  i864.debugMode = !!i865[19]
  i864.debugStoreTargetId = !!i865[20]
  i864.showPreviewPanel = !!i865[21]
  i864.storeSettingsLocation = i865[22]
  i864.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i865[23], i864.modules)
  i864.createASMDEF = !!i865[24]
  i864.showPlayingTweens = !!i865[25]
  i864.showPausedTweens = !!i865[26]
  return i864
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i866 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i867 = data
  i866.logBehaviour = i867[0]
  i866.nestedTweenFailureBehaviour = i867[1]
  return i866
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i868 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i869 = data
  i868.showPanel = !!i869[0]
  i868.audioEnabled = !!i869[1]
  i868.physicsEnabled = !!i869[2]
  i868.physics2DEnabled = !!i869[3]
  i868.spriteEnabled = !!i869[4]
  i868.uiEnabled = !!i869[5]
  i868.textMeshProEnabled = !!i869[6]
  i868.tk2DEnabled = !!i869[7]
  i868.deAudioEnabled = !!i869[8]
  i868.deUnityExtendedEnabled = !!i869[9]
  i868.epoOutlineEnabled = !!i869[10]
  return i868
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.TMP_Settings' )
  var i871 = data
  i870.m_enableWordWrapping = !!i871[0]
  i870.m_enableKerning = !!i871[1]
  i870.m_enableExtraPadding = !!i871[2]
  i870.m_enableTintAllSprites = !!i871[3]
  i870.m_enableParseEscapeCharacters = !!i871[4]
  i870.m_EnableRaycastTarget = !!i871[5]
  i870.m_GetFontFeaturesAtRuntime = !!i871[6]
  i870.m_missingGlyphCharacter = i871[7]
  i870.m_warningsDisabled = !!i871[8]
  request.r(i871[9], i871[10], 0, i870, 'm_defaultFontAsset')
  i870.m_defaultFontAssetPath = i871[11]
  i870.m_defaultFontSize = i871[12]
  i870.m_defaultAutoSizeMinRatio = i871[13]
  i870.m_defaultAutoSizeMaxRatio = i871[14]
  i870.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i871[15], i871[16] )
  i870.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i871[17], i871[18] )
  i870.m_autoSizeTextContainer = !!i871[19]
  i870.m_IsTextObjectScaleStatic = !!i871[20]
  var i873 = i871[21]
  var i872 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 1, i872, '')
  }
  i870.m_fallbackFontAssets = i872
  i870.m_matchMaterialPreset = !!i871[22]
  request.r(i871[23], i871[24], 0, i870, 'm_defaultSpriteAsset')
  i870.m_defaultSpriteAssetPath = i871[25]
  i870.m_enableEmojiSupport = !!i871[26]
  i870.m_MissingCharacterSpriteUnicode = i871[27]
  i870.m_defaultColorGradientPresetsPath = i871[28]
  request.r(i871[29], i871[30], 0, i870, 'm_defaultStyleSheet')
  i870.m_StyleSheetsResourcePath = i871[31]
  request.r(i871[32], i871[33], 0, i870, 'm_leadingCharacters')
  request.r(i871[34], i871[35], 0, i870, 'm_followingCharacters')
  i870.m_UseModernHangulLineBreakingRules = !!i871[36]
  return i870
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'spriteSheet')
  var i877 = i875[2]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i877.length; i += 1) {
    i876.add(request.d('TMPro.TMP_Sprite', i877[i + 0]));
  }
  i874.spriteInfoList = i876
  var i879 = i875[3]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 1, i878, '')
  }
  i874.fallbackSpriteAssets = i878
  i874.hashCode = i875[4]
  request.r(i875[5], i875[6], 0, i874, 'material')
  i874.materialHashCode = i875[7]
  i874.m_Version = i875[8]
  i874.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i875[9], i874.m_FaceInfo)
  var i881 = i875[10]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('TMPro.TMP_SpriteCharacter', i881[i + 0]));
  }
  i874.m_SpriteCharacterTable = i880
  var i883 = i875[11]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(request.d('TMPro.TMP_SpriteGlyph', i883[i + 0]));
  }
  i874.m_SpriteGlyphTable = i882
  return i874
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i886 = root || request.c( 'TMPro.TMP_Sprite' )
  var i887 = data
  i886.name = i887[0]
  i886.hashCode = i887[1]
  i886.unicode = i887[2]
  i886.pivot = new pc.Vec2( i887[3], i887[4] )
  request.r(i887[5], i887[6], 0, i886, 'sprite')
  i886.id = i887[7]
  i886.x = i887[8]
  i886.y = i887[9]
  i886.width = i887[10]
  i886.height = i887[11]
  i886.xOffset = i887[12]
  i886.yOffset = i887[13]
  i886.xAdvance = i887[14]
  i886.scale = i887[15]
  return i886
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i892 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i893 = data
  i892.m_Name = i893[0]
  i892.m_HashCode = i893[1]
  i892.m_ElementType = i893[2]
  i892.m_Unicode = i893[3]
  i892.m_GlyphIndex = i893[4]
  i892.m_Scale = i893[5]
  return i892
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i896 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'sprite')
  i896.m_Index = i897[2]
  i896.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i897[3], i896.m_Metrics)
  i896.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i897[4], i896.m_GlyphRect)
  i896.m_Scale = i897[5]
  i896.m_AtlasIndex = i897[6]
  i896.m_ClassDefinitionType = i897[7]
  return i896
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i898 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i899 = data
  var i901 = i899[0]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i901.length; i += 1) {
    i900.add(request.d('TMPro.TMP_Style', i901[i + 0]));
  }
  i898.m_StyleList = i900
  return i898
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i904 = root || request.c( 'TMPro.TMP_Style' )
  var i905 = data
  i904.m_Name = i905[0]
  i904.m_HashCode = i905[1]
  i904.m_OpeningDefinition = i905[2]
  i904.m_ClosingDefinition = i905[3]
  i904.m_OpeningTagArray = i905[4]
  i904.m_ClosingTagArray = i905[5]
  i904.m_OpeningTagUnicodeArray = i905[6]
  i904.m_ClosingTagUnicodeArray = i905[7]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i907 = data
  var i909 = i907[0]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i909[i + 0]) );
  }
  i906.files = i908
  i906.componentToPrefabIds = i907[1]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i913 = data
  i912.path = i913[0]
  request.r(i913[1], i913[2], 0, i912, 'unityObject')
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i915 = data
  var i917 = i915[0]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i917[i + 0]) );
  }
  i914.scriptsExecutionOrder = i916
  var i919 = i915[1]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i919[i + 0]) );
  }
  i914.sortingLayers = i918
  var i921 = i915[2]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i921[i + 0]) );
  }
  i914.cullingLayers = i920
  i914.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i915[3], i914.timeSettings)
  i914.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i915[4], i914.physicsSettings)
  i914.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i915[5], i914.physics2DSettings)
  i914.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i915[6], i914.qualitySettings)
  i914.enableRealtimeShadows = !!i915[7]
  i914.enableAutoInstancing = !!i915[8]
  i914.enableStaticBatching = !!i915[9]
  i914.enableDynamicBatching = !!i915[10]
  i914.lightmapEncodingQuality = i915[11]
  i914.desiredColorSpace = i915[12]
  var i923 = i915[13]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( i923[i + 0] );
  }
  i914.allTags = i922
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i927 = data
  i926.name = i927[0]
  i926.value = i927[1]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i931 = data
  i930.id = i931[0]
  i930.name = i931[1]
  i930.value = i931[2]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i935 = data
  i934.id = i935[0]
  i934.name = i935[1]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i937 = data
  i936.fixedDeltaTime = i937[0]
  i936.maximumDeltaTime = i937[1]
  i936.timeScale = i937[2]
  i936.maximumParticleTimestep = i937[3]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i939 = data
  i938.gravity = new pc.Vec3( i939[0], i939[1], i939[2] )
  i938.defaultSolverIterations = i939[3]
  i938.bounceThreshold = i939[4]
  i938.autoSyncTransforms = !!i939[5]
  i938.autoSimulation = !!i939[6]
  var i941 = i939[7]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i941[i + 0]) );
  }
  i938.collisionMatrix = i940
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i945 = data
  i944.enabled = !!i945[0]
  i944.layerId = i945[1]
  i944.otherLayerId = i945[2]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'material')
  i946.gravity = new pc.Vec2( i947[2], i947[3] )
  i946.positionIterations = i947[4]
  i946.velocityIterations = i947[5]
  i946.velocityThreshold = i947[6]
  i946.maxLinearCorrection = i947[7]
  i946.maxAngularCorrection = i947[8]
  i946.maxTranslationSpeed = i947[9]
  i946.maxRotationSpeed = i947[10]
  i946.baumgarteScale = i947[11]
  i946.baumgarteTOIScale = i947[12]
  i946.timeToSleep = i947[13]
  i946.linearSleepTolerance = i947[14]
  i946.angularSleepTolerance = i947[15]
  i946.defaultContactOffset = i947[16]
  i946.autoSimulation = !!i947[17]
  i946.queriesHitTriggers = !!i947[18]
  i946.queriesStartInColliders = !!i947[19]
  i946.callbacksOnDisable = !!i947[20]
  i946.reuseCollisionCallbacks = !!i947[21]
  i946.autoSyncTransforms = !!i947[22]
  var i949 = i947[23]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i949[i + 0]) );
  }
  i946.collisionMatrix = i948
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i953 = data
  i952.enabled = !!i953[0]
  i952.layerId = i953[1]
  i952.otherLayerId = i953[2]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i955 = data
  var i957 = i955[0]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i957[i + 0]) );
  }
  i954.qualityLevels = i956
  var i959 = i955[1]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( i959[i + 0] );
  }
  i954.names = i958
  i954.shadows = i955[2]
  i954.anisotropicFiltering = i955[3]
  i954.antiAliasing = i955[4]
  i954.lodBias = i955[5]
  i954.shadowCascades = i955[6]
  i954.shadowDistance = i955[7]
  i954.shadowmaskMode = i955[8]
  i954.shadowProjection = i955[9]
  i954.shadowResolution = i955[10]
  i954.softParticles = !!i955[11]
  i954.softVegetation = !!i955[12]
  i954.activeColorSpace = i955[13]
  i954.desiredColorSpace = i955[14]
  i954.masterTextureLimit = i955[15]
  i954.maxQueuedFrames = i955[16]
  i954.particleRaycastBudget = i955[17]
  i954.pixelLightCount = i955[18]
  i954.realtimeReflectionProbes = !!i955[19]
  i954.shadowCascade2Split = i955[20]
  i954.shadowCascade4Split = new pc.Vec3( i955[21], i955[22], i955[23] )
  i954.streamingMipmapsActive = !!i955[24]
  i954.vSyncCount = i955[25]
  i954.asyncUploadBufferSize = i955[26]
  i954.asyncUploadTimeSlice = i955[27]
  i954.billboardsFaceCameraPosition = !!i955[28]
  i954.shadowNearPlaneOffset = i955[29]
  i954.streamingMipmapsMemoryBudget = i955[30]
  i954.maximumLODLevel = i955[31]
  i954.streamingMipmapsAddAllCameras = !!i955[32]
  i954.streamingMipmapsMaxLevelReduction = i955[33]
  i954.streamingMipmapsRenderersPerFrame = i955[34]
  i954.resolutionScalingFixedDPIFactor = i955[35]
  i954.streamingMipmapsMaxFileIORequests = i955[36]
  i954.currentQualityLevel = i955[37]
  return i954
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i963 = data
  i962.xPlacement = i963[0]
  i962.yPlacement = i963[1]
  i962.xAdvance = i963[2]
  i962.yAdvance = i963[3]
  return i962
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i965 = data
  i964.m_GlyphIndex = i965[0]
  i964.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i965[1], i964.m_GlyphValueRecord)
  return i964
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i966 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i967 = data
  i966.m_XPlacement = i967[0]
  i966.m_YPlacement = i967[1]
  i966.m_XAdvance = i967[2]
  i966.m_YAdvance = i967[3]
  return i966
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[3],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[3],"76":[77],"78":[79],"80":[79],"9":[8],"81":[82],"83":[84],"85":[82],"86":[8],"87":[8],"11":[9],"19":[20,8],"88":[8],"10":[9],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"34":[8],"96":[8],"16":[20,8],"97":[8],"98":[8],"99":[8],"100":[8],"101":[20,8],"102":[8],"103":[6],"104":[6],"7":[6],"105":[6],"106":[3],"107":[3],"108":[109],"110":[3],"111":[112],"113":[8],"114":[20,8],"115":[77],"24":[20,8],"116":[117,77],"118":[77],"119":[77,120],"121":[54],"122":[62],"123":[112],"124":[125],"126":[8],"127":[77,8],"18":[8,20],"128":[8],"129":[20,8],"130":[77],"131":[20,8],"132":[8],"133":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","MixSkeletonSkin","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","ClickItem","DraggableItem","UnityEngine.CanvasGroup","DropZone","UnityEngine.PolygonCollider2D","DG.Tweening.DOTweenAnimation","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "267.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BTTP_V15_NgocBTU_AnhPD";

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

Deserializers.buildID = "a9ab0adc-626b-40d3-b842-f07956c119a9";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

