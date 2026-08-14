var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointSpring' )
  var i429 = data
  i428.spring = i429[0]
  i428.damper = i429[1]
  i428.targetPosition = i429[2]
  return i428
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointMotor' )
  var i431 = data
  i430.m_TargetVelocity = i431[0]
  i430.m_Force = i431[1]
  i430.m_FreeSpin = i431[2]
  return i430
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointLimits' )
  var i433 = data
  i432.m_Min = i433[0]
  i432.m_Max = i433[1]
  i432.m_Bounciness = i433[2]
  i432.m_BounceMinVelocity = i433[3]
  i432.m_ContactDistance = i433[4]
  i432.minBounce = i433[5]
  i432.maxBounce = i433[6]
  return i432
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.JointDrive' )
  var i435 = data
  i434.m_PositionSpring = i435[0]
  i434.m_PositionDamper = i435[1]
  i434.m_MaximumForce = i435[2]
  i434.m_UseAcceleration = i435[3]
  return i434
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i437 = data
  i436.m_Spring = i437[0]
  i436.m_Damper = i437[1]
  return i436
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i439 = data
  i438.m_Limit = i439[0]
  i438.m_Bounciness = i439[1]
  i438.m_ContactDistance = i439[2]
  return i438
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i441 = data
  i440.m_ExtremumSlip = i441[0]
  i440.m_ExtremumValue = i441[1]
  i440.m_AsymptoteSlip = i441[2]
  i440.m_AsymptoteValue = i441[3]
  i440.m_Stiffness = i441[4]
  return i440
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i443 = data
  i442.m_LowerAngle = i443[0]
  i442.m_UpperAngle = i443[1]
  return i442
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i445 = data
  i444.m_MotorSpeed = i445[0]
  i444.m_MaximumMotorTorque = i445[1]
  return i444
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i447 = data
  i446.m_DampingRatio = i447[0]
  i446.m_Frequency = i447[1]
  i446.m_Angle = i447[2]
  return i446
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i449 = data
  i448.m_LowerTranslation = i449[0]
  i448.m_UpperTranslation = i449[1]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i451 = data
  i450.name = i451[0]
  i450.width = i451[1]
  i450.height = i451[2]
  i450.mipmapCount = i451[3]
  i450.anisoLevel = i451[4]
  i450.filterMode = i451[5]
  i450.hdr = !!i451[6]
  i450.format = i451[7]
  i450.wrapMode = i451[8]
  i450.alphaIsTransparency = !!i451[9]
  i450.alphaSource = i451[10]
  i450.graphicsFormat = i451[11]
  i450.sRGBTexture = !!i451[12]
  i450.desiredColorSpace = i451[13]
  i450.wrapU = i451[14]
  i450.wrapV = i451[15]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i452 = root || new pc.UnityMaterial()
  var i453 = data
  i452.name = i453[0]
  request.r(i453[1], i453[2], 0, i452, 'shader')
  i452.renderQueue = i453[3]
  i452.enableInstancing = !!i453[4]
  var i455 = i453[5]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i455[i + 0]) );
  }
  i452.floatParameters = i454
  var i457 = i453[6]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i457[i + 0]) );
  }
  i452.colorParameters = i456
  var i459 = i453[7]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i459[i + 0]) );
  }
  i452.vectorParameters = i458
  var i461 = i453[8]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i461[i + 0]) );
  }
  i452.textureParameters = i460
  var i463 = i453[9]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i463[i + 0]) );
  }
  i452.materialFlags = i462
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i467 = data
  i466.name = i467[0]
  i466.value = i467[1]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i471 = data
  i470.name = i471[0]
  i470.value = new pc.Color(i471[1], i471[2], i471[3], i471[4])
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i475 = data
  i474.name = i475[0]
  i474.value = new pc.Vec4( i475[1], i475[2], i475[3], i475[4] )
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i479 = data
  i478.name = i479[0]
  request.r(i479[1], i479[2], 0, i478, 'value')
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i483 = data
  i482.name = i483[0]
  i482.enabled = !!i483[1]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i485 = data
  i484.name = i485[0]
  i484.index = i485[1]
  i484.startup = !!i485[2]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i487 = data
  i486.aspect = i487[0]
  i486.orthographic = !!i487[1]
  i486.orthographicSize = i487[2]
  i486.backgroundColor = new pc.Color(i487[3], i487[4], i487[5], i487[6])
  i486.nearClipPlane = i487[7]
  i486.farClipPlane = i487[8]
  i486.fieldOfView = i487[9]
  i486.depth = i487[10]
  i486.clearFlags = i487[11]
  i486.cullingMask = i487[12]
  i486.rect = i487[13]
  request.r(i487[14], i487[15], 0, i486, 'targetTexture')
  i486.usePhysicalProperties = !!i487[16]
  i486.focalLength = i487[17]
  i486.sensorSize = new pc.Vec2( i487[18], i487[19] )
  i486.lensShift = new pc.Vec2( i487[20], i487[21] )
  i486.gateFit = i487[22]
  i486.commandBufferCount = i487[23]
  i486.cameraType = i487[24]
  i486.enabled = !!i487[25]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i489 = data
  i488.name = i489[0]
  i488.tagId = i489[1]
  i488.enabled = !!i489[2]
  i488.isStatic = !!i489[3]
  i488.layer = i489[4]
  return i488
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i491 = data
  request.r(i491[0], i491[1], 0, i490, 'm_FirstSelected')
  i490.m_sendNavigationEvents = !!i491[2]
  i490.m_DragThreshold = i491[3]
  return i490
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i493 = data
  i492.m_HorizontalAxis = i493[0]
  i492.m_VerticalAxis = i493[1]
  i492.m_SubmitButton = i493[2]
  i492.m_CancelButton = i493[3]
  i492.m_InputActionsPerSecond = i493[4]
  i492.m_RepeatDelay = i493[5]
  i492.m_ForceModuleActive = !!i493[6]
  i492.m_SendPointerHoverToParent = !!i493[7]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i495 = data
  i494.pivot = new pc.Vec2( i495[0], i495[1] )
  i494.anchorMin = new pc.Vec2( i495[2], i495[3] )
  i494.anchorMax = new pc.Vec2( i495[4], i495[5] )
  i494.sizeDelta = new pc.Vec2( i495[6], i495[7] )
  i494.anchoredPosition3D = new pc.Vec3( i495[8], i495[9], i495[10] )
  i494.rotation = new pc.Quat(i495[11], i495[12], i495[13], i495[14])
  i494.scale = new pc.Vec3( i495[15], i495[16], i495[17] )
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i497 = data
  i496.planeDistance = i497[0]
  i496.referencePixelsPerUnit = i497[1]
  i496.isFallbackOverlay = !!i497[2]
  i496.renderMode = i497[3]
  i496.renderOrder = i497[4]
  i496.sortingLayerName = i497[5]
  i496.sortingOrder = i497[6]
  i496.scaleFactor = i497[7]
  request.r(i497[8], i497[9], 0, i496, 'worldCamera')
  i496.overrideSorting = !!i497[10]
  i496.pixelPerfect = !!i497[11]
  i496.targetDisplay = i497[12]
  i496.overridePixelPerfect = !!i497[13]
  i496.enabled = !!i497[14]
  return i496
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i499 = data
  i498.m_UiScaleMode = i499[0]
  i498.m_ReferencePixelsPerUnit = i499[1]
  i498.m_ScaleFactor = i499[2]
  i498.m_ReferenceResolution = new pc.Vec2( i499[3], i499[4] )
  i498.m_ScreenMatchMode = i499[5]
  i498.m_MatchWidthOrHeight = i499[6]
  i498.m_PhysicalUnit = i499[7]
  i498.m_FallbackScreenDPI = i499[8]
  i498.m_DefaultSpriteDPI = i499[9]
  i498.m_DynamicPixelsPerUnit = i499[10]
  i498.m_PresetInfoIsWorld = !!i499[11]
  return i498
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i501 = data
  i500.m_IgnoreReversedGraphics = !!i501[0]
  i500.m_BlockingObjects = i501[1]
  i500.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i501[2] )
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i503 = data
  i502.cullTransparentMesh = !!i503[0]
  return i502
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.UI.Image' )
  var i505 = data
  request.r(i505[0], i505[1], 0, i504, 'm_Sprite')
  i504.m_Type = i505[2]
  i504.m_PreserveAspect = !!i505[3]
  i504.m_FillCenter = !!i505[4]
  i504.m_FillMethod = i505[5]
  i504.m_FillAmount = i505[6]
  i504.m_FillClockwise = !!i505[7]
  i504.m_FillOrigin = i505[8]
  i504.m_UseSpriteMesh = !!i505[9]
  i504.m_PixelsPerUnitMultiplier = i505[10]
  request.r(i505[11], i505[12], 0, i504, 'm_Material')
  i504.m_Maskable = !!i505[13]
  i504.m_Color = new pc.Color(i505[14], i505[15], i505[16], i505[17])
  i504.m_RaycastTarget = !!i505[18]
  i504.m_RaycastPadding = new pc.Vec4( i505[19], i505[20], i505[21], i505[22] )
  return i504
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.UI.Text' )
  var i507 = data
  i506.m_FontData = request.d('UnityEngine.UI.FontData', i507[0], i506.m_FontData)
  i506.m_Text = i507[1]
  request.r(i507[2], i507[3], 0, i506, 'm_Material')
  i506.m_Maskable = !!i507[4]
  i506.m_Color = new pc.Color(i507[5], i507[6], i507[7], i507[8])
  i506.m_RaycastTarget = !!i507[9]
  i506.m_RaycastPadding = new pc.Vec4( i507[10], i507[11], i507[12], i507[13] )
  return i506
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.UI.FontData' )
  var i509 = data
  request.r(i509[0], i509[1], 0, i508, 'm_Font')
  i508.m_FontSize = i509[2]
  i508.m_FontStyle = i509[3]
  i508.m_BestFit = !!i509[4]
  i508.m_MinSize = i509[5]
  i508.m_MaxSize = i509[6]
  i508.m_Alignment = i509[7]
  i508.m_AlignByGeometry = !!i509[8]
  i508.m_RichText = !!i509[9]
  i508.m_HorizontalOverflow = i509[10]
  i508.m_VerticalOverflow = i509[11]
  i508.m_LineSpacing = i509[12]
  return i508
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.UI.Slider' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'm_FillRect')
  request.r(i511[2], i511[3], 0, i510, 'm_HandleRect')
  i510.m_Direction = i511[4]
  i510.m_MinValue = i511[5]
  i510.m_MaxValue = i511[6]
  i510.m_WholeNumbers = !!i511[7]
  i510.m_Value = i511[8]
  i510.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i511[9], i510.m_OnValueChanged)
  i510.m_Navigation = request.d('UnityEngine.UI.Navigation', i511[10], i510.m_Navigation)
  i510.m_Transition = i511[11]
  i510.m_Colors = request.d('UnityEngine.UI.ColorBlock', i511[12], i510.m_Colors)
  i510.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i511[13], i510.m_SpriteState)
  i510.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i511[14], i510.m_AnimationTriggers)
  i510.m_Interactable = !!i511[15]
  request.r(i511[16], i511[17], 0, i510, 'm_TargetGraphic')
  return i510
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i513 = data
  i512.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i513[0], i512.m_PersistentCalls)
  return i512
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i515 = data
  var i517 = i515[0]
  var i516 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i517.length; i += 1) {
    i516.add(request.d('UnityEngine.Events.PersistentCall', i517[i + 0]));
  }
  i514.m_Calls = i516
  return i514
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i521 = data
  request.r(i521[0], i521[1], 0, i520, 'm_Target')
  i520.m_TargetAssemblyTypeName = i521[2]
  i520.m_MethodName = i521[3]
  i520.m_Mode = i521[4]
  i520.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i521[5], i520.m_Arguments)
  i520.m_CallState = i521[6]
  return i520
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i523 = data
  i522.m_Mode = i523[0]
  i522.m_WrapAround = !!i523[1]
  request.r(i523[2], i523[3], 0, i522, 'm_SelectOnUp')
  request.r(i523[4], i523[5], 0, i522, 'm_SelectOnDown')
  request.r(i523[6], i523[7], 0, i522, 'm_SelectOnLeft')
  request.r(i523[8], i523[9], 0, i522, 'm_SelectOnRight')
  return i522
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i525 = data
  i524.m_NormalColor = new pc.Color(i525[0], i525[1], i525[2], i525[3])
  i524.m_HighlightedColor = new pc.Color(i525[4], i525[5], i525[6], i525[7])
  i524.m_PressedColor = new pc.Color(i525[8], i525[9], i525[10], i525[11])
  i524.m_SelectedColor = new pc.Color(i525[12], i525[13], i525[14], i525[15])
  i524.m_DisabledColor = new pc.Color(i525[16], i525[17], i525[18], i525[19])
  i524.m_ColorMultiplier = i525[20]
  i524.m_FadeDuration = i525[21]
  return i524
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i527 = data
  request.r(i527[0], i527[1], 0, i526, 'm_HighlightedSprite')
  request.r(i527[2], i527[3], 0, i526, 'm_PressedSprite')
  request.r(i527[4], i527[5], 0, i526, 'm_SelectedSprite')
  request.r(i527[6], i527[7], 0, i526, 'm_DisabledSprite')
  return i526
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i529 = data
  i528.m_NormalTrigger = i529[0]
  i528.m_HighlightedTrigger = i529[1]
  i528.m_PressedTrigger = i529[2]
  i528.m_SelectedTrigger = i529[3]
  i528.m_DisabledTrigger = i529[4]
  return i528
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.UI.Mask' )
  var i531 = data
  i530.m_ShowMaskGraphic = !!i531[0]
  return i530
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i532 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'skeletonDataAsset')
  request.r(i533[2], i533[3], 0, i532, 'additiveMaterial')
  request.r(i533[4], i533[5], 0, i532, 'multiplyMaterial')
  request.r(i533[6], i533[7], 0, i532, 'screenMaterial')
  i532.initialSkinName = i533[8]
  i532.initialFlipX = !!i533[9]
  i532.initialFlipY = !!i533[10]
  i532.startingAnimation = i533[11]
  i532.startingLoop = !!i533[12]
  i532.timeScale = i533[13]
  i532.freeze = !!i533[14]
  i532.layoutScaleMode = i533[15]
  i532.updateWhenInvisible = i533[16]
  i532.allowMultipleCanvasRenderers = !!i533[17]
  var i535 = i533[18]
  var i534 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i535.length; i += 2) {
  request.r(i535[i + 0], i535[i + 1], 1, i534, '')
  }
  i532.canvasRenderers = i534
  i532.enableSeparatorSlots = !!i533[19]
  i532.updateSeparatorPartLocation = !!i533[20]
  i532.updateSeparatorPartScale = !!i533[21]
  i532.disableMeshAssignmentOnOverride = !!i533[22]
  i532.referenceSize = new pc.Vec2( i533[23], i533[24] )
  i532.referenceScale = i533[25]
  i532.rectTransformSize = new pc.Vec2( i533[26], i533[27] )
  i532.editReferenceRect = !!i533[28]
  var i537 = i533[29]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( i537[i + 0] );
  }
  i532.separatorSlotNames = i536
  var i539 = i533[30]
  var i538 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i539.length; i += 2) {
  request.r(i539[i + 0], i539[i + 1], 1, i538, '')
  }
  i532.separatorParts = i538
  i532.meshGenerator = request.d('Spine.Unity.MeshGenerator', i533[31], i532.meshGenerator)
  i532.updateTiming = i533[32]
  i532.unscaledTime = !!i533[33]
  request.r(i533[34], i533[35], 0, i532, 'm_Material')
  i532.m_Maskable = !!i533[36]
  i532.m_Color = new pc.Color(i533[37], i533[38], i533[39], i533[40])
  i532.m_RaycastTarget = !!i533[41]
  i532.m_RaycastPadding = new pc.Vec4( i533[42], i533[43], i533[44], i533[45] )
  return i532
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i546 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i547 = data
  i546.settings = request.d('Spine.Unity.MeshGenerator+Settings', i547[0], i546.settings)
  return i546
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i548 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i549 = data
  i548.useClipping = !!i549[0]
  i548.zSpacing = i549[1]
  i548.pmaVertexColors = !!i549[2]
  i548.tintBlack = !!i549[3]
  i548.canvasGroupTintBlack = !!i549[4]
  i548.calculateTangents = !!i549[5]
  i548.addNormals = !!i549[6]
  i548.immutableTriangles = !!i549[7]
  return i548
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i550 = root || request.c( 'AnimationController' )
  var i551 = data
  request.r(i551[0], i551[1], 0, i550, 'skeleton')
  request.r(i551[2], i551[3], 0, i550, 'item')
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i553 = data
  i552.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i553[0], i552.main)
  i552.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i553[1], i552.colorBySpeed)
  i552.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i553[2], i552.colorOverLifetime)
  i552.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i553[3], i552.emission)
  i552.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i553[4], i552.rotationBySpeed)
  i552.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i553[5], i552.rotationOverLifetime)
  i552.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i553[6], i552.shape)
  i552.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i553[7], i552.sizeBySpeed)
  i552.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i553[8], i552.sizeOverLifetime)
  i552.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i553[9], i552.textureSheetAnimation)
  i552.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i553[10], i552.velocityOverLifetime)
  i552.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i553[11], i552.noise)
  i552.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i553[12], i552.inheritVelocity)
  i552.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i553[13], i552.forceOverLifetime)
  i552.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i553[14], i552.limitVelocityOverLifetime)
  i552.useAutoRandomSeed = !!i553[15]
  i552.randomSeed = i553[16]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i554 = root || new pc.ParticleSystemMain()
  var i555 = data
  i554.duration = i555[0]
  i554.loop = !!i555[1]
  i554.prewarm = !!i555[2]
  i554.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[3], i554.startDelay)
  i554.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[4], i554.startLifetime)
  i554.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[5], i554.startSpeed)
  i554.startSize3D = !!i555[6]
  i554.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[7], i554.startSizeX)
  i554.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[8], i554.startSizeY)
  i554.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[9], i554.startSizeZ)
  i554.startRotation3D = !!i555[10]
  i554.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[11], i554.startRotationX)
  i554.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[12], i554.startRotationY)
  i554.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[13], i554.startRotationZ)
  i554.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i555[14], i554.startColor)
  i554.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[15], i554.gravityModifier)
  i554.simulationSpace = i555[16]
  request.r(i555[17], i555[18], 0, i554, 'customSimulationSpace')
  i554.simulationSpeed = i555[19]
  i554.useUnscaledTime = !!i555[20]
  i554.scalingMode = i555[21]
  i554.playOnAwake = !!i555[22]
  i554.maxParticles = i555[23]
  i554.emitterVelocityMode = i555[24]
  i554.stopAction = i555[25]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i556 = root || new pc.MinMaxCurve()
  var i557 = data
  i556.mode = i557[0]
  i556.curveMin = new pc.AnimationCurve( { keys_flow: i557[1] } )
  i556.curveMax = new pc.AnimationCurve( { keys_flow: i557[2] } )
  i556.curveMultiplier = i557[3]
  i556.constantMin = i557[4]
  i556.constantMax = i557[5]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i558 = root || new pc.MinMaxGradient()
  var i559 = data
  i558.mode = i559[0]
  i558.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i559[1], i558.gradientMin)
  i558.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i559[2], i558.gradientMax)
  i558.colorMin = new pc.Color(i559[3], i559[4], i559[5], i559[6])
  i558.colorMax = new pc.Color(i559[7], i559[8], i559[9], i559[10])
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i561 = data
  i560.mode = i561[0]
  var i563 = i561[1]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i563[i + 0]) );
  }
  i560.colorKeys = i562
  var i565 = i561[2]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i565[i + 0]) );
  }
  i560.alphaKeys = i564
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i566 = root || new pc.ParticleSystemColorBySpeed()
  var i567 = data
  i566.enabled = !!i567[0]
  i566.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i567[1], i566.color)
  i566.range = new pc.Vec2( i567[2], i567[3] )
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i571 = data
  i570.color = new pc.Color(i571[0], i571[1], i571[2], i571[3])
  i570.time = i571[4]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i575 = data
  i574.alpha = i575[0]
  i574.time = i575[1]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemColorOverLifetime()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i577[1], i576.color)
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemEmitter()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[1], i578.rateOverTime)
  i578.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[2], i578.rateOverDistance)
  var i581 = i579[3]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i581[i + 0]) );
  }
  i578.bursts = i580
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i584 = root || new pc.ParticleSystemBurst()
  var i585 = data
  i584.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[0], i584.count)
  i584.cycleCount = i585[1]
  i584.minCount = i585[2]
  i584.maxCount = i585[3]
  i584.repeatInterval = i585[4]
  i584.time = i585[5]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i586 = root || new pc.ParticleSystemRotationBySpeed()
  var i587 = data
  i586.enabled = !!i587[0]
  i586.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[1], i586.x)
  i586.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[2], i586.y)
  i586.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[3], i586.z)
  i586.separateAxes = !!i587[4]
  i586.range = new pc.Vec2( i587[5], i587[6] )
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemRotationOverLifetime()
  var i589 = data
  i588.enabled = !!i589[0]
  i588.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[1], i588.x)
  i588.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[2], i588.y)
  i588.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[3], i588.z)
  i588.separateAxes = !!i589[4]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemShape()
  var i591 = data
  i590.enabled = !!i591[0]
  i590.shapeType = i591[1]
  i590.randomDirectionAmount = i591[2]
  i590.sphericalDirectionAmount = i591[3]
  i590.randomPositionAmount = i591[4]
  i590.alignToDirection = !!i591[5]
  i590.radius = i591[6]
  i590.radiusMode = i591[7]
  i590.radiusSpread = i591[8]
  i590.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[9], i590.radiusSpeed)
  i590.radiusThickness = i591[10]
  i590.angle = i591[11]
  i590.length = i591[12]
  i590.boxThickness = new pc.Vec3( i591[13], i591[14], i591[15] )
  i590.meshShapeType = i591[16]
  request.r(i591[17], i591[18], 0, i590, 'mesh')
  request.r(i591[19], i591[20], 0, i590, 'meshRenderer')
  request.r(i591[21], i591[22], 0, i590, 'skinnedMeshRenderer')
  i590.useMeshMaterialIndex = !!i591[23]
  i590.meshMaterialIndex = i591[24]
  i590.useMeshColors = !!i591[25]
  i590.normalOffset = i591[26]
  i590.arc = i591[27]
  i590.arcMode = i591[28]
  i590.arcSpread = i591[29]
  i590.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[30], i590.arcSpeed)
  i590.donutRadius = i591[31]
  i590.position = new pc.Vec3( i591[32], i591[33], i591[34] )
  i590.rotation = new pc.Vec3( i591[35], i591[36], i591[37] )
  i590.scale = new pc.Vec3( i591[38], i591[39], i591[40] )
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i592 = root || new pc.ParticleSystemSizeBySpeed()
  var i593 = data
  i592.enabled = !!i593[0]
  i592.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[1], i592.x)
  i592.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[2], i592.y)
  i592.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[3], i592.z)
  i592.separateAxes = !!i593[4]
  i592.range = new pc.Vec2( i593[5], i593[6] )
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i594 = root || new pc.ParticleSystemSizeOverLifetime()
  var i595 = data
  i594.enabled = !!i595[0]
  i594.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[1], i594.x)
  i594.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[2], i594.y)
  i594.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[3], i594.z)
  i594.separateAxes = !!i595[4]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i596 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i597 = data
  i596.enabled = !!i597[0]
  i596.mode = i597[1]
  i596.animation = i597[2]
  i596.numTilesX = i597[3]
  i596.numTilesY = i597[4]
  i596.useRandomRow = !!i597[5]
  i596.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[6], i596.frameOverTime)
  i596.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[7], i596.startFrame)
  i596.cycleCount = i597[8]
  i596.rowIndex = i597[9]
  i596.flipU = i597[10]
  i596.flipV = i597[11]
  i596.spriteCount = i597[12]
  var i599 = i597[13]
  var i598 = []
  for(var i = 0; i < i599.length; i += 2) {
  request.r(i599[i + 0], i599[i + 1], 2, i598, '')
  }
  i596.sprites = i598
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i602 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i603 = data
  i602.enabled = !!i603[0]
  i602.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[1], i602.x)
  i602.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[2], i602.y)
  i602.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[3], i602.z)
  i602.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[4], i602.radial)
  i602.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[5], i602.speedModifier)
  i602.space = i603[6]
  i602.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[7], i602.orbitalX)
  i602.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[8], i602.orbitalY)
  i602.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[9], i602.orbitalZ)
  i602.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[10], i602.orbitalOffsetX)
  i602.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[11], i602.orbitalOffsetY)
  i602.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[12], i602.orbitalOffsetZ)
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i604 = root || new pc.ParticleSystemNoise()
  var i605 = data
  i604.enabled = !!i605[0]
  i604.separateAxes = !!i605[1]
  i604.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[2], i604.strengthX)
  i604.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[3], i604.strengthY)
  i604.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[4], i604.strengthZ)
  i604.frequency = i605[5]
  i604.damping = !!i605[6]
  i604.octaveCount = i605[7]
  i604.octaveMultiplier = i605[8]
  i604.octaveScale = i605[9]
  i604.quality = i605[10]
  i604.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[11], i604.scrollSpeed)
  i604.scrollSpeedMultiplier = i605[12]
  i604.remapEnabled = !!i605[13]
  i604.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[14], i604.remapX)
  i604.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[15], i604.remapY)
  i604.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[16], i604.remapZ)
  i604.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[17], i604.positionAmount)
  i604.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[18], i604.rotationAmount)
  i604.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[19], i604.sizeAmount)
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i606 = root || new pc.ParticleSystemInheritVelocity()
  var i607 = data
  i606.enabled = !!i607[0]
  i606.mode = i607[1]
  i606.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[2], i606.curve)
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i608 = root || new pc.ParticleSystemForceOverLifetime()
  var i609 = data
  i608.enabled = !!i609[0]
  i608.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[1], i608.x)
  i608.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[2], i608.y)
  i608.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[3], i608.z)
  i608.space = i609[4]
  i608.randomized = !!i609[5]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i610 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i611 = data
  i610.enabled = !!i611[0]
  i610.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[1], i610.limit)
  i610.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[2], i610.limitX)
  i610.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[3], i610.limitY)
  i610.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[4], i610.limitZ)
  i610.dampen = i611[5]
  i610.separateAxes = !!i611[6]
  i610.space = i611[7]
  i610.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[8], i610.drag)
  i610.multiplyDragByParticleSize = !!i611[9]
  i610.multiplyDragByParticleVelocity = !!i611[10]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'mesh')
  i612.meshCount = i613[2]
  i612.activeVertexStreamsCount = i613[3]
  i612.alignment = i613[4]
  i612.renderMode = i613[5]
  i612.sortMode = i613[6]
  i612.lengthScale = i613[7]
  i612.velocityScale = i613[8]
  i612.cameraVelocityScale = i613[9]
  i612.normalDirection = i613[10]
  i612.sortingFudge = i613[11]
  i612.minParticleSize = i613[12]
  i612.maxParticleSize = i613[13]
  i612.pivot = new pc.Vec3( i613[14], i613[15], i613[16] )
  request.r(i613[17], i613[18], 0, i612, 'trailMaterial')
  i612.applyActiveColorSpace = !!i613[19]
  i612.enabled = !!i613[20]
  request.r(i613[21], i613[22], 0, i612, 'sharedMaterial')
  var i615 = i613[23]
  var i614 = []
  for(var i = 0; i < i615.length; i += 2) {
  request.r(i615[i + 0], i615[i + 1], 2, i614, '')
  }
  i612.sharedMaterials = i614
  i612.receiveShadows = !!i613[24]
  i612.shadowCastingMode = i613[25]
  i612.sortingLayerID = i613[26]
  i612.sortingOrder = i613[27]
  i612.lightmapIndex = i613[28]
  i612.lightmapSceneIndex = i613[29]
  i612.lightmapScaleOffset = new pc.Vec4( i613[30], i613[31], i613[32], i613[33] )
  i612.lightProbeUsage = i613[34]
  i612.reflectionProbeUsage = i613[35]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'clip')
  request.r(i619[2], i619[3], 0, i618, 'outputAudioMixerGroup')
  i618.playOnAwake = !!i619[4]
  i618.loop = !!i619[5]
  i618.time = i619[6]
  i618.volume = i619[7]
  i618.pitch = i619[8]
  i618.enabled = !!i619[9]
  return i618
}

Deserializers["CharacterSkinController"] = function (request, data, root) {
  var i620 = root || request.c( 'CharacterSkinController' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'skeletonAnimation')
  request.r(i621[2], i621[3], 0, i620, 'thinData')
  i620.smallFace = request.d('Item', i621[4], i620.smallFace)
  i620.smallBody = request.d('Item', i621[5], i620.smallBody)
  i620.accessory = request.d('Item', i621[6], i620.accessory)
  i620.dress = request.d('Item', i621[7], i620.dress)
  i620.glass = request.d('Item', i621[8], i620.glass)
  i620.face = request.d('Item', i621[9], i620.face)
  i620.hair = request.d('Item', i621[10], i620.hair)
  i620.legHair = request.d('Item', i621[11], i620.legHair)
  i620.smoke = request.d('Item', i621[12], i620.smoke)
  i620.sock = request.d('Item', i621[13], i620.sock)
  return i620
}

Deserializers["Item"] = function (request, data, root) {
  var i622 = root || request.c( 'Item' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'ActiveItem')
  request.r(i623[2], i623[3], 0, i622, 'ActiveSound')
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

Deserializers["TutController"] = function (request, data, root) {
  var i628 = root || request.c( 'TutController' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'icon')
  request.r(i629[2], i629[3], 0, i628, 'tutObject')
  i628.toPos = new pc.Vec3( i629[4], i629[5], i629[6] )
  i628.timeMove = i629[7]
  i628.timeDelay = i629[8]
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

Deserializers["LunaController"] = function (request, data, root) {
  var i634 = root || request.c( 'LunaController' )
  var i635 = data
  i634.TimePlay = i635[0]
  i634.CountPlay = i635[1]
  i634.BGColor = new pc.Color(i635[2], i635[3], i635[4], i635[5])
  i634.GameBGColor = new pc.Color(i635[6], i635[7], i635[8], i635[9])
  i634.LevelTextColor = new pc.Color(i635[10], i635[11], i635[12], i635[13])
  i634.TitleTextColor = new pc.Color(i635[14], i635[15], i635[16], i635[17])
  i634.SubBGColor = new pc.Color(i635[18], i635[19], i635[20], i635[21])
  request.r(i635[22], i635[23], 0, i634, 'time')
  request.r(i635[24], i635[25], 0, i634, 'BGImage')
  request.r(i635[26], i635[27], 0, i634, 'GameBGImage')
  request.r(i635[28], i635[29], 0, i634, 'levelText')
  request.r(i635[30], i635[31], 0, i634, 'titleText')
  request.r(i635[32], i635[33], 0, i634, 'subBG')
  request.r(i635[34], i635[35], 0, i634, 'endCard')
  var i637 = i635[36]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 1, i636, '')
  }
  i634.CTA = i636
  i634.count = i635[37]
  return i634
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i640 = root || request.c( 'LayoutController' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'CTA')
  i640.hide = !!i641[2]
  return i640
}

Deserializers["AudioController"] = function (request, data, root) {
  var i642 = root || request.c( 'AudioController' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'BGM')
  request.r(i643[2], i643[3], 0, i642, 'musicSource')
  request.r(i643[4], i643[5], 0, i642, 'SFXPool')
  return i642
}

Deserializers["InteractController"] = function (request, data, root) {
  var i644 = root || request.c( 'InteractController' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'canvas')
  i644.maxPos = new pc.Vec2( i645[2], i645[3] )
  i644.minPos = new pc.Vec2( i645[4], i645[5] )
  var i647 = i645[6]
  var i646 = new (System.Collections.Generic.List$1(Bridge.ns('ItemDrag')))
  for(var i = 0; i < i647.length; i += 1) {
    i646.add(request.d('ItemDrag', i647[i + 0]));
  }
  i644.itemDrags = i646
  var i649 = i645[7]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('ItemClick')))
  for(var i = 0; i < i649.length; i += 1) {
    i648.add(request.d('ItemClick', i649[i + 0]));
  }
  i644.itemClicks = i648
  i644.currentTarget = request.d('ItemDrag', i645[8], i644.currentTarget)
  request.r(i645[9], i645[10], 0, i644, 'pickupSound')
  request.r(i645[11], i645[12], 0, i644, 'tut')
  request.r(i645[13], i645[14], 0, i644, 'tut2')
  i644.lockPlay = !!i645[15]
  return i644
}

Deserializers["ItemDrag"] = function (request, data, root) {
  var i652 = root || request.c( 'ItemDrag' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'DragArea')
  request.r(i653[2], i653[3], 0, i652, 'Item')
  request.r(i653[4], i653[5], 0, i652, 'Icon')
  return i652
}

Deserializers["ItemClick"] = function (request, data, root) {
  var i656 = root || request.c( 'ItemClick' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'ClickArea')
  request.r(i657[2], i657[3], 0, i656, 'Item')
  request.r(i657[4], i657[5], 0, i656, 'Sound')
  request.r(i657[6], i657[7], 0, i656, 'ActiveObject')
  return i656
}

Deserializers["GameController"] = function (request, data, root) {
  var i658 = root || request.c( 'GameController' )
  var i659 = data
  i658.OnComplete = request.d('System.Action', i659[0], i658.OnComplete)
  i658.CompleteStep = request.d('System.Action', i659[1], i658.CompleteStep)
  var i661 = i659[2]
  var i660 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationController')))
  for(var i = 0; i < i661.length; i += 2) {
  request.r(i661[i + 0], i661[i + 1], 1, i660, '')
  }
  i658.skeletons = i660
  request.r(i659[3], i659[4], 0, i658, 'character')
  request.r(i659[5], i659[6], 0, i658, 'normal')
  request.r(i659[7], i659[8], 0, i658, 'win')
  request.r(i659[9], i659[10], 0, i658, 'loseScene')
  request.r(i659[11], i659[12], 0, i658, 'winScene')
  i658.complete = !!i659[13]
  i658.currentStep = i659[14]
  i658.maxStep = i659[15]
  request.r(i659[16], i659[17], 0, i658, 'currentStepText')
  request.r(i659[18], i659[19], 0, i658, 'maxStepText')
  request.r(i659[20], i659[21], 0, i658, 'slider')
  i658.DelayComplete = i659[22]
  i658.subTime = i659[23]
  i658.completeSub = request.d('Sub', i659[24], i658.completeSub)
  var i663 = i659[25]
  var i662 = new (System.Collections.Generic.List$1(Bridge.ns('Sub')))
  for(var i = 0; i < i663.length; i += 1) {
    i662.add(request.d('Sub', i663[i + 0]));
  }
  i658.subs = i662
  request.r(i659[26], i659[27], 0, i658, 'sub')
  request.r(i659[28], i659[29], 0, i658, 'subText')
  return i658
}

Deserializers["System.Action"] = function (request, data, root) {
  var i664 = root || request.c( 'System.Action' )
  var i665 = data
  return i664
}

Deserializers["Sub"] = function (request, data, root) {
  var i668 = root || request.c( 'Sub' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'Item')
  i668.SubText = i669[2]
  request.r(i669[3], i669[4], 0, i668, 'SubSound')
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i673 = data
  i672.ambientIntensity = i673[0]
  i672.reflectionIntensity = i673[1]
  i672.ambientMode = i673[2]
  i672.ambientLight = new pc.Color(i673[3], i673[4], i673[5], i673[6])
  i672.ambientSkyColor = new pc.Color(i673[7], i673[8], i673[9], i673[10])
  i672.ambientGroundColor = new pc.Color(i673[11], i673[12], i673[13], i673[14])
  i672.ambientEquatorColor = new pc.Color(i673[15], i673[16], i673[17], i673[18])
  i672.fogColor = new pc.Color(i673[19], i673[20], i673[21], i673[22])
  i672.fogEndDistance = i673[23]
  i672.fogStartDistance = i673[24]
  i672.fogDensity = i673[25]
  i672.fog = !!i673[26]
  request.r(i673[27], i673[28], 0, i672, 'skybox')
  i672.fogMode = i673[29]
  var i675 = i673[30]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i675[i + 0]) );
  }
  i672.lightmaps = i674
  i672.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i673[31], i672.lightProbes)
  i672.lightmapsMode = i673[32]
  i672.mixedBakeMode = i673[33]
  i672.environmentLightingMode = i673[34]
  i672.ambientProbe = new pc.SphericalHarmonicsL2(i673[35])
  request.r(i673[36], i673[37], 0, i672, 'customReflection')
  request.r(i673[38], i673[39], 0, i672, 'defaultReflection')
  i672.defaultReflectionMode = i673[40]
  i672.defaultReflectionResolution = i673[41]
  i672.sunLightObjectId = i673[42]
  i672.pixelLightCount = i673[43]
  i672.defaultReflectionHDR = !!i673[44]
  i672.hasLightDataAsset = !!i673[45]
  i672.hasManualGenerate = !!i673[46]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'lightmapColor')
  request.r(i679[2], i679[3], 0, i678, 'lightmapDirection')
  request.r(i679[4], i679[5], 0, i678, 'shadowMask')
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i680 = root || new UnityEngine.LightProbes()
  var i681 = data
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i689 = data
  var i691 = i689[0]
  var i690 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i691.length; i += 1) {
    i690.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i691[i + 0]));
  }
  i688.ShaderCompilationErrors = i690
  i688.name = i689[1]
  i688.guid = i689[2]
  var i693 = i689[3]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( i693[i + 0] );
  }
  i688.shaderDefinedKeywords = i692
  var i695 = i689[4]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i695[i + 0]) );
  }
  i688.passes = i694
  var i697 = i689[5]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i697[i + 0]) );
  }
  i688.usePasses = i696
  var i699 = i689[6]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i699[i + 0]) );
  }
  i688.defaultParameterValues = i698
  request.r(i689[7], i689[8], 0, i688, 'unityFallbackShader')
  i688.readDepth = !!i689[9]
  i688.hasDepthOnlyPass = !!i689[10]
  i688.isCreatedByShaderGraph = !!i689[11]
  i688.disableBatching = !!i689[12]
  i688.compiled = !!i689[13]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i703 = data
  i702.shaderName = i703[0]
  i702.errorMessage = i703[1]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i706 = root || new pc.UnityShaderPass()
  var i707 = data
  i706.id = i707[0]
  i706.subShaderIndex = i707[1]
  i706.name = i707[2]
  i706.passType = i707[3]
  i706.grabPassTextureName = i707[4]
  i706.usePass = !!i707[5]
  i706.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[6], i706.zTest)
  i706.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[7], i706.zWrite)
  i706.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[8], i706.culling)
  i706.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i707[9], i706.blending)
  i706.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i707[10], i706.alphaBlending)
  i706.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[11], i706.colorWriteMask)
  i706.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[12], i706.offsetUnits)
  i706.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[13], i706.offsetFactor)
  i706.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[14], i706.stencilRef)
  i706.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[15], i706.stencilReadMask)
  i706.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[16], i706.stencilWriteMask)
  i706.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i707[17], i706.stencilOp)
  i706.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i707[18], i706.stencilOpFront)
  i706.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i707[19], i706.stencilOpBack)
  var i709 = i707[20]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i709[i + 0]) );
  }
  i706.tags = i708
  var i711 = i707[21]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( i711[i + 0] );
  }
  i706.passDefinedKeywords = i710
  var i713 = i707[22]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i713[i + 0]) );
  }
  i706.passDefinedKeywordGroups = i712
  var i715 = i707[23]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i715[i + 0]) );
  }
  i706.variants = i714
  var i717 = i707[24]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i717[i + 0]) );
  }
  i706.excludedVariants = i716
  i706.hasDepthReader = !!i707[25]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i719 = data
  i718.val = i719[0]
  i718.name = i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i721 = data
  i720.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[0], i720.src)
  i720.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[1], i720.dst)
  i720.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[2], i720.op)
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i723 = data
  i722.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[0], i722.pass)
  i722.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[1], i722.fail)
  i722.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[2], i722.zFail)
  i722.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[3], i722.comp)
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i727 = data
  i726.name = i727[0]
  i726.value = i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i731 = data
  var i733 = i731[0]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( i733[i + 0] );
  }
  i730.keywords = i732
  i730.hasDiscard = !!i731[1]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i737 = data
  i736.passId = i737[0]
  i736.subShaderIndex = i737[1]
  var i739 = i737[2]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i736.keywords = i738
  i736.vertexProgram = i737[3]
  i736.fragmentProgram = i737[4]
  i736.exportedForWebGl2 = !!i737[5]
  i736.readDepth = !!i737[6]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'shader')
  i742.pass = i743[2]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i747 = data
  i746.name = i747[0]
  i746.type = i747[1]
  i746.value = new pc.Vec4( i747[2], i747[3], i747[4], i747[5] )
  i746.textureValue = i747[6]
  i746.shaderPropertyFlag = i747[7]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i749 = data
  i748.name = i749[0]
  request.r(i749[1], i749[2], 0, i748, 'texture')
  i748.aabb = i749[3]
  i748.vertices = i749[4]
  i748.triangles = i749[5]
  i748.textureRect = UnityEngine.Rect.MinMaxRect(i749[6], i749[7], i749[8], i749[9])
  i748.packedRect = UnityEngine.Rect.MinMaxRect(i749[10], i749[11], i749[12], i749[13])
  i748.border = new pc.Vec4( i749[14], i749[15], i749[16], i749[17] )
  i748.transparency = i749[18]
  i748.bounds = i749[19]
  i748.pixelsPerUnit = i749[20]
  i748.textureWidth = i749[21]
  i748.textureHeight = i749[22]
  i748.nativeSize = new pc.Vec2( i749[23], i749[24] )
  i748.pivot = new pc.Vec2( i749[25], i749[26] )
  i748.textureRectOffset = new pc.Vec2( i749[27], i749[28] )
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i751 = data
  i750.name = i751[0]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i753 = data
  i752.name = i753[0]
  i752.ascent = i753[1]
  i752.originalLineHeight = i753[2]
  i752.fontSize = i753[3]
  var i755 = i753[4]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i755[i + 0]) );
  }
  i752.characterInfo = i754
  request.r(i753[5], i753[6], 0, i752, 'texture')
  i752.originalFontSize = i753[7]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i759 = data
  i758.index = i759[0]
  i758.advance = i759[1]
  i758.bearing = i759[2]
  i758.glyphWidth = i759[3]
  i758.glyphHeight = i759[4]
  i758.minX = i759[5]
  i758.maxX = i759[6]
  i758.minY = i759[7]
  i758.maxY = i759[8]
  i758.uvBottomLeftX = i759[9]
  i758.uvBottomLeftY = i759[10]
  i758.uvBottomRightX = i759[11]
  i758.uvBottomRightY = i759[12]
  i758.uvTopLeftX = i759[13]
  i758.uvTopLeftY = i759[14]
  i758.uvTopRightX = i759[15]
  i758.uvTopRightY = i759[16]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i761 = data
  i760.name = i761[0]
  i760.bytes64 = i761[1]
  i760.data = i761[2]
  return i760
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i762 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i763 = data
  var i765 = i763[0]
  var i764 = []
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 2, i764, '')
  }
  i762.atlasAssets = i764
  i762.scale = i763[1]
  request.r(i763[2], i763[3], 0, i762, 'skeletonJSON')
  i762.isUpgradingBlendModeMaterials = !!i763[4]
  i762.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i763[5], i762.blendModeMaterials)
  var i767 = i763[6]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i767.length; i += 2) {
  request.r(i767[i + 0], i767[i + 1], 1, i766, '')
  }
  i762.skeletonDataModifiers = i766
  var i769 = i763[7]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( i769[i + 0] );
  }
  i762.fromAnimation = i768
  var i771 = i763[8]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( i771[i + 0] );
  }
  i762.toAnimation = i770
  i762.duration = i763[9]
  i762.defaultMix = i763[10]
  request.r(i763[11], i763[12], 0, i762, 'controller')
  return i762
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i774 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i775 = data
  i774.applyAdditiveMaterial = !!i775[0]
  var i777 = i775[1]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i777.length; i += 1) {
    i776.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i777[i + 0]));
  }
  i774.additiveMaterials = i776
  var i779 = i775[2]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i779[i + 0]));
  }
  i774.multiplyMaterials = i778
  var i781 = i775[3]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i781.length; i += 1) {
    i780.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i781[i + 0]));
  }
  i774.screenMaterials = i780
  i774.requiresBlendModeMaterials = !!i775[4]
  return i774
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i784 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i785 = data
  i784.pageName = i785[0]
  request.r(i785[1], i785[2], 0, i784, 'material')
  return i784
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i788 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'atlasFile')
  var i791 = i789[2]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i788.materials = i790
  i788.textureLoadingMode = i789[3]
  request.r(i789[4], i789[5], 0, i788, 'onDemandTextureLoader')
  return i788
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i792 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i793 = data
  i792.useSafeMode = !!i793[0]
  i792.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i793[1], i792.safeModeOptions)
  i792.timeScale = i793[2]
  i792.unscaledTimeScale = i793[3]
  i792.useSmoothDeltaTime = !!i793[4]
  i792.maxSmoothUnscaledTime = i793[5]
  i792.rewindCallbackMode = i793[6]
  i792.showUnityEditorReport = !!i793[7]
  i792.logBehaviour = i793[8]
  i792.drawGizmos = !!i793[9]
  i792.defaultRecyclable = !!i793[10]
  i792.defaultAutoPlay = i793[11]
  i792.defaultUpdateType = i793[12]
  i792.defaultTimeScaleIndependent = !!i793[13]
  i792.defaultEaseType = i793[14]
  i792.defaultEaseOvershootOrAmplitude = i793[15]
  i792.defaultEasePeriod = i793[16]
  i792.defaultAutoKill = !!i793[17]
  i792.defaultLoopType = i793[18]
  i792.debugMode = !!i793[19]
  i792.debugStoreTargetId = !!i793[20]
  i792.showPreviewPanel = !!i793[21]
  i792.storeSettingsLocation = i793[22]
  i792.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i793[23], i792.modules)
  i792.createASMDEF = !!i793[24]
  i792.showPlayingTweens = !!i793[25]
  i792.showPausedTweens = !!i793[26]
  return i792
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i794 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i795 = data
  i794.logBehaviour = i795[0]
  i794.nestedTweenFailureBehaviour = i795[1]
  return i794
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i796 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i797 = data
  i796.showPanel = !!i797[0]
  i796.audioEnabled = !!i797[1]
  i796.physicsEnabled = !!i797[2]
  i796.physics2DEnabled = !!i797[3]
  i796.spriteEnabled = !!i797[4]
  i796.uiEnabled = !!i797[5]
  i796.textMeshProEnabled = !!i797[6]
  i796.tk2DEnabled = !!i797[7]
  i796.deAudioEnabled = !!i797[8]
  i796.deUnityExtendedEnabled = !!i797[9]
  i796.epoOutlineEnabled = !!i797[10]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i799 = data
  var i801 = i799[0]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i801[i + 0]) );
  }
  i798.files = i800
  i798.componentToPrefabIds = i799[1]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i805 = data
  i804.path = i805[0]
  request.r(i805[1], i805[2], 0, i804, 'unityObject')
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i807 = data
  var i809 = i807[0]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i809[i + 0]) );
  }
  i806.scriptsExecutionOrder = i808
  var i811 = i807[1]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i811[i + 0]) );
  }
  i806.sortingLayers = i810
  var i813 = i807[2]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i813[i + 0]) );
  }
  i806.cullingLayers = i812
  i806.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i807[3], i806.timeSettings)
  i806.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i807[4], i806.physicsSettings)
  i806.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i807[5], i806.physics2DSettings)
  i806.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i807[6], i806.qualitySettings)
  i806.enableRealtimeShadows = !!i807[7]
  i806.enableAutoInstancing = !!i807[8]
  i806.enableStaticBatching = !!i807[9]
  i806.enableDynamicBatching = !!i807[10]
  i806.usePreservativeDynamicBatching = !!i807[11]
  i806.lightmapEncodingQuality = i807[12]
  i806.desiredColorSpace = i807[13]
  var i815 = i807[14]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( i815[i + 0] );
  }
  i806.allTags = i814
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i819 = data
  i818.name = i819[0]
  i818.value = i819[1]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i823 = data
  i822.id = i823[0]
  i822.name = i823[1]
  i822.value = i823[2]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i827 = data
  i826.id = i827[0]
  i826.name = i827[1]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i829 = data
  i828.fixedDeltaTime = i829[0]
  i828.maximumDeltaTime = i829[1]
  i828.timeScale = i829[2]
  i828.maximumParticleTimestep = i829[3]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i831 = data
  i830.gravity = new pc.Vec3( i831[0], i831[1], i831[2] )
  i830.defaultSolverIterations = i831[3]
  i830.bounceThreshold = i831[4]
  i830.autoSyncTransforms = !!i831[5]
  i830.autoSimulation = !!i831[6]
  var i833 = i831[7]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i833[i + 0]) );
  }
  i830.collisionMatrix = i832
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i837 = data
  i836.enabled = !!i837[0]
  i836.layerId = i837[1]
  i836.otherLayerId = i837[2]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'material')
  i838.gravity = new pc.Vec2( i839[2], i839[3] )
  i838.positionIterations = i839[4]
  i838.velocityIterations = i839[5]
  i838.velocityThreshold = i839[6]
  i838.maxLinearCorrection = i839[7]
  i838.maxAngularCorrection = i839[8]
  i838.maxTranslationSpeed = i839[9]
  i838.maxRotationSpeed = i839[10]
  i838.baumgarteScale = i839[11]
  i838.baumgarteTOIScale = i839[12]
  i838.timeToSleep = i839[13]
  i838.linearSleepTolerance = i839[14]
  i838.angularSleepTolerance = i839[15]
  i838.defaultContactOffset = i839[16]
  i838.autoSimulation = !!i839[17]
  i838.queriesHitTriggers = !!i839[18]
  i838.queriesStartInColliders = !!i839[19]
  i838.callbacksOnDisable = !!i839[20]
  i838.reuseCollisionCallbacks = !!i839[21]
  i838.autoSyncTransforms = !!i839[22]
  var i841 = i839[23]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i841[i + 0]) );
  }
  i838.collisionMatrix = i840
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i845 = data
  i844.enabled = !!i845[0]
  i844.layerId = i845[1]
  i844.otherLayerId = i845[2]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i847 = data
  var i849 = i847[0]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i849[i + 0]) );
  }
  i846.qualityLevels = i848
  var i851 = i847[1]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( i851[i + 0] );
  }
  i846.names = i850
  i846.shadows = i847[2]
  i846.anisotropicFiltering = i847[3]
  i846.antiAliasing = i847[4]
  i846.lodBias = i847[5]
  i846.shadowCascades = i847[6]
  i846.shadowDistance = i847[7]
  i846.shadowmaskMode = i847[8]
  i846.shadowProjection = i847[9]
  i846.shadowResolution = i847[10]
  i846.softParticles = !!i847[11]
  i846.softVegetation = !!i847[12]
  i846.activeColorSpace = i847[13]
  i846.desiredColorSpace = i847[14]
  i846.masterTextureLimit = i847[15]
  i846.maxQueuedFrames = i847[16]
  i846.particleRaycastBudget = i847[17]
  i846.pixelLightCount = i847[18]
  i846.realtimeReflectionProbes = !!i847[19]
  i846.shadowCascade2Split = i847[20]
  i846.shadowCascade4Split = new pc.Vec3( i847[21], i847[22], i847[23] )
  i846.streamingMipmapsActive = !!i847[24]
  i846.vSyncCount = i847[25]
  i846.asyncUploadBufferSize = i847[26]
  i846.asyncUploadTimeSlice = i847[27]
  i846.billboardsFaceCameraPosition = !!i847[28]
  i846.shadowNearPlaneOffset = i847[29]
  i846.streamingMipmapsMemoryBudget = i847[30]
  i846.maximumLODLevel = i847[31]
  i846.streamingMipmapsAddAllCameras = !!i847[32]
  i846.streamingMipmapsMaxLevelReduction = i847[33]
  i846.streamingMipmapsRenderersPerFrame = i847[34]
  i846.resolutionScalingFixedDPIFactor = i847[35]
  i846.streamingMipmapsMaxFileIORequests = i847[36]
  i846.currentQualityLevel = i847[37]
  return i846
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'm_ObjectArgument')
  i854.m_ObjectArgumentAssemblyTypeName = i855[2]
  i854.m_IntArgument = i855[3]
  i854.m_FloatArgument = i855[4]
  i854.m_StringArgument = i855[5]
  i854.m_BoolArgument = !!i855[6]
  return i854
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[2],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[59],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[2],"73":[74],"75":[76],"77":[76],"8":[7],"22":[18],"78":[79],"80":[7],"81":[11,7],"82":[74],"18":[11,7],"83":[84,74],"85":[74,86],"87":[74],"88":[52],"89":[59],"90":[79],"91":[92],"93":[94],"95":[2],"96":[97],"98":[7],"99":[11,7],"100":[74],"101":[11,7],"102":[7],"103":[7],"104":[74,7],"105":[7,11],"106":[107],"108":[107],"109":[107],"110":[7],"111":[7],"10":[8],"12":[11,7],"112":[7],"9":[8],"113":[7],"114":[7],"115":[7],"116":[7],"117":[7],"118":[7],"119":[7],"17":[7],"120":[7],"121":[11,7],"122":[7],"123":[7],"124":[7],"16":[7],"13":[11,7],"125":[7],"126":[5],"127":[5],"6":[5],"128":[5],"129":[2],"130":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.Slider","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","UnityEngine.GameObject","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","CharacterSkinController","DG.Tweening.DOTweenAnimation","TutController","UnityEngine.UI.Button","LunaController","LayoutController","AudioController","UnityEngine.Transform","InteractController","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "08/14/2026 06:35:56";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BEQ_V32_NgocNDL_TamNTM";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1869";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4335";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BMTP_Luna";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "451e7b60-4690-435d-b5df-6a0d5c497ed8";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

