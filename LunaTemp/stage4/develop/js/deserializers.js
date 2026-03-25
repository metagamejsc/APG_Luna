var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointSpring' )
  var i475 = data
  i474.spring = i475[0]
  i474.damper = i475[1]
  i474.targetPosition = i475[2]
  return i474
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointMotor' )
  var i477 = data
  i476.m_TargetVelocity = i477[0]
  i476.m_Force = i477[1]
  i476.m_FreeSpin = i477[2]
  return i476
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointLimits' )
  var i479 = data
  i478.m_Min = i479[0]
  i478.m_Max = i479[1]
  i478.m_Bounciness = i479[2]
  i478.m_BounceMinVelocity = i479[3]
  i478.m_ContactDistance = i479[4]
  i478.minBounce = i479[5]
  i478.maxBounce = i479[6]
  return i478
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointDrive' )
  var i481 = data
  i480.m_PositionSpring = i481[0]
  i480.m_PositionDamper = i481[1]
  i480.m_MaximumForce = i481[2]
  i480.m_UseAcceleration = i481[3]
  return i480
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i483 = data
  i482.m_Spring = i483[0]
  i482.m_Damper = i483[1]
  return i482
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i485 = data
  i484.m_Limit = i485[0]
  i484.m_Bounciness = i485[1]
  i484.m_ContactDistance = i485[2]
  return i484
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i487 = data
  i486.m_ExtremumSlip = i487[0]
  i486.m_ExtremumValue = i487[1]
  i486.m_AsymptoteSlip = i487[2]
  i486.m_AsymptoteValue = i487[3]
  i486.m_Stiffness = i487[4]
  return i486
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i489 = data
  i488.m_LowerAngle = i489[0]
  i488.m_UpperAngle = i489[1]
  return i488
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i491 = data
  i490.m_MotorSpeed = i491[0]
  i490.m_MaximumMotorTorque = i491[1]
  return i490
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i493 = data
  i492.m_DampingRatio = i493[0]
  i492.m_Frequency = i493[1]
  i492.m_Angle = i493[2]
  return i492
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i495 = data
  i494.m_LowerTranslation = i495[0]
  i494.m_UpperTranslation = i495[1]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i497 = data
  i496.name = i497[0]
  i496.width = i497[1]
  i496.height = i497[2]
  i496.mipmapCount = i497[3]
  i496.anisoLevel = i497[4]
  i496.filterMode = i497[5]
  i496.hdr = !!i497[6]
  i496.format = i497[7]
  i496.wrapMode = i497[8]
  i496.alphaIsTransparency = !!i497[9]
  i496.alphaSource = i497[10]
  i496.graphicsFormat = i497[11]
  i496.sRGBTexture = !!i497[12]
  i496.desiredColorSpace = i497[13]
  i496.wrapU = i497[14]
  i496.wrapV = i497[15]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i498 = root || new pc.UnityMaterial()
  var i499 = data
  i498.name = i499[0]
  request.r(i499[1], i499[2], 0, i498, 'shader')
  i498.renderQueue = i499[3]
  i498.enableInstancing = !!i499[4]
  var i501 = i499[5]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i501[i + 0]) );
  }
  i498.floatParameters = i500
  var i503 = i499[6]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i503[i + 0]) );
  }
  i498.colorParameters = i502
  var i505 = i499[7]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i505[i + 0]) );
  }
  i498.vectorParameters = i504
  var i507 = i499[8]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i507[i + 0]) );
  }
  i498.textureParameters = i506
  var i509 = i499[9]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i509[i + 0]) );
  }
  i498.materialFlags = i508
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i513 = data
  i512.name = i513[0]
  i512.value = i513[1]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i517 = data
  i516.name = i517[0]
  i516.value = new pc.Color(i517[1], i517[2], i517[3], i517[4])
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i521 = data
  i520.name = i521[0]
  i520.value = new pc.Vec4( i521[1], i521[2], i521[3], i521[4] )
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i525 = data
  i524.name = i525[0]
  request.r(i525[1], i525[2], 0, i524, 'value')
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i529 = data
  i528.name = i529[0]
  i528.enabled = !!i529[1]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i531 = data
  i530.name = i531[0]
  i530.index = i531[1]
  i530.startup = !!i531[2]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i533 = data
  i532.position = new pc.Vec3( i533[0], i533[1], i533[2] )
  i532.scale = new pc.Vec3( i533[3], i533[4], i533[5] )
  i532.rotation = new pc.Quat(i533[6], i533[7], i533[8], i533[9])
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i535 = data
  i534.aspect = i535[0]
  i534.orthographic = !!i535[1]
  i534.orthographicSize = i535[2]
  i534.backgroundColor = new pc.Color(i535[3], i535[4], i535[5], i535[6])
  i534.nearClipPlane = i535[7]
  i534.farClipPlane = i535[8]
  i534.fieldOfView = i535[9]
  i534.depth = i535[10]
  i534.clearFlags = i535[11]
  i534.cullingMask = i535[12]
  i534.rect = i535[13]
  request.r(i535[14], i535[15], 0, i534, 'targetTexture')
  i534.usePhysicalProperties = !!i535[16]
  i534.focalLength = i535[17]
  i534.sensorSize = new pc.Vec2( i535[18], i535[19] )
  i534.lensShift = new pc.Vec2( i535[20], i535[21] )
  i534.gateFit = i535[22]
  i534.commandBufferCount = i535[23]
  i534.cameraType = i535[24]
  i534.enabled = !!i535[25]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i537 = data
  i536.name = i537[0]
  i536.tagId = i537[1]
  i536.enabled = !!i537[2]
  i536.isStatic = !!i537[3]
  i536.layer = i537[4]
  return i536
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i539 = data
  request.r(i539[0], i539[1], 0, i538, 'm_FirstSelected')
  i538.m_sendNavigationEvents = !!i539[2]
  i538.m_DragThreshold = i539[3]
  return i538
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i541 = data
  i540.m_HorizontalAxis = i541[0]
  i540.m_VerticalAxis = i541[1]
  i540.m_SubmitButton = i541[2]
  i540.m_CancelButton = i541[3]
  i540.m_InputActionsPerSecond = i541[4]
  i540.m_RepeatDelay = i541[5]
  i540.m_ForceModuleActive = !!i541[6]
  i540.m_SendPointerHoverToParent = !!i541[7]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i543 = data
  i542.pivot = new pc.Vec2( i543[0], i543[1] )
  i542.anchorMin = new pc.Vec2( i543[2], i543[3] )
  i542.anchorMax = new pc.Vec2( i543[4], i543[5] )
  i542.sizeDelta = new pc.Vec2( i543[6], i543[7] )
  i542.anchoredPosition3D = new pc.Vec3( i543[8], i543[9], i543[10] )
  i542.rotation = new pc.Quat(i543[11], i543[12], i543[13], i543[14])
  i542.scale = new pc.Vec3( i543[15], i543[16], i543[17] )
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i545 = data
  i544.planeDistance = i545[0]
  i544.referencePixelsPerUnit = i545[1]
  i544.isFallbackOverlay = !!i545[2]
  i544.renderMode = i545[3]
  i544.renderOrder = i545[4]
  i544.sortingLayerName = i545[5]
  i544.sortingOrder = i545[6]
  i544.scaleFactor = i545[7]
  request.r(i545[8], i545[9], 0, i544, 'worldCamera')
  i544.overrideSorting = !!i545[10]
  i544.pixelPerfect = !!i545[11]
  i544.targetDisplay = i545[12]
  i544.overridePixelPerfect = !!i545[13]
  i544.enabled = !!i545[14]
  return i544
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i547 = data
  i546.m_UiScaleMode = i547[0]
  i546.m_ReferencePixelsPerUnit = i547[1]
  i546.m_ScaleFactor = i547[2]
  i546.m_ReferenceResolution = new pc.Vec2( i547[3], i547[4] )
  i546.m_ScreenMatchMode = i547[5]
  i546.m_MatchWidthOrHeight = i547[6]
  i546.m_PhysicalUnit = i547[7]
  i546.m_FallbackScreenDPI = i547[8]
  i546.m_DefaultSpriteDPI = i547[9]
  i546.m_DynamicPixelsPerUnit = i547[10]
  i546.m_PresetInfoIsWorld = !!i547[11]
  return i546
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i549 = data
  i548.m_IgnoreReversedGraphics = !!i549[0]
  i548.m_BlockingObjects = i549[1]
  i548.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i549[2] )
  return i548
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i550 = root || request.c( 'LunaManager' )
  var i551 = data
  var i553 = i551[0]
  var i552 = []
  for(var i = 0; i < i553.length; i += 2) {
  request.r(i553[i + 0], i553[i + 1], 2, i552, '')
  }
  i550.lstBtnInstall = i552
  request.r(i551[1], i551[2], 0, i550, 'WinGO')
  request.r(i551[3], i551[4], 0, i550, 'LoseGO')
  request.r(i551[5], i551[6], 0, i550, 'StartCard')
  request.r(i551[7], i551[8], 0, i550, 'EndCard')
  request.r(i551[9], i551[10], 0, i550, 'Parent')
  i550.isDrag = !!i551[11]
  i550.timeDrag = i551[12]
  i550.countPlay = i551[13]
  i550.countPlayFinal = i551[14]
  i550.countPlayMax = i551[15]
  i550.timeDropFinal = i551[16]
  i550.colorBG = new pc.Color(i551[17], i551[18], i551[19], i551[20])
  request.r(i551[21], i551[22], 0, i550, 'texture2D')
  request.r(i551[23], i551[24], 0, i550, 'rawImageBG')
  request.r(i551[25], i551[26], 0, i550, 'MSSGirl')
  request.r(i551[27], i551[28], 0, i550, 'MSSBoy')
  request.r(i551[29], i551[30], 0, i550, 'MSSGroom')
  request.r(i551[31], i551[32], 0, i550, 'MSSBride')
  request.r(i551[33], i551[34], 0, i550, 'textProgess')
  request.r(i551[35], i551[36], 0, i550, 'imgProgess')
  request.r(i551[37], i551[38], 0, i550, 'timeText')
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i557 = data
  i556.cullTransparentMesh = !!i557[0]
  return i556
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'm_Texture')
  i558.m_UVRect = UnityEngine.Rect.MinMaxRect(i559[2], i559[3], i559[4], i559[5])
  i558.m_Maskable = !!i559[6]
  request.r(i559[7], i559[8], 0, i558, 'm_Material')
  i558.m_Color = new pc.Color(i559[9], i559[10], i559[11], i559[12])
  i558.m_RaycastTarget = !!i559[13]
  i558.m_RaycastPadding = new pc.Vec4( i559[14], i559[15], i559[16], i559[17] )
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'clip')
  request.r(i561[2], i561[3], 0, i560, 'outputAudioMixerGroup')
  i560.playOnAwake = !!i561[4]
  i560.loop = !!i561[5]
  i560.time = i561[6]
  i560.volume = i561[7]
  i560.pitch = i561[8]
  i560.enabled = !!i561[9]
  return i560
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.Image' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'm_Sprite')
  i562.m_Type = i563[2]
  i562.m_PreserveAspect = !!i563[3]
  i562.m_FillCenter = !!i563[4]
  i562.m_FillMethod = i563[5]
  i562.m_FillAmount = i563[6]
  i562.m_FillClockwise = !!i563[7]
  i562.m_FillOrigin = i563[8]
  i562.m_UseSpriteMesh = !!i563[9]
  i562.m_PixelsPerUnitMultiplier = i563[10]
  i562.m_Maskable = !!i563[11]
  request.r(i563[12], i563[13], 0, i562, 'm_Material')
  i562.m_Color = new pc.Color(i563[14], i563[15], i563[16], i563[17])
  i562.m_RaycastTarget = !!i563[18]
  i562.m_RaycastPadding = new pc.Vec4( i563[19], i563[20], i563[21], i563[22] )
  return i562
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i564 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i565 = data
  request.r(i565[0], i565[1], 0, i564, 'skeletonDataAsset')
  request.r(i565[2], i565[3], 0, i564, 'additiveMaterial')
  request.r(i565[4], i565[5], 0, i564, 'multiplyMaterial')
  request.r(i565[6], i565[7], 0, i564, 'screenMaterial')
  i564.initialSkinName = i565[8]
  i564.initialFlipX = !!i565[9]
  i564.initialFlipY = !!i565[10]
  i564.startingAnimation = i565[11]
  i564.startingLoop = !!i565[12]
  i564.timeScale = i565[13]
  i564.freeze = !!i565[14]
  i564.layoutScaleMode = i565[15]
  i564.updateWhenInvisible = i565[16]
  i564.allowMultipleCanvasRenderers = !!i565[17]
  var i567 = i565[18]
  var i566 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i567.length; i += 2) {
  request.r(i567[i + 0], i567[i + 1], 1, i566, '')
  }
  i564.canvasRenderers = i566
  i564.enableSeparatorSlots = !!i565[19]
  i564.updateSeparatorPartLocation = !!i565[20]
  i564.updateSeparatorPartScale = !!i565[21]
  i564.disableMeshAssignmentOnOverride = !!i565[22]
  i564.referenceSize = new pc.Vec2( i565[23], i565[24] )
  i564.referenceScale = i565[25]
  i564.rectTransformSize = new pc.Vec2( i565[26], i565[27] )
  i564.editReferenceRect = !!i565[28]
  var i569 = i565[29]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( i569[i + 0] );
  }
  i564.separatorSlotNames = i568
  var i571 = i565[30]
  var i570 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i571.length; i += 2) {
  request.r(i571[i + 0], i571[i + 1], 1, i570, '')
  }
  i564.separatorParts = i570
  i564.meshGenerator = request.d('Spine.Unity.MeshGenerator', i565[31], i564.meshGenerator)
  i564.updateTiming = i565[32]
  i564.unscaledTime = !!i565[33]
  i564.m_Maskable = !!i565[34]
  request.r(i565[35], i565[36], 0, i564, 'm_Material')
  i564.m_Color = new pc.Color(i565[37], i565[38], i565[39], i565[40])
  i564.m_RaycastTarget = !!i565[41]
  i564.m_RaycastPadding = new pc.Vec4( i565[42], i565[43], i565[44], i565[45] )
  return i564
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i578 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i579 = data
  i578.settings = request.d('Spine.Unity.MeshGenerator+Settings', i579[0], i578.settings)
  return i578
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i580 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i581 = data
  i580.useClipping = !!i581[0]
  i580.zSpacing = i581[1]
  i580.pmaVertexColors = !!i581[2]
  i580.tintBlack = !!i581[3]
  i580.canvasGroupTintBlack = !!i581[4]
  i580.calculateTangents = !!i581[5]
  i580.addNormals = !!i581[6]
  i580.immutableTriangles = !!i581[7]
  return i580
}

Deserializers["DropZone"] = function (request, data, root) {
  var i582 = root || request.c( 'DropZone' )
  var i583 = data
  i582.idDrop = i583[0]
  var i585 = i583[1]
  var i584 = []
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 2, i584, '')
  }
  i582.steps = i584
  request.r(i583[2], i583[3], 0, i582, 'stepLose')
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i589 = data
  i588.usedByComposite = !!i589[0]
  i588.autoTiling = !!i589[1]
  var i591 = i589[2]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
  var i593 = i591[i + 0]
  var i592 = []
  for(var i = 0; i < i593.length; i += 2) {
    i592.push( new pc.Vec2( i593[i + 0], i593[i + 1] ) );
  }
    i590.push( i592 );
  }
  i588.points = i590
  i588.enabled = !!i589[3]
  i588.isTrigger = !!i589[4]
  i588.usedByEffector = !!i589[5]
  i588.density = i589[6]
  i588.offset = new pc.Vec2( i589[7], i589[8] )
  request.r(i589[9], i589[10], 0, i588, 'material')
  return i588
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i600 = root || request.c( 'ClickItem' )
  var i601 = data
  var i603 = i601[0]
  var i602 = []
  for(var i = 0; i < i603.length; i += 2) {
  request.r(i603[i + 0], i603[i + 1], 2, i602, '')
  }
  i600.steps = i602
  i600.currentStep = i601[1]
  i600.isProcess = !!i601[2]
  return i600
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.Button' )
  var i605 = data
  i604.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i605[0], i604.m_OnClick)
  i604.m_Navigation = request.d('UnityEngine.UI.Navigation', i605[1], i604.m_Navigation)
  i604.m_Transition = i605[2]
  i604.m_Colors = request.d('UnityEngine.UI.ColorBlock', i605[3], i604.m_Colors)
  i604.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i605[4], i604.m_SpriteState)
  i604.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i605[5], i604.m_AnimationTriggers)
  i604.m_Interactable = !!i605[6]
  request.r(i605[7], i605[8], 0, i604, 'm_TargetGraphic')
  return i604
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i607 = data
  i606.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i607[0], i606.m_PersistentCalls)
  return i606
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i609 = data
  var i611 = i609[0]
  var i610 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i611.length; i += 1) {
    i610.add(request.d('UnityEngine.Events.PersistentCall', i611[i + 0]));
  }
  i608.m_Calls = i610
  return i608
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'm_Target')
  i614.m_TargetAssemblyTypeName = i615[2]
  i614.m_MethodName = i615[3]
  i614.m_Mode = i615[4]
  i614.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i615[5], i614.m_Arguments)
  i614.m_CallState = i615[6]
  return i614
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i617 = data
  i616.m_Mode = i617[0]
  i616.m_WrapAround = !!i617[1]
  request.r(i617[2], i617[3], 0, i616, 'm_SelectOnUp')
  request.r(i617[4], i617[5], 0, i616, 'm_SelectOnDown')
  request.r(i617[6], i617[7], 0, i616, 'm_SelectOnLeft')
  request.r(i617[8], i617[9], 0, i616, 'm_SelectOnRight')
  return i616
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i619 = data
  i618.m_NormalColor = new pc.Color(i619[0], i619[1], i619[2], i619[3])
  i618.m_HighlightedColor = new pc.Color(i619[4], i619[5], i619[6], i619[7])
  i618.m_PressedColor = new pc.Color(i619[8], i619[9], i619[10], i619[11])
  i618.m_SelectedColor = new pc.Color(i619[12], i619[13], i619[14], i619[15])
  i618.m_DisabledColor = new pc.Color(i619[16], i619[17], i619[18], i619[19])
  i618.m_ColorMultiplier = i619[20]
  i618.m_FadeDuration = i619[21]
  return i618
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'm_HighlightedSprite')
  request.r(i621[2], i621[3], 0, i620, 'm_PressedSprite')
  request.r(i621[4], i621[5], 0, i620, 'm_SelectedSprite')
  request.r(i621[6], i621[7], 0, i620, 'm_DisabledSprite')
  return i620
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i623 = data
  i622.m_NormalTrigger = i623[0]
  i622.m_HighlightedTrigger = i623[1]
  i622.m_PressedTrigger = i623[2]
  i622.m_SelectedTrigger = i623[3]
  i622.m_DisabledTrigger = i623[4]
  return i622
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i624 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i625 = data
  i624.targetIsSelf = !!i625[0]
  request.r(i625[1], i625[2], 0, i624, 'targetGO')
  i624.tweenTargetIsTargetGO = !!i625[3]
  i624.delay = i625[4]
  i624.duration = i625[5]
  i624.easeType = i625[6]
  i624.easeCurve = new pc.AnimationCurve( { keys_flow: i625[7] } )
  i624.loopType = i625[8]
  i624.loops = i625[9]
  i624.id = i625[10]
  i624.isRelative = !!i625[11]
  i624.isFrom = !!i625[12]
  i624.isIndependentUpdate = !!i625[13]
  i624.autoKill = !!i625[14]
  i624.autoGenerate = !!i625[15]
  i624.isActive = !!i625[16]
  i624.isValid = !!i625[17]
  request.r(i625[18], i625[19], 0, i624, 'target')
  i624.animationType = i625[20]
  i624.targetType = i625[21]
  i624.forcedTargetType = i625[22]
  i624.autoPlay = !!i625[23]
  i624.useTargetAsV3 = !!i625[24]
  i624.endValueFloat = i625[25]
  i624.endValueV3 = new pc.Vec3( i625[26], i625[27], i625[28] )
  i624.endValueV2 = new pc.Vec2( i625[29], i625[30] )
  i624.endValueColor = new pc.Color(i625[31], i625[32], i625[33], i625[34])
  i624.endValueString = i625[35]
  i624.endValueRect = UnityEngine.Rect.MinMaxRect(i625[36], i625[37], i625[38], i625[39])
  request.r(i625[40], i625[41], 0, i624, 'endValueTransform')
  i624.optionalBool0 = !!i625[42]
  i624.optionalBool1 = !!i625[43]
  i624.optionalFloat0 = i625[44]
  i624.optionalInt0 = i625[45]
  i624.optionalRotationMode = i625[46]
  i624.optionalScrambleMode = i625[47]
  i624.optionalShakeRandomnessMode = i625[48]
  i624.optionalString = i625[49]
  i624.updateType = i625[50]
  i624.isSpeedBased = !!i625[51]
  i624.hasOnStart = !!i625[52]
  i624.hasOnPlay = !!i625[53]
  i624.hasOnUpdate = !!i625[54]
  i624.hasOnStepComplete = !!i625[55]
  i624.hasOnComplete = !!i625[56]
  i624.hasOnTweenCreated = !!i625[57]
  i624.hasOnRewind = !!i625[58]
  i624.onStart = request.d('UnityEngine.Events.UnityEvent', i625[59], i624.onStart)
  i624.onPlay = request.d('UnityEngine.Events.UnityEvent', i625[60], i624.onPlay)
  i624.onUpdate = request.d('UnityEngine.Events.UnityEvent', i625[61], i624.onUpdate)
  i624.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i625[62], i624.onStepComplete)
  i624.onComplete = request.d('UnityEngine.Events.UnityEvent', i625[63], i624.onComplete)
  i624.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i625[64], i624.onTweenCreated)
  i624.onRewind = request.d('UnityEngine.Events.UnityEvent', i625[65], i624.onRewind)
  return i624
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i627 = data
  i626.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i627[0], i626.m_PersistentCalls)
  return i626
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'm_ObjectArgument')
  i628.m_ObjectArgumentAssemblyTypeName = i629[2]
  i628.m_IntArgument = i629[3]
  i628.m_FloatArgument = i629[4]
  i628.m_StringArgument = i629[5]
  i628.m_BoolArgument = !!i629[6]
  return i628
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i630 = root || request.c( 'DraggableItem' )
  var i631 = data
  i630.idDrag = i631[0]
  i630.isProcess = !!i631[1]
  i630.isLose = !!i631[2]
  i630.isHide = !!i631[3]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i633 = data
  i632.m_Alpha = i633[0]
  i632.m_Interactable = !!i633[1]
  i632.m_BlocksRaycasts = !!i633[2]
  i632.m_IgnoreParentGroups = !!i633[3]
  i632.enabled = !!i633[4]
  return i632
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i634 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i635 = data
  i634.m_hasFontAssetChanged = !!i635[0]
  request.r(i635[1], i635[2], 0, i634, 'm_baseMaterial')
  i634.m_maskOffset = new pc.Vec4( i635[3], i635[4], i635[5], i635[6] )
  i634.m_text = i635[7]
  i634.m_isRightToLeft = !!i635[8]
  request.r(i635[9], i635[10], 0, i634, 'm_fontAsset')
  request.r(i635[11], i635[12], 0, i634, 'm_sharedMaterial')
  var i637 = i635[13]
  var i636 = []
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 2, i636, '')
  }
  i634.m_fontSharedMaterials = i636
  request.r(i635[14], i635[15], 0, i634, 'm_fontMaterial')
  var i639 = i635[16]
  var i638 = []
  for(var i = 0; i < i639.length; i += 2) {
  request.r(i639[i + 0], i639[i + 1], 2, i638, '')
  }
  i634.m_fontMaterials = i638
  i634.m_fontColor32 = UnityEngine.Color32.ConstructColor(i635[17], i635[18], i635[19], i635[20])
  i634.m_fontColor = new pc.Color(i635[21], i635[22], i635[23], i635[24])
  i634.m_enableVertexGradient = !!i635[25]
  i634.m_colorMode = i635[26]
  i634.m_fontColorGradient = request.d('TMPro.VertexGradient', i635[27], i634.m_fontColorGradient)
  request.r(i635[28], i635[29], 0, i634, 'm_fontColorGradientPreset')
  request.r(i635[30], i635[31], 0, i634, 'm_spriteAsset')
  i634.m_tintAllSprites = !!i635[32]
  request.r(i635[33], i635[34], 0, i634, 'm_StyleSheet')
  i634.m_TextStyleHashCode = i635[35]
  i634.m_overrideHtmlColors = !!i635[36]
  i634.m_faceColor = UnityEngine.Color32.ConstructColor(i635[37], i635[38], i635[39], i635[40])
  i634.m_fontSize = i635[41]
  i634.m_fontSizeBase = i635[42]
  i634.m_fontWeight = i635[43]
  i634.m_enableAutoSizing = !!i635[44]
  i634.m_fontSizeMin = i635[45]
  i634.m_fontSizeMax = i635[46]
  i634.m_fontStyle = i635[47]
  i634.m_HorizontalAlignment = i635[48]
  i634.m_VerticalAlignment = i635[49]
  i634.m_textAlignment = i635[50]
  i634.m_characterSpacing = i635[51]
  i634.m_wordSpacing = i635[52]
  i634.m_lineSpacing = i635[53]
  i634.m_lineSpacingMax = i635[54]
  i634.m_paragraphSpacing = i635[55]
  i634.m_charWidthMaxAdj = i635[56]
  i634.m_enableWordWrapping = !!i635[57]
  i634.m_wordWrappingRatios = i635[58]
  i634.m_overflowMode = i635[59]
  request.r(i635[60], i635[61], 0, i634, 'm_linkedTextComponent')
  request.r(i635[62], i635[63], 0, i634, 'parentLinkedComponent')
  i634.m_enableKerning = !!i635[64]
  i634.m_enableExtraPadding = !!i635[65]
  i634.checkPaddingRequired = !!i635[66]
  i634.m_isRichText = !!i635[67]
  i634.m_parseCtrlCharacters = !!i635[68]
  i634.m_isOrthographic = !!i635[69]
  i634.m_isCullingEnabled = !!i635[70]
  i634.m_horizontalMapping = i635[71]
  i634.m_verticalMapping = i635[72]
  i634.m_uvLineOffset = i635[73]
  i634.m_geometrySortingOrder = i635[74]
  i634.m_IsTextObjectScaleStatic = !!i635[75]
  i634.m_VertexBufferAutoSizeReduction = !!i635[76]
  i634.m_useMaxVisibleDescender = !!i635[77]
  i634.m_pageToDisplay = i635[78]
  i634.m_margin = new pc.Vec4( i635[79], i635[80], i635[81], i635[82] )
  i634.m_isUsingLegacyAnimationComponent = !!i635[83]
  i634.m_isVolumetricText = !!i635[84]
  i634.m_Maskable = !!i635[85]
  request.r(i635[86], i635[87], 0, i634, 'm_Material')
  i634.m_Color = new pc.Color(i635[88], i635[89], i635[90], i635[91])
  i634.m_RaycastTarget = !!i635[92]
  i634.m_RaycastPadding = new pc.Vec4( i635[93], i635[94], i635[95], i635[96] )
  return i634
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i642 = root || request.c( 'TMPro.VertexGradient' )
  var i643 = data
  i642.topLeft = new pc.Color(i643[0], i643[1], i643[2], i643[3])
  i642.topRight = new pc.Color(i643[4], i643[5], i643[6], i643[7])
  i642.bottomLeft = new pc.Color(i643[8], i643[9], i643[10], i643[11])
  i642.bottomRight = new pc.Color(i643[12], i643[13], i643[14], i643[15])
  return i642
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.Mask' )
  var i645 = data
  i644.m_ShowMaskGraphic = !!i645[0]
  return i644
}

Deserializers["AudioController"] = function (request, data, root) {
  var i646 = root || request.c( 'AudioController' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'bgmSource')
  request.r(i647[2], i647[3], 0, i646, 'sfxSource')
  var i649 = i647[4]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i649.length; i += 1) {
    i648.add(request.d('AudioEntry', i649[i + 0]));
  }
  i646.audioEntries = i648
  return i646
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i652 = root || request.c( 'AudioEntry' )
  var i653 = data
  i652.key = i653[0]
  request.r(i653[1], i653[2], 0, i652, 'clip')
  i652.volume = i653[3]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i655 = data
  i654.ambientIntensity = i655[0]
  i654.reflectionIntensity = i655[1]
  i654.ambientMode = i655[2]
  i654.ambientLight = new pc.Color(i655[3], i655[4], i655[5], i655[6])
  i654.ambientSkyColor = new pc.Color(i655[7], i655[8], i655[9], i655[10])
  i654.ambientGroundColor = new pc.Color(i655[11], i655[12], i655[13], i655[14])
  i654.ambientEquatorColor = new pc.Color(i655[15], i655[16], i655[17], i655[18])
  i654.fogColor = new pc.Color(i655[19], i655[20], i655[21], i655[22])
  i654.fogEndDistance = i655[23]
  i654.fogStartDistance = i655[24]
  i654.fogDensity = i655[25]
  i654.fog = !!i655[26]
  request.r(i655[27], i655[28], 0, i654, 'skybox')
  i654.fogMode = i655[29]
  var i657 = i655[30]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i657[i + 0]) );
  }
  i654.lightmaps = i656
  i654.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i655[31], i654.lightProbes)
  i654.lightmapsMode = i655[32]
  i654.mixedBakeMode = i655[33]
  i654.environmentLightingMode = i655[34]
  i654.ambientProbe = new pc.SphericalHarmonicsL2(i655[35])
  i654.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i655[36])
  i654.useReferenceAmbientProbe = !!i655[37]
  request.r(i655[38], i655[39], 0, i654, 'customReflection')
  request.r(i655[40], i655[41], 0, i654, 'defaultReflection')
  i654.defaultReflectionMode = i655[42]
  i654.defaultReflectionResolution = i655[43]
  i654.sunLightObjectId = i655[44]
  i654.pixelLightCount = i655[45]
  i654.defaultReflectionHDR = !!i655[46]
  i654.hasLightDataAsset = !!i655[47]
  i654.hasManualGenerate = !!i655[48]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'lightmapColor')
  request.r(i661[2], i661[3], 0, i660, 'lightmapDirection')
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i662 = root || new UnityEngine.LightProbes()
  var i663 = data
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i671 = data
  var i673 = i671[0]
  var i672 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i673.length; i += 1) {
    i672.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i673[i + 0]));
  }
  i670.ShaderCompilationErrors = i672
  i670.name = i671[1]
  i670.guid = i671[2]
  var i675 = i671[3]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( i675[i + 0] );
  }
  i670.shaderDefinedKeywords = i674
  var i677 = i671[4]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i677[i + 0]) );
  }
  i670.passes = i676
  var i679 = i671[5]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i679[i + 0]) );
  }
  i670.usePasses = i678
  var i681 = i671[6]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i681[i + 0]) );
  }
  i670.defaultParameterValues = i680
  request.r(i671[7], i671[8], 0, i670, 'unityFallbackShader')
  i670.readDepth = !!i671[9]
  i670.isCreatedByShaderGraph = !!i671[10]
  i670.disableBatching = !!i671[11]
  i670.compiled = !!i671[12]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i685 = data
  i684.shaderName = i685[0]
  i684.errorMessage = i685[1]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i688 = root || new pc.UnityShaderPass()
  var i689 = data
  i688.id = i689[0]
  i688.subShaderIndex = i689[1]
  i688.name = i689[2]
  i688.passType = i689[3]
  i688.grabPassTextureName = i689[4]
  i688.usePass = !!i689[5]
  i688.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[6], i688.zTest)
  i688.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[7], i688.zWrite)
  i688.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[8], i688.culling)
  i688.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i689[9], i688.blending)
  i688.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i689[10], i688.alphaBlending)
  i688.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[11], i688.colorWriteMask)
  i688.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[12], i688.offsetUnits)
  i688.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[13], i688.offsetFactor)
  i688.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[14], i688.stencilRef)
  i688.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[15], i688.stencilReadMask)
  i688.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[16], i688.stencilWriteMask)
  i688.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i689[17], i688.stencilOp)
  i688.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i689[18], i688.stencilOpFront)
  i688.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i689[19], i688.stencilOpBack)
  var i691 = i689[20]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i691[i + 0]) );
  }
  i688.tags = i690
  var i693 = i689[21]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( i693[i + 0] );
  }
  i688.passDefinedKeywords = i692
  var i695 = i689[22]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i695[i + 0]) );
  }
  i688.passDefinedKeywordGroups = i694
  var i697 = i689[23]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i697[i + 0]) );
  }
  i688.variants = i696
  var i699 = i689[24]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i699[i + 0]) );
  }
  i688.excludedVariants = i698
  i688.hasDepthReader = !!i689[25]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i701 = data
  i700.val = i701[0]
  i700.name = i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i703 = data
  i702.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i703[0], i702.src)
  i702.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i703[1], i702.dst)
  i702.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i703[2], i702.op)
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i705 = data
  i704.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i705[0], i704.pass)
  i704.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i705[1], i704.fail)
  i704.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i705[2], i704.zFail)
  i704.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i705[3], i704.comp)
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i709 = data
  i708.name = i709[0]
  i708.value = i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i713 = data
  var i715 = i713[0]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( i715[i + 0] );
  }
  i712.keywords = i714
  i712.hasDiscard = !!i713[1]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i719 = data
  i718.passId = i719[0]
  i718.subShaderIndex = i719[1]
  var i721 = i719[2]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( i721[i + 0] );
  }
  i718.keywords = i720
  i718.vertexProgram = i719[3]
  i718.fragmentProgram = i719[4]
  i718.exportedForWebGl2 = !!i719[5]
  i718.readDepth = !!i719[6]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'shader')
  i724.pass = i725[2]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i729 = data
  i728.name = i729[0]
  i728.type = i729[1]
  i728.value = new pc.Vec4( i729[2], i729[3], i729[4], i729[5] )
  i728.textureValue = i729[6]
  i728.shaderPropertyFlag = i729[7]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i731 = data
  i730.name = i731[0]
  request.r(i731[1], i731[2], 0, i730, 'texture')
  i730.aabb = i731[3]
  i730.vertices = i731[4]
  i730.triangles = i731[5]
  i730.textureRect = UnityEngine.Rect.MinMaxRect(i731[6], i731[7], i731[8], i731[9])
  i730.packedRect = UnityEngine.Rect.MinMaxRect(i731[10], i731[11], i731[12], i731[13])
  i730.border = new pc.Vec4( i731[14], i731[15], i731[16], i731[17] )
  i730.transparency = i731[18]
  i730.bounds = i731[19]
  i730.pixelsPerUnit = i731[20]
  i730.textureWidth = i731[21]
  i730.textureHeight = i731[22]
  i730.nativeSize = new pc.Vec2( i731[23], i731[24] )
  i730.pivot = new pc.Vec2( i731[25], i731[26] )
  i730.textureRectOffset = new pc.Vec2( i731[27], i731[28] )
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i733 = data
  i732.name = i733[0]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i735 = data
  i734.name = i735[0]
  i734.ascent = i735[1]
  i734.originalLineHeight = i735[2]
  i734.fontSize = i735[3]
  var i737 = i735[4]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i737[i + 0]) );
  }
  i734.characterInfo = i736
  request.r(i735[5], i735[6], 0, i734, 'texture')
  i734.originalFontSize = i735[7]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i741 = data
  i740.index = i741[0]
  i740.advance = i741[1]
  i740.bearing = i741[2]
  i740.glyphWidth = i741[3]
  i740.glyphHeight = i741[4]
  i740.minX = i741[5]
  i740.maxX = i741[6]
  i740.minY = i741[7]
  i740.maxY = i741[8]
  i740.uvBottomLeftX = i741[9]
  i740.uvBottomLeftY = i741[10]
  i740.uvBottomRightX = i741[11]
  i740.uvBottomRightY = i741[12]
  i740.uvTopLeftX = i741[13]
  i740.uvTopLeftY = i741[14]
  i740.uvTopRightX = i741[15]
  i740.uvTopRightY = i741[16]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i743 = data
  i742.name = i743[0]
  i742.bytes64 = i743[1]
  i742.data = i743[2]
  return i742
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i744 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i745 = data
  var i747 = i745[0]
  var i746 = []
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 2, i746, '')
  }
  i744.atlasAssets = i746
  i744.scale = i745[1]
  request.r(i745[2], i745[3], 0, i744, 'skeletonJSON')
  i744.isUpgradingBlendModeMaterials = !!i745[4]
  i744.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i745[5], i744.blendModeMaterials)
  var i749 = i745[6]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 1, i748, '')
  }
  i744.skeletonDataModifiers = i748
  var i751 = i745[7]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( i751[i + 0] );
  }
  i744.fromAnimation = i750
  var i753 = i745[8]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( i753[i + 0] );
  }
  i744.toAnimation = i752
  i744.duration = i745[9]
  i744.defaultMix = i745[10]
  request.r(i745[11], i745[12], 0, i744, 'controller')
  return i744
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i756 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i757 = data
  i756.applyAdditiveMaterial = !!i757[0]
  var i759 = i757[1]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i759.length; i += 1) {
    i758.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i759[i + 0]));
  }
  i756.additiveMaterials = i758
  var i761 = i757[2]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i761.length; i += 1) {
    i760.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i761[i + 0]));
  }
  i756.multiplyMaterials = i760
  var i763 = i757[3]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i763.length; i += 1) {
    i762.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i763[i + 0]));
  }
  i756.screenMaterials = i762
  i756.requiresBlendModeMaterials = !!i757[4]
  return i756
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i766 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i767 = data
  i766.pageName = i767[0]
  request.r(i767[1], i767[2], 0, i766, 'material')
  return i766
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i770 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'atlasFile')
  var i773 = i771[2]
  var i772 = []
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 2, i772, '')
  }
  i770.materials = i772
  i770.textureLoadingMode = i771[3]
  request.r(i771[4], i771[5], 0, i770, 'onDemandTextureLoader')
  return i770
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i774 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'atlas')
  i774.normalStyle = i775[2]
  i774.normalSpacingOffset = i775[3]
  i774.boldStyle = i775[4]
  i774.boldSpacing = i775[5]
  i774.italicStyle = i775[6]
  i774.tabSize = i775[7]
  i774.hashCode = i775[8]
  request.r(i775[9], i775[10], 0, i774, 'material')
  i774.materialHashCode = i775[11]
  i774.m_Version = i775[12]
  i774.m_SourceFontFileGUID = i775[13]
  request.r(i775[14], i775[15], 0, i774, 'm_SourceFontFile_EditorRef')
  request.r(i775[16], i775[17], 0, i774, 'm_SourceFontFile')
  i774.m_AtlasPopulationMode = i775[18]
  i774.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i775[19], i774.m_FaceInfo)
  var i777 = i775[20]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i777.length; i += 1) {
    i776.add(request.d('UnityEngine.TextCore.Glyph', i777[i + 0]));
  }
  i774.m_GlyphTable = i776
  var i779 = i775[21]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('TMPro.TMP_Character', i779[i + 0]));
  }
  i774.m_CharacterTable = i778
  var i781 = i775[22]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i774.m_AtlasTextures = i780
  i774.m_AtlasTextureIndex = i775[23]
  i774.m_IsMultiAtlasTexturesEnabled = !!i775[24]
  i774.m_ClearDynamicDataOnBuild = !!i775[25]
  var i783 = i775[26]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('UnityEngine.TextCore.GlyphRect', i783[i + 0]));
  }
  i774.m_UsedGlyphRects = i782
  var i785 = i775[27]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i785.length; i += 1) {
    i784.add(request.d('UnityEngine.TextCore.GlyphRect', i785[i + 0]));
  }
  i774.m_FreeGlyphRects = i784
  i774.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i775[28], i774.m_fontInfo)
  i774.m_AtlasWidth = i775[29]
  i774.m_AtlasHeight = i775[30]
  i774.m_AtlasPadding = i775[31]
  i774.m_AtlasRenderMode = i775[32]
  var i787 = i775[33]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(request.d('TMPro.TMP_Glyph', i787[i + 0]));
  }
  i774.m_glyphInfoList = i786
  i774.m_KerningTable = request.d('TMPro.KerningTable', i775[34], i774.m_KerningTable)
  i774.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i775[35], i774.m_FontFeatureTable)
  var i789 = i775[36]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 1, i788, '')
  }
  i774.fallbackFontAssets = i788
  var i791 = i775[37]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 1, i790, '')
  }
  i774.m_FallbackFontAssetTable = i790
  i774.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i775[38], i774.m_CreationSettings)
  var i793 = i775[39]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('TMPro.TMP_FontWeightPair', i793[i + 0]) );
  }
  i774.m_FontWeightTable = i792
  var i795 = i775[40]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('TMPro.TMP_FontWeightPair', i795[i + 0]) );
  }
  i774.fontWeights = i794
  return i774
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i797 = data
  i796.m_FaceIndex = i797[0]
  i796.m_FamilyName = i797[1]
  i796.m_StyleName = i797[2]
  i796.m_PointSize = i797[3]
  i796.m_Scale = i797[4]
  i796.m_UnitsPerEM = i797[5]
  i796.m_LineHeight = i797[6]
  i796.m_AscentLine = i797[7]
  i796.m_CapLine = i797[8]
  i796.m_MeanLine = i797[9]
  i796.m_Baseline = i797[10]
  i796.m_DescentLine = i797[11]
  i796.m_SuperscriptOffset = i797[12]
  i796.m_SuperscriptSize = i797[13]
  i796.m_SubscriptOffset = i797[14]
  i796.m_SubscriptSize = i797[15]
  i796.m_UnderlineOffset = i797[16]
  i796.m_UnderlineThickness = i797[17]
  i796.m_StrikethroughOffset = i797[18]
  i796.m_StrikethroughThickness = i797[19]
  i796.m_TabWidth = i797[20]
  return i796
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i801 = data
  i800.m_Index = i801[0]
  i800.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i801[1], i800.m_Metrics)
  i800.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i801[2], i800.m_GlyphRect)
  i800.m_Scale = i801[3]
  i800.m_AtlasIndex = i801[4]
  i800.m_ClassDefinitionType = i801[5]
  return i800
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i803 = data
  i802.m_Width = i803[0]
  i802.m_Height = i803[1]
  i802.m_HorizontalBearingX = i803[2]
  i802.m_HorizontalBearingY = i803[3]
  i802.m_HorizontalAdvance = i803[4]
  return i802
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i805 = data
  i804.m_X = i805[0]
  i804.m_Y = i805[1]
  i804.m_Width = i805[2]
  i804.m_Height = i805[3]
  return i804
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i808 = root || request.c( 'TMPro.TMP_Character' )
  var i809 = data
  i808.m_ElementType = i809[0]
  i808.m_Unicode = i809[1]
  i808.m_GlyphIndex = i809[2]
  i808.m_Scale = i809[3]
  return i808
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i814 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i815 = data
  i814.Name = i815[0]
  i814.PointSize = i815[1]
  i814.Scale = i815[2]
  i814.CharacterCount = i815[3]
  i814.LineHeight = i815[4]
  i814.Baseline = i815[5]
  i814.Ascender = i815[6]
  i814.CapHeight = i815[7]
  i814.Descender = i815[8]
  i814.CenterLine = i815[9]
  i814.SuperscriptOffset = i815[10]
  i814.SubscriptOffset = i815[11]
  i814.SubSize = i815[12]
  i814.Underline = i815[13]
  i814.UnderlineThickness = i815[14]
  i814.strikethrough = i815[15]
  i814.strikethroughThickness = i815[16]
  i814.TabWidth = i815[17]
  i814.Padding = i815[18]
  i814.AtlasWidth = i815[19]
  i814.AtlasHeight = i815[20]
  return i814
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i818 = root || request.c( 'TMPro.TMP_Glyph' )
  var i819 = data
  i818.id = i819[0]
  i818.x = i819[1]
  i818.y = i819[2]
  i818.width = i819[3]
  i818.height = i819[4]
  i818.xOffset = i819[5]
  i818.yOffset = i819[6]
  i818.xAdvance = i819[7]
  i818.scale = i819[8]
  return i818
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i820 = root || request.c( 'TMPro.KerningTable' )
  var i821 = data
  var i823 = i821[0]
  var i822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i823.length; i += 1) {
    i822.add(request.d('TMPro.KerningPair', i823[i + 0]));
  }
  i820.kerningPairs = i822
  return i820
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i826 = root || request.c( 'TMPro.KerningPair' )
  var i827 = data
  i826.xOffset = i827[0]
  i826.m_FirstGlyph = i827[1]
  i826.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i827[2], i826.m_FirstGlyphAdjustments)
  i826.m_SecondGlyph = i827[3]
  i826.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i827[4], i826.m_SecondGlyphAdjustments)
  i826.m_IgnoreSpacingAdjustments = !!i827[5]
  return i826
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i828 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i829 = data
  var i831 = i829[0]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i831.length; i += 1) {
    i830.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i831[i + 0]));
  }
  i828.m_GlyphPairAdjustmentRecords = i830
  return i828
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i834 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i835 = data
  i834.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i835[0], i834.m_FirstAdjustmentRecord)
  i834.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i835[1], i834.m_SecondAdjustmentRecord)
  i834.m_FeatureLookupFlags = i835[2]
  return i834
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i839 = data
  i838.sourceFontFileName = i839[0]
  i838.sourceFontFileGUID = i839[1]
  i838.pointSizeSamplingMode = i839[2]
  i838.pointSize = i839[3]
  i838.padding = i839[4]
  i838.packingMode = i839[5]
  i838.atlasWidth = i839[6]
  i838.atlasHeight = i839[7]
  i838.characterSetSelectionMode = i839[8]
  i838.characterSequence = i839[9]
  i838.referencedFontAssetGUID = i839[10]
  i838.referencedTextAssetGUID = i839[11]
  i838.fontStyle = i839[12]
  i838.fontStyleModifier = i839[13]
  i838.renderMode = i839[14]
  i838.includeFontFeatures = !!i839[15]
  return i838
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'regularTypeface')
  request.r(i843[2], i843[3], 0, i842, 'italicTypeface')
  return i842
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i844 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i845 = data
  i844.useSafeMode = !!i845[0]
  i844.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i845[1], i844.safeModeOptions)
  i844.timeScale = i845[2]
  i844.unscaledTimeScale = i845[3]
  i844.useSmoothDeltaTime = !!i845[4]
  i844.maxSmoothUnscaledTime = i845[5]
  i844.rewindCallbackMode = i845[6]
  i844.showUnityEditorReport = !!i845[7]
  i844.logBehaviour = i845[8]
  i844.drawGizmos = !!i845[9]
  i844.defaultRecyclable = !!i845[10]
  i844.defaultAutoPlay = i845[11]
  i844.defaultUpdateType = i845[12]
  i844.defaultTimeScaleIndependent = !!i845[13]
  i844.defaultEaseType = i845[14]
  i844.defaultEaseOvershootOrAmplitude = i845[15]
  i844.defaultEasePeriod = i845[16]
  i844.defaultAutoKill = !!i845[17]
  i844.defaultLoopType = i845[18]
  i844.debugMode = !!i845[19]
  i844.debugStoreTargetId = !!i845[20]
  i844.showPreviewPanel = !!i845[21]
  i844.storeSettingsLocation = i845[22]
  i844.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i845[23], i844.modules)
  i844.createASMDEF = !!i845[24]
  i844.showPlayingTweens = !!i845[25]
  i844.showPausedTweens = !!i845[26]
  return i844
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i846 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i847 = data
  i846.logBehaviour = i847[0]
  i846.nestedTweenFailureBehaviour = i847[1]
  return i846
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i848 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i849 = data
  i848.showPanel = !!i849[0]
  i848.audioEnabled = !!i849[1]
  i848.physicsEnabled = !!i849[2]
  i848.physics2DEnabled = !!i849[3]
  i848.spriteEnabled = !!i849[4]
  i848.uiEnabled = !!i849[5]
  i848.textMeshProEnabled = !!i849[6]
  i848.tk2DEnabled = !!i849[7]
  i848.deAudioEnabled = !!i849[8]
  i848.deUnityExtendedEnabled = !!i849[9]
  i848.epoOutlineEnabled = !!i849[10]
  return i848
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.TMP_Settings' )
  var i851 = data
  i850.m_enableWordWrapping = !!i851[0]
  i850.m_enableKerning = !!i851[1]
  i850.m_enableExtraPadding = !!i851[2]
  i850.m_enableTintAllSprites = !!i851[3]
  i850.m_enableParseEscapeCharacters = !!i851[4]
  i850.m_EnableRaycastTarget = !!i851[5]
  i850.m_GetFontFeaturesAtRuntime = !!i851[6]
  i850.m_missingGlyphCharacter = i851[7]
  i850.m_warningsDisabled = !!i851[8]
  request.r(i851[9], i851[10], 0, i850, 'm_defaultFontAsset')
  i850.m_defaultFontAssetPath = i851[11]
  i850.m_defaultFontSize = i851[12]
  i850.m_defaultAutoSizeMinRatio = i851[13]
  i850.m_defaultAutoSizeMaxRatio = i851[14]
  i850.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i851[15], i851[16] )
  i850.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i851[17], i851[18] )
  i850.m_autoSizeTextContainer = !!i851[19]
  i850.m_IsTextObjectScaleStatic = !!i851[20]
  var i853 = i851[21]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 1, i852, '')
  }
  i850.m_fallbackFontAssets = i852
  i850.m_matchMaterialPreset = !!i851[22]
  request.r(i851[23], i851[24], 0, i850, 'm_defaultSpriteAsset')
  i850.m_defaultSpriteAssetPath = i851[25]
  i850.m_enableEmojiSupport = !!i851[26]
  i850.m_MissingCharacterSpriteUnicode = i851[27]
  i850.m_defaultColorGradientPresetsPath = i851[28]
  request.r(i851[29], i851[30], 0, i850, 'm_defaultStyleSheet')
  i850.m_StyleSheetsResourcePath = i851[31]
  request.r(i851[32], i851[33], 0, i850, 'm_leadingCharacters')
  request.r(i851[34], i851[35], 0, i850, 'm_followingCharacters')
  i850.m_UseModernHangulLineBreakingRules = !!i851[36]
  return i850
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'spriteSheet')
  var i857 = i855[2]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i857.length; i += 1) {
    i856.add(request.d('TMPro.TMP_Sprite', i857[i + 0]));
  }
  i854.spriteInfoList = i856
  var i859 = i855[3]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 1, i858, '')
  }
  i854.fallbackSpriteAssets = i858
  i854.hashCode = i855[4]
  request.r(i855[5], i855[6], 0, i854, 'material')
  i854.materialHashCode = i855[7]
  i854.m_Version = i855[8]
  i854.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i855[9], i854.m_FaceInfo)
  var i861 = i855[10]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i861.length; i += 1) {
    i860.add(request.d('TMPro.TMP_SpriteCharacter', i861[i + 0]));
  }
  i854.m_SpriteCharacterTable = i860
  var i863 = i855[11]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i863.length; i += 1) {
    i862.add(request.d('TMPro.TMP_SpriteGlyph', i863[i + 0]));
  }
  i854.m_SpriteGlyphTable = i862
  return i854
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.TMP_Sprite' )
  var i867 = data
  i866.name = i867[0]
  i866.hashCode = i867[1]
  i866.unicode = i867[2]
  i866.pivot = new pc.Vec2( i867[3], i867[4] )
  request.r(i867[5], i867[6], 0, i866, 'sprite')
  i866.id = i867[7]
  i866.x = i867[8]
  i866.y = i867[9]
  i866.width = i867[10]
  i866.height = i867[11]
  i866.xOffset = i867[12]
  i866.yOffset = i867[13]
  i866.xAdvance = i867[14]
  i866.scale = i867[15]
  return i866
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i872 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i873 = data
  i872.m_Name = i873[0]
  i872.m_HashCode = i873[1]
  i872.m_ElementType = i873[2]
  i872.m_Unicode = i873[3]
  i872.m_GlyphIndex = i873[4]
  i872.m_Scale = i873[5]
  return i872
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i876 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'sprite')
  i876.m_Index = i877[2]
  i876.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i877[3], i876.m_Metrics)
  i876.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i877[4], i876.m_GlyphRect)
  i876.m_Scale = i877[5]
  i876.m_AtlasIndex = i877[6]
  i876.m_ClassDefinitionType = i877[7]
  return i876
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i879 = data
  var i881 = i879[0]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('TMPro.TMP_Style', i881[i + 0]));
  }
  i878.m_StyleList = i880
  return i878
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.TMP_Style' )
  var i885 = data
  i884.m_Name = i885[0]
  i884.m_HashCode = i885[1]
  i884.m_OpeningDefinition = i885[2]
  i884.m_ClosingDefinition = i885[3]
  i884.m_OpeningTagArray = i885[4]
  i884.m_ClosingTagArray = i885[5]
  i884.m_OpeningTagUnicodeArray = i885[6]
  i884.m_ClosingTagUnicodeArray = i885[7]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i887 = data
  var i889 = i887[0]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i889[i + 0]) );
  }
  i886.files = i888
  i886.componentToPrefabIds = i887[1]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i893 = data
  i892.path = i893[0]
  request.r(i893[1], i893[2], 0, i892, 'unityObject')
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i895 = data
  var i897 = i895[0]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i897[i + 0]) );
  }
  i894.scriptsExecutionOrder = i896
  var i899 = i895[1]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i899[i + 0]) );
  }
  i894.sortingLayers = i898
  var i901 = i895[2]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i901[i + 0]) );
  }
  i894.cullingLayers = i900
  i894.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i895[3], i894.timeSettings)
  i894.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i895[4], i894.physicsSettings)
  i894.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i895[5], i894.physics2DSettings)
  i894.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i895[6], i894.qualitySettings)
  i894.enableRealtimeShadows = !!i895[7]
  i894.enableAutoInstancing = !!i895[8]
  i894.enableStaticBatching = !!i895[9]
  i894.enableDynamicBatching = !!i895[10]
  i894.lightmapEncodingQuality = i895[11]
  i894.desiredColorSpace = i895[12]
  var i903 = i895[13]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( i903[i + 0] );
  }
  i894.allTags = i902
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i907 = data
  i906.name = i907[0]
  i906.value = i907[1]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i911 = data
  i910.id = i911[0]
  i910.name = i911[1]
  i910.value = i911[2]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i915 = data
  i914.id = i915[0]
  i914.name = i915[1]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i917 = data
  i916.fixedDeltaTime = i917[0]
  i916.maximumDeltaTime = i917[1]
  i916.timeScale = i917[2]
  i916.maximumParticleTimestep = i917[3]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i919 = data
  i918.gravity = new pc.Vec3( i919[0], i919[1], i919[2] )
  i918.defaultSolverIterations = i919[3]
  i918.bounceThreshold = i919[4]
  i918.autoSyncTransforms = !!i919[5]
  i918.autoSimulation = !!i919[6]
  var i921 = i919[7]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i921[i + 0]) );
  }
  i918.collisionMatrix = i920
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i925 = data
  i924.enabled = !!i925[0]
  i924.layerId = i925[1]
  i924.otherLayerId = i925[2]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'material')
  i926.gravity = new pc.Vec2( i927[2], i927[3] )
  i926.positionIterations = i927[4]
  i926.velocityIterations = i927[5]
  i926.velocityThreshold = i927[6]
  i926.maxLinearCorrection = i927[7]
  i926.maxAngularCorrection = i927[8]
  i926.maxTranslationSpeed = i927[9]
  i926.maxRotationSpeed = i927[10]
  i926.baumgarteScale = i927[11]
  i926.baumgarteTOIScale = i927[12]
  i926.timeToSleep = i927[13]
  i926.linearSleepTolerance = i927[14]
  i926.angularSleepTolerance = i927[15]
  i926.defaultContactOffset = i927[16]
  i926.autoSimulation = !!i927[17]
  i926.queriesHitTriggers = !!i927[18]
  i926.queriesStartInColliders = !!i927[19]
  i926.callbacksOnDisable = !!i927[20]
  i926.reuseCollisionCallbacks = !!i927[21]
  i926.autoSyncTransforms = !!i927[22]
  var i929 = i927[23]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i929[i + 0]) );
  }
  i926.collisionMatrix = i928
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i933 = data
  i932.enabled = !!i933[0]
  i932.layerId = i933[1]
  i932.otherLayerId = i933[2]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i935 = data
  var i937 = i935[0]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i937[i + 0]) );
  }
  i934.qualityLevels = i936
  var i939 = i935[1]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( i939[i + 0] );
  }
  i934.names = i938
  i934.shadows = i935[2]
  i934.anisotropicFiltering = i935[3]
  i934.antiAliasing = i935[4]
  i934.lodBias = i935[5]
  i934.shadowCascades = i935[6]
  i934.shadowDistance = i935[7]
  i934.shadowmaskMode = i935[8]
  i934.shadowProjection = i935[9]
  i934.shadowResolution = i935[10]
  i934.softParticles = !!i935[11]
  i934.softVegetation = !!i935[12]
  i934.activeColorSpace = i935[13]
  i934.desiredColorSpace = i935[14]
  i934.masterTextureLimit = i935[15]
  i934.maxQueuedFrames = i935[16]
  i934.particleRaycastBudget = i935[17]
  i934.pixelLightCount = i935[18]
  i934.realtimeReflectionProbes = !!i935[19]
  i934.shadowCascade2Split = i935[20]
  i934.shadowCascade4Split = new pc.Vec3( i935[21], i935[22], i935[23] )
  i934.streamingMipmapsActive = !!i935[24]
  i934.vSyncCount = i935[25]
  i934.asyncUploadBufferSize = i935[26]
  i934.asyncUploadTimeSlice = i935[27]
  i934.billboardsFaceCameraPosition = !!i935[28]
  i934.shadowNearPlaneOffset = i935[29]
  i934.streamingMipmapsMemoryBudget = i935[30]
  i934.maximumLODLevel = i935[31]
  i934.streamingMipmapsAddAllCameras = !!i935[32]
  i934.streamingMipmapsMaxLevelReduction = i935[33]
  i934.streamingMipmapsRenderersPerFrame = i935[34]
  i934.resolutionScalingFixedDPIFactor = i935[35]
  i934.streamingMipmapsMaxFileIORequests = i935[36]
  i934.currentQualityLevel = i935[37]
  return i934
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i943 = data
  i942.xPlacement = i943[0]
  i942.yPlacement = i943[1]
  i942.xAdvance = i943[2]
  i942.yAdvance = i943[3]
  return i942
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i944 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i945 = data
  i944.m_GlyphIndex = i945[0]
  i944.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i945[1], i944.m_GlyphValueRecord)
  return i944
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i947 = data
  i946.m_XPlacement = i947[0]
  i946.m_YPlacement = i947[1]
  i946.m_XAdvance = i947[2]
  i946.m_YAdvance = i947[3]
  return i946
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[3],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[3],"75":[76],"77":[78],"79":[78],"9":[8],"80":[81],"82":[83],"84":[81],"85":[8],"86":[8],"11":[9],"18":[19,8],"87":[8],"10":[9],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"33":[8],"95":[8],"16":[19,8],"96":[8],"97":[8],"98":[8],"99":[8],"100":[19,8],"101":[8],"102":[6],"103":[6],"7":[6],"104":[6],"105":[3],"106":[3],"107":[108],"109":[3],"110":[111],"112":[8],"113":[19,8],"114":[76],"23":[19,8],"115":[116,76],"117":[76],"118":[76,119],"120":[53],"121":[61],"122":[111],"123":[124],"125":[8],"126":[76,8],"17":[8,19],"127":[8],"128":[19,8],"129":[76],"130":[19,8],"131":[8],"132":[81]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DropZone","UnityEngine.PolygonCollider2D","ClickItem","DG.Tweening.DOTweenAnimation","DraggableItem","UnityEngine.CanvasGroup","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "260.2";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BEQ_V20_NgocNDL_AnhPD";

Deserializers.lunaAppID = "29138";

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

Deserializers.buildID = "7c0c2309-94f8-458c-ad0e-c22e99df2e80";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

