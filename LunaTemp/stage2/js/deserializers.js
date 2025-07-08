var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.JointSpring' )
  var i1033 = data
  i1032.spring = i1033[0]
  i1032.damper = i1033[1]
  i1032.targetPosition = i1033[2]
  return i1032
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.JointMotor' )
  var i1035 = data
  i1034.m_TargetVelocity = i1035[0]
  i1034.m_Force = i1035[1]
  i1034.m_FreeSpin = i1035[2]
  return i1034
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1036 = root || request.c( 'UnityEngine.JointLimits' )
  var i1037 = data
  i1036.m_Min = i1037[0]
  i1036.m_Max = i1037[1]
  i1036.m_Bounciness = i1037[2]
  i1036.m_BounceMinVelocity = i1037[3]
  i1036.m_ContactDistance = i1037[4]
  i1036.minBounce = i1037[5]
  i1036.maxBounce = i1037[6]
  return i1036
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.JointDrive' )
  var i1039 = data
  i1038.m_PositionSpring = i1039[0]
  i1038.m_PositionDamper = i1039[1]
  i1038.m_MaximumForce = i1039[2]
  i1038.m_UseAcceleration = i1039[3]
  return i1038
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1041 = data
  i1040.m_Spring = i1041[0]
  i1040.m_Damper = i1041[1]
  return i1040
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1043 = data
  i1042.m_Limit = i1043[0]
  i1042.m_Bounciness = i1043[1]
  i1042.m_ContactDistance = i1043[2]
  return i1042
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1045 = data
  i1044.m_ExtremumSlip = i1045[0]
  i1044.m_ExtremumValue = i1045[1]
  i1044.m_AsymptoteSlip = i1045[2]
  i1044.m_AsymptoteValue = i1045[3]
  i1044.m_Stiffness = i1045[4]
  return i1044
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1047 = data
  i1046.m_LowerAngle = i1047[0]
  i1046.m_UpperAngle = i1047[1]
  return i1046
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1049 = data
  i1048.m_MotorSpeed = i1049[0]
  i1048.m_MaximumMotorTorque = i1049[1]
  return i1048
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1051 = data
  i1050.m_DampingRatio = i1051[0]
  i1050.m_Frequency = i1051[1]
  i1050.m_Angle = i1051[2]
  return i1050
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1053 = data
  i1052.m_LowerTranslation = i1053[0]
  i1052.m_UpperTranslation = i1053[1]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1055 = data
  i1054.name = i1055[0]
  i1054.width = i1055[1]
  i1054.height = i1055[2]
  i1054.mipmapCount = i1055[3]
  i1054.anisoLevel = i1055[4]
  i1054.filterMode = i1055[5]
  i1054.hdr = !!i1055[6]
  i1054.format = i1055[7]
  i1054.wrapMode = i1055[8]
  i1054.alphaIsTransparency = !!i1055[9]
  i1054.alphaSource = i1055[10]
  i1054.graphicsFormat = i1055[11]
  i1054.sRGBTexture = !!i1055[12]
  i1054.desiredColorSpace = i1055[13]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1056 = root || new pc.UnityMaterial()
  var i1057 = data
  i1056.name = i1057[0]
  request.r(i1057[1], i1057[2], 0, i1056, 'shader')
  i1056.renderQueue = i1057[3]
  i1056.enableInstancing = !!i1057[4]
  var i1059 = i1057[5]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1059[i + 0]) );
  }
  i1056.floatParameters = i1058
  var i1061 = i1057[6]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1061[i + 0]) );
  }
  i1056.colorParameters = i1060
  var i1063 = i1057[7]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1063[i + 0]) );
  }
  i1056.vectorParameters = i1062
  var i1065 = i1057[8]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1065[i + 0]) );
  }
  i1056.textureParameters = i1064
  var i1067 = i1057[9]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1067[i + 0]) );
  }
  i1056.materialFlags = i1066
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1071 = data
  i1070.name = i1071[0]
  i1070.value = i1071[1]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1075 = data
  i1074.name = i1075[0]
  i1074.value = new pc.Color(i1075[1], i1075[2], i1075[3], i1075[4])
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1079 = data
  i1078.name = i1079[0]
  i1078.value = new pc.Vec4( i1079[1], i1079[2], i1079[3], i1079[4] )
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1083 = data
  i1082.name = i1083[0]
  request.r(i1083[1], i1083[2], 0, i1082, 'value')
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1087 = data
  i1086.name = i1087[0]
  i1086.enabled = !!i1087[1]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1089 = data
  i1088.name = i1089[0]
  i1088.index = i1089[1]
  i1088.startup = !!i1089[2]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1091 = data
  i1090.position = new pc.Vec3( i1091[0], i1091[1], i1091[2] )
  i1090.scale = new pc.Vec3( i1091[3], i1091[4], i1091[5] )
  i1090.rotation = new pc.Quat(i1091[6], i1091[7], i1091[8], i1091[9])
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1093 = data
  i1092.enabled = !!i1093[0]
  i1092.aspect = i1093[1]
  i1092.orthographic = !!i1093[2]
  i1092.orthographicSize = i1093[3]
  i1092.backgroundColor = new pc.Color(i1093[4], i1093[5], i1093[6], i1093[7])
  i1092.nearClipPlane = i1093[8]
  i1092.farClipPlane = i1093[9]
  i1092.fieldOfView = i1093[10]
  i1092.depth = i1093[11]
  i1092.clearFlags = i1093[12]
  i1092.cullingMask = i1093[13]
  i1092.rect = i1093[14]
  request.r(i1093[15], i1093[16], 0, i1092, 'targetTexture')
  i1092.usePhysicalProperties = !!i1093[17]
  i1092.focalLength = i1093[18]
  i1092.sensorSize = new pc.Vec2( i1093[19], i1093[20] )
  i1092.lensShift = new pc.Vec2( i1093[21], i1093[22] )
  i1092.gateFit = i1093[23]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1095 = data
  i1094.name = i1095[0]
  i1094.tagId = i1095[1]
  i1094.enabled = !!i1095[2]
  i1094.isStatic = !!i1095[3]
  i1094.layer = i1095[4]
  return i1094
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1097 = data
  request.r(i1097[0], i1097[1], 0, i1096, 'm_FirstSelected')
  i1096.m_sendNavigationEvents = !!i1097[2]
  i1096.m_DragThreshold = i1097[3]
  return i1096
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1099 = data
  i1098.m_HorizontalAxis = i1099[0]
  i1098.m_VerticalAxis = i1099[1]
  i1098.m_SubmitButton = i1099[2]
  i1098.m_CancelButton = i1099[3]
  i1098.m_InputActionsPerSecond = i1099[4]
  i1098.m_RepeatDelay = i1099[5]
  i1098.m_ForceModuleActive = !!i1099[6]
  i1098.m_SendPointerHoverToParent = !!i1099[7]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1101 = data
  i1100.pivot = new pc.Vec2( i1101[0], i1101[1] )
  i1100.anchorMin = new pc.Vec2( i1101[2], i1101[3] )
  i1100.anchorMax = new pc.Vec2( i1101[4], i1101[5] )
  i1100.sizeDelta = new pc.Vec2( i1101[6], i1101[7] )
  i1100.anchoredPosition3D = new pc.Vec3( i1101[8], i1101[9], i1101[10] )
  i1100.rotation = new pc.Quat(i1101[11], i1101[12], i1101[13], i1101[14])
  i1100.scale = new pc.Vec3( i1101[15], i1101[16], i1101[17] )
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1103 = data
  i1102.enabled = !!i1103[0]
  i1102.planeDistance = i1103[1]
  i1102.referencePixelsPerUnit = i1103[2]
  i1102.isFallbackOverlay = !!i1103[3]
  i1102.renderMode = i1103[4]
  i1102.renderOrder = i1103[5]
  i1102.sortingLayerName = i1103[6]
  i1102.sortingOrder = i1103[7]
  i1102.scaleFactor = i1103[8]
  request.r(i1103[9], i1103[10], 0, i1102, 'worldCamera')
  i1102.overrideSorting = !!i1103[11]
  i1102.pixelPerfect = !!i1103[12]
  i1102.targetDisplay = i1103[13]
  i1102.overridePixelPerfect = !!i1103[14]
  return i1102
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1105 = data
  i1104.m_UiScaleMode = i1105[0]
  i1104.m_ReferencePixelsPerUnit = i1105[1]
  i1104.m_ScaleFactor = i1105[2]
  i1104.m_ReferenceResolution = new pc.Vec2( i1105[3], i1105[4] )
  i1104.m_ScreenMatchMode = i1105[5]
  i1104.m_MatchWidthOrHeight = i1105[6]
  i1104.m_PhysicalUnit = i1105[7]
  i1104.m_FallbackScreenDPI = i1105[8]
  i1104.m_DefaultSpriteDPI = i1105[9]
  i1104.m_DynamicPixelsPerUnit = i1105[10]
  i1104.m_PresetInfoIsWorld = !!i1105[11]
  return i1104
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1107 = data
  i1106.m_IgnoreReversedGraphics = !!i1107[0]
  i1106.m_BlockingObjects = i1107[1]
  i1106.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1107[2] )
  return i1106
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1108 = root || request.c( 'LunaManager' )
  var i1109 = data
  var i1111 = i1109[0]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 2) {
  request.r(i1111[i + 0], i1111[i + 1], 2, i1110, '')
  }
  i1108.lstBtnInstall = i1110
  request.r(i1109[1], i1109[2], 0, i1108, 'EndCard')
  i1108.countPlay = i1109[3]
  i1108.countPlayFinal = i1109[4]
  i1108.timeDropFinal = i1109[5]
  i1108.colorBG = new pc.Color(i1109[6], i1109[7], i1109[8], i1109[9])
  request.r(i1109[10], i1109[11], 0, i1108, 'texture2D')
  request.r(i1109[12], i1109[13], 0, i1108, 'rawImageBG')
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1115 = data
  i1114.cullTransparentMesh = !!i1115[0]
  return i1114
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'm_Texture')
  i1116.m_UVRect = UnityEngine.Rect.MinMaxRect(i1117[2], i1117[3], i1117[4], i1117[5])
  request.r(i1117[6], i1117[7], 0, i1116, 'm_Material')
  i1116.m_Maskable = !!i1117[8]
  i1116.m_Color = new pc.Color(i1117[9], i1117[10], i1117[11], i1117[12])
  i1116.m_RaycastTarget = !!i1117[13]
  i1116.m_RaycastPadding = new pc.Vec4( i1117[14], i1117[15], i1117[16], i1117[17] )
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'clip')
  request.r(i1119[2], i1119[3], 0, i1118, 'outputAudioMixerGroup')
  i1118.playOnAwake = !!i1119[4]
  i1118.loop = !!i1119[5]
  i1118.time = i1119[6]
  i1118.volume = i1119[7]
  i1118.pitch = i1119[8]
  i1118.enabled = !!i1119[9]
  return i1118
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1120 = root || request.c( 'UnityEngine.UI.Image' )
  var i1121 = data
  request.r(i1121[0], i1121[1], 0, i1120, 'm_Sprite')
  i1120.m_Type = i1121[2]
  i1120.m_PreserveAspect = !!i1121[3]
  i1120.m_FillCenter = !!i1121[4]
  i1120.m_FillMethod = i1121[5]
  i1120.m_FillAmount = i1121[6]
  i1120.m_FillClockwise = !!i1121[7]
  i1120.m_FillOrigin = i1121[8]
  i1120.m_UseSpriteMesh = !!i1121[9]
  i1120.m_PixelsPerUnitMultiplier = i1121[10]
  request.r(i1121[11], i1121[12], 0, i1120, 'm_Material')
  i1120.m_Maskable = !!i1121[13]
  i1120.m_Color = new pc.Color(i1121[14], i1121[15], i1121[16], i1121[17])
  i1120.m_RaycastTarget = !!i1121[18]
  i1120.m_RaycastPadding = new pc.Vec4( i1121[19], i1121[20], i1121[21], i1121[22] )
  return i1120
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1122 = root || request.c( 'DropZone' )
  var i1123 = data
  i1122.idDrop = i1123[0]
  var i1125 = i1123[1]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 2, i1124, '')
  }
  i1122.steps = i1124
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1129 = data
  i1128.usedByComposite = !!i1129[0]
  i1128.autoTiling = !!i1129[1]
  i1128.size = new pc.Vec2( i1129[2], i1129[3] )
  i1128.edgeRadius = i1129[4]
  i1128.enabled = !!i1129[5]
  i1128.isTrigger = !!i1129[6]
  i1128.usedByEffector = !!i1129[7]
  i1128.density = i1129[8]
  i1128.offset = new pc.Vec2( i1129[9], i1129[10] )
  request.r(i1129[11], i1129[12], 0, i1128, 'material')
  return i1128
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1130 = root || request.c( 'UnityEngine.UI.Button' )
  var i1131 = data
  i1130.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1131[0], i1130.m_OnClick)
  i1130.m_Navigation = request.d('UnityEngine.UI.Navigation', i1131[1], i1130.m_Navigation)
  i1130.m_Transition = i1131[2]
  i1130.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1131[3], i1130.m_Colors)
  i1130.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1131[4], i1130.m_SpriteState)
  i1130.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1131[5], i1130.m_AnimationTriggers)
  i1130.m_Interactable = !!i1131[6]
  request.r(i1131[7], i1131[8], 0, i1130, 'm_TargetGraphic')
  return i1130
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1132 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1133 = data
  i1132.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1133[0], i1132.m_PersistentCalls)
  return i1132
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1134 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1135 = data
  var i1137 = i1135[0]
  var i1136 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.add(request.d('UnityEngine.Events.PersistentCall', i1137[i + 0]));
  }
  i1134.m_Calls = i1136
  return i1134
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1140 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1141 = data
  request.r(i1141[0], i1141[1], 0, i1140, 'm_Target')
  i1140.m_TargetAssemblyTypeName = i1141[2]
  i1140.m_MethodName = i1141[3]
  i1140.m_Mode = i1141[4]
  i1140.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1141[5], i1140.m_Arguments)
  i1140.m_CallState = i1141[6]
  return i1140
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1142 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1143 = data
  request.r(i1143[0], i1143[1], 0, i1142, 'm_ObjectArgument')
  i1142.m_ObjectArgumentAssemblyTypeName = i1143[2]
  i1142.m_IntArgument = i1143[3]
  i1142.m_FloatArgument = i1143[4]
  i1142.m_StringArgument = i1143[5]
  i1142.m_BoolArgument = !!i1143[6]
  return i1142
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1145 = data
  i1144.m_Mode = i1145[0]
  i1144.m_WrapAround = !!i1145[1]
  request.r(i1145[2], i1145[3], 0, i1144, 'm_SelectOnUp')
  request.r(i1145[4], i1145[5], 0, i1144, 'm_SelectOnDown')
  request.r(i1145[6], i1145[7], 0, i1144, 'm_SelectOnLeft')
  request.r(i1145[8], i1145[9], 0, i1144, 'm_SelectOnRight')
  return i1144
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1146 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1147 = data
  i1146.m_NormalColor = new pc.Color(i1147[0], i1147[1], i1147[2], i1147[3])
  i1146.m_HighlightedColor = new pc.Color(i1147[4], i1147[5], i1147[6], i1147[7])
  i1146.m_PressedColor = new pc.Color(i1147[8], i1147[9], i1147[10], i1147[11])
  i1146.m_SelectedColor = new pc.Color(i1147[12], i1147[13], i1147[14], i1147[15])
  i1146.m_DisabledColor = new pc.Color(i1147[16], i1147[17], i1147[18], i1147[19])
  i1146.m_ColorMultiplier = i1147[20]
  i1146.m_FadeDuration = i1147[21]
  return i1146
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1149 = data
  request.r(i1149[0], i1149[1], 0, i1148, 'm_HighlightedSprite')
  request.r(i1149[2], i1149[3], 0, i1148, 'm_PressedSprite')
  request.r(i1149[4], i1149[5], 0, i1148, 'm_SelectedSprite')
  request.r(i1149[6], i1149[7], 0, i1148, 'm_DisabledSprite')
  return i1148
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1150 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1151 = data
  i1150.m_NormalTrigger = i1151[0]
  i1150.m_HighlightedTrigger = i1151[1]
  i1150.m_PressedTrigger = i1151[2]
  i1150.m_SelectedTrigger = i1151[3]
  i1150.m_DisabledTrigger = i1151[4]
  return i1150
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i1152 = root || request.c( 'ClickItem' )
  var i1153 = data
  i1152.isPhone = !!i1153[0]
  var i1155 = i1153[1]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 2) {
  request.r(i1155[i + 0], i1155[i + 1], 2, i1154, '')
  }
  i1152.steps = i1154
  i1152.currentStep = i1153[2]
  return i1152
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1156 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1157 = data
  request.r(i1157[0], i1157[1], 0, i1156, 'skeletonDataAsset')
  request.r(i1157[2], i1157[3], 0, i1156, 'additiveMaterial')
  request.r(i1157[4], i1157[5], 0, i1156, 'multiplyMaterial')
  request.r(i1157[6], i1157[7], 0, i1156, 'screenMaterial')
  i1156.initialSkinName = i1157[8]
  i1156.initialFlipX = !!i1157[9]
  i1156.initialFlipY = !!i1157[10]
  i1156.startingAnimation = i1157[11]
  i1156.startingLoop = !!i1157[12]
  i1156.timeScale = i1157[13]
  i1156.freeze = !!i1157[14]
  i1156.layoutScaleMode = i1157[15]
  i1156.updateWhenInvisible = i1157[16]
  i1156.allowMultipleCanvasRenderers = !!i1157[17]
  var i1159 = i1157[18]
  var i1158 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1159.length; i += 2) {
  request.r(i1159[i + 0], i1159[i + 1], 1, i1158, '')
  }
  i1156.canvasRenderers = i1158
  i1156.enableSeparatorSlots = !!i1157[19]
  i1156.updateSeparatorPartLocation = !!i1157[20]
  i1156.updateSeparatorPartScale = !!i1157[21]
  i1156.disableMeshAssignmentOnOverride = !!i1157[22]
  i1156.referenceSize = new pc.Vec2( i1157[23], i1157[24] )
  i1156.referenceScale = i1157[25]
  i1156.rectTransformSize = new pc.Vec2( i1157[26], i1157[27] )
  i1156.editReferenceRect = !!i1157[28]
  var i1161 = i1157[29]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( i1161[i + 0] );
  }
  i1156.separatorSlotNames = i1160
  var i1163 = i1157[30]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1163.length; i += 2) {
  request.r(i1163[i + 0], i1163[i + 1], 1, i1162, '')
  }
  i1156.separatorParts = i1162
  i1156.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1157[31], i1156.meshGenerator)
  i1156.updateTiming = i1157[32]
  i1156.unscaledTime = !!i1157[33]
  request.r(i1157[34], i1157[35], 0, i1156, 'm_Material')
  i1156.m_Maskable = !!i1157[36]
  i1156.m_Color = new pc.Color(i1157[37], i1157[38], i1157[39], i1157[40])
  i1156.m_RaycastTarget = !!i1157[41]
  i1156.m_RaycastPadding = new pc.Vec4( i1157[42], i1157[43], i1157[44], i1157[45] )
  return i1156
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1170 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1171 = data
  i1170.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1171[0], i1170.settings)
  return i1170
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1172 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1173 = data
  i1172.useClipping = !!i1173[0]
  i1172.zSpacing = i1173[1]
  i1172.pmaVertexColors = !!i1173[2]
  i1172.tintBlack = !!i1173[3]
  i1172.canvasGroupTintBlack = !!i1173[4]
  i1172.calculateTangents = !!i1173[5]
  i1172.addNormals = !!i1173[6]
  i1172.immutableTriangles = !!i1173[7]
  return i1172
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1174 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1175 = data
  i1174.targetIsSelf = !!i1175[0]
  request.r(i1175[1], i1175[2], 0, i1174, 'targetGO')
  i1174.tweenTargetIsTargetGO = !!i1175[3]
  i1174.delay = i1175[4]
  i1174.duration = i1175[5]
  i1174.easeType = i1175[6]
  i1174.easeCurve = new pc.AnimationCurve( { keys_flow: i1175[7] } )
  i1174.loopType = i1175[8]
  i1174.loops = i1175[9]
  i1174.id = i1175[10]
  i1174.isRelative = !!i1175[11]
  i1174.isFrom = !!i1175[12]
  i1174.isIndependentUpdate = !!i1175[13]
  i1174.autoKill = !!i1175[14]
  i1174.autoGenerate = !!i1175[15]
  i1174.isActive = !!i1175[16]
  i1174.isValid = !!i1175[17]
  request.r(i1175[18], i1175[19], 0, i1174, 'target')
  i1174.animationType = i1175[20]
  i1174.targetType = i1175[21]
  i1174.forcedTargetType = i1175[22]
  i1174.autoPlay = !!i1175[23]
  i1174.useTargetAsV3 = !!i1175[24]
  i1174.endValueFloat = i1175[25]
  i1174.endValueV3 = new pc.Vec3( i1175[26], i1175[27], i1175[28] )
  i1174.endValueV2 = new pc.Vec2( i1175[29], i1175[30] )
  i1174.endValueColor = new pc.Color(i1175[31], i1175[32], i1175[33], i1175[34])
  i1174.endValueString = i1175[35]
  i1174.endValueRect = UnityEngine.Rect.MinMaxRect(i1175[36], i1175[37], i1175[38], i1175[39])
  request.r(i1175[40], i1175[41], 0, i1174, 'endValueTransform')
  i1174.optionalBool0 = !!i1175[42]
  i1174.optionalBool1 = !!i1175[43]
  i1174.optionalFloat0 = i1175[44]
  i1174.optionalInt0 = i1175[45]
  i1174.optionalRotationMode = i1175[46]
  i1174.optionalScrambleMode = i1175[47]
  i1174.optionalShakeRandomnessMode = i1175[48]
  i1174.optionalString = i1175[49]
  i1174.updateType = i1175[50]
  i1174.isSpeedBased = !!i1175[51]
  i1174.hasOnStart = !!i1175[52]
  i1174.hasOnPlay = !!i1175[53]
  i1174.hasOnUpdate = !!i1175[54]
  i1174.hasOnStepComplete = !!i1175[55]
  i1174.hasOnComplete = !!i1175[56]
  i1174.hasOnTweenCreated = !!i1175[57]
  i1174.hasOnRewind = !!i1175[58]
  i1174.onStart = request.d('UnityEngine.Events.UnityEvent', i1175[59], i1174.onStart)
  i1174.onPlay = request.d('UnityEngine.Events.UnityEvent', i1175[60], i1174.onPlay)
  i1174.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1175[61], i1174.onUpdate)
  i1174.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1175[62], i1174.onStepComplete)
  i1174.onComplete = request.d('UnityEngine.Events.UnityEvent', i1175[63], i1174.onComplete)
  i1174.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1175[64], i1174.onTweenCreated)
  i1174.onRewind = request.d('UnityEngine.Events.UnityEvent', i1175[65], i1174.onRewind)
  return i1174
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1176 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1177 = data
  i1176.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1177[0], i1176.m_PersistentCalls)
  return i1176
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1178 = root || request.c( 'DraggableItem' )
  var i1179 = data
  i1178.idDrag = i1179[0]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1181 = data
  i1180.m_Alpha = i1181[0]
  i1180.m_Interactable = !!i1181[1]
  i1180.m_BlocksRaycasts = !!i1181[2]
  i1180.m_IgnoreParentGroups = !!i1181[3]
  i1180.enabled = !!i1181[4]
  return i1180
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1182 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1183 = data
  i1182.m_Spacing = i1183[0]
  i1182.m_ChildForceExpandWidth = !!i1183[1]
  i1182.m_ChildForceExpandHeight = !!i1183[2]
  i1182.m_ChildControlWidth = !!i1183[3]
  i1182.m_ChildControlHeight = !!i1183[4]
  i1182.m_ChildScaleWidth = !!i1183[5]
  i1182.m_ChildScaleHeight = !!i1183[6]
  i1182.m_ReverseArrangement = !!i1183[7]
  i1182.m_Padding = UnityEngine.RectOffset.FromPaddings(i1183[8], i1183[9], i1183[10], i1183[11])
  i1182.m_ChildAlignment = i1183[12]
  return i1182
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1184 = root || request.c( 'UnityEngine.UI.Text' )
  var i1185 = data
  i1184.m_FontData = request.d('UnityEngine.UI.FontData', i1185[0], i1184.m_FontData)
  i1184.m_Text = i1185[1]
  request.r(i1185[2], i1185[3], 0, i1184, 'm_Material')
  i1184.m_Maskable = !!i1185[4]
  i1184.m_Color = new pc.Color(i1185[5], i1185[6], i1185[7], i1185[8])
  i1184.m_RaycastTarget = !!i1185[9]
  i1184.m_RaycastPadding = new pc.Vec4( i1185[10], i1185[11], i1185[12], i1185[13] )
  return i1184
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1186 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1187 = data
  request.r(i1187[0], i1187[1], 0, i1186, 'm_Font')
  i1186.m_FontSize = i1187[2]
  i1186.m_FontStyle = i1187[3]
  i1186.m_BestFit = !!i1187[4]
  i1186.m_MinSize = i1187[5]
  i1186.m_MaxSize = i1187[6]
  i1186.m_Alignment = i1187[7]
  i1186.m_AlignByGeometry = !!i1187[8]
  i1186.m_RichText = !!i1187[9]
  i1186.m_HorizontalOverflow = i1187[10]
  i1186.m_VerticalOverflow = i1187[11]
  i1186.m_LineSpacing = i1187[12]
  return i1186
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1188 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1189 = data
  i1188.m_ShowMaskGraphic = !!i1189[0]
  return i1188
}

Deserializers["IQFill"] = function (request, data, root) {
  var i1190 = root || request.c( 'IQFill' )
  var i1191 = data
  request.r(i1191[0], i1191[1], 0, i1190, 'fillImage')
  i1190.maxFillAmount = i1191[2]
  i1190.fillDuration = i1191[3]
  i1190.maxValue = i1191[4]
  i1190.addValue = i1191[5]
  i1190.fillEase = i1191[6]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1193 = data
  i1192.ambientIntensity = i1193[0]
  i1192.reflectionIntensity = i1193[1]
  i1192.ambientMode = i1193[2]
  i1192.ambientLight = new pc.Color(i1193[3], i1193[4], i1193[5], i1193[6])
  i1192.ambientSkyColor = new pc.Color(i1193[7], i1193[8], i1193[9], i1193[10])
  i1192.ambientGroundColor = new pc.Color(i1193[11], i1193[12], i1193[13], i1193[14])
  i1192.ambientEquatorColor = new pc.Color(i1193[15], i1193[16], i1193[17], i1193[18])
  i1192.fogColor = new pc.Color(i1193[19], i1193[20], i1193[21], i1193[22])
  i1192.fogEndDistance = i1193[23]
  i1192.fogStartDistance = i1193[24]
  i1192.fogDensity = i1193[25]
  i1192.fog = !!i1193[26]
  request.r(i1193[27], i1193[28], 0, i1192, 'skybox')
  i1192.fogMode = i1193[29]
  var i1195 = i1193[30]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1195[i + 0]) );
  }
  i1192.lightmaps = i1194
  i1192.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1193[31], i1192.lightProbes)
  i1192.lightmapsMode = i1193[32]
  i1192.mixedBakeMode = i1193[33]
  i1192.environmentLightingMode = i1193[34]
  i1192.ambientProbe = new pc.SphericalHarmonicsL2(i1193[35])
  i1192.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1193[36])
  i1192.useReferenceAmbientProbe = !!i1193[37]
  request.r(i1193[38], i1193[39], 0, i1192, 'customReflection')
  request.r(i1193[40], i1193[41], 0, i1192, 'defaultReflection')
  i1192.defaultReflectionMode = i1193[42]
  i1192.defaultReflectionResolution = i1193[43]
  i1192.sunLightObjectId = i1193[44]
  i1192.pixelLightCount = i1193[45]
  i1192.defaultReflectionHDR = !!i1193[46]
  i1192.hasLightDataAsset = !!i1193[47]
  i1192.hasManualGenerate = !!i1193[48]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1199 = data
  request.r(i1199[0], i1199[1], 0, i1198, 'lightmapColor')
  request.r(i1199[2], i1199[3], 0, i1198, 'lightmapDirection')
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1200 = root || new UnityEngine.LightProbes()
  var i1201 = data
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1209 = data
  var i1211 = i1209[0]
  var i1210 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1211[i + 0]));
  }
  i1208.ShaderCompilationErrors = i1210
  i1208.name = i1209[1]
  i1208.guid = i1209[2]
  var i1213 = i1209[3]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( i1213[i + 0] );
  }
  i1208.shaderDefinedKeywords = i1212
  var i1215 = i1209[4]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1215[i + 0]) );
  }
  i1208.passes = i1214
  var i1217 = i1209[5]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1217[i + 0]) );
  }
  i1208.usePasses = i1216
  var i1219 = i1209[6]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1219[i + 0]) );
  }
  i1208.defaultParameterValues = i1218
  request.r(i1209[7], i1209[8], 0, i1208, 'unityFallbackShader')
  i1208.readDepth = !!i1209[9]
  i1208.isCreatedByShaderGraph = !!i1209[10]
  i1208.usedBatchUniforms = i1209[11]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1223 = data
  i1222.shaderName = i1223[0]
  i1222.errorMessage = i1223[1]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1226 = root || new pc.UnityShaderPass()
  var i1227 = data
  i1226.id = i1227[0]
  i1226.subShaderIndex = i1227[1]
  i1226.name = i1227[2]
  i1226.passType = i1227[3]
  i1226.grabPassTextureName = i1227[4]
  i1226.usePass = !!i1227[5]
  i1226.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1227[6], i1226.zTest)
  i1226.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1227[7], i1226.zWrite)
  i1226.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1227[8], i1226.culling)
  i1226.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1227[9], i1226.blending)
  i1226.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1227[10], i1226.alphaBlending)
  i1226.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1227[11], i1226.colorWriteMask)
  i1226.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1227[12], i1226.offsetUnits)
  i1226.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1227[13], i1226.offsetFactor)
  i1226.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1227[14], i1226.stencilRef)
  i1226.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1227[15], i1226.stencilReadMask)
  i1226.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1227[16], i1226.stencilWriteMask)
  i1226.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1227[17], i1226.stencilOp)
  i1226.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1227[18], i1226.stencilOpFront)
  i1226.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1227[19], i1226.stencilOpBack)
  var i1229 = i1227[20]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1229[i + 0]) );
  }
  i1226.tags = i1228
  var i1231 = i1227[21]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( i1231[i + 0] );
  }
  i1226.passDefinedKeywords = i1230
  var i1233 = i1227[22]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1233[i + 0]) );
  }
  i1226.passDefinedKeywordGroups = i1232
  var i1235 = i1227[23]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1235[i + 0]) );
  }
  i1226.variants = i1234
  var i1237 = i1227[24]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1237[i + 0]) );
  }
  i1226.excludedVariants = i1236
  i1226.hasDepthReader = !!i1227[25]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1239 = data
  i1238.val = i1239[0]
  i1238.name = i1239[1]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1241 = data
  i1240.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1241[0], i1240.src)
  i1240.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1241[1], i1240.dst)
  i1240.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1241[2], i1240.op)
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1243 = data
  i1242.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1243[0], i1242.pass)
  i1242.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1243[1], i1242.fail)
  i1242.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1243[2], i1242.zFail)
  i1242.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1243[3], i1242.comp)
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1247 = data
  i1246.name = i1247[0]
  i1246.value = i1247[1]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1251 = data
  var i1253 = i1251[0]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( i1253[i + 0] );
  }
  i1250.keywords = i1252
  i1250.hasDiscard = !!i1251[1]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1257 = data
  i1256.passId = i1257[0]
  i1256.subShaderIndex = i1257[1]
  var i1259 = i1257[2]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( i1259[i + 0] );
  }
  i1256.keywords = i1258
  i1256.vertexProgram = i1257[3]
  i1256.fragmentProgram = i1257[4]
  i1256.compiledForWebGL2 = !!i1257[5]
  i1256.readDepth = !!i1257[6]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1263 = data
  request.r(i1263[0], i1263[1], 0, i1262, 'shader')
  i1262.pass = i1263[2]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1267 = data
  i1266.name = i1267[0]
  i1266.type = i1267[1]
  i1266.value = new pc.Vec4( i1267[2], i1267[3], i1267[4], i1267[5] )
  i1266.textureValue = i1267[6]
  i1266.shaderPropertyFlag = i1267[7]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1269 = data
  i1268.name = i1269[0]
  request.r(i1269[1], i1269[2], 0, i1268, 'texture')
  i1268.aabb = i1269[3]
  i1268.vertices = i1269[4]
  i1268.triangles = i1269[5]
  i1268.textureRect = UnityEngine.Rect.MinMaxRect(i1269[6], i1269[7], i1269[8], i1269[9])
  i1268.packedRect = UnityEngine.Rect.MinMaxRect(i1269[10], i1269[11], i1269[12], i1269[13])
  i1268.border = new pc.Vec4( i1269[14], i1269[15], i1269[16], i1269[17] )
  i1268.transparency = i1269[18]
  i1268.bounds = i1269[19]
  i1268.pixelsPerUnit = i1269[20]
  i1268.textureWidth = i1269[21]
  i1268.textureHeight = i1269[22]
  i1268.nativeSize = new pc.Vec2( i1269[23], i1269[24] )
  i1268.pivot = new pc.Vec2( i1269[25], i1269[26] )
  i1268.textureRectOffset = new pc.Vec2( i1269[27], i1269[28] )
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1271 = data
  i1270.name = i1271[0]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1273 = data
  i1272.name = i1273[0]
  i1272.ascent = i1273[1]
  i1272.originalLineHeight = i1273[2]
  i1272.fontSize = i1273[3]
  var i1275 = i1273[4]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1275[i + 0]) );
  }
  i1272.characterInfo = i1274
  request.r(i1273[5], i1273[6], 0, i1272, 'texture')
  i1272.originalFontSize = i1273[7]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1279 = data
  i1278.index = i1279[0]
  i1278.advance = i1279[1]
  i1278.bearing = i1279[2]
  i1278.glyphWidth = i1279[3]
  i1278.glyphHeight = i1279[4]
  i1278.minX = i1279[5]
  i1278.maxX = i1279[6]
  i1278.minY = i1279[7]
  i1278.maxY = i1279[8]
  i1278.uvBottomLeftX = i1279[9]
  i1278.uvBottomLeftY = i1279[10]
  i1278.uvBottomRightX = i1279[11]
  i1278.uvBottomRightY = i1279[12]
  i1278.uvTopLeftX = i1279[13]
  i1278.uvTopLeftY = i1279[14]
  i1278.uvTopRightX = i1279[15]
  i1278.uvTopRightY = i1279[16]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1281 = data
  i1280.name = i1281[0]
  i1280.bytes64 = i1281[1]
  i1280.data = i1281[2]
  return i1280
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1282 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1283 = data
  var i1285 = i1283[0]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 2) {
  request.r(i1285[i + 0], i1285[i + 1], 2, i1284, '')
  }
  i1282.atlasAssets = i1284
  i1282.scale = i1283[1]
  request.r(i1283[2], i1283[3], 0, i1282, 'skeletonJSON')
  i1282.isUpgradingBlendModeMaterials = !!i1283[4]
  i1282.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1283[5], i1282.blendModeMaterials)
  var i1287 = i1283[6]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1287.length; i += 2) {
  request.r(i1287[i + 0], i1287[i + 1], 1, i1286, '')
  }
  i1282.skeletonDataModifiers = i1286
  var i1289 = i1283[7]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( i1289[i + 0] );
  }
  i1282.fromAnimation = i1288
  var i1291 = i1283[8]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( i1291[i + 0] );
  }
  i1282.toAnimation = i1290
  i1282.duration = i1283[9]
  i1282.defaultMix = i1283[10]
  request.r(i1283[11], i1283[12], 0, i1282, 'controller')
  return i1282
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1294 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1295 = data
  i1294.applyAdditiveMaterial = !!i1295[0]
  var i1297 = i1295[1]
  var i1296 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1297[i + 0]));
  }
  i1294.additiveMaterials = i1296
  var i1299 = i1295[2]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1299[i + 0]));
  }
  i1294.multiplyMaterials = i1298
  var i1301 = i1295[3]
  var i1300 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1301[i + 0]));
  }
  i1294.screenMaterials = i1300
  i1294.requiresBlendModeMaterials = !!i1295[4]
  return i1294
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1304 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1305 = data
  i1304.pageName = i1305[0]
  request.r(i1305[1], i1305[2], 0, i1304, 'material')
  return i1304
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1308 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1309 = data
  request.r(i1309[0], i1309[1], 0, i1308, 'atlasFile')
  var i1311 = i1309[2]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 2) {
  request.r(i1311[i + 0], i1311[i + 1], 2, i1310, '')
  }
  i1308.materials = i1310
  i1308.textureLoadingMode = i1309[3]
  request.r(i1309[4], i1309[5], 0, i1308, 'onDemandTextureLoader')
  return i1308
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1314 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1315 = data
  i1314.useSafeMode = !!i1315[0]
  i1314.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1315[1], i1314.safeModeOptions)
  i1314.timeScale = i1315[2]
  i1314.unscaledTimeScale = i1315[3]
  i1314.useSmoothDeltaTime = !!i1315[4]
  i1314.maxSmoothUnscaledTime = i1315[5]
  i1314.rewindCallbackMode = i1315[6]
  i1314.showUnityEditorReport = !!i1315[7]
  i1314.logBehaviour = i1315[8]
  i1314.drawGizmos = !!i1315[9]
  i1314.defaultRecyclable = !!i1315[10]
  i1314.defaultAutoPlay = i1315[11]
  i1314.defaultUpdateType = i1315[12]
  i1314.defaultTimeScaleIndependent = !!i1315[13]
  i1314.defaultEaseType = i1315[14]
  i1314.defaultEaseOvershootOrAmplitude = i1315[15]
  i1314.defaultEasePeriod = i1315[16]
  i1314.defaultAutoKill = !!i1315[17]
  i1314.defaultLoopType = i1315[18]
  i1314.debugMode = !!i1315[19]
  i1314.debugStoreTargetId = !!i1315[20]
  i1314.showPreviewPanel = !!i1315[21]
  i1314.storeSettingsLocation = i1315[22]
  i1314.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1315[23], i1314.modules)
  i1314.createASMDEF = !!i1315[24]
  i1314.showPlayingTweens = !!i1315[25]
  i1314.showPausedTweens = !!i1315[26]
  return i1314
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1316 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1317 = data
  i1316.logBehaviour = i1317[0]
  i1316.nestedTweenFailureBehaviour = i1317[1]
  return i1316
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1318 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1319 = data
  i1318.showPanel = !!i1319[0]
  i1318.audioEnabled = !!i1319[1]
  i1318.physicsEnabled = !!i1319[2]
  i1318.physics2DEnabled = !!i1319[3]
  i1318.spriteEnabled = !!i1319[4]
  i1318.uiEnabled = !!i1319[5]
  i1318.textMeshProEnabled = !!i1319[6]
  i1318.tk2DEnabled = !!i1319[7]
  i1318.deAudioEnabled = !!i1319[8]
  i1318.deUnityExtendedEnabled = !!i1319[9]
  i1318.epoOutlineEnabled = !!i1319[10]
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1321 = data
  var i1323 = i1321[0]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1323[i + 0]) );
  }
  i1320.files = i1322
  i1320.componentToPrefabIds = i1321[1]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1327 = data
  i1326.path = i1327[0]
  request.r(i1327[1], i1327[2], 0, i1326, 'unityObject')
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1329 = data
  var i1331 = i1329[0]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1331[i + 0]) );
  }
  i1328.scriptsExecutionOrder = i1330
  var i1333 = i1329[1]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1333[i + 0]) );
  }
  i1328.sortingLayers = i1332
  var i1335 = i1329[2]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1335[i + 0]) );
  }
  i1328.cullingLayers = i1334
  i1328.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1329[3], i1328.timeSettings)
  i1328.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1329[4], i1328.physicsSettings)
  i1328.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1329[5], i1328.physics2DSettings)
  i1328.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1329[6], i1328.qualitySettings)
  i1328.enableRealtimeShadows = !!i1329[7]
  i1328.enableAutoInstancing = !!i1329[8]
  i1328.enableDynamicBatching = !!i1329[9]
  i1328.lightmapEncodingQuality = i1329[10]
  i1328.desiredColorSpace = i1329[11]
  var i1337 = i1329[12]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.push( i1337[i + 0] );
  }
  i1328.allTags = i1336
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1341 = data
  i1340.name = i1341[0]
  i1340.value = i1341[1]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1345 = data
  i1344.id = i1345[0]
  i1344.name = i1345[1]
  i1344.value = i1345[2]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1349 = data
  i1348.id = i1349[0]
  i1348.name = i1349[1]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1351 = data
  i1350.fixedDeltaTime = i1351[0]
  i1350.maximumDeltaTime = i1351[1]
  i1350.timeScale = i1351[2]
  i1350.maximumParticleTimestep = i1351[3]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1353 = data
  i1352.gravity = new pc.Vec3( i1353[0], i1353[1], i1353[2] )
  i1352.defaultSolverIterations = i1353[3]
  i1352.bounceThreshold = i1353[4]
  i1352.autoSyncTransforms = !!i1353[5]
  i1352.autoSimulation = !!i1353[6]
  var i1355 = i1353[7]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1355[i + 0]) );
  }
  i1352.collisionMatrix = i1354
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1359 = data
  i1358.enabled = !!i1359[0]
  i1358.layerId = i1359[1]
  i1358.otherLayerId = i1359[2]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1361 = data
  request.r(i1361[0], i1361[1], 0, i1360, 'material')
  i1360.gravity = new pc.Vec2( i1361[2], i1361[3] )
  i1360.positionIterations = i1361[4]
  i1360.velocityIterations = i1361[5]
  i1360.velocityThreshold = i1361[6]
  i1360.maxLinearCorrection = i1361[7]
  i1360.maxAngularCorrection = i1361[8]
  i1360.maxTranslationSpeed = i1361[9]
  i1360.maxRotationSpeed = i1361[10]
  i1360.baumgarteScale = i1361[11]
  i1360.baumgarteTOIScale = i1361[12]
  i1360.timeToSleep = i1361[13]
  i1360.linearSleepTolerance = i1361[14]
  i1360.angularSleepTolerance = i1361[15]
  i1360.defaultContactOffset = i1361[16]
  i1360.autoSimulation = !!i1361[17]
  i1360.queriesHitTriggers = !!i1361[18]
  i1360.queriesStartInColliders = !!i1361[19]
  i1360.callbacksOnDisable = !!i1361[20]
  i1360.reuseCollisionCallbacks = !!i1361[21]
  i1360.autoSyncTransforms = !!i1361[22]
  var i1363 = i1361[23]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1363[i + 0]) );
  }
  i1360.collisionMatrix = i1362
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1367 = data
  i1366.enabled = !!i1367[0]
  i1366.layerId = i1367[1]
  i1366.otherLayerId = i1367[2]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1369 = data
  var i1371 = i1369[0]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1371[i + 0]) );
  }
  i1368.qualityLevels = i1370
  var i1373 = i1369[1]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( i1373[i + 0] );
  }
  i1368.names = i1372
  i1368.shadows = i1369[2]
  i1368.anisotropicFiltering = i1369[3]
  i1368.antiAliasing = i1369[4]
  i1368.lodBias = i1369[5]
  i1368.shadowCascades = i1369[6]
  i1368.shadowDistance = i1369[7]
  i1368.shadowmaskMode = i1369[8]
  i1368.shadowProjection = i1369[9]
  i1368.shadowResolution = i1369[10]
  i1368.softParticles = !!i1369[11]
  i1368.softVegetation = !!i1369[12]
  i1368.activeColorSpace = i1369[13]
  i1368.desiredColorSpace = i1369[14]
  i1368.masterTextureLimit = i1369[15]
  i1368.maxQueuedFrames = i1369[16]
  i1368.particleRaycastBudget = i1369[17]
  i1368.pixelLightCount = i1369[18]
  i1368.realtimeReflectionProbes = !!i1369[19]
  i1368.shadowCascade2Split = i1369[20]
  i1368.shadowCascade4Split = new pc.Vec3( i1369[21], i1369[22], i1369[23] )
  i1368.streamingMipmapsActive = !!i1369[24]
  i1368.vSyncCount = i1369[25]
  i1368.asyncUploadBufferSize = i1369[26]
  i1368.asyncUploadTimeSlice = i1369[27]
  i1368.billboardsFaceCameraPosition = !!i1369[28]
  i1368.shadowNearPlaneOffset = i1369[29]
  i1368.streamingMipmapsMemoryBudget = i1369[30]
  i1368.maximumLODLevel = i1369[31]
  i1368.streamingMipmapsAddAllCameras = !!i1369[32]
  i1368.streamingMipmapsMaxLevelReduction = i1369[33]
  i1368.streamingMipmapsRenderersPerFrame = i1369[34]
  i1368.resolutionScalingFixedDPIFactor = i1369[35]
  i1368.streamingMipmapsMaxFileIORequests = i1369[36]
  i1368.currentQualityLevel = i1369[37]
  return i1368
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[47],"48":[3],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[3],"72":[73],"74":[75],"76":[75],"9":[8],"77":[78],"79":[80],"81":[78],"82":[8],"83":[8],"11":[9],"20":[17,8],"84":[8],"10":[9],"85":[8],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"31":[8],"34":[8],"91":[8],"16":[17,8],"92":[8],"93":[8],"94":[8],"95":[8],"32":[17,8],"96":[8],"97":[6],"98":[6],"7":[6],"99":[6],"100":[3],"101":[3],"102":[103],"104":[3],"105":[106],"107":[8],"108":[17,8],"109":[73],"25":[17,8],"110":[111,73],"112":[73],"113":[73,114],"115":[50],"116":[58],"117":[106],"118":[119],"120":[8],"121":[73,8],"122":[8,17],"123":[8],"124":[17,8],"125":[73],"126":[17,8],"127":[8],"128":[78]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.UI.Image","UnityEngine.Sprite","DropZone","UnityEngine.BoxCollider2D","ClickItem","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DG.Tweening.DOTweenAnimation","DraggableItem","UnityEngine.CanvasGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Mask","IQFill","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "APG_V04_TrangHT_AnhPD";

Deserializers.lunaAppID = "29138";

Deserializers.projectId = "cc2b1186a2056e546bb13add5b988034";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1782";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4276";

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

Deserializers.buildID = "ff4532c4-4886-40ae-9afd-6bc2aef62dbf";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

