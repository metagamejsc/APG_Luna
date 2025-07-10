var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6346 = root || request.c( 'UnityEngine.JointSpring' )
  var i6347 = data
  i6346.spring = i6347[0]
  i6346.damper = i6347[1]
  i6346.targetPosition = i6347[2]
  return i6346
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6348 = root || request.c( 'UnityEngine.JointMotor' )
  var i6349 = data
  i6348.m_TargetVelocity = i6349[0]
  i6348.m_Force = i6349[1]
  i6348.m_FreeSpin = i6349[2]
  return i6348
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6350 = root || request.c( 'UnityEngine.JointLimits' )
  var i6351 = data
  i6350.m_Min = i6351[0]
  i6350.m_Max = i6351[1]
  i6350.m_Bounciness = i6351[2]
  i6350.m_BounceMinVelocity = i6351[3]
  i6350.m_ContactDistance = i6351[4]
  i6350.minBounce = i6351[5]
  i6350.maxBounce = i6351[6]
  return i6350
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6352 = root || request.c( 'UnityEngine.JointDrive' )
  var i6353 = data
  i6352.m_PositionSpring = i6353[0]
  i6352.m_PositionDamper = i6353[1]
  i6352.m_MaximumForce = i6353[2]
  i6352.m_UseAcceleration = i6353[3]
  return i6352
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6354 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6355 = data
  i6354.m_Spring = i6355[0]
  i6354.m_Damper = i6355[1]
  return i6354
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6356 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6357 = data
  i6356.m_Limit = i6357[0]
  i6356.m_Bounciness = i6357[1]
  i6356.m_ContactDistance = i6357[2]
  return i6356
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6358 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6359 = data
  i6358.m_ExtremumSlip = i6359[0]
  i6358.m_ExtremumValue = i6359[1]
  i6358.m_AsymptoteSlip = i6359[2]
  i6358.m_AsymptoteValue = i6359[3]
  i6358.m_Stiffness = i6359[4]
  return i6358
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6360 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6361 = data
  i6360.m_LowerAngle = i6361[0]
  i6360.m_UpperAngle = i6361[1]
  return i6360
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6362 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6363 = data
  i6362.m_MotorSpeed = i6363[0]
  i6362.m_MaximumMotorTorque = i6363[1]
  return i6362
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6364 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6365 = data
  i6364.m_DampingRatio = i6365[0]
  i6364.m_Frequency = i6365[1]
  i6364.m_Angle = i6365[2]
  return i6364
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6366 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6367 = data
  i6366.m_LowerTranslation = i6367[0]
  i6366.m_UpperTranslation = i6367[1]
  return i6366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6369 = data
  i6368.name = i6369[0]
  i6368.width = i6369[1]
  i6368.height = i6369[2]
  i6368.mipmapCount = i6369[3]
  i6368.anisoLevel = i6369[4]
  i6368.filterMode = i6369[5]
  i6368.hdr = !!i6369[6]
  i6368.format = i6369[7]
  i6368.wrapMode = i6369[8]
  i6368.alphaIsTransparency = !!i6369[9]
  i6368.alphaSource = i6369[10]
  i6368.graphicsFormat = i6369[11]
  i6368.sRGBTexture = !!i6369[12]
  i6368.desiredColorSpace = i6369[13]
  return i6368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6370 = root || new pc.UnityMaterial()
  var i6371 = data
  i6370.name = i6371[0]
  request.r(i6371[1], i6371[2], 0, i6370, 'shader')
  i6370.renderQueue = i6371[3]
  i6370.enableInstancing = !!i6371[4]
  var i6373 = i6371[5]
  var i6372 = []
  for(var i = 0; i < i6373.length; i += 1) {
    i6372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6373[i + 0]) );
  }
  i6370.floatParameters = i6372
  var i6375 = i6371[6]
  var i6374 = []
  for(var i = 0; i < i6375.length; i += 1) {
    i6374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6375[i + 0]) );
  }
  i6370.colorParameters = i6374
  var i6377 = i6371[7]
  var i6376 = []
  for(var i = 0; i < i6377.length; i += 1) {
    i6376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6377[i + 0]) );
  }
  i6370.vectorParameters = i6376
  var i6379 = i6371[8]
  var i6378 = []
  for(var i = 0; i < i6379.length; i += 1) {
    i6378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6379[i + 0]) );
  }
  i6370.textureParameters = i6378
  var i6381 = i6371[9]
  var i6380 = []
  for(var i = 0; i < i6381.length; i += 1) {
    i6380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6381[i + 0]) );
  }
  i6370.materialFlags = i6380
  return i6370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6385 = data
  i6384.name = i6385[0]
  i6384.value = i6385[1]
  return i6384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6389 = data
  i6388.name = i6389[0]
  i6388.value = new pc.Color(i6389[1], i6389[2], i6389[3], i6389[4])
  return i6388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6393 = data
  i6392.name = i6393[0]
  i6392.value = new pc.Vec4( i6393[1], i6393[2], i6393[3], i6393[4] )
  return i6392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6397 = data
  i6396.name = i6397[0]
  request.r(i6397[1], i6397[2], 0, i6396, 'value')
  return i6396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6401 = data
  i6400.name = i6401[0]
  i6400.enabled = !!i6401[1]
  return i6400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6403 = data
  i6402.pivot = new pc.Vec2( i6403[0], i6403[1] )
  i6402.anchorMin = new pc.Vec2( i6403[2], i6403[3] )
  i6402.anchorMax = new pc.Vec2( i6403[4], i6403[5] )
  i6402.sizeDelta = new pc.Vec2( i6403[6], i6403[7] )
  i6402.anchoredPosition3D = new pc.Vec3( i6403[8], i6403[9], i6403[10] )
  i6402.rotation = new pc.Quat(i6403[11], i6403[12], i6403[13], i6403[14])
  i6402.scale = new pc.Vec3( i6403[15], i6403[16], i6403[17] )
  return i6402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6405 = data
  i6404.cullTransparentMesh = !!i6405[0]
  return i6404
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i6406 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i6407 = data
  request.r(i6407[0], i6407[1], 0, i6406, 'skeletonDataAsset')
  request.r(i6407[2], i6407[3], 0, i6406, 'additiveMaterial')
  request.r(i6407[4], i6407[5], 0, i6406, 'multiplyMaterial')
  request.r(i6407[6], i6407[7], 0, i6406, 'screenMaterial')
  i6406.initialSkinName = i6407[8]
  i6406.initialFlipX = !!i6407[9]
  i6406.initialFlipY = !!i6407[10]
  i6406.startingAnimation = i6407[11]
  i6406.startingLoop = !!i6407[12]
  i6406.timeScale = i6407[13]
  i6406.freeze = !!i6407[14]
  i6406.layoutScaleMode = i6407[15]
  i6406.updateWhenInvisible = i6407[16]
  i6406.allowMultipleCanvasRenderers = !!i6407[17]
  var i6409 = i6407[18]
  var i6408 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i6409.length; i += 2) {
  request.r(i6409[i + 0], i6409[i + 1], 1, i6408, '')
  }
  i6406.canvasRenderers = i6408
  i6406.enableSeparatorSlots = !!i6407[19]
  i6406.updateSeparatorPartLocation = !!i6407[20]
  i6406.updateSeparatorPartScale = !!i6407[21]
  i6406.disableMeshAssignmentOnOverride = !!i6407[22]
  i6406.referenceSize = new pc.Vec2( i6407[23], i6407[24] )
  i6406.referenceScale = i6407[25]
  i6406.rectTransformSize = new pc.Vec2( i6407[26], i6407[27] )
  i6406.editReferenceRect = !!i6407[28]
  var i6411 = i6407[29]
  var i6410 = []
  for(var i = 0; i < i6411.length; i += 1) {
    i6410.push( i6411[i + 0] );
  }
  i6406.separatorSlotNames = i6410
  var i6413 = i6407[30]
  var i6412 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i6413.length; i += 2) {
  request.r(i6413[i + 0], i6413[i + 1], 1, i6412, '')
  }
  i6406.separatorParts = i6412
  i6406.meshGenerator = request.d('Spine.Unity.MeshGenerator', i6407[31], i6406.meshGenerator)
  i6406.updateTiming = i6407[32]
  i6406.unscaledTime = !!i6407[33]
  request.r(i6407[34], i6407[35], 0, i6406, 'm_Material')
  i6406.m_Maskable = !!i6407[36]
  i6406.m_Color = new pc.Color(i6407[37], i6407[38], i6407[39], i6407[40])
  i6406.m_RaycastTarget = !!i6407[41]
  i6406.m_RaycastPadding = new pc.Vec4( i6407[42], i6407[43], i6407[44], i6407[45] )
  return i6406
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i6420 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i6421 = data
  i6420.settings = request.d('Spine.Unity.MeshGenerator+Settings', i6421[0], i6420.settings)
  return i6420
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i6422 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i6423 = data
  i6422.useClipping = !!i6423[0]
  i6422.zSpacing = i6423[1]
  i6422.pmaVertexColors = !!i6423[2]
  i6422.tintBlack = !!i6423[3]
  i6422.canvasGroupTintBlack = !!i6423[4]
  i6422.calculateTangents = !!i6423[5]
  i6422.addNormals = !!i6423[6]
  i6422.immutableTriangles = !!i6423[7]
  return i6422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6425 = data
  request.r(i6425[0], i6425[1], 0, i6424, 'clip')
  request.r(i6425[2], i6425[3], 0, i6424, 'outputAudioMixerGroup')
  i6424.playOnAwake = !!i6425[4]
  i6424.loop = !!i6425[5]
  i6424.time = i6425[6]
  i6424.volume = i6425[7]
  i6424.pitch = i6425[8]
  i6424.enabled = !!i6425[9]
  return i6424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6427 = data
  i6426.name = i6427[0]
  i6426.tagId = i6427[1]
  i6426.enabled = !!i6427[2]
  i6426.isStatic = !!i6427[3]
  i6426.layer = i6427[4]
  return i6426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6429 = data
  i6428.name = i6429[0]
  i6428.index = i6429[1]
  i6428.startup = !!i6429[2]
  return i6428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6431 = data
  i6430.position = new pc.Vec3( i6431[0], i6431[1], i6431[2] )
  i6430.scale = new pc.Vec3( i6431[3], i6431[4], i6431[5] )
  i6430.rotation = new pc.Quat(i6431[6], i6431[7], i6431[8], i6431[9])
  return i6430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6433 = data
  i6432.enabled = !!i6433[0]
  i6432.aspect = i6433[1]
  i6432.orthographic = !!i6433[2]
  i6432.orthographicSize = i6433[3]
  i6432.backgroundColor = new pc.Color(i6433[4], i6433[5], i6433[6], i6433[7])
  i6432.nearClipPlane = i6433[8]
  i6432.farClipPlane = i6433[9]
  i6432.fieldOfView = i6433[10]
  i6432.depth = i6433[11]
  i6432.clearFlags = i6433[12]
  i6432.cullingMask = i6433[13]
  i6432.rect = i6433[14]
  request.r(i6433[15], i6433[16], 0, i6432, 'targetTexture')
  i6432.usePhysicalProperties = !!i6433[17]
  i6432.focalLength = i6433[18]
  i6432.sensorSize = new pc.Vec2( i6433[19], i6433[20] )
  i6432.lensShift = new pc.Vec2( i6433[21], i6433[22] )
  i6432.gateFit = i6433[23]
  return i6432
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6434 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6435 = data
  request.r(i6435[0], i6435[1], 0, i6434, 'm_FirstSelected')
  i6434.m_sendNavigationEvents = !!i6435[2]
  i6434.m_DragThreshold = i6435[3]
  return i6434
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6436 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6437 = data
  i6436.m_HorizontalAxis = i6437[0]
  i6436.m_VerticalAxis = i6437[1]
  i6436.m_SubmitButton = i6437[2]
  i6436.m_CancelButton = i6437[3]
  i6436.m_InputActionsPerSecond = i6437[4]
  i6436.m_RepeatDelay = i6437[5]
  i6436.m_ForceModuleActive = !!i6437[6]
  i6436.m_SendPointerHoverToParent = !!i6437[7]
  return i6436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6439 = data
  i6438.enabled = !!i6439[0]
  i6438.planeDistance = i6439[1]
  i6438.referencePixelsPerUnit = i6439[2]
  i6438.isFallbackOverlay = !!i6439[3]
  i6438.renderMode = i6439[4]
  i6438.renderOrder = i6439[5]
  i6438.sortingLayerName = i6439[6]
  i6438.sortingOrder = i6439[7]
  i6438.scaleFactor = i6439[8]
  request.r(i6439[9], i6439[10], 0, i6438, 'worldCamera')
  i6438.overrideSorting = !!i6439[11]
  i6438.pixelPerfect = !!i6439[12]
  i6438.targetDisplay = i6439[13]
  i6438.overridePixelPerfect = !!i6439[14]
  return i6438
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6440 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6441 = data
  i6440.m_UiScaleMode = i6441[0]
  i6440.m_ReferencePixelsPerUnit = i6441[1]
  i6440.m_ScaleFactor = i6441[2]
  i6440.m_ReferenceResolution = new pc.Vec2( i6441[3], i6441[4] )
  i6440.m_ScreenMatchMode = i6441[5]
  i6440.m_MatchWidthOrHeight = i6441[6]
  i6440.m_PhysicalUnit = i6441[7]
  i6440.m_FallbackScreenDPI = i6441[8]
  i6440.m_DefaultSpriteDPI = i6441[9]
  i6440.m_DynamicPixelsPerUnit = i6441[10]
  i6440.m_PresetInfoIsWorld = !!i6441[11]
  return i6440
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6442 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6443 = data
  i6442.m_IgnoreReversedGraphics = !!i6443[0]
  i6442.m_BlockingObjects = i6443[1]
  i6442.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6443[2] )
  return i6442
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i6444 = root || request.c( 'LunaManager' )
  var i6445 = data
  var i6447 = i6445[0]
  var i6446 = []
  for(var i = 0; i < i6447.length; i += 2) {
  request.r(i6447[i + 0], i6447[i + 1], 2, i6446, '')
  }
  i6444.lstBtnInstall = i6446
  request.r(i6445[1], i6445[2], 0, i6444, 'EndCard')
  i6444.countPlay = i6445[3]
  i6444.countPlayFinal = i6445[4]
  i6444.timeDropFinal = i6445[5]
  i6444.colorBG = new pc.Color(i6445[6], i6445[7], i6445[8], i6445[9])
  request.r(i6445[10], i6445[11], 0, i6444, 'texture2D')
  request.r(i6445[12], i6445[13], 0, i6444, 'rawImageBG')
  request.r(i6445[14], i6445[15], 0, i6444, 'hand')
  return i6444
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i6450 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i6451 = data
  request.r(i6451[0], i6451[1], 0, i6450, 'm_Texture')
  i6450.m_UVRect = UnityEngine.Rect.MinMaxRect(i6451[2], i6451[3], i6451[4], i6451[5])
  request.r(i6451[6], i6451[7], 0, i6450, 'm_Material')
  i6450.m_Maskable = !!i6451[8]
  i6450.m_Color = new pc.Color(i6451[9], i6451[10], i6451[11], i6451[12])
  i6450.m_RaycastTarget = !!i6451[13]
  i6450.m_RaycastPadding = new pc.Vec4( i6451[14], i6451[15], i6451[16], i6451[17] )
  return i6450
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6452 = root || request.c( 'UnityEngine.UI.Image' )
  var i6453 = data
  request.r(i6453[0], i6453[1], 0, i6452, 'm_Sprite')
  i6452.m_Type = i6453[2]
  i6452.m_PreserveAspect = !!i6453[3]
  i6452.m_FillCenter = !!i6453[4]
  i6452.m_FillMethod = i6453[5]
  i6452.m_FillAmount = i6453[6]
  i6452.m_FillClockwise = !!i6453[7]
  i6452.m_FillOrigin = i6453[8]
  i6452.m_UseSpriteMesh = !!i6453[9]
  i6452.m_PixelsPerUnitMultiplier = i6453[10]
  request.r(i6453[11], i6453[12], 0, i6452, 'm_Material')
  i6452.m_Maskable = !!i6453[13]
  i6452.m_Color = new pc.Color(i6453[14], i6453[15], i6453[16], i6453[17])
  i6452.m_RaycastTarget = !!i6453[18]
  i6452.m_RaycastPadding = new pc.Vec4( i6453[19], i6453[20], i6453[21], i6453[22] )
  return i6452
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6454 = root || request.c( 'UnityEngine.UI.Button' )
  var i6455 = data
  i6454.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6455[0], i6454.m_OnClick)
  i6454.m_Navigation = request.d('UnityEngine.UI.Navigation', i6455[1], i6454.m_Navigation)
  i6454.m_Transition = i6455[2]
  i6454.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6455[3], i6454.m_Colors)
  i6454.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6455[4], i6454.m_SpriteState)
  i6454.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6455[5], i6454.m_AnimationTriggers)
  i6454.m_Interactable = !!i6455[6]
  request.r(i6455[7], i6455[8], 0, i6454, 'm_TargetGraphic')
  return i6454
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6456 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6457 = data
  i6456.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6457[0], i6456.m_PersistentCalls)
  return i6456
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6458 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6459 = data
  var i6461 = i6459[0]
  var i6460 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6461.length; i += 1) {
    i6460.add(request.d('UnityEngine.Events.PersistentCall', i6461[i + 0]));
  }
  i6458.m_Calls = i6460
  return i6458
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6464 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6465 = data
  request.r(i6465[0], i6465[1], 0, i6464, 'm_Target')
  i6464.m_TargetAssemblyTypeName = i6465[2]
  i6464.m_MethodName = i6465[3]
  i6464.m_Mode = i6465[4]
  i6464.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6465[5], i6464.m_Arguments)
  i6464.m_CallState = i6465[6]
  return i6464
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6466 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6467 = data
  request.r(i6467[0], i6467[1], 0, i6466, 'm_ObjectArgument')
  i6466.m_ObjectArgumentAssemblyTypeName = i6467[2]
  i6466.m_IntArgument = i6467[3]
  i6466.m_FloatArgument = i6467[4]
  i6466.m_StringArgument = i6467[5]
  i6466.m_BoolArgument = !!i6467[6]
  return i6466
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6468 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6469 = data
  i6468.m_Mode = i6469[0]
  i6468.m_WrapAround = !!i6469[1]
  request.r(i6469[2], i6469[3], 0, i6468, 'm_SelectOnUp')
  request.r(i6469[4], i6469[5], 0, i6468, 'm_SelectOnDown')
  request.r(i6469[6], i6469[7], 0, i6468, 'm_SelectOnLeft')
  request.r(i6469[8], i6469[9], 0, i6468, 'm_SelectOnRight')
  return i6468
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6470 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6471 = data
  i6470.m_NormalColor = new pc.Color(i6471[0], i6471[1], i6471[2], i6471[3])
  i6470.m_HighlightedColor = new pc.Color(i6471[4], i6471[5], i6471[6], i6471[7])
  i6470.m_PressedColor = new pc.Color(i6471[8], i6471[9], i6471[10], i6471[11])
  i6470.m_SelectedColor = new pc.Color(i6471[12], i6471[13], i6471[14], i6471[15])
  i6470.m_DisabledColor = new pc.Color(i6471[16], i6471[17], i6471[18], i6471[19])
  i6470.m_ColorMultiplier = i6471[20]
  i6470.m_FadeDuration = i6471[21]
  return i6470
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6472 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6473 = data
  request.r(i6473[0], i6473[1], 0, i6472, 'm_HighlightedSprite')
  request.r(i6473[2], i6473[3], 0, i6472, 'm_PressedSprite')
  request.r(i6473[4], i6473[5], 0, i6472, 'm_SelectedSprite')
  request.r(i6473[6], i6473[7], 0, i6472, 'm_DisabledSprite')
  return i6472
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6474 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6475 = data
  i6474.m_NormalTrigger = i6475[0]
  i6474.m_HighlightedTrigger = i6475[1]
  i6474.m_PressedTrigger = i6475[2]
  i6474.m_SelectedTrigger = i6475[3]
  i6474.m_DisabledTrigger = i6475[4]
  return i6474
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i6476 = root || request.c( 'ClickItem' )
  var i6477 = data
  i6476.isDoor = !!i6477[0]
  var i6479 = i6477[1]
  var i6478 = []
  for(var i = 0; i < i6479.length; i += 2) {
  request.r(i6479[i + 0], i6479[i + 1], 2, i6478, '')
  }
  i6476.steps = i6478
  return i6476
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i6482 = root || request.c( 'DraggableItem' )
  var i6483 = data
  i6482.itemID = i6483[0]
  return i6482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i6484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i6485 = data
  i6484.m_Alpha = i6485[0]
  i6484.m_Interactable = !!i6485[1]
  i6484.m_BlocksRaycasts = !!i6485[2]
  i6484.m_IgnoreParentGroups = !!i6485[3]
  i6484.enabled = !!i6485[4]
  return i6484
}

Deserializers["DropZone"] = function (request, data, root) {
  var i6486 = root || request.c( 'DropZone' )
  var i6487 = data
  var i6489 = i6487[0]
  var i6488 = []
  for(var i = 0; i < i6489.length; i += 2) {
  request.r(i6489[i + 0], i6489[i + 1], 2, i6488, '')
  }
  i6486.dancingGOs = i6488
  var i6491 = i6487[1]
  var i6490 = []
  for(var i = 0; i < i6491.length; i += 2) {
  request.r(i6491[i + 0], i6491[i + 1], 2, i6490, '')
  }
  i6486.sitGOs = i6490
  var i6493 = i6487[2]
  var i6492 = []
  for(var i = 0; i < i6493.length; i += 2) {
  request.r(i6493[i + 0], i6493[i + 1], 2, i6492, '')
  }
  i6486.charmPrefabs = i6492
  request.r(i6487[3], i6487[4], 0, i6486, 'tranDancing')
  return i6486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i6494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i6495 = data
  i6494.usedByComposite = !!i6495[0]
  i6494.autoTiling = !!i6495[1]
  i6494.size = new pc.Vec2( i6495[2], i6495[3] )
  i6494.edgeRadius = i6495[4]
  i6494.enabled = !!i6495[5]
  i6494.isTrigger = !!i6495[6]
  i6494.usedByEffector = !!i6495[7]
  i6494.density = i6495[8]
  i6494.offset = new pc.Vec2( i6495[9], i6495[10] )
  request.r(i6495[11], i6495[12], 0, i6494, 'material')
  return i6494
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i6496 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i6497 = data
  i6496.m_Spacing = i6497[0]
  i6496.m_ChildForceExpandWidth = !!i6497[1]
  i6496.m_ChildForceExpandHeight = !!i6497[2]
  i6496.m_ChildControlWidth = !!i6497[3]
  i6496.m_ChildControlHeight = !!i6497[4]
  i6496.m_ChildScaleWidth = !!i6497[5]
  i6496.m_ChildScaleHeight = !!i6497[6]
  i6496.m_ReverseArrangement = !!i6497[7]
  i6496.m_Padding = UnityEngine.RectOffset.FromPaddings(i6497[8], i6497[9], i6497[10], i6497[11])
  i6496.m_ChildAlignment = i6497[12]
  return i6496
}

Deserializers["MoveLeftRight"] = function (request, data, root) {
  var i6498 = root || request.c( 'MoveLeftRight' )
  var i6499 = data
  i6498.moveDistance = i6499[0]
  i6498.moveDuration = i6499[1]
  i6498.delay = i6499[2]
  i6498.easeType = i6499[3]
  return i6498
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i6500 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i6501 = data
  i6500.m_Spacing = i6501[0]
  i6500.m_ChildForceExpandWidth = !!i6501[1]
  i6500.m_ChildForceExpandHeight = !!i6501[2]
  i6500.m_ChildControlWidth = !!i6501[3]
  i6500.m_ChildControlHeight = !!i6501[4]
  i6500.m_ChildScaleWidth = !!i6501[5]
  i6500.m_ChildScaleHeight = !!i6501[6]
  i6500.m_ReverseArrangement = !!i6501[7]
  i6500.m_Padding = UnityEngine.RectOffset.FromPaddings(i6501[8], i6501[9], i6501[10], i6501[11])
  i6500.m_ChildAlignment = i6501[12]
  return i6500
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i6502 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i6503 = data
  i6502.m_hasFontAssetChanged = !!i6503[0]
  request.r(i6503[1], i6503[2], 0, i6502, 'm_baseMaterial')
  i6502.m_maskOffset = new pc.Vec4( i6503[3], i6503[4], i6503[5], i6503[6] )
  i6502.m_text = i6503[7]
  i6502.m_isRightToLeft = !!i6503[8]
  request.r(i6503[9], i6503[10], 0, i6502, 'm_fontAsset')
  request.r(i6503[11], i6503[12], 0, i6502, 'm_sharedMaterial')
  var i6505 = i6503[13]
  var i6504 = []
  for(var i = 0; i < i6505.length; i += 2) {
  request.r(i6505[i + 0], i6505[i + 1], 2, i6504, '')
  }
  i6502.m_fontSharedMaterials = i6504
  request.r(i6503[14], i6503[15], 0, i6502, 'm_fontMaterial')
  var i6507 = i6503[16]
  var i6506 = []
  for(var i = 0; i < i6507.length; i += 2) {
  request.r(i6507[i + 0], i6507[i + 1], 2, i6506, '')
  }
  i6502.m_fontMaterials = i6506
  i6502.m_fontColor32 = UnityEngine.Color32.ConstructColor(i6503[17], i6503[18], i6503[19], i6503[20])
  i6502.m_fontColor = new pc.Color(i6503[21], i6503[22], i6503[23], i6503[24])
  i6502.m_enableVertexGradient = !!i6503[25]
  i6502.m_colorMode = i6503[26]
  i6502.m_fontColorGradient = request.d('TMPro.VertexGradient', i6503[27], i6502.m_fontColorGradient)
  request.r(i6503[28], i6503[29], 0, i6502, 'm_fontColorGradientPreset')
  request.r(i6503[30], i6503[31], 0, i6502, 'm_spriteAsset')
  i6502.m_tintAllSprites = !!i6503[32]
  request.r(i6503[33], i6503[34], 0, i6502, 'm_StyleSheet')
  i6502.m_TextStyleHashCode = i6503[35]
  i6502.m_overrideHtmlColors = !!i6503[36]
  i6502.m_faceColor = UnityEngine.Color32.ConstructColor(i6503[37], i6503[38], i6503[39], i6503[40])
  i6502.m_fontSize = i6503[41]
  i6502.m_fontSizeBase = i6503[42]
  i6502.m_fontWeight = i6503[43]
  i6502.m_enableAutoSizing = !!i6503[44]
  i6502.m_fontSizeMin = i6503[45]
  i6502.m_fontSizeMax = i6503[46]
  i6502.m_fontStyle = i6503[47]
  i6502.m_HorizontalAlignment = i6503[48]
  i6502.m_VerticalAlignment = i6503[49]
  i6502.m_textAlignment = i6503[50]
  i6502.m_characterSpacing = i6503[51]
  i6502.m_wordSpacing = i6503[52]
  i6502.m_lineSpacing = i6503[53]
  i6502.m_lineSpacingMax = i6503[54]
  i6502.m_paragraphSpacing = i6503[55]
  i6502.m_charWidthMaxAdj = i6503[56]
  i6502.m_enableWordWrapping = !!i6503[57]
  i6502.m_wordWrappingRatios = i6503[58]
  i6502.m_overflowMode = i6503[59]
  request.r(i6503[60], i6503[61], 0, i6502, 'm_linkedTextComponent')
  request.r(i6503[62], i6503[63], 0, i6502, 'parentLinkedComponent')
  i6502.m_enableKerning = !!i6503[64]
  i6502.m_enableExtraPadding = !!i6503[65]
  i6502.checkPaddingRequired = !!i6503[66]
  i6502.m_isRichText = !!i6503[67]
  i6502.m_parseCtrlCharacters = !!i6503[68]
  i6502.m_isOrthographic = !!i6503[69]
  i6502.m_isCullingEnabled = !!i6503[70]
  i6502.m_horizontalMapping = i6503[71]
  i6502.m_verticalMapping = i6503[72]
  i6502.m_uvLineOffset = i6503[73]
  i6502.m_geometrySortingOrder = i6503[74]
  i6502.m_IsTextObjectScaleStatic = !!i6503[75]
  i6502.m_VertexBufferAutoSizeReduction = !!i6503[76]
  i6502.m_useMaxVisibleDescender = !!i6503[77]
  i6502.m_pageToDisplay = i6503[78]
  i6502.m_margin = new pc.Vec4( i6503[79], i6503[80], i6503[81], i6503[82] )
  i6502.m_isUsingLegacyAnimationComponent = !!i6503[83]
  i6502.m_isVolumetricText = !!i6503[84]
  request.r(i6503[85], i6503[86], 0, i6502, 'm_Material')
  i6502.m_Maskable = !!i6503[87]
  i6502.m_Color = new pc.Color(i6503[88], i6503[89], i6503[90], i6503[91])
  i6502.m_RaycastTarget = !!i6503[92]
  i6502.m_RaycastPadding = new pc.Vec4( i6503[93], i6503[94], i6503[95], i6503[96] )
  return i6502
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i6510 = root || request.c( 'TMPro.VertexGradient' )
  var i6511 = data
  i6510.topLeft = new pc.Color(i6511[0], i6511[1], i6511[2], i6511[3])
  i6510.topRight = new pc.Color(i6511[4], i6511[5], i6511[6], i6511[7])
  i6510.bottomLeft = new pc.Color(i6511[8], i6511[9], i6511[10], i6511[11])
  i6510.bottomRight = new pc.Color(i6511[12], i6511[13], i6511[14], i6511[15])
  return i6510
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i6512 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i6513 = data
  i6512.targetIsSelf = !!i6513[0]
  request.r(i6513[1], i6513[2], 0, i6512, 'targetGO')
  i6512.tweenTargetIsTargetGO = !!i6513[3]
  i6512.delay = i6513[4]
  i6512.duration = i6513[5]
  i6512.easeType = i6513[6]
  i6512.easeCurve = new pc.AnimationCurve( { keys_flow: i6513[7] } )
  i6512.loopType = i6513[8]
  i6512.loops = i6513[9]
  i6512.id = i6513[10]
  i6512.isRelative = !!i6513[11]
  i6512.isFrom = !!i6513[12]
  i6512.isIndependentUpdate = !!i6513[13]
  i6512.autoKill = !!i6513[14]
  i6512.autoGenerate = !!i6513[15]
  i6512.isActive = !!i6513[16]
  i6512.isValid = !!i6513[17]
  request.r(i6513[18], i6513[19], 0, i6512, 'target')
  i6512.animationType = i6513[20]
  i6512.targetType = i6513[21]
  i6512.forcedTargetType = i6513[22]
  i6512.autoPlay = !!i6513[23]
  i6512.useTargetAsV3 = !!i6513[24]
  i6512.endValueFloat = i6513[25]
  i6512.endValueV3 = new pc.Vec3( i6513[26], i6513[27], i6513[28] )
  i6512.endValueV2 = new pc.Vec2( i6513[29], i6513[30] )
  i6512.endValueColor = new pc.Color(i6513[31], i6513[32], i6513[33], i6513[34])
  i6512.endValueString = i6513[35]
  i6512.endValueRect = UnityEngine.Rect.MinMaxRect(i6513[36], i6513[37], i6513[38], i6513[39])
  request.r(i6513[40], i6513[41], 0, i6512, 'endValueTransform')
  i6512.optionalBool0 = !!i6513[42]
  i6512.optionalBool1 = !!i6513[43]
  i6512.optionalFloat0 = i6513[44]
  i6512.optionalInt0 = i6513[45]
  i6512.optionalRotationMode = i6513[46]
  i6512.optionalScrambleMode = i6513[47]
  i6512.optionalShakeRandomnessMode = i6513[48]
  i6512.optionalString = i6513[49]
  i6512.updateType = i6513[50]
  i6512.isSpeedBased = !!i6513[51]
  i6512.hasOnStart = !!i6513[52]
  i6512.hasOnPlay = !!i6513[53]
  i6512.hasOnUpdate = !!i6513[54]
  i6512.hasOnStepComplete = !!i6513[55]
  i6512.hasOnComplete = !!i6513[56]
  i6512.hasOnTweenCreated = !!i6513[57]
  i6512.hasOnRewind = !!i6513[58]
  i6512.onStart = request.d('UnityEngine.Events.UnityEvent', i6513[59], i6512.onStart)
  i6512.onPlay = request.d('UnityEngine.Events.UnityEvent', i6513[60], i6512.onPlay)
  i6512.onUpdate = request.d('UnityEngine.Events.UnityEvent', i6513[61], i6512.onUpdate)
  i6512.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i6513[62], i6512.onStepComplete)
  i6512.onComplete = request.d('UnityEngine.Events.UnityEvent', i6513[63], i6512.onComplete)
  i6512.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i6513[64], i6512.onTweenCreated)
  i6512.onRewind = request.d('UnityEngine.Events.UnityEvent', i6513[65], i6512.onRewind)
  return i6512
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i6514 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i6515 = data
  i6514.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6515[0], i6514.m_PersistentCalls)
  return i6514
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i6516 = root || request.c( 'UnityEngine.UI.Mask' )
  var i6517 = data
  i6516.m_ShowMaskGraphic = !!i6517[0]
  return i6516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6519 = data
  i6518.ambientIntensity = i6519[0]
  i6518.reflectionIntensity = i6519[1]
  i6518.ambientMode = i6519[2]
  i6518.ambientLight = new pc.Color(i6519[3], i6519[4], i6519[5], i6519[6])
  i6518.ambientSkyColor = new pc.Color(i6519[7], i6519[8], i6519[9], i6519[10])
  i6518.ambientGroundColor = new pc.Color(i6519[11], i6519[12], i6519[13], i6519[14])
  i6518.ambientEquatorColor = new pc.Color(i6519[15], i6519[16], i6519[17], i6519[18])
  i6518.fogColor = new pc.Color(i6519[19], i6519[20], i6519[21], i6519[22])
  i6518.fogEndDistance = i6519[23]
  i6518.fogStartDistance = i6519[24]
  i6518.fogDensity = i6519[25]
  i6518.fog = !!i6519[26]
  request.r(i6519[27], i6519[28], 0, i6518, 'skybox')
  i6518.fogMode = i6519[29]
  var i6521 = i6519[30]
  var i6520 = []
  for(var i = 0; i < i6521.length; i += 1) {
    i6520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6521[i + 0]) );
  }
  i6518.lightmaps = i6520
  i6518.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6519[31], i6518.lightProbes)
  i6518.lightmapsMode = i6519[32]
  i6518.mixedBakeMode = i6519[33]
  i6518.environmentLightingMode = i6519[34]
  i6518.ambientProbe = new pc.SphericalHarmonicsL2(i6519[35])
  i6518.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i6519[36])
  i6518.useReferenceAmbientProbe = !!i6519[37]
  request.r(i6519[38], i6519[39], 0, i6518, 'customReflection')
  request.r(i6519[40], i6519[41], 0, i6518, 'defaultReflection')
  i6518.defaultReflectionMode = i6519[42]
  i6518.defaultReflectionResolution = i6519[43]
  i6518.sunLightObjectId = i6519[44]
  i6518.pixelLightCount = i6519[45]
  i6518.defaultReflectionHDR = !!i6519[46]
  i6518.hasLightDataAsset = !!i6519[47]
  i6518.hasManualGenerate = !!i6519[48]
  return i6518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6525 = data
  request.r(i6525[0], i6525[1], 0, i6524, 'lightmapColor')
  request.r(i6525[2], i6525[3], 0, i6524, 'lightmapDirection')
  return i6524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6526 = root || new UnityEngine.LightProbes()
  var i6527 = data
  return i6526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6535 = data
  var i6537 = i6535[0]
  var i6536 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6537.length; i += 1) {
    i6536.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6537[i + 0]));
  }
  i6534.ShaderCompilationErrors = i6536
  i6534.name = i6535[1]
  i6534.guid = i6535[2]
  var i6539 = i6535[3]
  var i6538 = []
  for(var i = 0; i < i6539.length; i += 1) {
    i6538.push( i6539[i + 0] );
  }
  i6534.shaderDefinedKeywords = i6538
  var i6541 = i6535[4]
  var i6540 = []
  for(var i = 0; i < i6541.length; i += 1) {
    i6540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6541[i + 0]) );
  }
  i6534.passes = i6540
  var i6543 = i6535[5]
  var i6542 = []
  for(var i = 0; i < i6543.length; i += 1) {
    i6542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6543[i + 0]) );
  }
  i6534.usePasses = i6542
  var i6545 = i6535[6]
  var i6544 = []
  for(var i = 0; i < i6545.length; i += 1) {
    i6544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6545[i + 0]) );
  }
  i6534.defaultParameterValues = i6544
  request.r(i6535[7], i6535[8], 0, i6534, 'unityFallbackShader')
  i6534.readDepth = !!i6535[9]
  i6534.isCreatedByShaderGraph = !!i6535[10]
  i6534.usedBatchUniforms = i6535[11]
  return i6534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6549 = data
  i6548.shaderName = i6549[0]
  i6548.errorMessage = i6549[1]
  return i6548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6552 = root || new pc.UnityShaderPass()
  var i6553 = data
  i6552.id = i6553[0]
  i6552.subShaderIndex = i6553[1]
  i6552.name = i6553[2]
  i6552.passType = i6553[3]
  i6552.grabPassTextureName = i6553[4]
  i6552.usePass = !!i6553[5]
  i6552.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6553[6], i6552.zTest)
  i6552.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6553[7], i6552.zWrite)
  i6552.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6553[8], i6552.culling)
  i6552.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6553[9], i6552.blending)
  i6552.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6553[10], i6552.alphaBlending)
  i6552.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6553[11], i6552.colorWriteMask)
  i6552.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6553[12], i6552.offsetUnits)
  i6552.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6553[13], i6552.offsetFactor)
  i6552.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6553[14], i6552.stencilRef)
  i6552.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6553[15], i6552.stencilReadMask)
  i6552.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6553[16], i6552.stencilWriteMask)
  i6552.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6553[17], i6552.stencilOp)
  i6552.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6553[18], i6552.stencilOpFront)
  i6552.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6553[19], i6552.stencilOpBack)
  var i6555 = i6553[20]
  var i6554 = []
  for(var i = 0; i < i6555.length; i += 1) {
    i6554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6555[i + 0]) );
  }
  i6552.tags = i6554
  var i6557 = i6553[21]
  var i6556 = []
  for(var i = 0; i < i6557.length; i += 1) {
    i6556.push( i6557[i + 0] );
  }
  i6552.passDefinedKeywords = i6556
  var i6559 = i6553[22]
  var i6558 = []
  for(var i = 0; i < i6559.length; i += 1) {
    i6558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6559[i + 0]) );
  }
  i6552.passDefinedKeywordGroups = i6558
  var i6561 = i6553[23]
  var i6560 = []
  for(var i = 0; i < i6561.length; i += 1) {
    i6560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6561[i + 0]) );
  }
  i6552.variants = i6560
  var i6563 = i6553[24]
  var i6562 = []
  for(var i = 0; i < i6563.length; i += 1) {
    i6562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6563[i + 0]) );
  }
  i6552.excludedVariants = i6562
  i6552.hasDepthReader = !!i6553[25]
  return i6552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6565 = data
  i6564.val = i6565[0]
  i6564.name = i6565[1]
  return i6564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6567 = data
  i6566.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6567[0], i6566.src)
  i6566.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6567[1], i6566.dst)
  i6566.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6567[2], i6566.op)
  return i6566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6569 = data
  i6568.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6569[0], i6568.pass)
  i6568.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6569[1], i6568.fail)
  i6568.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6569[2], i6568.zFail)
  i6568.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6569[3], i6568.comp)
  return i6568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6573 = data
  i6572.name = i6573[0]
  i6572.value = i6573[1]
  return i6572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6577 = data
  var i6579 = i6577[0]
  var i6578 = []
  for(var i = 0; i < i6579.length; i += 1) {
    i6578.push( i6579[i + 0] );
  }
  i6576.keywords = i6578
  i6576.hasDiscard = !!i6577[1]
  return i6576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6583 = data
  i6582.passId = i6583[0]
  i6582.subShaderIndex = i6583[1]
  var i6585 = i6583[2]
  var i6584 = []
  for(var i = 0; i < i6585.length; i += 1) {
    i6584.push( i6585[i + 0] );
  }
  i6582.keywords = i6584
  i6582.vertexProgram = i6583[3]
  i6582.fragmentProgram = i6583[4]
  i6582.compiledForWebGL2 = !!i6583[5]
  i6582.readDepth = !!i6583[6]
  return i6582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6589 = data
  request.r(i6589[0], i6589[1], 0, i6588, 'shader')
  i6588.pass = i6589[2]
  return i6588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6593 = data
  i6592.name = i6593[0]
  i6592.type = i6593[1]
  i6592.value = new pc.Vec4( i6593[2], i6593[3], i6593[4], i6593[5] )
  i6592.textureValue = i6593[6]
  i6592.shaderPropertyFlag = i6593[7]
  return i6592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6595 = data
  i6594.name = i6595[0]
  request.r(i6595[1], i6595[2], 0, i6594, 'texture')
  i6594.aabb = i6595[3]
  i6594.vertices = i6595[4]
  i6594.triangles = i6595[5]
  i6594.textureRect = UnityEngine.Rect.MinMaxRect(i6595[6], i6595[7], i6595[8], i6595[9])
  i6594.packedRect = UnityEngine.Rect.MinMaxRect(i6595[10], i6595[11], i6595[12], i6595[13])
  i6594.border = new pc.Vec4( i6595[14], i6595[15], i6595[16], i6595[17] )
  i6594.transparency = i6595[18]
  i6594.bounds = i6595[19]
  i6594.pixelsPerUnit = i6595[20]
  i6594.textureWidth = i6595[21]
  i6594.textureHeight = i6595[22]
  i6594.nativeSize = new pc.Vec2( i6595[23], i6595[24] )
  i6594.pivot = new pc.Vec2( i6595[25], i6595[26] )
  i6594.textureRectOffset = new pc.Vec2( i6595[27], i6595[28] )
  return i6594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6597 = data
  i6596.name = i6597[0]
  return i6596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i6598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i6599 = data
  i6598.name = i6599[0]
  i6598.ascent = i6599[1]
  i6598.originalLineHeight = i6599[2]
  i6598.fontSize = i6599[3]
  var i6601 = i6599[4]
  var i6600 = []
  for(var i = 0; i < i6601.length; i += 1) {
    i6600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i6601[i + 0]) );
  }
  i6598.characterInfo = i6600
  request.r(i6599[5], i6599[6], 0, i6598, 'texture')
  i6598.originalFontSize = i6599[7]
  return i6598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i6604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i6605 = data
  i6604.index = i6605[0]
  i6604.advance = i6605[1]
  i6604.bearing = i6605[2]
  i6604.glyphWidth = i6605[3]
  i6604.glyphHeight = i6605[4]
  i6604.minX = i6605[5]
  i6604.maxX = i6605[6]
  i6604.minY = i6605[7]
  i6604.maxY = i6605[8]
  i6604.uvBottomLeftX = i6605[9]
  i6604.uvBottomLeftY = i6605[10]
  i6604.uvBottomRightX = i6605[11]
  i6604.uvBottomRightY = i6605[12]
  i6604.uvTopLeftX = i6605[13]
  i6604.uvTopLeftY = i6605[14]
  i6604.uvTopRightX = i6605[15]
  i6604.uvTopRightY = i6605[16]
  return i6604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6607 = data
  i6606.name = i6607[0]
  i6606.bytes64 = i6607[1]
  i6606.data = i6607[2]
  return i6606
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i6608 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i6609 = data
  var i6611 = i6609[0]
  var i6610 = []
  for(var i = 0; i < i6611.length; i += 2) {
  request.r(i6611[i + 0], i6611[i + 1], 2, i6610, '')
  }
  i6608.atlasAssets = i6610
  i6608.scale = i6609[1]
  request.r(i6609[2], i6609[3], 0, i6608, 'skeletonJSON')
  i6608.isUpgradingBlendModeMaterials = !!i6609[4]
  i6608.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i6609[5], i6608.blendModeMaterials)
  var i6613 = i6609[6]
  var i6612 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i6613.length; i += 2) {
  request.r(i6613[i + 0], i6613[i + 1], 1, i6612, '')
  }
  i6608.skeletonDataModifiers = i6612
  var i6615 = i6609[7]
  var i6614 = []
  for(var i = 0; i < i6615.length; i += 1) {
    i6614.push( i6615[i + 0] );
  }
  i6608.fromAnimation = i6614
  var i6617 = i6609[8]
  var i6616 = []
  for(var i = 0; i < i6617.length; i += 1) {
    i6616.push( i6617[i + 0] );
  }
  i6608.toAnimation = i6616
  i6608.duration = i6609[9]
  i6608.defaultMix = i6609[10]
  request.r(i6609[11], i6609[12], 0, i6608, 'controller')
  return i6608
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i6620 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i6621 = data
  i6620.applyAdditiveMaterial = !!i6621[0]
  var i6623 = i6621[1]
  var i6622 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6623.length; i += 1) {
    i6622.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6623[i + 0]));
  }
  i6620.additiveMaterials = i6622
  var i6625 = i6621[2]
  var i6624 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6625.length; i += 1) {
    i6624.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6625[i + 0]));
  }
  i6620.multiplyMaterials = i6624
  var i6627 = i6621[3]
  var i6626 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6627.length; i += 1) {
    i6626.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6627[i + 0]));
  }
  i6620.screenMaterials = i6626
  i6620.requiresBlendModeMaterials = !!i6621[4]
  return i6620
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i6630 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i6631 = data
  i6630.pageName = i6631[0]
  request.r(i6631[1], i6631[2], 0, i6630, 'material')
  return i6630
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i6634 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i6635 = data
  request.r(i6635[0], i6635[1], 0, i6634, 'atlasFile')
  var i6637 = i6635[2]
  var i6636 = []
  for(var i = 0; i < i6637.length; i += 2) {
  request.r(i6637[i + 0], i6637[i + 1], 2, i6636, '')
  }
  i6634.materials = i6636
  i6634.textureLoadingMode = i6635[3]
  request.r(i6635[4], i6635[5], 0, i6634, 'onDemandTextureLoader')
  return i6634
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i6638 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i6639 = data
  i6638.hashCode = i6639[0]
  request.r(i6639[1], i6639[2], 0, i6638, 'material')
  i6638.materialHashCode = i6639[3]
  request.r(i6639[4], i6639[5], 0, i6638, 'atlas')
  i6638.normalStyle = i6639[6]
  i6638.normalSpacingOffset = i6639[7]
  i6638.boldStyle = i6639[8]
  i6638.boldSpacing = i6639[9]
  i6638.italicStyle = i6639[10]
  i6638.tabSize = i6639[11]
  i6638.m_Version = i6639[12]
  i6638.m_SourceFontFileGUID = i6639[13]
  request.r(i6639[14], i6639[15], 0, i6638, 'm_SourceFontFile_EditorRef')
  request.r(i6639[16], i6639[17], 0, i6638, 'm_SourceFontFile')
  i6638.m_AtlasPopulationMode = i6639[18]
  i6638.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6639[19], i6638.m_FaceInfo)
  var i6641 = i6639[20]
  var i6640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i6641.length; i += 1) {
    i6640.add(request.d('UnityEngine.TextCore.Glyph', i6641[i + 0]));
  }
  i6638.m_GlyphTable = i6640
  var i6643 = i6639[21]
  var i6642 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i6643.length; i += 1) {
    i6642.add(request.d('TMPro.TMP_Character', i6643[i + 0]));
  }
  i6638.m_CharacterTable = i6642
  var i6645 = i6639[22]
  var i6644 = []
  for(var i = 0; i < i6645.length; i += 2) {
  request.r(i6645[i + 0], i6645[i + 1], 2, i6644, '')
  }
  i6638.m_AtlasTextures = i6644
  i6638.m_AtlasTextureIndex = i6639[23]
  i6638.m_IsMultiAtlasTexturesEnabled = !!i6639[24]
  i6638.m_ClearDynamicDataOnBuild = !!i6639[25]
  var i6647 = i6639[26]
  var i6646 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6647.length; i += 1) {
    i6646.add(request.d('UnityEngine.TextCore.GlyphRect', i6647[i + 0]));
  }
  i6638.m_UsedGlyphRects = i6646
  var i6649 = i6639[27]
  var i6648 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6649.length; i += 1) {
    i6648.add(request.d('UnityEngine.TextCore.GlyphRect', i6649[i + 0]));
  }
  i6638.m_FreeGlyphRects = i6648
  i6638.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i6639[28], i6638.m_fontInfo)
  i6638.m_AtlasWidth = i6639[29]
  i6638.m_AtlasHeight = i6639[30]
  i6638.m_AtlasPadding = i6639[31]
  i6638.m_AtlasRenderMode = i6639[32]
  var i6651 = i6639[33]
  var i6650 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i6651.length; i += 1) {
    i6650.add(request.d('TMPro.TMP_Glyph', i6651[i + 0]));
  }
  i6638.m_glyphInfoList = i6650
  i6638.m_KerningTable = request.d('TMPro.KerningTable', i6639[34], i6638.m_KerningTable)
  i6638.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i6639[35], i6638.m_FontFeatureTable)
  var i6653 = i6639[36]
  var i6652 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6653.length; i += 2) {
  request.r(i6653[i + 0], i6653[i + 1], 1, i6652, '')
  }
  i6638.fallbackFontAssets = i6652
  var i6655 = i6639[37]
  var i6654 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6655.length; i += 2) {
  request.r(i6655[i + 0], i6655[i + 1], 1, i6654, '')
  }
  i6638.m_FallbackFontAssetTable = i6654
  i6638.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i6639[38], i6638.m_CreationSettings)
  var i6657 = i6639[39]
  var i6656 = []
  for(var i = 0; i < i6657.length; i += 1) {
    i6656.push( request.d('TMPro.TMP_FontWeightPair', i6657[i + 0]) );
  }
  i6638.m_FontWeightTable = i6656
  var i6659 = i6639[40]
  var i6658 = []
  for(var i = 0; i < i6659.length; i += 1) {
    i6658.push( request.d('TMPro.TMP_FontWeightPair', i6659[i + 0]) );
  }
  i6638.fontWeights = i6658
  return i6638
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i6660 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i6661 = data
  i6660.m_FaceIndex = i6661[0]
  i6660.m_FamilyName = i6661[1]
  i6660.m_StyleName = i6661[2]
  i6660.m_PointSize = i6661[3]
  i6660.m_Scale = i6661[4]
  i6660.m_UnitsPerEM = i6661[5]
  i6660.m_LineHeight = i6661[6]
  i6660.m_AscentLine = i6661[7]
  i6660.m_CapLine = i6661[8]
  i6660.m_MeanLine = i6661[9]
  i6660.m_Baseline = i6661[10]
  i6660.m_DescentLine = i6661[11]
  i6660.m_SuperscriptOffset = i6661[12]
  i6660.m_SuperscriptSize = i6661[13]
  i6660.m_SubscriptOffset = i6661[14]
  i6660.m_SubscriptSize = i6661[15]
  i6660.m_UnderlineOffset = i6661[16]
  i6660.m_UnderlineThickness = i6661[17]
  i6660.m_StrikethroughOffset = i6661[18]
  i6660.m_StrikethroughThickness = i6661[19]
  i6660.m_TabWidth = i6661[20]
  return i6660
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i6664 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i6665 = data
  i6664.m_Index = i6665[0]
  i6664.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6665[1], i6664.m_Metrics)
  i6664.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6665[2], i6664.m_GlyphRect)
  i6664.m_Scale = i6665[3]
  i6664.m_AtlasIndex = i6665[4]
  i6664.m_ClassDefinitionType = i6665[5]
  return i6664
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i6666 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i6667 = data
  i6666.m_Width = i6667[0]
  i6666.m_Height = i6667[1]
  i6666.m_HorizontalBearingX = i6667[2]
  i6666.m_HorizontalBearingY = i6667[3]
  i6666.m_HorizontalAdvance = i6667[4]
  return i6666
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i6668 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i6669 = data
  i6668.m_X = i6669[0]
  i6668.m_Y = i6669[1]
  i6668.m_Width = i6669[2]
  i6668.m_Height = i6669[3]
  return i6668
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i6672 = root || request.c( 'TMPro.TMP_Character' )
  var i6673 = data
  i6672.m_ElementType = i6673[0]
  i6672.m_Unicode = i6673[1]
  i6672.m_GlyphIndex = i6673[2]
  i6672.m_Scale = i6673[3]
  return i6672
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i6678 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i6679 = data
  i6678.Name = i6679[0]
  i6678.PointSize = i6679[1]
  i6678.Scale = i6679[2]
  i6678.CharacterCount = i6679[3]
  i6678.LineHeight = i6679[4]
  i6678.Baseline = i6679[5]
  i6678.Ascender = i6679[6]
  i6678.CapHeight = i6679[7]
  i6678.Descender = i6679[8]
  i6678.CenterLine = i6679[9]
  i6678.SuperscriptOffset = i6679[10]
  i6678.SubscriptOffset = i6679[11]
  i6678.SubSize = i6679[12]
  i6678.Underline = i6679[13]
  i6678.UnderlineThickness = i6679[14]
  i6678.strikethrough = i6679[15]
  i6678.strikethroughThickness = i6679[16]
  i6678.TabWidth = i6679[17]
  i6678.Padding = i6679[18]
  i6678.AtlasWidth = i6679[19]
  i6678.AtlasHeight = i6679[20]
  return i6678
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i6682 = root || request.c( 'TMPro.TMP_Glyph' )
  var i6683 = data
  i6682.id = i6683[0]
  i6682.x = i6683[1]
  i6682.y = i6683[2]
  i6682.width = i6683[3]
  i6682.height = i6683[4]
  i6682.xOffset = i6683[5]
  i6682.yOffset = i6683[6]
  i6682.xAdvance = i6683[7]
  i6682.scale = i6683[8]
  return i6682
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i6684 = root || request.c( 'TMPro.KerningTable' )
  var i6685 = data
  var i6687 = i6685[0]
  var i6686 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i6687.length; i += 1) {
    i6686.add(request.d('TMPro.KerningPair', i6687[i + 0]));
  }
  i6684.kerningPairs = i6686
  return i6684
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i6690 = root || request.c( 'TMPro.KerningPair' )
  var i6691 = data
  i6690.xOffset = i6691[0]
  i6690.m_FirstGlyph = i6691[1]
  i6690.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6691[2], i6690.m_FirstGlyphAdjustments)
  i6690.m_SecondGlyph = i6691[3]
  i6690.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6691[4], i6690.m_SecondGlyphAdjustments)
  i6690.m_IgnoreSpacingAdjustments = !!i6691[5]
  return i6690
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i6692 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i6693 = data
  var i6695 = i6693[0]
  var i6694 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i6695.length; i += 1) {
    i6694.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i6695[i + 0]));
  }
  i6692.m_GlyphPairAdjustmentRecords = i6694
  return i6692
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i6698 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i6699 = data
  i6698.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i6699[0], i6698.m_FirstAdjustmentRecord)
  i6698.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i6699[1], i6698.m_SecondAdjustmentRecord)
  i6698.m_FeatureLookupFlags = i6699[2]
  return i6698
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i6702 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i6703 = data
  i6702.sourceFontFileName = i6703[0]
  i6702.sourceFontFileGUID = i6703[1]
  i6702.pointSizeSamplingMode = i6703[2]
  i6702.pointSize = i6703[3]
  i6702.padding = i6703[4]
  i6702.packingMode = i6703[5]
  i6702.atlasWidth = i6703[6]
  i6702.atlasHeight = i6703[7]
  i6702.characterSetSelectionMode = i6703[8]
  i6702.characterSequence = i6703[9]
  i6702.referencedFontAssetGUID = i6703[10]
  i6702.referencedTextAssetGUID = i6703[11]
  i6702.fontStyle = i6703[12]
  i6702.fontStyleModifier = i6703[13]
  i6702.renderMode = i6703[14]
  i6702.includeFontFeatures = !!i6703[15]
  return i6702
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i6706 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i6707 = data
  request.r(i6707[0], i6707[1], 0, i6706, 'regularTypeface')
  request.r(i6707[2], i6707[3], 0, i6706, 'italicTypeface')
  return i6706
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i6708 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i6709 = data
  i6708.useSafeMode = !!i6709[0]
  i6708.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i6709[1], i6708.safeModeOptions)
  i6708.timeScale = i6709[2]
  i6708.unscaledTimeScale = i6709[3]
  i6708.useSmoothDeltaTime = !!i6709[4]
  i6708.maxSmoothUnscaledTime = i6709[5]
  i6708.rewindCallbackMode = i6709[6]
  i6708.showUnityEditorReport = !!i6709[7]
  i6708.logBehaviour = i6709[8]
  i6708.drawGizmos = !!i6709[9]
  i6708.defaultRecyclable = !!i6709[10]
  i6708.defaultAutoPlay = i6709[11]
  i6708.defaultUpdateType = i6709[12]
  i6708.defaultTimeScaleIndependent = !!i6709[13]
  i6708.defaultEaseType = i6709[14]
  i6708.defaultEaseOvershootOrAmplitude = i6709[15]
  i6708.defaultEasePeriod = i6709[16]
  i6708.defaultAutoKill = !!i6709[17]
  i6708.defaultLoopType = i6709[18]
  i6708.debugMode = !!i6709[19]
  i6708.debugStoreTargetId = !!i6709[20]
  i6708.showPreviewPanel = !!i6709[21]
  i6708.storeSettingsLocation = i6709[22]
  i6708.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i6709[23], i6708.modules)
  i6708.createASMDEF = !!i6709[24]
  i6708.showPlayingTweens = !!i6709[25]
  i6708.showPausedTweens = !!i6709[26]
  return i6708
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i6710 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i6711 = data
  i6710.logBehaviour = i6711[0]
  i6710.nestedTweenFailureBehaviour = i6711[1]
  return i6710
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i6712 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i6713 = data
  i6712.showPanel = !!i6713[0]
  i6712.audioEnabled = !!i6713[1]
  i6712.physicsEnabled = !!i6713[2]
  i6712.physics2DEnabled = !!i6713[3]
  i6712.spriteEnabled = !!i6713[4]
  i6712.uiEnabled = !!i6713[5]
  i6712.textMeshProEnabled = !!i6713[6]
  i6712.tk2DEnabled = !!i6713[7]
  i6712.deAudioEnabled = !!i6713[8]
  i6712.deUnityExtendedEnabled = !!i6713[9]
  i6712.epoOutlineEnabled = !!i6713[10]
  return i6712
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i6714 = root || request.c( 'TMPro.TMP_Settings' )
  var i6715 = data
  i6714.m_enableWordWrapping = !!i6715[0]
  i6714.m_enableKerning = !!i6715[1]
  i6714.m_enableExtraPadding = !!i6715[2]
  i6714.m_enableTintAllSprites = !!i6715[3]
  i6714.m_enableParseEscapeCharacters = !!i6715[4]
  i6714.m_EnableRaycastTarget = !!i6715[5]
  i6714.m_GetFontFeaturesAtRuntime = !!i6715[6]
  i6714.m_missingGlyphCharacter = i6715[7]
  i6714.m_warningsDisabled = !!i6715[8]
  request.r(i6715[9], i6715[10], 0, i6714, 'm_defaultFontAsset')
  i6714.m_defaultFontAssetPath = i6715[11]
  i6714.m_defaultFontSize = i6715[12]
  i6714.m_defaultAutoSizeMinRatio = i6715[13]
  i6714.m_defaultAutoSizeMaxRatio = i6715[14]
  i6714.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i6715[15], i6715[16] )
  i6714.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i6715[17], i6715[18] )
  i6714.m_autoSizeTextContainer = !!i6715[19]
  i6714.m_IsTextObjectScaleStatic = !!i6715[20]
  var i6717 = i6715[21]
  var i6716 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6717.length; i += 2) {
  request.r(i6717[i + 0], i6717[i + 1], 1, i6716, '')
  }
  i6714.m_fallbackFontAssets = i6716
  i6714.m_matchMaterialPreset = !!i6715[22]
  request.r(i6715[23], i6715[24], 0, i6714, 'm_defaultSpriteAsset')
  i6714.m_defaultSpriteAssetPath = i6715[25]
  i6714.m_enableEmojiSupport = !!i6715[26]
  i6714.m_MissingCharacterSpriteUnicode = i6715[27]
  i6714.m_defaultColorGradientPresetsPath = i6715[28]
  request.r(i6715[29], i6715[30], 0, i6714, 'm_defaultStyleSheet')
  i6714.m_StyleSheetsResourcePath = i6715[31]
  request.r(i6715[32], i6715[33], 0, i6714, 'm_leadingCharacters')
  request.r(i6715[34], i6715[35], 0, i6714, 'm_followingCharacters')
  i6714.m_UseModernHangulLineBreakingRules = !!i6715[36]
  return i6714
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i6718 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i6719 = data
  i6718.m_GlyphIndex = i6719[0]
  i6718.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i6719[1], i6718.m_GlyphValueRecord)
  return i6718
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i6720 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i6721 = data
  i6720.m_XPlacement = i6721[0]
  i6720.m_YPlacement = i6721[1]
  i6720.m_XAdvance = i6721[2]
  i6720.m_YAdvance = i6721[3]
  return i6720
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i6722 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i6723 = data
  i6722.hashCode = i6723[0]
  request.r(i6723[1], i6723[2], 0, i6722, 'material')
  i6722.materialHashCode = i6723[3]
  request.r(i6723[4], i6723[5], 0, i6722, 'spriteSheet')
  var i6725 = i6723[6]
  var i6724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i6725.length; i += 1) {
    i6724.add(request.d('TMPro.TMP_Sprite', i6725[i + 0]));
  }
  i6722.spriteInfoList = i6724
  var i6727 = i6723[7]
  var i6726 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i6727.length; i += 2) {
  request.r(i6727[i + 0], i6727[i + 1], 1, i6726, '')
  }
  i6722.fallbackSpriteAssets = i6726
  i6722.m_Version = i6723[8]
  i6722.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6723[9], i6722.m_FaceInfo)
  var i6729 = i6723[10]
  var i6728 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i6729.length; i += 1) {
    i6728.add(request.d('TMPro.TMP_SpriteCharacter', i6729[i + 0]));
  }
  i6722.m_SpriteCharacterTable = i6728
  var i6731 = i6723[11]
  var i6730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i6731.length; i += 1) {
    i6730.add(request.d('TMPro.TMP_SpriteGlyph', i6731[i + 0]));
  }
  i6722.m_SpriteGlyphTable = i6730
  return i6722
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i6734 = root || request.c( 'TMPro.TMP_Sprite' )
  var i6735 = data
  i6734.name = i6735[0]
  i6734.hashCode = i6735[1]
  i6734.unicode = i6735[2]
  i6734.pivot = new pc.Vec2( i6735[3], i6735[4] )
  request.r(i6735[5], i6735[6], 0, i6734, 'sprite')
  i6734.id = i6735[7]
  i6734.x = i6735[8]
  i6734.y = i6735[9]
  i6734.width = i6735[10]
  i6734.height = i6735[11]
  i6734.xOffset = i6735[12]
  i6734.yOffset = i6735[13]
  i6734.xAdvance = i6735[14]
  i6734.scale = i6735[15]
  return i6734
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i6740 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i6741 = data
  i6740.m_Name = i6741[0]
  i6740.m_HashCode = i6741[1]
  i6740.m_ElementType = i6741[2]
  i6740.m_Unicode = i6741[3]
  i6740.m_GlyphIndex = i6741[4]
  i6740.m_Scale = i6741[5]
  return i6740
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i6744 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i6745 = data
  request.r(i6745[0], i6745[1], 0, i6744, 'sprite')
  i6744.m_Index = i6745[2]
  i6744.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6745[3], i6744.m_Metrics)
  i6744.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6745[4], i6744.m_GlyphRect)
  i6744.m_Scale = i6745[5]
  i6744.m_AtlasIndex = i6745[6]
  i6744.m_ClassDefinitionType = i6745[7]
  return i6744
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i6746 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i6747 = data
  var i6749 = i6747[0]
  var i6748 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i6749.length; i += 1) {
    i6748.add(request.d('TMPro.TMP_Style', i6749[i + 0]));
  }
  i6746.m_StyleList = i6748
  return i6746
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i6752 = root || request.c( 'TMPro.TMP_Style' )
  var i6753 = data
  i6752.m_Name = i6753[0]
  i6752.m_HashCode = i6753[1]
  i6752.m_OpeningDefinition = i6753[2]
  i6752.m_ClosingDefinition = i6753[3]
  i6752.m_OpeningTagArray = i6753[4]
  i6752.m_ClosingTagArray = i6753[5]
  i6752.m_OpeningTagUnicodeArray = i6753[6]
  i6752.m_ClosingTagUnicodeArray = i6753[7]
  return i6752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6755 = data
  var i6757 = i6755[0]
  var i6756 = []
  for(var i = 0; i < i6757.length; i += 1) {
    i6756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6757[i + 0]) );
  }
  i6754.files = i6756
  i6754.componentToPrefabIds = i6755[1]
  return i6754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6761 = data
  i6760.path = i6761[0]
  request.r(i6761[1], i6761[2], 0, i6760, 'unityObject')
  return i6760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6763 = data
  var i6765 = i6763[0]
  var i6764 = []
  for(var i = 0; i < i6765.length; i += 1) {
    i6764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6765[i + 0]) );
  }
  i6762.scriptsExecutionOrder = i6764
  var i6767 = i6763[1]
  var i6766 = []
  for(var i = 0; i < i6767.length; i += 1) {
    i6766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6767[i + 0]) );
  }
  i6762.sortingLayers = i6766
  var i6769 = i6763[2]
  var i6768 = []
  for(var i = 0; i < i6769.length; i += 1) {
    i6768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6769[i + 0]) );
  }
  i6762.cullingLayers = i6768
  i6762.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6763[3], i6762.timeSettings)
  i6762.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6763[4], i6762.physicsSettings)
  i6762.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6763[5], i6762.physics2DSettings)
  i6762.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6763[6], i6762.qualitySettings)
  i6762.enableRealtimeShadows = !!i6763[7]
  i6762.enableAutoInstancing = !!i6763[8]
  i6762.enableDynamicBatching = !!i6763[9]
  i6762.lightmapEncodingQuality = i6763[10]
  i6762.desiredColorSpace = i6763[11]
  var i6771 = i6763[12]
  var i6770 = []
  for(var i = 0; i < i6771.length; i += 1) {
    i6770.push( i6771[i + 0] );
  }
  i6762.allTags = i6770
  return i6762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6775 = data
  i6774.name = i6775[0]
  i6774.value = i6775[1]
  return i6774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6779 = data
  i6778.id = i6779[0]
  i6778.name = i6779[1]
  i6778.value = i6779[2]
  return i6778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6783 = data
  i6782.id = i6783[0]
  i6782.name = i6783[1]
  return i6782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6785 = data
  i6784.fixedDeltaTime = i6785[0]
  i6784.maximumDeltaTime = i6785[1]
  i6784.timeScale = i6785[2]
  i6784.maximumParticleTimestep = i6785[3]
  return i6784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6787 = data
  i6786.gravity = new pc.Vec3( i6787[0], i6787[1], i6787[2] )
  i6786.defaultSolverIterations = i6787[3]
  i6786.bounceThreshold = i6787[4]
  i6786.autoSyncTransforms = !!i6787[5]
  i6786.autoSimulation = !!i6787[6]
  var i6789 = i6787[7]
  var i6788 = []
  for(var i = 0; i < i6789.length; i += 1) {
    i6788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6789[i + 0]) );
  }
  i6786.collisionMatrix = i6788
  return i6786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6793 = data
  i6792.enabled = !!i6793[0]
  i6792.layerId = i6793[1]
  i6792.otherLayerId = i6793[2]
  return i6792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6795 = data
  request.r(i6795[0], i6795[1], 0, i6794, 'material')
  i6794.gravity = new pc.Vec2( i6795[2], i6795[3] )
  i6794.positionIterations = i6795[4]
  i6794.velocityIterations = i6795[5]
  i6794.velocityThreshold = i6795[6]
  i6794.maxLinearCorrection = i6795[7]
  i6794.maxAngularCorrection = i6795[8]
  i6794.maxTranslationSpeed = i6795[9]
  i6794.maxRotationSpeed = i6795[10]
  i6794.baumgarteScale = i6795[11]
  i6794.baumgarteTOIScale = i6795[12]
  i6794.timeToSleep = i6795[13]
  i6794.linearSleepTolerance = i6795[14]
  i6794.angularSleepTolerance = i6795[15]
  i6794.defaultContactOffset = i6795[16]
  i6794.autoSimulation = !!i6795[17]
  i6794.queriesHitTriggers = !!i6795[18]
  i6794.queriesStartInColliders = !!i6795[19]
  i6794.callbacksOnDisable = !!i6795[20]
  i6794.reuseCollisionCallbacks = !!i6795[21]
  i6794.autoSyncTransforms = !!i6795[22]
  var i6797 = i6795[23]
  var i6796 = []
  for(var i = 0; i < i6797.length; i += 1) {
    i6796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6797[i + 0]) );
  }
  i6794.collisionMatrix = i6796
  return i6794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6801 = data
  i6800.enabled = !!i6801[0]
  i6800.layerId = i6801[1]
  i6800.otherLayerId = i6801[2]
  return i6800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6803 = data
  var i6805 = i6803[0]
  var i6804 = []
  for(var i = 0; i < i6805.length; i += 1) {
    i6804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6805[i + 0]) );
  }
  i6802.qualityLevels = i6804
  var i6807 = i6803[1]
  var i6806 = []
  for(var i = 0; i < i6807.length; i += 1) {
    i6806.push( i6807[i + 0] );
  }
  i6802.names = i6806
  i6802.shadows = i6803[2]
  i6802.anisotropicFiltering = i6803[3]
  i6802.antiAliasing = i6803[4]
  i6802.lodBias = i6803[5]
  i6802.shadowCascades = i6803[6]
  i6802.shadowDistance = i6803[7]
  i6802.shadowmaskMode = i6803[8]
  i6802.shadowProjection = i6803[9]
  i6802.shadowResolution = i6803[10]
  i6802.softParticles = !!i6803[11]
  i6802.softVegetation = !!i6803[12]
  i6802.activeColorSpace = i6803[13]
  i6802.desiredColorSpace = i6803[14]
  i6802.masterTextureLimit = i6803[15]
  i6802.maxQueuedFrames = i6803[16]
  i6802.particleRaycastBudget = i6803[17]
  i6802.pixelLightCount = i6803[18]
  i6802.realtimeReflectionProbes = !!i6803[19]
  i6802.shadowCascade2Split = i6803[20]
  i6802.shadowCascade4Split = new pc.Vec3( i6803[21], i6803[22], i6803[23] )
  i6802.streamingMipmapsActive = !!i6803[24]
  i6802.vSyncCount = i6803[25]
  i6802.asyncUploadBufferSize = i6803[26]
  i6802.asyncUploadTimeSlice = i6803[27]
  i6802.billboardsFaceCameraPosition = !!i6803[28]
  i6802.shadowNearPlaneOffset = i6803[29]
  i6802.streamingMipmapsMemoryBudget = i6803[30]
  i6802.maximumLODLevel = i6803[31]
  i6802.streamingMipmapsAddAllCameras = !!i6803[32]
  i6802.streamingMipmapsMaxLevelReduction = i6803[33]
  i6802.streamingMipmapsRenderersPerFrame = i6803[34]
  i6802.resolutionScalingFixedDPIFactor = i6803[35]
  i6802.streamingMipmapsMaxFileIORequests = i6803[36]
  i6802.currentQualityLevel = i6803[37]
  return i6802
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i6810 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i6811 = data
  i6810.xPlacement = i6811[0]
  i6810.yPlacement = i6811[1]
  i6810.xAdvance = i6811[2]
  i6810.yAdvance = i6811[3]
  return i6810
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[11],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[11],"77":[78],"79":[80],"81":[80],"15":[2],"82":[83],"84":[85],"86":[83],"87":[2],"88":[2],"17":[15],"23":[3,2],"89":[2],"16":[15],"90":[2],"91":[2],"32":[2],"92":[2],"93":[2],"94":[2],"30":[2],"36":[2],"95":[2],"22":[3,2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[3,2],"101":[2],"102":[13],"103":[13],"14":[13],"104":[13],"105":[11],"106":[11],"107":[108],"109":[11],"110":[111],"112":[2],"113":[3,2],"114":[78],"5":[3,2],"115":[116,78],"117":[78],"118":[78,119],"120":[55],"121":[63],"122":[111],"123":[124],"125":[2],"126":[78,2],"33":[2,3],"127":[2],"128":[3,2],"129":[78],"130":[3,2],"131":[2],"132":[83]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","UnityEngine.UI.Image","UnityEngine.Sprite","ClickItem","DraggableItem","UnityEngine.CanvasGroup","DropZone","UnityEngine.BoxCollider2D","UnityEngine.UI.VerticalLayoutGroup","MoveLeftRight","UnityEngine.UI.HorizontalLayoutGroup","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "2.2";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "APG_V06_TrangHT_AnhPD";

Deserializers.lunaAppID = "29138";

Deserializers.projectId = "cc2b1186a2056e546bb13add5b988034";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1709";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4626";

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

Deserializers.buildID = "99ba0738-2fba-4355-b6fe-34f8d12c10a3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

