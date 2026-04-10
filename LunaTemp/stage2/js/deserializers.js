var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointSpring' )
  var i481 = data
  i480.spring = i481[0]
  i480.damper = i481[1]
  i480.targetPosition = i481[2]
  return i480
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointMotor' )
  var i483 = data
  i482.m_TargetVelocity = i483[0]
  i482.m_Force = i483[1]
  i482.m_FreeSpin = i483[2]
  return i482
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointLimits' )
  var i485 = data
  i484.m_Min = i485[0]
  i484.m_Max = i485[1]
  i484.m_Bounciness = i485[2]
  i484.m_BounceMinVelocity = i485[3]
  i484.m_ContactDistance = i485[4]
  i484.minBounce = i485[5]
  i484.maxBounce = i485[6]
  return i484
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointDrive' )
  var i487 = data
  i486.m_PositionSpring = i487[0]
  i486.m_PositionDamper = i487[1]
  i486.m_MaximumForce = i487[2]
  i486.m_UseAcceleration = i487[3]
  return i486
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i489 = data
  i488.m_Spring = i489[0]
  i488.m_Damper = i489[1]
  return i488
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i491 = data
  i490.m_Limit = i491[0]
  i490.m_Bounciness = i491[1]
  i490.m_ContactDistance = i491[2]
  return i490
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i493 = data
  i492.m_ExtremumSlip = i493[0]
  i492.m_ExtremumValue = i493[1]
  i492.m_AsymptoteSlip = i493[2]
  i492.m_AsymptoteValue = i493[3]
  i492.m_Stiffness = i493[4]
  return i492
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i495 = data
  i494.m_LowerAngle = i495[0]
  i494.m_UpperAngle = i495[1]
  return i494
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i497 = data
  i496.m_MotorSpeed = i497[0]
  i496.m_MaximumMotorTorque = i497[1]
  return i496
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i499 = data
  i498.m_DampingRatio = i499[0]
  i498.m_Frequency = i499[1]
  i498.m_Angle = i499[2]
  return i498
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i501 = data
  i500.m_LowerTranslation = i501[0]
  i500.m_UpperTranslation = i501[1]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i503 = data
  i502.name = i503[0]
  i502.width = i503[1]
  i502.height = i503[2]
  i502.mipmapCount = i503[3]
  i502.anisoLevel = i503[4]
  i502.filterMode = i503[5]
  i502.hdr = !!i503[6]
  i502.format = i503[7]
  i502.wrapMode = i503[8]
  i502.alphaIsTransparency = !!i503[9]
  i502.alphaSource = i503[10]
  i502.graphicsFormat = i503[11]
  i502.sRGBTexture = !!i503[12]
  i502.desiredColorSpace = i503[13]
  i502.wrapU = i503[14]
  i502.wrapV = i503[15]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i504 = root || new pc.UnityMaterial()
  var i505 = data
  i504.name = i505[0]
  request.r(i505[1], i505[2], 0, i504, 'shader')
  i504.renderQueue = i505[3]
  i504.enableInstancing = !!i505[4]
  var i507 = i505[5]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i507[i + 0]) );
  }
  i504.floatParameters = i506
  var i509 = i505[6]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i509[i + 0]) );
  }
  i504.colorParameters = i508
  var i511 = i505[7]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i511[i + 0]) );
  }
  i504.vectorParameters = i510
  var i513 = i505[8]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i513[i + 0]) );
  }
  i504.textureParameters = i512
  var i515 = i505[9]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i515[i + 0]) );
  }
  i504.materialFlags = i514
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i519 = data
  i518.name = i519[0]
  i518.value = i519[1]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i523 = data
  i522.name = i523[0]
  i522.value = new pc.Color(i523[1], i523[2], i523[3], i523[4])
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i527 = data
  i526.name = i527[0]
  i526.value = new pc.Vec4( i527[1], i527[2], i527[3], i527[4] )
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i531 = data
  i530.name = i531[0]
  request.r(i531[1], i531[2], 0, i530, 'value')
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i535 = data
  i534.name = i535[0]
  i534.enabled = !!i535[1]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i537 = data
  i536.name = i537[0]
  i536.index = i537[1]
  i536.startup = !!i537[2]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i539 = data
  i538.position = new pc.Vec3( i539[0], i539[1], i539[2] )
  i538.scale = new pc.Vec3( i539[3], i539[4], i539[5] )
  i538.rotation = new pc.Quat(i539[6], i539[7], i539[8], i539[9])
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i541 = data
  i540.aspect = i541[0]
  i540.orthographic = !!i541[1]
  i540.orthographicSize = i541[2]
  i540.backgroundColor = new pc.Color(i541[3], i541[4], i541[5], i541[6])
  i540.nearClipPlane = i541[7]
  i540.farClipPlane = i541[8]
  i540.fieldOfView = i541[9]
  i540.depth = i541[10]
  i540.clearFlags = i541[11]
  i540.cullingMask = i541[12]
  i540.rect = i541[13]
  request.r(i541[14], i541[15], 0, i540, 'targetTexture')
  i540.usePhysicalProperties = !!i541[16]
  i540.focalLength = i541[17]
  i540.sensorSize = new pc.Vec2( i541[18], i541[19] )
  i540.lensShift = new pc.Vec2( i541[20], i541[21] )
  i540.gateFit = i541[22]
  i540.commandBufferCount = i541[23]
  i540.cameraType = i541[24]
  i540.enabled = !!i541[25]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i543 = data
  i542.name = i543[0]
  i542.tagId = i543[1]
  i542.enabled = !!i543[2]
  i542.isStatic = !!i543[3]
  i542.layer = i543[4]
  return i542
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'm_FirstSelected')
  i544.m_sendNavigationEvents = !!i545[2]
  i544.m_DragThreshold = i545[3]
  return i544
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i547 = data
  i546.m_HorizontalAxis = i547[0]
  i546.m_VerticalAxis = i547[1]
  i546.m_SubmitButton = i547[2]
  i546.m_CancelButton = i547[3]
  i546.m_InputActionsPerSecond = i547[4]
  i546.m_RepeatDelay = i547[5]
  i546.m_ForceModuleActive = !!i547[6]
  i546.m_SendPointerHoverToParent = !!i547[7]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i549 = data
  i548.pivot = new pc.Vec2( i549[0], i549[1] )
  i548.anchorMin = new pc.Vec2( i549[2], i549[3] )
  i548.anchorMax = new pc.Vec2( i549[4], i549[5] )
  i548.sizeDelta = new pc.Vec2( i549[6], i549[7] )
  i548.anchoredPosition3D = new pc.Vec3( i549[8], i549[9], i549[10] )
  i548.rotation = new pc.Quat(i549[11], i549[12], i549[13], i549[14])
  i548.scale = new pc.Vec3( i549[15], i549[16], i549[17] )
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i551 = data
  i550.planeDistance = i551[0]
  i550.referencePixelsPerUnit = i551[1]
  i550.isFallbackOverlay = !!i551[2]
  i550.renderMode = i551[3]
  i550.renderOrder = i551[4]
  i550.sortingLayerName = i551[5]
  i550.sortingOrder = i551[6]
  i550.scaleFactor = i551[7]
  request.r(i551[8], i551[9], 0, i550, 'worldCamera')
  i550.overrideSorting = !!i551[10]
  i550.pixelPerfect = !!i551[11]
  i550.targetDisplay = i551[12]
  i550.overridePixelPerfect = !!i551[13]
  i550.enabled = !!i551[14]
  return i550
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i553 = data
  i552.m_UiScaleMode = i553[0]
  i552.m_ReferencePixelsPerUnit = i553[1]
  i552.m_ScaleFactor = i553[2]
  i552.m_ReferenceResolution = new pc.Vec2( i553[3], i553[4] )
  i552.m_ScreenMatchMode = i553[5]
  i552.m_MatchWidthOrHeight = i553[6]
  i552.m_PhysicalUnit = i553[7]
  i552.m_FallbackScreenDPI = i553[8]
  i552.m_DefaultSpriteDPI = i553[9]
  i552.m_DynamicPixelsPerUnit = i553[10]
  i552.m_PresetInfoIsWorld = !!i553[11]
  return i552
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i555 = data
  i554.m_IgnoreReversedGraphics = !!i555[0]
  i554.m_BlockingObjects = i555[1]
  i554.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i555[2] )
  return i554
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i556 = root || request.c( 'LunaManager' )
  var i557 = data
  var i559 = i557[0]
  var i558 = []
  for(var i = 0; i < i559.length; i += 2) {
  request.r(i559[i + 0], i559[i + 1], 2, i558, '')
  }
  i556.stepDrags = i558
  var i561 = i557[1]
  var i560 = []
  for(var i = 0; i < i561.length; i += 2) {
  request.r(i561[i + 0], i561[i + 1], 2, i560, '')
  }
  i556.lstBtnInstall = i560
  request.r(i557[2], i557[3], 0, i556, 'WinGO')
  request.r(i557[4], i557[5], 0, i556, 'LoseGO')
  request.r(i557[6], i557[7], 0, i556, 'StartCard')
  request.r(i557[8], i557[9], 0, i556, 'EndCard')
  request.r(i557[10], i557[11], 0, i556, 'Parent')
  i556.isDrag = !!i557[12]
  i556.timeDrag = i557[13]
  i556.countPlay = i557[14]
  i556.countPlayFinal = i557[15]
  i556.countPlayMax = i557[16]
  i556.timeDropFinal = i557[17]
  i556.colorBG = new pc.Color(i557[18], i557[19], i557[20], i557[21])
  request.r(i557[22], i557[23], 0, i556, 'texture2D')
  request.r(i557[24], i557[25], 0, i556, 'rawImageBG')
  request.r(i557[26], i557[27], 0, i556, 'textProgess')
  request.r(i557[28], i557[29], 0, i556, 'imgProgess')
  request.r(i557[30], i557[31], 0, i556, 'timeText')
  return i556
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
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i579 = data
  i578.usedByComposite = !!i579[0]
  i578.autoTiling = !!i579[1]
  var i581 = i579[2]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
  var i583 = i581[i + 0]
  var i582 = []
  for(var i = 0; i < i583.length; i += 2) {
    i582.push( new pc.Vec2( i583[i + 0], i583[i + 1] ) );
  }
    i580.push( i582 );
  }
  i578.points = i580
  i578.enabled = !!i579[3]
  i578.isTrigger = !!i579[4]
  i578.usedByEffector = !!i579[5]
  i578.density = i579[6]
  i578.offset = new pc.Vec2( i579[7], i579[8] )
  request.r(i579[9], i579[10], 0, i578, 'material')
  return i578
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i590 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'skeletonDataAsset')
  request.r(i591[2], i591[3], 0, i590, 'additiveMaterial')
  request.r(i591[4], i591[5], 0, i590, 'multiplyMaterial')
  request.r(i591[6], i591[7], 0, i590, 'screenMaterial')
  i590.initialSkinName = i591[8]
  i590.initialFlipX = !!i591[9]
  i590.initialFlipY = !!i591[10]
  i590.startingAnimation = i591[11]
  i590.startingLoop = !!i591[12]
  i590.timeScale = i591[13]
  i590.freeze = !!i591[14]
  i590.layoutScaleMode = i591[15]
  i590.updateWhenInvisible = i591[16]
  i590.allowMultipleCanvasRenderers = !!i591[17]
  var i593 = i591[18]
  var i592 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i593.length; i += 2) {
  request.r(i593[i + 0], i593[i + 1], 1, i592, '')
  }
  i590.canvasRenderers = i592
  i590.enableSeparatorSlots = !!i591[19]
  i590.updateSeparatorPartLocation = !!i591[20]
  i590.updateSeparatorPartScale = !!i591[21]
  i590.disableMeshAssignmentOnOverride = !!i591[22]
  i590.referenceSize = new pc.Vec2( i591[23], i591[24] )
  i590.referenceScale = i591[25]
  i590.rectTransformSize = new pc.Vec2( i591[26], i591[27] )
  i590.editReferenceRect = !!i591[28]
  var i595 = i591[29]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( i595[i + 0] );
  }
  i590.separatorSlotNames = i594
  var i597 = i591[30]
  var i596 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 1, i596, '')
  }
  i590.separatorParts = i596
  i590.meshGenerator = request.d('Spine.Unity.MeshGenerator', i591[31], i590.meshGenerator)
  i590.updateTiming = i591[32]
  i590.unscaledTime = !!i591[33]
  i590.m_Maskable = !!i591[34]
  request.r(i591[35], i591[36], 0, i590, 'm_Material')
  i590.m_Color = new pc.Color(i591[37], i591[38], i591[39], i591[40])
  i590.m_RaycastTarget = !!i591[41]
  i590.m_RaycastPadding = new pc.Vec4( i591[42], i591[43], i591[44], i591[45] )
  return i590
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i604 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i605 = data
  i604.settings = request.d('Spine.Unity.MeshGenerator+Settings', i605[0], i604.settings)
  return i604
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i606 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i607 = data
  i606.useClipping = !!i607[0]
  i606.zSpacing = i607[1]
  i606.pmaVertexColors = !!i607[2]
  i606.tintBlack = !!i607[3]
  i606.canvasGroupTintBlack = !!i607[4]
  i606.calculateTangents = !!i607[5]
  i606.addNormals = !!i607[6]
  i606.immutableTriangles = !!i607[7]
  return i606
}

Deserializers["Spine.Unity.SkeletonRootMotion"] = function (request, data, root) {
  var i608 = root || request.c( 'Spine.Unity.SkeletonRootMotion' )
  var i609 = data
  i608.animationTrackFlags = i609[0]
  i608.transformPositionX = !!i609[1]
  i608.transformPositionY = !!i609[2]
  i608.transformRotation = !!i609[3]
  i608.rootMotionScaleX = i609[4]
  i608.rootMotionScaleY = i609[5]
  i608.rootMotionScaleRotation = i609[6]
  i608.rootMotionTranslateXPerY = i609[7]
  i608.rootMotionTranslateYPerX = i609[8]
  request.r(i609[9], i609[10], 0, i608, 'rigidBody2D')
  i608.applyRigidbody2DGravity = !!i609[11]
  request.r(i609[12], i609[13], 0, i608, 'rigidBody')
  i608.disableOnOverride = !!i609[14]
  i608.rootMotionBoneName = i609[15]
  return i608
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i610 = root || request.c( 'MixSkeletonSkin' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'skeletonAnimation')
  var i613 = i611[2]
  var i612 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i613.length; i += 1) {
    i612.add(i613[i + 0]);
  }
  i610.skinNames = i612
  i610.defaultAnim = i611[3]
  i610.isAwake = !!i611[4]
  return i610
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i616 = root || request.c( 'DraggableItem' )
  var i617 = data
  i616.idDrag = i617[0]
  i616.isProcess = !!i617[1]
  i616.isLose = !!i617[2]
  i616.isHide = !!i617[3]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i619 = data
  i618.m_Alpha = i619[0]
  i618.m_Interactable = !!i619[1]
  i618.m_BlocksRaycasts = !!i619[2]
  i618.m_IgnoreParentGroups = !!i619[3]
  i618.enabled = !!i619[4]
  return i618
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i620 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i621 = data
  i620.m_hasFontAssetChanged = !!i621[0]
  request.r(i621[1], i621[2], 0, i620, 'm_baseMaterial')
  i620.m_maskOffset = new pc.Vec4( i621[3], i621[4], i621[5], i621[6] )
  i620.m_text = i621[7]
  i620.m_isRightToLeft = !!i621[8]
  request.r(i621[9], i621[10], 0, i620, 'm_fontAsset')
  request.r(i621[11], i621[12], 0, i620, 'm_sharedMaterial')
  var i623 = i621[13]
  var i622 = []
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 2, i622, '')
  }
  i620.m_fontSharedMaterials = i622
  request.r(i621[14], i621[15], 0, i620, 'm_fontMaterial')
  var i625 = i621[16]
  var i624 = []
  for(var i = 0; i < i625.length; i += 2) {
  request.r(i625[i + 0], i625[i + 1], 2, i624, '')
  }
  i620.m_fontMaterials = i624
  i620.m_fontColor32 = UnityEngine.Color32.ConstructColor(i621[17], i621[18], i621[19], i621[20])
  i620.m_fontColor = new pc.Color(i621[21], i621[22], i621[23], i621[24])
  i620.m_enableVertexGradient = !!i621[25]
  i620.m_colorMode = i621[26]
  i620.m_fontColorGradient = request.d('TMPro.VertexGradient', i621[27], i620.m_fontColorGradient)
  request.r(i621[28], i621[29], 0, i620, 'm_fontColorGradientPreset')
  request.r(i621[30], i621[31], 0, i620, 'm_spriteAsset')
  i620.m_tintAllSprites = !!i621[32]
  request.r(i621[33], i621[34], 0, i620, 'm_StyleSheet')
  i620.m_TextStyleHashCode = i621[35]
  i620.m_overrideHtmlColors = !!i621[36]
  i620.m_faceColor = UnityEngine.Color32.ConstructColor(i621[37], i621[38], i621[39], i621[40])
  i620.m_fontSize = i621[41]
  i620.m_fontSizeBase = i621[42]
  i620.m_fontWeight = i621[43]
  i620.m_enableAutoSizing = !!i621[44]
  i620.m_fontSizeMin = i621[45]
  i620.m_fontSizeMax = i621[46]
  i620.m_fontStyle = i621[47]
  i620.m_HorizontalAlignment = i621[48]
  i620.m_VerticalAlignment = i621[49]
  i620.m_textAlignment = i621[50]
  i620.m_characterSpacing = i621[51]
  i620.m_wordSpacing = i621[52]
  i620.m_lineSpacing = i621[53]
  i620.m_lineSpacingMax = i621[54]
  i620.m_paragraphSpacing = i621[55]
  i620.m_charWidthMaxAdj = i621[56]
  i620.m_enableWordWrapping = !!i621[57]
  i620.m_wordWrappingRatios = i621[58]
  i620.m_overflowMode = i621[59]
  request.r(i621[60], i621[61], 0, i620, 'm_linkedTextComponent')
  request.r(i621[62], i621[63], 0, i620, 'parentLinkedComponent')
  i620.m_enableKerning = !!i621[64]
  i620.m_enableExtraPadding = !!i621[65]
  i620.checkPaddingRequired = !!i621[66]
  i620.m_isRichText = !!i621[67]
  i620.m_parseCtrlCharacters = !!i621[68]
  i620.m_isOrthographic = !!i621[69]
  i620.m_isCullingEnabled = !!i621[70]
  i620.m_horizontalMapping = i621[71]
  i620.m_verticalMapping = i621[72]
  i620.m_uvLineOffset = i621[73]
  i620.m_geometrySortingOrder = i621[74]
  i620.m_IsTextObjectScaleStatic = !!i621[75]
  i620.m_VertexBufferAutoSizeReduction = !!i621[76]
  i620.m_useMaxVisibleDescender = !!i621[77]
  i620.m_pageToDisplay = i621[78]
  i620.m_margin = new pc.Vec4( i621[79], i621[80], i621[81], i621[82] )
  i620.m_isUsingLegacyAnimationComponent = !!i621[83]
  i620.m_isVolumetricText = !!i621[84]
  i620.m_Maskable = !!i621[85]
  request.r(i621[86], i621[87], 0, i620, 'm_Material')
  i620.m_Color = new pc.Color(i621[88], i621[89], i621[90], i621[91])
  i620.m_RaycastTarget = !!i621[92]
  i620.m_RaycastPadding = new pc.Vec4( i621[93], i621[94], i621[95], i621[96] )
  return i620
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i628 = root || request.c( 'TMPro.VertexGradient' )
  var i629 = data
  i628.topLeft = new pc.Color(i629[0], i629[1], i629[2], i629[3])
  i628.topRight = new pc.Color(i629[4], i629[5], i629[6], i629[7])
  i628.bottomLeft = new pc.Color(i629[8], i629[9], i629[10], i629[11])
  i628.bottomRight = new pc.Color(i629[12], i629[13], i629[14], i629[15])
  return i628
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.Button' )
  var i631 = data
  i630.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i631[0], i630.m_OnClick)
  i630.m_Navigation = request.d('UnityEngine.UI.Navigation', i631[1], i630.m_Navigation)
  i630.m_Transition = i631[2]
  i630.m_Colors = request.d('UnityEngine.UI.ColorBlock', i631[3], i630.m_Colors)
  i630.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i631[4], i630.m_SpriteState)
  i630.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i631[5], i630.m_AnimationTriggers)
  i630.m_Interactable = !!i631[6]
  request.r(i631[7], i631[8], 0, i630, 'm_TargetGraphic')
  return i630
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i633 = data
  i632.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i633[0], i632.m_PersistentCalls)
  return i632
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i635 = data
  var i637 = i635[0]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i637.length; i += 1) {
    i636.add(request.d('UnityEngine.Events.PersistentCall', i637[i + 0]));
  }
  i634.m_Calls = i636
  return i634
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'm_Target')
  i640.m_TargetAssemblyTypeName = i641[2]
  i640.m_MethodName = i641[3]
  i640.m_Mode = i641[4]
  i640.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i641[5], i640.m_Arguments)
  i640.m_CallState = i641[6]
  return i640
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'm_ObjectArgument')
  i642.m_ObjectArgumentAssemblyTypeName = i643[2]
  i642.m_IntArgument = i643[3]
  i642.m_FloatArgument = i643[4]
  i642.m_StringArgument = i643[5]
  i642.m_BoolArgument = !!i643[6]
  return i642
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i645 = data
  i644.m_Mode = i645[0]
  i644.m_WrapAround = !!i645[1]
  request.r(i645[2], i645[3], 0, i644, 'm_SelectOnUp')
  request.r(i645[4], i645[5], 0, i644, 'm_SelectOnDown')
  request.r(i645[6], i645[7], 0, i644, 'm_SelectOnLeft')
  request.r(i645[8], i645[9], 0, i644, 'm_SelectOnRight')
  return i644
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i647 = data
  i646.m_NormalColor = new pc.Color(i647[0], i647[1], i647[2], i647[3])
  i646.m_HighlightedColor = new pc.Color(i647[4], i647[5], i647[6], i647[7])
  i646.m_PressedColor = new pc.Color(i647[8], i647[9], i647[10], i647[11])
  i646.m_SelectedColor = new pc.Color(i647[12], i647[13], i647[14], i647[15])
  i646.m_DisabledColor = new pc.Color(i647[16], i647[17], i647[18], i647[19])
  i646.m_ColorMultiplier = i647[20]
  i646.m_FadeDuration = i647[21]
  return i646
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'm_HighlightedSprite')
  request.r(i649[2], i649[3], 0, i648, 'm_PressedSprite')
  request.r(i649[4], i649[5], 0, i648, 'm_SelectedSprite')
  request.r(i649[6], i649[7], 0, i648, 'm_DisabledSprite')
  return i648
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i651 = data
  i650.m_NormalTrigger = i651[0]
  i650.m_HighlightedTrigger = i651[1]
  i650.m_PressedTrigger = i651[2]
  i650.m_SelectedTrigger = i651[3]
  i650.m_DisabledTrigger = i651[4]
  return i650
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i652 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i653 = data
  i652.targetIsSelf = !!i653[0]
  request.r(i653[1], i653[2], 0, i652, 'targetGO')
  i652.tweenTargetIsTargetGO = !!i653[3]
  i652.delay = i653[4]
  i652.duration = i653[5]
  i652.easeType = i653[6]
  i652.easeCurve = new pc.AnimationCurve( { keys_flow: i653[7] } )
  i652.loopType = i653[8]
  i652.loops = i653[9]
  i652.id = i653[10]
  i652.isRelative = !!i653[11]
  i652.isFrom = !!i653[12]
  i652.isIndependentUpdate = !!i653[13]
  i652.autoKill = !!i653[14]
  i652.autoGenerate = !!i653[15]
  i652.isActive = !!i653[16]
  i652.isValid = !!i653[17]
  request.r(i653[18], i653[19], 0, i652, 'target')
  i652.animationType = i653[20]
  i652.targetType = i653[21]
  i652.forcedTargetType = i653[22]
  i652.autoPlay = !!i653[23]
  i652.useTargetAsV3 = !!i653[24]
  i652.endValueFloat = i653[25]
  i652.endValueV3 = new pc.Vec3( i653[26], i653[27], i653[28] )
  i652.endValueV2 = new pc.Vec2( i653[29], i653[30] )
  i652.endValueColor = new pc.Color(i653[31], i653[32], i653[33], i653[34])
  i652.endValueString = i653[35]
  i652.endValueRect = UnityEngine.Rect.MinMaxRect(i653[36], i653[37], i653[38], i653[39])
  request.r(i653[40], i653[41], 0, i652, 'endValueTransform')
  i652.optionalBool0 = !!i653[42]
  i652.optionalBool1 = !!i653[43]
  i652.optionalFloat0 = i653[44]
  i652.optionalInt0 = i653[45]
  i652.optionalRotationMode = i653[46]
  i652.optionalScrambleMode = i653[47]
  i652.optionalShakeRandomnessMode = i653[48]
  i652.optionalString = i653[49]
  i652.updateType = i653[50]
  i652.isSpeedBased = !!i653[51]
  i652.hasOnStart = !!i653[52]
  i652.hasOnPlay = !!i653[53]
  i652.hasOnUpdate = !!i653[54]
  i652.hasOnStepComplete = !!i653[55]
  i652.hasOnComplete = !!i653[56]
  i652.hasOnTweenCreated = !!i653[57]
  i652.hasOnRewind = !!i653[58]
  i652.onStart = request.d('UnityEngine.Events.UnityEvent', i653[59], i652.onStart)
  i652.onPlay = request.d('UnityEngine.Events.UnityEvent', i653[60], i652.onPlay)
  i652.onUpdate = request.d('UnityEngine.Events.UnityEvent', i653[61], i652.onUpdate)
  i652.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i653[62], i652.onStepComplete)
  i652.onComplete = request.d('UnityEngine.Events.UnityEvent', i653[63], i652.onComplete)
  i652.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i653[64], i652.onTweenCreated)
  i652.onRewind = request.d('UnityEngine.Events.UnityEvent', i653[65], i652.onRewind)
  return i652
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i655 = data
  i654.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i655[0], i654.m_PersistentCalls)
  return i654
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.Mask' )
  var i657 = data
  i656.m_ShowMaskGraphic = !!i657[0]
  return i656
}

Deserializers["AudioController"] = function (request, data, root) {
  var i658 = root || request.c( 'AudioController' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'bgmSource')
  request.r(i659[2], i659[3], 0, i658, 'sfxSource')
  var i661 = i659[4]
  var i660 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i661.length; i += 1) {
    i660.add(request.d('AudioEntry', i661[i + 0]));
  }
  i658.audioEntries = i660
  return i658
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i664 = root || request.c( 'AudioEntry' )
  var i665 = data
  i664.key = i665[0]
  request.r(i665[1], i665[2], 0, i664, 'clip')
  i664.volume = i665[3]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i667 = data
  i666.ambientIntensity = i667[0]
  i666.reflectionIntensity = i667[1]
  i666.ambientMode = i667[2]
  i666.ambientLight = new pc.Color(i667[3], i667[4], i667[5], i667[6])
  i666.ambientSkyColor = new pc.Color(i667[7], i667[8], i667[9], i667[10])
  i666.ambientGroundColor = new pc.Color(i667[11], i667[12], i667[13], i667[14])
  i666.ambientEquatorColor = new pc.Color(i667[15], i667[16], i667[17], i667[18])
  i666.fogColor = new pc.Color(i667[19], i667[20], i667[21], i667[22])
  i666.fogEndDistance = i667[23]
  i666.fogStartDistance = i667[24]
  i666.fogDensity = i667[25]
  i666.fog = !!i667[26]
  request.r(i667[27], i667[28], 0, i666, 'skybox')
  i666.fogMode = i667[29]
  var i669 = i667[30]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i669[i + 0]) );
  }
  i666.lightmaps = i668
  i666.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i667[31], i666.lightProbes)
  i666.lightmapsMode = i667[32]
  i666.mixedBakeMode = i667[33]
  i666.environmentLightingMode = i667[34]
  i666.ambientProbe = new pc.SphericalHarmonicsL2(i667[35])
  i666.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i667[36])
  i666.useReferenceAmbientProbe = !!i667[37]
  request.r(i667[38], i667[39], 0, i666, 'customReflection')
  request.r(i667[40], i667[41], 0, i666, 'defaultReflection')
  i666.defaultReflectionMode = i667[42]
  i666.defaultReflectionResolution = i667[43]
  i666.sunLightObjectId = i667[44]
  i666.pixelLightCount = i667[45]
  i666.defaultReflectionHDR = !!i667[46]
  i666.hasLightDataAsset = !!i667[47]
  i666.hasManualGenerate = !!i667[48]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'lightmapColor')
  request.r(i673[2], i673[3], 0, i672, 'lightmapDirection')
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i674 = root || new UnityEngine.LightProbes()
  var i675 = data
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i683 = data
  var i685 = i683[0]
  var i684 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i685.length; i += 1) {
    i684.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i685[i + 0]));
  }
  i682.ShaderCompilationErrors = i684
  i682.name = i683[1]
  i682.guid = i683[2]
  var i687 = i683[3]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( i687[i + 0] );
  }
  i682.shaderDefinedKeywords = i686
  var i689 = i683[4]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i689[i + 0]) );
  }
  i682.passes = i688
  var i691 = i683[5]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i691[i + 0]) );
  }
  i682.usePasses = i690
  var i693 = i683[6]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i693[i + 0]) );
  }
  i682.defaultParameterValues = i692
  request.r(i683[7], i683[8], 0, i682, 'unityFallbackShader')
  i682.readDepth = !!i683[9]
  i682.isCreatedByShaderGraph = !!i683[10]
  i682.disableBatching = !!i683[11]
  i682.compiled = !!i683[12]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i697 = data
  i696.shaderName = i697[0]
  i696.errorMessage = i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i700 = root || new pc.UnityShaderPass()
  var i701 = data
  i700.id = i701[0]
  i700.subShaderIndex = i701[1]
  i700.name = i701[2]
  i700.passType = i701[3]
  i700.grabPassTextureName = i701[4]
  i700.usePass = !!i701[5]
  i700.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[6], i700.zTest)
  i700.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[7], i700.zWrite)
  i700.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[8], i700.culling)
  i700.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i701[9], i700.blending)
  i700.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i701[10], i700.alphaBlending)
  i700.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[11], i700.colorWriteMask)
  i700.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[12], i700.offsetUnits)
  i700.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[13], i700.offsetFactor)
  i700.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[14], i700.stencilRef)
  i700.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[15], i700.stencilReadMask)
  i700.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[16], i700.stencilWriteMask)
  i700.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i701[17], i700.stencilOp)
  i700.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i701[18], i700.stencilOpFront)
  i700.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i701[19], i700.stencilOpBack)
  var i703 = i701[20]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i703[i + 0]) );
  }
  i700.tags = i702
  var i705 = i701[21]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( i705[i + 0] );
  }
  i700.passDefinedKeywords = i704
  var i707 = i701[22]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i707[i + 0]) );
  }
  i700.passDefinedKeywordGroups = i706
  var i709 = i701[23]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i709[i + 0]) );
  }
  i700.variants = i708
  var i711 = i701[24]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i711[i + 0]) );
  }
  i700.excludedVariants = i710
  i700.hasDepthReader = !!i701[25]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i713 = data
  i712.val = i713[0]
  i712.name = i713[1]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i715 = data
  i714.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[0], i714.src)
  i714.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[1], i714.dst)
  i714.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[2], i714.op)
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i717 = data
  i716.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[0], i716.pass)
  i716.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[1], i716.fail)
  i716.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[2], i716.zFail)
  i716.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[3], i716.comp)
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i721 = data
  i720.name = i721[0]
  i720.value = i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i725 = data
  var i727 = i725[0]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( i727[i + 0] );
  }
  i724.keywords = i726
  i724.hasDiscard = !!i725[1]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i731 = data
  i730.passId = i731[0]
  i730.subShaderIndex = i731[1]
  var i733 = i731[2]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( i733[i + 0] );
  }
  i730.keywords = i732
  i730.vertexProgram = i731[3]
  i730.fragmentProgram = i731[4]
  i730.exportedForWebGl2 = !!i731[5]
  i730.readDepth = !!i731[6]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'shader')
  i736.pass = i737[2]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i741 = data
  i740.name = i741[0]
  i740.type = i741[1]
  i740.value = new pc.Vec4( i741[2], i741[3], i741[4], i741[5] )
  i740.textureValue = i741[6]
  i740.shaderPropertyFlag = i741[7]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i743 = data
  i742.name = i743[0]
  request.r(i743[1], i743[2], 0, i742, 'texture')
  i742.aabb = i743[3]
  i742.vertices = i743[4]
  i742.triangles = i743[5]
  i742.textureRect = UnityEngine.Rect.MinMaxRect(i743[6], i743[7], i743[8], i743[9])
  i742.packedRect = UnityEngine.Rect.MinMaxRect(i743[10], i743[11], i743[12], i743[13])
  i742.border = new pc.Vec4( i743[14], i743[15], i743[16], i743[17] )
  i742.transparency = i743[18]
  i742.bounds = i743[19]
  i742.pixelsPerUnit = i743[20]
  i742.textureWidth = i743[21]
  i742.textureHeight = i743[22]
  i742.nativeSize = new pc.Vec2( i743[23], i743[24] )
  i742.pivot = new pc.Vec2( i743[25], i743[26] )
  i742.textureRectOffset = new pc.Vec2( i743[27], i743[28] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i745 = data
  i744.name = i745[0]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i747 = data
  i746.name = i747[0]
  i746.ascent = i747[1]
  i746.originalLineHeight = i747[2]
  i746.fontSize = i747[3]
  var i749 = i747[4]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i749[i + 0]) );
  }
  i746.characterInfo = i748
  request.r(i747[5], i747[6], 0, i746, 'texture')
  i746.originalFontSize = i747[7]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i753 = data
  i752.index = i753[0]
  i752.advance = i753[1]
  i752.bearing = i753[2]
  i752.glyphWidth = i753[3]
  i752.glyphHeight = i753[4]
  i752.minX = i753[5]
  i752.maxX = i753[6]
  i752.minY = i753[7]
  i752.maxY = i753[8]
  i752.uvBottomLeftX = i753[9]
  i752.uvBottomLeftY = i753[10]
  i752.uvBottomRightX = i753[11]
  i752.uvBottomRightY = i753[12]
  i752.uvTopLeftX = i753[13]
  i752.uvTopLeftY = i753[14]
  i752.uvTopRightX = i753[15]
  i752.uvTopRightY = i753[16]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i755 = data
  i754.name = i755[0]
  i754.bytes64 = i755[1]
  i754.data = i755[2]
  return i754
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i756 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i757 = data
  var i759 = i757[0]
  var i758 = []
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 2, i758, '')
  }
  i756.atlasAssets = i758
  i756.scale = i757[1]
  request.r(i757[2], i757[3], 0, i756, 'skeletonJSON')
  i756.isUpgradingBlendModeMaterials = !!i757[4]
  i756.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i757[5], i756.blendModeMaterials)
  var i761 = i757[6]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i761.length; i += 2) {
  request.r(i761[i + 0], i761[i + 1], 1, i760, '')
  }
  i756.skeletonDataModifiers = i760
  var i763 = i757[7]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( i763[i + 0] );
  }
  i756.fromAnimation = i762
  var i765 = i757[8]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( i765[i + 0] );
  }
  i756.toAnimation = i764
  i756.duration = i757[9]
  i756.defaultMix = i757[10]
  request.r(i757[11], i757[12], 0, i756, 'controller')
  return i756
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i768 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i769 = data
  i768.applyAdditiveMaterial = !!i769[0]
  var i771 = i769[1]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i771.length; i += 1) {
    i770.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i771[i + 0]));
  }
  i768.additiveMaterials = i770
  var i773 = i769[2]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i773.length; i += 1) {
    i772.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i773[i + 0]));
  }
  i768.multiplyMaterials = i772
  var i775 = i769[3]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i775[i + 0]));
  }
  i768.screenMaterials = i774
  i768.requiresBlendModeMaterials = !!i769[4]
  return i768
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i778 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i779 = data
  i778.pageName = i779[0]
  request.r(i779[1], i779[2], 0, i778, 'material')
  return i778
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i782 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'atlasFile')
  var i785 = i783[2]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i782.materials = i784
  i782.textureLoadingMode = i783[3]
  request.r(i783[4], i783[5], 0, i782, 'onDemandTextureLoader')
  return i782
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i786 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'atlas')
  i786.normalStyle = i787[2]
  i786.normalSpacingOffset = i787[3]
  i786.boldStyle = i787[4]
  i786.boldSpacing = i787[5]
  i786.italicStyle = i787[6]
  i786.tabSize = i787[7]
  i786.hashCode = i787[8]
  request.r(i787[9], i787[10], 0, i786, 'material')
  i786.materialHashCode = i787[11]
  i786.m_Version = i787[12]
  i786.m_SourceFontFileGUID = i787[13]
  request.r(i787[14], i787[15], 0, i786, 'm_SourceFontFile_EditorRef')
  request.r(i787[16], i787[17], 0, i786, 'm_SourceFontFile')
  i786.m_AtlasPopulationMode = i787[18]
  i786.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i787[19], i786.m_FaceInfo)
  var i789 = i787[20]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i789.length; i += 1) {
    i788.add(request.d('UnityEngine.TextCore.Glyph', i789[i + 0]));
  }
  i786.m_GlyphTable = i788
  var i791 = i787[21]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('TMPro.TMP_Character', i791[i + 0]));
  }
  i786.m_CharacterTable = i790
  var i793 = i787[22]
  var i792 = []
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 2, i792, '')
  }
  i786.m_AtlasTextures = i792
  i786.m_AtlasTextureIndex = i787[23]
  i786.m_IsMultiAtlasTexturesEnabled = !!i787[24]
  i786.m_ClearDynamicDataOnBuild = !!i787[25]
  var i795 = i787[26]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i795.length; i += 1) {
    i794.add(request.d('UnityEngine.TextCore.GlyphRect', i795[i + 0]));
  }
  i786.m_UsedGlyphRects = i794
  var i797 = i787[27]
  var i796 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i797.length; i += 1) {
    i796.add(request.d('UnityEngine.TextCore.GlyphRect', i797[i + 0]));
  }
  i786.m_FreeGlyphRects = i796
  i786.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i787[28], i786.m_fontInfo)
  i786.m_AtlasWidth = i787[29]
  i786.m_AtlasHeight = i787[30]
  i786.m_AtlasPadding = i787[31]
  i786.m_AtlasRenderMode = i787[32]
  var i799 = i787[33]
  var i798 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i799.length; i += 1) {
    i798.add(request.d('TMPro.TMP_Glyph', i799[i + 0]));
  }
  i786.m_glyphInfoList = i798
  i786.m_KerningTable = request.d('TMPro.KerningTable', i787[34], i786.m_KerningTable)
  i786.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i787[35], i786.m_FontFeatureTable)
  var i801 = i787[36]
  var i800 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 1, i800, '')
  }
  i786.fallbackFontAssets = i800
  var i803 = i787[37]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 1, i802, '')
  }
  i786.m_FallbackFontAssetTable = i802
  i786.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i787[38], i786.m_CreationSettings)
  var i805 = i787[39]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('TMPro.TMP_FontWeightPair', i805[i + 0]) );
  }
  i786.m_FontWeightTable = i804
  var i807 = i787[40]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('TMPro.TMP_FontWeightPair', i807[i + 0]) );
  }
  i786.fontWeights = i806
  return i786
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i809 = data
  i808.m_FaceIndex = i809[0]
  i808.m_FamilyName = i809[1]
  i808.m_StyleName = i809[2]
  i808.m_PointSize = i809[3]
  i808.m_Scale = i809[4]
  i808.m_UnitsPerEM = i809[5]
  i808.m_LineHeight = i809[6]
  i808.m_AscentLine = i809[7]
  i808.m_CapLine = i809[8]
  i808.m_MeanLine = i809[9]
  i808.m_Baseline = i809[10]
  i808.m_DescentLine = i809[11]
  i808.m_SuperscriptOffset = i809[12]
  i808.m_SuperscriptSize = i809[13]
  i808.m_SubscriptOffset = i809[14]
  i808.m_SubscriptSize = i809[15]
  i808.m_UnderlineOffset = i809[16]
  i808.m_UnderlineThickness = i809[17]
  i808.m_StrikethroughOffset = i809[18]
  i808.m_StrikethroughThickness = i809[19]
  i808.m_TabWidth = i809[20]
  return i808
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i813 = data
  i812.m_Index = i813[0]
  i812.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i813[1], i812.m_Metrics)
  i812.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i813[2], i812.m_GlyphRect)
  i812.m_Scale = i813[3]
  i812.m_AtlasIndex = i813[4]
  i812.m_ClassDefinitionType = i813[5]
  return i812
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i815 = data
  i814.m_Width = i815[0]
  i814.m_Height = i815[1]
  i814.m_HorizontalBearingX = i815[2]
  i814.m_HorizontalBearingY = i815[3]
  i814.m_HorizontalAdvance = i815[4]
  return i814
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i817 = data
  i816.m_X = i817[0]
  i816.m_Y = i817[1]
  i816.m_Width = i817[2]
  i816.m_Height = i817[3]
  return i816
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i820 = root || request.c( 'TMPro.TMP_Character' )
  var i821 = data
  i820.m_ElementType = i821[0]
  i820.m_Unicode = i821[1]
  i820.m_GlyphIndex = i821[2]
  i820.m_Scale = i821[3]
  return i820
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i826 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i827 = data
  i826.Name = i827[0]
  i826.PointSize = i827[1]
  i826.Scale = i827[2]
  i826.CharacterCount = i827[3]
  i826.LineHeight = i827[4]
  i826.Baseline = i827[5]
  i826.Ascender = i827[6]
  i826.CapHeight = i827[7]
  i826.Descender = i827[8]
  i826.CenterLine = i827[9]
  i826.SuperscriptOffset = i827[10]
  i826.SubscriptOffset = i827[11]
  i826.SubSize = i827[12]
  i826.Underline = i827[13]
  i826.UnderlineThickness = i827[14]
  i826.strikethrough = i827[15]
  i826.strikethroughThickness = i827[16]
  i826.TabWidth = i827[17]
  i826.Padding = i827[18]
  i826.AtlasWidth = i827[19]
  i826.AtlasHeight = i827[20]
  return i826
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i830 = root || request.c( 'TMPro.TMP_Glyph' )
  var i831 = data
  i830.id = i831[0]
  i830.x = i831[1]
  i830.y = i831[2]
  i830.width = i831[3]
  i830.height = i831[4]
  i830.xOffset = i831[5]
  i830.yOffset = i831[6]
  i830.xAdvance = i831[7]
  i830.scale = i831[8]
  return i830
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.KerningTable' )
  var i833 = data
  var i835 = i833[0]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i835.length; i += 1) {
    i834.add(request.d('TMPro.KerningPair', i835[i + 0]));
  }
  i832.kerningPairs = i834
  return i832
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.KerningPair' )
  var i839 = data
  i838.xOffset = i839[0]
  i838.m_FirstGlyph = i839[1]
  i838.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i839[2], i838.m_FirstGlyphAdjustments)
  i838.m_SecondGlyph = i839[3]
  i838.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i839[4], i838.m_SecondGlyphAdjustments)
  i838.m_IgnoreSpacingAdjustments = !!i839[5]
  return i838
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i841 = data
  var i843 = i841[0]
  var i842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i843.length; i += 1) {
    i842.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i843[i + 0]));
  }
  i840.m_GlyphPairAdjustmentRecords = i842
  return i840
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i847 = data
  i846.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i847[0], i846.m_FirstAdjustmentRecord)
  i846.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i847[1], i846.m_SecondAdjustmentRecord)
  i846.m_FeatureLookupFlags = i847[2]
  return i846
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i851 = data
  i850.sourceFontFileName = i851[0]
  i850.sourceFontFileGUID = i851[1]
  i850.pointSizeSamplingMode = i851[2]
  i850.pointSize = i851[3]
  i850.padding = i851[4]
  i850.packingMode = i851[5]
  i850.atlasWidth = i851[6]
  i850.atlasHeight = i851[7]
  i850.characterSetSelectionMode = i851[8]
  i850.characterSequence = i851[9]
  i850.referencedFontAssetGUID = i851[10]
  i850.referencedTextAssetGUID = i851[11]
  i850.fontStyle = i851[12]
  i850.fontStyleModifier = i851[13]
  i850.renderMode = i851[14]
  i850.includeFontFeatures = !!i851[15]
  return i850
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'regularTypeface')
  request.r(i855[2], i855[3], 0, i854, 'italicTypeface')
  return i854
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i856 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i857 = data
  i856.useSafeMode = !!i857[0]
  i856.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i857[1], i856.safeModeOptions)
  i856.timeScale = i857[2]
  i856.unscaledTimeScale = i857[3]
  i856.useSmoothDeltaTime = !!i857[4]
  i856.maxSmoothUnscaledTime = i857[5]
  i856.rewindCallbackMode = i857[6]
  i856.showUnityEditorReport = !!i857[7]
  i856.logBehaviour = i857[8]
  i856.drawGizmos = !!i857[9]
  i856.defaultRecyclable = !!i857[10]
  i856.defaultAutoPlay = i857[11]
  i856.defaultUpdateType = i857[12]
  i856.defaultTimeScaleIndependent = !!i857[13]
  i856.defaultEaseType = i857[14]
  i856.defaultEaseOvershootOrAmplitude = i857[15]
  i856.defaultEasePeriod = i857[16]
  i856.defaultAutoKill = !!i857[17]
  i856.defaultLoopType = i857[18]
  i856.debugMode = !!i857[19]
  i856.debugStoreTargetId = !!i857[20]
  i856.showPreviewPanel = !!i857[21]
  i856.storeSettingsLocation = i857[22]
  i856.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i857[23], i856.modules)
  i856.createASMDEF = !!i857[24]
  i856.showPlayingTweens = !!i857[25]
  i856.showPausedTweens = !!i857[26]
  return i856
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i858 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i859 = data
  i858.logBehaviour = i859[0]
  i858.nestedTweenFailureBehaviour = i859[1]
  return i858
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i860 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i861 = data
  i860.showPanel = !!i861[0]
  i860.audioEnabled = !!i861[1]
  i860.physicsEnabled = !!i861[2]
  i860.physics2DEnabled = !!i861[3]
  i860.spriteEnabled = !!i861[4]
  i860.uiEnabled = !!i861[5]
  i860.textMeshProEnabled = !!i861[6]
  i860.tk2DEnabled = !!i861[7]
  i860.deAudioEnabled = !!i861[8]
  i860.deUnityExtendedEnabled = !!i861[9]
  i860.epoOutlineEnabled = !!i861[10]
  return i860
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.TMP_Settings' )
  var i863 = data
  i862.m_enableWordWrapping = !!i863[0]
  i862.m_enableKerning = !!i863[1]
  i862.m_enableExtraPadding = !!i863[2]
  i862.m_enableTintAllSprites = !!i863[3]
  i862.m_enableParseEscapeCharacters = !!i863[4]
  i862.m_EnableRaycastTarget = !!i863[5]
  i862.m_GetFontFeaturesAtRuntime = !!i863[6]
  i862.m_missingGlyphCharacter = i863[7]
  i862.m_warningsDisabled = !!i863[8]
  request.r(i863[9], i863[10], 0, i862, 'm_defaultFontAsset')
  i862.m_defaultFontAssetPath = i863[11]
  i862.m_defaultFontSize = i863[12]
  i862.m_defaultAutoSizeMinRatio = i863[13]
  i862.m_defaultAutoSizeMaxRatio = i863[14]
  i862.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i863[15], i863[16] )
  i862.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i863[17], i863[18] )
  i862.m_autoSizeTextContainer = !!i863[19]
  i862.m_IsTextObjectScaleStatic = !!i863[20]
  var i865 = i863[21]
  var i864 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 1, i864, '')
  }
  i862.m_fallbackFontAssets = i864
  i862.m_matchMaterialPreset = !!i863[22]
  request.r(i863[23], i863[24], 0, i862, 'm_defaultSpriteAsset')
  i862.m_defaultSpriteAssetPath = i863[25]
  i862.m_enableEmojiSupport = !!i863[26]
  i862.m_MissingCharacterSpriteUnicode = i863[27]
  i862.m_defaultColorGradientPresetsPath = i863[28]
  request.r(i863[29], i863[30], 0, i862, 'm_defaultStyleSheet')
  i862.m_StyleSheetsResourcePath = i863[31]
  request.r(i863[32], i863[33], 0, i862, 'm_leadingCharacters')
  request.r(i863[34], i863[35], 0, i862, 'm_followingCharacters')
  i862.m_UseModernHangulLineBreakingRules = !!i863[36]
  return i862
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'spriteSheet')
  var i869 = i867[2]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i869.length; i += 1) {
    i868.add(request.d('TMPro.TMP_Sprite', i869[i + 0]));
  }
  i866.spriteInfoList = i868
  var i871 = i867[3]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 1, i870, '')
  }
  i866.fallbackSpriteAssets = i870
  i866.hashCode = i867[4]
  request.r(i867[5], i867[6], 0, i866, 'material')
  i866.materialHashCode = i867[7]
  i866.m_Version = i867[8]
  i866.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i867[9], i866.m_FaceInfo)
  var i873 = i867[10]
  var i872 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i873.length; i += 1) {
    i872.add(request.d('TMPro.TMP_SpriteCharacter', i873[i + 0]));
  }
  i866.m_SpriteCharacterTable = i872
  var i875 = i867[11]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i875.length; i += 1) {
    i874.add(request.d('TMPro.TMP_SpriteGlyph', i875[i + 0]));
  }
  i866.m_SpriteGlyphTable = i874
  return i866
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.TMP_Sprite' )
  var i879 = data
  i878.name = i879[0]
  i878.hashCode = i879[1]
  i878.unicode = i879[2]
  i878.pivot = new pc.Vec2( i879[3], i879[4] )
  request.r(i879[5], i879[6], 0, i878, 'sprite')
  i878.id = i879[7]
  i878.x = i879[8]
  i878.y = i879[9]
  i878.width = i879[10]
  i878.height = i879[11]
  i878.xOffset = i879[12]
  i878.yOffset = i879[13]
  i878.xAdvance = i879[14]
  i878.scale = i879[15]
  return i878
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i885 = data
  i884.m_Name = i885[0]
  i884.m_HashCode = i885[1]
  i884.m_ElementType = i885[2]
  i884.m_Unicode = i885[3]
  i884.m_GlyphIndex = i885[4]
  i884.m_Scale = i885[5]
  return i884
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i888 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'sprite')
  i888.m_Index = i889[2]
  i888.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i889[3], i888.m_Metrics)
  i888.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i889[4], i888.m_GlyphRect)
  i888.m_Scale = i889[5]
  i888.m_AtlasIndex = i889[6]
  i888.m_ClassDefinitionType = i889[7]
  return i888
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i890 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i891 = data
  var i893 = i891[0]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('TMPro.TMP_Style', i893[i + 0]));
  }
  i890.m_StyleList = i892
  return i890
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i896 = root || request.c( 'TMPro.TMP_Style' )
  var i897 = data
  i896.m_Name = i897[0]
  i896.m_HashCode = i897[1]
  i896.m_OpeningDefinition = i897[2]
  i896.m_ClosingDefinition = i897[3]
  i896.m_OpeningTagArray = i897[4]
  i896.m_ClosingTagArray = i897[5]
  i896.m_OpeningTagUnicodeArray = i897[6]
  i896.m_ClosingTagUnicodeArray = i897[7]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i899 = data
  var i901 = i899[0]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i901[i + 0]) );
  }
  i898.files = i900
  i898.componentToPrefabIds = i899[1]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i905 = data
  i904.path = i905[0]
  request.r(i905[1], i905[2], 0, i904, 'unityObject')
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i907 = data
  var i909 = i907[0]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i909[i + 0]) );
  }
  i906.scriptsExecutionOrder = i908
  var i911 = i907[1]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i911[i + 0]) );
  }
  i906.sortingLayers = i910
  var i913 = i907[2]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i913[i + 0]) );
  }
  i906.cullingLayers = i912
  i906.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i907[3], i906.timeSettings)
  i906.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i907[4], i906.physicsSettings)
  i906.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i907[5], i906.physics2DSettings)
  i906.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i907[6], i906.qualitySettings)
  i906.enableRealtimeShadows = !!i907[7]
  i906.enableAutoInstancing = !!i907[8]
  i906.enableStaticBatching = !!i907[9]
  i906.enableDynamicBatching = !!i907[10]
  i906.lightmapEncodingQuality = i907[11]
  i906.desiredColorSpace = i907[12]
  var i915 = i907[13]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( i915[i + 0] );
  }
  i906.allTags = i914
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i919 = data
  i918.name = i919[0]
  i918.value = i919[1]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i923 = data
  i922.id = i923[0]
  i922.name = i923[1]
  i922.value = i923[2]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i927 = data
  i926.id = i927[0]
  i926.name = i927[1]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i929 = data
  i928.fixedDeltaTime = i929[0]
  i928.maximumDeltaTime = i929[1]
  i928.timeScale = i929[2]
  i928.maximumParticleTimestep = i929[3]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i931 = data
  i930.gravity = new pc.Vec3( i931[0], i931[1], i931[2] )
  i930.defaultSolverIterations = i931[3]
  i930.bounceThreshold = i931[4]
  i930.autoSyncTransforms = !!i931[5]
  i930.autoSimulation = !!i931[6]
  var i933 = i931[7]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i933[i + 0]) );
  }
  i930.collisionMatrix = i932
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i937 = data
  i936.enabled = !!i937[0]
  i936.layerId = i937[1]
  i936.otherLayerId = i937[2]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'material')
  i938.gravity = new pc.Vec2( i939[2], i939[3] )
  i938.positionIterations = i939[4]
  i938.velocityIterations = i939[5]
  i938.velocityThreshold = i939[6]
  i938.maxLinearCorrection = i939[7]
  i938.maxAngularCorrection = i939[8]
  i938.maxTranslationSpeed = i939[9]
  i938.maxRotationSpeed = i939[10]
  i938.baumgarteScale = i939[11]
  i938.baumgarteTOIScale = i939[12]
  i938.timeToSleep = i939[13]
  i938.linearSleepTolerance = i939[14]
  i938.angularSleepTolerance = i939[15]
  i938.defaultContactOffset = i939[16]
  i938.autoSimulation = !!i939[17]
  i938.queriesHitTriggers = !!i939[18]
  i938.queriesStartInColliders = !!i939[19]
  i938.callbacksOnDisable = !!i939[20]
  i938.reuseCollisionCallbacks = !!i939[21]
  i938.autoSyncTransforms = !!i939[22]
  var i941 = i939[23]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i941[i + 0]) );
  }
  i938.collisionMatrix = i940
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i945 = data
  i944.enabled = !!i945[0]
  i944.layerId = i945[1]
  i944.otherLayerId = i945[2]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i947 = data
  var i949 = i947[0]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i949[i + 0]) );
  }
  i946.qualityLevels = i948
  var i951 = i947[1]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( i951[i + 0] );
  }
  i946.names = i950
  i946.shadows = i947[2]
  i946.anisotropicFiltering = i947[3]
  i946.antiAliasing = i947[4]
  i946.lodBias = i947[5]
  i946.shadowCascades = i947[6]
  i946.shadowDistance = i947[7]
  i946.shadowmaskMode = i947[8]
  i946.shadowProjection = i947[9]
  i946.shadowResolution = i947[10]
  i946.softParticles = !!i947[11]
  i946.softVegetation = !!i947[12]
  i946.activeColorSpace = i947[13]
  i946.desiredColorSpace = i947[14]
  i946.masterTextureLimit = i947[15]
  i946.maxQueuedFrames = i947[16]
  i946.particleRaycastBudget = i947[17]
  i946.pixelLightCount = i947[18]
  i946.realtimeReflectionProbes = !!i947[19]
  i946.shadowCascade2Split = i947[20]
  i946.shadowCascade4Split = new pc.Vec3( i947[21], i947[22], i947[23] )
  i946.streamingMipmapsActive = !!i947[24]
  i946.vSyncCount = i947[25]
  i946.asyncUploadBufferSize = i947[26]
  i946.asyncUploadTimeSlice = i947[27]
  i946.billboardsFaceCameraPosition = !!i947[28]
  i946.shadowNearPlaneOffset = i947[29]
  i946.streamingMipmapsMemoryBudget = i947[30]
  i946.maximumLODLevel = i947[31]
  i946.streamingMipmapsAddAllCameras = !!i947[32]
  i946.streamingMipmapsMaxLevelReduction = i947[33]
  i946.streamingMipmapsRenderersPerFrame = i947[34]
  i946.resolutionScalingFixedDPIFactor = i947[35]
  i946.streamingMipmapsMaxFileIORequests = i947[36]
  i946.currentQualityLevel = i947[37]
  return i946
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i955 = data
  i954.xPlacement = i955[0]
  i954.yPlacement = i955[1]
  i954.xAdvance = i955[2]
  i954.yAdvance = i955[3]
  return i954
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i956 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i957 = data
  i956.m_GlyphIndex = i957[0]
  i956.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i957[1], i956.m_GlyphValueRecord)
  return i956
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i959 = data
  i958.m_XPlacement = i959[0]
  i958.m_YPlacement = i959[1]
  i958.m_XAdvance = i959[2]
  i958.m_YAdvance = i959[3]
  return i958
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[3],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[3],"76":[77],"78":[79],"80":[79],"9":[8],"81":[82],"83":[84],"85":[82],"86":[8],"87":[8],"11":[9],"18":[19,8],"88":[8],"10":[9],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"34":[8],"96":[8],"16":[19,8],"97":[8],"98":[8],"99":[8],"100":[8],"101":[19,8],"102":[8],"103":[6],"104":[6],"7":[6],"105":[6],"106":[3],"107":[3],"108":[109],"110":[3],"111":[112],"113":[8],"114":[19,8],"115":[77],"25":[19,8],"116":[117,77],"118":[77],"119":[77,120],"121":[54],"122":[62],"123":[112],"124":[125],"126":[8],"127":[77,8],"17":[8,19],"128":[8],"129":[19,8],"130":[77],"131":[19,8],"132":[8],"133":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.GameObject","UnityEngine.UI.Button","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","DropZone","UnityEngine.PolygonCollider2D","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","Spine.Unity.SkeletonRootMotion","MixSkeletonSkin","DraggableItem","UnityEngine.CanvasGroup","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "276.2";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BP_V20_NgocNDL_AnhPD";

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

Deserializers.buildID = "0a276490-e6bb-4f54-878d-7a5a919f61dc";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

