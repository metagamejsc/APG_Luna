var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointSpring' )
  var i455 = data
  i454.spring = i455[0]
  i454.damper = i455[1]
  i454.targetPosition = i455[2]
  return i454
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointMotor' )
  var i457 = data
  i456.m_TargetVelocity = i457[0]
  i456.m_Force = i457[1]
  i456.m_FreeSpin = i457[2]
  return i456
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointLimits' )
  var i459 = data
  i458.m_Min = i459[0]
  i458.m_Max = i459[1]
  i458.m_Bounciness = i459[2]
  i458.m_BounceMinVelocity = i459[3]
  i458.m_ContactDistance = i459[4]
  i458.minBounce = i459[5]
  i458.maxBounce = i459[6]
  return i458
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.JointDrive' )
  var i461 = data
  i460.m_PositionSpring = i461[0]
  i460.m_PositionDamper = i461[1]
  i460.m_MaximumForce = i461[2]
  i460.m_UseAcceleration = i461[3]
  return i460
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i463 = data
  i462.m_Spring = i463[0]
  i462.m_Damper = i463[1]
  return i462
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i465 = data
  i464.m_Limit = i465[0]
  i464.m_Bounciness = i465[1]
  i464.m_ContactDistance = i465[2]
  return i464
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i467 = data
  i466.m_ExtremumSlip = i467[0]
  i466.m_ExtremumValue = i467[1]
  i466.m_AsymptoteSlip = i467[2]
  i466.m_AsymptoteValue = i467[3]
  i466.m_Stiffness = i467[4]
  return i466
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i469 = data
  i468.m_LowerAngle = i469[0]
  i468.m_UpperAngle = i469[1]
  return i468
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i471 = data
  i470.m_MotorSpeed = i471[0]
  i470.m_MaximumMotorTorque = i471[1]
  return i470
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i473 = data
  i472.m_DampingRatio = i473[0]
  i472.m_Frequency = i473[1]
  i472.m_Angle = i473[2]
  return i472
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i475 = data
  i474.m_LowerTranslation = i475[0]
  i474.m_UpperTranslation = i475[1]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i477 = data
  i476.name = i477[0]
  i476.width = i477[1]
  i476.height = i477[2]
  i476.mipmapCount = i477[3]
  i476.anisoLevel = i477[4]
  i476.filterMode = i477[5]
  i476.hdr = !!i477[6]
  i476.format = i477[7]
  i476.wrapMode = i477[8]
  i476.alphaIsTransparency = !!i477[9]
  i476.alphaSource = i477[10]
  i476.graphicsFormat = i477[11]
  i476.sRGBTexture = !!i477[12]
  i476.desiredColorSpace = i477[13]
  i476.wrapU = i477[14]
  i476.wrapV = i477[15]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i478 = root || new pc.UnityMaterial()
  var i479 = data
  i478.name = i479[0]
  request.r(i479[1], i479[2], 0, i478, 'shader')
  i478.renderQueue = i479[3]
  i478.enableInstancing = !!i479[4]
  var i481 = i479[5]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i481[i + 0]) );
  }
  i478.floatParameters = i480
  var i483 = i479[6]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i483[i + 0]) );
  }
  i478.colorParameters = i482
  var i485 = i479[7]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i485[i + 0]) );
  }
  i478.vectorParameters = i484
  var i487 = i479[8]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i487[i + 0]) );
  }
  i478.textureParameters = i486
  var i489 = i479[9]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i489[i + 0]) );
  }
  i478.materialFlags = i488
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i493 = data
  i492.name = i493[0]
  i492.value = i493[1]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i497 = data
  i496.name = i497[0]
  i496.value = new pc.Color(i497[1], i497[2], i497[3], i497[4])
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i501 = data
  i500.name = i501[0]
  i500.value = new pc.Vec4( i501[1], i501[2], i501[3], i501[4] )
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i505 = data
  i504.name = i505[0]
  request.r(i505[1], i505[2], 0, i504, 'value')
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i509 = data
  i508.name = i509[0]
  i508.enabled = !!i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i511 = data
  i510.name = i511[0]
  i510.index = i511[1]
  i510.startup = !!i511[2]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i513 = data
  i512.position = new pc.Vec3( i513[0], i513[1], i513[2] )
  i512.scale = new pc.Vec3( i513[3], i513[4], i513[5] )
  i512.rotation = new pc.Quat(i513[6], i513[7], i513[8], i513[9])
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i515 = data
  i514.aspect = i515[0]
  i514.orthographic = !!i515[1]
  i514.orthographicSize = i515[2]
  i514.backgroundColor = new pc.Color(i515[3], i515[4], i515[5], i515[6])
  i514.nearClipPlane = i515[7]
  i514.farClipPlane = i515[8]
  i514.fieldOfView = i515[9]
  i514.depth = i515[10]
  i514.clearFlags = i515[11]
  i514.cullingMask = i515[12]
  i514.rect = i515[13]
  request.r(i515[14], i515[15], 0, i514, 'targetTexture')
  i514.usePhysicalProperties = !!i515[16]
  i514.focalLength = i515[17]
  i514.sensorSize = new pc.Vec2( i515[18], i515[19] )
  i514.lensShift = new pc.Vec2( i515[20], i515[21] )
  i514.gateFit = i515[22]
  i514.commandBufferCount = i515[23]
  i514.cameraType = i515[24]
  i514.enabled = !!i515[25]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i517 = data
  i516.name = i517[0]
  i516.tagId = i517[1]
  i516.enabled = !!i517[2]
  i516.isStatic = !!i517[3]
  i516.layer = i517[4]
  return i516
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, 'm_FirstSelected')
  i518.m_sendNavigationEvents = !!i519[2]
  i518.m_DragThreshold = i519[3]
  return i518
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i521 = data
  i520.m_HorizontalAxis = i521[0]
  i520.m_VerticalAxis = i521[1]
  i520.m_SubmitButton = i521[2]
  i520.m_CancelButton = i521[3]
  i520.m_InputActionsPerSecond = i521[4]
  i520.m_RepeatDelay = i521[5]
  i520.m_ForceModuleActive = !!i521[6]
  i520.m_SendPointerHoverToParent = !!i521[7]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i523 = data
  i522.pivot = new pc.Vec2( i523[0], i523[1] )
  i522.anchorMin = new pc.Vec2( i523[2], i523[3] )
  i522.anchorMax = new pc.Vec2( i523[4], i523[5] )
  i522.sizeDelta = new pc.Vec2( i523[6], i523[7] )
  i522.anchoredPosition3D = new pc.Vec3( i523[8], i523[9], i523[10] )
  i522.rotation = new pc.Quat(i523[11], i523[12], i523[13], i523[14])
  i522.scale = new pc.Vec3( i523[15], i523[16], i523[17] )
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i525 = data
  i524.planeDistance = i525[0]
  i524.referencePixelsPerUnit = i525[1]
  i524.isFallbackOverlay = !!i525[2]
  i524.renderMode = i525[3]
  i524.renderOrder = i525[4]
  i524.sortingLayerName = i525[5]
  i524.sortingOrder = i525[6]
  i524.scaleFactor = i525[7]
  request.r(i525[8], i525[9], 0, i524, 'worldCamera')
  i524.overrideSorting = !!i525[10]
  i524.pixelPerfect = !!i525[11]
  i524.targetDisplay = i525[12]
  i524.overridePixelPerfect = !!i525[13]
  i524.enabled = !!i525[14]
  return i524
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i527 = data
  i526.m_UiScaleMode = i527[0]
  i526.m_ReferencePixelsPerUnit = i527[1]
  i526.m_ScaleFactor = i527[2]
  i526.m_ReferenceResolution = new pc.Vec2( i527[3], i527[4] )
  i526.m_ScreenMatchMode = i527[5]
  i526.m_MatchWidthOrHeight = i527[6]
  i526.m_PhysicalUnit = i527[7]
  i526.m_FallbackScreenDPI = i527[8]
  i526.m_DefaultSpriteDPI = i527[9]
  i526.m_DynamicPixelsPerUnit = i527[10]
  i526.m_PresetInfoIsWorld = !!i527[11]
  return i526
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i529 = data
  i528.m_IgnoreReversedGraphics = !!i529[0]
  i528.m_BlockingObjects = i529[1]
  i528.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i529[2] )
  return i528
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i530 = root || request.c( 'LunaManager' )
  var i531 = data
  var i533 = i531[0]
  var i532 = []
  for(var i = 0; i < i533.length; i += 2) {
  request.r(i533[i + 0], i533[i + 1], 2, i532, '')
  }
  i530.lstBtnInstall = i532
  request.r(i531[1], i531[2], 0, i530, 'StartCard')
  request.r(i531[3], i531[4], 0, i530, 'EndCard')
  i530.countPlay = i531[5]
  i530.countPlayFinal = i531[6]
  i530.countPlayMax = i531[7]
  i530.timeDropFinal = i531[8]
  i530.colorBG = new pc.Color(i531[9], i531[10], i531[11], i531[12])
  request.r(i531[13], i531[14], 0, i530, 'texture2D')
  request.r(i531[15], i531[16], 0, i530, 'rawImageBG')
  i530.isHead = !!i531[17]
  request.r(i531[18], i531[19], 0, i530, 'textProgess')
  request.r(i531[20], i531[21], 0, i530, 'imgProgess')
  request.r(i531[22], i531[23], 0, i530, 'timeText')
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i537 = data
  i536.cullTransparentMesh = !!i537[0]
  return i536
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i539 = data
  request.r(i539[0], i539[1], 0, i538, 'm_Texture')
  i538.m_UVRect = UnityEngine.Rect.MinMaxRect(i539[2], i539[3], i539[4], i539[5])
  i538.m_Maskable = !!i539[6]
  request.r(i539[7], i539[8], 0, i538, 'm_Material')
  i538.m_Color = new pc.Color(i539[9], i539[10], i539[11], i539[12])
  i538.m_RaycastTarget = !!i539[13]
  i538.m_RaycastPadding = new pc.Vec4( i539[14], i539[15], i539[16], i539[17] )
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'clip')
  request.r(i541[2], i541[3], 0, i540, 'outputAudioMixerGroup')
  i540.playOnAwake = !!i541[4]
  i540.loop = !!i541[5]
  i540.time = i541[6]
  i540.volume = i541[7]
  i540.pitch = i541[8]
  i540.enabled = !!i541[9]
  return i540
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.UI.Image' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'm_Sprite')
  i542.m_Type = i543[2]
  i542.m_PreserveAspect = !!i543[3]
  i542.m_FillCenter = !!i543[4]
  i542.m_FillMethod = i543[5]
  i542.m_FillAmount = i543[6]
  i542.m_FillClockwise = !!i543[7]
  i542.m_FillOrigin = i543[8]
  i542.m_UseSpriteMesh = !!i543[9]
  i542.m_PixelsPerUnitMultiplier = i543[10]
  i542.m_Maskable = !!i543[11]
  request.r(i543[12], i543[13], 0, i542, 'm_Material')
  i542.m_Color = new pc.Color(i543[14], i543[15], i543[16], i543[17])
  i542.m_RaycastTarget = !!i543[18]
  i542.m_RaycastPadding = new pc.Vec4( i543[19], i543[20], i543[21], i543[22] )
  return i542
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i544 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'skeletonDataAsset')
  request.r(i545[2], i545[3], 0, i544, 'additiveMaterial')
  request.r(i545[4], i545[5], 0, i544, 'multiplyMaterial')
  request.r(i545[6], i545[7], 0, i544, 'screenMaterial')
  i544.initialSkinName = i545[8]
  i544.initialFlipX = !!i545[9]
  i544.initialFlipY = !!i545[10]
  i544.startingAnimation = i545[11]
  i544.startingLoop = !!i545[12]
  i544.timeScale = i545[13]
  i544.freeze = !!i545[14]
  i544.layoutScaleMode = i545[15]
  i544.updateWhenInvisible = i545[16]
  i544.allowMultipleCanvasRenderers = !!i545[17]
  var i547 = i545[18]
  var i546 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i547.length; i += 2) {
  request.r(i547[i + 0], i547[i + 1], 1, i546, '')
  }
  i544.canvasRenderers = i546
  i544.enableSeparatorSlots = !!i545[19]
  i544.updateSeparatorPartLocation = !!i545[20]
  i544.updateSeparatorPartScale = !!i545[21]
  i544.disableMeshAssignmentOnOverride = !!i545[22]
  i544.referenceSize = new pc.Vec2( i545[23], i545[24] )
  i544.referenceScale = i545[25]
  i544.rectTransformSize = new pc.Vec2( i545[26], i545[27] )
  i544.editReferenceRect = !!i545[28]
  var i549 = i545[29]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( i549[i + 0] );
  }
  i544.separatorSlotNames = i548
  var i551 = i545[30]
  var i550 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i551.length; i += 2) {
  request.r(i551[i + 0], i551[i + 1], 1, i550, '')
  }
  i544.separatorParts = i550
  i544.meshGenerator = request.d('Spine.Unity.MeshGenerator', i545[31], i544.meshGenerator)
  i544.updateTiming = i545[32]
  i544.unscaledTime = !!i545[33]
  i544.m_Maskable = !!i545[34]
  request.r(i545[35], i545[36], 0, i544, 'm_Material')
  i544.m_Color = new pc.Color(i545[37], i545[38], i545[39], i545[40])
  i544.m_RaycastTarget = !!i545[41]
  i544.m_RaycastPadding = new pc.Vec4( i545[42], i545[43], i545[44], i545[45] )
  return i544
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i558 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i559 = data
  i558.settings = request.d('Spine.Unity.MeshGenerator+Settings', i559[0], i558.settings)
  return i558
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i560 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i561 = data
  i560.useClipping = !!i561[0]
  i560.zSpacing = i561[1]
  i560.pmaVertexColors = !!i561[2]
  i560.tintBlack = !!i561[3]
  i560.canvasGroupTintBlack = !!i561[4]
  i560.calculateTangents = !!i561[5]
  i560.addNormals = !!i561[6]
  i560.immutableTriangles = !!i561[7]
  return i560
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i562 = root || request.c( 'ClickItem' )
  var i563 = data
  var i565 = i563[0]
  var i564 = []
  for(var i = 0; i < i565.length; i += 2) {
  request.r(i565[i + 0], i565[i + 1], 2, i564, '')
  }
  i562.steps = i564
  i562.currentStep = i563[1]
  i562.isProcess = !!i563[2]
  return i562
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.UI.Button' )
  var i569 = data
  i568.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i569[0], i568.m_OnClick)
  i568.m_Navigation = request.d('UnityEngine.UI.Navigation', i569[1], i568.m_Navigation)
  i568.m_Transition = i569[2]
  i568.m_Colors = request.d('UnityEngine.UI.ColorBlock', i569[3], i568.m_Colors)
  i568.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i569[4], i568.m_SpriteState)
  i568.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i569[5], i568.m_AnimationTriggers)
  i568.m_Interactable = !!i569[6]
  request.r(i569[7], i569[8], 0, i568, 'm_TargetGraphic')
  return i568
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i571 = data
  i570.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i571[0], i570.m_PersistentCalls)
  return i570
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i573 = data
  var i575 = i573[0]
  var i574 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i575.length; i += 1) {
    i574.add(request.d('UnityEngine.Events.PersistentCall', i575[i + 0]));
  }
  i572.m_Calls = i574
  return i572
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'm_Target')
  i578.m_TargetAssemblyTypeName = i579[2]
  i578.m_MethodName = i579[3]
  i578.m_Mode = i579[4]
  i578.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i579[5], i578.m_Arguments)
  i578.m_CallState = i579[6]
  return i578
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'm_ObjectArgument')
  i580.m_ObjectArgumentAssemblyTypeName = i581[2]
  i580.m_IntArgument = i581[3]
  i580.m_FloatArgument = i581[4]
  i580.m_StringArgument = i581[5]
  i580.m_BoolArgument = !!i581[6]
  return i580
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i583 = data
  i582.m_Mode = i583[0]
  i582.m_WrapAround = !!i583[1]
  request.r(i583[2], i583[3], 0, i582, 'm_SelectOnUp')
  request.r(i583[4], i583[5], 0, i582, 'm_SelectOnDown')
  request.r(i583[6], i583[7], 0, i582, 'm_SelectOnLeft')
  request.r(i583[8], i583[9], 0, i582, 'm_SelectOnRight')
  return i582
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i585 = data
  i584.m_NormalColor = new pc.Color(i585[0], i585[1], i585[2], i585[3])
  i584.m_HighlightedColor = new pc.Color(i585[4], i585[5], i585[6], i585[7])
  i584.m_PressedColor = new pc.Color(i585[8], i585[9], i585[10], i585[11])
  i584.m_SelectedColor = new pc.Color(i585[12], i585[13], i585[14], i585[15])
  i584.m_DisabledColor = new pc.Color(i585[16], i585[17], i585[18], i585[19])
  i584.m_ColorMultiplier = i585[20]
  i584.m_FadeDuration = i585[21]
  return i584
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'm_HighlightedSprite')
  request.r(i587[2], i587[3], 0, i586, 'm_PressedSprite')
  request.r(i587[4], i587[5], 0, i586, 'm_SelectedSprite')
  request.r(i587[6], i587[7], 0, i586, 'm_DisabledSprite')
  return i586
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i589 = data
  i588.m_NormalTrigger = i589[0]
  i588.m_HighlightedTrigger = i589[1]
  i588.m_PressedTrigger = i589[2]
  i588.m_SelectedTrigger = i589[3]
  i588.m_DisabledTrigger = i589[4]
  return i588
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i590 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i591 = data
  i590.m_hasFontAssetChanged = !!i591[0]
  request.r(i591[1], i591[2], 0, i590, 'm_baseMaterial')
  i590.m_maskOffset = new pc.Vec4( i591[3], i591[4], i591[5], i591[6] )
  i590.m_text = i591[7]
  i590.m_isRightToLeft = !!i591[8]
  request.r(i591[9], i591[10], 0, i590, 'm_fontAsset')
  request.r(i591[11], i591[12], 0, i590, 'm_sharedMaterial')
  var i593 = i591[13]
  var i592 = []
  for(var i = 0; i < i593.length; i += 2) {
  request.r(i593[i + 0], i593[i + 1], 2, i592, '')
  }
  i590.m_fontSharedMaterials = i592
  request.r(i591[14], i591[15], 0, i590, 'm_fontMaterial')
  var i595 = i591[16]
  var i594 = []
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 2, i594, '')
  }
  i590.m_fontMaterials = i594
  i590.m_fontColor32 = UnityEngine.Color32.ConstructColor(i591[17], i591[18], i591[19], i591[20])
  i590.m_fontColor = new pc.Color(i591[21], i591[22], i591[23], i591[24])
  i590.m_enableVertexGradient = !!i591[25]
  i590.m_colorMode = i591[26]
  i590.m_fontColorGradient = request.d('TMPro.VertexGradient', i591[27], i590.m_fontColorGradient)
  request.r(i591[28], i591[29], 0, i590, 'm_fontColorGradientPreset')
  request.r(i591[30], i591[31], 0, i590, 'm_spriteAsset')
  i590.m_tintAllSprites = !!i591[32]
  request.r(i591[33], i591[34], 0, i590, 'm_StyleSheet')
  i590.m_TextStyleHashCode = i591[35]
  i590.m_overrideHtmlColors = !!i591[36]
  i590.m_faceColor = UnityEngine.Color32.ConstructColor(i591[37], i591[38], i591[39], i591[40])
  i590.m_fontSize = i591[41]
  i590.m_fontSizeBase = i591[42]
  i590.m_fontWeight = i591[43]
  i590.m_enableAutoSizing = !!i591[44]
  i590.m_fontSizeMin = i591[45]
  i590.m_fontSizeMax = i591[46]
  i590.m_fontStyle = i591[47]
  i590.m_HorizontalAlignment = i591[48]
  i590.m_VerticalAlignment = i591[49]
  i590.m_textAlignment = i591[50]
  i590.m_characterSpacing = i591[51]
  i590.m_wordSpacing = i591[52]
  i590.m_lineSpacing = i591[53]
  i590.m_lineSpacingMax = i591[54]
  i590.m_paragraphSpacing = i591[55]
  i590.m_charWidthMaxAdj = i591[56]
  i590.m_enableWordWrapping = !!i591[57]
  i590.m_wordWrappingRatios = i591[58]
  i590.m_overflowMode = i591[59]
  request.r(i591[60], i591[61], 0, i590, 'm_linkedTextComponent')
  request.r(i591[62], i591[63], 0, i590, 'parentLinkedComponent')
  i590.m_enableKerning = !!i591[64]
  i590.m_enableExtraPadding = !!i591[65]
  i590.checkPaddingRequired = !!i591[66]
  i590.m_isRichText = !!i591[67]
  i590.m_parseCtrlCharacters = !!i591[68]
  i590.m_isOrthographic = !!i591[69]
  i590.m_isCullingEnabled = !!i591[70]
  i590.m_horizontalMapping = i591[71]
  i590.m_verticalMapping = i591[72]
  i590.m_uvLineOffset = i591[73]
  i590.m_geometrySortingOrder = i591[74]
  i590.m_IsTextObjectScaleStatic = !!i591[75]
  i590.m_VertexBufferAutoSizeReduction = !!i591[76]
  i590.m_useMaxVisibleDescender = !!i591[77]
  i590.m_pageToDisplay = i591[78]
  i590.m_margin = new pc.Vec4( i591[79], i591[80], i591[81], i591[82] )
  i590.m_isUsingLegacyAnimationComponent = !!i591[83]
  i590.m_isVolumetricText = !!i591[84]
  i590.m_Maskable = !!i591[85]
  request.r(i591[86], i591[87], 0, i590, 'm_Material')
  i590.m_Color = new pc.Color(i591[88], i591[89], i591[90], i591[91])
  i590.m_RaycastTarget = !!i591[92]
  i590.m_RaycastPadding = new pc.Vec4( i591[93], i591[94], i591[95], i591[96] )
  return i590
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i598 = root || request.c( 'TMPro.VertexGradient' )
  var i599 = data
  i598.topLeft = new pc.Color(i599[0], i599[1], i599[2], i599[3])
  i598.topRight = new pc.Color(i599[4], i599[5], i599[6], i599[7])
  i598.bottomLeft = new pc.Color(i599[8], i599[9], i599[10], i599[11])
  i598.bottomRight = new pc.Color(i599[12], i599[13], i599[14], i599[15])
  return i598
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.Mask' )
  var i601 = data
  i600.m_ShowMaskGraphic = !!i601[0]
  return i600
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i602 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i603 = data
  i602.targetIsSelf = !!i603[0]
  request.r(i603[1], i603[2], 0, i602, 'targetGO')
  i602.tweenTargetIsTargetGO = !!i603[3]
  i602.delay = i603[4]
  i602.duration = i603[5]
  i602.easeType = i603[6]
  i602.easeCurve = new pc.AnimationCurve( { keys_flow: i603[7] } )
  i602.loopType = i603[8]
  i602.loops = i603[9]
  i602.id = i603[10]
  i602.isRelative = !!i603[11]
  i602.isFrom = !!i603[12]
  i602.isIndependentUpdate = !!i603[13]
  i602.autoKill = !!i603[14]
  i602.autoGenerate = !!i603[15]
  i602.isActive = !!i603[16]
  i602.isValid = !!i603[17]
  request.r(i603[18], i603[19], 0, i602, 'target')
  i602.animationType = i603[20]
  i602.targetType = i603[21]
  i602.forcedTargetType = i603[22]
  i602.autoPlay = !!i603[23]
  i602.useTargetAsV3 = !!i603[24]
  i602.endValueFloat = i603[25]
  i602.endValueV3 = new pc.Vec3( i603[26], i603[27], i603[28] )
  i602.endValueV2 = new pc.Vec2( i603[29], i603[30] )
  i602.endValueColor = new pc.Color(i603[31], i603[32], i603[33], i603[34])
  i602.endValueString = i603[35]
  i602.endValueRect = UnityEngine.Rect.MinMaxRect(i603[36], i603[37], i603[38], i603[39])
  request.r(i603[40], i603[41], 0, i602, 'endValueTransform')
  i602.optionalBool0 = !!i603[42]
  i602.optionalBool1 = !!i603[43]
  i602.optionalFloat0 = i603[44]
  i602.optionalInt0 = i603[45]
  i602.optionalRotationMode = i603[46]
  i602.optionalScrambleMode = i603[47]
  i602.optionalShakeRandomnessMode = i603[48]
  i602.optionalString = i603[49]
  i602.updateType = i603[50]
  i602.isSpeedBased = !!i603[51]
  i602.hasOnStart = !!i603[52]
  i602.hasOnPlay = !!i603[53]
  i602.hasOnUpdate = !!i603[54]
  i602.hasOnStepComplete = !!i603[55]
  i602.hasOnComplete = !!i603[56]
  i602.hasOnTweenCreated = !!i603[57]
  i602.hasOnRewind = !!i603[58]
  i602.onStart = request.d('UnityEngine.Events.UnityEvent', i603[59], i602.onStart)
  i602.onPlay = request.d('UnityEngine.Events.UnityEvent', i603[60], i602.onPlay)
  i602.onUpdate = request.d('UnityEngine.Events.UnityEvent', i603[61], i602.onUpdate)
  i602.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i603[62], i602.onStepComplete)
  i602.onComplete = request.d('UnityEngine.Events.UnityEvent', i603[63], i602.onComplete)
  i602.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i603[64], i602.onTweenCreated)
  i602.onRewind = request.d('UnityEngine.Events.UnityEvent', i603[65], i602.onRewind)
  return i602
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i605 = data
  i604.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i605[0], i604.m_PersistentCalls)
  return i604
}

Deserializers["AudioController"] = function (request, data, root) {
  var i606 = root || request.c( 'AudioController' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'bgmSource')
  request.r(i607[2], i607[3], 0, i606, 'sfxSource')
  var i609 = i607[4]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i609.length; i += 1) {
    i608.add(request.d('AudioEntry', i609[i + 0]));
  }
  i606.audioEntries = i608
  return i606
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i612 = root || request.c( 'AudioEntry' )
  var i613 = data
  i612.key = i613[0]
  request.r(i613[1], i613[2], 0, i612, 'clip')
  i612.volume = i613[3]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i615 = data
  i614.ambientIntensity = i615[0]
  i614.reflectionIntensity = i615[1]
  i614.ambientMode = i615[2]
  i614.ambientLight = new pc.Color(i615[3], i615[4], i615[5], i615[6])
  i614.ambientSkyColor = new pc.Color(i615[7], i615[8], i615[9], i615[10])
  i614.ambientGroundColor = new pc.Color(i615[11], i615[12], i615[13], i615[14])
  i614.ambientEquatorColor = new pc.Color(i615[15], i615[16], i615[17], i615[18])
  i614.fogColor = new pc.Color(i615[19], i615[20], i615[21], i615[22])
  i614.fogEndDistance = i615[23]
  i614.fogStartDistance = i615[24]
  i614.fogDensity = i615[25]
  i614.fog = !!i615[26]
  request.r(i615[27], i615[28], 0, i614, 'skybox')
  i614.fogMode = i615[29]
  var i617 = i615[30]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i617[i + 0]) );
  }
  i614.lightmaps = i616
  i614.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i615[31], i614.lightProbes)
  i614.lightmapsMode = i615[32]
  i614.mixedBakeMode = i615[33]
  i614.environmentLightingMode = i615[34]
  i614.ambientProbe = new pc.SphericalHarmonicsL2(i615[35])
  i614.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i615[36])
  i614.useReferenceAmbientProbe = !!i615[37]
  request.r(i615[38], i615[39], 0, i614, 'customReflection')
  request.r(i615[40], i615[41], 0, i614, 'defaultReflection')
  i614.defaultReflectionMode = i615[42]
  i614.defaultReflectionResolution = i615[43]
  i614.sunLightObjectId = i615[44]
  i614.pixelLightCount = i615[45]
  i614.defaultReflectionHDR = !!i615[46]
  i614.hasLightDataAsset = !!i615[47]
  i614.hasManualGenerate = !!i615[48]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'lightmapColor')
  request.r(i621[2], i621[3], 0, i620, 'lightmapDirection')
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i622 = root || new UnityEngine.LightProbes()
  var i623 = data
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i631 = data
  var i633 = i631[0]
  var i632 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i633.length; i += 1) {
    i632.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i633[i + 0]));
  }
  i630.ShaderCompilationErrors = i632
  i630.name = i631[1]
  i630.guid = i631[2]
  var i635 = i631[3]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( i635[i + 0] );
  }
  i630.shaderDefinedKeywords = i634
  var i637 = i631[4]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i637[i + 0]) );
  }
  i630.passes = i636
  var i639 = i631[5]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i639[i + 0]) );
  }
  i630.usePasses = i638
  var i641 = i631[6]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i641[i + 0]) );
  }
  i630.defaultParameterValues = i640
  request.r(i631[7], i631[8], 0, i630, 'unityFallbackShader')
  i630.readDepth = !!i631[9]
  i630.isCreatedByShaderGraph = !!i631[10]
  i630.disableBatching = !!i631[11]
  i630.compiled = !!i631[12]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i645 = data
  i644.shaderName = i645[0]
  i644.errorMessage = i645[1]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i648 = root || new pc.UnityShaderPass()
  var i649 = data
  i648.id = i649[0]
  i648.subShaderIndex = i649[1]
  i648.name = i649[2]
  i648.passType = i649[3]
  i648.grabPassTextureName = i649[4]
  i648.usePass = !!i649[5]
  i648.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[6], i648.zTest)
  i648.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[7], i648.zWrite)
  i648.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[8], i648.culling)
  i648.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i649[9], i648.blending)
  i648.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i649[10], i648.alphaBlending)
  i648.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[11], i648.colorWriteMask)
  i648.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[12], i648.offsetUnits)
  i648.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[13], i648.offsetFactor)
  i648.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[14], i648.stencilRef)
  i648.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[15], i648.stencilReadMask)
  i648.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[16], i648.stencilWriteMask)
  i648.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i649[17], i648.stencilOp)
  i648.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i649[18], i648.stencilOpFront)
  i648.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i649[19], i648.stencilOpBack)
  var i651 = i649[20]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i651[i + 0]) );
  }
  i648.tags = i650
  var i653 = i649[21]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( i653[i + 0] );
  }
  i648.passDefinedKeywords = i652
  var i655 = i649[22]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i655[i + 0]) );
  }
  i648.passDefinedKeywordGroups = i654
  var i657 = i649[23]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i657[i + 0]) );
  }
  i648.variants = i656
  var i659 = i649[24]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i659[i + 0]) );
  }
  i648.excludedVariants = i658
  i648.hasDepthReader = !!i649[25]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i661 = data
  i660.val = i661[0]
  i660.name = i661[1]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i663 = data
  i662.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[0], i662.src)
  i662.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[1], i662.dst)
  i662.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[2], i662.op)
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i665 = data
  i664.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[0], i664.pass)
  i664.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[1], i664.fail)
  i664.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[2], i664.zFail)
  i664.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[3], i664.comp)
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i669 = data
  i668.name = i669[0]
  i668.value = i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i673 = data
  var i675 = i673[0]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( i675[i + 0] );
  }
  i672.keywords = i674
  i672.hasDiscard = !!i673[1]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i679 = data
  i678.passId = i679[0]
  i678.subShaderIndex = i679[1]
  var i681 = i679[2]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( i681[i + 0] );
  }
  i678.keywords = i680
  i678.vertexProgram = i679[3]
  i678.fragmentProgram = i679[4]
  i678.exportedForWebGl2 = !!i679[5]
  i678.readDepth = !!i679[6]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'shader')
  i684.pass = i685[2]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i689 = data
  i688.name = i689[0]
  i688.type = i689[1]
  i688.value = new pc.Vec4( i689[2], i689[3], i689[4], i689[5] )
  i688.textureValue = i689[6]
  i688.shaderPropertyFlag = i689[7]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i691 = data
  i690.name = i691[0]
  request.r(i691[1], i691[2], 0, i690, 'texture')
  i690.aabb = i691[3]
  i690.vertices = i691[4]
  i690.triangles = i691[5]
  i690.textureRect = UnityEngine.Rect.MinMaxRect(i691[6], i691[7], i691[8], i691[9])
  i690.packedRect = UnityEngine.Rect.MinMaxRect(i691[10], i691[11], i691[12], i691[13])
  i690.border = new pc.Vec4( i691[14], i691[15], i691[16], i691[17] )
  i690.transparency = i691[18]
  i690.bounds = i691[19]
  i690.pixelsPerUnit = i691[20]
  i690.textureWidth = i691[21]
  i690.textureHeight = i691[22]
  i690.nativeSize = new pc.Vec2( i691[23], i691[24] )
  i690.pivot = new pc.Vec2( i691[25], i691[26] )
  i690.textureRectOffset = new pc.Vec2( i691[27], i691[28] )
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i693 = data
  i692.name = i693[0]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i695 = data
  i694.name = i695[0]
  i694.ascent = i695[1]
  i694.originalLineHeight = i695[2]
  i694.fontSize = i695[3]
  var i697 = i695[4]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i697[i + 0]) );
  }
  i694.characterInfo = i696
  request.r(i695[5], i695[6], 0, i694, 'texture')
  i694.originalFontSize = i695[7]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i701 = data
  i700.index = i701[0]
  i700.advance = i701[1]
  i700.bearing = i701[2]
  i700.glyphWidth = i701[3]
  i700.glyphHeight = i701[4]
  i700.minX = i701[5]
  i700.maxX = i701[6]
  i700.minY = i701[7]
  i700.maxY = i701[8]
  i700.uvBottomLeftX = i701[9]
  i700.uvBottomLeftY = i701[10]
  i700.uvBottomRightX = i701[11]
  i700.uvBottomRightY = i701[12]
  i700.uvTopLeftX = i701[13]
  i700.uvTopLeftY = i701[14]
  i700.uvTopRightX = i701[15]
  i700.uvTopRightY = i701[16]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i703 = data
  i702.name = i703[0]
  i702.bytes64 = i703[1]
  i702.data = i703[2]
  return i702
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i704 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i705 = data
  var i707 = i705[0]
  var i706 = []
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 2, i706, '')
  }
  i704.atlasAssets = i706
  i704.scale = i705[1]
  request.r(i705[2], i705[3], 0, i704, 'skeletonJSON')
  i704.isUpgradingBlendModeMaterials = !!i705[4]
  i704.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i705[5], i704.blendModeMaterials)
  var i709 = i705[6]
  var i708 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 1, i708, '')
  }
  i704.skeletonDataModifiers = i708
  var i711 = i705[7]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( i711[i + 0] );
  }
  i704.fromAnimation = i710
  var i713 = i705[8]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( i713[i + 0] );
  }
  i704.toAnimation = i712
  i704.duration = i705[9]
  i704.defaultMix = i705[10]
  request.r(i705[11], i705[12], 0, i704, 'controller')
  return i704
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i716 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i717 = data
  i716.applyAdditiveMaterial = !!i717[0]
  var i719 = i717[1]
  var i718 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i719.length; i += 1) {
    i718.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i719[i + 0]));
  }
  i716.additiveMaterials = i718
  var i721 = i717[2]
  var i720 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i721.length; i += 1) {
    i720.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i721[i + 0]));
  }
  i716.multiplyMaterials = i720
  var i723 = i717[3]
  var i722 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i723.length; i += 1) {
    i722.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i723[i + 0]));
  }
  i716.screenMaterials = i722
  i716.requiresBlendModeMaterials = !!i717[4]
  return i716
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i726 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i727 = data
  i726.pageName = i727[0]
  request.r(i727[1], i727[2], 0, i726, 'material')
  return i726
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i730 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'atlasFile')
  var i733 = i731[2]
  var i732 = []
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 2, i732, '')
  }
  i730.materials = i732
  i730.textureLoadingMode = i731[3]
  request.r(i731[4], i731[5], 0, i730, 'onDemandTextureLoader')
  return i730
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i734 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'atlas')
  i734.normalStyle = i735[2]
  i734.normalSpacingOffset = i735[3]
  i734.boldStyle = i735[4]
  i734.boldSpacing = i735[5]
  i734.italicStyle = i735[6]
  i734.tabSize = i735[7]
  i734.hashCode = i735[8]
  request.r(i735[9], i735[10], 0, i734, 'material')
  i734.materialHashCode = i735[11]
  i734.m_Version = i735[12]
  i734.m_SourceFontFileGUID = i735[13]
  request.r(i735[14], i735[15], 0, i734, 'm_SourceFontFile_EditorRef')
  request.r(i735[16], i735[17], 0, i734, 'm_SourceFontFile')
  i734.m_AtlasPopulationMode = i735[18]
  i734.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i735[19], i734.m_FaceInfo)
  var i737 = i735[20]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i737.length; i += 1) {
    i736.add(request.d('UnityEngine.TextCore.Glyph', i737[i + 0]));
  }
  i734.m_GlyphTable = i736
  var i739 = i735[21]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i739.length; i += 1) {
    i738.add(request.d('TMPro.TMP_Character', i739[i + 0]));
  }
  i734.m_CharacterTable = i738
  var i741 = i735[22]
  var i740 = []
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 2, i740, '')
  }
  i734.m_AtlasTextures = i740
  i734.m_AtlasTextureIndex = i735[23]
  i734.m_IsMultiAtlasTexturesEnabled = !!i735[24]
  i734.m_ClearDynamicDataOnBuild = !!i735[25]
  var i743 = i735[26]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i743.length; i += 1) {
    i742.add(request.d('UnityEngine.TextCore.GlyphRect', i743[i + 0]));
  }
  i734.m_UsedGlyphRects = i742
  var i745 = i735[27]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i745.length; i += 1) {
    i744.add(request.d('UnityEngine.TextCore.GlyphRect', i745[i + 0]));
  }
  i734.m_FreeGlyphRects = i744
  i734.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i735[28], i734.m_fontInfo)
  i734.m_AtlasWidth = i735[29]
  i734.m_AtlasHeight = i735[30]
  i734.m_AtlasPadding = i735[31]
  i734.m_AtlasRenderMode = i735[32]
  var i747 = i735[33]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i747.length; i += 1) {
    i746.add(request.d('TMPro.TMP_Glyph', i747[i + 0]));
  }
  i734.m_glyphInfoList = i746
  i734.m_KerningTable = request.d('TMPro.KerningTable', i735[34], i734.m_KerningTable)
  i734.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i735[35], i734.m_FontFeatureTable)
  var i749 = i735[36]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 1, i748, '')
  }
  i734.fallbackFontAssets = i748
  var i751 = i735[37]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 1, i750, '')
  }
  i734.m_FallbackFontAssetTable = i750
  i734.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i735[38], i734.m_CreationSettings)
  var i753 = i735[39]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('TMPro.TMP_FontWeightPair', i753[i + 0]) );
  }
  i734.m_FontWeightTable = i752
  var i755 = i735[40]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('TMPro.TMP_FontWeightPair', i755[i + 0]) );
  }
  i734.fontWeights = i754
  return i734
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i757 = data
  i756.m_FaceIndex = i757[0]
  i756.m_FamilyName = i757[1]
  i756.m_StyleName = i757[2]
  i756.m_PointSize = i757[3]
  i756.m_Scale = i757[4]
  i756.m_UnitsPerEM = i757[5]
  i756.m_LineHeight = i757[6]
  i756.m_AscentLine = i757[7]
  i756.m_CapLine = i757[8]
  i756.m_MeanLine = i757[9]
  i756.m_Baseline = i757[10]
  i756.m_DescentLine = i757[11]
  i756.m_SuperscriptOffset = i757[12]
  i756.m_SuperscriptSize = i757[13]
  i756.m_SubscriptOffset = i757[14]
  i756.m_SubscriptSize = i757[15]
  i756.m_UnderlineOffset = i757[16]
  i756.m_UnderlineThickness = i757[17]
  i756.m_StrikethroughOffset = i757[18]
  i756.m_StrikethroughThickness = i757[19]
  i756.m_TabWidth = i757[20]
  return i756
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i761 = data
  i760.m_Index = i761[0]
  i760.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i761[1], i760.m_Metrics)
  i760.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i761[2], i760.m_GlyphRect)
  i760.m_Scale = i761[3]
  i760.m_AtlasIndex = i761[4]
  i760.m_ClassDefinitionType = i761[5]
  return i760
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i763 = data
  i762.m_Width = i763[0]
  i762.m_Height = i763[1]
  i762.m_HorizontalBearingX = i763[2]
  i762.m_HorizontalBearingY = i763[3]
  i762.m_HorizontalAdvance = i763[4]
  return i762
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i765 = data
  i764.m_X = i765[0]
  i764.m_Y = i765[1]
  i764.m_Width = i765[2]
  i764.m_Height = i765[3]
  return i764
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i768 = root || request.c( 'TMPro.TMP_Character' )
  var i769 = data
  i768.m_ElementType = i769[0]
  i768.m_Unicode = i769[1]
  i768.m_GlyphIndex = i769[2]
  i768.m_Scale = i769[3]
  return i768
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i774 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i775 = data
  i774.Name = i775[0]
  i774.PointSize = i775[1]
  i774.Scale = i775[2]
  i774.CharacterCount = i775[3]
  i774.LineHeight = i775[4]
  i774.Baseline = i775[5]
  i774.Ascender = i775[6]
  i774.CapHeight = i775[7]
  i774.Descender = i775[8]
  i774.CenterLine = i775[9]
  i774.SuperscriptOffset = i775[10]
  i774.SubscriptOffset = i775[11]
  i774.SubSize = i775[12]
  i774.Underline = i775[13]
  i774.UnderlineThickness = i775[14]
  i774.strikethrough = i775[15]
  i774.strikethroughThickness = i775[16]
  i774.TabWidth = i775[17]
  i774.Padding = i775[18]
  i774.AtlasWidth = i775[19]
  i774.AtlasHeight = i775[20]
  return i774
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i778 = root || request.c( 'TMPro.TMP_Glyph' )
  var i779 = data
  i778.id = i779[0]
  i778.x = i779[1]
  i778.y = i779[2]
  i778.width = i779[3]
  i778.height = i779[4]
  i778.xOffset = i779[5]
  i778.yOffset = i779[6]
  i778.xAdvance = i779[7]
  i778.scale = i779[8]
  return i778
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i780 = root || request.c( 'TMPro.KerningTable' )
  var i781 = data
  var i783 = i781[0]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('TMPro.KerningPair', i783[i + 0]));
  }
  i780.kerningPairs = i782
  return i780
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i786 = root || request.c( 'TMPro.KerningPair' )
  var i787 = data
  i786.xOffset = i787[0]
  i786.m_FirstGlyph = i787[1]
  i786.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i787[2], i786.m_FirstGlyphAdjustments)
  i786.m_SecondGlyph = i787[3]
  i786.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i787[4], i786.m_SecondGlyphAdjustments)
  i786.m_IgnoreSpacingAdjustments = !!i787[5]
  return i786
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i788 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i789 = data
  var i791 = i789[0]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i791[i + 0]));
  }
  i788.m_GlyphPairAdjustmentRecords = i790
  return i788
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i794 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i795 = data
  i794.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i795[0], i794.m_FirstAdjustmentRecord)
  i794.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i795[1], i794.m_SecondAdjustmentRecord)
  i794.m_FeatureLookupFlags = i795[2]
  return i794
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i798 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i799 = data
  i798.sourceFontFileName = i799[0]
  i798.sourceFontFileGUID = i799[1]
  i798.pointSizeSamplingMode = i799[2]
  i798.pointSize = i799[3]
  i798.padding = i799[4]
  i798.packingMode = i799[5]
  i798.atlasWidth = i799[6]
  i798.atlasHeight = i799[7]
  i798.characterSetSelectionMode = i799[8]
  i798.characterSequence = i799[9]
  i798.referencedFontAssetGUID = i799[10]
  i798.referencedTextAssetGUID = i799[11]
  i798.fontStyle = i799[12]
  i798.fontStyleModifier = i799[13]
  i798.renderMode = i799[14]
  i798.includeFontFeatures = !!i799[15]
  return i798
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i802 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'regularTypeface')
  request.r(i803[2], i803[3], 0, i802, 'italicTypeface')
  return i802
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i804 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i805 = data
  i804.useSafeMode = !!i805[0]
  i804.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i805[1], i804.safeModeOptions)
  i804.timeScale = i805[2]
  i804.unscaledTimeScale = i805[3]
  i804.useSmoothDeltaTime = !!i805[4]
  i804.maxSmoothUnscaledTime = i805[5]
  i804.rewindCallbackMode = i805[6]
  i804.showUnityEditorReport = !!i805[7]
  i804.logBehaviour = i805[8]
  i804.drawGizmos = !!i805[9]
  i804.defaultRecyclable = !!i805[10]
  i804.defaultAutoPlay = i805[11]
  i804.defaultUpdateType = i805[12]
  i804.defaultTimeScaleIndependent = !!i805[13]
  i804.defaultEaseType = i805[14]
  i804.defaultEaseOvershootOrAmplitude = i805[15]
  i804.defaultEasePeriod = i805[16]
  i804.defaultAutoKill = !!i805[17]
  i804.defaultLoopType = i805[18]
  i804.debugMode = !!i805[19]
  i804.debugStoreTargetId = !!i805[20]
  i804.showPreviewPanel = !!i805[21]
  i804.storeSettingsLocation = i805[22]
  i804.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i805[23], i804.modules)
  i804.createASMDEF = !!i805[24]
  i804.showPlayingTweens = !!i805[25]
  i804.showPausedTweens = !!i805[26]
  return i804
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i806 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i807 = data
  i806.logBehaviour = i807[0]
  i806.nestedTweenFailureBehaviour = i807[1]
  return i806
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i808 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i809 = data
  i808.showPanel = !!i809[0]
  i808.audioEnabled = !!i809[1]
  i808.physicsEnabled = !!i809[2]
  i808.physics2DEnabled = !!i809[3]
  i808.spriteEnabled = !!i809[4]
  i808.uiEnabled = !!i809[5]
  i808.textMeshProEnabled = !!i809[6]
  i808.tk2DEnabled = !!i809[7]
  i808.deAudioEnabled = !!i809[8]
  i808.deUnityExtendedEnabled = !!i809[9]
  i808.epoOutlineEnabled = !!i809[10]
  return i808
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i810 = root || request.c( 'TMPro.TMP_Settings' )
  var i811 = data
  i810.m_enableWordWrapping = !!i811[0]
  i810.m_enableKerning = !!i811[1]
  i810.m_enableExtraPadding = !!i811[2]
  i810.m_enableTintAllSprites = !!i811[3]
  i810.m_enableParseEscapeCharacters = !!i811[4]
  i810.m_EnableRaycastTarget = !!i811[5]
  i810.m_GetFontFeaturesAtRuntime = !!i811[6]
  i810.m_missingGlyphCharacter = i811[7]
  i810.m_warningsDisabled = !!i811[8]
  request.r(i811[9], i811[10], 0, i810, 'm_defaultFontAsset')
  i810.m_defaultFontAssetPath = i811[11]
  i810.m_defaultFontSize = i811[12]
  i810.m_defaultAutoSizeMinRatio = i811[13]
  i810.m_defaultAutoSizeMaxRatio = i811[14]
  i810.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i811[15], i811[16] )
  i810.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i811[17], i811[18] )
  i810.m_autoSizeTextContainer = !!i811[19]
  i810.m_IsTextObjectScaleStatic = !!i811[20]
  var i813 = i811[21]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 1, i812, '')
  }
  i810.m_fallbackFontAssets = i812
  i810.m_matchMaterialPreset = !!i811[22]
  request.r(i811[23], i811[24], 0, i810, 'm_defaultSpriteAsset')
  i810.m_defaultSpriteAssetPath = i811[25]
  i810.m_enableEmojiSupport = !!i811[26]
  i810.m_MissingCharacterSpriteUnicode = i811[27]
  i810.m_defaultColorGradientPresetsPath = i811[28]
  request.r(i811[29], i811[30], 0, i810, 'm_defaultStyleSheet')
  i810.m_StyleSheetsResourcePath = i811[31]
  request.r(i811[32], i811[33], 0, i810, 'm_leadingCharacters')
  request.r(i811[34], i811[35], 0, i810, 'm_followingCharacters')
  i810.m_UseModernHangulLineBreakingRules = !!i811[36]
  return i810
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i814 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'spriteSheet')
  var i817 = i815[2]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i817.length; i += 1) {
    i816.add(request.d('TMPro.TMP_Sprite', i817[i + 0]));
  }
  i814.spriteInfoList = i816
  var i819 = i815[3]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 1, i818, '')
  }
  i814.fallbackSpriteAssets = i818
  i814.hashCode = i815[4]
  request.r(i815[5], i815[6], 0, i814, 'material')
  i814.materialHashCode = i815[7]
  i814.m_Version = i815[8]
  i814.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i815[9], i814.m_FaceInfo)
  var i821 = i815[10]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i821.length; i += 1) {
    i820.add(request.d('TMPro.TMP_SpriteCharacter', i821[i + 0]));
  }
  i814.m_SpriteCharacterTable = i820
  var i823 = i815[11]
  var i822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i823.length; i += 1) {
    i822.add(request.d('TMPro.TMP_SpriteGlyph', i823[i + 0]));
  }
  i814.m_SpriteGlyphTable = i822
  return i814
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i826 = root || request.c( 'TMPro.TMP_Sprite' )
  var i827 = data
  i826.name = i827[0]
  i826.hashCode = i827[1]
  i826.unicode = i827[2]
  i826.pivot = new pc.Vec2( i827[3], i827[4] )
  request.r(i827[5], i827[6], 0, i826, 'sprite')
  i826.id = i827[7]
  i826.x = i827[8]
  i826.y = i827[9]
  i826.width = i827[10]
  i826.height = i827[11]
  i826.xOffset = i827[12]
  i826.yOffset = i827[13]
  i826.xAdvance = i827[14]
  i826.scale = i827[15]
  return i826
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i833 = data
  i832.m_Name = i833[0]
  i832.m_HashCode = i833[1]
  i832.m_ElementType = i833[2]
  i832.m_Unicode = i833[3]
  i832.m_GlyphIndex = i833[4]
  i832.m_Scale = i833[5]
  return i832
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'sprite')
  i836.m_Index = i837[2]
  i836.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i837[3], i836.m_Metrics)
  i836.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i837[4], i836.m_GlyphRect)
  i836.m_Scale = i837[5]
  i836.m_AtlasIndex = i837[6]
  i836.m_ClassDefinitionType = i837[7]
  return i836
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i839 = data
  var i841 = i839[0]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i841.length; i += 1) {
    i840.add(request.d('TMPro.TMP_Style', i841[i + 0]));
  }
  i838.m_StyleList = i840
  return i838
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.TMP_Style' )
  var i845 = data
  i844.m_Name = i845[0]
  i844.m_HashCode = i845[1]
  i844.m_OpeningDefinition = i845[2]
  i844.m_ClosingDefinition = i845[3]
  i844.m_OpeningTagArray = i845[4]
  i844.m_ClosingTagArray = i845[5]
  i844.m_OpeningTagUnicodeArray = i845[6]
  i844.m_ClosingTagUnicodeArray = i845[7]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i847 = data
  var i849 = i847[0]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i849[i + 0]) );
  }
  i846.files = i848
  i846.componentToPrefabIds = i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i853 = data
  i852.path = i853[0]
  request.r(i853[1], i853[2], 0, i852, 'unityObject')
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i855 = data
  var i857 = i855[0]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i857[i + 0]) );
  }
  i854.scriptsExecutionOrder = i856
  var i859 = i855[1]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i859[i + 0]) );
  }
  i854.sortingLayers = i858
  var i861 = i855[2]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i861[i + 0]) );
  }
  i854.cullingLayers = i860
  i854.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i855[3], i854.timeSettings)
  i854.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i855[4], i854.physicsSettings)
  i854.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i855[5], i854.physics2DSettings)
  i854.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i855[6], i854.qualitySettings)
  i854.enableRealtimeShadows = !!i855[7]
  i854.enableAutoInstancing = !!i855[8]
  i854.enableStaticBatching = !!i855[9]
  i854.enableDynamicBatching = !!i855[10]
  i854.lightmapEncodingQuality = i855[11]
  i854.desiredColorSpace = i855[12]
  var i863 = i855[13]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( i863[i + 0] );
  }
  i854.allTags = i862
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i867 = data
  i866.name = i867[0]
  i866.value = i867[1]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i871 = data
  i870.id = i871[0]
  i870.name = i871[1]
  i870.value = i871[2]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i875 = data
  i874.id = i875[0]
  i874.name = i875[1]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i877 = data
  i876.fixedDeltaTime = i877[0]
  i876.maximumDeltaTime = i877[1]
  i876.timeScale = i877[2]
  i876.maximumParticleTimestep = i877[3]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i879 = data
  i878.gravity = new pc.Vec3( i879[0], i879[1], i879[2] )
  i878.defaultSolverIterations = i879[3]
  i878.bounceThreshold = i879[4]
  i878.autoSyncTransforms = !!i879[5]
  i878.autoSimulation = !!i879[6]
  var i881 = i879[7]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i881[i + 0]) );
  }
  i878.collisionMatrix = i880
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i885 = data
  i884.enabled = !!i885[0]
  i884.layerId = i885[1]
  i884.otherLayerId = i885[2]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'material')
  i886.gravity = new pc.Vec2( i887[2], i887[3] )
  i886.positionIterations = i887[4]
  i886.velocityIterations = i887[5]
  i886.velocityThreshold = i887[6]
  i886.maxLinearCorrection = i887[7]
  i886.maxAngularCorrection = i887[8]
  i886.maxTranslationSpeed = i887[9]
  i886.maxRotationSpeed = i887[10]
  i886.baumgarteScale = i887[11]
  i886.baumgarteTOIScale = i887[12]
  i886.timeToSleep = i887[13]
  i886.linearSleepTolerance = i887[14]
  i886.angularSleepTolerance = i887[15]
  i886.defaultContactOffset = i887[16]
  i886.autoSimulation = !!i887[17]
  i886.queriesHitTriggers = !!i887[18]
  i886.queriesStartInColliders = !!i887[19]
  i886.callbacksOnDisable = !!i887[20]
  i886.reuseCollisionCallbacks = !!i887[21]
  i886.autoSyncTransforms = !!i887[22]
  var i889 = i887[23]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i889[i + 0]) );
  }
  i886.collisionMatrix = i888
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i893 = data
  i892.enabled = !!i893[0]
  i892.layerId = i893[1]
  i892.otherLayerId = i893[2]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i895 = data
  var i897 = i895[0]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i897[i + 0]) );
  }
  i894.qualityLevels = i896
  var i899 = i895[1]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( i899[i + 0] );
  }
  i894.names = i898
  i894.shadows = i895[2]
  i894.anisotropicFiltering = i895[3]
  i894.antiAliasing = i895[4]
  i894.lodBias = i895[5]
  i894.shadowCascades = i895[6]
  i894.shadowDistance = i895[7]
  i894.shadowmaskMode = i895[8]
  i894.shadowProjection = i895[9]
  i894.shadowResolution = i895[10]
  i894.softParticles = !!i895[11]
  i894.softVegetation = !!i895[12]
  i894.activeColorSpace = i895[13]
  i894.desiredColorSpace = i895[14]
  i894.masterTextureLimit = i895[15]
  i894.maxQueuedFrames = i895[16]
  i894.particleRaycastBudget = i895[17]
  i894.pixelLightCount = i895[18]
  i894.realtimeReflectionProbes = !!i895[19]
  i894.shadowCascade2Split = i895[20]
  i894.shadowCascade4Split = new pc.Vec3( i895[21], i895[22], i895[23] )
  i894.streamingMipmapsActive = !!i895[24]
  i894.vSyncCount = i895[25]
  i894.asyncUploadBufferSize = i895[26]
  i894.asyncUploadTimeSlice = i895[27]
  i894.billboardsFaceCameraPosition = !!i895[28]
  i894.shadowNearPlaneOffset = i895[29]
  i894.streamingMipmapsMemoryBudget = i895[30]
  i894.maximumLODLevel = i895[31]
  i894.streamingMipmapsAddAllCameras = !!i895[32]
  i894.streamingMipmapsMaxLevelReduction = i895[33]
  i894.streamingMipmapsRenderersPerFrame = i895[34]
  i894.resolutionScalingFixedDPIFactor = i895[35]
  i894.streamingMipmapsMaxFileIORequests = i895[36]
  i894.currentQualityLevel = i895[37]
  return i894
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i902 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i903 = data
  i902.xPlacement = i903[0]
  i902.yPlacement = i903[1]
  i902.xAdvance = i903[2]
  i902.yAdvance = i903[3]
  return i902
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i904 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i905 = data
  i904.m_GlyphIndex = i905[0]
  i904.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i905[1], i904.m_GlyphValueRecord)
  return i904
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i906 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i907 = data
  i906.m_XPlacement = i907[0]
  i906.m_YPlacement = i907[1]
  i906.m_XAdvance = i907[2]
  i906.m_YAdvance = i907[3]
  return i906
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[3],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[3],"71":[72],"73":[74],"75":[74],"9":[8],"76":[77],"78":[79],"80":[77],"81":[8],"82":[8],"11":[9],"18":[19,8],"83":[8],"10":[9],"84":[8],"85":[8],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"28":[8],"91":[8],"16":[19,8],"92":[8],"93":[8],"94":[8],"95":[8],"96":[19,8],"97":[8],"98":[6],"99":[6],"7":[6],"100":[6],"101":[3],"102":[3],"103":[104],"105":[3],"106":[107],"108":[8],"109":[19,8],"110":[72],"23":[19,8],"111":[112,72],"113":[72],"114":[72,115],"116":[49],"117":[57],"118":[107],"119":[120],"121":[8],"122":[72,8],"17":[8,19],"123":[8],"124":[19,8],"125":[72],"126":[19,8],"127":[8],"128":[77]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","ClickItem","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","DG.Tweening.DOTweenAnimation","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "170.2";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BEQ_V17_NgocNDL_AnhPD";

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

Deserializers.buildID = "24e0a411-2ff0-45c2-946b-cc9a6274443d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

