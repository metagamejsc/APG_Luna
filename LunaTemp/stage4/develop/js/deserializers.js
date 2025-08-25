var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointSpring' )
  var i455 = data
  i454.spring = i455[0]
  i454.damper = i455[1]
  i454.targetPosition = i455[2]
  return i454
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointMotor' )
  var i457 = data
  i456.m_TargetVelocity = i457[0]
  i456.m_Force = i457[1]
  i456.m_FreeSpin = i457[2]
  return i456
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointLimits' )
  var i459 = data
  i458.m_Min = i459[0]
  i458.m_Max = i459[1]
  i458.m_Bounciness = i459[2]
  i458.m_BounceMinVelocity = i459[3]
  i458.m_ContactDistance = i459[4]
  i458.minBounce = i459[5]
  i458.maxBounce = i459[6]
  return i458
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.JointDrive' )
  var i461 = data
  i460.m_PositionSpring = i461[0]
  i460.m_PositionDamper = i461[1]
  i460.m_MaximumForce = i461[2]
  i460.m_UseAcceleration = i461[3]
  return i460
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i463 = data
  i462.m_Spring = i463[0]
  i462.m_Damper = i463[1]
  return i462
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i465 = data
  i464.m_Limit = i465[0]
  i464.m_Bounciness = i465[1]
  i464.m_ContactDistance = i465[2]
  return i464
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i467 = data
  i466.m_ExtremumSlip = i467[0]
  i466.m_ExtremumValue = i467[1]
  i466.m_AsymptoteSlip = i467[2]
  i466.m_AsymptoteValue = i467[3]
  i466.m_Stiffness = i467[4]
  return i466
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i469 = data
  i468.m_LowerAngle = i469[0]
  i468.m_UpperAngle = i469[1]
  return i468
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i471 = data
  i470.m_MotorSpeed = i471[0]
  i470.m_MaximumMotorTorque = i471[1]
  return i470
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i473 = data
  i472.m_DampingRatio = i473[0]
  i472.m_Frequency = i473[1]
  i472.m_Angle = i473[2]
  return i472
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i475 = data
  i474.m_LowerTranslation = i475[0]
  i474.m_UpperTranslation = i475[1]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i477 = data
  i476.name = i477[0]
  i476.width = i477[1]
  i476.height = i477[2]
  i476.mipmapCount = i477[3]
  i476.anisoLevel = i477[4]
  i476.filterMode = i477[5]
  i476.hdr = !!i477[6]
  i476.format = i477[7]
  i476.wrapMode = i477[8]
  i476.alphaIsTransparency = !!i477[9]
  i476.alphaSource = i477[10]
  i476.graphicsFormat = i477[11]
  i476.sRGBTexture = !!i477[12]
  i476.desiredColorSpace = i477[13]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i478 = root || new pc.UnityMaterial()
  var i479 = data
  i478.name = i479[0]
  request.r(i479[1], i479[2], 0, i478, 'shader')
  i478.renderQueue = i479[3]
  i478.enableInstancing = !!i479[4]
  var i481 = i479[5]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i481[i + 0]) );
  }
  i478.floatParameters = i480
  var i483 = i479[6]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i483[i + 0]) );
  }
  i478.colorParameters = i482
  var i485 = i479[7]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i485[i + 0]) );
  }
  i478.vectorParameters = i484
  var i487 = i479[8]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i487[i + 0]) );
  }
  i478.textureParameters = i486
  var i489 = i479[9]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i489[i + 0]) );
  }
  i478.materialFlags = i488
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i493 = data
  i492.name = i493[0]
  i492.value = i493[1]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i497 = data
  i496.name = i497[0]
  i496.value = new pc.Color(i497[1], i497[2], i497[3], i497[4])
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i501 = data
  i500.name = i501[0]
  i500.value = new pc.Vec4( i501[1], i501[2], i501[3], i501[4] )
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i505 = data
  i504.name = i505[0]
  request.r(i505[1], i505[2], 0, i504, 'value')
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i509 = data
  i508.name = i509[0]
  i508.enabled = !!i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i511 = data
  i510.name = i511[0]
  i510.index = i511[1]
  i510.startup = !!i511[2]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i513 = data
  i512.position = new pc.Vec3( i513[0], i513[1], i513[2] )
  i512.scale = new pc.Vec3( i513[3], i513[4], i513[5] )
  i512.rotation = new pc.Quat(i513[6], i513[7], i513[8], i513[9])
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i515 = data
  i514.enabled = !!i515[0]
  i514.aspect = i515[1]
  i514.orthographic = !!i515[2]
  i514.orthographicSize = i515[3]
  i514.backgroundColor = new pc.Color(i515[4], i515[5], i515[6], i515[7])
  i514.nearClipPlane = i515[8]
  i514.farClipPlane = i515[9]
  i514.fieldOfView = i515[10]
  i514.depth = i515[11]
  i514.clearFlags = i515[12]
  i514.cullingMask = i515[13]
  i514.rect = i515[14]
  request.r(i515[15], i515[16], 0, i514, 'targetTexture')
  i514.usePhysicalProperties = !!i515[17]
  i514.focalLength = i515[18]
  i514.sensorSize = new pc.Vec2( i515[19], i515[20] )
  i514.lensShift = new pc.Vec2( i515[21], i515[22] )
  i514.gateFit = i515[23]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i517 = data
  i516.name = i517[0]
  i516.tagId = i517[1]
  i516.enabled = !!i517[2]
  i516.isStatic = !!i517[3]
  i516.layer = i517[4]
  return i516
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, 'm_FirstSelected')
  i518.m_sendNavigationEvents = !!i519[2]
  i518.m_DragThreshold = i519[3]
  return i518
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i521 = data
  i520.m_HorizontalAxis = i521[0]
  i520.m_VerticalAxis = i521[1]
  i520.m_SubmitButton = i521[2]
  i520.m_CancelButton = i521[3]
  i520.m_InputActionsPerSecond = i521[4]
  i520.m_RepeatDelay = i521[5]
  i520.m_ForceModuleActive = !!i521[6]
  i520.m_SendPointerHoverToParent = !!i521[7]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i523 = data
  i522.pivot = new pc.Vec2( i523[0], i523[1] )
  i522.anchorMin = new pc.Vec2( i523[2], i523[3] )
  i522.anchorMax = new pc.Vec2( i523[4], i523[5] )
  i522.sizeDelta = new pc.Vec2( i523[6], i523[7] )
  i522.anchoredPosition3D = new pc.Vec3( i523[8], i523[9], i523[10] )
  i522.rotation = new pc.Quat(i523[11], i523[12], i523[13], i523[14])
  i522.scale = new pc.Vec3( i523[15], i523[16], i523[17] )
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i525 = data
  i524.enabled = !!i525[0]
  i524.planeDistance = i525[1]
  i524.referencePixelsPerUnit = i525[2]
  i524.isFallbackOverlay = !!i525[3]
  i524.renderMode = i525[4]
  i524.renderOrder = i525[5]
  i524.sortingLayerName = i525[6]
  i524.sortingOrder = i525[7]
  i524.scaleFactor = i525[8]
  request.r(i525[9], i525[10], 0, i524, 'worldCamera')
  i524.overrideSorting = !!i525[11]
  i524.pixelPerfect = !!i525[12]
  i524.targetDisplay = i525[13]
  i524.overridePixelPerfect = !!i525[14]
  return i524
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i527 = data
  i526.m_UiScaleMode = i527[0]
  i526.m_ReferencePixelsPerUnit = i527[1]
  i526.m_ScaleFactor = i527[2]
  i526.m_ReferenceResolution = new pc.Vec2( i527[3], i527[4] )
  i526.m_ScreenMatchMode = i527[5]
  i526.m_MatchWidthOrHeight = i527[6]
  i526.m_PhysicalUnit = i527[7]
  i526.m_FallbackScreenDPI = i527[8]
  i526.m_DefaultSpriteDPI = i527[9]
  i526.m_DynamicPixelsPerUnit = i527[10]
  i526.m_PresetInfoIsWorld = !!i527[11]
  return i526
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i529 = data
  i528.m_IgnoreReversedGraphics = !!i529[0]
  i528.m_BlockingObjects = i529[1]
  i528.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i529[2] )
  return i528
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i530 = root || request.c( 'LunaManager' )
  var i531 = data
  var i533 = i531[0]
  var i532 = []
  for(var i = 0; i < i533.length; i += 2) {
  request.r(i533[i + 0], i533[i + 1], 2, i532, '')
  }
  i530.lstBtnInstall = i532
  request.r(i531[1], i531[2], 0, i530, 'EndCard')
  i530.countPlay = i531[3]
  i530.countPlayFinal = i531[4]
  i530.timeDropFinal = i531[5]
  i530.colorBG = new pc.Color(i531[6], i531[7], i531[8], i531[9])
  request.r(i531[10], i531[11], 0, i530, 'texture2D')
  request.r(i531[12], i531[13], 0, i530, 'rawImageBG')
  request.r(i531[14], i531[15], 0, i530, 'hand')
  request.r(i531[16], i531[17], 0, i530, 'textProgess')
  request.r(i531[18], i531[19], 0, i530, 'imgProgess')
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i537 = data
  i536.cullTransparentMesh = !!i537[0]
  return i536
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i539 = data
  request.r(i539[0], i539[1], 0, i538, 'm_Texture')
  i538.m_UVRect = UnityEngine.Rect.MinMaxRect(i539[2], i539[3], i539[4], i539[5])
  request.r(i539[6], i539[7], 0, i538, 'm_Material')
  i538.m_Maskable = !!i539[8]
  i538.m_Color = new pc.Color(i539[9], i539[10], i539[11], i539[12])
  i538.m_RaycastTarget = !!i539[13]
  i538.m_RaycastPadding = new pc.Vec4( i539[14], i539[15], i539[16], i539[17] )
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'clip')
  request.r(i541[2], i541[3], 0, i540, 'outputAudioMixerGroup')
  i540.playOnAwake = !!i541[4]
  i540.loop = !!i541[5]
  i540.time = i541[6]
  i540.volume = i541[7]
  i540.pitch = i541[8]
  i540.enabled = !!i541[9]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i543 = data
  i542.usedByComposite = !!i543[0]
  i542.autoTiling = !!i543[1]
  i542.size = new pc.Vec2( i543[2], i543[3] )
  i542.edgeRadius = i543[4]
  i542.enabled = !!i543[5]
  i542.isTrigger = !!i543[6]
  i542.usedByEffector = !!i543[7]
  i542.density = i543[8]
  i542.offset = new pc.Vec2( i543[9], i543[10] )
  request.r(i543[11], i543[12], 0, i542, 'material')
  return i542
}

Deserializers["DropZone"] = function (request, data, root) {
  var i544 = root || request.c( 'DropZone' )
  var i545 = data
  i544.idDrop = i545[0]
  var i547 = i545[1]
  var i546 = []
  for(var i = 0; i < i547.length; i += 2) {
  request.r(i547[i + 0], i547[i + 1], 2, i546, '')
  }
  i544.steps = i546
  i544.isDontWork = !!i545[2]
  return i544
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.UI.Image' )
  var i551 = data
  request.r(i551[0], i551[1], 0, i550, 'm_Sprite')
  i550.m_Type = i551[2]
  i550.m_PreserveAspect = !!i551[3]
  i550.m_FillCenter = !!i551[4]
  i550.m_FillMethod = i551[5]
  i550.m_FillAmount = i551[6]
  i550.m_FillClockwise = !!i551[7]
  i550.m_FillOrigin = i551[8]
  i550.m_UseSpriteMesh = !!i551[9]
  i550.m_PixelsPerUnitMultiplier = i551[10]
  request.r(i551[11], i551[12], 0, i550, 'm_Material')
  i550.m_Maskable = !!i551[13]
  i550.m_Color = new pc.Color(i551[14], i551[15], i551[16], i551[17])
  i550.m_RaycastTarget = !!i551[18]
  i550.m_RaycastPadding = new pc.Vec4( i551[19], i551[20], i551[21], i551[22] )
  return i550
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i552 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'skeletonDataAsset')
  request.r(i553[2], i553[3], 0, i552, 'additiveMaterial')
  request.r(i553[4], i553[5], 0, i552, 'multiplyMaterial')
  request.r(i553[6], i553[7], 0, i552, 'screenMaterial')
  i552.initialSkinName = i553[8]
  i552.initialFlipX = !!i553[9]
  i552.initialFlipY = !!i553[10]
  i552.startingAnimation = i553[11]
  i552.startingLoop = !!i553[12]
  i552.timeScale = i553[13]
  i552.freeze = !!i553[14]
  i552.layoutScaleMode = i553[15]
  i552.updateWhenInvisible = i553[16]
  i552.allowMultipleCanvasRenderers = !!i553[17]
  var i555 = i553[18]
  var i554 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i555.length; i += 2) {
  request.r(i555[i + 0], i555[i + 1], 1, i554, '')
  }
  i552.canvasRenderers = i554
  i552.enableSeparatorSlots = !!i553[19]
  i552.updateSeparatorPartLocation = !!i553[20]
  i552.updateSeparatorPartScale = !!i553[21]
  i552.disableMeshAssignmentOnOverride = !!i553[22]
  i552.referenceSize = new pc.Vec2( i553[23], i553[24] )
  i552.referenceScale = i553[25]
  i552.rectTransformSize = new pc.Vec2( i553[26], i553[27] )
  i552.editReferenceRect = !!i553[28]
  var i557 = i553[29]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( i557[i + 0] );
  }
  i552.separatorSlotNames = i556
  var i559 = i553[30]
  var i558 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i559.length; i += 2) {
  request.r(i559[i + 0], i559[i + 1], 1, i558, '')
  }
  i552.separatorParts = i558
  i552.meshGenerator = request.d('Spine.Unity.MeshGenerator', i553[31], i552.meshGenerator)
  i552.updateTiming = i553[32]
  i552.unscaledTime = !!i553[33]
  request.r(i553[34], i553[35], 0, i552, 'm_Material')
  i552.m_Maskable = !!i553[36]
  i552.m_Color = new pc.Color(i553[37], i553[38], i553[39], i553[40])
  i552.m_RaycastTarget = !!i553[41]
  i552.m_RaycastPadding = new pc.Vec4( i553[42], i553[43], i553[44], i553[45] )
  return i552
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i566 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i567 = data
  i566.settings = request.d('Spine.Unity.MeshGenerator+Settings', i567[0], i566.settings)
  return i566
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i568 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i569 = data
  i568.useClipping = !!i569[0]
  i568.zSpacing = i569[1]
  i568.pmaVertexColors = !!i569[2]
  i568.tintBlack = !!i569[3]
  i568.canvasGroupTintBlack = !!i569[4]
  i568.calculateTangents = !!i569[5]
  i568.addNormals = !!i569[6]
  i568.immutableTriangles = !!i569[7]
  return i568
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i570 = root || request.c( 'DraggableItem' )
  var i571 = data
  i570.idDrag = i571[0]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i573 = data
  i572.m_Alpha = i573[0]
  i572.m_Interactable = !!i573[1]
  i572.m_BlocksRaycasts = !!i573[2]
  i572.m_IgnoreParentGroups = !!i573[3]
  i572.enabled = !!i573[4]
  return i572
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i574 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i575 = data
  i574.m_hasFontAssetChanged = !!i575[0]
  request.r(i575[1], i575[2], 0, i574, 'm_baseMaterial')
  i574.m_maskOffset = new pc.Vec4( i575[3], i575[4], i575[5], i575[6] )
  i574.m_text = i575[7]
  i574.m_isRightToLeft = !!i575[8]
  request.r(i575[9], i575[10], 0, i574, 'm_fontAsset')
  request.r(i575[11], i575[12], 0, i574, 'm_sharedMaterial')
  var i577 = i575[13]
  var i576 = []
  for(var i = 0; i < i577.length; i += 2) {
  request.r(i577[i + 0], i577[i + 1], 2, i576, '')
  }
  i574.m_fontSharedMaterials = i576
  request.r(i575[14], i575[15], 0, i574, 'm_fontMaterial')
  var i579 = i575[16]
  var i578 = []
  for(var i = 0; i < i579.length; i += 2) {
  request.r(i579[i + 0], i579[i + 1], 2, i578, '')
  }
  i574.m_fontMaterials = i578
  i574.m_fontColor32 = UnityEngine.Color32.ConstructColor(i575[17], i575[18], i575[19], i575[20])
  i574.m_fontColor = new pc.Color(i575[21], i575[22], i575[23], i575[24])
  i574.m_enableVertexGradient = !!i575[25]
  i574.m_colorMode = i575[26]
  i574.m_fontColorGradient = request.d('TMPro.VertexGradient', i575[27], i574.m_fontColorGradient)
  request.r(i575[28], i575[29], 0, i574, 'm_fontColorGradientPreset')
  request.r(i575[30], i575[31], 0, i574, 'm_spriteAsset')
  i574.m_tintAllSprites = !!i575[32]
  request.r(i575[33], i575[34], 0, i574, 'm_StyleSheet')
  i574.m_TextStyleHashCode = i575[35]
  i574.m_overrideHtmlColors = !!i575[36]
  i574.m_faceColor = UnityEngine.Color32.ConstructColor(i575[37], i575[38], i575[39], i575[40])
  i574.m_fontSize = i575[41]
  i574.m_fontSizeBase = i575[42]
  i574.m_fontWeight = i575[43]
  i574.m_enableAutoSizing = !!i575[44]
  i574.m_fontSizeMin = i575[45]
  i574.m_fontSizeMax = i575[46]
  i574.m_fontStyle = i575[47]
  i574.m_HorizontalAlignment = i575[48]
  i574.m_VerticalAlignment = i575[49]
  i574.m_textAlignment = i575[50]
  i574.m_characterSpacing = i575[51]
  i574.m_wordSpacing = i575[52]
  i574.m_lineSpacing = i575[53]
  i574.m_lineSpacingMax = i575[54]
  i574.m_paragraphSpacing = i575[55]
  i574.m_charWidthMaxAdj = i575[56]
  i574.m_enableWordWrapping = !!i575[57]
  i574.m_wordWrappingRatios = i575[58]
  i574.m_overflowMode = i575[59]
  request.r(i575[60], i575[61], 0, i574, 'm_linkedTextComponent')
  request.r(i575[62], i575[63], 0, i574, 'parentLinkedComponent')
  i574.m_enableKerning = !!i575[64]
  i574.m_enableExtraPadding = !!i575[65]
  i574.checkPaddingRequired = !!i575[66]
  i574.m_isRichText = !!i575[67]
  i574.m_parseCtrlCharacters = !!i575[68]
  i574.m_isOrthographic = !!i575[69]
  i574.m_isCullingEnabled = !!i575[70]
  i574.m_horizontalMapping = i575[71]
  i574.m_verticalMapping = i575[72]
  i574.m_uvLineOffset = i575[73]
  i574.m_geometrySortingOrder = i575[74]
  i574.m_IsTextObjectScaleStatic = !!i575[75]
  i574.m_VertexBufferAutoSizeReduction = !!i575[76]
  i574.m_useMaxVisibleDescender = !!i575[77]
  i574.m_pageToDisplay = i575[78]
  i574.m_margin = new pc.Vec4( i575[79], i575[80], i575[81], i575[82] )
  i574.m_isUsingLegacyAnimationComponent = !!i575[83]
  i574.m_isVolumetricText = !!i575[84]
  request.r(i575[85], i575[86], 0, i574, 'm_Material')
  i574.m_Maskable = !!i575[87]
  i574.m_Color = new pc.Color(i575[88], i575[89], i575[90], i575[91])
  i574.m_RaycastTarget = !!i575[92]
  i574.m_RaycastPadding = new pc.Vec4( i575[93], i575[94], i575[95], i575[96] )
  return i574
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i582 = root || request.c( 'TMPro.VertexGradient' )
  var i583 = data
  i582.topLeft = new pc.Color(i583[0], i583[1], i583[2], i583[3])
  i582.topRight = new pc.Color(i583[4], i583[5], i583[6], i583[7])
  i582.bottomLeft = new pc.Color(i583[8], i583[9], i583[10], i583[11])
  i582.bottomRight = new pc.Color(i583[12], i583[13], i583[14], i583[15])
  return i582
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i584 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i585 = data
  i584.targetIsSelf = !!i585[0]
  request.r(i585[1], i585[2], 0, i584, 'targetGO')
  i584.tweenTargetIsTargetGO = !!i585[3]
  i584.delay = i585[4]
  i584.duration = i585[5]
  i584.easeType = i585[6]
  i584.easeCurve = new pc.AnimationCurve( { keys_flow: i585[7] } )
  i584.loopType = i585[8]
  i584.loops = i585[9]
  i584.id = i585[10]
  i584.isRelative = !!i585[11]
  i584.isFrom = !!i585[12]
  i584.isIndependentUpdate = !!i585[13]
  i584.autoKill = !!i585[14]
  i584.autoGenerate = !!i585[15]
  i584.isActive = !!i585[16]
  i584.isValid = !!i585[17]
  request.r(i585[18], i585[19], 0, i584, 'target')
  i584.animationType = i585[20]
  i584.targetType = i585[21]
  i584.forcedTargetType = i585[22]
  i584.autoPlay = !!i585[23]
  i584.useTargetAsV3 = !!i585[24]
  i584.endValueFloat = i585[25]
  i584.endValueV3 = new pc.Vec3( i585[26], i585[27], i585[28] )
  i584.endValueV2 = new pc.Vec2( i585[29], i585[30] )
  i584.endValueColor = new pc.Color(i585[31], i585[32], i585[33], i585[34])
  i584.endValueString = i585[35]
  i584.endValueRect = UnityEngine.Rect.MinMaxRect(i585[36], i585[37], i585[38], i585[39])
  request.r(i585[40], i585[41], 0, i584, 'endValueTransform')
  i584.optionalBool0 = !!i585[42]
  i584.optionalBool1 = !!i585[43]
  i584.optionalFloat0 = i585[44]
  i584.optionalInt0 = i585[45]
  i584.optionalRotationMode = i585[46]
  i584.optionalScrambleMode = i585[47]
  i584.optionalShakeRandomnessMode = i585[48]
  i584.optionalString = i585[49]
  i584.updateType = i585[50]
  i584.isSpeedBased = !!i585[51]
  i584.hasOnStart = !!i585[52]
  i584.hasOnPlay = !!i585[53]
  i584.hasOnUpdate = !!i585[54]
  i584.hasOnStepComplete = !!i585[55]
  i584.hasOnComplete = !!i585[56]
  i584.hasOnTweenCreated = !!i585[57]
  i584.hasOnRewind = !!i585[58]
  i584.onStart = request.d('UnityEngine.Events.UnityEvent', i585[59], i584.onStart)
  i584.onPlay = request.d('UnityEngine.Events.UnityEvent', i585[60], i584.onPlay)
  i584.onUpdate = request.d('UnityEngine.Events.UnityEvent', i585[61], i584.onUpdate)
  i584.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i585[62], i584.onStepComplete)
  i584.onComplete = request.d('UnityEngine.Events.UnityEvent', i585[63], i584.onComplete)
  i584.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i585[64], i584.onTweenCreated)
  i584.onRewind = request.d('UnityEngine.Events.UnityEvent', i585[65], i584.onRewind)
  return i584
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i587 = data
  i586.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i587[0], i586.m_PersistentCalls)
  return i586
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i589 = data
  var i591 = i589[0]
  var i590 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i591.length; i += 1) {
    i590.add(request.d('UnityEngine.Events.PersistentCall', i591[i + 0]));
  }
  i588.m_Calls = i590
  return i588
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'm_Target')
  i594.m_TargetAssemblyTypeName = i595[2]
  i594.m_MethodName = i595[3]
  i594.m_Mode = i595[4]
  i594.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i595[5], i594.m_Arguments)
  i594.m_CallState = i595[6]
  return i594
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.UI.Button' )
  var i597 = data
  i596.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i597[0], i596.m_OnClick)
  i596.m_Navigation = request.d('UnityEngine.UI.Navigation', i597[1], i596.m_Navigation)
  i596.m_Transition = i597[2]
  i596.m_Colors = request.d('UnityEngine.UI.ColorBlock', i597[3], i596.m_Colors)
  i596.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i597[4], i596.m_SpriteState)
  i596.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i597[5], i596.m_AnimationTriggers)
  i596.m_Interactable = !!i597[6]
  request.r(i597[7], i597[8], 0, i596, 'm_TargetGraphic')
  return i596
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i599 = data
  i598.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i599[0], i598.m_PersistentCalls)
  return i598
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i601 = data
  i600.m_Mode = i601[0]
  i600.m_WrapAround = !!i601[1]
  request.r(i601[2], i601[3], 0, i600, 'm_SelectOnUp')
  request.r(i601[4], i601[5], 0, i600, 'm_SelectOnDown')
  request.r(i601[6], i601[7], 0, i600, 'm_SelectOnLeft')
  request.r(i601[8], i601[9], 0, i600, 'm_SelectOnRight')
  return i600
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i603 = data
  i602.m_NormalColor = new pc.Color(i603[0], i603[1], i603[2], i603[3])
  i602.m_HighlightedColor = new pc.Color(i603[4], i603[5], i603[6], i603[7])
  i602.m_PressedColor = new pc.Color(i603[8], i603[9], i603[10], i603[11])
  i602.m_SelectedColor = new pc.Color(i603[12], i603[13], i603[14], i603[15])
  i602.m_DisabledColor = new pc.Color(i603[16], i603[17], i603[18], i603[19])
  i602.m_ColorMultiplier = i603[20]
  i602.m_FadeDuration = i603[21]
  return i602
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'm_HighlightedSprite')
  request.r(i605[2], i605[3], 0, i604, 'm_PressedSprite')
  request.r(i605[4], i605[5], 0, i604, 'm_SelectedSprite')
  request.r(i605[6], i605[7], 0, i604, 'm_DisabledSprite')
  return i604
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i607 = data
  i606.m_NormalTrigger = i607[0]
  i606.m_HighlightedTrigger = i607[1]
  i606.m_PressedTrigger = i607[2]
  i606.m_SelectedTrigger = i607[3]
  i606.m_DisabledTrigger = i607[4]
  return i606
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.Mask' )
  var i609 = data
  i608.m_ShowMaskGraphic = !!i609[0]
  return i608
}

Deserializers["IQFill"] = function (request, data, root) {
  var i610 = root || request.c( 'IQFill' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'fillImage')
  i610.maxFillAmount = i611[2]
  i610.fillDuration = i611[3]
  i610.maxValue = i611[4]
  i610.addValue = i611[5]
  i610.fillEase = i611[6]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i613 = data
  i612.ambientIntensity = i613[0]
  i612.reflectionIntensity = i613[1]
  i612.ambientMode = i613[2]
  i612.ambientLight = new pc.Color(i613[3], i613[4], i613[5], i613[6])
  i612.ambientSkyColor = new pc.Color(i613[7], i613[8], i613[9], i613[10])
  i612.ambientGroundColor = new pc.Color(i613[11], i613[12], i613[13], i613[14])
  i612.ambientEquatorColor = new pc.Color(i613[15], i613[16], i613[17], i613[18])
  i612.fogColor = new pc.Color(i613[19], i613[20], i613[21], i613[22])
  i612.fogEndDistance = i613[23]
  i612.fogStartDistance = i613[24]
  i612.fogDensity = i613[25]
  i612.fog = !!i613[26]
  request.r(i613[27], i613[28], 0, i612, 'skybox')
  i612.fogMode = i613[29]
  var i615 = i613[30]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i615[i + 0]) );
  }
  i612.lightmaps = i614
  i612.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i613[31], i612.lightProbes)
  i612.lightmapsMode = i613[32]
  i612.mixedBakeMode = i613[33]
  i612.environmentLightingMode = i613[34]
  i612.ambientProbe = new pc.SphericalHarmonicsL2(i613[35])
  i612.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i613[36])
  i612.useReferenceAmbientProbe = !!i613[37]
  request.r(i613[38], i613[39], 0, i612, 'customReflection')
  request.r(i613[40], i613[41], 0, i612, 'defaultReflection')
  i612.defaultReflectionMode = i613[42]
  i612.defaultReflectionResolution = i613[43]
  i612.sunLightObjectId = i613[44]
  i612.pixelLightCount = i613[45]
  i612.defaultReflectionHDR = !!i613[46]
  i612.hasLightDataAsset = !!i613[47]
  i612.hasManualGenerate = !!i613[48]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'lightmapColor')
  request.r(i619[2], i619[3], 0, i618, 'lightmapDirection')
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i620 = root || new UnityEngine.LightProbes()
  var i621 = data
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i629 = data
  var i631 = i629[0]
  var i630 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i631.length; i += 1) {
    i630.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i631[i + 0]));
  }
  i628.ShaderCompilationErrors = i630
  i628.name = i629[1]
  i628.guid = i629[2]
  var i633 = i629[3]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( i633[i + 0] );
  }
  i628.shaderDefinedKeywords = i632
  var i635 = i629[4]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i635[i + 0]) );
  }
  i628.passes = i634
  var i637 = i629[5]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i637[i + 0]) );
  }
  i628.usePasses = i636
  var i639 = i629[6]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i639[i + 0]) );
  }
  i628.defaultParameterValues = i638
  request.r(i629[7], i629[8], 0, i628, 'unityFallbackShader')
  i628.readDepth = !!i629[9]
  i628.isCreatedByShaderGraph = !!i629[10]
  i628.usedBatchUniforms = i629[11]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i643 = data
  i642.shaderName = i643[0]
  i642.errorMessage = i643[1]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i646 = root || new pc.UnityShaderPass()
  var i647 = data
  i646.id = i647[0]
  i646.subShaderIndex = i647[1]
  i646.name = i647[2]
  i646.passType = i647[3]
  i646.grabPassTextureName = i647[4]
  i646.usePass = !!i647[5]
  i646.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i647[6], i646.zTest)
  i646.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i647[7], i646.zWrite)
  i646.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i647[8], i646.culling)
  i646.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i647[9], i646.blending)
  i646.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i647[10], i646.alphaBlending)
  i646.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i647[11], i646.colorWriteMask)
  i646.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i647[12], i646.offsetUnits)
  i646.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i647[13], i646.offsetFactor)
  i646.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i647[14], i646.stencilRef)
  i646.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i647[15], i646.stencilReadMask)
  i646.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i647[16], i646.stencilWriteMask)
  i646.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i647[17], i646.stencilOp)
  i646.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i647[18], i646.stencilOpFront)
  i646.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i647[19], i646.stencilOpBack)
  var i649 = i647[20]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i649[i + 0]) );
  }
  i646.tags = i648
  var i651 = i647[21]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( i651[i + 0] );
  }
  i646.passDefinedKeywords = i650
  var i653 = i647[22]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i653[i + 0]) );
  }
  i646.passDefinedKeywordGroups = i652
  var i655 = i647[23]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i655[i + 0]) );
  }
  i646.variants = i654
  var i657 = i647[24]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i657[i + 0]) );
  }
  i646.excludedVariants = i656
  i646.hasDepthReader = !!i647[25]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i659 = data
  i658.val = i659[0]
  i658.name = i659[1]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i661 = data
  i660.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i661[0], i660.src)
  i660.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i661[1], i660.dst)
  i660.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i661[2], i660.op)
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i663 = data
  i662.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[0], i662.pass)
  i662.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[1], i662.fail)
  i662.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[2], i662.zFail)
  i662.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[3], i662.comp)
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i667 = data
  i666.name = i667[0]
  i666.value = i667[1]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i671 = data
  var i673 = i671[0]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( i673[i + 0] );
  }
  i670.keywords = i672
  i670.hasDiscard = !!i671[1]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i677 = data
  i676.passId = i677[0]
  i676.subShaderIndex = i677[1]
  var i679 = i677[2]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( i679[i + 0] );
  }
  i676.keywords = i678
  i676.vertexProgram = i677[3]
  i676.fragmentProgram = i677[4]
  i676.compiledForWebGL2 = !!i677[5]
  i676.readDepth = !!i677[6]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'shader')
  i682.pass = i683[2]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i687 = data
  i686.name = i687[0]
  i686.type = i687[1]
  i686.value = new pc.Vec4( i687[2], i687[3], i687[4], i687[5] )
  i686.textureValue = i687[6]
  i686.shaderPropertyFlag = i687[7]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i689 = data
  i688.name = i689[0]
  request.r(i689[1], i689[2], 0, i688, 'texture')
  i688.aabb = i689[3]
  i688.vertices = i689[4]
  i688.triangles = i689[5]
  i688.textureRect = UnityEngine.Rect.MinMaxRect(i689[6], i689[7], i689[8], i689[9])
  i688.packedRect = UnityEngine.Rect.MinMaxRect(i689[10], i689[11], i689[12], i689[13])
  i688.border = new pc.Vec4( i689[14], i689[15], i689[16], i689[17] )
  i688.transparency = i689[18]
  i688.bounds = i689[19]
  i688.pixelsPerUnit = i689[20]
  i688.textureWidth = i689[21]
  i688.textureHeight = i689[22]
  i688.nativeSize = new pc.Vec2( i689[23], i689[24] )
  i688.pivot = new pc.Vec2( i689[25], i689[26] )
  i688.textureRectOffset = new pc.Vec2( i689[27], i689[28] )
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i691 = data
  i690.name = i691[0]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i693 = data
  i692.name = i693[0]
  i692.ascent = i693[1]
  i692.originalLineHeight = i693[2]
  i692.fontSize = i693[3]
  var i695 = i693[4]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i695[i + 0]) );
  }
  i692.characterInfo = i694
  request.r(i693[5], i693[6], 0, i692, 'texture')
  i692.originalFontSize = i693[7]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i699 = data
  i698.index = i699[0]
  i698.advance = i699[1]
  i698.bearing = i699[2]
  i698.glyphWidth = i699[3]
  i698.glyphHeight = i699[4]
  i698.minX = i699[5]
  i698.maxX = i699[6]
  i698.minY = i699[7]
  i698.maxY = i699[8]
  i698.uvBottomLeftX = i699[9]
  i698.uvBottomLeftY = i699[10]
  i698.uvBottomRightX = i699[11]
  i698.uvBottomRightY = i699[12]
  i698.uvTopLeftX = i699[13]
  i698.uvTopLeftY = i699[14]
  i698.uvTopRightX = i699[15]
  i698.uvTopRightY = i699[16]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i701 = data
  i700.name = i701[0]
  i700.bytes64 = i701[1]
  i700.data = i701[2]
  return i700
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i702 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i703 = data
  var i705 = i703[0]
  var i704 = []
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 2, i704, '')
  }
  i702.atlasAssets = i704
  i702.scale = i703[1]
  request.r(i703[2], i703[3], 0, i702, 'skeletonJSON')
  i702.isUpgradingBlendModeMaterials = !!i703[4]
  i702.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i703[5], i702.blendModeMaterials)
  var i707 = i703[6]
  var i706 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 1, i706, '')
  }
  i702.skeletonDataModifiers = i706
  var i709 = i703[7]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( i709[i + 0] );
  }
  i702.fromAnimation = i708
  var i711 = i703[8]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( i711[i + 0] );
  }
  i702.toAnimation = i710
  i702.duration = i703[9]
  i702.defaultMix = i703[10]
  request.r(i703[11], i703[12], 0, i702, 'controller')
  return i702
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i714 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i715 = data
  i714.applyAdditiveMaterial = !!i715[0]
  var i717 = i715[1]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i717.length; i += 1) {
    i716.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i717[i + 0]));
  }
  i714.additiveMaterials = i716
  var i719 = i715[2]
  var i718 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i719.length; i += 1) {
    i718.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i719[i + 0]));
  }
  i714.multiplyMaterials = i718
  var i721 = i715[3]
  var i720 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i721.length; i += 1) {
    i720.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i721[i + 0]));
  }
  i714.screenMaterials = i720
  i714.requiresBlendModeMaterials = !!i715[4]
  return i714
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i724 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i725 = data
  i724.pageName = i725[0]
  request.r(i725[1], i725[2], 0, i724, 'material')
  return i724
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i728 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'atlasFile')
  var i731 = i729[2]
  var i730 = []
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 2, i730, '')
  }
  i728.materials = i730
  i728.textureLoadingMode = i729[3]
  request.r(i729[4], i729[5], 0, i728, 'onDemandTextureLoader')
  return i728
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i732 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i733 = data
  i732.hashCode = i733[0]
  request.r(i733[1], i733[2], 0, i732, 'material')
  i732.materialHashCode = i733[3]
  request.r(i733[4], i733[5], 0, i732, 'atlas')
  i732.normalStyle = i733[6]
  i732.normalSpacingOffset = i733[7]
  i732.boldStyle = i733[8]
  i732.boldSpacing = i733[9]
  i732.italicStyle = i733[10]
  i732.tabSize = i733[11]
  i732.m_Version = i733[12]
  i732.m_SourceFontFileGUID = i733[13]
  request.r(i733[14], i733[15], 0, i732, 'm_SourceFontFile_EditorRef')
  request.r(i733[16], i733[17], 0, i732, 'm_SourceFontFile')
  i732.m_AtlasPopulationMode = i733[18]
  i732.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i733[19], i732.m_FaceInfo)
  var i735 = i733[20]
  var i734 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i735.length; i += 1) {
    i734.add(request.d('UnityEngine.TextCore.Glyph', i735[i + 0]));
  }
  i732.m_GlyphTable = i734
  var i737 = i733[21]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i737.length; i += 1) {
    i736.add(request.d('TMPro.TMP_Character', i737[i + 0]));
  }
  i732.m_CharacterTable = i736
  var i739 = i733[22]
  var i738 = []
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 2, i738, '')
  }
  i732.m_AtlasTextures = i738
  i732.m_AtlasTextureIndex = i733[23]
  i732.m_IsMultiAtlasTexturesEnabled = !!i733[24]
  i732.m_ClearDynamicDataOnBuild = !!i733[25]
  var i741 = i733[26]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i741.length; i += 1) {
    i740.add(request.d('UnityEngine.TextCore.GlyphRect', i741[i + 0]));
  }
  i732.m_UsedGlyphRects = i740
  var i743 = i733[27]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i743.length; i += 1) {
    i742.add(request.d('UnityEngine.TextCore.GlyphRect', i743[i + 0]));
  }
  i732.m_FreeGlyphRects = i742
  i732.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i733[28], i732.m_fontInfo)
  i732.m_AtlasWidth = i733[29]
  i732.m_AtlasHeight = i733[30]
  i732.m_AtlasPadding = i733[31]
  i732.m_AtlasRenderMode = i733[32]
  var i745 = i733[33]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i745.length; i += 1) {
    i744.add(request.d('TMPro.TMP_Glyph', i745[i + 0]));
  }
  i732.m_glyphInfoList = i744
  i732.m_KerningTable = request.d('TMPro.KerningTable', i733[34], i732.m_KerningTable)
  i732.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i733[35], i732.m_FontFeatureTable)
  var i747 = i733[36]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 1, i746, '')
  }
  i732.fallbackFontAssets = i746
  var i749 = i733[37]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 1, i748, '')
  }
  i732.m_FallbackFontAssetTable = i748
  i732.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i733[38], i732.m_CreationSettings)
  var i751 = i733[39]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('TMPro.TMP_FontWeightPair', i751[i + 0]) );
  }
  i732.m_FontWeightTable = i750
  var i753 = i733[40]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('TMPro.TMP_FontWeightPair', i753[i + 0]) );
  }
  i732.fontWeights = i752
  return i732
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i755 = data
  i754.m_FaceIndex = i755[0]
  i754.m_FamilyName = i755[1]
  i754.m_StyleName = i755[2]
  i754.m_PointSize = i755[3]
  i754.m_Scale = i755[4]
  i754.m_UnitsPerEM = i755[5]
  i754.m_LineHeight = i755[6]
  i754.m_AscentLine = i755[7]
  i754.m_CapLine = i755[8]
  i754.m_MeanLine = i755[9]
  i754.m_Baseline = i755[10]
  i754.m_DescentLine = i755[11]
  i754.m_SuperscriptOffset = i755[12]
  i754.m_SuperscriptSize = i755[13]
  i754.m_SubscriptOffset = i755[14]
  i754.m_SubscriptSize = i755[15]
  i754.m_UnderlineOffset = i755[16]
  i754.m_UnderlineThickness = i755[17]
  i754.m_StrikethroughOffset = i755[18]
  i754.m_StrikethroughThickness = i755[19]
  i754.m_TabWidth = i755[20]
  return i754
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i759 = data
  i758.m_Index = i759[0]
  i758.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i759[1], i758.m_Metrics)
  i758.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i759[2], i758.m_GlyphRect)
  i758.m_Scale = i759[3]
  i758.m_AtlasIndex = i759[4]
  i758.m_ClassDefinitionType = i759[5]
  return i758
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i761 = data
  i760.m_Width = i761[0]
  i760.m_Height = i761[1]
  i760.m_HorizontalBearingX = i761[2]
  i760.m_HorizontalBearingY = i761[3]
  i760.m_HorizontalAdvance = i761[4]
  return i760
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i763 = data
  i762.m_X = i763[0]
  i762.m_Y = i763[1]
  i762.m_Width = i763[2]
  i762.m_Height = i763[3]
  return i762
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i766 = root || request.c( 'TMPro.TMP_Character' )
  var i767 = data
  i766.m_ElementType = i767[0]
  i766.m_Unicode = i767[1]
  i766.m_GlyphIndex = i767[2]
  i766.m_Scale = i767[3]
  return i766
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i772 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i773 = data
  i772.Name = i773[0]
  i772.PointSize = i773[1]
  i772.Scale = i773[2]
  i772.CharacterCount = i773[3]
  i772.LineHeight = i773[4]
  i772.Baseline = i773[5]
  i772.Ascender = i773[6]
  i772.CapHeight = i773[7]
  i772.Descender = i773[8]
  i772.CenterLine = i773[9]
  i772.SuperscriptOffset = i773[10]
  i772.SubscriptOffset = i773[11]
  i772.SubSize = i773[12]
  i772.Underline = i773[13]
  i772.UnderlineThickness = i773[14]
  i772.strikethrough = i773[15]
  i772.strikethroughThickness = i773[16]
  i772.TabWidth = i773[17]
  i772.Padding = i773[18]
  i772.AtlasWidth = i773[19]
  i772.AtlasHeight = i773[20]
  return i772
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i776 = root || request.c( 'TMPro.TMP_Glyph' )
  var i777 = data
  i776.id = i777[0]
  i776.x = i777[1]
  i776.y = i777[2]
  i776.width = i777[3]
  i776.height = i777[4]
  i776.xOffset = i777[5]
  i776.yOffset = i777[6]
  i776.xAdvance = i777[7]
  i776.scale = i777[8]
  return i776
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i778 = root || request.c( 'TMPro.KerningTable' )
  var i779 = data
  var i781 = i779[0]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i781.length; i += 1) {
    i780.add(request.d('TMPro.KerningPair', i781[i + 0]));
  }
  i778.kerningPairs = i780
  return i778
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i784 = root || request.c( 'TMPro.KerningPair' )
  var i785 = data
  i784.xOffset = i785[0]
  i784.m_FirstGlyph = i785[1]
  i784.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i785[2], i784.m_FirstGlyphAdjustments)
  i784.m_SecondGlyph = i785[3]
  i784.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i785[4], i784.m_SecondGlyphAdjustments)
  i784.m_IgnoreSpacingAdjustments = !!i785[5]
  return i784
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i786 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i787 = data
  var i789 = i787[0]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i789.length; i += 1) {
    i788.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i789[i + 0]));
  }
  i786.m_GlyphPairAdjustmentRecords = i788
  return i786
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i792 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i793 = data
  i792.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i793[0], i792.m_FirstAdjustmentRecord)
  i792.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i793[1], i792.m_SecondAdjustmentRecord)
  i792.m_FeatureLookupFlags = i793[2]
  return i792
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i796 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i797 = data
  i796.sourceFontFileName = i797[0]
  i796.sourceFontFileGUID = i797[1]
  i796.pointSizeSamplingMode = i797[2]
  i796.pointSize = i797[3]
  i796.padding = i797[4]
  i796.packingMode = i797[5]
  i796.atlasWidth = i797[6]
  i796.atlasHeight = i797[7]
  i796.characterSetSelectionMode = i797[8]
  i796.characterSequence = i797[9]
  i796.referencedFontAssetGUID = i797[10]
  i796.referencedTextAssetGUID = i797[11]
  i796.fontStyle = i797[12]
  i796.fontStyleModifier = i797[13]
  i796.renderMode = i797[14]
  i796.includeFontFeatures = !!i797[15]
  return i796
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i800 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'regularTypeface')
  request.r(i801[2], i801[3], 0, i800, 'italicTypeface')
  return i800
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i802 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i803 = data
  i802.useSafeMode = !!i803[0]
  i802.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i803[1], i802.safeModeOptions)
  i802.timeScale = i803[2]
  i802.unscaledTimeScale = i803[3]
  i802.useSmoothDeltaTime = !!i803[4]
  i802.maxSmoothUnscaledTime = i803[5]
  i802.rewindCallbackMode = i803[6]
  i802.showUnityEditorReport = !!i803[7]
  i802.logBehaviour = i803[8]
  i802.drawGizmos = !!i803[9]
  i802.defaultRecyclable = !!i803[10]
  i802.defaultAutoPlay = i803[11]
  i802.defaultUpdateType = i803[12]
  i802.defaultTimeScaleIndependent = !!i803[13]
  i802.defaultEaseType = i803[14]
  i802.defaultEaseOvershootOrAmplitude = i803[15]
  i802.defaultEasePeriod = i803[16]
  i802.defaultAutoKill = !!i803[17]
  i802.defaultLoopType = i803[18]
  i802.debugMode = !!i803[19]
  i802.debugStoreTargetId = !!i803[20]
  i802.showPreviewPanel = !!i803[21]
  i802.storeSettingsLocation = i803[22]
  i802.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i803[23], i802.modules)
  i802.createASMDEF = !!i803[24]
  i802.showPlayingTweens = !!i803[25]
  i802.showPausedTweens = !!i803[26]
  return i802
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i804 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i805 = data
  i804.logBehaviour = i805[0]
  i804.nestedTweenFailureBehaviour = i805[1]
  return i804
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i806 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i807 = data
  i806.showPanel = !!i807[0]
  i806.audioEnabled = !!i807[1]
  i806.physicsEnabled = !!i807[2]
  i806.physics2DEnabled = !!i807[3]
  i806.spriteEnabled = !!i807[4]
  i806.uiEnabled = !!i807[5]
  i806.textMeshProEnabled = !!i807[6]
  i806.tk2DEnabled = !!i807[7]
  i806.deAudioEnabled = !!i807[8]
  i806.deUnityExtendedEnabled = !!i807[9]
  i806.epoOutlineEnabled = !!i807[10]
  return i806
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i808 = root || request.c( 'TMPro.TMP_Settings' )
  var i809 = data
  i808.m_enableWordWrapping = !!i809[0]
  i808.m_enableKerning = !!i809[1]
  i808.m_enableExtraPadding = !!i809[2]
  i808.m_enableTintAllSprites = !!i809[3]
  i808.m_enableParseEscapeCharacters = !!i809[4]
  i808.m_EnableRaycastTarget = !!i809[5]
  i808.m_GetFontFeaturesAtRuntime = !!i809[6]
  i808.m_missingGlyphCharacter = i809[7]
  i808.m_warningsDisabled = !!i809[8]
  request.r(i809[9], i809[10], 0, i808, 'm_defaultFontAsset')
  i808.m_defaultFontAssetPath = i809[11]
  i808.m_defaultFontSize = i809[12]
  i808.m_defaultAutoSizeMinRatio = i809[13]
  i808.m_defaultAutoSizeMaxRatio = i809[14]
  i808.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i809[15], i809[16] )
  i808.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i809[17], i809[18] )
  i808.m_autoSizeTextContainer = !!i809[19]
  i808.m_IsTextObjectScaleStatic = !!i809[20]
  var i811 = i809[21]
  var i810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 1, i810, '')
  }
  i808.m_fallbackFontAssets = i810
  i808.m_matchMaterialPreset = !!i809[22]
  request.r(i809[23], i809[24], 0, i808, 'm_defaultSpriteAsset')
  i808.m_defaultSpriteAssetPath = i809[25]
  i808.m_enableEmojiSupport = !!i809[26]
  i808.m_MissingCharacterSpriteUnicode = i809[27]
  i808.m_defaultColorGradientPresetsPath = i809[28]
  request.r(i809[29], i809[30], 0, i808, 'm_defaultStyleSheet')
  i808.m_StyleSheetsResourcePath = i809[31]
  request.r(i809[32], i809[33], 0, i808, 'm_leadingCharacters')
  request.r(i809[34], i809[35], 0, i808, 'm_followingCharacters')
  i808.m_UseModernHangulLineBreakingRules = !!i809[36]
  return i808
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i812 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i813 = data
  i812.m_GlyphIndex = i813[0]
  i812.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i813[1], i812.m_GlyphValueRecord)
  return i812
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i814 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i815 = data
  i814.m_XPlacement = i815[0]
  i814.m_YPlacement = i815[1]
  i814.m_XAdvance = i815[2]
  i814.m_YAdvance = i815[3]
  return i814
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i816 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i817 = data
  i816.hashCode = i817[0]
  request.r(i817[1], i817[2], 0, i816, 'material')
  i816.materialHashCode = i817[3]
  request.r(i817[4], i817[5], 0, i816, 'spriteSheet')
  var i819 = i817[6]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i819.length; i += 1) {
    i818.add(request.d('TMPro.TMP_Sprite', i819[i + 0]));
  }
  i816.spriteInfoList = i818
  var i821 = i817[7]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i821.length; i += 2) {
  request.r(i821[i + 0], i821[i + 1], 1, i820, '')
  }
  i816.fallbackSpriteAssets = i820
  i816.m_Version = i817[8]
  i816.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i817[9], i816.m_FaceInfo)
  var i823 = i817[10]
  var i822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i823.length; i += 1) {
    i822.add(request.d('TMPro.TMP_SpriteCharacter', i823[i + 0]));
  }
  i816.m_SpriteCharacterTable = i822
  var i825 = i817[11]
  var i824 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i825.length; i += 1) {
    i824.add(request.d('TMPro.TMP_SpriteGlyph', i825[i + 0]));
  }
  i816.m_SpriteGlyphTable = i824
  return i816
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i828 = root || request.c( 'TMPro.TMP_Sprite' )
  var i829 = data
  i828.name = i829[0]
  i828.hashCode = i829[1]
  i828.unicode = i829[2]
  i828.pivot = new pc.Vec2( i829[3], i829[4] )
  request.r(i829[5], i829[6], 0, i828, 'sprite')
  i828.id = i829[7]
  i828.x = i829[8]
  i828.y = i829[9]
  i828.width = i829[10]
  i828.height = i829[11]
  i828.xOffset = i829[12]
  i828.yOffset = i829[13]
  i828.xAdvance = i829[14]
  i828.scale = i829[15]
  return i828
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i834 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i835 = data
  i834.m_Name = i835[0]
  i834.m_HashCode = i835[1]
  i834.m_ElementType = i835[2]
  i834.m_Unicode = i835[3]
  i834.m_GlyphIndex = i835[4]
  i834.m_Scale = i835[5]
  return i834
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'sprite')
  i838.m_Index = i839[2]
  i838.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i839[3], i838.m_Metrics)
  i838.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i839[4], i838.m_GlyphRect)
  i838.m_Scale = i839[5]
  i838.m_AtlasIndex = i839[6]
  i838.m_ClassDefinitionType = i839[7]
  return i838
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i841 = data
  var i843 = i841[0]
  var i842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i843.length; i += 1) {
    i842.add(request.d('TMPro.TMP_Style', i843[i + 0]));
  }
  i840.m_StyleList = i842
  return i840
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.TMP_Style' )
  var i847 = data
  i846.m_Name = i847[0]
  i846.m_HashCode = i847[1]
  i846.m_OpeningDefinition = i847[2]
  i846.m_ClosingDefinition = i847[3]
  i846.m_OpeningTagArray = i847[4]
  i846.m_ClosingTagArray = i847[5]
  i846.m_OpeningTagUnicodeArray = i847[6]
  i846.m_ClosingTagUnicodeArray = i847[7]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i849 = data
  var i851 = i849[0]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i851[i + 0]) );
  }
  i848.files = i850
  i848.componentToPrefabIds = i849[1]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i855 = data
  i854.path = i855[0]
  request.r(i855[1], i855[2], 0, i854, 'unityObject')
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i857 = data
  var i859 = i857[0]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i859[i + 0]) );
  }
  i856.scriptsExecutionOrder = i858
  var i861 = i857[1]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i861[i + 0]) );
  }
  i856.sortingLayers = i860
  var i863 = i857[2]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i863[i + 0]) );
  }
  i856.cullingLayers = i862
  i856.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i857[3], i856.timeSettings)
  i856.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i857[4], i856.physicsSettings)
  i856.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i857[5], i856.physics2DSettings)
  i856.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i857[6], i856.qualitySettings)
  i856.enableRealtimeShadows = !!i857[7]
  i856.enableAutoInstancing = !!i857[8]
  i856.enableDynamicBatching = !!i857[9]
  i856.lightmapEncodingQuality = i857[10]
  i856.desiredColorSpace = i857[11]
  var i865 = i857[12]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( i865[i + 0] );
  }
  i856.allTags = i864
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i869 = data
  i868.name = i869[0]
  i868.value = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i873 = data
  i872.id = i873[0]
  i872.name = i873[1]
  i872.value = i873[2]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i877 = data
  i876.id = i877[0]
  i876.name = i877[1]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i879 = data
  i878.fixedDeltaTime = i879[0]
  i878.maximumDeltaTime = i879[1]
  i878.timeScale = i879[2]
  i878.maximumParticleTimestep = i879[3]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i881 = data
  i880.gravity = new pc.Vec3( i881[0], i881[1], i881[2] )
  i880.defaultSolverIterations = i881[3]
  i880.bounceThreshold = i881[4]
  i880.autoSyncTransforms = !!i881[5]
  i880.autoSimulation = !!i881[6]
  var i883 = i881[7]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i883[i + 0]) );
  }
  i880.collisionMatrix = i882
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i887 = data
  i886.enabled = !!i887[0]
  i886.layerId = i887[1]
  i886.otherLayerId = i887[2]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'material')
  i888.gravity = new pc.Vec2( i889[2], i889[3] )
  i888.positionIterations = i889[4]
  i888.velocityIterations = i889[5]
  i888.velocityThreshold = i889[6]
  i888.maxLinearCorrection = i889[7]
  i888.maxAngularCorrection = i889[8]
  i888.maxTranslationSpeed = i889[9]
  i888.maxRotationSpeed = i889[10]
  i888.baumgarteScale = i889[11]
  i888.baumgarteTOIScale = i889[12]
  i888.timeToSleep = i889[13]
  i888.linearSleepTolerance = i889[14]
  i888.angularSleepTolerance = i889[15]
  i888.defaultContactOffset = i889[16]
  i888.autoSimulation = !!i889[17]
  i888.queriesHitTriggers = !!i889[18]
  i888.queriesStartInColliders = !!i889[19]
  i888.callbacksOnDisable = !!i889[20]
  i888.reuseCollisionCallbacks = !!i889[21]
  i888.autoSyncTransforms = !!i889[22]
  var i891 = i889[23]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i891[i + 0]) );
  }
  i888.collisionMatrix = i890
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i895 = data
  i894.enabled = !!i895[0]
  i894.layerId = i895[1]
  i894.otherLayerId = i895[2]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i897 = data
  var i899 = i897[0]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i899[i + 0]) );
  }
  i896.qualityLevels = i898
  var i901 = i897[1]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( i901[i + 0] );
  }
  i896.names = i900
  i896.shadows = i897[2]
  i896.anisotropicFiltering = i897[3]
  i896.antiAliasing = i897[4]
  i896.lodBias = i897[5]
  i896.shadowCascades = i897[6]
  i896.shadowDistance = i897[7]
  i896.shadowmaskMode = i897[8]
  i896.shadowProjection = i897[9]
  i896.shadowResolution = i897[10]
  i896.softParticles = !!i897[11]
  i896.softVegetation = !!i897[12]
  i896.activeColorSpace = i897[13]
  i896.desiredColorSpace = i897[14]
  i896.masterTextureLimit = i897[15]
  i896.maxQueuedFrames = i897[16]
  i896.particleRaycastBudget = i897[17]
  i896.pixelLightCount = i897[18]
  i896.realtimeReflectionProbes = !!i897[19]
  i896.shadowCascade2Split = i897[20]
  i896.shadowCascade4Split = new pc.Vec3( i897[21], i897[22], i897[23] )
  i896.streamingMipmapsActive = !!i897[24]
  i896.vSyncCount = i897[25]
  i896.asyncUploadBufferSize = i897[26]
  i896.asyncUploadTimeSlice = i897[27]
  i896.billboardsFaceCameraPosition = !!i897[28]
  i896.shadowNearPlaneOffset = i897[29]
  i896.streamingMipmapsMemoryBudget = i897[30]
  i896.maximumLODLevel = i897[31]
  i896.streamingMipmapsAddAllCameras = !!i897[32]
  i896.streamingMipmapsMaxLevelReduction = i897[33]
  i896.streamingMipmapsRenderersPerFrame = i897[34]
  i896.resolutionScalingFixedDPIFactor = i897[35]
  i896.streamingMipmapsMaxFileIORequests = i897[36]
  i896.currentQualityLevel = i897[37]
  return i896
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'm_ObjectArgument')
  i904.m_ObjectArgumentAssemblyTypeName = i905[2]
  i904.m_IntArgument = i905[3]
  i904.m_FloatArgument = i905[4]
  i904.m_StringArgument = i905[5]
  i904.m_BoolArgument = !!i905[6]
  return i904
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i906 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i907 = data
  i906.xPlacement = i907[0]
  i906.yPlacement = i907[1]
  i906.xAdvance = i907[2]
  i906.yAdvance = i907[3]
  return i906
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[3],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[52],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[3],"74":[75],"76":[77],"78":[77],"9":[8],"79":[80],"81":[82],"83":[80],"84":[8],"85":[8],"11":[9],"18":[19,8],"86":[8],"10":[9],"87":[8],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"32":[8],"94":[8],"16":[19,8],"95":[8],"96":[8],"97":[8],"98":[8],"99":[19,8],"100":[8],"101":[6],"102":[6],"7":[6],"103":[6],"104":[3],"105":[3],"106":[107],"108":[3],"109":[110],"111":[8],"112":[19,8],"113":[75],"25":[19,8],"114":[115,75],"116":[75],"117":[75,118],"119":[52],"120":[60],"121":[110],"122":[123],"124":[8],"125":[75,8],"17":[8,19],"126":[8],"127":[19,8],"128":[75],"129":[19,8],"130":[8],"131":[80]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.BoxCollider2D","DropZone","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DraggableItem","UnityEngine.CanvasGroup","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","IQFill","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "48.3";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "APG_V11_NgocNDL_AnhPD";

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

Deserializers.buildID = "1f4bebd0-8980-4aa3-9150-649193e933b7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

