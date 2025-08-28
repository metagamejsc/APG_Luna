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
  request.r(i531[20], i531[21], 0, i530, 'chatBox')
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

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.UI.Image' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'm_Sprite')
  i542.m_Type = i543[2]
  i542.m_PreserveAspect = !!i543[3]
  i542.m_FillCenter = !!i543[4]
  i542.m_FillMethod = i543[5]
  i542.m_FillAmount = i543[6]
  i542.m_FillClockwise = !!i543[7]
  i542.m_FillOrigin = i543[8]
  i542.m_UseSpriteMesh = !!i543[9]
  i542.m_PixelsPerUnitMultiplier = i543[10]
  request.r(i543[11], i543[12], 0, i542, 'm_Material')
  i542.m_Maskable = !!i543[13]
  i542.m_Color = new pc.Color(i543[14], i543[15], i543[16], i543[17])
  i542.m_RaycastTarget = !!i543[18]
  i542.m_RaycastPadding = new pc.Vec4( i543[19], i543[20], i543[21], i543[22] )
  return i542
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i544 = root || request.c( 'DraggableItem' )
  var i545 = data
  i544.idDrag = i545[0]
  i544.isClick = !!i545[1]
  var i547 = i545[2]
  var i546 = []
  for(var i = 0; i < i547.length; i += 2) {
  request.r(i547[i + 0], i547[i + 1], 2, i546, '')
  }
  i544.steps = i546
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i551 = data
  i550.m_Alpha = i551[0]
  i550.m_Interactable = !!i551[1]
  i550.m_BlocksRaycasts = !!i551[2]
  i550.m_IgnoreParentGroups = !!i551[3]
  i550.enabled = !!i551[4]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i571 = data
  i570.usedByComposite = !!i571[0]
  i570.autoTiling = !!i571[1]
  i570.size = new pc.Vec2( i571[2], i571[3] )
  i570.edgeRadius = i571[4]
  i570.enabled = !!i571[5]
  i570.isTrigger = !!i571[6]
  i570.usedByEffector = !!i571[7]
  i570.density = i571[8]
  i570.offset = new pc.Vec2( i571[9], i571[10] )
  request.r(i571[11], i571[12], 0, i570, 'material')
  return i570
}

Deserializers["DropZone"] = function (request, data, root) {
  var i572 = root || request.c( 'DropZone' )
  var i573 = data
  i572.idDrop = i573[0]
  var i575 = i573[1]
  var i574 = []
  for(var i = 0; i < i575.length; i += 2) {
  request.r(i575[i + 0], i575[i + 1], 2, i574, '')
  }
  i572.steps = i574
  i572.isDontWork = !!i573[2]
  return i572
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

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'm_ObjectArgument')
  i588.m_ObjectArgumentAssemblyTypeName = i589[2]
  i588.m_IntArgument = i589[3]
  i588.m_FloatArgument = i589[4]
  i588.m_StringArgument = i589[5]
  i588.m_BoolArgument = !!i589[6]
  return i588
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i590 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i591 = data
  i590.m_hasFontAssetChanged = !!i591[0]
  request.r(i591[1], i591[2], 0, i590, 'm_baseMaterial')
  i590.m_maskOffset = new pc.Vec4( i591[3], i591[4], i591[5], i591[6] )
  i590.m_text = i591[7]
  i590.m_isRightToLeft = !!i591[8]
  request.r(i591[9], i591[10], 0, i590, 'm_fontAsset')
  request.r(i591[11], i591[12], 0, i590, 'm_sharedMaterial')
  var i593 = i591[13]
  var i592 = []
  for(var i = 0; i < i593.length; i += 2) {
  request.r(i593[i + 0], i593[i + 1], 2, i592, '')
  }
  i590.m_fontSharedMaterials = i592
  request.r(i591[14], i591[15], 0, i590, 'm_fontMaterial')
  var i595 = i591[16]
  var i594 = []
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 2, i594, '')
  }
  i590.m_fontMaterials = i594
  i590.m_fontColor32 = UnityEngine.Color32.ConstructColor(i591[17], i591[18], i591[19], i591[20])
  i590.m_fontColor = new pc.Color(i591[21], i591[22], i591[23], i591[24])
  i590.m_enableVertexGradient = !!i591[25]
  i590.m_colorMode = i591[26]
  i590.m_fontColorGradient = request.d('TMPro.VertexGradient', i591[27], i590.m_fontColorGradient)
  request.r(i591[28], i591[29], 0, i590, 'm_fontColorGradientPreset')
  request.r(i591[30], i591[31], 0, i590, 'm_spriteAsset')
  i590.m_tintAllSprites = !!i591[32]
  request.r(i591[33], i591[34], 0, i590, 'm_StyleSheet')
  i590.m_TextStyleHashCode = i591[35]
  i590.m_overrideHtmlColors = !!i591[36]
  i590.m_faceColor = UnityEngine.Color32.ConstructColor(i591[37], i591[38], i591[39], i591[40])
  i590.m_fontSize = i591[41]
  i590.m_fontSizeBase = i591[42]
  i590.m_fontWeight = i591[43]
  i590.m_enableAutoSizing = !!i591[44]
  i590.m_fontSizeMin = i591[45]
  i590.m_fontSizeMax = i591[46]
  i590.m_fontStyle = i591[47]
  i590.m_HorizontalAlignment = i591[48]
  i590.m_VerticalAlignment = i591[49]
  i590.m_textAlignment = i591[50]
  i590.m_characterSpacing = i591[51]
  i590.m_wordSpacing = i591[52]
  i590.m_lineSpacing = i591[53]
  i590.m_lineSpacingMax = i591[54]
  i590.m_paragraphSpacing = i591[55]
  i590.m_charWidthMaxAdj = i591[56]
  i590.m_enableWordWrapping = !!i591[57]
  i590.m_wordWrappingRatios = i591[58]
  i590.m_overflowMode = i591[59]
  request.r(i591[60], i591[61], 0, i590, 'm_linkedTextComponent')
  request.r(i591[62], i591[63], 0, i590, 'parentLinkedComponent')
  i590.m_enableKerning = !!i591[64]
  i590.m_enableExtraPadding = !!i591[65]
  i590.checkPaddingRequired = !!i591[66]
  i590.m_isRichText = !!i591[67]
  i590.m_parseCtrlCharacters = !!i591[68]
  i590.m_isOrthographic = !!i591[69]
  i590.m_isCullingEnabled = !!i591[70]
  i590.m_horizontalMapping = i591[71]
  i590.m_verticalMapping = i591[72]
  i590.m_uvLineOffset = i591[73]
  i590.m_geometrySortingOrder = i591[74]
  i590.m_IsTextObjectScaleStatic = !!i591[75]
  i590.m_VertexBufferAutoSizeReduction = !!i591[76]
  i590.m_useMaxVisibleDescender = !!i591[77]
  i590.m_pageToDisplay = i591[78]
  i590.m_margin = new pc.Vec4( i591[79], i591[80], i591[81], i591[82] )
  i590.m_isUsingLegacyAnimationComponent = !!i591[83]
  i590.m_isVolumetricText = !!i591[84]
  request.r(i591[85], i591[86], 0, i590, 'm_Material')
  i590.m_Maskable = !!i591[87]
  i590.m_Color = new pc.Color(i591[88], i591[89], i591[90], i591[91])
  i590.m_RaycastTarget = !!i591[92]
  i590.m_RaycastPadding = new pc.Vec4( i591[93], i591[94], i591[95], i591[96] )
  return i590
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i598 = root || request.c( 'TMPro.VertexGradient' )
  var i599 = data
  i598.topLeft = new pc.Color(i599[0], i599[1], i599[2], i599[3])
  i598.topRight = new pc.Color(i599[4], i599[5], i599[6], i599[7])
  i598.bottomLeft = new pc.Color(i599[8], i599[9], i599[10], i599[11])
  i598.bottomRight = new pc.Color(i599[12], i599[13], i599[14], i599[15])
  return i598
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.Button' )
  var i601 = data
  i600.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i601[0], i600.m_OnClick)
  i600.m_Navigation = request.d('UnityEngine.UI.Navigation', i601[1], i600.m_Navigation)
  i600.m_Transition = i601[2]
  i600.m_Colors = request.d('UnityEngine.UI.ColorBlock', i601[3], i600.m_Colors)
  i600.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i601[4], i600.m_SpriteState)
  i600.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i601[5], i600.m_AnimationTriggers)
  i600.m_Interactable = !!i601[6]
  request.r(i601[7], i601[8], 0, i600, 'm_TargetGraphic')
  return i600
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i603 = data
  i602.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i603[0], i602.m_PersistentCalls)
  return i602
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i605 = data
  i604.m_Mode = i605[0]
  i604.m_WrapAround = !!i605[1]
  request.r(i605[2], i605[3], 0, i604, 'm_SelectOnUp')
  request.r(i605[4], i605[5], 0, i604, 'm_SelectOnDown')
  request.r(i605[6], i605[7], 0, i604, 'm_SelectOnLeft')
  request.r(i605[8], i605[9], 0, i604, 'm_SelectOnRight')
  return i604
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i607 = data
  i606.m_NormalColor = new pc.Color(i607[0], i607[1], i607[2], i607[3])
  i606.m_HighlightedColor = new pc.Color(i607[4], i607[5], i607[6], i607[7])
  i606.m_PressedColor = new pc.Color(i607[8], i607[9], i607[10], i607[11])
  i606.m_SelectedColor = new pc.Color(i607[12], i607[13], i607[14], i607[15])
  i606.m_DisabledColor = new pc.Color(i607[16], i607[17], i607[18], i607[19])
  i606.m_ColorMultiplier = i607[20]
  i606.m_FadeDuration = i607[21]
  return i606
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'm_HighlightedSprite')
  request.r(i609[2], i609[3], 0, i608, 'm_PressedSprite')
  request.r(i609[4], i609[5], 0, i608, 'm_SelectedSprite')
  request.r(i609[6], i609[7], 0, i608, 'm_DisabledSprite')
  return i608
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i611 = data
  i610.m_NormalTrigger = i611[0]
  i610.m_HighlightedTrigger = i611[1]
  i610.m_PressedTrigger = i611[2]
  i610.m_SelectedTrigger = i611[3]
  i610.m_DisabledTrigger = i611[4]
  return i610
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.Mask' )
  var i613 = data
  i612.m_ShowMaskGraphic = !!i613[0]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i615 = data
  i614.ambientIntensity = i615[0]
  i614.reflectionIntensity = i615[1]
  i614.ambientMode = i615[2]
  i614.ambientLight = new pc.Color(i615[3], i615[4], i615[5], i615[6])
  i614.ambientSkyColor = new pc.Color(i615[7], i615[8], i615[9], i615[10])
  i614.ambientGroundColor = new pc.Color(i615[11], i615[12], i615[13], i615[14])
  i614.ambientEquatorColor = new pc.Color(i615[15], i615[16], i615[17], i615[18])
  i614.fogColor = new pc.Color(i615[19], i615[20], i615[21], i615[22])
  i614.fogEndDistance = i615[23]
  i614.fogStartDistance = i615[24]
  i614.fogDensity = i615[25]
  i614.fog = !!i615[26]
  request.r(i615[27], i615[28], 0, i614, 'skybox')
  i614.fogMode = i615[29]
  var i617 = i615[30]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i617[i + 0]) );
  }
  i614.lightmaps = i616
  i614.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i615[31], i614.lightProbes)
  i614.lightmapsMode = i615[32]
  i614.mixedBakeMode = i615[33]
  i614.environmentLightingMode = i615[34]
  i614.ambientProbe = new pc.SphericalHarmonicsL2(i615[35])
  i614.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i615[36])
  i614.useReferenceAmbientProbe = !!i615[37]
  request.r(i615[38], i615[39], 0, i614, 'customReflection')
  request.r(i615[40], i615[41], 0, i614, 'defaultReflection')
  i614.defaultReflectionMode = i615[42]
  i614.defaultReflectionResolution = i615[43]
  i614.sunLightObjectId = i615[44]
  i614.pixelLightCount = i615[45]
  i614.defaultReflectionHDR = !!i615[46]
  i614.hasLightDataAsset = !!i615[47]
  i614.hasManualGenerate = !!i615[48]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'lightmapColor')
  request.r(i621[2], i621[3], 0, i620, 'lightmapDirection')
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i622 = root || new UnityEngine.LightProbes()
  var i623 = data
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i631 = data
  var i633 = i631[0]
  var i632 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i633.length; i += 1) {
    i632.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i633[i + 0]));
  }
  i630.ShaderCompilationErrors = i632
  i630.name = i631[1]
  i630.guid = i631[2]
  var i635 = i631[3]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( i635[i + 0] );
  }
  i630.shaderDefinedKeywords = i634
  var i637 = i631[4]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i637[i + 0]) );
  }
  i630.passes = i636
  var i639 = i631[5]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i639[i + 0]) );
  }
  i630.usePasses = i638
  var i641 = i631[6]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i641[i + 0]) );
  }
  i630.defaultParameterValues = i640
  request.r(i631[7], i631[8], 0, i630, 'unityFallbackShader')
  i630.readDepth = !!i631[9]
  i630.isCreatedByShaderGraph = !!i631[10]
  i630.usedBatchUniforms = i631[11]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i645 = data
  i644.shaderName = i645[0]
  i644.errorMessage = i645[1]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i648 = root || new pc.UnityShaderPass()
  var i649 = data
  i648.id = i649[0]
  i648.subShaderIndex = i649[1]
  i648.name = i649[2]
  i648.passType = i649[3]
  i648.grabPassTextureName = i649[4]
  i648.usePass = !!i649[5]
  i648.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[6], i648.zTest)
  i648.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[7], i648.zWrite)
  i648.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[8], i648.culling)
  i648.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i649[9], i648.blending)
  i648.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i649[10], i648.alphaBlending)
  i648.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[11], i648.colorWriteMask)
  i648.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[12], i648.offsetUnits)
  i648.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[13], i648.offsetFactor)
  i648.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[14], i648.stencilRef)
  i648.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[15], i648.stencilReadMask)
  i648.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[16], i648.stencilWriteMask)
  i648.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i649[17], i648.stencilOp)
  i648.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i649[18], i648.stencilOpFront)
  i648.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i649[19], i648.stencilOpBack)
  var i651 = i649[20]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i651[i + 0]) );
  }
  i648.tags = i650
  var i653 = i649[21]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( i653[i + 0] );
  }
  i648.passDefinedKeywords = i652
  var i655 = i649[22]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i655[i + 0]) );
  }
  i648.passDefinedKeywordGroups = i654
  var i657 = i649[23]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i657[i + 0]) );
  }
  i648.variants = i656
  var i659 = i649[24]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i659[i + 0]) );
  }
  i648.excludedVariants = i658
  i648.hasDepthReader = !!i649[25]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i661 = data
  i660.val = i661[0]
  i660.name = i661[1]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i663 = data
  i662.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[0], i662.src)
  i662.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[1], i662.dst)
  i662.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[2], i662.op)
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i665 = data
  i664.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[0], i664.pass)
  i664.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[1], i664.fail)
  i664.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[2], i664.zFail)
  i664.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[3], i664.comp)
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i669 = data
  i668.name = i669[0]
  i668.value = i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i673 = data
  var i675 = i673[0]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( i675[i + 0] );
  }
  i672.keywords = i674
  i672.hasDiscard = !!i673[1]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i679 = data
  i678.passId = i679[0]
  i678.subShaderIndex = i679[1]
  var i681 = i679[2]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( i681[i + 0] );
  }
  i678.keywords = i680
  i678.vertexProgram = i679[3]
  i678.fragmentProgram = i679[4]
  i678.compiledForWebGL2 = !!i679[5]
  i678.readDepth = !!i679[6]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'shader')
  i684.pass = i685[2]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i689 = data
  i688.name = i689[0]
  i688.type = i689[1]
  i688.value = new pc.Vec4( i689[2], i689[3], i689[4], i689[5] )
  i688.textureValue = i689[6]
  i688.shaderPropertyFlag = i689[7]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i691 = data
  i690.name = i691[0]
  request.r(i691[1], i691[2], 0, i690, 'texture')
  i690.aabb = i691[3]
  i690.vertices = i691[4]
  i690.triangles = i691[5]
  i690.textureRect = UnityEngine.Rect.MinMaxRect(i691[6], i691[7], i691[8], i691[9])
  i690.packedRect = UnityEngine.Rect.MinMaxRect(i691[10], i691[11], i691[12], i691[13])
  i690.border = new pc.Vec4( i691[14], i691[15], i691[16], i691[17] )
  i690.transparency = i691[18]
  i690.bounds = i691[19]
  i690.pixelsPerUnit = i691[20]
  i690.textureWidth = i691[21]
  i690.textureHeight = i691[22]
  i690.nativeSize = new pc.Vec2( i691[23], i691[24] )
  i690.pivot = new pc.Vec2( i691[25], i691[26] )
  i690.textureRectOffset = new pc.Vec2( i691[27], i691[28] )
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i693 = data
  i692.name = i693[0]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i695 = data
  i694.name = i695[0]
  i694.ascent = i695[1]
  i694.originalLineHeight = i695[2]
  i694.fontSize = i695[3]
  var i697 = i695[4]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i697[i + 0]) );
  }
  i694.characterInfo = i696
  request.r(i695[5], i695[6], 0, i694, 'texture')
  i694.originalFontSize = i695[7]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i701 = data
  i700.index = i701[0]
  i700.advance = i701[1]
  i700.bearing = i701[2]
  i700.glyphWidth = i701[3]
  i700.glyphHeight = i701[4]
  i700.minX = i701[5]
  i700.maxX = i701[6]
  i700.minY = i701[7]
  i700.maxY = i701[8]
  i700.uvBottomLeftX = i701[9]
  i700.uvBottomLeftY = i701[10]
  i700.uvBottomRightX = i701[11]
  i700.uvBottomRightY = i701[12]
  i700.uvTopLeftX = i701[13]
  i700.uvTopLeftY = i701[14]
  i700.uvTopRightX = i701[15]
  i700.uvTopRightY = i701[16]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i703 = data
  i702.name = i703[0]
  i702.bytes64 = i703[1]
  i702.data = i703[2]
  return i702
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i704 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i705 = data
  var i707 = i705[0]
  var i706 = []
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 2, i706, '')
  }
  i704.atlasAssets = i706
  i704.scale = i705[1]
  request.r(i705[2], i705[3], 0, i704, 'skeletonJSON')
  i704.isUpgradingBlendModeMaterials = !!i705[4]
  i704.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i705[5], i704.blendModeMaterials)
  var i709 = i705[6]
  var i708 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 1, i708, '')
  }
  i704.skeletonDataModifiers = i708
  var i711 = i705[7]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( i711[i + 0] );
  }
  i704.fromAnimation = i710
  var i713 = i705[8]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( i713[i + 0] );
  }
  i704.toAnimation = i712
  i704.duration = i705[9]
  i704.defaultMix = i705[10]
  request.r(i705[11], i705[12], 0, i704, 'controller')
  return i704
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i716 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i717 = data
  i716.applyAdditiveMaterial = !!i717[0]
  var i719 = i717[1]
  var i718 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i719.length; i += 1) {
    i718.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i719[i + 0]));
  }
  i716.additiveMaterials = i718
  var i721 = i717[2]
  var i720 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i721.length; i += 1) {
    i720.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i721[i + 0]));
  }
  i716.multiplyMaterials = i720
  var i723 = i717[3]
  var i722 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i723.length; i += 1) {
    i722.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i723[i + 0]));
  }
  i716.screenMaterials = i722
  i716.requiresBlendModeMaterials = !!i717[4]
  return i716
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i726 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i727 = data
  i726.pageName = i727[0]
  request.r(i727[1], i727[2], 0, i726, 'material')
  return i726
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i730 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'atlasFile')
  var i733 = i731[2]
  var i732 = []
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 2, i732, '')
  }
  i730.materials = i732
  i730.textureLoadingMode = i731[3]
  request.r(i731[4], i731[5], 0, i730, 'onDemandTextureLoader')
  return i730
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i734 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i735 = data
  i734.hashCode = i735[0]
  request.r(i735[1], i735[2], 0, i734, 'material')
  i734.materialHashCode = i735[3]
  request.r(i735[4], i735[5], 0, i734, 'atlas')
  i734.normalStyle = i735[6]
  i734.normalSpacingOffset = i735[7]
  i734.boldStyle = i735[8]
  i734.boldSpacing = i735[9]
  i734.italicStyle = i735[10]
  i734.tabSize = i735[11]
  i734.m_Version = i735[12]
  i734.m_SourceFontFileGUID = i735[13]
  request.r(i735[14], i735[15], 0, i734, 'm_SourceFontFile_EditorRef')
  request.r(i735[16], i735[17], 0, i734, 'm_SourceFontFile')
  i734.m_AtlasPopulationMode = i735[18]
  i734.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i735[19], i734.m_FaceInfo)
  var i737 = i735[20]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i737.length; i += 1) {
    i736.add(request.d('UnityEngine.TextCore.Glyph', i737[i + 0]));
  }
  i734.m_GlyphTable = i736
  var i739 = i735[21]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i739.length; i += 1) {
    i738.add(request.d('TMPro.TMP_Character', i739[i + 0]));
  }
  i734.m_CharacterTable = i738
  var i741 = i735[22]
  var i740 = []
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 2, i740, '')
  }
  i734.m_AtlasTextures = i740
  i734.m_AtlasTextureIndex = i735[23]
  i734.m_IsMultiAtlasTexturesEnabled = !!i735[24]
  i734.m_ClearDynamicDataOnBuild = !!i735[25]
  var i743 = i735[26]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i743.length; i += 1) {
    i742.add(request.d('UnityEngine.TextCore.GlyphRect', i743[i + 0]));
  }
  i734.m_UsedGlyphRects = i742
  var i745 = i735[27]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i745.length; i += 1) {
    i744.add(request.d('UnityEngine.TextCore.GlyphRect', i745[i + 0]));
  }
  i734.m_FreeGlyphRects = i744
  i734.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i735[28], i734.m_fontInfo)
  i734.m_AtlasWidth = i735[29]
  i734.m_AtlasHeight = i735[30]
  i734.m_AtlasPadding = i735[31]
  i734.m_AtlasRenderMode = i735[32]
  var i747 = i735[33]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i747.length; i += 1) {
    i746.add(request.d('TMPro.TMP_Glyph', i747[i + 0]));
  }
  i734.m_glyphInfoList = i746
  i734.m_KerningTable = request.d('TMPro.KerningTable', i735[34], i734.m_KerningTable)
  i734.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i735[35], i734.m_FontFeatureTable)
  var i749 = i735[36]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 1, i748, '')
  }
  i734.fallbackFontAssets = i748
  var i751 = i735[37]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 1, i750, '')
  }
  i734.m_FallbackFontAssetTable = i750
  i734.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i735[38], i734.m_CreationSettings)
  var i753 = i735[39]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('TMPro.TMP_FontWeightPair', i753[i + 0]) );
  }
  i734.m_FontWeightTable = i752
  var i755 = i735[40]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('TMPro.TMP_FontWeightPair', i755[i + 0]) );
  }
  i734.fontWeights = i754
  return i734
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i757 = data
  i756.m_FaceIndex = i757[0]
  i756.m_FamilyName = i757[1]
  i756.m_StyleName = i757[2]
  i756.m_PointSize = i757[3]
  i756.m_Scale = i757[4]
  i756.m_UnitsPerEM = i757[5]
  i756.m_LineHeight = i757[6]
  i756.m_AscentLine = i757[7]
  i756.m_CapLine = i757[8]
  i756.m_MeanLine = i757[9]
  i756.m_Baseline = i757[10]
  i756.m_DescentLine = i757[11]
  i756.m_SuperscriptOffset = i757[12]
  i756.m_SuperscriptSize = i757[13]
  i756.m_SubscriptOffset = i757[14]
  i756.m_SubscriptSize = i757[15]
  i756.m_UnderlineOffset = i757[16]
  i756.m_UnderlineThickness = i757[17]
  i756.m_StrikethroughOffset = i757[18]
  i756.m_StrikethroughThickness = i757[19]
  i756.m_TabWidth = i757[20]
  return i756
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i761 = data
  i760.m_Index = i761[0]
  i760.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i761[1], i760.m_Metrics)
  i760.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i761[2], i760.m_GlyphRect)
  i760.m_Scale = i761[3]
  i760.m_AtlasIndex = i761[4]
  i760.m_ClassDefinitionType = i761[5]
  return i760
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i763 = data
  i762.m_Width = i763[0]
  i762.m_Height = i763[1]
  i762.m_HorizontalBearingX = i763[2]
  i762.m_HorizontalBearingY = i763[3]
  i762.m_HorizontalAdvance = i763[4]
  return i762
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i765 = data
  i764.m_X = i765[0]
  i764.m_Y = i765[1]
  i764.m_Width = i765[2]
  i764.m_Height = i765[3]
  return i764
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i768 = root || request.c( 'TMPro.TMP_Character' )
  var i769 = data
  i768.m_ElementType = i769[0]
  i768.m_Unicode = i769[1]
  i768.m_GlyphIndex = i769[2]
  i768.m_Scale = i769[3]
  return i768
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i774 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i775 = data
  i774.Name = i775[0]
  i774.PointSize = i775[1]
  i774.Scale = i775[2]
  i774.CharacterCount = i775[3]
  i774.LineHeight = i775[4]
  i774.Baseline = i775[5]
  i774.Ascender = i775[6]
  i774.CapHeight = i775[7]
  i774.Descender = i775[8]
  i774.CenterLine = i775[9]
  i774.SuperscriptOffset = i775[10]
  i774.SubscriptOffset = i775[11]
  i774.SubSize = i775[12]
  i774.Underline = i775[13]
  i774.UnderlineThickness = i775[14]
  i774.strikethrough = i775[15]
  i774.strikethroughThickness = i775[16]
  i774.TabWidth = i775[17]
  i774.Padding = i775[18]
  i774.AtlasWidth = i775[19]
  i774.AtlasHeight = i775[20]
  return i774
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i778 = root || request.c( 'TMPro.TMP_Glyph' )
  var i779 = data
  i778.id = i779[0]
  i778.x = i779[1]
  i778.y = i779[2]
  i778.width = i779[3]
  i778.height = i779[4]
  i778.xOffset = i779[5]
  i778.yOffset = i779[6]
  i778.xAdvance = i779[7]
  i778.scale = i779[8]
  return i778
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i780 = root || request.c( 'TMPro.KerningTable' )
  var i781 = data
  var i783 = i781[0]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('TMPro.KerningPair', i783[i + 0]));
  }
  i780.kerningPairs = i782
  return i780
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i786 = root || request.c( 'TMPro.KerningPair' )
  var i787 = data
  i786.xOffset = i787[0]
  i786.m_FirstGlyph = i787[1]
  i786.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i787[2], i786.m_FirstGlyphAdjustments)
  i786.m_SecondGlyph = i787[3]
  i786.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i787[4], i786.m_SecondGlyphAdjustments)
  i786.m_IgnoreSpacingAdjustments = !!i787[5]
  return i786
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i788 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i789 = data
  var i791 = i789[0]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i791[i + 0]));
  }
  i788.m_GlyphPairAdjustmentRecords = i790
  return i788
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i794 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i795 = data
  i794.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i795[0], i794.m_FirstAdjustmentRecord)
  i794.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i795[1], i794.m_SecondAdjustmentRecord)
  i794.m_FeatureLookupFlags = i795[2]
  return i794
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i798 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i799 = data
  i798.sourceFontFileName = i799[0]
  i798.sourceFontFileGUID = i799[1]
  i798.pointSizeSamplingMode = i799[2]
  i798.pointSize = i799[3]
  i798.padding = i799[4]
  i798.packingMode = i799[5]
  i798.atlasWidth = i799[6]
  i798.atlasHeight = i799[7]
  i798.characterSetSelectionMode = i799[8]
  i798.characterSequence = i799[9]
  i798.referencedFontAssetGUID = i799[10]
  i798.referencedTextAssetGUID = i799[11]
  i798.fontStyle = i799[12]
  i798.fontStyleModifier = i799[13]
  i798.renderMode = i799[14]
  i798.includeFontFeatures = !!i799[15]
  return i798
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i802 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'regularTypeface')
  request.r(i803[2], i803[3], 0, i802, 'italicTypeface')
  return i802
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i804 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i805 = data
  i804.useSafeMode = !!i805[0]
  i804.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i805[1], i804.safeModeOptions)
  i804.timeScale = i805[2]
  i804.unscaledTimeScale = i805[3]
  i804.useSmoothDeltaTime = !!i805[4]
  i804.maxSmoothUnscaledTime = i805[5]
  i804.rewindCallbackMode = i805[6]
  i804.showUnityEditorReport = !!i805[7]
  i804.logBehaviour = i805[8]
  i804.drawGizmos = !!i805[9]
  i804.defaultRecyclable = !!i805[10]
  i804.defaultAutoPlay = i805[11]
  i804.defaultUpdateType = i805[12]
  i804.defaultTimeScaleIndependent = !!i805[13]
  i804.defaultEaseType = i805[14]
  i804.defaultEaseOvershootOrAmplitude = i805[15]
  i804.defaultEasePeriod = i805[16]
  i804.defaultAutoKill = !!i805[17]
  i804.defaultLoopType = i805[18]
  i804.debugMode = !!i805[19]
  i804.debugStoreTargetId = !!i805[20]
  i804.showPreviewPanel = !!i805[21]
  i804.storeSettingsLocation = i805[22]
  i804.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i805[23], i804.modules)
  i804.createASMDEF = !!i805[24]
  i804.showPlayingTweens = !!i805[25]
  i804.showPausedTweens = !!i805[26]
  return i804
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i806 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i807 = data
  i806.logBehaviour = i807[0]
  i806.nestedTweenFailureBehaviour = i807[1]
  return i806
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i808 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i809 = data
  i808.showPanel = !!i809[0]
  i808.audioEnabled = !!i809[1]
  i808.physicsEnabled = !!i809[2]
  i808.physics2DEnabled = !!i809[3]
  i808.spriteEnabled = !!i809[4]
  i808.uiEnabled = !!i809[5]
  i808.textMeshProEnabled = !!i809[6]
  i808.tk2DEnabled = !!i809[7]
  i808.deAudioEnabled = !!i809[8]
  i808.deUnityExtendedEnabled = !!i809[9]
  i808.epoOutlineEnabled = !!i809[10]
  return i808
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i810 = root || request.c( 'TMPro.TMP_Settings' )
  var i811 = data
  i810.m_enableWordWrapping = !!i811[0]
  i810.m_enableKerning = !!i811[1]
  i810.m_enableExtraPadding = !!i811[2]
  i810.m_enableTintAllSprites = !!i811[3]
  i810.m_enableParseEscapeCharacters = !!i811[4]
  i810.m_EnableRaycastTarget = !!i811[5]
  i810.m_GetFontFeaturesAtRuntime = !!i811[6]
  i810.m_missingGlyphCharacter = i811[7]
  i810.m_warningsDisabled = !!i811[8]
  request.r(i811[9], i811[10], 0, i810, 'm_defaultFontAsset')
  i810.m_defaultFontAssetPath = i811[11]
  i810.m_defaultFontSize = i811[12]
  i810.m_defaultAutoSizeMinRatio = i811[13]
  i810.m_defaultAutoSizeMaxRatio = i811[14]
  i810.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i811[15], i811[16] )
  i810.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i811[17], i811[18] )
  i810.m_autoSizeTextContainer = !!i811[19]
  i810.m_IsTextObjectScaleStatic = !!i811[20]
  var i813 = i811[21]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 1, i812, '')
  }
  i810.m_fallbackFontAssets = i812
  i810.m_matchMaterialPreset = !!i811[22]
  request.r(i811[23], i811[24], 0, i810, 'm_defaultSpriteAsset')
  i810.m_defaultSpriteAssetPath = i811[25]
  i810.m_enableEmojiSupport = !!i811[26]
  i810.m_MissingCharacterSpriteUnicode = i811[27]
  i810.m_defaultColorGradientPresetsPath = i811[28]
  request.r(i811[29], i811[30], 0, i810, 'm_defaultStyleSheet')
  i810.m_StyleSheetsResourcePath = i811[31]
  request.r(i811[32], i811[33], 0, i810, 'm_leadingCharacters')
  request.r(i811[34], i811[35], 0, i810, 'm_followingCharacters')
  i810.m_UseModernHangulLineBreakingRules = !!i811[36]
  return i810
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i814 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i815 = data
  i814.m_GlyphIndex = i815[0]
  i814.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i815[1], i814.m_GlyphValueRecord)
  return i814
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i816 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i817 = data
  i816.m_XPlacement = i817[0]
  i816.m_YPlacement = i817[1]
  i816.m_XAdvance = i817[2]
  i816.m_YAdvance = i817[3]
  return i816
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i818 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i819 = data
  i818.hashCode = i819[0]
  request.r(i819[1], i819[2], 0, i818, 'material')
  i818.materialHashCode = i819[3]
  request.r(i819[4], i819[5], 0, i818, 'spriteSheet')
  var i821 = i819[6]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i821.length; i += 1) {
    i820.add(request.d('TMPro.TMP_Sprite', i821[i + 0]));
  }
  i818.spriteInfoList = i820
  var i823 = i819[7]
  var i822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 1, i822, '')
  }
  i818.fallbackSpriteAssets = i822
  i818.m_Version = i819[8]
  i818.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i819[9], i818.m_FaceInfo)
  var i825 = i819[10]
  var i824 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i825.length; i += 1) {
    i824.add(request.d('TMPro.TMP_SpriteCharacter', i825[i + 0]));
  }
  i818.m_SpriteCharacterTable = i824
  var i827 = i819[11]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i827.length; i += 1) {
    i826.add(request.d('TMPro.TMP_SpriteGlyph', i827[i + 0]));
  }
  i818.m_SpriteGlyphTable = i826
  return i818
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i830 = root || request.c( 'TMPro.TMP_Sprite' )
  var i831 = data
  i830.name = i831[0]
  i830.hashCode = i831[1]
  i830.unicode = i831[2]
  i830.pivot = new pc.Vec2( i831[3], i831[4] )
  request.r(i831[5], i831[6], 0, i830, 'sprite')
  i830.id = i831[7]
  i830.x = i831[8]
  i830.y = i831[9]
  i830.width = i831[10]
  i830.height = i831[11]
  i830.xOffset = i831[12]
  i830.yOffset = i831[13]
  i830.xAdvance = i831[14]
  i830.scale = i831[15]
  return i830
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i837 = data
  i836.m_Name = i837[0]
  i836.m_HashCode = i837[1]
  i836.m_ElementType = i837[2]
  i836.m_Unicode = i837[3]
  i836.m_GlyphIndex = i837[4]
  i836.m_Scale = i837[5]
  return i836
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'sprite')
  i840.m_Index = i841[2]
  i840.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i841[3], i840.m_Metrics)
  i840.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i841[4], i840.m_GlyphRect)
  i840.m_Scale = i841[5]
  i840.m_AtlasIndex = i841[6]
  i840.m_ClassDefinitionType = i841[7]
  return i840
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i843 = data
  var i845 = i843[0]
  var i844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i845.length; i += 1) {
    i844.add(request.d('TMPro.TMP_Style', i845[i + 0]));
  }
  i842.m_StyleList = i844
  return i842
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i848 = root || request.c( 'TMPro.TMP_Style' )
  var i849 = data
  i848.m_Name = i849[0]
  i848.m_HashCode = i849[1]
  i848.m_OpeningDefinition = i849[2]
  i848.m_ClosingDefinition = i849[3]
  i848.m_OpeningTagArray = i849[4]
  i848.m_ClosingTagArray = i849[5]
  i848.m_OpeningTagUnicodeArray = i849[6]
  i848.m_ClosingTagUnicodeArray = i849[7]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i851 = data
  var i853 = i851[0]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i853[i + 0]) );
  }
  i850.files = i852
  i850.componentToPrefabIds = i851[1]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i857 = data
  i856.path = i857[0]
  request.r(i857[1], i857[2], 0, i856, 'unityObject')
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i859 = data
  var i861 = i859[0]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i861[i + 0]) );
  }
  i858.scriptsExecutionOrder = i860
  var i863 = i859[1]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i863[i + 0]) );
  }
  i858.sortingLayers = i862
  var i865 = i859[2]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i865[i + 0]) );
  }
  i858.cullingLayers = i864
  i858.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i859[3], i858.timeSettings)
  i858.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i859[4], i858.physicsSettings)
  i858.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i859[5], i858.physics2DSettings)
  i858.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i859[6], i858.qualitySettings)
  i858.enableRealtimeShadows = !!i859[7]
  i858.enableAutoInstancing = !!i859[8]
  i858.enableDynamicBatching = !!i859[9]
  i858.lightmapEncodingQuality = i859[10]
  i858.desiredColorSpace = i859[11]
  var i867 = i859[12]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( i867[i + 0] );
  }
  i858.allTags = i866
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i871 = data
  i870.name = i871[0]
  i870.value = i871[1]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i875 = data
  i874.id = i875[0]
  i874.name = i875[1]
  i874.value = i875[2]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i879 = data
  i878.id = i879[0]
  i878.name = i879[1]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i881 = data
  i880.fixedDeltaTime = i881[0]
  i880.maximumDeltaTime = i881[1]
  i880.timeScale = i881[2]
  i880.maximumParticleTimestep = i881[3]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i883 = data
  i882.gravity = new pc.Vec3( i883[0], i883[1], i883[2] )
  i882.defaultSolverIterations = i883[3]
  i882.bounceThreshold = i883[4]
  i882.autoSyncTransforms = !!i883[5]
  i882.autoSimulation = !!i883[6]
  var i885 = i883[7]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i885[i + 0]) );
  }
  i882.collisionMatrix = i884
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i889 = data
  i888.enabled = !!i889[0]
  i888.layerId = i889[1]
  i888.otherLayerId = i889[2]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'material')
  i890.gravity = new pc.Vec2( i891[2], i891[3] )
  i890.positionIterations = i891[4]
  i890.velocityIterations = i891[5]
  i890.velocityThreshold = i891[6]
  i890.maxLinearCorrection = i891[7]
  i890.maxAngularCorrection = i891[8]
  i890.maxTranslationSpeed = i891[9]
  i890.maxRotationSpeed = i891[10]
  i890.baumgarteScale = i891[11]
  i890.baumgarteTOIScale = i891[12]
  i890.timeToSleep = i891[13]
  i890.linearSleepTolerance = i891[14]
  i890.angularSleepTolerance = i891[15]
  i890.defaultContactOffset = i891[16]
  i890.autoSimulation = !!i891[17]
  i890.queriesHitTriggers = !!i891[18]
  i890.queriesStartInColliders = !!i891[19]
  i890.callbacksOnDisable = !!i891[20]
  i890.reuseCollisionCallbacks = !!i891[21]
  i890.autoSyncTransforms = !!i891[22]
  var i893 = i891[23]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i893[i + 0]) );
  }
  i890.collisionMatrix = i892
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i897 = data
  i896.enabled = !!i897[0]
  i896.layerId = i897[1]
  i896.otherLayerId = i897[2]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i899 = data
  var i901 = i899[0]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i901[i + 0]) );
  }
  i898.qualityLevels = i900
  var i903 = i899[1]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( i903[i + 0] );
  }
  i898.names = i902
  i898.shadows = i899[2]
  i898.anisotropicFiltering = i899[3]
  i898.antiAliasing = i899[4]
  i898.lodBias = i899[5]
  i898.shadowCascades = i899[6]
  i898.shadowDistance = i899[7]
  i898.shadowmaskMode = i899[8]
  i898.shadowProjection = i899[9]
  i898.shadowResolution = i899[10]
  i898.softParticles = !!i899[11]
  i898.softVegetation = !!i899[12]
  i898.activeColorSpace = i899[13]
  i898.desiredColorSpace = i899[14]
  i898.masterTextureLimit = i899[15]
  i898.maxQueuedFrames = i899[16]
  i898.particleRaycastBudget = i899[17]
  i898.pixelLightCount = i899[18]
  i898.realtimeReflectionProbes = !!i899[19]
  i898.shadowCascade2Split = i899[20]
  i898.shadowCascade4Split = new pc.Vec3( i899[21], i899[22], i899[23] )
  i898.streamingMipmapsActive = !!i899[24]
  i898.vSyncCount = i899[25]
  i898.asyncUploadBufferSize = i899[26]
  i898.asyncUploadTimeSlice = i899[27]
  i898.billboardsFaceCameraPosition = !!i899[28]
  i898.shadowNearPlaneOffset = i899[29]
  i898.streamingMipmapsMemoryBudget = i899[30]
  i898.maximumLODLevel = i899[31]
  i898.streamingMipmapsAddAllCameras = !!i899[32]
  i898.streamingMipmapsMaxLevelReduction = i899[33]
  i898.streamingMipmapsRenderersPerFrame = i899[34]
  i898.resolutionScalingFixedDPIFactor = i899[35]
  i898.streamingMipmapsMaxFileIORequests = i899[36]
  i898.currentQualityLevel = i899[37]
  return i898
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[3],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[51],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[59],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[3],"73":[74],"75":[76],"77":[76],"9":[8],"78":[79],"80":[81],"82":[79],"83":[8],"84":[8],"11":[9],"18":[19,8],"85":[8],"10":[9],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"32":[8],"93":[8],"16":[19,8],"94":[8],"95":[8],"96":[8],"97":[8],"98":[19,8],"99":[8],"100":[6],"101":[6],"7":[6],"102":[6],"103":[3],"104":[3],"105":[106],"107":[3],"108":[109],"110":[8],"111":[19,8],"112":[74],"25":[19,8],"113":[114,74],"115":[74],"116":[74,117],"118":[51],"119":[59],"120":[109],"121":[122],"123":[8],"124":[74,8],"17":[8,19],"125":[8],"126":[19,8],"127":[74],"128":[19,8],"129":[8],"130":[79]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","DraggableItem","UnityEngine.CanvasGroup","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.BoxCollider2D","DropZone","DG.Tweening.DOTweenAnimation","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "51.3";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "BP_V01_ManhND_AnhPD";

Deserializers.lunaAppID = "31727";

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

Deserializers.buildID = "e0adf071-e0f4-458a-a963-bc466649a501";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

