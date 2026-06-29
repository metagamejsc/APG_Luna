var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2554 = root || request.c( 'UnityEngine.JointSpring' )
  var i2555 = data
  i2554.spring = i2555[0]
  i2554.damper = i2555[1]
  i2554.targetPosition = i2555[2]
  return i2554
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2556 = root || request.c( 'UnityEngine.JointMotor' )
  var i2557 = data
  i2556.m_TargetVelocity = i2557[0]
  i2556.m_Force = i2557[1]
  i2556.m_FreeSpin = i2557[2]
  return i2556
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2558 = root || request.c( 'UnityEngine.JointLimits' )
  var i2559 = data
  i2558.m_Min = i2559[0]
  i2558.m_Max = i2559[1]
  i2558.m_Bounciness = i2559[2]
  i2558.m_BounceMinVelocity = i2559[3]
  i2558.m_ContactDistance = i2559[4]
  i2558.minBounce = i2559[5]
  i2558.maxBounce = i2559[6]
  return i2558
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2560 = root || request.c( 'UnityEngine.JointDrive' )
  var i2561 = data
  i2560.m_PositionSpring = i2561[0]
  i2560.m_PositionDamper = i2561[1]
  i2560.m_MaximumForce = i2561[2]
  i2560.m_UseAcceleration = i2561[3]
  return i2560
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2562 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2563 = data
  i2562.m_Spring = i2563[0]
  i2562.m_Damper = i2563[1]
  return i2562
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2564 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2565 = data
  i2564.m_Limit = i2565[0]
  i2564.m_Bounciness = i2565[1]
  i2564.m_ContactDistance = i2565[2]
  return i2564
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2566 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2567 = data
  i2566.m_ExtremumSlip = i2567[0]
  i2566.m_ExtremumValue = i2567[1]
  i2566.m_AsymptoteSlip = i2567[2]
  i2566.m_AsymptoteValue = i2567[3]
  i2566.m_Stiffness = i2567[4]
  return i2566
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2568 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2569 = data
  i2568.m_LowerAngle = i2569[0]
  i2568.m_UpperAngle = i2569[1]
  return i2568
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2570 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2571 = data
  i2570.m_MotorSpeed = i2571[0]
  i2570.m_MaximumMotorTorque = i2571[1]
  return i2570
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2572 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2573 = data
  i2572.m_DampingRatio = i2573[0]
  i2572.m_Frequency = i2573[1]
  i2572.m_Angle = i2573[2]
  return i2572
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2574 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2575 = data
  i2574.m_LowerTranslation = i2575[0]
  i2574.m_UpperTranslation = i2575[1]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2577 = data
  i2576.name = i2577[0]
  i2576.width = i2577[1]
  i2576.height = i2577[2]
  i2576.mipmapCount = i2577[3]
  i2576.anisoLevel = i2577[4]
  i2576.filterMode = i2577[5]
  i2576.hdr = !!i2577[6]
  i2576.format = i2577[7]
  i2576.wrapMode = i2577[8]
  i2576.alphaIsTransparency = !!i2577[9]
  i2576.alphaSource = i2577[10]
  i2576.graphicsFormat = i2577[11]
  i2576.sRGBTexture = !!i2577[12]
  i2576.desiredColorSpace = i2577[13]
  i2576.wrapU = i2577[14]
  i2576.wrapV = i2577[15]
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2578 = root || new pc.UnityMaterial()
  var i2579 = data
  i2578.name = i2579[0]
  request.r(i2579[1], i2579[2], 0, i2578, 'shader')
  i2578.renderQueue = i2579[3]
  i2578.enableInstancing = !!i2579[4]
  var i2581 = i2579[5]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2581[i + 0]) );
  }
  i2578.floatParameters = i2580
  var i2583 = i2579[6]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2583[i + 0]) );
  }
  i2578.colorParameters = i2582
  var i2585 = i2579[7]
  var i2584 = []
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2585[i + 0]) );
  }
  i2578.vectorParameters = i2584
  var i2587 = i2579[8]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2587[i + 0]) );
  }
  i2578.textureParameters = i2586
  var i2589 = i2579[9]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2589[i + 0]) );
  }
  i2578.materialFlags = i2588
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2593 = data
  i2592.name = i2593[0]
  i2592.value = i2593[1]
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2597 = data
  i2596.name = i2597[0]
  i2596.value = new pc.Color(i2597[1], i2597[2], i2597[3], i2597[4])
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2601 = data
  i2600.name = i2601[0]
  i2600.value = new pc.Vec4( i2601[1], i2601[2], i2601[3], i2601[4] )
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2605 = data
  i2604.name = i2605[0]
  request.r(i2605[1], i2605[2], 0, i2604, 'value')
  return i2604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2609 = data
  i2608.name = i2609[0]
  i2608.enabled = !!i2609[1]
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2611 = data
  i2610.name = i2611[0]
  i2610.index = i2611[1]
  i2610.startup = !!i2611[2]
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2613 = data
  i2612.position = new pc.Vec3( i2613[0], i2613[1], i2613[2] )
  i2612.scale = new pc.Vec3( i2613[3], i2613[4], i2613[5] )
  i2612.rotation = new pc.Quat(i2613[6], i2613[7], i2613[8], i2613[9])
  return i2612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2615 = data
  i2614.aspect = i2615[0]
  i2614.orthographic = !!i2615[1]
  i2614.orthographicSize = i2615[2]
  i2614.backgroundColor = new pc.Color(i2615[3], i2615[4], i2615[5], i2615[6])
  i2614.nearClipPlane = i2615[7]
  i2614.farClipPlane = i2615[8]
  i2614.fieldOfView = i2615[9]
  i2614.depth = i2615[10]
  i2614.clearFlags = i2615[11]
  i2614.cullingMask = i2615[12]
  i2614.rect = i2615[13]
  request.r(i2615[14], i2615[15], 0, i2614, 'targetTexture')
  i2614.usePhysicalProperties = !!i2615[16]
  i2614.focalLength = i2615[17]
  i2614.sensorSize = new pc.Vec2( i2615[18], i2615[19] )
  i2614.lensShift = new pc.Vec2( i2615[20], i2615[21] )
  i2614.gateFit = i2615[22]
  i2614.commandBufferCount = i2615[23]
  i2614.cameraType = i2615[24]
  i2614.enabled = !!i2615[25]
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2617 = data
  i2616.name = i2617[0]
  i2616.tagId = i2617[1]
  i2616.enabled = !!i2617[2]
  i2616.isStatic = !!i2617[3]
  i2616.layer = i2617[4]
  return i2616
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2618 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2619 = data
  request.r(i2619[0], i2619[1], 0, i2618, 'm_FirstSelected')
  i2618.m_sendNavigationEvents = !!i2619[2]
  i2618.m_DragThreshold = i2619[3]
  return i2618
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2620 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2621 = data
  i2620.m_HorizontalAxis = i2621[0]
  i2620.m_VerticalAxis = i2621[1]
  i2620.m_SubmitButton = i2621[2]
  i2620.m_CancelButton = i2621[3]
  i2620.m_InputActionsPerSecond = i2621[4]
  i2620.m_RepeatDelay = i2621[5]
  i2620.m_ForceModuleActive = !!i2621[6]
  i2620.m_SendPointerHoverToParent = !!i2621[7]
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2623 = data
  i2622.pivot = new pc.Vec2( i2623[0], i2623[1] )
  i2622.anchorMin = new pc.Vec2( i2623[2], i2623[3] )
  i2622.anchorMax = new pc.Vec2( i2623[4], i2623[5] )
  i2622.sizeDelta = new pc.Vec2( i2623[6], i2623[7] )
  i2622.anchoredPosition3D = new pc.Vec3( i2623[8], i2623[9], i2623[10] )
  i2622.rotation = new pc.Quat(i2623[11], i2623[12], i2623[13], i2623[14])
  i2622.scale = new pc.Vec3( i2623[15], i2623[16], i2623[17] )
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2625 = data
  i2624.planeDistance = i2625[0]
  i2624.referencePixelsPerUnit = i2625[1]
  i2624.isFallbackOverlay = !!i2625[2]
  i2624.renderMode = i2625[3]
  i2624.renderOrder = i2625[4]
  i2624.sortingLayerName = i2625[5]
  i2624.sortingOrder = i2625[6]
  i2624.scaleFactor = i2625[7]
  request.r(i2625[8], i2625[9], 0, i2624, 'worldCamera')
  i2624.overrideSorting = !!i2625[10]
  i2624.pixelPerfect = !!i2625[11]
  i2624.targetDisplay = i2625[12]
  i2624.overridePixelPerfect = !!i2625[13]
  i2624.enabled = !!i2625[14]
  return i2624
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2626 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2627 = data
  i2626.m_UiScaleMode = i2627[0]
  i2626.m_ReferencePixelsPerUnit = i2627[1]
  i2626.m_ScaleFactor = i2627[2]
  i2626.m_ReferenceResolution = new pc.Vec2( i2627[3], i2627[4] )
  i2626.m_ScreenMatchMode = i2627[5]
  i2626.m_MatchWidthOrHeight = i2627[6]
  i2626.m_PhysicalUnit = i2627[7]
  i2626.m_FallbackScreenDPI = i2627[8]
  i2626.m_DefaultSpriteDPI = i2627[9]
  i2626.m_DynamicPixelsPerUnit = i2627[10]
  i2626.m_PresetInfoIsWorld = !!i2627[11]
  return i2626
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2628 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2629 = data
  i2628.m_IgnoreReversedGraphics = !!i2629[0]
  i2628.m_BlockingObjects = i2629[1]
  i2628.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2629[2] )
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2631 = data
  i2630.cullTransparentMesh = !!i2631[0]
  return i2630
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2632 = root || request.c( 'UnityEngine.UI.Image' )
  var i2633 = data
  request.r(i2633[0], i2633[1], 0, i2632, 'm_Sprite')
  i2632.m_Type = i2633[2]
  i2632.m_PreserveAspect = !!i2633[3]
  i2632.m_FillCenter = !!i2633[4]
  i2632.m_FillMethod = i2633[5]
  i2632.m_FillAmount = i2633[6]
  i2632.m_FillClockwise = !!i2633[7]
  i2632.m_FillOrigin = i2633[8]
  i2632.m_UseSpriteMesh = !!i2633[9]
  i2632.m_PixelsPerUnitMultiplier = i2633[10]
  i2632.m_Maskable = !!i2633[11]
  request.r(i2633[12], i2633[13], 0, i2632, 'm_Material')
  i2632.m_Color = new pc.Color(i2633[14], i2633[15], i2633[16], i2633[17])
  i2632.m_RaycastTarget = !!i2633[18]
  i2632.m_RaycastPadding = new pc.Vec4( i2633[19], i2633[20], i2633[21], i2633[22] )
  return i2632
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2634 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2635 = data
  i2634.m_ShowMaskGraphic = !!i2635[0]
  return i2634
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2636 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2637 = data
  request.r(i2637[0], i2637[1], 0, i2636, 'skeletonDataAsset')
  request.r(i2637[2], i2637[3], 0, i2636, 'additiveMaterial')
  request.r(i2637[4], i2637[5], 0, i2636, 'multiplyMaterial')
  request.r(i2637[6], i2637[7], 0, i2636, 'screenMaterial')
  i2636.initialSkinName = i2637[8]
  i2636.initialFlipX = !!i2637[9]
  i2636.initialFlipY = !!i2637[10]
  i2636.startingAnimation = i2637[11]
  i2636.startingLoop = !!i2637[12]
  i2636.timeScale = i2637[13]
  i2636.freeze = !!i2637[14]
  i2636.layoutScaleMode = i2637[15]
  i2636.updateWhenInvisible = i2637[16]
  i2636.allowMultipleCanvasRenderers = !!i2637[17]
  var i2639 = i2637[18]
  var i2638 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2639.length; i += 2) {
  request.r(i2639[i + 0], i2639[i + 1], 1, i2638, '')
  }
  i2636.canvasRenderers = i2638
  i2636.enableSeparatorSlots = !!i2637[19]
  i2636.updateSeparatorPartLocation = !!i2637[20]
  i2636.updateSeparatorPartScale = !!i2637[21]
  i2636.disableMeshAssignmentOnOverride = !!i2637[22]
  i2636.referenceSize = new pc.Vec2( i2637[23], i2637[24] )
  i2636.referenceScale = i2637[25]
  i2636.rectTransformSize = new pc.Vec2( i2637[26], i2637[27] )
  i2636.editReferenceRect = !!i2637[28]
  var i2641 = i2637[29]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.push( i2641[i + 0] );
  }
  i2636.separatorSlotNames = i2640
  var i2643 = i2637[30]
  var i2642 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2643.length; i += 2) {
  request.r(i2643[i + 0], i2643[i + 1], 1, i2642, '')
  }
  i2636.separatorParts = i2642
  i2636.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2637[31], i2636.meshGenerator)
  i2636.updateTiming = i2637[32]
  i2636.unscaledTime = !!i2637[33]
  i2636.m_Maskable = !!i2637[34]
  request.r(i2637[35], i2637[36], 0, i2636, 'm_Material')
  i2636.m_Color = new pc.Color(i2637[37], i2637[38], i2637[39], i2637[40])
  i2636.m_RaycastTarget = !!i2637[41]
  i2636.m_RaycastPadding = new pc.Vec4( i2637[42], i2637[43], i2637[44], i2637[45] )
  return i2636
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2650 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2651 = data
  i2650.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2651[0], i2650.settings)
  return i2650
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2652 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2653 = data
  i2652.useClipping = !!i2653[0]
  i2652.zSpacing = i2653[1]
  i2652.pmaVertexColors = !!i2653[2]
  i2652.tintBlack = !!i2653[3]
  i2652.canvasGroupTintBlack = !!i2653[4]
  i2652.calculateTangents = !!i2653[5]
  i2652.addNormals = !!i2653[6]
  i2652.immutableTriangles = !!i2653[7]
  return i2652
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i2654 = root || request.c( 'AnimationController' )
  var i2655 = data
  var i2657 = i2655[0]
  var i2656 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i2657.length; i += 1) {
    i2656.add(request.d('Anim', i2657[i + 0]));
  }
  i2654.anims = i2656
  i2654.currentIndex = i2655[1]
  return i2654
}

Deserializers["Anim"] = function (request, data, root) {
  var i2660 = root || request.c( 'Anim' )
  var i2661 = data
  i2660.Key = i2661[0]
  var i2663 = i2661[1]
  var i2662 = new (System.Collections.Generic.List$1(Bridge.ns('Sound')))
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.add(request.d('Sound', i2663[i + 0]));
  }
  i2660.Sounds = i2662
  i2660.Loop = !!i2661[2]
  i2660.Next = !!i2661[3]
  return i2660
}

Deserializers["Sound"] = function (request, data, root) {
  var i2666 = root || request.c( 'Sound' )
  var i2667 = data
  i2666.TimeDelay = i2667[0]
  request.r(i2667[1], i2667[2], 0, i2666, 'Clip')
  return i2666
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2668 = root || request.c( 'UnityEngine.UI.Text' )
  var i2669 = data
  i2668.m_FontData = request.d('UnityEngine.UI.FontData', i2669[0], i2668.m_FontData)
  i2668.m_Text = i2669[1]
  i2668.m_Maskable = !!i2669[2]
  request.r(i2669[3], i2669[4], 0, i2668, 'm_Material')
  i2668.m_Color = new pc.Color(i2669[5], i2669[6], i2669[7], i2669[8])
  i2668.m_RaycastTarget = !!i2669[9]
  i2668.m_RaycastPadding = new pc.Vec4( i2669[10], i2669[11], i2669[12], i2669[13] )
  return i2668
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2670 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2671 = data
  request.r(i2671[0], i2671[1], 0, i2670, 'm_Font')
  i2670.m_FontSize = i2671[2]
  i2670.m_FontStyle = i2671[3]
  i2670.m_BestFit = !!i2671[4]
  i2670.m_MinSize = i2671[5]
  i2670.m_MaxSize = i2671[6]
  i2670.m_Alignment = i2671[7]
  i2670.m_AlignByGeometry = !!i2671[8]
  i2670.m_RichText = !!i2671[9]
  i2670.m_HorizontalOverflow = i2671[10]
  i2670.m_VerticalOverflow = i2671[11]
  i2670.m_LineSpacing = i2671[12]
  return i2670
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2672 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2673 = data
  request.r(i2673[0], i2673[1], 0, i2672, 'm_FillRect')
  request.r(i2673[2], i2673[3], 0, i2672, 'm_HandleRect')
  i2672.m_Direction = i2673[4]
  i2672.m_MinValue = i2673[5]
  i2672.m_MaxValue = i2673[6]
  i2672.m_WholeNumbers = !!i2673[7]
  i2672.m_Value = i2673[8]
  i2672.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2673[9], i2672.m_OnValueChanged)
  i2672.m_Navigation = request.d('UnityEngine.UI.Navigation', i2673[10], i2672.m_Navigation)
  i2672.m_Transition = i2673[11]
  i2672.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2673[12], i2672.m_Colors)
  i2672.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2673[13], i2672.m_SpriteState)
  i2672.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2673[14], i2672.m_AnimationTriggers)
  i2672.m_Interactable = !!i2673[15]
  request.r(i2673[16], i2673[17], 0, i2672, 'm_TargetGraphic')
  return i2672
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2674 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2675 = data
  i2674.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2675[0], i2674.m_PersistentCalls)
  return i2674
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2676 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2677 = data
  var i2679 = i2677[0]
  var i2678 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.add(request.d('UnityEngine.Events.PersistentCall', i2679[i + 0]));
  }
  i2676.m_Calls = i2678
  return i2676
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2682 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2683 = data
  request.r(i2683[0], i2683[1], 0, i2682, 'm_Target')
  i2682.m_TargetAssemblyTypeName = i2683[2]
  i2682.m_MethodName = i2683[3]
  i2682.m_Mode = i2683[4]
  i2682.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2683[5], i2682.m_Arguments)
  i2682.m_CallState = i2683[6]
  return i2682
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2684 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2685 = data
  i2684.m_Mode = i2685[0]
  i2684.m_WrapAround = !!i2685[1]
  request.r(i2685[2], i2685[3], 0, i2684, 'm_SelectOnUp')
  request.r(i2685[4], i2685[5], 0, i2684, 'm_SelectOnDown')
  request.r(i2685[6], i2685[7], 0, i2684, 'm_SelectOnLeft')
  request.r(i2685[8], i2685[9], 0, i2684, 'm_SelectOnRight')
  return i2684
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2686 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2687 = data
  i2686.m_NormalColor = new pc.Color(i2687[0], i2687[1], i2687[2], i2687[3])
  i2686.m_HighlightedColor = new pc.Color(i2687[4], i2687[5], i2687[6], i2687[7])
  i2686.m_PressedColor = new pc.Color(i2687[8], i2687[9], i2687[10], i2687[11])
  i2686.m_SelectedColor = new pc.Color(i2687[12], i2687[13], i2687[14], i2687[15])
  i2686.m_DisabledColor = new pc.Color(i2687[16], i2687[17], i2687[18], i2687[19])
  i2686.m_ColorMultiplier = i2687[20]
  i2686.m_FadeDuration = i2687[21]
  return i2686
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2688 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2689 = data
  request.r(i2689[0], i2689[1], 0, i2688, 'm_HighlightedSprite')
  request.r(i2689[2], i2689[3], 0, i2688, 'm_PressedSprite')
  request.r(i2689[4], i2689[5], 0, i2688, 'm_SelectedSprite')
  request.r(i2689[6], i2689[7], 0, i2688, 'm_DisabledSprite')
  return i2688
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2690 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2691 = data
  i2690.m_NormalTrigger = i2691[0]
  i2690.m_HighlightedTrigger = i2691[1]
  i2690.m_PressedTrigger = i2691[2]
  i2690.m_SelectedTrigger = i2691[3]
  i2690.m_DisabledTrigger = i2691[4]
  return i2690
}

Deserializers["TutController"] = function (request, data, root) {
  var i2692 = root || request.c( 'TutController' )
  var i2693 = data
  request.r(i2693[0], i2693[1], 0, i2692, 'icon')
  request.r(i2693[2], i2693[3], 0, i2692, 'tutObject')
  i2692.toPos = new pc.Vec3( i2693[4], i2693[5], i2693[6] )
  i2692.timeMove = i2693[7]
  i2692.timeDelay = i2693[8]
  return i2692
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2694 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2695 = data
  i2694.targetIsSelf = !!i2695[0]
  request.r(i2695[1], i2695[2], 0, i2694, 'targetGO')
  i2694.tweenTargetIsTargetGO = !!i2695[3]
  i2694.delay = i2695[4]
  i2694.duration = i2695[5]
  i2694.easeType = i2695[6]
  i2694.easeCurve = new pc.AnimationCurve( { keys_flow: i2695[7] } )
  i2694.loopType = i2695[8]
  i2694.loops = i2695[9]
  i2694.id = i2695[10]
  i2694.isRelative = !!i2695[11]
  i2694.isFrom = !!i2695[12]
  i2694.isIndependentUpdate = !!i2695[13]
  i2694.autoKill = !!i2695[14]
  i2694.autoGenerate = !!i2695[15]
  i2694.isActive = !!i2695[16]
  i2694.isValid = !!i2695[17]
  request.r(i2695[18], i2695[19], 0, i2694, 'target')
  i2694.animationType = i2695[20]
  i2694.targetType = i2695[21]
  i2694.forcedTargetType = i2695[22]
  i2694.autoPlay = !!i2695[23]
  i2694.useTargetAsV3 = !!i2695[24]
  i2694.endValueFloat = i2695[25]
  i2694.endValueV3 = new pc.Vec3( i2695[26], i2695[27], i2695[28] )
  i2694.endValueV2 = new pc.Vec2( i2695[29], i2695[30] )
  i2694.endValueColor = new pc.Color(i2695[31], i2695[32], i2695[33], i2695[34])
  i2694.endValueString = i2695[35]
  i2694.endValueRect = UnityEngine.Rect.MinMaxRect(i2695[36], i2695[37], i2695[38], i2695[39])
  request.r(i2695[40], i2695[41], 0, i2694, 'endValueTransform')
  i2694.optionalBool0 = !!i2695[42]
  i2694.optionalBool1 = !!i2695[43]
  i2694.optionalFloat0 = i2695[44]
  i2694.optionalInt0 = i2695[45]
  i2694.optionalRotationMode = i2695[46]
  i2694.optionalScrambleMode = i2695[47]
  i2694.optionalShakeRandomnessMode = i2695[48]
  i2694.optionalString = i2695[49]
  i2694.updateType = i2695[50]
  i2694.isSpeedBased = !!i2695[51]
  i2694.hasOnStart = !!i2695[52]
  i2694.hasOnPlay = !!i2695[53]
  i2694.hasOnUpdate = !!i2695[54]
  i2694.hasOnStepComplete = !!i2695[55]
  i2694.hasOnComplete = !!i2695[56]
  i2694.hasOnTweenCreated = !!i2695[57]
  i2694.hasOnRewind = !!i2695[58]
  i2694.onStart = request.d('UnityEngine.Events.UnityEvent', i2695[59], i2694.onStart)
  i2694.onPlay = request.d('UnityEngine.Events.UnityEvent', i2695[60], i2694.onPlay)
  i2694.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2695[61], i2694.onUpdate)
  i2694.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2695[62], i2694.onStepComplete)
  i2694.onComplete = request.d('UnityEngine.Events.UnityEvent', i2695[63], i2694.onComplete)
  i2694.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2695[64], i2694.onTweenCreated)
  i2694.onRewind = request.d('UnityEngine.Events.UnityEvent', i2695[65], i2694.onRewind)
  return i2694
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2696 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2697 = data
  i2696.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2697[0], i2696.m_PersistentCalls)
  return i2696
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2698 = root || request.c( 'UnityEngine.UI.Button' )
  var i2699 = data
  i2698.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2699[0], i2698.m_OnClick)
  i2698.m_Navigation = request.d('UnityEngine.UI.Navigation', i2699[1], i2698.m_Navigation)
  i2698.m_Transition = i2699[2]
  i2698.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2699[3], i2698.m_Colors)
  i2698.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2699[4], i2698.m_SpriteState)
  i2698.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2699[5], i2698.m_AnimationTriggers)
  i2698.m_Interactable = !!i2699[6]
  request.r(i2699[7], i2699[8], 0, i2698, 'm_TargetGraphic')
  return i2698
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2700 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2701 = data
  i2700.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2701[0], i2700.m_PersistentCalls)
  return i2700
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2702 = root || request.c( 'LunaController' )
  var i2703 = data
  i2702.TimePlay = i2703[0]
  i2702.CountPlay = i2703[1]
  i2702.BGColor = new pc.Color(i2703[2], i2703[3], i2703[4], i2703[5])
  i2702.GameBGColor = new pc.Color(i2703[6], i2703[7], i2703[8], i2703[9])
  i2702.LevelTextColor = new pc.Color(i2703[10], i2703[11], i2703[12], i2703[13])
  i2702.TitleTextColor = new pc.Color(i2703[14], i2703[15], i2703[16], i2703[17])
  request.r(i2703[18], i2703[19], 0, i2702, 'time')
  request.r(i2703[20], i2703[21], 0, i2702, 'BGImage')
  request.r(i2703[22], i2703[23], 0, i2702, 'GameBGImage')
  request.r(i2703[24], i2703[25], 0, i2702, 'levelText')
  request.r(i2703[26], i2703[27], 0, i2702, 'titleText')
  request.r(i2703[28], i2703[29], 0, i2702, 'endCard')
  var i2705 = i2703[30]
  var i2704 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2705.length; i += 2) {
  request.r(i2705[i + 0], i2705[i + 1], 1, i2704, '')
  }
  i2702.CTA = i2704
  i2702.count = i2703[31]
  return i2702
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i2708 = root || request.c( 'LayoutController' )
  var i2709 = data
  request.r(i2709[0], i2709[1], 0, i2708, 'CTA')
  i2708.hide = !!i2709[2]
  return i2708
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2710 = root || request.c( 'AudioController' )
  var i2711 = data
  request.r(i2711[0], i2711[1], 0, i2710, 'BGM')
  request.r(i2711[2], i2711[3], 0, i2710, 'musicSource')
  request.r(i2711[4], i2711[5], 0, i2710, 'SFXPool')
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2713 = data
  request.r(i2713[0], i2713[1], 0, i2712, 'clip')
  request.r(i2713[2], i2713[3], 0, i2712, 'outputAudioMixerGroup')
  i2712.playOnAwake = !!i2713[4]
  i2712.loop = !!i2713[5]
  i2712.time = i2713[6]
  i2712.volume = i2713[7]
  i2712.pitch = i2713[8]
  i2712.enabled = !!i2713[9]
  return i2712
}

Deserializers["DragController"] = function (request, data, root) {
  var i2714 = root || request.c( 'DragController' )
  var i2715 = data
  request.r(i2715[0], i2715[1], 0, i2714, 'currentTarget')
  request.r(i2715[2], i2715[3], 0, i2714, 'iconMedicine')
  request.r(i2715[4], i2715[5], 0, i2714, 'canvas')
  request.r(i2715[6], i2715[7], 0, i2714, 'door')
  request.r(i2715[8], i2715[9], 0, i2714, 'board1')
  request.r(i2715[10], i2715[11], 0, i2714, 'board2')
  request.r(i2715[12], i2715[13], 0, i2714, 'tut')
  return i2714
}

Deserializers["GameController"] = function (request, data, root) {
  var i2716 = root || request.c( 'GameController' )
  var i2717 = data
  i2716.CompleteStep = request.d('System.Action', i2717[0], i2716.CompleteStep)
  var i2719 = i2717[1]
  var i2718 = new (System.Collections.Generic.List$1(Bridge.ns('Seq')))
  for(var i = 0; i < i2719.length; i += 1) {
    i2718.add(request.d('Seq', i2719[i + 0]));
  }
  i2716.skeletons = i2718
  i2716.end = !!i2717[2]
  i2716.complete = !!i2717[3]
  i2716.currentStep = i2717[4]
  i2716.maxStep = i2717[5]
  request.r(i2717[6], i2717[7], 0, i2716, 'currentStepText')
  request.r(i2717[8], i2717[9], 0, i2716, 'maxStepText')
  request.r(i2717[10], i2717[11], 0, i2716, 'slider')
  return i2716
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2720 = root || request.c( 'System.Action' )
  var i2721 = data
  return i2720
}

Deserializers["Seq"] = function (request, data, root) {
  var i2724 = root || request.c( 'Seq' )
  var i2725 = data
  request.r(i2725[0], i2725[1], 0, i2724, 'Area')
  request.r(i2725[2], i2725[3], 0, i2724, 'Animation')
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2727 = data
  i2726.ambientIntensity = i2727[0]
  i2726.reflectionIntensity = i2727[1]
  i2726.ambientMode = i2727[2]
  i2726.ambientLight = new pc.Color(i2727[3], i2727[4], i2727[5], i2727[6])
  i2726.ambientSkyColor = new pc.Color(i2727[7], i2727[8], i2727[9], i2727[10])
  i2726.ambientGroundColor = new pc.Color(i2727[11], i2727[12], i2727[13], i2727[14])
  i2726.ambientEquatorColor = new pc.Color(i2727[15], i2727[16], i2727[17], i2727[18])
  i2726.fogColor = new pc.Color(i2727[19], i2727[20], i2727[21], i2727[22])
  i2726.fogEndDistance = i2727[23]
  i2726.fogStartDistance = i2727[24]
  i2726.fogDensity = i2727[25]
  i2726.fog = !!i2727[26]
  request.r(i2727[27], i2727[28], 0, i2726, 'skybox')
  i2726.fogMode = i2727[29]
  var i2729 = i2727[30]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2729[i + 0]) );
  }
  i2726.lightmaps = i2728
  i2726.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2727[31], i2726.lightProbes)
  i2726.lightmapsMode = i2727[32]
  i2726.mixedBakeMode = i2727[33]
  i2726.environmentLightingMode = i2727[34]
  i2726.ambientProbe = new pc.SphericalHarmonicsL2(i2727[35])
  i2726.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2727[36])
  i2726.useReferenceAmbientProbe = !!i2727[37]
  request.r(i2727[38], i2727[39], 0, i2726, 'customReflection')
  request.r(i2727[40], i2727[41], 0, i2726, 'defaultReflection')
  i2726.defaultReflectionMode = i2727[42]
  i2726.defaultReflectionResolution = i2727[43]
  i2726.sunLightObjectId = i2727[44]
  i2726.pixelLightCount = i2727[45]
  i2726.defaultReflectionHDR = !!i2727[46]
  i2726.hasLightDataAsset = !!i2727[47]
  i2726.hasManualGenerate = !!i2727[48]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2733 = data
  request.r(i2733[0], i2733[1], 0, i2732, 'lightmapColor')
  request.r(i2733[2], i2733[3], 0, i2732, 'lightmapDirection')
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2734 = root || new UnityEngine.LightProbes()
  var i2735 = data
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2743 = data
  var i2745 = i2743[0]
  var i2744 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2745.length; i += 1) {
    i2744.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2745[i + 0]));
  }
  i2742.ShaderCompilationErrors = i2744
  i2742.name = i2743[1]
  i2742.guid = i2743[2]
  var i2747 = i2743[3]
  var i2746 = []
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.push( i2747[i + 0] );
  }
  i2742.shaderDefinedKeywords = i2746
  var i2749 = i2743[4]
  var i2748 = []
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2749[i + 0]) );
  }
  i2742.passes = i2748
  var i2751 = i2743[5]
  var i2750 = []
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2751[i + 0]) );
  }
  i2742.usePasses = i2750
  var i2753 = i2743[6]
  var i2752 = []
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2753[i + 0]) );
  }
  i2742.defaultParameterValues = i2752
  request.r(i2743[7], i2743[8], 0, i2742, 'unityFallbackShader')
  i2742.readDepth = !!i2743[9]
  i2742.isCreatedByShaderGraph = !!i2743[10]
  i2742.disableBatching = !!i2743[11]
  i2742.compiled = !!i2743[12]
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2757 = data
  i2756.shaderName = i2757[0]
  i2756.errorMessage = i2757[1]
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2760 = root || new pc.UnityShaderPass()
  var i2761 = data
  i2760.id = i2761[0]
  i2760.subShaderIndex = i2761[1]
  i2760.name = i2761[2]
  i2760.passType = i2761[3]
  i2760.grabPassTextureName = i2761[4]
  i2760.usePass = !!i2761[5]
  i2760.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2761[6], i2760.zTest)
  i2760.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2761[7], i2760.zWrite)
  i2760.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2761[8], i2760.culling)
  i2760.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2761[9], i2760.blending)
  i2760.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2761[10], i2760.alphaBlending)
  i2760.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2761[11], i2760.colorWriteMask)
  i2760.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2761[12], i2760.offsetUnits)
  i2760.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2761[13], i2760.offsetFactor)
  i2760.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2761[14], i2760.stencilRef)
  i2760.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2761[15], i2760.stencilReadMask)
  i2760.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2761[16], i2760.stencilWriteMask)
  i2760.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2761[17], i2760.stencilOp)
  i2760.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2761[18], i2760.stencilOpFront)
  i2760.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2761[19], i2760.stencilOpBack)
  var i2763 = i2761[20]
  var i2762 = []
  for(var i = 0; i < i2763.length; i += 1) {
    i2762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2763[i + 0]) );
  }
  i2760.tags = i2762
  var i2765 = i2761[21]
  var i2764 = []
  for(var i = 0; i < i2765.length; i += 1) {
    i2764.push( i2765[i + 0] );
  }
  i2760.passDefinedKeywords = i2764
  var i2767 = i2761[22]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2767[i + 0]) );
  }
  i2760.passDefinedKeywordGroups = i2766
  var i2769 = i2761[23]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2769[i + 0]) );
  }
  i2760.variants = i2768
  var i2771 = i2761[24]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2771[i + 0]) );
  }
  i2760.excludedVariants = i2770
  i2760.hasDepthReader = !!i2761[25]
  return i2760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2773 = data
  i2772.val = i2773[0]
  i2772.name = i2773[1]
  return i2772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2775 = data
  i2774.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2775[0], i2774.src)
  i2774.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2775[1], i2774.dst)
  i2774.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2775[2], i2774.op)
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2777 = data
  i2776.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2777[0], i2776.pass)
  i2776.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2777[1], i2776.fail)
  i2776.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2777[2], i2776.zFail)
  i2776.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2777[3], i2776.comp)
  return i2776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2781 = data
  i2780.name = i2781[0]
  i2780.value = i2781[1]
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2785 = data
  var i2787 = i2785[0]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.push( i2787[i + 0] );
  }
  i2784.keywords = i2786
  i2784.hasDiscard = !!i2785[1]
  return i2784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2791 = data
  i2790.passId = i2791[0]
  i2790.subShaderIndex = i2791[1]
  var i2793 = i2791[2]
  var i2792 = []
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.push( i2793[i + 0] );
  }
  i2790.keywords = i2792
  i2790.vertexProgram = i2791[3]
  i2790.fragmentProgram = i2791[4]
  i2790.exportedForWebGl2 = !!i2791[5]
  i2790.readDepth = !!i2791[6]
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2797 = data
  request.r(i2797[0], i2797[1], 0, i2796, 'shader')
  i2796.pass = i2797[2]
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2801 = data
  i2800.name = i2801[0]
  i2800.type = i2801[1]
  i2800.value = new pc.Vec4( i2801[2], i2801[3], i2801[4], i2801[5] )
  i2800.textureValue = i2801[6]
  i2800.shaderPropertyFlag = i2801[7]
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2803 = data
  i2802.name = i2803[0]
  request.r(i2803[1], i2803[2], 0, i2802, 'texture')
  i2802.aabb = i2803[3]
  i2802.vertices = i2803[4]
  i2802.triangles = i2803[5]
  i2802.textureRect = UnityEngine.Rect.MinMaxRect(i2803[6], i2803[7], i2803[8], i2803[9])
  i2802.packedRect = UnityEngine.Rect.MinMaxRect(i2803[10], i2803[11], i2803[12], i2803[13])
  i2802.border = new pc.Vec4( i2803[14], i2803[15], i2803[16], i2803[17] )
  i2802.transparency = i2803[18]
  i2802.bounds = i2803[19]
  i2802.pixelsPerUnit = i2803[20]
  i2802.textureWidth = i2803[21]
  i2802.textureHeight = i2803[22]
  i2802.nativeSize = new pc.Vec2( i2803[23], i2803[24] )
  i2802.pivot = new pc.Vec2( i2803[25], i2803[26] )
  i2802.textureRectOffset = new pc.Vec2( i2803[27], i2803[28] )
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2805 = data
  i2804.name = i2805[0]
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2807 = data
  i2806.name = i2807[0]
  i2806.ascent = i2807[1]
  i2806.originalLineHeight = i2807[2]
  i2806.fontSize = i2807[3]
  var i2809 = i2807[4]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2809[i + 0]) );
  }
  i2806.characterInfo = i2808
  request.r(i2807[5], i2807[6], 0, i2806, 'texture')
  i2806.originalFontSize = i2807[7]
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2813 = data
  i2812.index = i2813[0]
  i2812.advance = i2813[1]
  i2812.bearing = i2813[2]
  i2812.glyphWidth = i2813[3]
  i2812.glyphHeight = i2813[4]
  i2812.minX = i2813[5]
  i2812.maxX = i2813[6]
  i2812.minY = i2813[7]
  i2812.maxY = i2813[8]
  i2812.uvBottomLeftX = i2813[9]
  i2812.uvBottomLeftY = i2813[10]
  i2812.uvBottomRightX = i2813[11]
  i2812.uvBottomRightY = i2813[12]
  i2812.uvTopLeftX = i2813[13]
  i2812.uvTopLeftY = i2813[14]
  i2812.uvTopRightX = i2813[15]
  i2812.uvTopRightY = i2813[16]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2815 = data
  i2814.name = i2815[0]
  i2814.bytes64 = i2815[1]
  i2814.data = i2815[2]
  return i2814
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2816 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2817 = data
  var i2819 = i2817[0]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 2) {
  request.r(i2819[i + 0], i2819[i + 1], 2, i2818, '')
  }
  i2816.atlasAssets = i2818
  i2816.scale = i2817[1]
  request.r(i2817[2], i2817[3], 0, i2816, 'skeletonJSON')
  i2816.isUpgradingBlendModeMaterials = !!i2817[4]
  i2816.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2817[5], i2816.blendModeMaterials)
  var i2821 = i2817[6]
  var i2820 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2821.length; i += 2) {
  request.r(i2821[i + 0], i2821[i + 1], 1, i2820, '')
  }
  i2816.skeletonDataModifiers = i2820
  var i2823 = i2817[7]
  var i2822 = []
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.push( i2823[i + 0] );
  }
  i2816.fromAnimation = i2822
  var i2825 = i2817[8]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.push( i2825[i + 0] );
  }
  i2816.toAnimation = i2824
  i2816.duration = i2817[9]
  i2816.defaultMix = i2817[10]
  request.r(i2817[11], i2817[12], 0, i2816, 'controller')
  return i2816
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2828 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2829 = data
  i2828.applyAdditiveMaterial = !!i2829[0]
  var i2831 = i2829[1]
  var i2830 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2831.length; i += 1) {
    i2830.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2831[i + 0]));
  }
  i2828.additiveMaterials = i2830
  var i2833 = i2829[2]
  var i2832 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2833[i + 0]));
  }
  i2828.multiplyMaterials = i2832
  var i2835 = i2829[3]
  var i2834 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2835.length; i += 1) {
    i2834.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2835[i + 0]));
  }
  i2828.screenMaterials = i2834
  i2828.requiresBlendModeMaterials = !!i2829[4]
  return i2828
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2838 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2839 = data
  i2838.pageName = i2839[0]
  request.r(i2839[1], i2839[2], 0, i2838, 'material')
  return i2838
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2842 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2843 = data
  request.r(i2843[0], i2843[1], 0, i2842, 'atlasFile')
  var i2845 = i2843[2]
  var i2844 = []
  for(var i = 0; i < i2845.length; i += 2) {
  request.r(i2845[i + 0], i2845[i + 1], 2, i2844, '')
  }
  i2842.materials = i2844
  i2842.textureLoadingMode = i2843[3]
  request.r(i2843[4], i2843[5], 0, i2842, 'onDemandTextureLoader')
  return i2842
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2848 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2849 = data
  i2848.useSafeMode = !!i2849[0]
  i2848.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2849[1], i2848.safeModeOptions)
  i2848.timeScale = i2849[2]
  i2848.unscaledTimeScale = i2849[3]
  i2848.useSmoothDeltaTime = !!i2849[4]
  i2848.maxSmoothUnscaledTime = i2849[5]
  i2848.rewindCallbackMode = i2849[6]
  i2848.showUnityEditorReport = !!i2849[7]
  i2848.logBehaviour = i2849[8]
  i2848.drawGizmos = !!i2849[9]
  i2848.defaultRecyclable = !!i2849[10]
  i2848.defaultAutoPlay = i2849[11]
  i2848.defaultUpdateType = i2849[12]
  i2848.defaultTimeScaleIndependent = !!i2849[13]
  i2848.defaultEaseType = i2849[14]
  i2848.defaultEaseOvershootOrAmplitude = i2849[15]
  i2848.defaultEasePeriod = i2849[16]
  i2848.defaultAutoKill = !!i2849[17]
  i2848.defaultLoopType = i2849[18]
  i2848.debugMode = !!i2849[19]
  i2848.debugStoreTargetId = !!i2849[20]
  i2848.showPreviewPanel = !!i2849[21]
  i2848.storeSettingsLocation = i2849[22]
  i2848.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2849[23], i2848.modules)
  i2848.createASMDEF = !!i2849[24]
  i2848.showPlayingTweens = !!i2849[25]
  i2848.showPausedTweens = !!i2849[26]
  return i2848
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2850 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2851 = data
  i2850.logBehaviour = i2851[0]
  i2850.nestedTweenFailureBehaviour = i2851[1]
  return i2850
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2852 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2853 = data
  i2852.showPanel = !!i2853[0]
  i2852.audioEnabled = !!i2853[1]
  i2852.physicsEnabled = !!i2853[2]
  i2852.physics2DEnabled = !!i2853[3]
  i2852.spriteEnabled = !!i2853[4]
  i2852.uiEnabled = !!i2853[5]
  i2852.textMeshProEnabled = !!i2853[6]
  i2852.tk2DEnabled = !!i2853[7]
  i2852.deAudioEnabled = !!i2853[8]
  i2852.deUnityExtendedEnabled = !!i2853[9]
  i2852.epoOutlineEnabled = !!i2853[10]
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2855 = data
  var i2857 = i2855[0]
  var i2856 = []
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2857[i + 0]) );
  }
  i2854.files = i2856
  i2854.componentToPrefabIds = i2855[1]
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2861 = data
  i2860.path = i2861[0]
  request.r(i2861[1], i2861[2], 0, i2860, 'unityObject')
  return i2860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2863 = data
  var i2865 = i2863[0]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 1) {
    i2864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2865[i + 0]) );
  }
  i2862.scriptsExecutionOrder = i2864
  var i2867 = i2863[1]
  var i2866 = []
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2867[i + 0]) );
  }
  i2862.sortingLayers = i2866
  var i2869 = i2863[2]
  var i2868 = []
  for(var i = 0; i < i2869.length; i += 1) {
    i2868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2869[i + 0]) );
  }
  i2862.cullingLayers = i2868
  i2862.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2863[3], i2862.timeSettings)
  i2862.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2863[4], i2862.physicsSettings)
  i2862.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2863[5], i2862.physics2DSettings)
  i2862.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2863[6], i2862.qualitySettings)
  i2862.enableRealtimeShadows = !!i2863[7]
  i2862.enableAutoInstancing = !!i2863[8]
  i2862.enableStaticBatching = !!i2863[9]
  i2862.enableDynamicBatching = !!i2863[10]
  i2862.lightmapEncodingQuality = i2863[11]
  i2862.desiredColorSpace = i2863[12]
  var i2871 = i2863[13]
  var i2870 = []
  for(var i = 0; i < i2871.length; i += 1) {
    i2870.push( i2871[i + 0] );
  }
  i2862.allTags = i2870
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2875 = data
  i2874.name = i2875[0]
  i2874.value = i2875[1]
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2879 = data
  i2878.id = i2879[0]
  i2878.name = i2879[1]
  i2878.value = i2879[2]
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2883 = data
  i2882.id = i2883[0]
  i2882.name = i2883[1]
  return i2882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2885 = data
  i2884.fixedDeltaTime = i2885[0]
  i2884.maximumDeltaTime = i2885[1]
  i2884.timeScale = i2885[2]
  i2884.maximumParticleTimestep = i2885[3]
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2887 = data
  i2886.gravity = new pc.Vec3( i2887[0], i2887[1], i2887[2] )
  i2886.defaultSolverIterations = i2887[3]
  i2886.bounceThreshold = i2887[4]
  i2886.autoSyncTransforms = !!i2887[5]
  i2886.autoSimulation = !!i2887[6]
  var i2889 = i2887[7]
  var i2888 = []
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2889[i + 0]) );
  }
  i2886.collisionMatrix = i2888
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2893 = data
  i2892.enabled = !!i2893[0]
  i2892.layerId = i2893[1]
  i2892.otherLayerId = i2893[2]
  return i2892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2895 = data
  request.r(i2895[0], i2895[1], 0, i2894, 'material')
  i2894.gravity = new pc.Vec2( i2895[2], i2895[3] )
  i2894.positionIterations = i2895[4]
  i2894.velocityIterations = i2895[5]
  i2894.velocityThreshold = i2895[6]
  i2894.maxLinearCorrection = i2895[7]
  i2894.maxAngularCorrection = i2895[8]
  i2894.maxTranslationSpeed = i2895[9]
  i2894.maxRotationSpeed = i2895[10]
  i2894.baumgarteScale = i2895[11]
  i2894.baumgarteTOIScale = i2895[12]
  i2894.timeToSleep = i2895[13]
  i2894.linearSleepTolerance = i2895[14]
  i2894.angularSleepTolerance = i2895[15]
  i2894.defaultContactOffset = i2895[16]
  i2894.autoSimulation = !!i2895[17]
  i2894.queriesHitTriggers = !!i2895[18]
  i2894.queriesStartInColliders = !!i2895[19]
  i2894.callbacksOnDisable = !!i2895[20]
  i2894.reuseCollisionCallbacks = !!i2895[21]
  i2894.autoSyncTransforms = !!i2895[22]
  var i2897 = i2895[23]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2897[i + 0]) );
  }
  i2894.collisionMatrix = i2896
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2901 = data
  i2900.enabled = !!i2901[0]
  i2900.layerId = i2901[1]
  i2900.otherLayerId = i2901[2]
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2903 = data
  var i2905 = i2903[0]
  var i2904 = []
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2905[i + 0]) );
  }
  i2902.qualityLevels = i2904
  var i2907 = i2903[1]
  var i2906 = []
  for(var i = 0; i < i2907.length; i += 1) {
    i2906.push( i2907[i + 0] );
  }
  i2902.names = i2906
  i2902.shadows = i2903[2]
  i2902.anisotropicFiltering = i2903[3]
  i2902.antiAliasing = i2903[4]
  i2902.lodBias = i2903[5]
  i2902.shadowCascades = i2903[6]
  i2902.shadowDistance = i2903[7]
  i2902.shadowmaskMode = i2903[8]
  i2902.shadowProjection = i2903[9]
  i2902.shadowResolution = i2903[10]
  i2902.softParticles = !!i2903[11]
  i2902.softVegetation = !!i2903[12]
  i2902.activeColorSpace = i2903[13]
  i2902.desiredColorSpace = i2903[14]
  i2902.masterTextureLimit = i2903[15]
  i2902.maxQueuedFrames = i2903[16]
  i2902.particleRaycastBudget = i2903[17]
  i2902.pixelLightCount = i2903[18]
  i2902.realtimeReflectionProbes = !!i2903[19]
  i2902.shadowCascade2Split = i2903[20]
  i2902.shadowCascade4Split = new pc.Vec3( i2903[21], i2903[22], i2903[23] )
  i2902.streamingMipmapsActive = !!i2903[24]
  i2902.vSyncCount = i2903[25]
  i2902.asyncUploadBufferSize = i2903[26]
  i2902.asyncUploadTimeSlice = i2903[27]
  i2902.billboardsFaceCameraPosition = !!i2903[28]
  i2902.shadowNearPlaneOffset = i2903[29]
  i2902.streamingMipmapsMemoryBudget = i2903[30]
  i2902.maximumLODLevel = i2903[31]
  i2902.streamingMipmapsAddAllCameras = !!i2903[32]
  i2902.streamingMipmapsMaxLevelReduction = i2903[33]
  i2902.streamingMipmapsRenderersPerFrame = i2903[34]
  i2902.resolutionScalingFixedDPIFactor = i2903[35]
  i2902.streamingMipmapsMaxFileIORequests = i2903[36]
  i2902.currentQualityLevel = i2903[37]
  return i2902
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2910 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2911 = data
  request.r(i2911[0], i2911[1], 0, i2910, 'm_ObjectArgument')
  i2910.m_ObjectArgumentAssemblyTypeName = i2911[2]
  i2910.m_IntArgument = i2911[3]
  i2910.m_FloatArgument = i2911[4]
  i2910.m_StringArgument = i2911[5]
  i2910.m_BoolArgument = !!i2911[6]
  return i2910
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[3],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[3],"71":[72],"73":[74],"75":[74],"9":[8],"20":[16],"76":[77],"78":[79],"80":[77],"81":[8],"82":[8],"11":[9],"13":[12,8],"83":[8],"10":[9],"84":[8],"85":[8],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"15":[8],"91":[8],"92":[12,8],"93":[8],"94":[8],"95":[8],"24":[8],"22":[12,8],"96":[8],"97":[6],"98":[6],"7":[6],"99":[6],"100":[3],"101":[3],"102":[103],"104":[3],"105":[106],"107":[8],"108":[12,8],"109":[72],"16":[12,8],"110":[111,72],"112":[72],"113":[72,114],"115":[49],"116":[57],"117":[106],"118":[119],"120":[77]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","UnityEngine.AudioClip","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Slider","TutController","UnityEngine.GameObject","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","LunaController","LayoutController","AudioController","UnityEngine.AudioSource","DragController","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "06/10/2026 03:50:26";

Deserializers.lunaDaysRunning = "12.1";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "TBAP_V20_NgocNDL_TamNTM";

Deserializers.lunaAppID = "33901";

Deserializers.projectId = "5b44dfd2230fe054ca8da1b65d37e310";

Deserializers.packagesInfo = "com.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1761";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3773";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BMTP_Luna";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "c4d7f068-1f8c-4208-b641-9b1f4a6543c6";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

