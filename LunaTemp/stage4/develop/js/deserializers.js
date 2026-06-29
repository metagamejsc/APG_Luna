var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i358 = root || request.c( 'UnityEngine.JointSpring' )
  var i359 = data
  i358.spring = i359[0]
  i358.damper = i359[1]
  i358.targetPosition = i359[2]
  return i358
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i360 = root || request.c( 'UnityEngine.JointMotor' )
  var i361 = data
  i360.m_TargetVelocity = i361[0]
  i360.m_Force = i361[1]
  i360.m_FreeSpin = i361[2]
  return i360
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i362 = root || request.c( 'UnityEngine.JointLimits' )
  var i363 = data
  i362.m_Min = i363[0]
  i362.m_Max = i363[1]
  i362.m_Bounciness = i363[2]
  i362.m_BounceMinVelocity = i363[3]
  i362.m_ContactDistance = i363[4]
  i362.minBounce = i363[5]
  i362.maxBounce = i363[6]
  return i362
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i364 = root || request.c( 'UnityEngine.JointDrive' )
  var i365 = data
  i364.m_PositionSpring = i365[0]
  i364.m_PositionDamper = i365[1]
  i364.m_MaximumForce = i365[2]
  i364.m_UseAcceleration = i365[3]
  return i364
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i366 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i367 = data
  i366.m_Spring = i367[0]
  i366.m_Damper = i367[1]
  return i366
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i369 = data
  i368.m_Limit = i369[0]
  i368.m_Bounciness = i369[1]
  i368.m_ContactDistance = i369[2]
  return i368
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i370 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i371 = data
  i370.m_ExtremumSlip = i371[0]
  i370.m_ExtremumValue = i371[1]
  i370.m_AsymptoteSlip = i371[2]
  i370.m_AsymptoteValue = i371[3]
  i370.m_Stiffness = i371[4]
  return i370
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i373 = data
  i372.m_LowerAngle = i373[0]
  i372.m_UpperAngle = i373[1]
  return i372
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i375 = data
  i374.m_MotorSpeed = i375[0]
  i374.m_MaximumMotorTorque = i375[1]
  return i374
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i376 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i377 = data
  i376.m_DampingRatio = i377[0]
  i376.m_Frequency = i377[1]
  i376.m_Angle = i377[2]
  return i376
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i378 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i379 = data
  i378.m_LowerTranslation = i379[0]
  i378.m_UpperTranslation = i379[1]
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i381 = data
  i380.name = i381[0]
  i380.width = i381[1]
  i380.height = i381[2]
  i380.mipmapCount = i381[3]
  i380.anisoLevel = i381[4]
  i380.filterMode = i381[5]
  i380.hdr = !!i381[6]
  i380.format = i381[7]
  i380.wrapMode = i381[8]
  i380.alphaIsTransparency = !!i381[9]
  i380.alphaSource = i381[10]
  i380.graphicsFormat = i381[11]
  i380.sRGBTexture = !!i381[12]
  i380.desiredColorSpace = i381[13]
  i380.wrapU = i381[14]
  i380.wrapV = i381[15]
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i382 = root || new pc.UnityMaterial()
  var i383 = data
  i382.name = i383[0]
  request.r(i383[1], i383[2], 0, i382, 'shader')
  i382.renderQueue = i383[3]
  i382.enableInstancing = !!i383[4]
  var i385 = i383[5]
  var i384 = []
  for(var i = 0; i < i385.length; i += 1) {
    i384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i385[i + 0]) );
  }
  i382.floatParameters = i384
  var i387 = i383[6]
  var i386 = []
  for(var i = 0; i < i387.length; i += 1) {
    i386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i387[i + 0]) );
  }
  i382.colorParameters = i386
  var i389 = i383[7]
  var i388 = []
  for(var i = 0; i < i389.length; i += 1) {
    i388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i389[i + 0]) );
  }
  i382.vectorParameters = i388
  var i391 = i383[8]
  var i390 = []
  for(var i = 0; i < i391.length; i += 1) {
    i390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i391[i + 0]) );
  }
  i382.textureParameters = i390
  var i393 = i383[9]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i393[i + 0]) );
  }
  i382.materialFlags = i392
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i397 = data
  i396.name = i397[0]
  i396.value = i397[1]
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i401 = data
  i400.name = i401[0]
  i400.value = new pc.Color(i401[1], i401[2], i401[3], i401[4])
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i405 = data
  i404.name = i405[0]
  i404.value = new pc.Vec4( i405[1], i405[2], i405[3], i405[4] )
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i409 = data
  i408.name = i409[0]
  request.r(i409[1], i409[2], 0, i408, 'value')
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i413 = data
  i412.name = i413[0]
  i412.enabled = !!i413[1]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i415 = data
  i414.name = i415[0]
  i414.index = i415[1]
  i414.startup = !!i415[2]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i417 = data
  i416.position = new pc.Vec3( i417[0], i417[1], i417[2] )
  i416.scale = new pc.Vec3( i417[3], i417[4], i417[5] )
  i416.rotation = new pc.Quat(i417[6], i417[7], i417[8], i417[9])
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i419 = data
  i418.aspect = i419[0]
  i418.orthographic = !!i419[1]
  i418.orthographicSize = i419[2]
  i418.backgroundColor = new pc.Color(i419[3], i419[4], i419[5], i419[6])
  i418.nearClipPlane = i419[7]
  i418.farClipPlane = i419[8]
  i418.fieldOfView = i419[9]
  i418.depth = i419[10]
  i418.clearFlags = i419[11]
  i418.cullingMask = i419[12]
  i418.rect = i419[13]
  request.r(i419[14], i419[15], 0, i418, 'targetTexture')
  i418.usePhysicalProperties = !!i419[16]
  i418.focalLength = i419[17]
  i418.sensorSize = new pc.Vec2( i419[18], i419[19] )
  i418.lensShift = new pc.Vec2( i419[20], i419[21] )
  i418.gateFit = i419[22]
  i418.commandBufferCount = i419[23]
  i418.cameraType = i419[24]
  i418.enabled = !!i419[25]
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i421 = data
  i420.name = i421[0]
  i420.tagId = i421[1]
  i420.enabled = !!i421[2]
  i420.isStatic = !!i421[3]
  i420.layer = i421[4]
  return i420
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i423 = data
  request.r(i423[0], i423[1], 0, i422, 'm_FirstSelected')
  i422.m_sendNavigationEvents = !!i423[2]
  i422.m_DragThreshold = i423[3]
  return i422
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i425 = data
  i424.m_HorizontalAxis = i425[0]
  i424.m_VerticalAxis = i425[1]
  i424.m_SubmitButton = i425[2]
  i424.m_CancelButton = i425[3]
  i424.m_InputActionsPerSecond = i425[4]
  i424.m_RepeatDelay = i425[5]
  i424.m_ForceModuleActive = !!i425[6]
  i424.m_SendPointerHoverToParent = !!i425[7]
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i427 = data
  i426.pivot = new pc.Vec2( i427[0], i427[1] )
  i426.anchorMin = new pc.Vec2( i427[2], i427[3] )
  i426.anchorMax = new pc.Vec2( i427[4], i427[5] )
  i426.sizeDelta = new pc.Vec2( i427[6], i427[7] )
  i426.anchoredPosition3D = new pc.Vec3( i427[8], i427[9], i427[10] )
  i426.rotation = new pc.Quat(i427[11], i427[12], i427[13], i427[14])
  i426.scale = new pc.Vec3( i427[15], i427[16], i427[17] )
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i429 = data
  i428.planeDistance = i429[0]
  i428.referencePixelsPerUnit = i429[1]
  i428.isFallbackOverlay = !!i429[2]
  i428.renderMode = i429[3]
  i428.renderOrder = i429[4]
  i428.sortingLayerName = i429[5]
  i428.sortingOrder = i429[6]
  i428.scaleFactor = i429[7]
  request.r(i429[8], i429[9], 0, i428, 'worldCamera')
  i428.overrideSorting = !!i429[10]
  i428.pixelPerfect = !!i429[11]
  i428.targetDisplay = i429[12]
  i428.overridePixelPerfect = !!i429[13]
  i428.enabled = !!i429[14]
  return i428
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i431 = data
  i430.m_UiScaleMode = i431[0]
  i430.m_ReferencePixelsPerUnit = i431[1]
  i430.m_ScaleFactor = i431[2]
  i430.m_ReferenceResolution = new pc.Vec2( i431[3], i431[4] )
  i430.m_ScreenMatchMode = i431[5]
  i430.m_MatchWidthOrHeight = i431[6]
  i430.m_PhysicalUnit = i431[7]
  i430.m_FallbackScreenDPI = i431[8]
  i430.m_DefaultSpriteDPI = i431[9]
  i430.m_DynamicPixelsPerUnit = i431[10]
  i430.m_PresetInfoIsWorld = !!i431[11]
  return i430
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i433 = data
  i432.m_IgnoreReversedGraphics = !!i433[0]
  i432.m_BlockingObjects = i433[1]
  i432.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i433[2] )
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i435 = data
  i434.cullTransparentMesh = !!i435[0]
  return i434
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.UI.Image' )
  var i437 = data
  request.r(i437[0], i437[1], 0, i436, 'm_Sprite')
  i436.m_Type = i437[2]
  i436.m_PreserveAspect = !!i437[3]
  i436.m_FillCenter = !!i437[4]
  i436.m_FillMethod = i437[5]
  i436.m_FillAmount = i437[6]
  i436.m_FillClockwise = !!i437[7]
  i436.m_FillOrigin = i437[8]
  i436.m_UseSpriteMesh = !!i437[9]
  i436.m_PixelsPerUnitMultiplier = i437[10]
  i436.m_Maskable = !!i437[11]
  request.r(i437[12], i437[13], 0, i436, 'm_Material')
  i436.m_Color = new pc.Color(i437[14], i437[15], i437[16], i437[17])
  i436.m_RaycastTarget = !!i437[18]
  i436.m_RaycastPadding = new pc.Vec4( i437[19], i437[20], i437[21], i437[22] )
  return i436
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.UI.Mask' )
  var i439 = data
  i438.m_ShowMaskGraphic = !!i439[0]
  return i438
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i440 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i441 = data
  request.r(i441[0], i441[1], 0, i440, 'skeletonDataAsset')
  request.r(i441[2], i441[3], 0, i440, 'additiveMaterial')
  request.r(i441[4], i441[5], 0, i440, 'multiplyMaterial')
  request.r(i441[6], i441[7], 0, i440, 'screenMaterial')
  i440.initialSkinName = i441[8]
  i440.initialFlipX = !!i441[9]
  i440.initialFlipY = !!i441[10]
  i440.startingAnimation = i441[11]
  i440.startingLoop = !!i441[12]
  i440.timeScale = i441[13]
  i440.freeze = !!i441[14]
  i440.layoutScaleMode = i441[15]
  i440.updateWhenInvisible = i441[16]
  i440.allowMultipleCanvasRenderers = !!i441[17]
  var i443 = i441[18]
  var i442 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i443.length; i += 2) {
  request.r(i443[i + 0], i443[i + 1], 1, i442, '')
  }
  i440.canvasRenderers = i442
  i440.enableSeparatorSlots = !!i441[19]
  i440.updateSeparatorPartLocation = !!i441[20]
  i440.updateSeparatorPartScale = !!i441[21]
  i440.disableMeshAssignmentOnOverride = !!i441[22]
  i440.referenceSize = new pc.Vec2( i441[23], i441[24] )
  i440.referenceScale = i441[25]
  i440.rectTransformSize = new pc.Vec2( i441[26], i441[27] )
  i440.editReferenceRect = !!i441[28]
  var i445 = i441[29]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( i445[i + 0] );
  }
  i440.separatorSlotNames = i444
  var i447 = i441[30]
  var i446 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i447.length; i += 2) {
  request.r(i447[i + 0], i447[i + 1], 1, i446, '')
  }
  i440.separatorParts = i446
  i440.meshGenerator = request.d('Spine.Unity.MeshGenerator', i441[31], i440.meshGenerator)
  i440.updateTiming = i441[32]
  i440.unscaledTime = !!i441[33]
  i440.m_Maskable = !!i441[34]
  request.r(i441[35], i441[36], 0, i440, 'm_Material')
  i440.m_Color = new pc.Color(i441[37], i441[38], i441[39], i441[40])
  i440.m_RaycastTarget = !!i441[41]
  i440.m_RaycastPadding = new pc.Vec4( i441[42], i441[43], i441[44], i441[45] )
  return i440
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i454 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i455 = data
  i454.settings = request.d('Spine.Unity.MeshGenerator+Settings', i455[0], i454.settings)
  return i454
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i456 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i457 = data
  i456.useClipping = !!i457[0]
  i456.zSpacing = i457[1]
  i456.pmaVertexColors = !!i457[2]
  i456.tintBlack = !!i457[3]
  i456.canvasGroupTintBlack = !!i457[4]
  i456.calculateTangents = !!i457[5]
  i456.addNormals = !!i457[6]
  i456.immutableTriangles = !!i457[7]
  return i456
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i458 = root || request.c( 'AnimationController' )
  var i459 = data
  var i461 = i459[0]
  var i460 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i461.length; i += 1) {
    i460.add(request.d('Anim', i461[i + 0]));
  }
  i458.anims = i460
  i458.currentIndex = i459[1]
  return i458
}

Deserializers["Anim"] = function (request, data, root) {
  var i464 = root || request.c( 'Anim' )
  var i465 = data
  i464.Key = i465[0]
  var i467 = i465[1]
  var i466 = new (System.Collections.Generic.List$1(Bridge.ns('Sound')))
  for(var i = 0; i < i467.length; i += 1) {
    i466.add(request.d('Sound', i467[i + 0]));
  }
  i464.Sounds = i466
  i464.Loop = !!i465[2]
  i464.Next = !!i465[3]
  return i464
}

Deserializers["Sound"] = function (request, data, root) {
  var i470 = root || request.c( 'Sound' )
  var i471 = data
  i470.TimeDelay = i471[0]
  request.r(i471[1], i471[2], 0, i470, 'Clip')
  return i470
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.UI.Text' )
  var i473 = data
  i472.m_FontData = request.d('UnityEngine.UI.FontData', i473[0], i472.m_FontData)
  i472.m_Text = i473[1]
  i472.m_Maskable = !!i473[2]
  request.r(i473[3], i473[4], 0, i472, 'm_Material')
  i472.m_Color = new pc.Color(i473[5], i473[6], i473[7], i473[8])
  i472.m_RaycastTarget = !!i473[9]
  i472.m_RaycastPadding = new pc.Vec4( i473[10], i473[11], i473[12], i473[13] )
  return i472
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.UI.FontData' )
  var i475 = data
  request.r(i475[0], i475[1], 0, i474, 'm_Font')
  i474.m_FontSize = i475[2]
  i474.m_FontStyle = i475[3]
  i474.m_BestFit = !!i475[4]
  i474.m_MinSize = i475[5]
  i474.m_MaxSize = i475[6]
  i474.m_Alignment = i475[7]
  i474.m_AlignByGeometry = !!i475[8]
  i474.m_RichText = !!i475[9]
  i474.m_HorizontalOverflow = i475[10]
  i474.m_VerticalOverflow = i475[11]
  i474.m_LineSpacing = i475[12]
  return i474
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.UI.Slider' )
  var i477 = data
  request.r(i477[0], i477[1], 0, i476, 'm_FillRect')
  request.r(i477[2], i477[3], 0, i476, 'm_HandleRect')
  i476.m_Direction = i477[4]
  i476.m_MinValue = i477[5]
  i476.m_MaxValue = i477[6]
  i476.m_WholeNumbers = !!i477[7]
  i476.m_Value = i477[8]
  i476.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i477[9], i476.m_OnValueChanged)
  i476.m_Navigation = request.d('UnityEngine.UI.Navigation', i477[10], i476.m_Navigation)
  i476.m_Transition = i477[11]
  i476.m_Colors = request.d('UnityEngine.UI.ColorBlock', i477[12], i476.m_Colors)
  i476.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i477[13], i476.m_SpriteState)
  i476.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i477[14], i476.m_AnimationTriggers)
  i476.m_Interactable = !!i477[15]
  request.r(i477[16], i477[17], 0, i476, 'm_TargetGraphic')
  return i476
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i479 = data
  i478.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i479[0], i478.m_PersistentCalls)
  return i478
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i481 = data
  var i483 = i481[0]
  var i482 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i483.length; i += 1) {
    i482.add(request.d('UnityEngine.Events.PersistentCall', i483[i + 0]));
  }
  i480.m_Calls = i482
  return i480
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i487 = data
  request.r(i487[0], i487[1], 0, i486, 'm_Target')
  i486.m_TargetAssemblyTypeName = i487[2]
  i486.m_MethodName = i487[3]
  i486.m_Mode = i487[4]
  i486.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i487[5], i486.m_Arguments)
  i486.m_CallState = i487[6]
  return i486
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i489 = data
  i488.m_Mode = i489[0]
  i488.m_WrapAround = !!i489[1]
  request.r(i489[2], i489[3], 0, i488, 'm_SelectOnUp')
  request.r(i489[4], i489[5], 0, i488, 'm_SelectOnDown')
  request.r(i489[6], i489[7], 0, i488, 'm_SelectOnLeft')
  request.r(i489[8], i489[9], 0, i488, 'm_SelectOnRight')
  return i488
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i491 = data
  i490.m_NormalColor = new pc.Color(i491[0], i491[1], i491[2], i491[3])
  i490.m_HighlightedColor = new pc.Color(i491[4], i491[5], i491[6], i491[7])
  i490.m_PressedColor = new pc.Color(i491[8], i491[9], i491[10], i491[11])
  i490.m_SelectedColor = new pc.Color(i491[12], i491[13], i491[14], i491[15])
  i490.m_DisabledColor = new pc.Color(i491[16], i491[17], i491[18], i491[19])
  i490.m_ColorMultiplier = i491[20]
  i490.m_FadeDuration = i491[21]
  return i490
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i493 = data
  request.r(i493[0], i493[1], 0, i492, 'm_HighlightedSprite')
  request.r(i493[2], i493[3], 0, i492, 'm_PressedSprite')
  request.r(i493[4], i493[5], 0, i492, 'm_SelectedSprite')
  request.r(i493[6], i493[7], 0, i492, 'm_DisabledSprite')
  return i492
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i495 = data
  i494.m_NormalTrigger = i495[0]
  i494.m_HighlightedTrigger = i495[1]
  i494.m_PressedTrigger = i495[2]
  i494.m_SelectedTrigger = i495[3]
  i494.m_DisabledTrigger = i495[4]
  return i494
}

Deserializers["TutController"] = function (request, data, root) {
  var i496 = root || request.c( 'TutController' )
  var i497 = data
  request.r(i497[0], i497[1], 0, i496, 'icon')
  request.r(i497[2], i497[3], 0, i496, 'tutObject')
  i496.toPos = new pc.Vec3( i497[4], i497[5], i497[6] )
  i496.timeMove = i497[7]
  i496.timeDelay = i497[8]
  return i496
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i498 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i499 = data
  i498.targetIsSelf = !!i499[0]
  request.r(i499[1], i499[2], 0, i498, 'targetGO')
  i498.tweenTargetIsTargetGO = !!i499[3]
  i498.delay = i499[4]
  i498.duration = i499[5]
  i498.easeType = i499[6]
  i498.easeCurve = new pc.AnimationCurve( { keys_flow: i499[7] } )
  i498.loopType = i499[8]
  i498.loops = i499[9]
  i498.id = i499[10]
  i498.isRelative = !!i499[11]
  i498.isFrom = !!i499[12]
  i498.isIndependentUpdate = !!i499[13]
  i498.autoKill = !!i499[14]
  i498.autoGenerate = !!i499[15]
  i498.isActive = !!i499[16]
  i498.isValid = !!i499[17]
  request.r(i499[18], i499[19], 0, i498, 'target')
  i498.animationType = i499[20]
  i498.targetType = i499[21]
  i498.forcedTargetType = i499[22]
  i498.autoPlay = !!i499[23]
  i498.useTargetAsV3 = !!i499[24]
  i498.endValueFloat = i499[25]
  i498.endValueV3 = new pc.Vec3( i499[26], i499[27], i499[28] )
  i498.endValueV2 = new pc.Vec2( i499[29], i499[30] )
  i498.endValueColor = new pc.Color(i499[31], i499[32], i499[33], i499[34])
  i498.endValueString = i499[35]
  i498.endValueRect = UnityEngine.Rect.MinMaxRect(i499[36], i499[37], i499[38], i499[39])
  request.r(i499[40], i499[41], 0, i498, 'endValueTransform')
  i498.optionalBool0 = !!i499[42]
  i498.optionalBool1 = !!i499[43]
  i498.optionalFloat0 = i499[44]
  i498.optionalInt0 = i499[45]
  i498.optionalRotationMode = i499[46]
  i498.optionalScrambleMode = i499[47]
  i498.optionalShakeRandomnessMode = i499[48]
  i498.optionalString = i499[49]
  i498.updateType = i499[50]
  i498.isSpeedBased = !!i499[51]
  i498.hasOnStart = !!i499[52]
  i498.hasOnPlay = !!i499[53]
  i498.hasOnUpdate = !!i499[54]
  i498.hasOnStepComplete = !!i499[55]
  i498.hasOnComplete = !!i499[56]
  i498.hasOnTweenCreated = !!i499[57]
  i498.hasOnRewind = !!i499[58]
  i498.onStart = request.d('UnityEngine.Events.UnityEvent', i499[59], i498.onStart)
  i498.onPlay = request.d('UnityEngine.Events.UnityEvent', i499[60], i498.onPlay)
  i498.onUpdate = request.d('UnityEngine.Events.UnityEvent', i499[61], i498.onUpdate)
  i498.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i499[62], i498.onStepComplete)
  i498.onComplete = request.d('UnityEngine.Events.UnityEvent', i499[63], i498.onComplete)
  i498.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i499[64], i498.onTweenCreated)
  i498.onRewind = request.d('UnityEngine.Events.UnityEvent', i499[65], i498.onRewind)
  return i498
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i501 = data
  i500.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i501[0], i500.m_PersistentCalls)
  return i500
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.UI.Button' )
  var i503 = data
  i502.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i503[0], i502.m_OnClick)
  i502.m_Navigation = request.d('UnityEngine.UI.Navigation', i503[1], i502.m_Navigation)
  i502.m_Transition = i503[2]
  i502.m_Colors = request.d('UnityEngine.UI.ColorBlock', i503[3], i502.m_Colors)
  i502.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i503[4], i502.m_SpriteState)
  i502.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i503[5], i502.m_AnimationTriggers)
  i502.m_Interactable = !!i503[6]
  request.r(i503[7], i503[8], 0, i502, 'm_TargetGraphic')
  return i502
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i505 = data
  i504.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i505[0], i504.m_PersistentCalls)
  return i504
}

Deserializers["LunaController"] = function (request, data, root) {
  var i506 = root || request.c( 'LunaController' )
  var i507 = data
  i506.TimePlay = i507[0]
  i506.CountPlay = i507[1]
  i506.BGColor = new pc.Color(i507[2], i507[3], i507[4], i507[5])
  i506.GameBGColor = new pc.Color(i507[6], i507[7], i507[8], i507[9])
  i506.LevelTextColor = new pc.Color(i507[10], i507[11], i507[12], i507[13])
  i506.TitleTextColor = new pc.Color(i507[14], i507[15], i507[16], i507[17])
  request.r(i507[18], i507[19], 0, i506, 'time')
  request.r(i507[20], i507[21], 0, i506, 'BGImage')
  request.r(i507[22], i507[23], 0, i506, 'GameBGImage')
  request.r(i507[24], i507[25], 0, i506, 'levelText')
  request.r(i507[26], i507[27], 0, i506, 'titleText')
  request.r(i507[28], i507[29], 0, i506, 'endCard')
  var i509 = i507[30]
  var i508 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i509.length; i += 2) {
  request.r(i509[i + 0], i509[i + 1], 1, i508, '')
  }
  i506.CTA = i508
  i506.count = i507[31]
  return i506
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i512 = root || request.c( 'LayoutController' )
  var i513 = data
  request.r(i513[0], i513[1], 0, i512, 'CTA')
  i512.hide = !!i513[2]
  return i512
}

Deserializers["AudioController"] = function (request, data, root) {
  var i514 = root || request.c( 'AudioController' )
  var i515 = data
  request.r(i515[0], i515[1], 0, i514, 'BGM')
  request.r(i515[2], i515[3], 0, i514, 'musicSource')
  request.r(i515[4], i515[5], 0, i514, 'SFXPool')
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i517 = data
  request.r(i517[0], i517[1], 0, i516, 'clip')
  request.r(i517[2], i517[3], 0, i516, 'outputAudioMixerGroup')
  i516.playOnAwake = !!i517[4]
  i516.loop = !!i517[5]
  i516.time = i517[6]
  i516.volume = i517[7]
  i516.pitch = i517[8]
  i516.enabled = !!i517[9]
  return i516
}

Deserializers["DragController"] = function (request, data, root) {
  var i518 = root || request.c( 'DragController' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, 'currentTarget')
  request.r(i519[2], i519[3], 0, i518, 'iconMedicine')
  request.r(i519[4], i519[5], 0, i518, 'canvas')
  request.r(i519[6], i519[7], 0, i518, 'door')
  request.r(i519[8], i519[9], 0, i518, 'board1')
  request.r(i519[10], i519[11], 0, i518, 'board2')
  request.r(i519[12], i519[13], 0, i518, 'tut')
  return i518
}

Deserializers["GameController"] = function (request, data, root) {
  var i520 = root || request.c( 'GameController' )
  var i521 = data
  i520.CompleteStep = request.d('System.Action', i521[0], i520.CompleteStep)
  var i523 = i521[1]
  var i522 = new (System.Collections.Generic.List$1(Bridge.ns('Seq')))
  for(var i = 0; i < i523.length; i += 1) {
    i522.add(request.d('Seq', i523[i + 0]));
  }
  i520.skeletons = i522
  i520.end = !!i521[2]
  i520.complete = !!i521[3]
  i520.currentStep = i521[4]
  i520.maxStep = i521[5]
  request.r(i521[6], i521[7], 0, i520, 'currentStepText')
  request.r(i521[8], i521[9], 0, i520, 'maxStepText')
  request.r(i521[10], i521[11], 0, i520, 'slider')
  return i520
}

Deserializers["System.Action"] = function (request, data, root) {
  var i524 = root || request.c( 'System.Action' )
  var i525 = data
  return i524
}

Deserializers["Seq"] = function (request, data, root) {
  var i528 = root || request.c( 'Seq' )
  var i529 = data
  request.r(i529[0], i529[1], 0, i528, 'Area')
  request.r(i529[2], i529[3], 0, i528, 'Animation')
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i531 = data
  i530.ambientIntensity = i531[0]
  i530.reflectionIntensity = i531[1]
  i530.ambientMode = i531[2]
  i530.ambientLight = new pc.Color(i531[3], i531[4], i531[5], i531[6])
  i530.ambientSkyColor = new pc.Color(i531[7], i531[8], i531[9], i531[10])
  i530.ambientGroundColor = new pc.Color(i531[11], i531[12], i531[13], i531[14])
  i530.ambientEquatorColor = new pc.Color(i531[15], i531[16], i531[17], i531[18])
  i530.fogColor = new pc.Color(i531[19], i531[20], i531[21], i531[22])
  i530.fogEndDistance = i531[23]
  i530.fogStartDistance = i531[24]
  i530.fogDensity = i531[25]
  i530.fog = !!i531[26]
  request.r(i531[27], i531[28], 0, i530, 'skybox')
  i530.fogMode = i531[29]
  var i533 = i531[30]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i533[i + 0]) );
  }
  i530.lightmaps = i532
  i530.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i531[31], i530.lightProbes)
  i530.lightmapsMode = i531[32]
  i530.mixedBakeMode = i531[33]
  i530.environmentLightingMode = i531[34]
  i530.ambientProbe = new pc.SphericalHarmonicsL2(i531[35])
  i530.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i531[36])
  i530.useReferenceAmbientProbe = !!i531[37]
  request.r(i531[38], i531[39], 0, i530, 'customReflection')
  request.r(i531[40], i531[41], 0, i530, 'defaultReflection')
  i530.defaultReflectionMode = i531[42]
  i530.defaultReflectionResolution = i531[43]
  i530.sunLightObjectId = i531[44]
  i530.pixelLightCount = i531[45]
  i530.defaultReflectionHDR = !!i531[46]
  i530.hasLightDataAsset = !!i531[47]
  i530.hasManualGenerate = !!i531[48]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i537 = data
  request.r(i537[0], i537[1], 0, i536, 'lightmapColor')
  request.r(i537[2], i537[3], 0, i536, 'lightmapDirection')
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i538 = root || new UnityEngine.LightProbes()
  var i539 = data
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i547 = data
  var i549 = i547[0]
  var i548 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i549.length; i += 1) {
    i548.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i549[i + 0]));
  }
  i546.ShaderCompilationErrors = i548
  i546.name = i547[1]
  i546.guid = i547[2]
  var i551 = i547[3]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( i551[i + 0] );
  }
  i546.shaderDefinedKeywords = i550
  var i553 = i547[4]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i553[i + 0]) );
  }
  i546.passes = i552
  var i555 = i547[5]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i555[i + 0]) );
  }
  i546.usePasses = i554
  var i557 = i547[6]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i557[i + 0]) );
  }
  i546.defaultParameterValues = i556
  request.r(i547[7], i547[8], 0, i546, 'unityFallbackShader')
  i546.readDepth = !!i547[9]
  i546.isCreatedByShaderGraph = !!i547[10]
  i546.disableBatching = !!i547[11]
  i546.compiled = !!i547[12]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i561 = data
  i560.shaderName = i561[0]
  i560.errorMessage = i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i564 = root || new pc.UnityShaderPass()
  var i565 = data
  i564.id = i565[0]
  i564.subShaderIndex = i565[1]
  i564.name = i565[2]
  i564.passType = i565[3]
  i564.grabPassTextureName = i565[4]
  i564.usePass = !!i565[5]
  i564.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[6], i564.zTest)
  i564.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[7], i564.zWrite)
  i564.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[8], i564.culling)
  i564.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i565[9], i564.blending)
  i564.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i565[10], i564.alphaBlending)
  i564.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[11], i564.colorWriteMask)
  i564.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[12], i564.offsetUnits)
  i564.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[13], i564.offsetFactor)
  i564.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[14], i564.stencilRef)
  i564.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[15], i564.stencilReadMask)
  i564.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[16], i564.stencilWriteMask)
  i564.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i565[17], i564.stencilOp)
  i564.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i565[18], i564.stencilOpFront)
  i564.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i565[19], i564.stencilOpBack)
  var i567 = i565[20]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i567[i + 0]) );
  }
  i564.tags = i566
  var i569 = i565[21]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( i569[i + 0] );
  }
  i564.passDefinedKeywords = i568
  var i571 = i565[22]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i571[i + 0]) );
  }
  i564.passDefinedKeywordGroups = i570
  var i573 = i565[23]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i573[i + 0]) );
  }
  i564.variants = i572
  var i575 = i565[24]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i575[i + 0]) );
  }
  i564.excludedVariants = i574
  i564.hasDepthReader = !!i565[25]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i577 = data
  i576.val = i577[0]
  i576.name = i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i579 = data
  i578.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i579[0], i578.src)
  i578.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i579[1], i578.dst)
  i578.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i579[2], i578.op)
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i581 = data
  i580.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[0], i580.pass)
  i580.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[1], i580.fail)
  i580.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[2], i580.zFail)
  i580.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[3], i580.comp)
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i585 = data
  i584.name = i585[0]
  i584.value = i585[1]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i589 = data
  var i591 = i589[0]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( i591[i + 0] );
  }
  i588.keywords = i590
  i588.hasDiscard = !!i589[1]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i595 = data
  i594.passId = i595[0]
  i594.subShaderIndex = i595[1]
  var i597 = i595[2]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( i597[i + 0] );
  }
  i594.keywords = i596
  i594.vertexProgram = i595[3]
  i594.fragmentProgram = i595[4]
  i594.exportedForWebGl2 = !!i595[5]
  i594.readDepth = !!i595[6]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'shader')
  i600.pass = i601[2]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i605 = data
  i604.name = i605[0]
  i604.type = i605[1]
  i604.value = new pc.Vec4( i605[2], i605[3], i605[4], i605[5] )
  i604.textureValue = i605[6]
  i604.shaderPropertyFlag = i605[7]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i607 = data
  i606.name = i607[0]
  request.r(i607[1], i607[2], 0, i606, 'texture')
  i606.aabb = i607[3]
  i606.vertices = i607[4]
  i606.triangles = i607[5]
  i606.textureRect = UnityEngine.Rect.MinMaxRect(i607[6], i607[7], i607[8], i607[9])
  i606.packedRect = UnityEngine.Rect.MinMaxRect(i607[10], i607[11], i607[12], i607[13])
  i606.border = new pc.Vec4( i607[14], i607[15], i607[16], i607[17] )
  i606.transparency = i607[18]
  i606.bounds = i607[19]
  i606.pixelsPerUnit = i607[20]
  i606.textureWidth = i607[21]
  i606.textureHeight = i607[22]
  i606.nativeSize = new pc.Vec2( i607[23], i607[24] )
  i606.pivot = new pc.Vec2( i607[25], i607[26] )
  i606.textureRectOffset = new pc.Vec2( i607[27], i607[28] )
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i609 = data
  i608.name = i609[0]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i611 = data
  i610.name = i611[0]
  i610.ascent = i611[1]
  i610.originalLineHeight = i611[2]
  i610.fontSize = i611[3]
  var i613 = i611[4]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i613[i + 0]) );
  }
  i610.characterInfo = i612
  request.r(i611[5], i611[6], 0, i610, 'texture')
  i610.originalFontSize = i611[7]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i617 = data
  i616.index = i617[0]
  i616.advance = i617[1]
  i616.bearing = i617[2]
  i616.glyphWidth = i617[3]
  i616.glyphHeight = i617[4]
  i616.minX = i617[5]
  i616.maxX = i617[6]
  i616.minY = i617[7]
  i616.maxY = i617[8]
  i616.uvBottomLeftX = i617[9]
  i616.uvBottomLeftY = i617[10]
  i616.uvBottomRightX = i617[11]
  i616.uvBottomRightY = i617[12]
  i616.uvTopLeftX = i617[13]
  i616.uvTopLeftY = i617[14]
  i616.uvTopRightX = i617[15]
  i616.uvTopRightY = i617[16]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i619 = data
  i618.name = i619[0]
  i618.bytes64 = i619[1]
  i618.data = i619[2]
  return i618
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i620 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i621 = data
  var i623 = i621[0]
  var i622 = []
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 2, i622, '')
  }
  i620.atlasAssets = i622
  i620.scale = i621[1]
  request.r(i621[2], i621[3], 0, i620, 'skeletonJSON')
  i620.isUpgradingBlendModeMaterials = !!i621[4]
  i620.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i621[5], i620.blendModeMaterials)
  var i625 = i621[6]
  var i624 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i625.length; i += 2) {
  request.r(i625[i + 0], i625[i + 1], 1, i624, '')
  }
  i620.skeletonDataModifiers = i624
  var i627 = i621[7]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( i627[i + 0] );
  }
  i620.fromAnimation = i626
  var i629 = i621[8]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( i629[i + 0] );
  }
  i620.toAnimation = i628
  i620.duration = i621[9]
  i620.defaultMix = i621[10]
  request.r(i621[11], i621[12], 0, i620, 'controller')
  return i620
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i632 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i633 = data
  i632.applyAdditiveMaterial = !!i633[0]
  var i635 = i633[1]
  var i634 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i635.length; i += 1) {
    i634.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i635[i + 0]));
  }
  i632.additiveMaterials = i634
  var i637 = i633[2]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i637.length; i += 1) {
    i636.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i637[i + 0]));
  }
  i632.multiplyMaterials = i636
  var i639 = i633[3]
  var i638 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i639.length; i += 1) {
    i638.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i639[i + 0]));
  }
  i632.screenMaterials = i638
  i632.requiresBlendModeMaterials = !!i633[4]
  return i632
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i642 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i643 = data
  i642.pageName = i643[0]
  request.r(i643[1], i643[2], 0, i642, 'material')
  return i642
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i646 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'atlasFile')
  var i649 = i647[2]
  var i648 = []
  for(var i = 0; i < i649.length; i += 2) {
  request.r(i649[i + 0], i649[i + 1], 2, i648, '')
  }
  i646.materials = i648
  i646.textureLoadingMode = i647[3]
  request.r(i647[4], i647[5], 0, i646, 'onDemandTextureLoader')
  return i646
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i652 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i653 = data
  i652.useSafeMode = !!i653[0]
  i652.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i653[1], i652.safeModeOptions)
  i652.timeScale = i653[2]
  i652.unscaledTimeScale = i653[3]
  i652.useSmoothDeltaTime = !!i653[4]
  i652.maxSmoothUnscaledTime = i653[5]
  i652.rewindCallbackMode = i653[6]
  i652.showUnityEditorReport = !!i653[7]
  i652.logBehaviour = i653[8]
  i652.drawGizmos = !!i653[9]
  i652.defaultRecyclable = !!i653[10]
  i652.defaultAutoPlay = i653[11]
  i652.defaultUpdateType = i653[12]
  i652.defaultTimeScaleIndependent = !!i653[13]
  i652.defaultEaseType = i653[14]
  i652.defaultEaseOvershootOrAmplitude = i653[15]
  i652.defaultEasePeriod = i653[16]
  i652.defaultAutoKill = !!i653[17]
  i652.defaultLoopType = i653[18]
  i652.debugMode = !!i653[19]
  i652.debugStoreTargetId = !!i653[20]
  i652.showPreviewPanel = !!i653[21]
  i652.storeSettingsLocation = i653[22]
  i652.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i653[23], i652.modules)
  i652.createASMDEF = !!i653[24]
  i652.showPlayingTweens = !!i653[25]
  i652.showPausedTweens = !!i653[26]
  return i652
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i654 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i655 = data
  i654.logBehaviour = i655[0]
  i654.nestedTweenFailureBehaviour = i655[1]
  return i654
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i656 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i657 = data
  i656.showPanel = !!i657[0]
  i656.audioEnabled = !!i657[1]
  i656.physicsEnabled = !!i657[2]
  i656.physics2DEnabled = !!i657[3]
  i656.spriteEnabled = !!i657[4]
  i656.uiEnabled = !!i657[5]
  i656.textMeshProEnabled = !!i657[6]
  i656.tk2DEnabled = !!i657[7]
  i656.deAudioEnabled = !!i657[8]
  i656.deUnityExtendedEnabled = !!i657[9]
  i656.epoOutlineEnabled = !!i657[10]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i659 = data
  var i661 = i659[0]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i661[i + 0]) );
  }
  i658.files = i660
  i658.componentToPrefabIds = i659[1]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i665 = data
  i664.path = i665[0]
  request.r(i665[1], i665[2], 0, i664, 'unityObject')
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i667 = data
  var i669 = i667[0]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i669[i + 0]) );
  }
  i666.scriptsExecutionOrder = i668
  var i671 = i667[1]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i671[i + 0]) );
  }
  i666.sortingLayers = i670
  var i673 = i667[2]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i673[i + 0]) );
  }
  i666.cullingLayers = i672
  i666.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i667[3], i666.timeSettings)
  i666.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i667[4], i666.physicsSettings)
  i666.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i667[5], i666.physics2DSettings)
  i666.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i667[6], i666.qualitySettings)
  i666.enableRealtimeShadows = !!i667[7]
  i666.enableAutoInstancing = !!i667[8]
  i666.enableStaticBatching = !!i667[9]
  i666.enableDynamicBatching = !!i667[10]
  i666.lightmapEncodingQuality = i667[11]
  i666.desiredColorSpace = i667[12]
  var i675 = i667[13]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( i675[i + 0] );
  }
  i666.allTags = i674
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i679 = data
  i678.name = i679[0]
  i678.value = i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i683 = data
  i682.id = i683[0]
  i682.name = i683[1]
  i682.value = i683[2]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i687 = data
  i686.id = i687[0]
  i686.name = i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i689 = data
  i688.fixedDeltaTime = i689[0]
  i688.maximumDeltaTime = i689[1]
  i688.timeScale = i689[2]
  i688.maximumParticleTimestep = i689[3]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i691 = data
  i690.gravity = new pc.Vec3( i691[0], i691[1], i691[2] )
  i690.defaultSolverIterations = i691[3]
  i690.bounceThreshold = i691[4]
  i690.autoSyncTransforms = !!i691[5]
  i690.autoSimulation = !!i691[6]
  var i693 = i691[7]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i693[i + 0]) );
  }
  i690.collisionMatrix = i692
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i697 = data
  i696.enabled = !!i697[0]
  i696.layerId = i697[1]
  i696.otherLayerId = i697[2]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'material')
  i698.gravity = new pc.Vec2( i699[2], i699[3] )
  i698.positionIterations = i699[4]
  i698.velocityIterations = i699[5]
  i698.velocityThreshold = i699[6]
  i698.maxLinearCorrection = i699[7]
  i698.maxAngularCorrection = i699[8]
  i698.maxTranslationSpeed = i699[9]
  i698.maxRotationSpeed = i699[10]
  i698.baumgarteScale = i699[11]
  i698.baumgarteTOIScale = i699[12]
  i698.timeToSleep = i699[13]
  i698.linearSleepTolerance = i699[14]
  i698.angularSleepTolerance = i699[15]
  i698.defaultContactOffset = i699[16]
  i698.autoSimulation = !!i699[17]
  i698.queriesHitTriggers = !!i699[18]
  i698.queriesStartInColliders = !!i699[19]
  i698.callbacksOnDisable = !!i699[20]
  i698.reuseCollisionCallbacks = !!i699[21]
  i698.autoSyncTransforms = !!i699[22]
  var i701 = i699[23]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i701[i + 0]) );
  }
  i698.collisionMatrix = i700
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i705 = data
  i704.enabled = !!i705[0]
  i704.layerId = i705[1]
  i704.otherLayerId = i705[2]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i707 = data
  var i709 = i707[0]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i709[i + 0]) );
  }
  i706.qualityLevels = i708
  var i711 = i707[1]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( i711[i + 0] );
  }
  i706.names = i710
  i706.shadows = i707[2]
  i706.anisotropicFiltering = i707[3]
  i706.antiAliasing = i707[4]
  i706.lodBias = i707[5]
  i706.shadowCascades = i707[6]
  i706.shadowDistance = i707[7]
  i706.shadowmaskMode = i707[8]
  i706.shadowProjection = i707[9]
  i706.shadowResolution = i707[10]
  i706.softParticles = !!i707[11]
  i706.softVegetation = !!i707[12]
  i706.activeColorSpace = i707[13]
  i706.desiredColorSpace = i707[14]
  i706.masterTextureLimit = i707[15]
  i706.maxQueuedFrames = i707[16]
  i706.particleRaycastBudget = i707[17]
  i706.pixelLightCount = i707[18]
  i706.realtimeReflectionProbes = !!i707[19]
  i706.shadowCascade2Split = i707[20]
  i706.shadowCascade4Split = new pc.Vec3( i707[21], i707[22], i707[23] )
  i706.streamingMipmapsActive = !!i707[24]
  i706.vSyncCount = i707[25]
  i706.asyncUploadBufferSize = i707[26]
  i706.asyncUploadTimeSlice = i707[27]
  i706.billboardsFaceCameraPosition = !!i707[28]
  i706.shadowNearPlaneOffset = i707[29]
  i706.streamingMipmapsMemoryBudget = i707[30]
  i706.maximumLODLevel = i707[31]
  i706.streamingMipmapsAddAllCameras = !!i707[32]
  i706.streamingMipmapsMaxLevelReduction = i707[33]
  i706.streamingMipmapsRenderersPerFrame = i707[34]
  i706.resolutionScalingFixedDPIFactor = i707[35]
  i706.streamingMipmapsMaxFileIORequests = i707[36]
  i706.currentQualityLevel = i707[37]
  return i706
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'm_ObjectArgument')
  i714.m_ObjectArgumentAssemblyTypeName = i715[2]
  i714.m_IntArgument = i715[3]
  i714.m_FloatArgument = i715[4]
  i714.m_StringArgument = i715[5]
  i714.m_BoolArgument = !!i715[6]
  return i714
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[3],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[3],"71":[72],"73":[74],"75":[74],"9":[8],"20":[16],"76":[77],"78":[79],"80":[77],"81":[8],"82":[8],"11":[9],"13":[12,8],"83":[8],"10":[9],"84":[8],"85":[8],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"15":[8],"91":[8],"92":[12,8],"93":[8],"94":[8],"95":[8],"24":[8],"22":[12,8],"96":[8],"97":[6],"98":[6],"7":[6],"99":[6],"100":[3],"101":[3],"102":[103],"104":[3],"105":[106],"107":[8],"108":[12,8],"109":[72],"16":[12,8],"110":[111,72],"112":[72],"113":[72,114],"115":[49],"116":[57],"117":[106],"118":[119],"120":[77]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","UnityEngine.AudioClip","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Slider","TutController","UnityEngine.GameObject","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","LunaController","LayoutController","AudioController","UnityEngine.AudioSource","DragController","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "06/10/2026 03:50:26";

Deserializers.lunaDaysRunning = "19.0";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "TBAP_V20_NgocNDL_TamNTM";

Deserializers.lunaAppID = "29138";

Deserializers.projectId = "5b44dfd2230fe054ca8da1b65d37e310";

Deserializers.packagesInfo = "com.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1761";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3772";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BMTP_Luna";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "29d6b6f2-52c0-477f-a703-4b244afab4d3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

