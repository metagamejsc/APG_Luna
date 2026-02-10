var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointSpring' )
  var i487 = data
  i486.spring = i487[0]
  i486.damper = i487[1]
  i486.targetPosition = i487[2]
  return i486
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointMotor' )
  var i489 = data
  i488.m_TargetVelocity = i489[0]
  i488.m_Force = i489[1]
  i488.m_FreeSpin = i489[2]
  return i488
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointLimits' )
  var i491 = data
  i490.m_Min = i491[0]
  i490.m_Max = i491[1]
  i490.m_Bounciness = i491[2]
  i490.m_BounceMinVelocity = i491[3]
  i490.m_ContactDistance = i491[4]
  i490.minBounce = i491[5]
  i490.maxBounce = i491[6]
  return i490
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointDrive' )
  var i493 = data
  i492.m_PositionSpring = i493[0]
  i492.m_PositionDamper = i493[1]
  i492.m_MaximumForce = i493[2]
  i492.m_UseAcceleration = i493[3]
  return i492
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i495 = data
  i494.m_Spring = i495[0]
  i494.m_Damper = i495[1]
  return i494
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i497 = data
  i496.m_Limit = i497[0]
  i496.m_Bounciness = i497[1]
  i496.m_ContactDistance = i497[2]
  return i496
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i499 = data
  i498.m_ExtremumSlip = i499[0]
  i498.m_ExtremumValue = i499[1]
  i498.m_AsymptoteSlip = i499[2]
  i498.m_AsymptoteValue = i499[3]
  i498.m_Stiffness = i499[4]
  return i498
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i501 = data
  i500.m_LowerAngle = i501[0]
  i500.m_UpperAngle = i501[1]
  return i500
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i503 = data
  i502.m_MotorSpeed = i503[0]
  i502.m_MaximumMotorTorque = i503[1]
  return i502
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i505 = data
  i504.m_DampingRatio = i505[0]
  i504.m_Frequency = i505[1]
  i504.m_Angle = i505[2]
  return i504
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i507 = data
  i506.m_LowerTranslation = i507[0]
  i506.m_UpperTranslation = i507[1]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i509 = data
  i508.name = i509[0]
  i508.width = i509[1]
  i508.height = i509[2]
  i508.mipmapCount = i509[3]
  i508.anisoLevel = i509[4]
  i508.filterMode = i509[5]
  i508.hdr = !!i509[6]
  i508.format = i509[7]
  i508.wrapMode = i509[8]
  i508.alphaIsTransparency = !!i509[9]
  i508.alphaSource = i509[10]
  i508.graphicsFormat = i509[11]
  i508.sRGBTexture = !!i509[12]
  i508.desiredColorSpace = i509[13]
  i508.wrapU = i509[14]
  i508.wrapV = i509[15]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i510 = root || new pc.UnityMaterial()
  var i511 = data
  i510.name = i511[0]
  request.r(i511[1], i511[2], 0, i510, 'shader')
  i510.renderQueue = i511[3]
  i510.enableInstancing = !!i511[4]
  var i513 = i511[5]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i513[i + 0]) );
  }
  i510.floatParameters = i512
  var i515 = i511[6]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i515[i + 0]) );
  }
  i510.colorParameters = i514
  var i517 = i511[7]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i517[i + 0]) );
  }
  i510.vectorParameters = i516
  var i519 = i511[8]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i519[i + 0]) );
  }
  i510.textureParameters = i518
  var i521 = i511[9]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i521[i + 0]) );
  }
  i510.materialFlags = i520
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i525 = data
  i524.name = i525[0]
  i524.value = i525[1]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i529 = data
  i528.name = i529[0]
  i528.value = new pc.Color(i529[1], i529[2], i529[3], i529[4])
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i533 = data
  i532.name = i533[0]
  i532.value = new pc.Vec4( i533[1], i533[2], i533[3], i533[4] )
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i537 = data
  i536.name = i537[0]
  request.r(i537[1], i537[2], 0, i536, 'value')
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i541 = data
  i540.name = i541[0]
  i540.enabled = !!i541[1]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i543 = data
  i542.pivot = new pc.Vec2( i543[0], i543[1] )
  i542.anchorMin = new pc.Vec2( i543[2], i543[3] )
  i542.anchorMax = new pc.Vec2( i543[4], i543[5] )
  i542.sizeDelta = new pc.Vec2( i543[6], i543[7] )
  i542.anchoredPosition3D = new pc.Vec3( i543[8], i543[9], i543[10] )
  i542.rotation = new pc.Quat(i543[11], i543[12], i543[13], i543[14])
  i542.scale = new pc.Vec3( i543[15], i543[16], i543[17] )
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i545 = data
  i544.cullTransparentMesh = !!i545[0]
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
  i546.m_Maskable = !!i547[34]
  request.r(i547[35], i547[36], 0, i546, 'm_Material')
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

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i565 = data
  i564.name = i565[0]
  i564.tagId = i565[1]
  i564.enabled = !!i565[2]
  i564.isStatic = !!i565[3]
  i564.layer = i565[4]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i567 = data
  i566.name = i567[0]
  i566.index = i567[1]
  i566.startup = !!i567[2]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i569 = data
  i568.position = new pc.Vec3( i569[0], i569[1], i569[2] )
  i568.scale = new pc.Vec3( i569[3], i569[4], i569[5] )
  i568.rotation = new pc.Quat(i569[6], i569[7], i569[8], i569[9])
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i571 = data
  i570.aspect = i571[0]
  i570.orthographic = !!i571[1]
  i570.orthographicSize = i571[2]
  i570.backgroundColor = new pc.Color(i571[3], i571[4], i571[5], i571[6])
  i570.nearClipPlane = i571[7]
  i570.farClipPlane = i571[8]
  i570.fieldOfView = i571[9]
  i570.depth = i571[10]
  i570.clearFlags = i571[11]
  i570.cullingMask = i571[12]
  i570.rect = i571[13]
  request.r(i571[14], i571[15], 0, i570, 'targetTexture')
  i570.usePhysicalProperties = !!i571[16]
  i570.focalLength = i571[17]
  i570.sensorSize = new pc.Vec2( i571[18], i571[19] )
  i570.lensShift = new pc.Vec2( i571[20], i571[21] )
  i570.gateFit = i571[22]
  i570.commandBufferCount = i571[23]
  i570.cameraType = i571[24]
  i570.enabled = !!i571[25]
  return i570
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i573 = data
  request.r(i573[0], i573[1], 0, i572, 'm_FirstSelected')
  i572.m_sendNavigationEvents = !!i573[2]
  i572.m_DragThreshold = i573[3]
  return i572
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i575 = data
  i574.m_HorizontalAxis = i575[0]
  i574.m_VerticalAxis = i575[1]
  i574.m_SubmitButton = i575[2]
  i574.m_CancelButton = i575[3]
  i574.m_InputActionsPerSecond = i575[4]
  i574.m_RepeatDelay = i575[5]
  i574.m_ForceModuleActive = !!i575[6]
  i574.m_SendPointerHoverToParent = !!i575[7]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i577 = data
  i576.planeDistance = i577[0]
  i576.referencePixelsPerUnit = i577[1]
  i576.isFallbackOverlay = !!i577[2]
  i576.renderMode = i577[3]
  i576.renderOrder = i577[4]
  i576.sortingLayerName = i577[5]
  i576.sortingOrder = i577[6]
  i576.scaleFactor = i577[7]
  request.r(i577[8], i577[9], 0, i576, 'worldCamera')
  i576.overrideSorting = !!i577[10]
  i576.pixelPerfect = !!i577[11]
  i576.targetDisplay = i577[12]
  i576.overridePixelPerfect = !!i577[13]
  i576.enabled = !!i577[14]
  return i576
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i579 = data
  i578.m_UiScaleMode = i579[0]
  i578.m_ReferencePixelsPerUnit = i579[1]
  i578.m_ScaleFactor = i579[2]
  i578.m_ReferenceResolution = new pc.Vec2( i579[3], i579[4] )
  i578.m_ScreenMatchMode = i579[5]
  i578.m_MatchWidthOrHeight = i579[6]
  i578.m_PhysicalUnit = i579[7]
  i578.m_FallbackScreenDPI = i579[8]
  i578.m_DefaultSpriteDPI = i579[9]
  i578.m_DynamicPixelsPerUnit = i579[10]
  i578.m_PresetInfoIsWorld = !!i579[11]
  return i578
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i581 = data
  i580.m_IgnoreReversedGraphics = !!i581[0]
  i580.m_BlockingObjects = i581[1]
  i580.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i581[2] )
  return i580
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i582 = root || request.c( 'LunaManager' )
  var i583 = data
  var i585 = i583[0]
  var i584 = []
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 2, i584, '')
  }
  i582.lstBtnInstall = i584
  request.r(i583[1], i583[2], 0, i582, 'WinGO')
  request.r(i583[3], i583[4], 0, i582, 'LoseGO')
  request.r(i583[5], i583[6], 0, i582, 'StartCard')
  request.r(i583[7], i583[8], 0, i582, 'EndCard')
  request.r(i583[9], i583[10], 0, i582, 'Parent')
  i582.isDrag = !!i583[11]
  i582.timeDrag = i583[12]
  i582.countPlay = i583[13]
  i582.countPlayFinal = i583[14]
  i582.countPlayMax = i583[15]
  i582.timeDropFinal = i583[16]
  i582.colorBG = new pc.Color(i583[17], i583[18], i583[19], i583[20])
  request.r(i583[21], i583[22], 0, i582, 'texture2D')
  request.r(i583[23], i583[24], 0, i582, 'rawImageBG')
  request.r(i583[25], i583[26], 0, i582, 'textProgess')
  request.r(i583[27], i583[28], 0, i582, 'imgProgess')
  request.r(i583[29], i583[30], 0, i582, 'timeText')
  return i582
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'm_Texture')
  i588.m_UVRect = UnityEngine.Rect.MinMaxRect(i589[2], i589[3], i589[4], i589[5])
  i588.m_Maskable = !!i589[6]
  request.r(i589[7], i589[8], 0, i588, 'm_Material')
  i588.m_Color = new pc.Color(i589[9], i589[10], i589[11], i589[12])
  i588.m_RaycastTarget = !!i589[13]
  i588.m_RaycastPadding = new pc.Vec4( i589[14], i589[15], i589[16], i589[17] )
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'clip')
  request.r(i591[2], i591[3], 0, i590, 'outputAudioMixerGroup')
  i590.playOnAwake = !!i591[4]
  i590.loop = !!i591[5]
  i590.time = i591[6]
  i590.volume = i591[7]
  i590.pitch = i591[8]
  i590.enabled = !!i591[9]
  return i590
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.Image' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'm_Sprite')
  i592.m_Type = i593[2]
  i592.m_PreserveAspect = !!i593[3]
  i592.m_FillCenter = !!i593[4]
  i592.m_FillMethod = i593[5]
  i592.m_FillAmount = i593[6]
  i592.m_FillClockwise = !!i593[7]
  i592.m_FillOrigin = i593[8]
  i592.m_UseSpriteMesh = !!i593[9]
  i592.m_PixelsPerUnitMultiplier = i593[10]
  i592.m_Maskable = !!i593[11]
  request.r(i593[12], i593[13], 0, i592, 'm_Material')
  i592.m_Color = new pc.Color(i593[14], i593[15], i593[16], i593[17])
  i592.m_RaycastTarget = !!i593[18]
  i592.m_RaycastPadding = new pc.Vec4( i593[19], i593[20], i593[21], i593[22] )
  return i592
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i594 = root || request.c( 'ClickItem' )
  var i595 = data
  var i597 = i595[0]
  var i596 = []
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 2, i596, '')
  }
  i594.steps = i596
  i594.currentStep = i595[1]
  i594.isProcess = !!i595[2]
  return i594
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

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i605 = data
  var i607 = i605[0]
  var i606 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i607.length; i += 1) {
    i606.add(request.d('UnityEngine.Events.PersistentCall', i607[i + 0]));
  }
  i604.m_Calls = i606
  return i604
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'm_Target')
  i610.m_TargetAssemblyTypeName = i611[2]
  i610.m_MethodName = i611[3]
  i610.m_Mode = i611[4]
  i610.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i611[5], i610.m_Arguments)
  i610.m_CallState = i611[6]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i621 = data
  i620.m_Alpha = i621[0]
  i620.m_Interactable = !!i621[1]
  i620.m_BlocksRaycasts = !!i621[2]
  i620.m_IgnoreParentGroups = !!i621[3]
  i620.enabled = !!i621[4]
  return i620
}

Deserializers["DragCustom"] = function (request, data, root) {
  var i622 = root || request.c( 'DragCustom' )
  var i623 = data
  i622.idDrag = i623[0]
  i622.animationName = i623[1]
  i622.isProcess = !!i623[2]
  return i622
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i624 = root || request.c( 'DraggableItem' )
  var i625 = data
  i624.idDrag = i625[0]
  i624.isProcess = !!i625[1]
  i624.isLose = !!i625[2]
  return i624
}

Deserializers["DropCustom"] = function (request, data, root) {
  var i626 = root || request.c( 'DropCustom' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'skeletonGraphic')
  request.r(i627[2], i627[3], 0, i626, 'mixSkeletonSkin')
  request.r(i627[4], i627[5], 0, i626, 'skeDoor')
  request.r(i627[6], i627[7], 0, i626, 'skeDog')
  i626.numBody = i627[8]
  var i629 = i627[9]
  var i628 = []
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 2, i628, '')
  }
  i626.items = i628
  return i626
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i630 = root || request.c( 'MixSkeletonSkin' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'skeletonAnimation')
  var i633 = i631[2]
  var i632 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i633.length; i += 1) {
    i632.add(i633[i + 0]);
  }
  i630.skinNames = i632
  i630.defaultAnim = i631[3]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i637 = data
  i636.usedByComposite = !!i637[0]
  i636.autoTiling = !!i637[1]
  var i639 = i637[2]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
  var i641 = i639[i + 0]
  var i640 = []
  for(var i = 0; i < i641.length; i += 2) {
    i640.push( new pc.Vec2( i641[i + 0], i641[i + 1] ) );
  }
    i638.push( i640 );
  }
  i636.points = i638
  i636.enabled = !!i637[3]
  i636.isTrigger = !!i637[4]
  i636.usedByEffector = !!i637[5]
  i636.density = i637[6]
  i636.offset = new pc.Vec2( i637[7], i637[8] )
  request.r(i637[9], i637[10], 0, i636, 'material')
  return i636
}

Deserializers["DropZone"] = function (request, data, root) {
  var i648 = root || request.c( 'DropZone' )
  var i649 = data
  i648.idDrop = i649[0]
  var i651 = i649[1]
  var i650 = []
  for(var i = 0; i < i651.length; i += 2) {
  request.r(i651[i + 0], i651[i + 1], 2, i650, '')
  }
  i648.steps = i650
  request.r(i649[2], i649[3], 0, i648, 'stepLose')
  return i648
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i652 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i653 = data
  i652.targetIsSelf = !!i653[0]
  request.r(i653[1], i653[2], 0, i652, 'targetGO')
  i652.tweenTargetIsTargetGO = !!i653[3]
  i652.delay = i653[4]
  i652.duration = i653[5]
  i652.easeType = i653[6]
  i652.easeCurve = new pc.AnimationCurve( { keys_flow: i653[7] } )
  i652.loopType = i653[8]
  i652.loops = i653[9]
  i652.id = i653[10]
  i652.isRelative = !!i653[11]
  i652.isFrom = !!i653[12]
  i652.isIndependentUpdate = !!i653[13]
  i652.autoKill = !!i653[14]
  i652.autoGenerate = !!i653[15]
  i652.isActive = !!i653[16]
  i652.isValid = !!i653[17]
  request.r(i653[18], i653[19], 0, i652, 'target')
  i652.animationType = i653[20]
  i652.targetType = i653[21]
  i652.forcedTargetType = i653[22]
  i652.autoPlay = !!i653[23]
  i652.useTargetAsV3 = !!i653[24]
  i652.endValueFloat = i653[25]
  i652.endValueV3 = new pc.Vec3( i653[26], i653[27], i653[28] )
  i652.endValueV2 = new pc.Vec2( i653[29], i653[30] )
  i652.endValueColor = new pc.Color(i653[31], i653[32], i653[33], i653[34])
  i652.endValueString = i653[35]
  i652.endValueRect = UnityEngine.Rect.MinMaxRect(i653[36], i653[37], i653[38], i653[39])
  request.r(i653[40], i653[41], 0, i652, 'endValueTransform')
  i652.optionalBool0 = !!i653[42]
  i652.optionalBool1 = !!i653[43]
  i652.optionalFloat0 = i653[44]
  i652.optionalInt0 = i653[45]
  i652.optionalRotationMode = i653[46]
  i652.optionalScrambleMode = i653[47]
  i652.optionalShakeRandomnessMode = i653[48]
  i652.optionalString = i653[49]
  i652.updateType = i653[50]
  i652.isSpeedBased = !!i653[51]
  i652.hasOnStart = !!i653[52]
  i652.hasOnPlay = !!i653[53]
  i652.hasOnUpdate = !!i653[54]
  i652.hasOnStepComplete = !!i653[55]
  i652.hasOnComplete = !!i653[56]
  i652.hasOnTweenCreated = !!i653[57]
  i652.hasOnRewind = !!i653[58]
  i652.onStart = request.d('UnityEngine.Events.UnityEvent', i653[59], i652.onStart)
  i652.onPlay = request.d('UnityEngine.Events.UnityEvent', i653[60], i652.onPlay)
  i652.onUpdate = request.d('UnityEngine.Events.UnityEvent', i653[61], i652.onUpdate)
  i652.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i653[62], i652.onStepComplete)
  i652.onComplete = request.d('UnityEngine.Events.UnityEvent', i653[63], i652.onComplete)
  i652.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i653[64], i652.onTweenCreated)
  i652.onRewind = request.d('UnityEngine.Events.UnityEvent', i653[65], i652.onRewind)
  return i652
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i655 = data
  i654.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i655[0], i654.m_PersistentCalls)
  return i654
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'm_ObjectArgument')
  i656.m_ObjectArgumentAssemblyTypeName = i657[2]
  i656.m_IntArgument = i657[3]
  i656.m_FloatArgument = i657[4]
  i656.m_StringArgument = i657[5]
  i656.m_BoolArgument = !!i657[6]
  return i656
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i658 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i659 = data
  i658.m_hasFontAssetChanged = !!i659[0]
  request.r(i659[1], i659[2], 0, i658, 'm_baseMaterial')
  i658.m_maskOffset = new pc.Vec4( i659[3], i659[4], i659[5], i659[6] )
  i658.m_text = i659[7]
  i658.m_isRightToLeft = !!i659[8]
  request.r(i659[9], i659[10], 0, i658, 'm_fontAsset')
  request.r(i659[11], i659[12], 0, i658, 'm_sharedMaterial')
  var i661 = i659[13]
  var i660 = []
  for(var i = 0; i < i661.length; i += 2) {
  request.r(i661[i + 0], i661[i + 1], 2, i660, '')
  }
  i658.m_fontSharedMaterials = i660
  request.r(i659[14], i659[15], 0, i658, 'm_fontMaterial')
  var i663 = i659[16]
  var i662 = []
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 2, i662, '')
  }
  i658.m_fontMaterials = i662
  i658.m_fontColor32 = UnityEngine.Color32.ConstructColor(i659[17], i659[18], i659[19], i659[20])
  i658.m_fontColor = new pc.Color(i659[21], i659[22], i659[23], i659[24])
  i658.m_enableVertexGradient = !!i659[25]
  i658.m_colorMode = i659[26]
  i658.m_fontColorGradient = request.d('TMPro.VertexGradient', i659[27], i658.m_fontColorGradient)
  request.r(i659[28], i659[29], 0, i658, 'm_fontColorGradientPreset')
  request.r(i659[30], i659[31], 0, i658, 'm_spriteAsset')
  i658.m_tintAllSprites = !!i659[32]
  request.r(i659[33], i659[34], 0, i658, 'm_StyleSheet')
  i658.m_TextStyleHashCode = i659[35]
  i658.m_overrideHtmlColors = !!i659[36]
  i658.m_faceColor = UnityEngine.Color32.ConstructColor(i659[37], i659[38], i659[39], i659[40])
  i658.m_fontSize = i659[41]
  i658.m_fontSizeBase = i659[42]
  i658.m_fontWeight = i659[43]
  i658.m_enableAutoSizing = !!i659[44]
  i658.m_fontSizeMin = i659[45]
  i658.m_fontSizeMax = i659[46]
  i658.m_fontStyle = i659[47]
  i658.m_HorizontalAlignment = i659[48]
  i658.m_VerticalAlignment = i659[49]
  i658.m_textAlignment = i659[50]
  i658.m_characterSpacing = i659[51]
  i658.m_wordSpacing = i659[52]
  i658.m_lineSpacing = i659[53]
  i658.m_lineSpacingMax = i659[54]
  i658.m_paragraphSpacing = i659[55]
  i658.m_charWidthMaxAdj = i659[56]
  i658.m_enableWordWrapping = !!i659[57]
  i658.m_wordWrappingRatios = i659[58]
  i658.m_overflowMode = i659[59]
  request.r(i659[60], i659[61], 0, i658, 'm_linkedTextComponent')
  request.r(i659[62], i659[63], 0, i658, 'parentLinkedComponent')
  i658.m_enableKerning = !!i659[64]
  i658.m_enableExtraPadding = !!i659[65]
  i658.checkPaddingRequired = !!i659[66]
  i658.m_isRichText = !!i659[67]
  i658.m_parseCtrlCharacters = !!i659[68]
  i658.m_isOrthographic = !!i659[69]
  i658.m_isCullingEnabled = !!i659[70]
  i658.m_horizontalMapping = i659[71]
  i658.m_verticalMapping = i659[72]
  i658.m_uvLineOffset = i659[73]
  i658.m_geometrySortingOrder = i659[74]
  i658.m_IsTextObjectScaleStatic = !!i659[75]
  i658.m_VertexBufferAutoSizeReduction = !!i659[76]
  i658.m_useMaxVisibleDescender = !!i659[77]
  i658.m_pageToDisplay = i659[78]
  i658.m_margin = new pc.Vec4( i659[79], i659[80], i659[81], i659[82] )
  i658.m_isUsingLegacyAnimationComponent = !!i659[83]
  i658.m_isVolumetricText = !!i659[84]
  i658.m_Maskable = !!i659[85]
  request.r(i659[86], i659[87], 0, i658, 'm_Material')
  i658.m_Color = new pc.Color(i659[88], i659[89], i659[90], i659[91])
  i658.m_RaycastTarget = !!i659[92]
  i658.m_RaycastPadding = new pc.Vec4( i659[93], i659[94], i659[95], i659[96] )
  return i658
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i666 = root || request.c( 'TMPro.VertexGradient' )
  var i667 = data
  i666.topLeft = new pc.Color(i667[0], i667[1], i667[2], i667[3])
  i666.topRight = new pc.Color(i667[4], i667[5], i667[6], i667[7])
  i666.bottomLeft = new pc.Color(i667[8], i667[9], i667[10], i667[11])
  i666.bottomRight = new pc.Color(i667[12], i667[13], i667[14], i667[15])
  return i666
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.Mask' )
  var i669 = data
  i668.m_ShowMaskGraphic = !!i669[0]
  return i668
}

Deserializers["AudioController"] = function (request, data, root) {
  var i670 = root || request.c( 'AudioController' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'bgmSource')
  request.r(i671[2], i671[3], 0, i670, 'sfxSource')
  var i673 = i671[4]
  var i672 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i673.length; i += 1) {
    i672.add(request.d('AudioEntry', i673[i + 0]));
  }
  i670.audioEntries = i672
  return i670
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i676 = root || request.c( 'AudioEntry' )
  var i677 = data
  i676.key = i677[0]
  request.r(i677[1], i677[2], 0, i676, 'clip')
  i676.volume = i677[3]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i679 = data
  i678.ambientIntensity = i679[0]
  i678.reflectionIntensity = i679[1]
  i678.ambientMode = i679[2]
  i678.ambientLight = new pc.Color(i679[3], i679[4], i679[5], i679[6])
  i678.ambientSkyColor = new pc.Color(i679[7], i679[8], i679[9], i679[10])
  i678.ambientGroundColor = new pc.Color(i679[11], i679[12], i679[13], i679[14])
  i678.ambientEquatorColor = new pc.Color(i679[15], i679[16], i679[17], i679[18])
  i678.fogColor = new pc.Color(i679[19], i679[20], i679[21], i679[22])
  i678.fogEndDistance = i679[23]
  i678.fogStartDistance = i679[24]
  i678.fogDensity = i679[25]
  i678.fog = !!i679[26]
  request.r(i679[27], i679[28], 0, i678, 'skybox')
  i678.fogMode = i679[29]
  var i681 = i679[30]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i681[i + 0]) );
  }
  i678.lightmaps = i680
  i678.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i679[31], i678.lightProbes)
  i678.lightmapsMode = i679[32]
  i678.mixedBakeMode = i679[33]
  i678.environmentLightingMode = i679[34]
  i678.ambientProbe = new pc.SphericalHarmonicsL2(i679[35])
  i678.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i679[36])
  i678.useReferenceAmbientProbe = !!i679[37]
  request.r(i679[38], i679[39], 0, i678, 'customReflection')
  request.r(i679[40], i679[41], 0, i678, 'defaultReflection')
  i678.defaultReflectionMode = i679[42]
  i678.defaultReflectionResolution = i679[43]
  i678.sunLightObjectId = i679[44]
  i678.pixelLightCount = i679[45]
  i678.defaultReflectionHDR = !!i679[46]
  i678.hasLightDataAsset = !!i679[47]
  i678.hasManualGenerate = !!i679[48]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'lightmapColor')
  request.r(i685[2], i685[3], 0, i684, 'lightmapDirection')
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i686 = root || new UnityEngine.LightProbes()
  var i687 = data
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i695 = data
  var i697 = i695[0]
  var i696 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i697.length; i += 1) {
    i696.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i697[i + 0]));
  }
  i694.ShaderCompilationErrors = i696
  i694.name = i695[1]
  i694.guid = i695[2]
  var i699 = i695[3]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( i699[i + 0] );
  }
  i694.shaderDefinedKeywords = i698
  var i701 = i695[4]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i701[i + 0]) );
  }
  i694.passes = i700
  var i703 = i695[5]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i703[i + 0]) );
  }
  i694.usePasses = i702
  var i705 = i695[6]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i705[i + 0]) );
  }
  i694.defaultParameterValues = i704
  request.r(i695[7], i695[8], 0, i694, 'unityFallbackShader')
  i694.readDepth = !!i695[9]
  i694.isCreatedByShaderGraph = !!i695[10]
  i694.disableBatching = !!i695[11]
  i694.compiled = !!i695[12]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i709 = data
  i708.shaderName = i709[0]
  i708.errorMessage = i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i712 = root || new pc.UnityShaderPass()
  var i713 = data
  i712.id = i713[0]
  i712.subShaderIndex = i713[1]
  i712.name = i713[2]
  i712.passType = i713[3]
  i712.grabPassTextureName = i713[4]
  i712.usePass = !!i713[5]
  i712.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[6], i712.zTest)
  i712.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[7], i712.zWrite)
  i712.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[8], i712.culling)
  i712.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i713[9], i712.blending)
  i712.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i713[10], i712.alphaBlending)
  i712.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[11], i712.colorWriteMask)
  i712.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[12], i712.offsetUnits)
  i712.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[13], i712.offsetFactor)
  i712.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[14], i712.stencilRef)
  i712.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[15], i712.stencilReadMask)
  i712.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[16], i712.stencilWriteMask)
  i712.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i713[17], i712.stencilOp)
  i712.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i713[18], i712.stencilOpFront)
  i712.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i713[19], i712.stencilOpBack)
  var i715 = i713[20]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i715[i + 0]) );
  }
  i712.tags = i714
  var i717 = i713[21]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( i717[i + 0] );
  }
  i712.passDefinedKeywords = i716
  var i719 = i713[22]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i719[i + 0]) );
  }
  i712.passDefinedKeywordGroups = i718
  var i721 = i713[23]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i721[i + 0]) );
  }
  i712.variants = i720
  var i723 = i713[24]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i723[i + 0]) );
  }
  i712.excludedVariants = i722
  i712.hasDepthReader = !!i713[25]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i725 = data
  i724.val = i725[0]
  i724.name = i725[1]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i727 = data
  i726.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[0], i726.src)
  i726.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[1], i726.dst)
  i726.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[2], i726.op)
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i729 = data
  i728.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[0], i728.pass)
  i728.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[1], i728.fail)
  i728.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[2], i728.zFail)
  i728.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[3], i728.comp)
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i733 = data
  i732.name = i733[0]
  i732.value = i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i737 = data
  var i739 = i737[0]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i736.keywords = i738
  i736.hasDiscard = !!i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i743 = data
  i742.passId = i743[0]
  i742.subShaderIndex = i743[1]
  var i745 = i743[2]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( i745[i + 0] );
  }
  i742.keywords = i744
  i742.vertexProgram = i743[3]
  i742.fragmentProgram = i743[4]
  i742.exportedForWebGl2 = !!i743[5]
  i742.readDepth = !!i743[6]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'shader')
  i748.pass = i749[2]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i753 = data
  i752.name = i753[0]
  i752.type = i753[1]
  i752.value = new pc.Vec4( i753[2], i753[3], i753[4], i753[5] )
  i752.textureValue = i753[6]
  i752.shaderPropertyFlag = i753[7]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i755 = data
  i754.name = i755[0]
  request.r(i755[1], i755[2], 0, i754, 'texture')
  i754.aabb = i755[3]
  i754.vertices = i755[4]
  i754.triangles = i755[5]
  i754.textureRect = UnityEngine.Rect.MinMaxRect(i755[6], i755[7], i755[8], i755[9])
  i754.packedRect = UnityEngine.Rect.MinMaxRect(i755[10], i755[11], i755[12], i755[13])
  i754.border = new pc.Vec4( i755[14], i755[15], i755[16], i755[17] )
  i754.transparency = i755[18]
  i754.bounds = i755[19]
  i754.pixelsPerUnit = i755[20]
  i754.textureWidth = i755[21]
  i754.textureHeight = i755[22]
  i754.nativeSize = new pc.Vec2( i755[23], i755[24] )
  i754.pivot = new pc.Vec2( i755[25], i755[26] )
  i754.textureRectOffset = new pc.Vec2( i755[27], i755[28] )
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i757 = data
  i756.name = i757[0]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i759 = data
  i758.name = i759[0]
  i758.ascent = i759[1]
  i758.originalLineHeight = i759[2]
  i758.fontSize = i759[3]
  var i761 = i759[4]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i761[i + 0]) );
  }
  i758.characterInfo = i760
  request.r(i759[5], i759[6], 0, i758, 'texture')
  i758.originalFontSize = i759[7]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i765 = data
  i764.index = i765[0]
  i764.advance = i765[1]
  i764.bearing = i765[2]
  i764.glyphWidth = i765[3]
  i764.glyphHeight = i765[4]
  i764.minX = i765[5]
  i764.maxX = i765[6]
  i764.minY = i765[7]
  i764.maxY = i765[8]
  i764.uvBottomLeftX = i765[9]
  i764.uvBottomLeftY = i765[10]
  i764.uvBottomRightX = i765[11]
  i764.uvBottomRightY = i765[12]
  i764.uvTopLeftX = i765[13]
  i764.uvTopLeftY = i765[14]
  i764.uvTopRightX = i765[15]
  i764.uvTopRightY = i765[16]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i767 = data
  i766.name = i767[0]
  i766.bytes64 = i767[1]
  i766.data = i767[2]
  return i766
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i768 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i769 = data
  var i771 = i769[0]
  var i770 = []
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 2, i770, '')
  }
  i768.atlasAssets = i770
  i768.scale = i769[1]
  request.r(i769[2], i769[3], 0, i768, 'skeletonJSON')
  i768.isUpgradingBlendModeMaterials = !!i769[4]
  i768.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i769[5], i768.blendModeMaterials)
  var i773 = i769[6]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 1, i772, '')
  }
  i768.skeletonDataModifiers = i772
  var i775 = i769[7]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( i775[i + 0] );
  }
  i768.fromAnimation = i774
  var i777 = i769[8]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( i777[i + 0] );
  }
  i768.toAnimation = i776
  i768.duration = i769[9]
  i768.defaultMix = i769[10]
  request.r(i769[11], i769[12], 0, i768, 'controller')
  return i768
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i780 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i781 = data
  i780.applyAdditiveMaterial = !!i781[0]
  var i783 = i781[1]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i783[i + 0]));
  }
  i780.additiveMaterials = i782
  var i785 = i781[2]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i785.length; i += 1) {
    i784.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i785[i + 0]));
  }
  i780.multiplyMaterials = i784
  var i787 = i781[3]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i787[i + 0]));
  }
  i780.screenMaterials = i786
  i780.requiresBlendModeMaterials = !!i781[4]
  return i780
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i790 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i791 = data
  i790.pageName = i791[0]
  request.r(i791[1], i791[2], 0, i790, 'material')
  return i790
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i794 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'atlasFile')
  var i797 = i795[2]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i794.materials = i796
  i794.textureLoadingMode = i795[3]
  request.r(i795[4], i795[5], 0, i794, 'onDemandTextureLoader')
  return i794
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i798 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'atlas')
  i798.normalStyle = i799[2]
  i798.normalSpacingOffset = i799[3]
  i798.boldStyle = i799[4]
  i798.boldSpacing = i799[5]
  i798.italicStyle = i799[6]
  i798.tabSize = i799[7]
  i798.hashCode = i799[8]
  request.r(i799[9], i799[10], 0, i798, 'material')
  i798.materialHashCode = i799[11]
  i798.m_Version = i799[12]
  i798.m_SourceFontFileGUID = i799[13]
  request.r(i799[14], i799[15], 0, i798, 'm_SourceFontFile_EditorRef')
  request.r(i799[16], i799[17], 0, i798, 'm_SourceFontFile')
  i798.m_AtlasPopulationMode = i799[18]
  i798.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i799[19], i798.m_FaceInfo)
  var i801 = i799[20]
  var i800 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i801.length; i += 1) {
    i800.add(request.d('UnityEngine.TextCore.Glyph', i801[i + 0]));
  }
  i798.m_GlyphTable = i800
  var i803 = i799[21]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i803.length; i += 1) {
    i802.add(request.d('TMPro.TMP_Character', i803[i + 0]));
  }
  i798.m_CharacterTable = i802
  var i805 = i799[22]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i798.m_AtlasTextures = i804
  i798.m_AtlasTextureIndex = i799[23]
  i798.m_IsMultiAtlasTexturesEnabled = !!i799[24]
  i798.m_ClearDynamicDataOnBuild = !!i799[25]
  var i807 = i799[26]
  var i806 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i807.length; i += 1) {
    i806.add(request.d('UnityEngine.TextCore.GlyphRect', i807[i + 0]));
  }
  i798.m_UsedGlyphRects = i806
  var i809 = i799[27]
  var i808 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i809.length; i += 1) {
    i808.add(request.d('UnityEngine.TextCore.GlyphRect', i809[i + 0]));
  }
  i798.m_FreeGlyphRects = i808
  i798.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i799[28], i798.m_fontInfo)
  i798.m_AtlasWidth = i799[29]
  i798.m_AtlasHeight = i799[30]
  i798.m_AtlasPadding = i799[31]
  i798.m_AtlasRenderMode = i799[32]
  var i811 = i799[33]
  var i810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i811.length; i += 1) {
    i810.add(request.d('TMPro.TMP_Glyph', i811[i + 0]));
  }
  i798.m_glyphInfoList = i810
  i798.m_KerningTable = request.d('TMPro.KerningTable', i799[34], i798.m_KerningTable)
  i798.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i799[35], i798.m_FontFeatureTable)
  var i813 = i799[36]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 1, i812, '')
  }
  i798.fallbackFontAssets = i812
  var i815 = i799[37]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 1, i814, '')
  }
  i798.m_FallbackFontAssetTable = i814
  i798.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i799[38], i798.m_CreationSettings)
  var i817 = i799[39]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('TMPro.TMP_FontWeightPair', i817[i + 0]) );
  }
  i798.m_FontWeightTable = i816
  var i819 = i799[40]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('TMPro.TMP_FontWeightPair', i819[i + 0]) );
  }
  i798.fontWeights = i818
  return i798
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i821 = data
  i820.m_FaceIndex = i821[0]
  i820.m_FamilyName = i821[1]
  i820.m_StyleName = i821[2]
  i820.m_PointSize = i821[3]
  i820.m_Scale = i821[4]
  i820.m_UnitsPerEM = i821[5]
  i820.m_LineHeight = i821[6]
  i820.m_AscentLine = i821[7]
  i820.m_CapLine = i821[8]
  i820.m_MeanLine = i821[9]
  i820.m_Baseline = i821[10]
  i820.m_DescentLine = i821[11]
  i820.m_SuperscriptOffset = i821[12]
  i820.m_SuperscriptSize = i821[13]
  i820.m_SubscriptOffset = i821[14]
  i820.m_SubscriptSize = i821[15]
  i820.m_UnderlineOffset = i821[16]
  i820.m_UnderlineThickness = i821[17]
  i820.m_StrikethroughOffset = i821[18]
  i820.m_StrikethroughThickness = i821[19]
  i820.m_TabWidth = i821[20]
  return i820
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i825 = data
  i824.m_Index = i825[0]
  i824.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i825[1], i824.m_Metrics)
  i824.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i825[2], i824.m_GlyphRect)
  i824.m_Scale = i825[3]
  i824.m_AtlasIndex = i825[4]
  i824.m_ClassDefinitionType = i825[5]
  return i824
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i827 = data
  i826.m_Width = i827[0]
  i826.m_Height = i827[1]
  i826.m_HorizontalBearingX = i827[2]
  i826.m_HorizontalBearingY = i827[3]
  i826.m_HorizontalAdvance = i827[4]
  return i826
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i829 = data
  i828.m_X = i829[0]
  i828.m_Y = i829[1]
  i828.m_Width = i829[2]
  i828.m_Height = i829[3]
  return i828
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.TMP_Character' )
  var i833 = data
  i832.m_ElementType = i833[0]
  i832.m_Unicode = i833[1]
  i832.m_GlyphIndex = i833[2]
  i832.m_Scale = i833[3]
  return i832
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i839 = data
  i838.Name = i839[0]
  i838.PointSize = i839[1]
  i838.Scale = i839[2]
  i838.CharacterCount = i839[3]
  i838.LineHeight = i839[4]
  i838.Baseline = i839[5]
  i838.Ascender = i839[6]
  i838.CapHeight = i839[7]
  i838.Descender = i839[8]
  i838.CenterLine = i839[9]
  i838.SuperscriptOffset = i839[10]
  i838.SubscriptOffset = i839[11]
  i838.SubSize = i839[12]
  i838.Underline = i839[13]
  i838.UnderlineThickness = i839[14]
  i838.strikethrough = i839[15]
  i838.strikethroughThickness = i839[16]
  i838.TabWidth = i839[17]
  i838.Padding = i839[18]
  i838.AtlasWidth = i839[19]
  i838.AtlasHeight = i839[20]
  return i838
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.TMP_Glyph' )
  var i843 = data
  i842.id = i843[0]
  i842.x = i843[1]
  i842.y = i843[2]
  i842.width = i843[3]
  i842.height = i843[4]
  i842.xOffset = i843[5]
  i842.yOffset = i843[6]
  i842.xAdvance = i843[7]
  i842.scale = i843[8]
  return i842
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.KerningTable' )
  var i845 = data
  var i847 = i845[0]
  var i846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i847.length; i += 1) {
    i846.add(request.d('TMPro.KerningPair', i847[i + 0]));
  }
  i844.kerningPairs = i846
  return i844
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.KerningPair' )
  var i851 = data
  i850.xOffset = i851[0]
  i850.m_FirstGlyph = i851[1]
  i850.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i851[2], i850.m_FirstGlyphAdjustments)
  i850.m_SecondGlyph = i851[3]
  i850.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i851[4], i850.m_SecondGlyphAdjustments)
  i850.m_IgnoreSpacingAdjustments = !!i851[5]
  return i850
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i852 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i853 = data
  var i855 = i853[0]
  var i854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i855.length; i += 1) {
    i854.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i855[i + 0]));
  }
  i852.m_GlyphPairAdjustmentRecords = i854
  return i852
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i858 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i859 = data
  i858.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i859[0], i858.m_FirstAdjustmentRecord)
  i858.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i859[1], i858.m_SecondAdjustmentRecord)
  i858.m_FeatureLookupFlags = i859[2]
  return i858
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i863 = data
  i862.sourceFontFileName = i863[0]
  i862.sourceFontFileGUID = i863[1]
  i862.pointSizeSamplingMode = i863[2]
  i862.pointSize = i863[3]
  i862.padding = i863[4]
  i862.packingMode = i863[5]
  i862.atlasWidth = i863[6]
  i862.atlasHeight = i863[7]
  i862.characterSetSelectionMode = i863[8]
  i862.characterSequence = i863[9]
  i862.referencedFontAssetGUID = i863[10]
  i862.referencedTextAssetGUID = i863[11]
  i862.fontStyle = i863[12]
  i862.fontStyleModifier = i863[13]
  i862.renderMode = i863[14]
  i862.includeFontFeatures = !!i863[15]
  return i862
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'regularTypeface')
  request.r(i867[2], i867[3], 0, i866, 'italicTypeface')
  return i866
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i868 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i869 = data
  i868.useSafeMode = !!i869[0]
  i868.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i869[1], i868.safeModeOptions)
  i868.timeScale = i869[2]
  i868.unscaledTimeScale = i869[3]
  i868.useSmoothDeltaTime = !!i869[4]
  i868.maxSmoothUnscaledTime = i869[5]
  i868.rewindCallbackMode = i869[6]
  i868.showUnityEditorReport = !!i869[7]
  i868.logBehaviour = i869[8]
  i868.drawGizmos = !!i869[9]
  i868.defaultRecyclable = !!i869[10]
  i868.defaultAutoPlay = i869[11]
  i868.defaultUpdateType = i869[12]
  i868.defaultTimeScaleIndependent = !!i869[13]
  i868.defaultEaseType = i869[14]
  i868.defaultEaseOvershootOrAmplitude = i869[15]
  i868.defaultEasePeriod = i869[16]
  i868.defaultAutoKill = !!i869[17]
  i868.defaultLoopType = i869[18]
  i868.debugMode = !!i869[19]
  i868.debugStoreTargetId = !!i869[20]
  i868.showPreviewPanel = !!i869[21]
  i868.storeSettingsLocation = i869[22]
  i868.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i869[23], i868.modules)
  i868.createASMDEF = !!i869[24]
  i868.showPlayingTweens = !!i869[25]
  i868.showPausedTweens = !!i869[26]
  return i868
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i870 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i871 = data
  i870.logBehaviour = i871[0]
  i870.nestedTweenFailureBehaviour = i871[1]
  return i870
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i872 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i873 = data
  i872.showPanel = !!i873[0]
  i872.audioEnabled = !!i873[1]
  i872.physicsEnabled = !!i873[2]
  i872.physics2DEnabled = !!i873[3]
  i872.spriteEnabled = !!i873[4]
  i872.uiEnabled = !!i873[5]
  i872.textMeshProEnabled = !!i873[6]
  i872.tk2DEnabled = !!i873[7]
  i872.deAudioEnabled = !!i873[8]
  i872.deUnityExtendedEnabled = !!i873[9]
  i872.epoOutlineEnabled = !!i873[10]
  return i872
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TMP_Settings' )
  var i875 = data
  i874.m_enableWordWrapping = !!i875[0]
  i874.m_enableKerning = !!i875[1]
  i874.m_enableExtraPadding = !!i875[2]
  i874.m_enableTintAllSprites = !!i875[3]
  i874.m_enableParseEscapeCharacters = !!i875[4]
  i874.m_EnableRaycastTarget = !!i875[5]
  i874.m_GetFontFeaturesAtRuntime = !!i875[6]
  i874.m_missingGlyphCharacter = i875[7]
  i874.m_warningsDisabled = !!i875[8]
  request.r(i875[9], i875[10], 0, i874, 'm_defaultFontAsset')
  i874.m_defaultFontAssetPath = i875[11]
  i874.m_defaultFontSize = i875[12]
  i874.m_defaultAutoSizeMinRatio = i875[13]
  i874.m_defaultAutoSizeMaxRatio = i875[14]
  i874.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i875[15], i875[16] )
  i874.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i875[17], i875[18] )
  i874.m_autoSizeTextContainer = !!i875[19]
  i874.m_IsTextObjectScaleStatic = !!i875[20]
  var i877 = i875[21]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 1, i876, '')
  }
  i874.m_fallbackFontAssets = i876
  i874.m_matchMaterialPreset = !!i875[22]
  request.r(i875[23], i875[24], 0, i874, 'm_defaultSpriteAsset')
  i874.m_defaultSpriteAssetPath = i875[25]
  i874.m_enableEmojiSupport = !!i875[26]
  i874.m_MissingCharacterSpriteUnicode = i875[27]
  i874.m_defaultColorGradientPresetsPath = i875[28]
  request.r(i875[29], i875[30], 0, i874, 'm_defaultStyleSheet')
  i874.m_StyleSheetsResourcePath = i875[31]
  request.r(i875[32], i875[33], 0, i874, 'm_leadingCharacters')
  request.r(i875[34], i875[35], 0, i874, 'm_followingCharacters')
  i874.m_UseModernHangulLineBreakingRules = !!i875[36]
  return i874
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'spriteSheet')
  var i881 = i879[2]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('TMPro.TMP_Sprite', i881[i + 0]));
  }
  i878.spriteInfoList = i880
  var i883 = i879[3]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 1, i882, '')
  }
  i878.fallbackSpriteAssets = i882
  i878.hashCode = i879[4]
  request.r(i879[5], i879[6], 0, i878, 'material')
  i878.materialHashCode = i879[7]
  i878.m_Version = i879[8]
  i878.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i879[9], i878.m_FaceInfo)
  var i885 = i879[10]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(request.d('TMPro.TMP_SpriteCharacter', i885[i + 0]));
  }
  i878.m_SpriteCharacterTable = i884
  var i887 = i879[11]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(request.d('TMPro.TMP_SpriteGlyph', i887[i + 0]));
  }
  i878.m_SpriteGlyphTable = i886
  return i878
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i890 = root || request.c( 'TMPro.TMP_Sprite' )
  var i891 = data
  i890.name = i891[0]
  i890.hashCode = i891[1]
  i890.unicode = i891[2]
  i890.pivot = new pc.Vec2( i891[3], i891[4] )
  request.r(i891[5], i891[6], 0, i890, 'sprite')
  i890.id = i891[7]
  i890.x = i891[8]
  i890.y = i891[9]
  i890.width = i891[10]
  i890.height = i891[11]
  i890.xOffset = i891[12]
  i890.yOffset = i891[13]
  i890.xAdvance = i891[14]
  i890.scale = i891[15]
  return i890
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i896 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i897 = data
  i896.m_Name = i897[0]
  i896.m_HashCode = i897[1]
  i896.m_ElementType = i897[2]
  i896.m_Unicode = i897[3]
  i896.m_GlyphIndex = i897[4]
  i896.m_Scale = i897[5]
  return i896
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i900 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'sprite')
  i900.m_Index = i901[2]
  i900.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i901[3], i900.m_Metrics)
  i900.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i901[4], i900.m_GlyphRect)
  i900.m_Scale = i901[5]
  i900.m_AtlasIndex = i901[6]
  i900.m_ClassDefinitionType = i901[7]
  return i900
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i902 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i903 = data
  var i905 = i903[0]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('TMPro.TMP_Style', i905[i + 0]));
  }
  i902.m_StyleList = i904
  return i902
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i908 = root || request.c( 'TMPro.TMP_Style' )
  var i909 = data
  i908.m_Name = i909[0]
  i908.m_HashCode = i909[1]
  i908.m_OpeningDefinition = i909[2]
  i908.m_ClosingDefinition = i909[3]
  i908.m_OpeningTagArray = i909[4]
  i908.m_ClosingTagArray = i909[5]
  i908.m_OpeningTagUnicodeArray = i909[6]
  i908.m_ClosingTagUnicodeArray = i909[7]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i911 = data
  var i913 = i911[0]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i913[i + 0]) );
  }
  i910.files = i912
  i910.componentToPrefabIds = i911[1]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i917 = data
  i916.path = i917[0]
  request.r(i917[1], i917[2], 0, i916, 'unityObject')
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i919 = data
  var i921 = i919[0]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i921[i + 0]) );
  }
  i918.scriptsExecutionOrder = i920
  var i923 = i919[1]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i923[i + 0]) );
  }
  i918.sortingLayers = i922
  var i925 = i919[2]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i925[i + 0]) );
  }
  i918.cullingLayers = i924
  i918.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i919[3], i918.timeSettings)
  i918.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i919[4], i918.physicsSettings)
  i918.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i919[5], i918.physics2DSettings)
  i918.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i919[6], i918.qualitySettings)
  i918.enableRealtimeShadows = !!i919[7]
  i918.enableAutoInstancing = !!i919[8]
  i918.enableStaticBatching = !!i919[9]
  i918.enableDynamicBatching = !!i919[10]
  i918.lightmapEncodingQuality = i919[11]
  i918.desiredColorSpace = i919[12]
  var i927 = i919[13]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( i927[i + 0] );
  }
  i918.allTags = i926
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i931 = data
  i930.name = i931[0]
  i930.value = i931[1]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i935 = data
  i934.id = i935[0]
  i934.name = i935[1]
  i934.value = i935[2]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i939 = data
  i938.id = i939[0]
  i938.name = i939[1]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i941 = data
  i940.fixedDeltaTime = i941[0]
  i940.maximumDeltaTime = i941[1]
  i940.timeScale = i941[2]
  i940.maximumParticleTimestep = i941[3]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i943 = data
  i942.gravity = new pc.Vec3( i943[0], i943[1], i943[2] )
  i942.defaultSolverIterations = i943[3]
  i942.bounceThreshold = i943[4]
  i942.autoSyncTransforms = !!i943[5]
  i942.autoSimulation = !!i943[6]
  var i945 = i943[7]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i945[i + 0]) );
  }
  i942.collisionMatrix = i944
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i949 = data
  i948.enabled = !!i949[0]
  i948.layerId = i949[1]
  i948.otherLayerId = i949[2]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'material')
  i950.gravity = new pc.Vec2( i951[2], i951[3] )
  i950.positionIterations = i951[4]
  i950.velocityIterations = i951[5]
  i950.velocityThreshold = i951[6]
  i950.maxLinearCorrection = i951[7]
  i950.maxAngularCorrection = i951[8]
  i950.maxTranslationSpeed = i951[9]
  i950.maxRotationSpeed = i951[10]
  i950.baumgarteScale = i951[11]
  i950.baumgarteTOIScale = i951[12]
  i950.timeToSleep = i951[13]
  i950.linearSleepTolerance = i951[14]
  i950.angularSleepTolerance = i951[15]
  i950.defaultContactOffset = i951[16]
  i950.autoSimulation = !!i951[17]
  i950.queriesHitTriggers = !!i951[18]
  i950.queriesStartInColliders = !!i951[19]
  i950.callbacksOnDisable = !!i951[20]
  i950.reuseCollisionCallbacks = !!i951[21]
  i950.autoSyncTransforms = !!i951[22]
  var i953 = i951[23]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i953[i + 0]) );
  }
  i950.collisionMatrix = i952
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i957 = data
  i956.enabled = !!i957[0]
  i956.layerId = i957[1]
  i956.otherLayerId = i957[2]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i959 = data
  var i961 = i959[0]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i961[i + 0]) );
  }
  i958.qualityLevels = i960
  var i963 = i959[1]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( i963[i + 0] );
  }
  i958.names = i962
  i958.shadows = i959[2]
  i958.anisotropicFiltering = i959[3]
  i958.antiAliasing = i959[4]
  i958.lodBias = i959[5]
  i958.shadowCascades = i959[6]
  i958.shadowDistance = i959[7]
  i958.shadowmaskMode = i959[8]
  i958.shadowProjection = i959[9]
  i958.shadowResolution = i959[10]
  i958.softParticles = !!i959[11]
  i958.softVegetation = !!i959[12]
  i958.activeColorSpace = i959[13]
  i958.desiredColorSpace = i959[14]
  i958.masterTextureLimit = i959[15]
  i958.maxQueuedFrames = i959[16]
  i958.particleRaycastBudget = i959[17]
  i958.pixelLightCount = i959[18]
  i958.realtimeReflectionProbes = !!i959[19]
  i958.shadowCascade2Split = i959[20]
  i958.shadowCascade4Split = new pc.Vec3( i959[21], i959[22], i959[23] )
  i958.streamingMipmapsActive = !!i959[24]
  i958.vSyncCount = i959[25]
  i958.asyncUploadBufferSize = i959[26]
  i958.asyncUploadTimeSlice = i959[27]
  i958.billboardsFaceCameraPosition = !!i959[28]
  i958.shadowNearPlaneOffset = i959[29]
  i958.streamingMipmapsMemoryBudget = i959[30]
  i958.maximumLODLevel = i959[31]
  i958.streamingMipmapsAddAllCameras = !!i959[32]
  i958.streamingMipmapsMaxLevelReduction = i959[33]
  i958.streamingMipmapsRenderersPerFrame = i959[34]
  i958.resolutionScalingFixedDPIFactor = i959[35]
  i958.streamingMipmapsMaxFileIORequests = i959[36]
  i958.currentQualityLevel = i959[37]
  return i958
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i966 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i967 = data
  i966.xPlacement = i967[0]
  i966.yPlacement = i967[1]
  i966.xAdvance = i967[2]
  i966.yAdvance = i967[3]
  return i966
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i969 = data
  i968.m_GlyphIndex = i969[0]
  i968.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i969[1], i968.m_GlyphValueRecord)
  return i968
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i971 = data
  i970.m_XPlacement = i971[0]
  i970.m_YPlacement = i971[1]
  i970.m_XAdvance = i971[2]
  i970.m_YAdvance = i971[3]
  return i970
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[9],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[9],"78":[79],"80":[81],"82":[81],"13":[2],"83":[84],"85":[86],"87":[84],"88":[2],"89":[2],"15":[13],"22":[3,2],"90":[2],"14":[13],"91":[2],"92":[2],"93":[2],"94":[2],"95":[2],"96":[2],"97":[2],"36":[2],"98":[2],"20":[3,2],"99":[2],"100":[2],"101":[2],"102":[2],"103":[3,2],"104":[2],"105":[11],"106":[11],"12":[11],"107":[11],"108":[9],"109":[9],"110":[111],"112":[9],"113":[114],"115":[2],"116":[3,2],"117":[79],"5":[3,2],"118":[119,79],"120":[79],"121":[79,122],"123":[56],"124":[64],"125":[114],"126":[127],"128":[2],"129":[79,2],"21":[2,3],"130":[2],"131":[3,2],"132":[79],"133":[3,2],"134":[2],"135":[84]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","ClickItem","UnityEngine.CanvasGroup","DragCustom","DraggableItem","DropCustom","MixSkeletonSkin","UnityEngine.PolygonCollider2D","DropZone","DG.Tweening.DOTweenAnimation","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "217.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BM_V14_ManhND_AnhPD";

Deserializers.lunaAppID = "34530";

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

Deserializers.buildID = "c7734188-4acf-4458-a69d-0004c4d88e66";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

