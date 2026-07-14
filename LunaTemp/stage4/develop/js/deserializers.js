var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5590 = root || request.c( 'UnityEngine.JointSpring' )
  var i5591 = data
  i5590.spring = i5591[0]
  i5590.damper = i5591[1]
  i5590.targetPosition = i5591[2]
  return i5590
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5592 = root || request.c( 'UnityEngine.JointMotor' )
  var i5593 = data
  i5592.m_TargetVelocity = i5593[0]
  i5592.m_Force = i5593[1]
  i5592.m_FreeSpin = i5593[2]
  return i5592
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5594 = root || request.c( 'UnityEngine.JointLimits' )
  var i5595 = data
  i5594.m_Min = i5595[0]
  i5594.m_Max = i5595[1]
  i5594.m_Bounciness = i5595[2]
  i5594.m_BounceMinVelocity = i5595[3]
  i5594.m_ContactDistance = i5595[4]
  i5594.minBounce = i5595[5]
  i5594.maxBounce = i5595[6]
  return i5594
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5596 = root || request.c( 'UnityEngine.JointDrive' )
  var i5597 = data
  i5596.m_PositionSpring = i5597[0]
  i5596.m_PositionDamper = i5597[1]
  i5596.m_MaximumForce = i5597[2]
  i5596.m_UseAcceleration = i5597[3]
  return i5596
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5598 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5599 = data
  i5598.m_Spring = i5599[0]
  i5598.m_Damper = i5599[1]
  return i5598
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5600 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5601 = data
  i5600.m_Limit = i5601[0]
  i5600.m_Bounciness = i5601[1]
  i5600.m_ContactDistance = i5601[2]
  return i5600
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5602 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5603 = data
  i5602.m_ExtremumSlip = i5603[0]
  i5602.m_ExtremumValue = i5603[1]
  i5602.m_AsymptoteSlip = i5603[2]
  i5602.m_AsymptoteValue = i5603[3]
  i5602.m_Stiffness = i5603[4]
  return i5602
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5604 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5605 = data
  i5604.m_LowerAngle = i5605[0]
  i5604.m_UpperAngle = i5605[1]
  return i5604
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5606 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5607 = data
  i5606.m_MotorSpeed = i5607[0]
  i5606.m_MaximumMotorTorque = i5607[1]
  return i5606
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5608 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5609 = data
  i5608.m_DampingRatio = i5609[0]
  i5608.m_Frequency = i5609[1]
  i5608.m_Angle = i5609[2]
  return i5608
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5610 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5611 = data
  i5610.m_LowerTranslation = i5611[0]
  i5610.m_UpperTranslation = i5611[1]
  return i5610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5613 = data
  i5612.name = i5613[0]
  i5612.width = i5613[1]
  i5612.height = i5613[2]
  i5612.mipmapCount = i5613[3]
  i5612.anisoLevel = i5613[4]
  i5612.filterMode = i5613[5]
  i5612.hdr = !!i5613[6]
  i5612.format = i5613[7]
  i5612.wrapMode = i5613[8]
  i5612.alphaIsTransparency = !!i5613[9]
  i5612.alphaSource = i5613[10]
  i5612.graphicsFormat = i5613[11]
  i5612.sRGBTexture = !!i5613[12]
  i5612.desiredColorSpace = i5613[13]
  i5612.wrapU = i5613[14]
  i5612.wrapV = i5613[15]
  return i5612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5614 = root || new pc.UnityMaterial()
  var i5615 = data
  i5614.name = i5615[0]
  request.r(i5615[1], i5615[2], 0, i5614, 'shader')
  i5614.renderQueue = i5615[3]
  i5614.enableInstancing = !!i5615[4]
  var i5617 = i5615[5]
  var i5616 = []
  for(var i = 0; i < i5617.length; i += 1) {
    i5616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5617[i + 0]) );
  }
  i5614.floatParameters = i5616
  var i5619 = i5615[6]
  var i5618 = []
  for(var i = 0; i < i5619.length; i += 1) {
    i5618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5619[i + 0]) );
  }
  i5614.colorParameters = i5618
  var i5621 = i5615[7]
  var i5620 = []
  for(var i = 0; i < i5621.length; i += 1) {
    i5620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5621[i + 0]) );
  }
  i5614.vectorParameters = i5620
  var i5623 = i5615[8]
  var i5622 = []
  for(var i = 0; i < i5623.length; i += 1) {
    i5622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5623[i + 0]) );
  }
  i5614.textureParameters = i5622
  var i5625 = i5615[9]
  var i5624 = []
  for(var i = 0; i < i5625.length; i += 1) {
    i5624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5625[i + 0]) );
  }
  i5614.materialFlags = i5624
  return i5614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5629 = data
  i5628.name = i5629[0]
  i5628.value = i5629[1]
  return i5628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5633 = data
  i5632.name = i5633[0]
  i5632.value = new pc.Color(i5633[1], i5633[2], i5633[3], i5633[4])
  return i5632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5637 = data
  i5636.name = i5637[0]
  i5636.value = new pc.Vec4( i5637[1], i5637[2], i5637[3], i5637[4] )
  return i5636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5641 = data
  i5640.name = i5641[0]
  request.r(i5641[1], i5641[2], 0, i5640, 'value')
  return i5640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5645 = data
  i5644.name = i5645[0]
  i5644.enabled = !!i5645[1]
  return i5644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5647 = data
  i5646.name = i5647[0]
  i5646.index = i5647[1]
  i5646.startup = !!i5647[2]
  return i5646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5649 = data
  i5648.aspect = i5649[0]
  i5648.orthographic = !!i5649[1]
  i5648.orthographicSize = i5649[2]
  i5648.backgroundColor = new pc.Color(i5649[3], i5649[4], i5649[5], i5649[6])
  i5648.nearClipPlane = i5649[7]
  i5648.farClipPlane = i5649[8]
  i5648.fieldOfView = i5649[9]
  i5648.depth = i5649[10]
  i5648.clearFlags = i5649[11]
  i5648.cullingMask = i5649[12]
  i5648.rect = i5649[13]
  request.r(i5649[14], i5649[15], 0, i5648, 'targetTexture')
  i5648.usePhysicalProperties = !!i5649[16]
  i5648.focalLength = i5649[17]
  i5648.sensorSize = new pc.Vec2( i5649[18], i5649[19] )
  i5648.lensShift = new pc.Vec2( i5649[20], i5649[21] )
  i5648.gateFit = i5649[22]
  i5648.commandBufferCount = i5649[23]
  i5648.cameraType = i5649[24]
  i5648.enabled = !!i5649[25]
  return i5648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5651 = data
  i5650.name = i5651[0]
  i5650.tagId = i5651[1]
  i5650.enabled = !!i5651[2]
  i5650.isStatic = !!i5651[3]
  i5650.layer = i5651[4]
  return i5650
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5652 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5653 = data
  request.r(i5653[0], i5653[1], 0, i5652, 'm_FirstSelected')
  i5652.m_sendNavigationEvents = !!i5653[2]
  i5652.m_DragThreshold = i5653[3]
  return i5652
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5654 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5655 = data
  i5654.m_HorizontalAxis = i5655[0]
  i5654.m_VerticalAxis = i5655[1]
  i5654.m_SubmitButton = i5655[2]
  i5654.m_CancelButton = i5655[3]
  i5654.m_InputActionsPerSecond = i5655[4]
  i5654.m_RepeatDelay = i5655[5]
  i5654.m_ForceModuleActive = !!i5655[6]
  i5654.m_SendPointerHoverToParent = !!i5655[7]
  return i5654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5657 = data
  i5656.pivot = new pc.Vec2( i5657[0], i5657[1] )
  i5656.anchorMin = new pc.Vec2( i5657[2], i5657[3] )
  i5656.anchorMax = new pc.Vec2( i5657[4], i5657[5] )
  i5656.sizeDelta = new pc.Vec2( i5657[6], i5657[7] )
  i5656.anchoredPosition3D = new pc.Vec3( i5657[8], i5657[9], i5657[10] )
  i5656.rotation = new pc.Quat(i5657[11], i5657[12], i5657[13], i5657[14])
  i5656.scale = new pc.Vec3( i5657[15], i5657[16], i5657[17] )
  return i5656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5659 = data
  i5658.planeDistance = i5659[0]
  i5658.referencePixelsPerUnit = i5659[1]
  i5658.isFallbackOverlay = !!i5659[2]
  i5658.renderMode = i5659[3]
  i5658.renderOrder = i5659[4]
  i5658.sortingLayerName = i5659[5]
  i5658.sortingOrder = i5659[6]
  i5658.scaleFactor = i5659[7]
  request.r(i5659[8], i5659[9], 0, i5658, 'worldCamera')
  i5658.overrideSorting = !!i5659[10]
  i5658.pixelPerfect = !!i5659[11]
  i5658.targetDisplay = i5659[12]
  i5658.overridePixelPerfect = !!i5659[13]
  i5658.enabled = !!i5659[14]
  return i5658
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5660 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5661 = data
  i5660.m_UiScaleMode = i5661[0]
  i5660.m_ReferencePixelsPerUnit = i5661[1]
  i5660.m_ScaleFactor = i5661[2]
  i5660.m_ReferenceResolution = new pc.Vec2( i5661[3], i5661[4] )
  i5660.m_ScreenMatchMode = i5661[5]
  i5660.m_MatchWidthOrHeight = i5661[6]
  i5660.m_PhysicalUnit = i5661[7]
  i5660.m_FallbackScreenDPI = i5661[8]
  i5660.m_DefaultSpriteDPI = i5661[9]
  i5660.m_DynamicPixelsPerUnit = i5661[10]
  i5660.m_PresetInfoIsWorld = !!i5661[11]
  return i5660
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5662 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5663 = data
  i5662.m_IgnoreReversedGraphics = !!i5663[0]
  i5662.m_BlockingObjects = i5663[1]
  i5662.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5663[2] )
  return i5662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5665 = data
  i5664.cullTransparentMesh = !!i5665[0]
  return i5664
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5666 = root || request.c( 'UnityEngine.UI.Image' )
  var i5667 = data
  request.r(i5667[0], i5667[1], 0, i5666, 'm_Sprite')
  i5666.m_Type = i5667[2]
  i5666.m_PreserveAspect = !!i5667[3]
  i5666.m_FillCenter = !!i5667[4]
  i5666.m_FillMethod = i5667[5]
  i5666.m_FillAmount = i5667[6]
  i5666.m_FillClockwise = !!i5667[7]
  i5666.m_FillOrigin = i5667[8]
  i5666.m_UseSpriteMesh = !!i5667[9]
  i5666.m_PixelsPerUnitMultiplier = i5667[10]
  request.r(i5667[11], i5667[12], 0, i5666, 'm_Material')
  i5666.m_Maskable = !!i5667[13]
  i5666.m_Color = new pc.Color(i5667[14], i5667[15], i5667[16], i5667[17])
  i5666.m_RaycastTarget = !!i5667[18]
  i5666.m_RaycastPadding = new pc.Vec4( i5667[19], i5667[20], i5667[21], i5667[22] )
  return i5666
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i5668 = root || request.c( 'UnityEngine.UI.Mask' )
  var i5669 = data
  i5668.m_ShowMaskGraphic = !!i5669[0]
  return i5668
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i5670 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i5671 = data
  request.r(i5671[0], i5671[1], 0, i5670, 'skeletonDataAsset')
  request.r(i5671[2], i5671[3], 0, i5670, 'additiveMaterial')
  request.r(i5671[4], i5671[5], 0, i5670, 'multiplyMaterial')
  request.r(i5671[6], i5671[7], 0, i5670, 'screenMaterial')
  i5670.initialSkinName = i5671[8]
  i5670.initialFlipX = !!i5671[9]
  i5670.initialFlipY = !!i5671[10]
  i5670.startingAnimation = i5671[11]
  i5670.startingLoop = !!i5671[12]
  i5670.timeScale = i5671[13]
  i5670.freeze = !!i5671[14]
  i5670.layoutScaleMode = i5671[15]
  i5670.updateWhenInvisible = i5671[16]
  i5670.allowMultipleCanvasRenderers = !!i5671[17]
  var i5673 = i5671[18]
  var i5672 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i5673.length; i += 2) {
  request.r(i5673[i + 0], i5673[i + 1], 1, i5672, '')
  }
  i5670.canvasRenderers = i5672
  i5670.enableSeparatorSlots = !!i5671[19]
  i5670.updateSeparatorPartLocation = !!i5671[20]
  i5670.updateSeparatorPartScale = !!i5671[21]
  i5670.disableMeshAssignmentOnOverride = !!i5671[22]
  i5670.referenceSize = new pc.Vec2( i5671[23], i5671[24] )
  i5670.referenceScale = i5671[25]
  i5670.rectTransformSize = new pc.Vec2( i5671[26], i5671[27] )
  i5670.editReferenceRect = !!i5671[28]
  var i5675 = i5671[29]
  var i5674 = []
  for(var i = 0; i < i5675.length; i += 1) {
    i5674.push( i5675[i + 0] );
  }
  i5670.separatorSlotNames = i5674
  var i5677 = i5671[30]
  var i5676 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5677.length; i += 2) {
  request.r(i5677[i + 0], i5677[i + 1], 1, i5676, '')
  }
  i5670.separatorParts = i5676
  i5670.meshGenerator = request.d('Spine.Unity.MeshGenerator', i5671[31], i5670.meshGenerator)
  i5670.updateTiming = i5671[32]
  i5670.unscaledTime = !!i5671[33]
  request.r(i5671[34], i5671[35], 0, i5670, 'm_Material')
  i5670.m_Maskable = !!i5671[36]
  i5670.m_Color = new pc.Color(i5671[37], i5671[38], i5671[39], i5671[40])
  i5670.m_RaycastTarget = !!i5671[41]
  i5670.m_RaycastPadding = new pc.Vec4( i5671[42], i5671[43], i5671[44], i5671[45] )
  return i5670
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i5684 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i5685 = data
  i5684.settings = request.d('Spine.Unity.MeshGenerator+Settings', i5685[0], i5684.settings)
  return i5684
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i5686 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i5687 = data
  i5686.useClipping = !!i5687[0]
  i5686.zSpacing = i5687[1]
  i5686.pmaVertexColors = !!i5687[2]
  i5686.tintBlack = !!i5687[3]
  i5686.canvasGroupTintBlack = !!i5687[4]
  i5686.calculateTangents = !!i5687[5]
  i5686.addNormals = !!i5687[6]
  i5686.immutableTriangles = !!i5687[7]
  return i5686
}

Deserializers["TutController"] = function (request, data, root) {
  var i5688 = root || request.c( 'TutController' )
  var i5689 = data
  var i5691 = i5689[0]
  var i5690 = new (System.Collections.Generic.List$1(Bridge.ns('SItem')))
  for(var i = 0; i < i5691.length; i += 1) {
    i5690.add(request.d('SItem', i5691[i + 0]));
  }
  i5688.items = i5690
  i5688.moveTime = i5689[1]
  i5688.scaleTime = i5689[2]
  request.r(i5689[3], i5689[4], 0, i5688, 'popSound')
  return i5688
}

Deserializers["SItem"] = function (request, data, root) {
  var i5694 = root || request.c( 'SItem' )
  var i5695 = data
  i5694.Position = new pc.Vec3( i5695[0], i5695[1], i5695[2] )
  request.r(i5695[3], i5695[4], 0, i5694, 'Item')
  return i5694
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i5696 = root || request.c( 'UnityEngine.UI.Text' )
  var i5697 = data
  i5696.m_FontData = request.d('UnityEngine.UI.FontData', i5697[0], i5696.m_FontData)
  i5696.m_Text = i5697[1]
  request.r(i5697[2], i5697[3], 0, i5696, 'm_Material')
  i5696.m_Maskable = !!i5697[4]
  i5696.m_Color = new pc.Color(i5697[5], i5697[6], i5697[7], i5697[8])
  i5696.m_RaycastTarget = !!i5697[9]
  i5696.m_RaycastPadding = new pc.Vec4( i5697[10], i5697[11], i5697[12], i5697[13] )
  return i5696
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i5698 = root || request.c( 'UnityEngine.UI.FontData' )
  var i5699 = data
  request.r(i5699[0], i5699[1], 0, i5698, 'm_Font')
  i5698.m_FontSize = i5699[2]
  i5698.m_FontStyle = i5699[3]
  i5698.m_BestFit = !!i5699[4]
  i5698.m_MinSize = i5699[5]
  i5698.m_MaxSize = i5699[6]
  i5698.m_Alignment = i5699[7]
  i5698.m_AlignByGeometry = !!i5699[8]
  i5698.m_RichText = !!i5699[9]
  i5698.m_HorizontalOverflow = i5699[10]
  i5698.m_VerticalOverflow = i5699[11]
  i5698.m_LineSpacing = i5699[12]
  return i5698
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i5700 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i5701 = data
  request.r(i5701[0], i5701[1], 0, i5700, 'm_Texture')
  i5700.m_UVRect = UnityEngine.Rect.MinMaxRect(i5701[2], i5701[3], i5701[4], i5701[5])
  request.r(i5701[6], i5701[7], 0, i5700, 'm_Material')
  i5700.m_Maskable = !!i5701[8]
  i5700.m_Color = new pc.Color(i5701[9], i5701[10], i5701[11], i5701[12])
  i5700.m_RaycastTarget = !!i5701[13]
  i5700.m_RaycastPadding = new pc.Vec4( i5701[14], i5701[15], i5701[16], i5701[17] )
  return i5700
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i5702 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i5703 = data
  i5702.targetIsSelf = !!i5703[0]
  request.r(i5703[1], i5703[2], 0, i5702, 'targetGO')
  i5702.tweenTargetIsTargetGO = !!i5703[3]
  i5702.delay = i5703[4]
  i5702.duration = i5703[5]
  i5702.easeType = i5703[6]
  i5702.easeCurve = new pc.AnimationCurve( { keys_flow: i5703[7] } )
  i5702.loopType = i5703[8]
  i5702.loops = i5703[9]
  i5702.id = i5703[10]
  i5702.isRelative = !!i5703[11]
  i5702.isFrom = !!i5703[12]
  i5702.isIndependentUpdate = !!i5703[13]
  i5702.autoKill = !!i5703[14]
  i5702.autoGenerate = !!i5703[15]
  i5702.isActive = !!i5703[16]
  i5702.isValid = !!i5703[17]
  request.r(i5703[18], i5703[19], 0, i5702, 'target')
  i5702.animationType = i5703[20]
  i5702.targetType = i5703[21]
  i5702.forcedTargetType = i5703[22]
  i5702.autoPlay = !!i5703[23]
  i5702.useTargetAsV3 = !!i5703[24]
  i5702.endValueFloat = i5703[25]
  i5702.endValueV3 = new pc.Vec3( i5703[26], i5703[27], i5703[28] )
  i5702.endValueV2 = new pc.Vec2( i5703[29], i5703[30] )
  i5702.endValueColor = new pc.Color(i5703[31], i5703[32], i5703[33], i5703[34])
  i5702.endValueString = i5703[35]
  i5702.endValueRect = UnityEngine.Rect.MinMaxRect(i5703[36], i5703[37], i5703[38], i5703[39])
  request.r(i5703[40], i5703[41], 0, i5702, 'endValueTransform')
  i5702.optionalBool0 = !!i5703[42]
  i5702.optionalBool1 = !!i5703[43]
  i5702.optionalFloat0 = i5703[44]
  i5702.optionalInt0 = i5703[45]
  i5702.optionalRotationMode = i5703[46]
  i5702.optionalScrambleMode = i5703[47]
  i5702.optionalShakeRandomnessMode = i5703[48]
  i5702.optionalString = i5703[49]
  i5702.updateType = i5703[50]
  i5702.isSpeedBased = !!i5703[51]
  i5702.hasOnStart = !!i5703[52]
  i5702.hasOnPlay = !!i5703[53]
  i5702.hasOnUpdate = !!i5703[54]
  i5702.hasOnStepComplete = !!i5703[55]
  i5702.hasOnComplete = !!i5703[56]
  i5702.hasOnTweenCreated = !!i5703[57]
  i5702.hasOnRewind = !!i5703[58]
  i5702.onStart = request.d('UnityEngine.Events.UnityEvent', i5703[59], i5702.onStart)
  i5702.onPlay = request.d('UnityEngine.Events.UnityEvent', i5703[60], i5702.onPlay)
  i5702.onUpdate = request.d('UnityEngine.Events.UnityEvent', i5703[61], i5702.onUpdate)
  i5702.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i5703[62], i5702.onStepComplete)
  i5702.onComplete = request.d('UnityEngine.Events.UnityEvent', i5703[63], i5702.onComplete)
  i5702.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i5703[64], i5702.onTweenCreated)
  i5702.onRewind = request.d('UnityEngine.Events.UnityEvent', i5703[65], i5702.onRewind)
  return i5702
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i5704 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i5705 = data
  i5704.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5705[0], i5704.m_PersistentCalls)
  return i5704
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5706 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5707 = data
  var i5709 = i5707[0]
  var i5708 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5709.length; i += 1) {
    i5708.add(request.d('UnityEngine.Events.PersistentCall', i5709[i + 0]));
  }
  i5706.m_Calls = i5708
  return i5706
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5712 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5713 = data
  request.r(i5713[0], i5713[1], 0, i5712, 'm_Target')
  i5712.m_TargetAssemblyTypeName = i5713[2]
  i5712.m_MethodName = i5713[3]
  i5712.m_Mode = i5713[4]
  i5712.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5713[5], i5712.m_Arguments)
  i5712.m_CallState = i5713[6]
  return i5712
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5714 = root || request.c( 'UnityEngine.UI.Button' )
  var i5715 = data
  i5714.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5715[0], i5714.m_OnClick)
  i5714.m_Navigation = request.d('UnityEngine.UI.Navigation', i5715[1], i5714.m_Navigation)
  i5714.m_Transition = i5715[2]
  i5714.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5715[3], i5714.m_Colors)
  i5714.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5715[4], i5714.m_SpriteState)
  i5714.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5715[5], i5714.m_AnimationTriggers)
  i5714.m_Interactable = !!i5715[6]
  request.r(i5715[7], i5715[8], 0, i5714, 'm_TargetGraphic')
  return i5714
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5716 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5717 = data
  i5716.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5717[0], i5716.m_PersistentCalls)
  return i5716
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5718 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5719 = data
  i5718.m_Mode = i5719[0]
  i5718.m_WrapAround = !!i5719[1]
  request.r(i5719[2], i5719[3], 0, i5718, 'm_SelectOnUp')
  request.r(i5719[4], i5719[5], 0, i5718, 'm_SelectOnDown')
  request.r(i5719[6], i5719[7], 0, i5718, 'm_SelectOnLeft')
  request.r(i5719[8], i5719[9], 0, i5718, 'm_SelectOnRight')
  return i5718
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5720 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5721 = data
  i5720.m_NormalColor = new pc.Color(i5721[0], i5721[1], i5721[2], i5721[3])
  i5720.m_HighlightedColor = new pc.Color(i5721[4], i5721[5], i5721[6], i5721[7])
  i5720.m_PressedColor = new pc.Color(i5721[8], i5721[9], i5721[10], i5721[11])
  i5720.m_SelectedColor = new pc.Color(i5721[12], i5721[13], i5721[14], i5721[15])
  i5720.m_DisabledColor = new pc.Color(i5721[16], i5721[17], i5721[18], i5721[19])
  i5720.m_ColorMultiplier = i5721[20]
  i5720.m_FadeDuration = i5721[21]
  return i5720
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5722 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5723 = data
  request.r(i5723[0], i5723[1], 0, i5722, 'm_HighlightedSprite')
  request.r(i5723[2], i5723[3], 0, i5722, 'm_PressedSprite')
  request.r(i5723[4], i5723[5], 0, i5722, 'm_SelectedSprite')
  request.r(i5723[6], i5723[7], 0, i5722, 'm_DisabledSprite')
  return i5722
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5724 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5725 = data
  i5724.m_NormalTrigger = i5725[0]
  i5724.m_HighlightedTrigger = i5725[1]
  i5724.m_PressedTrigger = i5725[2]
  i5724.m_SelectedTrigger = i5725[3]
  i5724.m_DisabledTrigger = i5725[4]
  return i5724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5727 = data
  request.r(i5727[0], i5727[1], 0, i5726, 'clip')
  request.r(i5727[2], i5727[3], 0, i5726, 'outputAudioMixerGroup')
  i5726.playOnAwake = !!i5727[4]
  i5726.loop = !!i5727[5]
  i5726.time = i5727[6]
  i5726.volume = i5727[7]
  i5726.pitch = i5727[8]
  i5726.enabled = !!i5727[9]
  return i5726
}

Deserializers["LunaController"] = function (request, data, root) {
  var i5728 = root || request.c( 'LunaController' )
  var i5729 = data
  i5728.TimePlay = i5729[0]
  i5728.LimitTimePlay = !!i5729[1]
  request.r(i5729[2], i5729[3], 0, i5728, 'LogoTexture')
  i5728.BG1Color = new pc.Color(i5729[4], i5729[5], i5729[6], i5729[7])
  i5728.BG2Color = new pc.Color(i5729[8], i5729[9], i5729[10], i5729[11])
  request.r(i5729[12], i5729[13], 0, i5728, 'logoImage')
  request.r(i5729[14], i5729[15], 0, i5728, 'BG1')
  request.r(i5729[16], i5729[17], 0, i5728, 'BG2')
  request.r(i5729[18], i5729[19], 0, i5728, 'endCard')
  return i5728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5731 = data
  i5730.ambientIntensity = i5731[0]
  i5730.reflectionIntensity = i5731[1]
  i5730.ambientMode = i5731[2]
  i5730.ambientLight = new pc.Color(i5731[3], i5731[4], i5731[5], i5731[6])
  i5730.ambientSkyColor = new pc.Color(i5731[7], i5731[8], i5731[9], i5731[10])
  i5730.ambientGroundColor = new pc.Color(i5731[11], i5731[12], i5731[13], i5731[14])
  i5730.ambientEquatorColor = new pc.Color(i5731[15], i5731[16], i5731[17], i5731[18])
  i5730.fogColor = new pc.Color(i5731[19], i5731[20], i5731[21], i5731[22])
  i5730.fogEndDistance = i5731[23]
  i5730.fogStartDistance = i5731[24]
  i5730.fogDensity = i5731[25]
  i5730.fog = !!i5731[26]
  request.r(i5731[27], i5731[28], 0, i5730, 'skybox')
  i5730.fogMode = i5731[29]
  var i5733 = i5731[30]
  var i5732 = []
  for(var i = 0; i < i5733.length; i += 1) {
    i5732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5733[i + 0]) );
  }
  i5730.lightmaps = i5732
  i5730.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5731[31], i5730.lightProbes)
  i5730.lightmapsMode = i5731[32]
  i5730.mixedBakeMode = i5731[33]
  i5730.environmentLightingMode = i5731[34]
  i5730.ambientProbe = new pc.SphericalHarmonicsL2(i5731[35])
  request.r(i5731[36], i5731[37], 0, i5730, 'customReflection')
  request.r(i5731[38], i5731[39], 0, i5730, 'defaultReflection')
  i5730.defaultReflectionMode = i5731[40]
  i5730.defaultReflectionResolution = i5731[41]
  i5730.sunLightObjectId = i5731[42]
  i5730.pixelLightCount = i5731[43]
  i5730.defaultReflectionHDR = !!i5731[44]
  i5730.hasLightDataAsset = !!i5731[45]
  i5730.hasManualGenerate = !!i5731[46]
  return i5730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5737 = data
  request.r(i5737[0], i5737[1], 0, i5736, 'lightmapColor')
  request.r(i5737[2], i5737[3], 0, i5736, 'lightmapDirection')
  request.r(i5737[4], i5737[5], 0, i5736, 'shadowMask')
  return i5736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5738 = root || new UnityEngine.LightProbes()
  var i5739 = data
  return i5738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5747 = data
  var i5749 = i5747[0]
  var i5748 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5749.length; i += 1) {
    i5748.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5749[i + 0]));
  }
  i5746.ShaderCompilationErrors = i5748
  i5746.name = i5747[1]
  i5746.guid = i5747[2]
  var i5751 = i5747[3]
  var i5750 = []
  for(var i = 0; i < i5751.length; i += 1) {
    i5750.push( i5751[i + 0] );
  }
  i5746.shaderDefinedKeywords = i5750
  var i5753 = i5747[4]
  var i5752 = []
  for(var i = 0; i < i5753.length; i += 1) {
    i5752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5753[i + 0]) );
  }
  i5746.passes = i5752
  var i5755 = i5747[5]
  var i5754 = []
  for(var i = 0; i < i5755.length; i += 1) {
    i5754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5755[i + 0]) );
  }
  i5746.usePasses = i5754
  var i5757 = i5747[6]
  var i5756 = []
  for(var i = 0; i < i5757.length; i += 1) {
    i5756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5757[i + 0]) );
  }
  i5746.defaultParameterValues = i5756
  request.r(i5747[7], i5747[8], 0, i5746, 'unityFallbackShader')
  i5746.readDepth = !!i5747[9]
  i5746.hasDepthOnlyPass = !!i5747[10]
  i5746.isCreatedByShaderGraph = !!i5747[11]
  i5746.disableBatching = !!i5747[12]
  i5746.compiled = !!i5747[13]
  return i5746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5761 = data
  i5760.shaderName = i5761[0]
  i5760.errorMessage = i5761[1]
  return i5760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5764 = root || new pc.UnityShaderPass()
  var i5765 = data
  i5764.id = i5765[0]
  i5764.subShaderIndex = i5765[1]
  i5764.name = i5765[2]
  i5764.passType = i5765[3]
  i5764.grabPassTextureName = i5765[4]
  i5764.usePass = !!i5765[5]
  i5764.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5765[6], i5764.zTest)
  i5764.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5765[7], i5764.zWrite)
  i5764.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5765[8], i5764.culling)
  i5764.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5765[9], i5764.blending)
  i5764.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5765[10], i5764.alphaBlending)
  i5764.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5765[11], i5764.colorWriteMask)
  i5764.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5765[12], i5764.offsetUnits)
  i5764.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5765[13], i5764.offsetFactor)
  i5764.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5765[14], i5764.stencilRef)
  i5764.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5765[15], i5764.stencilReadMask)
  i5764.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5765[16], i5764.stencilWriteMask)
  i5764.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5765[17], i5764.stencilOp)
  i5764.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5765[18], i5764.stencilOpFront)
  i5764.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5765[19], i5764.stencilOpBack)
  var i5767 = i5765[20]
  var i5766 = []
  for(var i = 0; i < i5767.length; i += 1) {
    i5766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5767[i + 0]) );
  }
  i5764.tags = i5766
  var i5769 = i5765[21]
  var i5768 = []
  for(var i = 0; i < i5769.length; i += 1) {
    i5768.push( i5769[i + 0] );
  }
  i5764.passDefinedKeywords = i5768
  var i5771 = i5765[22]
  var i5770 = []
  for(var i = 0; i < i5771.length; i += 1) {
    i5770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5771[i + 0]) );
  }
  i5764.passDefinedKeywordGroups = i5770
  var i5773 = i5765[23]
  var i5772 = []
  for(var i = 0; i < i5773.length; i += 1) {
    i5772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5773[i + 0]) );
  }
  i5764.variants = i5772
  var i5775 = i5765[24]
  var i5774 = []
  for(var i = 0; i < i5775.length; i += 1) {
    i5774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5775[i + 0]) );
  }
  i5764.excludedVariants = i5774
  i5764.hasDepthReader = !!i5765[25]
  return i5764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5777 = data
  i5776.val = i5777[0]
  i5776.name = i5777[1]
  return i5776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5779 = data
  i5778.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5779[0], i5778.src)
  i5778.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5779[1], i5778.dst)
  i5778.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5779[2], i5778.op)
  return i5778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5781 = data
  i5780.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5781[0], i5780.pass)
  i5780.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5781[1], i5780.fail)
  i5780.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5781[2], i5780.zFail)
  i5780.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5781[3], i5780.comp)
  return i5780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5785 = data
  i5784.name = i5785[0]
  i5784.value = i5785[1]
  return i5784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5789 = data
  var i5791 = i5789[0]
  var i5790 = []
  for(var i = 0; i < i5791.length; i += 1) {
    i5790.push( i5791[i + 0] );
  }
  i5788.keywords = i5790
  i5788.hasDiscard = !!i5789[1]
  return i5788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5795 = data
  i5794.passId = i5795[0]
  i5794.subShaderIndex = i5795[1]
  var i5797 = i5795[2]
  var i5796 = []
  for(var i = 0; i < i5797.length; i += 1) {
    i5796.push( i5797[i + 0] );
  }
  i5794.keywords = i5796
  i5794.vertexProgram = i5795[3]
  i5794.fragmentProgram = i5795[4]
  i5794.exportedForWebGl2 = !!i5795[5]
  i5794.readDepth = !!i5795[6]
  return i5794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5801 = data
  request.r(i5801[0], i5801[1], 0, i5800, 'shader')
  i5800.pass = i5801[2]
  return i5800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5805 = data
  i5804.name = i5805[0]
  i5804.type = i5805[1]
  i5804.value = new pc.Vec4( i5805[2], i5805[3], i5805[4], i5805[5] )
  i5804.textureValue = i5805[6]
  i5804.shaderPropertyFlag = i5805[7]
  return i5804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5807 = data
  i5806.name = i5807[0]
  request.r(i5807[1], i5807[2], 0, i5806, 'texture')
  i5806.aabb = i5807[3]
  i5806.vertices = i5807[4]
  i5806.triangles = i5807[5]
  i5806.textureRect = UnityEngine.Rect.MinMaxRect(i5807[6], i5807[7], i5807[8], i5807[9])
  i5806.packedRect = UnityEngine.Rect.MinMaxRect(i5807[10], i5807[11], i5807[12], i5807[13])
  i5806.border = new pc.Vec4( i5807[14], i5807[15], i5807[16], i5807[17] )
  i5806.transparency = i5807[18]
  i5806.bounds = i5807[19]
  i5806.pixelsPerUnit = i5807[20]
  i5806.textureWidth = i5807[21]
  i5806.textureHeight = i5807[22]
  i5806.nativeSize = new pc.Vec2( i5807[23], i5807[24] )
  i5806.pivot = new pc.Vec2( i5807[25], i5807[26] )
  i5806.textureRectOffset = new pc.Vec2( i5807[27], i5807[28] )
  return i5806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5809 = data
  i5808.name = i5809[0]
  return i5808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5811 = data
  i5810.name = i5811[0]
  i5810.ascent = i5811[1]
  i5810.originalLineHeight = i5811[2]
  i5810.fontSize = i5811[3]
  var i5813 = i5811[4]
  var i5812 = []
  for(var i = 0; i < i5813.length; i += 1) {
    i5812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5813[i + 0]) );
  }
  i5810.characterInfo = i5812
  request.r(i5811[5], i5811[6], 0, i5810, 'texture')
  i5810.originalFontSize = i5811[7]
  return i5810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5817 = data
  i5816.index = i5817[0]
  i5816.advance = i5817[1]
  i5816.bearing = i5817[2]
  i5816.glyphWidth = i5817[3]
  i5816.glyphHeight = i5817[4]
  i5816.minX = i5817[5]
  i5816.maxX = i5817[6]
  i5816.minY = i5817[7]
  i5816.maxY = i5817[8]
  i5816.uvBottomLeftX = i5817[9]
  i5816.uvBottomLeftY = i5817[10]
  i5816.uvBottomRightX = i5817[11]
  i5816.uvBottomRightY = i5817[12]
  i5816.uvTopLeftX = i5817[13]
  i5816.uvTopLeftY = i5817[14]
  i5816.uvTopRightX = i5817[15]
  i5816.uvTopRightY = i5817[16]
  return i5816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5819 = data
  i5818.name = i5819[0]
  i5818.bytes64 = i5819[1]
  i5818.data = i5819[2]
  return i5818
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i5820 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i5821 = data
  var i5823 = i5821[0]
  var i5822 = []
  for(var i = 0; i < i5823.length; i += 2) {
  request.r(i5823[i + 0], i5823[i + 1], 2, i5822, '')
  }
  i5820.atlasAssets = i5822
  i5820.scale = i5821[1]
  request.r(i5821[2], i5821[3], 0, i5820, 'skeletonJSON')
  i5820.isUpgradingBlendModeMaterials = !!i5821[4]
  i5820.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i5821[5], i5820.blendModeMaterials)
  var i5825 = i5821[6]
  var i5824 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i5825.length; i += 2) {
  request.r(i5825[i + 0], i5825[i + 1], 1, i5824, '')
  }
  i5820.skeletonDataModifiers = i5824
  var i5827 = i5821[7]
  var i5826 = []
  for(var i = 0; i < i5827.length; i += 1) {
    i5826.push( i5827[i + 0] );
  }
  i5820.fromAnimation = i5826
  var i5829 = i5821[8]
  var i5828 = []
  for(var i = 0; i < i5829.length; i += 1) {
    i5828.push( i5829[i + 0] );
  }
  i5820.toAnimation = i5828
  i5820.duration = i5821[9]
  i5820.defaultMix = i5821[10]
  request.r(i5821[11], i5821[12], 0, i5820, 'controller')
  return i5820
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i5832 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i5833 = data
  i5832.applyAdditiveMaterial = !!i5833[0]
  var i5835 = i5833[1]
  var i5834 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5835.length; i += 1) {
    i5834.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5835[i + 0]));
  }
  i5832.additiveMaterials = i5834
  var i5837 = i5833[2]
  var i5836 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5837.length; i += 1) {
    i5836.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5837[i + 0]));
  }
  i5832.multiplyMaterials = i5836
  var i5839 = i5833[3]
  var i5838 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5839.length; i += 1) {
    i5838.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5839[i + 0]));
  }
  i5832.screenMaterials = i5838
  i5832.requiresBlendModeMaterials = !!i5833[4]
  return i5832
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i5842 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i5843 = data
  i5842.pageName = i5843[0]
  request.r(i5843[1], i5843[2], 0, i5842, 'material')
  return i5842
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i5846 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i5847 = data
  request.r(i5847[0], i5847[1], 0, i5846, 'atlasFile')
  var i5849 = i5847[2]
  var i5848 = []
  for(var i = 0; i < i5849.length; i += 2) {
  request.r(i5849[i + 0], i5849[i + 1], 2, i5848, '')
  }
  i5846.materials = i5848
  i5846.textureLoadingMode = i5847[3]
  request.r(i5847[4], i5847[5], 0, i5846, 'onDemandTextureLoader')
  return i5846
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5852 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5853 = data
  i5852.useSafeMode = !!i5853[0]
  i5852.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5853[1], i5852.safeModeOptions)
  i5852.timeScale = i5853[2]
  i5852.unscaledTimeScale = i5853[3]
  i5852.useSmoothDeltaTime = !!i5853[4]
  i5852.maxSmoothUnscaledTime = i5853[5]
  i5852.rewindCallbackMode = i5853[6]
  i5852.showUnityEditorReport = !!i5853[7]
  i5852.logBehaviour = i5853[8]
  i5852.drawGizmos = !!i5853[9]
  i5852.defaultRecyclable = !!i5853[10]
  i5852.defaultAutoPlay = i5853[11]
  i5852.defaultUpdateType = i5853[12]
  i5852.defaultTimeScaleIndependent = !!i5853[13]
  i5852.defaultEaseType = i5853[14]
  i5852.defaultEaseOvershootOrAmplitude = i5853[15]
  i5852.defaultEasePeriod = i5853[16]
  i5852.defaultAutoKill = !!i5853[17]
  i5852.defaultLoopType = i5853[18]
  i5852.debugMode = !!i5853[19]
  i5852.debugStoreTargetId = !!i5853[20]
  i5852.showPreviewPanel = !!i5853[21]
  i5852.storeSettingsLocation = i5853[22]
  i5852.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5853[23], i5852.modules)
  i5852.createASMDEF = !!i5853[24]
  i5852.showPlayingTweens = !!i5853[25]
  i5852.showPausedTweens = !!i5853[26]
  return i5852
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5854 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5855 = data
  i5854.logBehaviour = i5855[0]
  i5854.nestedTweenFailureBehaviour = i5855[1]
  return i5854
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5856 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5857 = data
  i5856.showPanel = !!i5857[0]
  i5856.audioEnabled = !!i5857[1]
  i5856.physicsEnabled = !!i5857[2]
  i5856.physics2DEnabled = !!i5857[3]
  i5856.spriteEnabled = !!i5857[4]
  i5856.uiEnabled = !!i5857[5]
  i5856.textMeshProEnabled = !!i5857[6]
  i5856.tk2DEnabled = !!i5857[7]
  i5856.deAudioEnabled = !!i5857[8]
  i5856.deUnityExtendedEnabled = !!i5857[9]
  i5856.epoOutlineEnabled = !!i5857[10]
  return i5856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5859 = data
  var i5861 = i5859[0]
  var i5860 = []
  for(var i = 0; i < i5861.length; i += 1) {
    i5860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5861[i + 0]) );
  }
  i5858.files = i5860
  i5858.componentToPrefabIds = i5859[1]
  return i5858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5865 = data
  i5864.path = i5865[0]
  request.r(i5865[1], i5865[2], 0, i5864, 'unityObject')
  return i5864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5867 = data
  var i5869 = i5867[0]
  var i5868 = []
  for(var i = 0; i < i5869.length; i += 1) {
    i5868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5869[i + 0]) );
  }
  i5866.scriptsExecutionOrder = i5868
  var i5871 = i5867[1]
  var i5870 = []
  for(var i = 0; i < i5871.length; i += 1) {
    i5870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5871[i + 0]) );
  }
  i5866.sortingLayers = i5870
  var i5873 = i5867[2]
  var i5872 = []
  for(var i = 0; i < i5873.length; i += 1) {
    i5872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5873[i + 0]) );
  }
  i5866.cullingLayers = i5872
  i5866.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5867[3], i5866.timeSettings)
  i5866.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5867[4], i5866.physicsSettings)
  i5866.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5867[5], i5866.physics2DSettings)
  i5866.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5867[6], i5866.qualitySettings)
  i5866.enableRealtimeShadows = !!i5867[7]
  i5866.enableAutoInstancing = !!i5867[8]
  i5866.enableStaticBatching = !!i5867[9]
  i5866.enableDynamicBatching = !!i5867[10]
  i5866.usePreservativeDynamicBatching = !!i5867[11]
  i5866.lightmapEncodingQuality = i5867[12]
  i5866.desiredColorSpace = i5867[13]
  var i5875 = i5867[14]
  var i5874 = []
  for(var i = 0; i < i5875.length; i += 1) {
    i5874.push( i5875[i + 0] );
  }
  i5866.allTags = i5874
  return i5866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5879 = data
  i5878.name = i5879[0]
  i5878.value = i5879[1]
  return i5878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5883 = data
  i5882.id = i5883[0]
  i5882.name = i5883[1]
  i5882.value = i5883[2]
  return i5882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5887 = data
  i5886.id = i5887[0]
  i5886.name = i5887[1]
  return i5886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5889 = data
  i5888.fixedDeltaTime = i5889[0]
  i5888.maximumDeltaTime = i5889[1]
  i5888.timeScale = i5889[2]
  i5888.maximumParticleTimestep = i5889[3]
  return i5888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5891 = data
  i5890.gravity = new pc.Vec3( i5891[0], i5891[1], i5891[2] )
  i5890.defaultSolverIterations = i5891[3]
  i5890.bounceThreshold = i5891[4]
  i5890.autoSyncTransforms = !!i5891[5]
  i5890.autoSimulation = !!i5891[6]
  var i5893 = i5891[7]
  var i5892 = []
  for(var i = 0; i < i5893.length; i += 1) {
    i5892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5893[i + 0]) );
  }
  i5890.collisionMatrix = i5892
  return i5890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5897 = data
  i5896.enabled = !!i5897[0]
  i5896.layerId = i5897[1]
  i5896.otherLayerId = i5897[2]
  return i5896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5899 = data
  request.r(i5899[0], i5899[1], 0, i5898, 'material')
  i5898.gravity = new pc.Vec2( i5899[2], i5899[3] )
  i5898.positionIterations = i5899[4]
  i5898.velocityIterations = i5899[5]
  i5898.velocityThreshold = i5899[6]
  i5898.maxLinearCorrection = i5899[7]
  i5898.maxAngularCorrection = i5899[8]
  i5898.maxTranslationSpeed = i5899[9]
  i5898.maxRotationSpeed = i5899[10]
  i5898.baumgarteScale = i5899[11]
  i5898.baumgarteTOIScale = i5899[12]
  i5898.timeToSleep = i5899[13]
  i5898.linearSleepTolerance = i5899[14]
  i5898.angularSleepTolerance = i5899[15]
  i5898.defaultContactOffset = i5899[16]
  i5898.autoSimulation = !!i5899[17]
  i5898.queriesHitTriggers = !!i5899[18]
  i5898.queriesStartInColliders = !!i5899[19]
  i5898.callbacksOnDisable = !!i5899[20]
  i5898.reuseCollisionCallbacks = !!i5899[21]
  i5898.autoSyncTransforms = !!i5899[22]
  var i5901 = i5899[23]
  var i5900 = []
  for(var i = 0; i < i5901.length; i += 1) {
    i5900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5901[i + 0]) );
  }
  i5898.collisionMatrix = i5900
  return i5898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5905 = data
  i5904.enabled = !!i5905[0]
  i5904.layerId = i5905[1]
  i5904.otherLayerId = i5905[2]
  return i5904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5907 = data
  var i5909 = i5907[0]
  var i5908 = []
  for(var i = 0; i < i5909.length; i += 1) {
    i5908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5909[i + 0]) );
  }
  i5906.qualityLevels = i5908
  var i5911 = i5907[1]
  var i5910 = []
  for(var i = 0; i < i5911.length; i += 1) {
    i5910.push( i5911[i + 0] );
  }
  i5906.names = i5910
  i5906.shadows = i5907[2]
  i5906.anisotropicFiltering = i5907[3]
  i5906.antiAliasing = i5907[4]
  i5906.lodBias = i5907[5]
  i5906.shadowCascades = i5907[6]
  i5906.shadowDistance = i5907[7]
  i5906.shadowmaskMode = i5907[8]
  i5906.shadowProjection = i5907[9]
  i5906.shadowResolution = i5907[10]
  i5906.softParticles = !!i5907[11]
  i5906.softVegetation = !!i5907[12]
  i5906.activeColorSpace = i5907[13]
  i5906.desiredColorSpace = i5907[14]
  i5906.masterTextureLimit = i5907[15]
  i5906.maxQueuedFrames = i5907[16]
  i5906.particleRaycastBudget = i5907[17]
  i5906.pixelLightCount = i5907[18]
  i5906.realtimeReflectionProbes = !!i5907[19]
  i5906.shadowCascade2Split = i5907[20]
  i5906.shadowCascade4Split = new pc.Vec3( i5907[21], i5907[22], i5907[23] )
  i5906.streamingMipmapsActive = !!i5907[24]
  i5906.vSyncCount = i5907[25]
  i5906.asyncUploadBufferSize = i5907[26]
  i5906.asyncUploadTimeSlice = i5907[27]
  i5906.billboardsFaceCameraPosition = !!i5907[28]
  i5906.shadowNearPlaneOffset = i5907[29]
  i5906.streamingMipmapsMemoryBudget = i5907[30]
  i5906.maximumLODLevel = i5907[31]
  i5906.streamingMipmapsAddAllCameras = !!i5907[32]
  i5906.streamingMipmapsMaxLevelReduction = i5907[33]
  i5906.streamingMipmapsRenderersPerFrame = i5907[34]
  i5906.resolutionScalingFixedDPIFactor = i5907[35]
  i5906.streamingMipmapsMaxFileIORequests = i5907[36]
  i5906.currentQualityLevel = i5907[37]
  return i5906
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5914 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5915 = data
  request.r(i5915[0], i5915[1], 0, i5914, 'm_ObjectArgument')
  i5914.m_ObjectArgumentAssemblyTypeName = i5915[2]
  i5914.m_IntArgument = i5915[3]
  i5914.m_FloatArgument = i5915[4]
  i5914.m_StringArgument = i5915[5]
  i5914.m_BoolArgument = !!i5915[6]
  return i5914
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[39],"40":[2],"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[49],"57":[49],"58":[49],"59":[49],"60":[49],"61":[49],"62":[2],"63":[64],"65":[66],"67":[66],"8":[7],"68":[69],"70":[7],"71":[11,7],"72":[64],"15":[11,7],"73":[74,64],"75":[64,76],"77":[64],"78":[42],"79":[49],"80":[69],"81":[82],"83":[84],"85":[2],"86":[87],"88":[7],"89":[11,7],"90":[64],"91":[11,7],"92":[7],"93":[7],"94":[64,7],"95":[7,11],"96":[97],"98":[97],"99":[97],"100":[7],"101":[7],"10":[8],"12":[11,7],"102":[7],"9":[8],"103":[7],"104":[7],"105":[7],"106":[7],"107":[7],"108":[7],"109":[7],"13":[7],"110":[7],"22":[11,7],"111":[7],"112":[7],"113":[7],"114":[7],"20":[11,7],"115":[7],"116":[5],"117":[5],"6":[5],"118":[5],"119":[2],"120":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Mask","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","TutController","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.RawImage","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","UnityEngine.AudioSource","UnityEngine.AudioClip","LunaController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BP_V28";

Deserializers.lunaInitializationTime = "07/14/2026 07:31:16";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BP_V28_NgocNDL_TamNTM";

Deserializers.lunaAppID = "31727";

Deserializers.projectId = "60dae4cec6fc7fb41a1125c1e559d6de";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1907";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4221";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BP_V28";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "9f81d8d9-49d8-46a5-a6f7-8388ae675100";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

