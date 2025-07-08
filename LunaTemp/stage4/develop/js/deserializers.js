var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i344 = root || request.c( 'UnityEngine.JointSpring' )
  var i345 = data
  i344.spring = i345[0]
  i344.damper = i345[1]
  i344.targetPosition = i345[2]
  return i344
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i346 = root || request.c( 'UnityEngine.JointMotor' )
  var i347 = data
  i346.m_TargetVelocity = i347[0]
  i346.m_Force = i347[1]
  i346.m_FreeSpin = i347[2]
  return i346
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i348 = root || request.c( 'UnityEngine.JointLimits' )
  var i349 = data
  i348.m_Min = i349[0]
  i348.m_Max = i349[1]
  i348.m_Bounciness = i349[2]
  i348.m_BounceMinVelocity = i349[3]
  i348.m_ContactDistance = i349[4]
  i348.minBounce = i349[5]
  i348.maxBounce = i349[6]
  return i348
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i350 = root || request.c( 'UnityEngine.JointDrive' )
  var i351 = data
  i350.m_PositionSpring = i351[0]
  i350.m_PositionDamper = i351[1]
  i350.m_MaximumForce = i351[2]
  i350.m_UseAcceleration = i351[3]
  return i350
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i352 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i353 = data
  i352.m_Spring = i353[0]
  i352.m_Damper = i353[1]
  return i352
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i355 = data
  i354.m_Limit = i355[0]
  i354.m_Bounciness = i355[1]
  i354.m_ContactDistance = i355[2]
  return i354
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i356 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i357 = data
  i356.m_ExtremumSlip = i357[0]
  i356.m_ExtremumValue = i357[1]
  i356.m_AsymptoteSlip = i357[2]
  i356.m_AsymptoteValue = i357[3]
  i356.m_Stiffness = i357[4]
  return i356
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i358 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i359 = data
  i358.m_LowerAngle = i359[0]
  i358.m_UpperAngle = i359[1]
  return i358
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i360 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i361 = data
  i360.m_MotorSpeed = i361[0]
  i360.m_MaximumMotorTorque = i361[1]
  return i360
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i362 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i363 = data
  i362.m_DampingRatio = i363[0]
  i362.m_Frequency = i363[1]
  i362.m_Angle = i363[2]
  return i362
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i364 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i365 = data
  i364.m_LowerTranslation = i365[0]
  i364.m_UpperTranslation = i365[1]
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i367 = data
  i366.name = i367[0]
  i366.width = i367[1]
  i366.height = i367[2]
  i366.mipmapCount = i367[3]
  i366.anisoLevel = i367[4]
  i366.filterMode = i367[5]
  i366.hdr = !!i367[6]
  i366.format = i367[7]
  i366.wrapMode = i367[8]
  i366.alphaIsTransparency = !!i367[9]
  i366.alphaSource = i367[10]
  i366.graphicsFormat = i367[11]
  i366.sRGBTexture = !!i367[12]
  i366.desiredColorSpace = i367[13]
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i368 = root || new pc.UnityMaterial()
  var i369 = data
  i368.name = i369[0]
  request.r(i369[1], i369[2], 0, i368, 'shader')
  i368.renderQueue = i369[3]
  i368.enableInstancing = !!i369[4]
  var i371 = i369[5]
  var i370 = []
  for(var i = 0; i < i371.length; i += 1) {
    i370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i371[i + 0]) );
  }
  i368.floatParameters = i370
  var i373 = i369[6]
  var i372 = []
  for(var i = 0; i < i373.length; i += 1) {
    i372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i373[i + 0]) );
  }
  i368.colorParameters = i372
  var i375 = i369[7]
  var i374 = []
  for(var i = 0; i < i375.length; i += 1) {
    i374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i375[i + 0]) );
  }
  i368.vectorParameters = i374
  var i377 = i369[8]
  var i376 = []
  for(var i = 0; i < i377.length; i += 1) {
    i376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i377[i + 0]) );
  }
  i368.textureParameters = i376
  var i379 = i369[9]
  var i378 = []
  for(var i = 0; i < i379.length; i += 1) {
    i378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i379[i + 0]) );
  }
  i368.materialFlags = i378
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i383 = data
  i382.name = i383[0]
  i382.value = i383[1]
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i387 = data
  i386.name = i387[0]
  i386.value = new pc.Color(i387[1], i387[2], i387[3], i387[4])
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i391 = data
  i390.name = i391[0]
  i390.value = new pc.Vec4( i391[1], i391[2], i391[3], i391[4] )
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i395 = data
  i394.name = i395[0]
  request.r(i395[1], i395[2], 0, i394, 'value')
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i399 = data
  i398.name = i399[0]
  i398.enabled = !!i399[1]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i401 = data
  i400.name = i401[0]
  i400.index = i401[1]
  i400.startup = !!i401[2]
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i403 = data
  i402.position = new pc.Vec3( i403[0], i403[1], i403[2] )
  i402.scale = new pc.Vec3( i403[3], i403[4], i403[5] )
  i402.rotation = new pc.Quat(i403[6], i403[7], i403[8], i403[9])
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i405 = data
  i404.enabled = !!i405[0]
  i404.aspect = i405[1]
  i404.orthographic = !!i405[2]
  i404.orthographicSize = i405[3]
  i404.backgroundColor = new pc.Color(i405[4], i405[5], i405[6], i405[7])
  i404.nearClipPlane = i405[8]
  i404.farClipPlane = i405[9]
  i404.fieldOfView = i405[10]
  i404.depth = i405[11]
  i404.clearFlags = i405[12]
  i404.cullingMask = i405[13]
  i404.rect = i405[14]
  request.r(i405[15], i405[16], 0, i404, 'targetTexture')
  i404.usePhysicalProperties = !!i405[17]
  i404.focalLength = i405[18]
  i404.sensorSize = new pc.Vec2( i405[19], i405[20] )
  i404.lensShift = new pc.Vec2( i405[21], i405[22] )
  i404.gateFit = i405[23]
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i407 = data
  i406.name = i407[0]
  i406.tagId = i407[1]
  i406.enabled = !!i407[2]
  i406.isStatic = !!i407[3]
  i406.layer = i407[4]
  return i406
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i409 = data
  request.r(i409[0], i409[1], 0, i408, 'm_FirstSelected')
  i408.m_sendNavigationEvents = !!i409[2]
  i408.m_DragThreshold = i409[3]
  return i408
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i411 = data
  i410.m_HorizontalAxis = i411[0]
  i410.m_VerticalAxis = i411[1]
  i410.m_SubmitButton = i411[2]
  i410.m_CancelButton = i411[3]
  i410.m_InputActionsPerSecond = i411[4]
  i410.m_RepeatDelay = i411[5]
  i410.m_ForceModuleActive = !!i411[6]
  i410.m_SendPointerHoverToParent = !!i411[7]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i413 = data
  i412.pivot = new pc.Vec2( i413[0], i413[1] )
  i412.anchorMin = new pc.Vec2( i413[2], i413[3] )
  i412.anchorMax = new pc.Vec2( i413[4], i413[5] )
  i412.sizeDelta = new pc.Vec2( i413[6], i413[7] )
  i412.anchoredPosition3D = new pc.Vec3( i413[8], i413[9], i413[10] )
  i412.rotation = new pc.Quat(i413[11], i413[12], i413[13], i413[14])
  i412.scale = new pc.Vec3( i413[15], i413[16], i413[17] )
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i415 = data
  i414.enabled = !!i415[0]
  i414.planeDistance = i415[1]
  i414.referencePixelsPerUnit = i415[2]
  i414.isFallbackOverlay = !!i415[3]
  i414.renderMode = i415[4]
  i414.renderOrder = i415[5]
  i414.sortingLayerName = i415[6]
  i414.sortingOrder = i415[7]
  i414.scaleFactor = i415[8]
  request.r(i415[9], i415[10], 0, i414, 'worldCamera')
  i414.overrideSorting = !!i415[11]
  i414.pixelPerfect = !!i415[12]
  i414.targetDisplay = i415[13]
  i414.overridePixelPerfect = !!i415[14]
  return i414
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i417 = data
  i416.m_UiScaleMode = i417[0]
  i416.m_ReferencePixelsPerUnit = i417[1]
  i416.m_ScaleFactor = i417[2]
  i416.m_ReferenceResolution = new pc.Vec2( i417[3], i417[4] )
  i416.m_ScreenMatchMode = i417[5]
  i416.m_MatchWidthOrHeight = i417[6]
  i416.m_PhysicalUnit = i417[7]
  i416.m_FallbackScreenDPI = i417[8]
  i416.m_DefaultSpriteDPI = i417[9]
  i416.m_DynamicPixelsPerUnit = i417[10]
  i416.m_PresetInfoIsWorld = !!i417[11]
  return i416
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i419 = data
  i418.m_IgnoreReversedGraphics = !!i419[0]
  i418.m_BlockingObjects = i419[1]
  i418.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i419[2] )
  return i418
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i420 = root || request.c( 'LunaManager' )
  var i421 = data
  var i423 = i421[0]
  var i422 = []
  for(var i = 0; i < i423.length; i += 2) {
  request.r(i423[i + 0], i423[i + 1], 2, i422, '')
  }
  i420.lstBtnInstall = i422
  request.r(i421[1], i421[2], 0, i420, 'EndCard')
  i420.countPlay = i421[3]
  i420.countPlayFinal = i421[4]
  i420.timeDropFinal = i421[5]
  i420.colorBG = new pc.Color(i421[6], i421[7], i421[8], i421[9])
  request.r(i421[10], i421[11], 0, i420, 'texture2D')
  request.r(i421[12], i421[13], 0, i420, 'rawImageBG')
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i427 = data
  i426.cullTransparentMesh = !!i427[0]
  return i426
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i429 = data
  request.r(i429[0], i429[1], 0, i428, 'm_Texture')
  i428.m_UVRect = UnityEngine.Rect.MinMaxRect(i429[2], i429[3], i429[4], i429[5])
  request.r(i429[6], i429[7], 0, i428, 'm_Material')
  i428.m_Maskable = !!i429[8]
  i428.m_Color = new pc.Color(i429[9], i429[10], i429[11], i429[12])
  i428.m_RaycastTarget = !!i429[13]
  i428.m_RaycastPadding = new pc.Vec4( i429[14], i429[15], i429[16], i429[17] )
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i431 = data
  request.r(i431[0], i431[1], 0, i430, 'clip')
  request.r(i431[2], i431[3], 0, i430, 'outputAudioMixerGroup')
  i430.playOnAwake = !!i431[4]
  i430.loop = !!i431[5]
  i430.time = i431[6]
  i430.volume = i431[7]
  i430.pitch = i431[8]
  i430.enabled = !!i431[9]
  return i430
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.UI.Image' )
  var i433 = data
  request.r(i433[0], i433[1], 0, i432, 'm_Sprite')
  i432.m_Type = i433[2]
  i432.m_PreserveAspect = !!i433[3]
  i432.m_FillCenter = !!i433[4]
  i432.m_FillMethod = i433[5]
  i432.m_FillAmount = i433[6]
  i432.m_FillClockwise = !!i433[7]
  i432.m_FillOrigin = i433[8]
  i432.m_UseSpriteMesh = !!i433[9]
  i432.m_PixelsPerUnitMultiplier = i433[10]
  request.r(i433[11], i433[12], 0, i432, 'm_Material')
  i432.m_Maskable = !!i433[13]
  i432.m_Color = new pc.Color(i433[14], i433[15], i433[16], i433[17])
  i432.m_RaycastTarget = !!i433[18]
  i432.m_RaycastPadding = new pc.Vec4( i433[19], i433[20], i433[21], i433[22] )
  return i432
}

Deserializers["DropZone"] = function (request, data, root) {
  var i434 = root || request.c( 'DropZone' )
  var i435 = data
  i434.idDrop = i435[0]
  var i437 = i435[1]
  var i436 = []
  for(var i = 0; i < i437.length; i += 2) {
  request.r(i437[i + 0], i437[i + 1], 2, i436, '')
  }
  i434.steps = i436
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i441 = data
  i440.usedByComposite = !!i441[0]
  i440.autoTiling = !!i441[1]
  i440.size = new pc.Vec2( i441[2], i441[3] )
  i440.edgeRadius = i441[4]
  i440.enabled = !!i441[5]
  i440.isTrigger = !!i441[6]
  i440.usedByEffector = !!i441[7]
  i440.density = i441[8]
  i440.offset = new pc.Vec2( i441[9], i441[10] )
  request.r(i441[11], i441[12], 0, i440, 'material')
  return i440
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.UI.Button' )
  var i443 = data
  i442.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i443[0], i442.m_OnClick)
  i442.m_Navigation = request.d('UnityEngine.UI.Navigation', i443[1], i442.m_Navigation)
  i442.m_Transition = i443[2]
  i442.m_Colors = request.d('UnityEngine.UI.ColorBlock', i443[3], i442.m_Colors)
  i442.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i443[4], i442.m_SpriteState)
  i442.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i443[5], i442.m_AnimationTriggers)
  i442.m_Interactable = !!i443[6]
  request.r(i443[7], i443[8], 0, i442, 'm_TargetGraphic')
  return i442
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i445 = data
  i444.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i445[0], i444.m_PersistentCalls)
  return i444
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i447 = data
  var i449 = i447[0]
  var i448 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i449.length; i += 1) {
    i448.add(request.d('UnityEngine.Events.PersistentCall', i449[i + 0]));
  }
  i446.m_Calls = i448
  return i446
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i453 = data
  request.r(i453[0], i453[1], 0, i452, 'm_Target')
  i452.m_TargetAssemblyTypeName = i453[2]
  i452.m_MethodName = i453[3]
  i452.m_Mode = i453[4]
  i452.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i453[5], i452.m_Arguments)
  i452.m_CallState = i453[6]
  return i452
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i455 = data
  request.r(i455[0], i455[1], 0, i454, 'm_ObjectArgument')
  i454.m_ObjectArgumentAssemblyTypeName = i455[2]
  i454.m_IntArgument = i455[3]
  i454.m_FloatArgument = i455[4]
  i454.m_StringArgument = i455[5]
  i454.m_BoolArgument = !!i455[6]
  return i454
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i457 = data
  i456.m_Mode = i457[0]
  i456.m_WrapAround = !!i457[1]
  request.r(i457[2], i457[3], 0, i456, 'm_SelectOnUp')
  request.r(i457[4], i457[5], 0, i456, 'm_SelectOnDown')
  request.r(i457[6], i457[7], 0, i456, 'm_SelectOnLeft')
  request.r(i457[8], i457[9], 0, i456, 'm_SelectOnRight')
  return i456
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i459 = data
  i458.m_NormalColor = new pc.Color(i459[0], i459[1], i459[2], i459[3])
  i458.m_HighlightedColor = new pc.Color(i459[4], i459[5], i459[6], i459[7])
  i458.m_PressedColor = new pc.Color(i459[8], i459[9], i459[10], i459[11])
  i458.m_SelectedColor = new pc.Color(i459[12], i459[13], i459[14], i459[15])
  i458.m_DisabledColor = new pc.Color(i459[16], i459[17], i459[18], i459[19])
  i458.m_ColorMultiplier = i459[20]
  i458.m_FadeDuration = i459[21]
  return i458
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i461 = data
  request.r(i461[0], i461[1], 0, i460, 'm_HighlightedSprite')
  request.r(i461[2], i461[3], 0, i460, 'm_PressedSprite')
  request.r(i461[4], i461[5], 0, i460, 'm_SelectedSprite')
  request.r(i461[6], i461[7], 0, i460, 'm_DisabledSprite')
  return i460
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i463 = data
  i462.m_NormalTrigger = i463[0]
  i462.m_HighlightedTrigger = i463[1]
  i462.m_PressedTrigger = i463[2]
  i462.m_SelectedTrigger = i463[3]
  i462.m_DisabledTrigger = i463[4]
  return i462
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i464 = root || request.c( 'ClickItem' )
  var i465 = data
  i464.isPhone = !!i465[0]
  var i467 = i465[1]
  var i466 = []
  for(var i = 0; i < i467.length; i += 2) {
  request.r(i467[i + 0], i467[i + 1], 2, i466, '')
  }
  i464.steps = i466
  i464.currentStep = i465[2]
  return i464
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i468 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i469 = data
  request.r(i469[0], i469[1], 0, i468, 'skeletonDataAsset')
  request.r(i469[2], i469[3], 0, i468, 'additiveMaterial')
  request.r(i469[4], i469[5], 0, i468, 'multiplyMaterial')
  request.r(i469[6], i469[7], 0, i468, 'screenMaterial')
  i468.initialSkinName = i469[8]
  i468.initialFlipX = !!i469[9]
  i468.initialFlipY = !!i469[10]
  i468.startingAnimation = i469[11]
  i468.startingLoop = !!i469[12]
  i468.timeScale = i469[13]
  i468.freeze = !!i469[14]
  i468.layoutScaleMode = i469[15]
  i468.updateWhenInvisible = i469[16]
  i468.allowMultipleCanvasRenderers = !!i469[17]
  var i471 = i469[18]
  var i470 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i471.length; i += 2) {
  request.r(i471[i + 0], i471[i + 1], 1, i470, '')
  }
  i468.canvasRenderers = i470
  i468.enableSeparatorSlots = !!i469[19]
  i468.updateSeparatorPartLocation = !!i469[20]
  i468.updateSeparatorPartScale = !!i469[21]
  i468.disableMeshAssignmentOnOverride = !!i469[22]
  i468.referenceSize = new pc.Vec2( i469[23], i469[24] )
  i468.referenceScale = i469[25]
  i468.rectTransformSize = new pc.Vec2( i469[26], i469[27] )
  i468.editReferenceRect = !!i469[28]
  var i473 = i469[29]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( i473[i + 0] );
  }
  i468.separatorSlotNames = i472
  var i475 = i469[30]
  var i474 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i475.length; i += 2) {
  request.r(i475[i + 0], i475[i + 1], 1, i474, '')
  }
  i468.separatorParts = i474
  i468.meshGenerator = request.d('Spine.Unity.MeshGenerator', i469[31], i468.meshGenerator)
  i468.updateTiming = i469[32]
  i468.unscaledTime = !!i469[33]
  request.r(i469[34], i469[35], 0, i468, 'm_Material')
  i468.m_Maskable = !!i469[36]
  i468.m_Color = new pc.Color(i469[37], i469[38], i469[39], i469[40])
  i468.m_RaycastTarget = !!i469[41]
  i468.m_RaycastPadding = new pc.Vec4( i469[42], i469[43], i469[44], i469[45] )
  return i468
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i482 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i483 = data
  i482.settings = request.d('Spine.Unity.MeshGenerator+Settings', i483[0], i482.settings)
  return i482
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i484 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i485 = data
  i484.useClipping = !!i485[0]
  i484.zSpacing = i485[1]
  i484.pmaVertexColors = !!i485[2]
  i484.tintBlack = !!i485[3]
  i484.canvasGroupTintBlack = !!i485[4]
  i484.calculateTangents = !!i485[5]
  i484.addNormals = !!i485[6]
  i484.immutableTriangles = !!i485[7]
  return i484
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i486 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i487 = data
  i486.targetIsSelf = !!i487[0]
  request.r(i487[1], i487[2], 0, i486, 'targetGO')
  i486.tweenTargetIsTargetGO = !!i487[3]
  i486.delay = i487[4]
  i486.duration = i487[5]
  i486.easeType = i487[6]
  i486.easeCurve = new pc.AnimationCurve( { keys_flow: i487[7] } )
  i486.loopType = i487[8]
  i486.loops = i487[9]
  i486.id = i487[10]
  i486.isRelative = !!i487[11]
  i486.isFrom = !!i487[12]
  i486.isIndependentUpdate = !!i487[13]
  i486.autoKill = !!i487[14]
  i486.autoGenerate = !!i487[15]
  i486.isActive = !!i487[16]
  i486.isValid = !!i487[17]
  request.r(i487[18], i487[19], 0, i486, 'target')
  i486.animationType = i487[20]
  i486.targetType = i487[21]
  i486.forcedTargetType = i487[22]
  i486.autoPlay = !!i487[23]
  i486.useTargetAsV3 = !!i487[24]
  i486.endValueFloat = i487[25]
  i486.endValueV3 = new pc.Vec3( i487[26], i487[27], i487[28] )
  i486.endValueV2 = new pc.Vec2( i487[29], i487[30] )
  i486.endValueColor = new pc.Color(i487[31], i487[32], i487[33], i487[34])
  i486.endValueString = i487[35]
  i486.endValueRect = UnityEngine.Rect.MinMaxRect(i487[36], i487[37], i487[38], i487[39])
  request.r(i487[40], i487[41], 0, i486, 'endValueTransform')
  i486.optionalBool0 = !!i487[42]
  i486.optionalBool1 = !!i487[43]
  i486.optionalFloat0 = i487[44]
  i486.optionalInt0 = i487[45]
  i486.optionalRotationMode = i487[46]
  i486.optionalScrambleMode = i487[47]
  i486.optionalShakeRandomnessMode = i487[48]
  i486.optionalString = i487[49]
  i486.updateType = i487[50]
  i486.isSpeedBased = !!i487[51]
  i486.hasOnStart = !!i487[52]
  i486.hasOnPlay = !!i487[53]
  i486.hasOnUpdate = !!i487[54]
  i486.hasOnStepComplete = !!i487[55]
  i486.hasOnComplete = !!i487[56]
  i486.hasOnTweenCreated = !!i487[57]
  i486.hasOnRewind = !!i487[58]
  i486.onStart = request.d('UnityEngine.Events.UnityEvent', i487[59], i486.onStart)
  i486.onPlay = request.d('UnityEngine.Events.UnityEvent', i487[60], i486.onPlay)
  i486.onUpdate = request.d('UnityEngine.Events.UnityEvent', i487[61], i486.onUpdate)
  i486.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i487[62], i486.onStepComplete)
  i486.onComplete = request.d('UnityEngine.Events.UnityEvent', i487[63], i486.onComplete)
  i486.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i487[64], i486.onTweenCreated)
  i486.onRewind = request.d('UnityEngine.Events.UnityEvent', i487[65], i486.onRewind)
  return i486
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i489 = data
  i488.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i489[0], i488.m_PersistentCalls)
  return i488
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i490 = root || request.c( 'DraggableItem' )
  var i491 = data
  i490.idDrag = i491[0]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i493 = data
  i492.m_Alpha = i493[0]
  i492.m_Interactable = !!i493[1]
  i492.m_BlocksRaycasts = !!i493[2]
  i492.m_IgnoreParentGroups = !!i493[3]
  i492.enabled = !!i493[4]
  return i492
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i495 = data
  i494.m_Spacing = i495[0]
  i494.m_ChildForceExpandWidth = !!i495[1]
  i494.m_ChildForceExpandHeight = !!i495[2]
  i494.m_ChildControlWidth = !!i495[3]
  i494.m_ChildControlHeight = !!i495[4]
  i494.m_ChildScaleWidth = !!i495[5]
  i494.m_ChildScaleHeight = !!i495[6]
  i494.m_ReverseArrangement = !!i495[7]
  i494.m_Padding = UnityEngine.RectOffset.FromPaddings(i495[8], i495[9], i495[10], i495[11])
  i494.m_ChildAlignment = i495[12]
  return i494
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.UI.Text' )
  var i497 = data
  i496.m_FontData = request.d('UnityEngine.UI.FontData', i497[0], i496.m_FontData)
  i496.m_Text = i497[1]
  request.r(i497[2], i497[3], 0, i496, 'm_Material')
  i496.m_Maskable = !!i497[4]
  i496.m_Color = new pc.Color(i497[5], i497[6], i497[7], i497[8])
  i496.m_RaycastTarget = !!i497[9]
  i496.m_RaycastPadding = new pc.Vec4( i497[10], i497[11], i497[12], i497[13] )
  return i496
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.UI.FontData' )
  var i499 = data
  request.r(i499[0], i499[1], 0, i498, 'm_Font')
  i498.m_FontSize = i499[2]
  i498.m_FontStyle = i499[3]
  i498.m_BestFit = !!i499[4]
  i498.m_MinSize = i499[5]
  i498.m_MaxSize = i499[6]
  i498.m_Alignment = i499[7]
  i498.m_AlignByGeometry = !!i499[8]
  i498.m_RichText = !!i499[9]
  i498.m_HorizontalOverflow = i499[10]
  i498.m_VerticalOverflow = i499[11]
  i498.m_LineSpacing = i499[12]
  return i498
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.UI.Mask' )
  var i501 = data
  i500.m_ShowMaskGraphic = !!i501[0]
  return i500
}

Deserializers["IQFill"] = function (request, data, root) {
  var i502 = root || request.c( 'IQFill' )
  var i503 = data
  request.r(i503[0], i503[1], 0, i502, 'fillImage')
  i502.maxFillAmount = i503[2]
  i502.fillDuration = i503[3]
  i502.maxValue = i503[4]
  i502.addValue = i503[5]
  i502.fillEase = i503[6]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i505 = data
  i504.ambientIntensity = i505[0]
  i504.reflectionIntensity = i505[1]
  i504.ambientMode = i505[2]
  i504.ambientLight = new pc.Color(i505[3], i505[4], i505[5], i505[6])
  i504.ambientSkyColor = new pc.Color(i505[7], i505[8], i505[9], i505[10])
  i504.ambientGroundColor = new pc.Color(i505[11], i505[12], i505[13], i505[14])
  i504.ambientEquatorColor = new pc.Color(i505[15], i505[16], i505[17], i505[18])
  i504.fogColor = new pc.Color(i505[19], i505[20], i505[21], i505[22])
  i504.fogEndDistance = i505[23]
  i504.fogStartDistance = i505[24]
  i504.fogDensity = i505[25]
  i504.fog = !!i505[26]
  request.r(i505[27], i505[28], 0, i504, 'skybox')
  i504.fogMode = i505[29]
  var i507 = i505[30]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i507[i + 0]) );
  }
  i504.lightmaps = i506
  i504.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i505[31], i504.lightProbes)
  i504.lightmapsMode = i505[32]
  i504.mixedBakeMode = i505[33]
  i504.environmentLightingMode = i505[34]
  i504.ambientProbe = new pc.SphericalHarmonicsL2(i505[35])
  i504.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i505[36])
  i504.useReferenceAmbientProbe = !!i505[37]
  request.r(i505[38], i505[39], 0, i504, 'customReflection')
  request.r(i505[40], i505[41], 0, i504, 'defaultReflection')
  i504.defaultReflectionMode = i505[42]
  i504.defaultReflectionResolution = i505[43]
  i504.sunLightObjectId = i505[44]
  i504.pixelLightCount = i505[45]
  i504.defaultReflectionHDR = !!i505[46]
  i504.hasLightDataAsset = !!i505[47]
  i504.hasManualGenerate = !!i505[48]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'lightmapColor')
  request.r(i511[2], i511[3], 0, i510, 'lightmapDirection')
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i512 = root || new UnityEngine.LightProbes()
  var i513 = data
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i521 = data
  var i523 = i521[0]
  var i522 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i523.length; i += 1) {
    i522.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i523[i + 0]));
  }
  i520.ShaderCompilationErrors = i522
  i520.name = i521[1]
  i520.guid = i521[2]
  var i525 = i521[3]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( i525[i + 0] );
  }
  i520.shaderDefinedKeywords = i524
  var i527 = i521[4]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i527[i + 0]) );
  }
  i520.passes = i526
  var i529 = i521[5]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i529[i + 0]) );
  }
  i520.usePasses = i528
  var i531 = i521[6]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i531[i + 0]) );
  }
  i520.defaultParameterValues = i530
  request.r(i521[7], i521[8], 0, i520, 'unityFallbackShader')
  i520.readDepth = !!i521[9]
  i520.isCreatedByShaderGraph = !!i521[10]
  i520.usedBatchUniforms = i521[11]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i535 = data
  i534.shaderName = i535[0]
  i534.errorMessage = i535[1]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i538 = root || new pc.UnityShaderPass()
  var i539 = data
  i538.id = i539[0]
  i538.subShaderIndex = i539[1]
  i538.name = i539[2]
  i538.passType = i539[3]
  i538.grabPassTextureName = i539[4]
  i538.usePass = !!i539[5]
  i538.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i539[6], i538.zTest)
  i538.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i539[7], i538.zWrite)
  i538.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i539[8], i538.culling)
  i538.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i539[9], i538.blending)
  i538.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i539[10], i538.alphaBlending)
  i538.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i539[11], i538.colorWriteMask)
  i538.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i539[12], i538.offsetUnits)
  i538.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i539[13], i538.offsetFactor)
  i538.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i539[14], i538.stencilRef)
  i538.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i539[15], i538.stencilReadMask)
  i538.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i539[16], i538.stencilWriteMask)
  i538.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i539[17], i538.stencilOp)
  i538.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i539[18], i538.stencilOpFront)
  i538.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i539[19], i538.stencilOpBack)
  var i541 = i539[20]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i541[i + 0]) );
  }
  i538.tags = i540
  var i543 = i539[21]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( i543[i + 0] );
  }
  i538.passDefinedKeywords = i542
  var i545 = i539[22]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i545[i + 0]) );
  }
  i538.passDefinedKeywordGroups = i544
  var i547 = i539[23]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i547[i + 0]) );
  }
  i538.variants = i546
  var i549 = i539[24]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i549[i + 0]) );
  }
  i538.excludedVariants = i548
  i538.hasDepthReader = !!i539[25]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i551 = data
  i550.val = i551[0]
  i550.name = i551[1]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i553 = data
  i552.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i553[0], i552.src)
  i552.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i553[1], i552.dst)
  i552.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i553[2], i552.op)
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i555 = data
  i554.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i555[0], i554.pass)
  i554.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i555[1], i554.fail)
  i554.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i555[2], i554.zFail)
  i554.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i555[3], i554.comp)
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i559 = data
  i558.name = i559[0]
  i558.value = i559[1]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i563 = data
  var i565 = i563[0]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( i565[i + 0] );
  }
  i562.keywords = i564
  i562.hasDiscard = !!i563[1]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i569 = data
  i568.passId = i569[0]
  i568.subShaderIndex = i569[1]
  var i571 = i569[2]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( i571[i + 0] );
  }
  i568.keywords = i570
  i568.vertexProgram = i569[3]
  i568.fragmentProgram = i569[4]
  i568.compiledForWebGL2 = !!i569[5]
  i568.readDepth = !!i569[6]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i575 = data
  request.r(i575[0], i575[1], 0, i574, 'shader')
  i574.pass = i575[2]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i579 = data
  i578.name = i579[0]
  i578.type = i579[1]
  i578.value = new pc.Vec4( i579[2], i579[3], i579[4], i579[5] )
  i578.textureValue = i579[6]
  i578.shaderPropertyFlag = i579[7]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i581 = data
  i580.name = i581[0]
  request.r(i581[1], i581[2], 0, i580, 'texture')
  i580.aabb = i581[3]
  i580.vertices = i581[4]
  i580.triangles = i581[5]
  i580.textureRect = UnityEngine.Rect.MinMaxRect(i581[6], i581[7], i581[8], i581[9])
  i580.packedRect = UnityEngine.Rect.MinMaxRect(i581[10], i581[11], i581[12], i581[13])
  i580.border = new pc.Vec4( i581[14], i581[15], i581[16], i581[17] )
  i580.transparency = i581[18]
  i580.bounds = i581[19]
  i580.pixelsPerUnit = i581[20]
  i580.textureWidth = i581[21]
  i580.textureHeight = i581[22]
  i580.nativeSize = new pc.Vec2( i581[23], i581[24] )
  i580.pivot = new pc.Vec2( i581[25], i581[26] )
  i580.textureRectOffset = new pc.Vec2( i581[27], i581[28] )
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i583 = data
  i582.name = i583[0]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i585 = data
  i584.name = i585[0]
  i584.ascent = i585[1]
  i584.originalLineHeight = i585[2]
  i584.fontSize = i585[3]
  var i587 = i585[4]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i587[i + 0]) );
  }
  i584.characterInfo = i586
  request.r(i585[5], i585[6], 0, i584, 'texture')
  i584.originalFontSize = i585[7]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i591 = data
  i590.index = i591[0]
  i590.advance = i591[1]
  i590.bearing = i591[2]
  i590.glyphWidth = i591[3]
  i590.glyphHeight = i591[4]
  i590.minX = i591[5]
  i590.maxX = i591[6]
  i590.minY = i591[7]
  i590.maxY = i591[8]
  i590.uvBottomLeftX = i591[9]
  i590.uvBottomLeftY = i591[10]
  i590.uvBottomRightX = i591[11]
  i590.uvBottomRightY = i591[12]
  i590.uvTopLeftX = i591[13]
  i590.uvTopLeftY = i591[14]
  i590.uvTopRightX = i591[15]
  i590.uvTopRightY = i591[16]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i593 = data
  i592.name = i593[0]
  i592.bytes64 = i593[1]
  i592.data = i593[2]
  return i592
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i594 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i595 = data
  var i597 = i595[0]
  var i596 = []
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 2, i596, '')
  }
  i594.atlasAssets = i596
  i594.scale = i595[1]
  request.r(i595[2], i595[3], 0, i594, 'skeletonJSON')
  i594.isUpgradingBlendModeMaterials = !!i595[4]
  i594.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i595[5], i594.blendModeMaterials)
  var i599 = i595[6]
  var i598 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i599.length; i += 2) {
  request.r(i599[i + 0], i599[i + 1], 1, i598, '')
  }
  i594.skeletonDataModifiers = i598
  var i601 = i595[7]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( i601[i + 0] );
  }
  i594.fromAnimation = i600
  var i603 = i595[8]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( i603[i + 0] );
  }
  i594.toAnimation = i602
  i594.duration = i595[9]
  i594.defaultMix = i595[10]
  request.r(i595[11], i595[12], 0, i594, 'controller')
  return i594
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i606 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i607 = data
  i606.applyAdditiveMaterial = !!i607[0]
  var i609 = i607[1]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i609.length; i += 1) {
    i608.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i609[i + 0]));
  }
  i606.additiveMaterials = i608
  var i611 = i607[2]
  var i610 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i611.length; i += 1) {
    i610.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i611[i + 0]));
  }
  i606.multiplyMaterials = i610
  var i613 = i607[3]
  var i612 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i613.length; i += 1) {
    i612.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i613[i + 0]));
  }
  i606.screenMaterials = i612
  i606.requiresBlendModeMaterials = !!i607[4]
  return i606
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i616 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i617 = data
  i616.pageName = i617[0]
  request.r(i617[1], i617[2], 0, i616, 'material')
  return i616
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i620 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'atlasFile')
  var i623 = i621[2]
  var i622 = []
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 2, i622, '')
  }
  i620.materials = i622
  i620.textureLoadingMode = i621[3]
  request.r(i621[4], i621[5], 0, i620, 'onDemandTextureLoader')
  return i620
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i626 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i627 = data
  i626.useSafeMode = !!i627[0]
  i626.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i627[1], i626.safeModeOptions)
  i626.timeScale = i627[2]
  i626.unscaledTimeScale = i627[3]
  i626.useSmoothDeltaTime = !!i627[4]
  i626.maxSmoothUnscaledTime = i627[5]
  i626.rewindCallbackMode = i627[6]
  i626.showUnityEditorReport = !!i627[7]
  i626.logBehaviour = i627[8]
  i626.drawGizmos = !!i627[9]
  i626.defaultRecyclable = !!i627[10]
  i626.defaultAutoPlay = i627[11]
  i626.defaultUpdateType = i627[12]
  i626.defaultTimeScaleIndependent = !!i627[13]
  i626.defaultEaseType = i627[14]
  i626.defaultEaseOvershootOrAmplitude = i627[15]
  i626.defaultEasePeriod = i627[16]
  i626.defaultAutoKill = !!i627[17]
  i626.defaultLoopType = i627[18]
  i626.debugMode = !!i627[19]
  i626.debugStoreTargetId = !!i627[20]
  i626.showPreviewPanel = !!i627[21]
  i626.storeSettingsLocation = i627[22]
  i626.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i627[23], i626.modules)
  i626.createASMDEF = !!i627[24]
  i626.showPlayingTweens = !!i627[25]
  i626.showPausedTweens = !!i627[26]
  return i626
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i628 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i629 = data
  i628.logBehaviour = i629[0]
  i628.nestedTweenFailureBehaviour = i629[1]
  return i628
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i630 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i631 = data
  i630.showPanel = !!i631[0]
  i630.audioEnabled = !!i631[1]
  i630.physicsEnabled = !!i631[2]
  i630.physics2DEnabled = !!i631[3]
  i630.spriteEnabled = !!i631[4]
  i630.uiEnabled = !!i631[5]
  i630.textMeshProEnabled = !!i631[6]
  i630.tk2DEnabled = !!i631[7]
  i630.deAudioEnabled = !!i631[8]
  i630.deUnityExtendedEnabled = !!i631[9]
  i630.epoOutlineEnabled = !!i631[10]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i633 = data
  var i635 = i633[0]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i635[i + 0]) );
  }
  i632.files = i634
  i632.componentToPrefabIds = i633[1]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i639 = data
  i638.path = i639[0]
  request.r(i639[1], i639[2], 0, i638, 'unityObject')
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i641 = data
  var i643 = i641[0]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i643[i + 0]) );
  }
  i640.scriptsExecutionOrder = i642
  var i645 = i641[1]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i645[i + 0]) );
  }
  i640.sortingLayers = i644
  var i647 = i641[2]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i647[i + 0]) );
  }
  i640.cullingLayers = i646
  i640.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i641[3], i640.timeSettings)
  i640.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i641[4], i640.physicsSettings)
  i640.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i641[5], i640.physics2DSettings)
  i640.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i641[6], i640.qualitySettings)
  i640.enableRealtimeShadows = !!i641[7]
  i640.enableAutoInstancing = !!i641[8]
  i640.enableDynamicBatching = !!i641[9]
  i640.lightmapEncodingQuality = i641[10]
  i640.desiredColorSpace = i641[11]
  var i649 = i641[12]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( i649[i + 0] );
  }
  i640.allTags = i648
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i653 = data
  i652.name = i653[0]
  i652.value = i653[1]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i657 = data
  i656.id = i657[0]
  i656.name = i657[1]
  i656.value = i657[2]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i661 = data
  i660.id = i661[0]
  i660.name = i661[1]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i663 = data
  i662.fixedDeltaTime = i663[0]
  i662.maximumDeltaTime = i663[1]
  i662.timeScale = i663[2]
  i662.maximumParticleTimestep = i663[3]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i665 = data
  i664.gravity = new pc.Vec3( i665[0], i665[1], i665[2] )
  i664.defaultSolverIterations = i665[3]
  i664.bounceThreshold = i665[4]
  i664.autoSyncTransforms = !!i665[5]
  i664.autoSimulation = !!i665[6]
  var i667 = i665[7]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i667[i + 0]) );
  }
  i664.collisionMatrix = i666
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i671 = data
  i670.enabled = !!i671[0]
  i670.layerId = i671[1]
  i670.otherLayerId = i671[2]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'material')
  i672.gravity = new pc.Vec2( i673[2], i673[3] )
  i672.positionIterations = i673[4]
  i672.velocityIterations = i673[5]
  i672.velocityThreshold = i673[6]
  i672.maxLinearCorrection = i673[7]
  i672.maxAngularCorrection = i673[8]
  i672.maxTranslationSpeed = i673[9]
  i672.maxRotationSpeed = i673[10]
  i672.baumgarteScale = i673[11]
  i672.baumgarteTOIScale = i673[12]
  i672.timeToSleep = i673[13]
  i672.linearSleepTolerance = i673[14]
  i672.angularSleepTolerance = i673[15]
  i672.defaultContactOffset = i673[16]
  i672.autoSimulation = !!i673[17]
  i672.queriesHitTriggers = !!i673[18]
  i672.queriesStartInColliders = !!i673[19]
  i672.callbacksOnDisable = !!i673[20]
  i672.reuseCollisionCallbacks = !!i673[21]
  i672.autoSyncTransforms = !!i673[22]
  var i675 = i673[23]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i675[i + 0]) );
  }
  i672.collisionMatrix = i674
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i679 = data
  i678.enabled = !!i679[0]
  i678.layerId = i679[1]
  i678.otherLayerId = i679[2]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i681 = data
  var i683 = i681[0]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i683[i + 0]) );
  }
  i680.qualityLevels = i682
  var i685 = i681[1]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( i685[i + 0] );
  }
  i680.names = i684
  i680.shadows = i681[2]
  i680.anisotropicFiltering = i681[3]
  i680.antiAliasing = i681[4]
  i680.lodBias = i681[5]
  i680.shadowCascades = i681[6]
  i680.shadowDistance = i681[7]
  i680.shadowmaskMode = i681[8]
  i680.shadowProjection = i681[9]
  i680.shadowResolution = i681[10]
  i680.softParticles = !!i681[11]
  i680.softVegetation = !!i681[12]
  i680.activeColorSpace = i681[13]
  i680.desiredColorSpace = i681[14]
  i680.masterTextureLimit = i681[15]
  i680.maxQueuedFrames = i681[16]
  i680.particleRaycastBudget = i681[17]
  i680.pixelLightCount = i681[18]
  i680.realtimeReflectionProbes = !!i681[19]
  i680.shadowCascade2Split = i681[20]
  i680.shadowCascade4Split = new pc.Vec3( i681[21], i681[22], i681[23] )
  i680.streamingMipmapsActive = !!i681[24]
  i680.vSyncCount = i681[25]
  i680.asyncUploadBufferSize = i681[26]
  i680.asyncUploadTimeSlice = i681[27]
  i680.billboardsFaceCameraPosition = !!i681[28]
  i680.shadowNearPlaneOffset = i681[29]
  i680.streamingMipmapsMemoryBudget = i681[30]
  i680.maximumLODLevel = i681[31]
  i680.streamingMipmapsAddAllCameras = !!i681[32]
  i680.streamingMipmapsMaxLevelReduction = i681[33]
  i680.streamingMipmapsRenderersPerFrame = i681[34]
  i680.resolutionScalingFixedDPIFactor = i681[35]
  i680.streamingMipmapsMaxFileIORequests = i681[36]
  i680.currentQualityLevel = i681[37]
  return i680
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[47],"48":[3],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[3],"72":[73],"74":[75],"76":[75],"9":[8],"77":[78],"79":[80],"81":[78],"82":[8],"83":[8],"11":[9],"20":[17,8],"84":[8],"10":[9],"85":[8],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"31":[8],"34":[8],"91":[8],"16":[17,8],"92":[8],"93":[8],"94":[8],"95":[8],"32":[17,8],"96":[8],"97":[6],"98":[6],"7":[6],"99":[6],"100":[3],"101":[3],"102":[103],"104":[3],"105":[106],"107":[8],"108":[17,8],"109":[73],"25":[17,8],"110":[111,73],"112":[73],"113":[73,114],"115":[50],"116":[58],"117":[106],"118":[119],"120":[8],"121":[73,8],"122":[8,17],"123":[8],"124":[17,8],"125":[73],"126":[17,8],"127":[8],"128":[78]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.UI.Image","UnityEngine.Sprite","DropZone","UnityEngine.BoxCollider2D","ClickItem","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DG.Tweening.DOTweenAnimation","DraggableItem","UnityEngine.CanvasGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Mask","IQFill","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "0.0";

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

Deserializers.buildID = "dd6a2228-41b6-4dfe-ac7d-086a1117ae8d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

