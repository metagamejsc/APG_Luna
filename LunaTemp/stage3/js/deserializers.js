var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.JointSpring' )
  var i453 = data
  i452.spring = i453[0]
  i452.damper = i453[1]
  i452.targetPosition = i453[2]
  return i452
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointMotor' )
  var i455 = data
  i454.m_TargetVelocity = i455[0]
  i454.m_Force = i455[1]
  i454.m_FreeSpin = i455[2]
  return i454
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointLimits' )
  var i457 = data
  i456.m_Min = i457[0]
  i456.m_Max = i457[1]
  i456.m_Bounciness = i457[2]
  i456.m_BounceMinVelocity = i457[3]
  i456.m_ContactDistance = i457[4]
  i456.minBounce = i457[5]
  i456.maxBounce = i457[6]
  return i456
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointDrive' )
  var i459 = data
  i458.m_PositionSpring = i459[0]
  i458.m_PositionDamper = i459[1]
  i458.m_MaximumForce = i459[2]
  i458.m_UseAcceleration = i459[3]
  return i458
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i461 = data
  i460.m_Spring = i461[0]
  i460.m_Damper = i461[1]
  return i460
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i463 = data
  i462.m_Limit = i463[0]
  i462.m_Bounciness = i463[1]
  i462.m_ContactDistance = i463[2]
  return i462
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i465 = data
  i464.m_ExtremumSlip = i465[0]
  i464.m_ExtremumValue = i465[1]
  i464.m_AsymptoteSlip = i465[2]
  i464.m_AsymptoteValue = i465[3]
  i464.m_Stiffness = i465[4]
  return i464
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i467 = data
  i466.m_LowerAngle = i467[0]
  i466.m_UpperAngle = i467[1]
  return i466
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i469 = data
  i468.m_MotorSpeed = i469[0]
  i468.m_MaximumMotorTorque = i469[1]
  return i468
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i471 = data
  i470.m_DampingRatio = i471[0]
  i470.m_Frequency = i471[1]
  i470.m_Angle = i471[2]
  return i470
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i473 = data
  i472.m_LowerTranslation = i473[0]
  i472.m_UpperTranslation = i473[1]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i475 = data
  i474.name = i475[0]
  i474.width = i475[1]
  i474.height = i475[2]
  i474.mipmapCount = i475[3]
  i474.anisoLevel = i475[4]
  i474.filterMode = i475[5]
  i474.hdr = !!i475[6]
  i474.format = i475[7]
  i474.wrapMode = i475[8]
  i474.alphaIsTransparency = !!i475[9]
  i474.alphaSource = i475[10]
  i474.graphicsFormat = i475[11]
  i474.sRGBTexture = !!i475[12]
  i474.desiredColorSpace = i475[13]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i476 = root || new pc.UnityMaterial()
  var i477 = data
  i476.name = i477[0]
  request.r(i477[1], i477[2], 0, i476, 'shader')
  i476.renderQueue = i477[3]
  i476.enableInstancing = !!i477[4]
  var i479 = i477[5]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i479[i + 0]) );
  }
  i476.floatParameters = i478
  var i481 = i477[6]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i481[i + 0]) );
  }
  i476.colorParameters = i480
  var i483 = i477[7]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i483[i + 0]) );
  }
  i476.vectorParameters = i482
  var i485 = i477[8]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i485[i + 0]) );
  }
  i476.textureParameters = i484
  var i487 = i477[9]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i487[i + 0]) );
  }
  i476.materialFlags = i486
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i491 = data
  i490.name = i491[0]
  i490.value = i491[1]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i495 = data
  i494.name = i495[0]
  i494.value = new pc.Color(i495[1], i495[2], i495[3], i495[4])
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i499 = data
  i498.name = i499[0]
  i498.value = new pc.Vec4( i499[1], i499[2], i499[3], i499[4] )
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i503 = data
  i502.name = i503[0]
  request.r(i503[1], i503[2], 0, i502, 'value')
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i507 = data
  i506.name = i507[0]
  i506.enabled = !!i507[1]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i509 = data
  i508.name = i509[0]
  i508.index = i509[1]
  i508.startup = !!i509[2]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i511 = data
  i510.position = new pc.Vec3( i511[0], i511[1], i511[2] )
  i510.scale = new pc.Vec3( i511[3], i511[4], i511[5] )
  i510.rotation = new pc.Quat(i511[6], i511[7], i511[8], i511[9])
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i513 = data
  i512.enabled = !!i513[0]
  i512.aspect = i513[1]
  i512.orthographic = !!i513[2]
  i512.orthographicSize = i513[3]
  i512.backgroundColor = new pc.Color(i513[4], i513[5], i513[6], i513[7])
  i512.nearClipPlane = i513[8]
  i512.farClipPlane = i513[9]
  i512.fieldOfView = i513[10]
  i512.depth = i513[11]
  i512.clearFlags = i513[12]
  i512.cullingMask = i513[13]
  i512.rect = i513[14]
  request.r(i513[15], i513[16], 0, i512, 'targetTexture')
  i512.usePhysicalProperties = !!i513[17]
  i512.focalLength = i513[18]
  i512.sensorSize = new pc.Vec2( i513[19], i513[20] )
  i512.lensShift = new pc.Vec2( i513[21], i513[22] )
  i512.gateFit = i513[23]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i515 = data
  i514.name = i515[0]
  i514.tagId = i515[1]
  i514.enabled = !!i515[2]
  i514.isStatic = !!i515[3]
  i514.layer = i515[4]
  return i514
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i517 = data
  request.r(i517[0], i517[1], 0, i516, 'm_FirstSelected')
  i516.m_sendNavigationEvents = !!i517[2]
  i516.m_DragThreshold = i517[3]
  return i516
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i519 = data
  i518.m_HorizontalAxis = i519[0]
  i518.m_VerticalAxis = i519[1]
  i518.m_SubmitButton = i519[2]
  i518.m_CancelButton = i519[3]
  i518.m_InputActionsPerSecond = i519[4]
  i518.m_RepeatDelay = i519[5]
  i518.m_ForceModuleActive = !!i519[6]
  i518.m_SendPointerHoverToParent = !!i519[7]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i521 = data
  i520.pivot = new pc.Vec2( i521[0], i521[1] )
  i520.anchorMin = new pc.Vec2( i521[2], i521[3] )
  i520.anchorMax = new pc.Vec2( i521[4], i521[5] )
  i520.sizeDelta = new pc.Vec2( i521[6], i521[7] )
  i520.anchoredPosition3D = new pc.Vec3( i521[8], i521[9], i521[10] )
  i520.rotation = new pc.Quat(i521[11], i521[12], i521[13], i521[14])
  i520.scale = new pc.Vec3( i521[15], i521[16], i521[17] )
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i523 = data
  i522.enabled = !!i523[0]
  i522.planeDistance = i523[1]
  i522.referencePixelsPerUnit = i523[2]
  i522.isFallbackOverlay = !!i523[3]
  i522.renderMode = i523[4]
  i522.renderOrder = i523[5]
  i522.sortingLayerName = i523[6]
  i522.sortingOrder = i523[7]
  i522.scaleFactor = i523[8]
  request.r(i523[9], i523[10], 0, i522, 'worldCamera')
  i522.overrideSorting = !!i523[11]
  i522.pixelPerfect = !!i523[12]
  i522.targetDisplay = i523[13]
  i522.overridePixelPerfect = !!i523[14]
  return i522
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i525 = data
  i524.m_UiScaleMode = i525[0]
  i524.m_ReferencePixelsPerUnit = i525[1]
  i524.m_ScaleFactor = i525[2]
  i524.m_ReferenceResolution = new pc.Vec2( i525[3], i525[4] )
  i524.m_ScreenMatchMode = i525[5]
  i524.m_MatchWidthOrHeight = i525[6]
  i524.m_PhysicalUnit = i525[7]
  i524.m_FallbackScreenDPI = i525[8]
  i524.m_DefaultSpriteDPI = i525[9]
  i524.m_DynamicPixelsPerUnit = i525[10]
  i524.m_PresetInfoIsWorld = !!i525[11]
  return i524
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i527 = data
  i526.m_IgnoreReversedGraphics = !!i527[0]
  i526.m_BlockingObjects = i527[1]
  i526.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i527[2] )
  return i526
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i528 = root || request.c( 'LunaManager' )
  var i529 = data
  var i531 = i529[0]
  var i530 = []
  for(var i = 0; i < i531.length; i += 2) {
  request.r(i531[i + 0], i531[i + 1], 2, i530, '')
  }
  i528.lstBtnInstall = i530
  request.r(i529[1], i529[2], 0, i528, 'EndCard')
  i528.countPlay = i529[3]
  i528.countPlayFinal = i529[4]
  i528.timeDropFinal = i529[5]
  i528.colorBG = new pc.Color(i529[6], i529[7], i529[8], i529[9])
  request.r(i529[10], i529[11], 0, i528, 'texture2D')
  request.r(i529[12], i529[13], 0, i528, 'rawImageBG')
  request.r(i529[14], i529[15], 0, i528, 'hand')
  request.r(i529[16], i529[17], 0, i528, 'textProgess')
  request.r(i529[18], i529[19], 0, i528, 'imgProgess')
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i535 = data
  i534.cullTransparentMesh = !!i535[0]
  return i534
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i537 = data
  request.r(i537[0], i537[1], 0, i536, 'm_Texture')
  i536.m_UVRect = UnityEngine.Rect.MinMaxRect(i537[2], i537[3], i537[4], i537[5])
  request.r(i537[6], i537[7], 0, i536, 'm_Material')
  i536.m_Maskable = !!i537[8]
  i536.m_Color = new pc.Color(i537[9], i537[10], i537[11], i537[12])
  i536.m_RaycastTarget = !!i537[13]
  i536.m_RaycastPadding = new pc.Vec4( i537[14], i537[15], i537[16], i537[17] )
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

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.UI.Image' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'm_Sprite')
  i540.m_Type = i541[2]
  i540.m_PreserveAspect = !!i541[3]
  i540.m_FillCenter = !!i541[4]
  i540.m_FillMethod = i541[5]
  i540.m_FillAmount = i541[6]
  i540.m_FillClockwise = !!i541[7]
  i540.m_FillOrigin = i541[8]
  i540.m_UseSpriteMesh = !!i541[9]
  i540.m_PixelsPerUnitMultiplier = i541[10]
  request.r(i541[11], i541[12], 0, i540, 'm_Material')
  i540.m_Maskable = !!i541[13]
  i540.m_Color = new pc.Color(i541[14], i541[15], i541[16], i541[17])
  i540.m_RaycastTarget = !!i541[18]
  i540.m_RaycastPadding = new pc.Vec4( i541[19], i541[20], i541[21], i541[22] )
  return i540
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i542 = root || request.c( 'DraggableItem' )
  var i543 = data
  i542.idDrag = i543[0]
  i542.idItem = i543[1]
  i542.idMusic = i543[2]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i545 = data
  i544.m_Alpha = i545[0]
  i544.m_Interactable = !!i545[1]
  i544.m_BlocksRaycasts = !!i545[2]
  i544.m_IgnoreParentGroups = !!i545[3]
  i544.enabled = !!i545[4]
  return i544
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i546 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'skeletonDataAsset')
  request.r(i547[2], i547[3], 0, i546, 'additiveMaterial')
  request.r(i547[4], i547[5], 0, i546, 'multiplyMaterial')
  request.r(i547[6], i547[7], 0, i546, 'screenMaterial')
  i546.initialSkinName = i547[8]
  i546.initialFlipX = !!i547[9]
  i546.initialFlipY = !!i547[10]
  i546.startingAnimation = i547[11]
  i546.startingLoop = !!i547[12]
  i546.timeScale = i547[13]
  i546.freeze = !!i547[14]
  i546.layoutScaleMode = i547[15]
  i546.updateWhenInvisible = i547[16]
  i546.allowMultipleCanvasRenderers = !!i547[17]
  var i549 = i547[18]
  var i548 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i549.length; i += 2) {
  request.r(i549[i + 0], i549[i + 1], 1, i548, '')
  }
  i546.canvasRenderers = i548
  i546.enableSeparatorSlots = !!i547[19]
  i546.updateSeparatorPartLocation = !!i547[20]
  i546.updateSeparatorPartScale = !!i547[21]
  i546.disableMeshAssignmentOnOverride = !!i547[22]
  i546.referenceSize = new pc.Vec2( i547[23], i547[24] )
  i546.referenceScale = i547[25]
  i546.rectTransformSize = new pc.Vec2( i547[26], i547[27] )
  i546.editReferenceRect = !!i547[28]
  var i551 = i547[29]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( i551[i + 0] );
  }
  i546.separatorSlotNames = i550
  var i553 = i547[30]
  var i552 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i553.length; i += 2) {
  request.r(i553[i + 0], i553[i + 1], 1, i552, '')
  }
  i546.separatorParts = i552
  i546.meshGenerator = request.d('Spine.Unity.MeshGenerator', i547[31], i546.meshGenerator)
  i546.updateTiming = i547[32]
  i546.unscaledTime = !!i547[33]
  request.r(i547[34], i547[35], 0, i546, 'm_Material')
  i546.m_Maskable = !!i547[36]
  i546.m_Color = new pc.Color(i547[37], i547[38], i547[39], i547[40])
  i546.m_RaycastTarget = !!i547[41]
  i546.m_RaycastPadding = new pc.Vec4( i547[42], i547[43], i547[44], i547[45] )
  return i546
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i560 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i561 = data
  i560.settings = request.d('Spine.Unity.MeshGenerator+Settings', i561[0], i560.settings)
  return i560
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i562 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i563 = data
  i562.useClipping = !!i563[0]
  i562.zSpacing = i563[1]
  i562.pmaVertexColors = !!i563[2]
  i562.tintBlack = !!i563[3]
  i562.canvasGroupTintBlack = !!i563[4]
  i562.calculateTangents = !!i563[5]
  i562.addNormals = !!i563[6]
  i562.immutableTriangles = !!i563[7]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i565 = data
  i564.usedByComposite = !!i565[0]
  i564.autoTiling = !!i565[1]
  i564.size = new pc.Vec2( i565[2], i565[3] )
  i564.edgeRadius = i565[4]
  i564.enabled = !!i565[5]
  i564.isTrigger = !!i565[6]
  i564.usedByEffector = !!i565[7]
  i564.density = i565[8]
  i564.offset = new pc.Vec2( i565[9], i565[10] )
  request.r(i565[11], i565[12], 0, i564, 'material')
  return i564
}

Deserializers["DropZone"] = function (request, data, root) {
  var i566 = root || request.c( 'DropZone' )
  var i567 = data
  i566.idDrop = i567[0]
  request.r(i567[1], i567[2], 0, i566, 'skeletonGraphic')
  i566.canDrop = !!i567[3]
  request.r(i567[4], i567[5], 0, i566, 'audioSource')
  var i569 = i567[6]
  var i568 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i569.length; i += 2) {
  request.r(i569[i + 0], i569[i + 1], 1, i568, '')
  }
  i566.audioClips = i568
  return i566
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i572 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i573 = data
  i572.m_hasFontAssetChanged = !!i573[0]
  request.r(i573[1], i573[2], 0, i572, 'm_baseMaterial')
  i572.m_maskOffset = new pc.Vec4( i573[3], i573[4], i573[5], i573[6] )
  i572.m_text = i573[7]
  i572.m_isRightToLeft = !!i573[8]
  request.r(i573[9], i573[10], 0, i572, 'm_fontAsset')
  request.r(i573[11], i573[12], 0, i572, 'm_sharedMaterial')
  var i575 = i573[13]
  var i574 = []
  for(var i = 0; i < i575.length; i += 2) {
  request.r(i575[i + 0], i575[i + 1], 2, i574, '')
  }
  i572.m_fontSharedMaterials = i574
  request.r(i573[14], i573[15], 0, i572, 'm_fontMaterial')
  var i577 = i573[16]
  var i576 = []
  for(var i = 0; i < i577.length; i += 2) {
  request.r(i577[i + 0], i577[i + 1], 2, i576, '')
  }
  i572.m_fontMaterials = i576
  i572.m_fontColor32 = UnityEngine.Color32.ConstructColor(i573[17], i573[18], i573[19], i573[20])
  i572.m_fontColor = new pc.Color(i573[21], i573[22], i573[23], i573[24])
  i572.m_enableVertexGradient = !!i573[25]
  i572.m_colorMode = i573[26]
  i572.m_fontColorGradient = request.d('TMPro.VertexGradient', i573[27], i572.m_fontColorGradient)
  request.r(i573[28], i573[29], 0, i572, 'm_fontColorGradientPreset')
  request.r(i573[30], i573[31], 0, i572, 'm_spriteAsset')
  i572.m_tintAllSprites = !!i573[32]
  request.r(i573[33], i573[34], 0, i572, 'm_StyleSheet')
  i572.m_TextStyleHashCode = i573[35]
  i572.m_overrideHtmlColors = !!i573[36]
  i572.m_faceColor = UnityEngine.Color32.ConstructColor(i573[37], i573[38], i573[39], i573[40])
  i572.m_fontSize = i573[41]
  i572.m_fontSizeBase = i573[42]
  i572.m_fontWeight = i573[43]
  i572.m_enableAutoSizing = !!i573[44]
  i572.m_fontSizeMin = i573[45]
  i572.m_fontSizeMax = i573[46]
  i572.m_fontStyle = i573[47]
  i572.m_HorizontalAlignment = i573[48]
  i572.m_VerticalAlignment = i573[49]
  i572.m_textAlignment = i573[50]
  i572.m_characterSpacing = i573[51]
  i572.m_wordSpacing = i573[52]
  i572.m_lineSpacing = i573[53]
  i572.m_lineSpacingMax = i573[54]
  i572.m_paragraphSpacing = i573[55]
  i572.m_charWidthMaxAdj = i573[56]
  i572.m_enableWordWrapping = !!i573[57]
  i572.m_wordWrappingRatios = i573[58]
  i572.m_overflowMode = i573[59]
  request.r(i573[60], i573[61], 0, i572, 'm_linkedTextComponent')
  request.r(i573[62], i573[63], 0, i572, 'parentLinkedComponent')
  i572.m_enableKerning = !!i573[64]
  i572.m_enableExtraPadding = !!i573[65]
  i572.checkPaddingRequired = !!i573[66]
  i572.m_isRichText = !!i573[67]
  i572.m_parseCtrlCharacters = !!i573[68]
  i572.m_isOrthographic = !!i573[69]
  i572.m_isCullingEnabled = !!i573[70]
  i572.m_horizontalMapping = i573[71]
  i572.m_verticalMapping = i573[72]
  i572.m_uvLineOffset = i573[73]
  i572.m_geometrySortingOrder = i573[74]
  i572.m_IsTextObjectScaleStatic = !!i573[75]
  i572.m_VertexBufferAutoSizeReduction = !!i573[76]
  i572.m_useMaxVisibleDescender = !!i573[77]
  i572.m_pageToDisplay = i573[78]
  i572.m_margin = new pc.Vec4( i573[79], i573[80], i573[81], i573[82] )
  i572.m_isUsingLegacyAnimationComponent = !!i573[83]
  i572.m_isVolumetricText = !!i573[84]
  request.r(i573[85], i573[86], 0, i572, 'm_Material')
  i572.m_Maskable = !!i573[87]
  i572.m_Color = new pc.Color(i573[88], i573[89], i573[90], i573[91])
  i572.m_RaycastTarget = !!i573[92]
  i572.m_RaycastPadding = new pc.Vec4( i573[93], i573[94], i573[95], i573[96] )
  return i572
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i580 = root || request.c( 'TMPro.VertexGradient' )
  var i581 = data
  i580.topLeft = new pc.Color(i581[0], i581[1], i581[2], i581[3])
  i580.topRight = new pc.Color(i581[4], i581[5], i581[6], i581[7])
  i580.bottomLeft = new pc.Color(i581[8], i581[9], i581[10], i581[11])
  i580.bottomRight = new pc.Color(i581[12], i581[13], i581[14], i581[15])
  return i580
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i582 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i583 = data
  i582.targetIsSelf = !!i583[0]
  request.r(i583[1], i583[2], 0, i582, 'targetGO')
  i582.tweenTargetIsTargetGO = !!i583[3]
  i582.delay = i583[4]
  i582.duration = i583[5]
  i582.easeType = i583[6]
  i582.easeCurve = new pc.AnimationCurve( { keys_flow: i583[7] } )
  i582.loopType = i583[8]
  i582.loops = i583[9]
  i582.id = i583[10]
  i582.isRelative = !!i583[11]
  i582.isFrom = !!i583[12]
  i582.isIndependentUpdate = !!i583[13]
  i582.autoKill = !!i583[14]
  i582.autoGenerate = !!i583[15]
  i582.isActive = !!i583[16]
  i582.isValid = !!i583[17]
  request.r(i583[18], i583[19], 0, i582, 'target')
  i582.animationType = i583[20]
  i582.targetType = i583[21]
  i582.forcedTargetType = i583[22]
  i582.autoPlay = !!i583[23]
  i582.useTargetAsV3 = !!i583[24]
  i582.endValueFloat = i583[25]
  i582.endValueV3 = new pc.Vec3( i583[26], i583[27], i583[28] )
  i582.endValueV2 = new pc.Vec2( i583[29], i583[30] )
  i582.endValueColor = new pc.Color(i583[31], i583[32], i583[33], i583[34])
  i582.endValueString = i583[35]
  i582.endValueRect = UnityEngine.Rect.MinMaxRect(i583[36], i583[37], i583[38], i583[39])
  request.r(i583[40], i583[41], 0, i582, 'endValueTransform')
  i582.optionalBool0 = !!i583[42]
  i582.optionalBool1 = !!i583[43]
  i582.optionalFloat0 = i583[44]
  i582.optionalInt0 = i583[45]
  i582.optionalRotationMode = i583[46]
  i582.optionalScrambleMode = i583[47]
  i582.optionalShakeRandomnessMode = i583[48]
  i582.optionalString = i583[49]
  i582.updateType = i583[50]
  i582.isSpeedBased = !!i583[51]
  i582.hasOnStart = !!i583[52]
  i582.hasOnPlay = !!i583[53]
  i582.hasOnUpdate = !!i583[54]
  i582.hasOnStepComplete = !!i583[55]
  i582.hasOnComplete = !!i583[56]
  i582.hasOnTweenCreated = !!i583[57]
  i582.hasOnRewind = !!i583[58]
  i582.onStart = request.d('UnityEngine.Events.UnityEvent', i583[59], i582.onStart)
  i582.onPlay = request.d('UnityEngine.Events.UnityEvent', i583[60], i582.onPlay)
  i582.onUpdate = request.d('UnityEngine.Events.UnityEvent', i583[61], i582.onUpdate)
  i582.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i583[62], i582.onStepComplete)
  i582.onComplete = request.d('UnityEngine.Events.UnityEvent', i583[63], i582.onComplete)
  i582.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i583[64], i582.onTweenCreated)
  i582.onRewind = request.d('UnityEngine.Events.UnityEvent', i583[65], i582.onRewind)
  return i582
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i585 = data
  i584.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i585[0], i584.m_PersistentCalls)
  return i584
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i587 = data
  var i589 = i587[0]
  var i588 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i589.length; i += 1) {
    i588.add(request.d('UnityEngine.Events.PersistentCall', i589[i + 0]));
  }
  i586.m_Calls = i588
  return i586
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'm_Target')
  i592.m_TargetAssemblyTypeName = i593[2]
  i592.m_MethodName = i593[3]
  i592.m_Mode = i593[4]
  i592.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i593[5], i592.m_Arguments)
  i592.m_CallState = i593[6]
  return i592
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.Button' )
  var i595 = data
  i594.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i595[0], i594.m_OnClick)
  i594.m_Navigation = request.d('UnityEngine.UI.Navigation', i595[1], i594.m_Navigation)
  i594.m_Transition = i595[2]
  i594.m_Colors = request.d('UnityEngine.UI.ColorBlock', i595[3], i594.m_Colors)
  i594.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i595[4], i594.m_SpriteState)
  i594.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i595[5], i594.m_AnimationTriggers)
  i594.m_Interactable = !!i595[6]
  request.r(i595[7], i595[8], 0, i594, 'm_TargetGraphic')
  return i594
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i597 = data
  i596.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i597[0], i596.m_PersistentCalls)
  return i596
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i599 = data
  i598.m_Mode = i599[0]
  i598.m_WrapAround = !!i599[1]
  request.r(i599[2], i599[3], 0, i598, 'm_SelectOnUp')
  request.r(i599[4], i599[5], 0, i598, 'm_SelectOnDown')
  request.r(i599[6], i599[7], 0, i598, 'm_SelectOnLeft')
  request.r(i599[8], i599[9], 0, i598, 'm_SelectOnRight')
  return i598
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i601 = data
  i600.m_NormalColor = new pc.Color(i601[0], i601[1], i601[2], i601[3])
  i600.m_HighlightedColor = new pc.Color(i601[4], i601[5], i601[6], i601[7])
  i600.m_PressedColor = new pc.Color(i601[8], i601[9], i601[10], i601[11])
  i600.m_SelectedColor = new pc.Color(i601[12], i601[13], i601[14], i601[15])
  i600.m_DisabledColor = new pc.Color(i601[16], i601[17], i601[18], i601[19])
  i600.m_ColorMultiplier = i601[20]
  i600.m_FadeDuration = i601[21]
  return i600
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'm_HighlightedSprite')
  request.r(i603[2], i603[3], 0, i602, 'm_PressedSprite')
  request.r(i603[4], i603[5], 0, i602, 'm_SelectedSprite')
  request.r(i603[6], i603[7], 0, i602, 'm_DisabledSprite')
  return i602
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i605 = data
  i604.m_NormalTrigger = i605[0]
  i604.m_HighlightedTrigger = i605[1]
  i604.m_PressedTrigger = i605[2]
  i604.m_SelectedTrigger = i605[3]
  i604.m_DisabledTrigger = i605[4]
  return i604
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.Mask' )
  var i607 = data
  i606.m_ShowMaskGraphic = !!i607[0]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i609 = data
  i608.ambientIntensity = i609[0]
  i608.reflectionIntensity = i609[1]
  i608.ambientMode = i609[2]
  i608.ambientLight = new pc.Color(i609[3], i609[4], i609[5], i609[6])
  i608.ambientSkyColor = new pc.Color(i609[7], i609[8], i609[9], i609[10])
  i608.ambientGroundColor = new pc.Color(i609[11], i609[12], i609[13], i609[14])
  i608.ambientEquatorColor = new pc.Color(i609[15], i609[16], i609[17], i609[18])
  i608.fogColor = new pc.Color(i609[19], i609[20], i609[21], i609[22])
  i608.fogEndDistance = i609[23]
  i608.fogStartDistance = i609[24]
  i608.fogDensity = i609[25]
  i608.fog = !!i609[26]
  request.r(i609[27], i609[28], 0, i608, 'skybox')
  i608.fogMode = i609[29]
  var i611 = i609[30]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i611[i + 0]) );
  }
  i608.lightmaps = i610
  i608.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i609[31], i608.lightProbes)
  i608.lightmapsMode = i609[32]
  i608.mixedBakeMode = i609[33]
  i608.environmentLightingMode = i609[34]
  i608.ambientProbe = new pc.SphericalHarmonicsL2(i609[35])
  i608.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i609[36])
  i608.useReferenceAmbientProbe = !!i609[37]
  request.r(i609[38], i609[39], 0, i608, 'customReflection')
  request.r(i609[40], i609[41], 0, i608, 'defaultReflection')
  i608.defaultReflectionMode = i609[42]
  i608.defaultReflectionResolution = i609[43]
  i608.sunLightObjectId = i609[44]
  i608.pixelLightCount = i609[45]
  i608.defaultReflectionHDR = !!i609[46]
  i608.hasLightDataAsset = !!i609[47]
  i608.hasManualGenerate = !!i609[48]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'lightmapColor')
  request.r(i615[2], i615[3], 0, i614, 'lightmapDirection')
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i616 = root || new UnityEngine.LightProbes()
  var i617 = data
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i625 = data
  var i627 = i625[0]
  var i626 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i627.length; i += 1) {
    i626.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i627[i + 0]));
  }
  i624.ShaderCompilationErrors = i626
  i624.name = i625[1]
  i624.guid = i625[2]
  var i629 = i625[3]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( i629[i + 0] );
  }
  i624.shaderDefinedKeywords = i628
  var i631 = i625[4]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i631[i + 0]) );
  }
  i624.passes = i630
  var i633 = i625[5]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i633[i + 0]) );
  }
  i624.usePasses = i632
  var i635 = i625[6]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i635[i + 0]) );
  }
  i624.defaultParameterValues = i634
  request.r(i625[7], i625[8], 0, i624, 'unityFallbackShader')
  i624.readDepth = !!i625[9]
  i624.isCreatedByShaderGraph = !!i625[10]
  i624.usedBatchUniforms = i625[11]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i639 = data
  i638.shaderName = i639[0]
  i638.errorMessage = i639[1]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i642 = root || new pc.UnityShaderPass()
  var i643 = data
  i642.id = i643[0]
  i642.subShaderIndex = i643[1]
  i642.name = i643[2]
  i642.passType = i643[3]
  i642.grabPassTextureName = i643[4]
  i642.usePass = !!i643[5]
  i642.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[6], i642.zTest)
  i642.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[7], i642.zWrite)
  i642.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[8], i642.culling)
  i642.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i643[9], i642.blending)
  i642.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i643[10], i642.alphaBlending)
  i642.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[11], i642.colorWriteMask)
  i642.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[12], i642.offsetUnits)
  i642.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[13], i642.offsetFactor)
  i642.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[14], i642.stencilRef)
  i642.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[15], i642.stencilReadMask)
  i642.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[16], i642.stencilWriteMask)
  i642.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i643[17], i642.stencilOp)
  i642.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i643[18], i642.stencilOpFront)
  i642.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i643[19], i642.stencilOpBack)
  var i645 = i643[20]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i645[i + 0]) );
  }
  i642.tags = i644
  var i647 = i643[21]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( i647[i + 0] );
  }
  i642.passDefinedKeywords = i646
  var i649 = i643[22]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i649[i + 0]) );
  }
  i642.passDefinedKeywordGroups = i648
  var i651 = i643[23]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i651[i + 0]) );
  }
  i642.variants = i650
  var i653 = i643[24]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i653[i + 0]) );
  }
  i642.excludedVariants = i652
  i642.hasDepthReader = !!i643[25]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i655 = data
  i654.val = i655[0]
  i654.name = i655[1]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i657 = data
  i656.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i657[0], i656.src)
  i656.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i657[1], i656.dst)
  i656.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i657[2], i656.op)
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i659 = data
  i658.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[0], i658.pass)
  i658.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[1], i658.fail)
  i658.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[2], i658.zFail)
  i658.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[3], i658.comp)
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i663 = data
  i662.name = i663[0]
  i662.value = i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i667 = data
  var i669 = i667[0]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( i669[i + 0] );
  }
  i666.keywords = i668
  i666.hasDiscard = !!i667[1]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i673 = data
  i672.passId = i673[0]
  i672.subShaderIndex = i673[1]
  var i675 = i673[2]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( i675[i + 0] );
  }
  i672.keywords = i674
  i672.vertexProgram = i673[3]
  i672.fragmentProgram = i673[4]
  i672.compiledForWebGL2 = !!i673[5]
  i672.readDepth = !!i673[6]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'shader')
  i678.pass = i679[2]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i683 = data
  i682.name = i683[0]
  i682.type = i683[1]
  i682.value = new pc.Vec4( i683[2], i683[3], i683[4], i683[5] )
  i682.textureValue = i683[6]
  i682.shaderPropertyFlag = i683[7]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i685 = data
  i684.name = i685[0]
  request.r(i685[1], i685[2], 0, i684, 'texture')
  i684.aabb = i685[3]
  i684.vertices = i685[4]
  i684.triangles = i685[5]
  i684.textureRect = UnityEngine.Rect.MinMaxRect(i685[6], i685[7], i685[8], i685[9])
  i684.packedRect = UnityEngine.Rect.MinMaxRect(i685[10], i685[11], i685[12], i685[13])
  i684.border = new pc.Vec4( i685[14], i685[15], i685[16], i685[17] )
  i684.transparency = i685[18]
  i684.bounds = i685[19]
  i684.pixelsPerUnit = i685[20]
  i684.textureWidth = i685[21]
  i684.textureHeight = i685[22]
  i684.nativeSize = new pc.Vec2( i685[23], i685[24] )
  i684.pivot = new pc.Vec2( i685[25], i685[26] )
  i684.textureRectOffset = new pc.Vec2( i685[27], i685[28] )
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i687 = data
  i686.name = i687[0]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i689 = data
  i688.name = i689[0]
  i688.ascent = i689[1]
  i688.originalLineHeight = i689[2]
  i688.fontSize = i689[3]
  var i691 = i689[4]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i691[i + 0]) );
  }
  i688.characterInfo = i690
  request.r(i689[5], i689[6], 0, i688, 'texture')
  i688.originalFontSize = i689[7]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i695 = data
  i694.index = i695[0]
  i694.advance = i695[1]
  i694.bearing = i695[2]
  i694.glyphWidth = i695[3]
  i694.glyphHeight = i695[4]
  i694.minX = i695[5]
  i694.maxX = i695[6]
  i694.minY = i695[7]
  i694.maxY = i695[8]
  i694.uvBottomLeftX = i695[9]
  i694.uvBottomLeftY = i695[10]
  i694.uvBottomRightX = i695[11]
  i694.uvBottomRightY = i695[12]
  i694.uvTopLeftX = i695[13]
  i694.uvTopLeftY = i695[14]
  i694.uvTopRightX = i695[15]
  i694.uvTopRightY = i695[16]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i697 = data
  i696.name = i697[0]
  i696.bytes64 = i697[1]
  i696.data = i697[2]
  return i696
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i698 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i699 = data
  var i701 = i699[0]
  var i700 = []
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 2, i700, '')
  }
  i698.atlasAssets = i700
  i698.scale = i699[1]
  request.r(i699[2], i699[3], 0, i698, 'skeletonJSON')
  i698.isUpgradingBlendModeMaterials = !!i699[4]
  i698.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i699[5], i698.blendModeMaterials)
  var i703 = i699[6]
  var i702 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i703.length; i += 2) {
  request.r(i703[i + 0], i703[i + 1], 1, i702, '')
  }
  i698.skeletonDataModifiers = i702
  var i705 = i699[7]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( i705[i + 0] );
  }
  i698.fromAnimation = i704
  var i707 = i699[8]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( i707[i + 0] );
  }
  i698.toAnimation = i706
  i698.duration = i699[9]
  i698.defaultMix = i699[10]
  request.r(i699[11], i699[12], 0, i698, 'controller')
  return i698
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i710 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i711 = data
  i710.applyAdditiveMaterial = !!i711[0]
  var i713 = i711[1]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i713.length; i += 1) {
    i712.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i713[i + 0]));
  }
  i710.additiveMaterials = i712
  var i715 = i711[2]
  var i714 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i715.length; i += 1) {
    i714.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i715[i + 0]));
  }
  i710.multiplyMaterials = i714
  var i717 = i711[3]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i717.length; i += 1) {
    i716.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i717[i + 0]));
  }
  i710.screenMaterials = i716
  i710.requiresBlendModeMaterials = !!i711[4]
  return i710
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i720 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i721 = data
  i720.pageName = i721[0]
  request.r(i721[1], i721[2], 0, i720, 'material')
  return i720
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i724 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'atlasFile')
  var i727 = i725[2]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i724.materials = i726
  i724.textureLoadingMode = i725[3]
  request.r(i725[4], i725[5], 0, i724, 'onDemandTextureLoader')
  return i724
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i728 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i729 = data
  i728.hashCode = i729[0]
  request.r(i729[1], i729[2], 0, i728, 'material')
  i728.materialHashCode = i729[3]
  request.r(i729[4], i729[5], 0, i728, 'atlas')
  i728.normalStyle = i729[6]
  i728.normalSpacingOffset = i729[7]
  i728.boldStyle = i729[8]
  i728.boldSpacing = i729[9]
  i728.italicStyle = i729[10]
  i728.tabSize = i729[11]
  i728.m_Version = i729[12]
  i728.m_SourceFontFileGUID = i729[13]
  request.r(i729[14], i729[15], 0, i728, 'm_SourceFontFile_EditorRef')
  request.r(i729[16], i729[17], 0, i728, 'm_SourceFontFile')
  i728.m_AtlasPopulationMode = i729[18]
  i728.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i729[19], i728.m_FaceInfo)
  var i731 = i729[20]
  var i730 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i731.length; i += 1) {
    i730.add(request.d('UnityEngine.TextCore.Glyph', i731[i + 0]));
  }
  i728.m_GlyphTable = i730
  var i733 = i729[21]
  var i732 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i733.length; i += 1) {
    i732.add(request.d('TMPro.TMP_Character', i733[i + 0]));
  }
  i728.m_CharacterTable = i732
  var i735 = i729[22]
  var i734 = []
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 2, i734, '')
  }
  i728.m_AtlasTextures = i734
  i728.m_AtlasTextureIndex = i729[23]
  i728.m_IsMultiAtlasTexturesEnabled = !!i729[24]
  i728.m_ClearDynamicDataOnBuild = !!i729[25]
  var i737 = i729[26]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i737.length; i += 1) {
    i736.add(request.d('UnityEngine.TextCore.GlyphRect', i737[i + 0]));
  }
  i728.m_UsedGlyphRects = i736
  var i739 = i729[27]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i739.length; i += 1) {
    i738.add(request.d('UnityEngine.TextCore.GlyphRect', i739[i + 0]));
  }
  i728.m_FreeGlyphRects = i738
  i728.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i729[28], i728.m_fontInfo)
  i728.m_AtlasWidth = i729[29]
  i728.m_AtlasHeight = i729[30]
  i728.m_AtlasPadding = i729[31]
  i728.m_AtlasRenderMode = i729[32]
  var i741 = i729[33]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i741.length; i += 1) {
    i740.add(request.d('TMPro.TMP_Glyph', i741[i + 0]));
  }
  i728.m_glyphInfoList = i740
  i728.m_KerningTable = request.d('TMPro.KerningTable', i729[34], i728.m_KerningTable)
  i728.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i729[35], i728.m_FontFeatureTable)
  var i743 = i729[36]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 1, i742, '')
  }
  i728.fallbackFontAssets = i742
  var i745 = i729[37]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 1, i744, '')
  }
  i728.m_FallbackFontAssetTable = i744
  i728.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i729[38], i728.m_CreationSettings)
  var i747 = i729[39]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('TMPro.TMP_FontWeightPair', i747[i + 0]) );
  }
  i728.m_FontWeightTable = i746
  var i749 = i729[40]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('TMPro.TMP_FontWeightPair', i749[i + 0]) );
  }
  i728.fontWeights = i748
  return i728
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i751 = data
  i750.m_FaceIndex = i751[0]
  i750.m_FamilyName = i751[1]
  i750.m_StyleName = i751[2]
  i750.m_PointSize = i751[3]
  i750.m_Scale = i751[4]
  i750.m_UnitsPerEM = i751[5]
  i750.m_LineHeight = i751[6]
  i750.m_AscentLine = i751[7]
  i750.m_CapLine = i751[8]
  i750.m_MeanLine = i751[9]
  i750.m_Baseline = i751[10]
  i750.m_DescentLine = i751[11]
  i750.m_SuperscriptOffset = i751[12]
  i750.m_SuperscriptSize = i751[13]
  i750.m_SubscriptOffset = i751[14]
  i750.m_SubscriptSize = i751[15]
  i750.m_UnderlineOffset = i751[16]
  i750.m_UnderlineThickness = i751[17]
  i750.m_StrikethroughOffset = i751[18]
  i750.m_StrikethroughThickness = i751[19]
  i750.m_TabWidth = i751[20]
  return i750
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i755 = data
  i754.m_Index = i755[0]
  i754.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i755[1], i754.m_Metrics)
  i754.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i755[2], i754.m_GlyphRect)
  i754.m_Scale = i755[3]
  i754.m_AtlasIndex = i755[4]
  i754.m_ClassDefinitionType = i755[5]
  return i754
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i757 = data
  i756.m_Width = i757[0]
  i756.m_Height = i757[1]
  i756.m_HorizontalBearingX = i757[2]
  i756.m_HorizontalBearingY = i757[3]
  i756.m_HorizontalAdvance = i757[4]
  return i756
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i759 = data
  i758.m_X = i759[0]
  i758.m_Y = i759[1]
  i758.m_Width = i759[2]
  i758.m_Height = i759[3]
  return i758
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i762 = root || request.c( 'TMPro.TMP_Character' )
  var i763 = data
  i762.m_ElementType = i763[0]
  i762.m_Unicode = i763[1]
  i762.m_GlyphIndex = i763[2]
  i762.m_Scale = i763[3]
  return i762
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i768 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i769 = data
  i768.Name = i769[0]
  i768.PointSize = i769[1]
  i768.Scale = i769[2]
  i768.CharacterCount = i769[3]
  i768.LineHeight = i769[4]
  i768.Baseline = i769[5]
  i768.Ascender = i769[6]
  i768.CapHeight = i769[7]
  i768.Descender = i769[8]
  i768.CenterLine = i769[9]
  i768.SuperscriptOffset = i769[10]
  i768.SubscriptOffset = i769[11]
  i768.SubSize = i769[12]
  i768.Underline = i769[13]
  i768.UnderlineThickness = i769[14]
  i768.strikethrough = i769[15]
  i768.strikethroughThickness = i769[16]
  i768.TabWidth = i769[17]
  i768.Padding = i769[18]
  i768.AtlasWidth = i769[19]
  i768.AtlasHeight = i769[20]
  return i768
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i772 = root || request.c( 'TMPro.TMP_Glyph' )
  var i773 = data
  i772.id = i773[0]
  i772.x = i773[1]
  i772.y = i773[2]
  i772.width = i773[3]
  i772.height = i773[4]
  i772.xOffset = i773[5]
  i772.yOffset = i773[6]
  i772.xAdvance = i773[7]
  i772.scale = i773[8]
  return i772
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i774 = root || request.c( 'TMPro.KerningTable' )
  var i775 = data
  var i777 = i775[0]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i777.length; i += 1) {
    i776.add(request.d('TMPro.KerningPair', i777[i + 0]));
  }
  i774.kerningPairs = i776
  return i774
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i780 = root || request.c( 'TMPro.KerningPair' )
  var i781 = data
  i780.xOffset = i781[0]
  i780.m_FirstGlyph = i781[1]
  i780.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i781[2], i780.m_FirstGlyphAdjustments)
  i780.m_SecondGlyph = i781[3]
  i780.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i781[4], i780.m_SecondGlyphAdjustments)
  i780.m_IgnoreSpacingAdjustments = !!i781[5]
  return i780
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i782 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i783 = data
  var i785 = i783[0]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i785.length; i += 1) {
    i784.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i785[i + 0]));
  }
  i782.m_GlyphPairAdjustmentRecords = i784
  return i782
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i788 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i789 = data
  i788.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i789[0], i788.m_FirstAdjustmentRecord)
  i788.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i789[1], i788.m_SecondAdjustmentRecord)
  i788.m_FeatureLookupFlags = i789[2]
  return i788
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i792 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i793 = data
  i792.sourceFontFileName = i793[0]
  i792.sourceFontFileGUID = i793[1]
  i792.pointSizeSamplingMode = i793[2]
  i792.pointSize = i793[3]
  i792.padding = i793[4]
  i792.packingMode = i793[5]
  i792.atlasWidth = i793[6]
  i792.atlasHeight = i793[7]
  i792.characterSetSelectionMode = i793[8]
  i792.characterSequence = i793[9]
  i792.referencedFontAssetGUID = i793[10]
  i792.referencedTextAssetGUID = i793[11]
  i792.fontStyle = i793[12]
  i792.fontStyleModifier = i793[13]
  i792.renderMode = i793[14]
  i792.includeFontFeatures = !!i793[15]
  return i792
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i796 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'regularTypeface')
  request.r(i797[2], i797[3], 0, i796, 'italicTypeface')
  return i796
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i798 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i799 = data
  i798.useSafeMode = !!i799[0]
  i798.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i799[1], i798.safeModeOptions)
  i798.timeScale = i799[2]
  i798.unscaledTimeScale = i799[3]
  i798.useSmoothDeltaTime = !!i799[4]
  i798.maxSmoothUnscaledTime = i799[5]
  i798.rewindCallbackMode = i799[6]
  i798.showUnityEditorReport = !!i799[7]
  i798.logBehaviour = i799[8]
  i798.drawGizmos = !!i799[9]
  i798.defaultRecyclable = !!i799[10]
  i798.defaultAutoPlay = i799[11]
  i798.defaultUpdateType = i799[12]
  i798.defaultTimeScaleIndependent = !!i799[13]
  i798.defaultEaseType = i799[14]
  i798.defaultEaseOvershootOrAmplitude = i799[15]
  i798.defaultEasePeriod = i799[16]
  i798.defaultAutoKill = !!i799[17]
  i798.defaultLoopType = i799[18]
  i798.debugMode = !!i799[19]
  i798.debugStoreTargetId = !!i799[20]
  i798.showPreviewPanel = !!i799[21]
  i798.storeSettingsLocation = i799[22]
  i798.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i799[23], i798.modules)
  i798.createASMDEF = !!i799[24]
  i798.showPlayingTweens = !!i799[25]
  i798.showPausedTweens = !!i799[26]
  return i798
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i800 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i801 = data
  i800.logBehaviour = i801[0]
  i800.nestedTweenFailureBehaviour = i801[1]
  return i800
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i802 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i803 = data
  i802.showPanel = !!i803[0]
  i802.audioEnabled = !!i803[1]
  i802.physicsEnabled = !!i803[2]
  i802.physics2DEnabled = !!i803[3]
  i802.spriteEnabled = !!i803[4]
  i802.uiEnabled = !!i803[5]
  i802.textMeshProEnabled = !!i803[6]
  i802.tk2DEnabled = !!i803[7]
  i802.deAudioEnabled = !!i803[8]
  i802.deUnityExtendedEnabled = !!i803[9]
  i802.epoOutlineEnabled = !!i803[10]
  return i802
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i804 = root || request.c( 'TMPro.TMP_Settings' )
  var i805 = data
  i804.m_enableWordWrapping = !!i805[0]
  i804.m_enableKerning = !!i805[1]
  i804.m_enableExtraPadding = !!i805[2]
  i804.m_enableTintAllSprites = !!i805[3]
  i804.m_enableParseEscapeCharacters = !!i805[4]
  i804.m_EnableRaycastTarget = !!i805[5]
  i804.m_GetFontFeaturesAtRuntime = !!i805[6]
  i804.m_missingGlyphCharacter = i805[7]
  i804.m_warningsDisabled = !!i805[8]
  request.r(i805[9], i805[10], 0, i804, 'm_defaultFontAsset')
  i804.m_defaultFontAssetPath = i805[11]
  i804.m_defaultFontSize = i805[12]
  i804.m_defaultAutoSizeMinRatio = i805[13]
  i804.m_defaultAutoSizeMaxRatio = i805[14]
  i804.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i805[15], i805[16] )
  i804.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i805[17], i805[18] )
  i804.m_autoSizeTextContainer = !!i805[19]
  i804.m_IsTextObjectScaleStatic = !!i805[20]
  var i807 = i805[21]
  var i806 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 1, i806, '')
  }
  i804.m_fallbackFontAssets = i806
  i804.m_matchMaterialPreset = !!i805[22]
  request.r(i805[23], i805[24], 0, i804, 'm_defaultSpriteAsset')
  i804.m_defaultSpriteAssetPath = i805[25]
  i804.m_enableEmojiSupport = !!i805[26]
  i804.m_MissingCharacterSpriteUnicode = i805[27]
  i804.m_defaultColorGradientPresetsPath = i805[28]
  request.r(i805[29], i805[30], 0, i804, 'm_defaultStyleSheet')
  i804.m_StyleSheetsResourcePath = i805[31]
  request.r(i805[32], i805[33], 0, i804, 'm_leadingCharacters')
  request.r(i805[34], i805[35], 0, i804, 'm_followingCharacters')
  i804.m_UseModernHangulLineBreakingRules = !!i805[36]
  return i804
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i808 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i809 = data
  i808.m_GlyphIndex = i809[0]
  i808.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i809[1], i808.m_GlyphValueRecord)
  return i808
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i810 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i811 = data
  i810.m_XPlacement = i811[0]
  i810.m_YPlacement = i811[1]
  i810.m_XAdvance = i811[2]
  i810.m_YAdvance = i811[3]
  return i810
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i812 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i813 = data
  i812.hashCode = i813[0]
  request.r(i813[1], i813[2], 0, i812, 'material')
  i812.materialHashCode = i813[3]
  request.r(i813[4], i813[5], 0, i812, 'spriteSheet')
  var i815 = i813[6]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i815.length; i += 1) {
    i814.add(request.d('TMPro.TMP_Sprite', i815[i + 0]));
  }
  i812.spriteInfoList = i814
  var i817 = i813[7]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 1, i816, '')
  }
  i812.fallbackSpriteAssets = i816
  i812.m_Version = i813[8]
  i812.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i813[9], i812.m_FaceInfo)
  var i819 = i813[10]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i819.length; i += 1) {
    i818.add(request.d('TMPro.TMP_SpriteCharacter', i819[i + 0]));
  }
  i812.m_SpriteCharacterTable = i818
  var i821 = i813[11]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i821.length; i += 1) {
    i820.add(request.d('TMPro.TMP_SpriteGlyph', i821[i + 0]));
  }
  i812.m_SpriteGlyphTable = i820
  return i812
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.TMP_Sprite' )
  var i825 = data
  i824.name = i825[0]
  i824.hashCode = i825[1]
  i824.unicode = i825[2]
  i824.pivot = new pc.Vec2( i825[3], i825[4] )
  request.r(i825[5], i825[6], 0, i824, 'sprite')
  i824.id = i825[7]
  i824.x = i825[8]
  i824.y = i825[9]
  i824.width = i825[10]
  i824.height = i825[11]
  i824.xOffset = i825[12]
  i824.yOffset = i825[13]
  i824.xAdvance = i825[14]
  i824.scale = i825[15]
  return i824
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i830 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i831 = data
  i830.m_Name = i831[0]
  i830.m_HashCode = i831[1]
  i830.m_ElementType = i831[2]
  i830.m_Unicode = i831[3]
  i830.m_GlyphIndex = i831[4]
  i830.m_Scale = i831[5]
  return i830
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i834 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'sprite')
  i834.m_Index = i835[2]
  i834.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i835[3], i834.m_Metrics)
  i834.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i835[4], i834.m_GlyphRect)
  i834.m_Scale = i835[5]
  i834.m_AtlasIndex = i835[6]
  i834.m_ClassDefinitionType = i835[7]
  return i834
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i837 = data
  var i839 = i837[0]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i839.length; i += 1) {
    i838.add(request.d('TMPro.TMP_Style', i839[i + 0]));
  }
  i836.m_StyleList = i838
  return i836
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.TMP_Style' )
  var i843 = data
  i842.m_Name = i843[0]
  i842.m_HashCode = i843[1]
  i842.m_OpeningDefinition = i843[2]
  i842.m_ClosingDefinition = i843[3]
  i842.m_OpeningTagArray = i843[4]
  i842.m_ClosingTagArray = i843[5]
  i842.m_OpeningTagUnicodeArray = i843[6]
  i842.m_ClosingTagUnicodeArray = i843[7]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i845 = data
  var i847 = i845[0]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i847[i + 0]) );
  }
  i844.files = i846
  i844.componentToPrefabIds = i845[1]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i851 = data
  i850.path = i851[0]
  request.r(i851[1], i851[2], 0, i850, 'unityObject')
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i853 = data
  var i855 = i853[0]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i855[i + 0]) );
  }
  i852.scriptsExecutionOrder = i854
  var i857 = i853[1]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i857[i + 0]) );
  }
  i852.sortingLayers = i856
  var i859 = i853[2]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i859[i + 0]) );
  }
  i852.cullingLayers = i858
  i852.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i853[3], i852.timeSettings)
  i852.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i853[4], i852.physicsSettings)
  i852.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i853[5], i852.physics2DSettings)
  i852.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i853[6], i852.qualitySettings)
  i852.enableRealtimeShadows = !!i853[7]
  i852.enableAutoInstancing = !!i853[8]
  i852.enableDynamicBatching = !!i853[9]
  i852.lightmapEncodingQuality = i853[10]
  i852.desiredColorSpace = i853[11]
  var i861 = i853[12]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( i861[i + 0] );
  }
  i852.allTags = i860
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i865 = data
  i864.name = i865[0]
  i864.value = i865[1]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i869 = data
  i868.id = i869[0]
  i868.name = i869[1]
  i868.value = i869[2]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i873 = data
  i872.id = i873[0]
  i872.name = i873[1]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i875 = data
  i874.fixedDeltaTime = i875[0]
  i874.maximumDeltaTime = i875[1]
  i874.timeScale = i875[2]
  i874.maximumParticleTimestep = i875[3]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i877 = data
  i876.gravity = new pc.Vec3( i877[0], i877[1], i877[2] )
  i876.defaultSolverIterations = i877[3]
  i876.bounceThreshold = i877[4]
  i876.autoSyncTransforms = !!i877[5]
  i876.autoSimulation = !!i877[6]
  var i879 = i877[7]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i879[i + 0]) );
  }
  i876.collisionMatrix = i878
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i883 = data
  i882.enabled = !!i883[0]
  i882.layerId = i883[1]
  i882.otherLayerId = i883[2]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'material')
  i884.gravity = new pc.Vec2( i885[2], i885[3] )
  i884.positionIterations = i885[4]
  i884.velocityIterations = i885[5]
  i884.velocityThreshold = i885[6]
  i884.maxLinearCorrection = i885[7]
  i884.maxAngularCorrection = i885[8]
  i884.maxTranslationSpeed = i885[9]
  i884.maxRotationSpeed = i885[10]
  i884.baumgarteScale = i885[11]
  i884.baumgarteTOIScale = i885[12]
  i884.timeToSleep = i885[13]
  i884.linearSleepTolerance = i885[14]
  i884.angularSleepTolerance = i885[15]
  i884.defaultContactOffset = i885[16]
  i884.autoSimulation = !!i885[17]
  i884.queriesHitTriggers = !!i885[18]
  i884.queriesStartInColliders = !!i885[19]
  i884.callbacksOnDisable = !!i885[20]
  i884.reuseCollisionCallbacks = !!i885[21]
  i884.autoSyncTransforms = !!i885[22]
  var i887 = i885[23]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i887[i + 0]) );
  }
  i884.collisionMatrix = i886
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i891 = data
  i890.enabled = !!i891[0]
  i890.layerId = i891[1]
  i890.otherLayerId = i891[2]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i893 = data
  var i895 = i893[0]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i895[i + 0]) );
  }
  i892.qualityLevels = i894
  var i897 = i893[1]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( i897[i + 0] );
  }
  i892.names = i896
  i892.shadows = i893[2]
  i892.anisotropicFiltering = i893[3]
  i892.antiAliasing = i893[4]
  i892.lodBias = i893[5]
  i892.shadowCascades = i893[6]
  i892.shadowDistance = i893[7]
  i892.shadowmaskMode = i893[8]
  i892.shadowProjection = i893[9]
  i892.shadowResolution = i893[10]
  i892.softParticles = !!i893[11]
  i892.softVegetation = !!i893[12]
  i892.activeColorSpace = i893[13]
  i892.desiredColorSpace = i893[14]
  i892.masterTextureLimit = i893[15]
  i892.maxQueuedFrames = i893[16]
  i892.particleRaycastBudget = i893[17]
  i892.pixelLightCount = i893[18]
  i892.realtimeReflectionProbes = !!i893[19]
  i892.shadowCascade2Split = i893[20]
  i892.shadowCascade4Split = new pc.Vec3( i893[21], i893[22], i893[23] )
  i892.streamingMipmapsActive = !!i893[24]
  i892.vSyncCount = i893[25]
  i892.asyncUploadBufferSize = i893[26]
  i892.asyncUploadTimeSlice = i893[27]
  i892.billboardsFaceCameraPosition = !!i893[28]
  i892.shadowNearPlaneOffset = i893[29]
  i892.streamingMipmapsMemoryBudget = i893[30]
  i892.maximumLODLevel = i893[31]
  i892.streamingMipmapsAddAllCameras = !!i893[32]
  i892.streamingMipmapsMaxLevelReduction = i893[33]
  i892.streamingMipmapsRenderersPerFrame = i893[34]
  i892.resolutionScalingFixedDPIFactor = i893[35]
  i892.streamingMipmapsMaxFileIORequests = i893[36]
  i892.currentQualityLevel = i893[37]
  return i892
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'm_ObjectArgument')
  i900.m_ObjectArgumentAssemblyTypeName = i901[2]
  i900.m_IntArgument = i901[3]
  i900.m_FloatArgument = i901[4]
  i900.m_StringArgument = i901[5]
  i900.m_BoolArgument = !!i901[6]
  return i900
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i902 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i903 = data
  i902.xPlacement = i903[0]
  i902.yPlacement = i903[1]
  i902.xAdvance = i903[2]
  i902.yAdvance = i903[3]
  return i902
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[3],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[51],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[59],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[3],"73":[74],"75":[76],"77":[76],"9":[8],"78":[79],"80":[81],"82":[79],"83":[8],"84":[8],"11":[9],"18":[19,8],"85":[8],"10":[9],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"32":[8],"93":[8],"16":[19,8],"94":[8],"95":[8],"96":[8],"97":[8],"98":[19,8],"99":[8],"100":[6],"101":[6],"7":[6],"102":[6],"103":[3],"104":[3],"105":[106],"107":[3],"108":[109],"110":[8],"111":[19,8],"112":[74],"25":[19,8],"113":[114,74],"115":[74],"116":[74,117],"118":[51],"119":[59],"120":[109],"121":[122],"123":[8],"124":[74,8],"17":[8,19],"125":[8],"126":[19,8],"127":[74],"128":[19,8],"129":[8],"130":[79]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","DraggableItem","UnityEngine.CanvasGroup","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.BoxCollider2D","DropZone","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "17.0";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "APG_V08_NgocNDL_AnhPD";

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

Deserializers.buildID = "01a9ae49-1ab7-4618-87e1-db9d9ad4f92c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

