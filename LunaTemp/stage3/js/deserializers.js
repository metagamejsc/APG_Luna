var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1410 = root || request.c( 'UnityEngine.JointSpring' )
  var i1411 = data
  i1410.spring = i1411[0]
  i1410.damper = i1411[1]
  i1410.targetPosition = i1411[2]
  return i1410
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1412 = root || request.c( 'UnityEngine.JointMotor' )
  var i1413 = data
  i1412.m_TargetVelocity = i1413[0]
  i1412.m_Force = i1413[1]
  i1412.m_FreeSpin = i1413[2]
  return i1412
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1414 = root || request.c( 'UnityEngine.JointLimits' )
  var i1415 = data
  i1414.m_Min = i1415[0]
  i1414.m_Max = i1415[1]
  i1414.m_Bounciness = i1415[2]
  i1414.m_BounceMinVelocity = i1415[3]
  i1414.m_ContactDistance = i1415[4]
  i1414.minBounce = i1415[5]
  i1414.maxBounce = i1415[6]
  return i1414
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1416 = root || request.c( 'UnityEngine.JointDrive' )
  var i1417 = data
  i1416.m_PositionSpring = i1417[0]
  i1416.m_PositionDamper = i1417[1]
  i1416.m_MaximumForce = i1417[2]
  i1416.m_UseAcceleration = i1417[3]
  return i1416
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1418 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1419 = data
  i1418.m_Spring = i1419[0]
  i1418.m_Damper = i1419[1]
  return i1418
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1420 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1421 = data
  i1420.m_Limit = i1421[0]
  i1420.m_Bounciness = i1421[1]
  i1420.m_ContactDistance = i1421[2]
  return i1420
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1422 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1423 = data
  i1422.m_ExtremumSlip = i1423[0]
  i1422.m_ExtremumValue = i1423[1]
  i1422.m_AsymptoteSlip = i1423[2]
  i1422.m_AsymptoteValue = i1423[3]
  i1422.m_Stiffness = i1423[4]
  return i1422
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1424 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1425 = data
  i1424.m_LowerAngle = i1425[0]
  i1424.m_UpperAngle = i1425[1]
  return i1424
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1426 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1427 = data
  i1426.m_MotorSpeed = i1427[0]
  i1426.m_MaximumMotorTorque = i1427[1]
  return i1426
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1428 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1429 = data
  i1428.m_DampingRatio = i1429[0]
  i1428.m_Frequency = i1429[1]
  i1428.m_Angle = i1429[2]
  return i1428
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1430 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1431 = data
  i1430.m_LowerTranslation = i1431[0]
  i1430.m_UpperTranslation = i1431[1]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1433 = data
  i1432.name = i1433[0]
  i1432.width = i1433[1]
  i1432.height = i1433[2]
  i1432.mipmapCount = i1433[3]
  i1432.anisoLevel = i1433[4]
  i1432.filterMode = i1433[5]
  i1432.hdr = !!i1433[6]
  i1432.format = i1433[7]
  i1432.wrapMode = i1433[8]
  i1432.alphaIsTransparency = !!i1433[9]
  i1432.alphaSource = i1433[10]
  i1432.graphicsFormat = i1433[11]
  i1432.sRGBTexture = !!i1433[12]
  i1432.desiredColorSpace = i1433[13]
  i1432.wrapU = i1433[14]
  i1432.wrapV = i1433[15]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1434 = root || new pc.UnityMaterial()
  var i1435 = data
  i1434.name = i1435[0]
  request.r(i1435[1], i1435[2], 0, i1434, 'shader')
  i1434.renderQueue = i1435[3]
  i1434.enableInstancing = !!i1435[4]
  var i1437 = i1435[5]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1437[i + 0]) );
  }
  i1434.floatParameters = i1436
  var i1439 = i1435[6]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1439[i + 0]) );
  }
  i1434.colorParameters = i1438
  var i1441 = i1435[7]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1441[i + 0]) );
  }
  i1434.vectorParameters = i1440
  var i1443 = i1435[8]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1443[i + 0]) );
  }
  i1434.textureParameters = i1442
  var i1445 = i1435[9]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1445[i + 0]) );
  }
  i1434.materialFlags = i1444
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1449 = data
  i1448.name = i1449[0]
  i1448.value = i1449[1]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1453 = data
  i1452.name = i1453[0]
  i1452.value = new pc.Color(i1453[1], i1453[2], i1453[3], i1453[4])
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1457 = data
  i1456.name = i1457[0]
  i1456.value = new pc.Vec4( i1457[1], i1457[2], i1457[3], i1457[4] )
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1461 = data
  i1460.name = i1461[0]
  request.r(i1461[1], i1461[2], 0, i1460, 'value')
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1465 = data
  i1464.name = i1465[0]
  i1464.enabled = !!i1465[1]
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1467 = data
  i1466.name = i1467[0]
  i1466.index = i1467[1]
  i1466.startup = !!i1467[2]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1469 = data
  i1468.position = new pc.Vec3( i1469[0], i1469[1], i1469[2] )
  i1468.scale = new pc.Vec3( i1469[3], i1469[4], i1469[5] )
  i1468.rotation = new pc.Quat(i1469[6], i1469[7], i1469[8], i1469[9])
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1471 = data
  i1470.aspect = i1471[0]
  i1470.orthographic = !!i1471[1]
  i1470.orthographicSize = i1471[2]
  i1470.backgroundColor = new pc.Color(i1471[3], i1471[4], i1471[5], i1471[6])
  i1470.nearClipPlane = i1471[7]
  i1470.farClipPlane = i1471[8]
  i1470.fieldOfView = i1471[9]
  i1470.depth = i1471[10]
  i1470.clearFlags = i1471[11]
  i1470.cullingMask = i1471[12]
  i1470.rect = i1471[13]
  request.r(i1471[14], i1471[15], 0, i1470, 'targetTexture')
  i1470.usePhysicalProperties = !!i1471[16]
  i1470.focalLength = i1471[17]
  i1470.sensorSize = new pc.Vec2( i1471[18], i1471[19] )
  i1470.lensShift = new pc.Vec2( i1471[20], i1471[21] )
  i1470.gateFit = i1471[22]
  i1470.commandBufferCount = i1471[23]
  i1470.cameraType = i1471[24]
  i1470.enabled = !!i1471[25]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1473 = data
  i1472.name = i1473[0]
  i1472.tagId = i1473[1]
  i1472.enabled = !!i1473[2]
  i1472.isStatic = !!i1473[3]
  i1472.layer = i1473[4]
  return i1472
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1474 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1475 = data
  request.r(i1475[0], i1475[1], 0, i1474, 'm_FirstSelected')
  i1474.m_sendNavigationEvents = !!i1475[2]
  i1474.m_DragThreshold = i1475[3]
  return i1474
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1476 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1477 = data
  i1476.m_HorizontalAxis = i1477[0]
  i1476.m_VerticalAxis = i1477[1]
  i1476.m_SubmitButton = i1477[2]
  i1476.m_CancelButton = i1477[3]
  i1476.m_InputActionsPerSecond = i1477[4]
  i1476.m_RepeatDelay = i1477[5]
  i1476.m_ForceModuleActive = !!i1477[6]
  i1476.m_SendPointerHoverToParent = !!i1477[7]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1479 = data
  i1478.pivot = new pc.Vec2( i1479[0], i1479[1] )
  i1478.anchorMin = new pc.Vec2( i1479[2], i1479[3] )
  i1478.anchorMax = new pc.Vec2( i1479[4], i1479[5] )
  i1478.sizeDelta = new pc.Vec2( i1479[6], i1479[7] )
  i1478.anchoredPosition3D = new pc.Vec3( i1479[8], i1479[9], i1479[10] )
  i1478.rotation = new pc.Quat(i1479[11], i1479[12], i1479[13], i1479[14])
  i1478.scale = new pc.Vec3( i1479[15], i1479[16], i1479[17] )
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1481 = data
  i1480.planeDistance = i1481[0]
  i1480.referencePixelsPerUnit = i1481[1]
  i1480.isFallbackOverlay = !!i1481[2]
  i1480.renderMode = i1481[3]
  i1480.renderOrder = i1481[4]
  i1480.sortingLayerName = i1481[5]
  i1480.sortingOrder = i1481[6]
  i1480.scaleFactor = i1481[7]
  request.r(i1481[8], i1481[9], 0, i1480, 'worldCamera')
  i1480.overrideSorting = !!i1481[10]
  i1480.pixelPerfect = !!i1481[11]
  i1480.targetDisplay = i1481[12]
  i1480.overridePixelPerfect = !!i1481[13]
  i1480.enabled = !!i1481[14]
  return i1480
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1482 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1483 = data
  i1482.m_UiScaleMode = i1483[0]
  i1482.m_ReferencePixelsPerUnit = i1483[1]
  i1482.m_ScaleFactor = i1483[2]
  i1482.m_ReferenceResolution = new pc.Vec2( i1483[3], i1483[4] )
  i1482.m_ScreenMatchMode = i1483[5]
  i1482.m_MatchWidthOrHeight = i1483[6]
  i1482.m_PhysicalUnit = i1483[7]
  i1482.m_FallbackScreenDPI = i1483[8]
  i1482.m_DefaultSpriteDPI = i1483[9]
  i1482.m_DynamicPixelsPerUnit = i1483[10]
  i1482.m_PresetInfoIsWorld = !!i1483[11]
  return i1482
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1484 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1485 = data
  i1484.m_IgnoreReversedGraphics = !!i1485[0]
  i1484.m_BlockingObjects = i1485[1]
  i1484.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1485[2] )
  return i1484
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1486 = root || request.c( 'LunaManager' )
  var i1487 = data
  var i1489 = i1487[0]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 2) {
  request.r(i1489[i + 0], i1489[i + 1], 2, i1488, '')
  }
  i1486.lstBtnInstall = i1488
  request.r(i1487[1], i1487[2], 0, i1486, 'StartCard')
  request.r(i1487[3], i1487[4], 0, i1486, 'EndCard')
  i1486.countPlay = i1487[5]
  i1486.countPlayFinal = i1487[6]
  i1486.countPlayMax = i1487[7]
  i1486.timeDropFinal = i1487[8]
  i1486.colorBG = new pc.Color(i1487[9], i1487[10], i1487[11], i1487[12])
  request.r(i1487[13], i1487[14], 0, i1486, 'texture2D')
  request.r(i1487[15], i1487[16], 0, i1486, 'rawImageBG')
  request.r(i1487[17], i1487[18], 0, i1486, 'textProgess')
  request.r(i1487[19], i1487[20], 0, i1486, 'imgProgess')
  request.r(i1487[21], i1487[22], 0, i1486, 'timeText')
  return i1486
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1499 = data
  i1498.usedByComposite = !!i1499[0]
  i1498.autoTiling = !!i1499[1]
  var i1501 = i1499[2]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
  var i1503 = i1501[i + 0]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 2) {
    i1502.push( new pc.Vec2( i1503[i + 0], i1503[i + 1] ) );
  }
    i1500.push( i1502 );
  }
  i1498.points = i1500
  i1498.enabled = !!i1499[3]
  i1498.isTrigger = !!i1499[4]
  i1498.usedByEffector = !!i1499[5]
  i1498.density = i1499[6]
  i1498.offset = new pc.Vec2( i1499[7], i1499[8] )
  request.r(i1499[9], i1499[10], 0, i1498, 'material')
  return i1498
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1510 = root || request.c( 'DropZone' )
  var i1511 = data
  i1510.idDrop = i1511[0]
  var i1513 = i1511[1]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 2) {
  request.r(i1513[i + 0], i1513[i + 1], 2, i1512, '')
  }
  i1510.steps = i1512
  return i1510
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1516 = root || request.c( 'UnityEngine.UI.Image' )
  var i1517 = data
  request.r(i1517[0], i1517[1], 0, i1516, 'm_Sprite')
  i1516.m_Type = i1517[2]
  i1516.m_PreserveAspect = !!i1517[3]
  i1516.m_FillCenter = !!i1517[4]
  i1516.m_FillMethod = i1517[5]
  i1516.m_FillAmount = i1517[6]
  i1516.m_FillClockwise = !!i1517[7]
  i1516.m_FillOrigin = i1517[8]
  i1516.m_UseSpriteMesh = !!i1517[9]
  i1516.m_PixelsPerUnitMultiplier = i1517[10]
  i1516.m_Maskable = !!i1517[11]
  request.r(i1517[12], i1517[13], 0, i1516, 'm_Material')
  i1516.m_Color = new pc.Color(i1517[14], i1517[15], i1517[16], i1517[17])
  i1516.m_RaycastTarget = !!i1517[18]
  i1516.m_RaycastPadding = new pc.Vec4( i1517[19], i1517[20], i1517[21], i1517[22] )
  return i1516
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1518 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1519 = data
  request.r(i1519[0], i1519[1], 0, i1518, 'skeletonDataAsset')
  request.r(i1519[2], i1519[3], 0, i1518, 'additiveMaterial')
  request.r(i1519[4], i1519[5], 0, i1518, 'multiplyMaterial')
  request.r(i1519[6], i1519[7], 0, i1518, 'screenMaterial')
  i1518.initialSkinName = i1519[8]
  i1518.initialFlipX = !!i1519[9]
  i1518.initialFlipY = !!i1519[10]
  i1518.startingAnimation = i1519[11]
  i1518.startingLoop = !!i1519[12]
  i1518.timeScale = i1519[13]
  i1518.freeze = !!i1519[14]
  i1518.layoutScaleMode = i1519[15]
  i1518.updateWhenInvisible = i1519[16]
  i1518.allowMultipleCanvasRenderers = !!i1519[17]
  var i1521 = i1519[18]
  var i1520 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1521.length; i += 2) {
  request.r(i1521[i + 0], i1521[i + 1], 1, i1520, '')
  }
  i1518.canvasRenderers = i1520
  i1518.enableSeparatorSlots = !!i1519[19]
  i1518.updateSeparatorPartLocation = !!i1519[20]
  i1518.updateSeparatorPartScale = !!i1519[21]
  i1518.disableMeshAssignmentOnOverride = !!i1519[22]
  i1518.referenceSize = new pc.Vec2( i1519[23], i1519[24] )
  i1518.referenceScale = i1519[25]
  i1518.rectTransformSize = new pc.Vec2( i1519[26], i1519[27] )
  i1518.editReferenceRect = !!i1519[28]
  var i1523 = i1519[29]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( i1523[i + 0] );
  }
  i1518.separatorSlotNames = i1522
  var i1525 = i1519[30]
  var i1524 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1525.length; i += 2) {
  request.r(i1525[i + 0], i1525[i + 1], 1, i1524, '')
  }
  i1518.separatorParts = i1524
  i1518.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1519[31], i1518.meshGenerator)
  i1518.updateTiming = i1519[32]
  i1518.unscaledTime = !!i1519[33]
  i1518.m_Maskable = !!i1519[34]
  request.r(i1519[35], i1519[36], 0, i1518, 'm_Material')
  i1518.m_Color = new pc.Color(i1519[37], i1519[38], i1519[39], i1519[40])
  i1518.m_RaycastTarget = !!i1519[41]
  i1518.m_RaycastPadding = new pc.Vec4( i1519[42], i1519[43], i1519[44], i1519[45] )
  return i1518
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1532 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1533 = data
  i1532.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1533[0], i1532.settings)
  return i1532
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1534 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1535 = data
  i1534.useClipping = !!i1535[0]
  i1534.zSpacing = i1535[1]
  i1534.pmaVertexColors = !!i1535[2]
  i1534.tintBlack = !!i1535[3]
  i1534.canvasGroupTintBlack = !!i1535[4]
  i1534.calculateTangents = !!i1535[5]
  i1534.addNormals = !!i1535[6]
  i1534.immutableTriangles = !!i1535[7]
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1537 = data
  i1536.m_Alpha = i1537[0]
  i1536.m_Interactable = !!i1537[1]
  i1536.m_BlocksRaycasts = !!i1537[2]
  i1536.m_IgnoreParentGroups = !!i1537[3]
  i1536.enabled = !!i1537[4]
  return i1536
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1538 = root || request.c( 'DraggableItem' )
  var i1539 = data
  i1538.idDrag = i1539[0]
  i1538.isProcess = !!i1539[1]
  return i1538
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1540 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1541 = data
  i1540.m_hasFontAssetChanged = !!i1541[0]
  request.r(i1541[1], i1541[2], 0, i1540, 'm_baseMaterial')
  i1540.m_maskOffset = new pc.Vec4( i1541[3], i1541[4], i1541[5], i1541[6] )
  i1540.m_text = i1541[7]
  i1540.m_isRightToLeft = !!i1541[8]
  request.r(i1541[9], i1541[10], 0, i1540, 'm_fontAsset')
  request.r(i1541[11], i1541[12], 0, i1540, 'm_sharedMaterial')
  var i1543 = i1541[13]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 2) {
  request.r(i1543[i + 0], i1543[i + 1], 2, i1542, '')
  }
  i1540.m_fontSharedMaterials = i1542
  request.r(i1541[14], i1541[15], 0, i1540, 'm_fontMaterial')
  var i1545 = i1541[16]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 2) {
  request.r(i1545[i + 0], i1545[i + 1], 2, i1544, '')
  }
  i1540.m_fontMaterials = i1544
  i1540.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1541[17], i1541[18], i1541[19], i1541[20])
  i1540.m_fontColor = new pc.Color(i1541[21], i1541[22], i1541[23], i1541[24])
  i1540.m_enableVertexGradient = !!i1541[25]
  i1540.m_colorMode = i1541[26]
  i1540.m_fontColorGradient = request.d('TMPro.VertexGradient', i1541[27], i1540.m_fontColorGradient)
  request.r(i1541[28], i1541[29], 0, i1540, 'm_fontColorGradientPreset')
  request.r(i1541[30], i1541[31], 0, i1540, 'm_spriteAsset')
  i1540.m_tintAllSprites = !!i1541[32]
  request.r(i1541[33], i1541[34], 0, i1540, 'm_StyleSheet')
  i1540.m_TextStyleHashCode = i1541[35]
  i1540.m_overrideHtmlColors = !!i1541[36]
  i1540.m_faceColor = UnityEngine.Color32.ConstructColor(i1541[37], i1541[38], i1541[39], i1541[40])
  i1540.m_fontSize = i1541[41]
  i1540.m_fontSizeBase = i1541[42]
  i1540.m_fontWeight = i1541[43]
  i1540.m_enableAutoSizing = !!i1541[44]
  i1540.m_fontSizeMin = i1541[45]
  i1540.m_fontSizeMax = i1541[46]
  i1540.m_fontStyle = i1541[47]
  i1540.m_HorizontalAlignment = i1541[48]
  i1540.m_VerticalAlignment = i1541[49]
  i1540.m_textAlignment = i1541[50]
  i1540.m_characterSpacing = i1541[51]
  i1540.m_wordSpacing = i1541[52]
  i1540.m_lineSpacing = i1541[53]
  i1540.m_lineSpacingMax = i1541[54]
  i1540.m_paragraphSpacing = i1541[55]
  i1540.m_charWidthMaxAdj = i1541[56]
  i1540.m_enableWordWrapping = !!i1541[57]
  i1540.m_wordWrappingRatios = i1541[58]
  i1540.m_overflowMode = i1541[59]
  request.r(i1541[60], i1541[61], 0, i1540, 'm_linkedTextComponent')
  request.r(i1541[62], i1541[63], 0, i1540, 'parentLinkedComponent')
  i1540.m_enableKerning = !!i1541[64]
  i1540.m_enableExtraPadding = !!i1541[65]
  i1540.checkPaddingRequired = !!i1541[66]
  i1540.m_isRichText = !!i1541[67]
  i1540.m_parseCtrlCharacters = !!i1541[68]
  i1540.m_isOrthographic = !!i1541[69]
  i1540.m_isCullingEnabled = !!i1541[70]
  i1540.m_horizontalMapping = i1541[71]
  i1540.m_verticalMapping = i1541[72]
  i1540.m_uvLineOffset = i1541[73]
  i1540.m_geometrySortingOrder = i1541[74]
  i1540.m_IsTextObjectScaleStatic = !!i1541[75]
  i1540.m_VertexBufferAutoSizeReduction = !!i1541[76]
  i1540.m_useMaxVisibleDescender = !!i1541[77]
  i1540.m_pageToDisplay = i1541[78]
  i1540.m_margin = new pc.Vec4( i1541[79], i1541[80], i1541[81], i1541[82] )
  i1540.m_isUsingLegacyAnimationComponent = !!i1541[83]
  i1540.m_isVolumetricText = !!i1541[84]
  i1540.m_Maskable = !!i1541[85]
  request.r(i1541[86], i1541[87], 0, i1540, 'm_Material')
  i1540.m_Color = new pc.Color(i1541[88], i1541[89], i1541[90], i1541[91])
  i1540.m_RaycastTarget = !!i1541[92]
  i1540.m_RaycastPadding = new pc.Vec4( i1541[93], i1541[94], i1541[95], i1541[96] )
  return i1540
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1548 = root || request.c( 'TMPro.VertexGradient' )
  var i1549 = data
  i1548.topLeft = new pc.Color(i1549[0], i1549[1], i1549[2], i1549[3])
  i1548.topRight = new pc.Color(i1549[4], i1549[5], i1549[6], i1549[7])
  i1548.bottomLeft = new pc.Color(i1549[8], i1549[9], i1549[10], i1549[11])
  i1548.bottomRight = new pc.Color(i1549[12], i1549[13], i1549[14], i1549[15])
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

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1554 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1555 = data
  var i1557 = i1555[0]
  var i1556 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.add(request.d('UnityEngine.Events.PersistentCall', i1557[i + 0]));
  }
  i1554.m_Calls = i1556
  return i1554
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1560 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1561 = data
  request.r(i1561[0], i1561[1], 0, i1560, 'm_Target')
  i1560.m_TargetAssemblyTypeName = i1561[2]
  i1560.m_MethodName = i1561[3]
  i1560.m_Mode = i1561[4]
  i1560.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1561[5], i1560.m_Arguments)
  i1560.m_CallState = i1561[6]
  return i1560
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1562 = root || request.c( 'UnityEngine.UI.Button' )
  var i1563 = data
  i1562.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1563[0], i1562.m_OnClick)
  i1562.m_Navigation = request.d('UnityEngine.UI.Navigation', i1563[1], i1562.m_Navigation)
  i1562.m_Transition = i1563[2]
  i1562.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1563[3], i1562.m_Colors)
  i1562.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1563[4], i1562.m_SpriteState)
  i1562.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1563[5], i1562.m_AnimationTriggers)
  i1562.m_Interactable = !!i1563[6]
  request.r(i1563[7], i1563[8], 0, i1562, 'm_TargetGraphic')
  return i1562
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1564 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1565 = data
  i1564.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1565[0], i1564.m_PersistentCalls)
  return i1564
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1566 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1567 = data
  i1566.m_Mode = i1567[0]
  i1566.m_WrapAround = !!i1567[1]
  request.r(i1567[2], i1567[3], 0, i1566, 'm_SelectOnUp')
  request.r(i1567[4], i1567[5], 0, i1566, 'm_SelectOnDown')
  request.r(i1567[6], i1567[7], 0, i1566, 'm_SelectOnLeft')
  request.r(i1567[8], i1567[9], 0, i1566, 'm_SelectOnRight')
  return i1566
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1569 = data
  i1568.m_NormalColor = new pc.Color(i1569[0], i1569[1], i1569[2], i1569[3])
  i1568.m_HighlightedColor = new pc.Color(i1569[4], i1569[5], i1569[6], i1569[7])
  i1568.m_PressedColor = new pc.Color(i1569[8], i1569[9], i1569[10], i1569[11])
  i1568.m_SelectedColor = new pc.Color(i1569[12], i1569[13], i1569[14], i1569[15])
  i1568.m_DisabledColor = new pc.Color(i1569[16], i1569[17], i1569[18], i1569[19])
  i1568.m_ColorMultiplier = i1569[20]
  i1568.m_FadeDuration = i1569[21]
  return i1568
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1570 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1571 = data
  request.r(i1571[0], i1571[1], 0, i1570, 'm_HighlightedSprite')
  request.r(i1571[2], i1571[3], 0, i1570, 'm_PressedSprite')
  request.r(i1571[4], i1571[5], 0, i1570, 'm_SelectedSprite')
  request.r(i1571[6], i1571[7], 0, i1570, 'm_DisabledSprite')
  return i1570
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1572 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1573 = data
  i1572.m_NormalTrigger = i1573[0]
  i1572.m_HighlightedTrigger = i1573[1]
  i1572.m_PressedTrigger = i1573[2]
  i1572.m_SelectedTrigger = i1573[3]
  i1572.m_DisabledTrigger = i1573[4]
  return i1572
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1575 = data
  i1574.m_ShowMaskGraphic = !!i1575[0]
  return i1574
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1576 = root || request.c( 'AudioController' )
  var i1577 = data
  request.r(i1577[0], i1577[1], 0, i1576, 'bgmSource')
  request.r(i1577[2], i1577[3], 0, i1576, 'sfxSource')
  var i1579 = i1577[4]
  var i1578 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.add(request.d('AudioEntry', i1579[i + 0]));
  }
  i1576.audioEntries = i1578
  return i1576
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i1582 = root || request.c( 'AudioEntry' )
  var i1583 = data
  i1582.key = i1583[0]
  request.r(i1583[1], i1583[2], 0, i1582, 'clip')
  i1582.volume = i1583[3]
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1585 = data
  i1584.ambientIntensity = i1585[0]
  i1584.reflectionIntensity = i1585[1]
  i1584.ambientMode = i1585[2]
  i1584.ambientLight = new pc.Color(i1585[3], i1585[4], i1585[5], i1585[6])
  i1584.ambientSkyColor = new pc.Color(i1585[7], i1585[8], i1585[9], i1585[10])
  i1584.ambientGroundColor = new pc.Color(i1585[11], i1585[12], i1585[13], i1585[14])
  i1584.ambientEquatorColor = new pc.Color(i1585[15], i1585[16], i1585[17], i1585[18])
  i1584.fogColor = new pc.Color(i1585[19], i1585[20], i1585[21], i1585[22])
  i1584.fogEndDistance = i1585[23]
  i1584.fogStartDistance = i1585[24]
  i1584.fogDensity = i1585[25]
  i1584.fog = !!i1585[26]
  request.r(i1585[27], i1585[28], 0, i1584, 'skybox')
  i1584.fogMode = i1585[29]
  var i1587 = i1585[30]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1587[i + 0]) );
  }
  i1584.lightmaps = i1586
  i1584.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1585[31], i1584.lightProbes)
  i1584.lightmapsMode = i1585[32]
  i1584.mixedBakeMode = i1585[33]
  i1584.environmentLightingMode = i1585[34]
  i1584.ambientProbe = new pc.SphericalHarmonicsL2(i1585[35])
  i1584.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1585[36])
  i1584.useReferenceAmbientProbe = !!i1585[37]
  request.r(i1585[38], i1585[39], 0, i1584, 'customReflection')
  request.r(i1585[40], i1585[41], 0, i1584, 'defaultReflection')
  i1584.defaultReflectionMode = i1585[42]
  i1584.defaultReflectionResolution = i1585[43]
  i1584.sunLightObjectId = i1585[44]
  i1584.pixelLightCount = i1585[45]
  i1584.defaultReflectionHDR = !!i1585[46]
  i1584.hasLightDataAsset = !!i1585[47]
  i1584.hasManualGenerate = !!i1585[48]
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1591 = data
  request.r(i1591[0], i1591[1], 0, i1590, 'lightmapColor')
  request.r(i1591[2], i1591[3], 0, i1590, 'lightmapDirection')
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1592 = root || new UnityEngine.LightProbes()
  var i1593 = data
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1601 = data
  var i1603 = i1601[0]
  var i1602 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1603.length; i += 1) {
    i1602.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1603[i + 0]));
  }
  i1600.ShaderCompilationErrors = i1602
  i1600.name = i1601[1]
  i1600.guid = i1601[2]
  var i1605 = i1601[3]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( i1605[i + 0] );
  }
  i1600.shaderDefinedKeywords = i1604
  var i1607 = i1601[4]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1607[i + 0]) );
  }
  i1600.passes = i1606
  var i1609 = i1601[5]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1609[i + 0]) );
  }
  i1600.usePasses = i1608
  var i1611 = i1601[6]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1611[i + 0]) );
  }
  i1600.defaultParameterValues = i1610
  request.r(i1601[7], i1601[8], 0, i1600, 'unityFallbackShader')
  i1600.readDepth = !!i1601[9]
  i1600.isCreatedByShaderGraph = !!i1601[10]
  i1600.disableBatching = !!i1601[11]
  i1600.compiled = !!i1601[12]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1615 = data
  i1614.shaderName = i1615[0]
  i1614.errorMessage = i1615[1]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1618 = root || new pc.UnityShaderPass()
  var i1619 = data
  i1618.id = i1619[0]
  i1618.subShaderIndex = i1619[1]
  i1618.name = i1619[2]
  i1618.passType = i1619[3]
  i1618.grabPassTextureName = i1619[4]
  i1618.usePass = !!i1619[5]
  i1618.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[6], i1618.zTest)
  i1618.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[7], i1618.zWrite)
  i1618.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[8], i1618.culling)
  i1618.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1619[9], i1618.blending)
  i1618.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1619[10], i1618.alphaBlending)
  i1618.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[11], i1618.colorWriteMask)
  i1618.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[12], i1618.offsetUnits)
  i1618.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[13], i1618.offsetFactor)
  i1618.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[14], i1618.stencilRef)
  i1618.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[15], i1618.stencilReadMask)
  i1618.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[16], i1618.stencilWriteMask)
  i1618.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1619[17], i1618.stencilOp)
  i1618.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1619[18], i1618.stencilOpFront)
  i1618.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1619[19], i1618.stencilOpBack)
  var i1621 = i1619[20]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1621[i + 0]) );
  }
  i1618.tags = i1620
  var i1623 = i1619[21]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.push( i1623[i + 0] );
  }
  i1618.passDefinedKeywords = i1622
  var i1625 = i1619[22]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1625[i + 0]) );
  }
  i1618.passDefinedKeywordGroups = i1624
  var i1627 = i1619[23]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1627[i + 0]) );
  }
  i1618.variants = i1626
  var i1629 = i1619[24]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1629[i + 0]) );
  }
  i1618.excludedVariants = i1628
  i1618.hasDepthReader = !!i1619[25]
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1631 = data
  i1630.val = i1631[0]
  i1630.name = i1631[1]
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1633 = data
  i1632.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1633[0], i1632.src)
  i1632.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1633[1], i1632.dst)
  i1632.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1633[2], i1632.op)
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1635 = data
  i1634.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1635[0], i1634.pass)
  i1634.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1635[1], i1634.fail)
  i1634.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1635[2], i1634.zFail)
  i1634.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1635[3], i1634.comp)
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1639 = data
  i1638.name = i1639[0]
  i1638.value = i1639[1]
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1643 = data
  var i1645 = i1643[0]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.push( i1645[i + 0] );
  }
  i1642.keywords = i1644
  i1642.hasDiscard = !!i1643[1]
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1649 = data
  i1648.passId = i1649[0]
  i1648.subShaderIndex = i1649[1]
  var i1651 = i1649[2]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( i1651[i + 0] );
  }
  i1648.keywords = i1650
  i1648.vertexProgram = i1649[3]
  i1648.fragmentProgram = i1649[4]
  i1648.exportedForWebGl2 = !!i1649[5]
  i1648.readDepth = !!i1649[6]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1655 = data
  request.r(i1655[0], i1655[1], 0, i1654, 'shader')
  i1654.pass = i1655[2]
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1659 = data
  i1658.name = i1659[0]
  i1658.type = i1659[1]
  i1658.value = new pc.Vec4( i1659[2], i1659[3], i1659[4], i1659[5] )
  i1658.textureValue = i1659[6]
  i1658.shaderPropertyFlag = i1659[7]
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1661 = data
  i1660.name = i1661[0]
  request.r(i1661[1], i1661[2], 0, i1660, 'texture')
  i1660.aabb = i1661[3]
  i1660.vertices = i1661[4]
  i1660.triangles = i1661[5]
  i1660.textureRect = UnityEngine.Rect.MinMaxRect(i1661[6], i1661[7], i1661[8], i1661[9])
  i1660.packedRect = UnityEngine.Rect.MinMaxRect(i1661[10], i1661[11], i1661[12], i1661[13])
  i1660.border = new pc.Vec4( i1661[14], i1661[15], i1661[16], i1661[17] )
  i1660.transparency = i1661[18]
  i1660.bounds = i1661[19]
  i1660.pixelsPerUnit = i1661[20]
  i1660.textureWidth = i1661[21]
  i1660.textureHeight = i1661[22]
  i1660.nativeSize = new pc.Vec2( i1661[23], i1661[24] )
  i1660.pivot = new pc.Vec2( i1661[25], i1661[26] )
  i1660.textureRectOffset = new pc.Vec2( i1661[27], i1661[28] )
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1663 = data
  i1662.name = i1663[0]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1665 = data
  i1664.name = i1665[0]
  i1664.ascent = i1665[1]
  i1664.originalLineHeight = i1665[2]
  i1664.fontSize = i1665[3]
  var i1667 = i1665[4]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1667[i + 0]) );
  }
  i1664.characterInfo = i1666
  request.r(i1665[5], i1665[6], 0, i1664, 'texture')
  i1664.originalFontSize = i1665[7]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1671 = data
  i1670.index = i1671[0]
  i1670.advance = i1671[1]
  i1670.bearing = i1671[2]
  i1670.glyphWidth = i1671[3]
  i1670.glyphHeight = i1671[4]
  i1670.minX = i1671[5]
  i1670.maxX = i1671[6]
  i1670.minY = i1671[7]
  i1670.maxY = i1671[8]
  i1670.uvBottomLeftX = i1671[9]
  i1670.uvBottomLeftY = i1671[10]
  i1670.uvBottomRightX = i1671[11]
  i1670.uvBottomRightY = i1671[12]
  i1670.uvTopLeftX = i1671[13]
  i1670.uvTopLeftY = i1671[14]
  i1670.uvTopRightX = i1671[15]
  i1670.uvTopRightY = i1671[16]
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1673 = data
  i1672.name = i1673[0]
  i1672.bytes64 = i1673[1]
  i1672.data = i1673[2]
  return i1672
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1674 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1675 = data
  var i1677 = i1675[0]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 2) {
  request.r(i1677[i + 0], i1677[i + 1], 2, i1676, '')
  }
  i1674.atlasAssets = i1676
  i1674.scale = i1675[1]
  request.r(i1675[2], i1675[3], 0, i1674, 'skeletonJSON')
  i1674.isUpgradingBlendModeMaterials = !!i1675[4]
  i1674.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1675[5], i1674.blendModeMaterials)
  var i1679 = i1675[6]
  var i1678 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1679.length; i += 2) {
  request.r(i1679[i + 0], i1679[i + 1], 1, i1678, '')
  }
  i1674.skeletonDataModifiers = i1678
  var i1681 = i1675[7]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 1) {
    i1680.push( i1681[i + 0] );
  }
  i1674.fromAnimation = i1680
  var i1683 = i1675[8]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( i1683[i + 0] );
  }
  i1674.toAnimation = i1682
  i1674.duration = i1675[9]
  i1674.defaultMix = i1675[10]
  request.r(i1675[11], i1675[12], 0, i1674, 'controller')
  return i1674
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1686 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1687 = data
  i1686.applyAdditiveMaterial = !!i1687[0]
  var i1689 = i1687[1]
  var i1688 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1689[i + 0]));
  }
  i1686.additiveMaterials = i1688
  var i1691 = i1687[2]
  var i1690 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1691[i + 0]));
  }
  i1686.multiplyMaterials = i1690
  var i1693 = i1687[3]
  var i1692 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1693[i + 0]));
  }
  i1686.screenMaterials = i1692
  i1686.requiresBlendModeMaterials = !!i1687[4]
  return i1686
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1696 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1697 = data
  i1696.pageName = i1697[0]
  request.r(i1697[1], i1697[2], 0, i1696, 'material')
  return i1696
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1700 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1701 = data
  request.r(i1701[0], i1701[1], 0, i1700, 'atlasFile')
  var i1703 = i1701[2]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 2) {
  request.r(i1703[i + 0], i1703[i + 1], 2, i1702, '')
  }
  i1700.materials = i1702
  i1700.textureLoadingMode = i1701[3]
  request.r(i1701[4], i1701[5], 0, i1700, 'onDemandTextureLoader')
  return i1700
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1704 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1705 = data
  request.r(i1705[0], i1705[1], 0, i1704, 'atlas')
  i1704.normalStyle = i1705[2]
  i1704.normalSpacingOffset = i1705[3]
  i1704.boldStyle = i1705[4]
  i1704.boldSpacing = i1705[5]
  i1704.italicStyle = i1705[6]
  i1704.tabSize = i1705[7]
  i1704.hashCode = i1705[8]
  request.r(i1705[9], i1705[10], 0, i1704, 'material')
  i1704.materialHashCode = i1705[11]
  i1704.m_Version = i1705[12]
  i1704.m_SourceFontFileGUID = i1705[13]
  request.r(i1705[14], i1705[15], 0, i1704, 'm_SourceFontFile_EditorRef')
  request.r(i1705[16], i1705[17], 0, i1704, 'm_SourceFontFile')
  i1704.m_AtlasPopulationMode = i1705[18]
  i1704.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1705[19], i1704.m_FaceInfo)
  var i1707 = i1705[20]
  var i1706 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.add(request.d('UnityEngine.TextCore.Glyph', i1707[i + 0]));
  }
  i1704.m_GlyphTable = i1706
  var i1709 = i1705[21]
  var i1708 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.add(request.d('TMPro.TMP_Character', i1709[i + 0]));
  }
  i1704.m_CharacterTable = i1708
  var i1711 = i1705[22]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 2) {
  request.r(i1711[i + 0], i1711[i + 1], 2, i1710, '')
  }
  i1704.m_AtlasTextures = i1710
  i1704.m_AtlasTextureIndex = i1705[23]
  i1704.m_IsMultiAtlasTexturesEnabled = !!i1705[24]
  i1704.m_ClearDynamicDataOnBuild = !!i1705[25]
  var i1713 = i1705[26]
  var i1712 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.add(request.d('UnityEngine.TextCore.GlyphRect', i1713[i + 0]));
  }
  i1704.m_UsedGlyphRects = i1712
  var i1715 = i1705[27]
  var i1714 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.add(request.d('UnityEngine.TextCore.GlyphRect', i1715[i + 0]));
  }
  i1704.m_FreeGlyphRects = i1714
  i1704.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1705[28], i1704.m_fontInfo)
  i1704.m_AtlasWidth = i1705[29]
  i1704.m_AtlasHeight = i1705[30]
  i1704.m_AtlasPadding = i1705[31]
  i1704.m_AtlasRenderMode = i1705[32]
  var i1717 = i1705[33]
  var i1716 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.add(request.d('TMPro.TMP_Glyph', i1717[i + 0]));
  }
  i1704.m_glyphInfoList = i1716
  i1704.m_KerningTable = request.d('TMPro.KerningTable', i1705[34], i1704.m_KerningTable)
  i1704.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1705[35], i1704.m_FontFeatureTable)
  var i1719 = i1705[36]
  var i1718 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1719.length; i += 2) {
  request.r(i1719[i + 0], i1719[i + 1], 1, i1718, '')
  }
  i1704.fallbackFontAssets = i1718
  var i1721 = i1705[37]
  var i1720 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1721.length; i += 2) {
  request.r(i1721[i + 0], i1721[i + 1], 1, i1720, '')
  }
  i1704.m_FallbackFontAssetTable = i1720
  i1704.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1705[38], i1704.m_CreationSettings)
  var i1723 = i1705[39]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( request.d('TMPro.TMP_FontWeightPair', i1723[i + 0]) );
  }
  i1704.m_FontWeightTable = i1722
  var i1725 = i1705[40]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('TMPro.TMP_FontWeightPair', i1725[i + 0]) );
  }
  i1704.fontWeights = i1724
  return i1704
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1726 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1727 = data
  i1726.m_FaceIndex = i1727[0]
  i1726.m_FamilyName = i1727[1]
  i1726.m_StyleName = i1727[2]
  i1726.m_PointSize = i1727[3]
  i1726.m_Scale = i1727[4]
  i1726.m_UnitsPerEM = i1727[5]
  i1726.m_LineHeight = i1727[6]
  i1726.m_AscentLine = i1727[7]
  i1726.m_CapLine = i1727[8]
  i1726.m_MeanLine = i1727[9]
  i1726.m_Baseline = i1727[10]
  i1726.m_DescentLine = i1727[11]
  i1726.m_SuperscriptOffset = i1727[12]
  i1726.m_SuperscriptSize = i1727[13]
  i1726.m_SubscriptOffset = i1727[14]
  i1726.m_SubscriptSize = i1727[15]
  i1726.m_UnderlineOffset = i1727[16]
  i1726.m_UnderlineThickness = i1727[17]
  i1726.m_StrikethroughOffset = i1727[18]
  i1726.m_StrikethroughThickness = i1727[19]
  i1726.m_TabWidth = i1727[20]
  return i1726
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1730 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1731 = data
  i1730.m_Index = i1731[0]
  i1730.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1731[1], i1730.m_Metrics)
  i1730.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1731[2], i1730.m_GlyphRect)
  i1730.m_Scale = i1731[3]
  i1730.m_AtlasIndex = i1731[4]
  i1730.m_ClassDefinitionType = i1731[5]
  return i1730
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1732 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1733 = data
  i1732.m_Width = i1733[0]
  i1732.m_Height = i1733[1]
  i1732.m_HorizontalBearingX = i1733[2]
  i1732.m_HorizontalBearingY = i1733[3]
  i1732.m_HorizontalAdvance = i1733[4]
  return i1732
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1734 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1735 = data
  i1734.m_X = i1735[0]
  i1734.m_Y = i1735[1]
  i1734.m_Width = i1735[2]
  i1734.m_Height = i1735[3]
  return i1734
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1738 = root || request.c( 'TMPro.TMP_Character' )
  var i1739 = data
  i1738.m_ElementType = i1739[0]
  i1738.m_Unicode = i1739[1]
  i1738.m_GlyphIndex = i1739[2]
  i1738.m_Scale = i1739[3]
  return i1738
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1744 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1745 = data
  i1744.Name = i1745[0]
  i1744.PointSize = i1745[1]
  i1744.Scale = i1745[2]
  i1744.CharacterCount = i1745[3]
  i1744.LineHeight = i1745[4]
  i1744.Baseline = i1745[5]
  i1744.Ascender = i1745[6]
  i1744.CapHeight = i1745[7]
  i1744.Descender = i1745[8]
  i1744.CenterLine = i1745[9]
  i1744.SuperscriptOffset = i1745[10]
  i1744.SubscriptOffset = i1745[11]
  i1744.SubSize = i1745[12]
  i1744.Underline = i1745[13]
  i1744.UnderlineThickness = i1745[14]
  i1744.strikethrough = i1745[15]
  i1744.strikethroughThickness = i1745[16]
  i1744.TabWidth = i1745[17]
  i1744.Padding = i1745[18]
  i1744.AtlasWidth = i1745[19]
  i1744.AtlasHeight = i1745[20]
  return i1744
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1748 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1749 = data
  i1748.id = i1749[0]
  i1748.x = i1749[1]
  i1748.y = i1749[2]
  i1748.width = i1749[3]
  i1748.height = i1749[4]
  i1748.xOffset = i1749[5]
  i1748.yOffset = i1749[6]
  i1748.xAdvance = i1749[7]
  i1748.scale = i1749[8]
  return i1748
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1750 = root || request.c( 'TMPro.KerningTable' )
  var i1751 = data
  var i1753 = i1751[0]
  var i1752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1753.length; i += 1) {
    i1752.add(request.d('TMPro.KerningPair', i1753[i + 0]));
  }
  i1750.kerningPairs = i1752
  return i1750
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1756 = root || request.c( 'TMPro.KerningPair' )
  var i1757 = data
  i1756.xOffset = i1757[0]
  i1756.m_FirstGlyph = i1757[1]
  i1756.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1757[2], i1756.m_FirstGlyphAdjustments)
  i1756.m_SecondGlyph = i1757[3]
  i1756.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1757[4], i1756.m_SecondGlyphAdjustments)
  i1756.m_IgnoreSpacingAdjustments = !!i1757[5]
  return i1756
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1758 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1759 = data
  var i1761 = i1759[0]
  var i1760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1761[i + 0]));
  }
  i1758.m_GlyphPairAdjustmentRecords = i1760
  return i1758
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1764 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1765 = data
  i1764.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1765[0], i1764.m_FirstAdjustmentRecord)
  i1764.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1765[1], i1764.m_SecondAdjustmentRecord)
  i1764.m_FeatureLookupFlags = i1765[2]
  return i1764
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1768 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1769 = data
  i1768.sourceFontFileName = i1769[0]
  i1768.sourceFontFileGUID = i1769[1]
  i1768.pointSizeSamplingMode = i1769[2]
  i1768.pointSize = i1769[3]
  i1768.padding = i1769[4]
  i1768.packingMode = i1769[5]
  i1768.atlasWidth = i1769[6]
  i1768.atlasHeight = i1769[7]
  i1768.characterSetSelectionMode = i1769[8]
  i1768.characterSequence = i1769[9]
  i1768.referencedFontAssetGUID = i1769[10]
  i1768.referencedTextAssetGUID = i1769[11]
  i1768.fontStyle = i1769[12]
  i1768.fontStyleModifier = i1769[13]
  i1768.renderMode = i1769[14]
  i1768.includeFontFeatures = !!i1769[15]
  return i1768
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1772 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1773 = data
  request.r(i1773[0], i1773[1], 0, i1772, 'regularTypeface')
  request.r(i1773[2], i1773[3], 0, i1772, 'italicTypeface')
  return i1772
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1774 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1775 = data
  i1774.useSafeMode = !!i1775[0]
  i1774.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1775[1], i1774.safeModeOptions)
  i1774.timeScale = i1775[2]
  i1774.unscaledTimeScale = i1775[3]
  i1774.useSmoothDeltaTime = !!i1775[4]
  i1774.maxSmoothUnscaledTime = i1775[5]
  i1774.rewindCallbackMode = i1775[6]
  i1774.showUnityEditorReport = !!i1775[7]
  i1774.logBehaviour = i1775[8]
  i1774.drawGizmos = !!i1775[9]
  i1774.defaultRecyclable = !!i1775[10]
  i1774.defaultAutoPlay = i1775[11]
  i1774.defaultUpdateType = i1775[12]
  i1774.defaultTimeScaleIndependent = !!i1775[13]
  i1774.defaultEaseType = i1775[14]
  i1774.defaultEaseOvershootOrAmplitude = i1775[15]
  i1774.defaultEasePeriod = i1775[16]
  i1774.defaultAutoKill = !!i1775[17]
  i1774.defaultLoopType = i1775[18]
  i1774.debugMode = !!i1775[19]
  i1774.debugStoreTargetId = !!i1775[20]
  i1774.showPreviewPanel = !!i1775[21]
  i1774.storeSettingsLocation = i1775[22]
  i1774.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1775[23], i1774.modules)
  i1774.createASMDEF = !!i1775[24]
  i1774.showPlayingTweens = !!i1775[25]
  i1774.showPausedTweens = !!i1775[26]
  return i1774
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1776 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1777 = data
  i1776.logBehaviour = i1777[0]
  i1776.nestedTweenFailureBehaviour = i1777[1]
  return i1776
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1778 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1779 = data
  i1778.showPanel = !!i1779[0]
  i1778.audioEnabled = !!i1779[1]
  i1778.physicsEnabled = !!i1779[2]
  i1778.physics2DEnabled = !!i1779[3]
  i1778.spriteEnabled = !!i1779[4]
  i1778.uiEnabled = !!i1779[5]
  i1778.textMeshProEnabled = !!i1779[6]
  i1778.tk2DEnabled = !!i1779[7]
  i1778.deAudioEnabled = !!i1779[8]
  i1778.deUnityExtendedEnabled = !!i1779[9]
  i1778.epoOutlineEnabled = !!i1779[10]
  return i1778
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1780 = root || request.c( 'TMPro.TMP_Settings' )
  var i1781 = data
  i1780.m_enableWordWrapping = !!i1781[0]
  i1780.m_enableKerning = !!i1781[1]
  i1780.m_enableExtraPadding = !!i1781[2]
  i1780.m_enableTintAllSprites = !!i1781[3]
  i1780.m_enableParseEscapeCharacters = !!i1781[4]
  i1780.m_EnableRaycastTarget = !!i1781[5]
  i1780.m_GetFontFeaturesAtRuntime = !!i1781[6]
  i1780.m_missingGlyphCharacter = i1781[7]
  i1780.m_warningsDisabled = !!i1781[8]
  request.r(i1781[9], i1781[10], 0, i1780, 'm_defaultFontAsset')
  i1780.m_defaultFontAssetPath = i1781[11]
  i1780.m_defaultFontSize = i1781[12]
  i1780.m_defaultAutoSizeMinRatio = i1781[13]
  i1780.m_defaultAutoSizeMaxRatio = i1781[14]
  i1780.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1781[15], i1781[16] )
  i1780.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1781[17], i1781[18] )
  i1780.m_autoSizeTextContainer = !!i1781[19]
  i1780.m_IsTextObjectScaleStatic = !!i1781[20]
  var i1783 = i1781[21]
  var i1782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1783.length; i += 2) {
  request.r(i1783[i + 0], i1783[i + 1], 1, i1782, '')
  }
  i1780.m_fallbackFontAssets = i1782
  i1780.m_matchMaterialPreset = !!i1781[22]
  request.r(i1781[23], i1781[24], 0, i1780, 'm_defaultSpriteAsset')
  i1780.m_defaultSpriteAssetPath = i1781[25]
  i1780.m_enableEmojiSupport = !!i1781[26]
  i1780.m_MissingCharacterSpriteUnicode = i1781[27]
  i1780.m_defaultColorGradientPresetsPath = i1781[28]
  request.r(i1781[29], i1781[30], 0, i1780, 'm_defaultStyleSheet')
  i1780.m_StyleSheetsResourcePath = i1781[31]
  request.r(i1781[32], i1781[33], 0, i1780, 'm_leadingCharacters')
  request.r(i1781[34], i1781[35], 0, i1780, 'm_followingCharacters')
  i1780.m_UseModernHangulLineBreakingRules = !!i1781[36]
  return i1780
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1784 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1785 = data
  request.r(i1785[0], i1785[1], 0, i1784, 'spriteSheet')
  var i1787 = i1785[2]
  var i1786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.add(request.d('TMPro.TMP_Sprite', i1787[i + 0]));
  }
  i1784.spriteInfoList = i1786
  var i1789 = i1785[3]
  var i1788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1789.length; i += 2) {
  request.r(i1789[i + 0], i1789[i + 1], 1, i1788, '')
  }
  i1784.fallbackSpriteAssets = i1788
  i1784.hashCode = i1785[4]
  request.r(i1785[5], i1785[6], 0, i1784, 'material')
  i1784.materialHashCode = i1785[7]
  i1784.m_Version = i1785[8]
  i1784.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1785[9], i1784.m_FaceInfo)
  var i1791 = i1785[10]
  var i1790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.add(request.d('TMPro.TMP_SpriteCharacter', i1791[i + 0]));
  }
  i1784.m_SpriteCharacterTable = i1790
  var i1793 = i1785[11]
  var i1792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.add(request.d('TMPro.TMP_SpriteGlyph', i1793[i + 0]));
  }
  i1784.m_SpriteGlyphTable = i1792
  return i1784
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1796 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1797 = data
  i1796.name = i1797[0]
  i1796.hashCode = i1797[1]
  i1796.unicode = i1797[2]
  i1796.pivot = new pc.Vec2( i1797[3], i1797[4] )
  request.r(i1797[5], i1797[6], 0, i1796, 'sprite')
  i1796.id = i1797[7]
  i1796.x = i1797[8]
  i1796.y = i1797[9]
  i1796.width = i1797[10]
  i1796.height = i1797[11]
  i1796.xOffset = i1797[12]
  i1796.yOffset = i1797[13]
  i1796.xAdvance = i1797[14]
  i1796.scale = i1797[15]
  return i1796
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1802 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1803 = data
  i1802.m_Name = i1803[0]
  i1802.m_HashCode = i1803[1]
  i1802.m_ElementType = i1803[2]
  i1802.m_Unicode = i1803[3]
  i1802.m_GlyphIndex = i1803[4]
  i1802.m_Scale = i1803[5]
  return i1802
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1806 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1807 = data
  request.r(i1807[0], i1807[1], 0, i1806, 'sprite')
  i1806.m_Index = i1807[2]
  i1806.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1807[3], i1806.m_Metrics)
  i1806.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1807[4], i1806.m_GlyphRect)
  i1806.m_Scale = i1807[5]
  i1806.m_AtlasIndex = i1807[6]
  i1806.m_ClassDefinitionType = i1807[7]
  return i1806
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1808 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1809 = data
  var i1811 = i1809[0]
  var i1810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.add(request.d('TMPro.TMP_Style', i1811[i + 0]));
  }
  i1808.m_StyleList = i1810
  return i1808
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1814 = root || request.c( 'TMPro.TMP_Style' )
  var i1815 = data
  i1814.m_Name = i1815[0]
  i1814.m_HashCode = i1815[1]
  i1814.m_OpeningDefinition = i1815[2]
  i1814.m_ClosingDefinition = i1815[3]
  i1814.m_OpeningTagArray = i1815[4]
  i1814.m_ClosingTagArray = i1815[5]
  i1814.m_OpeningTagUnicodeArray = i1815[6]
  i1814.m_ClosingTagUnicodeArray = i1815[7]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1817 = data
  var i1819 = i1817[0]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1819[i + 0]) );
  }
  i1816.files = i1818
  i1816.componentToPrefabIds = i1817[1]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1823 = data
  i1822.path = i1823[0]
  request.r(i1823[1], i1823[2], 0, i1822, 'unityObject')
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1825 = data
  var i1827 = i1825[0]
  var i1826 = []
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1827[i + 0]) );
  }
  i1824.scriptsExecutionOrder = i1826
  var i1829 = i1825[1]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1829[i + 0]) );
  }
  i1824.sortingLayers = i1828
  var i1831 = i1825[2]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1831[i + 0]) );
  }
  i1824.cullingLayers = i1830
  i1824.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1825[3], i1824.timeSettings)
  i1824.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1825[4], i1824.physicsSettings)
  i1824.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1825[5], i1824.physics2DSettings)
  i1824.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1825[6], i1824.qualitySettings)
  i1824.enableRealtimeShadows = !!i1825[7]
  i1824.enableAutoInstancing = !!i1825[8]
  i1824.enableStaticBatching = !!i1825[9]
  i1824.enableDynamicBatching = !!i1825[10]
  i1824.lightmapEncodingQuality = i1825[11]
  i1824.desiredColorSpace = i1825[12]
  var i1833 = i1825[13]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( i1833[i + 0] );
  }
  i1824.allTags = i1832
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1837 = data
  i1836.name = i1837[0]
  i1836.value = i1837[1]
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1841 = data
  i1840.id = i1841[0]
  i1840.name = i1841[1]
  i1840.value = i1841[2]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1845 = data
  i1844.id = i1845[0]
  i1844.name = i1845[1]
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1847 = data
  i1846.fixedDeltaTime = i1847[0]
  i1846.maximumDeltaTime = i1847[1]
  i1846.timeScale = i1847[2]
  i1846.maximumParticleTimestep = i1847[3]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1849 = data
  i1848.gravity = new pc.Vec3( i1849[0], i1849[1], i1849[2] )
  i1848.defaultSolverIterations = i1849[3]
  i1848.bounceThreshold = i1849[4]
  i1848.autoSyncTransforms = !!i1849[5]
  i1848.autoSimulation = !!i1849[6]
  var i1851 = i1849[7]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1851[i + 0]) );
  }
  i1848.collisionMatrix = i1850
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1855 = data
  i1854.enabled = !!i1855[0]
  i1854.layerId = i1855[1]
  i1854.otherLayerId = i1855[2]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1857 = data
  request.r(i1857[0], i1857[1], 0, i1856, 'material')
  i1856.gravity = new pc.Vec2( i1857[2], i1857[3] )
  i1856.positionIterations = i1857[4]
  i1856.velocityIterations = i1857[5]
  i1856.velocityThreshold = i1857[6]
  i1856.maxLinearCorrection = i1857[7]
  i1856.maxAngularCorrection = i1857[8]
  i1856.maxTranslationSpeed = i1857[9]
  i1856.maxRotationSpeed = i1857[10]
  i1856.baumgarteScale = i1857[11]
  i1856.baumgarteTOIScale = i1857[12]
  i1856.timeToSleep = i1857[13]
  i1856.linearSleepTolerance = i1857[14]
  i1856.angularSleepTolerance = i1857[15]
  i1856.defaultContactOffset = i1857[16]
  i1856.autoSimulation = !!i1857[17]
  i1856.queriesHitTriggers = !!i1857[18]
  i1856.queriesStartInColliders = !!i1857[19]
  i1856.callbacksOnDisable = !!i1857[20]
  i1856.reuseCollisionCallbacks = !!i1857[21]
  i1856.autoSyncTransforms = !!i1857[22]
  var i1859 = i1857[23]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1859[i + 0]) );
  }
  i1856.collisionMatrix = i1858
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1863 = data
  i1862.enabled = !!i1863[0]
  i1862.layerId = i1863[1]
  i1862.otherLayerId = i1863[2]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1865 = data
  var i1867 = i1865[0]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1867[i + 0]) );
  }
  i1864.qualityLevels = i1866
  var i1869 = i1865[1]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( i1869[i + 0] );
  }
  i1864.names = i1868
  i1864.shadows = i1865[2]
  i1864.anisotropicFiltering = i1865[3]
  i1864.antiAliasing = i1865[4]
  i1864.lodBias = i1865[5]
  i1864.shadowCascades = i1865[6]
  i1864.shadowDistance = i1865[7]
  i1864.shadowmaskMode = i1865[8]
  i1864.shadowProjection = i1865[9]
  i1864.shadowResolution = i1865[10]
  i1864.softParticles = !!i1865[11]
  i1864.softVegetation = !!i1865[12]
  i1864.activeColorSpace = i1865[13]
  i1864.desiredColorSpace = i1865[14]
  i1864.masterTextureLimit = i1865[15]
  i1864.maxQueuedFrames = i1865[16]
  i1864.particleRaycastBudget = i1865[17]
  i1864.pixelLightCount = i1865[18]
  i1864.realtimeReflectionProbes = !!i1865[19]
  i1864.shadowCascade2Split = i1865[20]
  i1864.shadowCascade4Split = new pc.Vec3( i1865[21], i1865[22], i1865[23] )
  i1864.streamingMipmapsActive = !!i1865[24]
  i1864.vSyncCount = i1865[25]
  i1864.asyncUploadBufferSize = i1865[26]
  i1864.asyncUploadTimeSlice = i1865[27]
  i1864.billboardsFaceCameraPosition = !!i1865[28]
  i1864.shadowNearPlaneOffset = i1865[29]
  i1864.streamingMipmapsMemoryBudget = i1865[30]
  i1864.maximumLODLevel = i1865[31]
  i1864.streamingMipmapsAddAllCameras = !!i1865[32]
  i1864.streamingMipmapsMaxLevelReduction = i1865[33]
  i1864.streamingMipmapsRenderersPerFrame = i1865[34]
  i1864.resolutionScalingFixedDPIFactor = i1865[35]
  i1864.streamingMipmapsMaxFileIORequests = i1865[36]
  i1864.currentQualityLevel = i1865[37]
  return i1864
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1872 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1873 = data
  request.r(i1873[0], i1873[1], 0, i1872, 'm_ObjectArgument')
  i1872.m_ObjectArgumentAssemblyTypeName = i1873[2]
  i1872.m_IntArgument = i1873[3]
  i1872.m_FloatArgument = i1873[4]
  i1872.m_StringArgument = i1873[5]
  i1872.m_BoolArgument = !!i1873[6]
  return i1872
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1874 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1875 = data
  i1874.xPlacement = i1875[0]
  i1874.yPlacement = i1875[1]
  i1874.xAdvance = i1875[2]
  i1874.yAdvance = i1875[3]
  return i1874
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1876 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1877 = data
  i1876.m_GlyphIndex = i1877[0]
  i1876.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1877[1], i1876.m_GlyphValueRecord)
  return i1876
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1878 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1879 = data
  i1878.m_XPlacement = i1879[0]
  i1878.m_YPlacement = i1879[1]
  i1878.m_XAdvance = i1879[2]
  i1878.m_YAdvance = i1879[3]
  return i1878
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[3],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[52],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[3],"74":[75],"76":[77],"78":[77],"9":[8],"79":[80],"81":[82],"83":[80],"84":[8],"85":[8],"11":[9],"18":[19,8],"86":[8],"10":[9],"87":[8],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"32":[8],"94":[8],"16":[19,8],"95":[8],"96":[8],"97":[8],"98":[8],"99":[19,8],"100":[8],"101":[6],"102":[6],"7":[6],"103":[6],"104":[3],"105":[3],"106":[107],"108":[3],"109":[110],"111":[8],"112":[19,8],"113":[75],"25":[19,8],"114":[115,75],"116":[75],"117":[75,118],"119":[52],"120":[60],"121":[110],"122":[123],"124":[8],"125":[75,8],"17":[8,19],"126":[8],"127":[19,8],"128":[75],"129":[19,8],"130":[8],"131":[80]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.PolygonCollider2D","DropZone","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.CanvasGroup","DraggableItem","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "162.2";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BP_V12_ThamNT_AnhPD";

Deserializers.lunaAppID = "31727";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "d83d6e1c-c658-4ece-8fa4-5de49e7c141e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

