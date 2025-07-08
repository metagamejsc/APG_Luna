var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i342 = root || request.c( 'UnityEngine.JointSpring' )
  var i343 = data
  i342.spring = i343[0]
  i342.damper = i343[1]
  i342.targetPosition = i343[2]
  return i342
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i344 = root || request.c( 'UnityEngine.JointMotor' )
  var i345 = data
  i344.m_TargetVelocity = i345[0]
  i344.m_Force = i345[1]
  i344.m_FreeSpin = i345[2]
  return i344
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i346 = root || request.c( 'UnityEngine.JointLimits' )
  var i347 = data
  i346.m_Min = i347[0]
  i346.m_Max = i347[1]
  i346.m_Bounciness = i347[2]
  i346.m_BounceMinVelocity = i347[3]
  i346.m_ContactDistance = i347[4]
  i346.minBounce = i347[5]
  i346.maxBounce = i347[6]
  return i346
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i348 = root || request.c( 'UnityEngine.JointDrive' )
  var i349 = data
  i348.m_PositionSpring = i349[0]
  i348.m_PositionDamper = i349[1]
  i348.m_MaximumForce = i349[2]
  i348.m_UseAcceleration = i349[3]
  return i348
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i350 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i351 = data
  i350.m_Spring = i351[0]
  i350.m_Damper = i351[1]
  return i350
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i352 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i353 = data
  i352.m_Limit = i353[0]
  i352.m_Bounciness = i353[1]
  i352.m_ContactDistance = i353[2]
  return i352
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i355 = data
  i354.m_ExtremumSlip = i355[0]
  i354.m_ExtremumValue = i355[1]
  i354.m_AsymptoteSlip = i355[2]
  i354.m_AsymptoteValue = i355[3]
  i354.m_Stiffness = i355[4]
  return i354
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i356 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i357 = data
  i356.m_LowerAngle = i357[0]
  i356.m_UpperAngle = i357[1]
  return i356
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i358 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i359 = data
  i358.m_MotorSpeed = i359[0]
  i358.m_MaximumMotorTorque = i359[1]
  return i358
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i360 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i361 = data
  i360.m_DampingRatio = i361[0]
  i360.m_Frequency = i361[1]
  i360.m_Angle = i361[2]
  return i360
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i362 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i363 = data
  i362.m_LowerTranslation = i363[0]
  i362.m_UpperTranslation = i363[1]
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i365 = data
  i364.name = i365[0]
  i364.width = i365[1]
  i364.height = i365[2]
  i364.mipmapCount = i365[3]
  i364.anisoLevel = i365[4]
  i364.filterMode = i365[5]
  i364.hdr = !!i365[6]
  i364.format = i365[7]
  i364.wrapMode = i365[8]
  i364.alphaIsTransparency = !!i365[9]
  i364.alphaSource = i365[10]
  i364.graphicsFormat = i365[11]
  i364.sRGBTexture = !!i365[12]
  i364.desiredColorSpace = i365[13]
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i366 = root || new pc.UnityMaterial()
  var i367 = data
  i366.name = i367[0]
  request.r(i367[1], i367[2], 0, i366, 'shader')
  i366.renderQueue = i367[3]
  i366.enableInstancing = !!i367[4]
  var i369 = i367[5]
  var i368 = []
  for(var i = 0; i < i369.length; i += 1) {
    i368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i369[i + 0]) );
  }
  i366.floatParameters = i368
  var i371 = i367[6]
  var i370 = []
  for(var i = 0; i < i371.length; i += 1) {
    i370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i371[i + 0]) );
  }
  i366.colorParameters = i370
  var i373 = i367[7]
  var i372 = []
  for(var i = 0; i < i373.length; i += 1) {
    i372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i373[i + 0]) );
  }
  i366.vectorParameters = i372
  var i375 = i367[8]
  var i374 = []
  for(var i = 0; i < i375.length; i += 1) {
    i374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i375[i + 0]) );
  }
  i366.textureParameters = i374
  var i377 = i367[9]
  var i376 = []
  for(var i = 0; i < i377.length; i += 1) {
    i376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i377[i + 0]) );
  }
  i366.materialFlags = i376
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i381 = data
  i380.name = i381[0]
  i380.value = i381[1]
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i385 = data
  i384.name = i385[0]
  i384.value = new pc.Color(i385[1], i385[2], i385[3], i385[4])
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i389 = data
  i388.name = i389[0]
  i388.value = new pc.Vec4( i389[1], i389[2], i389[3], i389[4] )
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i393 = data
  i392.name = i393[0]
  request.r(i393[1], i393[2], 0, i392, 'value')
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i397 = data
  i396.name = i397[0]
  i396.enabled = !!i397[1]
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i399 = data
  i398.name = i399[0]
  i398.index = i399[1]
  i398.startup = !!i399[2]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i401 = data
  i400.position = new pc.Vec3( i401[0], i401[1], i401[2] )
  i400.scale = new pc.Vec3( i401[3], i401[4], i401[5] )
  i400.rotation = new pc.Quat(i401[6], i401[7], i401[8], i401[9])
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i403 = data
  i402.enabled = !!i403[0]
  i402.aspect = i403[1]
  i402.orthographic = !!i403[2]
  i402.orthographicSize = i403[3]
  i402.backgroundColor = new pc.Color(i403[4], i403[5], i403[6], i403[7])
  i402.nearClipPlane = i403[8]
  i402.farClipPlane = i403[9]
  i402.fieldOfView = i403[10]
  i402.depth = i403[11]
  i402.clearFlags = i403[12]
  i402.cullingMask = i403[13]
  i402.rect = i403[14]
  request.r(i403[15], i403[16], 0, i402, 'targetTexture')
  i402.usePhysicalProperties = !!i403[17]
  i402.focalLength = i403[18]
  i402.sensorSize = new pc.Vec2( i403[19], i403[20] )
  i402.lensShift = new pc.Vec2( i403[21], i403[22] )
  i402.gateFit = i403[23]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i405 = data
  i404.name = i405[0]
  i404.tagId = i405[1]
  i404.enabled = !!i405[2]
  i404.isStatic = !!i405[3]
  i404.layer = i405[4]
  return i404
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i406 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i407 = data
  request.r(i407[0], i407[1], 0, i406, 'm_FirstSelected')
  i406.m_sendNavigationEvents = !!i407[2]
  i406.m_DragThreshold = i407[3]
  return i406
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i409 = data
  i408.m_HorizontalAxis = i409[0]
  i408.m_VerticalAxis = i409[1]
  i408.m_SubmitButton = i409[2]
  i408.m_CancelButton = i409[3]
  i408.m_InputActionsPerSecond = i409[4]
  i408.m_RepeatDelay = i409[5]
  i408.m_ForceModuleActive = !!i409[6]
  i408.m_SendPointerHoverToParent = !!i409[7]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i411 = data
  i410.pivot = new pc.Vec2( i411[0], i411[1] )
  i410.anchorMin = new pc.Vec2( i411[2], i411[3] )
  i410.anchorMax = new pc.Vec2( i411[4], i411[5] )
  i410.sizeDelta = new pc.Vec2( i411[6], i411[7] )
  i410.anchoredPosition3D = new pc.Vec3( i411[8], i411[9], i411[10] )
  i410.rotation = new pc.Quat(i411[11], i411[12], i411[13], i411[14])
  i410.scale = new pc.Vec3( i411[15], i411[16], i411[17] )
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i413 = data
  i412.enabled = !!i413[0]
  i412.planeDistance = i413[1]
  i412.referencePixelsPerUnit = i413[2]
  i412.isFallbackOverlay = !!i413[3]
  i412.renderMode = i413[4]
  i412.renderOrder = i413[5]
  i412.sortingLayerName = i413[6]
  i412.sortingOrder = i413[7]
  i412.scaleFactor = i413[8]
  request.r(i413[9], i413[10], 0, i412, 'worldCamera')
  i412.overrideSorting = !!i413[11]
  i412.pixelPerfect = !!i413[12]
  i412.targetDisplay = i413[13]
  i412.overridePixelPerfect = !!i413[14]
  return i412
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i415 = data
  i414.m_UiScaleMode = i415[0]
  i414.m_ReferencePixelsPerUnit = i415[1]
  i414.m_ScaleFactor = i415[2]
  i414.m_ReferenceResolution = new pc.Vec2( i415[3], i415[4] )
  i414.m_ScreenMatchMode = i415[5]
  i414.m_MatchWidthOrHeight = i415[6]
  i414.m_PhysicalUnit = i415[7]
  i414.m_FallbackScreenDPI = i415[8]
  i414.m_DefaultSpriteDPI = i415[9]
  i414.m_DynamicPixelsPerUnit = i415[10]
  i414.m_PresetInfoIsWorld = !!i415[11]
  return i414
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i417 = data
  i416.m_IgnoreReversedGraphics = !!i417[0]
  i416.m_BlockingObjects = i417[1]
  i416.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i417[2] )
  return i416
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i418 = root || request.c( 'LunaManager' )
  var i419 = data
  var i421 = i419[0]
  var i420 = []
  for(var i = 0; i < i421.length; i += 2) {
  request.r(i421[i + 0], i421[i + 1], 2, i420, '')
  }
  i418.lstBtnInstall = i420
  request.r(i419[1], i419[2], 0, i418, 'EndCard')
  i418.countPlay = i419[3]
  i418.countPlayFinal = i419[4]
  i418.countPlayMax = i419[5]
  i418.timeDropFinal = i419[6]
  i418.colorBG = new pc.Color(i419[7], i419[8], i419[9], i419[10])
  request.r(i419[11], i419[12], 0, i418, 'texture2D')
  request.r(i419[13], i419[14], 0, i418, 'rawImageBG')
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i425 = data
  i424.cullTransparentMesh = !!i425[0]
  return i424
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i427 = data
  request.r(i427[0], i427[1], 0, i426, 'm_Texture')
  i426.m_UVRect = UnityEngine.Rect.MinMaxRect(i427[2], i427[3], i427[4], i427[5])
  request.r(i427[6], i427[7], 0, i426, 'm_Material')
  i426.m_Maskable = !!i427[8]
  i426.m_Color = new pc.Color(i427[9], i427[10], i427[11], i427[12])
  i426.m_RaycastTarget = !!i427[13]
  i426.m_RaycastPadding = new pc.Vec4( i427[14], i427[15], i427[16], i427[17] )
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i429 = data
  request.r(i429[0], i429[1], 0, i428, 'clip')
  request.r(i429[2], i429[3], 0, i428, 'outputAudioMixerGroup')
  i428.playOnAwake = !!i429[4]
  i428.loop = !!i429[5]
  i428.time = i429[6]
  i428.volume = i429[7]
  i428.pitch = i429[8]
  i428.enabled = !!i429[9]
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

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i432 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i433 = data
  request.r(i433[0], i433[1], 0, i432, 'skeletonDataAsset')
  request.r(i433[2], i433[3], 0, i432, 'additiveMaterial')
  request.r(i433[4], i433[5], 0, i432, 'multiplyMaterial')
  request.r(i433[6], i433[7], 0, i432, 'screenMaterial')
  i432.initialSkinName = i433[8]
  i432.initialFlipX = !!i433[9]
  i432.initialFlipY = !!i433[10]
  i432.startingAnimation = i433[11]
  i432.startingLoop = !!i433[12]
  i432.timeScale = i433[13]
  i432.freeze = !!i433[14]
  i432.layoutScaleMode = i433[15]
  i432.updateWhenInvisible = i433[16]
  i432.allowMultipleCanvasRenderers = !!i433[17]
  var i435 = i433[18]
  var i434 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i435.length; i += 2) {
  request.r(i435[i + 0], i435[i + 1], 1, i434, '')
  }
  i432.canvasRenderers = i434
  i432.enableSeparatorSlots = !!i433[19]
  i432.updateSeparatorPartLocation = !!i433[20]
  i432.updateSeparatorPartScale = !!i433[21]
  i432.disableMeshAssignmentOnOverride = !!i433[22]
  i432.referenceSize = new pc.Vec2( i433[23], i433[24] )
  i432.referenceScale = i433[25]
  i432.rectTransformSize = new pc.Vec2( i433[26], i433[27] )
  i432.editReferenceRect = !!i433[28]
  var i437 = i433[29]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( i437[i + 0] );
  }
  i432.separatorSlotNames = i436
  var i439 = i433[30]
  var i438 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i439.length; i += 2) {
  request.r(i439[i + 0], i439[i + 1], 1, i438, '')
  }
  i432.separatorParts = i438
  i432.meshGenerator = request.d('Spine.Unity.MeshGenerator', i433[31], i432.meshGenerator)
  i432.updateTiming = i433[32]
  i432.unscaledTime = !!i433[33]
  request.r(i433[34], i433[35], 0, i432, 'm_Material')
  i432.m_Maskable = !!i433[36]
  i432.m_Color = new pc.Color(i433[37], i433[38], i433[39], i433[40])
  i432.m_RaycastTarget = !!i433[41]
  i432.m_RaycastPadding = new pc.Vec4( i433[42], i433[43], i433[44], i433[45] )
  return i432
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i446 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i447 = data
  i446.settings = request.d('Spine.Unity.MeshGenerator+Settings', i447[0], i446.settings)
  return i446
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i448 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i449 = data
  i448.useClipping = !!i449[0]
  i448.zSpacing = i449[1]
  i448.pmaVertexColors = !!i449[2]
  i448.tintBlack = !!i449[3]
  i448.canvasGroupTintBlack = !!i449[4]
  i448.calculateTangents = !!i449[5]
  i448.addNormals = !!i449[6]
  i448.immutableTriangles = !!i449[7]
  return i448
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i450 = root || request.c( 'DraggableItem' )
  var i451 = data
  i450.idDrag = i451[0]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i453 = data
  i452.m_Alpha = i453[0]
  i452.m_Interactable = !!i453[1]
  i452.m_BlocksRaycasts = !!i453[2]
  i452.m_IgnoreParentGroups = !!i453[3]
  i452.enabled = !!i453[4]
  return i452
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.UI.Button' )
  var i455 = data
  i454.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i455[0], i454.m_OnClick)
  i454.m_Navigation = request.d('UnityEngine.UI.Navigation', i455[1], i454.m_Navigation)
  i454.m_Transition = i455[2]
  i454.m_Colors = request.d('UnityEngine.UI.ColorBlock', i455[3], i454.m_Colors)
  i454.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i455[4], i454.m_SpriteState)
  i454.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i455[5], i454.m_AnimationTriggers)
  i454.m_Interactable = !!i455[6]
  request.r(i455[7], i455[8], 0, i454, 'm_TargetGraphic')
  return i454
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i457 = data
  i456.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i457[0], i456.m_PersistentCalls)
  return i456
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i459 = data
  var i461 = i459[0]
  var i460 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i461.length; i += 1) {
    i460.add(request.d('UnityEngine.Events.PersistentCall', i461[i + 0]));
  }
  i458.m_Calls = i460
  return i458
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i465 = data
  request.r(i465[0], i465[1], 0, i464, 'm_Target')
  i464.m_TargetAssemblyTypeName = i465[2]
  i464.m_MethodName = i465[3]
  i464.m_Mode = i465[4]
  i464.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i465[5], i464.m_Arguments)
  i464.m_CallState = i465[6]
  return i464
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i467 = data
  request.r(i467[0], i467[1], 0, i466, 'm_ObjectArgument')
  i466.m_ObjectArgumentAssemblyTypeName = i467[2]
  i466.m_IntArgument = i467[3]
  i466.m_FloatArgument = i467[4]
  i466.m_StringArgument = i467[5]
  i466.m_BoolArgument = !!i467[6]
  return i466
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i469 = data
  i468.m_Mode = i469[0]
  i468.m_WrapAround = !!i469[1]
  request.r(i469[2], i469[3], 0, i468, 'm_SelectOnUp')
  request.r(i469[4], i469[5], 0, i468, 'm_SelectOnDown')
  request.r(i469[6], i469[7], 0, i468, 'm_SelectOnLeft')
  request.r(i469[8], i469[9], 0, i468, 'm_SelectOnRight')
  return i468
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i471 = data
  i470.m_NormalColor = new pc.Color(i471[0], i471[1], i471[2], i471[3])
  i470.m_HighlightedColor = new pc.Color(i471[4], i471[5], i471[6], i471[7])
  i470.m_PressedColor = new pc.Color(i471[8], i471[9], i471[10], i471[11])
  i470.m_SelectedColor = new pc.Color(i471[12], i471[13], i471[14], i471[15])
  i470.m_DisabledColor = new pc.Color(i471[16], i471[17], i471[18], i471[19])
  i470.m_ColorMultiplier = i471[20]
  i470.m_FadeDuration = i471[21]
  return i470
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i473 = data
  request.r(i473[0], i473[1], 0, i472, 'm_HighlightedSprite')
  request.r(i473[2], i473[3], 0, i472, 'm_PressedSprite')
  request.r(i473[4], i473[5], 0, i472, 'm_SelectedSprite')
  request.r(i473[6], i473[7], 0, i472, 'm_DisabledSprite')
  return i472
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i475 = data
  i474.m_NormalTrigger = i475[0]
  i474.m_HighlightedTrigger = i475[1]
  i474.m_PressedTrigger = i475[2]
  i474.m_SelectedTrigger = i475[3]
  i474.m_DisabledTrigger = i475[4]
  return i474
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i476 = root || request.c( 'ClickItem' )
  var i477 = data
  i476.isPhone = !!i477[0]
  var i479 = i477[1]
  var i478 = []
  for(var i = 0; i < i479.length; i += 2) {
  request.r(i479[i + 0], i479[i + 1], 2, i478, '')
  }
  i476.steps = i478
  return i476
}

Deserializers["DropZone"] = function (request, data, root) {
  var i482 = root || request.c( 'DropZone' )
  var i483 = data
  i482.idDrop = i483[0]
  var i485 = i483[1]
  var i484 = []
  for(var i = 0; i < i485.length; i += 2) {
  request.r(i485[i + 0], i485[i + 1], 2, i484, '')
  }
  i482.steps = i484
  i482.isWoman = !!i483[2]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i487 = data
  i486.usedByComposite = !!i487[0]
  i486.autoTiling = !!i487[1]
  i486.size = new pc.Vec2( i487[2], i487[3] )
  i486.edgeRadius = i487[4]
  i486.enabled = !!i487[5]
  i486.isTrigger = !!i487[6]
  i486.usedByEffector = !!i487[7]
  i486.density = i487[8]
  i486.offset = new pc.Vec2( i487[9], i487[10] )
  request.r(i487[11], i487[12], 0, i486, 'material')
  return i486
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.UI.Text' )
  var i489 = data
  i488.m_FontData = request.d('UnityEngine.UI.FontData', i489[0], i488.m_FontData)
  i488.m_Text = i489[1]
  request.r(i489[2], i489[3], 0, i488, 'm_Material')
  i488.m_Maskable = !!i489[4]
  i488.m_Color = new pc.Color(i489[5], i489[6], i489[7], i489[8])
  i488.m_RaycastTarget = !!i489[9]
  i488.m_RaycastPadding = new pc.Vec4( i489[10], i489[11], i489[12], i489[13] )
  return i488
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.UI.FontData' )
  var i491 = data
  request.r(i491[0], i491[1], 0, i490, 'm_Font')
  i490.m_FontSize = i491[2]
  i490.m_FontStyle = i491[3]
  i490.m_BestFit = !!i491[4]
  i490.m_MinSize = i491[5]
  i490.m_MaxSize = i491[6]
  i490.m_Alignment = i491[7]
  i490.m_AlignByGeometry = !!i491[8]
  i490.m_RichText = !!i491[9]
  i490.m_HorizontalOverflow = i491[10]
  i490.m_VerticalOverflow = i491[11]
  i490.m_LineSpacing = i491[12]
  return i490
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i492 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i493 = data
  i492.targetIsSelf = !!i493[0]
  request.r(i493[1], i493[2], 0, i492, 'targetGO')
  i492.tweenTargetIsTargetGO = !!i493[3]
  i492.delay = i493[4]
  i492.duration = i493[5]
  i492.easeType = i493[6]
  i492.easeCurve = new pc.AnimationCurve( { keys_flow: i493[7] } )
  i492.loopType = i493[8]
  i492.loops = i493[9]
  i492.id = i493[10]
  i492.isRelative = !!i493[11]
  i492.isFrom = !!i493[12]
  i492.isIndependentUpdate = !!i493[13]
  i492.autoKill = !!i493[14]
  i492.autoGenerate = !!i493[15]
  i492.isActive = !!i493[16]
  i492.isValid = !!i493[17]
  request.r(i493[18], i493[19], 0, i492, 'target')
  i492.animationType = i493[20]
  i492.targetType = i493[21]
  i492.forcedTargetType = i493[22]
  i492.autoPlay = !!i493[23]
  i492.useTargetAsV3 = !!i493[24]
  i492.endValueFloat = i493[25]
  i492.endValueV3 = new pc.Vec3( i493[26], i493[27], i493[28] )
  i492.endValueV2 = new pc.Vec2( i493[29], i493[30] )
  i492.endValueColor = new pc.Color(i493[31], i493[32], i493[33], i493[34])
  i492.endValueString = i493[35]
  i492.endValueRect = UnityEngine.Rect.MinMaxRect(i493[36], i493[37], i493[38], i493[39])
  request.r(i493[40], i493[41], 0, i492, 'endValueTransform')
  i492.optionalBool0 = !!i493[42]
  i492.optionalBool1 = !!i493[43]
  i492.optionalFloat0 = i493[44]
  i492.optionalInt0 = i493[45]
  i492.optionalRotationMode = i493[46]
  i492.optionalScrambleMode = i493[47]
  i492.optionalShakeRandomnessMode = i493[48]
  i492.optionalString = i493[49]
  i492.updateType = i493[50]
  i492.isSpeedBased = !!i493[51]
  i492.hasOnStart = !!i493[52]
  i492.hasOnPlay = !!i493[53]
  i492.hasOnUpdate = !!i493[54]
  i492.hasOnStepComplete = !!i493[55]
  i492.hasOnComplete = !!i493[56]
  i492.hasOnTweenCreated = !!i493[57]
  i492.hasOnRewind = !!i493[58]
  i492.onStart = request.d('UnityEngine.Events.UnityEvent', i493[59], i492.onStart)
  i492.onPlay = request.d('UnityEngine.Events.UnityEvent', i493[60], i492.onPlay)
  i492.onUpdate = request.d('UnityEngine.Events.UnityEvent', i493[61], i492.onUpdate)
  i492.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i493[62], i492.onStepComplete)
  i492.onComplete = request.d('UnityEngine.Events.UnityEvent', i493[63], i492.onComplete)
  i492.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i493[64], i492.onTweenCreated)
  i492.onRewind = request.d('UnityEngine.Events.UnityEvent', i493[65], i492.onRewind)
  return i492
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i495 = data
  i494.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i495[0], i494.m_PersistentCalls)
  return i494
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.UI.Mask' )
  var i497 = data
  i496.m_ShowMaskGraphic = !!i497[0]
  return i496
}

Deserializers["IQFill"] = function (request, data, root) {
  var i498 = root || request.c( 'IQFill' )
  var i499 = data
  request.r(i499[0], i499[1], 0, i498, 'fillImage')
  i498.maxFillAmount = i499[2]
  i498.fillDuration = i499[3]
  i498.maxValue = i499[4]
  i498.addValue = i499[5]
  i498.fillEase = i499[6]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i501 = data
  i500.ambientIntensity = i501[0]
  i500.reflectionIntensity = i501[1]
  i500.ambientMode = i501[2]
  i500.ambientLight = new pc.Color(i501[3], i501[4], i501[5], i501[6])
  i500.ambientSkyColor = new pc.Color(i501[7], i501[8], i501[9], i501[10])
  i500.ambientGroundColor = new pc.Color(i501[11], i501[12], i501[13], i501[14])
  i500.ambientEquatorColor = new pc.Color(i501[15], i501[16], i501[17], i501[18])
  i500.fogColor = new pc.Color(i501[19], i501[20], i501[21], i501[22])
  i500.fogEndDistance = i501[23]
  i500.fogStartDistance = i501[24]
  i500.fogDensity = i501[25]
  i500.fog = !!i501[26]
  request.r(i501[27], i501[28], 0, i500, 'skybox')
  i500.fogMode = i501[29]
  var i503 = i501[30]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i503[i + 0]) );
  }
  i500.lightmaps = i502
  i500.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i501[31], i500.lightProbes)
  i500.lightmapsMode = i501[32]
  i500.mixedBakeMode = i501[33]
  i500.environmentLightingMode = i501[34]
  i500.ambientProbe = new pc.SphericalHarmonicsL2(i501[35])
  i500.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i501[36])
  i500.useReferenceAmbientProbe = !!i501[37]
  request.r(i501[38], i501[39], 0, i500, 'customReflection')
  request.r(i501[40], i501[41], 0, i500, 'defaultReflection')
  i500.defaultReflectionMode = i501[42]
  i500.defaultReflectionResolution = i501[43]
  i500.sunLightObjectId = i501[44]
  i500.pixelLightCount = i501[45]
  i500.defaultReflectionHDR = !!i501[46]
  i500.hasLightDataAsset = !!i501[47]
  i500.hasManualGenerate = !!i501[48]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'lightmapColor')
  request.r(i507[2], i507[3], 0, i506, 'lightmapDirection')
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i508 = root || new UnityEngine.LightProbes()
  var i509 = data
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i517 = data
  var i519 = i517[0]
  var i518 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i519.length; i += 1) {
    i518.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i519[i + 0]));
  }
  i516.ShaderCompilationErrors = i518
  i516.name = i517[1]
  i516.guid = i517[2]
  var i521 = i517[3]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( i521[i + 0] );
  }
  i516.shaderDefinedKeywords = i520
  var i523 = i517[4]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i523[i + 0]) );
  }
  i516.passes = i522
  var i525 = i517[5]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i525[i + 0]) );
  }
  i516.usePasses = i524
  var i527 = i517[6]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i527[i + 0]) );
  }
  i516.defaultParameterValues = i526
  request.r(i517[7], i517[8], 0, i516, 'unityFallbackShader')
  i516.readDepth = !!i517[9]
  i516.isCreatedByShaderGraph = !!i517[10]
  i516.usedBatchUniforms = i517[11]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i531 = data
  i530.shaderName = i531[0]
  i530.errorMessage = i531[1]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i534 = root || new pc.UnityShaderPass()
  var i535 = data
  i534.id = i535[0]
  i534.subShaderIndex = i535[1]
  i534.name = i535[2]
  i534.passType = i535[3]
  i534.grabPassTextureName = i535[4]
  i534.usePass = !!i535[5]
  i534.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[6], i534.zTest)
  i534.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[7], i534.zWrite)
  i534.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[8], i534.culling)
  i534.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i535[9], i534.blending)
  i534.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i535[10], i534.alphaBlending)
  i534.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[11], i534.colorWriteMask)
  i534.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[12], i534.offsetUnits)
  i534.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[13], i534.offsetFactor)
  i534.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[14], i534.stencilRef)
  i534.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[15], i534.stencilReadMask)
  i534.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[16], i534.stencilWriteMask)
  i534.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i535[17], i534.stencilOp)
  i534.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i535[18], i534.stencilOpFront)
  i534.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i535[19], i534.stencilOpBack)
  var i537 = i535[20]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i537[i + 0]) );
  }
  i534.tags = i536
  var i539 = i535[21]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( i539[i + 0] );
  }
  i534.passDefinedKeywords = i538
  var i541 = i535[22]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i541[i + 0]) );
  }
  i534.passDefinedKeywordGroups = i540
  var i543 = i535[23]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i543[i + 0]) );
  }
  i534.variants = i542
  var i545 = i535[24]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i545[i + 0]) );
  }
  i534.excludedVariants = i544
  i534.hasDepthReader = !!i535[25]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i547 = data
  i546.val = i547[0]
  i546.name = i547[1]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i549 = data
  i548.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i549[0], i548.src)
  i548.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i549[1], i548.dst)
  i548.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i549[2], i548.op)
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i551 = data
  i550.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i551[0], i550.pass)
  i550.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i551[1], i550.fail)
  i550.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i551[2], i550.zFail)
  i550.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i551[3], i550.comp)
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i555 = data
  i554.name = i555[0]
  i554.value = i555[1]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i559 = data
  var i561 = i559[0]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( i561[i + 0] );
  }
  i558.keywords = i560
  i558.hasDiscard = !!i559[1]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i565 = data
  i564.passId = i565[0]
  i564.subShaderIndex = i565[1]
  var i567 = i565[2]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( i567[i + 0] );
  }
  i564.keywords = i566
  i564.vertexProgram = i565[3]
  i564.fragmentProgram = i565[4]
  i564.compiledForWebGL2 = !!i565[5]
  i564.readDepth = !!i565[6]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'shader')
  i570.pass = i571[2]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i575 = data
  i574.name = i575[0]
  i574.type = i575[1]
  i574.value = new pc.Vec4( i575[2], i575[3], i575[4], i575[5] )
  i574.textureValue = i575[6]
  i574.shaderPropertyFlag = i575[7]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i577 = data
  i576.name = i577[0]
  request.r(i577[1], i577[2], 0, i576, 'texture')
  i576.aabb = i577[3]
  i576.vertices = i577[4]
  i576.triangles = i577[5]
  i576.textureRect = UnityEngine.Rect.MinMaxRect(i577[6], i577[7], i577[8], i577[9])
  i576.packedRect = UnityEngine.Rect.MinMaxRect(i577[10], i577[11], i577[12], i577[13])
  i576.border = new pc.Vec4( i577[14], i577[15], i577[16], i577[17] )
  i576.transparency = i577[18]
  i576.bounds = i577[19]
  i576.pixelsPerUnit = i577[20]
  i576.textureWidth = i577[21]
  i576.textureHeight = i577[22]
  i576.nativeSize = new pc.Vec2( i577[23], i577[24] )
  i576.pivot = new pc.Vec2( i577[25], i577[26] )
  i576.textureRectOffset = new pc.Vec2( i577[27], i577[28] )
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i579 = data
  i578.name = i579[0]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i581 = data
  i580.name = i581[0]
  i580.ascent = i581[1]
  i580.originalLineHeight = i581[2]
  i580.fontSize = i581[3]
  var i583 = i581[4]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i583[i + 0]) );
  }
  i580.characterInfo = i582
  request.r(i581[5], i581[6], 0, i580, 'texture')
  i580.originalFontSize = i581[7]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i587 = data
  i586.index = i587[0]
  i586.advance = i587[1]
  i586.bearing = i587[2]
  i586.glyphWidth = i587[3]
  i586.glyphHeight = i587[4]
  i586.minX = i587[5]
  i586.maxX = i587[6]
  i586.minY = i587[7]
  i586.maxY = i587[8]
  i586.uvBottomLeftX = i587[9]
  i586.uvBottomLeftY = i587[10]
  i586.uvBottomRightX = i587[11]
  i586.uvBottomRightY = i587[12]
  i586.uvTopLeftX = i587[13]
  i586.uvTopLeftY = i587[14]
  i586.uvTopRightX = i587[15]
  i586.uvTopRightY = i587[16]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i589 = data
  i588.name = i589[0]
  i588.bytes64 = i589[1]
  i588.data = i589[2]
  return i588
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i590 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i591 = data
  var i593 = i591[0]
  var i592 = []
  for(var i = 0; i < i593.length; i += 2) {
  request.r(i593[i + 0], i593[i + 1], 2, i592, '')
  }
  i590.atlasAssets = i592
  i590.scale = i591[1]
  request.r(i591[2], i591[3], 0, i590, 'skeletonJSON')
  i590.isUpgradingBlendModeMaterials = !!i591[4]
  i590.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i591[5], i590.blendModeMaterials)
  var i595 = i591[6]
  var i594 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 1, i594, '')
  }
  i590.skeletonDataModifiers = i594
  var i597 = i591[7]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( i597[i + 0] );
  }
  i590.fromAnimation = i596
  var i599 = i591[8]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( i599[i + 0] );
  }
  i590.toAnimation = i598
  i590.duration = i591[9]
  i590.defaultMix = i591[10]
  request.r(i591[11], i591[12], 0, i590, 'controller')
  return i590
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i602 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i603 = data
  i602.applyAdditiveMaterial = !!i603[0]
  var i605 = i603[1]
  var i604 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i605.length; i += 1) {
    i604.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i605[i + 0]));
  }
  i602.additiveMaterials = i604
  var i607 = i603[2]
  var i606 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i607.length; i += 1) {
    i606.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i607[i + 0]));
  }
  i602.multiplyMaterials = i606
  var i609 = i603[3]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i609.length; i += 1) {
    i608.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i609[i + 0]));
  }
  i602.screenMaterials = i608
  i602.requiresBlendModeMaterials = !!i603[4]
  return i602
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i612 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i613 = data
  i612.pageName = i613[0]
  request.r(i613[1], i613[2], 0, i612, 'material')
  return i612
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i616 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, 'atlasFile')
  var i619 = i617[2]
  var i618 = []
  for(var i = 0; i < i619.length; i += 2) {
  request.r(i619[i + 0], i619[i + 1], 2, i618, '')
  }
  i616.materials = i618
  i616.textureLoadingMode = i617[3]
  request.r(i617[4], i617[5], 0, i616, 'onDemandTextureLoader')
  return i616
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i622 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i623 = data
  i622.useSafeMode = !!i623[0]
  i622.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i623[1], i622.safeModeOptions)
  i622.timeScale = i623[2]
  i622.unscaledTimeScale = i623[3]
  i622.useSmoothDeltaTime = !!i623[4]
  i622.maxSmoothUnscaledTime = i623[5]
  i622.rewindCallbackMode = i623[6]
  i622.showUnityEditorReport = !!i623[7]
  i622.logBehaviour = i623[8]
  i622.drawGizmos = !!i623[9]
  i622.defaultRecyclable = !!i623[10]
  i622.defaultAutoPlay = i623[11]
  i622.defaultUpdateType = i623[12]
  i622.defaultTimeScaleIndependent = !!i623[13]
  i622.defaultEaseType = i623[14]
  i622.defaultEaseOvershootOrAmplitude = i623[15]
  i622.defaultEasePeriod = i623[16]
  i622.defaultAutoKill = !!i623[17]
  i622.defaultLoopType = i623[18]
  i622.debugMode = !!i623[19]
  i622.debugStoreTargetId = !!i623[20]
  i622.showPreviewPanel = !!i623[21]
  i622.storeSettingsLocation = i623[22]
  i622.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i623[23], i622.modules)
  i622.createASMDEF = !!i623[24]
  i622.showPlayingTweens = !!i623[25]
  i622.showPausedTweens = !!i623[26]
  return i622
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i624 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i625 = data
  i624.logBehaviour = i625[0]
  i624.nestedTweenFailureBehaviour = i625[1]
  return i624
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i626 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i627 = data
  i626.showPanel = !!i627[0]
  i626.audioEnabled = !!i627[1]
  i626.physicsEnabled = !!i627[2]
  i626.physics2DEnabled = !!i627[3]
  i626.spriteEnabled = !!i627[4]
  i626.uiEnabled = !!i627[5]
  i626.textMeshProEnabled = !!i627[6]
  i626.tk2DEnabled = !!i627[7]
  i626.deAudioEnabled = !!i627[8]
  i626.deUnityExtendedEnabled = !!i627[9]
  i626.epoOutlineEnabled = !!i627[10]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i629 = data
  var i631 = i629[0]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i631[i + 0]) );
  }
  i628.files = i630
  i628.componentToPrefabIds = i629[1]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i635 = data
  i634.path = i635[0]
  request.r(i635[1], i635[2], 0, i634, 'unityObject')
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i637 = data
  var i639 = i637[0]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i639[i + 0]) );
  }
  i636.scriptsExecutionOrder = i638
  var i641 = i637[1]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i641[i + 0]) );
  }
  i636.sortingLayers = i640
  var i643 = i637[2]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i643[i + 0]) );
  }
  i636.cullingLayers = i642
  i636.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i637[3], i636.timeSettings)
  i636.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i637[4], i636.physicsSettings)
  i636.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i637[5], i636.physics2DSettings)
  i636.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i637[6], i636.qualitySettings)
  i636.enableRealtimeShadows = !!i637[7]
  i636.enableAutoInstancing = !!i637[8]
  i636.enableDynamicBatching = !!i637[9]
  i636.lightmapEncodingQuality = i637[10]
  i636.desiredColorSpace = i637[11]
  var i645 = i637[12]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( i645[i + 0] );
  }
  i636.allTags = i644
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i649 = data
  i648.name = i649[0]
  i648.value = i649[1]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i653 = data
  i652.id = i653[0]
  i652.name = i653[1]
  i652.value = i653[2]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i657 = data
  i656.id = i657[0]
  i656.name = i657[1]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i659 = data
  i658.fixedDeltaTime = i659[0]
  i658.maximumDeltaTime = i659[1]
  i658.timeScale = i659[2]
  i658.maximumParticleTimestep = i659[3]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i661 = data
  i660.gravity = new pc.Vec3( i661[0], i661[1], i661[2] )
  i660.defaultSolverIterations = i661[3]
  i660.bounceThreshold = i661[4]
  i660.autoSyncTransforms = !!i661[5]
  i660.autoSimulation = !!i661[6]
  var i663 = i661[7]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i663[i + 0]) );
  }
  i660.collisionMatrix = i662
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i667 = data
  i666.enabled = !!i667[0]
  i666.layerId = i667[1]
  i666.otherLayerId = i667[2]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'material')
  i668.gravity = new pc.Vec2( i669[2], i669[3] )
  i668.positionIterations = i669[4]
  i668.velocityIterations = i669[5]
  i668.velocityThreshold = i669[6]
  i668.maxLinearCorrection = i669[7]
  i668.maxAngularCorrection = i669[8]
  i668.maxTranslationSpeed = i669[9]
  i668.maxRotationSpeed = i669[10]
  i668.baumgarteScale = i669[11]
  i668.baumgarteTOIScale = i669[12]
  i668.timeToSleep = i669[13]
  i668.linearSleepTolerance = i669[14]
  i668.angularSleepTolerance = i669[15]
  i668.defaultContactOffset = i669[16]
  i668.autoSimulation = !!i669[17]
  i668.queriesHitTriggers = !!i669[18]
  i668.queriesStartInColliders = !!i669[19]
  i668.callbacksOnDisable = !!i669[20]
  i668.reuseCollisionCallbacks = !!i669[21]
  i668.autoSyncTransforms = !!i669[22]
  var i671 = i669[23]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i671[i + 0]) );
  }
  i668.collisionMatrix = i670
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i675 = data
  i674.enabled = !!i675[0]
  i674.layerId = i675[1]
  i674.otherLayerId = i675[2]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i677 = data
  var i679 = i677[0]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i679[i + 0]) );
  }
  i676.qualityLevels = i678
  var i681 = i677[1]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( i681[i + 0] );
  }
  i676.names = i680
  i676.shadows = i677[2]
  i676.anisotropicFiltering = i677[3]
  i676.antiAliasing = i677[4]
  i676.lodBias = i677[5]
  i676.shadowCascades = i677[6]
  i676.shadowDistance = i677[7]
  i676.shadowmaskMode = i677[8]
  i676.shadowProjection = i677[9]
  i676.shadowResolution = i677[10]
  i676.softParticles = !!i677[11]
  i676.softVegetation = !!i677[12]
  i676.activeColorSpace = i677[13]
  i676.desiredColorSpace = i677[14]
  i676.masterTextureLimit = i677[15]
  i676.maxQueuedFrames = i677[16]
  i676.particleRaycastBudget = i677[17]
  i676.pixelLightCount = i677[18]
  i676.realtimeReflectionProbes = !!i677[19]
  i676.shadowCascade2Split = i677[20]
  i676.shadowCascade4Split = new pc.Vec3( i677[21], i677[22], i677[23] )
  i676.streamingMipmapsActive = !!i677[24]
  i676.vSyncCount = i677[25]
  i676.asyncUploadBufferSize = i677[26]
  i676.asyncUploadTimeSlice = i677[27]
  i676.billboardsFaceCameraPosition = !!i677[28]
  i676.shadowNearPlaneOffset = i677[29]
  i676.streamingMipmapsMemoryBudget = i677[30]
  i676.maximumLODLevel = i677[31]
  i676.streamingMipmapsAddAllCameras = !!i677[32]
  i676.streamingMipmapsMaxLevelReduction = i677[33]
  i676.streamingMipmapsRenderersPerFrame = i677[34]
  i676.resolutionScalingFixedDPIFactor = i677[35]
  i676.streamingMipmapsMaxFileIORequests = i677[36]
  i676.currentQualityLevel = i677[37]
  return i676
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[3],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[3],"71":[72],"73":[74],"75":[74],"9":[8],"76":[77],"78":[79],"80":[77],"81":[8],"82":[8],"11":[9],"20":[17,8],"83":[8],"10":[9],"84":[8],"85":[8],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"33":[8],"91":[8],"16":[17,8],"92":[8],"93":[8],"94":[8],"95":[8],"30":[17,8],"96":[8],"97":[6],"98":[6],"7":[6],"99":[6],"100":[3],"101":[3],"102":[103],"104":[3],"105":[106],"107":[8],"108":[17,8],"109":[72],"22":[17,8],"110":[111,72],"112":[72],"113":[72,114],"115":[49],"116":[57],"117":[106],"118":[119],"120":[8],"121":[72,8],"122":[8,17],"123":[8],"124":[17,8],"125":[72],"126":[17,8],"127":[8],"128":[77]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.UI.Image","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DraggableItem","UnityEngine.CanvasGroup","ClickItem","DropZone","UnityEngine.BoxCollider2D","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","IQFill","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "04/15/2025 07:07:05";

Deserializers.lunaDaysRunning = "21.1";

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

Deserializers.buildID = "2cf99db7-21b8-4871-9d91-0831ee3ae679";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

