var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.JointSpring' )
  var i1159 = data
  i1158.spring = i1159[0]
  i1158.damper = i1159[1]
  i1158.targetPosition = i1159[2]
  return i1158
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.JointMotor' )
  var i1161 = data
  i1160.m_TargetVelocity = i1161[0]
  i1160.m_Force = i1161[1]
  i1160.m_FreeSpin = i1161[2]
  return i1160
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1162 = root || request.c( 'UnityEngine.JointLimits' )
  var i1163 = data
  i1162.m_Min = i1163[0]
  i1162.m_Max = i1163[1]
  i1162.m_Bounciness = i1163[2]
  i1162.m_BounceMinVelocity = i1163[3]
  i1162.m_ContactDistance = i1163[4]
  i1162.minBounce = i1163[5]
  i1162.maxBounce = i1163[6]
  return i1162
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1164 = root || request.c( 'UnityEngine.JointDrive' )
  var i1165 = data
  i1164.m_PositionSpring = i1165[0]
  i1164.m_PositionDamper = i1165[1]
  i1164.m_MaximumForce = i1165[2]
  i1164.m_UseAcceleration = i1165[3]
  return i1164
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1167 = data
  i1166.m_Spring = i1167[0]
  i1166.m_Damper = i1167[1]
  return i1166
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1169 = data
  i1168.m_Limit = i1169[0]
  i1168.m_Bounciness = i1169[1]
  i1168.m_ContactDistance = i1169[2]
  return i1168
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1171 = data
  i1170.m_ExtremumSlip = i1171[0]
  i1170.m_ExtremumValue = i1171[1]
  i1170.m_AsymptoteSlip = i1171[2]
  i1170.m_AsymptoteValue = i1171[3]
  i1170.m_Stiffness = i1171[4]
  return i1170
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1172 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1173 = data
  i1172.m_LowerAngle = i1173[0]
  i1172.m_UpperAngle = i1173[1]
  return i1172
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1175 = data
  i1174.m_MotorSpeed = i1175[0]
  i1174.m_MaximumMotorTorque = i1175[1]
  return i1174
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1176 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1177 = data
  i1176.m_DampingRatio = i1177[0]
  i1176.m_Frequency = i1177[1]
  i1176.m_Angle = i1177[2]
  return i1176
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1179 = data
  i1178.m_LowerTranslation = i1179[0]
  i1178.m_UpperTranslation = i1179[1]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1181 = data
  i1180.name = i1181[0]
  i1180.width = i1181[1]
  i1180.height = i1181[2]
  i1180.mipmapCount = i1181[3]
  i1180.anisoLevel = i1181[4]
  i1180.filterMode = i1181[5]
  i1180.hdr = !!i1181[6]
  i1180.format = i1181[7]
  i1180.wrapMode = i1181[8]
  i1180.alphaIsTransparency = !!i1181[9]
  i1180.alphaSource = i1181[10]
  i1180.graphicsFormat = i1181[11]
  i1180.sRGBTexture = !!i1181[12]
  i1180.desiredColorSpace = i1181[13]
  i1180.wrapU = i1181[14]
  i1180.wrapV = i1181[15]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1182 = root || new pc.UnityMaterial()
  var i1183 = data
  i1182.name = i1183[0]
  request.r(i1183[1], i1183[2], 0, i1182, 'shader')
  i1182.renderQueue = i1183[3]
  i1182.enableInstancing = !!i1183[4]
  var i1185 = i1183[5]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1185[i + 0]) );
  }
  i1182.floatParameters = i1184
  var i1187 = i1183[6]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1187[i + 0]) );
  }
  i1182.colorParameters = i1186
  var i1189 = i1183[7]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1189[i + 0]) );
  }
  i1182.vectorParameters = i1188
  var i1191 = i1183[8]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1191[i + 0]) );
  }
  i1182.textureParameters = i1190
  var i1193 = i1183[9]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1193[i + 0]) );
  }
  i1182.materialFlags = i1192
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1197 = data
  i1196.name = i1197[0]
  i1196.value = i1197[1]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1201 = data
  i1200.name = i1201[0]
  i1200.value = new pc.Color(i1201[1], i1201[2], i1201[3], i1201[4])
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1205 = data
  i1204.name = i1205[0]
  i1204.value = new pc.Vec4( i1205[1], i1205[2], i1205[3], i1205[4] )
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1209 = data
  i1208.name = i1209[0]
  request.r(i1209[1], i1209[2], 0, i1208, 'value')
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1213 = data
  i1212.name = i1213[0]
  i1212.enabled = !!i1213[1]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1215 = data
  i1214.pivot = new pc.Vec2( i1215[0], i1215[1] )
  i1214.anchorMin = new pc.Vec2( i1215[2], i1215[3] )
  i1214.anchorMax = new pc.Vec2( i1215[4], i1215[5] )
  i1214.sizeDelta = new pc.Vec2( i1215[6], i1215[7] )
  i1214.anchoredPosition3D = new pc.Vec3( i1215[8], i1215[9], i1215[10] )
  i1214.rotation = new pc.Quat(i1215[11], i1215[12], i1215[13], i1215[14])
  i1214.scale = new pc.Vec3( i1215[15], i1215[16], i1215[17] )
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1217 = data
  i1216.cullTransparentMesh = !!i1217[0]
  return i1216
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1218 = root || request.c( 'UnityEngine.UI.Image' )
  var i1219 = data
  request.r(i1219[0], i1219[1], 0, i1218, 'm_Sprite')
  i1218.m_Type = i1219[2]
  i1218.m_PreserveAspect = !!i1219[3]
  i1218.m_FillCenter = !!i1219[4]
  i1218.m_FillMethod = i1219[5]
  i1218.m_FillAmount = i1219[6]
  i1218.m_FillClockwise = !!i1219[7]
  i1218.m_FillOrigin = i1219[8]
  i1218.m_UseSpriteMesh = !!i1219[9]
  i1218.m_PixelsPerUnitMultiplier = i1219[10]
  request.r(i1219[11], i1219[12], 0, i1218, 'm_Material')
  i1218.m_Maskable = !!i1219[13]
  i1218.m_Color = new pc.Color(i1219[14], i1219[15], i1219[16], i1219[17])
  i1218.m_RaycastTarget = !!i1219[18]
  i1218.m_RaycastPadding = new pc.Vec4( i1219[19], i1219[20], i1219[21], i1219[22] )
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1221 = data
  i1220.name = i1221[0]
  i1220.tagId = i1221[1]
  i1220.enabled = !!i1221[2]
  i1220.isStatic = !!i1221[3]
  i1220.layer = i1221[4]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1223 = data
  i1222.name = i1223[0]
  i1222.index = i1223[1]
  i1222.startup = !!i1223[2]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1225 = data
  i1224.aspect = i1225[0]
  i1224.orthographic = !!i1225[1]
  i1224.orthographicSize = i1225[2]
  i1224.backgroundColor = new pc.Color(i1225[3], i1225[4], i1225[5], i1225[6])
  i1224.nearClipPlane = i1225[7]
  i1224.farClipPlane = i1225[8]
  i1224.fieldOfView = i1225[9]
  i1224.depth = i1225[10]
  i1224.clearFlags = i1225[11]
  i1224.cullingMask = i1225[12]
  i1224.rect = i1225[13]
  request.r(i1225[14], i1225[15], 0, i1224, 'targetTexture')
  i1224.usePhysicalProperties = !!i1225[16]
  i1224.focalLength = i1225[17]
  i1224.sensorSize = new pc.Vec2( i1225[18], i1225[19] )
  i1224.lensShift = new pc.Vec2( i1225[20], i1225[21] )
  i1224.gateFit = i1225[22]
  i1224.commandBufferCount = i1225[23]
  i1224.cameraType = i1225[24]
  i1224.enabled = !!i1225[25]
  return i1224
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1226 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1227 = data
  request.r(i1227[0], i1227[1], 0, i1226, 'm_FirstSelected')
  i1226.m_sendNavigationEvents = !!i1227[2]
  i1226.m_DragThreshold = i1227[3]
  return i1226
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1228 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1229 = data
  i1228.m_HorizontalAxis = i1229[0]
  i1228.m_VerticalAxis = i1229[1]
  i1228.m_SubmitButton = i1229[2]
  i1228.m_CancelButton = i1229[3]
  i1228.m_InputActionsPerSecond = i1229[4]
  i1228.m_RepeatDelay = i1229[5]
  i1228.m_ForceModuleActive = !!i1229[6]
  i1228.m_SendPointerHoverToParent = !!i1229[7]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1231 = data
  i1230.planeDistance = i1231[0]
  i1230.referencePixelsPerUnit = i1231[1]
  i1230.isFallbackOverlay = !!i1231[2]
  i1230.renderMode = i1231[3]
  i1230.renderOrder = i1231[4]
  i1230.sortingLayerName = i1231[5]
  i1230.sortingOrder = i1231[6]
  i1230.scaleFactor = i1231[7]
  request.r(i1231[8], i1231[9], 0, i1230, 'worldCamera')
  i1230.overrideSorting = !!i1231[10]
  i1230.pixelPerfect = !!i1231[11]
  i1230.targetDisplay = i1231[12]
  i1230.overridePixelPerfect = !!i1231[13]
  i1230.enabled = !!i1231[14]
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

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1237 = data
  i1236.m_ShowMaskGraphic = !!i1237[0]
  return i1236
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1238 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1239 = data
  request.r(i1239[0], i1239[1], 0, i1238, 'skeletonDataAsset')
  request.r(i1239[2], i1239[3], 0, i1238, 'additiveMaterial')
  request.r(i1239[4], i1239[5], 0, i1238, 'multiplyMaterial')
  request.r(i1239[6], i1239[7], 0, i1238, 'screenMaterial')
  i1238.initialSkinName = i1239[8]
  i1238.initialFlipX = !!i1239[9]
  i1238.initialFlipY = !!i1239[10]
  i1238.startingAnimation = i1239[11]
  i1238.startingLoop = !!i1239[12]
  i1238.timeScale = i1239[13]
  i1238.freeze = !!i1239[14]
  i1238.layoutScaleMode = i1239[15]
  i1238.updateWhenInvisible = i1239[16]
  i1238.allowMultipleCanvasRenderers = !!i1239[17]
  var i1241 = i1239[18]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1241.length; i += 2) {
  request.r(i1241[i + 0], i1241[i + 1], 1, i1240, '')
  }
  i1238.canvasRenderers = i1240
  i1238.enableSeparatorSlots = !!i1239[19]
  i1238.updateSeparatorPartLocation = !!i1239[20]
  i1238.updateSeparatorPartScale = !!i1239[21]
  i1238.disableMeshAssignmentOnOverride = !!i1239[22]
  i1238.referenceSize = new pc.Vec2( i1239[23], i1239[24] )
  i1238.referenceScale = i1239[25]
  i1238.rectTransformSize = new pc.Vec2( i1239[26], i1239[27] )
  i1238.editReferenceRect = !!i1239[28]
  var i1243 = i1239[29]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( i1243[i + 0] );
  }
  i1238.separatorSlotNames = i1242
  var i1245 = i1239[30]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1245.length; i += 2) {
  request.r(i1245[i + 0], i1245[i + 1], 1, i1244, '')
  }
  i1238.separatorParts = i1244
  i1238.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1239[31], i1238.meshGenerator)
  i1238.updateTiming = i1239[32]
  i1238.unscaledTime = !!i1239[33]
  request.r(i1239[34], i1239[35], 0, i1238, 'm_Material')
  i1238.m_Maskable = !!i1239[36]
  i1238.m_Color = new pc.Color(i1239[37], i1239[38], i1239[39], i1239[40])
  i1238.m_RaycastTarget = !!i1239[41]
  i1238.m_RaycastPadding = new pc.Vec4( i1239[42], i1239[43], i1239[44], i1239[45] )
  return i1238
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1252 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1253 = data
  i1252.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1253[0], i1252.settings)
  return i1252
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1254 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1255 = data
  i1254.useClipping = !!i1255[0]
  i1254.zSpacing = i1255[1]
  i1254.pmaVertexColors = !!i1255[2]
  i1254.tintBlack = !!i1255[3]
  i1254.canvasGroupTintBlack = !!i1255[4]
  i1254.calculateTangents = !!i1255[5]
  i1254.addNormals = !!i1255[6]
  i1254.immutableTriangles = !!i1255[7]
  return i1254
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i1256 = root || request.c( 'AnimationController' )
  var i1257 = data
  var i1259 = i1257[0]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('Anim', i1259[i + 0]));
  }
  i1256.anims = i1258
  return i1256
}

Deserializers["Anim"] = function (request, data, root) {
  var i1262 = root || request.c( 'Anim' )
  var i1263 = data
  i1262.Key = i1263[0]
  i1262.NextKey = i1263[1]
  request.r(i1263[2], i1263[3], 0, i1262, 'Trigger')
  var i1265 = i1263[4]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('Sound')))
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.add(request.d('Sound', i1265[i + 0]));
  }
  i1262.Sounds = i1264
  i1262.Loop = !!i1263[5]
  i1262.Next = !!i1263[6]
  return i1262
}

Deserializers["Sound"] = function (request, data, root) {
  var i1268 = root || request.c( 'Sound' )
  var i1269 = data
  i1268.TimeDelay = i1269[0]
  request.r(i1269[1], i1269[2], 0, i1268, 'Clip')
  return i1268
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1270 = root || request.c( 'UnityEngine.UI.Text' )
  var i1271 = data
  i1270.m_FontData = request.d('UnityEngine.UI.FontData', i1271[0], i1270.m_FontData)
  i1270.m_Text = i1271[1]
  request.r(i1271[2], i1271[3], 0, i1270, 'm_Material')
  i1270.m_Maskable = !!i1271[4]
  i1270.m_Color = new pc.Color(i1271[5], i1271[6], i1271[7], i1271[8])
  i1270.m_RaycastTarget = !!i1271[9]
  i1270.m_RaycastPadding = new pc.Vec4( i1271[10], i1271[11], i1271[12], i1271[13] )
  return i1270
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1273 = data
  request.r(i1273[0], i1273[1], 0, i1272, 'm_Font')
  i1272.m_FontSize = i1273[2]
  i1272.m_FontStyle = i1273[3]
  i1272.m_BestFit = !!i1273[4]
  i1272.m_MinSize = i1273[5]
  i1272.m_MaxSize = i1273[6]
  i1272.m_Alignment = i1273[7]
  i1272.m_AlignByGeometry = !!i1273[8]
  i1272.m_RichText = !!i1273[9]
  i1272.m_HorizontalOverflow = i1273[10]
  i1272.m_VerticalOverflow = i1273[11]
  i1272.m_LineSpacing = i1273[12]
  return i1272
}

Deserializers["HeartController"] = function (request, data, root) {
  var i1274 = root || request.c( 'HeartController' )
  var i1275 = data
  request.r(i1275[0], i1275[1], 0, i1274, 'parent')
  request.r(i1275[2], i1275[3], 0, i1274, 'heartPrefab')
  return i1274
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1276 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1277 = data
  i1276.m_Spacing = i1277[0]
  i1276.m_ChildForceExpandWidth = !!i1277[1]
  i1276.m_ChildForceExpandHeight = !!i1277[2]
  i1276.m_ChildControlWidth = !!i1277[3]
  i1276.m_ChildControlHeight = !!i1277[4]
  i1276.m_ChildScaleWidth = !!i1277[5]
  i1276.m_ChildScaleHeight = !!i1277[6]
  i1276.m_ReverseArrangement = !!i1277[7]
  i1276.m_Padding = UnityEngine.RectOffset.FromPaddings(i1277[8], i1277[9], i1277[10], i1277[11])
  i1276.m_ChildAlignment = i1277[12]
  return i1276
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1278 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1279 = data
  request.r(i1279[0], i1279[1], 0, i1278, 'm_FillRect')
  request.r(i1279[2], i1279[3], 0, i1278, 'm_HandleRect')
  i1278.m_Direction = i1279[4]
  i1278.m_MinValue = i1279[5]
  i1278.m_MaxValue = i1279[6]
  i1278.m_WholeNumbers = !!i1279[7]
  i1278.m_Value = i1279[8]
  i1278.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1279[9], i1278.m_OnValueChanged)
  i1278.m_Navigation = request.d('UnityEngine.UI.Navigation', i1279[10], i1278.m_Navigation)
  i1278.m_Transition = i1279[11]
  i1278.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1279[12], i1278.m_Colors)
  i1278.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1279[13], i1278.m_SpriteState)
  i1278.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1279[14], i1278.m_AnimationTriggers)
  i1278.m_Interactable = !!i1279[15]
  request.r(i1279[16], i1279[17], 0, i1278, 'm_TargetGraphic')
  return i1278
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1280 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1281 = data
  i1280.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1281[0], i1280.m_PersistentCalls)
  return i1280
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1282 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1283 = data
  var i1285 = i1283[0]
  var i1284 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.add(request.d('UnityEngine.Events.PersistentCall', i1285[i + 0]));
  }
  i1282.m_Calls = i1284
  return i1282
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1289 = data
  request.r(i1289[0], i1289[1], 0, i1288, 'm_Target')
  i1288.m_TargetAssemblyTypeName = i1289[2]
  i1288.m_MethodName = i1289[3]
  i1288.m_Mode = i1289[4]
  i1288.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1289[5], i1288.m_Arguments)
  i1288.m_CallState = i1289[6]
  return i1288
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1291 = data
  i1290.m_Mode = i1291[0]
  i1290.m_WrapAround = !!i1291[1]
  request.r(i1291[2], i1291[3], 0, i1290, 'm_SelectOnUp')
  request.r(i1291[4], i1291[5], 0, i1290, 'm_SelectOnDown')
  request.r(i1291[6], i1291[7], 0, i1290, 'm_SelectOnLeft')
  request.r(i1291[8], i1291[9], 0, i1290, 'm_SelectOnRight')
  return i1290
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1293 = data
  i1292.m_NormalColor = new pc.Color(i1293[0], i1293[1], i1293[2], i1293[3])
  i1292.m_HighlightedColor = new pc.Color(i1293[4], i1293[5], i1293[6], i1293[7])
  i1292.m_PressedColor = new pc.Color(i1293[8], i1293[9], i1293[10], i1293[11])
  i1292.m_SelectedColor = new pc.Color(i1293[12], i1293[13], i1293[14], i1293[15])
  i1292.m_DisabledColor = new pc.Color(i1293[16], i1293[17], i1293[18], i1293[19])
  i1292.m_ColorMultiplier = i1293[20]
  i1292.m_FadeDuration = i1293[21]
  return i1292
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1295 = data
  request.r(i1295[0], i1295[1], 0, i1294, 'm_HighlightedSprite')
  request.r(i1295[2], i1295[3], 0, i1294, 'm_PressedSprite')
  request.r(i1295[4], i1295[5], 0, i1294, 'm_SelectedSprite')
  request.r(i1295[6], i1295[7], 0, i1294, 'm_DisabledSprite')
  return i1294
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1297 = data
  i1296.m_NormalTrigger = i1297[0]
  i1296.m_HighlightedTrigger = i1297[1]
  i1296.m_PressedTrigger = i1297[2]
  i1296.m_SelectedTrigger = i1297[3]
  i1296.m_DisabledTrigger = i1297[4]
  return i1296
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.UI.Button' )
  var i1299 = data
  i1298.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1299[0], i1298.m_OnClick)
  i1298.m_Navigation = request.d('UnityEngine.UI.Navigation', i1299[1], i1298.m_Navigation)
  i1298.m_Transition = i1299[2]
  i1298.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1299[3], i1298.m_Colors)
  i1298.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1299[4], i1298.m_SpriteState)
  i1298.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1299[5], i1298.m_AnimationTriggers)
  i1298.m_Interactable = !!i1299[6]
  request.r(i1299[7], i1299[8], 0, i1298, 'm_TargetGraphic')
  return i1298
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1300 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1301 = data
  i1300.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1301[0], i1300.m_PersistentCalls)
  return i1300
}

Deserializers["PhaseController"] = function (request, data, root) {
  var i1302 = root || request.c( 'PhaseController' )
  var i1303 = data
  request.r(i1303[0], i1303[1], 0, i1302, 'character')
  i1302.key = i1303[2]
  request.r(i1303[3], i1303[4], 0, i1302, 'legHair')
  return i1302
}

Deserializers["TutController"] = function (request, data, root) {
  var i1304 = root || request.c( 'TutController' )
  var i1305 = data
  request.r(i1305[0], i1305[1], 0, i1304, 'icon')
  request.r(i1305[2], i1305[3], 0, i1304, 'tutObject')
  i1304.toPos = new pc.Vec3( i1305[4], i1305[5], i1305[6] )
  i1304.timeMove = i1305[7]
  i1304.timeDelay = i1305[8]
  return i1304
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1306 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1307 = data
  i1306.targetIsSelf = !!i1307[0]
  request.r(i1307[1], i1307[2], 0, i1306, 'targetGO')
  i1306.tweenTargetIsTargetGO = !!i1307[3]
  i1306.delay = i1307[4]
  i1306.duration = i1307[5]
  i1306.easeType = i1307[6]
  i1306.easeCurve = new pc.AnimationCurve( { keys_flow: i1307[7] } )
  i1306.loopType = i1307[8]
  i1306.loops = i1307[9]
  i1306.id = i1307[10]
  i1306.isRelative = !!i1307[11]
  i1306.isFrom = !!i1307[12]
  i1306.isIndependentUpdate = !!i1307[13]
  i1306.autoKill = !!i1307[14]
  i1306.autoGenerate = !!i1307[15]
  i1306.isActive = !!i1307[16]
  i1306.isValid = !!i1307[17]
  request.r(i1307[18], i1307[19], 0, i1306, 'target')
  i1306.animationType = i1307[20]
  i1306.targetType = i1307[21]
  i1306.forcedTargetType = i1307[22]
  i1306.autoPlay = !!i1307[23]
  i1306.useTargetAsV3 = !!i1307[24]
  i1306.endValueFloat = i1307[25]
  i1306.endValueV3 = new pc.Vec3( i1307[26], i1307[27], i1307[28] )
  i1306.endValueV2 = new pc.Vec2( i1307[29], i1307[30] )
  i1306.endValueColor = new pc.Color(i1307[31], i1307[32], i1307[33], i1307[34])
  i1306.endValueString = i1307[35]
  i1306.endValueRect = UnityEngine.Rect.MinMaxRect(i1307[36], i1307[37], i1307[38], i1307[39])
  request.r(i1307[40], i1307[41], 0, i1306, 'endValueTransform')
  i1306.optionalBool0 = !!i1307[42]
  i1306.optionalBool1 = !!i1307[43]
  i1306.optionalFloat0 = i1307[44]
  i1306.optionalInt0 = i1307[45]
  i1306.optionalRotationMode = i1307[46]
  i1306.optionalScrambleMode = i1307[47]
  i1306.optionalShakeRandomnessMode = i1307[48]
  i1306.optionalString = i1307[49]
  i1306.updateType = i1307[50]
  i1306.isSpeedBased = !!i1307[51]
  i1306.hasOnStart = !!i1307[52]
  i1306.hasOnPlay = !!i1307[53]
  i1306.hasOnUpdate = !!i1307[54]
  i1306.hasOnStepComplete = !!i1307[55]
  i1306.hasOnComplete = !!i1307[56]
  i1306.hasOnTweenCreated = !!i1307[57]
  i1306.hasOnRewind = !!i1307[58]
  i1306.onStart = request.d('UnityEngine.Events.UnityEvent', i1307[59], i1306.onStart)
  i1306.onPlay = request.d('UnityEngine.Events.UnityEvent', i1307[60], i1306.onPlay)
  i1306.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1307[61], i1306.onUpdate)
  i1306.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1307[62], i1306.onStepComplete)
  i1306.onComplete = request.d('UnityEngine.Events.UnityEvent', i1307[63], i1306.onComplete)
  i1306.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1307[64], i1306.onTweenCreated)
  i1306.onRewind = request.d('UnityEngine.Events.UnityEvent', i1307[65], i1306.onRewind)
  return i1306
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1308 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1309 = data
  i1308.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1309[0], i1308.m_PersistentCalls)
  return i1308
}

Deserializers["TweenController"] = function (request, data, root) {
  var i1310 = root || request.c( 'TweenController' )
  var i1311 = data
  i1310.startScale = i1311[0]
  i1310.endScale = i1311[1]
  i1310.time = i1311[2]
  return i1310
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1312 = root || request.c( 'LunaController' )
  var i1313 = data
  i1312.TimePlay = i1313[0]
  i1312.CountPlay = i1313[1]
  i1312.MaxHeart = i1313[2]
  i1312.BGColor = new pc.Color(i1313[3], i1313[4], i1313[5], i1313[6])
  i1312.GameBGColor = new pc.Color(i1313[7], i1313[8], i1313[9], i1313[10])
  i1312.LevelTextColor = new pc.Color(i1313[11], i1313[12], i1313[13], i1313[14])
  i1312.TitleTextColor = new pc.Color(i1313[15], i1313[16], i1313[17], i1313[18])
  request.r(i1313[19], i1313[20], 0, i1312, 'time')
  request.r(i1313[21], i1313[22], 0, i1312, 'BGImage')
  request.r(i1313[23], i1313[24], 0, i1312, 'GameBGImage')
  request.r(i1313[25], i1313[26], 0, i1312, 'levelText')
  request.r(i1313[27], i1313[28], 0, i1312, 'titleText')
  request.r(i1313[29], i1313[30], 0, i1312, 'endCard')
  var i1315 = i1313[31]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1315.length; i += 2) {
  request.r(i1315[i + 0], i1315[i + 1], 1, i1314, '')
  }
  i1312.CTA = i1314
  i1312.count = i1313[32]
  return i1312
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1318 = root || request.c( 'LayoutController' )
  var i1319 = data
  request.r(i1319[0], i1319[1], 0, i1318, 'CTA')
  i1318.hide = !!i1319[2]
  return i1318
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1320 = root || request.c( 'AudioController' )
  var i1321 = data
  request.r(i1321[0], i1321[1], 0, i1320, 'BGM')
  request.r(i1321[2], i1321[3], 0, i1320, 'musicSource')
  request.r(i1321[4], i1321[5], 0, i1320, 'SFXPool')
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1323 = data
  request.r(i1323[0], i1323[1], 0, i1322, 'clip')
  request.r(i1323[2], i1323[3], 0, i1322, 'outputAudioMixerGroup')
  i1322.playOnAwake = !!i1323[4]
  i1322.loop = !!i1323[5]
  i1322.time = i1323[6]
  i1322.volume = i1323[7]
  i1322.pitch = i1323[8]
  i1322.enabled = !!i1323[9]
  return i1322
}

Deserializers["DragController"] = function (request, data, root) {
  var i1324 = root || request.c( 'DragController' )
  var i1325 = data
  request.r(i1325[0], i1325[1], 0, i1324, 'currentTarget')
  request.r(i1325[2], i1325[3], 0, i1324, 'canvas')
  request.r(i1325[4], i1325[5], 0, i1324, 'tut')
  request.r(i1325[6], i1325[7], 0, i1324, 'tut2')
  request.r(i1325[8], i1325[9], 0, i1324, 'tut3')
  var i1327 = i1325[10]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('ItemMap')))
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.add(request.d('ItemMap', i1327[i + 0]));
  }
  i1324.items = i1326
  return i1324
}

Deserializers["ItemMap"] = function (request, data, root) {
  var i1330 = root || request.c( 'ItemMap' )
  var i1331 = data
  request.r(i1331[0], i1331[1], 0, i1330, 'Item')
  request.r(i1331[2], i1331[3], 0, i1330, 'Target')
  request.r(i1331[4], i1331[5], 0, i1330, 'ItemVisual')
  request.r(i1331[6], i1331[7], 0, i1330, 'DestroyItem1')
  request.r(i1331[8], i1331[9], 0, i1330, 'DestroyItem2')
  request.r(i1331[10], i1331[11], 0, i1330, 'ActiveItem')
  return i1330
}

Deserializers["GameController"] = function (request, data, root) {
  var i1332 = root || request.c( 'GameController' )
  var i1333 = data
  i1332.CompleteStep = request.d('System.Action', i1333[0], i1332.CompleteStep)
  i1332.OnGameOver = request.d('System.Action', i1333[1], i1332.OnGameOver)
  request.r(i1333[2], i1333[3], 0, i1332, 'character')
  i1332.maxHeart = i1333[4]
  request.r(i1333[5], i1333[6], 0, i1332, 'heart')
  request.r(i1333[7], i1333[8], 0, i1332, 'completeSound')
  request.r(i1333[9], i1333[10], 0, i1332, 'failSound')
  request.r(i1333[11], i1333[12], 0, i1332, 'failScene')
  var i1335 = i1333[13]
  var i1334 = new (System.Collections.Generic.List$1(Bridge.ns('Phase')))
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.add(request.d('Phase', i1335[i + 0]));
  }
  i1332.phase = i1334
  request.r(i1333[14], i1333[15], 0, i1332, 'lockScene')
  i1332.end = !!i1333[16]
  i1332.complete = !!i1333[17]
  i1332.currentStep = i1333[18]
  i1332.maxStep = i1333[19]
  request.r(i1333[20], i1333[21], 0, i1332, 'currentStepText')
  request.r(i1333[22], i1333[23], 0, i1332, 'maxStepText')
  request.r(i1333[24], i1333[25], 0, i1332, 'slider')
  return i1332
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1336 = root || request.c( 'System.Action' )
  var i1337 = data
  return i1336
}

Deserializers["Phase"] = function (request, data, root) {
  var i1340 = root || request.c( 'Phase' )
  var i1341 = data
  request.r(i1341[0], i1341[1], 0, i1340, 'Voice')
  i1340.VoiceDelay = i1341[2]
  request.r(i1341[3], i1341[4], 0, i1340, 'PhasePuzzle')
  i1340.EndDelay = i1341[5]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1343 = data
  i1342.ambientIntensity = i1343[0]
  i1342.reflectionIntensity = i1343[1]
  i1342.ambientMode = i1343[2]
  i1342.ambientLight = new pc.Color(i1343[3], i1343[4], i1343[5], i1343[6])
  i1342.ambientSkyColor = new pc.Color(i1343[7], i1343[8], i1343[9], i1343[10])
  i1342.ambientGroundColor = new pc.Color(i1343[11], i1343[12], i1343[13], i1343[14])
  i1342.ambientEquatorColor = new pc.Color(i1343[15], i1343[16], i1343[17], i1343[18])
  i1342.fogColor = new pc.Color(i1343[19], i1343[20], i1343[21], i1343[22])
  i1342.fogEndDistance = i1343[23]
  i1342.fogStartDistance = i1343[24]
  i1342.fogDensity = i1343[25]
  i1342.fog = !!i1343[26]
  request.r(i1343[27], i1343[28], 0, i1342, 'skybox')
  i1342.fogMode = i1343[29]
  var i1345 = i1343[30]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1345[i + 0]) );
  }
  i1342.lightmaps = i1344
  i1342.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1343[31], i1342.lightProbes)
  i1342.lightmapsMode = i1343[32]
  i1342.mixedBakeMode = i1343[33]
  i1342.environmentLightingMode = i1343[34]
  i1342.ambientProbe = new pc.SphericalHarmonicsL2(i1343[35])
  request.r(i1343[36], i1343[37], 0, i1342, 'customReflection')
  request.r(i1343[38], i1343[39], 0, i1342, 'defaultReflection')
  i1342.defaultReflectionMode = i1343[40]
  i1342.defaultReflectionResolution = i1343[41]
  i1342.sunLightObjectId = i1343[42]
  i1342.pixelLightCount = i1343[43]
  i1342.defaultReflectionHDR = !!i1343[44]
  i1342.hasLightDataAsset = !!i1343[45]
  i1342.hasManualGenerate = !!i1343[46]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1349 = data
  request.r(i1349[0], i1349[1], 0, i1348, 'lightmapColor')
  request.r(i1349[2], i1349[3], 0, i1348, 'lightmapDirection')
  request.r(i1349[4], i1349[5], 0, i1348, 'shadowMask')
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1350 = root || new UnityEngine.LightProbes()
  var i1351 = data
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1359 = data
  var i1361 = i1359[0]
  var i1360 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1361[i + 0]));
  }
  i1358.ShaderCompilationErrors = i1360
  i1358.name = i1359[1]
  i1358.guid = i1359[2]
  var i1363 = i1359[3]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( i1363[i + 0] );
  }
  i1358.shaderDefinedKeywords = i1362
  var i1365 = i1359[4]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1365[i + 0]) );
  }
  i1358.passes = i1364
  var i1367 = i1359[5]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1367[i + 0]) );
  }
  i1358.usePasses = i1366
  var i1369 = i1359[6]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1369[i + 0]) );
  }
  i1358.defaultParameterValues = i1368
  request.r(i1359[7], i1359[8], 0, i1358, 'unityFallbackShader')
  i1358.readDepth = !!i1359[9]
  i1358.hasDepthOnlyPass = !!i1359[10]
  i1358.isCreatedByShaderGraph = !!i1359[11]
  i1358.disableBatching = !!i1359[12]
  i1358.compiled = !!i1359[13]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1373 = data
  i1372.shaderName = i1373[0]
  i1372.errorMessage = i1373[1]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1376 = root || new pc.UnityShaderPass()
  var i1377 = data
  i1376.id = i1377[0]
  i1376.subShaderIndex = i1377[1]
  i1376.name = i1377[2]
  i1376.passType = i1377[3]
  i1376.grabPassTextureName = i1377[4]
  i1376.usePass = !!i1377[5]
  i1376.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[6], i1376.zTest)
  i1376.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[7], i1376.zWrite)
  i1376.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[8], i1376.culling)
  i1376.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1377[9], i1376.blending)
  i1376.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1377[10], i1376.alphaBlending)
  i1376.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[11], i1376.colorWriteMask)
  i1376.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[12], i1376.offsetUnits)
  i1376.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[13], i1376.offsetFactor)
  i1376.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[14], i1376.stencilRef)
  i1376.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[15], i1376.stencilReadMask)
  i1376.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[16], i1376.stencilWriteMask)
  i1376.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1377[17], i1376.stencilOp)
  i1376.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1377[18], i1376.stencilOpFront)
  i1376.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1377[19], i1376.stencilOpBack)
  var i1379 = i1377[20]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1379[i + 0]) );
  }
  i1376.tags = i1378
  var i1381 = i1377[21]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( i1381[i + 0] );
  }
  i1376.passDefinedKeywords = i1380
  var i1383 = i1377[22]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1383[i + 0]) );
  }
  i1376.passDefinedKeywordGroups = i1382
  var i1385 = i1377[23]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1385[i + 0]) );
  }
  i1376.variants = i1384
  var i1387 = i1377[24]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1387[i + 0]) );
  }
  i1376.excludedVariants = i1386
  i1376.hasDepthReader = !!i1377[25]
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1389 = data
  i1388.val = i1389[0]
  i1388.name = i1389[1]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1391 = data
  i1390.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1391[0], i1390.src)
  i1390.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1391[1], i1390.dst)
  i1390.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1391[2], i1390.op)
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1393 = data
  i1392.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1393[0], i1392.pass)
  i1392.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1393[1], i1392.fail)
  i1392.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1393[2], i1392.zFail)
  i1392.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1393[3], i1392.comp)
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1397 = data
  i1396.name = i1397[0]
  i1396.value = i1397[1]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1401 = data
  var i1403 = i1401[0]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( i1403[i + 0] );
  }
  i1400.keywords = i1402
  i1400.hasDiscard = !!i1401[1]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1407 = data
  i1406.passId = i1407[0]
  i1406.subShaderIndex = i1407[1]
  var i1409 = i1407[2]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( i1409[i + 0] );
  }
  i1406.keywords = i1408
  i1406.vertexProgram = i1407[3]
  i1406.fragmentProgram = i1407[4]
  i1406.exportedForWebGl2 = !!i1407[5]
  i1406.readDepth = !!i1407[6]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1413 = data
  request.r(i1413[0], i1413[1], 0, i1412, 'shader')
  i1412.pass = i1413[2]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1417 = data
  i1416.name = i1417[0]
  i1416.type = i1417[1]
  i1416.value = new pc.Vec4( i1417[2], i1417[3], i1417[4], i1417[5] )
  i1416.textureValue = i1417[6]
  i1416.shaderPropertyFlag = i1417[7]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1419 = data
  i1418.name = i1419[0]
  request.r(i1419[1], i1419[2], 0, i1418, 'texture')
  i1418.aabb = i1419[3]
  i1418.vertices = i1419[4]
  i1418.triangles = i1419[5]
  i1418.textureRect = UnityEngine.Rect.MinMaxRect(i1419[6], i1419[7], i1419[8], i1419[9])
  i1418.packedRect = UnityEngine.Rect.MinMaxRect(i1419[10], i1419[11], i1419[12], i1419[13])
  i1418.border = new pc.Vec4( i1419[14], i1419[15], i1419[16], i1419[17] )
  i1418.transparency = i1419[18]
  i1418.bounds = i1419[19]
  i1418.pixelsPerUnit = i1419[20]
  i1418.textureWidth = i1419[21]
  i1418.textureHeight = i1419[22]
  i1418.nativeSize = new pc.Vec2( i1419[23], i1419[24] )
  i1418.pivot = new pc.Vec2( i1419[25], i1419[26] )
  i1418.textureRectOffset = new pc.Vec2( i1419[27], i1419[28] )
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1421 = data
  i1420.name = i1421[0]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1423 = data
  i1422.name = i1423[0]
  i1422.ascent = i1423[1]
  i1422.originalLineHeight = i1423[2]
  i1422.fontSize = i1423[3]
  var i1425 = i1423[4]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1425[i + 0]) );
  }
  i1422.characterInfo = i1424
  request.r(i1423[5], i1423[6], 0, i1422, 'texture')
  i1422.originalFontSize = i1423[7]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1429 = data
  i1428.index = i1429[0]
  i1428.advance = i1429[1]
  i1428.bearing = i1429[2]
  i1428.glyphWidth = i1429[3]
  i1428.glyphHeight = i1429[4]
  i1428.minX = i1429[5]
  i1428.maxX = i1429[6]
  i1428.minY = i1429[7]
  i1428.maxY = i1429[8]
  i1428.uvBottomLeftX = i1429[9]
  i1428.uvBottomLeftY = i1429[10]
  i1428.uvBottomRightX = i1429[11]
  i1428.uvBottomRightY = i1429[12]
  i1428.uvTopLeftX = i1429[13]
  i1428.uvTopLeftY = i1429[14]
  i1428.uvTopRightX = i1429[15]
  i1428.uvTopRightY = i1429[16]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1431 = data
  i1430.name = i1431[0]
  i1430.bytes64 = i1431[1]
  i1430.data = i1431[2]
  return i1430
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1432 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1433 = data
  var i1435 = i1433[0]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 2) {
  request.r(i1435[i + 0], i1435[i + 1], 2, i1434, '')
  }
  i1432.atlasAssets = i1434
  i1432.scale = i1433[1]
  request.r(i1433[2], i1433[3], 0, i1432, 'skeletonJSON')
  i1432.isUpgradingBlendModeMaterials = !!i1433[4]
  i1432.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1433[5], i1432.blendModeMaterials)
  var i1437 = i1433[6]
  var i1436 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1437.length; i += 2) {
  request.r(i1437[i + 0], i1437[i + 1], 1, i1436, '')
  }
  i1432.skeletonDataModifiers = i1436
  var i1439 = i1433[7]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( i1439[i + 0] );
  }
  i1432.fromAnimation = i1438
  var i1441 = i1433[8]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( i1441[i + 0] );
  }
  i1432.toAnimation = i1440
  i1432.duration = i1433[9]
  i1432.defaultMix = i1433[10]
  request.r(i1433[11], i1433[12], 0, i1432, 'controller')
  return i1432
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1444 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1445 = data
  i1444.applyAdditiveMaterial = !!i1445[0]
  var i1447 = i1445[1]
  var i1446 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1447[i + 0]));
  }
  i1444.additiveMaterials = i1446
  var i1449 = i1445[2]
  var i1448 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1449[i + 0]));
  }
  i1444.multiplyMaterials = i1448
  var i1451 = i1445[3]
  var i1450 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1451[i + 0]));
  }
  i1444.screenMaterials = i1450
  i1444.requiresBlendModeMaterials = !!i1445[4]
  return i1444
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1454 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1455 = data
  i1454.pageName = i1455[0]
  request.r(i1455[1], i1455[2], 0, i1454, 'material')
  return i1454
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1458 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1459 = data
  request.r(i1459[0], i1459[1], 0, i1458, 'atlasFile')
  var i1461 = i1459[2]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 2) {
  request.r(i1461[i + 0], i1461[i + 1], 2, i1460, '')
  }
  i1458.materials = i1460
  i1458.textureLoadingMode = i1459[3]
  request.r(i1459[4], i1459[5], 0, i1458, 'onDemandTextureLoader')
  return i1458
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1464 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1465 = data
  i1464.useSafeMode = !!i1465[0]
  i1464.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1465[1], i1464.safeModeOptions)
  i1464.timeScale = i1465[2]
  i1464.unscaledTimeScale = i1465[3]
  i1464.useSmoothDeltaTime = !!i1465[4]
  i1464.maxSmoothUnscaledTime = i1465[5]
  i1464.rewindCallbackMode = i1465[6]
  i1464.showUnityEditorReport = !!i1465[7]
  i1464.logBehaviour = i1465[8]
  i1464.drawGizmos = !!i1465[9]
  i1464.defaultRecyclable = !!i1465[10]
  i1464.defaultAutoPlay = i1465[11]
  i1464.defaultUpdateType = i1465[12]
  i1464.defaultTimeScaleIndependent = !!i1465[13]
  i1464.defaultEaseType = i1465[14]
  i1464.defaultEaseOvershootOrAmplitude = i1465[15]
  i1464.defaultEasePeriod = i1465[16]
  i1464.defaultAutoKill = !!i1465[17]
  i1464.defaultLoopType = i1465[18]
  i1464.debugMode = !!i1465[19]
  i1464.debugStoreTargetId = !!i1465[20]
  i1464.showPreviewPanel = !!i1465[21]
  i1464.storeSettingsLocation = i1465[22]
  i1464.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1465[23], i1464.modules)
  i1464.createASMDEF = !!i1465[24]
  i1464.showPlayingTweens = !!i1465[25]
  i1464.showPausedTweens = !!i1465[26]
  return i1464
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1466 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1467 = data
  i1466.logBehaviour = i1467[0]
  i1466.nestedTweenFailureBehaviour = i1467[1]
  return i1466
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1468 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1469 = data
  i1468.showPanel = !!i1469[0]
  i1468.audioEnabled = !!i1469[1]
  i1468.physicsEnabled = !!i1469[2]
  i1468.physics2DEnabled = !!i1469[3]
  i1468.spriteEnabled = !!i1469[4]
  i1468.uiEnabled = !!i1469[5]
  i1468.textMeshProEnabled = !!i1469[6]
  i1468.tk2DEnabled = !!i1469[7]
  i1468.deAudioEnabled = !!i1469[8]
  i1468.deUnityExtendedEnabled = !!i1469[9]
  i1468.epoOutlineEnabled = !!i1469[10]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1471 = data
  var i1473 = i1471[0]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1473[i + 0]) );
  }
  i1470.files = i1472
  i1470.componentToPrefabIds = i1471[1]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1477 = data
  i1476.path = i1477[0]
  request.r(i1477[1], i1477[2], 0, i1476, 'unityObject')
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1479 = data
  var i1481 = i1479[0]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1481[i + 0]) );
  }
  i1478.scriptsExecutionOrder = i1480
  var i1483 = i1479[1]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 1) {
    i1482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1483[i + 0]) );
  }
  i1478.sortingLayers = i1482
  var i1485 = i1479[2]
  var i1484 = []
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1485[i + 0]) );
  }
  i1478.cullingLayers = i1484
  i1478.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1479[3], i1478.timeSettings)
  i1478.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1479[4], i1478.physicsSettings)
  i1478.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1479[5], i1478.physics2DSettings)
  i1478.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1479[6], i1478.qualitySettings)
  i1478.enableRealtimeShadows = !!i1479[7]
  i1478.enableAutoInstancing = !!i1479[8]
  i1478.enableStaticBatching = !!i1479[9]
  i1478.enableDynamicBatching = !!i1479[10]
  i1478.usePreservativeDynamicBatching = !!i1479[11]
  i1478.lightmapEncodingQuality = i1479[12]
  i1478.desiredColorSpace = i1479[13]
  var i1487 = i1479[14]
  var i1486 = []
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.push( i1487[i + 0] );
  }
  i1478.allTags = i1486
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1491 = data
  i1490.name = i1491[0]
  i1490.value = i1491[1]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1495 = data
  i1494.id = i1495[0]
  i1494.name = i1495[1]
  i1494.value = i1495[2]
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1499 = data
  i1498.id = i1499[0]
  i1498.name = i1499[1]
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1501 = data
  i1500.fixedDeltaTime = i1501[0]
  i1500.maximumDeltaTime = i1501[1]
  i1500.timeScale = i1501[2]
  i1500.maximumParticleTimestep = i1501[3]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1503 = data
  i1502.gravity = new pc.Vec3( i1503[0], i1503[1], i1503[2] )
  i1502.defaultSolverIterations = i1503[3]
  i1502.bounceThreshold = i1503[4]
  i1502.autoSyncTransforms = !!i1503[5]
  i1502.autoSimulation = !!i1503[6]
  var i1505 = i1503[7]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1505[i + 0]) );
  }
  i1502.collisionMatrix = i1504
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1509 = data
  i1508.enabled = !!i1509[0]
  i1508.layerId = i1509[1]
  i1508.otherLayerId = i1509[2]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1511 = data
  request.r(i1511[0], i1511[1], 0, i1510, 'material')
  i1510.gravity = new pc.Vec2( i1511[2], i1511[3] )
  i1510.positionIterations = i1511[4]
  i1510.velocityIterations = i1511[5]
  i1510.velocityThreshold = i1511[6]
  i1510.maxLinearCorrection = i1511[7]
  i1510.maxAngularCorrection = i1511[8]
  i1510.maxTranslationSpeed = i1511[9]
  i1510.maxRotationSpeed = i1511[10]
  i1510.baumgarteScale = i1511[11]
  i1510.baumgarteTOIScale = i1511[12]
  i1510.timeToSleep = i1511[13]
  i1510.linearSleepTolerance = i1511[14]
  i1510.angularSleepTolerance = i1511[15]
  i1510.defaultContactOffset = i1511[16]
  i1510.autoSimulation = !!i1511[17]
  i1510.queriesHitTriggers = !!i1511[18]
  i1510.queriesStartInColliders = !!i1511[19]
  i1510.callbacksOnDisable = !!i1511[20]
  i1510.reuseCollisionCallbacks = !!i1511[21]
  i1510.autoSyncTransforms = !!i1511[22]
  var i1513 = i1511[23]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1513[i + 0]) );
  }
  i1510.collisionMatrix = i1512
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1517 = data
  i1516.enabled = !!i1517[0]
  i1516.layerId = i1517[1]
  i1516.otherLayerId = i1517[2]
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1519 = data
  var i1521 = i1519[0]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1521[i + 0]) );
  }
  i1518.qualityLevels = i1520
  var i1523 = i1519[1]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( i1523[i + 0] );
  }
  i1518.names = i1522
  i1518.shadows = i1519[2]
  i1518.anisotropicFiltering = i1519[3]
  i1518.antiAliasing = i1519[4]
  i1518.lodBias = i1519[5]
  i1518.shadowCascades = i1519[6]
  i1518.shadowDistance = i1519[7]
  i1518.shadowmaskMode = i1519[8]
  i1518.shadowProjection = i1519[9]
  i1518.shadowResolution = i1519[10]
  i1518.softParticles = !!i1519[11]
  i1518.softVegetation = !!i1519[12]
  i1518.activeColorSpace = i1519[13]
  i1518.desiredColorSpace = i1519[14]
  i1518.masterTextureLimit = i1519[15]
  i1518.maxQueuedFrames = i1519[16]
  i1518.particleRaycastBudget = i1519[17]
  i1518.pixelLightCount = i1519[18]
  i1518.realtimeReflectionProbes = !!i1519[19]
  i1518.shadowCascade2Split = i1519[20]
  i1518.shadowCascade4Split = new pc.Vec3( i1519[21], i1519[22], i1519[23] )
  i1518.streamingMipmapsActive = !!i1519[24]
  i1518.vSyncCount = i1519[25]
  i1518.asyncUploadBufferSize = i1519[26]
  i1518.asyncUploadTimeSlice = i1519[27]
  i1518.billboardsFaceCameraPosition = !!i1519[28]
  i1518.shadowNearPlaneOffset = i1519[29]
  i1518.streamingMipmapsMemoryBudget = i1519[30]
  i1518.maximumLODLevel = i1519[31]
  i1518.streamingMipmapsAddAllCameras = !!i1519[32]
  i1518.streamingMipmapsMaxLevelReduction = i1519[33]
  i1518.streamingMipmapsRenderersPerFrame = i1519[34]
  i1518.resolutionScalingFixedDPIFactor = i1519[35]
  i1518.streamingMipmapsMaxFileIORequests = i1519[36]
  i1518.currentQualityLevel = i1519[37]
  return i1518
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1526 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1527 = data
  request.r(i1527[0], i1527[1], 0, i1526, 'm_ObjectArgument')
  i1526.m_ObjectArgumentAssemblyTypeName = i1527[2]
  i1526.m_IntArgument = i1527[3]
  i1526.m_FloatArgument = i1527[4]
  i1526.m_StringArgument = i1527[5]
  i1526.m_BoolArgument = !!i1527[6]
  return i1526
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[7],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[7],"74":[75],"76":[77],"78":[77],"11":[2],"19":[15],"79":[80],"81":[2],"82":[3,2],"83":[75],"15":[3,2],"84":[85,75],"86":[75,87],"88":[75],"89":[53],"90":[60],"91":[80],"92":[93],"94":[95],"96":[7],"97":[98],"99":[2],"100":[3,2],"101":[75],"102":[3,2],"103":[2],"104":[2],"105":[75,2],"106":[2,3],"107":[108],"109":[108],"110":[108],"111":[2],"112":[2],"13":[11],"5":[3,2],"113":[2],"12":[11],"114":[2],"115":[2],"25":[2],"116":[2],"117":[2],"118":[2],"119":[2],"14":[2],"120":[2],"121":[3,2],"122":[2],"123":[2],"124":[2],"26":[2],"22":[3,2],"125":[2],"126":[9],"127":[9],"10":[9],"128":[9],"129":[7],"130":[7]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","UnityEngine.GameObject","UnityEngine.AudioClip","UnityEngine.UI.Text","UnityEngine.Font","HeartController","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Slider","UnityEngine.UI.Button","PhaseController","TutController","DG.Tweening.DOTweenAnimation","TweenController","LunaController","LayoutController","AudioController","UnityEngine.AudioSource","UnityEngine.Transform","DragController","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "07/06/2026 10:52:52";

Deserializers.lunaDaysRunning = "1.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BEQ_V28_NgocNDL_TamNTM";

Deserializers.lunaAppID = "29138";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1886";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4267";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BMTP_Luna";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "abd61b06-2a31-47c6-86cc-f670a8ea51fb";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

