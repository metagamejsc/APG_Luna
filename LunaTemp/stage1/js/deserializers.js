var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1224 = root || request.c( 'UnityEngine.JointSpring' )
  var i1225 = data
  i1224.spring = i1225[0]
  i1224.damper = i1225[1]
  i1224.targetPosition = i1225[2]
  return i1224
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1226 = root || request.c( 'UnityEngine.JointMotor' )
  var i1227 = data
  i1226.m_TargetVelocity = i1227[0]
  i1226.m_Force = i1227[1]
  i1226.m_FreeSpin = i1227[2]
  return i1226
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1228 = root || request.c( 'UnityEngine.JointLimits' )
  var i1229 = data
  i1228.m_Min = i1229[0]
  i1228.m_Max = i1229[1]
  i1228.m_Bounciness = i1229[2]
  i1228.m_BounceMinVelocity = i1229[3]
  i1228.m_ContactDistance = i1229[4]
  i1228.minBounce = i1229[5]
  i1228.maxBounce = i1229[6]
  return i1228
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1230 = root || request.c( 'UnityEngine.JointDrive' )
  var i1231 = data
  i1230.m_PositionSpring = i1231[0]
  i1230.m_PositionDamper = i1231[1]
  i1230.m_MaximumForce = i1231[2]
  i1230.m_UseAcceleration = i1231[3]
  return i1230
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1232 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1233 = data
  i1232.m_Spring = i1233[0]
  i1232.m_Damper = i1233[1]
  return i1232
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1234 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1235 = data
  i1234.m_Limit = i1235[0]
  i1234.m_Bounciness = i1235[1]
  i1234.m_ContactDistance = i1235[2]
  return i1234
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1237 = data
  i1236.m_ExtremumSlip = i1237[0]
  i1236.m_ExtremumValue = i1237[1]
  i1236.m_AsymptoteSlip = i1237[2]
  i1236.m_AsymptoteValue = i1237[3]
  i1236.m_Stiffness = i1237[4]
  return i1236
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1238 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1239 = data
  i1238.m_LowerAngle = i1239[0]
  i1238.m_UpperAngle = i1239[1]
  return i1238
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1240 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1241 = data
  i1240.m_MotorSpeed = i1241[0]
  i1240.m_MaximumMotorTorque = i1241[1]
  return i1240
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1243 = data
  i1242.m_DampingRatio = i1243[0]
  i1242.m_Frequency = i1243[1]
  i1242.m_Angle = i1243[2]
  return i1242
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1245 = data
  i1244.m_LowerTranslation = i1245[0]
  i1244.m_UpperTranslation = i1245[1]
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1247 = data
  i1246.name = i1247[0]
  i1246.width = i1247[1]
  i1246.height = i1247[2]
  i1246.mipmapCount = i1247[3]
  i1246.anisoLevel = i1247[4]
  i1246.filterMode = i1247[5]
  i1246.hdr = !!i1247[6]
  i1246.format = i1247[7]
  i1246.wrapMode = i1247[8]
  i1246.alphaIsTransparency = !!i1247[9]
  i1246.alphaSource = i1247[10]
  i1246.graphicsFormat = i1247[11]
  i1246.sRGBTexture = !!i1247[12]
  i1246.desiredColorSpace = i1247[13]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1248 = root || new pc.UnityMaterial()
  var i1249 = data
  i1248.name = i1249[0]
  request.r(i1249[1], i1249[2], 0, i1248, 'shader')
  i1248.renderQueue = i1249[3]
  i1248.enableInstancing = !!i1249[4]
  var i1251 = i1249[5]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1251[i + 0]) );
  }
  i1248.floatParameters = i1250
  var i1253 = i1249[6]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1253[i + 0]) );
  }
  i1248.colorParameters = i1252
  var i1255 = i1249[7]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1255[i + 0]) );
  }
  i1248.vectorParameters = i1254
  var i1257 = i1249[8]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1257[i + 0]) );
  }
  i1248.textureParameters = i1256
  var i1259 = i1249[9]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1259[i + 0]) );
  }
  i1248.materialFlags = i1258
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1263 = data
  i1262.name = i1263[0]
  i1262.value = i1263[1]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1267 = data
  i1266.name = i1267[0]
  i1266.value = new pc.Color(i1267[1], i1267[2], i1267[3], i1267[4])
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1271 = data
  i1270.name = i1271[0]
  i1270.value = new pc.Vec4( i1271[1], i1271[2], i1271[3], i1271[4] )
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1275 = data
  i1274.name = i1275[0]
  request.r(i1275[1], i1275[2], 0, i1274, 'value')
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1279 = data
  i1278.name = i1279[0]
  i1278.enabled = !!i1279[1]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1281 = data
  i1280.name = i1281[0]
  i1280.index = i1281[1]
  i1280.startup = !!i1281[2]
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1283 = data
  i1282.position = new pc.Vec3( i1283[0], i1283[1], i1283[2] )
  i1282.scale = new pc.Vec3( i1283[3], i1283[4], i1283[5] )
  i1282.rotation = new pc.Quat(i1283[6], i1283[7], i1283[8], i1283[9])
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1285 = data
  i1284.enabled = !!i1285[0]
  i1284.aspect = i1285[1]
  i1284.orthographic = !!i1285[2]
  i1284.orthographicSize = i1285[3]
  i1284.backgroundColor = new pc.Color(i1285[4], i1285[5], i1285[6], i1285[7])
  i1284.nearClipPlane = i1285[8]
  i1284.farClipPlane = i1285[9]
  i1284.fieldOfView = i1285[10]
  i1284.depth = i1285[11]
  i1284.clearFlags = i1285[12]
  i1284.cullingMask = i1285[13]
  i1284.rect = i1285[14]
  request.r(i1285[15], i1285[16], 0, i1284, 'targetTexture')
  i1284.usePhysicalProperties = !!i1285[17]
  i1284.focalLength = i1285[18]
  i1284.sensorSize = new pc.Vec2( i1285[19], i1285[20] )
  i1284.lensShift = new pc.Vec2( i1285[21], i1285[22] )
  i1284.gateFit = i1285[23]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1287 = data
  i1286.name = i1287[0]
  i1286.tagId = i1287[1]
  i1286.enabled = !!i1287[2]
  i1286.isStatic = !!i1287[3]
  i1286.layer = i1287[4]
  return i1286
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1289 = data
  request.r(i1289[0], i1289[1], 0, i1288, 'm_FirstSelected')
  i1288.m_sendNavigationEvents = !!i1289[2]
  i1288.m_DragThreshold = i1289[3]
  return i1288
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1291 = data
  i1290.m_HorizontalAxis = i1291[0]
  i1290.m_VerticalAxis = i1291[1]
  i1290.m_SubmitButton = i1291[2]
  i1290.m_CancelButton = i1291[3]
  i1290.m_InputActionsPerSecond = i1291[4]
  i1290.m_RepeatDelay = i1291[5]
  i1290.m_ForceModuleActive = !!i1291[6]
  i1290.m_SendPointerHoverToParent = !!i1291[7]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1293 = data
  i1292.pivot = new pc.Vec2( i1293[0], i1293[1] )
  i1292.anchorMin = new pc.Vec2( i1293[2], i1293[3] )
  i1292.anchorMax = new pc.Vec2( i1293[4], i1293[5] )
  i1292.sizeDelta = new pc.Vec2( i1293[6], i1293[7] )
  i1292.anchoredPosition3D = new pc.Vec3( i1293[8], i1293[9], i1293[10] )
  i1292.rotation = new pc.Quat(i1293[11], i1293[12], i1293[13], i1293[14])
  i1292.scale = new pc.Vec3( i1293[15], i1293[16], i1293[17] )
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1295 = data
  i1294.enabled = !!i1295[0]
  i1294.planeDistance = i1295[1]
  i1294.referencePixelsPerUnit = i1295[2]
  i1294.isFallbackOverlay = !!i1295[3]
  i1294.renderMode = i1295[4]
  i1294.renderOrder = i1295[5]
  i1294.sortingLayerName = i1295[6]
  i1294.sortingOrder = i1295[7]
  i1294.scaleFactor = i1295[8]
  request.r(i1295[9], i1295[10], 0, i1294, 'worldCamera')
  i1294.overrideSorting = !!i1295[11]
  i1294.pixelPerfect = !!i1295[12]
  i1294.targetDisplay = i1295[13]
  i1294.overridePixelPerfect = !!i1295[14]
  return i1294
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1297 = data
  i1296.m_UiScaleMode = i1297[0]
  i1296.m_ReferencePixelsPerUnit = i1297[1]
  i1296.m_ScaleFactor = i1297[2]
  i1296.m_ReferenceResolution = new pc.Vec2( i1297[3], i1297[4] )
  i1296.m_ScreenMatchMode = i1297[5]
  i1296.m_MatchWidthOrHeight = i1297[6]
  i1296.m_PhysicalUnit = i1297[7]
  i1296.m_FallbackScreenDPI = i1297[8]
  i1296.m_DefaultSpriteDPI = i1297[9]
  i1296.m_DynamicPixelsPerUnit = i1297[10]
  i1296.m_PresetInfoIsWorld = !!i1297[11]
  return i1296
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1299 = data
  i1298.m_IgnoreReversedGraphics = !!i1299[0]
  i1298.m_BlockingObjects = i1299[1]
  i1298.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1299[2] )
  return i1298
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1300 = root || request.c( 'LunaManager' )
  var i1301 = data
  var i1303 = i1301[0]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 2) {
  request.r(i1303[i + 0], i1303[i + 1], 2, i1302, '')
  }
  i1300.lstBtnInstall = i1302
  request.r(i1301[1], i1301[2], 0, i1300, 'EndCard')
  i1300.countPlay = i1301[3]
  i1300.countPlayFinal = i1301[4]
  i1300.timeDropFinal = i1301[5]
  request.r(i1301[6], i1301[7], 0, i1300, 'bgSprite')
  request.r(i1301[8], i1301[9], 0, i1300, 'imgBG')
  i1300.colorBG = new pc.Color(i1301[10], i1301[11], i1301[12], i1301[13])
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1307 = data
  i1306.cullTransparentMesh = !!i1307[0]
  return i1306
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1308 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1309 = data
  request.r(i1309[0], i1309[1], 0, i1308, 'm_Texture')
  i1308.m_UVRect = UnityEngine.Rect.MinMaxRect(i1309[2], i1309[3], i1309[4], i1309[5])
  request.r(i1309[6], i1309[7], 0, i1308, 'm_Material')
  i1308.m_Maskable = !!i1309[8]
  i1308.m_Color = new pc.Color(i1309[9], i1309[10], i1309[11], i1309[12])
  i1308.m_RaycastTarget = !!i1309[13]
  i1308.m_RaycastPadding = new pc.Vec4( i1309[14], i1309[15], i1309[16], i1309[17] )
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1311 = data
  request.r(i1311[0], i1311[1], 0, i1310, 'clip')
  request.r(i1311[2], i1311[3], 0, i1310, 'outputAudioMixerGroup')
  i1310.playOnAwake = !!i1311[4]
  i1310.loop = !!i1311[5]
  i1310.time = i1311[6]
  i1310.volume = i1311[7]
  i1310.pitch = i1311[8]
  i1310.enabled = !!i1311[9]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1313 = data
  i1312.usedByComposite = !!i1313[0]
  i1312.autoTiling = !!i1313[1]
  i1312.size = new pc.Vec2( i1313[2], i1313[3] )
  i1312.edgeRadius = i1313[4]
  i1312.enabled = !!i1313[5]
  i1312.isTrigger = !!i1313[6]
  i1312.usedByEffector = !!i1313[7]
  i1312.density = i1313[8]
  i1312.offset = new pc.Vec2( i1313[9], i1313[10] )
  request.r(i1313[11], i1313[12], 0, i1312, 'material')
  return i1312
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1314 = root || request.c( 'DropZone' )
  var i1315 = data
  var i1317 = i1315[0]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 2) {
  request.r(i1317[i + 0], i1317[i + 1], 2, i1316, '')
  }
  i1314.steps = i1316
  i1314.isActive = !!i1315[1]
  request.r(i1315[2], i1315[3], 0, i1314, 'spriteUpgrade')
  return i1314
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1320 = root || request.c( 'UnityEngine.UI.Image' )
  var i1321 = data
  request.r(i1321[0], i1321[1], 0, i1320, 'm_Sprite')
  i1320.m_Type = i1321[2]
  i1320.m_PreserveAspect = !!i1321[3]
  i1320.m_FillCenter = !!i1321[4]
  i1320.m_FillMethod = i1321[5]
  i1320.m_FillAmount = i1321[6]
  i1320.m_FillClockwise = !!i1321[7]
  i1320.m_FillOrigin = i1321[8]
  i1320.m_UseSpriteMesh = !!i1321[9]
  i1320.m_PixelsPerUnitMultiplier = i1321[10]
  request.r(i1321[11], i1321[12], 0, i1320, 'm_Material')
  i1320.m_Maskable = !!i1321[13]
  i1320.m_Color = new pc.Color(i1321[14], i1321[15], i1321[16], i1321[17])
  i1320.m_RaycastTarget = !!i1321[18]
  i1320.m_RaycastPadding = new pc.Vec4( i1321[19], i1321[20], i1321[21], i1321[22] )
  return i1320
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1322 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1323 = data
  request.r(i1323[0], i1323[1], 0, i1322, 'skeletonDataAsset')
  request.r(i1323[2], i1323[3], 0, i1322, 'additiveMaterial')
  request.r(i1323[4], i1323[5], 0, i1322, 'multiplyMaterial')
  request.r(i1323[6], i1323[7], 0, i1322, 'screenMaterial')
  i1322.initialSkinName = i1323[8]
  i1322.initialFlipX = !!i1323[9]
  i1322.initialFlipY = !!i1323[10]
  i1322.startingAnimation = i1323[11]
  i1322.startingLoop = !!i1323[12]
  i1322.timeScale = i1323[13]
  i1322.freeze = !!i1323[14]
  i1322.layoutScaleMode = i1323[15]
  i1322.updateWhenInvisible = i1323[16]
  i1322.allowMultipleCanvasRenderers = !!i1323[17]
  var i1325 = i1323[18]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1325.length; i += 2) {
  request.r(i1325[i + 0], i1325[i + 1], 1, i1324, '')
  }
  i1322.canvasRenderers = i1324
  i1322.enableSeparatorSlots = !!i1323[19]
  i1322.updateSeparatorPartLocation = !!i1323[20]
  i1322.updateSeparatorPartScale = !!i1323[21]
  i1322.disableMeshAssignmentOnOverride = !!i1323[22]
  i1322.referenceSize = new pc.Vec2( i1323[23], i1323[24] )
  i1322.referenceScale = i1323[25]
  i1322.rectTransformSize = new pc.Vec2( i1323[26], i1323[27] )
  i1322.editReferenceRect = !!i1323[28]
  var i1327 = i1323[29]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( i1327[i + 0] );
  }
  i1322.separatorSlotNames = i1326
  var i1329 = i1323[30]
  var i1328 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1329.length; i += 2) {
  request.r(i1329[i + 0], i1329[i + 1], 1, i1328, '')
  }
  i1322.separatorParts = i1328
  i1322.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1323[31], i1322.meshGenerator)
  i1322.updateTiming = i1323[32]
  i1322.unscaledTime = !!i1323[33]
  request.r(i1323[34], i1323[35], 0, i1322, 'm_Material')
  i1322.m_Maskable = !!i1323[36]
  i1322.m_Color = new pc.Color(i1323[37], i1323[38], i1323[39], i1323[40])
  i1322.m_RaycastTarget = !!i1323[41]
  i1322.m_RaycastPadding = new pc.Vec4( i1323[42], i1323[43], i1323[44], i1323[45] )
  return i1322
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1336 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1337 = data
  i1336.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1337[0], i1336.settings)
  return i1336
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1338 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1339 = data
  i1338.useClipping = !!i1339[0]
  i1338.zSpacing = i1339[1]
  i1338.pmaVertexColors = !!i1339[2]
  i1338.tintBlack = !!i1339[3]
  i1338.canvasGroupTintBlack = !!i1339[4]
  i1338.calculateTangents = !!i1339[5]
  i1338.addNormals = !!i1339[6]
  i1338.immutableTriangles = !!i1339[7]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1341 = data
  i1340.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1341[0], i1340.main)
  i1340.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1341[1], i1340.colorBySpeed)
  i1340.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1341[2], i1340.colorOverLifetime)
  i1340.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1341[3], i1340.emission)
  i1340.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1341[4], i1340.rotationBySpeed)
  i1340.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1341[5], i1340.rotationOverLifetime)
  i1340.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1341[6], i1340.shape)
  i1340.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1341[7], i1340.sizeBySpeed)
  i1340.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1341[8], i1340.sizeOverLifetime)
  i1340.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1341[9], i1340.textureSheetAnimation)
  i1340.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1341[10], i1340.velocityOverLifetime)
  i1340.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1341[11], i1340.noise)
  i1340.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1341[12], i1340.inheritVelocity)
  i1340.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1341[13], i1340.forceOverLifetime)
  i1340.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1341[14], i1340.limitVelocityOverLifetime)
  i1340.useAutoRandomSeed = !!i1341[15]
  i1340.randomSeed = i1341[16]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1342 = root || new pc.ParticleSystemMain()
  var i1343 = data
  i1342.duration = i1343[0]
  i1342.loop = !!i1343[1]
  i1342.prewarm = !!i1343[2]
  i1342.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1343[3], i1342.startDelay)
  i1342.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1343[4], i1342.startLifetime)
  i1342.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1343[5], i1342.startSpeed)
  i1342.startSize3D = !!i1343[6]
  i1342.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1343[7], i1342.startSizeX)
  i1342.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1343[8], i1342.startSizeY)
  i1342.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1343[9], i1342.startSizeZ)
  i1342.startRotation3D = !!i1343[10]
  i1342.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1343[11], i1342.startRotationX)
  i1342.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1343[12], i1342.startRotationY)
  i1342.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1343[13], i1342.startRotationZ)
  i1342.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1343[14], i1342.startColor)
  i1342.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1343[15], i1342.gravityModifier)
  i1342.simulationSpace = i1343[16]
  request.r(i1343[17], i1343[18], 0, i1342, 'customSimulationSpace')
  i1342.simulationSpeed = i1343[19]
  i1342.useUnscaledTime = !!i1343[20]
  i1342.scalingMode = i1343[21]
  i1342.playOnAwake = !!i1343[22]
  i1342.maxParticles = i1343[23]
  i1342.emitterVelocityMode = i1343[24]
  i1342.stopAction = i1343[25]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1344 = root || new pc.MinMaxCurve()
  var i1345 = data
  i1344.mode = i1345[0]
  i1344.curveMin = new pc.AnimationCurve( { keys_flow: i1345[1] } )
  i1344.curveMax = new pc.AnimationCurve( { keys_flow: i1345[2] } )
  i1344.curveMultiplier = i1345[3]
  i1344.constantMin = i1345[4]
  i1344.constantMax = i1345[5]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1346 = root || new pc.MinMaxGradient()
  var i1347 = data
  i1346.mode = i1347[0]
  i1346.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1347[1], i1346.gradientMin)
  i1346.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1347[2], i1346.gradientMax)
  i1346.colorMin = new pc.Color(i1347[3], i1347[4], i1347[5], i1347[6])
  i1346.colorMax = new pc.Color(i1347[7], i1347[8], i1347[9], i1347[10])
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1349 = data
  i1348.mode = i1349[0]
  var i1351 = i1349[1]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1351[i + 0]) );
  }
  i1348.colorKeys = i1350
  var i1353 = i1349[2]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1353[i + 0]) );
  }
  i1348.alphaKeys = i1352
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1354 = root || new pc.ParticleSystemColorBySpeed()
  var i1355 = data
  i1354.enabled = !!i1355[0]
  i1354.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1355[1], i1354.color)
  i1354.range = new pc.Vec2( i1355[2], i1355[3] )
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1359 = data
  i1358.color = new pc.Color(i1359[0], i1359[1], i1359[2], i1359[3])
  i1358.time = i1359[4]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1363 = data
  i1362.alpha = i1363[0]
  i1362.time = i1363[1]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1364 = root || new pc.ParticleSystemColorOverLifetime()
  var i1365 = data
  i1364.enabled = !!i1365[0]
  i1364.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1365[1], i1364.color)
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1366 = root || new pc.ParticleSystemEmitter()
  var i1367 = data
  i1366.enabled = !!i1367[0]
  i1366.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1367[1], i1366.rateOverTime)
  i1366.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1367[2], i1366.rateOverDistance)
  var i1369 = i1367[3]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1369[i + 0]) );
  }
  i1366.bursts = i1368
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1372 = root || new pc.ParticleSystemBurst()
  var i1373 = data
  i1372.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1373[0], i1372.count)
  i1372.cycleCount = i1373[1]
  i1372.minCount = i1373[2]
  i1372.maxCount = i1373[3]
  i1372.repeatInterval = i1373[4]
  i1372.time = i1373[5]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1374 = root || new pc.ParticleSystemRotationBySpeed()
  var i1375 = data
  i1374.enabled = !!i1375[0]
  i1374.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1375[1], i1374.x)
  i1374.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1375[2], i1374.y)
  i1374.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1375[3], i1374.z)
  i1374.separateAxes = !!i1375[4]
  i1374.range = new pc.Vec2( i1375[5], i1375[6] )
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1376 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1377 = data
  i1376.enabled = !!i1377[0]
  i1376.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1377[1], i1376.x)
  i1376.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1377[2], i1376.y)
  i1376.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1377[3], i1376.z)
  i1376.separateAxes = !!i1377[4]
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1378 = root || new pc.ParticleSystemShape()
  var i1379 = data
  i1378.enabled = !!i1379[0]
  i1378.shapeType = i1379[1]
  i1378.randomDirectionAmount = i1379[2]
  i1378.sphericalDirectionAmount = i1379[3]
  i1378.randomPositionAmount = i1379[4]
  i1378.alignToDirection = !!i1379[5]
  i1378.radius = i1379[6]
  i1378.radiusMode = i1379[7]
  i1378.radiusSpread = i1379[8]
  i1378.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1379[9], i1378.radiusSpeed)
  i1378.radiusThickness = i1379[10]
  i1378.angle = i1379[11]
  i1378.length = i1379[12]
  i1378.boxThickness = new pc.Vec3( i1379[13], i1379[14], i1379[15] )
  i1378.meshShapeType = i1379[16]
  request.r(i1379[17], i1379[18], 0, i1378, 'mesh')
  request.r(i1379[19], i1379[20], 0, i1378, 'meshRenderer')
  request.r(i1379[21], i1379[22], 0, i1378, 'skinnedMeshRenderer')
  i1378.useMeshMaterialIndex = !!i1379[23]
  i1378.meshMaterialIndex = i1379[24]
  i1378.useMeshColors = !!i1379[25]
  i1378.normalOffset = i1379[26]
  i1378.arc = i1379[27]
  i1378.arcMode = i1379[28]
  i1378.arcSpread = i1379[29]
  i1378.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1379[30], i1378.arcSpeed)
  i1378.donutRadius = i1379[31]
  i1378.position = new pc.Vec3( i1379[32], i1379[33], i1379[34] )
  i1378.rotation = new pc.Vec3( i1379[35], i1379[36], i1379[37] )
  i1378.scale = new pc.Vec3( i1379[38], i1379[39], i1379[40] )
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1380 = root || new pc.ParticleSystemSizeBySpeed()
  var i1381 = data
  i1380.enabled = !!i1381[0]
  i1380.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1381[1], i1380.x)
  i1380.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1381[2], i1380.y)
  i1380.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1381[3], i1380.z)
  i1380.separateAxes = !!i1381[4]
  i1380.range = new pc.Vec2( i1381[5], i1381[6] )
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1382 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1383 = data
  i1382.enabled = !!i1383[0]
  i1382.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1383[1], i1382.x)
  i1382.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1383[2], i1382.y)
  i1382.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1383[3], i1382.z)
  i1382.separateAxes = !!i1383[4]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1384 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1385 = data
  i1384.enabled = !!i1385[0]
  i1384.mode = i1385[1]
  i1384.animation = i1385[2]
  i1384.numTilesX = i1385[3]
  i1384.numTilesY = i1385[4]
  i1384.useRandomRow = !!i1385[5]
  i1384.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1385[6], i1384.frameOverTime)
  i1384.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1385[7], i1384.startFrame)
  i1384.cycleCount = i1385[8]
  i1384.rowIndex = i1385[9]
  i1384.flipU = i1385[10]
  i1384.flipV = i1385[11]
  i1384.spriteCount = i1385[12]
  var i1387 = i1385[13]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 2) {
  request.r(i1387[i + 0], i1387[i + 1], 2, i1386, '')
  }
  i1384.sprites = i1386
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1390 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1391 = data
  i1390.enabled = !!i1391[0]
  i1390.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1391[1], i1390.x)
  i1390.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1391[2], i1390.y)
  i1390.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1391[3], i1390.z)
  i1390.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1391[4], i1390.radial)
  i1390.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1391[5], i1390.speedModifier)
  i1390.space = i1391[6]
  i1390.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1391[7], i1390.orbitalX)
  i1390.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1391[8], i1390.orbitalY)
  i1390.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1391[9], i1390.orbitalZ)
  i1390.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1391[10], i1390.orbitalOffsetX)
  i1390.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1391[11], i1390.orbitalOffsetY)
  i1390.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1391[12], i1390.orbitalOffsetZ)
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1392 = root || new pc.ParticleSystemNoise()
  var i1393 = data
  i1392.enabled = !!i1393[0]
  i1392.separateAxes = !!i1393[1]
  i1392.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[2], i1392.strengthX)
  i1392.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[3], i1392.strengthY)
  i1392.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[4], i1392.strengthZ)
  i1392.frequency = i1393[5]
  i1392.damping = !!i1393[6]
  i1392.octaveCount = i1393[7]
  i1392.octaveMultiplier = i1393[8]
  i1392.octaveScale = i1393[9]
  i1392.quality = i1393[10]
  i1392.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[11], i1392.scrollSpeed)
  i1392.scrollSpeedMultiplier = i1393[12]
  i1392.remapEnabled = !!i1393[13]
  i1392.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[14], i1392.remapX)
  i1392.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[15], i1392.remapY)
  i1392.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[16], i1392.remapZ)
  i1392.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[17], i1392.positionAmount)
  i1392.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[18], i1392.rotationAmount)
  i1392.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[19], i1392.sizeAmount)
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1394 = root || new pc.ParticleSystemInheritVelocity()
  var i1395 = data
  i1394.enabled = !!i1395[0]
  i1394.mode = i1395[1]
  i1394.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1395[2], i1394.curve)
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1396 = root || new pc.ParticleSystemForceOverLifetime()
  var i1397 = data
  i1396.enabled = !!i1397[0]
  i1396.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1397[1], i1396.x)
  i1396.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1397[2], i1396.y)
  i1396.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1397[3], i1396.z)
  i1396.space = i1397[4]
  i1396.randomized = !!i1397[5]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1398 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1399 = data
  i1398.enabled = !!i1399[0]
  i1398.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1399[1], i1398.limit)
  i1398.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1399[2], i1398.limitX)
  i1398.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1399[3], i1398.limitY)
  i1398.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1399[4], i1398.limitZ)
  i1398.dampen = i1399[5]
  i1398.separateAxes = !!i1399[6]
  i1398.space = i1399[7]
  i1398.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1399[8], i1398.drag)
  i1398.multiplyDragByParticleSize = !!i1399[9]
  i1398.multiplyDragByParticleVelocity = !!i1399[10]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1401 = data
  i1400.enabled = !!i1401[0]
  request.r(i1401[1], i1401[2], 0, i1400, 'sharedMaterial')
  var i1403 = i1401[3]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 2) {
  request.r(i1403[i + 0], i1403[i + 1], 2, i1402, '')
  }
  i1400.sharedMaterials = i1402
  i1400.receiveShadows = !!i1401[4]
  i1400.shadowCastingMode = i1401[5]
  i1400.sortingLayerID = i1401[6]
  i1400.sortingOrder = i1401[7]
  i1400.lightmapIndex = i1401[8]
  i1400.lightmapSceneIndex = i1401[9]
  i1400.lightmapScaleOffset = new pc.Vec4( i1401[10], i1401[11], i1401[12], i1401[13] )
  i1400.lightProbeUsage = i1401[14]
  i1400.reflectionProbeUsage = i1401[15]
  request.r(i1401[16], i1401[17], 0, i1400, 'mesh')
  i1400.meshCount = i1401[18]
  i1400.activeVertexStreamsCount = i1401[19]
  i1400.alignment = i1401[20]
  i1400.renderMode = i1401[21]
  i1400.sortMode = i1401[22]
  i1400.lengthScale = i1401[23]
  i1400.velocityScale = i1401[24]
  i1400.cameraVelocityScale = i1401[25]
  i1400.normalDirection = i1401[26]
  i1400.sortingFudge = i1401[27]
  i1400.minParticleSize = i1401[28]
  i1400.maxParticleSize = i1401[29]
  i1400.pivot = new pc.Vec3( i1401[30], i1401[31], i1401[32] )
  request.r(i1401[33], i1401[34], 0, i1400, 'trailMaterial')
  return i1400
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1406 = root || request.c( 'DraggableItem' )
  var i1407 = data
  i1406.isChease = !!i1407[0]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1409 = data
  i1408.m_Alpha = i1409[0]
  i1408.m_Interactable = !!i1409[1]
  i1408.m_BlocksRaycasts = !!i1409[2]
  i1408.m_IgnoreParentGroups = !!i1409[3]
  i1408.enabled = !!i1409[4]
  return i1408
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1410 = root || request.c( 'UnityEngine.UI.Text' )
  var i1411 = data
  i1410.m_FontData = request.d('UnityEngine.UI.FontData', i1411[0], i1410.m_FontData)
  i1410.m_Text = i1411[1]
  request.r(i1411[2], i1411[3], 0, i1410, 'm_Material')
  i1410.m_Maskable = !!i1411[4]
  i1410.m_Color = new pc.Color(i1411[5], i1411[6], i1411[7], i1411[8])
  i1410.m_RaycastTarget = !!i1411[9]
  i1410.m_RaycastPadding = new pc.Vec4( i1411[10], i1411[11], i1411[12], i1411[13] )
  return i1410
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1412 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1413 = data
  request.r(i1413[0], i1413[1], 0, i1412, 'm_Font')
  i1412.m_FontSize = i1413[2]
  i1412.m_FontStyle = i1413[3]
  i1412.m_BestFit = !!i1413[4]
  i1412.m_MinSize = i1413[5]
  i1412.m_MaxSize = i1413[6]
  i1412.m_Alignment = i1413[7]
  i1412.m_AlignByGeometry = !!i1413[8]
  i1412.m_RichText = !!i1413[9]
  i1412.m_HorizontalOverflow = i1413[10]
  i1412.m_VerticalOverflow = i1413[11]
  i1412.m_LineSpacing = i1413[12]
  return i1412
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1414 = root || request.c( 'UnityEngine.UI.Button' )
  var i1415 = data
  i1414.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1415[0], i1414.m_OnClick)
  i1414.m_Navigation = request.d('UnityEngine.UI.Navigation', i1415[1], i1414.m_Navigation)
  i1414.m_Transition = i1415[2]
  i1414.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1415[3], i1414.m_Colors)
  i1414.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1415[4], i1414.m_SpriteState)
  i1414.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1415[5], i1414.m_AnimationTriggers)
  i1414.m_Interactable = !!i1415[6]
  request.r(i1415[7], i1415[8], 0, i1414, 'm_TargetGraphic')
  return i1414
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1416 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1417 = data
  i1416.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1417[0], i1416.m_PersistentCalls)
  return i1416
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1418 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1419 = data
  var i1421 = i1419[0]
  var i1420 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.add(request.d('UnityEngine.Events.PersistentCall', i1421[i + 0]));
  }
  i1418.m_Calls = i1420
  return i1418
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1424 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1425 = data
  request.r(i1425[0], i1425[1], 0, i1424, 'm_Target')
  i1424.m_TargetAssemblyTypeName = i1425[2]
  i1424.m_MethodName = i1425[3]
  i1424.m_Mode = i1425[4]
  i1424.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1425[5], i1424.m_Arguments)
  i1424.m_CallState = i1425[6]
  return i1424
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1426 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1427 = data
  request.r(i1427[0], i1427[1], 0, i1426, 'm_ObjectArgument')
  i1426.m_ObjectArgumentAssemblyTypeName = i1427[2]
  i1426.m_IntArgument = i1427[3]
  i1426.m_FloatArgument = i1427[4]
  i1426.m_StringArgument = i1427[5]
  i1426.m_BoolArgument = !!i1427[6]
  return i1426
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1428 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1429 = data
  i1428.m_Mode = i1429[0]
  i1428.m_WrapAround = !!i1429[1]
  request.r(i1429[2], i1429[3], 0, i1428, 'm_SelectOnUp')
  request.r(i1429[4], i1429[5], 0, i1428, 'm_SelectOnDown')
  request.r(i1429[6], i1429[7], 0, i1428, 'm_SelectOnLeft')
  request.r(i1429[8], i1429[9], 0, i1428, 'm_SelectOnRight')
  return i1428
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1430 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1431 = data
  i1430.m_NormalColor = new pc.Color(i1431[0], i1431[1], i1431[2], i1431[3])
  i1430.m_HighlightedColor = new pc.Color(i1431[4], i1431[5], i1431[6], i1431[7])
  i1430.m_PressedColor = new pc.Color(i1431[8], i1431[9], i1431[10], i1431[11])
  i1430.m_SelectedColor = new pc.Color(i1431[12], i1431[13], i1431[14], i1431[15])
  i1430.m_DisabledColor = new pc.Color(i1431[16], i1431[17], i1431[18], i1431[19])
  i1430.m_ColorMultiplier = i1431[20]
  i1430.m_FadeDuration = i1431[21]
  return i1430
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1432 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1433 = data
  request.r(i1433[0], i1433[1], 0, i1432, 'm_HighlightedSprite')
  request.r(i1433[2], i1433[3], 0, i1432, 'm_PressedSprite')
  request.r(i1433[4], i1433[5], 0, i1432, 'm_SelectedSprite')
  request.r(i1433[6], i1433[7], 0, i1432, 'm_DisabledSprite')
  return i1432
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1434 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1435 = data
  i1434.m_NormalTrigger = i1435[0]
  i1434.m_HighlightedTrigger = i1435[1]
  i1434.m_PressedTrigger = i1435[2]
  i1434.m_SelectedTrigger = i1435[3]
  i1434.m_DisabledTrigger = i1435[4]
  return i1434
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1436 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1437 = data
  i1436.targetIsSelf = !!i1437[0]
  request.r(i1437[1], i1437[2], 0, i1436, 'targetGO')
  i1436.tweenTargetIsTargetGO = !!i1437[3]
  i1436.delay = i1437[4]
  i1436.duration = i1437[5]
  i1436.easeType = i1437[6]
  i1436.easeCurve = new pc.AnimationCurve( { keys_flow: i1437[7] } )
  i1436.loopType = i1437[8]
  i1436.loops = i1437[9]
  i1436.id = i1437[10]
  i1436.isRelative = !!i1437[11]
  i1436.isFrom = !!i1437[12]
  i1436.isIndependentUpdate = !!i1437[13]
  i1436.autoKill = !!i1437[14]
  i1436.autoGenerate = !!i1437[15]
  i1436.isActive = !!i1437[16]
  i1436.isValid = !!i1437[17]
  request.r(i1437[18], i1437[19], 0, i1436, 'target')
  i1436.animationType = i1437[20]
  i1436.targetType = i1437[21]
  i1436.forcedTargetType = i1437[22]
  i1436.autoPlay = !!i1437[23]
  i1436.useTargetAsV3 = !!i1437[24]
  i1436.endValueFloat = i1437[25]
  i1436.endValueV3 = new pc.Vec3( i1437[26], i1437[27], i1437[28] )
  i1436.endValueV2 = new pc.Vec2( i1437[29], i1437[30] )
  i1436.endValueColor = new pc.Color(i1437[31], i1437[32], i1437[33], i1437[34])
  i1436.endValueString = i1437[35]
  i1436.endValueRect = UnityEngine.Rect.MinMaxRect(i1437[36], i1437[37], i1437[38], i1437[39])
  request.r(i1437[40], i1437[41], 0, i1436, 'endValueTransform')
  i1436.optionalBool0 = !!i1437[42]
  i1436.optionalBool1 = !!i1437[43]
  i1436.optionalFloat0 = i1437[44]
  i1436.optionalInt0 = i1437[45]
  i1436.optionalRotationMode = i1437[46]
  i1436.optionalScrambleMode = i1437[47]
  i1436.optionalShakeRandomnessMode = i1437[48]
  i1436.optionalString = i1437[49]
  i1436.updateType = i1437[50]
  i1436.isSpeedBased = !!i1437[51]
  i1436.hasOnStart = !!i1437[52]
  i1436.hasOnPlay = !!i1437[53]
  i1436.hasOnUpdate = !!i1437[54]
  i1436.hasOnStepComplete = !!i1437[55]
  i1436.hasOnComplete = !!i1437[56]
  i1436.hasOnTweenCreated = !!i1437[57]
  i1436.hasOnRewind = !!i1437[58]
  i1436.onStart = request.d('UnityEngine.Events.UnityEvent', i1437[59], i1436.onStart)
  i1436.onPlay = request.d('UnityEngine.Events.UnityEvent', i1437[60], i1436.onPlay)
  i1436.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1437[61], i1436.onUpdate)
  i1436.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1437[62], i1436.onStepComplete)
  i1436.onComplete = request.d('UnityEngine.Events.UnityEvent', i1437[63], i1436.onComplete)
  i1436.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1437[64], i1436.onTweenCreated)
  i1436.onRewind = request.d('UnityEngine.Events.UnityEvent', i1437[65], i1436.onRewind)
  return i1436
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1438 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1439 = data
  i1438.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1439[0], i1438.m_PersistentCalls)
  return i1438
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1440 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1441 = data
  i1440.m_ShowMaskGraphic = !!i1441[0]
  return i1440
}

Deserializers["IQFill"] = function (request, data, root) {
  var i1442 = root || request.c( 'IQFill' )
  var i1443 = data
  request.r(i1443[0], i1443[1], 0, i1442, 'fillImage')
  i1442.maxFillAmount = i1443[2]
  i1442.fillDuration = i1443[3]
  i1442.maxValue = i1443[4]
  i1442.addValue = i1443[5]
  i1442.fillEase = i1443[6]
  return i1442
}

Deserializers["GameController"] = function (request, data, root) {
  var i1444 = root || request.c( 'GameController' )
  var i1445 = data
  var i1447 = i1445[0]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 2) {
  request.r(i1447[i + 0], i1447[i + 1], 2, i1446, '')
  }
  i1444.colliders = i1446
  i1444.isUpgrade = !!i1445[1]
  request.r(i1445[2], i1445[3], 0, i1444, 'IQFill')
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1451 = data
  i1450.ambientIntensity = i1451[0]
  i1450.reflectionIntensity = i1451[1]
  i1450.ambientMode = i1451[2]
  i1450.ambientLight = new pc.Color(i1451[3], i1451[4], i1451[5], i1451[6])
  i1450.ambientSkyColor = new pc.Color(i1451[7], i1451[8], i1451[9], i1451[10])
  i1450.ambientGroundColor = new pc.Color(i1451[11], i1451[12], i1451[13], i1451[14])
  i1450.ambientEquatorColor = new pc.Color(i1451[15], i1451[16], i1451[17], i1451[18])
  i1450.fogColor = new pc.Color(i1451[19], i1451[20], i1451[21], i1451[22])
  i1450.fogEndDistance = i1451[23]
  i1450.fogStartDistance = i1451[24]
  i1450.fogDensity = i1451[25]
  i1450.fog = !!i1451[26]
  request.r(i1451[27], i1451[28], 0, i1450, 'skybox')
  i1450.fogMode = i1451[29]
  var i1453 = i1451[30]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1453[i + 0]) );
  }
  i1450.lightmaps = i1452
  i1450.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1451[31], i1450.lightProbes)
  i1450.lightmapsMode = i1451[32]
  i1450.mixedBakeMode = i1451[33]
  i1450.environmentLightingMode = i1451[34]
  i1450.ambientProbe = new pc.SphericalHarmonicsL2(i1451[35])
  i1450.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1451[36])
  i1450.useReferenceAmbientProbe = !!i1451[37]
  request.r(i1451[38], i1451[39], 0, i1450, 'customReflection')
  request.r(i1451[40], i1451[41], 0, i1450, 'defaultReflection')
  i1450.defaultReflectionMode = i1451[42]
  i1450.defaultReflectionResolution = i1451[43]
  i1450.sunLightObjectId = i1451[44]
  i1450.pixelLightCount = i1451[45]
  i1450.defaultReflectionHDR = !!i1451[46]
  i1450.hasLightDataAsset = !!i1451[47]
  i1450.hasManualGenerate = !!i1451[48]
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1457 = data
  request.r(i1457[0], i1457[1], 0, i1456, 'lightmapColor')
  request.r(i1457[2], i1457[3], 0, i1456, 'lightmapDirection')
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1458 = root || new UnityEngine.LightProbes()
  var i1459 = data
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1467 = data
  var i1469 = i1467[0]
  var i1468 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1469[i + 0]));
  }
  i1466.ShaderCompilationErrors = i1468
  i1466.name = i1467[1]
  i1466.guid = i1467[2]
  var i1471 = i1467[3]
  var i1470 = []
  for(var i = 0; i < i1471.length; i += 1) {
    i1470.push( i1471[i + 0] );
  }
  i1466.shaderDefinedKeywords = i1470
  var i1473 = i1467[4]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1473[i + 0]) );
  }
  i1466.passes = i1472
  var i1475 = i1467[5]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1475[i + 0]) );
  }
  i1466.usePasses = i1474
  var i1477 = i1467[6]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1477[i + 0]) );
  }
  i1466.defaultParameterValues = i1476
  request.r(i1467[7], i1467[8], 0, i1466, 'unityFallbackShader')
  i1466.readDepth = !!i1467[9]
  i1466.isCreatedByShaderGraph = !!i1467[10]
  i1466.usedBatchUniforms = i1467[11]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1481 = data
  i1480.shaderName = i1481[0]
  i1480.errorMessage = i1481[1]
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1484 = root || new pc.UnityShaderPass()
  var i1485 = data
  i1484.id = i1485[0]
  i1484.subShaderIndex = i1485[1]
  i1484.name = i1485[2]
  i1484.passType = i1485[3]
  i1484.grabPassTextureName = i1485[4]
  i1484.usePass = !!i1485[5]
  i1484.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1485[6], i1484.zTest)
  i1484.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1485[7], i1484.zWrite)
  i1484.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1485[8], i1484.culling)
  i1484.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1485[9], i1484.blending)
  i1484.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1485[10], i1484.alphaBlending)
  i1484.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1485[11], i1484.colorWriteMask)
  i1484.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1485[12], i1484.offsetUnits)
  i1484.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1485[13], i1484.offsetFactor)
  i1484.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1485[14], i1484.stencilRef)
  i1484.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1485[15], i1484.stencilReadMask)
  i1484.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1485[16], i1484.stencilWriteMask)
  i1484.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1485[17], i1484.stencilOp)
  i1484.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1485[18], i1484.stencilOpFront)
  i1484.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1485[19], i1484.stencilOpBack)
  var i1487 = i1485[20]
  var i1486 = []
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1487[i + 0]) );
  }
  i1484.tags = i1486
  var i1489 = i1485[21]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 1) {
    i1488.push( i1489[i + 0] );
  }
  i1484.passDefinedKeywords = i1488
  var i1491 = i1485[22]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1491[i + 0]) );
  }
  i1484.passDefinedKeywordGroups = i1490
  var i1493 = i1485[23]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1493[i + 0]) );
  }
  i1484.variants = i1492
  var i1495 = i1485[24]
  var i1494 = []
  for(var i = 0; i < i1495.length; i += 1) {
    i1494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1495[i + 0]) );
  }
  i1484.excludedVariants = i1494
  i1484.hasDepthReader = !!i1485[25]
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1497 = data
  i1496.val = i1497[0]
  i1496.name = i1497[1]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1499 = data
  i1498.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1499[0], i1498.src)
  i1498.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1499[1], i1498.dst)
  i1498.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1499[2], i1498.op)
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1501 = data
  i1500.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1501[0], i1500.pass)
  i1500.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1501[1], i1500.fail)
  i1500.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1501[2], i1500.zFail)
  i1500.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1501[3], i1500.comp)
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1505 = data
  i1504.name = i1505[0]
  i1504.value = i1505[1]
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1509 = data
  var i1511 = i1509[0]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 1) {
    i1510.push( i1511[i + 0] );
  }
  i1508.keywords = i1510
  i1508.hasDiscard = !!i1509[1]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1515 = data
  i1514.passId = i1515[0]
  i1514.subShaderIndex = i1515[1]
  var i1517 = i1515[2]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.push( i1517[i + 0] );
  }
  i1514.keywords = i1516
  i1514.vertexProgram = i1515[3]
  i1514.fragmentProgram = i1515[4]
  i1514.compiledForWebGL2 = !!i1515[5]
  i1514.readDepth = !!i1515[6]
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1521 = data
  request.r(i1521[0], i1521[1], 0, i1520, 'shader')
  i1520.pass = i1521[2]
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1525 = data
  i1524.name = i1525[0]
  i1524.type = i1525[1]
  i1524.value = new pc.Vec4( i1525[2], i1525[3], i1525[4], i1525[5] )
  i1524.textureValue = i1525[6]
  i1524.shaderPropertyFlag = i1525[7]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1527 = data
  i1526.name = i1527[0]
  request.r(i1527[1], i1527[2], 0, i1526, 'texture')
  i1526.aabb = i1527[3]
  i1526.vertices = i1527[4]
  i1526.triangles = i1527[5]
  i1526.textureRect = UnityEngine.Rect.MinMaxRect(i1527[6], i1527[7], i1527[8], i1527[9])
  i1526.packedRect = UnityEngine.Rect.MinMaxRect(i1527[10], i1527[11], i1527[12], i1527[13])
  i1526.border = new pc.Vec4( i1527[14], i1527[15], i1527[16], i1527[17] )
  i1526.transparency = i1527[18]
  i1526.bounds = i1527[19]
  i1526.pixelsPerUnit = i1527[20]
  i1526.textureWidth = i1527[21]
  i1526.textureHeight = i1527[22]
  i1526.nativeSize = new pc.Vec2( i1527[23], i1527[24] )
  i1526.pivot = new pc.Vec2( i1527[25], i1527[26] )
  i1526.textureRectOffset = new pc.Vec2( i1527[27], i1527[28] )
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1529 = data
  i1528.name = i1529[0]
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1531 = data
  i1530.name = i1531[0]
  i1530.ascent = i1531[1]
  i1530.originalLineHeight = i1531[2]
  i1530.fontSize = i1531[3]
  var i1533 = i1531[4]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1533[i + 0]) );
  }
  i1530.characterInfo = i1532
  request.r(i1531[5], i1531[6], 0, i1530, 'texture')
  i1530.originalFontSize = i1531[7]
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1537 = data
  i1536.index = i1537[0]
  i1536.advance = i1537[1]
  i1536.bearing = i1537[2]
  i1536.glyphWidth = i1537[3]
  i1536.glyphHeight = i1537[4]
  i1536.minX = i1537[5]
  i1536.maxX = i1537[6]
  i1536.minY = i1537[7]
  i1536.maxY = i1537[8]
  i1536.uvBottomLeftX = i1537[9]
  i1536.uvBottomLeftY = i1537[10]
  i1536.uvBottomRightX = i1537[11]
  i1536.uvBottomRightY = i1537[12]
  i1536.uvTopLeftX = i1537[13]
  i1536.uvTopLeftY = i1537[14]
  i1536.uvTopRightX = i1537[15]
  i1536.uvTopRightY = i1537[16]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1539 = data
  i1538.name = i1539[0]
  i1538.bytes64 = i1539[1]
  i1538.data = i1539[2]
  return i1538
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1540 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1541 = data
  var i1543 = i1541[0]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 2) {
  request.r(i1543[i + 0], i1543[i + 1], 2, i1542, '')
  }
  i1540.atlasAssets = i1542
  i1540.scale = i1541[1]
  request.r(i1541[2], i1541[3], 0, i1540, 'skeletonJSON')
  i1540.isUpgradingBlendModeMaterials = !!i1541[4]
  i1540.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1541[5], i1540.blendModeMaterials)
  var i1545 = i1541[6]
  var i1544 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1545.length; i += 2) {
  request.r(i1545[i + 0], i1545[i + 1], 1, i1544, '')
  }
  i1540.skeletonDataModifiers = i1544
  var i1547 = i1541[7]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.push( i1547[i + 0] );
  }
  i1540.fromAnimation = i1546
  var i1549 = i1541[8]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 1) {
    i1548.push( i1549[i + 0] );
  }
  i1540.toAnimation = i1548
  i1540.duration = i1541[9]
  i1540.defaultMix = i1541[10]
  request.r(i1541[11], i1541[12], 0, i1540, 'controller')
  return i1540
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1552 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1553 = data
  i1552.applyAdditiveMaterial = !!i1553[0]
  var i1555 = i1553[1]
  var i1554 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1555.length; i += 1) {
    i1554.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1555[i + 0]));
  }
  i1552.additiveMaterials = i1554
  var i1557 = i1553[2]
  var i1556 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1557[i + 0]));
  }
  i1552.multiplyMaterials = i1556
  var i1559 = i1553[3]
  var i1558 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1559[i + 0]));
  }
  i1552.screenMaterials = i1558
  i1552.requiresBlendModeMaterials = !!i1553[4]
  return i1552
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1562 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1563 = data
  i1562.pageName = i1563[0]
  request.r(i1563[1], i1563[2], 0, i1562, 'material')
  return i1562
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1566 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1567 = data
  request.r(i1567[0], i1567[1], 0, i1566, 'atlasFile')
  var i1569 = i1567[2]
  var i1568 = []
  for(var i = 0; i < i1569.length; i += 2) {
  request.r(i1569[i + 0], i1569[i + 1], 2, i1568, '')
  }
  i1566.materials = i1568
  i1566.textureLoadingMode = i1567[3]
  request.r(i1567[4], i1567[5], 0, i1566, 'onDemandTextureLoader')
  return i1566
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1570 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1571 = data
  i1570.useSafeMode = !!i1571[0]
  i1570.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1571[1], i1570.safeModeOptions)
  i1570.timeScale = i1571[2]
  i1570.unscaledTimeScale = i1571[3]
  i1570.useSmoothDeltaTime = !!i1571[4]
  i1570.maxSmoothUnscaledTime = i1571[5]
  i1570.rewindCallbackMode = i1571[6]
  i1570.showUnityEditorReport = !!i1571[7]
  i1570.logBehaviour = i1571[8]
  i1570.drawGizmos = !!i1571[9]
  i1570.defaultRecyclable = !!i1571[10]
  i1570.defaultAutoPlay = i1571[11]
  i1570.defaultUpdateType = i1571[12]
  i1570.defaultTimeScaleIndependent = !!i1571[13]
  i1570.defaultEaseType = i1571[14]
  i1570.defaultEaseOvershootOrAmplitude = i1571[15]
  i1570.defaultEasePeriod = i1571[16]
  i1570.defaultAutoKill = !!i1571[17]
  i1570.defaultLoopType = i1571[18]
  i1570.debugMode = !!i1571[19]
  i1570.debugStoreTargetId = !!i1571[20]
  i1570.showPreviewPanel = !!i1571[21]
  i1570.storeSettingsLocation = i1571[22]
  i1570.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1571[23], i1570.modules)
  i1570.createASMDEF = !!i1571[24]
  i1570.showPlayingTweens = !!i1571[25]
  i1570.showPausedTweens = !!i1571[26]
  return i1570
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1572 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1573 = data
  i1572.logBehaviour = i1573[0]
  i1572.nestedTweenFailureBehaviour = i1573[1]
  return i1572
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1574 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1575 = data
  i1574.showPanel = !!i1575[0]
  i1574.audioEnabled = !!i1575[1]
  i1574.physicsEnabled = !!i1575[2]
  i1574.physics2DEnabled = !!i1575[3]
  i1574.spriteEnabled = !!i1575[4]
  i1574.uiEnabled = !!i1575[5]
  i1574.textMeshProEnabled = !!i1575[6]
  i1574.tk2DEnabled = !!i1575[7]
  i1574.deAudioEnabled = !!i1575[8]
  i1574.deUnityExtendedEnabled = !!i1575[9]
  i1574.epoOutlineEnabled = !!i1575[10]
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1577 = data
  var i1579 = i1577[0]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1579[i + 0]) );
  }
  i1576.files = i1578
  i1576.componentToPrefabIds = i1577[1]
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1583 = data
  i1582.path = i1583[0]
  request.r(i1583[1], i1583[2], 0, i1582, 'unityObject')
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1585 = data
  var i1587 = i1585[0]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1587[i + 0]) );
  }
  i1584.scriptsExecutionOrder = i1586
  var i1589 = i1585[1]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1589[i + 0]) );
  }
  i1584.sortingLayers = i1588
  var i1591 = i1585[2]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 1) {
    i1590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1591[i + 0]) );
  }
  i1584.cullingLayers = i1590
  i1584.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1585[3], i1584.timeSettings)
  i1584.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1585[4], i1584.physicsSettings)
  i1584.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1585[5], i1584.physics2DSettings)
  i1584.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1585[6], i1584.qualitySettings)
  i1584.enableRealtimeShadows = !!i1585[7]
  i1584.enableAutoInstancing = !!i1585[8]
  i1584.enableDynamicBatching = !!i1585[9]
  i1584.lightmapEncodingQuality = i1585[10]
  i1584.desiredColorSpace = i1585[11]
  var i1593 = i1585[12]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.push( i1593[i + 0] );
  }
  i1584.allTags = i1592
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1597 = data
  i1596.name = i1597[0]
  i1596.value = i1597[1]
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1601 = data
  i1600.id = i1601[0]
  i1600.name = i1601[1]
  i1600.value = i1601[2]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1605 = data
  i1604.id = i1605[0]
  i1604.name = i1605[1]
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1607 = data
  i1606.fixedDeltaTime = i1607[0]
  i1606.maximumDeltaTime = i1607[1]
  i1606.timeScale = i1607[2]
  i1606.maximumParticleTimestep = i1607[3]
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1609 = data
  i1608.gravity = new pc.Vec3( i1609[0], i1609[1], i1609[2] )
  i1608.defaultSolverIterations = i1609[3]
  i1608.bounceThreshold = i1609[4]
  i1608.autoSyncTransforms = !!i1609[5]
  i1608.autoSimulation = !!i1609[6]
  var i1611 = i1609[7]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1611[i + 0]) );
  }
  i1608.collisionMatrix = i1610
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1615 = data
  i1614.enabled = !!i1615[0]
  i1614.layerId = i1615[1]
  i1614.otherLayerId = i1615[2]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1617 = data
  request.r(i1617[0], i1617[1], 0, i1616, 'material')
  i1616.gravity = new pc.Vec2( i1617[2], i1617[3] )
  i1616.positionIterations = i1617[4]
  i1616.velocityIterations = i1617[5]
  i1616.velocityThreshold = i1617[6]
  i1616.maxLinearCorrection = i1617[7]
  i1616.maxAngularCorrection = i1617[8]
  i1616.maxTranslationSpeed = i1617[9]
  i1616.maxRotationSpeed = i1617[10]
  i1616.baumgarteScale = i1617[11]
  i1616.baumgarteTOIScale = i1617[12]
  i1616.timeToSleep = i1617[13]
  i1616.linearSleepTolerance = i1617[14]
  i1616.angularSleepTolerance = i1617[15]
  i1616.defaultContactOffset = i1617[16]
  i1616.autoSimulation = !!i1617[17]
  i1616.queriesHitTriggers = !!i1617[18]
  i1616.queriesStartInColliders = !!i1617[19]
  i1616.callbacksOnDisable = !!i1617[20]
  i1616.reuseCollisionCallbacks = !!i1617[21]
  i1616.autoSyncTransforms = !!i1617[22]
  var i1619 = i1617[23]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 1) {
    i1618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1619[i + 0]) );
  }
  i1616.collisionMatrix = i1618
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1623 = data
  i1622.enabled = !!i1623[0]
  i1622.layerId = i1623[1]
  i1622.otherLayerId = i1623[2]
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1625 = data
  var i1627 = i1625[0]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1627[i + 0]) );
  }
  i1624.qualityLevels = i1626
  var i1629 = i1625[1]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( i1629[i + 0] );
  }
  i1624.names = i1628
  i1624.shadows = i1625[2]
  i1624.anisotropicFiltering = i1625[3]
  i1624.antiAliasing = i1625[4]
  i1624.lodBias = i1625[5]
  i1624.shadowCascades = i1625[6]
  i1624.shadowDistance = i1625[7]
  i1624.shadowmaskMode = i1625[8]
  i1624.shadowProjection = i1625[9]
  i1624.shadowResolution = i1625[10]
  i1624.softParticles = !!i1625[11]
  i1624.softVegetation = !!i1625[12]
  i1624.activeColorSpace = i1625[13]
  i1624.desiredColorSpace = i1625[14]
  i1624.masterTextureLimit = i1625[15]
  i1624.maxQueuedFrames = i1625[16]
  i1624.particleRaycastBudget = i1625[17]
  i1624.pixelLightCount = i1625[18]
  i1624.realtimeReflectionProbes = !!i1625[19]
  i1624.shadowCascade2Split = i1625[20]
  i1624.shadowCascade4Split = new pc.Vec3( i1625[21], i1625[22], i1625[23] )
  i1624.streamingMipmapsActive = !!i1625[24]
  i1624.vSyncCount = i1625[25]
  i1624.asyncUploadBufferSize = i1625[26]
  i1624.asyncUploadTimeSlice = i1625[27]
  i1624.billboardsFaceCameraPosition = !!i1625[28]
  i1624.shadowNearPlaneOffset = i1625[29]
  i1624.streamingMipmapsMemoryBudget = i1625[30]
  i1624.maximumLODLevel = i1625[31]
  i1624.streamingMipmapsAddAllCameras = !!i1625[32]
  i1624.streamingMipmapsMaxLevelReduction = i1625[33]
  i1624.streamingMipmapsRenderersPerFrame = i1625[34]
  i1624.resolutionScalingFixedDPIFactor = i1625[35]
  i1624.streamingMipmapsMaxFileIORequests = i1625[36]
  i1624.currentQualityLevel = i1625[37]
  return i1624
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[3],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[51],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[59],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[3],"73":[74],"75":[76],"77":[76],"9":[8],"78":[79],"80":[81],"82":[79],"83":[8],"84":[8],"11":[9],"22":[17,8],"85":[8],"10":[9],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"34":[8],"93":[8],"16":[17,8],"94":[8],"95":[8],"96":[8],"97":[8],"31":[17,8],"98":[8],"99":[6],"100":[6],"7":[6],"101":[6],"102":[3],"103":[3],"104":[105],"106":[3],"107":[108],"109":[8],"110":[17,8],"111":[74],"24":[17,8],"112":[113,74],"114":[74],"115":[74,116],"117":[51],"118":[59],"119":[108],"120":[121],"122":[8],"123":[74,8],"124":[8,17],"125":[8],"126":[17,8],"127":[74],"128":[17,8],"129":[8],"130":[79]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.BoxCollider2D","DropZone","UnityEngine.UI.Image","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","DraggableItem","UnityEngine.CanvasGroup","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","IQFill","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "04/15/2025 07:07:05";

Deserializers.lunaDaysRunning = "1.9";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "APG_V01_TrangHT_AnhPD_v2";

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

Deserializers.buildID = "52a037b7-a7b9-4d8a-80ff-4480d3354940";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

