var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i366 = root || request.c( 'UnityEngine.JointSpring' )
  var i367 = data
  i366.spring = i367[0]
  i366.damper = i367[1]
  i366.targetPosition = i367[2]
  return i366
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.JointMotor' )
  var i369 = data
  i368.m_TargetVelocity = i369[0]
  i368.m_Force = i369[1]
  i368.m_FreeSpin = i369[2]
  return i368
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i370 = root || request.c( 'UnityEngine.JointLimits' )
  var i371 = data
  i370.m_Min = i371[0]
  i370.m_Max = i371[1]
  i370.m_Bounciness = i371[2]
  i370.m_BounceMinVelocity = i371[3]
  i370.m_ContactDistance = i371[4]
  i370.minBounce = i371[5]
  i370.maxBounce = i371[6]
  return i370
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.JointDrive' )
  var i373 = data
  i372.m_PositionSpring = i373[0]
  i372.m_PositionDamper = i373[1]
  i372.m_MaximumForce = i373[2]
  i372.m_UseAcceleration = i373[3]
  return i372
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i375 = data
  i374.m_Spring = i375[0]
  i374.m_Damper = i375[1]
  return i374
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i376 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i377 = data
  i376.m_Limit = i377[0]
  i376.m_Bounciness = i377[1]
  i376.m_ContactDistance = i377[2]
  return i376
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i378 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i379 = data
  i378.m_ExtremumSlip = i379[0]
  i378.m_ExtremumValue = i379[1]
  i378.m_AsymptoteSlip = i379[2]
  i378.m_AsymptoteValue = i379[3]
  i378.m_Stiffness = i379[4]
  return i378
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i380 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i381 = data
  i380.m_LowerAngle = i381[0]
  i380.m_UpperAngle = i381[1]
  return i380
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i382 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i383 = data
  i382.m_MotorSpeed = i383[0]
  i382.m_MaximumMotorTorque = i383[1]
  return i382
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i384 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i385 = data
  i384.m_DampingRatio = i385[0]
  i384.m_Frequency = i385[1]
  i384.m_Angle = i385[2]
  return i384
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i386 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i387 = data
  i386.m_LowerTranslation = i387[0]
  i386.m_UpperTranslation = i387[1]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i388 = root || new pc.UnityMaterial()
  var i389 = data
  i388.name = i389[0]
  request.r(i389[1], i389[2], 0, i388, 'shader')
  i388.renderQueue = i389[3]
  i388.enableInstancing = !!i389[4]
  var i391 = i389[5]
  var i390 = []
  for(var i = 0; i < i391.length; i += 1) {
    i390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i391[i + 0]) );
  }
  i388.floatParameters = i390
  var i393 = i389[6]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i393[i + 0]) );
  }
  i388.colorParameters = i392
  var i395 = i389[7]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i395[i + 0]) );
  }
  i388.vectorParameters = i394
  var i397 = i389[8]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i397[i + 0]) );
  }
  i388.textureParameters = i396
  var i399 = i389[9]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i399[i + 0]) );
  }
  i388.materialFlags = i398
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i403 = data
  i402.name = i403[0]
  i402.value = i403[1]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i407 = data
  i406.name = i407[0]
  i406.value = new pc.Color(i407[1], i407[2], i407[3], i407[4])
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i411 = data
  i410.name = i411[0]
  i410.value = new pc.Vec4( i411[1], i411[2], i411[3], i411[4] )
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i415 = data
  i414.name = i415[0]
  request.r(i415[1], i415[2], 0, i414, 'value')
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i419 = data
  i418.name = i419[0]
  i418.enabled = !!i419[1]
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i421 = data
  i420.name = i421[0]
  i420.width = i421[1]
  i420.height = i421[2]
  i420.mipmapCount = i421[3]
  i420.anisoLevel = i421[4]
  i420.filterMode = i421[5]
  i420.hdr = !!i421[6]
  i420.format = i421[7]
  i420.wrapMode = i421[8]
  i420.alphaIsTransparency = !!i421[9]
  i420.alphaSource = i421[10]
  i420.graphicsFormat = i421[11]
  i420.sRGBTexture = !!i421[12]
  i420.desiredColorSpace = i421[13]
  i420.wrapU = i421[14]
  i420.wrapV = i421[15]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i423 = data
  i422.name = i423[0]
  i422.index = i423[1]
  i422.startup = !!i423[2]
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i425 = data
  i424.position = new pc.Vec3( i425[0], i425[1], i425[2] )
  i424.scale = new pc.Vec3( i425[3], i425[4], i425[5] )
  i424.rotation = new pc.Quat(i425[6], i425[7], i425[8], i425[9])
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i427 = data
  i426.aspect = i427[0]
  i426.orthographic = !!i427[1]
  i426.orthographicSize = i427[2]
  i426.backgroundColor = new pc.Color(i427[3], i427[4], i427[5], i427[6])
  i426.nearClipPlane = i427[7]
  i426.farClipPlane = i427[8]
  i426.fieldOfView = i427[9]
  i426.depth = i427[10]
  i426.clearFlags = i427[11]
  i426.cullingMask = i427[12]
  i426.rect = i427[13]
  request.r(i427[14], i427[15], 0, i426, 'targetTexture')
  i426.usePhysicalProperties = !!i427[16]
  i426.focalLength = i427[17]
  i426.sensorSize = new pc.Vec2( i427[18], i427[19] )
  i426.lensShift = new pc.Vec2( i427[20], i427[21] )
  i426.gateFit = i427[22]
  i426.commandBufferCount = i427[23]
  i426.cameraType = i427[24]
  i426.enabled = !!i427[25]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i429 = data
  i428.name = i429[0]
  i428.tagId = i429[1]
  i428.enabled = !!i429[2]
  i428.isStatic = !!i429[3]
  i428.layer = i429[4]
  return i428
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i431 = data
  request.r(i431[0], i431[1], 0, i430, 'm_FirstSelected')
  i430.m_sendNavigationEvents = !!i431[2]
  i430.m_DragThreshold = i431[3]
  return i430
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i433 = data
  i432.m_HorizontalAxis = i433[0]
  i432.m_VerticalAxis = i433[1]
  i432.m_SubmitButton = i433[2]
  i432.m_CancelButton = i433[3]
  i432.m_InputActionsPerSecond = i433[4]
  i432.m_RepeatDelay = i433[5]
  i432.m_ForceModuleActive = !!i433[6]
  i432.m_SendPointerHoverToParent = !!i433[7]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i435 = data
  i434.pivot = new pc.Vec2( i435[0], i435[1] )
  i434.anchorMin = new pc.Vec2( i435[2], i435[3] )
  i434.anchorMax = new pc.Vec2( i435[4], i435[5] )
  i434.sizeDelta = new pc.Vec2( i435[6], i435[7] )
  i434.anchoredPosition3D = new pc.Vec3( i435[8], i435[9], i435[10] )
  i434.rotation = new pc.Quat(i435[11], i435[12], i435[13], i435[14])
  i434.scale = new pc.Vec3( i435[15], i435[16], i435[17] )
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i437 = data
  i436.planeDistance = i437[0]
  i436.referencePixelsPerUnit = i437[1]
  i436.isFallbackOverlay = !!i437[2]
  i436.renderMode = i437[3]
  i436.renderOrder = i437[4]
  i436.sortingLayerName = i437[5]
  i436.sortingOrder = i437[6]
  i436.scaleFactor = i437[7]
  request.r(i437[8], i437[9], 0, i436, 'worldCamera')
  i436.overrideSorting = !!i437[10]
  i436.pixelPerfect = !!i437[11]
  i436.targetDisplay = i437[12]
  i436.overridePixelPerfect = !!i437[13]
  i436.enabled = !!i437[14]
  return i436
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i439 = data
  i438.m_UiScaleMode = i439[0]
  i438.m_ReferencePixelsPerUnit = i439[1]
  i438.m_ScaleFactor = i439[2]
  i438.m_ReferenceResolution = new pc.Vec2( i439[3], i439[4] )
  i438.m_ScreenMatchMode = i439[5]
  i438.m_MatchWidthOrHeight = i439[6]
  i438.m_PhysicalUnit = i439[7]
  i438.m_FallbackScreenDPI = i439[8]
  i438.m_DefaultSpriteDPI = i439[9]
  i438.m_DynamicPixelsPerUnit = i439[10]
  i438.m_PresetInfoIsWorld = !!i439[11]
  return i438
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i441 = data
  i440.m_IgnoreReversedGraphics = !!i441[0]
  i440.m_BlockingObjects = i441[1]
  i440.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i441[2] )
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i443 = data
  i442.cullTransparentMesh = !!i443[0]
  return i442
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.UI.Image' )
  var i445 = data
  request.r(i445[0], i445[1], 0, i444, 'm_Sprite')
  i444.m_Type = i445[2]
  i444.m_PreserveAspect = !!i445[3]
  i444.m_FillCenter = !!i445[4]
  i444.m_FillMethod = i445[5]
  i444.m_FillAmount = i445[6]
  i444.m_FillClockwise = !!i445[7]
  i444.m_FillOrigin = i445[8]
  i444.m_UseSpriteMesh = !!i445[9]
  i444.m_PixelsPerUnitMultiplier = i445[10]
  i444.m_Maskable = !!i445[11]
  request.r(i445[12], i445[13], 0, i444, 'm_Material')
  i444.m_Color = new pc.Color(i445[14], i445[15], i445[16], i445[17])
  i444.m_RaycastTarget = !!i445[18]
  i444.m_RaycastPadding = new pc.Vec4( i445[19], i445[20], i445[21], i445[22] )
  return i444
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i446 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i447 = data
  request.r(i447[0], i447[1], 0, i446, 'skeletonDataAsset')
  request.r(i447[2], i447[3], 0, i446, 'additiveMaterial')
  request.r(i447[4], i447[5], 0, i446, 'multiplyMaterial')
  request.r(i447[6], i447[7], 0, i446, 'screenMaterial')
  i446.forceAdditiveMaterial = !!i447[8]
  i446.initialSkinName = i447[9]
  i446.initialFlipX = !!i447[10]
  i446.initialFlipY = !!i447[11]
  i446.startingAnimation = i447[12]
  i446.startingLoop = !!i447[13]
  i446.timeScale = i447[14]
  i446.freeze = !!i447[15]
  i446.layoutScaleMode = i447[16]
  i446.updateWhenInvisible = i447[17]
  i446.allowMultipleCanvasRenderers = !!i447[18]
  var i449 = i447[19]
  var i448 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i449.length; i += 2) {
  request.r(i449[i + 0], i449[i + 1], 1, i448, '')
  }
  i446.canvasRenderers = i448
  i446.enableSeparatorSlots = !!i447[20]
  i446.updateSeparatorPartLocation = !!i447[21]
  i446.updateSeparatorPartScale = !!i447[22]
  i446.disableMeshAssignmentOnOverride = !!i447[23]
  i446.m_SkeletonColor = new pc.Color(i447[24], i447[25], i447[26], i447[27])
  i446.referenceSize = new pc.Vec2( i447[28], i447[29] )
  i446.pivotOffset = new pc.Vec2( i447[30], i447[31] )
  i446.referenceScale = i447[32]
  i446.layoutScale = i447[33]
  i446.rectTransformSize = new pc.Vec2( i447[34], i447[35] )
  i446.editReferenceRect = !!i447[36]
  var i451 = i447[37]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( i451[i + 0] );
  }
  i446.separatorSlotNames = i450
  var i453 = i447[38]
  var i452 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i453.length; i += 2) {
  request.r(i453[i + 0], i453[i + 1], 1, i452, '')
  }
  i446.separatorParts = i452
  i446.physicsPositionInheritanceFactor = new pc.Vec2( i447[39], i447[40] )
  i446.physicsRotationInheritanceFactor = i447[41]
  request.r(i447[42], i447[43], 0, i446, 'physicsMovementRelativeTo')
  i446.meshGenerator = request.d('Spine.Unity.MeshGenerator', i447[44], i446.meshGenerator)
  i446.updateTiming = i447[45]
  i446.unscaledTime = !!i447[46]
  i446.m_Maskable = !!i447[47]
  request.r(i447[48], i447[49], 0, i446, 'm_Material')
  i446.m_Color = new pc.Color(i447[50], i447[51], i447[52], i447[53])
  i446.m_RaycastTarget = !!i447[54]
  i446.m_RaycastPadding = new pc.Vec4( i447[55], i447[56], i447[57], i447[58] )
  return i446
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i460 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i461 = data
  i460.settings = request.d('Spine.Unity.MeshGenerator+Settings', i461[0], i460.settings)
  return i460
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i462 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i463 = data
  i462.useClipping = !!i463[0]
  i462.zSpacing = i463[1]
  i462.tintBlack = !!i463[2]
  i462.canvasGroupCompatible = !!i463[3]
  i462.pmaVertexColors = !!i463[4]
  i462.addNormals = !!i463[5]
  i462.calculateTangents = !!i463[6]
  i462.immutableTriangles = !!i463[7]
  return i462
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i464 = root || request.c( 'AnimationController' )
  var i465 = data
  var i467 = i465[0]
  var i466 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i467.length; i += 1) {
    i466.add(request.d('Anim', i467[i + 0]));
  }
  i464.anims = i466
  i464.currentIndex = i465[1]
  return i464
}

Deserializers["Anim"] = function (request, data, root) {
  var i470 = root || request.c( 'Anim' )
  var i471 = data
  i470.Key = i471[0]
  var i473 = i471[1]
  var i472 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i473.length; i += 2) {
  request.r(i473[i + 0], i473[i + 1], 1, i472, '')
  }
  i470.Sound = i472
  i470.DelaySFX = i471[2]
  i470.Loop = !!i471[3]
  i470.Next = !!i471[4]
  return i470
}

Deserializers["MedicineController"] = function (request, data, root) {
  var i476 = root || request.c( 'MedicineController' )
  var i477 = data
  var i479 = i477[0]
  var i478 = new (System.Collections.Generic.List$1(Bridge.ns('Med')))
  for(var i = 0; i < i479.length; i += 1) {
    i478.add(request.d('Med', i479[i + 0]));
  }
  i476.skeletons = i478
  var i481 = i477[1]
  var i480 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i481.length; i += 2) {
  request.r(i481[i + 0], i481[i + 1], 1, i480, '')
  }
  i476.sounds = i480
  return i476
}

Deserializers["Med"] = function (request, data, root) {
  var i484 = root || request.c( 'Med' )
  var i485 = data
  request.r(i485[0], i485[1], 0, i484, 'Area')
  i484.Key = i485[2]
  return i484
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.UI.Text' )
  var i487 = data
  i486.m_FontData = request.d('UnityEngine.UI.FontData', i487[0], i486.m_FontData)
  i486.m_Text = i487[1]
  i486.m_Maskable = !!i487[2]
  request.r(i487[3], i487[4], 0, i486, 'm_Material')
  i486.m_Color = new pc.Color(i487[5], i487[6], i487[7], i487[8])
  i486.m_RaycastTarget = !!i487[9]
  i486.m_RaycastPadding = new pc.Vec4( i487[10], i487[11], i487[12], i487[13] )
  return i486
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.UI.FontData' )
  var i489 = data
  request.r(i489[0], i489[1], 0, i488, 'm_Font')
  i488.m_FontSize = i489[2]
  i488.m_FontStyle = i489[3]
  i488.m_BestFit = !!i489[4]
  i488.m_MinSize = i489[5]
  i488.m_MaxSize = i489[6]
  i488.m_Alignment = i489[7]
  i488.m_AlignByGeometry = !!i489[8]
  i488.m_RichText = !!i489[9]
  i488.m_HorizontalOverflow = i489[10]
  i488.m_VerticalOverflow = i489[11]
  i488.m_LineSpacing = i489[12]
  return i488
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.UI.Slider' )
  var i491 = data
  request.r(i491[0], i491[1], 0, i490, 'm_FillRect')
  request.r(i491[2], i491[3], 0, i490, 'm_HandleRect')
  i490.m_Direction = i491[4]
  i490.m_MinValue = i491[5]
  i490.m_MaxValue = i491[6]
  i490.m_WholeNumbers = !!i491[7]
  i490.m_Value = i491[8]
  i490.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i491[9], i490.m_OnValueChanged)
  i490.m_Navigation = request.d('UnityEngine.UI.Navigation', i491[10], i490.m_Navigation)
  i490.m_Transition = i491[11]
  i490.m_Colors = request.d('UnityEngine.UI.ColorBlock', i491[12], i490.m_Colors)
  i490.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i491[13], i490.m_SpriteState)
  i490.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i491[14], i490.m_AnimationTriggers)
  i490.m_Interactable = !!i491[15]
  request.r(i491[16], i491[17], 0, i490, 'm_TargetGraphic')
  return i490
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i493 = data
  i492.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i493[0], i492.m_PersistentCalls)
  return i492
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i495 = data
  var i497 = i495[0]
  var i496 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i497.length; i += 1) {
    i496.add(request.d('UnityEngine.Events.PersistentCall', i497[i + 0]));
  }
  i494.m_Calls = i496
  return i494
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i501 = data
  request.r(i501[0], i501[1], 0, i500, 'm_Target')
  i500.m_TargetAssemblyTypeName = i501[2]
  i500.m_MethodName = i501[3]
  i500.m_Mode = i501[4]
  i500.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i501[5], i500.m_Arguments)
  i500.m_CallState = i501[6]
  return i500
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i503 = data
  i502.m_Mode = i503[0]
  i502.m_WrapAround = !!i503[1]
  request.r(i503[2], i503[3], 0, i502, 'm_SelectOnUp')
  request.r(i503[4], i503[5], 0, i502, 'm_SelectOnDown')
  request.r(i503[6], i503[7], 0, i502, 'm_SelectOnLeft')
  request.r(i503[8], i503[9], 0, i502, 'm_SelectOnRight')
  return i502
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i505 = data
  i504.m_NormalColor = new pc.Color(i505[0], i505[1], i505[2], i505[3])
  i504.m_HighlightedColor = new pc.Color(i505[4], i505[5], i505[6], i505[7])
  i504.m_PressedColor = new pc.Color(i505[8], i505[9], i505[10], i505[11])
  i504.m_SelectedColor = new pc.Color(i505[12], i505[13], i505[14], i505[15])
  i504.m_DisabledColor = new pc.Color(i505[16], i505[17], i505[18], i505[19])
  i504.m_ColorMultiplier = i505[20]
  i504.m_FadeDuration = i505[21]
  return i504
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'm_HighlightedSprite')
  request.r(i507[2], i507[3], 0, i506, 'm_PressedSprite')
  request.r(i507[4], i507[5], 0, i506, 'm_SelectedSprite')
  request.r(i507[6], i507[7], 0, i506, 'm_DisabledSprite')
  return i506
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i509 = data
  i508.m_NormalTrigger = i509[0]
  i508.m_HighlightedTrigger = i509[1]
  i508.m_PressedTrigger = i509[2]
  i508.m_SelectedTrigger = i509[3]
  i508.m_DisabledTrigger = i509[4]
  return i508
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.UI.Mask' )
  var i511 = data
  i510.m_ShowMaskGraphic = !!i511[0]
  return i510
}

Deserializers["TutController"] = function (request, data, root) {
  var i512 = root || request.c( 'TutController' )
  var i513 = data
  request.r(i513[0], i513[1], 0, i512, 'icon')
  request.r(i513[2], i513[3], 0, i512, 'tutObject')
  i512.toPos = new pc.Vec3( i513[4], i513[5], i513[6] )
  i512.timeMove = i513[7]
  i512.timeDelay = i513[8]
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

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.UI.Button' )
  var i519 = data
  i518.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i519[0], i518.m_OnClick)
  i518.m_Navigation = request.d('UnityEngine.UI.Navigation', i519[1], i518.m_Navigation)
  i518.m_Transition = i519[2]
  i518.m_Colors = request.d('UnityEngine.UI.ColorBlock', i519[3], i518.m_Colors)
  i518.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i519[4], i518.m_SpriteState)
  i518.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i519[5], i518.m_AnimationTriggers)
  i518.m_Interactable = !!i519[6]
  request.r(i519[7], i519[8], 0, i518, 'm_TargetGraphic')
  return i518
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i521 = data
  i520.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i521[0], i520.m_PersistentCalls)
  return i520
}

Deserializers["LunaController"] = function (request, data, root) {
  var i522 = root || request.c( 'LunaController' )
  var i523 = data
  i522.TimePlay = i523[0]
  i522.CountPlay = i523[1]
  i522.BGColor = new pc.Color(i523[2], i523[3], i523[4], i523[5])
  i522.GameBGColor = new pc.Color(i523[6], i523[7], i523[8], i523[9])
  request.r(i523[10], i523[11], 0, i522, 'time')
  request.r(i523[12], i523[13], 0, i522, 'BGImage')
  request.r(i523[14], i523[15], 0, i522, 'GameBGImage')
  request.r(i523[16], i523[17], 0, i522, 'endCard')
  var i525 = i523[18]
  var i524 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i525.length; i += 2) {
  request.r(i525[i + 0], i525[i + 1], 1, i524, '')
  }
  i522.CTA = i524
  i522.count = i523[19]
  return i522
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i528 = root || request.c( 'LayoutController' )
  var i529 = data
  request.r(i529[0], i529[1], 0, i528, 'CTA')
  i528.hide = !!i529[2]
  return i528
}

Deserializers["AudioController"] = function (request, data, root) {
  var i530 = root || request.c( 'AudioController' )
  var i531 = data
  request.r(i531[0], i531[1], 0, i530, 'BGM')
  request.r(i531[2], i531[3], 0, i530, 'musicSource')
  request.r(i531[4], i531[5], 0, i530, 'SFXPool')
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'clip')
  request.r(i533[2], i533[3], 0, i532, 'outputAudioMixerGroup')
  i532.playOnAwake = !!i533[4]
  i532.loop = !!i533[5]
  i532.time = i533[6]
  i532.volume = i533[7]
  i532.pitch = i533[8]
  i532.enabled = !!i533[9]
  return i532
}

Deserializers["DragController"] = function (request, data, root) {
  var i534 = root || request.c( 'DragController' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'currentTarget')
  request.r(i535[2], i535[3], 0, i534, 'iconCheese')
  request.r(i535[4], i535[5], 0, i534, 'iconMedicine')
  request.r(i535[6], i535[7], 0, i534, 'canvas')
  request.r(i535[8], i535[9], 0, i534, 'tut')
  return i534
}

Deserializers["GameController"] = function (request, data, root) {
  var i536 = root || request.c( 'GameController' )
  var i537 = data
  i536.CompleteStep = request.d('System.Action', i537[0], i536.CompleteStep)
  var i539 = i537[1]
  var i538 = new (System.Collections.Generic.List$1(Bridge.ns('Seq')))
  for(var i = 0; i < i539.length; i += 1) {
    i538.add(request.d('Seq', i539[i + 0]));
  }
  i536.skeletons = i538
  request.r(i537[2], i537[3], 0, i536, 'med')
  i536.end = !!i537[4]
  i536.complete = !!i537[5]
  i536.currentStep = i537[6]
  i536.maxStep = i537[7]
  request.r(i537[8], i537[9], 0, i536, 'currentStepText')
  request.r(i537[10], i537[11], 0, i536, 'maxStepText')
  request.r(i537[12], i537[13], 0, i536, 'slider')
  return i536
}

Deserializers["System.Action"] = function (request, data, root) {
  var i540 = root || request.c( 'System.Action' )
  var i541 = data
  return i540
}

Deserializers["Seq"] = function (request, data, root) {
  var i544 = root || request.c( 'Seq' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'Area')
  request.r(i545[2], i545[3], 0, i544, 'Animation')
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i547 = data
  i546.ambientIntensity = i547[0]
  i546.reflectionIntensity = i547[1]
  i546.ambientMode = i547[2]
  i546.ambientLight = new pc.Color(i547[3], i547[4], i547[5], i547[6])
  i546.ambientSkyColor = new pc.Color(i547[7], i547[8], i547[9], i547[10])
  i546.ambientGroundColor = new pc.Color(i547[11], i547[12], i547[13], i547[14])
  i546.ambientEquatorColor = new pc.Color(i547[15], i547[16], i547[17], i547[18])
  i546.fogColor = new pc.Color(i547[19], i547[20], i547[21], i547[22])
  i546.fogEndDistance = i547[23]
  i546.fogStartDistance = i547[24]
  i546.fogDensity = i547[25]
  i546.fog = !!i547[26]
  request.r(i547[27], i547[28], 0, i546, 'skybox')
  i546.fogMode = i547[29]
  var i549 = i547[30]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i549[i + 0]) );
  }
  i546.lightmaps = i548
  i546.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i547[31], i546.lightProbes)
  i546.lightmapsMode = i547[32]
  i546.mixedBakeMode = i547[33]
  i546.environmentLightingMode = i547[34]
  i546.ambientProbe = new pc.SphericalHarmonicsL2(i547[35])
  i546.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i547[36])
  i546.useReferenceAmbientProbe = !!i547[37]
  request.r(i547[38], i547[39], 0, i546, 'customReflection')
  request.r(i547[40], i547[41], 0, i546, 'defaultReflection')
  i546.defaultReflectionMode = i547[42]
  i546.defaultReflectionResolution = i547[43]
  i546.sunLightObjectId = i547[44]
  i546.pixelLightCount = i547[45]
  i546.defaultReflectionHDR = !!i547[46]
  i546.hasLightDataAsset = !!i547[47]
  i546.hasManualGenerate = !!i547[48]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'lightmapColor')
  request.r(i553[2], i553[3], 0, i552, 'lightmapDirection')
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i554 = root || new UnityEngine.LightProbes()
  var i555 = data
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i563 = data
  var i565 = i563[0]
  var i564 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i565.length; i += 1) {
    i564.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i565[i + 0]));
  }
  i562.ShaderCompilationErrors = i564
  i562.name = i563[1]
  i562.guid = i563[2]
  var i567 = i563[3]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( i567[i + 0] );
  }
  i562.shaderDefinedKeywords = i566
  var i569 = i563[4]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i569[i + 0]) );
  }
  i562.passes = i568
  var i571 = i563[5]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i571[i + 0]) );
  }
  i562.usePasses = i570
  var i573 = i563[6]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i573[i + 0]) );
  }
  i562.defaultParameterValues = i572
  request.r(i563[7], i563[8], 0, i562, 'unityFallbackShader')
  i562.readDepth = !!i563[9]
  i562.isCreatedByShaderGraph = !!i563[10]
  i562.disableBatching = !!i563[11]
  i562.compiled = !!i563[12]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i577 = data
  i576.shaderName = i577[0]
  i576.errorMessage = i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i580 = root || new pc.UnityShaderPass()
  var i581 = data
  i580.id = i581[0]
  i580.subShaderIndex = i581[1]
  i580.name = i581[2]
  i580.passType = i581[3]
  i580.grabPassTextureName = i581[4]
  i580.usePass = !!i581[5]
  i580.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[6], i580.zTest)
  i580.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[7], i580.zWrite)
  i580.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[8], i580.culling)
  i580.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i581[9], i580.blending)
  i580.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i581[10], i580.alphaBlending)
  i580.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[11], i580.colorWriteMask)
  i580.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[12], i580.offsetUnits)
  i580.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[13], i580.offsetFactor)
  i580.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[14], i580.stencilRef)
  i580.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[15], i580.stencilReadMask)
  i580.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[16], i580.stencilWriteMask)
  i580.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i581[17], i580.stencilOp)
  i580.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i581[18], i580.stencilOpFront)
  i580.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i581[19], i580.stencilOpBack)
  var i583 = i581[20]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i583[i + 0]) );
  }
  i580.tags = i582
  var i585 = i581[21]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( i585[i + 0] );
  }
  i580.passDefinedKeywords = i584
  var i587 = i581[22]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i587[i + 0]) );
  }
  i580.passDefinedKeywordGroups = i586
  var i589 = i581[23]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i589[i + 0]) );
  }
  i580.variants = i588
  var i591 = i581[24]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i591[i + 0]) );
  }
  i580.excludedVariants = i590
  i580.hasDepthReader = !!i581[25]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i593 = data
  i592.val = i593[0]
  i592.name = i593[1]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i595 = data
  i594.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i595[0], i594.src)
  i594.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i595[1], i594.dst)
  i594.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i595[2], i594.op)
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i597 = data
  i596.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[0], i596.pass)
  i596.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[1], i596.fail)
  i596.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[2], i596.zFail)
  i596.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[3], i596.comp)
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i601 = data
  i600.name = i601[0]
  i600.value = i601[1]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i605 = data
  var i607 = i605[0]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( i607[i + 0] );
  }
  i604.keywords = i606
  i604.hasDiscard = !!i605[1]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i611 = data
  i610.passId = i611[0]
  i610.subShaderIndex = i611[1]
  var i613 = i611[2]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( i613[i + 0] );
  }
  i610.keywords = i612
  i610.vertexProgram = i611[3]
  i610.fragmentProgram = i611[4]
  i610.exportedForWebGl2 = !!i611[5]
  i610.readDepth = !!i611[6]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, 'shader')
  i616.pass = i617[2]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i621 = data
  i620.name = i621[0]
  i620.type = i621[1]
  i620.value = new pc.Vec4( i621[2], i621[3], i621[4], i621[5] )
  i620.textureValue = i621[6]
  i620.shaderPropertyFlag = i621[7]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i623 = data
  i622.name = i623[0]
  request.r(i623[1], i623[2], 0, i622, 'texture')
  i622.aabb = i623[3]
  i622.vertices = i623[4]
  i622.triangles = i623[5]
  i622.textureRect = UnityEngine.Rect.MinMaxRect(i623[6], i623[7], i623[8], i623[9])
  i622.packedRect = UnityEngine.Rect.MinMaxRect(i623[10], i623[11], i623[12], i623[13])
  i622.border = new pc.Vec4( i623[14], i623[15], i623[16], i623[17] )
  i622.transparency = i623[18]
  i622.bounds = i623[19]
  i622.pixelsPerUnit = i623[20]
  i622.textureWidth = i623[21]
  i622.textureHeight = i623[22]
  i622.nativeSize = new pc.Vec2( i623[23], i623[24] )
  i622.pivot = new pc.Vec2( i623[25], i623[26] )
  i622.textureRectOffset = new pc.Vec2( i623[27], i623[28] )
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i625 = data
  i624.name = i625[0]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i627 = data
  i626.name = i627[0]
  i626.ascent = i627[1]
  i626.originalLineHeight = i627[2]
  i626.fontSize = i627[3]
  var i629 = i627[4]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i629[i + 0]) );
  }
  i626.characterInfo = i628
  request.r(i627[5], i627[6], 0, i626, 'texture')
  i626.originalFontSize = i627[7]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i633 = data
  i632.index = i633[0]
  i632.advance = i633[1]
  i632.bearing = i633[2]
  i632.glyphWidth = i633[3]
  i632.glyphHeight = i633[4]
  i632.minX = i633[5]
  i632.maxX = i633[6]
  i632.minY = i633[7]
  i632.maxY = i633[8]
  i632.uvBottomLeftX = i633[9]
  i632.uvBottomLeftY = i633[10]
  i632.uvBottomRightX = i633[11]
  i632.uvBottomRightY = i633[12]
  i632.uvTopLeftX = i633[13]
  i632.uvTopLeftY = i633[14]
  i632.uvTopRightX = i633[15]
  i632.uvTopRightY = i633[16]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i635 = data
  i634.name = i635[0]
  i634.bytes64 = i635[1]
  i634.data = i635[2]
  return i634
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i636 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i637 = data
  var i639 = i637[0]
  var i638 = []
  for(var i = 0; i < i639.length; i += 2) {
  request.r(i639[i + 0], i639[i + 1], 2, i638, '')
  }
  i636.atlasAssets = i638
  i636.scale = i637[1]
  request.r(i637[2], i637[3], 0, i636, 'skeletonJSON')
  i636.isUpgradingBlendModeMaterials = !!i637[4]
  i636.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i637[5], i636.blendModeMaterials)
  var i641 = i637[6]
  var i640 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 1, i640, '')
  }
  i636.skeletonDataModifiers = i640
  var i643 = i637[7]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( i643[i + 0] );
  }
  i636.fromAnimation = i642
  var i645 = i637[8]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( i645[i + 0] );
  }
  i636.toAnimation = i644
  i636.duration = i637[9]
  i636.defaultMix = i637[10]
  request.r(i637[11], i637[12], 0, i636, 'controller')
  return i636
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i648 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i649 = data
  i648.applyAdditiveMaterial = !!i649[0]
  var i651 = i649[1]
  var i650 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i651.length; i += 1) {
    i650.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i651[i + 0]));
  }
  i648.additiveMaterials = i650
  var i653 = i649[2]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i653.length; i += 1) {
    i652.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i653[i + 0]));
  }
  i648.multiplyMaterials = i652
  var i655 = i649[3]
  var i654 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i655.length; i += 1) {
    i654.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i655[i + 0]));
  }
  i648.screenMaterials = i654
  i648.requiresBlendModeMaterials = !!i649[4]
  return i648
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i658 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i659 = data
  i658.pageName = i659[0]
  request.r(i659[1], i659[2], 0, i658, 'material')
  return i658
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i662 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'atlasFile')
  var i665 = i663[2]
  var i664 = []
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 2, i664, '')
  }
  i662.materials = i664
  i662.textureLoadingMode = i663[3]
  request.r(i663[4], i663[5], 0, i662, 'onDemandTextureLoader')
  return i662
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i668 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i669 = data
  i668.useSafeMode = !!i669[0]
  i668.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i669[1], i668.safeModeOptions)
  i668.timeScale = i669[2]
  i668.unscaledTimeScale = i669[3]
  i668.useSmoothDeltaTime = !!i669[4]
  i668.maxSmoothUnscaledTime = i669[5]
  i668.rewindCallbackMode = i669[6]
  i668.showUnityEditorReport = !!i669[7]
  i668.logBehaviour = i669[8]
  i668.drawGizmos = !!i669[9]
  i668.defaultRecyclable = !!i669[10]
  i668.defaultAutoPlay = i669[11]
  i668.defaultUpdateType = i669[12]
  i668.defaultTimeScaleIndependent = !!i669[13]
  i668.defaultEaseType = i669[14]
  i668.defaultEaseOvershootOrAmplitude = i669[15]
  i668.defaultEasePeriod = i669[16]
  i668.defaultAutoKill = !!i669[17]
  i668.defaultLoopType = i669[18]
  i668.debugMode = !!i669[19]
  i668.debugStoreTargetId = !!i669[20]
  i668.showPreviewPanel = !!i669[21]
  i668.storeSettingsLocation = i669[22]
  i668.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i669[23], i668.modules)
  i668.createASMDEF = !!i669[24]
  i668.showPlayingTweens = !!i669[25]
  i668.showPausedTweens = !!i669[26]
  return i668
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i670 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i671 = data
  i670.logBehaviour = i671[0]
  i670.nestedTweenFailureBehaviour = i671[1]
  return i670
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i672 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i673 = data
  i672.showPanel = !!i673[0]
  i672.audioEnabled = !!i673[1]
  i672.physicsEnabled = !!i673[2]
  i672.physics2DEnabled = !!i673[3]
  i672.spriteEnabled = !!i673[4]
  i672.uiEnabled = !!i673[5]
  i672.textMeshProEnabled = !!i673[6]
  i672.tk2DEnabled = !!i673[7]
  i672.deAudioEnabled = !!i673[8]
  i672.deUnityExtendedEnabled = !!i673[9]
  i672.epoOutlineEnabled = !!i673[10]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i675 = data
  var i677 = i675[0]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i677[i + 0]) );
  }
  i674.files = i676
  i674.componentToPrefabIds = i675[1]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i681 = data
  i680.path = i681[0]
  request.r(i681[1], i681[2], 0, i680, 'unityObject')
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i683 = data
  var i685 = i683[0]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i685[i + 0]) );
  }
  i682.scriptsExecutionOrder = i684
  var i687 = i683[1]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i687[i + 0]) );
  }
  i682.sortingLayers = i686
  var i689 = i683[2]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i689[i + 0]) );
  }
  i682.cullingLayers = i688
  i682.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i683[3], i682.timeSettings)
  i682.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i683[4], i682.physicsSettings)
  i682.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i683[5], i682.physics2DSettings)
  i682.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i683[6], i682.qualitySettings)
  i682.enableRealtimeShadows = !!i683[7]
  i682.enableAutoInstancing = !!i683[8]
  i682.enableStaticBatching = !!i683[9]
  i682.enableDynamicBatching = !!i683[10]
  i682.lightmapEncodingQuality = i683[11]
  i682.desiredColorSpace = i683[12]
  var i691 = i683[13]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( i691[i + 0] );
  }
  i682.allTags = i690
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i695 = data
  i694.name = i695[0]
  i694.value = i695[1]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i699 = data
  i698.id = i699[0]
  i698.name = i699[1]
  i698.value = i699[2]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i703 = data
  i702.id = i703[0]
  i702.name = i703[1]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i705 = data
  i704.fixedDeltaTime = i705[0]
  i704.maximumDeltaTime = i705[1]
  i704.timeScale = i705[2]
  i704.maximumParticleTimestep = i705[3]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i707 = data
  i706.gravity = new pc.Vec3( i707[0], i707[1], i707[2] )
  i706.defaultSolverIterations = i707[3]
  i706.bounceThreshold = i707[4]
  i706.autoSyncTransforms = !!i707[5]
  i706.autoSimulation = !!i707[6]
  var i709 = i707[7]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i709[i + 0]) );
  }
  i706.collisionMatrix = i708
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i713 = data
  i712.enabled = !!i713[0]
  i712.layerId = i713[1]
  i712.otherLayerId = i713[2]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'material')
  i714.gravity = new pc.Vec2( i715[2], i715[3] )
  i714.positionIterations = i715[4]
  i714.velocityIterations = i715[5]
  i714.velocityThreshold = i715[6]
  i714.maxLinearCorrection = i715[7]
  i714.maxAngularCorrection = i715[8]
  i714.maxTranslationSpeed = i715[9]
  i714.maxRotationSpeed = i715[10]
  i714.baumgarteScale = i715[11]
  i714.baumgarteTOIScale = i715[12]
  i714.timeToSleep = i715[13]
  i714.linearSleepTolerance = i715[14]
  i714.angularSleepTolerance = i715[15]
  i714.defaultContactOffset = i715[16]
  i714.autoSimulation = !!i715[17]
  i714.queriesHitTriggers = !!i715[18]
  i714.queriesStartInColliders = !!i715[19]
  i714.callbacksOnDisable = !!i715[20]
  i714.reuseCollisionCallbacks = !!i715[21]
  i714.autoSyncTransforms = !!i715[22]
  var i717 = i715[23]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i717[i + 0]) );
  }
  i714.collisionMatrix = i716
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i721 = data
  i720.enabled = !!i721[0]
  i720.layerId = i721[1]
  i720.otherLayerId = i721[2]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i723 = data
  var i725 = i723[0]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i725[i + 0]) );
  }
  i722.qualityLevels = i724
  var i727 = i723[1]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( i727[i + 0] );
  }
  i722.names = i726
  i722.shadows = i723[2]
  i722.anisotropicFiltering = i723[3]
  i722.antiAliasing = i723[4]
  i722.lodBias = i723[5]
  i722.shadowCascades = i723[6]
  i722.shadowDistance = i723[7]
  i722.shadowmaskMode = i723[8]
  i722.shadowProjection = i723[9]
  i722.shadowResolution = i723[10]
  i722.softParticles = !!i723[11]
  i722.softVegetation = !!i723[12]
  i722.activeColorSpace = i723[13]
  i722.desiredColorSpace = i723[14]
  i722.masterTextureLimit = i723[15]
  i722.maxQueuedFrames = i723[16]
  i722.particleRaycastBudget = i723[17]
  i722.pixelLightCount = i723[18]
  i722.realtimeReflectionProbes = !!i723[19]
  i722.shadowCascade2Split = i723[20]
  i722.shadowCascade4Split = new pc.Vec3( i723[21], i723[22], i723[23] )
  i722.streamingMipmapsActive = !!i723[24]
  i722.vSyncCount = i723[25]
  i722.asyncUploadBufferSize = i723[26]
  i722.asyncUploadTimeSlice = i723[27]
  i722.billboardsFaceCameraPosition = !!i723[28]
  i722.shadowNearPlaneOffset = i723[29]
  i722.streamingMipmapsMemoryBudget = i723[30]
  i722.maximumLODLevel = i723[31]
  i722.streamingMipmapsAddAllCameras = !!i723[32]
  i722.streamingMipmapsMaxLevelReduction = i723[33]
  i722.streamingMipmapsRenderersPerFrame = i723[34]
  i722.resolutionScalingFixedDPIFactor = i723[35]
  i722.streamingMipmapsMaxFileIORequests = i723[36]
  i722.currentQualityLevel = i723[37]
  return i722
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'm_ObjectArgument')
  i730.m_ObjectArgumentAssemblyTypeName = i731[2]
  i730.m_IntArgument = i731[3]
  i730.m_FloatArgument = i731[4]
  i730.m_StringArgument = i731[5]
  i730.m_BoolArgument = !!i731[6]
  return i730
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[47],"48":[3],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[3],"72":[73],"74":[75],"76":[75],"9":[8],"19":[14],"21":[14],"77":[78],"79":[80],"81":[78],"82":[8],"83":[8],"11":[9],"13":[12,8],"84":[8],"10":[9],"85":[8],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"91":[8],"26":[8],"92":[8],"93":[12,8],"94":[8],"95":[8],"96":[8],"25":[8],"23":[12,8],"97":[8],"98":[6],"99":[6],"7":[6],"100":[6],"101":[3],"102":[3],"103":[104],"105":[3],"106":[107],"108":[8],"109":[12,8],"110":[73],"14":[12,8],"111":[112,73],"113":[73],"114":[73,115],"116":[50],"117":[58],"118":[107],"119":[120],"121":[78]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","AnimationController","UnityEngine.AudioClip","MedicineController","UnityEngine.GameObject","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Slider","UnityEngine.UI.Mask","TutController","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","LunaController","LayoutController","AudioController","UnityEngine.AudioSource","DragController","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "06/10/2026 03:50:26";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BMTP_V04_NgocBTU_TamNTM";

Deserializers.lunaAppID = "38020";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1804";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4369";

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

Deserializers.buildID = "76488e8c-695d-4e5d-ae39-ddec6cda8c2a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

