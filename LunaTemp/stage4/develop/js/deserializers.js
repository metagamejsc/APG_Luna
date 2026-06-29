var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointSpring' )
  var i525 = data
  i524.spring = i525[0]
  i524.damper = i525[1]
  i524.targetPosition = i525[2]
  return i524
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.JointMotor' )
  var i527 = data
  i526.m_TargetVelocity = i527[0]
  i526.m_Force = i527[1]
  i526.m_FreeSpin = i527[2]
  return i526
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointLimits' )
  var i529 = data
  i528.m_Min = i529[0]
  i528.m_Max = i529[1]
  i528.m_Bounciness = i529[2]
  i528.m_BounceMinVelocity = i529[3]
  i528.m_ContactDistance = i529[4]
  i528.minBounce = i529[5]
  i528.maxBounce = i529[6]
  return i528
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointDrive' )
  var i531 = data
  i530.m_PositionSpring = i531[0]
  i530.m_PositionDamper = i531[1]
  i530.m_MaximumForce = i531[2]
  i530.m_UseAcceleration = i531[3]
  return i530
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i533 = data
  i532.m_Spring = i533[0]
  i532.m_Damper = i533[1]
  return i532
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i535 = data
  i534.m_Limit = i535[0]
  i534.m_Bounciness = i535[1]
  i534.m_ContactDistance = i535[2]
  return i534
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i537 = data
  i536.m_ExtremumSlip = i537[0]
  i536.m_ExtremumValue = i537[1]
  i536.m_AsymptoteSlip = i537[2]
  i536.m_AsymptoteValue = i537[3]
  i536.m_Stiffness = i537[4]
  return i536
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i539 = data
  i538.m_LowerAngle = i539[0]
  i538.m_UpperAngle = i539[1]
  return i538
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i541 = data
  i540.m_MotorSpeed = i541[0]
  i540.m_MaximumMotorTorque = i541[1]
  return i540
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i543 = data
  i542.m_DampingRatio = i543[0]
  i542.m_Frequency = i543[1]
  i542.m_Angle = i543[2]
  return i542
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i545 = data
  i544.m_LowerTranslation = i545[0]
  i544.m_UpperTranslation = i545[1]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i547 = data
  i546.name = i547[0]
  i546.width = i547[1]
  i546.height = i547[2]
  i546.mipmapCount = i547[3]
  i546.anisoLevel = i547[4]
  i546.filterMode = i547[5]
  i546.hdr = !!i547[6]
  i546.format = i547[7]
  i546.wrapMode = i547[8]
  i546.alphaIsTransparency = !!i547[9]
  i546.alphaSource = i547[10]
  i546.graphicsFormat = i547[11]
  i546.sRGBTexture = !!i547[12]
  i546.desiredColorSpace = i547[13]
  i546.wrapU = i547[14]
  i546.wrapV = i547[15]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i548 = root || new pc.UnityMaterial()
  var i549 = data
  i548.name = i549[0]
  request.r(i549[1], i549[2], 0, i548, 'shader')
  i548.renderQueue = i549[3]
  i548.enableInstancing = !!i549[4]
  var i551 = i549[5]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i551[i + 0]) );
  }
  i548.floatParameters = i550
  var i553 = i549[6]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i553[i + 0]) );
  }
  i548.colorParameters = i552
  var i555 = i549[7]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i555[i + 0]) );
  }
  i548.vectorParameters = i554
  var i557 = i549[8]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i557[i + 0]) );
  }
  i548.textureParameters = i556
  var i559 = i549[9]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i559[i + 0]) );
  }
  i548.materialFlags = i558
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i563 = data
  i562.name = i563[0]
  i562.value = i563[1]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i567 = data
  i566.name = i567[0]
  i566.value = new pc.Color(i567[1], i567[2], i567[3], i567[4])
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i571 = data
  i570.name = i571[0]
  i570.value = new pc.Vec4( i571[1], i571[2], i571[3], i571[4] )
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i575 = data
  i574.name = i575[0]
  request.r(i575[1], i575[2], 0, i574, 'value')
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i579 = data
  i578.name = i579[0]
  i578.enabled = !!i579[1]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i581 = data
  i580.name = i581[0]
  i580.halfPrecision = !!i581[1]
  i580.useUInt32IndexFormat = !!i581[2]
  i580.vertexCount = i581[3]
  i580.aabb = i581[4]
  var i583 = i581[5]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( !!i583[i + 0] );
  }
  i580.streams = i582
  i580.vertices = i581[6]
  var i585 = i581[7]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i585[i + 0]) );
  }
  i580.subMeshes = i584
  var i587 = i581[8]
  var i586 = []
  for(var i = 0; i < i587.length; i += 16) {
    i586.push( new pc.Mat4().setData(i587[i + 0], i587[i + 1], i587[i + 2], i587[i + 3],  i587[i + 4], i587[i + 5], i587[i + 6], i587[i + 7],  i587[i + 8], i587[i + 9], i587[i + 10], i587[i + 11],  i587[i + 12], i587[i + 13], i587[i + 14], i587[i + 15]) );
  }
  i580.bindposes = i586
  var i589 = i581[9]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i589[i + 0]) );
  }
  i580.blendShapes = i588
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i595 = data
  i594.triangles = i595[0]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i601 = data
  i600.name = i601[0]
  var i603 = i601[1]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i603[i + 0]) );
  }
  i600.frames = i602
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i605 = data
  i604.name = i605[0]
  i604.index = i605[1]
  i604.startup = !!i605[2]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i607 = data
  i606.position = new pc.Vec3( i607[0], i607[1], i607[2] )
  i606.scale = new pc.Vec3( i607[3], i607[4], i607[5] )
  i606.rotation = new pc.Quat(i607[6], i607[7], i607[8], i607[9])
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i609 = data
  i608.aspect = i609[0]
  i608.orthographic = !!i609[1]
  i608.orthographicSize = i609[2]
  i608.backgroundColor = new pc.Color(i609[3], i609[4], i609[5], i609[6])
  i608.nearClipPlane = i609[7]
  i608.farClipPlane = i609[8]
  i608.fieldOfView = i609[9]
  i608.depth = i609[10]
  i608.clearFlags = i609[11]
  i608.cullingMask = i609[12]
  i608.rect = i609[13]
  request.r(i609[14], i609[15], 0, i608, 'targetTexture')
  i608.usePhysicalProperties = !!i609[16]
  i608.focalLength = i609[17]
  i608.sensorSize = new pc.Vec2( i609[18], i609[19] )
  i608.lensShift = new pc.Vec2( i609[20], i609[21] )
  i608.gateFit = i609[22]
  i608.commandBufferCount = i609[23]
  i608.cameraType = i609[24]
  i608.enabled = !!i609[25]
  return i608
}

Deserializers["CameraAutoSize"] = function (request, data, root) {
  var i610 = root || request.c( 'CameraAutoSize' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'targetCamera')
  i610.referenceResolution = new pc.Vec2( i611[2], i611[3] )
  i610.referenceOrthographicSize = i611[4]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i613 = data
  i612.name = i613[0]
  i612.tagId = i613[1]
  i612.enabled = !!i613[2]
  i612.isStatic = !!i613[3]
  i612.layer = i613[4]
  return i612
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'm_FirstSelected')
  i614.m_sendNavigationEvents = !!i615[2]
  i614.m_DragThreshold = i615[3]
  return i614
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i617 = data
  i616.m_HorizontalAxis = i617[0]
  i616.m_VerticalAxis = i617[1]
  i616.m_SubmitButton = i617[2]
  i616.m_CancelButton = i617[3]
  i616.m_InputActionsPerSecond = i617[4]
  i616.m_RepeatDelay = i617[5]
  i616.m_ForceModuleActive = !!i617[6]
  i616.m_SendPointerHoverToParent = !!i617[7]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i619 = data
  i618.pivot = new pc.Vec2( i619[0], i619[1] )
  i618.anchorMin = new pc.Vec2( i619[2], i619[3] )
  i618.anchorMax = new pc.Vec2( i619[4], i619[5] )
  i618.sizeDelta = new pc.Vec2( i619[6], i619[7] )
  i618.anchoredPosition3D = new pc.Vec3( i619[8], i619[9], i619[10] )
  i618.rotation = new pc.Quat(i619[11], i619[12], i619[13], i619[14])
  i618.scale = new pc.Vec3( i619[15], i619[16], i619[17] )
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i621 = data
  i620.planeDistance = i621[0]
  i620.referencePixelsPerUnit = i621[1]
  i620.isFallbackOverlay = !!i621[2]
  i620.renderMode = i621[3]
  i620.renderOrder = i621[4]
  i620.sortingLayerName = i621[5]
  i620.sortingOrder = i621[6]
  i620.scaleFactor = i621[7]
  request.r(i621[8], i621[9], 0, i620, 'worldCamera')
  i620.overrideSorting = !!i621[10]
  i620.pixelPerfect = !!i621[11]
  i620.targetDisplay = i621[12]
  i620.overridePixelPerfect = !!i621[13]
  i620.enabled = !!i621[14]
  return i620
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i623 = data
  i622.m_UiScaleMode = i623[0]
  i622.m_ReferencePixelsPerUnit = i623[1]
  i622.m_ScaleFactor = i623[2]
  i622.m_ReferenceResolution = new pc.Vec2( i623[3], i623[4] )
  i622.m_ScreenMatchMode = i623[5]
  i622.m_MatchWidthOrHeight = i623[6]
  i622.m_PhysicalUnit = i623[7]
  i622.m_FallbackScreenDPI = i623[8]
  i622.m_DefaultSpriteDPI = i623[9]
  i622.m_DynamicPixelsPerUnit = i623[10]
  i622.m_PresetInfoIsWorld = !!i623[11]
  return i622
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i625 = data
  i624.m_IgnoreReversedGraphics = !!i625[0]
  i624.m_BlockingObjects = i625[1]
  i624.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i625[2] )
  return i624
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i626 = root || request.c( 'LunaManager' )
  var i627 = data
  var i629 = i627[0]
  var i628 = []
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 2, i628, '')
  }
  i626.lstBtnInstall = i628
  request.r(i627[1], i627[2], 0, i626, 'WinGO')
  request.r(i627[3], i627[4], 0, i626, 'LoseGO')
  request.r(i627[5], i627[6], 0, i626, 'StartCard')
  request.r(i627[7], i627[8], 0, i626, 'EndCard')
  request.r(i627[9], i627[10], 0, i626, 'Parent')
  i626.isDrag = !!i627[11]
  i626.isCreative = !!i627[12]
  i626.timeDrag = i627[13]
  request.r(i627[14], i627[15], 0, i626, 'skeGhost')
  i626.countPlay = i627[16]
  i626.countPlayFinal = i627[17]
  i626.countPlayMax = i627[18]
  i626.timeDropFinal = i627[19]
  i626.colorBG = new pc.Color(i627[20], i627[21], i627[22], i627[23])
  request.r(i627[24], i627[25], 0, i626, 'texture2D')
  request.r(i627[26], i627[27], 0, i626, 'rawImageBG')
  request.r(i627[28], i627[29], 0, i626, 'textProgess')
  request.r(i627[30], i627[31], 0, i626, 'imgProgess')
  request.r(i627[32], i627[33], 0, i626, 'timeText')
  return i626
}

Deserializers["ResponsiveCanvasScaler"] = function (request, data, root) {
  var i632 = root || request.c( 'ResponsiveCanvasScaler' )
  var i633 = data
  i632._referenceResolution = new pc.Vec2( i633[0], i633[1] )
  i632._portraitMatch = i633[2]
  i632._landscapeMatch = i633[3]
  i632._squareMatch = i633[4]
  i632._portraitAspectThreshold = i633[5]
  i632._landscapeAspectThreshold = i633[6]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i635 = data
  i634.cullTransparentMesh = !!i635[0]
  return i634
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'm_Texture')
  i636.m_UVRect = UnityEngine.Rect.MinMaxRect(i637[2], i637[3], i637[4], i637[5])
  i636.m_Maskable = !!i637[6]
  request.r(i637[7], i637[8], 0, i636, 'm_Material')
  i636.m_Color = new pc.Color(i637[9], i637[10], i637[11], i637[12])
  i636.m_RaycastTarget = !!i637[13]
  i636.m_RaycastPadding = new pc.Vec4( i637[14], i637[15], i637[16], i637[17] )
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'clip')
  request.r(i639[2], i639[3], 0, i638, 'outputAudioMixerGroup')
  i638.playOnAwake = !!i639[4]
  i638.loop = !!i639[5]
  i638.time = i639[6]
  i638.volume = i639[7]
  i638.pitch = i639[8]
  i638.enabled = !!i639[9]
  return i638
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.Image' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'm_Sprite')
  i640.m_Type = i641[2]
  i640.m_PreserveAspect = !!i641[3]
  i640.m_FillCenter = !!i641[4]
  i640.m_FillMethod = i641[5]
  i640.m_FillAmount = i641[6]
  i640.m_FillClockwise = !!i641[7]
  i640.m_FillOrigin = i641[8]
  i640.m_UseSpriteMesh = !!i641[9]
  i640.m_PixelsPerUnitMultiplier = i641[10]
  i640.m_Maskable = !!i641[11]
  request.r(i641[12], i641[13], 0, i640, 'm_Material')
  i640.m_Color = new pc.Color(i641[14], i641[15], i641[16], i641[17])
  i640.m_RaycastTarget = !!i641[18]
  i640.m_RaycastPadding = new pc.Vec4( i641[19], i641[20], i641[21], i641[22] )
  return i640
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.Button' )
  var i643 = data
  i642.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i643[0], i642.m_OnClick)
  i642.m_Navigation = request.d('UnityEngine.UI.Navigation', i643[1], i642.m_Navigation)
  i642.m_Transition = i643[2]
  i642.m_Colors = request.d('UnityEngine.UI.ColorBlock', i643[3], i642.m_Colors)
  i642.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i643[4], i642.m_SpriteState)
  i642.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i643[5], i642.m_AnimationTriggers)
  i642.m_Interactable = !!i643[6]
  request.r(i643[7], i643[8], 0, i642, 'm_TargetGraphic')
  return i642
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i645 = data
  i644.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i645[0], i644.m_PersistentCalls)
  return i644
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i647 = data
  var i649 = i647[0]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i649.length; i += 1) {
    i648.add(request.d('UnityEngine.Events.PersistentCall', i649[i + 0]));
  }
  i646.m_Calls = i648
  return i646
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'm_Target')
  i652.m_TargetAssemblyTypeName = i653[2]
  i652.m_MethodName = i653[3]
  i652.m_Mode = i653[4]
  i652.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i653[5], i652.m_Arguments)
  i652.m_CallState = i653[6]
  return i652
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'm_ObjectArgument')
  i654.m_ObjectArgumentAssemblyTypeName = i655[2]
  i654.m_IntArgument = i655[3]
  i654.m_FloatArgument = i655[4]
  i654.m_StringArgument = i655[5]
  i654.m_BoolArgument = !!i655[6]
  return i654
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i657 = data
  i656.m_Mode = i657[0]
  i656.m_WrapAround = !!i657[1]
  request.r(i657[2], i657[3], 0, i656, 'm_SelectOnUp')
  request.r(i657[4], i657[5], 0, i656, 'm_SelectOnDown')
  request.r(i657[6], i657[7], 0, i656, 'm_SelectOnLeft')
  request.r(i657[8], i657[9], 0, i656, 'm_SelectOnRight')
  return i656
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i659 = data
  i658.m_NormalColor = new pc.Color(i659[0], i659[1], i659[2], i659[3])
  i658.m_HighlightedColor = new pc.Color(i659[4], i659[5], i659[6], i659[7])
  i658.m_PressedColor = new pc.Color(i659[8], i659[9], i659[10], i659[11])
  i658.m_SelectedColor = new pc.Color(i659[12], i659[13], i659[14], i659[15])
  i658.m_DisabledColor = new pc.Color(i659[16], i659[17], i659[18], i659[19])
  i658.m_ColorMultiplier = i659[20]
  i658.m_FadeDuration = i659[21]
  return i658
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'm_HighlightedSprite')
  request.r(i661[2], i661[3], 0, i660, 'm_PressedSprite')
  request.r(i661[4], i661[5], 0, i660, 'm_SelectedSprite')
  request.r(i661[6], i661[7], 0, i660, 'm_DisabledSprite')
  return i660
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i663 = data
  i662.m_NormalTrigger = i663[0]
  i662.m_HighlightedTrigger = i663[1]
  i662.m_PressedTrigger = i663[2]
  i662.m_SelectedTrigger = i663[3]
  i662.m_DisabledTrigger = i663[4]
  return i662
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i664 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i665 = data
  i664.m_hasFontAssetChanged = !!i665[0]
  request.r(i665[1], i665[2], 0, i664, 'm_baseMaterial')
  i664.m_maskOffset = new pc.Vec4( i665[3], i665[4], i665[5], i665[6] )
  i664.m_text = i665[7]
  i664.m_isRightToLeft = !!i665[8]
  request.r(i665[9], i665[10], 0, i664, 'm_fontAsset')
  request.r(i665[11], i665[12], 0, i664, 'm_sharedMaterial')
  var i667 = i665[13]
  var i666 = []
  for(var i = 0; i < i667.length; i += 2) {
  request.r(i667[i + 0], i667[i + 1], 2, i666, '')
  }
  i664.m_fontSharedMaterials = i666
  request.r(i665[14], i665[15], 0, i664, 'm_fontMaterial')
  var i669 = i665[16]
  var i668 = []
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 2, i668, '')
  }
  i664.m_fontMaterials = i668
  i664.m_fontColor32 = UnityEngine.Color32.ConstructColor(i665[17], i665[18], i665[19], i665[20])
  i664.m_fontColor = new pc.Color(i665[21], i665[22], i665[23], i665[24])
  i664.m_enableVertexGradient = !!i665[25]
  i664.m_colorMode = i665[26]
  i664.m_fontColorGradient = request.d('TMPro.VertexGradient', i665[27], i664.m_fontColorGradient)
  request.r(i665[28], i665[29], 0, i664, 'm_fontColorGradientPreset')
  request.r(i665[30], i665[31], 0, i664, 'm_spriteAsset')
  i664.m_tintAllSprites = !!i665[32]
  request.r(i665[33], i665[34], 0, i664, 'm_StyleSheet')
  i664.m_TextStyleHashCode = i665[35]
  i664.m_overrideHtmlColors = !!i665[36]
  i664.m_faceColor = UnityEngine.Color32.ConstructColor(i665[37], i665[38], i665[39], i665[40])
  i664.m_fontSize = i665[41]
  i664.m_fontSizeBase = i665[42]
  i664.m_fontWeight = i665[43]
  i664.m_enableAutoSizing = !!i665[44]
  i664.m_fontSizeMin = i665[45]
  i664.m_fontSizeMax = i665[46]
  i664.m_fontStyle = i665[47]
  i664.m_HorizontalAlignment = i665[48]
  i664.m_VerticalAlignment = i665[49]
  i664.m_textAlignment = i665[50]
  i664.m_characterSpacing = i665[51]
  i664.m_wordSpacing = i665[52]
  i664.m_lineSpacing = i665[53]
  i664.m_lineSpacingMax = i665[54]
  i664.m_paragraphSpacing = i665[55]
  i664.m_charWidthMaxAdj = i665[56]
  i664.m_enableWordWrapping = !!i665[57]
  i664.m_wordWrappingRatios = i665[58]
  i664.m_overflowMode = i665[59]
  request.r(i665[60], i665[61], 0, i664, 'm_linkedTextComponent')
  request.r(i665[62], i665[63], 0, i664, 'parentLinkedComponent')
  i664.m_enableKerning = !!i665[64]
  i664.m_enableExtraPadding = !!i665[65]
  i664.checkPaddingRequired = !!i665[66]
  i664.m_isRichText = !!i665[67]
  i664.m_parseCtrlCharacters = !!i665[68]
  i664.m_isOrthographic = !!i665[69]
  i664.m_isCullingEnabled = !!i665[70]
  i664.m_horizontalMapping = i665[71]
  i664.m_verticalMapping = i665[72]
  i664.m_uvLineOffset = i665[73]
  i664.m_geometrySortingOrder = i665[74]
  i664.m_IsTextObjectScaleStatic = !!i665[75]
  i664.m_VertexBufferAutoSizeReduction = !!i665[76]
  i664.m_useMaxVisibleDescender = !!i665[77]
  i664.m_pageToDisplay = i665[78]
  i664.m_margin = new pc.Vec4( i665[79], i665[80], i665[81], i665[82] )
  i664.m_isUsingLegacyAnimationComponent = !!i665[83]
  i664.m_isVolumetricText = !!i665[84]
  i664.m_Maskable = !!i665[85]
  request.r(i665[86], i665[87], 0, i664, 'm_Material')
  i664.m_Color = new pc.Color(i665[88], i665[89], i665[90], i665[91])
  i664.m_RaycastTarget = !!i665[92]
  i664.m_RaycastPadding = new pc.Vec4( i665[93], i665[94], i665[95], i665[96] )
  return i664
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i672 = root || request.c( 'TMPro.VertexGradient' )
  var i673 = data
  i672.topLeft = new pc.Color(i673[0], i673[1], i673[2], i673[3])
  i672.topRight = new pc.Color(i673[4], i673[5], i673[6], i673[7])
  i672.bottomLeft = new pc.Color(i673[8], i673[9], i673[10], i673[11])
  i672.bottomRight = new pc.Color(i673[12], i673[13], i673[14], i673[15])
  return i672
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i674 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i675 = data
  i674.targetIsSelf = !!i675[0]
  request.r(i675[1], i675[2], 0, i674, 'targetGO')
  i674.tweenTargetIsTargetGO = !!i675[3]
  i674.delay = i675[4]
  i674.duration = i675[5]
  i674.easeType = i675[6]
  i674.easeCurve = new pc.AnimationCurve( { keys_flow: i675[7] } )
  i674.loopType = i675[8]
  i674.loops = i675[9]
  i674.id = i675[10]
  i674.isRelative = !!i675[11]
  i674.isFrom = !!i675[12]
  i674.isIndependentUpdate = !!i675[13]
  i674.autoKill = !!i675[14]
  i674.autoGenerate = !!i675[15]
  i674.isActive = !!i675[16]
  i674.isValid = !!i675[17]
  request.r(i675[18], i675[19], 0, i674, 'target')
  i674.animationType = i675[20]
  i674.targetType = i675[21]
  i674.forcedTargetType = i675[22]
  i674.autoPlay = !!i675[23]
  i674.useTargetAsV3 = !!i675[24]
  i674.endValueFloat = i675[25]
  i674.endValueV3 = new pc.Vec3( i675[26], i675[27], i675[28] )
  i674.endValueV2 = new pc.Vec2( i675[29], i675[30] )
  i674.endValueColor = new pc.Color(i675[31], i675[32], i675[33], i675[34])
  i674.endValueString = i675[35]
  i674.endValueRect = UnityEngine.Rect.MinMaxRect(i675[36], i675[37], i675[38], i675[39])
  request.r(i675[40], i675[41], 0, i674, 'endValueTransform')
  i674.optionalBool0 = !!i675[42]
  i674.optionalBool1 = !!i675[43]
  i674.optionalFloat0 = i675[44]
  i674.optionalInt0 = i675[45]
  i674.optionalRotationMode = i675[46]
  i674.optionalScrambleMode = i675[47]
  i674.optionalShakeRandomnessMode = i675[48]
  i674.optionalString = i675[49]
  i674.updateType = i675[50]
  i674.isSpeedBased = !!i675[51]
  i674.hasOnStart = !!i675[52]
  i674.hasOnPlay = !!i675[53]
  i674.hasOnUpdate = !!i675[54]
  i674.hasOnStepComplete = !!i675[55]
  i674.hasOnComplete = !!i675[56]
  i674.hasOnTweenCreated = !!i675[57]
  i674.hasOnRewind = !!i675[58]
  i674.onStart = request.d('UnityEngine.Events.UnityEvent', i675[59], i674.onStart)
  i674.onPlay = request.d('UnityEngine.Events.UnityEvent', i675[60], i674.onPlay)
  i674.onUpdate = request.d('UnityEngine.Events.UnityEvent', i675[61], i674.onUpdate)
  i674.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i675[62], i674.onStepComplete)
  i674.onComplete = request.d('UnityEngine.Events.UnityEvent', i675[63], i674.onComplete)
  i674.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i675[64], i674.onTweenCreated)
  i674.onRewind = request.d('UnityEngine.Events.UnityEvent', i675[65], i674.onRewind)
  return i674
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i677 = data
  i676.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i677[0], i676.m_PersistentCalls)
  return i676
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i678 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'skeletonDataAsset')
  request.r(i679[2], i679[3], 0, i678, 'additiveMaterial')
  request.r(i679[4], i679[5], 0, i678, 'multiplyMaterial')
  request.r(i679[6], i679[7], 0, i678, 'screenMaterial')
  i678.forceAdditiveMaterial = !!i679[8]
  i678.initialSkinName = i679[9]
  i678.initialFlipX = !!i679[10]
  i678.initialFlipY = !!i679[11]
  i678.startingAnimation = i679[12]
  i678.startingLoop = !!i679[13]
  i678.timeScale = i679[14]
  i678.freeze = !!i679[15]
  i678.layoutScaleMode = i679[16]
  i678.updateWhenInvisible = i679[17]
  i678.allowMultipleCanvasRenderers = !!i679[18]
  var i681 = i679[19]
  var i680 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i681.length; i += 2) {
  request.r(i681[i + 0], i681[i + 1], 1, i680, '')
  }
  i678.canvasRenderers = i680
  i678.enableSeparatorSlots = !!i679[20]
  i678.updateSeparatorPartLocation = !!i679[21]
  i678.updateSeparatorPartScale = !!i679[22]
  i678.disableMeshAssignmentOnOverride = !!i679[23]
  i678.m_SkeletonColor = new pc.Color(i679[24], i679[25], i679[26], i679[27])
  i678.referenceSize = new pc.Vec2( i679[28], i679[29] )
  i678.pivotOffset = new pc.Vec2( i679[30], i679[31] )
  i678.referenceScale = i679[32]
  i678.layoutScale = i679[33]
  i678.rectTransformSize = new pc.Vec2( i679[34], i679[35] )
  i678.editReferenceRect = !!i679[36]
  var i683 = i679[37]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( i683[i + 0] );
  }
  i678.separatorSlotNames = i682
  var i685 = i679[38]
  var i684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 1, i684, '')
  }
  i678.separatorParts = i684
  i678.physicsPositionInheritanceFactor = new pc.Vec2( i679[39], i679[40] )
  i678.physicsRotationInheritanceFactor = i679[41]
  request.r(i679[42], i679[43], 0, i678, 'physicsMovementRelativeTo')
  i678.meshGenerator = request.d('Spine.Unity.MeshGenerator', i679[44], i678.meshGenerator)
  i678.updateTiming = i679[45]
  i678.unscaledTime = !!i679[46]
  i678.m_Maskable = !!i679[47]
  request.r(i679[48], i679[49], 0, i678, 'm_Material')
  i678.m_Color = new pc.Color(i679[50], i679[51], i679[52], i679[53])
  i678.m_RaycastTarget = !!i679[54]
  i678.m_RaycastPadding = new pc.Vec4( i679[55], i679[56], i679[57], i679[58] )
  return i678
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i692 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i693 = data
  i692.settings = request.d('Spine.Unity.MeshGenerator+Settings', i693[0], i692.settings)
  return i692
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i694 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i695 = data
  i694.useClipping = !!i695[0]
  i694.zSpacing = i695[1]
  i694.tintBlack = !!i695[2]
  i694.canvasGroupCompatible = !!i695[3]
  i694.pmaVertexColors = !!i695[4]
  i694.addNormals = !!i695[5]
  i694.calculateTangents = !!i695[6]
  i694.immutableTriangles = !!i695[7]
  return i694
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.UI.Mask' )
  var i697 = data
  i696.m_ShowMaskGraphic = !!i697[0]
  return i696
}

Deserializers["AudioController"] = function (request, data, root) {
  var i698 = root || request.c( 'AudioController' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'bgmSource')
  request.r(i699[2], i699[3], 0, i698, 'sfxSource')
  var i701 = i699[4]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('AudioEntry', i701[i + 0]) );
  }
  i698.audioEntries = i700
  return i698
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i704 = root || request.c( 'AudioEntry' )
  var i705 = data
  i704.key = i705[0]
  request.r(i705[1], i705[2], 0, i704, 'clip')
  i704.volume = i705[3]
  return i704
}

Deserializers["Level19Playable"] = function (request, data, root) {
  var i706 = root || request.c( 'Level19Playable' )
  var i707 = data
  var i709 = i707[0]
  var i708 = new (System.Collections.Generic.List$1(Bridge.ns('Paper')))
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 1, i708, '')
  }
  i706._papers = i708
  var i711 = i707[1]
  var i710 = new (System.Collections.Generic.List$1(Bridge.ns('ObjectLevel')))
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 1, i710, '')
  }
  i706._objects = i710
  request.r(i707[2], i707[3], 0, i706, '_hand')
  request.r(i707[4], i707[5], 0, i706, '_handStart')
  request.r(i707[6], i707[7], 0, i706, '_handEnd')
  i706._handMoveDuration = i707[8]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i717 = data
  i716.usedByComposite = !!i717[0]
  i716.autoTiling = !!i717[1]
  i716.size = new pc.Vec2( i717[2], i717[3] )
  i716.edgeRadius = i717[4]
  i716.enabled = !!i717[5]
  i716.isTrigger = !!i717[6]
  i716.usedByEffector = !!i717[7]
  i716.density = i717[8]
  i716.offset = new pc.Vec2( i717[9], i717[10] )
  request.r(i717[11], i717[12], 0, i716, 'material')
  return i716
}

Deserializers["Paper"] = function (request, data, root) {
  var i718 = root || request.c( 'Paper' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, '_startPosition')
  request.r(i719[2], i719[3], 0, i718, '_boxCollider')
  request.r(i719[4], i719[5], 0, i718, '_audio')
  i718._grabPadding = i719[6]
  i718._dropPadding = i719[7]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i721 = data
  i720.color = new pc.Color(i721[0], i721[1], i721[2], i721[3])
  request.r(i721[4], i721[5], 0, i720, 'sprite')
  i720.flipX = !!i721[6]
  i720.flipY = !!i721[7]
  i720.drawMode = i721[8]
  i720.size = new pc.Vec2( i721[9], i721[10] )
  i720.tileMode = i721[11]
  i720.adaptiveModeThreshold = i721[12]
  i720.maskInteraction = i721[13]
  i720.spriteSortPoint = i721[14]
  i720.enabled = !!i721[15]
  request.r(i721[16], i721[17], 0, i720, 'sharedMaterial')
  var i723 = i721[18]
  var i722 = []
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 2, i722, '')
  }
  i720.sharedMaterials = i722
  i720.receiveShadows = !!i721[19]
  i720.shadowCastingMode = i721[20]
  i720.sortingLayerID = i721[21]
  i720.sortingOrder = i721[22]
  i720.lightmapIndex = i721[23]
  i720.lightmapSceneIndex = i721[24]
  i720.lightmapScaleOffset = new pc.Vec4( i721[25], i721[26], i721[27], i721[28] )
  i720.lightProbeUsage = i721[29]
  i720.reflectionProbeUsage = i721[30]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'additionalVertexStreams')
  i724.enabled = !!i725[2]
  request.r(i725[3], i725[4], 0, i724, 'sharedMaterial')
  var i727 = i725[5]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i724.sharedMaterials = i726
  i724.receiveShadows = !!i725[6]
  i724.shadowCastingMode = i725[7]
  i724.sortingLayerID = i725[8]
  i724.sortingOrder = i725[9]
  i724.lightmapIndex = i725[10]
  i724.lightmapSceneIndex = i725[11]
  i724.lightmapScaleOffset = new pc.Vec4( i725[12], i725[13], i725[14], i725[15] )
  i724.lightProbeUsage = i725[16]
  i724.reflectionProbeUsage = i725[17]
  return i724
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i728 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i729 = data
  i728.loop = !!i729[0]
  i728.timeScale = i729[1]
  request.r(i729[2], i729[3], 0, i728, 'skeletonDataAsset')
  i728.initialSkinName = i729[4]
  i728.fixPrefabOverrideViaMeshFilter = i729[5]
  i728.initialFlipX = !!i729[6]
  i728.initialFlipY = !!i729[7]
  i728.updateWhenInvisible = i729[8]
  i728.zSpacing = i729[9]
  i728.useClipping = !!i729[10]
  i728.immutableTriangles = !!i729[11]
  i728.pmaVertexColors = !!i729[12]
  i728.clearStateOnDisable = !!i729[13]
  i728.tintBlack = !!i729[14]
  i728.singleSubmesh = !!i729[15]
  i728.fixDrawOrder = !!i729[16]
  i728.addNormals = !!i729[17]
  i728.calculateTangents = !!i729[18]
  i728.maskInteraction = i729[19]
  i728.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i729[20], i728.maskMaterials)
  i728.disableRenderingOnOverride = !!i729[21]
  i728.updateTiming = i729[22]
  i728.unscaledTime = !!i729[23]
  i728._animationName = i729[24]
  var i731 = i729[25]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( i731[i + 0] );
  }
  i728.separatorSlotNames = i730
  i728.physicsPositionInheritanceFactor = new pc.Vec2( i729[26], i729[27] )
  i728.physicsRotationInheritanceFactor = i729[28]
  request.r(i729[29], i729[30], 0, i728, 'physicsMovementRelativeTo')
  return i728
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i732 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i733 = data
  var i735 = i733[0]
  var i734 = []
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 2, i734, '')
  }
  i732.materialsMaskDisabled = i734
  var i737 = i733[1]
  var i736 = []
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 2, i736, '')
  }
  i732.materialsInsideMask = i736
  var i739 = i733[2]
  var i738 = []
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 2, i738, '')
  }
  i732.materialsOutsideMask = i738
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'sharedMesh')
  return i740
}

Deserializers["Level19MoneyManager"] = function (request, data, root) {
  var i742 = root || request.c( 'Level19MoneyManager' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'moneyText')
  i742.currentMoney = i743[2]
  return i742
}

Deserializers["ObjectLevel"] = function (request, data, root) {
  var i744 = root || request.c( 'ObjectLevel' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, '_anim')
  i744._firstAnimName = i745[2]
  i744._secondAnimName = i745[3]
  i744._isDone = !!i745[4]
  i744._price = i745[5]
  request.r(i745[6], i745[7], 0, i744, '_audio')
  request.r(i745[8], i745[9], 0, i744, '_money')
  request.r(i745[10], i745[11], 0, i744, '_dog1')
  request.r(i745[12], i745[13], 0, i744, '_dog2')
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i747 = data
  i746.bodyType = i747[0]
  request.r(i747[1], i747[2], 0, i746, 'material')
  i746.simulated = !!i747[3]
  i746.useAutoMass = !!i747[4]
  i746.mass = i747[5]
  i746.drag = i747[6]
  i746.angularDrag = i747[7]
  i746.gravityScale = i747[8]
  i746.collisionDetectionMode = i747[9]
  i746.sleepMode = i747[10]
  i746.constraints = i747[11]
  return i746
}

Deserializers["MissingScriptCleaner"] = function (request, data, root) {
  var i748 = root || request.c( 'MissingScriptCleaner' )
  var i749 = data
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i751 = data
  i750.ambientIntensity = i751[0]
  i750.reflectionIntensity = i751[1]
  i750.ambientMode = i751[2]
  i750.ambientLight = new pc.Color(i751[3], i751[4], i751[5], i751[6])
  i750.ambientSkyColor = new pc.Color(i751[7], i751[8], i751[9], i751[10])
  i750.ambientGroundColor = new pc.Color(i751[11], i751[12], i751[13], i751[14])
  i750.ambientEquatorColor = new pc.Color(i751[15], i751[16], i751[17], i751[18])
  i750.fogColor = new pc.Color(i751[19], i751[20], i751[21], i751[22])
  i750.fogEndDistance = i751[23]
  i750.fogStartDistance = i751[24]
  i750.fogDensity = i751[25]
  i750.fog = !!i751[26]
  request.r(i751[27], i751[28], 0, i750, 'skybox')
  i750.fogMode = i751[29]
  var i753 = i751[30]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i753[i + 0]) );
  }
  i750.lightmaps = i752
  i750.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i751[31], i750.lightProbes)
  i750.lightmapsMode = i751[32]
  i750.mixedBakeMode = i751[33]
  i750.environmentLightingMode = i751[34]
  i750.ambientProbe = new pc.SphericalHarmonicsL2(i751[35])
  i750.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i751[36])
  i750.useReferenceAmbientProbe = !!i751[37]
  request.r(i751[38], i751[39], 0, i750, 'customReflection')
  request.r(i751[40], i751[41], 0, i750, 'defaultReflection')
  i750.defaultReflectionMode = i751[42]
  i750.defaultReflectionResolution = i751[43]
  i750.sunLightObjectId = i751[44]
  i750.pixelLightCount = i751[45]
  i750.defaultReflectionHDR = !!i751[46]
  i750.hasLightDataAsset = !!i751[47]
  i750.hasManualGenerate = !!i751[48]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'lightmapColor')
  request.r(i757[2], i757[3], 0, i756, 'lightmapDirection')
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i758 = root || new UnityEngine.LightProbes()
  var i759 = data
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i767 = data
  var i769 = i767[0]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i769[i + 0]));
  }
  i766.ShaderCompilationErrors = i768
  i766.name = i767[1]
  i766.guid = i767[2]
  var i771 = i767[3]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( i771[i + 0] );
  }
  i766.shaderDefinedKeywords = i770
  var i773 = i767[4]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i773[i + 0]) );
  }
  i766.passes = i772
  var i775 = i767[5]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i775[i + 0]) );
  }
  i766.usePasses = i774
  var i777 = i767[6]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i777[i + 0]) );
  }
  i766.defaultParameterValues = i776
  request.r(i767[7], i767[8], 0, i766, 'unityFallbackShader')
  i766.readDepth = !!i767[9]
  i766.isCreatedByShaderGraph = !!i767[10]
  i766.disableBatching = !!i767[11]
  i766.compiled = !!i767[12]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i781 = data
  i780.shaderName = i781[0]
  i780.errorMessage = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i784 = root || new pc.UnityShaderPass()
  var i785 = data
  i784.id = i785[0]
  i784.subShaderIndex = i785[1]
  i784.name = i785[2]
  i784.passType = i785[3]
  i784.grabPassTextureName = i785[4]
  i784.usePass = !!i785[5]
  i784.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[6], i784.zTest)
  i784.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[7], i784.zWrite)
  i784.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[8], i784.culling)
  i784.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i785[9], i784.blending)
  i784.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i785[10], i784.alphaBlending)
  i784.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[11], i784.colorWriteMask)
  i784.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[12], i784.offsetUnits)
  i784.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[13], i784.offsetFactor)
  i784.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[14], i784.stencilRef)
  i784.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[15], i784.stencilReadMask)
  i784.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[16], i784.stencilWriteMask)
  i784.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i785[17], i784.stencilOp)
  i784.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i785[18], i784.stencilOpFront)
  i784.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i785[19], i784.stencilOpBack)
  var i787 = i785[20]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i787[i + 0]) );
  }
  i784.tags = i786
  var i789 = i785[21]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( i789[i + 0] );
  }
  i784.passDefinedKeywords = i788
  var i791 = i785[22]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i791[i + 0]) );
  }
  i784.passDefinedKeywordGroups = i790
  var i793 = i785[23]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i793[i + 0]) );
  }
  i784.variants = i792
  var i795 = i785[24]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i795[i + 0]) );
  }
  i784.excludedVariants = i794
  i784.hasDepthReader = !!i785[25]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i797 = data
  i796.val = i797[0]
  i796.name = i797[1]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i799 = data
  i798.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[0], i798.src)
  i798.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[1], i798.dst)
  i798.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[2], i798.op)
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i801 = data
  i800.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[0], i800.pass)
  i800.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[1], i800.fail)
  i800.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[2], i800.zFail)
  i800.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[3], i800.comp)
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i805 = data
  i804.name = i805[0]
  i804.value = i805[1]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i809 = data
  var i811 = i809[0]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( i811[i + 0] );
  }
  i808.keywords = i810
  i808.hasDiscard = !!i809[1]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i815 = data
  i814.passId = i815[0]
  i814.subShaderIndex = i815[1]
  var i817 = i815[2]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i814.keywords = i816
  i814.vertexProgram = i815[3]
  i814.fragmentProgram = i815[4]
  i814.exportedForWebGl2 = !!i815[5]
  i814.readDepth = !!i815[6]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'shader')
  i820.pass = i821[2]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i825 = data
  i824.name = i825[0]
  i824.type = i825[1]
  i824.value = new pc.Vec4( i825[2], i825[3], i825[4], i825[5] )
  i824.textureValue = i825[6]
  i824.shaderPropertyFlag = i825[7]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i827 = data
  i826.name = i827[0]
  request.r(i827[1], i827[2], 0, i826, 'texture')
  i826.aabb = i827[3]
  i826.vertices = i827[4]
  i826.triangles = i827[5]
  i826.textureRect = UnityEngine.Rect.MinMaxRect(i827[6], i827[7], i827[8], i827[9])
  i826.packedRect = UnityEngine.Rect.MinMaxRect(i827[10], i827[11], i827[12], i827[13])
  i826.border = new pc.Vec4( i827[14], i827[15], i827[16], i827[17] )
  i826.transparency = i827[18]
  i826.bounds = i827[19]
  i826.pixelsPerUnit = i827[20]
  i826.textureWidth = i827[21]
  i826.textureHeight = i827[22]
  i826.nativeSize = new pc.Vec2( i827[23], i827[24] )
  i826.pivot = new pc.Vec2( i827[25], i827[26] )
  i826.textureRectOffset = new pc.Vec2( i827[27], i827[28] )
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i829 = data
  i828.name = i829[0]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i831 = data
  i830.name = i831[0]
  i830.ascent = i831[1]
  i830.originalLineHeight = i831[2]
  i830.fontSize = i831[3]
  var i833 = i831[4]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i833[i + 0]) );
  }
  i830.characterInfo = i832
  request.r(i831[5], i831[6], 0, i830, 'texture')
  i830.originalFontSize = i831[7]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i837 = data
  i836.index = i837[0]
  i836.advance = i837[1]
  i836.bearing = i837[2]
  i836.glyphWidth = i837[3]
  i836.glyphHeight = i837[4]
  i836.minX = i837[5]
  i836.maxX = i837[6]
  i836.minY = i837[7]
  i836.maxY = i837[8]
  i836.uvBottomLeftX = i837[9]
  i836.uvBottomLeftY = i837[10]
  i836.uvBottomRightX = i837[11]
  i836.uvBottomRightY = i837[12]
  i836.uvTopLeftX = i837[13]
  i836.uvTopLeftY = i837[14]
  i836.uvTopRightX = i837[15]
  i836.uvTopRightY = i837[16]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i839 = data
  i838.name = i839[0]
  i838.bytes64 = i839[1]
  i838.data = i839[2]
  return i838
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'atlas')
  i840.normalStyle = i841[2]
  i840.normalSpacingOffset = i841[3]
  i840.boldStyle = i841[4]
  i840.boldSpacing = i841[5]
  i840.italicStyle = i841[6]
  i840.tabSize = i841[7]
  i840.hashCode = i841[8]
  request.r(i841[9], i841[10], 0, i840, 'material')
  i840.materialHashCode = i841[11]
  i840.m_Version = i841[12]
  i840.m_SourceFontFileGUID = i841[13]
  request.r(i841[14], i841[15], 0, i840, 'm_SourceFontFile_EditorRef')
  request.r(i841[16], i841[17], 0, i840, 'm_SourceFontFile')
  i840.m_AtlasPopulationMode = i841[18]
  i840.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i841[19], i840.m_FaceInfo)
  var i843 = i841[20]
  var i842 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i843.length; i += 1) {
    i842.add(request.d('UnityEngine.TextCore.Glyph', i843[i + 0]));
  }
  i840.m_GlyphTable = i842
  var i845 = i841[21]
  var i844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i845.length; i += 1) {
    i844.add(request.d('TMPro.TMP_Character', i845[i + 0]));
  }
  i840.m_CharacterTable = i844
  var i847 = i841[22]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i840.m_AtlasTextures = i846
  i840.m_AtlasTextureIndex = i841[23]
  i840.m_IsMultiAtlasTexturesEnabled = !!i841[24]
  i840.m_ClearDynamicDataOnBuild = !!i841[25]
  var i849 = i841[26]
  var i848 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i849.length; i += 1) {
    i848.add(request.d('UnityEngine.TextCore.GlyphRect', i849[i + 0]));
  }
  i840.m_UsedGlyphRects = i848
  var i851 = i841[27]
  var i850 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i851.length; i += 1) {
    i850.add(request.d('UnityEngine.TextCore.GlyphRect', i851[i + 0]));
  }
  i840.m_FreeGlyphRects = i850
  i840.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i841[28], i840.m_fontInfo)
  i840.m_AtlasWidth = i841[29]
  i840.m_AtlasHeight = i841[30]
  i840.m_AtlasPadding = i841[31]
  i840.m_AtlasRenderMode = i841[32]
  var i853 = i841[33]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i853.length; i += 1) {
    i852.add(request.d('TMPro.TMP_Glyph', i853[i + 0]));
  }
  i840.m_glyphInfoList = i852
  i840.m_KerningTable = request.d('TMPro.KerningTable', i841[34], i840.m_KerningTable)
  i840.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i841[35], i840.m_FontFeatureTable)
  var i855 = i841[36]
  var i854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 1, i854, '')
  }
  i840.fallbackFontAssets = i854
  var i857 = i841[37]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 1, i856, '')
  }
  i840.m_FallbackFontAssetTable = i856
  i840.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i841[38], i840.m_CreationSettings)
  var i859 = i841[39]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('TMPro.TMP_FontWeightPair', i859[i + 0]) );
  }
  i840.m_FontWeightTable = i858
  var i861 = i841[40]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('TMPro.TMP_FontWeightPair', i861[i + 0]) );
  }
  i840.fontWeights = i860
  return i840
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i863 = data
  i862.m_FaceIndex = i863[0]
  i862.m_FamilyName = i863[1]
  i862.m_StyleName = i863[2]
  i862.m_PointSize = i863[3]
  i862.m_Scale = i863[4]
  i862.m_UnitsPerEM = i863[5]
  i862.m_LineHeight = i863[6]
  i862.m_AscentLine = i863[7]
  i862.m_CapLine = i863[8]
  i862.m_MeanLine = i863[9]
  i862.m_Baseline = i863[10]
  i862.m_DescentLine = i863[11]
  i862.m_SuperscriptOffset = i863[12]
  i862.m_SuperscriptSize = i863[13]
  i862.m_SubscriptOffset = i863[14]
  i862.m_SubscriptSize = i863[15]
  i862.m_UnderlineOffset = i863[16]
  i862.m_UnderlineThickness = i863[17]
  i862.m_StrikethroughOffset = i863[18]
  i862.m_StrikethroughThickness = i863[19]
  i862.m_TabWidth = i863[20]
  return i862
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i867 = data
  i866.m_Index = i867[0]
  i866.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i867[1], i866.m_Metrics)
  i866.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i867[2], i866.m_GlyphRect)
  i866.m_Scale = i867[3]
  i866.m_AtlasIndex = i867[4]
  i866.m_ClassDefinitionType = i867[5]
  return i866
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i869 = data
  i868.m_Width = i869[0]
  i868.m_Height = i869[1]
  i868.m_HorizontalBearingX = i869[2]
  i868.m_HorizontalBearingY = i869[3]
  i868.m_HorizontalAdvance = i869[4]
  return i868
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i871 = data
  i870.m_X = i871[0]
  i870.m_Y = i871[1]
  i870.m_Width = i871[2]
  i870.m_Height = i871[3]
  return i870
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TMP_Character' )
  var i875 = data
  i874.m_ElementType = i875[0]
  i874.m_Unicode = i875[1]
  i874.m_GlyphIndex = i875[2]
  i874.m_Scale = i875[3]
  return i874
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i880 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i881 = data
  i880.Name = i881[0]
  i880.PointSize = i881[1]
  i880.Scale = i881[2]
  i880.CharacterCount = i881[3]
  i880.LineHeight = i881[4]
  i880.Baseline = i881[5]
  i880.Ascender = i881[6]
  i880.CapHeight = i881[7]
  i880.Descender = i881[8]
  i880.CenterLine = i881[9]
  i880.SuperscriptOffset = i881[10]
  i880.SubscriptOffset = i881[11]
  i880.SubSize = i881[12]
  i880.Underline = i881[13]
  i880.UnderlineThickness = i881[14]
  i880.strikethrough = i881[15]
  i880.strikethroughThickness = i881[16]
  i880.TabWidth = i881[17]
  i880.Padding = i881[18]
  i880.AtlasWidth = i881[19]
  i880.AtlasHeight = i881[20]
  return i880
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.TMP_Glyph' )
  var i885 = data
  i884.id = i885[0]
  i884.x = i885[1]
  i884.y = i885[2]
  i884.width = i885[3]
  i884.height = i885[4]
  i884.xOffset = i885[5]
  i884.yOffset = i885[6]
  i884.xAdvance = i885[7]
  i884.scale = i885[8]
  return i884
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i886 = root || request.c( 'TMPro.KerningTable' )
  var i887 = data
  var i889 = i887[0]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(request.d('TMPro.KerningPair', i889[i + 0]));
  }
  i886.kerningPairs = i888
  return i886
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i892 = root || request.c( 'TMPro.KerningPair' )
  var i893 = data
  i892.xOffset = i893[0]
  i892.m_FirstGlyph = i893[1]
  i892.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i893[2], i892.m_FirstGlyphAdjustments)
  i892.m_SecondGlyph = i893[3]
  i892.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i893[4], i892.m_SecondGlyphAdjustments)
  i892.m_IgnoreSpacingAdjustments = !!i893[5]
  return i892
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i894 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i895 = data
  var i897 = i895[0]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i897.length; i += 1) {
    i896.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i897[i + 0]));
  }
  i894.m_GlyphPairAdjustmentRecords = i896
  return i894
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i900 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i901 = data
  i900.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i901[0], i900.m_FirstAdjustmentRecord)
  i900.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i901[1], i900.m_SecondAdjustmentRecord)
  i900.m_FeatureLookupFlags = i901[2]
  return i900
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i904 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i905 = data
  i904.sourceFontFileName = i905[0]
  i904.sourceFontFileGUID = i905[1]
  i904.pointSizeSamplingMode = i905[2]
  i904.pointSize = i905[3]
  i904.padding = i905[4]
  i904.packingMode = i905[5]
  i904.atlasWidth = i905[6]
  i904.atlasHeight = i905[7]
  i904.characterSetSelectionMode = i905[8]
  i904.characterSequence = i905[9]
  i904.referencedFontAssetGUID = i905[10]
  i904.referencedTextAssetGUID = i905[11]
  i904.fontStyle = i905[12]
  i904.fontStyleModifier = i905[13]
  i904.renderMode = i905[14]
  i904.includeFontFeatures = !!i905[15]
  return i904
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i908 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'regularTypeface')
  request.r(i909[2], i909[3], 0, i908, 'italicTypeface')
  return i908
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i910 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i911 = data
  var i913 = i911[0]
  var i912 = []
  for(var i = 0; i < i913.length; i += 2) {
  request.r(i913[i + 0], i913[i + 1], 2, i912, '')
  }
  i910.atlasAssets = i912
  i910.scale = i911[1]
  request.r(i911[2], i911[3], 0, i910, 'skeletonJSON')
  i910.isUpgradingBlendModeMaterials = !!i911[4]
  i910.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i911[5], i910.blendModeMaterials)
  var i915 = i911[6]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 1, i914, '')
  }
  i910.skeletonDataModifiers = i914
  var i917 = i911[7]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( i917[i + 0] );
  }
  i910.fromAnimation = i916
  var i919 = i911[8]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( i919[i + 0] );
  }
  i910.toAnimation = i918
  i910.duration = i911[9]
  i910.defaultMix = i911[10]
  request.r(i911[11], i911[12], 0, i910, 'controller')
  return i910
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i922 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i923 = data
  i922.applyAdditiveMaterial = !!i923[0]
  var i925 = i923[1]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i925.length; i += 1) {
    i924.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i925[i + 0]));
  }
  i922.additiveMaterials = i924
  var i927 = i923[2]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i927[i + 0]));
  }
  i922.multiplyMaterials = i926
  var i929 = i923[3]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i929.length; i += 1) {
    i928.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i929[i + 0]));
  }
  i922.screenMaterials = i928
  i922.requiresBlendModeMaterials = !!i923[4]
  return i922
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i932 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i933 = data
  i932.pageName = i933[0]
  request.r(i933[1], i933[2], 0, i932, 'material')
  return i932
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i936 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'atlasFile')
  var i939 = i937[2]
  var i938 = []
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 2, i938, '')
  }
  i936.materials = i938
  i936.textureLoadingMode = i937[3]
  request.r(i937[4], i937[5], 0, i936, 'onDemandTextureLoader')
  return i936
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i940 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i941 = data
  i940.useSafeMode = !!i941[0]
  i940.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i941[1], i940.safeModeOptions)
  i940.timeScale = i941[2]
  i940.unscaledTimeScale = i941[3]
  i940.useSmoothDeltaTime = !!i941[4]
  i940.maxSmoothUnscaledTime = i941[5]
  i940.rewindCallbackMode = i941[6]
  i940.showUnityEditorReport = !!i941[7]
  i940.logBehaviour = i941[8]
  i940.drawGizmos = !!i941[9]
  i940.defaultRecyclable = !!i941[10]
  i940.defaultAutoPlay = i941[11]
  i940.defaultUpdateType = i941[12]
  i940.defaultTimeScaleIndependent = !!i941[13]
  i940.defaultEaseType = i941[14]
  i940.defaultEaseOvershootOrAmplitude = i941[15]
  i940.defaultEasePeriod = i941[16]
  i940.defaultAutoKill = !!i941[17]
  i940.defaultLoopType = i941[18]
  i940.debugMode = !!i941[19]
  i940.debugStoreTargetId = !!i941[20]
  i940.showPreviewPanel = !!i941[21]
  i940.storeSettingsLocation = i941[22]
  i940.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i941[23], i940.modules)
  i940.createASMDEF = !!i941[24]
  i940.showPlayingTweens = !!i941[25]
  i940.showPausedTweens = !!i941[26]
  return i940
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i942 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i943 = data
  i942.logBehaviour = i943[0]
  i942.nestedTweenFailureBehaviour = i943[1]
  return i942
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i944 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i945 = data
  i944.showPanel = !!i945[0]
  i944.audioEnabled = !!i945[1]
  i944.physicsEnabled = !!i945[2]
  i944.physics2DEnabled = !!i945[3]
  i944.spriteEnabled = !!i945[4]
  i944.uiEnabled = !!i945[5]
  i944.textMeshProEnabled = !!i945[6]
  i944.tk2DEnabled = !!i945[7]
  i944.deAudioEnabled = !!i945[8]
  i944.deUnityExtendedEnabled = !!i945[9]
  i944.epoOutlineEnabled = !!i945[10]
  return i944
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.TMP_Settings' )
  var i947 = data
  i946.m_enableWordWrapping = !!i947[0]
  i946.m_enableKerning = !!i947[1]
  i946.m_enableExtraPadding = !!i947[2]
  i946.m_enableTintAllSprites = !!i947[3]
  i946.m_enableParseEscapeCharacters = !!i947[4]
  i946.m_EnableRaycastTarget = !!i947[5]
  i946.m_GetFontFeaturesAtRuntime = !!i947[6]
  i946.m_missingGlyphCharacter = i947[7]
  i946.m_warningsDisabled = !!i947[8]
  request.r(i947[9], i947[10], 0, i946, 'm_defaultFontAsset')
  i946.m_defaultFontAssetPath = i947[11]
  i946.m_defaultFontSize = i947[12]
  i946.m_defaultAutoSizeMinRatio = i947[13]
  i946.m_defaultAutoSizeMaxRatio = i947[14]
  i946.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i947[15], i947[16] )
  i946.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i947[17], i947[18] )
  i946.m_autoSizeTextContainer = !!i947[19]
  i946.m_IsTextObjectScaleStatic = !!i947[20]
  var i949 = i947[21]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 1, i948, '')
  }
  i946.m_fallbackFontAssets = i948
  i946.m_matchMaterialPreset = !!i947[22]
  request.r(i947[23], i947[24], 0, i946, 'm_defaultSpriteAsset')
  i946.m_defaultSpriteAssetPath = i947[25]
  i946.m_enableEmojiSupport = !!i947[26]
  i946.m_MissingCharacterSpriteUnicode = i947[27]
  i946.m_defaultColorGradientPresetsPath = i947[28]
  request.r(i947[29], i947[30], 0, i946, 'm_defaultStyleSheet')
  i946.m_StyleSheetsResourcePath = i947[31]
  request.r(i947[32], i947[33], 0, i946, 'm_leadingCharacters')
  request.r(i947[34], i947[35], 0, i946, 'm_followingCharacters')
  i946.m_UseModernHangulLineBreakingRules = !!i947[36]
  return i946
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i951 = data
  i950.m_GlyphIndex = i951[0]
  i950.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i951[1], i950.m_GlyphValueRecord)
  return i950
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i953 = data
  i952.m_XPlacement = i953[0]
  i952.m_YPlacement = i953[1]
  i952.m_XAdvance = i953[2]
  i952.m_YAdvance = i953[3]
  return i952
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'spriteSheet')
  var i957 = i955[2]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('TMPro.TMP_Sprite', i957[i + 0]));
  }
  i954.spriteInfoList = i956
  var i959 = i955[3]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i959.length; i += 2) {
  request.r(i959[i + 0], i959[i + 1], 1, i958, '')
  }
  i954.fallbackSpriteAssets = i958
  i954.hashCode = i955[4]
  request.r(i955[5], i955[6], 0, i954, 'material')
  i954.materialHashCode = i955[7]
  i954.m_Version = i955[8]
  i954.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i955[9], i954.m_FaceInfo)
  var i961 = i955[10]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i961.length; i += 1) {
    i960.add(request.d('TMPro.TMP_SpriteCharacter', i961[i + 0]));
  }
  i954.m_SpriteCharacterTable = i960
  var i963 = i955[11]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i963.length; i += 1) {
    i962.add(request.d('TMPro.TMP_SpriteGlyph', i963[i + 0]));
  }
  i954.m_SpriteGlyphTable = i962
  return i954
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i966 = root || request.c( 'TMPro.TMP_Sprite' )
  var i967 = data
  i966.name = i967[0]
  i966.hashCode = i967[1]
  i966.unicode = i967[2]
  i966.pivot = new pc.Vec2( i967[3], i967[4] )
  request.r(i967[5], i967[6], 0, i966, 'sprite')
  i966.id = i967[7]
  i966.x = i967[8]
  i966.y = i967[9]
  i966.width = i967[10]
  i966.height = i967[11]
  i966.xOffset = i967[12]
  i966.yOffset = i967[13]
  i966.xAdvance = i967[14]
  i966.scale = i967[15]
  return i966
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i973 = data
  i972.m_Name = i973[0]
  i972.m_HashCode = i973[1]
  i972.m_ElementType = i973[2]
  i972.m_Unicode = i973[3]
  i972.m_GlyphIndex = i973[4]
  i972.m_Scale = i973[5]
  return i972
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i976 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'sprite')
  i976.m_Index = i977[2]
  i976.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i977[3], i976.m_Metrics)
  i976.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i977[4], i976.m_GlyphRect)
  i976.m_Scale = i977[5]
  i976.m_AtlasIndex = i977[6]
  i976.m_ClassDefinitionType = i977[7]
  return i976
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i979 = data
  var i981 = i979[0]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i981.length; i += 1) {
    i980.add(request.d('TMPro.TMP_Style', i981[i + 0]));
  }
  i978.m_StyleList = i980
  return i978
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i984 = root || request.c( 'TMPro.TMP_Style' )
  var i985 = data
  i984.m_Name = i985[0]
  i984.m_HashCode = i985[1]
  i984.m_OpeningDefinition = i985[2]
  i984.m_ClosingDefinition = i985[3]
  i984.m_OpeningTagArray = i985[4]
  i984.m_ClosingTagArray = i985[5]
  i984.m_OpeningTagUnicodeArray = i985[6]
  i984.m_ClosingTagUnicodeArray = i985[7]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i987 = data
  var i989 = i987[0]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i989[i + 0]) );
  }
  i986.files = i988
  i986.componentToPrefabIds = i987[1]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i993 = data
  i992.path = i993[0]
  request.r(i993[1], i993[2], 0, i992, 'unityObject')
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i995 = data
  var i997 = i995[0]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i997[i + 0]) );
  }
  i994.scriptsExecutionOrder = i996
  var i999 = i995[1]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i999[i + 0]) );
  }
  i994.sortingLayers = i998
  var i1001 = i995[2]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1001[i + 0]) );
  }
  i994.cullingLayers = i1000
  i994.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i995[3], i994.timeSettings)
  i994.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i995[4], i994.physicsSettings)
  i994.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i995[5], i994.physics2DSettings)
  i994.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i995[6], i994.qualitySettings)
  i994.enableRealtimeShadows = !!i995[7]
  i994.enableAutoInstancing = !!i995[8]
  i994.enableStaticBatching = !!i995[9]
  i994.enableDynamicBatching = !!i995[10]
  i994.lightmapEncodingQuality = i995[11]
  i994.desiredColorSpace = i995[12]
  var i1003 = i995[13]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( i1003[i + 0] );
  }
  i994.allTags = i1002
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1007 = data
  i1006.name = i1007[0]
  i1006.value = i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1011 = data
  i1010.id = i1011[0]
  i1010.name = i1011[1]
  i1010.value = i1011[2]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1015 = data
  i1014.id = i1015[0]
  i1014.name = i1015[1]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1017 = data
  i1016.fixedDeltaTime = i1017[0]
  i1016.maximumDeltaTime = i1017[1]
  i1016.timeScale = i1017[2]
  i1016.maximumParticleTimestep = i1017[3]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1019 = data
  i1018.gravity = new pc.Vec3( i1019[0], i1019[1], i1019[2] )
  i1018.defaultSolverIterations = i1019[3]
  i1018.bounceThreshold = i1019[4]
  i1018.autoSyncTransforms = !!i1019[5]
  i1018.autoSimulation = !!i1019[6]
  var i1021 = i1019[7]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1021[i + 0]) );
  }
  i1018.collisionMatrix = i1020
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1025 = data
  i1024.enabled = !!i1025[0]
  i1024.layerId = i1025[1]
  i1024.otherLayerId = i1025[2]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'material')
  i1026.gravity = new pc.Vec2( i1027[2], i1027[3] )
  i1026.positionIterations = i1027[4]
  i1026.velocityIterations = i1027[5]
  i1026.velocityThreshold = i1027[6]
  i1026.maxLinearCorrection = i1027[7]
  i1026.maxAngularCorrection = i1027[8]
  i1026.maxTranslationSpeed = i1027[9]
  i1026.maxRotationSpeed = i1027[10]
  i1026.baumgarteScale = i1027[11]
  i1026.baumgarteTOIScale = i1027[12]
  i1026.timeToSleep = i1027[13]
  i1026.linearSleepTolerance = i1027[14]
  i1026.angularSleepTolerance = i1027[15]
  i1026.defaultContactOffset = i1027[16]
  i1026.autoSimulation = !!i1027[17]
  i1026.queriesHitTriggers = !!i1027[18]
  i1026.queriesStartInColliders = !!i1027[19]
  i1026.callbacksOnDisable = !!i1027[20]
  i1026.reuseCollisionCallbacks = !!i1027[21]
  i1026.autoSyncTransforms = !!i1027[22]
  var i1029 = i1027[23]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1029[i + 0]) );
  }
  i1026.collisionMatrix = i1028
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1033 = data
  i1032.enabled = !!i1033[0]
  i1032.layerId = i1033[1]
  i1032.otherLayerId = i1033[2]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1035 = data
  var i1037 = i1035[0]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1037[i + 0]) );
  }
  i1034.qualityLevels = i1036
  var i1039 = i1035[1]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1034.names = i1038
  i1034.shadows = i1035[2]
  i1034.anisotropicFiltering = i1035[3]
  i1034.antiAliasing = i1035[4]
  i1034.lodBias = i1035[5]
  i1034.shadowCascades = i1035[6]
  i1034.shadowDistance = i1035[7]
  i1034.shadowmaskMode = i1035[8]
  i1034.shadowProjection = i1035[9]
  i1034.shadowResolution = i1035[10]
  i1034.softParticles = !!i1035[11]
  i1034.softVegetation = !!i1035[12]
  i1034.activeColorSpace = i1035[13]
  i1034.desiredColorSpace = i1035[14]
  i1034.masterTextureLimit = i1035[15]
  i1034.maxQueuedFrames = i1035[16]
  i1034.particleRaycastBudget = i1035[17]
  i1034.pixelLightCount = i1035[18]
  i1034.realtimeReflectionProbes = !!i1035[19]
  i1034.shadowCascade2Split = i1035[20]
  i1034.shadowCascade4Split = new pc.Vec3( i1035[21], i1035[22], i1035[23] )
  i1034.streamingMipmapsActive = !!i1035[24]
  i1034.vSyncCount = i1035[25]
  i1034.asyncUploadBufferSize = i1035[26]
  i1034.asyncUploadTimeSlice = i1035[27]
  i1034.billboardsFaceCameraPosition = !!i1035[28]
  i1034.shadowNearPlaneOffset = i1035[29]
  i1034.streamingMipmapsMemoryBudget = i1035[30]
  i1034.maximumLODLevel = i1035[31]
  i1034.streamingMipmapsAddAllCameras = !!i1035[32]
  i1034.streamingMipmapsMaxLevelReduction = i1035[33]
  i1034.streamingMipmapsRenderersPerFrame = i1035[34]
  i1034.resolutionScalingFixedDPIFactor = i1035[35]
  i1034.streamingMipmapsMaxFileIORequests = i1035[36]
  i1034.currentQualityLevel = i1035[37]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1045 = data
  i1044.weight = i1045[0]
  i1044.vertices = i1045[1]
  i1044.normals = i1045[2]
  i1044.tangents = i1045[3]
  return i1044
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1046 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1047 = data
  i1046.xPlacement = i1047[0]
  i1046.yPlacement = i1047[1]
  i1046.xAdvance = i1047[2]
  i1046.yAdvance = i1047[3]
  return i1046
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[3],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[41],"70":[41],"71":[41],"72":[41],"73":[41],"74":[41],"75":[41],"76":[41],"77":[41],"78":[41],"79":[41],"80":[41],"81":[41],"82":[3],"83":[37],"84":[85],"86":[85],"11":[10],"6":[3],"20":[12],"87":[88],"89":[36],"90":[88],"91":[10],"92":[10],"13":[11],"19":[21,10],"93":[10],"12":[11],"94":[10],"95":[10],"96":[10],"97":[10],"98":[10],"99":[10],"100":[10],"30":[10],"101":[10],"17":[21,10],"102":[10],"103":[10],"104":[10],"105":[10],"106":[21,10],"107":[10],"108":[8],"109":[8],"9":[8],"110":[8],"111":[3],"112":[3],"113":[114],"115":[3],"116":[117],"118":[10],"119":[21,10],"38":[37],"28":[21,10],"120":[121,37],"122":[37],"123":[37,39],"124":[62],"125":[41],"126":[117],"127":[128],"129":[10],"130":[37,10],"18":[10,21],"131":[10],"132":[21,10],"133":[37],"134":[21,10],"135":[10],"136":[88]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAutoSize","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","ResponsiveCanvasScaler","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","TMPro.TMP_FontAsset","UnityEngine.Material","DG.Tweening.DOTweenAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.UI.Mask","AudioController","Level19Playable","Paper","ObjectLevel","UnityEngine.BoxCollider2D","UnityEngine.SpriteRenderer","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","Level19MoneyManager","UnityEngine.Rigidbody2D","MissingScriptCleaner","UnityEngine.Mesh","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "356.1";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BM_V33_NgocBTU_HuyNQ";

Deserializers.lunaAppID = "34530";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1857";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5162";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, prefabs, mecanim-wasm";

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

Deserializers.buildID = "f3dcce99-43b2-493a-bebd-30cb44e856e5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

