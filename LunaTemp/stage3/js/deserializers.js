var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.JointSpring' )
  var i465 = data
  i464.spring = i465[0]
  i464.damper = i465[1]
  i464.targetPosition = i465[2]
  return i464
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointMotor' )
  var i467 = data
  i466.m_TargetVelocity = i467[0]
  i466.m_Force = i467[1]
  i466.m_FreeSpin = i467[2]
  return i466
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointLimits' )
  var i469 = data
  i468.m_Min = i469[0]
  i468.m_Max = i469[1]
  i468.m_Bounciness = i469[2]
  i468.m_BounceMinVelocity = i469[3]
  i468.m_ContactDistance = i469[4]
  i468.minBounce = i469[5]
  i468.maxBounce = i469[6]
  return i468
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointDrive' )
  var i471 = data
  i470.m_PositionSpring = i471[0]
  i470.m_PositionDamper = i471[1]
  i470.m_MaximumForce = i471[2]
  i470.m_UseAcceleration = i471[3]
  return i470
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i473 = data
  i472.m_Spring = i473[0]
  i472.m_Damper = i473[1]
  return i472
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i475 = data
  i474.m_Limit = i475[0]
  i474.m_Bounciness = i475[1]
  i474.m_ContactDistance = i475[2]
  return i474
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i477 = data
  i476.m_ExtremumSlip = i477[0]
  i476.m_ExtremumValue = i477[1]
  i476.m_AsymptoteSlip = i477[2]
  i476.m_AsymptoteValue = i477[3]
  i476.m_Stiffness = i477[4]
  return i476
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i479 = data
  i478.m_LowerAngle = i479[0]
  i478.m_UpperAngle = i479[1]
  return i478
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i481 = data
  i480.m_MotorSpeed = i481[0]
  i480.m_MaximumMotorTorque = i481[1]
  return i480
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i483 = data
  i482.m_DampingRatio = i483[0]
  i482.m_Frequency = i483[1]
  i482.m_Angle = i483[2]
  return i482
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i485 = data
  i484.m_LowerTranslation = i485[0]
  i484.m_UpperTranslation = i485[1]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i487 = data
  i486.name = i487[0]
  i486.width = i487[1]
  i486.height = i487[2]
  i486.mipmapCount = i487[3]
  i486.anisoLevel = i487[4]
  i486.filterMode = i487[5]
  i486.hdr = !!i487[6]
  i486.format = i487[7]
  i486.wrapMode = i487[8]
  i486.alphaIsTransparency = !!i487[9]
  i486.alphaSource = i487[10]
  i486.graphicsFormat = i487[11]
  i486.sRGBTexture = !!i487[12]
  i486.desiredColorSpace = i487[13]
  i486.wrapU = i487[14]
  i486.wrapV = i487[15]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i488 = root || new pc.UnityMaterial()
  var i489 = data
  i488.name = i489[0]
  request.r(i489[1], i489[2], 0, i488, 'shader')
  i488.renderQueue = i489[3]
  i488.enableInstancing = !!i489[4]
  var i491 = i489[5]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i491[i + 0]) );
  }
  i488.floatParameters = i490
  var i493 = i489[6]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i493[i + 0]) );
  }
  i488.colorParameters = i492
  var i495 = i489[7]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i495[i + 0]) );
  }
  i488.vectorParameters = i494
  var i497 = i489[8]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i497[i + 0]) );
  }
  i488.textureParameters = i496
  var i499 = i489[9]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i499[i + 0]) );
  }
  i488.materialFlags = i498
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i503 = data
  i502.name = i503[0]
  i502.value = i503[1]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i507 = data
  i506.name = i507[0]
  i506.value = new pc.Color(i507[1], i507[2], i507[3], i507[4])
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i511 = data
  i510.name = i511[0]
  i510.value = new pc.Vec4( i511[1], i511[2], i511[3], i511[4] )
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i515 = data
  i514.name = i515[0]
  request.r(i515[1], i515[2], 0, i514, 'value')
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i519 = data
  i518.name = i519[0]
  i518.enabled = !!i519[1]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i521 = data
  i520.name = i521[0]
  i520.index = i521[1]
  i520.startup = !!i521[2]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i523 = data
  i522.position = new pc.Vec3( i523[0], i523[1], i523[2] )
  i522.scale = new pc.Vec3( i523[3], i523[4], i523[5] )
  i522.rotation = new pc.Quat(i523[6], i523[7], i523[8], i523[9])
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i525 = data
  i524.aspect = i525[0]
  i524.orthographic = !!i525[1]
  i524.orthographicSize = i525[2]
  i524.backgroundColor = new pc.Color(i525[3], i525[4], i525[5], i525[6])
  i524.nearClipPlane = i525[7]
  i524.farClipPlane = i525[8]
  i524.fieldOfView = i525[9]
  i524.depth = i525[10]
  i524.clearFlags = i525[11]
  i524.cullingMask = i525[12]
  i524.rect = i525[13]
  request.r(i525[14], i525[15], 0, i524, 'targetTexture')
  i524.usePhysicalProperties = !!i525[16]
  i524.focalLength = i525[17]
  i524.sensorSize = new pc.Vec2( i525[18], i525[19] )
  i524.lensShift = new pc.Vec2( i525[20], i525[21] )
  i524.gateFit = i525[22]
  i524.commandBufferCount = i525[23]
  i524.cameraType = i525[24]
  i524.enabled = !!i525[25]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i527 = data
  i526.name = i527[0]
  i526.tagId = i527[1]
  i526.enabled = !!i527[2]
  i526.isStatic = !!i527[3]
  i526.layer = i527[4]
  return i526
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i529 = data
  request.r(i529[0], i529[1], 0, i528, 'm_FirstSelected')
  i528.m_sendNavigationEvents = !!i529[2]
  i528.m_DragThreshold = i529[3]
  return i528
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i531 = data
  i530.m_HorizontalAxis = i531[0]
  i530.m_VerticalAxis = i531[1]
  i530.m_SubmitButton = i531[2]
  i530.m_CancelButton = i531[3]
  i530.m_InputActionsPerSecond = i531[4]
  i530.m_RepeatDelay = i531[5]
  i530.m_ForceModuleActive = !!i531[6]
  i530.m_SendPointerHoverToParent = !!i531[7]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i533 = data
  i532.pivot = new pc.Vec2( i533[0], i533[1] )
  i532.anchorMin = new pc.Vec2( i533[2], i533[3] )
  i532.anchorMax = new pc.Vec2( i533[4], i533[5] )
  i532.sizeDelta = new pc.Vec2( i533[6], i533[7] )
  i532.anchoredPosition3D = new pc.Vec3( i533[8], i533[9], i533[10] )
  i532.rotation = new pc.Quat(i533[11], i533[12], i533[13], i533[14])
  i532.scale = new pc.Vec3( i533[15], i533[16], i533[17] )
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i535 = data
  i534.planeDistance = i535[0]
  i534.referencePixelsPerUnit = i535[1]
  i534.isFallbackOverlay = !!i535[2]
  i534.renderMode = i535[3]
  i534.renderOrder = i535[4]
  i534.sortingLayerName = i535[5]
  i534.sortingOrder = i535[6]
  i534.scaleFactor = i535[7]
  request.r(i535[8], i535[9], 0, i534, 'worldCamera')
  i534.overrideSorting = !!i535[10]
  i534.pixelPerfect = !!i535[11]
  i534.targetDisplay = i535[12]
  i534.overridePixelPerfect = !!i535[13]
  i534.enabled = !!i535[14]
  return i534
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i537 = data
  i536.m_UiScaleMode = i537[0]
  i536.m_ReferencePixelsPerUnit = i537[1]
  i536.m_ScaleFactor = i537[2]
  i536.m_ReferenceResolution = new pc.Vec2( i537[3], i537[4] )
  i536.m_ScreenMatchMode = i537[5]
  i536.m_MatchWidthOrHeight = i537[6]
  i536.m_PhysicalUnit = i537[7]
  i536.m_FallbackScreenDPI = i537[8]
  i536.m_DefaultSpriteDPI = i537[9]
  i536.m_DynamicPixelsPerUnit = i537[10]
  i536.m_PresetInfoIsWorld = !!i537[11]
  return i536
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i539 = data
  i538.m_IgnoreReversedGraphics = !!i539[0]
  i538.m_BlockingObjects = i539[1]
  i538.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i539[2] )
  return i538
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i540 = root || request.c( 'LunaManager' )
  var i541 = data
  var i543 = i541[0]
  var i542 = []
  for(var i = 0; i < i543.length; i += 2) {
  request.r(i543[i + 0], i543[i + 1], 2, i542, '')
  }
  i540.lstBtnInstall = i542
  request.r(i541[1], i541[2], 0, i540, 'WinGO')
  request.r(i541[3], i541[4], 0, i540, 'LoseGO')
  request.r(i541[5], i541[6], 0, i540, 'StartCard')
  request.r(i541[7], i541[8], 0, i540, 'EndCard')
  request.r(i541[9], i541[10], 0, i540, 'Parent')
  i540.isDrag = !!i541[11]
  i540.timeDrag = i541[12]
  i540.countPlay = i541[13]
  i540.countPlayFinal = i541[14]
  i540.countPlayMax = i541[15]
  i540.timeDropFinal = i541[16]
  i540.colorBG = new pc.Color(i541[17], i541[18], i541[19], i541[20])
  request.r(i541[21], i541[22], 0, i540, 'texture2D')
  request.r(i541[23], i541[24], 0, i540, 'rawImageBG')
  request.r(i541[25], i541[26], 0, i540, 'textProgess')
  request.r(i541[27], i541[28], 0, i540, 'imgProgess')
  request.r(i541[29], i541[30], 0, i540, 'timeText')
  return i540
}

Deserializers["LeftOrRight"] = function (request, data, root) {
  var i546 = root || request.c( 'LeftOrRight' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'mixSkeletonSkin')
  request.r(i547[2], i547[3], 0, i546, 'player')
  request.r(i547[4], i547[5], 0, i546, 'leftButton')
  request.r(i547[6], i547[7], 0, i546, 'rightButton')
  i546.leftPosition = new pc.Vec3( i547[8], i547[9], i547[10] )
  i546.rightPosition = new pc.Vec3( i547[11], i547[12], i547[13] )
  i546.useTween = !!i547[14]
  i546.moveDuration = i547[15]
  i546.moveEase = i547[16]
  var i549 = i547[17]
  var i548 = new (System.Collections.Generic.List$1(Bridge.ns('LeftOrRight+StepData')))
  for(var i = 0; i < i549.length; i += 1) {
    i548.add(request.d('LeftOrRight+StepData', i549[i + 0]));
  }
  i546.steps = i548
  i546.playStepsOnEnable = !!i547[18]
  i546.hideInactiveSteps = !!i547[19]
  i546.stepTopLocalPosition = new pc.Vec3( i547[20], i547[21], i547[22] )
  i546.stepBottomLocalPosition = new pc.Vec3( i547[23], i547[24], i547[25] )
  i546.stepMoveDuration = i547[26]
  i546.stepMoveEase = i547[27]
  i546.stepStartScale = new pc.Vec3( i547[28], i547[29], i547[30] )
  i546.stepEndScale = new pc.Vec3( i547[31], i547[32], i547[33] )
  i546.onStepReachedBottom = request.d('UnityEngine.Events.UnityEvent`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i547[34], i546.onStepReachedBottom)
  i546.isLeft = !!i547[35]
  i546.selectedSide = i547[36]
  i546.currentStepIndex = i547[37]
  return i546
}

Deserializers["LeftOrRight+StepData"] = function (request, data, root) {
  var i552 = root || request.c( 'LeftOrRight+StepData' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'stepTransform')
  request.r(i553[2], i553[3], 0, i552, 'choice1Object')
  request.r(i553[4], i553[5], 0, i552, 'choice2Object')
  return i552
}

Deserializers["UnityEngine.Events.UnityEvent`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i554 = root || new (UnityEngine.Events.UnityEvent$1( Bridge.ns( 'System.Int32' ) ))
  var i555 = data
  i554.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i555[0], i554.m_PersistentCalls)
  return i554
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i557 = data
  var i559 = i557[0]
  var i558 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i559.length; i += 1) {
    i558.add(request.d('UnityEngine.Events.PersistentCall', i559[i + 0]));
  }
  i556.m_Calls = i558
  return i556
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'm_Target')
  i562.m_TargetAssemblyTypeName = i563[2]
  i562.m_MethodName = i563[3]
  i562.m_Mode = i563[4]
  i562.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i563[5], i562.m_Arguments)
  i562.m_CallState = i563[6]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i565 = data
  i564.cullTransparentMesh = !!i565[0]
  return i564
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'm_Texture')
  i566.m_UVRect = UnityEngine.Rect.MinMaxRect(i567[2], i567[3], i567[4], i567[5])
  i566.m_Maskable = !!i567[6]
  request.r(i567[7], i567[8], 0, i566, 'm_Material')
  i566.m_Color = new pc.Color(i567[9], i567[10], i567[11], i567[12])
  i566.m_RaycastTarget = !!i567[13]
  i566.m_RaycastPadding = new pc.Vec4( i567[14], i567[15], i567[16], i567[17] )
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'clip')
  request.r(i569[2], i569[3], 0, i568, 'outputAudioMixerGroup')
  i568.playOnAwake = !!i569[4]
  i568.loop = !!i569[5]
  i568.time = i569[6]
  i568.volume = i569[7]
  i568.pitch = i569[8]
  i568.enabled = !!i569[9]
  return i568
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.UI.Image' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'm_Sprite')
  i570.m_Type = i571[2]
  i570.m_PreserveAspect = !!i571[3]
  i570.m_FillCenter = !!i571[4]
  i570.m_FillMethod = i571[5]
  i570.m_FillAmount = i571[6]
  i570.m_FillClockwise = !!i571[7]
  i570.m_FillOrigin = i571[8]
  i570.m_UseSpriteMesh = !!i571[9]
  i570.m_PixelsPerUnitMultiplier = i571[10]
  i570.m_Maskable = !!i571[11]
  request.r(i571[12], i571[13], 0, i570, 'm_Material')
  i570.m_Color = new pc.Color(i571[14], i571[15], i571[16], i571[17])
  i570.m_RaycastTarget = !!i571[18]
  i570.m_RaycastPadding = new pc.Vec4( i571[19], i571[20], i571[21], i571[22] )
  return i570
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.UI.Mask' )
  var i573 = data
  i572.m_ShowMaskGraphic = !!i573[0]
  return i572
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i574 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i575 = data
  request.r(i575[0], i575[1], 0, i574, 'skeletonDataAsset')
  request.r(i575[2], i575[3], 0, i574, 'additiveMaterial')
  request.r(i575[4], i575[5], 0, i574, 'multiplyMaterial')
  request.r(i575[6], i575[7], 0, i574, 'screenMaterial')
  i574.initialSkinName = i575[8]
  i574.initialFlipX = !!i575[9]
  i574.initialFlipY = !!i575[10]
  i574.startingAnimation = i575[11]
  i574.startingLoop = !!i575[12]
  i574.timeScale = i575[13]
  i574.freeze = !!i575[14]
  i574.layoutScaleMode = i575[15]
  i574.updateWhenInvisible = i575[16]
  i574.allowMultipleCanvasRenderers = !!i575[17]
  var i577 = i575[18]
  var i576 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i577.length; i += 2) {
  request.r(i577[i + 0], i577[i + 1], 1, i576, '')
  }
  i574.canvasRenderers = i576
  i574.enableSeparatorSlots = !!i575[19]
  i574.updateSeparatorPartLocation = !!i575[20]
  i574.updateSeparatorPartScale = !!i575[21]
  i574.disableMeshAssignmentOnOverride = !!i575[22]
  i574.referenceSize = new pc.Vec2( i575[23], i575[24] )
  i574.referenceScale = i575[25]
  i574.rectTransformSize = new pc.Vec2( i575[26], i575[27] )
  i574.editReferenceRect = !!i575[28]
  var i579 = i575[29]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( i579[i + 0] );
  }
  i574.separatorSlotNames = i578
  var i581 = i575[30]
  var i580 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i581.length; i += 2) {
  request.r(i581[i + 0], i581[i + 1], 1, i580, '')
  }
  i574.separatorParts = i580
  i574.meshGenerator = request.d('Spine.Unity.MeshGenerator', i575[31], i574.meshGenerator)
  i574.updateTiming = i575[32]
  i574.unscaledTime = !!i575[33]
  i574.m_Maskable = !!i575[34]
  request.r(i575[35], i575[36], 0, i574, 'm_Material')
  i574.m_Color = new pc.Color(i575[37], i575[38], i575[39], i575[40])
  i574.m_RaycastTarget = !!i575[41]
  i574.m_RaycastPadding = new pc.Vec4( i575[42], i575[43], i575[44], i575[45] )
  return i574
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i588 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i589 = data
  i588.settings = request.d('Spine.Unity.MeshGenerator+Settings', i589[0], i588.settings)
  return i588
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i590 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i591 = data
  i590.useClipping = !!i591[0]
  i590.zSpacing = i591[1]
  i590.pmaVertexColors = !!i591[2]
  i590.tintBlack = !!i591[3]
  i590.canvasGroupTintBlack = !!i591[4]
  i590.calculateTangents = !!i591[5]
  i590.addNormals = !!i591[6]
  i590.immutableTriangles = !!i591[7]
  return i590
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i592 = root || request.c( 'MixSkeletonSkin' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'skeletonAnimation')
  var i595 = i593[2]
  var i594 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i595.length; i += 1) {
    i594.add(i595[i + 0]);
  }
  i592.skinNames = i594
  i592.defaultAnim = i593[3]
  i592.isAwake = !!i593[4]
  return i592
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.UI.Button' )
  var i599 = data
  i598.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i599[0], i598.m_OnClick)
  i598.m_Navigation = request.d('UnityEngine.UI.Navigation', i599[1], i598.m_Navigation)
  i598.m_Transition = i599[2]
  i598.m_Colors = request.d('UnityEngine.UI.ColorBlock', i599[3], i598.m_Colors)
  i598.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i599[4], i598.m_SpriteState)
  i598.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i599[5], i598.m_AnimationTriggers)
  i598.m_Interactable = !!i599[6]
  request.r(i599[7], i599[8], 0, i598, 'm_TargetGraphic')
  return i598
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i601 = data
  i600.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i601[0], i600.m_PersistentCalls)
  return i600
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i603 = data
  i602.m_Mode = i603[0]
  i602.m_WrapAround = !!i603[1]
  request.r(i603[2], i603[3], 0, i602, 'm_SelectOnUp')
  request.r(i603[4], i603[5], 0, i602, 'm_SelectOnDown')
  request.r(i603[6], i603[7], 0, i602, 'm_SelectOnLeft')
  request.r(i603[8], i603[9], 0, i602, 'm_SelectOnRight')
  return i602
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i605 = data
  i604.m_NormalColor = new pc.Color(i605[0], i605[1], i605[2], i605[3])
  i604.m_HighlightedColor = new pc.Color(i605[4], i605[5], i605[6], i605[7])
  i604.m_PressedColor = new pc.Color(i605[8], i605[9], i605[10], i605[11])
  i604.m_SelectedColor = new pc.Color(i605[12], i605[13], i605[14], i605[15])
  i604.m_DisabledColor = new pc.Color(i605[16], i605[17], i605[18], i605[19])
  i604.m_ColorMultiplier = i605[20]
  i604.m_FadeDuration = i605[21]
  return i604
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'm_HighlightedSprite')
  request.r(i607[2], i607[3], 0, i606, 'm_PressedSprite')
  request.r(i607[4], i607[5], 0, i606, 'm_SelectedSprite')
  request.r(i607[6], i607[7], 0, i606, 'm_DisabledSprite')
  return i606
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i609 = data
  i608.m_NormalTrigger = i609[0]
  i608.m_HighlightedTrigger = i609[1]
  i608.m_PressedTrigger = i609[2]
  i608.m_SelectedTrigger = i609[3]
  i608.m_DisabledTrigger = i609[4]
  return i608
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i610 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i611 = data
  i610.m_hasFontAssetChanged = !!i611[0]
  request.r(i611[1], i611[2], 0, i610, 'm_baseMaterial')
  i610.m_maskOffset = new pc.Vec4( i611[3], i611[4], i611[5], i611[6] )
  i610.m_text = i611[7]
  i610.m_isRightToLeft = !!i611[8]
  request.r(i611[9], i611[10], 0, i610, 'm_fontAsset')
  request.r(i611[11], i611[12], 0, i610, 'm_sharedMaterial')
  var i613 = i611[13]
  var i612 = []
  for(var i = 0; i < i613.length; i += 2) {
  request.r(i613[i + 0], i613[i + 1], 2, i612, '')
  }
  i610.m_fontSharedMaterials = i612
  request.r(i611[14], i611[15], 0, i610, 'm_fontMaterial')
  var i615 = i611[16]
  var i614 = []
  for(var i = 0; i < i615.length; i += 2) {
  request.r(i615[i + 0], i615[i + 1], 2, i614, '')
  }
  i610.m_fontMaterials = i614
  i610.m_fontColor32 = UnityEngine.Color32.ConstructColor(i611[17], i611[18], i611[19], i611[20])
  i610.m_fontColor = new pc.Color(i611[21], i611[22], i611[23], i611[24])
  i610.m_enableVertexGradient = !!i611[25]
  i610.m_colorMode = i611[26]
  i610.m_fontColorGradient = request.d('TMPro.VertexGradient', i611[27], i610.m_fontColorGradient)
  request.r(i611[28], i611[29], 0, i610, 'm_fontColorGradientPreset')
  request.r(i611[30], i611[31], 0, i610, 'm_spriteAsset')
  i610.m_tintAllSprites = !!i611[32]
  request.r(i611[33], i611[34], 0, i610, 'm_StyleSheet')
  i610.m_TextStyleHashCode = i611[35]
  i610.m_overrideHtmlColors = !!i611[36]
  i610.m_faceColor = UnityEngine.Color32.ConstructColor(i611[37], i611[38], i611[39], i611[40])
  i610.m_fontSize = i611[41]
  i610.m_fontSizeBase = i611[42]
  i610.m_fontWeight = i611[43]
  i610.m_enableAutoSizing = !!i611[44]
  i610.m_fontSizeMin = i611[45]
  i610.m_fontSizeMax = i611[46]
  i610.m_fontStyle = i611[47]
  i610.m_HorizontalAlignment = i611[48]
  i610.m_VerticalAlignment = i611[49]
  i610.m_textAlignment = i611[50]
  i610.m_characterSpacing = i611[51]
  i610.m_wordSpacing = i611[52]
  i610.m_lineSpacing = i611[53]
  i610.m_lineSpacingMax = i611[54]
  i610.m_paragraphSpacing = i611[55]
  i610.m_charWidthMaxAdj = i611[56]
  i610.m_enableWordWrapping = !!i611[57]
  i610.m_wordWrappingRatios = i611[58]
  i610.m_overflowMode = i611[59]
  request.r(i611[60], i611[61], 0, i610, 'm_linkedTextComponent')
  request.r(i611[62], i611[63], 0, i610, 'parentLinkedComponent')
  i610.m_enableKerning = !!i611[64]
  i610.m_enableExtraPadding = !!i611[65]
  i610.checkPaddingRequired = !!i611[66]
  i610.m_isRichText = !!i611[67]
  i610.m_parseCtrlCharacters = !!i611[68]
  i610.m_isOrthographic = !!i611[69]
  i610.m_isCullingEnabled = !!i611[70]
  i610.m_horizontalMapping = i611[71]
  i610.m_verticalMapping = i611[72]
  i610.m_uvLineOffset = i611[73]
  i610.m_geometrySortingOrder = i611[74]
  i610.m_IsTextObjectScaleStatic = !!i611[75]
  i610.m_VertexBufferAutoSizeReduction = !!i611[76]
  i610.m_useMaxVisibleDescender = !!i611[77]
  i610.m_pageToDisplay = i611[78]
  i610.m_margin = new pc.Vec4( i611[79], i611[80], i611[81], i611[82] )
  i610.m_isUsingLegacyAnimationComponent = !!i611[83]
  i610.m_isVolumetricText = !!i611[84]
  i610.m_Maskable = !!i611[85]
  request.r(i611[86], i611[87], 0, i610, 'm_Material')
  i610.m_Color = new pc.Color(i611[88], i611[89], i611[90], i611[91])
  i610.m_RaycastTarget = !!i611[92]
  i610.m_RaycastPadding = new pc.Vec4( i611[93], i611[94], i611[95], i611[96] )
  return i610
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i618 = root || request.c( 'TMPro.VertexGradient' )
  var i619 = data
  i618.topLeft = new pc.Color(i619[0], i619[1], i619[2], i619[3])
  i618.topRight = new pc.Color(i619[4], i619[5], i619[6], i619[7])
  i618.bottomLeft = new pc.Color(i619[8], i619[9], i619[10], i619[11])
  i618.bottomRight = new pc.Color(i619[12], i619[13], i619[14], i619[15])
  return i618
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'm_ObjectArgument')
  i620.m_ObjectArgumentAssemblyTypeName = i621[2]
  i620.m_IntArgument = i621[3]
  i620.m_FloatArgument = i621[4]
  i620.m_StringArgument = i621[5]
  i620.m_BoolArgument = !!i621[6]
  return i620
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i622 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i623 = data
  i622.targetIsSelf = !!i623[0]
  request.r(i623[1], i623[2], 0, i622, 'targetGO')
  i622.tweenTargetIsTargetGO = !!i623[3]
  i622.delay = i623[4]
  i622.duration = i623[5]
  i622.easeType = i623[6]
  i622.easeCurve = new pc.AnimationCurve( { keys_flow: i623[7] } )
  i622.loopType = i623[8]
  i622.loops = i623[9]
  i622.id = i623[10]
  i622.isRelative = !!i623[11]
  i622.isFrom = !!i623[12]
  i622.isIndependentUpdate = !!i623[13]
  i622.autoKill = !!i623[14]
  i622.autoGenerate = !!i623[15]
  i622.isActive = !!i623[16]
  i622.isValid = !!i623[17]
  request.r(i623[18], i623[19], 0, i622, 'target')
  i622.animationType = i623[20]
  i622.targetType = i623[21]
  i622.forcedTargetType = i623[22]
  i622.autoPlay = !!i623[23]
  i622.useTargetAsV3 = !!i623[24]
  i622.endValueFloat = i623[25]
  i622.endValueV3 = new pc.Vec3( i623[26], i623[27], i623[28] )
  i622.endValueV2 = new pc.Vec2( i623[29], i623[30] )
  i622.endValueColor = new pc.Color(i623[31], i623[32], i623[33], i623[34])
  i622.endValueString = i623[35]
  i622.endValueRect = UnityEngine.Rect.MinMaxRect(i623[36], i623[37], i623[38], i623[39])
  request.r(i623[40], i623[41], 0, i622, 'endValueTransform')
  i622.optionalBool0 = !!i623[42]
  i622.optionalBool1 = !!i623[43]
  i622.optionalFloat0 = i623[44]
  i622.optionalInt0 = i623[45]
  i622.optionalRotationMode = i623[46]
  i622.optionalScrambleMode = i623[47]
  i622.optionalShakeRandomnessMode = i623[48]
  i622.optionalString = i623[49]
  i622.updateType = i623[50]
  i622.isSpeedBased = !!i623[51]
  i622.hasOnStart = !!i623[52]
  i622.hasOnPlay = !!i623[53]
  i622.hasOnUpdate = !!i623[54]
  i622.hasOnStepComplete = !!i623[55]
  i622.hasOnComplete = !!i623[56]
  i622.hasOnTweenCreated = !!i623[57]
  i622.hasOnRewind = !!i623[58]
  i622.onStart = request.d('UnityEngine.Events.UnityEvent', i623[59], i622.onStart)
  i622.onPlay = request.d('UnityEngine.Events.UnityEvent', i623[60], i622.onPlay)
  i622.onUpdate = request.d('UnityEngine.Events.UnityEvent', i623[61], i622.onUpdate)
  i622.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i623[62], i622.onStepComplete)
  i622.onComplete = request.d('UnityEngine.Events.UnityEvent', i623[63], i622.onComplete)
  i622.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i623[64], i622.onTweenCreated)
  i622.onRewind = request.d('UnityEngine.Events.UnityEvent', i623[65], i622.onRewind)
  return i622
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i625 = data
  i624.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i625[0], i624.m_PersistentCalls)
  return i624
}

Deserializers["AudioController"] = function (request, data, root) {
  var i626 = root || request.c( 'AudioController' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'bgmSource')
  request.r(i627[2], i627[3], 0, i626, 'sfxSource')
  var i629 = i627[4]
  var i628 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i629.length; i += 1) {
    i628.add(request.d('AudioEntry', i629[i + 0]));
  }
  i626.audioEntries = i628
  return i626
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i632 = root || request.c( 'AudioEntry' )
  var i633 = data
  i632.key = i633[0]
  request.r(i633[1], i633[2], 0, i632, 'clip')
  i632.volume = i633[3]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i635 = data
  i634.ambientIntensity = i635[0]
  i634.reflectionIntensity = i635[1]
  i634.ambientMode = i635[2]
  i634.ambientLight = new pc.Color(i635[3], i635[4], i635[5], i635[6])
  i634.ambientSkyColor = new pc.Color(i635[7], i635[8], i635[9], i635[10])
  i634.ambientGroundColor = new pc.Color(i635[11], i635[12], i635[13], i635[14])
  i634.ambientEquatorColor = new pc.Color(i635[15], i635[16], i635[17], i635[18])
  i634.fogColor = new pc.Color(i635[19], i635[20], i635[21], i635[22])
  i634.fogEndDistance = i635[23]
  i634.fogStartDistance = i635[24]
  i634.fogDensity = i635[25]
  i634.fog = !!i635[26]
  request.r(i635[27], i635[28], 0, i634, 'skybox')
  i634.fogMode = i635[29]
  var i637 = i635[30]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i637[i + 0]) );
  }
  i634.lightmaps = i636
  i634.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i635[31], i634.lightProbes)
  i634.lightmapsMode = i635[32]
  i634.mixedBakeMode = i635[33]
  i634.environmentLightingMode = i635[34]
  i634.ambientProbe = new pc.SphericalHarmonicsL2(i635[35])
  i634.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i635[36])
  i634.useReferenceAmbientProbe = !!i635[37]
  request.r(i635[38], i635[39], 0, i634, 'customReflection')
  request.r(i635[40], i635[41], 0, i634, 'defaultReflection')
  i634.defaultReflectionMode = i635[42]
  i634.defaultReflectionResolution = i635[43]
  i634.sunLightObjectId = i635[44]
  i634.pixelLightCount = i635[45]
  i634.defaultReflectionHDR = !!i635[46]
  i634.hasLightDataAsset = !!i635[47]
  i634.hasManualGenerate = !!i635[48]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'lightmapColor')
  request.r(i641[2], i641[3], 0, i640, 'lightmapDirection')
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i642 = root || new UnityEngine.LightProbes()
  var i643 = data
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i651 = data
  var i653 = i651[0]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i653.length; i += 1) {
    i652.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i653[i + 0]));
  }
  i650.ShaderCompilationErrors = i652
  i650.name = i651[1]
  i650.guid = i651[2]
  var i655 = i651[3]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( i655[i + 0] );
  }
  i650.shaderDefinedKeywords = i654
  var i657 = i651[4]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i657[i + 0]) );
  }
  i650.passes = i656
  var i659 = i651[5]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i659[i + 0]) );
  }
  i650.usePasses = i658
  var i661 = i651[6]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i661[i + 0]) );
  }
  i650.defaultParameterValues = i660
  request.r(i651[7], i651[8], 0, i650, 'unityFallbackShader')
  i650.readDepth = !!i651[9]
  i650.isCreatedByShaderGraph = !!i651[10]
  i650.disableBatching = !!i651[11]
  i650.compiled = !!i651[12]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i665 = data
  i664.shaderName = i665[0]
  i664.errorMessage = i665[1]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i668 = root || new pc.UnityShaderPass()
  var i669 = data
  i668.id = i669[0]
  i668.subShaderIndex = i669[1]
  i668.name = i669[2]
  i668.passType = i669[3]
  i668.grabPassTextureName = i669[4]
  i668.usePass = !!i669[5]
  i668.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[6], i668.zTest)
  i668.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[7], i668.zWrite)
  i668.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[8], i668.culling)
  i668.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i669[9], i668.blending)
  i668.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i669[10], i668.alphaBlending)
  i668.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[11], i668.colorWriteMask)
  i668.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[12], i668.offsetUnits)
  i668.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[13], i668.offsetFactor)
  i668.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[14], i668.stencilRef)
  i668.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[15], i668.stencilReadMask)
  i668.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[16], i668.stencilWriteMask)
  i668.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i669[17], i668.stencilOp)
  i668.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i669[18], i668.stencilOpFront)
  i668.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i669[19], i668.stencilOpBack)
  var i671 = i669[20]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i671[i + 0]) );
  }
  i668.tags = i670
  var i673 = i669[21]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( i673[i + 0] );
  }
  i668.passDefinedKeywords = i672
  var i675 = i669[22]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i675[i + 0]) );
  }
  i668.passDefinedKeywordGroups = i674
  var i677 = i669[23]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i677[i + 0]) );
  }
  i668.variants = i676
  var i679 = i669[24]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i679[i + 0]) );
  }
  i668.excludedVariants = i678
  i668.hasDepthReader = !!i669[25]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i681 = data
  i680.val = i681[0]
  i680.name = i681[1]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i683 = data
  i682.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[0], i682.src)
  i682.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[1], i682.dst)
  i682.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[2], i682.op)
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i685 = data
  i684.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[0], i684.pass)
  i684.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[1], i684.fail)
  i684.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[2], i684.zFail)
  i684.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[3], i684.comp)
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i689 = data
  i688.name = i689[0]
  i688.value = i689[1]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i693 = data
  var i695 = i693[0]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( i695[i + 0] );
  }
  i692.keywords = i694
  i692.hasDiscard = !!i693[1]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i699 = data
  i698.passId = i699[0]
  i698.subShaderIndex = i699[1]
  var i701 = i699[2]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( i701[i + 0] );
  }
  i698.keywords = i700
  i698.vertexProgram = i699[3]
  i698.fragmentProgram = i699[4]
  i698.exportedForWebGl2 = !!i699[5]
  i698.readDepth = !!i699[6]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'shader')
  i704.pass = i705[2]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i709 = data
  i708.name = i709[0]
  i708.type = i709[1]
  i708.value = new pc.Vec4( i709[2], i709[3], i709[4], i709[5] )
  i708.textureValue = i709[6]
  i708.shaderPropertyFlag = i709[7]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i711 = data
  i710.name = i711[0]
  request.r(i711[1], i711[2], 0, i710, 'texture')
  i710.aabb = i711[3]
  i710.vertices = i711[4]
  i710.triangles = i711[5]
  i710.textureRect = UnityEngine.Rect.MinMaxRect(i711[6], i711[7], i711[8], i711[9])
  i710.packedRect = UnityEngine.Rect.MinMaxRect(i711[10], i711[11], i711[12], i711[13])
  i710.border = new pc.Vec4( i711[14], i711[15], i711[16], i711[17] )
  i710.transparency = i711[18]
  i710.bounds = i711[19]
  i710.pixelsPerUnit = i711[20]
  i710.textureWidth = i711[21]
  i710.textureHeight = i711[22]
  i710.nativeSize = new pc.Vec2( i711[23], i711[24] )
  i710.pivot = new pc.Vec2( i711[25], i711[26] )
  i710.textureRectOffset = new pc.Vec2( i711[27], i711[28] )
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i713 = data
  i712.name = i713[0]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i715 = data
  i714.name = i715[0]
  i714.ascent = i715[1]
  i714.originalLineHeight = i715[2]
  i714.fontSize = i715[3]
  var i717 = i715[4]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i717[i + 0]) );
  }
  i714.characterInfo = i716
  request.r(i715[5], i715[6], 0, i714, 'texture')
  i714.originalFontSize = i715[7]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i721 = data
  i720.index = i721[0]
  i720.advance = i721[1]
  i720.bearing = i721[2]
  i720.glyphWidth = i721[3]
  i720.glyphHeight = i721[4]
  i720.minX = i721[5]
  i720.maxX = i721[6]
  i720.minY = i721[7]
  i720.maxY = i721[8]
  i720.uvBottomLeftX = i721[9]
  i720.uvBottomLeftY = i721[10]
  i720.uvBottomRightX = i721[11]
  i720.uvBottomRightY = i721[12]
  i720.uvTopLeftX = i721[13]
  i720.uvTopLeftY = i721[14]
  i720.uvTopRightX = i721[15]
  i720.uvTopRightY = i721[16]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i723 = data
  i722.name = i723[0]
  i722.bytes64 = i723[1]
  i722.data = i723[2]
  return i722
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i724 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i725 = data
  var i727 = i725[0]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i724.atlasAssets = i726
  i724.scale = i725[1]
  request.r(i725[2], i725[3], 0, i724, 'skeletonJSON')
  i724.isUpgradingBlendModeMaterials = !!i725[4]
  i724.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i725[5], i724.blendModeMaterials)
  var i729 = i725[6]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 1, i728, '')
  }
  i724.skeletonDataModifiers = i728
  var i731 = i725[7]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( i731[i + 0] );
  }
  i724.fromAnimation = i730
  var i733 = i725[8]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( i733[i + 0] );
  }
  i724.toAnimation = i732
  i724.duration = i725[9]
  i724.defaultMix = i725[10]
  request.r(i725[11], i725[12], 0, i724, 'controller')
  return i724
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i736 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i737 = data
  i736.applyAdditiveMaterial = !!i737[0]
  var i739 = i737[1]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i739.length; i += 1) {
    i738.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i739[i + 0]));
  }
  i736.additiveMaterials = i738
  var i741 = i737[2]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i741.length; i += 1) {
    i740.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i741[i + 0]));
  }
  i736.multiplyMaterials = i740
  var i743 = i737[3]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i743.length; i += 1) {
    i742.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i743[i + 0]));
  }
  i736.screenMaterials = i742
  i736.requiresBlendModeMaterials = !!i737[4]
  return i736
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i746 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i747 = data
  i746.pageName = i747[0]
  request.r(i747[1], i747[2], 0, i746, 'material')
  return i746
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i750 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'atlasFile')
  var i753 = i751[2]
  var i752 = []
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 2, i752, '')
  }
  i750.materials = i752
  i750.textureLoadingMode = i751[3]
  request.r(i751[4], i751[5], 0, i750, 'onDemandTextureLoader')
  return i750
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i754 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'atlas')
  i754.normalStyle = i755[2]
  i754.normalSpacingOffset = i755[3]
  i754.boldStyle = i755[4]
  i754.boldSpacing = i755[5]
  i754.italicStyle = i755[6]
  i754.tabSize = i755[7]
  i754.hashCode = i755[8]
  request.r(i755[9], i755[10], 0, i754, 'material')
  i754.materialHashCode = i755[11]
  i754.m_Version = i755[12]
  i754.m_SourceFontFileGUID = i755[13]
  request.r(i755[14], i755[15], 0, i754, 'm_SourceFontFile_EditorRef')
  request.r(i755[16], i755[17], 0, i754, 'm_SourceFontFile')
  i754.m_AtlasPopulationMode = i755[18]
  i754.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i755[19], i754.m_FaceInfo)
  var i757 = i755[20]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i757.length; i += 1) {
    i756.add(request.d('UnityEngine.TextCore.Glyph', i757[i + 0]));
  }
  i754.m_GlyphTable = i756
  var i759 = i755[21]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i759.length; i += 1) {
    i758.add(request.d('TMPro.TMP_Character', i759[i + 0]));
  }
  i754.m_CharacterTable = i758
  var i761 = i755[22]
  var i760 = []
  for(var i = 0; i < i761.length; i += 2) {
  request.r(i761[i + 0], i761[i + 1], 2, i760, '')
  }
  i754.m_AtlasTextures = i760
  i754.m_AtlasTextureIndex = i755[23]
  i754.m_IsMultiAtlasTexturesEnabled = !!i755[24]
  i754.m_ClearDynamicDataOnBuild = !!i755[25]
  var i763 = i755[26]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i763.length; i += 1) {
    i762.add(request.d('UnityEngine.TextCore.GlyphRect', i763[i + 0]));
  }
  i754.m_UsedGlyphRects = i762
  var i765 = i755[27]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(request.d('UnityEngine.TextCore.GlyphRect', i765[i + 0]));
  }
  i754.m_FreeGlyphRects = i764
  i754.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i755[28], i754.m_fontInfo)
  i754.m_AtlasWidth = i755[29]
  i754.m_AtlasHeight = i755[30]
  i754.m_AtlasPadding = i755[31]
  i754.m_AtlasRenderMode = i755[32]
  var i767 = i755[33]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i767.length; i += 1) {
    i766.add(request.d('TMPro.TMP_Glyph', i767[i + 0]));
  }
  i754.m_glyphInfoList = i766
  i754.m_KerningTable = request.d('TMPro.KerningTable', i755[34], i754.m_KerningTable)
  i754.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i755[35], i754.m_FontFeatureTable)
  var i769 = i755[36]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 1, i768, '')
  }
  i754.fallbackFontAssets = i768
  var i771 = i755[37]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 1, i770, '')
  }
  i754.m_FallbackFontAssetTable = i770
  i754.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i755[38], i754.m_CreationSettings)
  var i773 = i755[39]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('TMPro.TMP_FontWeightPair', i773[i + 0]) );
  }
  i754.m_FontWeightTable = i772
  var i775 = i755[40]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('TMPro.TMP_FontWeightPair', i775[i + 0]) );
  }
  i754.fontWeights = i774
  return i754
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i777 = data
  i776.m_FaceIndex = i777[0]
  i776.m_FamilyName = i777[1]
  i776.m_StyleName = i777[2]
  i776.m_PointSize = i777[3]
  i776.m_Scale = i777[4]
  i776.m_UnitsPerEM = i777[5]
  i776.m_LineHeight = i777[6]
  i776.m_AscentLine = i777[7]
  i776.m_CapLine = i777[8]
  i776.m_MeanLine = i777[9]
  i776.m_Baseline = i777[10]
  i776.m_DescentLine = i777[11]
  i776.m_SuperscriptOffset = i777[12]
  i776.m_SuperscriptSize = i777[13]
  i776.m_SubscriptOffset = i777[14]
  i776.m_SubscriptSize = i777[15]
  i776.m_UnderlineOffset = i777[16]
  i776.m_UnderlineThickness = i777[17]
  i776.m_StrikethroughOffset = i777[18]
  i776.m_StrikethroughThickness = i777[19]
  i776.m_TabWidth = i777[20]
  return i776
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i781 = data
  i780.m_Index = i781[0]
  i780.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i781[1], i780.m_Metrics)
  i780.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i781[2], i780.m_GlyphRect)
  i780.m_Scale = i781[3]
  i780.m_AtlasIndex = i781[4]
  i780.m_ClassDefinitionType = i781[5]
  return i780
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i783 = data
  i782.m_Width = i783[0]
  i782.m_Height = i783[1]
  i782.m_HorizontalBearingX = i783[2]
  i782.m_HorizontalBearingY = i783[3]
  i782.m_HorizontalAdvance = i783[4]
  return i782
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i785 = data
  i784.m_X = i785[0]
  i784.m_Y = i785[1]
  i784.m_Width = i785[2]
  i784.m_Height = i785[3]
  return i784
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i788 = root || request.c( 'TMPro.TMP_Character' )
  var i789 = data
  i788.m_ElementType = i789[0]
  i788.m_Unicode = i789[1]
  i788.m_GlyphIndex = i789[2]
  i788.m_Scale = i789[3]
  return i788
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i794 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i795 = data
  i794.Name = i795[0]
  i794.PointSize = i795[1]
  i794.Scale = i795[2]
  i794.CharacterCount = i795[3]
  i794.LineHeight = i795[4]
  i794.Baseline = i795[5]
  i794.Ascender = i795[6]
  i794.CapHeight = i795[7]
  i794.Descender = i795[8]
  i794.CenterLine = i795[9]
  i794.SuperscriptOffset = i795[10]
  i794.SubscriptOffset = i795[11]
  i794.SubSize = i795[12]
  i794.Underline = i795[13]
  i794.UnderlineThickness = i795[14]
  i794.strikethrough = i795[15]
  i794.strikethroughThickness = i795[16]
  i794.TabWidth = i795[17]
  i794.Padding = i795[18]
  i794.AtlasWidth = i795[19]
  i794.AtlasHeight = i795[20]
  return i794
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i798 = root || request.c( 'TMPro.TMP_Glyph' )
  var i799 = data
  i798.id = i799[0]
  i798.x = i799[1]
  i798.y = i799[2]
  i798.width = i799[3]
  i798.height = i799[4]
  i798.xOffset = i799[5]
  i798.yOffset = i799[6]
  i798.xAdvance = i799[7]
  i798.scale = i799[8]
  return i798
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i800 = root || request.c( 'TMPro.KerningTable' )
  var i801 = data
  var i803 = i801[0]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i803.length; i += 1) {
    i802.add(request.d('TMPro.KerningPair', i803[i + 0]));
  }
  i800.kerningPairs = i802
  return i800
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i806 = root || request.c( 'TMPro.KerningPair' )
  var i807 = data
  i806.xOffset = i807[0]
  i806.m_FirstGlyph = i807[1]
  i806.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i807[2], i806.m_FirstGlyphAdjustments)
  i806.m_SecondGlyph = i807[3]
  i806.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i807[4], i806.m_SecondGlyphAdjustments)
  i806.m_IgnoreSpacingAdjustments = !!i807[5]
  return i806
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i808 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i809 = data
  var i811 = i809[0]
  var i810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i811.length; i += 1) {
    i810.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i811[i + 0]));
  }
  i808.m_GlyphPairAdjustmentRecords = i810
  return i808
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i814 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i815 = data
  i814.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i815[0], i814.m_FirstAdjustmentRecord)
  i814.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i815[1], i814.m_SecondAdjustmentRecord)
  i814.m_FeatureLookupFlags = i815[2]
  return i814
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i818 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i819 = data
  i818.sourceFontFileName = i819[0]
  i818.sourceFontFileGUID = i819[1]
  i818.pointSizeSamplingMode = i819[2]
  i818.pointSize = i819[3]
  i818.padding = i819[4]
  i818.packingMode = i819[5]
  i818.atlasWidth = i819[6]
  i818.atlasHeight = i819[7]
  i818.characterSetSelectionMode = i819[8]
  i818.characterSequence = i819[9]
  i818.referencedFontAssetGUID = i819[10]
  i818.referencedTextAssetGUID = i819[11]
  i818.fontStyle = i819[12]
  i818.fontStyleModifier = i819[13]
  i818.renderMode = i819[14]
  i818.includeFontFeatures = !!i819[15]
  return i818
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i822 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'regularTypeface')
  request.r(i823[2], i823[3], 0, i822, 'italicTypeface')
  return i822
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i825 = data
  i824.m_GlyphIndex = i825[0]
  i824.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i825[1], i824.m_GlyphValueRecord)
  return i824
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i826 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i827 = data
  i826.m_XPlacement = i827[0]
  i826.m_YPlacement = i827[1]
  i826.m_XAdvance = i827[2]
  i826.m_YAdvance = i827[3]
  return i826
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i828 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i829 = data
  i828.useSafeMode = !!i829[0]
  i828.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i829[1], i828.safeModeOptions)
  i828.timeScale = i829[2]
  i828.unscaledTimeScale = i829[3]
  i828.useSmoothDeltaTime = !!i829[4]
  i828.maxSmoothUnscaledTime = i829[5]
  i828.rewindCallbackMode = i829[6]
  i828.showUnityEditorReport = !!i829[7]
  i828.logBehaviour = i829[8]
  i828.drawGizmos = !!i829[9]
  i828.defaultRecyclable = !!i829[10]
  i828.defaultAutoPlay = i829[11]
  i828.defaultUpdateType = i829[12]
  i828.defaultTimeScaleIndependent = !!i829[13]
  i828.defaultEaseType = i829[14]
  i828.defaultEaseOvershootOrAmplitude = i829[15]
  i828.defaultEasePeriod = i829[16]
  i828.defaultAutoKill = !!i829[17]
  i828.defaultLoopType = i829[18]
  i828.debugMode = !!i829[19]
  i828.debugStoreTargetId = !!i829[20]
  i828.showPreviewPanel = !!i829[21]
  i828.storeSettingsLocation = i829[22]
  i828.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i829[23], i828.modules)
  i828.createASMDEF = !!i829[24]
  i828.showPlayingTweens = !!i829[25]
  i828.showPausedTweens = !!i829[26]
  return i828
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i830 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i831 = data
  i830.logBehaviour = i831[0]
  i830.nestedTweenFailureBehaviour = i831[1]
  return i830
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i832 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i833 = data
  i832.showPanel = !!i833[0]
  i832.audioEnabled = !!i833[1]
  i832.physicsEnabled = !!i833[2]
  i832.physics2DEnabled = !!i833[3]
  i832.spriteEnabled = !!i833[4]
  i832.uiEnabled = !!i833[5]
  i832.textMeshProEnabled = !!i833[6]
  i832.tk2DEnabled = !!i833[7]
  i832.deAudioEnabled = !!i833[8]
  i832.deUnityExtendedEnabled = !!i833[9]
  i832.epoOutlineEnabled = !!i833[10]
  return i832
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i834 = root || request.c( 'TMPro.TMP_Settings' )
  var i835 = data
  i834.m_enableWordWrapping = !!i835[0]
  i834.m_enableKerning = !!i835[1]
  i834.m_enableExtraPadding = !!i835[2]
  i834.m_enableTintAllSprites = !!i835[3]
  i834.m_enableParseEscapeCharacters = !!i835[4]
  i834.m_EnableRaycastTarget = !!i835[5]
  i834.m_GetFontFeaturesAtRuntime = !!i835[6]
  i834.m_missingGlyphCharacter = i835[7]
  i834.m_warningsDisabled = !!i835[8]
  request.r(i835[9], i835[10], 0, i834, 'm_defaultFontAsset')
  i834.m_defaultFontAssetPath = i835[11]
  i834.m_defaultFontSize = i835[12]
  i834.m_defaultAutoSizeMinRatio = i835[13]
  i834.m_defaultAutoSizeMaxRatio = i835[14]
  i834.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i835[15], i835[16] )
  i834.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i835[17], i835[18] )
  i834.m_autoSizeTextContainer = !!i835[19]
  i834.m_IsTextObjectScaleStatic = !!i835[20]
  var i837 = i835[21]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 1, i836, '')
  }
  i834.m_fallbackFontAssets = i836
  i834.m_matchMaterialPreset = !!i835[22]
  request.r(i835[23], i835[24], 0, i834, 'm_defaultSpriteAsset')
  i834.m_defaultSpriteAssetPath = i835[25]
  i834.m_enableEmojiSupport = !!i835[26]
  i834.m_MissingCharacterSpriteUnicode = i835[27]
  i834.m_defaultColorGradientPresetsPath = i835[28]
  request.r(i835[29], i835[30], 0, i834, 'm_defaultStyleSheet')
  i834.m_StyleSheetsResourcePath = i835[31]
  request.r(i835[32], i835[33], 0, i834, 'm_leadingCharacters')
  request.r(i835[34], i835[35], 0, i834, 'm_followingCharacters')
  i834.m_UseModernHangulLineBreakingRules = !!i835[36]
  return i834
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'spriteSheet')
  var i841 = i839[2]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i841.length; i += 1) {
    i840.add(request.d('TMPro.TMP_Sprite', i841[i + 0]));
  }
  i838.spriteInfoList = i840
  var i843 = i839[3]
  var i842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 1, i842, '')
  }
  i838.fallbackSpriteAssets = i842
  i838.hashCode = i839[4]
  request.r(i839[5], i839[6], 0, i838, 'material')
  i838.materialHashCode = i839[7]
  i838.m_Version = i839[8]
  i838.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i839[9], i838.m_FaceInfo)
  var i845 = i839[10]
  var i844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i845.length; i += 1) {
    i844.add(request.d('TMPro.TMP_SpriteCharacter', i845[i + 0]));
  }
  i838.m_SpriteCharacterTable = i844
  var i847 = i839[11]
  var i846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i847.length; i += 1) {
    i846.add(request.d('TMPro.TMP_SpriteGlyph', i847[i + 0]));
  }
  i838.m_SpriteGlyphTable = i846
  return i838
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.TMP_Sprite' )
  var i851 = data
  i850.name = i851[0]
  i850.hashCode = i851[1]
  i850.unicode = i851[2]
  i850.pivot = new pc.Vec2( i851[3], i851[4] )
  request.r(i851[5], i851[6], 0, i850, 'sprite')
  i850.id = i851[7]
  i850.x = i851[8]
  i850.y = i851[9]
  i850.width = i851[10]
  i850.height = i851[11]
  i850.xOffset = i851[12]
  i850.yOffset = i851[13]
  i850.xAdvance = i851[14]
  i850.scale = i851[15]
  return i850
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i856 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i857 = data
  i856.m_Name = i857[0]
  i856.m_HashCode = i857[1]
  i856.m_ElementType = i857[2]
  i856.m_Unicode = i857[3]
  i856.m_GlyphIndex = i857[4]
  i856.m_Scale = i857[5]
  return i856
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i860 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'sprite')
  i860.m_Index = i861[2]
  i860.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i861[3], i860.m_Metrics)
  i860.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i861[4], i860.m_GlyphRect)
  i860.m_Scale = i861[5]
  i860.m_AtlasIndex = i861[6]
  i860.m_ClassDefinitionType = i861[7]
  return i860
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i863 = data
  var i865 = i863[0]
  var i864 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i865.length; i += 1) {
    i864.add(request.d('TMPro.TMP_Style', i865[i + 0]));
  }
  i862.m_StyleList = i864
  return i862
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i868 = root || request.c( 'TMPro.TMP_Style' )
  var i869 = data
  i868.m_Name = i869[0]
  i868.m_HashCode = i869[1]
  i868.m_OpeningDefinition = i869[2]
  i868.m_ClosingDefinition = i869[3]
  i868.m_OpeningTagArray = i869[4]
  i868.m_ClosingTagArray = i869[5]
  i868.m_OpeningTagUnicodeArray = i869[6]
  i868.m_ClosingTagUnicodeArray = i869[7]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i871 = data
  var i873 = i871[0]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i873[i + 0]) );
  }
  i870.files = i872
  i870.componentToPrefabIds = i871[1]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i877 = data
  i876.path = i877[0]
  request.r(i877[1], i877[2], 0, i876, 'unityObject')
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i879 = data
  var i881 = i879[0]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i881[i + 0]) );
  }
  i878.scriptsExecutionOrder = i880
  var i883 = i879[1]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i883[i + 0]) );
  }
  i878.sortingLayers = i882
  var i885 = i879[2]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i885[i + 0]) );
  }
  i878.cullingLayers = i884
  i878.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i879[3], i878.timeSettings)
  i878.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i879[4], i878.physicsSettings)
  i878.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i879[5], i878.physics2DSettings)
  i878.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i879[6], i878.qualitySettings)
  i878.enableRealtimeShadows = !!i879[7]
  i878.enableAutoInstancing = !!i879[8]
  i878.enableStaticBatching = !!i879[9]
  i878.enableDynamicBatching = !!i879[10]
  i878.lightmapEncodingQuality = i879[11]
  i878.desiredColorSpace = i879[12]
  var i887 = i879[13]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( i887[i + 0] );
  }
  i878.allTags = i886
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i891 = data
  i890.name = i891[0]
  i890.value = i891[1]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i895 = data
  i894.id = i895[0]
  i894.name = i895[1]
  i894.value = i895[2]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i899 = data
  i898.id = i899[0]
  i898.name = i899[1]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i901 = data
  i900.fixedDeltaTime = i901[0]
  i900.maximumDeltaTime = i901[1]
  i900.timeScale = i901[2]
  i900.maximumParticleTimestep = i901[3]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i903 = data
  i902.gravity = new pc.Vec3( i903[0], i903[1], i903[2] )
  i902.defaultSolverIterations = i903[3]
  i902.bounceThreshold = i903[4]
  i902.autoSyncTransforms = !!i903[5]
  i902.autoSimulation = !!i903[6]
  var i905 = i903[7]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i905[i + 0]) );
  }
  i902.collisionMatrix = i904
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i909 = data
  i908.enabled = !!i909[0]
  i908.layerId = i909[1]
  i908.otherLayerId = i909[2]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'material')
  i910.gravity = new pc.Vec2( i911[2], i911[3] )
  i910.positionIterations = i911[4]
  i910.velocityIterations = i911[5]
  i910.velocityThreshold = i911[6]
  i910.maxLinearCorrection = i911[7]
  i910.maxAngularCorrection = i911[8]
  i910.maxTranslationSpeed = i911[9]
  i910.maxRotationSpeed = i911[10]
  i910.baumgarteScale = i911[11]
  i910.baumgarteTOIScale = i911[12]
  i910.timeToSleep = i911[13]
  i910.linearSleepTolerance = i911[14]
  i910.angularSleepTolerance = i911[15]
  i910.defaultContactOffset = i911[16]
  i910.autoSimulation = !!i911[17]
  i910.queriesHitTriggers = !!i911[18]
  i910.queriesStartInColliders = !!i911[19]
  i910.callbacksOnDisable = !!i911[20]
  i910.reuseCollisionCallbacks = !!i911[21]
  i910.autoSyncTransforms = !!i911[22]
  var i913 = i911[23]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i913[i + 0]) );
  }
  i910.collisionMatrix = i912
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i917 = data
  i916.enabled = !!i917[0]
  i916.layerId = i917[1]
  i916.otherLayerId = i917[2]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i919 = data
  var i921 = i919[0]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i921[i + 0]) );
  }
  i918.qualityLevels = i920
  var i923 = i919[1]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( i923[i + 0] );
  }
  i918.names = i922
  i918.shadows = i919[2]
  i918.anisotropicFiltering = i919[3]
  i918.antiAliasing = i919[4]
  i918.lodBias = i919[5]
  i918.shadowCascades = i919[6]
  i918.shadowDistance = i919[7]
  i918.shadowmaskMode = i919[8]
  i918.shadowProjection = i919[9]
  i918.shadowResolution = i919[10]
  i918.softParticles = !!i919[11]
  i918.softVegetation = !!i919[12]
  i918.activeColorSpace = i919[13]
  i918.desiredColorSpace = i919[14]
  i918.masterTextureLimit = i919[15]
  i918.maxQueuedFrames = i919[16]
  i918.particleRaycastBudget = i919[17]
  i918.pixelLightCount = i919[18]
  i918.realtimeReflectionProbes = !!i919[19]
  i918.shadowCascade2Split = i919[20]
  i918.shadowCascade4Split = new pc.Vec3( i919[21], i919[22], i919[23] )
  i918.streamingMipmapsActive = !!i919[24]
  i918.vSyncCount = i919[25]
  i918.asyncUploadBufferSize = i919[26]
  i918.asyncUploadTimeSlice = i919[27]
  i918.billboardsFaceCameraPosition = !!i919[28]
  i918.shadowNearPlaneOffset = i919[29]
  i918.streamingMipmapsMemoryBudget = i919[30]
  i918.maximumLODLevel = i919[31]
  i918.streamingMipmapsAddAllCameras = !!i919[32]
  i918.streamingMipmapsMaxLevelReduction = i919[33]
  i918.streamingMipmapsRenderersPerFrame = i919[34]
  i918.resolutionScalingFixedDPIFactor = i919[35]
  i918.streamingMipmapsMaxFileIORequests = i919[36]
  i918.currentQualityLevel = i919[37]
  return i918
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i926 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i927 = data
  i926.xPlacement = i927[0]
  i926.yPlacement = i927[1]
  i926.xAdvance = i927[2]
  i926.yAdvance = i927[3]
  return i926
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[47],"48":[3],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[3],"72":[73],"74":[75],"76":[75],"9":[8],"77":[78],"79":[80],"81":[78],"82":[8],"83":[8],"11":[9],"18":[21,8],"84":[8],"10":[9],"85":[8],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"91":[8],"25":[8],"92":[8],"16":[21,8],"93":[8],"94":[8],"95":[8],"96":[8],"97":[21,8],"98":[8],"99":[6],"100":[6],"7":[6],"101":[6],"102":[3],"103":[3],"104":[105],"106":[3],"107":[108],"109":[8],"110":[21,8],"111":[73],"26":[21,8],"112":[113,73],"114":[73],"115":[73,116],"117":[50],"118":[58],"119":[108],"120":[121],"122":[8],"123":[73,8],"17":[8,21],"124":[8],"125":[21,8],"126":[73],"127":[21,8],"128":[8],"129":[78]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","LeftOrRight","MixSkeletonSkin","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "315.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BEQ_V25_NgocNDL_AnhPD";

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

Deserializers.buildID = "64b92b84-61be-4514-9ed0-70edea91f466";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

