var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1284 = root || request.c( 'UnityEngine.JointSpring' )
  var i1285 = data
  i1284.spring = i1285[0]
  i1284.damper = i1285[1]
  i1284.targetPosition = i1285[2]
  return i1284
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.JointMotor' )
  var i1287 = data
  i1286.m_TargetVelocity = i1287[0]
  i1286.m_Force = i1287[1]
  i1286.m_FreeSpin = i1287[2]
  return i1286
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.JointLimits' )
  var i1289 = data
  i1288.m_Min = i1289[0]
  i1288.m_Max = i1289[1]
  i1288.m_Bounciness = i1289[2]
  i1288.m_BounceMinVelocity = i1289[3]
  i1288.m_ContactDistance = i1289[4]
  i1288.minBounce = i1289[5]
  i1288.maxBounce = i1289[6]
  return i1288
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.JointDrive' )
  var i1291 = data
  i1290.m_PositionSpring = i1291[0]
  i1290.m_PositionDamper = i1291[1]
  i1290.m_MaximumForce = i1291[2]
  i1290.m_UseAcceleration = i1291[3]
  return i1290
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1293 = data
  i1292.m_Spring = i1293[0]
  i1292.m_Damper = i1293[1]
  return i1292
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1295 = data
  i1294.m_Limit = i1295[0]
  i1294.m_Bounciness = i1295[1]
  i1294.m_ContactDistance = i1295[2]
  return i1294
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1297 = data
  i1296.m_ExtremumSlip = i1297[0]
  i1296.m_ExtremumValue = i1297[1]
  i1296.m_AsymptoteSlip = i1297[2]
  i1296.m_AsymptoteValue = i1297[3]
  i1296.m_Stiffness = i1297[4]
  return i1296
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1299 = data
  i1298.m_LowerAngle = i1299[0]
  i1298.m_UpperAngle = i1299[1]
  return i1298
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1300 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1301 = data
  i1300.m_MotorSpeed = i1301[0]
  i1300.m_MaximumMotorTorque = i1301[1]
  return i1300
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1303 = data
  i1302.m_DampingRatio = i1303[0]
  i1302.m_Frequency = i1303[1]
  i1302.m_Angle = i1303[2]
  return i1302
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1304 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1305 = data
  i1304.m_LowerTranslation = i1305[0]
  i1304.m_UpperTranslation = i1305[1]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1307 = data
  i1306.name = i1307[0]
  i1306.width = i1307[1]
  i1306.height = i1307[2]
  i1306.mipmapCount = i1307[3]
  i1306.anisoLevel = i1307[4]
  i1306.filterMode = i1307[5]
  i1306.hdr = !!i1307[6]
  i1306.format = i1307[7]
  i1306.wrapMode = i1307[8]
  i1306.alphaIsTransparency = !!i1307[9]
  i1306.alphaSource = i1307[10]
  i1306.graphicsFormat = i1307[11]
  i1306.sRGBTexture = !!i1307[12]
  i1306.desiredColorSpace = i1307[13]
  i1306.wrapU = i1307[14]
  i1306.wrapV = i1307[15]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1308 = root || new pc.UnityMaterial()
  var i1309 = data
  i1308.name = i1309[0]
  request.r(i1309[1], i1309[2], 0, i1308, 'shader')
  i1308.renderQueue = i1309[3]
  i1308.enableInstancing = !!i1309[4]
  var i1311 = i1309[5]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1311[i + 0]) );
  }
  i1308.floatParameters = i1310
  var i1313 = i1309[6]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1313[i + 0]) );
  }
  i1308.colorParameters = i1312
  var i1315 = i1309[7]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1315[i + 0]) );
  }
  i1308.vectorParameters = i1314
  var i1317 = i1309[8]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1317[i + 0]) );
  }
  i1308.textureParameters = i1316
  var i1319 = i1309[9]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1319[i + 0]) );
  }
  i1308.materialFlags = i1318
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1323 = data
  i1322.name = i1323[0]
  i1322.value = i1323[1]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1327 = data
  i1326.name = i1327[0]
  i1326.value = new pc.Color(i1327[1], i1327[2], i1327[3], i1327[4])
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1331 = data
  i1330.name = i1331[0]
  i1330.value = new pc.Vec4( i1331[1], i1331[2], i1331[3], i1331[4] )
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1335 = data
  i1334.name = i1335[0]
  request.r(i1335[1], i1335[2], 0, i1334, 'value')
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1339 = data
  i1338.name = i1339[0]
  i1338.enabled = !!i1339[1]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1341 = data
  i1340.name = i1341[0]
  i1340.index = i1341[1]
  i1340.startup = !!i1341[2]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1343 = data
  i1342.aspect = i1343[0]
  i1342.orthographic = !!i1343[1]
  i1342.orthographicSize = i1343[2]
  i1342.backgroundColor = new pc.Color(i1343[3], i1343[4], i1343[5], i1343[6])
  i1342.nearClipPlane = i1343[7]
  i1342.farClipPlane = i1343[8]
  i1342.fieldOfView = i1343[9]
  i1342.depth = i1343[10]
  i1342.clearFlags = i1343[11]
  i1342.cullingMask = i1343[12]
  i1342.rect = i1343[13]
  request.r(i1343[14], i1343[15], 0, i1342, 'targetTexture')
  i1342.usePhysicalProperties = !!i1343[16]
  i1342.focalLength = i1343[17]
  i1342.sensorSize = new pc.Vec2( i1343[18], i1343[19] )
  i1342.lensShift = new pc.Vec2( i1343[20], i1343[21] )
  i1342.gateFit = i1343[22]
  i1342.commandBufferCount = i1343[23]
  i1342.cameraType = i1343[24]
  i1342.enabled = !!i1343[25]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1345 = data
  i1344.name = i1345[0]
  i1344.tagId = i1345[1]
  i1344.enabled = !!i1345[2]
  i1344.isStatic = !!i1345[3]
  i1344.layer = i1345[4]
  return i1344
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1346 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1347 = data
  request.r(i1347[0], i1347[1], 0, i1346, 'm_FirstSelected')
  i1346.m_sendNavigationEvents = !!i1347[2]
  i1346.m_DragThreshold = i1347[3]
  return i1346
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1348 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1349 = data
  i1348.m_HorizontalAxis = i1349[0]
  i1348.m_VerticalAxis = i1349[1]
  i1348.m_SubmitButton = i1349[2]
  i1348.m_CancelButton = i1349[3]
  i1348.m_InputActionsPerSecond = i1349[4]
  i1348.m_RepeatDelay = i1349[5]
  i1348.m_ForceModuleActive = !!i1349[6]
  i1348.m_SendPointerHoverToParent = !!i1349[7]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1351 = data
  i1350.pivot = new pc.Vec2( i1351[0], i1351[1] )
  i1350.anchorMin = new pc.Vec2( i1351[2], i1351[3] )
  i1350.anchorMax = new pc.Vec2( i1351[4], i1351[5] )
  i1350.sizeDelta = new pc.Vec2( i1351[6], i1351[7] )
  i1350.anchoredPosition3D = new pc.Vec3( i1351[8], i1351[9], i1351[10] )
  i1350.rotation = new pc.Quat(i1351[11], i1351[12], i1351[13], i1351[14])
  i1350.scale = new pc.Vec3( i1351[15], i1351[16], i1351[17] )
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1353 = data
  i1352.planeDistance = i1353[0]
  i1352.referencePixelsPerUnit = i1353[1]
  i1352.isFallbackOverlay = !!i1353[2]
  i1352.renderMode = i1353[3]
  i1352.renderOrder = i1353[4]
  i1352.sortingLayerName = i1353[5]
  i1352.sortingOrder = i1353[6]
  i1352.scaleFactor = i1353[7]
  request.r(i1353[8], i1353[9], 0, i1352, 'worldCamera')
  i1352.overrideSorting = !!i1353[10]
  i1352.pixelPerfect = !!i1353[11]
  i1352.targetDisplay = i1353[12]
  i1352.overridePixelPerfect = !!i1353[13]
  i1352.enabled = !!i1353[14]
  return i1352
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1354 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1355 = data
  i1354.m_UiScaleMode = i1355[0]
  i1354.m_ReferencePixelsPerUnit = i1355[1]
  i1354.m_ScaleFactor = i1355[2]
  i1354.m_ReferenceResolution = new pc.Vec2( i1355[3], i1355[4] )
  i1354.m_ScreenMatchMode = i1355[5]
  i1354.m_MatchWidthOrHeight = i1355[6]
  i1354.m_PhysicalUnit = i1355[7]
  i1354.m_FallbackScreenDPI = i1355[8]
  i1354.m_DefaultSpriteDPI = i1355[9]
  i1354.m_DynamicPixelsPerUnit = i1355[10]
  i1354.m_PresetInfoIsWorld = !!i1355[11]
  return i1354
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1356 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1357 = data
  i1356.m_IgnoreReversedGraphics = !!i1357[0]
  i1356.m_BlockingObjects = i1357[1]
  i1356.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1357[2] )
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1359 = data
  i1358.cullTransparentMesh = !!i1359[0]
  return i1358
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1360 = root || request.c( 'UnityEngine.UI.Image' )
  var i1361 = data
  request.r(i1361[0], i1361[1], 0, i1360, 'm_Sprite')
  i1360.m_Type = i1361[2]
  i1360.m_PreserveAspect = !!i1361[3]
  i1360.m_FillCenter = !!i1361[4]
  i1360.m_FillMethod = i1361[5]
  i1360.m_FillAmount = i1361[6]
  i1360.m_FillClockwise = !!i1361[7]
  i1360.m_FillOrigin = i1361[8]
  i1360.m_UseSpriteMesh = !!i1361[9]
  i1360.m_PixelsPerUnitMultiplier = i1361[10]
  request.r(i1361[11], i1361[12], 0, i1360, 'm_Material')
  i1360.m_Maskable = !!i1361[13]
  i1360.m_Color = new pc.Color(i1361[14], i1361[15], i1361[16], i1361[17])
  i1360.m_RaycastTarget = !!i1361[18]
  i1360.m_RaycastPadding = new pc.Vec4( i1361[19], i1361[20], i1361[21], i1361[22] )
  return i1360
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1362 = root || request.c( 'UnityEngine.UI.Text' )
  var i1363 = data
  i1362.m_FontData = request.d('UnityEngine.UI.FontData', i1363[0], i1362.m_FontData)
  i1362.m_Text = i1363[1]
  request.r(i1363[2], i1363[3], 0, i1362, 'm_Material')
  i1362.m_Maskable = !!i1363[4]
  i1362.m_Color = new pc.Color(i1363[5], i1363[6], i1363[7], i1363[8])
  i1362.m_RaycastTarget = !!i1363[9]
  i1362.m_RaycastPadding = new pc.Vec4( i1363[10], i1363[11], i1363[12], i1363[13] )
  return i1362
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1364 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1365 = data
  request.r(i1365[0], i1365[1], 0, i1364, 'm_Font')
  i1364.m_FontSize = i1365[2]
  i1364.m_FontStyle = i1365[3]
  i1364.m_BestFit = !!i1365[4]
  i1364.m_MinSize = i1365[5]
  i1364.m_MaxSize = i1365[6]
  i1364.m_Alignment = i1365[7]
  i1364.m_AlignByGeometry = !!i1365[8]
  i1364.m_RichText = !!i1365[9]
  i1364.m_HorizontalOverflow = i1365[10]
  i1364.m_VerticalOverflow = i1365[11]
  i1364.m_LineSpacing = i1365[12]
  return i1364
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1366 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1367 = data
  request.r(i1367[0], i1367[1], 0, i1366, 'm_FillRect')
  request.r(i1367[2], i1367[3], 0, i1366, 'm_HandleRect')
  i1366.m_Direction = i1367[4]
  i1366.m_MinValue = i1367[5]
  i1366.m_MaxValue = i1367[6]
  i1366.m_WholeNumbers = !!i1367[7]
  i1366.m_Value = i1367[8]
  i1366.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1367[9], i1366.m_OnValueChanged)
  i1366.m_Navigation = request.d('UnityEngine.UI.Navigation', i1367[10], i1366.m_Navigation)
  i1366.m_Transition = i1367[11]
  i1366.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1367[12], i1366.m_Colors)
  i1366.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1367[13], i1366.m_SpriteState)
  i1366.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1367[14], i1366.m_AnimationTriggers)
  i1366.m_Interactable = !!i1367[15]
  request.r(i1367[16], i1367[17], 0, i1366, 'm_TargetGraphic')
  return i1366
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1368 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1369 = data
  i1368.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1369[0], i1368.m_PersistentCalls)
  return i1368
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1370 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1371 = data
  var i1373 = i1371[0]
  var i1372 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.add(request.d('UnityEngine.Events.PersistentCall', i1373[i + 0]));
  }
  i1370.m_Calls = i1372
  return i1370
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1376 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1377 = data
  request.r(i1377[0], i1377[1], 0, i1376, 'm_Target')
  i1376.m_TargetAssemblyTypeName = i1377[2]
  i1376.m_MethodName = i1377[3]
  i1376.m_Mode = i1377[4]
  i1376.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1377[5], i1376.m_Arguments)
  i1376.m_CallState = i1377[6]
  return i1376
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1378 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1379 = data
  i1378.m_Mode = i1379[0]
  i1378.m_WrapAround = !!i1379[1]
  request.r(i1379[2], i1379[3], 0, i1378, 'm_SelectOnUp')
  request.r(i1379[4], i1379[5], 0, i1378, 'm_SelectOnDown')
  request.r(i1379[6], i1379[7], 0, i1378, 'm_SelectOnLeft')
  request.r(i1379[8], i1379[9], 0, i1378, 'm_SelectOnRight')
  return i1378
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1380 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1381 = data
  i1380.m_NormalColor = new pc.Color(i1381[0], i1381[1], i1381[2], i1381[3])
  i1380.m_HighlightedColor = new pc.Color(i1381[4], i1381[5], i1381[6], i1381[7])
  i1380.m_PressedColor = new pc.Color(i1381[8], i1381[9], i1381[10], i1381[11])
  i1380.m_SelectedColor = new pc.Color(i1381[12], i1381[13], i1381[14], i1381[15])
  i1380.m_DisabledColor = new pc.Color(i1381[16], i1381[17], i1381[18], i1381[19])
  i1380.m_ColorMultiplier = i1381[20]
  i1380.m_FadeDuration = i1381[21]
  return i1380
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1382 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1383 = data
  request.r(i1383[0], i1383[1], 0, i1382, 'm_HighlightedSprite')
  request.r(i1383[2], i1383[3], 0, i1382, 'm_PressedSprite')
  request.r(i1383[4], i1383[5], 0, i1382, 'm_SelectedSprite')
  request.r(i1383[6], i1383[7], 0, i1382, 'm_DisabledSprite')
  return i1382
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1384 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1385 = data
  i1384.m_NormalTrigger = i1385[0]
  i1384.m_HighlightedTrigger = i1385[1]
  i1384.m_PressedTrigger = i1385[2]
  i1384.m_SelectedTrigger = i1385[3]
  i1384.m_DisabledTrigger = i1385[4]
  return i1384
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1387 = data
  i1386.m_ShowMaskGraphic = !!i1387[0]
  return i1386
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1388 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1389 = data
  request.r(i1389[0], i1389[1], 0, i1388, 'skeletonDataAsset')
  request.r(i1389[2], i1389[3], 0, i1388, 'additiveMaterial')
  request.r(i1389[4], i1389[5], 0, i1388, 'multiplyMaterial')
  request.r(i1389[6], i1389[7], 0, i1388, 'screenMaterial')
  i1388.initialSkinName = i1389[8]
  i1388.initialFlipX = !!i1389[9]
  i1388.initialFlipY = !!i1389[10]
  i1388.startingAnimation = i1389[11]
  i1388.startingLoop = !!i1389[12]
  i1388.timeScale = i1389[13]
  i1388.freeze = !!i1389[14]
  i1388.layoutScaleMode = i1389[15]
  i1388.updateWhenInvisible = i1389[16]
  i1388.allowMultipleCanvasRenderers = !!i1389[17]
  var i1391 = i1389[18]
  var i1390 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1391.length; i += 2) {
  request.r(i1391[i + 0], i1391[i + 1], 1, i1390, '')
  }
  i1388.canvasRenderers = i1390
  i1388.enableSeparatorSlots = !!i1389[19]
  i1388.updateSeparatorPartLocation = !!i1389[20]
  i1388.updateSeparatorPartScale = !!i1389[21]
  i1388.disableMeshAssignmentOnOverride = !!i1389[22]
  i1388.referenceSize = new pc.Vec2( i1389[23], i1389[24] )
  i1388.referenceScale = i1389[25]
  i1388.rectTransformSize = new pc.Vec2( i1389[26], i1389[27] )
  i1388.editReferenceRect = !!i1389[28]
  var i1393 = i1389[29]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( i1393[i + 0] );
  }
  i1388.separatorSlotNames = i1392
  var i1395 = i1389[30]
  var i1394 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1395.length; i += 2) {
  request.r(i1395[i + 0], i1395[i + 1], 1, i1394, '')
  }
  i1388.separatorParts = i1394
  i1388.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1389[31], i1388.meshGenerator)
  i1388.updateTiming = i1389[32]
  i1388.unscaledTime = !!i1389[33]
  request.r(i1389[34], i1389[35], 0, i1388, 'm_Material')
  i1388.m_Maskable = !!i1389[36]
  i1388.m_Color = new pc.Color(i1389[37], i1389[38], i1389[39], i1389[40])
  i1388.m_RaycastTarget = !!i1389[41]
  i1388.m_RaycastPadding = new pc.Vec4( i1389[42], i1389[43], i1389[44], i1389[45] )
  return i1388
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1402 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1403 = data
  i1402.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1403[0], i1402.settings)
  return i1402
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1404 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1405 = data
  i1404.useClipping = !!i1405[0]
  i1404.zSpacing = i1405[1]
  i1404.pmaVertexColors = !!i1405[2]
  i1404.tintBlack = !!i1405[3]
  i1404.canvasGroupTintBlack = !!i1405[4]
  i1404.calculateTangents = !!i1405[5]
  i1404.addNormals = !!i1405[6]
  i1404.immutableTriangles = !!i1405[7]
  return i1404
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i1406 = root || request.c( 'AnimationController' )
  var i1407 = data
  request.r(i1407[0], i1407[1], 0, i1406, 'skeleton')
  request.r(i1407[2], i1407[3], 0, i1406, 'item')
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1409 = data
  i1408.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1409[0], i1408.main)
  i1408.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1409[1], i1408.colorBySpeed)
  i1408.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1409[2], i1408.colorOverLifetime)
  i1408.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1409[3], i1408.emission)
  i1408.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1409[4], i1408.rotationBySpeed)
  i1408.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1409[5], i1408.rotationOverLifetime)
  i1408.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1409[6], i1408.shape)
  i1408.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1409[7], i1408.sizeBySpeed)
  i1408.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1409[8], i1408.sizeOverLifetime)
  i1408.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1409[9], i1408.textureSheetAnimation)
  i1408.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1409[10], i1408.velocityOverLifetime)
  i1408.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1409[11], i1408.noise)
  i1408.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1409[12], i1408.inheritVelocity)
  i1408.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1409[13], i1408.forceOverLifetime)
  i1408.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1409[14], i1408.limitVelocityOverLifetime)
  i1408.useAutoRandomSeed = !!i1409[15]
  i1408.randomSeed = i1409[16]
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1410 = root || new pc.ParticleSystemMain()
  var i1411 = data
  i1410.duration = i1411[0]
  i1410.loop = !!i1411[1]
  i1410.prewarm = !!i1411[2]
  i1410.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[3], i1410.startDelay)
  i1410.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[4], i1410.startLifetime)
  i1410.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[5], i1410.startSpeed)
  i1410.startSize3D = !!i1411[6]
  i1410.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[7], i1410.startSizeX)
  i1410.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[8], i1410.startSizeY)
  i1410.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[9], i1410.startSizeZ)
  i1410.startRotation3D = !!i1411[10]
  i1410.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[11], i1410.startRotationX)
  i1410.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[12], i1410.startRotationY)
  i1410.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[13], i1410.startRotationZ)
  i1410.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1411[14], i1410.startColor)
  i1410.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[15], i1410.gravityModifier)
  i1410.simulationSpace = i1411[16]
  request.r(i1411[17], i1411[18], 0, i1410, 'customSimulationSpace')
  i1410.simulationSpeed = i1411[19]
  i1410.useUnscaledTime = !!i1411[20]
  i1410.scalingMode = i1411[21]
  i1410.playOnAwake = !!i1411[22]
  i1410.maxParticles = i1411[23]
  i1410.emitterVelocityMode = i1411[24]
  i1410.stopAction = i1411[25]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1412 = root || new pc.MinMaxCurve()
  var i1413 = data
  i1412.mode = i1413[0]
  i1412.curveMin = new pc.AnimationCurve( { keys_flow: i1413[1] } )
  i1412.curveMax = new pc.AnimationCurve( { keys_flow: i1413[2] } )
  i1412.curveMultiplier = i1413[3]
  i1412.constantMin = i1413[4]
  i1412.constantMax = i1413[5]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1414 = root || new pc.MinMaxGradient()
  var i1415 = data
  i1414.mode = i1415[0]
  i1414.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1415[1], i1414.gradientMin)
  i1414.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1415[2], i1414.gradientMax)
  i1414.colorMin = new pc.Color(i1415[3], i1415[4], i1415[5], i1415[6])
  i1414.colorMax = new pc.Color(i1415[7], i1415[8], i1415[9], i1415[10])
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1417 = data
  i1416.mode = i1417[0]
  var i1419 = i1417[1]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1419[i + 0]) );
  }
  i1416.colorKeys = i1418
  var i1421 = i1417[2]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1421[i + 0]) );
  }
  i1416.alphaKeys = i1420
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1422 = root || new pc.ParticleSystemColorBySpeed()
  var i1423 = data
  i1422.enabled = !!i1423[0]
  i1422.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1423[1], i1422.color)
  i1422.range = new pc.Vec2( i1423[2], i1423[3] )
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1427 = data
  i1426.color = new pc.Color(i1427[0], i1427[1], i1427[2], i1427[3])
  i1426.time = i1427[4]
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1431 = data
  i1430.alpha = i1431[0]
  i1430.time = i1431[1]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1432 = root || new pc.ParticleSystemColorOverLifetime()
  var i1433 = data
  i1432.enabled = !!i1433[0]
  i1432.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1433[1], i1432.color)
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1434 = root || new pc.ParticleSystemEmitter()
  var i1435 = data
  i1434.enabled = !!i1435[0]
  i1434.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1435[1], i1434.rateOverTime)
  i1434.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1435[2], i1434.rateOverDistance)
  var i1437 = i1435[3]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1437[i + 0]) );
  }
  i1434.bursts = i1436
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1440 = root || new pc.ParticleSystemBurst()
  var i1441 = data
  i1440.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1441[0], i1440.count)
  i1440.cycleCount = i1441[1]
  i1440.minCount = i1441[2]
  i1440.maxCount = i1441[3]
  i1440.repeatInterval = i1441[4]
  i1440.time = i1441[5]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1442 = root || new pc.ParticleSystemRotationBySpeed()
  var i1443 = data
  i1442.enabled = !!i1443[0]
  i1442.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[1], i1442.x)
  i1442.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[2], i1442.y)
  i1442.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[3], i1442.z)
  i1442.separateAxes = !!i1443[4]
  i1442.range = new pc.Vec2( i1443[5], i1443[6] )
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1444 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1445 = data
  i1444.enabled = !!i1445[0]
  i1444.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[1], i1444.x)
  i1444.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[2], i1444.y)
  i1444.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[3], i1444.z)
  i1444.separateAxes = !!i1445[4]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1446 = root || new pc.ParticleSystemShape()
  var i1447 = data
  i1446.enabled = !!i1447[0]
  i1446.shapeType = i1447[1]
  i1446.randomDirectionAmount = i1447[2]
  i1446.sphericalDirectionAmount = i1447[3]
  i1446.randomPositionAmount = i1447[4]
  i1446.alignToDirection = !!i1447[5]
  i1446.radius = i1447[6]
  i1446.radiusMode = i1447[7]
  i1446.radiusSpread = i1447[8]
  i1446.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[9], i1446.radiusSpeed)
  i1446.radiusThickness = i1447[10]
  i1446.angle = i1447[11]
  i1446.length = i1447[12]
  i1446.boxThickness = new pc.Vec3( i1447[13], i1447[14], i1447[15] )
  i1446.meshShapeType = i1447[16]
  request.r(i1447[17], i1447[18], 0, i1446, 'mesh')
  request.r(i1447[19], i1447[20], 0, i1446, 'meshRenderer')
  request.r(i1447[21], i1447[22], 0, i1446, 'skinnedMeshRenderer')
  i1446.useMeshMaterialIndex = !!i1447[23]
  i1446.meshMaterialIndex = i1447[24]
  i1446.useMeshColors = !!i1447[25]
  i1446.normalOffset = i1447[26]
  i1446.arc = i1447[27]
  i1446.arcMode = i1447[28]
  i1446.arcSpread = i1447[29]
  i1446.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[30], i1446.arcSpeed)
  i1446.donutRadius = i1447[31]
  i1446.position = new pc.Vec3( i1447[32], i1447[33], i1447[34] )
  i1446.rotation = new pc.Vec3( i1447[35], i1447[36], i1447[37] )
  i1446.scale = new pc.Vec3( i1447[38], i1447[39], i1447[40] )
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1448 = root || new pc.ParticleSystemSizeBySpeed()
  var i1449 = data
  i1448.enabled = !!i1449[0]
  i1448.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1449[1], i1448.x)
  i1448.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1449[2], i1448.y)
  i1448.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1449[3], i1448.z)
  i1448.separateAxes = !!i1449[4]
  i1448.range = new pc.Vec2( i1449[5], i1449[6] )
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1450 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1451 = data
  i1450.enabled = !!i1451[0]
  i1450.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[1], i1450.x)
  i1450.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[2], i1450.y)
  i1450.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[3], i1450.z)
  i1450.separateAxes = !!i1451[4]
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1452 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1453 = data
  i1452.enabled = !!i1453[0]
  i1452.mode = i1453[1]
  i1452.animation = i1453[2]
  i1452.numTilesX = i1453[3]
  i1452.numTilesY = i1453[4]
  i1452.useRandomRow = !!i1453[5]
  i1452.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[6], i1452.frameOverTime)
  i1452.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[7], i1452.startFrame)
  i1452.cycleCount = i1453[8]
  i1452.rowIndex = i1453[9]
  i1452.flipU = i1453[10]
  i1452.flipV = i1453[11]
  i1452.spriteCount = i1453[12]
  var i1455 = i1453[13]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 2) {
  request.r(i1455[i + 0], i1455[i + 1], 2, i1454, '')
  }
  i1452.sprites = i1454
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1458 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1459 = data
  i1458.enabled = !!i1459[0]
  i1458.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[1], i1458.x)
  i1458.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[2], i1458.y)
  i1458.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[3], i1458.z)
  i1458.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[4], i1458.radial)
  i1458.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[5], i1458.speedModifier)
  i1458.space = i1459[6]
  i1458.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[7], i1458.orbitalX)
  i1458.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[8], i1458.orbitalY)
  i1458.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[9], i1458.orbitalZ)
  i1458.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[10], i1458.orbitalOffsetX)
  i1458.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[11], i1458.orbitalOffsetY)
  i1458.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[12], i1458.orbitalOffsetZ)
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1460 = root || new pc.ParticleSystemNoise()
  var i1461 = data
  i1460.enabled = !!i1461[0]
  i1460.separateAxes = !!i1461[1]
  i1460.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[2], i1460.strengthX)
  i1460.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[3], i1460.strengthY)
  i1460.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[4], i1460.strengthZ)
  i1460.frequency = i1461[5]
  i1460.damping = !!i1461[6]
  i1460.octaveCount = i1461[7]
  i1460.octaveMultiplier = i1461[8]
  i1460.octaveScale = i1461[9]
  i1460.quality = i1461[10]
  i1460.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[11], i1460.scrollSpeed)
  i1460.scrollSpeedMultiplier = i1461[12]
  i1460.remapEnabled = !!i1461[13]
  i1460.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[14], i1460.remapX)
  i1460.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[15], i1460.remapY)
  i1460.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[16], i1460.remapZ)
  i1460.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[17], i1460.positionAmount)
  i1460.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[18], i1460.rotationAmount)
  i1460.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[19], i1460.sizeAmount)
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1462 = root || new pc.ParticleSystemInheritVelocity()
  var i1463 = data
  i1462.enabled = !!i1463[0]
  i1462.mode = i1463[1]
  i1462.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1463[2], i1462.curve)
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1464 = root || new pc.ParticleSystemForceOverLifetime()
  var i1465 = data
  i1464.enabled = !!i1465[0]
  i1464.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1465[1], i1464.x)
  i1464.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1465[2], i1464.y)
  i1464.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1465[3], i1464.z)
  i1464.space = i1465[4]
  i1464.randomized = !!i1465[5]
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1466 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1467 = data
  i1466.enabled = !!i1467[0]
  i1466.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[1], i1466.limit)
  i1466.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[2], i1466.limitX)
  i1466.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[3], i1466.limitY)
  i1466.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[4], i1466.limitZ)
  i1466.dampen = i1467[5]
  i1466.separateAxes = !!i1467[6]
  i1466.space = i1467[7]
  i1466.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[8], i1466.drag)
  i1466.multiplyDragByParticleSize = !!i1467[9]
  i1466.multiplyDragByParticleVelocity = !!i1467[10]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1469 = data
  request.r(i1469[0], i1469[1], 0, i1468, 'mesh')
  i1468.meshCount = i1469[2]
  i1468.activeVertexStreamsCount = i1469[3]
  i1468.alignment = i1469[4]
  i1468.renderMode = i1469[5]
  i1468.sortMode = i1469[6]
  i1468.lengthScale = i1469[7]
  i1468.velocityScale = i1469[8]
  i1468.cameraVelocityScale = i1469[9]
  i1468.normalDirection = i1469[10]
  i1468.sortingFudge = i1469[11]
  i1468.minParticleSize = i1469[12]
  i1468.maxParticleSize = i1469[13]
  i1468.pivot = new pc.Vec3( i1469[14], i1469[15], i1469[16] )
  request.r(i1469[17], i1469[18], 0, i1468, 'trailMaterial')
  i1468.applyActiveColorSpace = !!i1469[19]
  i1468.enabled = !!i1469[20]
  request.r(i1469[21], i1469[22], 0, i1468, 'sharedMaterial')
  var i1471 = i1469[23]
  var i1470 = []
  for(var i = 0; i < i1471.length; i += 2) {
  request.r(i1471[i + 0], i1471[i + 1], 2, i1470, '')
  }
  i1468.sharedMaterials = i1470
  i1468.receiveShadows = !!i1469[24]
  i1468.shadowCastingMode = i1469[25]
  i1468.sortingLayerID = i1469[26]
  i1468.sortingOrder = i1469[27]
  i1468.lightmapIndex = i1469[28]
  i1468.lightmapSceneIndex = i1469[29]
  i1468.lightmapScaleOffset = new pc.Vec4( i1469[30], i1469[31], i1469[32], i1469[33] )
  i1468.lightProbeUsage = i1469[34]
  i1468.reflectionProbeUsage = i1469[35]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1475 = data
  request.r(i1475[0], i1475[1], 0, i1474, 'clip')
  request.r(i1475[2], i1475[3], 0, i1474, 'outputAudioMixerGroup')
  i1474.playOnAwake = !!i1475[4]
  i1474.loop = !!i1475[5]
  i1474.time = i1475[6]
  i1474.volume = i1475[7]
  i1474.pitch = i1475[8]
  i1474.enabled = !!i1475[9]
  return i1474
}

Deserializers["CharacterSkinController"] = function (request, data, root) {
  var i1476 = root || request.c( 'CharacterSkinController' )
  var i1477 = data
  request.r(i1477[0], i1477[1], 0, i1476, 'skeletonAnimation')
  request.r(i1477[2], i1477[3], 0, i1476, 'thinData')
  i1476.smallFace = request.d('Item', i1477[4], i1476.smallFace)
  i1476.smallBody = request.d('Item', i1477[5], i1476.smallBody)
  i1476.accessory = request.d('Item', i1477[6], i1476.accessory)
  i1476.dress = request.d('Item', i1477[7], i1476.dress)
  i1476.glass = request.d('Item', i1477[8], i1476.glass)
  i1476.face = request.d('Item', i1477[9], i1476.face)
  i1476.hair = request.d('Item', i1477[10], i1476.hair)
  i1476.legHair = request.d('Item', i1477[11], i1476.legHair)
  i1476.smoke = request.d('Item', i1477[12], i1476.smoke)
  i1476.sock = request.d('Item', i1477[13], i1476.sock)
  return i1476
}

Deserializers["Item"] = function (request, data, root) {
  var i1478 = root || request.c( 'Item' )
  var i1479 = data
  request.r(i1479[0], i1479[1], 0, i1478, 'ActiveItem')
  request.r(i1479[2], i1479[3], 0, i1478, 'ActiveSound')
  return i1478
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1480 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1481 = data
  i1480.targetIsSelf = !!i1481[0]
  request.r(i1481[1], i1481[2], 0, i1480, 'targetGO')
  i1480.tweenTargetIsTargetGO = !!i1481[3]
  i1480.delay = i1481[4]
  i1480.duration = i1481[5]
  i1480.easeType = i1481[6]
  i1480.easeCurve = new pc.AnimationCurve( { keys_flow: i1481[7] } )
  i1480.loopType = i1481[8]
  i1480.loops = i1481[9]
  i1480.id = i1481[10]
  i1480.isRelative = !!i1481[11]
  i1480.isFrom = !!i1481[12]
  i1480.isIndependentUpdate = !!i1481[13]
  i1480.autoKill = !!i1481[14]
  i1480.autoGenerate = !!i1481[15]
  i1480.isActive = !!i1481[16]
  i1480.isValid = !!i1481[17]
  request.r(i1481[18], i1481[19], 0, i1480, 'target')
  i1480.animationType = i1481[20]
  i1480.targetType = i1481[21]
  i1480.forcedTargetType = i1481[22]
  i1480.autoPlay = !!i1481[23]
  i1480.useTargetAsV3 = !!i1481[24]
  i1480.endValueFloat = i1481[25]
  i1480.endValueV3 = new pc.Vec3( i1481[26], i1481[27], i1481[28] )
  i1480.endValueV2 = new pc.Vec2( i1481[29], i1481[30] )
  i1480.endValueColor = new pc.Color(i1481[31], i1481[32], i1481[33], i1481[34])
  i1480.endValueString = i1481[35]
  i1480.endValueRect = UnityEngine.Rect.MinMaxRect(i1481[36], i1481[37], i1481[38], i1481[39])
  request.r(i1481[40], i1481[41], 0, i1480, 'endValueTransform')
  i1480.optionalBool0 = !!i1481[42]
  i1480.optionalBool1 = !!i1481[43]
  i1480.optionalFloat0 = i1481[44]
  i1480.optionalInt0 = i1481[45]
  i1480.optionalRotationMode = i1481[46]
  i1480.optionalScrambleMode = i1481[47]
  i1480.optionalShakeRandomnessMode = i1481[48]
  i1480.optionalString = i1481[49]
  i1480.updateType = i1481[50]
  i1480.isSpeedBased = !!i1481[51]
  i1480.hasOnStart = !!i1481[52]
  i1480.hasOnPlay = !!i1481[53]
  i1480.hasOnUpdate = !!i1481[54]
  i1480.hasOnStepComplete = !!i1481[55]
  i1480.hasOnComplete = !!i1481[56]
  i1480.hasOnTweenCreated = !!i1481[57]
  i1480.hasOnRewind = !!i1481[58]
  i1480.onStart = request.d('UnityEngine.Events.UnityEvent', i1481[59], i1480.onStart)
  i1480.onPlay = request.d('UnityEngine.Events.UnityEvent', i1481[60], i1480.onPlay)
  i1480.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1481[61], i1480.onUpdate)
  i1480.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1481[62], i1480.onStepComplete)
  i1480.onComplete = request.d('UnityEngine.Events.UnityEvent', i1481[63], i1480.onComplete)
  i1480.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1481[64], i1480.onTweenCreated)
  i1480.onRewind = request.d('UnityEngine.Events.UnityEvent', i1481[65], i1480.onRewind)
  return i1480
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1482 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1483 = data
  i1482.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1483[0], i1482.m_PersistentCalls)
  return i1482
}

Deserializers["TutController"] = function (request, data, root) {
  var i1484 = root || request.c( 'TutController' )
  var i1485 = data
  request.r(i1485[0], i1485[1], 0, i1484, 'icon')
  request.r(i1485[2], i1485[3], 0, i1484, 'tutObject')
  i1484.toPos = new pc.Vec3( i1485[4], i1485[5], i1485[6] )
  i1484.timeMove = i1485[7]
  i1484.timeDelay = i1485[8]
  return i1484
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1486 = root || request.c( 'UnityEngine.UI.Button' )
  var i1487 = data
  i1486.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1487[0], i1486.m_OnClick)
  i1486.m_Navigation = request.d('UnityEngine.UI.Navigation', i1487[1], i1486.m_Navigation)
  i1486.m_Transition = i1487[2]
  i1486.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1487[3], i1486.m_Colors)
  i1486.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1487[4], i1486.m_SpriteState)
  i1486.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1487[5], i1486.m_AnimationTriggers)
  i1486.m_Interactable = !!i1487[6]
  request.r(i1487[7], i1487[8], 0, i1486, 'm_TargetGraphic')
  return i1486
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1488 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1489 = data
  i1488.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1489[0], i1488.m_PersistentCalls)
  return i1488
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1490 = root || request.c( 'LunaController' )
  var i1491 = data
  i1490.TimePlay = i1491[0]
  i1490.CountPlay = i1491[1]
  i1490.BGColor = new pc.Color(i1491[2], i1491[3], i1491[4], i1491[5])
  i1490.GameBGColor = new pc.Color(i1491[6], i1491[7], i1491[8], i1491[9])
  i1490.LevelTextColor = new pc.Color(i1491[10], i1491[11], i1491[12], i1491[13])
  i1490.TitleTextColor = new pc.Color(i1491[14], i1491[15], i1491[16], i1491[17])
  i1490.SubBGColor = new pc.Color(i1491[18], i1491[19], i1491[20], i1491[21])
  request.r(i1491[22], i1491[23], 0, i1490, 'time')
  request.r(i1491[24], i1491[25], 0, i1490, 'BGImage')
  request.r(i1491[26], i1491[27], 0, i1490, 'GameBGImage')
  request.r(i1491[28], i1491[29], 0, i1490, 'levelText')
  request.r(i1491[30], i1491[31], 0, i1490, 'titleText')
  request.r(i1491[32], i1491[33], 0, i1490, 'subBG')
  request.r(i1491[34], i1491[35], 0, i1490, 'endCard')
  var i1493 = i1491[36]
  var i1492 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1493.length; i += 2) {
  request.r(i1493[i + 0], i1493[i + 1], 1, i1492, '')
  }
  i1490.CTA = i1492
  i1490.count = i1491[37]
  return i1490
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1496 = root || request.c( 'LayoutController' )
  var i1497 = data
  request.r(i1497[0], i1497[1], 0, i1496, 'CTA')
  i1496.hide = !!i1497[2]
  return i1496
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1498 = root || request.c( 'AudioController' )
  var i1499 = data
  request.r(i1499[0], i1499[1], 0, i1498, 'BGM')
  request.r(i1499[2], i1499[3], 0, i1498, 'musicSource')
  request.r(i1499[4], i1499[5], 0, i1498, 'SFXPool')
  return i1498
}

Deserializers["InteractController"] = function (request, data, root) {
  var i1500 = root || request.c( 'InteractController' )
  var i1501 = data
  request.r(i1501[0], i1501[1], 0, i1500, 'canvas')
  i1500.maxPos = new pc.Vec2( i1501[2], i1501[3] )
  i1500.minPos = new pc.Vec2( i1501[4], i1501[5] )
  var i1503 = i1501[6]
  var i1502 = new (System.Collections.Generic.List$1(Bridge.ns('ItemDrag')))
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.add(request.d('ItemDrag', i1503[i + 0]));
  }
  i1500.itemDrags = i1502
  var i1505 = i1501[7]
  var i1504 = new (System.Collections.Generic.List$1(Bridge.ns('ItemClick')))
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.add(request.d('ItemClick', i1505[i + 0]));
  }
  i1500.itemClicks = i1504
  i1500.currentTarget = request.d('ItemDrag', i1501[8], i1500.currentTarget)
  request.r(i1501[9], i1501[10], 0, i1500, 'pickupSound')
  request.r(i1501[11], i1501[12], 0, i1500, 'tut')
  request.r(i1501[13], i1501[14], 0, i1500, 'tut2')
  i1500.lockPlay = !!i1501[15]
  return i1500
}

Deserializers["ItemDrag"] = function (request, data, root) {
  var i1508 = root || request.c( 'ItemDrag' )
  var i1509 = data
  request.r(i1509[0], i1509[1], 0, i1508, 'DragArea')
  request.r(i1509[2], i1509[3], 0, i1508, 'Item')
  request.r(i1509[4], i1509[5], 0, i1508, 'Icon')
  return i1508
}

Deserializers["ItemClick"] = function (request, data, root) {
  var i1512 = root || request.c( 'ItemClick' )
  var i1513 = data
  request.r(i1513[0], i1513[1], 0, i1512, 'ClickArea')
  request.r(i1513[2], i1513[3], 0, i1512, 'Item')
  request.r(i1513[4], i1513[5], 0, i1512, 'Sound')
  request.r(i1513[6], i1513[7], 0, i1512, 'ActiveObject')
  return i1512
}

Deserializers["GameController"] = function (request, data, root) {
  var i1514 = root || request.c( 'GameController' )
  var i1515 = data
  i1514.OnComplete = request.d('System.Action', i1515[0], i1514.OnComplete)
  i1514.CompleteStep = request.d('System.Action', i1515[1], i1514.CompleteStep)
  var i1517 = i1515[2]
  var i1516 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationController')))
  for(var i = 0; i < i1517.length; i += 2) {
  request.r(i1517[i + 0], i1517[i + 1], 1, i1516, '')
  }
  i1514.skeletons = i1516
  request.r(i1515[3], i1515[4], 0, i1514, 'character')
  request.r(i1515[5], i1515[6], 0, i1514, 'normal')
  request.r(i1515[7], i1515[8], 0, i1514, 'win')
  request.r(i1515[9], i1515[10], 0, i1514, 'loseScene')
  request.r(i1515[11], i1515[12], 0, i1514, 'winScene')
  i1514.complete = !!i1515[13]
  i1514.currentStep = i1515[14]
  i1514.maxStep = i1515[15]
  request.r(i1515[16], i1515[17], 0, i1514, 'currentStepText')
  request.r(i1515[18], i1515[19], 0, i1514, 'maxStepText')
  request.r(i1515[20], i1515[21], 0, i1514, 'slider')
  i1514.DelayComplete = i1515[22]
  i1514.subTime = i1515[23]
  i1514.completeSub = request.d('Sub', i1515[24], i1514.completeSub)
  var i1519 = i1515[25]
  var i1518 = new (System.Collections.Generic.List$1(Bridge.ns('Sub')))
  for(var i = 0; i < i1519.length; i += 1) {
    i1518.add(request.d('Sub', i1519[i + 0]));
  }
  i1514.subs = i1518
  request.r(i1515[26], i1515[27], 0, i1514, 'sub')
  request.r(i1515[28], i1515[29], 0, i1514, 'subText')
  return i1514
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1520 = root || request.c( 'System.Action' )
  var i1521 = data
  return i1520
}

Deserializers["Sub"] = function (request, data, root) {
  var i1524 = root || request.c( 'Sub' )
  var i1525 = data
  request.r(i1525[0], i1525[1], 0, i1524, 'Item')
  i1524.SubText = i1525[2]
  request.r(i1525[3], i1525[4], 0, i1524, 'SubSound')
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1529 = data
  i1528.ambientIntensity = i1529[0]
  i1528.reflectionIntensity = i1529[1]
  i1528.ambientMode = i1529[2]
  i1528.ambientLight = new pc.Color(i1529[3], i1529[4], i1529[5], i1529[6])
  i1528.ambientSkyColor = new pc.Color(i1529[7], i1529[8], i1529[9], i1529[10])
  i1528.ambientGroundColor = new pc.Color(i1529[11], i1529[12], i1529[13], i1529[14])
  i1528.ambientEquatorColor = new pc.Color(i1529[15], i1529[16], i1529[17], i1529[18])
  i1528.fogColor = new pc.Color(i1529[19], i1529[20], i1529[21], i1529[22])
  i1528.fogEndDistance = i1529[23]
  i1528.fogStartDistance = i1529[24]
  i1528.fogDensity = i1529[25]
  i1528.fog = !!i1529[26]
  request.r(i1529[27], i1529[28], 0, i1528, 'skybox')
  i1528.fogMode = i1529[29]
  var i1531 = i1529[30]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 1) {
    i1530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1531[i + 0]) );
  }
  i1528.lightmaps = i1530
  i1528.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1529[31], i1528.lightProbes)
  i1528.lightmapsMode = i1529[32]
  i1528.mixedBakeMode = i1529[33]
  i1528.environmentLightingMode = i1529[34]
  i1528.ambientProbe = new pc.SphericalHarmonicsL2(i1529[35])
  request.r(i1529[36], i1529[37], 0, i1528, 'customReflection')
  request.r(i1529[38], i1529[39], 0, i1528, 'defaultReflection')
  i1528.defaultReflectionMode = i1529[40]
  i1528.defaultReflectionResolution = i1529[41]
  i1528.sunLightObjectId = i1529[42]
  i1528.pixelLightCount = i1529[43]
  i1528.defaultReflectionHDR = !!i1529[44]
  i1528.hasLightDataAsset = !!i1529[45]
  i1528.hasManualGenerate = !!i1529[46]
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1535 = data
  request.r(i1535[0], i1535[1], 0, i1534, 'lightmapColor')
  request.r(i1535[2], i1535[3], 0, i1534, 'lightmapDirection')
  request.r(i1535[4], i1535[5], 0, i1534, 'shadowMask')
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1536 = root || new UnityEngine.LightProbes()
  var i1537 = data
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1545 = data
  var i1547 = i1545[0]
  var i1546 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1547[i + 0]));
  }
  i1544.ShaderCompilationErrors = i1546
  i1544.name = i1545[1]
  i1544.guid = i1545[2]
  var i1549 = i1545[3]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 1) {
    i1548.push( i1549[i + 0] );
  }
  i1544.shaderDefinedKeywords = i1548
  var i1551 = i1545[4]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 1) {
    i1550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1551[i + 0]) );
  }
  i1544.passes = i1550
  var i1553 = i1545[5]
  var i1552 = []
  for(var i = 0; i < i1553.length; i += 1) {
    i1552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1553[i + 0]) );
  }
  i1544.usePasses = i1552
  var i1555 = i1545[6]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 1) {
    i1554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1555[i + 0]) );
  }
  i1544.defaultParameterValues = i1554
  request.r(i1545[7], i1545[8], 0, i1544, 'unityFallbackShader')
  i1544.readDepth = !!i1545[9]
  i1544.hasDepthOnlyPass = !!i1545[10]
  i1544.isCreatedByShaderGraph = !!i1545[11]
  i1544.disableBatching = !!i1545[12]
  i1544.compiled = !!i1545[13]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1559 = data
  i1558.shaderName = i1559[0]
  i1558.errorMessage = i1559[1]
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1562 = root || new pc.UnityShaderPass()
  var i1563 = data
  i1562.id = i1563[0]
  i1562.subShaderIndex = i1563[1]
  i1562.name = i1563[2]
  i1562.passType = i1563[3]
  i1562.grabPassTextureName = i1563[4]
  i1562.usePass = !!i1563[5]
  i1562.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1563[6], i1562.zTest)
  i1562.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1563[7], i1562.zWrite)
  i1562.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1563[8], i1562.culling)
  i1562.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1563[9], i1562.blending)
  i1562.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1563[10], i1562.alphaBlending)
  i1562.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1563[11], i1562.colorWriteMask)
  i1562.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1563[12], i1562.offsetUnits)
  i1562.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1563[13], i1562.offsetFactor)
  i1562.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1563[14], i1562.stencilRef)
  i1562.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1563[15], i1562.stencilReadMask)
  i1562.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1563[16], i1562.stencilWriteMask)
  i1562.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1563[17], i1562.stencilOp)
  i1562.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1563[18], i1562.stencilOpFront)
  i1562.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1563[19], i1562.stencilOpBack)
  var i1565 = i1563[20]
  var i1564 = []
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1565[i + 0]) );
  }
  i1562.tags = i1564
  var i1567 = i1563[21]
  var i1566 = []
  for(var i = 0; i < i1567.length; i += 1) {
    i1566.push( i1567[i + 0] );
  }
  i1562.passDefinedKeywords = i1566
  var i1569 = i1563[22]
  var i1568 = []
  for(var i = 0; i < i1569.length; i += 1) {
    i1568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1569[i + 0]) );
  }
  i1562.passDefinedKeywordGroups = i1568
  var i1571 = i1563[23]
  var i1570 = []
  for(var i = 0; i < i1571.length; i += 1) {
    i1570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1571[i + 0]) );
  }
  i1562.variants = i1570
  var i1573 = i1563[24]
  var i1572 = []
  for(var i = 0; i < i1573.length; i += 1) {
    i1572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1573[i + 0]) );
  }
  i1562.excludedVariants = i1572
  i1562.hasDepthReader = !!i1563[25]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1575 = data
  i1574.val = i1575[0]
  i1574.name = i1575[1]
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1577 = data
  i1576.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1577[0], i1576.src)
  i1576.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1577[1], i1576.dst)
  i1576.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1577[2], i1576.op)
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1579 = data
  i1578.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1579[0], i1578.pass)
  i1578.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1579[1], i1578.fail)
  i1578.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1579[2], i1578.zFail)
  i1578.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1579[3], i1578.comp)
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1583 = data
  i1582.name = i1583[0]
  i1582.value = i1583[1]
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1587 = data
  var i1589 = i1587[0]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( i1589[i + 0] );
  }
  i1586.keywords = i1588
  i1586.hasDiscard = !!i1587[1]
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1593 = data
  i1592.passId = i1593[0]
  i1592.subShaderIndex = i1593[1]
  var i1595 = i1593[2]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 1) {
    i1594.push( i1595[i + 0] );
  }
  i1592.keywords = i1594
  i1592.vertexProgram = i1593[3]
  i1592.fragmentProgram = i1593[4]
  i1592.exportedForWebGl2 = !!i1593[5]
  i1592.readDepth = !!i1593[6]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1599 = data
  request.r(i1599[0], i1599[1], 0, i1598, 'shader')
  i1598.pass = i1599[2]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1603 = data
  i1602.name = i1603[0]
  i1602.type = i1603[1]
  i1602.value = new pc.Vec4( i1603[2], i1603[3], i1603[4], i1603[5] )
  i1602.textureValue = i1603[6]
  i1602.shaderPropertyFlag = i1603[7]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1605 = data
  i1604.name = i1605[0]
  request.r(i1605[1], i1605[2], 0, i1604, 'texture')
  i1604.aabb = i1605[3]
  i1604.vertices = i1605[4]
  i1604.triangles = i1605[5]
  i1604.textureRect = UnityEngine.Rect.MinMaxRect(i1605[6], i1605[7], i1605[8], i1605[9])
  i1604.packedRect = UnityEngine.Rect.MinMaxRect(i1605[10], i1605[11], i1605[12], i1605[13])
  i1604.border = new pc.Vec4( i1605[14], i1605[15], i1605[16], i1605[17] )
  i1604.transparency = i1605[18]
  i1604.bounds = i1605[19]
  i1604.pixelsPerUnit = i1605[20]
  i1604.textureWidth = i1605[21]
  i1604.textureHeight = i1605[22]
  i1604.nativeSize = new pc.Vec2( i1605[23], i1605[24] )
  i1604.pivot = new pc.Vec2( i1605[25], i1605[26] )
  i1604.textureRectOffset = new pc.Vec2( i1605[27], i1605[28] )
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1607 = data
  i1606.name = i1607[0]
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1609 = data
  i1608.name = i1609[0]
  i1608.ascent = i1609[1]
  i1608.originalLineHeight = i1609[2]
  i1608.fontSize = i1609[3]
  var i1611 = i1609[4]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1611[i + 0]) );
  }
  i1608.characterInfo = i1610
  request.r(i1609[5], i1609[6], 0, i1608, 'texture')
  i1608.originalFontSize = i1609[7]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1615 = data
  i1614.index = i1615[0]
  i1614.advance = i1615[1]
  i1614.bearing = i1615[2]
  i1614.glyphWidth = i1615[3]
  i1614.glyphHeight = i1615[4]
  i1614.minX = i1615[5]
  i1614.maxX = i1615[6]
  i1614.minY = i1615[7]
  i1614.maxY = i1615[8]
  i1614.uvBottomLeftX = i1615[9]
  i1614.uvBottomLeftY = i1615[10]
  i1614.uvBottomRightX = i1615[11]
  i1614.uvBottomRightY = i1615[12]
  i1614.uvTopLeftX = i1615[13]
  i1614.uvTopLeftY = i1615[14]
  i1614.uvTopRightX = i1615[15]
  i1614.uvTopRightY = i1615[16]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1617 = data
  i1616.name = i1617[0]
  i1616.bytes64 = i1617[1]
  i1616.data = i1617[2]
  return i1616
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1618 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1619 = data
  var i1621 = i1619[0]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 2) {
  request.r(i1621[i + 0], i1621[i + 1], 2, i1620, '')
  }
  i1618.atlasAssets = i1620
  i1618.scale = i1619[1]
  request.r(i1619[2], i1619[3], 0, i1618, 'skeletonJSON')
  i1618.isUpgradingBlendModeMaterials = !!i1619[4]
  i1618.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1619[5], i1618.blendModeMaterials)
  var i1623 = i1619[6]
  var i1622 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1623.length; i += 2) {
  request.r(i1623[i + 0], i1623[i + 1], 1, i1622, '')
  }
  i1618.skeletonDataModifiers = i1622
  var i1625 = i1619[7]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.push( i1625[i + 0] );
  }
  i1618.fromAnimation = i1624
  var i1627 = i1619[8]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.push( i1627[i + 0] );
  }
  i1618.toAnimation = i1626
  i1618.duration = i1619[9]
  i1618.defaultMix = i1619[10]
  request.r(i1619[11], i1619[12], 0, i1618, 'controller')
  return i1618
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1630 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1631 = data
  i1630.applyAdditiveMaterial = !!i1631[0]
  var i1633 = i1631[1]
  var i1632 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1633[i + 0]));
  }
  i1630.additiveMaterials = i1632
  var i1635 = i1631[2]
  var i1634 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1635[i + 0]));
  }
  i1630.multiplyMaterials = i1634
  var i1637 = i1631[3]
  var i1636 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1637[i + 0]));
  }
  i1630.screenMaterials = i1636
  i1630.requiresBlendModeMaterials = !!i1631[4]
  return i1630
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1640 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1641 = data
  i1640.pageName = i1641[0]
  request.r(i1641[1], i1641[2], 0, i1640, 'material')
  return i1640
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1644 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1645 = data
  request.r(i1645[0], i1645[1], 0, i1644, 'atlasFile')
  var i1647 = i1645[2]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 2) {
  request.r(i1647[i + 0], i1647[i + 1], 2, i1646, '')
  }
  i1644.materials = i1646
  i1644.textureLoadingMode = i1645[3]
  request.r(i1645[4], i1645[5], 0, i1644, 'onDemandTextureLoader')
  return i1644
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1648 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1649 = data
  i1648.useSafeMode = !!i1649[0]
  i1648.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1649[1], i1648.safeModeOptions)
  i1648.timeScale = i1649[2]
  i1648.unscaledTimeScale = i1649[3]
  i1648.useSmoothDeltaTime = !!i1649[4]
  i1648.maxSmoothUnscaledTime = i1649[5]
  i1648.rewindCallbackMode = i1649[6]
  i1648.showUnityEditorReport = !!i1649[7]
  i1648.logBehaviour = i1649[8]
  i1648.drawGizmos = !!i1649[9]
  i1648.defaultRecyclable = !!i1649[10]
  i1648.defaultAutoPlay = i1649[11]
  i1648.defaultUpdateType = i1649[12]
  i1648.defaultTimeScaleIndependent = !!i1649[13]
  i1648.defaultEaseType = i1649[14]
  i1648.defaultEaseOvershootOrAmplitude = i1649[15]
  i1648.defaultEasePeriod = i1649[16]
  i1648.defaultAutoKill = !!i1649[17]
  i1648.defaultLoopType = i1649[18]
  i1648.debugMode = !!i1649[19]
  i1648.debugStoreTargetId = !!i1649[20]
  i1648.showPreviewPanel = !!i1649[21]
  i1648.storeSettingsLocation = i1649[22]
  i1648.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1649[23], i1648.modules)
  i1648.createASMDEF = !!i1649[24]
  i1648.showPlayingTweens = !!i1649[25]
  i1648.showPausedTweens = !!i1649[26]
  return i1648
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1650 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1651 = data
  i1650.logBehaviour = i1651[0]
  i1650.nestedTweenFailureBehaviour = i1651[1]
  return i1650
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1652 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1653 = data
  i1652.showPanel = !!i1653[0]
  i1652.audioEnabled = !!i1653[1]
  i1652.physicsEnabled = !!i1653[2]
  i1652.physics2DEnabled = !!i1653[3]
  i1652.spriteEnabled = !!i1653[4]
  i1652.uiEnabled = !!i1653[5]
  i1652.textMeshProEnabled = !!i1653[6]
  i1652.tk2DEnabled = !!i1653[7]
  i1652.deAudioEnabled = !!i1653[8]
  i1652.deUnityExtendedEnabled = !!i1653[9]
  i1652.epoOutlineEnabled = !!i1653[10]
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1655 = data
  var i1657 = i1655[0]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1657[i + 0]) );
  }
  i1654.files = i1656
  i1654.componentToPrefabIds = i1655[1]
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1661 = data
  i1660.path = i1661[0]
  request.r(i1661[1], i1661[2], 0, i1660, 'unityObject')
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1663 = data
  var i1665 = i1663[0]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 1) {
    i1664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1665[i + 0]) );
  }
  i1662.scriptsExecutionOrder = i1664
  var i1667 = i1663[1]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1667[i + 0]) );
  }
  i1662.sortingLayers = i1666
  var i1669 = i1663[2]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1669[i + 0]) );
  }
  i1662.cullingLayers = i1668
  i1662.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1663[3], i1662.timeSettings)
  i1662.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1663[4], i1662.physicsSettings)
  i1662.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1663[5], i1662.physics2DSettings)
  i1662.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1663[6], i1662.qualitySettings)
  i1662.enableRealtimeShadows = !!i1663[7]
  i1662.enableAutoInstancing = !!i1663[8]
  i1662.enableStaticBatching = !!i1663[9]
  i1662.enableDynamicBatching = !!i1663[10]
  i1662.usePreservativeDynamicBatching = !!i1663[11]
  i1662.lightmapEncodingQuality = i1663[12]
  i1662.desiredColorSpace = i1663[13]
  var i1671 = i1663[14]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( i1671[i + 0] );
  }
  i1662.allTags = i1670
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1675 = data
  i1674.name = i1675[0]
  i1674.value = i1675[1]
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1679 = data
  i1678.id = i1679[0]
  i1678.name = i1679[1]
  i1678.value = i1679[2]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1683 = data
  i1682.id = i1683[0]
  i1682.name = i1683[1]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1685 = data
  i1684.fixedDeltaTime = i1685[0]
  i1684.maximumDeltaTime = i1685[1]
  i1684.timeScale = i1685[2]
  i1684.maximumParticleTimestep = i1685[3]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1687 = data
  i1686.gravity = new pc.Vec3( i1687[0], i1687[1], i1687[2] )
  i1686.defaultSolverIterations = i1687[3]
  i1686.bounceThreshold = i1687[4]
  i1686.autoSyncTransforms = !!i1687[5]
  i1686.autoSimulation = !!i1687[6]
  var i1689 = i1687[7]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1689[i + 0]) );
  }
  i1686.collisionMatrix = i1688
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1693 = data
  i1692.enabled = !!i1693[0]
  i1692.layerId = i1693[1]
  i1692.otherLayerId = i1693[2]
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1695 = data
  request.r(i1695[0], i1695[1], 0, i1694, 'material')
  i1694.gravity = new pc.Vec2( i1695[2], i1695[3] )
  i1694.positionIterations = i1695[4]
  i1694.velocityIterations = i1695[5]
  i1694.velocityThreshold = i1695[6]
  i1694.maxLinearCorrection = i1695[7]
  i1694.maxAngularCorrection = i1695[8]
  i1694.maxTranslationSpeed = i1695[9]
  i1694.maxRotationSpeed = i1695[10]
  i1694.baumgarteScale = i1695[11]
  i1694.baumgarteTOIScale = i1695[12]
  i1694.timeToSleep = i1695[13]
  i1694.linearSleepTolerance = i1695[14]
  i1694.angularSleepTolerance = i1695[15]
  i1694.defaultContactOffset = i1695[16]
  i1694.autoSimulation = !!i1695[17]
  i1694.queriesHitTriggers = !!i1695[18]
  i1694.queriesStartInColliders = !!i1695[19]
  i1694.callbacksOnDisable = !!i1695[20]
  i1694.reuseCollisionCallbacks = !!i1695[21]
  i1694.autoSyncTransforms = !!i1695[22]
  var i1697 = i1695[23]
  var i1696 = []
  for(var i = 0; i < i1697.length; i += 1) {
    i1696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1697[i + 0]) );
  }
  i1694.collisionMatrix = i1696
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1701 = data
  i1700.enabled = !!i1701[0]
  i1700.layerId = i1701[1]
  i1700.otherLayerId = i1701[2]
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1703 = data
  var i1705 = i1703[0]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1705[i + 0]) );
  }
  i1702.qualityLevels = i1704
  var i1707 = i1703[1]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( i1707[i + 0] );
  }
  i1702.names = i1706
  i1702.shadows = i1703[2]
  i1702.anisotropicFiltering = i1703[3]
  i1702.antiAliasing = i1703[4]
  i1702.lodBias = i1703[5]
  i1702.shadowCascades = i1703[6]
  i1702.shadowDistance = i1703[7]
  i1702.shadowmaskMode = i1703[8]
  i1702.shadowProjection = i1703[9]
  i1702.shadowResolution = i1703[10]
  i1702.softParticles = !!i1703[11]
  i1702.softVegetation = !!i1703[12]
  i1702.activeColorSpace = i1703[13]
  i1702.desiredColorSpace = i1703[14]
  i1702.masterTextureLimit = i1703[15]
  i1702.maxQueuedFrames = i1703[16]
  i1702.particleRaycastBudget = i1703[17]
  i1702.pixelLightCount = i1703[18]
  i1702.realtimeReflectionProbes = !!i1703[19]
  i1702.shadowCascade2Split = i1703[20]
  i1702.shadowCascade4Split = new pc.Vec3( i1703[21], i1703[22], i1703[23] )
  i1702.streamingMipmapsActive = !!i1703[24]
  i1702.vSyncCount = i1703[25]
  i1702.asyncUploadBufferSize = i1703[26]
  i1702.asyncUploadTimeSlice = i1703[27]
  i1702.billboardsFaceCameraPosition = !!i1703[28]
  i1702.shadowNearPlaneOffset = i1703[29]
  i1702.streamingMipmapsMemoryBudget = i1703[30]
  i1702.maximumLODLevel = i1703[31]
  i1702.streamingMipmapsAddAllCameras = !!i1703[32]
  i1702.streamingMipmapsMaxLevelReduction = i1703[33]
  i1702.streamingMipmapsRenderersPerFrame = i1703[34]
  i1702.resolutionScalingFixedDPIFactor = i1703[35]
  i1702.streamingMipmapsMaxFileIORequests = i1703[36]
  i1702.currentQualityLevel = i1703[37]
  return i1702
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1710 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1711 = data
  request.r(i1711[0], i1711[1], 0, i1710, 'm_ObjectArgument')
  i1710.m_ObjectArgumentAssemblyTypeName = i1711[2]
  i1710.m_IntArgument = i1711[3]
  i1710.m_FloatArgument = i1711[4]
  i1710.m_StringArgument = i1711[5]
  i1710.m_BoolArgument = !!i1711[6]
  return i1710
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[2],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[59],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[2],"73":[74],"75":[76],"77":[76],"8":[7],"22":[18],"78":[79],"80":[7],"81":[11,7],"82":[74],"18":[11,7],"83":[84,74],"85":[74,86],"87":[74],"88":[52],"89":[59],"90":[79],"91":[92],"93":[94],"95":[2],"96":[97],"98":[7],"99":[11,7],"100":[74],"101":[11,7],"102":[7],"103":[7],"104":[74,7],"105":[7,11],"106":[107],"108":[107],"109":[107],"110":[7],"111":[7],"10":[8],"12":[11,7],"112":[7],"9":[8],"113":[7],"114":[7],"115":[7],"116":[7],"117":[7],"118":[7],"119":[7],"17":[7],"120":[7],"121":[11,7],"122":[7],"123":[7],"124":[7],"16":[7],"13":[11,7],"125":[7],"126":[5],"127":[5],"6":[5],"128":[5],"129":[2],"130":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.Slider","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","UnityEngine.GameObject","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","CharacterSkinController","DG.Tweening.DOTweenAnimation","TutController","UnityEngine.UI.Button","LunaController","LayoutController","AudioController","UnityEngine.Transform","InteractController","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "08/14/2026 06:35:56";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BEQ_V32_NgocNDL_TamNTM";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1869";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4334";

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

Deserializers.buildID = "79ae72f5-1e4d-49cb-8db4-14e99f0d950d";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

