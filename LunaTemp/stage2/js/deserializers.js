var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4702 = root || request.c( 'UnityEngine.JointSpring' )
  var i4703 = data
  i4702.spring = i4703[0]
  i4702.damper = i4703[1]
  i4702.targetPosition = i4703[2]
  return i4702
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4704 = root || request.c( 'UnityEngine.JointMotor' )
  var i4705 = data
  i4704.m_TargetVelocity = i4705[0]
  i4704.m_Force = i4705[1]
  i4704.m_FreeSpin = i4705[2]
  return i4704
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4706 = root || request.c( 'UnityEngine.JointLimits' )
  var i4707 = data
  i4706.m_Min = i4707[0]
  i4706.m_Max = i4707[1]
  i4706.m_Bounciness = i4707[2]
  i4706.m_BounceMinVelocity = i4707[3]
  i4706.m_ContactDistance = i4707[4]
  i4706.minBounce = i4707[5]
  i4706.maxBounce = i4707[6]
  return i4706
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4708 = root || request.c( 'UnityEngine.JointDrive' )
  var i4709 = data
  i4708.m_PositionSpring = i4709[0]
  i4708.m_PositionDamper = i4709[1]
  i4708.m_MaximumForce = i4709[2]
  i4708.m_UseAcceleration = i4709[3]
  return i4708
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4710 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4711 = data
  i4710.m_Spring = i4711[0]
  i4710.m_Damper = i4711[1]
  return i4710
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4712 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4713 = data
  i4712.m_Limit = i4713[0]
  i4712.m_Bounciness = i4713[1]
  i4712.m_ContactDistance = i4713[2]
  return i4712
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4714 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4715 = data
  i4714.m_ExtremumSlip = i4715[0]
  i4714.m_ExtremumValue = i4715[1]
  i4714.m_AsymptoteSlip = i4715[2]
  i4714.m_AsymptoteValue = i4715[3]
  i4714.m_Stiffness = i4715[4]
  return i4714
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4716 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4717 = data
  i4716.m_LowerAngle = i4717[0]
  i4716.m_UpperAngle = i4717[1]
  return i4716
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4718 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4719 = data
  i4718.m_MotorSpeed = i4719[0]
  i4718.m_MaximumMotorTorque = i4719[1]
  return i4718
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4720 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4721 = data
  i4720.m_DampingRatio = i4721[0]
  i4720.m_Frequency = i4721[1]
  i4720.m_Angle = i4721[2]
  return i4720
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4722 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4723 = data
  i4722.m_LowerTranslation = i4723[0]
  i4722.m_UpperTranslation = i4723[1]
  return i4722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4725 = data
  i4724.name = i4725[0]
  i4724.width = i4725[1]
  i4724.height = i4725[2]
  i4724.mipmapCount = i4725[3]
  i4724.anisoLevel = i4725[4]
  i4724.filterMode = i4725[5]
  i4724.hdr = !!i4725[6]
  i4724.format = i4725[7]
  i4724.wrapMode = i4725[8]
  i4724.alphaIsTransparency = !!i4725[9]
  i4724.alphaSource = i4725[10]
  i4724.graphicsFormat = i4725[11]
  i4724.sRGBTexture = !!i4725[12]
  i4724.desiredColorSpace = i4725[13]
  i4724.wrapU = i4725[14]
  i4724.wrapV = i4725[15]
  return i4724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4726 = root || new pc.UnityMaterial()
  var i4727 = data
  i4726.name = i4727[0]
  request.r(i4727[1], i4727[2], 0, i4726, 'shader')
  i4726.renderQueue = i4727[3]
  i4726.enableInstancing = !!i4727[4]
  var i4729 = i4727[5]
  var i4728 = []
  for(var i = 0; i < i4729.length; i += 1) {
    i4728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4729[i + 0]) );
  }
  i4726.floatParameters = i4728
  var i4731 = i4727[6]
  var i4730 = []
  for(var i = 0; i < i4731.length; i += 1) {
    i4730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4731[i + 0]) );
  }
  i4726.colorParameters = i4730
  var i4733 = i4727[7]
  var i4732 = []
  for(var i = 0; i < i4733.length; i += 1) {
    i4732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4733[i + 0]) );
  }
  i4726.vectorParameters = i4732
  var i4735 = i4727[8]
  var i4734 = []
  for(var i = 0; i < i4735.length; i += 1) {
    i4734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4735[i + 0]) );
  }
  i4726.textureParameters = i4734
  var i4737 = i4727[9]
  var i4736 = []
  for(var i = 0; i < i4737.length; i += 1) {
    i4736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4737[i + 0]) );
  }
  i4726.materialFlags = i4736
  return i4726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4741 = data
  i4740.name = i4741[0]
  i4740.value = i4741[1]
  return i4740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4745 = data
  i4744.name = i4745[0]
  i4744.value = new pc.Color(i4745[1], i4745[2], i4745[3], i4745[4])
  return i4744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4749 = data
  i4748.name = i4749[0]
  i4748.value = new pc.Vec4( i4749[1], i4749[2], i4749[3], i4749[4] )
  return i4748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4753 = data
  i4752.name = i4753[0]
  request.r(i4753[1], i4753[2], 0, i4752, 'value')
  return i4752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4757 = data
  i4756.name = i4757[0]
  i4756.enabled = !!i4757[1]
  return i4756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4759 = data
  i4758.name = i4759[0]
  i4758.index = i4759[1]
  i4758.startup = !!i4759[2]
  return i4758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4761 = data
  i4760.position = new pc.Vec3( i4761[0], i4761[1], i4761[2] )
  i4760.scale = new pc.Vec3( i4761[3], i4761[4], i4761[5] )
  i4760.rotation = new pc.Quat(i4761[6], i4761[7], i4761[8], i4761[9])
  return i4760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4763 = data
  i4762.aspect = i4763[0]
  i4762.orthographic = !!i4763[1]
  i4762.orthographicSize = i4763[2]
  i4762.backgroundColor = new pc.Color(i4763[3], i4763[4], i4763[5], i4763[6])
  i4762.nearClipPlane = i4763[7]
  i4762.farClipPlane = i4763[8]
  i4762.fieldOfView = i4763[9]
  i4762.depth = i4763[10]
  i4762.clearFlags = i4763[11]
  i4762.cullingMask = i4763[12]
  i4762.rect = i4763[13]
  request.r(i4763[14], i4763[15], 0, i4762, 'targetTexture')
  i4762.usePhysicalProperties = !!i4763[16]
  i4762.focalLength = i4763[17]
  i4762.sensorSize = new pc.Vec2( i4763[18], i4763[19] )
  i4762.lensShift = new pc.Vec2( i4763[20], i4763[21] )
  i4762.gateFit = i4763[22]
  i4762.commandBufferCount = i4763[23]
  i4762.cameraType = i4763[24]
  i4762.enabled = !!i4763[25]
  return i4762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4765 = data
  i4764.name = i4765[0]
  i4764.tagId = i4765[1]
  i4764.enabled = !!i4765[2]
  i4764.isStatic = !!i4765[3]
  i4764.layer = i4765[4]
  return i4764
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4766 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4767 = data
  request.r(i4767[0], i4767[1], 0, i4766, 'm_FirstSelected')
  i4766.m_sendNavigationEvents = !!i4767[2]
  i4766.m_DragThreshold = i4767[3]
  return i4766
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4768 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4769 = data
  i4768.m_HorizontalAxis = i4769[0]
  i4768.m_VerticalAxis = i4769[1]
  i4768.m_SubmitButton = i4769[2]
  i4768.m_CancelButton = i4769[3]
  i4768.m_InputActionsPerSecond = i4769[4]
  i4768.m_RepeatDelay = i4769[5]
  i4768.m_ForceModuleActive = !!i4769[6]
  i4768.m_SendPointerHoverToParent = !!i4769[7]
  return i4768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4771 = data
  i4770.pivot = new pc.Vec2( i4771[0], i4771[1] )
  i4770.anchorMin = new pc.Vec2( i4771[2], i4771[3] )
  i4770.anchorMax = new pc.Vec2( i4771[4], i4771[5] )
  i4770.sizeDelta = new pc.Vec2( i4771[6], i4771[7] )
  i4770.anchoredPosition3D = new pc.Vec3( i4771[8], i4771[9], i4771[10] )
  i4770.rotation = new pc.Quat(i4771[11], i4771[12], i4771[13], i4771[14])
  i4770.scale = new pc.Vec3( i4771[15], i4771[16], i4771[17] )
  return i4770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4773 = data
  i4772.planeDistance = i4773[0]
  i4772.referencePixelsPerUnit = i4773[1]
  i4772.isFallbackOverlay = !!i4773[2]
  i4772.renderMode = i4773[3]
  i4772.renderOrder = i4773[4]
  i4772.sortingLayerName = i4773[5]
  i4772.sortingOrder = i4773[6]
  i4772.scaleFactor = i4773[7]
  request.r(i4773[8], i4773[9], 0, i4772, 'worldCamera')
  i4772.overrideSorting = !!i4773[10]
  i4772.pixelPerfect = !!i4773[11]
  i4772.targetDisplay = i4773[12]
  i4772.overridePixelPerfect = !!i4773[13]
  i4772.enabled = !!i4773[14]
  return i4772
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4774 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4775 = data
  i4774.m_UiScaleMode = i4775[0]
  i4774.m_ReferencePixelsPerUnit = i4775[1]
  i4774.m_ScaleFactor = i4775[2]
  i4774.m_ReferenceResolution = new pc.Vec2( i4775[3], i4775[4] )
  i4774.m_ScreenMatchMode = i4775[5]
  i4774.m_MatchWidthOrHeight = i4775[6]
  i4774.m_PhysicalUnit = i4775[7]
  i4774.m_FallbackScreenDPI = i4775[8]
  i4774.m_DefaultSpriteDPI = i4775[9]
  i4774.m_DynamicPixelsPerUnit = i4775[10]
  i4774.m_PresetInfoIsWorld = !!i4775[11]
  return i4774
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4776 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4777 = data
  i4776.m_IgnoreReversedGraphics = !!i4777[0]
  i4776.m_BlockingObjects = i4777[1]
  i4776.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4777[2] )
  return i4776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4779 = data
  i4778.cullTransparentMesh = !!i4779[0]
  return i4778
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4780 = root || request.c( 'UnityEngine.UI.Image' )
  var i4781 = data
  request.r(i4781[0], i4781[1], 0, i4780, 'm_Sprite')
  i4780.m_Type = i4781[2]
  i4780.m_PreserveAspect = !!i4781[3]
  i4780.m_FillCenter = !!i4781[4]
  i4780.m_FillMethod = i4781[5]
  i4780.m_FillAmount = i4781[6]
  i4780.m_FillClockwise = !!i4781[7]
  i4780.m_FillOrigin = i4781[8]
  i4780.m_UseSpriteMesh = !!i4781[9]
  i4780.m_PixelsPerUnitMultiplier = i4781[10]
  i4780.m_Maskable = !!i4781[11]
  request.r(i4781[12], i4781[13], 0, i4780, 'm_Material')
  i4780.m_Color = new pc.Color(i4781[14], i4781[15], i4781[16], i4781[17])
  i4780.m_RaycastTarget = !!i4781[18]
  i4780.m_RaycastPadding = new pc.Vec4( i4781[19], i4781[20], i4781[21], i4781[22] )
  return i4780
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i4782 = root || request.c( 'UnityEngine.UI.Mask' )
  var i4783 = data
  i4782.m_ShowMaskGraphic = !!i4783[0]
  return i4782
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i4784 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i4785 = data
  request.r(i4785[0], i4785[1], 0, i4784, 'skeletonDataAsset')
  request.r(i4785[2], i4785[3], 0, i4784, 'additiveMaterial')
  request.r(i4785[4], i4785[5], 0, i4784, 'multiplyMaterial')
  request.r(i4785[6], i4785[7], 0, i4784, 'screenMaterial')
  i4784.initialSkinName = i4785[8]
  i4784.initialFlipX = !!i4785[9]
  i4784.initialFlipY = !!i4785[10]
  i4784.startingAnimation = i4785[11]
  i4784.startingLoop = !!i4785[12]
  i4784.timeScale = i4785[13]
  i4784.freeze = !!i4785[14]
  i4784.layoutScaleMode = i4785[15]
  i4784.updateWhenInvisible = i4785[16]
  i4784.allowMultipleCanvasRenderers = !!i4785[17]
  var i4787 = i4785[18]
  var i4786 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i4787.length; i += 2) {
  request.r(i4787[i + 0], i4787[i + 1], 1, i4786, '')
  }
  i4784.canvasRenderers = i4786
  i4784.enableSeparatorSlots = !!i4785[19]
  i4784.updateSeparatorPartLocation = !!i4785[20]
  i4784.updateSeparatorPartScale = !!i4785[21]
  i4784.disableMeshAssignmentOnOverride = !!i4785[22]
  i4784.referenceSize = new pc.Vec2( i4785[23], i4785[24] )
  i4784.referenceScale = i4785[25]
  i4784.rectTransformSize = new pc.Vec2( i4785[26], i4785[27] )
  i4784.editReferenceRect = !!i4785[28]
  var i4789 = i4785[29]
  var i4788 = []
  for(var i = 0; i < i4789.length; i += 1) {
    i4788.push( i4789[i + 0] );
  }
  i4784.separatorSlotNames = i4788
  var i4791 = i4785[30]
  var i4790 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i4791.length; i += 2) {
  request.r(i4791[i + 0], i4791[i + 1], 1, i4790, '')
  }
  i4784.separatorParts = i4790
  i4784.meshGenerator = request.d('Spine.Unity.MeshGenerator', i4785[31], i4784.meshGenerator)
  i4784.updateTiming = i4785[32]
  i4784.unscaledTime = !!i4785[33]
  i4784.m_Maskable = !!i4785[34]
  request.r(i4785[35], i4785[36], 0, i4784, 'm_Material')
  i4784.m_Color = new pc.Color(i4785[37], i4785[38], i4785[39], i4785[40])
  i4784.m_RaycastTarget = !!i4785[41]
  i4784.m_RaycastPadding = new pc.Vec4( i4785[42], i4785[43], i4785[44], i4785[45] )
  return i4784
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i4798 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i4799 = data
  i4798.settings = request.d('Spine.Unity.MeshGenerator+Settings', i4799[0], i4798.settings)
  return i4798
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i4800 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i4801 = data
  i4800.useClipping = !!i4801[0]
  i4800.zSpacing = i4801[1]
  i4800.pmaVertexColors = !!i4801[2]
  i4800.tintBlack = !!i4801[3]
  i4800.canvasGroupTintBlack = !!i4801[4]
  i4800.calculateTangents = !!i4801[5]
  i4800.addNormals = !!i4801[6]
  i4800.immutableTriangles = !!i4801[7]
  return i4800
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i4802 = root || request.c( 'AnimationController' )
  var i4803 = data
  var i4805 = i4803[0]
  var i4804 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i4805.length; i += 1) {
    i4804.add(request.d('Anim', i4805[i + 0]));
  }
  i4802.anims = i4804
  i4802.currentIndex = i4803[1]
  return i4802
}

Deserializers["Anim"] = function (request, data, root) {
  var i4808 = root || request.c( 'Anim' )
  var i4809 = data
  i4808.Key = i4809[0]
  var i4811 = i4809[1]
  var i4810 = new (System.Collections.Generic.List$1(Bridge.ns('Sound')))
  for(var i = 0; i < i4811.length; i += 1) {
    i4810.add(request.d('Sound', i4811[i + 0]));
  }
  i4808.Sounds = i4810
  i4808.Loop = !!i4809[2]
  i4808.Next = !!i4809[3]
  return i4808
}

Deserializers["Sound"] = function (request, data, root) {
  var i4814 = root || request.c( 'Sound' )
  var i4815 = data
  i4814.TimeDelay = i4815[0]
  request.r(i4815[1], i4815[2], 0, i4814, 'Clip')
  return i4814
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i4816 = root || request.c( 'UnityEngine.UI.Text' )
  var i4817 = data
  i4816.m_FontData = request.d('UnityEngine.UI.FontData', i4817[0], i4816.m_FontData)
  i4816.m_Text = i4817[1]
  i4816.m_Maskable = !!i4817[2]
  request.r(i4817[3], i4817[4], 0, i4816, 'm_Material')
  i4816.m_Color = new pc.Color(i4817[5], i4817[6], i4817[7], i4817[8])
  i4816.m_RaycastTarget = !!i4817[9]
  i4816.m_RaycastPadding = new pc.Vec4( i4817[10], i4817[11], i4817[12], i4817[13] )
  return i4816
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i4818 = root || request.c( 'UnityEngine.UI.FontData' )
  var i4819 = data
  request.r(i4819[0], i4819[1], 0, i4818, 'm_Font')
  i4818.m_FontSize = i4819[2]
  i4818.m_FontStyle = i4819[3]
  i4818.m_BestFit = !!i4819[4]
  i4818.m_MinSize = i4819[5]
  i4818.m_MaxSize = i4819[6]
  i4818.m_Alignment = i4819[7]
  i4818.m_AlignByGeometry = !!i4819[8]
  i4818.m_RichText = !!i4819[9]
  i4818.m_HorizontalOverflow = i4819[10]
  i4818.m_VerticalOverflow = i4819[11]
  i4818.m_LineSpacing = i4819[12]
  return i4818
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i4820 = root || request.c( 'UnityEngine.UI.Slider' )
  var i4821 = data
  request.r(i4821[0], i4821[1], 0, i4820, 'm_FillRect')
  request.r(i4821[2], i4821[3], 0, i4820, 'm_HandleRect')
  i4820.m_Direction = i4821[4]
  i4820.m_MinValue = i4821[5]
  i4820.m_MaxValue = i4821[6]
  i4820.m_WholeNumbers = !!i4821[7]
  i4820.m_Value = i4821[8]
  i4820.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i4821[9], i4820.m_OnValueChanged)
  i4820.m_Navigation = request.d('UnityEngine.UI.Navigation', i4821[10], i4820.m_Navigation)
  i4820.m_Transition = i4821[11]
  i4820.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4821[12], i4820.m_Colors)
  i4820.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4821[13], i4820.m_SpriteState)
  i4820.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4821[14], i4820.m_AnimationTriggers)
  i4820.m_Interactable = !!i4821[15]
  request.r(i4821[16], i4821[17], 0, i4820, 'm_TargetGraphic')
  return i4820
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i4822 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i4823 = data
  i4822.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4823[0], i4822.m_PersistentCalls)
  return i4822
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4824 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4825 = data
  var i4827 = i4825[0]
  var i4826 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4827.length; i += 1) {
    i4826.add(request.d('UnityEngine.Events.PersistentCall', i4827[i + 0]));
  }
  i4824.m_Calls = i4826
  return i4824
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4830 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4831 = data
  request.r(i4831[0], i4831[1], 0, i4830, 'm_Target')
  i4830.m_TargetAssemblyTypeName = i4831[2]
  i4830.m_MethodName = i4831[3]
  i4830.m_Mode = i4831[4]
  i4830.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4831[5], i4830.m_Arguments)
  i4830.m_CallState = i4831[6]
  return i4830
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4832 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4833 = data
  i4832.m_Mode = i4833[0]
  i4832.m_WrapAround = !!i4833[1]
  request.r(i4833[2], i4833[3], 0, i4832, 'm_SelectOnUp')
  request.r(i4833[4], i4833[5], 0, i4832, 'm_SelectOnDown')
  request.r(i4833[6], i4833[7], 0, i4832, 'm_SelectOnLeft')
  request.r(i4833[8], i4833[9], 0, i4832, 'm_SelectOnRight')
  return i4832
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4834 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4835 = data
  i4834.m_NormalColor = new pc.Color(i4835[0], i4835[1], i4835[2], i4835[3])
  i4834.m_HighlightedColor = new pc.Color(i4835[4], i4835[5], i4835[6], i4835[7])
  i4834.m_PressedColor = new pc.Color(i4835[8], i4835[9], i4835[10], i4835[11])
  i4834.m_SelectedColor = new pc.Color(i4835[12], i4835[13], i4835[14], i4835[15])
  i4834.m_DisabledColor = new pc.Color(i4835[16], i4835[17], i4835[18], i4835[19])
  i4834.m_ColorMultiplier = i4835[20]
  i4834.m_FadeDuration = i4835[21]
  return i4834
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4836 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4837 = data
  request.r(i4837[0], i4837[1], 0, i4836, 'm_HighlightedSprite')
  request.r(i4837[2], i4837[3], 0, i4836, 'm_PressedSprite')
  request.r(i4837[4], i4837[5], 0, i4836, 'm_SelectedSprite')
  request.r(i4837[6], i4837[7], 0, i4836, 'm_DisabledSprite')
  return i4836
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4838 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4839 = data
  i4838.m_NormalTrigger = i4839[0]
  i4838.m_HighlightedTrigger = i4839[1]
  i4838.m_PressedTrigger = i4839[2]
  i4838.m_SelectedTrigger = i4839[3]
  i4838.m_DisabledTrigger = i4839[4]
  return i4838
}

Deserializers["TutController"] = function (request, data, root) {
  var i4840 = root || request.c( 'TutController' )
  var i4841 = data
  request.r(i4841[0], i4841[1], 0, i4840, 'icon')
  request.r(i4841[2], i4841[3], 0, i4840, 'tutObject')
  i4840.toPos = new pc.Vec3( i4841[4], i4841[5], i4841[6] )
  i4840.timeMove = i4841[7]
  i4840.timeDelay = i4841[8]
  return i4840
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i4842 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i4843 = data
  i4842.targetIsSelf = !!i4843[0]
  request.r(i4843[1], i4843[2], 0, i4842, 'targetGO')
  i4842.tweenTargetIsTargetGO = !!i4843[3]
  i4842.delay = i4843[4]
  i4842.duration = i4843[5]
  i4842.easeType = i4843[6]
  i4842.easeCurve = new pc.AnimationCurve( { keys_flow: i4843[7] } )
  i4842.loopType = i4843[8]
  i4842.loops = i4843[9]
  i4842.id = i4843[10]
  i4842.isRelative = !!i4843[11]
  i4842.isFrom = !!i4843[12]
  i4842.isIndependentUpdate = !!i4843[13]
  i4842.autoKill = !!i4843[14]
  i4842.autoGenerate = !!i4843[15]
  i4842.isActive = !!i4843[16]
  i4842.isValid = !!i4843[17]
  request.r(i4843[18], i4843[19], 0, i4842, 'target')
  i4842.animationType = i4843[20]
  i4842.targetType = i4843[21]
  i4842.forcedTargetType = i4843[22]
  i4842.autoPlay = !!i4843[23]
  i4842.useTargetAsV3 = !!i4843[24]
  i4842.endValueFloat = i4843[25]
  i4842.endValueV3 = new pc.Vec3( i4843[26], i4843[27], i4843[28] )
  i4842.endValueV2 = new pc.Vec2( i4843[29], i4843[30] )
  i4842.endValueColor = new pc.Color(i4843[31], i4843[32], i4843[33], i4843[34])
  i4842.endValueString = i4843[35]
  i4842.endValueRect = UnityEngine.Rect.MinMaxRect(i4843[36], i4843[37], i4843[38], i4843[39])
  request.r(i4843[40], i4843[41], 0, i4842, 'endValueTransform')
  i4842.optionalBool0 = !!i4843[42]
  i4842.optionalBool1 = !!i4843[43]
  i4842.optionalFloat0 = i4843[44]
  i4842.optionalInt0 = i4843[45]
  i4842.optionalRotationMode = i4843[46]
  i4842.optionalScrambleMode = i4843[47]
  i4842.optionalShakeRandomnessMode = i4843[48]
  i4842.optionalString = i4843[49]
  i4842.updateType = i4843[50]
  i4842.isSpeedBased = !!i4843[51]
  i4842.hasOnStart = !!i4843[52]
  i4842.hasOnPlay = !!i4843[53]
  i4842.hasOnUpdate = !!i4843[54]
  i4842.hasOnStepComplete = !!i4843[55]
  i4842.hasOnComplete = !!i4843[56]
  i4842.hasOnTweenCreated = !!i4843[57]
  i4842.hasOnRewind = !!i4843[58]
  i4842.onStart = request.d('UnityEngine.Events.UnityEvent', i4843[59], i4842.onStart)
  i4842.onPlay = request.d('UnityEngine.Events.UnityEvent', i4843[60], i4842.onPlay)
  i4842.onUpdate = request.d('UnityEngine.Events.UnityEvent', i4843[61], i4842.onUpdate)
  i4842.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i4843[62], i4842.onStepComplete)
  i4842.onComplete = request.d('UnityEngine.Events.UnityEvent', i4843[63], i4842.onComplete)
  i4842.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i4843[64], i4842.onTweenCreated)
  i4842.onRewind = request.d('UnityEngine.Events.UnityEvent', i4843[65], i4842.onRewind)
  return i4842
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i4844 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i4845 = data
  i4844.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4845[0], i4844.m_PersistentCalls)
  return i4844
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4846 = root || request.c( 'UnityEngine.UI.Button' )
  var i4847 = data
  i4846.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4847[0], i4846.m_OnClick)
  i4846.m_Navigation = request.d('UnityEngine.UI.Navigation', i4847[1], i4846.m_Navigation)
  i4846.m_Transition = i4847[2]
  i4846.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4847[3], i4846.m_Colors)
  i4846.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4847[4], i4846.m_SpriteState)
  i4846.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4847[5], i4846.m_AnimationTriggers)
  i4846.m_Interactable = !!i4847[6]
  request.r(i4847[7], i4847[8], 0, i4846, 'm_TargetGraphic')
  return i4846
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4848 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4849 = data
  i4848.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4849[0], i4848.m_PersistentCalls)
  return i4848
}

Deserializers["LunaController"] = function (request, data, root) {
  var i4850 = root || request.c( 'LunaController' )
  var i4851 = data
  i4850.TimePlay = i4851[0]
  i4850.CountPlay = i4851[1]
  i4850.BGColor = new pc.Color(i4851[2], i4851[3], i4851[4], i4851[5])
  i4850.GameBGColor = new pc.Color(i4851[6], i4851[7], i4851[8], i4851[9])
  i4850.LevelTextColor = new pc.Color(i4851[10], i4851[11], i4851[12], i4851[13])
  i4850.TitleTextColor = new pc.Color(i4851[14], i4851[15], i4851[16], i4851[17])
  request.r(i4851[18], i4851[19], 0, i4850, 'time')
  request.r(i4851[20], i4851[21], 0, i4850, 'BGImage')
  request.r(i4851[22], i4851[23], 0, i4850, 'GameBGImage')
  request.r(i4851[24], i4851[25], 0, i4850, 'levelText')
  request.r(i4851[26], i4851[27], 0, i4850, 'titleText')
  request.r(i4851[28], i4851[29], 0, i4850, 'endCard')
  var i4853 = i4851[30]
  var i4852 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i4853.length; i += 2) {
  request.r(i4853[i + 0], i4853[i + 1], 1, i4852, '')
  }
  i4850.CTA = i4852
  i4850.count = i4851[31]
  return i4850
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i4856 = root || request.c( 'LayoutController' )
  var i4857 = data
  request.r(i4857[0], i4857[1], 0, i4856, 'CTA')
  i4856.hide = !!i4857[2]
  return i4856
}

Deserializers["AudioController"] = function (request, data, root) {
  var i4858 = root || request.c( 'AudioController' )
  var i4859 = data
  request.r(i4859[0], i4859[1], 0, i4858, 'BGM')
  request.r(i4859[2], i4859[3], 0, i4858, 'musicSource')
  request.r(i4859[4], i4859[5], 0, i4858, 'SFXPool')
  return i4858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4861 = data
  request.r(i4861[0], i4861[1], 0, i4860, 'clip')
  request.r(i4861[2], i4861[3], 0, i4860, 'outputAudioMixerGroup')
  i4860.playOnAwake = !!i4861[4]
  i4860.loop = !!i4861[5]
  i4860.time = i4861[6]
  i4860.volume = i4861[7]
  i4860.pitch = i4861[8]
  i4860.enabled = !!i4861[9]
  return i4860
}

Deserializers["DragController"] = function (request, data, root) {
  var i4862 = root || request.c( 'DragController' )
  var i4863 = data
  request.r(i4863[0], i4863[1], 0, i4862, 'currentTarget')
  request.r(i4863[2], i4863[3], 0, i4862, 'iconMedicine')
  request.r(i4863[4], i4863[5], 0, i4862, 'canvas')
  request.r(i4863[6], i4863[7], 0, i4862, 'door')
  request.r(i4863[8], i4863[9], 0, i4862, 'board1')
  request.r(i4863[10], i4863[11], 0, i4862, 'board2')
  request.r(i4863[12], i4863[13], 0, i4862, 'tut')
  return i4862
}

Deserializers["GameController"] = function (request, data, root) {
  var i4864 = root || request.c( 'GameController' )
  var i4865 = data
  i4864.CompleteStep = request.d('System.Action', i4865[0], i4864.CompleteStep)
  var i4867 = i4865[1]
  var i4866 = new (System.Collections.Generic.List$1(Bridge.ns('Seq')))
  for(var i = 0; i < i4867.length; i += 1) {
    i4866.add(request.d('Seq', i4867[i + 0]));
  }
  i4864.skeletons = i4866
  i4864.end = !!i4865[2]
  i4864.complete = !!i4865[3]
  i4864.currentStep = i4865[4]
  i4864.maxStep = i4865[5]
  request.r(i4865[6], i4865[7], 0, i4864, 'currentStepText')
  request.r(i4865[8], i4865[9], 0, i4864, 'maxStepText')
  request.r(i4865[10], i4865[11], 0, i4864, 'slider')
  return i4864
}

Deserializers["System.Action"] = function (request, data, root) {
  var i4868 = root || request.c( 'System.Action' )
  var i4869 = data
  return i4868
}

Deserializers["Seq"] = function (request, data, root) {
  var i4872 = root || request.c( 'Seq' )
  var i4873 = data
  request.r(i4873[0], i4873[1], 0, i4872, 'Area')
  request.r(i4873[2], i4873[3], 0, i4872, 'Animation')
  return i4872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4875 = data
  i4874.ambientIntensity = i4875[0]
  i4874.reflectionIntensity = i4875[1]
  i4874.ambientMode = i4875[2]
  i4874.ambientLight = new pc.Color(i4875[3], i4875[4], i4875[5], i4875[6])
  i4874.ambientSkyColor = new pc.Color(i4875[7], i4875[8], i4875[9], i4875[10])
  i4874.ambientGroundColor = new pc.Color(i4875[11], i4875[12], i4875[13], i4875[14])
  i4874.ambientEquatorColor = new pc.Color(i4875[15], i4875[16], i4875[17], i4875[18])
  i4874.fogColor = new pc.Color(i4875[19], i4875[20], i4875[21], i4875[22])
  i4874.fogEndDistance = i4875[23]
  i4874.fogStartDistance = i4875[24]
  i4874.fogDensity = i4875[25]
  i4874.fog = !!i4875[26]
  request.r(i4875[27], i4875[28], 0, i4874, 'skybox')
  i4874.fogMode = i4875[29]
  var i4877 = i4875[30]
  var i4876 = []
  for(var i = 0; i < i4877.length; i += 1) {
    i4876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4877[i + 0]) );
  }
  i4874.lightmaps = i4876
  i4874.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4875[31], i4874.lightProbes)
  i4874.lightmapsMode = i4875[32]
  i4874.mixedBakeMode = i4875[33]
  i4874.environmentLightingMode = i4875[34]
  i4874.ambientProbe = new pc.SphericalHarmonicsL2(i4875[35])
  i4874.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4875[36])
  i4874.useReferenceAmbientProbe = !!i4875[37]
  request.r(i4875[38], i4875[39], 0, i4874, 'customReflection')
  request.r(i4875[40], i4875[41], 0, i4874, 'defaultReflection')
  i4874.defaultReflectionMode = i4875[42]
  i4874.defaultReflectionResolution = i4875[43]
  i4874.sunLightObjectId = i4875[44]
  i4874.pixelLightCount = i4875[45]
  i4874.defaultReflectionHDR = !!i4875[46]
  i4874.hasLightDataAsset = !!i4875[47]
  i4874.hasManualGenerate = !!i4875[48]
  return i4874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4881 = data
  request.r(i4881[0], i4881[1], 0, i4880, 'lightmapColor')
  request.r(i4881[2], i4881[3], 0, i4880, 'lightmapDirection')
  return i4880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4882 = root || new UnityEngine.LightProbes()
  var i4883 = data
  return i4882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4891 = data
  var i4893 = i4891[0]
  var i4892 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4893.length; i += 1) {
    i4892.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4893[i + 0]));
  }
  i4890.ShaderCompilationErrors = i4892
  i4890.name = i4891[1]
  i4890.guid = i4891[2]
  var i4895 = i4891[3]
  var i4894 = []
  for(var i = 0; i < i4895.length; i += 1) {
    i4894.push( i4895[i + 0] );
  }
  i4890.shaderDefinedKeywords = i4894
  var i4897 = i4891[4]
  var i4896 = []
  for(var i = 0; i < i4897.length; i += 1) {
    i4896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4897[i + 0]) );
  }
  i4890.passes = i4896
  var i4899 = i4891[5]
  var i4898 = []
  for(var i = 0; i < i4899.length; i += 1) {
    i4898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4899[i + 0]) );
  }
  i4890.usePasses = i4898
  var i4901 = i4891[6]
  var i4900 = []
  for(var i = 0; i < i4901.length; i += 1) {
    i4900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4901[i + 0]) );
  }
  i4890.defaultParameterValues = i4900
  request.r(i4891[7], i4891[8], 0, i4890, 'unityFallbackShader')
  i4890.readDepth = !!i4891[9]
  i4890.isCreatedByShaderGraph = !!i4891[10]
  i4890.disableBatching = !!i4891[11]
  i4890.compiled = !!i4891[12]
  return i4890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4905 = data
  i4904.shaderName = i4905[0]
  i4904.errorMessage = i4905[1]
  return i4904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4908 = root || new pc.UnityShaderPass()
  var i4909 = data
  i4908.id = i4909[0]
  i4908.subShaderIndex = i4909[1]
  i4908.name = i4909[2]
  i4908.passType = i4909[3]
  i4908.grabPassTextureName = i4909[4]
  i4908.usePass = !!i4909[5]
  i4908.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4909[6], i4908.zTest)
  i4908.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4909[7], i4908.zWrite)
  i4908.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4909[8], i4908.culling)
  i4908.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4909[9], i4908.blending)
  i4908.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4909[10], i4908.alphaBlending)
  i4908.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4909[11], i4908.colorWriteMask)
  i4908.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4909[12], i4908.offsetUnits)
  i4908.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4909[13], i4908.offsetFactor)
  i4908.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4909[14], i4908.stencilRef)
  i4908.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4909[15], i4908.stencilReadMask)
  i4908.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4909[16], i4908.stencilWriteMask)
  i4908.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4909[17], i4908.stencilOp)
  i4908.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4909[18], i4908.stencilOpFront)
  i4908.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4909[19], i4908.stencilOpBack)
  var i4911 = i4909[20]
  var i4910 = []
  for(var i = 0; i < i4911.length; i += 1) {
    i4910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4911[i + 0]) );
  }
  i4908.tags = i4910
  var i4913 = i4909[21]
  var i4912 = []
  for(var i = 0; i < i4913.length; i += 1) {
    i4912.push( i4913[i + 0] );
  }
  i4908.passDefinedKeywords = i4912
  var i4915 = i4909[22]
  var i4914 = []
  for(var i = 0; i < i4915.length; i += 1) {
    i4914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4915[i + 0]) );
  }
  i4908.passDefinedKeywordGroups = i4914
  var i4917 = i4909[23]
  var i4916 = []
  for(var i = 0; i < i4917.length; i += 1) {
    i4916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4917[i + 0]) );
  }
  i4908.variants = i4916
  var i4919 = i4909[24]
  var i4918 = []
  for(var i = 0; i < i4919.length; i += 1) {
    i4918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4919[i + 0]) );
  }
  i4908.excludedVariants = i4918
  i4908.hasDepthReader = !!i4909[25]
  return i4908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4921 = data
  i4920.val = i4921[0]
  i4920.name = i4921[1]
  return i4920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4923 = data
  i4922.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4923[0], i4922.src)
  i4922.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4923[1], i4922.dst)
  i4922.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4923[2], i4922.op)
  return i4922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4925 = data
  i4924.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4925[0], i4924.pass)
  i4924.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4925[1], i4924.fail)
  i4924.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4925[2], i4924.zFail)
  i4924.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4925[3], i4924.comp)
  return i4924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4929 = data
  i4928.name = i4929[0]
  i4928.value = i4929[1]
  return i4928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4933 = data
  var i4935 = i4933[0]
  var i4934 = []
  for(var i = 0; i < i4935.length; i += 1) {
    i4934.push( i4935[i + 0] );
  }
  i4932.keywords = i4934
  i4932.hasDiscard = !!i4933[1]
  return i4932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4939 = data
  i4938.passId = i4939[0]
  i4938.subShaderIndex = i4939[1]
  var i4941 = i4939[2]
  var i4940 = []
  for(var i = 0; i < i4941.length; i += 1) {
    i4940.push( i4941[i + 0] );
  }
  i4938.keywords = i4940
  i4938.vertexProgram = i4939[3]
  i4938.fragmentProgram = i4939[4]
  i4938.exportedForWebGl2 = !!i4939[5]
  i4938.readDepth = !!i4939[6]
  return i4938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4945 = data
  request.r(i4945[0], i4945[1], 0, i4944, 'shader')
  i4944.pass = i4945[2]
  return i4944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4949 = data
  i4948.name = i4949[0]
  i4948.type = i4949[1]
  i4948.value = new pc.Vec4( i4949[2], i4949[3], i4949[4], i4949[5] )
  i4948.textureValue = i4949[6]
  i4948.shaderPropertyFlag = i4949[7]
  return i4948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4951 = data
  i4950.name = i4951[0]
  request.r(i4951[1], i4951[2], 0, i4950, 'texture')
  i4950.aabb = i4951[3]
  i4950.vertices = i4951[4]
  i4950.triangles = i4951[5]
  i4950.textureRect = UnityEngine.Rect.MinMaxRect(i4951[6], i4951[7], i4951[8], i4951[9])
  i4950.packedRect = UnityEngine.Rect.MinMaxRect(i4951[10], i4951[11], i4951[12], i4951[13])
  i4950.border = new pc.Vec4( i4951[14], i4951[15], i4951[16], i4951[17] )
  i4950.transparency = i4951[18]
  i4950.bounds = i4951[19]
  i4950.pixelsPerUnit = i4951[20]
  i4950.textureWidth = i4951[21]
  i4950.textureHeight = i4951[22]
  i4950.nativeSize = new pc.Vec2( i4951[23], i4951[24] )
  i4950.pivot = new pc.Vec2( i4951[25], i4951[26] )
  i4950.textureRectOffset = new pc.Vec2( i4951[27], i4951[28] )
  return i4950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4953 = data
  i4952.name = i4953[0]
  return i4952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4955 = data
  i4954.name = i4955[0]
  i4954.ascent = i4955[1]
  i4954.originalLineHeight = i4955[2]
  i4954.fontSize = i4955[3]
  var i4957 = i4955[4]
  var i4956 = []
  for(var i = 0; i < i4957.length; i += 1) {
    i4956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4957[i + 0]) );
  }
  i4954.characterInfo = i4956
  request.r(i4955[5], i4955[6], 0, i4954, 'texture')
  i4954.originalFontSize = i4955[7]
  return i4954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4961 = data
  i4960.index = i4961[0]
  i4960.advance = i4961[1]
  i4960.bearing = i4961[2]
  i4960.glyphWidth = i4961[3]
  i4960.glyphHeight = i4961[4]
  i4960.minX = i4961[5]
  i4960.maxX = i4961[6]
  i4960.minY = i4961[7]
  i4960.maxY = i4961[8]
  i4960.uvBottomLeftX = i4961[9]
  i4960.uvBottomLeftY = i4961[10]
  i4960.uvBottomRightX = i4961[11]
  i4960.uvBottomRightY = i4961[12]
  i4960.uvTopLeftX = i4961[13]
  i4960.uvTopLeftY = i4961[14]
  i4960.uvTopRightX = i4961[15]
  i4960.uvTopRightY = i4961[16]
  return i4960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4963 = data
  i4962.name = i4963[0]
  i4962.bytes64 = i4963[1]
  i4962.data = i4963[2]
  return i4962
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i4964 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i4965 = data
  var i4967 = i4965[0]
  var i4966 = []
  for(var i = 0; i < i4967.length; i += 2) {
  request.r(i4967[i + 0], i4967[i + 1], 2, i4966, '')
  }
  i4964.atlasAssets = i4966
  i4964.scale = i4965[1]
  request.r(i4965[2], i4965[3], 0, i4964, 'skeletonJSON')
  i4964.isUpgradingBlendModeMaterials = !!i4965[4]
  i4964.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i4965[5], i4964.blendModeMaterials)
  var i4969 = i4965[6]
  var i4968 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i4969.length; i += 2) {
  request.r(i4969[i + 0], i4969[i + 1], 1, i4968, '')
  }
  i4964.skeletonDataModifiers = i4968
  var i4971 = i4965[7]
  var i4970 = []
  for(var i = 0; i < i4971.length; i += 1) {
    i4970.push( i4971[i + 0] );
  }
  i4964.fromAnimation = i4970
  var i4973 = i4965[8]
  var i4972 = []
  for(var i = 0; i < i4973.length; i += 1) {
    i4972.push( i4973[i + 0] );
  }
  i4964.toAnimation = i4972
  i4964.duration = i4965[9]
  i4964.defaultMix = i4965[10]
  request.r(i4965[11], i4965[12], 0, i4964, 'controller')
  return i4964
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i4976 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i4977 = data
  i4976.applyAdditiveMaterial = !!i4977[0]
  var i4979 = i4977[1]
  var i4978 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4979.length; i += 1) {
    i4978.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4979[i + 0]));
  }
  i4976.additiveMaterials = i4978
  var i4981 = i4977[2]
  var i4980 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4981.length; i += 1) {
    i4980.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4981[i + 0]));
  }
  i4976.multiplyMaterials = i4980
  var i4983 = i4977[3]
  var i4982 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4983.length; i += 1) {
    i4982.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4983[i + 0]));
  }
  i4976.screenMaterials = i4982
  i4976.requiresBlendModeMaterials = !!i4977[4]
  return i4976
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i4986 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i4987 = data
  i4986.pageName = i4987[0]
  request.r(i4987[1], i4987[2], 0, i4986, 'material')
  return i4986
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i4990 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i4991 = data
  request.r(i4991[0], i4991[1], 0, i4990, 'atlasFile')
  var i4993 = i4991[2]
  var i4992 = []
  for(var i = 0; i < i4993.length; i += 2) {
  request.r(i4993[i + 0], i4993[i + 1], 2, i4992, '')
  }
  i4990.materials = i4992
  i4990.textureLoadingMode = i4991[3]
  request.r(i4991[4], i4991[5], 0, i4990, 'onDemandTextureLoader')
  return i4990
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4996 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4997 = data
  i4996.useSafeMode = !!i4997[0]
  i4996.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4997[1], i4996.safeModeOptions)
  i4996.timeScale = i4997[2]
  i4996.unscaledTimeScale = i4997[3]
  i4996.useSmoothDeltaTime = !!i4997[4]
  i4996.maxSmoothUnscaledTime = i4997[5]
  i4996.rewindCallbackMode = i4997[6]
  i4996.showUnityEditorReport = !!i4997[7]
  i4996.logBehaviour = i4997[8]
  i4996.drawGizmos = !!i4997[9]
  i4996.defaultRecyclable = !!i4997[10]
  i4996.defaultAutoPlay = i4997[11]
  i4996.defaultUpdateType = i4997[12]
  i4996.defaultTimeScaleIndependent = !!i4997[13]
  i4996.defaultEaseType = i4997[14]
  i4996.defaultEaseOvershootOrAmplitude = i4997[15]
  i4996.defaultEasePeriod = i4997[16]
  i4996.defaultAutoKill = !!i4997[17]
  i4996.defaultLoopType = i4997[18]
  i4996.debugMode = !!i4997[19]
  i4996.debugStoreTargetId = !!i4997[20]
  i4996.showPreviewPanel = !!i4997[21]
  i4996.storeSettingsLocation = i4997[22]
  i4996.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4997[23], i4996.modules)
  i4996.createASMDEF = !!i4997[24]
  i4996.showPlayingTweens = !!i4997[25]
  i4996.showPausedTweens = !!i4997[26]
  return i4996
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4998 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4999 = data
  i4998.logBehaviour = i4999[0]
  i4998.nestedTweenFailureBehaviour = i4999[1]
  return i4998
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5000 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5001 = data
  i5000.showPanel = !!i5001[0]
  i5000.audioEnabled = !!i5001[1]
  i5000.physicsEnabled = !!i5001[2]
  i5000.physics2DEnabled = !!i5001[3]
  i5000.spriteEnabled = !!i5001[4]
  i5000.uiEnabled = !!i5001[5]
  i5000.textMeshProEnabled = !!i5001[6]
  i5000.tk2DEnabled = !!i5001[7]
  i5000.deAudioEnabled = !!i5001[8]
  i5000.deUnityExtendedEnabled = !!i5001[9]
  i5000.epoOutlineEnabled = !!i5001[10]
  return i5000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5003 = data
  var i5005 = i5003[0]
  var i5004 = []
  for(var i = 0; i < i5005.length; i += 1) {
    i5004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5005[i + 0]) );
  }
  i5002.files = i5004
  i5002.componentToPrefabIds = i5003[1]
  return i5002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5009 = data
  i5008.path = i5009[0]
  request.r(i5009[1], i5009[2], 0, i5008, 'unityObject')
  return i5008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5011 = data
  var i5013 = i5011[0]
  var i5012 = []
  for(var i = 0; i < i5013.length; i += 1) {
    i5012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5013[i + 0]) );
  }
  i5010.scriptsExecutionOrder = i5012
  var i5015 = i5011[1]
  var i5014 = []
  for(var i = 0; i < i5015.length; i += 1) {
    i5014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5015[i + 0]) );
  }
  i5010.sortingLayers = i5014
  var i5017 = i5011[2]
  var i5016 = []
  for(var i = 0; i < i5017.length; i += 1) {
    i5016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5017[i + 0]) );
  }
  i5010.cullingLayers = i5016
  i5010.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5011[3], i5010.timeSettings)
  i5010.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5011[4], i5010.physicsSettings)
  i5010.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5011[5], i5010.physics2DSettings)
  i5010.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5011[6], i5010.qualitySettings)
  i5010.enableRealtimeShadows = !!i5011[7]
  i5010.enableAutoInstancing = !!i5011[8]
  i5010.enableStaticBatching = !!i5011[9]
  i5010.enableDynamicBatching = !!i5011[10]
  i5010.lightmapEncodingQuality = i5011[11]
  i5010.desiredColorSpace = i5011[12]
  var i5019 = i5011[13]
  var i5018 = []
  for(var i = 0; i < i5019.length; i += 1) {
    i5018.push( i5019[i + 0] );
  }
  i5010.allTags = i5018
  return i5010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5023 = data
  i5022.name = i5023[0]
  i5022.value = i5023[1]
  return i5022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5027 = data
  i5026.id = i5027[0]
  i5026.name = i5027[1]
  i5026.value = i5027[2]
  return i5026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5031 = data
  i5030.id = i5031[0]
  i5030.name = i5031[1]
  return i5030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5033 = data
  i5032.fixedDeltaTime = i5033[0]
  i5032.maximumDeltaTime = i5033[1]
  i5032.timeScale = i5033[2]
  i5032.maximumParticleTimestep = i5033[3]
  return i5032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5035 = data
  i5034.gravity = new pc.Vec3( i5035[0], i5035[1], i5035[2] )
  i5034.defaultSolverIterations = i5035[3]
  i5034.bounceThreshold = i5035[4]
  i5034.autoSyncTransforms = !!i5035[5]
  i5034.autoSimulation = !!i5035[6]
  var i5037 = i5035[7]
  var i5036 = []
  for(var i = 0; i < i5037.length; i += 1) {
    i5036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5037[i + 0]) );
  }
  i5034.collisionMatrix = i5036
  return i5034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5041 = data
  i5040.enabled = !!i5041[0]
  i5040.layerId = i5041[1]
  i5040.otherLayerId = i5041[2]
  return i5040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5043 = data
  request.r(i5043[0], i5043[1], 0, i5042, 'material')
  i5042.gravity = new pc.Vec2( i5043[2], i5043[3] )
  i5042.positionIterations = i5043[4]
  i5042.velocityIterations = i5043[5]
  i5042.velocityThreshold = i5043[6]
  i5042.maxLinearCorrection = i5043[7]
  i5042.maxAngularCorrection = i5043[8]
  i5042.maxTranslationSpeed = i5043[9]
  i5042.maxRotationSpeed = i5043[10]
  i5042.baumgarteScale = i5043[11]
  i5042.baumgarteTOIScale = i5043[12]
  i5042.timeToSleep = i5043[13]
  i5042.linearSleepTolerance = i5043[14]
  i5042.angularSleepTolerance = i5043[15]
  i5042.defaultContactOffset = i5043[16]
  i5042.autoSimulation = !!i5043[17]
  i5042.queriesHitTriggers = !!i5043[18]
  i5042.queriesStartInColliders = !!i5043[19]
  i5042.callbacksOnDisable = !!i5043[20]
  i5042.reuseCollisionCallbacks = !!i5043[21]
  i5042.autoSyncTransforms = !!i5043[22]
  var i5045 = i5043[23]
  var i5044 = []
  for(var i = 0; i < i5045.length; i += 1) {
    i5044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5045[i + 0]) );
  }
  i5042.collisionMatrix = i5044
  return i5042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5049 = data
  i5048.enabled = !!i5049[0]
  i5048.layerId = i5049[1]
  i5048.otherLayerId = i5049[2]
  return i5048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5051 = data
  var i5053 = i5051[0]
  var i5052 = []
  for(var i = 0; i < i5053.length; i += 1) {
    i5052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5053[i + 0]) );
  }
  i5050.qualityLevels = i5052
  var i5055 = i5051[1]
  var i5054 = []
  for(var i = 0; i < i5055.length; i += 1) {
    i5054.push( i5055[i + 0] );
  }
  i5050.names = i5054
  i5050.shadows = i5051[2]
  i5050.anisotropicFiltering = i5051[3]
  i5050.antiAliasing = i5051[4]
  i5050.lodBias = i5051[5]
  i5050.shadowCascades = i5051[6]
  i5050.shadowDistance = i5051[7]
  i5050.shadowmaskMode = i5051[8]
  i5050.shadowProjection = i5051[9]
  i5050.shadowResolution = i5051[10]
  i5050.softParticles = !!i5051[11]
  i5050.softVegetation = !!i5051[12]
  i5050.activeColorSpace = i5051[13]
  i5050.desiredColorSpace = i5051[14]
  i5050.masterTextureLimit = i5051[15]
  i5050.maxQueuedFrames = i5051[16]
  i5050.particleRaycastBudget = i5051[17]
  i5050.pixelLightCount = i5051[18]
  i5050.realtimeReflectionProbes = !!i5051[19]
  i5050.shadowCascade2Split = i5051[20]
  i5050.shadowCascade4Split = new pc.Vec3( i5051[21], i5051[22], i5051[23] )
  i5050.streamingMipmapsActive = !!i5051[24]
  i5050.vSyncCount = i5051[25]
  i5050.asyncUploadBufferSize = i5051[26]
  i5050.asyncUploadTimeSlice = i5051[27]
  i5050.billboardsFaceCameraPosition = !!i5051[28]
  i5050.shadowNearPlaneOffset = i5051[29]
  i5050.streamingMipmapsMemoryBudget = i5051[30]
  i5050.maximumLODLevel = i5051[31]
  i5050.streamingMipmapsAddAllCameras = !!i5051[32]
  i5050.streamingMipmapsMaxLevelReduction = i5051[33]
  i5050.streamingMipmapsRenderersPerFrame = i5051[34]
  i5050.resolutionScalingFixedDPIFactor = i5051[35]
  i5050.streamingMipmapsMaxFileIORequests = i5051[36]
  i5050.currentQualityLevel = i5051[37]
  return i5050
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5058 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5059 = data
  request.r(i5059[0], i5059[1], 0, i5058, 'm_ObjectArgument')
  i5058.m_ObjectArgumentAssemblyTypeName = i5059[2]
  i5058.m_IntArgument = i5059[3]
  i5058.m_FloatArgument = i5059[4]
  i5058.m_StringArgument = i5059[5]
  i5058.m_BoolArgument = !!i5059[6]
  return i5058
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

Deserializers.lunaAppID = "29138";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "3772";

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

Deserializers.buildID = "25564461-1273-414d-9797-5a38a3f5a1c9";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

