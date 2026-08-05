var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.JointSpring' )
  var i355 = data
  i354.spring = i355[0]
  i354.damper = i355[1]
  i354.targetPosition = i355[2]
  return i354
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i356 = root || request.c( 'UnityEngine.JointMotor' )
  var i357 = data
  i356.m_TargetVelocity = i357[0]
  i356.m_Force = i357[1]
  i356.m_FreeSpin = i357[2]
  return i356
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i358 = root || request.c( 'UnityEngine.JointLimits' )
  var i359 = data
  i358.m_Min = i359[0]
  i358.m_Max = i359[1]
  i358.m_Bounciness = i359[2]
  i358.m_BounceMinVelocity = i359[3]
  i358.m_ContactDistance = i359[4]
  i358.minBounce = i359[5]
  i358.maxBounce = i359[6]
  return i358
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i360 = root || request.c( 'UnityEngine.JointDrive' )
  var i361 = data
  i360.m_PositionSpring = i361[0]
  i360.m_PositionDamper = i361[1]
  i360.m_MaximumForce = i361[2]
  i360.m_UseAcceleration = i361[3]
  return i360
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i362 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i363 = data
  i362.m_Spring = i363[0]
  i362.m_Damper = i363[1]
  return i362
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i364 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i365 = data
  i364.m_Limit = i365[0]
  i364.m_Bounciness = i365[1]
  i364.m_ContactDistance = i365[2]
  return i364
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i366 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i367 = data
  i366.m_ExtremumSlip = i367[0]
  i366.m_ExtremumValue = i367[1]
  i366.m_AsymptoteSlip = i367[2]
  i366.m_AsymptoteValue = i367[3]
  i366.m_Stiffness = i367[4]
  return i366
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i369 = data
  i368.m_LowerAngle = i369[0]
  i368.m_UpperAngle = i369[1]
  return i368
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i370 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i371 = data
  i370.m_MotorSpeed = i371[0]
  i370.m_MaximumMotorTorque = i371[1]
  return i370
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i373 = data
  i372.m_DampingRatio = i373[0]
  i372.m_Frequency = i373[1]
  i372.m_Angle = i373[2]
  return i372
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i375 = data
  i374.m_LowerTranslation = i375[0]
  i374.m_UpperTranslation = i375[1]
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i377 = data
  i376.name = i377[0]
  i376.width = i377[1]
  i376.height = i377[2]
  i376.mipmapCount = i377[3]
  i376.anisoLevel = i377[4]
  i376.filterMode = i377[5]
  i376.hdr = !!i377[6]
  i376.format = i377[7]
  i376.wrapMode = i377[8]
  i376.alphaIsTransparency = !!i377[9]
  i376.alphaSource = i377[10]
  i376.graphicsFormat = i377[11]
  i376.sRGBTexture = !!i377[12]
  i376.desiredColorSpace = i377[13]
  i376.wrapU = i377[14]
  i376.wrapV = i377[15]
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i378 = root || new pc.UnityMaterial()
  var i379 = data
  i378.name = i379[0]
  request.r(i379[1], i379[2], 0, i378, 'shader')
  i378.renderQueue = i379[3]
  i378.enableInstancing = !!i379[4]
  var i381 = i379[5]
  var i380 = []
  for(var i = 0; i < i381.length; i += 1) {
    i380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i381[i + 0]) );
  }
  i378.floatParameters = i380
  var i383 = i379[6]
  var i382 = []
  for(var i = 0; i < i383.length; i += 1) {
    i382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i383[i + 0]) );
  }
  i378.colorParameters = i382
  var i385 = i379[7]
  var i384 = []
  for(var i = 0; i < i385.length; i += 1) {
    i384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i385[i + 0]) );
  }
  i378.vectorParameters = i384
  var i387 = i379[8]
  var i386 = []
  for(var i = 0; i < i387.length; i += 1) {
    i386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i387[i + 0]) );
  }
  i378.textureParameters = i386
  var i389 = i379[9]
  var i388 = []
  for(var i = 0; i < i389.length; i += 1) {
    i388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i389[i + 0]) );
  }
  i378.materialFlags = i388
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i393 = data
  i392.name = i393[0]
  i392.value = i393[1]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i397 = data
  i396.name = i397[0]
  i396.value = new pc.Color(i397[1], i397[2], i397[3], i397[4])
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i401 = data
  i400.name = i401[0]
  i400.value = new pc.Vec4( i401[1], i401[2], i401[3], i401[4] )
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i405 = data
  i404.name = i405[0]
  request.r(i405[1], i405[2], 0, i404, 'value')
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i409 = data
  i408.name = i409[0]
  i408.enabled = !!i409[1]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i411 = data
  i410.name = i411[0]
  i410.index = i411[1]
  i410.startup = !!i411[2]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i413 = data
  i412.aspect = i413[0]
  i412.orthographic = !!i413[1]
  i412.orthographicSize = i413[2]
  i412.backgroundColor = new pc.Color(i413[3], i413[4], i413[5], i413[6])
  i412.nearClipPlane = i413[7]
  i412.farClipPlane = i413[8]
  i412.fieldOfView = i413[9]
  i412.depth = i413[10]
  i412.clearFlags = i413[11]
  i412.cullingMask = i413[12]
  i412.rect = i413[13]
  request.r(i413[14], i413[15], 0, i412, 'targetTexture')
  i412.usePhysicalProperties = !!i413[16]
  i412.focalLength = i413[17]
  i412.sensorSize = new pc.Vec2( i413[18], i413[19] )
  i412.lensShift = new pc.Vec2( i413[20], i413[21] )
  i412.gateFit = i413[22]
  i412.commandBufferCount = i413[23]
  i412.cameraType = i413[24]
  i412.enabled = !!i413[25]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i415 = data
  i414.name = i415[0]
  i414.tagId = i415[1]
  i414.enabled = !!i415[2]
  i414.isStatic = !!i415[3]
  i414.layer = i415[4]
  return i414
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i417 = data
  request.r(i417[0], i417[1], 0, i416, 'm_FirstSelected')
  i416.m_sendNavigationEvents = !!i417[2]
  i416.m_DragThreshold = i417[3]
  return i416
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i419 = data
  i418.m_HorizontalAxis = i419[0]
  i418.m_VerticalAxis = i419[1]
  i418.m_SubmitButton = i419[2]
  i418.m_CancelButton = i419[3]
  i418.m_InputActionsPerSecond = i419[4]
  i418.m_RepeatDelay = i419[5]
  i418.m_ForceModuleActive = !!i419[6]
  i418.m_SendPointerHoverToParent = !!i419[7]
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i421 = data
  i420.pivot = new pc.Vec2( i421[0], i421[1] )
  i420.anchorMin = new pc.Vec2( i421[2], i421[3] )
  i420.anchorMax = new pc.Vec2( i421[4], i421[5] )
  i420.sizeDelta = new pc.Vec2( i421[6], i421[7] )
  i420.anchoredPosition3D = new pc.Vec3( i421[8], i421[9], i421[10] )
  i420.rotation = new pc.Quat(i421[11], i421[12], i421[13], i421[14])
  i420.scale = new pc.Vec3( i421[15], i421[16], i421[17] )
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i423 = data
  i422.planeDistance = i423[0]
  i422.referencePixelsPerUnit = i423[1]
  i422.isFallbackOverlay = !!i423[2]
  i422.renderMode = i423[3]
  i422.renderOrder = i423[4]
  i422.sortingLayerName = i423[5]
  i422.sortingOrder = i423[6]
  i422.scaleFactor = i423[7]
  request.r(i423[8], i423[9], 0, i422, 'worldCamera')
  i422.overrideSorting = !!i423[10]
  i422.pixelPerfect = !!i423[11]
  i422.targetDisplay = i423[12]
  i422.overridePixelPerfect = !!i423[13]
  i422.enabled = !!i423[14]
  return i422
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i425 = data
  i424.m_UiScaleMode = i425[0]
  i424.m_ReferencePixelsPerUnit = i425[1]
  i424.m_ScaleFactor = i425[2]
  i424.m_ReferenceResolution = new pc.Vec2( i425[3], i425[4] )
  i424.m_ScreenMatchMode = i425[5]
  i424.m_MatchWidthOrHeight = i425[6]
  i424.m_PhysicalUnit = i425[7]
  i424.m_FallbackScreenDPI = i425[8]
  i424.m_DefaultSpriteDPI = i425[9]
  i424.m_DynamicPixelsPerUnit = i425[10]
  i424.m_PresetInfoIsWorld = !!i425[11]
  return i424
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i427 = data
  i426.m_IgnoreReversedGraphics = !!i427[0]
  i426.m_BlockingObjects = i427[1]
  i426.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i427[2] )
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i429 = data
  i428.cullTransparentMesh = !!i429[0]
  return i428
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.UI.Image' )
  var i431 = data
  request.r(i431[0], i431[1], 0, i430, 'm_Sprite')
  i430.m_Type = i431[2]
  i430.m_PreserveAspect = !!i431[3]
  i430.m_FillCenter = !!i431[4]
  i430.m_FillMethod = i431[5]
  i430.m_FillAmount = i431[6]
  i430.m_FillClockwise = !!i431[7]
  i430.m_FillOrigin = i431[8]
  i430.m_UseSpriteMesh = !!i431[9]
  i430.m_PixelsPerUnitMultiplier = i431[10]
  request.r(i431[11], i431[12], 0, i430, 'm_Material')
  i430.m_Maskable = !!i431[13]
  i430.m_Color = new pc.Color(i431[14], i431[15], i431[16], i431[17])
  i430.m_RaycastTarget = !!i431[18]
  i430.m_RaycastPadding = new pc.Vec4( i431[19], i431[20], i431[21], i431[22] )
  return i430
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.UI.Text' )
  var i433 = data
  i432.m_FontData = request.d('UnityEngine.UI.FontData', i433[0], i432.m_FontData)
  i432.m_Text = i433[1]
  request.r(i433[2], i433[3], 0, i432, 'm_Material')
  i432.m_Maskable = !!i433[4]
  i432.m_Color = new pc.Color(i433[5], i433[6], i433[7], i433[8])
  i432.m_RaycastTarget = !!i433[9]
  i432.m_RaycastPadding = new pc.Vec4( i433[10], i433[11], i433[12], i433[13] )
  return i432
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.UI.FontData' )
  var i435 = data
  request.r(i435[0], i435[1], 0, i434, 'm_Font')
  i434.m_FontSize = i435[2]
  i434.m_FontStyle = i435[3]
  i434.m_BestFit = !!i435[4]
  i434.m_MinSize = i435[5]
  i434.m_MaxSize = i435[6]
  i434.m_Alignment = i435[7]
  i434.m_AlignByGeometry = !!i435[8]
  i434.m_RichText = !!i435[9]
  i434.m_HorizontalOverflow = i435[10]
  i434.m_VerticalOverflow = i435[11]
  i434.m_LineSpacing = i435[12]
  return i434
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.UI.Slider' )
  var i437 = data
  request.r(i437[0], i437[1], 0, i436, 'm_FillRect')
  request.r(i437[2], i437[3], 0, i436, 'm_HandleRect')
  i436.m_Direction = i437[4]
  i436.m_MinValue = i437[5]
  i436.m_MaxValue = i437[6]
  i436.m_WholeNumbers = !!i437[7]
  i436.m_Value = i437[8]
  i436.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i437[9], i436.m_OnValueChanged)
  i436.m_Navigation = request.d('UnityEngine.UI.Navigation', i437[10], i436.m_Navigation)
  i436.m_Transition = i437[11]
  i436.m_Colors = request.d('UnityEngine.UI.ColorBlock', i437[12], i436.m_Colors)
  i436.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i437[13], i436.m_SpriteState)
  i436.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i437[14], i436.m_AnimationTriggers)
  i436.m_Interactable = !!i437[15]
  request.r(i437[16], i437[17], 0, i436, 'm_TargetGraphic')
  return i436
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i439 = data
  i438.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i439[0], i438.m_PersistentCalls)
  return i438
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i441 = data
  var i443 = i441[0]
  var i442 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i443.length; i += 1) {
    i442.add(request.d('UnityEngine.Events.PersistentCall', i443[i + 0]));
  }
  i440.m_Calls = i442
  return i440
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i447 = data
  request.r(i447[0], i447[1], 0, i446, 'm_Target')
  i446.m_TargetAssemblyTypeName = i447[2]
  i446.m_MethodName = i447[3]
  i446.m_Mode = i447[4]
  i446.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i447[5], i446.m_Arguments)
  i446.m_CallState = i447[6]
  return i446
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i449 = data
  i448.m_Mode = i449[0]
  i448.m_WrapAround = !!i449[1]
  request.r(i449[2], i449[3], 0, i448, 'm_SelectOnUp')
  request.r(i449[4], i449[5], 0, i448, 'm_SelectOnDown')
  request.r(i449[6], i449[7], 0, i448, 'm_SelectOnLeft')
  request.r(i449[8], i449[9], 0, i448, 'm_SelectOnRight')
  return i448
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i451 = data
  i450.m_NormalColor = new pc.Color(i451[0], i451[1], i451[2], i451[3])
  i450.m_HighlightedColor = new pc.Color(i451[4], i451[5], i451[6], i451[7])
  i450.m_PressedColor = new pc.Color(i451[8], i451[9], i451[10], i451[11])
  i450.m_SelectedColor = new pc.Color(i451[12], i451[13], i451[14], i451[15])
  i450.m_DisabledColor = new pc.Color(i451[16], i451[17], i451[18], i451[19])
  i450.m_ColorMultiplier = i451[20]
  i450.m_FadeDuration = i451[21]
  return i450
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i453 = data
  request.r(i453[0], i453[1], 0, i452, 'm_HighlightedSprite')
  request.r(i453[2], i453[3], 0, i452, 'm_PressedSprite')
  request.r(i453[4], i453[5], 0, i452, 'm_SelectedSprite')
  request.r(i453[6], i453[7], 0, i452, 'm_DisabledSprite')
  return i452
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i455 = data
  i454.m_NormalTrigger = i455[0]
  i454.m_HighlightedTrigger = i455[1]
  i454.m_PressedTrigger = i455[2]
  i454.m_SelectedTrigger = i455[3]
  i454.m_DisabledTrigger = i455[4]
  return i454
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.UI.Mask' )
  var i457 = data
  i456.m_ShowMaskGraphic = !!i457[0]
  return i456
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i458 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i459 = data
  request.r(i459[0], i459[1], 0, i458, 'skeletonDataAsset')
  request.r(i459[2], i459[3], 0, i458, 'additiveMaterial')
  request.r(i459[4], i459[5], 0, i458, 'multiplyMaterial')
  request.r(i459[6], i459[7], 0, i458, 'screenMaterial')
  i458.forceAdditiveMaterial = !!i459[8]
  i458.initialSkinName = i459[9]
  i458.initialFlipX = !!i459[10]
  i458.initialFlipY = !!i459[11]
  i458.startingAnimation = i459[12]
  i458.startingLoop = !!i459[13]
  i458.timeScale = i459[14]
  i458.freeze = !!i459[15]
  i458.layoutScaleMode = i459[16]
  i458.updateWhenInvisible = i459[17]
  i458.allowMultipleCanvasRenderers = !!i459[18]
  var i461 = i459[19]
  var i460 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i461.length; i += 2) {
  request.r(i461[i + 0], i461[i + 1], 1, i460, '')
  }
  i458.canvasRenderers = i460
  i458.enableSeparatorSlots = !!i459[20]
  i458.updateSeparatorPartLocation = !!i459[21]
  i458.updateSeparatorPartScale = !!i459[22]
  i458.disableMeshAssignmentOnOverride = !!i459[23]
  i458.m_SkeletonColor = new pc.Color(i459[24], i459[25], i459[26], i459[27])
  i458.referenceSize = new pc.Vec2( i459[28], i459[29] )
  i458.pivotOffset = new pc.Vec2( i459[30], i459[31] )
  i458.referenceScale = i459[32]
  i458.layoutScale = i459[33]
  i458.rectTransformSize = new pc.Vec2( i459[34], i459[35] )
  i458.editReferenceRect = !!i459[36]
  var i463 = i459[37]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( i463[i + 0] );
  }
  i458.separatorSlotNames = i462
  var i465 = i459[38]
  var i464 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i465.length; i += 2) {
  request.r(i465[i + 0], i465[i + 1], 1, i464, '')
  }
  i458.separatorParts = i464
  i458.physicsPositionInheritanceFactor = new pc.Vec2( i459[39], i459[40] )
  i458.physicsRotationInheritanceFactor = i459[41]
  request.r(i459[42], i459[43], 0, i458, 'physicsMovementRelativeTo')
  i458.meshGenerator = request.d('Spine.Unity.MeshGenerator', i459[44], i458.meshGenerator)
  i458.updateTiming = i459[45]
  i458.unscaledTime = !!i459[46]
  request.r(i459[47], i459[48], 0, i458, 'm_Material')
  i458.m_Maskable = !!i459[49]
  i458.m_Color = new pc.Color(i459[50], i459[51], i459[52], i459[53])
  i458.m_RaycastTarget = !!i459[54]
  i458.m_RaycastPadding = new pc.Vec4( i459[55], i459[56], i459[57], i459[58] )
  return i458
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i472 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i473 = data
  i472.settings = request.d('Spine.Unity.MeshGenerator+Settings', i473[0], i472.settings)
  return i472
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i474 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i475 = data
  i474.useClipping = !!i475[0]
  i474.zSpacing = i475[1]
  i474.tintBlack = !!i475[2]
  i474.canvasGroupCompatible = !!i475[3]
  i474.pmaVertexColors = !!i475[4]
  i474.addNormals = !!i475[5]
  i474.calculateTangents = !!i475[6]
  i474.immutableTriangles = !!i475[7]
  return i474
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i476 = root || request.c( 'AnimationController' )
  var i477 = data
  request.r(i477[0], i477[1], 0, i476, 'skeleton')
  var i479 = i477[2]
  var i478 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i479.length; i += 1) {
    i478.add(request.d('Anim', i479[i + 0]));
  }
  i476.anims = i478
  return i476
}

Deserializers["Anim"] = function (request, data, root) {
  var i482 = root || request.c( 'Anim' )
  var i483 = data
  i482.Key = i483[0]
  var i485 = i483[1]
  var i484 = new (System.Collections.Generic.List$1(Bridge.ns('Sound')))
  for(var i = 0; i < i485.length; i += 1) {
    i484.add(request.d('Sound', i485[i + 0]));
  }
  i482.Sounds = i484
  i482.Loop = !!i483[2]
  i482.Next = !!i483[3]
  i482.NextTime = i483[4]
  i482.DestroyOnComplete = !!i483[5]
  return i482
}

Deserializers["Sound"] = function (request, data, root) {
  var i488 = root || request.c( 'Sound' )
  var i489 = data
  i488.TimeDelay = i489[0]
  request.r(i489[1], i489[2], 0, i488, 'Clip')
  return i488
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i490 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i491 = data
  i490.targetIsSelf = !!i491[0]
  request.r(i491[1], i491[2], 0, i490, 'targetGO')
  i490.tweenTargetIsTargetGO = !!i491[3]
  i490.delay = i491[4]
  i490.duration = i491[5]
  i490.easeType = i491[6]
  i490.easeCurve = new pc.AnimationCurve( { keys_flow: i491[7] } )
  i490.loopType = i491[8]
  i490.loops = i491[9]
  i490.id = i491[10]
  i490.isRelative = !!i491[11]
  i490.isFrom = !!i491[12]
  i490.isIndependentUpdate = !!i491[13]
  i490.autoKill = !!i491[14]
  i490.autoGenerate = !!i491[15]
  i490.isActive = !!i491[16]
  i490.isValid = !!i491[17]
  request.r(i491[18], i491[19], 0, i490, 'target')
  i490.animationType = i491[20]
  i490.targetType = i491[21]
  i490.forcedTargetType = i491[22]
  i490.autoPlay = !!i491[23]
  i490.useTargetAsV3 = !!i491[24]
  i490.endValueFloat = i491[25]
  i490.endValueV3 = new pc.Vec3( i491[26], i491[27], i491[28] )
  i490.endValueV2 = new pc.Vec2( i491[29], i491[30] )
  i490.endValueColor = new pc.Color(i491[31], i491[32], i491[33], i491[34])
  i490.endValueString = i491[35]
  i490.endValueRect = UnityEngine.Rect.MinMaxRect(i491[36], i491[37], i491[38], i491[39])
  request.r(i491[40], i491[41], 0, i490, 'endValueTransform')
  i490.optionalBool0 = !!i491[42]
  i490.optionalBool1 = !!i491[43]
  i490.optionalFloat0 = i491[44]
  i490.optionalInt0 = i491[45]
  i490.optionalRotationMode = i491[46]
  i490.optionalScrambleMode = i491[47]
  i490.optionalShakeRandomnessMode = i491[48]
  i490.optionalString = i491[49]
  i490.updateType = i491[50]
  i490.isSpeedBased = !!i491[51]
  i490.hasOnStart = !!i491[52]
  i490.hasOnPlay = !!i491[53]
  i490.hasOnUpdate = !!i491[54]
  i490.hasOnStepComplete = !!i491[55]
  i490.hasOnComplete = !!i491[56]
  i490.hasOnTweenCreated = !!i491[57]
  i490.hasOnRewind = !!i491[58]
  i490.onStart = request.d('UnityEngine.Events.UnityEvent', i491[59], i490.onStart)
  i490.onPlay = request.d('UnityEngine.Events.UnityEvent', i491[60], i490.onPlay)
  i490.onUpdate = request.d('UnityEngine.Events.UnityEvent', i491[61], i490.onUpdate)
  i490.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i491[62], i490.onStepComplete)
  i490.onComplete = request.d('UnityEngine.Events.UnityEvent', i491[63], i490.onComplete)
  i490.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i491[64], i490.onTweenCreated)
  i490.onRewind = request.d('UnityEngine.Events.UnityEvent', i491[65], i490.onRewind)
  return i490
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i493 = data
  i492.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i493[0], i492.m_PersistentCalls)
  return i492
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.UI.Button' )
  var i495 = data
  i494.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i495[0], i494.m_OnClick)
  i494.m_Navigation = request.d('UnityEngine.UI.Navigation', i495[1], i494.m_Navigation)
  i494.m_Transition = i495[2]
  i494.m_Colors = request.d('UnityEngine.UI.ColorBlock', i495[3], i494.m_Colors)
  i494.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i495[4], i494.m_SpriteState)
  i494.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i495[5], i494.m_AnimationTriggers)
  i494.m_Interactable = !!i495[6]
  request.r(i495[7], i495[8], 0, i494, 'm_TargetGraphic')
  return i494
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i497 = data
  i496.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i497[0], i496.m_PersistentCalls)
  return i496
}

Deserializers["LunaController"] = function (request, data, root) {
  var i498 = root || request.c( 'LunaController' )
  var i499 = data
  i498.TimePlay = i499[0]
  i498.CountPlay = i499[1]
  i498.BGColor = new pc.Color(i499[2], i499[3], i499[4], i499[5])
  i498.GameBGColor = new pc.Color(i499[6], i499[7], i499[8], i499[9])
  i498.LevelTextColor = new pc.Color(i499[10], i499[11], i499[12], i499[13])
  i498.TitleTextColor = new pc.Color(i499[14], i499[15], i499[16], i499[17])
  request.r(i499[18], i499[19], 0, i498, 'time')
  request.r(i499[20], i499[21], 0, i498, 'BGImage')
  request.r(i499[22], i499[23], 0, i498, 'GameBGImage')
  request.r(i499[24], i499[25], 0, i498, 'levelText')
  request.r(i499[26], i499[27], 0, i498, 'titleText')
  request.r(i499[28], i499[29], 0, i498, 'subBG')
  request.r(i499[30], i499[31], 0, i498, 'endCard')
  var i501 = i499[32]
  var i500 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i501.length; i += 2) {
  request.r(i501[i + 0], i501[i + 1], 1, i500, '')
  }
  i498.CTA = i500
  i498.count = i499[33]
  return i498
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i504 = root || request.c( 'LayoutController' )
  var i505 = data
  request.r(i505[0], i505[1], 0, i504, 'CTA')
  i504.hide = !!i505[2]
  return i504
}

Deserializers["AudioController"] = function (request, data, root) {
  var i506 = root || request.c( 'AudioController' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'BGM')
  request.r(i507[2], i507[3], 0, i506, 'musicSource')
  request.r(i507[4], i507[5], 0, i506, 'SFXPool')
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i509 = data
  request.r(i509[0], i509[1], 0, i508, 'clip')
  request.r(i509[2], i509[3], 0, i508, 'outputAudioMixerGroup')
  i508.playOnAwake = !!i509[4]
  i508.loop = !!i509[5]
  i508.time = i509[6]
  i508.volume = i509[7]
  i508.pitch = i509[8]
  i508.enabled = !!i509[9]
  return i508
}

Deserializers["InteractController"] = function (request, data, root) {
  var i510 = root || request.c( 'InteractController' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'canvas')
  request.r(i511[2], i511[3], 0, i510, 'tut')
  return i510
}

Deserializers["GameController"] = function (request, data, root) {
  var i512 = root || request.c( 'GameController' )
  var i513 = data
  i512.OnComplete = request.d('System.Action', i513[0], i512.OnComplete)
  i512.CompleteStep = request.d('System.Action', i513[1], i512.CompleteStep)
  var i515 = i513[2]
  var i514 = new (System.Collections.Generic.List$1(Bridge.ns('SkeletonAnim')))
  for(var i = 0; i < i515.length; i += 1) {
    i514.add(request.d('SkeletonAnim', i515[i + 0]));
  }
  i512.skeletons = i514
  i512.complete = !!i513[3]
  i512.currentStep = i513[4]
  i512.maxStep = i513[5]
  request.r(i513[6], i513[7], 0, i512, 'currentStepText')
  request.r(i513[8], i513[9], 0, i512, 'maxStepText')
  request.r(i513[10], i513[11], 0, i512, 'slider')
  i512.DelayComplete = i513[12]
  return i512
}

Deserializers["System.Action"] = function (request, data, root) {
  var i516 = root || request.c( 'System.Action' )
  var i517 = data
  return i516
}

Deserializers["SkeletonAnim"] = function (request, data, root) {
  var i520 = root || request.c( 'SkeletonAnim' )
  var i521 = data
  request.r(i521[0], i521[1], 0, i520, 'Area')
  request.r(i521[2], i521[3], 0, i520, 'Anim')
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i523 = data
  i522.ambientIntensity = i523[0]
  i522.reflectionIntensity = i523[1]
  i522.ambientMode = i523[2]
  i522.ambientLight = new pc.Color(i523[3], i523[4], i523[5], i523[6])
  i522.ambientSkyColor = new pc.Color(i523[7], i523[8], i523[9], i523[10])
  i522.ambientGroundColor = new pc.Color(i523[11], i523[12], i523[13], i523[14])
  i522.ambientEquatorColor = new pc.Color(i523[15], i523[16], i523[17], i523[18])
  i522.fogColor = new pc.Color(i523[19], i523[20], i523[21], i523[22])
  i522.fogEndDistance = i523[23]
  i522.fogStartDistance = i523[24]
  i522.fogDensity = i523[25]
  i522.fog = !!i523[26]
  request.r(i523[27], i523[28], 0, i522, 'skybox')
  i522.fogMode = i523[29]
  var i525 = i523[30]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i525[i + 0]) );
  }
  i522.lightmaps = i524
  i522.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i523[31], i522.lightProbes)
  i522.lightmapsMode = i523[32]
  i522.mixedBakeMode = i523[33]
  i522.environmentLightingMode = i523[34]
  i522.ambientProbe = new pc.SphericalHarmonicsL2(i523[35])
  request.r(i523[36], i523[37], 0, i522, 'customReflection')
  request.r(i523[38], i523[39], 0, i522, 'defaultReflection')
  i522.defaultReflectionMode = i523[40]
  i522.defaultReflectionResolution = i523[41]
  i522.sunLightObjectId = i523[42]
  i522.pixelLightCount = i523[43]
  i522.defaultReflectionHDR = !!i523[44]
  i522.hasLightDataAsset = !!i523[45]
  i522.hasManualGenerate = !!i523[46]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i529 = data
  request.r(i529[0], i529[1], 0, i528, 'lightmapColor')
  request.r(i529[2], i529[3], 0, i528, 'lightmapDirection')
  request.r(i529[4], i529[5], 0, i528, 'shadowMask')
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i530 = root || new UnityEngine.LightProbes()
  var i531 = data
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i539 = data
  var i541 = i539[0]
  var i540 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i541.length; i += 1) {
    i540.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i541[i + 0]));
  }
  i538.ShaderCompilationErrors = i540
  i538.name = i539[1]
  i538.guid = i539[2]
  var i543 = i539[3]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( i543[i + 0] );
  }
  i538.shaderDefinedKeywords = i542
  var i545 = i539[4]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i545[i + 0]) );
  }
  i538.passes = i544
  var i547 = i539[5]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i547[i + 0]) );
  }
  i538.usePasses = i546
  var i549 = i539[6]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i549[i + 0]) );
  }
  i538.defaultParameterValues = i548
  request.r(i539[7], i539[8], 0, i538, 'unityFallbackShader')
  i538.readDepth = !!i539[9]
  i538.hasDepthOnlyPass = !!i539[10]
  i538.isCreatedByShaderGraph = !!i539[11]
  i538.disableBatching = !!i539[12]
  i538.compiled = !!i539[13]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i553 = data
  i552.shaderName = i553[0]
  i552.errorMessage = i553[1]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i556 = root || new pc.UnityShaderPass()
  var i557 = data
  i556.id = i557[0]
  i556.subShaderIndex = i557[1]
  i556.name = i557[2]
  i556.passType = i557[3]
  i556.grabPassTextureName = i557[4]
  i556.usePass = !!i557[5]
  i556.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[6], i556.zTest)
  i556.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[7], i556.zWrite)
  i556.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[8], i556.culling)
  i556.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i557[9], i556.blending)
  i556.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i557[10], i556.alphaBlending)
  i556.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[11], i556.colorWriteMask)
  i556.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[12], i556.offsetUnits)
  i556.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[13], i556.offsetFactor)
  i556.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[14], i556.stencilRef)
  i556.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[15], i556.stencilReadMask)
  i556.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[16], i556.stencilWriteMask)
  i556.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i557[17], i556.stencilOp)
  i556.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i557[18], i556.stencilOpFront)
  i556.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i557[19], i556.stencilOpBack)
  var i559 = i557[20]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i559[i + 0]) );
  }
  i556.tags = i558
  var i561 = i557[21]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( i561[i + 0] );
  }
  i556.passDefinedKeywords = i560
  var i563 = i557[22]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i563[i + 0]) );
  }
  i556.passDefinedKeywordGroups = i562
  var i565 = i557[23]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i565[i + 0]) );
  }
  i556.variants = i564
  var i567 = i557[24]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i567[i + 0]) );
  }
  i556.excludedVariants = i566
  i556.hasDepthReader = !!i557[25]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i569 = data
  i568.val = i569[0]
  i568.name = i569[1]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i571 = data
  i570.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[0], i570.src)
  i570.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[1], i570.dst)
  i570.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[2], i570.op)
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i573 = data
  i572.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[0], i572.pass)
  i572.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[1], i572.fail)
  i572.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[2], i572.zFail)
  i572.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[3], i572.comp)
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i577 = data
  i576.name = i577[0]
  i576.value = i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i581 = data
  var i583 = i581[0]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( i583[i + 0] );
  }
  i580.keywords = i582
  i580.hasDiscard = !!i581[1]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i587 = data
  i586.passId = i587[0]
  i586.subShaderIndex = i587[1]
  var i589 = i587[2]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( i589[i + 0] );
  }
  i586.keywords = i588
  i586.vertexProgram = i587[3]
  i586.fragmentProgram = i587[4]
  i586.exportedForWebGl2 = !!i587[5]
  i586.readDepth = !!i587[6]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'shader')
  i592.pass = i593[2]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i597 = data
  i596.name = i597[0]
  i596.type = i597[1]
  i596.value = new pc.Vec4( i597[2], i597[3], i597[4], i597[5] )
  i596.textureValue = i597[6]
  i596.shaderPropertyFlag = i597[7]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i599 = data
  i598.name = i599[0]
  request.r(i599[1], i599[2], 0, i598, 'texture')
  i598.aabb = i599[3]
  i598.vertices = i599[4]
  i598.triangles = i599[5]
  i598.textureRect = UnityEngine.Rect.MinMaxRect(i599[6], i599[7], i599[8], i599[9])
  i598.packedRect = UnityEngine.Rect.MinMaxRect(i599[10], i599[11], i599[12], i599[13])
  i598.border = new pc.Vec4( i599[14], i599[15], i599[16], i599[17] )
  i598.transparency = i599[18]
  i598.bounds = i599[19]
  i598.pixelsPerUnit = i599[20]
  i598.textureWidth = i599[21]
  i598.textureHeight = i599[22]
  i598.nativeSize = new pc.Vec2( i599[23], i599[24] )
  i598.pivot = new pc.Vec2( i599[25], i599[26] )
  i598.textureRectOffset = new pc.Vec2( i599[27], i599[28] )
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i601 = data
  i600.name = i601[0]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i603 = data
  i602.name = i603[0]
  i602.ascent = i603[1]
  i602.originalLineHeight = i603[2]
  i602.fontSize = i603[3]
  var i605 = i603[4]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i605[i + 0]) );
  }
  i602.characterInfo = i604
  request.r(i603[5], i603[6], 0, i602, 'texture')
  i602.originalFontSize = i603[7]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i609 = data
  i608.index = i609[0]
  i608.advance = i609[1]
  i608.bearing = i609[2]
  i608.glyphWidth = i609[3]
  i608.glyphHeight = i609[4]
  i608.minX = i609[5]
  i608.maxX = i609[6]
  i608.minY = i609[7]
  i608.maxY = i609[8]
  i608.uvBottomLeftX = i609[9]
  i608.uvBottomLeftY = i609[10]
  i608.uvBottomRightX = i609[11]
  i608.uvBottomRightY = i609[12]
  i608.uvTopLeftX = i609[13]
  i608.uvTopLeftY = i609[14]
  i608.uvTopRightX = i609[15]
  i608.uvTopRightY = i609[16]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i611 = data
  i610.name = i611[0]
  i610.bytes64 = i611[1]
  i610.data = i611[2]
  return i610
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i612 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i613 = data
  var i615 = i613[0]
  var i614 = []
  for(var i = 0; i < i615.length; i += 2) {
  request.r(i615[i + 0], i615[i + 1], 2, i614, '')
  }
  i612.atlasAssets = i614
  i612.scale = i613[1]
  request.r(i613[2], i613[3], 0, i612, 'skeletonJSON')
  i612.isUpgradingBlendModeMaterials = !!i613[4]
  i612.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i613[5], i612.blendModeMaterials)
  var i617 = i613[6]
  var i616 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 1, i616, '')
  }
  i612.skeletonDataModifiers = i616
  var i619 = i613[7]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( i619[i + 0] );
  }
  i612.fromAnimation = i618
  var i621 = i613[8]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( i621[i + 0] );
  }
  i612.toAnimation = i620
  i612.duration = i613[9]
  i612.defaultMix = i613[10]
  request.r(i613[11], i613[12], 0, i612, 'controller')
  return i612
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i624 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i625 = data
  i624.applyAdditiveMaterial = !!i625[0]
  var i627 = i625[1]
  var i626 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i627.length; i += 1) {
    i626.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i627[i + 0]));
  }
  i624.additiveMaterials = i626
  var i629 = i625[2]
  var i628 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i629.length; i += 1) {
    i628.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i629[i + 0]));
  }
  i624.multiplyMaterials = i628
  var i631 = i625[3]
  var i630 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i631.length; i += 1) {
    i630.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i631[i + 0]));
  }
  i624.screenMaterials = i630
  i624.requiresBlendModeMaterials = !!i625[4]
  return i624
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i634 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i635 = data
  i634.pageName = i635[0]
  request.r(i635[1], i635[2], 0, i634, 'material')
  return i634
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i638 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'atlasFile')
  var i641 = i639[2]
  var i640 = []
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 2, i640, '')
  }
  i638.materials = i640
  i638.textureLoadingMode = i639[3]
  request.r(i639[4], i639[5], 0, i638, 'onDemandTextureLoader')
  return i638
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i644 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i645 = data
  i644.useSafeMode = !!i645[0]
  i644.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i645[1], i644.safeModeOptions)
  i644.timeScale = i645[2]
  i644.unscaledTimeScale = i645[3]
  i644.useSmoothDeltaTime = !!i645[4]
  i644.maxSmoothUnscaledTime = i645[5]
  i644.rewindCallbackMode = i645[6]
  i644.showUnityEditorReport = !!i645[7]
  i644.logBehaviour = i645[8]
  i644.drawGizmos = !!i645[9]
  i644.defaultRecyclable = !!i645[10]
  i644.defaultAutoPlay = i645[11]
  i644.defaultUpdateType = i645[12]
  i644.defaultTimeScaleIndependent = !!i645[13]
  i644.defaultEaseType = i645[14]
  i644.defaultEaseOvershootOrAmplitude = i645[15]
  i644.defaultEasePeriod = i645[16]
  i644.defaultAutoKill = !!i645[17]
  i644.defaultLoopType = i645[18]
  i644.debugMode = !!i645[19]
  i644.debugStoreTargetId = !!i645[20]
  i644.showPreviewPanel = !!i645[21]
  i644.storeSettingsLocation = i645[22]
  i644.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i645[23], i644.modules)
  i644.createASMDEF = !!i645[24]
  i644.showPlayingTweens = !!i645[25]
  i644.showPausedTweens = !!i645[26]
  return i644
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i646 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i647 = data
  i646.logBehaviour = i647[0]
  i646.nestedTweenFailureBehaviour = i647[1]
  return i646
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i648 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i649 = data
  i648.showPanel = !!i649[0]
  i648.audioEnabled = !!i649[1]
  i648.physicsEnabled = !!i649[2]
  i648.physics2DEnabled = !!i649[3]
  i648.spriteEnabled = !!i649[4]
  i648.uiEnabled = !!i649[5]
  i648.textMeshProEnabled = !!i649[6]
  i648.tk2DEnabled = !!i649[7]
  i648.deAudioEnabled = !!i649[8]
  i648.deUnityExtendedEnabled = !!i649[9]
  i648.epoOutlineEnabled = !!i649[10]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i651 = data
  var i653 = i651[0]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i653[i + 0]) );
  }
  i650.files = i652
  i650.componentToPrefabIds = i651[1]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i657 = data
  i656.path = i657[0]
  request.r(i657[1], i657[2], 0, i656, 'unityObject')
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i659 = data
  var i661 = i659[0]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i661[i + 0]) );
  }
  i658.scriptsExecutionOrder = i660
  var i663 = i659[1]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i663[i + 0]) );
  }
  i658.sortingLayers = i662
  var i665 = i659[2]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i665[i + 0]) );
  }
  i658.cullingLayers = i664
  i658.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i659[3], i658.timeSettings)
  i658.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i659[4], i658.physicsSettings)
  i658.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i659[5], i658.physics2DSettings)
  i658.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i659[6], i658.qualitySettings)
  i658.enableRealtimeShadows = !!i659[7]
  i658.enableAutoInstancing = !!i659[8]
  i658.enableStaticBatching = !!i659[9]
  i658.enableDynamicBatching = !!i659[10]
  i658.usePreservativeDynamicBatching = !!i659[11]
  i658.lightmapEncodingQuality = i659[12]
  i658.desiredColorSpace = i659[13]
  var i667 = i659[14]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( i667[i + 0] );
  }
  i658.allTags = i666
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i671 = data
  i670.name = i671[0]
  i670.value = i671[1]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i675 = data
  i674.id = i675[0]
  i674.name = i675[1]
  i674.value = i675[2]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i679 = data
  i678.id = i679[0]
  i678.name = i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i681 = data
  i680.fixedDeltaTime = i681[0]
  i680.maximumDeltaTime = i681[1]
  i680.timeScale = i681[2]
  i680.maximumParticleTimestep = i681[3]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i683 = data
  i682.gravity = new pc.Vec3( i683[0], i683[1], i683[2] )
  i682.defaultSolverIterations = i683[3]
  i682.bounceThreshold = i683[4]
  i682.autoSyncTransforms = !!i683[5]
  i682.autoSimulation = !!i683[6]
  var i685 = i683[7]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i685[i + 0]) );
  }
  i682.collisionMatrix = i684
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i689 = data
  i688.enabled = !!i689[0]
  i688.layerId = i689[1]
  i688.otherLayerId = i689[2]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'material')
  i690.gravity = new pc.Vec2( i691[2], i691[3] )
  i690.positionIterations = i691[4]
  i690.velocityIterations = i691[5]
  i690.velocityThreshold = i691[6]
  i690.maxLinearCorrection = i691[7]
  i690.maxAngularCorrection = i691[8]
  i690.maxTranslationSpeed = i691[9]
  i690.maxRotationSpeed = i691[10]
  i690.baumgarteScale = i691[11]
  i690.baumgarteTOIScale = i691[12]
  i690.timeToSleep = i691[13]
  i690.linearSleepTolerance = i691[14]
  i690.angularSleepTolerance = i691[15]
  i690.defaultContactOffset = i691[16]
  i690.autoSimulation = !!i691[17]
  i690.queriesHitTriggers = !!i691[18]
  i690.queriesStartInColliders = !!i691[19]
  i690.callbacksOnDisable = !!i691[20]
  i690.reuseCollisionCallbacks = !!i691[21]
  i690.autoSyncTransforms = !!i691[22]
  var i693 = i691[23]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i693[i + 0]) );
  }
  i690.collisionMatrix = i692
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i697 = data
  i696.enabled = !!i697[0]
  i696.layerId = i697[1]
  i696.otherLayerId = i697[2]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i699 = data
  var i701 = i699[0]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i701[i + 0]) );
  }
  i698.qualityLevels = i700
  var i703 = i699[1]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( i703[i + 0] );
  }
  i698.names = i702
  i698.shadows = i699[2]
  i698.anisotropicFiltering = i699[3]
  i698.antiAliasing = i699[4]
  i698.lodBias = i699[5]
  i698.shadowCascades = i699[6]
  i698.shadowDistance = i699[7]
  i698.shadowmaskMode = i699[8]
  i698.shadowProjection = i699[9]
  i698.shadowResolution = i699[10]
  i698.softParticles = !!i699[11]
  i698.softVegetation = !!i699[12]
  i698.activeColorSpace = i699[13]
  i698.desiredColorSpace = i699[14]
  i698.masterTextureLimit = i699[15]
  i698.maxQueuedFrames = i699[16]
  i698.particleRaycastBudget = i699[17]
  i698.pixelLightCount = i699[18]
  i698.realtimeReflectionProbes = !!i699[19]
  i698.shadowCascade2Split = i699[20]
  i698.shadowCascade4Split = new pc.Vec3( i699[21], i699[22], i699[23] )
  i698.streamingMipmapsActive = !!i699[24]
  i698.vSyncCount = i699[25]
  i698.asyncUploadBufferSize = i699[26]
  i698.asyncUploadTimeSlice = i699[27]
  i698.billboardsFaceCameraPosition = !!i699[28]
  i698.shadowNearPlaneOffset = i699[29]
  i698.streamingMipmapsMemoryBudget = i699[30]
  i698.maximumLODLevel = i699[31]
  i698.streamingMipmapsAddAllCameras = !!i699[32]
  i698.streamingMipmapsMaxLevelReduction = i699[33]
  i698.streamingMipmapsRenderersPerFrame = i699[34]
  i698.resolutionScalingFixedDPIFactor = i699[35]
  i698.streamingMipmapsMaxFileIORequests = i699[36]
  i698.currentQualityLevel = i699[37]
  return i698
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'm_ObjectArgument')
  i706.m_ObjectArgumentAssemblyTypeName = i707[2]
  i706.m_IntArgument = i707[3]
  i706.m_FloatArgument = i707[4]
  i706.m_StringArgument = i707[5]
  i706.m_BoolArgument = !!i707[6]
  return i706
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"37":[38],"39":[38],"40":[38],"41":[38],"42":[38],"43":[38],"44":[45],"46":[2],"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[55],"63":[55],"64":[55],"65":[55],"66":[55],"67":[55],"68":[2],"69":[70],"71":[72],"73":[72],"8":[7],"22":[18],"74":[75],"76":[7],"77":[11,7],"78":[70],"18":[11,7],"79":[80,70],"81":[70,82],"83":[70],"84":[48],"85":[55],"86":[75],"87":[88],"89":[90],"91":[2],"92":[93],"94":[7],"95":[11,7],"96":[70],"97":[11,7],"98":[7],"99":[7],"100":[70,7],"101":[7,11],"102":[103],"104":[103],"105":[103],"106":[7],"107":[7],"10":[8],"12":[11,7],"108":[7],"9":[8],"109":[7],"110":[7],"111":[7],"112":[7],"113":[7],"114":[7],"115":[7],"17":[7],"116":[7],"117":[11,7],"118":[7],"119":[7],"120":[7],"16":[7],"13":[11,7],"121":[7],"122":[5],"123":[5],"6":[5],"124":[5],"125":[2],"126":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.Slider","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","UnityEngine.AudioClip","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","LunaController","LayoutController","UnityEngine.GameObject","AudioController","UnityEngine.AudioSource","UnityEngine.Transform","InteractController","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "08/04/2026 07:03:05";

Deserializers.lunaDaysRunning = "0.8";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BMTP_V07_NgocBTU_TamNTM";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1935";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4824";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BMTP_Luna";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "a1e20e7a-4358-4614-a975-cae56222efe6";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

