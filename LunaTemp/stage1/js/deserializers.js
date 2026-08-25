var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.JointSpring' )
  var i439 = data
  i438.spring = i439[0]
  i438.damper = i439[1]
  i438.targetPosition = i439[2]
  return i438
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.JointMotor' )
  var i441 = data
  i440.m_TargetVelocity = i441[0]
  i440.m_Force = i441[1]
  i440.m_FreeSpin = i441[2]
  return i440
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointLimits' )
  var i443 = data
  i442.m_Min = i443[0]
  i442.m_Max = i443[1]
  i442.m_Bounciness = i443[2]
  i442.m_BounceMinVelocity = i443[3]
  i442.m_ContactDistance = i443[4]
  i442.minBounce = i443[5]
  i442.maxBounce = i443[6]
  return i442
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointDrive' )
  var i445 = data
  i444.m_PositionSpring = i445[0]
  i444.m_PositionDamper = i445[1]
  i444.m_MaximumForce = i445[2]
  i444.m_UseAcceleration = i445[3]
  return i444
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i447 = data
  i446.m_Spring = i447[0]
  i446.m_Damper = i447[1]
  return i446
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i449 = data
  i448.m_Limit = i449[0]
  i448.m_Bounciness = i449[1]
  i448.m_ContactDistance = i449[2]
  return i448
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i451 = data
  i450.m_ExtremumSlip = i451[0]
  i450.m_ExtremumValue = i451[1]
  i450.m_AsymptoteSlip = i451[2]
  i450.m_AsymptoteValue = i451[3]
  i450.m_Stiffness = i451[4]
  return i450
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i453 = data
  i452.m_LowerAngle = i453[0]
  i452.m_UpperAngle = i453[1]
  return i452
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i455 = data
  i454.m_MotorSpeed = i455[0]
  i454.m_MaximumMotorTorque = i455[1]
  return i454
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i457 = data
  i456.m_DampingRatio = i457[0]
  i456.m_Frequency = i457[1]
  i456.m_Angle = i457[2]
  return i456
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i459 = data
  i458.m_LowerTranslation = i459[0]
  i458.m_UpperTranslation = i459[1]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i461 = data
  i460.name = i461[0]
  i460.width = i461[1]
  i460.height = i461[2]
  i460.mipmapCount = i461[3]
  i460.anisoLevel = i461[4]
  i460.filterMode = i461[5]
  i460.hdr = !!i461[6]
  i460.format = i461[7]
  i460.wrapMode = i461[8]
  i460.alphaIsTransparency = !!i461[9]
  i460.alphaSource = i461[10]
  i460.graphicsFormat = i461[11]
  i460.sRGBTexture = !!i461[12]
  i460.desiredColorSpace = i461[13]
  i460.wrapU = i461[14]
  i460.wrapV = i461[15]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i462 = root || new pc.UnityMaterial()
  var i463 = data
  i462.name = i463[0]
  request.r(i463[1], i463[2], 0, i462, 'shader')
  i462.renderQueue = i463[3]
  i462.enableInstancing = !!i463[4]
  var i465 = i463[5]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i465[i + 0]) );
  }
  i462.floatParameters = i464
  var i467 = i463[6]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i467[i + 0]) );
  }
  i462.colorParameters = i466
  var i469 = i463[7]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i469[i + 0]) );
  }
  i462.vectorParameters = i468
  var i471 = i463[8]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i471[i + 0]) );
  }
  i462.textureParameters = i470
  var i473 = i463[9]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i473[i + 0]) );
  }
  i462.materialFlags = i472
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i477 = data
  i476.name = i477[0]
  i476.value = i477[1]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i481 = data
  i480.name = i481[0]
  i480.value = new pc.Color(i481[1], i481[2], i481[3], i481[4])
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i485 = data
  i484.name = i485[0]
  i484.value = new pc.Vec4( i485[1], i485[2], i485[3], i485[4] )
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i489 = data
  i488.name = i489[0]
  request.r(i489[1], i489[2], 0, i488, 'value')
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i493 = data
  i492.name = i493[0]
  i492.enabled = !!i493[1]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i495 = data
  i494.name = i495[0]
  i494.index = i495[1]
  i494.startup = !!i495[2]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i497 = data
  i496.aspect = i497[0]
  i496.orthographic = !!i497[1]
  i496.orthographicSize = i497[2]
  i496.backgroundColor = new pc.Color(i497[3], i497[4], i497[5], i497[6])
  i496.nearClipPlane = i497[7]
  i496.farClipPlane = i497[8]
  i496.fieldOfView = i497[9]
  i496.depth = i497[10]
  i496.clearFlags = i497[11]
  i496.cullingMask = i497[12]
  i496.rect = i497[13]
  request.r(i497[14], i497[15], 0, i496, 'targetTexture')
  i496.usePhysicalProperties = !!i497[16]
  i496.focalLength = i497[17]
  i496.sensorSize = new pc.Vec2( i497[18], i497[19] )
  i496.lensShift = new pc.Vec2( i497[20], i497[21] )
  i496.gateFit = i497[22]
  i496.commandBufferCount = i497[23]
  i496.cameraType = i497[24]
  i496.enabled = !!i497[25]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i499 = data
  i498.name = i499[0]
  i498.tagId = i499[1]
  i498.enabled = !!i499[2]
  i498.isStatic = !!i499[3]
  i498.layer = i499[4]
  return i498
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i501 = data
  request.r(i501[0], i501[1], 0, i500, 'm_FirstSelected')
  i500.m_sendNavigationEvents = !!i501[2]
  i500.m_DragThreshold = i501[3]
  return i500
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i503 = data
  i502.m_HorizontalAxis = i503[0]
  i502.m_VerticalAxis = i503[1]
  i502.m_SubmitButton = i503[2]
  i502.m_CancelButton = i503[3]
  i502.m_InputActionsPerSecond = i503[4]
  i502.m_RepeatDelay = i503[5]
  i502.m_ForceModuleActive = !!i503[6]
  i502.m_SendPointerHoverToParent = !!i503[7]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i505 = data
  i504.pivot = new pc.Vec2( i505[0], i505[1] )
  i504.anchorMin = new pc.Vec2( i505[2], i505[3] )
  i504.anchorMax = new pc.Vec2( i505[4], i505[5] )
  i504.sizeDelta = new pc.Vec2( i505[6], i505[7] )
  i504.anchoredPosition3D = new pc.Vec3( i505[8], i505[9], i505[10] )
  i504.rotation = new pc.Quat(i505[11], i505[12], i505[13], i505[14])
  i504.scale = new pc.Vec3( i505[15], i505[16], i505[17] )
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i507 = data
  i506.planeDistance = i507[0]
  i506.referencePixelsPerUnit = i507[1]
  i506.isFallbackOverlay = !!i507[2]
  i506.renderMode = i507[3]
  i506.renderOrder = i507[4]
  i506.sortingLayerName = i507[5]
  i506.sortingOrder = i507[6]
  i506.scaleFactor = i507[7]
  request.r(i507[8], i507[9], 0, i506, 'worldCamera')
  i506.overrideSorting = !!i507[10]
  i506.pixelPerfect = !!i507[11]
  i506.targetDisplay = i507[12]
  i506.overridePixelPerfect = !!i507[13]
  i506.enabled = !!i507[14]
  return i506
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i509 = data
  i508.m_UiScaleMode = i509[0]
  i508.m_ReferencePixelsPerUnit = i509[1]
  i508.m_ScaleFactor = i509[2]
  i508.m_ReferenceResolution = new pc.Vec2( i509[3], i509[4] )
  i508.m_ScreenMatchMode = i509[5]
  i508.m_MatchWidthOrHeight = i509[6]
  i508.m_PhysicalUnit = i509[7]
  i508.m_FallbackScreenDPI = i509[8]
  i508.m_DefaultSpriteDPI = i509[9]
  i508.m_DynamicPixelsPerUnit = i509[10]
  i508.m_PresetInfoIsWorld = !!i509[11]
  return i508
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i511 = data
  i510.m_IgnoreReversedGraphics = !!i511[0]
  i510.m_BlockingObjects = i511[1]
  i510.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i511[2] )
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i513 = data
  i512.cullTransparentMesh = !!i513[0]
  return i512
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.UI.Image' )
  var i515 = data
  request.r(i515[0], i515[1], 0, i514, 'm_Sprite')
  i514.m_Type = i515[2]
  i514.m_PreserveAspect = !!i515[3]
  i514.m_FillCenter = !!i515[4]
  i514.m_FillMethod = i515[5]
  i514.m_FillAmount = i515[6]
  i514.m_FillClockwise = !!i515[7]
  i514.m_FillOrigin = i515[8]
  i514.m_UseSpriteMesh = !!i515[9]
  i514.m_PixelsPerUnitMultiplier = i515[10]
  request.r(i515[11], i515[12], 0, i514, 'm_Material')
  i514.m_Maskable = !!i515[13]
  i514.m_Color = new pc.Color(i515[14], i515[15], i515[16], i515[17])
  i514.m_RaycastTarget = !!i515[18]
  i514.m_RaycastPadding = new pc.Vec4( i515[19], i515[20], i515[21], i515[22] )
  return i514
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.UI.Text' )
  var i517 = data
  i516.m_FontData = request.d('UnityEngine.UI.FontData', i517[0], i516.m_FontData)
  i516.m_Text = i517[1]
  request.r(i517[2], i517[3], 0, i516, 'm_Material')
  i516.m_Maskable = !!i517[4]
  i516.m_Color = new pc.Color(i517[5], i517[6], i517[7], i517[8])
  i516.m_RaycastTarget = !!i517[9]
  i516.m_RaycastPadding = new pc.Vec4( i517[10], i517[11], i517[12], i517[13] )
  return i516
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.UI.FontData' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, 'm_Font')
  i518.m_FontSize = i519[2]
  i518.m_FontStyle = i519[3]
  i518.m_BestFit = !!i519[4]
  i518.m_MinSize = i519[5]
  i518.m_MaxSize = i519[6]
  i518.m_Alignment = i519[7]
  i518.m_AlignByGeometry = !!i519[8]
  i518.m_RichText = !!i519[9]
  i518.m_HorizontalOverflow = i519[10]
  i518.m_VerticalOverflow = i519[11]
  i518.m_LineSpacing = i519[12]
  return i518
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.UI.Slider' )
  var i521 = data
  request.r(i521[0], i521[1], 0, i520, 'm_FillRect')
  request.r(i521[2], i521[3], 0, i520, 'm_HandleRect')
  i520.m_Direction = i521[4]
  i520.m_MinValue = i521[5]
  i520.m_MaxValue = i521[6]
  i520.m_WholeNumbers = !!i521[7]
  i520.m_Value = i521[8]
  i520.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i521[9], i520.m_OnValueChanged)
  i520.m_Navigation = request.d('UnityEngine.UI.Navigation', i521[10], i520.m_Navigation)
  i520.m_Transition = i521[11]
  i520.m_Colors = request.d('UnityEngine.UI.ColorBlock', i521[12], i520.m_Colors)
  i520.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i521[13], i520.m_SpriteState)
  i520.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i521[14], i520.m_AnimationTriggers)
  i520.m_Interactable = !!i521[15]
  request.r(i521[16], i521[17], 0, i520, 'm_TargetGraphic')
  return i520
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i523 = data
  i522.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i523[0], i522.m_PersistentCalls)
  return i522
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i525 = data
  var i527 = i525[0]
  var i526 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i527.length; i += 1) {
    i526.add(request.d('UnityEngine.Events.PersistentCall', i527[i + 0]));
  }
  i524.m_Calls = i526
  return i524
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i531 = data
  request.r(i531[0], i531[1], 0, i530, 'm_Target')
  i530.m_TargetAssemblyTypeName = i531[2]
  i530.m_MethodName = i531[3]
  i530.m_Mode = i531[4]
  i530.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i531[5], i530.m_Arguments)
  i530.m_CallState = i531[6]
  return i530
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i533 = data
  i532.m_Mode = i533[0]
  i532.m_WrapAround = !!i533[1]
  request.r(i533[2], i533[3], 0, i532, 'm_SelectOnUp')
  request.r(i533[4], i533[5], 0, i532, 'm_SelectOnDown')
  request.r(i533[6], i533[7], 0, i532, 'm_SelectOnLeft')
  request.r(i533[8], i533[9], 0, i532, 'm_SelectOnRight')
  return i532
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i535 = data
  i534.m_NormalColor = new pc.Color(i535[0], i535[1], i535[2], i535[3])
  i534.m_HighlightedColor = new pc.Color(i535[4], i535[5], i535[6], i535[7])
  i534.m_PressedColor = new pc.Color(i535[8], i535[9], i535[10], i535[11])
  i534.m_SelectedColor = new pc.Color(i535[12], i535[13], i535[14], i535[15])
  i534.m_DisabledColor = new pc.Color(i535[16], i535[17], i535[18], i535[19])
  i534.m_ColorMultiplier = i535[20]
  i534.m_FadeDuration = i535[21]
  return i534
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i537 = data
  request.r(i537[0], i537[1], 0, i536, 'm_HighlightedSprite')
  request.r(i537[2], i537[3], 0, i536, 'm_PressedSprite')
  request.r(i537[4], i537[5], 0, i536, 'm_SelectedSprite')
  request.r(i537[6], i537[7], 0, i536, 'm_DisabledSprite')
  return i536
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i539 = data
  i538.m_NormalTrigger = i539[0]
  i538.m_HighlightedTrigger = i539[1]
  i538.m_PressedTrigger = i539[2]
  i538.m_SelectedTrigger = i539[3]
  i538.m_DisabledTrigger = i539[4]
  return i538
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.UI.Mask' )
  var i541 = data
  i540.m_ShowMaskGraphic = !!i541[0]
  return i540
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i542 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'skeletonDataAsset')
  request.r(i543[2], i543[3], 0, i542, 'additiveMaterial')
  request.r(i543[4], i543[5], 0, i542, 'multiplyMaterial')
  request.r(i543[6], i543[7], 0, i542, 'screenMaterial')
  i542.initialSkinName = i543[8]
  i542.initialFlipX = !!i543[9]
  i542.initialFlipY = !!i543[10]
  i542.startingAnimation = i543[11]
  i542.startingLoop = !!i543[12]
  i542.timeScale = i543[13]
  i542.freeze = !!i543[14]
  i542.layoutScaleMode = i543[15]
  i542.updateWhenInvisible = i543[16]
  i542.allowMultipleCanvasRenderers = !!i543[17]
  var i545 = i543[18]
  var i544 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i545.length; i += 2) {
  request.r(i545[i + 0], i545[i + 1], 1, i544, '')
  }
  i542.canvasRenderers = i544
  i542.enableSeparatorSlots = !!i543[19]
  i542.updateSeparatorPartLocation = !!i543[20]
  i542.updateSeparatorPartScale = !!i543[21]
  i542.disableMeshAssignmentOnOverride = !!i543[22]
  i542.referenceSize = new pc.Vec2( i543[23], i543[24] )
  i542.referenceScale = i543[25]
  i542.rectTransformSize = new pc.Vec2( i543[26], i543[27] )
  i542.editReferenceRect = !!i543[28]
  var i547 = i543[29]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( i547[i + 0] );
  }
  i542.separatorSlotNames = i546
  var i549 = i543[30]
  var i548 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i549.length; i += 2) {
  request.r(i549[i + 0], i549[i + 1], 1, i548, '')
  }
  i542.separatorParts = i548
  i542.meshGenerator = request.d('Spine.Unity.MeshGenerator', i543[31], i542.meshGenerator)
  i542.updateTiming = i543[32]
  i542.unscaledTime = !!i543[33]
  request.r(i543[34], i543[35], 0, i542, 'm_Material')
  i542.m_Maskable = !!i543[36]
  i542.m_Color = new pc.Color(i543[37], i543[38], i543[39], i543[40])
  i542.m_RaycastTarget = !!i543[41]
  i542.m_RaycastPadding = new pc.Vec4( i543[42], i543[43], i543[44], i543[45] )
  return i542
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i556 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i557 = data
  i556.settings = request.d('Spine.Unity.MeshGenerator+Settings', i557[0], i556.settings)
  return i556
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i558 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i559 = data
  i558.useClipping = !!i559[0]
  i558.zSpacing = i559[1]
  i558.pmaVertexColors = !!i559[2]
  i558.tintBlack = !!i559[3]
  i558.canvasGroupTintBlack = !!i559[4]
  i558.calculateTangents = !!i559[5]
  i558.addNormals = !!i559[6]
  i558.immutableTriangles = !!i559[7]
  return i558
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i560 = root || request.c( 'AnimationController' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'skeleton')
  return i560
}

Deserializers["CharacterSkinController"] = function (request, data, root) {
  var i562 = root || request.c( 'CharacterSkinController' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'skeletonAnimation')
  var i565 = i563[2]
  var i564 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i565.length; i += 1) {
    i564.add(request.d('Item', i565[i + 0]));
  }
  i562.leftItems = i564
  var i567 = i563[3]
  var i566 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i567.length; i += 1) {
    i566.add(request.d('Item', i567[i + 0]));
  }
  i562.rightItems = i566
  i562.lastItems = request.d('Item', i563[4], i562.lastItems)
  return i562
}

Deserializers["Item"] = function (request, data, root) {
  var i570 = root || request.c( 'Item' )
  var i571 = data
  i570.Piece = i571[0]
  request.r(i571[1], i571[2], 0, i570, 'ActiveItem')
  i570.ActiveSkin = i571[3]
  request.r(i571[4], i571[5], 0, i570, 'ActiveSound')
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i573 = data
  i572.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i573[0], i572.main)
  i572.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i573[1], i572.colorBySpeed)
  i572.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i573[2], i572.colorOverLifetime)
  i572.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i573[3], i572.emission)
  i572.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i573[4], i572.rotationBySpeed)
  i572.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i573[5], i572.rotationOverLifetime)
  i572.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i573[6], i572.shape)
  i572.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i573[7], i572.sizeBySpeed)
  i572.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i573[8], i572.sizeOverLifetime)
  i572.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i573[9], i572.textureSheetAnimation)
  i572.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i573[10], i572.velocityOverLifetime)
  i572.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i573[11], i572.noise)
  i572.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i573[12], i572.inheritVelocity)
  i572.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i573[13], i572.forceOverLifetime)
  i572.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i573[14], i572.limitVelocityOverLifetime)
  i572.useAutoRandomSeed = !!i573[15]
  i572.randomSeed = i573[16]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemMain()
  var i575 = data
  i574.duration = i575[0]
  i574.loop = !!i575[1]
  i574.prewarm = !!i575[2]
  i574.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[3], i574.startDelay)
  i574.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[4], i574.startLifetime)
  i574.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[5], i574.startSpeed)
  i574.startSize3D = !!i575[6]
  i574.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[7], i574.startSizeX)
  i574.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[8], i574.startSizeY)
  i574.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[9], i574.startSizeZ)
  i574.startRotation3D = !!i575[10]
  i574.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[11], i574.startRotationX)
  i574.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[12], i574.startRotationY)
  i574.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[13], i574.startRotationZ)
  i574.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i575[14], i574.startColor)
  i574.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[15], i574.gravityModifier)
  i574.simulationSpace = i575[16]
  request.r(i575[17], i575[18], 0, i574, 'customSimulationSpace')
  i574.simulationSpeed = i575[19]
  i574.useUnscaledTime = !!i575[20]
  i574.scalingMode = i575[21]
  i574.playOnAwake = !!i575[22]
  i574.maxParticles = i575[23]
  i574.emitterVelocityMode = i575[24]
  i574.stopAction = i575[25]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i576 = root || new pc.MinMaxCurve()
  var i577 = data
  i576.mode = i577[0]
  i576.curveMin = new pc.AnimationCurve( { keys_flow: i577[1] } )
  i576.curveMax = new pc.AnimationCurve( { keys_flow: i577[2] } )
  i576.curveMultiplier = i577[3]
  i576.constantMin = i577[4]
  i576.constantMax = i577[5]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i578 = root || new pc.MinMaxGradient()
  var i579 = data
  i578.mode = i579[0]
  i578.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i579[1], i578.gradientMin)
  i578.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i579[2], i578.gradientMax)
  i578.colorMin = new pc.Color(i579[3], i579[4], i579[5], i579[6])
  i578.colorMax = new pc.Color(i579[7], i579[8], i579[9], i579[10])
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i581 = data
  i580.mode = i581[0]
  var i583 = i581[1]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i583[i + 0]) );
  }
  i580.colorKeys = i582
  var i585 = i581[2]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i585[i + 0]) );
  }
  i580.alphaKeys = i584
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i586 = root || new pc.ParticleSystemColorBySpeed()
  var i587 = data
  i586.enabled = !!i587[0]
  i586.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i587[1], i586.color)
  i586.range = new pc.Vec2( i587[2], i587[3] )
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i591 = data
  i590.color = new pc.Color(i591[0], i591[1], i591[2], i591[3])
  i590.time = i591[4]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i595 = data
  i594.alpha = i595[0]
  i594.time = i595[1]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i596 = root || new pc.ParticleSystemColorOverLifetime()
  var i597 = data
  i596.enabled = !!i597[0]
  i596.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i597[1], i596.color)
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i598 = root || new pc.ParticleSystemEmitter()
  var i599 = data
  i598.enabled = !!i599[0]
  i598.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[1], i598.rateOverTime)
  i598.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[2], i598.rateOverDistance)
  var i601 = i599[3]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i601[i + 0]) );
  }
  i598.bursts = i600
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i604 = root || new pc.ParticleSystemBurst()
  var i605 = data
  i604.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[0], i604.count)
  i604.cycleCount = i605[1]
  i604.minCount = i605[2]
  i604.maxCount = i605[3]
  i604.repeatInterval = i605[4]
  i604.time = i605[5]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i606 = root || new pc.ParticleSystemRotationBySpeed()
  var i607 = data
  i606.enabled = !!i607[0]
  i606.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[1], i606.x)
  i606.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[2], i606.y)
  i606.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[3], i606.z)
  i606.separateAxes = !!i607[4]
  i606.range = new pc.Vec2( i607[5], i607[6] )
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i608 = root || new pc.ParticleSystemRotationOverLifetime()
  var i609 = data
  i608.enabled = !!i609[0]
  i608.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[1], i608.x)
  i608.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[2], i608.y)
  i608.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[3], i608.z)
  i608.separateAxes = !!i609[4]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i610 = root || new pc.ParticleSystemShape()
  var i611 = data
  i610.enabled = !!i611[0]
  i610.shapeType = i611[1]
  i610.randomDirectionAmount = i611[2]
  i610.sphericalDirectionAmount = i611[3]
  i610.randomPositionAmount = i611[4]
  i610.alignToDirection = !!i611[5]
  i610.radius = i611[6]
  i610.radiusMode = i611[7]
  i610.radiusSpread = i611[8]
  i610.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[9], i610.radiusSpeed)
  i610.radiusThickness = i611[10]
  i610.angle = i611[11]
  i610.length = i611[12]
  i610.boxThickness = new pc.Vec3( i611[13], i611[14], i611[15] )
  i610.meshShapeType = i611[16]
  request.r(i611[17], i611[18], 0, i610, 'mesh')
  request.r(i611[19], i611[20], 0, i610, 'meshRenderer')
  request.r(i611[21], i611[22], 0, i610, 'skinnedMeshRenderer')
  i610.useMeshMaterialIndex = !!i611[23]
  i610.meshMaterialIndex = i611[24]
  i610.useMeshColors = !!i611[25]
  i610.normalOffset = i611[26]
  i610.arc = i611[27]
  i610.arcMode = i611[28]
  i610.arcSpread = i611[29]
  i610.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[30], i610.arcSpeed)
  i610.donutRadius = i611[31]
  i610.position = new pc.Vec3( i611[32], i611[33], i611[34] )
  i610.rotation = new pc.Vec3( i611[35], i611[36], i611[37] )
  i610.scale = new pc.Vec3( i611[38], i611[39], i611[40] )
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i612 = root || new pc.ParticleSystemSizeBySpeed()
  var i613 = data
  i612.enabled = !!i613[0]
  i612.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[1], i612.x)
  i612.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[2], i612.y)
  i612.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[3], i612.z)
  i612.separateAxes = !!i613[4]
  i612.range = new pc.Vec2( i613[5], i613[6] )
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i614 = root || new pc.ParticleSystemSizeOverLifetime()
  var i615 = data
  i614.enabled = !!i615[0]
  i614.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[1], i614.x)
  i614.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[2], i614.y)
  i614.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[3], i614.z)
  i614.separateAxes = !!i615[4]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i616 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i617 = data
  i616.enabled = !!i617[0]
  i616.mode = i617[1]
  i616.animation = i617[2]
  i616.numTilesX = i617[3]
  i616.numTilesY = i617[4]
  i616.useRandomRow = !!i617[5]
  i616.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[6], i616.frameOverTime)
  i616.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[7], i616.startFrame)
  i616.cycleCount = i617[8]
  i616.rowIndex = i617[9]
  i616.flipU = i617[10]
  i616.flipV = i617[11]
  i616.spriteCount = i617[12]
  var i619 = i617[13]
  var i618 = []
  for(var i = 0; i < i619.length; i += 2) {
  request.r(i619[i + 0], i619[i + 1], 2, i618, '')
  }
  i616.sprites = i618
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i622 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i623 = data
  i622.enabled = !!i623[0]
  i622.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[1], i622.x)
  i622.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[2], i622.y)
  i622.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[3], i622.z)
  i622.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[4], i622.radial)
  i622.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[5], i622.speedModifier)
  i622.space = i623[6]
  i622.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[7], i622.orbitalX)
  i622.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[8], i622.orbitalY)
  i622.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[9], i622.orbitalZ)
  i622.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[10], i622.orbitalOffsetX)
  i622.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[11], i622.orbitalOffsetY)
  i622.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[12], i622.orbitalOffsetZ)
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i624 = root || new pc.ParticleSystemNoise()
  var i625 = data
  i624.enabled = !!i625[0]
  i624.separateAxes = !!i625[1]
  i624.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[2], i624.strengthX)
  i624.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[3], i624.strengthY)
  i624.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[4], i624.strengthZ)
  i624.frequency = i625[5]
  i624.damping = !!i625[6]
  i624.octaveCount = i625[7]
  i624.octaveMultiplier = i625[8]
  i624.octaveScale = i625[9]
  i624.quality = i625[10]
  i624.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[11], i624.scrollSpeed)
  i624.scrollSpeedMultiplier = i625[12]
  i624.remapEnabled = !!i625[13]
  i624.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[14], i624.remapX)
  i624.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[15], i624.remapY)
  i624.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[16], i624.remapZ)
  i624.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[17], i624.positionAmount)
  i624.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[18], i624.rotationAmount)
  i624.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[19], i624.sizeAmount)
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i626 = root || new pc.ParticleSystemInheritVelocity()
  var i627 = data
  i626.enabled = !!i627[0]
  i626.mode = i627[1]
  i626.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[2], i626.curve)
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i628 = root || new pc.ParticleSystemForceOverLifetime()
  var i629 = data
  i628.enabled = !!i629[0]
  i628.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[1], i628.x)
  i628.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[2], i628.y)
  i628.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[3], i628.z)
  i628.space = i629[4]
  i628.randomized = !!i629[5]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i630 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i631 = data
  i630.enabled = !!i631[0]
  i630.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[1], i630.limit)
  i630.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[2], i630.limitX)
  i630.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[3], i630.limitY)
  i630.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[4], i630.limitZ)
  i630.dampen = i631[5]
  i630.separateAxes = !!i631[6]
  i630.space = i631[7]
  i630.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[8], i630.drag)
  i630.multiplyDragByParticleSize = !!i631[9]
  i630.multiplyDragByParticleVelocity = !!i631[10]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'mesh')
  i632.meshCount = i633[2]
  i632.activeVertexStreamsCount = i633[3]
  i632.alignment = i633[4]
  i632.renderMode = i633[5]
  i632.sortMode = i633[6]
  i632.lengthScale = i633[7]
  i632.velocityScale = i633[8]
  i632.cameraVelocityScale = i633[9]
  i632.normalDirection = i633[10]
  i632.sortingFudge = i633[11]
  i632.minParticleSize = i633[12]
  i632.maxParticleSize = i633[13]
  i632.pivot = new pc.Vec3( i633[14], i633[15], i633[16] )
  request.r(i633[17], i633[18], 0, i632, 'trailMaterial')
  i632.applyActiveColorSpace = !!i633[19]
  i632.enabled = !!i633[20]
  request.r(i633[21], i633[22], 0, i632, 'sharedMaterial')
  var i635 = i633[23]
  var i634 = []
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 2, i634, '')
  }
  i632.sharedMaterials = i634
  i632.receiveShadows = !!i633[24]
  i632.shadowCastingMode = i633[25]
  i632.sortingLayerID = i633[26]
  i632.sortingOrder = i633[27]
  i632.lightmapIndex = i633[28]
  i632.lightmapSceneIndex = i633[29]
  i632.lightmapScaleOffset = new pc.Vec4( i633[30], i633[31], i633[32], i633[33] )
  i632.lightProbeUsage = i633[34]
  i632.reflectionProbeUsage = i633[35]
  return i632
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i638 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i639 = data
  i638.targetIsSelf = !!i639[0]
  request.r(i639[1], i639[2], 0, i638, 'targetGO')
  i638.tweenTargetIsTargetGO = !!i639[3]
  i638.delay = i639[4]
  i638.duration = i639[5]
  i638.easeType = i639[6]
  i638.easeCurve = new pc.AnimationCurve( { keys_flow: i639[7] } )
  i638.loopType = i639[8]
  i638.loops = i639[9]
  i638.id = i639[10]
  i638.isRelative = !!i639[11]
  i638.isFrom = !!i639[12]
  i638.isIndependentUpdate = !!i639[13]
  i638.autoKill = !!i639[14]
  i638.autoGenerate = !!i639[15]
  i638.isActive = !!i639[16]
  i638.isValid = !!i639[17]
  request.r(i639[18], i639[19], 0, i638, 'target')
  i638.animationType = i639[20]
  i638.targetType = i639[21]
  i638.forcedTargetType = i639[22]
  i638.autoPlay = !!i639[23]
  i638.useTargetAsV3 = !!i639[24]
  i638.endValueFloat = i639[25]
  i638.endValueV3 = new pc.Vec3( i639[26], i639[27], i639[28] )
  i638.endValueV2 = new pc.Vec2( i639[29], i639[30] )
  i638.endValueColor = new pc.Color(i639[31], i639[32], i639[33], i639[34])
  i638.endValueString = i639[35]
  i638.endValueRect = UnityEngine.Rect.MinMaxRect(i639[36], i639[37], i639[38], i639[39])
  request.r(i639[40], i639[41], 0, i638, 'endValueTransform')
  i638.optionalBool0 = !!i639[42]
  i638.optionalBool1 = !!i639[43]
  i638.optionalFloat0 = i639[44]
  i638.optionalInt0 = i639[45]
  i638.optionalRotationMode = i639[46]
  i638.optionalScrambleMode = i639[47]
  i638.optionalShakeRandomnessMode = i639[48]
  i638.optionalString = i639[49]
  i638.updateType = i639[50]
  i638.isSpeedBased = !!i639[51]
  i638.hasOnStart = !!i639[52]
  i638.hasOnPlay = !!i639[53]
  i638.hasOnUpdate = !!i639[54]
  i638.hasOnStepComplete = !!i639[55]
  i638.hasOnComplete = !!i639[56]
  i638.hasOnTweenCreated = !!i639[57]
  i638.hasOnRewind = !!i639[58]
  i638.onStart = request.d('UnityEngine.Events.UnityEvent', i639[59], i638.onStart)
  i638.onPlay = request.d('UnityEngine.Events.UnityEvent', i639[60], i638.onPlay)
  i638.onUpdate = request.d('UnityEngine.Events.UnityEvent', i639[61], i638.onUpdate)
  i638.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i639[62], i638.onStepComplete)
  i638.onComplete = request.d('UnityEngine.Events.UnityEvent', i639[63], i638.onComplete)
  i638.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i639[64], i638.onTweenCreated)
  i638.onRewind = request.d('UnityEngine.Events.UnityEvent', i639[65], i638.onRewind)
  return i638
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i641 = data
  i640.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i641[0], i640.m_PersistentCalls)
  return i640
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.Button' )
  var i643 = data
  i642.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i643[0], i642.m_OnClick)
  i642.m_Navigation = request.d('UnityEngine.UI.Navigation', i643[1], i642.m_Navigation)
  i642.m_Transition = i643[2]
  i642.m_Colors = request.d('UnityEngine.UI.ColorBlock', i643[3], i642.m_Colors)
  i642.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i643[4], i642.m_SpriteState)
  i642.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i643[5], i642.m_AnimationTriggers)
  i642.m_Interactable = !!i643[6]
  request.r(i643[7], i643[8], 0, i642, 'm_TargetGraphic')
  return i642
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i645 = data
  i644.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i645[0], i644.m_PersistentCalls)
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'clip')
  request.r(i647[2], i647[3], 0, i646, 'outputAudioMixerGroup')
  i646.playOnAwake = !!i647[4]
  i646.loop = !!i647[5]
  i646.time = i647[6]
  i646.volume = i647[7]
  i646.pitch = i647[8]
  i646.enabled = !!i647[9]
  return i646
}

Deserializers["InteractController"] = function (request, data, root) {
  var i648 = root || request.c( 'InteractController' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'canvas')
  i648.maxPos = new pc.Vec2( i649[2], i649[3] )
  i648.minPos = new pc.Vec2( i649[4], i649[5] )
  var i651 = i649[6]
  var i650 = new (System.Collections.Generic.List$1(Bridge.ns('ItemDrag')))
  for(var i = 0; i < i651.length; i += 1) {
    i650.add(request.d('ItemDrag', i651[i + 0]));
  }
  i648.itemDrags = i650
  var i653 = i649[7]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('ItemClick')))
  for(var i = 0; i < i653.length; i += 1) {
    i652.add(request.d('ItemClick', i653[i + 0]));
  }
  i648.itemClicks = i652
  i648.currentTarget = request.d('ItemDrag', i649[8], i648.currentTarget)
  request.r(i649[9], i649[10], 0, i648, 'pickupSound')
  request.r(i649[11], i649[12], 0, i648, 'tut')
  i648.lockPlay = !!i649[13]
  return i648
}

Deserializers["ItemDrag"] = function (request, data, root) {
  var i656 = root || request.c( 'ItemDrag' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'DragArea')
  request.r(i657[2], i657[3], 0, i656, 'Item')
  request.r(i657[4], i657[5], 0, i656, 'Sound')
  request.r(i657[6], i657[7], 0, i656, 'Icon')
  return i656
}

Deserializers["ItemClick"] = function (request, data, root) {
  var i660 = root || request.c( 'ItemClick' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'ClickArea')
  request.r(i661[2], i661[3], 0, i660, 'Item')
  request.r(i661[4], i661[5], 0, i660, 'Sound')
  request.r(i661[6], i661[7], 0, i660, 'UnActiveObject')
  return i660
}

Deserializers["GameController"] = function (request, data, root) {
  var i662 = root || request.c( 'GameController' )
  var i663 = data
  i662.OnComplete = request.d('System.Action', i663[0], i662.OnComplete)
  i662.CompleteStep = request.d('System.Action', i663[1], i662.CompleteStep)
  var i665 = i663[2]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationController')))
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 1, i664, '')
  }
  i662.skeletons = i664
  request.r(i663[3], i663[4], 0, i662, 'character')
  var i667 = i663[5]
  var i666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i667.length; i += 2) {
  request.r(i667[i + 0], i667[i + 1], 1, i666, '')
  }
  i662.correctItems = i666
  var i669 = i663[6]
  var i668 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 1, i668, '')
  }
  i662.phase = i668
  request.r(i663[7], i663[8], 0, i662, 'loss')
  request.r(i663[9], i663[10], 0, i662, 'win')
  request.r(i663[11], i663[12], 0, i662, 'failScene')
  request.r(i663[13], i663[14], 0, i662, 'winScene')
  i662.complete = !!i663[15]
  i662.end = !!i663[16]
  i662.currentStep = i663[17]
  i662.correctStep = i663[18]
  request.r(i663[19], i663[20], 0, i662, 'currentStepText')
  i662.maxStep = i663[21]
  request.r(i663[22], i663[23], 0, i662, 'maxStepText')
  request.r(i663[24], i663[25], 0, i662, 'slider')
  i662.DelayComplete = i663[26]
  i662.startSub = request.d('Sub', i663[27], i662.startSub)
  i662.phaseSub = request.d('Sub', i663[28], i662.phaseSub)
  i662.winSub = request.d('Sub', i663[29], i662.winSub)
  i662.failSub = request.d('Sub', i663[30], i662.failSub)
  var i671 = i663[31]
  var i670 = new (System.Collections.Generic.List$1(Bridge.ns('Sub')))
  for(var i = 0; i < i671.length; i += 1) {
    i670.add(request.d('Sub', i671[i + 0]));
  }
  i662.subs = i670
  request.r(i663[32], i663[33], 0, i662, 'sub')
  request.r(i663[34], i663[35], 0, i662, 'subText')
  i662.completeSub = !!i663[36]
  return i662
}

Deserializers["System.Action"] = function (request, data, root) {
  var i672 = root || request.c( 'System.Action' )
  var i673 = data
  return i672
}

Deserializers["Sub"] = function (request, data, root) {
  var i678 = root || request.c( 'Sub' )
  var i679 = data
  i678.timeSub = i679[0]
  request.r(i679[1], i679[2], 0, i678, 'Item')
  i678.SubText = i679[3]
  request.r(i679[4], i679[5], 0, i678, 'SubSound')
  return i678
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i682 = root || request.c( 'LayoutController' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'CTA')
  i682.hide = !!i683[2]
  return i682
}

Deserializers["AudioController"] = function (request, data, root) {
  var i684 = root || request.c( 'AudioController' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'BGM')
  request.r(i685[2], i685[3], 0, i684, 'musicSource')
  request.r(i685[4], i685[5], 0, i684, 'SFXPool')
  return i684
}

Deserializers["LunaController"] = function (request, data, root) {
  var i686 = root || request.c( 'LunaController' )
  var i687 = data
  i686.TimePlay = i687[0]
  i686.CountPlay = i687[1]
  i686.BGColor = new pc.Color(i687[2], i687[3], i687[4], i687[5])
  i686.GameBGColor = new pc.Color(i687[6], i687[7], i687[8], i687[9])
  i686.LevelTextColor = new pc.Color(i687[10], i687[11], i687[12], i687[13])
  i686.TitleTextColor = new pc.Color(i687[14], i687[15], i687[16], i687[17])
  i686.SubBGColor = new pc.Color(i687[18], i687[19], i687[20], i687[21])
  request.r(i687[22], i687[23], 0, i686, 'time')
  request.r(i687[24], i687[25], 0, i686, 'BGImage')
  request.r(i687[26], i687[27], 0, i686, 'GameBGImage')
  request.r(i687[28], i687[29], 0, i686, 'levelText')
  request.r(i687[30], i687[31], 0, i686, 'titleText')
  request.r(i687[32], i687[33], 0, i686, 'subBG')
  request.r(i687[34], i687[35], 0, i686, 'endCard')
  var i689 = i687[36]
  var i688 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i689.length; i += 2) {
  request.r(i689[i + 0], i689[i + 1], 1, i688, '')
  }
  i686.CTA = i688
  i686.count = i687[37]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i693 = data
  i692.ambientIntensity = i693[0]
  i692.reflectionIntensity = i693[1]
  i692.ambientMode = i693[2]
  i692.ambientLight = new pc.Color(i693[3], i693[4], i693[5], i693[6])
  i692.ambientSkyColor = new pc.Color(i693[7], i693[8], i693[9], i693[10])
  i692.ambientGroundColor = new pc.Color(i693[11], i693[12], i693[13], i693[14])
  i692.ambientEquatorColor = new pc.Color(i693[15], i693[16], i693[17], i693[18])
  i692.fogColor = new pc.Color(i693[19], i693[20], i693[21], i693[22])
  i692.fogEndDistance = i693[23]
  i692.fogStartDistance = i693[24]
  i692.fogDensity = i693[25]
  i692.fog = !!i693[26]
  request.r(i693[27], i693[28], 0, i692, 'skybox')
  i692.fogMode = i693[29]
  var i695 = i693[30]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i695[i + 0]) );
  }
  i692.lightmaps = i694
  i692.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i693[31], i692.lightProbes)
  i692.lightmapsMode = i693[32]
  i692.mixedBakeMode = i693[33]
  i692.environmentLightingMode = i693[34]
  i692.ambientProbe = new pc.SphericalHarmonicsL2(i693[35])
  request.r(i693[36], i693[37], 0, i692, 'customReflection')
  request.r(i693[38], i693[39], 0, i692, 'defaultReflection')
  i692.defaultReflectionMode = i693[40]
  i692.defaultReflectionResolution = i693[41]
  i692.sunLightObjectId = i693[42]
  i692.pixelLightCount = i693[43]
  i692.defaultReflectionHDR = !!i693[44]
  i692.hasLightDataAsset = !!i693[45]
  i692.hasManualGenerate = !!i693[46]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'lightmapColor')
  request.r(i699[2], i699[3], 0, i698, 'lightmapDirection')
  request.r(i699[4], i699[5], 0, i698, 'shadowMask')
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i700 = root || new UnityEngine.LightProbes()
  var i701 = data
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i709 = data
  var i711 = i709[0]
  var i710 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i711.length; i += 1) {
    i710.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i711[i + 0]));
  }
  i708.ShaderCompilationErrors = i710
  i708.name = i709[1]
  i708.guid = i709[2]
  var i713 = i709[3]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( i713[i + 0] );
  }
  i708.shaderDefinedKeywords = i712
  var i715 = i709[4]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i715[i + 0]) );
  }
  i708.passes = i714
  var i717 = i709[5]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i717[i + 0]) );
  }
  i708.usePasses = i716
  var i719 = i709[6]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i719[i + 0]) );
  }
  i708.defaultParameterValues = i718
  request.r(i709[7], i709[8], 0, i708, 'unityFallbackShader')
  i708.readDepth = !!i709[9]
  i708.hasDepthOnlyPass = !!i709[10]
  i708.isCreatedByShaderGraph = !!i709[11]
  i708.disableBatching = !!i709[12]
  i708.compiled = !!i709[13]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i723 = data
  i722.shaderName = i723[0]
  i722.errorMessage = i723[1]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i726 = root || new pc.UnityShaderPass()
  var i727 = data
  i726.id = i727[0]
  i726.subShaderIndex = i727[1]
  i726.name = i727[2]
  i726.passType = i727[3]
  i726.grabPassTextureName = i727[4]
  i726.usePass = !!i727[5]
  i726.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[6], i726.zTest)
  i726.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[7], i726.zWrite)
  i726.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[8], i726.culling)
  i726.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i727[9], i726.blending)
  i726.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i727[10], i726.alphaBlending)
  i726.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[11], i726.colorWriteMask)
  i726.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[12], i726.offsetUnits)
  i726.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[13], i726.offsetFactor)
  i726.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[14], i726.stencilRef)
  i726.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[15], i726.stencilReadMask)
  i726.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[16], i726.stencilWriteMask)
  i726.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i727[17], i726.stencilOp)
  i726.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i727[18], i726.stencilOpFront)
  i726.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i727[19], i726.stencilOpBack)
  var i729 = i727[20]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i729[i + 0]) );
  }
  i726.tags = i728
  var i731 = i727[21]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( i731[i + 0] );
  }
  i726.passDefinedKeywords = i730
  var i733 = i727[22]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i733[i + 0]) );
  }
  i726.passDefinedKeywordGroups = i732
  var i735 = i727[23]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i735[i + 0]) );
  }
  i726.variants = i734
  var i737 = i727[24]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i737[i + 0]) );
  }
  i726.excludedVariants = i736
  i726.hasDepthReader = !!i727[25]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i739 = data
  i738.val = i739[0]
  i738.name = i739[1]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i741 = data
  i740.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[0], i740.src)
  i740.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[1], i740.dst)
  i740.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[2], i740.op)
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i743 = data
  i742.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i743[0], i742.pass)
  i742.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i743[1], i742.fail)
  i742.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i743[2], i742.zFail)
  i742.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i743[3], i742.comp)
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i747 = data
  i746.name = i747[0]
  i746.value = i747[1]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i751 = data
  var i753 = i751[0]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( i753[i + 0] );
  }
  i750.keywords = i752
  i750.hasDiscard = !!i751[1]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i757 = data
  i756.passId = i757[0]
  i756.subShaderIndex = i757[1]
  var i759 = i757[2]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( i759[i + 0] );
  }
  i756.keywords = i758
  i756.vertexProgram = i757[3]
  i756.fragmentProgram = i757[4]
  i756.exportedForWebGl2 = !!i757[5]
  i756.readDepth = !!i757[6]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'shader')
  i762.pass = i763[2]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i767 = data
  i766.name = i767[0]
  i766.type = i767[1]
  i766.value = new pc.Vec4( i767[2], i767[3], i767[4], i767[5] )
  i766.textureValue = i767[6]
  i766.shaderPropertyFlag = i767[7]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i769 = data
  i768.name = i769[0]
  request.r(i769[1], i769[2], 0, i768, 'texture')
  i768.aabb = i769[3]
  i768.vertices = i769[4]
  i768.triangles = i769[5]
  i768.textureRect = UnityEngine.Rect.MinMaxRect(i769[6], i769[7], i769[8], i769[9])
  i768.packedRect = UnityEngine.Rect.MinMaxRect(i769[10], i769[11], i769[12], i769[13])
  i768.border = new pc.Vec4( i769[14], i769[15], i769[16], i769[17] )
  i768.transparency = i769[18]
  i768.bounds = i769[19]
  i768.pixelsPerUnit = i769[20]
  i768.textureWidth = i769[21]
  i768.textureHeight = i769[22]
  i768.nativeSize = new pc.Vec2( i769[23], i769[24] )
  i768.pivot = new pc.Vec2( i769[25], i769[26] )
  i768.textureRectOffset = new pc.Vec2( i769[27], i769[28] )
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i771 = data
  i770.name = i771[0]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i773 = data
  i772.name = i773[0]
  i772.ascent = i773[1]
  i772.originalLineHeight = i773[2]
  i772.fontSize = i773[3]
  var i775 = i773[4]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i775[i + 0]) );
  }
  i772.characterInfo = i774
  request.r(i773[5], i773[6], 0, i772, 'texture')
  i772.originalFontSize = i773[7]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i779 = data
  i778.index = i779[0]
  i778.advance = i779[1]
  i778.bearing = i779[2]
  i778.glyphWidth = i779[3]
  i778.glyphHeight = i779[4]
  i778.minX = i779[5]
  i778.maxX = i779[6]
  i778.minY = i779[7]
  i778.maxY = i779[8]
  i778.uvBottomLeftX = i779[9]
  i778.uvBottomLeftY = i779[10]
  i778.uvBottomRightX = i779[11]
  i778.uvBottomRightY = i779[12]
  i778.uvTopLeftX = i779[13]
  i778.uvTopLeftY = i779[14]
  i778.uvTopRightX = i779[15]
  i778.uvTopRightY = i779[16]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i781 = data
  i780.name = i781[0]
  i780.bytes64 = i781[1]
  i780.data = i781[2]
  return i780
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i782 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i783 = data
  var i785 = i783[0]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i782.atlasAssets = i784
  i782.scale = i783[1]
  request.r(i783[2], i783[3], 0, i782, 'skeletonJSON')
  i782.isUpgradingBlendModeMaterials = !!i783[4]
  i782.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i783[5], i782.blendModeMaterials)
  var i787 = i783[6]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 1, i786, '')
  }
  i782.skeletonDataModifiers = i786
  var i789 = i783[7]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( i789[i + 0] );
  }
  i782.fromAnimation = i788
  var i791 = i783[8]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( i791[i + 0] );
  }
  i782.toAnimation = i790
  i782.duration = i783[9]
  i782.defaultMix = i783[10]
  request.r(i783[11], i783[12], 0, i782, 'controller')
  return i782
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i794 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i795 = data
  i794.applyAdditiveMaterial = !!i795[0]
  var i797 = i795[1]
  var i796 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i797.length; i += 1) {
    i796.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i797[i + 0]));
  }
  i794.additiveMaterials = i796
  var i799 = i795[2]
  var i798 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i799.length; i += 1) {
    i798.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i799[i + 0]));
  }
  i794.multiplyMaterials = i798
  var i801 = i795[3]
  var i800 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i801.length; i += 1) {
    i800.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i801[i + 0]));
  }
  i794.screenMaterials = i800
  i794.requiresBlendModeMaterials = !!i795[4]
  return i794
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i804 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i805 = data
  i804.pageName = i805[0]
  request.r(i805[1], i805[2], 0, i804, 'material')
  return i804
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i808 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'atlasFile')
  var i811 = i809[2]
  var i810 = []
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 2, i810, '')
  }
  i808.materials = i810
  i808.textureLoadingMode = i809[3]
  request.r(i809[4], i809[5], 0, i808, 'onDemandTextureLoader')
  return i808
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

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i819 = data
  var i821 = i819[0]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i821[i + 0]) );
  }
  i818.files = i820
  i818.componentToPrefabIds = i819[1]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i825 = data
  i824.path = i825[0]
  request.r(i825[1], i825[2], 0, i824, 'unityObject')
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i827 = data
  var i829 = i827[0]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i829[i + 0]) );
  }
  i826.scriptsExecutionOrder = i828
  var i831 = i827[1]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i831[i + 0]) );
  }
  i826.sortingLayers = i830
  var i833 = i827[2]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i833[i + 0]) );
  }
  i826.cullingLayers = i832
  i826.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i827[3], i826.timeSettings)
  i826.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i827[4], i826.physicsSettings)
  i826.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i827[5], i826.physics2DSettings)
  i826.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i827[6], i826.qualitySettings)
  i826.enableRealtimeShadows = !!i827[7]
  i826.enableAutoInstancing = !!i827[8]
  i826.enableStaticBatching = !!i827[9]
  i826.enableDynamicBatching = !!i827[10]
  i826.usePreservativeDynamicBatching = !!i827[11]
  i826.lightmapEncodingQuality = i827[12]
  i826.desiredColorSpace = i827[13]
  var i835 = i827[14]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( i835[i + 0] );
  }
  i826.allTags = i834
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i839 = data
  i838.name = i839[0]
  i838.value = i839[1]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i843 = data
  i842.id = i843[0]
  i842.name = i843[1]
  i842.value = i843[2]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i847 = data
  i846.id = i847[0]
  i846.name = i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i849 = data
  i848.fixedDeltaTime = i849[0]
  i848.maximumDeltaTime = i849[1]
  i848.timeScale = i849[2]
  i848.maximumParticleTimestep = i849[3]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i851 = data
  i850.gravity = new pc.Vec3( i851[0], i851[1], i851[2] )
  i850.defaultSolverIterations = i851[3]
  i850.bounceThreshold = i851[4]
  i850.autoSyncTransforms = !!i851[5]
  i850.autoSimulation = !!i851[6]
  var i853 = i851[7]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i853[i + 0]) );
  }
  i850.collisionMatrix = i852
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i857 = data
  i856.enabled = !!i857[0]
  i856.layerId = i857[1]
  i856.otherLayerId = i857[2]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'material')
  i858.gravity = new pc.Vec2( i859[2], i859[3] )
  i858.positionIterations = i859[4]
  i858.velocityIterations = i859[5]
  i858.velocityThreshold = i859[6]
  i858.maxLinearCorrection = i859[7]
  i858.maxAngularCorrection = i859[8]
  i858.maxTranslationSpeed = i859[9]
  i858.maxRotationSpeed = i859[10]
  i858.baumgarteScale = i859[11]
  i858.baumgarteTOIScale = i859[12]
  i858.timeToSleep = i859[13]
  i858.linearSleepTolerance = i859[14]
  i858.angularSleepTolerance = i859[15]
  i858.defaultContactOffset = i859[16]
  i858.autoSimulation = !!i859[17]
  i858.queriesHitTriggers = !!i859[18]
  i858.queriesStartInColliders = !!i859[19]
  i858.callbacksOnDisable = !!i859[20]
  i858.reuseCollisionCallbacks = !!i859[21]
  i858.autoSyncTransforms = !!i859[22]
  var i861 = i859[23]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i861[i + 0]) );
  }
  i858.collisionMatrix = i860
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i865 = data
  i864.enabled = !!i865[0]
  i864.layerId = i865[1]
  i864.otherLayerId = i865[2]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i867 = data
  var i869 = i867[0]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i869[i + 0]) );
  }
  i866.qualityLevels = i868
  var i871 = i867[1]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( i871[i + 0] );
  }
  i866.names = i870
  i866.shadows = i867[2]
  i866.anisotropicFiltering = i867[3]
  i866.antiAliasing = i867[4]
  i866.lodBias = i867[5]
  i866.shadowCascades = i867[6]
  i866.shadowDistance = i867[7]
  i866.shadowmaskMode = i867[8]
  i866.shadowProjection = i867[9]
  i866.shadowResolution = i867[10]
  i866.softParticles = !!i867[11]
  i866.softVegetation = !!i867[12]
  i866.activeColorSpace = i867[13]
  i866.desiredColorSpace = i867[14]
  i866.masterTextureLimit = i867[15]
  i866.maxQueuedFrames = i867[16]
  i866.particleRaycastBudget = i867[17]
  i866.pixelLightCount = i867[18]
  i866.realtimeReflectionProbes = !!i867[19]
  i866.shadowCascade2Split = i867[20]
  i866.shadowCascade4Split = new pc.Vec3( i867[21], i867[22], i867[23] )
  i866.streamingMipmapsActive = !!i867[24]
  i866.vSyncCount = i867[25]
  i866.asyncUploadBufferSize = i867[26]
  i866.asyncUploadTimeSlice = i867[27]
  i866.billboardsFaceCameraPosition = !!i867[28]
  i866.shadowNearPlaneOffset = i867[29]
  i866.streamingMipmapsMemoryBudget = i867[30]
  i866.maximumLODLevel = i867[31]
  i866.streamingMipmapsAddAllCameras = !!i867[32]
  i866.streamingMipmapsMaxLevelReduction = i867[33]
  i866.streamingMipmapsRenderersPerFrame = i867[34]
  i866.resolutionScalingFixedDPIFactor = i867[35]
  i866.streamingMipmapsMaxFileIORequests = i867[36]
  i866.currentQualityLevel = i867[37]
  return i866
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'm_ObjectArgument')
  i874.m_ObjectArgumentAssemblyTypeName = i875[2]
  i874.m_IntArgument = i875[3]
  i874.m_FloatArgument = i875[4]
  i874.m_StringArgument = i875[5]
  i874.m_BoolArgument = !!i875[6]
  return i874
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[2],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[2],"72":[73],"74":[75],"76":[75],"8":[7],"22":[18],"77":[78],"79":[7],"80":[11,7],"81":[73],"18":[11,7],"82":[83,73],"84":[73,85],"86":[73],"87":[51],"88":[58],"89":[78],"90":[91],"92":[93],"94":[2],"95":[96],"97":[7],"98":[11,7],"99":[73],"100":[11,7],"101":[7],"102":[7],"103":[73,7],"104":[7,11],"105":[106],"107":[106],"108":[106],"109":[7],"110":[7],"10":[8],"12":[11,7],"111":[7],"9":[8],"112":[7],"113":[7],"114":[7],"115":[7],"116":[7],"117":[7],"118":[7],"17":[7],"119":[7],"120":[11,7],"121":[7],"122":[7],"123":[7],"16":[7],"13":[11,7],"124":[7],"125":[5],"126":[5],"6":[5],"127":[5],"128":[2],"129":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.Slider","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","CharacterSkinController","UnityEngine.GameObject","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","UnityEngine.AudioSource","InteractController","GameController","LayoutController","AudioController","UnityEngine.Transform","LunaController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "08/24/2026 10:54:14";

Deserializers.lunaDaysRunning = "0.7";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BEQ_V33_NgocNDL_TamNTM";

Deserializers.lunaAppID = "29138";

Deserializers.projectId = "5b44dfd2230fe054ca8da1b65d37e310";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1868";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4329";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "96547055-670b-4e26-a3ab-c51be06735be";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

