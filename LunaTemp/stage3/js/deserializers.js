var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1362 = root || request.c( 'UnityEngine.JointSpring' )
  var i1363 = data
  i1362.spring = i1363[0]
  i1362.damper = i1363[1]
  i1362.targetPosition = i1363[2]
  return i1362
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1364 = root || request.c( 'UnityEngine.JointMotor' )
  var i1365 = data
  i1364.m_TargetVelocity = i1365[0]
  i1364.m_Force = i1365[1]
  i1364.m_FreeSpin = i1365[2]
  return i1364
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1366 = root || request.c( 'UnityEngine.JointLimits' )
  var i1367 = data
  i1366.m_Min = i1367[0]
  i1366.m_Max = i1367[1]
  i1366.m_Bounciness = i1367[2]
  i1366.m_BounceMinVelocity = i1367[3]
  i1366.m_ContactDistance = i1367[4]
  i1366.minBounce = i1367[5]
  i1366.maxBounce = i1367[6]
  return i1366
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1368 = root || request.c( 'UnityEngine.JointDrive' )
  var i1369 = data
  i1368.m_PositionSpring = i1369[0]
  i1368.m_PositionDamper = i1369[1]
  i1368.m_MaximumForce = i1369[2]
  i1368.m_UseAcceleration = i1369[3]
  return i1368
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1370 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1371 = data
  i1370.m_Spring = i1371[0]
  i1370.m_Damper = i1371[1]
  return i1370
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1372 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1373 = data
  i1372.m_Limit = i1373[0]
  i1372.m_Bounciness = i1373[1]
  i1372.m_ContactDistance = i1373[2]
  return i1372
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1374 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1375 = data
  i1374.m_ExtremumSlip = i1375[0]
  i1374.m_ExtremumValue = i1375[1]
  i1374.m_AsymptoteSlip = i1375[2]
  i1374.m_AsymptoteValue = i1375[3]
  i1374.m_Stiffness = i1375[4]
  return i1374
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1376 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1377 = data
  i1376.m_LowerAngle = i1377[0]
  i1376.m_UpperAngle = i1377[1]
  return i1376
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1378 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1379 = data
  i1378.m_MotorSpeed = i1379[0]
  i1378.m_MaximumMotorTorque = i1379[1]
  return i1378
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1380 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1381 = data
  i1380.m_DampingRatio = i1381[0]
  i1380.m_Frequency = i1381[1]
  i1380.m_Angle = i1381[2]
  return i1380
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1382 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1383 = data
  i1382.m_LowerTranslation = i1383[0]
  i1382.m_UpperTranslation = i1383[1]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1385 = data
  i1384.name = i1385[0]
  i1384.width = i1385[1]
  i1384.height = i1385[2]
  i1384.mipmapCount = i1385[3]
  i1384.anisoLevel = i1385[4]
  i1384.filterMode = i1385[5]
  i1384.hdr = !!i1385[6]
  i1384.format = i1385[7]
  i1384.wrapMode = i1385[8]
  i1384.alphaIsTransparency = !!i1385[9]
  i1384.alphaSource = i1385[10]
  i1384.graphicsFormat = i1385[11]
  i1384.sRGBTexture = !!i1385[12]
  i1384.desiredColorSpace = i1385[13]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1386 = root || new pc.UnityMaterial()
  var i1387 = data
  i1386.name = i1387[0]
  request.r(i1387[1], i1387[2], 0, i1386, 'shader')
  i1386.renderQueue = i1387[3]
  i1386.enableInstancing = !!i1387[4]
  var i1389 = i1387[5]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1389[i + 0]) );
  }
  i1386.floatParameters = i1388
  var i1391 = i1387[6]
  var i1390 = []
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1391[i + 0]) );
  }
  i1386.colorParameters = i1390
  var i1393 = i1387[7]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1393[i + 0]) );
  }
  i1386.vectorParameters = i1392
  var i1395 = i1387[8]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1395[i + 0]) );
  }
  i1386.textureParameters = i1394
  var i1397 = i1387[9]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1397[i + 0]) );
  }
  i1386.materialFlags = i1396
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1401 = data
  i1400.name = i1401[0]
  i1400.value = i1401[1]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1405 = data
  i1404.name = i1405[0]
  i1404.value = new pc.Color(i1405[1], i1405[2], i1405[3], i1405[4])
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1409 = data
  i1408.name = i1409[0]
  i1408.value = new pc.Vec4( i1409[1], i1409[2], i1409[3], i1409[4] )
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1413 = data
  i1412.name = i1413[0]
  request.r(i1413[1], i1413[2], 0, i1412, 'value')
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1417 = data
  i1416.name = i1417[0]
  i1416.enabled = !!i1417[1]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1419 = data
  i1418.name = i1419[0]
  i1418.index = i1419[1]
  i1418.startup = !!i1419[2]
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1421 = data
  i1420.position = new pc.Vec3( i1421[0], i1421[1], i1421[2] )
  i1420.scale = new pc.Vec3( i1421[3], i1421[4], i1421[5] )
  i1420.rotation = new pc.Quat(i1421[6], i1421[7], i1421[8], i1421[9])
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1423 = data
  i1422.enabled = !!i1423[0]
  i1422.aspect = i1423[1]
  i1422.orthographic = !!i1423[2]
  i1422.orthographicSize = i1423[3]
  i1422.backgroundColor = new pc.Color(i1423[4], i1423[5], i1423[6], i1423[7])
  i1422.nearClipPlane = i1423[8]
  i1422.farClipPlane = i1423[9]
  i1422.fieldOfView = i1423[10]
  i1422.depth = i1423[11]
  i1422.clearFlags = i1423[12]
  i1422.cullingMask = i1423[13]
  i1422.rect = i1423[14]
  request.r(i1423[15], i1423[16], 0, i1422, 'targetTexture')
  i1422.usePhysicalProperties = !!i1423[17]
  i1422.focalLength = i1423[18]
  i1422.sensorSize = new pc.Vec2( i1423[19], i1423[20] )
  i1422.lensShift = new pc.Vec2( i1423[21], i1423[22] )
  i1422.gateFit = i1423[23]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1425 = data
  i1424.name = i1425[0]
  i1424.tagId = i1425[1]
  i1424.enabled = !!i1425[2]
  i1424.isStatic = !!i1425[3]
  i1424.layer = i1425[4]
  return i1424
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1426 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1427 = data
  request.r(i1427[0], i1427[1], 0, i1426, 'm_FirstSelected')
  i1426.m_sendNavigationEvents = !!i1427[2]
  i1426.m_DragThreshold = i1427[3]
  return i1426
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1428 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1429 = data
  i1428.m_HorizontalAxis = i1429[0]
  i1428.m_VerticalAxis = i1429[1]
  i1428.m_SubmitButton = i1429[2]
  i1428.m_CancelButton = i1429[3]
  i1428.m_InputActionsPerSecond = i1429[4]
  i1428.m_RepeatDelay = i1429[5]
  i1428.m_ForceModuleActive = !!i1429[6]
  i1428.m_SendPointerHoverToParent = !!i1429[7]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1431 = data
  i1430.pivot = new pc.Vec2( i1431[0], i1431[1] )
  i1430.anchorMin = new pc.Vec2( i1431[2], i1431[3] )
  i1430.anchorMax = new pc.Vec2( i1431[4], i1431[5] )
  i1430.sizeDelta = new pc.Vec2( i1431[6], i1431[7] )
  i1430.anchoredPosition3D = new pc.Vec3( i1431[8], i1431[9], i1431[10] )
  i1430.rotation = new pc.Quat(i1431[11], i1431[12], i1431[13], i1431[14])
  i1430.scale = new pc.Vec3( i1431[15], i1431[16], i1431[17] )
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1433 = data
  i1432.enabled = !!i1433[0]
  i1432.planeDistance = i1433[1]
  i1432.referencePixelsPerUnit = i1433[2]
  i1432.isFallbackOverlay = !!i1433[3]
  i1432.renderMode = i1433[4]
  i1432.renderOrder = i1433[5]
  i1432.sortingLayerName = i1433[6]
  i1432.sortingOrder = i1433[7]
  i1432.scaleFactor = i1433[8]
  request.r(i1433[9], i1433[10], 0, i1432, 'worldCamera')
  i1432.overrideSorting = !!i1433[11]
  i1432.pixelPerfect = !!i1433[12]
  i1432.targetDisplay = i1433[13]
  i1432.overridePixelPerfect = !!i1433[14]
  return i1432
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1434 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1435 = data
  i1434.m_UiScaleMode = i1435[0]
  i1434.m_ReferencePixelsPerUnit = i1435[1]
  i1434.m_ScaleFactor = i1435[2]
  i1434.m_ReferenceResolution = new pc.Vec2( i1435[3], i1435[4] )
  i1434.m_ScreenMatchMode = i1435[5]
  i1434.m_MatchWidthOrHeight = i1435[6]
  i1434.m_PhysicalUnit = i1435[7]
  i1434.m_FallbackScreenDPI = i1435[8]
  i1434.m_DefaultSpriteDPI = i1435[9]
  i1434.m_DynamicPixelsPerUnit = i1435[10]
  i1434.m_PresetInfoIsWorld = !!i1435[11]
  return i1434
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1436 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1437 = data
  i1436.m_IgnoreReversedGraphics = !!i1437[0]
  i1436.m_BlockingObjects = i1437[1]
  i1436.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1437[2] )
  return i1436
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1438 = root || request.c( 'LunaManager' )
  var i1439 = data
  var i1441 = i1439[0]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 2) {
  request.r(i1441[i + 0], i1441[i + 1], 2, i1440, '')
  }
  i1438.lstBtnInstall = i1440
  request.r(i1439[1], i1439[2], 0, i1438, 'EndCard')
  i1438.countPlay = i1439[3]
  i1438.countPlayFinal = i1439[4]
  i1438.timeDropFinal = i1439[5]
  i1438.colorBG = new pc.Color(i1439[6], i1439[7], i1439[8], i1439[9])
  request.r(i1439[10], i1439[11], 0, i1438, 'texture2D')
  request.r(i1439[12], i1439[13], 0, i1438, 'rawImageBG')
  request.r(i1439[14], i1439[15], 0, i1438, 'hand')
  request.r(i1439[16], i1439[17], 0, i1438, 'textProgess')
  request.r(i1439[18], i1439[19], 0, i1438, 'imgProgess')
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1445 = data
  i1444.cullTransparentMesh = !!i1445[0]
  return i1444
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1447 = data
  request.r(i1447[0], i1447[1], 0, i1446, 'm_Texture')
  i1446.m_UVRect = UnityEngine.Rect.MinMaxRect(i1447[2], i1447[3], i1447[4], i1447[5])
  request.r(i1447[6], i1447[7], 0, i1446, 'm_Material')
  i1446.m_Maskable = !!i1447[8]
  i1446.m_Color = new pc.Color(i1447[9], i1447[10], i1447[11], i1447[12])
  i1446.m_RaycastTarget = !!i1447[13]
  i1446.m_RaycastPadding = new pc.Vec4( i1447[14], i1447[15], i1447[16], i1447[17] )
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1449 = data
  request.r(i1449[0], i1449[1], 0, i1448, 'clip')
  request.r(i1449[2], i1449[3], 0, i1448, 'outputAudioMixerGroup')
  i1448.playOnAwake = !!i1449[4]
  i1448.loop = !!i1449[5]
  i1448.time = i1449[6]
  i1448.volume = i1449[7]
  i1448.pitch = i1449[8]
  i1448.enabled = !!i1449[9]
  return i1448
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1450 = root || request.c( 'UnityEngine.UI.Image' )
  var i1451 = data
  request.r(i1451[0], i1451[1], 0, i1450, 'm_Sprite')
  i1450.m_Type = i1451[2]
  i1450.m_PreserveAspect = !!i1451[3]
  i1450.m_FillCenter = !!i1451[4]
  i1450.m_FillMethod = i1451[5]
  i1450.m_FillAmount = i1451[6]
  i1450.m_FillClockwise = !!i1451[7]
  i1450.m_FillOrigin = i1451[8]
  i1450.m_UseSpriteMesh = !!i1451[9]
  i1450.m_PixelsPerUnitMultiplier = i1451[10]
  request.r(i1451[11], i1451[12], 0, i1450, 'm_Material')
  i1450.m_Maskable = !!i1451[13]
  i1450.m_Color = new pc.Color(i1451[14], i1451[15], i1451[16], i1451[17])
  i1450.m_RaycastTarget = !!i1451[18]
  i1450.m_RaycastPadding = new pc.Vec4( i1451[19], i1451[20], i1451[21], i1451[22] )
  return i1450
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1452 = root || request.c( 'DraggableItem' )
  var i1453 = data
  i1452.idDrag = i1453[0]
  i1452.isClick = !!i1453[1]
  var i1455 = i1453[2]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 2) {
  request.r(i1455[i + 0], i1455[i + 1], 2, i1454, '')
  }
  i1452.steps = i1454
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1459 = data
  i1458.m_Alpha = i1459[0]
  i1458.m_Interactable = !!i1459[1]
  i1458.m_BlocksRaycasts = !!i1459[2]
  i1458.m_IgnoreParentGroups = !!i1459[3]
  i1458.enabled = !!i1459[4]
  return i1458
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1460 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1461 = data
  request.r(i1461[0], i1461[1], 0, i1460, 'skeletonDataAsset')
  request.r(i1461[2], i1461[3], 0, i1460, 'additiveMaterial')
  request.r(i1461[4], i1461[5], 0, i1460, 'multiplyMaterial')
  request.r(i1461[6], i1461[7], 0, i1460, 'screenMaterial')
  i1460.initialSkinName = i1461[8]
  i1460.initialFlipX = !!i1461[9]
  i1460.initialFlipY = !!i1461[10]
  i1460.startingAnimation = i1461[11]
  i1460.startingLoop = !!i1461[12]
  i1460.timeScale = i1461[13]
  i1460.freeze = !!i1461[14]
  i1460.layoutScaleMode = i1461[15]
  i1460.updateWhenInvisible = i1461[16]
  i1460.allowMultipleCanvasRenderers = !!i1461[17]
  var i1463 = i1461[18]
  var i1462 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1463.length; i += 2) {
  request.r(i1463[i + 0], i1463[i + 1], 1, i1462, '')
  }
  i1460.canvasRenderers = i1462
  i1460.enableSeparatorSlots = !!i1461[19]
  i1460.updateSeparatorPartLocation = !!i1461[20]
  i1460.updateSeparatorPartScale = !!i1461[21]
  i1460.disableMeshAssignmentOnOverride = !!i1461[22]
  i1460.referenceSize = new pc.Vec2( i1461[23], i1461[24] )
  i1460.referenceScale = i1461[25]
  i1460.rectTransformSize = new pc.Vec2( i1461[26], i1461[27] )
  i1460.editReferenceRect = !!i1461[28]
  var i1465 = i1461[29]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( i1465[i + 0] );
  }
  i1460.separatorSlotNames = i1464
  var i1467 = i1461[30]
  var i1466 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1467.length; i += 2) {
  request.r(i1467[i + 0], i1467[i + 1], 1, i1466, '')
  }
  i1460.separatorParts = i1466
  i1460.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1461[31], i1460.meshGenerator)
  i1460.updateTiming = i1461[32]
  i1460.unscaledTime = !!i1461[33]
  request.r(i1461[34], i1461[35], 0, i1460, 'm_Material')
  i1460.m_Maskable = !!i1461[36]
  i1460.m_Color = new pc.Color(i1461[37], i1461[38], i1461[39], i1461[40])
  i1460.m_RaycastTarget = !!i1461[41]
  i1460.m_RaycastPadding = new pc.Vec4( i1461[42], i1461[43], i1461[44], i1461[45] )
  return i1460
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1474 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1475 = data
  i1474.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1475[0], i1474.settings)
  return i1474
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1476 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1477 = data
  i1476.useClipping = !!i1477[0]
  i1476.zSpacing = i1477[1]
  i1476.pmaVertexColors = !!i1477[2]
  i1476.tintBlack = !!i1477[3]
  i1476.canvasGroupTintBlack = !!i1477[4]
  i1476.calculateTangents = !!i1477[5]
  i1476.addNormals = !!i1477[6]
  i1476.immutableTriangles = !!i1477[7]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1479 = data
  i1478.usedByComposite = !!i1479[0]
  i1478.autoTiling = !!i1479[1]
  i1478.size = new pc.Vec2( i1479[2], i1479[3] )
  i1478.edgeRadius = i1479[4]
  i1478.enabled = !!i1479[5]
  i1478.isTrigger = !!i1479[6]
  i1478.usedByEffector = !!i1479[7]
  i1478.density = i1479[8]
  i1478.offset = new pc.Vec2( i1479[9], i1479[10] )
  request.r(i1479[11], i1479[12], 0, i1478, 'material')
  return i1478
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1480 = root || request.c( 'DropZone' )
  var i1481 = data
  i1480.idDrop = i1481[0]
  var i1483 = i1481[1]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 2) {
  request.r(i1483[i + 0], i1483[i + 1], 2, i1482, '')
  }
  i1480.steps = i1482
  i1480.isDontWork = !!i1481[2]
  return i1480
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1484 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1485 = data
  i1484.m_hasFontAssetChanged = !!i1485[0]
  request.r(i1485[1], i1485[2], 0, i1484, 'm_baseMaterial')
  i1484.m_maskOffset = new pc.Vec4( i1485[3], i1485[4], i1485[5], i1485[6] )
  i1484.m_text = i1485[7]
  i1484.m_isRightToLeft = !!i1485[8]
  request.r(i1485[9], i1485[10], 0, i1484, 'm_fontAsset')
  request.r(i1485[11], i1485[12], 0, i1484, 'm_sharedMaterial')
  var i1487 = i1485[13]
  var i1486 = []
  for(var i = 0; i < i1487.length; i += 2) {
  request.r(i1487[i + 0], i1487[i + 1], 2, i1486, '')
  }
  i1484.m_fontSharedMaterials = i1486
  request.r(i1485[14], i1485[15], 0, i1484, 'm_fontMaterial')
  var i1489 = i1485[16]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 2) {
  request.r(i1489[i + 0], i1489[i + 1], 2, i1488, '')
  }
  i1484.m_fontMaterials = i1488
  i1484.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1485[17], i1485[18], i1485[19], i1485[20])
  i1484.m_fontColor = new pc.Color(i1485[21], i1485[22], i1485[23], i1485[24])
  i1484.m_enableVertexGradient = !!i1485[25]
  i1484.m_colorMode = i1485[26]
  i1484.m_fontColorGradient = request.d('TMPro.VertexGradient', i1485[27], i1484.m_fontColorGradient)
  request.r(i1485[28], i1485[29], 0, i1484, 'm_fontColorGradientPreset')
  request.r(i1485[30], i1485[31], 0, i1484, 'm_spriteAsset')
  i1484.m_tintAllSprites = !!i1485[32]
  request.r(i1485[33], i1485[34], 0, i1484, 'm_StyleSheet')
  i1484.m_TextStyleHashCode = i1485[35]
  i1484.m_overrideHtmlColors = !!i1485[36]
  i1484.m_faceColor = UnityEngine.Color32.ConstructColor(i1485[37], i1485[38], i1485[39], i1485[40])
  i1484.m_fontSize = i1485[41]
  i1484.m_fontSizeBase = i1485[42]
  i1484.m_fontWeight = i1485[43]
  i1484.m_enableAutoSizing = !!i1485[44]
  i1484.m_fontSizeMin = i1485[45]
  i1484.m_fontSizeMax = i1485[46]
  i1484.m_fontStyle = i1485[47]
  i1484.m_HorizontalAlignment = i1485[48]
  i1484.m_VerticalAlignment = i1485[49]
  i1484.m_textAlignment = i1485[50]
  i1484.m_characterSpacing = i1485[51]
  i1484.m_wordSpacing = i1485[52]
  i1484.m_lineSpacing = i1485[53]
  i1484.m_lineSpacingMax = i1485[54]
  i1484.m_paragraphSpacing = i1485[55]
  i1484.m_charWidthMaxAdj = i1485[56]
  i1484.m_enableWordWrapping = !!i1485[57]
  i1484.m_wordWrappingRatios = i1485[58]
  i1484.m_overflowMode = i1485[59]
  request.r(i1485[60], i1485[61], 0, i1484, 'm_linkedTextComponent')
  request.r(i1485[62], i1485[63], 0, i1484, 'parentLinkedComponent')
  i1484.m_enableKerning = !!i1485[64]
  i1484.m_enableExtraPadding = !!i1485[65]
  i1484.checkPaddingRequired = !!i1485[66]
  i1484.m_isRichText = !!i1485[67]
  i1484.m_parseCtrlCharacters = !!i1485[68]
  i1484.m_isOrthographic = !!i1485[69]
  i1484.m_isCullingEnabled = !!i1485[70]
  i1484.m_horizontalMapping = i1485[71]
  i1484.m_verticalMapping = i1485[72]
  i1484.m_uvLineOffset = i1485[73]
  i1484.m_geometrySortingOrder = i1485[74]
  i1484.m_IsTextObjectScaleStatic = !!i1485[75]
  i1484.m_VertexBufferAutoSizeReduction = !!i1485[76]
  i1484.m_useMaxVisibleDescender = !!i1485[77]
  i1484.m_pageToDisplay = i1485[78]
  i1484.m_margin = new pc.Vec4( i1485[79], i1485[80], i1485[81], i1485[82] )
  i1484.m_isUsingLegacyAnimationComponent = !!i1485[83]
  i1484.m_isVolumetricText = !!i1485[84]
  request.r(i1485[85], i1485[86], 0, i1484, 'm_Material')
  i1484.m_Maskable = !!i1485[87]
  i1484.m_Color = new pc.Color(i1485[88], i1485[89], i1485[90], i1485[91])
  i1484.m_RaycastTarget = !!i1485[92]
  i1484.m_RaycastPadding = new pc.Vec4( i1485[93], i1485[94], i1485[95], i1485[96] )
  return i1484
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1492 = root || request.c( 'TMPro.VertexGradient' )
  var i1493 = data
  i1492.topLeft = new pc.Color(i1493[0], i1493[1], i1493[2], i1493[3])
  i1492.topRight = new pc.Color(i1493[4], i1493[5], i1493[6], i1493[7])
  i1492.bottomLeft = new pc.Color(i1493[8], i1493[9], i1493[10], i1493[11])
  i1492.bottomRight = new pc.Color(i1493[12], i1493[13], i1493[14], i1493[15])
  return i1492
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1494 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1495 = data
  i1494.targetIsSelf = !!i1495[0]
  request.r(i1495[1], i1495[2], 0, i1494, 'targetGO')
  i1494.tweenTargetIsTargetGO = !!i1495[3]
  i1494.delay = i1495[4]
  i1494.duration = i1495[5]
  i1494.easeType = i1495[6]
  i1494.easeCurve = new pc.AnimationCurve( { keys_flow: i1495[7] } )
  i1494.loopType = i1495[8]
  i1494.loops = i1495[9]
  i1494.id = i1495[10]
  i1494.isRelative = !!i1495[11]
  i1494.isFrom = !!i1495[12]
  i1494.isIndependentUpdate = !!i1495[13]
  i1494.autoKill = !!i1495[14]
  i1494.autoGenerate = !!i1495[15]
  i1494.isActive = !!i1495[16]
  i1494.isValid = !!i1495[17]
  request.r(i1495[18], i1495[19], 0, i1494, 'target')
  i1494.animationType = i1495[20]
  i1494.targetType = i1495[21]
  i1494.forcedTargetType = i1495[22]
  i1494.autoPlay = !!i1495[23]
  i1494.useTargetAsV3 = !!i1495[24]
  i1494.endValueFloat = i1495[25]
  i1494.endValueV3 = new pc.Vec3( i1495[26], i1495[27], i1495[28] )
  i1494.endValueV2 = new pc.Vec2( i1495[29], i1495[30] )
  i1494.endValueColor = new pc.Color(i1495[31], i1495[32], i1495[33], i1495[34])
  i1494.endValueString = i1495[35]
  i1494.endValueRect = UnityEngine.Rect.MinMaxRect(i1495[36], i1495[37], i1495[38], i1495[39])
  request.r(i1495[40], i1495[41], 0, i1494, 'endValueTransform')
  i1494.optionalBool0 = !!i1495[42]
  i1494.optionalBool1 = !!i1495[43]
  i1494.optionalFloat0 = i1495[44]
  i1494.optionalInt0 = i1495[45]
  i1494.optionalRotationMode = i1495[46]
  i1494.optionalScrambleMode = i1495[47]
  i1494.optionalShakeRandomnessMode = i1495[48]
  i1494.optionalString = i1495[49]
  i1494.updateType = i1495[50]
  i1494.isSpeedBased = !!i1495[51]
  i1494.hasOnStart = !!i1495[52]
  i1494.hasOnPlay = !!i1495[53]
  i1494.hasOnUpdate = !!i1495[54]
  i1494.hasOnStepComplete = !!i1495[55]
  i1494.hasOnComplete = !!i1495[56]
  i1494.hasOnTweenCreated = !!i1495[57]
  i1494.hasOnRewind = !!i1495[58]
  i1494.onStart = request.d('UnityEngine.Events.UnityEvent', i1495[59], i1494.onStart)
  i1494.onPlay = request.d('UnityEngine.Events.UnityEvent', i1495[60], i1494.onPlay)
  i1494.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1495[61], i1494.onUpdate)
  i1494.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1495[62], i1494.onStepComplete)
  i1494.onComplete = request.d('UnityEngine.Events.UnityEvent', i1495[63], i1494.onComplete)
  i1494.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1495[64], i1494.onTweenCreated)
  i1494.onRewind = request.d('UnityEngine.Events.UnityEvent', i1495[65], i1494.onRewind)
  return i1494
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1496 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1497 = data
  i1496.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1497[0], i1496.m_PersistentCalls)
  return i1496
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1499 = data
  var i1501 = i1499[0]
  var i1500 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.add(request.d('UnityEngine.Events.PersistentCall', i1501[i + 0]));
  }
  i1498.m_Calls = i1500
  return i1498
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1504 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1505 = data
  request.r(i1505[0], i1505[1], 0, i1504, 'm_Target')
  i1504.m_TargetAssemblyTypeName = i1505[2]
  i1504.m_MethodName = i1505[3]
  i1504.m_Mode = i1505[4]
  i1504.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1505[5], i1504.m_Arguments)
  i1504.m_CallState = i1505[6]
  return i1504
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.UI.Button' )
  var i1507 = data
  i1506.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1507[0], i1506.m_OnClick)
  i1506.m_Navigation = request.d('UnityEngine.UI.Navigation', i1507[1], i1506.m_Navigation)
  i1506.m_Transition = i1507[2]
  i1506.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1507[3], i1506.m_Colors)
  i1506.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1507[4], i1506.m_SpriteState)
  i1506.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1507[5], i1506.m_AnimationTriggers)
  i1506.m_Interactable = !!i1507[6]
  request.r(i1507[7], i1507[8], 0, i1506, 'm_TargetGraphic')
  return i1506
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1509 = data
  i1508.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1509[0], i1508.m_PersistentCalls)
  return i1508
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1510 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1511 = data
  i1510.m_Mode = i1511[0]
  i1510.m_WrapAround = !!i1511[1]
  request.r(i1511[2], i1511[3], 0, i1510, 'm_SelectOnUp')
  request.r(i1511[4], i1511[5], 0, i1510, 'm_SelectOnDown')
  request.r(i1511[6], i1511[7], 0, i1510, 'm_SelectOnLeft')
  request.r(i1511[8], i1511[9], 0, i1510, 'm_SelectOnRight')
  return i1510
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1512 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1513 = data
  i1512.m_NormalColor = new pc.Color(i1513[0], i1513[1], i1513[2], i1513[3])
  i1512.m_HighlightedColor = new pc.Color(i1513[4], i1513[5], i1513[6], i1513[7])
  i1512.m_PressedColor = new pc.Color(i1513[8], i1513[9], i1513[10], i1513[11])
  i1512.m_SelectedColor = new pc.Color(i1513[12], i1513[13], i1513[14], i1513[15])
  i1512.m_DisabledColor = new pc.Color(i1513[16], i1513[17], i1513[18], i1513[19])
  i1512.m_ColorMultiplier = i1513[20]
  i1512.m_FadeDuration = i1513[21]
  return i1512
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1514 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1515 = data
  request.r(i1515[0], i1515[1], 0, i1514, 'm_HighlightedSprite')
  request.r(i1515[2], i1515[3], 0, i1514, 'm_PressedSprite')
  request.r(i1515[4], i1515[5], 0, i1514, 'm_SelectedSprite')
  request.r(i1515[6], i1515[7], 0, i1514, 'm_DisabledSprite')
  return i1514
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1516 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1517 = data
  i1516.m_NormalTrigger = i1517[0]
  i1516.m_HighlightedTrigger = i1517[1]
  i1516.m_PressedTrigger = i1517[2]
  i1516.m_SelectedTrigger = i1517[3]
  i1516.m_DisabledTrigger = i1517[4]
  return i1516
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1519 = data
  i1518.m_ShowMaskGraphic = !!i1519[0]
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1521 = data
  i1520.ambientIntensity = i1521[0]
  i1520.reflectionIntensity = i1521[1]
  i1520.ambientMode = i1521[2]
  i1520.ambientLight = new pc.Color(i1521[3], i1521[4], i1521[5], i1521[6])
  i1520.ambientSkyColor = new pc.Color(i1521[7], i1521[8], i1521[9], i1521[10])
  i1520.ambientGroundColor = new pc.Color(i1521[11], i1521[12], i1521[13], i1521[14])
  i1520.ambientEquatorColor = new pc.Color(i1521[15], i1521[16], i1521[17], i1521[18])
  i1520.fogColor = new pc.Color(i1521[19], i1521[20], i1521[21], i1521[22])
  i1520.fogEndDistance = i1521[23]
  i1520.fogStartDistance = i1521[24]
  i1520.fogDensity = i1521[25]
  i1520.fog = !!i1521[26]
  request.r(i1521[27], i1521[28], 0, i1520, 'skybox')
  i1520.fogMode = i1521[29]
  var i1523 = i1521[30]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1523[i + 0]) );
  }
  i1520.lightmaps = i1522
  i1520.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1521[31], i1520.lightProbes)
  i1520.lightmapsMode = i1521[32]
  i1520.mixedBakeMode = i1521[33]
  i1520.environmentLightingMode = i1521[34]
  i1520.ambientProbe = new pc.SphericalHarmonicsL2(i1521[35])
  i1520.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1521[36])
  i1520.useReferenceAmbientProbe = !!i1521[37]
  request.r(i1521[38], i1521[39], 0, i1520, 'customReflection')
  request.r(i1521[40], i1521[41], 0, i1520, 'defaultReflection')
  i1520.defaultReflectionMode = i1521[42]
  i1520.defaultReflectionResolution = i1521[43]
  i1520.sunLightObjectId = i1521[44]
  i1520.pixelLightCount = i1521[45]
  i1520.defaultReflectionHDR = !!i1521[46]
  i1520.hasLightDataAsset = !!i1521[47]
  i1520.hasManualGenerate = !!i1521[48]
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1527 = data
  request.r(i1527[0], i1527[1], 0, i1526, 'lightmapColor')
  request.r(i1527[2], i1527[3], 0, i1526, 'lightmapDirection')
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1528 = root || new UnityEngine.LightProbes()
  var i1529 = data
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1537 = data
  var i1539 = i1537[0]
  var i1538 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1539[i + 0]));
  }
  i1536.ShaderCompilationErrors = i1538
  i1536.name = i1537[1]
  i1536.guid = i1537[2]
  var i1541 = i1537[3]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.push( i1541[i + 0] );
  }
  i1536.shaderDefinedKeywords = i1540
  var i1543 = i1537[4]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1543[i + 0]) );
  }
  i1536.passes = i1542
  var i1545 = i1537[5]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1545[i + 0]) );
  }
  i1536.usePasses = i1544
  var i1547 = i1537[6]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1547[i + 0]) );
  }
  i1536.defaultParameterValues = i1546
  request.r(i1537[7], i1537[8], 0, i1536, 'unityFallbackShader')
  i1536.readDepth = !!i1537[9]
  i1536.isCreatedByShaderGraph = !!i1537[10]
  i1536.usedBatchUniforms = i1537[11]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1551 = data
  i1550.shaderName = i1551[0]
  i1550.errorMessage = i1551[1]
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1554 = root || new pc.UnityShaderPass()
  var i1555 = data
  i1554.id = i1555[0]
  i1554.subShaderIndex = i1555[1]
  i1554.name = i1555[2]
  i1554.passType = i1555[3]
  i1554.grabPassTextureName = i1555[4]
  i1554.usePass = !!i1555[5]
  i1554.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1555[6], i1554.zTest)
  i1554.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1555[7], i1554.zWrite)
  i1554.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1555[8], i1554.culling)
  i1554.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1555[9], i1554.blending)
  i1554.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1555[10], i1554.alphaBlending)
  i1554.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1555[11], i1554.colorWriteMask)
  i1554.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1555[12], i1554.offsetUnits)
  i1554.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1555[13], i1554.offsetFactor)
  i1554.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1555[14], i1554.stencilRef)
  i1554.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1555[15], i1554.stencilReadMask)
  i1554.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1555[16], i1554.stencilWriteMask)
  i1554.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1555[17], i1554.stencilOp)
  i1554.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1555[18], i1554.stencilOpFront)
  i1554.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1555[19], i1554.stencilOpBack)
  var i1557 = i1555[20]
  var i1556 = []
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1557[i + 0]) );
  }
  i1554.tags = i1556
  var i1559 = i1555[21]
  var i1558 = []
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.push( i1559[i + 0] );
  }
  i1554.passDefinedKeywords = i1558
  var i1561 = i1555[22]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 1) {
    i1560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1561[i + 0]) );
  }
  i1554.passDefinedKeywordGroups = i1560
  var i1563 = i1555[23]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1563[i + 0]) );
  }
  i1554.variants = i1562
  var i1565 = i1555[24]
  var i1564 = []
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1565[i + 0]) );
  }
  i1554.excludedVariants = i1564
  i1554.hasDepthReader = !!i1555[25]
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1567 = data
  i1566.val = i1567[0]
  i1566.name = i1567[1]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1569 = data
  i1568.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1569[0], i1568.src)
  i1568.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1569[1], i1568.dst)
  i1568.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1569[2], i1568.op)
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1571 = data
  i1570.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1571[0], i1570.pass)
  i1570.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1571[1], i1570.fail)
  i1570.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1571[2], i1570.zFail)
  i1570.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1571[3], i1570.comp)
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1575 = data
  i1574.name = i1575[0]
  i1574.value = i1575[1]
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1579 = data
  var i1581 = i1579[0]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.push( i1581[i + 0] );
  }
  i1578.keywords = i1580
  i1578.hasDiscard = !!i1579[1]
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1585 = data
  i1584.passId = i1585[0]
  i1584.subShaderIndex = i1585[1]
  var i1587 = i1585[2]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.push( i1587[i + 0] );
  }
  i1584.keywords = i1586
  i1584.vertexProgram = i1585[3]
  i1584.fragmentProgram = i1585[4]
  i1584.compiledForWebGL2 = !!i1585[5]
  i1584.readDepth = !!i1585[6]
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1591 = data
  request.r(i1591[0], i1591[1], 0, i1590, 'shader')
  i1590.pass = i1591[2]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1595 = data
  i1594.name = i1595[0]
  i1594.type = i1595[1]
  i1594.value = new pc.Vec4( i1595[2], i1595[3], i1595[4], i1595[5] )
  i1594.textureValue = i1595[6]
  i1594.shaderPropertyFlag = i1595[7]
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1597 = data
  i1596.name = i1597[0]
  request.r(i1597[1], i1597[2], 0, i1596, 'texture')
  i1596.aabb = i1597[3]
  i1596.vertices = i1597[4]
  i1596.triangles = i1597[5]
  i1596.textureRect = UnityEngine.Rect.MinMaxRect(i1597[6], i1597[7], i1597[8], i1597[9])
  i1596.packedRect = UnityEngine.Rect.MinMaxRect(i1597[10], i1597[11], i1597[12], i1597[13])
  i1596.border = new pc.Vec4( i1597[14], i1597[15], i1597[16], i1597[17] )
  i1596.transparency = i1597[18]
  i1596.bounds = i1597[19]
  i1596.pixelsPerUnit = i1597[20]
  i1596.textureWidth = i1597[21]
  i1596.textureHeight = i1597[22]
  i1596.nativeSize = new pc.Vec2( i1597[23], i1597[24] )
  i1596.pivot = new pc.Vec2( i1597[25], i1597[26] )
  i1596.textureRectOffset = new pc.Vec2( i1597[27], i1597[28] )
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1599 = data
  i1598.name = i1599[0]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1601 = data
  i1600.name = i1601[0]
  i1600.ascent = i1601[1]
  i1600.originalLineHeight = i1601[2]
  i1600.fontSize = i1601[3]
  var i1603 = i1601[4]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 1) {
    i1602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1603[i + 0]) );
  }
  i1600.characterInfo = i1602
  request.r(i1601[5], i1601[6], 0, i1600, 'texture')
  i1600.originalFontSize = i1601[7]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1607 = data
  i1606.index = i1607[0]
  i1606.advance = i1607[1]
  i1606.bearing = i1607[2]
  i1606.glyphWidth = i1607[3]
  i1606.glyphHeight = i1607[4]
  i1606.minX = i1607[5]
  i1606.maxX = i1607[6]
  i1606.minY = i1607[7]
  i1606.maxY = i1607[8]
  i1606.uvBottomLeftX = i1607[9]
  i1606.uvBottomLeftY = i1607[10]
  i1606.uvBottomRightX = i1607[11]
  i1606.uvBottomRightY = i1607[12]
  i1606.uvTopLeftX = i1607[13]
  i1606.uvTopLeftY = i1607[14]
  i1606.uvTopRightX = i1607[15]
  i1606.uvTopRightY = i1607[16]
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1609 = data
  i1608.name = i1609[0]
  i1608.bytes64 = i1609[1]
  i1608.data = i1609[2]
  return i1608
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1610 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1611 = data
  var i1613 = i1611[0]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 2) {
  request.r(i1613[i + 0], i1613[i + 1], 2, i1612, '')
  }
  i1610.atlasAssets = i1612
  i1610.scale = i1611[1]
  request.r(i1611[2], i1611[3], 0, i1610, 'skeletonJSON')
  i1610.isUpgradingBlendModeMaterials = !!i1611[4]
  i1610.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1611[5], i1610.blendModeMaterials)
  var i1615 = i1611[6]
  var i1614 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1615.length; i += 2) {
  request.r(i1615[i + 0], i1615[i + 1], 1, i1614, '')
  }
  i1610.skeletonDataModifiers = i1614
  var i1617 = i1611[7]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.push( i1617[i + 0] );
  }
  i1610.fromAnimation = i1616
  var i1619 = i1611[8]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 1) {
    i1618.push( i1619[i + 0] );
  }
  i1610.toAnimation = i1618
  i1610.duration = i1611[9]
  i1610.defaultMix = i1611[10]
  request.r(i1611[11], i1611[12], 0, i1610, 'controller')
  return i1610
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1622 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1623 = data
  i1622.applyAdditiveMaterial = !!i1623[0]
  var i1625 = i1623[1]
  var i1624 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1625[i + 0]));
  }
  i1622.additiveMaterials = i1624
  var i1627 = i1623[2]
  var i1626 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1627[i + 0]));
  }
  i1622.multiplyMaterials = i1626
  var i1629 = i1623[3]
  var i1628 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1629[i + 0]));
  }
  i1622.screenMaterials = i1628
  i1622.requiresBlendModeMaterials = !!i1623[4]
  return i1622
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1632 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1633 = data
  i1632.pageName = i1633[0]
  request.r(i1633[1], i1633[2], 0, i1632, 'material')
  return i1632
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1636 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1637 = data
  request.r(i1637[0], i1637[1], 0, i1636, 'atlasFile')
  var i1639 = i1637[2]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 2) {
  request.r(i1639[i + 0], i1639[i + 1], 2, i1638, '')
  }
  i1636.materials = i1638
  i1636.textureLoadingMode = i1637[3]
  request.r(i1637[4], i1637[5], 0, i1636, 'onDemandTextureLoader')
  return i1636
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1640 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1641 = data
  i1640.hashCode = i1641[0]
  request.r(i1641[1], i1641[2], 0, i1640, 'material')
  i1640.materialHashCode = i1641[3]
  request.r(i1641[4], i1641[5], 0, i1640, 'atlas')
  i1640.normalStyle = i1641[6]
  i1640.normalSpacingOffset = i1641[7]
  i1640.boldStyle = i1641[8]
  i1640.boldSpacing = i1641[9]
  i1640.italicStyle = i1641[10]
  i1640.tabSize = i1641[11]
  i1640.m_Version = i1641[12]
  i1640.m_SourceFontFileGUID = i1641[13]
  request.r(i1641[14], i1641[15], 0, i1640, 'm_SourceFontFile_EditorRef')
  request.r(i1641[16], i1641[17], 0, i1640, 'm_SourceFontFile')
  i1640.m_AtlasPopulationMode = i1641[18]
  i1640.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1641[19], i1640.m_FaceInfo)
  var i1643 = i1641[20]
  var i1642 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.add(request.d('UnityEngine.TextCore.Glyph', i1643[i + 0]));
  }
  i1640.m_GlyphTable = i1642
  var i1645 = i1641[21]
  var i1644 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.add(request.d('TMPro.TMP_Character', i1645[i + 0]));
  }
  i1640.m_CharacterTable = i1644
  var i1647 = i1641[22]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 2) {
  request.r(i1647[i + 0], i1647[i + 1], 2, i1646, '')
  }
  i1640.m_AtlasTextures = i1646
  i1640.m_AtlasTextureIndex = i1641[23]
  i1640.m_IsMultiAtlasTexturesEnabled = !!i1641[24]
  i1640.m_ClearDynamicDataOnBuild = !!i1641[25]
  var i1649 = i1641[26]
  var i1648 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1649.length; i += 1) {
    i1648.add(request.d('UnityEngine.TextCore.GlyphRect', i1649[i + 0]));
  }
  i1640.m_UsedGlyphRects = i1648
  var i1651 = i1641[27]
  var i1650 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.add(request.d('UnityEngine.TextCore.GlyphRect', i1651[i + 0]));
  }
  i1640.m_FreeGlyphRects = i1650
  i1640.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1641[28], i1640.m_fontInfo)
  i1640.m_AtlasWidth = i1641[29]
  i1640.m_AtlasHeight = i1641[30]
  i1640.m_AtlasPadding = i1641[31]
  i1640.m_AtlasRenderMode = i1641[32]
  var i1653 = i1641[33]
  var i1652 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.add(request.d('TMPro.TMP_Glyph', i1653[i + 0]));
  }
  i1640.m_glyphInfoList = i1652
  i1640.m_KerningTable = request.d('TMPro.KerningTable', i1641[34], i1640.m_KerningTable)
  i1640.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1641[35], i1640.m_FontFeatureTable)
  var i1655 = i1641[36]
  var i1654 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1655.length; i += 2) {
  request.r(i1655[i + 0], i1655[i + 1], 1, i1654, '')
  }
  i1640.fallbackFontAssets = i1654
  var i1657 = i1641[37]
  var i1656 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1657.length; i += 2) {
  request.r(i1657[i + 0], i1657[i + 1], 1, i1656, '')
  }
  i1640.m_FallbackFontAssetTable = i1656
  i1640.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1641[38], i1640.m_CreationSettings)
  var i1659 = i1641[39]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( request.d('TMPro.TMP_FontWeightPair', i1659[i + 0]) );
  }
  i1640.m_FontWeightTable = i1658
  var i1661 = i1641[40]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( request.d('TMPro.TMP_FontWeightPair', i1661[i + 0]) );
  }
  i1640.fontWeights = i1660
  return i1640
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1663 = data
  i1662.m_FaceIndex = i1663[0]
  i1662.m_FamilyName = i1663[1]
  i1662.m_StyleName = i1663[2]
  i1662.m_PointSize = i1663[3]
  i1662.m_Scale = i1663[4]
  i1662.m_UnitsPerEM = i1663[5]
  i1662.m_LineHeight = i1663[6]
  i1662.m_AscentLine = i1663[7]
  i1662.m_CapLine = i1663[8]
  i1662.m_MeanLine = i1663[9]
  i1662.m_Baseline = i1663[10]
  i1662.m_DescentLine = i1663[11]
  i1662.m_SuperscriptOffset = i1663[12]
  i1662.m_SuperscriptSize = i1663[13]
  i1662.m_SubscriptOffset = i1663[14]
  i1662.m_SubscriptSize = i1663[15]
  i1662.m_UnderlineOffset = i1663[16]
  i1662.m_UnderlineThickness = i1663[17]
  i1662.m_StrikethroughOffset = i1663[18]
  i1662.m_StrikethroughThickness = i1663[19]
  i1662.m_TabWidth = i1663[20]
  return i1662
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1666 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1667 = data
  i1666.m_Index = i1667[0]
  i1666.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1667[1], i1666.m_Metrics)
  i1666.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1667[2], i1666.m_GlyphRect)
  i1666.m_Scale = i1667[3]
  i1666.m_AtlasIndex = i1667[4]
  i1666.m_ClassDefinitionType = i1667[5]
  return i1666
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1669 = data
  i1668.m_Width = i1669[0]
  i1668.m_Height = i1669[1]
  i1668.m_HorizontalBearingX = i1669[2]
  i1668.m_HorizontalBearingY = i1669[3]
  i1668.m_HorizontalAdvance = i1669[4]
  return i1668
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1671 = data
  i1670.m_X = i1671[0]
  i1670.m_Y = i1671[1]
  i1670.m_Width = i1671[2]
  i1670.m_Height = i1671[3]
  return i1670
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1674 = root || request.c( 'TMPro.TMP_Character' )
  var i1675 = data
  i1674.m_ElementType = i1675[0]
  i1674.m_Unicode = i1675[1]
  i1674.m_GlyphIndex = i1675[2]
  i1674.m_Scale = i1675[3]
  return i1674
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1680 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1681 = data
  i1680.Name = i1681[0]
  i1680.PointSize = i1681[1]
  i1680.Scale = i1681[2]
  i1680.CharacterCount = i1681[3]
  i1680.LineHeight = i1681[4]
  i1680.Baseline = i1681[5]
  i1680.Ascender = i1681[6]
  i1680.CapHeight = i1681[7]
  i1680.Descender = i1681[8]
  i1680.CenterLine = i1681[9]
  i1680.SuperscriptOffset = i1681[10]
  i1680.SubscriptOffset = i1681[11]
  i1680.SubSize = i1681[12]
  i1680.Underline = i1681[13]
  i1680.UnderlineThickness = i1681[14]
  i1680.strikethrough = i1681[15]
  i1680.strikethroughThickness = i1681[16]
  i1680.TabWidth = i1681[17]
  i1680.Padding = i1681[18]
  i1680.AtlasWidth = i1681[19]
  i1680.AtlasHeight = i1681[20]
  return i1680
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1684 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1685 = data
  i1684.id = i1685[0]
  i1684.x = i1685[1]
  i1684.y = i1685[2]
  i1684.width = i1685[3]
  i1684.height = i1685[4]
  i1684.xOffset = i1685[5]
  i1684.yOffset = i1685[6]
  i1684.xAdvance = i1685[7]
  i1684.scale = i1685[8]
  return i1684
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1686 = root || request.c( 'TMPro.KerningTable' )
  var i1687 = data
  var i1689 = i1687[0]
  var i1688 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.add(request.d('TMPro.KerningPair', i1689[i + 0]));
  }
  i1686.kerningPairs = i1688
  return i1686
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1692 = root || request.c( 'TMPro.KerningPair' )
  var i1693 = data
  i1692.xOffset = i1693[0]
  i1692.m_FirstGlyph = i1693[1]
  i1692.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1693[2], i1692.m_FirstGlyphAdjustments)
  i1692.m_SecondGlyph = i1693[3]
  i1692.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1693[4], i1692.m_SecondGlyphAdjustments)
  i1692.m_IgnoreSpacingAdjustments = !!i1693[5]
  return i1692
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1694 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1695 = data
  var i1697 = i1695[0]
  var i1696 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1697.length; i += 1) {
    i1696.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1697[i + 0]));
  }
  i1694.m_GlyphPairAdjustmentRecords = i1696
  return i1694
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1700 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1701 = data
  i1700.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1701[0], i1700.m_FirstAdjustmentRecord)
  i1700.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1701[1], i1700.m_SecondAdjustmentRecord)
  i1700.m_FeatureLookupFlags = i1701[2]
  return i1700
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1704 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1705 = data
  i1704.sourceFontFileName = i1705[0]
  i1704.sourceFontFileGUID = i1705[1]
  i1704.pointSizeSamplingMode = i1705[2]
  i1704.pointSize = i1705[3]
  i1704.padding = i1705[4]
  i1704.packingMode = i1705[5]
  i1704.atlasWidth = i1705[6]
  i1704.atlasHeight = i1705[7]
  i1704.characterSetSelectionMode = i1705[8]
  i1704.characterSequence = i1705[9]
  i1704.referencedFontAssetGUID = i1705[10]
  i1704.referencedTextAssetGUID = i1705[11]
  i1704.fontStyle = i1705[12]
  i1704.fontStyleModifier = i1705[13]
  i1704.renderMode = i1705[14]
  i1704.includeFontFeatures = !!i1705[15]
  return i1704
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1708 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1709 = data
  request.r(i1709[0], i1709[1], 0, i1708, 'regularTypeface')
  request.r(i1709[2], i1709[3], 0, i1708, 'italicTypeface')
  return i1708
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1710 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1711 = data
  i1710.useSafeMode = !!i1711[0]
  i1710.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1711[1], i1710.safeModeOptions)
  i1710.timeScale = i1711[2]
  i1710.unscaledTimeScale = i1711[3]
  i1710.useSmoothDeltaTime = !!i1711[4]
  i1710.maxSmoothUnscaledTime = i1711[5]
  i1710.rewindCallbackMode = i1711[6]
  i1710.showUnityEditorReport = !!i1711[7]
  i1710.logBehaviour = i1711[8]
  i1710.drawGizmos = !!i1711[9]
  i1710.defaultRecyclable = !!i1711[10]
  i1710.defaultAutoPlay = i1711[11]
  i1710.defaultUpdateType = i1711[12]
  i1710.defaultTimeScaleIndependent = !!i1711[13]
  i1710.defaultEaseType = i1711[14]
  i1710.defaultEaseOvershootOrAmplitude = i1711[15]
  i1710.defaultEasePeriod = i1711[16]
  i1710.defaultAutoKill = !!i1711[17]
  i1710.defaultLoopType = i1711[18]
  i1710.debugMode = !!i1711[19]
  i1710.debugStoreTargetId = !!i1711[20]
  i1710.showPreviewPanel = !!i1711[21]
  i1710.storeSettingsLocation = i1711[22]
  i1710.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1711[23], i1710.modules)
  i1710.createASMDEF = !!i1711[24]
  i1710.showPlayingTweens = !!i1711[25]
  i1710.showPausedTweens = !!i1711[26]
  return i1710
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1712 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1713 = data
  i1712.logBehaviour = i1713[0]
  i1712.nestedTweenFailureBehaviour = i1713[1]
  return i1712
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1714 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1715 = data
  i1714.showPanel = !!i1715[0]
  i1714.audioEnabled = !!i1715[1]
  i1714.physicsEnabled = !!i1715[2]
  i1714.physics2DEnabled = !!i1715[3]
  i1714.spriteEnabled = !!i1715[4]
  i1714.uiEnabled = !!i1715[5]
  i1714.textMeshProEnabled = !!i1715[6]
  i1714.tk2DEnabled = !!i1715[7]
  i1714.deAudioEnabled = !!i1715[8]
  i1714.deUnityExtendedEnabled = !!i1715[9]
  i1714.epoOutlineEnabled = !!i1715[10]
  return i1714
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1716 = root || request.c( 'TMPro.TMP_Settings' )
  var i1717 = data
  i1716.m_enableWordWrapping = !!i1717[0]
  i1716.m_enableKerning = !!i1717[1]
  i1716.m_enableExtraPadding = !!i1717[2]
  i1716.m_enableTintAllSprites = !!i1717[3]
  i1716.m_enableParseEscapeCharacters = !!i1717[4]
  i1716.m_EnableRaycastTarget = !!i1717[5]
  i1716.m_GetFontFeaturesAtRuntime = !!i1717[6]
  i1716.m_missingGlyphCharacter = i1717[7]
  i1716.m_warningsDisabled = !!i1717[8]
  request.r(i1717[9], i1717[10], 0, i1716, 'm_defaultFontAsset')
  i1716.m_defaultFontAssetPath = i1717[11]
  i1716.m_defaultFontSize = i1717[12]
  i1716.m_defaultAutoSizeMinRatio = i1717[13]
  i1716.m_defaultAutoSizeMaxRatio = i1717[14]
  i1716.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1717[15], i1717[16] )
  i1716.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1717[17], i1717[18] )
  i1716.m_autoSizeTextContainer = !!i1717[19]
  i1716.m_IsTextObjectScaleStatic = !!i1717[20]
  var i1719 = i1717[21]
  var i1718 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1719.length; i += 2) {
  request.r(i1719[i + 0], i1719[i + 1], 1, i1718, '')
  }
  i1716.m_fallbackFontAssets = i1718
  i1716.m_matchMaterialPreset = !!i1717[22]
  request.r(i1717[23], i1717[24], 0, i1716, 'm_defaultSpriteAsset')
  i1716.m_defaultSpriteAssetPath = i1717[25]
  i1716.m_enableEmojiSupport = !!i1717[26]
  i1716.m_MissingCharacterSpriteUnicode = i1717[27]
  i1716.m_defaultColorGradientPresetsPath = i1717[28]
  request.r(i1717[29], i1717[30], 0, i1716, 'm_defaultStyleSheet')
  i1716.m_StyleSheetsResourcePath = i1717[31]
  request.r(i1717[32], i1717[33], 0, i1716, 'm_leadingCharacters')
  request.r(i1717[34], i1717[35], 0, i1716, 'm_followingCharacters')
  i1716.m_UseModernHangulLineBreakingRules = !!i1717[36]
  return i1716
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1720 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1721 = data
  i1720.m_GlyphIndex = i1721[0]
  i1720.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1721[1], i1720.m_GlyphValueRecord)
  return i1720
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1722 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1723 = data
  i1722.m_XPlacement = i1723[0]
  i1722.m_YPlacement = i1723[1]
  i1722.m_XAdvance = i1723[2]
  i1722.m_YAdvance = i1723[3]
  return i1722
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1724 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1725 = data
  i1724.hashCode = i1725[0]
  request.r(i1725[1], i1725[2], 0, i1724, 'material')
  i1724.materialHashCode = i1725[3]
  request.r(i1725[4], i1725[5], 0, i1724, 'spriteSheet')
  var i1727 = i1725[6]
  var i1726 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.add(request.d('TMPro.TMP_Sprite', i1727[i + 0]));
  }
  i1724.spriteInfoList = i1726
  var i1729 = i1725[7]
  var i1728 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1729.length; i += 2) {
  request.r(i1729[i + 0], i1729[i + 1], 1, i1728, '')
  }
  i1724.fallbackSpriteAssets = i1728
  i1724.m_Version = i1725[8]
  i1724.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1725[9], i1724.m_FaceInfo)
  var i1731 = i1725[10]
  var i1730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.add(request.d('TMPro.TMP_SpriteCharacter', i1731[i + 0]));
  }
  i1724.m_SpriteCharacterTable = i1730
  var i1733 = i1725[11]
  var i1732 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.add(request.d('TMPro.TMP_SpriteGlyph', i1733[i + 0]));
  }
  i1724.m_SpriteGlyphTable = i1732
  return i1724
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1736 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1737 = data
  i1736.name = i1737[0]
  i1736.hashCode = i1737[1]
  i1736.unicode = i1737[2]
  i1736.pivot = new pc.Vec2( i1737[3], i1737[4] )
  request.r(i1737[5], i1737[6], 0, i1736, 'sprite')
  i1736.id = i1737[7]
  i1736.x = i1737[8]
  i1736.y = i1737[9]
  i1736.width = i1737[10]
  i1736.height = i1737[11]
  i1736.xOffset = i1737[12]
  i1736.yOffset = i1737[13]
  i1736.xAdvance = i1737[14]
  i1736.scale = i1737[15]
  return i1736
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1742 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1743 = data
  i1742.m_Name = i1743[0]
  i1742.m_HashCode = i1743[1]
  i1742.m_ElementType = i1743[2]
  i1742.m_Unicode = i1743[3]
  i1742.m_GlyphIndex = i1743[4]
  i1742.m_Scale = i1743[5]
  return i1742
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1746 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1747 = data
  request.r(i1747[0], i1747[1], 0, i1746, 'sprite')
  i1746.m_Index = i1747[2]
  i1746.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1747[3], i1746.m_Metrics)
  i1746.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1747[4], i1746.m_GlyphRect)
  i1746.m_Scale = i1747[5]
  i1746.m_AtlasIndex = i1747[6]
  i1746.m_ClassDefinitionType = i1747[7]
  return i1746
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1748 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1749 = data
  var i1751 = i1749[0]
  var i1750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.add(request.d('TMPro.TMP_Style', i1751[i + 0]));
  }
  i1748.m_StyleList = i1750
  return i1748
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1754 = root || request.c( 'TMPro.TMP_Style' )
  var i1755 = data
  i1754.m_Name = i1755[0]
  i1754.m_HashCode = i1755[1]
  i1754.m_OpeningDefinition = i1755[2]
  i1754.m_ClosingDefinition = i1755[3]
  i1754.m_OpeningTagArray = i1755[4]
  i1754.m_ClosingTagArray = i1755[5]
  i1754.m_OpeningTagUnicodeArray = i1755[6]
  i1754.m_ClosingTagUnicodeArray = i1755[7]
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1757 = data
  var i1759 = i1757[0]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1759[i + 0]) );
  }
  i1756.files = i1758
  i1756.componentToPrefabIds = i1757[1]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1763 = data
  i1762.path = i1763[0]
  request.r(i1763[1], i1763[2], 0, i1762, 'unityObject')
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1765 = data
  var i1767 = i1765[0]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1767[i + 0]) );
  }
  i1764.scriptsExecutionOrder = i1766
  var i1769 = i1765[1]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1769[i + 0]) );
  }
  i1764.sortingLayers = i1768
  var i1771 = i1765[2]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1771[i + 0]) );
  }
  i1764.cullingLayers = i1770
  i1764.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1765[3], i1764.timeSettings)
  i1764.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1765[4], i1764.physicsSettings)
  i1764.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1765[5], i1764.physics2DSettings)
  i1764.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1765[6], i1764.qualitySettings)
  i1764.enableRealtimeShadows = !!i1765[7]
  i1764.enableAutoInstancing = !!i1765[8]
  i1764.enableDynamicBatching = !!i1765[9]
  i1764.lightmapEncodingQuality = i1765[10]
  i1764.desiredColorSpace = i1765[11]
  var i1773 = i1765[12]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( i1773[i + 0] );
  }
  i1764.allTags = i1772
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1777 = data
  i1776.name = i1777[0]
  i1776.value = i1777[1]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1781 = data
  i1780.id = i1781[0]
  i1780.name = i1781[1]
  i1780.value = i1781[2]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1785 = data
  i1784.id = i1785[0]
  i1784.name = i1785[1]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1787 = data
  i1786.fixedDeltaTime = i1787[0]
  i1786.maximumDeltaTime = i1787[1]
  i1786.timeScale = i1787[2]
  i1786.maximumParticleTimestep = i1787[3]
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1789 = data
  i1788.gravity = new pc.Vec3( i1789[0], i1789[1], i1789[2] )
  i1788.defaultSolverIterations = i1789[3]
  i1788.bounceThreshold = i1789[4]
  i1788.autoSyncTransforms = !!i1789[5]
  i1788.autoSimulation = !!i1789[6]
  var i1791 = i1789[7]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1791[i + 0]) );
  }
  i1788.collisionMatrix = i1790
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1795 = data
  i1794.enabled = !!i1795[0]
  i1794.layerId = i1795[1]
  i1794.otherLayerId = i1795[2]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1797 = data
  request.r(i1797[0], i1797[1], 0, i1796, 'material')
  i1796.gravity = new pc.Vec2( i1797[2], i1797[3] )
  i1796.positionIterations = i1797[4]
  i1796.velocityIterations = i1797[5]
  i1796.velocityThreshold = i1797[6]
  i1796.maxLinearCorrection = i1797[7]
  i1796.maxAngularCorrection = i1797[8]
  i1796.maxTranslationSpeed = i1797[9]
  i1796.maxRotationSpeed = i1797[10]
  i1796.baumgarteScale = i1797[11]
  i1796.baumgarteTOIScale = i1797[12]
  i1796.timeToSleep = i1797[13]
  i1796.linearSleepTolerance = i1797[14]
  i1796.angularSleepTolerance = i1797[15]
  i1796.defaultContactOffset = i1797[16]
  i1796.autoSimulation = !!i1797[17]
  i1796.queriesHitTriggers = !!i1797[18]
  i1796.queriesStartInColliders = !!i1797[19]
  i1796.callbacksOnDisable = !!i1797[20]
  i1796.reuseCollisionCallbacks = !!i1797[21]
  i1796.autoSyncTransforms = !!i1797[22]
  var i1799 = i1797[23]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1799[i + 0]) );
  }
  i1796.collisionMatrix = i1798
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1803 = data
  i1802.enabled = !!i1803[0]
  i1802.layerId = i1803[1]
  i1802.otherLayerId = i1803[2]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1805 = data
  var i1807 = i1805[0]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1807[i + 0]) );
  }
  i1804.qualityLevels = i1806
  var i1809 = i1805[1]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( i1809[i + 0] );
  }
  i1804.names = i1808
  i1804.shadows = i1805[2]
  i1804.anisotropicFiltering = i1805[3]
  i1804.antiAliasing = i1805[4]
  i1804.lodBias = i1805[5]
  i1804.shadowCascades = i1805[6]
  i1804.shadowDistance = i1805[7]
  i1804.shadowmaskMode = i1805[8]
  i1804.shadowProjection = i1805[9]
  i1804.shadowResolution = i1805[10]
  i1804.softParticles = !!i1805[11]
  i1804.softVegetation = !!i1805[12]
  i1804.activeColorSpace = i1805[13]
  i1804.desiredColorSpace = i1805[14]
  i1804.masterTextureLimit = i1805[15]
  i1804.maxQueuedFrames = i1805[16]
  i1804.particleRaycastBudget = i1805[17]
  i1804.pixelLightCount = i1805[18]
  i1804.realtimeReflectionProbes = !!i1805[19]
  i1804.shadowCascade2Split = i1805[20]
  i1804.shadowCascade4Split = new pc.Vec3( i1805[21], i1805[22], i1805[23] )
  i1804.streamingMipmapsActive = !!i1805[24]
  i1804.vSyncCount = i1805[25]
  i1804.asyncUploadBufferSize = i1805[26]
  i1804.asyncUploadTimeSlice = i1805[27]
  i1804.billboardsFaceCameraPosition = !!i1805[28]
  i1804.shadowNearPlaneOffset = i1805[29]
  i1804.streamingMipmapsMemoryBudget = i1805[30]
  i1804.maximumLODLevel = i1805[31]
  i1804.streamingMipmapsAddAllCameras = !!i1805[32]
  i1804.streamingMipmapsMaxLevelReduction = i1805[33]
  i1804.streamingMipmapsRenderersPerFrame = i1805[34]
  i1804.resolutionScalingFixedDPIFactor = i1805[35]
  i1804.streamingMipmapsMaxFileIORequests = i1805[36]
  i1804.currentQualityLevel = i1805[37]
  return i1804
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1812 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1813 = data
  request.r(i1813[0], i1813[1], 0, i1812, 'm_ObjectArgument')
  i1812.m_ObjectArgumentAssemblyTypeName = i1813[2]
  i1812.m_IntArgument = i1813[3]
  i1812.m_FloatArgument = i1813[4]
  i1812.m_StringArgument = i1813[5]
  i1812.m_BoolArgument = !!i1813[6]
  return i1812
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1814 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1815 = data
  i1814.xPlacement = i1815[0]
  i1814.yPlacement = i1815[1]
  i1814.xAdvance = i1815[2]
  i1814.yAdvance = i1815[3]
  return i1814
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[3],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[51],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[59],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[3],"73":[74],"75":[76],"77":[76],"9":[8],"78":[79],"80":[81],"82":[79],"83":[8],"84":[8],"11":[9],"18":[19,8],"85":[8],"10":[9],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"32":[8],"93":[8],"16":[19,8],"94":[8],"95":[8],"96":[8],"97":[8],"98":[19,8],"99":[8],"100":[6],"101":[6],"7":[6],"102":[6],"103":[3],"104":[3],"105":[106],"107":[3],"108":[109],"110":[8],"111":[19,8],"112":[74],"25":[19,8],"113":[114,74],"115":[74],"116":[74,117],"118":[51],"119":[59],"120":[109],"121":[122],"123":[8],"124":[74,8],"17":[8,19],"125":[8],"126":[19,8],"127":[74],"128":[19,8],"129":[8],"130":[79]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","DraggableItem","UnityEngine.CanvasGroup","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.BoxCollider2D","DropZone","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "21.3";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "BP_V01_ManhND_AnhPD";

Deserializers.lunaAppID = "31727";

Deserializers.projectId = "cc2b1186a2056e546bb13add5b988034";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

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

Deserializers.buildID = "2c2d3c7d-5c2e-4971-9eaa-9ebeab1b39cc";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

