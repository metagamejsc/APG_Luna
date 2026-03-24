var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3552 = root || request.c( 'UnityEngine.JointSpring' )
  var i3553 = data
  i3552.spring = i3553[0]
  i3552.damper = i3553[1]
  i3552.targetPosition = i3553[2]
  return i3552
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3554 = root || request.c( 'UnityEngine.JointMotor' )
  var i3555 = data
  i3554.m_TargetVelocity = i3555[0]
  i3554.m_Force = i3555[1]
  i3554.m_FreeSpin = i3555[2]
  return i3554
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3556 = root || request.c( 'UnityEngine.JointLimits' )
  var i3557 = data
  i3556.m_Min = i3557[0]
  i3556.m_Max = i3557[1]
  i3556.m_Bounciness = i3557[2]
  i3556.m_BounceMinVelocity = i3557[3]
  i3556.m_ContactDistance = i3557[4]
  i3556.minBounce = i3557[5]
  i3556.maxBounce = i3557[6]
  return i3556
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3558 = root || request.c( 'UnityEngine.JointDrive' )
  var i3559 = data
  i3558.m_PositionSpring = i3559[0]
  i3558.m_PositionDamper = i3559[1]
  i3558.m_MaximumForce = i3559[2]
  i3558.m_UseAcceleration = i3559[3]
  return i3558
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3560 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3561 = data
  i3560.m_Spring = i3561[0]
  i3560.m_Damper = i3561[1]
  return i3560
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3562 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3563 = data
  i3562.m_Limit = i3563[0]
  i3562.m_Bounciness = i3563[1]
  i3562.m_ContactDistance = i3563[2]
  return i3562
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3564 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3565 = data
  i3564.m_ExtremumSlip = i3565[0]
  i3564.m_ExtremumValue = i3565[1]
  i3564.m_AsymptoteSlip = i3565[2]
  i3564.m_AsymptoteValue = i3565[3]
  i3564.m_Stiffness = i3565[4]
  return i3564
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3566 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3567 = data
  i3566.m_LowerAngle = i3567[0]
  i3566.m_UpperAngle = i3567[1]
  return i3566
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3568 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3569 = data
  i3568.m_MotorSpeed = i3569[0]
  i3568.m_MaximumMotorTorque = i3569[1]
  return i3568
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3570 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3571 = data
  i3570.m_DampingRatio = i3571[0]
  i3570.m_Frequency = i3571[1]
  i3570.m_Angle = i3571[2]
  return i3570
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3572 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3573 = data
  i3572.m_LowerTranslation = i3573[0]
  i3572.m_UpperTranslation = i3573[1]
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3575 = data
  i3574.name = i3575[0]
  i3574.width = i3575[1]
  i3574.height = i3575[2]
  i3574.mipmapCount = i3575[3]
  i3574.anisoLevel = i3575[4]
  i3574.filterMode = i3575[5]
  i3574.hdr = !!i3575[6]
  i3574.format = i3575[7]
  i3574.wrapMode = i3575[8]
  i3574.alphaIsTransparency = !!i3575[9]
  i3574.alphaSource = i3575[10]
  i3574.graphicsFormat = i3575[11]
  i3574.sRGBTexture = !!i3575[12]
  i3574.desiredColorSpace = i3575[13]
  i3574.wrapU = i3575[14]
  i3574.wrapV = i3575[15]
  return i3574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3576 = root || new pc.UnityMaterial()
  var i3577 = data
  i3576.name = i3577[0]
  request.r(i3577[1], i3577[2], 0, i3576, 'shader')
  i3576.renderQueue = i3577[3]
  i3576.enableInstancing = !!i3577[4]
  var i3579 = i3577[5]
  var i3578 = []
  for(var i = 0; i < i3579.length; i += 1) {
    i3578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3579[i + 0]) );
  }
  i3576.floatParameters = i3578
  var i3581 = i3577[6]
  var i3580 = []
  for(var i = 0; i < i3581.length; i += 1) {
    i3580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3581[i + 0]) );
  }
  i3576.colorParameters = i3580
  var i3583 = i3577[7]
  var i3582 = []
  for(var i = 0; i < i3583.length; i += 1) {
    i3582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3583[i + 0]) );
  }
  i3576.vectorParameters = i3582
  var i3585 = i3577[8]
  var i3584 = []
  for(var i = 0; i < i3585.length; i += 1) {
    i3584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3585[i + 0]) );
  }
  i3576.textureParameters = i3584
  var i3587 = i3577[9]
  var i3586 = []
  for(var i = 0; i < i3587.length; i += 1) {
    i3586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3587[i + 0]) );
  }
  i3576.materialFlags = i3586
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3591 = data
  i3590.name = i3591[0]
  i3590.value = i3591[1]
  return i3590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3595 = data
  i3594.name = i3595[0]
  i3594.value = new pc.Color(i3595[1], i3595[2], i3595[3], i3595[4])
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3599 = data
  i3598.name = i3599[0]
  i3598.value = new pc.Vec4( i3599[1], i3599[2], i3599[3], i3599[4] )
  return i3598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3603 = data
  i3602.name = i3603[0]
  request.r(i3603[1], i3603[2], 0, i3602, 'value')
  return i3602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3607 = data
  i3606.name = i3607[0]
  i3606.enabled = !!i3607[1]
  return i3606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3609 = data
  i3608.name = i3609[0]
  i3608.index = i3609[1]
  i3608.startup = !!i3609[2]
  return i3608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3611 = data
  i3610.position = new pc.Vec3( i3611[0], i3611[1], i3611[2] )
  i3610.scale = new pc.Vec3( i3611[3], i3611[4], i3611[5] )
  i3610.rotation = new pc.Quat(i3611[6], i3611[7], i3611[8], i3611[9])
  return i3610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3613 = data
  i3612.aspect = i3613[0]
  i3612.orthographic = !!i3613[1]
  i3612.orthographicSize = i3613[2]
  i3612.backgroundColor = new pc.Color(i3613[3], i3613[4], i3613[5], i3613[6])
  i3612.nearClipPlane = i3613[7]
  i3612.farClipPlane = i3613[8]
  i3612.fieldOfView = i3613[9]
  i3612.depth = i3613[10]
  i3612.clearFlags = i3613[11]
  i3612.cullingMask = i3613[12]
  i3612.rect = i3613[13]
  request.r(i3613[14], i3613[15], 0, i3612, 'targetTexture')
  i3612.usePhysicalProperties = !!i3613[16]
  i3612.focalLength = i3613[17]
  i3612.sensorSize = new pc.Vec2( i3613[18], i3613[19] )
  i3612.lensShift = new pc.Vec2( i3613[20], i3613[21] )
  i3612.gateFit = i3613[22]
  i3612.commandBufferCount = i3613[23]
  i3612.cameraType = i3613[24]
  i3612.enabled = !!i3613[25]
  return i3612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3615 = data
  i3614.name = i3615[0]
  i3614.tagId = i3615[1]
  i3614.enabled = !!i3615[2]
  i3614.isStatic = !!i3615[3]
  i3614.layer = i3615[4]
  return i3614
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3616 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3617 = data
  request.r(i3617[0], i3617[1], 0, i3616, 'm_FirstSelected')
  i3616.m_sendNavigationEvents = !!i3617[2]
  i3616.m_DragThreshold = i3617[3]
  return i3616
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3618 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3619 = data
  i3618.m_HorizontalAxis = i3619[0]
  i3618.m_VerticalAxis = i3619[1]
  i3618.m_SubmitButton = i3619[2]
  i3618.m_CancelButton = i3619[3]
  i3618.m_InputActionsPerSecond = i3619[4]
  i3618.m_RepeatDelay = i3619[5]
  i3618.m_ForceModuleActive = !!i3619[6]
  i3618.m_SendPointerHoverToParent = !!i3619[7]
  return i3618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3621 = data
  i3620.pivot = new pc.Vec2( i3621[0], i3621[1] )
  i3620.anchorMin = new pc.Vec2( i3621[2], i3621[3] )
  i3620.anchorMax = new pc.Vec2( i3621[4], i3621[5] )
  i3620.sizeDelta = new pc.Vec2( i3621[6], i3621[7] )
  i3620.anchoredPosition3D = new pc.Vec3( i3621[8], i3621[9], i3621[10] )
  i3620.rotation = new pc.Quat(i3621[11], i3621[12], i3621[13], i3621[14])
  i3620.scale = new pc.Vec3( i3621[15], i3621[16], i3621[17] )
  return i3620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3623 = data
  i3622.planeDistance = i3623[0]
  i3622.referencePixelsPerUnit = i3623[1]
  i3622.isFallbackOverlay = !!i3623[2]
  i3622.renderMode = i3623[3]
  i3622.renderOrder = i3623[4]
  i3622.sortingLayerName = i3623[5]
  i3622.sortingOrder = i3623[6]
  i3622.scaleFactor = i3623[7]
  request.r(i3623[8], i3623[9], 0, i3622, 'worldCamera')
  i3622.overrideSorting = !!i3623[10]
  i3622.pixelPerfect = !!i3623[11]
  i3622.targetDisplay = i3623[12]
  i3622.overridePixelPerfect = !!i3623[13]
  i3622.enabled = !!i3623[14]
  return i3622
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3624 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3625 = data
  i3624.m_UiScaleMode = i3625[0]
  i3624.m_ReferencePixelsPerUnit = i3625[1]
  i3624.m_ScaleFactor = i3625[2]
  i3624.m_ReferenceResolution = new pc.Vec2( i3625[3], i3625[4] )
  i3624.m_ScreenMatchMode = i3625[5]
  i3624.m_MatchWidthOrHeight = i3625[6]
  i3624.m_PhysicalUnit = i3625[7]
  i3624.m_FallbackScreenDPI = i3625[8]
  i3624.m_DefaultSpriteDPI = i3625[9]
  i3624.m_DynamicPixelsPerUnit = i3625[10]
  i3624.m_PresetInfoIsWorld = !!i3625[11]
  return i3624
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3626 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3627 = data
  i3626.m_IgnoreReversedGraphics = !!i3627[0]
  i3626.m_BlockingObjects = i3627[1]
  i3626.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3627[2] )
  return i3626
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i3628 = root || request.c( 'LunaManager' )
  var i3629 = data
  var i3631 = i3629[0]
  var i3630 = []
  for(var i = 0; i < i3631.length; i += 2) {
  request.r(i3631[i + 0], i3631[i + 1], 2, i3630, '')
  }
  i3628.lstBtnInstall = i3630
  request.r(i3629[1], i3629[2], 0, i3628, 'WinGO')
  request.r(i3629[3], i3629[4], 0, i3628, 'LoseGO')
  request.r(i3629[5], i3629[6], 0, i3628, 'StartCard')
  request.r(i3629[7], i3629[8], 0, i3628, 'EndCard')
  request.r(i3629[9], i3629[10], 0, i3628, 'Parent')
  i3628.isDrag = !!i3629[11]
  i3628.timeDrag = i3629[12]
  i3628.countPlay = i3629[13]
  i3628.countPlayFinal = i3629[14]
  i3628.countPlayMax = i3629[15]
  i3628.timeDropFinal = i3629[16]
  i3628.colorBG = new pc.Color(i3629[17], i3629[18], i3629[19], i3629[20])
  request.r(i3629[21], i3629[22], 0, i3628, 'texture2D')
  request.r(i3629[23], i3629[24], 0, i3628, 'rawImageBG')
  request.r(i3629[25], i3629[26], 0, i3628, 'MSSGirl')
  request.r(i3629[27], i3629[28], 0, i3628, 'MSSBoy')
  request.r(i3629[29], i3629[30], 0, i3628, 'MSSGroom')
  request.r(i3629[31], i3629[32], 0, i3628, 'MSSBride')
  request.r(i3629[33], i3629[34], 0, i3628, 'textProgess')
  request.r(i3629[35], i3629[36], 0, i3628, 'imgProgess')
  request.r(i3629[37], i3629[38], 0, i3628, 'timeText')
  return i3628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3635 = data
  i3634.cullTransparentMesh = !!i3635[0]
  return i3634
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3636 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3637 = data
  request.r(i3637[0], i3637[1], 0, i3636, 'm_Texture')
  i3636.m_UVRect = UnityEngine.Rect.MinMaxRect(i3637[2], i3637[3], i3637[4], i3637[5])
  i3636.m_Maskable = !!i3637[6]
  request.r(i3637[7], i3637[8], 0, i3636, 'm_Material')
  i3636.m_Color = new pc.Color(i3637[9], i3637[10], i3637[11], i3637[12])
  i3636.m_RaycastTarget = !!i3637[13]
  i3636.m_RaycastPadding = new pc.Vec4( i3637[14], i3637[15], i3637[16], i3637[17] )
  return i3636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3639 = data
  request.r(i3639[0], i3639[1], 0, i3638, 'clip')
  request.r(i3639[2], i3639[3], 0, i3638, 'outputAudioMixerGroup')
  i3638.playOnAwake = !!i3639[4]
  i3638.loop = !!i3639[5]
  i3638.time = i3639[6]
  i3638.volume = i3639[7]
  i3638.pitch = i3639[8]
  i3638.enabled = !!i3639[9]
  return i3638
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3640 = root || request.c( 'UnityEngine.UI.Image' )
  var i3641 = data
  request.r(i3641[0], i3641[1], 0, i3640, 'm_Sprite')
  i3640.m_Type = i3641[2]
  i3640.m_PreserveAspect = !!i3641[3]
  i3640.m_FillCenter = !!i3641[4]
  i3640.m_FillMethod = i3641[5]
  i3640.m_FillAmount = i3641[6]
  i3640.m_FillClockwise = !!i3641[7]
  i3640.m_FillOrigin = i3641[8]
  i3640.m_UseSpriteMesh = !!i3641[9]
  i3640.m_PixelsPerUnitMultiplier = i3641[10]
  i3640.m_Maskable = !!i3641[11]
  request.r(i3641[12], i3641[13], 0, i3640, 'm_Material')
  i3640.m_Color = new pc.Color(i3641[14], i3641[15], i3641[16], i3641[17])
  i3640.m_RaycastTarget = !!i3641[18]
  i3640.m_RaycastPadding = new pc.Vec4( i3641[19], i3641[20], i3641[21], i3641[22] )
  return i3640
}

Deserializers["DropZone"] = function (request, data, root) {
  var i3642 = root || request.c( 'DropZone' )
  var i3643 = data
  i3642.idDrop = i3643[0]
  var i3645 = i3643[1]
  var i3644 = []
  for(var i = 0; i < i3645.length; i += 2) {
  request.r(i3645[i + 0], i3645[i + 1], 2, i3644, '')
  }
  i3642.steps = i3644
  request.r(i3643[2], i3643[3], 0, i3642, 'stepLose')
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3649 = data
  i3648.usedByComposite = !!i3649[0]
  i3648.autoTiling = !!i3649[1]
  var i3651 = i3649[2]
  var i3650 = []
  for(var i = 0; i < i3651.length; i += 1) {
  var i3653 = i3651[i + 0]
  var i3652 = []
  for(var i = 0; i < i3653.length; i += 2) {
    i3652.push( new pc.Vec2( i3653[i + 0], i3653[i + 1] ) );
  }
    i3650.push( i3652 );
  }
  i3648.points = i3650
  i3648.enabled = !!i3649[3]
  i3648.isTrigger = !!i3649[4]
  i3648.usedByEffector = !!i3649[5]
  i3648.density = i3649[6]
  i3648.offset = new pc.Vec2( i3649[7], i3649[8] )
  request.r(i3649[9], i3649[10], 0, i3648, 'material')
  return i3648
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i3660 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i3661 = data
  request.r(i3661[0], i3661[1], 0, i3660, 'skeletonDataAsset')
  request.r(i3661[2], i3661[3], 0, i3660, 'additiveMaterial')
  request.r(i3661[4], i3661[5], 0, i3660, 'multiplyMaterial')
  request.r(i3661[6], i3661[7], 0, i3660, 'screenMaterial')
  i3660.initialSkinName = i3661[8]
  i3660.initialFlipX = !!i3661[9]
  i3660.initialFlipY = !!i3661[10]
  i3660.startingAnimation = i3661[11]
  i3660.startingLoop = !!i3661[12]
  i3660.timeScale = i3661[13]
  i3660.freeze = !!i3661[14]
  i3660.layoutScaleMode = i3661[15]
  i3660.updateWhenInvisible = i3661[16]
  i3660.allowMultipleCanvasRenderers = !!i3661[17]
  var i3663 = i3661[18]
  var i3662 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i3663.length; i += 2) {
  request.r(i3663[i + 0], i3663[i + 1], 1, i3662, '')
  }
  i3660.canvasRenderers = i3662
  i3660.enableSeparatorSlots = !!i3661[19]
  i3660.updateSeparatorPartLocation = !!i3661[20]
  i3660.updateSeparatorPartScale = !!i3661[21]
  i3660.disableMeshAssignmentOnOverride = !!i3661[22]
  i3660.referenceSize = new pc.Vec2( i3661[23], i3661[24] )
  i3660.referenceScale = i3661[25]
  i3660.rectTransformSize = new pc.Vec2( i3661[26], i3661[27] )
  i3660.editReferenceRect = !!i3661[28]
  var i3665 = i3661[29]
  var i3664 = []
  for(var i = 0; i < i3665.length; i += 1) {
    i3664.push( i3665[i + 0] );
  }
  i3660.separatorSlotNames = i3664
  var i3667 = i3661[30]
  var i3666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3667.length; i += 2) {
  request.r(i3667[i + 0], i3667[i + 1], 1, i3666, '')
  }
  i3660.separatorParts = i3666
  i3660.meshGenerator = request.d('Spine.Unity.MeshGenerator', i3661[31], i3660.meshGenerator)
  i3660.updateTiming = i3661[32]
  i3660.unscaledTime = !!i3661[33]
  i3660.m_Maskable = !!i3661[34]
  request.r(i3661[35], i3661[36], 0, i3660, 'm_Material')
  i3660.m_Color = new pc.Color(i3661[37], i3661[38], i3661[39], i3661[40])
  i3660.m_RaycastTarget = !!i3661[41]
  i3660.m_RaycastPadding = new pc.Vec4( i3661[42], i3661[43], i3661[44], i3661[45] )
  return i3660
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i3674 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i3675 = data
  i3674.settings = request.d('Spine.Unity.MeshGenerator+Settings', i3675[0], i3674.settings)
  return i3674
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i3676 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i3677 = data
  i3676.useClipping = !!i3677[0]
  i3676.zSpacing = i3677[1]
  i3676.pmaVertexColors = !!i3677[2]
  i3676.tintBlack = !!i3677[3]
  i3676.canvasGroupTintBlack = !!i3677[4]
  i3676.calculateTangents = !!i3677[5]
  i3676.addNormals = !!i3677[6]
  i3676.immutableTriangles = !!i3677[7]
  return i3676
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i3678 = root || request.c( 'MixSkeletonSkin' )
  var i3679 = data
  request.r(i3679[0], i3679[1], 0, i3678, 'skeletonAnimation')
  var i3681 = i3679[2]
  var i3680 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i3681.length; i += 1) {
    i3680.add(i3681[i + 0]);
  }
  i3678.skinNames = i3680
  i3678.defaultAnim = i3679[3]
  return i3678
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i3684 = root || request.c( 'DraggableItem' )
  var i3685 = data
  i3684.idDrag = i3685[0]
  i3684.isProcess = !!i3685[1]
  i3684.isLose = !!i3685[2]
  i3684.isHide = !!i3685[3]
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3687 = data
  i3686.m_Alpha = i3687[0]
  i3686.m_Interactable = !!i3687[1]
  i3686.m_BlocksRaycasts = !!i3687[2]
  i3686.m_IgnoreParentGroups = !!i3687[3]
  i3686.enabled = !!i3687[4]
  return i3686
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i3688 = root || request.c( 'ClickItem' )
  var i3689 = data
  var i3691 = i3689[0]
  var i3690 = []
  for(var i = 0; i < i3691.length; i += 2) {
  request.r(i3691[i + 0], i3691[i + 1], 2, i3690, '')
  }
  i3688.steps = i3690
  i3688.currentStep = i3689[1]
  i3688.isProcess = !!i3689[2]
  return i3688
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3692 = root || request.c( 'UnityEngine.UI.Button' )
  var i3693 = data
  i3692.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3693[0], i3692.m_OnClick)
  i3692.m_Navigation = request.d('UnityEngine.UI.Navigation', i3693[1], i3692.m_Navigation)
  i3692.m_Transition = i3693[2]
  i3692.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3693[3], i3692.m_Colors)
  i3692.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3693[4], i3692.m_SpriteState)
  i3692.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3693[5], i3692.m_AnimationTriggers)
  i3692.m_Interactable = !!i3693[6]
  request.r(i3693[7], i3693[8], 0, i3692, 'm_TargetGraphic')
  return i3692
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3694 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3695 = data
  i3694.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3695[0], i3694.m_PersistentCalls)
  return i3694
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3696 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3697 = data
  var i3699 = i3697[0]
  var i3698 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3699.length; i += 1) {
    i3698.add(request.d('UnityEngine.Events.PersistentCall', i3699[i + 0]));
  }
  i3696.m_Calls = i3698
  return i3696
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3702 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3703 = data
  request.r(i3703[0], i3703[1], 0, i3702, 'm_Target')
  i3702.m_TargetAssemblyTypeName = i3703[2]
  i3702.m_MethodName = i3703[3]
  i3702.m_Mode = i3703[4]
  i3702.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3703[5], i3702.m_Arguments)
  i3702.m_CallState = i3703[6]
  return i3702
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3704 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3705 = data
  i3704.m_Mode = i3705[0]
  i3704.m_WrapAround = !!i3705[1]
  request.r(i3705[2], i3705[3], 0, i3704, 'm_SelectOnUp')
  request.r(i3705[4], i3705[5], 0, i3704, 'm_SelectOnDown')
  request.r(i3705[6], i3705[7], 0, i3704, 'm_SelectOnLeft')
  request.r(i3705[8], i3705[9], 0, i3704, 'm_SelectOnRight')
  return i3704
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3706 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3707 = data
  i3706.m_NormalColor = new pc.Color(i3707[0], i3707[1], i3707[2], i3707[3])
  i3706.m_HighlightedColor = new pc.Color(i3707[4], i3707[5], i3707[6], i3707[7])
  i3706.m_PressedColor = new pc.Color(i3707[8], i3707[9], i3707[10], i3707[11])
  i3706.m_SelectedColor = new pc.Color(i3707[12], i3707[13], i3707[14], i3707[15])
  i3706.m_DisabledColor = new pc.Color(i3707[16], i3707[17], i3707[18], i3707[19])
  i3706.m_ColorMultiplier = i3707[20]
  i3706.m_FadeDuration = i3707[21]
  return i3706
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3708 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3709 = data
  request.r(i3709[0], i3709[1], 0, i3708, 'm_HighlightedSprite')
  request.r(i3709[2], i3709[3], 0, i3708, 'm_PressedSprite')
  request.r(i3709[4], i3709[5], 0, i3708, 'm_SelectedSprite')
  request.r(i3709[6], i3709[7], 0, i3708, 'm_DisabledSprite')
  return i3708
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3710 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3711 = data
  i3710.m_NormalTrigger = i3711[0]
  i3710.m_HighlightedTrigger = i3711[1]
  i3710.m_PressedTrigger = i3711[2]
  i3710.m_SelectedTrigger = i3711[3]
  i3710.m_DisabledTrigger = i3711[4]
  return i3710
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3712 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3713 = data
  i3712.targetIsSelf = !!i3713[0]
  request.r(i3713[1], i3713[2], 0, i3712, 'targetGO')
  i3712.tweenTargetIsTargetGO = !!i3713[3]
  i3712.delay = i3713[4]
  i3712.duration = i3713[5]
  i3712.easeType = i3713[6]
  i3712.easeCurve = new pc.AnimationCurve( { keys_flow: i3713[7] } )
  i3712.loopType = i3713[8]
  i3712.loops = i3713[9]
  i3712.id = i3713[10]
  i3712.isRelative = !!i3713[11]
  i3712.isFrom = !!i3713[12]
  i3712.isIndependentUpdate = !!i3713[13]
  i3712.autoKill = !!i3713[14]
  i3712.autoGenerate = !!i3713[15]
  i3712.isActive = !!i3713[16]
  i3712.isValid = !!i3713[17]
  request.r(i3713[18], i3713[19], 0, i3712, 'target')
  i3712.animationType = i3713[20]
  i3712.targetType = i3713[21]
  i3712.forcedTargetType = i3713[22]
  i3712.autoPlay = !!i3713[23]
  i3712.useTargetAsV3 = !!i3713[24]
  i3712.endValueFloat = i3713[25]
  i3712.endValueV3 = new pc.Vec3( i3713[26], i3713[27], i3713[28] )
  i3712.endValueV2 = new pc.Vec2( i3713[29], i3713[30] )
  i3712.endValueColor = new pc.Color(i3713[31], i3713[32], i3713[33], i3713[34])
  i3712.endValueString = i3713[35]
  i3712.endValueRect = UnityEngine.Rect.MinMaxRect(i3713[36], i3713[37], i3713[38], i3713[39])
  request.r(i3713[40], i3713[41], 0, i3712, 'endValueTransform')
  i3712.optionalBool0 = !!i3713[42]
  i3712.optionalBool1 = !!i3713[43]
  i3712.optionalFloat0 = i3713[44]
  i3712.optionalInt0 = i3713[45]
  i3712.optionalRotationMode = i3713[46]
  i3712.optionalScrambleMode = i3713[47]
  i3712.optionalShakeRandomnessMode = i3713[48]
  i3712.optionalString = i3713[49]
  i3712.updateType = i3713[50]
  i3712.isSpeedBased = !!i3713[51]
  i3712.hasOnStart = !!i3713[52]
  i3712.hasOnPlay = !!i3713[53]
  i3712.hasOnUpdate = !!i3713[54]
  i3712.hasOnStepComplete = !!i3713[55]
  i3712.hasOnComplete = !!i3713[56]
  i3712.hasOnTweenCreated = !!i3713[57]
  i3712.hasOnRewind = !!i3713[58]
  i3712.onStart = request.d('UnityEngine.Events.UnityEvent', i3713[59], i3712.onStart)
  i3712.onPlay = request.d('UnityEngine.Events.UnityEvent', i3713[60], i3712.onPlay)
  i3712.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3713[61], i3712.onUpdate)
  i3712.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3713[62], i3712.onStepComplete)
  i3712.onComplete = request.d('UnityEngine.Events.UnityEvent', i3713[63], i3712.onComplete)
  i3712.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3713[64], i3712.onTweenCreated)
  i3712.onRewind = request.d('UnityEngine.Events.UnityEvent', i3713[65], i3712.onRewind)
  return i3712
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3714 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3715 = data
  i3714.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3715[0], i3714.m_PersistentCalls)
  return i3714
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3716 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3717 = data
  request.r(i3717[0], i3717[1], 0, i3716, 'm_ObjectArgument')
  i3716.m_ObjectArgumentAssemblyTypeName = i3717[2]
  i3716.m_IntArgument = i3717[3]
  i3716.m_FloatArgument = i3717[4]
  i3716.m_StringArgument = i3717[5]
  i3716.m_BoolArgument = !!i3717[6]
  return i3716
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3718 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3719 = data
  i3718.m_hasFontAssetChanged = !!i3719[0]
  request.r(i3719[1], i3719[2], 0, i3718, 'm_baseMaterial')
  i3718.m_maskOffset = new pc.Vec4( i3719[3], i3719[4], i3719[5], i3719[6] )
  i3718.m_text = i3719[7]
  i3718.m_isRightToLeft = !!i3719[8]
  request.r(i3719[9], i3719[10], 0, i3718, 'm_fontAsset')
  request.r(i3719[11], i3719[12], 0, i3718, 'm_sharedMaterial')
  var i3721 = i3719[13]
  var i3720 = []
  for(var i = 0; i < i3721.length; i += 2) {
  request.r(i3721[i + 0], i3721[i + 1], 2, i3720, '')
  }
  i3718.m_fontSharedMaterials = i3720
  request.r(i3719[14], i3719[15], 0, i3718, 'm_fontMaterial')
  var i3723 = i3719[16]
  var i3722 = []
  for(var i = 0; i < i3723.length; i += 2) {
  request.r(i3723[i + 0], i3723[i + 1], 2, i3722, '')
  }
  i3718.m_fontMaterials = i3722
  i3718.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3719[17], i3719[18], i3719[19], i3719[20])
  i3718.m_fontColor = new pc.Color(i3719[21], i3719[22], i3719[23], i3719[24])
  i3718.m_enableVertexGradient = !!i3719[25]
  i3718.m_colorMode = i3719[26]
  i3718.m_fontColorGradient = request.d('TMPro.VertexGradient', i3719[27], i3718.m_fontColorGradient)
  request.r(i3719[28], i3719[29], 0, i3718, 'm_fontColorGradientPreset')
  request.r(i3719[30], i3719[31], 0, i3718, 'm_spriteAsset')
  i3718.m_tintAllSprites = !!i3719[32]
  request.r(i3719[33], i3719[34], 0, i3718, 'm_StyleSheet')
  i3718.m_TextStyleHashCode = i3719[35]
  i3718.m_overrideHtmlColors = !!i3719[36]
  i3718.m_faceColor = UnityEngine.Color32.ConstructColor(i3719[37], i3719[38], i3719[39], i3719[40])
  i3718.m_fontSize = i3719[41]
  i3718.m_fontSizeBase = i3719[42]
  i3718.m_fontWeight = i3719[43]
  i3718.m_enableAutoSizing = !!i3719[44]
  i3718.m_fontSizeMin = i3719[45]
  i3718.m_fontSizeMax = i3719[46]
  i3718.m_fontStyle = i3719[47]
  i3718.m_HorizontalAlignment = i3719[48]
  i3718.m_VerticalAlignment = i3719[49]
  i3718.m_textAlignment = i3719[50]
  i3718.m_characterSpacing = i3719[51]
  i3718.m_wordSpacing = i3719[52]
  i3718.m_lineSpacing = i3719[53]
  i3718.m_lineSpacingMax = i3719[54]
  i3718.m_paragraphSpacing = i3719[55]
  i3718.m_charWidthMaxAdj = i3719[56]
  i3718.m_enableWordWrapping = !!i3719[57]
  i3718.m_wordWrappingRatios = i3719[58]
  i3718.m_overflowMode = i3719[59]
  request.r(i3719[60], i3719[61], 0, i3718, 'm_linkedTextComponent')
  request.r(i3719[62], i3719[63], 0, i3718, 'parentLinkedComponent')
  i3718.m_enableKerning = !!i3719[64]
  i3718.m_enableExtraPadding = !!i3719[65]
  i3718.checkPaddingRequired = !!i3719[66]
  i3718.m_isRichText = !!i3719[67]
  i3718.m_parseCtrlCharacters = !!i3719[68]
  i3718.m_isOrthographic = !!i3719[69]
  i3718.m_isCullingEnabled = !!i3719[70]
  i3718.m_horizontalMapping = i3719[71]
  i3718.m_verticalMapping = i3719[72]
  i3718.m_uvLineOffset = i3719[73]
  i3718.m_geometrySortingOrder = i3719[74]
  i3718.m_IsTextObjectScaleStatic = !!i3719[75]
  i3718.m_VertexBufferAutoSizeReduction = !!i3719[76]
  i3718.m_useMaxVisibleDescender = !!i3719[77]
  i3718.m_pageToDisplay = i3719[78]
  i3718.m_margin = new pc.Vec4( i3719[79], i3719[80], i3719[81], i3719[82] )
  i3718.m_isUsingLegacyAnimationComponent = !!i3719[83]
  i3718.m_isVolumetricText = !!i3719[84]
  i3718.m_Maskable = !!i3719[85]
  request.r(i3719[86], i3719[87], 0, i3718, 'm_Material')
  i3718.m_Color = new pc.Color(i3719[88], i3719[89], i3719[90], i3719[91])
  i3718.m_RaycastTarget = !!i3719[92]
  i3718.m_RaycastPadding = new pc.Vec4( i3719[93], i3719[94], i3719[95], i3719[96] )
  return i3718
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3726 = root || request.c( 'TMPro.VertexGradient' )
  var i3727 = data
  i3726.topLeft = new pc.Color(i3727[0], i3727[1], i3727[2], i3727[3])
  i3726.topRight = new pc.Color(i3727[4], i3727[5], i3727[6], i3727[7])
  i3726.bottomLeft = new pc.Color(i3727[8], i3727[9], i3727[10], i3727[11])
  i3726.bottomRight = new pc.Color(i3727[12], i3727[13], i3727[14], i3727[15])
  return i3726
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3728 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3729 = data
  i3728.m_ShowMaskGraphic = !!i3729[0]
  return i3728
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3730 = root || request.c( 'AudioController' )
  var i3731 = data
  request.r(i3731[0], i3731[1], 0, i3730, 'bgmSource')
  request.r(i3731[2], i3731[3], 0, i3730, 'sfxSource')
  var i3733 = i3731[4]
  var i3732 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i3733.length; i += 1) {
    i3732.add(request.d('AudioEntry', i3733[i + 0]));
  }
  i3730.audioEntries = i3732
  return i3730
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i3736 = root || request.c( 'AudioEntry' )
  var i3737 = data
  i3736.key = i3737[0]
  request.r(i3737[1], i3737[2], 0, i3736, 'clip')
  i3736.volume = i3737[3]
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3739 = data
  i3738.ambientIntensity = i3739[0]
  i3738.reflectionIntensity = i3739[1]
  i3738.ambientMode = i3739[2]
  i3738.ambientLight = new pc.Color(i3739[3], i3739[4], i3739[5], i3739[6])
  i3738.ambientSkyColor = new pc.Color(i3739[7], i3739[8], i3739[9], i3739[10])
  i3738.ambientGroundColor = new pc.Color(i3739[11], i3739[12], i3739[13], i3739[14])
  i3738.ambientEquatorColor = new pc.Color(i3739[15], i3739[16], i3739[17], i3739[18])
  i3738.fogColor = new pc.Color(i3739[19], i3739[20], i3739[21], i3739[22])
  i3738.fogEndDistance = i3739[23]
  i3738.fogStartDistance = i3739[24]
  i3738.fogDensity = i3739[25]
  i3738.fog = !!i3739[26]
  request.r(i3739[27], i3739[28], 0, i3738, 'skybox')
  i3738.fogMode = i3739[29]
  var i3741 = i3739[30]
  var i3740 = []
  for(var i = 0; i < i3741.length; i += 1) {
    i3740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3741[i + 0]) );
  }
  i3738.lightmaps = i3740
  i3738.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3739[31], i3738.lightProbes)
  i3738.lightmapsMode = i3739[32]
  i3738.mixedBakeMode = i3739[33]
  i3738.environmentLightingMode = i3739[34]
  i3738.ambientProbe = new pc.SphericalHarmonicsL2(i3739[35])
  i3738.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3739[36])
  i3738.useReferenceAmbientProbe = !!i3739[37]
  request.r(i3739[38], i3739[39], 0, i3738, 'customReflection')
  request.r(i3739[40], i3739[41], 0, i3738, 'defaultReflection')
  i3738.defaultReflectionMode = i3739[42]
  i3738.defaultReflectionResolution = i3739[43]
  i3738.sunLightObjectId = i3739[44]
  i3738.pixelLightCount = i3739[45]
  i3738.defaultReflectionHDR = !!i3739[46]
  i3738.hasLightDataAsset = !!i3739[47]
  i3738.hasManualGenerate = !!i3739[48]
  return i3738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3745 = data
  request.r(i3745[0], i3745[1], 0, i3744, 'lightmapColor')
  request.r(i3745[2], i3745[3], 0, i3744, 'lightmapDirection')
  return i3744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3746 = root || new UnityEngine.LightProbes()
  var i3747 = data
  return i3746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3755 = data
  var i3757 = i3755[0]
  var i3756 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3757.length; i += 1) {
    i3756.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3757[i + 0]));
  }
  i3754.ShaderCompilationErrors = i3756
  i3754.name = i3755[1]
  i3754.guid = i3755[2]
  var i3759 = i3755[3]
  var i3758 = []
  for(var i = 0; i < i3759.length; i += 1) {
    i3758.push( i3759[i + 0] );
  }
  i3754.shaderDefinedKeywords = i3758
  var i3761 = i3755[4]
  var i3760 = []
  for(var i = 0; i < i3761.length; i += 1) {
    i3760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3761[i + 0]) );
  }
  i3754.passes = i3760
  var i3763 = i3755[5]
  var i3762 = []
  for(var i = 0; i < i3763.length; i += 1) {
    i3762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3763[i + 0]) );
  }
  i3754.usePasses = i3762
  var i3765 = i3755[6]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 1) {
    i3764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3765[i + 0]) );
  }
  i3754.defaultParameterValues = i3764
  request.r(i3755[7], i3755[8], 0, i3754, 'unityFallbackShader')
  i3754.readDepth = !!i3755[9]
  i3754.isCreatedByShaderGraph = !!i3755[10]
  i3754.disableBatching = !!i3755[11]
  i3754.compiled = !!i3755[12]
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3769 = data
  i3768.shaderName = i3769[0]
  i3768.errorMessage = i3769[1]
  return i3768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3772 = root || new pc.UnityShaderPass()
  var i3773 = data
  i3772.id = i3773[0]
  i3772.subShaderIndex = i3773[1]
  i3772.name = i3773[2]
  i3772.passType = i3773[3]
  i3772.grabPassTextureName = i3773[4]
  i3772.usePass = !!i3773[5]
  i3772.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3773[6], i3772.zTest)
  i3772.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3773[7], i3772.zWrite)
  i3772.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3773[8], i3772.culling)
  i3772.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3773[9], i3772.blending)
  i3772.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3773[10], i3772.alphaBlending)
  i3772.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3773[11], i3772.colorWriteMask)
  i3772.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3773[12], i3772.offsetUnits)
  i3772.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3773[13], i3772.offsetFactor)
  i3772.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3773[14], i3772.stencilRef)
  i3772.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3773[15], i3772.stencilReadMask)
  i3772.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3773[16], i3772.stencilWriteMask)
  i3772.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3773[17], i3772.stencilOp)
  i3772.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3773[18], i3772.stencilOpFront)
  i3772.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3773[19], i3772.stencilOpBack)
  var i3775 = i3773[20]
  var i3774 = []
  for(var i = 0; i < i3775.length; i += 1) {
    i3774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3775[i + 0]) );
  }
  i3772.tags = i3774
  var i3777 = i3773[21]
  var i3776 = []
  for(var i = 0; i < i3777.length; i += 1) {
    i3776.push( i3777[i + 0] );
  }
  i3772.passDefinedKeywords = i3776
  var i3779 = i3773[22]
  var i3778 = []
  for(var i = 0; i < i3779.length; i += 1) {
    i3778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3779[i + 0]) );
  }
  i3772.passDefinedKeywordGroups = i3778
  var i3781 = i3773[23]
  var i3780 = []
  for(var i = 0; i < i3781.length; i += 1) {
    i3780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3781[i + 0]) );
  }
  i3772.variants = i3780
  var i3783 = i3773[24]
  var i3782 = []
  for(var i = 0; i < i3783.length; i += 1) {
    i3782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3783[i + 0]) );
  }
  i3772.excludedVariants = i3782
  i3772.hasDepthReader = !!i3773[25]
  return i3772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3785 = data
  i3784.val = i3785[0]
  i3784.name = i3785[1]
  return i3784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3787 = data
  i3786.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3787[0], i3786.src)
  i3786.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3787[1], i3786.dst)
  i3786.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3787[2], i3786.op)
  return i3786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3789 = data
  i3788.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3789[0], i3788.pass)
  i3788.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3789[1], i3788.fail)
  i3788.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3789[2], i3788.zFail)
  i3788.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3789[3], i3788.comp)
  return i3788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3793 = data
  i3792.name = i3793[0]
  i3792.value = i3793[1]
  return i3792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3797 = data
  var i3799 = i3797[0]
  var i3798 = []
  for(var i = 0; i < i3799.length; i += 1) {
    i3798.push( i3799[i + 0] );
  }
  i3796.keywords = i3798
  i3796.hasDiscard = !!i3797[1]
  return i3796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3803 = data
  i3802.passId = i3803[0]
  i3802.subShaderIndex = i3803[1]
  var i3805 = i3803[2]
  var i3804 = []
  for(var i = 0; i < i3805.length; i += 1) {
    i3804.push( i3805[i + 0] );
  }
  i3802.keywords = i3804
  i3802.vertexProgram = i3803[3]
  i3802.fragmentProgram = i3803[4]
  i3802.exportedForWebGl2 = !!i3803[5]
  i3802.readDepth = !!i3803[6]
  return i3802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3809 = data
  request.r(i3809[0], i3809[1], 0, i3808, 'shader')
  i3808.pass = i3809[2]
  return i3808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3813 = data
  i3812.name = i3813[0]
  i3812.type = i3813[1]
  i3812.value = new pc.Vec4( i3813[2], i3813[3], i3813[4], i3813[5] )
  i3812.textureValue = i3813[6]
  i3812.shaderPropertyFlag = i3813[7]
  return i3812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3815 = data
  i3814.name = i3815[0]
  request.r(i3815[1], i3815[2], 0, i3814, 'texture')
  i3814.aabb = i3815[3]
  i3814.vertices = i3815[4]
  i3814.triangles = i3815[5]
  i3814.textureRect = UnityEngine.Rect.MinMaxRect(i3815[6], i3815[7], i3815[8], i3815[9])
  i3814.packedRect = UnityEngine.Rect.MinMaxRect(i3815[10], i3815[11], i3815[12], i3815[13])
  i3814.border = new pc.Vec4( i3815[14], i3815[15], i3815[16], i3815[17] )
  i3814.transparency = i3815[18]
  i3814.bounds = i3815[19]
  i3814.pixelsPerUnit = i3815[20]
  i3814.textureWidth = i3815[21]
  i3814.textureHeight = i3815[22]
  i3814.nativeSize = new pc.Vec2( i3815[23], i3815[24] )
  i3814.pivot = new pc.Vec2( i3815[25], i3815[26] )
  i3814.textureRectOffset = new pc.Vec2( i3815[27], i3815[28] )
  return i3814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3817 = data
  i3816.name = i3817[0]
  return i3816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3819 = data
  i3818.name = i3819[0]
  i3818.ascent = i3819[1]
  i3818.originalLineHeight = i3819[2]
  i3818.fontSize = i3819[3]
  var i3821 = i3819[4]
  var i3820 = []
  for(var i = 0; i < i3821.length; i += 1) {
    i3820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3821[i + 0]) );
  }
  i3818.characterInfo = i3820
  request.r(i3819[5], i3819[6], 0, i3818, 'texture')
  i3818.originalFontSize = i3819[7]
  return i3818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3825 = data
  i3824.index = i3825[0]
  i3824.advance = i3825[1]
  i3824.bearing = i3825[2]
  i3824.glyphWidth = i3825[3]
  i3824.glyphHeight = i3825[4]
  i3824.minX = i3825[5]
  i3824.maxX = i3825[6]
  i3824.minY = i3825[7]
  i3824.maxY = i3825[8]
  i3824.uvBottomLeftX = i3825[9]
  i3824.uvBottomLeftY = i3825[10]
  i3824.uvBottomRightX = i3825[11]
  i3824.uvBottomRightY = i3825[12]
  i3824.uvTopLeftX = i3825[13]
  i3824.uvTopLeftY = i3825[14]
  i3824.uvTopRightX = i3825[15]
  i3824.uvTopRightY = i3825[16]
  return i3824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3827 = data
  i3826.name = i3827[0]
  i3826.bytes64 = i3827[1]
  i3826.data = i3827[2]
  return i3826
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3828 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3829 = data
  var i3831 = i3829[0]
  var i3830 = []
  for(var i = 0; i < i3831.length; i += 2) {
  request.r(i3831[i + 0], i3831[i + 1], 2, i3830, '')
  }
  i3828.atlasAssets = i3830
  i3828.scale = i3829[1]
  request.r(i3829[2], i3829[3], 0, i3828, 'skeletonJSON')
  i3828.isUpgradingBlendModeMaterials = !!i3829[4]
  i3828.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3829[5], i3828.blendModeMaterials)
  var i3833 = i3829[6]
  var i3832 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3833.length; i += 2) {
  request.r(i3833[i + 0], i3833[i + 1], 1, i3832, '')
  }
  i3828.skeletonDataModifiers = i3832
  var i3835 = i3829[7]
  var i3834 = []
  for(var i = 0; i < i3835.length; i += 1) {
    i3834.push( i3835[i + 0] );
  }
  i3828.fromAnimation = i3834
  var i3837 = i3829[8]
  var i3836 = []
  for(var i = 0; i < i3837.length; i += 1) {
    i3836.push( i3837[i + 0] );
  }
  i3828.toAnimation = i3836
  i3828.duration = i3829[9]
  i3828.defaultMix = i3829[10]
  request.r(i3829[11], i3829[12], 0, i3828, 'controller')
  return i3828
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3840 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3841 = data
  i3840.applyAdditiveMaterial = !!i3841[0]
  var i3843 = i3841[1]
  var i3842 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3843.length; i += 1) {
    i3842.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3843[i + 0]));
  }
  i3840.additiveMaterials = i3842
  var i3845 = i3841[2]
  var i3844 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3845.length; i += 1) {
    i3844.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3845[i + 0]));
  }
  i3840.multiplyMaterials = i3844
  var i3847 = i3841[3]
  var i3846 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3847.length; i += 1) {
    i3846.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3847[i + 0]));
  }
  i3840.screenMaterials = i3846
  i3840.requiresBlendModeMaterials = !!i3841[4]
  return i3840
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3850 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3851 = data
  i3850.pageName = i3851[0]
  request.r(i3851[1], i3851[2], 0, i3850, 'material')
  return i3850
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3854 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3855 = data
  request.r(i3855[0], i3855[1], 0, i3854, 'atlasFile')
  var i3857 = i3855[2]
  var i3856 = []
  for(var i = 0; i < i3857.length; i += 2) {
  request.r(i3857[i + 0], i3857[i + 1], 2, i3856, '')
  }
  i3854.materials = i3856
  i3854.textureLoadingMode = i3855[3]
  request.r(i3855[4], i3855[5], 0, i3854, 'onDemandTextureLoader')
  return i3854
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3858 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3859 = data
  request.r(i3859[0], i3859[1], 0, i3858, 'atlas')
  i3858.normalStyle = i3859[2]
  i3858.normalSpacingOffset = i3859[3]
  i3858.boldStyle = i3859[4]
  i3858.boldSpacing = i3859[5]
  i3858.italicStyle = i3859[6]
  i3858.tabSize = i3859[7]
  i3858.hashCode = i3859[8]
  request.r(i3859[9], i3859[10], 0, i3858, 'material')
  i3858.materialHashCode = i3859[11]
  i3858.m_Version = i3859[12]
  i3858.m_SourceFontFileGUID = i3859[13]
  request.r(i3859[14], i3859[15], 0, i3858, 'm_SourceFontFile_EditorRef')
  request.r(i3859[16], i3859[17], 0, i3858, 'm_SourceFontFile')
  i3858.m_AtlasPopulationMode = i3859[18]
  i3858.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3859[19], i3858.m_FaceInfo)
  var i3861 = i3859[20]
  var i3860 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3861.length; i += 1) {
    i3860.add(request.d('UnityEngine.TextCore.Glyph', i3861[i + 0]));
  }
  i3858.m_GlyphTable = i3860
  var i3863 = i3859[21]
  var i3862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3863.length; i += 1) {
    i3862.add(request.d('TMPro.TMP_Character', i3863[i + 0]));
  }
  i3858.m_CharacterTable = i3862
  var i3865 = i3859[22]
  var i3864 = []
  for(var i = 0; i < i3865.length; i += 2) {
  request.r(i3865[i + 0], i3865[i + 1], 2, i3864, '')
  }
  i3858.m_AtlasTextures = i3864
  i3858.m_AtlasTextureIndex = i3859[23]
  i3858.m_IsMultiAtlasTexturesEnabled = !!i3859[24]
  i3858.m_ClearDynamicDataOnBuild = !!i3859[25]
  var i3867 = i3859[26]
  var i3866 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3867.length; i += 1) {
    i3866.add(request.d('UnityEngine.TextCore.GlyphRect', i3867[i + 0]));
  }
  i3858.m_UsedGlyphRects = i3866
  var i3869 = i3859[27]
  var i3868 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3869.length; i += 1) {
    i3868.add(request.d('UnityEngine.TextCore.GlyphRect', i3869[i + 0]));
  }
  i3858.m_FreeGlyphRects = i3868
  i3858.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3859[28], i3858.m_fontInfo)
  i3858.m_AtlasWidth = i3859[29]
  i3858.m_AtlasHeight = i3859[30]
  i3858.m_AtlasPadding = i3859[31]
  i3858.m_AtlasRenderMode = i3859[32]
  var i3871 = i3859[33]
  var i3870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3871.length; i += 1) {
    i3870.add(request.d('TMPro.TMP_Glyph', i3871[i + 0]));
  }
  i3858.m_glyphInfoList = i3870
  i3858.m_KerningTable = request.d('TMPro.KerningTable', i3859[34], i3858.m_KerningTable)
  i3858.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3859[35], i3858.m_FontFeatureTable)
  var i3873 = i3859[36]
  var i3872 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3873.length; i += 2) {
  request.r(i3873[i + 0], i3873[i + 1], 1, i3872, '')
  }
  i3858.fallbackFontAssets = i3872
  var i3875 = i3859[37]
  var i3874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3875.length; i += 2) {
  request.r(i3875[i + 0], i3875[i + 1], 1, i3874, '')
  }
  i3858.m_FallbackFontAssetTable = i3874
  i3858.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3859[38], i3858.m_CreationSettings)
  var i3877 = i3859[39]
  var i3876 = []
  for(var i = 0; i < i3877.length; i += 1) {
    i3876.push( request.d('TMPro.TMP_FontWeightPair', i3877[i + 0]) );
  }
  i3858.m_FontWeightTable = i3876
  var i3879 = i3859[40]
  var i3878 = []
  for(var i = 0; i < i3879.length; i += 1) {
    i3878.push( request.d('TMPro.TMP_FontWeightPair', i3879[i + 0]) );
  }
  i3858.fontWeights = i3878
  return i3858
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3880 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3881 = data
  i3880.m_FaceIndex = i3881[0]
  i3880.m_FamilyName = i3881[1]
  i3880.m_StyleName = i3881[2]
  i3880.m_PointSize = i3881[3]
  i3880.m_Scale = i3881[4]
  i3880.m_UnitsPerEM = i3881[5]
  i3880.m_LineHeight = i3881[6]
  i3880.m_AscentLine = i3881[7]
  i3880.m_CapLine = i3881[8]
  i3880.m_MeanLine = i3881[9]
  i3880.m_Baseline = i3881[10]
  i3880.m_DescentLine = i3881[11]
  i3880.m_SuperscriptOffset = i3881[12]
  i3880.m_SuperscriptSize = i3881[13]
  i3880.m_SubscriptOffset = i3881[14]
  i3880.m_SubscriptSize = i3881[15]
  i3880.m_UnderlineOffset = i3881[16]
  i3880.m_UnderlineThickness = i3881[17]
  i3880.m_StrikethroughOffset = i3881[18]
  i3880.m_StrikethroughThickness = i3881[19]
  i3880.m_TabWidth = i3881[20]
  return i3880
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3884 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3885 = data
  i3884.m_Index = i3885[0]
  i3884.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3885[1], i3884.m_Metrics)
  i3884.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3885[2], i3884.m_GlyphRect)
  i3884.m_Scale = i3885[3]
  i3884.m_AtlasIndex = i3885[4]
  i3884.m_ClassDefinitionType = i3885[5]
  return i3884
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3886 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3887 = data
  i3886.m_Width = i3887[0]
  i3886.m_Height = i3887[1]
  i3886.m_HorizontalBearingX = i3887[2]
  i3886.m_HorizontalBearingY = i3887[3]
  i3886.m_HorizontalAdvance = i3887[4]
  return i3886
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3888 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3889 = data
  i3888.m_X = i3889[0]
  i3888.m_Y = i3889[1]
  i3888.m_Width = i3889[2]
  i3888.m_Height = i3889[3]
  return i3888
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3892 = root || request.c( 'TMPro.TMP_Character' )
  var i3893 = data
  i3892.m_ElementType = i3893[0]
  i3892.m_Unicode = i3893[1]
  i3892.m_GlyphIndex = i3893[2]
  i3892.m_Scale = i3893[3]
  return i3892
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3898 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3899 = data
  i3898.Name = i3899[0]
  i3898.PointSize = i3899[1]
  i3898.Scale = i3899[2]
  i3898.CharacterCount = i3899[3]
  i3898.LineHeight = i3899[4]
  i3898.Baseline = i3899[5]
  i3898.Ascender = i3899[6]
  i3898.CapHeight = i3899[7]
  i3898.Descender = i3899[8]
  i3898.CenterLine = i3899[9]
  i3898.SuperscriptOffset = i3899[10]
  i3898.SubscriptOffset = i3899[11]
  i3898.SubSize = i3899[12]
  i3898.Underline = i3899[13]
  i3898.UnderlineThickness = i3899[14]
  i3898.strikethrough = i3899[15]
  i3898.strikethroughThickness = i3899[16]
  i3898.TabWidth = i3899[17]
  i3898.Padding = i3899[18]
  i3898.AtlasWidth = i3899[19]
  i3898.AtlasHeight = i3899[20]
  return i3898
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3902 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3903 = data
  i3902.id = i3903[0]
  i3902.x = i3903[1]
  i3902.y = i3903[2]
  i3902.width = i3903[3]
  i3902.height = i3903[4]
  i3902.xOffset = i3903[5]
  i3902.yOffset = i3903[6]
  i3902.xAdvance = i3903[7]
  i3902.scale = i3903[8]
  return i3902
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3904 = root || request.c( 'TMPro.KerningTable' )
  var i3905 = data
  var i3907 = i3905[0]
  var i3906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3907.length; i += 1) {
    i3906.add(request.d('TMPro.KerningPair', i3907[i + 0]));
  }
  i3904.kerningPairs = i3906
  return i3904
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3910 = root || request.c( 'TMPro.KerningPair' )
  var i3911 = data
  i3910.xOffset = i3911[0]
  i3910.m_FirstGlyph = i3911[1]
  i3910.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3911[2], i3910.m_FirstGlyphAdjustments)
  i3910.m_SecondGlyph = i3911[3]
  i3910.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3911[4], i3910.m_SecondGlyphAdjustments)
  i3910.m_IgnoreSpacingAdjustments = !!i3911[5]
  return i3910
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3912 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3913 = data
  var i3915 = i3913[0]
  var i3914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3915.length; i += 1) {
    i3914.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3915[i + 0]));
  }
  i3912.m_GlyphPairAdjustmentRecords = i3914
  return i3912
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3918 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3919 = data
  i3918.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3919[0], i3918.m_FirstAdjustmentRecord)
  i3918.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3919[1], i3918.m_SecondAdjustmentRecord)
  i3918.m_FeatureLookupFlags = i3919[2]
  return i3918
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3922 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3923 = data
  i3922.sourceFontFileName = i3923[0]
  i3922.sourceFontFileGUID = i3923[1]
  i3922.pointSizeSamplingMode = i3923[2]
  i3922.pointSize = i3923[3]
  i3922.padding = i3923[4]
  i3922.packingMode = i3923[5]
  i3922.atlasWidth = i3923[6]
  i3922.atlasHeight = i3923[7]
  i3922.characterSetSelectionMode = i3923[8]
  i3922.characterSequence = i3923[9]
  i3922.referencedFontAssetGUID = i3923[10]
  i3922.referencedTextAssetGUID = i3923[11]
  i3922.fontStyle = i3923[12]
  i3922.fontStyleModifier = i3923[13]
  i3922.renderMode = i3923[14]
  i3922.includeFontFeatures = !!i3923[15]
  return i3922
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3926 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3927 = data
  request.r(i3927[0], i3927[1], 0, i3926, 'regularTypeface')
  request.r(i3927[2], i3927[3], 0, i3926, 'italicTypeface')
  return i3926
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3928 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3929 = data
  i3928.useSafeMode = !!i3929[0]
  i3928.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3929[1], i3928.safeModeOptions)
  i3928.timeScale = i3929[2]
  i3928.unscaledTimeScale = i3929[3]
  i3928.useSmoothDeltaTime = !!i3929[4]
  i3928.maxSmoothUnscaledTime = i3929[5]
  i3928.rewindCallbackMode = i3929[6]
  i3928.showUnityEditorReport = !!i3929[7]
  i3928.logBehaviour = i3929[8]
  i3928.drawGizmos = !!i3929[9]
  i3928.defaultRecyclable = !!i3929[10]
  i3928.defaultAutoPlay = i3929[11]
  i3928.defaultUpdateType = i3929[12]
  i3928.defaultTimeScaleIndependent = !!i3929[13]
  i3928.defaultEaseType = i3929[14]
  i3928.defaultEaseOvershootOrAmplitude = i3929[15]
  i3928.defaultEasePeriod = i3929[16]
  i3928.defaultAutoKill = !!i3929[17]
  i3928.defaultLoopType = i3929[18]
  i3928.debugMode = !!i3929[19]
  i3928.debugStoreTargetId = !!i3929[20]
  i3928.showPreviewPanel = !!i3929[21]
  i3928.storeSettingsLocation = i3929[22]
  i3928.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3929[23], i3928.modules)
  i3928.createASMDEF = !!i3929[24]
  i3928.showPlayingTweens = !!i3929[25]
  i3928.showPausedTweens = !!i3929[26]
  return i3928
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3930 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3931 = data
  i3930.logBehaviour = i3931[0]
  i3930.nestedTweenFailureBehaviour = i3931[1]
  return i3930
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3932 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3933 = data
  i3932.showPanel = !!i3933[0]
  i3932.audioEnabled = !!i3933[1]
  i3932.physicsEnabled = !!i3933[2]
  i3932.physics2DEnabled = !!i3933[3]
  i3932.spriteEnabled = !!i3933[4]
  i3932.uiEnabled = !!i3933[5]
  i3932.textMeshProEnabled = !!i3933[6]
  i3932.tk2DEnabled = !!i3933[7]
  i3932.deAudioEnabled = !!i3933[8]
  i3932.deUnityExtendedEnabled = !!i3933[9]
  i3932.epoOutlineEnabled = !!i3933[10]
  return i3932
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3934 = root || request.c( 'TMPro.TMP_Settings' )
  var i3935 = data
  i3934.m_enableWordWrapping = !!i3935[0]
  i3934.m_enableKerning = !!i3935[1]
  i3934.m_enableExtraPadding = !!i3935[2]
  i3934.m_enableTintAllSprites = !!i3935[3]
  i3934.m_enableParseEscapeCharacters = !!i3935[4]
  i3934.m_EnableRaycastTarget = !!i3935[5]
  i3934.m_GetFontFeaturesAtRuntime = !!i3935[6]
  i3934.m_missingGlyphCharacter = i3935[7]
  i3934.m_warningsDisabled = !!i3935[8]
  request.r(i3935[9], i3935[10], 0, i3934, 'm_defaultFontAsset')
  i3934.m_defaultFontAssetPath = i3935[11]
  i3934.m_defaultFontSize = i3935[12]
  i3934.m_defaultAutoSizeMinRatio = i3935[13]
  i3934.m_defaultAutoSizeMaxRatio = i3935[14]
  i3934.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3935[15], i3935[16] )
  i3934.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3935[17], i3935[18] )
  i3934.m_autoSizeTextContainer = !!i3935[19]
  i3934.m_IsTextObjectScaleStatic = !!i3935[20]
  var i3937 = i3935[21]
  var i3936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3937.length; i += 2) {
  request.r(i3937[i + 0], i3937[i + 1], 1, i3936, '')
  }
  i3934.m_fallbackFontAssets = i3936
  i3934.m_matchMaterialPreset = !!i3935[22]
  request.r(i3935[23], i3935[24], 0, i3934, 'm_defaultSpriteAsset')
  i3934.m_defaultSpriteAssetPath = i3935[25]
  i3934.m_enableEmojiSupport = !!i3935[26]
  i3934.m_MissingCharacterSpriteUnicode = i3935[27]
  i3934.m_defaultColorGradientPresetsPath = i3935[28]
  request.r(i3935[29], i3935[30], 0, i3934, 'm_defaultStyleSheet')
  i3934.m_StyleSheetsResourcePath = i3935[31]
  request.r(i3935[32], i3935[33], 0, i3934, 'm_leadingCharacters')
  request.r(i3935[34], i3935[35], 0, i3934, 'm_followingCharacters')
  i3934.m_UseModernHangulLineBreakingRules = !!i3935[36]
  return i3934
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3938 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3939 = data
  request.r(i3939[0], i3939[1], 0, i3938, 'spriteSheet')
  var i3941 = i3939[2]
  var i3940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3941.length; i += 1) {
    i3940.add(request.d('TMPro.TMP_Sprite', i3941[i + 0]));
  }
  i3938.spriteInfoList = i3940
  var i3943 = i3939[3]
  var i3942 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3943.length; i += 2) {
  request.r(i3943[i + 0], i3943[i + 1], 1, i3942, '')
  }
  i3938.fallbackSpriteAssets = i3942
  i3938.hashCode = i3939[4]
  request.r(i3939[5], i3939[6], 0, i3938, 'material')
  i3938.materialHashCode = i3939[7]
  i3938.m_Version = i3939[8]
  i3938.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3939[9], i3938.m_FaceInfo)
  var i3945 = i3939[10]
  var i3944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3945.length; i += 1) {
    i3944.add(request.d('TMPro.TMP_SpriteCharacter', i3945[i + 0]));
  }
  i3938.m_SpriteCharacterTable = i3944
  var i3947 = i3939[11]
  var i3946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3947.length; i += 1) {
    i3946.add(request.d('TMPro.TMP_SpriteGlyph', i3947[i + 0]));
  }
  i3938.m_SpriteGlyphTable = i3946
  return i3938
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3950 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3951 = data
  i3950.name = i3951[0]
  i3950.hashCode = i3951[1]
  i3950.unicode = i3951[2]
  i3950.pivot = new pc.Vec2( i3951[3], i3951[4] )
  request.r(i3951[5], i3951[6], 0, i3950, 'sprite')
  i3950.id = i3951[7]
  i3950.x = i3951[8]
  i3950.y = i3951[9]
  i3950.width = i3951[10]
  i3950.height = i3951[11]
  i3950.xOffset = i3951[12]
  i3950.yOffset = i3951[13]
  i3950.xAdvance = i3951[14]
  i3950.scale = i3951[15]
  return i3950
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3956 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3957 = data
  i3956.m_Name = i3957[0]
  i3956.m_HashCode = i3957[1]
  i3956.m_ElementType = i3957[2]
  i3956.m_Unicode = i3957[3]
  i3956.m_GlyphIndex = i3957[4]
  i3956.m_Scale = i3957[5]
  return i3956
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3960 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3961 = data
  request.r(i3961[0], i3961[1], 0, i3960, 'sprite')
  i3960.m_Index = i3961[2]
  i3960.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3961[3], i3960.m_Metrics)
  i3960.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3961[4], i3960.m_GlyphRect)
  i3960.m_Scale = i3961[5]
  i3960.m_AtlasIndex = i3961[6]
  i3960.m_ClassDefinitionType = i3961[7]
  return i3960
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3962 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3963 = data
  var i3965 = i3963[0]
  var i3964 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3965.length; i += 1) {
    i3964.add(request.d('TMPro.TMP_Style', i3965[i + 0]));
  }
  i3962.m_StyleList = i3964
  return i3962
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3968 = root || request.c( 'TMPro.TMP_Style' )
  var i3969 = data
  i3968.m_Name = i3969[0]
  i3968.m_HashCode = i3969[1]
  i3968.m_OpeningDefinition = i3969[2]
  i3968.m_ClosingDefinition = i3969[3]
  i3968.m_OpeningTagArray = i3969[4]
  i3968.m_ClosingTagArray = i3969[5]
  i3968.m_OpeningTagUnicodeArray = i3969[6]
  i3968.m_ClosingTagUnicodeArray = i3969[7]
  return i3968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3971 = data
  var i3973 = i3971[0]
  var i3972 = []
  for(var i = 0; i < i3973.length; i += 1) {
    i3972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3973[i + 0]) );
  }
  i3970.files = i3972
  i3970.componentToPrefabIds = i3971[1]
  return i3970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3977 = data
  i3976.path = i3977[0]
  request.r(i3977[1], i3977[2], 0, i3976, 'unityObject')
  return i3976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3979 = data
  var i3981 = i3979[0]
  var i3980 = []
  for(var i = 0; i < i3981.length; i += 1) {
    i3980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3981[i + 0]) );
  }
  i3978.scriptsExecutionOrder = i3980
  var i3983 = i3979[1]
  var i3982 = []
  for(var i = 0; i < i3983.length; i += 1) {
    i3982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3983[i + 0]) );
  }
  i3978.sortingLayers = i3982
  var i3985 = i3979[2]
  var i3984 = []
  for(var i = 0; i < i3985.length; i += 1) {
    i3984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3985[i + 0]) );
  }
  i3978.cullingLayers = i3984
  i3978.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3979[3], i3978.timeSettings)
  i3978.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3979[4], i3978.physicsSettings)
  i3978.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3979[5], i3978.physics2DSettings)
  i3978.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3979[6], i3978.qualitySettings)
  i3978.enableRealtimeShadows = !!i3979[7]
  i3978.enableAutoInstancing = !!i3979[8]
  i3978.enableStaticBatching = !!i3979[9]
  i3978.enableDynamicBatching = !!i3979[10]
  i3978.lightmapEncodingQuality = i3979[11]
  i3978.desiredColorSpace = i3979[12]
  var i3987 = i3979[13]
  var i3986 = []
  for(var i = 0; i < i3987.length; i += 1) {
    i3986.push( i3987[i + 0] );
  }
  i3978.allTags = i3986
  return i3978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3991 = data
  i3990.name = i3991[0]
  i3990.value = i3991[1]
  return i3990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3995 = data
  i3994.id = i3995[0]
  i3994.name = i3995[1]
  i3994.value = i3995[2]
  return i3994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3999 = data
  i3998.id = i3999[0]
  i3998.name = i3999[1]
  return i3998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4001 = data
  i4000.fixedDeltaTime = i4001[0]
  i4000.maximumDeltaTime = i4001[1]
  i4000.timeScale = i4001[2]
  i4000.maximumParticleTimestep = i4001[3]
  return i4000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4003 = data
  i4002.gravity = new pc.Vec3( i4003[0], i4003[1], i4003[2] )
  i4002.defaultSolverIterations = i4003[3]
  i4002.bounceThreshold = i4003[4]
  i4002.autoSyncTransforms = !!i4003[5]
  i4002.autoSimulation = !!i4003[6]
  var i4005 = i4003[7]
  var i4004 = []
  for(var i = 0; i < i4005.length; i += 1) {
    i4004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4005[i + 0]) );
  }
  i4002.collisionMatrix = i4004
  return i4002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4009 = data
  i4008.enabled = !!i4009[0]
  i4008.layerId = i4009[1]
  i4008.otherLayerId = i4009[2]
  return i4008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4011 = data
  request.r(i4011[0], i4011[1], 0, i4010, 'material')
  i4010.gravity = new pc.Vec2( i4011[2], i4011[3] )
  i4010.positionIterations = i4011[4]
  i4010.velocityIterations = i4011[5]
  i4010.velocityThreshold = i4011[6]
  i4010.maxLinearCorrection = i4011[7]
  i4010.maxAngularCorrection = i4011[8]
  i4010.maxTranslationSpeed = i4011[9]
  i4010.maxRotationSpeed = i4011[10]
  i4010.baumgarteScale = i4011[11]
  i4010.baumgarteTOIScale = i4011[12]
  i4010.timeToSleep = i4011[13]
  i4010.linearSleepTolerance = i4011[14]
  i4010.angularSleepTolerance = i4011[15]
  i4010.defaultContactOffset = i4011[16]
  i4010.autoSimulation = !!i4011[17]
  i4010.queriesHitTriggers = !!i4011[18]
  i4010.queriesStartInColliders = !!i4011[19]
  i4010.callbacksOnDisable = !!i4011[20]
  i4010.reuseCollisionCallbacks = !!i4011[21]
  i4010.autoSyncTransforms = !!i4011[22]
  var i4013 = i4011[23]
  var i4012 = []
  for(var i = 0; i < i4013.length; i += 1) {
    i4012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4013[i + 0]) );
  }
  i4010.collisionMatrix = i4012
  return i4010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4017 = data
  i4016.enabled = !!i4017[0]
  i4016.layerId = i4017[1]
  i4016.otherLayerId = i4017[2]
  return i4016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4019 = data
  var i4021 = i4019[0]
  var i4020 = []
  for(var i = 0; i < i4021.length; i += 1) {
    i4020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4021[i + 0]) );
  }
  i4018.qualityLevels = i4020
  var i4023 = i4019[1]
  var i4022 = []
  for(var i = 0; i < i4023.length; i += 1) {
    i4022.push( i4023[i + 0] );
  }
  i4018.names = i4022
  i4018.shadows = i4019[2]
  i4018.anisotropicFiltering = i4019[3]
  i4018.antiAliasing = i4019[4]
  i4018.lodBias = i4019[5]
  i4018.shadowCascades = i4019[6]
  i4018.shadowDistance = i4019[7]
  i4018.shadowmaskMode = i4019[8]
  i4018.shadowProjection = i4019[9]
  i4018.shadowResolution = i4019[10]
  i4018.softParticles = !!i4019[11]
  i4018.softVegetation = !!i4019[12]
  i4018.activeColorSpace = i4019[13]
  i4018.desiredColorSpace = i4019[14]
  i4018.masterTextureLimit = i4019[15]
  i4018.maxQueuedFrames = i4019[16]
  i4018.particleRaycastBudget = i4019[17]
  i4018.pixelLightCount = i4019[18]
  i4018.realtimeReflectionProbes = !!i4019[19]
  i4018.shadowCascade2Split = i4019[20]
  i4018.shadowCascade4Split = new pc.Vec3( i4019[21], i4019[22], i4019[23] )
  i4018.streamingMipmapsActive = !!i4019[24]
  i4018.vSyncCount = i4019[25]
  i4018.asyncUploadBufferSize = i4019[26]
  i4018.asyncUploadTimeSlice = i4019[27]
  i4018.billboardsFaceCameraPosition = !!i4019[28]
  i4018.shadowNearPlaneOffset = i4019[29]
  i4018.streamingMipmapsMemoryBudget = i4019[30]
  i4018.maximumLODLevel = i4019[31]
  i4018.streamingMipmapsAddAllCameras = !!i4019[32]
  i4018.streamingMipmapsMaxLevelReduction = i4019[33]
  i4018.streamingMipmapsRenderersPerFrame = i4019[34]
  i4018.resolutionScalingFixedDPIFactor = i4019[35]
  i4018.streamingMipmapsMaxFileIORequests = i4019[36]
  i4018.currentQualityLevel = i4019[37]
  return i4018
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4026 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4027 = data
  i4026.xPlacement = i4027[0]
  i4026.yPlacement = i4027[1]
  i4026.xAdvance = i4027[2]
  i4026.yAdvance = i4027[3]
  return i4026
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4028 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i4029 = data
  i4028.m_GlyphIndex = i4029[0]
  i4028.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i4029[1], i4028.m_GlyphValueRecord)
  return i4028
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i4030 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i4031 = data
  i4030.m_XPlacement = i4031[0]
  i4030.m_YPlacement = i4031[1]
  i4030.m_XAdvance = i4031[2]
  i4030.m_YAdvance = i4031[3]
  return i4030
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[3],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[3],"76":[77],"78":[79],"80":[79],"9":[8],"81":[82],"83":[84],"85":[82],"86":[8],"87":[8],"11":[9],"19":[20,8],"88":[8],"10":[9],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"34":[8],"96":[8],"16":[20,8],"97":[8],"98":[8],"99":[8],"100":[8],"101":[20,8],"102":[8],"103":[6],"104":[6],"7":[6],"105":[6],"106":[3],"107":[3],"108":[109],"110":[3],"111":[112],"113":[8],"114":[20,8],"115":[77],"26":[20,8],"116":[117,77],"118":[77],"119":[77,120],"121":[54],"122":[62],"123":[112],"124":[125],"126":[8],"127":[77,8],"18":[8,20],"128":[8],"129":[20,8],"130":[77],"131":[20,8],"132":[8],"133":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","MixSkeletonSkin","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","DropZone","UnityEngine.PolygonCollider2D","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DraggableItem","UnityEngine.CanvasGroup","ClickItem","DG.Tweening.DOTweenAnimation","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "259.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BP_V17_NgocNDL_AnhPD";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1805";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4733";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Minecraft-Clone";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "fdd6d155-5d06-4e05-b642-0029bb5743be";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

