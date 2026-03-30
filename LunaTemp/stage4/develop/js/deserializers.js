var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointSpring' )
  var i487 = data
  i486.spring = i487[0]
  i486.damper = i487[1]
  i486.targetPosition = i487[2]
  return i486
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointMotor' )
  var i489 = data
  i488.m_TargetVelocity = i489[0]
  i488.m_Force = i489[1]
  i488.m_FreeSpin = i489[2]
  return i488
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointLimits' )
  var i491 = data
  i490.m_Min = i491[0]
  i490.m_Max = i491[1]
  i490.m_Bounciness = i491[2]
  i490.m_BounceMinVelocity = i491[3]
  i490.m_ContactDistance = i491[4]
  i490.minBounce = i491[5]
  i490.maxBounce = i491[6]
  return i490
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointDrive' )
  var i493 = data
  i492.m_PositionSpring = i493[0]
  i492.m_PositionDamper = i493[1]
  i492.m_MaximumForce = i493[2]
  i492.m_UseAcceleration = i493[3]
  return i492
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i495 = data
  i494.m_Spring = i495[0]
  i494.m_Damper = i495[1]
  return i494
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i497 = data
  i496.m_Limit = i497[0]
  i496.m_Bounciness = i497[1]
  i496.m_ContactDistance = i497[2]
  return i496
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i499 = data
  i498.m_ExtremumSlip = i499[0]
  i498.m_ExtremumValue = i499[1]
  i498.m_AsymptoteSlip = i499[2]
  i498.m_AsymptoteValue = i499[3]
  i498.m_Stiffness = i499[4]
  return i498
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i501 = data
  i500.m_LowerAngle = i501[0]
  i500.m_UpperAngle = i501[1]
  return i500
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i503 = data
  i502.m_MotorSpeed = i503[0]
  i502.m_MaximumMotorTorque = i503[1]
  return i502
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i505 = data
  i504.m_DampingRatio = i505[0]
  i504.m_Frequency = i505[1]
  i504.m_Angle = i505[2]
  return i504
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i507 = data
  i506.m_LowerTranslation = i507[0]
  i506.m_UpperTranslation = i507[1]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i509 = data
  i508.name = i509[0]
  i508.width = i509[1]
  i508.height = i509[2]
  i508.mipmapCount = i509[3]
  i508.anisoLevel = i509[4]
  i508.filterMode = i509[5]
  i508.hdr = !!i509[6]
  i508.format = i509[7]
  i508.wrapMode = i509[8]
  i508.alphaIsTransparency = !!i509[9]
  i508.alphaSource = i509[10]
  i508.graphicsFormat = i509[11]
  i508.sRGBTexture = !!i509[12]
  i508.desiredColorSpace = i509[13]
  i508.wrapU = i509[14]
  i508.wrapV = i509[15]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i510 = root || new pc.UnityMaterial()
  var i511 = data
  i510.name = i511[0]
  request.r(i511[1], i511[2], 0, i510, 'shader')
  i510.renderQueue = i511[3]
  i510.enableInstancing = !!i511[4]
  var i513 = i511[5]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i513[i + 0]) );
  }
  i510.floatParameters = i512
  var i515 = i511[6]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i515[i + 0]) );
  }
  i510.colorParameters = i514
  var i517 = i511[7]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i517[i + 0]) );
  }
  i510.vectorParameters = i516
  var i519 = i511[8]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i519[i + 0]) );
  }
  i510.textureParameters = i518
  var i521 = i511[9]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i521[i + 0]) );
  }
  i510.materialFlags = i520
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i525 = data
  i524.name = i525[0]
  i524.value = i525[1]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i529 = data
  i528.name = i529[0]
  i528.value = new pc.Color(i529[1], i529[2], i529[3], i529[4])
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i533 = data
  i532.name = i533[0]
  i532.value = new pc.Vec4( i533[1], i533[2], i533[3], i533[4] )
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i537 = data
  i536.name = i537[0]
  request.r(i537[1], i537[2], 0, i536, 'value')
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i541 = data
  i540.name = i541[0]
  i540.enabled = !!i541[1]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i543 = data
  i542.name = i543[0]
  i542.index = i543[1]
  i542.startup = !!i543[2]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i545 = data
  i544.position = new pc.Vec3( i545[0], i545[1], i545[2] )
  i544.scale = new pc.Vec3( i545[3], i545[4], i545[5] )
  i544.rotation = new pc.Quat(i545[6], i545[7], i545[8], i545[9])
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i547 = data
  i546.aspect = i547[0]
  i546.orthographic = !!i547[1]
  i546.orthographicSize = i547[2]
  i546.backgroundColor = new pc.Color(i547[3], i547[4], i547[5], i547[6])
  i546.nearClipPlane = i547[7]
  i546.farClipPlane = i547[8]
  i546.fieldOfView = i547[9]
  i546.depth = i547[10]
  i546.clearFlags = i547[11]
  i546.cullingMask = i547[12]
  i546.rect = i547[13]
  request.r(i547[14], i547[15], 0, i546, 'targetTexture')
  i546.usePhysicalProperties = !!i547[16]
  i546.focalLength = i547[17]
  i546.sensorSize = new pc.Vec2( i547[18], i547[19] )
  i546.lensShift = new pc.Vec2( i547[20], i547[21] )
  i546.gateFit = i547[22]
  i546.commandBufferCount = i547[23]
  i546.cameraType = i547[24]
  i546.enabled = !!i547[25]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i549 = data
  i548.name = i549[0]
  i548.tagId = i549[1]
  i548.enabled = !!i549[2]
  i548.isStatic = !!i549[3]
  i548.layer = i549[4]
  return i548
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i551 = data
  request.r(i551[0], i551[1], 0, i550, 'm_FirstSelected')
  i550.m_sendNavigationEvents = !!i551[2]
  i550.m_DragThreshold = i551[3]
  return i550
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i553 = data
  i552.m_HorizontalAxis = i553[0]
  i552.m_VerticalAxis = i553[1]
  i552.m_SubmitButton = i553[2]
  i552.m_CancelButton = i553[3]
  i552.m_InputActionsPerSecond = i553[4]
  i552.m_RepeatDelay = i553[5]
  i552.m_ForceModuleActive = !!i553[6]
  i552.m_SendPointerHoverToParent = !!i553[7]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i555 = data
  i554.pivot = new pc.Vec2( i555[0], i555[1] )
  i554.anchorMin = new pc.Vec2( i555[2], i555[3] )
  i554.anchorMax = new pc.Vec2( i555[4], i555[5] )
  i554.sizeDelta = new pc.Vec2( i555[6], i555[7] )
  i554.anchoredPosition3D = new pc.Vec3( i555[8], i555[9], i555[10] )
  i554.rotation = new pc.Quat(i555[11], i555[12], i555[13], i555[14])
  i554.scale = new pc.Vec3( i555[15], i555[16], i555[17] )
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i557 = data
  i556.planeDistance = i557[0]
  i556.referencePixelsPerUnit = i557[1]
  i556.isFallbackOverlay = !!i557[2]
  i556.renderMode = i557[3]
  i556.renderOrder = i557[4]
  i556.sortingLayerName = i557[5]
  i556.sortingOrder = i557[6]
  i556.scaleFactor = i557[7]
  request.r(i557[8], i557[9], 0, i556, 'worldCamera')
  i556.overrideSorting = !!i557[10]
  i556.pixelPerfect = !!i557[11]
  i556.targetDisplay = i557[12]
  i556.overridePixelPerfect = !!i557[13]
  i556.enabled = !!i557[14]
  return i556
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i559 = data
  i558.m_UiScaleMode = i559[0]
  i558.m_ReferencePixelsPerUnit = i559[1]
  i558.m_ScaleFactor = i559[2]
  i558.m_ReferenceResolution = new pc.Vec2( i559[3], i559[4] )
  i558.m_ScreenMatchMode = i559[5]
  i558.m_MatchWidthOrHeight = i559[6]
  i558.m_PhysicalUnit = i559[7]
  i558.m_FallbackScreenDPI = i559[8]
  i558.m_DefaultSpriteDPI = i559[9]
  i558.m_DynamicPixelsPerUnit = i559[10]
  i558.m_PresetInfoIsWorld = !!i559[11]
  return i558
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i561 = data
  i560.m_IgnoreReversedGraphics = !!i561[0]
  i560.m_BlockingObjects = i561[1]
  i560.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i561[2] )
  return i560
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i562 = root || request.c( 'LunaManager' )
  var i563 = data
  var i565 = i563[0]
  var i564 = []
  for(var i = 0; i < i565.length; i += 2) {
  request.r(i565[i + 0], i565[i + 1], 2, i564, '')
  }
  i562.lstBtnInstall = i564
  request.r(i563[1], i563[2], 0, i562, 'WinGO')
  request.r(i563[3], i563[4], 0, i562, 'LoseGO')
  request.r(i563[5], i563[6], 0, i562, 'StartCard')
  request.r(i563[7], i563[8], 0, i562, 'EndCard')
  request.r(i563[9], i563[10], 0, i562, 'Parent')
  i562.isDrag = !!i563[11]
  i562.timeDrag = i563[12]
  i562.countPlay = i563[13]
  i562.countPlayFinal = i563[14]
  i562.countPlayMax = i563[15]
  i562.timeDropFinal = i563[16]
  i562.colorBG = new pc.Color(i563[17], i563[18], i563[19], i563[20])
  request.r(i563[21], i563[22], 0, i562, 'texture2D')
  request.r(i563[23], i563[24], 0, i562, 'rawImageBG')
  request.r(i563[25], i563[26], 0, i562, 'MSSGirl')
  request.r(i563[27], i563[28], 0, i562, 'MSSBoy')
  request.r(i563[29], i563[30], 0, i562, 'MSSGroom')
  request.r(i563[31], i563[32], 0, i562, 'MSSBride')
  request.r(i563[33], i563[34], 0, i562, 'textProgess')
  request.r(i563[35], i563[36], 0, i562, 'imgProgess')
  request.r(i563[37], i563[38], 0, i562, 'timeText')
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i569 = data
  i568.cullTransparentMesh = !!i569[0]
  return i568
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'm_Texture')
  i570.m_UVRect = UnityEngine.Rect.MinMaxRect(i571[2], i571[3], i571[4], i571[5])
  i570.m_Maskable = !!i571[6]
  request.r(i571[7], i571[8], 0, i570, 'm_Material')
  i570.m_Color = new pc.Color(i571[9], i571[10], i571[11], i571[12])
  i570.m_RaycastTarget = !!i571[13]
  i570.m_RaycastPadding = new pc.Vec4( i571[14], i571[15], i571[16], i571[17] )
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i573 = data
  request.r(i573[0], i573[1], 0, i572, 'clip')
  request.r(i573[2], i573[3], 0, i572, 'outputAudioMixerGroup')
  i572.playOnAwake = !!i573[4]
  i572.loop = !!i573[5]
  i572.time = i573[6]
  i572.volume = i573[7]
  i572.pitch = i573[8]
  i572.enabled = !!i573[9]
  return i572
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.UI.Image' )
  var i575 = data
  request.r(i575[0], i575[1], 0, i574, 'm_Sprite')
  i574.m_Type = i575[2]
  i574.m_PreserveAspect = !!i575[3]
  i574.m_FillCenter = !!i575[4]
  i574.m_FillMethod = i575[5]
  i574.m_FillAmount = i575[6]
  i574.m_FillClockwise = !!i575[7]
  i574.m_FillOrigin = i575[8]
  i574.m_UseSpriteMesh = !!i575[9]
  i574.m_PixelsPerUnitMultiplier = i575[10]
  i574.m_Maskable = !!i575[11]
  request.r(i575[12], i575[13], 0, i574, 'm_Material')
  i574.m_Color = new pc.Color(i575[14], i575[15], i575[16], i575[17])
  i574.m_RaycastTarget = !!i575[18]
  i574.m_RaycastPadding = new pc.Vec4( i575[19], i575[20], i575[21], i575[22] )
  return i574
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i576 = root || request.c( 'ClickItem' )
  var i577 = data
  var i579 = i577[0]
  var i578 = []
  for(var i = 0; i < i579.length; i += 2) {
  request.r(i579[i + 0], i579[i + 1], 2, i578, '')
  }
  i576.steps = i578
  i576.currentStep = i577[1]
  i576.isProcess = !!i577[2]
  return i576
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.UI.Button' )
  var i583 = data
  i582.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i583[0], i582.m_OnClick)
  i582.m_Navigation = request.d('UnityEngine.UI.Navigation', i583[1], i582.m_Navigation)
  i582.m_Transition = i583[2]
  i582.m_Colors = request.d('UnityEngine.UI.ColorBlock', i583[3], i582.m_Colors)
  i582.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i583[4], i582.m_SpriteState)
  i582.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i583[5], i582.m_AnimationTriggers)
  i582.m_Interactable = !!i583[6]
  request.r(i583[7], i583[8], 0, i582, 'm_TargetGraphic')
  return i582
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i585 = data
  i584.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i585[0], i584.m_PersistentCalls)
  return i584
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i587 = data
  var i589 = i587[0]
  var i588 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i589.length; i += 1) {
    i588.add(request.d('UnityEngine.Events.PersistentCall', i589[i + 0]));
  }
  i586.m_Calls = i588
  return i586
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'm_Target')
  i592.m_TargetAssemblyTypeName = i593[2]
  i592.m_MethodName = i593[3]
  i592.m_Mode = i593[4]
  i592.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i593[5], i592.m_Arguments)
  i592.m_CallState = i593[6]
  return i592
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i595 = data
  i594.m_Mode = i595[0]
  i594.m_WrapAround = !!i595[1]
  request.r(i595[2], i595[3], 0, i594, 'm_SelectOnUp')
  request.r(i595[4], i595[5], 0, i594, 'm_SelectOnDown')
  request.r(i595[6], i595[7], 0, i594, 'm_SelectOnLeft')
  request.r(i595[8], i595[9], 0, i594, 'm_SelectOnRight')
  return i594
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i597 = data
  i596.m_NormalColor = new pc.Color(i597[0], i597[1], i597[2], i597[3])
  i596.m_HighlightedColor = new pc.Color(i597[4], i597[5], i597[6], i597[7])
  i596.m_PressedColor = new pc.Color(i597[8], i597[9], i597[10], i597[11])
  i596.m_SelectedColor = new pc.Color(i597[12], i597[13], i597[14], i597[15])
  i596.m_DisabledColor = new pc.Color(i597[16], i597[17], i597[18], i597[19])
  i596.m_ColorMultiplier = i597[20]
  i596.m_FadeDuration = i597[21]
  return i596
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i599 = data
  request.r(i599[0], i599[1], 0, i598, 'm_HighlightedSprite')
  request.r(i599[2], i599[3], 0, i598, 'm_PressedSprite')
  request.r(i599[4], i599[5], 0, i598, 'm_SelectedSprite')
  request.r(i599[6], i599[7], 0, i598, 'm_DisabledSprite')
  return i598
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i601 = data
  i600.m_NormalTrigger = i601[0]
  i600.m_HighlightedTrigger = i601[1]
  i600.m_PressedTrigger = i601[2]
  i600.m_SelectedTrigger = i601[3]
  i600.m_DisabledTrigger = i601[4]
  return i600
}

Deserializers["DragID"] = function (request, data, root) {
  var i602 = root || request.c( 'DragID' )
  var i603 = data
  i602.idDrag = i603[0]
  i602.isProcess = !!i603[1]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i605 = data
  i604.m_Alpha = i605[0]
  i604.m_Interactable = !!i605[1]
  i604.m_BlocksRaycasts = !!i605[2]
  i604.m_IgnoreParentGroups = !!i605[3]
  i604.enabled = !!i605[4]
  return i604
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i606 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'skeletonDataAsset')
  request.r(i607[2], i607[3], 0, i606, 'additiveMaterial')
  request.r(i607[4], i607[5], 0, i606, 'multiplyMaterial')
  request.r(i607[6], i607[7], 0, i606, 'screenMaterial')
  i606.initialSkinName = i607[8]
  i606.initialFlipX = !!i607[9]
  i606.initialFlipY = !!i607[10]
  i606.startingAnimation = i607[11]
  i606.startingLoop = !!i607[12]
  i606.timeScale = i607[13]
  i606.freeze = !!i607[14]
  i606.layoutScaleMode = i607[15]
  i606.updateWhenInvisible = i607[16]
  i606.allowMultipleCanvasRenderers = !!i607[17]
  var i609 = i607[18]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i609.length; i += 2) {
  request.r(i609[i + 0], i609[i + 1], 1, i608, '')
  }
  i606.canvasRenderers = i608
  i606.enableSeparatorSlots = !!i607[19]
  i606.updateSeparatorPartLocation = !!i607[20]
  i606.updateSeparatorPartScale = !!i607[21]
  i606.disableMeshAssignmentOnOverride = !!i607[22]
  i606.referenceSize = new pc.Vec2( i607[23], i607[24] )
  i606.referenceScale = i607[25]
  i606.rectTransformSize = new pc.Vec2( i607[26], i607[27] )
  i606.editReferenceRect = !!i607[28]
  var i611 = i607[29]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( i611[i + 0] );
  }
  i606.separatorSlotNames = i610
  var i613 = i607[30]
  var i612 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i613.length; i += 2) {
  request.r(i613[i + 0], i613[i + 1], 1, i612, '')
  }
  i606.separatorParts = i612
  i606.meshGenerator = request.d('Spine.Unity.MeshGenerator', i607[31], i606.meshGenerator)
  i606.updateTiming = i607[32]
  i606.unscaledTime = !!i607[33]
  i606.m_Maskable = !!i607[34]
  request.r(i607[35], i607[36], 0, i606, 'm_Material')
  i606.m_Color = new pc.Color(i607[37], i607[38], i607[39], i607[40])
  i606.m_RaycastTarget = !!i607[41]
  i606.m_RaycastPadding = new pc.Vec4( i607[42], i607[43], i607[44], i607[45] )
  return i606
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i620 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i621 = data
  i620.settings = request.d('Spine.Unity.MeshGenerator+Settings', i621[0], i620.settings)
  return i620
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i622 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i623 = data
  i622.useClipping = !!i623[0]
  i622.zSpacing = i623[1]
  i622.pmaVertexColors = !!i623[2]
  i622.tintBlack = !!i623[3]
  i622.canvasGroupTintBlack = !!i623[4]
  i622.calculateTangents = !!i623[5]
  i622.addNormals = !!i623[6]
  i622.immutableTriangles = !!i623[7]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i625 = data
  i624.usedByComposite = !!i625[0]
  i624.autoTiling = !!i625[1]
  var i627 = i625[2]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
  var i629 = i627[i + 0]
  var i628 = []
  for(var i = 0; i < i629.length; i += 2) {
    i628.push( new pc.Vec2( i629[i + 0], i629[i + 1] ) );
  }
    i626.push( i628 );
  }
  i624.points = i626
  i624.enabled = !!i625[3]
  i624.isTrigger = !!i625[4]
  i624.usedByEffector = !!i625[5]
  i624.density = i625[6]
  i624.offset = new pc.Vec2( i625[7], i625[8] )
  request.r(i625[9], i625[10], 0, i624, 'material')
  return i624
}

Deserializers["DropID"] = function (request, data, root) {
  var i636 = root || request.c( 'DropID' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'mixSkeletonSkin')
  var i639 = i637[2]
  var i638 = []
  for(var i = 0; i < i639.length; i += 2) {
  request.r(i639[i + 0], i639[i + 1], 2, i638, '')
  }
  i636.Animal = i638
  return i636
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i640 = root || request.c( 'MixSkeletonSkin' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'skeletonAnimation')
  var i643 = i641[2]
  var i642 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i643.length; i += 1) {
    i642.add(i643[i + 0]);
  }
  i640.skinNames = i642
  i640.defaultAnim = i641[3]
  return i640
}

Deserializers["DropZone"] = function (request, data, root) {
  var i646 = root || request.c( 'DropZone' )
  var i647 = data
  i646.idDrop = i647[0]
  var i649 = i647[1]
  var i648 = []
  for(var i = 0; i < i649.length; i += 2) {
  request.r(i649[i + 0], i649[i + 1], 2, i648, '')
  }
  i646.steps = i648
  request.r(i647[2], i647[3], 0, i646, 'stepLose')
  return i646
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i650 = root || request.c( 'DraggableItem' )
  var i651 = data
  i650.idDrag = i651[0]
  i650.isProcess = !!i651[1]
  i650.isLose = !!i651[2]
  i650.isHide = !!i651[3]
  return i650
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i652 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i653 = data
  i652.m_hasFontAssetChanged = !!i653[0]
  request.r(i653[1], i653[2], 0, i652, 'm_baseMaterial')
  i652.m_maskOffset = new pc.Vec4( i653[3], i653[4], i653[5], i653[6] )
  i652.m_text = i653[7]
  i652.m_isRightToLeft = !!i653[8]
  request.r(i653[9], i653[10], 0, i652, 'm_fontAsset')
  request.r(i653[11], i653[12], 0, i652, 'm_sharedMaterial')
  var i655 = i653[13]
  var i654 = []
  for(var i = 0; i < i655.length; i += 2) {
  request.r(i655[i + 0], i655[i + 1], 2, i654, '')
  }
  i652.m_fontSharedMaterials = i654
  request.r(i653[14], i653[15], 0, i652, 'm_fontMaterial')
  var i657 = i653[16]
  var i656 = []
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 2, i656, '')
  }
  i652.m_fontMaterials = i656
  i652.m_fontColor32 = UnityEngine.Color32.ConstructColor(i653[17], i653[18], i653[19], i653[20])
  i652.m_fontColor = new pc.Color(i653[21], i653[22], i653[23], i653[24])
  i652.m_enableVertexGradient = !!i653[25]
  i652.m_colorMode = i653[26]
  i652.m_fontColorGradient = request.d('TMPro.VertexGradient', i653[27], i652.m_fontColorGradient)
  request.r(i653[28], i653[29], 0, i652, 'm_fontColorGradientPreset')
  request.r(i653[30], i653[31], 0, i652, 'm_spriteAsset')
  i652.m_tintAllSprites = !!i653[32]
  request.r(i653[33], i653[34], 0, i652, 'm_StyleSheet')
  i652.m_TextStyleHashCode = i653[35]
  i652.m_overrideHtmlColors = !!i653[36]
  i652.m_faceColor = UnityEngine.Color32.ConstructColor(i653[37], i653[38], i653[39], i653[40])
  i652.m_fontSize = i653[41]
  i652.m_fontSizeBase = i653[42]
  i652.m_fontWeight = i653[43]
  i652.m_enableAutoSizing = !!i653[44]
  i652.m_fontSizeMin = i653[45]
  i652.m_fontSizeMax = i653[46]
  i652.m_fontStyle = i653[47]
  i652.m_HorizontalAlignment = i653[48]
  i652.m_VerticalAlignment = i653[49]
  i652.m_textAlignment = i653[50]
  i652.m_characterSpacing = i653[51]
  i652.m_wordSpacing = i653[52]
  i652.m_lineSpacing = i653[53]
  i652.m_lineSpacingMax = i653[54]
  i652.m_paragraphSpacing = i653[55]
  i652.m_charWidthMaxAdj = i653[56]
  i652.m_enableWordWrapping = !!i653[57]
  i652.m_wordWrappingRatios = i653[58]
  i652.m_overflowMode = i653[59]
  request.r(i653[60], i653[61], 0, i652, 'm_linkedTextComponent')
  request.r(i653[62], i653[63], 0, i652, 'parentLinkedComponent')
  i652.m_enableKerning = !!i653[64]
  i652.m_enableExtraPadding = !!i653[65]
  i652.checkPaddingRequired = !!i653[66]
  i652.m_isRichText = !!i653[67]
  i652.m_parseCtrlCharacters = !!i653[68]
  i652.m_isOrthographic = !!i653[69]
  i652.m_isCullingEnabled = !!i653[70]
  i652.m_horizontalMapping = i653[71]
  i652.m_verticalMapping = i653[72]
  i652.m_uvLineOffset = i653[73]
  i652.m_geometrySortingOrder = i653[74]
  i652.m_IsTextObjectScaleStatic = !!i653[75]
  i652.m_VertexBufferAutoSizeReduction = !!i653[76]
  i652.m_useMaxVisibleDescender = !!i653[77]
  i652.m_pageToDisplay = i653[78]
  i652.m_margin = new pc.Vec4( i653[79], i653[80], i653[81], i653[82] )
  i652.m_isUsingLegacyAnimationComponent = !!i653[83]
  i652.m_isVolumetricText = !!i653[84]
  i652.m_Maskable = !!i653[85]
  request.r(i653[86], i653[87], 0, i652, 'm_Material')
  i652.m_Color = new pc.Color(i653[88], i653[89], i653[90], i653[91])
  i652.m_RaycastTarget = !!i653[92]
  i652.m_RaycastPadding = new pc.Vec4( i653[93], i653[94], i653[95], i653[96] )
  return i652
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i660 = root || request.c( 'TMPro.VertexGradient' )
  var i661 = data
  i660.topLeft = new pc.Color(i661[0], i661[1], i661[2], i661[3])
  i660.topRight = new pc.Color(i661[4], i661[5], i661[6], i661[7])
  i660.bottomLeft = new pc.Color(i661[8], i661[9], i661[10], i661[11])
  i660.bottomRight = new pc.Color(i661[12], i661[13], i661[14], i661[15])
  return i660
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'm_ObjectArgument')
  i662.m_ObjectArgumentAssemblyTypeName = i663[2]
  i662.m_IntArgument = i663[3]
  i662.m_FloatArgument = i663[4]
  i662.m_StringArgument = i663[5]
  i662.m_BoolArgument = !!i663[6]
  return i662
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i664 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i665 = data
  i664.targetIsSelf = !!i665[0]
  request.r(i665[1], i665[2], 0, i664, 'targetGO')
  i664.tweenTargetIsTargetGO = !!i665[3]
  i664.delay = i665[4]
  i664.duration = i665[5]
  i664.easeType = i665[6]
  i664.easeCurve = new pc.AnimationCurve( { keys_flow: i665[7] } )
  i664.loopType = i665[8]
  i664.loops = i665[9]
  i664.id = i665[10]
  i664.isRelative = !!i665[11]
  i664.isFrom = !!i665[12]
  i664.isIndependentUpdate = !!i665[13]
  i664.autoKill = !!i665[14]
  i664.autoGenerate = !!i665[15]
  i664.isActive = !!i665[16]
  i664.isValid = !!i665[17]
  request.r(i665[18], i665[19], 0, i664, 'target')
  i664.animationType = i665[20]
  i664.targetType = i665[21]
  i664.forcedTargetType = i665[22]
  i664.autoPlay = !!i665[23]
  i664.useTargetAsV3 = !!i665[24]
  i664.endValueFloat = i665[25]
  i664.endValueV3 = new pc.Vec3( i665[26], i665[27], i665[28] )
  i664.endValueV2 = new pc.Vec2( i665[29], i665[30] )
  i664.endValueColor = new pc.Color(i665[31], i665[32], i665[33], i665[34])
  i664.endValueString = i665[35]
  i664.endValueRect = UnityEngine.Rect.MinMaxRect(i665[36], i665[37], i665[38], i665[39])
  request.r(i665[40], i665[41], 0, i664, 'endValueTransform')
  i664.optionalBool0 = !!i665[42]
  i664.optionalBool1 = !!i665[43]
  i664.optionalFloat0 = i665[44]
  i664.optionalInt0 = i665[45]
  i664.optionalRotationMode = i665[46]
  i664.optionalScrambleMode = i665[47]
  i664.optionalShakeRandomnessMode = i665[48]
  i664.optionalString = i665[49]
  i664.updateType = i665[50]
  i664.isSpeedBased = !!i665[51]
  i664.hasOnStart = !!i665[52]
  i664.hasOnPlay = !!i665[53]
  i664.hasOnUpdate = !!i665[54]
  i664.hasOnStepComplete = !!i665[55]
  i664.hasOnComplete = !!i665[56]
  i664.hasOnTweenCreated = !!i665[57]
  i664.hasOnRewind = !!i665[58]
  i664.onStart = request.d('UnityEngine.Events.UnityEvent', i665[59], i664.onStart)
  i664.onPlay = request.d('UnityEngine.Events.UnityEvent', i665[60], i664.onPlay)
  i664.onUpdate = request.d('UnityEngine.Events.UnityEvent', i665[61], i664.onUpdate)
  i664.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i665[62], i664.onStepComplete)
  i664.onComplete = request.d('UnityEngine.Events.UnityEvent', i665[63], i664.onComplete)
  i664.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i665[64], i664.onTweenCreated)
  i664.onRewind = request.d('UnityEngine.Events.UnityEvent', i665[65], i664.onRewind)
  return i664
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i667 = data
  i666.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i667[0], i666.m_PersistentCalls)
  return i666
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.Mask' )
  var i669 = data
  i668.m_ShowMaskGraphic = !!i669[0]
  return i668
}

Deserializers["AudioController"] = function (request, data, root) {
  var i670 = root || request.c( 'AudioController' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'bgmSource')
  request.r(i671[2], i671[3], 0, i670, 'sfxSource')
  var i673 = i671[4]
  var i672 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i673.length; i += 1) {
    i672.add(request.d('AudioEntry', i673[i + 0]));
  }
  i670.audioEntries = i672
  return i670
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i676 = root || request.c( 'AudioEntry' )
  var i677 = data
  i676.key = i677[0]
  request.r(i677[1], i677[2], 0, i676, 'clip')
  i676.volume = i677[3]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i679 = data
  i678.ambientIntensity = i679[0]
  i678.reflectionIntensity = i679[1]
  i678.ambientMode = i679[2]
  i678.ambientLight = new pc.Color(i679[3], i679[4], i679[5], i679[6])
  i678.ambientSkyColor = new pc.Color(i679[7], i679[8], i679[9], i679[10])
  i678.ambientGroundColor = new pc.Color(i679[11], i679[12], i679[13], i679[14])
  i678.ambientEquatorColor = new pc.Color(i679[15], i679[16], i679[17], i679[18])
  i678.fogColor = new pc.Color(i679[19], i679[20], i679[21], i679[22])
  i678.fogEndDistance = i679[23]
  i678.fogStartDistance = i679[24]
  i678.fogDensity = i679[25]
  i678.fog = !!i679[26]
  request.r(i679[27], i679[28], 0, i678, 'skybox')
  i678.fogMode = i679[29]
  var i681 = i679[30]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i681[i + 0]) );
  }
  i678.lightmaps = i680
  i678.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i679[31], i678.lightProbes)
  i678.lightmapsMode = i679[32]
  i678.mixedBakeMode = i679[33]
  i678.environmentLightingMode = i679[34]
  i678.ambientProbe = new pc.SphericalHarmonicsL2(i679[35])
  i678.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i679[36])
  i678.useReferenceAmbientProbe = !!i679[37]
  request.r(i679[38], i679[39], 0, i678, 'customReflection')
  request.r(i679[40], i679[41], 0, i678, 'defaultReflection')
  i678.defaultReflectionMode = i679[42]
  i678.defaultReflectionResolution = i679[43]
  i678.sunLightObjectId = i679[44]
  i678.pixelLightCount = i679[45]
  i678.defaultReflectionHDR = !!i679[46]
  i678.hasLightDataAsset = !!i679[47]
  i678.hasManualGenerate = !!i679[48]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'lightmapColor')
  request.r(i685[2], i685[3], 0, i684, 'lightmapDirection')
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i686 = root || new UnityEngine.LightProbes()
  var i687 = data
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i695 = data
  var i697 = i695[0]
  var i696 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i697.length; i += 1) {
    i696.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i697[i + 0]));
  }
  i694.ShaderCompilationErrors = i696
  i694.name = i695[1]
  i694.guid = i695[2]
  var i699 = i695[3]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( i699[i + 0] );
  }
  i694.shaderDefinedKeywords = i698
  var i701 = i695[4]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i701[i + 0]) );
  }
  i694.passes = i700
  var i703 = i695[5]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i703[i + 0]) );
  }
  i694.usePasses = i702
  var i705 = i695[6]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i705[i + 0]) );
  }
  i694.defaultParameterValues = i704
  request.r(i695[7], i695[8], 0, i694, 'unityFallbackShader')
  i694.readDepth = !!i695[9]
  i694.isCreatedByShaderGraph = !!i695[10]
  i694.disableBatching = !!i695[11]
  i694.compiled = !!i695[12]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i709 = data
  i708.shaderName = i709[0]
  i708.errorMessage = i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i712 = root || new pc.UnityShaderPass()
  var i713 = data
  i712.id = i713[0]
  i712.subShaderIndex = i713[1]
  i712.name = i713[2]
  i712.passType = i713[3]
  i712.grabPassTextureName = i713[4]
  i712.usePass = !!i713[5]
  i712.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[6], i712.zTest)
  i712.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[7], i712.zWrite)
  i712.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[8], i712.culling)
  i712.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i713[9], i712.blending)
  i712.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i713[10], i712.alphaBlending)
  i712.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[11], i712.colorWriteMask)
  i712.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[12], i712.offsetUnits)
  i712.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[13], i712.offsetFactor)
  i712.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[14], i712.stencilRef)
  i712.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[15], i712.stencilReadMask)
  i712.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[16], i712.stencilWriteMask)
  i712.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i713[17], i712.stencilOp)
  i712.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i713[18], i712.stencilOpFront)
  i712.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i713[19], i712.stencilOpBack)
  var i715 = i713[20]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i715[i + 0]) );
  }
  i712.tags = i714
  var i717 = i713[21]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( i717[i + 0] );
  }
  i712.passDefinedKeywords = i716
  var i719 = i713[22]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i719[i + 0]) );
  }
  i712.passDefinedKeywordGroups = i718
  var i721 = i713[23]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i721[i + 0]) );
  }
  i712.variants = i720
  var i723 = i713[24]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i723[i + 0]) );
  }
  i712.excludedVariants = i722
  i712.hasDepthReader = !!i713[25]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i725 = data
  i724.val = i725[0]
  i724.name = i725[1]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i727 = data
  i726.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[0], i726.src)
  i726.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[1], i726.dst)
  i726.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[2], i726.op)
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i729 = data
  i728.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[0], i728.pass)
  i728.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[1], i728.fail)
  i728.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[2], i728.zFail)
  i728.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[3], i728.comp)
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i733 = data
  i732.name = i733[0]
  i732.value = i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i737 = data
  var i739 = i737[0]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i736.keywords = i738
  i736.hasDiscard = !!i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i743 = data
  i742.passId = i743[0]
  i742.subShaderIndex = i743[1]
  var i745 = i743[2]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( i745[i + 0] );
  }
  i742.keywords = i744
  i742.vertexProgram = i743[3]
  i742.fragmentProgram = i743[4]
  i742.exportedForWebGl2 = !!i743[5]
  i742.readDepth = !!i743[6]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'shader')
  i748.pass = i749[2]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i753 = data
  i752.name = i753[0]
  i752.type = i753[1]
  i752.value = new pc.Vec4( i753[2], i753[3], i753[4], i753[5] )
  i752.textureValue = i753[6]
  i752.shaderPropertyFlag = i753[7]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i755 = data
  i754.name = i755[0]
  request.r(i755[1], i755[2], 0, i754, 'texture')
  i754.aabb = i755[3]
  i754.vertices = i755[4]
  i754.triangles = i755[5]
  i754.textureRect = UnityEngine.Rect.MinMaxRect(i755[6], i755[7], i755[8], i755[9])
  i754.packedRect = UnityEngine.Rect.MinMaxRect(i755[10], i755[11], i755[12], i755[13])
  i754.border = new pc.Vec4( i755[14], i755[15], i755[16], i755[17] )
  i754.transparency = i755[18]
  i754.bounds = i755[19]
  i754.pixelsPerUnit = i755[20]
  i754.textureWidth = i755[21]
  i754.textureHeight = i755[22]
  i754.nativeSize = new pc.Vec2( i755[23], i755[24] )
  i754.pivot = new pc.Vec2( i755[25], i755[26] )
  i754.textureRectOffset = new pc.Vec2( i755[27], i755[28] )
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i757 = data
  i756.name = i757[0]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i759 = data
  i758.name = i759[0]
  i758.ascent = i759[1]
  i758.originalLineHeight = i759[2]
  i758.fontSize = i759[3]
  var i761 = i759[4]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i761[i + 0]) );
  }
  i758.characterInfo = i760
  request.r(i759[5], i759[6], 0, i758, 'texture')
  i758.originalFontSize = i759[7]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i765 = data
  i764.index = i765[0]
  i764.advance = i765[1]
  i764.bearing = i765[2]
  i764.glyphWidth = i765[3]
  i764.glyphHeight = i765[4]
  i764.minX = i765[5]
  i764.maxX = i765[6]
  i764.minY = i765[7]
  i764.maxY = i765[8]
  i764.uvBottomLeftX = i765[9]
  i764.uvBottomLeftY = i765[10]
  i764.uvBottomRightX = i765[11]
  i764.uvBottomRightY = i765[12]
  i764.uvTopLeftX = i765[13]
  i764.uvTopLeftY = i765[14]
  i764.uvTopRightX = i765[15]
  i764.uvTopRightY = i765[16]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i767 = data
  i766.name = i767[0]
  i766.bytes64 = i767[1]
  i766.data = i767[2]
  return i766
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i768 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i769 = data
  var i771 = i769[0]
  var i770 = []
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 2, i770, '')
  }
  i768.atlasAssets = i770
  i768.scale = i769[1]
  request.r(i769[2], i769[3], 0, i768, 'skeletonJSON')
  i768.isUpgradingBlendModeMaterials = !!i769[4]
  i768.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i769[5], i768.blendModeMaterials)
  var i773 = i769[6]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 1, i772, '')
  }
  i768.skeletonDataModifiers = i772
  var i775 = i769[7]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( i775[i + 0] );
  }
  i768.fromAnimation = i774
  var i777 = i769[8]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( i777[i + 0] );
  }
  i768.toAnimation = i776
  i768.duration = i769[9]
  i768.defaultMix = i769[10]
  request.r(i769[11], i769[12], 0, i768, 'controller')
  return i768
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i780 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i781 = data
  i780.applyAdditiveMaterial = !!i781[0]
  var i783 = i781[1]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i783[i + 0]));
  }
  i780.additiveMaterials = i782
  var i785 = i781[2]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i785.length; i += 1) {
    i784.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i785[i + 0]));
  }
  i780.multiplyMaterials = i784
  var i787 = i781[3]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i787[i + 0]));
  }
  i780.screenMaterials = i786
  i780.requiresBlendModeMaterials = !!i781[4]
  return i780
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i790 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i791 = data
  i790.pageName = i791[0]
  request.r(i791[1], i791[2], 0, i790, 'material')
  return i790
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i794 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'atlasFile')
  var i797 = i795[2]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i794.materials = i796
  i794.textureLoadingMode = i795[3]
  request.r(i795[4], i795[5], 0, i794, 'onDemandTextureLoader')
  return i794
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i798 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'atlas')
  i798.normalStyle = i799[2]
  i798.normalSpacingOffset = i799[3]
  i798.boldStyle = i799[4]
  i798.boldSpacing = i799[5]
  i798.italicStyle = i799[6]
  i798.tabSize = i799[7]
  i798.hashCode = i799[8]
  request.r(i799[9], i799[10], 0, i798, 'material')
  i798.materialHashCode = i799[11]
  i798.m_Version = i799[12]
  i798.m_SourceFontFileGUID = i799[13]
  request.r(i799[14], i799[15], 0, i798, 'm_SourceFontFile_EditorRef')
  request.r(i799[16], i799[17], 0, i798, 'm_SourceFontFile')
  i798.m_AtlasPopulationMode = i799[18]
  i798.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i799[19], i798.m_FaceInfo)
  var i801 = i799[20]
  var i800 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i801.length; i += 1) {
    i800.add(request.d('UnityEngine.TextCore.Glyph', i801[i + 0]));
  }
  i798.m_GlyphTable = i800
  var i803 = i799[21]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i803.length; i += 1) {
    i802.add(request.d('TMPro.TMP_Character', i803[i + 0]));
  }
  i798.m_CharacterTable = i802
  var i805 = i799[22]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i798.m_AtlasTextures = i804
  i798.m_AtlasTextureIndex = i799[23]
  i798.m_IsMultiAtlasTexturesEnabled = !!i799[24]
  i798.m_ClearDynamicDataOnBuild = !!i799[25]
  var i807 = i799[26]
  var i806 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i807.length; i += 1) {
    i806.add(request.d('UnityEngine.TextCore.GlyphRect', i807[i + 0]));
  }
  i798.m_UsedGlyphRects = i806
  var i809 = i799[27]
  var i808 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i809.length; i += 1) {
    i808.add(request.d('UnityEngine.TextCore.GlyphRect', i809[i + 0]));
  }
  i798.m_FreeGlyphRects = i808
  i798.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i799[28], i798.m_fontInfo)
  i798.m_AtlasWidth = i799[29]
  i798.m_AtlasHeight = i799[30]
  i798.m_AtlasPadding = i799[31]
  i798.m_AtlasRenderMode = i799[32]
  var i811 = i799[33]
  var i810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i811.length; i += 1) {
    i810.add(request.d('TMPro.TMP_Glyph', i811[i + 0]));
  }
  i798.m_glyphInfoList = i810
  i798.m_KerningTable = request.d('TMPro.KerningTable', i799[34], i798.m_KerningTable)
  i798.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i799[35], i798.m_FontFeatureTable)
  var i813 = i799[36]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 1, i812, '')
  }
  i798.fallbackFontAssets = i812
  var i815 = i799[37]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 1, i814, '')
  }
  i798.m_FallbackFontAssetTable = i814
  i798.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i799[38], i798.m_CreationSettings)
  var i817 = i799[39]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('TMPro.TMP_FontWeightPair', i817[i + 0]) );
  }
  i798.m_FontWeightTable = i816
  var i819 = i799[40]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('TMPro.TMP_FontWeightPair', i819[i + 0]) );
  }
  i798.fontWeights = i818
  return i798
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i821 = data
  i820.m_FaceIndex = i821[0]
  i820.m_FamilyName = i821[1]
  i820.m_StyleName = i821[2]
  i820.m_PointSize = i821[3]
  i820.m_Scale = i821[4]
  i820.m_UnitsPerEM = i821[5]
  i820.m_LineHeight = i821[6]
  i820.m_AscentLine = i821[7]
  i820.m_CapLine = i821[8]
  i820.m_MeanLine = i821[9]
  i820.m_Baseline = i821[10]
  i820.m_DescentLine = i821[11]
  i820.m_SuperscriptOffset = i821[12]
  i820.m_SuperscriptSize = i821[13]
  i820.m_SubscriptOffset = i821[14]
  i820.m_SubscriptSize = i821[15]
  i820.m_UnderlineOffset = i821[16]
  i820.m_UnderlineThickness = i821[17]
  i820.m_StrikethroughOffset = i821[18]
  i820.m_StrikethroughThickness = i821[19]
  i820.m_TabWidth = i821[20]
  return i820
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i825 = data
  i824.m_Index = i825[0]
  i824.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i825[1], i824.m_Metrics)
  i824.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i825[2], i824.m_GlyphRect)
  i824.m_Scale = i825[3]
  i824.m_AtlasIndex = i825[4]
  i824.m_ClassDefinitionType = i825[5]
  return i824
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i827 = data
  i826.m_Width = i827[0]
  i826.m_Height = i827[1]
  i826.m_HorizontalBearingX = i827[2]
  i826.m_HorizontalBearingY = i827[3]
  i826.m_HorizontalAdvance = i827[4]
  return i826
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i829 = data
  i828.m_X = i829[0]
  i828.m_Y = i829[1]
  i828.m_Width = i829[2]
  i828.m_Height = i829[3]
  return i828
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.TMP_Character' )
  var i833 = data
  i832.m_ElementType = i833[0]
  i832.m_Unicode = i833[1]
  i832.m_GlyphIndex = i833[2]
  i832.m_Scale = i833[3]
  return i832
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i839 = data
  i838.Name = i839[0]
  i838.PointSize = i839[1]
  i838.Scale = i839[2]
  i838.CharacterCount = i839[3]
  i838.LineHeight = i839[4]
  i838.Baseline = i839[5]
  i838.Ascender = i839[6]
  i838.CapHeight = i839[7]
  i838.Descender = i839[8]
  i838.CenterLine = i839[9]
  i838.SuperscriptOffset = i839[10]
  i838.SubscriptOffset = i839[11]
  i838.SubSize = i839[12]
  i838.Underline = i839[13]
  i838.UnderlineThickness = i839[14]
  i838.strikethrough = i839[15]
  i838.strikethroughThickness = i839[16]
  i838.TabWidth = i839[17]
  i838.Padding = i839[18]
  i838.AtlasWidth = i839[19]
  i838.AtlasHeight = i839[20]
  return i838
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.TMP_Glyph' )
  var i843 = data
  i842.id = i843[0]
  i842.x = i843[1]
  i842.y = i843[2]
  i842.width = i843[3]
  i842.height = i843[4]
  i842.xOffset = i843[5]
  i842.yOffset = i843[6]
  i842.xAdvance = i843[7]
  i842.scale = i843[8]
  return i842
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.KerningTable' )
  var i845 = data
  var i847 = i845[0]
  var i846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i847.length; i += 1) {
    i846.add(request.d('TMPro.KerningPair', i847[i + 0]));
  }
  i844.kerningPairs = i846
  return i844
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.KerningPair' )
  var i851 = data
  i850.xOffset = i851[0]
  i850.m_FirstGlyph = i851[1]
  i850.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i851[2], i850.m_FirstGlyphAdjustments)
  i850.m_SecondGlyph = i851[3]
  i850.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i851[4], i850.m_SecondGlyphAdjustments)
  i850.m_IgnoreSpacingAdjustments = !!i851[5]
  return i850
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i852 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i853 = data
  var i855 = i853[0]
  var i854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i855.length; i += 1) {
    i854.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i855[i + 0]));
  }
  i852.m_GlyphPairAdjustmentRecords = i854
  return i852
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i858 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i859 = data
  i858.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i859[0], i858.m_FirstAdjustmentRecord)
  i858.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i859[1], i858.m_SecondAdjustmentRecord)
  i858.m_FeatureLookupFlags = i859[2]
  return i858
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i863 = data
  i862.sourceFontFileName = i863[0]
  i862.sourceFontFileGUID = i863[1]
  i862.pointSizeSamplingMode = i863[2]
  i862.pointSize = i863[3]
  i862.padding = i863[4]
  i862.packingMode = i863[5]
  i862.atlasWidth = i863[6]
  i862.atlasHeight = i863[7]
  i862.characterSetSelectionMode = i863[8]
  i862.characterSequence = i863[9]
  i862.referencedFontAssetGUID = i863[10]
  i862.referencedTextAssetGUID = i863[11]
  i862.fontStyle = i863[12]
  i862.fontStyleModifier = i863[13]
  i862.renderMode = i863[14]
  i862.includeFontFeatures = !!i863[15]
  return i862
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'regularTypeface')
  request.r(i867[2], i867[3], 0, i866, 'italicTypeface')
  return i866
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i868 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i869 = data
  i868.useSafeMode = !!i869[0]
  i868.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i869[1], i868.safeModeOptions)
  i868.timeScale = i869[2]
  i868.unscaledTimeScale = i869[3]
  i868.useSmoothDeltaTime = !!i869[4]
  i868.maxSmoothUnscaledTime = i869[5]
  i868.rewindCallbackMode = i869[6]
  i868.showUnityEditorReport = !!i869[7]
  i868.logBehaviour = i869[8]
  i868.drawGizmos = !!i869[9]
  i868.defaultRecyclable = !!i869[10]
  i868.defaultAutoPlay = i869[11]
  i868.defaultUpdateType = i869[12]
  i868.defaultTimeScaleIndependent = !!i869[13]
  i868.defaultEaseType = i869[14]
  i868.defaultEaseOvershootOrAmplitude = i869[15]
  i868.defaultEasePeriod = i869[16]
  i868.defaultAutoKill = !!i869[17]
  i868.defaultLoopType = i869[18]
  i868.debugMode = !!i869[19]
  i868.debugStoreTargetId = !!i869[20]
  i868.showPreviewPanel = !!i869[21]
  i868.storeSettingsLocation = i869[22]
  i868.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i869[23], i868.modules)
  i868.createASMDEF = !!i869[24]
  i868.showPlayingTweens = !!i869[25]
  i868.showPausedTweens = !!i869[26]
  return i868
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i870 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i871 = data
  i870.logBehaviour = i871[0]
  i870.nestedTweenFailureBehaviour = i871[1]
  return i870
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i872 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i873 = data
  i872.showPanel = !!i873[0]
  i872.audioEnabled = !!i873[1]
  i872.physicsEnabled = !!i873[2]
  i872.physics2DEnabled = !!i873[3]
  i872.spriteEnabled = !!i873[4]
  i872.uiEnabled = !!i873[5]
  i872.textMeshProEnabled = !!i873[6]
  i872.tk2DEnabled = !!i873[7]
  i872.deAudioEnabled = !!i873[8]
  i872.deUnityExtendedEnabled = !!i873[9]
  i872.epoOutlineEnabled = !!i873[10]
  return i872
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TMP_Settings' )
  var i875 = data
  i874.m_enableWordWrapping = !!i875[0]
  i874.m_enableKerning = !!i875[1]
  i874.m_enableExtraPadding = !!i875[2]
  i874.m_enableTintAllSprites = !!i875[3]
  i874.m_enableParseEscapeCharacters = !!i875[4]
  i874.m_EnableRaycastTarget = !!i875[5]
  i874.m_GetFontFeaturesAtRuntime = !!i875[6]
  i874.m_missingGlyphCharacter = i875[7]
  i874.m_warningsDisabled = !!i875[8]
  request.r(i875[9], i875[10], 0, i874, 'm_defaultFontAsset')
  i874.m_defaultFontAssetPath = i875[11]
  i874.m_defaultFontSize = i875[12]
  i874.m_defaultAutoSizeMinRatio = i875[13]
  i874.m_defaultAutoSizeMaxRatio = i875[14]
  i874.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i875[15], i875[16] )
  i874.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i875[17], i875[18] )
  i874.m_autoSizeTextContainer = !!i875[19]
  i874.m_IsTextObjectScaleStatic = !!i875[20]
  var i877 = i875[21]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 1, i876, '')
  }
  i874.m_fallbackFontAssets = i876
  i874.m_matchMaterialPreset = !!i875[22]
  request.r(i875[23], i875[24], 0, i874, 'm_defaultSpriteAsset')
  i874.m_defaultSpriteAssetPath = i875[25]
  i874.m_enableEmojiSupport = !!i875[26]
  i874.m_MissingCharacterSpriteUnicode = i875[27]
  i874.m_defaultColorGradientPresetsPath = i875[28]
  request.r(i875[29], i875[30], 0, i874, 'm_defaultStyleSheet')
  i874.m_StyleSheetsResourcePath = i875[31]
  request.r(i875[32], i875[33], 0, i874, 'm_leadingCharacters')
  request.r(i875[34], i875[35], 0, i874, 'm_followingCharacters')
  i874.m_UseModernHangulLineBreakingRules = !!i875[36]
  return i874
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

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i969 = data
  i968.m_GlyphIndex = i969[0]
  i968.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i969[1], i968.m_GlyphValueRecord)
  return i968
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i971 = data
  i970.m_XPlacement = i971[0]
  i970.m_YPlacement = i971[1]
  i970.m_XAdvance = i971[2]
  i970.m_YAdvance = i971[3]
  return i970
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[3],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[3],"78":[79],"80":[81],"82":[81],"9":[8],"83":[84],"85":[86],"87":[84],"88":[8],"89":[8],"11":[9],"18":[19,8],"90":[8],"10":[9],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"96":[8],"97":[8],"36":[8],"98":[8],"16":[19,8],"99":[8],"100":[8],"101":[8],"102":[8],"103":[19,8],"104":[8],"105":[6],"106":[6],"7":[6],"107":[6],"108":[3],"109":[3],"110":[111],"112":[3],"113":[114],"115":[8],"116":[19,8],"117":[79],"26":[19,8],"118":[119,79],"120":[79],"121":[79,122],"123":[56],"124":[64],"125":[114],"126":[127],"128":[8],"129":[79,8],"17":[8,19],"130":[8],"131":[19,8],"132":[79],"133":[19,8],"134":[8],"135":[84]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","ClickItem","DragID","UnityEngine.CanvasGroup","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.PolygonCollider2D","DropID","MixSkeletonSkin","DropZone","DraggableItem","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "265.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BM_V17_NgocBTU_AnhPD";

Deserializers.lunaAppID = "34530";

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

Deserializers.buildID = "e35da5a4-e60b-4e98-a521-3050be018873";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

