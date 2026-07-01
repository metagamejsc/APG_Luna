var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointSpring' )
  var i523 = data
  i522.spring = i523[0]
  i522.damper = i523[1]
  i522.targetPosition = i523[2]
  return i522
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointMotor' )
  var i525 = data
  i524.m_TargetVelocity = i525[0]
  i524.m_Force = i525[1]
  i524.m_FreeSpin = i525[2]
  return i524
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.JointLimits' )
  var i527 = data
  i526.m_Min = i527[0]
  i526.m_Max = i527[1]
  i526.m_Bounciness = i527[2]
  i526.m_BounceMinVelocity = i527[3]
  i526.m_ContactDistance = i527[4]
  i526.minBounce = i527[5]
  i526.maxBounce = i527[6]
  return i526
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointDrive' )
  var i529 = data
  i528.m_PositionSpring = i529[0]
  i528.m_PositionDamper = i529[1]
  i528.m_MaximumForce = i529[2]
  i528.m_UseAcceleration = i529[3]
  return i528
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i531 = data
  i530.m_Spring = i531[0]
  i530.m_Damper = i531[1]
  return i530
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i533 = data
  i532.m_Limit = i533[0]
  i532.m_Bounciness = i533[1]
  i532.m_ContactDistance = i533[2]
  return i532
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i535 = data
  i534.m_ExtremumSlip = i535[0]
  i534.m_ExtremumValue = i535[1]
  i534.m_AsymptoteSlip = i535[2]
  i534.m_AsymptoteValue = i535[3]
  i534.m_Stiffness = i535[4]
  return i534
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i537 = data
  i536.m_LowerAngle = i537[0]
  i536.m_UpperAngle = i537[1]
  return i536
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i539 = data
  i538.m_MotorSpeed = i539[0]
  i538.m_MaximumMotorTorque = i539[1]
  return i538
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i541 = data
  i540.m_DampingRatio = i541[0]
  i540.m_Frequency = i541[1]
  i540.m_Angle = i541[2]
  return i540
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i543 = data
  i542.m_LowerTranslation = i543[0]
  i542.m_UpperTranslation = i543[1]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i545 = data
  i544.name = i545[0]
  i544.width = i545[1]
  i544.height = i545[2]
  i544.mipmapCount = i545[3]
  i544.anisoLevel = i545[4]
  i544.filterMode = i545[5]
  i544.hdr = !!i545[6]
  i544.format = i545[7]
  i544.wrapMode = i545[8]
  i544.alphaIsTransparency = !!i545[9]
  i544.alphaSource = i545[10]
  i544.graphicsFormat = i545[11]
  i544.sRGBTexture = !!i545[12]
  i544.desiredColorSpace = i545[13]
  i544.wrapU = i545[14]
  i544.wrapV = i545[15]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i546 = root || new pc.UnityMaterial()
  var i547 = data
  i546.name = i547[0]
  request.r(i547[1], i547[2], 0, i546, 'shader')
  i546.renderQueue = i547[3]
  i546.enableInstancing = !!i547[4]
  var i549 = i547[5]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i549[i + 0]) );
  }
  i546.floatParameters = i548
  var i551 = i547[6]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i551[i + 0]) );
  }
  i546.colorParameters = i550
  var i553 = i547[7]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i553[i + 0]) );
  }
  i546.vectorParameters = i552
  var i555 = i547[8]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i555[i + 0]) );
  }
  i546.textureParameters = i554
  var i557 = i547[9]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i557[i + 0]) );
  }
  i546.materialFlags = i556
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i561 = data
  i560.name = i561[0]
  i560.value = i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i565 = data
  i564.name = i565[0]
  i564.value = new pc.Color(i565[1], i565[2], i565[3], i565[4])
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i569 = data
  i568.name = i569[0]
  i568.value = new pc.Vec4( i569[1], i569[2], i569[3], i569[4] )
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i573 = data
  i572.name = i573[0]
  request.r(i573[1], i573[2], 0, i572, 'value')
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i577 = data
  i576.name = i577[0]
  i576.enabled = !!i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i579 = data
  i578.name = i579[0]
  i578.halfPrecision = !!i579[1]
  i578.useUInt32IndexFormat = !!i579[2]
  i578.vertexCount = i579[3]
  i578.aabb = i579[4]
  var i581 = i579[5]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( !!i581[i + 0] );
  }
  i578.streams = i580
  i578.vertices = i579[6]
  var i583 = i579[7]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i583[i + 0]) );
  }
  i578.subMeshes = i582
  var i585 = i579[8]
  var i584 = []
  for(var i = 0; i < i585.length; i += 16) {
    i584.push( new pc.Mat4().setData(i585[i + 0], i585[i + 1], i585[i + 2], i585[i + 3],  i585[i + 4], i585[i + 5], i585[i + 6], i585[i + 7],  i585[i + 8], i585[i + 9], i585[i + 10], i585[i + 11],  i585[i + 12], i585[i + 13], i585[i + 14], i585[i + 15]) );
  }
  i578.bindposes = i584
  var i587 = i579[9]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i587[i + 0]) );
  }
  i578.blendShapes = i586
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i593 = data
  i592.triangles = i593[0]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i599 = data
  i598.name = i599[0]
  var i601 = i599[1]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i601[i + 0]) );
  }
  i598.frames = i600
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i603 = data
  i602.name = i603[0]
  i602.index = i603[1]
  i602.startup = !!i603[2]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i605 = data
  i604.position = new pc.Vec3( i605[0], i605[1], i605[2] )
  i604.scale = new pc.Vec3( i605[3], i605[4], i605[5] )
  i604.rotation = new pc.Quat(i605[6], i605[7], i605[8], i605[9])
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i607 = data
  i606.aspect = i607[0]
  i606.orthographic = !!i607[1]
  i606.orthographicSize = i607[2]
  i606.backgroundColor = new pc.Color(i607[3], i607[4], i607[5], i607[6])
  i606.nearClipPlane = i607[7]
  i606.farClipPlane = i607[8]
  i606.fieldOfView = i607[9]
  i606.depth = i607[10]
  i606.clearFlags = i607[11]
  i606.cullingMask = i607[12]
  i606.rect = i607[13]
  request.r(i607[14], i607[15], 0, i606, 'targetTexture')
  i606.usePhysicalProperties = !!i607[16]
  i606.focalLength = i607[17]
  i606.sensorSize = new pc.Vec2( i607[18], i607[19] )
  i606.lensShift = new pc.Vec2( i607[20], i607[21] )
  i606.gateFit = i607[22]
  i606.commandBufferCount = i607[23]
  i606.cameraType = i607[24]
  i606.enabled = !!i607[25]
  return i606
}

Deserializers["CameraAutoSize"] = function (request, data, root) {
  var i608 = root || request.c( 'CameraAutoSize' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'targetCamera')
  i608.referenceResolution = new pc.Vec2( i609[2], i609[3] )
  i608.referenceOrthographicSize = i609[4]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i611 = data
  i610.name = i611[0]
  i610.tagId = i611[1]
  i610.enabled = !!i611[2]
  i610.isStatic = !!i611[3]
  i610.layer = i611[4]
  return i610
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'm_FirstSelected')
  i612.m_sendNavigationEvents = !!i613[2]
  i612.m_DragThreshold = i613[3]
  return i612
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i615 = data
  i614.m_HorizontalAxis = i615[0]
  i614.m_VerticalAxis = i615[1]
  i614.m_SubmitButton = i615[2]
  i614.m_CancelButton = i615[3]
  i614.m_InputActionsPerSecond = i615[4]
  i614.m_RepeatDelay = i615[5]
  i614.m_ForceModuleActive = !!i615[6]
  i614.m_SendPointerHoverToParent = !!i615[7]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i617 = data
  i616.pivot = new pc.Vec2( i617[0], i617[1] )
  i616.anchorMin = new pc.Vec2( i617[2], i617[3] )
  i616.anchorMax = new pc.Vec2( i617[4], i617[5] )
  i616.sizeDelta = new pc.Vec2( i617[6], i617[7] )
  i616.anchoredPosition3D = new pc.Vec3( i617[8], i617[9], i617[10] )
  i616.rotation = new pc.Quat(i617[11], i617[12], i617[13], i617[14])
  i616.scale = new pc.Vec3( i617[15], i617[16], i617[17] )
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i619 = data
  i618.planeDistance = i619[0]
  i618.referencePixelsPerUnit = i619[1]
  i618.isFallbackOverlay = !!i619[2]
  i618.renderMode = i619[3]
  i618.renderOrder = i619[4]
  i618.sortingLayerName = i619[5]
  i618.sortingOrder = i619[6]
  i618.scaleFactor = i619[7]
  request.r(i619[8], i619[9], 0, i618, 'worldCamera')
  i618.overrideSorting = !!i619[10]
  i618.pixelPerfect = !!i619[11]
  i618.targetDisplay = i619[12]
  i618.overridePixelPerfect = !!i619[13]
  i618.enabled = !!i619[14]
  return i618
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i621 = data
  i620.m_UiScaleMode = i621[0]
  i620.m_ReferencePixelsPerUnit = i621[1]
  i620.m_ScaleFactor = i621[2]
  i620.m_ReferenceResolution = new pc.Vec2( i621[3], i621[4] )
  i620.m_ScreenMatchMode = i621[5]
  i620.m_MatchWidthOrHeight = i621[6]
  i620.m_PhysicalUnit = i621[7]
  i620.m_FallbackScreenDPI = i621[8]
  i620.m_DefaultSpriteDPI = i621[9]
  i620.m_DynamicPixelsPerUnit = i621[10]
  i620.m_PresetInfoIsWorld = !!i621[11]
  return i620
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i623 = data
  i622.m_IgnoreReversedGraphics = !!i623[0]
  i622.m_BlockingObjects = i623[1]
  i622.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i623[2] )
  return i622
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i624 = root || request.c( 'LunaManager' )
  var i625 = data
  var i627 = i625[0]
  var i626 = []
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 2, i626, '')
  }
  i624.lstBtnInstall = i626
  request.r(i625[1], i625[2], 0, i624, 'WinGO')
  request.r(i625[3], i625[4], 0, i624, 'LoseGO')
  request.r(i625[5], i625[6], 0, i624, 'StartCard')
  request.r(i625[7], i625[8], 0, i624, 'EndCard')
  request.r(i625[9], i625[10], 0, i624, 'Parent')
  i624.isDrag = !!i625[11]
  i624.isCreative = !!i625[12]
  i624.timeDrag = i625[13]
  request.r(i625[14], i625[15], 0, i624, 'skeGhost')
  i624.countPlay = i625[16]
  i624.countPlayFinal = i625[17]
  i624.countPlayMax = i625[18]
  i624.timeDropFinal = i625[19]
  i624.colorBG = new pc.Color(i625[20], i625[21], i625[22], i625[23])
  request.r(i625[24], i625[25], 0, i624, 'texture2D')
  request.r(i625[26], i625[27], 0, i624, 'rawImageBG')
  request.r(i625[28], i625[29], 0, i624, 'textProgess')
  request.r(i625[30], i625[31], 0, i624, 'imgProgess')
  request.r(i625[32], i625[33], 0, i624, 'timeText')
  return i624
}

Deserializers["ResponsiveCanvasScaler"] = function (request, data, root) {
  var i630 = root || request.c( 'ResponsiveCanvasScaler' )
  var i631 = data
  i630._referenceResolution = new pc.Vec2( i631[0], i631[1] )
  i630._portraitMatch = i631[2]
  i630._landscapeMatch = i631[3]
  i630._squareMatch = i631[4]
  i630._portraitAspectThreshold = i631[5]
  i630._landscapeAspectThreshold = i631[6]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i633 = data
  i632.cullTransparentMesh = !!i633[0]
  return i632
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'm_Texture')
  i634.m_UVRect = UnityEngine.Rect.MinMaxRect(i635[2], i635[3], i635[4], i635[5])
  i634.m_Maskable = !!i635[6]
  request.r(i635[7], i635[8], 0, i634, 'm_Material')
  i634.m_Color = new pc.Color(i635[9], i635[10], i635[11], i635[12])
  i634.m_RaycastTarget = !!i635[13]
  i634.m_RaycastPadding = new pc.Vec4( i635[14], i635[15], i635[16], i635[17] )
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'clip')
  request.r(i637[2], i637[3], 0, i636, 'outputAudioMixerGroup')
  i636.playOnAwake = !!i637[4]
  i636.loop = !!i637[5]
  i636.time = i637[6]
  i636.volume = i637[7]
  i636.pitch = i637[8]
  i636.enabled = !!i637[9]
  return i636
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

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.Image' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'm_Sprite')
  i648.m_Type = i649[2]
  i648.m_PreserveAspect = !!i649[3]
  i648.m_FillCenter = !!i649[4]
  i648.m_FillMethod = i649[5]
  i648.m_FillAmount = i649[6]
  i648.m_FillClockwise = !!i649[7]
  i648.m_FillOrigin = i649[8]
  i648.m_UseSpriteMesh = !!i649[9]
  i648.m_PixelsPerUnitMultiplier = i649[10]
  i648.m_Maskable = !!i649[11]
  request.r(i649[12], i649[13], 0, i648, 'm_Material')
  i648.m_Color = new pc.Color(i649[14], i649[15], i649[16], i649[17])
  i648.m_RaycastTarget = !!i649[18]
  i648.m_RaycastPadding = new pc.Vec4( i649[19], i649[20], i649[21], i649[22] )
  return i648
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.Button' )
  var i651 = data
  i650.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i651[0], i650.m_OnClick)
  i650.m_Navigation = request.d('UnityEngine.UI.Navigation', i651[1], i650.m_Navigation)
  i650.m_Transition = i651[2]
  i650.m_Colors = request.d('UnityEngine.UI.ColorBlock', i651[3], i650.m_Colors)
  i650.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i651[4], i650.m_SpriteState)
  i650.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i651[5], i650.m_AnimationTriggers)
  i650.m_Interactable = !!i651[6]
  request.r(i651[7], i651[8], 0, i650, 'm_TargetGraphic')
  return i650
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i653 = data
  i652.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i653[0], i652.m_PersistentCalls)
  return i652
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i655 = data
  var i657 = i655[0]
  var i656 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i657.length; i += 1) {
    i656.add(request.d('UnityEngine.Events.PersistentCall', i657[i + 0]));
  }
  i654.m_Calls = i656
  return i654
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'm_Target')
  i660.m_TargetAssemblyTypeName = i661[2]
  i660.m_MethodName = i661[3]
  i660.m_Mode = i661[4]
  i660.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i661[5], i660.m_Arguments)
  i660.m_CallState = i661[6]
  return i660
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'm_ObjectArgument')
  i662.m_ObjectArgumentAssemblyTypeName = i663[2]
  i662.m_IntArgument = i663[3]
  i662.m_FloatArgument = i663[4]
  i662.m_StringArgument = i663[5]
  i662.m_BoolArgument = !!i663[6]
  return i662
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i665 = data
  i664.m_Mode = i665[0]
  i664.m_WrapAround = !!i665[1]
  request.r(i665[2], i665[3], 0, i664, 'm_SelectOnUp')
  request.r(i665[4], i665[5], 0, i664, 'm_SelectOnDown')
  request.r(i665[6], i665[7], 0, i664, 'm_SelectOnLeft')
  request.r(i665[8], i665[9], 0, i664, 'm_SelectOnRight')
  return i664
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i667 = data
  i666.m_NormalColor = new pc.Color(i667[0], i667[1], i667[2], i667[3])
  i666.m_HighlightedColor = new pc.Color(i667[4], i667[5], i667[6], i667[7])
  i666.m_PressedColor = new pc.Color(i667[8], i667[9], i667[10], i667[11])
  i666.m_SelectedColor = new pc.Color(i667[12], i667[13], i667[14], i667[15])
  i666.m_DisabledColor = new pc.Color(i667[16], i667[17], i667[18], i667[19])
  i666.m_ColorMultiplier = i667[20]
  i666.m_FadeDuration = i667[21]
  return i666
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'm_HighlightedSprite')
  request.r(i669[2], i669[3], 0, i668, 'm_PressedSprite')
  request.r(i669[4], i669[5], 0, i668, 'm_SelectedSprite')
  request.r(i669[6], i669[7], 0, i668, 'm_DisabledSprite')
  return i668
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i671 = data
  i670.m_NormalTrigger = i671[0]
  i670.m_HighlightedTrigger = i671[1]
  i670.m_PressedTrigger = i671[2]
  i670.m_SelectedTrigger = i671[3]
  i670.m_DisabledTrigger = i671[4]
  return i670
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i672 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i673 = data
  i672.targetIsSelf = !!i673[0]
  request.r(i673[1], i673[2], 0, i672, 'targetGO')
  i672.tweenTargetIsTargetGO = !!i673[3]
  i672.delay = i673[4]
  i672.duration = i673[5]
  i672.easeType = i673[6]
  i672.easeCurve = new pc.AnimationCurve( { keys_flow: i673[7] } )
  i672.loopType = i673[8]
  i672.loops = i673[9]
  i672.id = i673[10]
  i672.isRelative = !!i673[11]
  i672.isFrom = !!i673[12]
  i672.isIndependentUpdate = !!i673[13]
  i672.autoKill = !!i673[14]
  i672.autoGenerate = !!i673[15]
  i672.isActive = !!i673[16]
  i672.isValid = !!i673[17]
  request.r(i673[18], i673[19], 0, i672, 'target')
  i672.animationType = i673[20]
  i672.targetType = i673[21]
  i672.forcedTargetType = i673[22]
  i672.autoPlay = !!i673[23]
  i672.useTargetAsV3 = !!i673[24]
  i672.endValueFloat = i673[25]
  i672.endValueV3 = new pc.Vec3( i673[26], i673[27], i673[28] )
  i672.endValueV2 = new pc.Vec2( i673[29], i673[30] )
  i672.endValueColor = new pc.Color(i673[31], i673[32], i673[33], i673[34])
  i672.endValueString = i673[35]
  i672.endValueRect = UnityEngine.Rect.MinMaxRect(i673[36], i673[37], i673[38], i673[39])
  request.r(i673[40], i673[41], 0, i672, 'endValueTransform')
  i672.optionalBool0 = !!i673[42]
  i672.optionalBool1 = !!i673[43]
  i672.optionalFloat0 = i673[44]
  i672.optionalInt0 = i673[45]
  i672.optionalRotationMode = i673[46]
  i672.optionalScrambleMode = i673[47]
  i672.optionalShakeRandomnessMode = i673[48]
  i672.optionalString = i673[49]
  i672.updateType = i673[50]
  i672.isSpeedBased = !!i673[51]
  i672.hasOnStart = !!i673[52]
  i672.hasOnPlay = !!i673[53]
  i672.hasOnUpdate = !!i673[54]
  i672.hasOnStepComplete = !!i673[55]
  i672.hasOnComplete = !!i673[56]
  i672.hasOnTweenCreated = !!i673[57]
  i672.hasOnRewind = !!i673[58]
  i672.onStart = request.d('UnityEngine.Events.UnityEvent', i673[59], i672.onStart)
  i672.onPlay = request.d('UnityEngine.Events.UnityEvent', i673[60], i672.onPlay)
  i672.onUpdate = request.d('UnityEngine.Events.UnityEvent', i673[61], i672.onUpdate)
  i672.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i673[62], i672.onStepComplete)
  i672.onComplete = request.d('UnityEngine.Events.UnityEvent', i673[63], i672.onComplete)
  i672.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i673[64], i672.onTweenCreated)
  i672.onRewind = request.d('UnityEngine.Events.UnityEvent', i673[65], i672.onRewind)
  return i672
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i675 = data
  i674.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i675[0], i674.m_PersistentCalls)
  return i674
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i676 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'skeletonDataAsset')
  request.r(i677[2], i677[3], 0, i676, 'additiveMaterial')
  request.r(i677[4], i677[5], 0, i676, 'multiplyMaterial')
  request.r(i677[6], i677[7], 0, i676, 'screenMaterial')
  i676.forceAdditiveMaterial = !!i677[8]
  i676.initialSkinName = i677[9]
  i676.initialFlipX = !!i677[10]
  i676.initialFlipY = !!i677[11]
  i676.startingAnimation = i677[12]
  i676.startingLoop = !!i677[13]
  i676.timeScale = i677[14]
  i676.freeze = !!i677[15]
  i676.layoutScaleMode = i677[16]
  i676.updateWhenInvisible = i677[17]
  i676.allowMultipleCanvasRenderers = !!i677[18]
  var i679 = i677[19]
  var i678 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 1, i678, '')
  }
  i676.canvasRenderers = i678
  i676.enableSeparatorSlots = !!i677[20]
  i676.updateSeparatorPartLocation = !!i677[21]
  i676.updateSeparatorPartScale = !!i677[22]
  i676.disableMeshAssignmentOnOverride = !!i677[23]
  i676.m_SkeletonColor = new pc.Color(i677[24], i677[25], i677[26], i677[27])
  i676.referenceSize = new pc.Vec2( i677[28], i677[29] )
  i676.pivotOffset = new pc.Vec2( i677[30], i677[31] )
  i676.referenceScale = i677[32]
  i676.layoutScale = i677[33]
  i676.rectTransformSize = new pc.Vec2( i677[34], i677[35] )
  i676.editReferenceRect = !!i677[36]
  var i681 = i677[37]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( i681[i + 0] );
  }
  i676.separatorSlotNames = i680
  var i683 = i677[38]
  var i682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i683.length; i += 2) {
  request.r(i683[i + 0], i683[i + 1], 1, i682, '')
  }
  i676.separatorParts = i682
  i676.physicsPositionInheritanceFactor = new pc.Vec2( i677[39], i677[40] )
  i676.physicsRotationInheritanceFactor = i677[41]
  request.r(i677[42], i677[43], 0, i676, 'physicsMovementRelativeTo')
  i676.meshGenerator = request.d('Spine.Unity.MeshGenerator', i677[44], i676.meshGenerator)
  i676.updateTiming = i677[45]
  i676.unscaledTime = !!i677[46]
  i676.m_Maskable = !!i677[47]
  request.r(i677[48], i677[49], 0, i676, 'm_Material')
  i676.m_Color = new pc.Color(i677[50], i677[51], i677[52], i677[53])
  i676.m_RaycastTarget = !!i677[54]
  i676.m_RaycastPadding = new pc.Vec4( i677[55], i677[56], i677[57], i677[58] )
  return i676
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i690 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i691 = data
  i690.settings = request.d('Spine.Unity.MeshGenerator+Settings', i691[0], i690.settings)
  return i690
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i692 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i693 = data
  i692.useClipping = !!i693[0]
  i692.zSpacing = i693[1]
  i692.tintBlack = !!i693[2]
  i692.canvasGroupCompatible = !!i693[3]
  i692.pmaVertexColors = !!i693[4]
  i692.addNormals = !!i693[5]
  i692.calculateTangents = !!i693[6]
  i692.immutableTriangles = !!i693[7]
  return i692
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.UI.Mask' )
  var i695 = data
  i694.m_ShowMaskGraphic = !!i695[0]
  return i694
}

Deserializers["AudioController"] = function (request, data, root) {
  var i696 = root || request.c( 'AudioController' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'bgmSource')
  request.r(i697[2], i697[3], 0, i696, 'sfxSource')
  var i699 = i697[4]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('AudioEntry', i699[i + 0]) );
  }
  i696.audioEntries = i698
  return i696
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i702 = root || request.c( 'AudioEntry' )
  var i703 = data
  i702.key = i703[0]
  request.r(i703[1], i703[2], 0, i702, 'clip')
  i702.volume = i703[3]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i705 = data
  i704.usedByComposite = !!i705[0]
  i704.autoTiling = !!i705[1]
  i704.size = new pc.Vec2( i705[2], i705[3] )
  i704.edgeRadius = i705[4]
  i704.enabled = !!i705[5]
  i704.isTrigger = !!i705[6]
  i704.usedByEffector = !!i705[7]
  i704.density = i705[8]
  i704.offset = new pc.Vec2( i705[9], i705[10] )
  request.r(i705[11], i705[12], 0, i704, 'material')
  return i704
}

Deserializers["ItemMovement"] = function (request, data, root) {
  var i706 = root || request.c( 'ItemMovement' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'stackManager')
  i706.id = i707[2]
  i706._enableDebugLog = !!i707[3]
  request.r(i707[4], i707[5], 0, i706, '_targetItem')
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i709 = data
  i708.color = new pc.Color(i709[0], i709[1], i709[2], i709[3])
  request.r(i709[4], i709[5], 0, i708, 'sprite')
  i708.flipX = !!i709[6]
  i708.flipY = !!i709[7]
  i708.drawMode = i709[8]
  i708.size = new pc.Vec2( i709[9], i709[10] )
  i708.tileMode = i709[11]
  i708.adaptiveModeThreshold = i709[12]
  i708.maskInteraction = i709[13]
  i708.spriteSortPoint = i709[14]
  i708.enabled = !!i709[15]
  request.r(i709[16], i709[17], 0, i708, 'sharedMaterial')
  var i711 = i709[18]
  var i710 = []
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 2, i710, '')
  }
  i708.sharedMaterials = i710
  i708.receiveShadows = !!i709[19]
  i708.shadowCastingMode = i709[20]
  i708.sortingLayerID = i709[21]
  i708.sortingOrder = i709[22]
  i708.lightmapIndex = i709[23]
  i708.lightmapSceneIndex = i709[24]
  i708.lightmapScaleOffset = new pc.Vec4( i709[25], i709[26], i709[27], i709[28] )
  i708.lightProbeUsage = i709[29]
  i708.reflectionProbeUsage = i709[30]
  return i708
}

Deserializers["ItemStackManager"] = function (request, data, root) {
  var i712 = root || request.c( 'ItemStackManager' )
  var i713 = data
  var i715 = i713[0]
  var i714 = []
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 2, i714, '')
  }
  i712.items = i714
  i712._enableDebugLog = !!i713[1]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'additionalVertexStreams')
  i718.enabled = !!i719[2]
  request.r(i719[3], i719[4], 0, i718, 'sharedMaterial')
  var i721 = i719[5]
  var i720 = []
  for(var i = 0; i < i721.length; i += 2) {
  request.r(i721[i + 0], i721[i + 1], 2, i720, '')
  }
  i718.sharedMaterials = i720
  i718.receiveShadows = !!i719[6]
  i718.shadowCastingMode = i719[7]
  i718.sortingLayerID = i719[8]
  i718.sortingOrder = i719[9]
  i718.lightmapIndex = i719[10]
  i718.lightmapSceneIndex = i719[11]
  i718.lightmapScaleOffset = new pc.Vec4( i719[12], i719[13], i719[14], i719[15] )
  i718.lightProbeUsage = i719[16]
  i718.reflectionProbeUsage = i719[17]
  return i718
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i722 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i723 = data
  i722.loop = !!i723[0]
  i722.timeScale = i723[1]
  request.r(i723[2], i723[3], 0, i722, 'skeletonDataAsset')
  i722.initialSkinName = i723[4]
  i722.fixPrefabOverrideViaMeshFilter = i723[5]
  i722.initialFlipX = !!i723[6]
  i722.initialFlipY = !!i723[7]
  i722.updateWhenInvisible = i723[8]
  i722.zSpacing = i723[9]
  i722.useClipping = !!i723[10]
  i722.immutableTriangles = !!i723[11]
  i722.pmaVertexColors = !!i723[12]
  i722.clearStateOnDisable = !!i723[13]
  i722.tintBlack = !!i723[14]
  i722.singleSubmesh = !!i723[15]
  i722.fixDrawOrder = !!i723[16]
  i722.addNormals = !!i723[17]
  i722.calculateTangents = !!i723[18]
  i722.maskInteraction = i723[19]
  i722.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i723[20], i722.maskMaterials)
  i722.disableRenderingOnOverride = !!i723[21]
  i722.updateTiming = i723[22]
  i722.unscaledTime = !!i723[23]
  i722._animationName = i723[24]
  var i725 = i723[25]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( i725[i + 0] );
  }
  i722.separatorSlotNames = i724
  i722.physicsPositionInheritanceFactor = new pc.Vec2( i723[26], i723[27] )
  i722.physicsRotationInheritanceFactor = i723[28]
  request.r(i723[29], i723[30], 0, i722, 'physicsMovementRelativeTo')
  return i722
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i726 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i727 = data
  var i729 = i727[0]
  var i728 = []
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 2, i728, '')
  }
  i726.materialsMaskDisabled = i728
  var i731 = i727[1]
  var i730 = []
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 2, i730, '')
  }
  i726.materialsInsideMask = i730
  var i733 = i727[2]
  var i732 = []
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 2, i732, '')
  }
  i726.materialsOutsideMask = i732
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'sharedMesh')
  return i734
}

Deserializers["TargetItem"] = function (request, data, root) {
  var i736 = root || request.c( 'TargetItem' )
  var i737 = data
  var i739 = i737[0]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('TargetItem+PhaseData')))
  for(var i = 0; i < i739.length; i += 1) {
    i738.add(request.d('TargetItem+PhaseData', i739[i + 0]));
  }
  i736._phases = i738
  request.r(i737[1], i737[2], 0, i736, '_skeletonAnimation')
  i736._phaseTouch = request.d('TargetItem+SkeletonPhaseData', i737[3], i736._phaseTouch)
  i736._phaseBG = request.d('TargetItem+SkeletonPhaseData', i737[4], i736._phaseBG)
  request.r(i737[5], i737[6], 0, i736, '_collider2D')
  i736._isBlock = !!i737[7]
  i736._isTouch = !!i737[8]
  return i736
}

Deserializers["TargetItem+PhaseData"] = function (request, data, root) {
  var i742 = root || request.c( 'TargetItem+PhaseData' )
  var i743 = data
  i742._requiredId = i743[0]
  i742._isUsable = !!i743[1]
  i742._firstAnimation = i743[2]
  i742._firstAnimationLoop = !!i743[3]
  i742._secondAnimation = i743[4]
  i742._secondAnimationLoop = !!i743[5]
  return i742
}

Deserializers["TargetItem+SkeletonPhaseData"] = function (request, data, root) {
  var i744 = root || request.c( 'TargetItem+SkeletonPhaseData' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, '_skeletonAnimation')
  i744._firstAnimation = i745[2]
  i744._firstAnimationLoop = !!i745[3]
  i744._secondAnimation = i745[4]
  i744._secondAnimationLoop = !!i745[5]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i747 = data
  i746.ambientIntensity = i747[0]
  i746.reflectionIntensity = i747[1]
  i746.ambientMode = i747[2]
  i746.ambientLight = new pc.Color(i747[3], i747[4], i747[5], i747[6])
  i746.ambientSkyColor = new pc.Color(i747[7], i747[8], i747[9], i747[10])
  i746.ambientGroundColor = new pc.Color(i747[11], i747[12], i747[13], i747[14])
  i746.ambientEquatorColor = new pc.Color(i747[15], i747[16], i747[17], i747[18])
  i746.fogColor = new pc.Color(i747[19], i747[20], i747[21], i747[22])
  i746.fogEndDistance = i747[23]
  i746.fogStartDistance = i747[24]
  i746.fogDensity = i747[25]
  i746.fog = !!i747[26]
  request.r(i747[27], i747[28], 0, i746, 'skybox')
  i746.fogMode = i747[29]
  var i749 = i747[30]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i749[i + 0]) );
  }
  i746.lightmaps = i748
  i746.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i747[31], i746.lightProbes)
  i746.lightmapsMode = i747[32]
  i746.mixedBakeMode = i747[33]
  i746.environmentLightingMode = i747[34]
  i746.ambientProbe = new pc.SphericalHarmonicsL2(i747[35])
  i746.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i747[36])
  i746.useReferenceAmbientProbe = !!i747[37]
  request.r(i747[38], i747[39], 0, i746, 'customReflection')
  request.r(i747[40], i747[41], 0, i746, 'defaultReflection')
  i746.defaultReflectionMode = i747[42]
  i746.defaultReflectionResolution = i747[43]
  i746.sunLightObjectId = i747[44]
  i746.pixelLightCount = i747[45]
  i746.defaultReflectionHDR = !!i747[46]
  i746.hasLightDataAsset = !!i747[47]
  i746.hasManualGenerate = !!i747[48]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'lightmapColor')
  request.r(i753[2], i753[3], 0, i752, 'lightmapDirection')
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i754 = root || new UnityEngine.LightProbes()
  var i755 = data
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i763 = data
  var i765 = i763[0]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i765[i + 0]));
  }
  i762.ShaderCompilationErrors = i764
  i762.name = i763[1]
  i762.guid = i763[2]
  var i767 = i763[3]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( i767[i + 0] );
  }
  i762.shaderDefinedKeywords = i766
  var i769 = i763[4]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i769[i + 0]) );
  }
  i762.passes = i768
  var i771 = i763[5]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i771[i + 0]) );
  }
  i762.usePasses = i770
  var i773 = i763[6]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i773[i + 0]) );
  }
  i762.defaultParameterValues = i772
  request.r(i763[7], i763[8], 0, i762, 'unityFallbackShader')
  i762.readDepth = !!i763[9]
  i762.isCreatedByShaderGraph = !!i763[10]
  i762.disableBatching = !!i763[11]
  i762.compiled = !!i763[12]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i777 = data
  i776.shaderName = i777[0]
  i776.errorMessage = i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i780 = root || new pc.UnityShaderPass()
  var i781 = data
  i780.id = i781[0]
  i780.subShaderIndex = i781[1]
  i780.name = i781[2]
  i780.passType = i781[3]
  i780.grabPassTextureName = i781[4]
  i780.usePass = !!i781[5]
  i780.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[6], i780.zTest)
  i780.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[7], i780.zWrite)
  i780.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[8], i780.culling)
  i780.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i781[9], i780.blending)
  i780.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i781[10], i780.alphaBlending)
  i780.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[11], i780.colorWriteMask)
  i780.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[12], i780.offsetUnits)
  i780.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[13], i780.offsetFactor)
  i780.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[14], i780.stencilRef)
  i780.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[15], i780.stencilReadMask)
  i780.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[16], i780.stencilWriteMask)
  i780.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i781[17], i780.stencilOp)
  i780.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i781[18], i780.stencilOpFront)
  i780.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i781[19], i780.stencilOpBack)
  var i783 = i781[20]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i783[i + 0]) );
  }
  i780.tags = i782
  var i785 = i781[21]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i780.passDefinedKeywords = i784
  var i787 = i781[22]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i787[i + 0]) );
  }
  i780.passDefinedKeywordGroups = i786
  var i789 = i781[23]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i789[i + 0]) );
  }
  i780.variants = i788
  var i791 = i781[24]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i791[i + 0]) );
  }
  i780.excludedVariants = i790
  i780.hasDepthReader = !!i781[25]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i793 = data
  i792.val = i793[0]
  i792.name = i793[1]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i795 = data
  i794.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[0], i794.src)
  i794.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[1], i794.dst)
  i794.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[2], i794.op)
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i797 = data
  i796.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[0], i796.pass)
  i796.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[1], i796.fail)
  i796.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[2], i796.zFail)
  i796.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[3], i796.comp)
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i801 = data
  i800.name = i801[0]
  i800.value = i801[1]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i805 = data
  var i807 = i805[0]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( i807[i + 0] );
  }
  i804.keywords = i806
  i804.hasDiscard = !!i805[1]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i811 = data
  i810.passId = i811[0]
  i810.subShaderIndex = i811[1]
  var i813 = i811[2]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( i813[i + 0] );
  }
  i810.keywords = i812
  i810.vertexProgram = i811[3]
  i810.fragmentProgram = i811[4]
  i810.exportedForWebGl2 = !!i811[5]
  i810.readDepth = !!i811[6]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'shader')
  i816.pass = i817[2]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i821 = data
  i820.name = i821[0]
  i820.type = i821[1]
  i820.value = new pc.Vec4( i821[2], i821[3], i821[4], i821[5] )
  i820.textureValue = i821[6]
  i820.shaderPropertyFlag = i821[7]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i823 = data
  i822.name = i823[0]
  request.r(i823[1], i823[2], 0, i822, 'texture')
  i822.aabb = i823[3]
  i822.vertices = i823[4]
  i822.triangles = i823[5]
  i822.textureRect = UnityEngine.Rect.MinMaxRect(i823[6], i823[7], i823[8], i823[9])
  i822.packedRect = UnityEngine.Rect.MinMaxRect(i823[10], i823[11], i823[12], i823[13])
  i822.border = new pc.Vec4( i823[14], i823[15], i823[16], i823[17] )
  i822.transparency = i823[18]
  i822.bounds = i823[19]
  i822.pixelsPerUnit = i823[20]
  i822.textureWidth = i823[21]
  i822.textureHeight = i823[22]
  i822.nativeSize = new pc.Vec2( i823[23], i823[24] )
  i822.pivot = new pc.Vec2( i823[25], i823[26] )
  i822.textureRectOffset = new pc.Vec2( i823[27], i823[28] )
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i825 = data
  i824.name = i825[0]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i827 = data
  i826.name = i827[0]
  i826.ascent = i827[1]
  i826.originalLineHeight = i827[2]
  i826.fontSize = i827[3]
  var i829 = i827[4]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i829[i + 0]) );
  }
  i826.characterInfo = i828
  request.r(i827[5], i827[6], 0, i826, 'texture')
  i826.originalFontSize = i827[7]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i833 = data
  i832.index = i833[0]
  i832.advance = i833[1]
  i832.bearing = i833[2]
  i832.glyphWidth = i833[3]
  i832.glyphHeight = i833[4]
  i832.minX = i833[5]
  i832.maxX = i833[6]
  i832.minY = i833[7]
  i832.maxY = i833[8]
  i832.uvBottomLeftX = i833[9]
  i832.uvBottomLeftY = i833[10]
  i832.uvBottomRightX = i833[11]
  i832.uvBottomRightY = i833[12]
  i832.uvTopLeftX = i833[13]
  i832.uvTopLeftY = i833[14]
  i832.uvTopRightX = i833[15]
  i832.uvTopRightY = i833[16]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i835 = data
  i834.name = i835[0]
  i834.bytes64 = i835[1]
  i834.data = i835[2]
  return i834
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'atlas')
  i836.normalStyle = i837[2]
  i836.normalSpacingOffset = i837[3]
  i836.boldStyle = i837[4]
  i836.boldSpacing = i837[5]
  i836.italicStyle = i837[6]
  i836.tabSize = i837[7]
  i836.hashCode = i837[8]
  request.r(i837[9], i837[10], 0, i836, 'material')
  i836.materialHashCode = i837[11]
  i836.m_Version = i837[12]
  i836.m_SourceFontFileGUID = i837[13]
  request.r(i837[14], i837[15], 0, i836, 'm_SourceFontFile_EditorRef')
  request.r(i837[16], i837[17], 0, i836, 'm_SourceFontFile')
  i836.m_AtlasPopulationMode = i837[18]
  i836.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i837[19], i836.m_FaceInfo)
  var i839 = i837[20]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i839.length; i += 1) {
    i838.add(request.d('UnityEngine.TextCore.Glyph', i839[i + 0]));
  }
  i836.m_GlyphTable = i838
  var i841 = i837[21]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i841.length; i += 1) {
    i840.add(request.d('TMPro.TMP_Character', i841[i + 0]));
  }
  i836.m_CharacterTable = i840
  var i843 = i837[22]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i836.m_AtlasTextures = i842
  i836.m_AtlasTextureIndex = i837[23]
  i836.m_IsMultiAtlasTexturesEnabled = !!i837[24]
  i836.m_ClearDynamicDataOnBuild = !!i837[25]
  var i845 = i837[26]
  var i844 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i845.length; i += 1) {
    i844.add(request.d('UnityEngine.TextCore.GlyphRect', i845[i + 0]));
  }
  i836.m_UsedGlyphRects = i844
  var i847 = i837[27]
  var i846 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i847.length; i += 1) {
    i846.add(request.d('UnityEngine.TextCore.GlyphRect', i847[i + 0]));
  }
  i836.m_FreeGlyphRects = i846
  i836.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i837[28], i836.m_fontInfo)
  i836.m_AtlasWidth = i837[29]
  i836.m_AtlasHeight = i837[30]
  i836.m_AtlasPadding = i837[31]
  i836.m_AtlasRenderMode = i837[32]
  var i849 = i837[33]
  var i848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i849.length; i += 1) {
    i848.add(request.d('TMPro.TMP_Glyph', i849[i + 0]));
  }
  i836.m_glyphInfoList = i848
  i836.m_KerningTable = request.d('TMPro.KerningTable', i837[34], i836.m_KerningTable)
  i836.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i837[35], i836.m_FontFeatureTable)
  var i851 = i837[36]
  var i850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 1, i850, '')
  }
  i836.fallbackFontAssets = i850
  var i853 = i837[37]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 1, i852, '')
  }
  i836.m_FallbackFontAssetTable = i852
  i836.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i837[38], i836.m_CreationSettings)
  var i855 = i837[39]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('TMPro.TMP_FontWeightPair', i855[i + 0]) );
  }
  i836.m_FontWeightTable = i854
  var i857 = i837[40]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('TMPro.TMP_FontWeightPair', i857[i + 0]) );
  }
  i836.fontWeights = i856
  return i836
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i859 = data
  i858.m_FaceIndex = i859[0]
  i858.m_FamilyName = i859[1]
  i858.m_StyleName = i859[2]
  i858.m_PointSize = i859[3]
  i858.m_Scale = i859[4]
  i858.m_UnitsPerEM = i859[5]
  i858.m_LineHeight = i859[6]
  i858.m_AscentLine = i859[7]
  i858.m_CapLine = i859[8]
  i858.m_MeanLine = i859[9]
  i858.m_Baseline = i859[10]
  i858.m_DescentLine = i859[11]
  i858.m_SuperscriptOffset = i859[12]
  i858.m_SuperscriptSize = i859[13]
  i858.m_SubscriptOffset = i859[14]
  i858.m_SubscriptSize = i859[15]
  i858.m_UnderlineOffset = i859[16]
  i858.m_UnderlineThickness = i859[17]
  i858.m_StrikethroughOffset = i859[18]
  i858.m_StrikethroughThickness = i859[19]
  i858.m_TabWidth = i859[20]
  return i858
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i863 = data
  i862.m_Index = i863[0]
  i862.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i863[1], i862.m_Metrics)
  i862.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i863[2], i862.m_GlyphRect)
  i862.m_Scale = i863[3]
  i862.m_AtlasIndex = i863[4]
  i862.m_ClassDefinitionType = i863[5]
  return i862
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i865 = data
  i864.m_Width = i865[0]
  i864.m_Height = i865[1]
  i864.m_HorizontalBearingX = i865[2]
  i864.m_HorizontalBearingY = i865[3]
  i864.m_HorizontalAdvance = i865[4]
  return i864
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i867 = data
  i866.m_X = i867[0]
  i866.m_Y = i867[1]
  i866.m_Width = i867[2]
  i866.m_Height = i867[3]
  return i866
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.TMP_Character' )
  var i871 = data
  i870.m_ElementType = i871[0]
  i870.m_Unicode = i871[1]
  i870.m_GlyphIndex = i871[2]
  i870.m_Scale = i871[3]
  return i870
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i876 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i877 = data
  i876.Name = i877[0]
  i876.PointSize = i877[1]
  i876.Scale = i877[2]
  i876.CharacterCount = i877[3]
  i876.LineHeight = i877[4]
  i876.Baseline = i877[5]
  i876.Ascender = i877[6]
  i876.CapHeight = i877[7]
  i876.Descender = i877[8]
  i876.CenterLine = i877[9]
  i876.SuperscriptOffset = i877[10]
  i876.SubscriptOffset = i877[11]
  i876.SubSize = i877[12]
  i876.Underline = i877[13]
  i876.UnderlineThickness = i877[14]
  i876.strikethrough = i877[15]
  i876.strikethroughThickness = i877[16]
  i876.TabWidth = i877[17]
  i876.Padding = i877[18]
  i876.AtlasWidth = i877[19]
  i876.AtlasHeight = i877[20]
  return i876
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i880 = root || request.c( 'TMPro.TMP_Glyph' )
  var i881 = data
  i880.id = i881[0]
  i880.x = i881[1]
  i880.y = i881[2]
  i880.width = i881[3]
  i880.height = i881[4]
  i880.xOffset = i881[5]
  i880.yOffset = i881[6]
  i880.xAdvance = i881[7]
  i880.scale = i881[8]
  return i880
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.KerningTable' )
  var i883 = data
  var i885 = i883[0]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(request.d('TMPro.KerningPair', i885[i + 0]));
  }
  i882.kerningPairs = i884
  return i882
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i888 = root || request.c( 'TMPro.KerningPair' )
  var i889 = data
  i888.xOffset = i889[0]
  i888.m_FirstGlyph = i889[1]
  i888.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i889[2], i888.m_FirstGlyphAdjustments)
  i888.m_SecondGlyph = i889[3]
  i888.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i889[4], i888.m_SecondGlyphAdjustments)
  i888.m_IgnoreSpacingAdjustments = !!i889[5]
  return i888
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i890 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i891 = data
  var i893 = i891[0]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i893[i + 0]));
  }
  i890.m_GlyphPairAdjustmentRecords = i892
  return i890
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i896 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i897 = data
  i896.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i897[0], i896.m_FirstAdjustmentRecord)
  i896.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i897[1], i896.m_SecondAdjustmentRecord)
  i896.m_FeatureLookupFlags = i897[2]
  return i896
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i900 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i901 = data
  i900.sourceFontFileName = i901[0]
  i900.sourceFontFileGUID = i901[1]
  i900.pointSizeSamplingMode = i901[2]
  i900.pointSize = i901[3]
  i900.padding = i901[4]
  i900.packingMode = i901[5]
  i900.atlasWidth = i901[6]
  i900.atlasHeight = i901[7]
  i900.characterSetSelectionMode = i901[8]
  i900.characterSequence = i901[9]
  i900.referencedFontAssetGUID = i901[10]
  i900.referencedTextAssetGUID = i901[11]
  i900.fontStyle = i901[12]
  i900.fontStyleModifier = i901[13]
  i900.renderMode = i901[14]
  i900.includeFontFeatures = !!i901[15]
  return i900
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i904 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'regularTypeface')
  request.r(i905[2], i905[3], 0, i904, 'italicTypeface')
  return i904
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i906 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i907 = data
  var i909 = i907[0]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i906.atlasAssets = i908
  i906.scale = i907[1]
  request.r(i907[2], i907[3], 0, i906, 'skeletonJSON')
  i906.isUpgradingBlendModeMaterials = !!i907[4]
  i906.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i907[5], i906.blendModeMaterials)
  var i911 = i907[6]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 1, i910, '')
  }
  i906.skeletonDataModifiers = i910
  var i913 = i907[7]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( i913[i + 0] );
  }
  i906.fromAnimation = i912
  var i915 = i907[8]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( i915[i + 0] );
  }
  i906.toAnimation = i914
  i906.duration = i907[9]
  i906.defaultMix = i907[10]
  request.r(i907[11], i907[12], 0, i906, 'controller')
  return i906
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i918 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i919 = data
  i918.applyAdditiveMaterial = !!i919[0]
  var i921 = i919[1]
  var i920 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i921.length; i += 1) {
    i920.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i921[i + 0]));
  }
  i918.additiveMaterials = i920
  var i923 = i919[2]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i923.length; i += 1) {
    i922.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i923[i + 0]));
  }
  i918.multiplyMaterials = i922
  var i925 = i919[3]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i925.length; i += 1) {
    i924.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i925[i + 0]));
  }
  i918.screenMaterials = i924
  i918.requiresBlendModeMaterials = !!i919[4]
  return i918
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i928 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i929 = data
  i928.pageName = i929[0]
  request.r(i929[1], i929[2], 0, i928, 'material')
  return i928
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i932 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'atlasFile')
  var i935 = i933[2]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i932.materials = i934
  i932.textureLoadingMode = i933[3]
  request.r(i933[4], i933[5], 0, i932, 'onDemandTextureLoader')
  return i932
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i936 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i937 = data
  i936.useSafeMode = !!i937[0]
  i936.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i937[1], i936.safeModeOptions)
  i936.timeScale = i937[2]
  i936.unscaledTimeScale = i937[3]
  i936.useSmoothDeltaTime = !!i937[4]
  i936.maxSmoothUnscaledTime = i937[5]
  i936.rewindCallbackMode = i937[6]
  i936.showUnityEditorReport = !!i937[7]
  i936.logBehaviour = i937[8]
  i936.drawGizmos = !!i937[9]
  i936.defaultRecyclable = !!i937[10]
  i936.defaultAutoPlay = i937[11]
  i936.defaultUpdateType = i937[12]
  i936.defaultTimeScaleIndependent = !!i937[13]
  i936.defaultEaseType = i937[14]
  i936.defaultEaseOvershootOrAmplitude = i937[15]
  i936.defaultEasePeriod = i937[16]
  i936.defaultAutoKill = !!i937[17]
  i936.defaultLoopType = i937[18]
  i936.debugMode = !!i937[19]
  i936.debugStoreTargetId = !!i937[20]
  i936.showPreviewPanel = !!i937[21]
  i936.storeSettingsLocation = i937[22]
  i936.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i937[23], i936.modules)
  i936.createASMDEF = !!i937[24]
  i936.showPlayingTweens = !!i937[25]
  i936.showPausedTweens = !!i937[26]
  return i936
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i938 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i939 = data
  i938.logBehaviour = i939[0]
  i938.nestedTweenFailureBehaviour = i939[1]
  return i938
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i940 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i941 = data
  i940.showPanel = !!i941[0]
  i940.audioEnabled = !!i941[1]
  i940.physicsEnabled = !!i941[2]
  i940.physics2DEnabled = !!i941[3]
  i940.spriteEnabled = !!i941[4]
  i940.uiEnabled = !!i941[5]
  i940.textMeshProEnabled = !!i941[6]
  i940.tk2DEnabled = !!i941[7]
  i940.deAudioEnabled = !!i941[8]
  i940.deUnityExtendedEnabled = !!i941[9]
  i940.epoOutlineEnabled = !!i941[10]
  return i940
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.TMP_Settings' )
  var i943 = data
  i942.m_enableWordWrapping = !!i943[0]
  i942.m_enableKerning = !!i943[1]
  i942.m_enableExtraPadding = !!i943[2]
  i942.m_enableTintAllSprites = !!i943[3]
  i942.m_enableParseEscapeCharacters = !!i943[4]
  i942.m_EnableRaycastTarget = !!i943[5]
  i942.m_GetFontFeaturesAtRuntime = !!i943[6]
  i942.m_missingGlyphCharacter = i943[7]
  i942.m_warningsDisabled = !!i943[8]
  request.r(i943[9], i943[10], 0, i942, 'm_defaultFontAsset')
  i942.m_defaultFontAssetPath = i943[11]
  i942.m_defaultFontSize = i943[12]
  i942.m_defaultAutoSizeMinRatio = i943[13]
  i942.m_defaultAutoSizeMaxRatio = i943[14]
  i942.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i943[15], i943[16] )
  i942.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i943[17], i943[18] )
  i942.m_autoSizeTextContainer = !!i943[19]
  i942.m_IsTextObjectScaleStatic = !!i943[20]
  var i945 = i943[21]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 1, i944, '')
  }
  i942.m_fallbackFontAssets = i944
  i942.m_matchMaterialPreset = !!i943[22]
  request.r(i943[23], i943[24], 0, i942, 'm_defaultSpriteAsset')
  i942.m_defaultSpriteAssetPath = i943[25]
  i942.m_enableEmojiSupport = !!i943[26]
  i942.m_MissingCharacterSpriteUnicode = i943[27]
  i942.m_defaultColorGradientPresetsPath = i943[28]
  request.r(i943[29], i943[30], 0, i942, 'm_defaultStyleSheet')
  i942.m_StyleSheetsResourcePath = i943[31]
  request.r(i943[32], i943[33], 0, i942, 'm_leadingCharacters')
  request.r(i943[34], i943[35], 0, i942, 'm_followingCharacters')
  i942.m_UseModernHangulLineBreakingRules = !!i943[36]
  return i942
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i947 = data
  i946.m_GlyphIndex = i947[0]
  i946.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i947[1], i946.m_GlyphValueRecord)
  return i946
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i949 = data
  i948.m_XPlacement = i949[0]
  i948.m_YPlacement = i949[1]
  i948.m_XAdvance = i949[2]
  i948.m_YAdvance = i949[3]
  return i948
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'spriteSheet')
  var i953 = i951[2]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('TMPro.TMP_Sprite', i953[i + 0]));
  }
  i950.spriteInfoList = i952
  var i955 = i951[3]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 1, i954, '')
  }
  i950.fallbackSpriteAssets = i954
  i950.hashCode = i951[4]
  request.r(i951[5], i951[6], 0, i950, 'material')
  i950.materialHashCode = i951[7]
  i950.m_Version = i951[8]
  i950.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i951[9], i950.m_FaceInfo)
  var i957 = i951[10]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('TMPro.TMP_SpriteCharacter', i957[i + 0]));
  }
  i950.m_SpriteCharacterTable = i956
  var i959 = i951[11]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i959.length; i += 1) {
    i958.add(request.d('TMPro.TMP_SpriteGlyph', i959[i + 0]));
  }
  i950.m_SpriteGlyphTable = i958
  return i950
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.TMP_Sprite' )
  var i963 = data
  i962.name = i963[0]
  i962.hashCode = i963[1]
  i962.unicode = i963[2]
  i962.pivot = new pc.Vec2( i963[3], i963[4] )
  request.r(i963[5], i963[6], 0, i962, 'sprite')
  i962.id = i963[7]
  i962.x = i963[8]
  i962.y = i963[9]
  i962.width = i963[10]
  i962.height = i963[11]
  i962.xOffset = i963[12]
  i962.yOffset = i963[13]
  i962.xAdvance = i963[14]
  i962.scale = i963[15]
  return i962
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i969 = data
  i968.m_Name = i969[0]
  i968.m_HashCode = i969[1]
  i968.m_ElementType = i969[2]
  i968.m_Unicode = i969[3]
  i968.m_GlyphIndex = i969[4]
  i968.m_Scale = i969[5]
  return i968
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'sprite')
  i972.m_Index = i973[2]
  i972.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i973[3], i972.m_Metrics)
  i972.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i973[4], i972.m_GlyphRect)
  i972.m_Scale = i973[5]
  i972.m_AtlasIndex = i973[6]
  i972.m_ClassDefinitionType = i973[7]
  return i972
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i974 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i975 = data
  var i977 = i975[0]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i977.length; i += 1) {
    i976.add(request.d('TMPro.TMP_Style', i977[i + 0]));
  }
  i974.m_StyleList = i976
  return i974
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.TMP_Style' )
  var i981 = data
  i980.m_Name = i981[0]
  i980.m_HashCode = i981[1]
  i980.m_OpeningDefinition = i981[2]
  i980.m_ClosingDefinition = i981[3]
  i980.m_OpeningTagArray = i981[4]
  i980.m_ClosingTagArray = i981[5]
  i980.m_OpeningTagUnicodeArray = i981[6]
  i980.m_ClosingTagUnicodeArray = i981[7]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i983 = data
  var i985 = i983[0]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i985[i + 0]) );
  }
  i982.files = i984
  i982.componentToPrefabIds = i983[1]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i989 = data
  i988.path = i989[0]
  request.r(i989[1], i989[2], 0, i988, 'unityObject')
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i991 = data
  var i993 = i991[0]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i993[i + 0]) );
  }
  i990.scriptsExecutionOrder = i992
  var i995 = i991[1]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i995[i + 0]) );
  }
  i990.sortingLayers = i994
  var i997 = i991[2]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i997[i + 0]) );
  }
  i990.cullingLayers = i996
  i990.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i991[3], i990.timeSettings)
  i990.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i991[4], i990.physicsSettings)
  i990.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i991[5], i990.physics2DSettings)
  i990.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i991[6], i990.qualitySettings)
  i990.enableRealtimeShadows = !!i991[7]
  i990.enableAutoInstancing = !!i991[8]
  i990.enableStaticBatching = !!i991[9]
  i990.enableDynamicBatching = !!i991[10]
  i990.lightmapEncodingQuality = i991[11]
  i990.desiredColorSpace = i991[12]
  var i999 = i991[13]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( i999[i + 0] );
  }
  i990.allTags = i998
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.value = i1003[1]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1007 = data
  i1006.id = i1007[0]
  i1006.name = i1007[1]
  i1006.value = i1007[2]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1011 = data
  i1010.id = i1011[0]
  i1010.name = i1011[1]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1013 = data
  i1012.fixedDeltaTime = i1013[0]
  i1012.maximumDeltaTime = i1013[1]
  i1012.timeScale = i1013[2]
  i1012.maximumParticleTimestep = i1013[3]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1015 = data
  i1014.gravity = new pc.Vec3( i1015[0], i1015[1], i1015[2] )
  i1014.defaultSolverIterations = i1015[3]
  i1014.bounceThreshold = i1015[4]
  i1014.autoSyncTransforms = !!i1015[5]
  i1014.autoSimulation = !!i1015[6]
  var i1017 = i1015[7]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1017[i + 0]) );
  }
  i1014.collisionMatrix = i1016
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1021 = data
  i1020.enabled = !!i1021[0]
  i1020.layerId = i1021[1]
  i1020.otherLayerId = i1021[2]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'material')
  i1022.gravity = new pc.Vec2( i1023[2], i1023[3] )
  i1022.positionIterations = i1023[4]
  i1022.velocityIterations = i1023[5]
  i1022.velocityThreshold = i1023[6]
  i1022.maxLinearCorrection = i1023[7]
  i1022.maxAngularCorrection = i1023[8]
  i1022.maxTranslationSpeed = i1023[9]
  i1022.maxRotationSpeed = i1023[10]
  i1022.baumgarteScale = i1023[11]
  i1022.baumgarteTOIScale = i1023[12]
  i1022.timeToSleep = i1023[13]
  i1022.linearSleepTolerance = i1023[14]
  i1022.angularSleepTolerance = i1023[15]
  i1022.defaultContactOffset = i1023[16]
  i1022.autoSimulation = !!i1023[17]
  i1022.queriesHitTriggers = !!i1023[18]
  i1022.queriesStartInColliders = !!i1023[19]
  i1022.callbacksOnDisable = !!i1023[20]
  i1022.reuseCollisionCallbacks = !!i1023[21]
  i1022.autoSyncTransforms = !!i1023[22]
  var i1025 = i1023[23]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1025[i + 0]) );
  }
  i1022.collisionMatrix = i1024
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1029 = data
  i1028.enabled = !!i1029[0]
  i1028.layerId = i1029[1]
  i1028.otherLayerId = i1029[2]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1033[i + 0]) );
  }
  i1030.qualityLevels = i1032
  var i1035 = i1031[1]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1030.names = i1034
  i1030.shadows = i1031[2]
  i1030.anisotropicFiltering = i1031[3]
  i1030.antiAliasing = i1031[4]
  i1030.lodBias = i1031[5]
  i1030.shadowCascades = i1031[6]
  i1030.shadowDistance = i1031[7]
  i1030.shadowmaskMode = i1031[8]
  i1030.shadowProjection = i1031[9]
  i1030.shadowResolution = i1031[10]
  i1030.softParticles = !!i1031[11]
  i1030.softVegetation = !!i1031[12]
  i1030.activeColorSpace = i1031[13]
  i1030.desiredColorSpace = i1031[14]
  i1030.masterTextureLimit = i1031[15]
  i1030.maxQueuedFrames = i1031[16]
  i1030.particleRaycastBudget = i1031[17]
  i1030.pixelLightCount = i1031[18]
  i1030.realtimeReflectionProbes = !!i1031[19]
  i1030.shadowCascade2Split = i1031[20]
  i1030.shadowCascade4Split = new pc.Vec3( i1031[21], i1031[22], i1031[23] )
  i1030.streamingMipmapsActive = !!i1031[24]
  i1030.vSyncCount = i1031[25]
  i1030.asyncUploadBufferSize = i1031[26]
  i1030.asyncUploadTimeSlice = i1031[27]
  i1030.billboardsFaceCameraPosition = !!i1031[28]
  i1030.shadowNearPlaneOffset = i1031[29]
  i1030.streamingMipmapsMemoryBudget = i1031[30]
  i1030.maximumLODLevel = i1031[31]
  i1030.streamingMipmapsAddAllCameras = !!i1031[32]
  i1030.streamingMipmapsMaxLevelReduction = i1031[33]
  i1030.streamingMipmapsRenderersPerFrame = i1031[34]
  i1030.resolutionScalingFixedDPIFactor = i1031[35]
  i1030.streamingMipmapsMaxFileIORequests = i1031[36]
  i1030.currentQualityLevel = i1031[37]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1041 = data
  i1040.weight = i1041[0]
  i1040.vertices = i1041[1]
  i1040.normals = i1041[2]
  i1040.tangents = i1041[3]
  return i1040
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1042 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1043 = data
  i1042.xPlacement = i1043[0]
  i1042.yPlacement = i1043[1]
  i1042.xAdvance = i1043[2]
  i1042.yAdvance = i1043[3]
  return i1042
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[3],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[3],"81":[37],"82":[83],"84":[83],"11":[10],"6":[3],"20":[12],"33":[85],"86":[87],"88":[34],"89":[87],"90":[10],"91":[10],"13":[11],"19":[21,10],"92":[10],"12":[11],"93":[10],"94":[10],"95":[10],"96":[10],"97":[10],"98":[10],"99":[10],"30":[10],"100":[10],"17":[21,10],"101":[10],"102":[10],"103":[10],"104":[10],"105":[21,10],"106":[10],"107":[8],"108":[8],"9":[8],"109":[8],"110":[3],"111":[3],"112":[113],"114":[3],"115":[116],"117":[10],"118":[21,10],"38":[37],"28":[21,10],"119":[120,37],"121":[37],"122":[37,39],"123":[59],"124":[67],"125":[116],"126":[127],"128":[10],"129":[37,10],"18":[10,21],"130":[10],"131":[21,10],"132":[37],"133":[21,10],"134":[10],"135":[87]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAutoSize","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","ResponsiveCanvasScaler","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Sprite","DG.Tweening.DOTweenAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.UI.Mask","AudioController","UnityEngine.BoxCollider2D","ItemMovement","UnityEngine.SpriteRenderer","TargetItem","ItemStackManager","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "358.2";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1853";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5302";

Deserializers.runtimeAnalysisExcludedModules = "particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Minecraft-Clone";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "00a68b9d-6bd7-4f6a-b6c8-30888186e166";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

