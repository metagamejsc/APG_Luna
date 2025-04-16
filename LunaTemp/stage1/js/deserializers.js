var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.JointSpring' )
  var i409 = data
  i408.spring = i409[0]
  i408.damper = i409[1]
  i408.targetPosition = i409[2]
  return i408
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.JointMotor' )
  var i411 = data
  i410.m_TargetVelocity = i411[0]
  i410.m_Force = i411[1]
  i410.m_FreeSpin = i411[2]
  return i410
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.JointLimits' )
  var i413 = data
  i412.m_Min = i413[0]
  i412.m_Max = i413[1]
  i412.m_Bounciness = i413[2]
  i412.m_BounceMinVelocity = i413[3]
  i412.m_ContactDistance = i413[4]
  i412.minBounce = i413[5]
  i412.maxBounce = i413[6]
  return i412
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.JointDrive' )
  var i415 = data
  i414.m_PositionSpring = i415[0]
  i414.m_PositionDamper = i415[1]
  i414.m_MaximumForce = i415[2]
  i414.m_UseAcceleration = i415[3]
  return i414
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i417 = data
  i416.m_Spring = i417[0]
  i416.m_Damper = i417[1]
  return i416
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i419 = data
  i418.m_Limit = i419[0]
  i418.m_Bounciness = i419[1]
  i418.m_ContactDistance = i419[2]
  return i418
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i421 = data
  i420.m_ExtremumSlip = i421[0]
  i420.m_ExtremumValue = i421[1]
  i420.m_AsymptoteSlip = i421[2]
  i420.m_AsymptoteValue = i421[3]
  i420.m_Stiffness = i421[4]
  return i420
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i423 = data
  i422.m_LowerAngle = i423[0]
  i422.m_UpperAngle = i423[1]
  return i422
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i425 = data
  i424.m_MotorSpeed = i425[0]
  i424.m_MaximumMotorTorque = i425[1]
  return i424
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i427 = data
  i426.m_DampingRatio = i427[0]
  i426.m_Frequency = i427[1]
  i426.m_Angle = i427[2]
  return i426
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i429 = data
  i428.m_LowerTranslation = i429[0]
  i428.m_UpperTranslation = i429[1]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i431 = data
  i430.name = i431[0]
  i430.width = i431[1]
  i430.height = i431[2]
  i430.mipmapCount = i431[3]
  i430.anisoLevel = i431[4]
  i430.filterMode = i431[5]
  i430.hdr = !!i431[6]
  i430.format = i431[7]
  i430.wrapMode = i431[8]
  i430.alphaIsTransparency = !!i431[9]
  i430.alphaSource = i431[10]
  i430.graphicsFormat = i431[11]
  i430.sRGBTexture = !!i431[12]
  i430.desiredColorSpace = i431[13]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i432 = root || new pc.UnityMaterial()
  var i433 = data
  i432.name = i433[0]
  request.r(i433[1], i433[2], 0, i432, 'shader')
  i432.renderQueue = i433[3]
  i432.enableInstancing = !!i433[4]
  var i435 = i433[5]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i435[i + 0]) );
  }
  i432.floatParameters = i434
  var i437 = i433[6]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i437[i + 0]) );
  }
  i432.colorParameters = i436
  var i439 = i433[7]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i439[i + 0]) );
  }
  i432.vectorParameters = i438
  var i441 = i433[8]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i441[i + 0]) );
  }
  i432.textureParameters = i440
  var i443 = i433[9]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i443[i + 0]) );
  }
  i432.materialFlags = i442
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i447 = data
  i446.name = i447[0]
  i446.value = i447[1]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i451 = data
  i450.name = i451[0]
  i450.value = new pc.Color(i451[1], i451[2], i451[3], i451[4])
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i455 = data
  i454.name = i455[0]
  i454.value = new pc.Vec4( i455[1], i455[2], i455[3], i455[4] )
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i459 = data
  i458.name = i459[0]
  request.r(i459[1], i459[2], 0, i458, 'value')
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i463 = data
  i462.name = i463[0]
  i462.enabled = !!i463[1]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i465 = data
  i464.name = i465[0]
  i464.index = i465[1]
  i464.startup = !!i465[2]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i467 = data
  i466.position = new pc.Vec3( i467[0], i467[1], i467[2] )
  i466.scale = new pc.Vec3( i467[3], i467[4], i467[5] )
  i466.rotation = new pc.Quat(i467[6], i467[7], i467[8], i467[9])
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i469 = data
  i468.enabled = !!i469[0]
  i468.aspect = i469[1]
  i468.orthographic = !!i469[2]
  i468.orthographicSize = i469[3]
  i468.backgroundColor = new pc.Color(i469[4], i469[5], i469[6], i469[7])
  i468.nearClipPlane = i469[8]
  i468.farClipPlane = i469[9]
  i468.fieldOfView = i469[10]
  i468.depth = i469[11]
  i468.clearFlags = i469[12]
  i468.cullingMask = i469[13]
  i468.rect = i469[14]
  request.r(i469[15], i469[16], 0, i468, 'targetTexture')
  i468.usePhysicalProperties = !!i469[17]
  i468.focalLength = i469[18]
  i468.sensorSize = new pc.Vec2( i469[19], i469[20] )
  i468.lensShift = new pc.Vec2( i469[21], i469[22] )
  i468.gateFit = i469[23]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i471 = data
  i470.name = i471[0]
  i470.tagId = i471[1]
  i470.enabled = !!i471[2]
  i470.isStatic = !!i471[3]
  i470.layer = i471[4]
  return i470
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i473 = data
  request.r(i473[0], i473[1], 0, i472, 'm_FirstSelected')
  i472.m_sendNavigationEvents = !!i473[2]
  i472.m_DragThreshold = i473[3]
  return i472
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i475 = data
  i474.m_HorizontalAxis = i475[0]
  i474.m_VerticalAxis = i475[1]
  i474.m_SubmitButton = i475[2]
  i474.m_CancelButton = i475[3]
  i474.m_InputActionsPerSecond = i475[4]
  i474.m_RepeatDelay = i475[5]
  i474.m_ForceModuleActive = !!i475[6]
  i474.m_SendPointerHoverToParent = !!i475[7]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i477 = data
  i476.pivot = new pc.Vec2( i477[0], i477[1] )
  i476.anchorMin = new pc.Vec2( i477[2], i477[3] )
  i476.anchorMax = new pc.Vec2( i477[4], i477[5] )
  i476.sizeDelta = new pc.Vec2( i477[6], i477[7] )
  i476.anchoredPosition3D = new pc.Vec3( i477[8], i477[9], i477[10] )
  i476.rotation = new pc.Quat(i477[11], i477[12], i477[13], i477[14])
  i476.scale = new pc.Vec3( i477[15], i477[16], i477[17] )
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i479 = data
  i478.enabled = !!i479[0]
  i478.planeDistance = i479[1]
  i478.referencePixelsPerUnit = i479[2]
  i478.isFallbackOverlay = !!i479[3]
  i478.renderMode = i479[4]
  i478.renderOrder = i479[5]
  i478.sortingLayerName = i479[6]
  i478.sortingOrder = i479[7]
  i478.scaleFactor = i479[8]
  request.r(i479[9], i479[10], 0, i478, 'worldCamera')
  i478.overrideSorting = !!i479[11]
  i478.pixelPerfect = !!i479[12]
  i478.targetDisplay = i479[13]
  i478.overridePixelPerfect = !!i479[14]
  return i478
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i481 = data
  i480.m_UiScaleMode = i481[0]
  i480.m_ReferencePixelsPerUnit = i481[1]
  i480.m_ScaleFactor = i481[2]
  i480.m_ReferenceResolution = new pc.Vec2( i481[3], i481[4] )
  i480.m_ScreenMatchMode = i481[5]
  i480.m_MatchWidthOrHeight = i481[6]
  i480.m_PhysicalUnit = i481[7]
  i480.m_FallbackScreenDPI = i481[8]
  i480.m_DefaultSpriteDPI = i481[9]
  i480.m_DynamicPixelsPerUnit = i481[10]
  i480.m_PresetInfoIsWorld = !!i481[11]
  return i480
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i483 = data
  i482.m_IgnoreReversedGraphics = !!i483[0]
  i482.m_BlockingObjects = i483[1]
  i482.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i483[2] )
  return i482
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i484 = root || request.c( 'LunaManager' )
  var i485 = data
  var i487 = i485[0]
  var i486 = []
  for(var i = 0; i < i487.length; i += 2) {
  request.r(i487[i + 0], i487[i + 1], 2, i486, '')
  }
  i484.lstBtnInstall = i486
  request.r(i485[1], i485[2], 0, i484, 'EndCard')
  i484.countPlay = i485[3]
  i484.countPlayFinal = i485[4]
  i484.timeDropFinal = i485[5]
  request.r(i485[6], i485[7], 0, i484, 'bgSprite')
  request.r(i485[8], i485[9], 0, i484, 'imgBG')
  i484.colorBG = new pc.Color(i485[10], i485[11], i485[12], i485[13])
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i491 = data
  i490.cullTransparentMesh = !!i491[0]
  return i490
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i493 = data
  request.r(i493[0], i493[1], 0, i492, 'm_Texture')
  i492.m_UVRect = UnityEngine.Rect.MinMaxRect(i493[2], i493[3], i493[4], i493[5])
  request.r(i493[6], i493[7], 0, i492, 'm_Material')
  i492.m_Maskable = !!i493[8]
  i492.m_Color = new pc.Color(i493[9], i493[10], i493[11], i493[12])
  i492.m_RaycastTarget = !!i493[13]
  i492.m_RaycastPadding = new pc.Vec4( i493[14], i493[15], i493[16], i493[17] )
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i495 = data
  request.r(i495[0], i495[1], 0, i494, 'clip')
  request.r(i495[2], i495[3], 0, i494, 'outputAudioMixerGroup')
  i494.playOnAwake = !!i495[4]
  i494.loop = !!i495[5]
  i494.time = i495[6]
  i494.volume = i495[7]
  i494.pitch = i495[8]
  i494.enabled = !!i495[9]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i497 = data
  i496.usedByComposite = !!i497[0]
  i496.autoTiling = !!i497[1]
  i496.size = new pc.Vec2( i497[2], i497[3] )
  i496.edgeRadius = i497[4]
  i496.enabled = !!i497[5]
  i496.isTrigger = !!i497[6]
  i496.usedByEffector = !!i497[7]
  i496.density = i497[8]
  i496.offset = new pc.Vec2( i497[9], i497[10] )
  request.r(i497[11], i497[12], 0, i496, 'material')
  return i496
}

Deserializers["DropZone"] = function (request, data, root) {
  var i498 = root || request.c( 'DropZone' )
  var i499 = data
  var i501 = i499[0]
  var i500 = []
  for(var i = 0; i < i501.length; i += 2) {
  request.r(i501[i + 0], i501[i + 1], 2, i500, '')
  }
  i498.steps = i500
  i498.isActive = !!i499[1]
  request.r(i499[2], i499[3], 0, i498, 'spriteUpgrade')
  return i498
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

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i506 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'skeletonDataAsset')
  request.r(i507[2], i507[3], 0, i506, 'additiveMaterial')
  request.r(i507[4], i507[5], 0, i506, 'multiplyMaterial')
  request.r(i507[6], i507[7], 0, i506, 'screenMaterial')
  i506.initialSkinName = i507[8]
  i506.initialFlipX = !!i507[9]
  i506.initialFlipY = !!i507[10]
  i506.startingAnimation = i507[11]
  i506.startingLoop = !!i507[12]
  i506.timeScale = i507[13]
  i506.freeze = !!i507[14]
  i506.layoutScaleMode = i507[15]
  i506.updateWhenInvisible = i507[16]
  i506.allowMultipleCanvasRenderers = !!i507[17]
  var i509 = i507[18]
  var i508 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i509.length; i += 2) {
  request.r(i509[i + 0], i509[i + 1], 1, i508, '')
  }
  i506.canvasRenderers = i508
  i506.enableSeparatorSlots = !!i507[19]
  i506.updateSeparatorPartLocation = !!i507[20]
  i506.updateSeparatorPartScale = !!i507[21]
  i506.disableMeshAssignmentOnOverride = !!i507[22]
  i506.referenceSize = new pc.Vec2( i507[23], i507[24] )
  i506.referenceScale = i507[25]
  i506.rectTransformSize = new pc.Vec2( i507[26], i507[27] )
  i506.editReferenceRect = !!i507[28]
  var i511 = i507[29]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( i511[i + 0] );
  }
  i506.separatorSlotNames = i510
  var i513 = i507[30]
  var i512 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i513.length; i += 2) {
  request.r(i513[i + 0], i513[i + 1], 1, i512, '')
  }
  i506.separatorParts = i512
  i506.meshGenerator = request.d('Spine.Unity.MeshGenerator', i507[31], i506.meshGenerator)
  i506.updateTiming = i507[32]
  i506.unscaledTime = !!i507[33]
  request.r(i507[34], i507[35], 0, i506, 'm_Material')
  i506.m_Maskable = !!i507[36]
  i506.m_Color = new pc.Color(i507[37], i507[38], i507[39], i507[40])
  i506.m_RaycastTarget = !!i507[41]
  i506.m_RaycastPadding = new pc.Vec4( i507[42], i507[43], i507[44], i507[45] )
  return i506
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i520 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i521 = data
  i520.settings = request.d('Spine.Unity.MeshGenerator+Settings', i521[0], i520.settings)
  return i520
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i522 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i523 = data
  i522.useClipping = !!i523[0]
  i522.zSpacing = i523[1]
  i522.pmaVertexColors = !!i523[2]
  i522.tintBlack = !!i523[3]
  i522.canvasGroupTintBlack = !!i523[4]
  i522.calculateTangents = !!i523[5]
  i522.addNormals = !!i523[6]
  i522.immutableTriangles = !!i523[7]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i525 = data
  i524.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i525[0], i524.main)
  i524.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i525[1], i524.colorBySpeed)
  i524.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i525[2], i524.colorOverLifetime)
  i524.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i525[3], i524.emission)
  i524.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i525[4], i524.rotationBySpeed)
  i524.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i525[5], i524.rotationOverLifetime)
  i524.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i525[6], i524.shape)
  i524.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i525[7], i524.sizeBySpeed)
  i524.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i525[8], i524.sizeOverLifetime)
  i524.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i525[9], i524.textureSheetAnimation)
  i524.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i525[10], i524.velocityOverLifetime)
  i524.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i525[11], i524.noise)
  i524.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i525[12], i524.inheritVelocity)
  i524.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i525[13], i524.forceOverLifetime)
  i524.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i525[14], i524.limitVelocityOverLifetime)
  i524.useAutoRandomSeed = !!i525[15]
  i524.randomSeed = i525[16]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i526 = root || new pc.ParticleSystemMain()
  var i527 = data
  i526.duration = i527[0]
  i526.loop = !!i527[1]
  i526.prewarm = !!i527[2]
  i526.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[3], i526.startDelay)
  i526.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[4], i526.startLifetime)
  i526.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[5], i526.startSpeed)
  i526.startSize3D = !!i527[6]
  i526.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[7], i526.startSizeX)
  i526.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[8], i526.startSizeY)
  i526.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[9], i526.startSizeZ)
  i526.startRotation3D = !!i527[10]
  i526.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[11], i526.startRotationX)
  i526.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[12], i526.startRotationY)
  i526.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[13], i526.startRotationZ)
  i526.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i527[14], i526.startColor)
  i526.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[15], i526.gravityModifier)
  i526.simulationSpace = i527[16]
  request.r(i527[17], i527[18], 0, i526, 'customSimulationSpace')
  i526.simulationSpeed = i527[19]
  i526.useUnscaledTime = !!i527[20]
  i526.scalingMode = i527[21]
  i526.playOnAwake = !!i527[22]
  i526.maxParticles = i527[23]
  i526.emitterVelocityMode = i527[24]
  i526.stopAction = i527[25]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i528 = root || new pc.MinMaxCurve()
  var i529 = data
  i528.mode = i529[0]
  i528.curveMin = new pc.AnimationCurve( { keys_flow: i529[1] } )
  i528.curveMax = new pc.AnimationCurve( { keys_flow: i529[2] } )
  i528.curveMultiplier = i529[3]
  i528.constantMin = i529[4]
  i528.constantMax = i529[5]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i530 = root || new pc.MinMaxGradient()
  var i531 = data
  i530.mode = i531[0]
  i530.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i531[1], i530.gradientMin)
  i530.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i531[2], i530.gradientMax)
  i530.colorMin = new pc.Color(i531[3], i531[4], i531[5], i531[6])
  i530.colorMax = new pc.Color(i531[7], i531[8], i531[9], i531[10])
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i533 = data
  i532.mode = i533[0]
  var i535 = i533[1]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i535[i + 0]) );
  }
  i532.colorKeys = i534
  var i537 = i533[2]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i537[i + 0]) );
  }
  i532.alphaKeys = i536
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i538 = root || new pc.ParticleSystemColorBySpeed()
  var i539 = data
  i538.enabled = !!i539[0]
  i538.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i539[1], i538.color)
  i538.range = new pc.Vec2( i539[2], i539[3] )
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i543 = data
  i542.color = new pc.Color(i543[0], i543[1], i543[2], i543[3])
  i542.time = i543[4]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i547 = data
  i546.alpha = i547[0]
  i546.time = i547[1]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i548 = root || new pc.ParticleSystemColorOverLifetime()
  var i549 = data
  i548.enabled = !!i549[0]
  i548.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i549[1], i548.color)
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i550 = root || new pc.ParticleSystemEmitter()
  var i551 = data
  i550.enabled = !!i551[0]
  i550.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[1], i550.rateOverTime)
  i550.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[2], i550.rateOverDistance)
  var i553 = i551[3]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i553[i + 0]) );
  }
  i550.bursts = i552
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i556 = root || new pc.ParticleSystemBurst()
  var i557 = data
  i556.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[0], i556.count)
  i556.cycleCount = i557[1]
  i556.minCount = i557[2]
  i556.maxCount = i557[3]
  i556.repeatInterval = i557[4]
  i556.time = i557[5]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i558 = root || new pc.ParticleSystemRotationBySpeed()
  var i559 = data
  i558.enabled = !!i559[0]
  i558.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[1], i558.x)
  i558.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[2], i558.y)
  i558.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[3], i558.z)
  i558.separateAxes = !!i559[4]
  i558.range = new pc.Vec2( i559[5], i559[6] )
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i560 = root || new pc.ParticleSystemRotationOverLifetime()
  var i561 = data
  i560.enabled = !!i561[0]
  i560.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[1], i560.x)
  i560.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[2], i560.y)
  i560.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[3], i560.z)
  i560.separateAxes = !!i561[4]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemShape()
  var i563 = data
  i562.enabled = !!i563[0]
  i562.shapeType = i563[1]
  i562.randomDirectionAmount = i563[2]
  i562.sphericalDirectionAmount = i563[3]
  i562.randomPositionAmount = i563[4]
  i562.alignToDirection = !!i563[5]
  i562.radius = i563[6]
  i562.radiusMode = i563[7]
  i562.radiusSpread = i563[8]
  i562.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[9], i562.radiusSpeed)
  i562.radiusThickness = i563[10]
  i562.angle = i563[11]
  i562.length = i563[12]
  i562.boxThickness = new pc.Vec3( i563[13], i563[14], i563[15] )
  i562.meshShapeType = i563[16]
  request.r(i563[17], i563[18], 0, i562, 'mesh')
  request.r(i563[19], i563[20], 0, i562, 'meshRenderer')
  request.r(i563[21], i563[22], 0, i562, 'skinnedMeshRenderer')
  i562.useMeshMaterialIndex = !!i563[23]
  i562.meshMaterialIndex = i563[24]
  i562.useMeshColors = !!i563[25]
  i562.normalOffset = i563[26]
  i562.arc = i563[27]
  i562.arcMode = i563[28]
  i562.arcSpread = i563[29]
  i562.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[30], i562.arcSpeed)
  i562.donutRadius = i563[31]
  i562.position = new pc.Vec3( i563[32], i563[33], i563[34] )
  i562.rotation = new pc.Vec3( i563[35], i563[36], i563[37] )
  i562.scale = new pc.Vec3( i563[38], i563[39], i563[40] )
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemSizeBySpeed()
  var i565 = data
  i564.enabled = !!i565[0]
  i564.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[1], i564.x)
  i564.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[2], i564.y)
  i564.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[3], i564.z)
  i564.separateAxes = !!i565[4]
  i564.range = new pc.Vec2( i565[5], i565[6] )
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i566 = root || new pc.ParticleSystemSizeOverLifetime()
  var i567 = data
  i566.enabled = !!i567[0]
  i566.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[1], i566.x)
  i566.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[2], i566.y)
  i566.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[3], i566.z)
  i566.separateAxes = !!i567[4]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i568 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i569 = data
  i568.enabled = !!i569[0]
  i568.mode = i569[1]
  i568.animation = i569[2]
  i568.numTilesX = i569[3]
  i568.numTilesY = i569[4]
  i568.useRandomRow = !!i569[5]
  i568.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[6], i568.frameOverTime)
  i568.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[7], i568.startFrame)
  i568.cycleCount = i569[8]
  i568.rowIndex = i569[9]
  i568.flipU = i569[10]
  i568.flipV = i569[11]
  i568.spriteCount = i569[12]
  var i571 = i569[13]
  var i570 = []
  for(var i = 0; i < i571.length; i += 2) {
  request.r(i571[i + 0], i571[i + 1], 2, i570, '')
  }
  i568.sprites = i570
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[1], i574.x)
  i574.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[2], i574.y)
  i574.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[3], i574.z)
  i574.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[4], i574.radial)
  i574.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[5], i574.speedModifier)
  i574.space = i575[6]
  i574.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[7], i574.orbitalX)
  i574.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[8], i574.orbitalY)
  i574.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[9], i574.orbitalZ)
  i574.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[10], i574.orbitalOffsetX)
  i574.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[11], i574.orbitalOffsetY)
  i574.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[12], i574.orbitalOffsetZ)
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemNoise()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.separateAxes = !!i577[1]
  i576.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[2], i576.strengthX)
  i576.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[3], i576.strengthY)
  i576.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[4], i576.strengthZ)
  i576.frequency = i577[5]
  i576.damping = !!i577[6]
  i576.octaveCount = i577[7]
  i576.octaveMultiplier = i577[8]
  i576.octaveScale = i577[9]
  i576.quality = i577[10]
  i576.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[11], i576.scrollSpeed)
  i576.scrollSpeedMultiplier = i577[12]
  i576.remapEnabled = !!i577[13]
  i576.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[14], i576.remapX)
  i576.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[15], i576.remapY)
  i576.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[16], i576.remapZ)
  i576.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[17], i576.positionAmount)
  i576.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[18], i576.rotationAmount)
  i576.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[19], i576.sizeAmount)
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemInheritVelocity()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.mode = i579[1]
  i578.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[2], i578.curve)
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i580 = root || new pc.ParticleSystemForceOverLifetime()
  var i581 = data
  i580.enabled = !!i581[0]
  i580.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[1], i580.x)
  i580.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[2], i580.y)
  i580.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[3], i580.z)
  i580.space = i581[4]
  i580.randomized = !!i581[5]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i582 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i583 = data
  i582.enabled = !!i583[0]
  i582.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[1], i582.limit)
  i582.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[2], i582.limitX)
  i582.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[3], i582.limitY)
  i582.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[4], i582.limitZ)
  i582.dampen = i583[5]
  i582.separateAxes = !!i583[6]
  i582.space = i583[7]
  i582.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[8], i582.drag)
  i582.multiplyDragByParticleSize = !!i583[9]
  i582.multiplyDragByParticleVelocity = !!i583[10]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i585 = data
  i584.enabled = !!i585[0]
  request.r(i585[1], i585[2], 0, i584, 'sharedMaterial')
  var i587 = i585[3]
  var i586 = []
  for(var i = 0; i < i587.length; i += 2) {
  request.r(i587[i + 0], i587[i + 1], 2, i586, '')
  }
  i584.sharedMaterials = i586
  i584.receiveShadows = !!i585[4]
  i584.shadowCastingMode = i585[5]
  i584.sortingLayerID = i585[6]
  i584.sortingOrder = i585[7]
  i584.lightmapIndex = i585[8]
  i584.lightmapSceneIndex = i585[9]
  i584.lightmapScaleOffset = new pc.Vec4( i585[10], i585[11], i585[12], i585[13] )
  i584.lightProbeUsage = i585[14]
  i584.reflectionProbeUsage = i585[15]
  request.r(i585[16], i585[17], 0, i584, 'mesh')
  i584.meshCount = i585[18]
  i584.activeVertexStreamsCount = i585[19]
  i584.alignment = i585[20]
  i584.renderMode = i585[21]
  i584.sortMode = i585[22]
  i584.lengthScale = i585[23]
  i584.velocityScale = i585[24]
  i584.cameraVelocityScale = i585[25]
  i584.normalDirection = i585[26]
  i584.sortingFudge = i585[27]
  i584.minParticleSize = i585[28]
  i584.maxParticleSize = i585[29]
  i584.pivot = new pc.Vec3( i585[30], i585[31], i585[32] )
  request.r(i585[33], i585[34], 0, i584, 'trailMaterial')
  return i584
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i590 = root || request.c( 'DraggableItem' )
  var i591 = data
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i593 = data
  i592.m_Alpha = i593[0]
  i592.m_Interactable = !!i593[1]
  i592.m_BlocksRaycasts = !!i593[2]
  i592.m_IgnoreParentGroups = !!i593[3]
  i592.enabled = !!i593[4]
  return i592
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.Text' )
  var i595 = data
  i594.m_FontData = request.d('UnityEngine.UI.FontData', i595[0], i594.m_FontData)
  i594.m_Text = i595[1]
  request.r(i595[2], i595[3], 0, i594, 'm_Material')
  i594.m_Maskable = !!i595[4]
  i594.m_Color = new pc.Color(i595[5], i595[6], i595[7], i595[8])
  i594.m_RaycastTarget = !!i595[9]
  i594.m_RaycastPadding = new pc.Vec4( i595[10], i595[11], i595[12], i595[13] )
  return i594
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.UI.FontData' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'm_Font')
  i596.m_FontSize = i597[2]
  i596.m_FontStyle = i597[3]
  i596.m_BestFit = !!i597[4]
  i596.m_MinSize = i597[5]
  i596.m_MaxSize = i597[6]
  i596.m_Alignment = i597[7]
  i596.m_AlignByGeometry = !!i597[8]
  i596.m_RichText = !!i597[9]
  i596.m_HorizontalOverflow = i597[10]
  i596.m_VerticalOverflow = i597[11]
  i596.m_LineSpacing = i597[12]
  return i596
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.UI.Button' )
  var i599 = data
  i598.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i599[0], i598.m_OnClick)
  i598.m_Navigation = request.d('UnityEngine.UI.Navigation', i599[1], i598.m_Navigation)
  i598.m_Transition = i599[2]
  i598.m_Colors = request.d('UnityEngine.UI.ColorBlock', i599[3], i598.m_Colors)
  i598.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i599[4], i598.m_SpriteState)
  i598.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i599[5], i598.m_AnimationTriggers)
  i598.m_Interactable = !!i599[6]
  request.r(i599[7], i599[8], 0, i598, 'm_TargetGraphic')
  return i598
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i601 = data
  i600.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i601[0], i600.m_PersistentCalls)
  return i600
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i603 = data
  var i605 = i603[0]
  var i604 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i605.length; i += 1) {
    i604.add(request.d('UnityEngine.Events.PersistentCall', i605[i + 0]));
  }
  i602.m_Calls = i604
  return i602
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'm_Target')
  i608.m_TargetAssemblyTypeName = i609[2]
  i608.m_MethodName = i609[3]
  i608.m_Mode = i609[4]
  i608.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i609[5], i608.m_Arguments)
  i608.m_CallState = i609[6]
  return i608
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'm_ObjectArgument')
  i610.m_ObjectArgumentAssemblyTypeName = i611[2]
  i610.m_IntArgument = i611[3]
  i610.m_FloatArgument = i611[4]
  i610.m_StringArgument = i611[5]
  i610.m_BoolArgument = !!i611[6]
  return i610
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i613 = data
  i612.m_Mode = i613[0]
  i612.m_WrapAround = !!i613[1]
  request.r(i613[2], i613[3], 0, i612, 'm_SelectOnUp')
  request.r(i613[4], i613[5], 0, i612, 'm_SelectOnDown')
  request.r(i613[6], i613[7], 0, i612, 'm_SelectOnLeft')
  request.r(i613[8], i613[9], 0, i612, 'm_SelectOnRight')
  return i612
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i615 = data
  i614.m_NormalColor = new pc.Color(i615[0], i615[1], i615[2], i615[3])
  i614.m_HighlightedColor = new pc.Color(i615[4], i615[5], i615[6], i615[7])
  i614.m_PressedColor = new pc.Color(i615[8], i615[9], i615[10], i615[11])
  i614.m_SelectedColor = new pc.Color(i615[12], i615[13], i615[14], i615[15])
  i614.m_DisabledColor = new pc.Color(i615[16], i615[17], i615[18], i615[19])
  i614.m_ColorMultiplier = i615[20]
  i614.m_FadeDuration = i615[21]
  return i614
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, 'm_HighlightedSprite')
  request.r(i617[2], i617[3], 0, i616, 'm_PressedSprite')
  request.r(i617[4], i617[5], 0, i616, 'm_SelectedSprite')
  request.r(i617[6], i617[7], 0, i616, 'm_DisabledSprite')
  return i616
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i619 = data
  i618.m_NormalTrigger = i619[0]
  i618.m_HighlightedTrigger = i619[1]
  i618.m_PressedTrigger = i619[2]
  i618.m_SelectedTrigger = i619[3]
  i618.m_DisabledTrigger = i619[4]
  return i618
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i620 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i621 = data
  i620.targetIsSelf = !!i621[0]
  request.r(i621[1], i621[2], 0, i620, 'targetGO')
  i620.tweenTargetIsTargetGO = !!i621[3]
  i620.delay = i621[4]
  i620.duration = i621[5]
  i620.easeType = i621[6]
  i620.easeCurve = new pc.AnimationCurve( { keys_flow: i621[7] } )
  i620.loopType = i621[8]
  i620.loops = i621[9]
  i620.id = i621[10]
  i620.isRelative = !!i621[11]
  i620.isFrom = !!i621[12]
  i620.isIndependentUpdate = !!i621[13]
  i620.autoKill = !!i621[14]
  i620.autoGenerate = !!i621[15]
  i620.isActive = !!i621[16]
  i620.isValid = !!i621[17]
  request.r(i621[18], i621[19], 0, i620, 'target')
  i620.animationType = i621[20]
  i620.targetType = i621[21]
  i620.forcedTargetType = i621[22]
  i620.autoPlay = !!i621[23]
  i620.useTargetAsV3 = !!i621[24]
  i620.endValueFloat = i621[25]
  i620.endValueV3 = new pc.Vec3( i621[26], i621[27], i621[28] )
  i620.endValueV2 = new pc.Vec2( i621[29], i621[30] )
  i620.endValueColor = new pc.Color(i621[31], i621[32], i621[33], i621[34])
  i620.endValueString = i621[35]
  i620.endValueRect = UnityEngine.Rect.MinMaxRect(i621[36], i621[37], i621[38], i621[39])
  request.r(i621[40], i621[41], 0, i620, 'endValueTransform')
  i620.optionalBool0 = !!i621[42]
  i620.optionalBool1 = !!i621[43]
  i620.optionalFloat0 = i621[44]
  i620.optionalInt0 = i621[45]
  i620.optionalRotationMode = i621[46]
  i620.optionalScrambleMode = i621[47]
  i620.optionalShakeRandomnessMode = i621[48]
  i620.optionalString = i621[49]
  i620.updateType = i621[50]
  i620.isSpeedBased = !!i621[51]
  i620.hasOnStart = !!i621[52]
  i620.hasOnPlay = !!i621[53]
  i620.hasOnUpdate = !!i621[54]
  i620.hasOnStepComplete = !!i621[55]
  i620.hasOnComplete = !!i621[56]
  i620.hasOnTweenCreated = !!i621[57]
  i620.hasOnRewind = !!i621[58]
  i620.onStart = request.d('UnityEngine.Events.UnityEvent', i621[59], i620.onStart)
  i620.onPlay = request.d('UnityEngine.Events.UnityEvent', i621[60], i620.onPlay)
  i620.onUpdate = request.d('UnityEngine.Events.UnityEvent', i621[61], i620.onUpdate)
  i620.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i621[62], i620.onStepComplete)
  i620.onComplete = request.d('UnityEngine.Events.UnityEvent', i621[63], i620.onComplete)
  i620.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i621[64], i620.onTweenCreated)
  i620.onRewind = request.d('UnityEngine.Events.UnityEvent', i621[65], i620.onRewind)
  return i620
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i623 = data
  i622.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i623[0], i622.m_PersistentCalls)
  return i622
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.Mask' )
  var i625 = data
  i624.m_ShowMaskGraphic = !!i625[0]
  return i624
}

Deserializers["IQFill"] = function (request, data, root) {
  var i626 = root || request.c( 'IQFill' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'fillImage')
  i626.maxFillAmount = i627[2]
  i626.fillDuration = i627[3]
  i626.maxValue = i627[4]
  i626.addValue = i627[5]
  i626.fillEase = i627[6]
  return i626
}

Deserializers["GameController"] = function (request, data, root) {
  var i628 = root || request.c( 'GameController' )
  var i629 = data
  var i631 = i629[0]
  var i630 = []
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 2, i630, '')
  }
  i628.colliders = i630
  i628.isUpgrade = !!i629[1]
  request.r(i629[2], i629[3], 0, i628, 'IQFill')
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i635 = data
  i634.ambientIntensity = i635[0]
  i634.reflectionIntensity = i635[1]
  i634.ambientMode = i635[2]
  i634.ambientLight = new pc.Color(i635[3], i635[4], i635[5], i635[6])
  i634.ambientSkyColor = new pc.Color(i635[7], i635[8], i635[9], i635[10])
  i634.ambientGroundColor = new pc.Color(i635[11], i635[12], i635[13], i635[14])
  i634.ambientEquatorColor = new pc.Color(i635[15], i635[16], i635[17], i635[18])
  i634.fogColor = new pc.Color(i635[19], i635[20], i635[21], i635[22])
  i634.fogEndDistance = i635[23]
  i634.fogStartDistance = i635[24]
  i634.fogDensity = i635[25]
  i634.fog = !!i635[26]
  request.r(i635[27], i635[28], 0, i634, 'skybox')
  i634.fogMode = i635[29]
  var i637 = i635[30]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i637[i + 0]) );
  }
  i634.lightmaps = i636
  i634.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i635[31], i634.lightProbes)
  i634.lightmapsMode = i635[32]
  i634.mixedBakeMode = i635[33]
  i634.environmentLightingMode = i635[34]
  i634.ambientProbe = new pc.SphericalHarmonicsL2(i635[35])
  i634.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i635[36])
  i634.useReferenceAmbientProbe = !!i635[37]
  request.r(i635[38], i635[39], 0, i634, 'customReflection')
  request.r(i635[40], i635[41], 0, i634, 'defaultReflection')
  i634.defaultReflectionMode = i635[42]
  i634.defaultReflectionResolution = i635[43]
  i634.sunLightObjectId = i635[44]
  i634.pixelLightCount = i635[45]
  i634.defaultReflectionHDR = !!i635[46]
  i634.hasLightDataAsset = !!i635[47]
  i634.hasManualGenerate = !!i635[48]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'lightmapColor')
  request.r(i641[2], i641[3], 0, i640, 'lightmapDirection')
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i642 = root || new UnityEngine.LightProbes()
  var i643 = data
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i651 = data
  var i653 = i651[0]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i653.length; i += 1) {
    i652.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i653[i + 0]));
  }
  i650.ShaderCompilationErrors = i652
  i650.name = i651[1]
  i650.guid = i651[2]
  var i655 = i651[3]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( i655[i + 0] );
  }
  i650.shaderDefinedKeywords = i654
  var i657 = i651[4]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i657[i + 0]) );
  }
  i650.passes = i656
  var i659 = i651[5]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i659[i + 0]) );
  }
  i650.usePasses = i658
  var i661 = i651[6]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i661[i + 0]) );
  }
  i650.defaultParameterValues = i660
  request.r(i651[7], i651[8], 0, i650, 'unityFallbackShader')
  i650.readDepth = !!i651[9]
  i650.isCreatedByShaderGraph = !!i651[10]
  i650.usedBatchUniforms = i651[11]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i665 = data
  i664.shaderName = i665[0]
  i664.errorMessage = i665[1]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i668 = root || new pc.UnityShaderPass()
  var i669 = data
  i668.id = i669[0]
  i668.subShaderIndex = i669[1]
  i668.name = i669[2]
  i668.passType = i669[3]
  i668.grabPassTextureName = i669[4]
  i668.usePass = !!i669[5]
  i668.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[6], i668.zTest)
  i668.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[7], i668.zWrite)
  i668.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[8], i668.culling)
  i668.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i669[9], i668.blending)
  i668.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i669[10], i668.alphaBlending)
  i668.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[11], i668.colorWriteMask)
  i668.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[12], i668.offsetUnits)
  i668.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[13], i668.offsetFactor)
  i668.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[14], i668.stencilRef)
  i668.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[15], i668.stencilReadMask)
  i668.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[16], i668.stencilWriteMask)
  i668.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i669[17], i668.stencilOp)
  i668.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i669[18], i668.stencilOpFront)
  i668.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i669[19], i668.stencilOpBack)
  var i671 = i669[20]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i671[i + 0]) );
  }
  i668.tags = i670
  var i673 = i669[21]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( i673[i + 0] );
  }
  i668.passDefinedKeywords = i672
  var i675 = i669[22]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i675[i + 0]) );
  }
  i668.passDefinedKeywordGroups = i674
  var i677 = i669[23]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i677[i + 0]) );
  }
  i668.variants = i676
  var i679 = i669[24]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i679[i + 0]) );
  }
  i668.excludedVariants = i678
  i668.hasDepthReader = !!i669[25]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i681 = data
  i680.val = i681[0]
  i680.name = i681[1]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i683 = data
  i682.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[0], i682.src)
  i682.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[1], i682.dst)
  i682.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[2], i682.op)
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i685 = data
  i684.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[0], i684.pass)
  i684.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[1], i684.fail)
  i684.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[2], i684.zFail)
  i684.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[3], i684.comp)
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i689 = data
  i688.name = i689[0]
  i688.value = i689[1]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i693 = data
  var i695 = i693[0]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( i695[i + 0] );
  }
  i692.keywords = i694
  i692.hasDiscard = !!i693[1]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i699 = data
  i698.passId = i699[0]
  i698.subShaderIndex = i699[1]
  var i701 = i699[2]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( i701[i + 0] );
  }
  i698.keywords = i700
  i698.vertexProgram = i699[3]
  i698.fragmentProgram = i699[4]
  i698.compiledForWebGL2 = !!i699[5]
  i698.readDepth = !!i699[6]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'shader')
  i704.pass = i705[2]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i709 = data
  i708.name = i709[0]
  i708.type = i709[1]
  i708.value = new pc.Vec4( i709[2], i709[3], i709[4], i709[5] )
  i708.textureValue = i709[6]
  i708.shaderPropertyFlag = i709[7]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i711 = data
  i710.name = i711[0]
  request.r(i711[1], i711[2], 0, i710, 'texture')
  i710.aabb = i711[3]
  i710.vertices = i711[4]
  i710.triangles = i711[5]
  i710.textureRect = UnityEngine.Rect.MinMaxRect(i711[6], i711[7], i711[8], i711[9])
  i710.packedRect = UnityEngine.Rect.MinMaxRect(i711[10], i711[11], i711[12], i711[13])
  i710.border = new pc.Vec4( i711[14], i711[15], i711[16], i711[17] )
  i710.transparency = i711[18]
  i710.bounds = i711[19]
  i710.pixelsPerUnit = i711[20]
  i710.textureWidth = i711[21]
  i710.textureHeight = i711[22]
  i710.nativeSize = new pc.Vec2( i711[23], i711[24] )
  i710.pivot = new pc.Vec2( i711[25], i711[26] )
  i710.textureRectOffset = new pc.Vec2( i711[27], i711[28] )
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i713 = data
  i712.name = i713[0]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i715 = data
  i714.name = i715[0]
  i714.ascent = i715[1]
  i714.originalLineHeight = i715[2]
  i714.fontSize = i715[3]
  var i717 = i715[4]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i717[i + 0]) );
  }
  i714.characterInfo = i716
  request.r(i715[5], i715[6], 0, i714, 'texture')
  i714.originalFontSize = i715[7]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i721 = data
  i720.index = i721[0]
  i720.advance = i721[1]
  i720.bearing = i721[2]
  i720.glyphWidth = i721[3]
  i720.glyphHeight = i721[4]
  i720.minX = i721[5]
  i720.maxX = i721[6]
  i720.minY = i721[7]
  i720.maxY = i721[8]
  i720.uvBottomLeftX = i721[9]
  i720.uvBottomLeftY = i721[10]
  i720.uvBottomRightX = i721[11]
  i720.uvBottomRightY = i721[12]
  i720.uvTopLeftX = i721[13]
  i720.uvTopLeftY = i721[14]
  i720.uvTopRightX = i721[15]
  i720.uvTopRightY = i721[16]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i723 = data
  i722.name = i723[0]
  i722.bytes64 = i723[1]
  i722.data = i723[2]
  return i722
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i724 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i725 = data
  var i727 = i725[0]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i724.atlasAssets = i726
  i724.scale = i725[1]
  request.r(i725[2], i725[3], 0, i724, 'skeletonJSON')
  i724.isUpgradingBlendModeMaterials = !!i725[4]
  i724.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i725[5], i724.blendModeMaterials)
  var i729 = i725[6]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 1, i728, '')
  }
  i724.skeletonDataModifiers = i728
  var i731 = i725[7]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( i731[i + 0] );
  }
  i724.fromAnimation = i730
  var i733 = i725[8]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( i733[i + 0] );
  }
  i724.toAnimation = i732
  i724.duration = i725[9]
  i724.defaultMix = i725[10]
  request.r(i725[11], i725[12], 0, i724, 'controller')
  return i724
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i736 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i737 = data
  i736.applyAdditiveMaterial = !!i737[0]
  var i739 = i737[1]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i739.length; i += 1) {
    i738.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i739[i + 0]));
  }
  i736.additiveMaterials = i738
  var i741 = i737[2]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i741.length; i += 1) {
    i740.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i741[i + 0]));
  }
  i736.multiplyMaterials = i740
  var i743 = i737[3]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i743.length; i += 1) {
    i742.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i743[i + 0]));
  }
  i736.screenMaterials = i742
  i736.requiresBlendModeMaterials = !!i737[4]
  return i736
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i746 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i747 = data
  i746.pageName = i747[0]
  request.r(i747[1], i747[2], 0, i746, 'material')
  return i746
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i750 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'atlasFile')
  var i753 = i751[2]
  var i752 = []
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 2, i752, '')
  }
  i750.materials = i752
  i750.textureLoadingMode = i751[3]
  request.r(i751[4], i751[5], 0, i750, 'onDemandTextureLoader')
  return i750
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i754 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i755 = data
  i754.useSafeMode = !!i755[0]
  i754.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i755[1], i754.safeModeOptions)
  i754.timeScale = i755[2]
  i754.unscaledTimeScale = i755[3]
  i754.useSmoothDeltaTime = !!i755[4]
  i754.maxSmoothUnscaledTime = i755[5]
  i754.rewindCallbackMode = i755[6]
  i754.showUnityEditorReport = !!i755[7]
  i754.logBehaviour = i755[8]
  i754.drawGizmos = !!i755[9]
  i754.defaultRecyclable = !!i755[10]
  i754.defaultAutoPlay = i755[11]
  i754.defaultUpdateType = i755[12]
  i754.defaultTimeScaleIndependent = !!i755[13]
  i754.defaultEaseType = i755[14]
  i754.defaultEaseOvershootOrAmplitude = i755[15]
  i754.defaultEasePeriod = i755[16]
  i754.defaultAutoKill = !!i755[17]
  i754.defaultLoopType = i755[18]
  i754.debugMode = !!i755[19]
  i754.debugStoreTargetId = !!i755[20]
  i754.showPreviewPanel = !!i755[21]
  i754.storeSettingsLocation = i755[22]
  i754.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i755[23], i754.modules)
  i754.createASMDEF = !!i755[24]
  i754.showPlayingTweens = !!i755[25]
  i754.showPausedTweens = !!i755[26]
  return i754
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i756 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i757 = data
  i756.logBehaviour = i757[0]
  i756.nestedTweenFailureBehaviour = i757[1]
  return i756
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i758 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i759 = data
  i758.showPanel = !!i759[0]
  i758.audioEnabled = !!i759[1]
  i758.physicsEnabled = !!i759[2]
  i758.physics2DEnabled = !!i759[3]
  i758.spriteEnabled = !!i759[4]
  i758.uiEnabled = !!i759[5]
  i758.textMeshProEnabled = !!i759[6]
  i758.tk2DEnabled = !!i759[7]
  i758.deAudioEnabled = !!i759[8]
  i758.deUnityExtendedEnabled = !!i759[9]
  i758.epoOutlineEnabled = !!i759[10]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i761 = data
  var i763 = i761[0]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i763[i + 0]) );
  }
  i760.files = i762
  i760.componentToPrefabIds = i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i767 = data
  i766.path = i767[0]
  request.r(i767[1], i767[2], 0, i766, 'unityObject')
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i769 = data
  var i771 = i769[0]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i771[i + 0]) );
  }
  i768.scriptsExecutionOrder = i770
  var i773 = i769[1]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i773[i + 0]) );
  }
  i768.sortingLayers = i772
  var i775 = i769[2]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i775[i + 0]) );
  }
  i768.cullingLayers = i774
  i768.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i769[3], i768.timeSettings)
  i768.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i769[4], i768.physicsSettings)
  i768.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i769[5], i768.physics2DSettings)
  i768.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i769[6], i768.qualitySettings)
  i768.enableRealtimeShadows = !!i769[7]
  i768.enableAutoInstancing = !!i769[8]
  i768.enableDynamicBatching = !!i769[9]
  i768.lightmapEncodingQuality = i769[10]
  i768.desiredColorSpace = i769[11]
  var i777 = i769[12]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( i777[i + 0] );
  }
  i768.allTags = i776
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i781 = data
  i780.name = i781[0]
  i780.value = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i785 = data
  i784.id = i785[0]
  i784.name = i785[1]
  i784.value = i785[2]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i789 = data
  i788.id = i789[0]
  i788.name = i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i791 = data
  i790.fixedDeltaTime = i791[0]
  i790.maximumDeltaTime = i791[1]
  i790.timeScale = i791[2]
  i790.maximumParticleTimestep = i791[3]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i793 = data
  i792.gravity = new pc.Vec3( i793[0], i793[1], i793[2] )
  i792.defaultSolverIterations = i793[3]
  i792.bounceThreshold = i793[4]
  i792.autoSyncTransforms = !!i793[5]
  i792.autoSimulation = !!i793[6]
  var i795 = i793[7]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i795[i + 0]) );
  }
  i792.collisionMatrix = i794
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i799 = data
  i798.enabled = !!i799[0]
  i798.layerId = i799[1]
  i798.otherLayerId = i799[2]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'material')
  i800.gravity = new pc.Vec2( i801[2], i801[3] )
  i800.positionIterations = i801[4]
  i800.velocityIterations = i801[5]
  i800.velocityThreshold = i801[6]
  i800.maxLinearCorrection = i801[7]
  i800.maxAngularCorrection = i801[8]
  i800.maxTranslationSpeed = i801[9]
  i800.maxRotationSpeed = i801[10]
  i800.baumgarteScale = i801[11]
  i800.baumgarteTOIScale = i801[12]
  i800.timeToSleep = i801[13]
  i800.linearSleepTolerance = i801[14]
  i800.angularSleepTolerance = i801[15]
  i800.defaultContactOffset = i801[16]
  i800.autoSimulation = !!i801[17]
  i800.queriesHitTriggers = !!i801[18]
  i800.queriesStartInColliders = !!i801[19]
  i800.callbacksOnDisable = !!i801[20]
  i800.reuseCollisionCallbacks = !!i801[21]
  i800.autoSyncTransforms = !!i801[22]
  var i803 = i801[23]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i803[i + 0]) );
  }
  i800.collisionMatrix = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i807 = data
  i806.enabled = !!i807[0]
  i806.layerId = i807[1]
  i806.otherLayerId = i807[2]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i809 = data
  var i811 = i809[0]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i811[i + 0]) );
  }
  i808.qualityLevels = i810
  var i813 = i809[1]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( i813[i + 0] );
  }
  i808.names = i812
  i808.shadows = i809[2]
  i808.anisotropicFiltering = i809[3]
  i808.antiAliasing = i809[4]
  i808.lodBias = i809[5]
  i808.shadowCascades = i809[6]
  i808.shadowDistance = i809[7]
  i808.shadowmaskMode = i809[8]
  i808.shadowProjection = i809[9]
  i808.shadowResolution = i809[10]
  i808.softParticles = !!i809[11]
  i808.softVegetation = !!i809[12]
  i808.activeColorSpace = i809[13]
  i808.desiredColorSpace = i809[14]
  i808.masterTextureLimit = i809[15]
  i808.maxQueuedFrames = i809[16]
  i808.particleRaycastBudget = i809[17]
  i808.pixelLightCount = i809[18]
  i808.realtimeReflectionProbes = !!i809[19]
  i808.shadowCascade2Split = i809[20]
  i808.shadowCascade4Split = new pc.Vec3( i809[21], i809[22], i809[23] )
  i808.streamingMipmapsActive = !!i809[24]
  i808.vSyncCount = i809[25]
  i808.asyncUploadBufferSize = i809[26]
  i808.asyncUploadTimeSlice = i809[27]
  i808.billboardsFaceCameraPosition = !!i809[28]
  i808.shadowNearPlaneOffset = i809[29]
  i808.streamingMipmapsMemoryBudget = i809[30]
  i808.maximumLODLevel = i809[31]
  i808.streamingMipmapsAddAllCameras = !!i809[32]
  i808.streamingMipmapsMaxLevelReduction = i809[33]
  i808.streamingMipmapsRenderersPerFrame = i809[34]
  i808.resolutionScalingFixedDPIFactor = i809[35]
  i808.streamingMipmapsMaxFileIORequests = i809[36]
  i808.currentQualityLevel = i809[37]
  return i808
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[3],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[51],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[59],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[3],"73":[74],"75":[76],"77":[76],"9":[8],"78":[79],"80":[81],"82":[79],"83":[8],"84":[8],"11":[9],"22":[17,8],"85":[8],"10":[9],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"34":[8],"93":[8],"16":[17,8],"94":[8],"95":[8],"96":[8],"97":[8],"31":[17,8],"98":[8],"99":[6],"100":[6],"7":[6],"101":[6],"102":[3],"103":[3],"104":[105],"106":[3],"107":[108],"109":[8],"110":[17,8],"111":[74],"24":[17,8],"112":[113,74],"114":[74],"115":[74,116],"117":[51],"118":[59],"119":[108],"120":[121],"122":[8],"123":[74,8],"124":[8,17],"125":[8],"126":[17,8],"127":[74],"128":[17,8],"129":[8],"130":[79]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.BoxCollider2D","DropZone","UnityEngine.UI.Image","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","DraggableItem","UnityEngine.CanvasGroup","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","IQFill","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "04/15/2025 07:07:05";

Deserializers.lunaDaysRunning = "1.2";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "APG_V01_TrangHT_AnhPD";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1786";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4226";

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

Deserializers.buildID = "6930638c-19c4-4c37-b0bb-c6e4bb05d52b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

