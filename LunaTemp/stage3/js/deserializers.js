var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointSpring' )
  var i479 = data
  i478.spring = i479[0]
  i478.damper = i479[1]
  i478.targetPosition = i479[2]
  return i478
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointMotor' )
  var i481 = data
  i480.m_TargetVelocity = i481[0]
  i480.m_Force = i481[1]
  i480.m_FreeSpin = i481[2]
  return i480
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointLimits' )
  var i483 = data
  i482.m_Min = i483[0]
  i482.m_Max = i483[1]
  i482.m_Bounciness = i483[2]
  i482.m_BounceMinVelocity = i483[3]
  i482.m_ContactDistance = i483[4]
  i482.minBounce = i483[5]
  i482.maxBounce = i483[6]
  return i482
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointDrive' )
  var i485 = data
  i484.m_PositionSpring = i485[0]
  i484.m_PositionDamper = i485[1]
  i484.m_MaximumForce = i485[2]
  i484.m_UseAcceleration = i485[3]
  return i484
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i487 = data
  i486.m_Spring = i487[0]
  i486.m_Damper = i487[1]
  return i486
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i489 = data
  i488.m_Limit = i489[0]
  i488.m_Bounciness = i489[1]
  i488.m_ContactDistance = i489[2]
  return i488
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i491 = data
  i490.m_ExtremumSlip = i491[0]
  i490.m_ExtremumValue = i491[1]
  i490.m_AsymptoteSlip = i491[2]
  i490.m_AsymptoteValue = i491[3]
  i490.m_Stiffness = i491[4]
  return i490
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i493 = data
  i492.m_LowerAngle = i493[0]
  i492.m_UpperAngle = i493[1]
  return i492
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i495 = data
  i494.m_MotorSpeed = i495[0]
  i494.m_MaximumMotorTorque = i495[1]
  return i494
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i497 = data
  i496.m_DampingRatio = i497[0]
  i496.m_Frequency = i497[1]
  i496.m_Angle = i497[2]
  return i496
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i499 = data
  i498.m_LowerTranslation = i499[0]
  i498.m_UpperTranslation = i499[1]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i501 = data
  i500.name = i501[0]
  i500.width = i501[1]
  i500.height = i501[2]
  i500.mipmapCount = i501[3]
  i500.anisoLevel = i501[4]
  i500.filterMode = i501[5]
  i500.hdr = !!i501[6]
  i500.format = i501[7]
  i500.wrapMode = i501[8]
  i500.alphaIsTransparency = !!i501[9]
  i500.alphaSource = i501[10]
  i500.graphicsFormat = i501[11]
  i500.sRGBTexture = !!i501[12]
  i500.desiredColorSpace = i501[13]
  i500.wrapU = i501[14]
  i500.wrapV = i501[15]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i502 = root || new pc.UnityMaterial()
  var i503 = data
  i502.name = i503[0]
  request.r(i503[1], i503[2], 0, i502, 'shader')
  i502.renderQueue = i503[3]
  i502.enableInstancing = !!i503[4]
  var i505 = i503[5]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i505[i + 0]) );
  }
  i502.floatParameters = i504
  var i507 = i503[6]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i507[i + 0]) );
  }
  i502.colorParameters = i506
  var i509 = i503[7]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i509[i + 0]) );
  }
  i502.vectorParameters = i508
  var i511 = i503[8]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i511[i + 0]) );
  }
  i502.textureParameters = i510
  var i513 = i503[9]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i513[i + 0]) );
  }
  i502.materialFlags = i512
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i517 = data
  i516.name = i517[0]
  i516.value = i517[1]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i521 = data
  i520.name = i521[0]
  i520.value = new pc.Color(i521[1], i521[2], i521[3], i521[4])
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i525 = data
  i524.name = i525[0]
  i524.value = new pc.Vec4( i525[1], i525[2], i525[3], i525[4] )
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i529 = data
  i528.name = i529[0]
  request.r(i529[1], i529[2], 0, i528, 'value')
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i533 = data
  i532.name = i533[0]
  i532.enabled = !!i533[1]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i535 = data
  i534.name = i535[0]
  i534.index = i535[1]
  i534.startup = !!i535[2]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i537 = data
  i536.position = new pc.Vec3( i537[0], i537[1], i537[2] )
  i536.scale = new pc.Vec3( i537[3], i537[4], i537[5] )
  i536.rotation = new pc.Quat(i537[6], i537[7], i537[8], i537[9])
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i539 = data
  i538.aspect = i539[0]
  i538.orthographic = !!i539[1]
  i538.orthographicSize = i539[2]
  i538.backgroundColor = new pc.Color(i539[3], i539[4], i539[5], i539[6])
  i538.nearClipPlane = i539[7]
  i538.farClipPlane = i539[8]
  i538.fieldOfView = i539[9]
  i538.depth = i539[10]
  i538.clearFlags = i539[11]
  i538.cullingMask = i539[12]
  i538.rect = i539[13]
  request.r(i539[14], i539[15], 0, i538, 'targetTexture')
  i538.usePhysicalProperties = !!i539[16]
  i538.focalLength = i539[17]
  i538.sensorSize = new pc.Vec2( i539[18], i539[19] )
  i538.lensShift = new pc.Vec2( i539[20], i539[21] )
  i538.gateFit = i539[22]
  i538.commandBufferCount = i539[23]
  i538.cameraType = i539[24]
  i538.enabled = !!i539[25]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i541 = data
  i540.name = i541[0]
  i540.tagId = i541[1]
  i540.enabled = !!i541[2]
  i540.isStatic = !!i541[3]
  i540.layer = i541[4]
  return i540
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'm_FirstSelected')
  i542.m_sendNavigationEvents = !!i543[2]
  i542.m_DragThreshold = i543[3]
  return i542
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i545 = data
  i544.m_HorizontalAxis = i545[0]
  i544.m_VerticalAxis = i545[1]
  i544.m_SubmitButton = i545[2]
  i544.m_CancelButton = i545[3]
  i544.m_InputActionsPerSecond = i545[4]
  i544.m_RepeatDelay = i545[5]
  i544.m_ForceModuleActive = !!i545[6]
  i544.m_SendPointerHoverToParent = !!i545[7]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i547 = data
  i546.pivot = new pc.Vec2( i547[0], i547[1] )
  i546.anchorMin = new pc.Vec2( i547[2], i547[3] )
  i546.anchorMax = new pc.Vec2( i547[4], i547[5] )
  i546.sizeDelta = new pc.Vec2( i547[6], i547[7] )
  i546.anchoredPosition3D = new pc.Vec3( i547[8], i547[9], i547[10] )
  i546.rotation = new pc.Quat(i547[11], i547[12], i547[13], i547[14])
  i546.scale = new pc.Vec3( i547[15], i547[16], i547[17] )
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i549 = data
  i548.planeDistance = i549[0]
  i548.referencePixelsPerUnit = i549[1]
  i548.isFallbackOverlay = !!i549[2]
  i548.renderMode = i549[3]
  i548.renderOrder = i549[4]
  i548.sortingLayerName = i549[5]
  i548.sortingOrder = i549[6]
  i548.scaleFactor = i549[7]
  request.r(i549[8], i549[9], 0, i548, 'worldCamera')
  i548.overrideSorting = !!i549[10]
  i548.pixelPerfect = !!i549[11]
  i548.targetDisplay = i549[12]
  i548.overridePixelPerfect = !!i549[13]
  i548.enabled = !!i549[14]
  return i548
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i551 = data
  i550.m_UiScaleMode = i551[0]
  i550.m_ReferencePixelsPerUnit = i551[1]
  i550.m_ScaleFactor = i551[2]
  i550.m_ReferenceResolution = new pc.Vec2( i551[3], i551[4] )
  i550.m_ScreenMatchMode = i551[5]
  i550.m_MatchWidthOrHeight = i551[6]
  i550.m_PhysicalUnit = i551[7]
  i550.m_FallbackScreenDPI = i551[8]
  i550.m_DefaultSpriteDPI = i551[9]
  i550.m_DynamicPixelsPerUnit = i551[10]
  i550.m_PresetInfoIsWorld = !!i551[11]
  return i550
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i553 = data
  i552.m_IgnoreReversedGraphics = !!i553[0]
  i552.m_BlockingObjects = i553[1]
  i552.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i553[2] )
  return i552
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i554 = root || request.c( 'LunaManager' )
  var i555 = data
  var i557 = i555[0]
  var i556 = []
  for(var i = 0; i < i557.length; i += 2) {
  request.r(i557[i + 0], i557[i + 1], 2, i556, '')
  }
  i554.lstBtnInstall = i556
  request.r(i555[1], i555[2], 0, i554, 'StartCard')
  request.r(i555[3], i555[4], 0, i554, 'EndCard')
  i554.countPlay = i555[5]
  i554.countPlayFinal = i555[6]
  i554.countPlayMax = i555[7]
  i554.timeDropFinal = i555[8]
  i554.colorBG = new pc.Color(i555[9], i555[10], i555[11], i555[12])
  request.r(i555[13], i555[14], 0, i554, 'texture2D')
  request.r(i555[15], i555[16], 0, i554, 'rawImageBG')
  i554.isHead = !!i555[17]
  request.r(i555[18], i555[19], 0, i554, 'textProgess')
  request.r(i555[20], i555[21], 0, i554, 'imgProgess')
  request.r(i555[22], i555[23], 0, i554, 'timeText')
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i561 = data
  i560.cullTransparentMesh = !!i561[0]
  return i560
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'm_Texture')
  i562.m_UVRect = UnityEngine.Rect.MinMaxRect(i563[2], i563[3], i563[4], i563[5])
  i562.m_Maskable = !!i563[6]
  request.r(i563[7], i563[8], 0, i562, 'm_Material')
  i562.m_Color = new pc.Color(i563[9], i563[10], i563[11], i563[12])
  i562.m_RaycastTarget = !!i563[13]
  i562.m_RaycastPadding = new pc.Vec4( i563[14], i563[15], i563[16], i563[17] )
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i565 = data
  request.r(i565[0], i565[1], 0, i564, 'clip')
  request.r(i565[2], i565[3], 0, i564, 'outputAudioMixerGroup')
  i564.playOnAwake = !!i565[4]
  i564.loop = !!i565[5]
  i564.time = i565[6]
  i564.volume = i565[7]
  i564.pitch = i565[8]
  i564.enabled = !!i565[9]
  return i564
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.UI.Image' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'm_Sprite')
  i566.m_Type = i567[2]
  i566.m_PreserveAspect = !!i567[3]
  i566.m_FillCenter = !!i567[4]
  i566.m_FillMethod = i567[5]
  i566.m_FillAmount = i567[6]
  i566.m_FillClockwise = !!i567[7]
  i566.m_FillOrigin = i567[8]
  i566.m_UseSpriteMesh = !!i567[9]
  i566.m_PixelsPerUnitMultiplier = i567[10]
  i566.m_Maskable = !!i567[11]
  request.r(i567[12], i567[13], 0, i566, 'm_Material')
  i566.m_Color = new pc.Color(i567[14], i567[15], i567[16], i567[17])
  i566.m_RaycastTarget = !!i567[18]
  i566.m_RaycastPadding = new pc.Vec4( i567[19], i567[20], i567[21], i567[22] )
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i569 = data
  i568.m_Alpha = i569[0]
  i568.m_Interactable = !!i569[1]
  i568.m_BlocksRaycasts = !!i569[2]
  i568.m_IgnoreParentGroups = !!i569[3]
  i568.enabled = !!i569[4]
  return i568
}

Deserializers["DragCustom"] = function (request, data, root) {
  var i570 = root || request.c( 'DragCustom' )
  var i571 = data
  i570.idDrag = i571[0]
  i570.animationName = i571[1]
  i570.isProcess = !!i571[2]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i573 = data
  i572.usedByComposite = !!i573[0]
  i572.autoTiling = !!i573[1]
  var i575 = i573[2]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
  var i577 = i575[i + 0]
  var i576 = []
  for(var i = 0; i < i577.length; i += 2) {
    i576.push( new pc.Vec2( i577[i + 0], i577[i + 1] ) );
  }
    i574.push( i576 );
  }
  i572.points = i574
  i572.enabled = !!i573[3]
  i572.isTrigger = !!i573[4]
  i572.usedByEffector = !!i573[5]
  i572.density = i573[6]
  i572.offset = new pc.Vec2( i573[7], i573[8] )
  request.r(i573[9], i573[10], 0, i572, 'material')
  return i572
}

Deserializers["DropCustom"] = function (request, data, root) {
  var i584 = root || request.c( 'DropCustom' )
  var i585 = data
  i584.idDrop = i585[0]
  var i587 = i585[1]
  var i586 = []
  for(var i = 0; i < i587.length; i += 2) {
  request.r(i587[i + 0], i587[i + 1], 2, i586, '')
  }
  i584.steps = i586
  request.r(i585[2], i585[3], 0, i584, 'skeletonGraphic')
  i584.animationNameDefault = i585[4]
  request.r(i585[5], i585[6], 0, i584, 'mixSkeletonSkin')
  return i584
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i590 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'skeletonDataAsset')
  request.r(i591[2], i591[3], 0, i590, 'additiveMaterial')
  request.r(i591[4], i591[5], 0, i590, 'multiplyMaterial')
  request.r(i591[6], i591[7], 0, i590, 'screenMaterial')
  i590.initialSkinName = i591[8]
  i590.initialFlipX = !!i591[9]
  i590.initialFlipY = !!i591[10]
  i590.startingAnimation = i591[11]
  i590.startingLoop = !!i591[12]
  i590.timeScale = i591[13]
  i590.freeze = !!i591[14]
  i590.layoutScaleMode = i591[15]
  i590.updateWhenInvisible = i591[16]
  i590.allowMultipleCanvasRenderers = !!i591[17]
  var i593 = i591[18]
  var i592 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i593.length; i += 2) {
  request.r(i593[i + 0], i593[i + 1], 1, i592, '')
  }
  i590.canvasRenderers = i592
  i590.enableSeparatorSlots = !!i591[19]
  i590.updateSeparatorPartLocation = !!i591[20]
  i590.updateSeparatorPartScale = !!i591[21]
  i590.disableMeshAssignmentOnOverride = !!i591[22]
  i590.referenceSize = new pc.Vec2( i591[23], i591[24] )
  i590.referenceScale = i591[25]
  i590.rectTransformSize = new pc.Vec2( i591[26], i591[27] )
  i590.editReferenceRect = !!i591[28]
  var i595 = i591[29]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( i595[i + 0] );
  }
  i590.separatorSlotNames = i594
  var i597 = i591[30]
  var i596 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 1, i596, '')
  }
  i590.separatorParts = i596
  i590.meshGenerator = request.d('Spine.Unity.MeshGenerator', i591[31], i590.meshGenerator)
  i590.updateTiming = i591[32]
  i590.unscaledTime = !!i591[33]
  i590.m_Maskable = !!i591[34]
  request.r(i591[35], i591[36], 0, i590, 'm_Material')
  i590.m_Color = new pc.Color(i591[37], i591[38], i591[39], i591[40])
  i590.m_RaycastTarget = !!i591[41]
  i590.m_RaycastPadding = new pc.Vec4( i591[42], i591[43], i591[44], i591[45] )
  return i590
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i604 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i605 = data
  i604.settings = request.d('Spine.Unity.MeshGenerator+Settings', i605[0], i604.settings)
  return i604
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i606 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i607 = data
  i606.useClipping = !!i607[0]
  i606.zSpacing = i607[1]
  i606.pmaVertexColors = !!i607[2]
  i606.tintBlack = !!i607[3]
  i606.canvasGroupTintBlack = !!i607[4]
  i606.calculateTangents = !!i607[5]
  i606.addNormals = !!i607[6]
  i606.immutableTriangles = !!i607[7]
  return i606
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.Button' )
  var i609 = data
  i608.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i609[0], i608.m_OnClick)
  i608.m_Navigation = request.d('UnityEngine.UI.Navigation', i609[1], i608.m_Navigation)
  i608.m_Transition = i609[2]
  i608.m_Colors = request.d('UnityEngine.UI.ColorBlock', i609[3], i608.m_Colors)
  i608.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i609[4], i608.m_SpriteState)
  i608.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i609[5], i608.m_AnimationTriggers)
  i608.m_Interactable = !!i609[6]
  request.r(i609[7], i609[8], 0, i608, 'm_TargetGraphic')
  return i608
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i611 = data
  i610.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i611[0], i610.m_PersistentCalls)
  return i610
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i613 = data
  var i615 = i613[0]
  var i614 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i615.length; i += 1) {
    i614.add(request.d('UnityEngine.Events.PersistentCall', i615[i + 0]));
  }
  i612.m_Calls = i614
  return i612
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'm_Target')
  i618.m_TargetAssemblyTypeName = i619[2]
  i618.m_MethodName = i619[3]
  i618.m_Mode = i619[4]
  i618.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i619[5], i618.m_Arguments)
  i618.m_CallState = i619[6]
  return i618
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'm_ObjectArgument')
  i620.m_ObjectArgumentAssemblyTypeName = i621[2]
  i620.m_IntArgument = i621[3]
  i620.m_FloatArgument = i621[4]
  i620.m_StringArgument = i621[5]
  i620.m_BoolArgument = !!i621[6]
  return i620
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i623 = data
  i622.m_Mode = i623[0]
  i622.m_WrapAround = !!i623[1]
  request.r(i623[2], i623[3], 0, i622, 'm_SelectOnUp')
  request.r(i623[4], i623[5], 0, i622, 'm_SelectOnDown')
  request.r(i623[6], i623[7], 0, i622, 'm_SelectOnLeft')
  request.r(i623[8], i623[9], 0, i622, 'm_SelectOnRight')
  return i622
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i625 = data
  i624.m_NormalColor = new pc.Color(i625[0], i625[1], i625[2], i625[3])
  i624.m_HighlightedColor = new pc.Color(i625[4], i625[5], i625[6], i625[7])
  i624.m_PressedColor = new pc.Color(i625[8], i625[9], i625[10], i625[11])
  i624.m_SelectedColor = new pc.Color(i625[12], i625[13], i625[14], i625[15])
  i624.m_DisabledColor = new pc.Color(i625[16], i625[17], i625[18], i625[19])
  i624.m_ColorMultiplier = i625[20]
  i624.m_FadeDuration = i625[21]
  return i624
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'm_HighlightedSprite')
  request.r(i627[2], i627[3], 0, i626, 'm_PressedSprite')
  request.r(i627[4], i627[5], 0, i626, 'm_SelectedSprite')
  request.r(i627[6], i627[7], 0, i626, 'm_DisabledSprite')
  return i626
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i629 = data
  i628.m_NormalTrigger = i629[0]
  i628.m_HighlightedTrigger = i629[1]
  i628.m_PressedTrigger = i629[2]
  i628.m_SelectedTrigger = i629[3]
  i628.m_DisabledTrigger = i629[4]
  return i628
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i630 = root || request.c( 'MixSkeletonSkin' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'skeletonAnimation')
  var i633 = i631[2]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( i633[i + 0] );
  }
  i630.skinNames = i632
  return i630
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i634 = root || request.c( 'ClickItem' )
  var i635 = data
  var i637 = i635[0]
  var i636 = []
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 2, i636, '')
  }
  i634.steps = i636
  i634.currentStep = i635[1]
  i634.isProcess = !!i635[2]
  return i634
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i638 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i639 = data
  i638.m_hasFontAssetChanged = !!i639[0]
  request.r(i639[1], i639[2], 0, i638, 'm_baseMaterial')
  i638.m_maskOffset = new pc.Vec4( i639[3], i639[4], i639[5], i639[6] )
  i638.m_text = i639[7]
  i638.m_isRightToLeft = !!i639[8]
  request.r(i639[9], i639[10], 0, i638, 'm_fontAsset')
  request.r(i639[11], i639[12], 0, i638, 'm_sharedMaterial')
  var i641 = i639[13]
  var i640 = []
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 2, i640, '')
  }
  i638.m_fontSharedMaterials = i640
  request.r(i639[14], i639[15], 0, i638, 'm_fontMaterial')
  var i643 = i639[16]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i638.m_fontMaterials = i642
  i638.m_fontColor32 = UnityEngine.Color32.ConstructColor(i639[17], i639[18], i639[19], i639[20])
  i638.m_fontColor = new pc.Color(i639[21], i639[22], i639[23], i639[24])
  i638.m_enableVertexGradient = !!i639[25]
  i638.m_colorMode = i639[26]
  i638.m_fontColorGradient = request.d('TMPro.VertexGradient', i639[27], i638.m_fontColorGradient)
  request.r(i639[28], i639[29], 0, i638, 'm_fontColorGradientPreset')
  request.r(i639[30], i639[31], 0, i638, 'm_spriteAsset')
  i638.m_tintAllSprites = !!i639[32]
  request.r(i639[33], i639[34], 0, i638, 'm_StyleSheet')
  i638.m_TextStyleHashCode = i639[35]
  i638.m_overrideHtmlColors = !!i639[36]
  i638.m_faceColor = UnityEngine.Color32.ConstructColor(i639[37], i639[38], i639[39], i639[40])
  i638.m_fontSize = i639[41]
  i638.m_fontSizeBase = i639[42]
  i638.m_fontWeight = i639[43]
  i638.m_enableAutoSizing = !!i639[44]
  i638.m_fontSizeMin = i639[45]
  i638.m_fontSizeMax = i639[46]
  i638.m_fontStyle = i639[47]
  i638.m_HorizontalAlignment = i639[48]
  i638.m_VerticalAlignment = i639[49]
  i638.m_textAlignment = i639[50]
  i638.m_characterSpacing = i639[51]
  i638.m_wordSpacing = i639[52]
  i638.m_lineSpacing = i639[53]
  i638.m_lineSpacingMax = i639[54]
  i638.m_paragraphSpacing = i639[55]
  i638.m_charWidthMaxAdj = i639[56]
  i638.m_enableWordWrapping = !!i639[57]
  i638.m_wordWrappingRatios = i639[58]
  i638.m_overflowMode = i639[59]
  request.r(i639[60], i639[61], 0, i638, 'm_linkedTextComponent')
  request.r(i639[62], i639[63], 0, i638, 'parentLinkedComponent')
  i638.m_enableKerning = !!i639[64]
  i638.m_enableExtraPadding = !!i639[65]
  i638.checkPaddingRequired = !!i639[66]
  i638.m_isRichText = !!i639[67]
  i638.m_parseCtrlCharacters = !!i639[68]
  i638.m_isOrthographic = !!i639[69]
  i638.m_isCullingEnabled = !!i639[70]
  i638.m_horizontalMapping = i639[71]
  i638.m_verticalMapping = i639[72]
  i638.m_uvLineOffset = i639[73]
  i638.m_geometrySortingOrder = i639[74]
  i638.m_IsTextObjectScaleStatic = !!i639[75]
  i638.m_VertexBufferAutoSizeReduction = !!i639[76]
  i638.m_useMaxVisibleDescender = !!i639[77]
  i638.m_pageToDisplay = i639[78]
  i638.m_margin = new pc.Vec4( i639[79], i639[80], i639[81], i639[82] )
  i638.m_isUsingLegacyAnimationComponent = !!i639[83]
  i638.m_isVolumetricText = !!i639[84]
  i638.m_Maskable = !!i639[85]
  request.r(i639[86], i639[87], 0, i638, 'm_Material')
  i638.m_Color = new pc.Color(i639[88], i639[89], i639[90], i639[91])
  i638.m_RaycastTarget = !!i639[92]
  i638.m_RaycastPadding = new pc.Vec4( i639[93], i639[94], i639[95], i639[96] )
  return i638
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i646 = root || request.c( 'TMPro.VertexGradient' )
  var i647 = data
  i646.topLeft = new pc.Color(i647[0], i647[1], i647[2], i647[3])
  i646.topRight = new pc.Color(i647[4], i647[5], i647[6], i647[7])
  i646.bottomLeft = new pc.Color(i647[8], i647[9], i647[10], i647[11])
  i646.bottomRight = new pc.Color(i647[12], i647[13], i647[14], i647[15])
  return i646
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i648 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i649 = data
  i648.targetIsSelf = !!i649[0]
  request.r(i649[1], i649[2], 0, i648, 'targetGO')
  i648.tweenTargetIsTargetGO = !!i649[3]
  i648.delay = i649[4]
  i648.duration = i649[5]
  i648.easeType = i649[6]
  i648.easeCurve = new pc.AnimationCurve( { keys_flow: i649[7] } )
  i648.loopType = i649[8]
  i648.loops = i649[9]
  i648.id = i649[10]
  i648.isRelative = !!i649[11]
  i648.isFrom = !!i649[12]
  i648.isIndependentUpdate = !!i649[13]
  i648.autoKill = !!i649[14]
  i648.autoGenerate = !!i649[15]
  i648.isActive = !!i649[16]
  i648.isValid = !!i649[17]
  request.r(i649[18], i649[19], 0, i648, 'target')
  i648.animationType = i649[20]
  i648.targetType = i649[21]
  i648.forcedTargetType = i649[22]
  i648.autoPlay = !!i649[23]
  i648.useTargetAsV3 = !!i649[24]
  i648.endValueFloat = i649[25]
  i648.endValueV3 = new pc.Vec3( i649[26], i649[27], i649[28] )
  i648.endValueV2 = new pc.Vec2( i649[29], i649[30] )
  i648.endValueColor = new pc.Color(i649[31], i649[32], i649[33], i649[34])
  i648.endValueString = i649[35]
  i648.endValueRect = UnityEngine.Rect.MinMaxRect(i649[36], i649[37], i649[38], i649[39])
  request.r(i649[40], i649[41], 0, i648, 'endValueTransform')
  i648.optionalBool0 = !!i649[42]
  i648.optionalBool1 = !!i649[43]
  i648.optionalFloat0 = i649[44]
  i648.optionalInt0 = i649[45]
  i648.optionalRotationMode = i649[46]
  i648.optionalScrambleMode = i649[47]
  i648.optionalShakeRandomnessMode = i649[48]
  i648.optionalString = i649[49]
  i648.updateType = i649[50]
  i648.isSpeedBased = !!i649[51]
  i648.hasOnStart = !!i649[52]
  i648.hasOnPlay = !!i649[53]
  i648.hasOnUpdate = !!i649[54]
  i648.hasOnStepComplete = !!i649[55]
  i648.hasOnComplete = !!i649[56]
  i648.hasOnTweenCreated = !!i649[57]
  i648.hasOnRewind = !!i649[58]
  i648.onStart = request.d('UnityEngine.Events.UnityEvent', i649[59], i648.onStart)
  i648.onPlay = request.d('UnityEngine.Events.UnityEvent', i649[60], i648.onPlay)
  i648.onUpdate = request.d('UnityEngine.Events.UnityEvent', i649[61], i648.onUpdate)
  i648.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i649[62], i648.onStepComplete)
  i648.onComplete = request.d('UnityEngine.Events.UnityEvent', i649[63], i648.onComplete)
  i648.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i649[64], i648.onTweenCreated)
  i648.onRewind = request.d('UnityEngine.Events.UnityEvent', i649[65], i648.onRewind)
  return i648
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i651 = data
  i650.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i651[0], i650.m_PersistentCalls)
  return i650
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.Mask' )
  var i653 = data
  i652.m_ShowMaskGraphic = !!i653[0]
  return i652
}

Deserializers["AudioController"] = function (request, data, root) {
  var i654 = root || request.c( 'AudioController' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'bgmSource')
  request.r(i655[2], i655[3], 0, i654, 'sfxSource')
  var i657 = i655[4]
  var i656 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i657.length; i += 1) {
    i656.add(request.d('AudioEntry', i657[i + 0]));
  }
  i654.audioEntries = i656
  return i654
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i660 = root || request.c( 'AudioEntry' )
  var i661 = data
  i660.key = i661[0]
  request.r(i661[1], i661[2], 0, i660, 'clip')
  i660.volume = i661[3]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i663 = data
  i662.ambientIntensity = i663[0]
  i662.reflectionIntensity = i663[1]
  i662.ambientMode = i663[2]
  i662.ambientLight = new pc.Color(i663[3], i663[4], i663[5], i663[6])
  i662.ambientSkyColor = new pc.Color(i663[7], i663[8], i663[9], i663[10])
  i662.ambientGroundColor = new pc.Color(i663[11], i663[12], i663[13], i663[14])
  i662.ambientEquatorColor = new pc.Color(i663[15], i663[16], i663[17], i663[18])
  i662.fogColor = new pc.Color(i663[19], i663[20], i663[21], i663[22])
  i662.fogEndDistance = i663[23]
  i662.fogStartDistance = i663[24]
  i662.fogDensity = i663[25]
  i662.fog = !!i663[26]
  request.r(i663[27], i663[28], 0, i662, 'skybox')
  i662.fogMode = i663[29]
  var i665 = i663[30]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i665[i + 0]) );
  }
  i662.lightmaps = i664
  i662.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i663[31], i662.lightProbes)
  i662.lightmapsMode = i663[32]
  i662.mixedBakeMode = i663[33]
  i662.environmentLightingMode = i663[34]
  i662.ambientProbe = new pc.SphericalHarmonicsL2(i663[35])
  i662.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i663[36])
  i662.useReferenceAmbientProbe = !!i663[37]
  request.r(i663[38], i663[39], 0, i662, 'customReflection')
  request.r(i663[40], i663[41], 0, i662, 'defaultReflection')
  i662.defaultReflectionMode = i663[42]
  i662.defaultReflectionResolution = i663[43]
  i662.sunLightObjectId = i663[44]
  i662.pixelLightCount = i663[45]
  i662.defaultReflectionHDR = !!i663[46]
  i662.hasLightDataAsset = !!i663[47]
  i662.hasManualGenerate = !!i663[48]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'lightmapColor')
  request.r(i669[2], i669[3], 0, i668, 'lightmapDirection')
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i670 = root || new UnityEngine.LightProbes()
  var i671 = data
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i679 = data
  var i681 = i679[0]
  var i680 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i681.length; i += 1) {
    i680.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i681[i + 0]));
  }
  i678.ShaderCompilationErrors = i680
  i678.name = i679[1]
  i678.guid = i679[2]
  var i683 = i679[3]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( i683[i + 0] );
  }
  i678.shaderDefinedKeywords = i682
  var i685 = i679[4]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i685[i + 0]) );
  }
  i678.passes = i684
  var i687 = i679[5]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i687[i + 0]) );
  }
  i678.usePasses = i686
  var i689 = i679[6]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i689[i + 0]) );
  }
  i678.defaultParameterValues = i688
  request.r(i679[7], i679[8], 0, i678, 'unityFallbackShader')
  i678.readDepth = !!i679[9]
  i678.isCreatedByShaderGraph = !!i679[10]
  i678.disableBatching = !!i679[11]
  i678.compiled = !!i679[12]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i693 = data
  i692.shaderName = i693[0]
  i692.errorMessage = i693[1]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i696 = root || new pc.UnityShaderPass()
  var i697 = data
  i696.id = i697[0]
  i696.subShaderIndex = i697[1]
  i696.name = i697[2]
  i696.passType = i697[3]
  i696.grabPassTextureName = i697[4]
  i696.usePass = !!i697[5]
  i696.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[6], i696.zTest)
  i696.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[7], i696.zWrite)
  i696.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[8], i696.culling)
  i696.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i697[9], i696.blending)
  i696.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i697[10], i696.alphaBlending)
  i696.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[11], i696.colorWriteMask)
  i696.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[12], i696.offsetUnits)
  i696.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[13], i696.offsetFactor)
  i696.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[14], i696.stencilRef)
  i696.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[15], i696.stencilReadMask)
  i696.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[16], i696.stencilWriteMask)
  i696.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i697[17], i696.stencilOp)
  i696.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i697[18], i696.stencilOpFront)
  i696.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i697[19], i696.stencilOpBack)
  var i699 = i697[20]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i699[i + 0]) );
  }
  i696.tags = i698
  var i701 = i697[21]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( i701[i + 0] );
  }
  i696.passDefinedKeywords = i700
  var i703 = i697[22]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i703[i + 0]) );
  }
  i696.passDefinedKeywordGroups = i702
  var i705 = i697[23]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i705[i + 0]) );
  }
  i696.variants = i704
  var i707 = i697[24]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i707[i + 0]) );
  }
  i696.excludedVariants = i706
  i696.hasDepthReader = !!i697[25]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i709 = data
  i708.val = i709[0]
  i708.name = i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i711 = data
  i710.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[0], i710.src)
  i710.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[1], i710.dst)
  i710.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[2], i710.op)
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i713 = data
  i712.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[0], i712.pass)
  i712.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[1], i712.fail)
  i712.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[2], i712.zFail)
  i712.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[3], i712.comp)
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i717 = data
  i716.name = i717[0]
  i716.value = i717[1]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i721 = data
  var i723 = i721[0]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( i723[i + 0] );
  }
  i720.keywords = i722
  i720.hasDiscard = !!i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i727 = data
  i726.passId = i727[0]
  i726.subShaderIndex = i727[1]
  var i729 = i727[2]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( i729[i + 0] );
  }
  i726.keywords = i728
  i726.vertexProgram = i727[3]
  i726.fragmentProgram = i727[4]
  i726.exportedForWebGl2 = !!i727[5]
  i726.readDepth = !!i727[6]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'shader')
  i732.pass = i733[2]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i737 = data
  i736.name = i737[0]
  i736.type = i737[1]
  i736.value = new pc.Vec4( i737[2], i737[3], i737[4], i737[5] )
  i736.textureValue = i737[6]
  i736.shaderPropertyFlag = i737[7]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i739 = data
  i738.name = i739[0]
  request.r(i739[1], i739[2], 0, i738, 'texture')
  i738.aabb = i739[3]
  i738.vertices = i739[4]
  i738.triangles = i739[5]
  i738.textureRect = UnityEngine.Rect.MinMaxRect(i739[6], i739[7], i739[8], i739[9])
  i738.packedRect = UnityEngine.Rect.MinMaxRect(i739[10], i739[11], i739[12], i739[13])
  i738.border = new pc.Vec4( i739[14], i739[15], i739[16], i739[17] )
  i738.transparency = i739[18]
  i738.bounds = i739[19]
  i738.pixelsPerUnit = i739[20]
  i738.textureWidth = i739[21]
  i738.textureHeight = i739[22]
  i738.nativeSize = new pc.Vec2( i739[23], i739[24] )
  i738.pivot = new pc.Vec2( i739[25], i739[26] )
  i738.textureRectOffset = new pc.Vec2( i739[27], i739[28] )
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i741 = data
  i740.name = i741[0]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i743 = data
  i742.name = i743[0]
  i742.ascent = i743[1]
  i742.originalLineHeight = i743[2]
  i742.fontSize = i743[3]
  var i745 = i743[4]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i745[i + 0]) );
  }
  i742.characterInfo = i744
  request.r(i743[5], i743[6], 0, i742, 'texture')
  i742.originalFontSize = i743[7]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i749 = data
  i748.index = i749[0]
  i748.advance = i749[1]
  i748.bearing = i749[2]
  i748.glyphWidth = i749[3]
  i748.glyphHeight = i749[4]
  i748.minX = i749[5]
  i748.maxX = i749[6]
  i748.minY = i749[7]
  i748.maxY = i749[8]
  i748.uvBottomLeftX = i749[9]
  i748.uvBottomLeftY = i749[10]
  i748.uvBottomRightX = i749[11]
  i748.uvBottomRightY = i749[12]
  i748.uvTopLeftX = i749[13]
  i748.uvTopLeftY = i749[14]
  i748.uvTopRightX = i749[15]
  i748.uvTopRightY = i749[16]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i751 = data
  i750.name = i751[0]
  i750.bytes64 = i751[1]
  i750.data = i751[2]
  return i750
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i752 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i753 = data
  var i755 = i753[0]
  var i754 = []
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 2, i754, '')
  }
  i752.atlasAssets = i754
  i752.scale = i753[1]
  request.r(i753[2], i753[3], 0, i752, 'skeletonJSON')
  i752.isUpgradingBlendModeMaterials = !!i753[4]
  i752.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i753[5], i752.blendModeMaterials)
  var i757 = i753[6]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 1, i756, '')
  }
  i752.skeletonDataModifiers = i756
  var i759 = i753[7]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( i759[i + 0] );
  }
  i752.fromAnimation = i758
  var i761 = i753[8]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( i761[i + 0] );
  }
  i752.toAnimation = i760
  i752.duration = i753[9]
  i752.defaultMix = i753[10]
  request.r(i753[11], i753[12], 0, i752, 'controller')
  return i752
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i764 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i765 = data
  i764.applyAdditiveMaterial = !!i765[0]
  var i767 = i765[1]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i767.length; i += 1) {
    i766.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i767[i + 0]));
  }
  i764.additiveMaterials = i766
  var i769 = i765[2]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i769[i + 0]));
  }
  i764.multiplyMaterials = i768
  var i771 = i765[3]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i771.length; i += 1) {
    i770.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i771[i + 0]));
  }
  i764.screenMaterials = i770
  i764.requiresBlendModeMaterials = !!i765[4]
  return i764
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i774 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i775 = data
  i774.pageName = i775[0]
  request.r(i775[1], i775[2], 0, i774, 'material')
  return i774
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i778 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'atlasFile')
  var i781 = i779[2]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i778.materials = i780
  i778.textureLoadingMode = i779[3]
  request.r(i779[4], i779[5], 0, i778, 'onDemandTextureLoader')
  return i778
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i782 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'atlas')
  i782.normalStyle = i783[2]
  i782.normalSpacingOffset = i783[3]
  i782.boldStyle = i783[4]
  i782.boldSpacing = i783[5]
  i782.italicStyle = i783[6]
  i782.tabSize = i783[7]
  i782.hashCode = i783[8]
  request.r(i783[9], i783[10], 0, i782, 'material')
  i782.materialHashCode = i783[11]
  i782.m_Version = i783[12]
  i782.m_SourceFontFileGUID = i783[13]
  request.r(i783[14], i783[15], 0, i782, 'm_SourceFontFile_EditorRef')
  request.r(i783[16], i783[17], 0, i782, 'm_SourceFontFile')
  i782.m_AtlasPopulationMode = i783[18]
  i782.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i783[19], i782.m_FaceInfo)
  var i785 = i783[20]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i785.length; i += 1) {
    i784.add(request.d('UnityEngine.TextCore.Glyph', i785[i + 0]));
  }
  i782.m_GlyphTable = i784
  var i787 = i783[21]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(request.d('TMPro.TMP_Character', i787[i + 0]));
  }
  i782.m_CharacterTable = i786
  var i789 = i783[22]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i782.m_AtlasTextures = i788
  i782.m_AtlasTextureIndex = i783[23]
  i782.m_IsMultiAtlasTexturesEnabled = !!i783[24]
  i782.m_ClearDynamicDataOnBuild = !!i783[25]
  var i791 = i783[26]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('UnityEngine.TextCore.GlyphRect', i791[i + 0]));
  }
  i782.m_UsedGlyphRects = i790
  var i793 = i783[27]
  var i792 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i793.length; i += 1) {
    i792.add(request.d('UnityEngine.TextCore.GlyphRect', i793[i + 0]));
  }
  i782.m_FreeGlyphRects = i792
  i782.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i783[28], i782.m_fontInfo)
  i782.m_AtlasWidth = i783[29]
  i782.m_AtlasHeight = i783[30]
  i782.m_AtlasPadding = i783[31]
  i782.m_AtlasRenderMode = i783[32]
  var i795 = i783[33]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i795.length; i += 1) {
    i794.add(request.d('TMPro.TMP_Glyph', i795[i + 0]));
  }
  i782.m_glyphInfoList = i794
  i782.m_KerningTable = request.d('TMPro.KerningTable', i783[34], i782.m_KerningTable)
  i782.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i783[35], i782.m_FontFeatureTable)
  var i797 = i783[36]
  var i796 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 1, i796, '')
  }
  i782.fallbackFontAssets = i796
  var i799 = i783[37]
  var i798 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 1, i798, '')
  }
  i782.m_FallbackFontAssetTable = i798
  i782.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i783[38], i782.m_CreationSettings)
  var i801 = i783[39]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('TMPro.TMP_FontWeightPair', i801[i + 0]) );
  }
  i782.m_FontWeightTable = i800
  var i803 = i783[40]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('TMPro.TMP_FontWeightPair', i803[i + 0]) );
  }
  i782.fontWeights = i802
  return i782
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i805 = data
  i804.m_FaceIndex = i805[0]
  i804.m_FamilyName = i805[1]
  i804.m_StyleName = i805[2]
  i804.m_PointSize = i805[3]
  i804.m_Scale = i805[4]
  i804.m_UnitsPerEM = i805[5]
  i804.m_LineHeight = i805[6]
  i804.m_AscentLine = i805[7]
  i804.m_CapLine = i805[8]
  i804.m_MeanLine = i805[9]
  i804.m_Baseline = i805[10]
  i804.m_DescentLine = i805[11]
  i804.m_SuperscriptOffset = i805[12]
  i804.m_SuperscriptSize = i805[13]
  i804.m_SubscriptOffset = i805[14]
  i804.m_SubscriptSize = i805[15]
  i804.m_UnderlineOffset = i805[16]
  i804.m_UnderlineThickness = i805[17]
  i804.m_StrikethroughOffset = i805[18]
  i804.m_StrikethroughThickness = i805[19]
  i804.m_TabWidth = i805[20]
  return i804
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i809 = data
  i808.m_Index = i809[0]
  i808.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i809[1], i808.m_Metrics)
  i808.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i809[2], i808.m_GlyphRect)
  i808.m_Scale = i809[3]
  i808.m_AtlasIndex = i809[4]
  i808.m_ClassDefinitionType = i809[5]
  return i808
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i811 = data
  i810.m_Width = i811[0]
  i810.m_Height = i811[1]
  i810.m_HorizontalBearingX = i811[2]
  i810.m_HorizontalBearingY = i811[3]
  i810.m_HorizontalAdvance = i811[4]
  return i810
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i813 = data
  i812.m_X = i813[0]
  i812.m_Y = i813[1]
  i812.m_Width = i813[2]
  i812.m_Height = i813[3]
  return i812
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i816 = root || request.c( 'TMPro.TMP_Character' )
  var i817 = data
  i816.m_ElementType = i817[0]
  i816.m_Unicode = i817[1]
  i816.m_GlyphIndex = i817[2]
  i816.m_Scale = i817[3]
  return i816
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i822 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i823 = data
  i822.Name = i823[0]
  i822.PointSize = i823[1]
  i822.Scale = i823[2]
  i822.CharacterCount = i823[3]
  i822.LineHeight = i823[4]
  i822.Baseline = i823[5]
  i822.Ascender = i823[6]
  i822.CapHeight = i823[7]
  i822.Descender = i823[8]
  i822.CenterLine = i823[9]
  i822.SuperscriptOffset = i823[10]
  i822.SubscriptOffset = i823[11]
  i822.SubSize = i823[12]
  i822.Underline = i823[13]
  i822.UnderlineThickness = i823[14]
  i822.strikethrough = i823[15]
  i822.strikethroughThickness = i823[16]
  i822.TabWidth = i823[17]
  i822.Padding = i823[18]
  i822.AtlasWidth = i823[19]
  i822.AtlasHeight = i823[20]
  return i822
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i826 = root || request.c( 'TMPro.TMP_Glyph' )
  var i827 = data
  i826.id = i827[0]
  i826.x = i827[1]
  i826.y = i827[2]
  i826.width = i827[3]
  i826.height = i827[4]
  i826.xOffset = i827[5]
  i826.yOffset = i827[6]
  i826.xAdvance = i827[7]
  i826.scale = i827[8]
  return i826
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i828 = root || request.c( 'TMPro.KerningTable' )
  var i829 = data
  var i831 = i829[0]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i831.length; i += 1) {
    i830.add(request.d('TMPro.KerningPair', i831[i + 0]));
  }
  i828.kerningPairs = i830
  return i828
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i834 = root || request.c( 'TMPro.KerningPair' )
  var i835 = data
  i834.xOffset = i835[0]
  i834.m_FirstGlyph = i835[1]
  i834.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i835[2], i834.m_FirstGlyphAdjustments)
  i834.m_SecondGlyph = i835[3]
  i834.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i835[4], i834.m_SecondGlyphAdjustments)
  i834.m_IgnoreSpacingAdjustments = !!i835[5]
  return i834
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i837 = data
  var i839 = i837[0]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i839.length; i += 1) {
    i838.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i839[i + 0]));
  }
  i836.m_GlyphPairAdjustmentRecords = i838
  return i836
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i843 = data
  i842.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i843[0], i842.m_FirstAdjustmentRecord)
  i842.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i843[1], i842.m_SecondAdjustmentRecord)
  i842.m_FeatureLookupFlags = i843[2]
  return i842
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i847 = data
  i846.sourceFontFileName = i847[0]
  i846.sourceFontFileGUID = i847[1]
  i846.pointSizeSamplingMode = i847[2]
  i846.pointSize = i847[3]
  i846.padding = i847[4]
  i846.packingMode = i847[5]
  i846.atlasWidth = i847[6]
  i846.atlasHeight = i847[7]
  i846.characterSetSelectionMode = i847[8]
  i846.characterSequence = i847[9]
  i846.referencedFontAssetGUID = i847[10]
  i846.referencedTextAssetGUID = i847[11]
  i846.fontStyle = i847[12]
  i846.fontStyleModifier = i847[13]
  i846.renderMode = i847[14]
  i846.includeFontFeatures = !!i847[15]
  return i846
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'regularTypeface')
  request.r(i851[2], i851[3], 0, i850, 'italicTypeface')
  return i850
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i852 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i853 = data
  i852.useSafeMode = !!i853[0]
  i852.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i853[1], i852.safeModeOptions)
  i852.timeScale = i853[2]
  i852.unscaledTimeScale = i853[3]
  i852.useSmoothDeltaTime = !!i853[4]
  i852.maxSmoothUnscaledTime = i853[5]
  i852.rewindCallbackMode = i853[6]
  i852.showUnityEditorReport = !!i853[7]
  i852.logBehaviour = i853[8]
  i852.drawGizmos = !!i853[9]
  i852.defaultRecyclable = !!i853[10]
  i852.defaultAutoPlay = i853[11]
  i852.defaultUpdateType = i853[12]
  i852.defaultTimeScaleIndependent = !!i853[13]
  i852.defaultEaseType = i853[14]
  i852.defaultEaseOvershootOrAmplitude = i853[15]
  i852.defaultEasePeriod = i853[16]
  i852.defaultAutoKill = !!i853[17]
  i852.defaultLoopType = i853[18]
  i852.debugMode = !!i853[19]
  i852.debugStoreTargetId = !!i853[20]
  i852.showPreviewPanel = !!i853[21]
  i852.storeSettingsLocation = i853[22]
  i852.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i853[23], i852.modules)
  i852.createASMDEF = !!i853[24]
  i852.showPlayingTweens = !!i853[25]
  i852.showPausedTweens = !!i853[26]
  return i852
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i854 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i855 = data
  i854.logBehaviour = i855[0]
  i854.nestedTweenFailureBehaviour = i855[1]
  return i854
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i856 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i857 = data
  i856.showPanel = !!i857[0]
  i856.audioEnabled = !!i857[1]
  i856.physicsEnabled = !!i857[2]
  i856.physics2DEnabled = !!i857[3]
  i856.spriteEnabled = !!i857[4]
  i856.uiEnabled = !!i857[5]
  i856.textMeshProEnabled = !!i857[6]
  i856.tk2DEnabled = !!i857[7]
  i856.deAudioEnabled = !!i857[8]
  i856.deUnityExtendedEnabled = !!i857[9]
  i856.epoOutlineEnabled = !!i857[10]
  return i856
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i858 = root || request.c( 'TMPro.TMP_Settings' )
  var i859 = data
  i858.m_enableWordWrapping = !!i859[0]
  i858.m_enableKerning = !!i859[1]
  i858.m_enableExtraPadding = !!i859[2]
  i858.m_enableTintAllSprites = !!i859[3]
  i858.m_enableParseEscapeCharacters = !!i859[4]
  i858.m_EnableRaycastTarget = !!i859[5]
  i858.m_GetFontFeaturesAtRuntime = !!i859[6]
  i858.m_missingGlyphCharacter = i859[7]
  i858.m_warningsDisabled = !!i859[8]
  request.r(i859[9], i859[10], 0, i858, 'm_defaultFontAsset')
  i858.m_defaultFontAssetPath = i859[11]
  i858.m_defaultFontSize = i859[12]
  i858.m_defaultAutoSizeMinRatio = i859[13]
  i858.m_defaultAutoSizeMaxRatio = i859[14]
  i858.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i859[15], i859[16] )
  i858.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i859[17], i859[18] )
  i858.m_autoSizeTextContainer = !!i859[19]
  i858.m_IsTextObjectScaleStatic = !!i859[20]
  var i861 = i859[21]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 1, i860, '')
  }
  i858.m_fallbackFontAssets = i860
  i858.m_matchMaterialPreset = !!i859[22]
  request.r(i859[23], i859[24], 0, i858, 'm_defaultSpriteAsset')
  i858.m_defaultSpriteAssetPath = i859[25]
  i858.m_enableEmojiSupport = !!i859[26]
  i858.m_MissingCharacterSpriteUnicode = i859[27]
  i858.m_defaultColorGradientPresetsPath = i859[28]
  request.r(i859[29], i859[30], 0, i858, 'm_defaultStyleSheet')
  i858.m_StyleSheetsResourcePath = i859[31]
  request.r(i859[32], i859[33], 0, i858, 'm_leadingCharacters')
  request.r(i859[34], i859[35], 0, i858, 'm_followingCharacters')
  i858.m_UseModernHangulLineBreakingRules = !!i859[36]
  return i858
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'spriteSheet')
  var i865 = i863[2]
  var i864 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i865.length; i += 1) {
    i864.add(request.d('TMPro.TMP_Sprite', i865[i + 0]));
  }
  i862.spriteInfoList = i864
  var i867 = i863[3]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 1, i866, '')
  }
  i862.fallbackSpriteAssets = i866
  i862.hashCode = i863[4]
  request.r(i863[5], i863[6], 0, i862, 'material')
  i862.materialHashCode = i863[7]
  i862.m_Version = i863[8]
  i862.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i863[9], i862.m_FaceInfo)
  var i869 = i863[10]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i869.length; i += 1) {
    i868.add(request.d('TMPro.TMP_SpriteCharacter', i869[i + 0]));
  }
  i862.m_SpriteCharacterTable = i868
  var i871 = i863[11]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i871.length; i += 1) {
    i870.add(request.d('TMPro.TMP_SpriteGlyph', i871[i + 0]));
  }
  i862.m_SpriteGlyphTable = i870
  return i862
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TMP_Sprite' )
  var i875 = data
  i874.name = i875[0]
  i874.hashCode = i875[1]
  i874.unicode = i875[2]
  i874.pivot = new pc.Vec2( i875[3], i875[4] )
  request.r(i875[5], i875[6], 0, i874, 'sprite')
  i874.id = i875[7]
  i874.x = i875[8]
  i874.y = i875[9]
  i874.width = i875[10]
  i874.height = i875[11]
  i874.xOffset = i875[12]
  i874.yOffset = i875[13]
  i874.xAdvance = i875[14]
  i874.scale = i875[15]
  return i874
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i880 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i881 = data
  i880.m_Name = i881[0]
  i880.m_HashCode = i881[1]
  i880.m_ElementType = i881[2]
  i880.m_Unicode = i881[3]
  i880.m_GlyphIndex = i881[4]
  i880.m_Scale = i881[5]
  return i880
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'sprite')
  i884.m_Index = i885[2]
  i884.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i885[3], i884.m_Metrics)
  i884.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i885[4], i884.m_GlyphRect)
  i884.m_Scale = i885[5]
  i884.m_AtlasIndex = i885[6]
  i884.m_ClassDefinitionType = i885[7]
  return i884
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i886 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i887 = data
  var i889 = i887[0]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(request.d('TMPro.TMP_Style', i889[i + 0]));
  }
  i886.m_StyleList = i888
  return i886
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i892 = root || request.c( 'TMPro.TMP_Style' )
  var i893 = data
  i892.m_Name = i893[0]
  i892.m_HashCode = i893[1]
  i892.m_OpeningDefinition = i893[2]
  i892.m_ClosingDefinition = i893[3]
  i892.m_OpeningTagArray = i893[4]
  i892.m_ClosingTagArray = i893[5]
  i892.m_OpeningTagUnicodeArray = i893[6]
  i892.m_ClosingTagUnicodeArray = i893[7]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i895 = data
  var i897 = i895[0]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i897[i + 0]) );
  }
  i894.files = i896
  i894.componentToPrefabIds = i895[1]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i901 = data
  i900.path = i901[0]
  request.r(i901[1], i901[2], 0, i900, 'unityObject')
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i903 = data
  var i905 = i903[0]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i905[i + 0]) );
  }
  i902.scriptsExecutionOrder = i904
  var i907 = i903[1]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i907[i + 0]) );
  }
  i902.sortingLayers = i906
  var i909 = i903[2]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i909[i + 0]) );
  }
  i902.cullingLayers = i908
  i902.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i903[3], i902.timeSettings)
  i902.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i903[4], i902.physicsSettings)
  i902.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i903[5], i902.physics2DSettings)
  i902.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i903[6], i902.qualitySettings)
  i902.enableRealtimeShadows = !!i903[7]
  i902.enableAutoInstancing = !!i903[8]
  i902.enableStaticBatching = !!i903[9]
  i902.enableDynamicBatching = !!i903[10]
  i902.lightmapEncodingQuality = i903[11]
  i902.desiredColorSpace = i903[12]
  var i911 = i903[13]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( i911[i + 0] );
  }
  i902.allTags = i910
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i915 = data
  i914.name = i915[0]
  i914.value = i915[1]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i919 = data
  i918.id = i919[0]
  i918.name = i919[1]
  i918.value = i919[2]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i923 = data
  i922.id = i923[0]
  i922.name = i923[1]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i925 = data
  i924.fixedDeltaTime = i925[0]
  i924.maximumDeltaTime = i925[1]
  i924.timeScale = i925[2]
  i924.maximumParticleTimestep = i925[3]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i927 = data
  i926.gravity = new pc.Vec3( i927[0], i927[1], i927[2] )
  i926.defaultSolverIterations = i927[3]
  i926.bounceThreshold = i927[4]
  i926.autoSyncTransforms = !!i927[5]
  i926.autoSimulation = !!i927[6]
  var i929 = i927[7]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i929[i + 0]) );
  }
  i926.collisionMatrix = i928
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i933 = data
  i932.enabled = !!i933[0]
  i932.layerId = i933[1]
  i932.otherLayerId = i933[2]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'material')
  i934.gravity = new pc.Vec2( i935[2], i935[3] )
  i934.positionIterations = i935[4]
  i934.velocityIterations = i935[5]
  i934.velocityThreshold = i935[6]
  i934.maxLinearCorrection = i935[7]
  i934.maxAngularCorrection = i935[8]
  i934.maxTranslationSpeed = i935[9]
  i934.maxRotationSpeed = i935[10]
  i934.baumgarteScale = i935[11]
  i934.baumgarteTOIScale = i935[12]
  i934.timeToSleep = i935[13]
  i934.linearSleepTolerance = i935[14]
  i934.angularSleepTolerance = i935[15]
  i934.defaultContactOffset = i935[16]
  i934.autoSimulation = !!i935[17]
  i934.queriesHitTriggers = !!i935[18]
  i934.queriesStartInColliders = !!i935[19]
  i934.callbacksOnDisable = !!i935[20]
  i934.reuseCollisionCallbacks = !!i935[21]
  i934.autoSyncTransforms = !!i935[22]
  var i937 = i935[23]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i937[i + 0]) );
  }
  i934.collisionMatrix = i936
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i941 = data
  i940.enabled = !!i941[0]
  i940.layerId = i941[1]
  i940.otherLayerId = i941[2]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i943 = data
  var i945 = i943[0]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i945[i + 0]) );
  }
  i942.qualityLevels = i944
  var i947 = i943[1]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( i947[i + 0] );
  }
  i942.names = i946
  i942.shadows = i943[2]
  i942.anisotropicFiltering = i943[3]
  i942.antiAliasing = i943[4]
  i942.lodBias = i943[5]
  i942.shadowCascades = i943[6]
  i942.shadowDistance = i943[7]
  i942.shadowmaskMode = i943[8]
  i942.shadowProjection = i943[9]
  i942.shadowResolution = i943[10]
  i942.softParticles = !!i943[11]
  i942.softVegetation = !!i943[12]
  i942.activeColorSpace = i943[13]
  i942.desiredColorSpace = i943[14]
  i942.masterTextureLimit = i943[15]
  i942.maxQueuedFrames = i943[16]
  i942.particleRaycastBudget = i943[17]
  i942.pixelLightCount = i943[18]
  i942.realtimeReflectionProbes = !!i943[19]
  i942.shadowCascade2Split = i943[20]
  i942.shadowCascade4Split = new pc.Vec3( i943[21], i943[22], i943[23] )
  i942.streamingMipmapsActive = !!i943[24]
  i942.vSyncCount = i943[25]
  i942.asyncUploadBufferSize = i943[26]
  i942.asyncUploadTimeSlice = i943[27]
  i942.billboardsFaceCameraPosition = !!i943[28]
  i942.shadowNearPlaneOffset = i943[29]
  i942.streamingMipmapsMemoryBudget = i943[30]
  i942.maximumLODLevel = i943[31]
  i942.streamingMipmapsAddAllCameras = !!i943[32]
  i942.streamingMipmapsMaxLevelReduction = i943[33]
  i942.streamingMipmapsRenderersPerFrame = i943[34]
  i942.resolutionScalingFixedDPIFactor = i943[35]
  i942.streamingMipmapsMaxFileIORequests = i943[36]
  i942.currentQualityLevel = i943[37]
  return i942
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i951 = data
  i950.xPlacement = i951[0]
  i950.yPlacement = i951[1]
  i950.xAdvance = i951[2]
  i950.yAdvance = i951[3]
  return i950
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i953 = data
  i952.m_GlyphIndex = i953[0]
  i952.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i953[1], i952.m_GlyphValueRecord)
  return i952
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i955 = data
  i954.m_XPlacement = i955[0]
  i954.m_YPlacement = i955[1]
  i954.m_XAdvance = i955[2]
  i954.m_YAdvance = i955[3]
  return i954
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[3],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[3],"76":[77],"78":[79],"80":[79],"9":[8],"81":[82],"83":[84],"85":[82],"86":[8],"87":[8],"11":[9],"18":[19,8],"88":[8],"10":[9],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"34":[8],"96":[8],"16":[19,8],"97":[8],"98":[8],"99":[8],"100":[8],"101":[19,8],"102":[8],"103":[6],"104":[6],"7":[6],"105":[6],"106":[3],"107":[3],"108":[109],"110":[3],"111":[112],"113":[8],"114":[19,8],"115":[77],"27":[19,8],"116":[117,77],"118":[77],"119":[77,120],"121":[54],"122":[62],"123":[112],"124":[125],"126":[8],"127":[77,8],"17":[8,19],"128":[8],"129":[19,8],"130":[77],"131":[19,8],"132":[8],"133":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.CanvasGroup","DragCustom","UnityEngine.PolygonCollider2D","DropCustom","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","MixSkeletonSkin","ClickItem","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "198.0";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BP_V14_ManhND_AnhPD";

Deserializers.lunaAppID = "31727";

Deserializers.projectId = "cc2b1186a2056e546bb13add5b988034";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "fadf43e8-1394-4957-bcef-6a2eee1a198b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

