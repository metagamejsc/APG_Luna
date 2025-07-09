var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4638 = root || request.c( 'UnityEngine.JointSpring' )
  var i4639 = data
  i4638.spring = i4639[0]
  i4638.damper = i4639[1]
  i4638.targetPosition = i4639[2]
  return i4638
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4640 = root || request.c( 'UnityEngine.JointMotor' )
  var i4641 = data
  i4640.m_TargetVelocity = i4641[0]
  i4640.m_Force = i4641[1]
  i4640.m_FreeSpin = i4641[2]
  return i4640
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4642 = root || request.c( 'UnityEngine.JointLimits' )
  var i4643 = data
  i4642.m_Min = i4643[0]
  i4642.m_Max = i4643[1]
  i4642.m_Bounciness = i4643[2]
  i4642.m_BounceMinVelocity = i4643[3]
  i4642.m_ContactDistance = i4643[4]
  i4642.minBounce = i4643[5]
  i4642.maxBounce = i4643[6]
  return i4642
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4644 = root || request.c( 'UnityEngine.JointDrive' )
  var i4645 = data
  i4644.m_PositionSpring = i4645[0]
  i4644.m_PositionDamper = i4645[1]
  i4644.m_MaximumForce = i4645[2]
  i4644.m_UseAcceleration = i4645[3]
  return i4644
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4646 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4647 = data
  i4646.m_Spring = i4647[0]
  i4646.m_Damper = i4647[1]
  return i4646
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4648 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4649 = data
  i4648.m_Limit = i4649[0]
  i4648.m_Bounciness = i4649[1]
  i4648.m_ContactDistance = i4649[2]
  return i4648
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4650 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4651 = data
  i4650.m_ExtremumSlip = i4651[0]
  i4650.m_ExtremumValue = i4651[1]
  i4650.m_AsymptoteSlip = i4651[2]
  i4650.m_AsymptoteValue = i4651[3]
  i4650.m_Stiffness = i4651[4]
  return i4650
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4652 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4653 = data
  i4652.m_LowerAngle = i4653[0]
  i4652.m_UpperAngle = i4653[1]
  return i4652
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4654 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4655 = data
  i4654.m_MotorSpeed = i4655[0]
  i4654.m_MaximumMotorTorque = i4655[1]
  return i4654
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4656 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4657 = data
  i4656.m_DampingRatio = i4657[0]
  i4656.m_Frequency = i4657[1]
  i4656.m_Angle = i4657[2]
  return i4656
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4658 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4659 = data
  i4658.m_LowerTranslation = i4659[0]
  i4658.m_UpperTranslation = i4659[1]
  return i4658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4661 = data
  i4660.name = i4661[0]
  i4660.width = i4661[1]
  i4660.height = i4661[2]
  i4660.mipmapCount = i4661[3]
  i4660.anisoLevel = i4661[4]
  i4660.filterMode = i4661[5]
  i4660.hdr = !!i4661[6]
  i4660.format = i4661[7]
  i4660.wrapMode = i4661[8]
  i4660.alphaIsTransparency = !!i4661[9]
  i4660.alphaSource = i4661[10]
  i4660.graphicsFormat = i4661[11]
  i4660.sRGBTexture = !!i4661[12]
  i4660.desiredColorSpace = i4661[13]
  return i4660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4662 = root || new pc.UnityMaterial()
  var i4663 = data
  i4662.name = i4663[0]
  request.r(i4663[1], i4663[2], 0, i4662, 'shader')
  i4662.renderQueue = i4663[3]
  i4662.enableInstancing = !!i4663[4]
  var i4665 = i4663[5]
  var i4664 = []
  for(var i = 0; i < i4665.length; i += 1) {
    i4664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4665[i + 0]) );
  }
  i4662.floatParameters = i4664
  var i4667 = i4663[6]
  var i4666 = []
  for(var i = 0; i < i4667.length; i += 1) {
    i4666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4667[i + 0]) );
  }
  i4662.colorParameters = i4666
  var i4669 = i4663[7]
  var i4668 = []
  for(var i = 0; i < i4669.length; i += 1) {
    i4668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4669[i + 0]) );
  }
  i4662.vectorParameters = i4668
  var i4671 = i4663[8]
  var i4670 = []
  for(var i = 0; i < i4671.length; i += 1) {
    i4670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4671[i + 0]) );
  }
  i4662.textureParameters = i4670
  var i4673 = i4663[9]
  var i4672 = []
  for(var i = 0; i < i4673.length; i += 1) {
    i4672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4673[i + 0]) );
  }
  i4662.materialFlags = i4672
  return i4662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4677 = data
  i4676.name = i4677[0]
  i4676.value = i4677[1]
  return i4676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4681 = data
  i4680.name = i4681[0]
  i4680.value = new pc.Color(i4681[1], i4681[2], i4681[3], i4681[4])
  return i4680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4685 = data
  i4684.name = i4685[0]
  i4684.value = new pc.Vec4( i4685[1], i4685[2], i4685[3], i4685[4] )
  return i4684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4689 = data
  i4688.name = i4689[0]
  request.r(i4689[1], i4689[2], 0, i4688, 'value')
  return i4688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4693 = data
  i4692.name = i4693[0]
  i4692.enabled = !!i4693[1]
  return i4692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4695 = data
  i4694.name = i4695[0]
  i4694.halfPrecision = !!i4695[1]
  i4694.vertexCount = i4695[2]
  i4694.aabb = i4695[3]
  var i4697 = i4695[4]
  var i4696 = []
  for(var i = 0; i < i4697.length; i += 1) {
    i4696.push( !!i4697[i + 0] );
  }
  i4694.streams = i4696
  i4694.vertices = i4695[5]
  var i4699 = i4695[6]
  var i4698 = []
  for(var i = 0; i < i4699.length; i += 1) {
    i4698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4699[i + 0]) );
  }
  i4694.subMeshes = i4698
  var i4701 = i4695[7]
  var i4700 = []
  for(var i = 0; i < i4701.length; i += 16) {
    i4700.push( new pc.Mat4().setData(i4701[i + 0], i4701[i + 1], i4701[i + 2], i4701[i + 3],  i4701[i + 4], i4701[i + 5], i4701[i + 6], i4701[i + 7],  i4701[i + 8], i4701[i + 9], i4701[i + 10], i4701[i + 11],  i4701[i + 12], i4701[i + 13], i4701[i + 14], i4701[i + 15]) );
  }
  i4694.bindposes = i4700
  var i4703 = i4695[8]
  var i4702 = []
  for(var i = 0; i < i4703.length; i += 1) {
    i4702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4703[i + 0]) );
  }
  i4694.blendShapes = i4702
  return i4694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4709 = data
  i4708.triangles = i4709[0]
  return i4708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4715 = data
  i4714.name = i4715[0]
  var i4717 = i4715[1]
  var i4716 = []
  for(var i = 0; i < i4717.length; i += 1) {
    i4716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4717[i + 0]) );
  }
  i4714.frames = i4716
  return i4714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4719 = data
  i4718.name = i4719[0]
  i4718.index = i4719[1]
  i4718.startup = !!i4719[2]
  return i4718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4721 = data
  i4720.position = new pc.Vec3( i4721[0], i4721[1], i4721[2] )
  i4720.scale = new pc.Vec3( i4721[3], i4721[4], i4721[5] )
  i4720.rotation = new pc.Quat(i4721[6], i4721[7], i4721[8], i4721[9])
  return i4720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4723 = data
  i4722.enabled = !!i4723[0]
  i4722.aspect = i4723[1]
  i4722.orthographic = !!i4723[2]
  i4722.orthographicSize = i4723[3]
  i4722.backgroundColor = new pc.Color(i4723[4], i4723[5], i4723[6], i4723[7])
  i4722.nearClipPlane = i4723[8]
  i4722.farClipPlane = i4723[9]
  i4722.fieldOfView = i4723[10]
  i4722.depth = i4723[11]
  i4722.clearFlags = i4723[12]
  i4722.cullingMask = i4723[13]
  i4722.rect = i4723[14]
  request.r(i4723[15], i4723[16], 0, i4722, 'targetTexture')
  i4722.usePhysicalProperties = !!i4723[17]
  i4722.focalLength = i4723[18]
  i4722.sensorSize = new pc.Vec2( i4723[19], i4723[20] )
  i4722.lensShift = new pc.Vec2( i4723[21], i4723[22] )
  i4722.gateFit = i4723[23]
  return i4722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4725 = data
  i4724.name = i4725[0]
  i4724.tagId = i4725[1]
  i4724.enabled = !!i4725[2]
  i4724.isStatic = !!i4725[3]
  i4724.layer = i4725[4]
  return i4724
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4726 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4727 = data
  request.r(i4727[0], i4727[1], 0, i4726, 'm_FirstSelected')
  i4726.m_sendNavigationEvents = !!i4727[2]
  i4726.m_DragThreshold = i4727[3]
  return i4726
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4728 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4729 = data
  i4728.m_HorizontalAxis = i4729[0]
  i4728.m_VerticalAxis = i4729[1]
  i4728.m_SubmitButton = i4729[2]
  i4728.m_CancelButton = i4729[3]
  i4728.m_InputActionsPerSecond = i4729[4]
  i4728.m_RepeatDelay = i4729[5]
  i4728.m_ForceModuleActive = !!i4729[6]
  i4728.m_SendPointerHoverToParent = !!i4729[7]
  return i4728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4731 = data
  i4730.pivot = new pc.Vec2( i4731[0], i4731[1] )
  i4730.anchorMin = new pc.Vec2( i4731[2], i4731[3] )
  i4730.anchorMax = new pc.Vec2( i4731[4], i4731[5] )
  i4730.sizeDelta = new pc.Vec2( i4731[6], i4731[7] )
  i4730.anchoredPosition3D = new pc.Vec3( i4731[8], i4731[9], i4731[10] )
  i4730.rotation = new pc.Quat(i4731[11], i4731[12], i4731[13], i4731[14])
  i4730.scale = new pc.Vec3( i4731[15], i4731[16], i4731[17] )
  return i4730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4733 = data
  i4732.enabled = !!i4733[0]
  i4732.planeDistance = i4733[1]
  i4732.referencePixelsPerUnit = i4733[2]
  i4732.isFallbackOverlay = !!i4733[3]
  i4732.renderMode = i4733[4]
  i4732.renderOrder = i4733[5]
  i4732.sortingLayerName = i4733[6]
  i4732.sortingOrder = i4733[7]
  i4732.scaleFactor = i4733[8]
  request.r(i4733[9], i4733[10], 0, i4732, 'worldCamera')
  i4732.overrideSorting = !!i4733[11]
  i4732.pixelPerfect = !!i4733[12]
  i4732.targetDisplay = i4733[13]
  i4732.overridePixelPerfect = !!i4733[14]
  return i4732
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4734 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4735 = data
  i4734.m_UiScaleMode = i4735[0]
  i4734.m_ReferencePixelsPerUnit = i4735[1]
  i4734.m_ScaleFactor = i4735[2]
  i4734.m_ReferenceResolution = new pc.Vec2( i4735[3], i4735[4] )
  i4734.m_ScreenMatchMode = i4735[5]
  i4734.m_MatchWidthOrHeight = i4735[6]
  i4734.m_PhysicalUnit = i4735[7]
  i4734.m_FallbackScreenDPI = i4735[8]
  i4734.m_DefaultSpriteDPI = i4735[9]
  i4734.m_DynamicPixelsPerUnit = i4735[10]
  i4734.m_PresetInfoIsWorld = !!i4735[11]
  return i4734
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4736 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4737 = data
  i4736.m_IgnoreReversedGraphics = !!i4737[0]
  i4736.m_BlockingObjects = i4737[1]
  i4736.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4737[2] )
  return i4736
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i4738 = root || request.c( 'LunaManager' )
  var i4739 = data
  var i4741 = i4739[0]
  var i4740 = []
  for(var i = 0; i < i4741.length; i += 2) {
  request.r(i4741[i + 0], i4741[i + 1], 2, i4740, '')
  }
  i4738.lstBtnInstall = i4740
  request.r(i4739[1], i4739[2], 0, i4738, 'EndCard')
  i4738.countPlay = i4739[3]
  i4738.countPlayFinal = i4739[4]
  i4738.timeDropFinal = i4739[5]
  i4738.colorBG = new pc.Color(i4739[6], i4739[7], i4739[8], i4739[9])
  request.r(i4739[10], i4739[11], 0, i4738, 'texture2D')
  request.r(i4739[12], i4739[13], 0, i4738, 'rawImageBG')
  request.r(i4739[14], i4739[15], 0, i4738, 'StartCard')
  request.r(i4739[16], i4739[17], 0, i4738, 'textTarget')
  request.r(i4739[18], i4739[19], 0, i4738, 'imgCircle')
  return i4738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4745 = data
  i4744.cullTransparentMesh = !!i4745[0]
  return i4744
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i4746 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i4747 = data
  request.r(i4747[0], i4747[1], 0, i4746, 'm_Texture')
  i4746.m_UVRect = UnityEngine.Rect.MinMaxRect(i4747[2], i4747[3], i4747[4], i4747[5])
  request.r(i4747[6], i4747[7], 0, i4746, 'm_Material')
  i4746.m_Maskable = !!i4747[8]
  i4746.m_Color = new pc.Color(i4747[9], i4747[10], i4747[11], i4747[12])
  i4746.m_RaycastTarget = !!i4747[13]
  i4746.m_RaycastPadding = new pc.Vec4( i4747[14], i4747[15], i4747[16], i4747[17] )
  return i4746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4749 = data
  request.r(i4749[0], i4749[1], 0, i4748, 'clip')
  request.r(i4749[2], i4749[3], 0, i4748, 'outputAudioMixerGroup')
  i4748.playOnAwake = !!i4749[4]
  i4748.loop = !!i4749[5]
  i4748.time = i4749[6]
  i4748.volume = i4749[7]
  i4748.pitch = i4749[8]
  i4748.enabled = !!i4749[9]
  return i4748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i4750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i4751 = data
  i4750.usedByComposite = !!i4751[0]
  i4750.autoTiling = !!i4751[1]
  i4750.size = new pc.Vec2( i4751[2], i4751[3] )
  i4750.edgeRadius = i4751[4]
  i4750.enabled = !!i4751[5]
  i4750.isTrigger = !!i4751[6]
  i4750.usedByEffector = !!i4751[7]
  i4750.density = i4751[8]
  i4750.offset = new pc.Vec2( i4751[9], i4751[10] )
  request.r(i4751[11], i4751[12], 0, i4750, 'material')
  return i4750
}

Deserializers["DropZone"] = function (request, data, root) {
  var i4752 = root || request.c( 'DropZone' )
  var i4753 = data
  var i4755 = i4753[0]
  var i4754 = []
  for(var i = 0; i < i4755.length; i += 2) {
  request.r(i4755[i + 0], i4755[i + 1], 2, i4754, '')
  }
  i4752.steps = i4754
  i4752.isActive = !!i4753[1]
  request.r(i4753[2], i4753[3], 0, i4752, 'spriteUpgrade')
  return i4752
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4758 = root || request.c( 'UnityEngine.UI.Image' )
  var i4759 = data
  request.r(i4759[0], i4759[1], 0, i4758, 'm_Sprite')
  i4758.m_Type = i4759[2]
  i4758.m_PreserveAspect = !!i4759[3]
  i4758.m_FillCenter = !!i4759[4]
  i4758.m_FillMethod = i4759[5]
  i4758.m_FillAmount = i4759[6]
  i4758.m_FillClockwise = !!i4759[7]
  i4758.m_FillOrigin = i4759[8]
  i4758.m_UseSpriteMesh = !!i4759[9]
  i4758.m_PixelsPerUnitMultiplier = i4759[10]
  request.r(i4759[11], i4759[12], 0, i4758, 'm_Material')
  i4758.m_Maskable = !!i4759[13]
  i4758.m_Color = new pc.Color(i4759[14], i4759[15], i4759[16], i4759[17])
  i4758.m_RaycastTarget = !!i4759[18]
  i4758.m_RaycastPadding = new pc.Vec4( i4759[19], i4759[20], i4759[21], i4759[22] )
  return i4758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4761 = data
  request.r(i4761[0], i4761[1], 0, i4760, 'additionalVertexStreams')
  i4760.enabled = !!i4761[2]
  request.r(i4761[3], i4761[4], 0, i4760, 'sharedMaterial')
  var i4763 = i4761[5]
  var i4762 = []
  for(var i = 0; i < i4763.length; i += 2) {
  request.r(i4763[i + 0], i4763[i + 1], 2, i4762, '')
  }
  i4760.sharedMaterials = i4762
  i4760.receiveShadows = !!i4761[6]
  i4760.shadowCastingMode = i4761[7]
  i4760.sortingLayerID = i4761[8]
  i4760.sortingOrder = i4761[9]
  i4760.lightmapIndex = i4761[10]
  i4760.lightmapSceneIndex = i4761[11]
  i4760.lightmapScaleOffset = new pc.Vec4( i4761[12], i4761[13], i4761[14], i4761[15] )
  i4760.lightProbeUsage = i4761[16]
  i4760.reflectionProbeUsage = i4761[17]
  return i4760
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i4766 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i4767 = data
  i4766.loop = !!i4767[0]
  i4766.timeScale = i4767[1]
  request.r(i4767[2], i4767[3], 0, i4766, 'skeletonDataAsset')
  i4766.initialSkinName = i4767[4]
  i4766.fixPrefabOverrideViaMeshFilter = i4767[5]
  i4766.initialFlipX = !!i4767[6]
  i4766.initialFlipY = !!i4767[7]
  i4766.updateWhenInvisible = i4767[8]
  i4766.zSpacing = i4767[9]
  i4766.useClipping = !!i4767[10]
  i4766.immutableTriangles = !!i4767[11]
  i4766.pmaVertexColors = !!i4767[12]
  i4766.clearStateOnDisable = !!i4767[13]
  i4766.tintBlack = !!i4767[14]
  i4766.singleSubmesh = !!i4767[15]
  i4766.fixDrawOrder = !!i4767[16]
  i4766.addNormals = !!i4767[17]
  i4766.calculateTangents = !!i4767[18]
  i4766.maskInteraction = i4767[19]
  i4766.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i4767[20], i4766.maskMaterials)
  i4766.disableRenderingOnOverride = !!i4767[21]
  i4766.updateTiming = i4767[22]
  i4766.unscaledTime = !!i4767[23]
  i4766._animationName = i4767[24]
  var i4769 = i4767[25]
  var i4768 = []
  for(var i = 0; i < i4769.length; i += 1) {
    i4768.push( i4769[i + 0] );
  }
  i4766.separatorSlotNames = i4768
  return i4766
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i4770 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i4771 = data
  var i4773 = i4771[0]
  var i4772 = []
  for(var i = 0; i < i4773.length; i += 2) {
  request.r(i4773[i + 0], i4773[i + 1], 2, i4772, '')
  }
  i4770.materialsMaskDisabled = i4772
  var i4775 = i4771[1]
  var i4774 = []
  for(var i = 0; i < i4775.length; i += 2) {
  request.r(i4775[i + 0], i4775[i + 1], 2, i4774, '')
  }
  i4770.materialsInsideMask = i4774
  var i4777 = i4771[2]
  var i4776 = []
  for(var i = 0; i < i4777.length; i += 2) {
  request.r(i4777[i + 0], i4777[i + 1], 2, i4776, '')
  }
  i4770.materialsOutsideMask = i4776
  return i4770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4781 = data
  request.r(i4781[0], i4781[1], 0, i4780, 'sharedMesh')
  return i4780
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i4782 = root || request.c( 'DraggableItem' )
  var i4783 = data
  i4782.isChease = !!i4783[0]
  return i4782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i4784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i4785 = data
  i4784.m_Alpha = i4785[0]
  i4784.m_Interactable = !!i4785[1]
  i4784.m_BlocksRaycasts = !!i4785[2]
  i4784.m_IgnoreParentGroups = !!i4785[3]
  i4784.enabled = !!i4785[4]
  return i4784
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4786 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4787 = data
  i4786.m_hasFontAssetChanged = !!i4787[0]
  request.r(i4787[1], i4787[2], 0, i4786, 'm_baseMaterial')
  i4786.m_maskOffset = new pc.Vec4( i4787[3], i4787[4], i4787[5], i4787[6] )
  i4786.m_text = i4787[7]
  i4786.m_isRightToLeft = !!i4787[8]
  request.r(i4787[9], i4787[10], 0, i4786, 'm_fontAsset')
  request.r(i4787[11], i4787[12], 0, i4786, 'm_sharedMaterial')
  var i4789 = i4787[13]
  var i4788 = []
  for(var i = 0; i < i4789.length; i += 2) {
  request.r(i4789[i + 0], i4789[i + 1], 2, i4788, '')
  }
  i4786.m_fontSharedMaterials = i4788
  request.r(i4787[14], i4787[15], 0, i4786, 'm_fontMaterial')
  var i4791 = i4787[16]
  var i4790 = []
  for(var i = 0; i < i4791.length; i += 2) {
  request.r(i4791[i + 0], i4791[i + 1], 2, i4790, '')
  }
  i4786.m_fontMaterials = i4790
  i4786.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4787[17], i4787[18], i4787[19], i4787[20])
  i4786.m_fontColor = new pc.Color(i4787[21], i4787[22], i4787[23], i4787[24])
  i4786.m_enableVertexGradient = !!i4787[25]
  i4786.m_colorMode = i4787[26]
  i4786.m_fontColorGradient = request.d('TMPro.VertexGradient', i4787[27], i4786.m_fontColorGradient)
  request.r(i4787[28], i4787[29], 0, i4786, 'm_fontColorGradientPreset')
  request.r(i4787[30], i4787[31], 0, i4786, 'm_spriteAsset')
  i4786.m_tintAllSprites = !!i4787[32]
  request.r(i4787[33], i4787[34], 0, i4786, 'm_StyleSheet')
  i4786.m_TextStyleHashCode = i4787[35]
  i4786.m_overrideHtmlColors = !!i4787[36]
  i4786.m_faceColor = UnityEngine.Color32.ConstructColor(i4787[37], i4787[38], i4787[39], i4787[40])
  i4786.m_fontSize = i4787[41]
  i4786.m_fontSizeBase = i4787[42]
  i4786.m_fontWeight = i4787[43]
  i4786.m_enableAutoSizing = !!i4787[44]
  i4786.m_fontSizeMin = i4787[45]
  i4786.m_fontSizeMax = i4787[46]
  i4786.m_fontStyle = i4787[47]
  i4786.m_HorizontalAlignment = i4787[48]
  i4786.m_VerticalAlignment = i4787[49]
  i4786.m_textAlignment = i4787[50]
  i4786.m_characterSpacing = i4787[51]
  i4786.m_wordSpacing = i4787[52]
  i4786.m_lineSpacing = i4787[53]
  i4786.m_lineSpacingMax = i4787[54]
  i4786.m_paragraphSpacing = i4787[55]
  i4786.m_charWidthMaxAdj = i4787[56]
  i4786.m_enableWordWrapping = !!i4787[57]
  i4786.m_wordWrappingRatios = i4787[58]
  i4786.m_overflowMode = i4787[59]
  request.r(i4787[60], i4787[61], 0, i4786, 'm_linkedTextComponent')
  request.r(i4787[62], i4787[63], 0, i4786, 'parentLinkedComponent')
  i4786.m_enableKerning = !!i4787[64]
  i4786.m_enableExtraPadding = !!i4787[65]
  i4786.checkPaddingRequired = !!i4787[66]
  i4786.m_isRichText = !!i4787[67]
  i4786.m_parseCtrlCharacters = !!i4787[68]
  i4786.m_isOrthographic = !!i4787[69]
  i4786.m_isCullingEnabled = !!i4787[70]
  i4786.m_horizontalMapping = i4787[71]
  i4786.m_verticalMapping = i4787[72]
  i4786.m_uvLineOffset = i4787[73]
  i4786.m_geometrySortingOrder = i4787[74]
  i4786.m_IsTextObjectScaleStatic = !!i4787[75]
  i4786.m_VertexBufferAutoSizeReduction = !!i4787[76]
  i4786.m_useMaxVisibleDescender = !!i4787[77]
  i4786.m_pageToDisplay = i4787[78]
  i4786.m_margin = new pc.Vec4( i4787[79], i4787[80], i4787[81], i4787[82] )
  i4786.m_isUsingLegacyAnimationComponent = !!i4787[83]
  i4786.m_isVolumetricText = !!i4787[84]
  request.r(i4787[85], i4787[86], 0, i4786, 'm_Material')
  i4786.m_Maskable = !!i4787[87]
  i4786.m_Color = new pc.Color(i4787[88], i4787[89], i4787[90], i4787[91])
  i4786.m_RaycastTarget = !!i4787[92]
  i4786.m_RaycastPadding = new pc.Vec4( i4787[93], i4787[94], i4787[95], i4787[96] )
  return i4786
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4792 = root || request.c( 'TMPro.VertexGradient' )
  var i4793 = data
  i4792.topLeft = new pc.Color(i4793[0], i4793[1], i4793[2], i4793[3])
  i4792.topRight = new pc.Color(i4793[4], i4793[5], i4793[6], i4793[7])
  i4792.bottomLeft = new pc.Color(i4793[8], i4793[9], i4793[10], i4793[11])
  i4792.bottomRight = new pc.Color(i4793[12], i4793[13], i4793[14], i4793[15])
  return i4792
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i4794 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i4795 = data
  request.r(i4795[0], i4795[1], 0, i4794, 'skeletonDataAsset')
  request.r(i4795[2], i4795[3], 0, i4794, 'additiveMaterial')
  request.r(i4795[4], i4795[5], 0, i4794, 'multiplyMaterial')
  request.r(i4795[6], i4795[7], 0, i4794, 'screenMaterial')
  i4794.initialSkinName = i4795[8]
  i4794.initialFlipX = !!i4795[9]
  i4794.initialFlipY = !!i4795[10]
  i4794.startingAnimation = i4795[11]
  i4794.startingLoop = !!i4795[12]
  i4794.timeScale = i4795[13]
  i4794.freeze = !!i4795[14]
  i4794.layoutScaleMode = i4795[15]
  i4794.updateWhenInvisible = i4795[16]
  i4794.allowMultipleCanvasRenderers = !!i4795[17]
  var i4797 = i4795[18]
  var i4796 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i4797.length; i += 2) {
  request.r(i4797[i + 0], i4797[i + 1], 1, i4796, '')
  }
  i4794.canvasRenderers = i4796
  i4794.enableSeparatorSlots = !!i4795[19]
  i4794.updateSeparatorPartLocation = !!i4795[20]
  i4794.updateSeparatorPartScale = !!i4795[21]
  i4794.disableMeshAssignmentOnOverride = !!i4795[22]
  i4794.referenceSize = new pc.Vec2( i4795[23], i4795[24] )
  i4794.referenceScale = i4795[25]
  i4794.rectTransformSize = new pc.Vec2( i4795[26], i4795[27] )
  i4794.editReferenceRect = !!i4795[28]
  var i4799 = i4795[29]
  var i4798 = []
  for(var i = 0; i < i4799.length; i += 1) {
    i4798.push( i4799[i + 0] );
  }
  i4794.separatorSlotNames = i4798
  var i4801 = i4795[30]
  var i4800 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i4801.length; i += 2) {
  request.r(i4801[i + 0], i4801[i + 1], 1, i4800, '')
  }
  i4794.separatorParts = i4800
  i4794.meshGenerator = request.d('Spine.Unity.MeshGenerator', i4795[31], i4794.meshGenerator)
  i4794.updateTiming = i4795[32]
  i4794.unscaledTime = !!i4795[33]
  request.r(i4795[34], i4795[35], 0, i4794, 'm_Material')
  i4794.m_Maskable = !!i4795[36]
  i4794.m_Color = new pc.Color(i4795[37], i4795[38], i4795[39], i4795[40])
  i4794.m_RaycastTarget = !!i4795[41]
  i4794.m_RaycastPadding = new pc.Vec4( i4795[42], i4795[43], i4795[44], i4795[45] )
  return i4794
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i4806 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i4807 = data
  i4806.settings = request.d('Spine.Unity.MeshGenerator+Settings', i4807[0], i4806.settings)
  return i4806
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i4808 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i4809 = data
  i4808.useClipping = !!i4809[0]
  i4808.zSpacing = i4809[1]
  i4808.pmaVertexColors = !!i4809[2]
  i4808.tintBlack = !!i4809[3]
  i4808.canvasGroupTintBlack = !!i4809[4]
  i4808.calculateTangents = !!i4809[5]
  i4808.addNormals = !!i4809[6]
  i4808.immutableTriangles = !!i4809[7]
  return i4808
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i4810 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i4811 = data
  i4810.targetIsSelf = !!i4811[0]
  request.r(i4811[1], i4811[2], 0, i4810, 'targetGO')
  i4810.tweenTargetIsTargetGO = !!i4811[3]
  i4810.delay = i4811[4]
  i4810.duration = i4811[5]
  i4810.easeType = i4811[6]
  i4810.easeCurve = new pc.AnimationCurve( { keys_flow: i4811[7] } )
  i4810.loopType = i4811[8]
  i4810.loops = i4811[9]
  i4810.id = i4811[10]
  i4810.isRelative = !!i4811[11]
  i4810.isFrom = !!i4811[12]
  i4810.isIndependentUpdate = !!i4811[13]
  i4810.autoKill = !!i4811[14]
  i4810.autoGenerate = !!i4811[15]
  i4810.isActive = !!i4811[16]
  i4810.isValid = !!i4811[17]
  request.r(i4811[18], i4811[19], 0, i4810, 'target')
  i4810.animationType = i4811[20]
  i4810.targetType = i4811[21]
  i4810.forcedTargetType = i4811[22]
  i4810.autoPlay = !!i4811[23]
  i4810.useTargetAsV3 = !!i4811[24]
  i4810.endValueFloat = i4811[25]
  i4810.endValueV3 = new pc.Vec3( i4811[26], i4811[27], i4811[28] )
  i4810.endValueV2 = new pc.Vec2( i4811[29], i4811[30] )
  i4810.endValueColor = new pc.Color(i4811[31], i4811[32], i4811[33], i4811[34])
  i4810.endValueString = i4811[35]
  i4810.endValueRect = UnityEngine.Rect.MinMaxRect(i4811[36], i4811[37], i4811[38], i4811[39])
  request.r(i4811[40], i4811[41], 0, i4810, 'endValueTransform')
  i4810.optionalBool0 = !!i4811[42]
  i4810.optionalBool1 = !!i4811[43]
  i4810.optionalFloat0 = i4811[44]
  i4810.optionalInt0 = i4811[45]
  i4810.optionalRotationMode = i4811[46]
  i4810.optionalScrambleMode = i4811[47]
  i4810.optionalShakeRandomnessMode = i4811[48]
  i4810.optionalString = i4811[49]
  i4810.updateType = i4811[50]
  i4810.isSpeedBased = !!i4811[51]
  i4810.hasOnStart = !!i4811[52]
  i4810.hasOnPlay = !!i4811[53]
  i4810.hasOnUpdate = !!i4811[54]
  i4810.hasOnStepComplete = !!i4811[55]
  i4810.hasOnComplete = !!i4811[56]
  i4810.hasOnTweenCreated = !!i4811[57]
  i4810.hasOnRewind = !!i4811[58]
  i4810.onStart = request.d('UnityEngine.Events.UnityEvent', i4811[59], i4810.onStart)
  i4810.onPlay = request.d('UnityEngine.Events.UnityEvent', i4811[60], i4810.onPlay)
  i4810.onUpdate = request.d('UnityEngine.Events.UnityEvent', i4811[61], i4810.onUpdate)
  i4810.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i4811[62], i4810.onStepComplete)
  i4810.onComplete = request.d('UnityEngine.Events.UnityEvent', i4811[63], i4810.onComplete)
  i4810.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i4811[64], i4810.onTweenCreated)
  i4810.onRewind = request.d('UnityEngine.Events.UnityEvent', i4811[65], i4810.onRewind)
  return i4810
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i4812 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i4813 = data
  i4812.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4813[0], i4812.m_PersistentCalls)
  return i4812
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4814 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4815 = data
  var i4817 = i4815[0]
  var i4816 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4817.length; i += 1) {
    i4816.add(request.d('UnityEngine.Events.PersistentCall', i4817[i + 0]));
  }
  i4814.m_Calls = i4816
  return i4814
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4820 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4821 = data
  request.r(i4821[0], i4821[1], 0, i4820, 'm_Target')
  i4820.m_TargetAssemblyTypeName = i4821[2]
  i4820.m_MethodName = i4821[3]
  i4820.m_Mode = i4821[4]
  i4820.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4821[5], i4820.m_Arguments)
  i4820.m_CallState = i4821[6]
  return i4820
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i4822 = root || request.c( 'UnityEngine.UI.Text' )
  var i4823 = data
  i4822.m_FontData = request.d('UnityEngine.UI.FontData', i4823[0], i4822.m_FontData)
  i4822.m_Text = i4823[1]
  request.r(i4823[2], i4823[3], 0, i4822, 'm_Material')
  i4822.m_Maskable = !!i4823[4]
  i4822.m_Color = new pc.Color(i4823[5], i4823[6], i4823[7], i4823[8])
  i4822.m_RaycastTarget = !!i4823[9]
  i4822.m_RaycastPadding = new pc.Vec4( i4823[10], i4823[11], i4823[12], i4823[13] )
  return i4822
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i4824 = root || request.c( 'UnityEngine.UI.FontData' )
  var i4825 = data
  request.r(i4825[0], i4825[1], 0, i4824, 'm_Font')
  i4824.m_FontSize = i4825[2]
  i4824.m_FontStyle = i4825[3]
  i4824.m_BestFit = !!i4825[4]
  i4824.m_MinSize = i4825[5]
  i4824.m_MaxSize = i4825[6]
  i4824.m_Alignment = i4825[7]
  i4824.m_AlignByGeometry = !!i4825[8]
  i4824.m_RichText = !!i4825[9]
  i4824.m_HorizontalOverflow = i4825[10]
  i4824.m_VerticalOverflow = i4825[11]
  i4824.m_LineSpacing = i4825[12]
  return i4824
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4826 = root || request.c( 'UnityEngine.UI.Button' )
  var i4827 = data
  i4826.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4827[0], i4826.m_OnClick)
  i4826.m_Navigation = request.d('UnityEngine.UI.Navigation', i4827[1], i4826.m_Navigation)
  i4826.m_Transition = i4827[2]
  i4826.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4827[3], i4826.m_Colors)
  i4826.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4827[4], i4826.m_SpriteState)
  i4826.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4827[5], i4826.m_AnimationTriggers)
  i4826.m_Interactable = !!i4827[6]
  request.r(i4827[7], i4827[8], 0, i4826, 'm_TargetGraphic')
  return i4826
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4828 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4829 = data
  i4828.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4829[0], i4828.m_PersistentCalls)
  return i4828
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4830 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4831 = data
  i4830.m_Mode = i4831[0]
  i4830.m_WrapAround = !!i4831[1]
  request.r(i4831[2], i4831[3], 0, i4830, 'm_SelectOnUp')
  request.r(i4831[4], i4831[5], 0, i4830, 'm_SelectOnDown')
  request.r(i4831[6], i4831[7], 0, i4830, 'm_SelectOnLeft')
  request.r(i4831[8], i4831[9], 0, i4830, 'm_SelectOnRight')
  return i4830
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4832 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4833 = data
  i4832.m_NormalColor = new pc.Color(i4833[0], i4833[1], i4833[2], i4833[3])
  i4832.m_HighlightedColor = new pc.Color(i4833[4], i4833[5], i4833[6], i4833[7])
  i4832.m_PressedColor = new pc.Color(i4833[8], i4833[9], i4833[10], i4833[11])
  i4832.m_SelectedColor = new pc.Color(i4833[12], i4833[13], i4833[14], i4833[15])
  i4832.m_DisabledColor = new pc.Color(i4833[16], i4833[17], i4833[18], i4833[19])
  i4832.m_ColorMultiplier = i4833[20]
  i4832.m_FadeDuration = i4833[21]
  return i4832
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4834 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4835 = data
  request.r(i4835[0], i4835[1], 0, i4834, 'm_HighlightedSprite')
  request.r(i4835[2], i4835[3], 0, i4834, 'm_PressedSprite')
  request.r(i4835[4], i4835[5], 0, i4834, 'm_SelectedSprite')
  request.r(i4835[6], i4835[7], 0, i4834, 'm_DisabledSprite')
  return i4834
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4836 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4837 = data
  i4836.m_NormalTrigger = i4837[0]
  i4836.m_HighlightedTrigger = i4837[1]
  i4836.m_PressedTrigger = i4837[2]
  i4836.m_SelectedTrigger = i4837[3]
  i4836.m_DisabledTrigger = i4837[4]
  return i4836
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i4838 = root || request.c( 'UnityEngine.UI.Mask' )
  var i4839 = data
  i4838.m_ShowMaskGraphic = !!i4839[0]
  return i4838
}

Deserializers["IQFill"] = function (request, data, root) {
  var i4840 = root || request.c( 'IQFill' )
  var i4841 = data
  request.r(i4841[0], i4841[1], 0, i4840, 'fillImage')
  i4840.maxFillAmount = i4841[2]
  i4840.fillDuration = i4841[3]
  i4840.maxValue = i4841[4]
  i4840.addValue = i4841[5]
  i4840.fillEase = i4841[6]
  return i4840
}

Deserializers["GameController"] = function (request, data, root) {
  var i4842 = root || request.c( 'GameController' )
  var i4843 = data
  var i4845 = i4843[0]
  var i4844 = []
  for(var i = 0; i < i4845.length; i += 2) {
  request.r(i4845[i + 0], i4845[i + 1], 2, i4844, '')
  }
  i4842.colliders = i4844
  i4842.isUpgrade = !!i4843[1]
  request.r(i4843[2], i4843[3], 0, i4842, 'IQFill')
  return i4842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4849 = data
  i4848.ambientIntensity = i4849[0]
  i4848.reflectionIntensity = i4849[1]
  i4848.ambientMode = i4849[2]
  i4848.ambientLight = new pc.Color(i4849[3], i4849[4], i4849[5], i4849[6])
  i4848.ambientSkyColor = new pc.Color(i4849[7], i4849[8], i4849[9], i4849[10])
  i4848.ambientGroundColor = new pc.Color(i4849[11], i4849[12], i4849[13], i4849[14])
  i4848.ambientEquatorColor = new pc.Color(i4849[15], i4849[16], i4849[17], i4849[18])
  i4848.fogColor = new pc.Color(i4849[19], i4849[20], i4849[21], i4849[22])
  i4848.fogEndDistance = i4849[23]
  i4848.fogStartDistance = i4849[24]
  i4848.fogDensity = i4849[25]
  i4848.fog = !!i4849[26]
  request.r(i4849[27], i4849[28], 0, i4848, 'skybox')
  i4848.fogMode = i4849[29]
  var i4851 = i4849[30]
  var i4850 = []
  for(var i = 0; i < i4851.length; i += 1) {
    i4850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4851[i + 0]) );
  }
  i4848.lightmaps = i4850
  i4848.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4849[31], i4848.lightProbes)
  i4848.lightmapsMode = i4849[32]
  i4848.mixedBakeMode = i4849[33]
  i4848.environmentLightingMode = i4849[34]
  i4848.ambientProbe = new pc.SphericalHarmonicsL2(i4849[35])
  i4848.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4849[36])
  i4848.useReferenceAmbientProbe = !!i4849[37]
  request.r(i4849[38], i4849[39], 0, i4848, 'customReflection')
  request.r(i4849[40], i4849[41], 0, i4848, 'defaultReflection')
  i4848.defaultReflectionMode = i4849[42]
  i4848.defaultReflectionResolution = i4849[43]
  i4848.sunLightObjectId = i4849[44]
  i4848.pixelLightCount = i4849[45]
  i4848.defaultReflectionHDR = !!i4849[46]
  i4848.hasLightDataAsset = !!i4849[47]
  i4848.hasManualGenerate = !!i4849[48]
  return i4848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4855 = data
  request.r(i4855[0], i4855[1], 0, i4854, 'lightmapColor')
  request.r(i4855[2], i4855[3], 0, i4854, 'lightmapDirection')
  return i4854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4856 = root || new UnityEngine.LightProbes()
  var i4857 = data
  return i4856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4865 = data
  var i4867 = i4865[0]
  var i4866 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4867.length; i += 1) {
    i4866.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4867[i + 0]));
  }
  i4864.ShaderCompilationErrors = i4866
  i4864.name = i4865[1]
  i4864.guid = i4865[2]
  var i4869 = i4865[3]
  var i4868 = []
  for(var i = 0; i < i4869.length; i += 1) {
    i4868.push( i4869[i + 0] );
  }
  i4864.shaderDefinedKeywords = i4868
  var i4871 = i4865[4]
  var i4870 = []
  for(var i = 0; i < i4871.length; i += 1) {
    i4870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4871[i + 0]) );
  }
  i4864.passes = i4870
  var i4873 = i4865[5]
  var i4872 = []
  for(var i = 0; i < i4873.length; i += 1) {
    i4872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4873[i + 0]) );
  }
  i4864.usePasses = i4872
  var i4875 = i4865[6]
  var i4874 = []
  for(var i = 0; i < i4875.length; i += 1) {
    i4874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4875[i + 0]) );
  }
  i4864.defaultParameterValues = i4874
  request.r(i4865[7], i4865[8], 0, i4864, 'unityFallbackShader')
  i4864.readDepth = !!i4865[9]
  i4864.isCreatedByShaderGraph = !!i4865[10]
  i4864.usedBatchUniforms = i4865[11]
  return i4864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4879 = data
  i4878.shaderName = i4879[0]
  i4878.errorMessage = i4879[1]
  return i4878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4882 = root || new pc.UnityShaderPass()
  var i4883 = data
  i4882.id = i4883[0]
  i4882.subShaderIndex = i4883[1]
  i4882.name = i4883[2]
  i4882.passType = i4883[3]
  i4882.grabPassTextureName = i4883[4]
  i4882.usePass = !!i4883[5]
  i4882.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4883[6], i4882.zTest)
  i4882.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4883[7], i4882.zWrite)
  i4882.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4883[8], i4882.culling)
  i4882.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4883[9], i4882.blending)
  i4882.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4883[10], i4882.alphaBlending)
  i4882.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4883[11], i4882.colorWriteMask)
  i4882.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4883[12], i4882.offsetUnits)
  i4882.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4883[13], i4882.offsetFactor)
  i4882.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4883[14], i4882.stencilRef)
  i4882.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4883[15], i4882.stencilReadMask)
  i4882.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4883[16], i4882.stencilWriteMask)
  i4882.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4883[17], i4882.stencilOp)
  i4882.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4883[18], i4882.stencilOpFront)
  i4882.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4883[19], i4882.stencilOpBack)
  var i4885 = i4883[20]
  var i4884 = []
  for(var i = 0; i < i4885.length; i += 1) {
    i4884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4885[i + 0]) );
  }
  i4882.tags = i4884
  var i4887 = i4883[21]
  var i4886 = []
  for(var i = 0; i < i4887.length; i += 1) {
    i4886.push( i4887[i + 0] );
  }
  i4882.passDefinedKeywords = i4886
  var i4889 = i4883[22]
  var i4888 = []
  for(var i = 0; i < i4889.length; i += 1) {
    i4888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4889[i + 0]) );
  }
  i4882.passDefinedKeywordGroups = i4888
  var i4891 = i4883[23]
  var i4890 = []
  for(var i = 0; i < i4891.length; i += 1) {
    i4890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4891[i + 0]) );
  }
  i4882.variants = i4890
  var i4893 = i4883[24]
  var i4892 = []
  for(var i = 0; i < i4893.length; i += 1) {
    i4892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4893[i + 0]) );
  }
  i4882.excludedVariants = i4892
  i4882.hasDepthReader = !!i4883[25]
  return i4882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4895 = data
  i4894.val = i4895[0]
  i4894.name = i4895[1]
  return i4894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4897 = data
  i4896.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4897[0], i4896.src)
  i4896.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4897[1], i4896.dst)
  i4896.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4897[2], i4896.op)
  return i4896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4899 = data
  i4898.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4899[0], i4898.pass)
  i4898.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4899[1], i4898.fail)
  i4898.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4899[2], i4898.zFail)
  i4898.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4899[3], i4898.comp)
  return i4898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4903 = data
  i4902.name = i4903[0]
  i4902.value = i4903[1]
  return i4902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4907 = data
  var i4909 = i4907[0]
  var i4908 = []
  for(var i = 0; i < i4909.length; i += 1) {
    i4908.push( i4909[i + 0] );
  }
  i4906.keywords = i4908
  i4906.hasDiscard = !!i4907[1]
  return i4906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4913 = data
  i4912.passId = i4913[0]
  i4912.subShaderIndex = i4913[1]
  var i4915 = i4913[2]
  var i4914 = []
  for(var i = 0; i < i4915.length; i += 1) {
    i4914.push( i4915[i + 0] );
  }
  i4912.keywords = i4914
  i4912.vertexProgram = i4913[3]
  i4912.fragmentProgram = i4913[4]
  i4912.compiledForWebGL2 = !!i4913[5]
  i4912.readDepth = !!i4913[6]
  return i4912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4919 = data
  request.r(i4919[0], i4919[1], 0, i4918, 'shader')
  i4918.pass = i4919[2]
  return i4918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4923 = data
  i4922.name = i4923[0]
  i4922.type = i4923[1]
  i4922.value = new pc.Vec4( i4923[2], i4923[3], i4923[4], i4923[5] )
  i4922.textureValue = i4923[6]
  i4922.shaderPropertyFlag = i4923[7]
  return i4922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4925 = data
  i4924.name = i4925[0]
  request.r(i4925[1], i4925[2], 0, i4924, 'texture')
  i4924.aabb = i4925[3]
  i4924.vertices = i4925[4]
  i4924.triangles = i4925[5]
  i4924.textureRect = UnityEngine.Rect.MinMaxRect(i4925[6], i4925[7], i4925[8], i4925[9])
  i4924.packedRect = UnityEngine.Rect.MinMaxRect(i4925[10], i4925[11], i4925[12], i4925[13])
  i4924.border = new pc.Vec4( i4925[14], i4925[15], i4925[16], i4925[17] )
  i4924.transparency = i4925[18]
  i4924.bounds = i4925[19]
  i4924.pixelsPerUnit = i4925[20]
  i4924.textureWidth = i4925[21]
  i4924.textureHeight = i4925[22]
  i4924.nativeSize = new pc.Vec2( i4925[23], i4925[24] )
  i4924.pivot = new pc.Vec2( i4925[25], i4925[26] )
  i4924.textureRectOffset = new pc.Vec2( i4925[27], i4925[28] )
  return i4924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4927 = data
  i4926.name = i4927[0]
  return i4926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4929 = data
  i4928.name = i4929[0]
  i4928.ascent = i4929[1]
  i4928.originalLineHeight = i4929[2]
  i4928.fontSize = i4929[3]
  var i4931 = i4929[4]
  var i4930 = []
  for(var i = 0; i < i4931.length; i += 1) {
    i4930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4931[i + 0]) );
  }
  i4928.characterInfo = i4930
  request.r(i4929[5], i4929[6], 0, i4928, 'texture')
  i4928.originalFontSize = i4929[7]
  return i4928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4935 = data
  i4934.index = i4935[0]
  i4934.advance = i4935[1]
  i4934.bearing = i4935[2]
  i4934.glyphWidth = i4935[3]
  i4934.glyphHeight = i4935[4]
  i4934.minX = i4935[5]
  i4934.maxX = i4935[6]
  i4934.minY = i4935[7]
  i4934.maxY = i4935[8]
  i4934.uvBottomLeftX = i4935[9]
  i4934.uvBottomLeftY = i4935[10]
  i4934.uvBottomRightX = i4935[11]
  i4934.uvBottomRightY = i4935[12]
  i4934.uvTopLeftX = i4935[13]
  i4934.uvTopLeftY = i4935[14]
  i4934.uvTopRightX = i4935[15]
  i4934.uvTopRightY = i4935[16]
  return i4934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4937 = data
  i4936.name = i4937[0]
  i4936.bytes64 = i4937[1]
  i4936.data = i4937[2]
  return i4936
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i4938 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i4939 = data
  var i4941 = i4939[0]
  var i4940 = []
  for(var i = 0; i < i4941.length; i += 2) {
  request.r(i4941[i + 0], i4941[i + 1], 2, i4940, '')
  }
  i4938.atlasAssets = i4940
  i4938.scale = i4939[1]
  request.r(i4939[2], i4939[3], 0, i4938, 'skeletonJSON')
  i4938.isUpgradingBlendModeMaterials = !!i4939[4]
  i4938.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i4939[5], i4938.blendModeMaterials)
  var i4943 = i4939[6]
  var i4942 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i4943.length; i += 2) {
  request.r(i4943[i + 0], i4943[i + 1], 1, i4942, '')
  }
  i4938.skeletonDataModifiers = i4942
  var i4945 = i4939[7]
  var i4944 = []
  for(var i = 0; i < i4945.length; i += 1) {
    i4944.push( i4945[i + 0] );
  }
  i4938.fromAnimation = i4944
  var i4947 = i4939[8]
  var i4946 = []
  for(var i = 0; i < i4947.length; i += 1) {
    i4946.push( i4947[i + 0] );
  }
  i4938.toAnimation = i4946
  i4938.duration = i4939[9]
  i4938.defaultMix = i4939[10]
  request.r(i4939[11], i4939[12], 0, i4938, 'controller')
  return i4938
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i4950 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i4951 = data
  i4950.applyAdditiveMaterial = !!i4951[0]
  var i4953 = i4951[1]
  var i4952 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4953.length; i += 1) {
    i4952.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4953[i + 0]));
  }
  i4950.additiveMaterials = i4952
  var i4955 = i4951[2]
  var i4954 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4955.length; i += 1) {
    i4954.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4955[i + 0]));
  }
  i4950.multiplyMaterials = i4954
  var i4957 = i4951[3]
  var i4956 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4957.length; i += 1) {
    i4956.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4957[i + 0]));
  }
  i4950.screenMaterials = i4956
  i4950.requiresBlendModeMaterials = !!i4951[4]
  return i4950
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i4960 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i4961 = data
  i4960.pageName = i4961[0]
  request.r(i4961[1], i4961[2], 0, i4960, 'material')
  return i4960
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i4964 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i4965 = data
  request.r(i4965[0], i4965[1], 0, i4964, 'atlasFile')
  var i4967 = i4965[2]
  var i4966 = []
  for(var i = 0; i < i4967.length; i += 2) {
  request.r(i4967[i + 0], i4967[i + 1], 2, i4966, '')
  }
  i4964.materials = i4966
  i4964.textureLoadingMode = i4965[3]
  request.r(i4965[4], i4965[5], 0, i4964, 'onDemandTextureLoader')
  return i4964
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4968 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4969 = data
  i4968.hashCode = i4969[0]
  request.r(i4969[1], i4969[2], 0, i4968, 'material')
  i4968.materialHashCode = i4969[3]
  request.r(i4969[4], i4969[5], 0, i4968, 'atlas')
  i4968.normalStyle = i4969[6]
  i4968.normalSpacingOffset = i4969[7]
  i4968.boldStyle = i4969[8]
  i4968.boldSpacing = i4969[9]
  i4968.italicStyle = i4969[10]
  i4968.tabSize = i4969[11]
  i4968.m_Version = i4969[12]
  i4968.m_SourceFontFileGUID = i4969[13]
  request.r(i4969[14], i4969[15], 0, i4968, 'm_SourceFontFile_EditorRef')
  request.r(i4969[16], i4969[17], 0, i4968, 'm_SourceFontFile')
  i4968.m_AtlasPopulationMode = i4969[18]
  i4968.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4969[19], i4968.m_FaceInfo)
  var i4971 = i4969[20]
  var i4970 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4971.length; i += 1) {
    i4970.add(request.d('UnityEngine.TextCore.Glyph', i4971[i + 0]));
  }
  i4968.m_GlyphTable = i4970
  var i4973 = i4969[21]
  var i4972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4973.length; i += 1) {
    i4972.add(request.d('TMPro.TMP_Character', i4973[i + 0]));
  }
  i4968.m_CharacterTable = i4972
  var i4975 = i4969[22]
  var i4974 = []
  for(var i = 0; i < i4975.length; i += 2) {
  request.r(i4975[i + 0], i4975[i + 1], 2, i4974, '')
  }
  i4968.m_AtlasTextures = i4974
  i4968.m_AtlasTextureIndex = i4969[23]
  i4968.m_IsMultiAtlasTexturesEnabled = !!i4969[24]
  i4968.m_ClearDynamicDataOnBuild = !!i4969[25]
  var i4977 = i4969[26]
  var i4976 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4977.length; i += 1) {
    i4976.add(request.d('UnityEngine.TextCore.GlyphRect', i4977[i + 0]));
  }
  i4968.m_UsedGlyphRects = i4976
  var i4979 = i4969[27]
  var i4978 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4979.length; i += 1) {
    i4978.add(request.d('UnityEngine.TextCore.GlyphRect', i4979[i + 0]));
  }
  i4968.m_FreeGlyphRects = i4978
  i4968.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4969[28], i4968.m_fontInfo)
  i4968.m_AtlasWidth = i4969[29]
  i4968.m_AtlasHeight = i4969[30]
  i4968.m_AtlasPadding = i4969[31]
  i4968.m_AtlasRenderMode = i4969[32]
  var i4981 = i4969[33]
  var i4980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4981.length; i += 1) {
    i4980.add(request.d('TMPro.TMP_Glyph', i4981[i + 0]));
  }
  i4968.m_glyphInfoList = i4980
  i4968.m_KerningTable = request.d('TMPro.KerningTable', i4969[34], i4968.m_KerningTable)
  i4968.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4969[35], i4968.m_FontFeatureTable)
  var i4983 = i4969[36]
  var i4982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4983.length; i += 2) {
  request.r(i4983[i + 0], i4983[i + 1], 1, i4982, '')
  }
  i4968.fallbackFontAssets = i4982
  var i4985 = i4969[37]
  var i4984 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4985.length; i += 2) {
  request.r(i4985[i + 0], i4985[i + 1], 1, i4984, '')
  }
  i4968.m_FallbackFontAssetTable = i4984
  i4968.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4969[38], i4968.m_CreationSettings)
  var i4987 = i4969[39]
  var i4986 = []
  for(var i = 0; i < i4987.length; i += 1) {
    i4986.push( request.d('TMPro.TMP_FontWeightPair', i4987[i + 0]) );
  }
  i4968.m_FontWeightTable = i4986
  var i4989 = i4969[40]
  var i4988 = []
  for(var i = 0; i < i4989.length; i += 1) {
    i4988.push( request.d('TMPro.TMP_FontWeightPair', i4989[i + 0]) );
  }
  i4968.fontWeights = i4988
  return i4968
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4990 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4991 = data
  i4990.m_FaceIndex = i4991[0]
  i4990.m_FamilyName = i4991[1]
  i4990.m_StyleName = i4991[2]
  i4990.m_PointSize = i4991[3]
  i4990.m_Scale = i4991[4]
  i4990.m_UnitsPerEM = i4991[5]
  i4990.m_LineHeight = i4991[6]
  i4990.m_AscentLine = i4991[7]
  i4990.m_CapLine = i4991[8]
  i4990.m_MeanLine = i4991[9]
  i4990.m_Baseline = i4991[10]
  i4990.m_DescentLine = i4991[11]
  i4990.m_SuperscriptOffset = i4991[12]
  i4990.m_SuperscriptSize = i4991[13]
  i4990.m_SubscriptOffset = i4991[14]
  i4990.m_SubscriptSize = i4991[15]
  i4990.m_UnderlineOffset = i4991[16]
  i4990.m_UnderlineThickness = i4991[17]
  i4990.m_StrikethroughOffset = i4991[18]
  i4990.m_StrikethroughThickness = i4991[19]
  i4990.m_TabWidth = i4991[20]
  return i4990
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4994 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4995 = data
  i4994.m_Index = i4995[0]
  i4994.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4995[1], i4994.m_Metrics)
  i4994.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4995[2], i4994.m_GlyphRect)
  i4994.m_Scale = i4995[3]
  i4994.m_AtlasIndex = i4995[4]
  i4994.m_ClassDefinitionType = i4995[5]
  return i4994
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4996 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4997 = data
  i4996.m_Width = i4997[0]
  i4996.m_Height = i4997[1]
  i4996.m_HorizontalBearingX = i4997[2]
  i4996.m_HorizontalBearingY = i4997[3]
  i4996.m_HorizontalAdvance = i4997[4]
  return i4996
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4998 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4999 = data
  i4998.m_X = i4999[0]
  i4998.m_Y = i4999[1]
  i4998.m_Width = i4999[2]
  i4998.m_Height = i4999[3]
  return i4998
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5002 = root || request.c( 'TMPro.TMP_Character' )
  var i5003 = data
  i5002.m_ElementType = i5003[0]
  i5002.m_Unicode = i5003[1]
  i5002.m_GlyphIndex = i5003[2]
  i5002.m_Scale = i5003[3]
  return i5002
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5008 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5009 = data
  i5008.Name = i5009[0]
  i5008.PointSize = i5009[1]
  i5008.Scale = i5009[2]
  i5008.CharacterCount = i5009[3]
  i5008.LineHeight = i5009[4]
  i5008.Baseline = i5009[5]
  i5008.Ascender = i5009[6]
  i5008.CapHeight = i5009[7]
  i5008.Descender = i5009[8]
  i5008.CenterLine = i5009[9]
  i5008.SuperscriptOffset = i5009[10]
  i5008.SubscriptOffset = i5009[11]
  i5008.SubSize = i5009[12]
  i5008.Underline = i5009[13]
  i5008.UnderlineThickness = i5009[14]
  i5008.strikethrough = i5009[15]
  i5008.strikethroughThickness = i5009[16]
  i5008.TabWidth = i5009[17]
  i5008.Padding = i5009[18]
  i5008.AtlasWidth = i5009[19]
  i5008.AtlasHeight = i5009[20]
  return i5008
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5012 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5013 = data
  i5012.id = i5013[0]
  i5012.x = i5013[1]
  i5012.y = i5013[2]
  i5012.width = i5013[3]
  i5012.height = i5013[4]
  i5012.xOffset = i5013[5]
  i5012.yOffset = i5013[6]
  i5012.xAdvance = i5013[7]
  i5012.scale = i5013[8]
  return i5012
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5014 = root || request.c( 'TMPro.KerningTable' )
  var i5015 = data
  var i5017 = i5015[0]
  var i5016 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5017.length; i += 1) {
    i5016.add(request.d('TMPro.KerningPair', i5017[i + 0]));
  }
  i5014.kerningPairs = i5016
  return i5014
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5020 = root || request.c( 'TMPro.KerningPair' )
  var i5021 = data
  i5020.xOffset = i5021[0]
  i5020.m_FirstGlyph = i5021[1]
  i5020.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5021[2], i5020.m_FirstGlyphAdjustments)
  i5020.m_SecondGlyph = i5021[3]
  i5020.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5021[4], i5020.m_SecondGlyphAdjustments)
  i5020.m_IgnoreSpacingAdjustments = !!i5021[5]
  return i5020
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5022 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5023 = data
  var i5025 = i5023[0]
  var i5024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5025.length; i += 1) {
    i5024.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i5025[i + 0]));
  }
  i5022.m_GlyphPairAdjustmentRecords = i5024
  return i5022
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5028 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i5029 = data
  i5028.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5029[0], i5028.m_FirstAdjustmentRecord)
  i5028.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5029[1], i5028.m_SecondAdjustmentRecord)
  i5028.m_FeatureLookupFlags = i5029[2]
  return i5028
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5032 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5033 = data
  i5032.sourceFontFileName = i5033[0]
  i5032.sourceFontFileGUID = i5033[1]
  i5032.pointSizeSamplingMode = i5033[2]
  i5032.pointSize = i5033[3]
  i5032.padding = i5033[4]
  i5032.packingMode = i5033[5]
  i5032.atlasWidth = i5033[6]
  i5032.atlasHeight = i5033[7]
  i5032.characterSetSelectionMode = i5033[8]
  i5032.characterSequence = i5033[9]
  i5032.referencedFontAssetGUID = i5033[10]
  i5032.referencedTextAssetGUID = i5033[11]
  i5032.fontStyle = i5033[12]
  i5032.fontStyleModifier = i5033[13]
  i5032.renderMode = i5033[14]
  i5032.includeFontFeatures = !!i5033[15]
  return i5032
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5036 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5037 = data
  request.r(i5037[0], i5037[1], 0, i5036, 'regularTypeface')
  request.r(i5037[2], i5037[3], 0, i5036, 'italicTypeface')
  return i5036
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5038 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5039 = data
  i5038.useSafeMode = !!i5039[0]
  i5038.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5039[1], i5038.safeModeOptions)
  i5038.timeScale = i5039[2]
  i5038.unscaledTimeScale = i5039[3]
  i5038.useSmoothDeltaTime = !!i5039[4]
  i5038.maxSmoothUnscaledTime = i5039[5]
  i5038.rewindCallbackMode = i5039[6]
  i5038.showUnityEditorReport = !!i5039[7]
  i5038.logBehaviour = i5039[8]
  i5038.drawGizmos = !!i5039[9]
  i5038.defaultRecyclable = !!i5039[10]
  i5038.defaultAutoPlay = i5039[11]
  i5038.defaultUpdateType = i5039[12]
  i5038.defaultTimeScaleIndependent = !!i5039[13]
  i5038.defaultEaseType = i5039[14]
  i5038.defaultEaseOvershootOrAmplitude = i5039[15]
  i5038.defaultEasePeriod = i5039[16]
  i5038.defaultAutoKill = !!i5039[17]
  i5038.defaultLoopType = i5039[18]
  i5038.debugMode = !!i5039[19]
  i5038.debugStoreTargetId = !!i5039[20]
  i5038.showPreviewPanel = !!i5039[21]
  i5038.storeSettingsLocation = i5039[22]
  i5038.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5039[23], i5038.modules)
  i5038.createASMDEF = !!i5039[24]
  i5038.showPlayingTweens = !!i5039[25]
  i5038.showPausedTweens = !!i5039[26]
  return i5038
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5040 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5041 = data
  i5040.logBehaviour = i5041[0]
  i5040.nestedTweenFailureBehaviour = i5041[1]
  return i5040
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5042 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5043 = data
  i5042.showPanel = !!i5043[0]
  i5042.audioEnabled = !!i5043[1]
  i5042.physicsEnabled = !!i5043[2]
  i5042.physics2DEnabled = !!i5043[3]
  i5042.spriteEnabled = !!i5043[4]
  i5042.uiEnabled = !!i5043[5]
  i5042.textMeshProEnabled = !!i5043[6]
  i5042.tk2DEnabled = !!i5043[7]
  i5042.deAudioEnabled = !!i5043[8]
  i5042.deUnityExtendedEnabled = !!i5043[9]
  i5042.epoOutlineEnabled = !!i5043[10]
  return i5042
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5044 = root || request.c( 'TMPro.TMP_Settings' )
  var i5045 = data
  i5044.m_enableWordWrapping = !!i5045[0]
  i5044.m_enableKerning = !!i5045[1]
  i5044.m_enableExtraPadding = !!i5045[2]
  i5044.m_enableTintAllSprites = !!i5045[3]
  i5044.m_enableParseEscapeCharacters = !!i5045[4]
  i5044.m_EnableRaycastTarget = !!i5045[5]
  i5044.m_GetFontFeaturesAtRuntime = !!i5045[6]
  i5044.m_missingGlyphCharacter = i5045[7]
  i5044.m_warningsDisabled = !!i5045[8]
  request.r(i5045[9], i5045[10], 0, i5044, 'm_defaultFontAsset')
  i5044.m_defaultFontAssetPath = i5045[11]
  i5044.m_defaultFontSize = i5045[12]
  i5044.m_defaultAutoSizeMinRatio = i5045[13]
  i5044.m_defaultAutoSizeMaxRatio = i5045[14]
  i5044.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5045[15], i5045[16] )
  i5044.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5045[17], i5045[18] )
  i5044.m_autoSizeTextContainer = !!i5045[19]
  i5044.m_IsTextObjectScaleStatic = !!i5045[20]
  var i5047 = i5045[21]
  var i5046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5047.length; i += 2) {
  request.r(i5047[i + 0], i5047[i + 1], 1, i5046, '')
  }
  i5044.m_fallbackFontAssets = i5046
  i5044.m_matchMaterialPreset = !!i5045[22]
  request.r(i5045[23], i5045[24], 0, i5044, 'm_defaultSpriteAsset')
  i5044.m_defaultSpriteAssetPath = i5045[25]
  i5044.m_enableEmojiSupport = !!i5045[26]
  i5044.m_MissingCharacterSpriteUnicode = i5045[27]
  i5044.m_defaultColorGradientPresetsPath = i5045[28]
  request.r(i5045[29], i5045[30], 0, i5044, 'm_defaultStyleSheet')
  i5044.m_StyleSheetsResourcePath = i5045[31]
  request.r(i5045[32], i5045[33], 0, i5044, 'm_leadingCharacters')
  request.r(i5045[34], i5045[35], 0, i5044, 'm_followingCharacters')
  i5044.m_UseModernHangulLineBreakingRules = !!i5045[36]
  return i5044
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5048 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i5049 = data
  i5048.m_GlyphIndex = i5049[0]
  i5048.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i5049[1], i5048.m_GlyphValueRecord)
  return i5048
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i5050 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i5051 = data
  i5050.m_XPlacement = i5051[0]
  i5050.m_YPlacement = i5051[1]
  i5050.m_XAdvance = i5051[2]
  i5050.m_YAdvance = i5051[3]
  return i5050
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5052 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5053 = data
  i5052.hashCode = i5053[0]
  request.r(i5053[1], i5053[2], 0, i5052, 'material')
  i5052.materialHashCode = i5053[3]
  request.r(i5053[4], i5053[5], 0, i5052, 'spriteSheet')
  var i5055 = i5053[6]
  var i5054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5055.length; i += 1) {
    i5054.add(request.d('TMPro.TMP_Sprite', i5055[i + 0]));
  }
  i5052.spriteInfoList = i5054
  var i5057 = i5053[7]
  var i5056 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5057.length; i += 2) {
  request.r(i5057[i + 0], i5057[i + 1], 1, i5056, '')
  }
  i5052.fallbackSpriteAssets = i5056
  i5052.m_Version = i5053[8]
  i5052.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5053[9], i5052.m_FaceInfo)
  var i5059 = i5053[10]
  var i5058 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5059.length; i += 1) {
    i5058.add(request.d('TMPro.TMP_SpriteCharacter', i5059[i + 0]));
  }
  i5052.m_SpriteCharacterTable = i5058
  var i5061 = i5053[11]
  var i5060 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5061.length; i += 1) {
    i5060.add(request.d('TMPro.TMP_SpriteGlyph', i5061[i + 0]));
  }
  i5052.m_SpriteGlyphTable = i5060
  return i5052
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5064 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5065 = data
  i5064.name = i5065[0]
  i5064.hashCode = i5065[1]
  i5064.unicode = i5065[2]
  i5064.pivot = new pc.Vec2( i5065[3], i5065[4] )
  request.r(i5065[5], i5065[6], 0, i5064, 'sprite')
  i5064.id = i5065[7]
  i5064.x = i5065[8]
  i5064.y = i5065[9]
  i5064.width = i5065[10]
  i5064.height = i5065[11]
  i5064.xOffset = i5065[12]
  i5064.yOffset = i5065[13]
  i5064.xAdvance = i5065[14]
  i5064.scale = i5065[15]
  return i5064
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5070 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5071 = data
  i5070.m_Name = i5071[0]
  i5070.m_HashCode = i5071[1]
  i5070.m_ElementType = i5071[2]
  i5070.m_Unicode = i5071[3]
  i5070.m_GlyphIndex = i5071[4]
  i5070.m_Scale = i5071[5]
  return i5070
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5074 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5075 = data
  request.r(i5075[0], i5075[1], 0, i5074, 'sprite')
  i5074.m_Index = i5075[2]
  i5074.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5075[3], i5074.m_Metrics)
  i5074.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5075[4], i5074.m_GlyphRect)
  i5074.m_Scale = i5075[5]
  i5074.m_AtlasIndex = i5075[6]
  i5074.m_ClassDefinitionType = i5075[7]
  return i5074
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5076 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5077 = data
  var i5079 = i5077[0]
  var i5078 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5079.length; i += 1) {
    i5078.add(request.d('TMPro.TMP_Style', i5079[i + 0]));
  }
  i5076.m_StyleList = i5078
  return i5076
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5082 = root || request.c( 'TMPro.TMP_Style' )
  var i5083 = data
  i5082.m_Name = i5083[0]
  i5082.m_HashCode = i5083[1]
  i5082.m_OpeningDefinition = i5083[2]
  i5082.m_ClosingDefinition = i5083[3]
  i5082.m_OpeningTagArray = i5083[4]
  i5082.m_ClosingTagArray = i5083[5]
  i5082.m_OpeningTagUnicodeArray = i5083[6]
  i5082.m_ClosingTagUnicodeArray = i5083[7]
  return i5082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5085 = data
  var i5087 = i5085[0]
  var i5086 = []
  for(var i = 0; i < i5087.length; i += 1) {
    i5086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5087[i + 0]) );
  }
  i5084.files = i5086
  i5084.componentToPrefabIds = i5085[1]
  return i5084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5091 = data
  i5090.path = i5091[0]
  request.r(i5091[1], i5091[2], 0, i5090, 'unityObject')
  return i5090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5093 = data
  var i5095 = i5093[0]
  var i5094 = []
  for(var i = 0; i < i5095.length; i += 1) {
    i5094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5095[i + 0]) );
  }
  i5092.scriptsExecutionOrder = i5094
  var i5097 = i5093[1]
  var i5096 = []
  for(var i = 0; i < i5097.length; i += 1) {
    i5096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5097[i + 0]) );
  }
  i5092.sortingLayers = i5096
  var i5099 = i5093[2]
  var i5098 = []
  for(var i = 0; i < i5099.length; i += 1) {
    i5098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5099[i + 0]) );
  }
  i5092.cullingLayers = i5098
  i5092.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5093[3], i5092.timeSettings)
  i5092.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5093[4], i5092.physicsSettings)
  i5092.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5093[5], i5092.physics2DSettings)
  i5092.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5093[6], i5092.qualitySettings)
  i5092.enableRealtimeShadows = !!i5093[7]
  i5092.enableAutoInstancing = !!i5093[8]
  i5092.enableDynamicBatching = !!i5093[9]
  i5092.lightmapEncodingQuality = i5093[10]
  i5092.desiredColorSpace = i5093[11]
  var i5101 = i5093[12]
  var i5100 = []
  for(var i = 0; i < i5101.length; i += 1) {
    i5100.push( i5101[i + 0] );
  }
  i5092.allTags = i5100
  return i5092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5105 = data
  i5104.name = i5105[0]
  i5104.value = i5105[1]
  return i5104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5109 = data
  i5108.id = i5109[0]
  i5108.name = i5109[1]
  i5108.value = i5109[2]
  return i5108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5113 = data
  i5112.id = i5113[0]
  i5112.name = i5113[1]
  return i5112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5115 = data
  i5114.fixedDeltaTime = i5115[0]
  i5114.maximumDeltaTime = i5115[1]
  i5114.timeScale = i5115[2]
  i5114.maximumParticleTimestep = i5115[3]
  return i5114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5117 = data
  i5116.gravity = new pc.Vec3( i5117[0], i5117[1], i5117[2] )
  i5116.defaultSolverIterations = i5117[3]
  i5116.bounceThreshold = i5117[4]
  i5116.autoSyncTransforms = !!i5117[5]
  i5116.autoSimulation = !!i5117[6]
  var i5119 = i5117[7]
  var i5118 = []
  for(var i = 0; i < i5119.length; i += 1) {
    i5118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5119[i + 0]) );
  }
  i5116.collisionMatrix = i5118
  return i5116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5123 = data
  i5122.enabled = !!i5123[0]
  i5122.layerId = i5123[1]
  i5122.otherLayerId = i5123[2]
  return i5122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5125 = data
  request.r(i5125[0], i5125[1], 0, i5124, 'material')
  i5124.gravity = new pc.Vec2( i5125[2], i5125[3] )
  i5124.positionIterations = i5125[4]
  i5124.velocityIterations = i5125[5]
  i5124.velocityThreshold = i5125[6]
  i5124.maxLinearCorrection = i5125[7]
  i5124.maxAngularCorrection = i5125[8]
  i5124.maxTranslationSpeed = i5125[9]
  i5124.maxRotationSpeed = i5125[10]
  i5124.baumgarteScale = i5125[11]
  i5124.baumgarteTOIScale = i5125[12]
  i5124.timeToSleep = i5125[13]
  i5124.linearSleepTolerance = i5125[14]
  i5124.angularSleepTolerance = i5125[15]
  i5124.defaultContactOffset = i5125[16]
  i5124.autoSimulation = !!i5125[17]
  i5124.queriesHitTriggers = !!i5125[18]
  i5124.queriesStartInColliders = !!i5125[19]
  i5124.callbacksOnDisable = !!i5125[20]
  i5124.reuseCollisionCallbacks = !!i5125[21]
  i5124.autoSyncTransforms = !!i5125[22]
  var i5127 = i5125[23]
  var i5126 = []
  for(var i = 0; i < i5127.length; i += 1) {
    i5126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5127[i + 0]) );
  }
  i5124.collisionMatrix = i5126
  return i5124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5131 = data
  i5130.enabled = !!i5131[0]
  i5130.layerId = i5131[1]
  i5130.otherLayerId = i5131[2]
  return i5130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5133 = data
  var i5135 = i5133[0]
  var i5134 = []
  for(var i = 0; i < i5135.length; i += 1) {
    i5134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5135[i + 0]) );
  }
  i5132.qualityLevels = i5134
  var i5137 = i5133[1]
  var i5136 = []
  for(var i = 0; i < i5137.length; i += 1) {
    i5136.push( i5137[i + 0] );
  }
  i5132.names = i5136
  i5132.shadows = i5133[2]
  i5132.anisotropicFiltering = i5133[3]
  i5132.antiAliasing = i5133[4]
  i5132.lodBias = i5133[5]
  i5132.shadowCascades = i5133[6]
  i5132.shadowDistance = i5133[7]
  i5132.shadowmaskMode = i5133[8]
  i5132.shadowProjection = i5133[9]
  i5132.shadowResolution = i5133[10]
  i5132.softParticles = !!i5133[11]
  i5132.softVegetation = !!i5133[12]
  i5132.activeColorSpace = i5133[13]
  i5132.desiredColorSpace = i5133[14]
  i5132.masterTextureLimit = i5133[15]
  i5132.maxQueuedFrames = i5133[16]
  i5132.particleRaycastBudget = i5133[17]
  i5132.pixelLightCount = i5133[18]
  i5132.realtimeReflectionProbes = !!i5133[19]
  i5132.shadowCascade2Split = i5133[20]
  i5132.shadowCascade4Split = new pc.Vec3( i5133[21], i5133[22], i5133[23] )
  i5132.streamingMipmapsActive = !!i5133[24]
  i5132.vSyncCount = i5133[25]
  i5132.asyncUploadBufferSize = i5133[26]
  i5132.asyncUploadTimeSlice = i5133[27]
  i5132.billboardsFaceCameraPosition = !!i5133[28]
  i5132.shadowNearPlaneOffset = i5133[29]
  i5132.streamingMipmapsMemoryBudget = i5133[30]
  i5132.maximumLODLevel = i5133[31]
  i5132.streamingMipmapsAddAllCameras = !!i5133[32]
  i5132.streamingMipmapsMaxLevelReduction = i5133[33]
  i5132.streamingMipmapsRenderersPerFrame = i5133[34]
  i5132.resolutionScalingFixedDPIFactor = i5133[35]
  i5132.streamingMipmapsMaxFileIORequests = i5133[36]
  i5132.currentQualityLevel = i5133[37]
  return i5132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5143 = data
  i5142.weight = i5143[0]
  i5142.vertices = i5143[1]
  i5142.normals = i5143[2]
  i5142.tangents = i5143[3]
  return i5142
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5144 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5145 = data
  request.r(i5145[0], i5145[1], 0, i5144, 'm_ObjectArgument')
  i5144.m_ObjectArgumentAssemblyTypeName = i5145[2]
  i5144.m_IntArgument = i5145[3]
  i5144.m_FloatArgument = i5145[4]
  i5144.m_StringArgument = i5145[5]
  i5144.m_BoolArgument = !!i5145[6]
  return i5144
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5146 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5147 = data
  i5146.xPlacement = i5147[0]
  i5146.yPlacement = i5147[1]
  i5146.xAdvance = i5147[2]
  i5146.yAdvance = i5147[3]
  return i5146
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[3],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[3],"80":[25],"81":[82],"83":[82],"9":[8],"84":[85],"86":[87],"88":[85],"89":[8],"90":[8],"11":[9],"18":[19,8],"91":[8],"10":[9],"92":[8],"93":[8],"94":[8],"95":[8],"96":[8],"97":[8],"98":[8],"38":[8],"99":[8],"16":[19,8],"100":[8],"101":[8],"102":[8],"103":[8],"17":[19,8],"104":[8],"105":[6],"106":[6],"7":[6],"107":[6],"108":[3],"109":[3],"110":[111],"112":[3],"113":[114],"115":[8],"116":[19,8],"27":[25],"35":[19,8],"117":[118,25],"119":[25],"120":[25,29],"121":[58],"122":[66],"123":[114],"124":[125],"126":[8],"127":[25,8],"33":[8,19],"128":[8],"129":[19,8],"130":[25],"131":[19,8],"132":[8],"133":[85]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","UnityEngine.UI.Text","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.BoxCollider2D","DropZone","UnityEngine.Sprite","UnityEngine.MeshRenderer","UnityEngine.Material","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","UnityEngine.MeshFilter","UnityEngine.Mesh","DraggableItem","UnityEngine.CanvasGroup","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","Spine.Unity.SkeletonGraphic","DG.Tweening.DOTweenAnimation","UnityEngine.Font","UnityEngine.UI.Mask","IQFill","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "1.1";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "APG_V05_TrangHT_AnhPD";

Deserializers.lunaAppID = "29138";

Deserializers.projectId = "cc2b1186a2056e546bb13add5b988034";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1718";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4621";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "facb51fb-e8ad-4e3d-a88c-7ea803db230a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

