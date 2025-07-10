var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4482 = root || request.c( 'UnityEngine.JointSpring' )
  var i4483 = data
  i4482.spring = i4483[0]
  i4482.damper = i4483[1]
  i4482.targetPosition = i4483[2]
  return i4482
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4484 = root || request.c( 'UnityEngine.JointMotor' )
  var i4485 = data
  i4484.m_TargetVelocity = i4485[0]
  i4484.m_Force = i4485[1]
  i4484.m_FreeSpin = i4485[2]
  return i4484
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4486 = root || request.c( 'UnityEngine.JointLimits' )
  var i4487 = data
  i4486.m_Min = i4487[0]
  i4486.m_Max = i4487[1]
  i4486.m_Bounciness = i4487[2]
  i4486.m_BounceMinVelocity = i4487[3]
  i4486.m_ContactDistance = i4487[4]
  i4486.minBounce = i4487[5]
  i4486.maxBounce = i4487[6]
  return i4486
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4488 = root || request.c( 'UnityEngine.JointDrive' )
  var i4489 = data
  i4488.m_PositionSpring = i4489[0]
  i4488.m_PositionDamper = i4489[1]
  i4488.m_MaximumForce = i4489[2]
  i4488.m_UseAcceleration = i4489[3]
  return i4488
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4490 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4491 = data
  i4490.m_Spring = i4491[0]
  i4490.m_Damper = i4491[1]
  return i4490
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4492 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4493 = data
  i4492.m_Limit = i4493[0]
  i4492.m_Bounciness = i4493[1]
  i4492.m_ContactDistance = i4493[2]
  return i4492
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4494 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4495 = data
  i4494.m_ExtremumSlip = i4495[0]
  i4494.m_ExtremumValue = i4495[1]
  i4494.m_AsymptoteSlip = i4495[2]
  i4494.m_AsymptoteValue = i4495[3]
  i4494.m_Stiffness = i4495[4]
  return i4494
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4496 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4497 = data
  i4496.m_LowerAngle = i4497[0]
  i4496.m_UpperAngle = i4497[1]
  return i4496
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4498 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4499 = data
  i4498.m_MotorSpeed = i4499[0]
  i4498.m_MaximumMotorTorque = i4499[1]
  return i4498
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4500 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4501 = data
  i4500.m_DampingRatio = i4501[0]
  i4500.m_Frequency = i4501[1]
  i4500.m_Angle = i4501[2]
  return i4500
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4502 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4503 = data
  i4502.m_LowerTranslation = i4503[0]
  i4502.m_UpperTranslation = i4503[1]
  return i4502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4505 = data
  i4504.name = i4505[0]
  i4504.width = i4505[1]
  i4504.height = i4505[2]
  i4504.mipmapCount = i4505[3]
  i4504.anisoLevel = i4505[4]
  i4504.filterMode = i4505[5]
  i4504.hdr = !!i4505[6]
  i4504.format = i4505[7]
  i4504.wrapMode = i4505[8]
  i4504.alphaIsTransparency = !!i4505[9]
  i4504.alphaSource = i4505[10]
  i4504.graphicsFormat = i4505[11]
  i4504.sRGBTexture = !!i4505[12]
  i4504.desiredColorSpace = i4505[13]
  return i4504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4506 = root || new pc.UnityMaterial()
  var i4507 = data
  i4506.name = i4507[0]
  request.r(i4507[1], i4507[2], 0, i4506, 'shader')
  i4506.renderQueue = i4507[3]
  i4506.enableInstancing = !!i4507[4]
  var i4509 = i4507[5]
  var i4508 = []
  for(var i = 0; i < i4509.length; i += 1) {
    i4508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4509[i + 0]) );
  }
  i4506.floatParameters = i4508
  var i4511 = i4507[6]
  var i4510 = []
  for(var i = 0; i < i4511.length; i += 1) {
    i4510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4511[i + 0]) );
  }
  i4506.colorParameters = i4510
  var i4513 = i4507[7]
  var i4512 = []
  for(var i = 0; i < i4513.length; i += 1) {
    i4512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4513[i + 0]) );
  }
  i4506.vectorParameters = i4512
  var i4515 = i4507[8]
  var i4514 = []
  for(var i = 0; i < i4515.length; i += 1) {
    i4514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4515[i + 0]) );
  }
  i4506.textureParameters = i4514
  var i4517 = i4507[9]
  var i4516 = []
  for(var i = 0; i < i4517.length; i += 1) {
    i4516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4517[i + 0]) );
  }
  i4506.materialFlags = i4516
  return i4506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4521 = data
  i4520.name = i4521[0]
  i4520.value = i4521[1]
  return i4520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4525 = data
  i4524.name = i4525[0]
  i4524.value = new pc.Color(i4525[1], i4525[2], i4525[3], i4525[4])
  return i4524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4529 = data
  i4528.name = i4529[0]
  i4528.value = new pc.Vec4( i4529[1], i4529[2], i4529[3], i4529[4] )
  return i4528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4533 = data
  i4532.name = i4533[0]
  request.r(i4533[1], i4533[2], 0, i4532, 'value')
  return i4532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4537 = data
  i4536.name = i4537[0]
  i4536.enabled = !!i4537[1]
  return i4536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4539 = data
  i4538.pivot = new pc.Vec2( i4539[0], i4539[1] )
  i4538.anchorMin = new pc.Vec2( i4539[2], i4539[3] )
  i4538.anchorMax = new pc.Vec2( i4539[4], i4539[5] )
  i4538.sizeDelta = new pc.Vec2( i4539[6], i4539[7] )
  i4538.anchoredPosition3D = new pc.Vec3( i4539[8], i4539[9], i4539[10] )
  i4538.rotation = new pc.Quat(i4539[11], i4539[12], i4539[13], i4539[14])
  i4538.scale = new pc.Vec3( i4539[15], i4539[16], i4539[17] )
  return i4538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4541 = data
  i4540.cullTransparentMesh = !!i4541[0]
  return i4540
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i4542 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i4543 = data
  request.r(i4543[0], i4543[1], 0, i4542, 'skeletonDataAsset')
  request.r(i4543[2], i4543[3], 0, i4542, 'additiveMaterial')
  request.r(i4543[4], i4543[5], 0, i4542, 'multiplyMaterial')
  request.r(i4543[6], i4543[7], 0, i4542, 'screenMaterial')
  i4542.initialSkinName = i4543[8]
  i4542.initialFlipX = !!i4543[9]
  i4542.initialFlipY = !!i4543[10]
  i4542.startingAnimation = i4543[11]
  i4542.startingLoop = !!i4543[12]
  i4542.timeScale = i4543[13]
  i4542.freeze = !!i4543[14]
  i4542.layoutScaleMode = i4543[15]
  i4542.updateWhenInvisible = i4543[16]
  i4542.allowMultipleCanvasRenderers = !!i4543[17]
  var i4545 = i4543[18]
  var i4544 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i4545.length; i += 2) {
  request.r(i4545[i + 0], i4545[i + 1], 1, i4544, '')
  }
  i4542.canvasRenderers = i4544
  i4542.enableSeparatorSlots = !!i4543[19]
  i4542.updateSeparatorPartLocation = !!i4543[20]
  i4542.updateSeparatorPartScale = !!i4543[21]
  i4542.disableMeshAssignmentOnOverride = !!i4543[22]
  i4542.referenceSize = new pc.Vec2( i4543[23], i4543[24] )
  i4542.referenceScale = i4543[25]
  i4542.rectTransformSize = new pc.Vec2( i4543[26], i4543[27] )
  i4542.editReferenceRect = !!i4543[28]
  var i4547 = i4543[29]
  var i4546 = []
  for(var i = 0; i < i4547.length; i += 1) {
    i4546.push( i4547[i + 0] );
  }
  i4542.separatorSlotNames = i4546
  var i4549 = i4543[30]
  var i4548 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i4549.length; i += 2) {
  request.r(i4549[i + 0], i4549[i + 1], 1, i4548, '')
  }
  i4542.separatorParts = i4548
  i4542.meshGenerator = request.d('Spine.Unity.MeshGenerator', i4543[31], i4542.meshGenerator)
  i4542.updateTiming = i4543[32]
  i4542.unscaledTime = !!i4543[33]
  request.r(i4543[34], i4543[35], 0, i4542, 'm_Material')
  i4542.m_Maskable = !!i4543[36]
  i4542.m_Color = new pc.Color(i4543[37], i4543[38], i4543[39], i4543[40])
  i4542.m_RaycastTarget = !!i4543[41]
  i4542.m_RaycastPadding = new pc.Vec4( i4543[42], i4543[43], i4543[44], i4543[45] )
  return i4542
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i4556 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i4557 = data
  i4556.settings = request.d('Spine.Unity.MeshGenerator+Settings', i4557[0], i4556.settings)
  return i4556
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i4558 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i4559 = data
  i4558.useClipping = !!i4559[0]
  i4558.zSpacing = i4559[1]
  i4558.pmaVertexColors = !!i4559[2]
  i4558.tintBlack = !!i4559[3]
  i4558.canvasGroupTintBlack = !!i4559[4]
  i4558.calculateTangents = !!i4559[5]
  i4558.addNormals = !!i4559[6]
  i4558.immutableTriangles = !!i4559[7]
  return i4558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4561 = data
  request.r(i4561[0], i4561[1], 0, i4560, 'clip')
  request.r(i4561[2], i4561[3], 0, i4560, 'outputAudioMixerGroup')
  i4560.playOnAwake = !!i4561[4]
  i4560.loop = !!i4561[5]
  i4560.time = i4561[6]
  i4560.volume = i4561[7]
  i4560.pitch = i4561[8]
  i4560.enabled = !!i4561[9]
  return i4560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4563 = data
  i4562.name = i4563[0]
  i4562.tagId = i4563[1]
  i4562.enabled = !!i4563[2]
  i4562.isStatic = !!i4563[3]
  i4562.layer = i4563[4]
  return i4562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4565 = data
  i4564.name = i4565[0]
  i4564.index = i4565[1]
  i4564.startup = !!i4565[2]
  return i4564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4567 = data
  i4566.position = new pc.Vec3( i4567[0], i4567[1], i4567[2] )
  i4566.scale = new pc.Vec3( i4567[3], i4567[4], i4567[5] )
  i4566.rotation = new pc.Quat(i4567[6], i4567[7], i4567[8], i4567[9])
  return i4566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4569 = data
  i4568.enabled = !!i4569[0]
  i4568.aspect = i4569[1]
  i4568.orthographic = !!i4569[2]
  i4568.orthographicSize = i4569[3]
  i4568.backgroundColor = new pc.Color(i4569[4], i4569[5], i4569[6], i4569[7])
  i4568.nearClipPlane = i4569[8]
  i4568.farClipPlane = i4569[9]
  i4568.fieldOfView = i4569[10]
  i4568.depth = i4569[11]
  i4568.clearFlags = i4569[12]
  i4568.cullingMask = i4569[13]
  i4568.rect = i4569[14]
  request.r(i4569[15], i4569[16], 0, i4568, 'targetTexture')
  i4568.usePhysicalProperties = !!i4569[17]
  i4568.focalLength = i4569[18]
  i4568.sensorSize = new pc.Vec2( i4569[19], i4569[20] )
  i4568.lensShift = new pc.Vec2( i4569[21], i4569[22] )
  i4568.gateFit = i4569[23]
  return i4568
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4570 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4571 = data
  request.r(i4571[0], i4571[1], 0, i4570, 'm_FirstSelected')
  i4570.m_sendNavigationEvents = !!i4571[2]
  i4570.m_DragThreshold = i4571[3]
  return i4570
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4572 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4573 = data
  i4572.m_HorizontalAxis = i4573[0]
  i4572.m_VerticalAxis = i4573[1]
  i4572.m_SubmitButton = i4573[2]
  i4572.m_CancelButton = i4573[3]
  i4572.m_InputActionsPerSecond = i4573[4]
  i4572.m_RepeatDelay = i4573[5]
  i4572.m_ForceModuleActive = !!i4573[6]
  i4572.m_SendPointerHoverToParent = !!i4573[7]
  return i4572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4575 = data
  i4574.enabled = !!i4575[0]
  i4574.planeDistance = i4575[1]
  i4574.referencePixelsPerUnit = i4575[2]
  i4574.isFallbackOverlay = !!i4575[3]
  i4574.renderMode = i4575[4]
  i4574.renderOrder = i4575[5]
  i4574.sortingLayerName = i4575[6]
  i4574.sortingOrder = i4575[7]
  i4574.scaleFactor = i4575[8]
  request.r(i4575[9], i4575[10], 0, i4574, 'worldCamera')
  i4574.overrideSorting = !!i4575[11]
  i4574.pixelPerfect = !!i4575[12]
  i4574.targetDisplay = i4575[13]
  i4574.overridePixelPerfect = !!i4575[14]
  return i4574
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4576 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4577 = data
  i4576.m_UiScaleMode = i4577[0]
  i4576.m_ReferencePixelsPerUnit = i4577[1]
  i4576.m_ScaleFactor = i4577[2]
  i4576.m_ReferenceResolution = new pc.Vec2( i4577[3], i4577[4] )
  i4576.m_ScreenMatchMode = i4577[5]
  i4576.m_MatchWidthOrHeight = i4577[6]
  i4576.m_PhysicalUnit = i4577[7]
  i4576.m_FallbackScreenDPI = i4577[8]
  i4576.m_DefaultSpriteDPI = i4577[9]
  i4576.m_DynamicPixelsPerUnit = i4577[10]
  i4576.m_PresetInfoIsWorld = !!i4577[11]
  return i4576
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4578 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4579 = data
  i4578.m_IgnoreReversedGraphics = !!i4579[0]
  i4578.m_BlockingObjects = i4579[1]
  i4578.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4579[2] )
  return i4578
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i4580 = root || request.c( 'LunaManager' )
  var i4581 = data
  var i4583 = i4581[0]
  var i4582 = []
  for(var i = 0; i < i4583.length; i += 2) {
  request.r(i4583[i + 0], i4583[i + 1], 2, i4582, '')
  }
  i4580.lstBtnInstall = i4582
  request.r(i4581[1], i4581[2], 0, i4580, 'EndCard')
  i4580.countPlay = i4581[3]
  i4580.countPlayFinal = i4581[4]
  i4580.timeDropFinal = i4581[5]
  i4580.colorBG = new pc.Color(i4581[6], i4581[7], i4581[8], i4581[9])
  request.r(i4581[10], i4581[11], 0, i4580, 'texture2D')
  request.r(i4581[12], i4581[13], 0, i4580, 'rawImageBG')
  request.r(i4581[14], i4581[15], 0, i4580, 'hand')
  return i4580
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i4586 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i4587 = data
  request.r(i4587[0], i4587[1], 0, i4586, 'm_Texture')
  i4586.m_UVRect = UnityEngine.Rect.MinMaxRect(i4587[2], i4587[3], i4587[4], i4587[5])
  request.r(i4587[6], i4587[7], 0, i4586, 'm_Material')
  i4586.m_Maskable = !!i4587[8]
  i4586.m_Color = new pc.Color(i4587[9], i4587[10], i4587[11], i4587[12])
  i4586.m_RaycastTarget = !!i4587[13]
  i4586.m_RaycastPadding = new pc.Vec4( i4587[14], i4587[15], i4587[16], i4587[17] )
  return i4586
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4588 = root || request.c( 'UnityEngine.UI.Image' )
  var i4589 = data
  request.r(i4589[0], i4589[1], 0, i4588, 'm_Sprite')
  i4588.m_Type = i4589[2]
  i4588.m_PreserveAspect = !!i4589[3]
  i4588.m_FillCenter = !!i4589[4]
  i4588.m_FillMethod = i4589[5]
  i4588.m_FillAmount = i4589[6]
  i4588.m_FillClockwise = !!i4589[7]
  i4588.m_FillOrigin = i4589[8]
  i4588.m_UseSpriteMesh = !!i4589[9]
  i4588.m_PixelsPerUnitMultiplier = i4589[10]
  request.r(i4589[11], i4589[12], 0, i4588, 'm_Material')
  i4588.m_Maskable = !!i4589[13]
  i4588.m_Color = new pc.Color(i4589[14], i4589[15], i4589[16], i4589[17])
  i4588.m_RaycastTarget = !!i4589[18]
  i4588.m_RaycastPadding = new pc.Vec4( i4589[19], i4589[20], i4589[21], i4589[22] )
  return i4588
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4590 = root || request.c( 'UnityEngine.UI.Button' )
  var i4591 = data
  i4590.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4591[0], i4590.m_OnClick)
  i4590.m_Navigation = request.d('UnityEngine.UI.Navigation', i4591[1], i4590.m_Navigation)
  i4590.m_Transition = i4591[2]
  i4590.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4591[3], i4590.m_Colors)
  i4590.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4591[4], i4590.m_SpriteState)
  i4590.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4591[5], i4590.m_AnimationTriggers)
  i4590.m_Interactable = !!i4591[6]
  request.r(i4591[7], i4591[8], 0, i4590, 'm_TargetGraphic')
  return i4590
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4592 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4593 = data
  i4592.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4593[0], i4592.m_PersistentCalls)
  return i4592
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4594 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4595 = data
  var i4597 = i4595[0]
  var i4596 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4597.length; i += 1) {
    i4596.add(request.d('UnityEngine.Events.PersistentCall', i4597[i + 0]));
  }
  i4594.m_Calls = i4596
  return i4594
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4600 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4601 = data
  request.r(i4601[0], i4601[1], 0, i4600, 'm_Target')
  i4600.m_TargetAssemblyTypeName = i4601[2]
  i4600.m_MethodName = i4601[3]
  i4600.m_Mode = i4601[4]
  i4600.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4601[5], i4600.m_Arguments)
  i4600.m_CallState = i4601[6]
  return i4600
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4602 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4603 = data
  request.r(i4603[0], i4603[1], 0, i4602, 'm_ObjectArgument')
  i4602.m_ObjectArgumentAssemblyTypeName = i4603[2]
  i4602.m_IntArgument = i4603[3]
  i4602.m_FloatArgument = i4603[4]
  i4602.m_StringArgument = i4603[5]
  i4602.m_BoolArgument = !!i4603[6]
  return i4602
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4604 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4605 = data
  i4604.m_Mode = i4605[0]
  i4604.m_WrapAround = !!i4605[1]
  request.r(i4605[2], i4605[3], 0, i4604, 'm_SelectOnUp')
  request.r(i4605[4], i4605[5], 0, i4604, 'm_SelectOnDown')
  request.r(i4605[6], i4605[7], 0, i4604, 'm_SelectOnLeft')
  request.r(i4605[8], i4605[9], 0, i4604, 'm_SelectOnRight')
  return i4604
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4606 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4607 = data
  i4606.m_NormalColor = new pc.Color(i4607[0], i4607[1], i4607[2], i4607[3])
  i4606.m_HighlightedColor = new pc.Color(i4607[4], i4607[5], i4607[6], i4607[7])
  i4606.m_PressedColor = new pc.Color(i4607[8], i4607[9], i4607[10], i4607[11])
  i4606.m_SelectedColor = new pc.Color(i4607[12], i4607[13], i4607[14], i4607[15])
  i4606.m_DisabledColor = new pc.Color(i4607[16], i4607[17], i4607[18], i4607[19])
  i4606.m_ColorMultiplier = i4607[20]
  i4606.m_FadeDuration = i4607[21]
  return i4606
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4608 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4609 = data
  request.r(i4609[0], i4609[1], 0, i4608, 'm_HighlightedSprite')
  request.r(i4609[2], i4609[3], 0, i4608, 'm_PressedSprite')
  request.r(i4609[4], i4609[5], 0, i4608, 'm_SelectedSprite')
  request.r(i4609[6], i4609[7], 0, i4608, 'm_DisabledSprite')
  return i4608
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4610 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4611 = data
  i4610.m_NormalTrigger = i4611[0]
  i4610.m_HighlightedTrigger = i4611[1]
  i4610.m_PressedTrigger = i4611[2]
  i4610.m_SelectedTrigger = i4611[3]
  i4610.m_DisabledTrigger = i4611[4]
  return i4610
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i4612 = root || request.c( 'ClickItem' )
  var i4613 = data
  i4612.isDoor = !!i4613[0]
  var i4615 = i4613[1]
  var i4614 = []
  for(var i = 0; i < i4615.length; i += 2) {
  request.r(i4615[i + 0], i4615[i + 1], 2, i4614, '')
  }
  i4612.steps = i4614
  return i4612
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i4618 = root || request.c( 'DraggableItem' )
  var i4619 = data
  i4618.itemID = i4619[0]
  return i4618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i4620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i4621 = data
  i4620.m_Alpha = i4621[0]
  i4620.m_Interactable = !!i4621[1]
  i4620.m_BlocksRaycasts = !!i4621[2]
  i4620.m_IgnoreParentGroups = !!i4621[3]
  i4620.enabled = !!i4621[4]
  return i4620
}

Deserializers["DropZone"] = function (request, data, root) {
  var i4622 = root || request.c( 'DropZone' )
  var i4623 = data
  var i4625 = i4623[0]
  var i4624 = []
  for(var i = 0; i < i4625.length; i += 2) {
  request.r(i4625[i + 0], i4625[i + 1], 2, i4624, '')
  }
  i4622.dancingGOs = i4624
  var i4627 = i4623[1]
  var i4626 = []
  for(var i = 0; i < i4627.length; i += 2) {
  request.r(i4627[i + 0], i4627[i + 1], 2, i4626, '')
  }
  i4622.sitGOs = i4626
  var i4629 = i4623[2]
  var i4628 = []
  for(var i = 0; i < i4629.length; i += 2) {
  request.r(i4629[i + 0], i4629[i + 1], 2, i4628, '')
  }
  i4622.charmPrefabs = i4628
  request.r(i4623[3], i4623[4], 0, i4622, 'tranDancing')
  return i4622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i4630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i4631 = data
  i4630.usedByComposite = !!i4631[0]
  i4630.autoTiling = !!i4631[1]
  i4630.size = new pc.Vec2( i4631[2], i4631[3] )
  i4630.edgeRadius = i4631[4]
  i4630.enabled = !!i4631[5]
  i4630.isTrigger = !!i4631[6]
  i4630.usedByEffector = !!i4631[7]
  i4630.density = i4631[8]
  i4630.offset = new pc.Vec2( i4631[9], i4631[10] )
  request.r(i4631[11], i4631[12], 0, i4630, 'material')
  return i4630
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i4632 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i4633 = data
  i4632.m_Spacing = i4633[0]
  i4632.m_ChildForceExpandWidth = !!i4633[1]
  i4632.m_ChildForceExpandHeight = !!i4633[2]
  i4632.m_ChildControlWidth = !!i4633[3]
  i4632.m_ChildControlHeight = !!i4633[4]
  i4632.m_ChildScaleWidth = !!i4633[5]
  i4632.m_ChildScaleHeight = !!i4633[6]
  i4632.m_ReverseArrangement = !!i4633[7]
  i4632.m_Padding = UnityEngine.RectOffset.FromPaddings(i4633[8], i4633[9], i4633[10], i4633[11])
  i4632.m_ChildAlignment = i4633[12]
  return i4632
}

Deserializers["MoveLeftRight"] = function (request, data, root) {
  var i4634 = root || request.c( 'MoveLeftRight' )
  var i4635 = data
  i4634.moveDistance = i4635[0]
  i4634.moveDuration = i4635[1]
  i4634.delay = i4635[2]
  i4634.easeType = i4635[3]
  return i4634
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i4636 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i4637 = data
  i4636.m_Spacing = i4637[0]
  i4636.m_ChildForceExpandWidth = !!i4637[1]
  i4636.m_ChildForceExpandHeight = !!i4637[2]
  i4636.m_ChildControlWidth = !!i4637[3]
  i4636.m_ChildControlHeight = !!i4637[4]
  i4636.m_ChildScaleWidth = !!i4637[5]
  i4636.m_ChildScaleHeight = !!i4637[6]
  i4636.m_ReverseArrangement = !!i4637[7]
  i4636.m_Padding = UnityEngine.RectOffset.FromPaddings(i4637[8], i4637[9], i4637[10], i4637[11])
  i4636.m_ChildAlignment = i4637[12]
  return i4636
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4638 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4639 = data
  i4638.m_hasFontAssetChanged = !!i4639[0]
  request.r(i4639[1], i4639[2], 0, i4638, 'm_baseMaterial')
  i4638.m_maskOffset = new pc.Vec4( i4639[3], i4639[4], i4639[5], i4639[6] )
  i4638.m_text = i4639[7]
  i4638.m_isRightToLeft = !!i4639[8]
  request.r(i4639[9], i4639[10], 0, i4638, 'm_fontAsset')
  request.r(i4639[11], i4639[12], 0, i4638, 'm_sharedMaterial')
  var i4641 = i4639[13]
  var i4640 = []
  for(var i = 0; i < i4641.length; i += 2) {
  request.r(i4641[i + 0], i4641[i + 1], 2, i4640, '')
  }
  i4638.m_fontSharedMaterials = i4640
  request.r(i4639[14], i4639[15], 0, i4638, 'm_fontMaterial')
  var i4643 = i4639[16]
  var i4642 = []
  for(var i = 0; i < i4643.length; i += 2) {
  request.r(i4643[i + 0], i4643[i + 1], 2, i4642, '')
  }
  i4638.m_fontMaterials = i4642
  i4638.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4639[17], i4639[18], i4639[19], i4639[20])
  i4638.m_fontColor = new pc.Color(i4639[21], i4639[22], i4639[23], i4639[24])
  i4638.m_enableVertexGradient = !!i4639[25]
  i4638.m_colorMode = i4639[26]
  i4638.m_fontColorGradient = request.d('TMPro.VertexGradient', i4639[27], i4638.m_fontColorGradient)
  request.r(i4639[28], i4639[29], 0, i4638, 'm_fontColorGradientPreset')
  request.r(i4639[30], i4639[31], 0, i4638, 'm_spriteAsset')
  i4638.m_tintAllSprites = !!i4639[32]
  request.r(i4639[33], i4639[34], 0, i4638, 'm_StyleSheet')
  i4638.m_TextStyleHashCode = i4639[35]
  i4638.m_overrideHtmlColors = !!i4639[36]
  i4638.m_faceColor = UnityEngine.Color32.ConstructColor(i4639[37], i4639[38], i4639[39], i4639[40])
  i4638.m_fontSize = i4639[41]
  i4638.m_fontSizeBase = i4639[42]
  i4638.m_fontWeight = i4639[43]
  i4638.m_enableAutoSizing = !!i4639[44]
  i4638.m_fontSizeMin = i4639[45]
  i4638.m_fontSizeMax = i4639[46]
  i4638.m_fontStyle = i4639[47]
  i4638.m_HorizontalAlignment = i4639[48]
  i4638.m_VerticalAlignment = i4639[49]
  i4638.m_textAlignment = i4639[50]
  i4638.m_characterSpacing = i4639[51]
  i4638.m_wordSpacing = i4639[52]
  i4638.m_lineSpacing = i4639[53]
  i4638.m_lineSpacingMax = i4639[54]
  i4638.m_paragraphSpacing = i4639[55]
  i4638.m_charWidthMaxAdj = i4639[56]
  i4638.m_enableWordWrapping = !!i4639[57]
  i4638.m_wordWrappingRatios = i4639[58]
  i4638.m_overflowMode = i4639[59]
  request.r(i4639[60], i4639[61], 0, i4638, 'm_linkedTextComponent')
  request.r(i4639[62], i4639[63], 0, i4638, 'parentLinkedComponent')
  i4638.m_enableKerning = !!i4639[64]
  i4638.m_enableExtraPadding = !!i4639[65]
  i4638.checkPaddingRequired = !!i4639[66]
  i4638.m_isRichText = !!i4639[67]
  i4638.m_parseCtrlCharacters = !!i4639[68]
  i4638.m_isOrthographic = !!i4639[69]
  i4638.m_isCullingEnabled = !!i4639[70]
  i4638.m_horizontalMapping = i4639[71]
  i4638.m_verticalMapping = i4639[72]
  i4638.m_uvLineOffset = i4639[73]
  i4638.m_geometrySortingOrder = i4639[74]
  i4638.m_IsTextObjectScaleStatic = !!i4639[75]
  i4638.m_VertexBufferAutoSizeReduction = !!i4639[76]
  i4638.m_useMaxVisibleDescender = !!i4639[77]
  i4638.m_pageToDisplay = i4639[78]
  i4638.m_margin = new pc.Vec4( i4639[79], i4639[80], i4639[81], i4639[82] )
  i4638.m_isUsingLegacyAnimationComponent = !!i4639[83]
  i4638.m_isVolumetricText = !!i4639[84]
  request.r(i4639[85], i4639[86], 0, i4638, 'm_Material')
  i4638.m_Maskable = !!i4639[87]
  i4638.m_Color = new pc.Color(i4639[88], i4639[89], i4639[90], i4639[91])
  i4638.m_RaycastTarget = !!i4639[92]
  i4638.m_RaycastPadding = new pc.Vec4( i4639[93], i4639[94], i4639[95], i4639[96] )
  return i4638
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4646 = root || request.c( 'TMPro.VertexGradient' )
  var i4647 = data
  i4646.topLeft = new pc.Color(i4647[0], i4647[1], i4647[2], i4647[3])
  i4646.topRight = new pc.Color(i4647[4], i4647[5], i4647[6], i4647[7])
  i4646.bottomLeft = new pc.Color(i4647[8], i4647[9], i4647[10], i4647[11])
  i4646.bottomRight = new pc.Color(i4647[12], i4647[13], i4647[14], i4647[15])
  return i4646
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i4648 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i4649 = data
  i4648.targetIsSelf = !!i4649[0]
  request.r(i4649[1], i4649[2], 0, i4648, 'targetGO')
  i4648.tweenTargetIsTargetGO = !!i4649[3]
  i4648.delay = i4649[4]
  i4648.duration = i4649[5]
  i4648.easeType = i4649[6]
  i4648.easeCurve = new pc.AnimationCurve( { keys_flow: i4649[7] } )
  i4648.loopType = i4649[8]
  i4648.loops = i4649[9]
  i4648.id = i4649[10]
  i4648.isRelative = !!i4649[11]
  i4648.isFrom = !!i4649[12]
  i4648.isIndependentUpdate = !!i4649[13]
  i4648.autoKill = !!i4649[14]
  i4648.autoGenerate = !!i4649[15]
  i4648.isActive = !!i4649[16]
  i4648.isValid = !!i4649[17]
  request.r(i4649[18], i4649[19], 0, i4648, 'target')
  i4648.animationType = i4649[20]
  i4648.targetType = i4649[21]
  i4648.forcedTargetType = i4649[22]
  i4648.autoPlay = !!i4649[23]
  i4648.useTargetAsV3 = !!i4649[24]
  i4648.endValueFloat = i4649[25]
  i4648.endValueV3 = new pc.Vec3( i4649[26], i4649[27], i4649[28] )
  i4648.endValueV2 = new pc.Vec2( i4649[29], i4649[30] )
  i4648.endValueColor = new pc.Color(i4649[31], i4649[32], i4649[33], i4649[34])
  i4648.endValueString = i4649[35]
  i4648.endValueRect = UnityEngine.Rect.MinMaxRect(i4649[36], i4649[37], i4649[38], i4649[39])
  request.r(i4649[40], i4649[41], 0, i4648, 'endValueTransform')
  i4648.optionalBool0 = !!i4649[42]
  i4648.optionalBool1 = !!i4649[43]
  i4648.optionalFloat0 = i4649[44]
  i4648.optionalInt0 = i4649[45]
  i4648.optionalRotationMode = i4649[46]
  i4648.optionalScrambleMode = i4649[47]
  i4648.optionalShakeRandomnessMode = i4649[48]
  i4648.optionalString = i4649[49]
  i4648.updateType = i4649[50]
  i4648.isSpeedBased = !!i4649[51]
  i4648.hasOnStart = !!i4649[52]
  i4648.hasOnPlay = !!i4649[53]
  i4648.hasOnUpdate = !!i4649[54]
  i4648.hasOnStepComplete = !!i4649[55]
  i4648.hasOnComplete = !!i4649[56]
  i4648.hasOnTweenCreated = !!i4649[57]
  i4648.hasOnRewind = !!i4649[58]
  i4648.onStart = request.d('UnityEngine.Events.UnityEvent', i4649[59], i4648.onStart)
  i4648.onPlay = request.d('UnityEngine.Events.UnityEvent', i4649[60], i4648.onPlay)
  i4648.onUpdate = request.d('UnityEngine.Events.UnityEvent', i4649[61], i4648.onUpdate)
  i4648.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i4649[62], i4648.onStepComplete)
  i4648.onComplete = request.d('UnityEngine.Events.UnityEvent', i4649[63], i4648.onComplete)
  i4648.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i4649[64], i4648.onTweenCreated)
  i4648.onRewind = request.d('UnityEngine.Events.UnityEvent', i4649[65], i4648.onRewind)
  return i4648
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i4650 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i4651 = data
  i4650.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4651[0], i4650.m_PersistentCalls)
  return i4650
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i4652 = root || request.c( 'UnityEngine.UI.Mask' )
  var i4653 = data
  i4652.m_ShowMaskGraphic = !!i4653[0]
  return i4652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4655 = data
  i4654.ambientIntensity = i4655[0]
  i4654.reflectionIntensity = i4655[1]
  i4654.ambientMode = i4655[2]
  i4654.ambientLight = new pc.Color(i4655[3], i4655[4], i4655[5], i4655[6])
  i4654.ambientSkyColor = new pc.Color(i4655[7], i4655[8], i4655[9], i4655[10])
  i4654.ambientGroundColor = new pc.Color(i4655[11], i4655[12], i4655[13], i4655[14])
  i4654.ambientEquatorColor = new pc.Color(i4655[15], i4655[16], i4655[17], i4655[18])
  i4654.fogColor = new pc.Color(i4655[19], i4655[20], i4655[21], i4655[22])
  i4654.fogEndDistance = i4655[23]
  i4654.fogStartDistance = i4655[24]
  i4654.fogDensity = i4655[25]
  i4654.fog = !!i4655[26]
  request.r(i4655[27], i4655[28], 0, i4654, 'skybox')
  i4654.fogMode = i4655[29]
  var i4657 = i4655[30]
  var i4656 = []
  for(var i = 0; i < i4657.length; i += 1) {
    i4656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4657[i + 0]) );
  }
  i4654.lightmaps = i4656
  i4654.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4655[31], i4654.lightProbes)
  i4654.lightmapsMode = i4655[32]
  i4654.mixedBakeMode = i4655[33]
  i4654.environmentLightingMode = i4655[34]
  i4654.ambientProbe = new pc.SphericalHarmonicsL2(i4655[35])
  i4654.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4655[36])
  i4654.useReferenceAmbientProbe = !!i4655[37]
  request.r(i4655[38], i4655[39], 0, i4654, 'customReflection')
  request.r(i4655[40], i4655[41], 0, i4654, 'defaultReflection')
  i4654.defaultReflectionMode = i4655[42]
  i4654.defaultReflectionResolution = i4655[43]
  i4654.sunLightObjectId = i4655[44]
  i4654.pixelLightCount = i4655[45]
  i4654.defaultReflectionHDR = !!i4655[46]
  i4654.hasLightDataAsset = !!i4655[47]
  i4654.hasManualGenerate = !!i4655[48]
  return i4654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4661 = data
  request.r(i4661[0], i4661[1], 0, i4660, 'lightmapColor')
  request.r(i4661[2], i4661[3], 0, i4660, 'lightmapDirection')
  return i4660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4662 = root || new UnityEngine.LightProbes()
  var i4663 = data
  return i4662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4671 = data
  var i4673 = i4671[0]
  var i4672 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4673.length; i += 1) {
    i4672.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4673[i + 0]));
  }
  i4670.ShaderCompilationErrors = i4672
  i4670.name = i4671[1]
  i4670.guid = i4671[2]
  var i4675 = i4671[3]
  var i4674 = []
  for(var i = 0; i < i4675.length; i += 1) {
    i4674.push( i4675[i + 0] );
  }
  i4670.shaderDefinedKeywords = i4674
  var i4677 = i4671[4]
  var i4676 = []
  for(var i = 0; i < i4677.length; i += 1) {
    i4676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4677[i + 0]) );
  }
  i4670.passes = i4676
  var i4679 = i4671[5]
  var i4678 = []
  for(var i = 0; i < i4679.length; i += 1) {
    i4678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4679[i + 0]) );
  }
  i4670.usePasses = i4678
  var i4681 = i4671[6]
  var i4680 = []
  for(var i = 0; i < i4681.length; i += 1) {
    i4680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4681[i + 0]) );
  }
  i4670.defaultParameterValues = i4680
  request.r(i4671[7], i4671[8], 0, i4670, 'unityFallbackShader')
  i4670.readDepth = !!i4671[9]
  i4670.isCreatedByShaderGraph = !!i4671[10]
  i4670.usedBatchUniforms = i4671[11]
  return i4670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4685 = data
  i4684.shaderName = i4685[0]
  i4684.errorMessage = i4685[1]
  return i4684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4688 = root || new pc.UnityShaderPass()
  var i4689 = data
  i4688.id = i4689[0]
  i4688.subShaderIndex = i4689[1]
  i4688.name = i4689[2]
  i4688.passType = i4689[3]
  i4688.grabPassTextureName = i4689[4]
  i4688.usePass = !!i4689[5]
  i4688.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4689[6], i4688.zTest)
  i4688.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4689[7], i4688.zWrite)
  i4688.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4689[8], i4688.culling)
  i4688.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4689[9], i4688.blending)
  i4688.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4689[10], i4688.alphaBlending)
  i4688.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4689[11], i4688.colorWriteMask)
  i4688.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4689[12], i4688.offsetUnits)
  i4688.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4689[13], i4688.offsetFactor)
  i4688.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4689[14], i4688.stencilRef)
  i4688.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4689[15], i4688.stencilReadMask)
  i4688.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4689[16], i4688.stencilWriteMask)
  i4688.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4689[17], i4688.stencilOp)
  i4688.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4689[18], i4688.stencilOpFront)
  i4688.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4689[19], i4688.stencilOpBack)
  var i4691 = i4689[20]
  var i4690 = []
  for(var i = 0; i < i4691.length; i += 1) {
    i4690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4691[i + 0]) );
  }
  i4688.tags = i4690
  var i4693 = i4689[21]
  var i4692 = []
  for(var i = 0; i < i4693.length; i += 1) {
    i4692.push( i4693[i + 0] );
  }
  i4688.passDefinedKeywords = i4692
  var i4695 = i4689[22]
  var i4694 = []
  for(var i = 0; i < i4695.length; i += 1) {
    i4694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4695[i + 0]) );
  }
  i4688.passDefinedKeywordGroups = i4694
  var i4697 = i4689[23]
  var i4696 = []
  for(var i = 0; i < i4697.length; i += 1) {
    i4696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4697[i + 0]) );
  }
  i4688.variants = i4696
  var i4699 = i4689[24]
  var i4698 = []
  for(var i = 0; i < i4699.length; i += 1) {
    i4698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4699[i + 0]) );
  }
  i4688.excludedVariants = i4698
  i4688.hasDepthReader = !!i4689[25]
  return i4688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4701 = data
  i4700.val = i4701[0]
  i4700.name = i4701[1]
  return i4700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4703 = data
  i4702.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4703[0], i4702.src)
  i4702.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4703[1], i4702.dst)
  i4702.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4703[2], i4702.op)
  return i4702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4705 = data
  i4704.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4705[0], i4704.pass)
  i4704.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4705[1], i4704.fail)
  i4704.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4705[2], i4704.zFail)
  i4704.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4705[3], i4704.comp)
  return i4704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4709 = data
  i4708.name = i4709[0]
  i4708.value = i4709[1]
  return i4708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4713 = data
  var i4715 = i4713[0]
  var i4714 = []
  for(var i = 0; i < i4715.length; i += 1) {
    i4714.push( i4715[i + 0] );
  }
  i4712.keywords = i4714
  i4712.hasDiscard = !!i4713[1]
  return i4712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4719 = data
  i4718.passId = i4719[0]
  i4718.subShaderIndex = i4719[1]
  var i4721 = i4719[2]
  var i4720 = []
  for(var i = 0; i < i4721.length; i += 1) {
    i4720.push( i4721[i + 0] );
  }
  i4718.keywords = i4720
  i4718.vertexProgram = i4719[3]
  i4718.fragmentProgram = i4719[4]
  i4718.compiledForWebGL2 = !!i4719[5]
  i4718.readDepth = !!i4719[6]
  return i4718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4725 = data
  request.r(i4725[0], i4725[1], 0, i4724, 'shader')
  i4724.pass = i4725[2]
  return i4724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4729 = data
  i4728.name = i4729[0]
  i4728.type = i4729[1]
  i4728.value = new pc.Vec4( i4729[2], i4729[3], i4729[4], i4729[5] )
  i4728.textureValue = i4729[6]
  i4728.shaderPropertyFlag = i4729[7]
  return i4728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4731 = data
  i4730.name = i4731[0]
  request.r(i4731[1], i4731[2], 0, i4730, 'texture')
  i4730.aabb = i4731[3]
  i4730.vertices = i4731[4]
  i4730.triangles = i4731[5]
  i4730.textureRect = UnityEngine.Rect.MinMaxRect(i4731[6], i4731[7], i4731[8], i4731[9])
  i4730.packedRect = UnityEngine.Rect.MinMaxRect(i4731[10], i4731[11], i4731[12], i4731[13])
  i4730.border = new pc.Vec4( i4731[14], i4731[15], i4731[16], i4731[17] )
  i4730.transparency = i4731[18]
  i4730.bounds = i4731[19]
  i4730.pixelsPerUnit = i4731[20]
  i4730.textureWidth = i4731[21]
  i4730.textureHeight = i4731[22]
  i4730.nativeSize = new pc.Vec2( i4731[23], i4731[24] )
  i4730.pivot = new pc.Vec2( i4731[25], i4731[26] )
  i4730.textureRectOffset = new pc.Vec2( i4731[27], i4731[28] )
  return i4730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4733 = data
  i4732.name = i4733[0]
  return i4732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4735 = data
  i4734.name = i4735[0]
  i4734.ascent = i4735[1]
  i4734.originalLineHeight = i4735[2]
  i4734.fontSize = i4735[3]
  var i4737 = i4735[4]
  var i4736 = []
  for(var i = 0; i < i4737.length; i += 1) {
    i4736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4737[i + 0]) );
  }
  i4734.characterInfo = i4736
  request.r(i4735[5], i4735[6], 0, i4734, 'texture')
  i4734.originalFontSize = i4735[7]
  return i4734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4741 = data
  i4740.index = i4741[0]
  i4740.advance = i4741[1]
  i4740.bearing = i4741[2]
  i4740.glyphWidth = i4741[3]
  i4740.glyphHeight = i4741[4]
  i4740.minX = i4741[5]
  i4740.maxX = i4741[6]
  i4740.minY = i4741[7]
  i4740.maxY = i4741[8]
  i4740.uvBottomLeftX = i4741[9]
  i4740.uvBottomLeftY = i4741[10]
  i4740.uvBottomRightX = i4741[11]
  i4740.uvBottomRightY = i4741[12]
  i4740.uvTopLeftX = i4741[13]
  i4740.uvTopLeftY = i4741[14]
  i4740.uvTopRightX = i4741[15]
  i4740.uvTopRightY = i4741[16]
  return i4740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4743 = data
  i4742.name = i4743[0]
  i4742.bytes64 = i4743[1]
  i4742.data = i4743[2]
  return i4742
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i4744 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i4745 = data
  var i4747 = i4745[0]
  var i4746 = []
  for(var i = 0; i < i4747.length; i += 2) {
  request.r(i4747[i + 0], i4747[i + 1], 2, i4746, '')
  }
  i4744.atlasAssets = i4746
  i4744.scale = i4745[1]
  request.r(i4745[2], i4745[3], 0, i4744, 'skeletonJSON')
  i4744.isUpgradingBlendModeMaterials = !!i4745[4]
  i4744.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i4745[5], i4744.blendModeMaterials)
  var i4749 = i4745[6]
  var i4748 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i4749.length; i += 2) {
  request.r(i4749[i + 0], i4749[i + 1], 1, i4748, '')
  }
  i4744.skeletonDataModifiers = i4748
  var i4751 = i4745[7]
  var i4750 = []
  for(var i = 0; i < i4751.length; i += 1) {
    i4750.push( i4751[i + 0] );
  }
  i4744.fromAnimation = i4750
  var i4753 = i4745[8]
  var i4752 = []
  for(var i = 0; i < i4753.length; i += 1) {
    i4752.push( i4753[i + 0] );
  }
  i4744.toAnimation = i4752
  i4744.duration = i4745[9]
  i4744.defaultMix = i4745[10]
  request.r(i4745[11], i4745[12], 0, i4744, 'controller')
  return i4744
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i4756 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i4757 = data
  i4756.applyAdditiveMaterial = !!i4757[0]
  var i4759 = i4757[1]
  var i4758 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4759.length; i += 1) {
    i4758.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4759[i + 0]));
  }
  i4756.additiveMaterials = i4758
  var i4761 = i4757[2]
  var i4760 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4761.length; i += 1) {
    i4760.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4761[i + 0]));
  }
  i4756.multiplyMaterials = i4760
  var i4763 = i4757[3]
  var i4762 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4763.length; i += 1) {
    i4762.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4763[i + 0]));
  }
  i4756.screenMaterials = i4762
  i4756.requiresBlendModeMaterials = !!i4757[4]
  return i4756
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i4766 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i4767 = data
  i4766.pageName = i4767[0]
  request.r(i4767[1], i4767[2], 0, i4766, 'material')
  return i4766
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i4770 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i4771 = data
  request.r(i4771[0], i4771[1], 0, i4770, 'atlasFile')
  var i4773 = i4771[2]
  var i4772 = []
  for(var i = 0; i < i4773.length; i += 2) {
  request.r(i4773[i + 0], i4773[i + 1], 2, i4772, '')
  }
  i4770.materials = i4772
  i4770.textureLoadingMode = i4771[3]
  request.r(i4771[4], i4771[5], 0, i4770, 'onDemandTextureLoader')
  return i4770
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4774 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4775 = data
  i4774.hashCode = i4775[0]
  request.r(i4775[1], i4775[2], 0, i4774, 'material')
  i4774.materialHashCode = i4775[3]
  request.r(i4775[4], i4775[5], 0, i4774, 'atlas')
  i4774.normalStyle = i4775[6]
  i4774.normalSpacingOffset = i4775[7]
  i4774.boldStyle = i4775[8]
  i4774.boldSpacing = i4775[9]
  i4774.italicStyle = i4775[10]
  i4774.tabSize = i4775[11]
  i4774.m_Version = i4775[12]
  i4774.m_SourceFontFileGUID = i4775[13]
  request.r(i4775[14], i4775[15], 0, i4774, 'm_SourceFontFile_EditorRef')
  request.r(i4775[16], i4775[17], 0, i4774, 'm_SourceFontFile')
  i4774.m_AtlasPopulationMode = i4775[18]
  i4774.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4775[19], i4774.m_FaceInfo)
  var i4777 = i4775[20]
  var i4776 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4777.length; i += 1) {
    i4776.add(request.d('UnityEngine.TextCore.Glyph', i4777[i + 0]));
  }
  i4774.m_GlyphTable = i4776
  var i4779 = i4775[21]
  var i4778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4779.length; i += 1) {
    i4778.add(request.d('TMPro.TMP_Character', i4779[i + 0]));
  }
  i4774.m_CharacterTable = i4778
  var i4781 = i4775[22]
  var i4780 = []
  for(var i = 0; i < i4781.length; i += 2) {
  request.r(i4781[i + 0], i4781[i + 1], 2, i4780, '')
  }
  i4774.m_AtlasTextures = i4780
  i4774.m_AtlasTextureIndex = i4775[23]
  i4774.m_IsMultiAtlasTexturesEnabled = !!i4775[24]
  i4774.m_ClearDynamicDataOnBuild = !!i4775[25]
  var i4783 = i4775[26]
  var i4782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4783.length; i += 1) {
    i4782.add(request.d('UnityEngine.TextCore.GlyphRect', i4783[i + 0]));
  }
  i4774.m_UsedGlyphRects = i4782
  var i4785 = i4775[27]
  var i4784 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4785.length; i += 1) {
    i4784.add(request.d('UnityEngine.TextCore.GlyphRect', i4785[i + 0]));
  }
  i4774.m_FreeGlyphRects = i4784
  i4774.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4775[28], i4774.m_fontInfo)
  i4774.m_AtlasWidth = i4775[29]
  i4774.m_AtlasHeight = i4775[30]
  i4774.m_AtlasPadding = i4775[31]
  i4774.m_AtlasRenderMode = i4775[32]
  var i4787 = i4775[33]
  var i4786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4787.length; i += 1) {
    i4786.add(request.d('TMPro.TMP_Glyph', i4787[i + 0]));
  }
  i4774.m_glyphInfoList = i4786
  i4774.m_KerningTable = request.d('TMPro.KerningTable', i4775[34], i4774.m_KerningTable)
  i4774.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4775[35], i4774.m_FontFeatureTable)
  var i4789 = i4775[36]
  var i4788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4789.length; i += 2) {
  request.r(i4789[i + 0], i4789[i + 1], 1, i4788, '')
  }
  i4774.fallbackFontAssets = i4788
  var i4791 = i4775[37]
  var i4790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4791.length; i += 2) {
  request.r(i4791[i + 0], i4791[i + 1], 1, i4790, '')
  }
  i4774.m_FallbackFontAssetTable = i4790
  i4774.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4775[38], i4774.m_CreationSettings)
  var i4793 = i4775[39]
  var i4792 = []
  for(var i = 0; i < i4793.length; i += 1) {
    i4792.push( request.d('TMPro.TMP_FontWeightPair', i4793[i + 0]) );
  }
  i4774.m_FontWeightTable = i4792
  var i4795 = i4775[40]
  var i4794 = []
  for(var i = 0; i < i4795.length; i += 1) {
    i4794.push( request.d('TMPro.TMP_FontWeightPair', i4795[i + 0]) );
  }
  i4774.fontWeights = i4794
  return i4774
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4796 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4797 = data
  i4796.m_FaceIndex = i4797[0]
  i4796.m_FamilyName = i4797[1]
  i4796.m_StyleName = i4797[2]
  i4796.m_PointSize = i4797[3]
  i4796.m_Scale = i4797[4]
  i4796.m_UnitsPerEM = i4797[5]
  i4796.m_LineHeight = i4797[6]
  i4796.m_AscentLine = i4797[7]
  i4796.m_CapLine = i4797[8]
  i4796.m_MeanLine = i4797[9]
  i4796.m_Baseline = i4797[10]
  i4796.m_DescentLine = i4797[11]
  i4796.m_SuperscriptOffset = i4797[12]
  i4796.m_SuperscriptSize = i4797[13]
  i4796.m_SubscriptOffset = i4797[14]
  i4796.m_SubscriptSize = i4797[15]
  i4796.m_UnderlineOffset = i4797[16]
  i4796.m_UnderlineThickness = i4797[17]
  i4796.m_StrikethroughOffset = i4797[18]
  i4796.m_StrikethroughThickness = i4797[19]
  i4796.m_TabWidth = i4797[20]
  return i4796
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4800 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4801 = data
  i4800.m_Index = i4801[0]
  i4800.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4801[1], i4800.m_Metrics)
  i4800.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4801[2], i4800.m_GlyphRect)
  i4800.m_Scale = i4801[3]
  i4800.m_AtlasIndex = i4801[4]
  i4800.m_ClassDefinitionType = i4801[5]
  return i4800
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4802 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4803 = data
  i4802.m_Width = i4803[0]
  i4802.m_Height = i4803[1]
  i4802.m_HorizontalBearingX = i4803[2]
  i4802.m_HorizontalBearingY = i4803[3]
  i4802.m_HorizontalAdvance = i4803[4]
  return i4802
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4804 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4805 = data
  i4804.m_X = i4805[0]
  i4804.m_Y = i4805[1]
  i4804.m_Width = i4805[2]
  i4804.m_Height = i4805[3]
  return i4804
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4808 = root || request.c( 'TMPro.TMP_Character' )
  var i4809 = data
  i4808.m_ElementType = i4809[0]
  i4808.m_Unicode = i4809[1]
  i4808.m_GlyphIndex = i4809[2]
  i4808.m_Scale = i4809[3]
  return i4808
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4814 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4815 = data
  i4814.Name = i4815[0]
  i4814.PointSize = i4815[1]
  i4814.Scale = i4815[2]
  i4814.CharacterCount = i4815[3]
  i4814.LineHeight = i4815[4]
  i4814.Baseline = i4815[5]
  i4814.Ascender = i4815[6]
  i4814.CapHeight = i4815[7]
  i4814.Descender = i4815[8]
  i4814.CenterLine = i4815[9]
  i4814.SuperscriptOffset = i4815[10]
  i4814.SubscriptOffset = i4815[11]
  i4814.SubSize = i4815[12]
  i4814.Underline = i4815[13]
  i4814.UnderlineThickness = i4815[14]
  i4814.strikethrough = i4815[15]
  i4814.strikethroughThickness = i4815[16]
  i4814.TabWidth = i4815[17]
  i4814.Padding = i4815[18]
  i4814.AtlasWidth = i4815[19]
  i4814.AtlasHeight = i4815[20]
  return i4814
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4818 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4819 = data
  i4818.id = i4819[0]
  i4818.x = i4819[1]
  i4818.y = i4819[2]
  i4818.width = i4819[3]
  i4818.height = i4819[4]
  i4818.xOffset = i4819[5]
  i4818.yOffset = i4819[6]
  i4818.xAdvance = i4819[7]
  i4818.scale = i4819[8]
  return i4818
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4820 = root || request.c( 'TMPro.KerningTable' )
  var i4821 = data
  var i4823 = i4821[0]
  var i4822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4823.length; i += 1) {
    i4822.add(request.d('TMPro.KerningPair', i4823[i + 0]));
  }
  i4820.kerningPairs = i4822
  return i4820
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4826 = root || request.c( 'TMPro.KerningPair' )
  var i4827 = data
  i4826.xOffset = i4827[0]
  i4826.m_FirstGlyph = i4827[1]
  i4826.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4827[2], i4826.m_FirstGlyphAdjustments)
  i4826.m_SecondGlyph = i4827[3]
  i4826.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4827[4], i4826.m_SecondGlyphAdjustments)
  i4826.m_IgnoreSpacingAdjustments = !!i4827[5]
  return i4826
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4828 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4829 = data
  var i4831 = i4829[0]
  var i4830 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4831.length; i += 1) {
    i4830.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i4831[i + 0]));
  }
  i4828.m_GlyphPairAdjustmentRecords = i4830
  return i4828
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4834 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i4835 = data
  i4834.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4835[0], i4834.m_FirstAdjustmentRecord)
  i4834.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4835[1], i4834.m_SecondAdjustmentRecord)
  i4834.m_FeatureLookupFlags = i4835[2]
  return i4834
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4838 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4839 = data
  i4838.sourceFontFileName = i4839[0]
  i4838.sourceFontFileGUID = i4839[1]
  i4838.pointSizeSamplingMode = i4839[2]
  i4838.pointSize = i4839[3]
  i4838.padding = i4839[4]
  i4838.packingMode = i4839[5]
  i4838.atlasWidth = i4839[6]
  i4838.atlasHeight = i4839[7]
  i4838.characterSetSelectionMode = i4839[8]
  i4838.characterSequence = i4839[9]
  i4838.referencedFontAssetGUID = i4839[10]
  i4838.referencedTextAssetGUID = i4839[11]
  i4838.fontStyle = i4839[12]
  i4838.fontStyleModifier = i4839[13]
  i4838.renderMode = i4839[14]
  i4838.includeFontFeatures = !!i4839[15]
  return i4838
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4842 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4843 = data
  request.r(i4843[0], i4843[1], 0, i4842, 'regularTypeface')
  request.r(i4843[2], i4843[3], 0, i4842, 'italicTypeface')
  return i4842
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4844 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4845 = data
  i4844.useSafeMode = !!i4845[0]
  i4844.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4845[1], i4844.safeModeOptions)
  i4844.timeScale = i4845[2]
  i4844.unscaledTimeScale = i4845[3]
  i4844.useSmoothDeltaTime = !!i4845[4]
  i4844.maxSmoothUnscaledTime = i4845[5]
  i4844.rewindCallbackMode = i4845[6]
  i4844.showUnityEditorReport = !!i4845[7]
  i4844.logBehaviour = i4845[8]
  i4844.drawGizmos = !!i4845[9]
  i4844.defaultRecyclable = !!i4845[10]
  i4844.defaultAutoPlay = i4845[11]
  i4844.defaultUpdateType = i4845[12]
  i4844.defaultTimeScaleIndependent = !!i4845[13]
  i4844.defaultEaseType = i4845[14]
  i4844.defaultEaseOvershootOrAmplitude = i4845[15]
  i4844.defaultEasePeriod = i4845[16]
  i4844.defaultAutoKill = !!i4845[17]
  i4844.defaultLoopType = i4845[18]
  i4844.debugMode = !!i4845[19]
  i4844.debugStoreTargetId = !!i4845[20]
  i4844.showPreviewPanel = !!i4845[21]
  i4844.storeSettingsLocation = i4845[22]
  i4844.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4845[23], i4844.modules)
  i4844.createASMDEF = !!i4845[24]
  i4844.showPlayingTweens = !!i4845[25]
  i4844.showPausedTweens = !!i4845[26]
  return i4844
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4846 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4847 = data
  i4846.logBehaviour = i4847[0]
  i4846.nestedTweenFailureBehaviour = i4847[1]
  return i4846
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4848 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4849 = data
  i4848.showPanel = !!i4849[0]
  i4848.audioEnabled = !!i4849[1]
  i4848.physicsEnabled = !!i4849[2]
  i4848.physics2DEnabled = !!i4849[3]
  i4848.spriteEnabled = !!i4849[4]
  i4848.uiEnabled = !!i4849[5]
  i4848.textMeshProEnabled = !!i4849[6]
  i4848.tk2DEnabled = !!i4849[7]
  i4848.deAudioEnabled = !!i4849[8]
  i4848.deUnityExtendedEnabled = !!i4849[9]
  i4848.epoOutlineEnabled = !!i4849[10]
  return i4848
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4850 = root || request.c( 'TMPro.TMP_Settings' )
  var i4851 = data
  i4850.m_enableWordWrapping = !!i4851[0]
  i4850.m_enableKerning = !!i4851[1]
  i4850.m_enableExtraPadding = !!i4851[2]
  i4850.m_enableTintAllSprites = !!i4851[3]
  i4850.m_enableParseEscapeCharacters = !!i4851[4]
  i4850.m_EnableRaycastTarget = !!i4851[5]
  i4850.m_GetFontFeaturesAtRuntime = !!i4851[6]
  i4850.m_missingGlyphCharacter = i4851[7]
  i4850.m_warningsDisabled = !!i4851[8]
  request.r(i4851[9], i4851[10], 0, i4850, 'm_defaultFontAsset')
  i4850.m_defaultFontAssetPath = i4851[11]
  i4850.m_defaultFontSize = i4851[12]
  i4850.m_defaultAutoSizeMinRatio = i4851[13]
  i4850.m_defaultAutoSizeMaxRatio = i4851[14]
  i4850.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4851[15], i4851[16] )
  i4850.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4851[17], i4851[18] )
  i4850.m_autoSizeTextContainer = !!i4851[19]
  i4850.m_IsTextObjectScaleStatic = !!i4851[20]
  var i4853 = i4851[21]
  var i4852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4853.length; i += 2) {
  request.r(i4853[i + 0], i4853[i + 1], 1, i4852, '')
  }
  i4850.m_fallbackFontAssets = i4852
  i4850.m_matchMaterialPreset = !!i4851[22]
  request.r(i4851[23], i4851[24], 0, i4850, 'm_defaultSpriteAsset')
  i4850.m_defaultSpriteAssetPath = i4851[25]
  i4850.m_enableEmojiSupport = !!i4851[26]
  i4850.m_MissingCharacterSpriteUnicode = i4851[27]
  i4850.m_defaultColorGradientPresetsPath = i4851[28]
  request.r(i4851[29], i4851[30], 0, i4850, 'm_defaultStyleSheet')
  i4850.m_StyleSheetsResourcePath = i4851[31]
  request.r(i4851[32], i4851[33], 0, i4850, 'm_leadingCharacters')
  request.r(i4851[34], i4851[35], 0, i4850, 'm_followingCharacters')
  i4850.m_UseModernHangulLineBreakingRules = !!i4851[36]
  return i4850
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4854 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i4855 = data
  i4854.m_GlyphIndex = i4855[0]
  i4854.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i4855[1], i4854.m_GlyphValueRecord)
  return i4854
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i4856 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i4857 = data
  i4856.m_XPlacement = i4857[0]
  i4856.m_YPlacement = i4857[1]
  i4856.m_XAdvance = i4857[2]
  i4856.m_YAdvance = i4857[3]
  return i4856
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4858 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4859 = data
  i4858.hashCode = i4859[0]
  request.r(i4859[1], i4859[2], 0, i4858, 'material')
  i4858.materialHashCode = i4859[3]
  request.r(i4859[4], i4859[5], 0, i4858, 'spriteSheet')
  var i4861 = i4859[6]
  var i4860 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4861.length; i += 1) {
    i4860.add(request.d('TMPro.TMP_Sprite', i4861[i + 0]));
  }
  i4858.spriteInfoList = i4860
  var i4863 = i4859[7]
  var i4862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4863.length; i += 2) {
  request.r(i4863[i + 0], i4863[i + 1], 1, i4862, '')
  }
  i4858.fallbackSpriteAssets = i4862
  i4858.m_Version = i4859[8]
  i4858.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4859[9], i4858.m_FaceInfo)
  var i4865 = i4859[10]
  var i4864 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4865.length; i += 1) {
    i4864.add(request.d('TMPro.TMP_SpriteCharacter', i4865[i + 0]));
  }
  i4858.m_SpriteCharacterTable = i4864
  var i4867 = i4859[11]
  var i4866 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4867.length; i += 1) {
    i4866.add(request.d('TMPro.TMP_SpriteGlyph', i4867[i + 0]));
  }
  i4858.m_SpriteGlyphTable = i4866
  return i4858
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4870 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4871 = data
  i4870.name = i4871[0]
  i4870.hashCode = i4871[1]
  i4870.unicode = i4871[2]
  i4870.pivot = new pc.Vec2( i4871[3], i4871[4] )
  request.r(i4871[5], i4871[6], 0, i4870, 'sprite')
  i4870.id = i4871[7]
  i4870.x = i4871[8]
  i4870.y = i4871[9]
  i4870.width = i4871[10]
  i4870.height = i4871[11]
  i4870.xOffset = i4871[12]
  i4870.yOffset = i4871[13]
  i4870.xAdvance = i4871[14]
  i4870.scale = i4871[15]
  return i4870
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4876 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4877 = data
  i4876.m_Name = i4877[0]
  i4876.m_HashCode = i4877[1]
  i4876.m_ElementType = i4877[2]
  i4876.m_Unicode = i4877[3]
  i4876.m_GlyphIndex = i4877[4]
  i4876.m_Scale = i4877[5]
  return i4876
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4880 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4881 = data
  request.r(i4881[0], i4881[1], 0, i4880, 'sprite')
  i4880.m_Index = i4881[2]
  i4880.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4881[3], i4880.m_Metrics)
  i4880.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4881[4], i4880.m_GlyphRect)
  i4880.m_Scale = i4881[5]
  i4880.m_AtlasIndex = i4881[6]
  i4880.m_ClassDefinitionType = i4881[7]
  return i4880
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4882 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4883 = data
  var i4885 = i4883[0]
  var i4884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4885.length; i += 1) {
    i4884.add(request.d('TMPro.TMP_Style', i4885[i + 0]));
  }
  i4882.m_StyleList = i4884
  return i4882
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4888 = root || request.c( 'TMPro.TMP_Style' )
  var i4889 = data
  i4888.m_Name = i4889[0]
  i4888.m_HashCode = i4889[1]
  i4888.m_OpeningDefinition = i4889[2]
  i4888.m_ClosingDefinition = i4889[3]
  i4888.m_OpeningTagArray = i4889[4]
  i4888.m_ClosingTagArray = i4889[5]
  i4888.m_OpeningTagUnicodeArray = i4889[6]
  i4888.m_ClosingTagUnicodeArray = i4889[7]
  return i4888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4891 = data
  var i4893 = i4891[0]
  var i4892 = []
  for(var i = 0; i < i4893.length; i += 1) {
    i4892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4893[i + 0]) );
  }
  i4890.files = i4892
  i4890.componentToPrefabIds = i4891[1]
  return i4890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4897 = data
  i4896.path = i4897[0]
  request.r(i4897[1], i4897[2], 0, i4896, 'unityObject')
  return i4896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4899 = data
  var i4901 = i4899[0]
  var i4900 = []
  for(var i = 0; i < i4901.length; i += 1) {
    i4900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4901[i + 0]) );
  }
  i4898.scriptsExecutionOrder = i4900
  var i4903 = i4899[1]
  var i4902 = []
  for(var i = 0; i < i4903.length; i += 1) {
    i4902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4903[i + 0]) );
  }
  i4898.sortingLayers = i4902
  var i4905 = i4899[2]
  var i4904 = []
  for(var i = 0; i < i4905.length; i += 1) {
    i4904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4905[i + 0]) );
  }
  i4898.cullingLayers = i4904
  i4898.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4899[3], i4898.timeSettings)
  i4898.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4899[4], i4898.physicsSettings)
  i4898.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4899[5], i4898.physics2DSettings)
  i4898.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4899[6], i4898.qualitySettings)
  i4898.enableRealtimeShadows = !!i4899[7]
  i4898.enableAutoInstancing = !!i4899[8]
  i4898.enableDynamicBatching = !!i4899[9]
  i4898.lightmapEncodingQuality = i4899[10]
  i4898.desiredColorSpace = i4899[11]
  var i4907 = i4899[12]
  var i4906 = []
  for(var i = 0; i < i4907.length; i += 1) {
    i4906.push( i4907[i + 0] );
  }
  i4898.allTags = i4906
  return i4898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4911 = data
  i4910.name = i4911[0]
  i4910.value = i4911[1]
  return i4910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4915 = data
  i4914.id = i4915[0]
  i4914.name = i4915[1]
  i4914.value = i4915[2]
  return i4914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4919 = data
  i4918.id = i4919[0]
  i4918.name = i4919[1]
  return i4918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4921 = data
  i4920.fixedDeltaTime = i4921[0]
  i4920.maximumDeltaTime = i4921[1]
  i4920.timeScale = i4921[2]
  i4920.maximumParticleTimestep = i4921[3]
  return i4920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4923 = data
  i4922.gravity = new pc.Vec3( i4923[0], i4923[1], i4923[2] )
  i4922.defaultSolverIterations = i4923[3]
  i4922.bounceThreshold = i4923[4]
  i4922.autoSyncTransforms = !!i4923[5]
  i4922.autoSimulation = !!i4923[6]
  var i4925 = i4923[7]
  var i4924 = []
  for(var i = 0; i < i4925.length; i += 1) {
    i4924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4925[i + 0]) );
  }
  i4922.collisionMatrix = i4924
  return i4922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4929 = data
  i4928.enabled = !!i4929[0]
  i4928.layerId = i4929[1]
  i4928.otherLayerId = i4929[2]
  return i4928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4931 = data
  request.r(i4931[0], i4931[1], 0, i4930, 'material')
  i4930.gravity = new pc.Vec2( i4931[2], i4931[3] )
  i4930.positionIterations = i4931[4]
  i4930.velocityIterations = i4931[5]
  i4930.velocityThreshold = i4931[6]
  i4930.maxLinearCorrection = i4931[7]
  i4930.maxAngularCorrection = i4931[8]
  i4930.maxTranslationSpeed = i4931[9]
  i4930.maxRotationSpeed = i4931[10]
  i4930.baumgarteScale = i4931[11]
  i4930.baumgarteTOIScale = i4931[12]
  i4930.timeToSleep = i4931[13]
  i4930.linearSleepTolerance = i4931[14]
  i4930.angularSleepTolerance = i4931[15]
  i4930.defaultContactOffset = i4931[16]
  i4930.autoSimulation = !!i4931[17]
  i4930.queriesHitTriggers = !!i4931[18]
  i4930.queriesStartInColliders = !!i4931[19]
  i4930.callbacksOnDisable = !!i4931[20]
  i4930.reuseCollisionCallbacks = !!i4931[21]
  i4930.autoSyncTransforms = !!i4931[22]
  var i4933 = i4931[23]
  var i4932 = []
  for(var i = 0; i < i4933.length; i += 1) {
    i4932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4933[i + 0]) );
  }
  i4930.collisionMatrix = i4932
  return i4930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4937 = data
  i4936.enabled = !!i4937[0]
  i4936.layerId = i4937[1]
  i4936.otherLayerId = i4937[2]
  return i4936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4939 = data
  var i4941 = i4939[0]
  var i4940 = []
  for(var i = 0; i < i4941.length; i += 1) {
    i4940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4941[i + 0]) );
  }
  i4938.qualityLevels = i4940
  var i4943 = i4939[1]
  var i4942 = []
  for(var i = 0; i < i4943.length; i += 1) {
    i4942.push( i4943[i + 0] );
  }
  i4938.names = i4942
  i4938.shadows = i4939[2]
  i4938.anisotropicFiltering = i4939[3]
  i4938.antiAliasing = i4939[4]
  i4938.lodBias = i4939[5]
  i4938.shadowCascades = i4939[6]
  i4938.shadowDistance = i4939[7]
  i4938.shadowmaskMode = i4939[8]
  i4938.shadowProjection = i4939[9]
  i4938.shadowResolution = i4939[10]
  i4938.softParticles = !!i4939[11]
  i4938.softVegetation = !!i4939[12]
  i4938.activeColorSpace = i4939[13]
  i4938.desiredColorSpace = i4939[14]
  i4938.masterTextureLimit = i4939[15]
  i4938.maxQueuedFrames = i4939[16]
  i4938.particleRaycastBudget = i4939[17]
  i4938.pixelLightCount = i4939[18]
  i4938.realtimeReflectionProbes = !!i4939[19]
  i4938.shadowCascade2Split = i4939[20]
  i4938.shadowCascade4Split = new pc.Vec3( i4939[21], i4939[22], i4939[23] )
  i4938.streamingMipmapsActive = !!i4939[24]
  i4938.vSyncCount = i4939[25]
  i4938.asyncUploadBufferSize = i4939[26]
  i4938.asyncUploadTimeSlice = i4939[27]
  i4938.billboardsFaceCameraPosition = !!i4939[28]
  i4938.shadowNearPlaneOffset = i4939[29]
  i4938.streamingMipmapsMemoryBudget = i4939[30]
  i4938.maximumLODLevel = i4939[31]
  i4938.streamingMipmapsAddAllCameras = !!i4939[32]
  i4938.streamingMipmapsMaxLevelReduction = i4939[33]
  i4938.streamingMipmapsRenderersPerFrame = i4939[34]
  i4938.resolutionScalingFixedDPIFactor = i4939[35]
  i4938.streamingMipmapsMaxFileIORequests = i4939[36]
  i4938.currentQualityLevel = i4939[37]
  return i4938
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4946 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4947 = data
  i4946.xPlacement = i4947[0]
  i4946.yPlacement = i4947[1]
  i4946.xAdvance = i4947[2]
  i4946.yAdvance = i4947[3]
  return i4946
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

Deserializers.runtimeAnalysisExcludedClassesCount = "1774";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4234";

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

Deserializers.buildID = "674885b2-7cbe-4c42-a264-bacdbda42648";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

