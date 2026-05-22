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
  request.r(i561[13], i561[14], 0, i560, 'skeGhost')
  i560.countPlay = i561[15]
  i560.countPlayFinal = i561[16]
  i560.countPlayMax = i561[17]
  i560.timeDropFinal = i561[18]
  i560.colorBG = new pc.Color(i561[19], i561[20], i561[21], i561[22])
  request.r(i561[23], i561[24], 0, i560, 'texture2D')
  request.r(i561[25], i561[26], 0, i560, 'rawImageBG')
  request.r(i561[27], i561[28], 0, i560, 'textProgess')
  request.r(i561[29], i561[30], 0, i560, 'imgProgess')
  request.r(i561[31], i561[32], 0, i560, 'timeText')
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i567 = data
  i566.cullTransparentMesh = !!i567[0]
  return i566
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'm_Texture')
  i568.m_UVRect = UnityEngine.Rect.MinMaxRect(i569[2], i569[3], i569[4], i569[5])
  i568.m_Maskable = !!i569[6]
  request.r(i569[7], i569[8], 0, i568, 'm_Material')
  i568.m_Color = new pc.Color(i569[9], i569[10], i569[11], i569[12])
  i568.m_RaycastTarget = !!i569[13]
  i568.m_RaycastPadding = new pc.Vec4( i569[14], i569[15], i569[16], i569[17] )
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'clip')
  request.r(i571[2], i571[3], 0, i570, 'outputAudioMixerGroup')
  i570.playOnAwake = !!i571[4]
  i570.loop = !!i571[5]
  i570.time = i571[6]
  i570.volume = i571[7]
  i570.pitch = i571[8]
  i570.enabled = !!i571[9]
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
  i572.m_Maskable = !!i573[11]
  request.r(i573[12], i573[13], 0, i572, 'm_Material')
  i572.m_Color = new pc.Color(i573[14], i573[15], i573[16], i573[17])
  i572.m_RaycastTarget = !!i573[18]
  i572.m_RaycastPadding = new pc.Vec4( i573[19], i573[20], i573[21], i573[22] )
  return i572
}

Deserializers["DropZone"] = function (request, data, root) {
  var i574 = root || request.c( 'DropZone' )
  var i575 = data
  i574.idDrop = i575[0]
  var i577 = i575[1]
  var i576 = []
  for(var i = 0; i < i577.length; i += 2) {
  request.r(i577[i + 0], i577[i + 1], 2, i576, '')
  }
  i574.steps = i576
  request.r(i575[2], i575[3], 0, i574, 'stepLose')
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i581 = data
  i580.usedByComposite = !!i581[0]
  i580.autoTiling = !!i581[1]
  var i583 = i581[2]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
  var i585 = i583[i + 0]
  var i584 = []
  for(var i = 0; i < i585.length; i += 2) {
    i584.push( new pc.Vec2( i585[i + 0], i585[i + 1] ) );
  }
    i582.push( i584 );
  }
  i580.points = i582
  i580.enabled = !!i581[3]
  i580.isTrigger = !!i581[4]
  i580.usedByEffector = !!i581[5]
  i580.density = i581[6]
  i580.offset = new pc.Vec2( i581[7], i581[8] )
  request.r(i581[9], i581[10], 0, i580, 'material')
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i593 = data
  i592.m_Alpha = i593[0]
  i592.m_Interactable = !!i593[1]
  i592.m_BlocksRaycasts = !!i593[2]
  i592.m_IgnoreParentGroups = !!i593[3]
  i592.enabled = !!i593[4]
  return i592
}

Deserializers["DragID"] = function (request, data, root) {
  var i594 = root || request.c( 'DragID' )
  var i595 = data
  i594.idDrag = i595[0]
  i594.isProcess = !!i595[1]
  i594.isHide = !!i595[2]
  return i594
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i596 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'skeletonDataAsset')
  request.r(i597[2], i597[3], 0, i596, 'additiveMaterial')
  request.r(i597[4], i597[5], 0, i596, 'multiplyMaterial')
  request.r(i597[6], i597[7], 0, i596, 'screenMaterial')
  i596.initialSkinName = i597[8]
  i596.initialFlipX = !!i597[9]
  i596.initialFlipY = !!i597[10]
  i596.startingAnimation = i597[11]
  i596.startingLoop = !!i597[12]
  i596.timeScale = i597[13]
  i596.freeze = !!i597[14]
  i596.layoutScaleMode = i597[15]
  i596.updateWhenInvisible = i597[16]
  i596.allowMultipleCanvasRenderers = !!i597[17]
  var i599 = i597[18]
  var i598 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i599.length; i += 2) {
  request.r(i599[i + 0], i599[i + 1], 1, i598, '')
  }
  i596.canvasRenderers = i598
  i596.enableSeparatorSlots = !!i597[19]
  i596.updateSeparatorPartLocation = !!i597[20]
  i596.updateSeparatorPartScale = !!i597[21]
  i596.disableMeshAssignmentOnOverride = !!i597[22]
  i596.referenceSize = new pc.Vec2( i597[23], i597[24] )
  i596.referenceScale = i597[25]
  i596.rectTransformSize = new pc.Vec2( i597[26], i597[27] )
  i596.editReferenceRect = !!i597[28]
  var i601 = i597[29]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( i601[i + 0] );
  }
  i596.separatorSlotNames = i600
  var i603 = i597[30]
  var i602 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i603.length; i += 2) {
  request.r(i603[i + 0], i603[i + 1], 1, i602, '')
  }
  i596.separatorParts = i602
  i596.meshGenerator = request.d('Spine.Unity.MeshGenerator', i597[31], i596.meshGenerator)
  i596.updateTiming = i597[32]
  i596.unscaledTime = !!i597[33]
  i596.m_Maskable = !!i597[34]
  request.r(i597[35], i597[36], 0, i596, 'm_Material')
  i596.m_Color = new pc.Color(i597[37], i597[38], i597[39], i597[40])
  i596.m_RaycastTarget = !!i597[41]
  i596.m_RaycastPadding = new pc.Vec4( i597[42], i597[43], i597[44], i597[45] )
  return i596
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i610 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i611 = data
  i610.settings = request.d('Spine.Unity.MeshGenerator+Settings', i611[0], i610.settings)
  return i610
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i612 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i613 = data
  i612.useClipping = !!i613[0]
  i612.zSpacing = i613[1]
  i612.pmaVertexColors = !!i613[2]
  i612.tintBlack = !!i613[3]
  i612.canvasGroupTintBlack = !!i613[4]
  i612.calculateTangents = !!i613[5]
  i612.addNormals = !!i613[6]
  i612.immutableTriangles = !!i613[7]
  return i612
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i614 = root || request.c( 'MixSkeletonSkin' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'skeletonAnimation')
  var i617 = i615[2]
  var i616 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i617.length; i += 1) {
    i616.add(i617[i + 0]);
  }
  i614.skinNames = i616
  i614.defaultAnim = i615[3]
  return i614
}

Deserializers["DropID"] = function (request, data, root) {
  var i620 = root || request.c( 'DropID' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'mixSkeletonSkin')
  return i620
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i622 = root || request.c( 'ClickItem' )
  var i623 = data
  var i625 = i623[0]
  var i624 = []
  for(var i = 0; i < i625.length; i += 2) {
  request.r(i625[i + 0], i625[i + 1], 2, i624, '')
  }
  i622.steps = i624
  i622.currentStep = i623[1]
  i622.isProcess = !!i623[2]
  return i622
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.Button' )
  var i627 = data
  i626.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i627[0], i626.m_OnClick)
  i626.m_Navigation = request.d('UnityEngine.UI.Navigation', i627[1], i626.m_Navigation)
  i626.m_Transition = i627[2]
  i626.m_Colors = request.d('UnityEngine.UI.ColorBlock', i627[3], i626.m_Colors)
  i626.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i627[4], i626.m_SpriteState)
  i626.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i627[5], i626.m_AnimationTriggers)
  i626.m_Interactable = !!i627[6]
  request.r(i627[7], i627[8], 0, i626, 'm_TargetGraphic')
  return i626
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i629 = data
  i628.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i629[0], i628.m_PersistentCalls)
  return i628
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i631 = data
  var i633 = i631[0]
  var i632 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i633.length; i += 1) {
    i632.add(request.d('UnityEngine.Events.PersistentCall', i633[i + 0]));
  }
  i630.m_Calls = i632
  return i630
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'm_Target')
  i636.m_TargetAssemblyTypeName = i637[2]
  i636.m_MethodName = i637[3]
  i636.m_Mode = i637[4]
  i636.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i637[5], i636.m_Arguments)
  i636.m_CallState = i637[6]
  return i636
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i639 = data
  i638.m_Mode = i639[0]
  i638.m_WrapAround = !!i639[1]
  request.r(i639[2], i639[3], 0, i638, 'm_SelectOnUp')
  request.r(i639[4], i639[5], 0, i638, 'm_SelectOnDown')
  request.r(i639[6], i639[7], 0, i638, 'm_SelectOnLeft')
  request.r(i639[8], i639[9], 0, i638, 'm_SelectOnRight')
  return i638
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i641 = data
  i640.m_NormalColor = new pc.Color(i641[0], i641[1], i641[2], i641[3])
  i640.m_HighlightedColor = new pc.Color(i641[4], i641[5], i641[6], i641[7])
  i640.m_PressedColor = new pc.Color(i641[8], i641[9], i641[10], i641[11])
  i640.m_SelectedColor = new pc.Color(i641[12], i641[13], i641[14], i641[15])
  i640.m_DisabledColor = new pc.Color(i641[16], i641[17], i641[18], i641[19])
  i640.m_ColorMultiplier = i641[20]
  i640.m_FadeDuration = i641[21]
  return i640
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'm_HighlightedSprite')
  request.r(i643[2], i643[3], 0, i642, 'm_PressedSprite')
  request.r(i643[4], i643[5], 0, i642, 'm_SelectedSprite')
  request.r(i643[6], i643[7], 0, i642, 'm_DisabledSprite')
  return i642
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i645 = data
  i644.m_NormalTrigger = i645[0]
  i644.m_HighlightedTrigger = i645[1]
  i644.m_PressedTrigger = i645[2]
  i644.m_SelectedTrigger = i645[3]
  i644.m_DisabledTrigger = i645[4]
  return i644
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i646 = root || request.c( 'DraggableItem' )
  var i647 = data
  i646.idDrag = i647[0]
  i646.isProcess = !!i647[1]
  i646.isLose = !!i647[2]
  i646.isHide = !!i647[3]
  return i646
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i648 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i649 = data
  i648.m_hasFontAssetChanged = !!i649[0]
  request.r(i649[1], i649[2], 0, i648, 'm_baseMaterial')
  i648.m_maskOffset = new pc.Vec4( i649[3], i649[4], i649[5], i649[6] )
  i648.m_text = i649[7]
  i648.m_isRightToLeft = !!i649[8]
  request.r(i649[9], i649[10], 0, i648, 'm_fontAsset')
  request.r(i649[11], i649[12], 0, i648, 'm_sharedMaterial')
  var i651 = i649[13]
  var i650 = []
  for(var i = 0; i < i651.length; i += 2) {
  request.r(i651[i + 0], i651[i + 1], 2, i650, '')
  }
  i648.m_fontSharedMaterials = i650
  request.r(i649[14], i649[15], 0, i648, 'm_fontMaterial')
  var i653 = i649[16]
  var i652 = []
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 2, i652, '')
  }
  i648.m_fontMaterials = i652
  i648.m_fontColor32 = UnityEngine.Color32.ConstructColor(i649[17], i649[18], i649[19], i649[20])
  i648.m_fontColor = new pc.Color(i649[21], i649[22], i649[23], i649[24])
  i648.m_enableVertexGradient = !!i649[25]
  i648.m_colorMode = i649[26]
  i648.m_fontColorGradient = request.d('TMPro.VertexGradient', i649[27], i648.m_fontColorGradient)
  request.r(i649[28], i649[29], 0, i648, 'm_fontColorGradientPreset')
  request.r(i649[30], i649[31], 0, i648, 'm_spriteAsset')
  i648.m_tintAllSprites = !!i649[32]
  request.r(i649[33], i649[34], 0, i648, 'm_StyleSheet')
  i648.m_TextStyleHashCode = i649[35]
  i648.m_overrideHtmlColors = !!i649[36]
  i648.m_faceColor = UnityEngine.Color32.ConstructColor(i649[37], i649[38], i649[39], i649[40])
  i648.m_fontSize = i649[41]
  i648.m_fontSizeBase = i649[42]
  i648.m_fontWeight = i649[43]
  i648.m_enableAutoSizing = !!i649[44]
  i648.m_fontSizeMin = i649[45]
  i648.m_fontSizeMax = i649[46]
  i648.m_fontStyle = i649[47]
  i648.m_HorizontalAlignment = i649[48]
  i648.m_VerticalAlignment = i649[49]
  i648.m_textAlignment = i649[50]
  i648.m_characterSpacing = i649[51]
  i648.m_wordSpacing = i649[52]
  i648.m_lineSpacing = i649[53]
  i648.m_lineSpacingMax = i649[54]
  i648.m_paragraphSpacing = i649[55]
  i648.m_charWidthMaxAdj = i649[56]
  i648.m_enableWordWrapping = !!i649[57]
  i648.m_wordWrappingRatios = i649[58]
  i648.m_overflowMode = i649[59]
  request.r(i649[60], i649[61], 0, i648, 'm_linkedTextComponent')
  request.r(i649[62], i649[63], 0, i648, 'parentLinkedComponent')
  i648.m_enableKerning = !!i649[64]
  i648.m_enableExtraPadding = !!i649[65]
  i648.checkPaddingRequired = !!i649[66]
  i648.m_isRichText = !!i649[67]
  i648.m_parseCtrlCharacters = !!i649[68]
  i648.m_isOrthographic = !!i649[69]
  i648.m_isCullingEnabled = !!i649[70]
  i648.m_horizontalMapping = i649[71]
  i648.m_verticalMapping = i649[72]
  i648.m_uvLineOffset = i649[73]
  i648.m_geometrySortingOrder = i649[74]
  i648.m_IsTextObjectScaleStatic = !!i649[75]
  i648.m_VertexBufferAutoSizeReduction = !!i649[76]
  i648.m_useMaxVisibleDescender = !!i649[77]
  i648.m_pageToDisplay = i649[78]
  i648.m_margin = new pc.Vec4( i649[79], i649[80], i649[81], i649[82] )
  i648.m_isUsingLegacyAnimationComponent = !!i649[83]
  i648.m_isVolumetricText = !!i649[84]
  i648.m_Maskable = !!i649[85]
  request.r(i649[86], i649[87], 0, i648, 'm_Material')
  i648.m_Color = new pc.Color(i649[88], i649[89], i649[90], i649[91])
  i648.m_RaycastTarget = !!i649[92]
  i648.m_RaycastPadding = new pc.Vec4( i649[93], i649[94], i649[95], i649[96] )
  return i648
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i656 = root || request.c( 'TMPro.VertexGradient' )
  var i657 = data
  i656.topLeft = new pc.Color(i657[0], i657[1], i657[2], i657[3])
  i656.topRight = new pc.Color(i657[4], i657[5], i657[6], i657[7])
  i656.bottomLeft = new pc.Color(i657[8], i657[9], i657[10], i657[11])
  i656.bottomRight = new pc.Color(i657[12], i657[13], i657[14], i657[15])
  return i656
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'm_ObjectArgument')
  i658.m_ObjectArgumentAssemblyTypeName = i659[2]
  i658.m_IntArgument = i659[3]
  i658.m_FloatArgument = i659[4]
  i658.m_StringArgument = i659[5]
  i658.m_BoolArgument = !!i659[6]
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

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i875 = data
  i874.m_GlyphIndex = i875[0]
  i874.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i875[1], i874.m_GlyphValueRecord)
  return i874
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i876 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i877 = data
  i876.m_XPlacement = i877[0]
  i876.m_YPlacement = i877[1]
  i876.m_XAdvance = i877[2]
  i876.m_YAdvance = i877[3]
  return i876
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'spriteSheet')
  var i881 = i879[2]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('TMPro.TMP_Sprite', i881[i + 0]));
  }
  i878.spriteInfoList = i880
  var i883 = i879[3]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 1, i882, '')
  }
  i878.fallbackSpriteAssets = i882
  i878.hashCode = i879[4]
  request.r(i879[5], i879[6], 0, i878, 'material')
  i878.materialHashCode = i879[7]
  i878.m_Version = i879[8]
  i878.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i879[9], i878.m_FaceInfo)
  var i885 = i879[10]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(request.d('TMPro.TMP_SpriteCharacter', i885[i + 0]));
  }
  i878.m_SpriteCharacterTable = i884
  var i887 = i879[11]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(request.d('TMPro.TMP_SpriteGlyph', i887[i + 0]));
  }
  i878.m_SpriteGlyphTable = i886
  return i878
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i890 = root || request.c( 'TMPro.TMP_Sprite' )
  var i891 = data
  i890.name = i891[0]
  i890.hashCode = i891[1]
  i890.unicode = i891[2]
  i890.pivot = new pc.Vec2( i891[3], i891[4] )
  request.r(i891[5], i891[6], 0, i890, 'sprite')
  i890.id = i891[7]
  i890.x = i891[8]
  i890.y = i891[9]
  i890.width = i891[10]
  i890.height = i891[11]
  i890.xOffset = i891[12]
  i890.yOffset = i891[13]
  i890.xAdvance = i891[14]
  i890.scale = i891[15]
  return i890
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i896 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i897 = data
  i896.m_Name = i897[0]
  i896.m_HashCode = i897[1]
  i896.m_ElementType = i897[2]
  i896.m_Unicode = i897[3]
  i896.m_GlyphIndex = i897[4]
  i896.m_Scale = i897[5]
  return i896
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i900 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'sprite')
  i900.m_Index = i901[2]
  i900.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i901[3], i900.m_Metrics)
  i900.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i901[4], i900.m_GlyphRect)
  i900.m_Scale = i901[5]
  i900.m_AtlasIndex = i901[6]
  i900.m_ClassDefinitionType = i901[7]
  return i900
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i902 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i903 = data
  var i905 = i903[0]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('TMPro.TMP_Style', i905[i + 0]));
  }
  i902.m_StyleList = i904
  return i902
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i908 = root || request.c( 'TMPro.TMP_Style' )
  var i909 = data
  i908.m_Name = i909[0]
  i908.m_HashCode = i909[1]
  i908.m_OpeningDefinition = i909[2]
  i908.m_ClosingDefinition = i909[3]
  i908.m_OpeningTagArray = i909[4]
  i908.m_ClosingTagArray = i909[5]
  i908.m_OpeningTagUnicodeArray = i909[6]
  i908.m_ClosingTagUnicodeArray = i909[7]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i911 = data
  var i913 = i911[0]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i913[i + 0]) );
  }
  i910.files = i912
  i910.componentToPrefabIds = i911[1]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i917 = data
  i916.path = i917[0]
  request.r(i917[1], i917[2], 0, i916, 'unityObject')
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i919 = data
  var i921 = i919[0]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i921[i + 0]) );
  }
  i918.scriptsExecutionOrder = i920
  var i923 = i919[1]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i923[i + 0]) );
  }
  i918.sortingLayers = i922
  var i925 = i919[2]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i925[i + 0]) );
  }
  i918.cullingLayers = i924
  i918.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i919[3], i918.timeSettings)
  i918.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i919[4], i918.physicsSettings)
  i918.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i919[5], i918.physics2DSettings)
  i918.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i919[6], i918.qualitySettings)
  i918.enableRealtimeShadows = !!i919[7]
  i918.enableAutoInstancing = !!i919[8]
  i918.enableStaticBatching = !!i919[9]
  i918.enableDynamicBatching = !!i919[10]
  i918.lightmapEncodingQuality = i919[11]
  i918.desiredColorSpace = i919[12]
  var i927 = i919[13]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( i927[i + 0] );
  }
  i918.allTags = i926
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i931 = data
  i930.name = i931[0]
  i930.value = i931[1]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i935 = data
  i934.id = i935[0]
  i934.name = i935[1]
  i934.value = i935[2]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i939 = data
  i938.id = i939[0]
  i938.name = i939[1]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i941 = data
  i940.fixedDeltaTime = i941[0]
  i940.maximumDeltaTime = i941[1]
  i940.timeScale = i941[2]
  i940.maximumParticleTimestep = i941[3]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i943 = data
  i942.gravity = new pc.Vec3( i943[0], i943[1], i943[2] )
  i942.defaultSolverIterations = i943[3]
  i942.bounceThreshold = i943[4]
  i942.autoSyncTransforms = !!i943[5]
  i942.autoSimulation = !!i943[6]
  var i945 = i943[7]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i945[i + 0]) );
  }
  i942.collisionMatrix = i944
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i949 = data
  i948.enabled = !!i949[0]
  i948.layerId = i949[1]
  i948.otherLayerId = i949[2]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'material')
  i950.gravity = new pc.Vec2( i951[2], i951[3] )
  i950.positionIterations = i951[4]
  i950.velocityIterations = i951[5]
  i950.velocityThreshold = i951[6]
  i950.maxLinearCorrection = i951[7]
  i950.maxAngularCorrection = i951[8]
  i950.maxTranslationSpeed = i951[9]
  i950.maxRotationSpeed = i951[10]
  i950.baumgarteScale = i951[11]
  i950.baumgarteTOIScale = i951[12]
  i950.timeToSleep = i951[13]
  i950.linearSleepTolerance = i951[14]
  i950.angularSleepTolerance = i951[15]
  i950.defaultContactOffset = i951[16]
  i950.autoSimulation = !!i951[17]
  i950.queriesHitTriggers = !!i951[18]
  i950.queriesStartInColliders = !!i951[19]
  i950.callbacksOnDisable = !!i951[20]
  i950.reuseCollisionCallbacks = !!i951[21]
  i950.autoSyncTransforms = !!i951[22]
  var i953 = i951[23]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i953[i + 0]) );
  }
  i950.collisionMatrix = i952
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i957 = data
  i956.enabled = !!i957[0]
  i956.layerId = i957[1]
  i956.otherLayerId = i957[2]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i959 = data
  var i961 = i959[0]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i961[i + 0]) );
  }
  i958.qualityLevels = i960
  var i963 = i959[1]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( i963[i + 0] );
  }
  i958.names = i962
  i958.shadows = i959[2]
  i958.anisotropicFiltering = i959[3]
  i958.antiAliasing = i959[4]
  i958.lodBias = i959[5]
  i958.shadowCascades = i959[6]
  i958.shadowDistance = i959[7]
  i958.shadowmaskMode = i959[8]
  i958.shadowProjection = i959[9]
  i958.shadowResolution = i959[10]
  i958.softParticles = !!i959[11]
  i958.softVegetation = !!i959[12]
  i958.activeColorSpace = i959[13]
  i958.desiredColorSpace = i959[14]
  i958.masterTextureLimit = i959[15]
  i958.maxQueuedFrames = i959[16]
  i958.particleRaycastBudget = i959[17]
  i958.pixelLightCount = i959[18]
  i958.realtimeReflectionProbes = !!i959[19]
  i958.shadowCascade2Split = i959[20]
  i958.shadowCascade4Split = new pc.Vec3( i959[21], i959[22], i959[23] )
  i958.streamingMipmapsActive = !!i959[24]
  i958.vSyncCount = i959[25]
  i958.asyncUploadBufferSize = i959[26]
  i958.asyncUploadTimeSlice = i959[27]
  i958.billboardsFaceCameraPosition = !!i959[28]
  i958.shadowNearPlaneOffset = i959[29]
  i958.streamingMipmapsMemoryBudget = i959[30]
  i958.maximumLODLevel = i959[31]
  i958.streamingMipmapsAddAllCameras = !!i959[32]
  i958.streamingMipmapsMaxLevelReduction = i959[33]
  i958.streamingMipmapsRenderersPerFrame = i959[34]
  i958.resolutionScalingFixedDPIFactor = i959[35]
  i958.streamingMipmapsMaxFileIORequests = i959[36]
  i958.currentQualityLevel = i959[37]
  return i958
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i966 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i967 = data
  i966.xPlacement = i967[0]
  i966.yPlacement = i967[1]
  i966.xAdvance = i967[2]
  i966.yAdvance = i967[3]
  return i966
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[3],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[3],"78":[79],"80":[81],"82":[81],"9":[8],"83":[84],"85":[86],"87":[84],"88":[8],"89":[8],"11":[9],"19":[20,8],"90":[8],"10":[9],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"96":[8],"97":[8],"36":[8],"98":[8],"17":[20,8],"99":[8],"100":[8],"101":[8],"102":[8],"103":[20,8],"104":[8],"105":[6],"106":[6],"7":[6],"107":[6],"108":[3],"109":[3],"110":[111],"112":[3],"113":[114],"115":[8],"116":[20,8],"117":[79],"28":[20,8],"118":[119,79],"120":[79],"121":[79,122],"123":[56],"124":[64],"125":[114],"126":[127],"128":[8],"129":[79,8],"18":[8,20],"130":[8],"131":[20,8],"132":[79],"133":[20,8],"134":[8],"135":[84]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","MixSkeletonSkin","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","DropZone","UnityEngine.PolygonCollider2D","UnityEngine.CanvasGroup","DragID","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DropID","ClickItem","DraggableItem","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "318.2";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BMTP_V02_NgocBTU_AnhPD";

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

Deserializers.applicationIdentifier = "com.DefaultCompany.Minecraft-Clone";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "61116229-1715-4112-933c-5048ba700c25";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

