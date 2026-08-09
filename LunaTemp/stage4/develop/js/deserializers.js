var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.JointSpring' )
  var i521 = data
  i520.spring = i521[0]
  i520.damper = i521[1]
  i520.targetPosition = i521[2]
  return i520
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointMotor' )
  var i523 = data
  i522.m_TargetVelocity = i523[0]
  i522.m_Force = i523[1]
  i522.m_FreeSpin = i523[2]
  return i522
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointLimits' )
  var i525 = data
  i524.m_Min = i525[0]
  i524.m_Max = i525[1]
  i524.m_Bounciness = i525[2]
  i524.m_BounceMinVelocity = i525[3]
  i524.m_ContactDistance = i525[4]
  i524.minBounce = i525[5]
  i524.maxBounce = i525[6]
  return i524
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.JointDrive' )
  var i527 = data
  i526.m_PositionSpring = i527[0]
  i526.m_PositionDamper = i527[1]
  i526.m_MaximumForce = i527[2]
  i526.m_UseAcceleration = i527[3]
  return i526
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i529 = data
  i528.m_Spring = i529[0]
  i528.m_Damper = i529[1]
  return i528
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i531 = data
  i530.m_Limit = i531[0]
  i530.m_Bounciness = i531[1]
  i530.m_ContactDistance = i531[2]
  return i530
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i533 = data
  i532.m_ExtremumSlip = i533[0]
  i532.m_ExtremumValue = i533[1]
  i532.m_AsymptoteSlip = i533[2]
  i532.m_AsymptoteValue = i533[3]
  i532.m_Stiffness = i533[4]
  return i532
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i535 = data
  i534.m_LowerAngle = i535[0]
  i534.m_UpperAngle = i535[1]
  return i534
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i537 = data
  i536.m_MotorSpeed = i537[0]
  i536.m_MaximumMotorTorque = i537[1]
  return i536
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i539 = data
  i538.m_DampingRatio = i539[0]
  i538.m_Frequency = i539[1]
  i538.m_Angle = i539[2]
  return i538
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i541 = data
  i540.m_LowerTranslation = i541[0]
  i540.m_UpperTranslation = i541[1]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i542 = root || new pc.UnityMaterial()
  var i543 = data
  i542.name = i543[0]
  request.r(i543[1], i543[2], 0, i542, 'shader')
  i542.renderQueue = i543[3]
  i542.enableInstancing = !!i543[4]
  var i545 = i543[5]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i545[i + 0]) );
  }
  i542.floatParameters = i544
  var i547 = i543[6]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i547[i + 0]) );
  }
  i542.colorParameters = i546
  var i549 = i543[7]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i549[i + 0]) );
  }
  i542.vectorParameters = i548
  var i551 = i543[8]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i551[i + 0]) );
  }
  i542.textureParameters = i550
  var i553 = i543[9]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i553[i + 0]) );
  }
  i542.materialFlags = i552
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i557 = data
  i556.name = i557[0]
  i556.value = i557[1]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i561 = data
  i560.name = i561[0]
  i560.value = new pc.Color(i561[1], i561[2], i561[3], i561[4])
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i565 = data
  i564.name = i565[0]
  i564.value = new pc.Vec4( i565[1], i565[2], i565[3], i565[4] )
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i569 = data
  i568.name = i569[0]
  request.r(i569[1], i569[2], 0, i568, 'value')
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i573 = data
  i572.name = i573[0]
  i572.enabled = !!i573[1]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i575 = data
  i574.name = i575[0]
  i574.width = i575[1]
  i574.height = i575[2]
  i574.mipmapCount = i575[3]
  i574.anisoLevel = i575[4]
  i574.filterMode = i575[5]
  i574.hdr = !!i575[6]
  i574.format = i575[7]
  i574.wrapMode = i575[8]
  i574.alphaIsTransparency = !!i575[9]
  i574.alphaSource = i575[10]
  i574.graphicsFormat = i575[11]
  i574.sRGBTexture = !!i575[12]
  i574.desiredColorSpace = i575[13]
  i574.wrapU = i575[14]
  i574.wrapV = i575[15]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i577 = data
  i576.name = i577[0]
  i576.halfPrecision = !!i577[1]
  i576.useSimplification = !!i577[2]
  i576.useUInt32IndexFormat = !!i577[3]
  i576.vertexCount = i577[4]
  i576.aabb = i577[5]
  var i579 = i577[6]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( !!i579[i + 0] );
  }
  i576.streams = i578
  i576.vertices = i577[7]
  var i581 = i577[8]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i581[i + 0]) );
  }
  i576.subMeshes = i580
  var i583 = i577[9]
  var i582 = []
  for(var i = 0; i < i583.length; i += 16) {
    i582.push( new pc.Mat4().setData(i583[i + 0], i583[i + 1], i583[i + 2], i583[i + 3],  i583[i + 4], i583[i + 5], i583[i + 6], i583[i + 7],  i583[i + 8], i583[i + 9], i583[i + 10], i583[i + 11],  i583[i + 12], i583[i + 13], i583[i + 14], i583[i + 15]) );
  }
  i576.bindposes = i582
  var i585 = i577[10]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i585[i + 0]) );
  }
  i576.blendShapes = i584
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i591 = data
  i590.triangles = i591[0]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i597 = data
  i596.name = i597[0]
  var i599 = i597[1]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i599[i + 0]) );
  }
  i596.frames = i598
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i601 = data
  i600.name = i601[0]
  i600.index = i601[1]
  i600.startup = !!i601[2]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i603 = data
  i602.aspect = i603[0]
  i602.orthographic = !!i603[1]
  i602.orthographicSize = i603[2]
  i602.backgroundColor = new pc.Color(i603[3], i603[4], i603[5], i603[6])
  i602.nearClipPlane = i603[7]
  i602.farClipPlane = i603[8]
  i602.fieldOfView = i603[9]
  i602.depth = i603[10]
  i602.clearFlags = i603[11]
  i602.cullingMask = i603[12]
  i602.rect = i603[13]
  request.r(i603[14], i603[15], 0, i602, 'targetTexture')
  i602.usePhysicalProperties = !!i603[16]
  i602.focalLength = i603[17]
  i602.sensorSize = new pc.Vec2( i603[18], i603[19] )
  i602.lensShift = new pc.Vec2( i603[20], i603[21] )
  i602.gateFit = i603[22]
  i602.commandBufferCount = i603[23]
  i602.cameraType = i603[24]
  i602.enabled = !!i603[25]
  return i602
}

Deserializers["CameraAutoSize"] = function (request, data, root) {
  var i604 = root || request.c( 'CameraAutoSize' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'targetCamera')
  i604.referenceResolution = new pc.Vec2( i605[2], i605[3] )
  i604.referenceOrthographicSize = i605[4]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i607 = data
  i606.name = i607[0]
  i606.tagId = i607[1]
  i606.enabled = !!i607[2]
  i606.isStatic = !!i607[3]
  i606.layer = i607[4]
  return i606
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'm_FirstSelected')
  i608.m_sendNavigationEvents = !!i609[2]
  i608.m_DragThreshold = i609[3]
  return i608
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i611 = data
  i610.m_HorizontalAxis = i611[0]
  i610.m_VerticalAxis = i611[1]
  i610.m_SubmitButton = i611[2]
  i610.m_CancelButton = i611[3]
  i610.m_InputActionsPerSecond = i611[4]
  i610.m_RepeatDelay = i611[5]
  i610.m_ForceModuleActive = !!i611[6]
  i610.m_SendPointerHoverToParent = !!i611[7]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i613 = data
  i612.pivot = new pc.Vec2( i613[0], i613[1] )
  i612.anchorMin = new pc.Vec2( i613[2], i613[3] )
  i612.anchorMax = new pc.Vec2( i613[4], i613[5] )
  i612.sizeDelta = new pc.Vec2( i613[6], i613[7] )
  i612.anchoredPosition3D = new pc.Vec3( i613[8], i613[9], i613[10] )
  i612.rotation = new pc.Quat(i613[11], i613[12], i613[13], i613[14])
  i612.scale = new pc.Vec3( i613[15], i613[16], i613[17] )
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i615 = data
  i614.planeDistance = i615[0]
  i614.referencePixelsPerUnit = i615[1]
  i614.isFallbackOverlay = !!i615[2]
  i614.renderMode = i615[3]
  i614.renderOrder = i615[4]
  i614.sortingLayerName = i615[5]
  i614.sortingOrder = i615[6]
  i614.scaleFactor = i615[7]
  request.r(i615[8], i615[9], 0, i614, 'worldCamera')
  i614.overrideSorting = !!i615[10]
  i614.pixelPerfect = !!i615[11]
  i614.targetDisplay = i615[12]
  i614.overridePixelPerfect = !!i615[13]
  i614.enabled = !!i615[14]
  return i614
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i617 = data
  i616.m_UiScaleMode = i617[0]
  i616.m_ReferencePixelsPerUnit = i617[1]
  i616.m_ScaleFactor = i617[2]
  i616.m_ReferenceResolution = new pc.Vec2( i617[3], i617[4] )
  i616.m_ScreenMatchMode = i617[5]
  i616.m_MatchWidthOrHeight = i617[6]
  i616.m_PhysicalUnit = i617[7]
  i616.m_FallbackScreenDPI = i617[8]
  i616.m_DefaultSpriteDPI = i617[9]
  i616.m_DynamicPixelsPerUnit = i617[10]
  i616.m_PresetInfoIsWorld = !!i617[11]
  return i616
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i619 = data
  i618.m_IgnoreReversedGraphics = !!i619[0]
  i618.m_BlockingObjects = i619[1]
  i618.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i619[2] )
  return i618
}

Deserializers["ResponsiveCanvasScaler"] = function (request, data, root) {
  var i620 = root || request.c( 'ResponsiveCanvasScaler' )
  var i621 = data
  i620._referenceResolution = new pc.Vec2( i621[0], i621[1] )
  i620._portraitMatch = i621[2]
  i620._landscapeMatch = i621[3]
  i620._squareMatch = i621[4]
  i620._portraitAspectThreshold = i621[5]
  i620._landscapeAspectThreshold = i621[6]
  return i620
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i622 = root || request.c( 'Playable.GameManager' )
  var i623 = data
  i622._totalEvent = i623[0]
  i622._endTime = i623[1]
  request.r(i623[2], i623[3], 0, i622, '_backgroundMusic')
  request.r(i623[4], i623[5], 0, i622, '_backgroundTexture')
  request.r(i623[6], i623[7], 0, i622, '_progressCount')
  request.r(i623[8], i623[9], 0, i622, '_txtCount')
  request.r(i623[10], i623[11], 0, i622, '_txtTime')
  var i625 = i623[12]
  var i624 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i625.length; i += 2) {
  request.r(i625[i + 0], i625[i + 1], 1, i624, '')
  }
  i622._btnCTA = i624
  request.r(i623[13], i623[14], 0, i622, '_objEndGame')
  request.r(i623[15], i623[16], 0, i622, '_background')
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i629 = data
  i628.cullTransparentMesh = !!i629[0]
  return i628
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.Image' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'm_Sprite')
  i630.m_Type = i631[2]
  i630.m_PreserveAspect = !!i631[3]
  i630.m_FillCenter = !!i631[4]
  i630.m_FillMethod = i631[5]
  i630.m_FillAmount = i631[6]
  i630.m_FillClockwise = !!i631[7]
  i630.m_FillOrigin = i631[8]
  i630.m_UseSpriteMesh = !!i631[9]
  i630.m_PixelsPerUnitMultiplier = i631[10]
  request.r(i631[11], i631[12], 0, i630, 'm_Material')
  i630.m_Maskable = !!i631[13]
  i630.m_Color = new pc.Color(i631[14], i631[15], i631[16], i631[17])
  i630.m_RaycastTarget = !!i631[18]
  i630.m_RaycastPadding = new pc.Vec4( i631[19], i631[20], i631[21], i631[22] )
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'clip')
  request.r(i633[2], i633[3], 0, i632, 'outputAudioMixerGroup')
  i632.playOnAwake = !!i633[4]
  i632.loop = !!i633[5]
  i632.time = i633[6]
  i632.volume = i633[7]
  i632.pitch = i633[8]
  i632.enabled = !!i633[9]
  return i632
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i634 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i635 = data
  i634.m_hasFontAssetChanged = !!i635[0]
  request.r(i635[1], i635[2], 0, i634, 'm_baseMaterial')
  i634.m_maskOffset = new pc.Vec4( i635[3], i635[4], i635[5], i635[6] )
  i634.m_text = i635[7]
  i634.m_isRightToLeft = !!i635[8]
  request.r(i635[9], i635[10], 0, i634, 'm_fontAsset')
  request.r(i635[11], i635[12], 0, i634, 'm_sharedMaterial')
  var i637 = i635[13]
  var i636 = []
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 2, i636, '')
  }
  i634.m_fontSharedMaterials = i636
  request.r(i635[14], i635[15], 0, i634, 'm_fontMaterial')
  var i639 = i635[16]
  var i638 = []
  for(var i = 0; i < i639.length; i += 2) {
  request.r(i639[i + 0], i639[i + 1], 2, i638, '')
  }
  i634.m_fontMaterials = i638
  i634.m_fontColor32 = UnityEngine.Color32.ConstructColor(i635[17], i635[18], i635[19], i635[20])
  i634.m_fontColor = new pc.Color(i635[21], i635[22], i635[23], i635[24])
  i634.m_enableVertexGradient = !!i635[25]
  i634.m_colorMode = i635[26]
  i634.m_fontColorGradient = request.d('TMPro.VertexGradient', i635[27], i634.m_fontColorGradient)
  request.r(i635[28], i635[29], 0, i634, 'm_fontColorGradientPreset')
  request.r(i635[30], i635[31], 0, i634, 'm_spriteAsset')
  i634.m_tintAllSprites = !!i635[32]
  request.r(i635[33], i635[34], 0, i634, 'm_StyleSheet')
  i634.m_TextStyleHashCode = i635[35]
  i634.m_overrideHtmlColors = !!i635[36]
  i634.m_faceColor = UnityEngine.Color32.ConstructColor(i635[37], i635[38], i635[39], i635[40])
  i634.m_fontSize = i635[41]
  i634.m_fontSizeBase = i635[42]
  i634.m_fontWeight = i635[43]
  i634.m_enableAutoSizing = !!i635[44]
  i634.m_fontSizeMin = i635[45]
  i634.m_fontSizeMax = i635[46]
  i634.m_fontStyle = i635[47]
  i634.m_HorizontalAlignment = i635[48]
  i634.m_VerticalAlignment = i635[49]
  i634.m_textAlignment = i635[50]
  i634.m_characterSpacing = i635[51]
  i634.m_wordSpacing = i635[52]
  i634.m_lineSpacing = i635[53]
  i634.m_lineSpacingMax = i635[54]
  i634.m_paragraphSpacing = i635[55]
  i634.m_charWidthMaxAdj = i635[56]
  i634.m_enableWordWrapping = !!i635[57]
  i634.m_wordWrappingRatios = i635[58]
  i634.m_overflowMode = i635[59]
  request.r(i635[60], i635[61], 0, i634, 'm_linkedTextComponent')
  request.r(i635[62], i635[63], 0, i634, 'parentLinkedComponent')
  i634.m_enableKerning = !!i635[64]
  i634.m_enableExtraPadding = !!i635[65]
  i634.checkPaddingRequired = !!i635[66]
  i634.m_isRichText = !!i635[67]
  i634.m_parseCtrlCharacters = !!i635[68]
  i634.m_isOrthographic = !!i635[69]
  i634.m_isCullingEnabled = !!i635[70]
  i634.m_horizontalMapping = i635[71]
  i634.m_verticalMapping = i635[72]
  i634.m_uvLineOffset = i635[73]
  i634.m_geometrySortingOrder = i635[74]
  i634.m_IsTextObjectScaleStatic = !!i635[75]
  i634.m_VertexBufferAutoSizeReduction = !!i635[76]
  i634.m_useMaxVisibleDescender = !!i635[77]
  i634.m_pageToDisplay = i635[78]
  i634.m_margin = new pc.Vec4( i635[79], i635[80], i635[81], i635[82] )
  i634.m_isUsingLegacyAnimationComponent = !!i635[83]
  i634.m_isVolumetricText = !!i635[84]
  request.r(i635[85], i635[86], 0, i634, 'm_Material')
  i634.m_Maskable = !!i635[87]
  i634.m_Color = new pc.Color(i635[88], i635[89], i635[90], i635[91])
  i634.m_RaycastTarget = !!i635[92]
  i634.m_RaycastPadding = new pc.Vec4( i635[93], i635[94], i635[95], i635[96] )
  return i634
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i642 = root || request.c( 'TMPro.VertexGradient' )
  var i643 = data
  i642.topLeft = new pc.Color(i643[0], i643[1], i643[2], i643[3])
  i642.topRight = new pc.Color(i643[4], i643[5], i643[6], i643[7])
  i642.bottomLeft = new pc.Color(i643[8], i643[9], i643[10], i643[11])
  i642.bottomRight = new pc.Color(i643[12], i643[13], i643[14], i643[15])
  return i642
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.Button' )
  var i645 = data
  i644.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i645[0], i644.m_OnClick)
  i644.m_Navigation = request.d('UnityEngine.UI.Navigation', i645[1], i644.m_Navigation)
  i644.m_Transition = i645[2]
  i644.m_Colors = request.d('UnityEngine.UI.ColorBlock', i645[3], i644.m_Colors)
  i644.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i645[4], i644.m_SpriteState)
  i644.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i645[5], i644.m_AnimationTriggers)
  i644.m_Interactable = !!i645[6]
  request.r(i645[7], i645[8], 0, i644, 'm_TargetGraphic')
  return i644
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i647 = data
  i646.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i647[0], i646.m_PersistentCalls)
  return i646
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i649 = data
  var i651 = i649[0]
  var i650 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i651.length; i += 1) {
    i650.add(request.d('UnityEngine.Events.PersistentCall', i651[i + 0]));
  }
  i648.m_Calls = i650
  return i648
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'm_Target')
  i654.m_TargetAssemblyTypeName = i655[2]
  i654.m_MethodName = i655[3]
  i654.m_Mode = i655[4]
  i654.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i655[5], i654.m_Arguments)
  i654.m_CallState = i655[6]
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

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i659 = data
  i658.m_Mode = i659[0]
  i658.m_WrapAround = !!i659[1]
  request.r(i659[2], i659[3], 0, i658, 'm_SelectOnUp')
  request.r(i659[4], i659[5], 0, i658, 'm_SelectOnDown')
  request.r(i659[6], i659[7], 0, i658, 'm_SelectOnLeft')
  request.r(i659[8], i659[9], 0, i658, 'm_SelectOnRight')
  return i658
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i661 = data
  i660.m_NormalColor = new pc.Color(i661[0], i661[1], i661[2], i661[3])
  i660.m_HighlightedColor = new pc.Color(i661[4], i661[5], i661[6], i661[7])
  i660.m_PressedColor = new pc.Color(i661[8], i661[9], i661[10], i661[11])
  i660.m_SelectedColor = new pc.Color(i661[12], i661[13], i661[14], i661[15])
  i660.m_DisabledColor = new pc.Color(i661[16], i661[17], i661[18], i661[19])
  i660.m_ColorMultiplier = i661[20]
  i660.m_FadeDuration = i661[21]
  return i660
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'm_HighlightedSprite')
  request.r(i663[2], i663[3], 0, i662, 'm_PressedSprite')
  request.r(i663[4], i663[5], 0, i662, 'm_SelectedSprite')
  request.r(i663[6], i663[7], 0, i662, 'm_DisabledSprite')
  return i662
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i665 = data
  i664.m_NormalTrigger = i665[0]
  i664.m_HighlightedTrigger = i665[1]
  i664.m_PressedTrigger = i665[2]
  i664.m_SelectedTrigger = i665[3]
  i664.m_DisabledTrigger = i665[4]
  return i664
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.Mask' )
  var i667 = data
  i666.m_ShowMaskGraphic = !!i667[0]
  return i666
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i668 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i669 = data
  i668.targetIsSelf = !!i669[0]
  request.r(i669[1], i669[2], 0, i668, 'targetGO')
  i668.tweenTargetIsTargetGO = !!i669[3]
  i668.delay = i669[4]
  i668.duration = i669[5]
  i668.easeType = i669[6]
  i668.easeCurve = new pc.AnimationCurve( { keys_flow: i669[7] } )
  i668.loopType = i669[8]
  i668.loops = i669[9]
  i668.id = i669[10]
  i668.isRelative = !!i669[11]
  i668.isFrom = !!i669[12]
  i668.isIndependentUpdate = !!i669[13]
  i668.autoKill = !!i669[14]
  i668.autoGenerate = !!i669[15]
  i668.isActive = !!i669[16]
  i668.isValid = !!i669[17]
  request.r(i669[18], i669[19], 0, i668, 'target')
  i668.animationType = i669[20]
  i668.targetType = i669[21]
  i668.forcedTargetType = i669[22]
  i668.autoPlay = !!i669[23]
  i668.useTargetAsV3 = !!i669[24]
  i668.endValueFloat = i669[25]
  i668.endValueV3 = new pc.Vec3( i669[26], i669[27], i669[28] )
  i668.endValueV2 = new pc.Vec2( i669[29], i669[30] )
  i668.endValueColor = new pc.Color(i669[31], i669[32], i669[33], i669[34])
  i668.endValueString = i669[35]
  i668.endValueRect = UnityEngine.Rect.MinMaxRect(i669[36], i669[37], i669[38], i669[39])
  request.r(i669[40], i669[41], 0, i668, 'endValueTransform')
  i668.optionalBool0 = !!i669[42]
  i668.optionalBool1 = !!i669[43]
  i668.optionalFloat0 = i669[44]
  i668.optionalInt0 = i669[45]
  i668.optionalRotationMode = i669[46]
  i668.optionalScrambleMode = i669[47]
  i668.optionalShakeRandomnessMode = i669[48]
  i668.optionalString = i669[49]
  i668.updateType = i669[50]
  i668.isSpeedBased = !!i669[51]
  i668.hasOnStart = !!i669[52]
  i668.hasOnPlay = !!i669[53]
  i668.hasOnUpdate = !!i669[54]
  i668.hasOnStepComplete = !!i669[55]
  i668.hasOnComplete = !!i669[56]
  i668.hasOnTweenCreated = !!i669[57]
  i668.hasOnRewind = !!i669[58]
  i668.onStart = request.d('UnityEngine.Events.UnityEvent', i669[59], i668.onStart)
  i668.onPlay = request.d('UnityEngine.Events.UnityEvent', i669[60], i668.onPlay)
  i668.onUpdate = request.d('UnityEngine.Events.UnityEvent', i669[61], i668.onUpdate)
  i668.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i669[62], i668.onStepComplete)
  i668.onComplete = request.d('UnityEngine.Events.UnityEvent', i669[63], i668.onComplete)
  i668.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i669[64], i668.onTweenCreated)
  i668.onRewind = request.d('UnityEngine.Events.UnityEvent', i669[65], i668.onRewind)
  return i668
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i671 = data
  i670.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i671[0], i670.m_PersistentCalls)
  return i670
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i672 = root || request.c( 'Playable.AudioManager' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, '_audioMusic')
  request.r(i673[2], i673[3], 0, i672, '_audioSound')
  return i672
}

Deserializers["Playable.GameController"] = function (request, data, root) {
  var i674 = root || request.c( 'Playable.GameController' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'skeletonAnimation')
  var i677 = i675[2]
  var i676 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i677.length; i += 1) {
    i676.add(i677[i + 0]);
  }
  i674._nameSkin = i676
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i681 = data
  i680.frontSortingLayerID = i681[0]
  i680.frontSortingOrder = i681[1]
  i680.backSortingLayerID = i681[2]
  i680.backSortingOrder = i681[3]
  i680.alphaCutoff = i681[4]
  request.r(i681[5], i681[6], 0, i680, 'sprite')
  i680.tileMode = i681[7]
  i680.isCustomRangeActive = !!i681[8]
  i680.spriteSortPoint = i681[9]
  i680.enabled = !!i681[10]
  request.r(i681[11], i681[12], 0, i680, 'sharedMaterial')
  var i683 = i681[13]
  var i682 = []
  for(var i = 0; i < i683.length; i += 2) {
  request.r(i683[i + 0], i683[i + 1], 2, i682, '')
  }
  i680.sharedMaterials = i682
  i680.receiveShadows = !!i681[14]
  i680.shadowCastingMode = i681[15]
  i680.sortingLayerID = i681[16]
  i680.sortingOrder = i681[17]
  i680.lightmapIndex = i681[18]
  i680.lightmapSceneIndex = i681[19]
  i680.lightmapScaleOffset = new pc.Vec4( i681[20], i681[21], i681[22], i681[23] )
  i680.lightProbeUsage = i681[24]
  i680.reflectionProbeUsage = i681[25]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i685 = data
  i684.color = new pc.Color(i685[0], i685[1], i685[2], i685[3])
  request.r(i685[4], i685[5], 0, i684, 'sprite')
  i684.flipX = !!i685[6]
  i684.flipY = !!i685[7]
  i684.drawMode = i685[8]
  i684.size = new pc.Vec2( i685[9], i685[10] )
  i684.tileMode = i685[11]
  i684.adaptiveModeThreshold = i685[12]
  i684.maskInteraction = i685[13]
  i684.spriteSortPoint = i685[14]
  i684.enabled = !!i685[15]
  request.r(i685[16], i685[17], 0, i684, 'sharedMaterial')
  var i687 = i685[18]
  var i686 = []
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 2, i686, '')
  }
  i684.sharedMaterials = i686
  i684.receiveShadows = !!i685[19]
  i684.shadowCastingMode = i685[20]
  i684.sortingLayerID = i685[21]
  i684.sortingOrder = i685[22]
  i684.lightmapIndex = i685[23]
  i684.lightmapSceneIndex = i685[24]
  i684.lightmapScaleOffset = new pc.Vec4( i685[25], i685[26], i685[27], i685[28] )
  i684.lightProbeUsage = i685[29]
  i684.reflectionProbeUsage = i685[30]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i689 = data
  i688.usedByComposite = !!i689[0]
  i688.autoTiling = !!i689[1]
  i688.size = new pc.Vec2( i689[2], i689[3] )
  i688.edgeRadius = i689[4]
  i688.enabled = !!i689[5]
  i688.isTrigger = !!i689[6]
  i688.usedByEffector = !!i689[7]
  i688.density = i689[8]
  i688.offset = new pc.Vec2( i689[9], i689[10] )
  request.r(i689[11], i689[12], 0, i688, 'material')
  return i688
}

Deserializers["Playable.ItemLevel37"] = function (request, data, root) {
  var i690 = root || request.c( 'Playable.ItemLevel37' )
  var i691 = data
  i690._targetType = i691[0]
  i690._isHaveAnim = !!i691[1]
  i690._nameSkin = i691[2]
  request.r(i691[3], i691[4], 0, i690, '_objActive')
  var i693 = i691[5]
  var i692 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 1, i692, '')
  }
  i690._objsDisabled = i692
  i690._isTriggerOnDragOut = !!i691[6]
  request.r(i691[7], i691[8], 0, i690, '_dragOutTarget')
  i690.returnDuration = i691[9]
  request.r(i691[10], i691[11], 0, i690, 'boxCollider')
  request.r(i691[12], i691[13], 0, i690, 'pressSound')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'additionalVertexStreams')
  i696.enabled = !!i697[2]
  request.r(i697[3], i697[4], 0, i696, 'sharedMaterial')
  var i699 = i697[5]
  var i698 = []
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 2, i698, '')
  }
  i696.sharedMaterials = i698
  i696.receiveShadows = !!i697[6]
  i696.shadowCastingMode = i697[7]
  i696.sortingLayerID = i697[8]
  i696.sortingOrder = i697[9]
  i696.lightmapIndex = i697[10]
  i696.lightmapSceneIndex = i697[11]
  i696.lightmapScaleOffset = new pc.Vec4( i697[12], i697[13], i697[14], i697[15] )
  i696.lightProbeUsage = i697[16]
  i696.reflectionProbeUsage = i697[17]
  return i696
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i700 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i701 = data
  i700.loop = !!i701[0]
  i700.timeScale = i701[1]
  request.r(i701[2], i701[3], 0, i700, 'skeletonDataAsset')
  i700.initialSkinName = i701[4]
  i700.fixPrefabOverrideViaMeshFilter = i701[5]
  i700.initialFlipX = !!i701[6]
  i700.initialFlipY = !!i701[7]
  i700.updateWhenInvisible = i701[8]
  i700.zSpacing = i701[9]
  i700.useClipping = !!i701[10]
  i700.immutableTriangles = !!i701[11]
  i700.pmaVertexColors = !!i701[12]
  i700.clearStateOnDisable = !!i701[13]
  i700.tintBlack = !!i701[14]
  i700.singleSubmesh = !!i701[15]
  i700.fixDrawOrder = !!i701[16]
  i700.addNormals = !!i701[17]
  i700.calculateTangents = !!i701[18]
  i700.maskInteraction = i701[19]
  i700.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i701[20], i700.maskMaterials)
  i700.disableRenderingOnOverride = !!i701[21]
  i700.updateTiming = i701[22]
  i700.unscaledTime = !!i701[23]
  i700._animationName = i701[24]
  var i703 = i701[25]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( i703[i + 0] );
  }
  i700.separatorSlotNames = i702
  i700.physicsPositionInheritanceFactor = new pc.Vec2( i701[26], i701[27] )
  i700.physicsRotationInheritanceFactor = i701[28]
  request.r(i701[29], i701[30], 0, i700, 'physicsMovementRelativeTo')
  return i700
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i704 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i705 = data
  var i707 = i705[0]
  var i706 = []
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 2, i706, '')
  }
  i704.materialsMaskDisabled = i706
  var i709 = i705[1]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i704.materialsInsideMask = i708
  var i711 = i705[2]
  var i710 = []
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 2, i710, '')
  }
  i704.materialsOutsideMask = i710
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'sharedMesh')
  return i714
}

Deserializers["SpineEventSoundPlayer"] = function (request, data, root) {
  var i716 = root || request.c( 'SpineEventSoundPlayer' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'skeletonAnimation')
  request.r(i717[2], i717[3], 0, i716, 'skeletonGraphic')
  request.r(i717[4], i717[5], 0, i716, 'audioSource')
  var i719 = i717[6]
  var i718 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i719.length; i += 2) {
  request.r(i719[i + 0], i719[i + 1], 1, i718, '')
  }
  i716.audioClips = i718
  return i716
}

Deserializers["Playable.TargetLevel37"] = function (request, data, root) {
  var i722 = root || request.c( 'Playable.TargetLevel37' )
  var i723 = data
  var i725 = i723[0]
  var i724 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.BoyInfo')))
  for(var i = 0; i < i725.length; i += 1) {
    i724.add(request.d('Playable.BoyInfo', i725[i + 0]));
  }
  i722.boyInfos = i724
  i722._isKeepLastBoy = !!i723[1]
  i722._delayDeactivate = i723[2]
  i722._delayTime = i723[3]
  request.r(i723[4], i723[5], 0, i722, 'targetCollider')
  return i722
}

Deserializers["Playable.BoyInfo"] = function (request, data, root) {
  var i728 = root || request.c( 'Playable.BoyInfo' )
  var i729 = data
  i728.Type = i729[0]
  request.r(i729[1], i729[2], 0, i728, 'Root')
  i728.AnimInfo = request.d('Playable.AnimInfo', i729[3], i728.AnimInfo)
  i728.IsClickable = !!i729[4]
  return i728
}

Deserializers["Playable.AnimInfo"] = function (request, data, root) {
  var i730 = root || request.c( 'Playable.AnimInfo' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'Skeleton')
  request.r(i731[2], i731[3], 0, i730, 'Item')
  request.r(i731[4], i731[5], 0, i730, 'Meter')
  i730.AnimDefault = i731[6]
  var i733 = i731[7]
  var i732 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.AnimStep')))
  for(var i = 0; i < i733.length; i += 1) {
    i732.add(request.d('Playable.AnimStep', i733[i + 0]));
  }
  i730.AnimWin = i732
  var i735 = i731[8]
  var i734 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.AnimStep')))
  for(var i = 0; i < i735.length; i += 1) {
    i734.add(request.d('Playable.AnimStep', i735[i + 0]));
  }
  i730.AnimLoseSteps = i734
  var i737 = i731[9]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i737.length; i += 1) {
    i736.add(i737[i + 0]);
  }
  i730.AnimItem = i736
  i730.MeterAnim = i731[10]
  return i730
}

Deserializers["Playable.AnimStep"] = function (request, data, root) {
  var i740 = root || request.c( 'Playable.AnimStep' )
  var i741 = data
  i740.Name = i741[0]
  i740.IsLoop = !!i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i743 = data
  i742.ambientIntensity = i743[0]
  i742.reflectionIntensity = i743[1]
  i742.ambientMode = i743[2]
  i742.ambientLight = new pc.Color(i743[3], i743[4], i743[5], i743[6])
  i742.ambientSkyColor = new pc.Color(i743[7], i743[8], i743[9], i743[10])
  i742.ambientGroundColor = new pc.Color(i743[11], i743[12], i743[13], i743[14])
  i742.ambientEquatorColor = new pc.Color(i743[15], i743[16], i743[17], i743[18])
  i742.fogColor = new pc.Color(i743[19], i743[20], i743[21], i743[22])
  i742.fogEndDistance = i743[23]
  i742.fogStartDistance = i743[24]
  i742.fogDensity = i743[25]
  i742.fog = !!i743[26]
  request.r(i743[27], i743[28], 0, i742, 'skybox')
  i742.fogMode = i743[29]
  var i745 = i743[30]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i745[i + 0]) );
  }
  i742.lightmaps = i744
  i742.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i743[31], i742.lightProbes)
  i742.lightmapsMode = i743[32]
  i742.mixedBakeMode = i743[33]
  i742.environmentLightingMode = i743[34]
  i742.ambientProbe = new pc.SphericalHarmonicsL2(i743[35])
  request.r(i743[36], i743[37], 0, i742, 'customReflection')
  request.r(i743[38], i743[39], 0, i742, 'defaultReflection')
  i742.defaultReflectionMode = i743[40]
  i742.defaultReflectionResolution = i743[41]
  i742.sunLightObjectId = i743[42]
  i742.pixelLightCount = i743[43]
  i742.defaultReflectionHDR = !!i743[44]
  i742.hasLightDataAsset = !!i743[45]
  i742.hasManualGenerate = !!i743[46]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'lightmapColor')
  request.r(i749[2], i749[3], 0, i748, 'lightmapDirection')
  request.r(i749[4], i749[5], 0, i748, 'shadowMask')
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i750 = root || new UnityEngine.LightProbes()
  var i751 = data
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i759 = data
  var i761 = i759[0]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i761.length; i += 1) {
    i760.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i761[i + 0]));
  }
  i758.ShaderCompilationErrors = i760
  i758.name = i759[1]
  i758.guid = i759[2]
  var i763 = i759[3]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( i763[i + 0] );
  }
  i758.shaderDefinedKeywords = i762
  var i765 = i759[4]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i765[i + 0]) );
  }
  i758.passes = i764
  var i767 = i759[5]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i767[i + 0]) );
  }
  i758.usePasses = i766
  var i769 = i759[6]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i769[i + 0]) );
  }
  i758.defaultParameterValues = i768
  request.r(i759[7], i759[8], 0, i758, 'unityFallbackShader')
  i758.readDepth = !!i759[9]
  i758.hasDepthOnlyPass = !!i759[10]
  i758.isCreatedByShaderGraph = !!i759[11]
  i758.disableBatching = !!i759[12]
  i758.compiled = !!i759[13]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i773 = data
  i772.shaderName = i773[0]
  i772.errorMessage = i773[1]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i776 = root || new pc.UnityShaderPass()
  var i777 = data
  i776.id = i777[0]
  i776.subShaderIndex = i777[1]
  i776.name = i777[2]
  i776.passType = i777[3]
  i776.grabPassTextureName = i777[4]
  i776.usePass = !!i777[5]
  i776.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[6], i776.zTest)
  i776.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[7], i776.zWrite)
  i776.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[8], i776.culling)
  i776.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i777[9], i776.blending)
  i776.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i777[10], i776.alphaBlending)
  i776.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[11], i776.colorWriteMask)
  i776.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[12], i776.offsetUnits)
  i776.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[13], i776.offsetFactor)
  i776.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[14], i776.stencilRef)
  i776.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[15], i776.stencilReadMask)
  i776.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[16], i776.stencilWriteMask)
  i776.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i777[17], i776.stencilOp)
  i776.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i777[18], i776.stencilOpFront)
  i776.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i777[19], i776.stencilOpBack)
  var i779 = i777[20]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i779[i + 0]) );
  }
  i776.tags = i778
  var i781 = i777[21]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( i781[i + 0] );
  }
  i776.passDefinedKeywords = i780
  var i783 = i777[22]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i783[i + 0]) );
  }
  i776.passDefinedKeywordGroups = i782
  var i785 = i777[23]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i785[i + 0]) );
  }
  i776.variants = i784
  var i787 = i777[24]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i787[i + 0]) );
  }
  i776.excludedVariants = i786
  i776.hasDepthReader = !!i777[25]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i789 = data
  i788.val = i789[0]
  i788.name = i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i791 = data
  i790.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[0], i790.src)
  i790.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[1], i790.dst)
  i790.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[2], i790.op)
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i793 = data
  i792.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[0], i792.pass)
  i792.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[1], i792.fail)
  i792.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[2], i792.zFail)
  i792.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[3], i792.comp)
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i797 = data
  i796.name = i797[0]
  i796.value = i797[1]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i801 = data
  var i803 = i801[0]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( i803[i + 0] );
  }
  i800.keywords = i802
  i800.hasDiscard = !!i801[1]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i807 = data
  i806.passId = i807[0]
  i806.subShaderIndex = i807[1]
  var i809 = i807[2]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( i809[i + 0] );
  }
  i806.keywords = i808
  i806.vertexProgram = i807[3]
  i806.fragmentProgram = i807[4]
  i806.exportedForWebGl2 = !!i807[5]
  i806.readDepth = !!i807[6]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'shader')
  i812.pass = i813[2]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i817 = data
  i816.name = i817[0]
  i816.type = i817[1]
  i816.value = new pc.Vec4( i817[2], i817[3], i817[4], i817[5] )
  i816.textureValue = i817[6]
  i816.shaderPropertyFlag = i817[7]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i819 = data
  i818.name = i819[0]
  request.r(i819[1], i819[2], 0, i818, 'texture')
  i818.aabb = i819[3]
  i818.vertices = i819[4]
  i818.triangles = i819[5]
  i818.textureRect = UnityEngine.Rect.MinMaxRect(i819[6], i819[7], i819[8], i819[9])
  i818.packedRect = UnityEngine.Rect.MinMaxRect(i819[10], i819[11], i819[12], i819[13])
  i818.border = new pc.Vec4( i819[14], i819[15], i819[16], i819[17] )
  i818.transparency = i819[18]
  i818.bounds = i819[19]
  i818.pixelsPerUnit = i819[20]
  i818.textureWidth = i819[21]
  i818.textureHeight = i819[22]
  i818.nativeSize = new pc.Vec2( i819[23], i819[24] )
  i818.pivot = new pc.Vec2( i819[25], i819[26] )
  i818.textureRectOffset = new pc.Vec2( i819[27], i819[28] )
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i821 = data
  i820.name = i821[0]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i823 = data
  i822.name = i823[0]
  i822.ascent = i823[1]
  i822.originalLineHeight = i823[2]
  i822.fontSize = i823[3]
  var i825 = i823[4]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i825[i + 0]) );
  }
  i822.characterInfo = i824
  request.r(i823[5], i823[6], 0, i822, 'texture')
  i822.originalFontSize = i823[7]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i829 = data
  i828.index = i829[0]
  i828.advance = i829[1]
  i828.bearing = i829[2]
  i828.glyphWidth = i829[3]
  i828.glyphHeight = i829[4]
  i828.minX = i829[5]
  i828.maxX = i829[6]
  i828.minY = i829[7]
  i828.maxY = i829[8]
  i828.uvBottomLeftX = i829[9]
  i828.uvBottomLeftY = i829[10]
  i828.uvBottomRightX = i829[11]
  i828.uvBottomRightY = i829[12]
  i828.uvTopLeftX = i829[13]
  i828.uvTopLeftY = i829[14]
  i828.uvTopRightX = i829[15]
  i828.uvTopRightY = i829[16]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i831 = data
  i830.name = i831[0]
  i830.bytes64 = i831[1]
  i830.data = i831[2]
  return i830
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'atlas')
  i832.normalStyle = i833[2]
  i832.normalSpacingOffset = i833[3]
  i832.boldStyle = i833[4]
  i832.boldSpacing = i833[5]
  i832.italicStyle = i833[6]
  i832.tabSize = i833[7]
  i832.hashCode = i833[8]
  request.r(i833[9], i833[10], 0, i832, 'material')
  i832.materialHashCode = i833[11]
  i832.m_Version = i833[12]
  i832.m_SourceFontFileGUID = i833[13]
  request.r(i833[14], i833[15], 0, i832, 'm_SourceFontFile_EditorRef')
  request.r(i833[16], i833[17], 0, i832, 'm_SourceFontFile')
  i832.m_AtlasPopulationMode = i833[18]
  i832.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i833[19], i832.m_FaceInfo)
  var i835 = i833[20]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i835.length; i += 1) {
    i834.add(request.d('UnityEngine.TextCore.Glyph', i835[i + 0]));
  }
  i832.m_GlyphTable = i834
  var i837 = i833[21]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i837.length; i += 1) {
    i836.add(request.d('TMPro.TMP_Character', i837[i + 0]));
  }
  i832.m_CharacterTable = i836
  var i839 = i833[22]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i832.m_AtlasTextures = i838
  i832.m_AtlasTextureIndex = i833[23]
  i832.m_IsMultiAtlasTexturesEnabled = !!i833[24]
  i832.m_ClearDynamicDataOnBuild = !!i833[25]
  var i841 = i833[26]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i841.length; i += 1) {
    i840.add(request.d('UnityEngine.TextCore.GlyphRect', i841[i + 0]));
  }
  i832.m_UsedGlyphRects = i840
  var i843 = i833[27]
  var i842 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i843.length; i += 1) {
    i842.add(request.d('UnityEngine.TextCore.GlyphRect', i843[i + 0]));
  }
  i832.m_FreeGlyphRects = i842
  i832.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i833[28], i832.m_fontInfo)
  i832.m_AtlasWidth = i833[29]
  i832.m_AtlasHeight = i833[30]
  i832.m_AtlasPadding = i833[31]
  i832.m_AtlasRenderMode = i833[32]
  var i845 = i833[33]
  var i844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i845.length; i += 1) {
    i844.add(request.d('TMPro.TMP_Glyph', i845[i + 0]));
  }
  i832.m_glyphInfoList = i844
  i832.m_KerningTable = request.d('TMPro.KerningTable', i833[34], i832.m_KerningTable)
  i832.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i833[35], i832.m_FontFeatureTable)
  var i847 = i833[36]
  var i846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 1, i846, '')
  }
  i832.fallbackFontAssets = i846
  var i849 = i833[37]
  var i848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 1, i848, '')
  }
  i832.m_FallbackFontAssetTable = i848
  i832.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i833[38], i832.m_CreationSettings)
  var i851 = i833[39]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('TMPro.TMP_FontWeightPair', i851[i + 0]) );
  }
  i832.m_FontWeightTable = i850
  var i853 = i833[40]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('TMPro.TMP_FontWeightPair', i853[i + 0]) );
  }
  i832.fontWeights = i852
  return i832
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i855 = data
  i854.m_FaceIndex = i855[0]
  i854.m_FamilyName = i855[1]
  i854.m_StyleName = i855[2]
  i854.m_PointSize = i855[3]
  i854.m_Scale = i855[4]
  i854.m_UnitsPerEM = i855[5]
  i854.m_LineHeight = i855[6]
  i854.m_AscentLine = i855[7]
  i854.m_CapLine = i855[8]
  i854.m_MeanLine = i855[9]
  i854.m_Baseline = i855[10]
  i854.m_DescentLine = i855[11]
  i854.m_SuperscriptOffset = i855[12]
  i854.m_SuperscriptSize = i855[13]
  i854.m_SubscriptOffset = i855[14]
  i854.m_SubscriptSize = i855[15]
  i854.m_UnderlineOffset = i855[16]
  i854.m_UnderlineThickness = i855[17]
  i854.m_StrikethroughOffset = i855[18]
  i854.m_StrikethroughThickness = i855[19]
  i854.m_TabWidth = i855[20]
  return i854
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i859 = data
  i858.m_Index = i859[0]
  i858.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i859[1], i858.m_Metrics)
  i858.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i859[2], i858.m_GlyphRect)
  i858.m_Scale = i859[3]
  i858.m_AtlasIndex = i859[4]
  i858.m_ClassDefinitionType = i859[5]
  return i858
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i861 = data
  i860.m_Width = i861[0]
  i860.m_Height = i861[1]
  i860.m_HorizontalBearingX = i861[2]
  i860.m_HorizontalBearingY = i861[3]
  i860.m_HorizontalAdvance = i861[4]
  return i860
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i863 = data
  i862.m_X = i863[0]
  i862.m_Y = i863[1]
  i862.m_Width = i863[2]
  i862.m_Height = i863[3]
  return i862
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.TMP_Character' )
  var i867 = data
  i866.m_ElementType = i867[0]
  i866.m_Unicode = i867[1]
  i866.m_GlyphIndex = i867[2]
  i866.m_Scale = i867[3]
  return i866
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i872 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i873 = data
  i872.Name = i873[0]
  i872.PointSize = i873[1]
  i872.Scale = i873[2]
  i872.CharacterCount = i873[3]
  i872.LineHeight = i873[4]
  i872.Baseline = i873[5]
  i872.Ascender = i873[6]
  i872.CapHeight = i873[7]
  i872.Descender = i873[8]
  i872.CenterLine = i873[9]
  i872.SuperscriptOffset = i873[10]
  i872.SubscriptOffset = i873[11]
  i872.SubSize = i873[12]
  i872.Underline = i873[13]
  i872.UnderlineThickness = i873[14]
  i872.strikethrough = i873[15]
  i872.strikethroughThickness = i873[16]
  i872.TabWidth = i873[17]
  i872.Padding = i873[18]
  i872.AtlasWidth = i873[19]
  i872.AtlasHeight = i873[20]
  return i872
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i876 = root || request.c( 'TMPro.TMP_Glyph' )
  var i877 = data
  i876.id = i877[0]
  i876.x = i877[1]
  i876.y = i877[2]
  i876.width = i877[3]
  i876.height = i877[4]
  i876.xOffset = i877[5]
  i876.yOffset = i877[6]
  i876.xAdvance = i877[7]
  i876.scale = i877[8]
  return i876
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.KerningTable' )
  var i879 = data
  var i881 = i879[0]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('TMPro.KerningPair', i881[i + 0]));
  }
  i878.kerningPairs = i880
  return i878
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.KerningPair' )
  var i885 = data
  i884.xOffset = i885[0]
  i884.m_FirstGlyph = i885[1]
  i884.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i885[2], i884.m_FirstGlyphAdjustments)
  i884.m_SecondGlyph = i885[3]
  i884.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i885[4], i884.m_SecondGlyphAdjustments)
  i884.m_IgnoreSpacingAdjustments = !!i885[5]
  return i884
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i886 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i887 = data
  var i889 = i887[0]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i889[i + 0]));
  }
  i886.m_GlyphPairAdjustmentRecords = i888
  return i886
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i892 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i893 = data
  i892.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i893[0], i892.m_FirstAdjustmentRecord)
  i892.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i893[1], i892.m_SecondAdjustmentRecord)
  i892.m_FeatureLookupFlags = i893[2]
  return i892
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i896 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i897 = data
  i896.sourceFontFileName = i897[0]
  i896.sourceFontFileGUID = i897[1]
  i896.pointSizeSamplingMode = i897[2]
  i896.pointSize = i897[3]
  i896.padding = i897[4]
  i896.packingMode = i897[5]
  i896.atlasWidth = i897[6]
  i896.atlasHeight = i897[7]
  i896.characterSetSelectionMode = i897[8]
  i896.characterSequence = i897[9]
  i896.referencedFontAssetGUID = i897[10]
  i896.referencedTextAssetGUID = i897[11]
  i896.fontStyle = i897[12]
  i896.fontStyleModifier = i897[13]
  i896.renderMode = i897[14]
  i896.includeFontFeatures = !!i897[15]
  return i896
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i900 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'regularTypeface')
  request.r(i901[2], i901[3], 0, i900, 'italicTypeface')
  return i900
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i902 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i903 = data
  var i905 = i903[0]
  var i904 = []
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 2, i904, '')
  }
  i902.atlasAssets = i904
  i902.scale = i903[1]
  request.r(i903[2], i903[3], 0, i902, 'skeletonJSON')
  i902.isUpgradingBlendModeMaterials = !!i903[4]
  i902.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i903[5], i902.blendModeMaterials)
  var i907 = i903[6]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 1, i906, '')
  }
  i902.skeletonDataModifiers = i906
  var i909 = i903[7]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( i909[i + 0] );
  }
  i902.fromAnimation = i908
  var i911 = i903[8]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( i911[i + 0] );
  }
  i902.toAnimation = i910
  i902.duration = i903[9]
  i902.defaultMix = i903[10]
  request.r(i903[11], i903[12], 0, i902, 'controller')
  return i902
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i914 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i915 = data
  i914.applyAdditiveMaterial = !!i915[0]
  var i917 = i915[1]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i917.length; i += 1) {
    i916.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i917[i + 0]));
  }
  i914.additiveMaterials = i916
  var i919 = i915[2]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i919.length; i += 1) {
    i918.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i919[i + 0]));
  }
  i914.multiplyMaterials = i918
  var i921 = i915[3]
  var i920 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i921.length; i += 1) {
    i920.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i921[i + 0]));
  }
  i914.screenMaterials = i920
  i914.requiresBlendModeMaterials = !!i915[4]
  return i914
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i924 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i925 = data
  i924.pageName = i925[0]
  request.r(i925[1], i925[2], 0, i924, 'material')
  return i924
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i928 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'atlasFile')
  var i931 = i929[2]
  var i930 = []
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 2, i930, '')
  }
  i928.materials = i930
  i928.textureLoadingMode = i929[3]
  request.r(i929[4], i929[5], 0, i928, 'onDemandTextureLoader')
  return i928
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i932 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i933 = data
  i932.useSafeMode = !!i933[0]
  i932.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i933[1], i932.safeModeOptions)
  i932.timeScale = i933[2]
  i932.unscaledTimeScale = i933[3]
  i932.useSmoothDeltaTime = !!i933[4]
  i932.maxSmoothUnscaledTime = i933[5]
  i932.rewindCallbackMode = i933[6]
  i932.showUnityEditorReport = !!i933[7]
  i932.logBehaviour = i933[8]
  i932.drawGizmos = !!i933[9]
  i932.defaultRecyclable = !!i933[10]
  i932.defaultAutoPlay = i933[11]
  i932.defaultUpdateType = i933[12]
  i932.defaultTimeScaleIndependent = !!i933[13]
  i932.defaultEaseType = i933[14]
  i932.defaultEaseOvershootOrAmplitude = i933[15]
  i932.defaultEasePeriod = i933[16]
  i932.defaultAutoKill = !!i933[17]
  i932.defaultLoopType = i933[18]
  i932.debugMode = !!i933[19]
  i932.debugStoreTargetId = !!i933[20]
  i932.showPreviewPanel = !!i933[21]
  i932.storeSettingsLocation = i933[22]
  i932.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i933[23], i932.modules)
  i932.createASMDEF = !!i933[24]
  i932.showPlayingTweens = !!i933[25]
  i932.showPausedTweens = !!i933[26]
  return i932
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i934 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i935 = data
  i934.logBehaviour = i935[0]
  i934.nestedTweenFailureBehaviour = i935[1]
  return i934
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i936 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i937 = data
  i936.showPanel = !!i937[0]
  i936.audioEnabled = !!i937[1]
  i936.physicsEnabled = !!i937[2]
  i936.physics2DEnabled = !!i937[3]
  i936.spriteEnabled = !!i937[4]
  i936.uiEnabled = !!i937[5]
  i936.textMeshProEnabled = !!i937[6]
  i936.tk2DEnabled = !!i937[7]
  i936.deAudioEnabled = !!i937[8]
  i936.deUnityExtendedEnabled = !!i937[9]
  i936.epoOutlineEnabled = !!i937[10]
  return i936
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.TMP_Settings' )
  var i939 = data
  i938.m_enableWordWrapping = !!i939[0]
  i938.m_enableKerning = !!i939[1]
  i938.m_enableExtraPadding = !!i939[2]
  i938.m_enableTintAllSprites = !!i939[3]
  i938.m_enableParseEscapeCharacters = !!i939[4]
  i938.m_EnableRaycastTarget = !!i939[5]
  i938.m_GetFontFeaturesAtRuntime = !!i939[6]
  i938.m_missingGlyphCharacter = i939[7]
  i938.m_warningsDisabled = !!i939[8]
  request.r(i939[9], i939[10], 0, i938, 'm_defaultFontAsset')
  i938.m_defaultFontAssetPath = i939[11]
  i938.m_defaultFontSize = i939[12]
  i938.m_defaultAutoSizeMinRatio = i939[13]
  i938.m_defaultAutoSizeMaxRatio = i939[14]
  i938.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i939[15], i939[16] )
  i938.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i939[17], i939[18] )
  i938.m_autoSizeTextContainer = !!i939[19]
  i938.m_IsTextObjectScaleStatic = !!i939[20]
  var i941 = i939[21]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 1, i940, '')
  }
  i938.m_fallbackFontAssets = i940
  i938.m_matchMaterialPreset = !!i939[22]
  request.r(i939[23], i939[24], 0, i938, 'm_defaultSpriteAsset')
  i938.m_defaultSpriteAssetPath = i939[25]
  i938.m_enableEmojiSupport = !!i939[26]
  i938.m_MissingCharacterSpriteUnicode = i939[27]
  i938.m_defaultColorGradientPresetsPath = i939[28]
  request.r(i939[29], i939[30], 0, i938, 'm_defaultStyleSheet')
  i938.m_StyleSheetsResourcePath = i939[31]
  request.r(i939[32], i939[33], 0, i938, 'm_leadingCharacters')
  request.r(i939[34], i939[35], 0, i938, 'm_followingCharacters')
  i938.m_UseModernHangulLineBreakingRules = !!i939[36]
  return i938
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i943 = data
  i942.m_GlyphIndex = i943[0]
  i942.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i943[1], i942.m_GlyphValueRecord)
  return i942
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i944 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i945 = data
  i944.m_XPlacement = i945[0]
  i944.m_YPlacement = i945[1]
  i944.m_XAdvance = i945[2]
  i944.m_YAdvance = i945[3]
  return i944
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'spriteSheet')
  var i949 = i947[2]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i949.length; i += 1) {
    i948.add(request.d('TMPro.TMP_Sprite', i949[i + 0]));
  }
  i946.spriteInfoList = i948
  var i951 = i947[3]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 1, i950, '')
  }
  i946.fallbackSpriteAssets = i950
  i946.hashCode = i947[4]
  request.r(i947[5], i947[6], 0, i946, 'material')
  i946.materialHashCode = i947[7]
  i946.m_Version = i947[8]
  i946.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i947[9], i946.m_FaceInfo)
  var i953 = i947[10]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('TMPro.TMP_SpriteCharacter', i953[i + 0]));
  }
  i946.m_SpriteCharacterTable = i952
  var i955 = i947[11]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i955.length; i += 1) {
    i954.add(request.d('TMPro.TMP_SpriteGlyph', i955[i + 0]));
  }
  i946.m_SpriteGlyphTable = i954
  return i946
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.TMP_Sprite' )
  var i959 = data
  i958.name = i959[0]
  i958.hashCode = i959[1]
  i958.unicode = i959[2]
  i958.pivot = new pc.Vec2( i959[3], i959[4] )
  request.r(i959[5], i959[6], 0, i958, 'sprite')
  i958.id = i959[7]
  i958.x = i959[8]
  i958.y = i959[9]
  i958.width = i959[10]
  i958.height = i959[11]
  i958.xOffset = i959[12]
  i958.yOffset = i959[13]
  i958.xAdvance = i959[14]
  i958.scale = i959[15]
  return i958
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i965 = data
  i964.m_Name = i965[0]
  i964.m_HashCode = i965[1]
  i964.m_ElementType = i965[2]
  i964.m_Unicode = i965[3]
  i964.m_GlyphIndex = i965[4]
  i964.m_Scale = i965[5]
  return i964
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'sprite')
  i968.m_Index = i969[2]
  i968.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i969[3], i968.m_Metrics)
  i968.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i969[4], i968.m_GlyphRect)
  i968.m_Scale = i969[5]
  i968.m_AtlasIndex = i969[6]
  i968.m_ClassDefinitionType = i969[7]
  return i968
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i971 = data
  var i973 = i971[0]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i973.length; i += 1) {
    i972.add(request.d('TMPro.TMP_Style', i973[i + 0]));
  }
  i970.m_StyleList = i972
  return i970
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i976 = root || request.c( 'TMPro.TMP_Style' )
  var i977 = data
  i976.m_Name = i977[0]
  i976.m_HashCode = i977[1]
  i976.m_OpeningDefinition = i977[2]
  i976.m_ClosingDefinition = i977[3]
  i976.m_OpeningTagArray = i977[4]
  i976.m_ClosingTagArray = i977[5]
  i976.m_OpeningTagUnicodeArray = i977[6]
  i976.m_ClosingTagUnicodeArray = i977[7]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i979 = data
  var i981 = i979[0]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i981[i + 0]) );
  }
  i978.files = i980
  i978.componentToPrefabIds = i979[1]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i985 = data
  i984.path = i985[0]
  request.r(i985[1], i985[2], 0, i984, 'unityObject')
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i987 = data
  var i989 = i987[0]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i989[i + 0]) );
  }
  i986.scriptsExecutionOrder = i988
  var i991 = i987[1]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i991[i + 0]) );
  }
  i986.sortingLayers = i990
  var i993 = i987[2]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i993[i + 0]) );
  }
  i986.cullingLayers = i992
  i986.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i987[3], i986.timeSettings)
  i986.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i987[4], i986.physicsSettings)
  i986.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i987[5], i986.physics2DSettings)
  i986.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i987[6], i986.qualitySettings)
  i986.enableRealtimeShadows = !!i987[7]
  i986.enableAutoInstancing = !!i987[8]
  i986.enableStaticBatching = !!i987[9]
  i986.enableDynamicBatching = !!i987[10]
  i986.usePreservativeDynamicBatching = !!i987[11]
  i986.lightmapEncodingQuality = i987[12]
  i986.desiredColorSpace = i987[13]
  var i995 = i987[14]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( i995[i + 0] );
  }
  i986.allTags = i994
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i999 = data
  i998.name = i999[0]
  i998.value = i999[1]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1003 = data
  i1002.id = i1003[0]
  i1002.name = i1003[1]
  i1002.value = i1003[2]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1007 = data
  i1006.id = i1007[0]
  i1006.name = i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1009 = data
  i1008.fixedDeltaTime = i1009[0]
  i1008.maximumDeltaTime = i1009[1]
  i1008.timeScale = i1009[2]
  i1008.maximumParticleTimestep = i1009[3]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1011 = data
  i1010.gravity = new pc.Vec3( i1011[0], i1011[1], i1011[2] )
  i1010.defaultSolverIterations = i1011[3]
  i1010.bounceThreshold = i1011[4]
  i1010.autoSyncTransforms = !!i1011[5]
  i1010.autoSimulation = !!i1011[6]
  var i1013 = i1011[7]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1013[i + 0]) );
  }
  i1010.collisionMatrix = i1012
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1017 = data
  i1016.enabled = !!i1017[0]
  i1016.layerId = i1017[1]
  i1016.otherLayerId = i1017[2]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'material')
  i1018.gravity = new pc.Vec2( i1019[2], i1019[3] )
  i1018.positionIterations = i1019[4]
  i1018.velocityIterations = i1019[5]
  i1018.velocityThreshold = i1019[6]
  i1018.maxLinearCorrection = i1019[7]
  i1018.maxAngularCorrection = i1019[8]
  i1018.maxTranslationSpeed = i1019[9]
  i1018.maxRotationSpeed = i1019[10]
  i1018.baumgarteScale = i1019[11]
  i1018.baumgarteTOIScale = i1019[12]
  i1018.timeToSleep = i1019[13]
  i1018.linearSleepTolerance = i1019[14]
  i1018.angularSleepTolerance = i1019[15]
  i1018.defaultContactOffset = i1019[16]
  i1018.autoSimulation = !!i1019[17]
  i1018.queriesHitTriggers = !!i1019[18]
  i1018.queriesStartInColliders = !!i1019[19]
  i1018.callbacksOnDisable = !!i1019[20]
  i1018.reuseCollisionCallbacks = !!i1019[21]
  i1018.autoSyncTransforms = !!i1019[22]
  var i1021 = i1019[23]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1021[i + 0]) );
  }
  i1018.collisionMatrix = i1020
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1025 = data
  i1024.enabled = !!i1025[0]
  i1024.layerId = i1025[1]
  i1024.otherLayerId = i1025[2]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1029[i + 0]) );
  }
  i1026.qualityLevels = i1028
  var i1031 = i1027[1]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1026.names = i1030
  i1026.shadows = i1027[2]
  i1026.anisotropicFiltering = i1027[3]
  i1026.antiAliasing = i1027[4]
  i1026.lodBias = i1027[5]
  i1026.shadowCascades = i1027[6]
  i1026.shadowDistance = i1027[7]
  i1026.shadowmaskMode = i1027[8]
  i1026.shadowProjection = i1027[9]
  i1026.shadowResolution = i1027[10]
  i1026.softParticles = !!i1027[11]
  i1026.softVegetation = !!i1027[12]
  i1026.activeColorSpace = i1027[13]
  i1026.desiredColorSpace = i1027[14]
  i1026.masterTextureLimit = i1027[15]
  i1026.maxQueuedFrames = i1027[16]
  i1026.particleRaycastBudget = i1027[17]
  i1026.pixelLightCount = i1027[18]
  i1026.realtimeReflectionProbes = !!i1027[19]
  i1026.shadowCascade2Split = i1027[20]
  i1026.shadowCascade4Split = new pc.Vec3( i1027[21], i1027[22], i1027[23] )
  i1026.streamingMipmapsActive = !!i1027[24]
  i1026.vSyncCount = i1027[25]
  i1026.asyncUploadBufferSize = i1027[26]
  i1026.asyncUploadTimeSlice = i1027[27]
  i1026.billboardsFaceCameraPosition = !!i1027[28]
  i1026.shadowNearPlaneOffset = i1027[29]
  i1026.streamingMipmapsMemoryBudget = i1027[30]
  i1026.maximumLODLevel = i1027[31]
  i1026.streamingMipmapsAddAllCameras = !!i1027[32]
  i1026.streamingMipmapsMaxLevelReduction = i1027[33]
  i1026.streamingMipmapsRenderersPerFrame = i1027[34]
  i1026.resolutionScalingFixedDPIFactor = i1027[35]
  i1026.streamingMipmapsMaxFileIORequests = i1027[36]
  i1026.currentQualityLevel = i1027[37]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1037 = data
  i1036.weight = i1037[0]
  i1036.vertices = i1037[1]
  i1036.normals = i1037[2]
  i1036.tangents = i1037[3]
  return i1036
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1039 = data
  i1038.xPlacement = i1039[0]
  i1038.yPlacement = i1039[1]
  i1038.xAdvance = i1039[2]
  i1038.yAdvance = i1039[3]
  return i1038
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[2],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[2],"80":[35],"81":[82],"83":[82],"10":[9],"39":[21],"5":[2],"84":[32],"13":[11],"85":[32],"33":[32],"34":[32],"86":[87],"88":[31],"89":[87],"90":[9],"91":[9],"12":[10],"16":[20,9],"92":[9],"11":[10],"93":[9],"94":[9],"95":[9],"96":[9],"97":[9],"98":[9],"99":[9],"25":[9],"100":[9],"101":[20,9],"102":[9],"103":[9],"104":[9],"105":[9],"106":[20,9],"107":[9],"108":[7],"109":[7],"8":[7],"110":[7],"111":[2],"112":[2],"113":[114],"115":[2],"116":[117],"118":[9],"119":[20,9],"29":[35],"120":[20,9],"121":[122,35],"123":[35],"124":[35,37],"125":[58],"126":[66],"127":[117],"128":[129],"130":[9],"131":[35,9],"17":[9,20],"132":[9],"133":[20,9],"134":[35],"135":[20,9],"136":[9],"137":[87]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAutoSize","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ResponsiveCanvasScaler","Playable.GameManager","UnityEngine.AudioClip","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.UI.Mask","DG.Tweening.DOTweenAnimation","Playable.AudioManager","Playable.GameController","Spine.Unity.SkeletonAnimation","UnityEngine.SpriteMask","UnityEngine.SpriteRenderer","UnityEngine.BoxCollider2D","Playable.ItemLevel37","Playable.TargetLevel37","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","UnityEngine.MeshFilter","UnityEngine.Mesh","SpineEventSoundPlayer","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Item","Target","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "08/04/2026 10:21:04";

Deserializers.lunaDaysRunning = "4.8";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BM_V33_NgocBTU_HuyNQ";

Deserializers.lunaAppID = "39964";

Deserializers.projectId = "e0c7d7b99f381904ba55b26de53e9500";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1869";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5233";

Deserializers.runtimeAnalysisExcludedModules = "particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Minecraft-Clone";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "8f1d8bac-839d-4da3-af81-56e6126b6521";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

