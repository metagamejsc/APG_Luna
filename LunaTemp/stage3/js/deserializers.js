var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6840 = root || request.c( 'UnityEngine.JointSpring' )
  var i6841 = data
  i6840.spring = i6841[0]
  i6840.damper = i6841[1]
  i6840.targetPosition = i6841[2]
  return i6840
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6842 = root || request.c( 'UnityEngine.JointMotor' )
  var i6843 = data
  i6842.m_TargetVelocity = i6843[0]
  i6842.m_Force = i6843[1]
  i6842.m_FreeSpin = i6843[2]
  return i6842
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6844 = root || request.c( 'UnityEngine.JointLimits' )
  var i6845 = data
  i6844.m_Min = i6845[0]
  i6844.m_Max = i6845[1]
  i6844.m_Bounciness = i6845[2]
  i6844.m_BounceMinVelocity = i6845[3]
  i6844.m_ContactDistance = i6845[4]
  i6844.minBounce = i6845[5]
  i6844.maxBounce = i6845[6]
  return i6844
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6846 = root || request.c( 'UnityEngine.JointDrive' )
  var i6847 = data
  i6846.m_PositionSpring = i6847[0]
  i6846.m_PositionDamper = i6847[1]
  i6846.m_MaximumForce = i6847[2]
  i6846.m_UseAcceleration = i6847[3]
  return i6846
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6848 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6849 = data
  i6848.m_Spring = i6849[0]
  i6848.m_Damper = i6849[1]
  return i6848
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6850 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6851 = data
  i6850.m_Limit = i6851[0]
  i6850.m_Bounciness = i6851[1]
  i6850.m_ContactDistance = i6851[2]
  return i6850
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6852 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6853 = data
  i6852.m_ExtremumSlip = i6853[0]
  i6852.m_ExtremumValue = i6853[1]
  i6852.m_AsymptoteSlip = i6853[2]
  i6852.m_AsymptoteValue = i6853[3]
  i6852.m_Stiffness = i6853[4]
  return i6852
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6854 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6855 = data
  i6854.m_LowerAngle = i6855[0]
  i6854.m_UpperAngle = i6855[1]
  return i6854
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6856 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6857 = data
  i6856.m_MotorSpeed = i6857[0]
  i6856.m_MaximumMotorTorque = i6857[1]
  return i6856
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6858 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6859 = data
  i6858.m_DampingRatio = i6859[0]
  i6858.m_Frequency = i6859[1]
  i6858.m_Angle = i6859[2]
  return i6858
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6860 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6861 = data
  i6860.m_LowerTranslation = i6861[0]
  i6860.m_UpperTranslation = i6861[1]
  return i6860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6863 = data
  i6862.name = i6863[0]
  i6862.width = i6863[1]
  i6862.height = i6863[2]
  i6862.mipmapCount = i6863[3]
  i6862.anisoLevel = i6863[4]
  i6862.filterMode = i6863[5]
  i6862.hdr = !!i6863[6]
  i6862.format = i6863[7]
  i6862.wrapMode = i6863[8]
  i6862.alphaIsTransparency = !!i6863[9]
  i6862.alphaSource = i6863[10]
  i6862.graphicsFormat = i6863[11]
  i6862.sRGBTexture = !!i6863[12]
  i6862.desiredColorSpace = i6863[13]
  i6862.wrapU = i6863[14]
  i6862.wrapV = i6863[15]
  return i6862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6864 = root || new pc.UnityMaterial()
  var i6865 = data
  i6864.name = i6865[0]
  request.r(i6865[1], i6865[2], 0, i6864, 'shader')
  i6864.renderQueue = i6865[3]
  i6864.enableInstancing = !!i6865[4]
  var i6867 = i6865[5]
  var i6866 = []
  for(var i = 0; i < i6867.length; i += 1) {
    i6866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6867[i + 0]) );
  }
  i6864.floatParameters = i6866
  var i6869 = i6865[6]
  var i6868 = []
  for(var i = 0; i < i6869.length; i += 1) {
    i6868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6869[i + 0]) );
  }
  i6864.colorParameters = i6868
  var i6871 = i6865[7]
  var i6870 = []
  for(var i = 0; i < i6871.length; i += 1) {
    i6870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6871[i + 0]) );
  }
  i6864.vectorParameters = i6870
  var i6873 = i6865[8]
  var i6872 = []
  for(var i = 0; i < i6873.length; i += 1) {
    i6872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6873[i + 0]) );
  }
  i6864.textureParameters = i6872
  var i6875 = i6865[9]
  var i6874 = []
  for(var i = 0; i < i6875.length; i += 1) {
    i6874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6875[i + 0]) );
  }
  i6864.materialFlags = i6874
  return i6864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6879 = data
  i6878.name = i6879[0]
  i6878.value = i6879[1]
  return i6878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6883 = data
  i6882.name = i6883[0]
  i6882.value = new pc.Color(i6883[1], i6883[2], i6883[3], i6883[4])
  return i6882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6887 = data
  i6886.name = i6887[0]
  i6886.value = new pc.Vec4( i6887[1], i6887[2], i6887[3], i6887[4] )
  return i6886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6891 = data
  i6890.name = i6891[0]
  request.r(i6891[1], i6891[2], 0, i6890, 'value')
  return i6890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6895 = data
  i6894.name = i6895[0]
  i6894.enabled = !!i6895[1]
  return i6894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6897 = data
  i6896.name = i6897[0]
  i6896.index = i6897[1]
  i6896.startup = !!i6897[2]
  return i6896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6899 = data
  i6898.aspect = i6899[0]
  i6898.orthographic = !!i6899[1]
  i6898.orthographicSize = i6899[2]
  i6898.backgroundColor = new pc.Color(i6899[3], i6899[4], i6899[5], i6899[6])
  i6898.nearClipPlane = i6899[7]
  i6898.farClipPlane = i6899[8]
  i6898.fieldOfView = i6899[9]
  i6898.depth = i6899[10]
  i6898.clearFlags = i6899[11]
  i6898.cullingMask = i6899[12]
  i6898.rect = i6899[13]
  request.r(i6899[14], i6899[15], 0, i6898, 'targetTexture')
  i6898.usePhysicalProperties = !!i6899[16]
  i6898.focalLength = i6899[17]
  i6898.sensorSize = new pc.Vec2( i6899[18], i6899[19] )
  i6898.lensShift = new pc.Vec2( i6899[20], i6899[21] )
  i6898.gateFit = i6899[22]
  i6898.commandBufferCount = i6899[23]
  i6898.cameraType = i6899[24]
  i6898.enabled = !!i6899[25]
  return i6898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6901 = data
  i6900.name = i6901[0]
  i6900.tagId = i6901[1]
  i6900.enabled = !!i6901[2]
  i6900.isStatic = !!i6901[3]
  i6900.layer = i6901[4]
  return i6900
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6902 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6903 = data
  request.r(i6903[0], i6903[1], 0, i6902, 'm_FirstSelected')
  i6902.m_sendNavigationEvents = !!i6903[2]
  i6902.m_DragThreshold = i6903[3]
  return i6902
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6904 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6905 = data
  i6904.m_HorizontalAxis = i6905[0]
  i6904.m_VerticalAxis = i6905[1]
  i6904.m_SubmitButton = i6905[2]
  i6904.m_CancelButton = i6905[3]
  i6904.m_InputActionsPerSecond = i6905[4]
  i6904.m_RepeatDelay = i6905[5]
  i6904.m_ForceModuleActive = !!i6905[6]
  i6904.m_SendPointerHoverToParent = !!i6905[7]
  return i6904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6907 = data
  i6906.pivot = new pc.Vec2( i6907[0], i6907[1] )
  i6906.anchorMin = new pc.Vec2( i6907[2], i6907[3] )
  i6906.anchorMax = new pc.Vec2( i6907[4], i6907[5] )
  i6906.sizeDelta = new pc.Vec2( i6907[6], i6907[7] )
  i6906.anchoredPosition3D = new pc.Vec3( i6907[8], i6907[9], i6907[10] )
  i6906.rotation = new pc.Quat(i6907[11], i6907[12], i6907[13], i6907[14])
  i6906.scale = new pc.Vec3( i6907[15], i6907[16], i6907[17] )
  return i6906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6909 = data
  i6908.planeDistance = i6909[0]
  i6908.referencePixelsPerUnit = i6909[1]
  i6908.isFallbackOverlay = !!i6909[2]
  i6908.renderMode = i6909[3]
  i6908.renderOrder = i6909[4]
  i6908.sortingLayerName = i6909[5]
  i6908.sortingOrder = i6909[6]
  i6908.scaleFactor = i6909[7]
  request.r(i6909[8], i6909[9], 0, i6908, 'worldCamera')
  i6908.overrideSorting = !!i6909[10]
  i6908.pixelPerfect = !!i6909[11]
  i6908.targetDisplay = i6909[12]
  i6908.overridePixelPerfect = !!i6909[13]
  i6908.enabled = !!i6909[14]
  return i6908
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6910 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6911 = data
  i6910.m_UiScaleMode = i6911[0]
  i6910.m_ReferencePixelsPerUnit = i6911[1]
  i6910.m_ScaleFactor = i6911[2]
  i6910.m_ReferenceResolution = new pc.Vec2( i6911[3], i6911[4] )
  i6910.m_ScreenMatchMode = i6911[5]
  i6910.m_MatchWidthOrHeight = i6911[6]
  i6910.m_PhysicalUnit = i6911[7]
  i6910.m_FallbackScreenDPI = i6911[8]
  i6910.m_DefaultSpriteDPI = i6911[9]
  i6910.m_DynamicPixelsPerUnit = i6911[10]
  i6910.m_PresetInfoIsWorld = !!i6911[11]
  return i6910
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6912 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6913 = data
  i6912.m_IgnoreReversedGraphics = !!i6913[0]
  i6912.m_BlockingObjects = i6913[1]
  i6912.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6913[2] )
  return i6912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6915 = data
  i6914.cullTransparentMesh = !!i6915[0]
  return i6914
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6916 = root || request.c( 'UnityEngine.UI.Image' )
  var i6917 = data
  request.r(i6917[0], i6917[1], 0, i6916, 'm_Sprite')
  i6916.m_Type = i6917[2]
  i6916.m_PreserveAspect = !!i6917[3]
  i6916.m_FillCenter = !!i6917[4]
  i6916.m_FillMethod = i6917[5]
  i6916.m_FillAmount = i6917[6]
  i6916.m_FillClockwise = !!i6917[7]
  i6916.m_FillOrigin = i6917[8]
  i6916.m_UseSpriteMesh = !!i6917[9]
  i6916.m_PixelsPerUnitMultiplier = i6917[10]
  request.r(i6917[11], i6917[12], 0, i6916, 'm_Material')
  i6916.m_Maskable = !!i6917[13]
  i6916.m_Color = new pc.Color(i6917[14], i6917[15], i6917[16], i6917[17])
  i6916.m_RaycastTarget = !!i6917[18]
  i6916.m_RaycastPadding = new pc.Vec4( i6917[19], i6917[20], i6917[21], i6917[22] )
  return i6916
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i6918 = root || request.c( 'UnityEngine.UI.Text' )
  var i6919 = data
  i6918.m_FontData = request.d('UnityEngine.UI.FontData', i6919[0], i6918.m_FontData)
  i6918.m_Text = i6919[1]
  request.r(i6919[2], i6919[3], 0, i6918, 'm_Material')
  i6918.m_Maskable = !!i6919[4]
  i6918.m_Color = new pc.Color(i6919[5], i6919[6], i6919[7], i6919[8])
  i6918.m_RaycastTarget = !!i6919[9]
  i6918.m_RaycastPadding = new pc.Vec4( i6919[10], i6919[11], i6919[12], i6919[13] )
  return i6918
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i6920 = root || request.c( 'UnityEngine.UI.FontData' )
  var i6921 = data
  request.r(i6921[0], i6921[1], 0, i6920, 'm_Font')
  i6920.m_FontSize = i6921[2]
  i6920.m_FontStyle = i6921[3]
  i6920.m_BestFit = !!i6921[4]
  i6920.m_MinSize = i6921[5]
  i6920.m_MaxSize = i6921[6]
  i6920.m_Alignment = i6921[7]
  i6920.m_AlignByGeometry = !!i6921[8]
  i6920.m_RichText = !!i6921[9]
  i6920.m_HorizontalOverflow = i6921[10]
  i6920.m_VerticalOverflow = i6921[11]
  i6920.m_LineSpacing = i6921[12]
  return i6920
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i6922 = root || request.c( 'UnityEngine.UI.Slider' )
  var i6923 = data
  request.r(i6923[0], i6923[1], 0, i6922, 'm_FillRect')
  request.r(i6923[2], i6923[3], 0, i6922, 'm_HandleRect')
  i6922.m_Direction = i6923[4]
  i6922.m_MinValue = i6923[5]
  i6922.m_MaxValue = i6923[6]
  i6922.m_WholeNumbers = !!i6923[7]
  i6922.m_Value = i6923[8]
  i6922.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i6923[9], i6922.m_OnValueChanged)
  i6922.m_Navigation = request.d('UnityEngine.UI.Navigation', i6923[10], i6922.m_Navigation)
  i6922.m_Transition = i6923[11]
  i6922.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6923[12], i6922.m_Colors)
  i6922.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6923[13], i6922.m_SpriteState)
  i6922.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6923[14], i6922.m_AnimationTriggers)
  i6922.m_Interactable = !!i6923[15]
  request.r(i6923[16], i6923[17], 0, i6922, 'm_TargetGraphic')
  return i6922
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i6924 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i6925 = data
  i6924.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6925[0], i6924.m_PersistentCalls)
  return i6924
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6926 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6927 = data
  var i6929 = i6927[0]
  var i6928 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6929.length; i += 1) {
    i6928.add(request.d('UnityEngine.Events.PersistentCall', i6929[i + 0]));
  }
  i6926.m_Calls = i6928
  return i6926
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6932 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6933 = data
  request.r(i6933[0], i6933[1], 0, i6932, 'm_Target')
  i6932.m_TargetAssemblyTypeName = i6933[2]
  i6932.m_MethodName = i6933[3]
  i6932.m_Mode = i6933[4]
  i6932.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6933[5], i6932.m_Arguments)
  i6932.m_CallState = i6933[6]
  return i6932
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6934 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6935 = data
  i6934.m_Mode = i6935[0]
  i6934.m_WrapAround = !!i6935[1]
  request.r(i6935[2], i6935[3], 0, i6934, 'm_SelectOnUp')
  request.r(i6935[4], i6935[5], 0, i6934, 'm_SelectOnDown')
  request.r(i6935[6], i6935[7], 0, i6934, 'm_SelectOnLeft')
  request.r(i6935[8], i6935[9], 0, i6934, 'm_SelectOnRight')
  return i6934
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6936 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6937 = data
  i6936.m_NormalColor = new pc.Color(i6937[0], i6937[1], i6937[2], i6937[3])
  i6936.m_HighlightedColor = new pc.Color(i6937[4], i6937[5], i6937[6], i6937[7])
  i6936.m_PressedColor = new pc.Color(i6937[8], i6937[9], i6937[10], i6937[11])
  i6936.m_SelectedColor = new pc.Color(i6937[12], i6937[13], i6937[14], i6937[15])
  i6936.m_DisabledColor = new pc.Color(i6937[16], i6937[17], i6937[18], i6937[19])
  i6936.m_ColorMultiplier = i6937[20]
  i6936.m_FadeDuration = i6937[21]
  return i6936
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6938 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6939 = data
  request.r(i6939[0], i6939[1], 0, i6938, 'm_HighlightedSprite')
  request.r(i6939[2], i6939[3], 0, i6938, 'm_PressedSprite')
  request.r(i6939[4], i6939[5], 0, i6938, 'm_SelectedSprite')
  request.r(i6939[6], i6939[7], 0, i6938, 'm_DisabledSprite')
  return i6938
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6940 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6941 = data
  i6940.m_NormalTrigger = i6941[0]
  i6940.m_HighlightedTrigger = i6941[1]
  i6940.m_PressedTrigger = i6941[2]
  i6940.m_SelectedTrigger = i6941[3]
  i6940.m_DisabledTrigger = i6941[4]
  return i6940
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i6942 = root || request.c( 'UnityEngine.UI.Mask' )
  var i6943 = data
  i6942.m_ShowMaskGraphic = !!i6943[0]
  return i6942
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i6944 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i6945 = data
  request.r(i6945[0], i6945[1], 0, i6944, 'skeletonDataAsset')
  request.r(i6945[2], i6945[3], 0, i6944, 'additiveMaterial')
  request.r(i6945[4], i6945[5], 0, i6944, 'multiplyMaterial')
  request.r(i6945[6], i6945[7], 0, i6944, 'screenMaterial')
  i6944.initialSkinName = i6945[8]
  i6944.initialFlipX = !!i6945[9]
  i6944.initialFlipY = !!i6945[10]
  i6944.startingAnimation = i6945[11]
  i6944.startingLoop = !!i6945[12]
  i6944.timeScale = i6945[13]
  i6944.freeze = !!i6945[14]
  i6944.layoutScaleMode = i6945[15]
  i6944.updateWhenInvisible = i6945[16]
  i6944.allowMultipleCanvasRenderers = !!i6945[17]
  var i6947 = i6945[18]
  var i6946 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i6947.length; i += 2) {
  request.r(i6947[i + 0], i6947[i + 1], 1, i6946, '')
  }
  i6944.canvasRenderers = i6946
  i6944.enableSeparatorSlots = !!i6945[19]
  i6944.updateSeparatorPartLocation = !!i6945[20]
  i6944.updateSeparatorPartScale = !!i6945[21]
  i6944.disableMeshAssignmentOnOverride = !!i6945[22]
  i6944.referenceSize = new pc.Vec2( i6945[23], i6945[24] )
  i6944.referenceScale = i6945[25]
  i6944.rectTransformSize = new pc.Vec2( i6945[26], i6945[27] )
  i6944.editReferenceRect = !!i6945[28]
  var i6949 = i6945[29]
  var i6948 = []
  for(var i = 0; i < i6949.length; i += 1) {
    i6948.push( i6949[i + 0] );
  }
  i6944.separatorSlotNames = i6948
  var i6951 = i6945[30]
  var i6950 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i6951.length; i += 2) {
  request.r(i6951[i + 0], i6951[i + 1], 1, i6950, '')
  }
  i6944.separatorParts = i6950
  i6944.meshGenerator = request.d('Spine.Unity.MeshGenerator', i6945[31], i6944.meshGenerator)
  i6944.updateTiming = i6945[32]
  i6944.unscaledTime = !!i6945[33]
  request.r(i6945[34], i6945[35], 0, i6944, 'm_Material')
  i6944.m_Maskable = !!i6945[36]
  i6944.m_Color = new pc.Color(i6945[37], i6945[38], i6945[39], i6945[40])
  i6944.m_RaycastTarget = !!i6945[41]
  i6944.m_RaycastPadding = new pc.Vec4( i6945[42], i6945[43], i6945[44], i6945[45] )
  return i6944
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i6958 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i6959 = data
  i6958.settings = request.d('Spine.Unity.MeshGenerator+Settings', i6959[0], i6958.settings)
  return i6958
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i6960 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i6961 = data
  i6960.useClipping = !!i6961[0]
  i6960.zSpacing = i6961[1]
  i6960.pmaVertexColors = !!i6961[2]
  i6960.tintBlack = !!i6961[3]
  i6960.canvasGroupTintBlack = !!i6961[4]
  i6960.calculateTangents = !!i6961[5]
  i6960.addNormals = !!i6961[6]
  i6960.immutableTriangles = !!i6961[7]
  return i6960
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i6962 = root || request.c( 'AnimationController' )
  var i6963 = data
  i6962.hasSpecialItem = !!i6963[0]
  request.r(i6963[1], i6963[2], 0, i6962, 'specialItem')
  i6962.activeSpecial = !!i6963[3]
  request.r(i6963[4], i6963[5], 0, i6962, 'skeleton')
  var i6965 = i6963[6]
  var i6964 = new (System.Collections.Generic.List$1(Bridge.ns('DropAction')))
  for(var i = 0; i < i6965.length; i += 1) {
    i6964.add(request.d('DropAction', i6965[i + 0]));
  }
  i6962.actions = i6964
  return i6962
}

Deserializers["DropAction"] = function (request, data, root) {
  var i6968 = root || request.c( 'DropAction' )
  var i6969 = data
  request.r(i6969[0], i6969[1], 0, i6968, 'Item')
  i6968.DelayTime = i6969[2]
  var i6971 = i6969[3]
  var i6970 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i6971.length; i += 1) {
    i6970.add(request.d('Anim', i6971[i + 0]));
  }
  i6968.AnimNormal = i6970
  var i6973 = i6969[4]
  var i6972 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i6973.length; i += 1) {
    i6972.add(request.d('Anim', i6973[i + 0]));
  }
  i6968.AnimSpecial = i6972
  return i6968
}

Deserializers["Anim"] = function (request, data, root) {
  var i6976 = root || request.c( 'Anim' )
  var i6977 = data
  i6976.KeyAnim = i6977[0]
  var i6979 = i6977[1]
  var i6978 = new (System.Collections.Generic.List$1(Bridge.ns('Sound')))
  for(var i = 0; i < i6979.length; i += 1) {
    i6978.add(request.d('Sound', i6979[i + 0]));
  }
  i6976.Sounds = i6978
  i6976.Next = !!i6977[2]
  i6976.NextTime = i6977[3]
  request.r(i6977[4], i6977[5], 0, i6976, 'ActiveObject')
  i6976.UnlockPlay = !!i6977[6]
  i6976.ChangeSkin = !!i6977[7]
  i6976.KeySkin = i6977[8]
  return i6976
}

Deserializers["Sound"] = function (request, data, root) {
  var i6982 = root || request.c( 'Sound' )
  var i6983 = data
  i6982.TimeDelay = i6983[0]
  request.r(i6983[1], i6983[2], 0, i6982, 'Clip')
  return i6982
}

Deserializers["SkeletonController"] = function (request, data, root) {
  var i6984 = root || request.c( 'SkeletonController' )
  var i6985 = data
  request.r(i6985[0], i6985[1], 0, i6984, 'skeleton')
  i6984.defaultSkin = i6985[2]
  i6984.actionSkin = i6985[3]
  return i6984
}

Deserializers["Spine.Unity.SkeletonSubmeshGraphic"] = function (request, data, root) {
  var i6986 = root || request.c( 'Spine.Unity.SkeletonSubmeshGraphic' )
  var i6987 = data
  request.r(i6987[0], i6987[1], 0, i6986, 'm_Material')
  i6986.m_Maskable = !!i6987[2]
  i6986.m_Color = new pc.Color(i6987[3], i6987[4], i6987[5], i6987[6])
  i6986.m_RaycastTarget = !!i6987[7]
  i6986.m_RaycastPadding = new pc.Vec4( i6987[8], i6987[9], i6987[10], i6987[11] )
  return i6986
}

Deserializers["DeactiveObjectOnDisable"] = function (request, data, root) {
  var i6988 = root || request.c( 'DeactiveObjectOnDisable' )
  var i6989 = data
  var i6991 = i6989[0]
  var i6990 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i6991.length; i += 2) {
  request.r(i6991[i + 0], i6991[i + 1], 1, i6990, '')
  }
  i6988.objects = i6990
  return i6988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6995 = data
  request.r(i6995[0], i6995[1], 0, i6994, 'clip')
  request.r(i6995[2], i6995[3], 0, i6994, 'outputAudioMixerGroup')
  i6994.playOnAwake = !!i6995[4]
  i6994.loop = !!i6995[5]
  i6994.time = i6995[6]
  i6994.volume = i6995[7]
  i6994.pitch = i6995[8]
  i6994.enabled = !!i6995[9]
  return i6994
}

Deserializers["ActiveDefaultSkin"] = function (request, data, root) {
  var i6996 = root || request.c( 'ActiveDefaultSkin' )
  var i6997 = data
  request.r(i6997[0], i6997[1], 0, i6996, 'anim')
  return i6996
}

Deserializers["ActiveActionAnim"] = function (request, data, root) {
  var i6998 = root || request.c( 'ActiveActionAnim' )
  var i6999 = data
  request.r(i6999[0], i6999[1], 0, i6998, 'anim')
  i6998.key = i6999[2]
  i6998.loop = !!i6999[3]
  return i6998
}

Deserializers["ActiveObjectOnDisable"] = function (request, data, root) {
  var i7000 = root || request.c( 'ActiveObjectOnDisable' )
  var i7001 = data
  var i7003 = i7001[0]
  var i7002 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i7003.length; i += 2) {
  request.r(i7003[i + 0], i7003[i + 1], 1, i7002, '')
  }
  i7000.objects = i7002
  return i7000
}

Deserializers["ActiveActionSkin"] = function (request, data, root) {
  var i7004 = root || request.c( 'ActiveActionSkin' )
  var i7005 = data
  request.r(i7005[0], i7005[1], 0, i7004, 'anim')
  return i7004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i7006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i7007 = data
  i7006.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i7007[0], i7006.main)
  i7006.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i7007[1], i7006.colorBySpeed)
  i7006.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i7007[2], i7006.colorOverLifetime)
  i7006.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i7007[3], i7006.emission)
  i7006.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i7007[4], i7006.rotationBySpeed)
  i7006.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i7007[5], i7006.rotationOverLifetime)
  i7006.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i7007[6], i7006.shape)
  i7006.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i7007[7], i7006.sizeBySpeed)
  i7006.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i7007[8], i7006.sizeOverLifetime)
  i7006.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i7007[9], i7006.textureSheetAnimation)
  i7006.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i7007[10], i7006.velocityOverLifetime)
  i7006.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i7007[11], i7006.noise)
  i7006.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i7007[12], i7006.inheritVelocity)
  i7006.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i7007[13], i7006.forceOverLifetime)
  i7006.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i7007[14], i7006.limitVelocityOverLifetime)
  i7006.useAutoRandomSeed = !!i7007[15]
  i7006.randomSeed = i7007[16]
  return i7006
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i7008 = root || new pc.ParticleSystemMain()
  var i7009 = data
  i7008.duration = i7009[0]
  i7008.loop = !!i7009[1]
  i7008.prewarm = !!i7009[2]
  i7008.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[3], i7008.startDelay)
  i7008.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[4], i7008.startLifetime)
  i7008.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[5], i7008.startSpeed)
  i7008.startSize3D = !!i7009[6]
  i7008.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[7], i7008.startSizeX)
  i7008.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[8], i7008.startSizeY)
  i7008.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[9], i7008.startSizeZ)
  i7008.startRotation3D = !!i7009[10]
  i7008.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[11], i7008.startRotationX)
  i7008.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[12], i7008.startRotationY)
  i7008.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[13], i7008.startRotationZ)
  i7008.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7009[14], i7008.startColor)
  i7008.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[15], i7008.gravityModifier)
  i7008.simulationSpace = i7009[16]
  request.r(i7009[17], i7009[18], 0, i7008, 'customSimulationSpace')
  i7008.simulationSpeed = i7009[19]
  i7008.useUnscaledTime = !!i7009[20]
  i7008.scalingMode = i7009[21]
  i7008.playOnAwake = !!i7009[22]
  i7008.maxParticles = i7009[23]
  i7008.emitterVelocityMode = i7009[24]
  i7008.stopAction = i7009[25]
  return i7008
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i7010 = root || new pc.MinMaxCurve()
  var i7011 = data
  i7010.mode = i7011[0]
  i7010.curveMin = new pc.AnimationCurve( { keys_flow: i7011[1] } )
  i7010.curveMax = new pc.AnimationCurve( { keys_flow: i7011[2] } )
  i7010.curveMultiplier = i7011[3]
  i7010.constantMin = i7011[4]
  i7010.constantMax = i7011[5]
  return i7010
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i7012 = root || new pc.MinMaxGradient()
  var i7013 = data
  i7012.mode = i7013[0]
  i7012.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7013[1], i7012.gradientMin)
  i7012.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7013[2], i7012.gradientMax)
  i7012.colorMin = new pc.Color(i7013[3], i7013[4], i7013[5], i7013[6])
  i7012.colorMax = new pc.Color(i7013[7], i7013[8], i7013[9], i7013[10])
  return i7012
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i7014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i7015 = data
  i7014.mode = i7015[0]
  var i7017 = i7015[1]
  var i7016 = []
  for(var i = 0; i < i7017.length; i += 1) {
    i7016.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i7017[i + 0]) );
  }
  i7014.colorKeys = i7016
  var i7019 = i7015[2]
  var i7018 = []
  for(var i = 0; i < i7019.length; i += 1) {
    i7018.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i7019[i + 0]) );
  }
  i7014.alphaKeys = i7018
  return i7014
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i7020 = root || new pc.ParticleSystemColorBySpeed()
  var i7021 = data
  i7020.enabled = !!i7021[0]
  i7020.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7021[1], i7020.color)
  i7020.range = new pc.Vec2( i7021[2], i7021[3] )
  return i7020
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i7024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i7025 = data
  i7024.color = new pc.Color(i7025[0], i7025[1], i7025[2], i7025[3])
  i7024.time = i7025[4]
  return i7024
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i7028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i7029 = data
  i7028.alpha = i7029[0]
  i7028.time = i7029[1]
  return i7028
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i7030 = root || new pc.ParticleSystemColorOverLifetime()
  var i7031 = data
  i7030.enabled = !!i7031[0]
  i7030.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7031[1], i7030.color)
  return i7030
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i7032 = root || new pc.ParticleSystemEmitter()
  var i7033 = data
  i7032.enabled = !!i7033[0]
  i7032.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7033[1], i7032.rateOverTime)
  i7032.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7033[2], i7032.rateOverDistance)
  var i7035 = i7033[3]
  var i7034 = []
  for(var i = 0; i < i7035.length; i += 1) {
    i7034.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i7035[i + 0]) );
  }
  i7032.bursts = i7034
  return i7032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i7038 = root || new pc.ParticleSystemBurst()
  var i7039 = data
  i7038.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7039[0], i7038.count)
  i7038.cycleCount = i7039[1]
  i7038.minCount = i7039[2]
  i7038.maxCount = i7039[3]
  i7038.repeatInterval = i7039[4]
  i7038.time = i7039[5]
  return i7038
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i7040 = root || new pc.ParticleSystemRotationBySpeed()
  var i7041 = data
  i7040.enabled = !!i7041[0]
  i7040.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7041[1], i7040.x)
  i7040.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7041[2], i7040.y)
  i7040.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7041[3], i7040.z)
  i7040.separateAxes = !!i7041[4]
  i7040.range = new pc.Vec2( i7041[5], i7041[6] )
  return i7040
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i7042 = root || new pc.ParticleSystemRotationOverLifetime()
  var i7043 = data
  i7042.enabled = !!i7043[0]
  i7042.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7043[1], i7042.x)
  i7042.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7043[2], i7042.y)
  i7042.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7043[3], i7042.z)
  i7042.separateAxes = !!i7043[4]
  return i7042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i7044 = root || new pc.ParticleSystemShape()
  var i7045 = data
  i7044.enabled = !!i7045[0]
  i7044.shapeType = i7045[1]
  i7044.randomDirectionAmount = i7045[2]
  i7044.sphericalDirectionAmount = i7045[3]
  i7044.randomPositionAmount = i7045[4]
  i7044.alignToDirection = !!i7045[5]
  i7044.radius = i7045[6]
  i7044.radiusMode = i7045[7]
  i7044.radiusSpread = i7045[8]
  i7044.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7045[9], i7044.radiusSpeed)
  i7044.radiusThickness = i7045[10]
  i7044.angle = i7045[11]
  i7044.length = i7045[12]
  i7044.boxThickness = new pc.Vec3( i7045[13], i7045[14], i7045[15] )
  i7044.meshShapeType = i7045[16]
  request.r(i7045[17], i7045[18], 0, i7044, 'mesh')
  request.r(i7045[19], i7045[20], 0, i7044, 'meshRenderer')
  request.r(i7045[21], i7045[22], 0, i7044, 'skinnedMeshRenderer')
  i7044.useMeshMaterialIndex = !!i7045[23]
  i7044.meshMaterialIndex = i7045[24]
  i7044.useMeshColors = !!i7045[25]
  i7044.normalOffset = i7045[26]
  i7044.arc = i7045[27]
  i7044.arcMode = i7045[28]
  i7044.arcSpread = i7045[29]
  i7044.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7045[30], i7044.arcSpeed)
  i7044.donutRadius = i7045[31]
  i7044.position = new pc.Vec3( i7045[32], i7045[33], i7045[34] )
  i7044.rotation = new pc.Vec3( i7045[35], i7045[36], i7045[37] )
  i7044.scale = new pc.Vec3( i7045[38], i7045[39], i7045[40] )
  return i7044
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i7046 = root || new pc.ParticleSystemSizeBySpeed()
  var i7047 = data
  i7046.enabled = !!i7047[0]
  i7046.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7047[1], i7046.x)
  i7046.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7047[2], i7046.y)
  i7046.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7047[3], i7046.z)
  i7046.separateAxes = !!i7047[4]
  i7046.range = new pc.Vec2( i7047[5], i7047[6] )
  return i7046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i7048 = root || new pc.ParticleSystemSizeOverLifetime()
  var i7049 = data
  i7048.enabled = !!i7049[0]
  i7048.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7049[1], i7048.x)
  i7048.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7049[2], i7048.y)
  i7048.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7049[3], i7048.z)
  i7048.separateAxes = !!i7049[4]
  return i7048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i7050 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i7051 = data
  i7050.enabled = !!i7051[0]
  i7050.mode = i7051[1]
  i7050.animation = i7051[2]
  i7050.numTilesX = i7051[3]
  i7050.numTilesY = i7051[4]
  i7050.useRandomRow = !!i7051[5]
  i7050.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7051[6], i7050.frameOverTime)
  i7050.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7051[7], i7050.startFrame)
  i7050.cycleCount = i7051[8]
  i7050.rowIndex = i7051[9]
  i7050.flipU = i7051[10]
  i7050.flipV = i7051[11]
  i7050.spriteCount = i7051[12]
  var i7053 = i7051[13]
  var i7052 = []
  for(var i = 0; i < i7053.length; i += 2) {
  request.r(i7053[i + 0], i7053[i + 1], 2, i7052, '')
  }
  i7050.sprites = i7052
  return i7050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i7056 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i7057 = data
  i7056.enabled = !!i7057[0]
  i7056.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7057[1], i7056.x)
  i7056.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7057[2], i7056.y)
  i7056.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7057[3], i7056.z)
  i7056.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7057[4], i7056.radial)
  i7056.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7057[5], i7056.speedModifier)
  i7056.space = i7057[6]
  i7056.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7057[7], i7056.orbitalX)
  i7056.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7057[8], i7056.orbitalY)
  i7056.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7057[9], i7056.orbitalZ)
  i7056.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7057[10], i7056.orbitalOffsetX)
  i7056.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7057[11], i7056.orbitalOffsetY)
  i7056.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7057[12], i7056.orbitalOffsetZ)
  return i7056
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i7058 = root || new pc.ParticleSystemNoise()
  var i7059 = data
  i7058.enabled = !!i7059[0]
  i7058.separateAxes = !!i7059[1]
  i7058.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7059[2], i7058.strengthX)
  i7058.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7059[3], i7058.strengthY)
  i7058.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7059[4], i7058.strengthZ)
  i7058.frequency = i7059[5]
  i7058.damping = !!i7059[6]
  i7058.octaveCount = i7059[7]
  i7058.octaveMultiplier = i7059[8]
  i7058.octaveScale = i7059[9]
  i7058.quality = i7059[10]
  i7058.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7059[11], i7058.scrollSpeed)
  i7058.scrollSpeedMultiplier = i7059[12]
  i7058.remapEnabled = !!i7059[13]
  i7058.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7059[14], i7058.remapX)
  i7058.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7059[15], i7058.remapY)
  i7058.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7059[16], i7058.remapZ)
  i7058.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7059[17], i7058.positionAmount)
  i7058.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7059[18], i7058.rotationAmount)
  i7058.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7059[19], i7058.sizeAmount)
  return i7058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i7060 = root || new pc.ParticleSystemInheritVelocity()
  var i7061 = data
  i7060.enabled = !!i7061[0]
  i7060.mode = i7061[1]
  i7060.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7061[2], i7060.curve)
  return i7060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i7062 = root || new pc.ParticleSystemForceOverLifetime()
  var i7063 = data
  i7062.enabled = !!i7063[0]
  i7062.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7063[1], i7062.x)
  i7062.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7063[2], i7062.y)
  i7062.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7063[3], i7062.z)
  i7062.space = i7063[4]
  i7062.randomized = !!i7063[5]
  return i7062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i7064 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i7065 = data
  i7064.enabled = !!i7065[0]
  i7064.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7065[1], i7064.limit)
  i7064.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7065[2], i7064.limitX)
  i7064.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7065[3], i7064.limitY)
  i7064.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7065[4], i7064.limitZ)
  i7064.dampen = i7065[5]
  i7064.separateAxes = !!i7065[6]
  i7064.space = i7065[7]
  i7064.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7065[8], i7064.drag)
  i7064.multiplyDragByParticleSize = !!i7065[9]
  i7064.multiplyDragByParticleVelocity = !!i7065[10]
  return i7064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i7066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i7067 = data
  request.r(i7067[0], i7067[1], 0, i7066, 'mesh')
  i7066.meshCount = i7067[2]
  i7066.activeVertexStreamsCount = i7067[3]
  i7066.alignment = i7067[4]
  i7066.renderMode = i7067[5]
  i7066.sortMode = i7067[6]
  i7066.lengthScale = i7067[7]
  i7066.velocityScale = i7067[8]
  i7066.cameraVelocityScale = i7067[9]
  i7066.normalDirection = i7067[10]
  i7066.sortingFudge = i7067[11]
  i7066.minParticleSize = i7067[12]
  i7066.maxParticleSize = i7067[13]
  i7066.pivot = new pc.Vec3( i7067[14], i7067[15], i7067[16] )
  request.r(i7067[17], i7067[18], 0, i7066, 'trailMaterial')
  i7066.applyActiveColorSpace = !!i7067[19]
  i7066.enabled = !!i7067[20]
  request.r(i7067[21], i7067[22], 0, i7066, 'sharedMaterial')
  var i7069 = i7067[23]
  var i7068 = []
  for(var i = 0; i < i7069.length; i += 2) {
  request.r(i7069[i + 0], i7069[i + 1], 2, i7068, '')
  }
  i7066.sharedMaterials = i7068
  i7066.receiveShadows = !!i7067[24]
  i7066.shadowCastingMode = i7067[25]
  i7066.sortingLayerID = i7067[26]
  i7066.sortingOrder = i7067[27]
  i7066.lightmapIndex = i7067[28]
  i7066.lightmapSceneIndex = i7067[29]
  i7066.lightmapScaleOffset = new pc.Vec4( i7067[30], i7067[31], i7067[32], i7067[33] )
  i7066.lightProbeUsage = i7067[34]
  i7066.reflectionProbeUsage = i7067[35]
  return i7066
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i7072 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i7073 = data
  i7072.targetIsSelf = !!i7073[0]
  request.r(i7073[1], i7073[2], 0, i7072, 'targetGO')
  i7072.tweenTargetIsTargetGO = !!i7073[3]
  i7072.delay = i7073[4]
  i7072.duration = i7073[5]
  i7072.easeType = i7073[6]
  i7072.easeCurve = new pc.AnimationCurve( { keys_flow: i7073[7] } )
  i7072.loopType = i7073[8]
  i7072.loops = i7073[9]
  i7072.id = i7073[10]
  i7072.isRelative = !!i7073[11]
  i7072.isFrom = !!i7073[12]
  i7072.isIndependentUpdate = !!i7073[13]
  i7072.autoKill = !!i7073[14]
  i7072.autoGenerate = !!i7073[15]
  i7072.isActive = !!i7073[16]
  i7072.isValid = !!i7073[17]
  request.r(i7073[18], i7073[19], 0, i7072, 'target')
  i7072.animationType = i7073[20]
  i7072.targetType = i7073[21]
  i7072.forcedTargetType = i7073[22]
  i7072.autoPlay = !!i7073[23]
  i7072.useTargetAsV3 = !!i7073[24]
  i7072.endValueFloat = i7073[25]
  i7072.endValueV3 = new pc.Vec3( i7073[26], i7073[27], i7073[28] )
  i7072.endValueV2 = new pc.Vec2( i7073[29], i7073[30] )
  i7072.endValueColor = new pc.Color(i7073[31], i7073[32], i7073[33], i7073[34])
  i7072.endValueString = i7073[35]
  i7072.endValueRect = UnityEngine.Rect.MinMaxRect(i7073[36], i7073[37], i7073[38], i7073[39])
  request.r(i7073[40], i7073[41], 0, i7072, 'endValueTransform')
  i7072.optionalBool0 = !!i7073[42]
  i7072.optionalBool1 = !!i7073[43]
  i7072.optionalFloat0 = i7073[44]
  i7072.optionalInt0 = i7073[45]
  i7072.optionalRotationMode = i7073[46]
  i7072.optionalScrambleMode = i7073[47]
  i7072.optionalShakeRandomnessMode = i7073[48]
  i7072.optionalString = i7073[49]
  i7072.updateType = i7073[50]
  i7072.isSpeedBased = !!i7073[51]
  i7072.hasOnStart = !!i7073[52]
  i7072.hasOnPlay = !!i7073[53]
  i7072.hasOnUpdate = !!i7073[54]
  i7072.hasOnStepComplete = !!i7073[55]
  i7072.hasOnComplete = !!i7073[56]
  i7072.hasOnTweenCreated = !!i7073[57]
  i7072.hasOnRewind = !!i7073[58]
  i7072.onStart = request.d('UnityEngine.Events.UnityEvent', i7073[59], i7072.onStart)
  i7072.onPlay = request.d('UnityEngine.Events.UnityEvent', i7073[60], i7072.onPlay)
  i7072.onUpdate = request.d('UnityEngine.Events.UnityEvent', i7073[61], i7072.onUpdate)
  i7072.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i7073[62], i7072.onStepComplete)
  i7072.onComplete = request.d('UnityEngine.Events.UnityEvent', i7073[63], i7072.onComplete)
  i7072.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i7073[64], i7072.onTweenCreated)
  i7072.onRewind = request.d('UnityEngine.Events.UnityEvent', i7073[65], i7072.onRewind)
  return i7072
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i7074 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i7075 = data
  i7074.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7075[0], i7074.m_PersistentCalls)
  return i7074
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i7076 = root || request.c( 'UnityEngine.UI.Button' )
  var i7077 = data
  i7076.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i7077[0], i7076.m_OnClick)
  i7076.m_Navigation = request.d('UnityEngine.UI.Navigation', i7077[1], i7076.m_Navigation)
  i7076.m_Transition = i7077[2]
  i7076.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7077[3], i7076.m_Colors)
  i7076.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7077[4], i7076.m_SpriteState)
  i7076.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7077[5], i7076.m_AnimationTriggers)
  i7076.m_Interactable = !!i7077[6]
  request.r(i7077[7], i7077[8], 0, i7076, 'm_TargetGraphic')
  return i7076
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i7078 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i7079 = data
  i7078.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7079[0], i7078.m_PersistentCalls)
  return i7078
}

Deserializers["LunaController"] = function (request, data, root) {
  var i7080 = root || request.c( 'LunaController' )
  var i7081 = data
  i7080.TimePlay = i7081[0]
  i7080.CountPlay = i7081[1]
  i7080.BGColor = new pc.Color(i7081[2], i7081[3], i7081[4], i7081[5])
  i7080.GameBGColor = new pc.Color(i7081[6], i7081[7], i7081[8], i7081[9])
  i7080.LevelTextColor = new pc.Color(i7081[10], i7081[11], i7081[12], i7081[13])
  i7080.TitleTextColor = new pc.Color(i7081[14], i7081[15], i7081[16], i7081[17])
  i7080.SubBGColor = new pc.Color(i7081[18], i7081[19], i7081[20], i7081[21])
  request.r(i7081[22], i7081[23], 0, i7080, 'time')
  request.r(i7081[24], i7081[25], 0, i7080, 'BGImage')
  request.r(i7081[26], i7081[27], 0, i7080, 'GameBGImage')
  request.r(i7081[28], i7081[29], 0, i7080, 'levelText')
  request.r(i7081[30], i7081[31], 0, i7080, 'titleText')
  request.r(i7081[32], i7081[33], 0, i7080, 'subBG')
  request.r(i7081[34], i7081[35], 0, i7080, 'endCard')
  var i7083 = i7081[36]
  var i7082 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i7083.length; i += 2) {
  request.r(i7083[i + 0], i7083[i + 1], 1, i7082, '')
  }
  i7080.CTA = i7082
  i7080.count = i7081[37]
  i7080.complete = !!i7081[38]
  return i7080
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i7086 = root || request.c( 'LayoutController' )
  var i7087 = data
  request.r(i7087[0], i7087[1], 0, i7086, 'CTA')
  i7086.hide = !!i7087[2]
  return i7086
}

Deserializers["AudioController"] = function (request, data, root) {
  var i7088 = root || request.c( 'AudioController' )
  var i7089 = data
  request.r(i7089[0], i7089[1], 0, i7088, 'BGM')
  request.r(i7089[2], i7089[3], 0, i7088, 'musicSource')
  request.r(i7089[4], i7089[5], 0, i7088, 'SFXPool')
  return i7088
}

Deserializers["InteractController"] = function (request, data, root) {
  var i7090 = root || request.c( 'InteractController' )
  var i7091 = data
  request.r(i7091[0], i7091[1], 0, i7090, 'canvas')
  i7090.maxPos = new pc.Vec2( i7091[2], i7091[3] )
  i7090.minPos = new pc.Vec2( i7091[4], i7091[5] )
  var i7093 = i7091[6]
  var i7092 = new (System.Collections.Generic.List$1(Bridge.ns('ItemDrag')))
  for(var i = 0; i < i7093.length; i += 1) {
    i7092.add(request.d('ItemDrag', i7093[i + 0]));
  }
  i7090.itemDrags = i7092
  i7090.currentTarget = request.d('ItemDrag', i7091[7], i7090.currentTarget)
  request.r(i7091[8], i7091[9], 0, i7090, 'pickupSound')
  request.r(i7091[10], i7091[11], 0, i7090, 'tut')
  i7090.lockPlay = !!i7091[12]
  return i7090
}

Deserializers["ItemDrag"] = function (request, data, root) {
  var i7096 = root || request.c( 'ItemDrag' )
  var i7097 = data
  request.r(i7097[0], i7097[1], 0, i7096, 'DragArea')
  request.r(i7097[2], i7097[3], 0, i7096, 'Item')
  request.r(i7097[4], i7097[5], 0, i7096, 'Icon')
  return i7096
}

Deserializers["GameController"] = function (request, data, root) {
  var i7098 = root || request.c( 'GameController' )
  var i7099 = data
  i7098.OnEnd = request.d('System.Action', i7099[0], i7098.OnEnd)
  i7098.OnComplete = request.d('System.Action', i7099[1], i7098.OnComplete)
  i7098.CompleteStep = request.d('System.Action', i7099[2], i7098.CompleteStep)
  var i7101 = i7099[3]
  var i7100 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationController')))
  for(var i = 0; i < i7101.length; i += 2) {
  request.r(i7101[i + 0], i7101[i + 1], 1, i7100, '')
  }
  i7098.skeletons = i7100
  request.r(i7099[4], i7099[5], 0, i7098, 'winScene')
  request.r(i7099[6], i7099[7], 0, i7098, 'failScene')
  request.r(i7099[8], i7099[9], 0, i7098, 'stepSound')
  i7098.complete = !!i7099[10]
  i7098.currentStep = i7099[11]
  i7098.maxStep = i7099[12]
  request.r(i7099[13], i7099[14], 0, i7098, 'normalStep')
  request.r(i7099[15], i7099[16], 0, i7098, 'lastStep')
  request.r(i7099[17], i7099[18], 0, i7098, 'currentStepText')
  request.r(i7099[19], i7099[20], 0, i7098, 'maxStepText')
  request.r(i7099[21], i7099[22], 0, i7098, 'slider')
  i7098.DelayComplete = i7099[23]
  i7098.subTime = i7099[24]
  i7098.startSub = i7099[25]
  var i7103 = i7099[26]
  var i7102 = new (System.Collections.Generic.List$1(Bridge.ns('Sub')))
  for(var i = 0; i < i7103.length; i += 1) {
    i7102.add(request.d('Sub', i7103[i + 0]));
  }
  i7098.subs = i7102
  request.r(i7099[27], i7099[28], 0, i7098, 'sub')
  request.r(i7099[29], i7099[30], 0, i7098, 'subText')
  return i7098
}

Deserializers["System.Action"] = function (request, data, root) {
  var i7104 = root || request.c( 'System.Action' )
  var i7105 = data
  return i7104
}

Deserializers["Sub"] = function (request, data, root) {
  var i7110 = root || request.c( 'Sub' )
  var i7111 = data
  request.r(i7111[0], i7111[1], 0, i7110, 'Item')
  i7110.Delay = i7111[2]
  i7110.SubText = i7111[3]
  return i7110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i7112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i7113 = data
  i7112.ambientIntensity = i7113[0]
  i7112.reflectionIntensity = i7113[1]
  i7112.ambientMode = i7113[2]
  i7112.ambientLight = new pc.Color(i7113[3], i7113[4], i7113[5], i7113[6])
  i7112.ambientSkyColor = new pc.Color(i7113[7], i7113[8], i7113[9], i7113[10])
  i7112.ambientGroundColor = new pc.Color(i7113[11], i7113[12], i7113[13], i7113[14])
  i7112.ambientEquatorColor = new pc.Color(i7113[15], i7113[16], i7113[17], i7113[18])
  i7112.fogColor = new pc.Color(i7113[19], i7113[20], i7113[21], i7113[22])
  i7112.fogEndDistance = i7113[23]
  i7112.fogStartDistance = i7113[24]
  i7112.fogDensity = i7113[25]
  i7112.fog = !!i7113[26]
  request.r(i7113[27], i7113[28], 0, i7112, 'skybox')
  i7112.fogMode = i7113[29]
  var i7115 = i7113[30]
  var i7114 = []
  for(var i = 0; i < i7115.length; i += 1) {
    i7114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i7115[i + 0]) );
  }
  i7112.lightmaps = i7114
  i7112.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i7113[31], i7112.lightProbes)
  i7112.lightmapsMode = i7113[32]
  i7112.mixedBakeMode = i7113[33]
  i7112.environmentLightingMode = i7113[34]
  i7112.ambientProbe = new pc.SphericalHarmonicsL2(i7113[35])
  request.r(i7113[36], i7113[37], 0, i7112, 'customReflection')
  request.r(i7113[38], i7113[39], 0, i7112, 'defaultReflection')
  i7112.defaultReflectionMode = i7113[40]
  i7112.defaultReflectionResolution = i7113[41]
  i7112.sunLightObjectId = i7113[42]
  i7112.pixelLightCount = i7113[43]
  i7112.defaultReflectionHDR = !!i7113[44]
  i7112.hasLightDataAsset = !!i7113[45]
  i7112.hasManualGenerate = !!i7113[46]
  return i7112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i7118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i7119 = data
  request.r(i7119[0], i7119[1], 0, i7118, 'lightmapColor')
  request.r(i7119[2], i7119[3], 0, i7118, 'lightmapDirection')
  request.r(i7119[4], i7119[5], 0, i7118, 'shadowMask')
  return i7118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i7120 = root || new UnityEngine.LightProbes()
  var i7121 = data
  return i7120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i7128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i7129 = data
  var i7131 = i7129[0]
  var i7130 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i7131.length; i += 1) {
    i7130.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i7131[i + 0]));
  }
  i7128.ShaderCompilationErrors = i7130
  i7128.name = i7129[1]
  i7128.guid = i7129[2]
  var i7133 = i7129[3]
  var i7132 = []
  for(var i = 0; i < i7133.length; i += 1) {
    i7132.push( i7133[i + 0] );
  }
  i7128.shaderDefinedKeywords = i7132
  var i7135 = i7129[4]
  var i7134 = []
  for(var i = 0; i < i7135.length; i += 1) {
    i7134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i7135[i + 0]) );
  }
  i7128.passes = i7134
  var i7137 = i7129[5]
  var i7136 = []
  for(var i = 0; i < i7137.length; i += 1) {
    i7136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i7137[i + 0]) );
  }
  i7128.usePasses = i7136
  var i7139 = i7129[6]
  var i7138 = []
  for(var i = 0; i < i7139.length; i += 1) {
    i7138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i7139[i + 0]) );
  }
  i7128.defaultParameterValues = i7138
  request.r(i7129[7], i7129[8], 0, i7128, 'unityFallbackShader')
  i7128.readDepth = !!i7129[9]
  i7128.hasDepthOnlyPass = !!i7129[10]
  i7128.isCreatedByShaderGraph = !!i7129[11]
  i7128.disableBatching = !!i7129[12]
  i7128.compiled = !!i7129[13]
  return i7128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i7142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i7143 = data
  i7142.shaderName = i7143[0]
  i7142.errorMessage = i7143[1]
  return i7142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i7146 = root || new pc.UnityShaderPass()
  var i7147 = data
  i7146.id = i7147[0]
  i7146.subShaderIndex = i7147[1]
  i7146.name = i7147[2]
  i7146.passType = i7147[3]
  i7146.grabPassTextureName = i7147[4]
  i7146.usePass = !!i7147[5]
  i7146.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7147[6], i7146.zTest)
  i7146.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7147[7], i7146.zWrite)
  i7146.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7147[8], i7146.culling)
  i7146.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7147[9], i7146.blending)
  i7146.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7147[10], i7146.alphaBlending)
  i7146.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7147[11], i7146.colorWriteMask)
  i7146.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7147[12], i7146.offsetUnits)
  i7146.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7147[13], i7146.offsetFactor)
  i7146.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7147[14], i7146.stencilRef)
  i7146.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7147[15], i7146.stencilReadMask)
  i7146.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7147[16], i7146.stencilWriteMask)
  i7146.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7147[17], i7146.stencilOp)
  i7146.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7147[18], i7146.stencilOpFront)
  i7146.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7147[19], i7146.stencilOpBack)
  var i7149 = i7147[20]
  var i7148 = []
  for(var i = 0; i < i7149.length; i += 1) {
    i7148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i7149[i + 0]) );
  }
  i7146.tags = i7148
  var i7151 = i7147[21]
  var i7150 = []
  for(var i = 0; i < i7151.length; i += 1) {
    i7150.push( i7151[i + 0] );
  }
  i7146.passDefinedKeywords = i7150
  var i7153 = i7147[22]
  var i7152 = []
  for(var i = 0; i < i7153.length; i += 1) {
    i7152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i7153[i + 0]) );
  }
  i7146.passDefinedKeywordGroups = i7152
  var i7155 = i7147[23]
  var i7154 = []
  for(var i = 0; i < i7155.length; i += 1) {
    i7154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7155[i + 0]) );
  }
  i7146.variants = i7154
  var i7157 = i7147[24]
  var i7156 = []
  for(var i = 0; i < i7157.length; i += 1) {
    i7156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7157[i + 0]) );
  }
  i7146.excludedVariants = i7156
  i7146.hasDepthReader = !!i7147[25]
  return i7146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i7158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i7159 = data
  i7158.val = i7159[0]
  i7158.name = i7159[1]
  return i7158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i7160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i7161 = data
  i7160.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7161[0], i7160.src)
  i7160.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7161[1], i7160.dst)
  i7160.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7161[2], i7160.op)
  return i7160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i7162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i7163 = data
  i7162.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7163[0], i7162.pass)
  i7162.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7163[1], i7162.fail)
  i7162.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7163[2], i7162.zFail)
  i7162.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7163[3], i7162.comp)
  return i7162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i7166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i7167 = data
  i7166.name = i7167[0]
  i7166.value = i7167[1]
  return i7166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i7170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i7171 = data
  var i7173 = i7171[0]
  var i7172 = []
  for(var i = 0; i < i7173.length; i += 1) {
    i7172.push( i7173[i + 0] );
  }
  i7170.keywords = i7172
  i7170.hasDiscard = !!i7171[1]
  return i7170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i7176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i7177 = data
  i7176.passId = i7177[0]
  i7176.subShaderIndex = i7177[1]
  var i7179 = i7177[2]
  var i7178 = []
  for(var i = 0; i < i7179.length; i += 1) {
    i7178.push( i7179[i + 0] );
  }
  i7176.keywords = i7178
  i7176.vertexProgram = i7177[3]
  i7176.fragmentProgram = i7177[4]
  i7176.exportedForWebGl2 = !!i7177[5]
  i7176.readDepth = !!i7177[6]
  return i7176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i7182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i7183 = data
  request.r(i7183[0], i7183[1], 0, i7182, 'shader')
  i7182.pass = i7183[2]
  return i7182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i7186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i7187 = data
  i7186.name = i7187[0]
  i7186.type = i7187[1]
  i7186.value = new pc.Vec4( i7187[2], i7187[3], i7187[4], i7187[5] )
  i7186.textureValue = i7187[6]
  i7186.shaderPropertyFlag = i7187[7]
  return i7186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i7188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i7189 = data
  i7188.name = i7189[0]
  request.r(i7189[1], i7189[2], 0, i7188, 'texture')
  i7188.aabb = i7189[3]
  i7188.vertices = i7189[4]
  i7188.triangles = i7189[5]
  i7188.textureRect = UnityEngine.Rect.MinMaxRect(i7189[6], i7189[7], i7189[8], i7189[9])
  i7188.packedRect = UnityEngine.Rect.MinMaxRect(i7189[10], i7189[11], i7189[12], i7189[13])
  i7188.border = new pc.Vec4( i7189[14], i7189[15], i7189[16], i7189[17] )
  i7188.transparency = i7189[18]
  i7188.bounds = i7189[19]
  i7188.pixelsPerUnit = i7189[20]
  i7188.textureWidth = i7189[21]
  i7188.textureHeight = i7189[22]
  i7188.nativeSize = new pc.Vec2( i7189[23], i7189[24] )
  i7188.pivot = new pc.Vec2( i7189[25], i7189[26] )
  i7188.textureRectOffset = new pc.Vec2( i7189[27], i7189[28] )
  return i7188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i7190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i7191 = data
  i7190.name = i7191[0]
  return i7190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i7192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i7193 = data
  i7192.name = i7193[0]
  i7192.ascent = i7193[1]
  i7192.originalLineHeight = i7193[2]
  i7192.fontSize = i7193[3]
  var i7195 = i7193[4]
  var i7194 = []
  for(var i = 0; i < i7195.length; i += 1) {
    i7194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i7195[i + 0]) );
  }
  i7192.characterInfo = i7194
  request.r(i7193[5], i7193[6], 0, i7192, 'texture')
  i7192.originalFontSize = i7193[7]
  return i7192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i7198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i7199 = data
  i7198.index = i7199[0]
  i7198.advance = i7199[1]
  i7198.bearing = i7199[2]
  i7198.glyphWidth = i7199[3]
  i7198.glyphHeight = i7199[4]
  i7198.minX = i7199[5]
  i7198.maxX = i7199[6]
  i7198.minY = i7199[7]
  i7198.maxY = i7199[8]
  i7198.uvBottomLeftX = i7199[9]
  i7198.uvBottomLeftY = i7199[10]
  i7198.uvBottomRightX = i7199[11]
  i7198.uvBottomRightY = i7199[12]
  i7198.uvTopLeftX = i7199[13]
  i7198.uvTopLeftY = i7199[14]
  i7198.uvTopRightX = i7199[15]
  i7198.uvTopRightY = i7199[16]
  return i7198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i7200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i7201 = data
  i7200.name = i7201[0]
  i7200.bytes64 = i7201[1]
  i7200.data = i7201[2]
  return i7200
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i7202 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i7203 = data
  var i7205 = i7203[0]
  var i7204 = []
  for(var i = 0; i < i7205.length; i += 2) {
  request.r(i7205[i + 0], i7205[i + 1], 2, i7204, '')
  }
  i7202.atlasAssets = i7204
  i7202.scale = i7203[1]
  request.r(i7203[2], i7203[3], 0, i7202, 'skeletonJSON')
  i7202.isUpgradingBlendModeMaterials = !!i7203[4]
  i7202.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i7203[5], i7202.blendModeMaterials)
  var i7207 = i7203[6]
  var i7206 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i7207.length; i += 2) {
  request.r(i7207[i + 0], i7207[i + 1], 1, i7206, '')
  }
  i7202.skeletonDataModifiers = i7206
  var i7209 = i7203[7]
  var i7208 = []
  for(var i = 0; i < i7209.length; i += 1) {
    i7208.push( i7209[i + 0] );
  }
  i7202.fromAnimation = i7208
  var i7211 = i7203[8]
  var i7210 = []
  for(var i = 0; i < i7211.length; i += 1) {
    i7210.push( i7211[i + 0] );
  }
  i7202.toAnimation = i7210
  i7202.duration = i7203[9]
  i7202.defaultMix = i7203[10]
  request.r(i7203[11], i7203[12], 0, i7202, 'controller')
  return i7202
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i7214 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i7215 = data
  i7214.applyAdditiveMaterial = !!i7215[0]
  var i7217 = i7215[1]
  var i7216 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i7217.length; i += 1) {
    i7216.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i7217[i + 0]));
  }
  i7214.additiveMaterials = i7216
  var i7219 = i7215[2]
  var i7218 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i7219.length; i += 1) {
    i7218.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i7219[i + 0]));
  }
  i7214.multiplyMaterials = i7218
  var i7221 = i7215[3]
  var i7220 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i7221.length; i += 1) {
    i7220.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i7221[i + 0]));
  }
  i7214.screenMaterials = i7220
  i7214.requiresBlendModeMaterials = !!i7215[4]
  return i7214
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i7224 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i7225 = data
  i7224.pageName = i7225[0]
  request.r(i7225[1], i7225[2], 0, i7224, 'material')
  return i7224
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i7228 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i7229 = data
  request.r(i7229[0], i7229[1], 0, i7228, 'atlasFile')
  var i7231 = i7229[2]
  var i7230 = []
  for(var i = 0; i < i7231.length; i += 2) {
  request.r(i7231[i + 0], i7231[i + 1], 2, i7230, '')
  }
  i7228.materials = i7230
  i7228.textureLoadingMode = i7229[3]
  request.r(i7229[4], i7229[5], 0, i7228, 'onDemandTextureLoader')
  return i7228
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i7232 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i7233 = data
  i7232.useSafeMode = !!i7233[0]
  i7232.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i7233[1], i7232.safeModeOptions)
  i7232.timeScale = i7233[2]
  i7232.unscaledTimeScale = i7233[3]
  i7232.useSmoothDeltaTime = !!i7233[4]
  i7232.maxSmoothUnscaledTime = i7233[5]
  i7232.rewindCallbackMode = i7233[6]
  i7232.showUnityEditorReport = !!i7233[7]
  i7232.logBehaviour = i7233[8]
  i7232.drawGizmos = !!i7233[9]
  i7232.defaultRecyclable = !!i7233[10]
  i7232.defaultAutoPlay = i7233[11]
  i7232.defaultUpdateType = i7233[12]
  i7232.defaultTimeScaleIndependent = !!i7233[13]
  i7232.defaultEaseType = i7233[14]
  i7232.defaultEaseOvershootOrAmplitude = i7233[15]
  i7232.defaultEasePeriod = i7233[16]
  i7232.defaultAutoKill = !!i7233[17]
  i7232.defaultLoopType = i7233[18]
  i7232.debugMode = !!i7233[19]
  i7232.debugStoreTargetId = !!i7233[20]
  i7232.showPreviewPanel = !!i7233[21]
  i7232.storeSettingsLocation = i7233[22]
  i7232.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i7233[23], i7232.modules)
  i7232.createASMDEF = !!i7233[24]
  i7232.showPlayingTweens = !!i7233[25]
  i7232.showPausedTweens = !!i7233[26]
  return i7232
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i7234 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i7235 = data
  i7234.logBehaviour = i7235[0]
  i7234.nestedTweenFailureBehaviour = i7235[1]
  return i7234
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i7236 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i7237 = data
  i7236.showPanel = !!i7237[0]
  i7236.audioEnabled = !!i7237[1]
  i7236.physicsEnabled = !!i7237[2]
  i7236.physics2DEnabled = !!i7237[3]
  i7236.spriteEnabled = !!i7237[4]
  i7236.uiEnabled = !!i7237[5]
  i7236.textMeshProEnabled = !!i7237[6]
  i7236.tk2DEnabled = !!i7237[7]
  i7236.deAudioEnabled = !!i7237[8]
  i7236.deUnityExtendedEnabled = !!i7237[9]
  i7236.epoOutlineEnabled = !!i7237[10]
  return i7236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i7238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i7239 = data
  var i7241 = i7239[0]
  var i7240 = []
  for(var i = 0; i < i7241.length; i += 1) {
    i7240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i7241[i + 0]) );
  }
  i7238.files = i7240
  i7238.componentToPrefabIds = i7239[1]
  return i7238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i7244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i7245 = data
  i7244.path = i7245[0]
  request.r(i7245[1], i7245[2], 0, i7244, 'unityObject')
  return i7244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i7246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i7247 = data
  var i7249 = i7247[0]
  var i7248 = []
  for(var i = 0; i < i7249.length; i += 1) {
    i7248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i7249[i + 0]) );
  }
  i7246.scriptsExecutionOrder = i7248
  var i7251 = i7247[1]
  var i7250 = []
  for(var i = 0; i < i7251.length; i += 1) {
    i7250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i7251[i + 0]) );
  }
  i7246.sortingLayers = i7250
  var i7253 = i7247[2]
  var i7252 = []
  for(var i = 0; i < i7253.length; i += 1) {
    i7252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i7253[i + 0]) );
  }
  i7246.cullingLayers = i7252
  i7246.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i7247[3], i7246.timeSettings)
  i7246.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i7247[4], i7246.physicsSettings)
  i7246.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i7247[5], i7246.physics2DSettings)
  i7246.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7247[6], i7246.qualitySettings)
  i7246.enableRealtimeShadows = !!i7247[7]
  i7246.enableAutoInstancing = !!i7247[8]
  i7246.enableStaticBatching = !!i7247[9]
  i7246.enableDynamicBatching = !!i7247[10]
  i7246.usePreservativeDynamicBatching = !!i7247[11]
  i7246.lightmapEncodingQuality = i7247[12]
  i7246.desiredColorSpace = i7247[13]
  var i7255 = i7247[14]
  var i7254 = []
  for(var i = 0; i < i7255.length; i += 1) {
    i7254.push( i7255[i + 0] );
  }
  i7246.allTags = i7254
  return i7246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i7258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i7259 = data
  i7258.name = i7259[0]
  i7258.value = i7259[1]
  return i7258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i7262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i7263 = data
  i7262.id = i7263[0]
  i7262.name = i7263[1]
  i7262.value = i7263[2]
  return i7262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i7266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i7267 = data
  i7266.id = i7267[0]
  i7266.name = i7267[1]
  return i7266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i7268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i7269 = data
  i7268.fixedDeltaTime = i7269[0]
  i7268.maximumDeltaTime = i7269[1]
  i7268.timeScale = i7269[2]
  i7268.maximumParticleTimestep = i7269[3]
  return i7268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i7270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i7271 = data
  i7270.gravity = new pc.Vec3( i7271[0], i7271[1], i7271[2] )
  i7270.defaultSolverIterations = i7271[3]
  i7270.bounceThreshold = i7271[4]
  i7270.autoSyncTransforms = !!i7271[5]
  i7270.autoSimulation = !!i7271[6]
  var i7273 = i7271[7]
  var i7272 = []
  for(var i = 0; i < i7273.length; i += 1) {
    i7272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i7273[i + 0]) );
  }
  i7270.collisionMatrix = i7272
  return i7270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i7276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i7277 = data
  i7276.enabled = !!i7277[0]
  i7276.layerId = i7277[1]
  i7276.otherLayerId = i7277[2]
  return i7276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i7278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i7279 = data
  request.r(i7279[0], i7279[1], 0, i7278, 'material')
  i7278.gravity = new pc.Vec2( i7279[2], i7279[3] )
  i7278.positionIterations = i7279[4]
  i7278.velocityIterations = i7279[5]
  i7278.velocityThreshold = i7279[6]
  i7278.maxLinearCorrection = i7279[7]
  i7278.maxAngularCorrection = i7279[8]
  i7278.maxTranslationSpeed = i7279[9]
  i7278.maxRotationSpeed = i7279[10]
  i7278.baumgarteScale = i7279[11]
  i7278.baumgarteTOIScale = i7279[12]
  i7278.timeToSleep = i7279[13]
  i7278.linearSleepTolerance = i7279[14]
  i7278.angularSleepTolerance = i7279[15]
  i7278.defaultContactOffset = i7279[16]
  i7278.autoSimulation = !!i7279[17]
  i7278.queriesHitTriggers = !!i7279[18]
  i7278.queriesStartInColliders = !!i7279[19]
  i7278.callbacksOnDisable = !!i7279[20]
  i7278.reuseCollisionCallbacks = !!i7279[21]
  i7278.autoSyncTransforms = !!i7279[22]
  var i7281 = i7279[23]
  var i7280 = []
  for(var i = 0; i < i7281.length; i += 1) {
    i7280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i7281[i + 0]) );
  }
  i7278.collisionMatrix = i7280
  return i7278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i7284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i7285 = data
  i7284.enabled = !!i7285[0]
  i7284.layerId = i7285[1]
  i7284.otherLayerId = i7285[2]
  return i7284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i7286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i7287 = data
  var i7289 = i7287[0]
  var i7288 = []
  for(var i = 0; i < i7289.length; i += 1) {
    i7288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7289[i + 0]) );
  }
  i7286.qualityLevels = i7288
  var i7291 = i7287[1]
  var i7290 = []
  for(var i = 0; i < i7291.length; i += 1) {
    i7290.push( i7291[i + 0] );
  }
  i7286.names = i7290
  i7286.shadows = i7287[2]
  i7286.anisotropicFiltering = i7287[3]
  i7286.antiAliasing = i7287[4]
  i7286.lodBias = i7287[5]
  i7286.shadowCascades = i7287[6]
  i7286.shadowDistance = i7287[7]
  i7286.shadowmaskMode = i7287[8]
  i7286.shadowProjection = i7287[9]
  i7286.shadowResolution = i7287[10]
  i7286.softParticles = !!i7287[11]
  i7286.softVegetation = !!i7287[12]
  i7286.activeColorSpace = i7287[13]
  i7286.desiredColorSpace = i7287[14]
  i7286.masterTextureLimit = i7287[15]
  i7286.maxQueuedFrames = i7287[16]
  i7286.particleRaycastBudget = i7287[17]
  i7286.pixelLightCount = i7287[18]
  i7286.realtimeReflectionProbes = !!i7287[19]
  i7286.shadowCascade2Split = i7287[20]
  i7286.shadowCascade4Split = new pc.Vec3( i7287[21], i7287[22], i7287[23] )
  i7286.streamingMipmapsActive = !!i7287[24]
  i7286.vSyncCount = i7287[25]
  i7286.asyncUploadBufferSize = i7287[26]
  i7286.asyncUploadTimeSlice = i7287[27]
  i7286.billboardsFaceCameraPosition = !!i7287[28]
  i7286.shadowNearPlaneOffset = i7287[29]
  i7286.streamingMipmapsMemoryBudget = i7287[30]
  i7286.maximumLODLevel = i7287[31]
  i7286.streamingMipmapsAddAllCameras = !!i7287[32]
  i7286.streamingMipmapsMaxLevelReduction = i7287[33]
  i7286.streamingMipmapsRenderersPerFrame = i7287[34]
  i7286.resolutionScalingFixedDPIFactor = i7287[35]
  i7286.streamingMipmapsMaxFileIORequests = i7287[36]
  i7286.currentQualityLevel = i7287[37]
  return i7286
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i7294 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i7295 = data
  request.r(i7295[0], i7295[1], 0, i7294, 'm_ObjectArgument')
  i7294.m_ObjectArgumentAssemblyTypeName = i7295[2]
  i7294.m_IntArgument = i7295[3]
  i7294.m_FloatArgument = i7295[4]
  i7294.m_StringArgument = i7295[5]
  i7294.m_BoolArgument = !!i7295[6]
  return i7294
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

Deserializers.buildID = "06fea5f9-d0e6-4d73-a572-ea5b69eed662";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

