var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.JointSpring' )
  var i1161 = data
  i1160.spring = i1161[0]
  i1160.damper = i1161[1]
  i1160.targetPosition = i1161[2]
  return i1160
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1162 = root || request.c( 'UnityEngine.JointMotor' )
  var i1163 = data
  i1162.m_TargetVelocity = i1163[0]
  i1162.m_Force = i1163[1]
  i1162.m_FreeSpin = i1163[2]
  return i1162
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1164 = root || request.c( 'UnityEngine.JointLimits' )
  var i1165 = data
  i1164.m_Min = i1165[0]
  i1164.m_Max = i1165[1]
  i1164.m_Bounciness = i1165[2]
  i1164.m_BounceMinVelocity = i1165[3]
  i1164.m_ContactDistance = i1165[4]
  i1164.minBounce = i1165[5]
  i1164.maxBounce = i1165[6]
  return i1164
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.JointDrive' )
  var i1167 = data
  i1166.m_PositionSpring = i1167[0]
  i1166.m_PositionDamper = i1167[1]
  i1166.m_MaximumForce = i1167[2]
  i1166.m_UseAcceleration = i1167[3]
  return i1166
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1169 = data
  i1168.m_Spring = i1169[0]
  i1168.m_Damper = i1169[1]
  return i1168
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1171 = data
  i1170.m_Limit = i1171[0]
  i1170.m_Bounciness = i1171[1]
  i1170.m_ContactDistance = i1171[2]
  return i1170
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1172 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1173 = data
  i1172.m_ExtremumSlip = i1173[0]
  i1172.m_ExtremumValue = i1173[1]
  i1172.m_AsymptoteSlip = i1173[2]
  i1172.m_AsymptoteValue = i1173[3]
  i1172.m_Stiffness = i1173[4]
  return i1172
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1175 = data
  i1174.m_LowerAngle = i1175[0]
  i1174.m_UpperAngle = i1175[1]
  return i1174
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1176 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1177 = data
  i1176.m_MotorSpeed = i1177[0]
  i1176.m_MaximumMotorTorque = i1177[1]
  return i1176
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1179 = data
  i1178.m_DampingRatio = i1179[0]
  i1178.m_Frequency = i1179[1]
  i1178.m_Angle = i1179[2]
  return i1178
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1181 = data
  i1180.m_LowerTranslation = i1181[0]
  i1180.m_UpperTranslation = i1181[1]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1183 = data
  i1182.name = i1183[0]
  i1182.width = i1183[1]
  i1182.height = i1183[2]
  i1182.mipmapCount = i1183[3]
  i1182.anisoLevel = i1183[4]
  i1182.filterMode = i1183[5]
  i1182.hdr = !!i1183[6]
  i1182.format = i1183[7]
  i1182.wrapMode = i1183[8]
  i1182.alphaIsTransparency = !!i1183[9]
  i1182.alphaSource = i1183[10]
  i1182.graphicsFormat = i1183[11]
  i1182.sRGBTexture = !!i1183[12]
  i1182.desiredColorSpace = i1183[13]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1184 = root || new pc.UnityMaterial()
  var i1185 = data
  i1184.name = i1185[0]
  request.r(i1185[1], i1185[2], 0, i1184, 'shader')
  i1184.renderQueue = i1185[3]
  i1184.enableInstancing = !!i1185[4]
  var i1187 = i1185[5]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1187[i + 0]) );
  }
  i1184.floatParameters = i1186
  var i1189 = i1185[6]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1189[i + 0]) );
  }
  i1184.colorParameters = i1188
  var i1191 = i1185[7]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1191[i + 0]) );
  }
  i1184.vectorParameters = i1190
  var i1193 = i1185[8]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1193[i + 0]) );
  }
  i1184.textureParameters = i1192
  var i1195 = i1185[9]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1195[i + 0]) );
  }
  i1184.materialFlags = i1194
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1199 = data
  i1198.name = i1199[0]
  i1198.value = i1199[1]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1203 = data
  i1202.name = i1203[0]
  i1202.value = new pc.Color(i1203[1], i1203[2], i1203[3], i1203[4])
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1207 = data
  i1206.name = i1207[0]
  i1206.value = new pc.Vec4( i1207[1], i1207[2], i1207[3], i1207[4] )
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1211 = data
  i1210.name = i1211[0]
  request.r(i1211[1], i1211[2], 0, i1210, 'value')
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1215 = data
  i1214.name = i1215[0]
  i1214.enabled = !!i1215[1]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1217 = data
  i1216.name = i1217[0]
  i1216.index = i1217[1]
  i1216.startup = !!i1217[2]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1219 = data
  i1218.position = new pc.Vec3( i1219[0], i1219[1], i1219[2] )
  i1218.scale = new pc.Vec3( i1219[3], i1219[4], i1219[5] )
  i1218.rotation = new pc.Quat(i1219[6], i1219[7], i1219[8], i1219[9])
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1221 = data
  i1220.enabled = !!i1221[0]
  i1220.aspect = i1221[1]
  i1220.orthographic = !!i1221[2]
  i1220.orthographicSize = i1221[3]
  i1220.backgroundColor = new pc.Color(i1221[4], i1221[5], i1221[6], i1221[7])
  i1220.nearClipPlane = i1221[8]
  i1220.farClipPlane = i1221[9]
  i1220.fieldOfView = i1221[10]
  i1220.depth = i1221[11]
  i1220.clearFlags = i1221[12]
  i1220.cullingMask = i1221[13]
  i1220.rect = i1221[14]
  request.r(i1221[15], i1221[16], 0, i1220, 'targetTexture')
  i1220.usePhysicalProperties = !!i1221[17]
  i1220.focalLength = i1221[18]
  i1220.sensorSize = new pc.Vec2( i1221[19], i1221[20] )
  i1220.lensShift = new pc.Vec2( i1221[21], i1221[22] )
  i1220.gateFit = i1221[23]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1223 = data
  i1222.name = i1223[0]
  i1222.tagId = i1223[1]
  i1222.enabled = !!i1223[2]
  i1222.isStatic = !!i1223[3]
  i1222.layer = i1223[4]
  return i1222
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1224 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1225 = data
  request.r(i1225[0], i1225[1], 0, i1224, 'm_FirstSelected')
  i1224.m_sendNavigationEvents = !!i1225[2]
  i1224.m_DragThreshold = i1225[3]
  return i1224
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1226 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1227 = data
  i1226.m_HorizontalAxis = i1227[0]
  i1226.m_VerticalAxis = i1227[1]
  i1226.m_SubmitButton = i1227[2]
  i1226.m_CancelButton = i1227[3]
  i1226.m_InputActionsPerSecond = i1227[4]
  i1226.m_RepeatDelay = i1227[5]
  i1226.m_ForceModuleActive = !!i1227[6]
  i1226.m_SendPointerHoverToParent = !!i1227[7]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1229 = data
  i1228.pivot = new pc.Vec2( i1229[0], i1229[1] )
  i1228.anchorMin = new pc.Vec2( i1229[2], i1229[3] )
  i1228.anchorMax = new pc.Vec2( i1229[4], i1229[5] )
  i1228.sizeDelta = new pc.Vec2( i1229[6], i1229[7] )
  i1228.anchoredPosition3D = new pc.Vec3( i1229[8], i1229[9], i1229[10] )
  i1228.rotation = new pc.Quat(i1229[11], i1229[12], i1229[13], i1229[14])
  i1228.scale = new pc.Vec3( i1229[15], i1229[16], i1229[17] )
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1231 = data
  i1230.enabled = !!i1231[0]
  i1230.planeDistance = i1231[1]
  i1230.referencePixelsPerUnit = i1231[2]
  i1230.isFallbackOverlay = !!i1231[3]
  i1230.renderMode = i1231[4]
  i1230.renderOrder = i1231[5]
  i1230.sortingLayerName = i1231[6]
  i1230.sortingOrder = i1231[7]
  i1230.scaleFactor = i1231[8]
  request.r(i1231[9], i1231[10], 0, i1230, 'worldCamera')
  i1230.overrideSorting = !!i1231[11]
  i1230.pixelPerfect = !!i1231[12]
  i1230.targetDisplay = i1231[13]
  i1230.overridePixelPerfect = !!i1231[14]
  return i1230
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1232 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1233 = data
  i1232.m_UiScaleMode = i1233[0]
  i1232.m_ReferencePixelsPerUnit = i1233[1]
  i1232.m_ScaleFactor = i1233[2]
  i1232.m_ReferenceResolution = new pc.Vec2( i1233[3], i1233[4] )
  i1232.m_ScreenMatchMode = i1233[5]
  i1232.m_MatchWidthOrHeight = i1233[6]
  i1232.m_PhysicalUnit = i1233[7]
  i1232.m_FallbackScreenDPI = i1233[8]
  i1232.m_DefaultSpriteDPI = i1233[9]
  i1232.m_DynamicPixelsPerUnit = i1233[10]
  i1232.m_PresetInfoIsWorld = !!i1233[11]
  return i1232
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1234 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1235 = data
  i1234.m_IgnoreReversedGraphics = !!i1235[0]
  i1234.m_BlockingObjects = i1235[1]
  i1234.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1235[2] )
  return i1234
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1236 = root || request.c( 'LunaManager' )
  var i1237 = data
  var i1239 = i1237[0]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 2) {
  request.r(i1239[i + 0], i1239[i + 1], 2, i1238, '')
  }
  i1236.lstBtnInstall = i1238
  request.r(i1237[1], i1237[2], 0, i1236, 'EndCard')
  i1236.countPlay = i1237[3]
  i1236.countPlayFinal = i1237[4]
  i1236.timeDropFinal = i1237[5]
  i1236.colorBG = new pc.Color(i1237[6], i1237[7], i1237[8], i1237[9])
  request.r(i1237[10], i1237[11], 0, i1236, 'texture2D')
  request.r(i1237[12], i1237[13], 0, i1236, 'rawImageBG')
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1243 = data
  i1242.cullTransparentMesh = !!i1243[0]
  return i1242
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1245 = data
  request.r(i1245[0], i1245[1], 0, i1244, 'm_Texture')
  i1244.m_UVRect = UnityEngine.Rect.MinMaxRect(i1245[2], i1245[3], i1245[4], i1245[5])
  request.r(i1245[6], i1245[7], 0, i1244, 'm_Material')
  i1244.m_Maskable = !!i1245[8]
  i1244.m_Color = new pc.Color(i1245[9], i1245[10], i1245[11], i1245[12])
  i1244.m_RaycastTarget = !!i1245[13]
  i1244.m_RaycastPadding = new pc.Vec4( i1245[14], i1245[15], i1245[16], i1245[17] )
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1247 = data
  request.r(i1247[0], i1247[1], 0, i1246, 'clip')
  request.r(i1247[2], i1247[3], 0, i1246, 'outputAudioMixerGroup')
  i1246.playOnAwake = !!i1247[4]
  i1246.loop = !!i1247[5]
  i1246.time = i1247[6]
  i1246.volume = i1247[7]
  i1246.pitch = i1247[8]
  i1246.enabled = !!i1247[9]
  return i1246
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.UI.Image' )
  var i1249 = data
  request.r(i1249[0], i1249[1], 0, i1248, 'm_Sprite')
  i1248.m_Type = i1249[2]
  i1248.m_PreserveAspect = !!i1249[3]
  i1248.m_FillCenter = !!i1249[4]
  i1248.m_FillMethod = i1249[5]
  i1248.m_FillAmount = i1249[6]
  i1248.m_FillClockwise = !!i1249[7]
  i1248.m_FillOrigin = i1249[8]
  i1248.m_UseSpriteMesh = !!i1249[9]
  i1248.m_PixelsPerUnitMultiplier = i1249[10]
  request.r(i1249[11], i1249[12], 0, i1248, 'm_Material')
  i1248.m_Maskable = !!i1249[13]
  i1248.m_Color = new pc.Color(i1249[14], i1249[15], i1249[16], i1249[17])
  i1248.m_RaycastTarget = !!i1249[18]
  i1248.m_RaycastPadding = new pc.Vec4( i1249[19], i1249[20], i1249[21], i1249[22] )
  return i1248
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1250 = root || request.c( 'DropZone' )
  var i1251 = data
  i1250.idDrop = i1251[0]
  var i1253 = i1251[1]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 2) {
  request.r(i1253[i + 0], i1253[i + 1], 2, i1252, '')
  }
  i1250.steps = i1252
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1257 = data
  i1256.usedByComposite = !!i1257[0]
  i1256.autoTiling = !!i1257[1]
  i1256.size = new pc.Vec2( i1257[2], i1257[3] )
  i1256.edgeRadius = i1257[4]
  i1256.enabled = !!i1257[5]
  i1256.isTrigger = !!i1257[6]
  i1256.usedByEffector = !!i1257[7]
  i1256.density = i1257[8]
  i1256.offset = new pc.Vec2( i1257[9], i1257[10] )
  request.r(i1257[11], i1257[12], 0, i1256, 'material')
  return i1256
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1258 = root || request.c( 'UnityEngine.UI.Button' )
  var i1259 = data
  i1258.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1259[0], i1258.m_OnClick)
  i1258.m_Navigation = request.d('UnityEngine.UI.Navigation', i1259[1], i1258.m_Navigation)
  i1258.m_Transition = i1259[2]
  i1258.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1259[3], i1258.m_Colors)
  i1258.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1259[4], i1258.m_SpriteState)
  i1258.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1259[5], i1258.m_AnimationTriggers)
  i1258.m_Interactable = !!i1259[6]
  request.r(i1259[7], i1259[8], 0, i1258, 'm_TargetGraphic')
  return i1258
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1260 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1261 = data
  i1260.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1261[0], i1260.m_PersistentCalls)
  return i1260
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1262 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1263 = data
  var i1265 = i1263[0]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.add(request.d('UnityEngine.Events.PersistentCall', i1265[i + 0]));
  }
  i1262.m_Calls = i1264
  return i1262
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1268 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1269 = data
  request.r(i1269[0], i1269[1], 0, i1268, 'm_Target')
  i1268.m_TargetAssemblyTypeName = i1269[2]
  i1268.m_MethodName = i1269[3]
  i1268.m_Mode = i1269[4]
  i1268.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1269[5], i1268.m_Arguments)
  i1268.m_CallState = i1269[6]
  return i1268
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1270 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1271 = data
  request.r(i1271[0], i1271[1], 0, i1270, 'm_ObjectArgument')
  i1270.m_ObjectArgumentAssemblyTypeName = i1271[2]
  i1270.m_IntArgument = i1271[3]
  i1270.m_FloatArgument = i1271[4]
  i1270.m_StringArgument = i1271[5]
  i1270.m_BoolArgument = !!i1271[6]
  return i1270
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1273 = data
  i1272.m_Mode = i1273[0]
  i1272.m_WrapAround = !!i1273[1]
  request.r(i1273[2], i1273[3], 0, i1272, 'm_SelectOnUp')
  request.r(i1273[4], i1273[5], 0, i1272, 'm_SelectOnDown')
  request.r(i1273[6], i1273[7], 0, i1272, 'm_SelectOnLeft')
  request.r(i1273[8], i1273[9], 0, i1272, 'm_SelectOnRight')
  return i1272
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1274 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1275 = data
  i1274.m_NormalColor = new pc.Color(i1275[0], i1275[1], i1275[2], i1275[3])
  i1274.m_HighlightedColor = new pc.Color(i1275[4], i1275[5], i1275[6], i1275[7])
  i1274.m_PressedColor = new pc.Color(i1275[8], i1275[9], i1275[10], i1275[11])
  i1274.m_SelectedColor = new pc.Color(i1275[12], i1275[13], i1275[14], i1275[15])
  i1274.m_DisabledColor = new pc.Color(i1275[16], i1275[17], i1275[18], i1275[19])
  i1274.m_ColorMultiplier = i1275[20]
  i1274.m_FadeDuration = i1275[21]
  return i1274
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1276 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1277 = data
  request.r(i1277[0], i1277[1], 0, i1276, 'm_HighlightedSprite')
  request.r(i1277[2], i1277[3], 0, i1276, 'm_PressedSprite')
  request.r(i1277[4], i1277[5], 0, i1276, 'm_SelectedSprite')
  request.r(i1277[6], i1277[7], 0, i1276, 'm_DisabledSprite')
  return i1276
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1278 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1279 = data
  i1278.m_NormalTrigger = i1279[0]
  i1278.m_HighlightedTrigger = i1279[1]
  i1278.m_PressedTrigger = i1279[2]
  i1278.m_SelectedTrigger = i1279[3]
  i1278.m_DisabledTrigger = i1279[4]
  return i1278
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i1280 = root || request.c( 'ClickItem' )
  var i1281 = data
  i1280.isPhone = !!i1281[0]
  var i1283 = i1281[1]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 2) {
  request.r(i1283[i + 0], i1283[i + 1], 2, i1282, '')
  }
  i1280.steps = i1282
  i1280.currentStep = i1281[2]
  return i1280
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1284 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1285 = data
  request.r(i1285[0], i1285[1], 0, i1284, 'skeletonDataAsset')
  request.r(i1285[2], i1285[3], 0, i1284, 'additiveMaterial')
  request.r(i1285[4], i1285[5], 0, i1284, 'multiplyMaterial')
  request.r(i1285[6], i1285[7], 0, i1284, 'screenMaterial')
  i1284.initialSkinName = i1285[8]
  i1284.initialFlipX = !!i1285[9]
  i1284.initialFlipY = !!i1285[10]
  i1284.startingAnimation = i1285[11]
  i1284.startingLoop = !!i1285[12]
  i1284.timeScale = i1285[13]
  i1284.freeze = !!i1285[14]
  i1284.layoutScaleMode = i1285[15]
  i1284.updateWhenInvisible = i1285[16]
  i1284.allowMultipleCanvasRenderers = !!i1285[17]
  var i1287 = i1285[18]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1287.length; i += 2) {
  request.r(i1287[i + 0], i1287[i + 1], 1, i1286, '')
  }
  i1284.canvasRenderers = i1286
  i1284.enableSeparatorSlots = !!i1285[19]
  i1284.updateSeparatorPartLocation = !!i1285[20]
  i1284.updateSeparatorPartScale = !!i1285[21]
  i1284.disableMeshAssignmentOnOverride = !!i1285[22]
  i1284.referenceSize = new pc.Vec2( i1285[23], i1285[24] )
  i1284.referenceScale = i1285[25]
  i1284.rectTransformSize = new pc.Vec2( i1285[26], i1285[27] )
  i1284.editReferenceRect = !!i1285[28]
  var i1289 = i1285[29]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( i1289[i + 0] );
  }
  i1284.separatorSlotNames = i1288
  var i1291 = i1285[30]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1291.length; i += 2) {
  request.r(i1291[i + 0], i1291[i + 1], 1, i1290, '')
  }
  i1284.separatorParts = i1290
  i1284.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1285[31], i1284.meshGenerator)
  i1284.updateTiming = i1285[32]
  i1284.unscaledTime = !!i1285[33]
  request.r(i1285[34], i1285[35], 0, i1284, 'm_Material')
  i1284.m_Maskable = !!i1285[36]
  i1284.m_Color = new pc.Color(i1285[37], i1285[38], i1285[39], i1285[40])
  i1284.m_RaycastTarget = !!i1285[41]
  i1284.m_RaycastPadding = new pc.Vec4( i1285[42], i1285[43], i1285[44], i1285[45] )
  return i1284
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1298 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1299 = data
  i1298.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1299[0], i1298.settings)
  return i1298
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1300 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1301 = data
  i1300.useClipping = !!i1301[0]
  i1300.zSpacing = i1301[1]
  i1300.pmaVertexColors = !!i1301[2]
  i1300.tintBlack = !!i1301[3]
  i1300.canvasGroupTintBlack = !!i1301[4]
  i1300.calculateTangents = !!i1301[5]
  i1300.addNormals = !!i1301[6]
  i1300.immutableTriangles = !!i1301[7]
  return i1300
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1302 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1303 = data
  i1302.targetIsSelf = !!i1303[0]
  request.r(i1303[1], i1303[2], 0, i1302, 'targetGO')
  i1302.tweenTargetIsTargetGO = !!i1303[3]
  i1302.delay = i1303[4]
  i1302.duration = i1303[5]
  i1302.easeType = i1303[6]
  i1302.easeCurve = new pc.AnimationCurve( { keys_flow: i1303[7] } )
  i1302.loopType = i1303[8]
  i1302.loops = i1303[9]
  i1302.id = i1303[10]
  i1302.isRelative = !!i1303[11]
  i1302.isFrom = !!i1303[12]
  i1302.isIndependentUpdate = !!i1303[13]
  i1302.autoKill = !!i1303[14]
  i1302.autoGenerate = !!i1303[15]
  i1302.isActive = !!i1303[16]
  i1302.isValid = !!i1303[17]
  request.r(i1303[18], i1303[19], 0, i1302, 'target')
  i1302.animationType = i1303[20]
  i1302.targetType = i1303[21]
  i1302.forcedTargetType = i1303[22]
  i1302.autoPlay = !!i1303[23]
  i1302.useTargetAsV3 = !!i1303[24]
  i1302.endValueFloat = i1303[25]
  i1302.endValueV3 = new pc.Vec3( i1303[26], i1303[27], i1303[28] )
  i1302.endValueV2 = new pc.Vec2( i1303[29], i1303[30] )
  i1302.endValueColor = new pc.Color(i1303[31], i1303[32], i1303[33], i1303[34])
  i1302.endValueString = i1303[35]
  i1302.endValueRect = UnityEngine.Rect.MinMaxRect(i1303[36], i1303[37], i1303[38], i1303[39])
  request.r(i1303[40], i1303[41], 0, i1302, 'endValueTransform')
  i1302.optionalBool0 = !!i1303[42]
  i1302.optionalBool1 = !!i1303[43]
  i1302.optionalFloat0 = i1303[44]
  i1302.optionalInt0 = i1303[45]
  i1302.optionalRotationMode = i1303[46]
  i1302.optionalScrambleMode = i1303[47]
  i1302.optionalShakeRandomnessMode = i1303[48]
  i1302.optionalString = i1303[49]
  i1302.updateType = i1303[50]
  i1302.isSpeedBased = !!i1303[51]
  i1302.hasOnStart = !!i1303[52]
  i1302.hasOnPlay = !!i1303[53]
  i1302.hasOnUpdate = !!i1303[54]
  i1302.hasOnStepComplete = !!i1303[55]
  i1302.hasOnComplete = !!i1303[56]
  i1302.hasOnTweenCreated = !!i1303[57]
  i1302.hasOnRewind = !!i1303[58]
  i1302.onStart = request.d('UnityEngine.Events.UnityEvent', i1303[59], i1302.onStart)
  i1302.onPlay = request.d('UnityEngine.Events.UnityEvent', i1303[60], i1302.onPlay)
  i1302.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1303[61], i1302.onUpdate)
  i1302.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1303[62], i1302.onStepComplete)
  i1302.onComplete = request.d('UnityEngine.Events.UnityEvent', i1303[63], i1302.onComplete)
  i1302.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1303[64], i1302.onTweenCreated)
  i1302.onRewind = request.d('UnityEngine.Events.UnityEvent', i1303[65], i1302.onRewind)
  return i1302
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1304 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1305 = data
  i1304.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1305[0], i1304.m_PersistentCalls)
  return i1304
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1306 = root || request.c( 'DraggableItem' )
  var i1307 = data
  i1306.idDrag = i1307[0]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1309 = data
  i1308.m_Alpha = i1309[0]
  i1308.m_Interactable = !!i1309[1]
  i1308.m_BlocksRaycasts = !!i1309[2]
  i1308.m_IgnoreParentGroups = !!i1309[3]
  i1308.enabled = !!i1309[4]
  return i1308
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1310 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1311 = data
  i1310.m_Spacing = i1311[0]
  i1310.m_ChildForceExpandWidth = !!i1311[1]
  i1310.m_ChildForceExpandHeight = !!i1311[2]
  i1310.m_ChildControlWidth = !!i1311[3]
  i1310.m_ChildControlHeight = !!i1311[4]
  i1310.m_ChildScaleWidth = !!i1311[5]
  i1310.m_ChildScaleHeight = !!i1311[6]
  i1310.m_ReverseArrangement = !!i1311[7]
  i1310.m_Padding = UnityEngine.RectOffset.FromPaddings(i1311[8], i1311[9], i1311[10], i1311[11])
  i1310.m_ChildAlignment = i1311[12]
  return i1310
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1312 = root || request.c( 'UnityEngine.UI.Text' )
  var i1313 = data
  i1312.m_FontData = request.d('UnityEngine.UI.FontData', i1313[0], i1312.m_FontData)
  i1312.m_Text = i1313[1]
  request.r(i1313[2], i1313[3], 0, i1312, 'm_Material')
  i1312.m_Maskable = !!i1313[4]
  i1312.m_Color = new pc.Color(i1313[5], i1313[6], i1313[7], i1313[8])
  i1312.m_RaycastTarget = !!i1313[9]
  i1312.m_RaycastPadding = new pc.Vec4( i1313[10], i1313[11], i1313[12], i1313[13] )
  return i1312
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1314 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1315 = data
  request.r(i1315[0], i1315[1], 0, i1314, 'm_Font')
  i1314.m_FontSize = i1315[2]
  i1314.m_FontStyle = i1315[3]
  i1314.m_BestFit = !!i1315[4]
  i1314.m_MinSize = i1315[5]
  i1314.m_MaxSize = i1315[6]
  i1314.m_Alignment = i1315[7]
  i1314.m_AlignByGeometry = !!i1315[8]
  i1314.m_RichText = !!i1315[9]
  i1314.m_HorizontalOverflow = i1315[10]
  i1314.m_VerticalOverflow = i1315[11]
  i1314.m_LineSpacing = i1315[12]
  return i1314
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1316 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1317 = data
  i1316.m_ShowMaskGraphic = !!i1317[0]
  return i1316
}

Deserializers["IQFill"] = function (request, data, root) {
  var i1318 = root || request.c( 'IQFill' )
  var i1319 = data
  request.r(i1319[0], i1319[1], 0, i1318, 'fillImage')
  i1318.maxFillAmount = i1319[2]
  i1318.fillDuration = i1319[3]
  i1318.maxValue = i1319[4]
  i1318.addValue = i1319[5]
  i1318.fillEase = i1319[6]
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1321 = data
  i1320.ambientIntensity = i1321[0]
  i1320.reflectionIntensity = i1321[1]
  i1320.ambientMode = i1321[2]
  i1320.ambientLight = new pc.Color(i1321[3], i1321[4], i1321[5], i1321[6])
  i1320.ambientSkyColor = new pc.Color(i1321[7], i1321[8], i1321[9], i1321[10])
  i1320.ambientGroundColor = new pc.Color(i1321[11], i1321[12], i1321[13], i1321[14])
  i1320.ambientEquatorColor = new pc.Color(i1321[15], i1321[16], i1321[17], i1321[18])
  i1320.fogColor = new pc.Color(i1321[19], i1321[20], i1321[21], i1321[22])
  i1320.fogEndDistance = i1321[23]
  i1320.fogStartDistance = i1321[24]
  i1320.fogDensity = i1321[25]
  i1320.fog = !!i1321[26]
  request.r(i1321[27], i1321[28], 0, i1320, 'skybox')
  i1320.fogMode = i1321[29]
  var i1323 = i1321[30]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1323[i + 0]) );
  }
  i1320.lightmaps = i1322
  i1320.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1321[31], i1320.lightProbes)
  i1320.lightmapsMode = i1321[32]
  i1320.mixedBakeMode = i1321[33]
  i1320.environmentLightingMode = i1321[34]
  i1320.ambientProbe = new pc.SphericalHarmonicsL2(i1321[35])
  i1320.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1321[36])
  i1320.useReferenceAmbientProbe = !!i1321[37]
  request.r(i1321[38], i1321[39], 0, i1320, 'customReflection')
  request.r(i1321[40], i1321[41], 0, i1320, 'defaultReflection')
  i1320.defaultReflectionMode = i1321[42]
  i1320.defaultReflectionResolution = i1321[43]
  i1320.sunLightObjectId = i1321[44]
  i1320.pixelLightCount = i1321[45]
  i1320.defaultReflectionHDR = !!i1321[46]
  i1320.hasLightDataAsset = !!i1321[47]
  i1320.hasManualGenerate = !!i1321[48]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1327 = data
  request.r(i1327[0], i1327[1], 0, i1326, 'lightmapColor')
  request.r(i1327[2], i1327[3], 0, i1326, 'lightmapDirection')
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1328 = root || new UnityEngine.LightProbes()
  var i1329 = data
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1337 = data
  var i1339 = i1337[0]
  var i1338 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1339[i + 0]));
  }
  i1336.ShaderCompilationErrors = i1338
  i1336.name = i1337[1]
  i1336.guid = i1337[2]
  var i1341 = i1337[3]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( i1341[i + 0] );
  }
  i1336.shaderDefinedKeywords = i1340
  var i1343 = i1337[4]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1343[i + 0]) );
  }
  i1336.passes = i1342
  var i1345 = i1337[5]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1345[i + 0]) );
  }
  i1336.usePasses = i1344
  var i1347 = i1337[6]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1347[i + 0]) );
  }
  i1336.defaultParameterValues = i1346
  request.r(i1337[7], i1337[8], 0, i1336, 'unityFallbackShader')
  i1336.readDepth = !!i1337[9]
  i1336.isCreatedByShaderGraph = !!i1337[10]
  i1336.usedBatchUniforms = i1337[11]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1351 = data
  i1350.shaderName = i1351[0]
  i1350.errorMessage = i1351[1]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1354 = root || new pc.UnityShaderPass()
  var i1355 = data
  i1354.id = i1355[0]
  i1354.subShaderIndex = i1355[1]
  i1354.name = i1355[2]
  i1354.passType = i1355[3]
  i1354.grabPassTextureName = i1355[4]
  i1354.usePass = !!i1355[5]
  i1354.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1355[6], i1354.zTest)
  i1354.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1355[7], i1354.zWrite)
  i1354.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1355[8], i1354.culling)
  i1354.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1355[9], i1354.blending)
  i1354.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1355[10], i1354.alphaBlending)
  i1354.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1355[11], i1354.colorWriteMask)
  i1354.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1355[12], i1354.offsetUnits)
  i1354.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1355[13], i1354.offsetFactor)
  i1354.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1355[14], i1354.stencilRef)
  i1354.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1355[15], i1354.stencilReadMask)
  i1354.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1355[16], i1354.stencilWriteMask)
  i1354.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1355[17], i1354.stencilOp)
  i1354.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1355[18], i1354.stencilOpFront)
  i1354.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1355[19], i1354.stencilOpBack)
  var i1357 = i1355[20]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1357[i + 0]) );
  }
  i1354.tags = i1356
  var i1359 = i1355[21]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.push( i1359[i + 0] );
  }
  i1354.passDefinedKeywords = i1358
  var i1361 = i1355[22]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1361[i + 0]) );
  }
  i1354.passDefinedKeywordGroups = i1360
  var i1363 = i1355[23]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1363[i + 0]) );
  }
  i1354.variants = i1362
  var i1365 = i1355[24]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1365[i + 0]) );
  }
  i1354.excludedVariants = i1364
  i1354.hasDepthReader = !!i1355[25]
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1367 = data
  i1366.val = i1367[0]
  i1366.name = i1367[1]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1369 = data
  i1368.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1369[0], i1368.src)
  i1368.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1369[1], i1368.dst)
  i1368.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1369[2], i1368.op)
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1371 = data
  i1370.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1371[0], i1370.pass)
  i1370.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1371[1], i1370.fail)
  i1370.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1371[2], i1370.zFail)
  i1370.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1371[3], i1370.comp)
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1375 = data
  i1374.name = i1375[0]
  i1374.value = i1375[1]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1379 = data
  var i1381 = i1379[0]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( i1381[i + 0] );
  }
  i1378.keywords = i1380
  i1378.hasDiscard = !!i1379[1]
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1385 = data
  i1384.passId = i1385[0]
  i1384.subShaderIndex = i1385[1]
  var i1387 = i1385[2]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( i1387[i + 0] );
  }
  i1384.keywords = i1386
  i1384.vertexProgram = i1385[3]
  i1384.fragmentProgram = i1385[4]
  i1384.compiledForWebGL2 = !!i1385[5]
  i1384.readDepth = !!i1385[6]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1391 = data
  request.r(i1391[0], i1391[1], 0, i1390, 'shader')
  i1390.pass = i1391[2]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1395 = data
  i1394.name = i1395[0]
  i1394.type = i1395[1]
  i1394.value = new pc.Vec4( i1395[2], i1395[3], i1395[4], i1395[5] )
  i1394.textureValue = i1395[6]
  i1394.shaderPropertyFlag = i1395[7]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1397 = data
  i1396.name = i1397[0]
  request.r(i1397[1], i1397[2], 0, i1396, 'texture')
  i1396.aabb = i1397[3]
  i1396.vertices = i1397[4]
  i1396.triangles = i1397[5]
  i1396.textureRect = UnityEngine.Rect.MinMaxRect(i1397[6], i1397[7], i1397[8], i1397[9])
  i1396.packedRect = UnityEngine.Rect.MinMaxRect(i1397[10], i1397[11], i1397[12], i1397[13])
  i1396.border = new pc.Vec4( i1397[14], i1397[15], i1397[16], i1397[17] )
  i1396.transparency = i1397[18]
  i1396.bounds = i1397[19]
  i1396.pixelsPerUnit = i1397[20]
  i1396.textureWidth = i1397[21]
  i1396.textureHeight = i1397[22]
  i1396.nativeSize = new pc.Vec2( i1397[23], i1397[24] )
  i1396.pivot = new pc.Vec2( i1397[25], i1397[26] )
  i1396.textureRectOffset = new pc.Vec2( i1397[27], i1397[28] )
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1399 = data
  i1398.name = i1399[0]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1401 = data
  i1400.name = i1401[0]
  i1400.ascent = i1401[1]
  i1400.originalLineHeight = i1401[2]
  i1400.fontSize = i1401[3]
  var i1403 = i1401[4]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1403[i + 0]) );
  }
  i1400.characterInfo = i1402
  request.r(i1401[5], i1401[6], 0, i1400, 'texture')
  i1400.originalFontSize = i1401[7]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1407 = data
  i1406.index = i1407[0]
  i1406.advance = i1407[1]
  i1406.bearing = i1407[2]
  i1406.glyphWidth = i1407[3]
  i1406.glyphHeight = i1407[4]
  i1406.minX = i1407[5]
  i1406.maxX = i1407[6]
  i1406.minY = i1407[7]
  i1406.maxY = i1407[8]
  i1406.uvBottomLeftX = i1407[9]
  i1406.uvBottomLeftY = i1407[10]
  i1406.uvBottomRightX = i1407[11]
  i1406.uvBottomRightY = i1407[12]
  i1406.uvTopLeftX = i1407[13]
  i1406.uvTopLeftY = i1407[14]
  i1406.uvTopRightX = i1407[15]
  i1406.uvTopRightY = i1407[16]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1409 = data
  i1408.name = i1409[0]
  i1408.bytes64 = i1409[1]
  i1408.data = i1409[2]
  return i1408
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1410 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1411 = data
  var i1413 = i1411[0]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 2) {
  request.r(i1413[i + 0], i1413[i + 1], 2, i1412, '')
  }
  i1410.atlasAssets = i1412
  i1410.scale = i1411[1]
  request.r(i1411[2], i1411[3], 0, i1410, 'skeletonJSON')
  i1410.isUpgradingBlendModeMaterials = !!i1411[4]
  i1410.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1411[5], i1410.blendModeMaterials)
  var i1415 = i1411[6]
  var i1414 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1415.length; i += 2) {
  request.r(i1415[i + 0], i1415[i + 1], 1, i1414, '')
  }
  i1410.skeletonDataModifiers = i1414
  var i1417 = i1411[7]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( i1417[i + 0] );
  }
  i1410.fromAnimation = i1416
  var i1419 = i1411[8]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( i1419[i + 0] );
  }
  i1410.toAnimation = i1418
  i1410.duration = i1411[9]
  i1410.defaultMix = i1411[10]
  request.r(i1411[11], i1411[12], 0, i1410, 'controller')
  return i1410
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1422 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1423 = data
  i1422.applyAdditiveMaterial = !!i1423[0]
  var i1425 = i1423[1]
  var i1424 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1425[i + 0]));
  }
  i1422.additiveMaterials = i1424
  var i1427 = i1423[2]
  var i1426 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1427[i + 0]));
  }
  i1422.multiplyMaterials = i1426
  var i1429 = i1423[3]
  var i1428 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1429[i + 0]));
  }
  i1422.screenMaterials = i1428
  i1422.requiresBlendModeMaterials = !!i1423[4]
  return i1422
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1432 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1433 = data
  i1432.pageName = i1433[0]
  request.r(i1433[1], i1433[2], 0, i1432, 'material')
  return i1432
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1436 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1437 = data
  request.r(i1437[0], i1437[1], 0, i1436, 'atlasFile')
  var i1439 = i1437[2]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 2) {
  request.r(i1439[i + 0], i1439[i + 1], 2, i1438, '')
  }
  i1436.materials = i1438
  i1436.textureLoadingMode = i1437[3]
  request.r(i1437[4], i1437[5], 0, i1436, 'onDemandTextureLoader')
  return i1436
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1442 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1443 = data
  i1442.useSafeMode = !!i1443[0]
  i1442.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1443[1], i1442.safeModeOptions)
  i1442.timeScale = i1443[2]
  i1442.unscaledTimeScale = i1443[3]
  i1442.useSmoothDeltaTime = !!i1443[4]
  i1442.maxSmoothUnscaledTime = i1443[5]
  i1442.rewindCallbackMode = i1443[6]
  i1442.showUnityEditorReport = !!i1443[7]
  i1442.logBehaviour = i1443[8]
  i1442.drawGizmos = !!i1443[9]
  i1442.defaultRecyclable = !!i1443[10]
  i1442.defaultAutoPlay = i1443[11]
  i1442.defaultUpdateType = i1443[12]
  i1442.defaultTimeScaleIndependent = !!i1443[13]
  i1442.defaultEaseType = i1443[14]
  i1442.defaultEaseOvershootOrAmplitude = i1443[15]
  i1442.defaultEasePeriod = i1443[16]
  i1442.defaultAutoKill = !!i1443[17]
  i1442.defaultLoopType = i1443[18]
  i1442.debugMode = !!i1443[19]
  i1442.debugStoreTargetId = !!i1443[20]
  i1442.showPreviewPanel = !!i1443[21]
  i1442.storeSettingsLocation = i1443[22]
  i1442.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1443[23], i1442.modules)
  i1442.createASMDEF = !!i1443[24]
  i1442.showPlayingTweens = !!i1443[25]
  i1442.showPausedTweens = !!i1443[26]
  return i1442
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1444 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1445 = data
  i1444.logBehaviour = i1445[0]
  i1444.nestedTweenFailureBehaviour = i1445[1]
  return i1444
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1446 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1447 = data
  i1446.showPanel = !!i1447[0]
  i1446.audioEnabled = !!i1447[1]
  i1446.physicsEnabled = !!i1447[2]
  i1446.physics2DEnabled = !!i1447[3]
  i1446.spriteEnabled = !!i1447[4]
  i1446.uiEnabled = !!i1447[5]
  i1446.textMeshProEnabled = !!i1447[6]
  i1446.tk2DEnabled = !!i1447[7]
  i1446.deAudioEnabled = !!i1447[8]
  i1446.deUnityExtendedEnabled = !!i1447[9]
  i1446.epoOutlineEnabled = !!i1447[10]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1449 = data
  var i1451 = i1449[0]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1451[i + 0]) );
  }
  i1448.files = i1450
  i1448.componentToPrefabIds = i1449[1]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1455 = data
  i1454.path = i1455[0]
  request.r(i1455[1], i1455[2], 0, i1454, 'unityObject')
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1457 = data
  var i1459 = i1457[0]
  var i1458 = []
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1459[i + 0]) );
  }
  i1456.scriptsExecutionOrder = i1458
  var i1461 = i1457[1]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1461[i + 0]) );
  }
  i1456.sortingLayers = i1460
  var i1463 = i1457[2]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1463[i + 0]) );
  }
  i1456.cullingLayers = i1462
  i1456.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1457[3], i1456.timeSettings)
  i1456.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1457[4], i1456.physicsSettings)
  i1456.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1457[5], i1456.physics2DSettings)
  i1456.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1457[6], i1456.qualitySettings)
  i1456.enableRealtimeShadows = !!i1457[7]
  i1456.enableAutoInstancing = !!i1457[8]
  i1456.enableDynamicBatching = !!i1457[9]
  i1456.lightmapEncodingQuality = i1457[10]
  i1456.desiredColorSpace = i1457[11]
  var i1465 = i1457[12]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( i1465[i + 0] );
  }
  i1456.allTags = i1464
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1469 = data
  i1468.name = i1469[0]
  i1468.value = i1469[1]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1473 = data
  i1472.id = i1473[0]
  i1472.name = i1473[1]
  i1472.value = i1473[2]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1477 = data
  i1476.id = i1477[0]
  i1476.name = i1477[1]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1479 = data
  i1478.fixedDeltaTime = i1479[0]
  i1478.maximumDeltaTime = i1479[1]
  i1478.timeScale = i1479[2]
  i1478.maximumParticleTimestep = i1479[3]
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1481 = data
  i1480.gravity = new pc.Vec3( i1481[0], i1481[1], i1481[2] )
  i1480.defaultSolverIterations = i1481[3]
  i1480.bounceThreshold = i1481[4]
  i1480.autoSyncTransforms = !!i1481[5]
  i1480.autoSimulation = !!i1481[6]
  var i1483 = i1481[7]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 1) {
    i1482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1483[i + 0]) );
  }
  i1480.collisionMatrix = i1482
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1487 = data
  i1486.enabled = !!i1487[0]
  i1486.layerId = i1487[1]
  i1486.otherLayerId = i1487[2]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1489 = data
  request.r(i1489[0], i1489[1], 0, i1488, 'material')
  i1488.gravity = new pc.Vec2( i1489[2], i1489[3] )
  i1488.positionIterations = i1489[4]
  i1488.velocityIterations = i1489[5]
  i1488.velocityThreshold = i1489[6]
  i1488.maxLinearCorrection = i1489[7]
  i1488.maxAngularCorrection = i1489[8]
  i1488.maxTranslationSpeed = i1489[9]
  i1488.maxRotationSpeed = i1489[10]
  i1488.baumgarteScale = i1489[11]
  i1488.baumgarteTOIScale = i1489[12]
  i1488.timeToSleep = i1489[13]
  i1488.linearSleepTolerance = i1489[14]
  i1488.angularSleepTolerance = i1489[15]
  i1488.defaultContactOffset = i1489[16]
  i1488.autoSimulation = !!i1489[17]
  i1488.queriesHitTriggers = !!i1489[18]
  i1488.queriesStartInColliders = !!i1489[19]
  i1488.callbacksOnDisable = !!i1489[20]
  i1488.reuseCollisionCallbacks = !!i1489[21]
  i1488.autoSyncTransforms = !!i1489[22]
  var i1491 = i1489[23]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1491[i + 0]) );
  }
  i1488.collisionMatrix = i1490
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1495 = data
  i1494.enabled = !!i1495[0]
  i1494.layerId = i1495[1]
  i1494.otherLayerId = i1495[2]
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1497 = data
  var i1499 = i1497[0]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1499[i + 0]) );
  }
  i1496.qualityLevels = i1498
  var i1501 = i1497[1]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( i1501[i + 0] );
  }
  i1496.names = i1500
  i1496.shadows = i1497[2]
  i1496.anisotropicFiltering = i1497[3]
  i1496.antiAliasing = i1497[4]
  i1496.lodBias = i1497[5]
  i1496.shadowCascades = i1497[6]
  i1496.shadowDistance = i1497[7]
  i1496.shadowmaskMode = i1497[8]
  i1496.shadowProjection = i1497[9]
  i1496.shadowResolution = i1497[10]
  i1496.softParticles = !!i1497[11]
  i1496.softVegetation = !!i1497[12]
  i1496.activeColorSpace = i1497[13]
  i1496.desiredColorSpace = i1497[14]
  i1496.masterTextureLimit = i1497[15]
  i1496.maxQueuedFrames = i1497[16]
  i1496.particleRaycastBudget = i1497[17]
  i1496.pixelLightCount = i1497[18]
  i1496.realtimeReflectionProbes = !!i1497[19]
  i1496.shadowCascade2Split = i1497[20]
  i1496.shadowCascade4Split = new pc.Vec3( i1497[21], i1497[22], i1497[23] )
  i1496.streamingMipmapsActive = !!i1497[24]
  i1496.vSyncCount = i1497[25]
  i1496.asyncUploadBufferSize = i1497[26]
  i1496.asyncUploadTimeSlice = i1497[27]
  i1496.billboardsFaceCameraPosition = !!i1497[28]
  i1496.shadowNearPlaneOffset = i1497[29]
  i1496.streamingMipmapsMemoryBudget = i1497[30]
  i1496.maximumLODLevel = i1497[31]
  i1496.streamingMipmapsAddAllCameras = !!i1497[32]
  i1496.streamingMipmapsMaxLevelReduction = i1497[33]
  i1496.streamingMipmapsRenderersPerFrame = i1497[34]
  i1496.resolutionScalingFixedDPIFactor = i1497[35]
  i1496.streamingMipmapsMaxFileIORequests = i1497[36]
  i1496.currentQualityLevel = i1497[37]
  return i1496
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[47],"48":[3],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[3],"72":[73],"74":[75],"76":[75],"9":[8],"77":[78],"79":[80],"81":[78],"82":[8],"83":[8],"11":[9],"20":[17,8],"84":[8],"10":[9],"85":[8],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"31":[8],"34":[8],"91":[8],"16":[17,8],"92":[8],"93":[8],"94":[8],"95":[8],"32":[17,8],"96":[8],"97":[6],"98":[6],"7":[6],"99":[6],"100":[3],"101":[3],"102":[103],"104":[3],"105":[106],"107":[8],"108":[17,8],"109":[73],"25":[17,8],"110":[111,73],"112":[73],"113":[73,114],"115":[50],"116":[58],"117":[106],"118":[119],"120":[8],"121":[73,8],"122":[8,17],"123":[8],"124":[17,8],"125":[73],"126":[17,8],"127":[8],"128":[78]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.UI.Image","UnityEngine.Sprite","DropZone","UnityEngine.BoxCollider2D","ClickItem","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DG.Tweening.DOTweenAnimation","DraggableItem","UnityEngine.CanvasGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Mask","IQFill","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "04/15/2025 07:07:05";

Deserializers.lunaDaysRunning = "13.0";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "APG_V03_TrangHT_AnhPD";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1786";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4226";

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

Deserializers.buildID = "f3dbaa75-fde9-4615-861a-42867269b8cb";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

