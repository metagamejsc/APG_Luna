var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointSpring' )
  var i483 = data
  i482.spring = i483[0]
  i482.damper = i483[1]
  i482.targetPosition = i483[2]
  return i482
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointMotor' )
  var i485 = data
  i484.m_TargetVelocity = i485[0]
  i484.m_Force = i485[1]
  i484.m_FreeSpin = i485[2]
  return i484
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointLimits' )
  var i487 = data
  i486.m_Min = i487[0]
  i486.m_Max = i487[1]
  i486.m_Bounciness = i487[2]
  i486.m_BounceMinVelocity = i487[3]
  i486.m_ContactDistance = i487[4]
  i486.minBounce = i487[5]
  i486.maxBounce = i487[6]
  return i486
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointDrive' )
  var i489 = data
  i488.m_PositionSpring = i489[0]
  i488.m_PositionDamper = i489[1]
  i488.m_MaximumForce = i489[2]
  i488.m_UseAcceleration = i489[3]
  return i488
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i491 = data
  i490.m_Spring = i491[0]
  i490.m_Damper = i491[1]
  return i490
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i493 = data
  i492.m_Limit = i493[0]
  i492.m_Bounciness = i493[1]
  i492.m_ContactDistance = i493[2]
  return i492
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i495 = data
  i494.m_ExtremumSlip = i495[0]
  i494.m_ExtremumValue = i495[1]
  i494.m_AsymptoteSlip = i495[2]
  i494.m_AsymptoteValue = i495[3]
  i494.m_Stiffness = i495[4]
  return i494
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i497 = data
  i496.m_LowerAngle = i497[0]
  i496.m_UpperAngle = i497[1]
  return i496
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i499 = data
  i498.m_MotorSpeed = i499[0]
  i498.m_MaximumMotorTorque = i499[1]
  return i498
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i501 = data
  i500.m_DampingRatio = i501[0]
  i500.m_Frequency = i501[1]
  i500.m_Angle = i501[2]
  return i500
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i503 = data
  i502.m_LowerTranslation = i503[0]
  i502.m_UpperTranslation = i503[1]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i505 = data
  i504.name = i505[0]
  i504.width = i505[1]
  i504.height = i505[2]
  i504.mipmapCount = i505[3]
  i504.anisoLevel = i505[4]
  i504.filterMode = i505[5]
  i504.hdr = !!i505[6]
  i504.format = i505[7]
  i504.wrapMode = i505[8]
  i504.alphaIsTransparency = !!i505[9]
  i504.alphaSource = i505[10]
  i504.graphicsFormat = i505[11]
  i504.sRGBTexture = !!i505[12]
  i504.desiredColorSpace = i505[13]
  i504.wrapU = i505[14]
  i504.wrapV = i505[15]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i506 = root || new pc.UnityMaterial()
  var i507 = data
  i506.name = i507[0]
  request.r(i507[1], i507[2], 0, i506, 'shader')
  i506.renderQueue = i507[3]
  i506.enableInstancing = !!i507[4]
  var i509 = i507[5]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i509[i + 0]) );
  }
  i506.floatParameters = i508
  var i511 = i507[6]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i511[i + 0]) );
  }
  i506.colorParameters = i510
  var i513 = i507[7]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i513[i + 0]) );
  }
  i506.vectorParameters = i512
  var i515 = i507[8]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i515[i + 0]) );
  }
  i506.textureParameters = i514
  var i517 = i507[9]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i517[i + 0]) );
  }
  i506.materialFlags = i516
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i521 = data
  i520.name = i521[0]
  i520.value = i521[1]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i525 = data
  i524.name = i525[0]
  i524.value = new pc.Color(i525[1], i525[2], i525[3], i525[4])
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i529 = data
  i528.name = i529[0]
  i528.value = new pc.Vec4( i529[1], i529[2], i529[3], i529[4] )
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i533 = data
  i532.name = i533[0]
  request.r(i533[1], i533[2], 0, i532, 'value')
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i537 = data
  i536.name = i537[0]
  i536.enabled = !!i537[1]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i539 = data
  i538.name = i539[0]
  i538.index = i539[1]
  i538.startup = !!i539[2]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i541 = data
  i540.position = new pc.Vec3( i541[0], i541[1], i541[2] )
  i540.scale = new pc.Vec3( i541[3], i541[4], i541[5] )
  i540.rotation = new pc.Quat(i541[6], i541[7], i541[8], i541[9])
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i543 = data
  i542.aspect = i543[0]
  i542.orthographic = !!i543[1]
  i542.orthographicSize = i543[2]
  i542.backgroundColor = new pc.Color(i543[3], i543[4], i543[5], i543[6])
  i542.nearClipPlane = i543[7]
  i542.farClipPlane = i543[8]
  i542.fieldOfView = i543[9]
  i542.depth = i543[10]
  i542.clearFlags = i543[11]
  i542.cullingMask = i543[12]
  i542.rect = i543[13]
  request.r(i543[14], i543[15], 0, i542, 'targetTexture')
  i542.usePhysicalProperties = !!i543[16]
  i542.focalLength = i543[17]
  i542.sensorSize = new pc.Vec2( i543[18], i543[19] )
  i542.lensShift = new pc.Vec2( i543[20], i543[21] )
  i542.gateFit = i543[22]
  i542.commandBufferCount = i543[23]
  i542.cameraType = i543[24]
  i542.enabled = !!i543[25]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i545 = data
  i544.name = i545[0]
  i544.tagId = i545[1]
  i544.enabled = !!i545[2]
  i544.isStatic = !!i545[3]
  i544.layer = i545[4]
  return i544
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'm_FirstSelected')
  i546.m_sendNavigationEvents = !!i547[2]
  i546.m_DragThreshold = i547[3]
  return i546
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i549 = data
  i548.m_HorizontalAxis = i549[0]
  i548.m_VerticalAxis = i549[1]
  i548.m_SubmitButton = i549[2]
  i548.m_CancelButton = i549[3]
  i548.m_InputActionsPerSecond = i549[4]
  i548.m_RepeatDelay = i549[5]
  i548.m_ForceModuleActive = !!i549[6]
  i548.m_SendPointerHoverToParent = !!i549[7]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i551 = data
  i550.pivot = new pc.Vec2( i551[0], i551[1] )
  i550.anchorMin = new pc.Vec2( i551[2], i551[3] )
  i550.anchorMax = new pc.Vec2( i551[4], i551[5] )
  i550.sizeDelta = new pc.Vec2( i551[6], i551[7] )
  i550.anchoredPosition3D = new pc.Vec3( i551[8], i551[9], i551[10] )
  i550.rotation = new pc.Quat(i551[11], i551[12], i551[13], i551[14])
  i550.scale = new pc.Vec3( i551[15], i551[16], i551[17] )
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i553 = data
  i552.planeDistance = i553[0]
  i552.referencePixelsPerUnit = i553[1]
  i552.isFallbackOverlay = !!i553[2]
  i552.renderMode = i553[3]
  i552.renderOrder = i553[4]
  i552.sortingLayerName = i553[5]
  i552.sortingOrder = i553[6]
  i552.scaleFactor = i553[7]
  request.r(i553[8], i553[9], 0, i552, 'worldCamera')
  i552.overrideSorting = !!i553[10]
  i552.pixelPerfect = !!i553[11]
  i552.targetDisplay = i553[12]
  i552.overridePixelPerfect = !!i553[13]
  i552.enabled = !!i553[14]
  return i552
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i555 = data
  i554.m_UiScaleMode = i555[0]
  i554.m_ReferencePixelsPerUnit = i555[1]
  i554.m_ScaleFactor = i555[2]
  i554.m_ReferenceResolution = new pc.Vec2( i555[3], i555[4] )
  i554.m_ScreenMatchMode = i555[5]
  i554.m_MatchWidthOrHeight = i555[6]
  i554.m_PhysicalUnit = i555[7]
  i554.m_FallbackScreenDPI = i555[8]
  i554.m_DefaultSpriteDPI = i555[9]
  i554.m_DynamicPixelsPerUnit = i555[10]
  i554.m_PresetInfoIsWorld = !!i555[11]
  return i554
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i557 = data
  i556.m_IgnoreReversedGraphics = !!i557[0]
  i556.m_BlockingObjects = i557[1]
  i556.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i557[2] )
  return i556
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i558 = root || request.c( 'LunaManager' )
  var i559 = data
  var i561 = i559[0]
  var i560 = []
  for(var i = 0; i < i561.length; i += 2) {
  request.r(i561[i + 0], i561[i + 1], 2, i560, '')
  }
  i558.lstBtnInstall = i560
  request.r(i559[1], i559[2], 0, i558, 'WinGO')
  request.r(i559[3], i559[4], 0, i558, 'LoseGO')
  request.r(i559[5], i559[6], 0, i558, 'StartCard')
  request.r(i559[7], i559[8], 0, i558, 'EndCard')
  request.r(i559[9], i559[10], 0, i558, 'Parent')
  i558.isDrag = !!i559[11]
  i558.timeDrag = i559[12]
  i558.countPlay = i559[13]
  i558.countPlayFinal = i559[14]
  i558.countPlayMax = i559[15]
  i558.timeDropFinal = i559[16]
  i558.colorBG = new pc.Color(i559[17], i559[18], i559[19], i559[20])
  request.r(i559[21], i559[22], 0, i558, 'texture2D')
  request.r(i559[23], i559[24], 0, i558, 'rawImageBG')
  var i563 = i559[25]
  var i562 = []
  for(var i = 0; i < i563.length; i += 2) {
  request.r(i563[i + 0], i563[i + 1], 2, i562, '')
  }
  i558.skeDogs = i562
  request.r(i559[26], i559[27], 0, i558, 'textProgess')
  request.r(i559[28], i559[29], 0, i558, 'imgProgess')
  request.r(i559[30], i559[31], 0, i558, 'timeText')
  return i558
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i603 = data
  i602.m_Alpha = i603[0]
  i602.m_Interactable = !!i603[1]
  i602.m_BlocksRaycasts = !!i603[2]
  i602.m_IgnoreParentGroups = !!i603[3]
  i602.enabled = !!i603[4]
  return i602
}

Deserializers["DragID"] = function (request, data, root) {
  var i604 = root || request.c( 'DragID' )
  var i605 = data
  i604.idDrag = i605[0]
  i604.isProcess = !!i605[1]
  i604.isHide = !!i605[2]
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

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i624 = root || request.c( 'MixSkeletonSkin' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'skeletonAnimation')
  var i627 = i625[2]
  var i626 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i627.length; i += 1) {
    i626.add(i627[i + 0]);
  }
  i624.skinNames = i626
  i624.defaultAnim = i625[3]
  return i624
}

Deserializers["DropID"] = function (request, data, root) {
  var i630 = root || request.c( 'DropID' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'mixSkeletonSkin')
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i633 = data
  i632.usedByComposite = !!i633[0]
  i632.autoTiling = !!i633[1]
  var i635 = i633[2]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
  var i637 = i635[i + 0]
  var i636 = []
  for(var i = 0; i < i637.length; i += 2) {
    i636.push( new pc.Vec2( i637[i + 0], i637[i + 1] ) );
  }
    i634.push( i636 );
  }
  i632.points = i634
  i632.enabled = !!i633[3]
  i632.isTrigger = !!i633[4]
  i632.usedByEffector = !!i633[5]
  i632.density = i633[6]
  i632.offset = new pc.Vec2( i633[7], i633[8] )
  request.r(i633[9], i633[10], 0, i632, 'material')
  return i632
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i644 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i645 = data
  i644.m_hasFontAssetChanged = !!i645[0]
  request.r(i645[1], i645[2], 0, i644, 'm_baseMaterial')
  i644.m_maskOffset = new pc.Vec4( i645[3], i645[4], i645[5], i645[6] )
  i644.m_text = i645[7]
  i644.m_isRightToLeft = !!i645[8]
  request.r(i645[9], i645[10], 0, i644, 'm_fontAsset')
  request.r(i645[11], i645[12], 0, i644, 'm_sharedMaterial')
  var i647 = i645[13]
  var i646 = []
  for(var i = 0; i < i647.length; i += 2) {
  request.r(i647[i + 0], i647[i + 1], 2, i646, '')
  }
  i644.m_fontSharedMaterials = i646
  request.r(i645[14], i645[15], 0, i644, 'm_fontMaterial')
  var i649 = i645[16]
  var i648 = []
  for(var i = 0; i < i649.length; i += 2) {
  request.r(i649[i + 0], i649[i + 1], 2, i648, '')
  }
  i644.m_fontMaterials = i648
  i644.m_fontColor32 = UnityEngine.Color32.ConstructColor(i645[17], i645[18], i645[19], i645[20])
  i644.m_fontColor = new pc.Color(i645[21], i645[22], i645[23], i645[24])
  i644.m_enableVertexGradient = !!i645[25]
  i644.m_colorMode = i645[26]
  i644.m_fontColorGradient = request.d('TMPro.VertexGradient', i645[27], i644.m_fontColorGradient)
  request.r(i645[28], i645[29], 0, i644, 'm_fontColorGradientPreset')
  request.r(i645[30], i645[31], 0, i644, 'm_spriteAsset')
  i644.m_tintAllSprites = !!i645[32]
  request.r(i645[33], i645[34], 0, i644, 'm_StyleSheet')
  i644.m_TextStyleHashCode = i645[35]
  i644.m_overrideHtmlColors = !!i645[36]
  i644.m_faceColor = UnityEngine.Color32.ConstructColor(i645[37], i645[38], i645[39], i645[40])
  i644.m_fontSize = i645[41]
  i644.m_fontSizeBase = i645[42]
  i644.m_fontWeight = i645[43]
  i644.m_enableAutoSizing = !!i645[44]
  i644.m_fontSizeMin = i645[45]
  i644.m_fontSizeMax = i645[46]
  i644.m_fontStyle = i645[47]
  i644.m_HorizontalAlignment = i645[48]
  i644.m_VerticalAlignment = i645[49]
  i644.m_textAlignment = i645[50]
  i644.m_characterSpacing = i645[51]
  i644.m_wordSpacing = i645[52]
  i644.m_lineSpacing = i645[53]
  i644.m_lineSpacingMax = i645[54]
  i644.m_paragraphSpacing = i645[55]
  i644.m_charWidthMaxAdj = i645[56]
  i644.m_enableWordWrapping = !!i645[57]
  i644.m_wordWrappingRatios = i645[58]
  i644.m_overflowMode = i645[59]
  request.r(i645[60], i645[61], 0, i644, 'm_linkedTextComponent')
  request.r(i645[62], i645[63], 0, i644, 'parentLinkedComponent')
  i644.m_enableKerning = !!i645[64]
  i644.m_enableExtraPadding = !!i645[65]
  i644.checkPaddingRequired = !!i645[66]
  i644.m_isRichText = !!i645[67]
  i644.m_parseCtrlCharacters = !!i645[68]
  i644.m_isOrthographic = !!i645[69]
  i644.m_isCullingEnabled = !!i645[70]
  i644.m_horizontalMapping = i645[71]
  i644.m_verticalMapping = i645[72]
  i644.m_uvLineOffset = i645[73]
  i644.m_geometrySortingOrder = i645[74]
  i644.m_IsTextObjectScaleStatic = !!i645[75]
  i644.m_VertexBufferAutoSizeReduction = !!i645[76]
  i644.m_useMaxVisibleDescender = !!i645[77]
  i644.m_pageToDisplay = i645[78]
  i644.m_margin = new pc.Vec4( i645[79], i645[80], i645[81], i645[82] )
  i644.m_isUsingLegacyAnimationComponent = !!i645[83]
  i644.m_isVolumetricText = !!i645[84]
  i644.m_Maskable = !!i645[85]
  request.r(i645[86], i645[87], 0, i644, 'm_Material')
  i644.m_Color = new pc.Color(i645[88], i645[89], i645[90], i645[91])
  i644.m_RaycastTarget = !!i645[92]
  i644.m_RaycastPadding = new pc.Vec4( i645[93], i645[94], i645[95], i645[96] )
  return i644
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i652 = root || request.c( 'TMPro.VertexGradient' )
  var i653 = data
  i652.topLeft = new pc.Color(i653[0], i653[1], i653[2], i653[3])
  i652.topRight = new pc.Color(i653[4], i653[5], i653[6], i653[7])
  i652.bottomLeft = new pc.Color(i653[8], i653[9], i653[10], i653[11])
  i652.bottomRight = new pc.Color(i653[12], i653[13], i653[14], i653[15])
  return i652
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'm_ObjectArgument')
  i654.m_ObjectArgumentAssemblyTypeName = i655[2]
  i654.m_IntArgument = i655[3]
  i654.m_FloatArgument = i655[4]
  i654.m_StringArgument = i655[5]
  i654.m_BoolArgument = !!i655[6]
  return i654
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i656 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i657 = data
  i656.targetIsSelf = !!i657[0]
  request.r(i657[1], i657[2], 0, i656, 'targetGO')
  i656.tweenTargetIsTargetGO = !!i657[3]
  i656.delay = i657[4]
  i656.duration = i657[5]
  i656.easeType = i657[6]
  i656.easeCurve = new pc.AnimationCurve( { keys_flow: i657[7] } )
  i656.loopType = i657[8]
  i656.loops = i657[9]
  i656.id = i657[10]
  i656.isRelative = !!i657[11]
  i656.isFrom = !!i657[12]
  i656.isIndependentUpdate = !!i657[13]
  i656.autoKill = !!i657[14]
  i656.autoGenerate = !!i657[15]
  i656.isActive = !!i657[16]
  i656.isValid = !!i657[17]
  request.r(i657[18], i657[19], 0, i656, 'target')
  i656.animationType = i657[20]
  i656.targetType = i657[21]
  i656.forcedTargetType = i657[22]
  i656.autoPlay = !!i657[23]
  i656.useTargetAsV3 = !!i657[24]
  i656.endValueFloat = i657[25]
  i656.endValueV3 = new pc.Vec3( i657[26], i657[27], i657[28] )
  i656.endValueV2 = new pc.Vec2( i657[29], i657[30] )
  i656.endValueColor = new pc.Color(i657[31], i657[32], i657[33], i657[34])
  i656.endValueString = i657[35]
  i656.endValueRect = UnityEngine.Rect.MinMaxRect(i657[36], i657[37], i657[38], i657[39])
  request.r(i657[40], i657[41], 0, i656, 'endValueTransform')
  i656.optionalBool0 = !!i657[42]
  i656.optionalBool1 = !!i657[43]
  i656.optionalFloat0 = i657[44]
  i656.optionalInt0 = i657[45]
  i656.optionalRotationMode = i657[46]
  i656.optionalScrambleMode = i657[47]
  i656.optionalShakeRandomnessMode = i657[48]
  i656.optionalString = i657[49]
  i656.updateType = i657[50]
  i656.isSpeedBased = !!i657[51]
  i656.hasOnStart = !!i657[52]
  i656.hasOnPlay = !!i657[53]
  i656.hasOnUpdate = !!i657[54]
  i656.hasOnStepComplete = !!i657[55]
  i656.hasOnComplete = !!i657[56]
  i656.hasOnTweenCreated = !!i657[57]
  i656.hasOnRewind = !!i657[58]
  i656.onStart = request.d('UnityEngine.Events.UnityEvent', i657[59], i656.onStart)
  i656.onPlay = request.d('UnityEngine.Events.UnityEvent', i657[60], i656.onPlay)
  i656.onUpdate = request.d('UnityEngine.Events.UnityEvent', i657[61], i656.onUpdate)
  i656.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i657[62], i656.onStepComplete)
  i656.onComplete = request.d('UnityEngine.Events.UnityEvent', i657[63], i656.onComplete)
  i656.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i657[64], i656.onTweenCreated)
  i656.onRewind = request.d('UnityEngine.Events.UnityEvent', i657[65], i656.onRewind)
  return i656
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i659 = data
  i658.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i659[0], i658.m_PersistentCalls)
  return i658
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.Mask' )
  var i661 = data
  i660.m_ShowMaskGraphic = !!i661[0]
  return i660
}

Deserializers["AudioController"] = function (request, data, root) {
  var i662 = root || request.c( 'AudioController' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'bgmSource')
  request.r(i663[2], i663[3], 0, i662, 'sfxSource')
  var i665 = i663[4]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i665.length; i += 1) {
    i664.add(request.d('AudioEntry', i665[i + 0]));
  }
  i662.audioEntries = i664
  return i662
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i668 = root || request.c( 'AudioEntry' )
  var i669 = data
  i668.key = i669[0]
  request.r(i669[1], i669[2], 0, i668, 'clip')
  i668.volume = i669[3]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i671 = data
  i670.ambientIntensity = i671[0]
  i670.reflectionIntensity = i671[1]
  i670.ambientMode = i671[2]
  i670.ambientLight = new pc.Color(i671[3], i671[4], i671[5], i671[6])
  i670.ambientSkyColor = new pc.Color(i671[7], i671[8], i671[9], i671[10])
  i670.ambientGroundColor = new pc.Color(i671[11], i671[12], i671[13], i671[14])
  i670.ambientEquatorColor = new pc.Color(i671[15], i671[16], i671[17], i671[18])
  i670.fogColor = new pc.Color(i671[19], i671[20], i671[21], i671[22])
  i670.fogEndDistance = i671[23]
  i670.fogStartDistance = i671[24]
  i670.fogDensity = i671[25]
  i670.fog = !!i671[26]
  request.r(i671[27], i671[28], 0, i670, 'skybox')
  i670.fogMode = i671[29]
  var i673 = i671[30]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i673[i + 0]) );
  }
  i670.lightmaps = i672
  i670.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i671[31], i670.lightProbes)
  i670.lightmapsMode = i671[32]
  i670.mixedBakeMode = i671[33]
  i670.environmentLightingMode = i671[34]
  i670.ambientProbe = new pc.SphericalHarmonicsL2(i671[35])
  i670.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i671[36])
  i670.useReferenceAmbientProbe = !!i671[37]
  request.r(i671[38], i671[39], 0, i670, 'customReflection')
  request.r(i671[40], i671[41], 0, i670, 'defaultReflection')
  i670.defaultReflectionMode = i671[42]
  i670.defaultReflectionResolution = i671[43]
  i670.sunLightObjectId = i671[44]
  i670.pixelLightCount = i671[45]
  i670.defaultReflectionHDR = !!i671[46]
  i670.hasLightDataAsset = !!i671[47]
  i670.hasManualGenerate = !!i671[48]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'lightmapColor')
  request.r(i677[2], i677[3], 0, i676, 'lightmapDirection')
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i678 = root || new UnityEngine.LightProbes()
  var i679 = data
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i687 = data
  var i689 = i687[0]
  var i688 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i689.length; i += 1) {
    i688.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i689[i + 0]));
  }
  i686.ShaderCompilationErrors = i688
  i686.name = i687[1]
  i686.guid = i687[2]
  var i691 = i687[3]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( i691[i + 0] );
  }
  i686.shaderDefinedKeywords = i690
  var i693 = i687[4]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i693[i + 0]) );
  }
  i686.passes = i692
  var i695 = i687[5]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i695[i + 0]) );
  }
  i686.usePasses = i694
  var i697 = i687[6]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i697[i + 0]) );
  }
  i686.defaultParameterValues = i696
  request.r(i687[7], i687[8], 0, i686, 'unityFallbackShader')
  i686.readDepth = !!i687[9]
  i686.isCreatedByShaderGraph = !!i687[10]
  i686.disableBatching = !!i687[11]
  i686.compiled = !!i687[12]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i701 = data
  i700.shaderName = i701[0]
  i700.errorMessage = i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i704 = root || new pc.UnityShaderPass()
  var i705 = data
  i704.id = i705[0]
  i704.subShaderIndex = i705[1]
  i704.name = i705[2]
  i704.passType = i705[3]
  i704.grabPassTextureName = i705[4]
  i704.usePass = !!i705[5]
  i704.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i705[6], i704.zTest)
  i704.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i705[7], i704.zWrite)
  i704.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i705[8], i704.culling)
  i704.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i705[9], i704.blending)
  i704.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i705[10], i704.alphaBlending)
  i704.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i705[11], i704.colorWriteMask)
  i704.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i705[12], i704.offsetUnits)
  i704.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i705[13], i704.offsetFactor)
  i704.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i705[14], i704.stencilRef)
  i704.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i705[15], i704.stencilReadMask)
  i704.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i705[16], i704.stencilWriteMask)
  i704.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i705[17], i704.stencilOp)
  i704.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i705[18], i704.stencilOpFront)
  i704.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i705[19], i704.stencilOpBack)
  var i707 = i705[20]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i707[i + 0]) );
  }
  i704.tags = i706
  var i709 = i705[21]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( i709[i + 0] );
  }
  i704.passDefinedKeywords = i708
  var i711 = i705[22]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i711[i + 0]) );
  }
  i704.passDefinedKeywordGroups = i710
  var i713 = i705[23]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i713[i + 0]) );
  }
  i704.variants = i712
  var i715 = i705[24]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i715[i + 0]) );
  }
  i704.excludedVariants = i714
  i704.hasDepthReader = !!i705[25]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i717 = data
  i716.val = i717[0]
  i716.name = i717[1]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i719 = data
  i718.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[0], i718.src)
  i718.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[1], i718.dst)
  i718.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[2], i718.op)
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i721 = data
  i720.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[0], i720.pass)
  i720.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[1], i720.fail)
  i720.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[2], i720.zFail)
  i720.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[3], i720.comp)
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i725 = data
  i724.name = i725[0]
  i724.value = i725[1]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i729 = data
  var i731 = i729[0]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( i731[i + 0] );
  }
  i728.keywords = i730
  i728.hasDiscard = !!i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i735 = data
  i734.passId = i735[0]
  i734.subShaderIndex = i735[1]
  var i737 = i735[2]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( i737[i + 0] );
  }
  i734.keywords = i736
  i734.vertexProgram = i735[3]
  i734.fragmentProgram = i735[4]
  i734.exportedForWebGl2 = !!i735[5]
  i734.readDepth = !!i735[6]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'shader')
  i740.pass = i741[2]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i745 = data
  i744.name = i745[0]
  i744.type = i745[1]
  i744.value = new pc.Vec4( i745[2], i745[3], i745[4], i745[5] )
  i744.textureValue = i745[6]
  i744.shaderPropertyFlag = i745[7]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i747 = data
  i746.name = i747[0]
  request.r(i747[1], i747[2], 0, i746, 'texture')
  i746.aabb = i747[3]
  i746.vertices = i747[4]
  i746.triangles = i747[5]
  i746.textureRect = UnityEngine.Rect.MinMaxRect(i747[6], i747[7], i747[8], i747[9])
  i746.packedRect = UnityEngine.Rect.MinMaxRect(i747[10], i747[11], i747[12], i747[13])
  i746.border = new pc.Vec4( i747[14], i747[15], i747[16], i747[17] )
  i746.transparency = i747[18]
  i746.bounds = i747[19]
  i746.pixelsPerUnit = i747[20]
  i746.textureWidth = i747[21]
  i746.textureHeight = i747[22]
  i746.nativeSize = new pc.Vec2( i747[23], i747[24] )
  i746.pivot = new pc.Vec2( i747[25], i747[26] )
  i746.textureRectOffset = new pc.Vec2( i747[27], i747[28] )
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i749 = data
  i748.name = i749[0]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i751 = data
  i750.name = i751[0]
  i750.ascent = i751[1]
  i750.originalLineHeight = i751[2]
  i750.fontSize = i751[3]
  var i753 = i751[4]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i753[i + 0]) );
  }
  i750.characterInfo = i752
  request.r(i751[5], i751[6], 0, i750, 'texture')
  i750.originalFontSize = i751[7]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i757 = data
  i756.index = i757[0]
  i756.advance = i757[1]
  i756.bearing = i757[2]
  i756.glyphWidth = i757[3]
  i756.glyphHeight = i757[4]
  i756.minX = i757[5]
  i756.maxX = i757[6]
  i756.minY = i757[7]
  i756.maxY = i757[8]
  i756.uvBottomLeftX = i757[9]
  i756.uvBottomLeftY = i757[10]
  i756.uvBottomRightX = i757[11]
  i756.uvBottomRightY = i757[12]
  i756.uvTopLeftX = i757[13]
  i756.uvTopLeftY = i757[14]
  i756.uvTopRightX = i757[15]
  i756.uvTopRightY = i757[16]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i759 = data
  i758.name = i759[0]
  i758.bytes64 = i759[1]
  i758.data = i759[2]
  return i758
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i760 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i761 = data
  var i763 = i761[0]
  var i762 = []
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 2, i762, '')
  }
  i760.atlasAssets = i762
  i760.scale = i761[1]
  request.r(i761[2], i761[3], 0, i760, 'skeletonJSON')
  i760.isUpgradingBlendModeMaterials = !!i761[4]
  i760.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i761[5], i760.blendModeMaterials)
  var i765 = i761[6]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 1, i764, '')
  }
  i760.skeletonDataModifiers = i764
  var i767 = i761[7]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( i767[i + 0] );
  }
  i760.fromAnimation = i766
  var i769 = i761[8]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( i769[i + 0] );
  }
  i760.toAnimation = i768
  i760.duration = i761[9]
  i760.defaultMix = i761[10]
  request.r(i761[11], i761[12], 0, i760, 'controller')
  return i760
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i772 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i773 = data
  i772.applyAdditiveMaterial = !!i773[0]
  var i775 = i773[1]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i775[i + 0]));
  }
  i772.additiveMaterials = i774
  var i777 = i773[2]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i777.length; i += 1) {
    i776.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i777[i + 0]));
  }
  i772.multiplyMaterials = i776
  var i779 = i773[3]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i779[i + 0]));
  }
  i772.screenMaterials = i778
  i772.requiresBlendModeMaterials = !!i773[4]
  return i772
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i782 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i783 = data
  i782.pageName = i783[0]
  request.r(i783[1], i783[2], 0, i782, 'material')
  return i782
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i786 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'atlasFile')
  var i789 = i787[2]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i786.materials = i788
  i786.textureLoadingMode = i787[3]
  request.r(i787[4], i787[5], 0, i786, 'onDemandTextureLoader')
  return i786
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i790 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'atlas')
  i790.normalStyle = i791[2]
  i790.normalSpacingOffset = i791[3]
  i790.boldStyle = i791[4]
  i790.boldSpacing = i791[5]
  i790.italicStyle = i791[6]
  i790.tabSize = i791[7]
  i790.hashCode = i791[8]
  request.r(i791[9], i791[10], 0, i790, 'material')
  i790.materialHashCode = i791[11]
  i790.m_Version = i791[12]
  i790.m_SourceFontFileGUID = i791[13]
  request.r(i791[14], i791[15], 0, i790, 'm_SourceFontFile_EditorRef')
  request.r(i791[16], i791[17], 0, i790, 'm_SourceFontFile')
  i790.m_AtlasPopulationMode = i791[18]
  i790.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i791[19], i790.m_FaceInfo)
  var i793 = i791[20]
  var i792 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i793.length; i += 1) {
    i792.add(request.d('UnityEngine.TextCore.Glyph', i793[i + 0]));
  }
  i790.m_GlyphTable = i792
  var i795 = i791[21]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i795.length; i += 1) {
    i794.add(request.d('TMPro.TMP_Character', i795[i + 0]));
  }
  i790.m_CharacterTable = i794
  var i797 = i791[22]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i790.m_AtlasTextures = i796
  i790.m_AtlasTextureIndex = i791[23]
  i790.m_IsMultiAtlasTexturesEnabled = !!i791[24]
  i790.m_ClearDynamicDataOnBuild = !!i791[25]
  var i799 = i791[26]
  var i798 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i799.length; i += 1) {
    i798.add(request.d('UnityEngine.TextCore.GlyphRect', i799[i + 0]));
  }
  i790.m_UsedGlyphRects = i798
  var i801 = i791[27]
  var i800 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i801.length; i += 1) {
    i800.add(request.d('UnityEngine.TextCore.GlyphRect', i801[i + 0]));
  }
  i790.m_FreeGlyphRects = i800
  i790.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i791[28], i790.m_fontInfo)
  i790.m_AtlasWidth = i791[29]
  i790.m_AtlasHeight = i791[30]
  i790.m_AtlasPadding = i791[31]
  i790.m_AtlasRenderMode = i791[32]
  var i803 = i791[33]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i803.length; i += 1) {
    i802.add(request.d('TMPro.TMP_Glyph', i803[i + 0]));
  }
  i790.m_glyphInfoList = i802
  i790.m_KerningTable = request.d('TMPro.KerningTable', i791[34], i790.m_KerningTable)
  i790.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i791[35], i790.m_FontFeatureTable)
  var i805 = i791[36]
  var i804 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 1, i804, '')
  }
  i790.fallbackFontAssets = i804
  var i807 = i791[37]
  var i806 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 1, i806, '')
  }
  i790.m_FallbackFontAssetTable = i806
  i790.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i791[38], i790.m_CreationSettings)
  var i809 = i791[39]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('TMPro.TMP_FontWeightPair', i809[i + 0]) );
  }
  i790.m_FontWeightTable = i808
  var i811 = i791[40]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('TMPro.TMP_FontWeightPair', i811[i + 0]) );
  }
  i790.fontWeights = i810
  return i790
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i813 = data
  i812.m_FaceIndex = i813[0]
  i812.m_FamilyName = i813[1]
  i812.m_StyleName = i813[2]
  i812.m_PointSize = i813[3]
  i812.m_Scale = i813[4]
  i812.m_UnitsPerEM = i813[5]
  i812.m_LineHeight = i813[6]
  i812.m_AscentLine = i813[7]
  i812.m_CapLine = i813[8]
  i812.m_MeanLine = i813[9]
  i812.m_Baseline = i813[10]
  i812.m_DescentLine = i813[11]
  i812.m_SuperscriptOffset = i813[12]
  i812.m_SuperscriptSize = i813[13]
  i812.m_SubscriptOffset = i813[14]
  i812.m_SubscriptSize = i813[15]
  i812.m_UnderlineOffset = i813[16]
  i812.m_UnderlineThickness = i813[17]
  i812.m_StrikethroughOffset = i813[18]
  i812.m_StrikethroughThickness = i813[19]
  i812.m_TabWidth = i813[20]
  return i812
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i817 = data
  i816.m_Index = i817[0]
  i816.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i817[1], i816.m_Metrics)
  i816.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i817[2], i816.m_GlyphRect)
  i816.m_Scale = i817[3]
  i816.m_AtlasIndex = i817[4]
  i816.m_ClassDefinitionType = i817[5]
  return i816
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i819 = data
  i818.m_Width = i819[0]
  i818.m_Height = i819[1]
  i818.m_HorizontalBearingX = i819[2]
  i818.m_HorizontalBearingY = i819[3]
  i818.m_HorizontalAdvance = i819[4]
  return i818
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i821 = data
  i820.m_X = i821[0]
  i820.m_Y = i821[1]
  i820.m_Width = i821[2]
  i820.m_Height = i821[3]
  return i820
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.TMP_Character' )
  var i825 = data
  i824.m_ElementType = i825[0]
  i824.m_Unicode = i825[1]
  i824.m_GlyphIndex = i825[2]
  i824.m_Scale = i825[3]
  return i824
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i830 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i831 = data
  i830.Name = i831[0]
  i830.PointSize = i831[1]
  i830.Scale = i831[2]
  i830.CharacterCount = i831[3]
  i830.LineHeight = i831[4]
  i830.Baseline = i831[5]
  i830.Ascender = i831[6]
  i830.CapHeight = i831[7]
  i830.Descender = i831[8]
  i830.CenterLine = i831[9]
  i830.SuperscriptOffset = i831[10]
  i830.SubscriptOffset = i831[11]
  i830.SubSize = i831[12]
  i830.Underline = i831[13]
  i830.UnderlineThickness = i831[14]
  i830.strikethrough = i831[15]
  i830.strikethroughThickness = i831[16]
  i830.TabWidth = i831[17]
  i830.Padding = i831[18]
  i830.AtlasWidth = i831[19]
  i830.AtlasHeight = i831[20]
  return i830
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i834 = root || request.c( 'TMPro.TMP_Glyph' )
  var i835 = data
  i834.id = i835[0]
  i834.x = i835[1]
  i834.y = i835[2]
  i834.width = i835[3]
  i834.height = i835[4]
  i834.xOffset = i835[5]
  i834.yOffset = i835[6]
  i834.xAdvance = i835[7]
  i834.scale = i835[8]
  return i834
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.KerningTable' )
  var i837 = data
  var i839 = i837[0]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i839.length; i += 1) {
    i838.add(request.d('TMPro.KerningPair', i839[i + 0]));
  }
  i836.kerningPairs = i838
  return i836
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.KerningPair' )
  var i843 = data
  i842.xOffset = i843[0]
  i842.m_FirstGlyph = i843[1]
  i842.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i843[2], i842.m_FirstGlyphAdjustments)
  i842.m_SecondGlyph = i843[3]
  i842.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i843[4], i842.m_SecondGlyphAdjustments)
  i842.m_IgnoreSpacingAdjustments = !!i843[5]
  return i842
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i845 = data
  var i847 = i845[0]
  var i846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i847.length; i += 1) {
    i846.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i847[i + 0]));
  }
  i844.m_GlyphPairAdjustmentRecords = i846
  return i844
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i851 = data
  i850.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i851[0], i850.m_FirstAdjustmentRecord)
  i850.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i851[1], i850.m_SecondAdjustmentRecord)
  i850.m_FeatureLookupFlags = i851[2]
  return i850
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i855 = data
  i854.sourceFontFileName = i855[0]
  i854.sourceFontFileGUID = i855[1]
  i854.pointSizeSamplingMode = i855[2]
  i854.pointSize = i855[3]
  i854.padding = i855[4]
  i854.packingMode = i855[5]
  i854.atlasWidth = i855[6]
  i854.atlasHeight = i855[7]
  i854.characterSetSelectionMode = i855[8]
  i854.characterSequence = i855[9]
  i854.referencedFontAssetGUID = i855[10]
  i854.referencedTextAssetGUID = i855[11]
  i854.fontStyle = i855[12]
  i854.fontStyleModifier = i855[13]
  i854.renderMode = i855[14]
  i854.includeFontFeatures = !!i855[15]
  return i854
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i858 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'regularTypeface')
  request.r(i859[2], i859[3], 0, i858, 'italicTypeface')
  return i858
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i860 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i861 = data
  i860.useSafeMode = !!i861[0]
  i860.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i861[1], i860.safeModeOptions)
  i860.timeScale = i861[2]
  i860.unscaledTimeScale = i861[3]
  i860.useSmoothDeltaTime = !!i861[4]
  i860.maxSmoothUnscaledTime = i861[5]
  i860.rewindCallbackMode = i861[6]
  i860.showUnityEditorReport = !!i861[7]
  i860.logBehaviour = i861[8]
  i860.drawGizmos = !!i861[9]
  i860.defaultRecyclable = !!i861[10]
  i860.defaultAutoPlay = i861[11]
  i860.defaultUpdateType = i861[12]
  i860.defaultTimeScaleIndependent = !!i861[13]
  i860.defaultEaseType = i861[14]
  i860.defaultEaseOvershootOrAmplitude = i861[15]
  i860.defaultEasePeriod = i861[16]
  i860.defaultAutoKill = !!i861[17]
  i860.defaultLoopType = i861[18]
  i860.debugMode = !!i861[19]
  i860.debugStoreTargetId = !!i861[20]
  i860.showPreviewPanel = !!i861[21]
  i860.storeSettingsLocation = i861[22]
  i860.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i861[23], i860.modules)
  i860.createASMDEF = !!i861[24]
  i860.showPlayingTweens = !!i861[25]
  i860.showPausedTweens = !!i861[26]
  return i860
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i862 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i863 = data
  i862.logBehaviour = i863[0]
  i862.nestedTweenFailureBehaviour = i863[1]
  return i862
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i864 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i865 = data
  i864.showPanel = !!i865[0]
  i864.audioEnabled = !!i865[1]
  i864.physicsEnabled = !!i865[2]
  i864.physics2DEnabled = !!i865[3]
  i864.spriteEnabled = !!i865[4]
  i864.uiEnabled = !!i865[5]
  i864.textMeshProEnabled = !!i865[6]
  i864.tk2DEnabled = !!i865[7]
  i864.deAudioEnabled = !!i865[8]
  i864.deUnityExtendedEnabled = !!i865[9]
  i864.epoOutlineEnabled = !!i865[10]
  return i864
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.TMP_Settings' )
  var i867 = data
  i866.m_enableWordWrapping = !!i867[0]
  i866.m_enableKerning = !!i867[1]
  i866.m_enableExtraPadding = !!i867[2]
  i866.m_enableTintAllSprites = !!i867[3]
  i866.m_enableParseEscapeCharacters = !!i867[4]
  i866.m_EnableRaycastTarget = !!i867[5]
  i866.m_GetFontFeaturesAtRuntime = !!i867[6]
  i866.m_missingGlyphCharacter = i867[7]
  i866.m_warningsDisabled = !!i867[8]
  request.r(i867[9], i867[10], 0, i866, 'm_defaultFontAsset')
  i866.m_defaultFontAssetPath = i867[11]
  i866.m_defaultFontSize = i867[12]
  i866.m_defaultAutoSizeMinRatio = i867[13]
  i866.m_defaultAutoSizeMaxRatio = i867[14]
  i866.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i867[15], i867[16] )
  i866.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i867[17], i867[18] )
  i866.m_autoSizeTextContainer = !!i867[19]
  i866.m_IsTextObjectScaleStatic = !!i867[20]
  var i869 = i867[21]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 1, i868, '')
  }
  i866.m_fallbackFontAssets = i868
  i866.m_matchMaterialPreset = !!i867[22]
  request.r(i867[23], i867[24], 0, i866, 'm_defaultSpriteAsset')
  i866.m_defaultSpriteAssetPath = i867[25]
  i866.m_enableEmojiSupport = !!i867[26]
  i866.m_MissingCharacterSpriteUnicode = i867[27]
  i866.m_defaultColorGradientPresetsPath = i867[28]
  request.r(i867[29], i867[30], 0, i866, 'm_defaultStyleSheet')
  i866.m_StyleSheetsResourcePath = i867[31]
  request.r(i867[32], i867[33], 0, i866, 'm_leadingCharacters')
  request.r(i867[34], i867[35], 0, i866, 'm_followingCharacters')
  i866.m_UseModernHangulLineBreakingRules = !!i867[36]
  return i866
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i871 = data
  i870.m_GlyphIndex = i871[0]
  i870.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i871[1], i870.m_GlyphValueRecord)
  return i870
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i872 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i873 = data
  i872.m_XPlacement = i873[0]
  i872.m_YPlacement = i873[1]
  i872.m_XAdvance = i873[2]
  i872.m_YAdvance = i873[3]
  return i872
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[3],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[3],"76":[77],"78":[79],"80":[79],"9":[8],"81":[82],"83":[84],"85":[82],"86":[8],"87":[8],"11":[9],"18":[19,8],"88":[8],"10":[9],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"34":[8],"96":[8],"16":[19,8],"97":[8],"98":[8],"99":[8],"100":[8],"101":[19,8],"102":[8],"103":[6],"104":[6],"7":[6],"105":[6],"106":[3],"107":[3],"108":[109],"110":[3],"111":[112],"113":[8],"114":[19,8],"115":[77],"26":[19,8],"116":[117,77],"118":[77],"119":[77,120],"121":[54],"122":[62],"123":[112],"124":[125],"126":[8],"127":[77,8],"17":[8,19],"128":[8],"129":[19,8],"130":[77],"131":[19,8],"132":[8],"133":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","ClickItem","UnityEngine.CanvasGroup","DragID","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","MixSkeletonSkin","DropID","UnityEngine.PolygonCollider2D","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "295.1";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BMTP_V01_NgocBTU_AnhPD";

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

Deserializers.buildID = "268ec95f-35df-4adf-92cb-1d006287c4c5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

