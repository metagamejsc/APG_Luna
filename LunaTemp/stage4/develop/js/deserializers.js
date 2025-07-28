var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointSpring' )
  var i459 = data
  i458.spring = i459[0]
  i458.damper = i459[1]
  i458.targetPosition = i459[2]
  return i458
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.JointMotor' )
  var i461 = data
  i460.m_TargetVelocity = i461[0]
  i460.m_Force = i461[1]
  i460.m_FreeSpin = i461[2]
  return i460
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.JointLimits' )
  var i463 = data
  i462.m_Min = i463[0]
  i462.m_Max = i463[1]
  i462.m_Bounciness = i463[2]
  i462.m_BounceMinVelocity = i463[3]
  i462.m_ContactDistance = i463[4]
  i462.minBounce = i463[5]
  i462.maxBounce = i463[6]
  return i462
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.JointDrive' )
  var i465 = data
  i464.m_PositionSpring = i465[0]
  i464.m_PositionDamper = i465[1]
  i464.m_MaximumForce = i465[2]
  i464.m_UseAcceleration = i465[3]
  return i464
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i467 = data
  i466.m_Spring = i467[0]
  i466.m_Damper = i467[1]
  return i466
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i469 = data
  i468.m_Limit = i469[0]
  i468.m_Bounciness = i469[1]
  i468.m_ContactDistance = i469[2]
  return i468
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i471 = data
  i470.m_ExtremumSlip = i471[0]
  i470.m_ExtremumValue = i471[1]
  i470.m_AsymptoteSlip = i471[2]
  i470.m_AsymptoteValue = i471[3]
  i470.m_Stiffness = i471[4]
  return i470
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i473 = data
  i472.m_LowerAngle = i473[0]
  i472.m_UpperAngle = i473[1]
  return i472
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i475 = data
  i474.m_MotorSpeed = i475[0]
  i474.m_MaximumMotorTorque = i475[1]
  return i474
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i477 = data
  i476.m_DampingRatio = i477[0]
  i476.m_Frequency = i477[1]
  i476.m_Angle = i477[2]
  return i476
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i479 = data
  i478.m_LowerTranslation = i479[0]
  i478.m_UpperTranslation = i479[1]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i481 = data
  i480.name = i481[0]
  i480.width = i481[1]
  i480.height = i481[2]
  i480.mipmapCount = i481[3]
  i480.anisoLevel = i481[4]
  i480.filterMode = i481[5]
  i480.hdr = !!i481[6]
  i480.format = i481[7]
  i480.wrapMode = i481[8]
  i480.alphaIsTransparency = !!i481[9]
  i480.alphaSource = i481[10]
  i480.graphicsFormat = i481[11]
  i480.sRGBTexture = !!i481[12]
  i480.desiredColorSpace = i481[13]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i482 = root || new pc.UnityMaterial()
  var i483 = data
  i482.name = i483[0]
  request.r(i483[1], i483[2], 0, i482, 'shader')
  i482.renderQueue = i483[3]
  i482.enableInstancing = !!i483[4]
  var i485 = i483[5]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i485[i + 0]) );
  }
  i482.floatParameters = i484
  var i487 = i483[6]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i487[i + 0]) );
  }
  i482.colorParameters = i486
  var i489 = i483[7]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i489[i + 0]) );
  }
  i482.vectorParameters = i488
  var i491 = i483[8]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i491[i + 0]) );
  }
  i482.textureParameters = i490
  var i493 = i483[9]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i493[i + 0]) );
  }
  i482.materialFlags = i492
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i497 = data
  i496.name = i497[0]
  i496.value = i497[1]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i501 = data
  i500.name = i501[0]
  i500.value = new pc.Color(i501[1], i501[2], i501[3], i501[4])
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i505 = data
  i504.name = i505[0]
  i504.value = new pc.Vec4( i505[1], i505[2], i505[3], i505[4] )
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i509 = data
  i508.name = i509[0]
  request.r(i509[1], i509[2], 0, i508, 'value')
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i513 = data
  i512.name = i513[0]
  i512.enabled = !!i513[1]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i515 = data
  i514.name = i515[0]
  i514.index = i515[1]
  i514.startup = !!i515[2]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i517 = data
  i516.position = new pc.Vec3( i517[0], i517[1], i517[2] )
  i516.scale = new pc.Vec3( i517[3], i517[4], i517[5] )
  i516.rotation = new pc.Quat(i517[6], i517[7], i517[8], i517[9])
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i519 = data
  i518.enabled = !!i519[0]
  i518.aspect = i519[1]
  i518.orthographic = !!i519[2]
  i518.orthographicSize = i519[3]
  i518.backgroundColor = new pc.Color(i519[4], i519[5], i519[6], i519[7])
  i518.nearClipPlane = i519[8]
  i518.farClipPlane = i519[9]
  i518.fieldOfView = i519[10]
  i518.depth = i519[11]
  i518.clearFlags = i519[12]
  i518.cullingMask = i519[13]
  i518.rect = i519[14]
  request.r(i519[15], i519[16], 0, i518, 'targetTexture')
  i518.usePhysicalProperties = !!i519[17]
  i518.focalLength = i519[18]
  i518.sensorSize = new pc.Vec2( i519[19], i519[20] )
  i518.lensShift = new pc.Vec2( i519[21], i519[22] )
  i518.gateFit = i519[23]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i521 = data
  i520.name = i521[0]
  i520.tagId = i521[1]
  i520.enabled = !!i521[2]
  i520.isStatic = !!i521[3]
  i520.layer = i521[4]
  return i520
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i523 = data
  request.r(i523[0], i523[1], 0, i522, 'm_FirstSelected')
  i522.m_sendNavigationEvents = !!i523[2]
  i522.m_DragThreshold = i523[3]
  return i522
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i525 = data
  i524.m_HorizontalAxis = i525[0]
  i524.m_VerticalAxis = i525[1]
  i524.m_SubmitButton = i525[2]
  i524.m_CancelButton = i525[3]
  i524.m_InputActionsPerSecond = i525[4]
  i524.m_RepeatDelay = i525[5]
  i524.m_ForceModuleActive = !!i525[6]
  i524.m_SendPointerHoverToParent = !!i525[7]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i527 = data
  i526.pivot = new pc.Vec2( i527[0], i527[1] )
  i526.anchorMin = new pc.Vec2( i527[2], i527[3] )
  i526.anchorMax = new pc.Vec2( i527[4], i527[5] )
  i526.sizeDelta = new pc.Vec2( i527[6], i527[7] )
  i526.anchoredPosition3D = new pc.Vec3( i527[8], i527[9], i527[10] )
  i526.rotation = new pc.Quat(i527[11], i527[12], i527[13], i527[14])
  i526.scale = new pc.Vec3( i527[15], i527[16], i527[17] )
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i529 = data
  i528.enabled = !!i529[0]
  i528.planeDistance = i529[1]
  i528.referencePixelsPerUnit = i529[2]
  i528.isFallbackOverlay = !!i529[3]
  i528.renderMode = i529[4]
  i528.renderOrder = i529[5]
  i528.sortingLayerName = i529[6]
  i528.sortingOrder = i529[7]
  i528.scaleFactor = i529[8]
  request.r(i529[9], i529[10], 0, i528, 'worldCamera')
  i528.overrideSorting = !!i529[11]
  i528.pixelPerfect = !!i529[12]
  i528.targetDisplay = i529[13]
  i528.overridePixelPerfect = !!i529[14]
  return i528
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i531 = data
  i530.m_UiScaleMode = i531[0]
  i530.m_ReferencePixelsPerUnit = i531[1]
  i530.m_ScaleFactor = i531[2]
  i530.m_ReferenceResolution = new pc.Vec2( i531[3], i531[4] )
  i530.m_ScreenMatchMode = i531[5]
  i530.m_MatchWidthOrHeight = i531[6]
  i530.m_PhysicalUnit = i531[7]
  i530.m_FallbackScreenDPI = i531[8]
  i530.m_DefaultSpriteDPI = i531[9]
  i530.m_DynamicPixelsPerUnit = i531[10]
  i530.m_PresetInfoIsWorld = !!i531[11]
  return i530
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i533 = data
  i532.m_IgnoreReversedGraphics = !!i533[0]
  i532.m_BlockingObjects = i533[1]
  i532.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i533[2] )
  return i532
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i534 = root || request.c( 'LunaManager' )
  var i535 = data
  var i537 = i535[0]
  var i536 = []
  for(var i = 0; i < i537.length; i += 2) {
  request.r(i537[i + 0], i537[i + 1], 2, i536, '')
  }
  i534.lstBtnInstall = i536
  request.r(i535[1], i535[2], 0, i534, 'EndCard')
  request.r(i535[3], i535[4], 0, i534, 'hand')
  i534.countPlay = i535[5]
  i534.countPlayFinal = i535[6]
  i534.timeDropFinal = i535[7]
  i534.colorBG = new pc.Color(i535[8], i535[9], i535[10], i535[11])
  request.r(i535[12], i535[13], 0, i534, 'texture2D')
  request.r(i535[14], i535[15], 0, i534, 'rawImageBG')
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i541 = data
  i540.cullTransparentMesh = !!i541[0]
  return i540
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'm_Texture')
  i542.m_UVRect = UnityEngine.Rect.MinMaxRect(i543[2], i543[3], i543[4], i543[5])
  request.r(i543[6], i543[7], 0, i542, 'm_Material')
  i542.m_Maskable = !!i543[8]
  i542.m_Color = new pc.Color(i543[9], i543[10], i543[11], i543[12])
  i542.m_RaycastTarget = !!i543[13]
  i542.m_RaycastPadding = new pc.Vec4( i543[14], i543[15], i543[16], i543[17] )
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'clip')
  request.r(i545[2], i545[3], 0, i544, 'outputAudioMixerGroup')
  i544.playOnAwake = !!i545[4]
  i544.loop = !!i545[5]
  i544.time = i545[6]
  i544.volume = i545[7]
  i544.pitch = i545[8]
  i544.enabled = !!i545[9]
  return i544
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.UI.Image' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'm_Sprite')
  i546.m_Type = i547[2]
  i546.m_PreserveAspect = !!i547[3]
  i546.m_FillCenter = !!i547[4]
  i546.m_FillMethod = i547[5]
  i546.m_FillAmount = i547[6]
  i546.m_FillClockwise = !!i547[7]
  i546.m_FillOrigin = i547[8]
  i546.m_UseSpriteMesh = !!i547[9]
  i546.m_PixelsPerUnitMultiplier = i547[10]
  request.r(i547[11], i547[12], 0, i546, 'm_Material')
  i546.m_Maskable = !!i547[13]
  i546.m_Color = new pc.Color(i547[14], i547[15], i547[16], i547[17])
  i546.m_RaycastTarget = !!i547[18]
  i546.m_RaycastPadding = new pc.Vec4( i547[19], i547[20], i547[21], i547[22] )
  return i546
}

Deserializers["DropZone"] = function (request, data, root) {
  var i548 = root || request.c( 'DropZone' )
  var i549 = data
  i548.idDrop = i549[0]
  var i551 = i549[1]
  var i550 = []
  for(var i = 0; i < i551.length; i += 2) {
  request.r(i551[i + 0], i551[i + 1], 2, i550, '')
  }
  i548.steps = i550
  i548.isDontWork = !!i549[2]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i555 = data
  i554.usedByComposite = !!i555[0]
  i554.autoTiling = !!i555[1]
  i554.size = new pc.Vec2( i555[2], i555[3] )
  i554.edgeRadius = i555[4]
  i554.enabled = !!i555[5]
  i554.isTrigger = !!i555[6]
  i554.usedByEffector = !!i555[7]
  i554.density = i555[8]
  i554.offset = new pc.Vec2( i555[9], i555[10] )
  request.r(i555[11], i555[12], 0, i554, 'material')
  return i554
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.UI.Button' )
  var i557 = data
  i556.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i557[0], i556.m_OnClick)
  i556.m_Navigation = request.d('UnityEngine.UI.Navigation', i557[1], i556.m_Navigation)
  i556.m_Transition = i557[2]
  i556.m_Colors = request.d('UnityEngine.UI.ColorBlock', i557[3], i556.m_Colors)
  i556.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i557[4], i556.m_SpriteState)
  i556.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i557[5], i556.m_AnimationTriggers)
  i556.m_Interactable = !!i557[6]
  request.r(i557[7], i557[8], 0, i556, 'm_TargetGraphic')
  return i556
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i559 = data
  i558.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i559[0], i558.m_PersistentCalls)
  return i558
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i561 = data
  var i563 = i561[0]
  var i562 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i563.length; i += 1) {
    i562.add(request.d('UnityEngine.Events.PersistentCall', i563[i + 0]));
  }
  i560.m_Calls = i562
  return i560
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'm_Target')
  i566.m_TargetAssemblyTypeName = i567[2]
  i566.m_MethodName = i567[3]
  i566.m_Mode = i567[4]
  i566.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i567[5], i566.m_Arguments)
  i566.m_CallState = i567[6]
  return i566
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'm_ObjectArgument')
  i568.m_ObjectArgumentAssemblyTypeName = i569[2]
  i568.m_IntArgument = i569[3]
  i568.m_FloatArgument = i569[4]
  i568.m_StringArgument = i569[5]
  i568.m_BoolArgument = !!i569[6]
  return i568
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i571 = data
  i570.m_Mode = i571[0]
  i570.m_WrapAround = !!i571[1]
  request.r(i571[2], i571[3], 0, i570, 'm_SelectOnUp')
  request.r(i571[4], i571[5], 0, i570, 'm_SelectOnDown')
  request.r(i571[6], i571[7], 0, i570, 'm_SelectOnLeft')
  request.r(i571[8], i571[9], 0, i570, 'm_SelectOnRight')
  return i570
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i573 = data
  i572.m_NormalColor = new pc.Color(i573[0], i573[1], i573[2], i573[3])
  i572.m_HighlightedColor = new pc.Color(i573[4], i573[5], i573[6], i573[7])
  i572.m_PressedColor = new pc.Color(i573[8], i573[9], i573[10], i573[11])
  i572.m_SelectedColor = new pc.Color(i573[12], i573[13], i573[14], i573[15])
  i572.m_DisabledColor = new pc.Color(i573[16], i573[17], i573[18], i573[19])
  i572.m_ColorMultiplier = i573[20]
  i572.m_FadeDuration = i573[21]
  return i572
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i575 = data
  request.r(i575[0], i575[1], 0, i574, 'm_HighlightedSprite')
  request.r(i575[2], i575[3], 0, i574, 'm_PressedSprite')
  request.r(i575[4], i575[5], 0, i574, 'm_SelectedSprite')
  request.r(i575[6], i575[7], 0, i574, 'm_DisabledSprite')
  return i574
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i577 = data
  i576.m_NormalTrigger = i577[0]
  i576.m_HighlightedTrigger = i577[1]
  i576.m_PressedTrigger = i577[2]
  i576.m_SelectedTrigger = i577[3]
  i576.m_DisabledTrigger = i577[4]
  return i576
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i578 = root || request.c( 'ClickItem' )
  var i579 = data
  i578.isPhone = !!i579[0]
  var i581 = i579[1]
  var i580 = []
  for(var i = 0; i < i581.length; i += 2) {
  request.r(i581[i + 0], i581[i + 1], 2, i580, '')
  }
  i578.steps = i580
  i578.currentStep = i579[2]
  return i578
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
  request.r(i583[34], i583[35], 0, i582, 'm_Material')
  i582.m_Maskable = !!i583[36]
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

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i600 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i601 = data
  i600.targetIsSelf = !!i601[0]
  request.r(i601[1], i601[2], 0, i600, 'targetGO')
  i600.tweenTargetIsTargetGO = !!i601[3]
  i600.delay = i601[4]
  i600.duration = i601[5]
  i600.easeType = i601[6]
  i600.easeCurve = new pc.AnimationCurve( { keys_flow: i601[7] } )
  i600.loopType = i601[8]
  i600.loops = i601[9]
  i600.id = i601[10]
  i600.isRelative = !!i601[11]
  i600.isFrom = !!i601[12]
  i600.isIndependentUpdate = !!i601[13]
  i600.autoKill = !!i601[14]
  i600.autoGenerate = !!i601[15]
  i600.isActive = !!i601[16]
  i600.isValid = !!i601[17]
  request.r(i601[18], i601[19], 0, i600, 'target')
  i600.animationType = i601[20]
  i600.targetType = i601[21]
  i600.forcedTargetType = i601[22]
  i600.autoPlay = !!i601[23]
  i600.useTargetAsV3 = !!i601[24]
  i600.endValueFloat = i601[25]
  i600.endValueV3 = new pc.Vec3( i601[26], i601[27], i601[28] )
  i600.endValueV2 = new pc.Vec2( i601[29], i601[30] )
  i600.endValueColor = new pc.Color(i601[31], i601[32], i601[33], i601[34])
  i600.endValueString = i601[35]
  i600.endValueRect = UnityEngine.Rect.MinMaxRect(i601[36], i601[37], i601[38], i601[39])
  request.r(i601[40], i601[41], 0, i600, 'endValueTransform')
  i600.optionalBool0 = !!i601[42]
  i600.optionalBool1 = !!i601[43]
  i600.optionalFloat0 = i601[44]
  i600.optionalInt0 = i601[45]
  i600.optionalRotationMode = i601[46]
  i600.optionalScrambleMode = i601[47]
  i600.optionalShakeRandomnessMode = i601[48]
  i600.optionalString = i601[49]
  i600.updateType = i601[50]
  i600.isSpeedBased = !!i601[51]
  i600.hasOnStart = !!i601[52]
  i600.hasOnPlay = !!i601[53]
  i600.hasOnUpdate = !!i601[54]
  i600.hasOnStepComplete = !!i601[55]
  i600.hasOnComplete = !!i601[56]
  i600.hasOnTweenCreated = !!i601[57]
  i600.hasOnRewind = !!i601[58]
  i600.onStart = request.d('UnityEngine.Events.UnityEvent', i601[59], i600.onStart)
  i600.onPlay = request.d('UnityEngine.Events.UnityEvent', i601[60], i600.onPlay)
  i600.onUpdate = request.d('UnityEngine.Events.UnityEvent', i601[61], i600.onUpdate)
  i600.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i601[62], i600.onStepComplete)
  i600.onComplete = request.d('UnityEngine.Events.UnityEvent', i601[63], i600.onComplete)
  i600.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i601[64], i600.onTweenCreated)
  i600.onRewind = request.d('UnityEngine.Events.UnityEvent', i601[65], i600.onRewind)
  return i600
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i603 = data
  i602.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i603[0], i602.m_PersistentCalls)
  return i602
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i604 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i605 = data
  i604.m_hasFontAssetChanged = !!i605[0]
  request.r(i605[1], i605[2], 0, i604, 'm_baseMaterial')
  i604.m_maskOffset = new pc.Vec4( i605[3], i605[4], i605[5], i605[6] )
  i604.m_text = i605[7]
  i604.m_isRightToLeft = !!i605[8]
  request.r(i605[9], i605[10], 0, i604, 'm_fontAsset')
  request.r(i605[11], i605[12], 0, i604, 'm_sharedMaterial')
  var i607 = i605[13]
  var i606 = []
  for(var i = 0; i < i607.length; i += 2) {
  request.r(i607[i + 0], i607[i + 1], 2, i606, '')
  }
  i604.m_fontSharedMaterials = i606
  request.r(i605[14], i605[15], 0, i604, 'm_fontMaterial')
  var i609 = i605[16]
  var i608 = []
  for(var i = 0; i < i609.length; i += 2) {
  request.r(i609[i + 0], i609[i + 1], 2, i608, '')
  }
  i604.m_fontMaterials = i608
  i604.m_fontColor32 = UnityEngine.Color32.ConstructColor(i605[17], i605[18], i605[19], i605[20])
  i604.m_fontColor = new pc.Color(i605[21], i605[22], i605[23], i605[24])
  i604.m_enableVertexGradient = !!i605[25]
  i604.m_colorMode = i605[26]
  i604.m_fontColorGradient = request.d('TMPro.VertexGradient', i605[27], i604.m_fontColorGradient)
  request.r(i605[28], i605[29], 0, i604, 'm_fontColorGradientPreset')
  request.r(i605[30], i605[31], 0, i604, 'm_spriteAsset')
  i604.m_tintAllSprites = !!i605[32]
  request.r(i605[33], i605[34], 0, i604, 'm_StyleSheet')
  i604.m_TextStyleHashCode = i605[35]
  i604.m_overrideHtmlColors = !!i605[36]
  i604.m_faceColor = UnityEngine.Color32.ConstructColor(i605[37], i605[38], i605[39], i605[40])
  i604.m_fontSize = i605[41]
  i604.m_fontSizeBase = i605[42]
  i604.m_fontWeight = i605[43]
  i604.m_enableAutoSizing = !!i605[44]
  i604.m_fontSizeMin = i605[45]
  i604.m_fontSizeMax = i605[46]
  i604.m_fontStyle = i605[47]
  i604.m_HorizontalAlignment = i605[48]
  i604.m_VerticalAlignment = i605[49]
  i604.m_textAlignment = i605[50]
  i604.m_characterSpacing = i605[51]
  i604.m_wordSpacing = i605[52]
  i604.m_lineSpacing = i605[53]
  i604.m_lineSpacingMax = i605[54]
  i604.m_paragraphSpacing = i605[55]
  i604.m_charWidthMaxAdj = i605[56]
  i604.m_enableWordWrapping = !!i605[57]
  i604.m_wordWrappingRatios = i605[58]
  i604.m_overflowMode = i605[59]
  request.r(i605[60], i605[61], 0, i604, 'm_linkedTextComponent')
  request.r(i605[62], i605[63], 0, i604, 'parentLinkedComponent')
  i604.m_enableKerning = !!i605[64]
  i604.m_enableExtraPadding = !!i605[65]
  i604.checkPaddingRequired = !!i605[66]
  i604.m_isRichText = !!i605[67]
  i604.m_parseCtrlCharacters = !!i605[68]
  i604.m_isOrthographic = !!i605[69]
  i604.m_isCullingEnabled = !!i605[70]
  i604.m_horizontalMapping = i605[71]
  i604.m_verticalMapping = i605[72]
  i604.m_uvLineOffset = i605[73]
  i604.m_geometrySortingOrder = i605[74]
  i604.m_IsTextObjectScaleStatic = !!i605[75]
  i604.m_VertexBufferAutoSizeReduction = !!i605[76]
  i604.m_useMaxVisibleDescender = !!i605[77]
  i604.m_pageToDisplay = i605[78]
  i604.m_margin = new pc.Vec4( i605[79], i605[80], i605[81], i605[82] )
  i604.m_isUsingLegacyAnimationComponent = !!i605[83]
  i604.m_isVolumetricText = !!i605[84]
  request.r(i605[85], i605[86], 0, i604, 'm_Material')
  i604.m_Maskable = !!i605[87]
  i604.m_Color = new pc.Color(i605[88], i605[89], i605[90], i605[91])
  i604.m_RaycastTarget = !!i605[92]
  i604.m_RaycastPadding = new pc.Vec4( i605[93], i605[94], i605[95], i605[96] )
  return i604
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i612 = root || request.c( 'TMPro.VertexGradient' )
  var i613 = data
  i612.topLeft = new pc.Color(i613[0], i613[1], i613[2], i613[3])
  i612.topRight = new pc.Color(i613[4], i613[5], i613[6], i613[7])
  i612.bottomLeft = new pc.Color(i613[8], i613[9], i613[10], i613[11])
  i612.bottomRight = new pc.Color(i613[12], i613[13], i613[14], i613[15])
  return i612
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i614 = root || request.c( 'DraggableItem' )
  var i615 = data
  i614.idDrag = i615[0]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i617 = data
  i616.m_Alpha = i617[0]
  i616.m_Interactable = !!i617[1]
  i616.m_BlocksRaycasts = !!i617[2]
  i616.m_IgnoreParentGroups = !!i617[3]
  i616.enabled = !!i617[4]
  return i616
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i619 = data
  i618.m_Spacing = i619[0]
  i618.m_ChildForceExpandWidth = !!i619[1]
  i618.m_ChildForceExpandHeight = !!i619[2]
  i618.m_ChildControlWidth = !!i619[3]
  i618.m_ChildControlHeight = !!i619[4]
  i618.m_ChildScaleWidth = !!i619[5]
  i618.m_ChildScaleHeight = !!i619[6]
  i618.m_ReverseArrangement = !!i619[7]
  i618.m_Padding = UnityEngine.RectOffset.FromPaddings(i619[8], i619[9], i619[10], i619[11])
  i618.m_ChildAlignment = i619[12]
  return i618
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.Mask' )
  var i621 = data
  i620.m_ShowMaskGraphic = !!i621[0]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i623 = data
  i622.ambientIntensity = i623[0]
  i622.reflectionIntensity = i623[1]
  i622.ambientMode = i623[2]
  i622.ambientLight = new pc.Color(i623[3], i623[4], i623[5], i623[6])
  i622.ambientSkyColor = new pc.Color(i623[7], i623[8], i623[9], i623[10])
  i622.ambientGroundColor = new pc.Color(i623[11], i623[12], i623[13], i623[14])
  i622.ambientEquatorColor = new pc.Color(i623[15], i623[16], i623[17], i623[18])
  i622.fogColor = new pc.Color(i623[19], i623[20], i623[21], i623[22])
  i622.fogEndDistance = i623[23]
  i622.fogStartDistance = i623[24]
  i622.fogDensity = i623[25]
  i622.fog = !!i623[26]
  request.r(i623[27], i623[28], 0, i622, 'skybox')
  i622.fogMode = i623[29]
  var i625 = i623[30]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i625[i + 0]) );
  }
  i622.lightmaps = i624
  i622.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i623[31], i622.lightProbes)
  i622.lightmapsMode = i623[32]
  i622.mixedBakeMode = i623[33]
  i622.environmentLightingMode = i623[34]
  i622.ambientProbe = new pc.SphericalHarmonicsL2(i623[35])
  i622.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i623[36])
  i622.useReferenceAmbientProbe = !!i623[37]
  request.r(i623[38], i623[39], 0, i622, 'customReflection')
  request.r(i623[40], i623[41], 0, i622, 'defaultReflection')
  i622.defaultReflectionMode = i623[42]
  i622.defaultReflectionResolution = i623[43]
  i622.sunLightObjectId = i623[44]
  i622.pixelLightCount = i623[45]
  i622.defaultReflectionHDR = !!i623[46]
  i622.hasLightDataAsset = !!i623[47]
  i622.hasManualGenerate = !!i623[48]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'lightmapColor')
  request.r(i629[2], i629[3], 0, i628, 'lightmapDirection')
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i630 = root || new UnityEngine.LightProbes()
  var i631 = data
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i639 = data
  var i641 = i639[0]
  var i640 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i641.length; i += 1) {
    i640.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i641[i + 0]));
  }
  i638.ShaderCompilationErrors = i640
  i638.name = i639[1]
  i638.guid = i639[2]
  var i643 = i639[3]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( i643[i + 0] );
  }
  i638.shaderDefinedKeywords = i642
  var i645 = i639[4]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i645[i + 0]) );
  }
  i638.passes = i644
  var i647 = i639[5]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i647[i + 0]) );
  }
  i638.usePasses = i646
  var i649 = i639[6]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i649[i + 0]) );
  }
  i638.defaultParameterValues = i648
  request.r(i639[7], i639[8], 0, i638, 'unityFallbackShader')
  i638.readDepth = !!i639[9]
  i638.isCreatedByShaderGraph = !!i639[10]
  i638.usedBatchUniforms = i639[11]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i653 = data
  i652.shaderName = i653[0]
  i652.errorMessage = i653[1]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i656 = root || new pc.UnityShaderPass()
  var i657 = data
  i656.id = i657[0]
  i656.subShaderIndex = i657[1]
  i656.name = i657[2]
  i656.passType = i657[3]
  i656.grabPassTextureName = i657[4]
  i656.usePass = !!i657[5]
  i656.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i657[6], i656.zTest)
  i656.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i657[7], i656.zWrite)
  i656.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i657[8], i656.culling)
  i656.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i657[9], i656.blending)
  i656.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i657[10], i656.alphaBlending)
  i656.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i657[11], i656.colorWriteMask)
  i656.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i657[12], i656.offsetUnits)
  i656.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i657[13], i656.offsetFactor)
  i656.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i657[14], i656.stencilRef)
  i656.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i657[15], i656.stencilReadMask)
  i656.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i657[16], i656.stencilWriteMask)
  i656.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i657[17], i656.stencilOp)
  i656.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i657[18], i656.stencilOpFront)
  i656.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i657[19], i656.stencilOpBack)
  var i659 = i657[20]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i659[i + 0]) );
  }
  i656.tags = i658
  var i661 = i657[21]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( i661[i + 0] );
  }
  i656.passDefinedKeywords = i660
  var i663 = i657[22]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i663[i + 0]) );
  }
  i656.passDefinedKeywordGroups = i662
  var i665 = i657[23]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i665[i + 0]) );
  }
  i656.variants = i664
  var i667 = i657[24]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i667[i + 0]) );
  }
  i656.excludedVariants = i666
  i656.hasDepthReader = !!i657[25]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i669 = data
  i668.val = i669[0]
  i668.name = i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i671 = data
  i670.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[0], i670.src)
  i670.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[1], i670.dst)
  i670.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[2], i670.op)
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i673 = data
  i672.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[0], i672.pass)
  i672.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[1], i672.fail)
  i672.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[2], i672.zFail)
  i672.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[3], i672.comp)
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i677 = data
  i676.name = i677[0]
  i676.value = i677[1]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i681 = data
  var i683 = i681[0]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( i683[i + 0] );
  }
  i680.keywords = i682
  i680.hasDiscard = !!i681[1]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i687 = data
  i686.passId = i687[0]
  i686.subShaderIndex = i687[1]
  var i689 = i687[2]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( i689[i + 0] );
  }
  i686.keywords = i688
  i686.vertexProgram = i687[3]
  i686.fragmentProgram = i687[4]
  i686.compiledForWebGL2 = !!i687[5]
  i686.readDepth = !!i687[6]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'shader')
  i692.pass = i693[2]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i697 = data
  i696.name = i697[0]
  i696.type = i697[1]
  i696.value = new pc.Vec4( i697[2], i697[3], i697[4], i697[5] )
  i696.textureValue = i697[6]
  i696.shaderPropertyFlag = i697[7]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i699 = data
  i698.name = i699[0]
  request.r(i699[1], i699[2], 0, i698, 'texture')
  i698.aabb = i699[3]
  i698.vertices = i699[4]
  i698.triangles = i699[5]
  i698.textureRect = UnityEngine.Rect.MinMaxRect(i699[6], i699[7], i699[8], i699[9])
  i698.packedRect = UnityEngine.Rect.MinMaxRect(i699[10], i699[11], i699[12], i699[13])
  i698.border = new pc.Vec4( i699[14], i699[15], i699[16], i699[17] )
  i698.transparency = i699[18]
  i698.bounds = i699[19]
  i698.pixelsPerUnit = i699[20]
  i698.textureWidth = i699[21]
  i698.textureHeight = i699[22]
  i698.nativeSize = new pc.Vec2( i699[23], i699[24] )
  i698.pivot = new pc.Vec2( i699[25], i699[26] )
  i698.textureRectOffset = new pc.Vec2( i699[27], i699[28] )
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i701 = data
  i700.name = i701[0]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i703 = data
  i702.name = i703[0]
  i702.ascent = i703[1]
  i702.originalLineHeight = i703[2]
  i702.fontSize = i703[3]
  var i705 = i703[4]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i705[i + 0]) );
  }
  i702.characterInfo = i704
  request.r(i703[5], i703[6], 0, i702, 'texture')
  i702.originalFontSize = i703[7]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i709 = data
  i708.index = i709[0]
  i708.advance = i709[1]
  i708.bearing = i709[2]
  i708.glyphWidth = i709[3]
  i708.glyphHeight = i709[4]
  i708.minX = i709[5]
  i708.maxX = i709[6]
  i708.minY = i709[7]
  i708.maxY = i709[8]
  i708.uvBottomLeftX = i709[9]
  i708.uvBottomLeftY = i709[10]
  i708.uvBottomRightX = i709[11]
  i708.uvBottomRightY = i709[12]
  i708.uvTopLeftX = i709[13]
  i708.uvTopLeftY = i709[14]
  i708.uvTopRightX = i709[15]
  i708.uvTopRightY = i709[16]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i711 = data
  i710.name = i711[0]
  i710.bytes64 = i711[1]
  i710.data = i711[2]
  return i710
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i712 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i713 = data
  var i715 = i713[0]
  var i714 = []
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 2, i714, '')
  }
  i712.atlasAssets = i714
  i712.scale = i713[1]
  request.r(i713[2], i713[3], 0, i712, 'skeletonJSON')
  i712.isUpgradingBlendModeMaterials = !!i713[4]
  i712.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i713[5], i712.blendModeMaterials)
  var i717 = i713[6]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 1, i716, '')
  }
  i712.skeletonDataModifiers = i716
  var i719 = i713[7]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( i719[i + 0] );
  }
  i712.fromAnimation = i718
  var i721 = i713[8]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( i721[i + 0] );
  }
  i712.toAnimation = i720
  i712.duration = i713[9]
  i712.defaultMix = i713[10]
  request.r(i713[11], i713[12], 0, i712, 'controller')
  return i712
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i724 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i725 = data
  i724.applyAdditiveMaterial = !!i725[0]
  var i727 = i725[1]
  var i726 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i727.length; i += 1) {
    i726.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i727[i + 0]));
  }
  i724.additiveMaterials = i726
  var i729 = i725[2]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i729.length; i += 1) {
    i728.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i729[i + 0]));
  }
  i724.multiplyMaterials = i728
  var i731 = i725[3]
  var i730 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i731.length; i += 1) {
    i730.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i731[i + 0]));
  }
  i724.screenMaterials = i730
  i724.requiresBlendModeMaterials = !!i725[4]
  return i724
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i734 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i735 = data
  i734.pageName = i735[0]
  request.r(i735[1], i735[2], 0, i734, 'material')
  return i734
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i738 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'atlasFile')
  var i741 = i739[2]
  var i740 = []
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 2, i740, '')
  }
  i738.materials = i740
  i738.textureLoadingMode = i739[3]
  request.r(i739[4], i739[5], 0, i738, 'onDemandTextureLoader')
  return i738
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i742 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i743 = data
  i742.hashCode = i743[0]
  request.r(i743[1], i743[2], 0, i742, 'material')
  i742.materialHashCode = i743[3]
  request.r(i743[4], i743[5], 0, i742, 'atlas')
  i742.normalStyle = i743[6]
  i742.normalSpacingOffset = i743[7]
  i742.boldStyle = i743[8]
  i742.boldSpacing = i743[9]
  i742.italicStyle = i743[10]
  i742.tabSize = i743[11]
  i742.m_Version = i743[12]
  i742.m_SourceFontFileGUID = i743[13]
  request.r(i743[14], i743[15], 0, i742, 'm_SourceFontFile_EditorRef')
  request.r(i743[16], i743[17], 0, i742, 'm_SourceFontFile')
  i742.m_AtlasPopulationMode = i743[18]
  i742.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i743[19], i742.m_FaceInfo)
  var i745 = i743[20]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i745.length; i += 1) {
    i744.add(request.d('UnityEngine.TextCore.Glyph', i745[i + 0]));
  }
  i742.m_GlyphTable = i744
  var i747 = i743[21]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i747.length; i += 1) {
    i746.add(request.d('TMPro.TMP_Character', i747[i + 0]));
  }
  i742.m_CharacterTable = i746
  var i749 = i743[22]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 2, i748, '')
  }
  i742.m_AtlasTextures = i748
  i742.m_AtlasTextureIndex = i743[23]
  i742.m_IsMultiAtlasTexturesEnabled = !!i743[24]
  i742.m_ClearDynamicDataOnBuild = !!i743[25]
  var i751 = i743[26]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i751.length; i += 1) {
    i750.add(request.d('UnityEngine.TextCore.GlyphRect', i751[i + 0]));
  }
  i742.m_UsedGlyphRects = i750
  var i753 = i743[27]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i753.length; i += 1) {
    i752.add(request.d('UnityEngine.TextCore.GlyphRect', i753[i + 0]));
  }
  i742.m_FreeGlyphRects = i752
  i742.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i743[28], i742.m_fontInfo)
  i742.m_AtlasWidth = i743[29]
  i742.m_AtlasHeight = i743[30]
  i742.m_AtlasPadding = i743[31]
  i742.m_AtlasRenderMode = i743[32]
  var i755 = i743[33]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i755.length; i += 1) {
    i754.add(request.d('TMPro.TMP_Glyph', i755[i + 0]));
  }
  i742.m_glyphInfoList = i754
  i742.m_KerningTable = request.d('TMPro.KerningTable', i743[34], i742.m_KerningTable)
  i742.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i743[35], i742.m_FontFeatureTable)
  var i757 = i743[36]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 1, i756, '')
  }
  i742.fallbackFontAssets = i756
  var i759 = i743[37]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 1, i758, '')
  }
  i742.m_FallbackFontAssetTable = i758
  i742.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i743[38], i742.m_CreationSettings)
  var i761 = i743[39]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('TMPro.TMP_FontWeightPair', i761[i + 0]) );
  }
  i742.m_FontWeightTable = i760
  var i763 = i743[40]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('TMPro.TMP_FontWeightPair', i763[i + 0]) );
  }
  i742.fontWeights = i762
  return i742
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i765 = data
  i764.m_FaceIndex = i765[0]
  i764.m_FamilyName = i765[1]
  i764.m_StyleName = i765[2]
  i764.m_PointSize = i765[3]
  i764.m_Scale = i765[4]
  i764.m_UnitsPerEM = i765[5]
  i764.m_LineHeight = i765[6]
  i764.m_AscentLine = i765[7]
  i764.m_CapLine = i765[8]
  i764.m_MeanLine = i765[9]
  i764.m_Baseline = i765[10]
  i764.m_DescentLine = i765[11]
  i764.m_SuperscriptOffset = i765[12]
  i764.m_SuperscriptSize = i765[13]
  i764.m_SubscriptOffset = i765[14]
  i764.m_SubscriptSize = i765[15]
  i764.m_UnderlineOffset = i765[16]
  i764.m_UnderlineThickness = i765[17]
  i764.m_StrikethroughOffset = i765[18]
  i764.m_StrikethroughThickness = i765[19]
  i764.m_TabWidth = i765[20]
  return i764
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i769 = data
  i768.m_Index = i769[0]
  i768.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i769[1], i768.m_Metrics)
  i768.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i769[2], i768.m_GlyphRect)
  i768.m_Scale = i769[3]
  i768.m_AtlasIndex = i769[4]
  i768.m_ClassDefinitionType = i769[5]
  return i768
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i771 = data
  i770.m_Width = i771[0]
  i770.m_Height = i771[1]
  i770.m_HorizontalBearingX = i771[2]
  i770.m_HorizontalBearingY = i771[3]
  i770.m_HorizontalAdvance = i771[4]
  return i770
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i773 = data
  i772.m_X = i773[0]
  i772.m_Y = i773[1]
  i772.m_Width = i773[2]
  i772.m_Height = i773[3]
  return i772
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i776 = root || request.c( 'TMPro.TMP_Character' )
  var i777 = data
  i776.m_ElementType = i777[0]
  i776.m_Unicode = i777[1]
  i776.m_GlyphIndex = i777[2]
  i776.m_Scale = i777[3]
  return i776
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i782 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i783 = data
  i782.Name = i783[0]
  i782.PointSize = i783[1]
  i782.Scale = i783[2]
  i782.CharacterCount = i783[3]
  i782.LineHeight = i783[4]
  i782.Baseline = i783[5]
  i782.Ascender = i783[6]
  i782.CapHeight = i783[7]
  i782.Descender = i783[8]
  i782.CenterLine = i783[9]
  i782.SuperscriptOffset = i783[10]
  i782.SubscriptOffset = i783[11]
  i782.SubSize = i783[12]
  i782.Underline = i783[13]
  i782.UnderlineThickness = i783[14]
  i782.strikethrough = i783[15]
  i782.strikethroughThickness = i783[16]
  i782.TabWidth = i783[17]
  i782.Padding = i783[18]
  i782.AtlasWidth = i783[19]
  i782.AtlasHeight = i783[20]
  return i782
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i786 = root || request.c( 'TMPro.TMP_Glyph' )
  var i787 = data
  i786.id = i787[0]
  i786.x = i787[1]
  i786.y = i787[2]
  i786.width = i787[3]
  i786.height = i787[4]
  i786.xOffset = i787[5]
  i786.yOffset = i787[6]
  i786.xAdvance = i787[7]
  i786.scale = i787[8]
  return i786
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i788 = root || request.c( 'TMPro.KerningTable' )
  var i789 = data
  var i791 = i789[0]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('TMPro.KerningPair', i791[i + 0]));
  }
  i788.kerningPairs = i790
  return i788
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i794 = root || request.c( 'TMPro.KerningPair' )
  var i795 = data
  i794.xOffset = i795[0]
  i794.m_FirstGlyph = i795[1]
  i794.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i795[2], i794.m_FirstGlyphAdjustments)
  i794.m_SecondGlyph = i795[3]
  i794.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i795[4], i794.m_SecondGlyphAdjustments)
  i794.m_IgnoreSpacingAdjustments = !!i795[5]
  return i794
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i796 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i797 = data
  var i799 = i797[0]
  var i798 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i799.length; i += 1) {
    i798.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i799[i + 0]));
  }
  i796.m_GlyphPairAdjustmentRecords = i798
  return i796
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i802 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i803 = data
  i802.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i803[0], i802.m_FirstAdjustmentRecord)
  i802.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i803[1], i802.m_SecondAdjustmentRecord)
  i802.m_FeatureLookupFlags = i803[2]
  return i802
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i806 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i807 = data
  i806.sourceFontFileName = i807[0]
  i806.sourceFontFileGUID = i807[1]
  i806.pointSizeSamplingMode = i807[2]
  i806.pointSize = i807[3]
  i806.padding = i807[4]
  i806.packingMode = i807[5]
  i806.atlasWidth = i807[6]
  i806.atlasHeight = i807[7]
  i806.characterSetSelectionMode = i807[8]
  i806.characterSequence = i807[9]
  i806.referencedFontAssetGUID = i807[10]
  i806.referencedTextAssetGUID = i807[11]
  i806.fontStyle = i807[12]
  i806.fontStyleModifier = i807[13]
  i806.renderMode = i807[14]
  i806.includeFontFeatures = !!i807[15]
  return i806
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i810 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'regularTypeface')
  request.r(i811[2], i811[3], 0, i810, 'italicTypeface')
  return i810
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i812 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i813 = data
  i812.useSafeMode = !!i813[0]
  i812.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i813[1], i812.safeModeOptions)
  i812.timeScale = i813[2]
  i812.unscaledTimeScale = i813[3]
  i812.useSmoothDeltaTime = !!i813[4]
  i812.maxSmoothUnscaledTime = i813[5]
  i812.rewindCallbackMode = i813[6]
  i812.showUnityEditorReport = !!i813[7]
  i812.logBehaviour = i813[8]
  i812.drawGizmos = !!i813[9]
  i812.defaultRecyclable = !!i813[10]
  i812.defaultAutoPlay = i813[11]
  i812.defaultUpdateType = i813[12]
  i812.defaultTimeScaleIndependent = !!i813[13]
  i812.defaultEaseType = i813[14]
  i812.defaultEaseOvershootOrAmplitude = i813[15]
  i812.defaultEasePeriod = i813[16]
  i812.defaultAutoKill = !!i813[17]
  i812.defaultLoopType = i813[18]
  i812.debugMode = !!i813[19]
  i812.debugStoreTargetId = !!i813[20]
  i812.showPreviewPanel = !!i813[21]
  i812.storeSettingsLocation = i813[22]
  i812.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i813[23], i812.modules)
  i812.createASMDEF = !!i813[24]
  i812.showPlayingTweens = !!i813[25]
  i812.showPausedTweens = !!i813[26]
  return i812
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i814 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i815 = data
  i814.logBehaviour = i815[0]
  i814.nestedTweenFailureBehaviour = i815[1]
  return i814
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i816 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i817 = data
  i816.showPanel = !!i817[0]
  i816.audioEnabled = !!i817[1]
  i816.physicsEnabled = !!i817[2]
  i816.physics2DEnabled = !!i817[3]
  i816.spriteEnabled = !!i817[4]
  i816.uiEnabled = !!i817[5]
  i816.textMeshProEnabled = !!i817[6]
  i816.tk2DEnabled = !!i817[7]
  i816.deAudioEnabled = !!i817[8]
  i816.deUnityExtendedEnabled = !!i817[9]
  i816.epoOutlineEnabled = !!i817[10]
  return i816
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i818 = root || request.c( 'TMPro.TMP_Settings' )
  var i819 = data
  i818.m_enableWordWrapping = !!i819[0]
  i818.m_enableKerning = !!i819[1]
  i818.m_enableExtraPadding = !!i819[2]
  i818.m_enableTintAllSprites = !!i819[3]
  i818.m_enableParseEscapeCharacters = !!i819[4]
  i818.m_EnableRaycastTarget = !!i819[5]
  i818.m_GetFontFeaturesAtRuntime = !!i819[6]
  i818.m_missingGlyphCharacter = i819[7]
  i818.m_warningsDisabled = !!i819[8]
  request.r(i819[9], i819[10], 0, i818, 'm_defaultFontAsset')
  i818.m_defaultFontAssetPath = i819[11]
  i818.m_defaultFontSize = i819[12]
  i818.m_defaultAutoSizeMinRatio = i819[13]
  i818.m_defaultAutoSizeMaxRatio = i819[14]
  i818.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i819[15], i819[16] )
  i818.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i819[17], i819[18] )
  i818.m_autoSizeTextContainer = !!i819[19]
  i818.m_IsTextObjectScaleStatic = !!i819[20]
  var i821 = i819[21]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i821.length; i += 2) {
  request.r(i821[i + 0], i821[i + 1], 1, i820, '')
  }
  i818.m_fallbackFontAssets = i820
  i818.m_matchMaterialPreset = !!i819[22]
  request.r(i819[23], i819[24], 0, i818, 'm_defaultSpriteAsset')
  i818.m_defaultSpriteAssetPath = i819[25]
  i818.m_enableEmojiSupport = !!i819[26]
  i818.m_MissingCharacterSpriteUnicode = i819[27]
  i818.m_defaultColorGradientPresetsPath = i819[28]
  request.r(i819[29], i819[30], 0, i818, 'm_defaultStyleSheet')
  i818.m_StyleSheetsResourcePath = i819[31]
  request.r(i819[32], i819[33], 0, i818, 'm_leadingCharacters')
  request.r(i819[34], i819[35], 0, i818, 'm_followingCharacters')
  i818.m_UseModernHangulLineBreakingRules = !!i819[36]
  return i818
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i822 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i823 = data
  i822.m_GlyphIndex = i823[0]
  i822.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i823[1], i822.m_GlyphValueRecord)
  return i822
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i825 = data
  i824.m_XPlacement = i825[0]
  i824.m_YPlacement = i825[1]
  i824.m_XAdvance = i825[2]
  i824.m_YAdvance = i825[3]
  return i824
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i826 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i827 = data
  i826.hashCode = i827[0]
  request.r(i827[1], i827[2], 0, i826, 'material')
  i826.materialHashCode = i827[3]
  request.r(i827[4], i827[5], 0, i826, 'spriteSheet')
  var i829 = i827[6]
  var i828 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i829.length; i += 1) {
    i828.add(request.d('TMPro.TMP_Sprite', i829[i + 0]));
  }
  i826.spriteInfoList = i828
  var i831 = i827[7]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 1, i830, '')
  }
  i826.fallbackSpriteAssets = i830
  i826.m_Version = i827[8]
  i826.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i827[9], i826.m_FaceInfo)
  var i833 = i827[10]
  var i832 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i833.length; i += 1) {
    i832.add(request.d('TMPro.TMP_SpriteCharacter', i833[i + 0]));
  }
  i826.m_SpriteCharacterTable = i832
  var i835 = i827[11]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i835.length; i += 1) {
    i834.add(request.d('TMPro.TMP_SpriteGlyph', i835[i + 0]));
  }
  i826.m_SpriteGlyphTable = i834
  return i826
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.TMP_Sprite' )
  var i839 = data
  i838.name = i839[0]
  i838.hashCode = i839[1]
  i838.unicode = i839[2]
  i838.pivot = new pc.Vec2( i839[3], i839[4] )
  request.r(i839[5], i839[6], 0, i838, 'sprite')
  i838.id = i839[7]
  i838.x = i839[8]
  i838.y = i839[9]
  i838.width = i839[10]
  i838.height = i839[11]
  i838.xOffset = i839[12]
  i838.yOffset = i839[13]
  i838.xAdvance = i839[14]
  i838.scale = i839[15]
  return i838
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i845 = data
  i844.m_Name = i845[0]
  i844.m_HashCode = i845[1]
  i844.m_ElementType = i845[2]
  i844.m_Unicode = i845[3]
  i844.m_GlyphIndex = i845[4]
  i844.m_Scale = i845[5]
  return i844
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i848 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'sprite')
  i848.m_Index = i849[2]
  i848.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i849[3], i848.m_Metrics)
  i848.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i849[4], i848.m_GlyphRect)
  i848.m_Scale = i849[5]
  i848.m_AtlasIndex = i849[6]
  i848.m_ClassDefinitionType = i849[7]
  return i848
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i851 = data
  var i853 = i851[0]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i853.length; i += 1) {
    i852.add(request.d('TMPro.TMP_Style', i853[i + 0]));
  }
  i850.m_StyleList = i852
  return i850
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i856 = root || request.c( 'TMPro.TMP_Style' )
  var i857 = data
  i856.m_Name = i857[0]
  i856.m_HashCode = i857[1]
  i856.m_OpeningDefinition = i857[2]
  i856.m_ClosingDefinition = i857[3]
  i856.m_OpeningTagArray = i857[4]
  i856.m_ClosingTagArray = i857[5]
  i856.m_OpeningTagUnicodeArray = i857[6]
  i856.m_ClosingTagUnicodeArray = i857[7]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i859 = data
  var i861 = i859[0]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i861[i + 0]) );
  }
  i858.files = i860
  i858.componentToPrefabIds = i859[1]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i865 = data
  i864.path = i865[0]
  request.r(i865[1], i865[2], 0, i864, 'unityObject')
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i867 = data
  var i869 = i867[0]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i869[i + 0]) );
  }
  i866.scriptsExecutionOrder = i868
  var i871 = i867[1]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i871[i + 0]) );
  }
  i866.sortingLayers = i870
  var i873 = i867[2]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i873[i + 0]) );
  }
  i866.cullingLayers = i872
  i866.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i867[3], i866.timeSettings)
  i866.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i867[4], i866.physicsSettings)
  i866.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i867[5], i866.physics2DSettings)
  i866.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i867[6], i866.qualitySettings)
  i866.enableRealtimeShadows = !!i867[7]
  i866.enableAutoInstancing = !!i867[8]
  i866.enableDynamicBatching = !!i867[9]
  i866.lightmapEncodingQuality = i867[10]
  i866.desiredColorSpace = i867[11]
  var i875 = i867[12]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( i875[i + 0] );
  }
  i866.allTags = i874
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i879 = data
  i878.name = i879[0]
  i878.value = i879[1]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i883 = data
  i882.id = i883[0]
  i882.name = i883[1]
  i882.value = i883[2]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i887 = data
  i886.id = i887[0]
  i886.name = i887[1]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i889 = data
  i888.fixedDeltaTime = i889[0]
  i888.maximumDeltaTime = i889[1]
  i888.timeScale = i889[2]
  i888.maximumParticleTimestep = i889[3]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i891 = data
  i890.gravity = new pc.Vec3( i891[0], i891[1], i891[2] )
  i890.defaultSolverIterations = i891[3]
  i890.bounceThreshold = i891[4]
  i890.autoSyncTransforms = !!i891[5]
  i890.autoSimulation = !!i891[6]
  var i893 = i891[7]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i893[i + 0]) );
  }
  i890.collisionMatrix = i892
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i897 = data
  i896.enabled = !!i897[0]
  i896.layerId = i897[1]
  i896.otherLayerId = i897[2]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'material')
  i898.gravity = new pc.Vec2( i899[2], i899[3] )
  i898.positionIterations = i899[4]
  i898.velocityIterations = i899[5]
  i898.velocityThreshold = i899[6]
  i898.maxLinearCorrection = i899[7]
  i898.maxAngularCorrection = i899[8]
  i898.maxTranslationSpeed = i899[9]
  i898.maxRotationSpeed = i899[10]
  i898.baumgarteScale = i899[11]
  i898.baumgarteTOIScale = i899[12]
  i898.timeToSleep = i899[13]
  i898.linearSleepTolerance = i899[14]
  i898.angularSleepTolerance = i899[15]
  i898.defaultContactOffset = i899[16]
  i898.autoSimulation = !!i899[17]
  i898.queriesHitTriggers = !!i899[18]
  i898.queriesStartInColliders = !!i899[19]
  i898.callbacksOnDisable = !!i899[20]
  i898.reuseCollisionCallbacks = !!i899[21]
  i898.autoSyncTransforms = !!i899[22]
  var i901 = i899[23]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i901[i + 0]) );
  }
  i898.collisionMatrix = i900
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i905 = data
  i904.enabled = !!i905[0]
  i904.layerId = i905[1]
  i904.otherLayerId = i905[2]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i907 = data
  var i909 = i907[0]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i909[i + 0]) );
  }
  i906.qualityLevels = i908
  var i911 = i907[1]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( i911[i + 0] );
  }
  i906.names = i910
  i906.shadows = i907[2]
  i906.anisotropicFiltering = i907[3]
  i906.antiAliasing = i907[4]
  i906.lodBias = i907[5]
  i906.shadowCascades = i907[6]
  i906.shadowDistance = i907[7]
  i906.shadowmaskMode = i907[8]
  i906.shadowProjection = i907[9]
  i906.shadowResolution = i907[10]
  i906.softParticles = !!i907[11]
  i906.softVegetation = !!i907[12]
  i906.activeColorSpace = i907[13]
  i906.desiredColorSpace = i907[14]
  i906.masterTextureLimit = i907[15]
  i906.maxQueuedFrames = i907[16]
  i906.particleRaycastBudget = i907[17]
  i906.pixelLightCount = i907[18]
  i906.realtimeReflectionProbes = !!i907[19]
  i906.shadowCascade2Split = i907[20]
  i906.shadowCascade4Split = new pc.Vec3( i907[21], i907[22], i907[23] )
  i906.streamingMipmapsActive = !!i907[24]
  i906.vSyncCount = i907[25]
  i906.asyncUploadBufferSize = i907[26]
  i906.asyncUploadTimeSlice = i907[27]
  i906.billboardsFaceCameraPosition = !!i907[28]
  i906.shadowNearPlaneOffset = i907[29]
  i906.streamingMipmapsMemoryBudget = i907[30]
  i906.maximumLODLevel = i907[31]
  i906.streamingMipmapsAddAllCameras = !!i907[32]
  i906.streamingMipmapsMaxLevelReduction = i907[33]
  i906.streamingMipmapsRenderersPerFrame = i907[34]
  i906.resolutionScalingFixedDPIFactor = i907[35]
  i906.streamingMipmapsMaxFileIORequests = i907[36]
  i906.currentQualityLevel = i907[37]
  return i906
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i914 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i915 = data
  i914.xPlacement = i915[0]
  i914.yPlacement = i915[1]
  i914.xAdvance = i915[2]
  i914.yAdvance = i915[3]
  return i914
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[3],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[3],"75":[76],"77":[78],"79":[78],"9":[8],"80":[81],"82":[83],"84":[81],"85":[8],"86":[8],"11":[9],"20":[17,8],"87":[8],"10":[9],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"33":[8],"34":[8],"94":[8],"16":[17,8],"95":[8],"96":[8],"97":[8],"98":[8],"99":[17,8],"100":[8],"101":[6],"102":[6],"7":[6],"103":[6],"104":[3],"105":[3],"106":[107],"108":[3],"109":[110],"111":[8],"112":[17,8],"113":[76],"25":[17,8],"114":[115,76],"116":[76],"117":[76,118],"119":[53],"120":[61],"121":[110],"122":[123],"124":[8],"125":[76,8],"29":[8,17],"126":[8],"127":[17,8],"128":[76],"129":[17,8],"130":[8],"131":[81]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.UI.Image","UnityEngine.Sprite","DropZone","UnityEngine.BoxCollider2D","ClickItem","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DG.Tweening.DOTweenAnimation","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","DraggableItem","UnityEngine.CanvasGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "20.2";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "APG_V04_TrangHT_AnhPD";

Deserializers.lunaAppID = "29138";

Deserializers.projectId = "cc2b1186a2056e546bb13add5b988034";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1782";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4276";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "8117e292-cfba-46b4-926f-6b8bf464ba38";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

