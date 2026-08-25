var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1314 = root || request.c( 'UnityEngine.JointSpring' )
  var i1315 = data
  i1314.spring = i1315[0]
  i1314.damper = i1315[1]
  i1314.targetPosition = i1315[2]
  return i1314
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1316 = root || request.c( 'UnityEngine.JointMotor' )
  var i1317 = data
  i1316.m_TargetVelocity = i1317[0]
  i1316.m_Force = i1317[1]
  i1316.m_FreeSpin = i1317[2]
  return i1316
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1318 = root || request.c( 'UnityEngine.JointLimits' )
  var i1319 = data
  i1318.m_Min = i1319[0]
  i1318.m_Max = i1319[1]
  i1318.m_Bounciness = i1319[2]
  i1318.m_BounceMinVelocity = i1319[3]
  i1318.m_ContactDistance = i1319[4]
  i1318.minBounce = i1319[5]
  i1318.maxBounce = i1319[6]
  return i1318
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1320 = root || request.c( 'UnityEngine.JointDrive' )
  var i1321 = data
  i1320.m_PositionSpring = i1321[0]
  i1320.m_PositionDamper = i1321[1]
  i1320.m_MaximumForce = i1321[2]
  i1320.m_UseAcceleration = i1321[3]
  return i1320
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1322 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1323 = data
  i1322.m_Spring = i1323[0]
  i1322.m_Damper = i1323[1]
  return i1322
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1324 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1325 = data
  i1324.m_Limit = i1325[0]
  i1324.m_Bounciness = i1325[1]
  i1324.m_ContactDistance = i1325[2]
  return i1324
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1326 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1327 = data
  i1326.m_ExtremumSlip = i1327[0]
  i1326.m_ExtremumValue = i1327[1]
  i1326.m_AsymptoteSlip = i1327[2]
  i1326.m_AsymptoteValue = i1327[3]
  i1326.m_Stiffness = i1327[4]
  return i1326
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1328 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1329 = data
  i1328.m_LowerAngle = i1329[0]
  i1328.m_UpperAngle = i1329[1]
  return i1328
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1330 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1331 = data
  i1330.m_MotorSpeed = i1331[0]
  i1330.m_MaximumMotorTorque = i1331[1]
  return i1330
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1332 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1333 = data
  i1332.m_DampingRatio = i1333[0]
  i1332.m_Frequency = i1333[1]
  i1332.m_Angle = i1333[2]
  return i1332
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1334 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1335 = data
  i1334.m_LowerTranslation = i1335[0]
  i1334.m_UpperTranslation = i1335[1]
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1337 = data
  i1336.name = i1337[0]
  i1336.width = i1337[1]
  i1336.height = i1337[2]
  i1336.mipmapCount = i1337[3]
  i1336.anisoLevel = i1337[4]
  i1336.filterMode = i1337[5]
  i1336.hdr = !!i1337[6]
  i1336.format = i1337[7]
  i1336.wrapMode = i1337[8]
  i1336.alphaIsTransparency = !!i1337[9]
  i1336.alphaSource = i1337[10]
  i1336.graphicsFormat = i1337[11]
  i1336.sRGBTexture = !!i1337[12]
  i1336.desiredColorSpace = i1337[13]
  i1336.wrapU = i1337[14]
  i1336.wrapV = i1337[15]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1338 = root || new pc.UnityMaterial()
  var i1339 = data
  i1338.name = i1339[0]
  request.r(i1339[1], i1339[2], 0, i1338, 'shader')
  i1338.renderQueue = i1339[3]
  i1338.enableInstancing = !!i1339[4]
  var i1341 = i1339[5]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1341[i + 0]) );
  }
  i1338.floatParameters = i1340
  var i1343 = i1339[6]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1343[i + 0]) );
  }
  i1338.colorParameters = i1342
  var i1345 = i1339[7]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1345[i + 0]) );
  }
  i1338.vectorParameters = i1344
  var i1347 = i1339[8]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1347[i + 0]) );
  }
  i1338.textureParameters = i1346
  var i1349 = i1339[9]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1349[i + 0]) );
  }
  i1338.materialFlags = i1348
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1353 = data
  i1352.name = i1353[0]
  i1352.value = i1353[1]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1357 = data
  i1356.name = i1357[0]
  i1356.value = new pc.Color(i1357[1], i1357[2], i1357[3], i1357[4])
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1361 = data
  i1360.name = i1361[0]
  i1360.value = new pc.Vec4( i1361[1], i1361[2], i1361[3], i1361[4] )
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1365 = data
  i1364.name = i1365[0]
  request.r(i1365[1], i1365[2], 0, i1364, 'value')
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1369 = data
  i1368.name = i1369[0]
  i1368.enabled = !!i1369[1]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1371 = data
  i1370.name = i1371[0]
  i1370.index = i1371[1]
  i1370.startup = !!i1371[2]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1373 = data
  i1372.aspect = i1373[0]
  i1372.orthographic = !!i1373[1]
  i1372.orthographicSize = i1373[2]
  i1372.backgroundColor = new pc.Color(i1373[3], i1373[4], i1373[5], i1373[6])
  i1372.nearClipPlane = i1373[7]
  i1372.farClipPlane = i1373[8]
  i1372.fieldOfView = i1373[9]
  i1372.depth = i1373[10]
  i1372.clearFlags = i1373[11]
  i1372.cullingMask = i1373[12]
  i1372.rect = i1373[13]
  request.r(i1373[14], i1373[15], 0, i1372, 'targetTexture')
  i1372.usePhysicalProperties = !!i1373[16]
  i1372.focalLength = i1373[17]
  i1372.sensorSize = new pc.Vec2( i1373[18], i1373[19] )
  i1372.lensShift = new pc.Vec2( i1373[20], i1373[21] )
  i1372.gateFit = i1373[22]
  i1372.commandBufferCount = i1373[23]
  i1372.cameraType = i1373[24]
  i1372.enabled = !!i1373[25]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1375 = data
  i1374.name = i1375[0]
  i1374.tagId = i1375[1]
  i1374.enabled = !!i1375[2]
  i1374.isStatic = !!i1375[3]
  i1374.layer = i1375[4]
  return i1374
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1376 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1377 = data
  request.r(i1377[0], i1377[1], 0, i1376, 'm_FirstSelected')
  i1376.m_sendNavigationEvents = !!i1377[2]
  i1376.m_DragThreshold = i1377[3]
  return i1376
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1378 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1379 = data
  i1378.m_HorizontalAxis = i1379[0]
  i1378.m_VerticalAxis = i1379[1]
  i1378.m_SubmitButton = i1379[2]
  i1378.m_CancelButton = i1379[3]
  i1378.m_InputActionsPerSecond = i1379[4]
  i1378.m_RepeatDelay = i1379[5]
  i1378.m_ForceModuleActive = !!i1379[6]
  i1378.m_SendPointerHoverToParent = !!i1379[7]
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1381 = data
  i1380.pivot = new pc.Vec2( i1381[0], i1381[1] )
  i1380.anchorMin = new pc.Vec2( i1381[2], i1381[3] )
  i1380.anchorMax = new pc.Vec2( i1381[4], i1381[5] )
  i1380.sizeDelta = new pc.Vec2( i1381[6], i1381[7] )
  i1380.anchoredPosition3D = new pc.Vec3( i1381[8], i1381[9], i1381[10] )
  i1380.rotation = new pc.Quat(i1381[11], i1381[12], i1381[13], i1381[14])
  i1380.scale = new pc.Vec3( i1381[15], i1381[16], i1381[17] )
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1383 = data
  i1382.planeDistance = i1383[0]
  i1382.referencePixelsPerUnit = i1383[1]
  i1382.isFallbackOverlay = !!i1383[2]
  i1382.renderMode = i1383[3]
  i1382.renderOrder = i1383[4]
  i1382.sortingLayerName = i1383[5]
  i1382.sortingOrder = i1383[6]
  i1382.scaleFactor = i1383[7]
  request.r(i1383[8], i1383[9], 0, i1382, 'worldCamera')
  i1382.overrideSorting = !!i1383[10]
  i1382.pixelPerfect = !!i1383[11]
  i1382.targetDisplay = i1383[12]
  i1382.overridePixelPerfect = !!i1383[13]
  i1382.enabled = !!i1383[14]
  return i1382
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1384 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1385 = data
  i1384.m_UiScaleMode = i1385[0]
  i1384.m_ReferencePixelsPerUnit = i1385[1]
  i1384.m_ScaleFactor = i1385[2]
  i1384.m_ReferenceResolution = new pc.Vec2( i1385[3], i1385[4] )
  i1384.m_ScreenMatchMode = i1385[5]
  i1384.m_MatchWidthOrHeight = i1385[6]
  i1384.m_PhysicalUnit = i1385[7]
  i1384.m_FallbackScreenDPI = i1385[8]
  i1384.m_DefaultSpriteDPI = i1385[9]
  i1384.m_DynamicPixelsPerUnit = i1385[10]
  i1384.m_PresetInfoIsWorld = !!i1385[11]
  return i1384
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1387 = data
  i1386.m_IgnoreReversedGraphics = !!i1387[0]
  i1386.m_BlockingObjects = i1387[1]
  i1386.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1387[2] )
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1389 = data
  i1388.cullTransparentMesh = !!i1389[0]
  return i1388
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1390 = root || request.c( 'UnityEngine.UI.Image' )
  var i1391 = data
  request.r(i1391[0], i1391[1], 0, i1390, 'm_Sprite')
  i1390.m_Type = i1391[2]
  i1390.m_PreserveAspect = !!i1391[3]
  i1390.m_FillCenter = !!i1391[4]
  i1390.m_FillMethod = i1391[5]
  i1390.m_FillAmount = i1391[6]
  i1390.m_FillClockwise = !!i1391[7]
  i1390.m_FillOrigin = i1391[8]
  i1390.m_UseSpriteMesh = !!i1391[9]
  i1390.m_PixelsPerUnitMultiplier = i1391[10]
  request.r(i1391[11], i1391[12], 0, i1390, 'm_Material')
  i1390.m_Maskable = !!i1391[13]
  i1390.m_Color = new pc.Color(i1391[14], i1391[15], i1391[16], i1391[17])
  i1390.m_RaycastTarget = !!i1391[18]
  i1390.m_RaycastPadding = new pc.Vec4( i1391[19], i1391[20], i1391[21], i1391[22] )
  return i1390
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1392 = root || request.c( 'UnityEngine.UI.Text' )
  var i1393 = data
  i1392.m_FontData = request.d('UnityEngine.UI.FontData', i1393[0], i1392.m_FontData)
  i1392.m_Text = i1393[1]
  request.r(i1393[2], i1393[3], 0, i1392, 'm_Material')
  i1392.m_Maskable = !!i1393[4]
  i1392.m_Color = new pc.Color(i1393[5], i1393[6], i1393[7], i1393[8])
  i1392.m_RaycastTarget = !!i1393[9]
  i1392.m_RaycastPadding = new pc.Vec4( i1393[10], i1393[11], i1393[12], i1393[13] )
  return i1392
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1394 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1395 = data
  request.r(i1395[0], i1395[1], 0, i1394, 'm_Font')
  i1394.m_FontSize = i1395[2]
  i1394.m_FontStyle = i1395[3]
  i1394.m_BestFit = !!i1395[4]
  i1394.m_MinSize = i1395[5]
  i1394.m_MaxSize = i1395[6]
  i1394.m_Alignment = i1395[7]
  i1394.m_AlignByGeometry = !!i1395[8]
  i1394.m_RichText = !!i1395[9]
  i1394.m_HorizontalOverflow = i1395[10]
  i1394.m_VerticalOverflow = i1395[11]
  i1394.m_LineSpacing = i1395[12]
  return i1394
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1396 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1397 = data
  request.r(i1397[0], i1397[1], 0, i1396, 'm_FillRect')
  request.r(i1397[2], i1397[3], 0, i1396, 'm_HandleRect')
  i1396.m_Direction = i1397[4]
  i1396.m_MinValue = i1397[5]
  i1396.m_MaxValue = i1397[6]
  i1396.m_WholeNumbers = !!i1397[7]
  i1396.m_Value = i1397[8]
  i1396.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1397[9], i1396.m_OnValueChanged)
  i1396.m_Navigation = request.d('UnityEngine.UI.Navigation', i1397[10], i1396.m_Navigation)
  i1396.m_Transition = i1397[11]
  i1396.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1397[12], i1396.m_Colors)
  i1396.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1397[13], i1396.m_SpriteState)
  i1396.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1397[14], i1396.m_AnimationTriggers)
  i1396.m_Interactable = !!i1397[15]
  request.r(i1397[16], i1397[17], 0, i1396, 'm_TargetGraphic')
  return i1396
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1399 = data
  i1398.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1399[0], i1398.m_PersistentCalls)
  return i1398
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1400 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1401 = data
  var i1403 = i1401[0]
  var i1402 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.add(request.d('UnityEngine.Events.PersistentCall', i1403[i + 0]));
  }
  i1400.m_Calls = i1402
  return i1400
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1406 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1407 = data
  request.r(i1407[0], i1407[1], 0, i1406, 'm_Target')
  i1406.m_TargetAssemblyTypeName = i1407[2]
  i1406.m_MethodName = i1407[3]
  i1406.m_Mode = i1407[4]
  i1406.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1407[5], i1406.m_Arguments)
  i1406.m_CallState = i1407[6]
  return i1406
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1408 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1409 = data
  i1408.m_Mode = i1409[0]
  i1408.m_WrapAround = !!i1409[1]
  request.r(i1409[2], i1409[3], 0, i1408, 'm_SelectOnUp')
  request.r(i1409[4], i1409[5], 0, i1408, 'm_SelectOnDown')
  request.r(i1409[6], i1409[7], 0, i1408, 'm_SelectOnLeft')
  request.r(i1409[8], i1409[9], 0, i1408, 'm_SelectOnRight')
  return i1408
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1410 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1411 = data
  i1410.m_NormalColor = new pc.Color(i1411[0], i1411[1], i1411[2], i1411[3])
  i1410.m_HighlightedColor = new pc.Color(i1411[4], i1411[5], i1411[6], i1411[7])
  i1410.m_PressedColor = new pc.Color(i1411[8], i1411[9], i1411[10], i1411[11])
  i1410.m_SelectedColor = new pc.Color(i1411[12], i1411[13], i1411[14], i1411[15])
  i1410.m_DisabledColor = new pc.Color(i1411[16], i1411[17], i1411[18], i1411[19])
  i1410.m_ColorMultiplier = i1411[20]
  i1410.m_FadeDuration = i1411[21]
  return i1410
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1412 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1413 = data
  request.r(i1413[0], i1413[1], 0, i1412, 'm_HighlightedSprite')
  request.r(i1413[2], i1413[3], 0, i1412, 'm_PressedSprite')
  request.r(i1413[4], i1413[5], 0, i1412, 'm_SelectedSprite')
  request.r(i1413[6], i1413[7], 0, i1412, 'm_DisabledSprite')
  return i1412
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1414 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1415 = data
  i1414.m_NormalTrigger = i1415[0]
  i1414.m_HighlightedTrigger = i1415[1]
  i1414.m_PressedTrigger = i1415[2]
  i1414.m_SelectedTrigger = i1415[3]
  i1414.m_DisabledTrigger = i1415[4]
  return i1414
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1416 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1417 = data
  i1416.m_ShowMaskGraphic = !!i1417[0]
  return i1416
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1418 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1419 = data
  request.r(i1419[0], i1419[1], 0, i1418, 'skeletonDataAsset')
  request.r(i1419[2], i1419[3], 0, i1418, 'additiveMaterial')
  request.r(i1419[4], i1419[5], 0, i1418, 'multiplyMaterial')
  request.r(i1419[6], i1419[7], 0, i1418, 'screenMaterial')
  i1418.initialSkinName = i1419[8]
  i1418.initialFlipX = !!i1419[9]
  i1418.initialFlipY = !!i1419[10]
  i1418.startingAnimation = i1419[11]
  i1418.startingLoop = !!i1419[12]
  i1418.timeScale = i1419[13]
  i1418.freeze = !!i1419[14]
  i1418.layoutScaleMode = i1419[15]
  i1418.updateWhenInvisible = i1419[16]
  i1418.allowMultipleCanvasRenderers = !!i1419[17]
  var i1421 = i1419[18]
  var i1420 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1421.length; i += 2) {
  request.r(i1421[i + 0], i1421[i + 1], 1, i1420, '')
  }
  i1418.canvasRenderers = i1420
  i1418.enableSeparatorSlots = !!i1419[19]
  i1418.updateSeparatorPartLocation = !!i1419[20]
  i1418.updateSeparatorPartScale = !!i1419[21]
  i1418.disableMeshAssignmentOnOverride = !!i1419[22]
  i1418.referenceSize = new pc.Vec2( i1419[23], i1419[24] )
  i1418.referenceScale = i1419[25]
  i1418.rectTransformSize = new pc.Vec2( i1419[26], i1419[27] )
  i1418.editReferenceRect = !!i1419[28]
  var i1423 = i1419[29]
  var i1422 = []
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.push( i1423[i + 0] );
  }
  i1418.separatorSlotNames = i1422
  var i1425 = i1419[30]
  var i1424 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1425.length; i += 2) {
  request.r(i1425[i + 0], i1425[i + 1], 1, i1424, '')
  }
  i1418.separatorParts = i1424
  i1418.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1419[31], i1418.meshGenerator)
  i1418.updateTiming = i1419[32]
  i1418.unscaledTime = !!i1419[33]
  request.r(i1419[34], i1419[35], 0, i1418, 'm_Material')
  i1418.m_Maskable = !!i1419[36]
  i1418.m_Color = new pc.Color(i1419[37], i1419[38], i1419[39], i1419[40])
  i1418.m_RaycastTarget = !!i1419[41]
  i1418.m_RaycastPadding = new pc.Vec4( i1419[42], i1419[43], i1419[44], i1419[45] )
  return i1418
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1432 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1433 = data
  i1432.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1433[0], i1432.settings)
  return i1432
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1434 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1435 = data
  i1434.useClipping = !!i1435[0]
  i1434.zSpacing = i1435[1]
  i1434.pmaVertexColors = !!i1435[2]
  i1434.tintBlack = !!i1435[3]
  i1434.canvasGroupTintBlack = !!i1435[4]
  i1434.calculateTangents = !!i1435[5]
  i1434.addNormals = !!i1435[6]
  i1434.immutableTriangles = !!i1435[7]
  return i1434
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i1436 = root || request.c( 'AnimationController' )
  var i1437 = data
  request.r(i1437[0], i1437[1], 0, i1436, 'skeleton')
  return i1436
}

Deserializers["CharacterSkinController"] = function (request, data, root) {
  var i1438 = root || request.c( 'CharacterSkinController' )
  var i1439 = data
  request.r(i1439[0], i1439[1], 0, i1438, 'skeletonAnimation')
  var i1441 = i1439[2]
  var i1440 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.add(request.d('Item', i1441[i + 0]));
  }
  i1438.leftItems = i1440
  var i1443 = i1439[3]
  var i1442 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.add(request.d('Item', i1443[i + 0]));
  }
  i1438.rightItems = i1442
  i1438.lastItems = request.d('Item', i1439[4], i1438.lastItems)
  return i1438
}

Deserializers["Item"] = function (request, data, root) {
  var i1446 = root || request.c( 'Item' )
  var i1447 = data
  i1446.Piece = i1447[0]
  request.r(i1447[1], i1447[2], 0, i1446, 'ActiveItem')
  i1446.ActiveSkin = i1447[3]
  request.r(i1447[4], i1447[5], 0, i1446, 'ActiveSound')
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1449 = data
  i1448.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1449[0], i1448.main)
  i1448.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1449[1], i1448.colorBySpeed)
  i1448.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1449[2], i1448.colorOverLifetime)
  i1448.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1449[3], i1448.emission)
  i1448.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1449[4], i1448.rotationBySpeed)
  i1448.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1449[5], i1448.rotationOverLifetime)
  i1448.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1449[6], i1448.shape)
  i1448.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1449[7], i1448.sizeBySpeed)
  i1448.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1449[8], i1448.sizeOverLifetime)
  i1448.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1449[9], i1448.textureSheetAnimation)
  i1448.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1449[10], i1448.velocityOverLifetime)
  i1448.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1449[11], i1448.noise)
  i1448.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1449[12], i1448.inheritVelocity)
  i1448.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1449[13], i1448.forceOverLifetime)
  i1448.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1449[14], i1448.limitVelocityOverLifetime)
  i1448.useAutoRandomSeed = !!i1449[15]
  i1448.randomSeed = i1449[16]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1450 = root || new pc.ParticleSystemMain()
  var i1451 = data
  i1450.duration = i1451[0]
  i1450.loop = !!i1451[1]
  i1450.prewarm = !!i1451[2]
  i1450.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[3], i1450.startDelay)
  i1450.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[4], i1450.startLifetime)
  i1450.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[5], i1450.startSpeed)
  i1450.startSize3D = !!i1451[6]
  i1450.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[7], i1450.startSizeX)
  i1450.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[8], i1450.startSizeY)
  i1450.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[9], i1450.startSizeZ)
  i1450.startRotation3D = !!i1451[10]
  i1450.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[11], i1450.startRotationX)
  i1450.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[12], i1450.startRotationY)
  i1450.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[13], i1450.startRotationZ)
  i1450.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1451[14], i1450.startColor)
  i1450.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[15], i1450.gravityModifier)
  i1450.simulationSpace = i1451[16]
  request.r(i1451[17], i1451[18], 0, i1450, 'customSimulationSpace')
  i1450.simulationSpeed = i1451[19]
  i1450.useUnscaledTime = !!i1451[20]
  i1450.scalingMode = i1451[21]
  i1450.playOnAwake = !!i1451[22]
  i1450.maxParticles = i1451[23]
  i1450.emitterVelocityMode = i1451[24]
  i1450.stopAction = i1451[25]
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1452 = root || new pc.MinMaxCurve()
  var i1453 = data
  i1452.mode = i1453[0]
  i1452.curveMin = new pc.AnimationCurve( { keys_flow: i1453[1] } )
  i1452.curveMax = new pc.AnimationCurve( { keys_flow: i1453[2] } )
  i1452.curveMultiplier = i1453[3]
  i1452.constantMin = i1453[4]
  i1452.constantMax = i1453[5]
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1454 = root || new pc.MinMaxGradient()
  var i1455 = data
  i1454.mode = i1455[0]
  i1454.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1455[1], i1454.gradientMin)
  i1454.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1455[2], i1454.gradientMax)
  i1454.colorMin = new pc.Color(i1455[3], i1455[4], i1455[5], i1455[6])
  i1454.colorMax = new pc.Color(i1455[7], i1455[8], i1455[9], i1455[10])
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1457 = data
  i1456.mode = i1457[0]
  var i1459 = i1457[1]
  var i1458 = []
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1459[i + 0]) );
  }
  i1456.colorKeys = i1458
  var i1461 = i1457[2]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1461[i + 0]) );
  }
  i1456.alphaKeys = i1460
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1462 = root || new pc.ParticleSystemColorBySpeed()
  var i1463 = data
  i1462.enabled = !!i1463[0]
  i1462.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1463[1], i1462.color)
  i1462.range = new pc.Vec2( i1463[2], i1463[3] )
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1467 = data
  i1466.color = new pc.Color(i1467[0], i1467[1], i1467[2], i1467[3])
  i1466.time = i1467[4]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1471 = data
  i1470.alpha = i1471[0]
  i1470.time = i1471[1]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1472 = root || new pc.ParticleSystemColorOverLifetime()
  var i1473 = data
  i1472.enabled = !!i1473[0]
  i1472.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1473[1], i1472.color)
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1474 = root || new pc.ParticleSystemEmitter()
  var i1475 = data
  i1474.enabled = !!i1475[0]
  i1474.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1475[1], i1474.rateOverTime)
  i1474.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1475[2], i1474.rateOverDistance)
  var i1477 = i1475[3]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1477[i + 0]) );
  }
  i1474.bursts = i1476
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1480 = root || new pc.ParticleSystemBurst()
  var i1481 = data
  i1480.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1481[0], i1480.count)
  i1480.cycleCount = i1481[1]
  i1480.minCount = i1481[2]
  i1480.maxCount = i1481[3]
  i1480.repeatInterval = i1481[4]
  i1480.time = i1481[5]
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1482 = root || new pc.ParticleSystemRotationBySpeed()
  var i1483 = data
  i1482.enabled = !!i1483[0]
  i1482.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1483[1], i1482.x)
  i1482.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1483[2], i1482.y)
  i1482.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1483[3], i1482.z)
  i1482.separateAxes = !!i1483[4]
  i1482.range = new pc.Vec2( i1483[5], i1483[6] )
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1484 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1485 = data
  i1484.enabled = !!i1485[0]
  i1484.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1485[1], i1484.x)
  i1484.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1485[2], i1484.y)
  i1484.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1485[3], i1484.z)
  i1484.separateAxes = !!i1485[4]
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1486 = root || new pc.ParticleSystemShape()
  var i1487 = data
  i1486.enabled = !!i1487[0]
  i1486.shapeType = i1487[1]
  i1486.randomDirectionAmount = i1487[2]
  i1486.sphericalDirectionAmount = i1487[3]
  i1486.randomPositionAmount = i1487[4]
  i1486.alignToDirection = !!i1487[5]
  i1486.radius = i1487[6]
  i1486.radiusMode = i1487[7]
  i1486.radiusSpread = i1487[8]
  i1486.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1487[9], i1486.radiusSpeed)
  i1486.radiusThickness = i1487[10]
  i1486.angle = i1487[11]
  i1486.length = i1487[12]
  i1486.boxThickness = new pc.Vec3( i1487[13], i1487[14], i1487[15] )
  i1486.meshShapeType = i1487[16]
  request.r(i1487[17], i1487[18], 0, i1486, 'mesh')
  request.r(i1487[19], i1487[20], 0, i1486, 'meshRenderer')
  request.r(i1487[21], i1487[22], 0, i1486, 'skinnedMeshRenderer')
  i1486.useMeshMaterialIndex = !!i1487[23]
  i1486.meshMaterialIndex = i1487[24]
  i1486.useMeshColors = !!i1487[25]
  i1486.normalOffset = i1487[26]
  i1486.arc = i1487[27]
  i1486.arcMode = i1487[28]
  i1486.arcSpread = i1487[29]
  i1486.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1487[30], i1486.arcSpeed)
  i1486.donutRadius = i1487[31]
  i1486.position = new pc.Vec3( i1487[32], i1487[33], i1487[34] )
  i1486.rotation = new pc.Vec3( i1487[35], i1487[36], i1487[37] )
  i1486.scale = new pc.Vec3( i1487[38], i1487[39], i1487[40] )
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1488 = root || new pc.ParticleSystemSizeBySpeed()
  var i1489 = data
  i1488.enabled = !!i1489[0]
  i1488.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1489[1], i1488.x)
  i1488.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1489[2], i1488.y)
  i1488.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1489[3], i1488.z)
  i1488.separateAxes = !!i1489[4]
  i1488.range = new pc.Vec2( i1489[5], i1489[6] )
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1490 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1491 = data
  i1490.enabled = !!i1491[0]
  i1490.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[1], i1490.x)
  i1490.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[2], i1490.y)
  i1490.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[3], i1490.z)
  i1490.separateAxes = !!i1491[4]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1492 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1493 = data
  i1492.enabled = !!i1493[0]
  i1492.mode = i1493[1]
  i1492.animation = i1493[2]
  i1492.numTilesX = i1493[3]
  i1492.numTilesY = i1493[4]
  i1492.useRandomRow = !!i1493[5]
  i1492.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1493[6], i1492.frameOverTime)
  i1492.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1493[7], i1492.startFrame)
  i1492.cycleCount = i1493[8]
  i1492.rowIndex = i1493[9]
  i1492.flipU = i1493[10]
  i1492.flipV = i1493[11]
  i1492.spriteCount = i1493[12]
  var i1495 = i1493[13]
  var i1494 = []
  for(var i = 0; i < i1495.length; i += 2) {
  request.r(i1495[i + 0], i1495[i + 1], 2, i1494, '')
  }
  i1492.sprites = i1494
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1498 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1499 = data
  i1498.enabled = !!i1499[0]
  i1498.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1499[1], i1498.x)
  i1498.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1499[2], i1498.y)
  i1498.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1499[3], i1498.z)
  i1498.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1499[4], i1498.radial)
  i1498.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1499[5], i1498.speedModifier)
  i1498.space = i1499[6]
  i1498.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1499[7], i1498.orbitalX)
  i1498.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1499[8], i1498.orbitalY)
  i1498.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1499[9], i1498.orbitalZ)
  i1498.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1499[10], i1498.orbitalOffsetX)
  i1498.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1499[11], i1498.orbitalOffsetY)
  i1498.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1499[12], i1498.orbitalOffsetZ)
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1500 = root || new pc.ParticleSystemNoise()
  var i1501 = data
  i1500.enabled = !!i1501[0]
  i1500.separateAxes = !!i1501[1]
  i1500.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1501[2], i1500.strengthX)
  i1500.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1501[3], i1500.strengthY)
  i1500.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1501[4], i1500.strengthZ)
  i1500.frequency = i1501[5]
  i1500.damping = !!i1501[6]
  i1500.octaveCount = i1501[7]
  i1500.octaveMultiplier = i1501[8]
  i1500.octaveScale = i1501[9]
  i1500.quality = i1501[10]
  i1500.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1501[11], i1500.scrollSpeed)
  i1500.scrollSpeedMultiplier = i1501[12]
  i1500.remapEnabled = !!i1501[13]
  i1500.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1501[14], i1500.remapX)
  i1500.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1501[15], i1500.remapY)
  i1500.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1501[16], i1500.remapZ)
  i1500.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1501[17], i1500.positionAmount)
  i1500.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1501[18], i1500.rotationAmount)
  i1500.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1501[19], i1500.sizeAmount)
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1502 = root || new pc.ParticleSystemInheritVelocity()
  var i1503 = data
  i1502.enabled = !!i1503[0]
  i1502.mode = i1503[1]
  i1502.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[2], i1502.curve)
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1504 = root || new pc.ParticleSystemForceOverLifetime()
  var i1505 = data
  i1504.enabled = !!i1505[0]
  i1504.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1505[1], i1504.x)
  i1504.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1505[2], i1504.y)
  i1504.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1505[3], i1504.z)
  i1504.space = i1505[4]
  i1504.randomized = !!i1505[5]
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1506 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1507 = data
  i1506.enabled = !!i1507[0]
  i1506.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1507[1], i1506.limit)
  i1506.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1507[2], i1506.limitX)
  i1506.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1507[3], i1506.limitY)
  i1506.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1507[4], i1506.limitZ)
  i1506.dampen = i1507[5]
  i1506.separateAxes = !!i1507[6]
  i1506.space = i1507[7]
  i1506.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1507[8], i1506.drag)
  i1506.multiplyDragByParticleSize = !!i1507[9]
  i1506.multiplyDragByParticleVelocity = !!i1507[10]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1509 = data
  request.r(i1509[0], i1509[1], 0, i1508, 'mesh')
  i1508.meshCount = i1509[2]
  i1508.activeVertexStreamsCount = i1509[3]
  i1508.alignment = i1509[4]
  i1508.renderMode = i1509[5]
  i1508.sortMode = i1509[6]
  i1508.lengthScale = i1509[7]
  i1508.velocityScale = i1509[8]
  i1508.cameraVelocityScale = i1509[9]
  i1508.normalDirection = i1509[10]
  i1508.sortingFudge = i1509[11]
  i1508.minParticleSize = i1509[12]
  i1508.maxParticleSize = i1509[13]
  i1508.pivot = new pc.Vec3( i1509[14], i1509[15], i1509[16] )
  request.r(i1509[17], i1509[18], 0, i1508, 'trailMaterial')
  i1508.applyActiveColorSpace = !!i1509[19]
  i1508.enabled = !!i1509[20]
  request.r(i1509[21], i1509[22], 0, i1508, 'sharedMaterial')
  var i1511 = i1509[23]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 2) {
  request.r(i1511[i + 0], i1511[i + 1], 2, i1510, '')
  }
  i1508.sharedMaterials = i1510
  i1508.receiveShadows = !!i1509[24]
  i1508.shadowCastingMode = i1509[25]
  i1508.sortingLayerID = i1509[26]
  i1508.sortingOrder = i1509[27]
  i1508.lightmapIndex = i1509[28]
  i1508.lightmapSceneIndex = i1509[29]
  i1508.lightmapScaleOffset = new pc.Vec4( i1509[30], i1509[31], i1509[32], i1509[33] )
  i1508.lightProbeUsage = i1509[34]
  i1508.reflectionProbeUsage = i1509[35]
  return i1508
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1514 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1515 = data
  i1514.targetIsSelf = !!i1515[0]
  request.r(i1515[1], i1515[2], 0, i1514, 'targetGO')
  i1514.tweenTargetIsTargetGO = !!i1515[3]
  i1514.delay = i1515[4]
  i1514.duration = i1515[5]
  i1514.easeType = i1515[6]
  i1514.easeCurve = new pc.AnimationCurve( { keys_flow: i1515[7] } )
  i1514.loopType = i1515[8]
  i1514.loops = i1515[9]
  i1514.id = i1515[10]
  i1514.isRelative = !!i1515[11]
  i1514.isFrom = !!i1515[12]
  i1514.isIndependentUpdate = !!i1515[13]
  i1514.autoKill = !!i1515[14]
  i1514.autoGenerate = !!i1515[15]
  i1514.isActive = !!i1515[16]
  i1514.isValid = !!i1515[17]
  request.r(i1515[18], i1515[19], 0, i1514, 'target')
  i1514.animationType = i1515[20]
  i1514.targetType = i1515[21]
  i1514.forcedTargetType = i1515[22]
  i1514.autoPlay = !!i1515[23]
  i1514.useTargetAsV3 = !!i1515[24]
  i1514.endValueFloat = i1515[25]
  i1514.endValueV3 = new pc.Vec3( i1515[26], i1515[27], i1515[28] )
  i1514.endValueV2 = new pc.Vec2( i1515[29], i1515[30] )
  i1514.endValueColor = new pc.Color(i1515[31], i1515[32], i1515[33], i1515[34])
  i1514.endValueString = i1515[35]
  i1514.endValueRect = UnityEngine.Rect.MinMaxRect(i1515[36], i1515[37], i1515[38], i1515[39])
  request.r(i1515[40], i1515[41], 0, i1514, 'endValueTransform')
  i1514.optionalBool0 = !!i1515[42]
  i1514.optionalBool1 = !!i1515[43]
  i1514.optionalFloat0 = i1515[44]
  i1514.optionalInt0 = i1515[45]
  i1514.optionalRotationMode = i1515[46]
  i1514.optionalScrambleMode = i1515[47]
  i1514.optionalShakeRandomnessMode = i1515[48]
  i1514.optionalString = i1515[49]
  i1514.updateType = i1515[50]
  i1514.isSpeedBased = !!i1515[51]
  i1514.hasOnStart = !!i1515[52]
  i1514.hasOnPlay = !!i1515[53]
  i1514.hasOnUpdate = !!i1515[54]
  i1514.hasOnStepComplete = !!i1515[55]
  i1514.hasOnComplete = !!i1515[56]
  i1514.hasOnTweenCreated = !!i1515[57]
  i1514.hasOnRewind = !!i1515[58]
  i1514.onStart = request.d('UnityEngine.Events.UnityEvent', i1515[59], i1514.onStart)
  i1514.onPlay = request.d('UnityEngine.Events.UnityEvent', i1515[60], i1514.onPlay)
  i1514.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1515[61], i1514.onUpdate)
  i1514.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1515[62], i1514.onStepComplete)
  i1514.onComplete = request.d('UnityEngine.Events.UnityEvent', i1515[63], i1514.onComplete)
  i1514.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1515[64], i1514.onTweenCreated)
  i1514.onRewind = request.d('UnityEngine.Events.UnityEvent', i1515[65], i1514.onRewind)
  return i1514
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1516 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1517 = data
  i1516.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1517[0], i1516.m_PersistentCalls)
  return i1516
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.UI.Button' )
  var i1519 = data
  i1518.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1519[0], i1518.m_OnClick)
  i1518.m_Navigation = request.d('UnityEngine.UI.Navigation', i1519[1], i1518.m_Navigation)
  i1518.m_Transition = i1519[2]
  i1518.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1519[3], i1518.m_Colors)
  i1518.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1519[4], i1518.m_SpriteState)
  i1518.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1519[5], i1518.m_AnimationTriggers)
  i1518.m_Interactable = !!i1519[6]
  request.r(i1519[7], i1519[8], 0, i1518, 'm_TargetGraphic')
  return i1518
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1520 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1521 = data
  i1520.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1521[0], i1520.m_PersistentCalls)
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1523 = data
  request.r(i1523[0], i1523[1], 0, i1522, 'clip')
  request.r(i1523[2], i1523[3], 0, i1522, 'outputAudioMixerGroup')
  i1522.playOnAwake = !!i1523[4]
  i1522.loop = !!i1523[5]
  i1522.time = i1523[6]
  i1522.volume = i1523[7]
  i1522.pitch = i1523[8]
  i1522.enabled = !!i1523[9]
  return i1522
}

Deserializers["InteractController"] = function (request, data, root) {
  var i1524 = root || request.c( 'InteractController' )
  var i1525 = data
  request.r(i1525[0], i1525[1], 0, i1524, 'canvas')
  i1524.maxPos = new pc.Vec2( i1525[2], i1525[3] )
  i1524.minPos = new pc.Vec2( i1525[4], i1525[5] )
  var i1527 = i1525[6]
  var i1526 = new (System.Collections.Generic.List$1(Bridge.ns('ItemDrag')))
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.add(request.d('ItemDrag', i1527[i + 0]));
  }
  i1524.itemDrags = i1526
  var i1529 = i1525[7]
  var i1528 = new (System.Collections.Generic.List$1(Bridge.ns('ItemClick')))
  for(var i = 0; i < i1529.length; i += 1) {
    i1528.add(request.d('ItemClick', i1529[i + 0]));
  }
  i1524.itemClicks = i1528
  i1524.currentTarget = request.d('ItemDrag', i1525[8], i1524.currentTarget)
  request.r(i1525[9], i1525[10], 0, i1524, 'pickupSound')
  request.r(i1525[11], i1525[12], 0, i1524, 'tut')
  i1524.lockPlay = !!i1525[13]
  return i1524
}

Deserializers["ItemDrag"] = function (request, data, root) {
  var i1532 = root || request.c( 'ItemDrag' )
  var i1533 = data
  request.r(i1533[0], i1533[1], 0, i1532, 'DragArea')
  request.r(i1533[2], i1533[3], 0, i1532, 'Item')
  request.r(i1533[4], i1533[5], 0, i1532, 'Sound')
  request.r(i1533[6], i1533[7], 0, i1532, 'Icon')
  return i1532
}

Deserializers["ItemClick"] = function (request, data, root) {
  var i1536 = root || request.c( 'ItemClick' )
  var i1537 = data
  request.r(i1537[0], i1537[1], 0, i1536, 'ClickArea')
  request.r(i1537[2], i1537[3], 0, i1536, 'Item')
  request.r(i1537[4], i1537[5], 0, i1536, 'Sound')
  request.r(i1537[6], i1537[7], 0, i1536, 'UnActiveObject')
  return i1536
}

Deserializers["GameController"] = function (request, data, root) {
  var i1538 = root || request.c( 'GameController' )
  var i1539 = data
  i1538.OnComplete = request.d('System.Action', i1539[0], i1538.OnComplete)
  i1538.CompleteStep = request.d('System.Action', i1539[1], i1538.CompleteStep)
  var i1541 = i1539[2]
  var i1540 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationController')))
  for(var i = 0; i < i1541.length; i += 2) {
  request.r(i1541[i + 0], i1541[i + 1], 1, i1540, '')
  }
  i1538.skeletons = i1540
  request.r(i1539[3], i1539[4], 0, i1538, 'character')
  var i1543 = i1539[5]
  var i1542 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1543.length; i += 2) {
  request.r(i1543[i + 0], i1543[i + 1], 1, i1542, '')
  }
  i1538.correctItems = i1542
  var i1545 = i1539[6]
  var i1544 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1545.length; i += 2) {
  request.r(i1545[i + 0], i1545[i + 1], 1, i1544, '')
  }
  i1538.phase = i1544
  request.r(i1539[7], i1539[8], 0, i1538, 'loss')
  request.r(i1539[9], i1539[10], 0, i1538, 'win')
  request.r(i1539[11], i1539[12], 0, i1538, 'failScene')
  request.r(i1539[13], i1539[14], 0, i1538, 'winScene')
  i1538.complete = !!i1539[15]
  i1538.end = !!i1539[16]
  i1538.currentStep = i1539[17]
  i1538.correctStep = i1539[18]
  request.r(i1539[19], i1539[20], 0, i1538, 'currentStepText')
  i1538.maxStep = i1539[21]
  request.r(i1539[22], i1539[23], 0, i1538, 'maxStepText')
  request.r(i1539[24], i1539[25], 0, i1538, 'slider')
  i1538.DelayComplete = i1539[26]
  i1538.startSub = request.d('Sub', i1539[27], i1538.startSub)
  i1538.phaseSub = request.d('Sub', i1539[28], i1538.phaseSub)
  i1538.winSub = request.d('Sub', i1539[29], i1538.winSub)
  i1538.failSub = request.d('Sub', i1539[30], i1538.failSub)
  var i1547 = i1539[31]
  var i1546 = new (System.Collections.Generic.List$1(Bridge.ns('Sub')))
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.add(request.d('Sub', i1547[i + 0]));
  }
  i1538.subs = i1546
  request.r(i1539[32], i1539[33], 0, i1538, 'sub')
  request.r(i1539[34], i1539[35], 0, i1538, 'subText')
  i1538.completeSub = !!i1539[36]
  return i1538
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1548 = root || request.c( 'System.Action' )
  var i1549 = data
  return i1548
}

Deserializers["Sub"] = function (request, data, root) {
  var i1554 = root || request.c( 'Sub' )
  var i1555 = data
  i1554.timeSub = i1555[0]
  request.r(i1555[1], i1555[2], 0, i1554, 'Item')
  i1554.SubText = i1555[3]
  request.r(i1555[4], i1555[5], 0, i1554, 'SubSound')
  return i1554
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1558 = root || request.c( 'LayoutController' )
  var i1559 = data
  request.r(i1559[0], i1559[1], 0, i1558, 'CTA')
  i1558.hide = !!i1559[2]
  return i1558
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1560 = root || request.c( 'AudioController' )
  var i1561 = data
  request.r(i1561[0], i1561[1], 0, i1560, 'BGM')
  request.r(i1561[2], i1561[3], 0, i1560, 'musicSource')
  request.r(i1561[4], i1561[5], 0, i1560, 'SFXPool')
  return i1560
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1562 = root || request.c( 'LunaController' )
  var i1563 = data
  i1562.TimePlay = i1563[0]
  i1562.CountPlay = i1563[1]
  i1562.BGColor = new pc.Color(i1563[2], i1563[3], i1563[4], i1563[5])
  i1562.GameBGColor = new pc.Color(i1563[6], i1563[7], i1563[8], i1563[9])
  i1562.LevelTextColor = new pc.Color(i1563[10], i1563[11], i1563[12], i1563[13])
  i1562.TitleTextColor = new pc.Color(i1563[14], i1563[15], i1563[16], i1563[17])
  i1562.SubBGColor = new pc.Color(i1563[18], i1563[19], i1563[20], i1563[21])
  request.r(i1563[22], i1563[23], 0, i1562, 'time')
  request.r(i1563[24], i1563[25], 0, i1562, 'BGImage')
  request.r(i1563[26], i1563[27], 0, i1562, 'GameBGImage')
  request.r(i1563[28], i1563[29], 0, i1562, 'levelText')
  request.r(i1563[30], i1563[31], 0, i1562, 'titleText')
  request.r(i1563[32], i1563[33], 0, i1562, 'subBG')
  request.r(i1563[34], i1563[35], 0, i1562, 'endCard')
  var i1565 = i1563[36]
  var i1564 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1565.length; i += 2) {
  request.r(i1565[i + 0], i1565[i + 1], 1, i1564, '')
  }
  i1562.CTA = i1564
  i1562.count = i1563[37]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1569 = data
  i1568.ambientIntensity = i1569[0]
  i1568.reflectionIntensity = i1569[1]
  i1568.ambientMode = i1569[2]
  i1568.ambientLight = new pc.Color(i1569[3], i1569[4], i1569[5], i1569[6])
  i1568.ambientSkyColor = new pc.Color(i1569[7], i1569[8], i1569[9], i1569[10])
  i1568.ambientGroundColor = new pc.Color(i1569[11], i1569[12], i1569[13], i1569[14])
  i1568.ambientEquatorColor = new pc.Color(i1569[15], i1569[16], i1569[17], i1569[18])
  i1568.fogColor = new pc.Color(i1569[19], i1569[20], i1569[21], i1569[22])
  i1568.fogEndDistance = i1569[23]
  i1568.fogStartDistance = i1569[24]
  i1568.fogDensity = i1569[25]
  i1568.fog = !!i1569[26]
  request.r(i1569[27], i1569[28], 0, i1568, 'skybox')
  i1568.fogMode = i1569[29]
  var i1571 = i1569[30]
  var i1570 = []
  for(var i = 0; i < i1571.length; i += 1) {
    i1570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1571[i + 0]) );
  }
  i1568.lightmaps = i1570
  i1568.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1569[31], i1568.lightProbes)
  i1568.lightmapsMode = i1569[32]
  i1568.mixedBakeMode = i1569[33]
  i1568.environmentLightingMode = i1569[34]
  i1568.ambientProbe = new pc.SphericalHarmonicsL2(i1569[35])
  request.r(i1569[36], i1569[37], 0, i1568, 'customReflection')
  request.r(i1569[38], i1569[39], 0, i1568, 'defaultReflection')
  i1568.defaultReflectionMode = i1569[40]
  i1568.defaultReflectionResolution = i1569[41]
  i1568.sunLightObjectId = i1569[42]
  i1568.pixelLightCount = i1569[43]
  i1568.defaultReflectionHDR = !!i1569[44]
  i1568.hasLightDataAsset = !!i1569[45]
  i1568.hasManualGenerate = !!i1569[46]
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1575 = data
  request.r(i1575[0], i1575[1], 0, i1574, 'lightmapColor')
  request.r(i1575[2], i1575[3], 0, i1574, 'lightmapDirection')
  request.r(i1575[4], i1575[5], 0, i1574, 'shadowMask')
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1576 = root || new UnityEngine.LightProbes()
  var i1577 = data
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1585 = data
  var i1587 = i1585[0]
  var i1586 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1587[i + 0]));
  }
  i1584.ShaderCompilationErrors = i1586
  i1584.name = i1585[1]
  i1584.guid = i1585[2]
  var i1589 = i1585[3]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( i1589[i + 0] );
  }
  i1584.shaderDefinedKeywords = i1588
  var i1591 = i1585[4]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 1) {
    i1590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1591[i + 0]) );
  }
  i1584.passes = i1590
  var i1593 = i1585[5]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1593[i + 0]) );
  }
  i1584.usePasses = i1592
  var i1595 = i1585[6]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 1) {
    i1594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1595[i + 0]) );
  }
  i1584.defaultParameterValues = i1594
  request.r(i1585[7], i1585[8], 0, i1584, 'unityFallbackShader')
  i1584.readDepth = !!i1585[9]
  i1584.hasDepthOnlyPass = !!i1585[10]
  i1584.isCreatedByShaderGraph = !!i1585[11]
  i1584.disableBatching = !!i1585[12]
  i1584.compiled = !!i1585[13]
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1599 = data
  i1598.shaderName = i1599[0]
  i1598.errorMessage = i1599[1]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1602 = root || new pc.UnityShaderPass()
  var i1603 = data
  i1602.id = i1603[0]
  i1602.subShaderIndex = i1603[1]
  i1602.name = i1603[2]
  i1602.passType = i1603[3]
  i1602.grabPassTextureName = i1603[4]
  i1602.usePass = !!i1603[5]
  i1602.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1603[6], i1602.zTest)
  i1602.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1603[7], i1602.zWrite)
  i1602.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1603[8], i1602.culling)
  i1602.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1603[9], i1602.blending)
  i1602.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1603[10], i1602.alphaBlending)
  i1602.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1603[11], i1602.colorWriteMask)
  i1602.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1603[12], i1602.offsetUnits)
  i1602.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1603[13], i1602.offsetFactor)
  i1602.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1603[14], i1602.stencilRef)
  i1602.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1603[15], i1602.stencilReadMask)
  i1602.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1603[16], i1602.stencilWriteMask)
  i1602.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1603[17], i1602.stencilOp)
  i1602.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1603[18], i1602.stencilOpFront)
  i1602.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1603[19], i1602.stencilOpBack)
  var i1605 = i1603[20]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1605[i + 0]) );
  }
  i1602.tags = i1604
  var i1607 = i1603[21]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( i1607[i + 0] );
  }
  i1602.passDefinedKeywords = i1606
  var i1609 = i1603[22]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1609[i + 0]) );
  }
  i1602.passDefinedKeywordGroups = i1608
  var i1611 = i1603[23]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1611[i + 0]) );
  }
  i1602.variants = i1610
  var i1613 = i1603[24]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1613[i + 0]) );
  }
  i1602.excludedVariants = i1612
  i1602.hasDepthReader = !!i1603[25]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1615 = data
  i1614.val = i1615[0]
  i1614.name = i1615[1]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1617 = data
  i1616.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1617[0], i1616.src)
  i1616.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1617[1], i1616.dst)
  i1616.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1617[2], i1616.op)
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1619 = data
  i1618.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[0], i1618.pass)
  i1618.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[1], i1618.fail)
  i1618.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[2], i1618.zFail)
  i1618.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[3], i1618.comp)
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1623 = data
  i1622.name = i1623[0]
  i1622.value = i1623[1]
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1627 = data
  var i1629 = i1627[0]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( i1629[i + 0] );
  }
  i1626.keywords = i1628
  i1626.hasDiscard = !!i1627[1]
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1633 = data
  i1632.passId = i1633[0]
  i1632.subShaderIndex = i1633[1]
  var i1635 = i1633[2]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.push( i1635[i + 0] );
  }
  i1632.keywords = i1634
  i1632.vertexProgram = i1633[3]
  i1632.fragmentProgram = i1633[4]
  i1632.exportedForWebGl2 = !!i1633[5]
  i1632.readDepth = !!i1633[6]
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1639 = data
  request.r(i1639[0], i1639[1], 0, i1638, 'shader')
  i1638.pass = i1639[2]
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1643 = data
  i1642.name = i1643[0]
  i1642.type = i1643[1]
  i1642.value = new pc.Vec4( i1643[2], i1643[3], i1643[4], i1643[5] )
  i1642.textureValue = i1643[6]
  i1642.shaderPropertyFlag = i1643[7]
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1645 = data
  i1644.name = i1645[0]
  request.r(i1645[1], i1645[2], 0, i1644, 'texture')
  i1644.aabb = i1645[3]
  i1644.vertices = i1645[4]
  i1644.triangles = i1645[5]
  i1644.textureRect = UnityEngine.Rect.MinMaxRect(i1645[6], i1645[7], i1645[8], i1645[9])
  i1644.packedRect = UnityEngine.Rect.MinMaxRect(i1645[10], i1645[11], i1645[12], i1645[13])
  i1644.border = new pc.Vec4( i1645[14], i1645[15], i1645[16], i1645[17] )
  i1644.transparency = i1645[18]
  i1644.bounds = i1645[19]
  i1644.pixelsPerUnit = i1645[20]
  i1644.textureWidth = i1645[21]
  i1644.textureHeight = i1645[22]
  i1644.nativeSize = new pc.Vec2( i1645[23], i1645[24] )
  i1644.pivot = new pc.Vec2( i1645[25], i1645[26] )
  i1644.textureRectOffset = new pc.Vec2( i1645[27], i1645[28] )
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1647 = data
  i1646.name = i1647[0]
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1649 = data
  i1648.name = i1649[0]
  i1648.ascent = i1649[1]
  i1648.originalLineHeight = i1649[2]
  i1648.fontSize = i1649[3]
  var i1651 = i1649[4]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1651[i + 0]) );
  }
  i1648.characterInfo = i1650
  request.r(i1649[5], i1649[6], 0, i1648, 'texture')
  i1648.originalFontSize = i1649[7]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1655 = data
  i1654.index = i1655[0]
  i1654.advance = i1655[1]
  i1654.bearing = i1655[2]
  i1654.glyphWidth = i1655[3]
  i1654.glyphHeight = i1655[4]
  i1654.minX = i1655[5]
  i1654.maxX = i1655[6]
  i1654.minY = i1655[7]
  i1654.maxY = i1655[8]
  i1654.uvBottomLeftX = i1655[9]
  i1654.uvBottomLeftY = i1655[10]
  i1654.uvBottomRightX = i1655[11]
  i1654.uvBottomRightY = i1655[12]
  i1654.uvTopLeftX = i1655[13]
  i1654.uvTopLeftY = i1655[14]
  i1654.uvTopRightX = i1655[15]
  i1654.uvTopRightY = i1655[16]
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1657 = data
  i1656.name = i1657[0]
  i1656.bytes64 = i1657[1]
  i1656.data = i1657[2]
  return i1656
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1658 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1659 = data
  var i1661 = i1659[0]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 2) {
  request.r(i1661[i + 0], i1661[i + 1], 2, i1660, '')
  }
  i1658.atlasAssets = i1660
  i1658.scale = i1659[1]
  request.r(i1659[2], i1659[3], 0, i1658, 'skeletonJSON')
  i1658.isUpgradingBlendModeMaterials = !!i1659[4]
  i1658.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1659[5], i1658.blendModeMaterials)
  var i1663 = i1659[6]
  var i1662 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1663.length; i += 2) {
  request.r(i1663[i + 0], i1663[i + 1], 1, i1662, '')
  }
  i1658.skeletonDataModifiers = i1662
  var i1665 = i1659[7]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 1) {
    i1664.push( i1665[i + 0] );
  }
  i1658.fromAnimation = i1664
  var i1667 = i1659[8]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( i1667[i + 0] );
  }
  i1658.toAnimation = i1666
  i1658.duration = i1659[9]
  i1658.defaultMix = i1659[10]
  request.r(i1659[11], i1659[12], 0, i1658, 'controller')
  return i1658
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1670 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1671 = data
  i1670.applyAdditiveMaterial = !!i1671[0]
  var i1673 = i1671[1]
  var i1672 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1673[i + 0]));
  }
  i1670.additiveMaterials = i1672
  var i1675 = i1671[2]
  var i1674 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1675[i + 0]));
  }
  i1670.multiplyMaterials = i1674
  var i1677 = i1671[3]
  var i1676 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1677[i + 0]));
  }
  i1670.screenMaterials = i1676
  i1670.requiresBlendModeMaterials = !!i1671[4]
  return i1670
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1680 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1681 = data
  i1680.pageName = i1681[0]
  request.r(i1681[1], i1681[2], 0, i1680, 'material')
  return i1680
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1684 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1685 = data
  request.r(i1685[0], i1685[1], 0, i1684, 'atlasFile')
  var i1687 = i1685[2]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 2) {
  request.r(i1687[i + 0], i1687[i + 1], 2, i1686, '')
  }
  i1684.materials = i1686
  i1684.textureLoadingMode = i1685[3]
  request.r(i1685[4], i1685[5], 0, i1684, 'onDemandTextureLoader')
  return i1684
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1688 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1689 = data
  i1688.useSafeMode = !!i1689[0]
  i1688.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1689[1], i1688.safeModeOptions)
  i1688.timeScale = i1689[2]
  i1688.unscaledTimeScale = i1689[3]
  i1688.useSmoothDeltaTime = !!i1689[4]
  i1688.maxSmoothUnscaledTime = i1689[5]
  i1688.rewindCallbackMode = i1689[6]
  i1688.showUnityEditorReport = !!i1689[7]
  i1688.logBehaviour = i1689[8]
  i1688.drawGizmos = !!i1689[9]
  i1688.defaultRecyclable = !!i1689[10]
  i1688.defaultAutoPlay = i1689[11]
  i1688.defaultUpdateType = i1689[12]
  i1688.defaultTimeScaleIndependent = !!i1689[13]
  i1688.defaultEaseType = i1689[14]
  i1688.defaultEaseOvershootOrAmplitude = i1689[15]
  i1688.defaultEasePeriod = i1689[16]
  i1688.defaultAutoKill = !!i1689[17]
  i1688.defaultLoopType = i1689[18]
  i1688.debugMode = !!i1689[19]
  i1688.debugStoreTargetId = !!i1689[20]
  i1688.showPreviewPanel = !!i1689[21]
  i1688.storeSettingsLocation = i1689[22]
  i1688.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1689[23], i1688.modules)
  i1688.createASMDEF = !!i1689[24]
  i1688.showPlayingTweens = !!i1689[25]
  i1688.showPausedTweens = !!i1689[26]
  return i1688
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1690 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1691 = data
  i1690.logBehaviour = i1691[0]
  i1690.nestedTweenFailureBehaviour = i1691[1]
  return i1690
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1692 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1693 = data
  i1692.showPanel = !!i1693[0]
  i1692.audioEnabled = !!i1693[1]
  i1692.physicsEnabled = !!i1693[2]
  i1692.physics2DEnabled = !!i1693[3]
  i1692.spriteEnabled = !!i1693[4]
  i1692.uiEnabled = !!i1693[5]
  i1692.textMeshProEnabled = !!i1693[6]
  i1692.tk2DEnabled = !!i1693[7]
  i1692.deAudioEnabled = !!i1693[8]
  i1692.deUnityExtendedEnabled = !!i1693[9]
  i1692.epoOutlineEnabled = !!i1693[10]
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1695 = data
  var i1697 = i1695[0]
  var i1696 = []
  for(var i = 0; i < i1697.length; i += 1) {
    i1696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1697[i + 0]) );
  }
  i1694.files = i1696
  i1694.componentToPrefabIds = i1695[1]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1701 = data
  i1700.path = i1701[0]
  request.r(i1701[1], i1701[2], 0, i1700, 'unityObject')
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1703 = data
  var i1705 = i1703[0]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1705[i + 0]) );
  }
  i1702.scriptsExecutionOrder = i1704
  var i1707 = i1703[1]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1707[i + 0]) );
  }
  i1702.sortingLayers = i1706
  var i1709 = i1703[2]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1709[i + 0]) );
  }
  i1702.cullingLayers = i1708
  i1702.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1703[3], i1702.timeSettings)
  i1702.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1703[4], i1702.physicsSettings)
  i1702.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1703[5], i1702.physics2DSettings)
  i1702.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1703[6], i1702.qualitySettings)
  i1702.enableRealtimeShadows = !!i1703[7]
  i1702.enableAutoInstancing = !!i1703[8]
  i1702.enableStaticBatching = !!i1703[9]
  i1702.enableDynamicBatching = !!i1703[10]
  i1702.usePreservativeDynamicBatching = !!i1703[11]
  i1702.lightmapEncodingQuality = i1703[12]
  i1702.desiredColorSpace = i1703[13]
  var i1711 = i1703[14]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( i1711[i + 0] );
  }
  i1702.allTags = i1710
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1715 = data
  i1714.name = i1715[0]
  i1714.value = i1715[1]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1719 = data
  i1718.id = i1719[0]
  i1718.name = i1719[1]
  i1718.value = i1719[2]
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1723 = data
  i1722.id = i1723[0]
  i1722.name = i1723[1]
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1725 = data
  i1724.fixedDeltaTime = i1725[0]
  i1724.maximumDeltaTime = i1725[1]
  i1724.timeScale = i1725[2]
  i1724.maximumParticleTimestep = i1725[3]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1727 = data
  i1726.gravity = new pc.Vec3( i1727[0], i1727[1], i1727[2] )
  i1726.defaultSolverIterations = i1727[3]
  i1726.bounceThreshold = i1727[4]
  i1726.autoSyncTransforms = !!i1727[5]
  i1726.autoSimulation = !!i1727[6]
  var i1729 = i1727[7]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1729[i + 0]) );
  }
  i1726.collisionMatrix = i1728
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1733 = data
  i1732.enabled = !!i1733[0]
  i1732.layerId = i1733[1]
  i1732.otherLayerId = i1733[2]
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1735 = data
  request.r(i1735[0], i1735[1], 0, i1734, 'material')
  i1734.gravity = new pc.Vec2( i1735[2], i1735[3] )
  i1734.positionIterations = i1735[4]
  i1734.velocityIterations = i1735[5]
  i1734.velocityThreshold = i1735[6]
  i1734.maxLinearCorrection = i1735[7]
  i1734.maxAngularCorrection = i1735[8]
  i1734.maxTranslationSpeed = i1735[9]
  i1734.maxRotationSpeed = i1735[10]
  i1734.baumgarteScale = i1735[11]
  i1734.baumgarteTOIScale = i1735[12]
  i1734.timeToSleep = i1735[13]
  i1734.linearSleepTolerance = i1735[14]
  i1734.angularSleepTolerance = i1735[15]
  i1734.defaultContactOffset = i1735[16]
  i1734.autoSimulation = !!i1735[17]
  i1734.queriesHitTriggers = !!i1735[18]
  i1734.queriesStartInColliders = !!i1735[19]
  i1734.callbacksOnDisable = !!i1735[20]
  i1734.reuseCollisionCallbacks = !!i1735[21]
  i1734.autoSyncTransforms = !!i1735[22]
  var i1737 = i1735[23]
  var i1736 = []
  for(var i = 0; i < i1737.length; i += 1) {
    i1736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1737[i + 0]) );
  }
  i1734.collisionMatrix = i1736
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1741 = data
  i1740.enabled = !!i1741[0]
  i1740.layerId = i1741[1]
  i1740.otherLayerId = i1741[2]
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1743 = data
  var i1745 = i1743[0]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1745[i + 0]) );
  }
  i1742.qualityLevels = i1744
  var i1747 = i1743[1]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.push( i1747[i + 0] );
  }
  i1742.names = i1746
  i1742.shadows = i1743[2]
  i1742.anisotropicFiltering = i1743[3]
  i1742.antiAliasing = i1743[4]
  i1742.lodBias = i1743[5]
  i1742.shadowCascades = i1743[6]
  i1742.shadowDistance = i1743[7]
  i1742.shadowmaskMode = i1743[8]
  i1742.shadowProjection = i1743[9]
  i1742.shadowResolution = i1743[10]
  i1742.softParticles = !!i1743[11]
  i1742.softVegetation = !!i1743[12]
  i1742.activeColorSpace = i1743[13]
  i1742.desiredColorSpace = i1743[14]
  i1742.masterTextureLimit = i1743[15]
  i1742.maxQueuedFrames = i1743[16]
  i1742.particleRaycastBudget = i1743[17]
  i1742.pixelLightCount = i1743[18]
  i1742.realtimeReflectionProbes = !!i1743[19]
  i1742.shadowCascade2Split = i1743[20]
  i1742.shadowCascade4Split = new pc.Vec3( i1743[21], i1743[22], i1743[23] )
  i1742.streamingMipmapsActive = !!i1743[24]
  i1742.vSyncCount = i1743[25]
  i1742.asyncUploadBufferSize = i1743[26]
  i1742.asyncUploadTimeSlice = i1743[27]
  i1742.billboardsFaceCameraPosition = !!i1743[28]
  i1742.shadowNearPlaneOffset = i1743[29]
  i1742.streamingMipmapsMemoryBudget = i1743[30]
  i1742.maximumLODLevel = i1743[31]
  i1742.streamingMipmapsAddAllCameras = !!i1743[32]
  i1742.streamingMipmapsMaxLevelReduction = i1743[33]
  i1742.streamingMipmapsRenderersPerFrame = i1743[34]
  i1742.resolutionScalingFixedDPIFactor = i1743[35]
  i1742.streamingMipmapsMaxFileIORequests = i1743[36]
  i1742.currentQualityLevel = i1743[37]
  return i1742
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1750 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1751 = data
  request.r(i1751[0], i1751[1], 0, i1750, 'm_ObjectArgument')
  i1750.m_ObjectArgumentAssemblyTypeName = i1751[2]
  i1750.m_IntArgument = i1751[3]
  i1750.m_FloatArgument = i1751[4]
  i1750.m_StringArgument = i1751[5]
  i1750.m_BoolArgument = !!i1751[6]
  return i1750
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[2],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[2],"72":[73],"74":[75],"76":[75],"8":[7],"22":[18],"77":[78],"79":[7],"80":[11,7],"81":[73],"18":[11,7],"82":[83,73],"84":[73,85],"86":[73],"87":[51],"88":[58],"89":[78],"90":[91],"92":[93],"94":[2],"95":[96],"97":[7],"98":[11,7],"99":[73],"100":[11,7],"101":[7],"102":[7],"103":[73,7],"104":[7,11],"105":[106],"107":[106],"108":[106],"109":[7],"110":[7],"10":[8],"12":[11,7],"111":[7],"9":[8],"112":[7],"113":[7],"114":[7],"115":[7],"116":[7],"117":[7],"118":[7],"17":[7],"119":[7],"120":[11,7],"121":[7],"122":[7],"123":[7],"16":[7],"13":[11,7],"124":[7],"125":[5],"126":[5],"6":[5],"127":[5],"128":[2],"129":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.Slider","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","CharacterSkinController","UnityEngine.GameObject","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","UnityEngine.AudioSource","InteractController","GameController","LayoutController","AudioController","UnityEngine.Transform","LunaController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "08/24/2026 10:54:14";

Deserializers.lunaDaysRunning = "0.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BP_V31_NgocNDL_TamNTM";

Deserializers.lunaAppID = "31727";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4329";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "b6f7667f-d08f-4265-971e-4bba7df08d99";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

