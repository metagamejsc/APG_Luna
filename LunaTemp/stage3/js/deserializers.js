var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1392 = root || request.c( 'UnityEngine.JointSpring' )
  var i1393 = data
  i1392.spring = i1393[0]
  i1392.damper = i1393[1]
  i1392.targetPosition = i1393[2]
  return i1392
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1394 = root || request.c( 'UnityEngine.JointMotor' )
  var i1395 = data
  i1394.m_TargetVelocity = i1395[0]
  i1394.m_Force = i1395[1]
  i1394.m_FreeSpin = i1395[2]
  return i1394
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1396 = root || request.c( 'UnityEngine.JointLimits' )
  var i1397 = data
  i1396.m_Min = i1397[0]
  i1396.m_Max = i1397[1]
  i1396.m_Bounciness = i1397[2]
  i1396.m_BounceMinVelocity = i1397[3]
  i1396.m_ContactDistance = i1397[4]
  i1396.minBounce = i1397[5]
  i1396.maxBounce = i1397[6]
  return i1396
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.JointDrive' )
  var i1399 = data
  i1398.m_PositionSpring = i1399[0]
  i1398.m_PositionDamper = i1399[1]
  i1398.m_MaximumForce = i1399[2]
  i1398.m_UseAcceleration = i1399[3]
  return i1398
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1400 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1401 = data
  i1400.m_Spring = i1401[0]
  i1400.m_Damper = i1401[1]
  return i1400
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1402 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1403 = data
  i1402.m_Limit = i1403[0]
  i1402.m_Bounciness = i1403[1]
  i1402.m_ContactDistance = i1403[2]
  return i1402
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1404 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1405 = data
  i1404.m_ExtremumSlip = i1405[0]
  i1404.m_ExtremumValue = i1405[1]
  i1404.m_AsymptoteSlip = i1405[2]
  i1404.m_AsymptoteValue = i1405[3]
  i1404.m_Stiffness = i1405[4]
  return i1404
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1406 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1407 = data
  i1406.m_LowerAngle = i1407[0]
  i1406.m_UpperAngle = i1407[1]
  return i1406
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1408 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1409 = data
  i1408.m_MotorSpeed = i1409[0]
  i1408.m_MaximumMotorTorque = i1409[1]
  return i1408
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1410 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1411 = data
  i1410.m_DampingRatio = i1411[0]
  i1410.m_Frequency = i1411[1]
  i1410.m_Angle = i1411[2]
  return i1410
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1412 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1413 = data
  i1412.m_LowerTranslation = i1413[0]
  i1412.m_UpperTranslation = i1413[1]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1415 = data
  i1414.name = i1415[0]
  i1414.width = i1415[1]
  i1414.height = i1415[2]
  i1414.mipmapCount = i1415[3]
  i1414.anisoLevel = i1415[4]
  i1414.filterMode = i1415[5]
  i1414.hdr = !!i1415[6]
  i1414.format = i1415[7]
  i1414.wrapMode = i1415[8]
  i1414.alphaIsTransparency = !!i1415[9]
  i1414.alphaSource = i1415[10]
  i1414.graphicsFormat = i1415[11]
  i1414.sRGBTexture = !!i1415[12]
  i1414.desiredColorSpace = i1415[13]
  i1414.wrapU = i1415[14]
  i1414.wrapV = i1415[15]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1416 = root || new pc.UnityMaterial()
  var i1417 = data
  i1416.name = i1417[0]
  request.r(i1417[1], i1417[2], 0, i1416, 'shader')
  i1416.renderQueue = i1417[3]
  i1416.enableInstancing = !!i1417[4]
  var i1419 = i1417[5]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1419[i + 0]) );
  }
  i1416.floatParameters = i1418
  var i1421 = i1417[6]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1421[i + 0]) );
  }
  i1416.colorParameters = i1420
  var i1423 = i1417[7]
  var i1422 = []
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1423[i + 0]) );
  }
  i1416.vectorParameters = i1422
  var i1425 = i1417[8]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1425[i + 0]) );
  }
  i1416.textureParameters = i1424
  var i1427 = i1417[9]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1427[i + 0]) );
  }
  i1416.materialFlags = i1426
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1431 = data
  i1430.name = i1431[0]
  i1430.value = i1431[1]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1435 = data
  i1434.name = i1435[0]
  i1434.value = new pc.Color(i1435[1], i1435[2], i1435[3], i1435[4])
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1439 = data
  i1438.name = i1439[0]
  i1438.value = new pc.Vec4( i1439[1], i1439[2], i1439[3], i1439[4] )
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1443 = data
  i1442.name = i1443[0]
  request.r(i1443[1], i1443[2], 0, i1442, 'value')
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1447 = data
  i1446.name = i1447[0]
  i1446.enabled = !!i1447[1]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1449 = data
  i1448.name = i1449[0]
  i1448.index = i1449[1]
  i1448.startup = !!i1449[2]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1451 = data
  i1450.position = new pc.Vec3( i1451[0], i1451[1], i1451[2] )
  i1450.scale = new pc.Vec3( i1451[3], i1451[4], i1451[5] )
  i1450.rotation = new pc.Quat(i1451[6], i1451[7], i1451[8], i1451[9])
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1453 = data
  i1452.aspect = i1453[0]
  i1452.orthographic = !!i1453[1]
  i1452.orthographicSize = i1453[2]
  i1452.backgroundColor = new pc.Color(i1453[3], i1453[4], i1453[5], i1453[6])
  i1452.nearClipPlane = i1453[7]
  i1452.farClipPlane = i1453[8]
  i1452.fieldOfView = i1453[9]
  i1452.depth = i1453[10]
  i1452.clearFlags = i1453[11]
  i1452.cullingMask = i1453[12]
  i1452.rect = i1453[13]
  request.r(i1453[14], i1453[15], 0, i1452, 'targetTexture')
  i1452.usePhysicalProperties = !!i1453[16]
  i1452.focalLength = i1453[17]
  i1452.sensorSize = new pc.Vec2( i1453[18], i1453[19] )
  i1452.lensShift = new pc.Vec2( i1453[20], i1453[21] )
  i1452.gateFit = i1453[22]
  i1452.commandBufferCount = i1453[23]
  i1452.cameraType = i1453[24]
  i1452.enabled = !!i1453[25]
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1455 = data
  i1454.name = i1455[0]
  i1454.tagId = i1455[1]
  i1454.enabled = !!i1455[2]
  i1454.isStatic = !!i1455[3]
  i1454.layer = i1455[4]
  return i1454
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1456 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1457 = data
  request.r(i1457[0], i1457[1], 0, i1456, 'm_FirstSelected')
  i1456.m_sendNavigationEvents = !!i1457[2]
  i1456.m_DragThreshold = i1457[3]
  return i1456
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1458 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1459 = data
  i1458.m_HorizontalAxis = i1459[0]
  i1458.m_VerticalAxis = i1459[1]
  i1458.m_SubmitButton = i1459[2]
  i1458.m_CancelButton = i1459[3]
  i1458.m_InputActionsPerSecond = i1459[4]
  i1458.m_RepeatDelay = i1459[5]
  i1458.m_ForceModuleActive = !!i1459[6]
  i1458.m_SendPointerHoverToParent = !!i1459[7]
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1461 = data
  i1460.pivot = new pc.Vec2( i1461[0], i1461[1] )
  i1460.anchorMin = new pc.Vec2( i1461[2], i1461[3] )
  i1460.anchorMax = new pc.Vec2( i1461[4], i1461[5] )
  i1460.sizeDelta = new pc.Vec2( i1461[6], i1461[7] )
  i1460.anchoredPosition3D = new pc.Vec3( i1461[8], i1461[9], i1461[10] )
  i1460.rotation = new pc.Quat(i1461[11], i1461[12], i1461[13], i1461[14])
  i1460.scale = new pc.Vec3( i1461[15], i1461[16], i1461[17] )
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1463 = data
  i1462.planeDistance = i1463[0]
  i1462.referencePixelsPerUnit = i1463[1]
  i1462.isFallbackOverlay = !!i1463[2]
  i1462.renderMode = i1463[3]
  i1462.renderOrder = i1463[4]
  i1462.sortingLayerName = i1463[5]
  i1462.sortingOrder = i1463[6]
  i1462.scaleFactor = i1463[7]
  request.r(i1463[8], i1463[9], 0, i1462, 'worldCamera')
  i1462.overrideSorting = !!i1463[10]
  i1462.pixelPerfect = !!i1463[11]
  i1462.targetDisplay = i1463[12]
  i1462.overridePixelPerfect = !!i1463[13]
  i1462.enabled = !!i1463[14]
  return i1462
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1464 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1465 = data
  i1464.m_UiScaleMode = i1465[0]
  i1464.m_ReferencePixelsPerUnit = i1465[1]
  i1464.m_ScaleFactor = i1465[2]
  i1464.m_ReferenceResolution = new pc.Vec2( i1465[3], i1465[4] )
  i1464.m_ScreenMatchMode = i1465[5]
  i1464.m_MatchWidthOrHeight = i1465[6]
  i1464.m_PhysicalUnit = i1465[7]
  i1464.m_FallbackScreenDPI = i1465[8]
  i1464.m_DefaultSpriteDPI = i1465[9]
  i1464.m_DynamicPixelsPerUnit = i1465[10]
  i1464.m_PresetInfoIsWorld = !!i1465[11]
  return i1464
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1466 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1467 = data
  i1466.m_IgnoreReversedGraphics = !!i1467[0]
  i1466.m_BlockingObjects = i1467[1]
  i1466.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1467[2] )
  return i1466
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1468 = root || request.c( 'LunaManager' )
  var i1469 = data
  var i1471 = i1469[0]
  var i1470 = []
  for(var i = 0; i < i1471.length; i += 2) {
  request.r(i1471[i + 0], i1471[i + 1], 2, i1470, '')
  }
  i1468.lstBtnInstall = i1470
  request.r(i1469[1], i1469[2], 0, i1468, 'WinGO')
  request.r(i1469[3], i1469[4], 0, i1468, 'LoseGO')
  request.r(i1469[5], i1469[6], 0, i1468, 'StartCard')
  request.r(i1469[7], i1469[8], 0, i1468, 'EndCard')
  request.r(i1469[9], i1469[10], 0, i1468, 'Parent')
  i1468.isDrag = !!i1469[11]
  i1468.timeDrag = i1469[12]
  i1468.countPlay = i1469[13]
  i1468.countPlayFinal = i1469[14]
  i1468.countPlayMax = i1469[15]
  i1468.timeDropFinal = i1469[16]
  i1468.colorBG = new pc.Color(i1469[17], i1469[18], i1469[19], i1469[20])
  request.r(i1469[21], i1469[22], 0, i1468, 'texture2D')
  request.r(i1469[23], i1469[24], 0, i1468, 'rawImageBG')
  request.r(i1469[25], i1469[26], 0, i1468, 'textProgess')
  request.r(i1469[27], i1469[28], 0, i1468, 'imgProgess')
  request.r(i1469[29], i1469[30], 0, i1468, 'timeText')
  return i1468
}

Deserializers["LeftOrRight"] = function (request, data, root) {
  var i1474 = root || request.c( 'LeftOrRight' )
  var i1475 = data
  request.r(i1475[0], i1475[1], 0, i1474, 'mixSkeletonSkin')
  request.r(i1475[2], i1475[3], 0, i1474, 'player')
  request.r(i1475[4], i1475[5], 0, i1474, 'leftButton')
  request.r(i1475[6], i1475[7], 0, i1474, 'rightButton')
  i1474.leftPosition = new pc.Vec3( i1475[8], i1475[9], i1475[10] )
  i1474.rightPosition = new pc.Vec3( i1475[11], i1475[12], i1475[13] )
  i1474.useTween = !!i1475[14]
  i1474.moveDuration = i1475[15]
  i1474.moveEase = i1475[16]
  var i1477 = i1475[17]
  var i1476 = new (System.Collections.Generic.List$1(Bridge.ns('LeftOrRight+StepData')))
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.add(request.d('LeftOrRight+StepData', i1477[i + 0]));
  }
  i1474.steps = i1476
  i1474.playStepsOnEnable = !!i1475[18]
  i1474.hideInactiveSteps = !!i1475[19]
  i1474.stepTopLocalPosition = new pc.Vec3( i1475[20], i1475[21], i1475[22] )
  i1474.stepBottomLocalPosition = new pc.Vec3( i1475[23], i1475[24], i1475[25] )
  i1474.stepMoveDuration = i1475[26]
  i1474.stepMoveEase = i1475[27]
  i1474.stepStartScale = new pc.Vec3( i1475[28], i1475[29], i1475[30] )
  i1474.stepEndScale = new pc.Vec3( i1475[31], i1475[32], i1475[33] )
  i1474.onStepReachedBottom = request.d('UnityEngine.Events.UnityEvent`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i1475[34], i1474.onStepReachedBottom)
  i1474.isLeft = !!i1475[35]
  i1474.selectedSide = i1475[36]
  i1474.currentStepIndex = i1475[37]
  return i1474
}

Deserializers["LeftOrRight+StepData"] = function (request, data, root) {
  var i1480 = root || request.c( 'LeftOrRight+StepData' )
  var i1481 = data
  request.r(i1481[0], i1481[1], 0, i1480, 'stepTransform')
  request.r(i1481[2], i1481[3], 0, i1480, 'choice1Object')
  request.r(i1481[4], i1481[5], 0, i1480, 'choice2Object')
  return i1480
}

Deserializers["UnityEngine.Events.UnityEvent`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i1482 = root || new (UnityEngine.Events.UnityEvent$1( Bridge.ns( 'System.Int32' ) ))
  var i1483 = data
  i1482.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1483[0], i1482.m_PersistentCalls)
  return i1482
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1484 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1485 = data
  var i1487 = i1485[0]
  var i1486 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.add(request.d('UnityEngine.Events.PersistentCall', i1487[i + 0]));
  }
  i1484.m_Calls = i1486
  return i1484
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1491 = data
  request.r(i1491[0], i1491[1], 0, i1490, 'm_Target')
  i1490.m_TargetAssemblyTypeName = i1491[2]
  i1490.m_MethodName = i1491[3]
  i1490.m_Mode = i1491[4]
  i1490.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1491[5], i1490.m_Arguments)
  i1490.m_CallState = i1491[6]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1493 = data
  i1492.cullTransparentMesh = !!i1493[0]
  return i1492
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1495 = data
  request.r(i1495[0], i1495[1], 0, i1494, 'm_Texture')
  i1494.m_UVRect = UnityEngine.Rect.MinMaxRect(i1495[2], i1495[3], i1495[4], i1495[5])
  i1494.m_Maskable = !!i1495[6]
  request.r(i1495[7], i1495[8], 0, i1494, 'm_Material')
  i1494.m_Color = new pc.Color(i1495[9], i1495[10], i1495[11], i1495[12])
  i1494.m_RaycastTarget = !!i1495[13]
  i1494.m_RaycastPadding = new pc.Vec4( i1495[14], i1495[15], i1495[16], i1495[17] )
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1497 = data
  request.r(i1497[0], i1497[1], 0, i1496, 'clip')
  request.r(i1497[2], i1497[3], 0, i1496, 'outputAudioMixerGroup')
  i1496.playOnAwake = !!i1497[4]
  i1496.loop = !!i1497[5]
  i1496.time = i1497[6]
  i1496.volume = i1497[7]
  i1496.pitch = i1497[8]
  i1496.enabled = !!i1497[9]
  return i1496
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.UI.Image' )
  var i1499 = data
  request.r(i1499[0], i1499[1], 0, i1498, 'm_Sprite')
  i1498.m_Type = i1499[2]
  i1498.m_PreserveAspect = !!i1499[3]
  i1498.m_FillCenter = !!i1499[4]
  i1498.m_FillMethod = i1499[5]
  i1498.m_FillAmount = i1499[6]
  i1498.m_FillClockwise = !!i1499[7]
  i1498.m_FillOrigin = i1499[8]
  i1498.m_UseSpriteMesh = !!i1499[9]
  i1498.m_PixelsPerUnitMultiplier = i1499[10]
  i1498.m_Maskable = !!i1499[11]
  request.r(i1499[12], i1499[13], 0, i1498, 'm_Material')
  i1498.m_Color = new pc.Color(i1499[14], i1499[15], i1499[16], i1499[17])
  i1498.m_RaycastTarget = !!i1499[18]
  i1498.m_RaycastPadding = new pc.Vec4( i1499[19], i1499[20], i1499[21], i1499[22] )
  return i1498
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1500 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1501 = data
  i1500.m_ShowMaskGraphic = !!i1501[0]
  return i1500
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1502 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1503 = data
  request.r(i1503[0], i1503[1], 0, i1502, 'skeletonDataAsset')
  request.r(i1503[2], i1503[3], 0, i1502, 'additiveMaterial')
  request.r(i1503[4], i1503[5], 0, i1502, 'multiplyMaterial')
  request.r(i1503[6], i1503[7], 0, i1502, 'screenMaterial')
  i1502.initialSkinName = i1503[8]
  i1502.initialFlipX = !!i1503[9]
  i1502.initialFlipY = !!i1503[10]
  i1502.startingAnimation = i1503[11]
  i1502.startingLoop = !!i1503[12]
  i1502.timeScale = i1503[13]
  i1502.freeze = !!i1503[14]
  i1502.layoutScaleMode = i1503[15]
  i1502.updateWhenInvisible = i1503[16]
  i1502.allowMultipleCanvasRenderers = !!i1503[17]
  var i1505 = i1503[18]
  var i1504 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1505.length; i += 2) {
  request.r(i1505[i + 0], i1505[i + 1], 1, i1504, '')
  }
  i1502.canvasRenderers = i1504
  i1502.enableSeparatorSlots = !!i1503[19]
  i1502.updateSeparatorPartLocation = !!i1503[20]
  i1502.updateSeparatorPartScale = !!i1503[21]
  i1502.disableMeshAssignmentOnOverride = !!i1503[22]
  i1502.referenceSize = new pc.Vec2( i1503[23], i1503[24] )
  i1502.referenceScale = i1503[25]
  i1502.rectTransformSize = new pc.Vec2( i1503[26], i1503[27] )
  i1502.editReferenceRect = !!i1503[28]
  var i1507 = i1503[29]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.push( i1507[i + 0] );
  }
  i1502.separatorSlotNames = i1506
  var i1509 = i1503[30]
  var i1508 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1509.length; i += 2) {
  request.r(i1509[i + 0], i1509[i + 1], 1, i1508, '')
  }
  i1502.separatorParts = i1508
  i1502.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1503[31], i1502.meshGenerator)
  i1502.updateTiming = i1503[32]
  i1502.unscaledTime = !!i1503[33]
  i1502.m_Maskable = !!i1503[34]
  request.r(i1503[35], i1503[36], 0, i1502, 'm_Material')
  i1502.m_Color = new pc.Color(i1503[37], i1503[38], i1503[39], i1503[40])
  i1502.m_RaycastTarget = !!i1503[41]
  i1502.m_RaycastPadding = new pc.Vec4( i1503[42], i1503[43], i1503[44], i1503[45] )
  return i1502
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1516 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1517 = data
  i1516.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1517[0], i1516.settings)
  return i1516
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1518 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1519 = data
  i1518.useClipping = !!i1519[0]
  i1518.zSpacing = i1519[1]
  i1518.pmaVertexColors = !!i1519[2]
  i1518.tintBlack = !!i1519[3]
  i1518.canvasGroupTintBlack = !!i1519[4]
  i1518.calculateTangents = !!i1519[5]
  i1518.addNormals = !!i1519[6]
  i1518.immutableTriangles = !!i1519[7]
  return i1518
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i1520 = root || request.c( 'MixSkeletonSkin' )
  var i1521 = data
  request.r(i1521[0], i1521[1], 0, i1520, 'skeletonAnimation')
  var i1523 = i1521[2]
  var i1522 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.add(i1523[i + 0]);
  }
  i1520.skinNames = i1522
  i1520.defaultAnim = i1521[3]
  i1520.isAwake = !!i1521[4]
  return i1520
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1526 = root || request.c( 'UnityEngine.UI.Button' )
  var i1527 = data
  i1526.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1527[0], i1526.m_OnClick)
  i1526.m_Navigation = request.d('UnityEngine.UI.Navigation', i1527[1], i1526.m_Navigation)
  i1526.m_Transition = i1527[2]
  i1526.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1527[3], i1526.m_Colors)
  i1526.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1527[4], i1526.m_SpriteState)
  i1526.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1527[5], i1526.m_AnimationTriggers)
  i1526.m_Interactable = !!i1527[6]
  request.r(i1527[7], i1527[8], 0, i1526, 'm_TargetGraphic')
  return i1526
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1528 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1529 = data
  i1528.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1529[0], i1528.m_PersistentCalls)
  return i1528
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1530 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1531 = data
  i1530.m_Mode = i1531[0]
  i1530.m_WrapAround = !!i1531[1]
  request.r(i1531[2], i1531[3], 0, i1530, 'm_SelectOnUp')
  request.r(i1531[4], i1531[5], 0, i1530, 'm_SelectOnDown')
  request.r(i1531[6], i1531[7], 0, i1530, 'm_SelectOnLeft')
  request.r(i1531[8], i1531[9], 0, i1530, 'm_SelectOnRight')
  return i1530
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1532 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1533 = data
  i1532.m_NormalColor = new pc.Color(i1533[0], i1533[1], i1533[2], i1533[3])
  i1532.m_HighlightedColor = new pc.Color(i1533[4], i1533[5], i1533[6], i1533[7])
  i1532.m_PressedColor = new pc.Color(i1533[8], i1533[9], i1533[10], i1533[11])
  i1532.m_SelectedColor = new pc.Color(i1533[12], i1533[13], i1533[14], i1533[15])
  i1532.m_DisabledColor = new pc.Color(i1533[16], i1533[17], i1533[18], i1533[19])
  i1532.m_ColorMultiplier = i1533[20]
  i1532.m_FadeDuration = i1533[21]
  return i1532
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1534 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1535 = data
  request.r(i1535[0], i1535[1], 0, i1534, 'm_HighlightedSprite')
  request.r(i1535[2], i1535[3], 0, i1534, 'm_PressedSprite')
  request.r(i1535[4], i1535[5], 0, i1534, 'm_SelectedSprite')
  request.r(i1535[6], i1535[7], 0, i1534, 'm_DisabledSprite')
  return i1534
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1536 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1537 = data
  i1536.m_NormalTrigger = i1537[0]
  i1536.m_HighlightedTrigger = i1537[1]
  i1536.m_PressedTrigger = i1537[2]
  i1536.m_SelectedTrigger = i1537[3]
  i1536.m_DisabledTrigger = i1537[4]
  return i1536
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1538 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1539 = data
  i1538.m_hasFontAssetChanged = !!i1539[0]
  request.r(i1539[1], i1539[2], 0, i1538, 'm_baseMaterial')
  i1538.m_maskOffset = new pc.Vec4( i1539[3], i1539[4], i1539[5], i1539[6] )
  i1538.m_text = i1539[7]
  i1538.m_isRightToLeft = !!i1539[8]
  request.r(i1539[9], i1539[10], 0, i1538, 'm_fontAsset')
  request.r(i1539[11], i1539[12], 0, i1538, 'm_sharedMaterial')
  var i1541 = i1539[13]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 2) {
  request.r(i1541[i + 0], i1541[i + 1], 2, i1540, '')
  }
  i1538.m_fontSharedMaterials = i1540
  request.r(i1539[14], i1539[15], 0, i1538, 'm_fontMaterial')
  var i1543 = i1539[16]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 2) {
  request.r(i1543[i + 0], i1543[i + 1], 2, i1542, '')
  }
  i1538.m_fontMaterials = i1542
  i1538.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1539[17], i1539[18], i1539[19], i1539[20])
  i1538.m_fontColor = new pc.Color(i1539[21], i1539[22], i1539[23], i1539[24])
  i1538.m_enableVertexGradient = !!i1539[25]
  i1538.m_colorMode = i1539[26]
  i1538.m_fontColorGradient = request.d('TMPro.VertexGradient', i1539[27], i1538.m_fontColorGradient)
  request.r(i1539[28], i1539[29], 0, i1538, 'm_fontColorGradientPreset')
  request.r(i1539[30], i1539[31], 0, i1538, 'm_spriteAsset')
  i1538.m_tintAllSprites = !!i1539[32]
  request.r(i1539[33], i1539[34], 0, i1538, 'm_StyleSheet')
  i1538.m_TextStyleHashCode = i1539[35]
  i1538.m_overrideHtmlColors = !!i1539[36]
  i1538.m_faceColor = UnityEngine.Color32.ConstructColor(i1539[37], i1539[38], i1539[39], i1539[40])
  i1538.m_fontSize = i1539[41]
  i1538.m_fontSizeBase = i1539[42]
  i1538.m_fontWeight = i1539[43]
  i1538.m_enableAutoSizing = !!i1539[44]
  i1538.m_fontSizeMin = i1539[45]
  i1538.m_fontSizeMax = i1539[46]
  i1538.m_fontStyle = i1539[47]
  i1538.m_HorizontalAlignment = i1539[48]
  i1538.m_VerticalAlignment = i1539[49]
  i1538.m_textAlignment = i1539[50]
  i1538.m_characterSpacing = i1539[51]
  i1538.m_wordSpacing = i1539[52]
  i1538.m_lineSpacing = i1539[53]
  i1538.m_lineSpacingMax = i1539[54]
  i1538.m_paragraphSpacing = i1539[55]
  i1538.m_charWidthMaxAdj = i1539[56]
  i1538.m_enableWordWrapping = !!i1539[57]
  i1538.m_wordWrappingRatios = i1539[58]
  i1538.m_overflowMode = i1539[59]
  request.r(i1539[60], i1539[61], 0, i1538, 'm_linkedTextComponent')
  request.r(i1539[62], i1539[63], 0, i1538, 'parentLinkedComponent')
  i1538.m_enableKerning = !!i1539[64]
  i1538.m_enableExtraPadding = !!i1539[65]
  i1538.checkPaddingRequired = !!i1539[66]
  i1538.m_isRichText = !!i1539[67]
  i1538.m_parseCtrlCharacters = !!i1539[68]
  i1538.m_isOrthographic = !!i1539[69]
  i1538.m_isCullingEnabled = !!i1539[70]
  i1538.m_horizontalMapping = i1539[71]
  i1538.m_verticalMapping = i1539[72]
  i1538.m_uvLineOffset = i1539[73]
  i1538.m_geometrySortingOrder = i1539[74]
  i1538.m_IsTextObjectScaleStatic = !!i1539[75]
  i1538.m_VertexBufferAutoSizeReduction = !!i1539[76]
  i1538.m_useMaxVisibleDescender = !!i1539[77]
  i1538.m_pageToDisplay = i1539[78]
  i1538.m_margin = new pc.Vec4( i1539[79], i1539[80], i1539[81], i1539[82] )
  i1538.m_isUsingLegacyAnimationComponent = !!i1539[83]
  i1538.m_isVolumetricText = !!i1539[84]
  i1538.m_Maskable = !!i1539[85]
  request.r(i1539[86], i1539[87], 0, i1538, 'm_Material')
  i1538.m_Color = new pc.Color(i1539[88], i1539[89], i1539[90], i1539[91])
  i1538.m_RaycastTarget = !!i1539[92]
  i1538.m_RaycastPadding = new pc.Vec4( i1539[93], i1539[94], i1539[95], i1539[96] )
  return i1538
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1546 = root || request.c( 'TMPro.VertexGradient' )
  var i1547 = data
  i1546.topLeft = new pc.Color(i1547[0], i1547[1], i1547[2], i1547[3])
  i1546.topRight = new pc.Color(i1547[4], i1547[5], i1547[6], i1547[7])
  i1546.bottomLeft = new pc.Color(i1547[8], i1547[9], i1547[10], i1547[11])
  i1546.bottomRight = new pc.Color(i1547[12], i1547[13], i1547[14], i1547[15])
  return i1546
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1548 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1549 = data
  request.r(i1549[0], i1549[1], 0, i1548, 'm_ObjectArgument')
  i1548.m_ObjectArgumentAssemblyTypeName = i1549[2]
  i1548.m_IntArgument = i1549[3]
  i1548.m_FloatArgument = i1549[4]
  i1548.m_StringArgument = i1549[5]
  i1548.m_BoolArgument = !!i1549[6]
  return i1548
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1550 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1551 = data
  i1550.targetIsSelf = !!i1551[0]
  request.r(i1551[1], i1551[2], 0, i1550, 'targetGO')
  i1550.tweenTargetIsTargetGO = !!i1551[3]
  i1550.delay = i1551[4]
  i1550.duration = i1551[5]
  i1550.easeType = i1551[6]
  i1550.easeCurve = new pc.AnimationCurve( { keys_flow: i1551[7] } )
  i1550.loopType = i1551[8]
  i1550.loops = i1551[9]
  i1550.id = i1551[10]
  i1550.isRelative = !!i1551[11]
  i1550.isFrom = !!i1551[12]
  i1550.isIndependentUpdate = !!i1551[13]
  i1550.autoKill = !!i1551[14]
  i1550.autoGenerate = !!i1551[15]
  i1550.isActive = !!i1551[16]
  i1550.isValid = !!i1551[17]
  request.r(i1551[18], i1551[19], 0, i1550, 'target')
  i1550.animationType = i1551[20]
  i1550.targetType = i1551[21]
  i1550.forcedTargetType = i1551[22]
  i1550.autoPlay = !!i1551[23]
  i1550.useTargetAsV3 = !!i1551[24]
  i1550.endValueFloat = i1551[25]
  i1550.endValueV3 = new pc.Vec3( i1551[26], i1551[27], i1551[28] )
  i1550.endValueV2 = new pc.Vec2( i1551[29], i1551[30] )
  i1550.endValueColor = new pc.Color(i1551[31], i1551[32], i1551[33], i1551[34])
  i1550.endValueString = i1551[35]
  i1550.endValueRect = UnityEngine.Rect.MinMaxRect(i1551[36], i1551[37], i1551[38], i1551[39])
  request.r(i1551[40], i1551[41], 0, i1550, 'endValueTransform')
  i1550.optionalBool0 = !!i1551[42]
  i1550.optionalBool1 = !!i1551[43]
  i1550.optionalFloat0 = i1551[44]
  i1550.optionalInt0 = i1551[45]
  i1550.optionalRotationMode = i1551[46]
  i1550.optionalScrambleMode = i1551[47]
  i1550.optionalShakeRandomnessMode = i1551[48]
  i1550.optionalString = i1551[49]
  i1550.updateType = i1551[50]
  i1550.isSpeedBased = !!i1551[51]
  i1550.hasOnStart = !!i1551[52]
  i1550.hasOnPlay = !!i1551[53]
  i1550.hasOnUpdate = !!i1551[54]
  i1550.hasOnStepComplete = !!i1551[55]
  i1550.hasOnComplete = !!i1551[56]
  i1550.hasOnTweenCreated = !!i1551[57]
  i1550.hasOnRewind = !!i1551[58]
  i1550.onStart = request.d('UnityEngine.Events.UnityEvent', i1551[59], i1550.onStart)
  i1550.onPlay = request.d('UnityEngine.Events.UnityEvent', i1551[60], i1550.onPlay)
  i1550.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1551[61], i1550.onUpdate)
  i1550.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1551[62], i1550.onStepComplete)
  i1550.onComplete = request.d('UnityEngine.Events.UnityEvent', i1551[63], i1550.onComplete)
  i1550.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1551[64], i1550.onTweenCreated)
  i1550.onRewind = request.d('UnityEngine.Events.UnityEvent', i1551[65], i1550.onRewind)
  return i1550
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1552 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1553 = data
  i1552.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1553[0], i1552.m_PersistentCalls)
  return i1552
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1554 = root || request.c( 'AudioController' )
  var i1555 = data
  request.r(i1555[0], i1555[1], 0, i1554, 'bgmSource')
  request.r(i1555[2], i1555[3], 0, i1554, 'sfxSource')
  var i1557 = i1555[4]
  var i1556 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.add(request.d('AudioEntry', i1557[i + 0]));
  }
  i1554.audioEntries = i1556
  return i1554
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i1560 = root || request.c( 'AudioEntry' )
  var i1561 = data
  i1560.key = i1561[0]
  request.r(i1561[1], i1561[2], 0, i1560, 'clip')
  i1560.volume = i1561[3]
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1563 = data
  i1562.ambientIntensity = i1563[0]
  i1562.reflectionIntensity = i1563[1]
  i1562.ambientMode = i1563[2]
  i1562.ambientLight = new pc.Color(i1563[3], i1563[4], i1563[5], i1563[6])
  i1562.ambientSkyColor = new pc.Color(i1563[7], i1563[8], i1563[9], i1563[10])
  i1562.ambientGroundColor = new pc.Color(i1563[11], i1563[12], i1563[13], i1563[14])
  i1562.ambientEquatorColor = new pc.Color(i1563[15], i1563[16], i1563[17], i1563[18])
  i1562.fogColor = new pc.Color(i1563[19], i1563[20], i1563[21], i1563[22])
  i1562.fogEndDistance = i1563[23]
  i1562.fogStartDistance = i1563[24]
  i1562.fogDensity = i1563[25]
  i1562.fog = !!i1563[26]
  request.r(i1563[27], i1563[28], 0, i1562, 'skybox')
  i1562.fogMode = i1563[29]
  var i1565 = i1563[30]
  var i1564 = []
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1565[i + 0]) );
  }
  i1562.lightmaps = i1564
  i1562.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1563[31], i1562.lightProbes)
  i1562.lightmapsMode = i1563[32]
  i1562.mixedBakeMode = i1563[33]
  i1562.environmentLightingMode = i1563[34]
  i1562.ambientProbe = new pc.SphericalHarmonicsL2(i1563[35])
  i1562.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1563[36])
  i1562.useReferenceAmbientProbe = !!i1563[37]
  request.r(i1563[38], i1563[39], 0, i1562, 'customReflection')
  request.r(i1563[40], i1563[41], 0, i1562, 'defaultReflection')
  i1562.defaultReflectionMode = i1563[42]
  i1562.defaultReflectionResolution = i1563[43]
  i1562.sunLightObjectId = i1563[44]
  i1562.pixelLightCount = i1563[45]
  i1562.defaultReflectionHDR = !!i1563[46]
  i1562.hasLightDataAsset = !!i1563[47]
  i1562.hasManualGenerate = !!i1563[48]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1569 = data
  request.r(i1569[0], i1569[1], 0, i1568, 'lightmapColor')
  request.r(i1569[2], i1569[3], 0, i1568, 'lightmapDirection')
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1570 = root || new UnityEngine.LightProbes()
  var i1571 = data
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1579 = data
  var i1581 = i1579[0]
  var i1580 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1581[i + 0]));
  }
  i1578.ShaderCompilationErrors = i1580
  i1578.name = i1579[1]
  i1578.guid = i1579[2]
  var i1583 = i1579[3]
  var i1582 = []
  for(var i = 0; i < i1583.length; i += 1) {
    i1582.push( i1583[i + 0] );
  }
  i1578.shaderDefinedKeywords = i1582
  var i1585 = i1579[4]
  var i1584 = []
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1585[i + 0]) );
  }
  i1578.passes = i1584
  var i1587 = i1579[5]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1587[i + 0]) );
  }
  i1578.usePasses = i1586
  var i1589 = i1579[6]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1589[i + 0]) );
  }
  i1578.defaultParameterValues = i1588
  request.r(i1579[7], i1579[8], 0, i1578, 'unityFallbackShader')
  i1578.readDepth = !!i1579[9]
  i1578.isCreatedByShaderGraph = !!i1579[10]
  i1578.disableBatching = !!i1579[11]
  i1578.compiled = !!i1579[12]
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1593 = data
  i1592.shaderName = i1593[0]
  i1592.errorMessage = i1593[1]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1596 = root || new pc.UnityShaderPass()
  var i1597 = data
  i1596.id = i1597[0]
  i1596.subShaderIndex = i1597[1]
  i1596.name = i1597[2]
  i1596.passType = i1597[3]
  i1596.grabPassTextureName = i1597[4]
  i1596.usePass = !!i1597[5]
  i1596.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1597[6], i1596.zTest)
  i1596.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1597[7], i1596.zWrite)
  i1596.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1597[8], i1596.culling)
  i1596.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1597[9], i1596.blending)
  i1596.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1597[10], i1596.alphaBlending)
  i1596.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1597[11], i1596.colorWriteMask)
  i1596.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1597[12], i1596.offsetUnits)
  i1596.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1597[13], i1596.offsetFactor)
  i1596.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1597[14], i1596.stencilRef)
  i1596.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1597[15], i1596.stencilReadMask)
  i1596.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1597[16], i1596.stencilWriteMask)
  i1596.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1597[17], i1596.stencilOp)
  i1596.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1597[18], i1596.stencilOpFront)
  i1596.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1597[19], i1596.stencilOpBack)
  var i1599 = i1597[20]
  var i1598 = []
  for(var i = 0; i < i1599.length; i += 1) {
    i1598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1599[i + 0]) );
  }
  i1596.tags = i1598
  var i1601 = i1597[21]
  var i1600 = []
  for(var i = 0; i < i1601.length; i += 1) {
    i1600.push( i1601[i + 0] );
  }
  i1596.passDefinedKeywords = i1600
  var i1603 = i1597[22]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 1) {
    i1602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1603[i + 0]) );
  }
  i1596.passDefinedKeywordGroups = i1602
  var i1605 = i1597[23]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1605[i + 0]) );
  }
  i1596.variants = i1604
  var i1607 = i1597[24]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1607[i + 0]) );
  }
  i1596.excludedVariants = i1606
  i1596.hasDepthReader = !!i1597[25]
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1609 = data
  i1608.val = i1609[0]
  i1608.name = i1609[1]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1611 = data
  i1610.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1611[0], i1610.src)
  i1610.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1611[1], i1610.dst)
  i1610.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1611[2], i1610.op)
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1613 = data
  i1612.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1613[0], i1612.pass)
  i1612.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1613[1], i1612.fail)
  i1612.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1613[2], i1612.zFail)
  i1612.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1613[3], i1612.comp)
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1617 = data
  i1616.name = i1617[0]
  i1616.value = i1617[1]
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1621 = data
  var i1623 = i1621[0]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.push( i1623[i + 0] );
  }
  i1620.keywords = i1622
  i1620.hasDiscard = !!i1621[1]
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1627 = data
  i1626.passId = i1627[0]
  i1626.subShaderIndex = i1627[1]
  var i1629 = i1627[2]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( i1629[i + 0] );
  }
  i1626.keywords = i1628
  i1626.vertexProgram = i1627[3]
  i1626.fragmentProgram = i1627[4]
  i1626.exportedForWebGl2 = !!i1627[5]
  i1626.readDepth = !!i1627[6]
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1633 = data
  request.r(i1633[0], i1633[1], 0, i1632, 'shader')
  i1632.pass = i1633[2]
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1637 = data
  i1636.name = i1637[0]
  i1636.type = i1637[1]
  i1636.value = new pc.Vec4( i1637[2], i1637[3], i1637[4], i1637[5] )
  i1636.textureValue = i1637[6]
  i1636.shaderPropertyFlag = i1637[7]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1639 = data
  i1638.name = i1639[0]
  request.r(i1639[1], i1639[2], 0, i1638, 'texture')
  i1638.aabb = i1639[3]
  i1638.vertices = i1639[4]
  i1638.triangles = i1639[5]
  i1638.textureRect = UnityEngine.Rect.MinMaxRect(i1639[6], i1639[7], i1639[8], i1639[9])
  i1638.packedRect = UnityEngine.Rect.MinMaxRect(i1639[10], i1639[11], i1639[12], i1639[13])
  i1638.border = new pc.Vec4( i1639[14], i1639[15], i1639[16], i1639[17] )
  i1638.transparency = i1639[18]
  i1638.bounds = i1639[19]
  i1638.pixelsPerUnit = i1639[20]
  i1638.textureWidth = i1639[21]
  i1638.textureHeight = i1639[22]
  i1638.nativeSize = new pc.Vec2( i1639[23], i1639[24] )
  i1638.pivot = new pc.Vec2( i1639[25], i1639[26] )
  i1638.textureRectOffset = new pc.Vec2( i1639[27], i1639[28] )
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1641 = data
  i1640.name = i1641[0]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1643 = data
  i1642.name = i1643[0]
  i1642.ascent = i1643[1]
  i1642.originalLineHeight = i1643[2]
  i1642.fontSize = i1643[3]
  var i1645 = i1643[4]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1645[i + 0]) );
  }
  i1642.characterInfo = i1644
  request.r(i1643[5], i1643[6], 0, i1642, 'texture')
  i1642.originalFontSize = i1643[7]
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1649 = data
  i1648.index = i1649[0]
  i1648.advance = i1649[1]
  i1648.bearing = i1649[2]
  i1648.glyphWidth = i1649[3]
  i1648.glyphHeight = i1649[4]
  i1648.minX = i1649[5]
  i1648.maxX = i1649[6]
  i1648.minY = i1649[7]
  i1648.maxY = i1649[8]
  i1648.uvBottomLeftX = i1649[9]
  i1648.uvBottomLeftY = i1649[10]
  i1648.uvBottomRightX = i1649[11]
  i1648.uvBottomRightY = i1649[12]
  i1648.uvTopLeftX = i1649[13]
  i1648.uvTopLeftY = i1649[14]
  i1648.uvTopRightX = i1649[15]
  i1648.uvTopRightY = i1649[16]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1651 = data
  i1650.name = i1651[0]
  i1650.bytes64 = i1651[1]
  i1650.data = i1651[2]
  return i1650
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1652 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1653 = data
  var i1655 = i1653[0]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 2) {
  request.r(i1655[i + 0], i1655[i + 1], 2, i1654, '')
  }
  i1652.atlasAssets = i1654
  i1652.scale = i1653[1]
  request.r(i1653[2], i1653[3], 0, i1652, 'skeletonJSON')
  i1652.isUpgradingBlendModeMaterials = !!i1653[4]
  i1652.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1653[5], i1652.blendModeMaterials)
  var i1657 = i1653[6]
  var i1656 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1657.length; i += 2) {
  request.r(i1657[i + 0], i1657[i + 1], 1, i1656, '')
  }
  i1652.skeletonDataModifiers = i1656
  var i1659 = i1653[7]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( i1659[i + 0] );
  }
  i1652.fromAnimation = i1658
  var i1661 = i1653[8]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( i1661[i + 0] );
  }
  i1652.toAnimation = i1660
  i1652.duration = i1653[9]
  i1652.defaultMix = i1653[10]
  request.r(i1653[11], i1653[12], 0, i1652, 'controller')
  return i1652
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1664 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1665 = data
  i1664.applyAdditiveMaterial = !!i1665[0]
  var i1667 = i1665[1]
  var i1666 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1667[i + 0]));
  }
  i1664.additiveMaterials = i1666
  var i1669 = i1665[2]
  var i1668 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1669[i + 0]));
  }
  i1664.multiplyMaterials = i1668
  var i1671 = i1665[3]
  var i1670 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1671[i + 0]));
  }
  i1664.screenMaterials = i1670
  i1664.requiresBlendModeMaterials = !!i1665[4]
  return i1664
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1674 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1675 = data
  i1674.pageName = i1675[0]
  request.r(i1675[1], i1675[2], 0, i1674, 'material')
  return i1674
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1678 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1679 = data
  request.r(i1679[0], i1679[1], 0, i1678, 'atlasFile')
  var i1681 = i1679[2]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 2) {
  request.r(i1681[i + 0], i1681[i + 1], 2, i1680, '')
  }
  i1678.materials = i1680
  i1678.textureLoadingMode = i1679[3]
  request.r(i1679[4], i1679[5], 0, i1678, 'onDemandTextureLoader')
  return i1678
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1682 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1683 = data
  request.r(i1683[0], i1683[1], 0, i1682, 'atlas')
  i1682.normalStyle = i1683[2]
  i1682.normalSpacingOffset = i1683[3]
  i1682.boldStyle = i1683[4]
  i1682.boldSpacing = i1683[5]
  i1682.italicStyle = i1683[6]
  i1682.tabSize = i1683[7]
  i1682.hashCode = i1683[8]
  request.r(i1683[9], i1683[10], 0, i1682, 'material')
  i1682.materialHashCode = i1683[11]
  i1682.m_Version = i1683[12]
  i1682.m_SourceFontFileGUID = i1683[13]
  request.r(i1683[14], i1683[15], 0, i1682, 'm_SourceFontFile_EditorRef')
  request.r(i1683[16], i1683[17], 0, i1682, 'm_SourceFontFile')
  i1682.m_AtlasPopulationMode = i1683[18]
  i1682.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1683[19], i1682.m_FaceInfo)
  var i1685 = i1683[20]
  var i1684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.add(request.d('UnityEngine.TextCore.Glyph', i1685[i + 0]));
  }
  i1682.m_GlyphTable = i1684
  var i1687 = i1683[21]
  var i1686 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.add(request.d('TMPro.TMP_Character', i1687[i + 0]));
  }
  i1682.m_CharacterTable = i1686
  var i1689 = i1683[22]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 2) {
  request.r(i1689[i + 0], i1689[i + 1], 2, i1688, '')
  }
  i1682.m_AtlasTextures = i1688
  i1682.m_AtlasTextureIndex = i1683[23]
  i1682.m_IsMultiAtlasTexturesEnabled = !!i1683[24]
  i1682.m_ClearDynamicDataOnBuild = !!i1683[25]
  var i1691 = i1683[26]
  var i1690 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.add(request.d('UnityEngine.TextCore.GlyphRect', i1691[i + 0]));
  }
  i1682.m_UsedGlyphRects = i1690
  var i1693 = i1683[27]
  var i1692 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.add(request.d('UnityEngine.TextCore.GlyphRect', i1693[i + 0]));
  }
  i1682.m_FreeGlyphRects = i1692
  i1682.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1683[28], i1682.m_fontInfo)
  i1682.m_AtlasWidth = i1683[29]
  i1682.m_AtlasHeight = i1683[30]
  i1682.m_AtlasPadding = i1683[31]
  i1682.m_AtlasRenderMode = i1683[32]
  var i1695 = i1683[33]
  var i1694 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.add(request.d('TMPro.TMP_Glyph', i1695[i + 0]));
  }
  i1682.m_glyphInfoList = i1694
  i1682.m_KerningTable = request.d('TMPro.KerningTable', i1683[34], i1682.m_KerningTable)
  i1682.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1683[35], i1682.m_FontFeatureTable)
  var i1697 = i1683[36]
  var i1696 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1697.length; i += 2) {
  request.r(i1697[i + 0], i1697[i + 1], 1, i1696, '')
  }
  i1682.fallbackFontAssets = i1696
  var i1699 = i1683[37]
  var i1698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1699.length; i += 2) {
  request.r(i1699[i + 0], i1699[i + 1], 1, i1698, '')
  }
  i1682.m_FallbackFontAssetTable = i1698
  i1682.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1683[38], i1682.m_CreationSettings)
  var i1701 = i1683[39]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( request.d('TMPro.TMP_FontWeightPair', i1701[i + 0]) );
  }
  i1682.m_FontWeightTable = i1700
  var i1703 = i1683[40]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.push( request.d('TMPro.TMP_FontWeightPair', i1703[i + 0]) );
  }
  i1682.fontWeights = i1702
  return i1682
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1704 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1705 = data
  i1704.m_FaceIndex = i1705[0]
  i1704.m_FamilyName = i1705[1]
  i1704.m_StyleName = i1705[2]
  i1704.m_PointSize = i1705[3]
  i1704.m_Scale = i1705[4]
  i1704.m_UnitsPerEM = i1705[5]
  i1704.m_LineHeight = i1705[6]
  i1704.m_AscentLine = i1705[7]
  i1704.m_CapLine = i1705[8]
  i1704.m_MeanLine = i1705[9]
  i1704.m_Baseline = i1705[10]
  i1704.m_DescentLine = i1705[11]
  i1704.m_SuperscriptOffset = i1705[12]
  i1704.m_SuperscriptSize = i1705[13]
  i1704.m_SubscriptOffset = i1705[14]
  i1704.m_SubscriptSize = i1705[15]
  i1704.m_UnderlineOffset = i1705[16]
  i1704.m_UnderlineThickness = i1705[17]
  i1704.m_StrikethroughOffset = i1705[18]
  i1704.m_StrikethroughThickness = i1705[19]
  i1704.m_TabWidth = i1705[20]
  return i1704
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1708 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1709 = data
  i1708.m_Index = i1709[0]
  i1708.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1709[1], i1708.m_Metrics)
  i1708.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1709[2], i1708.m_GlyphRect)
  i1708.m_Scale = i1709[3]
  i1708.m_AtlasIndex = i1709[4]
  i1708.m_ClassDefinitionType = i1709[5]
  return i1708
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1710 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1711 = data
  i1710.m_Width = i1711[0]
  i1710.m_Height = i1711[1]
  i1710.m_HorizontalBearingX = i1711[2]
  i1710.m_HorizontalBearingY = i1711[3]
  i1710.m_HorizontalAdvance = i1711[4]
  return i1710
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1712 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1713 = data
  i1712.m_X = i1713[0]
  i1712.m_Y = i1713[1]
  i1712.m_Width = i1713[2]
  i1712.m_Height = i1713[3]
  return i1712
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1716 = root || request.c( 'TMPro.TMP_Character' )
  var i1717 = data
  i1716.m_ElementType = i1717[0]
  i1716.m_Unicode = i1717[1]
  i1716.m_GlyphIndex = i1717[2]
  i1716.m_Scale = i1717[3]
  return i1716
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1722 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1723 = data
  i1722.Name = i1723[0]
  i1722.PointSize = i1723[1]
  i1722.Scale = i1723[2]
  i1722.CharacterCount = i1723[3]
  i1722.LineHeight = i1723[4]
  i1722.Baseline = i1723[5]
  i1722.Ascender = i1723[6]
  i1722.CapHeight = i1723[7]
  i1722.Descender = i1723[8]
  i1722.CenterLine = i1723[9]
  i1722.SuperscriptOffset = i1723[10]
  i1722.SubscriptOffset = i1723[11]
  i1722.SubSize = i1723[12]
  i1722.Underline = i1723[13]
  i1722.UnderlineThickness = i1723[14]
  i1722.strikethrough = i1723[15]
  i1722.strikethroughThickness = i1723[16]
  i1722.TabWidth = i1723[17]
  i1722.Padding = i1723[18]
  i1722.AtlasWidth = i1723[19]
  i1722.AtlasHeight = i1723[20]
  return i1722
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1726 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1727 = data
  i1726.id = i1727[0]
  i1726.x = i1727[1]
  i1726.y = i1727[2]
  i1726.width = i1727[3]
  i1726.height = i1727[4]
  i1726.xOffset = i1727[5]
  i1726.yOffset = i1727[6]
  i1726.xAdvance = i1727[7]
  i1726.scale = i1727[8]
  return i1726
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1728 = root || request.c( 'TMPro.KerningTable' )
  var i1729 = data
  var i1731 = i1729[0]
  var i1730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.add(request.d('TMPro.KerningPair', i1731[i + 0]));
  }
  i1728.kerningPairs = i1730
  return i1728
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1734 = root || request.c( 'TMPro.KerningPair' )
  var i1735 = data
  i1734.xOffset = i1735[0]
  i1734.m_FirstGlyph = i1735[1]
  i1734.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1735[2], i1734.m_FirstGlyphAdjustments)
  i1734.m_SecondGlyph = i1735[3]
  i1734.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1735[4], i1734.m_SecondGlyphAdjustments)
  i1734.m_IgnoreSpacingAdjustments = !!i1735[5]
  return i1734
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1736 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1737 = data
  var i1739 = i1737[0]
  var i1738 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1739.length; i += 1) {
    i1738.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1739[i + 0]));
  }
  i1736.m_GlyphPairAdjustmentRecords = i1738
  return i1736
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1742 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1743 = data
  i1742.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1743[0], i1742.m_FirstAdjustmentRecord)
  i1742.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1743[1], i1742.m_SecondAdjustmentRecord)
  i1742.m_FeatureLookupFlags = i1743[2]
  return i1742
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1746 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1747 = data
  i1746.sourceFontFileName = i1747[0]
  i1746.sourceFontFileGUID = i1747[1]
  i1746.pointSizeSamplingMode = i1747[2]
  i1746.pointSize = i1747[3]
  i1746.padding = i1747[4]
  i1746.packingMode = i1747[5]
  i1746.atlasWidth = i1747[6]
  i1746.atlasHeight = i1747[7]
  i1746.characterSetSelectionMode = i1747[8]
  i1746.characterSequence = i1747[9]
  i1746.referencedFontAssetGUID = i1747[10]
  i1746.referencedTextAssetGUID = i1747[11]
  i1746.fontStyle = i1747[12]
  i1746.fontStyleModifier = i1747[13]
  i1746.renderMode = i1747[14]
  i1746.includeFontFeatures = !!i1747[15]
  return i1746
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1750 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1751 = data
  request.r(i1751[0], i1751[1], 0, i1750, 'regularTypeface')
  request.r(i1751[2], i1751[3], 0, i1750, 'italicTypeface')
  return i1750
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1752 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1753 = data
  i1752.m_GlyphIndex = i1753[0]
  i1752.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1753[1], i1752.m_GlyphValueRecord)
  return i1752
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1754 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1755 = data
  i1754.m_XPlacement = i1755[0]
  i1754.m_YPlacement = i1755[1]
  i1754.m_XAdvance = i1755[2]
  i1754.m_YAdvance = i1755[3]
  return i1754
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1756 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1757 = data
  i1756.useSafeMode = !!i1757[0]
  i1756.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1757[1], i1756.safeModeOptions)
  i1756.timeScale = i1757[2]
  i1756.unscaledTimeScale = i1757[3]
  i1756.useSmoothDeltaTime = !!i1757[4]
  i1756.maxSmoothUnscaledTime = i1757[5]
  i1756.rewindCallbackMode = i1757[6]
  i1756.showUnityEditorReport = !!i1757[7]
  i1756.logBehaviour = i1757[8]
  i1756.drawGizmos = !!i1757[9]
  i1756.defaultRecyclable = !!i1757[10]
  i1756.defaultAutoPlay = i1757[11]
  i1756.defaultUpdateType = i1757[12]
  i1756.defaultTimeScaleIndependent = !!i1757[13]
  i1756.defaultEaseType = i1757[14]
  i1756.defaultEaseOvershootOrAmplitude = i1757[15]
  i1756.defaultEasePeriod = i1757[16]
  i1756.defaultAutoKill = !!i1757[17]
  i1756.defaultLoopType = i1757[18]
  i1756.debugMode = !!i1757[19]
  i1756.debugStoreTargetId = !!i1757[20]
  i1756.showPreviewPanel = !!i1757[21]
  i1756.storeSettingsLocation = i1757[22]
  i1756.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1757[23], i1756.modules)
  i1756.createASMDEF = !!i1757[24]
  i1756.showPlayingTweens = !!i1757[25]
  i1756.showPausedTweens = !!i1757[26]
  return i1756
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1758 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1759 = data
  i1758.logBehaviour = i1759[0]
  i1758.nestedTweenFailureBehaviour = i1759[1]
  return i1758
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1760 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1761 = data
  i1760.showPanel = !!i1761[0]
  i1760.audioEnabled = !!i1761[1]
  i1760.physicsEnabled = !!i1761[2]
  i1760.physics2DEnabled = !!i1761[3]
  i1760.spriteEnabled = !!i1761[4]
  i1760.uiEnabled = !!i1761[5]
  i1760.textMeshProEnabled = !!i1761[6]
  i1760.tk2DEnabled = !!i1761[7]
  i1760.deAudioEnabled = !!i1761[8]
  i1760.deUnityExtendedEnabled = !!i1761[9]
  i1760.epoOutlineEnabled = !!i1761[10]
  return i1760
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1762 = root || request.c( 'TMPro.TMP_Settings' )
  var i1763 = data
  i1762.m_enableWordWrapping = !!i1763[0]
  i1762.m_enableKerning = !!i1763[1]
  i1762.m_enableExtraPadding = !!i1763[2]
  i1762.m_enableTintAllSprites = !!i1763[3]
  i1762.m_enableParseEscapeCharacters = !!i1763[4]
  i1762.m_EnableRaycastTarget = !!i1763[5]
  i1762.m_GetFontFeaturesAtRuntime = !!i1763[6]
  i1762.m_missingGlyphCharacter = i1763[7]
  i1762.m_warningsDisabled = !!i1763[8]
  request.r(i1763[9], i1763[10], 0, i1762, 'm_defaultFontAsset')
  i1762.m_defaultFontAssetPath = i1763[11]
  i1762.m_defaultFontSize = i1763[12]
  i1762.m_defaultAutoSizeMinRatio = i1763[13]
  i1762.m_defaultAutoSizeMaxRatio = i1763[14]
  i1762.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1763[15], i1763[16] )
  i1762.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1763[17], i1763[18] )
  i1762.m_autoSizeTextContainer = !!i1763[19]
  i1762.m_IsTextObjectScaleStatic = !!i1763[20]
  var i1765 = i1763[21]
  var i1764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1765.length; i += 2) {
  request.r(i1765[i + 0], i1765[i + 1], 1, i1764, '')
  }
  i1762.m_fallbackFontAssets = i1764
  i1762.m_matchMaterialPreset = !!i1763[22]
  request.r(i1763[23], i1763[24], 0, i1762, 'm_defaultSpriteAsset')
  i1762.m_defaultSpriteAssetPath = i1763[25]
  i1762.m_enableEmojiSupport = !!i1763[26]
  i1762.m_MissingCharacterSpriteUnicode = i1763[27]
  i1762.m_defaultColorGradientPresetsPath = i1763[28]
  request.r(i1763[29], i1763[30], 0, i1762, 'm_defaultStyleSheet')
  i1762.m_StyleSheetsResourcePath = i1763[31]
  request.r(i1763[32], i1763[33], 0, i1762, 'm_leadingCharacters')
  request.r(i1763[34], i1763[35], 0, i1762, 'm_followingCharacters')
  i1762.m_UseModernHangulLineBreakingRules = !!i1763[36]
  return i1762
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1766 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1767 = data
  request.r(i1767[0], i1767[1], 0, i1766, 'spriteSheet')
  var i1769 = i1767[2]
  var i1768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.add(request.d('TMPro.TMP_Sprite', i1769[i + 0]));
  }
  i1766.spriteInfoList = i1768
  var i1771 = i1767[3]
  var i1770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1771.length; i += 2) {
  request.r(i1771[i + 0], i1771[i + 1], 1, i1770, '')
  }
  i1766.fallbackSpriteAssets = i1770
  i1766.hashCode = i1767[4]
  request.r(i1767[5], i1767[6], 0, i1766, 'material')
  i1766.materialHashCode = i1767[7]
  i1766.m_Version = i1767[8]
  i1766.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1767[9], i1766.m_FaceInfo)
  var i1773 = i1767[10]
  var i1772 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.add(request.d('TMPro.TMP_SpriteCharacter', i1773[i + 0]));
  }
  i1766.m_SpriteCharacterTable = i1772
  var i1775 = i1767[11]
  var i1774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.add(request.d('TMPro.TMP_SpriteGlyph', i1775[i + 0]));
  }
  i1766.m_SpriteGlyphTable = i1774
  return i1766
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1778 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1779 = data
  i1778.name = i1779[0]
  i1778.hashCode = i1779[1]
  i1778.unicode = i1779[2]
  i1778.pivot = new pc.Vec2( i1779[3], i1779[4] )
  request.r(i1779[5], i1779[6], 0, i1778, 'sprite')
  i1778.id = i1779[7]
  i1778.x = i1779[8]
  i1778.y = i1779[9]
  i1778.width = i1779[10]
  i1778.height = i1779[11]
  i1778.xOffset = i1779[12]
  i1778.yOffset = i1779[13]
  i1778.xAdvance = i1779[14]
  i1778.scale = i1779[15]
  return i1778
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1784 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1785 = data
  i1784.m_Name = i1785[0]
  i1784.m_HashCode = i1785[1]
  i1784.m_ElementType = i1785[2]
  i1784.m_Unicode = i1785[3]
  i1784.m_GlyphIndex = i1785[4]
  i1784.m_Scale = i1785[5]
  return i1784
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1788 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1789 = data
  request.r(i1789[0], i1789[1], 0, i1788, 'sprite')
  i1788.m_Index = i1789[2]
  i1788.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1789[3], i1788.m_Metrics)
  i1788.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1789[4], i1788.m_GlyphRect)
  i1788.m_Scale = i1789[5]
  i1788.m_AtlasIndex = i1789[6]
  i1788.m_ClassDefinitionType = i1789[7]
  return i1788
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1790 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1791 = data
  var i1793 = i1791[0]
  var i1792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.add(request.d('TMPro.TMP_Style', i1793[i + 0]));
  }
  i1790.m_StyleList = i1792
  return i1790
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1796 = root || request.c( 'TMPro.TMP_Style' )
  var i1797 = data
  i1796.m_Name = i1797[0]
  i1796.m_HashCode = i1797[1]
  i1796.m_OpeningDefinition = i1797[2]
  i1796.m_ClosingDefinition = i1797[3]
  i1796.m_OpeningTagArray = i1797[4]
  i1796.m_ClosingTagArray = i1797[5]
  i1796.m_OpeningTagUnicodeArray = i1797[6]
  i1796.m_ClosingTagUnicodeArray = i1797[7]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1799 = data
  var i1801 = i1799[0]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1801[i + 0]) );
  }
  i1798.files = i1800
  i1798.componentToPrefabIds = i1799[1]
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1805 = data
  i1804.path = i1805[0]
  request.r(i1805[1], i1805[2], 0, i1804, 'unityObject')
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1807 = data
  var i1809 = i1807[0]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1809[i + 0]) );
  }
  i1806.scriptsExecutionOrder = i1808
  var i1811 = i1807[1]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1811[i + 0]) );
  }
  i1806.sortingLayers = i1810
  var i1813 = i1807[2]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1813[i + 0]) );
  }
  i1806.cullingLayers = i1812
  i1806.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1807[3], i1806.timeSettings)
  i1806.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1807[4], i1806.physicsSettings)
  i1806.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1807[5], i1806.physics2DSettings)
  i1806.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1807[6], i1806.qualitySettings)
  i1806.enableRealtimeShadows = !!i1807[7]
  i1806.enableAutoInstancing = !!i1807[8]
  i1806.enableStaticBatching = !!i1807[9]
  i1806.enableDynamicBatching = !!i1807[10]
  i1806.lightmapEncodingQuality = i1807[11]
  i1806.desiredColorSpace = i1807[12]
  var i1815 = i1807[13]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( i1815[i + 0] );
  }
  i1806.allTags = i1814
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1819 = data
  i1818.name = i1819[0]
  i1818.value = i1819[1]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1823 = data
  i1822.id = i1823[0]
  i1822.name = i1823[1]
  i1822.value = i1823[2]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1827 = data
  i1826.id = i1827[0]
  i1826.name = i1827[1]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1829 = data
  i1828.fixedDeltaTime = i1829[0]
  i1828.maximumDeltaTime = i1829[1]
  i1828.timeScale = i1829[2]
  i1828.maximumParticleTimestep = i1829[3]
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1831 = data
  i1830.gravity = new pc.Vec3( i1831[0], i1831[1], i1831[2] )
  i1830.defaultSolverIterations = i1831[3]
  i1830.bounceThreshold = i1831[4]
  i1830.autoSyncTransforms = !!i1831[5]
  i1830.autoSimulation = !!i1831[6]
  var i1833 = i1831[7]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1833[i + 0]) );
  }
  i1830.collisionMatrix = i1832
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1837 = data
  i1836.enabled = !!i1837[0]
  i1836.layerId = i1837[1]
  i1836.otherLayerId = i1837[2]
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1839 = data
  request.r(i1839[0], i1839[1], 0, i1838, 'material')
  i1838.gravity = new pc.Vec2( i1839[2], i1839[3] )
  i1838.positionIterations = i1839[4]
  i1838.velocityIterations = i1839[5]
  i1838.velocityThreshold = i1839[6]
  i1838.maxLinearCorrection = i1839[7]
  i1838.maxAngularCorrection = i1839[8]
  i1838.maxTranslationSpeed = i1839[9]
  i1838.maxRotationSpeed = i1839[10]
  i1838.baumgarteScale = i1839[11]
  i1838.baumgarteTOIScale = i1839[12]
  i1838.timeToSleep = i1839[13]
  i1838.linearSleepTolerance = i1839[14]
  i1838.angularSleepTolerance = i1839[15]
  i1838.defaultContactOffset = i1839[16]
  i1838.autoSimulation = !!i1839[17]
  i1838.queriesHitTriggers = !!i1839[18]
  i1838.queriesStartInColliders = !!i1839[19]
  i1838.callbacksOnDisable = !!i1839[20]
  i1838.reuseCollisionCallbacks = !!i1839[21]
  i1838.autoSyncTransforms = !!i1839[22]
  var i1841 = i1839[23]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1841[i + 0]) );
  }
  i1838.collisionMatrix = i1840
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1845 = data
  i1844.enabled = !!i1845[0]
  i1844.layerId = i1845[1]
  i1844.otherLayerId = i1845[2]
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1847 = data
  var i1849 = i1847[0]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1849[i + 0]) );
  }
  i1846.qualityLevels = i1848
  var i1851 = i1847[1]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( i1851[i + 0] );
  }
  i1846.names = i1850
  i1846.shadows = i1847[2]
  i1846.anisotropicFiltering = i1847[3]
  i1846.antiAliasing = i1847[4]
  i1846.lodBias = i1847[5]
  i1846.shadowCascades = i1847[6]
  i1846.shadowDistance = i1847[7]
  i1846.shadowmaskMode = i1847[8]
  i1846.shadowProjection = i1847[9]
  i1846.shadowResolution = i1847[10]
  i1846.softParticles = !!i1847[11]
  i1846.softVegetation = !!i1847[12]
  i1846.activeColorSpace = i1847[13]
  i1846.desiredColorSpace = i1847[14]
  i1846.masterTextureLimit = i1847[15]
  i1846.maxQueuedFrames = i1847[16]
  i1846.particleRaycastBudget = i1847[17]
  i1846.pixelLightCount = i1847[18]
  i1846.realtimeReflectionProbes = !!i1847[19]
  i1846.shadowCascade2Split = i1847[20]
  i1846.shadowCascade4Split = new pc.Vec3( i1847[21], i1847[22], i1847[23] )
  i1846.streamingMipmapsActive = !!i1847[24]
  i1846.vSyncCount = i1847[25]
  i1846.asyncUploadBufferSize = i1847[26]
  i1846.asyncUploadTimeSlice = i1847[27]
  i1846.billboardsFaceCameraPosition = !!i1847[28]
  i1846.shadowNearPlaneOffset = i1847[29]
  i1846.streamingMipmapsMemoryBudget = i1847[30]
  i1846.maximumLODLevel = i1847[31]
  i1846.streamingMipmapsAddAllCameras = !!i1847[32]
  i1846.streamingMipmapsMaxLevelReduction = i1847[33]
  i1846.streamingMipmapsRenderersPerFrame = i1847[34]
  i1846.resolutionScalingFixedDPIFactor = i1847[35]
  i1846.streamingMipmapsMaxFileIORequests = i1847[36]
  i1846.currentQualityLevel = i1847[37]
  return i1846
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1854 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1855 = data
  i1854.xPlacement = i1855[0]
  i1854.yPlacement = i1855[1]
  i1854.xAdvance = i1855[2]
  i1854.yAdvance = i1855[3]
  return i1854
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[47],"48":[3],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[3],"72":[73],"74":[75],"76":[75],"9":[8],"77":[78],"79":[80],"81":[78],"82":[8],"83":[8],"11":[9],"18":[21,8],"84":[8],"10":[9],"85":[8],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"91":[8],"25":[8],"92":[8],"16":[21,8],"93":[8],"94":[8],"95":[8],"96":[8],"97":[21,8],"98":[8],"99":[6],"100":[6],"7":[6],"101":[6],"102":[3],"103":[3],"104":[105],"106":[3],"107":[108],"109":[8],"110":[21,8],"111":[73],"26":[21,8],"112":[113,73],"114":[73],"115":[73,116],"117":[50],"118":[58],"119":[108],"120":[121],"122":[8],"123":[73,8],"17":[8,21],"124":[8],"125":[21,8],"126":[73],"127":[21,8],"128":[8],"129":[78]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","LeftOrRight","MixSkeletonSkin","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "315.4";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "TBAP_V19_NgocNDL_AnhPD";

Deserializers.lunaAppID = "33901";

Deserializers.projectId = "cc2b1186a2056e546bb13add5b988034";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1805";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4733";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Minecraft-Clone";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "67761e7c-61f1-450f-a583-569e74f35629";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

