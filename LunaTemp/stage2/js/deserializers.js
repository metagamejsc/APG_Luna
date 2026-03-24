var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2592 = root || request.c( 'UnityEngine.JointSpring' )
  var i2593 = data
  i2592.spring = i2593[0]
  i2592.damper = i2593[1]
  i2592.targetPosition = i2593[2]
  return i2592
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2594 = root || request.c( 'UnityEngine.JointMotor' )
  var i2595 = data
  i2594.m_TargetVelocity = i2595[0]
  i2594.m_Force = i2595[1]
  i2594.m_FreeSpin = i2595[2]
  return i2594
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2596 = root || request.c( 'UnityEngine.JointLimits' )
  var i2597 = data
  i2596.m_Min = i2597[0]
  i2596.m_Max = i2597[1]
  i2596.m_Bounciness = i2597[2]
  i2596.m_BounceMinVelocity = i2597[3]
  i2596.m_ContactDistance = i2597[4]
  i2596.minBounce = i2597[5]
  i2596.maxBounce = i2597[6]
  return i2596
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2598 = root || request.c( 'UnityEngine.JointDrive' )
  var i2599 = data
  i2598.m_PositionSpring = i2599[0]
  i2598.m_PositionDamper = i2599[1]
  i2598.m_MaximumForce = i2599[2]
  i2598.m_UseAcceleration = i2599[3]
  return i2598
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2600 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2601 = data
  i2600.m_Spring = i2601[0]
  i2600.m_Damper = i2601[1]
  return i2600
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2602 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2603 = data
  i2602.m_Limit = i2603[0]
  i2602.m_Bounciness = i2603[1]
  i2602.m_ContactDistance = i2603[2]
  return i2602
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2604 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2605 = data
  i2604.m_ExtremumSlip = i2605[0]
  i2604.m_ExtremumValue = i2605[1]
  i2604.m_AsymptoteSlip = i2605[2]
  i2604.m_AsymptoteValue = i2605[3]
  i2604.m_Stiffness = i2605[4]
  return i2604
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2606 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2607 = data
  i2606.m_LowerAngle = i2607[0]
  i2606.m_UpperAngle = i2607[1]
  return i2606
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2608 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2609 = data
  i2608.m_MotorSpeed = i2609[0]
  i2608.m_MaximumMotorTorque = i2609[1]
  return i2608
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2610 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2611 = data
  i2610.m_DampingRatio = i2611[0]
  i2610.m_Frequency = i2611[1]
  i2610.m_Angle = i2611[2]
  return i2610
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2612 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2613 = data
  i2612.m_LowerTranslation = i2613[0]
  i2612.m_UpperTranslation = i2613[1]
  return i2612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2615 = data
  i2614.name = i2615[0]
  i2614.width = i2615[1]
  i2614.height = i2615[2]
  i2614.mipmapCount = i2615[3]
  i2614.anisoLevel = i2615[4]
  i2614.filterMode = i2615[5]
  i2614.hdr = !!i2615[6]
  i2614.format = i2615[7]
  i2614.wrapMode = i2615[8]
  i2614.alphaIsTransparency = !!i2615[9]
  i2614.alphaSource = i2615[10]
  i2614.graphicsFormat = i2615[11]
  i2614.sRGBTexture = !!i2615[12]
  i2614.desiredColorSpace = i2615[13]
  i2614.wrapU = i2615[14]
  i2614.wrapV = i2615[15]
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2616 = root || new pc.UnityMaterial()
  var i2617 = data
  i2616.name = i2617[0]
  request.r(i2617[1], i2617[2], 0, i2616, 'shader')
  i2616.renderQueue = i2617[3]
  i2616.enableInstancing = !!i2617[4]
  var i2619 = i2617[5]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2619[i + 0]) );
  }
  i2616.floatParameters = i2618
  var i2621 = i2617[6]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2621[i + 0]) );
  }
  i2616.colorParameters = i2620
  var i2623 = i2617[7]
  var i2622 = []
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2623[i + 0]) );
  }
  i2616.vectorParameters = i2622
  var i2625 = i2617[8]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2625[i + 0]) );
  }
  i2616.textureParameters = i2624
  var i2627 = i2617[9]
  var i2626 = []
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2627[i + 0]) );
  }
  i2616.materialFlags = i2626
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2631 = data
  i2630.name = i2631[0]
  i2630.value = i2631[1]
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2635 = data
  i2634.name = i2635[0]
  i2634.value = new pc.Color(i2635[1], i2635[2], i2635[3], i2635[4])
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2639 = data
  i2638.name = i2639[0]
  i2638.value = new pc.Vec4( i2639[1], i2639[2], i2639[3], i2639[4] )
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2643 = data
  i2642.name = i2643[0]
  request.r(i2643[1], i2643[2], 0, i2642, 'value')
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2647 = data
  i2646.name = i2647[0]
  i2646.enabled = !!i2647[1]
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2649 = data
  i2648.name = i2649[0]
  i2648.index = i2649[1]
  i2648.startup = !!i2649[2]
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2651 = data
  i2650.position = new pc.Vec3( i2651[0], i2651[1], i2651[2] )
  i2650.scale = new pc.Vec3( i2651[3], i2651[4], i2651[5] )
  i2650.rotation = new pc.Quat(i2651[6], i2651[7], i2651[8], i2651[9])
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2653 = data
  i2652.aspect = i2653[0]
  i2652.orthographic = !!i2653[1]
  i2652.orthographicSize = i2653[2]
  i2652.backgroundColor = new pc.Color(i2653[3], i2653[4], i2653[5], i2653[6])
  i2652.nearClipPlane = i2653[7]
  i2652.farClipPlane = i2653[8]
  i2652.fieldOfView = i2653[9]
  i2652.depth = i2653[10]
  i2652.clearFlags = i2653[11]
  i2652.cullingMask = i2653[12]
  i2652.rect = i2653[13]
  request.r(i2653[14], i2653[15], 0, i2652, 'targetTexture')
  i2652.usePhysicalProperties = !!i2653[16]
  i2652.focalLength = i2653[17]
  i2652.sensorSize = new pc.Vec2( i2653[18], i2653[19] )
  i2652.lensShift = new pc.Vec2( i2653[20], i2653[21] )
  i2652.gateFit = i2653[22]
  i2652.commandBufferCount = i2653[23]
  i2652.cameraType = i2653[24]
  i2652.enabled = !!i2653[25]
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2655 = data
  i2654.name = i2655[0]
  i2654.tagId = i2655[1]
  i2654.enabled = !!i2655[2]
  i2654.isStatic = !!i2655[3]
  i2654.layer = i2655[4]
  return i2654
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2656 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2657 = data
  request.r(i2657[0], i2657[1], 0, i2656, 'm_FirstSelected')
  i2656.m_sendNavigationEvents = !!i2657[2]
  i2656.m_DragThreshold = i2657[3]
  return i2656
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2658 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2659 = data
  i2658.m_HorizontalAxis = i2659[0]
  i2658.m_VerticalAxis = i2659[1]
  i2658.m_SubmitButton = i2659[2]
  i2658.m_CancelButton = i2659[3]
  i2658.m_InputActionsPerSecond = i2659[4]
  i2658.m_RepeatDelay = i2659[5]
  i2658.m_ForceModuleActive = !!i2659[6]
  i2658.m_SendPointerHoverToParent = !!i2659[7]
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2661 = data
  i2660.pivot = new pc.Vec2( i2661[0], i2661[1] )
  i2660.anchorMin = new pc.Vec2( i2661[2], i2661[3] )
  i2660.anchorMax = new pc.Vec2( i2661[4], i2661[5] )
  i2660.sizeDelta = new pc.Vec2( i2661[6], i2661[7] )
  i2660.anchoredPosition3D = new pc.Vec3( i2661[8], i2661[9], i2661[10] )
  i2660.rotation = new pc.Quat(i2661[11], i2661[12], i2661[13], i2661[14])
  i2660.scale = new pc.Vec3( i2661[15], i2661[16], i2661[17] )
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2663 = data
  i2662.planeDistance = i2663[0]
  i2662.referencePixelsPerUnit = i2663[1]
  i2662.isFallbackOverlay = !!i2663[2]
  i2662.renderMode = i2663[3]
  i2662.renderOrder = i2663[4]
  i2662.sortingLayerName = i2663[5]
  i2662.sortingOrder = i2663[6]
  i2662.scaleFactor = i2663[7]
  request.r(i2663[8], i2663[9], 0, i2662, 'worldCamera')
  i2662.overrideSorting = !!i2663[10]
  i2662.pixelPerfect = !!i2663[11]
  i2662.targetDisplay = i2663[12]
  i2662.overridePixelPerfect = !!i2663[13]
  i2662.enabled = !!i2663[14]
  return i2662
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2664 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2665 = data
  i2664.m_UiScaleMode = i2665[0]
  i2664.m_ReferencePixelsPerUnit = i2665[1]
  i2664.m_ScaleFactor = i2665[2]
  i2664.m_ReferenceResolution = new pc.Vec2( i2665[3], i2665[4] )
  i2664.m_ScreenMatchMode = i2665[5]
  i2664.m_MatchWidthOrHeight = i2665[6]
  i2664.m_PhysicalUnit = i2665[7]
  i2664.m_FallbackScreenDPI = i2665[8]
  i2664.m_DefaultSpriteDPI = i2665[9]
  i2664.m_DynamicPixelsPerUnit = i2665[10]
  i2664.m_PresetInfoIsWorld = !!i2665[11]
  return i2664
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2666 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2667 = data
  i2666.m_IgnoreReversedGraphics = !!i2667[0]
  i2666.m_BlockingObjects = i2667[1]
  i2666.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2667[2] )
  return i2666
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i2668 = root || request.c( 'LunaManager' )
  var i2669 = data
  var i2671 = i2669[0]
  var i2670 = []
  for(var i = 0; i < i2671.length; i += 2) {
  request.r(i2671[i + 0], i2671[i + 1], 2, i2670, '')
  }
  i2668.lstBtnInstall = i2670
  request.r(i2669[1], i2669[2], 0, i2668, 'WinGO')
  request.r(i2669[3], i2669[4], 0, i2668, 'LoseGO')
  request.r(i2669[5], i2669[6], 0, i2668, 'StartCard')
  request.r(i2669[7], i2669[8], 0, i2668, 'EndCard')
  request.r(i2669[9], i2669[10], 0, i2668, 'Parent')
  i2668.isDrag = !!i2669[11]
  i2668.timeDrag = i2669[12]
  i2668.countPlay = i2669[13]
  i2668.countPlayFinal = i2669[14]
  i2668.countPlayMax = i2669[15]
  i2668.timeDropFinal = i2669[16]
  i2668.colorBG = new pc.Color(i2669[17], i2669[18], i2669[19], i2669[20])
  request.r(i2669[21], i2669[22], 0, i2668, 'texture2D')
  request.r(i2669[23], i2669[24], 0, i2668, 'rawImageBG')
  request.r(i2669[25], i2669[26], 0, i2668, 'MSSGirl')
  request.r(i2669[27], i2669[28], 0, i2668, 'MSSBoy')
  request.r(i2669[29], i2669[30], 0, i2668, 'MSSGroom')
  request.r(i2669[31], i2669[32], 0, i2668, 'MSSBride')
  request.r(i2669[33], i2669[34], 0, i2668, 'textProgess')
  request.r(i2669[35], i2669[36], 0, i2668, 'imgProgess')
  request.r(i2669[37], i2669[38], 0, i2668, 'timeText')
  return i2668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2675 = data
  i2674.cullTransparentMesh = !!i2675[0]
  return i2674
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2676 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2677 = data
  request.r(i2677[0], i2677[1], 0, i2676, 'm_Texture')
  i2676.m_UVRect = UnityEngine.Rect.MinMaxRect(i2677[2], i2677[3], i2677[4], i2677[5])
  i2676.m_Maskable = !!i2677[6]
  request.r(i2677[7], i2677[8], 0, i2676, 'm_Material')
  i2676.m_Color = new pc.Color(i2677[9], i2677[10], i2677[11], i2677[12])
  i2676.m_RaycastTarget = !!i2677[13]
  i2676.m_RaycastPadding = new pc.Vec4( i2677[14], i2677[15], i2677[16], i2677[17] )
  return i2676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2679 = data
  request.r(i2679[0], i2679[1], 0, i2678, 'clip')
  request.r(i2679[2], i2679[3], 0, i2678, 'outputAudioMixerGroup')
  i2678.playOnAwake = !!i2679[4]
  i2678.loop = !!i2679[5]
  i2678.time = i2679[6]
  i2678.volume = i2679[7]
  i2678.pitch = i2679[8]
  i2678.enabled = !!i2679[9]
  return i2678
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2680 = root || request.c( 'UnityEngine.UI.Image' )
  var i2681 = data
  request.r(i2681[0], i2681[1], 0, i2680, 'm_Sprite')
  i2680.m_Type = i2681[2]
  i2680.m_PreserveAspect = !!i2681[3]
  i2680.m_FillCenter = !!i2681[4]
  i2680.m_FillMethod = i2681[5]
  i2680.m_FillAmount = i2681[6]
  i2680.m_FillClockwise = !!i2681[7]
  i2680.m_FillOrigin = i2681[8]
  i2680.m_UseSpriteMesh = !!i2681[9]
  i2680.m_PixelsPerUnitMultiplier = i2681[10]
  i2680.m_Maskable = !!i2681[11]
  request.r(i2681[12], i2681[13], 0, i2680, 'm_Material')
  i2680.m_Color = new pc.Color(i2681[14], i2681[15], i2681[16], i2681[17])
  i2680.m_RaycastTarget = !!i2681[18]
  i2680.m_RaycastPadding = new pc.Vec4( i2681[19], i2681[20], i2681[21], i2681[22] )
  return i2680
}

Deserializers["DropZone"] = function (request, data, root) {
  var i2682 = root || request.c( 'DropZone' )
  var i2683 = data
  i2682.idDrop = i2683[0]
  var i2685 = i2683[1]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 2) {
  request.r(i2685[i + 0], i2685[i + 1], 2, i2684, '')
  }
  i2682.steps = i2684
  request.r(i2683[2], i2683[3], 0, i2682, 'stepLose')
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2689 = data
  i2688.usedByComposite = !!i2689[0]
  i2688.autoTiling = !!i2689[1]
  var i2691 = i2689[2]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
  var i2693 = i2691[i + 0]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 2) {
    i2692.push( new pc.Vec2( i2693[i + 0], i2693[i + 1] ) );
  }
    i2690.push( i2692 );
  }
  i2688.points = i2690
  i2688.enabled = !!i2689[3]
  i2688.isTrigger = !!i2689[4]
  i2688.usedByEffector = !!i2689[5]
  i2688.density = i2689[6]
  i2688.offset = new pc.Vec2( i2689[7], i2689[8] )
  request.r(i2689[9], i2689[10], 0, i2688, 'material')
  return i2688
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2700 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2701 = data
  request.r(i2701[0], i2701[1], 0, i2700, 'skeletonDataAsset')
  request.r(i2701[2], i2701[3], 0, i2700, 'additiveMaterial')
  request.r(i2701[4], i2701[5], 0, i2700, 'multiplyMaterial')
  request.r(i2701[6], i2701[7], 0, i2700, 'screenMaterial')
  i2700.initialSkinName = i2701[8]
  i2700.initialFlipX = !!i2701[9]
  i2700.initialFlipY = !!i2701[10]
  i2700.startingAnimation = i2701[11]
  i2700.startingLoop = !!i2701[12]
  i2700.timeScale = i2701[13]
  i2700.freeze = !!i2701[14]
  i2700.layoutScaleMode = i2701[15]
  i2700.updateWhenInvisible = i2701[16]
  i2700.allowMultipleCanvasRenderers = !!i2701[17]
  var i2703 = i2701[18]
  var i2702 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2703.length; i += 2) {
  request.r(i2703[i + 0], i2703[i + 1], 1, i2702, '')
  }
  i2700.canvasRenderers = i2702
  i2700.enableSeparatorSlots = !!i2701[19]
  i2700.updateSeparatorPartLocation = !!i2701[20]
  i2700.updateSeparatorPartScale = !!i2701[21]
  i2700.disableMeshAssignmentOnOverride = !!i2701[22]
  i2700.referenceSize = new pc.Vec2( i2701[23], i2701[24] )
  i2700.referenceScale = i2701[25]
  i2700.rectTransformSize = new pc.Vec2( i2701[26], i2701[27] )
  i2700.editReferenceRect = !!i2701[28]
  var i2705 = i2701[29]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( i2705[i + 0] );
  }
  i2700.separatorSlotNames = i2704
  var i2707 = i2701[30]
  var i2706 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2707.length; i += 2) {
  request.r(i2707[i + 0], i2707[i + 1], 1, i2706, '')
  }
  i2700.separatorParts = i2706
  i2700.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2701[31], i2700.meshGenerator)
  i2700.updateTiming = i2701[32]
  i2700.unscaledTime = !!i2701[33]
  i2700.m_Maskable = !!i2701[34]
  request.r(i2701[35], i2701[36], 0, i2700, 'm_Material')
  i2700.m_Color = new pc.Color(i2701[37], i2701[38], i2701[39], i2701[40])
  i2700.m_RaycastTarget = !!i2701[41]
  i2700.m_RaycastPadding = new pc.Vec4( i2701[42], i2701[43], i2701[44], i2701[45] )
  return i2700
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2714 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2715 = data
  i2714.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2715[0], i2714.settings)
  return i2714
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2716 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2717 = data
  i2716.useClipping = !!i2717[0]
  i2716.zSpacing = i2717[1]
  i2716.pmaVertexColors = !!i2717[2]
  i2716.tintBlack = !!i2717[3]
  i2716.canvasGroupTintBlack = !!i2717[4]
  i2716.calculateTangents = !!i2717[5]
  i2716.addNormals = !!i2717[6]
  i2716.immutableTriangles = !!i2717[7]
  return i2716
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i2718 = root || request.c( 'MixSkeletonSkin' )
  var i2719 = data
  request.r(i2719[0], i2719[1], 0, i2718, 'skeletonAnimation')
  var i2721 = i2719[2]
  var i2720 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.add(i2721[i + 0]);
  }
  i2718.skinNames = i2720
  i2718.defaultAnim = i2719[3]
  return i2718
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i2724 = root || request.c( 'DraggableItem' )
  var i2725 = data
  i2724.idDrag = i2725[0]
  i2724.isProcess = !!i2725[1]
  i2724.isLose = !!i2725[2]
  i2724.isHide = !!i2725[3]
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2727 = data
  i2726.m_Alpha = i2727[0]
  i2726.m_Interactable = !!i2727[1]
  i2726.m_BlocksRaycasts = !!i2727[2]
  i2726.m_IgnoreParentGroups = !!i2727[3]
  i2726.enabled = !!i2727[4]
  return i2726
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i2728 = root || request.c( 'ClickItem' )
  var i2729 = data
  var i2731 = i2729[0]
  var i2730 = []
  for(var i = 0; i < i2731.length; i += 2) {
  request.r(i2731[i + 0], i2731[i + 1], 2, i2730, '')
  }
  i2728.steps = i2730
  i2728.currentStep = i2729[1]
  i2728.isProcess = !!i2729[2]
  return i2728
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2732 = root || request.c( 'UnityEngine.UI.Button' )
  var i2733 = data
  i2732.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2733[0], i2732.m_OnClick)
  i2732.m_Navigation = request.d('UnityEngine.UI.Navigation', i2733[1], i2732.m_Navigation)
  i2732.m_Transition = i2733[2]
  i2732.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2733[3], i2732.m_Colors)
  i2732.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2733[4], i2732.m_SpriteState)
  i2732.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2733[5], i2732.m_AnimationTriggers)
  i2732.m_Interactable = !!i2733[6]
  request.r(i2733[7], i2733[8], 0, i2732, 'm_TargetGraphic')
  return i2732
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2734 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2735 = data
  i2734.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2735[0], i2734.m_PersistentCalls)
  return i2734
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2736 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2737 = data
  var i2739 = i2737[0]
  var i2738 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.add(request.d('UnityEngine.Events.PersistentCall', i2739[i + 0]));
  }
  i2736.m_Calls = i2738
  return i2736
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2742 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2743 = data
  request.r(i2743[0], i2743[1], 0, i2742, 'm_Target')
  i2742.m_TargetAssemblyTypeName = i2743[2]
  i2742.m_MethodName = i2743[3]
  i2742.m_Mode = i2743[4]
  i2742.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2743[5], i2742.m_Arguments)
  i2742.m_CallState = i2743[6]
  return i2742
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2744 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2745 = data
  i2744.m_Mode = i2745[0]
  i2744.m_WrapAround = !!i2745[1]
  request.r(i2745[2], i2745[3], 0, i2744, 'm_SelectOnUp')
  request.r(i2745[4], i2745[5], 0, i2744, 'm_SelectOnDown')
  request.r(i2745[6], i2745[7], 0, i2744, 'm_SelectOnLeft')
  request.r(i2745[8], i2745[9], 0, i2744, 'm_SelectOnRight')
  return i2744
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2746 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2747 = data
  i2746.m_NormalColor = new pc.Color(i2747[0], i2747[1], i2747[2], i2747[3])
  i2746.m_HighlightedColor = new pc.Color(i2747[4], i2747[5], i2747[6], i2747[7])
  i2746.m_PressedColor = new pc.Color(i2747[8], i2747[9], i2747[10], i2747[11])
  i2746.m_SelectedColor = new pc.Color(i2747[12], i2747[13], i2747[14], i2747[15])
  i2746.m_DisabledColor = new pc.Color(i2747[16], i2747[17], i2747[18], i2747[19])
  i2746.m_ColorMultiplier = i2747[20]
  i2746.m_FadeDuration = i2747[21]
  return i2746
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2748 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2749 = data
  request.r(i2749[0], i2749[1], 0, i2748, 'm_HighlightedSprite')
  request.r(i2749[2], i2749[3], 0, i2748, 'm_PressedSprite')
  request.r(i2749[4], i2749[5], 0, i2748, 'm_SelectedSprite')
  request.r(i2749[6], i2749[7], 0, i2748, 'm_DisabledSprite')
  return i2748
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2750 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2751 = data
  i2750.m_NormalTrigger = i2751[0]
  i2750.m_HighlightedTrigger = i2751[1]
  i2750.m_PressedTrigger = i2751[2]
  i2750.m_SelectedTrigger = i2751[3]
  i2750.m_DisabledTrigger = i2751[4]
  return i2750
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2752 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2753 = data
  i2752.targetIsSelf = !!i2753[0]
  request.r(i2753[1], i2753[2], 0, i2752, 'targetGO')
  i2752.tweenTargetIsTargetGO = !!i2753[3]
  i2752.delay = i2753[4]
  i2752.duration = i2753[5]
  i2752.easeType = i2753[6]
  i2752.easeCurve = new pc.AnimationCurve( { keys_flow: i2753[7] } )
  i2752.loopType = i2753[8]
  i2752.loops = i2753[9]
  i2752.id = i2753[10]
  i2752.isRelative = !!i2753[11]
  i2752.isFrom = !!i2753[12]
  i2752.isIndependentUpdate = !!i2753[13]
  i2752.autoKill = !!i2753[14]
  i2752.autoGenerate = !!i2753[15]
  i2752.isActive = !!i2753[16]
  i2752.isValid = !!i2753[17]
  request.r(i2753[18], i2753[19], 0, i2752, 'target')
  i2752.animationType = i2753[20]
  i2752.targetType = i2753[21]
  i2752.forcedTargetType = i2753[22]
  i2752.autoPlay = !!i2753[23]
  i2752.useTargetAsV3 = !!i2753[24]
  i2752.endValueFloat = i2753[25]
  i2752.endValueV3 = new pc.Vec3( i2753[26], i2753[27], i2753[28] )
  i2752.endValueV2 = new pc.Vec2( i2753[29], i2753[30] )
  i2752.endValueColor = new pc.Color(i2753[31], i2753[32], i2753[33], i2753[34])
  i2752.endValueString = i2753[35]
  i2752.endValueRect = UnityEngine.Rect.MinMaxRect(i2753[36], i2753[37], i2753[38], i2753[39])
  request.r(i2753[40], i2753[41], 0, i2752, 'endValueTransform')
  i2752.optionalBool0 = !!i2753[42]
  i2752.optionalBool1 = !!i2753[43]
  i2752.optionalFloat0 = i2753[44]
  i2752.optionalInt0 = i2753[45]
  i2752.optionalRotationMode = i2753[46]
  i2752.optionalScrambleMode = i2753[47]
  i2752.optionalShakeRandomnessMode = i2753[48]
  i2752.optionalString = i2753[49]
  i2752.updateType = i2753[50]
  i2752.isSpeedBased = !!i2753[51]
  i2752.hasOnStart = !!i2753[52]
  i2752.hasOnPlay = !!i2753[53]
  i2752.hasOnUpdate = !!i2753[54]
  i2752.hasOnStepComplete = !!i2753[55]
  i2752.hasOnComplete = !!i2753[56]
  i2752.hasOnTweenCreated = !!i2753[57]
  i2752.hasOnRewind = !!i2753[58]
  i2752.onStart = request.d('UnityEngine.Events.UnityEvent', i2753[59], i2752.onStart)
  i2752.onPlay = request.d('UnityEngine.Events.UnityEvent', i2753[60], i2752.onPlay)
  i2752.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2753[61], i2752.onUpdate)
  i2752.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2753[62], i2752.onStepComplete)
  i2752.onComplete = request.d('UnityEngine.Events.UnityEvent', i2753[63], i2752.onComplete)
  i2752.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2753[64], i2752.onTweenCreated)
  i2752.onRewind = request.d('UnityEngine.Events.UnityEvent', i2753[65], i2752.onRewind)
  return i2752
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2754 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2755 = data
  i2754.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2755[0], i2754.m_PersistentCalls)
  return i2754
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2756 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2757 = data
  request.r(i2757[0], i2757[1], 0, i2756, 'm_ObjectArgument')
  i2756.m_ObjectArgumentAssemblyTypeName = i2757[2]
  i2756.m_IntArgument = i2757[3]
  i2756.m_FloatArgument = i2757[4]
  i2756.m_StringArgument = i2757[5]
  i2756.m_BoolArgument = !!i2757[6]
  return i2756
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2758 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2759 = data
  i2758.m_hasFontAssetChanged = !!i2759[0]
  request.r(i2759[1], i2759[2], 0, i2758, 'm_baseMaterial')
  i2758.m_maskOffset = new pc.Vec4( i2759[3], i2759[4], i2759[5], i2759[6] )
  i2758.m_text = i2759[7]
  i2758.m_isRightToLeft = !!i2759[8]
  request.r(i2759[9], i2759[10], 0, i2758, 'm_fontAsset')
  request.r(i2759[11], i2759[12], 0, i2758, 'm_sharedMaterial')
  var i2761 = i2759[13]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 2) {
  request.r(i2761[i + 0], i2761[i + 1], 2, i2760, '')
  }
  i2758.m_fontSharedMaterials = i2760
  request.r(i2759[14], i2759[15], 0, i2758, 'm_fontMaterial')
  var i2763 = i2759[16]
  var i2762 = []
  for(var i = 0; i < i2763.length; i += 2) {
  request.r(i2763[i + 0], i2763[i + 1], 2, i2762, '')
  }
  i2758.m_fontMaterials = i2762
  i2758.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2759[17], i2759[18], i2759[19], i2759[20])
  i2758.m_fontColor = new pc.Color(i2759[21], i2759[22], i2759[23], i2759[24])
  i2758.m_enableVertexGradient = !!i2759[25]
  i2758.m_colorMode = i2759[26]
  i2758.m_fontColorGradient = request.d('TMPro.VertexGradient', i2759[27], i2758.m_fontColorGradient)
  request.r(i2759[28], i2759[29], 0, i2758, 'm_fontColorGradientPreset')
  request.r(i2759[30], i2759[31], 0, i2758, 'm_spriteAsset')
  i2758.m_tintAllSprites = !!i2759[32]
  request.r(i2759[33], i2759[34], 0, i2758, 'm_StyleSheet')
  i2758.m_TextStyleHashCode = i2759[35]
  i2758.m_overrideHtmlColors = !!i2759[36]
  i2758.m_faceColor = UnityEngine.Color32.ConstructColor(i2759[37], i2759[38], i2759[39], i2759[40])
  i2758.m_fontSize = i2759[41]
  i2758.m_fontSizeBase = i2759[42]
  i2758.m_fontWeight = i2759[43]
  i2758.m_enableAutoSizing = !!i2759[44]
  i2758.m_fontSizeMin = i2759[45]
  i2758.m_fontSizeMax = i2759[46]
  i2758.m_fontStyle = i2759[47]
  i2758.m_HorizontalAlignment = i2759[48]
  i2758.m_VerticalAlignment = i2759[49]
  i2758.m_textAlignment = i2759[50]
  i2758.m_characterSpacing = i2759[51]
  i2758.m_wordSpacing = i2759[52]
  i2758.m_lineSpacing = i2759[53]
  i2758.m_lineSpacingMax = i2759[54]
  i2758.m_paragraphSpacing = i2759[55]
  i2758.m_charWidthMaxAdj = i2759[56]
  i2758.m_enableWordWrapping = !!i2759[57]
  i2758.m_wordWrappingRatios = i2759[58]
  i2758.m_overflowMode = i2759[59]
  request.r(i2759[60], i2759[61], 0, i2758, 'm_linkedTextComponent')
  request.r(i2759[62], i2759[63], 0, i2758, 'parentLinkedComponent')
  i2758.m_enableKerning = !!i2759[64]
  i2758.m_enableExtraPadding = !!i2759[65]
  i2758.checkPaddingRequired = !!i2759[66]
  i2758.m_isRichText = !!i2759[67]
  i2758.m_parseCtrlCharacters = !!i2759[68]
  i2758.m_isOrthographic = !!i2759[69]
  i2758.m_isCullingEnabled = !!i2759[70]
  i2758.m_horizontalMapping = i2759[71]
  i2758.m_verticalMapping = i2759[72]
  i2758.m_uvLineOffset = i2759[73]
  i2758.m_geometrySortingOrder = i2759[74]
  i2758.m_IsTextObjectScaleStatic = !!i2759[75]
  i2758.m_VertexBufferAutoSizeReduction = !!i2759[76]
  i2758.m_useMaxVisibleDescender = !!i2759[77]
  i2758.m_pageToDisplay = i2759[78]
  i2758.m_margin = new pc.Vec4( i2759[79], i2759[80], i2759[81], i2759[82] )
  i2758.m_isUsingLegacyAnimationComponent = !!i2759[83]
  i2758.m_isVolumetricText = !!i2759[84]
  i2758.m_Maskable = !!i2759[85]
  request.r(i2759[86], i2759[87], 0, i2758, 'm_Material')
  i2758.m_Color = new pc.Color(i2759[88], i2759[89], i2759[90], i2759[91])
  i2758.m_RaycastTarget = !!i2759[92]
  i2758.m_RaycastPadding = new pc.Vec4( i2759[93], i2759[94], i2759[95], i2759[96] )
  return i2758
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2766 = root || request.c( 'TMPro.VertexGradient' )
  var i2767 = data
  i2766.topLeft = new pc.Color(i2767[0], i2767[1], i2767[2], i2767[3])
  i2766.topRight = new pc.Color(i2767[4], i2767[5], i2767[6], i2767[7])
  i2766.bottomLeft = new pc.Color(i2767[8], i2767[9], i2767[10], i2767[11])
  i2766.bottomRight = new pc.Color(i2767[12], i2767[13], i2767[14], i2767[15])
  return i2766
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2768 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2769 = data
  i2768.m_ShowMaskGraphic = !!i2769[0]
  return i2768
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2770 = root || request.c( 'AudioController' )
  var i2771 = data
  request.r(i2771[0], i2771[1], 0, i2770, 'bgmSource')
  request.r(i2771[2], i2771[3], 0, i2770, 'sfxSource')
  var i2773 = i2771[4]
  var i2772 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.add(request.d('AudioEntry', i2773[i + 0]));
  }
  i2770.audioEntries = i2772
  return i2770
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i2776 = root || request.c( 'AudioEntry' )
  var i2777 = data
  i2776.key = i2777[0]
  request.r(i2777[1], i2777[2], 0, i2776, 'clip')
  i2776.volume = i2777[3]
  return i2776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2779 = data
  i2778.ambientIntensity = i2779[0]
  i2778.reflectionIntensity = i2779[1]
  i2778.ambientMode = i2779[2]
  i2778.ambientLight = new pc.Color(i2779[3], i2779[4], i2779[5], i2779[6])
  i2778.ambientSkyColor = new pc.Color(i2779[7], i2779[8], i2779[9], i2779[10])
  i2778.ambientGroundColor = new pc.Color(i2779[11], i2779[12], i2779[13], i2779[14])
  i2778.ambientEquatorColor = new pc.Color(i2779[15], i2779[16], i2779[17], i2779[18])
  i2778.fogColor = new pc.Color(i2779[19], i2779[20], i2779[21], i2779[22])
  i2778.fogEndDistance = i2779[23]
  i2778.fogStartDistance = i2779[24]
  i2778.fogDensity = i2779[25]
  i2778.fog = !!i2779[26]
  request.r(i2779[27], i2779[28], 0, i2778, 'skybox')
  i2778.fogMode = i2779[29]
  var i2781 = i2779[30]
  var i2780 = []
  for(var i = 0; i < i2781.length; i += 1) {
    i2780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2781[i + 0]) );
  }
  i2778.lightmaps = i2780
  i2778.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2779[31], i2778.lightProbes)
  i2778.lightmapsMode = i2779[32]
  i2778.mixedBakeMode = i2779[33]
  i2778.environmentLightingMode = i2779[34]
  i2778.ambientProbe = new pc.SphericalHarmonicsL2(i2779[35])
  i2778.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2779[36])
  i2778.useReferenceAmbientProbe = !!i2779[37]
  request.r(i2779[38], i2779[39], 0, i2778, 'customReflection')
  request.r(i2779[40], i2779[41], 0, i2778, 'defaultReflection')
  i2778.defaultReflectionMode = i2779[42]
  i2778.defaultReflectionResolution = i2779[43]
  i2778.sunLightObjectId = i2779[44]
  i2778.pixelLightCount = i2779[45]
  i2778.defaultReflectionHDR = !!i2779[46]
  i2778.hasLightDataAsset = !!i2779[47]
  i2778.hasManualGenerate = !!i2779[48]
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2785 = data
  request.r(i2785[0], i2785[1], 0, i2784, 'lightmapColor')
  request.r(i2785[2], i2785[3], 0, i2784, 'lightmapDirection')
  return i2784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2786 = root || new UnityEngine.LightProbes()
  var i2787 = data
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2795 = data
  var i2797 = i2795[0]
  var i2796 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2797[i + 0]));
  }
  i2794.ShaderCompilationErrors = i2796
  i2794.name = i2795[1]
  i2794.guid = i2795[2]
  var i2799 = i2795[3]
  var i2798 = []
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.push( i2799[i + 0] );
  }
  i2794.shaderDefinedKeywords = i2798
  var i2801 = i2795[4]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2801[i + 0]) );
  }
  i2794.passes = i2800
  var i2803 = i2795[5]
  var i2802 = []
  for(var i = 0; i < i2803.length; i += 1) {
    i2802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2803[i + 0]) );
  }
  i2794.usePasses = i2802
  var i2805 = i2795[6]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2805[i + 0]) );
  }
  i2794.defaultParameterValues = i2804
  request.r(i2795[7], i2795[8], 0, i2794, 'unityFallbackShader')
  i2794.readDepth = !!i2795[9]
  i2794.isCreatedByShaderGraph = !!i2795[10]
  i2794.disableBatching = !!i2795[11]
  i2794.compiled = !!i2795[12]
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2809 = data
  i2808.shaderName = i2809[0]
  i2808.errorMessage = i2809[1]
  return i2808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2812 = root || new pc.UnityShaderPass()
  var i2813 = data
  i2812.id = i2813[0]
  i2812.subShaderIndex = i2813[1]
  i2812.name = i2813[2]
  i2812.passType = i2813[3]
  i2812.grabPassTextureName = i2813[4]
  i2812.usePass = !!i2813[5]
  i2812.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2813[6], i2812.zTest)
  i2812.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2813[7], i2812.zWrite)
  i2812.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2813[8], i2812.culling)
  i2812.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2813[9], i2812.blending)
  i2812.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2813[10], i2812.alphaBlending)
  i2812.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2813[11], i2812.colorWriteMask)
  i2812.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2813[12], i2812.offsetUnits)
  i2812.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2813[13], i2812.offsetFactor)
  i2812.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2813[14], i2812.stencilRef)
  i2812.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2813[15], i2812.stencilReadMask)
  i2812.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2813[16], i2812.stencilWriteMask)
  i2812.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2813[17], i2812.stencilOp)
  i2812.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2813[18], i2812.stencilOpFront)
  i2812.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2813[19], i2812.stencilOpBack)
  var i2815 = i2813[20]
  var i2814 = []
  for(var i = 0; i < i2815.length; i += 1) {
    i2814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2815[i + 0]) );
  }
  i2812.tags = i2814
  var i2817 = i2813[21]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.push( i2817[i + 0] );
  }
  i2812.passDefinedKeywords = i2816
  var i2819 = i2813[22]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2819[i + 0]) );
  }
  i2812.passDefinedKeywordGroups = i2818
  var i2821 = i2813[23]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2821[i + 0]) );
  }
  i2812.variants = i2820
  var i2823 = i2813[24]
  var i2822 = []
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2823[i + 0]) );
  }
  i2812.excludedVariants = i2822
  i2812.hasDepthReader = !!i2813[25]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2825 = data
  i2824.val = i2825[0]
  i2824.name = i2825[1]
  return i2824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2827 = data
  i2826.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2827[0], i2826.src)
  i2826.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2827[1], i2826.dst)
  i2826.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2827[2], i2826.op)
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2829 = data
  i2828.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2829[0], i2828.pass)
  i2828.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2829[1], i2828.fail)
  i2828.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2829[2], i2828.zFail)
  i2828.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2829[3], i2828.comp)
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2833 = data
  i2832.name = i2833[0]
  i2832.value = i2833[1]
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2837 = data
  var i2839 = i2837[0]
  var i2838 = []
  for(var i = 0; i < i2839.length; i += 1) {
    i2838.push( i2839[i + 0] );
  }
  i2836.keywords = i2838
  i2836.hasDiscard = !!i2837[1]
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2843 = data
  i2842.passId = i2843[0]
  i2842.subShaderIndex = i2843[1]
  var i2845 = i2843[2]
  var i2844 = []
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.push( i2845[i + 0] );
  }
  i2842.keywords = i2844
  i2842.vertexProgram = i2843[3]
  i2842.fragmentProgram = i2843[4]
  i2842.exportedForWebGl2 = !!i2843[5]
  i2842.readDepth = !!i2843[6]
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2849 = data
  request.r(i2849[0], i2849[1], 0, i2848, 'shader')
  i2848.pass = i2849[2]
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2853 = data
  i2852.name = i2853[0]
  i2852.type = i2853[1]
  i2852.value = new pc.Vec4( i2853[2], i2853[3], i2853[4], i2853[5] )
  i2852.textureValue = i2853[6]
  i2852.shaderPropertyFlag = i2853[7]
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2855 = data
  i2854.name = i2855[0]
  request.r(i2855[1], i2855[2], 0, i2854, 'texture')
  i2854.aabb = i2855[3]
  i2854.vertices = i2855[4]
  i2854.triangles = i2855[5]
  i2854.textureRect = UnityEngine.Rect.MinMaxRect(i2855[6], i2855[7], i2855[8], i2855[9])
  i2854.packedRect = UnityEngine.Rect.MinMaxRect(i2855[10], i2855[11], i2855[12], i2855[13])
  i2854.border = new pc.Vec4( i2855[14], i2855[15], i2855[16], i2855[17] )
  i2854.transparency = i2855[18]
  i2854.bounds = i2855[19]
  i2854.pixelsPerUnit = i2855[20]
  i2854.textureWidth = i2855[21]
  i2854.textureHeight = i2855[22]
  i2854.nativeSize = new pc.Vec2( i2855[23], i2855[24] )
  i2854.pivot = new pc.Vec2( i2855[25], i2855[26] )
  i2854.textureRectOffset = new pc.Vec2( i2855[27], i2855[28] )
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2857 = data
  i2856.name = i2857[0]
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2859 = data
  i2858.name = i2859[0]
  i2858.ascent = i2859[1]
  i2858.originalLineHeight = i2859[2]
  i2858.fontSize = i2859[3]
  var i2861 = i2859[4]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2861[i + 0]) );
  }
  i2858.characterInfo = i2860
  request.r(i2859[5], i2859[6], 0, i2858, 'texture')
  i2858.originalFontSize = i2859[7]
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2865 = data
  i2864.index = i2865[0]
  i2864.advance = i2865[1]
  i2864.bearing = i2865[2]
  i2864.glyphWidth = i2865[3]
  i2864.glyphHeight = i2865[4]
  i2864.minX = i2865[5]
  i2864.maxX = i2865[6]
  i2864.minY = i2865[7]
  i2864.maxY = i2865[8]
  i2864.uvBottomLeftX = i2865[9]
  i2864.uvBottomLeftY = i2865[10]
  i2864.uvBottomRightX = i2865[11]
  i2864.uvBottomRightY = i2865[12]
  i2864.uvTopLeftX = i2865[13]
  i2864.uvTopLeftY = i2865[14]
  i2864.uvTopRightX = i2865[15]
  i2864.uvTopRightY = i2865[16]
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2867 = data
  i2866.name = i2867[0]
  i2866.bytes64 = i2867[1]
  i2866.data = i2867[2]
  return i2866
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2868 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2869 = data
  var i2871 = i2869[0]
  var i2870 = []
  for(var i = 0; i < i2871.length; i += 2) {
  request.r(i2871[i + 0], i2871[i + 1], 2, i2870, '')
  }
  i2868.atlasAssets = i2870
  i2868.scale = i2869[1]
  request.r(i2869[2], i2869[3], 0, i2868, 'skeletonJSON')
  i2868.isUpgradingBlendModeMaterials = !!i2869[4]
  i2868.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2869[5], i2868.blendModeMaterials)
  var i2873 = i2869[6]
  var i2872 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2873.length; i += 2) {
  request.r(i2873[i + 0], i2873[i + 1], 1, i2872, '')
  }
  i2868.skeletonDataModifiers = i2872
  var i2875 = i2869[7]
  var i2874 = []
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.push( i2875[i + 0] );
  }
  i2868.fromAnimation = i2874
  var i2877 = i2869[8]
  var i2876 = []
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.push( i2877[i + 0] );
  }
  i2868.toAnimation = i2876
  i2868.duration = i2869[9]
  i2868.defaultMix = i2869[10]
  request.r(i2869[11], i2869[12], 0, i2868, 'controller')
  return i2868
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2880 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2881 = data
  i2880.applyAdditiveMaterial = !!i2881[0]
  var i2883 = i2881[1]
  var i2882 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2883.length; i += 1) {
    i2882.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2883[i + 0]));
  }
  i2880.additiveMaterials = i2882
  var i2885 = i2881[2]
  var i2884 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2885.length; i += 1) {
    i2884.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2885[i + 0]));
  }
  i2880.multiplyMaterials = i2884
  var i2887 = i2881[3]
  var i2886 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2887[i + 0]));
  }
  i2880.screenMaterials = i2886
  i2880.requiresBlendModeMaterials = !!i2881[4]
  return i2880
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2890 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2891 = data
  i2890.pageName = i2891[0]
  request.r(i2891[1], i2891[2], 0, i2890, 'material')
  return i2890
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2894 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2895 = data
  request.r(i2895[0], i2895[1], 0, i2894, 'atlasFile')
  var i2897 = i2895[2]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 2) {
  request.r(i2897[i + 0], i2897[i + 1], 2, i2896, '')
  }
  i2894.materials = i2896
  i2894.textureLoadingMode = i2895[3]
  request.r(i2895[4], i2895[5], 0, i2894, 'onDemandTextureLoader')
  return i2894
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2898 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2899 = data
  request.r(i2899[0], i2899[1], 0, i2898, 'atlas')
  i2898.normalStyle = i2899[2]
  i2898.normalSpacingOffset = i2899[3]
  i2898.boldStyle = i2899[4]
  i2898.boldSpacing = i2899[5]
  i2898.italicStyle = i2899[6]
  i2898.tabSize = i2899[7]
  i2898.hashCode = i2899[8]
  request.r(i2899[9], i2899[10], 0, i2898, 'material')
  i2898.materialHashCode = i2899[11]
  i2898.m_Version = i2899[12]
  i2898.m_SourceFontFileGUID = i2899[13]
  request.r(i2899[14], i2899[15], 0, i2898, 'm_SourceFontFile_EditorRef')
  request.r(i2899[16], i2899[17], 0, i2898, 'm_SourceFontFile')
  i2898.m_AtlasPopulationMode = i2899[18]
  i2898.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2899[19], i2898.m_FaceInfo)
  var i2901 = i2899[20]
  var i2900 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2901.length; i += 1) {
    i2900.add(request.d('UnityEngine.TextCore.Glyph', i2901[i + 0]));
  }
  i2898.m_GlyphTable = i2900
  var i2903 = i2899[21]
  var i2902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2903.length; i += 1) {
    i2902.add(request.d('TMPro.TMP_Character', i2903[i + 0]));
  }
  i2898.m_CharacterTable = i2902
  var i2905 = i2899[22]
  var i2904 = []
  for(var i = 0; i < i2905.length; i += 2) {
  request.r(i2905[i + 0], i2905[i + 1], 2, i2904, '')
  }
  i2898.m_AtlasTextures = i2904
  i2898.m_AtlasTextureIndex = i2899[23]
  i2898.m_IsMultiAtlasTexturesEnabled = !!i2899[24]
  i2898.m_ClearDynamicDataOnBuild = !!i2899[25]
  var i2907 = i2899[26]
  var i2906 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2907.length; i += 1) {
    i2906.add(request.d('UnityEngine.TextCore.GlyphRect', i2907[i + 0]));
  }
  i2898.m_UsedGlyphRects = i2906
  var i2909 = i2899[27]
  var i2908 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2909.length; i += 1) {
    i2908.add(request.d('UnityEngine.TextCore.GlyphRect', i2909[i + 0]));
  }
  i2898.m_FreeGlyphRects = i2908
  i2898.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2899[28], i2898.m_fontInfo)
  i2898.m_AtlasWidth = i2899[29]
  i2898.m_AtlasHeight = i2899[30]
  i2898.m_AtlasPadding = i2899[31]
  i2898.m_AtlasRenderMode = i2899[32]
  var i2911 = i2899[33]
  var i2910 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2911.length; i += 1) {
    i2910.add(request.d('TMPro.TMP_Glyph', i2911[i + 0]));
  }
  i2898.m_glyphInfoList = i2910
  i2898.m_KerningTable = request.d('TMPro.KerningTable', i2899[34], i2898.m_KerningTable)
  i2898.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2899[35], i2898.m_FontFeatureTable)
  var i2913 = i2899[36]
  var i2912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2913.length; i += 2) {
  request.r(i2913[i + 0], i2913[i + 1], 1, i2912, '')
  }
  i2898.fallbackFontAssets = i2912
  var i2915 = i2899[37]
  var i2914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2915.length; i += 2) {
  request.r(i2915[i + 0], i2915[i + 1], 1, i2914, '')
  }
  i2898.m_FallbackFontAssetTable = i2914
  i2898.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2899[38], i2898.m_CreationSettings)
  var i2917 = i2899[39]
  var i2916 = []
  for(var i = 0; i < i2917.length; i += 1) {
    i2916.push( request.d('TMPro.TMP_FontWeightPair', i2917[i + 0]) );
  }
  i2898.m_FontWeightTable = i2916
  var i2919 = i2899[40]
  var i2918 = []
  for(var i = 0; i < i2919.length; i += 1) {
    i2918.push( request.d('TMPro.TMP_FontWeightPair', i2919[i + 0]) );
  }
  i2898.fontWeights = i2918
  return i2898
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2920 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2921 = data
  i2920.m_FaceIndex = i2921[0]
  i2920.m_FamilyName = i2921[1]
  i2920.m_StyleName = i2921[2]
  i2920.m_PointSize = i2921[3]
  i2920.m_Scale = i2921[4]
  i2920.m_UnitsPerEM = i2921[5]
  i2920.m_LineHeight = i2921[6]
  i2920.m_AscentLine = i2921[7]
  i2920.m_CapLine = i2921[8]
  i2920.m_MeanLine = i2921[9]
  i2920.m_Baseline = i2921[10]
  i2920.m_DescentLine = i2921[11]
  i2920.m_SuperscriptOffset = i2921[12]
  i2920.m_SuperscriptSize = i2921[13]
  i2920.m_SubscriptOffset = i2921[14]
  i2920.m_SubscriptSize = i2921[15]
  i2920.m_UnderlineOffset = i2921[16]
  i2920.m_UnderlineThickness = i2921[17]
  i2920.m_StrikethroughOffset = i2921[18]
  i2920.m_StrikethroughThickness = i2921[19]
  i2920.m_TabWidth = i2921[20]
  return i2920
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2924 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2925 = data
  i2924.m_Index = i2925[0]
  i2924.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2925[1], i2924.m_Metrics)
  i2924.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2925[2], i2924.m_GlyphRect)
  i2924.m_Scale = i2925[3]
  i2924.m_AtlasIndex = i2925[4]
  i2924.m_ClassDefinitionType = i2925[5]
  return i2924
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2926 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2927 = data
  i2926.m_Width = i2927[0]
  i2926.m_Height = i2927[1]
  i2926.m_HorizontalBearingX = i2927[2]
  i2926.m_HorizontalBearingY = i2927[3]
  i2926.m_HorizontalAdvance = i2927[4]
  return i2926
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2928 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2929 = data
  i2928.m_X = i2929[0]
  i2928.m_Y = i2929[1]
  i2928.m_Width = i2929[2]
  i2928.m_Height = i2929[3]
  return i2928
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2932 = root || request.c( 'TMPro.TMP_Character' )
  var i2933 = data
  i2932.m_ElementType = i2933[0]
  i2932.m_Unicode = i2933[1]
  i2932.m_GlyphIndex = i2933[2]
  i2932.m_Scale = i2933[3]
  return i2932
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2938 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2939 = data
  i2938.Name = i2939[0]
  i2938.PointSize = i2939[1]
  i2938.Scale = i2939[2]
  i2938.CharacterCount = i2939[3]
  i2938.LineHeight = i2939[4]
  i2938.Baseline = i2939[5]
  i2938.Ascender = i2939[6]
  i2938.CapHeight = i2939[7]
  i2938.Descender = i2939[8]
  i2938.CenterLine = i2939[9]
  i2938.SuperscriptOffset = i2939[10]
  i2938.SubscriptOffset = i2939[11]
  i2938.SubSize = i2939[12]
  i2938.Underline = i2939[13]
  i2938.UnderlineThickness = i2939[14]
  i2938.strikethrough = i2939[15]
  i2938.strikethroughThickness = i2939[16]
  i2938.TabWidth = i2939[17]
  i2938.Padding = i2939[18]
  i2938.AtlasWidth = i2939[19]
  i2938.AtlasHeight = i2939[20]
  return i2938
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2942 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2943 = data
  i2942.id = i2943[0]
  i2942.x = i2943[1]
  i2942.y = i2943[2]
  i2942.width = i2943[3]
  i2942.height = i2943[4]
  i2942.xOffset = i2943[5]
  i2942.yOffset = i2943[6]
  i2942.xAdvance = i2943[7]
  i2942.scale = i2943[8]
  return i2942
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2944 = root || request.c( 'TMPro.KerningTable' )
  var i2945 = data
  var i2947 = i2945[0]
  var i2946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2947.length; i += 1) {
    i2946.add(request.d('TMPro.KerningPair', i2947[i + 0]));
  }
  i2944.kerningPairs = i2946
  return i2944
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2950 = root || request.c( 'TMPro.KerningPair' )
  var i2951 = data
  i2950.xOffset = i2951[0]
  i2950.m_FirstGlyph = i2951[1]
  i2950.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2951[2], i2950.m_FirstGlyphAdjustments)
  i2950.m_SecondGlyph = i2951[3]
  i2950.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2951[4], i2950.m_SecondGlyphAdjustments)
  i2950.m_IgnoreSpacingAdjustments = !!i2951[5]
  return i2950
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2952 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2953 = data
  var i2955 = i2953[0]
  var i2954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2955[i + 0]));
  }
  i2952.m_GlyphPairAdjustmentRecords = i2954
  return i2952
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2958 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2959 = data
  i2958.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2959[0], i2958.m_FirstAdjustmentRecord)
  i2958.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2959[1], i2958.m_SecondAdjustmentRecord)
  i2958.m_FeatureLookupFlags = i2959[2]
  return i2958
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2962 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2963 = data
  i2962.sourceFontFileName = i2963[0]
  i2962.sourceFontFileGUID = i2963[1]
  i2962.pointSizeSamplingMode = i2963[2]
  i2962.pointSize = i2963[3]
  i2962.padding = i2963[4]
  i2962.packingMode = i2963[5]
  i2962.atlasWidth = i2963[6]
  i2962.atlasHeight = i2963[7]
  i2962.characterSetSelectionMode = i2963[8]
  i2962.characterSequence = i2963[9]
  i2962.referencedFontAssetGUID = i2963[10]
  i2962.referencedTextAssetGUID = i2963[11]
  i2962.fontStyle = i2963[12]
  i2962.fontStyleModifier = i2963[13]
  i2962.renderMode = i2963[14]
  i2962.includeFontFeatures = !!i2963[15]
  return i2962
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2966 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2967 = data
  request.r(i2967[0], i2967[1], 0, i2966, 'regularTypeface')
  request.r(i2967[2], i2967[3], 0, i2966, 'italicTypeface')
  return i2966
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2968 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2969 = data
  i2968.useSafeMode = !!i2969[0]
  i2968.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2969[1], i2968.safeModeOptions)
  i2968.timeScale = i2969[2]
  i2968.unscaledTimeScale = i2969[3]
  i2968.useSmoothDeltaTime = !!i2969[4]
  i2968.maxSmoothUnscaledTime = i2969[5]
  i2968.rewindCallbackMode = i2969[6]
  i2968.showUnityEditorReport = !!i2969[7]
  i2968.logBehaviour = i2969[8]
  i2968.drawGizmos = !!i2969[9]
  i2968.defaultRecyclable = !!i2969[10]
  i2968.defaultAutoPlay = i2969[11]
  i2968.defaultUpdateType = i2969[12]
  i2968.defaultTimeScaleIndependent = !!i2969[13]
  i2968.defaultEaseType = i2969[14]
  i2968.defaultEaseOvershootOrAmplitude = i2969[15]
  i2968.defaultEasePeriod = i2969[16]
  i2968.defaultAutoKill = !!i2969[17]
  i2968.defaultLoopType = i2969[18]
  i2968.debugMode = !!i2969[19]
  i2968.debugStoreTargetId = !!i2969[20]
  i2968.showPreviewPanel = !!i2969[21]
  i2968.storeSettingsLocation = i2969[22]
  i2968.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2969[23], i2968.modules)
  i2968.createASMDEF = !!i2969[24]
  i2968.showPlayingTweens = !!i2969[25]
  i2968.showPausedTweens = !!i2969[26]
  return i2968
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2970 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2971 = data
  i2970.logBehaviour = i2971[0]
  i2970.nestedTweenFailureBehaviour = i2971[1]
  return i2970
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2972 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2973 = data
  i2972.showPanel = !!i2973[0]
  i2972.audioEnabled = !!i2973[1]
  i2972.physicsEnabled = !!i2973[2]
  i2972.physics2DEnabled = !!i2973[3]
  i2972.spriteEnabled = !!i2973[4]
  i2972.uiEnabled = !!i2973[5]
  i2972.textMeshProEnabled = !!i2973[6]
  i2972.tk2DEnabled = !!i2973[7]
  i2972.deAudioEnabled = !!i2973[8]
  i2972.deUnityExtendedEnabled = !!i2973[9]
  i2972.epoOutlineEnabled = !!i2973[10]
  return i2972
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2974 = root || request.c( 'TMPro.TMP_Settings' )
  var i2975 = data
  i2974.m_enableWordWrapping = !!i2975[0]
  i2974.m_enableKerning = !!i2975[1]
  i2974.m_enableExtraPadding = !!i2975[2]
  i2974.m_enableTintAllSprites = !!i2975[3]
  i2974.m_enableParseEscapeCharacters = !!i2975[4]
  i2974.m_EnableRaycastTarget = !!i2975[5]
  i2974.m_GetFontFeaturesAtRuntime = !!i2975[6]
  i2974.m_missingGlyphCharacter = i2975[7]
  i2974.m_warningsDisabled = !!i2975[8]
  request.r(i2975[9], i2975[10], 0, i2974, 'm_defaultFontAsset')
  i2974.m_defaultFontAssetPath = i2975[11]
  i2974.m_defaultFontSize = i2975[12]
  i2974.m_defaultAutoSizeMinRatio = i2975[13]
  i2974.m_defaultAutoSizeMaxRatio = i2975[14]
  i2974.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2975[15], i2975[16] )
  i2974.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2975[17], i2975[18] )
  i2974.m_autoSizeTextContainer = !!i2975[19]
  i2974.m_IsTextObjectScaleStatic = !!i2975[20]
  var i2977 = i2975[21]
  var i2976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2977.length; i += 2) {
  request.r(i2977[i + 0], i2977[i + 1], 1, i2976, '')
  }
  i2974.m_fallbackFontAssets = i2976
  i2974.m_matchMaterialPreset = !!i2975[22]
  request.r(i2975[23], i2975[24], 0, i2974, 'm_defaultSpriteAsset')
  i2974.m_defaultSpriteAssetPath = i2975[25]
  i2974.m_enableEmojiSupport = !!i2975[26]
  i2974.m_MissingCharacterSpriteUnicode = i2975[27]
  i2974.m_defaultColorGradientPresetsPath = i2975[28]
  request.r(i2975[29], i2975[30], 0, i2974, 'm_defaultStyleSheet')
  i2974.m_StyleSheetsResourcePath = i2975[31]
  request.r(i2975[32], i2975[33], 0, i2974, 'm_leadingCharacters')
  request.r(i2975[34], i2975[35], 0, i2974, 'm_followingCharacters')
  i2974.m_UseModernHangulLineBreakingRules = !!i2975[36]
  return i2974
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2978 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2979 = data
  request.r(i2979[0], i2979[1], 0, i2978, 'spriteSheet')
  var i2981 = i2979[2]
  var i2980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2981.length; i += 1) {
    i2980.add(request.d('TMPro.TMP_Sprite', i2981[i + 0]));
  }
  i2978.spriteInfoList = i2980
  var i2983 = i2979[3]
  var i2982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2983.length; i += 2) {
  request.r(i2983[i + 0], i2983[i + 1], 1, i2982, '')
  }
  i2978.fallbackSpriteAssets = i2982
  i2978.hashCode = i2979[4]
  request.r(i2979[5], i2979[6], 0, i2978, 'material')
  i2978.materialHashCode = i2979[7]
  i2978.m_Version = i2979[8]
  i2978.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2979[9], i2978.m_FaceInfo)
  var i2985 = i2979[10]
  var i2984 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2985.length; i += 1) {
    i2984.add(request.d('TMPro.TMP_SpriteCharacter', i2985[i + 0]));
  }
  i2978.m_SpriteCharacterTable = i2984
  var i2987 = i2979[11]
  var i2986 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2987.length; i += 1) {
    i2986.add(request.d('TMPro.TMP_SpriteGlyph', i2987[i + 0]));
  }
  i2978.m_SpriteGlyphTable = i2986
  return i2978
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2990 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2991 = data
  i2990.name = i2991[0]
  i2990.hashCode = i2991[1]
  i2990.unicode = i2991[2]
  i2990.pivot = new pc.Vec2( i2991[3], i2991[4] )
  request.r(i2991[5], i2991[6], 0, i2990, 'sprite')
  i2990.id = i2991[7]
  i2990.x = i2991[8]
  i2990.y = i2991[9]
  i2990.width = i2991[10]
  i2990.height = i2991[11]
  i2990.xOffset = i2991[12]
  i2990.yOffset = i2991[13]
  i2990.xAdvance = i2991[14]
  i2990.scale = i2991[15]
  return i2990
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2996 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2997 = data
  i2996.m_Name = i2997[0]
  i2996.m_HashCode = i2997[1]
  i2996.m_ElementType = i2997[2]
  i2996.m_Unicode = i2997[3]
  i2996.m_GlyphIndex = i2997[4]
  i2996.m_Scale = i2997[5]
  return i2996
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3000 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3001 = data
  request.r(i3001[0], i3001[1], 0, i3000, 'sprite')
  i3000.m_Index = i3001[2]
  i3000.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3001[3], i3000.m_Metrics)
  i3000.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3001[4], i3000.m_GlyphRect)
  i3000.m_Scale = i3001[5]
  i3000.m_AtlasIndex = i3001[6]
  i3000.m_ClassDefinitionType = i3001[7]
  return i3000
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3002 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3003 = data
  var i3005 = i3003[0]
  var i3004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3005.length; i += 1) {
    i3004.add(request.d('TMPro.TMP_Style', i3005[i + 0]));
  }
  i3002.m_StyleList = i3004
  return i3002
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3008 = root || request.c( 'TMPro.TMP_Style' )
  var i3009 = data
  i3008.m_Name = i3009[0]
  i3008.m_HashCode = i3009[1]
  i3008.m_OpeningDefinition = i3009[2]
  i3008.m_ClosingDefinition = i3009[3]
  i3008.m_OpeningTagArray = i3009[4]
  i3008.m_ClosingTagArray = i3009[5]
  i3008.m_OpeningTagUnicodeArray = i3009[6]
  i3008.m_ClosingTagUnicodeArray = i3009[7]
  return i3008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3011 = data
  var i3013 = i3011[0]
  var i3012 = []
  for(var i = 0; i < i3013.length; i += 1) {
    i3012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3013[i + 0]) );
  }
  i3010.files = i3012
  i3010.componentToPrefabIds = i3011[1]
  return i3010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3017 = data
  i3016.path = i3017[0]
  request.r(i3017[1], i3017[2], 0, i3016, 'unityObject')
  return i3016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3019 = data
  var i3021 = i3019[0]
  var i3020 = []
  for(var i = 0; i < i3021.length; i += 1) {
    i3020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3021[i + 0]) );
  }
  i3018.scriptsExecutionOrder = i3020
  var i3023 = i3019[1]
  var i3022 = []
  for(var i = 0; i < i3023.length; i += 1) {
    i3022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3023[i + 0]) );
  }
  i3018.sortingLayers = i3022
  var i3025 = i3019[2]
  var i3024 = []
  for(var i = 0; i < i3025.length; i += 1) {
    i3024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3025[i + 0]) );
  }
  i3018.cullingLayers = i3024
  i3018.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3019[3], i3018.timeSettings)
  i3018.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3019[4], i3018.physicsSettings)
  i3018.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3019[5], i3018.physics2DSettings)
  i3018.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3019[6], i3018.qualitySettings)
  i3018.enableRealtimeShadows = !!i3019[7]
  i3018.enableAutoInstancing = !!i3019[8]
  i3018.enableStaticBatching = !!i3019[9]
  i3018.enableDynamicBatching = !!i3019[10]
  i3018.lightmapEncodingQuality = i3019[11]
  i3018.desiredColorSpace = i3019[12]
  var i3027 = i3019[13]
  var i3026 = []
  for(var i = 0; i < i3027.length; i += 1) {
    i3026.push( i3027[i + 0] );
  }
  i3018.allTags = i3026
  return i3018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3031 = data
  i3030.name = i3031[0]
  i3030.value = i3031[1]
  return i3030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3035 = data
  i3034.id = i3035[0]
  i3034.name = i3035[1]
  i3034.value = i3035[2]
  return i3034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3039 = data
  i3038.id = i3039[0]
  i3038.name = i3039[1]
  return i3038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3041 = data
  i3040.fixedDeltaTime = i3041[0]
  i3040.maximumDeltaTime = i3041[1]
  i3040.timeScale = i3041[2]
  i3040.maximumParticleTimestep = i3041[3]
  return i3040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3043 = data
  i3042.gravity = new pc.Vec3( i3043[0], i3043[1], i3043[2] )
  i3042.defaultSolverIterations = i3043[3]
  i3042.bounceThreshold = i3043[4]
  i3042.autoSyncTransforms = !!i3043[5]
  i3042.autoSimulation = !!i3043[6]
  var i3045 = i3043[7]
  var i3044 = []
  for(var i = 0; i < i3045.length; i += 1) {
    i3044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3045[i + 0]) );
  }
  i3042.collisionMatrix = i3044
  return i3042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3049 = data
  i3048.enabled = !!i3049[0]
  i3048.layerId = i3049[1]
  i3048.otherLayerId = i3049[2]
  return i3048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3051 = data
  request.r(i3051[0], i3051[1], 0, i3050, 'material')
  i3050.gravity = new pc.Vec2( i3051[2], i3051[3] )
  i3050.positionIterations = i3051[4]
  i3050.velocityIterations = i3051[5]
  i3050.velocityThreshold = i3051[6]
  i3050.maxLinearCorrection = i3051[7]
  i3050.maxAngularCorrection = i3051[8]
  i3050.maxTranslationSpeed = i3051[9]
  i3050.maxRotationSpeed = i3051[10]
  i3050.baumgarteScale = i3051[11]
  i3050.baumgarteTOIScale = i3051[12]
  i3050.timeToSleep = i3051[13]
  i3050.linearSleepTolerance = i3051[14]
  i3050.angularSleepTolerance = i3051[15]
  i3050.defaultContactOffset = i3051[16]
  i3050.autoSimulation = !!i3051[17]
  i3050.queriesHitTriggers = !!i3051[18]
  i3050.queriesStartInColliders = !!i3051[19]
  i3050.callbacksOnDisable = !!i3051[20]
  i3050.reuseCollisionCallbacks = !!i3051[21]
  i3050.autoSyncTransforms = !!i3051[22]
  var i3053 = i3051[23]
  var i3052 = []
  for(var i = 0; i < i3053.length; i += 1) {
    i3052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3053[i + 0]) );
  }
  i3050.collisionMatrix = i3052
  return i3050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3057 = data
  i3056.enabled = !!i3057[0]
  i3056.layerId = i3057[1]
  i3056.otherLayerId = i3057[2]
  return i3056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3059 = data
  var i3061 = i3059[0]
  var i3060 = []
  for(var i = 0; i < i3061.length; i += 1) {
    i3060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3061[i + 0]) );
  }
  i3058.qualityLevels = i3060
  var i3063 = i3059[1]
  var i3062 = []
  for(var i = 0; i < i3063.length; i += 1) {
    i3062.push( i3063[i + 0] );
  }
  i3058.names = i3062
  i3058.shadows = i3059[2]
  i3058.anisotropicFiltering = i3059[3]
  i3058.antiAliasing = i3059[4]
  i3058.lodBias = i3059[5]
  i3058.shadowCascades = i3059[6]
  i3058.shadowDistance = i3059[7]
  i3058.shadowmaskMode = i3059[8]
  i3058.shadowProjection = i3059[9]
  i3058.shadowResolution = i3059[10]
  i3058.softParticles = !!i3059[11]
  i3058.softVegetation = !!i3059[12]
  i3058.activeColorSpace = i3059[13]
  i3058.desiredColorSpace = i3059[14]
  i3058.masterTextureLimit = i3059[15]
  i3058.maxQueuedFrames = i3059[16]
  i3058.particleRaycastBudget = i3059[17]
  i3058.pixelLightCount = i3059[18]
  i3058.realtimeReflectionProbes = !!i3059[19]
  i3058.shadowCascade2Split = i3059[20]
  i3058.shadowCascade4Split = new pc.Vec3( i3059[21], i3059[22], i3059[23] )
  i3058.streamingMipmapsActive = !!i3059[24]
  i3058.vSyncCount = i3059[25]
  i3058.asyncUploadBufferSize = i3059[26]
  i3058.asyncUploadTimeSlice = i3059[27]
  i3058.billboardsFaceCameraPosition = !!i3059[28]
  i3058.shadowNearPlaneOffset = i3059[29]
  i3058.streamingMipmapsMemoryBudget = i3059[30]
  i3058.maximumLODLevel = i3059[31]
  i3058.streamingMipmapsAddAllCameras = !!i3059[32]
  i3058.streamingMipmapsMaxLevelReduction = i3059[33]
  i3058.streamingMipmapsRenderersPerFrame = i3059[34]
  i3058.resolutionScalingFixedDPIFactor = i3059[35]
  i3058.streamingMipmapsMaxFileIORequests = i3059[36]
  i3058.currentQualityLevel = i3059[37]
  return i3058
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3066 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3067 = data
  i3066.xPlacement = i3067[0]
  i3066.yPlacement = i3067[1]
  i3066.xAdvance = i3067[2]
  i3066.yAdvance = i3067[3]
  return i3066
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3068 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3069 = data
  i3068.m_GlyphIndex = i3069[0]
  i3068.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3069[1], i3068.m_GlyphValueRecord)
  return i3068
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3070 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3071 = data
  i3070.m_XPlacement = i3071[0]
  i3070.m_YPlacement = i3071[1]
  i3070.m_XAdvance = i3071[2]
  i3070.m_YAdvance = i3071[3]
  return i3070
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

Deserializers.creativeName = "BEQ_V20_NgocNDL_AnhPD";

Deserializers.lunaAppID = "29138";

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

Deserializers.buildID = "d4369974-5f2c-4791-80b3-add17862a23c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

