var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1374 = root || request.c( 'UnityEngine.JointSpring' )
  var i1375 = data
  i1374.spring = i1375[0]
  i1374.damper = i1375[1]
  i1374.targetPosition = i1375[2]
  return i1374
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1376 = root || request.c( 'UnityEngine.JointMotor' )
  var i1377 = data
  i1376.m_TargetVelocity = i1377[0]
  i1376.m_Force = i1377[1]
  i1376.m_FreeSpin = i1377[2]
  return i1376
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1378 = root || request.c( 'UnityEngine.JointLimits' )
  var i1379 = data
  i1378.m_Min = i1379[0]
  i1378.m_Max = i1379[1]
  i1378.m_Bounciness = i1379[2]
  i1378.m_BounceMinVelocity = i1379[3]
  i1378.m_ContactDistance = i1379[4]
  i1378.minBounce = i1379[5]
  i1378.maxBounce = i1379[6]
  return i1378
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1380 = root || request.c( 'UnityEngine.JointDrive' )
  var i1381 = data
  i1380.m_PositionSpring = i1381[0]
  i1380.m_PositionDamper = i1381[1]
  i1380.m_MaximumForce = i1381[2]
  i1380.m_UseAcceleration = i1381[3]
  return i1380
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1382 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1383 = data
  i1382.m_Spring = i1383[0]
  i1382.m_Damper = i1383[1]
  return i1382
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1384 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1385 = data
  i1384.m_Limit = i1385[0]
  i1384.m_Bounciness = i1385[1]
  i1384.m_ContactDistance = i1385[2]
  return i1384
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1387 = data
  i1386.m_ExtremumSlip = i1387[0]
  i1386.m_ExtremumValue = i1387[1]
  i1386.m_AsymptoteSlip = i1387[2]
  i1386.m_AsymptoteValue = i1387[3]
  i1386.m_Stiffness = i1387[4]
  return i1386
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1388 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1389 = data
  i1388.m_LowerAngle = i1389[0]
  i1388.m_UpperAngle = i1389[1]
  return i1388
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1390 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1391 = data
  i1390.m_MotorSpeed = i1391[0]
  i1390.m_MaximumMotorTorque = i1391[1]
  return i1390
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1392 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1393 = data
  i1392.m_DampingRatio = i1393[0]
  i1392.m_Frequency = i1393[1]
  i1392.m_Angle = i1393[2]
  return i1392
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1394 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1395 = data
  i1394.m_LowerTranslation = i1395[0]
  i1394.m_UpperTranslation = i1395[1]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1397 = data
  i1396.name = i1397[0]
  i1396.width = i1397[1]
  i1396.height = i1397[2]
  i1396.mipmapCount = i1397[3]
  i1396.anisoLevel = i1397[4]
  i1396.filterMode = i1397[5]
  i1396.hdr = !!i1397[6]
  i1396.format = i1397[7]
  i1396.wrapMode = i1397[8]
  i1396.alphaIsTransparency = !!i1397[9]
  i1396.alphaSource = i1397[10]
  i1396.graphicsFormat = i1397[11]
  i1396.sRGBTexture = !!i1397[12]
  i1396.desiredColorSpace = i1397[13]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1398 = root || new pc.UnityMaterial()
  var i1399 = data
  i1398.name = i1399[0]
  request.r(i1399[1], i1399[2], 0, i1398, 'shader')
  i1398.renderQueue = i1399[3]
  i1398.enableInstancing = !!i1399[4]
  var i1401 = i1399[5]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1401[i + 0]) );
  }
  i1398.floatParameters = i1400
  var i1403 = i1399[6]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1403[i + 0]) );
  }
  i1398.colorParameters = i1402
  var i1405 = i1399[7]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1405[i + 0]) );
  }
  i1398.vectorParameters = i1404
  var i1407 = i1399[8]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1407[i + 0]) );
  }
  i1398.textureParameters = i1406
  var i1409 = i1399[9]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1409[i + 0]) );
  }
  i1398.materialFlags = i1408
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1413 = data
  i1412.name = i1413[0]
  i1412.value = i1413[1]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1417 = data
  i1416.name = i1417[0]
  i1416.value = new pc.Color(i1417[1], i1417[2], i1417[3], i1417[4])
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1421 = data
  i1420.name = i1421[0]
  i1420.value = new pc.Vec4( i1421[1], i1421[2], i1421[3], i1421[4] )
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1425 = data
  i1424.name = i1425[0]
  request.r(i1425[1], i1425[2], 0, i1424, 'value')
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1429 = data
  i1428.name = i1429[0]
  i1428.enabled = !!i1429[1]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1431 = data
  i1430.name = i1431[0]
  i1430.index = i1431[1]
  i1430.startup = !!i1431[2]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1433 = data
  i1432.position = new pc.Vec3( i1433[0], i1433[1], i1433[2] )
  i1432.scale = new pc.Vec3( i1433[3], i1433[4], i1433[5] )
  i1432.rotation = new pc.Quat(i1433[6], i1433[7], i1433[8], i1433[9])
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1435 = data
  i1434.enabled = !!i1435[0]
  i1434.aspect = i1435[1]
  i1434.orthographic = !!i1435[2]
  i1434.orthographicSize = i1435[3]
  i1434.backgroundColor = new pc.Color(i1435[4], i1435[5], i1435[6], i1435[7])
  i1434.nearClipPlane = i1435[8]
  i1434.farClipPlane = i1435[9]
  i1434.fieldOfView = i1435[10]
  i1434.depth = i1435[11]
  i1434.clearFlags = i1435[12]
  i1434.cullingMask = i1435[13]
  i1434.rect = i1435[14]
  request.r(i1435[15], i1435[16], 0, i1434, 'targetTexture')
  i1434.usePhysicalProperties = !!i1435[17]
  i1434.focalLength = i1435[18]
  i1434.sensorSize = new pc.Vec2( i1435[19], i1435[20] )
  i1434.lensShift = new pc.Vec2( i1435[21], i1435[22] )
  i1434.gateFit = i1435[23]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1437 = data
  i1436.name = i1437[0]
  i1436.tagId = i1437[1]
  i1436.enabled = !!i1437[2]
  i1436.isStatic = !!i1437[3]
  i1436.layer = i1437[4]
  return i1436
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1438 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1439 = data
  request.r(i1439[0], i1439[1], 0, i1438, 'm_FirstSelected')
  i1438.m_sendNavigationEvents = !!i1439[2]
  i1438.m_DragThreshold = i1439[3]
  return i1438
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1440 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1441 = data
  i1440.m_HorizontalAxis = i1441[0]
  i1440.m_VerticalAxis = i1441[1]
  i1440.m_SubmitButton = i1441[2]
  i1440.m_CancelButton = i1441[3]
  i1440.m_InputActionsPerSecond = i1441[4]
  i1440.m_RepeatDelay = i1441[5]
  i1440.m_ForceModuleActive = !!i1441[6]
  i1440.m_SendPointerHoverToParent = !!i1441[7]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1443 = data
  i1442.pivot = new pc.Vec2( i1443[0], i1443[1] )
  i1442.anchorMin = new pc.Vec2( i1443[2], i1443[3] )
  i1442.anchorMax = new pc.Vec2( i1443[4], i1443[5] )
  i1442.sizeDelta = new pc.Vec2( i1443[6], i1443[7] )
  i1442.anchoredPosition3D = new pc.Vec3( i1443[8], i1443[9], i1443[10] )
  i1442.rotation = new pc.Quat(i1443[11], i1443[12], i1443[13], i1443[14])
  i1442.scale = new pc.Vec3( i1443[15], i1443[16], i1443[17] )
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1445 = data
  i1444.enabled = !!i1445[0]
  i1444.planeDistance = i1445[1]
  i1444.referencePixelsPerUnit = i1445[2]
  i1444.isFallbackOverlay = !!i1445[3]
  i1444.renderMode = i1445[4]
  i1444.renderOrder = i1445[5]
  i1444.sortingLayerName = i1445[6]
  i1444.sortingOrder = i1445[7]
  i1444.scaleFactor = i1445[8]
  request.r(i1445[9], i1445[10], 0, i1444, 'worldCamera')
  i1444.overrideSorting = !!i1445[11]
  i1444.pixelPerfect = !!i1445[12]
  i1444.targetDisplay = i1445[13]
  i1444.overridePixelPerfect = !!i1445[14]
  return i1444
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1447 = data
  i1446.m_UiScaleMode = i1447[0]
  i1446.m_ReferencePixelsPerUnit = i1447[1]
  i1446.m_ScaleFactor = i1447[2]
  i1446.m_ReferenceResolution = new pc.Vec2( i1447[3], i1447[4] )
  i1446.m_ScreenMatchMode = i1447[5]
  i1446.m_MatchWidthOrHeight = i1447[6]
  i1446.m_PhysicalUnit = i1447[7]
  i1446.m_FallbackScreenDPI = i1447[8]
  i1446.m_DefaultSpriteDPI = i1447[9]
  i1446.m_DynamicPixelsPerUnit = i1447[10]
  i1446.m_PresetInfoIsWorld = !!i1447[11]
  return i1446
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1448 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1449 = data
  i1448.m_IgnoreReversedGraphics = !!i1449[0]
  i1448.m_BlockingObjects = i1449[1]
  i1448.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1449[2] )
  return i1448
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1450 = root || request.c( 'LunaManager' )
  var i1451 = data
  var i1453 = i1451[0]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 2) {
  request.r(i1453[i + 0], i1453[i + 1], 2, i1452, '')
  }
  i1450.lstBtnInstall = i1452
  request.r(i1451[1], i1451[2], 0, i1450, 'EndCard')
  request.r(i1451[3], i1451[4], 0, i1450, 'hand')
  i1450.countPlay = i1451[5]
  i1450.countPlayFinal = i1451[6]
  i1450.timeDropFinal = i1451[7]
  i1450.colorBG = new pc.Color(i1451[8], i1451[9], i1451[10], i1451[11])
  request.r(i1451[12], i1451[13], 0, i1450, 'texture2D')
  request.r(i1451[14], i1451[15], 0, i1450, 'rawImageBG')
  request.r(i1451[16], i1451[17], 0, i1450, 'textProgess')
  request.r(i1451[18], i1451[19], 0, i1450, 'imgProgess')
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1457 = data
  i1456.cullTransparentMesh = !!i1457[0]
  return i1456
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1458 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1459 = data
  request.r(i1459[0], i1459[1], 0, i1458, 'm_Texture')
  i1458.m_UVRect = UnityEngine.Rect.MinMaxRect(i1459[2], i1459[3], i1459[4], i1459[5])
  request.r(i1459[6], i1459[7], 0, i1458, 'm_Material')
  i1458.m_Maskable = !!i1459[8]
  i1458.m_Color = new pc.Color(i1459[9], i1459[10], i1459[11], i1459[12])
  i1458.m_RaycastTarget = !!i1459[13]
  i1458.m_RaycastPadding = new pc.Vec4( i1459[14], i1459[15], i1459[16], i1459[17] )
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1461 = data
  request.r(i1461[0], i1461[1], 0, i1460, 'clip')
  request.r(i1461[2], i1461[3], 0, i1460, 'outputAudioMixerGroup')
  i1460.playOnAwake = !!i1461[4]
  i1460.loop = !!i1461[5]
  i1460.time = i1461[6]
  i1460.volume = i1461[7]
  i1460.pitch = i1461[8]
  i1460.enabled = !!i1461[9]
  return i1460
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1462 = root || request.c( 'UnityEngine.UI.Image' )
  var i1463 = data
  request.r(i1463[0], i1463[1], 0, i1462, 'm_Sprite')
  i1462.m_Type = i1463[2]
  i1462.m_PreserveAspect = !!i1463[3]
  i1462.m_FillCenter = !!i1463[4]
  i1462.m_FillMethod = i1463[5]
  i1462.m_FillAmount = i1463[6]
  i1462.m_FillClockwise = !!i1463[7]
  i1462.m_FillOrigin = i1463[8]
  i1462.m_UseSpriteMesh = !!i1463[9]
  i1462.m_PixelsPerUnitMultiplier = i1463[10]
  request.r(i1463[11], i1463[12], 0, i1462, 'm_Material')
  i1462.m_Maskable = !!i1463[13]
  i1462.m_Color = new pc.Color(i1463[14], i1463[15], i1463[16], i1463[17])
  i1462.m_RaycastTarget = !!i1463[18]
  i1462.m_RaycastPadding = new pc.Vec4( i1463[19], i1463[20], i1463[21], i1463[22] )
  return i1462
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1464 = root || request.c( 'DropZone' )
  var i1465 = data
  i1464.idDrop = i1465[0]
  var i1467 = i1465[1]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 2) {
  request.r(i1467[i + 0], i1467[i + 1], 2, i1466, '')
  }
  i1464.steps = i1466
  i1464.isActive = !!i1465[2]
  i1464.isDontWork = !!i1465[3]
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1471 = data
  i1470.usedByComposite = !!i1471[0]
  i1470.autoTiling = !!i1471[1]
  i1470.size = new pc.Vec2( i1471[2], i1471[3] )
  i1470.edgeRadius = i1471[4]
  i1470.enabled = !!i1471[5]
  i1470.isTrigger = !!i1471[6]
  i1470.usedByEffector = !!i1471[7]
  i1470.density = i1471[8]
  i1470.offset = new pc.Vec2( i1471[9], i1471[10] )
  request.r(i1471[11], i1471[12], 0, i1470, 'material')
  return i1470
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1472 = root || request.c( 'UnityEngine.UI.Button' )
  var i1473 = data
  i1472.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1473[0], i1472.m_OnClick)
  i1472.m_Navigation = request.d('UnityEngine.UI.Navigation', i1473[1], i1472.m_Navigation)
  i1472.m_Transition = i1473[2]
  i1472.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1473[3], i1472.m_Colors)
  i1472.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1473[4], i1472.m_SpriteState)
  i1472.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1473[5], i1472.m_AnimationTriggers)
  i1472.m_Interactable = !!i1473[6]
  request.r(i1473[7], i1473[8], 0, i1472, 'm_TargetGraphic')
  return i1472
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1474 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1475 = data
  i1474.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1475[0], i1474.m_PersistentCalls)
  return i1474
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1476 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1477 = data
  var i1479 = i1477[0]
  var i1478 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.add(request.d('UnityEngine.Events.PersistentCall', i1479[i + 0]));
  }
  i1476.m_Calls = i1478
  return i1476
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1482 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1483 = data
  request.r(i1483[0], i1483[1], 0, i1482, 'm_Target')
  i1482.m_TargetAssemblyTypeName = i1483[2]
  i1482.m_MethodName = i1483[3]
  i1482.m_Mode = i1483[4]
  i1482.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1483[5], i1482.m_Arguments)
  i1482.m_CallState = i1483[6]
  return i1482
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1484 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1485 = data
  request.r(i1485[0], i1485[1], 0, i1484, 'm_ObjectArgument')
  i1484.m_ObjectArgumentAssemblyTypeName = i1485[2]
  i1484.m_IntArgument = i1485[3]
  i1484.m_FloatArgument = i1485[4]
  i1484.m_StringArgument = i1485[5]
  i1484.m_BoolArgument = !!i1485[6]
  return i1484
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1486 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1487 = data
  i1486.m_Mode = i1487[0]
  i1486.m_WrapAround = !!i1487[1]
  request.r(i1487[2], i1487[3], 0, i1486, 'm_SelectOnUp')
  request.r(i1487[4], i1487[5], 0, i1486, 'm_SelectOnDown')
  request.r(i1487[6], i1487[7], 0, i1486, 'm_SelectOnLeft')
  request.r(i1487[8], i1487[9], 0, i1486, 'm_SelectOnRight')
  return i1486
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1488 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1489 = data
  i1488.m_NormalColor = new pc.Color(i1489[0], i1489[1], i1489[2], i1489[3])
  i1488.m_HighlightedColor = new pc.Color(i1489[4], i1489[5], i1489[6], i1489[7])
  i1488.m_PressedColor = new pc.Color(i1489[8], i1489[9], i1489[10], i1489[11])
  i1488.m_SelectedColor = new pc.Color(i1489[12], i1489[13], i1489[14], i1489[15])
  i1488.m_DisabledColor = new pc.Color(i1489[16], i1489[17], i1489[18], i1489[19])
  i1488.m_ColorMultiplier = i1489[20]
  i1488.m_FadeDuration = i1489[21]
  return i1488
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1491 = data
  request.r(i1491[0], i1491[1], 0, i1490, 'm_HighlightedSprite')
  request.r(i1491[2], i1491[3], 0, i1490, 'm_PressedSprite')
  request.r(i1491[4], i1491[5], 0, i1490, 'm_SelectedSprite')
  request.r(i1491[6], i1491[7], 0, i1490, 'm_DisabledSprite')
  return i1490
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1493 = data
  i1492.m_NormalTrigger = i1493[0]
  i1492.m_HighlightedTrigger = i1493[1]
  i1492.m_PressedTrigger = i1493[2]
  i1492.m_SelectedTrigger = i1493[3]
  i1492.m_DisabledTrigger = i1493[4]
  return i1492
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i1494 = root || request.c( 'ClickItem' )
  var i1495 = data
  i1494.isPhone = !!i1495[0]
  var i1497 = i1495[1]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 2) {
  request.r(i1497[i + 0], i1497[i + 1], 2, i1496, '')
  }
  i1494.steps = i1496
  i1494.currentStep = i1495[2]
  return i1494
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1498 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1499 = data
  request.r(i1499[0], i1499[1], 0, i1498, 'skeletonDataAsset')
  request.r(i1499[2], i1499[3], 0, i1498, 'additiveMaterial')
  request.r(i1499[4], i1499[5], 0, i1498, 'multiplyMaterial')
  request.r(i1499[6], i1499[7], 0, i1498, 'screenMaterial')
  i1498.initialSkinName = i1499[8]
  i1498.initialFlipX = !!i1499[9]
  i1498.initialFlipY = !!i1499[10]
  i1498.startingAnimation = i1499[11]
  i1498.startingLoop = !!i1499[12]
  i1498.timeScale = i1499[13]
  i1498.freeze = !!i1499[14]
  i1498.layoutScaleMode = i1499[15]
  i1498.updateWhenInvisible = i1499[16]
  i1498.allowMultipleCanvasRenderers = !!i1499[17]
  var i1501 = i1499[18]
  var i1500 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1501.length; i += 2) {
  request.r(i1501[i + 0], i1501[i + 1], 1, i1500, '')
  }
  i1498.canvasRenderers = i1500
  i1498.enableSeparatorSlots = !!i1499[19]
  i1498.updateSeparatorPartLocation = !!i1499[20]
  i1498.updateSeparatorPartScale = !!i1499[21]
  i1498.disableMeshAssignmentOnOverride = !!i1499[22]
  i1498.referenceSize = new pc.Vec2( i1499[23], i1499[24] )
  i1498.referenceScale = i1499[25]
  i1498.rectTransformSize = new pc.Vec2( i1499[26], i1499[27] )
  i1498.editReferenceRect = !!i1499[28]
  var i1503 = i1499[29]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( i1503[i + 0] );
  }
  i1498.separatorSlotNames = i1502
  var i1505 = i1499[30]
  var i1504 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1505.length; i += 2) {
  request.r(i1505[i + 0], i1505[i + 1], 1, i1504, '')
  }
  i1498.separatorParts = i1504
  i1498.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1499[31], i1498.meshGenerator)
  i1498.updateTiming = i1499[32]
  i1498.unscaledTime = !!i1499[33]
  request.r(i1499[34], i1499[35], 0, i1498, 'm_Material')
  i1498.m_Maskable = !!i1499[36]
  i1498.m_Color = new pc.Color(i1499[37], i1499[38], i1499[39], i1499[40])
  i1498.m_RaycastTarget = !!i1499[41]
  i1498.m_RaycastPadding = new pc.Vec4( i1499[42], i1499[43], i1499[44], i1499[45] )
  return i1498
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1512 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1513 = data
  i1512.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1513[0], i1512.settings)
  return i1512
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1514 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1515 = data
  i1514.useClipping = !!i1515[0]
  i1514.zSpacing = i1515[1]
  i1514.pmaVertexColors = !!i1515[2]
  i1514.tintBlack = !!i1515[3]
  i1514.canvasGroupTintBlack = !!i1515[4]
  i1514.calculateTangents = !!i1515[5]
  i1514.addNormals = !!i1515[6]
  i1514.immutableTriangles = !!i1515[7]
  return i1514
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1516 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1517 = data
  i1516.targetIsSelf = !!i1517[0]
  request.r(i1517[1], i1517[2], 0, i1516, 'targetGO')
  i1516.tweenTargetIsTargetGO = !!i1517[3]
  i1516.delay = i1517[4]
  i1516.duration = i1517[5]
  i1516.easeType = i1517[6]
  i1516.easeCurve = new pc.AnimationCurve( { keys_flow: i1517[7] } )
  i1516.loopType = i1517[8]
  i1516.loops = i1517[9]
  i1516.id = i1517[10]
  i1516.isRelative = !!i1517[11]
  i1516.isFrom = !!i1517[12]
  i1516.isIndependentUpdate = !!i1517[13]
  i1516.autoKill = !!i1517[14]
  i1516.autoGenerate = !!i1517[15]
  i1516.isActive = !!i1517[16]
  i1516.isValid = !!i1517[17]
  request.r(i1517[18], i1517[19], 0, i1516, 'target')
  i1516.animationType = i1517[20]
  i1516.targetType = i1517[21]
  i1516.forcedTargetType = i1517[22]
  i1516.autoPlay = !!i1517[23]
  i1516.useTargetAsV3 = !!i1517[24]
  i1516.endValueFloat = i1517[25]
  i1516.endValueV3 = new pc.Vec3( i1517[26], i1517[27], i1517[28] )
  i1516.endValueV2 = new pc.Vec2( i1517[29], i1517[30] )
  i1516.endValueColor = new pc.Color(i1517[31], i1517[32], i1517[33], i1517[34])
  i1516.endValueString = i1517[35]
  i1516.endValueRect = UnityEngine.Rect.MinMaxRect(i1517[36], i1517[37], i1517[38], i1517[39])
  request.r(i1517[40], i1517[41], 0, i1516, 'endValueTransform')
  i1516.optionalBool0 = !!i1517[42]
  i1516.optionalBool1 = !!i1517[43]
  i1516.optionalFloat0 = i1517[44]
  i1516.optionalInt0 = i1517[45]
  i1516.optionalRotationMode = i1517[46]
  i1516.optionalScrambleMode = i1517[47]
  i1516.optionalShakeRandomnessMode = i1517[48]
  i1516.optionalString = i1517[49]
  i1516.updateType = i1517[50]
  i1516.isSpeedBased = !!i1517[51]
  i1516.hasOnStart = !!i1517[52]
  i1516.hasOnPlay = !!i1517[53]
  i1516.hasOnUpdate = !!i1517[54]
  i1516.hasOnStepComplete = !!i1517[55]
  i1516.hasOnComplete = !!i1517[56]
  i1516.hasOnTweenCreated = !!i1517[57]
  i1516.hasOnRewind = !!i1517[58]
  i1516.onStart = request.d('UnityEngine.Events.UnityEvent', i1517[59], i1516.onStart)
  i1516.onPlay = request.d('UnityEngine.Events.UnityEvent', i1517[60], i1516.onPlay)
  i1516.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1517[61], i1516.onUpdate)
  i1516.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1517[62], i1516.onStepComplete)
  i1516.onComplete = request.d('UnityEngine.Events.UnityEvent', i1517[63], i1516.onComplete)
  i1516.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1517[64], i1516.onTweenCreated)
  i1516.onRewind = request.d('UnityEngine.Events.UnityEvent', i1517[65], i1516.onRewind)
  return i1516
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1519 = data
  i1518.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1519[0], i1518.m_PersistentCalls)
  return i1518
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1520 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1521 = data
  i1520.m_hasFontAssetChanged = !!i1521[0]
  request.r(i1521[1], i1521[2], 0, i1520, 'm_baseMaterial')
  i1520.m_maskOffset = new pc.Vec4( i1521[3], i1521[4], i1521[5], i1521[6] )
  i1520.m_text = i1521[7]
  i1520.m_isRightToLeft = !!i1521[8]
  request.r(i1521[9], i1521[10], 0, i1520, 'm_fontAsset')
  request.r(i1521[11], i1521[12], 0, i1520, 'm_sharedMaterial')
  var i1523 = i1521[13]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 2) {
  request.r(i1523[i + 0], i1523[i + 1], 2, i1522, '')
  }
  i1520.m_fontSharedMaterials = i1522
  request.r(i1521[14], i1521[15], 0, i1520, 'm_fontMaterial')
  var i1525 = i1521[16]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 2) {
  request.r(i1525[i + 0], i1525[i + 1], 2, i1524, '')
  }
  i1520.m_fontMaterials = i1524
  i1520.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1521[17], i1521[18], i1521[19], i1521[20])
  i1520.m_fontColor = new pc.Color(i1521[21], i1521[22], i1521[23], i1521[24])
  i1520.m_enableVertexGradient = !!i1521[25]
  i1520.m_colorMode = i1521[26]
  i1520.m_fontColorGradient = request.d('TMPro.VertexGradient', i1521[27], i1520.m_fontColorGradient)
  request.r(i1521[28], i1521[29], 0, i1520, 'm_fontColorGradientPreset')
  request.r(i1521[30], i1521[31], 0, i1520, 'm_spriteAsset')
  i1520.m_tintAllSprites = !!i1521[32]
  request.r(i1521[33], i1521[34], 0, i1520, 'm_StyleSheet')
  i1520.m_TextStyleHashCode = i1521[35]
  i1520.m_overrideHtmlColors = !!i1521[36]
  i1520.m_faceColor = UnityEngine.Color32.ConstructColor(i1521[37], i1521[38], i1521[39], i1521[40])
  i1520.m_fontSize = i1521[41]
  i1520.m_fontSizeBase = i1521[42]
  i1520.m_fontWeight = i1521[43]
  i1520.m_enableAutoSizing = !!i1521[44]
  i1520.m_fontSizeMin = i1521[45]
  i1520.m_fontSizeMax = i1521[46]
  i1520.m_fontStyle = i1521[47]
  i1520.m_HorizontalAlignment = i1521[48]
  i1520.m_VerticalAlignment = i1521[49]
  i1520.m_textAlignment = i1521[50]
  i1520.m_characterSpacing = i1521[51]
  i1520.m_wordSpacing = i1521[52]
  i1520.m_lineSpacing = i1521[53]
  i1520.m_lineSpacingMax = i1521[54]
  i1520.m_paragraphSpacing = i1521[55]
  i1520.m_charWidthMaxAdj = i1521[56]
  i1520.m_enableWordWrapping = !!i1521[57]
  i1520.m_wordWrappingRatios = i1521[58]
  i1520.m_overflowMode = i1521[59]
  request.r(i1521[60], i1521[61], 0, i1520, 'm_linkedTextComponent')
  request.r(i1521[62], i1521[63], 0, i1520, 'parentLinkedComponent')
  i1520.m_enableKerning = !!i1521[64]
  i1520.m_enableExtraPadding = !!i1521[65]
  i1520.checkPaddingRequired = !!i1521[66]
  i1520.m_isRichText = !!i1521[67]
  i1520.m_parseCtrlCharacters = !!i1521[68]
  i1520.m_isOrthographic = !!i1521[69]
  i1520.m_isCullingEnabled = !!i1521[70]
  i1520.m_horizontalMapping = i1521[71]
  i1520.m_verticalMapping = i1521[72]
  i1520.m_uvLineOffset = i1521[73]
  i1520.m_geometrySortingOrder = i1521[74]
  i1520.m_IsTextObjectScaleStatic = !!i1521[75]
  i1520.m_VertexBufferAutoSizeReduction = !!i1521[76]
  i1520.m_useMaxVisibleDescender = !!i1521[77]
  i1520.m_pageToDisplay = i1521[78]
  i1520.m_margin = new pc.Vec4( i1521[79], i1521[80], i1521[81], i1521[82] )
  i1520.m_isUsingLegacyAnimationComponent = !!i1521[83]
  i1520.m_isVolumetricText = !!i1521[84]
  request.r(i1521[85], i1521[86], 0, i1520, 'm_Material')
  i1520.m_Maskable = !!i1521[87]
  i1520.m_Color = new pc.Color(i1521[88], i1521[89], i1521[90], i1521[91])
  i1520.m_RaycastTarget = !!i1521[92]
  i1520.m_RaycastPadding = new pc.Vec4( i1521[93], i1521[94], i1521[95], i1521[96] )
  return i1520
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1528 = root || request.c( 'TMPro.VertexGradient' )
  var i1529 = data
  i1528.topLeft = new pc.Color(i1529[0], i1529[1], i1529[2], i1529[3])
  i1528.topRight = new pc.Color(i1529[4], i1529[5], i1529[6], i1529[7])
  i1528.bottomLeft = new pc.Color(i1529[8], i1529[9], i1529[10], i1529[11])
  i1528.bottomRight = new pc.Color(i1529[12], i1529[13], i1529[14], i1529[15])
  return i1528
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1530 = root || request.c( 'DraggableItem' )
  var i1531 = data
  i1530.idDrag = i1531[0]
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1533 = data
  i1532.m_Alpha = i1533[0]
  i1532.m_Interactable = !!i1533[1]
  i1532.m_BlocksRaycasts = !!i1533[2]
  i1532.m_IgnoreParentGroups = !!i1533[3]
  i1532.enabled = !!i1533[4]
  return i1532
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1534 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1535 = data
  i1534.m_Spacing = i1535[0]
  i1534.m_ChildForceExpandWidth = !!i1535[1]
  i1534.m_ChildForceExpandHeight = !!i1535[2]
  i1534.m_ChildControlWidth = !!i1535[3]
  i1534.m_ChildControlHeight = !!i1535[4]
  i1534.m_ChildScaleWidth = !!i1535[5]
  i1534.m_ChildScaleHeight = !!i1535[6]
  i1534.m_ReverseArrangement = !!i1535[7]
  i1534.m_Padding = UnityEngine.RectOffset.FromPaddings(i1535[8], i1535[9], i1535[10], i1535[11])
  i1534.m_ChildAlignment = i1535[12]
  return i1534
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1536 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1537 = data
  i1536.m_ShowMaskGraphic = !!i1537[0]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1539 = data
  i1538.ambientIntensity = i1539[0]
  i1538.reflectionIntensity = i1539[1]
  i1538.ambientMode = i1539[2]
  i1538.ambientLight = new pc.Color(i1539[3], i1539[4], i1539[5], i1539[6])
  i1538.ambientSkyColor = new pc.Color(i1539[7], i1539[8], i1539[9], i1539[10])
  i1538.ambientGroundColor = new pc.Color(i1539[11], i1539[12], i1539[13], i1539[14])
  i1538.ambientEquatorColor = new pc.Color(i1539[15], i1539[16], i1539[17], i1539[18])
  i1538.fogColor = new pc.Color(i1539[19], i1539[20], i1539[21], i1539[22])
  i1538.fogEndDistance = i1539[23]
  i1538.fogStartDistance = i1539[24]
  i1538.fogDensity = i1539[25]
  i1538.fog = !!i1539[26]
  request.r(i1539[27], i1539[28], 0, i1538, 'skybox')
  i1538.fogMode = i1539[29]
  var i1541 = i1539[30]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1541[i + 0]) );
  }
  i1538.lightmaps = i1540
  i1538.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1539[31], i1538.lightProbes)
  i1538.lightmapsMode = i1539[32]
  i1538.mixedBakeMode = i1539[33]
  i1538.environmentLightingMode = i1539[34]
  i1538.ambientProbe = new pc.SphericalHarmonicsL2(i1539[35])
  i1538.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1539[36])
  i1538.useReferenceAmbientProbe = !!i1539[37]
  request.r(i1539[38], i1539[39], 0, i1538, 'customReflection')
  request.r(i1539[40], i1539[41], 0, i1538, 'defaultReflection')
  i1538.defaultReflectionMode = i1539[42]
  i1538.defaultReflectionResolution = i1539[43]
  i1538.sunLightObjectId = i1539[44]
  i1538.pixelLightCount = i1539[45]
  i1538.defaultReflectionHDR = !!i1539[46]
  i1538.hasLightDataAsset = !!i1539[47]
  i1538.hasManualGenerate = !!i1539[48]
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1545 = data
  request.r(i1545[0], i1545[1], 0, i1544, 'lightmapColor')
  request.r(i1545[2], i1545[3], 0, i1544, 'lightmapDirection')
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1546 = root || new UnityEngine.LightProbes()
  var i1547 = data
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1555 = data
  var i1557 = i1555[0]
  var i1556 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1557[i + 0]));
  }
  i1554.ShaderCompilationErrors = i1556
  i1554.name = i1555[1]
  i1554.guid = i1555[2]
  var i1559 = i1555[3]
  var i1558 = []
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.push( i1559[i + 0] );
  }
  i1554.shaderDefinedKeywords = i1558
  var i1561 = i1555[4]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 1) {
    i1560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1561[i + 0]) );
  }
  i1554.passes = i1560
  var i1563 = i1555[5]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1563[i + 0]) );
  }
  i1554.usePasses = i1562
  var i1565 = i1555[6]
  var i1564 = []
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1565[i + 0]) );
  }
  i1554.defaultParameterValues = i1564
  request.r(i1555[7], i1555[8], 0, i1554, 'unityFallbackShader')
  i1554.readDepth = !!i1555[9]
  i1554.isCreatedByShaderGraph = !!i1555[10]
  i1554.usedBatchUniforms = i1555[11]
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1569 = data
  i1568.shaderName = i1569[0]
  i1568.errorMessage = i1569[1]
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1572 = root || new pc.UnityShaderPass()
  var i1573 = data
  i1572.id = i1573[0]
  i1572.subShaderIndex = i1573[1]
  i1572.name = i1573[2]
  i1572.passType = i1573[3]
  i1572.grabPassTextureName = i1573[4]
  i1572.usePass = !!i1573[5]
  i1572.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1573[6], i1572.zTest)
  i1572.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1573[7], i1572.zWrite)
  i1572.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1573[8], i1572.culling)
  i1572.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1573[9], i1572.blending)
  i1572.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1573[10], i1572.alphaBlending)
  i1572.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1573[11], i1572.colorWriteMask)
  i1572.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1573[12], i1572.offsetUnits)
  i1572.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1573[13], i1572.offsetFactor)
  i1572.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1573[14], i1572.stencilRef)
  i1572.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1573[15], i1572.stencilReadMask)
  i1572.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1573[16], i1572.stencilWriteMask)
  i1572.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1573[17], i1572.stencilOp)
  i1572.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1573[18], i1572.stencilOpFront)
  i1572.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1573[19], i1572.stencilOpBack)
  var i1575 = i1573[20]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 1) {
    i1574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1575[i + 0]) );
  }
  i1572.tags = i1574
  var i1577 = i1573[21]
  var i1576 = []
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.push( i1577[i + 0] );
  }
  i1572.passDefinedKeywords = i1576
  var i1579 = i1573[22]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1579[i + 0]) );
  }
  i1572.passDefinedKeywordGroups = i1578
  var i1581 = i1573[23]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1581[i + 0]) );
  }
  i1572.variants = i1580
  var i1583 = i1573[24]
  var i1582 = []
  for(var i = 0; i < i1583.length; i += 1) {
    i1582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1583[i + 0]) );
  }
  i1572.excludedVariants = i1582
  i1572.hasDepthReader = !!i1573[25]
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1585 = data
  i1584.val = i1585[0]
  i1584.name = i1585[1]
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1587 = data
  i1586.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1587[0], i1586.src)
  i1586.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1587[1], i1586.dst)
  i1586.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1587[2], i1586.op)
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1589 = data
  i1588.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1589[0], i1588.pass)
  i1588.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1589[1], i1588.fail)
  i1588.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1589[2], i1588.zFail)
  i1588.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1589[3], i1588.comp)
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1593 = data
  i1592.name = i1593[0]
  i1592.value = i1593[1]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1597 = data
  var i1599 = i1597[0]
  var i1598 = []
  for(var i = 0; i < i1599.length; i += 1) {
    i1598.push( i1599[i + 0] );
  }
  i1596.keywords = i1598
  i1596.hasDiscard = !!i1597[1]
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1603 = data
  i1602.passId = i1603[0]
  i1602.subShaderIndex = i1603[1]
  var i1605 = i1603[2]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( i1605[i + 0] );
  }
  i1602.keywords = i1604
  i1602.vertexProgram = i1603[3]
  i1602.fragmentProgram = i1603[4]
  i1602.compiledForWebGL2 = !!i1603[5]
  i1602.readDepth = !!i1603[6]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1609 = data
  request.r(i1609[0], i1609[1], 0, i1608, 'shader')
  i1608.pass = i1609[2]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1613 = data
  i1612.name = i1613[0]
  i1612.type = i1613[1]
  i1612.value = new pc.Vec4( i1613[2], i1613[3], i1613[4], i1613[5] )
  i1612.textureValue = i1613[6]
  i1612.shaderPropertyFlag = i1613[7]
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1615 = data
  i1614.name = i1615[0]
  request.r(i1615[1], i1615[2], 0, i1614, 'texture')
  i1614.aabb = i1615[3]
  i1614.vertices = i1615[4]
  i1614.triangles = i1615[5]
  i1614.textureRect = UnityEngine.Rect.MinMaxRect(i1615[6], i1615[7], i1615[8], i1615[9])
  i1614.packedRect = UnityEngine.Rect.MinMaxRect(i1615[10], i1615[11], i1615[12], i1615[13])
  i1614.border = new pc.Vec4( i1615[14], i1615[15], i1615[16], i1615[17] )
  i1614.transparency = i1615[18]
  i1614.bounds = i1615[19]
  i1614.pixelsPerUnit = i1615[20]
  i1614.textureWidth = i1615[21]
  i1614.textureHeight = i1615[22]
  i1614.nativeSize = new pc.Vec2( i1615[23], i1615[24] )
  i1614.pivot = new pc.Vec2( i1615[25], i1615[26] )
  i1614.textureRectOffset = new pc.Vec2( i1615[27], i1615[28] )
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1617 = data
  i1616.name = i1617[0]
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1619 = data
  i1618.name = i1619[0]
  i1618.ascent = i1619[1]
  i1618.originalLineHeight = i1619[2]
  i1618.fontSize = i1619[3]
  var i1621 = i1619[4]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1621[i + 0]) );
  }
  i1618.characterInfo = i1620
  request.r(i1619[5], i1619[6], 0, i1618, 'texture')
  i1618.originalFontSize = i1619[7]
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1625 = data
  i1624.index = i1625[0]
  i1624.advance = i1625[1]
  i1624.bearing = i1625[2]
  i1624.glyphWidth = i1625[3]
  i1624.glyphHeight = i1625[4]
  i1624.minX = i1625[5]
  i1624.maxX = i1625[6]
  i1624.minY = i1625[7]
  i1624.maxY = i1625[8]
  i1624.uvBottomLeftX = i1625[9]
  i1624.uvBottomLeftY = i1625[10]
  i1624.uvBottomRightX = i1625[11]
  i1624.uvBottomRightY = i1625[12]
  i1624.uvTopLeftX = i1625[13]
  i1624.uvTopLeftY = i1625[14]
  i1624.uvTopRightX = i1625[15]
  i1624.uvTopRightY = i1625[16]
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1627 = data
  i1626.name = i1627[0]
  i1626.bytes64 = i1627[1]
  i1626.data = i1627[2]
  return i1626
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1628 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1629 = data
  var i1631 = i1629[0]
  var i1630 = []
  for(var i = 0; i < i1631.length; i += 2) {
  request.r(i1631[i + 0], i1631[i + 1], 2, i1630, '')
  }
  i1628.atlasAssets = i1630
  i1628.scale = i1629[1]
  request.r(i1629[2], i1629[3], 0, i1628, 'skeletonJSON')
  i1628.isUpgradingBlendModeMaterials = !!i1629[4]
  i1628.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1629[5], i1628.blendModeMaterials)
  var i1633 = i1629[6]
  var i1632 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1633.length; i += 2) {
  request.r(i1633[i + 0], i1633[i + 1], 1, i1632, '')
  }
  i1628.skeletonDataModifiers = i1632
  var i1635 = i1629[7]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.push( i1635[i + 0] );
  }
  i1628.fromAnimation = i1634
  var i1637 = i1629[8]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.push( i1637[i + 0] );
  }
  i1628.toAnimation = i1636
  i1628.duration = i1629[9]
  i1628.defaultMix = i1629[10]
  request.r(i1629[11], i1629[12], 0, i1628, 'controller')
  return i1628
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1640 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1641 = data
  i1640.applyAdditiveMaterial = !!i1641[0]
  var i1643 = i1641[1]
  var i1642 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1643[i + 0]));
  }
  i1640.additiveMaterials = i1642
  var i1645 = i1641[2]
  var i1644 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1645[i + 0]));
  }
  i1640.multiplyMaterials = i1644
  var i1647 = i1641[3]
  var i1646 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1647.length; i += 1) {
    i1646.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1647[i + 0]));
  }
  i1640.screenMaterials = i1646
  i1640.requiresBlendModeMaterials = !!i1641[4]
  return i1640
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1650 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1651 = data
  i1650.pageName = i1651[0]
  request.r(i1651[1], i1651[2], 0, i1650, 'material')
  return i1650
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1654 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1655 = data
  request.r(i1655[0], i1655[1], 0, i1654, 'atlasFile')
  var i1657 = i1655[2]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 2) {
  request.r(i1657[i + 0], i1657[i + 1], 2, i1656, '')
  }
  i1654.materials = i1656
  i1654.textureLoadingMode = i1655[3]
  request.r(i1655[4], i1655[5], 0, i1654, 'onDemandTextureLoader')
  return i1654
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1658 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1659 = data
  i1658.hashCode = i1659[0]
  request.r(i1659[1], i1659[2], 0, i1658, 'material')
  i1658.materialHashCode = i1659[3]
  request.r(i1659[4], i1659[5], 0, i1658, 'atlas')
  i1658.normalStyle = i1659[6]
  i1658.normalSpacingOffset = i1659[7]
  i1658.boldStyle = i1659[8]
  i1658.boldSpacing = i1659[9]
  i1658.italicStyle = i1659[10]
  i1658.tabSize = i1659[11]
  i1658.m_Version = i1659[12]
  i1658.m_SourceFontFileGUID = i1659[13]
  request.r(i1659[14], i1659[15], 0, i1658, 'm_SourceFontFile_EditorRef')
  request.r(i1659[16], i1659[17], 0, i1658, 'm_SourceFontFile')
  i1658.m_AtlasPopulationMode = i1659[18]
  i1658.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1659[19], i1658.m_FaceInfo)
  var i1661 = i1659[20]
  var i1660 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.add(request.d('UnityEngine.TextCore.Glyph', i1661[i + 0]));
  }
  i1658.m_GlyphTable = i1660
  var i1663 = i1659[21]
  var i1662 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.add(request.d('TMPro.TMP_Character', i1663[i + 0]));
  }
  i1658.m_CharacterTable = i1662
  var i1665 = i1659[22]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 2) {
  request.r(i1665[i + 0], i1665[i + 1], 2, i1664, '')
  }
  i1658.m_AtlasTextures = i1664
  i1658.m_AtlasTextureIndex = i1659[23]
  i1658.m_IsMultiAtlasTexturesEnabled = !!i1659[24]
  i1658.m_ClearDynamicDataOnBuild = !!i1659[25]
  var i1667 = i1659[26]
  var i1666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.add(request.d('UnityEngine.TextCore.GlyphRect', i1667[i + 0]));
  }
  i1658.m_UsedGlyphRects = i1666
  var i1669 = i1659[27]
  var i1668 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.add(request.d('UnityEngine.TextCore.GlyphRect', i1669[i + 0]));
  }
  i1658.m_FreeGlyphRects = i1668
  i1658.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1659[28], i1658.m_fontInfo)
  i1658.m_AtlasWidth = i1659[29]
  i1658.m_AtlasHeight = i1659[30]
  i1658.m_AtlasPadding = i1659[31]
  i1658.m_AtlasRenderMode = i1659[32]
  var i1671 = i1659[33]
  var i1670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.add(request.d('TMPro.TMP_Glyph', i1671[i + 0]));
  }
  i1658.m_glyphInfoList = i1670
  i1658.m_KerningTable = request.d('TMPro.KerningTable', i1659[34], i1658.m_KerningTable)
  i1658.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1659[35], i1658.m_FontFeatureTable)
  var i1673 = i1659[36]
  var i1672 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1673.length; i += 2) {
  request.r(i1673[i + 0], i1673[i + 1], 1, i1672, '')
  }
  i1658.fallbackFontAssets = i1672
  var i1675 = i1659[37]
  var i1674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1675.length; i += 2) {
  request.r(i1675[i + 0], i1675[i + 1], 1, i1674, '')
  }
  i1658.m_FallbackFontAssetTable = i1674
  i1658.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1659[38], i1658.m_CreationSettings)
  var i1677 = i1659[39]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.push( request.d('TMPro.TMP_FontWeightPair', i1677[i + 0]) );
  }
  i1658.m_FontWeightTable = i1676
  var i1679 = i1659[40]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.push( request.d('TMPro.TMP_FontWeightPair', i1679[i + 0]) );
  }
  i1658.fontWeights = i1678
  return i1658
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1680 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1681 = data
  i1680.m_FaceIndex = i1681[0]
  i1680.m_FamilyName = i1681[1]
  i1680.m_StyleName = i1681[2]
  i1680.m_PointSize = i1681[3]
  i1680.m_Scale = i1681[4]
  i1680.m_UnitsPerEM = i1681[5]
  i1680.m_LineHeight = i1681[6]
  i1680.m_AscentLine = i1681[7]
  i1680.m_CapLine = i1681[8]
  i1680.m_MeanLine = i1681[9]
  i1680.m_Baseline = i1681[10]
  i1680.m_DescentLine = i1681[11]
  i1680.m_SuperscriptOffset = i1681[12]
  i1680.m_SuperscriptSize = i1681[13]
  i1680.m_SubscriptOffset = i1681[14]
  i1680.m_SubscriptSize = i1681[15]
  i1680.m_UnderlineOffset = i1681[16]
  i1680.m_UnderlineThickness = i1681[17]
  i1680.m_StrikethroughOffset = i1681[18]
  i1680.m_StrikethroughThickness = i1681[19]
  i1680.m_TabWidth = i1681[20]
  return i1680
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1684 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1685 = data
  i1684.m_Index = i1685[0]
  i1684.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1685[1], i1684.m_Metrics)
  i1684.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1685[2], i1684.m_GlyphRect)
  i1684.m_Scale = i1685[3]
  i1684.m_AtlasIndex = i1685[4]
  i1684.m_ClassDefinitionType = i1685[5]
  return i1684
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1686 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1687 = data
  i1686.m_Width = i1687[0]
  i1686.m_Height = i1687[1]
  i1686.m_HorizontalBearingX = i1687[2]
  i1686.m_HorizontalBearingY = i1687[3]
  i1686.m_HorizontalAdvance = i1687[4]
  return i1686
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1688 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1689 = data
  i1688.m_X = i1689[0]
  i1688.m_Y = i1689[1]
  i1688.m_Width = i1689[2]
  i1688.m_Height = i1689[3]
  return i1688
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1692 = root || request.c( 'TMPro.TMP_Character' )
  var i1693 = data
  i1692.m_ElementType = i1693[0]
  i1692.m_Unicode = i1693[1]
  i1692.m_GlyphIndex = i1693[2]
  i1692.m_Scale = i1693[3]
  return i1692
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1698 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1699 = data
  i1698.Name = i1699[0]
  i1698.PointSize = i1699[1]
  i1698.Scale = i1699[2]
  i1698.CharacterCount = i1699[3]
  i1698.LineHeight = i1699[4]
  i1698.Baseline = i1699[5]
  i1698.Ascender = i1699[6]
  i1698.CapHeight = i1699[7]
  i1698.Descender = i1699[8]
  i1698.CenterLine = i1699[9]
  i1698.SuperscriptOffset = i1699[10]
  i1698.SubscriptOffset = i1699[11]
  i1698.SubSize = i1699[12]
  i1698.Underline = i1699[13]
  i1698.UnderlineThickness = i1699[14]
  i1698.strikethrough = i1699[15]
  i1698.strikethroughThickness = i1699[16]
  i1698.TabWidth = i1699[17]
  i1698.Padding = i1699[18]
  i1698.AtlasWidth = i1699[19]
  i1698.AtlasHeight = i1699[20]
  return i1698
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1702 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1703 = data
  i1702.id = i1703[0]
  i1702.x = i1703[1]
  i1702.y = i1703[2]
  i1702.width = i1703[3]
  i1702.height = i1703[4]
  i1702.xOffset = i1703[5]
  i1702.yOffset = i1703[6]
  i1702.xAdvance = i1703[7]
  i1702.scale = i1703[8]
  return i1702
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1704 = root || request.c( 'TMPro.KerningTable' )
  var i1705 = data
  var i1707 = i1705[0]
  var i1706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.add(request.d('TMPro.KerningPair', i1707[i + 0]));
  }
  i1704.kerningPairs = i1706
  return i1704
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1710 = root || request.c( 'TMPro.KerningPair' )
  var i1711 = data
  i1710.xOffset = i1711[0]
  i1710.m_FirstGlyph = i1711[1]
  i1710.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1711[2], i1710.m_FirstGlyphAdjustments)
  i1710.m_SecondGlyph = i1711[3]
  i1710.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1711[4], i1710.m_SecondGlyphAdjustments)
  i1710.m_IgnoreSpacingAdjustments = !!i1711[5]
  return i1710
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1712 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1713 = data
  var i1715 = i1713[0]
  var i1714 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1715[i + 0]));
  }
  i1712.m_GlyphPairAdjustmentRecords = i1714
  return i1712
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1718 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1719 = data
  i1718.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1719[0], i1718.m_FirstAdjustmentRecord)
  i1718.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1719[1], i1718.m_SecondAdjustmentRecord)
  i1718.m_FeatureLookupFlags = i1719[2]
  return i1718
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1722 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1723 = data
  i1722.sourceFontFileName = i1723[0]
  i1722.sourceFontFileGUID = i1723[1]
  i1722.pointSizeSamplingMode = i1723[2]
  i1722.pointSize = i1723[3]
  i1722.padding = i1723[4]
  i1722.packingMode = i1723[5]
  i1722.atlasWidth = i1723[6]
  i1722.atlasHeight = i1723[7]
  i1722.characterSetSelectionMode = i1723[8]
  i1722.characterSequence = i1723[9]
  i1722.referencedFontAssetGUID = i1723[10]
  i1722.referencedTextAssetGUID = i1723[11]
  i1722.fontStyle = i1723[12]
  i1722.fontStyleModifier = i1723[13]
  i1722.renderMode = i1723[14]
  i1722.includeFontFeatures = !!i1723[15]
  return i1722
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1726 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1727 = data
  request.r(i1727[0], i1727[1], 0, i1726, 'regularTypeface')
  request.r(i1727[2], i1727[3], 0, i1726, 'italicTypeface')
  return i1726
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1728 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1729 = data
  i1728.useSafeMode = !!i1729[0]
  i1728.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1729[1], i1728.safeModeOptions)
  i1728.timeScale = i1729[2]
  i1728.unscaledTimeScale = i1729[3]
  i1728.useSmoothDeltaTime = !!i1729[4]
  i1728.maxSmoothUnscaledTime = i1729[5]
  i1728.rewindCallbackMode = i1729[6]
  i1728.showUnityEditorReport = !!i1729[7]
  i1728.logBehaviour = i1729[8]
  i1728.drawGizmos = !!i1729[9]
  i1728.defaultRecyclable = !!i1729[10]
  i1728.defaultAutoPlay = i1729[11]
  i1728.defaultUpdateType = i1729[12]
  i1728.defaultTimeScaleIndependent = !!i1729[13]
  i1728.defaultEaseType = i1729[14]
  i1728.defaultEaseOvershootOrAmplitude = i1729[15]
  i1728.defaultEasePeriod = i1729[16]
  i1728.defaultAutoKill = !!i1729[17]
  i1728.defaultLoopType = i1729[18]
  i1728.debugMode = !!i1729[19]
  i1728.debugStoreTargetId = !!i1729[20]
  i1728.showPreviewPanel = !!i1729[21]
  i1728.storeSettingsLocation = i1729[22]
  i1728.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1729[23], i1728.modules)
  i1728.createASMDEF = !!i1729[24]
  i1728.showPlayingTweens = !!i1729[25]
  i1728.showPausedTweens = !!i1729[26]
  return i1728
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1730 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1731 = data
  i1730.logBehaviour = i1731[0]
  i1730.nestedTweenFailureBehaviour = i1731[1]
  return i1730
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1732 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1733 = data
  i1732.showPanel = !!i1733[0]
  i1732.audioEnabled = !!i1733[1]
  i1732.physicsEnabled = !!i1733[2]
  i1732.physics2DEnabled = !!i1733[3]
  i1732.spriteEnabled = !!i1733[4]
  i1732.uiEnabled = !!i1733[5]
  i1732.textMeshProEnabled = !!i1733[6]
  i1732.tk2DEnabled = !!i1733[7]
  i1732.deAudioEnabled = !!i1733[8]
  i1732.deUnityExtendedEnabled = !!i1733[9]
  i1732.epoOutlineEnabled = !!i1733[10]
  return i1732
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1734 = root || request.c( 'TMPro.TMP_Settings' )
  var i1735 = data
  i1734.m_enableWordWrapping = !!i1735[0]
  i1734.m_enableKerning = !!i1735[1]
  i1734.m_enableExtraPadding = !!i1735[2]
  i1734.m_enableTintAllSprites = !!i1735[3]
  i1734.m_enableParseEscapeCharacters = !!i1735[4]
  i1734.m_EnableRaycastTarget = !!i1735[5]
  i1734.m_GetFontFeaturesAtRuntime = !!i1735[6]
  i1734.m_missingGlyphCharacter = i1735[7]
  i1734.m_warningsDisabled = !!i1735[8]
  request.r(i1735[9], i1735[10], 0, i1734, 'm_defaultFontAsset')
  i1734.m_defaultFontAssetPath = i1735[11]
  i1734.m_defaultFontSize = i1735[12]
  i1734.m_defaultAutoSizeMinRatio = i1735[13]
  i1734.m_defaultAutoSizeMaxRatio = i1735[14]
  i1734.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1735[15], i1735[16] )
  i1734.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1735[17], i1735[18] )
  i1734.m_autoSizeTextContainer = !!i1735[19]
  i1734.m_IsTextObjectScaleStatic = !!i1735[20]
  var i1737 = i1735[21]
  var i1736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1737.length; i += 2) {
  request.r(i1737[i + 0], i1737[i + 1], 1, i1736, '')
  }
  i1734.m_fallbackFontAssets = i1736
  i1734.m_matchMaterialPreset = !!i1735[22]
  request.r(i1735[23], i1735[24], 0, i1734, 'm_defaultSpriteAsset')
  i1734.m_defaultSpriteAssetPath = i1735[25]
  i1734.m_enableEmojiSupport = !!i1735[26]
  i1734.m_MissingCharacterSpriteUnicode = i1735[27]
  i1734.m_defaultColorGradientPresetsPath = i1735[28]
  request.r(i1735[29], i1735[30], 0, i1734, 'm_defaultStyleSheet')
  i1734.m_StyleSheetsResourcePath = i1735[31]
  request.r(i1735[32], i1735[33], 0, i1734, 'm_leadingCharacters')
  request.r(i1735[34], i1735[35], 0, i1734, 'm_followingCharacters')
  i1734.m_UseModernHangulLineBreakingRules = !!i1735[36]
  return i1734
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1738 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1739 = data
  i1738.hashCode = i1739[0]
  request.r(i1739[1], i1739[2], 0, i1738, 'material')
  i1738.materialHashCode = i1739[3]
  request.r(i1739[4], i1739[5], 0, i1738, 'spriteSheet')
  var i1741 = i1739[6]
  var i1740 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1741.length; i += 1) {
    i1740.add(request.d('TMPro.TMP_Sprite', i1741[i + 0]));
  }
  i1738.spriteInfoList = i1740
  var i1743 = i1739[7]
  var i1742 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1743.length; i += 2) {
  request.r(i1743[i + 0], i1743[i + 1], 1, i1742, '')
  }
  i1738.fallbackSpriteAssets = i1742
  i1738.m_Version = i1739[8]
  i1738.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1739[9], i1738.m_FaceInfo)
  var i1745 = i1739[10]
  var i1744 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.add(request.d('TMPro.TMP_SpriteCharacter', i1745[i + 0]));
  }
  i1738.m_SpriteCharacterTable = i1744
  var i1747 = i1739[11]
  var i1746 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.add(request.d('TMPro.TMP_SpriteGlyph', i1747[i + 0]));
  }
  i1738.m_SpriteGlyphTable = i1746
  return i1738
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1750 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1751 = data
  i1750.name = i1751[0]
  i1750.hashCode = i1751[1]
  i1750.unicode = i1751[2]
  i1750.pivot = new pc.Vec2( i1751[3], i1751[4] )
  request.r(i1751[5], i1751[6], 0, i1750, 'sprite')
  i1750.id = i1751[7]
  i1750.x = i1751[8]
  i1750.y = i1751[9]
  i1750.width = i1751[10]
  i1750.height = i1751[11]
  i1750.xOffset = i1751[12]
  i1750.yOffset = i1751[13]
  i1750.xAdvance = i1751[14]
  i1750.scale = i1751[15]
  return i1750
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1756 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1757 = data
  i1756.m_Name = i1757[0]
  i1756.m_HashCode = i1757[1]
  i1756.m_ElementType = i1757[2]
  i1756.m_Unicode = i1757[3]
  i1756.m_GlyphIndex = i1757[4]
  i1756.m_Scale = i1757[5]
  return i1756
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1760 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1761 = data
  request.r(i1761[0], i1761[1], 0, i1760, 'sprite')
  i1760.m_Index = i1761[2]
  i1760.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1761[3], i1760.m_Metrics)
  i1760.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1761[4], i1760.m_GlyphRect)
  i1760.m_Scale = i1761[5]
  i1760.m_AtlasIndex = i1761[6]
  i1760.m_ClassDefinitionType = i1761[7]
  return i1760
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1762 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1763 = data
  var i1765 = i1763[0]
  var i1764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.add(request.d('TMPro.TMP_Style', i1765[i + 0]));
  }
  i1762.m_StyleList = i1764
  return i1762
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1768 = root || request.c( 'TMPro.TMP_Style' )
  var i1769 = data
  i1768.m_Name = i1769[0]
  i1768.m_HashCode = i1769[1]
  i1768.m_OpeningDefinition = i1769[2]
  i1768.m_ClosingDefinition = i1769[3]
  i1768.m_OpeningTagArray = i1769[4]
  i1768.m_ClosingTagArray = i1769[5]
  i1768.m_OpeningTagUnicodeArray = i1769[6]
  i1768.m_ClosingTagUnicodeArray = i1769[7]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1771 = data
  var i1773 = i1771[0]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1773[i + 0]) );
  }
  i1770.files = i1772
  i1770.componentToPrefabIds = i1771[1]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1777 = data
  i1776.path = i1777[0]
  request.r(i1777[1], i1777[2], 0, i1776, 'unityObject')
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1779 = data
  var i1781 = i1779[0]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1781[i + 0]) );
  }
  i1778.scriptsExecutionOrder = i1780
  var i1783 = i1779[1]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1783[i + 0]) );
  }
  i1778.sortingLayers = i1782
  var i1785 = i1779[2]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1785[i + 0]) );
  }
  i1778.cullingLayers = i1784
  i1778.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1779[3], i1778.timeSettings)
  i1778.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1779[4], i1778.physicsSettings)
  i1778.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1779[5], i1778.physics2DSettings)
  i1778.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1779[6], i1778.qualitySettings)
  i1778.enableRealtimeShadows = !!i1779[7]
  i1778.enableAutoInstancing = !!i1779[8]
  i1778.enableDynamicBatching = !!i1779[9]
  i1778.lightmapEncodingQuality = i1779[10]
  i1778.desiredColorSpace = i1779[11]
  var i1787 = i1779[12]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.push( i1787[i + 0] );
  }
  i1778.allTags = i1786
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1791 = data
  i1790.name = i1791[0]
  i1790.value = i1791[1]
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1795 = data
  i1794.id = i1795[0]
  i1794.name = i1795[1]
  i1794.value = i1795[2]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1799 = data
  i1798.id = i1799[0]
  i1798.name = i1799[1]
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1801 = data
  i1800.fixedDeltaTime = i1801[0]
  i1800.maximumDeltaTime = i1801[1]
  i1800.timeScale = i1801[2]
  i1800.maximumParticleTimestep = i1801[3]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1803 = data
  i1802.gravity = new pc.Vec3( i1803[0], i1803[1], i1803[2] )
  i1802.defaultSolverIterations = i1803[3]
  i1802.bounceThreshold = i1803[4]
  i1802.autoSyncTransforms = !!i1803[5]
  i1802.autoSimulation = !!i1803[6]
  var i1805 = i1803[7]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1805[i + 0]) );
  }
  i1802.collisionMatrix = i1804
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1809 = data
  i1808.enabled = !!i1809[0]
  i1808.layerId = i1809[1]
  i1808.otherLayerId = i1809[2]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1811 = data
  request.r(i1811[0], i1811[1], 0, i1810, 'material')
  i1810.gravity = new pc.Vec2( i1811[2], i1811[3] )
  i1810.positionIterations = i1811[4]
  i1810.velocityIterations = i1811[5]
  i1810.velocityThreshold = i1811[6]
  i1810.maxLinearCorrection = i1811[7]
  i1810.maxAngularCorrection = i1811[8]
  i1810.maxTranslationSpeed = i1811[9]
  i1810.maxRotationSpeed = i1811[10]
  i1810.baumgarteScale = i1811[11]
  i1810.baumgarteTOIScale = i1811[12]
  i1810.timeToSleep = i1811[13]
  i1810.linearSleepTolerance = i1811[14]
  i1810.angularSleepTolerance = i1811[15]
  i1810.defaultContactOffset = i1811[16]
  i1810.autoSimulation = !!i1811[17]
  i1810.queriesHitTriggers = !!i1811[18]
  i1810.queriesStartInColliders = !!i1811[19]
  i1810.callbacksOnDisable = !!i1811[20]
  i1810.reuseCollisionCallbacks = !!i1811[21]
  i1810.autoSyncTransforms = !!i1811[22]
  var i1813 = i1811[23]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1813[i + 0]) );
  }
  i1810.collisionMatrix = i1812
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1817 = data
  i1816.enabled = !!i1817[0]
  i1816.layerId = i1817[1]
  i1816.otherLayerId = i1817[2]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1819 = data
  var i1821 = i1819[0]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1821[i + 0]) );
  }
  i1818.qualityLevels = i1820
  var i1823 = i1819[1]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( i1823[i + 0] );
  }
  i1818.names = i1822
  i1818.shadows = i1819[2]
  i1818.anisotropicFiltering = i1819[3]
  i1818.antiAliasing = i1819[4]
  i1818.lodBias = i1819[5]
  i1818.shadowCascades = i1819[6]
  i1818.shadowDistance = i1819[7]
  i1818.shadowmaskMode = i1819[8]
  i1818.shadowProjection = i1819[9]
  i1818.shadowResolution = i1819[10]
  i1818.softParticles = !!i1819[11]
  i1818.softVegetation = !!i1819[12]
  i1818.activeColorSpace = i1819[13]
  i1818.desiredColorSpace = i1819[14]
  i1818.masterTextureLimit = i1819[15]
  i1818.maxQueuedFrames = i1819[16]
  i1818.particleRaycastBudget = i1819[17]
  i1818.pixelLightCount = i1819[18]
  i1818.realtimeReflectionProbes = !!i1819[19]
  i1818.shadowCascade2Split = i1819[20]
  i1818.shadowCascade4Split = new pc.Vec3( i1819[21], i1819[22], i1819[23] )
  i1818.streamingMipmapsActive = !!i1819[24]
  i1818.vSyncCount = i1819[25]
  i1818.asyncUploadBufferSize = i1819[26]
  i1818.asyncUploadTimeSlice = i1819[27]
  i1818.billboardsFaceCameraPosition = !!i1819[28]
  i1818.shadowNearPlaneOffset = i1819[29]
  i1818.streamingMipmapsMemoryBudget = i1819[30]
  i1818.maximumLODLevel = i1819[31]
  i1818.streamingMipmapsAddAllCameras = !!i1819[32]
  i1818.streamingMipmapsMaxLevelReduction = i1819[33]
  i1818.streamingMipmapsRenderersPerFrame = i1819[34]
  i1818.resolutionScalingFixedDPIFactor = i1819[35]
  i1818.streamingMipmapsMaxFileIORequests = i1819[36]
  i1818.currentQualityLevel = i1819[37]
  return i1818
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1826 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1827 = data
  i1826.xPlacement = i1827[0]
  i1826.yPlacement = i1827[1]
  i1826.xAdvance = i1827[2]
  i1826.yAdvance = i1827[3]
  return i1826
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1828 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1829 = data
  i1828.m_GlyphIndex = i1829[0]
  i1828.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1829[1], i1828.m_GlyphValueRecord)
  return i1828
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1830 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1831 = data
  i1830.m_XPlacement = i1831[0]
  i1830.m_YPlacement = i1831[1]
  i1830.m_XAdvance = i1831[2]
  i1830.m_YAdvance = i1831[3]
  return i1830
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[3],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[3],"75":[76],"77":[78],"79":[78],"9":[8],"80":[81],"82":[83],"84":[81],"85":[8],"86":[8],"11":[9],"18":[19,8],"87":[8],"10":[9],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"33":[8],"34":[8],"94":[8],"16":[19,8],"95":[8],"96":[8],"97":[8],"98":[8],"99":[19,8],"100":[8],"101":[6],"102":[6],"7":[6],"103":[6],"104":[3],"105":[3],"106":[107],"108":[3],"109":[110],"111":[8],"112":[19,8],"113":[76],"26":[19,8],"114":[115,76],"116":[76],"117":[76,118],"119":[53],"120":[61],"121":[110],"122":[123],"124":[8],"125":[76,8],"17":[8,19],"126":[8],"127":[19,8],"128":[76],"129":[19,8],"130":[8],"131":[81]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","DropZone","UnityEngine.BoxCollider2D","ClickItem","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DG.Tweening.DOTweenAnimation","TMPro.TMP_FontAsset","DraggableItem","UnityEngine.CanvasGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "23.3";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "BP_V01_ManhND_AnhPD";

Deserializers.lunaAppID = "31727";

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

Deserializers.buildID = "6b8719b6-96b5-45c3-b9dc-a233d21207ec";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

