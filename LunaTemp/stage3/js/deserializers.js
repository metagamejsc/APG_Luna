var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i370 = root || request.c( 'UnityEngine.JointSpring' )
  var i371 = data
  i370.spring = i371[0]
  i370.damper = i371[1]
  i370.targetPosition = i371[2]
  return i370
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.JointMotor' )
  var i373 = data
  i372.m_TargetVelocity = i373[0]
  i372.m_Force = i373[1]
  i372.m_FreeSpin = i373[2]
  return i372
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.JointLimits' )
  var i375 = data
  i374.m_Min = i375[0]
  i374.m_Max = i375[1]
  i374.m_Bounciness = i375[2]
  i374.m_BounceMinVelocity = i375[3]
  i374.m_ContactDistance = i375[4]
  i374.minBounce = i375[5]
  i374.maxBounce = i375[6]
  return i374
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i376 = root || request.c( 'UnityEngine.JointDrive' )
  var i377 = data
  i376.m_PositionSpring = i377[0]
  i376.m_PositionDamper = i377[1]
  i376.m_MaximumForce = i377[2]
  i376.m_UseAcceleration = i377[3]
  return i376
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i378 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i379 = data
  i378.m_Spring = i379[0]
  i378.m_Damper = i379[1]
  return i378
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i380 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i381 = data
  i380.m_Limit = i381[0]
  i380.m_Bounciness = i381[1]
  i380.m_ContactDistance = i381[2]
  return i380
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i382 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i383 = data
  i382.m_ExtremumSlip = i383[0]
  i382.m_ExtremumValue = i383[1]
  i382.m_AsymptoteSlip = i383[2]
  i382.m_AsymptoteValue = i383[3]
  i382.m_Stiffness = i383[4]
  return i382
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i384 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i385 = data
  i384.m_LowerAngle = i385[0]
  i384.m_UpperAngle = i385[1]
  return i384
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i386 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i387 = data
  i386.m_MotorSpeed = i387[0]
  i386.m_MaximumMotorTorque = i387[1]
  return i386
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i388 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i389 = data
  i388.m_DampingRatio = i389[0]
  i388.m_Frequency = i389[1]
  i388.m_Angle = i389[2]
  return i388
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i390 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i391 = data
  i390.m_LowerTranslation = i391[0]
  i390.m_UpperTranslation = i391[1]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i393 = data
  i392.name = i393[0]
  i392.width = i393[1]
  i392.height = i393[2]
  i392.mipmapCount = i393[3]
  i392.anisoLevel = i393[4]
  i392.filterMode = i393[5]
  i392.hdr = !!i393[6]
  i392.format = i393[7]
  i392.wrapMode = i393[8]
  i392.alphaIsTransparency = !!i393[9]
  i392.alphaSource = i393[10]
  i392.graphicsFormat = i393[11]
  i392.sRGBTexture = !!i393[12]
  i392.desiredColorSpace = i393[13]
  i392.wrapU = i393[14]
  i392.wrapV = i393[15]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i394 = root || new pc.UnityMaterial()
  var i395 = data
  i394.name = i395[0]
  request.r(i395[1], i395[2], 0, i394, 'shader')
  i394.renderQueue = i395[3]
  i394.enableInstancing = !!i395[4]
  var i397 = i395[5]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i397[i + 0]) );
  }
  i394.floatParameters = i396
  var i399 = i395[6]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i399[i + 0]) );
  }
  i394.colorParameters = i398
  var i401 = i395[7]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i401[i + 0]) );
  }
  i394.vectorParameters = i400
  var i403 = i395[8]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i403[i + 0]) );
  }
  i394.textureParameters = i402
  var i405 = i395[9]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i405[i + 0]) );
  }
  i394.materialFlags = i404
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i409 = data
  i408.name = i409[0]
  i408.value = i409[1]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i413 = data
  i412.name = i413[0]
  i412.value = new pc.Color(i413[1], i413[2], i413[3], i413[4])
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i417 = data
  i416.name = i417[0]
  i416.value = new pc.Vec4( i417[1], i417[2], i417[3], i417[4] )
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i421 = data
  i420.name = i421[0]
  request.r(i421[1], i421[2], 0, i420, 'value')
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i425 = data
  i424.name = i425[0]
  i424.enabled = !!i425[1]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i433 = data
  i432.name = i433[0]
  i432.tagId = i433[1]
  i432.enabled = !!i433[2]
  i432.isStatic = !!i433[3]
  i432.layer = i433[4]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i435 = data
  i434.name = i435[0]
  i434.index = i435[1]
  i434.startup = !!i435[2]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i437 = data
  i436.aspect = i437[0]
  i436.orthographic = !!i437[1]
  i436.orthographicSize = i437[2]
  i436.backgroundColor = new pc.Color(i437[3], i437[4], i437[5], i437[6])
  i436.nearClipPlane = i437[7]
  i436.farClipPlane = i437[8]
  i436.fieldOfView = i437[9]
  i436.depth = i437[10]
  i436.clearFlags = i437[11]
  i436.cullingMask = i437[12]
  i436.rect = i437[13]
  request.r(i437[14], i437[15], 0, i436, 'targetTexture')
  i436.usePhysicalProperties = !!i437[16]
  i436.focalLength = i437[17]
  i436.sensorSize = new pc.Vec2( i437[18], i437[19] )
  i436.lensShift = new pc.Vec2( i437[20], i437[21] )
  i436.gateFit = i437[22]
  i436.commandBufferCount = i437[23]
  i436.cameraType = i437[24]
  i436.enabled = !!i437[25]
  return i436
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i439 = data
  request.r(i439[0], i439[1], 0, i438, 'm_FirstSelected')
  i438.m_sendNavigationEvents = !!i439[2]
  i438.m_DragThreshold = i439[3]
  return i438
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i441 = data
  i440.m_HorizontalAxis = i441[0]
  i440.m_VerticalAxis = i441[1]
  i440.m_SubmitButton = i441[2]
  i440.m_CancelButton = i441[3]
  i440.m_InputActionsPerSecond = i441[4]
  i440.m_RepeatDelay = i441[5]
  i440.m_ForceModuleActive = !!i441[6]
  i440.m_SendPointerHoverToParent = !!i441[7]
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

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.UI.Mask' )
  var i449 = data
  i448.m_ShowMaskGraphic = !!i449[0]
  return i448
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i450 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i451 = data
  request.r(i451[0], i451[1], 0, i450, 'skeletonDataAsset')
  request.r(i451[2], i451[3], 0, i450, 'additiveMaterial')
  request.r(i451[4], i451[5], 0, i450, 'multiplyMaterial')
  request.r(i451[6], i451[7], 0, i450, 'screenMaterial')
  i450.initialSkinName = i451[8]
  i450.initialFlipX = !!i451[9]
  i450.initialFlipY = !!i451[10]
  i450.startingAnimation = i451[11]
  i450.startingLoop = !!i451[12]
  i450.timeScale = i451[13]
  i450.freeze = !!i451[14]
  i450.layoutScaleMode = i451[15]
  i450.updateWhenInvisible = i451[16]
  i450.allowMultipleCanvasRenderers = !!i451[17]
  var i453 = i451[18]
  var i452 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i453.length; i += 2) {
  request.r(i453[i + 0], i453[i + 1], 1, i452, '')
  }
  i450.canvasRenderers = i452
  i450.enableSeparatorSlots = !!i451[19]
  i450.updateSeparatorPartLocation = !!i451[20]
  i450.updateSeparatorPartScale = !!i451[21]
  i450.disableMeshAssignmentOnOverride = !!i451[22]
  i450.referenceSize = new pc.Vec2( i451[23], i451[24] )
  i450.referenceScale = i451[25]
  i450.rectTransformSize = new pc.Vec2( i451[26], i451[27] )
  i450.editReferenceRect = !!i451[28]
  var i455 = i451[29]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( i455[i + 0] );
  }
  i450.separatorSlotNames = i454
  var i457 = i451[30]
  var i456 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i457.length; i += 2) {
  request.r(i457[i + 0], i457[i + 1], 1, i456, '')
  }
  i450.separatorParts = i456
  i450.meshGenerator = request.d('Spine.Unity.MeshGenerator', i451[31], i450.meshGenerator)
  i450.updateTiming = i451[32]
  i450.unscaledTime = !!i451[33]
  request.r(i451[34], i451[35], 0, i450, 'm_Material')
  i450.m_Maskable = !!i451[36]
  i450.m_Color = new pc.Color(i451[37], i451[38], i451[39], i451[40])
  i450.m_RaycastTarget = !!i451[41]
  i450.m_RaycastPadding = new pc.Vec4( i451[42], i451[43], i451[44], i451[45] )
  return i450
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i464 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i465 = data
  i464.settings = request.d('Spine.Unity.MeshGenerator+Settings', i465[0], i464.settings)
  return i464
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i466 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i467 = data
  i466.useClipping = !!i467[0]
  i466.zSpacing = i467[1]
  i466.pmaVertexColors = !!i467[2]
  i466.tintBlack = !!i467[3]
  i466.canvasGroupTintBlack = !!i467[4]
  i466.calculateTangents = !!i467[5]
  i466.addNormals = !!i467[6]
  i466.immutableTriangles = !!i467[7]
  return i466
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i468 = root || request.c( 'AnimationController' )
  var i469 = data
  var i471 = i469[0]
  var i470 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i471.length; i += 1) {
    i470.add(request.d('Anim', i471[i + 0]));
  }
  i468.anims = i470
  return i468
}

Deserializers["Anim"] = function (request, data, root) {
  var i474 = root || request.c( 'Anim' )
  var i475 = data
  i474.Key = i475[0]
  i474.NextKey = i475[1]
  request.r(i475[2], i475[3], 0, i474, 'Trigger')
  var i477 = i475[4]
  var i476 = new (System.Collections.Generic.List$1(Bridge.ns('Sound')))
  for(var i = 0; i < i477.length; i += 1) {
    i476.add(request.d('Sound', i477[i + 0]));
  }
  i474.Sounds = i476
  i474.Loop = !!i475[5]
  i474.Next = !!i475[6]
  return i474
}

Deserializers["Sound"] = function (request, data, root) {
  var i480 = root || request.c( 'Sound' )
  var i481 = data
  i480.TimeDelay = i481[0]
  request.r(i481[1], i481[2], 0, i480, 'Clip')
  return i480
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.UI.Text' )
  var i483 = data
  i482.m_FontData = request.d('UnityEngine.UI.FontData', i483[0], i482.m_FontData)
  i482.m_Text = i483[1]
  request.r(i483[2], i483[3], 0, i482, 'm_Material')
  i482.m_Maskable = !!i483[4]
  i482.m_Color = new pc.Color(i483[5], i483[6], i483[7], i483[8])
  i482.m_RaycastTarget = !!i483[9]
  i482.m_RaycastPadding = new pc.Vec4( i483[10], i483[11], i483[12], i483[13] )
  return i482
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.UI.FontData' )
  var i485 = data
  request.r(i485[0], i485[1], 0, i484, 'm_Font')
  i484.m_FontSize = i485[2]
  i484.m_FontStyle = i485[3]
  i484.m_BestFit = !!i485[4]
  i484.m_MinSize = i485[5]
  i484.m_MaxSize = i485[6]
  i484.m_Alignment = i485[7]
  i484.m_AlignByGeometry = !!i485[8]
  i484.m_RichText = !!i485[9]
  i484.m_HorizontalOverflow = i485[10]
  i484.m_VerticalOverflow = i485[11]
  i484.m_LineSpacing = i485[12]
  return i484
}

Deserializers["HeartController"] = function (request, data, root) {
  var i486 = root || request.c( 'HeartController' )
  var i487 = data
  request.r(i487[0], i487[1], 0, i486, 'parent')
  request.r(i487[2], i487[3], 0, i486, 'heartPrefab')
  return i486
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i489 = data
  i488.m_Spacing = i489[0]
  i488.m_ChildForceExpandWidth = !!i489[1]
  i488.m_ChildForceExpandHeight = !!i489[2]
  i488.m_ChildControlWidth = !!i489[3]
  i488.m_ChildControlHeight = !!i489[4]
  i488.m_ChildScaleWidth = !!i489[5]
  i488.m_ChildScaleHeight = !!i489[6]
  i488.m_ReverseArrangement = !!i489[7]
  i488.m_Padding = UnityEngine.RectOffset.FromPaddings(i489[8], i489[9], i489[10], i489[11])
  i488.m_ChildAlignment = i489[12]
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

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.UI.Button' )
  var i511 = data
  i510.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i511[0], i510.m_OnClick)
  i510.m_Navigation = request.d('UnityEngine.UI.Navigation', i511[1], i510.m_Navigation)
  i510.m_Transition = i511[2]
  i510.m_Colors = request.d('UnityEngine.UI.ColorBlock', i511[3], i510.m_Colors)
  i510.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i511[4], i510.m_SpriteState)
  i510.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i511[5], i510.m_AnimationTriggers)
  i510.m_Interactable = !!i511[6]
  request.r(i511[7], i511[8], 0, i510, 'm_TargetGraphic')
  return i510
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i513 = data
  i512.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i513[0], i512.m_PersistentCalls)
  return i512
}

Deserializers["PhaseController"] = function (request, data, root) {
  var i514 = root || request.c( 'PhaseController' )
  var i515 = data
  request.r(i515[0], i515[1], 0, i514, 'character')
  i514.key = i515[2]
  request.r(i515[3], i515[4], 0, i514, 'legHair')
  return i514
}

Deserializers["TutController"] = function (request, data, root) {
  var i516 = root || request.c( 'TutController' )
  var i517 = data
  request.r(i517[0], i517[1], 0, i516, 'icon')
  request.r(i517[2], i517[3], 0, i516, 'tutObject')
  i516.toPos = new pc.Vec3( i517[4], i517[5], i517[6] )
  i516.timeMove = i517[7]
  i516.timeDelay = i517[8]
  return i516
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i518 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i519 = data
  i518.targetIsSelf = !!i519[0]
  request.r(i519[1], i519[2], 0, i518, 'targetGO')
  i518.tweenTargetIsTargetGO = !!i519[3]
  i518.delay = i519[4]
  i518.duration = i519[5]
  i518.easeType = i519[6]
  i518.easeCurve = new pc.AnimationCurve( { keys_flow: i519[7] } )
  i518.loopType = i519[8]
  i518.loops = i519[9]
  i518.id = i519[10]
  i518.isRelative = !!i519[11]
  i518.isFrom = !!i519[12]
  i518.isIndependentUpdate = !!i519[13]
  i518.autoKill = !!i519[14]
  i518.autoGenerate = !!i519[15]
  i518.isActive = !!i519[16]
  i518.isValid = !!i519[17]
  request.r(i519[18], i519[19], 0, i518, 'target')
  i518.animationType = i519[20]
  i518.targetType = i519[21]
  i518.forcedTargetType = i519[22]
  i518.autoPlay = !!i519[23]
  i518.useTargetAsV3 = !!i519[24]
  i518.endValueFloat = i519[25]
  i518.endValueV3 = new pc.Vec3( i519[26], i519[27], i519[28] )
  i518.endValueV2 = new pc.Vec2( i519[29], i519[30] )
  i518.endValueColor = new pc.Color(i519[31], i519[32], i519[33], i519[34])
  i518.endValueString = i519[35]
  i518.endValueRect = UnityEngine.Rect.MinMaxRect(i519[36], i519[37], i519[38], i519[39])
  request.r(i519[40], i519[41], 0, i518, 'endValueTransform')
  i518.optionalBool0 = !!i519[42]
  i518.optionalBool1 = !!i519[43]
  i518.optionalFloat0 = i519[44]
  i518.optionalInt0 = i519[45]
  i518.optionalRotationMode = i519[46]
  i518.optionalScrambleMode = i519[47]
  i518.optionalShakeRandomnessMode = i519[48]
  i518.optionalString = i519[49]
  i518.updateType = i519[50]
  i518.isSpeedBased = !!i519[51]
  i518.hasOnStart = !!i519[52]
  i518.hasOnPlay = !!i519[53]
  i518.hasOnUpdate = !!i519[54]
  i518.hasOnStepComplete = !!i519[55]
  i518.hasOnComplete = !!i519[56]
  i518.hasOnTweenCreated = !!i519[57]
  i518.hasOnRewind = !!i519[58]
  i518.onStart = request.d('UnityEngine.Events.UnityEvent', i519[59], i518.onStart)
  i518.onPlay = request.d('UnityEngine.Events.UnityEvent', i519[60], i518.onPlay)
  i518.onUpdate = request.d('UnityEngine.Events.UnityEvent', i519[61], i518.onUpdate)
  i518.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i519[62], i518.onStepComplete)
  i518.onComplete = request.d('UnityEngine.Events.UnityEvent', i519[63], i518.onComplete)
  i518.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i519[64], i518.onTweenCreated)
  i518.onRewind = request.d('UnityEngine.Events.UnityEvent', i519[65], i518.onRewind)
  return i518
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i521 = data
  i520.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i521[0], i520.m_PersistentCalls)
  return i520
}

Deserializers["TweenController"] = function (request, data, root) {
  var i522 = root || request.c( 'TweenController' )
  var i523 = data
  i522.startScale = i523[0]
  i522.endScale = i523[1]
  i522.time = i523[2]
  return i522
}

Deserializers["LunaController"] = function (request, data, root) {
  var i524 = root || request.c( 'LunaController' )
  var i525 = data
  i524.TimePlay = i525[0]
  i524.CountPlay = i525[1]
  i524.MaxHeart = i525[2]
  i524.BGColor = new pc.Color(i525[3], i525[4], i525[5], i525[6])
  i524.GameBGColor = new pc.Color(i525[7], i525[8], i525[9], i525[10])
  i524.LevelTextColor = new pc.Color(i525[11], i525[12], i525[13], i525[14])
  i524.TitleTextColor = new pc.Color(i525[15], i525[16], i525[17], i525[18])
  request.r(i525[19], i525[20], 0, i524, 'time')
  request.r(i525[21], i525[22], 0, i524, 'BGImage')
  request.r(i525[23], i525[24], 0, i524, 'GameBGImage')
  request.r(i525[25], i525[26], 0, i524, 'levelText')
  request.r(i525[27], i525[28], 0, i524, 'titleText')
  request.r(i525[29], i525[30], 0, i524, 'endCard')
  var i527 = i525[31]
  var i526 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i527.length; i += 2) {
  request.r(i527[i + 0], i527[i + 1], 1, i526, '')
  }
  i524.CTA = i526
  i524.count = i525[32]
  return i524
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i530 = root || request.c( 'LayoutController' )
  var i531 = data
  request.r(i531[0], i531[1], 0, i530, 'CTA')
  i530.hide = !!i531[2]
  return i530
}

Deserializers["AudioController"] = function (request, data, root) {
  var i532 = root || request.c( 'AudioController' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'BGM')
  request.r(i533[2], i533[3], 0, i532, 'musicSource')
  request.r(i533[4], i533[5], 0, i532, 'SFXPool')
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'clip')
  request.r(i535[2], i535[3], 0, i534, 'outputAudioMixerGroup')
  i534.playOnAwake = !!i535[4]
  i534.loop = !!i535[5]
  i534.time = i535[6]
  i534.volume = i535[7]
  i534.pitch = i535[8]
  i534.enabled = !!i535[9]
  return i534
}

Deserializers["DragController"] = function (request, data, root) {
  var i536 = root || request.c( 'DragController' )
  var i537 = data
  request.r(i537[0], i537[1], 0, i536, 'currentTarget')
  request.r(i537[2], i537[3], 0, i536, 'canvas')
  request.r(i537[4], i537[5], 0, i536, 'tut')
  request.r(i537[6], i537[7], 0, i536, 'tut2')
  request.r(i537[8], i537[9], 0, i536, 'tut3')
  var i539 = i537[10]
  var i538 = new (System.Collections.Generic.List$1(Bridge.ns('ItemMap')))
  for(var i = 0; i < i539.length; i += 1) {
    i538.add(request.d('ItemMap', i539[i + 0]));
  }
  i536.items = i538
  return i536
}

Deserializers["ItemMap"] = function (request, data, root) {
  var i542 = root || request.c( 'ItemMap' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'Item')
  request.r(i543[2], i543[3], 0, i542, 'Target')
  request.r(i543[4], i543[5], 0, i542, 'ItemVisual')
  request.r(i543[6], i543[7], 0, i542, 'DestroyItem1')
  request.r(i543[8], i543[9], 0, i542, 'DestroyItem2')
  request.r(i543[10], i543[11], 0, i542, 'ActiveItem')
  return i542
}

Deserializers["GameController"] = function (request, data, root) {
  var i544 = root || request.c( 'GameController' )
  var i545 = data
  i544.CompleteStep = request.d('System.Action', i545[0], i544.CompleteStep)
  i544.OnGameOver = request.d('System.Action', i545[1], i544.OnGameOver)
  request.r(i545[2], i545[3], 0, i544, 'character')
  i544.maxHeart = i545[4]
  request.r(i545[5], i545[6], 0, i544, 'heart')
  request.r(i545[7], i545[8], 0, i544, 'completeSound')
  request.r(i545[9], i545[10], 0, i544, 'failSound')
  request.r(i545[11], i545[12], 0, i544, 'failScene')
  var i547 = i545[13]
  var i546 = new (System.Collections.Generic.List$1(Bridge.ns('Phase')))
  for(var i = 0; i < i547.length; i += 1) {
    i546.add(request.d('Phase', i547[i + 0]));
  }
  i544.phase = i546
  request.r(i545[14], i545[15], 0, i544, 'lockScene')
  i544.end = !!i545[16]
  i544.complete = !!i545[17]
  i544.currentStep = i545[18]
  i544.maxStep = i545[19]
  request.r(i545[20], i545[21], 0, i544, 'currentStepText')
  request.r(i545[22], i545[23], 0, i544, 'maxStepText')
  request.r(i545[24], i545[25], 0, i544, 'slider')
  return i544
}

Deserializers["System.Action"] = function (request, data, root) {
  var i548 = root || request.c( 'System.Action' )
  var i549 = data
  return i548
}

Deserializers["Phase"] = function (request, data, root) {
  var i552 = root || request.c( 'Phase' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'Voice')
  i552.VoiceDelay = i553[2]
  request.r(i553[3], i553[4], 0, i552, 'PhasePuzzle')
  i552.EndDelay = i553[5]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i555 = data
  i554.ambientIntensity = i555[0]
  i554.reflectionIntensity = i555[1]
  i554.ambientMode = i555[2]
  i554.ambientLight = new pc.Color(i555[3], i555[4], i555[5], i555[6])
  i554.ambientSkyColor = new pc.Color(i555[7], i555[8], i555[9], i555[10])
  i554.ambientGroundColor = new pc.Color(i555[11], i555[12], i555[13], i555[14])
  i554.ambientEquatorColor = new pc.Color(i555[15], i555[16], i555[17], i555[18])
  i554.fogColor = new pc.Color(i555[19], i555[20], i555[21], i555[22])
  i554.fogEndDistance = i555[23]
  i554.fogStartDistance = i555[24]
  i554.fogDensity = i555[25]
  i554.fog = !!i555[26]
  request.r(i555[27], i555[28], 0, i554, 'skybox')
  i554.fogMode = i555[29]
  var i557 = i555[30]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i557[i + 0]) );
  }
  i554.lightmaps = i556
  i554.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i555[31], i554.lightProbes)
  i554.lightmapsMode = i555[32]
  i554.mixedBakeMode = i555[33]
  i554.environmentLightingMode = i555[34]
  i554.ambientProbe = new pc.SphericalHarmonicsL2(i555[35])
  request.r(i555[36], i555[37], 0, i554, 'customReflection')
  request.r(i555[38], i555[39], 0, i554, 'defaultReflection')
  i554.defaultReflectionMode = i555[40]
  i554.defaultReflectionResolution = i555[41]
  i554.sunLightObjectId = i555[42]
  i554.pixelLightCount = i555[43]
  i554.defaultReflectionHDR = !!i555[44]
  i554.hasLightDataAsset = !!i555[45]
  i554.hasManualGenerate = !!i555[46]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'lightmapColor')
  request.r(i561[2], i561[3], 0, i560, 'lightmapDirection')
  request.r(i561[4], i561[5], 0, i560, 'shadowMask')
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i562 = root || new UnityEngine.LightProbes()
  var i563 = data
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i571 = data
  var i573 = i571[0]
  var i572 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i573.length; i += 1) {
    i572.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i573[i + 0]));
  }
  i570.ShaderCompilationErrors = i572
  i570.name = i571[1]
  i570.guid = i571[2]
  var i575 = i571[3]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( i575[i + 0] );
  }
  i570.shaderDefinedKeywords = i574
  var i577 = i571[4]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i577[i + 0]) );
  }
  i570.passes = i576
  var i579 = i571[5]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i579[i + 0]) );
  }
  i570.usePasses = i578
  var i581 = i571[6]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i581[i + 0]) );
  }
  i570.defaultParameterValues = i580
  request.r(i571[7], i571[8], 0, i570, 'unityFallbackShader')
  i570.readDepth = !!i571[9]
  i570.hasDepthOnlyPass = !!i571[10]
  i570.isCreatedByShaderGraph = !!i571[11]
  i570.disableBatching = !!i571[12]
  i570.compiled = !!i571[13]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i585 = data
  i584.shaderName = i585[0]
  i584.errorMessage = i585[1]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i588 = root || new pc.UnityShaderPass()
  var i589 = data
  i588.id = i589[0]
  i588.subShaderIndex = i589[1]
  i588.name = i589[2]
  i588.passType = i589[3]
  i588.grabPassTextureName = i589[4]
  i588.usePass = !!i589[5]
  i588.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[6], i588.zTest)
  i588.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[7], i588.zWrite)
  i588.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[8], i588.culling)
  i588.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i589[9], i588.blending)
  i588.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i589[10], i588.alphaBlending)
  i588.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[11], i588.colorWriteMask)
  i588.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[12], i588.offsetUnits)
  i588.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[13], i588.offsetFactor)
  i588.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[14], i588.stencilRef)
  i588.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[15], i588.stencilReadMask)
  i588.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[16], i588.stencilWriteMask)
  i588.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i589[17], i588.stencilOp)
  i588.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i589[18], i588.stencilOpFront)
  i588.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i589[19], i588.stencilOpBack)
  var i591 = i589[20]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i591[i + 0]) );
  }
  i588.tags = i590
  var i593 = i589[21]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( i593[i + 0] );
  }
  i588.passDefinedKeywords = i592
  var i595 = i589[22]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i595[i + 0]) );
  }
  i588.passDefinedKeywordGroups = i594
  var i597 = i589[23]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i597[i + 0]) );
  }
  i588.variants = i596
  var i599 = i589[24]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i599[i + 0]) );
  }
  i588.excludedVariants = i598
  i588.hasDepthReader = !!i589[25]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i601 = data
  i600.val = i601[0]
  i600.name = i601[1]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i603 = data
  i602.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i603[0], i602.src)
  i602.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i603[1], i602.dst)
  i602.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i603[2], i602.op)
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i605 = data
  i604.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[0], i604.pass)
  i604.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[1], i604.fail)
  i604.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[2], i604.zFail)
  i604.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[3], i604.comp)
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i609 = data
  i608.name = i609[0]
  i608.value = i609[1]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i613 = data
  var i615 = i613[0]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( i615[i + 0] );
  }
  i612.keywords = i614
  i612.hasDiscard = !!i613[1]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i619 = data
  i618.passId = i619[0]
  i618.subShaderIndex = i619[1]
  var i621 = i619[2]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( i621[i + 0] );
  }
  i618.keywords = i620
  i618.vertexProgram = i619[3]
  i618.fragmentProgram = i619[4]
  i618.exportedForWebGl2 = !!i619[5]
  i618.readDepth = !!i619[6]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'shader')
  i624.pass = i625[2]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i629 = data
  i628.name = i629[0]
  i628.type = i629[1]
  i628.value = new pc.Vec4( i629[2], i629[3], i629[4], i629[5] )
  i628.textureValue = i629[6]
  i628.shaderPropertyFlag = i629[7]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i631 = data
  i630.name = i631[0]
  request.r(i631[1], i631[2], 0, i630, 'texture')
  i630.aabb = i631[3]
  i630.vertices = i631[4]
  i630.triangles = i631[5]
  i630.textureRect = UnityEngine.Rect.MinMaxRect(i631[6], i631[7], i631[8], i631[9])
  i630.packedRect = UnityEngine.Rect.MinMaxRect(i631[10], i631[11], i631[12], i631[13])
  i630.border = new pc.Vec4( i631[14], i631[15], i631[16], i631[17] )
  i630.transparency = i631[18]
  i630.bounds = i631[19]
  i630.pixelsPerUnit = i631[20]
  i630.textureWidth = i631[21]
  i630.textureHeight = i631[22]
  i630.nativeSize = new pc.Vec2( i631[23], i631[24] )
  i630.pivot = new pc.Vec2( i631[25], i631[26] )
  i630.textureRectOffset = new pc.Vec2( i631[27], i631[28] )
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i633 = data
  i632.name = i633[0]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i635 = data
  i634.name = i635[0]
  i634.ascent = i635[1]
  i634.originalLineHeight = i635[2]
  i634.fontSize = i635[3]
  var i637 = i635[4]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i637[i + 0]) );
  }
  i634.characterInfo = i636
  request.r(i635[5], i635[6], 0, i634, 'texture')
  i634.originalFontSize = i635[7]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i641 = data
  i640.index = i641[0]
  i640.advance = i641[1]
  i640.bearing = i641[2]
  i640.glyphWidth = i641[3]
  i640.glyphHeight = i641[4]
  i640.minX = i641[5]
  i640.maxX = i641[6]
  i640.minY = i641[7]
  i640.maxY = i641[8]
  i640.uvBottomLeftX = i641[9]
  i640.uvBottomLeftY = i641[10]
  i640.uvBottomRightX = i641[11]
  i640.uvBottomRightY = i641[12]
  i640.uvTopLeftX = i641[13]
  i640.uvTopLeftY = i641[14]
  i640.uvTopRightX = i641[15]
  i640.uvTopRightY = i641[16]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i643 = data
  i642.name = i643[0]
  i642.bytes64 = i643[1]
  i642.data = i643[2]
  return i642
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i644 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i645 = data
  var i647 = i645[0]
  var i646 = []
  for(var i = 0; i < i647.length; i += 2) {
  request.r(i647[i + 0], i647[i + 1], 2, i646, '')
  }
  i644.atlasAssets = i646
  i644.scale = i645[1]
  request.r(i645[2], i645[3], 0, i644, 'skeletonJSON')
  i644.isUpgradingBlendModeMaterials = !!i645[4]
  i644.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i645[5], i644.blendModeMaterials)
  var i649 = i645[6]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i649.length; i += 2) {
  request.r(i649[i + 0], i649[i + 1], 1, i648, '')
  }
  i644.skeletonDataModifiers = i648
  var i651 = i645[7]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( i651[i + 0] );
  }
  i644.fromAnimation = i650
  var i653 = i645[8]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( i653[i + 0] );
  }
  i644.toAnimation = i652
  i644.duration = i645[9]
  i644.defaultMix = i645[10]
  request.r(i645[11], i645[12], 0, i644, 'controller')
  return i644
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i656 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i657 = data
  i656.applyAdditiveMaterial = !!i657[0]
  var i659 = i657[1]
  var i658 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i659.length; i += 1) {
    i658.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i659[i + 0]));
  }
  i656.additiveMaterials = i658
  var i661 = i657[2]
  var i660 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i661.length; i += 1) {
    i660.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i661[i + 0]));
  }
  i656.multiplyMaterials = i660
  var i663 = i657[3]
  var i662 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i663.length; i += 1) {
    i662.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i663[i + 0]));
  }
  i656.screenMaterials = i662
  i656.requiresBlendModeMaterials = !!i657[4]
  return i656
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i666 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i667 = data
  i666.pageName = i667[0]
  request.r(i667[1], i667[2], 0, i666, 'material')
  return i666
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i670 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'atlasFile')
  var i673 = i671[2]
  var i672 = []
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 2, i672, '')
  }
  i670.materials = i672
  i670.textureLoadingMode = i671[3]
  request.r(i671[4], i671[5], 0, i670, 'onDemandTextureLoader')
  return i670
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i676 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i677 = data
  i676.useSafeMode = !!i677[0]
  i676.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i677[1], i676.safeModeOptions)
  i676.timeScale = i677[2]
  i676.unscaledTimeScale = i677[3]
  i676.useSmoothDeltaTime = !!i677[4]
  i676.maxSmoothUnscaledTime = i677[5]
  i676.rewindCallbackMode = i677[6]
  i676.showUnityEditorReport = !!i677[7]
  i676.logBehaviour = i677[8]
  i676.drawGizmos = !!i677[9]
  i676.defaultRecyclable = !!i677[10]
  i676.defaultAutoPlay = i677[11]
  i676.defaultUpdateType = i677[12]
  i676.defaultTimeScaleIndependent = !!i677[13]
  i676.defaultEaseType = i677[14]
  i676.defaultEaseOvershootOrAmplitude = i677[15]
  i676.defaultEasePeriod = i677[16]
  i676.defaultAutoKill = !!i677[17]
  i676.defaultLoopType = i677[18]
  i676.debugMode = !!i677[19]
  i676.debugStoreTargetId = !!i677[20]
  i676.showPreviewPanel = !!i677[21]
  i676.storeSettingsLocation = i677[22]
  i676.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i677[23], i676.modules)
  i676.createASMDEF = !!i677[24]
  i676.showPlayingTweens = !!i677[25]
  i676.showPausedTweens = !!i677[26]
  return i676
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i678 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i679 = data
  i678.logBehaviour = i679[0]
  i678.nestedTweenFailureBehaviour = i679[1]
  return i678
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i680 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i681 = data
  i680.showPanel = !!i681[0]
  i680.audioEnabled = !!i681[1]
  i680.physicsEnabled = !!i681[2]
  i680.physics2DEnabled = !!i681[3]
  i680.spriteEnabled = !!i681[4]
  i680.uiEnabled = !!i681[5]
  i680.textMeshProEnabled = !!i681[6]
  i680.tk2DEnabled = !!i681[7]
  i680.deAudioEnabled = !!i681[8]
  i680.deUnityExtendedEnabled = !!i681[9]
  i680.epoOutlineEnabled = !!i681[10]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i683 = data
  var i685 = i683[0]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i685[i + 0]) );
  }
  i682.files = i684
  i682.componentToPrefabIds = i683[1]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i689 = data
  i688.path = i689[0]
  request.r(i689[1], i689[2], 0, i688, 'unityObject')
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i691 = data
  var i693 = i691[0]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i693[i + 0]) );
  }
  i690.scriptsExecutionOrder = i692
  var i695 = i691[1]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i695[i + 0]) );
  }
  i690.sortingLayers = i694
  var i697 = i691[2]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i697[i + 0]) );
  }
  i690.cullingLayers = i696
  i690.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i691[3], i690.timeSettings)
  i690.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i691[4], i690.physicsSettings)
  i690.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i691[5], i690.physics2DSettings)
  i690.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i691[6], i690.qualitySettings)
  i690.enableRealtimeShadows = !!i691[7]
  i690.enableAutoInstancing = !!i691[8]
  i690.enableStaticBatching = !!i691[9]
  i690.enableDynamicBatching = !!i691[10]
  i690.usePreservativeDynamicBatching = !!i691[11]
  i690.lightmapEncodingQuality = i691[12]
  i690.desiredColorSpace = i691[13]
  var i699 = i691[14]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( i699[i + 0] );
  }
  i690.allTags = i698
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i703 = data
  i702.name = i703[0]
  i702.value = i703[1]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i707 = data
  i706.id = i707[0]
  i706.name = i707[1]
  i706.value = i707[2]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i711 = data
  i710.id = i711[0]
  i710.name = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i713 = data
  i712.fixedDeltaTime = i713[0]
  i712.maximumDeltaTime = i713[1]
  i712.timeScale = i713[2]
  i712.maximumParticleTimestep = i713[3]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i715 = data
  i714.gravity = new pc.Vec3( i715[0], i715[1], i715[2] )
  i714.defaultSolverIterations = i715[3]
  i714.bounceThreshold = i715[4]
  i714.autoSyncTransforms = !!i715[5]
  i714.autoSimulation = !!i715[6]
  var i717 = i715[7]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i717[i + 0]) );
  }
  i714.collisionMatrix = i716
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i721 = data
  i720.enabled = !!i721[0]
  i720.layerId = i721[1]
  i720.otherLayerId = i721[2]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'material')
  i722.gravity = new pc.Vec2( i723[2], i723[3] )
  i722.positionIterations = i723[4]
  i722.velocityIterations = i723[5]
  i722.velocityThreshold = i723[6]
  i722.maxLinearCorrection = i723[7]
  i722.maxAngularCorrection = i723[8]
  i722.maxTranslationSpeed = i723[9]
  i722.maxRotationSpeed = i723[10]
  i722.baumgarteScale = i723[11]
  i722.baumgarteTOIScale = i723[12]
  i722.timeToSleep = i723[13]
  i722.linearSleepTolerance = i723[14]
  i722.angularSleepTolerance = i723[15]
  i722.defaultContactOffset = i723[16]
  i722.autoSimulation = !!i723[17]
  i722.queriesHitTriggers = !!i723[18]
  i722.queriesStartInColliders = !!i723[19]
  i722.callbacksOnDisable = !!i723[20]
  i722.reuseCollisionCallbacks = !!i723[21]
  i722.autoSyncTransforms = !!i723[22]
  var i725 = i723[23]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i725[i + 0]) );
  }
  i722.collisionMatrix = i724
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i729 = data
  i728.enabled = !!i729[0]
  i728.layerId = i729[1]
  i728.otherLayerId = i729[2]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i731 = data
  var i733 = i731[0]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i733[i + 0]) );
  }
  i730.qualityLevels = i732
  var i735 = i731[1]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( i735[i + 0] );
  }
  i730.names = i734
  i730.shadows = i731[2]
  i730.anisotropicFiltering = i731[3]
  i730.antiAliasing = i731[4]
  i730.lodBias = i731[5]
  i730.shadowCascades = i731[6]
  i730.shadowDistance = i731[7]
  i730.shadowmaskMode = i731[8]
  i730.shadowProjection = i731[9]
  i730.shadowResolution = i731[10]
  i730.softParticles = !!i731[11]
  i730.softVegetation = !!i731[12]
  i730.activeColorSpace = i731[13]
  i730.desiredColorSpace = i731[14]
  i730.masterTextureLimit = i731[15]
  i730.maxQueuedFrames = i731[16]
  i730.particleRaycastBudget = i731[17]
  i730.pixelLightCount = i731[18]
  i730.realtimeReflectionProbes = !!i731[19]
  i730.shadowCascade2Split = i731[20]
  i730.shadowCascade4Split = new pc.Vec3( i731[21], i731[22], i731[23] )
  i730.streamingMipmapsActive = !!i731[24]
  i730.vSyncCount = i731[25]
  i730.asyncUploadBufferSize = i731[26]
  i730.asyncUploadTimeSlice = i731[27]
  i730.billboardsFaceCameraPosition = !!i731[28]
  i730.shadowNearPlaneOffset = i731[29]
  i730.streamingMipmapsMemoryBudget = i731[30]
  i730.maximumLODLevel = i731[31]
  i730.streamingMipmapsAddAllCameras = !!i731[32]
  i730.streamingMipmapsMaxLevelReduction = i731[33]
  i730.streamingMipmapsRenderersPerFrame = i731[34]
  i730.resolutionScalingFixedDPIFactor = i731[35]
  i730.streamingMipmapsMaxFileIORequests = i731[36]
  i730.currentQualityLevel = i731[37]
  return i730
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'm_ObjectArgument')
  i738.m_ObjectArgumentAssemblyTypeName = i739[2]
  i738.m_IntArgument = i739[3]
  i738.m_FloatArgument = i739[4]
  i738.m_StringArgument = i739[5]
  i738.m_BoolArgument = !!i739[6]
  return i738
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[7],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[7],"74":[75],"76":[77],"78":[77],"11":[2],"19":[15],"79":[80],"81":[2],"82":[3,2],"83":[75],"15":[3,2],"84":[85,75],"86":[75,87],"88":[75],"89":[53],"90":[60],"91":[80],"92":[93],"94":[95],"96":[7],"97":[98],"99":[2],"100":[3,2],"101":[75],"102":[3,2],"103":[2],"104":[2],"105":[75,2],"106":[2,3],"107":[108],"109":[108],"110":[108],"111":[2],"112":[2],"13":[11],"5":[3,2],"113":[2],"12":[11],"114":[2],"115":[2],"25":[2],"116":[2],"117":[2],"118":[2],"119":[2],"14":[2],"120":[2],"121":[3,2],"122":[2],"123":[2],"124":[2],"26":[2],"22":[3,2],"125":[2],"126":[9],"127":[9],"10":[9],"128":[9],"129":[7],"130":[7]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","UnityEngine.GameObject","UnityEngine.AudioClip","UnityEngine.UI.Text","UnityEngine.Font","HeartController","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Slider","UnityEngine.UI.Button","PhaseController","TutController","DG.Tweening.DOTweenAnimation","TweenController","LunaController","LayoutController","AudioController","UnityEngine.AudioSource","UnityEngine.Transform","DragController","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "07/06/2026 10:52:52";

Deserializers.lunaDaysRunning = "1.6";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "TBAP_V21_NgocNDL_TamNTM";

Deserializers.lunaAppID = "33901";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1886";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4266";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BMTP_Luna";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "ae8bbe4f-62cd-4053-9754-059f25f9df7f";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

