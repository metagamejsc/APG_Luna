var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointSpring' )
  var i457 = data
  i456.spring = i457[0]
  i456.damper = i457[1]
  i456.targetPosition = i457[2]
  return i456
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointMotor' )
  var i459 = data
  i458.m_TargetVelocity = i459[0]
  i458.m_Force = i459[1]
  i458.m_FreeSpin = i459[2]
  return i458
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.JointLimits' )
  var i461 = data
  i460.m_Min = i461[0]
  i460.m_Max = i461[1]
  i460.m_Bounciness = i461[2]
  i460.m_BounceMinVelocity = i461[3]
  i460.m_ContactDistance = i461[4]
  i460.minBounce = i461[5]
  i460.maxBounce = i461[6]
  return i460
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.JointDrive' )
  var i463 = data
  i462.m_PositionSpring = i463[0]
  i462.m_PositionDamper = i463[1]
  i462.m_MaximumForce = i463[2]
  i462.m_UseAcceleration = i463[3]
  return i462
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i465 = data
  i464.m_Spring = i465[0]
  i464.m_Damper = i465[1]
  return i464
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i467 = data
  i466.m_Limit = i467[0]
  i466.m_Bounciness = i467[1]
  i466.m_ContactDistance = i467[2]
  return i466
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i469 = data
  i468.m_ExtremumSlip = i469[0]
  i468.m_ExtremumValue = i469[1]
  i468.m_AsymptoteSlip = i469[2]
  i468.m_AsymptoteValue = i469[3]
  i468.m_Stiffness = i469[4]
  return i468
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i471 = data
  i470.m_LowerAngle = i471[0]
  i470.m_UpperAngle = i471[1]
  return i470
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i473 = data
  i472.m_MotorSpeed = i473[0]
  i472.m_MaximumMotorTorque = i473[1]
  return i472
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i475 = data
  i474.m_DampingRatio = i475[0]
  i474.m_Frequency = i475[1]
  i474.m_Angle = i475[2]
  return i474
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i477 = data
  i476.m_LowerTranslation = i477[0]
  i476.m_UpperTranslation = i477[1]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i479 = data
  i478.name = i479[0]
  i478.width = i479[1]
  i478.height = i479[2]
  i478.mipmapCount = i479[3]
  i478.anisoLevel = i479[4]
  i478.filterMode = i479[5]
  i478.hdr = !!i479[6]
  i478.format = i479[7]
  i478.wrapMode = i479[8]
  i478.alphaIsTransparency = !!i479[9]
  i478.alphaSource = i479[10]
  i478.graphicsFormat = i479[11]
  i478.sRGBTexture = !!i479[12]
  i478.desiredColorSpace = i479[13]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i480 = root || new pc.UnityMaterial()
  var i481 = data
  i480.name = i481[0]
  request.r(i481[1], i481[2], 0, i480, 'shader')
  i480.renderQueue = i481[3]
  i480.enableInstancing = !!i481[4]
  var i483 = i481[5]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i483[i + 0]) );
  }
  i480.floatParameters = i482
  var i485 = i481[6]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i485[i + 0]) );
  }
  i480.colorParameters = i484
  var i487 = i481[7]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i487[i + 0]) );
  }
  i480.vectorParameters = i486
  var i489 = i481[8]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i489[i + 0]) );
  }
  i480.textureParameters = i488
  var i491 = i481[9]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i491[i + 0]) );
  }
  i480.materialFlags = i490
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i495 = data
  i494.name = i495[0]
  i494.value = i495[1]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i499 = data
  i498.name = i499[0]
  i498.value = new pc.Color(i499[1], i499[2], i499[3], i499[4])
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i503 = data
  i502.name = i503[0]
  i502.value = new pc.Vec4( i503[1], i503[2], i503[3], i503[4] )
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i507 = data
  i506.name = i507[0]
  request.r(i507[1], i507[2], 0, i506, 'value')
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i511 = data
  i510.name = i511[0]
  i510.enabled = !!i511[1]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i513 = data
  i512.name = i513[0]
  i512.index = i513[1]
  i512.startup = !!i513[2]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i515 = data
  i514.position = new pc.Vec3( i515[0], i515[1], i515[2] )
  i514.scale = new pc.Vec3( i515[3], i515[4], i515[5] )
  i514.rotation = new pc.Quat(i515[6], i515[7], i515[8], i515[9])
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i517 = data
  i516.enabled = !!i517[0]
  i516.aspect = i517[1]
  i516.orthographic = !!i517[2]
  i516.orthographicSize = i517[3]
  i516.backgroundColor = new pc.Color(i517[4], i517[5], i517[6], i517[7])
  i516.nearClipPlane = i517[8]
  i516.farClipPlane = i517[9]
  i516.fieldOfView = i517[10]
  i516.depth = i517[11]
  i516.clearFlags = i517[12]
  i516.cullingMask = i517[13]
  i516.rect = i517[14]
  request.r(i517[15], i517[16], 0, i516, 'targetTexture')
  i516.usePhysicalProperties = !!i517[17]
  i516.focalLength = i517[18]
  i516.sensorSize = new pc.Vec2( i517[19], i517[20] )
  i516.lensShift = new pc.Vec2( i517[21], i517[22] )
  i516.gateFit = i517[23]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i519 = data
  i518.name = i519[0]
  i518.tagId = i519[1]
  i518.enabled = !!i519[2]
  i518.isStatic = !!i519[3]
  i518.layer = i519[4]
  return i518
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i521 = data
  request.r(i521[0], i521[1], 0, i520, 'm_FirstSelected')
  i520.m_sendNavigationEvents = !!i521[2]
  i520.m_DragThreshold = i521[3]
  return i520
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i523 = data
  i522.m_HorizontalAxis = i523[0]
  i522.m_VerticalAxis = i523[1]
  i522.m_SubmitButton = i523[2]
  i522.m_CancelButton = i523[3]
  i522.m_InputActionsPerSecond = i523[4]
  i522.m_RepeatDelay = i523[5]
  i522.m_ForceModuleActive = !!i523[6]
  i522.m_SendPointerHoverToParent = !!i523[7]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i525 = data
  i524.pivot = new pc.Vec2( i525[0], i525[1] )
  i524.anchorMin = new pc.Vec2( i525[2], i525[3] )
  i524.anchorMax = new pc.Vec2( i525[4], i525[5] )
  i524.sizeDelta = new pc.Vec2( i525[6], i525[7] )
  i524.anchoredPosition3D = new pc.Vec3( i525[8], i525[9], i525[10] )
  i524.rotation = new pc.Quat(i525[11], i525[12], i525[13], i525[14])
  i524.scale = new pc.Vec3( i525[15], i525[16], i525[17] )
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i527 = data
  i526.enabled = !!i527[0]
  i526.planeDistance = i527[1]
  i526.referencePixelsPerUnit = i527[2]
  i526.isFallbackOverlay = !!i527[3]
  i526.renderMode = i527[4]
  i526.renderOrder = i527[5]
  i526.sortingLayerName = i527[6]
  i526.sortingOrder = i527[7]
  i526.scaleFactor = i527[8]
  request.r(i527[9], i527[10], 0, i526, 'worldCamera')
  i526.overrideSorting = !!i527[11]
  i526.pixelPerfect = !!i527[12]
  i526.targetDisplay = i527[13]
  i526.overridePixelPerfect = !!i527[14]
  return i526
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i529 = data
  i528.m_UiScaleMode = i529[0]
  i528.m_ReferencePixelsPerUnit = i529[1]
  i528.m_ScaleFactor = i529[2]
  i528.m_ReferenceResolution = new pc.Vec2( i529[3], i529[4] )
  i528.m_ScreenMatchMode = i529[5]
  i528.m_MatchWidthOrHeight = i529[6]
  i528.m_PhysicalUnit = i529[7]
  i528.m_FallbackScreenDPI = i529[8]
  i528.m_DefaultSpriteDPI = i529[9]
  i528.m_DynamicPixelsPerUnit = i529[10]
  i528.m_PresetInfoIsWorld = !!i529[11]
  return i528
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i531 = data
  i530.m_IgnoreReversedGraphics = !!i531[0]
  i530.m_BlockingObjects = i531[1]
  i530.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i531[2] )
  return i530
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i532 = root || request.c( 'LunaManager' )
  var i533 = data
  var i535 = i533[0]
  var i534 = []
  for(var i = 0; i < i535.length; i += 2) {
  request.r(i535[i + 0], i535[i + 1], 2, i534, '')
  }
  i532.lstBtnInstall = i534
  request.r(i533[1], i533[2], 0, i532, 'EndCard')
  i532.countPlay = i533[3]
  i532.countPlayFinal = i533[4]
  i532.timeDropFinal = i533[5]
  i532.colorBG = new pc.Color(i533[6], i533[7], i533[8], i533[9])
  request.r(i533[10], i533[11], 0, i532, 'texture2D')
  request.r(i533[12], i533[13], 0, i532, 'rawImageBG')
  request.r(i533[14], i533[15], 0, i532, 'hand')
  request.r(i533[16], i533[17], 0, i532, 'textProgess')
  request.r(i533[18], i533[19], 0, i532, 'imgProgess')
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i539 = data
  i538.cullTransparentMesh = !!i539[0]
  return i538
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'm_Texture')
  i540.m_UVRect = UnityEngine.Rect.MinMaxRect(i541[2], i541[3], i541[4], i541[5])
  request.r(i541[6], i541[7], 0, i540, 'm_Material')
  i540.m_Maskable = !!i541[8]
  i540.m_Color = new pc.Color(i541[9], i541[10], i541[11], i541[12])
  i540.m_RaycastTarget = !!i541[13]
  i540.m_RaycastPadding = new pc.Vec4( i541[14], i541[15], i541[16], i541[17] )
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'clip')
  request.r(i543[2], i543[3], 0, i542, 'outputAudioMixerGroup')
  i542.playOnAwake = !!i543[4]
  i542.loop = !!i543[5]
  i542.time = i543[6]
  i542.volume = i543[7]
  i542.pitch = i543[8]
  i542.enabled = !!i543[9]
  return i542
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.UI.Image' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'm_Sprite')
  i544.m_Type = i545[2]
  i544.m_PreserveAspect = !!i545[3]
  i544.m_FillCenter = !!i545[4]
  i544.m_FillMethod = i545[5]
  i544.m_FillAmount = i545[6]
  i544.m_FillClockwise = !!i545[7]
  i544.m_FillOrigin = i545[8]
  i544.m_UseSpriteMesh = !!i545[9]
  i544.m_PixelsPerUnitMultiplier = i545[10]
  request.r(i545[11], i545[12], 0, i544, 'm_Material')
  i544.m_Maskable = !!i545[13]
  i544.m_Color = new pc.Color(i545[14], i545[15], i545[16], i545[17])
  i544.m_RaycastTarget = !!i545[18]
  i544.m_RaycastPadding = new pc.Vec4( i545[19], i545[20], i545[21], i545[22] )
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i547 = data
  i546.usedByComposite = !!i547[0]
  i546.autoTiling = !!i547[1]
  i546.size = new pc.Vec2( i547[2], i547[3] )
  i546.edgeRadius = i547[4]
  i546.enabled = !!i547[5]
  i546.isTrigger = !!i547[6]
  i546.usedByEffector = !!i547[7]
  i546.density = i547[8]
  i546.offset = new pc.Vec2( i547[9], i547[10] )
  request.r(i547[11], i547[12], 0, i546, 'material')
  return i546
}

Deserializers["DropZone"] = function (request, data, root) {
  var i548 = root || request.c( 'DropZone' )
  var i549 = data
  i548.idDrop = i549[0]
  var i551 = i549[1]
  var i550 = []
  for(var i = 0; i < i551.length; i += 2) {
  request.r(i551[i + 0], i551[i + 1], 2, i550, '')
  }
  i548.steps = i550
  i548.isDontWork = !!i549[2]
  return i548
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i554 = root || request.c( 'DraggableItem' )
  var i555 = data
  i554.idDrag = i555[0]
  request.r(i555[1], i555[2], 0, i554, 'handObj')
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i557 = data
  i556.m_Alpha = i557[0]
  i556.m_Interactable = !!i557[1]
  i556.m_BlocksRaycasts = !!i557[2]
  i556.m_IgnoreParentGroups = !!i557[3]
  i556.enabled = !!i557[4]
  return i556
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i558 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'skeletonDataAsset')
  request.r(i559[2], i559[3], 0, i558, 'additiveMaterial')
  request.r(i559[4], i559[5], 0, i558, 'multiplyMaterial')
  request.r(i559[6], i559[7], 0, i558, 'screenMaterial')
  i558.initialSkinName = i559[8]
  i558.initialFlipX = !!i559[9]
  i558.initialFlipY = !!i559[10]
  i558.startingAnimation = i559[11]
  i558.startingLoop = !!i559[12]
  i558.timeScale = i559[13]
  i558.freeze = !!i559[14]
  i558.layoutScaleMode = i559[15]
  i558.updateWhenInvisible = i559[16]
  i558.allowMultipleCanvasRenderers = !!i559[17]
  var i561 = i559[18]
  var i560 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i561.length; i += 2) {
  request.r(i561[i + 0], i561[i + 1], 1, i560, '')
  }
  i558.canvasRenderers = i560
  i558.enableSeparatorSlots = !!i559[19]
  i558.updateSeparatorPartLocation = !!i559[20]
  i558.updateSeparatorPartScale = !!i559[21]
  i558.disableMeshAssignmentOnOverride = !!i559[22]
  i558.referenceSize = new pc.Vec2( i559[23], i559[24] )
  i558.referenceScale = i559[25]
  i558.rectTransformSize = new pc.Vec2( i559[26], i559[27] )
  i558.editReferenceRect = !!i559[28]
  var i563 = i559[29]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( i563[i + 0] );
  }
  i558.separatorSlotNames = i562
  var i565 = i559[30]
  var i564 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i565.length; i += 2) {
  request.r(i565[i + 0], i565[i + 1], 1, i564, '')
  }
  i558.separatorParts = i564
  i558.meshGenerator = request.d('Spine.Unity.MeshGenerator', i559[31], i558.meshGenerator)
  i558.updateTiming = i559[32]
  i558.unscaledTime = !!i559[33]
  request.r(i559[34], i559[35], 0, i558, 'm_Material')
  i558.m_Maskable = !!i559[36]
  i558.m_Color = new pc.Color(i559[37], i559[38], i559[39], i559[40])
  i558.m_RaycastTarget = !!i559[41]
  i558.m_RaycastPadding = new pc.Vec4( i559[42], i559[43], i559[44], i559[45] )
  return i558
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i572 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i573 = data
  i572.settings = request.d('Spine.Unity.MeshGenerator+Settings', i573[0], i572.settings)
  return i572
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i574 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i575 = data
  i574.useClipping = !!i575[0]
  i574.zSpacing = i575[1]
  i574.pmaVertexColors = !!i575[2]
  i574.tintBlack = !!i575[3]
  i574.canvasGroupTintBlack = !!i575[4]
  i574.calculateTangents = !!i575[5]
  i574.addNormals = !!i575[6]
  i574.immutableTriangles = !!i575[7]
  return i574
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i576 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i577 = data
  i576.targetIsSelf = !!i577[0]
  request.r(i577[1], i577[2], 0, i576, 'targetGO')
  i576.tweenTargetIsTargetGO = !!i577[3]
  i576.delay = i577[4]
  i576.duration = i577[5]
  i576.easeType = i577[6]
  i576.easeCurve = new pc.AnimationCurve( { keys_flow: i577[7] } )
  i576.loopType = i577[8]
  i576.loops = i577[9]
  i576.id = i577[10]
  i576.isRelative = !!i577[11]
  i576.isFrom = !!i577[12]
  i576.isIndependentUpdate = !!i577[13]
  i576.autoKill = !!i577[14]
  i576.autoGenerate = !!i577[15]
  i576.isActive = !!i577[16]
  i576.isValid = !!i577[17]
  request.r(i577[18], i577[19], 0, i576, 'target')
  i576.animationType = i577[20]
  i576.targetType = i577[21]
  i576.forcedTargetType = i577[22]
  i576.autoPlay = !!i577[23]
  i576.useTargetAsV3 = !!i577[24]
  i576.endValueFloat = i577[25]
  i576.endValueV3 = new pc.Vec3( i577[26], i577[27], i577[28] )
  i576.endValueV2 = new pc.Vec2( i577[29], i577[30] )
  i576.endValueColor = new pc.Color(i577[31], i577[32], i577[33], i577[34])
  i576.endValueString = i577[35]
  i576.endValueRect = UnityEngine.Rect.MinMaxRect(i577[36], i577[37], i577[38], i577[39])
  request.r(i577[40], i577[41], 0, i576, 'endValueTransform')
  i576.optionalBool0 = !!i577[42]
  i576.optionalBool1 = !!i577[43]
  i576.optionalFloat0 = i577[44]
  i576.optionalInt0 = i577[45]
  i576.optionalRotationMode = i577[46]
  i576.optionalScrambleMode = i577[47]
  i576.optionalShakeRandomnessMode = i577[48]
  i576.optionalString = i577[49]
  i576.updateType = i577[50]
  i576.isSpeedBased = !!i577[51]
  i576.hasOnStart = !!i577[52]
  i576.hasOnPlay = !!i577[53]
  i576.hasOnUpdate = !!i577[54]
  i576.hasOnStepComplete = !!i577[55]
  i576.hasOnComplete = !!i577[56]
  i576.hasOnTweenCreated = !!i577[57]
  i576.hasOnRewind = !!i577[58]
  i576.onStart = request.d('UnityEngine.Events.UnityEvent', i577[59], i576.onStart)
  i576.onPlay = request.d('UnityEngine.Events.UnityEvent', i577[60], i576.onPlay)
  i576.onUpdate = request.d('UnityEngine.Events.UnityEvent', i577[61], i576.onUpdate)
  i576.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i577[62], i576.onStepComplete)
  i576.onComplete = request.d('UnityEngine.Events.UnityEvent', i577[63], i576.onComplete)
  i576.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i577[64], i576.onTweenCreated)
  i576.onRewind = request.d('UnityEngine.Events.UnityEvent', i577[65], i576.onRewind)
  return i576
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i579 = data
  i578.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i579[0], i578.m_PersistentCalls)
  return i578
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i581 = data
  var i583 = i581[0]
  var i582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i583.length; i += 1) {
    i582.add(request.d('UnityEngine.Events.PersistentCall', i583[i + 0]));
  }
  i580.m_Calls = i582
  return i580
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'm_Target')
  i586.m_TargetAssemblyTypeName = i587[2]
  i586.m_MethodName = i587[3]
  i586.m_Mode = i587[4]
  i586.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i587[5], i586.m_Arguments)
  i586.m_CallState = i587[6]
  return i586
}

Deserializers["Box"] = function (request, data, root) {
  var i588 = root || request.c( 'Box' )
  var i589 = data
  var i591 = i589[0]
  var i590 = []
  for(var i = 0; i < i591.length; i += 2) {
  request.r(i591[i + 0], i591[i + 1], 2, i590, '')
  }
  i588.items = i590
  i588.animationDuration = i589[1]
  return i588
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.Button' )
  var i593 = data
  i592.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i593[0], i592.m_OnClick)
  i592.m_Navigation = request.d('UnityEngine.UI.Navigation', i593[1], i592.m_Navigation)
  i592.m_Transition = i593[2]
  i592.m_Colors = request.d('UnityEngine.UI.ColorBlock', i593[3], i592.m_Colors)
  i592.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i593[4], i592.m_SpriteState)
  i592.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i593[5], i592.m_AnimationTriggers)
  i592.m_Interactable = !!i593[6]
  request.r(i593[7], i593[8], 0, i592, 'm_TargetGraphic')
  return i592
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i595 = data
  i594.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i595[0], i594.m_PersistentCalls)
  return i594
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'm_ObjectArgument')
  i596.m_ObjectArgumentAssemblyTypeName = i597[2]
  i596.m_IntArgument = i597[3]
  i596.m_FloatArgument = i597[4]
  i596.m_StringArgument = i597[5]
  i596.m_BoolArgument = !!i597[6]
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

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i606 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i607 = data
  i606.m_hasFontAssetChanged = !!i607[0]
  request.r(i607[1], i607[2], 0, i606, 'm_baseMaterial')
  i606.m_maskOffset = new pc.Vec4( i607[3], i607[4], i607[5], i607[6] )
  i606.m_text = i607[7]
  i606.m_isRightToLeft = !!i607[8]
  request.r(i607[9], i607[10], 0, i606, 'm_fontAsset')
  request.r(i607[11], i607[12], 0, i606, 'm_sharedMaterial')
  var i609 = i607[13]
  var i608 = []
  for(var i = 0; i < i609.length; i += 2) {
  request.r(i609[i + 0], i609[i + 1], 2, i608, '')
  }
  i606.m_fontSharedMaterials = i608
  request.r(i607[14], i607[15], 0, i606, 'm_fontMaterial')
  var i611 = i607[16]
  var i610 = []
  for(var i = 0; i < i611.length; i += 2) {
  request.r(i611[i + 0], i611[i + 1], 2, i610, '')
  }
  i606.m_fontMaterials = i610
  i606.m_fontColor32 = UnityEngine.Color32.ConstructColor(i607[17], i607[18], i607[19], i607[20])
  i606.m_fontColor = new pc.Color(i607[21], i607[22], i607[23], i607[24])
  i606.m_enableVertexGradient = !!i607[25]
  i606.m_colorMode = i607[26]
  i606.m_fontColorGradient = request.d('TMPro.VertexGradient', i607[27], i606.m_fontColorGradient)
  request.r(i607[28], i607[29], 0, i606, 'm_fontColorGradientPreset')
  request.r(i607[30], i607[31], 0, i606, 'm_spriteAsset')
  i606.m_tintAllSprites = !!i607[32]
  request.r(i607[33], i607[34], 0, i606, 'm_StyleSheet')
  i606.m_TextStyleHashCode = i607[35]
  i606.m_overrideHtmlColors = !!i607[36]
  i606.m_faceColor = UnityEngine.Color32.ConstructColor(i607[37], i607[38], i607[39], i607[40])
  i606.m_fontSize = i607[41]
  i606.m_fontSizeBase = i607[42]
  i606.m_fontWeight = i607[43]
  i606.m_enableAutoSizing = !!i607[44]
  i606.m_fontSizeMin = i607[45]
  i606.m_fontSizeMax = i607[46]
  i606.m_fontStyle = i607[47]
  i606.m_HorizontalAlignment = i607[48]
  i606.m_VerticalAlignment = i607[49]
  i606.m_textAlignment = i607[50]
  i606.m_characterSpacing = i607[51]
  i606.m_wordSpacing = i607[52]
  i606.m_lineSpacing = i607[53]
  i606.m_lineSpacingMax = i607[54]
  i606.m_paragraphSpacing = i607[55]
  i606.m_charWidthMaxAdj = i607[56]
  i606.m_enableWordWrapping = !!i607[57]
  i606.m_wordWrappingRatios = i607[58]
  i606.m_overflowMode = i607[59]
  request.r(i607[60], i607[61], 0, i606, 'm_linkedTextComponent')
  request.r(i607[62], i607[63], 0, i606, 'parentLinkedComponent')
  i606.m_enableKerning = !!i607[64]
  i606.m_enableExtraPadding = !!i607[65]
  i606.checkPaddingRequired = !!i607[66]
  i606.m_isRichText = !!i607[67]
  i606.m_parseCtrlCharacters = !!i607[68]
  i606.m_isOrthographic = !!i607[69]
  i606.m_isCullingEnabled = !!i607[70]
  i606.m_horizontalMapping = i607[71]
  i606.m_verticalMapping = i607[72]
  i606.m_uvLineOffset = i607[73]
  i606.m_geometrySortingOrder = i607[74]
  i606.m_IsTextObjectScaleStatic = !!i607[75]
  i606.m_VertexBufferAutoSizeReduction = !!i607[76]
  i606.m_useMaxVisibleDescender = !!i607[77]
  i606.m_pageToDisplay = i607[78]
  i606.m_margin = new pc.Vec4( i607[79], i607[80], i607[81], i607[82] )
  i606.m_isUsingLegacyAnimationComponent = !!i607[83]
  i606.m_isVolumetricText = !!i607[84]
  request.r(i607[85], i607[86], 0, i606, 'm_Material')
  i606.m_Maskable = !!i607[87]
  i606.m_Color = new pc.Color(i607[88], i607[89], i607[90], i607[91])
  i606.m_RaycastTarget = !!i607[92]
  i606.m_RaycastPadding = new pc.Vec4( i607[93], i607[94], i607[95], i607[96] )
  return i606
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i614 = root || request.c( 'TMPro.VertexGradient' )
  var i615 = data
  i614.topLeft = new pc.Color(i615[0], i615[1], i615[2], i615[3])
  i614.topRight = new pc.Color(i615[4], i615[5], i615[6], i615[7])
  i614.bottomLeft = new pc.Color(i615[8], i615[9], i615[10], i615[11])
  i614.bottomRight = new pc.Color(i615[12], i615[13], i615[14], i615[15])
  return i614
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.Mask' )
  var i617 = data
  i616.m_ShowMaskGraphic = !!i617[0]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i619 = data
  i618.ambientIntensity = i619[0]
  i618.reflectionIntensity = i619[1]
  i618.ambientMode = i619[2]
  i618.ambientLight = new pc.Color(i619[3], i619[4], i619[5], i619[6])
  i618.ambientSkyColor = new pc.Color(i619[7], i619[8], i619[9], i619[10])
  i618.ambientGroundColor = new pc.Color(i619[11], i619[12], i619[13], i619[14])
  i618.ambientEquatorColor = new pc.Color(i619[15], i619[16], i619[17], i619[18])
  i618.fogColor = new pc.Color(i619[19], i619[20], i619[21], i619[22])
  i618.fogEndDistance = i619[23]
  i618.fogStartDistance = i619[24]
  i618.fogDensity = i619[25]
  i618.fog = !!i619[26]
  request.r(i619[27], i619[28], 0, i618, 'skybox')
  i618.fogMode = i619[29]
  var i621 = i619[30]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i621[i + 0]) );
  }
  i618.lightmaps = i620
  i618.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i619[31], i618.lightProbes)
  i618.lightmapsMode = i619[32]
  i618.mixedBakeMode = i619[33]
  i618.environmentLightingMode = i619[34]
  i618.ambientProbe = new pc.SphericalHarmonicsL2(i619[35])
  i618.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i619[36])
  i618.useReferenceAmbientProbe = !!i619[37]
  request.r(i619[38], i619[39], 0, i618, 'customReflection')
  request.r(i619[40], i619[41], 0, i618, 'defaultReflection')
  i618.defaultReflectionMode = i619[42]
  i618.defaultReflectionResolution = i619[43]
  i618.sunLightObjectId = i619[44]
  i618.pixelLightCount = i619[45]
  i618.defaultReflectionHDR = !!i619[46]
  i618.hasLightDataAsset = !!i619[47]
  i618.hasManualGenerate = !!i619[48]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'lightmapColor')
  request.r(i625[2], i625[3], 0, i624, 'lightmapDirection')
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i626 = root || new UnityEngine.LightProbes()
  var i627 = data
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i635 = data
  var i637 = i635[0]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i637.length; i += 1) {
    i636.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i637[i + 0]));
  }
  i634.ShaderCompilationErrors = i636
  i634.name = i635[1]
  i634.guid = i635[2]
  var i639 = i635[3]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( i639[i + 0] );
  }
  i634.shaderDefinedKeywords = i638
  var i641 = i635[4]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i641[i + 0]) );
  }
  i634.passes = i640
  var i643 = i635[5]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i643[i + 0]) );
  }
  i634.usePasses = i642
  var i645 = i635[6]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i645[i + 0]) );
  }
  i634.defaultParameterValues = i644
  request.r(i635[7], i635[8], 0, i634, 'unityFallbackShader')
  i634.readDepth = !!i635[9]
  i634.isCreatedByShaderGraph = !!i635[10]
  i634.usedBatchUniforms = i635[11]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i649 = data
  i648.shaderName = i649[0]
  i648.errorMessage = i649[1]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i652 = root || new pc.UnityShaderPass()
  var i653 = data
  i652.id = i653[0]
  i652.subShaderIndex = i653[1]
  i652.name = i653[2]
  i652.passType = i653[3]
  i652.grabPassTextureName = i653[4]
  i652.usePass = !!i653[5]
  i652.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i653[6], i652.zTest)
  i652.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i653[7], i652.zWrite)
  i652.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i653[8], i652.culling)
  i652.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i653[9], i652.blending)
  i652.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i653[10], i652.alphaBlending)
  i652.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i653[11], i652.colorWriteMask)
  i652.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i653[12], i652.offsetUnits)
  i652.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i653[13], i652.offsetFactor)
  i652.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i653[14], i652.stencilRef)
  i652.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i653[15], i652.stencilReadMask)
  i652.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i653[16], i652.stencilWriteMask)
  i652.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i653[17], i652.stencilOp)
  i652.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i653[18], i652.stencilOpFront)
  i652.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i653[19], i652.stencilOpBack)
  var i655 = i653[20]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i655[i + 0]) );
  }
  i652.tags = i654
  var i657 = i653[21]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( i657[i + 0] );
  }
  i652.passDefinedKeywords = i656
  var i659 = i653[22]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i659[i + 0]) );
  }
  i652.passDefinedKeywordGroups = i658
  var i661 = i653[23]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i661[i + 0]) );
  }
  i652.variants = i660
  var i663 = i653[24]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i663[i + 0]) );
  }
  i652.excludedVariants = i662
  i652.hasDepthReader = !!i653[25]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i665 = data
  i664.val = i665[0]
  i664.name = i665[1]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i667 = data
  i666.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[0], i666.src)
  i666.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[1], i666.dst)
  i666.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[2], i666.op)
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i669 = data
  i668.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[0], i668.pass)
  i668.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[1], i668.fail)
  i668.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[2], i668.zFail)
  i668.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[3], i668.comp)
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i673 = data
  i672.name = i673[0]
  i672.value = i673[1]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i677 = data
  var i679 = i677[0]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( i679[i + 0] );
  }
  i676.keywords = i678
  i676.hasDiscard = !!i677[1]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i683 = data
  i682.passId = i683[0]
  i682.subShaderIndex = i683[1]
  var i685 = i683[2]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( i685[i + 0] );
  }
  i682.keywords = i684
  i682.vertexProgram = i683[3]
  i682.fragmentProgram = i683[4]
  i682.compiledForWebGL2 = !!i683[5]
  i682.readDepth = !!i683[6]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'shader')
  i688.pass = i689[2]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i693 = data
  i692.name = i693[0]
  i692.type = i693[1]
  i692.value = new pc.Vec4( i693[2], i693[3], i693[4], i693[5] )
  i692.textureValue = i693[6]
  i692.shaderPropertyFlag = i693[7]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i695 = data
  i694.name = i695[0]
  request.r(i695[1], i695[2], 0, i694, 'texture')
  i694.aabb = i695[3]
  i694.vertices = i695[4]
  i694.triangles = i695[5]
  i694.textureRect = UnityEngine.Rect.MinMaxRect(i695[6], i695[7], i695[8], i695[9])
  i694.packedRect = UnityEngine.Rect.MinMaxRect(i695[10], i695[11], i695[12], i695[13])
  i694.border = new pc.Vec4( i695[14], i695[15], i695[16], i695[17] )
  i694.transparency = i695[18]
  i694.bounds = i695[19]
  i694.pixelsPerUnit = i695[20]
  i694.textureWidth = i695[21]
  i694.textureHeight = i695[22]
  i694.nativeSize = new pc.Vec2( i695[23], i695[24] )
  i694.pivot = new pc.Vec2( i695[25], i695[26] )
  i694.textureRectOffset = new pc.Vec2( i695[27], i695[28] )
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i697 = data
  i696.name = i697[0]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i699 = data
  i698.name = i699[0]
  i698.ascent = i699[1]
  i698.originalLineHeight = i699[2]
  i698.fontSize = i699[3]
  var i701 = i699[4]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i701[i + 0]) );
  }
  i698.characterInfo = i700
  request.r(i699[5], i699[6], 0, i698, 'texture')
  i698.originalFontSize = i699[7]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i705 = data
  i704.index = i705[0]
  i704.advance = i705[1]
  i704.bearing = i705[2]
  i704.glyphWidth = i705[3]
  i704.glyphHeight = i705[4]
  i704.minX = i705[5]
  i704.maxX = i705[6]
  i704.minY = i705[7]
  i704.maxY = i705[8]
  i704.uvBottomLeftX = i705[9]
  i704.uvBottomLeftY = i705[10]
  i704.uvBottomRightX = i705[11]
  i704.uvBottomRightY = i705[12]
  i704.uvTopLeftX = i705[13]
  i704.uvTopLeftY = i705[14]
  i704.uvTopRightX = i705[15]
  i704.uvTopRightY = i705[16]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i707 = data
  i706.name = i707[0]
  i706.bytes64 = i707[1]
  i706.data = i707[2]
  return i706
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i708 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i709 = data
  var i711 = i709[0]
  var i710 = []
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 2, i710, '')
  }
  i708.atlasAssets = i710
  i708.scale = i709[1]
  request.r(i709[2], i709[3], 0, i708, 'skeletonJSON')
  i708.isUpgradingBlendModeMaterials = !!i709[4]
  i708.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i709[5], i708.blendModeMaterials)
  var i713 = i709[6]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 1, i712, '')
  }
  i708.skeletonDataModifiers = i712
  var i715 = i709[7]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( i715[i + 0] );
  }
  i708.fromAnimation = i714
  var i717 = i709[8]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( i717[i + 0] );
  }
  i708.toAnimation = i716
  i708.duration = i709[9]
  i708.defaultMix = i709[10]
  request.r(i709[11], i709[12], 0, i708, 'controller')
  return i708
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i720 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i721 = data
  i720.applyAdditiveMaterial = !!i721[0]
  var i723 = i721[1]
  var i722 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i723.length; i += 1) {
    i722.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i723[i + 0]));
  }
  i720.additiveMaterials = i722
  var i725 = i721[2]
  var i724 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i725.length; i += 1) {
    i724.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i725[i + 0]));
  }
  i720.multiplyMaterials = i724
  var i727 = i721[3]
  var i726 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i727.length; i += 1) {
    i726.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i727[i + 0]));
  }
  i720.screenMaterials = i726
  i720.requiresBlendModeMaterials = !!i721[4]
  return i720
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i730 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i731 = data
  i730.pageName = i731[0]
  request.r(i731[1], i731[2], 0, i730, 'material')
  return i730
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i734 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'atlasFile')
  var i737 = i735[2]
  var i736 = []
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 2, i736, '')
  }
  i734.materials = i736
  i734.textureLoadingMode = i735[3]
  request.r(i735[4], i735[5], 0, i734, 'onDemandTextureLoader')
  return i734
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i738 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i739 = data
  i738.hashCode = i739[0]
  request.r(i739[1], i739[2], 0, i738, 'material')
  i738.materialHashCode = i739[3]
  request.r(i739[4], i739[5], 0, i738, 'atlas')
  i738.normalStyle = i739[6]
  i738.normalSpacingOffset = i739[7]
  i738.boldStyle = i739[8]
  i738.boldSpacing = i739[9]
  i738.italicStyle = i739[10]
  i738.tabSize = i739[11]
  i738.m_Version = i739[12]
  i738.m_SourceFontFileGUID = i739[13]
  request.r(i739[14], i739[15], 0, i738, 'm_SourceFontFile_EditorRef')
  request.r(i739[16], i739[17], 0, i738, 'm_SourceFontFile')
  i738.m_AtlasPopulationMode = i739[18]
  i738.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i739[19], i738.m_FaceInfo)
  var i741 = i739[20]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i741.length; i += 1) {
    i740.add(request.d('UnityEngine.TextCore.Glyph', i741[i + 0]));
  }
  i738.m_GlyphTable = i740
  var i743 = i739[21]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i743.length; i += 1) {
    i742.add(request.d('TMPro.TMP_Character', i743[i + 0]));
  }
  i738.m_CharacterTable = i742
  var i745 = i739[22]
  var i744 = []
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 2, i744, '')
  }
  i738.m_AtlasTextures = i744
  i738.m_AtlasTextureIndex = i739[23]
  i738.m_IsMultiAtlasTexturesEnabled = !!i739[24]
  i738.m_ClearDynamicDataOnBuild = !!i739[25]
  var i747 = i739[26]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i747.length; i += 1) {
    i746.add(request.d('UnityEngine.TextCore.GlyphRect', i747[i + 0]));
  }
  i738.m_UsedGlyphRects = i746
  var i749 = i739[27]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i749.length; i += 1) {
    i748.add(request.d('UnityEngine.TextCore.GlyphRect', i749[i + 0]));
  }
  i738.m_FreeGlyphRects = i748
  i738.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i739[28], i738.m_fontInfo)
  i738.m_AtlasWidth = i739[29]
  i738.m_AtlasHeight = i739[30]
  i738.m_AtlasPadding = i739[31]
  i738.m_AtlasRenderMode = i739[32]
  var i751 = i739[33]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i751.length; i += 1) {
    i750.add(request.d('TMPro.TMP_Glyph', i751[i + 0]));
  }
  i738.m_glyphInfoList = i750
  i738.m_KerningTable = request.d('TMPro.KerningTable', i739[34], i738.m_KerningTable)
  i738.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i739[35], i738.m_FontFeatureTable)
  var i753 = i739[36]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 1, i752, '')
  }
  i738.fallbackFontAssets = i752
  var i755 = i739[37]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 1, i754, '')
  }
  i738.m_FallbackFontAssetTable = i754
  i738.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i739[38], i738.m_CreationSettings)
  var i757 = i739[39]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('TMPro.TMP_FontWeightPair', i757[i + 0]) );
  }
  i738.m_FontWeightTable = i756
  var i759 = i739[40]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('TMPro.TMP_FontWeightPair', i759[i + 0]) );
  }
  i738.fontWeights = i758
  return i738
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i761 = data
  i760.m_FaceIndex = i761[0]
  i760.m_FamilyName = i761[1]
  i760.m_StyleName = i761[2]
  i760.m_PointSize = i761[3]
  i760.m_Scale = i761[4]
  i760.m_UnitsPerEM = i761[5]
  i760.m_LineHeight = i761[6]
  i760.m_AscentLine = i761[7]
  i760.m_CapLine = i761[8]
  i760.m_MeanLine = i761[9]
  i760.m_Baseline = i761[10]
  i760.m_DescentLine = i761[11]
  i760.m_SuperscriptOffset = i761[12]
  i760.m_SuperscriptSize = i761[13]
  i760.m_SubscriptOffset = i761[14]
  i760.m_SubscriptSize = i761[15]
  i760.m_UnderlineOffset = i761[16]
  i760.m_UnderlineThickness = i761[17]
  i760.m_StrikethroughOffset = i761[18]
  i760.m_StrikethroughThickness = i761[19]
  i760.m_TabWidth = i761[20]
  return i760
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i765 = data
  i764.m_Index = i765[0]
  i764.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i765[1], i764.m_Metrics)
  i764.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i765[2], i764.m_GlyphRect)
  i764.m_Scale = i765[3]
  i764.m_AtlasIndex = i765[4]
  i764.m_ClassDefinitionType = i765[5]
  return i764
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i767 = data
  i766.m_Width = i767[0]
  i766.m_Height = i767[1]
  i766.m_HorizontalBearingX = i767[2]
  i766.m_HorizontalBearingY = i767[3]
  i766.m_HorizontalAdvance = i767[4]
  return i766
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i769 = data
  i768.m_X = i769[0]
  i768.m_Y = i769[1]
  i768.m_Width = i769[2]
  i768.m_Height = i769[3]
  return i768
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i772 = root || request.c( 'TMPro.TMP_Character' )
  var i773 = data
  i772.m_ElementType = i773[0]
  i772.m_Unicode = i773[1]
  i772.m_GlyphIndex = i773[2]
  i772.m_Scale = i773[3]
  return i772
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i778 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i779 = data
  i778.Name = i779[0]
  i778.PointSize = i779[1]
  i778.Scale = i779[2]
  i778.CharacterCount = i779[3]
  i778.LineHeight = i779[4]
  i778.Baseline = i779[5]
  i778.Ascender = i779[6]
  i778.CapHeight = i779[7]
  i778.Descender = i779[8]
  i778.CenterLine = i779[9]
  i778.SuperscriptOffset = i779[10]
  i778.SubscriptOffset = i779[11]
  i778.SubSize = i779[12]
  i778.Underline = i779[13]
  i778.UnderlineThickness = i779[14]
  i778.strikethrough = i779[15]
  i778.strikethroughThickness = i779[16]
  i778.TabWidth = i779[17]
  i778.Padding = i779[18]
  i778.AtlasWidth = i779[19]
  i778.AtlasHeight = i779[20]
  return i778
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i782 = root || request.c( 'TMPro.TMP_Glyph' )
  var i783 = data
  i782.id = i783[0]
  i782.x = i783[1]
  i782.y = i783[2]
  i782.width = i783[3]
  i782.height = i783[4]
  i782.xOffset = i783[5]
  i782.yOffset = i783[6]
  i782.xAdvance = i783[7]
  i782.scale = i783[8]
  return i782
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i784 = root || request.c( 'TMPro.KerningTable' )
  var i785 = data
  var i787 = i785[0]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(request.d('TMPro.KerningPair', i787[i + 0]));
  }
  i784.kerningPairs = i786
  return i784
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i790 = root || request.c( 'TMPro.KerningPair' )
  var i791 = data
  i790.xOffset = i791[0]
  i790.m_FirstGlyph = i791[1]
  i790.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i791[2], i790.m_FirstGlyphAdjustments)
  i790.m_SecondGlyph = i791[3]
  i790.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i791[4], i790.m_SecondGlyphAdjustments)
  i790.m_IgnoreSpacingAdjustments = !!i791[5]
  return i790
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i792 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i793 = data
  var i795 = i793[0]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i795.length; i += 1) {
    i794.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i795[i + 0]));
  }
  i792.m_GlyphPairAdjustmentRecords = i794
  return i792
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i798 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i799 = data
  i798.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i799[0], i798.m_FirstAdjustmentRecord)
  i798.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i799[1], i798.m_SecondAdjustmentRecord)
  i798.m_FeatureLookupFlags = i799[2]
  return i798
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i802 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i803 = data
  i802.sourceFontFileName = i803[0]
  i802.sourceFontFileGUID = i803[1]
  i802.pointSizeSamplingMode = i803[2]
  i802.pointSize = i803[3]
  i802.padding = i803[4]
  i802.packingMode = i803[5]
  i802.atlasWidth = i803[6]
  i802.atlasHeight = i803[7]
  i802.characterSetSelectionMode = i803[8]
  i802.characterSequence = i803[9]
  i802.referencedFontAssetGUID = i803[10]
  i802.referencedTextAssetGUID = i803[11]
  i802.fontStyle = i803[12]
  i802.fontStyleModifier = i803[13]
  i802.renderMode = i803[14]
  i802.includeFontFeatures = !!i803[15]
  return i802
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i806 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'regularTypeface')
  request.r(i807[2], i807[3], 0, i806, 'italicTypeface')
  return i806
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i808 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i809 = data
  i808.useSafeMode = !!i809[0]
  i808.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i809[1], i808.safeModeOptions)
  i808.timeScale = i809[2]
  i808.unscaledTimeScale = i809[3]
  i808.useSmoothDeltaTime = !!i809[4]
  i808.maxSmoothUnscaledTime = i809[5]
  i808.rewindCallbackMode = i809[6]
  i808.showUnityEditorReport = !!i809[7]
  i808.logBehaviour = i809[8]
  i808.drawGizmos = !!i809[9]
  i808.defaultRecyclable = !!i809[10]
  i808.defaultAutoPlay = i809[11]
  i808.defaultUpdateType = i809[12]
  i808.defaultTimeScaleIndependent = !!i809[13]
  i808.defaultEaseType = i809[14]
  i808.defaultEaseOvershootOrAmplitude = i809[15]
  i808.defaultEasePeriod = i809[16]
  i808.defaultAutoKill = !!i809[17]
  i808.defaultLoopType = i809[18]
  i808.debugMode = !!i809[19]
  i808.debugStoreTargetId = !!i809[20]
  i808.showPreviewPanel = !!i809[21]
  i808.storeSettingsLocation = i809[22]
  i808.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i809[23], i808.modules)
  i808.createASMDEF = !!i809[24]
  i808.showPlayingTweens = !!i809[25]
  i808.showPausedTweens = !!i809[26]
  return i808
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i810 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i811 = data
  i810.logBehaviour = i811[0]
  i810.nestedTweenFailureBehaviour = i811[1]
  return i810
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i812 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i813 = data
  i812.showPanel = !!i813[0]
  i812.audioEnabled = !!i813[1]
  i812.physicsEnabled = !!i813[2]
  i812.physics2DEnabled = !!i813[3]
  i812.spriteEnabled = !!i813[4]
  i812.uiEnabled = !!i813[5]
  i812.textMeshProEnabled = !!i813[6]
  i812.tk2DEnabled = !!i813[7]
  i812.deAudioEnabled = !!i813[8]
  i812.deUnityExtendedEnabled = !!i813[9]
  i812.epoOutlineEnabled = !!i813[10]
  return i812
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i814 = root || request.c( 'TMPro.TMP_Settings' )
  var i815 = data
  i814.m_enableWordWrapping = !!i815[0]
  i814.m_enableKerning = !!i815[1]
  i814.m_enableExtraPadding = !!i815[2]
  i814.m_enableTintAllSprites = !!i815[3]
  i814.m_enableParseEscapeCharacters = !!i815[4]
  i814.m_EnableRaycastTarget = !!i815[5]
  i814.m_GetFontFeaturesAtRuntime = !!i815[6]
  i814.m_missingGlyphCharacter = i815[7]
  i814.m_warningsDisabled = !!i815[8]
  request.r(i815[9], i815[10], 0, i814, 'm_defaultFontAsset')
  i814.m_defaultFontAssetPath = i815[11]
  i814.m_defaultFontSize = i815[12]
  i814.m_defaultAutoSizeMinRatio = i815[13]
  i814.m_defaultAutoSizeMaxRatio = i815[14]
  i814.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i815[15], i815[16] )
  i814.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i815[17], i815[18] )
  i814.m_autoSizeTextContainer = !!i815[19]
  i814.m_IsTextObjectScaleStatic = !!i815[20]
  var i817 = i815[21]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 1, i816, '')
  }
  i814.m_fallbackFontAssets = i816
  i814.m_matchMaterialPreset = !!i815[22]
  request.r(i815[23], i815[24], 0, i814, 'm_defaultSpriteAsset')
  i814.m_defaultSpriteAssetPath = i815[25]
  i814.m_enableEmojiSupport = !!i815[26]
  i814.m_MissingCharacterSpriteUnicode = i815[27]
  i814.m_defaultColorGradientPresetsPath = i815[28]
  request.r(i815[29], i815[30], 0, i814, 'm_defaultStyleSheet')
  i814.m_StyleSheetsResourcePath = i815[31]
  request.r(i815[32], i815[33], 0, i814, 'm_leadingCharacters')
  request.r(i815[34], i815[35], 0, i814, 'm_followingCharacters')
  i814.m_UseModernHangulLineBreakingRules = !!i815[36]
  return i814
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i818 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i819 = data
  i818.m_GlyphIndex = i819[0]
  i818.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i819[1], i818.m_GlyphValueRecord)
  return i818
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i820 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i821 = data
  i820.m_XPlacement = i821[0]
  i820.m_YPlacement = i821[1]
  i820.m_XAdvance = i821[2]
  i820.m_YAdvance = i821[3]
  return i820
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i822 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i823 = data
  i822.hashCode = i823[0]
  request.r(i823[1], i823[2], 0, i822, 'material')
  i822.materialHashCode = i823[3]
  request.r(i823[4], i823[5], 0, i822, 'spriteSheet')
  var i825 = i823[6]
  var i824 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i825.length; i += 1) {
    i824.add(request.d('TMPro.TMP_Sprite', i825[i + 0]));
  }
  i822.spriteInfoList = i824
  var i827 = i823[7]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 1, i826, '')
  }
  i822.fallbackSpriteAssets = i826
  i822.m_Version = i823[8]
  i822.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i823[9], i822.m_FaceInfo)
  var i829 = i823[10]
  var i828 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i829.length; i += 1) {
    i828.add(request.d('TMPro.TMP_SpriteCharacter', i829[i + 0]));
  }
  i822.m_SpriteCharacterTable = i828
  var i831 = i823[11]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i831.length; i += 1) {
    i830.add(request.d('TMPro.TMP_SpriteGlyph', i831[i + 0]));
  }
  i822.m_SpriteGlyphTable = i830
  return i822
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i834 = root || request.c( 'TMPro.TMP_Sprite' )
  var i835 = data
  i834.name = i835[0]
  i834.hashCode = i835[1]
  i834.unicode = i835[2]
  i834.pivot = new pc.Vec2( i835[3], i835[4] )
  request.r(i835[5], i835[6], 0, i834, 'sprite')
  i834.id = i835[7]
  i834.x = i835[8]
  i834.y = i835[9]
  i834.width = i835[10]
  i834.height = i835[11]
  i834.xOffset = i835[12]
  i834.yOffset = i835[13]
  i834.xAdvance = i835[14]
  i834.scale = i835[15]
  return i834
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i841 = data
  i840.m_Name = i841[0]
  i840.m_HashCode = i841[1]
  i840.m_ElementType = i841[2]
  i840.m_Unicode = i841[3]
  i840.m_GlyphIndex = i841[4]
  i840.m_Scale = i841[5]
  return i840
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'sprite')
  i844.m_Index = i845[2]
  i844.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i845[3], i844.m_Metrics)
  i844.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i845[4], i844.m_GlyphRect)
  i844.m_Scale = i845[5]
  i844.m_AtlasIndex = i845[6]
  i844.m_ClassDefinitionType = i845[7]
  return i844
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i847 = data
  var i849 = i847[0]
  var i848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i849.length; i += 1) {
    i848.add(request.d('TMPro.TMP_Style', i849[i + 0]));
  }
  i846.m_StyleList = i848
  return i846
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i852 = root || request.c( 'TMPro.TMP_Style' )
  var i853 = data
  i852.m_Name = i853[0]
  i852.m_HashCode = i853[1]
  i852.m_OpeningDefinition = i853[2]
  i852.m_ClosingDefinition = i853[3]
  i852.m_OpeningTagArray = i853[4]
  i852.m_ClosingTagArray = i853[5]
  i852.m_OpeningTagUnicodeArray = i853[6]
  i852.m_ClosingTagUnicodeArray = i853[7]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i855 = data
  var i857 = i855[0]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i857[i + 0]) );
  }
  i854.files = i856
  i854.componentToPrefabIds = i855[1]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i861 = data
  i860.path = i861[0]
  request.r(i861[1], i861[2], 0, i860, 'unityObject')
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i863 = data
  var i865 = i863[0]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i865[i + 0]) );
  }
  i862.scriptsExecutionOrder = i864
  var i867 = i863[1]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i867[i + 0]) );
  }
  i862.sortingLayers = i866
  var i869 = i863[2]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i869[i + 0]) );
  }
  i862.cullingLayers = i868
  i862.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i863[3], i862.timeSettings)
  i862.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i863[4], i862.physicsSettings)
  i862.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i863[5], i862.physics2DSettings)
  i862.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i863[6], i862.qualitySettings)
  i862.enableRealtimeShadows = !!i863[7]
  i862.enableAutoInstancing = !!i863[8]
  i862.enableDynamicBatching = !!i863[9]
  i862.lightmapEncodingQuality = i863[10]
  i862.desiredColorSpace = i863[11]
  var i871 = i863[12]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( i871[i + 0] );
  }
  i862.allTags = i870
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i875 = data
  i874.name = i875[0]
  i874.value = i875[1]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i879 = data
  i878.id = i879[0]
  i878.name = i879[1]
  i878.value = i879[2]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i883 = data
  i882.id = i883[0]
  i882.name = i883[1]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i885 = data
  i884.fixedDeltaTime = i885[0]
  i884.maximumDeltaTime = i885[1]
  i884.timeScale = i885[2]
  i884.maximumParticleTimestep = i885[3]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i887 = data
  i886.gravity = new pc.Vec3( i887[0], i887[1], i887[2] )
  i886.defaultSolverIterations = i887[3]
  i886.bounceThreshold = i887[4]
  i886.autoSyncTransforms = !!i887[5]
  i886.autoSimulation = !!i887[6]
  var i889 = i887[7]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i889[i + 0]) );
  }
  i886.collisionMatrix = i888
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i893 = data
  i892.enabled = !!i893[0]
  i892.layerId = i893[1]
  i892.otherLayerId = i893[2]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'material')
  i894.gravity = new pc.Vec2( i895[2], i895[3] )
  i894.positionIterations = i895[4]
  i894.velocityIterations = i895[5]
  i894.velocityThreshold = i895[6]
  i894.maxLinearCorrection = i895[7]
  i894.maxAngularCorrection = i895[8]
  i894.maxTranslationSpeed = i895[9]
  i894.maxRotationSpeed = i895[10]
  i894.baumgarteScale = i895[11]
  i894.baumgarteTOIScale = i895[12]
  i894.timeToSleep = i895[13]
  i894.linearSleepTolerance = i895[14]
  i894.angularSleepTolerance = i895[15]
  i894.defaultContactOffset = i895[16]
  i894.autoSimulation = !!i895[17]
  i894.queriesHitTriggers = !!i895[18]
  i894.queriesStartInColliders = !!i895[19]
  i894.callbacksOnDisable = !!i895[20]
  i894.reuseCollisionCallbacks = !!i895[21]
  i894.autoSyncTransforms = !!i895[22]
  var i897 = i895[23]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i897[i + 0]) );
  }
  i894.collisionMatrix = i896
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i901 = data
  i900.enabled = !!i901[0]
  i900.layerId = i901[1]
  i900.otherLayerId = i901[2]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i903 = data
  var i905 = i903[0]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i905[i + 0]) );
  }
  i902.qualityLevels = i904
  var i907 = i903[1]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( i907[i + 0] );
  }
  i902.names = i906
  i902.shadows = i903[2]
  i902.anisotropicFiltering = i903[3]
  i902.antiAliasing = i903[4]
  i902.lodBias = i903[5]
  i902.shadowCascades = i903[6]
  i902.shadowDistance = i903[7]
  i902.shadowmaskMode = i903[8]
  i902.shadowProjection = i903[9]
  i902.shadowResolution = i903[10]
  i902.softParticles = !!i903[11]
  i902.softVegetation = !!i903[12]
  i902.activeColorSpace = i903[13]
  i902.desiredColorSpace = i903[14]
  i902.masterTextureLimit = i903[15]
  i902.maxQueuedFrames = i903[16]
  i902.particleRaycastBudget = i903[17]
  i902.pixelLightCount = i903[18]
  i902.realtimeReflectionProbes = !!i903[19]
  i902.shadowCascade2Split = i903[20]
  i902.shadowCascade4Split = new pc.Vec3( i903[21], i903[22], i903[23] )
  i902.streamingMipmapsActive = !!i903[24]
  i902.vSyncCount = i903[25]
  i902.asyncUploadBufferSize = i903[26]
  i902.asyncUploadTimeSlice = i903[27]
  i902.billboardsFaceCameraPosition = !!i903[28]
  i902.shadowNearPlaneOffset = i903[29]
  i902.streamingMipmapsMemoryBudget = i903[30]
  i902.maximumLODLevel = i903[31]
  i902.streamingMipmapsAddAllCameras = !!i903[32]
  i902.streamingMipmapsMaxLevelReduction = i903[33]
  i902.streamingMipmapsRenderersPerFrame = i903[34]
  i902.resolutionScalingFixedDPIFactor = i903[35]
  i902.streamingMipmapsMaxFileIORequests = i903[36]
  i902.currentQualityLevel = i903[37]
  return i902
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i910 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i911 = data
  i910.xPlacement = i911[0]
  i910.yPlacement = i911[1]
  i910.xAdvance = i911[2]
  i910.yAdvance = i911[3]
  return i910
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[3],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[52],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[3],"74":[75],"76":[77],"78":[77],"9":[8],"79":[80],"81":[82],"83":[80],"84":[8],"85":[8],"11":[9],"18":[19,8],"86":[8],"10":[9],"87":[8],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"33":[8],"94":[8],"16":[19,8],"95":[8],"96":[8],"97":[8],"98":[8],"99":[19,8],"100":[8],"101":[6],"102":[6],"7":[6],"103":[6],"104":[3],"105":[3],"106":[107],"108":[3],"109":[110],"111":[8],"112":[19,8],"113":[75],"27":[19,8],"114":[115,75],"116":[75],"117":[75,118],"119":[52],"120":[60],"121":[110],"122":[123],"124":[8],"125":[75,8],"17":[8,19],"126":[8],"127":[19,8],"128":[75],"129":[19,8],"130":[8],"131":[80]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.BoxCollider2D","DropZone","DraggableItem","UnityEngine.CanvasGroup","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DG.Tweening.DOTweenAnimation","Box","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "28.3";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "APG_V10_NgocNDL_AnhPD";

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

Deserializers.buildID = "89d6eb23-766a-4fda-ace8-29efc3d0ff57";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

