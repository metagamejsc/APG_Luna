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
  request.r(i1439[20], i1439[21], 0, i1438, 'chatBox')
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

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1484 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1485 = data
  i1484.targetIsSelf = !!i1485[0]
  request.r(i1485[1], i1485[2], 0, i1484, 'targetGO')
  i1484.tweenTargetIsTargetGO = !!i1485[3]
  i1484.delay = i1485[4]
  i1484.duration = i1485[5]
  i1484.easeType = i1485[6]
  i1484.easeCurve = new pc.AnimationCurve( { keys_flow: i1485[7] } )
  i1484.loopType = i1485[8]
  i1484.loops = i1485[9]
  i1484.id = i1485[10]
  i1484.isRelative = !!i1485[11]
  i1484.isFrom = !!i1485[12]
  i1484.isIndependentUpdate = !!i1485[13]
  i1484.autoKill = !!i1485[14]
  i1484.autoGenerate = !!i1485[15]
  i1484.isActive = !!i1485[16]
  i1484.isValid = !!i1485[17]
  request.r(i1485[18], i1485[19], 0, i1484, 'target')
  i1484.animationType = i1485[20]
  i1484.targetType = i1485[21]
  i1484.forcedTargetType = i1485[22]
  i1484.autoPlay = !!i1485[23]
  i1484.useTargetAsV3 = !!i1485[24]
  i1484.endValueFloat = i1485[25]
  i1484.endValueV3 = new pc.Vec3( i1485[26], i1485[27], i1485[28] )
  i1484.endValueV2 = new pc.Vec2( i1485[29], i1485[30] )
  i1484.endValueColor = new pc.Color(i1485[31], i1485[32], i1485[33], i1485[34])
  i1484.endValueString = i1485[35]
  i1484.endValueRect = UnityEngine.Rect.MinMaxRect(i1485[36], i1485[37], i1485[38], i1485[39])
  request.r(i1485[40], i1485[41], 0, i1484, 'endValueTransform')
  i1484.optionalBool0 = !!i1485[42]
  i1484.optionalBool1 = !!i1485[43]
  i1484.optionalFloat0 = i1485[44]
  i1484.optionalInt0 = i1485[45]
  i1484.optionalRotationMode = i1485[46]
  i1484.optionalScrambleMode = i1485[47]
  i1484.optionalShakeRandomnessMode = i1485[48]
  i1484.optionalString = i1485[49]
  i1484.updateType = i1485[50]
  i1484.isSpeedBased = !!i1485[51]
  i1484.hasOnStart = !!i1485[52]
  i1484.hasOnPlay = !!i1485[53]
  i1484.hasOnUpdate = !!i1485[54]
  i1484.hasOnStepComplete = !!i1485[55]
  i1484.hasOnComplete = !!i1485[56]
  i1484.hasOnTweenCreated = !!i1485[57]
  i1484.hasOnRewind = !!i1485[58]
  i1484.onStart = request.d('UnityEngine.Events.UnityEvent', i1485[59], i1484.onStart)
  i1484.onPlay = request.d('UnityEngine.Events.UnityEvent', i1485[60], i1484.onPlay)
  i1484.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1485[61], i1484.onUpdate)
  i1484.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1485[62], i1484.onStepComplete)
  i1484.onComplete = request.d('UnityEngine.Events.UnityEvent', i1485[63], i1484.onComplete)
  i1484.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1485[64], i1484.onTweenCreated)
  i1484.onRewind = request.d('UnityEngine.Events.UnityEvent', i1485[65], i1484.onRewind)
  return i1484
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1486 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1487 = data
  i1486.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1487[0], i1486.m_PersistentCalls)
  return i1486
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1488 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1489 = data
  var i1491 = i1489[0]
  var i1490 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.add(request.d('UnityEngine.Events.PersistentCall', i1491[i + 0]));
  }
  i1488.m_Calls = i1490
  return i1488
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1495 = data
  request.r(i1495[0], i1495[1], 0, i1494, 'm_Target')
  i1494.m_TargetAssemblyTypeName = i1495[2]
  i1494.m_MethodName = i1495[3]
  i1494.m_Mode = i1495[4]
  i1494.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1495[5], i1494.m_Arguments)
  i1494.m_CallState = i1495[6]
  return i1494
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1496 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1497 = data
  request.r(i1497[0], i1497[1], 0, i1496, 'm_ObjectArgument')
  i1496.m_ObjectArgumentAssemblyTypeName = i1497[2]
  i1496.m_IntArgument = i1497[3]
  i1496.m_FloatArgument = i1497[4]
  i1496.m_StringArgument = i1497[5]
  i1496.m_BoolArgument = !!i1497[6]
  return i1496
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1498 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1499 = data
  i1498.m_hasFontAssetChanged = !!i1499[0]
  request.r(i1499[1], i1499[2], 0, i1498, 'm_baseMaterial')
  i1498.m_maskOffset = new pc.Vec4( i1499[3], i1499[4], i1499[5], i1499[6] )
  i1498.m_text = i1499[7]
  i1498.m_isRightToLeft = !!i1499[8]
  request.r(i1499[9], i1499[10], 0, i1498, 'm_fontAsset')
  request.r(i1499[11], i1499[12], 0, i1498, 'm_sharedMaterial')
  var i1501 = i1499[13]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 2) {
  request.r(i1501[i + 0], i1501[i + 1], 2, i1500, '')
  }
  i1498.m_fontSharedMaterials = i1500
  request.r(i1499[14], i1499[15], 0, i1498, 'm_fontMaterial')
  var i1503 = i1499[16]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 2) {
  request.r(i1503[i + 0], i1503[i + 1], 2, i1502, '')
  }
  i1498.m_fontMaterials = i1502
  i1498.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1499[17], i1499[18], i1499[19], i1499[20])
  i1498.m_fontColor = new pc.Color(i1499[21], i1499[22], i1499[23], i1499[24])
  i1498.m_enableVertexGradient = !!i1499[25]
  i1498.m_colorMode = i1499[26]
  i1498.m_fontColorGradient = request.d('TMPro.VertexGradient', i1499[27], i1498.m_fontColorGradient)
  request.r(i1499[28], i1499[29], 0, i1498, 'm_fontColorGradientPreset')
  request.r(i1499[30], i1499[31], 0, i1498, 'm_spriteAsset')
  i1498.m_tintAllSprites = !!i1499[32]
  request.r(i1499[33], i1499[34], 0, i1498, 'm_StyleSheet')
  i1498.m_TextStyleHashCode = i1499[35]
  i1498.m_overrideHtmlColors = !!i1499[36]
  i1498.m_faceColor = UnityEngine.Color32.ConstructColor(i1499[37], i1499[38], i1499[39], i1499[40])
  i1498.m_fontSize = i1499[41]
  i1498.m_fontSizeBase = i1499[42]
  i1498.m_fontWeight = i1499[43]
  i1498.m_enableAutoSizing = !!i1499[44]
  i1498.m_fontSizeMin = i1499[45]
  i1498.m_fontSizeMax = i1499[46]
  i1498.m_fontStyle = i1499[47]
  i1498.m_HorizontalAlignment = i1499[48]
  i1498.m_VerticalAlignment = i1499[49]
  i1498.m_textAlignment = i1499[50]
  i1498.m_characterSpacing = i1499[51]
  i1498.m_wordSpacing = i1499[52]
  i1498.m_lineSpacing = i1499[53]
  i1498.m_lineSpacingMax = i1499[54]
  i1498.m_paragraphSpacing = i1499[55]
  i1498.m_charWidthMaxAdj = i1499[56]
  i1498.m_enableWordWrapping = !!i1499[57]
  i1498.m_wordWrappingRatios = i1499[58]
  i1498.m_overflowMode = i1499[59]
  request.r(i1499[60], i1499[61], 0, i1498, 'm_linkedTextComponent')
  request.r(i1499[62], i1499[63], 0, i1498, 'parentLinkedComponent')
  i1498.m_enableKerning = !!i1499[64]
  i1498.m_enableExtraPadding = !!i1499[65]
  i1498.checkPaddingRequired = !!i1499[66]
  i1498.m_isRichText = !!i1499[67]
  i1498.m_parseCtrlCharacters = !!i1499[68]
  i1498.m_isOrthographic = !!i1499[69]
  i1498.m_isCullingEnabled = !!i1499[70]
  i1498.m_horizontalMapping = i1499[71]
  i1498.m_verticalMapping = i1499[72]
  i1498.m_uvLineOffset = i1499[73]
  i1498.m_geometrySortingOrder = i1499[74]
  i1498.m_IsTextObjectScaleStatic = !!i1499[75]
  i1498.m_VertexBufferAutoSizeReduction = !!i1499[76]
  i1498.m_useMaxVisibleDescender = !!i1499[77]
  i1498.m_pageToDisplay = i1499[78]
  i1498.m_margin = new pc.Vec4( i1499[79], i1499[80], i1499[81], i1499[82] )
  i1498.m_isUsingLegacyAnimationComponent = !!i1499[83]
  i1498.m_isVolumetricText = !!i1499[84]
  request.r(i1499[85], i1499[86], 0, i1498, 'm_Material')
  i1498.m_Maskable = !!i1499[87]
  i1498.m_Color = new pc.Color(i1499[88], i1499[89], i1499[90], i1499[91])
  i1498.m_RaycastTarget = !!i1499[92]
  i1498.m_RaycastPadding = new pc.Vec4( i1499[93], i1499[94], i1499[95], i1499[96] )
  return i1498
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1506 = root || request.c( 'TMPro.VertexGradient' )
  var i1507 = data
  i1506.topLeft = new pc.Color(i1507[0], i1507[1], i1507[2], i1507[3])
  i1506.topRight = new pc.Color(i1507[4], i1507[5], i1507[6], i1507[7])
  i1506.bottomLeft = new pc.Color(i1507[8], i1507[9], i1507[10], i1507[11])
  i1506.bottomRight = new pc.Color(i1507[12], i1507[13], i1507[14], i1507[15])
  return i1506
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.UI.Button' )
  var i1509 = data
  i1508.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1509[0], i1508.m_OnClick)
  i1508.m_Navigation = request.d('UnityEngine.UI.Navigation', i1509[1], i1508.m_Navigation)
  i1508.m_Transition = i1509[2]
  i1508.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1509[3], i1508.m_Colors)
  i1508.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1509[4], i1508.m_SpriteState)
  i1508.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1509[5], i1508.m_AnimationTriggers)
  i1508.m_Interactable = !!i1509[6]
  request.r(i1509[7], i1509[8], 0, i1508, 'm_TargetGraphic')
  return i1508
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1510 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1511 = data
  i1510.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1511[0], i1510.m_PersistentCalls)
  return i1510
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1512 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1513 = data
  i1512.m_Mode = i1513[0]
  i1512.m_WrapAround = !!i1513[1]
  request.r(i1513[2], i1513[3], 0, i1512, 'm_SelectOnUp')
  request.r(i1513[4], i1513[5], 0, i1512, 'm_SelectOnDown')
  request.r(i1513[6], i1513[7], 0, i1512, 'm_SelectOnLeft')
  request.r(i1513[8], i1513[9], 0, i1512, 'm_SelectOnRight')
  return i1512
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1514 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1515 = data
  i1514.m_NormalColor = new pc.Color(i1515[0], i1515[1], i1515[2], i1515[3])
  i1514.m_HighlightedColor = new pc.Color(i1515[4], i1515[5], i1515[6], i1515[7])
  i1514.m_PressedColor = new pc.Color(i1515[8], i1515[9], i1515[10], i1515[11])
  i1514.m_SelectedColor = new pc.Color(i1515[12], i1515[13], i1515[14], i1515[15])
  i1514.m_DisabledColor = new pc.Color(i1515[16], i1515[17], i1515[18], i1515[19])
  i1514.m_ColorMultiplier = i1515[20]
  i1514.m_FadeDuration = i1515[21]
  return i1514
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1516 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1517 = data
  request.r(i1517[0], i1517[1], 0, i1516, 'm_HighlightedSprite')
  request.r(i1517[2], i1517[3], 0, i1516, 'm_PressedSprite')
  request.r(i1517[4], i1517[5], 0, i1516, 'm_SelectedSprite')
  request.r(i1517[6], i1517[7], 0, i1516, 'm_DisabledSprite')
  return i1516
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1519 = data
  i1518.m_NormalTrigger = i1519[0]
  i1518.m_HighlightedTrigger = i1519[1]
  i1518.m_PressedTrigger = i1519[2]
  i1518.m_SelectedTrigger = i1519[3]
  i1518.m_DisabledTrigger = i1519[4]
  return i1518
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1520 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1521 = data
  i1520.m_ShowMaskGraphic = !!i1521[0]
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1523 = data
  i1522.ambientIntensity = i1523[0]
  i1522.reflectionIntensity = i1523[1]
  i1522.ambientMode = i1523[2]
  i1522.ambientLight = new pc.Color(i1523[3], i1523[4], i1523[5], i1523[6])
  i1522.ambientSkyColor = new pc.Color(i1523[7], i1523[8], i1523[9], i1523[10])
  i1522.ambientGroundColor = new pc.Color(i1523[11], i1523[12], i1523[13], i1523[14])
  i1522.ambientEquatorColor = new pc.Color(i1523[15], i1523[16], i1523[17], i1523[18])
  i1522.fogColor = new pc.Color(i1523[19], i1523[20], i1523[21], i1523[22])
  i1522.fogEndDistance = i1523[23]
  i1522.fogStartDistance = i1523[24]
  i1522.fogDensity = i1523[25]
  i1522.fog = !!i1523[26]
  request.r(i1523[27], i1523[28], 0, i1522, 'skybox')
  i1522.fogMode = i1523[29]
  var i1525 = i1523[30]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1525[i + 0]) );
  }
  i1522.lightmaps = i1524
  i1522.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1523[31], i1522.lightProbes)
  i1522.lightmapsMode = i1523[32]
  i1522.mixedBakeMode = i1523[33]
  i1522.environmentLightingMode = i1523[34]
  i1522.ambientProbe = new pc.SphericalHarmonicsL2(i1523[35])
  i1522.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1523[36])
  i1522.useReferenceAmbientProbe = !!i1523[37]
  request.r(i1523[38], i1523[39], 0, i1522, 'customReflection')
  request.r(i1523[40], i1523[41], 0, i1522, 'defaultReflection')
  i1522.defaultReflectionMode = i1523[42]
  i1522.defaultReflectionResolution = i1523[43]
  i1522.sunLightObjectId = i1523[44]
  i1522.pixelLightCount = i1523[45]
  i1522.defaultReflectionHDR = !!i1523[46]
  i1522.hasLightDataAsset = !!i1523[47]
  i1522.hasManualGenerate = !!i1523[48]
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1529 = data
  request.r(i1529[0], i1529[1], 0, i1528, 'lightmapColor')
  request.r(i1529[2], i1529[3], 0, i1528, 'lightmapDirection')
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1530 = root || new UnityEngine.LightProbes()
  var i1531 = data
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1539 = data
  var i1541 = i1539[0]
  var i1540 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1541[i + 0]));
  }
  i1538.ShaderCompilationErrors = i1540
  i1538.name = i1539[1]
  i1538.guid = i1539[2]
  var i1543 = i1539[3]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.push( i1543[i + 0] );
  }
  i1538.shaderDefinedKeywords = i1542
  var i1545 = i1539[4]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1545[i + 0]) );
  }
  i1538.passes = i1544
  var i1547 = i1539[5]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1547[i + 0]) );
  }
  i1538.usePasses = i1546
  var i1549 = i1539[6]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 1) {
    i1548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1549[i + 0]) );
  }
  i1538.defaultParameterValues = i1548
  request.r(i1539[7], i1539[8], 0, i1538, 'unityFallbackShader')
  i1538.readDepth = !!i1539[9]
  i1538.isCreatedByShaderGraph = !!i1539[10]
  i1538.usedBatchUniforms = i1539[11]
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1553 = data
  i1552.shaderName = i1553[0]
  i1552.errorMessage = i1553[1]
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1556 = root || new pc.UnityShaderPass()
  var i1557 = data
  i1556.id = i1557[0]
  i1556.subShaderIndex = i1557[1]
  i1556.name = i1557[2]
  i1556.passType = i1557[3]
  i1556.grabPassTextureName = i1557[4]
  i1556.usePass = !!i1557[5]
  i1556.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1557[6], i1556.zTest)
  i1556.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1557[7], i1556.zWrite)
  i1556.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1557[8], i1556.culling)
  i1556.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1557[9], i1556.blending)
  i1556.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1557[10], i1556.alphaBlending)
  i1556.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1557[11], i1556.colorWriteMask)
  i1556.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1557[12], i1556.offsetUnits)
  i1556.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1557[13], i1556.offsetFactor)
  i1556.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1557[14], i1556.stencilRef)
  i1556.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1557[15], i1556.stencilReadMask)
  i1556.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1557[16], i1556.stencilWriteMask)
  i1556.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1557[17], i1556.stencilOp)
  i1556.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1557[18], i1556.stencilOpFront)
  i1556.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1557[19], i1556.stencilOpBack)
  var i1559 = i1557[20]
  var i1558 = []
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1559[i + 0]) );
  }
  i1556.tags = i1558
  var i1561 = i1557[21]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 1) {
    i1560.push( i1561[i + 0] );
  }
  i1556.passDefinedKeywords = i1560
  var i1563 = i1557[22]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1563[i + 0]) );
  }
  i1556.passDefinedKeywordGroups = i1562
  var i1565 = i1557[23]
  var i1564 = []
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1565[i + 0]) );
  }
  i1556.variants = i1564
  var i1567 = i1557[24]
  var i1566 = []
  for(var i = 0; i < i1567.length; i += 1) {
    i1566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1567[i + 0]) );
  }
  i1556.excludedVariants = i1566
  i1556.hasDepthReader = !!i1557[25]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1569 = data
  i1568.val = i1569[0]
  i1568.name = i1569[1]
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1571 = data
  i1570.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1571[0], i1570.src)
  i1570.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1571[1], i1570.dst)
  i1570.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1571[2], i1570.op)
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1573 = data
  i1572.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1573[0], i1572.pass)
  i1572.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1573[1], i1572.fail)
  i1572.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1573[2], i1572.zFail)
  i1572.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1573[3], i1572.comp)
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1577 = data
  i1576.name = i1577[0]
  i1576.value = i1577[1]
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1581 = data
  var i1583 = i1581[0]
  var i1582 = []
  for(var i = 0; i < i1583.length; i += 1) {
    i1582.push( i1583[i + 0] );
  }
  i1580.keywords = i1582
  i1580.hasDiscard = !!i1581[1]
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1587 = data
  i1586.passId = i1587[0]
  i1586.subShaderIndex = i1587[1]
  var i1589 = i1587[2]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( i1589[i + 0] );
  }
  i1586.keywords = i1588
  i1586.vertexProgram = i1587[3]
  i1586.fragmentProgram = i1587[4]
  i1586.compiledForWebGL2 = !!i1587[5]
  i1586.readDepth = !!i1587[6]
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1593 = data
  request.r(i1593[0], i1593[1], 0, i1592, 'shader')
  i1592.pass = i1593[2]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1597 = data
  i1596.name = i1597[0]
  i1596.type = i1597[1]
  i1596.value = new pc.Vec4( i1597[2], i1597[3], i1597[4], i1597[5] )
  i1596.textureValue = i1597[6]
  i1596.shaderPropertyFlag = i1597[7]
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1599 = data
  i1598.name = i1599[0]
  request.r(i1599[1], i1599[2], 0, i1598, 'texture')
  i1598.aabb = i1599[3]
  i1598.vertices = i1599[4]
  i1598.triangles = i1599[5]
  i1598.textureRect = UnityEngine.Rect.MinMaxRect(i1599[6], i1599[7], i1599[8], i1599[9])
  i1598.packedRect = UnityEngine.Rect.MinMaxRect(i1599[10], i1599[11], i1599[12], i1599[13])
  i1598.border = new pc.Vec4( i1599[14], i1599[15], i1599[16], i1599[17] )
  i1598.transparency = i1599[18]
  i1598.bounds = i1599[19]
  i1598.pixelsPerUnit = i1599[20]
  i1598.textureWidth = i1599[21]
  i1598.textureHeight = i1599[22]
  i1598.nativeSize = new pc.Vec2( i1599[23], i1599[24] )
  i1598.pivot = new pc.Vec2( i1599[25], i1599[26] )
  i1598.textureRectOffset = new pc.Vec2( i1599[27], i1599[28] )
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1601 = data
  i1600.name = i1601[0]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1603 = data
  i1602.name = i1603[0]
  i1602.ascent = i1603[1]
  i1602.originalLineHeight = i1603[2]
  i1602.fontSize = i1603[3]
  var i1605 = i1603[4]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1605[i + 0]) );
  }
  i1602.characterInfo = i1604
  request.r(i1603[5], i1603[6], 0, i1602, 'texture')
  i1602.originalFontSize = i1603[7]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1609 = data
  i1608.index = i1609[0]
  i1608.advance = i1609[1]
  i1608.bearing = i1609[2]
  i1608.glyphWidth = i1609[3]
  i1608.glyphHeight = i1609[4]
  i1608.minX = i1609[5]
  i1608.maxX = i1609[6]
  i1608.minY = i1609[7]
  i1608.maxY = i1609[8]
  i1608.uvBottomLeftX = i1609[9]
  i1608.uvBottomLeftY = i1609[10]
  i1608.uvBottomRightX = i1609[11]
  i1608.uvBottomRightY = i1609[12]
  i1608.uvTopLeftX = i1609[13]
  i1608.uvTopLeftY = i1609[14]
  i1608.uvTopRightX = i1609[15]
  i1608.uvTopRightY = i1609[16]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1611 = data
  i1610.name = i1611[0]
  i1610.bytes64 = i1611[1]
  i1610.data = i1611[2]
  return i1610
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1612 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1613 = data
  var i1615 = i1613[0]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 2) {
  request.r(i1615[i + 0], i1615[i + 1], 2, i1614, '')
  }
  i1612.atlasAssets = i1614
  i1612.scale = i1613[1]
  request.r(i1613[2], i1613[3], 0, i1612, 'skeletonJSON')
  i1612.isUpgradingBlendModeMaterials = !!i1613[4]
  i1612.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1613[5], i1612.blendModeMaterials)
  var i1617 = i1613[6]
  var i1616 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1617.length; i += 2) {
  request.r(i1617[i + 0], i1617[i + 1], 1, i1616, '')
  }
  i1612.skeletonDataModifiers = i1616
  var i1619 = i1613[7]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 1) {
    i1618.push( i1619[i + 0] );
  }
  i1612.fromAnimation = i1618
  var i1621 = i1613[8]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( i1621[i + 0] );
  }
  i1612.toAnimation = i1620
  i1612.duration = i1613[9]
  i1612.defaultMix = i1613[10]
  request.r(i1613[11], i1613[12], 0, i1612, 'controller')
  return i1612
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1624 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1625 = data
  i1624.applyAdditiveMaterial = !!i1625[0]
  var i1627 = i1625[1]
  var i1626 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1627[i + 0]));
  }
  i1624.additiveMaterials = i1626
  var i1629 = i1625[2]
  var i1628 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1629[i + 0]));
  }
  i1624.multiplyMaterials = i1628
  var i1631 = i1625[3]
  var i1630 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1631[i + 0]));
  }
  i1624.screenMaterials = i1630
  i1624.requiresBlendModeMaterials = !!i1625[4]
  return i1624
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1634 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1635 = data
  i1634.pageName = i1635[0]
  request.r(i1635[1], i1635[2], 0, i1634, 'material')
  return i1634
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1638 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1639 = data
  request.r(i1639[0], i1639[1], 0, i1638, 'atlasFile')
  var i1641 = i1639[2]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 2) {
  request.r(i1641[i + 0], i1641[i + 1], 2, i1640, '')
  }
  i1638.materials = i1640
  i1638.textureLoadingMode = i1639[3]
  request.r(i1639[4], i1639[5], 0, i1638, 'onDemandTextureLoader')
  return i1638
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1642 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1643 = data
  i1642.hashCode = i1643[0]
  request.r(i1643[1], i1643[2], 0, i1642, 'material')
  i1642.materialHashCode = i1643[3]
  request.r(i1643[4], i1643[5], 0, i1642, 'atlas')
  i1642.normalStyle = i1643[6]
  i1642.normalSpacingOffset = i1643[7]
  i1642.boldStyle = i1643[8]
  i1642.boldSpacing = i1643[9]
  i1642.italicStyle = i1643[10]
  i1642.tabSize = i1643[11]
  i1642.m_Version = i1643[12]
  i1642.m_SourceFontFileGUID = i1643[13]
  request.r(i1643[14], i1643[15], 0, i1642, 'm_SourceFontFile_EditorRef')
  request.r(i1643[16], i1643[17], 0, i1642, 'm_SourceFontFile')
  i1642.m_AtlasPopulationMode = i1643[18]
  i1642.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1643[19], i1642.m_FaceInfo)
  var i1645 = i1643[20]
  var i1644 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.add(request.d('UnityEngine.TextCore.Glyph', i1645[i + 0]));
  }
  i1642.m_GlyphTable = i1644
  var i1647 = i1643[21]
  var i1646 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1647.length; i += 1) {
    i1646.add(request.d('TMPro.TMP_Character', i1647[i + 0]));
  }
  i1642.m_CharacterTable = i1646
  var i1649 = i1643[22]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 2) {
  request.r(i1649[i + 0], i1649[i + 1], 2, i1648, '')
  }
  i1642.m_AtlasTextures = i1648
  i1642.m_AtlasTextureIndex = i1643[23]
  i1642.m_IsMultiAtlasTexturesEnabled = !!i1643[24]
  i1642.m_ClearDynamicDataOnBuild = !!i1643[25]
  var i1651 = i1643[26]
  var i1650 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.add(request.d('UnityEngine.TextCore.GlyphRect', i1651[i + 0]));
  }
  i1642.m_UsedGlyphRects = i1650
  var i1653 = i1643[27]
  var i1652 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.add(request.d('UnityEngine.TextCore.GlyphRect', i1653[i + 0]));
  }
  i1642.m_FreeGlyphRects = i1652
  i1642.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1643[28], i1642.m_fontInfo)
  i1642.m_AtlasWidth = i1643[29]
  i1642.m_AtlasHeight = i1643[30]
  i1642.m_AtlasPadding = i1643[31]
  i1642.m_AtlasRenderMode = i1643[32]
  var i1655 = i1643[33]
  var i1654 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.add(request.d('TMPro.TMP_Glyph', i1655[i + 0]));
  }
  i1642.m_glyphInfoList = i1654
  i1642.m_KerningTable = request.d('TMPro.KerningTable', i1643[34], i1642.m_KerningTable)
  i1642.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1643[35], i1642.m_FontFeatureTable)
  var i1657 = i1643[36]
  var i1656 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1657.length; i += 2) {
  request.r(i1657[i + 0], i1657[i + 1], 1, i1656, '')
  }
  i1642.fallbackFontAssets = i1656
  var i1659 = i1643[37]
  var i1658 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1659.length; i += 2) {
  request.r(i1659[i + 0], i1659[i + 1], 1, i1658, '')
  }
  i1642.m_FallbackFontAssetTable = i1658
  i1642.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1643[38], i1642.m_CreationSettings)
  var i1661 = i1643[39]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( request.d('TMPro.TMP_FontWeightPair', i1661[i + 0]) );
  }
  i1642.m_FontWeightTable = i1660
  var i1663 = i1643[40]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( request.d('TMPro.TMP_FontWeightPair', i1663[i + 0]) );
  }
  i1642.fontWeights = i1662
  return i1642
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1665 = data
  i1664.m_FaceIndex = i1665[0]
  i1664.m_FamilyName = i1665[1]
  i1664.m_StyleName = i1665[2]
  i1664.m_PointSize = i1665[3]
  i1664.m_Scale = i1665[4]
  i1664.m_UnitsPerEM = i1665[5]
  i1664.m_LineHeight = i1665[6]
  i1664.m_AscentLine = i1665[7]
  i1664.m_CapLine = i1665[8]
  i1664.m_MeanLine = i1665[9]
  i1664.m_Baseline = i1665[10]
  i1664.m_DescentLine = i1665[11]
  i1664.m_SuperscriptOffset = i1665[12]
  i1664.m_SuperscriptSize = i1665[13]
  i1664.m_SubscriptOffset = i1665[14]
  i1664.m_SubscriptSize = i1665[15]
  i1664.m_UnderlineOffset = i1665[16]
  i1664.m_UnderlineThickness = i1665[17]
  i1664.m_StrikethroughOffset = i1665[18]
  i1664.m_StrikethroughThickness = i1665[19]
  i1664.m_TabWidth = i1665[20]
  return i1664
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1669 = data
  i1668.m_Index = i1669[0]
  i1668.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1669[1], i1668.m_Metrics)
  i1668.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1669[2], i1668.m_GlyphRect)
  i1668.m_Scale = i1669[3]
  i1668.m_AtlasIndex = i1669[4]
  i1668.m_ClassDefinitionType = i1669[5]
  return i1668
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1671 = data
  i1670.m_Width = i1671[0]
  i1670.m_Height = i1671[1]
  i1670.m_HorizontalBearingX = i1671[2]
  i1670.m_HorizontalBearingY = i1671[3]
  i1670.m_HorizontalAdvance = i1671[4]
  return i1670
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1672 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1673 = data
  i1672.m_X = i1673[0]
  i1672.m_Y = i1673[1]
  i1672.m_Width = i1673[2]
  i1672.m_Height = i1673[3]
  return i1672
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1676 = root || request.c( 'TMPro.TMP_Character' )
  var i1677 = data
  i1676.m_ElementType = i1677[0]
  i1676.m_Unicode = i1677[1]
  i1676.m_GlyphIndex = i1677[2]
  i1676.m_Scale = i1677[3]
  return i1676
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1682 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1683 = data
  i1682.Name = i1683[0]
  i1682.PointSize = i1683[1]
  i1682.Scale = i1683[2]
  i1682.CharacterCount = i1683[3]
  i1682.LineHeight = i1683[4]
  i1682.Baseline = i1683[5]
  i1682.Ascender = i1683[6]
  i1682.CapHeight = i1683[7]
  i1682.Descender = i1683[8]
  i1682.CenterLine = i1683[9]
  i1682.SuperscriptOffset = i1683[10]
  i1682.SubscriptOffset = i1683[11]
  i1682.SubSize = i1683[12]
  i1682.Underline = i1683[13]
  i1682.UnderlineThickness = i1683[14]
  i1682.strikethrough = i1683[15]
  i1682.strikethroughThickness = i1683[16]
  i1682.TabWidth = i1683[17]
  i1682.Padding = i1683[18]
  i1682.AtlasWidth = i1683[19]
  i1682.AtlasHeight = i1683[20]
  return i1682
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1686 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1687 = data
  i1686.id = i1687[0]
  i1686.x = i1687[1]
  i1686.y = i1687[2]
  i1686.width = i1687[3]
  i1686.height = i1687[4]
  i1686.xOffset = i1687[5]
  i1686.yOffset = i1687[6]
  i1686.xAdvance = i1687[7]
  i1686.scale = i1687[8]
  return i1686
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1688 = root || request.c( 'TMPro.KerningTable' )
  var i1689 = data
  var i1691 = i1689[0]
  var i1690 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.add(request.d('TMPro.KerningPair', i1691[i + 0]));
  }
  i1688.kerningPairs = i1690
  return i1688
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1694 = root || request.c( 'TMPro.KerningPair' )
  var i1695 = data
  i1694.xOffset = i1695[0]
  i1694.m_FirstGlyph = i1695[1]
  i1694.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1695[2], i1694.m_FirstGlyphAdjustments)
  i1694.m_SecondGlyph = i1695[3]
  i1694.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1695[4], i1694.m_SecondGlyphAdjustments)
  i1694.m_IgnoreSpacingAdjustments = !!i1695[5]
  return i1694
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1696 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1697 = data
  var i1699 = i1697[0]
  var i1698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1699[i + 0]));
  }
  i1696.m_GlyphPairAdjustmentRecords = i1698
  return i1696
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1702 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1703 = data
  i1702.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1703[0], i1702.m_FirstAdjustmentRecord)
  i1702.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1703[1], i1702.m_SecondAdjustmentRecord)
  i1702.m_FeatureLookupFlags = i1703[2]
  return i1702
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1706 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1707 = data
  i1706.sourceFontFileName = i1707[0]
  i1706.sourceFontFileGUID = i1707[1]
  i1706.pointSizeSamplingMode = i1707[2]
  i1706.pointSize = i1707[3]
  i1706.padding = i1707[4]
  i1706.packingMode = i1707[5]
  i1706.atlasWidth = i1707[6]
  i1706.atlasHeight = i1707[7]
  i1706.characterSetSelectionMode = i1707[8]
  i1706.characterSequence = i1707[9]
  i1706.referencedFontAssetGUID = i1707[10]
  i1706.referencedTextAssetGUID = i1707[11]
  i1706.fontStyle = i1707[12]
  i1706.fontStyleModifier = i1707[13]
  i1706.renderMode = i1707[14]
  i1706.includeFontFeatures = !!i1707[15]
  return i1706
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1710 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1711 = data
  request.r(i1711[0], i1711[1], 0, i1710, 'regularTypeface')
  request.r(i1711[2], i1711[3], 0, i1710, 'italicTypeface')
  return i1710
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1712 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1713 = data
  i1712.useSafeMode = !!i1713[0]
  i1712.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1713[1], i1712.safeModeOptions)
  i1712.timeScale = i1713[2]
  i1712.unscaledTimeScale = i1713[3]
  i1712.useSmoothDeltaTime = !!i1713[4]
  i1712.maxSmoothUnscaledTime = i1713[5]
  i1712.rewindCallbackMode = i1713[6]
  i1712.showUnityEditorReport = !!i1713[7]
  i1712.logBehaviour = i1713[8]
  i1712.drawGizmos = !!i1713[9]
  i1712.defaultRecyclable = !!i1713[10]
  i1712.defaultAutoPlay = i1713[11]
  i1712.defaultUpdateType = i1713[12]
  i1712.defaultTimeScaleIndependent = !!i1713[13]
  i1712.defaultEaseType = i1713[14]
  i1712.defaultEaseOvershootOrAmplitude = i1713[15]
  i1712.defaultEasePeriod = i1713[16]
  i1712.defaultAutoKill = !!i1713[17]
  i1712.defaultLoopType = i1713[18]
  i1712.debugMode = !!i1713[19]
  i1712.debugStoreTargetId = !!i1713[20]
  i1712.showPreviewPanel = !!i1713[21]
  i1712.storeSettingsLocation = i1713[22]
  i1712.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1713[23], i1712.modules)
  i1712.createASMDEF = !!i1713[24]
  i1712.showPlayingTweens = !!i1713[25]
  i1712.showPausedTweens = !!i1713[26]
  return i1712
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1714 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1715 = data
  i1714.logBehaviour = i1715[0]
  i1714.nestedTweenFailureBehaviour = i1715[1]
  return i1714
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1716 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1717 = data
  i1716.showPanel = !!i1717[0]
  i1716.audioEnabled = !!i1717[1]
  i1716.physicsEnabled = !!i1717[2]
  i1716.physics2DEnabled = !!i1717[3]
  i1716.spriteEnabled = !!i1717[4]
  i1716.uiEnabled = !!i1717[5]
  i1716.textMeshProEnabled = !!i1717[6]
  i1716.tk2DEnabled = !!i1717[7]
  i1716.deAudioEnabled = !!i1717[8]
  i1716.deUnityExtendedEnabled = !!i1717[9]
  i1716.epoOutlineEnabled = !!i1717[10]
  return i1716
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1718 = root || request.c( 'TMPro.TMP_Settings' )
  var i1719 = data
  i1718.m_enableWordWrapping = !!i1719[0]
  i1718.m_enableKerning = !!i1719[1]
  i1718.m_enableExtraPadding = !!i1719[2]
  i1718.m_enableTintAllSprites = !!i1719[3]
  i1718.m_enableParseEscapeCharacters = !!i1719[4]
  i1718.m_EnableRaycastTarget = !!i1719[5]
  i1718.m_GetFontFeaturesAtRuntime = !!i1719[6]
  i1718.m_missingGlyphCharacter = i1719[7]
  i1718.m_warningsDisabled = !!i1719[8]
  request.r(i1719[9], i1719[10], 0, i1718, 'm_defaultFontAsset')
  i1718.m_defaultFontAssetPath = i1719[11]
  i1718.m_defaultFontSize = i1719[12]
  i1718.m_defaultAutoSizeMinRatio = i1719[13]
  i1718.m_defaultAutoSizeMaxRatio = i1719[14]
  i1718.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1719[15], i1719[16] )
  i1718.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1719[17], i1719[18] )
  i1718.m_autoSizeTextContainer = !!i1719[19]
  i1718.m_IsTextObjectScaleStatic = !!i1719[20]
  var i1721 = i1719[21]
  var i1720 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1721.length; i += 2) {
  request.r(i1721[i + 0], i1721[i + 1], 1, i1720, '')
  }
  i1718.m_fallbackFontAssets = i1720
  i1718.m_matchMaterialPreset = !!i1719[22]
  request.r(i1719[23], i1719[24], 0, i1718, 'm_defaultSpriteAsset')
  i1718.m_defaultSpriteAssetPath = i1719[25]
  i1718.m_enableEmojiSupport = !!i1719[26]
  i1718.m_MissingCharacterSpriteUnicode = i1719[27]
  i1718.m_defaultColorGradientPresetsPath = i1719[28]
  request.r(i1719[29], i1719[30], 0, i1718, 'm_defaultStyleSheet')
  i1718.m_StyleSheetsResourcePath = i1719[31]
  request.r(i1719[32], i1719[33], 0, i1718, 'm_leadingCharacters')
  request.r(i1719[34], i1719[35], 0, i1718, 'm_followingCharacters')
  i1718.m_UseModernHangulLineBreakingRules = !!i1719[36]
  return i1718
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1722 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1723 = data
  i1722.m_GlyphIndex = i1723[0]
  i1722.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1723[1], i1722.m_GlyphValueRecord)
  return i1722
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1724 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1725 = data
  i1724.m_XPlacement = i1725[0]
  i1724.m_YPlacement = i1725[1]
  i1724.m_XAdvance = i1725[2]
  i1724.m_YAdvance = i1725[3]
  return i1724
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1726 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1727 = data
  i1726.hashCode = i1727[0]
  request.r(i1727[1], i1727[2], 0, i1726, 'material')
  i1726.materialHashCode = i1727[3]
  request.r(i1727[4], i1727[5], 0, i1726, 'spriteSheet')
  var i1729 = i1727[6]
  var i1728 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.add(request.d('TMPro.TMP_Sprite', i1729[i + 0]));
  }
  i1726.spriteInfoList = i1728
  var i1731 = i1727[7]
  var i1730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1731.length; i += 2) {
  request.r(i1731[i + 0], i1731[i + 1], 1, i1730, '')
  }
  i1726.fallbackSpriteAssets = i1730
  i1726.m_Version = i1727[8]
  i1726.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1727[9], i1726.m_FaceInfo)
  var i1733 = i1727[10]
  var i1732 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.add(request.d('TMPro.TMP_SpriteCharacter', i1733[i + 0]));
  }
  i1726.m_SpriteCharacterTable = i1732
  var i1735 = i1727[11]
  var i1734 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.add(request.d('TMPro.TMP_SpriteGlyph', i1735[i + 0]));
  }
  i1726.m_SpriteGlyphTable = i1734
  return i1726
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1738 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1739 = data
  i1738.name = i1739[0]
  i1738.hashCode = i1739[1]
  i1738.unicode = i1739[2]
  i1738.pivot = new pc.Vec2( i1739[3], i1739[4] )
  request.r(i1739[5], i1739[6], 0, i1738, 'sprite')
  i1738.id = i1739[7]
  i1738.x = i1739[8]
  i1738.y = i1739[9]
  i1738.width = i1739[10]
  i1738.height = i1739[11]
  i1738.xOffset = i1739[12]
  i1738.yOffset = i1739[13]
  i1738.xAdvance = i1739[14]
  i1738.scale = i1739[15]
  return i1738
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1744 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1745 = data
  i1744.m_Name = i1745[0]
  i1744.m_HashCode = i1745[1]
  i1744.m_ElementType = i1745[2]
  i1744.m_Unicode = i1745[3]
  i1744.m_GlyphIndex = i1745[4]
  i1744.m_Scale = i1745[5]
  return i1744
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1748 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1749 = data
  request.r(i1749[0], i1749[1], 0, i1748, 'sprite')
  i1748.m_Index = i1749[2]
  i1748.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1749[3], i1748.m_Metrics)
  i1748.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1749[4], i1748.m_GlyphRect)
  i1748.m_Scale = i1749[5]
  i1748.m_AtlasIndex = i1749[6]
  i1748.m_ClassDefinitionType = i1749[7]
  return i1748
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1750 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1751 = data
  var i1753 = i1751[0]
  var i1752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1753.length; i += 1) {
    i1752.add(request.d('TMPro.TMP_Style', i1753[i + 0]));
  }
  i1750.m_StyleList = i1752
  return i1750
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1756 = root || request.c( 'TMPro.TMP_Style' )
  var i1757 = data
  i1756.m_Name = i1757[0]
  i1756.m_HashCode = i1757[1]
  i1756.m_OpeningDefinition = i1757[2]
  i1756.m_ClosingDefinition = i1757[3]
  i1756.m_OpeningTagArray = i1757[4]
  i1756.m_ClosingTagArray = i1757[5]
  i1756.m_OpeningTagUnicodeArray = i1757[6]
  i1756.m_ClosingTagUnicodeArray = i1757[7]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1759 = data
  var i1761 = i1759[0]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1761[i + 0]) );
  }
  i1758.files = i1760
  i1758.componentToPrefabIds = i1759[1]
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1765 = data
  i1764.path = i1765[0]
  request.r(i1765[1], i1765[2], 0, i1764, 'unityObject')
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1767 = data
  var i1769 = i1767[0]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1769[i + 0]) );
  }
  i1766.scriptsExecutionOrder = i1768
  var i1771 = i1767[1]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1771[i + 0]) );
  }
  i1766.sortingLayers = i1770
  var i1773 = i1767[2]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1773[i + 0]) );
  }
  i1766.cullingLayers = i1772
  i1766.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1767[3], i1766.timeSettings)
  i1766.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1767[4], i1766.physicsSettings)
  i1766.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1767[5], i1766.physics2DSettings)
  i1766.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1767[6], i1766.qualitySettings)
  i1766.enableRealtimeShadows = !!i1767[7]
  i1766.enableAutoInstancing = !!i1767[8]
  i1766.enableDynamicBatching = !!i1767[9]
  i1766.lightmapEncodingQuality = i1767[10]
  i1766.desiredColorSpace = i1767[11]
  var i1775 = i1767[12]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( i1775[i + 0] );
  }
  i1766.allTags = i1774
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1779 = data
  i1778.name = i1779[0]
  i1778.value = i1779[1]
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1783 = data
  i1782.id = i1783[0]
  i1782.name = i1783[1]
  i1782.value = i1783[2]
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1787 = data
  i1786.id = i1787[0]
  i1786.name = i1787[1]
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1789 = data
  i1788.fixedDeltaTime = i1789[0]
  i1788.maximumDeltaTime = i1789[1]
  i1788.timeScale = i1789[2]
  i1788.maximumParticleTimestep = i1789[3]
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1791 = data
  i1790.gravity = new pc.Vec3( i1791[0], i1791[1], i1791[2] )
  i1790.defaultSolverIterations = i1791[3]
  i1790.bounceThreshold = i1791[4]
  i1790.autoSyncTransforms = !!i1791[5]
  i1790.autoSimulation = !!i1791[6]
  var i1793 = i1791[7]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1793[i + 0]) );
  }
  i1790.collisionMatrix = i1792
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1797 = data
  i1796.enabled = !!i1797[0]
  i1796.layerId = i1797[1]
  i1796.otherLayerId = i1797[2]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1799 = data
  request.r(i1799[0], i1799[1], 0, i1798, 'material')
  i1798.gravity = new pc.Vec2( i1799[2], i1799[3] )
  i1798.positionIterations = i1799[4]
  i1798.velocityIterations = i1799[5]
  i1798.velocityThreshold = i1799[6]
  i1798.maxLinearCorrection = i1799[7]
  i1798.maxAngularCorrection = i1799[8]
  i1798.maxTranslationSpeed = i1799[9]
  i1798.maxRotationSpeed = i1799[10]
  i1798.baumgarteScale = i1799[11]
  i1798.baumgarteTOIScale = i1799[12]
  i1798.timeToSleep = i1799[13]
  i1798.linearSleepTolerance = i1799[14]
  i1798.angularSleepTolerance = i1799[15]
  i1798.defaultContactOffset = i1799[16]
  i1798.autoSimulation = !!i1799[17]
  i1798.queriesHitTriggers = !!i1799[18]
  i1798.queriesStartInColliders = !!i1799[19]
  i1798.callbacksOnDisable = !!i1799[20]
  i1798.reuseCollisionCallbacks = !!i1799[21]
  i1798.autoSyncTransforms = !!i1799[22]
  var i1801 = i1799[23]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1801[i + 0]) );
  }
  i1798.collisionMatrix = i1800
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1805 = data
  i1804.enabled = !!i1805[0]
  i1804.layerId = i1805[1]
  i1804.otherLayerId = i1805[2]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1807 = data
  var i1809 = i1807[0]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1809[i + 0]) );
  }
  i1806.qualityLevels = i1808
  var i1811 = i1807[1]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.push( i1811[i + 0] );
  }
  i1806.names = i1810
  i1806.shadows = i1807[2]
  i1806.anisotropicFiltering = i1807[3]
  i1806.antiAliasing = i1807[4]
  i1806.lodBias = i1807[5]
  i1806.shadowCascades = i1807[6]
  i1806.shadowDistance = i1807[7]
  i1806.shadowmaskMode = i1807[8]
  i1806.shadowProjection = i1807[9]
  i1806.shadowResolution = i1807[10]
  i1806.softParticles = !!i1807[11]
  i1806.softVegetation = !!i1807[12]
  i1806.activeColorSpace = i1807[13]
  i1806.desiredColorSpace = i1807[14]
  i1806.masterTextureLimit = i1807[15]
  i1806.maxQueuedFrames = i1807[16]
  i1806.particleRaycastBudget = i1807[17]
  i1806.pixelLightCount = i1807[18]
  i1806.realtimeReflectionProbes = !!i1807[19]
  i1806.shadowCascade2Split = i1807[20]
  i1806.shadowCascade4Split = new pc.Vec3( i1807[21], i1807[22], i1807[23] )
  i1806.streamingMipmapsActive = !!i1807[24]
  i1806.vSyncCount = i1807[25]
  i1806.asyncUploadBufferSize = i1807[26]
  i1806.asyncUploadTimeSlice = i1807[27]
  i1806.billboardsFaceCameraPosition = !!i1807[28]
  i1806.shadowNearPlaneOffset = i1807[29]
  i1806.streamingMipmapsMemoryBudget = i1807[30]
  i1806.maximumLODLevel = i1807[31]
  i1806.streamingMipmapsAddAllCameras = !!i1807[32]
  i1806.streamingMipmapsMaxLevelReduction = i1807[33]
  i1806.streamingMipmapsRenderersPerFrame = i1807[34]
  i1806.resolutionScalingFixedDPIFactor = i1807[35]
  i1806.streamingMipmapsMaxFileIORequests = i1807[36]
  i1806.currentQualityLevel = i1807[37]
  return i1806
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

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","DraggableItem","UnityEngine.CanvasGroup","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.BoxCollider2D","DropZone","DG.Tweening.DOTweenAnimation","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

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

Deserializers.buildID = "3b9cee5e-d7fa-4408-bf5d-72ecd7defadc";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

