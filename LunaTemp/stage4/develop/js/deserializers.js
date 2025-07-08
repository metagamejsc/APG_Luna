var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.JointSpring' )
  var i1027 = data
  i1026.spring = i1027[0]
  i1026.damper = i1027[1]
  i1026.targetPosition = i1027[2]
  return i1026
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.JointMotor' )
  var i1029 = data
  i1028.m_TargetVelocity = i1029[0]
  i1028.m_Force = i1029[1]
  i1028.m_FreeSpin = i1029[2]
  return i1028
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.JointLimits' )
  var i1031 = data
  i1030.m_Min = i1031[0]
  i1030.m_Max = i1031[1]
  i1030.m_Bounciness = i1031[2]
  i1030.m_BounceMinVelocity = i1031[3]
  i1030.m_ContactDistance = i1031[4]
  i1030.minBounce = i1031[5]
  i1030.maxBounce = i1031[6]
  return i1030
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.JointDrive' )
  var i1033 = data
  i1032.m_PositionSpring = i1033[0]
  i1032.m_PositionDamper = i1033[1]
  i1032.m_MaximumForce = i1033[2]
  i1032.m_UseAcceleration = i1033[3]
  return i1032
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1035 = data
  i1034.m_Spring = i1035[0]
  i1034.m_Damper = i1035[1]
  return i1034
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1036 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1037 = data
  i1036.m_Limit = i1037[0]
  i1036.m_Bounciness = i1037[1]
  i1036.m_ContactDistance = i1037[2]
  return i1036
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1039 = data
  i1038.m_ExtremumSlip = i1039[0]
  i1038.m_ExtremumValue = i1039[1]
  i1038.m_AsymptoteSlip = i1039[2]
  i1038.m_AsymptoteValue = i1039[3]
  i1038.m_Stiffness = i1039[4]
  return i1038
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1041 = data
  i1040.m_LowerAngle = i1041[0]
  i1040.m_UpperAngle = i1041[1]
  return i1040
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1043 = data
  i1042.m_MotorSpeed = i1043[0]
  i1042.m_MaximumMotorTorque = i1043[1]
  return i1042
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1045 = data
  i1044.m_DampingRatio = i1045[0]
  i1044.m_Frequency = i1045[1]
  i1044.m_Angle = i1045[2]
  return i1044
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1047 = data
  i1046.m_LowerTranslation = i1047[0]
  i1046.m_UpperTranslation = i1047[1]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1049 = data
  i1048.name = i1049[0]
  i1048.width = i1049[1]
  i1048.height = i1049[2]
  i1048.mipmapCount = i1049[3]
  i1048.anisoLevel = i1049[4]
  i1048.filterMode = i1049[5]
  i1048.hdr = !!i1049[6]
  i1048.format = i1049[7]
  i1048.wrapMode = i1049[8]
  i1048.alphaIsTransparency = !!i1049[9]
  i1048.alphaSource = i1049[10]
  i1048.graphicsFormat = i1049[11]
  i1048.sRGBTexture = !!i1049[12]
  i1048.desiredColorSpace = i1049[13]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1050 = root || new pc.UnityMaterial()
  var i1051 = data
  i1050.name = i1051[0]
  request.r(i1051[1], i1051[2], 0, i1050, 'shader')
  i1050.renderQueue = i1051[3]
  i1050.enableInstancing = !!i1051[4]
  var i1053 = i1051[5]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1053[i + 0]) );
  }
  i1050.floatParameters = i1052
  var i1055 = i1051[6]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1055[i + 0]) );
  }
  i1050.colorParameters = i1054
  var i1057 = i1051[7]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1057[i + 0]) );
  }
  i1050.vectorParameters = i1056
  var i1059 = i1051[8]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1059[i + 0]) );
  }
  i1050.textureParameters = i1058
  var i1061 = i1051[9]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1061[i + 0]) );
  }
  i1050.materialFlags = i1060
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1065 = data
  i1064.name = i1065[0]
  i1064.value = i1065[1]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1069 = data
  i1068.name = i1069[0]
  i1068.value = new pc.Color(i1069[1], i1069[2], i1069[3], i1069[4])
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1073 = data
  i1072.name = i1073[0]
  i1072.value = new pc.Vec4( i1073[1], i1073[2], i1073[3], i1073[4] )
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1077 = data
  i1076.name = i1077[0]
  request.r(i1077[1], i1077[2], 0, i1076, 'value')
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1081 = data
  i1080.name = i1081[0]
  i1080.enabled = !!i1081[1]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1083 = data
  i1082.name = i1083[0]
  i1082.index = i1083[1]
  i1082.startup = !!i1083[2]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1085 = data
  i1084.position = new pc.Vec3( i1085[0], i1085[1], i1085[2] )
  i1084.scale = new pc.Vec3( i1085[3], i1085[4], i1085[5] )
  i1084.rotation = new pc.Quat(i1085[6], i1085[7], i1085[8], i1085[9])
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1087 = data
  i1086.enabled = !!i1087[0]
  i1086.aspect = i1087[1]
  i1086.orthographic = !!i1087[2]
  i1086.orthographicSize = i1087[3]
  i1086.backgroundColor = new pc.Color(i1087[4], i1087[5], i1087[6], i1087[7])
  i1086.nearClipPlane = i1087[8]
  i1086.farClipPlane = i1087[9]
  i1086.fieldOfView = i1087[10]
  i1086.depth = i1087[11]
  i1086.clearFlags = i1087[12]
  i1086.cullingMask = i1087[13]
  i1086.rect = i1087[14]
  request.r(i1087[15], i1087[16], 0, i1086, 'targetTexture')
  i1086.usePhysicalProperties = !!i1087[17]
  i1086.focalLength = i1087[18]
  i1086.sensorSize = new pc.Vec2( i1087[19], i1087[20] )
  i1086.lensShift = new pc.Vec2( i1087[21], i1087[22] )
  i1086.gateFit = i1087[23]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1089 = data
  i1088.name = i1089[0]
  i1088.tagId = i1089[1]
  i1088.enabled = !!i1089[2]
  i1088.isStatic = !!i1089[3]
  i1088.layer = i1089[4]
  return i1088
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'm_FirstSelected')
  i1090.m_sendNavigationEvents = !!i1091[2]
  i1090.m_DragThreshold = i1091[3]
  return i1090
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1093 = data
  i1092.m_HorizontalAxis = i1093[0]
  i1092.m_VerticalAxis = i1093[1]
  i1092.m_SubmitButton = i1093[2]
  i1092.m_CancelButton = i1093[3]
  i1092.m_InputActionsPerSecond = i1093[4]
  i1092.m_RepeatDelay = i1093[5]
  i1092.m_ForceModuleActive = !!i1093[6]
  i1092.m_SendPointerHoverToParent = !!i1093[7]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1095 = data
  i1094.pivot = new pc.Vec2( i1095[0], i1095[1] )
  i1094.anchorMin = new pc.Vec2( i1095[2], i1095[3] )
  i1094.anchorMax = new pc.Vec2( i1095[4], i1095[5] )
  i1094.sizeDelta = new pc.Vec2( i1095[6], i1095[7] )
  i1094.anchoredPosition3D = new pc.Vec3( i1095[8], i1095[9], i1095[10] )
  i1094.rotation = new pc.Quat(i1095[11], i1095[12], i1095[13], i1095[14])
  i1094.scale = new pc.Vec3( i1095[15], i1095[16], i1095[17] )
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1097 = data
  i1096.enabled = !!i1097[0]
  i1096.planeDistance = i1097[1]
  i1096.referencePixelsPerUnit = i1097[2]
  i1096.isFallbackOverlay = !!i1097[3]
  i1096.renderMode = i1097[4]
  i1096.renderOrder = i1097[5]
  i1096.sortingLayerName = i1097[6]
  i1096.sortingOrder = i1097[7]
  i1096.scaleFactor = i1097[8]
  request.r(i1097[9], i1097[10], 0, i1096, 'worldCamera')
  i1096.overrideSorting = !!i1097[11]
  i1096.pixelPerfect = !!i1097[12]
  i1096.targetDisplay = i1097[13]
  i1096.overridePixelPerfect = !!i1097[14]
  return i1096
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1099 = data
  i1098.m_UiScaleMode = i1099[0]
  i1098.m_ReferencePixelsPerUnit = i1099[1]
  i1098.m_ScaleFactor = i1099[2]
  i1098.m_ReferenceResolution = new pc.Vec2( i1099[3], i1099[4] )
  i1098.m_ScreenMatchMode = i1099[5]
  i1098.m_MatchWidthOrHeight = i1099[6]
  i1098.m_PhysicalUnit = i1099[7]
  i1098.m_FallbackScreenDPI = i1099[8]
  i1098.m_DefaultSpriteDPI = i1099[9]
  i1098.m_DynamicPixelsPerUnit = i1099[10]
  i1098.m_PresetInfoIsWorld = !!i1099[11]
  return i1098
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1101 = data
  i1100.m_IgnoreReversedGraphics = !!i1101[0]
  i1100.m_BlockingObjects = i1101[1]
  i1100.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1101[2] )
  return i1100
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1102 = root || request.c( 'LunaManager' )
  var i1103 = data
  var i1105 = i1103[0]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 2) {
  request.r(i1105[i + 0], i1105[i + 1], 2, i1104, '')
  }
  i1102.lstBtnInstall = i1104
  request.r(i1103[1], i1103[2], 0, i1102, 'EndCard')
  i1102.countPlay = i1103[3]
  i1102.countPlayFinal = i1103[4]
  i1102.countPlayMax = i1103[5]
  i1102.timeDropFinal = i1103[6]
  i1102.colorBG = new pc.Color(i1103[7], i1103[8], i1103[9], i1103[10])
  request.r(i1103[11], i1103[12], 0, i1102, 'texture2D')
  request.r(i1103[13], i1103[14], 0, i1102, 'rawImageBG')
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1109 = data
  i1108.cullTransparentMesh = !!i1109[0]
  return i1108
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'm_Texture')
  i1110.m_UVRect = UnityEngine.Rect.MinMaxRect(i1111[2], i1111[3], i1111[4], i1111[5])
  request.r(i1111[6], i1111[7], 0, i1110, 'm_Material')
  i1110.m_Maskable = !!i1111[8]
  i1110.m_Color = new pc.Color(i1111[9], i1111[10], i1111[11], i1111[12])
  i1110.m_RaycastTarget = !!i1111[13]
  i1110.m_RaycastPadding = new pc.Vec4( i1111[14], i1111[15], i1111[16], i1111[17] )
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1113 = data
  request.r(i1113[0], i1113[1], 0, i1112, 'clip')
  request.r(i1113[2], i1113[3], 0, i1112, 'outputAudioMixerGroup')
  i1112.playOnAwake = !!i1113[4]
  i1112.loop = !!i1113[5]
  i1112.time = i1113[6]
  i1112.volume = i1113[7]
  i1112.pitch = i1113[8]
  i1112.enabled = !!i1113[9]
  return i1112
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1114 = root || request.c( 'UnityEngine.UI.Image' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'm_Sprite')
  i1114.m_Type = i1115[2]
  i1114.m_PreserveAspect = !!i1115[3]
  i1114.m_FillCenter = !!i1115[4]
  i1114.m_FillMethod = i1115[5]
  i1114.m_FillAmount = i1115[6]
  i1114.m_FillClockwise = !!i1115[7]
  i1114.m_FillOrigin = i1115[8]
  i1114.m_UseSpriteMesh = !!i1115[9]
  i1114.m_PixelsPerUnitMultiplier = i1115[10]
  request.r(i1115[11], i1115[12], 0, i1114, 'm_Material')
  i1114.m_Maskable = !!i1115[13]
  i1114.m_Color = new pc.Color(i1115[14], i1115[15], i1115[16], i1115[17])
  i1114.m_RaycastTarget = !!i1115[18]
  i1114.m_RaycastPadding = new pc.Vec4( i1115[19], i1115[20], i1115[21], i1115[22] )
  return i1114
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1116 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'skeletonDataAsset')
  request.r(i1117[2], i1117[3], 0, i1116, 'additiveMaterial')
  request.r(i1117[4], i1117[5], 0, i1116, 'multiplyMaterial')
  request.r(i1117[6], i1117[7], 0, i1116, 'screenMaterial')
  i1116.initialSkinName = i1117[8]
  i1116.initialFlipX = !!i1117[9]
  i1116.initialFlipY = !!i1117[10]
  i1116.startingAnimation = i1117[11]
  i1116.startingLoop = !!i1117[12]
  i1116.timeScale = i1117[13]
  i1116.freeze = !!i1117[14]
  i1116.layoutScaleMode = i1117[15]
  i1116.updateWhenInvisible = i1117[16]
  i1116.allowMultipleCanvasRenderers = !!i1117[17]
  var i1119 = i1117[18]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1119.length; i += 2) {
  request.r(i1119[i + 0], i1119[i + 1], 1, i1118, '')
  }
  i1116.canvasRenderers = i1118
  i1116.enableSeparatorSlots = !!i1117[19]
  i1116.updateSeparatorPartLocation = !!i1117[20]
  i1116.updateSeparatorPartScale = !!i1117[21]
  i1116.disableMeshAssignmentOnOverride = !!i1117[22]
  i1116.referenceSize = new pc.Vec2( i1117[23], i1117[24] )
  i1116.referenceScale = i1117[25]
  i1116.rectTransformSize = new pc.Vec2( i1117[26], i1117[27] )
  i1116.editReferenceRect = !!i1117[28]
  var i1121 = i1117[29]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( i1121[i + 0] );
  }
  i1116.separatorSlotNames = i1120
  var i1123 = i1117[30]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1123.length; i += 2) {
  request.r(i1123[i + 0], i1123[i + 1], 1, i1122, '')
  }
  i1116.separatorParts = i1122
  i1116.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1117[31], i1116.meshGenerator)
  i1116.updateTiming = i1117[32]
  i1116.unscaledTime = !!i1117[33]
  request.r(i1117[34], i1117[35], 0, i1116, 'm_Material')
  i1116.m_Maskable = !!i1117[36]
  i1116.m_Color = new pc.Color(i1117[37], i1117[38], i1117[39], i1117[40])
  i1116.m_RaycastTarget = !!i1117[41]
  i1116.m_RaycastPadding = new pc.Vec4( i1117[42], i1117[43], i1117[44], i1117[45] )
  return i1116
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1130 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1131 = data
  i1130.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1131[0], i1130.settings)
  return i1130
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1132 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1133 = data
  i1132.useClipping = !!i1133[0]
  i1132.zSpacing = i1133[1]
  i1132.pmaVertexColors = !!i1133[2]
  i1132.tintBlack = !!i1133[3]
  i1132.canvasGroupTintBlack = !!i1133[4]
  i1132.calculateTangents = !!i1133[5]
  i1132.addNormals = !!i1133[6]
  i1132.immutableTriangles = !!i1133[7]
  return i1132
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1134 = root || request.c( 'DraggableItem' )
  var i1135 = data
  i1134.idDrag = i1135[0]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1137 = data
  i1136.m_Alpha = i1137[0]
  i1136.m_Interactable = !!i1137[1]
  i1136.m_BlocksRaycasts = !!i1137[2]
  i1136.m_IgnoreParentGroups = !!i1137[3]
  i1136.enabled = !!i1137[4]
  return i1136
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1138 = root || request.c( 'UnityEngine.UI.Button' )
  var i1139 = data
  i1138.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1139[0], i1138.m_OnClick)
  i1138.m_Navigation = request.d('UnityEngine.UI.Navigation', i1139[1], i1138.m_Navigation)
  i1138.m_Transition = i1139[2]
  i1138.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1139[3], i1138.m_Colors)
  i1138.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1139[4], i1138.m_SpriteState)
  i1138.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1139[5], i1138.m_AnimationTriggers)
  i1138.m_Interactable = !!i1139[6]
  request.r(i1139[7], i1139[8], 0, i1138, 'm_TargetGraphic')
  return i1138
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1140 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1141 = data
  i1140.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1141[0], i1140.m_PersistentCalls)
  return i1140
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1142 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1143 = data
  var i1145 = i1143[0]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.add(request.d('UnityEngine.Events.PersistentCall', i1145[i + 0]));
  }
  i1142.m_Calls = i1144
  return i1142
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1149 = data
  request.r(i1149[0], i1149[1], 0, i1148, 'm_Target')
  i1148.m_TargetAssemblyTypeName = i1149[2]
  i1148.m_MethodName = i1149[3]
  i1148.m_Mode = i1149[4]
  i1148.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1149[5], i1148.m_Arguments)
  i1148.m_CallState = i1149[6]
  return i1148
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1150 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1151 = data
  request.r(i1151[0], i1151[1], 0, i1150, 'm_ObjectArgument')
  i1150.m_ObjectArgumentAssemblyTypeName = i1151[2]
  i1150.m_IntArgument = i1151[3]
  i1150.m_FloatArgument = i1151[4]
  i1150.m_StringArgument = i1151[5]
  i1150.m_BoolArgument = !!i1151[6]
  return i1150
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1152 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1153 = data
  i1152.m_Mode = i1153[0]
  i1152.m_WrapAround = !!i1153[1]
  request.r(i1153[2], i1153[3], 0, i1152, 'm_SelectOnUp')
  request.r(i1153[4], i1153[5], 0, i1152, 'm_SelectOnDown')
  request.r(i1153[6], i1153[7], 0, i1152, 'm_SelectOnLeft')
  request.r(i1153[8], i1153[9], 0, i1152, 'm_SelectOnRight')
  return i1152
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1155 = data
  i1154.m_NormalColor = new pc.Color(i1155[0], i1155[1], i1155[2], i1155[3])
  i1154.m_HighlightedColor = new pc.Color(i1155[4], i1155[5], i1155[6], i1155[7])
  i1154.m_PressedColor = new pc.Color(i1155[8], i1155[9], i1155[10], i1155[11])
  i1154.m_SelectedColor = new pc.Color(i1155[12], i1155[13], i1155[14], i1155[15])
  i1154.m_DisabledColor = new pc.Color(i1155[16], i1155[17], i1155[18], i1155[19])
  i1154.m_ColorMultiplier = i1155[20]
  i1154.m_FadeDuration = i1155[21]
  return i1154
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1157 = data
  request.r(i1157[0], i1157[1], 0, i1156, 'm_HighlightedSprite')
  request.r(i1157[2], i1157[3], 0, i1156, 'm_PressedSprite')
  request.r(i1157[4], i1157[5], 0, i1156, 'm_SelectedSprite')
  request.r(i1157[6], i1157[7], 0, i1156, 'm_DisabledSprite')
  return i1156
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1159 = data
  i1158.m_NormalTrigger = i1159[0]
  i1158.m_HighlightedTrigger = i1159[1]
  i1158.m_PressedTrigger = i1159[2]
  i1158.m_SelectedTrigger = i1159[3]
  i1158.m_DisabledTrigger = i1159[4]
  return i1158
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i1160 = root || request.c( 'ClickItem' )
  var i1161 = data
  i1160.isPhone = !!i1161[0]
  var i1163 = i1161[1]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 2) {
  request.r(i1163[i + 0], i1163[i + 1], 2, i1162, '')
  }
  i1160.steps = i1162
  return i1160
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1166 = root || request.c( 'DropZone' )
  var i1167 = data
  i1166.idDrop = i1167[0]
  var i1169 = i1167[1]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 2) {
  request.r(i1169[i + 0], i1169[i + 1], 2, i1168, '')
  }
  i1166.steps = i1168
  i1166.isWoman = !!i1167[2]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1171 = data
  i1170.usedByComposite = !!i1171[0]
  i1170.autoTiling = !!i1171[1]
  i1170.size = new pc.Vec2( i1171[2], i1171[3] )
  i1170.edgeRadius = i1171[4]
  i1170.enabled = !!i1171[5]
  i1170.isTrigger = !!i1171[6]
  i1170.usedByEffector = !!i1171[7]
  i1170.density = i1171[8]
  i1170.offset = new pc.Vec2( i1171[9], i1171[10] )
  request.r(i1171[11], i1171[12], 0, i1170, 'material')
  return i1170
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1172 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1173 = data
  i1172.targetIsSelf = !!i1173[0]
  request.r(i1173[1], i1173[2], 0, i1172, 'targetGO')
  i1172.tweenTargetIsTargetGO = !!i1173[3]
  i1172.delay = i1173[4]
  i1172.duration = i1173[5]
  i1172.easeType = i1173[6]
  i1172.easeCurve = new pc.AnimationCurve( { keys_flow: i1173[7] } )
  i1172.loopType = i1173[8]
  i1172.loops = i1173[9]
  i1172.id = i1173[10]
  i1172.isRelative = !!i1173[11]
  i1172.isFrom = !!i1173[12]
  i1172.isIndependentUpdate = !!i1173[13]
  i1172.autoKill = !!i1173[14]
  i1172.autoGenerate = !!i1173[15]
  i1172.isActive = !!i1173[16]
  i1172.isValid = !!i1173[17]
  request.r(i1173[18], i1173[19], 0, i1172, 'target')
  i1172.animationType = i1173[20]
  i1172.targetType = i1173[21]
  i1172.forcedTargetType = i1173[22]
  i1172.autoPlay = !!i1173[23]
  i1172.useTargetAsV3 = !!i1173[24]
  i1172.endValueFloat = i1173[25]
  i1172.endValueV3 = new pc.Vec3( i1173[26], i1173[27], i1173[28] )
  i1172.endValueV2 = new pc.Vec2( i1173[29], i1173[30] )
  i1172.endValueColor = new pc.Color(i1173[31], i1173[32], i1173[33], i1173[34])
  i1172.endValueString = i1173[35]
  i1172.endValueRect = UnityEngine.Rect.MinMaxRect(i1173[36], i1173[37], i1173[38], i1173[39])
  request.r(i1173[40], i1173[41], 0, i1172, 'endValueTransform')
  i1172.optionalBool0 = !!i1173[42]
  i1172.optionalBool1 = !!i1173[43]
  i1172.optionalFloat0 = i1173[44]
  i1172.optionalInt0 = i1173[45]
  i1172.optionalRotationMode = i1173[46]
  i1172.optionalScrambleMode = i1173[47]
  i1172.optionalShakeRandomnessMode = i1173[48]
  i1172.optionalString = i1173[49]
  i1172.updateType = i1173[50]
  i1172.isSpeedBased = !!i1173[51]
  i1172.hasOnStart = !!i1173[52]
  i1172.hasOnPlay = !!i1173[53]
  i1172.hasOnUpdate = !!i1173[54]
  i1172.hasOnStepComplete = !!i1173[55]
  i1172.hasOnComplete = !!i1173[56]
  i1172.hasOnTweenCreated = !!i1173[57]
  i1172.hasOnRewind = !!i1173[58]
  i1172.onStart = request.d('UnityEngine.Events.UnityEvent', i1173[59], i1172.onStart)
  i1172.onPlay = request.d('UnityEngine.Events.UnityEvent', i1173[60], i1172.onPlay)
  i1172.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1173[61], i1172.onUpdate)
  i1172.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1173[62], i1172.onStepComplete)
  i1172.onComplete = request.d('UnityEngine.Events.UnityEvent', i1173[63], i1172.onComplete)
  i1172.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1173[64], i1172.onTweenCreated)
  i1172.onRewind = request.d('UnityEngine.Events.UnityEvent', i1173[65], i1172.onRewind)
  return i1172
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1175 = data
  i1174.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1175[0], i1174.m_PersistentCalls)
  return i1174
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1176 = root || request.c( 'UnityEngine.UI.Text' )
  var i1177 = data
  i1176.m_FontData = request.d('UnityEngine.UI.FontData', i1177[0], i1176.m_FontData)
  i1176.m_Text = i1177[1]
  request.r(i1177[2], i1177[3], 0, i1176, 'm_Material')
  i1176.m_Maskable = !!i1177[4]
  i1176.m_Color = new pc.Color(i1177[5], i1177[6], i1177[7], i1177[8])
  i1176.m_RaycastTarget = !!i1177[9]
  i1176.m_RaycastPadding = new pc.Vec4( i1177[10], i1177[11], i1177[12], i1177[13] )
  return i1176
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1179 = data
  request.r(i1179[0], i1179[1], 0, i1178, 'm_Font')
  i1178.m_FontSize = i1179[2]
  i1178.m_FontStyle = i1179[3]
  i1178.m_BestFit = !!i1179[4]
  i1178.m_MinSize = i1179[5]
  i1178.m_MaxSize = i1179[6]
  i1178.m_Alignment = i1179[7]
  i1178.m_AlignByGeometry = !!i1179[8]
  i1178.m_RichText = !!i1179[9]
  i1178.m_HorizontalOverflow = i1179[10]
  i1178.m_VerticalOverflow = i1179[11]
  i1178.m_LineSpacing = i1179[12]
  return i1178
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1181 = data
  i1180.m_ShowMaskGraphic = !!i1181[0]
  return i1180
}

Deserializers["IQFill"] = function (request, data, root) {
  var i1182 = root || request.c( 'IQFill' )
  var i1183 = data
  request.r(i1183[0], i1183[1], 0, i1182, 'fillImage')
  i1182.maxFillAmount = i1183[2]
  i1182.fillDuration = i1183[3]
  i1182.maxValue = i1183[4]
  i1182.addValue = i1183[5]
  i1182.fillEase = i1183[6]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1185 = data
  i1184.ambientIntensity = i1185[0]
  i1184.reflectionIntensity = i1185[1]
  i1184.ambientMode = i1185[2]
  i1184.ambientLight = new pc.Color(i1185[3], i1185[4], i1185[5], i1185[6])
  i1184.ambientSkyColor = new pc.Color(i1185[7], i1185[8], i1185[9], i1185[10])
  i1184.ambientGroundColor = new pc.Color(i1185[11], i1185[12], i1185[13], i1185[14])
  i1184.ambientEquatorColor = new pc.Color(i1185[15], i1185[16], i1185[17], i1185[18])
  i1184.fogColor = new pc.Color(i1185[19], i1185[20], i1185[21], i1185[22])
  i1184.fogEndDistance = i1185[23]
  i1184.fogStartDistance = i1185[24]
  i1184.fogDensity = i1185[25]
  i1184.fog = !!i1185[26]
  request.r(i1185[27], i1185[28], 0, i1184, 'skybox')
  i1184.fogMode = i1185[29]
  var i1187 = i1185[30]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1187[i + 0]) );
  }
  i1184.lightmaps = i1186
  i1184.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1185[31], i1184.lightProbes)
  i1184.lightmapsMode = i1185[32]
  i1184.mixedBakeMode = i1185[33]
  i1184.environmentLightingMode = i1185[34]
  i1184.ambientProbe = new pc.SphericalHarmonicsL2(i1185[35])
  i1184.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1185[36])
  i1184.useReferenceAmbientProbe = !!i1185[37]
  request.r(i1185[38], i1185[39], 0, i1184, 'customReflection')
  request.r(i1185[40], i1185[41], 0, i1184, 'defaultReflection')
  i1184.defaultReflectionMode = i1185[42]
  i1184.defaultReflectionResolution = i1185[43]
  i1184.sunLightObjectId = i1185[44]
  i1184.pixelLightCount = i1185[45]
  i1184.defaultReflectionHDR = !!i1185[46]
  i1184.hasLightDataAsset = !!i1185[47]
  i1184.hasManualGenerate = !!i1185[48]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1191 = data
  request.r(i1191[0], i1191[1], 0, i1190, 'lightmapColor')
  request.r(i1191[2], i1191[3], 0, i1190, 'lightmapDirection')
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1192 = root || new UnityEngine.LightProbes()
  var i1193 = data
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1201 = data
  var i1203 = i1201[0]
  var i1202 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1203[i + 0]));
  }
  i1200.ShaderCompilationErrors = i1202
  i1200.name = i1201[1]
  i1200.guid = i1201[2]
  var i1205 = i1201[3]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( i1205[i + 0] );
  }
  i1200.shaderDefinedKeywords = i1204
  var i1207 = i1201[4]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1207[i + 0]) );
  }
  i1200.passes = i1206
  var i1209 = i1201[5]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1209[i + 0]) );
  }
  i1200.usePasses = i1208
  var i1211 = i1201[6]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1211[i + 0]) );
  }
  i1200.defaultParameterValues = i1210
  request.r(i1201[7], i1201[8], 0, i1200, 'unityFallbackShader')
  i1200.readDepth = !!i1201[9]
  i1200.isCreatedByShaderGraph = !!i1201[10]
  i1200.usedBatchUniforms = i1201[11]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1215 = data
  i1214.shaderName = i1215[0]
  i1214.errorMessage = i1215[1]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1218 = root || new pc.UnityShaderPass()
  var i1219 = data
  i1218.id = i1219[0]
  i1218.subShaderIndex = i1219[1]
  i1218.name = i1219[2]
  i1218.passType = i1219[3]
  i1218.grabPassTextureName = i1219[4]
  i1218.usePass = !!i1219[5]
  i1218.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[6], i1218.zTest)
  i1218.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[7], i1218.zWrite)
  i1218.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[8], i1218.culling)
  i1218.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1219[9], i1218.blending)
  i1218.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1219[10], i1218.alphaBlending)
  i1218.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[11], i1218.colorWriteMask)
  i1218.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[12], i1218.offsetUnits)
  i1218.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[13], i1218.offsetFactor)
  i1218.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[14], i1218.stencilRef)
  i1218.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[15], i1218.stencilReadMask)
  i1218.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[16], i1218.stencilWriteMask)
  i1218.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1219[17], i1218.stencilOp)
  i1218.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1219[18], i1218.stencilOpFront)
  i1218.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1219[19], i1218.stencilOpBack)
  var i1221 = i1219[20]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1221[i + 0]) );
  }
  i1218.tags = i1220
  var i1223 = i1219[21]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( i1223[i + 0] );
  }
  i1218.passDefinedKeywords = i1222
  var i1225 = i1219[22]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1225[i + 0]) );
  }
  i1218.passDefinedKeywordGroups = i1224
  var i1227 = i1219[23]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1227[i + 0]) );
  }
  i1218.variants = i1226
  var i1229 = i1219[24]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1229[i + 0]) );
  }
  i1218.excludedVariants = i1228
  i1218.hasDepthReader = !!i1219[25]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1231 = data
  i1230.val = i1231[0]
  i1230.name = i1231[1]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1233 = data
  i1232.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[0], i1232.src)
  i1232.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[1], i1232.dst)
  i1232.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[2], i1232.op)
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1235 = data
  i1234.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1235[0], i1234.pass)
  i1234.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1235[1], i1234.fail)
  i1234.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1235[2], i1234.zFail)
  i1234.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1235[3], i1234.comp)
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1239 = data
  i1238.name = i1239[0]
  i1238.value = i1239[1]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1243 = data
  var i1245 = i1243[0]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( i1245[i + 0] );
  }
  i1242.keywords = i1244
  i1242.hasDiscard = !!i1243[1]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1249 = data
  i1248.passId = i1249[0]
  i1248.subShaderIndex = i1249[1]
  var i1251 = i1249[2]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( i1251[i + 0] );
  }
  i1248.keywords = i1250
  i1248.vertexProgram = i1249[3]
  i1248.fragmentProgram = i1249[4]
  i1248.compiledForWebGL2 = !!i1249[5]
  i1248.readDepth = !!i1249[6]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1255 = data
  request.r(i1255[0], i1255[1], 0, i1254, 'shader')
  i1254.pass = i1255[2]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1259 = data
  i1258.name = i1259[0]
  i1258.type = i1259[1]
  i1258.value = new pc.Vec4( i1259[2], i1259[3], i1259[4], i1259[5] )
  i1258.textureValue = i1259[6]
  i1258.shaderPropertyFlag = i1259[7]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1261 = data
  i1260.name = i1261[0]
  request.r(i1261[1], i1261[2], 0, i1260, 'texture')
  i1260.aabb = i1261[3]
  i1260.vertices = i1261[4]
  i1260.triangles = i1261[5]
  i1260.textureRect = UnityEngine.Rect.MinMaxRect(i1261[6], i1261[7], i1261[8], i1261[9])
  i1260.packedRect = UnityEngine.Rect.MinMaxRect(i1261[10], i1261[11], i1261[12], i1261[13])
  i1260.border = new pc.Vec4( i1261[14], i1261[15], i1261[16], i1261[17] )
  i1260.transparency = i1261[18]
  i1260.bounds = i1261[19]
  i1260.pixelsPerUnit = i1261[20]
  i1260.textureWidth = i1261[21]
  i1260.textureHeight = i1261[22]
  i1260.nativeSize = new pc.Vec2( i1261[23], i1261[24] )
  i1260.pivot = new pc.Vec2( i1261[25], i1261[26] )
  i1260.textureRectOffset = new pc.Vec2( i1261[27], i1261[28] )
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1263 = data
  i1262.name = i1263[0]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1265 = data
  i1264.name = i1265[0]
  i1264.ascent = i1265[1]
  i1264.originalLineHeight = i1265[2]
  i1264.fontSize = i1265[3]
  var i1267 = i1265[4]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1267[i + 0]) );
  }
  i1264.characterInfo = i1266
  request.r(i1265[5], i1265[6], 0, i1264, 'texture')
  i1264.originalFontSize = i1265[7]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1271 = data
  i1270.index = i1271[0]
  i1270.advance = i1271[1]
  i1270.bearing = i1271[2]
  i1270.glyphWidth = i1271[3]
  i1270.glyphHeight = i1271[4]
  i1270.minX = i1271[5]
  i1270.maxX = i1271[6]
  i1270.minY = i1271[7]
  i1270.maxY = i1271[8]
  i1270.uvBottomLeftX = i1271[9]
  i1270.uvBottomLeftY = i1271[10]
  i1270.uvBottomRightX = i1271[11]
  i1270.uvBottomRightY = i1271[12]
  i1270.uvTopLeftX = i1271[13]
  i1270.uvTopLeftY = i1271[14]
  i1270.uvTopRightX = i1271[15]
  i1270.uvTopRightY = i1271[16]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1273 = data
  i1272.name = i1273[0]
  i1272.bytes64 = i1273[1]
  i1272.data = i1273[2]
  return i1272
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1274 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1275 = data
  var i1277 = i1275[0]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 2) {
  request.r(i1277[i + 0], i1277[i + 1], 2, i1276, '')
  }
  i1274.atlasAssets = i1276
  i1274.scale = i1275[1]
  request.r(i1275[2], i1275[3], 0, i1274, 'skeletonJSON')
  i1274.isUpgradingBlendModeMaterials = !!i1275[4]
  i1274.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1275[5], i1274.blendModeMaterials)
  var i1279 = i1275[6]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1279.length; i += 2) {
  request.r(i1279[i + 0], i1279[i + 1], 1, i1278, '')
  }
  i1274.skeletonDataModifiers = i1278
  var i1281 = i1275[7]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( i1281[i + 0] );
  }
  i1274.fromAnimation = i1280
  var i1283 = i1275[8]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( i1283[i + 0] );
  }
  i1274.toAnimation = i1282
  i1274.duration = i1275[9]
  i1274.defaultMix = i1275[10]
  request.r(i1275[11], i1275[12], 0, i1274, 'controller')
  return i1274
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1286 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1287 = data
  i1286.applyAdditiveMaterial = !!i1287[0]
  var i1289 = i1287[1]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1289[i + 0]));
  }
  i1286.additiveMaterials = i1288
  var i1291 = i1287[2]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1291[i + 0]));
  }
  i1286.multiplyMaterials = i1290
  var i1293 = i1287[3]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1293[i + 0]));
  }
  i1286.screenMaterials = i1292
  i1286.requiresBlendModeMaterials = !!i1287[4]
  return i1286
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1296 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1297 = data
  i1296.pageName = i1297[0]
  request.r(i1297[1], i1297[2], 0, i1296, 'material')
  return i1296
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1300 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1301 = data
  request.r(i1301[0], i1301[1], 0, i1300, 'atlasFile')
  var i1303 = i1301[2]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 2) {
  request.r(i1303[i + 0], i1303[i + 1], 2, i1302, '')
  }
  i1300.materials = i1302
  i1300.textureLoadingMode = i1301[3]
  request.r(i1301[4], i1301[5], 0, i1300, 'onDemandTextureLoader')
  return i1300
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1306 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1307 = data
  i1306.useSafeMode = !!i1307[0]
  i1306.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1307[1], i1306.safeModeOptions)
  i1306.timeScale = i1307[2]
  i1306.unscaledTimeScale = i1307[3]
  i1306.useSmoothDeltaTime = !!i1307[4]
  i1306.maxSmoothUnscaledTime = i1307[5]
  i1306.rewindCallbackMode = i1307[6]
  i1306.showUnityEditorReport = !!i1307[7]
  i1306.logBehaviour = i1307[8]
  i1306.drawGizmos = !!i1307[9]
  i1306.defaultRecyclable = !!i1307[10]
  i1306.defaultAutoPlay = i1307[11]
  i1306.defaultUpdateType = i1307[12]
  i1306.defaultTimeScaleIndependent = !!i1307[13]
  i1306.defaultEaseType = i1307[14]
  i1306.defaultEaseOvershootOrAmplitude = i1307[15]
  i1306.defaultEasePeriod = i1307[16]
  i1306.defaultAutoKill = !!i1307[17]
  i1306.defaultLoopType = i1307[18]
  i1306.debugMode = !!i1307[19]
  i1306.debugStoreTargetId = !!i1307[20]
  i1306.showPreviewPanel = !!i1307[21]
  i1306.storeSettingsLocation = i1307[22]
  i1306.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1307[23], i1306.modules)
  i1306.createASMDEF = !!i1307[24]
  i1306.showPlayingTweens = !!i1307[25]
  i1306.showPausedTweens = !!i1307[26]
  return i1306
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1308 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1309 = data
  i1308.logBehaviour = i1309[0]
  i1308.nestedTweenFailureBehaviour = i1309[1]
  return i1308
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1310 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1311 = data
  i1310.showPanel = !!i1311[0]
  i1310.audioEnabled = !!i1311[1]
  i1310.physicsEnabled = !!i1311[2]
  i1310.physics2DEnabled = !!i1311[3]
  i1310.spriteEnabled = !!i1311[4]
  i1310.uiEnabled = !!i1311[5]
  i1310.textMeshProEnabled = !!i1311[6]
  i1310.tk2DEnabled = !!i1311[7]
  i1310.deAudioEnabled = !!i1311[8]
  i1310.deUnityExtendedEnabled = !!i1311[9]
  i1310.epoOutlineEnabled = !!i1311[10]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1313 = data
  var i1315 = i1313[0]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1315[i + 0]) );
  }
  i1312.files = i1314
  i1312.componentToPrefabIds = i1313[1]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1319 = data
  i1318.path = i1319[0]
  request.r(i1319[1], i1319[2], 0, i1318, 'unityObject')
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1321 = data
  var i1323 = i1321[0]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1323[i + 0]) );
  }
  i1320.scriptsExecutionOrder = i1322
  var i1325 = i1321[1]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1325[i + 0]) );
  }
  i1320.sortingLayers = i1324
  var i1327 = i1321[2]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1327[i + 0]) );
  }
  i1320.cullingLayers = i1326
  i1320.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1321[3], i1320.timeSettings)
  i1320.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1321[4], i1320.physicsSettings)
  i1320.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1321[5], i1320.physics2DSettings)
  i1320.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1321[6], i1320.qualitySettings)
  i1320.enableRealtimeShadows = !!i1321[7]
  i1320.enableAutoInstancing = !!i1321[8]
  i1320.enableDynamicBatching = !!i1321[9]
  i1320.lightmapEncodingQuality = i1321[10]
  i1320.desiredColorSpace = i1321[11]
  var i1329 = i1321[12]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( i1329[i + 0] );
  }
  i1320.allTags = i1328
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1333 = data
  i1332.name = i1333[0]
  i1332.value = i1333[1]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1337 = data
  i1336.id = i1337[0]
  i1336.name = i1337[1]
  i1336.value = i1337[2]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1341 = data
  i1340.id = i1341[0]
  i1340.name = i1341[1]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1343 = data
  i1342.fixedDeltaTime = i1343[0]
  i1342.maximumDeltaTime = i1343[1]
  i1342.timeScale = i1343[2]
  i1342.maximumParticleTimestep = i1343[3]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1345 = data
  i1344.gravity = new pc.Vec3( i1345[0], i1345[1], i1345[2] )
  i1344.defaultSolverIterations = i1345[3]
  i1344.bounceThreshold = i1345[4]
  i1344.autoSyncTransforms = !!i1345[5]
  i1344.autoSimulation = !!i1345[6]
  var i1347 = i1345[7]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1347[i + 0]) );
  }
  i1344.collisionMatrix = i1346
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1351 = data
  i1350.enabled = !!i1351[0]
  i1350.layerId = i1351[1]
  i1350.otherLayerId = i1351[2]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1353 = data
  request.r(i1353[0], i1353[1], 0, i1352, 'material')
  i1352.gravity = new pc.Vec2( i1353[2], i1353[3] )
  i1352.positionIterations = i1353[4]
  i1352.velocityIterations = i1353[5]
  i1352.velocityThreshold = i1353[6]
  i1352.maxLinearCorrection = i1353[7]
  i1352.maxAngularCorrection = i1353[8]
  i1352.maxTranslationSpeed = i1353[9]
  i1352.maxRotationSpeed = i1353[10]
  i1352.baumgarteScale = i1353[11]
  i1352.baumgarteTOIScale = i1353[12]
  i1352.timeToSleep = i1353[13]
  i1352.linearSleepTolerance = i1353[14]
  i1352.angularSleepTolerance = i1353[15]
  i1352.defaultContactOffset = i1353[16]
  i1352.autoSimulation = !!i1353[17]
  i1352.queriesHitTriggers = !!i1353[18]
  i1352.queriesStartInColliders = !!i1353[19]
  i1352.callbacksOnDisable = !!i1353[20]
  i1352.reuseCollisionCallbacks = !!i1353[21]
  i1352.autoSyncTransforms = !!i1353[22]
  var i1355 = i1353[23]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1355[i + 0]) );
  }
  i1352.collisionMatrix = i1354
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1359 = data
  i1358.enabled = !!i1359[0]
  i1358.layerId = i1359[1]
  i1358.otherLayerId = i1359[2]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1361 = data
  var i1363 = i1361[0]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1363[i + 0]) );
  }
  i1360.qualityLevels = i1362
  var i1365 = i1361[1]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( i1365[i + 0] );
  }
  i1360.names = i1364
  i1360.shadows = i1361[2]
  i1360.anisotropicFiltering = i1361[3]
  i1360.antiAliasing = i1361[4]
  i1360.lodBias = i1361[5]
  i1360.shadowCascades = i1361[6]
  i1360.shadowDistance = i1361[7]
  i1360.shadowmaskMode = i1361[8]
  i1360.shadowProjection = i1361[9]
  i1360.shadowResolution = i1361[10]
  i1360.softParticles = !!i1361[11]
  i1360.softVegetation = !!i1361[12]
  i1360.activeColorSpace = i1361[13]
  i1360.desiredColorSpace = i1361[14]
  i1360.masterTextureLimit = i1361[15]
  i1360.maxQueuedFrames = i1361[16]
  i1360.particleRaycastBudget = i1361[17]
  i1360.pixelLightCount = i1361[18]
  i1360.realtimeReflectionProbes = !!i1361[19]
  i1360.shadowCascade2Split = i1361[20]
  i1360.shadowCascade4Split = new pc.Vec3( i1361[21], i1361[22], i1361[23] )
  i1360.streamingMipmapsActive = !!i1361[24]
  i1360.vSyncCount = i1361[25]
  i1360.asyncUploadBufferSize = i1361[26]
  i1360.asyncUploadTimeSlice = i1361[27]
  i1360.billboardsFaceCameraPosition = !!i1361[28]
  i1360.shadowNearPlaneOffset = i1361[29]
  i1360.streamingMipmapsMemoryBudget = i1361[30]
  i1360.maximumLODLevel = i1361[31]
  i1360.streamingMipmapsAddAllCameras = !!i1361[32]
  i1360.streamingMipmapsMaxLevelReduction = i1361[33]
  i1360.streamingMipmapsRenderersPerFrame = i1361[34]
  i1360.resolutionScalingFixedDPIFactor = i1361[35]
  i1360.streamingMipmapsMaxFileIORequests = i1361[36]
  i1360.currentQualityLevel = i1361[37]
  return i1360
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[3],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[3],"71":[72],"73":[74],"75":[74],"9":[8],"76":[77],"78":[79],"80":[77],"81":[8],"82":[8],"11":[9],"20":[17,8],"83":[8],"10":[9],"84":[8],"85":[8],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"33":[8],"91":[8],"16":[17,8],"92":[8],"93":[8],"94":[8],"95":[8],"31":[17,8],"96":[8],"97":[6],"98":[6],"7":[6],"99":[6],"100":[3],"101":[3],"102":[103],"104":[3],"105":[106],"107":[8],"108":[17,8],"109":[72],"22":[17,8],"110":[111,72],"112":[72],"113":[72,114],"115":[49],"116":[57],"117":[106],"118":[119],"120":[8],"121":[72,8],"122":[8,17],"123":[8],"124":[17,8],"125":[72],"126":[17,8],"127":[8],"128":[77]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.UI.Image","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DraggableItem","UnityEngine.CanvasGroup","ClickItem","DropZone","UnityEngine.BoxCollider2D","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Mask","IQFill","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "04/15/2025 07:07:05";

Deserializers.lunaDaysRunning = "21.0";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4279";

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

Deserializers.buildID = "be2b7c16-f7a1-4c40-84a3-fe89728d598f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

