var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1056 = root || request.c( 'UnityEngine.JointSpring' )
  var i1057 = data
  i1056.spring = i1057[0]
  i1056.damper = i1057[1]
  i1056.targetPosition = i1057[2]
  return i1056
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1058 = root || request.c( 'UnityEngine.JointMotor' )
  var i1059 = data
  i1058.m_TargetVelocity = i1059[0]
  i1058.m_Force = i1059[1]
  i1058.m_FreeSpin = i1059[2]
  return i1058
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.JointLimits' )
  var i1061 = data
  i1060.m_Min = i1061[0]
  i1060.m_Max = i1061[1]
  i1060.m_Bounciness = i1061[2]
  i1060.m_BounceMinVelocity = i1061[3]
  i1060.m_ContactDistance = i1061[4]
  i1060.minBounce = i1061[5]
  i1060.maxBounce = i1061[6]
  return i1060
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.JointDrive' )
  var i1063 = data
  i1062.m_PositionSpring = i1063[0]
  i1062.m_PositionDamper = i1063[1]
  i1062.m_MaximumForce = i1063[2]
  i1062.m_UseAcceleration = i1063[3]
  return i1062
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1065 = data
  i1064.m_Spring = i1065[0]
  i1064.m_Damper = i1065[1]
  return i1064
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1067 = data
  i1066.m_Limit = i1067[0]
  i1066.m_Bounciness = i1067[1]
  i1066.m_ContactDistance = i1067[2]
  return i1066
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1069 = data
  i1068.m_ExtremumSlip = i1069[0]
  i1068.m_ExtremumValue = i1069[1]
  i1068.m_AsymptoteSlip = i1069[2]
  i1068.m_AsymptoteValue = i1069[3]
  i1068.m_Stiffness = i1069[4]
  return i1068
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1071 = data
  i1070.m_LowerAngle = i1071[0]
  i1070.m_UpperAngle = i1071[1]
  return i1070
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1073 = data
  i1072.m_MotorSpeed = i1073[0]
  i1072.m_MaximumMotorTorque = i1073[1]
  return i1072
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1075 = data
  i1074.m_DampingRatio = i1075[0]
  i1074.m_Frequency = i1075[1]
  i1074.m_Angle = i1075[2]
  return i1074
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1077 = data
  i1076.m_LowerTranslation = i1077[0]
  i1076.m_UpperTranslation = i1077[1]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1079 = data
  i1078.name = i1079[0]
  i1078.width = i1079[1]
  i1078.height = i1079[2]
  i1078.mipmapCount = i1079[3]
  i1078.anisoLevel = i1079[4]
  i1078.filterMode = i1079[5]
  i1078.hdr = !!i1079[6]
  i1078.format = i1079[7]
  i1078.wrapMode = i1079[8]
  i1078.alphaIsTransparency = !!i1079[9]
  i1078.alphaSource = i1079[10]
  i1078.graphicsFormat = i1079[11]
  i1078.sRGBTexture = !!i1079[12]
  i1078.desiredColorSpace = i1079[13]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1080 = root || new pc.UnityMaterial()
  var i1081 = data
  i1080.name = i1081[0]
  request.r(i1081[1], i1081[2], 0, i1080, 'shader')
  i1080.renderQueue = i1081[3]
  i1080.enableInstancing = !!i1081[4]
  var i1083 = i1081[5]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1083[i + 0]) );
  }
  i1080.floatParameters = i1082
  var i1085 = i1081[6]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1085[i + 0]) );
  }
  i1080.colorParameters = i1084
  var i1087 = i1081[7]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1087[i + 0]) );
  }
  i1080.vectorParameters = i1086
  var i1089 = i1081[8]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1089[i + 0]) );
  }
  i1080.textureParameters = i1088
  var i1091 = i1081[9]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1091[i + 0]) );
  }
  i1080.materialFlags = i1090
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1095 = data
  i1094.name = i1095[0]
  i1094.value = i1095[1]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1099 = data
  i1098.name = i1099[0]
  i1098.value = new pc.Color(i1099[1], i1099[2], i1099[3], i1099[4])
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1103 = data
  i1102.name = i1103[0]
  i1102.value = new pc.Vec4( i1103[1], i1103[2], i1103[3], i1103[4] )
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1107 = data
  i1106.name = i1107[0]
  request.r(i1107[1], i1107[2], 0, i1106, 'value')
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1111 = data
  i1110.name = i1111[0]
  i1110.enabled = !!i1111[1]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1113 = data
  i1112.pivot = new pc.Vec2( i1113[0], i1113[1] )
  i1112.anchorMin = new pc.Vec2( i1113[2], i1113[3] )
  i1112.anchorMax = new pc.Vec2( i1113[4], i1113[5] )
  i1112.sizeDelta = new pc.Vec2( i1113[6], i1113[7] )
  i1112.anchoredPosition3D = new pc.Vec3( i1113[8], i1113[9], i1113[10] )
  i1112.rotation = new pc.Quat(i1113[11], i1113[12], i1113[13], i1113[14])
  i1112.scale = new pc.Vec3( i1113[15], i1113[16], i1113[17] )
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1115 = data
  i1114.cullTransparentMesh = !!i1115[0]
  return i1114
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.UI.Image' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'm_Sprite')
  i1116.m_Type = i1117[2]
  i1116.m_PreserveAspect = !!i1117[3]
  i1116.m_FillCenter = !!i1117[4]
  i1116.m_FillMethod = i1117[5]
  i1116.m_FillAmount = i1117[6]
  i1116.m_FillClockwise = !!i1117[7]
  i1116.m_FillOrigin = i1117[8]
  i1116.m_UseSpriteMesh = !!i1117[9]
  i1116.m_PixelsPerUnitMultiplier = i1117[10]
  request.r(i1117[11], i1117[12], 0, i1116, 'm_Material')
  i1116.m_Maskable = !!i1117[13]
  i1116.m_Color = new pc.Color(i1117[14], i1117[15], i1117[16], i1117[17])
  i1116.m_RaycastTarget = !!i1117[18]
  i1116.m_RaycastPadding = new pc.Vec4( i1117[19], i1117[20], i1117[21], i1117[22] )
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

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1121 = data
  i1120.name = i1121[0]
  i1120.tagId = i1121[1]
  i1120.enabled = !!i1121[2]
  i1120.isStatic = !!i1121[3]
  i1120.layer = i1121[4]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1123 = data
  i1122.name = i1123[0]
  i1122.index = i1123[1]
  i1122.startup = !!i1123[2]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1125 = data
  i1124.position = new pc.Vec3( i1125[0], i1125[1], i1125[2] )
  i1124.scale = new pc.Vec3( i1125[3], i1125[4], i1125[5] )
  i1124.rotation = new pc.Quat(i1125[6], i1125[7], i1125[8], i1125[9])
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1127 = data
  i1126.enabled = !!i1127[0]
  i1126.aspect = i1127[1]
  i1126.orthographic = !!i1127[2]
  i1126.orthographicSize = i1127[3]
  i1126.backgroundColor = new pc.Color(i1127[4], i1127[5], i1127[6], i1127[7])
  i1126.nearClipPlane = i1127[8]
  i1126.farClipPlane = i1127[9]
  i1126.fieldOfView = i1127[10]
  i1126.depth = i1127[11]
  i1126.clearFlags = i1127[12]
  i1126.cullingMask = i1127[13]
  i1126.rect = i1127[14]
  request.r(i1127[15], i1127[16], 0, i1126, 'targetTexture')
  i1126.usePhysicalProperties = !!i1127[17]
  i1126.focalLength = i1127[18]
  i1126.sensorSize = new pc.Vec2( i1127[19], i1127[20] )
  i1126.lensShift = new pc.Vec2( i1127[21], i1127[22] )
  i1126.gateFit = i1127[23]
  return i1126
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1128 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1129 = data
  request.r(i1129[0], i1129[1], 0, i1128, 'm_FirstSelected')
  i1128.m_sendNavigationEvents = !!i1129[2]
  i1128.m_DragThreshold = i1129[3]
  return i1128
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1130 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1131 = data
  i1130.m_HorizontalAxis = i1131[0]
  i1130.m_VerticalAxis = i1131[1]
  i1130.m_SubmitButton = i1131[2]
  i1130.m_CancelButton = i1131[3]
  i1130.m_InputActionsPerSecond = i1131[4]
  i1130.m_RepeatDelay = i1131[5]
  i1130.m_ForceModuleActive = !!i1131[6]
  i1130.m_SendPointerHoverToParent = !!i1131[7]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1133 = data
  i1132.enabled = !!i1133[0]
  i1132.planeDistance = i1133[1]
  i1132.referencePixelsPerUnit = i1133[2]
  i1132.isFallbackOverlay = !!i1133[3]
  i1132.renderMode = i1133[4]
  i1132.renderOrder = i1133[5]
  i1132.sortingLayerName = i1133[6]
  i1132.sortingOrder = i1133[7]
  i1132.scaleFactor = i1133[8]
  request.r(i1133[9], i1133[10], 0, i1132, 'worldCamera')
  i1132.overrideSorting = !!i1133[11]
  i1132.pixelPerfect = !!i1133[12]
  i1132.targetDisplay = i1133[13]
  i1132.overridePixelPerfect = !!i1133[14]
  return i1132
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1134 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1135 = data
  i1134.m_UiScaleMode = i1135[0]
  i1134.m_ReferencePixelsPerUnit = i1135[1]
  i1134.m_ScaleFactor = i1135[2]
  i1134.m_ReferenceResolution = new pc.Vec2( i1135[3], i1135[4] )
  i1134.m_ScreenMatchMode = i1135[5]
  i1134.m_MatchWidthOrHeight = i1135[6]
  i1134.m_PhysicalUnit = i1135[7]
  i1134.m_FallbackScreenDPI = i1135[8]
  i1134.m_DefaultSpriteDPI = i1135[9]
  i1134.m_DynamicPixelsPerUnit = i1135[10]
  i1134.m_PresetInfoIsWorld = !!i1135[11]
  return i1134
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1136 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1137 = data
  i1136.m_IgnoreReversedGraphics = !!i1137[0]
  i1136.m_BlockingObjects = i1137[1]
  i1136.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1137[2] )
  return i1136
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1138 = root || request.c( 'LunaManager' )
  var i1139 = data
  var i1141 = i1139[0]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 2) {
  request.r(i1141[i + 0], i1141[i + 1], 2, i1140, '')
  }
  i1138.lstBtnInstall = i1140
  request.r(i1139[1], i1139[2], 0, i1138, 'EndCard')
  i1138.countPlay = i1139[3]
  i1138.countPlayFinal = i1139[4]
  i1138.timeDropFinal = i1139[5]
  i1138.colorBG = new pc.Color(i1139[6], i1139[7], i1139[8], i1139[9])
  request.r(i1139[10], i1139[11], 0, i1138, 'texture2D')
  request.r(i1139[12], i1139[13], 0, i1138, 'rawImageBG')
  return i1138
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1145 = data
  request.r(i1145[0], i1145[1], 0, i1144, 'm_Texture')
  i1144.m_UVRect = UnityEngine.Rect.MinMaxRect(i1145[2], i1145[3], i1145[4], i1145[5])
  request.r(i1145[6], i1145[7], 0, i1144, 'm_Material')
  i1144.m_Maskable = !!i1145[8]
  i1144.m_Color = new pc.Color(i1145[9], i1145[10], i1145[11], i1145[12])
  i1144.m_RaycastTarget = !!i1145[13]
  i1144.m_RaycastPadding = new pc.Vec4( i1145[14], i1145[15], i1145[16], i1145[17] )
  return i1144
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1146 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1147 = data
  request.r(i1147[0], i1147[1], 0, i1146, 'skeletonDataAsset')
  request.r(i1147[2], i1147[3], 0, i1146, 'additiveMaterial')
  request.r(i1147[4], i1147[5], 0, i1146, 'multiplyMaterial')
  request.r(i1147[6], i1147[7], 0, i1146, 'screenMaterial')
  i1146.initialSkinName = i1147[8]
  i1146.initialFlipX = !!i1147[9]
  i1146.initialFlipY = !!i1147[10]
  i1146.startingAnimation = i1147[11]
  i1146.startingLoop = !!i1147[12]
  i1146.timeScale = i1147[13]
  i1146.freeze = !!i1147[14]
  i1146.layoutScaleMode = i1147[15]
  i1146.updateWhenInvisible = i1147[16]
  i1146.allowMultipleCanvasRenderers = !!i1147[17]
  var i1149 = i1147[18]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1149.length; i += 2) {
  request.r(i1149[i + 0], i1149[i + 1], 1, i1148, '')
  }
  i1146.canvasRenderers = i1148
  i1146.enableSeparatorSlots = !!i1147[19]
  i1146.updateSeparatorPartLocation = !!i1147[20]
  i1146.updateSeparatorPartScale = !!i1147[21]
  i1146.disableMeshAssignmentOnOverride = !!i1147[22]
  i1146.referenceSize = new pc.Vec2( i1147[23], i1147[24] )
  i1146.referenceScale = i1147[25]
  i1146.rectTransformSize = new pc.Vec2( i1147[26], i1147[27] )
  i1146.editReferenceRect = !!i1147[28]
  var i1151 = i1147[29]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( i1151[i + 0] );
  }
  i1146.separatorSlotNames = i1150
  var i1153 = i1147[30]
  var i1152 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1153.length; i += 2) {
  request.r(i1153[i + 0], i1153[i + 1], 1, i1152, '')
  }
  i1146.separatorParts = i1152
  i1146.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1147[31], i1146.meshGenerator)
  i1146.updateTiming = i1147[32]
  i1146.unscaledTime = !!i1147[33]
  request.r(i1147[34], i1147[35], 0, i1146, 'm_Material')
  i1146.m_Maskable = !!i1147[36]
  i1146.m_Color = new pc.Color(i1147[37], i1147[38], i1147[39], i1147[40])
  i1146.m_RaycastTarget = !!i1147[41]
  i1146.m_RaycastPadding = new pc.Vec4( i1147[42], i1147[43], i1147[44], i1147[45] )
  return i1146
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1160 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1161 = data
  i1160.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1161[0], i1160.settings)
  return i1160
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1162 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1163 = data
  i1162.useClipping = !!i1163[0]
  i1162.zSpacing = i1163[1]
  i1162.pmaVertexColors = !!i1163[2]
  i1162.tintBlack = !!i1163[3]
  i1162.canvasGroupTintBlack = !!i1163[4]
  i1162.calculateTangents = !!i1163[5]
  i1162.addNormals = !!i1163[6]
  i1162.immutableTriangles = !!i1163[7]
  return i1162
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1164 = root || request.c( 'UnityEngine.UI.Button' )
  var i1165 = data
  i1164.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1165[0], i1164.m_OnClick)
  i1164.m_Navigation = request.d('UnityEngine.UI.Navigation', i1165[1], i1164.m_Navigation)
  i1164.m_Transition = i1165[2]
  i1164.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1165[3], i1164.m_Colors)
  i1164.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1165[4], i1164.m_SpriteState)
  i1164.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1165[5], i1164.m_AnimationTriggers)
  i1164.m_Interactable = !!i1165[6]
  request.r(i1165[7], i1165[8], 0, i1164, 'm_TargetGraphic')
  return i1164
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1167 = data
  i1166.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1167[0], i1166.m_PersistentCalls)
  return i1166
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1169 = data
  var i1171 = i1169[0]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.add(request.d('UnityEngine.Events.PersistentCall', i1171[i + 0]));
  }
  i1168.m_Calls = i1170
  return i1168
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1175 = data
  request.r(i1175[0], i1175[1], 0, i1174, 'm_Target')
  i1174.m_TargetAssemblyTypeName = i1175[2]
  i1174.m_MethodName = i1175[3]
  i1174.m_Mode = i1175[4]
  i1174.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1175[5], i1174.m_Arguments)
  i1174.m_CallState = i1175[6]
  return i1174
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1176 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1177 = data
  request.r(i1177[0], i1177[1], 0, i1176, 'm_ObjectArgument')
  i1176.m_ObjectArgumentAssemblyTypeName = i1177[2]
  i1176.m_IntArgument = i1177[3]
  i1176.m_FloatArgument = i1177[4]
  i1176.m_StringArgument = i1177[5]
  i1176.m_BoolArgument = !!i1177[6]
  return i1176
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1179 = data
  i1178.m_Mode = i1179[0]
  i1178.m_WrapAround = !!i1179[1]
  request.r(i1179[2], i1179[3], 0, i1178, 'm_SelectOnUp')
  request.r(i1179[4], i1179[5], 0, i1178, 'm_SelectOnDown')
  request.r(i1179[6], i1179[7], 0, i1178, 'm_SelectOnLeft')
  request.r(i1179[8], i1179[9], 0, i1178, 'm_SelectOnRight')
  return i1178
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1181 = data
  i1180.m_NormalColor = new pc.Color(i1181[0], i1181[1], i1181[2], i1181[3])
  i1180.m_HighlightedColor = new pc.Color(i1181[4], i1181[5], i1181[6], i1181[7])
  i1180.m_PressedColor = new pc.Color(i1181[8], i1181[9], i1181[10], i1181[11])
  i1180.m_SelectedColor = new pc.Color(i1181[12], i1181[13], i1181[14], i1181[15])
  i1180.m_DisabledColor = new pc.Color(i1181[16], i1181[17], i1181[18], i1181[19])
  i1180.m_ColorMultiplier = i1181[20]
  i1180.m_FadeDuration = i1181[21]
  return i1180
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1182 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1183 = data
  request.r(i1183[0], i1183[1], 0, i1182, 'm_HighlightedSprite')
  request.r(i1183[2], i1183[3], 0, i1182, 'm_PressedSprite')
  request.r(i1183[4], i1183[5], 0, i1182, 'm_SelectedSprite')
  request.r(i1183[6], i1183[7], 0, i1182, 'm_DisabledSprite')
  return i1182
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1184 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1185 = data
  i1184.m_NormalTrigger = i1185[0]
  i1184.m_HighlightedTrigger = i1185[1]
  i1184.m_PressedTrigger = i1185[2]
  i1184.m_SelectedTrigger = i1185[3]
  i1184.m_DisabledTrigger = i1185[4]
  return i1184
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i1186 = root || request.c( 'ClickItem' )
  var i1187 = data
  i1186.isDoor = !!i1187[0]
  var i1189 = i1187[1]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 2) {
  request.r(i1189[i + 0], i1189[i + 1], 2, i1188, '')
  }
  i1186.steps = i1188
  return i1186
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1192 = root || request.c( 'DraggableItem' )
  var i1193 = data
  i1192.itemID = i1193[0]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1195 = data
  i1194.m_Alpha = i1195[0]
  i1194.m_Interactable = !!i1195[1]
  i1194.m_BlocksRaycasts = !!i1195[2]
  i1194.m_IgnoreParentGroups = !!i1195[3]
  i1194.enabled = !!i1195[4]
  return i1194
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1196 = root || request.c( 'DropZone' )
  var i1197 = data
  request.r(i1197[0], i1197[1], 0, i1196, 'humman')
  var i1199 = i1197[2]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 2) {
  request.r(i1199[i + 0], i1199[i + 1], 2, i1198, '')
  }
  i1196.stairPrefabs = i1198
  request.r(i1197[3], i1197[4], 0, i1196, 'tranHoder')
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1201 = data
  i1200.enabled = !!i1201[0]
  i1200.isTrigger = !!i1201[1]
  i1200.usedByEffector = !!i1201[2]
  i1200.density = i1201[3]
  i1200.offset = new pc.Vec2( i1201[4], i1201[5] )
  request.r(i1201[6], i1201[7], 0, i1200, 'material')
  i1200.usedByComposite = !!i1201[8]
  i1200.autoTiling = !!i1201[9]
  var i1203 = i1201[10]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
  var i1205 = i1203[i + 0]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 2) {
    i1204.push( new pc.Vec2( i1205[i + 0], i1205[i + 1] ) );
  }
    i1202.push( i1204 );
  }
  i1200.points = i1202
  return i1200
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i1212 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i1213 = data
  i1212.m_StartCorner = i1213[0]
  i1212.m_StartAxis = i1213[1]
  i1212.m_CellSize = new pc.Vec2( i1213[2], i1213[3] )
  i1212.m_Spacing = new pc.Vec2( i1213[4], i1213[5] )
  i1212.m_Constraint = i1213[6]
  i1212.m_ConstraintCount = i1213[7]
  i1212.m_Padding = UnityEngine.RectOffset.FromPaddings(i1213[8], i1213[9], i1213[10], i1213[11])
  i1212.m_ChildAlignment = i1213[12]
  return i1212
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1214 = root || request.c( 'UnityEngine.UI.Text' )
  var i1215 = data
  i1214.m_FontData = request.d('UnityEngine.UI.FontData', i1215[0], i1214.m_FontData)
  i1214.m_Text = i1215[1]
  request.r(i1215[2], i1215[3], 0, i1214, 'm_Material')
  i1214.m_Maskable = !!i1215[4]
  i1214.m_Color = new pc.Color(i1215[5], i1215[6], i1215[7], i1215[8])
  i1214.m_RaycastTarget = !!i1215[9]
  i1214.m_RaycastPadding = new pc.Vec4( i1215[10], i1215[11], i1215[12], i1215[13] )
  return i1214
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1216 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1217 = data
  request.r(i1217[0], i1217[1], 0, i1216, 'm_Font')
  i1216.m_FontSize = i1217[2]
  i1216.m_FontStyle = i1217[3]
  i1216.m_BestFit = !!i1217[4]
  i1216.m_MinSize = i1217[5]
  i1216.m_MaxSize = i1217[6]
  i1216.m_Alignment = i1217[7]
  i1216.m_AlignByGeometry = !!i1217[8]
  i1216.m_RichText = !!i1217[9]
  i1216.m_HorizontalOverflow = i1217[10]
  i1216.m_VerticalOverflow = i1217[11]
  i1216.m_LineSpacing = i1217[12]
  return i1216
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1218 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1219 = data
  i1218.targetIsSelf = !!i1219[0]
  request.r(i1219[1], i1219[2], 0, i1218, 'targetGO')
  i1218.tweenTargetIsTargetGO = !!i1219[3]
  i1218.delay = i1219[4]
  i1218.duration = i1219[5]
  i1218.easeType = i1219[6]
  i1218.easeCurve = new pc.AnimationCurve( { keys_flow: i1219[7] } )
  i1218.loopType = i1219[8]
  i1218.loops = i1219[9]
  i1218.id = i1219[10]
  i1218.isRelative = !!i1219[11]
  i1218.isFrom = !!i1219[12]
  i1218.isIndependentUpdate = !!i1219[13]
  i1218.autoKill = !!i1219[14]
  i1218.autoGenerate = !!i1219[15]
  i1218.isActive = !!i1219[16]
  i1218.isValid = !!i1219[17]
  request.r(i1219[18], i1219[19], 0, i1218, 'target')
  i1218.animationType = i1219[20]
  i1218.targetType = i1219[21]
  i1218.forcedTargetType = i1219[22]
  i1218.autoPlay = !!i1219[23]
  i1218.useTargetAsV3 = !!i1219[24]
  i1218.endValueFloat = i1219[25]
  i1218.endValueV3 = new pc.Vec3( i1219[26], i1219[27], i1219[28] )
  i1218.endValueV2 = new pc.Vec2( i1219[29], i1219[30] )
  i1218.endValueColor = new pc.Color(i1219[31], i1219[32], i1219[33], i1219[34])
  i1218.endValueString = i1219[35]
  i1218.endValueRect = UnityEngine.Rect.MinMaxRect(i1219[36], i1219[37], i1219[38], i1219[39])
  request.r(i1219[40], i1219[41], 0, i1218, 'endValueTransform')
  i1218.optionalBool0 = !!i1219[42]
  i1218.optionalBool1 = !!i1219[43]
  i1218.optionalFloat0 = i1219[44]
  i1218.optionalInt0 = i1219[45]
  i1218.optionalRotationMode = i1219[46]
  i1218.optionalScrambleMode = i1219[47]
  i1218.optionalShakeRandomnessMode = i1219[48]
  i1218.optionalString = i1219[49]
  i1218.updateType = i1219[50]
  i1218.isSpeedBased = !!i1219[51]
  i1218.hasOnStart = !!i1219[52]
  i1218.hasOnPlay = !!i1219[53]
  i1218.hasOnUpdate = !!i1219[54]
  i1218.hasOnStepComplete = !!i1219[55]
  i1218.hasOnComplete = !!i1219[56]
  i1218.hasOnTweenCreated = !!i1219[57]
  i1218.hasOnRewind = !!i1219[58]
  i1218.onStart = request.d('UnityEngine.Events.UnityEvent', i1219[59], i1218.onStart)
  i1218.onPlay = request.d('UnityEngine.Events.UnityEvent', i1219[60], i1218.onPlay)
  i1218.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1219[61], i1218.onUpdate)
  i1218.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1219[62], i1218.onStepComplete)
  i1218.onComplete = request.d('UnityEngine.Events.UnityEvent', i1219[63], i1218.onComplete)
  i1218.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1219[64], i1218.onTweenCreated)
  i1218.onRewind = request.d('UnityEngine.Events.UnityEvent', i1219[65], i1218.onRewind)
  return i1218
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1220 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1221 = data
  i1220.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1221[0], i1220.m_PersistentCalls)
  return i1220
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1222 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1223 = data
  i1222.m_ShowMaskGraphic = !!i1223[0]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1225 = data
  i1224.ambientIntensity = i1225[0]
  i1224.reflectionIntensity = i1225[1]
  i1224.ambientMode = i1225[2]
  i1224.ambientLight = new pc.Color(i1225[3], i1225[4], i1225[5], i1225[6])
  i1224.ambientSkyColor = new pc.Color(i1225[7], i1225[8], i1225[9], i1225[10])
  i1224.ambientGroundColor = new pc.Color(i1225[11], i1225[12], i1225[13], i1225[14])
  i1224.ambientEquatorColor = new pc.Color(i1225[15], i1225[16], i1225[17], i1225[18])
  i1224.fogColor = new pc.Color(i1225[19], i1225[20], i1225[21], i1225[22])
  i1224.fogEndDistance = i1225[23]
  i1224.fogStartDistance = i1225[24]
  i1224.fogDensity = i1225[25]
  i1224.fog = !!i1225[26]
  request.r(i1225[27], i1225[28], 0, i1224, 'skybox')
  i1224.fogMode = i1225[29]
  var i1227 = i1225[30]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1227[i + 0]) );
  }
  i1224.lightmaps = i1226
  i1224.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1225[31], i1224.lightProbes)
  i1224.lightmapsMode = i1225[32]
  i1224.mixedBakeMode = i1225[33]
  i1224.environmentLightingMode = i1225[34]
  i1224.ambientProbe = new pc.SphericalHarmonicsL2(i1225[35])
  i1224.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1225[36])
  i1224.useReferenceAmbientProbe = !!i1225[37]
  request.r(i1225[38], i1225[39], 0, i1224, 'customReflection')
  request.r(i1225[40], i1225[41], 0, i1224, 'defaultReflection')
  i1224.defaultReflectionMode = i1225[42]
  i1224.defaultReflectionResolution = i1225[43]
  i1224.sunLightObjectId = i1225[44]
  i1224.pixelLightCount = i1225[45]
  i1224.defaultReflectionHDR = !!i1225[46]
  i1224.hasLightDataAsset = !!i1225[47]
  i1224.hasManualGenerate = !!i1225[48]
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1231 = data
  request.r(i1231[0], i1231[1], 0, i1230, 'lightmapColor')
  request.r(i1231[2], i1231[3], 0, i1230, 'lightmapDirection')
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1232 = root || new UnityEngine.LightProbes()
  var i1233 = data
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1241 = data
  var i1243 = i1241[0]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1243[i + 0]));
  }
  i1240.ShaderCompilationErrors = i1242
  i1240.name = i1241[1]
  i1240.guid = i1241[2]
  var i1245 = i1241[3]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( i1245[i + 0] );
  }
  i1240.shaderDefinedKeywords = i1244
  var i1247 = i1241[4]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1247[i + 0]) );
  }
  i1240.passes = i1246
  var i1249 = i1241[5]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1249[i + 0]) );
  }
  i1240.usePasses = i1248
  var i1251 = i1241[6]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1251[i + 0]) );
  }
  i1240.defaultParameterValues = i1250
  request.r(i1241[7], i1241[8], 0, i1240, 'unityFallbackShader')
  i1240.readDepth = !!i1241[9]
  i1240.isCreatedByShaderGraph = !!i1241[10]
  i1240.usedBatchUniforms = i1241[11]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1255 = data
  i1254.shaderName = i1255[0]
  i1254.errorMessage = i1255[1]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1258 = root || new pc.UnityShaderPass()
  var i1259 = data
  i1258.id = i1259[0]
  i1258.subShaderIndex = i1259[1]
  i1258.name = i1259[2]
  i1258.passType = i1259[3]
  i1258.grabPassTextureName = i1259[4]
  i1258.usePass = !!i1259[5]
  i1258.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[6], i1258.zTest)
  i1258.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[7], i1258.zWrite)
  i1258.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[8], i1258.culling)
  i1258.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1259[9], i1258.blending)
  i1258.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1259[10], i1258.alphaBlending)
  i1258.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[11], i1258.colorWriteMask)
  i1258.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[12], i1258.offsetUnits)
  i1258.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[13], i1258.offsetFactor)
  i1258.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[14], i1258.stencilRef)
  i1258.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[15], i1258.stencilReadMask)
  i1258.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[16], i1258.stencilWriteMask)
  i1258.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1259[17], i1258.stencilOp)
  i1258.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1259[18], i1258.stencilOpFront)
  i1258.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1259[19], i1258.stencilOpBack)
  var i1261 = i1259[20]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1261[i + 0]) );
  }
  i1258.tags = i1260
  var i1263 = i1259[21]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( i1263[i + 0] );
  }
  i1258.passDefinedKeywords = i1262
  var i1265 = i1259[22]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1265[i + 0]) );
  }
  i1258.passDefinedKeywordGroups = i1264
  var i1267 = i1259[23]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1267[i + 0]) );
  }
  i1258.variants = i1266
  var i1269 = i1259[24]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1269[i + 0]) );
  }
  i1258.excludedVariants = i1268
  i1258.hasDepthReader = !!i1259[25]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1271 = data
  i1270.val = i1271[0]
  i1270.name = i1271[1]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1273 = data
  i1272.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[0], i1272.src)
  i1272.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[1], i1272.dst)
  i1272.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[2], i1272.op)
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1275 = data
  i1274.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1275[0], i1274.pass)
  i1274.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1275[1], i1274.fail)
  i1274.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1275[2], i1274.zFail)
  i1274.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1275[3], i1274.comp)
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1279 = data
  i1278.name = i1279[0]
  i1278.value = i1279[1]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1283 = data
  var i1285 = i1283[0]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( i1285[i + 0] );
  }
  i1282.keywords = i1284
  i1282.hasDiscard = !!i1283[1]
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1289 = data
  i1288.passId = i1289[0]
  i1288.subShaderIndex = i1289[1]
  var i1291 = i1289[2]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( i1291[i + 0] );
  }
  i1288.keywords = i1290
  i1288.vertexProgram = i1289[3]
  i1288.fragmentProgram = i1289[4]
  i1288.compiledForWebGL2 = !!i1289[5]
  i1288.readDepth = !!i1289[6]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1295 = data
  request.r(i1295[0], i1295[1], 0, i1294, 'shader')
  i1294.pass = i1295[2]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1299 = data
  i1298.name = i1299[0]
  i1298.type = i1299[1]
  i1298.value = new pc.Vec4( i1299[2], i1299[3], i1299[4], i1299[5] )
  i1298.textureValue = i1299[6]
  i1298.shaderPropertyFlag = i1299[7]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1301 = data
  i1300.name = i1301[0]
  request.r(i1301[1], i1301[2], 0, i1300, 'texture')
  i1300.aabb = i1301[3]
  i1300.vertices = i1301[4]
  i1300.triangles = i1301[5]
  i1300.textureRect = UnityEngine.Rect.MinMaxRect(i1301[6], i1301[7], i1301[8], i1301[9])
  i1300.packedRect = UnityEngine.Rect.MinMaxRect(i1301[10], i1301[11], i1301[12], i1301[13])
  i1300.border = new pc.Vec4( i1301[14], i1301[15], i1301[16], i1301[17] )
  i1300.transparency = i1301[18]
  i1300.bounds = i1301[19]
  i1300.pixelsPerUnit = i1301[20]
  i1300.textureWidth = i1301[21]
  i1300.textureHeight = i1301[22]
  i1300.nativeSize = new pc.Vec2( i1301[23], i1301[24] )
  i1300.pivot = new pc.Vec2( i1301[25], i1301[26] )
  i1300.textureRectOffset = new pc.Vec2( i1301[27], i1301[28] )
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1303 = data
  i1302.name = i1303[0]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1305 = data
  i1304.name = i1305[0]
  i1304.ascent = i1305[1]
  i1304.originalLineHeight = i1305[2]
  i1304.fontSize = i1305[3]
  var i1307 = i1305[4]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1307[i + 0]) );
  }
  i1304.characterInfo = i1306
  request.r(i1305[5], i1305[6], 0, i1304, 'texture')
  i1304.originalFontSize = i1305[7]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1311 = data
  i1310.index = i1311[0]
  i1310.advance = i1311[1]
  i1310.bearing = i1311[2]
  i1310.glyphWidth = i1311[3]
  i1310.glyphHeight = i1311[4]
  i1310.minX = i1311[5]
  i1310.maxX = i1311[6]
  i1310.minY = i1311[7]
  i1310.maxY = i1311[8]
  i1310.uvBottomLeftX = i1311[9]
  i1310.uvBottomLeftY = i1311[10]
  i1310.uvBottomRightX = i1311[11]
  i1310.uvBottomRightY = i1311[12]
  i1310.uvTopLeftX = i1311[13]
  i1310.uvTopLeftY = i1311[14]
  i1310.uvTopRightX = i1311[15]
  i1310.uvTopRightY = i1311[16]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1313 = data
  i1312.name = i1313[0]
  i1312.bytes64 = i1313[1]
  i1312.data = i1313[2]
  return i1312
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1314 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1315 = data
  var i1317 = i1315[0]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 2) {
  request.r(i1317[i + 0], i1317[i + 1], 2, i1316, '')
  }
  i1314.atlasAssets = i1316
  i1314.scale = i1315[1]
  request.r(i1315[2], i1315[3], 0, i1314, 'skeletonJSON')
  i1314.isUpgradingBlendModeMaterials = !!i1315[4]
  i1314.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1315[5], i1314.blendModeMaterials)
  var i1319 = i1315[6]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1319.length; i += 2) {
  request.r(i1319[i + 0], i1319[i + 1], 1, i1318, '')
  }
  i1314.skeletonDataModifiers = i1318
  var i1321 = i1315[7]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( i1321[i + 0] );
  }
  i1314.fromAnimation = i1320
  var i1323 = i1315[8]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( i1323[i + 0] );
  }
  i1314.toAnimation = i1322
  i1314.duration = i1315[9]
  i1314.defaultMix = i1315[10]
  request.r(i1315[11], i1315[12], 0, i1314, 'controller')
  return i1314
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1326 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1327 = data
  i1326.applyAdditiveMaterial = !!i1327[0]
  var i1329 = i1327[1]
  var i1328 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1329[i + 0]));
  }
  i1326.additiveMaterials = i1328
  var i1331 = i1327[2]
  var i1330 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1331[i + 0]));
  }
  i1326.multiplyMaterials = i1330
  var i1333 = i1327[3]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1333[i + 0]));
  }
  i1326.screenMaterials = i1332
  i1326.requiresBlendModeMaterials = !!i1327[4]
  return i1326
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1336 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1337 = data
  i1336.pageName = i1337[0]
  request.r(i1337[1], i1337[2], 0, i1336, 'material')
  return i1336
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1340 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1341 = data
  request.r(i1341[0], i1341[1], 0, i1340, 'atlasFile')
  var i1343 = i1341[2]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 2) {
  request.r(i1343[i + 0], i1343[i + 1], 2, i1342, '')
  }
  i1340.materials = i1342
  i1340.textureLoadingMode = i1341[3]
  request.r(i1341[4], i1341[5], 0, i1340, 'onDemandTextureLoader')
  return i1340
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1346 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1347 = data
  i1346.useSafeMode = !!i1347[0]
  i1346.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1347[1], i1346.safeModeOptions)
  i1346.timeScale = i1347[2]
  i1346.unscaledTimeScale = i1347[3]
  i1346.useSmoothDeltaTime = !!i1347[4]
  i1346.maxSmoothUnscaledTime = i1347[5]
  i1346.rewindCallbackMode = i1347[6]
  i1346.showUnityEditorReport = !!i1347[7]
  i1346.logBehaviour = i1347[8]
  i1346.drawGizmos = !!i1347[9]
  i1346.defaultRecyclable = !!i1347[10]
  i1346.defaultAutoPlay = i1347[11]
  i1346.defaultUpdateType = i1347[12]
  i1346.defaultTimeScaleIndependent = !!i1347[13]
  i1346.defaultEaseType = i1347[14]
  i1346.defaultEaseOvershootOrAmplitude = i1347[15]
  i1346.defaultEasePeriod = i1347[16]
  i1346.defaultAutoKill = !!i1347[17]
  i1346.defaultLoopType = i1347[18]
  i1346.debugMode = !!i1347[19]
  i1346.debugStoreTargetId = !!i1347[20]
  i1346.showPreviewPanel = !!i1347[21]
  i1346.storeSettingsLocation = i1347[22]
  i1346.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1347[23], i1346.modules)
  i1346.createASMDEF = !!i1347[24]
  i1346.showPlayingTweens = !!i1347[25]
  i1346.showPausedTweens = !!i1347[26]
  return i1346
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1348 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1349 = data
  i1348.logBehaviour = i1349[0]
  i1348.nestedTweenFailureBehaviour = i1349[1]
  return i1348
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1350 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1351 = data
  i1350.showPanel = !!i1351[0]
  i1350.audioEnabled = !!i1351[1]
  i1350.physicsEnabled = !!i1351[2]
  i1350.physics2DEnabled = !!i1351[3]
  i1350.spriteEnabled = !!i1351[4]
  i1350.uiEnabled = !!i1351[5]
  i1350.textMeshProEnabled = !!i1351[6]
  i1350.tk2DEnabled = !!i1351[7]
  i1350.deAudioEnabled = !!i1351[8]
  i1350.deUnityExtendedEnabled = !!i1351[9]
  i1350.epoOutlineEnabled = !!i1351[10]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1353 = data
  var i1355 = i1353[0]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1355[i + 0]) );
  }
  i1352.files = i1354
  i1352.componentToPrefabIds = i1353[1]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1359 = data
  i1358.path = i1359[0]
  request.r(i1359[1], i1359[2], 0, i1358, 'unityObject')
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1361 = data
  var i1363 = i1361[0]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1363[i + 0]) );
  }
  i1360.scriptsExecutionOrder = i1362
  var i1365 = i1361[1]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1365[i + 0]) );
  }
  i1360.sortingLayers = i1364
  var i1367 = i1361[2]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1367[i + 0]) );
  }
  i1360.cullingLayers = i1366
  i1360.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1361[3], i1360.timeSettings)
  i1360.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1361[4], i1360.physicsSettings)
  i1360.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1361[5], i1360.physics2DSettings)
  i1360.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1361[6], i1360.qualitySettings)
  i1360.enableRealtimeShadows = !!i1361[7]
  i1360.enableAutoInstancing = !!i1361[8]
  i1360.enableDynamicBatching = !!i1361[9]
  i1360.lightmapEncodingQuality = i1361[10]
  i1360.desiredColorSpace = i1361[11]
  var i1369 = i1361[12]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( i1369[i + 0] );
  }
  i1360.allTags = i1368
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1373 = data
  i1372.name = i1373[0]
  i1372.value = i1373[1]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1377 = data
  i1376.id = i1377[0]
  i1376.name = i1377[1]
  i1376.value = i1377[2]
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1381 = data
  i1380.id = i1381[0]
  i1380.name = i1381[1]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1383 = data
  i1382.fixedDeltaTime = i1383[0]
  i1382.maximumDeltaTime = i1383[1]
  i1382.timeScale = i1383[2]
  i1382.maximumParticleTimestep = i1383[3]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1385 = data
  i1384.gravity = new pc.Vec3( i1385[0], i1385[1], i1385[2] )
  i1384.defaultSolverIterations = i1385[3]
  i1384.bounceThreshold = i1385[4]
  i1384.autoSyncTransforms = !!i1385[5]
  i1384.autoSimulation = !!i1385[6]
  var i1387 = i1385[7]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1387[i + 0]) );
  }
  i1384.collisionMatrix = i1386
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1391 = data
  i1390.enabled = !!i1391[0]
  i1390.layerId = i1391[1]
  i1390.otherLayerId = i1391[2]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1393 = data
  request.r(i1393[0], i1393[1], 0, i1392, 'material')
  i1392.gravity = new pc.Vec2( i1393[2], i1393[3] )
  i1392.positionIterations = i1393[4]
  i1392.velocityIterations = i1393[5]
  i1392.velocityThreshold = i1393[6]
  i1392.maxLinearCorrection = i1393[7]
  i1392.maxAngularCorrection = i1393[8]
  i1392.maxTranslationSpeed = i1393[9]
  i1392.maxRotationSpeed = i1393[10]
  i1392.baumgarteScale = i1393[11]
  i1392.baumgarteTOIScale = i1393[12]
  i1392.timeToSleep = i1393[13]
  i1392.linearSleepTolerance = i1393[14]
  i1392.angularSleepTolerance = i1393[15]
  i1392.defaultContactOffset = i1393[16]
  i1392.autoSimulation = !!i1393[17]
  i1392.queriesHitTriggers = !!i1393[18]
  i1392.queriesStartInColliders = !!i1393[19]
  i1392.callbacksOnDisable = !!i1393[20]
  i1392.reuseCollisionCallbacks = !!i1393[21]
  i1392.autoSyncTransforms = !!i1393[22]
  var i1395 = i1393[23]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1395[i + 0]) );
  }
  i1392.collisionMatrix = i1394
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1399 = data
  i1398.enabled = !!i1399[0]
  i1398.layerId = i1399[1]
  i1398.otherLayerId = i1399[2]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1401 = data
  var i1403 = i1401[0]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1403[i + 0]) );
  }
  i1400.qualityLevels = i1402
  var i1405 = i1401[1]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( i1405[i + 0] );
  }
  i1400.names = i1404
  i1400.shadows = i1401[2]
  i1400.anisotropicFiltering = i1401[3]
  i1400.antiAliasing = i1401[4]
  i1400.lodBias = i1401[5]
  i1400.shadowCascades = i1401[6]
  i1400.shadowDistance = i1401[7]
  i1400.shadowmaskMode = i1401[8]
  i1400.shadowProjection = i1401[9]
  i1400.shadowResolution = i1401[10]
  i1400.softParticles = !!i1401[11]
  i1400.softVegetation = !!i1401[12]
  i1400.activeColorSpace = i1401[13]
  i1400.desiredColorSpace = i1401[14]
  i1400.masterTextureLimit = i1401[15]
  i1400.maxQueuedFrames = i1401[16]
  i1400.particleRaycastBudget = i1401[17]
  i1400.pixelLightCount = i1401[18]
  i1400.realtimeReflectionProbes = !!i1401[19]
  i1400.shadowCascade2Split = i1401[20]
  i1400.shadowCascade4Split = new pc.Vec3( i1401[21], i1401[22], i1401[23] )
  i1400.streamingMipmapsActive = !!i1401[24]
  i1400.vSyncCount = i1401[25]
  i1400.asyncUploadBufferSize = i1401[26]
  i1400.asyncUploadTimeSlice = i1401[27]
  i1400.billboardsFaceCameraPosition = !!i1401[28]
  i1400.shadowNearPlaneOffset = i1401[29]
  i1400.streamingMipmapsMemoryBudget = i1401[30]
  i1400.maximumLODLevel = i1401[31]
  i1400.streamingMipmapsAddAllCameras = !!i1401[32]
  i1400.streamingMipmapsMaxLevelReduction = i1401[33]
  i1400.streamingMipmapsRenderersPerFrame = i1401[34]
  i1400.resolutionScalingFixedDPIFactor = i1401[35]
  i1400.streamingMipmapsMaxFileIORequests = i1401[36]
  i1400.currentQualityLevel = i1401[37]
  return i1400
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[10],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[10],"71":[72],"73":[74],"75":[74],"14":[2],"76":[77],"78":[79],"80":[77],"81":[2],"82":[2],"16":[14],"5":[3,2],"83":[2],"15":[14],"84":[2],"30":[2],"85":[2],"86":[2],"87":[2],"88":[2],"89":[2],"34":[2],"90":[2],"21":[3,2],"91":[2],"92":[2],"93":[2],"94":[2],"31":[3,2],"95":[2],"96":[12],"97":[12],"13":[12],"98":[12],"99":[10],"100":[10],"101":[102],"103":[10],"104":[105],"106":[2],"107":[3,2],"108":[72],"22":[3,2],"109":[110,72],"111":[72],"112":[72,113],"114":[49],"115":[57],"116":[105],"117":[118],"119":[2],"120":[72,2],"121":[2,3],"122":[2],"123":[3,2],"124":[72],"125":[3,2],"126":[2],"127":[77]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","ClickItem","DraggableItem","UnityEngine.CanvasGroup","DropZone","UnityEngine.PolygonCollider2D","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "04/15/2025 07:07:05";

Deserializers.lunaDaysRunning = "9.8";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "APG_V02_TrangHT_AnhPD";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1778";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4232";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, mecanim-wasm";

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

Deserializers.buildID = "97d93ca4-b330-450f-a644-f4ba0e6c05c2";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

