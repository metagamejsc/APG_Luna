var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.JointSpring' )
  var i375 = data
  i374.spring = i375[0]
  i374.damper = i375[1]
  i374.targetPosition = i375[2]
  return i374
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i376 = root || request.c( 'UnityEngine.JointMotor' )
  var i377 = data
  i376.m_TargetVelocity = i377[0]
  i376.m_Force = i377[1]
  i376.m_FreeSpin = i377[2]
  return i376
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i378 = root || request.c( 'UnityEngine.JointLimits' )
  var i379 = data
  i378.m_Min = i379[0]
  i378.m_Max = i379[1]
  i378.m_Bounciness = i379[2]
  i378.m_BounceMinVelocity = i379[3]
  i378.m_ContactDistance = i379[4]
  i378.minBounce = i379[5]
  i378.maxBounce = i379[6]
  return i378
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i380 = root || request.c( 'UnityEngine.JointDrive' )
  var i381 = data
  i380.m_PositionSpring = i381[0]
  i380.m_PositionDamper = i381[1]
  i380.m_MaximumForce = i381[2]
  i380.m_UseAcceleration = i381[3]
  return i380
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i382 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i383 = data
  i382.m_Spring = i383[0]
  i382.m_Damper = i383[1]
  return i382
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i384 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i385 = data
  i384.m_Limit = i385[0]
  i384.m_Bounciness = i385[1]
  i384.m_ContactDistance = i385[2]
  return i384
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i386 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i387 = data
  i386.m_ExtremumSlip = i387[0]
  i386.m_ExtremumValue = i387[1]
  i386.m_AsymptoteSlip = i387[2]
  i386.m_AsymptoteValue = i387[3]
  i386.m_Stiffness = i387[4]
  return i386
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i388 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i389 = data
  i388.m_LowerAngle = i389[0]
  i388.m_UpperAngle = i389[1]
  return i388
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i390 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i391 = data
  i390.m_MotorSpeed = i391[0]
  i390.m_MaximumMotorTorque = i391[1]
  return i390
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i392 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i393 = data
  i392.m_DampingRatio = i393[0]
  i392.m_Frequency = i393[1]
  i392.m_Angle = i393[2]
  return i392
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i395 = data
  i394.m_LowerTranslation = i395[0]
  i394.m_UpperTranslation = i395[1]
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i396 = root || new pc.UnityMaterial()
  var i397 = data
  i396.name = i397[0]
  request.r(i397[1], i397[2], 0, i396, 'shader')
  i396.renderQueue = i397[3]
  i396.enableInstancing = !!i397[4]
  var i399 = i397[5]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i399[i + 0]) );
  }
  i396.floatParameters = i398
  var i401 = i397[6]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i401[i + 0]) );
  }
  i396.colorParameters = i400
  var i403 = i397[7]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i403[i + 0]) );
  }
  i396.vectorParameters = i402
  var i405 = i397[8]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i405[i + 0]) );
  }
  i396.textureParameters = i404
  var i407 = i397[9]
  var i406 = []
  for(var i = 0; i < i407.length; i += 1) {
    i406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i407[i + 0]) );
  }
  i396.materialFlags = i406
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i411 = data
  i410.name = i411[0]
  i410.value = i411[1]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i415 = data
  i414.name = i415[0]
  i414.value = new pc.Color(i415[1], i415[2], i415[3], i415[4])
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i419 = data
  i418.name = i419[0]
  i418.value = new pc.Vec4( i419[1], i419[2], i419[3], i419[4] )
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i423 = data
  i422.name = i423[0]
  request.r(i423[1], i423[2], 0, i422, 'value')
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i427 = data
  i426.name = i427[0]
  i426.enabled = !!i427[1]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i429 = data
  i428.name = i429[0]
  i428.width = i429[1]
  i428.height = i429[2]
  i428.mipmapCount = i429[3]
  i428.anisoLevel = i429[4]
  i428.filterMode = i429[5]
  i428.hdr = !!i429[6]
  i428.format = i429[7]
  i428.wrapMode = i429[8]
  i428.alphaIsTransparency = !!i429[9]
  i428.alphaSource = i429[10]
  i428.graphicsFormat = i429[11]
  i428.sRGBTexture = !!i429[12]
  i428.desiredColorSpace = i429[13]
  i428.wrapU = i429[14]
  i428.wrapV = i429[15]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i431 = data
  i430.name = i431[0]
  i430.index = i431[1]
  i430.startup = !!i431[2]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i433 = data
  i432.aspect = i433[0]
  i432.orthographic = !!i433[1]
  i432.orthographicSize = i433[2]
  i432.backgroundColor = new pc.Color(i433[3], i433[4], i433[5], i433[6])
  i432.nearClipPlane = i433[7]
  i432.farClipPlane = i433[8]
  i432.fieldOfView = i433[9]
  i432.depth = i433[10]
  i432.clearFlags = i433[11]
  i432.cullingMask = i433[12]
  i432.rect = i433[13]
  request.r(i433[14], i433[15], 0, i432, 'targetTexture')
  i432.usePhysicalProperties = !!i433[16]
  i432.focalLength = i433[17]
  i432.sensorSize = new pc.Vec2( i433[18], i433[19] )
  i432.lensShift = new pc.Vec2( i433[20], i433[21] )
  i432.gateFit = i433[22]
  i432.commandBufferCount = i433[23]
  i432.cameraType = i433[24]
  i432.enabled = !!i433[25]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i435 = data
  i434.name = i435[0]
  i434.tagId = i435[1]
  i434.enabled = !!i435[2]
  i434.isStatic = !!i435[3]
  i434.layer = i435[4]
  return i434
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i437 = data
  request.r(i437[0], i437[1], 0, i436, 'm_FirstSelected')
  i436.m_sendNavigationEvents = !!i437[2]
  i436.m_DragThreshold = i437[3]
  return i436
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i439 = data
  i438.m_HorizontalAxis = i439[0]
  i438.m_VerticalAxis = i439[1]
  i438.m_SubmitButton = i439[2]
  i438.m_CancelButton = i439[3]
  i438.m_InputActionsPerSecond = i439[4]
  i438.m_RepeatDelay = i439[5]
  i438.m_ForceModuleActive = !!i439[6]
  i438.m_SendPointerHoverToParent = !!i439[7]
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i441 = data
  i440.pivot = new pc.Vec2( i441[0], i441[1] )
  i440.anchorMin = new pc.Vec2( i441[2], i441[3] )
  i440.anchorMax = new pc.Vec2( i441[4], i441[5] )
  i440.sizeDelta = new pc.Vec2( i441[6], i441[7] )
  i440.anchoredPosition3D = new pc.Vec3( i441[8], i441[9], i441[10] )
  i440.rotation = new pc.Quat(i441[11], i441[12], i441[13], i441[14])
  i440.scale = new pc.Vec3( i441[15], i441[16], i441[17] )
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i443 = data
  i442.planeDistance = i443[0]
  i442.referencePixelsPerUnit = i443[1]
  i442.isFallbackOverlay = !!i443[2]
  i442.renderMode = i443[3]
  i442.renderOrder = i443[4]
  i442.sortingLayerName = i443[5]
  i442.sortingOrder = i443[6]
  i442.scaleFactor = i443[7]
  request.r(i443[8], i443[9], 0, i442, 'worldCamera')
  i442.overrideSorting = !!i443[10]
  i442.pixelPerfect = !!i443[11]
  i442.targetDisplay = i443[12]
  i442.overridePixelPerfect = !!i443[13]
  i442.enabled = !!i443[14]
  return i442
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i445 = data
  i444.m_UiScaleMode = i445[0]
  i444.m_ReferencePixelsPerUnit = i445[1]
  i444.m_ScaleFactor = i445[2]
  i444.m_ReferenceResolution = new pc.Vec2( i445[3], i445[4] )
  i444.m_ScreenMatchMode = i445[5]
  i444.m_MatchWidthOrHeight = i445[6]
  i444.m_PhysicalUnit = i445[7]
  i444.m_FallbackScreenDPI = i445[8]
  i444.m_DefaultSpriteDPI = i445[9]
  i444.m_DynamicPixelsPerUnit = i445[10]
  i444.m_PresetInfoIsWorld = !!i445[11]
  return i444
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i447 = data
  i446.m_IgnoreReversedGraphics = !!i447[0]
  i446.m_BlockingObjects = i447[1]
  i446.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i447[2] )
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i449 = data
  i448.cullTransparentMesh = !!i449[0]
  return i448
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.UI.Image' )
  var i451 = data
  request.r(i451[0], i451[1], 0, i450, 'm_Sprite')
  i450.m_Type = i451[2]
  i450.m_PreserveAspect = !!i451[3]
  i450.m_FillCenter = !!i451[4]
  i450.m_FillMethod = i451[5]
  i450.m_FillAmount = i451[6]
  i450.m_FillClockwise = !!i451[7]
  i450.m_FillOrigin = i451[8]
  i450.m_UseSpriteMesh = !!i451[9]
  i450.m_PixelsPerUnitMultiplier = i451[10]
  request.r(i451[11], i451[12], 0, i450, 'm_Material')
  i450.m_Maskable = !!i451[13]
  i450.m_Color = new pc.Color(i451[14], i451[15], i451[16], i451[17])
  i450.m_RaycastTarget = !!i451[18]
  i450.m_RaycastPadding = new pc.Vec4( i451[19], i451[20], i451[21], i451[22] )
  return i450
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i452 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i453 = data
  request.r(i453[0], i453[1], 0, i452, 'skeletonDataAsset')
  request.r(i453[2], i453[3], 0, i452, 'additiveMaterial')
  request.r(i453[4], i453[5], 0, i452, 'multiplyMaterial')
  request.r(i453[6], i453[7], 0, i452, 'screenMaterial')
  i452.forceAdditiveMaterial = !!i453[8]
  i452.initialSkinName = i453[9]
  i452.initialFlipX = !!i453[10]
  i452.initialFlipY = !!i453[11]
  i452.startingAnimation = i453[12]
  i452.startingLoop = !!i453[13]
  i452.timeScale = i453[14]
  i452.freeze = !!i453[15]
  i452.layoutScaleMode = i453[16]
  i452.updateWhenInvisible = i453[17]
  i452.allowMultipleCanvasRenderers = !!i453[18]
  var i455 = i453[19]
  var i454 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i455.length; i += 2) {
  request.r(i455[i + 0], i455[i + 1], 1, i454, '')
  }
  i452.canvasRenderers = i454
  i452.enableSeparatorSlots = !!i453[20]
  i452.updateSeparatorPartLocation = !!i453[21]
  i452.updateSeparatorPartScale = !!i453[22]
  i452.disableMeshAssignmentOnOverride = !!i453[23]
  i452.m_SkeletonColor = new pc.Color(i453[24], i453[25], i453[26], i453[27])
  i452.referenceSize = new pc.Vec2( i453[28], i453[29] )
  i452.pivotOffset = new pc.Vec2( i453[30], i453[31] )
  i452.referenceScale = i453[32]
  i452.layoutScale = i453[33]
  i452.rectTransformSize = new pc.Vec2( i453[34], i453[35] )
  i452.editReferenceRect = !!i453[36]
  var i457 = i453[37]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( i457[i + 0] );
  }
  i452.separatorSlotNames = i456
  var i459 = i453[38]
  var i458 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i459.length; i += 2) {
  request.r(i459[i + 0], i459[i + 1], 1, i458, '')
  }
  i452.separatorParts = i458
  i452.physicsPositionInheritanceFactor = new pc.Vec2( i453[39], i453[40] )
  i452.physicsRotationInheritanceFactor = i453[41]
  request.r(i453[42], i453[43], 0, i452, 'physicsMovementRelativeTo')
  i452.meshGenerator = request.d('Spine.Unity.MeshGenerator', i453[44], i452.meshGenerator)
  i452.updateTiming = i453[45]
  i452.unscaledTime = !!i453[46]
  request.r(i453[47], i453[48], 0, i452, 'm_Material')
  i452.m_Maskable = !!i453[49]
  i452.m_Color = new pc.Color(i453[50], i453[51], i453[52], i453[53])
  i452.m_RaycastTarget = !!i453[54]
  i452.m_RaycastPadding = new pc.Vec4( i453[55], i453[56], i453[57], i453[58] )
  return i452
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i466 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i467 = data
  i466.settings = request.d('Spine.Unity.MeshGenerator+Settings', i467[0], i466.settings)
  return i466
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i468 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i469 = data
  i468.useClipping = !!i469[0]
  i468.zSpacing = i469[1]
  i468.tintBlack = !!i469[2]
  i468.canvasGroupCompatible = !!i469[3]
  i468.pmaVertexColors = !!i469[4]
  i468.addNormals = !!i469[5]
  i468.calculateTangents = !!i469[6]
  i468.immutableTriangles = !!i469[7]
  return i468
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i470 = root || request.c( 'AnimationController' )
  var i471 = data
  request.r(i471[0], i471[1], 0, i470, 'dropArea')
  request.r(i471[2], i471[3], 0, i470, 'skeleton')
  var i473 = i471[4]
  var i472 = new (System.Collections.Generic.List$1(Bridge.ns('DropAction')))
  for(var i = 0; i < i473.length; i += 1) {
    i472.add(request.d('DropAction', i473[i + 0]));
  }
  i470.actions = i472
  var i475 = i471[5]
  var i474 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i475.length; i += 1) {
    i474.add(request.d('Anim', i475[i + 0]));
  }
  i470.completeAnim = i474
  return i470
}

Deserializers["DropAction"] = function (request, data, root) {
  var i478 = root || request.c( 'DropAction' )
  var i479 = data
  request.r(i479[0], i479[1], 0, i478, 'Item')
  i478.DelayTime = i479[2]
  var i481 = i479[3]
  var i480 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i481.length; i += 1) {
    i480.add(request.d('Anim', i481[i + 0]));
  }
  i478.Anim = i480
  return i478
}

Deserializers["Anim"] = function (request, data, root) {
  var i484 = root || request.c( 'Anim' )
  var i485 = data
  i484.Key = i485[0]
  var i487 = i485[1]
  var i486 = new (System.Collections.Generic.List$1(Bridge.ns('Sound')))
  for(var i = 0; i < i487.length; i += 1) {
    i486.add(request.d('Sound', i487[i + 0]));
  }
  i484.Sounds = i486
  i484.Loop = !!i485[2]
  i484.Next = !!i485[3]
  i484.NextTime = i485[4]
  i484.DestroyOnComplete = !!i485[5]
  return i484
}

Deserializers["Sound"] = function (request, data, root) {
  var i490 = root || request.c( 'Sound' )
  var i491 = data
  i490.TimeDelay = i491[0]
  request.r(i491[1], i491[2], 0, i490, 'Clip')
  return i490
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.UI.Text' )
  var i493 = data
  i492.m_FontData = request.d('UnityEngine.UI.FontData', i493[0], i492.m_FontData)
  i492.m_Text = i493[1]
  request.r(i493[2], i493[3], 0, i492, 'm_Material')
  i492.m_Maskable = !!i493[4]
  i492.m_Color = new pc.Color(i493[5], i493[6], i493[7], i493[8])
  i492.m_RaycastTarget = !!i493[9]
  i492.m_RaycastPadding = new pc.Vec4( i493[10], i493[11], i493[12], i493[13] )
  return i492
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.UI.FontData' )
  var i495 = data
  request.r(i495[0], i495[1], 0, i494, 'm_Font')
  i494.m_FontSize = i495[2]
  i494.m_FontStyle = i495[3]
  i494.m_BestFit = !!i495[4]
  i494.m_MinSize = i495[5]
  i494.m_MaxSize = i495[6]
  i494.m_Alignment = i495[7]
  i494.m_AlignByGeometry = !!i495[8]
  i494.m_RichText = !!i495[9]
  i494.m_HorizontalOverflow = i495[10]
  i494.m_VerticalOverflow = i495[11]
  i494.m_LineSpacing = i495[12]
  return i494
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.UI.Slider' )
  var i497 = data
  request.r(i497[0], i497[1], 0, i496, 'm_FillRect')
  request.r(i497[2], i497[3], 0, i496, 'm_HandleRect')
  i496.m_Direction = i497[4]
  i496.m_MinValue = i497[5]
  i496.m_MaxValue = i497[6]
  i496.m_WholeNumbers = !!i497[7]
  i496.m_Value = i497[8]
  i496.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i497[9], i496.m_OnValueChanged)
  i496.m_Navigation = request.d('UnityEngine.UI.Navigation', i497[10], i496.m_Navigation)
  i496.m_Transition = i497[11]
  i496.m_Colors = request.d('UnityEngine.UI.ColorBlock', i497[12], i496.m_Colors)
  i496.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i497[13], i496.m_SpriteState)
  i496.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i497[14], i496.m_AnimationTriggers)
  i496.m_Interactable = !!i497[15]
  request.r(i497[16], i497[17], 0, i496, 'm_TargetGraphic')
  return i496
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i499 = data
  i498.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i499[0], i498.m_PersistentCalls)
  return i498
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i501 = data
  var i503 = i501[0]
  var i502 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i503.length; i += 1) {
    i502.add(request.d('UnityEngine.Events.PersistentCall', i503[i + 0]));
  }
  i500.m_Calls = i502
  return i500
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'm_Target')
  i506.m_TargetAssemblyTypeName = i507[2]
  i506.m_MethodName = i507[3]
  i506.m_Mode = i507[4]
  i506.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i507[5], i506.m_Arguments)
  i506.m_CallState = i507[6]
  return i506
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i509 = data
  i508.m_Mode = i509[0]
  i508.m_WrapAround = !!i509[1]
  request.r(i509[2], i509[3], 0, i508, 'm_SelectOnUp')
  request.r(i509[4], i509[5], 0, i508, 'm_SelectOnDown')
  request.r(i509[6], i509[7], 0, i508, 'm_SelectOnLeft')
  request.r(i509[8], i509[9], 0, i508, 'm_SelectOnRight')
  return i508
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i511 = data
  i510.m_NormalColor = new pc.Color(i511[0], i511[1], i511[2], i511[3])
  i510.m_HighlightedColor = new pc.Color(i511[4], i511[5], i511[6], i511[7])
  i510.m_PressedColor = new pc.Color(i511[8], i511[9], i511[10], i511[11])
  i510.m_SelectedColor = new pc.Color(i511[12], i511[13], i511[14], i511[15])
  i510.m_DisabledColor = new pc.Color(i511[16], i511[17], i511[18], i511[19])
  i510.m_ColorMultiplier = i511[20]
  i510.m_FadeDuration = i511[21]
  return i510
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i513 = data
  request.r(i513[0], i513[1], 0, i512, 'm_HighlightedSprite')
  request.r(i513[2], i513[3], 0, i512, 'm_PressedSprite')
  request.r(i513[4], i513[5], 0, i512, 'm_SelectedSprite')
  request.r(i513[6], i513[7], 0, i512, 'm_DisabledSprite')
  return i512
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i515 = data
  i514.m_NormalTrigger = i515[0]
  i514.m_HighlightedTrigger = i515[1]
  i514.m_PressedTrigger = i515[2]
  i514.m_SelectedTrigger = i515[3]
  i514.m_DisabledTrigger = i515[4]
  return i514
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.UI.Mask' )
  var i517 = data
  i516.m_ShowMaskGraphic = !!i517[0]
  return i516
}

Deserializers["TutController"] = function (request, data, root) {
  var i518 = root || request.c( 'TutController' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, 'icon')
  request.r(i519[2], i519[3], 0, i518, 'tutObject')
  i518.toPos = new pc.Vec3( i519[4], i519[5], i519[6] )
  i518.timeMove = i519[7]
  i518.timeDelay = i519[8]
  return i518
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i520 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i521 = data
  i520.targetIsSelf = !!i521[0]
  request.r(i521[1], i521[2], 0, i520, 'targetGO')
  i520.tweenTargetIsTargetGO = !!i521[3]
  i520.delay = i521[4]
  i520.duration = i521[5]
  i520.easeType = i521[6]
  i520.easeCurve = new pc.AnimationCurve( { keys_flow: i521[7] } )
  i520.loopType = i521[8]
  i520.loops = i521[9]
  i520.id = i521[10]
  i520.isRelative = !!i521[11]
  i520.isFrom = !!i521[12]
  i520.isIndependentUpdate = !!i521[13]
  i520.autoKill = !!i521[14]
  i520.autoGenerate = !!i521[15]
  i520.isActive = !!i521[16]
  i520.isValid = !!i521[17]
  request.r(i521[18], i521[19], 0, i520, 'target')
  i520.animationType = i521[20]
  i520.targetType = i521[21]
  i520.forcedTargetType = i521[22]
  i520.autoPlay = !!i521[23]
  i520.useTargetAsV3 = !!i521[24]
  i520.endValueFloat = i521[25]
  i520.endValueV3 = new pc.Vec3( i521[26], i521[27], i521[28] )
  i520.endValueV2 = new pc.Vec2( i521[29], i521[30] )
  i520.endValueColor = new pc.Color(i521[31], i521[32], i521[33], i521[34])
  i520.endValueString = i521[35]
  i520.endValueRect = UnityEngine.Rect.MinMaxRect(i521[36], i521[37], i521[38], i521[39])
  request.r(i521[40], i521[41], 0, i520, 'endValueTransform')
  i520.optionalBool0 = !!i521[42]
  i520.optionalBool1 = !!i521[43]
  i520.optionalFloat0 = i521[44]
  i520.optionalInt0 = i521[45]
  i520.optionalRotationMode = i521[46]
  i520.optionalScrambleMode = i521[47]
  i520.optionalShakeRandomnessMode = i521[48]
  i520.optionalString = i521[49]
  i520.updateType = i521[50]
  i520.isSpeedBased = !!i521[51]
  i520.hasOnStart = !!i521[52]
  i520.hasOnPlay = !!i521[53]
  i520.hasOnUpdate = !!i521[54]
  i520.hasOnStepComplete = !!i521[55]
  i520.hasOnComplete = !!i521[56]
  i520.hasOnTweenCreated = !!i521[57]
  i520.hasOnRewind = !!i521[58]
  i520.onStart = request.d('UnityEngine.Events.UnityEvent', i521[59], i520.onStart)
  i520.onPlay = request.d('UnityEngine.Events.UnityEvent', i521[60], i520.onPlay)
  i520.onUpdate = request.d('UnityEngine.Events.UnityEvent', i521[61], i520.onUpdate)
  i520.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i521[62], i520.onStepComplete)
  i520.onComplete = request.d('UnityEngine.Events.UnityEvent', i521[63], i520.onComplete)
  i520.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i521[64], i520.onTweenCreated)
  i520.onRewind = request.d('UnityEngine.Events.UnityEvent', i521[65], i520.onRewind)
  return i520
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i523 = data
  i522.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i523[0], i522.m_PersistentCalls)
  return i522
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.UI.Button' )
  var i525 = data
  i524.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i525[0], i524.m_OnClick)
  i524.m_Navigation = request.d('UnityEngine.UI.Navigation', i525[1], i524.m_Navigation)
  i524.m_Transition = i525[2]
  i524.m_Colors = request.d('UnityEngine.UI.ColorBlock', i525[3], i524.m_Colors)
  i524.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i525[4], i524.m_SpriteState)
  i524.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i525[5], i524.m_AnimationTriggers)
  i524.m_Interactable = !!i525[6]
  request.r(i525[7], i525[8], 0, i524, 'm_TargetGraphic')
  return i524
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i527 = data
  i526.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i527[0], i526.m_PersistentCalls)
  return i526
}

Deserializers["LunaController"] = function (request, data, root) {
  var i528 = root || request.c( 'LunaController' )
  var i529 = data
  i528.TimePlay = i529[0]
  i528.CountPlay = i529[1]
  i528.BGColor = new pc.Color(i529[2], i529[3], i529[4], i529[5])
  i528.GameBGColor = new pc.Color(i529[6], i529[7], i529[8], i529[9])
  i528.LevelTextColor = new pc.Color(i529[10], i529[11], i529[12], i529[13])
  i528.TitleTextColor = new pc.Color(i529[14], i529[15], i529[16], i529[17])
  request.r(i529[18], i529[19], 0, i528, 'time')
  request.r(i529[20], i529[21], 0, i528, 'BGImage')
  request.r(i529[22], i529[23], 0, i528, 'GameBGImage')
  request.r(i529[24], i529[25], 0, i528, 'levelText')
  request.r(i529[26], i529[27], 0, i528, 'titleText')
  request.r(i529[28], i529[29], 0, i528, 'endCard')
  var i531 = i529[30]
  var i530 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i531.length; i += 2) {
  request.r(i531[i + 0], i531[i + 1], 1, i530, '')
  }
  i528.CTA = i530
  i528.count = i529[31]
  return i528
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i534 = root || request.c( 'LayoutController' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'CTA')
  i534.hide = !!i535[2]
  return i534
}

Deserializers["AudioController"] = function (request, data, root) {
  var i536 = root || request.c( 'AudioController' )
  var i537 = data
  request.r(i537[0], i537[1], 0, i536, 'BGM')
  request.r(i537[2], i537[3], 0, i536, 'musicSource')
  request.r(i537[4], i537[5], 0, i536, 'SFXPool')
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i539 = data
  request.r(i539[0], i539[1], 0, i538, 'clip')
  request.r(i539[2], i539[3], 0, i538, 'outputAudioMixerGroup')
  i538.playOnAwake = !!i539[4]
  i538.loop = !!i539[5]
  i538.time = i539[6]
  i538.volume = i539[7]
  i538.pitch = i539[8]
  i538.enabled = !!i539[9]
  return i538
}

Deserializers["InteractController"] = function (request, data, root) {
  var i540 = root || request.c( 'InteractController' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'canvas')
  i540.maxPos = new pc.Vec2( i541[2], i541[3] )
  i540.minPos = new pc.Vec2( i541[4], i541[5] )
  var i543 = i541[6]
  var i542 = new (System.Collections.Generic.List$1(Bridge.ns('ItemDrag')))
  for(var i = 0; i < i543.length; i += 1) {
    i542.add(request.d('ItemDrag', i543[i + 0]));
  }
  i540.itemDrags = i542
  i540.currentTarget = request.d('ItemDrag', i541[7], i540.currentTarget)
  request.r(i541[8], i541[9], 0, i540, 'pickupSound')
  request.r(i541[10], i541[11], 0, i540, 'tut')
  i540.lockPlay = !!i541[12]
  return i540
}

Deserializers["ItemDrag"] = function (request, data, root) {
  var i546 = root || request.c( 'ItemDrag' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'DragArea')
  request.r(i547[2], i547[3], 0, i546, 'Item')
  request.r(i547[4], i547[5], 0, i546, 'Icon')
  return i546
}

Deserializers["GameController"] = function (request, data, root) {
  var i548 = root || request.c( 'GameController' )
  var i549 = data
  i548.OnComplete = request.d('System.Action', i549[0], i548.OnComplete)
  i548.CompleteStep = request.d('System.Action', i549[1], i548.CompleteStep)
  var i551 = i549[2]
  var i550 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationController')))
  for(var i = 0; i < i551.length; i += 2) {
  request.r(i551[i + 0], i551[i + 1], 1, i550, '')
  }
  i548.skeletons = i550
  i548.complete = !!i549[3]
  i548.currentStep = i549[4]
  i548.maxStep = i549[5]
  request.r(i549[6], i549[7], 0, i548, 'currentStepText')
  request.r(i549[8], i549[9], 0, i548, 'maxStepText')
  request.r(i549[10], i549[11], 0, i548, 'slider')
  i548.DelayComplete = i549[12]
  i548.subTime = i549[13]
  i548.startSub = i549[14]
  i548.completeSub = i549[15]
  var i553 = i549[16]
  var i552 = new (System.Collections.Generic.List$1(Bridge.ns('Sub')))
  for(var i = 0; i < i553.length; i += 1) {
    i552.add(request.d('Sub', i553[i + 0]));
  }
  i548.subs = i552
  request.r(i549[17], i549[18], 0, i548, 'sub')
  request.r(i549[19], i549[20], 0, i548, 'subText')
  return i548
}

Deserializers["System.Action"] = function (request, data, root) {
  var i554 = root || request.c( 'System.Action' )
  var i555 = data
  return i554
}

Deserializers["Sub"] = function (request, data, root) {
  var i560 = root || request.c( 'Sub' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'Item')
  i560.SubText = i561[2]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i563 = data
  i562.ambientIntensity = i563[0]
  i562.reflectionIntensity = i563[1]
  i562.ambientMode = i563[2]
  i562.ambientLight = new pc.Color(i563[3], i563[4], i563[5], i563[6])
  i562.ambientSkyColor = new pc.Color(i563[7], i563[8], i563[9], i563[10])
  i562.ambientGroundColor = new pc.Color(i563[11], i563[12], i563[13], i563[14])
  i562.ambientEquatorColor = new pc.Color(i563[15], i563[16], i563[17], i563[18])
  i562.fogColor = new pc.Color(i563[19], i563[20], i563[21], i563[22])
  i562.fogEndDistance = i563[23]
  i562.fogStartDistance = i563[24]
  i562.fogDensity = i563[25]
  i562.fog = !!i563[26]
  request.r(i563[27], i563[28], 0, i562, 'skybox')
  i562.fogMode = i563[29]
  var i565 = i563[30]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i565[i + 0]) );
  }
  i562.lightmaps = i564
  i562.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i563[31], i562.lightProbes)
  i562.lightmapsMode = i563[32]
  i562.mixedBakeMode = i563[33]
  i562.environmentLightingMode = i563[34]
  i562.ambientProbe = new pc.SphericalHarmonicsL2(i563[35])
  request.r(i563[36], i563[37], 0, i562, 'customReflection')
  request.r(i563[38], i563[39], 0, i562, 'defaultReflection')
  i562.defaultReflectionMode = i563[40]
  i562.defaultReflectionResolution = i563[41]
  i562.sunLightObjectId = i563[42]
  i562.pixelLightCount = i563[43]
  i562.defaultReflectionHDR = !!i563[44]
  i562.hasLightDataAsset = !!i563[45]
  i562.hasManualGenerate = !!i563[46]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'lightmapColor')
  request.r(i569[2], i569[3], 0, i568, 'lightmapDirection')
  request.r(i569[4], i569[5], 0, i568, 'shadowMask')
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i570 = root || new UnityEngine.LightProbes()
  var i571 = data
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i579 = data
  var i581 = i579[0]
  var i580 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i581.length; i += 1) {
    i580.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i581[i + 0]));
  }
  i578.ShaderCompilationErrors = i580
  i578.name = i579[1]
  i578.guid = i579[2]
  var i583 = i579[3]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( i583[i + 0] );
  }
  i578.shaderDefinedKeywords = i582
  var i585 = i579[4]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i585[i + 0]) );
  }
  i578.passes = i584
  var i587 = i579[5]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i587[i + 0]) );
  }
  i578.usePasses = i586
  var i589 = i579[6]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i589[i + 0]) );
  }
  i578.defaultParameterValues = i588
  request.r(i579[7], i579[8], 0, i578, 'unityFallbackShader')
  i578.readDepth = !!i579[9]
  i578.hasDepthOnlyPass = !!i579[10]
  i578.isCreatedByShaderGraph = !!i579[11]
  i578.disableBatching = !!i579[12]
  i578.compiled = !!i579[13]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i593 = data
  i592.shaderName = i593[0]
  i592.errorMessage = i593[1]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i596 = root || new pc.UnityShaderPass()
  var i597 = data
  i596.id = i597[0]
  i596.subShaderIndex = i597[1]
  i596.name = i597[2]
  i596.passType = i597[3]
  i596.grabPassTextureName = i597[4]
  i596.usePass = !!i597[5]
  i596.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[6], i596.zTest)
  i596.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[7], i596.zWrite)
  i596.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[8], i596.culling)
  i596.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i597[9], i596.blending)
  i596.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i597[10], i596.alphaBlending)
  i596.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[11], i596.colorWriteMask)
  i596.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[12], i596.offsetUnits)
  i596.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[13], i596.offsetFactor)
  i596.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[14], i596.stencilRef)
  i596.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[15], i596.stencilReadMask)
  i596.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[16], i596.stencilWriteMask)
  i596.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i597[17], i596.stencilOp)
  i596.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i597[18], i596.stencilOpFront)
  i596.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i597[19], i596.stencilOpBack)
  var i599 = i597[20]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i599[i + 0]) );
  }
  i596.tags = i598
  var i601 = i597[21]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( i601[i + 0] );
  }
  i596.passDefinedKeywords = i600
  var i603 = i597[22]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i603[i + 0]) );
  }
  i596.passDefinedKeywordGroups = i602
  var i605 = i597[23]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i605[i + 0]) );
  }
  i596.variants = i604
  var i607 = i597[24]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i607[i + 0]) );
  }
  i596.excludedVariants = i606
  i596.hasDepthReader = !!i597[25]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i609 = data
  i608.val = i609[0]
  i608.name = i609[1]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i611 = data
  i610.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i611[0], i610.src)
  i610.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i611[1], i610.dst)
  i610.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i611[2], i610.op)
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i613 = data
  i612.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i613[0], i612.pass)
  i612.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i613[1], i612.fail)
  i612.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i613[2], i612.zFail)
  i612.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i613[3], i612.comp)
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i617 = data
  i616.name = i617[0]
  i616.value = i617[1]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i621 = data
  var i623 = i621[0]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( i623[i + 0] );
  }
  i620.keywords = i622
  i620.hasDiscard = !!i621[1]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i627 = data
  i626.passId = i627[0]
  i626.subShaderIndex = i627[1]
  var i629 = i627[2]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( i629[i + 0] );
  }
  i626.keywords = i628
  i626.vertexProgram = i627[3]
  i626.fragmentProgram = i627[4]
  i626.exportedForWebGl2 = !!i627[5]
  i626.readDepth = !!i627[6]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'shader')
  i632.pass = i633[2]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i637 = data
  i636.name = i637[0]
  i636.type = i637[1]
  i636.value = new pc.Vec4( i637[2], i637[3], i637[4], i637[5] )
  i636.textureValue = i637[6]
  i636.shaderPropertyFlag = i637[7]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i639 = data
  i638.name = i639[0]
  request.r(i639[1], i639[2], 0, i638, 'texture')
  i638.aabb = i639[3]
  i638.vertices = i639[4]
  i638.triangles = i639[5]
  i638.textureRect = UnityEngine.Rect.MinMaxRect(i639[6], i639[7], i639[8], i639[9])
  i638.packedRect = UnityEngine.Rect.MinMaxRect(i639[10], i639[11], i639[12], i639[13])
  i638.border = new pc.Vec4( i639[14], i639[15], i639[16], i639[17] )
  i638.transparency = i639[18]
  i638.bounds = i639[19]
  i638.pixelsPerUnit = i639[20]
  i638.textureWidth = i639[21]
  i638.textureHeight = i639[22]
  i638.nativeSize = new pc.Vec2( i639[23], i639[24] )
  i638.pivot = new pc.Vec2( i639[25], i639[26] )
  i638.textureRectOffset = new pc.Vec2( i639[27], i639[28] )
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i641 = data
  i640.name = i641[0]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i643 = data
  i642.name = i643[0]
  i642.ascent = i643[1]
  i642.originalLineHeight = i643[2]
  i642.fontSize = i643[3]
  var i645 = i643[4]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i645[i + 0]) );
  }
  i642.characterInfo = i644
  request.r(i643[5], i643[6], 0, i642, 'texture')
  i642.originalFontSize = i643[7]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i649 = data
  i648.index = i649[0]
  i648.advance = i649[1]
  i648.bearing = i649[2]
  i648.glyphWidth = i649[3]
  i648.glyphHeight = i649[4]
  i648.minX = i649[5]
  i648.maxX = i649[6]
  i648.minY = i649[7]
  i648.maxY = i649[8]
  i648.uvBottomLeftX = i649[9]
  i648.uvBottomLeftY = i649[10]
  i648.uvBottomRightX = i649[11]
  i648.uvBottomRightY = i649[12]
  i648.uvTopLeftX = i649[13]
  i648.uvTopLeftY = i649[14]
  i648.uvTopRightX = i649[15]
  i648.uvTopRightY = i649[16]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i651 = data
  i650.name = i651[0]
  i650.bytes64 = i651[1]
  i650.data = i651[2]
  return i650
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i652 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i653 = data
  var i655 = i653[0]
  var i654 = []
  for(var i = 0; i < i655.length; i += 2) {
  request.r(i655[i + 0], i655[i + 1], 2, i654, '')
  }
  i652.atlasAssets = i654
  i652.scale = i653[1]
  request.r(i653[2], i653[3], 0, i652, 'skeletonJSON')
  i652.isUpgradingBlendModeMaterials = !!i653[4]
  i652.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i653[5], i652.blendModeMaterials)
  var i657 = i653[6]
  var i656 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 1, i656, '')
  }
  i652.skeletonDataModifiers = i656
  var i659 = i653[7]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( i659[i + 0] );
  }
  i652.fromAnimation = i658
  var i661 = i653[8]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( i661[i + 0] );
  }
  i652.toAnimation = i660
  i652.duration = i653[9]
  i652.defaultMix = i653[10]
  request.r(i653[11], i653[12], 0, i652, 'controller')
  return i652
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i664 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i665 = data
  i664.applyAdditiveMaterial = !!i665[0]
  var i667 = i665[1]
  var i666 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i667.length; i += 1) {
    i666.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i667[i + 0]));
  }
  i664.additiveMaterials = i666
  var i669 = i665[2]
  var i668 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i669.length; i += 1) {
    i668.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i669[i + 0]));
  }
  i664.multiplyMaterials = i668
  var i671 = i665[3]
  var i670 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i671.length; i += 1) {
    i670.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i671[i + 0]));
  }
  i664.screenMaterials = i670
  i664.requiresBlendModeMaterials = !!i665[4]
  return i664
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i674 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i675 = data
  i674.pageName = i675[0]
  request.r(i675[1], i675[2], 0, i674, 'material')
  return i674
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i678 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'atlasFile')
  var i681 = i679[2]
  var i680 = []
  for(var i = 0; i < i681.length; i += 2) {
  request.r(i681[i + 0], i681[i + 1], 2, i680, '')
  }
  i678.materials = i680
  i678.textureLoadingMode = i679[3]
  request.r(i679[4], i679[5], 0, i678, 'onDemandTextureLoader')
  return i678
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i684 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i685 = data
  i684.useSafeMode = !!i685[0]
  i684.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i685[1], i684.safeModeOptions)
  i684.timeScale = i685[2]
  i684.unscaledTimeScale = i685[3]
  i684.useSmoothDeltaTime = !!i685[4]
  i684.maxSmoothUnscaledTime = i685[5]
  i684.rewindCallbackMode = i685[6]
  i684.showUnityEditorReport = !!i685[7]
  i684.logBehaviour = i685[8]
  i684.drawGizmos = !!i685[9]
  i684.defaultRecyclable = !!i685[10]
  i684.defaultAutoPlay = i685[11]
  i684.defaultUpdateType = i685[12]
  i684.defaultTimeScaleIndependent = !!i685[13]
  i684.defaultEaseType = i685[14]
  i684.defaultEaseOvershootOrAmplitude = i685[15]
  i684.defaultEasePeriod = i685[16]
  i684.defaultAutoKill = !!i685[17]
  i684.defaultLoopType = i685[18]
  i684.debugMode = !!i685[19]
  i684.debugStoreTargetId = !!i685[20]
  i684.showPreviewPanel = !!i685[21]
  i684.storeSettingsLocation = i685[22]
  i684.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i685[23], i684.modules)
  i684.createASMDEF = !!i685[24]
  i684.showPlayingTweens = !!i685[25]
  i684.showPausedTweens = !!i685[26]
  return i684
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i686 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i687 = data
  i686.logBehaviour = i687[0]
  i686.nestedTweenFailureBehaviour = i687[1]
  return i686
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i688 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i689 = data
  i688.showPanel = !!i689[0]
  i688.audioEnabled = !!i689[1]
  i688.physicsEnabled = !!i689[2]
  i688.physics2DEnabled = !!i689[3]
  i688.spriteEnabled = !!i689[4]
  i688.uiEnabled = !!i689[5]
  i688.textMeshProEnabled = !!i689[6]
  i688.tk2DEnabled = !!i689[7]
  i688.deAudioEnabled = !!i689[8]
  i688.deUnityExtendedEnabled = !!i689[9]
  i688.epoOutlineEnabled = !!i689[10]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i691 = data
  var i693 = i691[0]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i693[i + 0]) );
  }
  i690.files = i692
  i690.componentToPrefabIds = i691[1]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i697 = data
  i696.path = i697[0]
  request.r(i697[1], i697[2], 0, i696, 'unityObject')
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i699 = data
  var i701 = i699[0]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i701[i + 0]) );
  }
  i698.scriptsExecutionOrder = i700
  var i703 = i699[1]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i703[i + 0]) );
  }
  i698.sortingLayers = i702
  var i705 = i699[2]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i705[i + 0]) );
  }
  i698.cullingLayers = i704
  i698.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i699[3], i698.timeSettings)
  i698.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i699[4], i698.physicsSettings)
  i698.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i699[5], i698.physics2DSettings)
  i698.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i699[6], i698.qualitySettings)
  i698.enableRealtimeShadows = !!i699[7]
  i698.enableAutoInstancing = !!i699[8]
  i698.enableStaticBatching = !!i699[9]
  i698.enableDynamicBatching = !!i699[10]
  i698.usePreservativeDynamicBatching = !!i699[11]
  i698.lightmapEncodingQuality = i699[12]
  i698.desiredColorSpace = i699[13]
  var i707 = i699[14]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( i707[i + 0] );
  }
  i698.allTags = i706
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i711 = data
  i710.name = i711[0]
  i710.value = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i715 = data
  i714.id = i715[0]
  i714.name = i715[1]
  i714.value = i715[2]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i719 = data
  i718.id = i719[0]
  i718.name = i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i721 = data
  i720.fixedDeltaTime = i721[0]
  i720.maximumDeltaTime = i721[1]
  i720.timeScale = i721[2]
  i720.maximumParticleTimestep = i721[3]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i723 = data
  i722.gravity = new pc.Vec3( i723[0], i723[1], i723[2] )
  i722.defaultSolverIterations = i723[3]
  i722.bounceThreshold = i723[4]
  i722.autoSyncTransforms = !!i723[5]
  i722.autoSimulation = !!i723[6]
  var i725 = i723[7]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i725[i + 0]) );
  }
  i722.collisionMatrix = i724
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i729 = data
  i728.enabled = !!i729[0]
  i728.layerId = i729[1]
  i728.otherLayerId = i729[2]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'material')
  i730.gravity = new pc.Vec2( i731[2], i731[3] )
  i730.positionIterations = i731[4]
  i730.velocityIterations = i731[5]
  i730.velocityThreshold = i731[6]
  i730.maxLinearCorrection = i731[7]
  i730.maxAngularCorrection = i731[8]
  i730.maxTranslationSpeed = i731[9]
  i730.maxRotationSpeed = i731[10]
  i730.baumgarteScale = i731[11]
  i730.baumgarteTOIScale = i731[12]
  i730.timeToSleep = i731[13]
  i730.linearSleepTolerance = i731[14]
  i730.angularSleepTolerance = i731[15]
  i730.defaultContactOffset = i731[16]
  i730.autoSimulation = !!i731[17]
  i730.queriesHitTriggers = !!i731[18]
  i730.queriesStartInColliders = !!i731[19]
  i730.callbacksOnDisable = !!i731[20]
  i730.reuseCollisionCallbacks = !!i731[21]
  i730.autoSyncTransforms = !!i731[22]
  var i733 = i731[23]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i733[i + 0]) );
  }
  i730.collisionMatrix = i732
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i737 = data
  i736.enabled = !!i737[0]
  i736.layerId = i737[1]
  i736.otherLayerId = i737[2]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i739 = data
  var i741 = i739[0]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i741[i + 0]) );
  }
  i738.qualityLevels = i740
  var i743 = i739[1]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( i743[i + 0] );
  }
  i738.names = i742
  i738.shadows = i739[2]
  i738.anisotropicFiltering = i739[3]
  i738.antiAliasing = i739[4]
  i738.lodBias = i739[5]
  i738.shadowCascades = i739[6]
  i738.shadowDistance = i739[7]
  i738.shadowmaskMode = i739[8]
  i738.shadowProjection = i739[9]
  i738.shadowResolution = i739[10]
  i738.softParticles = !!i739[11]
  i738.softVegetation = !!i739[12]
  i738.activeColorSpace = i739[13]
  i738.desiredColorSpace = i739[14]
  i738.masterTextureLimit = i739[15]
  i738.maxQueuedFrames = i739[16]
  i738.particleRaycastBudget = i739[17]
  i738.pixelLightCount = i739[18]
  i738.realtimeReflectionProbes = !!i739[19]
  i738.shadowCascade2Split = i739[20]
  i738.shadowCascade4Split = new pc.Vec3( i739[21], i739[22], i739[23] )
  i738.streamingMipmapsActive = !!i739[24]
  i738.vSyncCount = i739[25]
  i738.asyncUploadBufferSize = i739[26]
  i738.asyncUploadTimeSlice = i739[27]
  i738.billboardsFaceCameraPosition = !!i739[28]
  i738.shadowNearPlaneOffset = i739[29]
  i738.streamingMipmapsMemoryBudget = i739[30]
  i738.maximumLODLevel = i739[31]
  i738.streamingMipmapsAddAllCameras = !!i739[32]
  i738.streamingMipmapsMaxLevelReduction = i739[33]
  i738.streamingMipmapsRenderersPerFrame = i739[34]
  i738.resolutionScalingFixedDPIFactor = i739[35]
  i738.streamingMipmapsMaxFileIORequests = i739[36]
  i738.currentQualityLevel = i739[37]
  return i738
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'm_ObjectArgument')
  i746.m_ObjectArgumentAssemblyTypeName = i747[2]
  i746.m_IntArgument = i747[3]
  i746.m_FloatArgument = i747[4]
  i746.m_StringArgument = i747[5]
  i746.m_BoolArgument = !!i747[6]
  return i746
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[2],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[56],"64":[56],"65":[56],"66":[56],"67":[56],"68":[56],"69":[2],"70":[71],"72":[73],"74":[73],"8":[7],"17":[13],"75":[76],"77":[7],"78":[11,7],"79":[71],"13":[11,7],"80":[81,71],"82":[71,83],"84":[71],"85":[49],"86":[56],"87":[76],"88":[89],"90":[91],"92":[2],"93":[94],"95":[7],"96":[11,7],"97":[71],"98":[11,7],"99":[7],"100":[7],"101":[71,7],"102":[7,11],"103":[104],"105":[104],"106":[104],"107":[7],"108":[7],"10":[8],"12":[11,7],"109":[7],"9":[8],"110":[7],"111":[7],"112":[7],"113":[7],"114":[7],"115":[7],"116":[7],"24":[7],"117":[7],"118":[11,7],"119":[7],"120":[7],"121":[7],"23":[7],"21":[11,7],"122":[7],"123":[5],"124":[5],"6":[5],"125":[5],"126":[2],"127":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","UnityEngine.GameObject","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Slider","UnityEngine.UI.Mask","TutController","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","LunaController","LayoutController","AudioController","UnityEngine.AudioSource","UnityEngine.Transform","InteractController","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "08/04/2026 07:03:05";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "TBAP_V20_NgocNDL_TamNTM";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1935";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4829";

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

Deserializers.buildID = "0d961959-3ff1-48ea-ad55-8da89fa4a574";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

