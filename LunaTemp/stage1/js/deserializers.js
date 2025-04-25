var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i352 = root || request.c( 'UnityEngine.JointSpring' )
  var i353 = data
  i352.spring = i353[0]
  i352.damper = i353[1]
  i352.targetPosition = i353[2]
  return i352
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.JointMotor' )
  var i355 = data
  i354.m_TargetVelocity = i355[0]
  i354.m_Force = i355[1]
  i354.m_FreeSpin = i355[2]
  return i354
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i356 = root || request.c( 'UnityEngine.JointLimits' )
  var i357 = data
  i356.m_Min = i357[0]
  i356.m_Max = i357[1]
  i356.m_Bounciness = i357[2]
  i356.m_BounceMinVelocity = i357[3]
  i356.m_ContactDistance = i357[4]
  i356.minBounce = i357[5]
  i356.maxBounce = i357[6]
  return i356
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i358 = root || request.c( 'UnityEngine.JointDrive' )
  var i359 = data
  i358.m_PositionSpring = i359[0]
  i358.m_PositionDamper = i359[1]
  i358.m_MaximumForce = i359[2]
  i358.m_UseAcceleration = i359[3]
  return i358
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i360 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i361 = data
  i360.m_Spring = i361[0]
  i360.m_Damper = i361[1]
  return i360
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i362 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i363 = data
  i362.m_Limit = i363[0]
  i362.m_Bounciness = i363[1]
  i362.m_ContactDistance = i363[2]
  return i362
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i364 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i365 = data
  i364.m_ExtremumSlip = i365[0]
  i364.m_ExtremumValue = i365[1]
  i364.m_AsymptoteSlip = i365[2]
  i364.m_AsymptoteValue = i365[3]
  i364.m_Stiffness = i365[4]
  return i364
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i366 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i367 = data
  i366.m_LowerAngle = i367[0]
  i366.m_UpperAngle = i367[1]
  return i366
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i369 = data
  i368.m_MotorSpeed = i369[0]
  i368.m_MaximumMotorTorque = i369[1]
  return i368
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i370 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i371 = data
  i370.m_DampingRatio = i371[0]
  i370.m_Frequency = i371[1]
  i370.m_Angle = i371[2]
  return i370
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i373 = data
  i372.m_LowerTranslation = i373[0]
  i372.m_UpperTranslation = i373[1]
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i375 = data
  i374.name = i375[0]
  i374.width = i375[1]
  i374.height = i375[2]
  i374.mipmapCount = i375[3]
  i374.anisoLevel = i375[4]
  i374.filterMode = i375[5]
  i374.hdr = !!i375[6]
  i374.format = i375[7]
  i374.wrapMode = i375[8]
  i374.alphaIsTransparency = !!i375[9]
  i374.alphaSource = i375[10]
  i374.graphicsFormat = i375[11]
  i374.sRGBTexture = !!i375[12]
  i374.desiredColorSpace = i375[13]
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i376 = root || new pc.UnityMaterial()
  var i377 = data
  i376.name = i377[0]
  request.r(i377[1], i377[2], 0, i376, 'shader')
  i376.renderQueue = i377[3]
  i376.enableInstancing = !!i377[4]
  var i379 = i377[5]
  var i378 = []
  for(var i = 0; i < i379.length; i += 1) {
    i378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i379[i + 0]) );
  }
  i376.floatParameters = i378
  var i381 = i377[6]
  var i380 = []
  for(var i = 0; i < i381.length; i += 1) {
    i380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i381[i + 0]) );
  }
  i376.colorParameters = i380
  var i383 = i377[7]
  var i382 = []
  for(var i = 0; i < i383.length; i += 1) {
    i382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i383[i + 0]) );
  }
  i376.vectorParameters = i382
  var i385 = i377[8]
  var i384 = []
  for(var i = 0; i < i385.length; i += 1) {
    i384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i385[i + 0]) );
  }
  i376.textureParameters = i384
  var i387 = i377[9]
  var i386 = []
  for(var i = 0; i < i387.length; i += 1) {
    i386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i387[i + 0]) );
  }
  i376.materialFlags = i386
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i391 = data
  i390.name = i391[0]
  i390.value = i391[1]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i395 = data
  i394.name = i395[0]
  i394.value = new pc.Color(i395[1], i395[2], i395[3], i395[4])
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i399 = data
  i398.name = i399[0]
  i398.value = new pc.Vec4( i399[1], i399[2], i399[3], i399[4] )
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i403 = data
  i402.name = i403[0]
  request.r(i403[1], i403[2], 0, i402, 'value')
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i407 = data
  i406.name = i407[0]
  i406.enabled = !!i407[1]
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i409 = data
  i408.pivot = new pc.Vec2( i409[0], i409[1] )
  i408.anchorMin = new pc.Vec2( i409[2], i409[3] )
  i408.anchorMax = new pc.Vec2( i409[4], i409[5] )
  i408.sizeDelta = new pc.Vec2( i409[6], i409[7] )
  i408.anchoredPosition3D = new pc.Vec3( i409[8], i409[9], i409[10] )
  i408.rotation = new pc.Quat(i409[11], i409[12], i409[13], i409[14])
  i408.scale = new pc.Vec3( i409[15], i409[16], i409[17] )
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i411 = data
  i410.cullTransparentMesh = !!i411[0]
  return i410
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.UI.Image' )
  var i413 = data
  request.r(i413[0], i413[1], 0, i412, 'm_Sprite')
  i412.m_Type = i413[2]
  i412.m_PreserveAspect = !!i413[3]
  i412.m_FillCenter = !!i413[4]
  i412.m_FillMethod = i413[5]
  i412.m_FillAmount = i413[6]
  i412.m_FillClockwise = !!i413[7]
  i412.m_FillOrigin = i413[8]
  i412.m_UseSpriteMesh = !!i413[9]
  i412.m_PixelsPerUnitMultiplier = i413[10]
  request.r(i413[11], i413[12], 0, i412, 'm_Material')
  i412.m_Maskable = !!i413[13]
  i412.m_Color = new pc.Color(i413[14], i413[15], i413[16], i413[17])
  i412.m_RaycastTarget = !!i413[18]
  i412.m_RaycastPadding = new pc.Vec4( i413[19], i413[20], i413[21], i413[22] )
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i415 = data
  request.r(i415[0], i415[1], 0, i414, 'clip')
  request.r(i415[2], i415[3], 0, i414, 'outputAudioMixerGroup')
  i414.playOnAwake = !!i415[4]
  i414.loop = !!i415[5]
  i414.time = i415[6]
  i414.volume = i415[7]
  i414.pitch = i415[8]
  i414.enabled = !!i415[9]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i417 = data
  i416.name = i417[0]
  i416.tagId = i417[1]
  i416.enabled = !!i417[2]
  i416.isStatic = !!i417[3]
  i416.layer = i417[4]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i419 = data
  i418.name = i419[0]
  i418.index = i419[1]
  i418.startup = !!i419[2]
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i421 = data
  i420.position = new pc.Vec3( i421[0], i421[1], i421[2] )
  i420.scale = new pc.Vec3( i421[3], i421[4], i421[5] )
  i420.rotation = new pc.Quat(i421[6], i421[7], i421[8], i421[9])
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i423 = data
  i422.enabled = !!i423[0]
  i422.aspect = i423[1]
  i422.orthographic = !!i423[2]
  i422.orthographicSize = i423[3]
  i422.backgroundColor = new pc.Color(i423[4], i423[5], i423[6], i423[7])
  i422.nearClipPlane = i423[8]
  i422.farClipPlane = i423[9]
  i422.fieldOfView = i423[10]
  i422.depth = i423[11]
  i422.clearFlags = i423[12]
  i422.cullingMask = i423[13]
  i422.rect = i423[14]
  request.r(i423[15], i423[16], 0, i422, 'targetTexture')
  i422.usePhysicalProperties = !!i423[17]
  i422.focalLength = i423[18]
  i422.sensorSize = new pc.Vec2( i423[19], i423[20] )
  i422.lensShift = new pc.Vec2( i423[21], i423[22] )
  i422.gateFit = i423[23]
  return i422
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i425 = data
  request.r(i425[0], i425[1], 0, i424, 'm_FirstSelected')
  i424.m_sendNavigationEvents = !!i425[2]
  i424.m_DragThreshold = i425[3]
  return i424
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i427 = data
  i426.m_HorizontalAxis = i427[0]
  i426.m_VerticalAxis = i427[1]
  i426.m_SubmitButton = i427[2]
  i426.m_CancelButton = i427[3]
  i426.m_InputActionsPerSecond = i427[4]
  i426.m_RepeatDelay = i427[5]
  i426.m_ForceModuleActive = !!i427[6]
  i426.m_SendPointerHoverToParent = !!i427[7]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i429 = data
  i428.enabled = !!i429[0]
  i428.planeDistance = i429[1]
  i428.referencePixelsPerUnit = i429[2]
  i428.isFallbackOverlay = !!i429[3]
  i428.renderMode = i429[4]
  i428.renderOrder = i429[5]
  i428.sortingLayerName = i429[6]
  i428.sortingOrder = i429[7]
  i428.scaleFactor = i429[8]
  request.r(i429[9], i429[10], 0, i428, 'worldCamera')
  i428.overrideSorting = !!i429[11]
  i428.pixelPerfect = !!i429[12]
  i428.targetDisplay = i429[13]
  i428.overridePixelPerfect = !!i429[14]
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

Deserializers["LunaManager"] = function (request, data, root) {
  var i434 = root || request.c( 'LunaManager' )
  var i435 = data
  var i437 = i435[0]
  var i436 = []
  for(var i = 0; i < i437.length; i += 2) {
  request.r(i437[i + 0], i437[i + 1], 2, i436, '')
  }
  i434.lstBtnInstall = i436
  request.r(i435[1], i435[2], 0, i434, 'EndCard')
  i434.countPlay = i435[3]
  i434.countPlayFinal = i435[4]
  i434.timeDropFinal = i435[5]
  i434.colorBG = new pc.Color(i435[6], i435[7], i435[8], i435[9])
  request.r(i435[10], i435[11], 0, i434, 'texture2D')
  request.r(i435[12], i435[13], 0, i434, 'rawImageBG')
  return i434
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i441 = data
  request.r(i441[0], i441[1], 0, i440, 'm_Texture')
  i440.m_UVRect = UnityEngine.Rect.MinMaxRect(i441[2], i441[3], i441[4], i441[5])
  request.r(i441[6], i441[7], 0, i440, 'm_Material')
  i440.m_Maskable = !!i441[8]
  i440.m_Color = new pc.Color(i441[9], i441[10], i441[11], i441[12])
  i440.m_RaycastTarget = !!i441[13]
  i440.m_RaycastPadding = new pc.Vec4( i441[14], i441[15], i441[16], i441[17] )
  return i440
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i442 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i443 = data
  request.r(i443[0], i443[1], 0, i442, 'skeletonDataAsset')
  request.r(i443[2], i443[3], 0, i442, 'additiveMaterial')
  request.r(i443[4], i443[5], 0, i442, 'multiplyMaterial')
  request.r(i443[6], i443[7], 0, i442, 'screenMaterial')
  i442.initialSkinName = i443[8]
  i442.initialFlipX = !!i443[9]
  i442.initialFlipY = !!i443[10]
  i442.startingAnimation = i443[11]
  i442.startingLoop = !!i443[12]
  i442.timeScale = i443[13]
  i442.freeze = !!i443[14]
  i442.layoutScaleMode = i443[15]
  i442.updateWhenInvisible = i443[16]
  i442.allowMultipleCanvasRenderers = !!i443[17]
  var i445 = i443[18]
  var i444 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i445.length; i += 2) {
  request.r(i445[i + 0], i445[i + 1], 1, i444, '')
  }
  i442.canvasRenderers = i444
  i442.enableSeparatorSlots = !!i443[19]
  i442.updateSeparatorPartLocation = !!i443[20]
  i442.updateSeparatorPartScale = !!i443[21]
  i442.disableMeshAssignmentOnOverride = !!i443[22]
  i442.referenceSize = new pc.Vec2( i443[23], i443[24] )
  i442.referenceScale = i443[25]
  i442.rectTransformSize = new pc.Vec2( i443[26], i443[27] )
  i442.editReferenceRect = !!i443[28]
  var i447 = i443[29]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( i447[i + 0] );
  }
  i442.separatorSlotNames = i446
  var i449 = i443[30]
  var i448 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i449.length; i += 2) {
  request.r(i449[i + 0], i449[i + 1], 1, i448, '')
  }
  i442.separatorParts = i448
  i442.meshGenerator = request.d('Spine.Unity.MeshGenerator', i443[31], i442.meshGenerator)
  i442.updateTiming = i443[32]
  i442.unscaledTime = !!i443[33]
  request.r(i443[34], i443[35], 0, i442, 'm_Material')
  i442.m_Maskable = !!i443[36]
  i442.m_Color = new pc.Color(i443[37], i443[38], i443[39], i443[40])
  i442.m_RaycastTarget = !!i443[41]
  i442.m_RaycastPadding = new pc.Vec4( i443[42], i443[43], i443[44], i443[45] )
  return i442
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i456 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i457 = data
  i456.settings = request.d('Spine.Unity.MeshGenerator+Settings', i457[0], i456.settings)
  return i456
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i458 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i459 = data
  i458.useClipping = !!i459[0]
  i458.zSpacing = i459[1]
  i458.pmaVertexColors = !!i459[2]
  i458.tintBlack = !!i459[3]
  i458.canvasGroupTintBlack = !!i459[4]
  i458.calculateTangents = !!i459[5]
  i458.addNormals = !!i459[6]
  i458.immutableTriangles = !!i459[7]
  return i458
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.UI.Button' )
  var i461 = data
  i460.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i461[0], i460.m_OnClick)
  i460.m_Navigation = request.d('UnityEngine.UI.Navigation', i461[1], i460.m_Navigation)
  i460.m_Transition = i461[2]
  i460.m_Colors = request.d('UnityEngine.UI.ColorBlock', i461[3], i460.m_Colors)
  i460.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i461[4], i460.m_SpriteState)
  i460.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i461[5], i460.m_AnimationTriggers)
  i460.m_Interactable = !!i461[6]
  request.r(i461[7], i461[8], 0, i460, 'm_TargetGraphic')
  return i460
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i463 = data
  i462.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i463[0], i462.m_PersistentCalls)
  return i462
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i465 = data
  var i467 = i465[0]
  var i466 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i467.length; i += 1) {
    i466.add(request.d('UnityEngine.Events.PersistentCall', i467[i + 0]));
  }
  i464.m_Calls = i466
  return i464
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i471 = data
  request.r(i471[0], i471[1], 0, i470, 'm_Target')
  i470.m_TargetAssemblyTypeName = i471[2]
  i470.m_MethodName = i471[3]
  i470.m_Mode = i471[4]
  i470.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i471[5], i470.m_Arguments)
  i470.m_CallState = i471[6]
  return i470
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i473 = data
  request.r(i473[0], i473[1], 0, i472, 'm_ObjectArgument')
  i472.m_ObjectArgumentAssemblyTypeName = i473[2]
  i472.m_IntArgument = i473[3]
  i472.m_FloatArgument = i473[4]
  i472.m_StringArgument = i473[5]
  i472.m_BoolArgument = !!i473[6]
  return i472
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i475 = data
  i474.m_Mode = i475[0]
  i474.m_WrapAround = !!i475[1]
  request.r(i475[2], i475[3], 0, i474, 'm_SelectOnUp')
  request.r(i475[4], i475[5], 0, i474, 'm_SelectOnDown')
  request.r(i475[6], i475[7], 0, i474, 'm_SelectOnLeft')
  request.r(i475[8], i475[9], 0, i474, 'm_SelectOnRight')
  return i474
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i477 = data
  i476.m_NormalColor = new pc.Color(i477[0], i477[1], i477[2], i477[3])
  i476.m_HighlightedColor = new pc.Color(i477[4], i477[5], i477[6], i477[7])
  i476.m_PressedColor = new pc.Color(i477[8], i477[9], i477[10], i477[11])
  i476.m_SelectedColor = new pc.Color(i477[12], i477[13], i477[14], i477[15])
  i476.m_DisabledColor = new pc.Color(i477[16], i477[17], i477[18], i477[19])
  i476.m_ColorMultiplier = i477[20]
  i476.m_FadeDuration = i477[21]
  return i476
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i479 = data
  request.r(i479[0], i479[1], 0, i478, 'm_HighlightedSprite')
  request.r(i479[2], i479[3], 0, i478, 'm_PressedSprite')
  request.r(i479[4], i479[5], 0, i478, 'm_SelectedSprite')
  request.r(i479[6], i479[7], 0, i478, 'm_DisabledSprite')
  return i478
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i481 = data
  i480.m_NormalTrigger = i481[0]
  i480.m_HighlightedTrigger = i481[1]
  i480.m_PressedTrigger = i481[2]
  i480.m_SelectedTrigger = i481[3]
  i480.m_DisabledTrigger = i481[4]
  return i480
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i482 = root || request.c( 'ClickItem' )
  var i483 = data
  i482.isDoor = !!i483[0]
  var i485 = i483[1]
  var i484 = []
  for(var i = 0; i < i485.length; i += 2) {
  request.r(i485[i + 0], i485[i + 1], 2, i484, '')
  }
  i482.steps = i484
  return i482
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i488 = root || request.c( 'DraggableItem' )
  var i489 = data
  i488.itemID = i489[0]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i491 = data
  i490.m_Alpha = i491[0]
  i490.m_Interactable = !!i491[1]
  i490.m_BlocksRaycasts = !!i491[2]
  i490.m_IgnoreParentGroups = !!i491[3]
  i490.enabled = !!i491[4]
  return i490
}

Deserializers["DropZone"] = function (request, data, root) {
  var i492 = root || request.c( 'DropZone' )
  var i493 = data
  request.r(i493[0], i493[1], 0, i492, 'humman')
  var i495 = i493[2]
  var i494 = []
  for(var i = 0; i < i495.length; i += 2) {
  request.r(i495[i + 0], i495[i + 1], 2, i494, '')
  }
  i492.stairPrefabs = i494
  request.r(i493[3], i493[4], 0, i492, 'tranHoder')
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i497 = data
  i496.enabled = !!i497[0]
  i496.isTrigger = !!i497[1]
  i496.usedByEffector = !!i497[2]
  i496.density = i497[3]
  i496.offset = new pc.Vec2( i497[4], i497[5] )
  request.r(i497[6], i497[7], 0, i496, 'material')
  i496.usedByComposite = !!i497[8]
  i496.autoTiling = !!i497[9]
  var i499 = i497[10]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
  var i501 = i499[i + 0]
  var i500 = []
  for(var i = 0; i < i501.length; i += 2) {
    i500.push( new pc.Vec2( i501[i + 0], i501[i + 1] ) );
  }
    i498.push( i500 );
  }
  i496.points = i498
  return i496
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i509 = data
  i508.m_StartCorner = i509[0]
  i508.m_StartAxis = i509[1]
  i508.m_CellSize = new pc.Vec2( i509[2], i509[3] )
  i508.m_Spacing = new pc.Vec2( i509[4], i509[5] )
  i508.m_Constraint = i509[6]
  i508.m_ConstraintCount = i509[7]
  i508.m_Padding = UnityEngine.RectOffset.FromPaddings(i509[8], i509[9], i509[10], i509[11])
  i508.m_ChildAlignment = i509[12]
  return i508
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.UI.Text' )
  var i511 = data
  i510.m_FontData = request.d('UnityEngine.UI.FontData', i511[0], i510.m_FontData)
  i510.m_Text = i511[1]
  request.r(i511[2], i511[3], 0, i510, 'm_Material')
  i510.m_Maskable = !!i511[4]
  i510.m_Color = new pc.Color(i511[5], i511[6], i511[7], i511[8])
  i510.m_RaycastTarget = !!i511[9]
  i510.m_RaycastPadding = new pc.Vec4( i511[10], i511[11], i511[12], i511[13] )
  return i510
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.UI.FontData' )
  var i513 = data
  request.r(i513[0], i513[1], 0, i512, 'm_Font')
  i512.m_FontSize = i513[2]
  i512.m_FontStyle = i513[3]
  i512.m_BestFit = !!i513[4]
  i512.m_MinSize = i513[5]
  i512.m_MaxSize = i513[6]
  i512.m_Alignment = i513[7]
  i512.m_AlignByGeometry = !!i513[8]
  i512.m_RichText = !!i513[9]
  i512.m_HorizontalOverflow = i513[10]
  i512.m_VerticalOverflow = i513[11]
  i512.m_LineSpacing = i513[12]
  return i512
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i514 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i515 = data
  i514.targetIsSelf = !!i515[0]
  request.r(i515[1], i515[2], 0, i514, 'targetGO')
  i514.tweenTargetIsTargetGO = !!i515[3]
  i514.delay = i515[4]
  i514.duration = i515[5]
  i514.easeType = i515[6]
  i514.easeCurve = new pc.AnimationCurve( { keys_flow: i515[7] } )
  i514.loopType = i515[8]
  i514.loops = i515[9]
  i514.id = i515[10]
  i514.isRelative = !!i515[11]
  i514.isFrom = !!i515[12]
  i514.isIndependentUpdate = !!i515[13]
  i514.autoKill = !!i515[14]
  i514.autoGenerate = !!i515[15]
  i514.isActive = !!i515[16]
  i514.isValid = !!i515[17]
  request.r(i515[18], i515[19], 0, i514, 'target')
  i514.animationType = i515[20]
  i514.targetType = i515[21]
  i514.forcedTargetType = i515[22]
  i514.autoPlay = !!i515[23]
  i514.useTargetAsV3 = !!i515[24]
  i514.endValueFloat = i515[25]
  i514.endValueV3 = new pc.Vec3( i515[26], i515[27], i515[28] )
  i514.endValueV2 = new pc.Vec2( i515[29], i515[30] )
  i514.endValueColor = new pc.Color(i515[31], i515[32], i515[33], i515[34])
  i514.endValueString = i515[35]
  i514.endValueRect = UnityEngine.Rect.MinMaxRect(i515[36], i515[37], i515[38], i515[39])
  request.r(i515[40], i515[41], 0, i514, 'endValueTransform')
  i514.optionalBool0 = !!i515[42]
  i514.optionalBool1 = !!i515[43]
  i514.optionalFloat0 = i515[44]
  i514.optionalInt0 = i515[45]
  i514.optionalRotationMode = i515[46]
  i514.optionalScrambleMode = i515[47]
  i514.optionalShakeRandomnessMode = i515[48]
  i514.optionalString = i515[49]
  i514.updateType = i515[50]
  i514.isSpeedBased = !!i515[51]
  i514.hasOnStart = !!i515[52]
  i514.hasOnPlay = !!i515[53]
  i514.hasOnUpdate = !!i515[54]
  i514.hasOnStepComplete = !!i515[55]
  i514.hasOnComplete = !!i515[56]
  i514.hasOnTweenCreated = !!i515[57]
  i514.hasOnRewind = !!i515[58]
  i514.onStart = request.d('UnityEngine.Events.UnityEvent', i515[59], i514.onStart)
  i514.onPlay = request.d('UnityEngine.Events.UnityEvent', i515[60], i514.onPlay)
  i514.onUpdate = request.d('UnityEngine.Events.UnityEvent', i515[61], i514.onUpdate)
  i514.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i515[62], i514.onStepComplete)
  i514.onComplete = request.d('UnityEngine.Events.UnityEvent', i515[63], i514.onComplete)
  i514.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i515[64], i514.onTweenCreated)
  i514.onRewind = request.d('UnityEngine.Events.UnityEvent', i515[65], i514.onRewind)
  return i514
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i517 = data
  i516.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i517[0], i516.m_PersistentCalls)
  return i516
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.UI.Mask' )
  var i519 = data
  i518.m_ShowMaskGraphic = !!i519[0]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i521 = data
  i520.ambientIntensity = i521[0]
  i520.reflectionIntensity = i521[1]
  i520.ambientMode = i521[2]
  i520.ambientLight = new pc.Color(i521[3], i521[4], i521[5], i521[6])
  i520.ambientSkyColor = new pc.Color(i521[7], i521[8], i521[9], i521[10])
  i520.ambientGroundColor = new pc.Color(i521[11], i521[12], i521[13], i521[14])
  i520.ambientEquatorColor = new pc.Color(i521[15], i521[16], i521[17], i521[18])
  i520.fogColor = new pc.Color(i521[19], i521[20], i521[21], i521[22])
  i520.fogEndDistance = i521[23]
  i520.fogStartDistance = i521[24]
  i520.fogDensity = i521[25]
  i520.fog = !!i521[26]
  request.r(i521[27], i521[28], 0, i520, 'skybox')
  i520.fogMode = i521[29]
  var i523 = i521[30]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i523[i + 0]) );
  }
  i520.lightmaps = i522
  i520.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i521[31], i520.lightProbes)
  i520.lightmapsMode = i521[32]
  i520.mixedBakeMode = i521[33]
  i520.environmentLightingMode = i521[34]
  i520.ambientProbe = new pc.SphericalHarmonicsL2(i521[35])
  i520.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i521[36])
  i520.useReferenceAmbientProbe = !!i521[37]
  request.r(i521[38], i521[39], 0, i520, 'customReflection')
  request.r(i521[40], i521[41], 0, i520, 'defaultReflection')
  i520.defaultReflectionMode = i521[42]
  i520.defaultReflectionResolution = i521[43]
  i520.sunLightObjectId = i521[44]
  i520.pixelLightCount = i521[45]
  i520.defaultReflectionHDR = !!i521[46]
  i520.hasLightDataAsset = !!i521[47]
  i520.hasManualGenerate = !!i521[48]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i527 = data
  request.r(i527[0], i527[1], 0, i526, 'lightmapColor')
  request.r(i527[2], i527[3], 0, i526, 'lightmapDirection')
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i528 = root || new UnityEngine.LightProbes()
  var i529 = data
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i537 = data
  var i539 = i537[0]
  var i538 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i539.length; i += 1) {
    i538.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i539[i + 0]));
  }
  i536.ShaderCompilationErrors = i538
  i536.name = i537[1]
  i536.guid = i537[2]
  var i541 = i537[3]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( i541[i + 0] );
  }
  i536.shaderDefinedKeywords = i540
  var i543 = i537[4]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i543[i + 0]) );
  }
  i536.passes = i542
  var i545 = i537[5]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i545[i + 0]) );
  }
  i536.usePasses = i544
  var i547 = i537[6]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i547[i + 0]) );
  }
  i536.defaultParameterValues = i546
  request.r(i537[7], i537[8], 0, i536, 'unityFallbackShader')
  i536.readDepth = !!i537[9]
  i536.isCreatedByShaderGraph = !!i537[10]
  i536.usedBatchUniforms = i537[11]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i551 = data
  i550.shaderName = i551[0]
  i550.errorMessage = i551[1]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i554 = root || new pc.UnityShaderPass()
  var i555 = data
  i554.id = i555[0]
  i554.subShaderIndex = i555[1]
  i554.name = i555[2]
  i554.passType = i555[3]
  i554.grabPassTextureName = i555[4]
  i554.usePass = !!i555[5]
  i554.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i555[6], i554.zTest)
  i554.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i555[7], i554.zWrite)
  i554.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i555[8], i554.culling)
  i554.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i555[9], i554.blending)
  i554.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i555[10], i554.alphaBlending)
  i554.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i555[11], i554.colorWriteMask)
  i554.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i555[12], i554.offsetUnits)
  i554.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i555[13], i554.offsetFactor)
  i554.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i555[14], i554.stencilRef)
  i554.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i555[15], i554.stencilReadMask)
  i554.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i555[16], i554.stencilWriteMask)
  i554.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i555[17], i554.stencilOp)
  i554.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i555[18], i554.stencilOpFront)
  i554.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i555[19], i554.stencilOpBack)
  var i557 = i555[20]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i557[i + 0]) );
  }
  i554.tags = i556
  var i559 = i555[21]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( i559[i + 0] );
  }
  i554.passDefinedKeywords = i558
  var i561 = i555[22]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i561[i + 0]) );
  }
  i554.passDefinedKeywordGroups = i560
  var i563 = i555[23]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i563[i + 0]) );
  }
  i554.variants = i562
  var i565 = i555[24]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i565[i + 0]) );
  }
  i554.excludedVariants = i564
  i554.hasDepthReader = !!i555[25]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i567 = data
  i566.val = i567[0]
  i566.name = i567[1]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i569 = data
  i568.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i569[0], i568.src)
  i568.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i569[1], i568.dst)
  i568.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i569[2], i568.op)
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i571 = data
  i570.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[0], i570.pass)
  i570.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[1], i570.fail)
  i570.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[2], i570.zFail)
  i570.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[3], i570.comp)
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i575 = data
  i574.name = i575[0]
  i574.value = i575[1]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i579 = data
  var i581 = i579[0]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( i581[i + 0] );
  }
  i578.keywords = i580
  i578.hasDiscard = !!i579[1]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i585 = data
  i584.passId = i585[0]
  i584.subShaderIndex = i585[1]
  var i587 = i585[2]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( i587[i + 0] );
  }
  i584.keywords = i586
  i584.vertexProgram = i585[3]
  i584.fragmentProgram = i585[4]
  i584.compiledForWebGL2 = !!i585[5]
  i584.readDepth = !!i585[6]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'shader')
  i590.pass = i591[2]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i595 = data
  i594.name = i595[0]
  i594.type = i595[1]
  i594.value = new pc.Vec4( i595[2], i595[3], i595[4], i595[5] )
  i594.textureValue = i595[6]
  i594.shaderPropertyFlag = i595[7]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i597 = data
  i596.name = i597[0]
  request.r(i597[1], i597[2], 0, i596, 'texture')
  i596.aabb = i597[3]
  i596.vertices = i597[4]
  i596.triangles = i597[5]
  i596.textureRect = UnityEngine.Rect.MinMaxRect(i597[6], i597[7], i597[8], i597[9])
  i596.packedRect = UnityEngine.Rect.MinMaxRect(i597[10], i597[11], i597[12], i597[13])
  i596.border = new pc.Vec4( i597[14], i597[15], i597[16], i597[17] )
  i596.transparency = i597[18]
  i596.bounds = i597[19]
  i596.pixelsPerUnit = i597[20]
  i596.textureWidth = i597[21]
  i596.textureHeight = i597[22]
  i596.nativeSize = new pc.Vec2( i597[23], i597[24] )
  i596.pivot = new pc.Vec2( i597[25], i597[26] )
  i596.textureRectOffset = new pc.Vec2( i597[27], i597[28] )
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i599 = data
  i598.name = i599[0]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i601 = data
  i600.name = i601[0]
  i600.ascent = i601[1]
  i600.originalLineHeight = i601[2]
  i600.fontSize = i601[3]
  var i603 = i601[4]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i603[i + 0]) );
  }
  i600.characterInfo = i602
  request.r(i601[5], i601[6], 0, i600, 'texture')
  i600.originalFontSize = i601[7]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i607 = data
  i606.index = i607[0]
  i606.advance = i607[1]
  i606.bearing = i607[2]
  i606.glyphWidth = i607[3]
  i606.glyphHeight = i607[4]
  i606.minX = i607[5]
  i606.maxX = i607[6]
  i606.minY = i607[7]
  i606.maxY = i607[8]
  i606.uvBottomLeftX = i607[9]
  i606.uvBottomLeftY = i607[10]
  i606.uvBottomRightX = i607[11]
  i606.uvBottomRightY = i607[12]
  i606.uvTopLeftX = i607[13]
  i606.uvTopLeftY = i607[14]
  i606.uvTopRightX = i607[15]
  i606.uvTopRightY = i607[16]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i609 = data
  i608.name = i609[0]
  i608.bytes64 = i609[1]
  i608.data = i609[2]
  return i608
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i610 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i611 = data
  var i613 = i611[0]
  var i612 = []
  for(var i = 0; i < i613.length; i += 2) {
  request.r(i613[i + 0], i613[i + 1], 2, i612, '')
  }
  i610.atlasAssets = i612
  i610.scale = i611[1]
  request.r(i611[2], i611[3], 0, i610, 'skeletonJSON')
  i610.isUpgradingBlendModeMaterials = !!i611[4]
  i610.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i611[5], i610.blendModeMaterials)
  var i615 = i611[6]
  var i614 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i615.length; i += 2) {
  request.r(i615[i + 0], i615[i + 1], 1, i614, '')
  }
  i610.skeletonDataModifiers = i614
  var i617 = i611[7]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( i617[i + 0] );
  }
  i610.fromAnimation = i616
  var i619 = i611[8]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( i619[i + 0] );
  }
  i610.toAnimation = i618
  i610.duration = i611[9]
  i610.defaultMix = i611[10]
  request.r(i611[11], i611[12], 0, i610, 'controller')
  return i610
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i622 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i623 = data
  i622.applyAdditiveMaterial = !!i623[0]
  var i625 = i623[1]
  var i624 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i625.length; i += 1) {
    i624.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i625[i + 0]));
  }
  i622.additiveMaterials = i624
  var i627 = i623[2]
  var i626 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i627.length; i += 1) {
    i626.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i627[i + 0]));
  }
  i622.multiplyMaterials = i626
  var i629 = i623[3]
  var i628 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i629.length; i += 1) {
    i628.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i629[i + 0]));
  }
  i622.screenMaterials = i628
  i622.requiresBlendModeMaterials = !!i623[4]
  return i622
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i632 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i633 = data
  i632.pageName = i633[0]
  request.r(i633[1], i633[2], 0, i632, 'material')
  return i632
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i636 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'atlasFile')
  var i639 = i637[2]
  var i638 = []
  for(var i = 0; i < i639.length; i += 2) {
  request.r(i639[i + 0], i639[i + 1], 2, i638, '')
  }
  i636.materials = i638
  i636.textureLoadingMode = i637[3]
  request.r(i637[4], i637[5], 0, i636, 'onDemandTextureLoader')
  return i636
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i642 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i643 = data
  i642.useSafeMode = !!i643[0]
  i642.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i643[1], i642.safeModeOptions)
  i642.timeScale = i643[2]
  i642.unscaledTimeScale = i643[3]
  i642.useSmoothDeltaTime = !!i643[4]
  i642.maxSmoothUnscaledTime = i643[5]
  i642.rewindCallbackMode = i643[6]
  i642.showUnityEditorReport = !!i643[7]
  i642.logBehaviour = i643[8]
  i642.drawGizmos = !!i643[9]
  i642.defaultRecyclable = !!i643[10]
  i642.defaultAutoPlay = i643[11]
  i642.defaultUpdateType = i643[12]
  i642.defaultTimeScaleIndependent = !!i643[13]
  i642.defaultEaseType = i643[14]
  i642.defaultEaseOvershootOrAmplitude = i643[15]
  i642.defaultEasePeriod = i643[16]
  i642.defaultAutoKill = !!i643[17]
  i642.defaultLoopType = i643[18]
  i642.debugMode = !!i643[19]
  i642.debugStoreTargetId = !!i643[20]
  i642.showPreviewPanel = !!i643[21]
  i642.storeSettingsLocation = i643[22]
  i642.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i643[23], i642.modules)
  i642.createASMDEF = !!i643[24]
  i642.showPlayingTweens = !!i643[25]
  i642.showPausedTweens = !!i643[26]
  return i642
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i644 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i645 = data
  i644.logBehaviour = i645[0]
  i644.nestedTweenFailureBehaviour = i645[1]
  return i644
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i646 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i647 = data
  i646.showPanel = !!i647[0]
  i646.audioEnabled = !!i647[1]
  i646.physicsEnabled = !!i647[2]
  i646.physics2DEnabled = !!i647[3]
  i646.spriteEnabled = !!i647[4]
  i646.uiEnabled = !!i647[5]
  i646.textMeshProEnabled = !!i647[6]
  i646.tk2DEnabled = !!i647[7]
  i646.deAudioEnabled = !!i647[8]
  i646.deUnityExtendedEnabled = !!i647[9]
  i646.epoOutlineEnabled = !!i647[10]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i649 = data
  var i651 = i649[0]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i651[i + 0]) );
  }
  i648.files = i650
  i648.componentToPrefabIds = i649[1]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i655 = data
  i654.path = i655[0]
  request.r(i655[1], i655[2], 0, i654, 'unityObject')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i657 = data
  var i659 = i657[0]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i659[i + 0]) );
  }
  i656.scriptsExecutionOrder = i658
  var i661 = i657[1]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i661[i + 0]) );
  }
  i656.sortingLayers = i660
  var i663 = i657[2]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i663[i + 0]) );
  }
  i656.cullingLayers = i662
  i656.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i657[3], i656.timeSettings)
  i656.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i657[4], i656.physicsSettings)
  i656.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i657[5], i656.physics2DSettings)
  i656.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i657[6], i656.qualitySettings)
  i656.enableRealtimeShadows = !!i657[7]
  i656.enableAutoInstancing = !!i657[8]
  i656.enableDynamicBatching = !!i657[9]
  i656.lightmapEncodingQuality = i657[10]
  i656.desiredColorSpace = i657[11]
  var i665 = i657[12]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( i665[i + 0] );
  }
  i656.allTags = i664
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i669 = data
  i668.name = i669[0]
  i668.value = i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i673 = data
  i672.id = i673[0]
  i672.name = i673[1]
  i672.value = i673[2]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i677 = data
  i676.id = i677[0]
  i676.name = i677[1]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i679 = data
  i678.fixedDeltaTime = i679[0]
  i678.maximumDeltaTime = i679[1]
  i678.timeScale = i679[2]
  i678.maximumParticleTimestep = i679[3]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i681 = data
  i680.gravity = new pc.Vec3( i681[0], i681[1], i681[2] )
  i680.defaultSolverIterations = i681[3]
  i680.bounceThreshold = i681[4]
  i680.autoSyncTransforms = !!i681[5]
  i680.autoSimulation = !!i681[6]
  var i683 = i681[7]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i683[i + 0]) );
  }
  i680.collisionMatrix = i682
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i687 = data
  i686.enabled = !!i687[0]
  i686.layerId = i687[1]
  i686.otherLayerId = i687[2]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'material')
  i688.gravity = new pc.Vec2( i689[2], i689[3] )
  i688.positionIterations = i689[4]
  i688.velocityIterations = i689[5]
  i688.velocityThreshold = i689[6]
  i688.maxLinearCorrection = i689[7]
  i688.maxAngularCorrection = i689[8]
  i688.maxTranslationSpeed = i689[9]
  i688.maxRotationSpeed = i689[10]
  i688.baumgarteScale = i689[11]
  i688.baumgarteTOIScale = i689[12]
  i688.timeToSleep = i689[13]
  i688.linearSleepTolerance = i689[14]
  i688.angularSleepTolerance = i689[15]
  i688.defaultContactOffset = i689[16]
  i688.autoSimulation = !!i689[17]
  i688.queriesHitTriggers = !!i689[18]
  i688.queriesStartInColliders = !!i689[19]
  i688.callbacksOnDisable = !!i689[20]
  i688.reuseCollisionCallbacks = !!i689[21]
  i688.autoSyncTransforms = !!i689[22]
  var i691 = i689[23]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i691[i + 0]) );
  }
  i688.collisionMatrix = i690
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i695 = data
  i694.enabled = !!i695[0]
  i694.layerId = i695[1]
  i694.otherLayerId = i695[2]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i697 = data
  var i699 = i697[0]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i699[i + 0]) );
  }
  i696.qualityLevels = i698
  var i701 = i697[1]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( i701[i + 0] );
  }
  i696.names = i700
  i696.shadows = i697[2]
  i696.anisotropicFiltering = i697[3]
  i696.antiAliasing = i697[4]
  i696.lodBias = i697[5]
  i696.shadowCascades = i697[6]
  i696.shadowDistance = i697[7]
  i696.shadowmaskMode = i697[8]
  i696.shadowProjection = i697[9]
  i696.shadowResolution = i697[10]
  i696.softParticles = !!i697[11]
  i696.softVegetation = !!i697[12]
  i696.activeColorSpace = i697[13]
  i696.desiredColorSpace = i697[14]
  i696.masterTextureLimit = i697[15]
  i696.maxQueuedFrames = i697[16]
  i696.particleRaycastBudget = i697[17]
  i696.pixelLightCount = i697[18]
  i696.realtimeReflectionProbes = !!i697[19]
  i696.shadowCascade2Split = i697[20]
  i696.shadowCascade4Split = new pc.Vec3( i697[21], i697[22], i697[23] )
  i696.streamingMipmapsActive = !!i697[24]
  i696.vSyncCount = i697[25]
  i696.asyncUploadBufferSize = i697[26]
  i696.asyncUploadTimeSlice = i697[27]
  i696.billboardsFaceCameraPosition = !!i697[28]
  i696.shadowNearPlaneOffset = i697[29]
  i696.streamingMipmapsMemoryBudget = i697[30]
  i696.maximumLODLevel = i697[31]
  i696.streamingMipmapsAddAllCameras = !!i697[32]
  i696.streamingMipmapsMaxLevelReduction = i697[33]
  i696.streamingMipmapsRenderersPerFrame = i697[34]
  i696.resolutionScalingFixedDPIFactor = i697[35]
  i696.streamingMipmapsMaxFileIORequests = i697[36]
  i696.currentQualityLevel = i697[37]
  return i696
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[10],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[10],"71":[72],"73":[74],"75":[74],"14":[2],"76":[77],"78":[79],"80":[77],"81":[2],"82":[2],"16":[14],"5":[3,2],"83":[2],"15":[14],"84":[2],"30":[2],"85":[2],"86":[2],"87":[2],"88":[2],"89":[2],"34":[2],"90":[2],"21":[3,2],"91":[2],"92":[2],"93":[2],"94":[2],"31":[3,2],"95":[2],"96":[12],"97":[12],"13":[12],"98":[12],"99":[10],"100":[10],"101":[102],"103":[10],"104":[105],"106":[2],"107":[3,2],"108":[72],"22":[3,2],"109":[110,72],"111":[72],"112":[72,113],"114":[49],"115":[57],"116":[105],"117":[118],"119":[2],"120":[72,2],"121":[2,3],"122":[2],"123":[3,2],"124":[72],"125":[3,2],"126":[2],"127":[77]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","ClickItem","DraggableItem","UnityEngine.CanvasGroup","DropZone","UnityEngine.PolygonCollider2D","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "04/15/2025 07:07:05";

Deserializers.lunaDaysRunning = "9.8";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "APG_V02_TrangHT_AnhPD";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1778";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4232";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, mecanim-wasm";

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

Deserializers.buildID = "bc8ba823-b678-4bae-be48-bb4ec9488475";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

