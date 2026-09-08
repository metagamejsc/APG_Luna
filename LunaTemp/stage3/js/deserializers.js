var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.JointSpring' )
  var i413 = data
  i412.spring = i413[0]
  i412.damper = i413[1]
  i412.targetPosition = i413[2]
  return i412
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.JointMotor' )
  var i415 = data
  i414.m_TargetVelocity = i415[0]
  i414.m_Force = i415[1]
  i414.m_FreeSpin = i415[2]
  return i414
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.JointLimits' )
  var i417 = data
  i416.m_Min = i417[0]
  i416.m_Max = i417[1]
  i416.m_Bounciness = i417[2]
  i416.m_BounceMinVelocity = i417[3]
  i416.m_ContactDistance = i417[4]
  i416.minBounce = i417[5]
  i416.maxBounce = i417[6]
  return i416
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.JointDrive' )
  var i419 = data
  i418.m_PositionSpring = i419[0]
  i418.m_PositionDamper = i419[1]
  i418.m_MaximumForce = i419[2]
  i418.m_UseAcceleration = i419[3]
  return i418
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i421 = data
  i420.m_Spring = i421[0]
  i420.m_Damper = i421[1]
  return i420
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i423 = data
  i422.m_Limit = i423[0]
  i422.m_Bounciness = i423[1]
  i422.m_ContactDistance = i423[2]
  return i422
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i425 = data
  i424.m_ExtremumSlip = i425[0]
  i424.m_ExtremumValue = i425[1]
  i424.m_AsymptoteSlip = i425[2]
  i424.m_AsymptoteValue = i425[3]
  i424.m_Stiffness = i425[4]
  return i424
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i427 = data
  i426.m_LowerAngle = i427[0]
  i426.m_UpperAngle = i427[1]
  return i426
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i429 = data
  i428.m_MotorSpeed = i429[0]
  i428.m_MaximumMotorTorque = i429[1]
  return i428
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i431 = data
  i430.m_DampingRatio = i431[0]
  i430.m_Frequency = i431[1]
  i430.m_Angle = i431[2]
  return i430
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i433 = data
  i432.m_LowerTranslation = i433[0]
  i432.m_UpperTranslation = i433[1]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i435 = data
  i434.name = i435[0]
  i434.width = i435[1]
  i434.height = i435[2]
  i434.mipmapCount = i435[3]
  i434.anisoLevel = i435[4]
  i434.filterMode = i435[5]
  i434.hdr = !!i435[6]
  i434.format = i435[7]
  i434.wrapMode = i435[8]
  i434.alphaIsTransparency = !!i435[9]
  i434.alphaSource = i435[10]
  i434.graphicsFormat = i435[11]
  i434.sRGBTexture = !!i435[12]
  i434.desiredColorSpace = i435[13]
  i434.wrapU = i435[14]
  i434.wrapV = i435[15]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i436 = root || new pc.UnityMaterial()
  var i437 = data
  i436.name = i437[0]
  request.r(i437[1], i437[2], 0, i436, 'shader')
  i436.renderQueue = i437[3]
  i436.enableInstancing = !!i437[4]
  var i439 = i437[5]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i439[i + 0]) );
  }
  i436.floatParameters = i438
  var i441 = i437[6]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i441[i + 0]) );
  }
  i436.colorParameters = i440
  var i443 = i437[7]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i443[i + 0]) );
  }
  i436.vectorParameters = i442
  var i445 = i437[8]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i445[i + 0]) );
  }
  i436.textureParameters = i444
  var i447 = i437[9]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i447[i + 0]) );
  }
  i436.materialFlags = i446
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i451 = data
  i450.name = i451[0]
  i450.value = i451[1]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i455 = data
  i454.name = i455[0]
  i454.value = new pc.Color(i455[1], i455[2], i455[3], i455[4])
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i459 = data
  i458.name = i459[0]
  i458.value = new pc.Vec4( i459[1], i459[2], i459[3], i459[4] )
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i463 = data
  i462.name = i463[0]
  request.r(i463[1], i463[2], 0, i462, 'value')
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i467 = data
  i466.name = i467[0]
  i466.enabled = !!i467[1]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i469 = data
  i468.name = i469[0]
  i468.index = i469[1]
  i468.startup = !!i469[2]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i471 = data
  i470.aspect = i471[0]
  i470.orthographic = !!i471[1]
  i470.orthographicSize = i471[2]
  i470.backgroundColor = new pc.Color(i471[3], i471[4], i471[5], i471[6])
  i470.nearClipPlane = i471[7]
  i470.farClipPlane = i471[8]
  i470.fieldOfView = i471[9]
  i470.depth = i471[10]
  i470.clearFlags = i471[11]
  i470.cullingMask = i471[12]
  i470.rect = i471[13]
  request.r(i471[14], i471[15], 0, i470, 'targetTexture')
  i470.usePhysicalProperties = !!i471[16]
  i470.focalLength = i471[17]
  i470.sensorSize = new pc.Vec2( i471[18], i471[19] )
  i470.lensShift = new pc.Vec2( i471[20], i471[21] )
  i470.gateFit = i471[22]
  i470.commandBufferCount = i471[23]
  i470.cameraType = i471[24]
  i470.enabled = !!i471[25]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i473 = data
  i472.name = i473[0]
  i472.tagId = i473[1]
  i472.enabled = !!i473[2]
  i472.isStatic = !!i473[3]
  i472.layer = i473[4]
  return i472
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i475 = data
  request.r(i475[0], i475[1], 0, i474, 'm_FirstSelected')
  i474.m_sendNavigationEvents = !!i475[2]
  i474.m_DragThreshold = i475[3]
  return i474
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i477 = data
  i476.m_HorizontalAxis = i477[0]
  i476.m_VerticalAxis = i477[1]
  i476.m_SubmitButton = i477[2]
  i476.m_CancelButton = i477[3]
  i476.m_InputActionsPerSecond = i477[4]
  i476.m_RepeatDelay = i477[5]
  i476.m_ForceModuleActive = !!i477[6]
  i476.m_SendPointerHoverToParent = !!i477[7]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i479 = data
  i478.pivot = new pc.Vec2( i479[0], i479[1] )
  i478.anchorMin = new pc.Vec2( i479[2], i479[3] )
  i478.anchorMax = new pc.Vec2( i479[4], i479[5] )
  i478.sizeDelta = new pc.Vec2( i479[6], i479[7] )
  i478.anchoredPosition3D = new pc.Vec3( i479[8], i479[9], i479[10] )
  i478.rotation = new pc.Quat(i479[11], i479[12], i479[13], i479[14])
  i478.scale = new pc.Vec3( i479[15], i479[16], i479[17] )
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i481 = data
  i480.planeDistance = i481[0]
  i480.referencePixelsPerUnit = i481[1]
  i480.isFallbackOverlay = !!i481[2]
  i480.renderMode = i481[3]
  i480.renderOrder = i481[4]
  i480.sortingLayerName = i481[5]
  i480.sortingOrder = i481[6]
  i480.scaleFactor = i481[7]
  request.r(i481[8], i481[9], 0, i480, 'worldCamera')
  i480.overrideSorting = !!i481[10]
  i480.pixelPerfect = !!i481[11]
  i480.targetDisplay = i481[12]
  i480.overridePixelPerfect = !!i481[13]
  i480.enabled = !!i481[14]
  return i480
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i483 = data
  i482.m_UiScaleMode = i483[0]
  i482.m_ReferencePixelsPerUnit = i483[1]
  i482.m_ScaleFactor = i483[2]
  i482.m_ReferenceResolution = new pc.Vec2( i483[3], i483[4] )
  i482.m_ScreenMatchMode = i483[5]
  i482.m_MatchWidthOrHeight = i483[6]
  i482.m_PhysicalUnit = i483[7]
  i482.m_FallbackScreenDPI = i483[8]
  i482.m_DefaultSpriteDPI = i483[9]
  i482.m_DynamicPixelsPerUnit = i483[10]
  i482.m_PresetInfoIsWorld = !!i483[11]
  return i482
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i485 = data
  i484.m_IgnoreReversedGraphics = !!i485[0]
  i484.m_BlockingObjects = i485[1]
  i484.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i485[2] )
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i487 = data
  i486.cullTransparentMesh = !!i487[0]
  return i486
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.UI.Image' )
  var i489 = data
  request.r(i489[0], i489[1], 0, i488, 'm_Sprite')
  i488.m_Type = i489[2]
  i488.m_PreserveAspect = !!i489[3]
  i488.m_FillCenter = !!i489[4]
  i488.m_FillMethod = i489[5]
  i488.m_FillAmount = i489[6]
  i488.m_FillClockwise = !!i489[7]
  i488.m_FillOrigin = i489[8]
  i488.m_UseSpriteMesh = !!i489[9]
  i488.m_PixelsPerUnitMultiplier = i489[10]
  request.r(i489[11], i489[12], 0, i488, 'm_Material')
  i488.m_Maskable = !!i489[13]
  i488.m_Color = new pc.Color(i489[14], i489[15], i489[16], i489[17])
  i488.m_RaycastTarget = !!i489[18]
  i488.m_RaycastPadding = new pc.Vec4( i489[19], i489[20], i489[21], i489[22] )
  return i488
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.UI.Text' )
  var i491 = data
  i490.m_FontData = request.d('UnityEngine.UI.FontData', i491[0], i490.m_FontData)
  i490.m_Text = i491[1]
  request.r(i491[2], i491[3], 0, i490, 'm_Material')
  i490.m_Maskable = !!i491[4]
  i490.m_Color = new pc.Color(i491[5], i491[6], i491[7], i491[8])
  i490.m_RaycastTarget = !!i491[9]
  i490.m_RaycastPadding = new pc.Vec4( i491[10], i491[11], i491[12], i491[13] )
  return i490
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.UI.FontData' )
  var i493 = data
  request.r(i493[0], i493[1], 0, i492, 'm_Font')
  i492.m_FontSize = i493[2]
  i492.m_FontStyle = i493[3]
  i492.m_BestFit = !!i493[4]
  i492.m_MinSize = i493[5]
  i492.m_MaxSize = i493[6]
  i492.m_Alignment = i493[7]
  i492.m_AlignByGeometry = !!i493[8]
  i492.m_RichText = !!i493[9]
  i492.m_HorizontalOverflow = i493[10]
  i492.m_VerticalOverflow = i493[11]
  i492.m_LineSpacing = i493[12]
  return i492
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.UI.Slider' )
  var i495 = data
  request.r(i495[0], i495[1], 0, i494, 'm_FillRect')
  request.r(i495[2], i495[3], 0, i494, 'm_HandleRect')
  i494.m_Direction = i495[4]
  i494.m_MinValue = i495[5]
  i494.m_MaxValue = i495[6]
  i494.m_WholeNumbers = !!i495[7]
  i494.m_Value = i495[8]
  i494.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i495[9], i494.m_OnValueChanged)
  i494.m_Navigation = request.d('UnityEngine.UI.Navigation', i495[10], i494.m_Navigation)
  i494.m_Transition = i495[11]
  i494.m_Colors = request.d('UnityEngine.UI.ColorBlock', i495[12], i494.m_Colors)
  i494.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i495[13], i494.m_SpriteState)
  i494.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i495[14], i494.m_AnimationTriggers)
  i494.m_Interactable = !!i495[15]
  request.r(i495[16], i495[17], 0, i494, 'm_TargetGraphic')
  return i494
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i497 = data
  i496.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i497[0], i496.m_PersistentCalls)
  return i496
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i499 = data
  var i501 = i499[0]
  var i500 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i501.length; i += 1) {
    i500.add(request.d('UnityEngine.Events.PersistentCall', i501[i + 0]));
  }
  i498.m_Calls = i500
  return i498
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i505 = data
  request.r(i505[0], i505[1], 0, i504, 'm_Target')
  i504.m_TargetAssemblyTypeName = i505[2]
  i504.m_MethodName = i505[3]
  i504.m_Mode = i505[4]
  i504.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i505[5], i504.m_Arguments)
  i504.m_CallState = i505[6]
  return i504
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i507 = data
  i506.m_Mode = i507[0]
  i506.m_WrapAround = !!i507[1]
  request.r(i507[2], i507[3], 0, i506, 'm_SelectOnUp')
  request.r(i507[4], i507[5], 0, i506, 'm_SelectOnDown')
  request.r(i507[6], i507[7], 0, i506, 'm_SelectOnLeft')
  request.r(i507[8], i507[9], 0, i506, 'm_SelectOnRight')
  return i506
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i509 = data
  i508.m_NormalColor = new pc.Color(i509[0], i509[1], i509[2], i509[3])
  i508.m_HighlightedColor = new pc.Color(i509[4], i509[5], i509[6], i509[7])
  i508.m_PressedColor = new pc.Color(i509[8], i509[9], i509[10], i509[11])
  i508.m_SelectedColor = new pc.Color(i509[12], i509[13], i509[14], i509[15])
  i508.m_DisabledColor = new pc.Color(i509[16], i509[17], i509[18], i509[19])
  i508.m_ColorMultiplier = i509[20]
  i508.m_FadeDuration = i509[21]
  return i508
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'm_HighlightedSprite')
  request.r(i511[2], i511[3], 0, i510, 'm_PressedSprite')
  request.r(i511[4], i511[5], 0, i510, 'm_SelectedSprite')
  request.r(i511[6], i511[7], 0, i510, 'm_DisabledSprite')
  return i510
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i513 = data
  i512.m_NormalTrigger = i513[0]
  i512.m_HighlightedTrigger = i513[1]
  i512.m_PressedTrigger = i513[2]
  i512.m_SelectedTrigger = i513[3]
  i512.m_DisabledTrigger = i513[4]
  return i512
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.UI.Mask' )
  var i515 = data
  i514.m_ShowMaskGraphic = !!i515[0]
  return i514
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i516 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i517 = data
  request.r(i517[0], i517[1], 0, i516, 'skeletonDataAsset')
  request.r(i517[2], i517[3], 0, i516, 'additiveMaterial')
  request.r(i517[4], i517[5], 0, i516, 'multiplyMaterial')
  request.r(i517[6], i517[7], 0, i516, 'screenMaterial')
  i516.forceAdditiveMaterial = !!i517[8]
  i516.initialSkinName = i517[9]
  i516.initialFlipX = !!i517[10]
  i516.initialFlipY = !!i517[11]
  i516.startingAnimation = i517[12]
  i516.startingLoop = !!i517[13]
  i516.timeScale = i517[14]
  i516.freeze = !!i517[15]
  i516.layoutScaleMode = i517[16]
  i516.updateWhenInvisible = i517[17]
  i516.allowMultipleCanvasRenderers = !!i517[18]
  var i519 = i517[19]
  var i518 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i519.length; i += 2) {
  request.r(i519[i + 0], i519[i + 1], 1, i518, '')
  }
  i516.canvasRenderers = i518
  i516.enableSeparatorSlots = !!i517[20]
  i516.updateSeparatorPartLocation = !!i517[21]
  i516.updateSeparatorPartScale = !!i517[22]
  i516.disableMeshAssignmentOnOverride = !!i517[23]
  i516.m_SkeletonColor = new pc.Color(i517[24], i517[25], i517[26], i517[27])
  i516.referenceSize = new pc.Vec2( i517[28], i517[29] )
  i516.pivotOffset = new pc.Vec2( i517[30], i517[31] )
  i516.referenceScale = i517[32]
  i516.layoutScale = i517[33]
  i516.rectTransformSize = new pc.Vec2( i517[34], i517[35] )
  i516.editReferenceRect = !!i517[36]
  var i521 = i517[37]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( i521[i + 0] );
  }
  i516.separatorSlotNames = i520
  var i523 = i517[38]
  var i522 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i523.length; i += 2) {
  request.r(i523[i + 0], i523[i + 1], 1, i522, '')
  }
  i516.separatorParts = i522
  i516.physicsPositionInheritanceFactor = new pc.Vec2( i517[39], i517[40] )
  i516.physicsRotationInheritanceFactor = i517[41]
  request.r(i517[42], i517[43], 0, i516, 'physicsMovementRelativeTo')
  i516.meshGenerator = request.d('Spine.Unity.MeshGenerator', i517[44], i516.meshGenerator)
  i516.updateTiming = i517[45]
  i516.unscaledTime = !!i517[46]
  request.r(i517[47], i517[48], 0, i516, 'm_Material')
  i516.m_Maskable = !!i517[49]
  i516.m_Color = new pc.Color(i517[50], i517[51], i517[52], i517[53])
  i516.m_RaycastTarget = !!i517[54]
  i516.m_RaycastPadding = new pc.Vec4( i517[55], i517[56], i517[57], i517[58] )
  return i516
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i530 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i531 = data
  i530.settings = request.d('Spine.Unity.MeshGenerator+Settings', i531[0], i530.settings)
  return i530
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i532 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i533 = data
  i532.useClipping = !!i533[0]
  i532.zSpacing = i533[1]
  i532.tintBlack = !!i533[2]
  i532.canvasGroupCompatible = !!i533[3]
  i532.pmaVertexColors = !!i533[4]
  i532.addNormals = !!i533[5]
  i532.calculateTangents = !!i533[6]
  i532.immutableTriangles = !!i533[7]
  return i532
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i534 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i535 = data
  i534.targetIsSelf = !!i535[0]
  request.r(i535[1], i535[2], 0, i534, 'targetGO')
  i534.tweenTargetIsTargetGO = !!i535[3]
  i534.delay = i535[4]
  i534.duration = i535[5]
  i534.easeType = i535[6]
  i534.easeCurve = new pc.AnimationCurve( { keys_flow: i535[7] } )
  i534.loopType = i535[8]
  i534.loops = i535[9]
  i534.id = i535[10]
  i534.isRelative = !!i535[11]
  i534.isFrom = !!i535[12]
  i534.isIndependentUpdate = !!i535[13]
  i534.autoKill = !!i535[14]
  i534.autoGenerate = !!i535[15]
  i534.isActive = !!i535[16]
  i534.isValid = !!i535[17]
  request.r(i535[18], i535[19], 0, i534, 'target')
  i534.animationType = i535[20]
  i534.targetType = i535[21]
  i534.forcedTargetType = i535[22]
  i534.autoPlay = !!i535[23]
  i534.useTargetAsV3 = !!i535[24]
  i534.endValueFloat = i535[25]
  i534.endValueV3 = new pc.Vec3( i535[26], i535[27], i535[28] )
  i534.endValueV2 = new pc.Vec2( i535[29], i535[30] )
  i534.endValueColor = new pc.Color(i535[31], i535[32], i535[33], i535[34])
  i534.endValueString = i535[35]
  i534.endValueRect = UnityEngine.Rect.MinMaxRect(i535[36], i535[37], i535[38], i535[39])
  request.r(i535[40], i535[41], 0, i534, 'endValueTransform')
  i534.optionalBool0 = !!i535[42]
  i534.optionalBool1 = !!i535[43]
  i534.optionalFloat0 = i535[44]
  i534.optionalInt0 = i535[45]
  i534.optionalRotationMode = i535[46]
  i534.optionalScrambleMode = i535[47]
  i534.optionalShakeRandomnessMode = i535[48]
  i534.optionalString = i535[49]
  i534.updateType = i535[50]
  i534.isSpeedBased = !!i535[51]
  i534.hasOnStart = !!i535[52]
  i534.hasOnPlay = !!i535[53]
  i534.hasOnUpdate = !!i535[54]
  i534.hasOnStepComplete = !!i535[55]
  i534.hasOnComplete = !!i535[56]
  i534.hasOnTweenCreated = !!i535[57]
  i534.hasOnRewind = !!i535[58]
  i534.onStart = request.d('UnityEngine.Events.UnityEvent', i535[59], i534.onStart)
  i534.onPlay = request.d('UnityEngine.Events.UnityEvent', i535[60], i534.onPlay)
  i534.onUpdate = request.d('UnityEngine.Events.UnityEvent', i535[61], i534.onUpdate)
  i534.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i535[62], i534.onStepComplete)
  i534.onComplete = request.d('UnityEngine.Events.UnityEvent', i535[63], i534.onComplete)
  i534.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i535[64], i534.onTweenCreated)
  i534.onRewind = request.d('UnityEngine.Events.UnityEvent', i535[65], i534.onRewind)
  return i534
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i537 = data
  i536.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i537[0], i536.m_PersistentCalls)
  return i536
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i538 = root || request.c( 'AnimationController' )
  var i539 = data
  request.r(i539[0], i539[1], 0, i538, 'skeleton')
  var i541 = i539[2]
  var i540 = new (System.Collections.Generic.List$1(Bridge.ns('ItemAction')))
  for(var i = 0; i < i541.length; i += 1) {
    i540.add(request.d('ItemAction', i541[i + 0]));
  }
  i538.actions = i540
  var i543 = i539[3]
  var i542 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i543.length; i += 1) {
    i542.add(request.d('Anim', i543[i + 0]));
  }
  i538.winAnim = i542
  var i545 = i539[4]
  var i544 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i545.length; i += 1) {
    i544.add(request.d('Anim', i545[i + 0]));
  }
  i538.failAnim = i544
  return i538
}

Deserializers["ItemAction"] = function (request, data, root) {
  var i548 = root || request.c( 'ItemAction' )
  var i549 = data
  request.r(i549[0], i549[1], 0, i548, 'ActionItem')
  request.r(i549[2], i549[3], 0, i548, 'ActionArea')
  var i551 = i549[4]
  var i550 = new (System.Collections.Generic.List$1(Bridge.ns('ActiveObject')))
  for(var i = 0; i < i551.length; i += 1) {
    i550.add(request.d('ActiveObject', i551[i + 0]));
  }
  i548.activeObj = i550
  i548.TimeDelayAnim = i549[5]
  var i553 = i549[6]
  var i552 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i553.length; i += 1) {
    i552.add(request.d('Anim', i553[i + 0]));
  }
  i548.Anim = i552
  return i548
}

Deserializers["ActiveObject"] = function (request, data, root) {
  var i556 = root || request.c( 'ActiveObject' )
  var i557 = data
  request.r(i557[0], i557[1], 0, i556, 'Obj')
  i556.TimeDelayActive = i557[2]
  return i556
}

Deserializers["Anim"] = function (request, data, root) {
  var i560 = root || request.c( 'Anim' )
  var i561 = data
  i560.Key = i561[0]
  var i563 = i561[1]
  var i562 = new (System.Collections.Generic.List$1(Bridge.ns('Sound')))
  for(var i = 0; i < i563.length; i += 1) {
    i562.add(request.d('Sound', i563[i + 0]));
  }
  i560.Sounds = i562
  i560.Loop = !!i561[2]
  i560.Next = !!i561[3]
  i560.NextTime = i561[4]
  return i560
}

Deserializers["Sound"] = function (request, data, root) {
  var i566 = root || request.c( 'Sound' )
  var i567 = data
  i566.TimeDelaySound = i567[0]
  request.r(i567[1], i567[2], 0, i566, 'Clip')
  return i566
}

Deserializers["ActiceOtherOnActive"] = function (request, data, root) {
  var i568 = root || request.c( 'ActiceOtherOnActive' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'activeObject')
  i568.delay = i569[2]
  return i568
}

Deserializers["DestroyOtherOnActive"] = function (request, data, root) {
  var i570 = root || request.c( 'DestroyOtherOnActive' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'destroyObject')
  i570.delay = i571[2]
  return i570
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.UI.Button' )
  var i573 = data
  i572.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i573[0], i572.m_OnClick)
  i572.m_Navigation = request.d('UnityEngine.UI.Navigation', i573[1], i572.m_Navigation)
  i572.m_Transition = i573[2]
  i572.m_Colors = request.d('UnityEngine.UI.ColorBlock', i573[3], i572.m_Colors)
  i572.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i573[4], i572.m_SpriteState)
  i572.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i573[5], i572.m_AnimationTriggers)
  i572.m_Interactable = !!i573[6]
  request.r(i573[7], i573[8], 0, i572, 'm_TargetGraphic')
  return i572
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i575 = data
  i574.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i575[0], i574.m_PersistentCalls)
  return i574
}

Deserializers["TutController"] = function (request, data, root) {
  var i576 = root || request.c( 'TutController' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'icon')
  var i579 = i577[2]
  var i578 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i579.length; i += 2) {
  request.r(i579[i + 0], i579[i + 1], 1, i578, '')
  }
  i576.tutObjects = i578
  request.r(i577[3], i577[4], 0, i576, 'tutObject')
  i576.toPos = new pc.Vec3( i577[5], i577[6], i577[7] )
  i576.timeMove = i577[8]
  i576.timeDelay = i577[9]
  return i576
}

Deserializers["LockController"] = function (request, data, root) {
  var i582 = root || request.c( 'LockController' )
  var i583 = data
  i582.password = i583[0]
  i582.userInput = i583[1]
  i582.delayHide = i583[2]
  request.r(i583[3], i583[4], 0, i582, 'activeObject')
  request.r(i583[5], i583[6], 0, i582, 'activeArea')
  request.r(i583[7], i583[8], 0, i582, 'showButton')
  request.r(i583[9], i583[10], 0, i582, 'hideButton')
  request.r(i583[11], i583[12], 0, i582, 'inputScene')
  request.r(i583[13], i583[14], 0, i582, 'textScene')
  request.r(i583[15], i583[16], 0, i582, 'correctScene')
  request.r(i583[17], i583[18], 0, i582, 'notCorrectScene')
  var i585 = i583[19]
  var i584 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Text')))
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 1, i584, '')
  }
  i582.charText = i584
  var i587 = i583[20]
  var i586 = new (System.Collections.Generic.List$1(Bridge.ns('InputButton')))
  for(var i = 0; i < i587.length; i += 1) {
    i586.add(request.d('InputButton', i587[i + 0]));
  }
  i582.inputButtons = i586
  request.r(i583[21], i583[22], 0, i582, 'lockSkeleton')
  var i589 = i583[23]
  var i588 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i589.length; i += 1) {
    i588.add(request.d('Anim', i589[i + 0]));
  }
  i582.showAnim = i588
  var i591 = i583[24]
  var i590 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i591.length; i += 1) {
    i590.add(request.d('Anim', i591[i + 0]));
  }
  i582.hideAnim = i590
  return i582
}

Deserializers["InputButton"] = function (request, data, root) {
  var i596 = root || request.c( 'InputButton' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'Button')
  i596.Number = i597[2]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i599 = data
  request.r(i599[0], i599[1], 0, i598, 'clip')
  request.r(i599[2], i599[3], 0, i598, 'outputAudioMixerGroup')
  i598.playOnAwake = !!i599[4]
  i598.loop = !!i599[5]
  i598.time = i599[6]
  i598.volume = i599[7]
  i598.pitch = i599[8]
  i598.enabled = !!i599[9]
  return i598
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i600 = root || request.c( 'LayoutController' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'CTA')
  i600.hide = !!i601[2]
  return i600
}

Deserializers["AudioController"] = function (request, data, root) {
  var i602 = root || request.c( 'AudioController' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'BGM')
  request.r(i603[2], i603[3], 0, i602, 'musicSource')
  request.r(i603[4], i603[5], 0, i602, 'SFXPool')
  return i602
}

Deserializers["InteractController"] = function (request, data, root) {
  var i604 = root || request.c( 'InteractController' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'canvas')
  i604.maxPos = new pc.Vec2( i605[2], i605[3] )
  i604.minPos = new pc.Vec2( i605[4], i605[5] )
  var i607 = i605[6]
  var i606 = new (System.Collections.Generic.List$1(Bridge.ns('ItemDrag')))
  for(var i = 0; i < i607.length; i += 1) {
    i606.add(request.d('ItemDrag', i607[i + 0]));
  }
  i604.itemDrags = i606
  i604.currentTarget = request.d('ItemDrag', i605[7], i604.currentTarget)
  request.r(i605[8], i605[9], 0, i604, 'tut2')
  request.r(i605[10], i605[11], 0, i604, 'pickupSound')
  i604.lockPlay = !!i605[12]
  return i604
}

Deserializers["ItemDrag"] = function (request, data, root) {
  var i610 = root || request.c( 'ItemDrag' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'DragArea')
  request.r(i611[2], i611[3], 0, i610, 'Item')
  request.r(i611[4], i611[5], 0, i610, 'Icon')
  return i610
}

Deserializers["GameController"] = function (request, data, root) {
  var i612 = root || request.c( 'GameController' )
  var i613 = data
  i612.OnComplete = request.d('System.Action', i613[0], i612.OnComplete)
  i612.OnWin = request.d('System.Action', i613[1], i612.OnWin)
  i612.OnFail = request.d('System.Action', i613[2], i612.OnFail)
  i612.CompleteStep = request.d('System.Action', i613[3], i612.CompleteStep)
  var i615 = i613[4]
  var i614 = new (System.Collections.Generic.List$1(Bridge.ns('SkeletonMap')))
  for(var i = 0; i < i615.length; i += 1) {
    i614.add(request.d('SkeletonMap', i615[i + 0]));
  }
  i612.skeletons = i614
  var i617 = i613[5]
  var i616 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 1, i616, '')
  }
  i612.itemStep = i616
  request.r(i613[6], i613[7], 0, i612, 'enemy1')
  request.r(i613[8], i613[9], 0, i612, 'enemy2')
  i612.complete = !!i613[10]
  i612.currentStep = i613[11]
  i612.maxStep = i613[12]
  request.r(i613[13], i613[14], 0, i612, 'currentStepText')
  request.r(i613[15], i613[16], 0, i612, 'maxStepText')
  request.r(i613[17], i613[18], 0, i612, 'slider')
  i612.delayEnd = i613[19]
  request.r(i613[20], i613[21], 0, i612, 'winScene')
  request.r(i613[22], i613[23], 0, i612, 'failcene')
  i612.subTime = i613[24]
  i612.startSub = i613[25]
  i612.winSub = i613[26]
  i612.failSub = i613[27]
  var i619 = i613[28]
  var i618 = new (System.Collections.Generic.List$1(Bridge.ns('Sub')))
  for(var i = 0; i < i619.length; i += 1) {
    i618.add(request.d('Sub', i619[i + 0]));
  }
  i612.subs = i618
  request.r(i613[29], i613[30], 0, i612, 'sub')
  request.r(i613[31], i613[32], 0, i612, 'subText')
  return i612
}

Deserializers["System.Action"] = function (request, data, root) {
  var i620 = root || request.c( 'System.Action' )
  var i621 = data
  return i620
}

Deserializers["SkeletonMap"] = function (request, data, root) {
  var i624 = root || request.c( 'SkeletonMap' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'Skeleton')
  var i627 = i625[2]
  var i626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 1, i626, '')
  }
  i624.Areas = i626
  return i624
}

Deserializers["Sub"] = function (request, data, root) {
  var i630 = root || request.c( 'Sub' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'Item')
  i630.SubText = i631[2]
  return i630
}

Deserializers["LunaController"] = function (request, data, root) {
  var i632 = root || request.c( 'LunaController' )
  var i633 = data
  i632.TimePlay = i633[0]
  i632.CountPlay = i633[1]
  i632.BGColor = new pc.Color(i633[2], i633[3], i633[4], i633[5])
  i632.GameBGColor = new pc.Color(i633[6], i633[7], i633[8], i633[9])
  i632.LevelTextColor = new pc.Color(i633[10], i633[11], i633[12], i633[13])
  i632.TitleTextColor = new pc.Color(i633[14], i633[15], i633[16], i633[17])
  i632.SubBGColor = new pc.Color(i633[18], i633[19], i633[20], i633[21])
  request.r(i633[22], i633[23], 0, i632, 'time')
  request.r(i633[24], i633[25], 0, i632, 'BGImage')
  request.r(i633[26], i633[27], 0, i632, 'GameBGImage')
  request.r(i633[28], i633[29], 0, i632, 'levelText')
  request.r(i633[30], i633[31], 0, i632, 'titleText')
  request.r(i633[32], i633[33], 0, i632, 'subBG')
  request.r(i633[34], i633[35], 0, i632, 'endCard')
  var i635 = i633[36]
  var i634 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 1, i634, '')
  }
  i632.CTA = i634
  i632.count = i633[37]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i639 = data
  i638.ambientIntensity = i639[0]
  i638.reflectionIntensity = i639[1]
  i638.ambientMode = i639[2]
  i638.ambientLight = new pc.Color(i639[3], i639[4], i639[5], i639[6])
  i638.ambientSkyColor = new pc.Color(i639[7], i639[8], i639[9], i639[10])
  i638.ambientGroundColor = new pc.Color(i639[11], i639[12], i639[13], i639[14])
  i638.ambientEquatorColor = new pc.Color(i639[15], i639[16], i639[17], i639[18])
  i638.fogColor = new pc.Color(i639[19], i639[20], i639[21], i639[22])
  i638.fogEndDistance = i639[23]
  i638.fogStartDistance = i639[24]
  i638.fogDensity = i639[25]
  i638.fog = !!i639[26]
  request.r(i639[27], i639[28], 0, i638, 'skybox')
  i638.fogMode = i639[29]
  var i641 = i639[30]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i641[i + 0]) );
  }
  i638.lightmaps = i640
  i638.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i639[31], i638.lightProbes)
  i638.lightmapsMode = i639[32]
  i638.mixedBakeMode = i639[33]
  i638.environmentLightingMode = i639[34]
  i638.ambientProbe = new pc.SphericalHarmonicsL2(i639[35])
  request.r(i639[36], i639[37], 0, i638, 'customReflection')
  request.r(i639[38], i639[39], 0, i638, 'defaultReflection')
  i638.defaultReflectionMode = i639[40]
  i638.defaultReflectionResolution = i639[41]
  i638.sunLightObjectId = i639[42]
  i638.pixelLightCount = i639[43]
  i638.defaultReflectionHDR = !!i639[44]
  i638.hasLightDataAsset = !!i639[45]
  i638.hasManualGenerate = !!i639[46]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'lightmapColor')
  request.r(i645[2], i645[3], 0, i644, 'lightmapDirection')
  request.r(i645[4], i645[5], 0, i644, 'shadowMask')
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i646 = root || new UnityEngine.LightProbes()
  var i647 = data
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i655 = data
  var i657 = i655[0]
  var i656 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i657.length; i += 1) {
    i656.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i657[i + 0]));
  }
  i654.ShaderCompilationErrors = i656
  i654.name = i655[1]
  i654.guid = i655[2]
  var i659 = i655[3]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( i659[i + 0] );
  }
  i654.shaderDefinedKeywords = i658
  var i661 = i655[4]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i661[i + 0]) );
  }
  i654.passes = i660
  var i663 = i655[5]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i663[i + 0]) );
  }
  i654.usePasses = i662
  var i665 = i655[6]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i665[i + 0]) );
  }
  i654.defaultParameterValues = i664
  request.r(i655[7], i655[8], 0, i654, 'unityFallbackShader')
  i654.readDepth = !!i655[9]
  i654.hasDepthOnlyPass = !!i655[10]
  i654.isCreatedByShaderGraph = !!i655[11]
  i654.disableBatching = !!i655[12]
  i654.compiled = !!i655[13]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i669 = data
  i668.shaderName = i669[0]
  i668.errorMessage = i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i672 = root || new pc.UnityShaderPass()
  var i673 = data
  i672.id = i673[0]
  i672.subShaderIndex = i673[1]
  i672.name = i673[2]
  i672.passType = i673[3]
  i672.grabPassTextureName = i673[4]
  i672.usePass = !!i673[5]
  i672.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[6], i672.zTest)
  i672.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[7], i672.zWrite)
  i672.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[8], i672.culling)
  i672.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i673[9], i672.blending)
  i672.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i673[10], i672.alphaBlending)
  i672.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[11], i672.colorWriteMask)
  i672.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[12], i672.offsetUnits)
  i672.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[13], i672.offsetFactor)
  i672.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[14], i672.stencilRef)
  i672.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[15], i672.stencilReadMask)
  i672.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[16], i672.stencilWriteMask)
  i672.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i673[17], i672.stencilOp)
  i672.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i673[18], i672.stencilOpFront)
  i672.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i673[19], i672.stencilOpBack)
  var i675 = i673[20]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i675[i + 0]) );
  }
  i672.tags = i674
  var i677 = i673[21]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( i677[i + 0] );
  }
  i672.passDefinedKeywords = i676
  var i679 = i673[22]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i679[i + 0]) );
  }
  i672.passDefinedKeywordGroups = i678
  var i681 = i673[23]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i681[i + 0]) );
  }
  i672.variants = i680
  var i683 = i673[24]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i683[i + 0]) );
  }
  i672.excludedVariants = i682
  i672.hasDepthReader = !!i673[25]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i685 = data
  i684.val = i685[0]
  i684.name = i685[1]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i687 = data
  i686.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[0], i686.src)
  i686.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[1], i686.dst)
  i686.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[2], i686.op)
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i689 = data
  i688.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[0], i688.pass)
  i688.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[1], i688.fail)
  i688.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[2], i688.zFail)
  i688.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[3], i688.comp)
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i693 = data
  i692.name = i693[0]
  i692.value = i693[1]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i697 = data
  var i699 = i697[0]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( i699[i + 0] );
  }
  i696.keywords = i698
  i696.hasDiscard = !!i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i703 = data
  i702.passId = i703[0]
  i702.subShaderIndex = i703[1]
  var i705 = i703[2]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( i705[i + 0] );
  }
  i702.keywords = i704
  i702.vertexProgram = i703[3]
  i702.fragmentProgram = i703[4]
  i702.exportedForWebGl2 = !!i703[5]
  i702.readDepth = !!i703[6]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'shader')
  i708.pass = i709[2]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i713 = data
  i712.name = i713[0]
  i712.type = i713[1]
  i712.value = new pc.Vec4( i713[2], i713[3], i713[4], i713[5] )
  i712.textureValue = i713[6]
  i712.shaderPropertyFlag = i713[7]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i715 = data
  i714.name = i715[0]
  request.r(i715[1], i715[2], 0, i714, 'texture')
  i714.aabb = i715[3]
  i714.vertices = i715[4]
  i714.triangles = i715[5]
  i714.textureRect = UnityEngine.Rect.MinMaxRect(i715[6], i715[7], i715[8], i715[9])
  i714.packedRect = UnityEngine.Rect.MinMaxRect(i715[10], i715[11], i715[12], i715[13])
  i714.border = new pc.Vec4( i715[14], i715[15], i715[16], i715[17] )
  i714.transparency = i715[18]
  i714.bounds = i715[19]
  i714.pixelsPerUnit = i715[20]
  i714.textureWidth = i715[21]
  i714.textureHeight = i715[22]
  i714.nativeSize = new pc.Vec2( i715[23], i715[24] )
  i714.pivot = new pc.Vec2( i715[25], i715[26] )
  i714.textureRectOffset = new pc.Vec2( i715[27], i715[28] )
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i717 = data
  i716.name = i717[0]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i719 = data
  i718.name = i719[0]
  i718.ascent = i719[1]
  i718.originalLineHeight = i719[2]
  i718.fontSize = i719[3]
  var i721 = i719[4]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i721[i + 0]) );
  }
  i718.characterInfo = i720
  request.r(i719[5], i719[6], 0, i718, 'texture')
  i718.originalFontSize = i719[7]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i725 = data
  i724.index = i725[0]
  i724.advance = i725[1]
  i724.bearing = i725[2]
  i724.glyphWidth = i725[3]
  i724.glyphHeight = i725[4]
  i724.minX = i725[5]
  i724.maxX = i725[6]
  i724.minY = i725[7]
  i724.maxY = i725[8]
  i724.uvBottomLeftX = i725[9]
  i724.uvBottomLeftY = i725[10]
  i724.uvBottomRightX = i725[11]
  i724.uvBottomRightY = i725[12]
  i724.uvTopLeftX = i725[13]
  i724.uvTopLeftY = i725[14]
  i724.uvTopRightX = i725[15]
  i724.uvTopRightY = i725[16]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i727 = data
  i726.name = i727[0]
  i726.bytes64 = i727[1]
  i726.data = i727[2]
  return i726
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i728 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i729 = data
  var i731 = i729[0]
  var i730 = []
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 2, i730, '')
  }
  i728.atlasAssets = i730
  i728.scale = i729[1]
  request.r(i729[2], i729[3], 0, i728, 'skeletonJSON')
  i728.isUpgradingBlendModeMaterials = !!i729[4]
  i728.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i729[5], i728.blendModeMaterials)
  var i733 = i729[6]
  var i732 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 1, i732, '')
  }
  i728.skeletonDataModifiers = i732
  var i735 = i729[7]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( i735[i + 0] );
  }
  i728.fromAnimation = i734
  var i737 = i729[8]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( i737[i + 0] );
  }
  i728.toAnimation = i736
  i728.duration = i729[9]
  i728.defaultMix = i729[10]
  request.r(i729[11], i729[12], 0, i728, 'controller')
  return i728
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i740 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i741 = data
  i740.applyAdditiveMaterial = !!i741[0]
  var i743 = i741[1]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i743.length; i += 1) {
    i742.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i743[i + 0]));
  }
  i740.additiveMaterials = i742
  var i745 = i741[2]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i745.length; i += 1) {
    i744.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i745[i + 0]));
  }
  i740.multiplyMaterials = i744
  var i747 = i741[3]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i747.length; i += 1) {
    i746.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i747[i + 0]));
  }
  i740.screenMaterials = i746
  i740.requiresBlendModeMaterials = !!i741[4]
  return i740
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i750 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i751 = data
  i750.pageName = i751[0]
  request.r(i751[1], i751[2], 0, i750, 'material')
  return i750
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i754 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'atlasFile')
  var i757 = i755[2]
  var i756 = []
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 2, i756, '')
  }
  i754.materials = i756
  i754.textureLoadingMode = i755[3]
  request.r(i755[4], i755[5], 0, i754, 'onDemandTextureLoader')
  return i754
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i760 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i761 = data
  i760.useSafeMode = !!i761[0]
  i760.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i761[1], i760.safeModeOptions)
  i760.timeScale = i761[2]
  i760.unscaledTimeScale = i761[3]
  i760.useSmoothDeltaTime = !!i761[4]
  i760.maxSmoothUnscaledTime = i761[5]
  i760.rewindCallbackMode = i761[6]
  i760.showUnityEditorReport = !!i761[7]
  i760.logBehaviour = i761[8]
  i760.drawGizmos = !!i761[9]
  i760.defaultRecyclable = !!i761[10]
  i760.defaultAutoPlay = i761[11]
  i760.defaultUpdateType = i761[12]
  i760.defaultTimeScaleIndependent = !!i761[13]
  i760.defaultEaseType = i761[14]
  i760.defaultEaseOvershootOrAmplitude = i761[15]
  i760.defaultEasePeriod = i761[16]
  i760.defaultAutoKill = !!i761[17]
  i760.defaultLoopType = i761[18]
  i760.debugMode = !!i761[19]
  i760.debugStoreTargetId = !!i761[20]
  i760.showPreviewPanel = !!i761[21]
  i760.storeSettingsLocation = i761[22]
  i760.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i761[23], i760.modules)
  i760.createASMDEF = !!i761[24]
  i760.showPlayingTweens = !!i761[25]
  i760.showPausedTweens = !!i761[26]
  return i760
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i762 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i763 = data
  i762.logBehaviour = i763[0]
  i762.nestedTweenFailureBehaviour = i763[1]
  return i762
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i764 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i765 = data
  i764.showPanel = !!i765[0]
  i764.audioEnabled = !!i765[1]
  i764.physicsEnabled = !!i765[2]
  i764.physics2DEnabled = !!i765[3]
  i764.spriteEnabled = !!i765[4]
  i764.uiEnabled = !!i765[5]
  i764.textMeshProEnabled = !!i765[6]
  i764.tk2DEnabled = !!i765[7]
  i764.deAudioEnabled = !!i765[8]
  i764.deUnityExtendedEnabled = !!i765[9]
  i764.epoOutlineEnabled = !!i765[10]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i767 = data
  var i769 = i767[0]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i769[i + 0]) );
  }
  i766.files = i768
  i766.componentToPrefabIds = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i773 = data
  i772.path = i773[0]
  request.r(i773[1], i773[2], 0, i772, 'unityObject')
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i775 = data
  var i777 = i775[0]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i777[i + 0]) );
  }
  i774.scriptsExecutionOrder = i776
  var i779 = i775[1]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i779[i + 0]) );
  }
  i774.sortingLayers = i778
  var i781 = i775[2]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i781[i + 0]) );
  }
  i774.cullingLayers = i780
  i774.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i775[3], i774.timeSettings)
  i774.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i775[4], i774.physicsSettings)
  i774.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i775[5], i774.physics2DSettings)
  i774.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i775[6], i774.qualitySettings)
  i774.enableRealtimeShadows = !!i775[7]
  i774.enableAutoInstancing = !!i775[8]
  i774.enableStaticBatching = !!i775[9]
  i774.enableDynamicBatching = !!i775[10]
  i774.usePreservativeDynamicBatching = !!i775[11]
  i774.lightmapEncodingQuality = i775[12]
  i774.desiredColorSpace = i775[13]
  var i783 = i775[14]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( i783[i + 0] );
  }
  i774.allTags = i782
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i787 = data
  i786.name = i787[0]
  i786.value = i787[1]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i791 = data
  i790.id = i791[0]
  i790.name = i791[1]
  i790.value = i791[2]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i795 = data
  i794.id = i795[0]
  i794.name = i795[1]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i797 = data
  i796.fixedDeltaTime = i797[0]
  i796.maximumDeltaTime = i797[1]
  i796.timeScale = i797[2]
  i796.maximumParticleTimestep = i797[3]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i799 = data
  i798.gravity = new pc.Vec3( i799[0], i799[1], i799[2] )
  i798.defaultSolverIterations = i799[3]
  i798.bounceThreshold = i799[4]
  i798.autoSyncTransforms = !!i799[5]
  i798.autoSimulation = !!i799[6]
  var i801 = i799[7]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i801[i + 0]) );
  }
  i798.collisionMatrix = i800
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i805 = data
  i804.enabled = !!i805[0]
  i804.layerId = i805[1]
  i804.otherLayerId = i805[2]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'material')
  i806.gravity = new pc.Vec2( i807[2], i807[3] )
  i806.positionIterations = i807[4]
  i806.velocityIterations = i807[5]
  i806.velocityThreshold = i807[6]
  i806.maxLinearCorrection = i807[7]
  i806.maxAngularCorrection = i807[8]
  i806.maxTranslationSpeed = i807[9]
  i806.maxRotationSpeed = i807[10]
  i806.baumgarteScale = i807[11]
  i806.baumgarteTOIScale = i807[12]
  i806.timeToSleep = i807[13]
  i806.linearSleepTolerance = i807[14]
  i806.angularSleepTolerance = i807[15]
  i806.defaultContactOffset = i807[16]
  i806.autoSimulation = !!i807[17]
  i806.queriesHitTriggers = !!i807[18]
  i806.queriesStartInColliders = !!i807[19]
  i806.callbacksOnDisable = !!i807[20]
  i806.reuseCollisionCallbacks = !!i807[21]
  i806.autoSyncTransforms = !!i807[22]
  var i809 = i807[23]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i809[i + 0]) );
  }
  i806.collisionMatrix = i808
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i813 = data
  i812.enabled = !!i813[0]
  i812.layerId = i813[1]
  i812.otherLayerId = i813[2]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i815 = data
  var i817 = i815[0]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i817[i + 0]) );
  }
  i814.qualityLevels = i816
  var i819 = i815[1]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i814.names = i818
  i814.shadows = i815[2]
  i814.anisotropicFiltering = i815[3]
  i814.antiAliasing = i815[4]
  i814.lodBias = i815[5]
  i814.shadowCascades = i815[6]
  i814.shadowDistance = i815[7]
  i814.shadowmaskMode = i815[8]
  i814.shadowProjection = i815[9]
  i814.shadowResolution = i815[10]
  i814.softParticles = !!i815[11]
  i814.softVegetation = !!i815[12]
  i814.activeColorSpace = i815[13]
  i814.desiredColorSpace = i815[14]
  i814.masterTextureLimit = i815[15]
  i814.maxQueuedFrames = i815[16]
  i814.particleRaycastBudget = i815[17]
  i814.pixelLightCount = i815[18]
  i814.realtimeReflectionProbes = !!i815[19]
  i814.shadowCascade2Split = i815[20]
  i814.shadowCascade4Split = new pc.Vec3( i815[21], i815[22], i815[23] )
  i814.streamingMipmapsActive = !!i815[24]
  i814.vSyncCount = i815[25]
  i814.asyncUploadBufferSize = i815[26]
  i814.asyncUploadTimeSlice = i815[27]
  i814.billboardsFaceCameraPosition = !!i815[28]
  i814.shadowNearPlaneOffset = i815[29]
  i814.streamingMipmapsMemoryBudget = i815[30]
  i814.maximumLODLevel = i815[31]
  i814.streamingMipmapsAddAllCameras = !!i815[32]
  i814.streamingMipmapsMaxLevelReduction = i815[33]
  i814.streamingMipmapsRenderersPerFrame = i815[34]
  i814.resolutionScalingFixedDPIFactor = i815[35]
  i814.streamingMipmapsMaxFileIORequests = i815[36]
  i814.currentQualityLevel = i815[37]
  return i814
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'm_ObjectArgument')
  i822.m_ObjectArgumentAssemblyTypeName = i823[2]
  i822.m_IntArgument = i823[3]
  i822.m_FloatArgument = i823[4]
  i822.m_StringArgument = i823[5]
  i822.m_BoolArgument = !!i823[6]
  return i822
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[2],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[59],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[2],"73":[74],"75":[76],"77":[76],"8":[7],"23":[18],"78":[79],"80":[7],"81":[11,7],"82":[74],"18":[11,7],"83":[84,74],"85":[74,86],"87":[74],"88":[52],"89":[59],"90":[79],"91":[92],"93":[94],"95":[2],"96":[97],"98":[7],"99":[11,7],"100":[74],"101":[11,7],"102":[7],"103":[7],"104":[74,7],"105":[7,11],"106":[107],"108":[107],"109":[107],"110":[7],"111":[7],"10":[8],"12":[11,7],"112":[7],"9":[8],"113":[7],"114":[7],"115":[7],"116":[7],"117":[7],"118":[7],"119":[7],"17":[7],"120":[7],"121":[11,7],"122":[7],"123":[7],"124":[7],"16":[7],"13":[11,7],"125":[7],"126":[5],"127":[5],"6":[5],"128":[5],"129":[2],"130":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.Slider","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","DG.Tweening.DOTweenAnimation","AnimationController","UnityEngine.GameObject","UnityEngine.AudioClip","ActiceOtherOnActive","DestroyOtherOnActive","UnityEngine.UI.Button","TutController","LockController","UnityEngine.AudioSource","LayoutController","AudioController","UnityEngine.Transform","InteractController","GameController","LunaController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "09/08/2026 06:37:05";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BMTP_V08_NgocBTU_TamNTM";

Deserializers.lunaAppID = "38020";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1928";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4855";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "ade6eb8f-8816-461a-9b46-0035c9b7c736";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

