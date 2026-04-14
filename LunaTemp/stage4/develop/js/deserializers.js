var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointSpring' )
  var i489 = data
  i488.spring = i489[0]
  i488.damper = i489[1]
  i488.targetPosition = i489[2]
  return i488
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointMotor' )
  var i491 = data
  i490.m_TargetVelocity = i491[0]
  i490.m_Force = i491[1]
  i490.m_FreeSpin = i491[2]
  return i490
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointLimits' )
  var i493 = data
  i492.m_Min = i493[0]
  i492.m_Max = i493[1]
  i492.m_Bounciness = i493[2]
  i492.m_BounceMinVelocity = i493[3]
  i492.m_ContactDistance = i493[4]
  i492.minBounce = i493[5]
  i492.maxBounce = i493[6]
  return i492
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointDrive' )
  var i495 = data
  i494.m_PositionSpring = i495[0]
  i494.m_PositionDamper = i495[1]
  i494.m_MaximumForce = i495[2]
  i494.m_UseAcceleration = i495[3]
  return i494
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i497 = data
  i496.m_Spring = i497[0]
  i496.m_Damper = i497[1]
  return i496
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i499 = data
  i498.m_Limit = i499[0]
  i498.m_Bounciness = i499[1]
  i498.m_ContactDistance = i499[2]
  return i498
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i501 = data
  i500.m_ExtremumSlip = i501[0]
  i500.m_ExtremumValue = i501[1]
  i500.m_AsymptoteSlip = i501[2]
  i500.m_AsymptoteValue = i501[3]
  i500.m_Stiffness = i501[4]
  return i500
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i503 = data
  i502.m_LowerAngle = i503[0]
  i502.m_UpperAngle = i503[1]
  return i502
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i505 = data
  i504.m_MotorSpeed = i505[0]
  i504.m_MaximumMotorTorque = i505[1]
  return i504
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i507 = data
  i506.m_DampingRatio = i507[0]
  i506.m_Frequency = i507[1]
  i506.m_Angle = i507[2]
  return i506
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i509 = data
  i508.m_LowerTranslation = i509[0]
  i508.m_UpperTranslation = i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i511 = data
  i510.name = i511[0]
  i510.width = i511[1]
  i510.height = i511[2]
  i510.mipmapCount = i511[3]
  i510.anisoLevel = i511[4]
  i510.filterMode = i511[5]
  i510.hdr = !!i511[6]
  i510.format = i511[7]
  i510.wrapMode = i511[8]
  i510.alphaIsTransparency = !!i511[9]
  i510.alphaSource = i511[10]
  i510.graphicsFormat = i511[11]
  i510.sRGBTexture = !!i511[12]
  i510.desiredColorSpace = i511[13]
  i510.wrapU = i511[14]
  i510.wrapV = i511[15]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i512 = root || new pc.UnityMaterial()
  var i513 = data
  i512.name = i513[0]
  request.r(i513[1], i513[2], 0, i512, 'shader')
  i512.renderQueue = i513[3]
  i512.enableInstancing = !!i513[4]
  var i515 = i513[5]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i515[i + 0]) );
  }
  i512.floatParameters = i514
  var i517 = i513[6]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i517[i + 0]) );
  }
  i512.colorParameters = i516
  var i519 = i513[7]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i519[i + 0]) );
  }
  i512.vectorParameters = i518
  var i521 = i513[8]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i521[i + 0]) );
  }
  i512.textureParameters = i520
  var i523 = i513[9]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i523[i + 0]) );
  }
  i512.materialFlags = i522
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i527 = data
  i526.name = i527[0]
  i526.value = i527[1]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i531 = data
  i530.name = i531[0]
  i530.value = new pc.Color(i531[1], i531[2], i531[3], i531[4])
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i535 = data
  i534.name = i535[0]
  i534.value = new pc.Vec4( i535[1], i535[2], i535[3], i535[4] )
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i539 = data
  i538.name = i539[0]
  request.r(i539[1], i539[2], 0, i538, 'value')
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i543 = data
  i542.name = i543[0]
  i542.enabled = !!i543[1]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i545 = data
  i544.name = i545[0]
  i544.index = i545[1]
  i544.startup = !!i545[2]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i547 = data
  i546.position = new pc.Vec3( i547[0], i547[1], i547[2] )
  i546.scale = new pc.Vec3( i547[3], i547[4], i547[5] )
  i546.rotation = new pc.Quat(i547[6], i547[7], i547[8], i547[9])
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i549 = data
  i548.aspect = i549[0]
  i548.orthographic = !!i549[1]
  i548.orthographicSize = i549[2]
  i548.backgroundColor = new pc.Color(i549[3], i549[4], i549[5], i549[6])
  i548.nearClipPlane = i549[7]
  i548.farClipPlane = i549[8]
  i548.fieldOfView = i549[9]
  i548.depth = i549[10]
  i548.clearFlags = i549[11]
  i548.cullingMask = i549[12]
  i548.rect = i549[13]
  request.r(i549[14], i549[15], 0, i548, 'targetTexture')
  i548.usePhysicalProperties = !!i549[16]
  i548.focalLength = i549[17]
  i548.sensorSize = new pc.Vec2( i549[18], i549[19] )
  i548.lensShift = new pc.Vec2( i549[20], i549[21] )
  i548.gateFit = i549[22]
  i548.commandBufferCount = i549[23]
  i548.cameraType = i549[24]
  i548.enabled = !!i549[25]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i551 = data
  i550.name = i551[0]
  i550.tagId = i551[1]
  i550.enabled = !!i551[2]
  i550.isStatic = !!i551[3]
  i550.layer = i551[4]
  return i550
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'm_FirstSelected')
  i552.m_sendNavigationEvents = !!i553[2]
  i552.m_DragThreshold = i553[3]
  return i552
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i555 = data
  i554.m_HorizontalAxis = i555[0]
  i554.m_VerticalAxis = i555[1]
  i554.m_SubmitButton = i555[2]
  i554.m_CancelButton = i555[3]
  i554.m_InputActionsPerSecond = i555[4]
  i554.m_RepeatDelay = i555[5]
  i554.m_ForceModuleActive = !!i555[6]
  i554.m_SendPointerHoverToParent = !!i555[7]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i557 = data
  i556.pivot = new pc.Vec2( i557[0], i557[1] )
  i556.anchorMin = new pc.Vec2( i557[2], i557[3] )
  i556.anchorMax = new pc.Vec2( i557[4], i557[5] )
  i556.sizeDelta = new pc.Vec2( i557[6], i557[7] )
  i556.anchoredPosition3D = new pc.Vec3( i557[8], i557[9], i557[10] )
  i556.rotation = new pc.Quat(i557[11], i557[12], i557[13], i557[14])
  i556.scale = new pc.Vec3( i557[15], i557[16], i557[17] )
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i559 = data
  i558.planeDistance = i559[0]
  i558.referencePixelsPerUnit = i559[1]
  i558.isFallbackOverlay = !!i559[2]
  i558.renderMode = i559[3]
  i558.renderOrder = i559[4]
  i558.sortingLayerName = i559[5]
  i558.sortingOrder = i559[6]
  i558.scaleFactor = i559[7]
  request.r(i559[8], i559[9], 0, i558, 'worldCamera')
  i558.overrideSorting = !!i559[10]
  i558.pixelPerfect = !!i559[11]
  i558.targetDisplay = i559[12]
  i558.overridePixelPerfect = !!i559[13]
  i558.enabled = !!i559[14]
  return i558
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i561 = data
  i560.m_UiScaleMode = i561[0]
  i560.m_ReferencePixelsPerUnit = i561[1]
  i560.m_ScaleFactor = i561[2]
  i560.m_ReferenceResolution = new pc.Vec2( i561[3], i561[4] )
  i560.m_ScreenMatchMode = i561[5]
  i560.m_MatchWidthOrHeight = i561[6]
  i560.m_PhysicalUnit = i561[7]
  i560.m_FallbackScreenDPI = i561[8]
  i560.m_DefaultSpriteDPI = i561[9]
  i560.m_DynamicPixelsPerUnit = i561[10]
  i560.m_PresetInfoIsWorld = !!i561[11]
  return i560
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i563 = data
  i562.m_IgnoreReversedGraphics = !!i563[0]
  i562.m_BlockingObjects = i563[1]
  i562.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i563[2] )
  return i562
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i564 = root || request.c( 'LunaManager' )
  var i565 = data
  var i567 = i565[0]
  var i566 = []
  for(var i = 0; i < i567.length; i += 2) {
  request.r(i567[i + 0], i567[i + 1], 2, i566, '')
  }
  i564.lstBtnInstall = i566
  request.r(i565[1], i565[2], 0, i564, 'WinGO')
  request.r(i565[3], i565[4], 0, i564, 'LoseGO')
  request.r(i565[5], i565[6], 0, i564, 'StartCard')
  request.r(i565[7], i565[8], 0, i564, 'EndCard')
  request.r(i565[9], i565[10], 0, i564, 'Parent')
  i564.isDrag = !!i565[11]
  i564.timeDrag = i565[12]
  i564.countPlay = i565[13]
  i564.countPlayFinal = i565[14]
  i564.countPlayMax = i565[15]
  i564.timeDropFinal = i565[16]
  i564.colorBG = new pc.Color(i565[17], i565[18], i565[19], i565[20])
  request.r(i565[21], i565[22], 0, i564, 'texture2D')
  request.r(i565[23], i565[24], 0, i564, 'rawImageBG')
  var i569 = i565[25]
  var i568 = []
  for(var i = 0; i < i569.length; i += 2) {
  request.r(i569[i + 0], i569[i + 1], 2, i568, '')
  }
  i564.skeDogs = i568
  request.r(i565[26], i565[27], 0, i564, 'textProgess')
  request.r(i565[28], i565[29], 0, i564, 'imgProgess')
  request.r(i565[30], i565[31], 0, i564, 'timeText')
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i575 = data
  i574.cullTransparentMesh = !!i575[0]
  return i574
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'm_Texture')
  i576.m_UVRect = UnityEngine.Rect.MinMaxRect(i577[2], i577[3], i577[4], i577[5])
  i576.m_Maskable = !!i577[6]
  request.r(i577[7], i577[8], 0, i576, 'm_Material')
  i576.m_Color = new pc.Color(i577[9], i577[10], i577[11], i577[12])
  i576.m_RaycastTarget = !!i577[13]
  i576.m_RaycastPadding = new pc.Vec4( i577[14], i577[15], i577[16], i577[17] )
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'clip')
  request.r(i579[2], i579[3], 0, i578, 'outputAudioMixerGroup')
  i578.playOnAwake = !!i579[4]
  i578.loop = !!i579[5]
  i578.time = i579[6]
  i578.volume = i579[7]
  i578.pitch = i579[8]
  i578.enabled = !!i579[9]
  return i578
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.UI.Image' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'm_Sprite')
  i580.m_Type = i581[2]
  i580.m_PreserveAspect = !!i581[3]
  i580.m_FillCenter = !!i581[4]
  i580.m_FillMethod = i581[5]
  i580.m_FillAmount = i581[6]
  i580.m_FillClockwise = !!i581[7]
  i580.m_FillOrigin = i581[8]
  i580.m_UseSpriteMesh = !!i581[9]
  i580.m_PixelsPerUnitMultiplier = i581[10]
  i580.m_Maskable = !!i581[11]
  request.r(i581[12], i581[13], 0, i580, 'm_Material')
  i580.m_Color = new pc.Color(i581[14], i581[15], i581[16], i581[17])
  i580.m_RaycastTarget = !!i581[18]
  i580.m_RaycastPadding = new pc.Vec4( i581[19], i581[20], i581[21], i581[22] )
  return i580
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i582 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'skeletonDataAsset')
  request.r(i583[2], i583[3], 0, i582, 'additiveMaterial')
  request.r(i583[4], i583[5], 0, i582, 'multiplyMaterial')
  request.r(i583[6], i583[7], 0, i582, 'screenMaterial')
  i582.initialSkinName = i583[8]
  i582.initialFlipX = !!i583[9]
  i582.initialFlipY = !!i583[10]
  i582.startingAnimation = i583[11]
  i582.startingLoop = !!i583[12]
  i582.timeScale = i583[13]
  i582.freeze = !!i583[14]
  i582.layoutScaleMode = i583[15]
  i582.updateWhenInvisible = i583[16]
  i582.allowMultipleCanvasRenderers = !!i583[17]
  var i585 = i583[18]
  var i584 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 1, i584, '')
  }
  i582.canvasRenderers = i584
  i582.enableSeparatorSlots = !!i583[19]
  i582.updateSeparatorPartLocation = !!i583[20]
  i582.updateSeparatorPartScale = !!i583[21]
  i582.disableMeshAssignmentOnOverride = !!i583[22]
  i582.referenceSize = new pc.Vec2( i583[23], i583[24] )
  i582.referenceScale = i583[25]
  i582.rectTransformSize = new pc.Vec2( i583[26], i583[27] )
  i582.editReferenceRect = !!i583[28]
  var i587 = i583[29]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( i587[i + 0] );
  }
  i582.separatorSlotNames = i586
  var i589 = i583[30]
  var i588 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i589.length; i += 2) {
  request.r(i589[i + 0], i589[i + 1], 1, i588, '')
  }
  i582.separatorParts = i588
  i582.meshGenerator = request.d('Spine.Unity.MeshGenerator', i583[31], i582.meshGenerator)
  i582.updateTiming = i583[32]
  i582.unscaledTime = !!i583[33]
  i582.m_Maskable = !!i583[34]
  request.r(i583[35], i583[36], 0, i582, 'm_Material')
  i582.m_Color = new pc.Color(i583[37], i583[38], i583[39], i583[40])
  i582.m_RaycastTarget = !!i583[41]
  i582.m_RaycastPadding = new pc.Vec4( i583[42], i583[43], i583[44], i583[45] )
  return i582
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i596 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i597 = data
  i596.settings = request.d('Spine.Unity.MeshGenerator+Settings', i597[0], i596.settings)
  return i596
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i598 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i599 = data
  i598.useClipping = !!i599[0]
  i598.zSpacing = i599[1]
  i598.pmaVertexColors = !!i599[2]
  i598.tintBlack = !!i599[3]
  i598.canvasGroupTintBlack = !!i599[4]
  i598.calculateTangents = !!i599[5]
  i598.addNormals = !!i599[6]
  i598.immutableTriangles = !!i599[7]
  return i598
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i600 = root || request.c( 'MixSkeletonSkin' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'skeletonAnimation')
  var i603 = i601[2]
  var i602 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i603.length; i += 1) {
    i602.add(i603[i + 0]);
  }
  i600.skinNames = i602
  i600.defaultAnim = i601[3]
  return i600
}

Deserializers["DropID"] = function (request, data, root) {
  var i606 = root || request.c( 'DropID' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'mixSkeletonSkin')
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i609 = data
  i608.usedByComposite = !!i609[0]
  i608.autoTiling = !!i609[1]
  var i611 = i609[2]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
  var i613 = i611[i + 0]
  var i612 = []
  for(var i = 0; i < i613.length; i += 2) {
    i612.push( new pc.Vec2( i613[i + 0], i613[i + 1] ) );
  }
    i610.push( i612 );
  }
  i608.points = i610
  i608.enabled = !!i609[3]
  i608.isTrigger = !!i609[4]
  i608.usedByEffector = !!i609[5]
  i608.density = i609[6]
  i608.offset = new pc.Vec2( i609[7], i609[8] )
  request.r(i609[9], i609[10], 0, i608, 'material')
  return i608
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i620 = root || request.c( 'ClickItem' )
  var i621 = data
  var i623 = i621[0]
  var i622 = []
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 2, i622, '')
  }
  i620.steps = i622
  i620.currentStep = i621[1]
  i620.isProcess = !!i621[2]
  return i620
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i647 = data
  i646.m_Alpha = i647[0]
  i646.m_Interactable = !!i647[1]
  i646.m_BlocksRaycasts = !!i647[2]
  i646.m_IgnoreParentGroups = !!i647[3]
  i646.enabled = !!i647[4]
  return i646
}

Deserializers["DragID"] = function (request, data, root) {
  var i648 = root || request.c( 'DragID' )
  var i649 = data
  i648.idDrag = i649[0]
  i648.isProcess = !!i649[1]
  return i648
}

Deserializers["DropZone"] = function (request, data, root) {
  var i650 = root || request.c( 'DropZone' )
  var i651 = data
  i650.idDrop = i651[0]
  var i653 = i651[1]
  var i652 = []
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 2, i652, '')
  }
  i650.steps = i652
  request.r(i651[2], i651[3], 0, i650, 'stepLose')
  return i650
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i654 = root || request.c( 'DraggableItem' )
  var i655 = data
  i654.idDrag = i655[0]
  i654.isProcess = !!i655[1]
  i654.isLose = !!i655[2]
  i654.isHide = !!i655[3]
  return i654
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i656 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i657 = data
  i656.m_hasFontAssetChanged = !!i657[0]
  request.r(i657[1], i657[2], 0, i656, 'm_baseMaterial')
  i656.m_maskOffset = new pc.Vec4( i657[3], i657[4], i657[5], i657[6] )
  i656.m_text = i657[7]
  i656.m_isRightToLeft = !!i657[8]
  request.r(i657[9], i657[10], 0, i656, 'm_fontAsset')
  request.r(i657[11], i657[12], 0, i656, 'm_sharedMaterial')
  var i659 = i657[13]
  var i658 = []
  for(var i = 0; i < i659.length; i += 2) {
  request.r(i659[i + 0], i659[i + 1], 2, i658, '')
  }
  i656.m_fontSharedMaterials = i658
  request.r(i657[14], i657[15], 0, i656, 'm_fontMaterial')
  var i661 = i657[16]
  var i660 = []
  for(var i = 0; i < i661.length; i += 2) {
  request.r(i661[i + 0], i661[i + 1], 2, i660, '')
  }
  i656.m_fontMaterials = i660
  i656.m_fontColor32 = UnityEngine.Color32.ConstructColor(i657[17], i657[18], i657[19], i657[20])
  i656.m_fontColor = new pc.Color(i657[21], i657[22], i657[23], i657[24])
  i656.m_enableVertexGradient = !!i657[25]
  i656.m_colorMode = i657[26]
  i656.m_fontColorGradient = request.d('TMPro.VertexGradient', i657[27], i656.m_fontColorGradient)
  request.r(i657[28], i657[29], 0, i656, 'm_fontColorGradientPreset')
  request.r(i657[30], i657[31], 0, i656, 'm_spriteAsset')
  i656.m_tintAllSprites = !!i657[32]
  request.r(i657[33], i657[34], 0, i656, 'm_StyleSheet')
  i656.m_TextStyleHashCode = i657[35]
  i656.m_overrideHtmlColors = !!i657[36]
  i656.m_faceColor = UnityEngine.Color32.ConstructColor(i657[37], i657[38], i657[39], i657[40])
  i656.m_fontSize = i657[41]
  i656.m_fontSizeBase = i657[42]
  i656.m_fontWeight = i657[43]
  i656.m_enableAutoSizing = !!i657[44]
  i656.m_fontSizeMin = i657[45]
  i656.m_fontSizeMax = i657[46]
  i656.m_fontStyle = i657[47]
  i656.m_HorizontalAlignment = i657[48]
  i656.m_VerticalAlignment = i657[49]
  i656.m_textAlignment = i657[50]
  i656.m_characterSpacing = i657[51]
  i656.m_wordSpacing = i657[52]
  i656.m_lineSpacing = i657[53]
  i656.m_lineSpacingMax = i657[54]
  i656.m_paragraphSpacing = i657[55]
  i656.m_charWidthMaxAdj = i657[56]
  i656.m_enableWordWrapping = !!i657[57]
  i656.m_wordWrappingRatios = i657[58]
  i656.m_overflowMode = i657[59]
  request.r(i657[60], i657[61], 0, i656, 'm_linkedTextComponent')
  request.r(i657[62], i657[63], 0, i656, 'parentLinkedComponent')
  i656.m_enableKerning = !!i657[64]
  i656.m_enableExtraPadding = !!i657[65]
  i656.checkPaddingRequired = !!i657[66]
  i656.m_isRichText = !!i657[67]
  i656.m_parseCtrlCharacters = !!i657[68]
  i656.m_isOrthographic = !!i657[69]
  i656.m_isCullingEnabled = !!i657[70]
  i656.m_horizontalMapping = i657[71]
  i656.m_verticalMapping = i657[72]
  i656.m_uvLineOffset = i657[73]
  i656.m_geometrySortingOrder = i657[74]
  i656.m_IsTextObjectScaleStatic = !!i657[75]
  i656.m_VertexBufferAutoSizeReduction = !!i657[76]
  i656.m_useMaxVisibleDescender = !!i657[77]
  i656.m_pageToDisplay = i657[78]
  i656.m_margin = new pc.Vec4( i657[79], i657[80], i657[81], i657[82] )
  i656.m_isUsingLegacyAnimationComponent = !!i657[83]
  i656.m_isVolumetricText = !!i657[84]
  i656.m_Maskable = !!i657[85]
  request.r(i657[86], i657[87], 0, i656, 'm_Material')
  i656.m_Color = new pc.Color(i657[88], i657[89], i657[90], i657[91])
  i656.m_RaycastTarget = !!i657[92]
  i656.m_RaycastPadding = new pc.Vec4( i657[93], i657[94], i657[95], i657[96] )
  return i656
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i664 = root || request.c( 'TMPro.VertexGradient' )
  var i665 = data
  i664.topLeft = new pc.Color(i665[0], i665[1], i665[2], i665[3])
  i664.topRight = new pc.Color(i665[4], i665[5], i665[6], i665[7])
  i664.bottomLeft = new pc.Color(i665[8], i665[9], i665[10], i665[11])
  i664.bottomRight = new pc.Color(i665[12], i665[13], i665[14], i665[15])
  return i664
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'm_ObjectArgument')
  i666.m_ObjectArgumentAssemblyTypeName = i667[2]
  i666.m_IntArgument = i667[3]
  i666.m_FloatArgument = i667[4]
  i666.m_StringArgument = i667[5]
  i666.m_BoolArgument = !!i667[6]
  return i666
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i668 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i669 = data
  i668.targetIsSelf = !!i669[0]
  request.r(i669[1], i669[2], 0, i668, 'targetGO')
  i668.tweenTargetIsTargetGO = !!i669[3]
  i668.delay = i669[4]
  i668.duration = i669[5]
  i668.easeType = i669[6]
  i668.easeCurve = new pc.AnimationCurve( { keys_flow: i669[7] } )
  i668.loopType = i669[8]
  i668.loops = i669[9]
  i668.id = i669[10]
  i668.isRelative = !!i669[11]
  i668.isFrom = !!i669[12]
  i668.isIndependentUpdate = !!i669[13]
  i668.autoKill = !!i669[14]
  i668.autoGenerate = !!i669[15]
  i668.isActive = !!i669[16]
  i668.isValid = !!i669[17]
  request.r(i669[18], i669[19], 0, i668, 'target')
  i668.animationType = i669[20]
  i668.targetType = i669[21]
  i668.forcedTargetType = i669[22]
  i668.autoPlay = !!i669[23]
  i668.useTargetAsV3 = !!i669[24]
  i668.endValueFloat = i669[25]
  i668.endValueV3 = new pc.Vec3( i669[26], i669[27], i669[28] )
  i668.endValueV2 = new pc.Vec2( i669[29], i669[30] )
  i668.endValueColor = new pc.Color(i669[31], i669[32], i669[33], i669[34])
  i668.endValueString = i669[35]
  i668.endValueRect = UnityEngine.Rect.MinMaxRect(i669[36], i669[37], i669[38], i669[39])
  request.r(i669[40], i669[41], 0, i668, 'endValueTransform')
  i668.optionalBool0 = !!i669[42]
  i668.optionalBool1 = !!i669[43]
  i668.optionalFloat0 = i669[44]
  i668.optionalInt0 = i669[45]
  i668.optionalRotationMode = i669[46]
  i668.optionalScrambleMode = i669[47]
  i668.optionalShakeRandomnessMode = i669[48]
  i668.optionalString = i669[49]
  i668.updateType = i669[50]
  i668.isSpeedBased = !!i669[51]
  i668.hasOnStart = !!i669[52]
  i668.hasOnPlay = !!i669[53]
  i668.hasOnUpdate = !!i669[54]
  i668.hasOnStepComplete = !!i669[55]
  i668.hasOnComplete = !!i669[56]
  i668.hasOnTweenCreated = !!i669[57]
  i668.hasOnRewind = !!i669[58]
  i668.onStart = request.d('UnityEngine.Events.UnityEvent', i669[59], i668.onStart)
  i668.onPlay = request.d('UnityEngine.Events.UnityEvent', i669[60], i668.onPlay)
  i668.onUpdate = request.d('UnityEngine.Events.UnityEvent', i669[61], i668.onUpdate)
  i668.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i669[62], i668.onStepComplete)
  i668.onComplete = request.d('UnityEngine.Events.UnityEvent', i669[63], i668.onComplete)
  i668.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i669[64], i668.onTweenCreated)
  i668.onRewind = request.d('UnityEngine.Events.UnityEvent', i669[65], i668.onRewind)
  return i668
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i671 = data
  i670.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i671[0], i670.m_PersistentCalls)
  return i670
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.UI.Mask' )
  var i673 = data
  i672.m_ShowMaskGraphic = !!i673[0]
  return i672
}

Deserializers["AudioController"] = function (request, data, root) {
  var i674 = root || request.c( 'AudioController' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'bgmSource')
  request.r(i675[2], i675[3], 0, i674, 'sfxSource')
  var i677 = i675[4]
  var i676 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i677.length; i += 1) {
    i676.add(request.d('AudioEntry', i677[i + 0]));
  }
  i674.audioEntries = i676
  return i674
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i680 = root || request.c( 'AudioEntry' )
  var i681 = data
  i680.key = i681[0]
  request.r(i681[1], i681[2], 0, i680, 'clip')
  i680.volume = i681[3]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i683 = data
  i682.ambientIntensity = i683[0]
  i682.reflectionIntensity = i683[1]
  i682.ambientMode = i683[2]
  i682.ambientLight = new pc.Color(i683[3], i683[4], i683[5], i683[6])
  i682.ambientSkyColor = new pc.Color(i683[7], i683[8], i683[9], i683[10])
  i682.ambientGroundColor = new pc.Color(i683[11], i683[12], i683[13], i683[14])
  i682.ambientEquatorColor = new pc.Color(i683[15], i683[16], i683[17], i683[18])
  i682.fogColor = new pc.Color(i683[19], i683[20], i683[21], i683[22])
  i682.fogEndDistance = i683[23]
  i682.fogStartDistance = i683[24]
  i682.fogDensity = i683[25]
  i682.fog = !!i683[26]
  request.r(i683[27], i683[28], 0, i682, 'skybox')
  i682.fogMode = i683[29]
  var i685 = i683[30]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i685[i + 0]) );
  }
  i682.lightmaps = i684
  i682.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i683[31], i682.lightProbes)
  i682.lightmapsMode = i683[32]
  i682.mixedBakeMode = i683[33]
  i682.environmentLightingMode = i683[34]
  i682.ambientProbe = new pc.SphericalHarmonicsL2(i683[35])
  i682.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i683[36])
  i682.useReferenceAmbientProbe = !!i683[37]
  request.r(i683[38], i683[39], 0, i682, 'customReflection')
  request.r(i683[40], i683[41], 0, i682, 'defaultReflection')
  i682.defaultReflectionMode = i683[42]
  i682.defaultReflectionResolution = i683[43]
  i682.sunLightObjectId = i683[44]
  i682.pixelLightCount = i683[45]
  i682.defaultReflectionHDR = !!i683[46]
  i682.hasLightDataAsset = !!i683[47]
  i682.hasManualGenerate = !!i683[48]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'lightmapColor')
  request.r(i689[2], i689[3], 0, i688, 'lightmapDirection')
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i690 = root || new UnityEngine.LightProbes()
  var i691 = data
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i699 = data
  var i701 = i699[0]
  var i700 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i701.length; i += 1) {
    i700.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i701[i + 0]));
  }
  i698.ShaderCompilationErrors = i700
  i698.name = i699[1]
  i698.guid = i699[2]
  var i703 = i699[3]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( i703[i + 0] );
  }
  i698.shaderDefinedKeywords = i702
  var i705 = i699[4]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i705[i + 0]) );
  }
  i698.passes = i704
  var i707 = i699[5]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i707[i + 0]) );
  }
  i698.usePasses = i706
  var i709 = i699[6]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i709[i + 0]) );
  }
  i698.defaultParameterValues = i708
  request.r(i699[7], i699[8], 0, i698, 'unityFallbackShader')
  i698.readDepth = !!i699[9]
  i698.isCreatedByShaderGraph = !!i699[10]
  i698.disableBatching = !!i699[11]
  i698.compiled = !!i699[12]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i713 = data
  i712.shaderName = i713[0]
  i712.errorMessage = i713[1]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i716 = root || new pc.UnityShaderPass()
  var i717 = data
  i716.id = i717[0]
  i716.subShaderIndex = i717[1]
  i716.name = i717[2]
  i716.passType = i717[3]
  i716.grabPassTextureName = i717[4]
  i716.usePass = !!i717[5]
  i716.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[6], i716.zTest)
  i716.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[7], i716.zWrite)
  i716.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[8], i716.culling)
  i716.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i717[9], i716.blending)
  i716.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i717[10], i716.alphaBlending)
  i716.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[11], i716.colorWriteMask)
  i716.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[12], i716.offsetUnits)
  i716.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[13], i716.offsetFactor)
  i716.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[14], i716.stencilRef)
  i716.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[15], i716.stencilReadMask)
  i716.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[16], i716.stencilWriteMask)
  i716.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i717[17], i716.stencilOp)
  i716.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i717[18], i716.stencilOpFront)
  i716.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i717[19], i716.stencilOpBack)
  var i719 = i717[20]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i719[i + 0]) );
  }
  i716.tags = i718
  var i721 = i717[21]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( i721[i + 0] );
  }
  i716.passDefinedKeywords = i720
  var i723 = i717[22]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i723[i + 0]) );
  }
  i716.passDefinedKeywordGroups = i722
  var i725 = i717[23]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i725[i + 0]) );
  }
  i716.variants = i724
  var i727 = i717[24]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i727[i + 0]) );
  }
  i716.excludedVariants = i726
  i716.hasDepthReader = !!i717[25]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i729 = data
  i728.val = i729[0]
  i728.name = i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i731 = data
  i730.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[0], i730.src)
  i730.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[1], i730.dst)
  i730.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[2], i730.op)
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i733 = data
  i732.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[0], i732.pass)
  i732.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[1], i732.fail)
  i732.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[2], i732.zFail)
  i732.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[3], i732.comp)
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i737 = data
  i736.name = i737[0]
  i736.value = i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i741 = data
  var i743 = i741[0]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( i743[i + 0] );
  }
  i740.keywords = i742
  i740.hasDiscard = !!i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i747 = data
  i746.passId = i747[0]
  i746.subShaderIndex = i747[1]
  var i749 = i747[2]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( i749[i + 0] );
  }
  i746.keywords = i748
  i746.vertexProgram = i747[3]
  i746.fragmentProgram = i747[4]
  i746.exportedForWebGl2 = !!i747[5]
  i746.readDepth = !!i747[6]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'shader')
  i752.pass = i753[2]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i757 = data
  i756.name = i757[0]
  i756.type = i757[1]
  i756.value = new pc.Vec4( i757[2], i757[3], i757[4], i757[5] )
  i756.textureValue = i757[6]
  i756.shaderPropertyFlag = i757[7]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i759 = data
  i758.name = i759[0]
  request.r(i759[1], i759[2], 0, i758, 'texture')
  i758.aabb = i759[3]
  i758.vertices = i759[4]
  i758.triangles = i759[5]
  i758.textureRect = UnityEngine.Rect.MinMaxRect(i759[6], i759[7], i759[8], i759[9])
  i758.packedRect = UnityEngine.Rect.MinMaxRect(i759[10], i759[11], i759[12], i759[13])
  i758.border = new pc.Vec4( i759[14], i759[15], i759[16], i759[17] )
  i758.transparency = i759[18]
  i758.bounds = i759[19]
  i758.pixelsPerUnit = i759[20]
  i758.textureWidth = i759[21]
  i758.textureHeight = i759[22]
  i758.nativeSize = new pc.Vec2( i759[23], i759[24] )
  i758.pivot = new pc.Vec2( i759[25], i759[26] )
  i758.textureRectOffset = new pc.Vec2( i759[27], i759[28] )
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i761 = data
  i760.name = i761[0]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i763 = data
  i762.name = i763[0]
  i762.ascent = i763[1]
  i762.originalLineHeight = i763[2]
  i762.fontSize = i763[3]
  var i765 = i763[4]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i765[i + 0]) );
  }
  i762.characterInfo = i764
  request.r(i763[5], i763[6], 0, i762, 'texture')
  i762.originalFontSize = i763[7]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i769 = data
  i768.index = i769[0]
  i768.advance = i769[1]
  i768.bearing = i769[2]
  i768.glyphWidth = i769[3]
  i768.glyphHeight = i769[4]
  i768.minX = i769[5]
  i768.maxX = i769[6]
  i768.minY = i769[7]
  i768.maxY = i769[8]
  i768.uvBottomLeftX = i769[9]
  i768.uvBottomLeftY = i769[10]
  i768.uvBottomRightX = i769[11]
  i768.uvBottomRightY = i769[12]
  i768.uvTopLeftX = i769[13]
  i768.uvTopLeftY = i769[14]
  i768.uvTopRightX = i769[15]
  i768.uvTopRightY = i769[16]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i771 = data
  i770.name = i771[0]
  i770.bytes64 = i771[1]
  i770.data = i771[2]
  return i770
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i772 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i773 = data
  var i775 = i773[0]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i772.atlasAssets = i774
  i772.scale = i773[1]
  request.r(i773[2], i773[3], 0, i772, 'skeletonJSON')
  i772.isUpgradingBlendModeMaterials = !!i773[4]
  i772.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i773[5], i772.blendModeMaterials)
  var i777 = i773[6]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 1, i776, '')
  }
  i772.skeletonDataModifiers = i776
  var i779 = i773[7]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( i779[i + 0] );
  }
  i772.fromAnimation = i778
  var i781 = i773[8]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( i781[i + 0] );
  }
  i772.toAnimation = i780
  i772.duration = i773[9]
  i772.defaultMix = i773[10]
  request.r(i773[11], i773[12], 0, i772, 'controller')
  return i772
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i784 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i785 = data
  i784.applyAdditiveMaterial = !!i785[0]
  var i787 = i785[1]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i787[i + 0]));
  }
  i784.additiveMaterials = i786
  var i789 = i785[2]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i789.length; i += 1) {
    i788.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i789[i + 0]));
  }
  i784.multiplyMaterials = i788
  var i791 = i785[3]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i791[i + 0]));
  }
  i784.screenMaterials = i790
  i784.requiresBlendModeMaterials = !!i785[4]
  return i784
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i794 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i795 = data
  i794.pageName = i795[0]
  request.r(i795[1], i795[2], 0, i794, 'material')
  return i794
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i798 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'atlasFile')
  var i801 = i799[2]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i798.materials = i800
  i798.textureLoadingMode = i799[3]
  request.r(i799[4], i799[5], 0, i798, 'onDemandTextureLoader')
  return i798
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i802 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'atlas')
  i802.normalStyle = i803[2]
  i802.normalSpacingOffset = i803[3]
  i802.boldStyle = i803[4]
  i802.boldSpacing = i803[5]
  i802.italicStyle = i803[6]
  i802.tabSize = i803[7]
  i802.hashCode = i803[8]
  request.r(i803[9], i803[10], 0, i802, 'material')
  i802.materialHashCode = i803[11]
  i802.m_Version = i803[12]
  i802.m_SourceFontFileGUID = i803[13]
  request.r(i803[14], i803[15], 0, i802, 'm_SourceFontFile_EditorRef')
  request.r(i803[16], i803[17], 0, i802, 'm_SourceFontFile')
  i802.m_AtlasPopulationMode = i803[18]
  i802.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i803[19], i802.m_FaceInfo)
  var i805 = i803[20]
  var i804 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i805.length; i += 1) {
    i804.add(request.d('UnityEngine.TextCore.Glyph', i805[i + 0]));
  }
  i802.m_GlyphTable = i804
  var i807 = i803[21]
  var i806 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i807.length; i += 1) {
    i806.add(request.d('TMPro.TMP_Character', i807[i + 0]));
  }
  i802.m_CharacterTable = i806
  var i809 = i803[22]
  var i808 = []
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 2, i808, '')
  }
  i802.m_AtlasTextures = i808
  i802.m_AtlasTextureIndex = i803[23]
  i802.m_IsMultiAtlasTexturesEnabled = !!i803[24]
  i802.m_ClearDynamicDataOnBuild = !!i803[25]
  var i811 = i803[26]
  var i810 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i811.length; i += 1) {
    i810.add(request.d('UnityEngine.TextCore.GlyphRect', i811[i + 0]));
  }
  i802.m_UsedGlyphRects = i810
  var i813 = i803[27]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i813.length; i += 1) {
    i812.add(request.d('UnityEngine.TextCore.GlyphRect', i813[i + 0]));
  }
  i802.m_FreeGlyphRects = i812
  i802.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i803[28], i802.m_fontInfo)
  i802.m_AtlasWidth = i803[29]
  i802.m_AtlasHeight = i803[30]
  i802.m_AtlasPadding = i803[31]
  i802.m_AtlasRenderMode = i803[32]
  var i815 = i803[33]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i815.length; i += 1) {
    i814.add(request.d('TMPro.TMP_Glyph', i815[i + 0]));
  }
  i802.m_glyphInfoList = i814
  i802.m_KerningTable = request.d('TMPro.KerningTable', i803[34], i802.m_KerningTable)
  i802.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i803[35], i802.m_FontFeatureTable)
  var i817 = i803[36]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 1, i816, '')
  }
  i802.fallbackFontAssets = i816
  var i819 = i803[37]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 1, i818, '')
  }
  i802.m_FallbackFontAssetTable = i818
  i802.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i803[38], i802.m_CreationSettings)
  var i821 = i803[39]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('TMPro.TMP_FontWeightPair', i821[i + 0]) );
  }
  i802.m_FontWeightTable = i820
  var i823 = i803[40]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('TMPro.TMP_FontWeightPair', i823[i + 0]) );
  }
  i802.fontWeights = i822
  return i802
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i825 = data
  i824.m_FaceIndex = i825[0]
  i824.m_FamilyName = i825[1]
  i824.m_StyleName = i825[2]
  i824.m_PointSize = i825[3]
  i824.m_Scale = i825[4]
  i824.m_UnitsPerEM = i825[5]
  i824.m_LineHeight = i825[6]
  i824.m_AscentLine = i825[7]
  i824.m_CapLine = i825[8]
  i824.m_MeanLine = i825[9]
  i824.m_Baseline = i825[10]
  i824.m_DescentLine = i825[11]
  i824.m_SuperscriptOffset = i825[12]
  i824.m_SuperscriptSize = i825[13]
  i824.m_SubscriptOffset = i825[14]
  i824.m_SubscriptSize = i825[15]
  i824.m_UnderlineOffset = i825[16]
  i824.m_UnderlineThickness = i825[17]
  i824.m_StrikethroughOffset = i825[18]
  i824.m_StrikethroughThickness = i825[19]
  i824.m_TabWidth = i825[20]
  return i824
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i829 = data
  i828.m_Index = i829[0]
  i828.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i829[1], i828.m_Metrics)
  i828.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i829[2], i828.m_GlyphRect)
  i828.m_Scale = i829[3]
  i828.m_AtlasIndex = i829[4]
  i828.m_ClassDefinitionType = i829[5]
  return i828
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i831 = data
  i830.m_Width = i831[0]
  i830.m_Height = i831[1]
  i830.m_HorizontalBearingX = i831[2]
  i830.m_HorizontalBearingY = i831[3]
  i830.m_HorizontalAdvance = i831[4]
  return i830
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i833 = data
  i832.m_X = i833[0]
  i832.m_Y = i833[1]
  i832.m_Width = i833[2]
  i832.m_Height = i833[3]
  return i832
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.TMP_Character' )
  var i837 = data
  i836.m_ElementType = i837[0]
  i836.m_Unicode = i837[1]
  i836.m_GlyphIndex = i837[2]
  i836.m_Scale = i837[3]
  return i836
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i843 = data
  i842.Name = i843[0]
  i842.PointSize = i843[1]
  i842.Scale = i843[2]
  i842.CharacterCount = i843[3]
  i842.LineHeight = i843[4]
  i842.Baseline = i843[5]
  i842.Ascender = i843[6]
  i842.CapHeight = i843[7]
  i842.Descender = i843[8]
  i842.CenterLine = i843[9]
  i842.SuperscriptOffset = i843[10]
  i842.SubscriptOffset = i843[11]
  i842.SubSize = i843[12]
  i842.Underline = i843[13]
  i842.UnderlineThickness = i843[14]
  i842.strikethrough = i843[15]
  i842.strikethroughThickness = i843[16]
  i842.TabWidth = i843[17]
  i842.Padding = i843[18]
  i842.AtlasWidth = i843[19]
  i842.AtlasHeight = i843[20]
  return i842
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.TMP_Glyph' )
  var i847 = data
  i846.id = i847[0]
  i846.x = i847[1]
  i846.y = i847[2]
  i846.width = i847[3]
  i846.height = i847[4]
  i846.xOffset = i847[5]
  i846.yOffset = i847[6]
  i846.xAdvance = i847[7]
  i846.scale = i847[8]
  return i846
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i848 = root || request.c( 'TMPro.KerningTable' )
  var i849 = data
  var i851 = i849[0]
  var i850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i851.length; i += 1) {
    i850.add(request.d('TMPro.KerningPair', i851[i + 0]));
  }
  i848.kerningPairs = i850
  return i848
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.KerningPair' )
  var i855 = data
  i854.xOffset = i855[0]
  i854.m_FirstGlyph = i855[1]
  i854.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i855[2], i854.m_FirstGlyphAdjustments)
  i854.m_SecondGlyph = i855[3]
  i854.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i855[4], i854.m_SecondGlyphAdjustments)
  i854.m_IgnoreSpacingAdjustments = !!i855[5]
  return i854
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i856 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i857 = data
  var i859 = i857[0]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i859.length; i += 1) {
    i858.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i859[i + 0]));
  }
  i856.m_GlyphPairAdjustmentRecords = i858
  return i856
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i863 = data
  i862.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i863[0], i862.m_FirstAdjustmentRecord)
  i862.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i863[1], i862.m_SecondAdjustmentRecord)
  i862.m_FeatureLookupFlags = i863[2]
  return i862
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i867 = data
  i866.sourceFontFileName = i867[0]
  i866.sourceFontFileGUID = i867[1]
  i866.pointSizeSamplingMode = i867[2]
  i866.pointSize = i867[3]
  i866.padding = i867[4]
  i866.packingMode = i867[5]
  i866.atlasWidth = i867[6]
  i866.atlasHeight = i867[7]
  i866.characterSetSelectionMode = i867[8]
  i866.characterSequence = i867[9]
  i866.referencedFontAssetGUID = i867[10]
  i866.referencedTextAssetGUID = i867[11]
  i866.fontStyle = i867[12]
  i866.fontStyleModifier = i867[13]
  i866.renderMode = i867[14]
  i866.includeFontFeatures = !!i867[15]
  return i866
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'regularTypeface')
  request.r(i871[2], i871[3], 0, i870, 'italicTypeface')
  return i870
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i872 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i873 = data
  i872.useSafeMode = !!i873[0]
  i872.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i873[1], i872.safeModeOptions)
  i872.timeScale = i873[2]
  i872.unscaledTimeScale = i873[3]
  i872.useSmoothDeltaTime = !!i873[4]
  i872.maxSmoothUnscaledTime = i873[5]
  i872.rewindCallbackMode = i873[6]
  i872.showUnityEditorReport = !!i873[7]
  i872.logBehaviour = i873[8]
  i872.drawGizmos = !!i873[9]
  i872.defaultRecyclable = !!i873[10]
  i872.defaultAutoPlay = i873[11]
  i872.defaultUpdateType = i873[12]
  i872.defaultTimeScaleIndependent = !!i873[13]
  i872.defaultEaseType = i873[14]
  i872.defaultEaseOvershootOrAmplitude = i873[15]
  i872.defaultEasePeriod = i873[16]
  i872.defaultAutoKill = !!i873[17]
  i872.defaultLoopType = i873[18]
  i872.debugMode = !!i873[19]
  i872.debugStoreTargetId = !!i873[20]
  i872.showPreviewPanel = !!i873[21]
  i872.storeSettingsLocation = i873[22]
  i872.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i873[23], i872.modules)
  i872.createASMDEF = !!i873[24]
  i872.showPlayingTweens = !!i873[25]
  i872.showPausedTweens = !!i873[26]
  return i872
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i874 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i875 = data
  i874.logBehaviour = i875[0]
  i874.nestedTweenFailureBehaviour = i875[1]
  return i874
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i876 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i877 = data
  i876.showPanel = !!i877[0]
  i876.audioEnabled = !!i877[1]
  i876.physicsEnabled = !!i877[2]
  i876.physics2DEnabled = !!i877[3]
  i876.spriteEnabled = !!i877[4]
  i876.uiEnabled = !!i877[5]
  i876.textMeshProEnabled = !!i877[6]
  i876.tk2DEnabled = !!i877[7]
  i876.deAudioEnabled = !!i877[8]
  i876.deUnityExtendedEnabled = !!i877[9]
  i876.epoOutlineEnabled = !!i877[10]
  return i876
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.TMP_Settings' )
  var i879 = data
  i878.m_enableWordWrapping = !!i879[0]
  i878.m_enableKerning = !!i879[1]
  i878.m_enableExtraPadding = !!i879[2]
  i878.m_enableTintAllSprites = !!i879[3]
  i878.m_enableParseEscapeCharacters = !!i879[4]
  i878.m_EnableRaycastTarget = !!i879[5]
  i878.m_GetFontFeaturesAtRuntime = !!i879[6]
  i878.m_missingGlyphCharacter = i879[7]
  i878.m_warningsDisabled = !!i879[8]
  request.r(i879[9], i879[10], 0, i878, 'm_defaultFontAsset')
  i878.m_defaultFontAssetPath = i879[11]
  i878.m_defaultFontSize = i879[12]
  i878.m_defaultAutoSizeMinRatio = i879[13]
  i878.m_defaultAutoSizeMaxRatio = i879[14]
  i878.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i879[15], i879[16] )
  i878.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i879[17], i879[18] )
  i878.m_autoSizeTextContainer = !!i879[19]
  i878.m_IsTextObjectScaleStatic = !!i879[20]
  var i881 = i879[21]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 1, i880, '')
  }
  i878.m_fallbackFontAssets = i880
  i878.m_matchMaterialPreset = !!i879[22]
  request.r(i879[23], i879[24], 0, i878, 'm_defaultSpriteAsset')
  i878.m_defaultSpriteAssetPath = i879[25]
  i878.m_enableEmojiSupport = !!i879[26]
  i878.m_MissingCharacterSpriteUnicode = i879[27]
  i878.m_defaultColorGradientPresetsPath = i879[28]
  request.r(i879[29], i879[30], 0, i878, 'm_defaultStyleSheet')
  i878.m_StyleSheetsResourcePath = i879[31]
  request.r(i879[32], i879[33], 0, i878, 'm_leadingCharacters')
  request.r(i879[34], i879[35], 0, i878, 'm_followingCharacters')
  i878.m_UseModernHangulLineBreakingRules = !!i879[36]
  return i878
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i883 = data
  i882.m_GlyphIndex = i883[0]
  i882.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i883[1], i882.m_GlyphValueRecord)
  return i882
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i885 = data
  i884.m_XPlacement = i885[0]
  i884.m_YPlacement = i885[1]
  i884.m_XAdvance = i885[2]
  i884.m_YAdvance = i885[3]
  return i884
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i886 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'spriteSheet')
  var i889 = i887[2]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(request.d('TMPro.TMP_Sprite', i889[i + 0]));
  }
  i886.spriteInfoList = i888
  var i891 = i887[3]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 1, i890, '')
  }
  i886.fallbackSpriteAssets = i890
  i886.hashCode = i887[4]
  request.r(i887[5], i887[6], 0, i886, 'material')
  i886.materialHashCode = i887[7]
  i886.m_Version = i887[8]
  i886.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i887[9], i886.m_FaceInfo)
  var i893 = i887[10]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('TMPro.TMP_SpriteCharacter', i893[i + 0]));
  }
  i886.m_SpriteCharacterTable = i892
  var i895 = i887[11]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('TMPro.TMP_SpriteGlyph', i895[i + 0]));
  }
  i886.m_SpriteGlyphTable = i894
  return i886
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i898 = root || request.c( 'TMPro.TMP_Sprite' )
  var i899 = data
  i898.name = i899[0]
  i898.hashCode = i899[1]
  i898.unicode = i899[2]
  i898.pivot = new pc.Vec2( i899[3], i899[4] )
  request.r(i899[5], i899[6], 0, i898, 'sprite')
  i898.id = i899[7]
  i898.x = i899[8]
  i898.y = i899[9]
  i898.width = i899[10]
  i898.height = i899[11]
  i898.xOffset = i899[12]
  i898.yOffset = i899[13]
  i898.xAdvance = i899[14]
  i898.scale = i899[15]
  return i898
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i904 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i905 = data
  i904.m_Name = i905[0]
  i904.m_HashCode = i905[1]
  i904.m_ElementType = i905[2]
  i904.m_Unicode = i905[3]
  i904.m_GlyphIndex = i905[4]
  i904.m_Scale = i905[5]
  return i904
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i908 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'sprite')
  i908.m_Index = i909[2]
  i908.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i909[3], i908.m_Metrics)
  i908.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i909[4], i908.m_GlyphRect)
  i908.m_Scale = i909[5]
  i908.m_AtlasIndex = i909[6]
  i908.m_ClassDefinitionType = i909[7]
  return i908
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i910 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i911 = data
  var i913 = i911[0]
  var i912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i913.length; i += 1) {
    i912.add(request.d('TMPro.TMP_Style', i913[i + 0]));
  }
  i910.m_StyleList = i912
  return i910
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i916 = root || request.c( 'TMPro.TMP_Style' )
  var i917 = data
  i916.m_Name = i917[0]
  i916.m_HashCode = i917[1]
  i916.m_OpeningDefinition = i917[2]
  i916.m_ClosingDefinition = i917[3]
  i916.m_OpeningTagArray = i917[4]
  i916.m_ClosingTagArray = i917[5]
  i916.m_OpeningTagUnicodeArray = i917[6]
  i916.m_ClosingTagUnicodeArray = i917[7]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i919 = data
  var i921 = i919[0]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i921[i + 0]) );
  }
  i918.files = i920
  i918.componentToPrefabIds = i919[1]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i925 = data
  i924.path = i925[0]
  request.r(i925[1], i925[2], 0, i924, 'unityObject')
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i927 = data
  var i929 = i927[0]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i929[i + 0]) );
  }
  i926.scriptsExecutionOrder = i928
  var i931 = i927[1]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i931[i + 0]) );
  }
  i926.sortingLayers = i930
  var i933 = i927[2]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i933[i + 0]) );
  }
  i926.cullingLayers = i932
  i926.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i927[3], i926.timeSettings)
  i926.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i927[4], i926.physicsSettings)
  i926.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i927[5], i926.physics2DSettings)
  i926.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i927[6], i926.qualitySettings)
  i926.enableRealtimeShadows = !!i927[7]
  i926.enableAutoInstancing = !!i927[8]
  i926.enableStaticBatching = !!i927[9]
  i926.enableDynamicBatching = !!i927[10]
  i926.lightmapEncodingQuality = i927[11]
  i926.desiredColorSpace = i927[12]
  var i935 = i927[13]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( i935[i + 0] );
  }
  i926.allTags = i934
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i939 = data
  i938.name = i939[0]
  i938.value = i939[1]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i943 = data
  i942.id = i943[0]
  i942.name = i943[1]
  i942.value = i943[2]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i947 = data
  i946.id = i947[0]
  i946.name = i947[1]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i949 = data
  i948.fixedDeltaTime = i949[0]
  i948.maximumDeltaTime = i949[1]
  i948.timeScale = i949[2]
  i948.maximumParticleTimestep = i949[3]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i951 = data
  i950.gravity = new pc.Vec3( i951[0], i951[1], i951[2] )
  i950.defaultSolverIterations = i951[3]
  i950.bounceThreshold = i951[4]
  i950.autoSyncTransforms = !!i951[5]
  i950.autoSimulation = !!i951[6]
  var i953 = i951[7]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i953[i + 0]) );
  }
  i950.collisionMatrix = i952
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i957 = data
  i956.enabled = !!i957[0]
  i956.layerId = i957[1]
  i956.otherLayerId = i957[2]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'material')
  i958.gravity = new pc.Vec2( i959[2], i959[3] )
  i958.positionIterations = i959[4]
  i958.velocityIterations = i959[5]
  i958.velocityThreshold = i959[6]
  i958.maxLinearCorrection = i959[7]
  i958.maxAngularCorrection = i959[8]
  i958.maxTranslationSpeed = i959[9]
  i958.maxRotationSpeed = i959[10]
  i958.baumgarteScale = i959[11]
  i958.baumgarteTOIScale = i959[12]
  i958.timeToSleep = i959[13]
  i958.linearSleepTolerance = i959[14]
  i958.angularSleepTolerance = i959[15]
  i958.defaultContactOffset = i959[16]
  i958.autoSimulation = !!i959[17]
  i958.queriesHitTriggers = !!i959[18]
  i958.queriesStartInColliders = !!i959[19]
  i958.callbacksOnDisable = !!i959[20]
  i958.reuseCollisionCallbacks = !!i959[21]
  i958.autoSyncTransforms = !!i959[22]
  var i961 = i959[23]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i961[i + 0]) );
  }
  i958.collisionMatrix = i960
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i965 = data
  i964.enabled = !!i965[0]
  i964.layerId = i965[1]
  i964.otherLayerId = i965[2]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i967 = data
  var i969 = i967[0]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i969[i + 0]) );
  }
  i966.qualityLevels = i968
  var i971 = i967[1]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( i971[i + 0] );
  }
  i966.names = i970
  i966.shadows = i967[2]
  i966.anisotropicFiltering = i967[3]
  i966.antiAliasing = i967[4]
  i966.lodBias = i967[5]
  i966.shadowCascades = i967[6]
  i966.shadowDistance = i967[7]
  i966.shadowmaskMode = i967[8]
  i966.shadowProjection = i967[9]
  i966.shadowResolution = i967[10]
  i966.softParticles = !!i967[11]
  i966.softVegetation = !!i967[12]
  i966.activeColorSpace = i967[13]
  i966.desiredColorSpace = i967[14]
  i966.masterTextureLimit = i967[15]
  i966.maxQueuedFrames = i967[16]
  i966.particleRaycastBudget = i967[17]
  i966.pixelLightCount = i967[18]
  i966.realtimeReflectionProbes = !!i967[19]
  i966.shadowCascade2Split = i967[20]
  i966.shadowCascade4Split = new pc.Vec3( i967[21], i967[22], i967[23] )
  i966.streamingMipmapsActive = !!i967[24]
  i966.vSyncCount = i967[25]
  i966.asyncUploadBufferSize = i967[26]
  i966.asyncUploadTimeSlice = i967[27]
  i966.billboardsFaceCameraPosition = !!i967[28]
  i966.shadowNearPlaneOffset = i967[29]
  i966.streamingMipmapsMemoryBudget = i967[30]
  i966.maximumLODLevel = i967[31]
  i966.streamingMipmapsAddAllCameras = !!i967[32]
  i966.streamingMipmapsMaxLevelReduction = i967[33]
  i966.streamingMipmapsRenderersPerFrame = i967[34]
  i966.resolutionScalingFixedDPIFactor = i967[35]
  i966.streamingMipmapsMaxFileIORequests = i967[36]
  i966.currentQualityLevel = i967[37]
  return i966
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i974 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i975 = data
  i974.xPlacement = i975[0]
  i974.yPlacement = i975[1]
  i974.xAdvance = i975[2]
  i974.yAdvance = i975[3]
  return i974
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[3],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[3],"78":[79],"80":[81],"82":[81],"9":[8],"83":[84],"85":[86],"87":[84],"88":[8],"89":[8],"11":[9],"18":[19,8],"90":[8],"10":[9],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"96":[8],"97":[8],"36":[8],"98":[8],"16":[19,8],"99":[8],"100":[8],"101":[8],"102":[8],"103":[19,8],"104":[8],"105":[6],"106":[6],"7":[6],"107":[6],"108":[3],"109":[3],"110":[111],"112":[3],"113":[114],"115":[8],"116":[19,8],"117":[79],"23":[19,8],"118":[119,79],"120":[79],"121":[79,122],"123":[56],"124":[64],"125":[114],"126":[127],"128":[8],"129":[79,8],"17":[8,19],"130":[8],"131":[19,8],"132":[79],"133":[19,8],"134":[8],"135":[84]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","MixSkeletonSkin","DropID","UnityEngine.PolygonCollider2D","ClickItem","UnityEngine.CanvasGroup","DragID","DropZone","DraggableItem","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "279.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "29138";

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

Deserializers.buildID = "4681d40d-804d-4427-9dc1-fbc91166a3a5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

