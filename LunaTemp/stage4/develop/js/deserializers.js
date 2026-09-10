var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5928 = root || request.c( 'UnityEngine.JointSpring' )
  var i5929 = data
  i5928.spring = i5929[0]
  i5928.damper = i5929[1]
  i5928.targetPosition = i5929[2]
  return i5928
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5930 = root || request.c( 'UnityEngine.JointMotor' )
  var i5931 = data
  i5930.m_TargetVelocity = i5931[0]
  i5930.m_Force = i5931[1]
  i5930.m_FreeSpin = i5931[2]
  return i5930
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5932 = root || request.c( 'UnityEngine.JointLimits' )
  var i5933 = data
  i5932.m_Min = i5933[0]
  i5932.m_Max = i5933[1]
  i5932.m_Bounciness = i5933[2]
  i5932.m_BounceMinVelocity = i5933[3]
  i5932.m_ContactDistance = i5933[4]
  i5932.minBounce = i5933[5]
  i5932.maxBounce = i5933[6]
  return i5932
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5934 = root || request.c( 'UnityEngine.JointDrive' )
  var i5935 = data
  i5934.m_PositionSpring = i5935[0]
  i5934.m_PositionDamper = i5935[1]
  i5934.m_MaximumForce = i5935[2]
  i5934.m_UseAcceleration = i5935[3]
  return i5934
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5936 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5937 = data
  i5936.m_Spring = i5937[0]
  i5936.m_Damper = i5937[1]
  return i5936
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5938 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5939 = data
  i5938.m_Limit = i5939[0]
  i5938.m_Bounciness = i5939[1]
  i5938.m_ContactDistance = i5939[2]
  return i5938
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5940 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5941 = data
  i5940.m_ExtremumSlip = i5941[0]
  i5940.m_ExtremumValue = i5941[1]
  i5940.m_AsymptoteSlip = i5941[2]
  i5940.m_AsymptoteValue = i5941[3]
  i5940.m_Stiffness = i5941[4]
  return i5940
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5942 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5943 = data
  i5942.m_LowerAngle = i5943[0]
  i5942.m_UpperAngle = i5943[1]
  return i5942
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5944 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5945 = data
  i5944.m_MotorSpeed = i5945[0]
  i5944.m_MaximumMotorTorque = i5945[1]
  return i5944
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5946 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5947 = data
  i5946.m_DampingRatio = i5947[0]
  i5946.m_Frequency = i5947[1]
  i5946.m_Angle = i5947[2]
  return i5946
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5948 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5949 = data
  i5948.m_LowerTranslation = i5949[0]
  i5948.m_UpperTranslation = i5949[1]
  return i5948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5951 = data
  i5950.name = i5951[0]
  i5950.width = i5951[1]
  i5950.height = i5951[2]
  i5950.mipmapCount = i5951[3]
  i5950.anisoLevel = i5951[4]
  i5950.filterMode = i5951[5]
  i5950.hdr = !!i5951[6]
  i5950.format = i5951[7]
  i5950.wrapMode = i5951[8]
  i5950.alphaIsTransparency = !!i5951[9]
  i5950.alphaSource = i5951[10]
  i5950.graphicsFormat = i5951[11]
  i5950.sRGBTexture = !!i5951[12]
  i5950.desiredColorSpace = i5951[13]
  i5950.wrapU = i5951[14]
  i5950.wrapV = i5951[15]
  return i5950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5952 = root || new pc.UnityMaterial()
  var i5953 = data
  i5952.name = i5953[0]
  request.r(i5953[1], i5953[2], 0, i5952, 'shader')
  i5952.renderQueue = i5953[3]
  i5952.enableInstancing = !!i5953[4]
  var i5955 = i5953[5]
  var i5954 = []
  for(var i = 0; i < i5955.length; i += 1) {
    i5954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5955[i + 0]) );
  }
  i5952.floatParameters = i5954
  var i5957 = i5953[6]
  var i5956 = []
  for(var i = 0; i < i5957.length; i += 1) {
    i5956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5957[i + 0]) );
  }
  i5952.colorParameters = i5956
  var i5959 = i5953[7]
  var i5958 = []
  for(var i = 0; i < i5959.length; i += 1) {
    i5958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5959[i + 0]) );
  }
  i5952.vectorParameters = i5958
  var i5961 = i5953[8]
  var i5960 = []
  for(var i = 0; i < i5961.length; i += 1) {
    i5960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5961[i + 0]) );
  }
  i5952.textureParameters = i5960
  var i5963 = i5953[9]
  var i5962 = []
  for(var i = 0; i < i5963.length; i += 1) {
    i5962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5963[i + 0]) );
  }
  i5952.materialFlags = i5962
  return i5952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5967 = data
  i5966.name = i5967[0]
  i5966.value = i5967[1]
  return i5966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5971 = data
  i5970.name = i5971[0]
  i5970.value = new pc.Color(i5971[1], i5971[2], i5971[3], i5971[4])
  return i5970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5975 = data
  i5974.name = i5975[0]
  i5974.value = new pc.Vec4( i5975[1], i5975[2], i5975[3], i5975[4] )
  return i5974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5979 = data
  i5978.name = i5979[0]
  request.r(i5979[1], i5979[2], 0, i5978, 'value')
  return i5978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5983 = data
  i5982.name = i5983[0]
  i5982.enabled = !!i5983[1]
  return i5982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5985 = data
  i5984.name = i5985[0]
  i5984.index = i5985[1]
  i5984.startup = !!i5985[2]
  return i5984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5987 = data
  i5986.aspect = i5987[0]
  i5986.orthographic = !!i5987[1]
  i5986.orthographicSize = i5987[2]
  i5986.backgroundColor = new pc.Color(i5987[3], i5987[4], i5987[5], i5987[6])
  i5986.nearClipPlane = i5987[7]
  i5986.farClipPlane = i5987[8]
  i5986.fieldOfView = i5987[9]
  i5986.depth = i5987[10]
  i5986.clearFlags = i5987[11]
  i5986.cullingMask = i5987[12]
  i5986.rect = i5987[13]
  request.r(i5987[14], i5987[15], 0, i5986, 'targetTexture')
  i5986.usePhysicalProperties = !!i5987[16]
  i5986.focalLength = i5987[17]
  i5986.sensorSize = new pc.Vec2( i5987[18], i5987[19] )
  i5986.lensShift = new pc.Vec2( i5987[20], i5987[21] )
  i5986.gateFit = i5987[22]
  i5986.commandBufferCount = i5987[23]
  i5986.cameraType = i5987[24]
  i5986.enabled = !!i5987[25]
  return i5986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5989 = data
  i5988.name = i5989[0]
  i5988.tagId = i5989[1]
  i5988.enabled = !!i5989[2]
  i5988.isStatic = !!i5989[3]
  i5988.layer = i5989[4]
  return i5988
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5990 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5991 = data
  request.r(i5991[0], i5991[1], 0, i5990, 'm_FirstSelected')
  i5990.m_sendNavigationEvents = !!i5991[2]
  i5990.m_DragThreshold = i5991[3]
  return i5990
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5992 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5993 = data
  i5992.m_HorizontalAxis = i5993[0]
  i5992.m_VerticalAxis = i5993[1]
  i5992.m_SubmitButton = i5993[2]
  i5992.m_CancelButton = i5993[3]
  i5992.m_InputActionsPerSecond = i5993[4]
  i5992.m_RepeatDelay = i5993[5]
  i5992.m_ForceModuleActive = !!i5993[6]
  i5992.m_SendPointerHoverToParent = !!i5993[7]
  return i5992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5995 = data
  i5994.pivot = new pc.Vec2( i5995[0], i5995[1] )
  i5994.anchorMin = new pc.Vec2( i5995[2], i5995[3] )
  i5994.anchorMax = new pc.Vec2( i5995[4], i5995[5] )
  i5994.sizeDelta = new pc.Vec2( i5995[6], i5995[7] )
  i5994.anchoredPosition3D = new pc.Vec3( i5995[8], i5995[9], i5995[10] )
  i5994.rotation = new pc.Quat(i5995[11], i5995[12], i5995[13], i5995[14])
  i5994.scale = new pc.Vec3( i5995[15], i5995[16], i5995[17] )
  return i5994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5997 = data
  i5996.planeDistance = i5997[0]
  i5996.referencePixelsPerUnit = i5997[1]
  i5996.isFallbackOverlay = !!i5997[2]
  i5996.renderMode = i5997[3]
  i5996.renderOrder = i5997[4]
  i5996.sortingLayerName = i5997[5]
  i5996.sortingOrder = i5997[6]
  i5996.scaleFactor = i5997[7]
  request.r(i5997[8], i5997[9], 0, i5996, 'worldCamera')
  i5996.overrideSorting = !!i5997[10]
  i5996.pixelPerfect = !!i5997[11]
  i5996.targetDisplay = i5997[12]
  i5996.overridePixelPerfect = !!i5997[13]
  i5996.enabled = !!i5997[14]
  return i5996
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5998 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5999 = data
  i5998.m_UiScaleMode = i5999[0]
  i5998.m_ReferencePixelsPerUnit = i5999[1]
  i5998.m_ScaleFactor = i5999[2]
  i5998.m_ReferenceResolution = new pc.Vec2( i5999[3], i5999[4] )
  i5998.m_ScreenMatchMode = i5999[5]
  i5998.m_MatchWidthOrHeight = i5999[6]
  i5998.m_PhysicalUnit = i5999[7]
  i5998.m_FallbackScreenDPI = i5999[8]
  i5998.m_DefaultSpriteDPI = i5999[9]
  i5998.m_DynamicPixelsPerUnit = i5999[10]
  i5998.m_PresetInfoIsWorld = !!i5999[11]
  return i5998
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6000 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6001 = data
  i6000.m_IgnoreReversedGraphics = !!i6001[0]
  i6000.m_BlockingObjects = i6001[1]
  i6000.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6001[2] )
  return i6000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6003 = data
  i6002.cullTransparentMesh = !!i6003[0]
  return i6002
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6004 = root || request.c( 'UnityEngine.UI.Image' )
  var i6005 = data
  request.r(i6005[0], i6005[1], 0, i6004, 'm_Sprite')
  i6004.m_Type = i6005[2]
  i6004.m_PreserveAspect = !!i6005[3]
  i6004.m_FillCenter = !!i6005[4]
  i6004.m_FillMethod = i6005[5]
  i6004.m_FillAmount = i6005[6]
  i6004.m_FillClockwise = !!i6005[7]
  i6004.m_FillOrigin = i6005[8]
  i6004.m_UseSpriteMesh = !!i6005[9]
  i6004.m_PixelsPerUnitMultiplier = i6005[10]
  request.r(i6005[11], i6005[12], 0, i6004, 'm_Material')
  i6004.m_Maskable = !!i6005[13]
  i6004.m_Color = new pc.Color(i6005[14], i6005[15], i6005[16], i6005[17])
  i6004.m_RaycastTarget = !!i6005[18]
  i6004.m_RaycastPadding = new pc.Vec4( i6005[19], i6005[20], i6005[21], i6005[22] )
  return i6004
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i6006 = root || request.c( 'UnityEngine.UI.Text' )
  var i6007 = data
  i6006.m_FontData = request.d('UnityEngine.UI.FontData', i6007[0], i6006.m_FontData)
  i6006.m_Text = i6007[1]
  request.r(i6007[2], i6007[3], 0, i6006, 'm_Material')
  i6006.m_Maskable = !!i6007[4]
  i6006.m_Color = new pc.Color(i6007[5], i6007[6], i6007[7], i6007[8])
  i6006.m_RaycastTarget = !!i6007[9]
  i6006.m_RaycastPadding = new pc.Vec4( i6007[10], i6007[11], i6007[12], i6007[13] )
  return i6006
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i6008 = root || request.c( 'UnityEngine.UI.FontData' )
  var i6009 = data
  request.r(i6009[0], i6009[1], 0, i6008, 'm_Font')
  i6008.m_FontSize = i6009[2]
  i6008.m_FontStyle = i6009[3]
  i6008.m_BestFit = !!i6009[4]
  i6008.m_MinSize = i6009[5]
  i6008.m_MaxSize = i6009[6]
  i6008.m_Alignment = i6009[7]
  i6008.m_AlignByGeometry = !!i6009[8]
  i6008.m_RichText = !!i6009[9]
  i6008.m_HorizontalOverflow = i6009[10]
  i6008.m_VerticalOverflow = i6009[11]
  i6008.m_LineSpacing = i6009[12]
  return i6008
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i6010 = root || request.c( 'UnityEngine.UI.Slider' )
  var i6011 = data
  request.r(i6011[0], i6011[1], 0, i6010, 'm_FillRect')
  request.r(i6011[2], i6011[3], 0, i6010, 'm_HandleRect')
  i6010.m_Direction = i6011[4]
  i6010.m_MinValue = i6011[5]
  i6010.m_MaxValue = i6011[6]
  i6010.m_WholeNumbers = !!i6011[7]
  i6010.m_Value = i6011[8]
  i6010.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i6011[9], i6010.m_OnValueChanged)
  i6010.m_Navigation = request.d('UnityEngine.UI.Navigation', i6011[10], i6010.m_Navigation)
  i6010.m_Transition = i6011[11]
  i6010.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6011[12], i6010.m_Colors)
  i6010.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6011[13], i6010.m_SpriteState)
  i6010.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6011[14], i6010.m_AnimationTriggers)
  i6010.m_Interactable = !!i6011[15]
  request.r(i6011[16], i6011[17], 0, i6010, 'm_TargetGraphic')
  return i6010
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i6012 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i6013 = data
  i6012.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6013[0], i6012.m_PersistentCalls)
  return i6012
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6014 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6015 = data
  var i6017 = i6015[0]
  var i6016 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6017.length; i += 1) {
    i6016.add(request.d('UnityEngine.Events.PersistentCall', i6017[i + 0]));
  }
  i6014.m_Calls = i6016
  return i6014
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6020 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6021 = data
  request.r(i6021[0], i6021[1], 0, i6020, 'm_Target')
  i6020.m_TargetAssemblyTypeName = i6021[2]
  i6020.m_MethodName = i6021[3]
  i6020.m_Mode = i6021[4]
  i6020.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6021[5], i6020.m_Arguments)
  i6020.m_CallState = i6021[6]
  return i6020
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6022 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6023 = data
  i6022.m_Mode = i6023[0]
  i6022.m_WrapAround = !!i6023[1]
  request.r(i6023[2], i6023[3], 0, i6022, 'm_SelectOnUp')
  request.r(i6023[4], i6023[5], 0, i6022, 'm_SelectOnDown')
  request.r(i6023[6], i6023[7], 0, i6022, 'm_SelectOnLeft')
  request.r(i6023[8], i6023[9], 0, i6022, 'm_SelectOnRight')
  return i6022
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6024 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6025 = data
  i6024.m_NormalColor = new pc.Color(i6025[0], i6025[1], i6025[2], i6025[3])
  i6024.m_HighlightedColor = new pc.Color(i6025[4], i6025[5], i6025[6], i6025[7])
  i6024.m_PressedColor = new pc.Color(i6025[8], i6025[9], i6025[10], i6025[11])
  i6024.m_SelectedColor = new pc.Color(i6025[12], i6025[13], i6025[14], i6025[15])
  i6024.m_DisabledColor = new pc.Color(i6025[16], i6025[17], i6025[18], i6025[19])
  i6024.m_ColorMultiplier = i6025[20]
  i6024.m_FadeDuration = i6025[21]
  return i6024
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6026 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6027 = data
  request.r(i6027[0], i6027[1], 0, i6026, 'm_HighlightedSprite')
  request.r(i6027[2], i6027[3], 0, i6026, 'm_PressedSprite')
  request.r(i6027[4], i6027[5], 0, i6026, 'm_SelectedSprite')
  request.r(i6027[6], i6027[7], 0, i6026, 'm_DisabledSprite')
  return i6026
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6028 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6029 = data
  i6028.m_NormalTrigger = i6029[0]
  i6028.m_HighlightedTrigger = i6029[1]
  i6028.m_PressedTrigger = i6029[2]
  i6028.m_SelectedTrigger = i6029[3]
  i6028.m_DisabledTrigger = i6029[4]
  return i6028
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i6030 = root || request.c( 'UnityEngine.UI.Mask' )
  var i6031 = data
  i6030.m_ShowMaskGraphic = !!i6031[0]
  return i6030
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i6032 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i6033 = data
  request.r(i6033[0], i6033[1], 0, i6032, 'skeletonDataAsset')
  request.r(i6033[2], i6033[3], 0, i6032, 'additiveMaterial')
  request.r(i6033[4], i6033[5], 0, i6032, 'multiplyMaterial')
  request.r(i6033[6], i6033[7], 0, i6032, 'screenMaterial')
  i6032.initialSkinName = i6033[8]
  i6032.initialFlipX = !!i6033[9]
  i6032.initialFlipY = !!i6033[10]
  i6032.startingAnimation = i6033[11]
  i6032.startingLoop = !!i6033[12]
  i6032.timeScale = i6033[13]
  i6032.freeze = !!i6033[14]
  i6032.layoutScaleMode = i6033[15]
  i6032.updateWhenInvisible = i6033[16]
  i6032.allowMultipleCanvasRenderers = !!i6033[17]
  var i6035 = i6033[18]
  var i6034 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i6035.length; i += 2) {
  request.r(i6035[i + 0], i6035[i + 1], 1, i6034, '')
  }
  i6032.canvasRenderers = i6034
  i6032.enableSeparatorSlots = !!i6033[19]
  i6032.updateSeparatorPartLocation = !!i6033[20]
  i6032.updateSeparatorPartScale = !!i6033[21]
  i6032.disableMeshAssignmentOnOverride = !!i6033[22]
  i6032.referenceSize = new pc.Vec2( i6033[23], i6033[24] )
  i6032.referenceScale = i6033[25]
  i6032.rectTransformSize = new pc.Vec2( i6033[26], i6033[27] )
  i6032.editReferenceRect = !!i6033[28]
  var i6037 = i6033[29]
  var i6036 = []
  for(var i = 0; i < i6037.length; i += 1) {
    i6036.push( i6037[i + 0] );
  }
  i6032.separatorSlotNames = i6036
  var i6039 = i6033[30]
  var i6038 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i6039.length; i += 2) {
  request.r(i6039[i + 0], i6039[i + 1], 1, i6038, '')
  }
  i6032.separatorParts = i6038
  i6032.meshGenerator = request.d('Spine.Unity.MeshGenerator', i6033[31], i6032.meshGenerator)
  i6032.updateTiming = i6033[32]
  i6032.unscaledTime = !!i6033[33]
  request.r(i6033[34], i6033[35], 0, i6032, 'm_Material')
  i6032.m_Maskable = !!i6033[36]
  i6032.m_Color = new pc.Color(i6033[37], i6033[38], i6033[39], i6033[40])
  i6032.m_RaycastTarget = !!i6033[41]
  i6032.m_RaycastPadding = new pc.Vec4( i6033[42], i6033[43], i6033[44], i6033[45] )
  return i6032
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i6046 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i6047 = data
  i6046.settings = request.d('Spine.Unity.MeshGenerator+Settings', i6047[0], i6046.settings)
  return i6046
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i6048 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i6049 = data
  i6048.useClipping = !!i6049[0]
  i6048.zSpacing = i6049[1]
  i6048.pmaVertexColors = !!i6049[2]
  i6048.tintBlack = !!i6049[3]
  i6048.canvasGroupTintBlack = !!i6049[4]
  i6048.calculateTangents = !!i6049[5]
  i6048.addNormals = !!i6049[6]
  i6048.immutableTriangles = !!i6049[7]
  return i6048
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i6050 = root || request.c( 'AnimationController' )
  var i6051 = data
  i6050.hasSpecialItem = !!i6051[0]
  request.r(i6051[1], i6051[2], 0, i6050, 'specialItem')
  i6050.activeSpecial = !!i6051[3]
  request.r(i6051[4], i6051[5], 0, i6050, 'skeleton')
  var i6053 = i6051[6]
  var i6052 = new (System.Collections.Generic.List$1(Bridge.ns('DropAction')))
  for(var i = 0; i < i6053.length; i += 1) {
    i6052.add(request.d('DropAction', i6053[i + 0]));
  }
  i6050.actions = i6052
  return i6050
}

Deserializers["DropAction"] = function (request, data, root) {
  var i6056 = root || request.c( 'DropAction' )
  var i6057 = data
  request.r(i6057[0], i6057[1], 0, i6056, 'Item')
  i6056.DelayTime = i6057[2]
  var i6059 = i6057[3]
  var i6058 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i6059.length; i += 1) {
    i6058.add(request.d('Anim', i6059[i + 0]));
  }
  i6056.AnimNormal = i6058
  var i6061 = i6057[4]
  var i6060 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i6061.length; i += 1) {
    i6060.add(request.d('Anim', i6061[i + 0]));
  }
  i6056.AnimSpecial = i6060
  return i6056
}

Deserializers["Anim"] = function (request, data, root) {
  var i6064 = root || request.c( 'Anim' )
  var i6065 = data
  i6064.KeyAnim = i6065[0]
  var i6067 = i6065[1]
  var i6066 = new (System.Collections.Generic.List$1(Bridge.ns('Sound')))
  for(var i = 0; i < i6067.length; i += 1) {
    i6066.add(request.d('Sound', i6067[i + 0]));
  }
  i6064.Sounds = i6066
  i6064.Next = !!i6065[2]
  i6064.NextTime = i6065[3]
  request.r(i6065[4], i6065[5], 0, i6064, 'ActiveObject')
  i6064.UnlockPlay = !!i6065[6]
  i6064.ChangeSkin = !!i6065[7]
  i6064.KeySkin = i6065[8]
  return i6064
}

Deserializers["Sound"] = function (request, data, root) {
  var i6070 = root || request.c( 'Sound' )
  var i6071 = data
  i6070.TimeDelay = i6071[0]
  request.r(i6071[1], i6071[2], 0, i6070, 'Clip')
  return i6070
}

Deserializers["SkeletonController"] = function (request, data, root) {
  var i6072 = root || request.c( 'SkeletonController' )
  var i6073 = data
  request.r(i6073[0], i6073[1], 0, i6072, 'skeleton')
  i6072.defaultSkin = i6073[2]
  i6072.actionSkin = i6073[3]
  return i6072
}

Deserializers["Spine.Unity.SkeletonSubmeshGraphic"] = function (request, data, root) {
  var i6074 = root || request.c( 'Spine.Unity.SkeletonSubmeshGraphic' )
  var i6075 = data
  request.r(i6075[0], i6075[1], 0, i6074, 'm_Material')
  i6074.m_Maskable = !!i6075[2]
  i6074.m_Color = new pc.Color(i6075[3], i6075[4], i6075[5], i6075[6])
  i6074.m_RaycastTarget = !!i6075[7]
  i6074.m_RaycastPadding = new pc.Vec4( i6075[8], i6075[9], i6075[10], i6075[11] )
  return i6074
}

Deserializers["DeactiveObjectOnDisable"] = function (request, data, root) {
  var i6076 = root || request.c( 'DeactiveObjectOnDisable' )
  var i6077 = data
  var i6079 = i6077[0]
  var i6078 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i6079.length; i += 2) {
  request.r(i6079[i + 0], i6079[i + 1], 1, i6078, '')
  }
  i6076.objects = i6078
  return i6076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6083 = data
  request.r(i6083[0], i6083[1], 0, i6082, 'clip')
  request.r(i6083[2], i6083[3], 0, i6082, 'outputAudioMixerGroup')
  i6082.playOnAwake = !!i6083[4]
  i6082.loop = !!i6083[5]
  i6082.time = i6083[6]
  i6082.volume = i6083[7]
  i6082.pitch = i6083[8]
  i6082.enabled = !!i6083[9]
  return i6082
}

Deserializers["ActiveDefaultSkin"] = function (request, data, root) {
  var i6084 = root || request.c( 'ActiveDefaultSkin' )
  var i6085 = data
  request.r(i6085[0], i6085[1], 0, i6084, 'anim')
  return i6084
}

Deserializers["ActiveActionAnim"] = function (request, data, root) {
  var i6086 = root || request.c( 'ActiveActionAnim' )
  var i6087 = data
  request.r(i6087[0], i6087[1], 0, i6086, 'anim')
  i6086.key = i6087[2]
  i6086.loop = !!i6087[3]
  return i6086
}

Deserializers["ActiveObjectOnDisable"] = function (request, data, root) {
  var i6088 = root || request.c( 'ActiveObjectOnDisable' )
  var i6089 = data
  var i6091 = i6089[0]
  var i6090 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i6091.length; i += 2) {
  request.r(i6091[i + 0], i6091[i + 1], 1, i6090, '')
  }
  i6088.objects = i6090
  return i6088
}

Deserializers["ActiveActionSkin"] = function (request, data, root) {
  var i6092 = root || request.c( 'ActiveActionSkin' )
  var i6093 = data
  request.r(i6093[0], i6093[1], 0, i6092, 'anim')
  return i6092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6095 = data
  i6094.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6095[0], i6094.main)
  i6094.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6095[1], i6094.colorBySpeed)
  i6094.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6095[2], i6094.colorOverLifetime)
  i6094.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6095[3], i6094.emission)
  i6094.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6095[4], i6094.rotationBySpeed)
  i6094.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6095[5], i6094.rotationOverLifetime)
  i6094.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6095[6], i6094.shape)
  i6094.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6095[7], i6094.sizeBySpeed)
  i6094.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6095[8], i6094.sizeOverLifetime)
  i6094.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6095[9], i6094.textureSheetAnimation)
  i6094.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6095[10], i6094.velocityOverLifetime)
  i6094.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6095[11], i6094.noise)
  i6094.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6095[12], i6094.inheritVelocity)
  i6094.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6095[13], i6094.forceOverLifetime)
  i6094.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6095[14], i6094.limitVelocityOverLifetime)
  i6094.useAutoRandomSeed = !!i6095[15]
  i6094.randomSeed = i6095[16]
  return i6094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6096 = root || new pc.ParticleSystemMain()
  var i6097 = data
  i6096.duration = i6097[0]
  i6096.loop = !!i6097[1]
  i6096.prewarm = !!i6097[2]
  i6096.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6097[3], i6096.startDelay)
  i6096.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6097[4], i6096.startLifetime)
  i6096.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6097[5], i6096.startSpeed)
  i6096.startSize3D = !!i6097[6]
  i6096.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6097[7], i6096.startSizeX)
  i6096.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6097[8], i6096.startSizeY)
  i6096.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6097[9], i6096.startSizeZ)
  i6096.startRotation3D = !!i6097[10]
  i6096.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6097[11], i6096.startRotationX)
  i6096.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6097[12], i6096.startRotationY)
  i6096.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6097[13], i6096.startRotationZ)
  i6096.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6097[14], i6096.startColor)
  i6096.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6097[15], i6096.gravityModifier)
  i6096.simulationSpace = i6097[16]
  request.r(i6097[17], i6097[18], 0, i6096, 'customSimulationSpace')
  i6096.simulationSpeed = i6097[19]
  i6096.useUnscaledTime = !!i6097[20]
  i6096.scalingMode = i6097[21]
  i6096.playOnAwake = !!i6097[22]
  i6096.maxParticles = i6097[23]
  i6096.emitterVelocityMode = i6097[24]
  i6096.stopAction = i6097[25]
  return i6096
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6098 = root || new pc.MinMaxCurve()
  var i6099 = data
  i6098.mode = i6099[0]
  i6098.curveMin = new pc.AnimationCurve( { keys_flow: i6099[1] } )
  i6098.curveMax = new pc.AnimationCurve( { keys_flow: i6099[2] } )
  i6098.curveMultiplier = i6099[3]
  i6098.constantMin = i6099[4]
  i6098.constantMax = i6099[5]
  return i6098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6100 = root || new pc.MinMaxGradient()
  var i6101 = data
  i6100.mode = i6101[0]
  i6100.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6101[1], i6100.gradientMin)
  i6100.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6101[2], i6100.gradientMax)
  i6100.colorMin = new pc.Color(i6101[3], i6101[4], i6101[5], i6101[6])
  i6100.colorMax = new pc.Color(i6101[7], i6101[8], i6101[9], i6101[10])
  return i6100
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6103 = data
  i6102.mode = i6103[0]
  var i6105 = i6103[1]
  var i6104 = []
  for(var i = 0; i < i6105.length; i += 1) {
    i6104.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6105[i + 0]) );
  }
  i6102.colorKeys = i6104
  var i6107 = i6103[2]
  var i6106 = []
  for(var i = 0; i < i6107.length; i += 1) {
    i6106.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6107[i + 0]) );
  }
  i6102.alphaKeys = i6106
  return i6102
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6108 = root || new pc.ParticleSystemColorBySpeed()
  var i6109 = data
  i6108.enabled = !!i6109[0]
  i6108.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6109[1], i6108.color)
  i6108.range = new pc.Vec2( i6109[2], i6109[3] )
  return i6108
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6113 = data
  i6112.color = new pc.Color(i6113[0], i6113[1], i6113[2], i6113[3])
  i6112.time = i6113[4]
  return i6112
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6117 = data
  i6116.alpha = i6117[0]
  i6116.time = i6117[1]
  return i6116
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6118 = root || new pc.ParticleSystemColorOverLifetime()
  var i6119 = data
  i6118.enabled = !!i6119[0]
  i6118.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6119[1], i6118.color)
  return i6118
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6120 = root || new pc.ParticleSystemEmitter()
  var i6121 = data
  i6120.enabled = !!i6121[0]
  i6120.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6121[1], i6120.rateOverTime)
  i6120.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6121[2], i6120.rateOverDistance)
  var i6123 = i6121[3]
  var i6122 = []
  for(var i = 0; i < i6123.length; i += 1) {
    i6122.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6123[i + 0]) );
  }
  i6120.bursts = i6122
  return i6120
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6126 = root || new pc.ParticleSystemBurst()
  var i6127 = data
  i6126.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6127[0], i6126.count)
  i6126.cycleCount = i6127[1]
  i6126.minCount = i6127[2]
  i6126.maxCount = i6127[3]
  i6126.repeatInterval = i6127[4]
  i6126.time = i6127[5]
  return i6126
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6128 = root || new pc.ParticleSystemRotationBySpeed()
  var i6129 = data
  i6128.enabled = !!i6129[0]
  i6128.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6129[1], i6128.x)
  i6128.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6129[2], i6128.y)
  i6128.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6129[3], i6128.z)
  i6128.separateAxes = !!i6129[4]
  i6128.range = new pc.Vec2( i6129[5], i6129[6] )
  return i6128
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6130 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6131 = data
  i6130.enabled = !!i6131[0]
  i6130.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6131[1], i6130.x)
  i6130.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6131[2], i6130.y)
  i6130.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6131[3], i6130.z)
  i6130.separateAxes = !!i6131[4]
  return i6130
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6132 = root || new pc.ParticleSystemShape()
  var i6133 = data
  i6132.enabled = !!i6133[0]
  i6132.shapeType = i6133[1]
  i6132.randomDirectionAmount = i6133[2]
  i6132.sphericalDirectionAmount = i6133[3]
  i6132.randomPositionAmount = i6133[4]
  i6132.alignToDirection = !!i6133[5]
  i6132.radius = i6133[6]
  i6132.radiusMode = i6133[7]
  i6132.radiusSpread = i6133[8]
  i6132.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6133[9], i6132.radiusSpeed)
  i6132.radiusThickness = i6133[10]
  i6132.angle = i6133[11]
  i6132.length = i6133[12]
  i6132.boxThickness = new pc.Vec3( i6133[13], i6133[14], i6133[15] )
  i6132.meshShapeType = i6133[16]
  request.r(i6133[17], i6133[18], 0, i6132, 'mesh')
  request.r(i6133[19], i6133[20], 0, i6132, 'meshRenderer')
  request.r(i6133[21], i6133[22], 0, i6132, 'skinnedMeshRenderer')
  i6132.useMeshMaterialIndex = !!i6133[23]
  i6132.meshMaterialIndex = i6133[24]
  i6132.useMeshColors = !!i6133[25]
  i6132.normalOffset = i6133[26]
  i6132.arc = i6133[27]
  i6132.arcMode = i6133[28]
  i6132.arcSpread = i6133[29]
  i6132.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6133[30], i6132.arcSpeed)
  i6132.donutRadius = i6133[31]
  i6132.position = new pc.Vec3( i6133[32], i6133[33], i6133[34] )
  i6132.rotation = new pc.Vec3( i6133[35], i6133[36], i6133[37] )
  i6132.scale = new pc.Vec3( i6133[38], i6133[39], i6133[40] )
  return i6132
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6134 = root || new pc.ParticleSystemSizeBySpeed()
  var i6135 = data
  i6134.enabled = !!i6135[0]
  i6134.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6135[1], i6134.x)
  i6134.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6135[2], i6134.y)
  i6134.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6135[3], i6134.z)
  i6134.separateAxes = !!i6135[4]
  i6134.range = new pc.Vec2( i6135[5], i6135[6] )
  return i6134
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6136 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6137 = data
  i6136.enabled = !!i6137[0]
  i6136.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6137[1], i6136.x)
  i6136.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6137[2], i6136.y)
  i6136.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6137[3], i6136.z)
  i6136.separateAxes = !!i6137[4]
  return i6136
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6138 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6139 = data
  i6138.enabled = !!i6139[0]
  i6138.mode = i6139[1]
  i6138.animation = i6139[2]
  i6138.numTilesX = i6139[3]
  i6138.numTilesY = i6139[4]
  i6138.useRandomRow = !!i6139[5]
  i6138.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6139[6], i6138.frameOverTime)
  i6138.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6139[7], i6138.startFrame)
  i6138.cycleCount = i6139[8]
  i6138.rowIndex = i6139[9]
  i6138.flipU = i6139[10]
  i6138.flipV = i6139[11]
  i6138.spriteCount = i6139[12]
  var i6141 = i6139[13]
  var i6140 = []
  for(var i = 0; i < i6141.length; i += 2) {
  request.r(i6141[i + 0], i6141[i + 1], 2, i6140, '')
  }
  i6138.sprites = i6140
  return i6138
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6144 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6145 = data
  i6144.enabled = !!i6145[0]
  i6144.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6145[1], i6144.x)
  i6144.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6145[2], i6144.y)
  i6144.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6145[3], i6144.z)
  i6144.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6145[4], i6144.radial)
  i6144.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6145[5], i6144.speedModifier)
  i6144.space = i6145[6]
  i6144.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6145[7], i6144.orbitalX)
  i6144.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6145[8], i6144.orbitalY)
  i6144.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6145[9], i6144.orbitalZ)
  i6144.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6145[10], i6144.orbitalOffsetX)
  i6144.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6145[11], i6144.orbitalOffsetY)
  i6144.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6145[12], i6144.orbitalOffsetZ)
  return i6144
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6146 = root || new pc.ParticleSystemNoise()
  var i6147 = data
  i6146.enabled = !!i6147[0]
  i6146.separateAxes = !!i6147[1]
  i6146.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6147[2], i6146.strengthX)
  i6146.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6147[3], i6146.strengthY)
  i6146.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6147[4], i6146.strengthZ)
  i6146.frequency = i6147[5]
  i6146.damping = !!i6147[6]
  i6146.octaveCount = i6147[7]
  i6146.octaveMultiplier = i6147[8]
  i6146.octaveScale = i6147[9]
  i6146.quality = i6147[10]
  i6146.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6147[11], i6146.scrollSpeed)
  i6146.scrollSpeedMultiplier = i6147[12]
  i6146.remapEnabled = !!i6147[13]
  i6146.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6147[14], i6146.remapX)
  i6146.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6147[15], i6146.remapY)
  i6146.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6147[16], i6146.remapZ)
  i6146.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6147[17], i6146.positionAmount)
  i6146.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6147[18], i6146.rotationAmount)
  i6146.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6147[19], i6146.sizeAmount)
  return i6146
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6148 = root || new pc.ParticleSystemInheritVelocity()
  var i6149 = data
  i6148.enabled = !!i6149[0]
  i6148.mode = i6149[1]
  i6148.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6149[2], i6148.curve)
  return i6148
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6150 = root || new pc.ParticleSystemForceOverLifetime()
  var i6151 = data
  i6150.enabled = !!i6151[0]
  i6150.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6151[1], i6150.x)
  i6150.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6151[2], i6150.y)
  i6150.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6151[3], i6150.z)
  i6150.space = i6151[4]
  i6150.randomized = !!i6151[5]
  return i6150
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6152 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6153 = data
  i6152.enabled = !!i6153[0]
  i6152.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6153[1], i6152.limit)
  i6152.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6153[2], i6152.limitX)
  i6152.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6153[3], i6152.limitY)
  i6152.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6153[4], i6152.limitZ)
  i6152.dampen = i6153[5]
  i6152.separateAxes = !!i6153[6]
  i6152.space = i6153[7]
  i6152.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6153[8], i6152.drag)
  i6152.multiplyDragByParticleSize = !!i6153[9]
  i6152.multiplyDragByParticleVelocity = !!i6153[10]
  return i6152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6155 = data
  request.r(i6155[0], i6155[1], 0, i6154, 'mesh')
  i6154.meshCount = i6155[2]
  i6154.activeVertexStreamsCount = i6155[3]
  i6154.alignment = i6155[4]
  i6154.renderMode = i6155[5]
  i6154.sortMode = i6155[6]
  i6154.lengthScale = i6155[7]
  i6154.velocityScale = i6155[8]
  i6154.cameraVelocityScale = i6155[9]
  i6154.normalDirection = i6155[10]
  i6154.sortingFudge = i6155[11]
  i6154.minParticleSize = i6155[12]
  i6154.maxParticleSize = i6155[13]
  i6154.pivot = new pc.Vec3( i6155[14], i6155[15], i6155[16] )
  request.r(i6155[17], i6155[18], 0, i6154, 'trailMaterial')
  i6154.applyActiveColorSpace = !!i6155[19]
  i6154.enabled = !!i6155[20]
  request.r(i6155[21], i6155[22], 0, i6154, 'sharedMaterial')
  var i6157 = i6155[23]
  var i6156 = []
  for(var i = 0; i < i6157.length; i += 2) {
  request.r(i6157[i + 0], i6157[i + 1], 2, i6156, '')
  }
  i6154.sharedMaterials = i6156
  i6154.receiveShadows = !!i6155[24]
  i6154.shadowCastingMode = i6155[25]
  i6154.sortingLayerID = i6155[26]
  i6154.sortingOrder = i6155[27]
  i6154.lightmapIndex = i6155[28]
  i6154.lightmapSceneIndex = i6155[29]
  i6154.lightmapScaleOffset = new pc.Vec4( i6155[30], i6155[31], i6155[32], i6155[33] )
  i6154.lightProbeUsage = i6155[34]
  i6154.reflectionProbeUsage = i6155[35]
  return i6154
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i6160 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i6161 = data
  i6160.targetIsSelf = !!i6161[0]
  request.r(i6161[1], i6161[2], 0, i6160, 'targetGO')
  i6160.tweenTargetIsTargetGO = !!i6161[3]
  i6160.delay = i6161[4]
  i6160.duration = i6161[5]
  i6160.easeType = i6161[6]
  i6160.easeCurve = new pc.AnimationCurve( { keys_flow: i6161[7] } )
  i6160.loopType = i6161[8]
  i6160.loops = i6161[9]
  i6160.id = i6161[10]
  i6160.isRelative = !!i6161[11]
  i6160.isFrom = !!i6161[12]
  i6160.isIndependentUpdate = !!i6161[13]
  i6160.autoKill = !!i6161[14]
  i6160.autoGenerate = !!i6161[15]
  i6160.isActive = !!i6161[16]
  i6160.isValid = !!i6161[17]
  request.r(i6161[18], i6161[19], 0, i6160, 'target')
  i6160.animationType = i6161[20]
  i6160.targetType = i6161[21]
  i6160.forcedTargetType = i6161[22]
  i6160.autoPlay = !!i6161[23]
  i6160.useTargetAsV3 = !!i6161[24]
  i6160.endValueFloat = i6161[25]
  i6160.endValueV3 = new pc.Vec3( i6161[26], i6161[27], i6161[28] )
  i6160.endValueV2 = new pc.Vec2( i6161[29], i6161[30] )
  i6160.endValueColor = new pc.Color(i6161[31], i6161[32], i6161[33], i6161[34])
  i6160.endValueString = i6161[35]
  i6160.endValueRect = UnityEngine.Rect.MinMaxRect(i6161[36], i6161[37], i6161[38], i6161[39])
  request.r(i6161[40], i6161[41], 0, i6160, 'endValueTransform')
  i6160.optionalBool0 = !!i6161[42]
  i6160.optionalBool1 = !!i6161[43]
  i6160.optionalFloat0 = i6161[44]
  i6160.optionalInt0 = i6161[45]
  i6160.optionalRotationMode = i6161[46]
  i6160.optionalScrambleMode = i6161[47]
  i6160.optionalShakeRandomnessMode = i6161[48]
  i6160.optionalString = i6161[49]
  i6160.updateType = i6161[50]
  i6160.isSpeedBased = !!i6161[51]
  i6160.hasOnStart = !!i6161[52]
  i6160.hasOnPlay = !!i6161[53]
  i6160.hasOnUpdate = !!i6161[54]
  i6160.hasOnStepComplete = !!i6161[55]
  i6160.hasOnComplete = !!i6161[56]
  i6160.hasOnTweenCreated = !!i6161[57]
  i6160.hasOnRewind = !!i6161[58]
  i6160.onStart = request.d('UnityEngine.Events.UnityEvent', i6161[59], i6160.onStart)
  i6160.onPlay = request.d('UnityEngine.Events.UnityEvent', i6161[60], i6160.onPlay)
  i6160.onUpdate = request.d('UnityEngine.Events.UnityEvent', i6161[61], i6160.onUpdate)
  i6160.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i6161[62], i6160.onStepComplete)
  i6160.onComplete = request.d('UnityEngine.Events.UnityEvent', i6161[63], i6160.onComplete)
  i6160.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i6161[64], i6160.onTweenCreated)
  i6160.onRewind = request.d('UnityEngine.Events.UnityEvent', i6161[65], i6160.onRewind)
  return i6160
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i6162 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i6163 = data
  i6162.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6163[0], i6162.m_PersistentCalls)
  return i6162
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6164 = root || request.c( 'UnityEngine.UI.Button' )
  var i6165 = data
  i6164.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6165[0], i6164.m_OnClick)
  i6164.m_Navigation = request.d('UnityEngine.UI.Navigation', i6165[1], i6164.m_Navigation)
  i6164.m_Transition = i6165[2]
  i6164.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6165[3], i6164.m_Colors)
  i6164.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6165[4], i6164.m_SpriteState)
  i6164.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6165[5], i6164.m_AnimationTriggers)
  i6164.m_Interactable = !!i6165[6]
  request.r(i6165[7], i6165[8], 0, i6164, 'm_TargetGraphic')
  return i6164
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6166 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6167 = data
  i6166.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6167[0], i6166.m_PersistentCalls)
  return i6166
}

Deserializers["LunaController"] = function (request, data, root) {
  var i6168 = root || request.c( 'LunaController' )
  var i6169 = data
  i6168.TimePlay = i6169[0]
  i6168.CountPlay = i6169[1]
  i6168.BGColor = new pc.Color(i6169[2], i6169[3], i6169[4], i6169[5])
  i6168.GameBGColor = new pc.Color(i6169[6], i6169[7], i6169[8], i6169[9])
  i6168.LevelTextColor = new pc.Color(i6169[10], i6169[11], i6169[12], i6169[13])
  i6168.TitleTextColor = new pc.Color(i6169[14], i6169[15], i6169[16], i6169[17])
  i6168.SubBGColor = new pc.Color(i6169[18], i6169[19], i6169[20], i6169[21])
  request.r(i6169[22], i6169[23], 0, i6168, 'time')
  request.r(i6169[24], i6169[25], 0, i6168, 'BGImage')
  request.r(i6169[26], i6169[27], 0, i6168, 'GameBGImage')
  request.r(i6169[28], i6169[29], 0, i6168, 'levelText')
  request.r(i6169[30], i6169[31], 0, i6168, 'titleText')
  request.r(i6169[32], i6169[33], 0, i6168, 'subBG')
  request.r(i6169[34], i6169[35], 0, i6168, 'endCard')
  var i6171 = i6169[36]
  var i6170 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i6171.length; i += 2) {
  request.r(i6171[i + 0], i6171[i + 1], 1, i6170, '')
  }
  i6168.CTA = i6170
  i6168.count = i6169[37]
  i6168.complete = !!i6169[38]
  return i6168
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i6174 = root || request.c( 'LayoutController' )
  var i6175 = data
  request.r(i6175[0], i6175[1], 0, i6174, 'CTA')
  i6174.hide = !!i6175[2]
  return i6174
}

Deserializers["AudioController"] = function (request, data, root) {
  var i6176 = root || request.c( 'AudioController' )
  var i6177 = data
  request.r(i6177[0], i6177[1], 0, i6176, 'BGM')
  request.r(i6177[2], i6177[3], 0, i6176, 'musicSource')
  request.r(i6177[4], i6177[5], 0, i6176, 'SFXPool')
  return i6176
}

Deserializers["InteractController"] = function (request, data, root) {
  var i6178 = root || request.c( 'InteractController' )
  var i6179 = data
  request.r(i6179[0], i6179[1], 0, i6178, 'canvas')
  i6178.maxPos = new pc.Vec2( i6179[2], i6179[3] )
  i6178.minPos = new pc.Vec2( i6179[4], i6179[5] )
  var i6181 = i6179[6]
  var i6180 = new (System.Collections.Generic.List$1(Bridge.ns('ItemDrag')))
  for(var i = 0; i < i6181.length; i += 1) {
    i6180.add(request.d('ItemDrag', i6181[i + 0]));
  }
  i6178.itemDrags = i6180
  i6178.currentTarget = request.d('ItemDrag', i6179[7], i6178.currentTarget)
  request.r(i6179[8], i6179[9], 0, i6178, 'pickupSound')
  request.r(i6179[10], i6179[11], 0, i6178, 'tut')
  i6178.lockPlay = !!i6179[12]
  return i6178
}

Deserializers["ItemDrag"] = function (request, data, root) {
  var i6184 = root || request.c( 'ItemDrag' )
  var i6185 = data
  request.r(i6185[0], i6185[1], 0, i6184, 'DragArea')
  request.r(i6185[2], i6185[3], 0, i6184, 'Item')
  request.r(i6185[4], i6185[5], 0, i6184, 'Icon')
  return i6184
}

Deserializers["GameController"] = function (request, data, root) {
  var i6186 = root || request.c( 'GameController' )
  var i6187 = data
  i6186.OnEnd = request.d('System.Action', i6187[0], i6186.OnEnd)
  i6186.OnComplete = request.d('System.Action', i6187[1], i6186.OnComplete)
  i6186.CompleteStep = request.d('System.Action', i6187[2], i6186.CompleteStep)
  var i6189 = i6187[3]
  var i6188 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationController')))
  for(var i = 0; i < i6189.length; i += 2) {
  request.r(i6189[i + 0], i6189[i + 1], 1, i6188, '')
  }
  i6186.skeletons = i6188
  request.r(i6187[4], i6187[5], 0, i6186, 'winScene')
  request.r(i6187[6], i6187[7], 0, i6186, 'failScene')
  request.r(i6187[8], i6187[9], 0, i6186, 'stepSound')
  i6186.complete = !!i6187[10]
  i6186.currentStep = i6187[11]
  i6186.maxStep = i6187[12]
  request.r(i6187[13], i6187[14], 0, i6186, 'normalStep')
  request.r(i6187[15], i6187[16], 0, i6186, 'lastStep')
  request.r(i6187[17], i6187[18], 0, i6186, 'currentStepText')
  request.r(i6187[19], i6187[20], 0, i6186, 'maxStepText')
  request.r(i6187[21], i6187[22], 0, i6186, 'slider')
  i6186.DelayComplete = i6187[23]
  i6186.subTime = i6187[24]
  i6186.startSub = i6187[25]
  var i6191 = i6187[26]
  var i6190 = new (System.Collections.Generic.List$1(Bridge.ns('Sub')))
  for(var i = 0; i < i6191.length; i += 1) {
    i6190.add(request.d('Sub', i6191[i + 0]));
  }
  i6186.subs = i6190
  request.r(i6187[27], i6187[28], 0, i6186, 'sub')
  request.r(i6187[29], i6187[30], 0, i6186, 'subText')
  return i6186
}

Deserializers["System.Action"] = function (request, data, root) {
  var i6192 = root || request.c( 'System.Action' )
  var i6193 = data
  return i6192
}

Deserializers["Sub"] = function (request, data, root) {
  var i6198 = root || request.c( 'Sub' )
  var i6199 = data
  request.r(i6199[0], i6199[1], 0, i6198, 'Item')
  i6198.Delay = i6199[2]
  i6198.SubText = i6199[3]
  return i6198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6201 = data
  i6200.ambientIntensity = i6201[0]
  i6200.reflectionIntensity = i6201[1]
  i6200.ambientMode = i6201[2]
  i6200.ambientLight = new pc.Color(i6201[3], i6201[4], i6201[5], i6201[6])
  i6200.ambientSkyColor = new pc.Color(i6201[7], i6201[8], i6201[9], i6201[10])
  i6200.ambientGroundColor = new pc.Color(i6201[11], i6201[12], i6201[13], i6201[14])
  i6200.ambientEquatorColor = new pc.Color(i6201[15], i6201[16], i6201[17], i6201[18])
  i6200.fogColor = new pc.Color(i6201[19], i6201[20], i6201[21], i6201[22])
  i6200.fogEndDistance = i6201[23]
  i6200.fogStartDistance = i6201[24]
  i6200.fogDensity = i6201[25]
  i6200.fog = !!i6201[26]
  request.r(i6201[27], i6201[28], 0, i6200, 'skybox')
  i6200.fogMode = i6201[29]
  var i6203 = i6201[30]
  var i6202 = []
  for(var i = 0; i < i6203.length; i += 1) {
    i6202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6203[i + 0]) );
  }
  i6200.lightmaps = i6202
  i6200.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6201[31], i6200.lightProbes)
  i6200.lightmapsMode = i6201[32]
  i6200.mixedBakeMode = i6201[33]
  i6200.environmentLightingMode = i6201[34]
  i6200.ambientProbe = new pc.SphericalHarmonicsL2(i6201[35])
  request.r(i6201[36], i6201[37], 0, i6200, 'customReflection')
  request.r(i6201[38], i6201[39], 0, i6200, 'defaultReflection')
  i6200.defaultReflectionMode = i6201[40]
  i6200.defaultReflectionResolution = i6201[41]
  i6200.sunLightObjectId = i6201[42]
  i6200.pixelLightCount = i6201[43]
  i6200.defaultReflectionHDR = !!i6201[44]
  i6200.hasLightDataAsset = !!i6201[45]
  i6200.hasManualGenerate = !!i6201[46]
  return i6200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6207 = data
  request.r(i6207[0], i6207[1], 0, i6206, 'lightmapColor')
  request.r(i6207[2], i6207[3], 0, i6206, 'lightmapDirection')
  request.r(i6207[4], i6207[5], 0, i6206, 'shadowMask')
  return i6206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6208 = root || new UnityEngine.LightProbes()
  var i6209 = data
  return i6208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6217 = data
  var i6219 = i6217[0]
  var i6218 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6219.length; i += 1) {
    i6218.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6219[i + 0]));
  }
  i6216.ShaderCompilationErrors = i6218
  i6216.name = i6217[1]
  i6216.guid = i6217[2]
  var i6221 = i6217[3]
  var i6220 = []
  for(var i = 0; i < i6221.length; i += 1) {
    i6220.push( i6221[i + 0] );
  }
  i6216.shaderDefinedKeywords = i6220
  var i6223 = i6217[4]
  var i6222 = []
  for(var i = 0; i < i6223.length; i += 1) {
    i6222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6223[i + 0]) );
  }
  i6216.passes = i6222
  var i6225 = i6217[5]
  var i6224 = []
  for(var i = 0; i < i6225.length; i += 1) {
    i6224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6225[i + 0]) );
  }
  i6216.usePasses = i6224
  var i6227 = i6217[6]
  var i6226 = []
  for(var i = 0; i < i6227.length; i += 1) {
    i6226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6227[i + 0]) );
  }
  i6216.defaultParameterValues = i6226
  request.r(i6217[7], i6217[8], 0, i6216, 'unityFallbackShader')
  i6216.readDepth = !!i6217[9]
  i6216.hasDepthOnlyPass = !!i6217[10]
  i6216.isCreatedByShaderGraph = !!i6217[11]
  i6216.disableBatching = !!i6217[12]
  i6216.compiled = !!i6217[13]
  return i6216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6231 = data
  i6230.shaderName = i6231[0]
  i6230.errorMessage = i6231[1]
  return i6230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6234 = root || new pc.UnityShaderPass()
  var i6235 = data
  i6234.id = i6235[0]
  i6234.subShaderIndex = i6235[1]
  i6234.name = i6235[2]
  i6234.passType = i6235[3]
  i6234.grabPassTextureName = i6235[4]
  i6234.usePass = !!i6235[5]
  i6234.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6235[6], i6234.zTest)
  i6234.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6235[7], i6234.zWrite)
  i6234.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6235[8], i6234.culling)
  i6234.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6235[9], i6234.blending)
  i6234.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6235[10], i6234.alphaBlending)
  i6234.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6235[11], i6234.colorWriteMask)
  i6234.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6235[12], i6234.offsetUnits)
  i6234.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6235[13], i6234.offsetFactor)
  i6234.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6235[14], i6234.stencilRef)
  i6234.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6235[15], i6234.stencilReadMask)
  i6234.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6235[16], i6234.stencilWriteMask)
  i6234.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6235[17], i6234.stencilOp)
  i6234.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6235[18], i6234.stencilOpFront)
  i6234.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6235[19], i6234.stencilOpBack)
  var i6237 = i6235[20]
  var i6236 = []
  for(var i = 0; i < i6237.length; i += 1) {
    i6236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6237[i + 0]) );
  }
  i6234.tags = i6236
  var i6239 = i6235[21]
  var i6238 = []
  for(var i = 0; i < i6239.length; i += 1) {
    i6238.push( i6239[i + 0] );
  }
  i6234.passDefinedKeywords = i6238
  var i6241 = i6235[22]
  var i6240 = []
  for(var i = 0; i < i6241.length; i += 1) {
    i6240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6241[i + 0]) );
  }
  i6234.passDefinedKeywordGroups = i6240
  var i6243 = i6235[23]
  var i6242 = []
  for(var i = 0; i < i6243.length; i += 1) {
    i6242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6243[i + 0]) );
  }
  i6234.variants = i6242
  var i6245 = i6235[24]
  var i6244 = []
  for(var i = 0; i < i6245.length; i += 1) {
    i6244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6245[i + 0]) );
  }
  i6234.excludedVariants = i6244
  i6234.hasDepthReader = !!i6235[25]
  return i6234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6247 = data
  i6246.val = i6247[0]
  i6246.name = i6247[1]
  return i6246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6249 = data
  i6248.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6249[0], i6248.src)
  i6248.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6249[1], i6248.dst)
  i6248.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6249[2], i6248.op)
  return i6248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6251 = data
  i6250.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6251[0], i6250.pass)
  i6250.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6251[1], i6250.fail)
  i6250.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6251[2], i6250.zFail)
  i6250.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6251[3], i6250.comp)
  return i6250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6255 = data
  i6254.name = i6255[0]
  i6254.value = i6255[1]
  return i6254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6259 = data
  var i6261 = i6259[0]
  var i6260 = []
  for(var i = 0; i < i6261.length; i += 1) {
    i6260.push( i6261[i + 0] );
  }
  i6258.keywords = i6260
  i6258.hasDiscard = !!i6259[1]
  return i6258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6265 = data
  i6264.passId = i6265[0]
  i6264.subShaderIndex = i6265[1]
  var i6267 = i6265[2]
  var i6266 = []
  for(var i = 0; i < i6267.length; i += 1) {
    i6266.push( i6267[i + 0] );
  }
  i6264.keywords = i6266
  i6264.vertexProgram = i6265[3]
  i6264.fragmentProgram = i6265[4]
  i6264.exportedForWebGl2 = !!i6265[5]
  i6264.readDepth = !!i6265[6]
  return i6264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6271 = data
  request.r(i6271[0], i6271[1], 0, i6270, 'shader')
  i6270.pass = i6271[2]
  return i6270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6275 = data
  i6274.name = i6275[0]
  i6274.type = i6275[1]
  i6274.value = new pc.Vec4( i6275[2], i6275[3], i6275[4], i6275[5] )
  i6274.textureValue = i6275[6]
  i6274.shaderPropertyFlag = i6275[7]
  return i6274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6277 = data
  i6276.name = i6277[0]
  request.r(i6277[1], i6277[2], 0, i6276, 'texture')
  i6276.aabb = i6277[3]
  i6276.vertices = i6277[4]
  i6276.triangles = i6277[5]
  i6276.textureRect = UnityEngine.Rect.MinMaxRect(i6277[6], i6277[7], i6277[8], i6277[9])
  i6276.packedRect = UnityEngine.Rect.MinMaxRect(i6277[10], i6277[11], i6277[12], i6277[13])
  i6276.border = new pc.Vec4( i6277[14], i6277[15], i6277[16], i6277[17] )
  i6276.transparency = i6277[18]
  i6276.bounds = i6277[19]
  i6276.pixelsPerUnit = i6277[20]
  i6276.textureWidth = i6277[21]
  i6276.textureHeight = i6277[22]
  i6276.nativeSize = new pc.Vec2( i6277[23], i6277[24] )
  i6276.pivot = new pc.Vec2( i6277[25], i6277[26] )
  i6276.textureRectOffset = new pc.Vec2( i6277[27], i6277[28] )
  return i6276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6279 = data
  i6278.name = i6279[0]
  return i6278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i6280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i6281 = data
  i6280.name = i6281[0]
  i6280.ascent = i6281[1]
  i6280.originalLineHeight = i6281[2]
  i6280.fontSize = i6281[3]
  var i6283 = i6281[4]
  var i6282 = []
  for(var i = 0; i < i6283.length; i += 1) {
    i6282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i6283[i + 0]) );
  }
  i6280.characterInfo = i6282
  request.r(i6281[5], i6281[6], 0, i6280, 'texture')
  i6280.originalFontSize = i6281[7]
  return i6280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i6286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i6287 = data
  i6286.index = i6287[0]
  i6286.advance = i6287[1]
  i6286.bearing = i6287[2]
  i6286.glyphWidth = i6287[3]
  i6286.glyphHeight = i6287[4]
  i6286.minX = i6287[5]
  i6286.maxX = i6287[6]
  i6286.minY = i6287[7]
  i6286.maxY = i6287[8]
  i6286.uvBottomLeftX = i6287[9]
  i6286.uvBottomLeftY = i6287[10]
  i6286.uvBottomRightX = i6287[11]
  i6286.uvBottomRightY = i6287[12]
  i6286.uvTopLeftX = i6287[13]
  i6286.uvTopLeftY = i6287[14]
  i6286.uvTopRightX = i6287[15]
  i6286.uvTopRightY = i6287[16]
  return i6286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6289 = data
  i6288.name = i6289[0]
  i6288.bytes64 = i6289[1]
  i6288.data = i6289[2]
  return i6288
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i6290 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i6291 = data
  var i6293 = i6291[0]
  var i6292 = []
  for(var i = 0; i < i6293.length; i += 2) {
  request.r(i6293[i + 0], i6293[i + 1], 2, i6292, '')
  }
  i6290.atlasAssets = i6292
  i6290.scale = i6291[1]
  request.r(i6291[2], i6291[3], 0, i6290, 'skeletonJSON')
  i6290.isUpgradingBlendModeMaterials = !!i6291[4]
  i6290.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i6291[5], i6290.blendModeMaterials)
  var i6295 = i6291[6]
  var i6294 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i6295.length; i += 2) {
  request.r(i6295[i + 0], i6295[i + 1], 1, i6294, '')
  }
  i6290.skeletonDataModifiers = i6294
  var i6297 = i6291[7]
  var i6296 = []
  for(var i = 0; i < i6297.length; i += 1) {
    i6296.push( i6297[i + 0] );
  }
  i6290.fromAnimation = i6296
  var i6299 = i6291[8]
  var i6298 = []
  for(var i = 0; i < i6299.length; i += 1) {
    i6298.push( i6299[i + 0] );
  }
  i6290.toAnimation = i6298
  i6290.duration = i6291[9]
  i6290.defaultMix = i6291[10]
  request.r(i6291[11], i6291[12], 0, i6290, 'controller')
  return i6290
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i6302 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i6303 = data
  i6302.applyAdditiveMaterial = !!i6303[0]
  var i6305 = i6303[1]
  var i6304 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6305.length; i += 1) {
    i6304.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6305[i + 0]));
  }
  i6302.additiveMaterials = i6304
  var i6307 = i6303[2]
  var i6306 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6307.length; i += 1) {
    i6306.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6307[i + 0]));
  }
  i6302.multiplyMaterials = i6306
  var i6309 = i6303[3]
  var i6308 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6309.length; i += 1) {
    i6308.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6309[i + 0]));
  }
  i6302.screenMaterials = i6308
  i6302.requiresBlendModeMaterials = !!i6303[4]
  return i6302
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i6312 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i6313 = data
  i6312.pageName = i6313[0]
  request.r(i6313[1], i6313[2], 0, i6312, 'material')
  return i6312
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i6316 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i6317 = data
  request.r(i6317[0], i6317[1], 0, i6316, 'atlasFile')
  var i6319 = i6317[2]
  var i6318 = []
  for(var i = 0; i < i6319.length; i += 2) {
  request.r(i6319[i + 0], i6319[i + 1], 2, i6318, '')
  }
  i6316.materials = i6318
  i6316.textureLoadingMode = i6317[3]
  request.r(i6317[4], i6317[5], 0, i6316, 'onDemandTextureLoader')
  return i6316
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i6320 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i6321 = data
  i6320.useSafeMode = !!i6321[0]
  i6320.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i6321[1], i6320.safeModeOptions)
  i6320.timeScale = i6321[2]
  i6320.unscaledTimeScale = i6321[3]
  i6320.useSmoothDeltaTime = !!i6321[4]
  i6320.maxSmoothUnscaledTime = i6321[5]
  i6320.rewindCallbackMode = i6321[6]
  i6320.showUnityEditorReport = !!i6321[7]
  i6320.logBehaviour = i6321[8]
  i6320.drawGizmos = !!i6321[9]
  i6320.defaultRecyclable = !!i6321[10]
  i6320.defaultAutoPlay = i6321[11]
  i6320.defaultUpdateType = i6321[12]
  i6320.defaultTimeScaleIndependent = !!i6321[13]
  i6320.defaultEaseType = i6321[14]
  i6320.defaultEaseOvershootOrAmplitude = i6321[15]
  i6320.defaultEasePeriod = i6321[16]
  i6320.defaultAutoKill = !!i6321[17]
  i6320.defaultLoopType = i6321[18]
  i6320.debugMode = !!i6321[19]
  i6320.debugStoreTargetId = !!i6321[20]
  i6320.showPreviewPanel = !!i6321[21]
  i6320.storeSettingsLocation = i6321[22]
  i6320.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i6321[23], i6320.modules)
  i6320.createASMDEF = !!i6321[24]
  i6320.showPlayingTweens = !!i6321[25]
  i6320.showPausedTweens = !!i6321[26]
  return i6320
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i6322 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i6323 = data
  i6322.logBehaviour = i6323[0]
  i6322.nestedTweenFailureBehaviour = i6323[1]
  return i6322
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i6324 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i6325 = data
  i6324.showPanel = !!i6325[0]
  i6324.audioEnabled = !!i6325[1]
  i6324.physicsEnabled = !!i6325[2]
  i6324.physics2DEnabled = !!i6325[3]
  i6324.spriteEnabled = !!i6325[4]
  i6324.uiEnabled = !!i6325[5]
  i6324.textMeshProEnabled = !!i6325[6]
  i6324.tk2DEnabled = !!i6325[7]
  i6324.deAudioEnabled = !!i6325[8]
  i6324.deUnityExtendedEnabled = !!i6325[9]
  i6324.epoOutlineEnabled = !!i6325[10]
  return i6324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6327 = data
  var i6329 = i6327[0]
  var i6328 = []
  for(var i = 0; i < i6329.length; i += 1) {
    i6328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6329[i + 0]) );
  }
  i6326.files = i6328
  i6326.componentToPrefabIds = i6327[1]
  return i6326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6333 = data
  i6332.path = i6333[0]
  request.r(i6333[1], i6333[2], 0, i6332, 'unityObject')
  return i6332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6335 = data
  var i6337 = i6335[0]
  var i6336 = []
  for(var i = 0; i < i6337.length; i += 1) {
    i6336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6337[i + 0]) );
  }
  i6334.scriptsExecutionOrder = i6336
  var i6339 = i6335[1]
  var i6338 = []
  for(var i = 0; i < i6339.length; i += 1) {
    i6338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6339[i + 0]) );
  }
  i6334.sortingLayers = i6338
  var i6341 = i6335[2]
  var i6340 = []
  for(var i = 0; i < i6341.length; i += 1) {
    i6340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6341[i + 0]) );
  }
  i6334.cullingLayers = i6340
  i6334.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6335[3], i6334.timeSettings)
  i6334.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6335[4], i6334.physicsSettings)
  i6334.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6335[5], i6334.physics2DSettings)
  i6334.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6335[6], i6334.qualitySettings)
  i6334.enableRealtimeShadows = !!i6335[7]
  i6334.enableAutoInstancing = !!i6335[8]
  i6334.enableStaticBatching = !!i6335[9]
  i6334.enableDynamicBatching = !!i6335[10]
  i6334.usePreservativeDynamicBatching = !!i6335[11]
  i6334.lightmapEncodingQuality = i6335[12]
  i6334.desiredColorSpace = i6335[13]
  var i6343 = i6335[14]
  var i6342 = []
  for(var i = 0; i < i6343.length; i += 1) {
    i6342.push( i6343[i + 0] );
  }
  i6334.allTags = i6342
  return i6334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6347 = data
  i6346.name = i6347[0]
  i6346.value = i6347[1]
  return i6346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6351 = data
  i6350.id = i6351[0]
  i6350.name = i6351[1]
  i6350.value = i6351[2]
  return i6350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6355 = data
  i6354.id = i6355[0]
  i6354.name = i6355[1]
  return i6354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6357 = data
  i6356.fixedDeltaTime = i6357[0]
  i6356.maximumDeltaTime = i6357[1]
  i6356.timeScale = i6357[2]
  i6356.maximumParticleTimestep = i6357[3]
  return i6356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6359 = data
  i6358.gravity = new pc.Vec3( i6359[0], i6359[1], i6359[2] )
  i6358.defaultSolverIterations = i6359[3]
  i6358.bounceThreshold = i6359[4]
  i6358.autoSyncTransforms = !!i6359[5]
  i6358.autoSimulation = !!i6359[6]
  var i6361 = i6359[7]
  var i6360 = []
  for(var i = 0; i < i6361.length; i += 1) {
    i6360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6361[i + 0]) );
  }
  i6358.collisionMatrix = i6360
  return i6358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6365 = data
  i6364.enabled = !!i6365[0]
  i6364.layerId = i6365[1]
  i6364.otherLayerId = i6365[2]
  return i6364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6367 = data
  request.r(i6367[0], i6367[1], 0, i6366, 'material')
  i6366.gravity = new pc.Vec2( i6367[2], i6367[3] )
  i6366.positionIterations = i6367[4]
  i6366.velocityIterations = i6367[5]
  i6366.velocityThreshold = i6367[6]
  i6366.maxLinearCorrection = i6367[7]
  i6366.maxAngularCorrection = i6367[8]
  i6366.maxTranslationSpeed = i6367[9]
  i6366.maxRotationSpeed = i6367[10]
  i6366.baumgarteScale = i6367[11]
  i6366.baumgarteTOIScale = i6367[12]
  i6366.timeToSleep = i6367[13]
  i6366.linearSleepTolerance = i6367[14]
  i6366.angularSleepTolerance = i6367[15]
  i6366.defaultContactOffset = i6367[16]
  i6366.autoSimulation = !!i6367[17]
  i6366.queriesHitTriggers = !!i6367[18]
  i6366.queriesStartInColliders = !!i6367[19]
  i6366.callbacksOnDisable = !!i6367[20]
  i6366.reuseCollisionCallbacks = !!i6367[21]
  i6366.autoSyncTransforms = !!i6367[22]
  var i6369 = i6367[23]
  var i6368 = []
  for(var i = 0; i < i6369.length; i += 1) {
    i6368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6369[i + 0]) );
  }
  i6366.collisionMatrix = i6368
  return i6366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6373 = data
  i6372.enabled = !!i6373[0]
  i6372.layerId = i6373[1]
  i6372.otherLayerId = i6373[2]
  return i6372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6375 = data
  var i6377 = i6375[0]
  var i6376 = []
  for(var i = 0; i < i6377.length; i += 1) {
    i6376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6377[i + 0]) );
  }
  i6374.qualityLevels = i6376
  var i6379 = i6375[1]
  var i6378 = []
  for(var i = 0; i < i6379.length; i += 1) {
    i6378.push( i6379[i + 0] );
  }
  i6374.names = i6378
  i6374.shadows = i6375[2]
  i6374.anisotropicFiltering = i6375[3]
  i6374.antiAliasing = i6375[4]
  i6374.lodBias = i6375[5]
  i6374.shadowCascades = i6375[6]
  i6374.shadowDistance = i6375[7]
  i6374.shadowmaskMode = i6375[8]
  i6374.shadowProjection = i6375[9]
  i6374.shadowResolution = i6375[10]
  i6374.softParticles = !!i6375[11]
  i6374.softVegetation = !!i6375[12]
  i6374.activeColorSpace = i6375[13]
  i6374.desiredColorSpace = i6375[14]
  i6374.masterTextureLimit = i6375[15]
  i6374.maxQueuedFrames = i6375[16]
  i6374.particleRaycastBudget = i6375[17]
  i6374.pixelLightCount = i6375[18]
  i6374.realtimeReflectionProbes = !!i6375[19]
  i6374.shadowCascade2Split = i6375[20]
  i6374.shadowCascade4Split = new pc.Vec3( i6375[21], i6375[22], i6375[23] )
  i6374.streamingMipmapsActive = !!i6375[24]
  i6374.vSyncCount = i6375[25]
  i6374.asyncUploadBufferSize = i6375[26]
  i6374.asyncUploadTimeSlice = i6375[27]
  i6374.billboardsFaceCameraPosition = !!i6375[28]
  i6374.shadowNearPlaneOffset = i6375[29]
  i6374.streamingMipmapsMemoryBudget = i6375[30]
  i6374.maximumLODLevel = i6375[31]
  i6374.streamingMipmapsAddAllCameras = !!i6375[32]
  i6374.streamingMipmapsMaxLevelReduction = i6375[33]
  i6374.streamingMipmapsRenderersPerFrame = i6375[34]
  i6374.resolutionScalingFixedDPIFactor = i6375[35]
  i6374.streamingMipmapsMaxFileIORequests = i6375[36]
  i6374.currentQualityLevel = i6375[37]
  return i6374
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6382 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6383 = data
  request.r(i6383[0], i6383[1], 0, i6382, 'm_ObjectArgument')
  i6382.m_ObjectArgumentAssemblyTypeName = i6383[2]
  i6382.m_IntArgument = i6383[3]
  i6382.m_FloatArgument = i6383[4]
  i6382.m_StringArgument = i6383[5]
  i6382.m_BoolArgument = !!i6383[6]
  return i6382
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[2],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[2],"78":[79],"80":[81],"82":[81],"8":[7],"22":[18],"83":[84],"85":[7],"25":[11,7],"86":[79],"18":[11,7],"87":[88,79],"89":[79,90],"91":[79],"92":[57],"93":[64],"94":[84],"95":[96],"97":[98],"99":[2],"100":[101],"102":[7],"103":[11,7],"104":[79],"105":[11,7],"106":[7],"107":[7],"108":[79,7],"109":[7,11],"110":[111],"112":[111],"113":[111],"114":[7],"115":[7],"10":[8],"12":[11,7],"116":[7],"9":[8],"117":[7],"118":[7],"119":[7],"120":[7],"121":[7],"122":[7],"123":[7],"17":[7],"124":[7],"125":[11,7],"126":[7],"127":[7],"128":[7],"16":[7],"13":[11,7],"129":[7],"130":[5],"131":[5],"6":[5],"132":[5],"133":[2],"134":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.Slider","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","UnityEngine.GameObject","SkeletonController","Spine.Unity.SkeletonSubmeshGraphic","UnityEngine.AudioClip","DeactiveObjectOnDisable","UnityEngine.AudioSource","ActiveDefaultSkin","ActiveActionAnim","ActiveObjectOnDisable","ActiveActionSkin","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","LunaController","LayoutController","AudioController","UnityEngine.Transform","InteractController","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "09/09/2026 09:32:04";

Deserializers.lunaDaysRunning = "1.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "TBAP_V28_NgocNDL_TamNTM";

Deserializers.lunaAppID = "33901";

Deserializers.projectId = "5b44dfd2230fe054ca8da1b65d37e310";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1868";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4308";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BMTP_Luna";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "b135c8c4-c049-4587-96f7-b8a76c211f25";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

