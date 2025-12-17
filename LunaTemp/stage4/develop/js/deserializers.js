var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1458 = root || request.c( 'UnityEngine.JointSpring' )
  var i1459 = data
  i1458.spring = i1459[0]
  i1458.damper = i1459[1]
  i1458.targetPosition = i1459[2]
  return i1458
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1460 = root || request.c( 'UnityEngine.JointMotor' )
  var i1461 = data
  i1460.m_TargetVelocity = i1461[0]
  i1460.m_Force = i1461[1]
  i1460.m_FreeSpin = i1461[2]
  return i1460
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1462 = root || request.c( 'UnityEngine.JointLimits' )
  var i1463 = data
  i1462.m_Min = i1463[0]
  i1462.m_Max = i1463[1]
  i1462.m_Bounciness = i1463[2]
  i1462.m_BounceMinVelocity = i1463[3]
  i1462.m_ContactDistance = i1463[4]
  i1462.minBounce = i1463[5]
  i1462.maxBounce = i1463[6]
  return i1462
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1464 = root || request.c( 'UnityEngine.JointDrive' )
  var i1465 = data
  i1464.m_PositionSpring = i1465[0]
  i1464.m_PositionDamper = i1465[1]
  i1464.m_MaximumForce = i1465[2]
  i1464.m_UseAcceleration = i1465[3]
  return i1464
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1466 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1467 = data
  i1466.m_Spring = i1467[0]
  i1466.m_Damper = i1467[1]
  return i1466
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1468 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1469 = data
  i1468.m_Limit = i1469[0]
  i1468.m_Bounciness = i1469[1]
  i1468.m_ContactDistance = i1469[2]
  return i1468
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1470 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1471 = data
  i1470.m_ExtremumSlip = i1471[0]
  i1470.m_ExtremumValue = i1471[1]
  i1470.m_AsymptoteSlip = i1471[2]
  i1470.m_AsymptoteValue = i1471[3]
  i1470.m_Stiffness = i1471[4]
  return i1470
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1472 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1473 = data
  i1472.m_LowerAngle = i1473[0]
  i1472.m_UpperAngle = i1473[1]
  return i1472
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1474 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1475 = data
  i1474.m_MotorSpeed = i1475[0]
  i1474.m_MaximumMotorTorque = i1475[1]
  return i1474
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1476 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1477 = data
  i1476.m_DampingRatio = i1477[0]
  i1476.m_Frequency = i1477[1]
  i1476.m_Angle = i1477[2]
  return i1476
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1478 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1479 = data
  i1478.m_LowerTranslation = i1479[0]
  i1478.m_UpperTranslation = i1479[1]
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1481 = data
  i1480.name = i1481[0]
  i1480.width = i1481[1]
  i1480.height = i1481[2]
  i1480.mipmapCount = i1481[3]
  i1480.anisoLevel = i1481[4]
  i1480.filterMode = i1481[5]
  i1480.hdr = !!i1481[6]
  i1480.format = i1481[7]
  i1480.wrapMode = i1481[8]
  i1480.alphaIsTransparency = !!i1481[9]
  i1480.alphaSource = i1481[10]
  i1480.graphicsFormat = i1481[11]
  i1480.sRGBTexture = !!i1481[12]
  i1480.desiredColorSpace = i1481[13]
  i1480.wrapU = i1481[14]
  i1480.wrapV = i1481[15]
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1482 = root || new pc.UnityMaterial()
  var i1483 = data
  i1482.name = i1483[0]
  request.r(i1483[1], i1483[2], 0, i1482, 'shader')
  i1482.renderQueue = i1483[3]
  i1482.enableInstancing = !!i1483[4]
  var i1485 = i1483[5]
  var i1484 = []
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1485[i + 0]) );
  }
  i1482.floatParameters = i1484
  var i1487 = i1483[6]
  var i1486 = []
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1487[i + 0]) );
  }
  i1482.colorParameters = i1486
  var i1489 = i1483[7]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 1) {
    i1488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1489[i + 0]) );
  }
  i1482.vectorParameters = i1488
  var i1491 = i1483[8]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1491[i + 0]) );
  }
  i1482.textureParameters = i1490
  var i1493 = i1483[9]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1493[i + 0]) );
  }
  i1482.materialFlags = i1492
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1497 = data
  i1496.name = i1497[0]
  i1496.value = i1497[1]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1501 = data
  i1500.name = i1501[0]
  i1500.value = new pc.Color(i1501[1], i1501[2], i1501[3], i1501[4])
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1505 = data
  i1504.name = i1505[0]
  i1504.value = new pc.Vec4( i1505[1], i1505[2], i1505[3], i1505[4] )
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1509 = data
  i1508.name = i1509[0]
  request.r(i1509[1], i1509[2], 0, i1508, 'value')
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1513 = data
  i1512.name = i1513[0]
  i1512.enabled = !!i1513[1]
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1515 = data
  i1514.name = i1515[0]
  i1514.index = i1515[1]
  i1514.startup = !!i1515[2]
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1517 = data
  i1516.position = new pc.Vec3( i1517[0], i1517[1], i1517[2] )
  i1516.scale = new pc.Vec3( i1517[3], i1517[4], i1517[5] )
  i1516.rotation = new pc.Quat(i1517[6], i1517[7], i1517[8], i1517[9])
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1519 = data
  i1518.aspect = i1519[0]
  i1518.orthographic = !!i1519[1]
  i1518.orthographicSize = i1519[2]
  i1518.backgroundColor = new pc.Color(i1519[3], i1519[4], i1519[5], i1519[6])
  i1518.nearClipPlane = i1519[7]
  i1518.farClipPlane = i1519[8]
  i1518.fieldOfView = i1519[9]
  i1518.depth = i1519[10]
  i1518.clearFlags = i1519[11]
  i1518.cullingMask = i1519[12]
  i1518.rect = i1519[13]
  request.r(i1519[14], i1519[15], 0, i1518, 'targetTexture')
  i1518.usePhysicalProperties = !!i1519[16]
  i1518.focalLength = i1519[17]
  i1518.sensorSize = new pc.Vec2( i1519[18], i1519[19] )
  i1518.lensShift = new pc.Vec2( i1519[20], i1519[21] )
  i1518.gateFit = i1519[22]
  i1518.commandBufferCount = i1519[23]
  i1518.cameraType = i1519[24]
  i1518.enabled = !!i1519[25]
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1521 = data
  i1520.name = i1521[0]
  i1520.tagId = i1521[1]
  i1520.enabled = !!i1521[2]
  i1520.isStatic = !!i1521[3]
  i1520.layer = i1521[4]
  return i1520
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1522 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1523 = data
  request.r(i1523[0], i1523[1], 0, i1522, 'm_FirstSelected')
  i1522.m_sendNavigationEvents = !!i1523[2]
  i1522.m_DragThreshold = i1523[3]
  return i1522
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1524 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1525 = data
  i1524.m_HorizontalAxis = i1525[0]
  i1524.m_VerticalAxis = i1525[1]
  i1524.m_SubmitButton = i1525[2]
  i1524.m_CancelButton = i1525[3]
  i1524.m_InputActionsPerSecond = i1525[4]
  i1524.m_RepeatDelay = i1525[5]
  i1524.m_ForceModuleActive = !!i1525[6]
  i1524.m_SendPointerHoverToParent = !!i1525[7]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1527 = data
  i1526.pivot = new pc.Vec2( i1527[0], i1527[1] )
  i1526.anchorMin = new pc.Vec2( i1527[2], i1527[3] )
  i1526.anchorMax = new pc.Vec2( i1527[4], i1527[5] )
  i1526.sizeDelta = new pc.Vec2( i1527[6], i1527[7] )
  i1526.anchoredPosition3D = new pc.Vec3( i1527[8], i1527[9], i1527[10] )
  i1526.rotation = new pc.Quat(i1527[11], i1527[12], i1527[13], i1527[14])
  i1526.scale = new pc.Vec3( i1527[15], i1527[16], i1527[17] )
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1529 = data
  i1528.planeDistance = i1529[0]
  i1528.referencePixelsPerUnit = i1529[1]
  i1528.isFallbackOverlay = !!i1529[2]
  i1528.renderMode = i1529[3]
  i1528.renderOrder = i1529[4]
  i1528.sortingLayerName = i1529[5]
  i1528.sortingOrder = i1529[6]
  i1528.scaleFactor = i1529[7]
  request.r(i1529[8], i1529[9], 0, i1528, 'worldCamera')
  i1528.overrideSorting = !!i1529[10]
  i1528.pixelPerfect = !!i1529[11]
  i1528.targetDisplay = i1529[12]
  i1528.overridePixelPerfect = !!i1529[13]
  i1528.enabled = !!i1529[14]
  return i1528
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1530 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1531 = data
  i1530.m_UiScaleMode = i1531[0]
  i1530.m_ReferencePixelsPerUnit = i1531[1]
  i1530.m_ScaleFactor = i1531[2]
  i1530.m_ReferenceResolution = new pc.Vec2( i1531[3], i1531[4] )
  i1530.m_ScreenMatchMode = i1531[5]
  i1530.m_MatchWidthOrHeight = i1531[6]
  i1530.m_PhysicalUnit = i1531[7]
  i1530.m_FallbackScreenDPI = i1531[8]
  i1530.m_DefaultSpriteDPI = i1531[9]
  i1530.m_DynamicPixelsPerUnit = i1531[10]
  i1530.m_PresetInfoIsWorld = !!i1531[11]
  return i1530
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1532 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1533 = data
  i1532.m_IgnoreReversedGraphics = !!i1533[0]
  i1532.m_BlockingObjects = i1533[1]
  i1532.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1533[2] )
  return i1532
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1534 = root || request.c( 'LunaManager' )
  var i1535 = data
  var i1537 = i1535[0]
  var i1536 = []
  for(var i = 0; i < i1537.length; i += 2) {
  request.r(i1537[i + 0], i1537[i + 1], 2, i1536, '')
  }
  i1534.lstBtnInstall = i1536
  request.r(i1535[1], i1535[2], 0, i1534, 'StartCard')
  request.r(i1535[3], i1535[4], 0, i1534, 'EndCard')
  i1534.countPlay = i1535[5]
  i1534.countPlayFinal = i1535[6]
  i1534.countPlayMax = i1535[7]
  i1534.timeDropFinal = i1535[8]
  i1534.colorBG = new pc.Color(i1535[9], i1535[10], i1535[11], i1535[12])
  request.r(i1535[13], i1535[14], 0, i1534, 'texture2D')
  request.r(i1535[15], i1535[16], 0, i1534, 'rawImageBG')
  request.r(i1535[17], i1535[18], 0, i1534, 'textProgess')
  request.r(i1535[19], i1535[20], 0, i1534, 'imgProgess')
  request.r(i1535[21], i1535[22], 0, i1534, 'timeText')
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1541 = data
  i1540.cullTransparentMesh = !!i1541[0]
  return i1540
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1542 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1543 = data
  request.r(i1543[0], i1543[1], 0, i1542, 'm_Texture')
  i1542.m_UVRect = UnityEngine.Rect.MinMaxRect(i1543[2], i1543[3], i1543[4], i1543[5])
  i1542.m_Maskable = !!i1543[6]
  request.r(i1543[7], i1543[8], 0, i1542, 'm_Material')
  i1542.m_Color = new pc.Color(i1543[9], i1543[10], i1543[11], i1543[12])
  i1542.m_RaycastTarget = !!i1543[13]
  i1542.m_RaycastPadding = new pc.Vec4( i1543[14], i1543[15], i1543[16], i1543[17] )
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1545 = data
  request.r(i1545[0], i1545[1], 0, i1544, 'clip')
  request.r(i1545[2], i1545[3], 0, i1544, 'outputAudioMixerGroup')
  i1544.playOnAwake = !!i1545[4]
  i1544.loop = !!i1545[5]
  i1544.time = i1545[6]
  i1544.volume = i1545[7]
  i1544.pitch = i1545[8]
  i1544.enabled = !!i1545[9]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1547 = data
  i1546.usedByComposite = !!i1547[0]
  i1546.autoTiling = !!i1547[1]
  var i1549 = i1547[2]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 1) {
  var i1551 = i1549[i + 0]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 2) {
    i1550.push( new pc.Vec2( i1551[i + 0], i1551[i + 1] ) );
  }
    i1548.push( i1550 );
  }
  i1546.points = i1548
  i1546.enabled = !!i1547[3]
  i1546.isTrigger = !!i1547[4]
  i1546.usedByEffector = !!i1547[5]
  i1546.density = i1547[6]
  i1546.offset = new pc.Vec2( i1547[7], i1547[8] )
  request.r(i1547[9], i1547[10], 0, i1546, 'material')
  return i1546
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1558 = root || request.c( 'DropZone' )
  var i1559 = data
  i1558.idDrop = i1559[0]
  var i1561 = i1559[1]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 2) {
  request.r(i1561[i + 0], i1561[i + 1], 2, i1560, '')
  }
  i1558.steps = i1560
  return i1558
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1564 = root || request.c( 'UnityEngine.UI.Image' )
  var i1565 = data
  request.r(i1565[0], i1565[1], 0, i1564, 'm_Sprite')
  i1564.m_Type = i1565[2]
  i1564.m_PreserveAspect = !!i1565[3]
  i1564.m_FillCenter = !!i1565[4]
  i1564.m_FillMethod = i1565[5]
  i1564.m_FillAmount = i1565[6]
  i1564.m_FillClockwise = !!i1565[7]
  i1564.m_FillOrigin = i1565[8]
  i1564.m_UseSpriteMesh = !!i1565[9]
  i1564.m_PixelsPerUnitMultiplier = i1565[10]
  i1564.m_Maskable = !!i1565[11]
  request.r(i1565[12], i1565[13], 0, i1564, 'm_Material')
  i1564.m_Color = new pc.Color(i1565[14], i1565[15], i1565[16], i1565[17])
  i1564.m_RaycastTarget = !!i1565[18]
  i1564.m_RaycastPadding = new pc.Vec4( i1565[19], i1565[20], i1565[21], i1565[22] )
  return i1564
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1566 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1567 = data
  request.r(i1567[0], i1567[1], 0, i1566, 'skeletonDataAsset')
  request.r(i1567[2], i1567[3], 0, i1566, 'additiveMaterial')
  request.r(i1567[4], i1567[5], 0, i1566, 'multiplyMaterial')
  request.r(i1567[6], i1567[7], 0, i1566, 'screenMaterial')
  i1566.initialSkinName = i1567[8]
  i1566.initialFlipX = !!i1567[9]
  i1566.initialFlipY = !!i1567[10]
  i1566.startingAnimation = i1567[11]
  i1566.startingLoop = !!i1567[12]
  i1566.timeScale = i1567[13]
  i1566.freeze = !!i1567[14]
  i1566.layoutScaleMode = i1567[15]
  i1566.updateWhenInvisible = i1567[16]
  i1566.allowMultipleCanvasRenderers = !!i1567[17]
  var i1569 = i1567[18]
  var i1568 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1569.length; i += 2) {
  request.r(i1569[i + 0], i1569[i + 1], 1, i1568, '')
  }
  i1566.canvasRenderers = i1568
  i1566.enableSeparatorSlots = !!i1567[19]
  i1566.updateSeparatorPartLocation = !!i1567[20]
  i1566.updateSeparatorPartScale = !!i1567[21]
  i1566.disableMeshAssignmentOnOverride = !!i1567[22]
  i1566.referenceSize = new pc.Vec2( i1567[23], i1567[24] )
  i1566.referenceScale = i1567[25]
  i1566.rectTransformSize = new pc.Vec2( i1567[26], i1567[27] )
  i1566.editReferenceRect = !!i1567[28]
  var i1571 = i1567[29]
  var i1570 = []
  for(var i = 0; i < i1571.length; i += 1) {
    i1570.push( i1571[i + 0] );
  }
  i1566.separatorSlotNames = i1570
  var i1573 = i1567[30]
  var i1572 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1573.length; i += 2) {
  request.r(i1573[i + 0], i1573[i + 1], 1, i1572, '')
  }
  i1566.separatorParts = i1572
  i1566.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1567[31], i1566.meshGenerator)
  i1566.updateTiming = i1567[32]
  i1566.unscaledTime = !!i1567[33]
  i1566.m_Maskable = !!i1567[34]
  request.r(i1567[35], i1567[36], 0, i1566, 'm_Material')
  i1566.m_Color = new pc.Color(i1567[37], i1567[38], i1567[39], i1567[40])
  i1566.m_RaycastTarget = !!i1567[41]
  i1566.m_RaycastPadding = new pc.Vec4( i1567[42], i1567[43], i1567[44], i1567[45] )
  return i1566
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1580 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1581 = data
  i1580.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1581[0], i1580.settings)
  return i1580
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1582 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1583 = data
  i1582.useClipping = !!i1583[0]
  i1582.zSpacing = i1583[1]
  i1582.pmaVertexColors = !!i1583[2]
  i1582.tintBlack = !!i1583[3]
  i1582.canvasGroupTintBlack = !!i1583[4]
  i1582.calculateTangents = !!i1583[5]
  i1582.addNormals = !!i1583[6]
  i1582.immutableTriangles = !!i1583[7]
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1585 = data
  i1584.m_Alpha = i1585[0]
  i1584.m_Interactable = !!i1585[1]
  i1584.m_BlocksRaycasts = !!i1585[2]
  i1584.m_IgnoreParentGroups = !!i1585[3]
  i1584.enabled = !!i1585[4]
  return i1584
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1586 = root || request.c( 'DraggableItem' )
  var i1587 = data
  i1586.idDrag = i1587[0]
  i1586.isProcess = !!i1587[1]
  return i1586
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1588 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1589 = data
  i1588.m_hasFontAssetChanged = !!i1589[0]
  request.r(i1589[1], i1589[2], 0, i1588, 'm_baseMaterial')
  i1588.m_maskOffset = new pc.Vec4( i1589[3], i1589[4], i1589[5], i1589[6] )
  i1588.m_text = i1589[7]
  i1588.m_isRightToLeft = !!i1589[8]
  request.r(i1589[9], i1589[10], 0, i1588, 'm_fontAsset')
  request.r(i1589[11], i1589[12], 0, i1588, 'm_sharedMaterial')
  var i1591 = i1589[13]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 2) {
  request.r(i1591[i + 0], i1591[i + 1], 2, i1590, '')
  }
  i1588.m_fontSharedMaterials = i1590
  request.r(i1589[14], i1589[15], 0, i1588, 'm_fontMaterial')
  var i1593 = i1589[16]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 2) {
  request.r(i1593[i + 0], i1593[i + 1], 2, i1592, '')
  }
  i1588.m_fontMaterials = i1592
  i1588.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1589[17], i1589[18], i1589[19], i1589[20])
  i1588.m_fontColor = new pc.Color(i1589[21], i1589[22], i1589[23], i1589[24])
  i1588.m_enableVertexGradient = !!i1589[25]
  i1588.m_colorMode = i1589[26]
  i1588.m_fontColorGradient = request.d('TMPro.VertexGradient', i1589[27], i1588.m_fontColorGradient)
  request.r(i1589[28], i1589[29], 0, i1588, 'm_fontColorGradientPreset')
  request.r(i1589[30], i1589[31], 0, i1588, 'm_spriteAsset')
  i1588.m_tintAllSprites = !!i1589[32]
  request.r(i1589[33], i1589[34], 0, i1588, 'm_StyleSheet')
  i1588.m_TextStyleHashCode = i1589[35]
  i1588.m_overrideHtmlColors = !!i1589[36]
  i1588.m_faceColor = UnityEngine.Color32.ConstructColor(i1589[37], i1589[38], i1589[39], i1589[40])
  i1588.m_fontSize = i1589[41]
  i1588.m_fontSizeBase = i1589[42]
  i1588.m_fontWeight = i1589[43]
  i1588.m_enableAutoSizing = !!i1589[44]
  i1588.m_fontSizeMin = i1589[45]
  i1588.m_fontSizeMax = i1589[46]
  i1588.m_fontStyle = i1589[47]
  i1588.m_HorizontalAlignment = i1589[48]
  i1588.m_VerticalAlignment = i1589[49]
  i1588.m_textAlignment = i1589[50]
  i1588.m_characterSpacing = i1589[51]
  i1588.m_wordSpacing = i1589[52]
  i1588.m_lineSpacing = i1589[53]
  i1588.m_lineSpacingMax = i1589[54]
  i1588.m_paragraphSpacing = i1589[55]
  i1588.m_charWidthMaxAdj = i1589[56]
  i1588.m_enableWordWrapping = !!i1589[57]
  i1588.m_wordWrappingRatios = i1589[58]
  i1588.m_overflowMode = i1589[59]
  request.r(i1589[60], i1589[61], 0, i1588, 'm_linkedTextComponent')
  request.r(i1589[62], i1589[63], 0, i1588, 'parentLinkedComponent')
  i1588.m_enableKerning = !!i1589[64]
  i1588.m_enableExtraPadding = !!i1589[65]
  i1588.checkPaddingRequired = !!i1589[66]
  i1588.m_isRichText = !!i1589[67]
  i1588.m_parseCtrlCharacters = !!i1589[68]
  i1588.m_isOrthographic = !!i1589[69]
  i1588.m_isCullingEnabled = !!i1589[70]
  i1588.m_horizontalMapping = i1589[71]
  i1588.m_verticalMapping = i1589[72]
  i1588.m_uvLineOffset = i1589[73]
  i1588.m_geometrySortingOrder = i1589[74]
  i1588.m_IsTextObjectScaleStatic = !!i1589[75]
  i1588.m_VertexBufferAutoSizeReduction = !!i1589[76]
  i1588.m_useMaxVisibleDescender = !!i1589[77]
  i1588.m_pageToDisplay = i1589[78]
  i1588.m_margin = new pc.Vec4( i1589[79], i1589[80], i1589[81], i1589[82] )
  i1588.m_isUsingLegacyAnimationComponent = !!i1589[83]
  i1588.m_isVolumetricText = !!i1589[84]
  i1588.m_Maskable = !!i1589[85]
  request.r(i1589[86], i1589[87], 0, i1588, 'm_Material')
  i1588.m_Color = new pc.Color(i1589[88], i1589[89], i1589[90], i1589[91])
  i1588.m_RaycastTarget = !!i1589[92]
  i1588.m_RaycastPadding = new pc.Vec4( i1589[93], i1589[94], i1589[95], i1589[96] )
  return i1588
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1596 = root || request.c( 'TMPro.VertexGradient' )
  var i1597 = data
  i1596.topLeft = new pc.Color(i1597[0], i1597[1], i1597[2], i1597[3])
  i1596.topRight = new pc.Color(i1597[4], i1597[5], i1597[6], i1597[7])
  i1596.bottomLeft = new pc.Color(i1597[8], i1597[9], i1597[10], i1597[11])
  i1596.bottomRight = new pc.Color(i1597[12], i1597[13], i1597[14], i1597[15])
  return i1596
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1598 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1599 = data
  i1598.targetIsSelf = !!i1599[0]
  request.r(i1599[1], i1599[2], 0, i1598, 'targetGO')
  i1598.tweenTargetIsTargetGO = !!i1599[3]
  i1598.delay = i1599[4]
  i1598.duration = i1599[5]
  i1598.easeType = i1599[6]
  i1598.easeCurve = new pc.AnimationCurve( { keys_flow: i1599[7] } )
  i1598.loopType = i1599[8]
  i1598.loops = i1599[9]
  i1598.id = i1599[10]
  i1598.isRelative = !!i1599[11]
  i1598.isFrom = !!i1599[12]
  i1598.isIndependentUpdate = !!i1599[13]
  i1598.autoKill = !!i1599[14]
  i1598.autoGenerate = !!i1599[15]
  i1598.isActive = !!i1599[16]
  i1598.isValid = !!i1599[17]
  request.r(i1599[18], i1599[19], 0, i1598, 'target')
  i1598.animationType = i1599[20]
  i1598.targetType = i1599[21]
  i1598.forcedTargetType = i1599[22]
  i1598.autoPlay = !!i1599[23]
  i1598.useTargetAsV3 = !!i1599[24]
  i1598.endValueFloat = i1599[25]
  i1598.endValueV3 = new pc.Vec3( i1599[26], i1599[27], i1599[28] )
  i1598.endValueV2 = new pc.Vec2( i1599[29], i1599[30] )
  i1598.endValueColor = new pc.Color(i1599[31], i1599[32], i1599[33], i1599[34])
  i1598.endValueString = i1599[35]
  i1598.endValueRect = UnityEngine.Rect.MinMaxRect(i1599[36], i1599[37], i1599[38], i1599[39])
  request.r(i1599[40], i1599[41], 0, i1598, 'endValueTransform')
  i1598.optionalBool0 = !!i1599[42]
  i1598.optionalBool1 = !!i1599[43]
  i1598.optionalFloat0 = i1599[44]
  i1598.optionalInt0 = i1599[45]
  i1598.optionalRotationMode = i1599[46]
  i1598.optionalScrambleMode = i1599[47]
  i1598.optionalShakeRandomnessMode = i1599[48]
  i1598.optionalString = i1599[49]
  i1598.updateType = i1599[50]
  i1598.isSpeedBased = !!i1599[51]
  i1598.hasOnStart = !!i1599[52]
  i1598.hasOnPlay = !!i1599[53]
  i1598.hasOnUpdate = !!i1599[54]
  i1598.hasOnStepComplete = !!i1599[55]
  i1598.hasOnComplete = !!i1599[56]
  i1598.hasOnTweenCreated = !!i1599[57]
  i1598.hasOnRewind = !!i1599[58]
  i1598.onStart = request.d('UnityEngine.Events.UnityEvent', i1599[59], i1598.onStart)
  i1598.onPlay = request.d('UnityEngine.Events.UnityEvent', i1599[60], i1598.onPlay)
  i1598.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1599[61], i1598.onUpdate)
  i1598.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1599[62], i1598.onStepComplete)
  i1598.onComplete = request.d('UnityEngine.Events.UnityEvent', i1599[63], i1598.onComplete)
  i1598.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1599[64], i1598.onTweenCreated)
  i1598.onRewind = request.d('UnityEngine.Events.UnityEvent', i1599[65], i1598.onRewind)
  return i1598
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1600 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1601 = data
  i1600.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1601[0], i1600.m_PersistentCalls)
  return i1600
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1602 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1603 = data
  var i1605 = i1603[0]
  var i1604 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.add(request.d('UnityEngine.Events.PersistentCall', i1605[i + 0]));
  }
  i1602.m_Calls = i1604
  return i1602
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1609 = data
  request.r(i1609[0], i1609[1], 0, i1608, 'm_Target')
  i1608.m_TargetAssemblyTypeName = i1609[2]
  i1608.m_MethodName = i1609[3]
  i1608.m_Mode = i1609[4]
  i1608.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1609[5], i1608.m_Arguments)
  i1608.m_CallState = i1609[6]
  return i1608
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1610 = root || request.c( 'UnityEngine.UI.Button' )
  var i1611 = data
  i1610.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1611[0], i1610.m_OnClick)
  i1610.m_Navigation = request.d('UnityEngine.UI.Navigation', i1611[1], i1610.m_Navigation)
  i1610.m_Transition = i1611[2]
  i1610.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1611[3], i1610.m_Colors)
  i1610.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1611[4], i1610.m_SpriteState)
  i1610.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1611[5], i1610.m_AnimationTriggers)
  i1610.m_Interactable = !!i1611[6]
  request.r(i1611[7], i1611[8], 0, i1610, 'm_TargetGraphic')
  return i1610
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1612 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1613 = data
  i1612.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1613[0], i1612.m_PersistentCalls)
  return i1612
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1615 = data
  i1614.m_Mode = i1615[0]
  i1614.m_WrapAround = !!i1615[1]
  request.r(i1615[2], i1615[3], 0, i1614, 'm_SelectOnUp')
  request.r(i1615[4], i1615[5], 0, i1614, 'm_SelectOnDown')
  request.r(i1615[6], i1615[7], 0, i1614, 'm_SelectOnLeft')
  request.r(i1615[8], i1615[9], 0, i1614, 'm_SelectOnRight')
  return i1614
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1617 = data
  i1616.m_NormalColor = new pc.Color(i1617[0], i1617[1], i1617[2], i1617[3])
  i1616.m_HighlightedColor = new pc.Color(i1617[4], i1617[5], i1617[6], i1617[7])
  i1616.m_PressedColor = new pc.Color(i1617[8], i1617[9], i1617[10], i1617[11])
  i1616.m_SelectedColor = new pc.Color(i1617[12], i1617[13], i1617[14], i1617[15])
  i1616.m_DisabledColor = new pc.Color(i1617[16], i1617[17], i1617[18], i1617[19])
  i1616.m_ColorMultiplier = i1617[20]
  i1616.m_FadeDuration = i1617[21]
  return i1616
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1619 = data
  request.r(i1619[0], i1619[1], 0, i1618, 'm_HighlightedSprite')
  request.r(i1619[2], i1619[3], 0, i1618, 'm_PressedSprite')
  request.r(i1619[4], i1619[5], 0, i1618, 'm_SelectedSprite')
  request.r(i1619[6], i1619[7], 0, i1618, 'm_DisabledSprite')
  return i1618
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1620 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1621 = data
  i1620.m_NormalTrigger = i1621[0]
  i1620.m_HighlightedTrigger = i1621[1]
  i1620.m_PressedTrigger = i1621[2]
  i1620.m_SelectedTrigger = i1621[3]
  i1620.m_DisabledTrigger = i1621[4]
  return i1620
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1622 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1623 = data
  i1622.m_ShowMaskGraphic = !!i1623[0]
  return i1622
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1624 = root || request.c( 'AudioController' )
  var i1625 = data
  request.r(i1625[0], i1625[1], 0, i1624, 'bgmSource')
  request.r(i1625[2], i1625[3], 0, i1624, 'sfxSource')
  var i1627 = i1625[4]
  var i1626 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.add(request.d('AudioEntry', i1627[i + 0]));
  }
  i1624.audioEntries = i1626
  return i1624
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i1630 = root || request.c( 'AudioEntry' )
  var i1631 = data
  i1630.key = i1631[0]
  request.r(i1631[1], i1631[2], 0, i1630, 'clip')
  i1630.volume = i1631[3]
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1633 = data
  i1632.ambientIntensity = i1633[0]
  i1632.reflectionIntensity = i1633[1]
  i1632.ambientMode = i1633[2]
  i1632.ambientLight = new pc.Color(i1633[3], i1633[4], i1633[5], i1633[6])
  i1632.ambientSkyColor = new pc.Color(i1633[7], i1633[8], i1633[9], i1633[10])
  i1632.ambientGroundColor = new pc.Color(i1633[11], i1633[12], i1633[13], i1633[14])
  i1632.ambientEquatorColor = new pc.Color(i1633[15], i1633[16], i1633[17], i1633[18])
  i1632.fogColor = new pc.Color(i1633[19], i1633[20], i1633[21], i1633[22])
  i1632.fogEndDistance = i1633[23]
  i1632.fogStartDistance = i1633[24]
  i1632.fogDensity = i1633[25]
  i1632.fog = !!i1633[26]
  request.r(i1633[27], i1633[28], 0, i1632, 'skybox')
  i1632.fogMode = i1633[29]
  var i1635 = i1633[30]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1635[i + 0]) );
  }
  i1632.lightmaps = i1634
  i1632.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1633[31], i1632.lightProbes)
  i1632.lightmapsMode = i1633[32]
  i1632.mixedBakeMode = i1633[33]
  i1632.environmentLightingMode = i1633[34]
  i1632.ambientProbe = new pc.SphericalHarmonicsL2(i1633[35])
  i1632.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1633[36])
  i1632.useReferenceAmbientProbe = !!i1633[37]
  request.r(i1633[38], i1633[39], 0, i1632, 'customReflection')
  request.r(i1633[40], i1633[41], 0, i1632, 'defaultReflection')
  i1632.defaultReflectionMode = i1633[42]
  i1632.defaultReflectionResolution = i1633[43]
  i1632.sunLightObjectId = i1633[44]
  i1632.pixelLightCount = i1633[45]
  i1632.defaultReflectionHDR = !!i1633[46]
  i1632.hasLightDataAsset = !!i1633[47]
  i1632.hasManualGenerate = !!i1633[48]
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1639 = data
  request.r(i1639[0], i1639[1], 0, i1638, 'lightmapColor')
  request.r(i1639[2], i1639[3], 0, i1638, 'lightmapDirection')
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1640 = root || new UnityEngine.LightProbes()
  var i1641 = data
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1649 = data
  var i1651 = i1649[0]
  var i1650 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1651[i + 0]));
  }
  i1648.ShaderCompilationErrors = i1650
  i1648.name = i1649[1]
  i1648.guid = i1649[2]
  var i1653 = i1649[3]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( i1653[i + 0] );
  }
  i1648.shaderDefinedKeywords = i1652
  var i1655 = i1649[4]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1655[i + 0]) );
  }
  i1648.passes = i1654
  var i1657 = i1649[5]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1657[i + 0]) );
  }
  i1648.usePasses = i1656
  var i1659 = i1649[6]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1659[i + 0]) );
  }
  i1648.defaultParameterValues = i1658
  request.r(i1649[7], i1649[8], 0, i1648, 'unityFallbackShader')
  i1648.readDepth = !!i1649[9]
  i1648.isCreatedByShaderGraph = !!i1649[10]
  i1648.disableBatching = !!i1649[11]
  i1648.compiled = !!i1649[12]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1663 = data
  i1662.shaderName = i1663[0]
  i1662.errorMessage = i1663[1]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1666 = root || new pc.UnityShaderPass()
  var i1667 = data
  i1666.id = i1667[0]
  i1666.subShaderIndex = i1667[1]
  i1666.name = i1667[2]
  i1666.passType = i1667[3]
  i1666.grabPassTextureName = i1667[4]
  i1666.usePass = !!i1667[5]
  i1666.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1667[6], i1666.zTest)
  i1666.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1667[7], i1666.zWrite)
  i1666.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1667[8], i1666.culling)
  i1666.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1667[9], i1666.blending)
  i1666.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1667[10], i1666.alphaBlending)
  i1666.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1667[11], i1666.colorWriteMask)
  i1666.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1667[12], i1666.offsetUnits)
  i1666.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1667[13], i1666.offsetFactor)
  i1666.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1667[14], i1666.stencilRef)
  i1666.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1667[15], i1666.stencilReadMask)
  i1666.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1667[16], i1666.stencilWriteMask)
  i1666.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1667[17], i1666.stencilOp)
  i1666.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1667[18], i1666.stencilOpFront)
  i1666.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1667[19], i1666.stencilOpBack)
  var i1669 = i1667[20]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1669[i + 0]) );
  }
  i1666.tags = i1668
  var i1671 = i1667[21]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( i1671[i + 0] );
  }
  i1666.passDefinedKeywords = i1670
  var i1673 = i1667[22]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1673[i + 0]) );
  }
  i1666.passDefinedKeywordGroups = i1672
  var i1675 = i1667[23]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1675[i + 0]) );
  }
  i1666.variants = i1674
  var i1677 = i1667[24]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1677[i + 0]) );
  }
  i1666.excludedVariants = i1676
  i1666.hasDepthReader = !!i1667[25]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1679 = data
  i1678.val = i1679[0]
  i1678.name = i1679[1]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1681 = data
  i1680.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1681[0], i1680.src)
  i1680.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1681[1], i1680.dst)
  i1680.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1681[2], i1680.op)
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1683 = data
  i1682.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1683[0], i1682.pass)
  i1682.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1683[1], i1682.fail)
  i1682.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1683[2], i1682.zFail)
  i1682.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1683[3], i1682.comp)
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1687 = data
  i1686.name = i1687[0]
  i1686.value = i1687[1]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1691 = data
  var i1693 = i1691[0]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( i1693[i + 0] );
  }
  i1690.keywords = i1692
  i1690.hasDiscard = !!i1691[1]
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1697 = data
  i1696.passId = i1697[0]
  i1696.subShaderIndex = i1697[1]
  var i1699 = i1697[2]
  var i1698 = []
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.push( i1699[i + 0] );
  }
  i1696.keywords = i1698
  i1696.vertexProgram = i1697[3]
  i1696.fragmentProgram = i1697[4]
  i1696.exportedForWebGl2 = !!i1697[5]
  i1696.readDepth = !!i1697[6]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1703 = data
  request.r(i1703[0], i1703[1], 0, i1702, 'shader')
  i1702.pass = i1703[2]
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1707 = data
  i1706.name = i1707[0]
  i1706.type = i1707[1]
  i1706.value = new pc.Vec4( i1707[2], i1707[3], i1707[4], i1707[5] )
  i1706.textureValue = i1707[6]
  i1706.shaderPropertyFlag = i1707[7]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1709 = data
  i1708.name = i1709[0]
  request.r(i1709[1], i1709[2], 0, i1708, 'texture')
  i1708.aabb = i1709[3]
  i1708.vertices = i1709[4]
  i1708.triangles = i1709[5]
  i1708.textureRect = UnityEngine.Rect.MinMaxRect(i1709[6], i1709[7], i1709[8], i1709[9])
  i1708.packedRect = UnityEngine.Rect.MinMaxRect(i1709[10], i1709[11], i1709[12], i1709[13])
  i1708.border = new pc.Vec4( i1709[14], i1709[15], i1709[16], i1709[17] )
  i1708.transparency = i1709[18]
  i1708.bounds = i1709[19]
  i1708.pixelsPerUnit = i1709[20]
  i1708.textureWidth = i1709[21]
  i1708.textureHeight = i1709[22]
  i1708.nativeSize = new pc.Vec2( i1709[23], i1709[24] )
  i1708.pivot = new pc.Vec2( i1709[25], i1709[26] )
  i1708.textureRectOffset = new pc.Vec2( i1709[27], i1709[28] )
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1711 = data
  i1710.name = i1711[0]
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1713 = data
  i1712.name = i1713[0]
  i1712.ascent = i1713[1]
  i1712.originalLineHeight = i1713[2]
  i1712.fontSize = i1713[3]
  var i1715 = i1713[4]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1715[i + 0]) );
  }
  i1712.characterInfo = i1714
  request.r(i1713[5], i1713[6], 0, i1712, 'texture')
  i1712.originalFontSize = i1713[7]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1719 = data
  i1718.index = i1719[0]
  i1718.advance = i1719[1]
  i1718.bearing = i1719[2]
  i1718.glyphWidth = i1719[3]
  i1718.glyphHeight = i1719[4]
  i1718.minX = i1719[5]
  i1718.maxX = i1719[6]
  i1718.minY = i1719[7]
  i1718.maxY = i1719[8]
  i1718.uvBottomLeftX = i1719[9]
  i1718.uvBottomLeftY = i1719[10]
  i1718.uvBottomRightX = i1719[11]
  i1718.uvBottomRightY = i1719[12]
  i1718.uvTopLeftX = i1719[13]
  i1718.uvTopLeftY = i1719[14]
  i1718.uvTopRightX = i1719[15]
  i1718.uvTopRightY = i1719[16]
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1721 = data
  i1720.name = i1721[0]
  i1720.bytes64 = i1721[1]
  i1720.data = i1721[2]
  return i1720
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1722 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1723 = data
  var i1725 = i1723[0]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 2) {
  request.r(i1725[i + 0], i1725[i + 1], 2, i1724, '')
  }
  i1722.atlasAssets = i1724
  i1722.scale = i1723[1]
  request.r(i1723[2], i1723[3], 0, i1722, 'skeletonJSON')
  i1722.isUpgradingBlendModeMaterials = !!i1723[4]
  i1722.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1723[5], i1722.blendModeMaterials)
  var i1727 = i1723[6]
  var i1726 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1727.length; i += 2) {
  request.r(i1727[i + 0], i1727[i + 1], 1, i1726, '')
  }
  i1722.skeletonDataModifiers = i1726
  var i1729 = i1723[7]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( i1729[i + 0] );
  }
  i1722.fromAnimation = i1728
  var i1731 = i1723[8]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( i1731[i + 0] );
  }
  i1722.toAnimation = i1730
  i1722.duration = i1723[9]
  i1722.defaultMix = i1723[10]
  request.r(i1723[11], i1723[12], 0, i1722, 'controller')
  return i1722
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1734 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1735 = data
  i1734.applyAdditiveMaterial = !!i1735[0]
  var i1737 = i1735[1]
  var i1736 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1737.length; i += 1) {
    i1736.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1737[i + 0]));
  }
  i1734.additiveMaterials = i1736
  var i1739 = i1735[2]
  var i1738 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1739.length; i += 1) {
    i1738.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1739[i + 0]));
  }
  i1734.multiplyMaterials = i1738
  var i1741 = i1735[3]
  var i1740 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1741.length; i += 1) {
    i1740.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1741[i + 0]));
  }
  i1734.screenMaterials = i1740
  i1734.requiresBlendModeMaterials = !!i1735[4]
  return i1734
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1744 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1745 = data
  i1744.pageName = i1745[0]
  request.r(i1745[1], i1745[2], 0, i1744, 'material')
  return i1744
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1748 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1749 = data
  request.r(i1749[0], i1749[1], 0, i1748, 'atlasFile')
  var i1751 = i1749[2]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 2) {
  request.r(i1751[i + 0], i1751[i + 1], 2, i1750, '')
  }
  i1748.materials = i1750
  i1748.textureLoadingMode = i1749[3]
  request.r(i1749[4], i1749[5], 0, i1748, 'onDemandTextureLoader')
  return i1748
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1752 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1753 = data
  request.r(i1753[0], i1753[1], 0, i1752, 'atlas')
  i1752.normalStyle = i1753[2]
  i1752.normalSpacingOffset = i1753[3]
  i1752.boldStyle = i1753[4]
  i1752.boldSpacing = i1753[5]
  i1752.italicStyle = i1753[6]
  i1752.tabSize = i1753[7]
  i1752.hashCode = i1753[8]
  request.r(i1753[9], i1753[10], 0, i1752, 'material')
  i1752.materialHashCode = i1753[11]
  i1752.m_Version = i1753[12]
  i1752.m_SourceFontFileGUID = i1753[13]
  request.r(i1753[14], i1753[15], 0, i1752, 'm_SourceFontFile_EditorRef')
  request.r(i1753[16], i1753[17], 0, i1752, 'm_SourceFontFile')
  i1752.m_AtlasPopulationMode = i1753[18]
  i1752.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1753[19], i1752.m_FaceInfo)
  var i1755 = i1753[20]
  var i1754 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.add(request.d('UnityEngine.TextCore.Glyph', i1755[i + 0]));
  }
  i1752.m_GlyphTable = i1754
  var i1757 = i1753[21]
  var i1756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.add(request.d('TMPro.TMP_Character', i1757[i + 0]));
  }
  i1752.m_CharacterTable = i1756
  var i1759 = i1753[22]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 2) {
  request.r(i1759[i + 0], i1759[i + 1], 2, i1758, '')
  }
  i1752.m_AtlasTextures = i1758
  i1752.m_AtlasTextureIndex = i1753[23]
  i1752.m_IsMultiAtlasTexturesEnabled = !!i1753[24]
  i1752.m_ClearDynamicDataOnBuild = !!i1753[25]
  var i1761 = i1753[26]
  var i1760 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.add(request.d('UnityEngine.TextCore.GlyphRect', i1761[i + 0]));
  }
  i1752.m_UsedGlyphRects = i1760
  var i1763 = i1753[27]
  var i1762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.add(request.d('UnityEngine.TextCore.GlyphRect', i1763[i + 0]));
  }
  i1752.m_FreeGlyphRects = i1762
  i1752.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1753[28], i1752.m_fontInfo)
  i1752.m_AtlasWidth = i1753[29]
  i1752.m_AtlasHeight = i1753[30]
  i1752.m_AtlasPadding = i1753[31]
  i1752.m_AtlasRenderMode = i1753[32]
  var i1765 = i1753[33]
  var i1764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.add(request.d('TMPro.TMP_Glyph', i1765[i + 0]));
  }
  i1752.m_glyphInfoList = i1764
  i1752.m_KerningTable = request.d('TMPro.KerningTable', i1753[34], i1752.m_KerningTable)
  i1752.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1753[35], i1752.m_FontFeatureTable)
  var i1767 = i1753[36]
  var i1766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1767.length; i += 2) {
  request.r(i1767[i + 0], i1767[i + 1], 1, i1766, '')
  }
  i1752.fallbackFontAssets = i1766
  var i1769 = i1753[37]
  var i1768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1769.length; i += 2) {
  request.r(i1769[i + 0], i1769[i + 1], 1, i1768, '')
  }
  i1752.m_FallbackFontAssetTable = i1768
  i1752.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1753[38], i1752.m_CreationSettings)
  var i1771 = i1753[39]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('TMPro.TMP_FontWeightPair', i1771[i + 0]) );
  }
  i1752.m_FontWeightTable = i1770
  var i1773 = i1753[40]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('TMPro.TMP_FontWeightPair', i1773[i + 0]) );
  }
  i1752.fontWeights = i1772
  return i1752
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1774 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1775 = data
  i1774.m_FaceIndex = i1775[0]
  i1774.m_FamilyName = i1775[1]
  i1774.m_StyleName = i1775[2]
  i1774.m_PointSize = i1775[3]
  i1774.m_Scale = i1775[4]
  i1774.m_UnitsPerEM = i1775[5]
  i1774.m_LineHeight = i1775[6]
  i1774.m_AscentLine = i1775[7]
  i1774.m_CapLine = i1775[8]
  i1774.m_MeanLine = i1775[9]
  i1774.m_Baseline = i1775[10]
  i1774.m_DescentLine = i1775[11]
  i1774.m_SuperscriptOffset = i1775[12]
  i1774.m_SuperscriptSize = i1775[13]
  i1774.m_SubscriptOffset = i1775[14]
  i1774.m_SubscriptSize = i1775[15]
  i1774.m_UnderlineOffset = i1775[16]
  i1774.m_UnderlineThickness = i1775[17]
  i1774.m_StrikethroughOffset = i1775[18]
  i1774.m_StrikethroughThickness = i1775[19]
  i1774.m_TabWidth = i1775[20]
  return i1774
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1778 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1779 = data
  i1778.m_Index = i1779[0]
  i1778.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1779[1], i1778.m_Metrics)
  i1778.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1779[2], i1778.m_GlyphRect)
  i1778.m_Scale = i1779[3]
  i1778.m_AtlasIndex = i1779[4]
  i1778.m_ClassDefinitionType = i1779[5]
  return i1778
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1780 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1781 = data
  i1780.m_Width = i1781[0]
  i1780.m_Height = i1781[1]
  i1780.m_HorizontalBearingX = i1781[2]
  i1780.m_HorizontalBearingY = i1781[3]
  i1780.m_HorizontalAdvance = i1781[4]
  return i1780
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1782 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1783 = data
  i1782.m_X = i1783[0]
  i1782.m_Y = i1783[1]
  i1782.m_Width = i1783[2]
  i1782.m_Height = i1783[3]
  return i1782
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1786 = root || request.c( 'TMPro.TMP_Character' )
  var i1787 = data
  i1786.m_ElementType = i1787[0]
  i1786.m_Unicode = i1787[1]
  i1786.m_GlyphIndex = i1787[2]
  i1786.m_Scale = i1787[3]
  return i1786
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1792 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1793 = data
  i1792.Name = i1793[0]
  i1792.PointSize = i1793[1]
  i1792.Scale = i1793[2]
  i1792.CharacterCount = i1793[3]
  i1792.LineHeight = i1793[4]
  i1792.Baseline = i1793[5]
  i1792.Ascender = i1793[6]
  i1792.CapHeight = i1793[7]
  i1792.Descender = i1793[8]
  i1792.CenterLine = i1793[9]
  i1792.SuperscriptOffset = i1793[10]
  i1792.SubscriptOffset = i1793[11]
  i1792.SubSize = i1793[12]
  i1792.Underline = i1793[13]
  i1792.UnderlineThickness = i1793[14]
  i1792.strikethrough = i1793[15]
  i1792.strikethroughThickness = i1793[16]
  i1792.TabWidth = i1793[17]
  i1792.Padding = i1793[18]
  i1792.AtlasWidth = i1793[19]
  i1792.AtlasHeight = i1793[20]
  return i1792
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1796 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1797 = data
  i1796.id = i1797[0]
  i1796.x = i1797[1]
  i1796.y = i1797[2]
  i1796.width = i1797[3]
  i1796.height = i1797[4]
  i1796.xOffset = i1797[5]
  i1796.yOffset = i1797[6]
  i1796.xAdvance = i1797[7]
  i1796.scale = i1797[8]
  return i1796
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1798 = root || request.c( 'TMPro.KerningTable' )
  var i1799 = data
  var i1801 = i1799[0]
  var i1800 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.add(request.d('TMPro.KerningPair', i1801[i + 0]));
  }
  i1798.kerningPairs = i1800
  return i1798
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1804 = root || request.c( 'TMPro.KerningPair' )
  var i1805 = data
  i1804.xOffset = i1805[0]
  i1804.m_FirstGlyph = i1805[1]
  i1804.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1805[2], i1804.m_FirstGlyphAdjustments)
  i1804.m_SecondGlyph = i1805[3]
  i1804.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1805[4], i1804.m_SecondGlyphAdjustments)
  i1804.m_IgnoreSpacingAdjustments = !!i1805[5]
  return i1804
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1806 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1807 = data
  var i1809 = i1807[0]
  var i1808 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1809[i + 0]));
  }
  i1806.m_GlyphPairAdjustmentRecords = i1808
  return i1806
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1812 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1813 = data
  i1812.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1813[0], i1812.m_FirstAdjustmentRecord)
  i1812.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1813[1], i1812.m_SecondAdjustmentRecord)
  i1812.m_FeatureLookupFlags = i1813[2]
  return i1812
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1816 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1817 = data
  i1816.sourceFontFileName = i1817[0]
  i1816.sourceFontFileGUID = i1817[1]
  i1816.pointSizeSamplingMode = i1817[2]
  i1816.pointSize = i1817[3]
  i1816.padding = i1817[4]
  i1816.packingMode = i1817[5]
  i1816.atlasWidth = i1817[6]
  i1816.atlasHeight = i1817[7]
  i1816.characterSetSelectionMode = i1817[8]
  i1816.characterSequence = i1817[9]
  i1816.referencedFontAssetGUID = i1817[10]
  i1816.referencedTextAssetGUID = i1817[11]
  i1816.fontStyle = i1817[12]
  i1816.fontStyleModifier = i1817[13]
  i1816.renderMode = i1817[14]
  i1816.includeFontFeatures = !!i1817[15]
  return i1816
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1820 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1821 = data
  request.r(i1821[0], i1821[1], 0, i1820, 'regularTypeface')
  request.r(i1821[2], i1821[3], 0, i1820, 'italicTypeface')
  return i1820
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1822 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1823 = data
  i1822.useSafeMode = !!i1823[0]
  i1822.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1823[1], i1822.safeModeOptions)
  i1822.timeScale = i1823[2]
  i1822.unscaledTimeScale = i1823[3]
  i1822.useSmoothDeltaTime = !!i1823[4]
  i1822.maxSmoothUnscaledTime = i1823[5]
  i1822.rewindCallbackMode = i1823[6]
  i1822.showUnityEditorReport = !!i1823[7]
  i1822.logBehaviour = i1823[8]
  i1822.drawGizmos = !!i1823[9]
  i1822.defaultRecyclable = !!i1823[10]
  i1822.defaultAutoPlay = i1823[11]
  i1822.defaultUpdateType = i1823[12]
  i1822.defaultTimeScaleIndependent = !!i1823[13]
  i1822.defaultEaseType = i1823[14]
  i1822.defaultEaseOvershootOrAmplitude = i1823[15]
  i1822.defaultEasePeriod = i1823[16]
  i1822.defaultAutoKill = !!i1823[17]
  i1822.defaultLoopType = i1823[18]
  i1822.debugMode = !!i1823[19]
  i1822.debugStoreTargetId = !!i1823[20]
  i1822.showPreviewPanel = !!i1823[21]
  i1822.storeSettingsLocation = i1823[22]
  i1822.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1823[23], i1822.modules)
  i1822.createASMDEF = !!i1823[24]
  i1822.showPlayingTweens = !!i1823[25]
  i1822.showPausedTweens = !!i1823[26]
  return i1822
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1824 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1825 = data
  i1824.logBehaviour = i1825[0]
  i1824.nestedTweenFailureBehaviour = i1825[1]
  return i1824
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1826 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1827 = data
  i1826.showPanel = !!i1827[0]
  i1826.audioEnabled = !!i1827[1]
  i1826.physicsEnabled = !!i1827[2]
  i1826.physics2DEnabled = !!i1827[3]
  i1826.spriteEnabled = !!i1827[4]
  i1826.uiEnabled = !!i1827[5]
  i1826.textMeshProEnabled = !!i1827[6]
  i1826.tk2DEnabled = !!i1827[7]
  i1826.deAudioEnabled = !!i1827[8]
  i1826.deUnityExtendedEnabled = !!i1827[9]
  i1826.epoOutlineEnabled = !!i1827[10]
  return i1826
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1828 = root || request.c( 'TMPro.TMP_Settings' )
  var i1829 = data
  i1828.m_enableWordWrapping = !!i1829[0]
  i1828.m_enableKerning = !!i1829[1]
  i1828.m_enableExtraPadding = !!i1829[2]
  i1828.m_enableTintAllSprites = !!i1829[3]
  i1828.m_enableParseEscapeCharacters = !!i1829[4]
  i1828.m_EnableRaycastTarget = !!i1829[5]
  i1828.m_GetFontFeaturesAtRuntime = !!i1829[6]
  i1828.m_missingGlyphCharacter = i1829[7]
  i1828.m_warningsDisabled = !!i1829[8]
  request.r(i1829[9], i1829[10], 0, i1828, 'm_defaultFontAsset')
  i1828.m_defaultFontAssetPath = i1829[11]
  i1828.m_defaultFontSize = i1829[12]
  i1828.m_defaultAutoSizeMinRatio = i1829[13]
  i1828.m_defaultAutoSizeMaxRatio = i1829[14]
  i1828.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1829[15], i1829[16] )
  i1828.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1829[17], i1829[18] )
  i1828.m_autoSizeTextContainer = !!i1829[19]
  i1828.m_IsTextObjectScaleStatic = !!i1829[20]
  var i1831 = i1829[21]
  var i1830 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1831.length; i += 2) {
  request.r(i1831[i + 0], i1831[i + 1], 1, i1830, '')
  }
  i1828.m_fallbackFontAssets = i1830
  i1828.m_matchMaterialPreset = !!i1829[22]
  request.r(i1829[23], i1829[24], 0, i1828, 'm_defaultSpriteAsset')
  i1828.m_defaultSpriteAssetPath = i1829[25]
  i1828.m_enableEmojiSupport = !!i1829[26]
  i1828.m_MissingCharacterSpriteUnicode = i1829[27]
  i1828.m_defaultColorGradientPresetsPath = i1829[28]
  request.r(i1829[29], i1829[30], 0, i1828, 'm_defaultStyleSheet')
  i1828.m_StyleSheetsResourcePath = i1829[31]
  request.r(i1829[32], i1829[33], 0, i1828, 'm_leadingCharacters')
  request.r(i1829[34], i1829[35], 0, i1828, 'm_followingCharacters')
  i1828.m_UseModernHangulLineBreakingRules = !!i1829[36]
  return i1828
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1832 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1833 = data
  request.r(i1833[0], i1833[1], 0, i1832, 'spriteSheet')
  var i1835 = i1833[2]
  var i1834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.add(request.d('TMPro.TMP_Sprite', i1835[i + 0]));
  }
  i1832.spriteInfoList = i1834
  var i1837 = i1833[3]
  var i1836 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1837.length; i += 2) {
  request.r(i1837[i + 0], i1837[i + 1], 1, i1836, '')
  }
  i1832.fallbackSpriteAssets = i1836
  i1832.hashCode = i1833[4]
  request.r(i1833[5], i1833[6], 0, i1832, 'material')
  i1832.materialHashCode = i1833[7]
  i1832.m_Version = i1833[8]
  i1832.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1833[9], i1832.m_FaceInfo)
  var i1839 = i1833[10]
  var i1838 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.add(request.d('TMPro.TMP_SpriteCharacter', i1839[i + 0]));
  }
  i1832.m_SpriteCharacterTable = i1838
  var i1841 = i1833[11]
  var i1840 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.add(request.d('TMPro.TMP_SpriteGlyph', i1841[i + 0]));
  }
  i1832.m_SpriteGlyphTable = i1840
  return i1832
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1844 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1845 = data
  i1844.name = i1845[0]
  i1844.hashCode = i1845[1]
  i1844.unicode = i1845[2]
  i1844.pivot = new pc.Vec2( i1845[3], i1845[4] )
  request.r(i1845[5], i1845[6], 0, i1844, 'sprite')
  i1844.id = i1845[7]
  i1844.x = i1845[8]
  i1844.y = i1845[9]
  i1844.width = i1845[10]
  i1844.height = i1845[11]
  i1844.xOffset = i1845[12]
  i1844.yOffset = i1845[13]
  i1844.xAdvance = i1845[14]
  i1844.scale = i1845[15]
  return i1844
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1850 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1851 = data
  i1850.m_Name = i1851[0]
  i1850.m_HashCode = i1851[1]
  i1850.m_ElementType = i1851[2]
  i1850.m_Unicode = i1851[3]
  i1850.m_GlyphIndex = i1851[4]
  i1850.m_Scale = i1851[5]
  return i1850
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1854 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1855 = data
  request.r(i1855[0], i1855[1], 0, i1854, 'sprite')
  i1854.m_Index = i1855[2]
  i1854.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1855[3], i1854.m_Metrics)
  i1854.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1855[4], i1854.m_GlyphRect)
  i1854.m_Scale = i1855[5]
  i1854.m_AtlasIndex = i1855[6]
  i1854.m_ClassDefinitionType = i1855[7]
  return i1854
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1856 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1857 = data
  var i1859 = i1857[0]
  var i1858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.add(request.d('TMPro.TMP_Style', i1859[i + 0]));
  }
  i1856.m_StyleList = i1858
  return i1856
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1862 = root || request.c( 'TMPro.TMP_Style' )
  var i1863 = data
  i1862.m_Name = i1863[0]
  i1862.m_HashCode = i1863[1]
  i1862.m_OpeningDefinition = i1863[2]
  i1862.m_ClosingDefinition = i1863[3]
  i1862.m_OpeningTagArray = i1863[4]
  i1862.m_ClosingTagArray = i1863[5]
  i1862.m_OpeningTagUnicodeArray = i1863[6]
  i1862.m_ClosingTagUnicodeArray = i1863[7]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1865 = data
  var i1867 = i1865[0]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1867[i + 0]) );
  }
  i1864.files = i1866
  i1864.componentToPrefabIds = i1865[1]
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1871 = data
  i1870.path = i1871[0]
  request.r(i1871[1], i1871[2], 0, i1870, 'unityObject')
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1873 = data
  var i1875 = i1873[0]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1875[i + 0]) );
  }
  i1872.scriptsExecutionOrder = i1874
  var i1877 = i1873[1]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1877[i + 0]) );
  }
  i1872.sortingLayers = i1876
  var i1879 = i1873[2]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1879[i + 0]) );
  }
  i1872.cullingLayers = i1878
  i1872.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1873[3], i1872.timeSettings)
  i1872.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1873[4], i1872.physicsSettings)
  i1872.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1873[5], i1872.physics2DSettings)
  i1872.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1873[6], i1872.qualitySettings)
  i1872.enableRealtimeShadows = !!i1873[7]
  i1872.enableAutoInstancing = !!i1873[8]
  i1872.enableStaticBatching = !!i1873[9]
  i1872.enableDynamicBatching = !!i1873[10]
  i1872.lightmapEncodingQuality = i1873[11]
  i1872.desiredColorSpace = i1873[12]
  var i1881 = i1873[13]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( i1881[i + 0] );
  }
  i1872.allTags = i1880
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1885 = data
  i1884.name = i1885[0]
  i1884.value = i1885[1]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1889 = data
  i1888.id = i1889[0]
  i1888.name = i1889[1]
  i1888.value = i1889[2]
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1893 = data
  i1892.id = i1893[0]
  i1892.name = i1893[1]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1895 = data
  i1894.fixedDeltaTime = i1895[0]
  i1894.maximumDeltaTime = i1895[1]
  i1894.timeScale = i1895[2]
  i1894.maximumParticleTimestep = i1895[3]
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1897 = data
  i1896.gravity = new pc.Vec3( i1897[0], i1897[1], i1897[2] )
  i1896.defaultSolverIterations = i1897[3]
  i1896.bounceThreshold = i1897[4]
  i1896.autoSyncTransforms = !!i1897[5]
  i1896.autoSimulation = !!i1897[6]
  var i1899 = i1897[7]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1899[i + 0]) );
  }
  i1896.collisionMatrix = i1898
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1903 = data
  i1902.enabled = !!i1903[0]
  i1902.layerId = i1903[1]
  i1902.otherLayerId = i1903[2]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1905 = data
  request.r(i1905[0], i1905[1], 0, i1904, 'material')
  i1904.gravity = new pc.Vec2( i1905[2], i1905[3] )
  i1904.positionIterations = i1905[4]
  i1904.velocityIterations = i1905[5]
  i1904.velocityThreshold = i1905[6]
  i1904.maxLinearCorrection = i1905[7]
  i1904.maxAngularCorrection = i1905[8]
  i1904.maxTranslationSpeed = i1905[9]
  i1904.maxRotationSpeed = i1905[10]
  i1904.baumgarteScale = i1905[11]
  i1904.baumgarteTOIScale = i1905[12]
  i1904.timeToSleep = i1905[13]
  i1904.linearSleepTolerance = i1905[14]
  i1904.angularSleepTolerance = i1905[15]
  i1904.defaultContactOffset = i1905[16]
  i1904.autoSimulation = !!i1905[17]
  i1904.queriesHitTriggers = !!i1905[18]
  i1904.queriesStartInColliders = !!i1905[19]
  i1904.callbacksOnDisable = !!i1905[20]
  i1904.reuseCollisionCallbacks = !!i1905[21]
  i1904.autoSyncTransforms = !!i1905[22]
  var i1907 = i1905[23]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1907[i + 0]) );
  }
  i1904.collisionMatrix = i1906
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1911 = data
  i1910.enabled = !!i1911[0]
  i1910.layerId = i1911[1]
  i1910.otherLayerId = i1911[2]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1913 = data
  var i1915 = i1913[0]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1915[i + 0]) );
  }
  i1912.qualityLevels = i1914
  var i1917 = i1913[1]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( i1917[i + 0] );
  }
  i1912.names = i1916
  i1912.shadows = i1913[2]
  i1912.anisotropicFiltering = i1913[3]
  i1912.antiAliasing = i1913[4]
  i1912.lodBias = i1913[5]
  i1912.shadowCascades = i1913[6]
  i1912.shadowDistance = i1913[7]
  i1912.shadowmaskMode = i1913[8]
  i1912.shadowProjection = i1913[9]
  i1912.shadowResolution = i1913[10]
  i1912.softParticles = !!i1913[11]
  i1912.softVegetation = !!i1913[12]
  i1912.activeColorSpace = i1913[13]
  i1912.desiredColorSpace = i1913[14]
  i1912.masterTextureLimit = i1913[15]
  i1912.maxQueuedFrames = i1913[16]
  i1912.particleRaycastBudget = i1913[17]
  i1912.pixelLightCount = i1913[18]
  i1912.realtimeReflectionProbes = !!i1913[19]
  i1912.shadowCascade2Split = i1913[20]
  i1912.shadowCascade4Split = new pc.Vec3( i1913[21], i1913[22], i1913[23] )
  i1912.streamingMipmapsActive = !!i1913[24]
  i1912.vSyncCount = i1913[25]
  i1912.asyncUploadBufferSize = i1913[26]
  i1912.asyncUploadTimeSlice = i1913[27]
  i1912.billboardsFaceCameraPosition = !!i1913[28]
  i1912.shadowNearPlaneOffset = i1913[29]
  i1912.streamingMipmapsMemoryBudget = i1913[30]
  i1912.maximumLODLevel = i1913[31]
  i1912.streamingMipmapsAddAllCameras = !!i1913[32]
  i1912.streamingMipmapsMaxLevelReduction = i1913[33]
  i1912.streamingMipmapsRenderersPerFrame = i1913[34]
  i1912.resolutionScalingFixedDPIFactor = i1913[35]
  i1912.streamingMipmapsMaxFileIORequests = i1913[36]
  i1912.currentQualityLevel = i1913[37]
  return i1912
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1920 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1921 = data
  request.r(i1921[0], i1921[1], 0, i1920, 'm_ObjectArgument')
  i1920.m_ObjectArgumentAssemblyTypeName = i1921[2]
  i1920.m_IntArgument = i1921[3]
  i1920.m_FloatArgument = i1921[4]
  i1920.m_StringArgument = i1921[5]
  i1920.m_BoolArgument = !!i1921[6]
  return i1920
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1922 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1923 = data
  i1922.xPlacement = i1923[0]
  i1922.yPlacement = i1923[1]
  i1922.xAdvance = i1923[2]
  i1922.yAdvance = i1923[3]
  return i1922
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1924 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1925 = data
  i1924.m_GlyphIndex = i1925[0]
  i1924.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1925[1], i1924.m_GlyphValueRecord)
  return i1924
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1926 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1927 = data
  i1926.m_XPlacement = i1927[0]
  i1926.m_YPlacement = i1927[1]
  i1926.m_XAdvance = i1927[2]
  i1926.m_YAdvance = i1927[3]
  return i1926
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[3],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[52],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[3],"74":[75],"76":[77],"78":[77],"9":[8],"79":[80],"81":[82],"83":[80],"84":[8],"85":[8],"11":[9],"18":[19,8],"86":[8],"10":[9],"87":[8],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"32":[8],"94":[8],"16":[19,8],"95":[8],"96":[8],"97":[8],"98":[8],"99":[19,8],"100":[8],"101":[6],"102":[6],"7":[6],"103":[6],"104":[3],"105":[3],"106":[107],"108":[3],"109":[110],"111":[8],"112":[19,8],"113":[75],"25":[19,8],"114":[115,75],"116":[75],"117":[75,118],"119":[52],"120":[60],"121":[110],"122":[123],"124":[8],"125":[75,8],"17":[8,19],"126":[8],"127":[19,8],"128":[75],"129":[19,8],"130":[8],"131":[80]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.PolygonCollider2D","DropZone","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.CanvasGroup","DraggableItem","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "162.1";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BEQ_V16_NgocNDL_AnhPD";

Deserializers.lunaAppID = "29138";

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

Deserializers.buildID = "e95a07dd-c031-4410-8f58-001898300f31";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

